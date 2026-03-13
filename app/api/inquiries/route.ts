import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { rateLimit } from '@/lib/rateLimit'
import process from 'process'
import fs from 'node:fs'
import path from 'node:path'
import { cookies } from 'next/headers'

type Inquiry = {
  id?: string
  date?: string
  type: 'Contact' | 'Free Analysis' | 'Lead Generation' | 'Outreach Service' | 'Sales Outsourcing' | 'Partnership Inquiry'
  name: string
  company?: string
  email: string
  phone?: string
  message?: string
  productName?: string
  quantity?: string
  incoterms?: string
  targetCountry?: string
  targetMarket?: string
  currentChannels?: string
  goals?: string
  topic?: string
  integrationType?: string
  details?: string
  scope?: string
  budget?: string
  timeline?: string
}

export async function POST(req: Request) {
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0] || 'unknown'
  const rl = rateLimit(ip, 10, 60_000)
  if (!rl.ok) return new Response('Too Many Requests', { status: 429 })
  const body = await req.json()
  if (process.env.RECAPTCHA_SECRET) {
    const token = body.recaptchaToken
    if (!token) return new Response('Captcha Required', { status: 400 })
    const vr = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: process.env.RECAPTCHA_SECRET, response: token })
    }).then(r => r.json()).catch(() => null)
    if (!vr || !vr.success) return new Response('Captcha Failed', { status: 400 })
  }
  if (body.website) return Response.json({ ok: true })
  const type = body.type
  if (!['Contact', 'Free Analysis', 'Lead Generation', 'Outreach Service', 'Sales Outsourcing', 'Partnership Inquiry'].includes(type)) return new Response('Bad Request', { status: 400 })
  // Phone is optional to maximize conversion
  if (!body.name || !body.email) return new Response('Bad Request', { status: 400 })
  const item: Inquiry = {
    type: body.type,
    name: body.name,
    company: body.company,
    email: body.email,
    phone: body.phone,
    message: body.message,
    productName: body.productName,
    quantity: body.quantity,
    incoterms: body.incoterms,
    targetCountry: body.targetCountry,
    targetMarket: body.targetMarket,
    currentChannels: body.currentChannels,
    goals: body.goals,
    topic: body.topic,
    integrationType: body.integrationType,
    details: body.details,
    scope: body.scope,
    budget: body.budget,
    timeline: body.timeline
  }
  
  const reqId = `REQ-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
  const result = await persist(item)
  const meta = collectMeta(req)
  const id = result.id || `TMP-${Date.now()}`
  
  try {
    await notify(item, meta, id, reqId)
  } catch (err) {
    // Email failed but data persisted
    console.error("Email send failed", err)
  }
  return Response.json({ ok: true, id })
}

export async function GET() {
  const cookieStore = cookies()
  const adminCookie = cookieStore.get('admin')
  
  if (!adminCookie) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
      const filePath = path.join(process.cwd(), 'data/inquiries.json')
      if (!fs.existsSync(filePath)) return NextResponse.json([])
      const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
      return NextResponse.json(data)
  } catch (e) {
      return NextResponse.json([])
  }
}

async function persist(item: Inquiry): Promise<{ ok: boolean; id?: string }> {
  try {
    const filePath = path.join(process.cwd(), 'data/inquiries.json')
    let currentData: Inquiry[] = []
    
    // Ensure data directory exists
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

    if (fs.existsSync(filePath)) {
       const fileContent = fs.readFileSync(filePath, 'utf-8')
       try {
         currentData = JSON.parse(fileContent)
       } catch (e) {
         currentData = []
       }
    }
    
    const newRecord: Inquiry = {
        id: `REQ-${Date.now()}`,
        date: new Date().toISOString(),
        ...item
    }
    
    // Add to top
    currentData.unshift(newRecord)
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2))
    return { ok: true, id: newRecord.id }
  } catch (e) {
     console.error('[inquiries.persist] File write error:', e)
     return { ok: false }
  }
}

function collectMeta(req: Request) {
  const ref = req.headers.get('referer') || ''
  const lang = req.headers.get('accept-language') || ''
  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0] || 'unknown'
  const url = new URL(ref || 'http://localhost')
  const utm = Object.fromEntries([...url.searchParams.entries()].filter(([k]) => k.startsWith('utm_')))
  return { ref, lang, ip, utm, time: new Date().toISOString() }
}

async function notify(item: Inquiry, meta: any, id: string, reqId?: string) {
  const url = process.env.SMTP_URL
  const host = process.env.MAIL_HOST || process.env.SMTP_HOST
  const port = Number(process.env.MAIL_PORT || process.env.SMTP_PORT || 587)
  const user = process.env.MAIL_USER || process.env.SMTP_USER
  const rawPass = process.env.MAIL_PASS || process.env.SMTP_PASS
  const pass = rawPass ? rawPass.replace(/\s+/g, '') : undefined
  
  const to = 'andy@sungene.net'
  let transporter: any
  
  if (host && user && pass) {
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // 587 = STARTTLS
      auth: { user, pass }
    })
  } else if (url) {
    transporter = nodemailer.createTransport(url)
  } else {
    // console.error('[inquiries.notify]', reqId || '', 'SMTP not configured')
    return
  }
  const subject = `新詢盤#${id} ${item.type} - ${item.name}`
  const adminText =
`新詢盤編號: ${id}
類型: ${item.type}
姓名: ${item.name}
公司: ${item.company || '-'}
Email: ${item.email}
電話: ${item.phone || '-'}
訊息: ${item.message || '-'}
擴充: ${JSON.stringify({
  productName: item.productName, quantity: item.quantity, incoterms: item.incoterms,
  targetCountry: item.targetCountry, targetMarket: item.targetMarket, currentChannels: item.currentChannels,
  goals: item.goals, topic: item.topic, integrationType: item.integrationType, details: item.details,
  scope: item.scope, budget: item.budget, timeline: item.timeline
}, null, 2)}
來源: ${meta.ref}
語系: ${meta.lang}
UTM: ${JSON.stringify(meta.utm)}
IP: ${meta.ip}
時間: ${meta.time}
`
  const fromName = process.env.MAIL_FROM || 'SunGene Export Growth Team'
  const fromAddr = user ? `"${fromName}" <${user}>` : 'no-reply@example.com'
  try {
    await transporter.sendMail({ to, from: fromAddr, subject, text: adminText, headers: { 'X-Request-ID': reqId || '' } })
  } catch (err) {
    console.error("[inquiries][sendMail] failed:", err)
  }
  // 自動回覆給客戶
  if (item.email) {
    const ackSubj = `我們已收到您的詢盤（編號 ${id}）`
    const ackText =
`您好 ${item.name}：

我們已收到您的詢盤（編號 ${id}），專員將在 1–2 個工作日內與您聯繫。
如需補充資訊，直接回覆此信即可。

此致
SunGene Export Growth Team`
    try {
      await transporter.sendMail({ to: item.email, from: fromAddr, subject: ackSubj, text: ackText, headers: { 'X-Request-ID': reqId || '' } })
    } catch {}
  }
}

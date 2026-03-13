import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const cookieStore = cookies()
  const adminCookie = cookieStore.get('admin')
  
  if (!adminCookie) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await req.json()
    
    // Basic validation
    if (!body.title || !body.content || !body.lang) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const filePath = path.join(process.cwd(), 'data/articles.json')
    let articles = []
    
    if (fs.existsSync(filePath)) {
       const fileContent = fs.readFileSync(filePath, 'utf-8')
       try {
         articles = JSON.parse(fileContent)
       } catch (e) {
         articles = []
       }
    }
    
    // Generate ID if not present
    if (!body.id) {
        body.id = body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    }
    
    // Add date if not present
    if (!body.date) {
        body.date = new Date().toISOString().split('T')[0]
    }

    articles.push(body)
    fs.writeFileSync(filePath, JSON.stringify(articles, null, 2))
    
    return NextResponse.json({ success: true, id: body.id })
  } catch (error) {
    console.error('Create article error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

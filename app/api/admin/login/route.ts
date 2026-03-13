import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const adminPassword = process.env.ADMIN_PASSWORD
    if (!adminPassword) {
      return NextResponse.json({ error: 'Admin login not configured' }, { status: 500 })
    }

    const contentType = req.headers.get('content-type') || ''
    const payload = contentType.includes('application/json') ? await req.json() : await req.text()
    const body = typeof payload === 'string' ? JSON.parse(payload || '{}') : payload
    const password = body?.password

    if (password === adminPassword) {
      const response = NextResponse.json({ success: true })
      
      // Set HttpOnly cookie
      response.cookies.set('admin', 'true', {
        path: '/',
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'strict'
      })

      return response
    }

    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  } catch (error) {
    console.error('[api.admin.login] error:', error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

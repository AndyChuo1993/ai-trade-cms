import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { SUPPORTED_LANGS } from '@/lib/i18n'

const locales = SUPPORTED_LANGS
const primaryHost = 'sungenelite.com'

function getDefaultLocaleByHost(host: string | null) {
  const hostname = (host || '').toLowerCase()

  if (hostname.includes(primaryHost)) {
    return 'zh'
  }

  return 'zh'
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const host = request.headers.get('x-forwarded-host') || request.headers.get('host')
  const hostname = (host || '').toLowerCase()
  const defaultLocale = getDefaultLocaleByHost(host)
  const pathnameWithoutLocale = pathname.replace(/^\/(zh|cn|en)(?=\/|$)/, '')

  if (
    hostname &&
    !hostname.includes('localhost') &&
    (hostname.includes('sungene.net') || hostname === `www.${primaryHost}`)
  ) {
    const redirectUrl = new URL(request.url)
    redirectUrl.host = primaryHost
    redirectUrl.protocol = 'https:'
    return NextResponse.redirect(redirectUrl, 301)
  }

  // 處理舊站 410 Gone (移除舊包裝盒網站殘留頁面)
  const gonePatterns = ['/products', '/product', '/cooperation', '/news', '/category', '/tag', '/author']
  if (gonePatterns.some(pattern => pathnameWithoutLocale.startsWith(pattern))) {
    return new NextResponse(null, { status: 410 })
  }

  const matchLang = pathname.match(new RegExp(`^\\/(${locales.join('|')})\\/`))
  const currentLang = matchLang ? matchLang[1] : defaultLocale

  if (pathnameWithoutLocale.startsWith('/about-us')) {
    return NextResponse.redirect(new URL(`/${currentLang}/about`, request.url), 301)
  }
  if (pathnameWithoutLocale.startsWith('/contact-us')) {
    return NextResponse.redirect(new URL(`/${currentLang}/contact`, request.url), 301)
  }

  if (pathname.includes('/buyer-database-building')) {
    return NextResponse.redirect(new URL(`/${currentLang}/qualified-b2b-leads`, request.url), 301)
  }
  if (pathname.includes('/buyers-list')) {
    return NextResponse.redirect(new URL(`/${currentLang}/overseas-buyer-lists`, request.url), 301)
  }
  if (pathname.includes('/distributor-network')) {
    return NextResponse.redirect(new URL(`/${currentLang}/services/distributor-development`, request.url), 301)
  }
  if (pathname.includes('/linkedin-prospecting')) {
    return NextResponse.redirect(new URL(`/${currentLang}/cold-email-outreach`, request.url), 301)
  }
  if (pathname.includes('/market-entry-strategy')) {
    return NextResponse.redirect(new URL(`/${currentLang}/export-marketing`, request.url), 301)
  }

  const normalizedPathname = pathname.replace(/^\/zh\/cn(?=\/|$)/, '/cn')
  if (normalizedPathname !== pathname) {
    return NextResponse.redirect(new URL(normalizedPathname, request.url), 308)
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url), 308)
    }

    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url),
      308
    )
  }

  const locale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  const requestHeaders = new Headers(request.headers)
  if (locale) {
    requestHeaders.set('x-lang', locale)
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}

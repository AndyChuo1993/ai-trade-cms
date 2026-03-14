import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['zh', 'en'] as const
const defaultLocale = 'zh'

function buildUrl(request: NextRequest, pathname: string) {
  const url = request.nextUrl.clone()
  url.pathname = pathname
  return url
}

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  if (pathname === '/') {
    return NextResponse.redirect(buildUrl(request, `/${defaultLocale}`), 308)
  }

  const localized = pathname.match(/^\/(zh|en)(?:\/(.*))?$/)
  if (localized) {
    const lang = localized[1] as (typeof locales)[number]
    const rest = `/${localized[2] || ''}`.replace(/\/$/, '') || '/'

    const legacyRedirects: Array<[RegExp, (match: RegExpMatchArray) => string]> = [
      [/^\/(export-lead-generation|distributor-development|export-sales-outsourcing)$/, (m) => `/${lang}/services/${m[1]}`],
      [/^\/b2b-lead-generation$/, () => `/${lang}/services/export-lead-generation`],
      [/^\/sales-outsourcing$/, () => `/${lang}/services/export-sales-outsourcing`],
      [/^\/services\/lead-generation$/, () => `/${lang}/services/export-lead-generation`],
      [/^\/services\/cold-outreach$/, () => `/${lang}/services/export-sales-outsourcing`],
      [/^\/services\/sales-outsourcing$/, () => `/${lang}/services/export-sales-outsourcing`],
      [/^\/export-outsourcing$/, () => `/${lang}/services/export-sales-outsourcing`],
      [/^\/market\/([^/]+)$/, (m) => `/${lang}/markets/${m[1]}`],
      [/^\/industry\/([^/]+)$/, (m) => `/${lang}/industries/${m[1]}`],
      [/^\/resources\/blog\/([^/]+)$/, (m) => `/${lang}/blog/${m[1]}`],
      [/^\/free-market-analysis$/, () => `/${lang}/export-market-analysis`],
    ]

    for (const [pattern, toPath] of legacyRedirects) {
      const match = rest.match(pattern)
      if (match) {
        return NextResponse.redirect(buildUrl(request, toPath(match)), 308)
      }
    }

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-lang', lang)
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  const pathnameIsMissingLocale = locales.every((locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`)

  if (pathnameIsMissingLocale) {
    const normalized = pathname.startsWith('/') ? pathname : `/${pathname}`
    const noLocaleRedirects: Array<[RegExp, (match: RegExpMatchArray) => string]> = [
      [/^\/(export-lead-generation|distributor-development|export-sales-outsourcing)$/, (m) => `/${defaultLocale}/services/${m[1]}`],
      [/^\/b2b-lead-generation$/, () => `/${defaultLocale}/services/export-lead-generation`],
      [/^\/sales-outsourcing$/, () => `/${defaultLocale}/services/export-sales-outsourcing`],
      [/^\/services\/lead-generation$/, () => `/${defaultLocale}/services/export-lead-generation`],
      [/^\/services\/cold-outreach$/, () => `/${defaultLocale}/services/export-sales-outsourcing`],
      [/^\/services\/sales-outsourcing$/, () => `/${defaultLocale}/services/export-sales-outsourcing`],
      [/^\/export-outsourcing$/, () => `/${defaultLocale}/services/export-sales-outsourcing`],
      [/^\/market\/([^/]+)$/, (m) => `/${defaultLocale}/markets/${m[1]}`],
      [/^\/industry\/([^/]+)$/, (m) => `/${defaultLocale}/industries/${m[1]}`],
      [/^\/resources\/blog\/([^/]+)$/, (m) => `/${defaultLocale}/blog/${m[1]}`],
      [/^\/free-market-analysis$/, () => `/${defaultLocale}/export-market-analysis`],
    ]

    for (const [pattern, toPath] of noLocaleRedirects) {
      const match = normalized.match(pattern)
      if (match) {
        return NextResponse.redirect(buildUrl(request, toPath(match)), 308)
      }
    }

    return NextResponse.redirect(buildUrl(request, `/${defaultLocale}${normalized === '/' ? '' : normalized}`), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}

import { Lang } from '@/lib/i18n'

const DEFAULT_SITE_URL = 'https://sungenelite.com'
const DEFAULT_LANG: Lang = 'zh'

function normalizePath(path = '') {
  if (!path) return ''
  return path.startsWith('/') ? path : `/${path}`
}

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/+$/, '')
}

export function getLocalizedUrl(lang: Lang, path = '') {
  return `${getSiteUrl()}/${lang}${normalizePath(path)}`
}

export function getLanguageAlternates(path = '') {
  const normalizedPath = normalizePath(path)
  const siteUrl = getSiteUrl()

  return {
    'zh-CN': `${siteUrl}/cn${normalizedPath}`,
    'zh-TW': `${siteUrl}/zh${normalizedPath}`,
    en: `${siteUrl}/en${normalizedPath}`,
    'x-default': `${siteUrl}/${DEFAULT_LANG}${normalizedPath}`,
  }
}

export function getAlternates(lang: Lang, path = '') {
  return {
    canonical: getLocalizedUrl(lang, path),
    languages: getLanguageAlternates(path),
  }
}

import { MetadataRoute } from 'next'
import { markets } from '@/data/markets'
import { industries } from '@/data/industries'
import { getArticles } from '@/data/articles'
import { getCases } from '@/data/cases'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sungene.com.tw'
  const langs = ['zh', 'en'] as const
  
  const routes = [
    '',
    '/services',
    '/how-it-works',
    '/case-studies',
    '/about',
    '/contact',
    '/free-market-analysis',
    '/resources',
    '/export-lead-generation',
    '/export-outsourcing',
    '/b2b-lead-generation',
    '/services/lead-generation',
    '/services/cold-outreach',
    '/services/sales-outsourcing',
    '/partners',
    '/pricing',
    '/faq',
    '/resources/export-lead-generation-checklist',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // 1. Static Routes
  routes.forEach(route => {
    langs.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  // 2. Market Pages
  markets.forEach(m => {
    langs.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}/market/${m.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  // 3. Industry Pages
  industries.forEach(i => {
    langs.forEach(lang => {
      sitemap.push({
        url: `${baseUrl}/${lang}/industry/${i.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    })
  })

  // 4. Resource Articles
  langs.forEach(lang => {
    const articles = getArticles(lang)
    articles.forEach(a => {
      sitemap.push({
        url: `${baseUrl}/${lang}/resources/${a.id}`,
        lastModified: new Date(a.date),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  // 5. Case Studies
  langs.forEach(lang => {
    const cases = getCases(lang)
    cases.forEach(c => {
      sitemap.push({
        url: `${baseUrl}/${lang}/case-studies/${c.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      })
    })
  })

  return sitemap
}

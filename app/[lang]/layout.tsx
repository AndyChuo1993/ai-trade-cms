import { ReactNode } from 'react'
import { headers } from 'next/headers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { t, Lang } from '@/lib/i18n'
import { getAlternates, getLocalizedUrl, getSiteUrl } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = (['en', 'zh', 'cn'].includes(rawLang) ? rawLang : 'zh') as Lang

  const baseUrl = getSiteUrl()

  return {
    metadataBase: new URL(baseUrl),
    title: t(lang, 'meta_home_title'),
    description: lang === 'en' 
      ? 'SunGene helps export companies develop overseas customers, build channel partnerships, and make the export development process more stable, sustainable, and deal-focused.' 
      : lang === 'cn'
      ? 'SunGene 协助外贸企业开发海外客户、建立渠道合作，并把外贸开发流程做得更稳定、更可持续、更能推进成交。'
      : 'SunGene 協助外銷企業開發海外客戶、建立通路合作，並把外銷開發流程做得更穩定、更可持續、更能推進成交。',
    openGraph: {
      title: t(lang, 'meta_home_title'),
      description: lang === 'en' 
        ? 'SunGene helps export companies develop overseas customers, build channel partnerships, and make the export development process more stable, sustainable, and deal-focused.' 
        : lang === 'cn'
        ? 'SunGene 协助外贸企业开发海外客户、建立渠道合作，并把外贸开发流程做得更稳定、更可持续、更能推进成交。'
        : 'SunGene 協助外銷企業開發海外客戶、建立通路合作，並把外銷開發流程做得更穩定、更可持續、更能推進成交。',
      url: getLocalizedUrl(lang),
      type: 'website',
    },
    twitter: { card: 'summary_large_image' },
    icons: { icon: '/logo/sungene.png' },
    alternates: getAlternates(lang),
  }
}

export default async function RootLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang: rawLang } = await params
  const lang = (['en', 'zh', 'cn'].includes(rawLang) ? rawLang : 'zh') as Lang

  const baseUrl = getSiteUrl()
  const logoUrl = `${baseUrl}/logo/sungene.png`

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SunGene Co., LTD.',
    url: baseUrl,
  }

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SunGene Co., LTD.',
    description: t(lang, 'about_desc'),
    url: baseUrl,
    logo: logoUrl,
    telephone: '04-37032705',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 201, Guangfu Rd., Central Dist.',
      addressLocality: 'Taichung City',
      addressRegion: 'Taichung',
      addressCountry: 'TW'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+886-4-37032705',
      contactType: 'sales',
      areaServed: [
        'TW',
        'CN',
        'VN',
        'TH',
        'MY',
        'ID',
        'US',
        'CA',
        'DE',
        'FR',
        'NL',
        'JP'
      ],
      availableLanguage: ['en', 'zh-Hant']
    },
    sameAs: [
      'https://momas.en.alibaba.com',
      'https://www.linkedin.com/company/sungene-co-ltd'
    ]
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SunGene Co., LTD.',
    image: logoUrl,
    '@id': baseUrl,
    url: baseUrl,
    telephone: '+886-4-37032705',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 201, Guangfu Rd., Central Dist.',
      addressLocality: 'Taichung City',
      postalCode: '400',
      addressCountry: 'TW'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 24.1433, 
      longitude: 120.6845 
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      opens: '09:00',
      closes: '18:00'
    },
    areaServed: [
      'TW',
      'CN',
      'VN',
      'TH',
      'MY',
      'ID',
      'US',
      'CA',
      'DE',
      'FR',
      'NL',
      'JP'
    ],
    priceRange: '$$'
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <Header lang={lang} />
      <div id="page-content">{children}</div>
      <Footer lang={lang} />
    </>
  )
}

import { markets, getMarket } from '@/data/markets'
import { Lang, t } from '@/lib/i18n'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import InquiryForm from '@/components/InquiryForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Suspense } from 'react'

export async function generateStaticParams() {
  const params: { lang: Lang; slug: string }[] = []
  const languages: Lang[] = ['zh', 'en']
  
  for (const lang of languages) {
    for (const market of markets) {
      params.push({ lang, slug: market.slug })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: { params: { lang: Lang; slug: string } }): Promise<Metadata> {
  const market = getMarket(params.slug)
  if (!market) return {}

  return {
    title: market.title[params.lang],
    description: market.description[params.lang],
    alternates: {
      canonical: `https://www.sungene.com.tw/${params.lang}/market/${params.slug}`
    }
  }
}

export default function MarketPage({ params }: { params: { lang: Lang; slug: string } }) {
  const market = getMarket(params.slug)
  if (!market) notFound()

  const lang = params.lang

  // Schema.org
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: market.title[lang],
    description: market.description[lang],
    provider: {
      '@type': 'LocalBusiness',
      name: 'SunGene',
      areaServed: market.slug === 'europe' ? 'Europe' : 
                  market.slug === 'north-america' ? 'North America' :
                  market.slug === 'japan' ? 'Japan' :
                  market.slug === 'southeast-asia' ? 'Southeast Asia' : 'Global'
    }
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: market.faq.map(f => ({
      '@type': 'Question',
      name: f.question[lang],
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer[lang]
      }
    }))
  }

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center">
            <div className="inline-block bg-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                {lang === 'zh' ? '全球市場開發' : 'Global Market Development'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {market.h1[lang]}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {market.description[lang]}
            </p>
            <div className="flex justify-center gap-4">
                <Link href={`/${lang}/contact`} className="bg-white text-gray-900 font-bold py-3 px-8 rounded-sm hover:bg-gray-100 transition">
                    {t(lang, 'nav_contact')}
                </Link>
            </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
            <Breadcrumbs 
                lang={lang} 
                items={[
                    { label: lang === 'zh' ? '服務介紹' : 'Services', href: `/${lang}/services` },
                    { label: market.title[lang], href: `/${lang}/market/${market.slug}` }
                ]} 
            />
            
            <div className="grid lg:grid-cols-12 gap-16 mt-8">
                <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '市場洞察' : 'Market Insights'}</h2>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                    {market.content[lang]}
                </p>

                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                            {lang === 'zh' ? '開發挑戰' : 'Challenges'}
                        </h3>
                        <ul className="space-y-3">
                            {market.challenges[lang].map((c, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="text-red-500 mr-2">×</span>
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                            {lang === 'zh' ? '我們的解決方案' : 'Our Solution'}
                        </h3>
                        <ul className="space-y-3">
                            {market.solutions[lang].map((s, i) => (
                                <li key={i} className="flex items-start text-gray-600">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {lang === 'zh' ? '常見買家類型' : 'Common Buyer Types'}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {market.buyerTypes[lang].map((buyer, i) => (
                            <div key={i} className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex items-center">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-3 flex-shrink-0">
                                    {i + 1}
                                </div>
                                <span className="font-medium text-gray-800">{buyer}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {lang === 'zh' ? '開發策略' : 'Development Strategy'}
                    </h3>
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-8">
                        <ul className="space-y-4">
                            {market.strategy[lang].map((s, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                                        {i + 1}
                                    </div>
                                    <p className="text-gray-700 font-medium leading-relaxed">{s}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h3>
                <div className="space-y-4 mb-12">
                    {market.faq.map((f, i) => (
                        <details key={i} className="group bg-gray-50 border border-gray-200 rounded-sm">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4">
                                <span>{f.question[lang]}</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                                </span>
                            </summary>
                            <div className="text-gray-600 mt-0 group-open:animate-fadeIn p-4 pt-0">
                                {f.answer[lang]}
                            </div>
                        </details>
                    ))}
                </div>
            </div>

            {/* Sidebar Form */}
            <div className="lg:col-span-4">
                <div className="bg-gray-50 p-8 rounded-sm border border-gray-100 sticky top-24">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                        {lang === 'zh' ? '開始開發這個市場' : 'Start Developing This Market'}
                    </h3>
                    <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-sm"></div>}>
                        <InquiryForm 
                            lang={lang}
                            type="Contact" 
                            fields={[
                                { name: 'company', label: t(lang, 'form_company'), type: 'text', required: true },
                                { name: 'email', label: t(lang, 'form_email'), type: 'email', required: true },
                                { name: 'market', label: t(lang, 'form_market'), type: 'text', required: true }, // Should pre-fill?
                                { name: 'message', label: t(lang, 'form_message'), type: 'textarea', rows: 3 }
                            ]}
                            submitLabel={t(lang, 'form_submit')}
                        />
                    </Suspense>
                </div>
            </div>
            </div>
        </div>
      </section>
    </main>
  )
}

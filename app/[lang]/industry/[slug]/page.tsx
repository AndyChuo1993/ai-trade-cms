import { industries, getIndustry } from '@/data/industries'
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
    for (const industry of industries) {
      params.push({ lang, slug: industry.slug })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: { params: { lang: Lang; slug: string } }): Promise<Metadata> {
  const industry = getIndustry(params.slug)
  if (!industry) return {}

  return {
    title: industry.title[params.lang],
    description: industry.description[params.lang],
    alternates: {
      canonical: `https://www.sungene.com.tw/${params.lang}/industry/${params.slug}`
    }
  }
}

export default function IndustryPage({ params }: { params: { lang: Lang; slug: string } }) {
  const industry = getIndustry(params.slug)
  if (!industry) notFound()

  const lang = params.lang

  // Schema.org
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: industry.title[lang],
    description: industry.description[lang],
    provider: {
      '@type': 'LocalBusiness',
      name: 'SunGene',
      areaServed: 'Global'
    }
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faq.map(f => ({
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
                {lang === 'zh' ? '產業專精服務' : 'Industry Specialized Service'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {industry.h1[lang]}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                {industry.description[lang]}
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
                    { label: industry.title[lang], href: `/${lang}/industry/${industry.slug}` }
                ]} 
            />

            <div className="grid lg:grid-cols-12 gap-16 mt-8">
                <div className="lg:col-span-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{lang === 'zh' ? '產業洞察' : 'Industry Insights'}</h2>
                <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                    {industry.content[lang]}
                </p>

                <div className="mb-16">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2 border-gray-200">
                        {lang === 'zh' ? '我們的優勢' : 'Our Advantages'}
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {industry.features[lang].map((f, i) => (
                            <div key={i} className="bg-blue-50 p-6 rounded-sm">
                                <span className="text-blue-600 font-bold text-xl block mb-2">0{i+1}</span>
                                <p className="text-gray-800 font-medium">{f}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {lang === 'zh' ? '目標買家' : 'Target Buyers'}
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {industry.buyerTypes[lang].map((buyer, i) => (
                            <div key={i} className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center">
                                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                </div>
                                <span className="font-semibold text-gray-800">{buyer}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        {lang === 'zh' ? '行業開發策略' : 'Industry Strategy'}
                    </h3>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-8">
                        <ul className="space-y-6">
                            {industry.strategy[lang].map((s, i) => (
                                <li key={i} className="flex">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold mr-4 mt-1">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-medium text-lg leading-relaxed">{s}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">FAQ</h3>
                <div className="space-y-4 mb-12">
                    {industry.faq.map((f, i) => (
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
                        {lang === 'zh' ? '開始開發這個產業' : 'Start Developing This Industry'}
                    </h3>
                    <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse rounded-sm"></div>}>
                        <InquiryForm 
                            lang={lang}
                            type="Contact" 
                            fields={[
                                { name: 'company', label: t(lang, 'form_company'), type: 'text', required: true },
                                { name: 'email', label: t(lang, 'form_email'), type: 'email', required: true },
                                { name: 'product', label: t(lang, 'form_product'), type: 'text', required: true },
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

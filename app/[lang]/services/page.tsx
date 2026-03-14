import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'
import ServiceComparison from '@/components/ServiceComparison'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: t(lang, 'service_title') + ' | SunGene',
    description: t(lang, 'meta_home_desc'),
    alternates: {
      canonical: `/${lang}/services`,
      languages: {
        zh: '/zh/services',
        en: '/en/services',
        'x-default': '/en/services',
      },
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  type Card = { href: string; title: string; desc: string; tags?: string[] }

  const core: Card[] = [
    {
      href: `/${lang}/services/export-lead-generation`,
      title: lang === 'zh' ? '外貿客戶開發（Export Lead Generation）' : 'Export Lead Generation',
      desc: lang === 'zh'
        ? '為製造業找海外買家：名單 + 節奏 + 詢盤交付。'
        : 'Find overseas buyers with lists, cadence, and qualified inquiry delivery.',
      tags: lang === 'zh' ? ['製造業', '海外買家', '詢盤'] : ['Manufacturers', 'Overseas buyers', 'Leads'],
    },
    {
      href: `/${lang}/services/distributor-development`,
      title: lang === 'zh' ? '經銷商開發（Distributor Development）' : 'Distributor Development',
      desc: lang === 'zh'
        ? '市場分層 + 通路策略 + 合作條件，建立可推進的通路 pipeline。'
        : 'Market tiers, channel strategy, and term frameworks to build a partner pipeline.',
      tags: lang === 'zh' ? ['通路', '代理', '市場落地'] : ['Channels', 'Partners', 'Market entry'],
    },
    {
      href: `/${lang}/services/export-sales-outsourcing`,
      title: lang === 'zh' ? '外貿業務外包' : 'Export Sales Outsourcing',
      desc: lang === 'zh'
        ? '你只需報價與出貨；其餘外貿開發與跟進由我們完成。'
        : 'You quote and ship; we run outreach and follow-ups end-to-end.',
      tags: lang === 'zh' ? ['不擴編', 'SOP', '交付'] : ['No hiring', 'SOP', 'Delivery'],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{lang === 'zh' ? '三個核心服務，對應三種外貿增長需求' : 'Three core services for three export growth needs'}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {lang === 'zh'
              ? '如果你要找海外買家、建立經銷通路，或想在不擴編的前提下持續開發海外市場，這裡可以直接找到對應方案。'
              : 'Whether you need overseas buyers, channel partners, or a managed export sales workflow without hiring first, you can choose the right service here.'}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link href={`/${lang}/contact`} className="bg-white text-blue-900 font-bold py-3 px-8 rounded-sm hover:bg-gray-100 transition">
              {lang === 'zh' ? '預約諮詢' : 'Book Consultation'}
            </Link>
            <Link href={`/${lang}/export-market-analysis`} className="bg-transparent border border-white/40 text-white font-bold py-3 px-8 rounded-sm hover:bg-white/10 transition">
              {lang === 'zh' ? '免費出口市場分析' : 'Free Export Market Analysis'}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {core.map((x, i) => (
              <Link key={i} href={x.href} className="block rounded-xl border border-gray-200 bg-white p-6 hover:shadow-md transition">
                <div className="text-lg font-bold text-gray-900">{x.title}</div>
                <div className="mt-2 text-gray-600 leading-7">{x.desc}</div>
                {x.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {x.tags.map((t, j) => (
                      <span key={j} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-6 text-blue-900 font-medium">{lang === 'zh' ? '了解更多 →' : 'Learn more →'}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-gray-900">{lang === 'zh' ? '三個服務，不重疊' : 'Three services, no overlap'}</h2>
              <p className="mt-4 text-gray-600 leading-7">
                {lang === 'zh'
                  ? '我們把常見混淆（名單、開發、外包）拆成三個可獨立排名的服務頁，讓訪客快速自我篩選，Google 也能清楚理解每頁主題。'
                  : 'We split list building, channel development, and managed sales ops into three pages so users self-select fast and search engines understand each topic.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={core[0].href} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition">
                  {lang === 'zh' ? '看外貿客戶開發' : 'View Export Lead Gen'}
                </Link>
                <Link href={core[1].href} className="inline-flex items-center justify-center rounded-sm border border-gray-200 bg-white px-5 py-2.5 text-gray-900 font-medium text-sm hover:bg-gray-50 transition">
                  {lang === 'zh' ? '看經銷商開發' : 'View Distributor Dev'}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8">
              <ServiceComparison lang={lang} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{lang === 'zh' ? '不確定選哪個？先看差異表' : 'Not sure which one? Start with the comparison'}</h2>
              <p className="mt-4 text-gray-600 leading-7">
                {lang === 'zh'
                  ? 'Export Lead Generation 解決「海外買家名單與詢盤交付」；Distributor Development 解決「通路夥伴與經銷合作」；Export Sales Outsourcing 解決「不擴編也能穩定開發與跟進」。'
                  : 'Lead gen delivers buyer lists and qualified inquiries. Distributor development builds partner pipelines. Sales outsourcing runs end-to-end outreach and follow-ups without hiring.'}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={core[0].href} className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-800 transition">
                  {lang === 'zh' ? '看外銷客戶開發' : 'Export Lead Gen'}
                </Link>
                <Link href={core[1].href} className="inline-flex items-center justify-center rounded-sm border border-gray-200 bg-white px-5 py-2.5 text-gray-900 font-medium text-sm hover:bg-gray-50 transition">
                  {lang === 'zh' ? '看經銷商開發' : 'Distributor Dev'}
                </Link>
              </div>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="text-sm font-semibold text-gray-900">{lang === 'zh' ? '你可能在找' : 'You may be searching for'}</div>
              <ul className="mt-4 space-y-2 text-gray-700">
                {[
                  'export lead generation',
                  'find overseas buyers',
                  'find distributors',
                  'international buyers',
                  'b2b export marketing',
                ].map((k) => (
                  <li key={k} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-900" />
                    <span>{k}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link href={`/${lang}/blog/how-to-find-overseas-buyers`} className="text-blue-900 font-medium hover:underline">
                  {lang === 'zh' ? '先看指南文章 →' : 'Read the guide →'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{lang === 'zh' ? '先拿一份出口市場分析，再決定怎麼做' : 'Get a market analysis first, then decide your plan'}</h2>
          <p className="text-slate-200 max-w-2xl mx-auto mb-10">
            {lang === 'zh'
              ? '提交產品與目標市場，我們回覆市場切入、買家角色與可行的 lead generation 路徑。'
              : 'Submit your product and markets. We’ll reply with entry approach, buyer roles, and a feasible lead-gen path.'}
          </p>
          <Link href={`/${lang}/export-market-analysis`} className="inline-block bg-white text-blue-900 font-bold py-4 px-10 rounded-sm hover:bg-gray-100 transition duration-300 shadow-lg text-lg">
            {t(lang, 'cta_analysis')}
          </Link>
        </div>
      </section>
    </main>
  )
}

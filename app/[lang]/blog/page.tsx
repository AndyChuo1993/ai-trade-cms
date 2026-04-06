import { Lang } from '@/lib/i18n'
import Link from 'next/link'
import Image from 'next/image'
import { getBlogPosts } from '@/data/blog'
import { cnText } from '@/lib/cnText'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const baseUrl = 'https://sungenelite.com'

  return {
    title: (lang === 'en' ? 'Blog' : (lang === 'cn' ? '博客' : '部落格')) + ' | SunGene',
    description: lang === 'en' ? 'Practical guides on export customer development, overseas buyers, and distributor development.' : (lang === 'cn' ? '外贸开发、海外客户拓展与经销合作的实战指南。' : '外銷開發、海外客戶拓展與經銷合作的實戰指南。'),
    alternates: {
      canonical: `${baseUrl}/${lang}/blog`,
      languages: {
        'zh-CN': 'https://sungenelite.com/cn/blog',
        'zh-TW': 'https://sungenelite.com/zh/blog',
        'en': 'https://sungenelite.com/en/blog',
        'x-default': 'https://sungenelite.com/zh/blog',
      },
    },
    openGraph: {
      title: (lang === 'en' ? 'Blog' : (lang === 'cn' ? '博客' : '部落格')) + ' | SunGene',
      description: lang === 'en' ? 'Practical guides on export customer development, overseas buyers, and distributor development.' : (lang === 'cn' ? '外贸开发、海外客户拓展与经销合作的实战指南。' : '外銷開發、海外客戶拓展與經銷合作的實戰指南。'),
      url: `${baseUrl}/${lang}/blog`,
      images: ['/og/og.png'],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const tr = (value: string) => cnText(lang, value)
  const posts = getBlogPosts().slice().sort((a, b) => (a.date > b.date ? -1 : 1))

  return (
    <main className="pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <header className="mb-10">
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">{lang === 'en' ? 'Blog' : (lang === 'cn' ? '博客' : '部落格')}</h1>
              <p className="mt-4 text-lg text-gray-600">
                {lang === 'cn'
                  ? '博客放的是教学、观点与方法拆解；资源中心放可直接套用的指南与检查清单；行业页与市场页则用来承接特定搜索需求。'
                  : isChinese
                    ? '部落格放的是教學、觀點與做法拆解；資源中心放可直接套用的指南與檢查表；產業頁與市場頁則用來承接特定搜尋需求。'
                    : 'The blog is for guides, commentary, and method breakdowns. Resources contains reusable guides and checklists, while industry and market pages target specific search intent.'}
              </p>
            </div>
            <div className="relative min-h-[220px] overflow-hidden rounded-[2rem] border border-blue-100 bg-white shadow-2xl">
              <Image src="/illustrations/blog-hero-panel.svg" alt={lang === 'en' ? 'Blog hero illustration' : (lang === 'cn' ? '博客主視覺圖' : '部落格主視覺圖')} fill className="object-cover" />
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/${lang}/blog/${p.slug}`} className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-md">
              <div className="relative h-52 bg-slate-950">
                <Image src={p.heroImage} alt={tr(p.title[lang])} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur">
                  {lang === 'en' ? 'Blog Article' : (lang === 'cn' ? '博客文章' : '部落格文章')}
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500">{new Date(p.date).toISOString().slice(0, 10)}</div>
                <div className="mt-2 text-xl font-bold text-gray-900">{tr(p.title[lang])}</div>
                <div className="mt-2 text-gray-600 leading-7">{tr(p.description[lang])}</div>
                <div className="mt-4 text-blue-900 font-medium">{lang === 'en' ? 'Read →' : (lang === 'cn' ? '閱讀全文 →' : '閱讀全文 →')}</div>
              </div>
            </Link>
          ))}
        </section>

        <section className="mt-12 mb-16 rounded-xl bg-slate-900 text-white p-8">
          <h2 className="text-2xl font-bold">{lang === 'en' ? 'Want to enter overseas markets?' : (lang === 'cn' ? '想打入海外市场？' : '想打入海外市場？')}</h2>
          <p className="mt-2 text-slate-200">
                {lang === 'cn'
                  ? '取得市场切入建议与行动方案。'
                  : isChinese
                    ? '取得市場切入建議與行動方案。'
                    : 'Get market entry advice and action plans.'}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/${lang}/export-market-analysis`} className="inline-flex items-center justify-center rounded-sm bg-blue-500 px-5 py-2.5 text-white font-medium text-sm hover:bg-blue-400 transition">
              {lang === 'en' ? 'Get Market Entry Advice' : (lang === 'cn' ? '获取市场切入建议' : '取得市場切入建議')}
            </Link>
            <Link href={`/${lang}/contact`} className="inline-flex items-center justify-center rounded-sm border border-white/50 px-5 py-2.5 text-white font-medium text-sm hover:bg-white/10 transition">
              {lang === 'en' ? 'Book Strategy Call' : (lang === 'cn' ? '预约策略通话' : '預約策略通話')}
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

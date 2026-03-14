import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { seoMarkets } from '@/data/seoMarkets'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: `${lang === 'zh' ? '市場頁總覽' : 'Market Pages'} | SunGene`,
    description:
      lang === 'zh'
        ? '依市場查看 SunGene 的外貿內容頁，快速了解不同地區的買家角色、通路差異與市場切入方式。'
        : 'Browse market-specific SunGene pages to understand buyer roles, channel differences, and entry approaches by region.',
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{lang === 'zh' ? '市場頁總覽' : 'Market Pages'}</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            {lang === 'zh'
              ? '這裡是依地區與市場切分的內容頁，重點在買家角色、通路模式與該市場的開發邏輯。它和部落格教學不同，也不該和資源頁混在一起。'
              : 'These pages are organized by geography and market logic, focusing on buyer roles, channels, and entry approaches. They are distinct from blog tutorials and resource downloads.'}
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {seoMarkets.map((market) => (
            <Link key={market.slug} href={`/${lang}/markets/${market.slug}`} className="group rounded-xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">
              <div className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-700">
                {lang === 'zh' ? '市場頁' : 'Market Page'}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-green-700">
                {market.h1[lang].replace('市場外貿客戶開發', '').replace('Market Export Lead Generation', '').trim()}
              </h2>
              <p className="mt-3 line-clamp-4 text-gray-600">{market.description[lang]}</p>
              <div className="mt-6 text-sm font-bold text-green-700">{lang === 'zh' ? '查看市場頁 →' : 'View page →'}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

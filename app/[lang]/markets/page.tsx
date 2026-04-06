import Image from 'next/image'
import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { seoMarkets } from '@/data/seoMarkets'
import { cnText } from '@/lib/cnText'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = 'https://sungenelite.com'

  return {
    title: `${lang === 'en' ? 'Market Pages' : (lang === 'cn' ? '市场頁總覽' : '市場頁總覽')} | SunGene`,
    description:
      isChinese
        ? '依市場查看 SunGene 的外銷內容頁，快速了解不同地區的買家角色、通路差異與市場切入方式。'
        : 'Browse market-specific SunGene pages to understand buyer roles, channel differences, and entry approaches by region.',
    alternates: {
      canonical: `${baseUrl}/${lang}/markets`,
      languages: {
        'zh-CN': 'https://sungenelite.com/cn/markets',
        'zh-TW': 'https://sungenelite.com/zh/markets',
        'en': 'https://sungenelite.com/en/markets',
        'x-default': 'https://sungenelite.com/zh/markets',
      },
    },
    openGraph: {
      title: `${lang === 'en' ? 'Market Pages' : (lang === 'cn' ? '市场頁總覽' : '市場頁總覽')} | SunGene`,
      description:
        isChinese
          ? '依市場查看 SunGene 的外銷內容頁，快速了解不同地區的買家角色、通路差異與市場切入方式。'
          : 'Browse market-specific SunGene pages to understand buyer roles, channel differences, and entry approaches by region.',
      url: `${baseUrl}/${lang}/markets`,
      images: ['/og/og.png'],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const tr = (value: string) => cnText(lang, value)

  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{lang === 'en' ? 'Market Pages' : (lang === 'cn' ? '市场頁總覽' : '市場頁總覽')}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              {isChinese
                ? '這裡依不同地區與市場整理買家角色、通路模式與市場切入重點，方便快速掌握各市場的合作方向。'
                : 'These pages are organized by geography and market logic, focusing on buyer roles, channels, and entry approaches.'}
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-green-100 bg-white shadow-xl">
            <Image src="/illustrations/markets-hub-hero.svg" alt={lang === 'en' ? 'Market pages hero' : (lang === 'cn' ? '市场頁主視覺' : '市場頁主視覺')} width={1200} height={760} className="h-auto w-full" priority />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {seoMarkets.map((market) => (
            <Link key={market.slug} href={`/${lang}/markets/${market.slug}`} className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">
              <div className="relative h-32 w-full overflow-hidden rounded-2xl bg-gray-50">
                <Image
                  src={market.heroImage?.[lang] ?? '/illustrations/markets-hub-hero.svg'}
                  alt={tr(market.h1[lang])}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="inline-flex mt-4 rounded-full bg-green-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-green-700">
                {lang === 'en' ? 'Market Page' : (lang === 'cn' ? '市场頁' : '市場頁')}
              </div>
              <h2 className="mt-3 text-2xl font-bold text-gray-900 group-hover:text-green-700">
                {tr(market.h1[lang].replace('市場外銷客戶開發', '').replace('Market Export Lead Generation', '').trim())}
              </h2>
              <p className="mt-3 line-clamp-4 text-gray-600">{tr(market.description[lang])}</p>
              <div className="mt-6 text-sm font-bold text-green-700">{lang === 'en' ? 'View page →' : (lang === 'cn' ? '查看市场頁 →' : '查看市場頁 →')}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

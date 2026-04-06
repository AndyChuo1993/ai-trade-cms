import Image from 'next/image'
import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { seoIndustries } from '@/data/seoIndustries'
import { cnText } from '@/lib/cnText'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const isChinese = lang !== 'en'
  const baseUrl = 'https://sungenelite.com'

  return {
    title: `${lang === 'en' ? 'Industry Pages' : (lang === 'cn' ? '行业頁總覽' : '產業頁總覽')} | SunGene`,
    description:
      isChinese
        ? '依產業查看 SunGene 的外銷內容頁，快速找到適合你產品與目標買家的產業頁面。'
        : 'Browse industry-specific SunGene pages to find the right context for your product and buyer profile.',
    alternates: {
      canonical: `${baseUrl}/${lang}/industries`,
      languages: {
        'zh-CN': 'https://sungenelite.com/cn/industries',
        'zh-TW': 'https://sungenelite.com/zh/industries',
        'en': 'https://sungenelite.com/en/industries',
        'x-default': 'https://sungenelite.com/zh/industries',
      },
    },
    openGraph: {
      title: `${lang === 'en' ? 'Industry Pages' : (lang === 'cn' ? '行业頁總覽' : '產業頁總覽')} | SunGene`,
      description:
        isChinese
          ? '依產業查看 SunGene 的外銷內容頁，快速找到適合你產品與目標買家的產業頁面。'
          : 'Browse industry-specific SunGene pages to find the right context for your product and buyer profile.',
      url: `${baseUrl}/${lang}/industries`,
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
            <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{lang === 'en' ? 'Industry Pages' : (lang === 'cn' ? '行业頁總覽' : '產業頁總覽')}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
              {isChinese
                ? '這裡依產業整理常見的採購情境、風險與切入方式，方便快速找到更貼近你產品與買家的參考內容。'
                : 'These pages are organized by industry so buyers can quickly understand typical sourcing context, risks, and entry points.'}
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.75rem] border border-blue-100 bg-white shadow-xl">
            <Image src="/illustrations/industries-hub-hero.svg" alt={lang === 'en' ? 'Industry pages hero' : (lang === 'cn' ? '行业頁主視覺' : '產業頁主視覺')} width={1200} height={760} className="h-auto w-full" priority />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {seoIndustries.map((industry) => (
            <Link key={industry.slug} href={`/${lang}/industries/${industry.slug}`} className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
              <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                {lang === 'en' ? 'Industry Page' : (lang === 'cn' ? '行业頁' : '產業頁')}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-blue-700">
                {tr(industry.h1[lang].replace('外銷客戶開發', '').replace('Export Lead Generation for ', ''))}
              </h2>
              <p className="mt-3 line-clamp-4 text-gray-600">{tr(industry.description[lang])}</p>
              <div className="mt-6 text-sm font-bold text-blue-700">{lang === 'en' ? 'View page →' : (lang === 'cn' ? '查看行业頁 →' : '查看產業頁 →')}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

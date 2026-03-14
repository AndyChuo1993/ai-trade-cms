import Link from 'next/link'
import { Lang } from '@/lib/i18n'
import { seoIndustries } from '@/data/seoIndustries'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  return {
    title: `${lang === 'zh' ? '產業頁總覽' : 'Industry Pages'} | SunGene`,
    description:
      lang === 'zh'
        ? '依產業查看 SunGene 的外貿內容頁，快速找到適合你產品與買家語境的產業頁面。'
        : 'Browse industry-specific SunGene pages to find the right context for your product and buyer profile.',
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params

  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="border-b border-gray-100 bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{lang === 'zh' ? '產業頁總覽' : 'Industry Pages'}</h1>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            {lang === 'zh'
              ? '這裡是依產業切分的內容頁，適合讓買家快速理解你所在產業的常見採購情境、風險與切入方式。和部落格不同，這些頁面偏向產業定位；和資源頁不同，這裡不是下載內容。'
              : 'These pages are organized by industry so buyers can quickly understand typical sourcing context, risks, and entry points. Unlike the blog, these are positioning pages; unlike resources, they are not downloads.'}
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
          {seoIndustries.map((industry) => (
            <Link key={industry.slug} href={`/${lang}/industries/${industry.slug}`} className="group rounded-xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
              <div className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-700">
                {lang === 'zh' ? '產業頁' : 'Industry Page'}
              </div>
              <h2 className="mt-4 text-2xl font-bold text-gray-900 group-hover:text-blue-700">
                {industry.h1[lang].replace('外貿客戶開發', '').replace('Export Lead Generation for ', '')}
              </h2>
              <p className="mt-3 line-clamp-4 text-gray-600">{industry.description[lang]}</p>
              <div className="mt-6 text-sm font-bold text-blue-700">{lang === 'zh' ? '查看產業頁 →' : 'View page →'}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}

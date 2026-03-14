import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'

export default function HeroSection({ lang }: { lang: Lang }) {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-32 text-center md:pb-32 md:pt-48">
      <div className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden">
        <div className="absolute right-[-5%] top-[-10%] h-[500px] w-[500px] rounded-full bg-blue-50 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-gray-50 opacity-60 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 inline-block rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5">
            <span className="text-sm font-bold uppercase tracking-wide text-blue-800">
              {lang === 'zh' ? '專為台灣製造商打造' : 'Designed for Manufacturers'}
            </span>
          </div>

          <h1 className="mb-8 text-5xl font-bold leading-[1.1] tracking-tight text-gray-900 md:text-7xl">
            {t(lang, 'hero_title')}
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
            {t(lang, 'hero_description')}
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href={`/${lang}/export-market-analysis`}
              className="inline-flex items-center justify-center rounded-sm bg-blue-900 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl"
            >
              {t(lang, 'cta_analysis')}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center justify-center rounded-sm border-2 border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 transition duration-300 hover:border-blue-900 hover:text-blue-900"
            >
              {t(lang, 'cta_consult')}
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
            <span className="rounded-full bg-gray-100 px-3 py-1">{lang === 'zh' ? '適合製造業與外銷團隊' : 'Built for manufacturers and export teams'}</span>
            <span className="rounded-full bg-gray-100 px-3 py-1">{lang === 'zh' ? '買家名單、開發節奏、詢盤交付' : 'Lists, cadence, and inquiry delivery'}</span>
          </div>

          <div className="mt-16 flex flex-col items-center justify-center gap-8 border-t border-gray-100 pt-8 text-sm font-medium uppercase tracking-wider text-gray-400 md:flex-row md:gap-16">
            <span>{lang === 'zh' ? '服務超過 50+ 工廠' : 'Serving 50+ Factories'}</span>
            <span className="hidden md:inline-block">•</span>
            <span>{lang === 'zh' ? '專注 B2B 外貿開發' : 'Focus on B2B Export'}</span>
            <span className="hidden md:inline-block">•</span>
            <span>{lang === 'zh' ? '全球市場落地' : 'Global Market Reach'}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

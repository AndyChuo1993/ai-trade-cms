import { t, Lang } from '@/lib/i18n'
import Link from 'next/link'

export default function CTASection({ lang }: { lang: Lang }) {
  return (
    <section className="bg-blue-900 py-24 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
          {lang === 'en' ? 'Which export path fits your product?' : lang === 'cn' ? '先确认你的产品适合哪种外销路径' : '先確認你的產品適合哪種外銷路徑'}
        </h2>
        <p className="mb-10 text-xl text-blue-100">
          {lang === 'en' 
            ? 'Not sure whether to look for buyers directly, find distributors, or have an external team push it through? Let us help you determine the most suitable entry point.' 
            : lang === 'cn' 
            ? '不确定该直接找买家、找经销商，还是交给外部团队推进？先让我们帮您判断最适合的切入方式。' 
            : '不確定該直接找買家、找經銷商，還是交給外部團隊推進？先讓我們幫您判斷最適合的切入方式。'}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href={`/${lang}/export-market-analysis`}
            className="inline-flex items-center justify-center rounded-sm bg-white px-8 py-4 text-lg font-bold text-blue-900 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-gray-50"
          >
            {lang === 'en' ? 'Get Market Entry Advice' : lang === 'cn' ? '取得市场切入建议' : '取得市場切入建議'}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center rounded-sm border-2 border-white px-8 py-4 text-lg font-bold text-white transition duration-300 hover:bg-white/10"
          >
            {lang === 'en' ? 'Book Strategy Call' : lang === 'cn' ? '预约策略通话' : '預約策略通話'}
          </Link>
        </div>
      </div>
    </section>
  )
}

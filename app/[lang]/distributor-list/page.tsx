import { Metadata } from 'next'
import { getDictionary, Lang } from '@/lib/i18n'
import DownloadForm from '@/components/DownloadForm'
import { CheckCircle } from 'lucide-react'

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
  const { lang } = await params
  const baseUrl = 'https://sungene.net'
  const isChinese = lang !== 'en'
  return {
    title: lang === 'en' ? 'Request Channel Evaluation | SunGene' : (lang === 'cn' ? '申请经销通路评估｜SunGene' : '申請經銷通路評估｜SunGene'),
    description:
      isChinese
        ? '留下你的產品與目標市場，我們提供海外經銷/代理候選資料與切入建議。'
        : 'Share your product and market. We’ll send a shortlist of distributors/agents and an entry recommendation.',
    alternates: {
      canonical: `${baseUrl}/${lang}/distributor-list`,
      languages: {
        'zh-CN': `https://sungene.net/cn/distributor-list`,
        'zh-TW': `https://sungene.net/zh/distributor-list`,
        'en': `https://sungene.net/en/distributor-list`,
        'x-default': `https://sungene.net/cn/distributor-list`,
      }
    },
    
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const isChinese = lang !== 'en'
  return (
    <main className="pt-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{lang === 'en' ? 'Request Channel Evaluation' : (lang === 'cn' ? '申请经销通路评估' : '申請經銷通路評估')}</h1>
            <p className="mt-4 text-gray-600 leading-7">
              {isChinese
                ? '經銷開發的關鍵是市場分層與合作條件。我們會先評估你的產品適合的通路型態，再整理候選通路清單。'
                : 'Distributor development requires segmentation and clear partnership terms. We’ll shortlist channels that match your product.'}
            </p>
            <div className="mt-8 grid gap-4">
              {[
                isChinese ? '依國家/區域與通路角色分層' : 'Segmented by country/region and channel roles',
                isChinese ? '提供初步篩選建議（適合/不適合原因）' : 'Includes initial vetting notes (fit / non-fit)',
                isChinese ? '可延伸到合作方案與跟進節奏設計' : 'Extend into partnership offer and follow-up cadence',
              ].map((t, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-blue-900" />
                  <div className="text-gray-700">{t}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <DownloadForm dict={dict} lang={lang} resourceId="distributor-list" />
          </div>
        </div>
      </div>
    </main>
  )
}

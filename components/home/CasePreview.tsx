import Link from 'next/link'
import { t, Lang } from '@/lib/i18n'
import { getCases } from '@/data/cases'

export default function CasePreview({ lang }: { lang: Lang }) {
  const cases = getCases(lang).slice(0, 2) // Show first 2 cases

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{lang === 'zh' ? '成功案例' : 'Success Stories'}</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">{lang === 'zh' ? '看看我們如何幫助台灣製造商走向世界' : 'See how we help manufacturers go global'}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {cases.map((item) => (
            <div key={item.slug} className="group bg-white border border-gray-200 rounded-sm hover:border-blue-900 hover:shadow-xl transition duration-300 flex flex-col h-full overflow-hidden">
              <div className="h-64 bg-gray-100 relative overflow-hidden">
                 {/* Static Case Image - B2B Professional Style */}
                 <div 
                   className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500"
                   style={{ 
                     backgroundImage: item.slug === 'hardware-germany' 
                       ? `url(https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('Industrial hardware components on blueprint, professional manufacturing setting, blue and white corporate style, high quality')}&image_size=landscape_16_9)`
                       : item.slug === 'electronics-usa'
                       ? `url(https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent('Electronic circuit boards inspection, clean room environment, high tech manufacturing, blue tone professional')}&image_size=landscape_16_9)`
                       : 'none'
                   }}
                 />
                 <div className="absolute top-4 left-4 bg-blue-900/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
                    {item.industry}
                 </div>
                 <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-900 shadow-sm border border-gray-100">
                    {lang === 'zh' ? '目標市場：' : 'Market: '} {item.market}
                 </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition leading-tight">{item.title}</h3>
                <div className="mb-6 flex-grow">
                    <p className="text-blue-900 font-bold text-lg bg-blue-50 p-4 rounded-sm border-l-4 border-blue-600">
                        {item.result}
                    </p>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed line-clamp-2">
                        {item.summary}
                    </p>
                </div>
                <Link href={`/${lang}/case-studies/${item.slug}`} className="inline-block text-center w-full bg-gray-900 text-white font-bold py-3 px-6 rounded-sm hover:bg-blue-800 transition duration-300">
                  {lang === 'zh' ? '閱讀完整案例' : 'Read Case Study'}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href={`/${lang}/case-studies`} className="inline-flex items-center text-blue-900 font-bold hover:underline text-lg">
            {lang === 'zh' ? '查看更多成功案例' : 'View More Case Studies'} 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

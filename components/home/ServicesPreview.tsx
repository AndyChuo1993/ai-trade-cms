import Link from 'next/link'
import { Lang } from '@/lib/i18n'

export default function ServicesPreview({ lang }: { lang: Lang }) {
  const isEn = lang === 'en'
  const isCn = lang === 'cn'
  const isZh = lang === 'zh' || (!isEn && !isCn) // fallback to zh if somehow not en/cn

  const services = [
    {
      id: 1,
      title: isEn ? 'Export Lead Generation' : isCn ? '直接对接海外采购与决策人' : '直接對接海外採購與決策人',
      desc: isEn
        ? 'Find buyers with actual procurement needs and advance to quotation and cooperation.'
        : isCn
        ? '帮您找到有实际采购需求的客户，并推进到报价与合作阶段'
        : '幫您找到有實際採購需求的客戶，並推進到報價與合作階段',
      items: isEn
        ? ['Build actionable decision-maker data and push toward replies, inquiries, and quotes', 'Develop buyers with active needs', 'Filter qualified inquiries for quoting', 'Push to actual business negotiation']
        : isCn
        ? ['建立可用的采购与决策人资料，并持续推进到回复、询价与报价', '直接开发有采购需求的客户', '筛选有效询盘（可进入报价阶段）', '协助推进至实际商务沟通']
        : ['建立可用的採購與決策人資料，並持續推進到回覆、詢價與報價', '直接開發有採購需求的客戶', '篩選有效詢盤（可進入報價階段）', '協助推進至實際商務溝通'],
      link: `/${lang}/services/export-lead-generation`,
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: isEn ? 'Distributor Development' : isCn ? '帮您打进当地通路，建立经销体系' : '幫您打進當地通路，建立經銷體系',
      desc: isEn
        ? 'Not just a list of agents, but helping you find partners who can truly sell.'
        : isCn
        ? '不只是给你一份代理名单，而是协助你找到真正能卖货的合作伙伴'
        : '不只是給你一份代理名單，而是協助你找到真正能賣貨的合作夥伴',
      items: isEn
        ? ['Analyze local channel structures', 'Filter capable distributors', 'Establish partnership dialogues', 'Advance to evaluation and sampling']
        : isCn
        ? ['分析目标市场通路结构', '精准筛选有销售能力的经销商', '协助建立合作对话', '推进至合作评估与样品阶段']
        : ['分析目標市場通路結構', '精準篩選有銷售能力的經銷商', '協助建立合作對話', '推進至合作評估與樣品階段'],
      link: `/${lang}/services/distributor-development`,
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: isEn ? 'Export Sales Outsourcing' : isCn ? '直接帮您做外销业务，目标是成交' : '直接幫您做外銷業務，目標是成交',
      desc: isEn
        ? 'Direct export sales execution from development to follow-up, all the way to orders.'
        : isCn
        ? '从开发到跟进，全程推进到订单'
        : '從開發到跟進，全程推進到訂單',
      items: isEn
        ? ['Continuous overseas prospecting', 'Inquiry follow-up and requirement gathering', 'Assist with quoting and negotiation', 'Push through to order closing']
        : isCn
        ? ['持续海外客户开发', '客户询盘跟进与需求整理', '协助报价与商务沟通', '持续推进至成交与下单']
        : ['持續海外客戶開發', '客戶詢盤跟進與需求整理', '協助報價與商務溝通', '持續推進至成交與下單'],
      link: `/${lang}/services/export-sales-outsourcing`,
      icon: (
        <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="border-y border-gray-100 bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            {isEn ? 'Core Export Growth Services' : isCn ? '核心外贸增长服务' : '核心外銷增長服務'}
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-gray-500">
            {isEn
              ? 'From buyer development to distributor development and export sales support, built into a clearer growth path'
              : isCn
              ? '从海外买家开发、经销商开发到外贸执行支持，建立更清楚的增长路径'
              : '從海外買家開發、經銷商開發到外銷執行支援，建立更清楚的成長路徑'}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.id} className="group rounded-sm border border-gray-100 bg-white p-10 shadow-sm transition duration-300 hover:shadow-xl">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
                {s.icon}
              </div>
              <h3 className="mb-2 text-2xl font-bold text-gray-900">{s.title}</h3>
              <p className="mb-6 text-sm font-bold uppercase tracking-wide text-blue-600">{s.desc}</p>
              <ul className="mb-8 space-y-3">
                {s.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="mr-3 h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={s.link} className="inline-block border-b-2 border-transparent pb-0.5 font-bold text-gray-900 transition group-hover:border-blue-600">
                {lang === 'en' ? 'View Service Details' : lang === 'cn' ? '查看服务内容' : '查看服務內容'} →
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-white p-8 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              {isEn ? 'Our goal is actual orders, not just inquiries' : isCn ? '我们的合作目标不是询盘，而是「实际订单」' : '我們的合作目標不是詢盤，而是「實際訂單」'}
            </h3>
            <p className="text-gray-500">
              {isEn ? 'We drive the entire process from finding leads to closing deals.' : isCn ? '我们致力于推动从开发到成交的完整流程' : '我們致力於推動從開發到成交的完整流程'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                1
              </div>
              <div className="font-bold text-gray-900">
                {isEn ? 'Direct to Procurement' : isCn ? '对接海外采购窗口' : '對接海外採購窗口'}
              </div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                2
              </div>
              <div className="font-bold text-gray-900">
                {isEn ? 'Enter Quoting Process' : isCn ? '进入报价流程' : '進入報價流程'}
              </div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                3
              </div>
              <div className="font-bold text-gray-900">
                {isEn ? 'Advance Sampling' : isCn ? '推进样品与测试' : '推進樣品與測試'}
              </div>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                4
              </div>
              <div className="font-bold text-gray-900">
                {isEn ? 'Close the Deal' : isCn ? '协助成交与下单' : '協助成交與下單'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { t, Lang } from '@/lib/i18n'

export default function ProcessSection({ lang }: { lang: Lang }) {
  const isChinese = lang !== 'en'
  const steps = [
    {
      id: 1,
      title: lang === 'en' ? 'Market & Target List' : lang === 'cn' ? '市场分析与首批采购资料' : '市場分析與首批採購資料',
      desc: lang === 'en' ? 'Complete market analysis and build initial procurement list.' : lang === 'cn' ? '锁定目标市场与竞争对手' : '鎖定目標市場與競爭對手',
      week: lang === 'en' ? 'Week 1-2' : (lang === 'cn' ? '第 1-2 週' : '第 1-2 週'),
      details: lang === 'en'
        ? ['Target market & competitor analysis', 'Build initial procurement & decision-maker lists', 'Confirm outreach strategy']
        : lang === 'cn'
        ? ['锁定目标市场与竞争对手', '建立首批采购与决策人资料', '确认开发切入点与优先顺序']
        : ['鎖定目標市場與競爭對手', '建立首批採購與決策人資料', '確認開發切入點與優先順序'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
      )
    },
    {
      id: 2,
      title: lang === 'en' ? 'Outreach & Replies' : lang === 'cn' ? '开始接触并取得回复' : '開始接觸並取得回覆',
      desc: lang === 'en' ? 'Initiate outreach campaigns and start generating replies.' : lang === 'cn' ? '启动客制化开发信与多渠道接触' : '啟動客製化開發信與多渠道接觸',
      week: lang === 'en' ? 'Week 3-4' : (lang === 'cn' ? '第 3-4 週' : '第 3-4 週'),
      details: lang === 'en'
        ? ['Send customized cold emails', 'Social selling outreach', 'Generate initial replies and intent']
        : lang === 'cn'
        ? ['启动客制化开发信与多渠道接触', '开始取得初步买家回复', '分类高意向与低意向对象']
        : ['啟動客製化開發信與多渠道接觸', '開始取得初步買家回覆', '分類高意向與低意向對象'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      )
    },
    {
      id: 3,
      title: lang === 'en' ? 'Filter & Quote' : lang === 'cn' ? '筛选询价与进入报价' : '篩選詢價與進入報價',
      desc: lang === 'en' ? 'Filter valid inquiries and move them to the quoting stage.' : lang === 'cn' ? '筛选有效询价并进入报价' : '篩選有效詢價並進入報價',
      week: lang === 'en' ? 'Week 5-6' : (lang === 'cn' ? '第 5-6 週' : '第 5-6 週'),
      details: lang === 'en'
        ? ['Filter low-intent replies', 'Confirm specific needs and specs', 'Assist in sending quotes']
        : lang === 'cn'
        ? ['筛选有效询价与采购需求', '确认产品规格、MOQ、交期等信息', '协助准备与推进报价']
        : ['篩選有效詢價與採購需求', '確認產品規格、MOQ、交期等資訊', '協助準備與推進報價'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      )
    },
    {
      id: 4,
      title: lang === 'en' ? 'Samples & Closing' : lang === 'cn' ? '样品、谈判与合作推进' : '樣品、談判與合作推進',
      desc: lang === 'en' ? 'Continuous follow-up on samples, negotiations, and closing.' : lang === 'cn' ? '持续推进样品、报价与合作' : '持續推進樣品、報價與合作',
      week: lang === 'en' ? 'Week 6+' : (lang === 'cn' ? '第 6 週起' : '第 6 週起'),
      details: lang === 'en'
        ? ['Arrange samples and follow-up', 'Negotiate terms and contracts', 'Assist in final closing and orders']
        : lang === 'cn'
        ? ['协助样品寄送与测试', '推进商务条件与合作细节', '持续协助成交与下单']
        : ['協助樣品寄送與測試', '推進商務條件與合作細節', '持續協助成交與下單'],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      )
    }
  ]

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                {lang === 'en' ? 'The Progress You Will See' : lang === 'cn' ? '你会看到的实际进展' : '你會看到的實際進展'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                {lang === 'en'
                  ? 'Not abstract marketing activity, but clear outputs you can see at each stage.'
                  : lang === 'cn'
                  ? '不是抽象的营销执行，而是每个阶段都能看见的实际产出。'
                  : '不是抽象的行銷執行，而是每一階段都能看見的實際產出。'}
            </p>
        </div>
        
        <div className="relative grid md:grid-cols-4 gap-8">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-16 left-0 w-full h-0.5 bg-gray-200 z-0"></div>
            
            {steps.map((s, idx) => (
                <div key={s.id} className="relative z-10 text-center group">
                    <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 relative z-20">
                        {s.week}
                    </div>
                    <div className="w-24 h-24 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400 group-hover:border-blue-600 group-hover:text-blue-600 transition duration-300 shadow-sm bg-white relative z-10">
                        {s.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{s.title}</h3>
                    <p className="text-gray-600 font-medium px-4 mb-4 text-sm">{s.desc}</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                        {s.details.map((d, i) => (
                            <li key={i}>• {d}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

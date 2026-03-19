import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'
import { cnText } from '@/lib/cnText'

const service: ServiceSeo = {
  slug: 'export-marketing',
  title: {
    cn: '出口行銷策略（Export Marketing Strategy）｜內容與通路導向的海外成長',
    zh: '出口行銷策略（Export Marketing Strategy）｜內容與通路導向的海外成長',
    en: 'Export Marketing Strategy | Content & Channel Growth for Overseas Markets',
  },
  description: {
    cn: '結合市場進入策略（Market Entry）與內容行銷：從目標市場分析、通路選擇到 SEO 內容架構，建立可持續獲客的海外成長引擎。',
    zh: '結合市場進入策略（Market Entry）與內容行銷：從目標市場分析、通路選擇到 SEO 內容架構，建立可持續獲客的海外成長引擎。',
    en: 'Combine market entry strategy with content marketing: from market analysis and channel selection to SEO architecture, building a sustainable growth engine.',
  },
  h1: { cn: '出口行銷與市場進入策略', zh: '出口行銷與市場進入策略', en: 'Export Marketing & Market Entry Strategy' },
  problem: {
    cn: ['想做外銷但不知道從哪個市場開始，缺乏數據支持的進入策略。', '網站有流量但沒詢價，內容太像產品型錄，缺乏解決方案與信任感。', '行銷與業務斷鏈：行銷只看流量，業務只想要資料，中間沒有轉換機制。'],
    zh: ['想做外銷但不知道從哪個市場開始，缺乏數據支持的進入策略。', '網站有流量但沒詢價，內容太像產品型錄，缺乏解決方案與信任感。', '行銷與業務斷鏈：行銷只看流量，業務只想要資料，中間沒有轉換機制。'],
    en: ['Unsure which market to enter first; lacking data-driven entry strategy.', 'Traffic but no inquiries; content is just a catalog, lacking solutions and trust.', 'Marketing/Sales disconnect: Marketing chases traffic, Sales wants leads, with no conversion bridge.'],
  },
  solution: {
    cn: ['我們整合「市場進入策略」與「內容行銷系統」：先確認目標市場與通路，再建立對應的 SEO 內容與轉換路徑。', '從關鍵字佈局到落地頁優化，讓你的網站變成 24 小時運作的業務開發員。'],
    zh: ['我們整合「市場進入策略」與「內容行銷系統」：先確認目標市場與通路，再建立對應的 SEO 內容與轉換路徑。', '從關鍵字佈局到落地頁優化，讓你的網站變成 24 小時運作的業務開發員。'],
    en: ['We integrate "Market Entry Strategy" with "Content Marketing": define markets/channels first, then build SEO content and conversion paths.', 'From keyword clusters to landing pages, turning your site into a 24/7 business developer.'],
  },
  whatIs: {
    cn: ['Export Marketing Strategy 是外銷成長的導航圖：它定義了「去哪裡（市場）」、「賣給誰（ICP）」以及「如何被看見（內容與通路）」。'],
    zh: ['Export Marketing Strategy 是外銷成長的導航圖：它定義了「去哪裡（市場）」、「賣給誰（ICP）」以及「如何被看見（內容與通路）」。'],
    en: ['Export Marketing Strategy is your growth map: defining "Where (Markets)", "Who (ICP)", and "How to be seen (Content & Channels)".'],
  },
  howWorks: {
    cn: ['成功的出口行銷不只是買廣告。你需要先有清楚的市場定位（Market Entry），再配合能回答買家問題的內容（Content），最後用正確的通路（Channel）放大聲量。'],
    zh: ['成功的出口行銷不只是買廣告。你需要先有清楚的市場定位（Market Entry），再配合能回答買家問題的內容（Content），最後用正確的通路（Channel）放大聲量。'],
    en: ['Successful export marketing isn\'t just ads. You need clear positioning (Market Entry), content that answers buyer questions, and channels to amplify reach.'],
  },
  process: {
    cn: ['市場進入分析：透過數據找出最有潛力的國家與通路。', '買家輪廓（ICP）定義：鎖定精準的企業類型與決策人。', '內容架構規劃：建立服務頁、應用頁與知識文章群集。', '轉換路徑優化：設計高轉換的詢價表單與資源磁鐵。', '持續迭代：根據數據調整關鍵字與內容策略。'],
    zh: ['市場進入分析：透過數據找出最有潛力的國家與通路。', '買家輪廓（ICP）定義：鎖定精準的企業類型與決策人。', '內容架構規劃：建立服務頁、應用頁與知識文章群集。', '轉換路徑優化：設計高轉換的詢價表單與資源磁鐵。', '持續迭代：根據數據調整關鍵字與內容策略。'],
    en: ['Market Entry Analysis: Data-driven selection of high-potential countries.', 'ICP Definition: Pinpoint exact company types and decision-makers.', 'Content Architecture: Build service, application, and knowledge clusters.', 'Conversion Optimization: High-converting forms and lead magnets.', 'Iteration: Adjust strategy based on performance data.'],
  },
  tools: {
    cn: ['市場貿易數據（海關數據/產業報告）。', '關鍵字研究工具（SEMrush/Ahrefs）。', '內容管理系統（CMS）與 SEO 架構。'],
    zh: ['市場貿易數據（海關數據/產業報告）。', '關鍵字研究工具（SEMrush/Ahrefs）。', '內容管理系統（CMS）與 SEO 架構。'],
    en: ['Trade Data (Customs/Industry Reports).', 'Keyword Research (SEMrush/Ahrefs).', 'CMS & SEO Architecture.'],
  },
  checklist: {
    cn: ['目標市場優先序已確認（Tier 1/2/3）。', 'ICP 與決策人痛點已定義。', '網站 SEO 架構與關鍵字群集已規劃。', '詢價轉換路徑（CTA）已埋設。'],
    zh: ['目標市場優先序已確認（Tier 1/2/3）。', 'ICP 與決策人痛點已定義。', '網站 SEO 架構與關鍵字群集已規劃。', '詢價轉換路徑（CTA）已埋設。'],
    en: ['Target markets prioritized (Tier 1/2/3).', 'ICP and pains defined.', 'SEO architecture and keyword clusters planned.', 'Conversion paths (CTAs) implemented.'],
  },
  results: {
    cn: [
      { label: '策略聚焦', value: '市場定位', desc: '不再亂槍打鳥，資源集中在高潛力市場。' },
      { label: '流量品質', value: '精準流量', desc: '吸引到的是有真實需求的潛在買家。' },
      { label: '獲客成本', value: '長期降低', desc: '內容資產會持續累積長尾效益。' },
    ],
    zh: [
      { label: '策略聚焦', value: '市場定位', desc: '不再亂槍打鳥，資源集中在高潛力市場。' },
      { label: '流量品質', value: '精準流量', desc: '吸引到的是有真實需求的潛在買家。' },
      { label: '獲客成本', value: '長期降低', desc: '內容資產會持續累積長尾效益。' },
    ],
    en: [
      { label: 'Strategic focus', value: 'Positioning', desc: 'Resources focused on high-potential markets.' },
      { label: 'Traffic quality', value: 'Intent', desc: 'Attract buyers with real needs.' },
      { label: 'CAC', value: 'Lower', desc: 'Content assets compound value over time.' },
    ],
  },
  funnel: {
    cn: [
      { label: '策略定義', value: '1' },
      { label: '關鍵字群集', value: '5' },
      { label: '內容頁面', value: '20' },
      { label: '長尾曝光', value: '10k+' },
      { label: '詢價成長', value: '3x' },
    ],
    zh: [
      { label: '策略定義', value: '1' },
      { label: '關鍵字群集', value: '5' },
      { label: '內容頁面', value: '20' },
      { label: '長尾曝光', value: '10k+' },
      { label: '詢價成長', value: '3x' },
    ],
    en: [
      { label: 'Strategy', value: '1' },
      { label: 'Clusters', value: '5' },
      { label: 'Pages', value: '20' },
      { label: 'Impressions', value: '10k+' },
      { label: 'Inquiry Growth', value: '3x' },
    ],
  },
  industries: {
    cn: ['機械設備', '電子零元件', '汽車零件', '醫療器材', '化工材料'],
    zh: ['機械設備', '電子零元件', '汽車零件', '醫療器材', '化工材料'],
    en: ['Machinery', 'Electronics', 'Automotive', 'Medical', 'Chemicals'],
  },
  caseStudy: {
    title: { cn: '從代工轉品牌：以內容行銷切入歐洲市場', zh: '從代工轉品牌：以內容行銷切入歐洲市場', en: 'OEM to Brand: Entering Europe via Content Marketing' },
    desc: {
      cn: '透過「歐洲市場進入策略」與「技術內容群集」，成功建立品牌權威並獲得當地經銷商詢價。',
      zh: '透過「歐洲市場進入策略」與「技術內容群集」，成功建立品牌權威並獲得當地經銷商詢價。',
      en: 'Built brand authority and distributor inquiries via "Europe Entry Strategy" and technical content clusters.',
    },
    link: '/case-studies/machinery',
  },
  faq: [
    {
      q: { cn: '市場進入策略跟 SEO 有什麼關係？', zh: '市場進入策略跟 SEO 有什麼關係？', en: 'Link between Market Entry & SEO?' },
      a: { cn: '非常有關係。你要進入哪個市場，決定了你要做哪些語言、哪些在地化關鍵字，以及內容要解決哪些當地法規或規格問題。', zh: '非常有關係。你要進入哪個市場，決定了你要做哪些語言、哪些在地化關鍵字，以及內容要解決哪些當地法規或規格問題。', en: 'Critical. Your target market dictates language, localized keywords, and content addressing local regs/specs.' },
    },
    {
      q: { cn: '這套策略多久見效？', zh: '這套策略多久見效？', en: 'How fast does it work?' },
      a: { cn: '策略定義約 2-4 週；內容發酵通常需 3-6 個月。但正確的策略能避免你走錯方向浪費的一兩年。', zh: '策略定義約 2-4 週；內容發酵通常需 3-6 個月。但正確的策略能避免你走錯方向浪費的一兩年。', en: 'Strategy takes 2-4 weeks; content traction 3-6 months. But the right strategy saves years of wrong turns.' },
    },
  ],
  ctaTitle: { cn: '規劃你的出口行銷策略', zh: '規劃你的出口行銷策略', en: 'Plan Your Export Strategy' },
  ctaDesc: { cn: '告訴我們你的產品與現況，我們協助評估適合的市場進入點與行銷切角。', zh: '告訴我們你的產品與現況，我們協助評估適合的市場進入點與行銷切角。', en: 'Share your product and status. We’ll help assess the right market entry points and angles.' },
  relatedLinks: [
    { label: { cn: '外銷客戶開發（核心服務）', zh: '外銷客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
    { label: { cn: '方法：Outreach System', zh: '方法：Outreach System', en: 'Method: Outreach System' }, href: '/cold-email-outreach' },
    { label: { cn: '取得市場切入建議（CTA）', zh: '取得市場切入建議（CTA）', en: 'Get Market Entry Advice' }, href: '/export-market-analysis' },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const baseUrl = 'https://sungene.net'
  return {
    title: cnText(lang, service.title[lang]),
    description: cnText(lang, service.description[lang]),
    alternates: {
      canonical: `${baseUrl}/${lang}/export-marketing`,
      languages: {
        'zh-CN': `https://sungene.net/cn/export-marketing`,
        'zh-TW': `https://sungene.net/zh/export-marketing`,
        'en': `https://sungene.net/en/export-marketing`,
        'x-default': `https://sungene.net/cn/export-marketing`,
      }
    },
    
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const withCaseLink = {
    ...service,
    caseStudy: { ...service.caseStudy, link: `/${lang}${service.caseStudy.link}` },
    relatedLinks: service.relatedLinks?.map((x) => ({ ...x, href: `/${lang}${x.href}` })),
  }
  return <ServiceSeoPage lang={lang} service={withCaseLink} />
}

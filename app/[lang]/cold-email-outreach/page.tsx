import { Lang } from '@/lib/i18n'
import ServiceSeoPage, { ServiceSeo } from '@/components/ServiceSeoPage'
import { cnText } from '@/lib/cnText'

const service: ServiceSeo = {
  slug: 'cold-email-outreach',
  title: {
    cn: 'Outreach System｜Cold Email 與 LinkedIn 多通路開發系統',
    zh: 'Outreach System｜Cold Email 與 LinkedIn 多通路開發系統',
    en: 'Outreach System | Multi-channel Cold Email & LinkedIn Prospecting',
  },
  description: {
    cn: '結合 Cold Email 與 LinkedIn 的多觸點開發系統：建立可回覆的訊息框架，並以 4–6 次節奏式跟進獲取高品質詢價。',
    zh: '結合 Cold Email 與 LinkedIn 的多觸點開發系統：建立可回覆的訊息框架，並以 4–6 次節奏式跟進獲取高品質詢價。',
    en: 'Multi-touch outreach system combining Cold Email & LinkedIn: replyable frameworks and 4–6 follow-up cadences to generate qualified inquiries.',
  },
  h1: { cn: '多通路開發系統 (Outreach System)', zh: '多通路開發系統 (Outreach System)', en: 'Multi-channel Outreach System' },
  problem: {
    cn: ['單一管道開發效率低：只寄 Email 容易進垃圾信，只做 LinkedIn 擴充太慢。', '訊息太 generic：沒有針對買家痛點客製化，回覆率低。', '缺乏跟進節奏：只寄一次就放棄，錯失 80% 的潛在機會。'],
    zh: ['單一管道開發效率低：只寄 Email 容易進垃圾信，只做 LinkedIn 擴充太慢。', '訊息太 generic：沒有針對買家痛點客製化，回覆率低。', '缺乏跟進節奏：只寄一次就放棄，錯失 80% 的潛在機會。'],
    en: ['Single-channel is slow: Email-only risks spam, LinkedIn-only scales poorly.', 'Generic messaging: Lack of customization kills reply rates.', 'No cadence: Stopping after one touch misses 80% of opportunities.'],
  },
  solution: {
    cn: ['我們建立「Email + LinkedIn」混合開發節奏，多觸點接觸買家。', '設計「痛點 + 證據 + CTA」的高回覆率訊息框架。', '執行 4–6 次系統化跟進，確保訊息被看見並獲得回應。'],
    zh: ['我們建立「Email + LinkedIn」混合開發節奏，多觸點接觸買家。', '設計「痛點 + 證據 + CTA」的高回覆率訊息框架。', '執行 4–6 次系統化跟進，確保訊息被看見並獲得回應。'],
    en: ['We build a mixed "Email + LinkedIn" cadence for multi-touch engagement.', 'Design high-reply frameworks using "Pain + Proof + CTA".', 'Execute 4–6 systematic follow-ups to ensure visibility and replies.'],
  },
  whatIs: {
    cn: ['Outreach System 是主動開發的核心引擎：整合決策人資料、訊息與節奏，將陌生開發轉化為可預測的詢價來源。'],
    zh: ['Outreach System 是主動開發的核心引擎：整合決策人資料、訊息與節奏，將陌生開發轉化為可預測的詢價來源。'],
    en: ['The Outreach System is the engine of outbound: integrating lists, messaging, and cadence to turn cold prospects into predictable inquiries.'],
  },
  howWorks: {
    cn: ['買家很忙，單一管道很容易被忽略。我們透過 Email 寄送詳細資訊，並用 LinkedIn 建立人脈連結，雙管齊下提高信任感與回覆率。'],
    zh: ['買家很忙，單一管道很容易被忽略。我們透過 Email 寄送詳細資訊，並用 LinkedIn 建立人脈連結，雙管齊下提高信任感與回覆率。'],
    en: ['Buyers are busy. We use Email for details and LinkedIn for connection, doubling down to build trust and reply rates.'],
  },
  process: {
    cn: ['準備素材：產品摘要與信任證據（案例/認證）。', '建立混合腳本：Email 序列 + LinkedIn 連結/訊息腳本。', '執行多觸點節奏：Email 跟進 4-6 次，穿插 LinkedIn 互動。', '回覆處理：分類別意向（合格/不匹配）並推進會議。'],
    zh: ['準備素材：產品摘要與信任證據（案例/認證）。', '建立混合腳本：Email 序列 + LinkedIn 連結/訊息腳本。', '執行多觸點節奏：Email 跟進 4-6 次，穿插 LinkedIn 互動。', '回覆處理：分類別意向（合格/不匹配）並推進會議。'],
    en: ['Prepare assets: Product briefs and proof (cases/certs).', 'Build mixed scripts: Email sequences + LinkedIn connection/messages.', 'Execute multi-touch cadence: 4-6 emails interlaced with LinkedIn steps.', 'Handle replies: Triage intent and book meetings.'],
  },
  tools: {
    cn: ['自動化開發工具（序列寄送）。', 'LinkedIn Sales Navigator（精準資料）。', 'CRM 追蹤回覆狀態。'],
    zh: ['自動化開發工具（序列寄送）。', 'LinkedIn Sales Navigator（精準資料）。', 'CRM 追蹤回覆狀態。'],
    en: ['Outreach automation tools (sequencing).', 'LinkedIn Sales Navigator (targeting).', 'CRM for reply tracking.'],
  },
  checklist: {
    cn: ['訊息框架包含痛點與證據。', 'Email 與 LinkedIn 步驟已交錯安排。', '跟進次數至少 4 次。', '回覆分類別規則已定義。'],
    zh: ['訊息框架包含痛點與證據。', 'Email 與 LinkedIn 步驟已交錯安排。', '跟進次數至少 4 次。', '回覆分類別規則已定義。'],
    en: ['Message framework includes pain and proof.', 'Email and LinkedIn steps interlaced.', 'At least 4 follow-ups planned.', 'Reply triage rules defined.'],
  },
  results: {
    cn: [
      { label: '回覆率', value: '提升', desc: '多管道接觸通常比單一 Email 高 2-3 倍。' },
      { label: '信任感', value: '建立', desc: 'LinkedIn 真人檔案增加可信度。' },
      { label: '商機品質', value: '可控', desc: '透過對話確認需求後才交付。' },
    ],
    zh: [
      { label: '回覆率', value: '提升', desc: '多管道接觸通常比單一 Email 高 2-3 倍。' },
      { label: '信任感', value: '建立', desc: 'LinkedIn 真人檔案增加可信度。' },
      { label: '商機品質', value: '可控', desc: '透過對話確認需求後才交付。' },
    ],
    en: [
      { label: 'Reply rates', value: 'Higher', desc: 'Multi-channel outperforms single-channel by 2-3x.' },
      { label: 'Trust', value: 'Built', desc: 'LinkedIn profiles add human credibility.' },
      { label: 'Lead quality', value: 'Controlled', desc: 'Needs verified via dialogue before delivery.' },
    ],
  },
  funnel: {
    cn: [
      { label: '接觸資料', value: '500' },
      { label: 'LinkedIn 連結', value: '150' },
      { label: '開信/閱讀', value: '300' },
      { label: '回覆', value: '50' },
      { label: '會議/詢價', value: '12' },
    ],
    zh: [
      { label: '接觸資料', value: '500' },
      { label: 'LinkedIn 連結', value: '150' },
      { label: '開信/閱讀', value: '300' },
      { label: '回覆', value: '50' },
      { label: '會議/詢價', value: '12' },
    ],
    en: [
      { label: 'Outreach', value: '500' },
      { label: 'Connections', value: '150' },
      { label: 'Opens/Reads', value: '300' },
      { label: 'Replies', value: '50' },
      { label: 'Meetings/Inquiries', value: '12' },
    ],
  },
  industries: {
    cn: ['機械設備', '五金工具', '電子零元件', 'OEM/ODM 代工'],
    zh: ['機械設備', '五金工具', '電子零元件', 'OEM/ODM 代工'],
    en: ['Machinery', 'Hardware Tools', 'Electronics', 'OEM/ODM Services'],
  },
  caseStudy: {
    title: { cn: '日本市場：45% 開信率、8% 回覆率（在地化 + 跟進）', zh: '日本市場：45% 開信率、8% 回覆率（在地化 + 跟進）', en: 'Japan: 45% open rate, 8% reply rate (localization + cadence)' },
    desc: { cn: '以在地化寫法與節奏式跟進克服文化壁壘，建立持續對話。', zh: '以在地化寫法與節奏式跟進克服文化壁壘，建立持續對話。', en: 'Localized messaging and follow-ups overcame barriers and sustained dialogues.' },
    link: '/case-studies/packaging',
  },
  faq: [
    {
      q: { cn: 'LinkedIn 加好友有限制嗎？', zh: 'LinkedIn 加好友有限制嗎？', en: 'Are there LinkedIn limits?' },
      a: { cn: '有，我們會嚴格控制每日邀請數量（約 20-30 人）以保護帳號安全。', zh: '有，我們會嚴格控制每日邀請數量（約 20-30 人）以保護帳號安全。', en: 'Yes. We strictly limit daily invites (approx 20-30) to protect account safety.' },
    },
    {
      q: { cn: '要跟進幾次？', zh: '要跟進幾次？', en: 'How many follow-ups?' },
      a: { cn: '建議 4–6 次，間隔 3–7 天，並逐封加入不同證據（案例/規格/應用）。', zh: '建議 4–6 次，間隔 3–7 天，並逐封加入不同證據（案例/規格/應用）。', en: '4–6 follow-ups, 3–7 days apart, adding different proof points each time.' },
    },
  ],
  ctaTitle: { cn: '取得市場切入建議', zh: '取得市場切入建議', en: 'Get Market Entry Advice' },
  ctaDesc: { cn: '提交產品與市場，我們回覆可行的訊息框架與跟進節奏建議。', zh: '提交產品與市場，我們回覆可行的訊息框架與跟進節奏建議。', en: 'Submit your product and markets. We’ll reply with a feasible messaging and cadence plan.' },
  relatedLinks: [
    { label: { cn: '方法：Buyer Database Building', zh: '方法：Buyer Database Building', en: 'Method: Buyer Database Building' }, href: '/overseas-buyer-lists' },
    { label: { cn: '外銷客戶開發（核心服務）', zh: '外銷客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
    { label: { cn: '成果：Qualified B2B Leads', zh: '成果：Qualified B2B Leads', en: 'Outcome: Qualified B2B Leads' }, href: '/qualified-b2b-leads' },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const baseUrl = 'https://sungenelite.com'
  return {
    title: cnText(lang, service.title[lang]),
    description: cnText(lang, service.description[lang]),
    alternates: {
      canonical: `${baseUrl}/${lang}/cold-email-outreach`,
      languages: {
        'zh-CN': `https://sungenelite.com/cn/cold-email-outreach`,
        'zh-TW': `https://sungenelite.com/zh/cold-email-outreach`,
        'en': `https://sungenelite.com/en/cold-email-outreach`,
        'x-default': `https://sungenelite.com/zh/cold-email-outreach`,
      }
    },
    
  }
}

export default async function Page({ params }: { params: Promise<{ lang: Lang }> }) {
  const { lang } = await params
  const withLang = {
    ...service,
    caseStudy: { ...service.caseStudy, link: `/${lang}${service.caseStudy.link}` },
    relatedLinks: service.relatedLinks?.map((x) => ({ ...x, href: `/${lang}${x.href}` })),
  }
  return <ServiceSeoPage lang={lang} service={withLang} />
}

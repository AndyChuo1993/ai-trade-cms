import { Lang } from '@/lib/i18n'

export type FAQCategory = 'general' | 'service' | 'process' | 'pricing'

export interface FAQItem {
  question: { zh: string; en: string }
  answer: { zh: string; en: string }
  category: FAQCategory
}

export const faqs: FAQItem[] = [
  // General
  {
    category: 'general',
    question: { zh: '你們只服務台灣企業嗎？', en: 'Do you only serve Taiwan companies?' },
    answer: { zh: '不，我們服務全球客戶。雖然我們的總部位於台灣，但我們的團隊具備多語言能力，且熟悉全球主要市場（北美、歐洲、日本、東南亞）的商業文化。', en: 'No, we serve clients globally. While HQ is in Taiwan, our team is multilingual and familiar with business cultures in major markets like NA, EU, Japan, and SEA.' },
  },
  {
    category: 'general',
    question: { zh: '是否適合我的產業？', en: 'Is it suitable for my industry?' },
    answer: { zh: '只要您的目標客戶是 B2B 企業（如製造商、進口商、經銷商），我們的服務就適用。我們已成功服務過機械、電子、紡織、化工、食品、醫療器材等多個領域。', en: 'As long as your target is B2B (manufacturers, importers, distributors), our service applies. We have served machinery, electronics, textile, chemical, food, medical devices, etc.' },
  },
  {
    category: 'general',
    question: { zh: '與聘請外貿業務有何差別？', en: 'Difference from hiring sales?' },
    answer: { zh: '聘請業務需要負擔勞健保、培訓成本與管理風險，且往往需要數月才能看到產出。SunGene 提供即戰力團隊，省去培訓期，且成本通常低於一位資深業務的薪資。', en: 'Hiring sales involves overhead, training costs, and management risks, taking months to yield results. SunGene provides an instant pro team, skipping training, often at a lower cost than one senior hire.' },
  },
  
  // Service
  {
    category: 'service',
    question: { zh: '多久可以看到詢盤？', en: 'How long to see inquiries?' },
    answer: { zh: '對於「海外客戶開發」服務，通常在專案啟動後 2-3 週內會開始收到潛在客戶的回覆。對於「外貿外包」服務，我們會在第一週內完成交接並開始處理現有詢盤。', en: 'For "Cold Outreach", replies typically start in 2-3 weeks. For "Outsourcing", we complete handover and start handling inquiries within the first week.' },
  },
  {
    category: 'service',
    question: { zh: '你們是否簽署保密協定 (NDA)？', en: 'Do you sign NDAs?' },
    answer: { zh: '是的，我們非常重視客戶的商業機密。在合作開始前，我們都會簽署嚴格的保密協定，確保您的客戶資料、價格策略與技術文件不會外流。', en: 'Yes, we value client confidentiality. We sign strict NDAs before starting to ensure your client data, pricing, and tech docs remain secure.' },
  },
  {
    category: 'service',
    question: { zh: '名單資料的準確度如何？', en: 'How accurate is the data?' },
    answer: { zh: '我們的名單經過機器驗證與人工抽檢雙重把關，Email 有效性保證在 95% 以上。若發現無效名單比例過高，我們承諾免費補足。', en: 'Our lists undergo machine verification and manual checks, guaranteeing 95%+ email validity. We promise to replace invalid leads for free if the bounce rate is high.' },
  },

  // Process
  {
    category: 'process',
    question: { zh: '合作流程是怎樣的？', en: 'What is the process?' },
    answer: { zh: '1. 需求諮詢確認目標市場 2. 簽署合約與 NDA 3. 產品與資料交接 4. 系統設定與名單建立 5. 正式啟動服務 6. 定期匯報成效。', en: '1. Consultation & Market Goal 2. Contract & NDA 3. Product/Data Handover 4. System Setup & List Building 5. Launch 6. Regular Reporting.' },
  },
  {
    category: 'process',
    question: { zh: '我需要提供什麼資料？', en: 'What do I need to provide?' },
    answer: { zh: '我們需要您的產品型錄 (Catalog)、公司簡介 (Profile)、目標客戶輪廓 (ICP)、以及您目前的價格表或報價策略。', en: 'We need your Product Catalog, Company Profile, Ideal Customer Profile (ICP), and current Price List or quoting strategy.' },
  },

  // Pricing
  {
    category: 'pricing',
    question: { zh: '你們如何收費？', en: 'How do you charge?' },
    answer: { zh: '我們提供三種模式：「名單買斷」依筆數計費；「專案開發」採專案費用；「外貿外包」採月費訂閱制。詳細費用請參考價格頁面。', en: 'Three models: "List Purchase" per lead; "Project Outreach" per project; "Outsourcing" monthly retainer. See Pricing page for details.' },
  },
  {
    category: 'pricing',
    question: { zh: '是否有最低合約期限？', en: 'Minimum contract term?' },
    answer: { zh: '「名單開發」與「主動開發」為一次性或短約專案。「外貿外包」建議至少簽約 6 個月，以確保有足夠時間建立穩定的銷售漏斗。', en: '"Lead Gen" and "Outreach" are one-time or short-term. "Outsourcing" recommends a 6-month minimum to build a stable sales funnel.' },
  },
]

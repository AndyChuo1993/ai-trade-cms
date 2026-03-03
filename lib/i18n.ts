export type Lang = 'zh-Hant' | 'en'

const dict: Record<Lang, Record<string, string>> = {
  'zh-Hant': {
    // Header
    nav_home: '首頁',
    nav_solutions: '解決方案',
    nav_services: '服務',
    nav_product: 'AI 平台',
    nav_cases: '成功案例',
    nav_about: '關於我們',
    nav_contact: '聯絡我們',
    cta_inquiry: '立即洽詢',

    // Hero
    hero_title: '打造全球貿易基礎設施',
    hero_subtitle: 'AI 驅動自動化，實現可規模化的客戶開發。',
    hero_cta_deploy: '部署您的增長基礎設施',
    hero_cta_view: '查看架構案例',
    
    // Who We Are & FAQ (New)
    who_we_are_title: '我們是誰',
    who_we_are_text: 'SunGene 是一家 AI 驅動的貿易基礎設施公司，專注於全球客戶開發系統。',
    
    faq_q1: 'SunGene 與傳統外包有何不同？',
    faq_a1: '我們為您建立內部的基礎設施，而不僅僅是執行任務。它是可擴展且數據驅動的。',
    faq_q2: '系統是否符合國際數據法規？',
    faq_a2: '是的，我們嚴格遵守 GDPR 和數據最小化原則。',
    faq_q3: '部署需要多長時間？',
    faq_a3: '通常需要 90 天來建立穩定運行的系統。',
    
    // Stats
    stats_weekly_inquiries: '每週穩定詢盤',
    stats_pipeline_value: '潛在訂單價值',
    stats_pipeline_value_num: '約 NT$1.35億',
    stats_exec_access: '直達決策層',
    stats_cac_reduction: '獲客成本降低',

    // Solution Page (Full)
    sol_page_title: '解決方案',
    sol_page_subtitle: '打造可規模化的全球客戶開發架構',
    sol_intro_p1: 'SunGene 並非單一工具或外包服務，而是一套可部署、可擴張、可持續運作的貿易增長基礎設施。',
    sol_intro_p2: '我們將 AI 技術、外貿實戰經驗與流程工程整合為一套結構化系統，協助企業從市場識別、名單建構、開發節奏、詢盤管理到訂單轉化，建立完整且穩定的增長模型。',
    
    sol_s1_title: '01 市場智能建模（Market Intelligence）',
    sol_s1_desc: '在正式開發之前，我們先建立清晰的市場結構。',
    sol_s1_li1: '設定目標國家與區域優先順序',
    sol_s1_li2: '建立產業分類與需求信號模型',
    sol_s1_li3: '分析競爭環境與潛在市場容量',
    sol_s1_li4: '設計理想客戶輪廓（ICP）',
    sol_s1_note: '這一步的目標，是讓開發不是「亂槍打鳥」，而是有策略的精準佈局。',

    sol_s2_title: '02 名單工程系統（Prospecting Engine）',
    sol_s2_desc: '透過多來源資料整合與 AI 篩選技術，我們建立高質量潛在客戶資料庫。',
    sol_s2_li1: '設定搜尋職位與決策鏈',
    sol_s2_li2: 'AI 分析企業規模與採購能力',
    sol_s2_li3: '建立名單分級與風險標記',
    sol_s2_li4: '黑名單與合規審核機制',
    sol_s2_note: '這不是單純抓名單，而是建構可持續使用的客戶資產池。',

    sol_s3_title: '03 智能開發與自動化部署（AI Outreach Deployment）',
    sol_s3_desc: '將策略轉化為可自動執行的開發節奏。',
    sol_s3_li1: '智能 AI 寫信模板生成',
    sol_s3_li2: '信件內容產業語境優化',
    sol_s3_li3: '回信語意判讀與分類',
    sol_s3_li4: '跟進節奏與自動搜尋時間設定',
    sol_s3_li5: 'AI 自動寄信與矩陣跟進',
    sol_s3_note: '系統會持續學習與優化，提高回覆率與精準度。',

    sol_s4_title: '04 結構化轉化系統（Structured Conversion）',
    sol_s4_desc: '當詢盤進入後，系統負責管理與優化轉化流程。',
    sol_s4_li1: '客戶詢盤分級與分流',
    sol_s4_li2: '與 CRM / 表單系統整合',
    sol_s4_li3: '管理跟進節點與負責人',
    sol_s4_li4: '建立訂單轉化追蹤儀表板',
    sol_s4_li5: '數據回饋優化模型',
    sol_s4_note: '最終目標不是發信，而是穩定轉化為訂單。',

    sol_outcome_title: '成果',
    sol_outcome_desc: '這套架構能帶來：',
    sol_outcome_li1: '穩定且可預測的詢盤節奏',
    sol_outcome_li2: '提升決策層觸達效率',
    sol_outcome_li3: '降低獲客成本',
    sol_outcome_li4: '建立企業內部可複製的增長系統',
    sol_outcome_note: '我們打造的是一套長期可運行的基礎設施，而非短期戰術。',

    // Services Page (Full)
    serv_page_title: '服務內容',
    serv_page_subtitle: 'SunGene 提供的不只是系統，而是完整的部署與營運支持。',
    
    serv_s1_name: '01 增長系統部署',
    serv_s1_target: '適用於希望建立自主客戶開發能力的企業。',
    serv_s1_li1: '建立完整市場建模與名單工程',
    serv_s1_li2: '部署 AI 自動化開發系統',
    serv_s1_li3: '建立詢盤與轉化管理流程',
    serv_s1_li4: '提供標準化模板與操作指南',
    serv_s1_li5: '交付數據儀表板與績效模型',
    serv_s1_goal: '目標：90 天內建立可穩定運行的增長系統。',

    serv_s2_name: '02 企業大腦預訓練方案',
    serv_s2_target: '適用於希望打造企業級 AI 知識系統的組織。',
    serv_s2_li1: '客戶資料與歷史案例訓練',
    serv_s2_li2: '建立專屬語境與溝通模型',
    serv_s2_li3: '訓練行業專用開發模板',
    serv_s2_li4: '建立內部知識庫與自動分類系統',
    serv_s2_goal: '目標：讓 AI 成為企業內部的增長中樞。',

    serv_s3_name: '03 全方位託管方案',
    serv_s3_target: '適用於希望外包整體開發營運的企業。',
    serv_s3_li1: '策略設計與市場規劃',
    serv_s3_li2: '名單篩選與開發部署',
    serv_s3_li3: '自動化跟進管理',
    serv_s3_li4: '詢盤處理與轉化優化',
    serv_s3_li5: '每月成效報告與優化建議',
    serv_s3_goal: '目標：讓企業專注產品與生產，我們負責結構化增長。',

    serv_s4_name: '04 AI 代操服務',
    serv_s4_target: '適用於希望快速啟動市場開發，但內部尚未建立團隊的企業。',
    serv_s4_li1: '目標國家與客群策略設定',
    serv_s4_li2: 'AI 名單工程與品質分級',
    serv_s4_li3: '智能開發模板設計與信件優化',
    serv_s4_li4: 'AI 自動寄信與矩陣跟進管理',
    serv_s4_li5: '詢盤分級與轉化節點管理',
    serv_s4_li6: '每月成效數據報告與策略優化',
    serv_s4_goal: '目標：在不增加企業人力成本的情況下，建立穩定、可預測的詢盤節奏與市場觸達能力。',

    serv_s5_name: '05 外貿業務外包',
    serv_s5_target: '適用於希望將海外客戶開發與跟進工作外包的企業。',
    serv_s5_li1: '海外市場策略與名單規劃',
    serv_s5_li2: '開發信發送與回覆處理',
    serv_s5_li3: '客戶需求分析與初步篩選',
    serv_s5_li4: '報價資料整理與溝通協助',
    serv_s5_li5: '跟進節奏管理與談判支持',
    serv_s5_li6: '成交前流程協助與資料彙整',
    serv_s5_goal: '目標：成為企業的海外業務延伸團隊，協助企業穩定擴展國際市場。',

    serv_s6_name: '06 客製化專案服務',
    serv_s6_target: '適用於具有特殊產業需求、特定市場策略或系統整合需求的企業。',
    serv_s6_li1: '指定國家市場深度研究',
    serv_s6_li2: '特定產業客戶鏈分析',
    serv_s6_li3: 'AI 系統與企業內部 CRM/ERP 串接',
    serv_s6_li4: '客戶資料清洗與再建模',
    serv_s6_li5: '專屬開發策略與話術訓練',
    serv_s6_li6: '大型專案客戶開發規劃',
    serv_s6_goal: '目標：建立符合企業長期發展藍圖的客製化增長基礎設施。',

    // AI Platform Page (Full)
    ai_page_title: 'AI 平台',
    ai_page_subtitle: '結構化全球客戶開發引擎',
    ai_intro_p1: 'SunGene AI 平台是一套整合市場建模、名單工程、自動化開發與轉化管理的智能系統。',
    ai_intro_p2: '它不只是發信工具，而是一個完整的商業運作架構。',
    
    ai_flow_title: '平台流程',
    
    ai_step1_title: '01 設定目標客群與國家',
    ai_step1_desc: '建立理想客戶輪廓（ICP），定義目標市場優先順序與產業範圍。',
    
    ai_step2_title: '02 設定搜尋職位與決策鏈',
    ai_step2_desc: '鎖定企業內部決策角色，分析採購鏈與影響鏈。',
    
    ai_step3_title: '03 智能 AI 寫信模板與信件判讀',
    ai_step3_desc: '依產業語境生成專屬開發信，並透過語意分析分類回信類型。',
    
    ai_step4_title: '04 跟進節奏與自動搜尋時間設定',
    ai_step4_desc: '根據國家時區與行業節奏，自動設定最佳發送與跟進時間。',
    
    ai_step5_title: '05 AI 自動寄信',
    ai_step5_desc: '系統批次部署，維持穩定節奏，避免人工錯誤。',
    
    ai_step6_title: '06 矩陣跟進',
    ai_step6_desc: '建立多層次跟進策略，提高觸達與回覆率。',
    
    ai_step7_title: '07 客戶詢盤',
    ai_step7_desc: '系統自動分類詢盤品質與潛力等級。',
    
    ai_step8_title: '08 詢盤分級與分流',
    ai_step8_desc: '將高潛力客戶導入優先流程，降低錯失風險。',
    
    ai_step9_title: '09 訂單轉化',
    ai_step9_desc: '結合 CRM 與內部流程，追蹤從詢盤到訂單的完整鏈條。',

    ai_core_title: '核心能力模組',
    
    ai_mod1_title: '全球供應鏈模組',
    ai_mod1_li1: '潛在供應來源識別',
    ai_mod1_li2: '成本結構分析',
    ai_mod1_li3: '品質與風險控管',
    
    ai_mod2_title: '客戶開發模組',
    ai_mod2_li1: 'AI 名單分析',
    ai_mod2_li2: '自動化開發',
    ai_mod2_li3: '客戶資料建檔與分級',
    
    ai_mod3_title: '系統整合模組',
    ai_mod3_li1: 'CRM 串接',
    ai_mod3_li2: 'API 整合',
    ai_mod3_li3: '數據儀表板',
    
    ai_mod4_title: '合規與風控模組',
    ai_mod4_li1: '黑名單管理',
    ai_mod4_li2: '操作日誌追蹤',
    ai_mod4_li3: '資料加密與權限控管',

    ai_why_title: '為什麼這套平台不同？',
    ai_why_li1: '可規模化，而非單點操作',
    ai_why_li2: '可預測的詢盤節奏',
    ai_why_li3: '內部可複製的增長架構',
    ai_why_li4: '數據可追溯與優化',
    ai_why_note: '這不是一個工具。這是一套基礎設施。',

    ai_data_title: '平台數據牆',
    ai_data_li1: '平均回覆率提升 2–4 倍',
    ai_data_li2: '開發效率提升 60%',
    ai_data_li3: '獲客成本降低 30–50%',
    ai_data_li4: '開發週期縮短 40%',

    ai_sec_title: '企業級安全設計',
    ai_sec_li1: '資料最小化原則',
    ai_sec_li2: '權限分級管理',
    ai_sec_li3: '伺服器加密',
    ai_sec_li4: '合規審核機制',

    // Infrastructure Section
    infra_title: '基礎設施核心能力',
    infra_supply_title: '全球供應鏈',
    infra_supply_1: '端到端尋源',
    infra_supply_2: '成本優化',
    infra_supply_3: '品質控制',
    infra_client_title: '客戶開發',
    infra_client_1: 'AI 名單分析',
    infra_client_2: '自動化觸達',
    infra_client_3: 'CRM 管線設計',
    infra_system_title: '系統整合',
    infra_system_1: '客製 AI 平台',
    infra_system_2: '數據匹配引擎',
    infra_system_3: 'API 開發',
    infra_explore: '探索解決方案',
    infra_consult: '預約專家諮詢',

    // Industries
    ind_title: '我們服務的產業',
    ind_1: '製造業',
    ind_2: '電子業',
    ind_3: '貿易業',
    ind_4: '服務業',
    ind_5: '軟體業',
    ind_6: '客製化服務',
    partners_title: '合作夥伴',
    service_map_title: '服務國家分佈',
    service_map_img_alt: '全球服務地圖',

    // Case Studies
    cases_title: '成功案例',
    cases_subtitle: '以可複製的方法落地到可衡量的結果',
    read_more: '閱讀案例',
    case_before_title: '部署基礎設施前',
    case_after_title: '部署後',
    case_replicate_title: '準備複製這項成功？',
    case_cta_deploy: '部署您的增長基礎設施',
    
    // Solutions
    sol_title: '解決方案',
    sol_subtitle: '為企業構建完整的 AI 貿易增長閉環',
    sol_m1_title: '市場智能 (Market Intelligence)',
    sol_m1_desc: '目標國家/產業建模、競品與需求信號分析、客群分層',
    sol_m2_title: '名單工程 (Prospecting Engine)',
    sol_m2_desc: '多來源名單聚合、職位與決策鏈識別、品質分級與黑名單風控',
    sol_m3_title: '自動化開發 (Outreach Automation)',
    sol_m3_desc: 'AI 模板生成、語氣/產業語境自適應、回信判讀、節奏與時區控制',
    sol_m4_title: '轉化系統 (Conversion System)',
    sol_m4_desc: '跟進矩陣、CRM/表單串接、詢盤分流、訂單轉化節點與回報儀表板',
    
    // Services
    serv_title: '專業服務',
    serv_s1_title: '增長系統部署',
    serv_s1_desc: 'Growth System Deployment',
    serv_s2_title: '客製化專案整合',
    serv_s2_desc: 'Custom Project Integration',
    serv_s3_title: '託管營運與持續優化',
    serv_s3_desc: 'Managed Operations',

    // Modules
    mod_title: '功能模組',
    mod_1: '名單/企業資料聚合',
    mod_2: '決策鏈與職位識別',
    mod_3: 'AI 內容生成與回信判讀',
    mod_4: '時區/節奏/矩陣跟進',
    mod_5: '風控合規（黑名單、日誌、權限）',
    mod_6: '轉化追蹤（詢盤→pipeline→訂單）',

    // AI Platform Steps
    step_1: '設定目標客群及國家',
    step_2: '設定搜尋職位',
    step_3: '智能 AI 寫信模板及信件判讀',
    step_4: '跟進及自動搜索時間設定',
    step_5: 'AI 自動寄信',
    step_6: '矩陣跟進',
    step_7: '客戶詢盤',
    step_8: '詢盤分級與分流',
    step_9: '訂單轉化',

    // Plans
    plan_title: '方案選擇',
    plan_1_name: '基礎企業方案',
    plan_1_target: '適用對象：剛開始拓展海外市場的企業',
    plan_1_content: '基礎名單篩選、標準開發信模板、每週自動化排程',
    plan_1_output: '交付成果：每週潛在客戶名單、基礎回信通知',
    plan_2_name: '企業大腦預訓練方案',
    plan_2_target: '適用對象：需要精準客製化與高轉換率的成熟企業',
    plan_2_content: '深度產業建模、競品分析、多語系語境優化、專屬發信網域',
    plan_2_output: '交付成果：高精準度詢盤、完整數據儀表板、專屬優化報告、不包含詢盤交付',
    plan_3_name: '全方位託管方案',
    plan_3_target: '適用對象：尋求完全外包增長運營的集團/大型企業',
    plan_3_content: '全流程託管、CRM 深度整合、專屬顧問團隊、供應鏈對接',
    plan_3_output: '交付成果：保證詢盤量、季度策略會議、供應鏈整合服務',
    
    // Footer
    brand_manifesto: '我們構建全球貿易增長的基礎設施。以自動化的精準，取代人工的不確定性。',
    footer_platform: '平台',
    footer_company: '公司',
    footer_solutions: '解決方案',
    footer_ai_engine: 'AI 引擎',
    footer_case_studies: '成功案例',
    footer_about: '關於我們',
    footer_contact: '聯絡我們',
    footer_services: '服務',
    footer_headquarters: '總部',
    footer_address_1: '台中市中區光復路201號',
    footer_address_2: '台灣',
    footer_tax_id: '統一編號：94111922',
    footer_maps: '在 Google 地圖開啟 →',
    footer_signature: 'SunGene — 貿易增長基礎設施',

    // About / FAQ
    about_title: '關於我們',
    about_desc: '我們是什麼',
    about_desc_text: 'SunGene 致力於運用 AI 技術革新傳統貿易流程，打造可規模化的貿易運作系統。',
    about_overview: '公司概況',
    about_overview_text: '成立於 2023 年，起始於阿里巴巴國際站實戰營運。我們取得 5 星最高評級供應商資格，具備長期維持高評級營運標準與穩定轉化能力。',
    about_stats_countries: '服務國家',
    about_stats_clients: '企業客戶',
    about_stats_orders: '跨境訂單',
    about_stats_industries: '多產業涵蓋',
    about_direction: '發展方向',
    about_direction_1: '全球供應鏈整合能力',
    about_direction_2: '海外市場拓展能力',
    about_direction_3: '數據與自動化整合能力',
    about_results: '營運成果',
    about_results_1: '2024 年獲全國 B2B 電商競賽星等成長獎第一名',
    about_results_2: '2025 年獲阿里巴巴國際站 AI 星等升級實戰營外貿報單獎第一名',
    about_tech: '技術整合與合作',
    about_tech_text: '我們與專注於 AI 銷售自動化的團隊建立合作，聚焦於技術落地與營運效率提升，將技術轉化為可衡量的商業成果。',
    about_core: '核心能力',
    about_core_1: '貿易與供應鏈能力：國際站營運、供應商整合、多產業經驗',
    about_core_2: '系統與數據能力：AI 名單分析、自動化流程、數據決策',
    about_goal: '長期目標',
    about_goal_text: '我們致力於成為貿易基礎設施型公司，透過供應鏈整合與數據驅動的自動化流程，協助企業建立更穩定的成長基礎。',

    faq_title: '基礎設施常見問題',
    faq_security_q: '如何確保數據合規與安全？',
    faq_security_a: '我們遵循 GDPR 與數據最小化原則。所有潛在客戶數據皆加密，且我們的抓取與豐富引擎僅在合法公開數據框架內運作，並提供所有自動化活動的稽核日誌。',
    faq_risk_q: '如何降低網域信譽風險（黑名單）？',
    faq_risk_a: '我們的基礎設施使用專屬發信網域（非您的企業主網域），並搭配自動化預熱協議。我們即時監控 DNS 健康度（SPF/DKIM/DMARC）並輪替 IP，確保到達率維持在 98% 以上。',
    faq_premise_q: '系統是否可部署在私有環境？',
    faq_premise_a: '可以。針對企業客戶，我們提供容器化部署（Docker/Kubernetes）至您的私有雲，確保數據主權並能與內部 ERP/CRM 系統整合。',
    faq_roi_q: '如何量化投資報酬率（ROI）？',
    faq_roi_a: '我們追蹤「合格詢盤成本」(CPQI) 與「產生的管線價值」。典型客戶在第一季內，相較於傳統展會，通常能降低 40-60% 的獲客成本。',

    // Form
    form_tab_supplier: '我想找供應商',
    form_tab_market: '我想拓展海外市場',
    form_tab_ai: '我想導入 AI 系統',
    form_tab_custom: '我想客製化開發',
    
    form_field_productName: '產品名稱',
    form_field_quantity: '數量/預估訂單量',
    form_field_incoterms: '貿易條款 (Incoterms)',
    form_field_targetCountry: '目標國家/地區',
    
    form_field_targetMarket: '目標市場/國家',
    form_field_currentChannels: '當前渠道',
    form_field_goals: '目標（商機數/營收等）',
    
    form_field_topic: '合作主題',
    form_field_integrationType: '整合類型',
    form_field_details: '技術細節',
    
    form_field_scope: '需求範圍',
    form_field_budget: '預算區間',
    form_field_timeline: '時程預估',
    
    form_field_name: '聯絡人',
    form_field_company: '公司',
    form_field_email: 'Email',
    form_field_phone: '電話',
    form_field_message: '補充說明',
    form_field_website: '網站',

    form_submit_sending: '送出中…',
    form_submit_btn: '送出',
    
    form_success_title: '已收到您的訊息',
    form_success_desc: '我們的專員會在 1–2 個工作日內與您聯繫。',
    form_submit_error: '送出失敗，請改用 Email/電話聯繫',

    // General
    popular_badge: '熱門',
    learn_more: '了解更多 →',
    article_not_found: '文章不存在',
    latest_articles: '最新文章',
    demo_title: 'AI 客戶匹配演示',
    demo_placeholder: '例如：electronics / germany / ai',
    demo_note: '演示數據僅為示意，實際平台會基於更完整的信號計算',
    
    // Case Study Navigation
    next_case: '下一個案例',
    back_to_cases: '回到案例列表',
    explore_solutions: '探索解決方案',
    book_consultation: '預約諮詢',

    // Metadata
    meta_home_title: 'AI 外貿增長基礎設施 | SunGene',
    meta_home_desc: '打造可規模化的全球客戶開發系統：AI 名單、開發自動化、結構化轉化管理',
    meta_standard_definition: 'SunGene 是一家 AI 驅動的外貿增長基礎設施公司，專注於建立可規模化的全球客戶開發與轉化系統。',
    meta_solutions_title: '解決方案 | AI 驅動貿易',
    meta_solutions_desc: 'AI 驅動的貿易解決方案，包含市場建模、名單工程、自動化開發與轉化管理。',
    meta_services_title: '服務 | 全能型 AI 驅動貿易商',
    meta_services_desc: '我們提供完整的 AI 貿易服務，從系統部署、代操服務到全託管運營。',
    meta_product_title: 'AI 平台 | 結構化全球客戶開發引擎',
    meta_product_desc: 'SunGene AI 平台是一套整合市場建模、名單工程、自動化開發與轉化管理的智能系統。',
    meta_about_title: '關於我們 | SunGene Co., LTD.',
    meta_about_desc: 'SunGene 致力於運用 AI 技術革新傳統貿易流程，打造可規模化的貿易運作系統。',
    meta_contact_title: '聯絡我們 | SunGene Co., LTD.',
    meta_contact_desc: '立即聯繫我們，開始您的全球貿易增長之旅。',
    meta_blog_title: '部落格 | SunGene Co., LTD.',
    meta_blog_desc: '最新的貿易趨勢、AI 技術應用與成功案例分享。',
    meta_cases_title: '成功案例 | SunGene Co., LTD.',
    meta_cases_desc: '看看我們如何協助企業透過 AI 基礎設施實現貿易增長。',
    meta_cases_suffix: ' | SunGene AI 平台',

    // Case Study CTAs
    case_cta_platform: '👉 探索 AI 平台',
    case_cta_more: '👉 查看其他案例',
    case_cta_strategy: '👉 預約策略諮詢',

    // About Summary
    about_summary_1: 'SunGene 是一家 AI 驅動的外貿增長基礎設施公司。',
    about_summary_2: '我們專注於建立可規模化的全球客戶開發與訂單轉化系統。',
    about_summary_3: '透過供應鏈整合與數據自動化，我們協助企業打造長期穩定的國際市場增長結構。',

    // Enhanced FAQ
    faq_compliance_q: '1. 如何確保數據合規與隱私安全？',
    faq_compliance_a: 'SunGene 採用資料最小化原則與權限分級控管機制。所有客戶資料均加密儲存，並建立操作日誌與可追溯機制。系統可依企業需求調整資料保留週期，並支援合規審查流程。',
    
    faq_integration_q: '2. 是否可以與 CRM 或 ERP 系統整合？',
    faq_integration_a: '可以。SunGene 支援 API 串接與客製化整合，可與主流 CRM、ERP、內部資料庫或報表系統連接。我們提供資料結構映射與自動同步機制，確保詢盤與訂單資料完整銜接。',
    
    faq_deployment_q: '3. 系統多久可以完成部署？',
    faq_deployment_a: '標準部署週期約為 60–90 天。若企業已有基礎資料架構與市場策略，部署時間可縮短。客製化整合專案則依需求規模而定。',
    
    faq_roi_measure_q: '4. 如何衡量投資報酬率（ROI）？',
    faq_roi_measure_a: 'ROI 主要透過以下指標評估：詢盤數量與品質提升、回覆率提升幅度、獲客成本降低比例、訂單轉化率改善。系統內建數據儀表板，可即時追蹤成效。',
    
    faq_difference_q: '5. 這與傳統外貿代操有何不同？',
    faq_difference_a: '傳統代操依賴人工與短期操作。SunGene 提供的是可規模化、可複製、可數據化優化的增長基礎設施。我們建立的是系統，而非單次行銷活動。',
    
    faq_enterprise_q: '6. 是否適合中大型企業？',
    faq_enterprise_a: '是的。SunGene 的架構設計適用於具備穩定供應能力與國際市場拓展需求的企業，特別適合希望建立長期增長機制，而非短期流量的組織。',

    // Home Page Fixed Text
    home_card_procurement_title: '全球採購協助',
    home_card_procurement_desc: '端到端尋源與驗貨',
    home_card_ai_title: '外貿產業拓展 AI 平台',
    home_card_ai_desc: '大數據與 AI 客戶拓展',
    home_card_odm_title: 'ODM/OEM 代開發',
    home_card_odm_desc: '研發與製造解決方案',
    
    stats_countries: '服務國家',
    stats_match_rate: 'AI 匹配成功率',
    stats_suppliers: '合作供應商',
    stats_clients: '服務客戶',
    
    home_cases_title: '成功案例',
    home_partners_title: '合作夥伴',
    home_cta_title: '立即與我們洽談',
    
    floating_cta: '立即詢價',

    // Schema / Default Meta
    schema_desc: 'SunGene 是 AI 驅動的外貿增長基礎設施公司，專注於可規模化客戶開發與轉化系統。',
    meta_default_title: 'SunGene Co., LTD.｜AI 驅動的外貿增長基礎設施',
    meta_default_desc: '打造可規模化的全球客戶開發系統：AI 名單、開發自動化、結構化轉化管理',
  },
  en: {
    // Header
    nav_home: 'Home',
    nav_solutions: 'Solutions',
    nav_services: 'Services',
    nav_product: 'AI Platform',
    nav_cases: 'Case Studies',
    nav_about: 'About',
    nav_contact: 'Contact',
    cta_inquiry: 'Contact us',

    // Hero
    hero_title: 'Build Scalable Trade Infrastructure',
    hero_subtitle: 'AI-driven automation for scalable client acquisition.',
    hero_cta_deploy: 'Deploy Your Growth Infrastructure',
    hero_cta_view: 'View Infrastructure',

    // Who We Are & FAQ (New)
    who_we_are_title: 'Who We Are',
    who_we_are_text: 'SunGene is an AI-powered trade infrastructure company specializing in global client acquisition systems.',
    
    faq_q1: 'How does SunGene differ from traditional outsourcing?',
    faq_a1: 'We build internal infrastructure for you, rather than just executing tasks. It is scalable and data-driven.',
    faq_q2: 'Is the system compliant with international data regulations?',
    faq_a2: 'Yes, we strictly follow GDPR and data minimization principles.',
    faq_q3: 'How long does deployment take?',
    faq_a3: 'Typically 90 days to establish a stable running system.',
    
    // Stats
    stats_weekly_inquiries: 'Weekly Qualified Inquiries',
    stats_pipeline_value: 'Pipeline Value',
    stats_pipeline_value_num: 'Approx. NT$135M',
    stats_exec_access: 'Executive Access',
    stats_cac_reduction: 'CAC Reduction',

    // Solution Page (Full)
    sol_page_title: 'Solutions',
    sol_page_subtitle: 'Building Scalable Global Client Acquisition Infrastructure',
    sol_intro_p1: 'SunGene does not provide isolated tools or outsourced campaigns. We deploy structured, scalable trade growth infrastructure.',
    sol_intro_p2: 'By integrating AI technology, real-world trade execution, and operational engineering, we create a complete system covering market modeling, prospect qualification, outreach automation, inquiry management, and order conversion.',
    
    sol_s1_title: '01 Market Intelligence Modeling',
    sol_s1_desc: 'Before outreach begins, we establish strategic clarity.',
    sol_s1_li1: 'Target country and region prioritization',
    sol_s1_li2: 'Industry segmentation and demand signal mapping',
    sol_s1_li3: 'Competitive landscape analysis',
    sol_s1_li4: 'Ideal Customer Profile (ICP) definition',
    sol_s1_note: 'This ensures outreach is strategic — not random.',

    sol_s2_title: '02 Prospecting Engine',
    sol_s2_desc: 'Through multi-source aggregation and AI qualification, we build high-quality prospect databases.',
    sol_s2_li1: 'Role and decision-chain identification',
    sol_s2_li2: 'Company scale and purchasing capacity scoring',
    sol_s2_li3: 'Lead tier classification and risk tagging',
    sol_s2_li4: 'Compliance screening and blacklist protection',
    sol_s2_note: 'This builds sustainable client assets — not just temporary lists.',

    sol_s3_title: '03 AI Outreach Deployment',
    sol_s3_desc: 'Strategy becomes automated execution.',
    sol_s3_li1: 'AI-generated email frameworks',
    sol_s3_li2: 'Industry-context content optimization',
    sol_s3_li3: 'Reply semantic classification',
    sol_s3_li4: 'Follow-up cadence and timezone control',
    sol_s3_li5: 'Automated outreach with matrix follow-ups',
    sol_s3_note: 'The system continuously learns and optimizes response performance.',

    sol_s4_title: '04 Structured Conversion System',
    sol_s4_desc: 'When inquiries enter, structure takes over.',
    sol_s4_li1: 'Inquiry qualification and routing',
    sol_s4_li2: 'CRM and form integrations',
    sol_s4_li3: 'Follow-up milestone tracking',
    sol_s4_li4: 'Pipeline-to-order dashboards',
    sol_s4_li5: 'Data-driven feedback loops',
    sol_s4_note: 'The objective is not sending emails — It is building predictable order conversion systems.',

    sol_outcome_title: 'Outcome',
    sol_outcome_desc: 'This infrastructure delivers:',
    sol_outcome_li1: 'Stable and predictable inquiry rhythm',
    sol_outcome_li2: 'Increased executive access efficiency',
    sol_outcome_li3: 'Reduced customer acquisition cost (CAC)',
    sol_outcome_li4: 'Internal replicable growth systems',
    sol_outcome_note: 'We build long-term operational infrastructure, not short-term tactics.',

    // Services Page (Full)
    serv_page_title: 'Services',
    serv_page_subtitle: 'SunGene delivers complete deployment and operational support — not just systems.',
    
    serv_s1_name: '01 Growth System Deployment',
    serv_s1_target: 'For enterprises seeking internal capability building.',
    serv_s1_li1: 'Full market modeling and prospecting engine setup',
    serv_s1_li2: 'AI outreach automation deployment',
    serv_s1_li3: 'Inquiry and conversion workflow structuring',
    serv_s1_li4: 'Standardized templates and operational manuals',
    serv_s1_li5: 'Performance dashboards and metrics models',
    serv_s1_goal: 'Goal: Establish a stable, scalable growth system within 90 days.',

    serv_s2_name: '02 Enterprise Brain Pre-Training Plan',
    serv_s2_target: 'For organizations building proprietary AI intelligence systems.',
    serv_s2_li1: 'Training on historical client data and cases',
    serv_s2_li2: 'Custom communication context modeling',
    serv_s2_li3: 'Industry-specific outreach frameworks',
    serv_s2_li4: 'Internal knowledge base structuring',
    serv_s2_goal: 'Goal: Turn AI into the enterprise growth engine.',

    serv_s3_name: '03 Full-Managed Plan',
    serv_s3_target: 'For enterprises preferring fully managed execution.',
    serv_s3_li1: 'Strategy and market planning',
    serv_s3_li2: 'Prospect filtering and deployment',
    serv_s3_li3: 'Automated follow-up management',
    serv_s3_li4: 'Inquiry handling and conversion optimization',
    serv_s3_li5: 'Monthly performance reporting',
    serv_s3_goal: 'Goal: You focus on production. We engineer structured growth.',

    serv_s4_name: '04 AI Managed Operations',
    serv_s4_target: 'For enterprises seeking rapid market entry without building internal teams.',
    serv_s4_li1: 'Target country and ICP strategy setup',
    serv_s4_li2: 'AI prospect engineering and tier classification',
    serv_s4_li3: 'Intelligent email framework design and optimization',
    serv_s4_li4: 'Automated outreach and matrix follow-ups',
    serv_s4_li5: 'Inquiry qualification and pipeline structuring',
    serv_s4_li6: 'Monthly performance analytics and strategy refinement',
    serv_s4_goal: 'Objective: Deliver predictable lead generation without increasing internal headcount.',

    serv_s5_name: '05 Trade Sales Outsourcing',
    serv_s5_target: 'For enterprises outsourcing international client acquisition and follow-up execution.',
    serv_s5_li1: 'Overseas market strategy and targeting',
    serv_s5_li2: 'Outreach execution and response management',
    serv_s5_li3: 'Inquiry qualification and requirement analysis',
    serv_s5_li4: 'Quotation preparation support',
    serv_s5_li5: 'Follow-up cadence management',
    serv_s5_li6: 'Pre-contract coordination and documentation support',
    serv_s5_goal: 'Objective: Operate as an extended international sales team for structured global expansion.',

    serv_s6_name: '06 Customized Growth Projects',
    serv_s6_target: 'For enterprises with specific industry, market, or integration requirements.',
    serv_s6_li1: 'Deep market research for target regions',
    serv_s6_li2: 'Industry-specific decision-chain analysis',
    serv_s6_li3: 'AI system integration with CRM/ERP',
    serv_s6_li4: 'Data cleansing and re-modeling',
    serv_s6_li5: 'Custom outreach strategies and training',
    serv_s6_li6: 'Large-scale strategic client acquisition planning',
    serv_s6_goal: 'Objective: Engineer customized, long-term scalable growth infrastructure.',

    // AI Platform Page (Full)
    ai_page_title: 'AI Platform',
    ai_page_subtitle: 'Structured Global Client Acquisition Engine',
    ai_intro_p1: 'SunGene AI Platform integrates market modeling, prospect engineering, automated outreach, and structured conversion management into one unified growth infrastructure.',
    ai_intro_p2: 'It is not an email tool — it is an operational architecture.',
    
    ai_flow_title: 'Platform Workflow',
    
    ai_step1_title: '01 Define Target ICP & Countries',
    ai_step1_desc: 'Establish ideal client profiles and prioritize regions.',
    
    ai_step2_title: '02 Identify Roles & Decision Chains',
    ai_step2_desc: 'Map decision-makers and procurement influence chains.',
    
    ai_step3_title: '03 AI Email Framework & Reply Interpretation',
    ai_step3_desc: 'Generate context-aware outreach content and classify replies via semantic analysis.',
    
    ai_step4_title: '04 Follow-up Cadence & Timezone Optimization',
    ai_step4_desc: 'Deploy optimized sending schedules based on industry rhythm and geography.',
    
    ai_step5_title: '05 Automated Outreach Execution',
    ai_step5_desc: 'Maintain structured outreach flow at scale.',
    
    ai_step6_title: '06 Matrix Follow-ups',
    ai_step6_desc: 'Implement multi-layer engagement strategies to increase response rates.',
    
    ai_step7_title: '07 Inquiry Capture',
    ai_step7_desc: 'Automatically detect and categorize incoming inquiries.',
    
    ai_step8_title: '08 Inquiry Routing & Qualification',
    ai_step8_desc: 'Prioritize high-potential prospects and reduce leakage.',
    
    ai_step9_title: '09 Order Conversion',
    ai_step9_desc: 'Integrate CRM workflows and track pipeline-to-order conversion.',

    ai_core_title: 'Core Modules',
    
    ai_mod1_title: 'Global Supply Chain Module',
    ai_mod1_li1: 'Supplier sourcing intelligence',
    ai_mod1_li2: 'Cost structure analysis',
    ai_mod1_li3: 'Risk and quality control',
    
    ai_mod2_title: 'Client Acquisition Module',
    ai_mod2_li1: 'AI lead analytics',
    ai_mod2_li2: 'Automated outreach',
    ai_mod2_li3: 'Prospect classification',
    
    ai_mod3_title: 'System Integration Module',
    ai_mod3_li1: 'CRM integration',
    ai_mod3_li2: 'API deployment',
    ai_mod3_li3: 'Data dashboards',
    
    ai_mod4_title: 'Compliance & Risk Module',
    ai_mod4_li1: 'Blacklist management',
    ai_mod4_li2: 'Audit logs',
    ai_mod4_li3: 'Data encryption & access control',

    ai_why_title: 'Why This Platform Matters',
    ai_why_li1: 'Scalable architecture',
    ai_why_li2: 'Predictable inquiry rhythm',
    ai_why_li3: 'Replicable internal growth system',
    ai_why_li4: 'Traceable data optimization',
    ai_why_note: 'This is not a tool. It is infrastructure.',

    ai_data_title: 'Platform Data',
    ai_data_li1: 'Avg. response rate +2-4x',
    ai_data_li2: 'Outreach efficiency +60%',
    ai_data_li3: 'CAC reduction 30-50%',
    ai_data_li4: 'Cycle time reduction 40%',

    ai_sec_title: 'Enterprise-Grade Security',
    ai_sec_li1: 'Data minimization',
    ai_sec_li2: 'Tiered access control',
    ai_sec_li3: 'Server-side encryption',
    ai_sec_li4: 'Compliance auditing',

    // Infrastructure Section
    infra_title: 'Infrastructure Capabilities',
    infra_supply_title: 'Global Supply Chain',
    infra_supply_1: 'End-to-end Sourcing',
    infra_supply_2: 'Cost Optimization',
    infra_supply_3: 'Quality Control',
    infra_client_title: 'Client Acquisition',
    infra_client_1: 'AI Prospect Analysis',
    infra_client_2: 'Automated Outreach',
    infra_client_3: 'CRM Pipeline Design',
    infra_system_title: 'System Integration',
    infra_system_1: 'Custom AI Platforms',
    infra_system_2: 'Data Matching Engines',
    infra_system_3: 'API Development',
    infra_explore: 'Explore Solutions',
    infra_consult: 'Consult with Experts',

    // Industries
    ind_title: 'Industries We Serve',
    ind_1: 'Manufacturing',
    ind_2: 'Electronics',
    ind_3: 'Trading',
    ind_4: 'Services',
    ind_5: 'Software',
    ind_6: 'Customized Projects',
    partners_title: 'Partners',
    service_map_title: 'Global Service Distribution',
    service_map_img_alt: 'Global Service Map',

    // Case Studies
    cases_title: 'Case Studies',
    cases_subtitle: 'Scalable methods delivering measurable results',
    read_more: 'Read Case Study',
    case_before_title: 'Before Infrastructure',
    case_after_title: 'After Deployment',
    case_replicate_title: 'Ready to replicate this success?',
    case_cta_deploy: 'Deploy Your Growth Infrastructure',

    // Solutions
    sol_title: 'Solutions',
    sol_subtitle: 'Building a complete AI trade growth loop for enterprises',
    sol_m1_title: 'Market Intelligence',
    sol_m1_desc: 'Country/industry modeling, demand signals, ICP segmentation',
    sol_m2_title: 'Prospecting Engine',
    sol_m2_desc: 'Multi-source aggregation, decision-chain mapping, quality scoring + risk control',
    sol_m3_title: 'Outreach Automation',
    sol_m3_desc: 'AI templates, context adaptation, reply classification, cadence + timezone control',
    sol_m4_title: 'Conversion System',
    sol_m4_desc: 'Follow-up matrix, CRM/form integration, inquiry routing, pipeline-to-order tracking',
    
    // Services
    serv_title: 'Professional Services',
    serv_s1_title: 'Growth System Deployment',
    serv_s1_desc: 'Deploying your automated growth infrastructure.',
    serv_s2_title: 'Custom Project Integration',
    serv_s2_desc: 'Tailored integration with your existing systems.',
    serv_s3_title: 'Managed Operations',
    serv_s3_desc: 'Continuous optimization and managed execution.',

    // Modules
    mod_title: 'Functional Modules',
    mod_1: 'Prospect data aggregation',
    mod_2: 'Decision-chain & role detection',
    mod_3: 'AI generation + reply classification',
    mod_4: 'Timezone cadence + matrix follow-ups',
    mod_5: 'Compliance & risk control',
    mod_6: 'Conversion tracking',

    // AI Platform Steps
    step_1: 'Define target ICP & countries',
    step_2: 'Set target roles/titles',
    step_3: 'AI email templates + reply interpretation',
    step_4: 'Follow-up cadence & auto-search scheduling',
    step_5: 'Automated outreach sending',
    step_6: 'Matrix follow-ups',
    step_7: 'Inquiries',
    step_8: 'Qualification & Routing',
    step_9: 'Order conversion',

    // Plans
    plan_title: 'Plans',
    plan_1_name: 'Essential Business Plan',
    plan_1_target: 'Target: Companies starting overseas expansion',
    plan_1_content: 'Basic filtering, standard templates, weekly automation',
    plan_1_output: 'Deliverables: Weekly lead lists, basic reply notifications',
    plan_2_name: 'Enterprise Brain Pre-Training Plan',
    plan_2_target: 'Target: Mature enterprises needing precision & high conversion',
    plan_2_content: 'Deep modeling, competitor analysis, multi-lang context, dedicated domains',
    plan_2_output: 'Deliverables: High-precision inquiries, full dashboards, optimization reports, no guaranteed inquiry volume',
    plan_3_name: 'Full-Managed Plan',
    plan_3_target: 'Target: Groups/Large enterprises seeking full outsourcing',
    plan_3_content: 'Full-process management, CRM integration, dedicated consultants, supply chain',
    plan_3_output: 'Deliverables: Guaranteed inquiry volume, quarterly strategy, supply chain services',
    
    // Footer
    brand_manifesto: 'We build the infrastructure for global trade growth. Replacing manual uncertainty with automated precision.',
    footer_platform: 'Platform',
    footer_company: 'Company',
    footer_solutions: 'Solutions',
    footer_ai_engine: 'AI Engine',
    footer_case_studies: 'Case Studies',
    footer_about: 'About Us',
    footer_contact: 'Contact',
    footer_services: 'Services',
    footer_headquarters: 'Headquarters',
    footer_address_1: 'No. 201, Guangfu Rd., Central Dist.',
    footer_address_2: 'Taichung City, Taiwan',
    footer_tax_id: 'Tax ID: 94111922',
    footer_maps: 'View on Google Maps →',
    footer_signature: 'SunGene — Trade Growth Infrastructure',

    // About / FAQ
    about_title: 'About Us',
    about_desc: 'Who We Are',
    about_desc_text: 'SunGene revolutionizes traditional trade processes with AI, building scalable trade operation systems.',
    about_overview: 'Company Overview',
    about_overview_text: 'Founded in 2023, starting from Alibaba.com operations. We achieved 5-star supplier status and maintain high operational standards and stable conversion capabilities.',
    about_stats_countries: 'Countries Served',
    about_stats_clients: 'Clients',
    about_stats_orders: 'Orders',
    about_stats_industries: 'Industries',
    about_direction: 'Strategic Direction',
    about_direction_1: 'Global Supply Chain Integration',
    about_direction_2: 'Overseas Market Expansion',
    about_direction_3: 'Data & Automation Integration',
    about_results: 'Achievements',
    about_results_1: '2024: 1st Place, National B2B E-commerce Growth Award',
    about_results_2: '2025: 1st Place, Alibaba.com AI Upgrade Export Award',
    about_tech: 'Tech Integration',
    about_tech_text: 'We partner with AI sales automation teams to translate technology into measurable business results.',
    about_core: 'Core Capabilities',
    about_core_1: 'Trade & Supply Chain: Operations, integration, multi-industry exp.',
    about_core_2: 'System & Data: AI analysis, automated workflows, data-driven decisions.',
    about_goal: 'Long-term Goal',
    about_goal_text: 'To become a Trade Infrastructure Company, helping businesses build stable growth foundations through supply chain integration and data-driven automation.',

    faq_title: 'Infrastructure FAQ',
    faq_security_q: 'How do you ensure data compliance & security?',
    faq_security_a: 'We adhere to GDPR and strict data minimization principles. All prospect data is encrypted, and our scraping/enrichment engines operate within legal "publicly available data" frameworks. We provide audit logs for all automated activities.',
    faq_risk_q: 'How do we mitigate domain reputation risks (blacklisting)?',
    faq_risk_a: 'Our infrastructure uses dedicated sending domains (not your primary corporate domain) with automated warm-up protocols. We monitor DNS health (SPF/DKIM/DMARC) in real-time and rotate IPs to ensure deliverability remains >98%.',
    faq_premise_q: 'Can this system be deployed on-premise?',
    faq_premise_a: 'Yes. For enterprise clients, we offer containerized deployment (Docker/Kubernetes) to your private cloud, ensuring full data sovereignty and integration with internal ERP/CRM systems.',
    faq_roi_q: 'How do we quantify ROI?',
    faq_roi_a: 'We track "Cost Per Qualified Inquiry" (CPQI) and "Pipeline Value Generated". Typical clients see a 40-60% reduction in acquisition costs compared to traditional exhibitions within the first quarter.',

    // Form
    form_tab_supplier: 'Find Suppliers',
    form_tab_market: 'Expand Overseas Markets',
    form_tab_ai: 'Adopt AI Systems',
    form_tab_custom: 'Custom Development',
    
    form_field_productName: 'Product Name',
    form_field_quantity: 'Quantity / Est. Order Volume',
    form_field_incoterms: 'Incoterms',
    form_field_targetCountry: 'Target Country / Region',
    
    form_field_targetMarket: 'Target Market / Country',
    form_field_currentChannels: 'Current Channels',
    form_field_goals: 'Goals (Leads / Revenue)',
    
    form_field_topic: 'Collaboration Topic',
    form_field_integrationType: 'Integration Type',
    form_field_details: 'Technical Details',
    
    form_field_scope: 'Scope Requirements',
    form_field_budget: 'Budget Range',
    form_field_timeline: 'Estimated Timeline',
    
    form_field_name: 'Contact Person',
    form_field_company: 'Company',
    form_field_email: 'Email',
    form_field_phone: 'Phone',
    form_field_message: 'Notes',
    form_field_website: 'Website',

    form_submit_sending: 'Submitting…',
    form_submit_btn: 'Submit',
    
    form_success_title: 'Message Received',
    form_success_desc: 'We will get back within 1–2 business days.',
    form_submit_error: 'Send failed, please contact via Email/Phone.',

    // General
    popular_badge: 'POPULAR',
    learn_more: 'Learn More →',
    article_not_found: 'Article Not Found',
    latest_articles: 'Latest Articles',
    demo_title: 'AI Client Matching Demo',
    demo_placeholder: 'e.g., electronics / germany / ai',
    demo_note: 'Demo data for illustration only; actual platform uses comprehensive signals.',

    // Case Study Navigation
    next_case: 'Next Case',
    back_to_cases: 'Back to Cases',
    explore_solutions: 'Explore Solutions',
    book_consultation: 'Book Consultation',

    // Metadata
    meta_home_title: 'AI-Driven Trade Growth Infrastructure | SunGene',
    meta_home_desc: 'Building scalable global client acquisition systems: AI prospecting, automated outreach, structured conversion management.',
    meta_standard_definition: 'SunGene is an AI-driven trade growth infrastructure company specializing in scalable global client acquisition and conversion systems.',
    meta_solutions_title: 'Solutions | AI-Driven Trade',
    meta_solutions_desc: 'AI-driven trade solutions including market modeling, prospecting engineering, automated outreach, and conversion management.',
    meta_services_title: 'Services | All-in-One AI Trade Partner',
    meta_services_desc: 'We provide complete AI trade services, from system deployment and managed operations to full outsourcing.',
    meta_product_title: 'AI Platform | Structured Global Client Acquisition Engine',
    meta_product_desc: 'SunGene AI Platform integrates market modeling, prospect engineering, automated outreach, and structured conversion management.',
    meta_about_title: 'About Us | SunGene Co., LTD.',
    meta_about_desc: 'SunGene revolutionizes traditional trade processes with AI, building scalable trade operation systems.',
    meta_contact_title: 'Contact Us | SunGene Co., LTD.',
    meta_contact_desc: 'Contact us today to start your global trade growth journey.',
    meta_blog_title: 'Blog | SunGene Co., LTD.',
    meta_blog_desc: 'Latest trade trends, AI technology applications, and success stories.',
    meta_cases_title: 'Case Studies | SunGene Co., LTD.',
    meta_cases_desc: 'See how we help businesses achieve trade growth through AI infrastructure.',
    meta_cases_suffix: ' | SunGene',

    // Case Study CTAs
    case_cta_platform: '👉 Explore AI Platform',
    case_cta_more: '👉 View Other Case Studies',
    case_cta_strategy: '👉 Schedule Strategy Session',

    // About Summary
    about_summary_1: 'SunGene is an AI-driven trade growth infrastructure company.',
    about_summary_2: 'We specialize in scalable global client acquisition and structured order conversion systems.',
    about_summary_3: 'By integrating supply chain intelligence and automation, we engineer sustainable international expansion.',

    // Enhanced FAQ
    faq_compliance_q: '1. How do you ensure data compliance and privacy?',
    faq_compliance_a: 'SunGene follows data minimization principles and role-based access control. All client data is encrypted and fully traceable through audit logs. Retention policies can be customized according to enterprise compliance requirements.',
    
    faq_integration_q: '2. Can the system integrate with CRM or ERP platforms?',
    faq_integration_a: 'Yes. SunGene supports API integration and custom data mapping with CRM, ERP, internal databases, and reporting systems. Inquiry and order data can be synchronized automatically.',
    
    faq_deployment_q: '3. How long does deployment take?',
    faq_deployment_a: 'Standard deployment requires approximately 60–90 days. Enterprises with existing infrastructure may shorten this timeline. Customized projects depend on scope and integration complexity.',
    
    faq_roi_measure_q: '4. How is ROI measured?',
    faq_roi_measure_a: 'ROI is evaluated through: Increased inquiry volume and quality, Improved response rates, Reduced customer acquisition cost, Higher conversion rates. The platform provides real-time performance dashboards.',
    
    faq_difference_q: '5. How is this different from traditional outsourcing?',
    faq_difference_a: 'Traditional outsourcing relies on manual execution. SunGene provides scalable, structured, and data-optimized growth infrastructure.',
    
    faq_enterprise_q: '6. Is this suitable for mid-to-large enterprises?',
    faq_enterprise_a: 'Yes. The system is designed for enterprises seeking sustainable, long-term global expansion rather than short-term campaigns.',

    // Home Page Fixed Text
    home_card_procurement_title: 'Global Procurement Assistance',
    home_card_procurement_desc: 'End-to-End Sourcing & QC',
    home_card_ai_title: 'AI Trade Expansion Platform',
    home_card_ai_desc: 'Big Data & AI Client Acquisition',
    home_card_odm_title: 'ODM/OEM Development',
    home_card_odm_desc: 'R&D and Manufacturing Solutions',
    
    stats_countries: 'Countries Served',
    stats_match_rate: 'AI Match Rate',
    stats_suppliers: 'Partner Suppliers',
    stats_clients: 'Clients Served',
    
    home_cases_title: 'Success Stories',
    home_partners_title: 'Partners',
    home_cta_title: 'Talk to Us Now',
    
    floating_cta: 'Inquire Now',

    // Schema / Default Meta
    schema_desc: 'SunGene is an AI-driven trade growth infrastructure company focused on scalable client acquisition and conversion systems.',
    meta_default_title: 'SunGene Co., LTD. | AI-Driven Trade Growth Infrastructure',
    meta_default_desc: 'Building scalable global client acquisition systems: AI prospecting, automated outreach, structured conversion management.',
  },
}

export function t(lang: Lang, key: string): string {
  return dict[lang]?.[key] ?? dict['en'][key] ?? key
}

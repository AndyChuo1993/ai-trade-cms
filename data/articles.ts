import { Lang } from '@/lib/i18n'

export type Article = {
  id: string
  title: string
  category: string
  date: string
  image: string
  content: string[]
  sections?: { heading: string; content: string[] }[]
}

const articles: Record<string, Article[]> = {
  zh: [
    {
      id: 'export-client-development-process-guide',
      title: '外貿客戶開發完整流程（B2B企業指南）',
      category: '外貿開發指南',
      date: '2026-03-10',
      image: '/articles/lead-gen-guide.svg',
      content: [
        '對許多製造企業來說，外貿業務最大的挑戰不是產品，而是客戶開發。',
        '許多公司嘗試過 Alibaba、展會、Google、LinkedIn，但最後仍然發現詢盤不穩定、客戶品質參差不齊。',
        '其實成功的外貿開發通常遵循一套清晰流程。本文將介紹 B2B 外貿客戶開發的完整流程。'
      ],
      sections: [
        {
          heading: '一、市場分析',
          content: [
            '第一步不是寄信，而是市場分析。',
            '需要確認：目標市場、主要買家類型、競爭品牌、價格區間。',
            '例如：五金工具企業可能鎖定歐洲、北美、中東，並研究當地的經銷商、進口商與品牌商。',
            '市場分析的目的，是避免盲目開發。'
          ]
        },
        {
          heading: '二、建立買家名單',
          content: [
            '下一步是建立 Buyer List (買家名單)。',
            '買家來源通常包括：Google、LinkedIn、展會名單、海關資料、產業名錄。',
            '一份好的買家名單通常包含：公司名稱、國家、網站、採購職位、Email、LinkedIn。',
            '對 B2B 企業而言，名單品質遠比名單數量重要。'
          ]
        },
        {
          heading: '三、開發信策略',
          content: [
            '許多外貿開發失敗，是因為開發信寫錯。',
            '錯誤範例：「We are a professional manufacturer. We have 20 years experience. We hope to cooperate with you.」這種內容對買家沒有價值。',
            '有效的開發信應該：簡短、具體、有價值。',
            '例如：「We noticed your company distributes industrial fasteners in Germany. Our factory produces DIN standard bolts for European distributors and currently supplies several EU importers. If you are looking for alternative suppliers in Asia, we would be happy to share product specs and pricing.」'
          ]
        },
        {
          heading: '四、持續跟進',
          content: [
            '大部分詢盤來自第 3–5 次跟進。',
            '跟進方式包括：Email、LinkedIn、電話。',
            '關鍵原則是：提供新資訊，不要只是追問。',
            '例如提供：產品案例、價格更新、市場資訊。'
          ]
        },
        {
          heading: '五、詢盤轉化',
          content: [
            '當客戶回覆後，外貿流程才真正開始。',
            '接下來需要：報價、樣品、談判、訂單。',
            '這個階段通常需要：快速回覆、清楚文件、專業溝通。'
          ]
        },
        {
          heading: '結論',
          content: [
            '成功的外貿客戶開發並不是隨機寄信，而是一套系統：市場分析 → 買家名單 → 開發信 → 跟進 → 詢盤轉化。',
            '對許多企業而言，建立這套系統需要時間與資源。如果企業缺乏外貿團隊，也可以考慮外貿開發服務。'
          ]
        }
      ]
    },
    {
      id: 'how-to-build-overseas-buyer-list',
      title: '如何建立海外買家名單（B2B企業指南）',
      category: '外貿開發指南',
      date: '2026-03-12',
      image: '/articles/lead-gen-guide.svg',
      content: [
        '在外貿客戶開發中，最重要的資產之一就是買家名單。沒有精準名單，就無法進行有效開發。',
        '許多企業常見的問題包括：名單品質低、Email 錯誤、買家不是決策者。',
        '因此建立高品質 Buyer List 是外貿開發的核心。'
      ],
      sections: [
        {
          heading: '一、Google 搜尋',
          content: [
            'Google 是最常見的買家來源。',
            '例如搜尋：「industrial fasteners distributor germany」或「packaging materials importer europe」。',
            '你可以找到：經銷商、進口商、品牌商。'
          ]
        },
        {
          heading: '二、LinkedIn',
          content: [
            'LinkedIn 是 B2B 開發的重要工具。',
            '可以搜尋：Purchasing manager、Sourcing manager、Procurement manager。',
            '並篩選：Industry、Location、Company size。',
            '這可以幫助找到真正的決策者。'
          ]
        },
        {
          heading: '三、展會名單',
          content: [
            '許多國際展會會公開 Exhibitor list 或 Visitor list。',
            '例如：Hannover Messe、Canton Fair、Interpack。',
            '這些名單通常包含大量潛在買家。'
          ]
        },
        {
          heading: '四、海關資料',
          content: [
            '海關資料可以看到：進口商、產品類型、交易量。',
            '這對於找到「真實買家」非常有價值。'
          ]
        },
        {
          heading: '五、產業名錄',
          content: [
            '許多產業協會提供企業名錄，例如：European trade directories、Industry associations、Chamber of commerce。',
            '這些資料通常比一般搜尋更精準。'
          ]
        },
        {
          heading: '結論',
          content: [
            '建立海外買家名單的主要來源包括：Google、LinkedIn、展會、海關資料、產業名錄。',
            '透過系統化整理，企業可以建立穩定的客戶開發流程。'
          ]
        }
      ]
    },
    {
      id: 'german-hardware-2026',
      title: '2026 德國五金市場採購趨勢報告',
      category: '市場分析',
      date: '2026-02-15',
      image: '/articles/market-eu.svg',
      content: [
        '德國一直是全球五金產品的重要進口市場之一。對於希望拓展歐洲市場的製造商來說，理解德國採購商的需求與決策流程，是成功進入市場的重要一步。',
        '本報告整理了近年德國五金市場的採購趨勢與買家行為變化，並分析潛在供應商應該如何調整外貿策略。'
      ],
      sections: [
        {
          heading: '德國市場需求持續穩定',
          content: [
            '德國在工業製造、建築與DIY市場方面長期保持穩定需求。五金產品主要應用於以下產業：',
            '• 建築工程',
            '• 工業設備',
            '• DIY零售市場',
            '• 汽車維修與配件',
            '近年來，德國進口商更重視供應商的穩定供貨能力與產品品質，而不再單純以價格作為唯一考量。'
          ]
        },
        {
          heading: '採購決策流程更專業化',
          content: [
            '德國企業的採購流程通常較為嚴謹，一般會經過以下幾個階段：',
            '1. 供應商初步篩選',
            '2. 技術與產品評估',
            '3. 價格與交期討論',
            '4. 小量測試訂單',
            '5. 長期合作評估',
            '因此，在開發德國市場時，建立專業且完整的公司資訊與產品資料非常重要。'
          ]
        },
        {
          heading: '採購商更重視長期合作',
          content: [
            '與部分市場不同，德國採購商通常傾向與穩定供應商建立長期合作關係。',
            '對供應商而言，這意味著：',
            '• 穩定的產品品質',
            '• 清楚的溝通流程',
            '• 可靠的交期',
            '• 長期合作能力',
            '這些因素往往比單次價格更重要。'
          ]
        },
        {
          heading: '外貿開發策略建議',
          content: [
            '如果企業希望進入德國五金市場，可以考慮以下策略：',
            '• 建立精準的買家名單',
            '• 針對目標產業開發客戶',
            '• 提供完整產品資料',
            '• 建立專業的外貿溝通流程',
            '透過系統化的客戶開發方式，企業可以更有效率地接觸潛在買家並建立商務關係。'
          ]
        }
      ]
    },
    {
      id: 'cold-email-structure',
      title: '開發信高回覆率的 5 個關鍵架構',
      category: '外貿開發指南',
      date: '2026-01-20',
      image: '/articles/cold-email-mistakes.svg',
      content: [
        '許多企業在進行外貿開發時，最常遇到的問題就是：開發信寄出去，但幾乎沒有回覆。',
        '實際上，大多數開發信沒有回覆，並不是因為產品不好，而是因為信件內容沒有抓住買家的注意力。',
        '以下是提升開發信回覆率的五個關鍵架構。'
      ],
      sections: [
        {
          heading: '1. 清楚的主旨',
          content: [
            '主旨是買家決定是否打開郵件的第一個因素。好的主旨通常具有以下特點：',
            '• 簡潔明確',
            '• 與買家需求相關',
            '• 避免過度銷售語氣',
            '例如：Hardware Supplier for EU Market 或 Precision CNC Parts Manufacturer'
          ]
        },
        {
          heading: '2. 簡短的公司介紹',
          content: [
            '在開發信開頭，用一兩句話說明公司背景即可。',
            '例如：我們是一家專注於五金工具製造的工廠，產品主要出口歐洲與北美市場。',
            '重點是讓買家快速理解你是做什麼的，而不是寫過長的公司歷史。'
          ]
        },
        {
          heading: '3. 清楚的產品定位',
          content: [
            '告訴買家你能提供什麼產品，以及產品的主要優勢。',
            '例如：產品類型、應用產業、生產能力。',
            '這可以幫助買家快速判斷是否與其需求相關。'
          ]
        },
        {
          heading: '4. 提供價值而不是只推銷',
          content: [
            '開發信不應該只是單純推銷產品，而是讓買家看到潛在合作價值。',
            '例如：穩定供應能力、品質控制流程、特定市場經驗。',
            '這些資訊可以增加買家的信任度。'
          ]
        },
        {
          heading: '5. 清楚的行動邀請',
          content: [
            '最後要讓買家知道下一步可以做什麼。',
            '例如：是否方便安排簡短介紹？是否需要產品資料？是否有相關需求？',
            '簡單明確的行動邀請，可以提高回覆機率。'
          ]
        }
      ]
    },
    {
      id: 'europe-market-guide',
      title: '歐洲市場開發指南：品質與認證是關鍵',
      category: '市場分析',
      date: '2026-03-01',
      image: '/articles/market-eu.svg',
      content: [
        '歐洲是一個高標準、高要求的市場。對於想進入歐洲的製造商來說，除了價格，更重要的是品質與合規性。',
        '以下是開發歐洲市場的幾個重點。'
      ],
      sections: [
        {
          heading: '嚴格的認證要求',
          content: [
            'CE 認證是進入歐盟市場的基本門檻。此外，不同產業還有各自的標準，如 RoHS、REACH 等。',
            '確保你的產品符合相關法規，是贏得歐洲買家信任的第一步。'
          ]
        },
        {
          heading: '重視環保與永續',
          content: [
            '歐洲買家非常重視供應商的環保意識與社會責任 (ESG)。',
            '如果你的工廠有相關的環保認證或節能措施，會是一個很大的加分項。'
          ]
        },
        {
          heading: '溝通風格',
          content: [
            '歐洲客戶通常偏好直接、專業的溝通方式。',
            '回覆郵件要及時，提供的資訊要準確，避免誇大其詞。'
          ]
        }
      ]
    },
    {
      id: 'north-america-market-guide',
      title: '北美市場開發指南：效率與創新',
      category: '市場分析',
      date: '2026-03-02',
      image: '/articles/market-na.svg',
      content: [
        '北美市場（美國、加拿大）是全球最大的消費市場之一，也是許多企業外貿開發的首選。',
        '這裡的買家重視效率、創新以及供應鏈的穩定性。'
      ],
      sections: [
        {
          heading: '快速的市場節奏',
          content: [
            '北美買家通常決策速度較快，但也期望供應商能快速回應。',
            '交期與物流速度是他們非常在意的考量點。'
          ]
        },
        {
          heading: '在地化服務',
          content: [
            '如果能提供當地發貨或售後服務，會大大增加合作機會。',
            '許多北美買家傾向與有在地支援能力的供應商合作。'
          ]
        }
      ]
    },
    {
      id: 'japan-market-guide',
      title: '日本市場開發指南：信任與細節',
      category: '市場分析',
      date: '2026-03-03',
      image: '/articles/market-jp.svg',
      content: [
        '日本市場以「難進易守」著稱。一旦建立了信任關係，日本客戶通常非常忠誠。',
        '但在建立關係的初期，你需要展現極致的耐心與對細節的堅持。'
      ],
      sections: [
        {
          heading: '品質零容忍',
          content: [
            '日本客戶對產品外觀、包裝甚至標籤的貼法都有極高要求。',
            '任何微小的瑕疵都可能被視為品質問題。'
          ]
        },
        {
          heading: '長期的溝通',
          content: [
            '與日本客戶建立關係通常需要較長的時間。',
            '不要期望一兩封郵件就能下單，通常需要多次的樣品確認與訪廠（或視訊會議）。'
          ]
        }
      ]
    },
    {
      id: 'hardware-export-guide',
      title: '五金工具產業外貿開發策略',
      category: '案例解析',
      date: '2026-03-05',
      image: '/articles/industry-hardware.svg',
      content: [
        '台灣的五金工具產業在全球佔有重要地位。面對來自中國與東南亞的競爭，如何突顯價值？',
        '本篇分析五金產業的外貿開發重點。'
      ],
      sections: [
        {
          heading: 'OEM vs ODM',
          content: [
            '單純的代工 (OEM) 容易陷入價格戰。',
            '提升設計與研發能力 (ODM)，提供差異化的產品，是留住高價值客戶的關鍵。'
          ]
        },
        {
          heading: '目標市場選擇',
          content: [
            '歐美市場對高品質手工具需求大，適合中高階產品。',
            '新興市場則對價格較敏感，但需求量大。'
          ]
        }
      ]
    },
    {
      id: 'electronics-export-guide',
      title: '電子零組件外貿開發：打入全球供應鏈',
      category: '案例解析',
      date: '2026-03-06',
      image: '/articles/industry-electronics.svg',
      content: [
        '電子零組件的 B2B 開發，往往需要面對更專業的採購與工程人員。',
        '如何展現技術實力並通過嚴格的供應商審核？'
      ],
      sections: [
        {
          heading: '技術規格的精準溝通',
          content: [
            '開發信中應包含清晰的規格書 (Datasheet) 連結。',
            '直接對接工程師或研發人員，往往比對接採購更有效。'
          ]
        },
        {
          heading: '樣品測試',
          content: [
            '電子業的合作幾乎都從樣品測試開始。',
            '建立快速的樣品寄送流程，可以縮短開發週期。'
          ]
        }
      ]
    },
    {
      id: 'packaging-export-guide',
      title: '包裝材料外貿趨勢：環保與永續',
      category: '案例解析',
      date: '2026-03-07',
      image: '/articles/industry-packaging.svg',
      content: [
        '隨著全球減塑政策的推行，包裝材料產業正面臨巨大的轉型壓力與機會。',
        '環保材質與可回收設計成為採購商的關注焦點。'
      ],
      sections: [
        {
          heading: '歐洲市場的環保法規',
          content: [
            '歐盟對包裝材料的回收率有嚴格規定。',
            '供應商若能提供 PCR (消費後再生塑膠) 或生物可分解材質，將極具競爭力。'
          ]
        },
        {
          heading: '品牌商的 ESG 需求',
          content: [
            '許多國際品牌已承諾使用永續包裝。',
            '主動提供環保認證 (如 FSC) 與碳足跡數據，能增加進入供應鏈的機會。'
          ]
        }
      ]
    },
    {
        id: 'cold-email-mistakes',
        title: '開發信常見錯誤：為什麼你的信沒人回？',
        category: '外貿開發指南',
        date: '2026-02-25',
        image: '/articles/cold-email-mistakes.svg',
        content: [
            '發了幾百封開發信，回覆率卻不到 1%？這可能是因為你犯了幾個常見錯誤。',
            'B2B 買家每天會收到數十封甚至上百封的推銷郵件，如果你的信件看起來像垃圾郵件或缺乏重點，很容易就被忽略。'
        ],
        sections: [
            {
                heading: '錯誤一：標題太像廣告',
                content: [
                    '避免使用「Best Price」、「Hot Sale」、「High Quality」等過度推銷的字眼。',
                    '這類標題很容易被郵件過濾器攔截，或者讓買家直接刪除。',
                    '建議使用更專業、具體的標題，例如提及買家的產業或潛在需求。'
                ]
            },
            {
                heading: '錯誤二：內容太長且缺乏重點',
                content: [
                    '買家時間寶貴，沒人想看長篇大論的公司歷史。',
                    '開發信應該簡潔明瞭，直接切入重點：你是誰、你能提供什麼價值、為什麼買家應該感興趣。',
                    '控制在 3-4 段以內，每段不超過 3 行。'
                ]
            },
            {
                heading: '錯誤三：沒有明確的行動呼籲 (CTA)',
                content: [
                    '很多信件結尾只是「Hope to hear from you」，這太被動了。',
                    '給買家一個明確的下一步，例如：「是否有空進行 10 分鐘的通話？」或「是否需要我們寄送樣品參考？」。'
                ]
            }
        ]
    }
  ],
  en: [
    {
      id: 'export-client-development-process-guide',
      title: 'Foreign Trade Client Development: A Complete Guide (B2B)',
      category: 'Export Guide',
      date: '2026-03-10',
      image: '/articles/lead-gen-guide.svg',
      content: [
        'For many manufacturing companies, the biggest challenge is not the product, but client development.',
        'Many try Alibaba, Trade Shows, Google, LinkedIn, but often find inquiries unstable and quality varying.',
        'Successful foreign trade development usually follows a clear process. This guide covers the complete B2B client development workflow.'
      ],
      sections: [
        {
          heading: '1. Market Analysis',
          content: [
            'The first step isn\'t sending emails, it\'s market analysis.',
            'You need to confirm: Target Market, Buyer Types, Competitors, Price Range.',
            'For example: Hardware companies might target Europe, NA, Middle East, and research local distributors, importers, and brands.',
            'The goal of market analysis is to avoid blind outreach.'
          ]
        },
        {
          heading: '2. Building a Buyer List',
          content: [
            'The next step is building a Buyer List.',
            'Sources include: Google, LinkedIn, Trade Shows, Customs Data, Industry Directories.',
            'A good list includes: Company Name, Country, Website, Procurement Role, Email, LinkedIn.',
            'For B2B, quality is far more important than quantity.'
          ]
        },
        {
          heading: '3. Cold Email Strategy',
          content: [
            'Many fail because their emails are written poorly.',
            'Bad Example: "We are a professional manufacturer. We have 20 years experience. We hope to cooperate with you." This offers no value.',
            'Effective emails should be: Short, Specific, Valuable.',
            'Example: "We noticed your company distributes industrial fasteners in Germany. Our factory produces DIN standard bolts for European distributors and currently supplies several EU importers. If you are looking for alternative suppliers in Asia, we would be happy to share product specs and pricing."'
          ]
        },
        {
          heading: '4. Consistent Follow-up',
          content: [
            'Most inquiries come from the 3rd to 5th follow-up.',
            'Channels: Email, LinkedIn, Phone.',
            'Key Principle: Provide new info, don\'t just ask for updates.',
            'Provide: Case studies, price updates, market info.'
          ]
        },
        {
          heading: '5. Inquiry Conversion',
          content: [
            'The process truly begins when a client replies.',
            'Next steps: Quote, Sample, Negotiate, Order.',
            'This stage needs: Fast response, clear docs, professional communication.'
          ]
        },
        {
          heading: 'Conclusion',
          content: [
            'Successful client development is a system, not luck: Analysis -> List -> Email -> Follow-up -> Conversion.',
            'For many companies, building this system takes time. If you lack a team, consider outsourcing services.'
          ]
        }
      ]
    },
    {
      id: 'how-to-build-overseas-buyer-list',
      title: 'How to Build an Overseas Buyer List (B2B Guide)',
      category: 'Export Guide',
      date: '2026-03-12',
      image: '/articles/lead-gen-guide.svg',
      content: [
        'One of the most important assets in export development is your Buyer List. Without a precise list, outreach fails.',
        'Common issues include: Low quality lists, wrong emails, contacting non-decision makers.',
        'Building a high-quality Buyer List is the core of export development.'
      ],
      sections: [
        {
          heading: '1. Google Search',
          content: [
            'Google is the most common source.',
            'Search for: "industrial fasteners distributor germany" or "packaging materials importer europe".',
            'You can find: Distributors, Importers, Brands.'
          ]
        },
        {
          heading: '2. LinkedIn',
          content: [
            'LinkedIn is a key tool for B2B.',
            'Search for: Purchasing manager, Sourcing manager, Procurement manager.',
            'Filter by: Industry, Location, Company size.',
            'This helps find the real decision makers.'
          ]
        },
        {
          heading: '3. Trade Shows',
          content: [
            'Many international shows publish Exhibitor or Visitor lists.',
            'Examples: Hannover Messe, Canton Fair, Interpack.',
            'These lists contain a high volume of potential buyers.'
          ]
        },
        {
          heading: '4. Customs Data',
          content: [
            'Customs data reveals: Importers, Product types, Transaction volumes.',
            'This is invaluable for finding "Real Buyers".'
          ]
        },
        {
          heading: '5. Industry Directories',
          content: [
            'Associations often provide member directories: European trade directories, Industry associations, Chambers of Commerce.',
            'These are often more precise than general searches.'
          ]
        },
        {
          heading: 'Conclusion',
          content: [
            'Main sources: Google, LinkedIn, Trade Shows, Customs Data, Directories.',
            'Systematic organization allows for a stable client development process.'
          ]
        }
      ]
    },
    {
      id: 'german-hardware-2026',
      title: '2026 German Hardware Market Trends',
      category: 'Market Analysis',
      date: '2026-02-15',
      image: '/articles/market-eu.svg',
      content: [
        'Germany remains one of the most critical import markets for hardware products globally. For manufacturers aiming to expand into Europe, understanding the demands and decision-making processes of German buyers is a crucial first step.',
        'This report summarizes recent procurement trends and behavioral shifts in the German hardware market and analyzes how potential suppliers should adjust their export strategies.'
      ],
      sections: [
        {
          heading: 'Stable Market Demand',
          content: [
            'Germany maintains consistent demand in industrial manufacturing, construction, and DIY sectors. Key applications include:',
            '• Construction Engineering',
            '• Industrial Equipment',
            '• DIY Retail Market',
            '• Automotive Repair & Accessories',
            'In recent years, German importers have placed greater emphasis on stable supply capabilities and product quality, rather than price alone.'
          ]
        },
        {
          heading: 'Professional Procurement Process',
          content: [
            'The procurement process in German companies is typically rigorous, involving:',
            '1. Initial Supplier Screening',
            '2. Technical & Product Evaluation',
            '3. Price & Delivery Negotiation',
            '4. Small Test Orders',
            '5. Long-term Partnership Assessment',
            'Therefore, establishing professional and complete company and product information is vital when developing the German market.'
          ]
        },
        {
          heading: 'Focus on Long-term Partnership',
          content: [
            'Unlike some markets, German buyers prefer establishing long-term relationships with stable suppliers.',
            'For suppliers, this means focusing on:',
            '• Consistent Product Quality',
            '• Clear Communication Processes',
            '• Reliable Delivery',
            '• Long-term Cooperation Capability',
            'These factors are often more important than a one-time price advantage.'
          ]
        }
      ]
    },
    {
      id: 'cold-email-structure',
      title: '5 Key Structures for High-Response Cold Emails',
      category: 'Export Guide',
      date: '2026-01-20',
      image: '/articles/cold-email-mistakes.svg',
      content: ['Many companies face a common issue in export development: sending emails but getting no replies.', 'Here are 5 key structures to improve your cold email response rates.'],
      sections: [
        { heading: '1. Clear Subject Line', content: ['Concise, relevant, and non-salesy.'] },
        { heading: '2. Brief Intro', content: ['One or two sentences about what you do.'] },
        { heading: '3. Clear Positioning', content: ['What products and advantages do you offer?'] },
        { heading: '4. Provide Value', content: ['Focus on value, not just selling.'] },
        { heading: '5. Clear CTA', content: ['Tell them what to do next.'] }
      ]
    },
    {
        id: 'cold-email-mistakes',
        title: 'Common Cold Email Mistakes',
        category: 'Export Guide',
        date: '2026-02-25',
        image: '/articles/cold-email-mistakes.svg',
        content: ['Why are your emails being ignored? Avoid these common pitfalls.'],
        sections: [
            { heading: 'Mistake 1: Salesy Subject Lines', content: ['Avoid "Best Price" or "Hot Sale".'] },
            { heading: 'Mistake 2: Too Long', content: ['Keep it brief and value-focused.'] }
        ]
    },
    {
        id: 'europe-market-guide',
        title: 'Europe Market Guide: Quality & Compliance',
        category: 'Market Analysis',
        date: '2026-03-01',
        image: '/articles/market-eu.svg',
        content: ['Entering the European market requires meeting high standards. Key insights inside.'],
        sections: [
            { heading: 'Certifications', content: ['CE, RoHS, REACH are essential.'] },
            { heading: 'Sustainability', content: ['ESG is increasingly important.'] }
        ]
    },
    {
        id: 'north-america-market-guide',
        title: 'North America Market Guide',
        category: 'Market Analysis',
        date: '2026-03-02',
        image: '/articles/market-na.svg',
        content: ['Efficiency and innovation drive the North American market.'],
        sections: [
            { heading: 'Fast Pace', content: ['Speed of delivery and communication is crucial.'] }
        ]
    },
    {
        id: 'japan-market-guide',
        title: 'Japan Market Guide: Trust & Detail',
        category: 'Market Analysis',
        date: '2026-03-03',
        image: '/articles/market-jp.svg',
        content: ['Building trust in Japan takes time but yields loyal partners.'],
        sections: [
            { heading: 'Quality First', content: ['Zero tolerance for defects.'] }
        ]
    },
    {
        id: 'hardware-export-guide',
        title: 'Hardware Industry Export Strategy',
        category: 'Case Insights',
        date: '2026-03-05',
        image: '/articles/industry-hardware.svg',
        content: ['Strategies for hardware manufacturers to compete globally.'],
        sections: [
            { heading: 'ODM Value', content: ['Move beyond price competition with design.'] }
        ]
    },
    {
        id: 'electronics-export-guide',
        title: 'Electronics Component Export Guide',
        category: 'Case Insights',
        date: '2026-03-06',
        image: '/articles/industry-electronics.svg',
        content: ['Breaking into the global electronics supply chain.'],
        sections: [
            { heading: 'Technical Communication', content: ['Speak the engineers\' language.'] }
        ]
    },
    {
        id: 'packaging-export-guide',
        title: 'Packaging Industry Export Trends',
        category: 'Case Insights',
        date: '2026-03-07',
        image: '/articles/industry-packaging.svg',
        content: ['Sustainability is reshaping the packaging industry. How to adapt?'],
        sections: [
            { heading: 'EU Regulations', content: ['Recyclability is now a mandate.'] },
            { heading: 'ESG Demand', content: ['Global brands demand sustainable supply chains.'] }
        ]
    }
  ]
}

export function getArticles(lang: Lang) {
  const list = articles[lang] || articles['en']
  return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticle(lang: Lang, id: string) {
  const list = articles[lang] || articles['en']
  return list.find(a => a.id === id)
}

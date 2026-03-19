const fs = require('fs');
const path = require('path');

const files = [
  'data/coreServices.ts',
  'data/cases.ts',
  'data/markets.ts',
  'data/articles.json',
  'app/[lang]/how-it-works/page.tsx',
  'components/ServiceComparison.tsx',
  'components/home/WhyUs.tsx',
  'components/home/ProcessSection.tsx',
  'app/[lang]/services/page.tsx',
  'components/home/CasePreview.tsx',
  'data/seoIndustries.ts',
  'data/seoMarkets.ts'
];

const replacements = [
  // coreServices & others
  [/验证买家名单/g, '可用的海外采购与决策人资料'],
  [/驗證買家名單/g, '可用的海外採購與決策人資料'],
  [/verified buyer lists/g, 'verified decision-maker data'],
  [/买家名单样张/g, '采购与决策人资料样张'],
  [/買家名單樣張/g, '採購與決策人資料樣張'],
  [/Buyer list sample/g, 'Buyer and decision-maker data sample'],
  [/寄信名单与开信名单/g, '开发准备资料'],
  [/寄信名單與開信名單/g, '開發準備資料'],
  [/Target buyer list \+ opens list/g, 'Target buyer data + opens data'],
  [/买家名单交付/g, '采购与决策人资料交付'],
  [/買家名單交付/g, '採購與決策人資料交付'],
  [/Buyer lists delivered/g, 'Decision-maker data delivered'],
  [/建立精准名单/g, '建立精准采购与决策人资料'],
  [/建立精準名單/g, '建立精準採購與決策人資料'],
  [/build targeted prospect lists/g, 'build targeted decision-maker data'],
  [/寄信名单＋开信名单/g, '开发准备资料'],
  [/寄信名單＋開信名單/g, '開發準備資料'],
  [/获取100家潜在买家名单/g, '获取100个潜在海外客户开发起点'],
  [/取得100家潛在買家名單/g, '取得100個潛在海外客戶開發起點'],
  [/Get 100 Potential Buyers List/g, 'Get 100 Potential Buyer Data Profiles'],
  [/获取100家潜在经销商名单/g, '获取100个潜在经销候选资料'],
  [/取得100家潛在經銷商名單/g, '取得100個潛在經銷候選資料'],
  [/Get 100 Potential Distributors List/g, 'Get 100 Potential Distributor Data Profiles'],
  [/渠道名单交付/g, '通路候选资料交付'],
  [/通路名單交付/g, '通路候選資料交付'],
  [/Trackable partner shortlist/g, 'Trackable partner data'],
  [/建立 500 家以上目标名单/g, '建立 500 笔以上目标客户资料'],
  [/建立 500 家以上目標名單/g, '建立 500 筆以上目標客戶資料'],
  [/验证名单/g, '决策人研究与验证'],
  [/驗證名單/g, '決策人研究與驗證'],
  [/Verified prospects/g, 'Verified prospect data'],
  [/Verified contacts/g, 'Verified contact data'],
  [/候選名单/g, '潛在合作对象资料'],
  [/候選名單/g, '潛在合作對象資料'],
  [/候选名单/g, '潜在合作对象资料'],
  [/买家名单/g, '海外采购与决策人资料'],
  [/買家名單/g, '海外採購與決策人資料'],
  [/名單交付/g, '目標客戶資料庫交付'],
  [/名单交付/g, '目标客户资料库交付'],
  [/夥伴名单/g, '潜在合作对象资料'],
  [/夥伴名單/g, '潛在合作對象資料'],
  [/经销商名单/g, '潜在经销候选资料'],
  [/經銷商名單/g, '潛在經銷候選資料'],
  [/採購決策人名單/g, '採購決策人資料'],
  [/採購與決策人名單/g, '採購與決策人資料'],
  [/采购与决策人名单/g, '采购与决策人资料'],
  [/決策人名單/g, '決策人資料'],
  [/决策人名单/g, '决策人资料'],
  [/首批名單/g, '首批採購資料'],
  [/首批名单/g, '首批采购资料'],
  [/國際買家名單/g, '海外決策人資料'],
  [/国际买家名单/g, '海外决策人资料'],
  [/如何建立海外买家名单/g, '如何建立海外采购与决策人资料'],
  [/如何建立海外買家名單/g, '如何建立海外採購與決策人資料'],
  [/建立包含關鍵決策人聯絡方式的精準買家名單/g, '建立包含關鍵決策人聯絡方式的精準採購與決策人資料'],
  [/建立包含关键决策人联络方式的精准买家名单/g, '建立包含关键决策人联络方式的精准采购与决策人资料'],
  [/你们有欧洲当地的买家名单吗/g, '你们能协助建立欧洲当地的采购与决策人资料吗'],
  [/你們有歐洲當地的買家名單嗎/g, '你們能協助建立歐洲當地的採購與決策人資料嗎'],
  [/Can you help build local buyer and decision-maker data in Europe\?/g, 'Can you help build local buyer and decision-maker data in Europe?'],
  [/協助企業建立海外買家名單並進行客戶開發/g, '協助企業建立海外採購與決策人資料，並持續推進客戶開發與合作機會。'],
  [/协助企业建立海外买家名单并进行客户开发/g, '协助企业建立海外采购与决策人资料，并持续推进客户开发与合作机会。'],
  [/Built targeted buyer and decision-maker data, then executed outreach to create qualified opportunities./g, 'Built targeted buyer and decision-maker data, then executed outreach to create qualified opportunities.'],
  [/可用名單（Excel）＋詢價整理/g, '可用的開發資料＋詢價與需求整理'],
  [/可用名单（Excel）＋询价整理/g, '可用的开发资料＋询价与需求整理'],
  [/ICP → list → message → cadence → reply triage/g, 'ICP → 決策人資料 → 訊息策略 → 多輪跟進 → 商機推進'],
  [/名單＋開發＋跟進＋初步資格審核＋詢價交付/g, '研究 → 開發 → 跟進 → 資格判斷 → 報價與合作推進'],
  [/名单＋开发＋跟进＋初步资格审核＋询价交付/g, '研究 → 开发 → 跟进 → 资格判断 → 报价与合作推进'],
  [/不是賣名單/g, '不是交一份資料就結束'],
  [/不是卖名单/g, '不是交一份资料就结束'],
  [/每個案子重新建立採購與決策人資料，不使用公版舊名單。/g, '每個案子重新建立採購與決策人資料，確保資料與市場、產品、角色真正匹配。'],
  [/每个案子重新建立采购与决策人资料，不使用公版旧名单。/g, '每个案子重新建立采购与决策人资料，确保资料与市场、产品、角色真正匹配。'],
  // coreServices explicit fixes:
  [/外銷客戶開發是針對特定市場與買家角色，建立可驗證的海外買家名單，並透過多觸點開發節奏獲取詢問。/g, '外銷客戶開發是針對特定市場與買家角色，建立可用的海外採購與決策人資料，並透過多觸點開發節奏推進商機與詢價。'],
  [/外贸客戶開發是針對特定市场與买家角色，建立可验证的海外买家名单，並通过多触点開發節奏获取詢問。/g, '外贸客戶開發是針對特定市场与买家角色，建立可用的海外采购与决策人资料，并通过多触点开发节奏推进商机与询价。'],
  [/Deliverables: verified buyer lists, qualified replies, and meeting\/sample progression./g, 'Deliverables: verified decision-maker data, qualified replies, and progression toward meetings, samples, and quotes.'],
  [/取得100家潛在買家名單/g, '取得100筆潛在採購與決策人資料'],
  [/取得100家潜在买家名单/g, '取得100笔潜在采购与决策人资料'],
  [/名單分層/g, '名單分層'],
  [/名單驗證/g, '名單驗證'],
  [/名單來源/g, '名單來源'],
  [/建名單/g, '建資料'],
  [/展會名單/g, '展會名單'],
  [/精準名單/g, '精準資料'],
  // 
  [/標題與首段的「名單」需要手動檢查，腳本先處理上面指定的/g, '']
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    replacements.forEach(([regex, replacement]) => {
      if (replacement !== '' && regex.test(content)) {
        content = content.replace(regex, replacement);
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${file}`);
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

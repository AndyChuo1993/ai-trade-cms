const fs = require('fs');
const path = require('path');

const files = [
  'data/seoIndustries.ts',
  'data/seoMarkets.ts',
  'data/blog.ts',
  'data/cases.ts',
  'data/coreServices.ts',
  'app/[lang]/blog/[slug]/page.tsx',
  'lib/i18n.ts',
  'app/[lang]/qualified-b2b-leads/page.tsx',
  'app/[lang]/export-marketing/page.tsx',
  'app/[lang]/distributor-list/page.tsx',
  'components/home/ServicesPreview.tsx',
  'app/[lang]/overseas-buyer-lists/page.tsx',
  'components/ServiceSeoPage.tsx',
  'components/home/HeroSection.tsx',
  'app/[lang]/about/page.tsx',
  'app/[lang]/resources/export-lead-generation-checklist/page.tsx',
  'app/[lang]/cold-email-outreach/page.tsx',
  'app/[lang]/blog/page.tsx'
];

const replacements = [
  // core explicit replacements
  [/名單分層/g, '名單分層'],
  [/名单分层/g, '名单分层'],
  [/名單驗證/g, '名單驗證'],
  [/名单验证/g, '名单验证'],
  [/名單來源/g, '名單來源'],
  [/名单来源/g, '名单来源'],
  [/展會名單/g, '展會名單'],
  [/展会名单/g, '展会名单'],
  
  [/買家名單/g, '採購與決策人資料'],
  [/买家名单/g, '采购与决策人资料'],
  
  [/經銷商名單/g, '經銷商資料'],
  [/经销商名单/g, '经销商资料'],
  
  [/夥伴名單/g, '合作夥伴資料'],
  [/伙伴名单/g, '合作伙伴资料'],
  
  [/候選名單/g, '候選資料'],
  [/候选名单/g, '候选资料'],
  
  [/精準名單/g, '精準資料'],
  [/精准名单/g, '精准资料'],
  
  [/驗證名單/g, '驗證資料'],
  [/验证名单/g, '验证资料'],
  
  [/名單建立/g, '資料庫建置'],
  [/名单建立/g, '资料库建置'],
  
  [/建立名單/g, '建立資料庫'],
  [/建立名单/g, '建立资料库'],
  
  [/名單品質/g, '資料品質'],
  [/名单质量/g, '资料质量'],

  [/名單交付/g, '資料交付'],
  [/名单交付/g, '资料交付'],
  
  [/名單、/g, '決策人資料、'],
  [/名单、/g, '决策人资料、'],
  
  [/從名單/g, '從決策人資料'],
  [/从名单/g, '从决策人资料'],
  
  [/名單到/g, '資料到'],
  [/名单到/g, '资料到'],

  [/名單＋/g, '資料＋'],
  [/名单＋/g, '资料＋'],

  [/做名單/g, '建資料'],
  [/做名单/g, '建资料'],

  [/名單/g, '資料'],
  [/名单/g, '资料']
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Exception strings we do not want to replace "名單" in
    const keepWords = [
      '展會名單', '展会名单',
      '名單來源', '名单来源',
      '名單分層', '名单分层',
      '名單驗證', '名单验证',
      '精準鎖定海外採購決策人（非隨機資料）', // wait, let's just keep '隨機名單' maybe
      '隨機名單', '随机名单',
      '不是賣名單', '不是卖名单',
      '不使用公版舊名單', '不使用公版旧名单',
      '只想買名單', '只想买名单',
      '公版名單', '公版名单',
      '代理名單', '代理名单'
    ];
    
    keepWords.forEach((word, index) => {
      content = content.replace(new RegExp(word, 'g'), `__KEEP_WORD_${index}__`);
    });
    
    replacements.forEach(([regex, replacement]) => {
      if (regex.test(content)) {
        content = content.replace(regex, replacement);
        modified = true;
      }
    });

    keepWords.forEach((word, index) => {
      content = content.replace(new RegExp(`__KEEP_WORD_${index}__`, 'g'), word);
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${file}`);
    }
  }
});

const fs = require('fs');
const path = require('path');

const files = [
  'data/coreServices.ts',
  'data/cases.ts',
  'components/ServiceComparison.tsx',
  'components/home/WhyUs.tsx',
  'components/home/ProcessSection.tsx',
  'app/[lang]/services/page.tsx',
  'components/home/CasePreview.tsx',
  'data/seoIndustries.ts',
  'data/seoMarkets.ts'
];

const replacements = [
  // coreServices
  [/寄送名单与开信名单/g, '发送对象与开启状态资料'],
  [/寄送名單與開信名單/g, '發送物件與開啟狀態資料'],
  [/寄信名单与开信名单/g, '发送对象与开启状态资料'],
  [/寄信名單與開信名單/g, '發送物件與開啟狀態資料'],
  [/寄信名单＋开信名单/g, '发送对象与开启状态资料'],
  [/寄信名單＋開信名單/g, '發送物件與開啟狀態資料'],
  [/无效名单/g, '无效资料'],
  [/無效名單/g, '無效資料'],
  [/名单问题/g, '资料匹配问题'],
  [/名單問題/g, '資料匹配問題'],
  [/可用名单/g, '可用资料'],
  [/可用名單/g, '可用資料'],
  [/名单质量/g, '资料质量'],
  [/名單品質/g, '資料品質'],
  [/名单不精准/g, '资料不精准'],
  [/名單不精準/g, '資料不精準'],
  [/目标名单/g, '目标资料'],
  [/目標名單/g, '目標資料'],
  [/候選名单/g, '潜在合作对象资料'],
  [/候選名單/g, '潛在合作對象資料'],
  [/候选名单/g, '潜在合作对象资料'],
  [/经销商名单/g, '潜在经销候选资料'],
  [/經銷商名單/g, '潛在經銷候選資料'],
  [/伙伴名单/g, '潜在合作对象资料'],
  [/夥伴名單/g, '潛在合作對象資料'],
  [/名单建置/g, '资料建置'],
  [/名單建置/g, '資料建置'],
  [/名单角色/g, '资料角色'],
  [/名單角色/g, '資料角色'],
  [/名单交付/g, '资料交付'],
  [/名單交付/g, '資料交付'],
  [/建立名单/g, '建立资料'],
  [/建立名單/g, '建立資料'],
  [/找更多名单/g, '找更多资料'],
  [/找更多名單/g, '找更多資料'],
  [/名单不足/g, '资料不足'],
  [/名單不足/g, '資料不足'],
  [/做名单/g, '建资料'],
  [/做名單/g, '建資料'],
  [/把名单/g, '把资料'],
  [/把名單/g, '把資料'],
  [/买家名单/g, '海外采购与决策人资料'],
  [/買家名單/g, '海外採購與決策人資料'],
  [/名單，/g, '資料，'],
  [/名单，/g, '资料，'],
  [/名單、/g, '資料、'],
  [/名单、/g, '资料、'],
  [/名單與/g, '資料與'],
  [/名单与/g, '资料与'],
  [/名單＋/g, '資料＋'],
  [/名单＋/g, '资料＋'],
  [/「名單」/g, '「資料」'],
  [/「名单」/g, '「资料」'],
  [/名單/g, '資料'],
  [/名单/g, '资料'],
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Some exceptions where we want to keep "名單"
    const keepWords = [
      '展會名單', '展会名单',
      '名單來源', '名单来源',
      '名單分層', '名单分层',
      '名單驗證', '名单验证'
    ];
    
    // Replace keep words with placeholders
    keepWords.forEach((word, index) => {
      content = content.replace(new RegExp(word, 'g'), `__KEEP_WORD_${index}__`);
    });
    
    replacements.forEach(([regex, replacement]) => {
      if (regex.test(content)) {
        content = content.replace(regex, replacement);
        modified = true;
      }
    });

    // Restore keep words
    keepWords.forEach((word, index) => {
      content = content.replace(new RegExp(`__KEEP_WORD_${index}__`, 'g'), word);
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${file}`);
    }
  }
});

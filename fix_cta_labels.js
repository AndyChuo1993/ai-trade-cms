const fs = require('fs');
const path = require('path');

const dirPath = __dirname;

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        getAllFiles(path.join(dir, file), fileList);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.json')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
}

const allFiles = getAllFiles(dirPath);

const replacements = [
  [/取得市場切入建議（CTA）/g, '取得市場切入建議'],
  [/获取市场切入建议（CTA）/g, '获取市场切入建议'],
  
  [/Explore Lead Generation/g, 'Get Market Entry Advice'],
  [/Talk to SunGene/g, 'Book Strategy Call'],
  
  [/立即开始你的外贸增长/g, '取得市场切入建议'],
  [/立即開始你的外銷成長/g, '取得市場切入建議'],
  [/Start Your Export Growth Now/g, 'Get Market Entry Advice'],
  [/Start Export Growth/g, 'Get Market Entry Advice'],
  [/开始开发海外客户/g, '申请合作评估'],
  [/開始開發海外客戶/g, '申請合作評估'],
  
  [/取得你的開發信框架與節奏/g, '取得市場切入建議'],
  [/取得你的开发信框架与节奏/g, '获取市场切入建议'],
  [/Get Your Outreach Framework/g, 'Get Market Entry Advice'],
  
  [/規劃你的出口行銷策略/g, '取得市場切入建議'],
  [/规划你的出口营销策略/g, '获取市场切入建议'],
  [/Plan Your Export Strategy/g, 'Get Market Entry Advice'],
  
  [/想獲得更穩定的合格詢價？/g, '取得市場切入建議'],
  [/想获得更稳定的合格询价？/g, '获取市场切入建议'],
  [/Want more qualified export inquiries\?/g, 'Get Market Entry Advice'],
  
  [/建立你的海外渠道网络/g, '申请合作评估'],
  [/建立你的海外通路網絡/g, '申請合作評估'],
  
  [/想建立可复制的海外開發能力？/g, '预約策略通话'],
  [/想建立可複製的海外開發能力？/g, '預約策略通話'],
  
  [/获取你的出口市场分析/g, '获取市场切入建议'],
  [/獲取你的出口市場分析/g, '取得市場切入建議'],
  
  [/Get Get Market Entry Advice/g, 'Get Market Entry Advice'] // fix double get
];

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let modified = false;
  
  replacements.forEach(([regex, replacement]) => {
    if (regex.test(content)) {
      content = content.replace(regex, replacement);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated CTA labels in: ${file}`);
  }
});

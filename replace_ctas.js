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
  [/預約諮詢/g, '預約策略通話'],
  [/预约咨询/g, '预约策略通话'],
  [/Book Consultation/g, 'Book Strategy Call'],
  
  [/取得市場評估/g, '取得市場切入建議'],
  [/取得市场评估/g, '取得市场切入建议'],
  [/Get Market Assessment/g, 'Get Market Entry Advice'],
  
  [/看看我們怎麼幫你找到客戶/g, '申請合作評估'],
  [/看看我们怎么帮你找到客户/g, '申请合作评估'],
  [/See How We Find Clients/g, 'Request Partnership Evaluation'],
  
  [/了解服務方案/g, '申請合作評估'],
  [/了解服务方案/g, '申请合作评估'],
  
  [/Free Market Analysis/g, 'Get Market Entry Advice']
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
    console.log(`Updated CTA in: ${file}`);
  }
});

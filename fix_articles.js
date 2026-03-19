const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'data/articles.json');
let content = fs.readFileSync(file, 'utf8');

const replacements = [
  [/名單品質/g, '資料品質'],
  [/名单质量/g, '资料质量'],
  [/名單數量/g, '資料數量'],
  [/名单數量/g, '资料数量'],
  [/沒有精准名单/g, '沒有精准的决策人资料'],
  [/沒有精準名單/g, '沒有精準的決策人資料'],
  [/這些名單通常包含/g, '這些資料通常包含'],
  [/這些名单通常包含/g, '這些资料通常包含']
];

replacements.forEach(([regex, rep]) => {
  content = content.replace(regex, rep);
});

fs.writeFileSync(file, content, 'utf8');
console.log('Fixed articles.json');

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const srcDir = path.join(__dirname, '../src');

// 需要替换的图片列表
const images = [
  'agent-matrix',
  'city-skyline',
  'ecosystem-academy',
  'ecosystem-certification',
  'ecosystem-lawyer',
  'enforcement',
  'flagship-bg',
  'LexEnforcer-black',
  'LexEnforcer',
  'LexOracle-black',
  'LexOracle',
  'LexStudio-black',
  'LexStudio',
  'logos',
  'mask',
  'research-bg',
  'statement-bg',
  'team-arthur',
  'team-neo',
  'zk-proofs'
];

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !filePath.includes('node_modules')) {
      getAllFiles(filePath, fileList);
    } else if (file.match(/\.(tsx|ts|jsx|js)$/)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

function updateImageRefs(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;

  images.forEach(image => {
    const pngPattern = new RegExp(`/images/${image}\\.png`, 'g');
    if (pngPattern.test(content)) {
      content = content.replace(pngPattern, `/images/${image}.webp`);
      updated = true;
      console.log(`✓ 更新 ${path.relative(srcDir, filePath)}: /images/${image}.png → .webp`);
    }
  });

  if (updated) {
    fs.writeFileSync(filePath, content);
  }
}

function main() {
  console.log('批量更新图片引用...\n');

  const files = getAllFiles(srcDir);
  let updatedCount = 0;

  files.forEach(file => {
    try {
      updateImageRefs(file);
      updatedCount++;
    } catch (error) {
      console.error(`✗ 处理文件失败: ${file}`, error.message);
    }
  });

  console.log(`\n完成！已检查 ${files.length} 个文件`);
}

main();

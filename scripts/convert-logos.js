const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, '../public/images/logos');

const pngFiles = fs.readdirSync(logosDir)
  .filter(file => file.endsWith('.png'));

async function convertToWebP(filename) {
  const inputPath = path.join(logosDir, filename);
  const outputPath = path.join(logosDir, filename.replace('.png', '.webp'));

  const inputStats = fs.statSync(inputPath);

  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

    console.log(`✓ ${filename.padEnd(20)} ${(inputStats.size / 1024).toFixed(2)}KB → ${(outputStats.size / 1024).toFixed(2)}KB (节省 ${savings}%)`);

    // 如果 webp 比 png 大，删除 webp
    if (outputStats.size >= inputStats.size) {
      fs.unlinkSync(outputPath);
      console.log(`  ⚠ WebP 更大，已删除，保留 PNG`);
    }
  } catch (error) {
    console.error(`✗ ${filename} 转换失败:`, error.message);
  }
}

async function main() {
  console.log('开始转换 logos PNG 到 WebP...\n');

  for (const file of pngFiles) {
    await convertToWebP(file);
  }

  console.log('\n转换完成！');
}

main().catch(console.error);

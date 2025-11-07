const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 图标列表
const icons = ['dynamic', 'friends', 'message', 'profile'];
const iconDir = path.join(__dirname, 'src', 'assets', 'images');

console.log('开始将SVG图标转换为PNG格式...');

// 检查是否已安装svg2png
let hasSvg2png = false;
try {
  require.resolve('svg2png');
  hasSvg2png = true;
} catch (e) {
  // 安装svg2png
  console.log('安装svg2png库...');
  execSync('npm install svg2png --no-save --legacy-peer-deps', { stdio: 'inherit' });
}

// 引入svg2png
const svg2png = require('svg2png');

// 执行转换
async function convertIcons() {
  for (const icon of icons) {
    for (const state of ['normal', 'selected']) {
      const svgPath = path.join(iconDir, `${icon}_tab_${state}.svg`);
      const pngPath = path.join(iconDir, `${icon}_tab_${state === 'selected' ? 'selected' : 'normal'}.png`);
      
      try {
        console.log(`转换 ${path.basename(svgPath)} -> ${path.basename(pngPath)}`);
        const svgBuffer = fs.readFileSync(svgPath);
        const pngBuffer = await svg2png(svgBuffer, { width: 81, height: 81 });
        fs.writeFileSync(pngPath, pngBuffer);
        
        // 检查文件大小
        const stats = fs.statSync(pngPath);
        const fileSizeInKB = stats.size / 1024;
        console.log(`  文件大小: ${fileSizeInKB.toFixed(2)} KB`);
        
        if (fileSizeInKB > 100) {
          console.log(`  警告: ${path.basename(pngPath)} 文件大小超过100KB`);
        }
      } catch (error) {
        console.error(`转换失败: ${error.message}`);
      }
    }
  }
  
  console.log('\n转换完成！');
}

convertIcons().catch(console.error);
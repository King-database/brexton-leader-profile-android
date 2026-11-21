const sharp = require('sharp');
const path = require('path');
async function main() {
  await sharp(path.join(__dirname, '../assets/brand-icon.svg'))
    .resize(1024, 1024).png().toFile(path.join(__dirname, '../assets/icon.png'));
  await sharp(path.join(__dirname, '../assets/brand-splash.svg'))
    .resize(2732, 2732, { fit: 'contain', background: '#061844' })
    .png().toFile(path.join(__dirname, '../assets/splash.png'));
}
main().catch(err => { console.error(err); process.exit(1); });

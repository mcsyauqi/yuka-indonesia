// Builds assets/images/hero-bg.webp, the backdrop behind .hero-bg on the homepage.
//
// The source photo is also shown full-size on /galeri, /blog and two articles, so it
// cannot simply be re-encoded in place. On the homepage it sits under a 88-97% opaque
// navy gradient (.hero-bg::after), which means its detail is invisible: rendering the
// original and this 800px/q40 version through that overlay differs by a mean of
// 0.22/255 per channel. It is the LCP element, so the 59% byte saving is worth it.
const path = require('path');
const sharp = require('D:/Projects/Creativism App/node_modules/sharp');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'Dokumentasi', '21 Jan 2026', 'papan-nama-taruna-imani.webp');
const OUT = path.join(ROOT, 'assets', 'images', 'hero-bg.webp');

sharp(SRC)
    .resize(800)
    .webp({ quality: 40, effort: 6 })
    .toFile(OUT)
    .then(info => console.log(`${OUT} -> ${info.width}x${info.height}, ${info.size} bytes`));

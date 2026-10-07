'use strict';
/*
 * Tanda tangan kerangka artikel kanonik YUKA (sumber: artikel/sibling-anak-berkebutuhan-khusus.html).
 * Dipakai oleh scripts/check-article-skeleton.js dan gate publish-scheduled.yml.
 * Jangan dilonggarkan untuk meloloskan satu artikel: bungkus ulang artikelnya.
 */
const fs = require('fs');
const path = require('path');

const MARKERS = [
  ['font-poppins', /fonts\.googleapis\.com\/css2\?family=Poppins/],
  ['style.min.css', /assets\/css\/style(\.min)?\.css/],
  ['navbar', /class="navbar"/],
  ["article-header", /class="article-header"/],
  ['breadcrumb', /class="breadcrumb"[^>]*>[\s\S]{0,400}?<a /],
  ['card-category', /class="card-category"/],
  ['article-meta', /class="article-meta"/],
  ['article-featured-image', /class="article-featured-image"/],
  ['article-content', /class="article-content"/],
  ['article-body', /class="article-body"/],
  ['related-articles', /class="related-articles"/],
  ['related-card', /class="related-card"/],
  ['article-tags', /class="article-tags"/],
  ['article-sources', /class="article-sources"/],
  ['article-share', /class="article-share"/],
  ['share-buttons', /class="share-buttons"/],
  ['footer-grid', /class="footer-grid"/],
];

/** Ukuran gambar (lebar, tinggi) untuk webp/png/jpeg tanpa dependensi. */
function imageSize(file) {
  const b = fs.readFileSync(file);
  if (b.slice(0, 4).toString() === 'RIFF' && b.slice(8, 12).toString() === 'WEBP') {
    const t = b.slice(12, 16).toString();
    if (t === 'VP8X') return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
    if (t === 'VP8 ') return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
    if (t === 'VP8L') { const n = b.readUInt32LE(21); return { w: 1 + (n & 0x3fff), h: 1 + ((n >> 14) & 0x3fff) }; }
  }
  if (b.readUInt32BE(0) === 0x89504e47) return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length) {
      if (b[i] !== 0xff) { i++; continue; }
      const m = b[i + 1];
      if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) };
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return null;
}

function heroSrc(html) {
  const m = html.match(/class="article-featured-image"[\s\S]*?<img[^>]+src="([^"]+)"/);
  return m ? m[1] : null;
}

function missingSkeletonParts(html, { root } = {}) {
  const missing = MARKERS.filter(([, re]) => !re.test(html)).map(([k]) => k);
  const src = heroSrc(html);
  if (!src) missing.push('hero-img');
  else if (src && root) {
    const rel = src.replace(/^https?:\/\/[^/]+\//, '').replace(/^(\.\.\/)+/, '').replace(/^\//, '');
    const file = path.join(root, decodeURIComponent(rel));
    if (!fs.existsSync(file)) missing.push(`hero-missing-file(${rel})`);
    else {
      const s = imageSize(file);
      // Foto potret hanya lolos kalau kerangka memotongnya (max-height + object-fit: cover di
      // .article-featured-image img), seperti template kanonik. Tanpa itu potret tampil setinggi
      // layar (kasus uu-no-19-tahun-2011-tentang-apa, 2026-10-06).
      const cropped = /\.article-featured-image img\s*\{[^}]*max-height:[^}]*object-fit:\s*cover/.test(html);
      if (s && s.h > s.w && !cropped) missing.push(`hero-portrait-uncropped(${s.w}x${s.h})`);
    }
  }
  return missing;
}

module.exports = { MARKERS, missingSkeletonParts, imageSize, heroSrc };

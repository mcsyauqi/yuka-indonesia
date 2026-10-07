#!/usr/bin/env node
'use strict';
/*
 * Cycle #74 (2026-10-07): tambahkan kartu Bacaan Terkait (related-articles/related-card) dan tombol
 * bagikan (article-share/share-buttons) ke dua artikel 2026-09-28 yang tayang tanpa keduanya.
 * Markup dan gaya disalin dari kerangka kanonik (scripts/lib/article-page.js). Target related
 * dicek tayang (HTTP 200 live) sebelum ditulis.
 */
const fs = require('fs');
const path = require('path');
const { stripTags } = require('./lib/article-page');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const PLAN = {
  'milestone-motorik-halus-anak-1-3-tahun': ['kegiatan-dan-stimulasi-motorik-halus', 'latihan-motorik-halus', 'milestone-motorik-kasar-anak-0-12-bulan', 'what-is-a-milestone-for-a-kid'],
  'terapi-pijat-anak-cerebral-palsy': ['cerebral-palsy-adalah', 'skoliosis-pada-anak-cerebral-palsy', 'terapi-okupasi-untuk-anak-cerebral-palsy', 'latihan-fisioterapi-anak-di-rumah'],
};
const CSS = `<style>
.related-articles{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1.5rem;margin:2rem 0}
.related-card{background:var(--white);border:1px solid var(--gray-200);border-radius:12px;padding:1.5rem}
.related-card h4{font-size:1rem;margin:0 0 .5rem}.related-card a{color:var(--primary);text-decoration:none;font-weight:600}
.related-card p{font-size:.9rem;color:var(--gray-600);margin:0}
.article-share{display:flex;align-items:center;gap:1rem;margin-top:2rem}.share-buttons{display:flex;gap:.5rem}
.share-btn{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--white)}
.share-btn.whatsapp{background:#25D366}.share-btn.facebook{background:#1877F2}
</style>`;

function share(slug, title) {
  const url = `${SITE}/artikel/${slug}`;
  const t = encodeURIComponent(title);
  const src = fs.readFileSync(path.join(ROOT, 'artikel', 'sibling-anak-berkebutuhan-khusus.html'), 'utf8');
  const blk = src.match(/<div class="article-share">[\s\S]*?<\/div>\s*<\/div>/)[0];
  return blk
    .replace(/https:\/\/www\.yukaindonesia\.com\/artikel\/sibling-anak-berkebutuhan-khusus/g, url)
    .split(encodeURIComponent('Sibling Anak Berkebutuhan Khusus')).join(t);
}

(async () => {
  for (const [slug, rel] of Object.entries(PLAN)) {
    const cards = [];
    for (const r of rel) {
      const res = await fetch(`${SITE}/artikel/${r}`);
      await new Promise((ok) => setTimeout(ok, 2500));
      if (res.status !== 200) { console.log(`  lewati ${r}: ${res.status}`); continue; }
      const h = fs.readFileSync(path.join(ROOT, 'artikel', `${r}.html`), 'utf8');
      cards.push(`
                <div class="related-card">
                    <h4><a href="${r}">${stripTags(h.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1])}</a></h4>
                    <p>${h.match(/<meta name="description" content="([^"]*)"/)[1]}</p>
                </div>`);
    }
    if (cards.length < 3) throw new Error(`${slug}: related tayang < 3`);
    const fa = path.join(ROOT, 'artikel', `${slug}.html`);
    let html = fs.readFileSync(fa, 'utf8');
    if (/class="related-articles"/.test(html)) { console.log(`${slug}: sudah ada`); continue; }
    const title = stripTags(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]);
    html = html.replace('<div class="article-sources">', `<h2>Bacaan Terkait</h2>
            <div class="related-articles">${cards.join('')}
            </div>
            <div class="article-sources">`);
    html = html.replace(/(<div class="article-tags">[\s\S]*?<\/div>)/, `$1\n        ${share(slug, title)}`);
    html = html.replace('</head>', `${CSS}\n</head>`);
    fs.writeFileSync(fa, html, 'utf8');
    console.log(`${slug}: related ${cards.length} + share`);
  }
})().catch((e) => { console.error(e); process.exit(1); });

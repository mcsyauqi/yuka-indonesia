#!/usr/bin/env node
/*
 * Validator KERANGKA artikel (cycle #74, 2026-10-07).
 *
 * check-article-shell.js hanya memeriksa footer + GA4 + analytics. Itu tidak
 * menangkap batch MinTiv 2026-10-06 (uu-no-19-tahun-2011-tentang-apa dkk.) yang
 * punya footer tapi kehilangan font Poppins, pita header navy, breadcrumb,
 * article-content, article-share, article-sources, article-tags dan
 * related-articles. Validator ini memeriksa tanda tangan kerangka kanonik
 * (diambil dari artikel/sibling-anak-berkebutuhan-khusus.html) dan orientasi
 * hero (potret = gagal, artikel lain memakai foto lanskap).
 *
 *   node scripts/check-article-skeleton.js                 # semua artikel/*.html
 *   node scripts/check-article-skeleton.js a.html b.html   # berkas tertentu
 *   node scripts/check-article-skeleton.js --json
 * Exit 1 kalau ada artikel yang gagal.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { missingSkeletonParts } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'artikel');
const args = process.argv.slice(2);
const asJson = args.includes('--json');
// --since=YYYY-MM-DD: hanya artikel dengan datePublished >= tanggal itu. ~115 artikel lama
// (batch Maret-Agustus) memakai varian kerangka lama; mereka utang terpisah, bukan alasan
// melonggarkan gate untuk artikel baru.
const sinceArg = args.find((a) => a.startsWith('--since='));
const since = sinceArg ? sinceArg.split('=')[1] : null;
const only = args.filter((a) => !a.startsWith('--'));
const files = only.length
  ? only.map((f) => path.resolve(f))
  : fs.readdirSync(DIR).filter((f) => f.endsWith('.html')).sort().map((f) => path.join(DIR, f));

const results = [];
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  if (since) {
    const d = (html.match(/"datePublished":\s*"([^"]+)"/) || [])[1] || '';
    if (d.slice(0, 10) < since) continue;
  }
  const missing = missingSkeletonParts(html, { root: ROOT });
  results.push({ file: path.relative(ROOT, file).replace(/\\/g, '/'), missing });
}
const bad = results.filter((r) => r.missing.length);
if (asJson) {
  console.log(JSON.stringify({ checked: results.length, failed: bad.length, bad }, null, 1));
} else {
  console.log(`checked ${results.length} artikel`);
  bad.forEach((r) => console.error(`  FAIL  ${r.file}: ${r.missing.join(', ')}`));
  if (!bad.length) console.log('OK: semua artikel memakai kerangka kanonik.');
}
process.exit(bad.length ? 1 : 0);

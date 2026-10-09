#!/usr/bin/env node
/*
 * Validator MUTU KONTEN artikel YUKA (2026-10-09). Standar dan alasannya: scripts/lib/article-quality.js.
 *
 *   node scripts/check-article-quality.js artikel/a.html artikel/b.html   # berkas tertentu
 *   node scripts/check-article-quality.js --since=2026-10-10              # datePublished >= tanggal
 *   node scripts/check-article-quality.js --all --warn-only               # laporan utang, tidak memblok
 *   node scripts/check-article-quality.js ... --json
 * Exit 1 kalau ada artikel yang gagal, kecuali --warn-only.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { checkArticleQuality, STANDARD } = require('./lib/article-quality');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'artikel');
const args = process.argv.slice(2);
const asJson = args.includes('--json');
const warnOnly = args.includes('--warn-only');
const sinceArg = args.find((a) => a.startsWith('--since='));
const since = sinceArg ? sinceArg.split('=')[1] : null;
const only = args.filter((a) => !a.startsWith('--'));
if (!only.length && !since && !args.includes('--all')) {
  console.error('pakai: check-article-quality.js <berkas...> | --since=YYYY-MM-DD | --all [--warn-only] [--json]');
  process.exit(2);
}
const files = only.length
  ? only.map((f) => path.resolve(f)).filter((f) => fs.existsSync(f))
  : fs.readdirSync(DIR).filter((f) => f.endsWith('.html')).sort().map((f) => path.join(DIR, f));

const results = [];
for (const file of files) {
  const html = fs.readFileSync(file, 'utf8');
  if (since) {
    const d = (html.match(/"datePublished":\s*"([^"]+)"/) || [])[1] || '';
    if (d.slice(0, 10) < since) continue;
  }
  const r = checkArticleQuality(html);
  results.push({ file: path.relative(ROOT, file).replace(/\\/g, '/'), ...r });
}
const bad = results.filter((r) => r.fail.length);
if (asJson) {
  console.log(JSON.stringify({ standard: STANDARD, checked: results.length, failed: bad.length, results }, null, 1));
} else {
  console.log(`checked ${results.length} artikel (standar: ${STANDARD.words} kata, ${STANDARD.images} gambar isi, ${STANDARD.faq} FAQ + schema, ${STANDARD.tables} tabel)`);
  for (const r of results) {
    const s = `${r.m.words} kata | ${r.m.images} gambar | FAQ ${r.m.faqVisible}/${r.m.faqSchema} schema | ${r.m.tables} tabel | ${r.m.internalLinks} link internal`;
    if (r.fail.length) console.error(`  FAIL  ${r.file}: ${s}\n        -> ${r.fail.join('; ')}`);
    else console.log(`  OK    ${r.file}: ${s}${r.warn.length ? `  (peringatan: ${r.warn.join('; ')})` : ''}`);
  }
  if (bad.length && warnOnly) console.log(`PERINGATAN: ${bad.length} artikel di bawah standar (mode --warn-only, tidak memblok).`);
}
process.exit(bad.length && !warnOnly ? 1 : 0);

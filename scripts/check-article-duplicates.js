#!/usr/bin/env node
'use strict';
/*
 * Gate ANTI-DUPLIKAT artikel YUKA (2026-10-11, kartu Trello gswe5XFa).
 *
 * Kenapa ada: 2026-10-03 antara 03:15 dan 05:01 WIB, 11 artikel baru di-commit dengan judul,
 * H1, dan meta baru, tetapi badan artikelnya salinan artikel lain (shingle 8 kata: Jaccard
 * 0,92 sampai 0,99, containment 0,97 sampai 1,00). Gate kerangka, shell, dan mutu konten
 * semuanya lolos karena salinan itu rapi dan panjang. Tidak ada yang membandingkan isi
 * antar artikel.
 *
 * Cara kerja: teks di dalam <article class="article-content"> (tanpa script/style/tag)
 * dipecah menjadi shingle 8 kata, sama dengan metode data/dup-scan-2026-10-03/dup.mjs.
 * Artikel yang diperiksa dibandingkan dengan SEMUA artikel lain di artikel/.
 *
 * Ambang memblok: Jaccard >= 0,70 ATAU containment (irisan dibagi shingle artikel yang
 * lebih pendek) >= 0,85. Salinan 3 Okt ada di 0,92+ / 0,97+. Ambang sengaja di atas
 * klaster artikel templat lama (Jaccard 0,5 sampai 0,63, containment sampai 0,77, mis.
 * konsep-/prinsip-/teori-/penerapan-inklusi-sosial) supaya gate ini tidak merah untuk
 * utang lama; utang itu dilaporkan dengan --report, bukan dibiarkan diam.
 *
 * Pemakaian:
 *   node scripts/check-article-duplicates.js artikel/a.html [artikel/b.html ...]
 *       periksa berkas tertentu terhadap semua artikel (exit 1 kalau ada pasangan di atas ambang)
 *   node scripts/check-article-duplicates.js --changed=<git-range>
 *       periksa artikel yang berubah di rentang git (mis. HEAD~1..HEAD)
 *   node scripts/check-article-duplicates.js --all
 *       periksa semua pasangan (exit 1 kalau ada pasangan di atas ambang)
 *   tambah --report untuk ikut mencetak pasangan di atas 0,30 (tidak memengaruhi exit code)
 *
 * JANGAN longgarkan ambang untuk meloloskan satu artikel: tulis ulang badannya.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'artikel');
const N = 8;
const BLOCK_JACCARD = 0.7;
const BLOCK_CONTAINMENT = 0.85;
const REPORT_JACCARD = 0.3;

function articleWords(html) {
  const m = html.match(/<article class="article-content"[^>]*>([\s\S]*?)<\/article>/) || html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  const body = m ? m[1] : '';
  return body
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9à-ÿ\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function shingles(words) {
  const s = new Set();
  for (let k = 0; k + N <= words.length; k++) s.add(words.slice(k, k + N).join(' '));
  return s;
}

function compare(A, B) {
  const [small, large] = A.size < B.size ? [A, B] : [B, A];
  let inter = 0;
  for (const x of small) if (large.has(x)) inter++;
  return { jaccard: inter / (A.size + B.size - inter || 1), containment: inter / (small.size || 1) };
}

function main() {
  const args = process.argv.slice(2);
  const report = args.includes('--report');
  const all = args.includes('--all');
  const changedArg = args.find((a) => a.startsWith('--changed='));

  const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.html'));
  const sets = new Map();
  for (const f of files) sets.set(f, shingles(articleWords(fs.readFileSync(path.join(DIR, f), 'utf8'))));

  let targets;
  if (all) targets = files;
  else if (changedArg) {
    const range = changedArg.split('=')[1];
    const out = execSync(`git diff --name-only --diff-filter=AM ${range} -- artikel/`, { cwd: ROOT, encoding: 'utf8' });
    targets = out.split('\n').filter((l) => l.endsWith('.html')).map((l) => path.basename(l));
  } else targets = args.filter((a) => !a.startsWith('--')).map((a) => path.basename(a));

  targets = targets.filter((t) => sets.has(t));
  if (!targets.length) {
    console.log('check-article-duplicates: tidak ada artikel untuk diperiksa.');
    return 0;
  }

  const blocked = [];
  const reported = [];
  const seen = new Set();
  for (const t of targets) {
    const A = sets.get(t);
    if (A.size < 50) continue;
    for (const [o, B] of sets) {
      if (o === t || B.size < 50) continue;
      const key = [t, o].sort().join('|');
      if (seen.has(key)) continue;
      seen.add(key);
      const r = compare(A, B);
      const row = { a: t, b: o, ...r };
      if (r.jaccard >= BLOCK_JACCARD || r.containment >= BLOCK_CONTAINMENT) blocked.push(row);
      else if (report && r.jaccard >= REPORT_JACCARD) reported.push(row);
    }
  }

  const fmt = (r) => `${r.a} ~ ${r.b}  Jaccard ${r.jaccard.toFixed(2)}  containment ${r.containment.toFixed(2)}`;
  if (report && reported.length) {
    console.log(`Laporan (tidak memblok): ${reported.length} pasangan Jaccard >= ${REPORT_JACCARD}`);
    for (const r of reported.sort((x, y) => y.jaccard - x.jaccard).slice(0, 50)) console.log('  ' + fmt(r));
  }
  if (blocked.length) {
    console.error(`DUPLIKAT: ${blocked.length} pasangan di atas ambang (Jaccard >= ${BLOCK_JACCARD} atau containment >= ${BLOCK_CONTAINMENT}):`);
    for (const r of blocked.sort((x, y) => y.jaccard - x.jaccard)) console.error('  ' + fmt(r));
    console.error('Tulis ulang badan artikel sesuai topiknya sendiri. Jangan salin artikel lain lalu ganti judul.');
    return 1;
  }
  console.log(`OK: ${targets.length} artikel diperiksa terhadap ${files.length} artikel, tidak ada duplikat di atas ambang.`);
  return 0;
}

process.exit(main());

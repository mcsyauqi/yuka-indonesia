#!/usr/bin/env node
/**
 * list-medical-review-status.mjs
 *
 * Menyusun daftar artikel kesehatan dan terapi YUKA beserta status tinjauannya,
 * supaya begitu ada peninjau berkredensial yang bersedia, langsung kelihatan
 * artikel mana saja yang perlu ia tinjau dan urutannya.
 *
 * Deteksi "artikel medis" memakai scripts/lib/medical-review.js (sama dengan
 * gerbang terbit scripts/check-medical-review.js), jadi hitungannya konsisten.
 *
 * Status per artikel:
 *   PERSON        reviewedBy berisi Person (peninjau bernama)
 *   TIM_REDAKSI   reviewedBy berisi Organization Tim Redaksi YUKA (keputusan Syauqi 4 Okt 2026)
 *   PERNYATAAN    belum ada reviewedBy, tapi ada pernyataan "Status tinjauan medis"
 *   KOSONG        belum ada keduanya
 *
 * Prioritas: artikel di data/medical-reviewer.json -> tinjauan.artikel = P1,
 * sisanya P2.
 *
 * Pakai: node scripts/list-medical-review-status.mjs [--out data/daftar-artikel-perlu-tinjauan-medis.json]
 * Hanya membaca artikel dan menulis satu file JSON. Tidak mengubah halaman.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const { isMedicalArticle, hasDisclosure } = require('./lib/medical-review.js');

const outArg = process.argv.indexOf('--out');
const OUT = path.join(ROOT, outArg > -1 ? process.argv[outArg + 1] : 'data/daftar-artikel-perlu-tinjauan-medis.json');

const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'medical-reviewer.json'), 'utf8'));
const prioritas = new Set((cfg.tinjauan && cfg.tinjauan.artikel) || []);

function reviewerType(html) {
  const types = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    try {
      const walk = (o) => {
        if (!o || typeof o !== 'object') return;
        if (Array.isArray(o)) return o.forEach(walk);
        if (o.reviewedBy) types.push(o.reviewedBy['@type'] || 'unknown');
        Object.values(o).forEach(walk);
      };
      walk(JSON.parse(m[1]));
    } catch { /* JSON-LD rusak: abaikan, gerbang lain yang menangkap */ }
  }
  if (types.includes('Person')) return 'PERSON';
  if (types.includes('Organization')) return 'TIM_REDAKSI';
  return null;
}

const dir = path.join(ROOT, 'artikel');
const rows = [];
for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.html')).sort()) {
  const rel = 'artikel/' + f;
  const slug = f.replace(/\.html$/, '');
  const html = fs.readFileSync(path.join(dir, f), 'utf8');
  if (!isMedicalArticle(html, slug)) continue;
  const rt = reviewerType(html);
  const status = rt || (hasDisclosure(html) ? 'PERNYATAAN' : 'KOSONG');
  const title = ((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || '').replace(/<[^>]+>/g, '').trim();
  rows.push({ path: rel, url: 'https://www.yukaindonesia.com/artikel/' + slug, judul: title, prioritas: prioritas.has(rel) ? 'P1' : 'P2', status });
}
rows.sort((a, b) => a.prioritas.localeCompare(b.prioritas) || a.path.localeCompare(b.path));

const ringkasan = rows.reduce((acc, r) => { acc[r.status] = (acc[r.status] || 0) + 1; return acc; }, {});
const out = {
  _catatan: 'Dibuat oleh scripts/list-medical-review-status.mjs. Daftar artikel kesehatan/terapi yang perlu ditinjau peninjau berkredensial. P1 = 12 artikel prioritas di data/medical-reviewer.json. Jangan diedit manual, jalankan ulang skripnya.',
  dibuat: new Date().toISOString(),
  total: rows.length,
  ringkasan,
  belumDitinjauPeninjauBernama: rows.filter(r => r.status !== 'PERSON').length,
  artikel: rows,
};
fs.writeFileSync(OUT, JSON.stringify(out, null, 1) + '\n', 'utf8');
console.log('Ditulis: ' + path.relative(ROOT, OUT));
console.log('Artikel medis: ' + rows.length + ' | P1: ' + rows.filter(r => r.prioritas === 'P1').length + ' | status: ' + JSON.stringify(ringkasan));

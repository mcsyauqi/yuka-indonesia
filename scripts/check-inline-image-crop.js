#!/usr/bin/env node
/*
 * Guard: gambar di ISI artikel wajib tampil utuh (cycle 80, 2026-10-19).
 *
 * Latar: kerangka artikel (scripts/lib/article-page.js, EXTRA_CSS) dan 94 artikel
 * menulis `.article-body figure img { width:100%; max-height:560px; object-fit:cover }`
 * (varian lama: `.article-content figure img{...max-height:480px;object-fit:cover}`).
 * Foto dokumentasi potret 936x1248 jadi dipaksa ke kotak lanskap 752x560 dan
 * terpotong (22 gambar di 10 artikel). Aturan sekarang: gambar isi pakai
 * height:auto + max-width:100% + object-fit:contain. Crop (cover) hanya boleh untuk
 * hero (.article-featured-image / .article-hero) dan kartu/artikel terkait.
 *
 * Yang diperiksa:
 *   1. Aturan CSS (di <style> artikel/*.html, assets/css/*.css, dan string di
 *      scripts/**) yang selektornya menunjuk gambar isi artikel
 *      (.article-body / .article-content / figure ... img) dan memberi
 *      object-fit cover/none/fill atau aspect-ratio tetap.
 *   2. Atribut style inline pada <img> di artikel/*.html dengan object-fit
 *      cover/none/fill, kecuali di dalam <a> (kartu) atau kelas hero/avatar.
 *
 *   node scripts/check-inline-image-crop.js            # semua berkas, exit 1 kalau ada temuan
 *   node scripts/check-inline-image-crop.js a.html ... # hanya berkas tertentu
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SELF = path.resolve(__filename);

// Selektor yang boleh crop: hero dan kartu.
const ALLOWED = /featured|hero|card|related|thumb|avatar|author|logo|team|gallery|\ba\s+img|\ba\s*>\s*img/i;
// Selektor yang menunjuk gambar isi artikel.
const BODY_IMG = /(\.article-(body|content)\b[^{]*\bimg\b|\bfigure\b[^{]*\bimg\b)/i;
const BAD_FIT = /object-fit\s*:\s*(cover|none|fill)\b/i;
const BAD_RATIO = /aspect-ratio\s*:\s*(?!auto)[0-9]/i;

function walk(dir, exts, out) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.name === 'node_modules' || ent.name.startsWith('.')) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, exts, out);
    else if (exts.includes(path.extname(ent.name))) out.push(p);
  }
  return out;
}

function defaultFiles() {
  const files = [];
  walk(path.join(ROOT, 'artikel'), ['.html'], files);
  walk(path.join(ROOT, 'assets', 'css'), ['.css'], files);
  walk(path.join(ROOT, 'scripts'), ['.js', '.mjs', '.cjs', '.py'], files);
  return files.filter((f) => path.resolve(f) !== SELF);
}

function cssFindings(text) {
  const found = [];
  // Linear: cari tiap '{', ambil selektor (maks 300 karakter sebelum '{' sejak '}' terakhir)
  // dan deklarasi sampai '}' berikutnya. Regex ([^{}]+)\{ di berkas besar jadi kuadratik.
  let open = text.indexOf('{');
  while (open !== -1) {
    const close = text.indexOf('}', open + 1);
    if (close === -1) break;
    const nextOpen = text.indexOf('{', open + 1);
    if (nextOpen !== -1 && nextOpen < close) { open = nextOpen; continue; }
    const decl = text.slice(open + 1, close);
    const selStart = Math.max(text.lastIndexOf('}', open - 1) + 1, open - 300);
    const selText = text.slice(selStart, open);
    open = text.indexOf('{', close + 1);
    if (!BAD_FIT.test(decl) && !BAD_RATIO.test(decl)) continue;
    // Ambil hanya bagian selektor setelah pemisah terakhir (baris kode, string, komentar).
    const rawSel = selText.split(/[;\n'"`>]\s*(?=[.#a-z\[])/i).pop();
    for (const sel of rawSel.split(',')) {
      const s = sel.trim();
      if (!BODY_IMG.test(s) || ALLOWED.test(s)) continue;
      found.push(`${s} { ${decl.trim().slice(0, 140)} }`);
    }
  }
  return found;
}

function inlineImgFindings(html) {
  const found = [];
  const re = /<img\b[^>]*\bstyle\s*=\s*"([^"]*)"[^>]*>/gi;
  let m;
  while ((m = re.exec(html))) {
    if (!BAD_FIT.test(m[1])) continue;
    const tag = m[0];
    if (/class\s*=\s*"[^"]*(hero|featured|avatar|author|logo)/i.test(tag)) continue;
    const before = html.slice(0, m.index);
    const lastOpenA = before.lastIndexOf('<a ');
    const lastCloseA = before.lastIndexOf('</a>');
    if (lastOpenA > lastCloseA) continue; // di dalam <a>: kartu, boleh crop
    found.push(tag.slice(0, 160));
  }
  return found;
}

const args = process.argv.slice(2).filter((a) => !a.startsWith('--'));
const files = args.length ? args.map((a) => path.resolve(a)) : defaultFiles();

let failures = 0;
for (const f of files) {
  const text = fs.readFileSync(f, 'utf8');
  // Skrip migrasi yang memuat aturan lama sebagai string pencarian boleh menandai diri.
  if (text.includes('crop-guard: ignore-file')) continue;
  const hits = cssFindings(text);
  if (f.endsWith('.html') && /[\\/]artikel[\\/]/.test(f)) hits.push(...inlineImgFindings(text));
  if (hits.length) {
    failures++;
    console.log(`CROP ${path.relative(ROOT, f)}`);
    for (const h of hits.slice(0, 3)) console.log(`   ${h}`);
  }
}

if (failures) {
  console.log(`\nGagal: ${failures} berkas memotong gambar isi artikel (object-fit cover/none/fill atau aspect-ratio tetap).`);
  console.log('Gambar isi wajib utuh: width:auto; max-width:100%; height:auto; max-height:min(80vh,720px); object-fit:contain.');
  console.log('Crop hanya untuk hero (.article-featured-image) dan kartu. Perbaiki di scripts/lib/article-page.js (EXTRA_CSS).');
  process.exit(1);
}
console.log(`OK: ${files.length} berkas diperiksa, tidak ada gambar isi artikel yang dipotong.`);

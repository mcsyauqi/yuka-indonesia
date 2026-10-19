#!/usr/bin/env node
/*
 * Cycle 80 (2026-10-19): gambar isi artikel tampil utuh, tidak dipotong.
 * Mengganti dua aturan CSS lama (object-fit:cover + max-height tetap) di
 * artikel/*.html dan scripts/lib/article-page.js. Idempoten.
 * Guard: scripts/check-inline-image-crop.js
 * crop-guard: ignore-file (berkas ini memuat aturan lama sebagai string pencarian)
 */
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const REPLACEMENTS = [
  [
    '.article-body figure img { width: 100%; height: auto; display: block; max-height: 560px; object-fit: cover; }',
    '.article-body figure img { width: auto; max-width: 100%; height: auto; display: block; margin: 0 auto; max-height: min(80vh, 720px); object-fit: contain; }',
  ],
  [
    '.article-content figure img{width:100%;max-height:480px;object-fit:cover;border-radius:14px}',
    '.article-content figure img{width:auto;max-width:100%;height:auto;display:block;margin:0 auto;max-height:min(80vh,720px);object-fit:contain;border-radius:14px}',
  ],
];

const files = fs.readdirSync(path.join(ROOT, 'artikel'))
  .filter((f) => f.endsWith('.html'))
  .map((f) => path.join(ROOT, 'artikel', f));
files.push(path.join(ROOT, 'scripts', 'lib', 'article-page.js'));

let changed = 0;
for (const f of files) {
  const before = fs.readFileSync(f, 'utf8');
  let after = before;
  for (const [oldRule, newRule] of REPLACEMENTS) after = after.split(oldRule).join(newRule);
  if (after !== before) { fs.writeFileSync(f, after); changed++; }
}
console.log(`Diubah: ${changed} berkas`);

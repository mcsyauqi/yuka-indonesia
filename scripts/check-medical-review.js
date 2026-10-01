#!/usr/bin/env node
/*
 * Gerbang tinjauan medis untuk artikel kondisi kesehatan dan terapi.
 *
 * Aturan (kartu Trello nKumkHS6, langkah 4): artikel kondisi medis tidak boleh
 * terbit tanpa peninjau. Selama identitas peninjau berkredensial belum
 * diputuskan Syauqi/pengurus (data/medical-reviewer.json _status PENDING_INPUT),
 * gerbang ini berjalan dalam mode TRANSISI: artikel medis wajib punya SALAH SATU
 *   (a) reviewedBy di JSON-LD, atau
 *   (b) pernyataan jujur "Status tinjauan medis" di badan halaman.
 * Artikel medis tanpa keduanya gagal (exit 1). Ini mencegah artikel medis tayang
 * diam-diam tanpa status tinjauan, tanpa mengarang nama peninjau.
 *
 * Begitu registry berstatus READY, mode KETAT berlaku otomatis: artikel medis
 * wajib reviewedBy, pernyataan "belum ditinjau" tidak lagi cukup.
 * Mode ketat bisa dipaksa dengan --strict atau env MEDICAL_REVIEW_STRICT=1.
 *
 *   node scripts/check-medical-review.js                 # semua artikel/*.html
 *   node scripts/check-medical-review.js artikel/x.html  # satu berkas (dipakai workflow)
 *   node scripts/check-medical-review.js --list          # tampilkan semua artikel medis
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'artikel');
const args = process.argv.slice(2);
const listAll = args.includes('--list');
const files = args.filter((a) => !a.startsWith('--'));

let registry = {};
try {
  registry = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'medical-reviewer.json'), 'utf8'));
} catch (_) { /* registry opsional */ }
const registryReady = registry._status === 'READY';
const strict = args.includes('--strict') || process.env.MEDICAL_REVIEW_STRICT === '1' || registryReady;
const registryFiles = new Set(((registry.tinjauan && registry.tinjauan.artikel) || []).map((p) => path.basename(p)));

const lib = require('./lib/medical-review');

function isMedical(file, html) {
  if (registryFiles.has(path.basename(file))) return 'registry';
  return lib.isMedicalArticle(html, path.basename(file, '.html'));
}

const targets = files.length
  ? files.map((f) => path.resolve(ROOT, f))
  : fs.readdirSync(DIR).filter((f) => f.endsWith('.html')).map((f) => path.join(DIR, f));

let medical = 0;
let reviewed = 0;
let disclosed = 0;
const failures = [];

for (const file of targets) {
  const html = fs.readFileSync(file, 'utf8');
  const why = isMedical(file, html);
  if (!why) continue;
  medical++;
  const hasReviewer = /"reviewedBy"\s*:/.test(html);
  const hasDisclosure = /Status tinjauan medis/i.test(html);
  if (hasReviewer) reviewed++;
  else if (hasDisclosure) disclosed++;
  const ok = strict ? hasReviewer : hasReviewer || hasDisclosure;
  const rel = path.relative(ROOT, file).replace(/\\/g, '/');
  if (listAll) console.log(`${ok ? 'OK  ' : 'FAIL'} ${rel} (${why}) reviewedBy=${hasReviewer ? 1 : 0} disclosure=${hasDisclosure ? 1 : 0}`);
  if (!ok) failures.push(rel);
}

console.log(`Mode: ${strict ? 'KETAT (wajib reviewedBy)' : 'TRANSISI (reviewedBy atau pernyataan Status tinjauan medis)'}; registry ${registry._status || 'tidak ada'}`);
console.log(`Artikel medis: ${medical}, reviewedBy: ${reviewed}, hanya pernyataan status: ${disclosed}, gagal: ${failures.length}`);
if (failures.length) {
  console.log('Gagal gerbang tinjauan medis:');
  failures.forEach((f) => console.log('  ' + f));
  console.log(strict
    ? 'Pasang peninjau lewat data/medical-reviewer.json + node scripts/apply-medical-reviewer.mjs.'
    : 'Tambahkan blok "Status tinjauan medis" yang jujur (lihat artikel/autisme-adalah.html) atau reviewedBy dari peninjau nyata. Jangan mengarang nama peninjau.');
  process.exit(1);
}

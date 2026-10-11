#!/usr/bin/env node
/*
 * Tautan silang klaster hiperaktif (kartu Trello 7tkqCw3d, 2026-10-11).
 * Idempoten (penanda <!-- KLASTER_HIPERAKTIF -->). Menambah:
 *   1. kotak "Seri panduan hiperaktif YUKA" sebelum FAQ di 3 artikel klaster lama,
 *   2. kalimat rujukan kontekstual ke artikel turunan baru di seksi yang beririsan,
 *   3. kotak rujukan dari pilar ADHD (fokus diagnosis) ke pilar hiperaktif (fokus perilaku).
 * Teks tanpa em/en dash.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'artikel');
const MARK = '<!-- KLASTER_HIPERAKTIF -->';
const SERIES = [
  ['hiperaktif-adalah', 'Hiperaktif adalah: pengertian, ciri, dan penanganan (panduan utama)'],
  ['hiperaktif-artinya', 'Hiperaktif artinya apa dan tanda awalnya'],
  ['anakku-hiperaktif', 'Anakku hiperaktif: panduan langkah untuk orang tua'],
  ['anak-aktif-atau-hiperaktif', 'Anak aktif atau hiperaktif: cara membedakannya'],
  ['cara-mengatasi-anak-hiperaktif', 'Cara mengatasi anak hiperaktif di rumah dan sekolah'],
];
const box = (self) => `${MARK}<div class="answer-box" style="background:#F8F9FF;border-left:4px solid #2B3A67;padding:1rem 1.25rem;border-radius:0 10px 10px 0;margin:2rem 0;"><strong>Seri panduan hiperaktif YUKA</strong><ul>${SERIES.filter(([s]) => s !== self).map(([s, t]) => `<li><a href="${s}">${t}</a></li>`).join('')}</ul><p style="margin:0.5rem 0 0;">Seri ini membahas <strong>perilaku</strong> hiperaktif sehari-hari. Untuk sisi <strong>diagnosis klinis</strong>, baca <a href="adhd-adalah">ADHD adalah</a> dan <a href="diagnosis-adhd-di-indonesia">alur diagnosis ADHD di Indonesia</a>.</p></div>\n`;
const adhdBox = `${MARK}<div class="answer-box" style="background:#F8F9FF;border-left:4px solid #2B3A67;padding:1rem 1.25rem;border-radius:0 10px 10px 0;margin:2rem 0;"><strong>Mencari panduan perilaku sehari-hari?</strong><p style="margin:0.5rem 0 0;">Artikel ini membahas ADHD sebagai diagnosis klinis. Untuk perilaku hiperaktif di rumah dan sekolah, baca panduan utama <a href="hiperaktif-adalah">hiperaktif adalah</a>, lalu <a href="anak-aktif-atau-hiperaktif">anak aktif atau hiperaktif</a> dan <a href="cara-mengatasi-anak-hiperaktif">cara mengatasi anak hiperaktif di rumah dan sekolah</a>.</p></div>\n`;
const ctx = (html) => `${MARK}<p>${html}</p>\n`;

const plan = {
  'hiperaktif-adalah': [
    ['<h2 id="faq">', box('hiperaktif-adalah'), 'before'],
    ['<h2 id="penanganan">Cara Menangani Anak Hiperaktif di Rumah dan Sekolah</h2>', ctx('Ringkasan di bawah ini dijabarkan lebih rinci, lengkap dengan tabel strategi kelas dan rujukan pedoman, di artikel <a href="cara-mengatasi-anak-hiperaktif">cara mengatasi anak hiperaktif di rumah dan sekolah</a>.'), 'after'],
    ['<h2 id="perbedaan">Perbedaan Hiperaktif dan ADHD</h2>', ctx('Bila Anda masih ragu apakah anak hanya sangat aktif, mulai dari <a href="anak-aktif-atau-hiperaktif">anak aktif atau hiperaktif</a>. Kriteria klinis ADHD dibahas di <a href="adhd-adalah">ADHD adalah</a>.'), 'after'],
  ],
  'hiperaktif-artinya': [
    ['<h2 id="faq">', box('hiperaktif-artinya'), 'before'],
    ['<h2 id="dukungan">Dukungan Praktis di Rumah dan Sekolah</h2>', ctx('Strategi rumah dan sekolah yang lebih lengkap ada di <a href="cara-mengatasi-anak-hiperaktif">cara mengatasi anak hiperaktif di rumah dan sekolah</a>, dan gambaran utuhnya di <a href="hiperaktif-adalah">hiperaktif adalah</a>.'), 'after'],
  ],
  'anakku-hiperaktif': [
    ['<h2 id="faq">', box('anakku-hiperaktif'), 'before'],
    ['<h2 id="normal-atau-tidak">Anak Aktif atau Hiperaktif: Bagaimana Membedakannya?</h2>', ctx('Tabel pembanding lengkap dan cara mencatat perilaku ada di artikel <a href="anak-aktif-atau-hiperaktif">anak aktif atau hiperaktif</a>.'), 'after'],
  ],
  'adhd-adalah': [
    ['<h2 id="faq">', adhdBox, 'before'],
  ],
};

let changed = 0;
for (const [slug, ops] of Object.entries(plan)) {
  const file = path.join(DIR, `${slug}.html`);
  let html = fs.readFileSync(file, 'utf8');
  if (html.includes(MARK)) { console.log(`lewati (sudah ada): ${slug}`); continue; }
  for (const [anchor, ins, where] of ops) {
    const i = html.indexOf(anchor);
    if (i < 0) throw new Error(`${slug}: anchor tidak ditemukan: ${anchor}`);
    if (html.indexOf(anchor, i + 1) >= 0) throw new Error(`${slug}: anchor ganda: ${anchor}`);
    html = where === 'before' ? html.slice(0, i) + ins + html.slice(i) : html.slice(0, i + anchor.length) + '\n' + ins + html.slice(i + anchor.length);
  }
  if (/[—–]/.test(ops.map((o) => o[1]).join(''))) throw new Error('em/en dash');
  fs.writeFileSync(file, html);
  changed++;
  console.log(`diubah: ${slug} (${ops.length} sisipan)`);
}
console.log(`selesai, ${changed} berkas diubah`);

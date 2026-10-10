#!/usr/bin/env node
/*
 * Alarm antrean kosong (low-water) untuk publish-schedule.json.
 *
 * Kenapa ada: 2026-10-10 YUKA tidak menerbitkan artikel apa pun. Run "Publish Scheduled
 * Articles" tetap HIJAU karena workflow hanya mencetak "No articles scheduled" lalu exit 0,
 * padahal publish-schedule.json sudah kosong ([]) sejak auto-publish 2026-10-09. Tidak ada
 * yang tahu sampai audit harian menemukan hari kosong (cycle #76).
 *
 * Skrip ini gagal (exit 1) kalau dalam N hari ke depan (default 3, mulai besok menurut
 * WIB) ada tanggal tanpa artikel terjadwal, atau artikel terjadwal yang berkasnya tidak ada.
 * Dipasang sebagai step TERAKHIR di publish-scheduled.yml, jadi publish hari itu tetap
 * jalan, tapi run berubah MERAH dan GitHub mengirim email kegagalan. Itu alarmnya.
 *
 *   node scripts/check-schedule-gaps.js              # 3 hari
 *   node scripts/check-schedule-gaps.js --window 7   # 7 hari
 *   node scripts/check-schedule-gaps.js --quality    # ikut jalankan gate mutu untuk antrean di jendela
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const wi = args.indexOf('--window');
const WINDOW = wi > -1 ? parseInt(args[wi + 1], 10) : 3;
const QUALITY = args.includes('--quality');

const schedule = JSON.parse(fs.readFileSync(path.join(ROOT, 'publish-schedule.json'), 'utf8'));
// Tanggal hari ini menurut WIB (UTC+7), sama dengan tanggal di publish-schedule.json.
const wibDay = (offsetDays) => new Date(Date.now() + 7 * 3600e3 + offsetDays * 864e5).toISOString().slice(0, 10);

const problems = [];
const inWindow = [];
// Default mulai BESOK: step ini jalan sesudah publish, dan publish sudah membuang entri
// hari ini dari publish-schedule.json. --from-today untuk cek manual sebelum publish.
const START = args.includes('--from-today') ? 0 : 1;
for (let i = START; i < START + WINDOW; i++) {
  const d = wibDay(i);
  const entries = schedule.filter((a) => a.date === d);
  if (!entries.length) problems.push(`${d}: tidak ada artikel terjadwal`);
  for (const a of entries) {
    if (!fs.existsSync(path.join(ROOT, a.file))) problems.push(`${d}: berkas ${a.file} (${a.slug}) tidak ada`);
    else inWindow.push(a.file);
  }
}

if (QUALITY && inWindow.length) {
  try {
    execFileSync(process.execPath, [path.join(ROOT, 'scripts/check-article-quality.js'), ...inWindow], { cwd: ROOT, stdio: 'inherit' });
  } catch {
    problems.push('gate mutu antrean gagal (lihat keluaran check-article-quality di atas)');
  }
}

const last = schedule.map((a) => a.date).sort().pop() || '(kosong)';
if (problems.length) {
  console.error(`ANTREAN YUKA BERMASALAH (${WINDOW} hari ke depan, antrean terakhir ${last}):`);
  for (const p of problems) console.error('  - ' + p);
  console.error('Isi publish-schedule.json dengan artikel baru yang lolos gate (2000 kata, 4 gambar, 7 FAQ, 1 tabel).');
  process.exit(1);
}
console.log(`OK: ${WINDOW} hari ke depan terisi (${inWindow.length} artikel). Antrean sampai ${last}.`);

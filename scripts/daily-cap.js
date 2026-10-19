#!/usr/bin/env node
// Batas keras Syauqi 2026-10-19: maksimal 3 artikel per tanggal terbit (datePublished, WIB).
// Hari normal = 1; 2-3 hanya untuk menambal hari kosong. Berlaku untuk SEMUA jalur:
// publish-schedule.json (publish-scheduled.yml), artikel yang di-commit langsung (agen/MinTiv),
// dan pemindahan dari publish-schedule-backlog.json.
//
//   node scripts/daily-cap.js check [--today YYYY-MM-DD] [--add YYYY-MM-DD ...]
//       exit 1 kalau ada tanggal >= hari ini dengan > 3 artikel (file artikel/ + antrean).
//       --add mensimulasikan artikel tambahan (dry-run, tidak menulis apa pun).
//   node scripts/daily-cap.js next-free [--today YYYY-MM-DD]
//       tanggal kosong berikutnya (mulai besok), pakai sebelum mengantrekan artikel baru.
//   node scripts/daily-cap.js defer [--today YYYY-MM-DD] [--dry-run]
//       dipanggil publish-scheduled.yml SEBELUM publish: entri jatuh tempo (date <= hari ini)
//       yang membuat tanggalnya > 3 dipindah ke tanggal kosong berikutnya, berikut
//       datePublished/dateModified di file artikelnya. Artikel yang sudah tayang tidak disentuh.
'use strict';
const fs = require('fs');
const path = require('path');

const CAP = 3;
const ROOT = path.resolve(__dirname, '..');
const SCHEDULE = path.join(ROOT, 'publish-schedule.json');
const ART = path.join(ROOT, 'artikel');

const args = process.argv.slice(2);
const mode = args[0] || 'check';
const flag = (n) => { const i = args.indexOf(n); return i > -1 ? args[i + 1] : null; };
const today = flag('--today') || new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 10);
const addDays = (d, n) => new Date(Date.parse(d + 'T00:00:00Z') + n * 864e5).toISOString().slice(0, 10);
const DATE_PUB = /"datePublished"\s*:\s*"(\d{4}-\d{2}-\d{2})/;

function load() {
  const schedule = fs.existsSync(SCHEDULE) ? JSON.parse(fs.readFileSync(SCHEDULE, 'utf8')) : [];
  const queued = new Set(schedule.map((a) => path.normalize(a.file)));
  const live = {}; // datePublished -> jumlah file artikel yang TIDAK sedang antre
  for (const f of fs.readdirSync(ART)) {
    if (!f.endsWith('.html')) continue;
    const rel = path.normalize(path.join('artikel', f));
    if (queued.has(rel)) continue;
    const m = fs.readFileSync(path.join(ART, f), 'utf8').match(DATE_PUB);
    if (m) live[m[1]] = (live[m[1]] || 0) + 1;
  }
  return { schedule, live };
}

function totals(schedule, live) {
  const per = { ...live };
  for (const a of schedule) per[a.date] = (per[a.date] || 0) + 1;
  return per;
}

function nextEmpty(per, from) {
  let d = addDays(from, 1);
  while (per[d]) d = addDays(d, 1);
  return d;
}

const { schedule, live } = load();

if (mode === 'next-free') {
  console.log(nextEmpty(totals(schedule, live), today));
  process.exit(0);
}

if (mode === 'defer') {
  const dry = args.includes('--dry-run');
  const per = totals(schedule, live);
  const used = {}; // tanggal -> slot yang sudah diambil entri jatuh tempo
  const moved = [];
  for (const a of schedule) {
    if (a.date > today) continue;
    const room = CAP - (live[a.date] || 0) - (used[a.date] || 0);
    if (room > 0) { used[a.date] = (used[a.date] || 0) + 1; continue; }
    const to = nextEmpty(per, today);
    per[to] = (per[to] || 0) + 1;
    per[a.date] -= 1;
    moved.push({ slug: a.slug, from: a.date, to });
    if (!dry) {
      const file = path.join(ROOT, a.file);
      if (fs.existsSync(file)) {
        const html = fs.readFileSync(file, 'utf8');
        const re = new RegExp(`((?:"datePublished"|"dateModified")\\s*:\\s*")${a.date}|(article:(?:published|modified)_time"\\s+content=")${a.date}`, 'g');
        fs.writeFileSync(file, html.replace(re, (m0, p1, p2) => (p1 || p2) + to));
      }
    }
    a.date = to;
  }
  if (!dry && moved.length) fs.writeFileSync(SCHEDULE, JSON.stringify(schedule, null, 2) + '\n');
  for (const m of moved) console.log(`DEFERRED ${m.slug}: ${m.from} -> ${m.to} (batas ${CAP}/hari)`);
  console.log(`[daily-cap] defer: ${moved.length} entri dipindah${dry ? ' (dry-run, tidak ditulis)' : ''}.`);
  process.exit(0);
}

// check
const per = totals(schedule, live);
args.forEach((a, i) => { if (a === '--add') per[args[i + 1]] = (per[args[i + 1]] || 0) + 1; });
const over = Object.entries(per).filter(([d, n]) => d >= today && n > CAP).sort();
for (const [d, n] of over) console.log(`::error::${d}: ${n} artikel (tayang + antrean), melebihi batas ${CAP}/hari`);
if (over.length) {
  console.log(`[daily-cap] GAGAL: ${over.length} tanggal > ${CAP}. Tanggal kosong berikutnya: ${nextEmpty(per, today)}`);
  process.exit(1);
}
const future = Object.entries(per).filter(([d]) => d >= today);
console.log(`[daily-cap] LOLOS: ${future.length} tanggal dari ${today}, maksimal ${Math.max(0, ...future.map(([, n]) => n))}/hari.`);

// Memulihkan 4 artikel motorik kasar ke isi unik versi 2454b4d (sebelum commit d508f9b
// yang menimpanya dengan templat 96-97% identik), lalu menambahkan tabel milestone
// motorik kasar bersumber CDC (2026) dan WHO Motor Development Study (2006).
// Kartu Trello PaAYbrU3, 2026-09-24. Jalankan: node scripts/restore-motorik-kasar-2026-09-24.js
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const REV = '2454b4d';
const cdc = (p) => `https://www.cdc.gov/act-early/milestones/${p}.html`;
const L = (p, t) => `<a href="${cdc(p)}" target="_blank" rel="noopener">${t}</a>`;
const WHO_PDF = 'https://cdn.who.int/media/docs/default-source/child-growth/child-growth-standards/indicators/motor-development-milestones/mm_windows_graph.pdf';
const WHO_PAGE = 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones';
const CDC_NOTE = `<p class="source-note" style="font-size:.9rem;color:var(--gray-600)">Sumber: <a href="https://www.cdc.gov/act-early/milestones/index.html" target="_blank" rel="noopener">CDC, Learn the Signs. Act Early.: Milestones (2026)</a>, halaman per usia bagian Movement/Physical Development, diakses 24 September 2026. Daftar CDC berisi kemampuan yang dilakukan sebagian besar anak pada usia tersebut, jadi tabel ini untuk pengamatan, bukan diagnosis.</p>`;

// [usia link, kemampuan motorik kasar CDC]
const GROSS = [
  ['2-months', '2 bulan', 'Mengangkat kepala saat tengkurap'],
  ['4-months', '4 bulan', 'Menahan kepala tetap tegak saat digendong, bertumpu pada siku atau lengan bawah saat tengkurap'],
  ['6-months', '6 bulan', 'Berguling dari tengkurap ke telentang, bertumpu pada lengan lurus saat tengkurap, bertumpu pada tangan saat duduk'],
  ['9-months', '9 bulan', 'Duduk sendiri dari posisi berbaring, duduk tanpa ditopang'],
  ['1-year', '1 tahun', 'Menarik badan untuk berdiri, berjalan sambil berpegangan pada perabot'],
  ['15-months', '15 bulan', 'Melangkah beberapa langkah sendiri'],
  ['18-months', '18 bulan', 'Berjalan tanpa berpegangan, naik dan turun dari sofa atau kursi tanpa bantuan'],
  ['2-years', '2 tahun', 'Menendang bola, berlari, berjalan menaiki beberapa anak tangga dengan atau tanpa bantuan'],
  ['30-months', '30 bulan', 'Melompat dengan kedua kaki terangkat dari lantai'],
  ['4-years', '4 tahun', 'Menangkap bola besar hampir setiap kali'],
  ['5-years', '5 tahun', 'Melompat dengan satu kaki'],
];
const FINE = {
  '2-months': 'Membuka genggaman sebentar', '4-months': 'Memegang mainan yang diletakkan di tangannya', '6-months': 'Tidak ada butir tangan baru di daftar CDC usia ini',
  '9-months': 'Memindahkan benda dari satu tangan ke tangan lain', '1-year': 'Menjimpit benda kecil dengan ibu jari dan telunjuk', '15-months': 'Makan sendiri dengan jari',
  '18-months': 'Mencoret-coret, mencoba memakai sendok', '2-years': 'Makan dengan sendok', '30-months': 'Memutar tutup botol ulir, membalik halaman satu per satu',
  '4-years': 'Memegang krayon dengan jari dan ibu jari, membuka sebagian kancing', '5-years': 'Mengancingkan sebagian kancing',
};

function table(head, rows) {
  return `<div style="overflow-x:auto"><table>\n<thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead>\n<tbody>\n${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('\n')}\n</tbody></table></div>`;
}

const PLANS = {
  'motorik-kasar-adalah': {
    before: '<h2 id="perbedaan"',
    extra: { k: 'Stimulasi sederhana', v: {
      '2-months': 'Waktu tengkurap singkat saat bayi terjaga dan diawasi', '4-months': 'Letakkan mainan di depan bayi saat tengkurap', '6-months': 'Beri ruang lantai yang aman untuk berguling',
      '9-months': 'Duduk di lantai dikelilingi bantal, mainan sedikit di luar jangkauan', '1-year': 'Susun perabot kokoh agar anak bisa merambat', '15-months': 'Mainan dorong yang stabil',
      '18-months': 'Naik turun bantal besar atau undakan rendah', '2-years': 'Tendang bola plastik, kejar-kejaran di halaman', '30-months': 'Lompat ke lingkaran kapur di lantai',
      '4-years': 'Lempar tangkap bola besar dari jarak dekat', '5-years': 'Engklek sederhana' } },
    intro: `<h3 id="tabel-milestone">Tabel Milestone Motorik Kasar Bersumber</h3>\n<p>Rincian di atas adalah gambaran umum. Untuk patokan yang dapat dirujuk, tabel berikut memuat butir motorik kasar dari daftar milestone CDC, beserta stimulasi sederhana yang bisa dilakukan di rumah.</p>`,
    outro: `<p>WHO Motor Development Study juga memetakan rentang usia normal untuk enam kemampuan motorik kasar. Dalam grafiknya, duduk tanpa ditopang dicapai dalam rentang sekitar 4 sampai 9 bulan, sedangkan berjalan sendiri dalam rentang sekitar 8 sampai 18 bulan. Rentang yang lebar ini menunjukkan betapa beragamnya waktu yang normal bagi tiap anak (<a href="${WHO_PDF}" target="_blank" rel="noopener">WHO Multicentre Growth Reference Study Group, Acta Paediatrica 2006</a>; <a href="${WHO_PAGE}" target="_blank" rel="noopener">halaman WHO Motor development milestones</a>).</p>`,
  },
  'contoh-motorik-kasar': {
    before: '<h2 id="abk"',
    extra: { k: 'Contoh aktivitas harian yang memakai kemampuan ini', v: {
      '2-months': 'Tengkurap di dada orang tua sambil menatap wajahnya', '4-months': 'Bertumpu siku di atas matras saat melihat buku kain', '6-months': 'Berguling untuk meraih mainan',
      '9-months': 'Duduk sendiri saat bermain di lantai', '1-year': 'Merambat di pinggir sofa menuju orang tua', '15-months': 'Berjalan beberapa langkah menjemput bola',
      '18-months': 'Naik ke kursi rendah untuk duduk bersama keluarga', '2-years': 'Berlari di halaman, menendang bola plastik', '30-months': 'Melompat dari garis ke garis di lantai',
      '4-years': 'Menangkap bola pantai yang dilempar pelan', '5-years': 'Bermain engklek bersama teman' } },
    intro: `<h2 id="tabel-milestone">Tabel Ringkas: Milestone Motorik Kasar dan Contohnya</h2>\n<p>Contoh-contoh di atas dapat dicocokkan dengan patokan berikut. Kolom kedua berasal dari daftar milestone CDC, kolom ketiga menunjukkan bentuknya dalam kegiatan sehari-hari.</p>`,
    outro: '',
  },
  'perbedaan-motorik-kasar-dan-halus': {
    before: '<h2 id="mengapa-penting"',
    extra: null,
    intro: `<h3 id="tabel-milestone">Milestone Motorik Kasar dan Halus Berdampingan</h3>\n<p>Tabel berikut menaruh butir motorik kasar dan motorik halus dari daftar milestone CDC berdampingan per usia, sehingga orang tua bisa melihat bahwa kedua jalur berkembang bersamaan dengan fokus yang berbeda.</p>`,
    outro: '',
  },
  'permainan-motorik-kasar': {
    before: '<h2 id="rumah"',
    extra: { k: 'Permainan yang sejalan', v: {
      '2-months': 'Tengkurap sambil melihat mainan berwarna kontras', '4-months': 'Cilukba saat bayi bertumpu siku', '6-months': 'Mengejar bola berbunyi dengan berguling',
      '9-months': 'Menggelindingkan bola sambil duduk berhadapan', '1-year': 'Merambat menuju mainan di ujung sofa', '15-months': 'Mendorong kotak kardus berisi mainan',
      '18-months': 'Jalur rintangan bantal', '2-years': 'Tendang bola ke "gawang" kardus', '30-months': 'Lompat katak di atas garis selotip',
      '4-years': 'Lempar tangkap bola pantai', '5-years': 'Engklek' } },
    intro: `<h3 id="tabel-milestone">Tabel Milestone dan Permainan yang Sejalan</h3>\n<p>Agar permainan pas dengan kesiapan anak, cocokkan dengan butir motorik kasar dari daftar milestone CDC berikut.</p>`,
    outro: '',
  },
};

// Gambar kelas memasak di motorik-kasar-adalah dilepas: tidak menggambarkan gerak motorik kasar,
// dan cpao-004 kini menjadi hero permainan-motorik-halus.
const DROP_FIG = /<figure[^>]*>\s*<img src="\.\.\/Dokumentasi\/cpao-anak-(anak-belajar-memasak-outdoor-037|anak-kelas-memasak-outdoor-004)\.webp"[\s\S]*?<\/figure>\s*/g;

for (const [slug, plan] of Object.entries(PLANS)) {
  let html = execSync(`git show ${REV}:artikel/${slug}.html`, { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 24 });
  if (slug === 'motorik-kasar-adalah') html = html.replace(DROP_FIG, '');
  let rows;
  if (plan.extra) {
    rows = GROSS.map(([p, u, g]) => [L(p, u), g, plan.extra.v[p]]);
  } else {
    rows = GROSS.map(([p, u, g]) => [L(p, u), g, FINE[p]]);
  }
  const head = plan.extra ? ['Usia', 'Motorik kasar (CDC)', plan.extra.k] : ['Usia', 'Motorik kasar (CDC)', 'Motorik halus (CDC)'];
  const block = `${plan.intro}\n${table(head, rows)}\n${CDC_NOTE}\n${plan.outro}\n\n            `;
  const at = html.indexOf(plan.before);
  if (at < 0) throw new Error(`${slug}: anchor ${plan.before} not found`);
  html = html.slice(0, at) + block + html.slice(at);
  html = html.replace(/"dateModified":"[^"]*"/, '"dateModified":"2026-09-24T12:00:00+07:00"');
  html = ensureArticleShell(html);
  const miss = missingShellParts(html);
  if (miss.length) throw new Error(`${slug}: ${miss.join(', ')}`);
  if (/—/.test(html.replace(/<[^>]+>/g, ''))) throw new Error(`${slug}: em dash`);
  fs.writeFileSync(path.join(ROOT, 'artikel', slug + '.html'), html);
  console.log('restored', slug, html.length);
}

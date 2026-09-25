#!/usr/bin/env node
'use strict';
// Kartu qnuMy8UV: item "perbedaan ADHD dan hiperaktif biasa" tidak dibuat halaman baru
// karena /artikel/hiperaktif-artinya sudah memegang intent itu (cek kanibal 2026-09-25).
// Skrip ini memperkuat halaman lama: judul memuat ADHD, H2 memakai bentuk query,
// tambahan paragraf bersumber, dan tautan ke klaster ADHD. Sekali jalan.
const fs = require('fs');
const P = require('path').join(__dirname, '..', 'artikel', 'hiperaktif-artinya.html');
let h = fs.readFileSync(P, 'utf8');
if (h.includes('data-adhd-cluster="2026-09-25"')) { console.log('sudah diterapkan'); process.exit(0); }
const rep = (from, to, count = 1) => {
  const n = h.split(from).length - 1;
  if (n !== count) throw new Error(`expected ${count} of: ${from.slice(0, 80)} got ${n}`);
  h = h.split(from).join(to);
};
const OLD_T = 'Hiperaktif Artinya Apa? Panduan Aman untuk Orang Tua';
const NEW_T = 'Hiperaktif Artinya Apa? Bedanya dengan ADHD pada Anak';
rep(`<title>${OLD_T} | YUKA</title>`, `<title>${NEW_T} | YUKA</title>`);
rep(`<meta property="og:title" content="${OLD_T}">`, `<meta property="og:title" content="${NEW_T}">`);
rep(`<meta name="twitter:title" content="${OLD_T}">`, `<meta name="twitter:title" content="${NEW_T}">`);
rep(`"headline":"${OLD_T}"`, `"headline":"${NEW_T}"`);
rep(`max-width: 800px;">${OLD_T}</h1>`, `max-width: 800px;">${NEW_T}</h1>`);
rep('"dateModified":"2026-08-12T20:30:00+07:00"', '"dateModified":"2026-09-25T16:00:00+07:00"');
rep('<li><a href="#beda">Aktif, Hiperaktif, dan ADHD: Apa Bedanya?</a></li>', '<li><a href="#beda">Apa Perbedaan ADHD dan Hiperaktif Biasa?</a></li>');
rep('<h2 id="beda">Aktif, Hiperaktif, dan ADHD: Apa Bedanya?</h2>', '<h2 id="beda">Apa Perbedaan ADHD dan Hiperaktif Biasa?</h2>');

const ADD = `
            <div data-adhd-cluster="2026-09-25">
            <p>Beberapa rujukan resmi membantu memperjelas batasnya. <a href="https://www.cdc.gov/adhd/signs-symptoms/index.html" target="_blank" rel="noopener">CDC</a> menyebut wajar bila anak sesekali sulit fokus dan berperilaku, tetapi anak dengan ADHD tidak sekadar tumbuh keluar dari perilaku itu: gejalanya berlanjut, bisa berat, dan menimbulkan kesulitan di sekolah, di rumah, atau dengan teman. Lampiran <a href="https://peraturan.bpk.go.id/Details/154776/permenkes-no-66-tahun-2014" target="_blank" rel="noopener">Permenkes 66/2014</a> memakai ukuran yang sama: gejala GPPH menetap paling sedikit enam bulan, tampak di dua situasi atau lebih, dan tidak sesuai dengan tingkat perkembangan anak. <a href="https://www.nhs.uk/conditions/adhd-children-teenagers/" target="_blank" rel="noopener">NHS</a> juga mengingatkan bahwa banyak anak di bawah 5 tahun memang mudah teralihkan, impulsif, dan berenergi tinggi tanpa ADHD.</p>
            <p>Sebaliknya, anak ADHD tidak selalu hiperaktif. Salah satu tipe ADHD dominan kurang perhatian, dan menurut <a href="https://www.healthychildren.org/English/health-issues/conditions/adhd/Pages/Understanding-ADHD.aspx" target="_blank" rel="noopener">American Academy of Pediatrics</a> anak dengan tipe ini tidak terlalu aktif sehingga gejalanya sering tidak disadari. Kenali polanya di <a href="ciri-adhd-tipe-inattentive-pada-anak">ciri ADHD tipe inattentive pada anak</a>.</p>
            <div class="info-box"><p><strong>Seri panduan ADHD YUKA:</strong> <a href="adhd-adalah">ADHD adalah</a>, <a href="adhd-singkatan-dari-apa">ADHD singkatan dari apa</a>, <a href="ciri-ciri-anak-adhd-berdasarkan-usia">ciri-ciri anak ADHD berdasarkan usia</a>, <a href="penyebab-adhd-pada-anak">penyebab ADHD pada anak</a>, <a href="diagnosis-adhd-di-indonesia">diagnosis ADHD di Indonesia</a>, dan <a href="terapi-adhd-pada-anak">terapi ADHD pada anak</a>.</p></div>
            </div>
`;
// Sisipkan tepat sebelum H2 berikutnya setelah #beda (Empat Hal yang Perlu Diamati).
const idx = h.search(/<h2 id="pola"/);
if (idx < 0) throw new Error('anchor #pola tidak ditemukan');
h = h.slice(0, idx) + ADD + '\n' + h.slice(idx);
if (h.includes('\u2014')) throw new Error('em dash');
fs.writeFileSync(P, h, 'utf8');
console.log('ok', h.length);

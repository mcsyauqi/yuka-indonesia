#!/usr/bin/env node
'use strict';
// Kartu qnuMy8UV: jadikan /artikel/adhd-adalah pilar yang menautkan artikel turunan
// dengan <a href> asli di HTML awal (bukan dimuat JS). Sekali jalan, idempoten.
const fs = require('fs');
const P = require('path').join(__dirname, '..', 'artikel', 'adhd-adalah.html');
let h = fs.readFileSync(P, 'utf8');
if (h.includes('data-adhd-hub="2026-09-25"')) { console.log('sudah diterapkan'); process.exit(0); }
const box = (href, text) => `\n            <p class="baca-turunan" style="background:#F1F5FF;border-left:4px solid #2B3A67;padding:0.9rem 1.2rem;border-radius:0 10px 10px 0;"><strong>Baca selengkapnya:</strong> <a href="${href}">${text}</a></p>\n`;
const before = (anchorRe, html) => {
  const i = h.search(anchorRe);
  if (i < 0) throw new Error('anchor tidak ditemukan: ' + anchorRe);
  h = h.slice(0, i) + html + '\n            ' + h.slice(i);
};
const HUB = `
            <div data-adhd-hub="2026-09-25" class="related-cluster" style="background:#fff8e6;border:1px solid #f6d88b;border-radius:12px;padding:18px 20px;margin:26px 0;">
                <p style="margin:0 0 8px;font-weight:700;color:#8a5b00;">Seri panduan ADHD YUKA: pilih topik yang Anda butuhkan</p>
                <ul style="margin:0;padding-left:20px;line-height:1.8;">
                    <li><a href="adhd-singkatan-dari-apa">ADHD singkatan dari apa? Arti, kepanjangan, dan istilah GPPH</a></li>
                    <li><a href="ciri-ciri-anak-adhd-berdasarkan-usia">Ciri-ciri anak ADHD berdasarkan usia, dari balita sampai remaja</a></li>
                    <li><a href="penyebab-adhd-pada-anak">Penyebab ADHD pada anak: genetik, otak, dan faktor risiko</a></li>
                    <li><a href="diagnosis-adhd-di-indonesia">Diagnosis ADHD di Indonesia: alur dan siapa yang memeriksa</a></li>
                    <li><a href="terapi-adhd-pada-anak">Terapi dan penanganan ADHD pada anak sesuai usia</a></li>
                    <li><a href="hiperaktif-artinya">Hiperaktif artinya apa? Perbedaan ADHD dan hiperaktif biasa</a></li>
                </ul>
            </div>
`;
before(/<h2 id="pengertian"/, HUB);
before(/<h2 id="gejala"/, box('adhd-singkatan-dari-apa', 'ADHD singkatan dari apa? Arti, kepanjangan, beda ADD dan ADHD, serta istilah GPPH')); 
before(/<h2 id="penyebab"/, box('ciri-ciri-anak-adhd-berdasarkan-usia', 'ciri-ciri anak ADHD berdasarkan usia, lengkap dengan kapan perlu diperiksa'));
before(/<h2 id="diagnosis"/, box('penyebab-adhd-pada-anak', 'penyebab ADHD pada anak: apa kata penelitian genetik dan faktor risiko yang terbukti'));
before(/<h2 id="penanganan"/, box('diagnosis-adhd-di-indonesia', 'diagnosis ADHD di Indonesia: skrining GPPH di puskesmas sampai pemeriksaan spesialis'));
before(/<h2 id="perbedaan"/, box('terapi-adhd-pada-anak', 'terapi dan penanganan ADHD pada anak sesuai usia menurut pedoman resmi'));
before(/<h2 id="pengalaman"/, box('hiperaktif-artinya', 'hiperaktif artinya apa, dan apa perbedaan ADHD dengan hiperaktif biasa'));
const m = h.match(/"dateModified":"[^"]*"/g) || [];
h = h.replace(/"dateModified":"[^"]*"/g, '"dateModified":"2026-09-25T16:00:00+07:00"');
if (h.includes('\u2014')) console.warn('peringatan: halaman pilar sudah memuat em dash sebelumnya');
fs.writeFileSync(P, h, 'utf8');
console.log('ok, dateModified diganti', m.length, 'kali');

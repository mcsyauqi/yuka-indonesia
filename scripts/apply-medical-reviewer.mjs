#!/usr/bin/env node
/**
 * apply-medical-reviewer.mjs
 *
 * Memasang peninjau medis berkredensial ke tiga artikel kondisi kesehatan YUKA
 * (down-syndrome-adalah, autisme-adalah, adhd-adalah) dalam satu perintah.
 *
 * Yang dilakukan skrip ini:
 *   1. Membaca data/medical-reviewer.json dan MENOLAK jalan kalau masih kosong.
 *   2. Mengganti blok "Status tinjauan medis" di badan ketiga artikel dengan
 *      nama, gelar, jabatan, nomor STR/SIP (kalau diisi), dan tanggal tinjauan.
 *   3. Menambahkan properti reviewedBy (Person) dan lastReviewed ke node
 *      MedicalWebPage di JSON-LD ketiga artikel.
 *   4. Membuat halaman profil peninjau di profil/<slug>.html.
 *   5. Bump dateModified di node Article dan MedicalWebPage.
 *   6. Regenerasi sitemap lewat scripts/regen-sitemaps.js.
 *
 * Pakai: node scripts/apply-medical-reviewer.mjs [--dry-run]
 *
 * ATURAN KERAS: skrip ini tidak pernah mengarang identitas. Semua nilai berasal
 * dari data/medical-reviewer.json yang diisi manusia yang berwenang.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const CONFIG = path.join(ROOT, 'data', 'medical-reviewer.json');
const DRY = process.argv.includes('--dry-run');
const BASE = 'https://www.yukaindonesia.com';

const START = '<!-- MEDICAL_REVIEW_STATUS:START -->';
const END = '<!-- MEDICAL_REVIEW_STATUS:END -->';

function die(msg) {
  console.error('\nGAGAL: ' + msg + '\n');
  process.exit(1);
}

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function slugify(s) {
  return String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

// ---------------------------------------------------------------- 1. validasi
if (!fs.existsSync(CONFIG)) die('data/medical-reviewer.json tidak ada.');
const cfg = JSON.parse(fs.readFileSync(CONFIG, 'utf8'));
const r = cfg.reviewer || {};
const t = cfg.tinjauan || {};

const wajib = [
  ['reviewer.nama', r.nama],
  ['reviewer.gelar', r.gelar],
  ['reviewer.jobTitle', r.jobTitle],
  ['tinjauan.tanggal', t.tanggal],
];
const kosong = wajib.filter(([, v]) => !v || !String(v).trim()).map(([k]) => k);

if (cfg._status === 'PENDING_INPUT' || kosong.length) {
  console.error('\n=============================================================');
  console.error(' BELUM BISA DIJALANKAN: identitas peninjau medis belum diisi.');
  console.error('=============================================================');
  if (kosong.length) console.error(' Field yang masih kosong: ' + kosong.join(', '));
  console.error('\n Isi dulu data/medical-reviewer.json, lalu set "_status" jadi "READY".');
  console.error(' Pertanyaan yang perlu dijawab pemilik:');
  (cfg._pertanyaan_untuk_owner || []).forEach((q, i) => console.error('   ' + (i + 1) + '. ' + q));
  console.error('\n JANGAN mengisi dengan nama karangan. Ini artikel YMYL kesehatan.\n');
  process.exit(2);
}

const slug = r.slugProfil && r.slugProfil.trim() ? r.slugProfil.trim() : slugify(r.nama);
const profilUrl = r.url && r.url.trim() ? r.url.trim() : BASE + '/profil/' + slug;
const namaLengkap = r.gelar ? r.nama + ', ' + r.gelar : r.nama;
const now = new Date();
const stamp = now.toISOString().slice(0, 19).replace('T', 'T') + '+07:00';
const dateModified = now.toISOString().slice(0, 10) + 'T' + String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':00+07:00';

// ------------------------------------------------- 2. blok badan halaman baru
const kredensial = [];
if (r.institusi && r.institusi.trim()) kredensial.push(esc(r.institusi.trim()));
if (r.nomorSTR && r.nomorSTR.trim()) kredensial.push('STR ' + esc(r.nomorSTR.trim()));
if (r.nomorSIP && r.nomorSIP.trim()) kredensial.push('SIP ' + esc(r.nomorSIP.trim()));
const kredensialTxt = kredensial.length ? ' (' + kredensial.join(', ') + ')' : '';
const koreksiTxt = t.catatanKoreksi && t.catatanKoreksi.trim()
  ? ' Catatan koreksi dari tinjauan: ' + esc(t.catatanKoreksi.trim())
  : '';

const liBaru = START + '\n            <li><strong>Status tinjauan medis:</strong> isi artikel ini telah ditinjau oleh '
  + '<a href="/profil/' + esc(slug) + '"><strong>' + esc(namaLengkap) + '</strong></a>, '
  + esc(r.jobTitle) + kredensialTxt + ', pada <strong>' + esc(t.tanggal) + '</strong>.' + koreksiTxt
  + ' Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. '
  + 'Untuk keputusan diagnosis atau pengobatan, tetap rujuk pada dokter yang menangani anak Anda.</li>\n          ' + END;

// ------------------------------------------------------- 3. node reviewedBy
const personNode = {
  '@type': 'Person',
  '@id': profilUrl + '#person',
  name: namaLengkap,
  url: profilUrl,
  jobTitle: r.jobTitle,
};
if (r.institusi && r.institusi.trim()) {
  personNode.worksFor = { '@type': 'Organization', name: r.institusi.trim() };
}
if (r.fotoWebp && r.fotoWebp.trim()) personNode.image = BASE + r.fotoWebp.trim();

// ---------------------------------------------------------- 4. proses artikel
const files = t.artikel && t.artikel.length ? t.artikel : [
  'artikel/down-syndrome-adalah.html',
  'artikel/autisme-adalah.html',
  'artikel/adhd-adalah.html',
];

let changed = 0;
for (const rel of files) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) die('file tidak ada: ' + rel);
  let html = fs.readFileSync(abs, 'utf8');
  const before = html;

  // 4a. ganti blok status tinjauan di badan halaman
  const blokRe = new RegExp(START.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&') + '[\\s\\S]*?' + END.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&'));
  if (!blokRe.test(html)) die('penanda MEDICAL_REVIEW_STATUS tidak ditemukan di ' + rel);
  html = html.replace(blokRe, liBaru);

  // 4b. tambahkan reviewedBy + lastReviewed ke node MedicalWebPage
  const ldRe = /<script type="application\/ld\+json">(\{[\s\S]*?\})<\/script>/g;
  html = html.replace(ldRe, (m, json) => {
    let obj;
    try { obj = JSON.parse(json); } catch { return m; }
    if (obj['@type'] === 'MedicalWebPage') {
      obj.reviewedBy = personNode;
      obj.lastReviewed = t.tanggalISO && t.tanggalISO.trim() ? t.tanggalISO.trim() : undefined;
      if (!obj.lastReviewed) delete obj.lastReviewed;
      obj.dateModified = dateModified;
      return '<script type="application/ld+json">' + JSON.stringify(obj) + '</script>';
    }
    if (obj['@type'] === 'Article') {
      obj.reviewedBy = personNode;
      obj.dateModified = dateModified;
      return '<script type="application/ld+json">' + JSON.stringify(obj) + '</script>';
    }
    return m;
  });

  if (html !== before) {
    changed++;
    if (DRY) console.log('[dry-run] akan diubah: ' + rel);
    else { fs.writeFileSync(abs, html, 'utf8'); console.log('diubah: ' + rel); }
  }
}

// ----------------------------------------------------- 5. halaman profil baru
const profilPath = path.join(ROOT, 'profil', slug + '.html');
const foto = r.fotoWebp && r.fotoWebp.trim() ? r.fotoWebp.trim() : '';
const fotoTag = foto ? '<img src="' + esc(foto) + '" alt="' + esc(namaLengkap) + '" style="width:170px;height:170px;object-fit:cover;border-radius:50%">' : '';
const kredList = kredensial.length ? '<ul>' + kredensial.map(k => '<li>' + k + '</li>').join('') + '</ul>' : '';

const profilHtml = '<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
  + '<title>' + esc(namaLengkap) + ' | Peninjau Medis YUKA</title>'
  + '<meta name="description" content="Profil ' + esc(namaLengkap) + ', ' + esc(r.jobTitle) + ', peninjau medis artikel kesehatan YUKA Indonesia.">'
  + '<meta name="robots" content="index, follow">'
  + '<link rel="canonical" href="' + esc(profilUrl) + '">'
  + '<link rel="stylesheet" href="/assets/css/style.min.css">'
  + '<script type="application/ld+json">' + JSON.stringify(Object.assign({ '@context': 'https://schema.org' }, personNode, { worksFor: personNode.worksFor || { '@id': BASE + '/#organization' } })) + '</script>'
  + '<style>.catchup-page{max-width:960px;margin:0 auto;padding:115px 22px 60px}.catchup-page h1{font-size:clamp(2rem,5vw,3.3rem);line-height:1.14;color:#24365d}.catchup-page h2{margin-top:36px;color:#24365d}.catchup-page p,.catchup-page li{line-height:1.8}.notice{background:#fff7df;border-left:5px solid #f4b41a;padding:18px}.nav-simple{position:absolute;top:0;left:0;right:0;padding:17px 5%;display:flex;justify-content:space-between;background:#fff;border-bottom:1px solid #e7eaf0}.nav-simple img{width:170px}.nav-simple a{margin-left:18px;color:#24365d;text-decoration:none;font-weight:600}.footer-simple{padding:32px;background:#17233c;color:#fff;text-align:center}.footer-simple a{color:#ffd467}</style></head>'
  + '<body><nav class="nav-simple"><a href="/"><img src="/Logo/Logo.webp" alt="YUKA Indonesia"></a><div><a href="/tentang">Tentang</a><a href="/program">Program</a><a href="/artikel">Artikel</a></div></nav>'
  + '<main class="catchup-page"><article>' + fotoTag
  + '<h1>' + esc(namaLengkap) + '</h1>'
  + '<p class="notice"><strong>' + esc(r.jobTitle) + '</strong></p>'
  + kredList
  + '<h2>Peran sebagai peninjau medis YUKA</h2>'
  + '<p>' + esc(namaLengkap) + ' meninjau isi artikel kesehatan YUKA Indonesia agar klaim medis di dalamnya sesuai dengan sumber resmi dan praktik klinis yang berlaku. Tinjauan terakhir dilakukan pada ' + esc(t.tanggal) + '.</p>'
  + '<h2>Artikel yang ditinjau</h2><ul>'
  + files.map(f => { const s = path.basename(f, '.html'); return '<li><a href="/artikel/' + s + '">/artikel/' + s + '</a></li>'; }).join('')
  + '</ul>'
  + '<h2>Batas tinjauan</h2><p>Tinjauan medis pada artikel YUKA adalah pemeriksaan akurasi informasi umum. Tinjauan ini bukan asesmen, diagnosis, maupun rekomendasi pengobatan untuk anak tertentu. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>.</p>'
  + '<p><a href="/tentang">Kembali ke profil organisasi dan tim YUKA</a>.</p></article></main>'
  + '<footer class="footer-simple"><p>Yayasan Ukhuwah Kaffah Amanatullah, Sleman, Daerah Istimewa Yogyakarta</p><p><a href="/kebijakan-editorial">Kebijakan Editorial</a> · <a href="/kontak">Kontak</a></p></footer></body></html>';

if (DRY) console.log('[dry-run] akan membuat profil/' + slug + '.html');
else { fs.writeFileSync(profilPath, profilHtml, 'utf8'); console.log('dibuat: profil/' + slug + '.html'); }

// -------------------------------------------------------- 6. regen sitemaps
if (!DRY) {
  const regen = path.join(ROOT, 'scripts', 'regen-sitemaps.js');
  if (fs.existsSync(regen)) {
    try {
      execFileSync(process.execPath, [regen], { cwd: ROOT, stdio: 'inherit' });
      console.log('sitemap diregenerasi.');
    } catch (e) {
      console.error('peringatan: regen-sitemaps gagal, jalankan manual. ' + e.message);
    }
  }
}

console.log('\nSelesai. ' + changed + ' artikel diperbarui pada ' + stamp + '.');
console.log('Langkah berikutnya: git add -A && git commit && git push origin main, lalu verifikasi live.');

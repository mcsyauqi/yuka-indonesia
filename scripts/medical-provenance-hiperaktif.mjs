#!/usr/bin/env node
/**
 * medical-provenance-hiperaktif.mjs
 *
 * Klaster hiperaktif (kartu Trello 7tkqCw3d, 2026-10-11). Turunan dari
 * scripts/medical-provenance-wave2.mjs dengan pola yang PERSIS sama:
 * blok "Tentang artikel ini" + status jujur "belum ditinjau oleh dokter
 * berlisensi" + node JSON-LD MedicalWebPage, untuk 4 artikel klaster yang
 * belum punya blok itu. Pilar hiperaktif-adalah sudah dipasang di gelombang 2.
 *
 * Bedanya dengan wave2: artikel baru dari renderArticlePage() sudah membawa
 * kotak status singkat (div.medical-review-status di antara penanda) dari
 * article-shell. Kotak itu dilepas dulu lalu diganti blok lengkap, supaya
 * penanda tetap tunggal.
 *
 * TIDAK memasang nama, gelar, STR, atau reviewedBy.
 * Pakai: node scripts/medical-provenance-hiperaktif.mjs [--dry-run]
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DRY = process.argv.includes('--dry-run');
const BASE = 'https://www.yukaindonesia.com';
const DATE_MODIFIED = '2026-10-11T12:00:00+07:00';
const DATE_MODIFIED_TXT = '11 Oktober 2026';

const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

const C = (name, alternateName) => ({ '@type': 'MedicalCondition', name, alternateName });
const T = (name, alternateName) => ({ '@type': 'MedicalTherapy', name, alternateName });
const ADHD = C('Gangguan Pemusatan Perhatian dan Hiperaktivitas', 'Attention-Deficit/Hyperactivity Disorder');
const ASD = C('Gangguan Spektrum Autisme', 'Autism Spectrum Disorder');

// slug -> [specialty, about, audiens]
const HIPER = C('Hiperaktivitas pada Anak', 'Hyperactivity');
const WAVE2 = {
  'hiperaktif-artinya': ['Psychiatric', HIPER, 'Orang tua dan guru pendamping anak hiperaktif'],
  'anakku-hiperaktif': ['Psychiatric', HIPER, 'Orang tua dan guru pendamping anak hiperaktif'],
  'anak-aktif-atau-hiperaktif': ['Psychiatric', HIPER, 'Orang tua dan guru pendamping anak hiperaktif'],
  'cara-mengatasi-anak-hiperaktif': ['Psychiatric', HIPER, 'Orang tua dan guru pendamping anak hiperaktif'],
};

const START = '<!-- MEDICAL_REVIEW_STATUS:START -->';
const END = '<!-- MEDICAL_REVIEW_STATUS:END -->';
// Teks status dan koreksi disalin verbatim dari gelombang pertama (artikel/terapi-wicara.html).
const STATUS_LI = START + '\n            <li><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik, <strong>belum ditinjau oleh dokter berlisensi</strong>. Tinjauan oleh tenaga medis berkredensial sedang kami siapkan dan status ini akan diperbarui di halaman ini begitu selesai. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk keputusan diagnosis atau terapi, rujuklah pada dokter anak, psikiater anak, atau psikolog perkembangan.</li>\n          ' + END;
const KOREKSI_LI = '<li><strong>Kebijakan koreksi:</strong> jika Anda menemukan klaim yang keliru atau sumber yang tidak cocok, beri tahu kami lewat <a href="/kontak">halaman kontak</a>. Kami memperbaiki isinya dan mencantumkan catatan koreksi secara terbuka.</li>';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const tglIndo = (iso) => { const [y, m, d] = iso.slice(0, 10).split('-').map(Number); return `${d} ${BULAN[m - 1]} ${y}`; };
const LD_RE = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g;

function die(m) { console.error('GAGAL: ' + m); process.exit(1); }

const done = [];
for (const [slug, [specialty, about, audiens]] of Object.entries(WAVE2)) {
  const rel = `artikel/${slug}.html`;
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) die('file tidak ada: ' + rel);
  let html = fs.readFileSync(abs, 'utf8');
  // kotak status singkat dari article-shell (artikel baru) dilepas, diganti blok lengkap di bawah
  html = html.replace(/\n?<!-- MEDICAL_REVIEW_STATUS:START -->\n<div class="medical-review-status"[\s\S]*?<\/div>\n<!-- MEDICAL_REVIEW_STATUS:END -->\n?/, '\n');
  if (html.includes('MEDICAL_REVIEW_STATUS')) { console.log('lewati (sudah ada penanda): ' + rel); done.push(rel); continue; }

  // --- data yang memang ada di halaman
  let art = null; let artRaw = null;
  for (const m of html.matchAll(LD_RE)) {
    let o; try { o = JSON.parse(m[1]); } catch { die('JSON-LD tidak valid di ' + rel); }
    if (o['@type'] === 'Article' || o['@type'] === 'BlogPosting') { art = o; artRaw = m[0]; break; }
  }
  if (!art || !art.datePublished) die('node Article/BlogPosting atau datePublished tidak ada di ' + rel);
  const metaDiv = (html.match(/<div class="article-meta">([\s\S]*?)<\/div>/) || [])[1];
  if (!metaDiv) die('div.article-meta tidak ada di ' + rel);
  const spans = [...metaDiv.matchAll(/<span[^>]*>([\s\S]*?)<\/span>/g)].map((x) => x[1].replace(/<[^>]+>/g, '').trim());
  const byline = spans.find((s) => !/menit baca/i.test(s) && !/\d{4}/.test(s));
  if (!byline) die('byline penulis tidak ditemukan di ' + rel);
  const terbit = tglIndo(art.datePublished);
  if (!spans.includes(terbit)) die(`tanggal terbit tampil (${spans.join('|')}) tidak cocok dengan datePublished ${art.datePublished} di ${rel}`);

  const srcMatch = html.match(/<div class="(article-sources|source-list)"[\s\S]*?<\/ul>/);
  if (!srcMatch) die('blok sumber tidak ditemukan di ' + rel);
  const domains = [...new Set([...srcMatch[0].matchAll(/<a href="(https?:\/\/[^"]+)"/g)].map((x) => new URL(x[1]).hostname.replace(/^www\./, '')))];
  if (!domains.length) die('blok sumber kosong di ' + rel);

  // --- 1. blok "Tentang artikel ini"
  const blok = `<!-- E-E-A-T: transparansi penulis, tinjauan, dan kebijakan koreksi -->
        <div class="article-provenance" style="margin:2rem 0;padding:1.5rem;background:#FFFFFF;border:1px solid #DDE3F0;border-radius:10px;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Tentang artikel ini</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.25rem;font-size:0.95rem;line-height:1.85;color:#333;">
            <li><strong>Ditulis oleh:</strong> ${esc(byline)} (Yayasan Ukhuwah Kaffah Amanatullah), pengelola Sekolah Inklusi Taruna Imani, Sleman, Yogyakarta.</li>
            <li><strong>Dasar rujukan:</strong> ${domains.map(esc).join(', ')}. Semua rujukan ditautkan langsung di bagian sumber di bawah artikel ini.</li>
            <li><strong>Terbit:</strong> ${terbit}. <strong>Pembaruan terakhir:</strong> ${DATE_MODIFIED_TXT}.</li>
${STATUS_LI}
            ${KOREKSI_LI}
          </ul>
        </div>
`;
  const srcIdx = html.indexOf(srcMatch[0]);
  html = html.slice(0, srcIdx) + blok + html.slice(srcIdx);

  // --- 2 + 3. dateModified Article + node MedicalWebPage
  const url = BASE + '/artikel/' + slug;
  const artNew = { ...art, dateModified: DATE_MODIFIED };
  const mwp = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    '@id': url + '#medicalwebpage',
    url,
    name: art.headline || art.name,
    inLanguage: 'id-ID',
    publisher: { '@id': BASE + '/#organization' },
    datePublished: art.datePublished,
    dateModified: DATE_MODIFIED,
    specialty: 'https://schema.org/' + specialty,
    medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient', name: audiens },
    about,
    publishingPrinciples: { '@type': 'CreativeWork', name: 'Kebijakan Editorial YUKA', url: BASE + '/kebijakan-editorial' },
  };
  const artTag = '<script type="application/ld+json">' + JSON.stringify(artNew) + '</script>';
  const mwpTag = '<script type="application/ld+json">' + JSON.stringify(mwp) + '</script>';
  html = html.replace(artRaw, () => artTag + '\n' + mwpTag);

  // --- gerbang
  for (const m of html.matchAll(LD_RE)) JSON.parse(m[1]);
  if ((html.match(/MEDICAL_REVIEW_STATUS:START/g) || []).length !== 1) die('penanda ganda di ' + rel);

  if (DRY) console.log(`[dry-run] ${rel} | ${byline} | terbit ${terbit} | ${domains.length} domain`);
  else { fs.writeFileSync(abs, html, 'utf8'); console.log(`diubah: ${rel} | ${byline} | terbit ${terbit} | ${domains.join(', ')}`); }
  done.push(rel);
}

// --- 4. registry
const cfgPath = path.join(ROOT, 'data', 'medical-reviewer.json');
const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
const before = cfg.tinjauan.artikel.length;
for (const rel of done) if (!cfg.tinjauan.artikel.includes(rel)) cfg.tinjauan.artikel.push(rel);
cfg._cakupan = `${cfg.tinjauan.artikel.length} artikel kesehatan dan terapi. Gelombang 1 (11 September 2026): 12 artikel prioritas (7 kondisi kesehatan + 5 terapi). Gelombang 2 (11 Oktober 2026, kartu Trello I9gw2TEU): 23 artikel kondisi, terapi, dan asesmen. Klaster hiperaktif (11 Oktober 2026, kartu Trello 7tkqCw3d): 4 artikel. Semuanya punya penanda MEDICAL_REVIEW_STATUS di badan halaman dan node JSON-LD MedicalWebPage, jadi skrip tinggal mengisi identitas.`;
if (DRY) console.log(`[dry-run] registry ${before} -> ${cfg.tinjauan.artikel.length} artikel`);
else { fs.writeFileSync(cfgPath, JSON.stringify(cfg, null, 2) + '\n', 'utf8'); console.log(`registry: ${before} -> ${cfg.tinjauan.artikel.length} artikel`); }

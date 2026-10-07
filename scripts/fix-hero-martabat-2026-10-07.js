#!/usr/bin/env node
'use strict';
/*
 * Cycle #74 (2026-10-07): ganti hero potret-dekat anak pada artikel berjudul diagnosis/disabilitas
 * (batch 2026-10-03/04) dengan foto Dokumentasi YUKA lanskap berisi kegiatan kelompok, dan pasang
 * potongan hero kanonik (max-height + object-fit: cover) di artikel yang belum memilikinya.
 *
 * Aturan martabat: jangan pasang foto dekat satu anak yang dapat dikenali di bawah judul diagnosis
 * (Asperger, ADHD, autis, gangguan belajar, "terima diagnosis"). Pembaca akan membacanya sebagai
 * "anak ini penyandang X".
 *
 * Foto pengganti dicek pHash terhadap semua gambar artikel (belum dipakai artikel lain), dibuka dan
 * dilihat satu per satu, lalu dipotong 4:3 dari berkas Dokumentasi asli.
 *
 * Mengubah HTML artikel (og/twitter/JSON-LD/hero/figcaption), kartu blog.html untuk slug itu,
 * dan field image di scripts/content/<dir>/<slug>.js supaya generator tidak mengembalikan foto lama.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const CROP_CSS = '        .article-featured-image img { max-height: 620px; object-fit: cover; object-position: center 35%; }';

const PLAN = [
  {
    slug: 'asperger-syndrome-adalah', content: 'asperger',
    src: 'Dokumentasi/museum-gunung-merapi-keluarga-menonton-bioskop-bersama-015.webp', center: 0.55,
    file: 'Dokumentasi/artikel/asperger-syndrome-adalah-menonton-bersama.webp',
    alt: 'Rombongan anak dan pendamping berkaus merah muda duduk di kursi teater sebuah museum menunggu pemutaran film',
    caption: 'Anak-anak dan pendamping YUKA menunggu pemutaran film di teater museum saat kunjungan bersama. Foto ini dokumentasi kegiatan, bukan gambaran anak dengan diagnosis tertentu.',
  },
  {
    slug: 'orang-tua-baru-terima-diagnosis-anak-abk', content: 'diagnosis',
    src: 'Dokumentasi/candi-plaosan-grup-wisatawan-candi-borobudur-063.webp', center: 0.6,
    file: 'Dokumentasi/artikel/orang-tua-baru-terima-diagnosis-anak-abk-rombongan-candi.webp',
    alt: 'Rombongan anak, orang tua, dan pendamping berkaus merah muda duduk dan berdiri di tangga batu sebuah candi',
    caption: 'Anak-anak, orang tua, dan pendamping YUKA berfoto bersama di tangga candi saat kegiatan keluarga. Foto ini dokumentasi kegiatan, bukan gambaran anak dengan diagnosis tertentu.',
  },
  {
    slug: 'gangguan-belajar-spesifik', content: 'gangguan-belajar',
    src: 'Dokumentasi/museum-gunung-merapi-gambar-007.webp', center: 0.6,
    file: 'Dokumentasi/artikel/gangguan-belajar-spesifik-belajar-di-museum.webp',
    alt: 'Rombongan siswa dan pendamping berdiri mendengarkan penjelasan pemandu di depan maket gunung di dalam museum',
    caption: 'Siswa dan pendamping YUKA mendengarkan penjelasan pemandu di depan maket gunung saat belajar di museum. Foto ini dokumentasi kegiatan, bukan sesi asesmen dan bukan gambaran anak dengan diagnosis tertentu.',
  },
  {
    slug: 'terapi-musik-untuk-anak-adhd', content: 'adhd-musik',
    src: 'Dokumentasi/candi-plaosan-anak-kostum-tradisional-candi-borobudur-092.webp', center: 0.6,
    file: 'Dokumentasi/artikel/terapi-musik-untuk-anak-adhd-pentas-kostum.webp',
    alt: 'Rombongan anak dan pendamping berkostum tradisional warna-warni berhias bulu duduk dan berdiri di tangga batu sebuah candi',
    caption: 'Anak-anak dan pendamping YUKA berkostum tradisional dalam kegiatan seni di kompleks candi. Foto ini dokumentasi kegiatan, bukan sesi terapi musik dan bukan gambaran anak dengan diagnosis tertentu.',
  },
  {
    slug: 'daftar-mainan-edukatif-untuk-anak-autis', content: 'mainan-edukatif',
    src: 'Dokumentasi/candi-plaosan-grup-wisatawan-kostum-tradisional-candi-012.webp', center: 0.68,
    file: 'Dokumentasi/artikel/daftar-mainan-edukatif-untuk-anak-autis-kegiatan-kelompok.webp',
    alt: 'Barisan anak dan pendamping berkostum tradisional duduk di pelataran batu di tepi rumput hijau sebuah candi',
    caption: 'Anak-anak dan pendamping YUKA beristirahat bersama di pelataran candi dalam kegiatan kelompok. Foto ini dokumentasi kegiatan, bukan sesi terapi dan bukan gambaran anak dengan diagnosis tertentu.',
  },
];

// Artikel yang hero potretnya dibiarkan, tapi wajib dipotong seperti template kanonik.
const CROP_ONLY = [
  'respite-care-untuk-keluarga-anak-abk', 'berapa-biaya-terapi-bicara-anak',
  'milestone-motorik-halus-anak-1-3-tahun', 'terapi-pijat-anak-cerebral-palsy',
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function addCrop(html, slug) {
  if (/\.article-featured-image img\s*\{[^}]*max-height:[^}]*object-fit:\s*cover/.test(html)) return html;
  const m = html.match(/[ \t]*\.article-featured-image img\s*\{[^}]*\}\n?/);
  if (!m) throw new Error(`${slug}: aturan .article-featured-image img tidak ketemu`);
  const at = html.indexOf(m[0]) + m[0].length;
  return html.slice(0, at) + (m[0].endsWith('\n') ? '' : '\n') + CROP_CSS + '\n' + html.slice(at);
}

let blog = fs.readFileSync(path.join(ROOT, 'blog.html'), 'utf8');
for (const p of PLAN) {
  // 1. Potong 4:3 dari berkas Dokumentasi asli.
  execFileSync('python', ['-c', `
from PIL import Image
im=Image.open(r'${p.src}').convert('RGB');w,h=im.size;ch=int(w*3/4);top=int(max(0,min(h-ch,h*${p.center}-ch/2)))
im.crop((0,top,w,top+ch)).save(r'${p.file}','WEBP',quality=82,method=6)`], { cwd: ROOT });
  const { w, h } = imageSize(path.join(ROOT, p.file));

  // 2. HTML artikel.
  const fa = path.join(ROOT, 'artikel', `${p.slug}.html`);
  let html = fs.readFileSync(fa, 'utf8');
  const fig = html.match(/<figure class="article-featured-image">[\s\S]*?<\/figure>/)[0];
  const old = fig.match(/src="\.\.\/([^"]+)"/)[1];
  const oldImg = fig.match(/<img [^>]+>/)[0];
  const oldW = oldImg.match(/width="(\d+)"/)[1], oldH = oldImg.match(/height="(\d+)"/)[1];
  const oldAlt = oldImg.match(/alt="([^"]*)"/)[1];
  const newFig = fig
    .replace(oldImg, oldImg.replace(old, p.file).replace(`alt="${oldAlt}"`, `alt="${esc(p.alt)}"`)
      .replace(`width="${oldW}"`, `width="${w}"`).replace(`height="${oldH}"`, `height="${h}"`))
    .replace(/<figcaption>[\s\S]*?(<span class="kredit">)/, `<figcaption>${p.caption}\n                $1`);
  html = html.replace(fig, newFig);
  html = html.replace(new RegExp(reEsc(old), 'g'), p.file);
  html = html.replace(new RegExp(`("url":"https://www\\.yukaindonesia\\.com/${reEsc(p.file)}","width":)${oldW},"height":${oldH},"caption":"[^"]*"`),
    `$1${w},"height":${h},"caption":${JSON.stringify(p.alt)}`);
  html = html.replace(/(<meta property="og:image:alt" content=")[^"]*"/, `$1${esc(p.alt)}"`);
  html = addCrop(html, p.slug);
  if (html.includes(old)) throw new Error(`${p.slug}: sisa ${old}`);
  fs.writeFileSync(fa, html, 'utf8');

  // 3. Kartu blog.html untuk slug ini saja.
  const re = new RegExp(`(<article class="card blog-card[^"]*">(?:(?!</article>)[\\s\\S])*?)${reEsc(old)}((?:(?!</article>)[\\s\\S])*?href="artikel/${p.slug}")`);
  if (!re.test(blog)) throw new Error(`${p.slug}: kartu blog tidak ketemu`);
  blog = blog.replace(re, `$1${p.file}$2`);

  // 4. Modul isi generator.
  const cm = path.join(__dirname, 'content', p.content, `${p.slug}.js`);
  let c = fs.readFileSync(cm, 'utf8');
  const blk = c.match(/image:\s*\{[\s\S]*?caption:[^\n]*\n/)[0];
  const nb = blk.replace(`'${old}'`, `'${p.file}'`).replace(/w:\s*\d+,\s*h:\s*\d+/, `w: ${w}, h: ${h}`)
    .replace(/alt:\s*'[^\n]*',\n/, `alt: ${JSON.stringify(p.alt).replace(/^"|"$/g, "'")},\n`)
    .replace(/caption:\s*'[^\n]*',\n/, `caption: ${JSON.stringify(p.caption).replace(/^"|"$/g, "'")},\n`);
  if (nb === blk || !nb.includes(p.file)) throw new Error(`${p.slug}: modul isi tidak terubah`);
  fs.writeFileSync(cm, c.replace(blk, nb), 'utf8');
  console.log(`${p.slug}: ${old} -> ${p.file} (${w}x${h})`);
}
fs.writeFileSync(path.join(ROOT, 'blog.html'), blog, 'utf8');

for (const slug of CROP_ONLY) {
  const fa = path.join(ROOT, 'artikel', `${slug}.html`);
  const html = fs.readFileSync(fa, 'utf8');
  const out = addCrop(html, slug);
  if (out !== html) { fs.writeFileSync(fa, out, 'utf8'); console.log(`${slug}: potongan hero kanonik dipasang`); }
}

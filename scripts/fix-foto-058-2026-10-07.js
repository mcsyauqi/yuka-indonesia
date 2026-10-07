#!/usr/bin/env node
'use strict';
/*
 * Cycle #74 (2026-10-07): singkirkan Dokumentasi/cpao-anak-bermain-di-rumah-058.webp (anak menangis
 * di lantai) dari semua artikel.
 *  - hero floor-time-terapi  -> foto tangan memeras lemon di lantai (aktivitas, tanpa wajah)
 *  - hero hiperaktif-adalah  -> foto rombongan anak berkostum tradisional di tangga candi
 *  - gambar isi sensori-integrasi dan terapi-aba -> figure dihapus (slot badan dikosongkan; stok foto
 *    kelompok unik habis, dan foto pengganti yang tidak relevan lebih buruk daripada tanpa gambar)
 * Hero baru diberi figcaption + kredit terlihat. Kartu blog.html kedua slug ikut diganti.
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const OLD = 'Dokumentasi/cpao-anak-bermain-di-rumah-058.webp';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const HERO = [
  {
    slug: 'floor-time-terapi',
    src: 'Dokumentasi/cocopandan-lemon-pelatihan-membatik-wanita-berhijab-001.webp', center: 0.75,
    file: 'Dokumentasi/artikel/floor-time-terapi-aktivitas-di-lantai.webp',
    alt: 'Tangan seorang pendamping memeras lemon ke teko sambil duduk di lantai, dikelilingi mangkuk berisi lemon dan peralatan kegiatan',
    caption: 'Kegiatan bersama di lantai: pendamping YUKA memeras lemon sambil duduk sejajar dengan anak-anak. Foto ini dokumentasi kegiatan, bukan sesi terapi DIR Floortime.',
  },
  {
    slug: 'hiperaktif-adalah',
    src: 'Dokumentasi/candi-plaosan-anak-kostum-tradisional-candi-borobudur-031.webp', center: 0.6,
    file: 'Dokumentasi/artikel/hiperaktif-adalah-kegiatan-seni-candi.webp',
    alt: 'Rombongan anak dan pendamping berkostum tari tradisional warna-warni berpose ceria di tangga batu sebuah candi',
    caption: 'Anak-anak dan pendamping YUKA berkostum tari tradisional saat kegiatan seni di kompleks candi. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.',
  },
];
const BODY = ['sensori-integrasi', 'terapi-aba'];

let blog = fs.readFileSync(path.join(ROOT, 'blog.html'), 'utf8');
for (const p of HERO) {
  execFileSync('python', ['-c', `
from PIL import Image
im=Image.open(r'${p.src}').convert('RGB');w,h=im.size;ch=int(w*3/4);top=int(max(0,min(h-ch,h*${p.center}-ch/2)))
im.crop((0,top,w,top+ch)).save(r'${p.file}','WEBP',quality=82,method=6)`], { cwd: ROOT });
  const { w, h } = imageSize(path.join(ROOT, p.file));
  const fa = path.join(ROOT, 'artikel', `${p.slug}.html`);
  let html = fs.readFileSync(fa, 'utf8');
  const blk = html.match(/<div class="article-featured-image">\s*<img [^>]+>\s*<\/div>/);
  if (!blk) throw new Error(`${p.slug}: blok hero tidak ketemu`);
  html = html.replace(blk[0], `<div class="article-featured-image">
            <img src="../${p.file}" alt="${esc(p.alt)}" width="${w}" height="${h}" fetchpriority="high">
            <p class="hero-caption" style="padding:0.75rem 1rem;font-size:0.9rem;color:#555;background:#f8f9fb;line-height:1.6;margin:0;">${p.caption}
                <span class="kredit" style="display:block;font-size:0.8rem;margin-top:0.25rem;">${CREDIT}</span></p>
        </div>`);
  html = html.replace(new RegExp(reEsc(OLD), 'g'), p.file);
  html = html.replace(/(<meta property="og:image:alt" content=")[^"]*"/, `$1${esc(p.alt)}"`);
  fs.writeFileSync(fa, html, 'utf8');
  const re = new RegExp(`(<article class="card blog-card[^"]*">(?:(?!</article>)[\\s\\S])*?)${reEsc(OLD)}"[^>]*alt="[^"]*"((?:(?!</article>)[\\s\\S])*?href="artikel/${p.slug}")`);
  if (!re.test(blog)) throw new Error(`${p.slug}: kartu blog tidak ketemu`);
  blog = blog.replace(re, `$1${p.file}" alt="${esc(p.alt)}"$2`);
  console.log(`${p.slug}: hero -> ${p.file} (${w}x${h})`);
}
fs.writeFileSync(path.join(ROOT, 'blog.html'), blog, 'utf8');

for (const slug of BODY) {
  const fa = path.join(ROOT, 'artikel', `${slug}.html`);
  let html = fs.readFileSync(fa, 'utf8');
  const fig = html.match(new RegExp(`[ \\t]*<figure[^>]*>\\s*<img[^>]+${reEsc(OLD)}[\\s\\S]*?</figure>\\n?`));
  if (!fig) throw new Error(`${slug}: figure 058 tidak ketemu`);
  html = html.replace(fig[0], '');
  fs.writeFileSync(fa, html, 'utf8');
  console.log(`${slug}: figure isi 058 dihapus`);
}

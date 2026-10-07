#!/usr/bin/env node
'use strict';
/*
 * Bungkus ulang artikel batch MinTiv 2026-10-06 (commit 26583fb) ke kerangka kanonik YUKA (cycle #74).
 *
 * Tiga artikel itu diterbitkan tanpa generator di repo: kerangkanya diketik ulang dan kehilangan font
 * Poppins, pita header navy, article-content, article-share, article-sources, article-tags dan
 * related-articles, sementara hero-nya foto potret (uu-no-19: anak menangis di lantai).
 *
 * Isi artikel (jawaban singkat, TOC, H2, figure isi, langkah, FAQ, sumber, catatan) DIPERTAHANKAN apa
 * adanya; skrip ini hanya memindahkannya ke renderArticlePage() (scripts/lib/article-page.js), mengganti
 * hero dengan foto Dokumentasi YUKA lanskap yang belum dipakai halaman lain, menambah kartu bacaan
 * terkait, dan merapikan kartu blog.html ke markup kanonik.
 *
 *   node scripts/rewrap-canonical-2026-10-07.js
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const NOW = new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 19) + '+07:00';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';

const PLAN = {
  'uu-no-19-tahun-2011-tentang-apa': {
    hero: {
      file: 'Dokumentasi/artikel/uu-no-19-tahun-2011-tentang-apa-kunjungan-museum.webp',
      alt: 'Rombongan anak dan pendamping berkaus merah muda berfoto bersama di dalam lorong lingkaran bercahaya oranye di sebuah museum',
      caption: 'Anak-anak dan pendamping YUKA saat kunjungan bersama ke museum. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.',
    },
    related: ['apa-saja-hak-anak-berkebutuhan-khusus', 'apa-perbedaan-sekolah-inklusi-dan-slb', 'kartu-disabilitas', 'buddy-system-untuk-anak-abk-di-sekolah'],
    tags: ['UU19Tahun2011', 'CRPD', 'HakDisabilitas', 'PendidikanInklusif'],
  },
  'sensory-seeking-behavior-anak': {
    hero: {
      file: 'Dokumentasi/artikel/sensory-seeking-behavior-anak-taman-batu-museum.webp',
      alt: 'Rombongan anak dan pendamping berkaus merah muda berjalan dan menyentuh bebatuan besar di taman batu sebuah museum',
      caption: 'Anak-anak dan pendamping YUKA menjelajahi taman batu saat kunjungan ke museum, kegiatan yang memberi banyak rangsangan sentuhan dan gerak. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.',
    },
    related: ['sensory-over-responsivity-pada-anak', 'terapi-integrasi-sensorik-di-rumah', 'sensori-integrasi', 'perbedaan-terapi-okupasi-dan-terapi-wicara'],
    tags: ['SensorySeeking', 'IntegrasiSensorik', 'TerapiOkupasi', 'ParentingABK'],
  },
  'lembaga-sertifikasi-terapis-anak-di-indonesia': {
    hero: {
      file: 'Dokumentasi/artikel/lembaga-sertifikasi-terapis-anak-di-indonesia-ruang-kelas.webp',
      alt: 'Beberapa siswa duduk di lantai ruang kelas dengan meja lipat, buku tulis, dan mushaf Al-Quran terbuka',
      caption: 'Suasana belajar di ruang kelas Sekolah Inklusi Taruna Imani YUKA dengan meja lipat. Foto ini dokumentasi kegiatan sekolah, bukan proses sertifikasi terapis.',
    },
    related: ['perbedaan-terapi-okupasi-dan-terapi-wicara', 'tempat-terapi-anak-jogja', 'berapa-biaya-terapi-anak-berkebutuhan-khusus', 'terapi-okupasi'],
    tags: ['SertifikasiTerapis', 'TerapisAnak', 'TerapiOkupasi', 'TerapiWicara'],
  },
};

const pick = (h, re, what) => {
  const m = h.match(re);
  if (!m) throw new Error(`tidak ketemu ${what}`);
  return m[1].trim();
};
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&amp;/g, '&');

function relatedCard(slug) {
  const f = path.join(ROOT, 'artikel', `${slug}.html`);
  if (!fs.existsSync(f)) throw new Error(`related ${slug} tidak ada`);
  const h = fs.readFileSync(f, 'utf8');
  const title = stripTags(pick(h, /<h1[^>]*>([\s\S]*?)<\/h1>/, `h1 ${slug}`));
  const desc = decode(pick(h, /<meta name="description" content="([^"]*)"/, `desc ${slug}`));
  return { href: slug, title, desc };
}

function parse(slug) {
  const h = fs.readFileSync(path.join(ROOT, 'artikel', `${slug}.html`), 'utf8');
  if (/class="article-content"/.test(h)) throw new Error(`${slug}: sudah kanonik, tidak dibungkus ulang`);
  const ld = JSON.parse(pick(h, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/, 'ld+json'));
  const post = (ld['@graph'] || [ld]).find((x) => x['@type'] === 'BlogPosting') || {};
  const meta = [...pick(h, /<div class="article-meta">([\s\S]*?)<\/div>/, 'article-meta').matchAll(/<span>([\s\S]*?)<\/span>/g)].map((m) => stripTags(m[1]));
  let body = pick(h, /<article class="article-body">([\s\S]*?)<section class="sources">/, 'body');
  const sourcesHtml = pick(h, /<section class="sources">([\s\S]*?)<\/section>/, 'sources');
  const disclaimer = (h.match(/<aside class="disclaimer">([\s\S]*?)<\/aside>/) || [])[1];

  const faq = [...body.matchAll(/<details><summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)]
    .map((m) => ({ q: m[1].trim(), a: m[2].replace(/^\s*<p>|<\/p>\s*$/g, '').trim() }));
  body = body
    .replace(/<details><summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g, '\n            <h3>$1</h3>\n            $2')
    .replace(/<div class="answer-box"><p><strong>Jawaban singkat:<\/strong>\s*/, '<div class="jawaban-singkat"><p>')
    .replace(/<div class="answer-box">/g, '<div class="jawaban-singkat">')
    .replace(/<div class="toc"><h2>Daftar isi<\/h2>/i, '<div class="toc"><h3>Daftar Isi</h3>')
    .replace(/<figure class="">/g, '<figure>')
    .replace(/<\/(p|ul|ol|div|figure|h2|h3)>(?=<)/g, '</$1>\n            ');

  const sources = [...sourcesHtml.matchAll(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => ({ url: m[1], label: m[2].trim() }));
  const editorialHtml = disclaimer
    ? `<aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px">${disclaimer.trim()} Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>`
    : null;

  const plan = PLAN[slug];
  const heroAbs = path.join(ROOT, plan.hero.file);
  const size = imageSize(heroAbs);
  const h1 = stripTags(pick(h, /<h1[^>]*>([\s\S]*?)<\/h1>/, 'h1'));
  return {
    slug,
    titleTag: stripTags(pick(h, /<title>([\s\S]*?)<\/title>/, 'title')),
    metaDesc: decode(pick(h, /<meta name="description" content="([^"]*)"/, 'description')),
    keywords: post.keywords || '',
    ogTitle: decode(pick(h, /<meta property="og:title" content="([^"]*)"/, 'og:title')),
    ogDesc: decode(pick(h, /<meta property="og:description" content="([^"]*)"/, 'og:description')),
    datePublished: pick(h, /<meta property="article:published_time" content="([^"]*)"/, 'published'),
    dateModified: NOW,
    dateDisplay: meta[0], readTime: meta[1],
    category: stripTags(pick(h, /class="card-category"[^>]*>([\s\S]*?)<\/span>/, 'category')),
    h1, crumb: h1,
    image: { file: plan.hero.file, w: size.w, h: size.h, alt: plan.hero.alt, caption: plan.hero.caption, credit: CREDIT },
    bodyHtml: body, faq,
    related: plan.related.map(relatedCard),
    tags: plan.tags, sources,
    sourcesCheckedNote: 'Sumber diperiksa tim YUKA saat artikel disusun.',
    editorialHtml,
  };
}

function canonicalCard(a) {
  const d = new Date(a.datePublished);
  const mon = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getUTCMonth()];
  const day = new Date(d.getTime() + 7 * 3600e3);
  const dd = String(day.getUTCDate()).padStart(2, '0');
  return `<article class="card blog-card animate-on-scroll">
                    <div class="card-image">
                        <img src="${a.image.file}" alt="${a.h1.replace(/"/g, '&quot;')}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <span class="card-category">${a.category}</span>
                        <h3 class="card-title">
                            <a href="artikel/${a.slug}">${a.h1}</a>
                        </h3>
                        <p class="card-text">${a.metaDesc}</p>
                        <div class="card-meta">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                                ${dd} ${mon} ${day.getUTCFullYear()}
                            </span>
                            <span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                ${a.readTime}
                            </span>
                        </div>
                    </div>
                </article>`;
}

const blogPath = path.join(ROOT, 'blog.html');
let blog = fs.readFileSync(blogPath, 'utf8');
for (const slug of Object.keys(PLAN)) {
  const a = parse(slug);
  const html = renderArticlePage(a);
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
  const re = new RegExp(`<article class="card blog-card[^"]*">(?:(?!</article>)[\\s\\S])*?href="artikel/${slug}"[\\s\\S]*?</article>`);
  if (!re.test(blog)) throw new Error(`${slug}: kartu blog.html tidak ketemu`);
  blog = blog.replace(re, canonicalCard(a));
  console.log(`${slug}: ${html.length} bytes, faq ${a.faq.length}, sumber ${a.sources.length}, hero ${a.image.w}x${a.image.h}`);
}
fs.writeFileSync(blogPath, blog, 'utf8');

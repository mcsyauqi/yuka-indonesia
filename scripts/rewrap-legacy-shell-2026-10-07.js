#!/usr/bin/env node
'use strict';
/*
 * Bungkus ulang 22 artikel batch catchup 2026-08-12 (varian kerangka "article-shell" / nav-simple)
 * ke kerangka kanonik YUKA lewat renderArticlePage() (cycle #74, 2026-10-07).
 *
 * Cacatnya sama dengan uu-no-19-tahun-2011-tentang-apa: tanpa font Poppins, tanpa pita header navy,
 * navigasi sederhana, tanpa share/tag/related card. Isi (jawaban singkat, seksi H2, checklist, tabel,
 * FAQ, sumber, catatan editorial, status tinjauan medis) DIPERTAHANKAN apa adanya.
 *
 * Hero: artikel ini tidak pernah punya hero (og:image = assets/images/hero-bg.webp). Stok foto
 * Dokumentasi YUKA kelompok yang belum dipakai artikel lain sudah habis (cek pHash cycle #74), jadi
 * slot hero dikosongkan dan dilaporkan, kecuali liburan-dengan-anak-berkebutuhan-khusus yang punya
 * foto wisata yang cocok. Jangan isi dengan foto yang tidak relevan atau dipakai ulang.
 *
 *   node scripts/rewrap-legacy-shell-2026-10-07.js [--live-check]
 * --live-check: pastikan target related card sudah tayang (HTTP 200 di situs live, jeda 2,5 detik).
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { missingSkeletonParts } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const NO_HERO = 'artikel lama tanpa hero; belum ada foto Dokumentasi YUKA yang layak dan belum dipakai (cycle 74)';

const FALLBACK_RELATED = {
  'apa-saja-3-pilar-pendidikan': ['apa-yang-dimaksud-dengan-sekolah-luar-biasa', 'apa-perbedaan-sekolah-inklusi-dan-slb', 'peran-orang-tua-pendidikan-inklusi', 'homeschooling-vs-sekolah-inklusi'],
  'apa-saja-terapi-anak-berkebutuhan-khusus': ['terapi-okupasi', 'terapi-wicara', 'berapa-biaya-terapi-anak-berkebutuhan-khusus', 'tempat-terapi-anak-jogja'],
  'liburan-dengan-anak-berkebutuhan-khusus': ['melatih-anak-abk-naik-transportasi-umum', 'sibling-anak-berkebutuhan-khusus', 'dukungan-keluarga-anak-abk', 'peran-orang-tua-pendidikan-inklusi'],
  'reward-system-efektif-untuk-anak-autis': ['terapi-aba', 'strategi-mengajar-anak-autis-di-kelas', 'cara-melatih-social-skills-anak-autis-di-rumah', 'autisme-adalah'],
  'systematic-review-intervensi-dini-autisme': ['intervensi-dini', 'autisme-adalah', 'terapi-aba', 'apa-itu-autisme-level-1-2-3'],
  'augmentative-communication-untuk-anak-di-rumah': ['terapi-wicara', 'speech-delay-adalah', 'aplikasi-ai-untuk-terapi-wicara-anak', 'cara-melatih-anak-speech-delay-bicara'],
  'bagaimana-cara-membuat-kartu-disabilitas': ['kartu-disabilitas', 'apa-saja-hak-anak-berkebutuhan-khusus', 'disabilitas', 'jenis-disabilitas'],
  'bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh': ['dukungan-keluarga-anak-abk', 'terapi-okupasi', 'peran-orang-tua-pendidikan-inklusi'],
  'co-teaching-dalam-kelas-inklusi': ['peer-tutoring-di-kelas-inklusi', 'classroom-management-kelas-inklusi', 'strategi-mengajar-anak-autis-di-kelas', 'apa-perbedaan-sekolah-inklusi-dan-slb'],
  'disabilitas-intelektual': ['disabilitas-intelektual-adalah', 'tunagrahita-ringan-sedang-berat-perbedaan', 'jenis-disabilitas'],
  'kartu-disabilitas': ['bagaimana-cara-membuat-kartu-disabilitas', 'apa-saja-hak-anak-berkebutuhan-khusus', 'disabilitas', 'uu-no-19-tahun-2011-tentang-apa'],
  'makanan-yang-harus-dihindari-anak-adhd': ['adhd-adalah', 'suplemen-untuk-anak-adhd', 'terapi-musik-untuk-anak-adhd', 'non-stimulant-medication-adhd-terbaru'],
  'peer-tutoring-di-kelas-inklusi': ['co-teaching-dalam-kelas-inklusi', 'buddy-system-untuk-anak-abk-di-sekolah', 'strategi-mengajar-anak-autis-di-kelas'],
  'yayasan-disabilitas': ['yayasan-sosial', 'disabilitas', 'panti-asuhan-yogyakarta', 'apa-saja-hak-anak-berkebutuhan-khusus'],
  'yayasan-sosial': ['yayasan-disabilitas', 'panti-asuhan-yogyakarta', 'dukungan-keluarga-anak-abk'],
  'terapi-bermain-child-centered-play-therapy': ['floor-time-terapi', 'terapi-seni-untuk-anak-berkebutuhan-khusus', 'terapi-perilaku-kognitif-anak', 'apa-saja-terapi-anak-berkebutuhan-khusus'],
};

const HERO = {
  'liburan-dengan-anak-berkebutuhan-khusus': {
    file: 'Dokumentasi/artikel/liburan-dengan-anak-berkebutuhan-khusus-wisata-candi.webp',
    alt: 'Seorang siswa berkostum tari tradisional dan pendamping berkerudung merah muda menari di halaman rumput depan sebuah candi batu',
    caption: 'Siswa dan pendamping YUKA menari di halaman candi saat wisata bersama. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.',
  },
};

function category(slug) {
  if (/adhd/.test(slug)) return 'ADHD';
  if (/autis/.test(slug)) return 'Autisme';
  if (/terapi|augmentative/.test(slug)) return 'Terapi';
  if (/disabilitas/.test(slug)) return 'Disabilitas';
  if (/liburan|kemandirian/.test(slug)) return 'Parenting';
  return 'Pendidikan';
}

const pick = (h, re, what) => {
  const m = h.match(re);
  if (!m) throw new Error(`tidak ketemu ${what}`);
  return m[1].trim();
};
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&amp;/g, '&');

function card(slug) {
  const h = fs.readFileSync(path.join(ROOT, 'artikel', `${slug}.html`), 'utf8');
  return {
    href: slug,
    title: stripTags(pick(h, /<h1[^>]*>([\s\S]*?)<\/h1>/, `h1 ${slug}`)),
    desc: decode(pick(h, /<meta name="description" content="([^"]*)"/, `desc ${slug}`)),
  };
}

function parse(slug, live) {
  const h = fs.readFileSync(path.join(ROOT, 'artikel', `${slug}.html`), 'utf8');
  if (!/class="article-shell"/.test(h)) throw new Error(`${slug}: bukan varian article-shell`);
  const ld = JSON.parse(pick(h, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/, 'ld'));
  const art = (ld['@graph'] || [ld]).find((x) => x['@type'] === 'Article' || x['@type'] === 'BlogPosting');
  const d = new Date(new Date(art.datePublished).getTime() + 7 * 3600e3);
  const metaBlock = pick(h, /(<div class="article-meta">[\s\S]*?<\/div>)/, 'article-meta');
  const authorName = stripTags(pick(metaBlock, /<strong>([\s\S]*?)<\/strong>/, 'author'));

  const start = h.indexOf(metaBlock) + metaBlock.length;
  const srcAt = h.indexOf('<section class="sources">');
  let body = h.slice(start, srcAt);
  const sourcesHtml = pick(h.slice(srcAt), /<section class="sources">([\s\S]*?)<\/section>/, 'sources');
  const afterSources = h.slice(srcAt + h.slice(srcAt).indexOf('</section>') + '</section>'.length, h.indexOf('<footer'));
  const klaster = afterSources.match(/<section><h2>Baca juga dalam klaster ini<\/h2>([\s\S]*?)<\/section>/);
  const editorialHtml = afterSources
    .replace(klaster ? klaster[0] : '', '')
    .replace(/<\/article>\s*<\/main>/, '')
    .trim();

  const faq = [...body.matchAll(/<details><summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g)]
    .map((m) => ({ q: m[1].trim(), a: m[2].replace(/^\s*<p>|<\/p>\s*$/g, '').trim() }));
  body = body
    .replace(/<details><summary>([\s\S]*?)<\/summary>([\s\S]*?)<\/details>/g, '\n            <h3>$1</h3>\n            $2')
    .replace(/<p class="answer-box"><strong>Jawaban singkat:<\/strong>\s*([\s\S]*?)<\/p>/, '<div class="jawaban-singkat"><p>$1</p></div>')
    .replace(/<\/(p|ul|ol|div|section|table|h2|h3)>(?=<)/g, '</$1>\n            ');

  let rel = [];
  if (klaster) rel = [...klaster[1].matchAll(/href="\/artikel\/([a-z0-9-]+)"/g)].map((m) => m[1]);
  rel = rel.concat(FALLBACK_RELATED[slug] || []);
  rel = [...new Set(rel)].filter((s) => s !== slug && fs.existsSync(path.join(ROOT, 'artikel', `${s}.html`)) && (!live || live.has(s))).slice(0, 4);
  if (rel.length < 3) throw new Error(`${slug}: related tayang < 3 (${rel.join(',')})`);

  const sources = [...sourcesHtml.matchAll(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => ({ url: m[1], label: m[2].trim() }));
  const kw = art.keywords ? String(art.keywords).split(',') : (art.about || []).map((x) => x.name);
  const tags = kw.map((k) => k.trim().replace(/[^A-Za-z0-9 ]/g, '').split(/\s+/).map((w) => w[0].toUpperCase() + w.slice(1)).join('')).filter(Boolean).slice(0, 4);
  const words = stripTags(body).split(' ').length;
  const h1 = stripTags(pick(h, /<h1[^>]*>([\s\S]*?)<\/h1>/, 'h1'));

  let image = null;
  if (HERO[slug]) {
    const { imageSize } = require('./lib/article-skeleton');
    const s = imageSize(path.join(ROOT, HERO[slug].file));
    image = { ...HERO[slug], w: s.w, h: s.h, credit: 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).' };
  }
  return {
    slug,
    titleTag: stripTags(pick(h, /<title>([\s\S]*?)<\/title>/, 'title')),
    metaDesc: decode(pick(h, /<meta name="description" content="([^"]*)"/, 'description')),
    keywords: art.keywords || '',
    ogTitle: decode(pick(h, /<meta property="og:title" content="([^"]*)"/, 'og:title')),
    ogDesc: decode(pick(h, /<meta property="og:description" content="([^"]*)"/, 'og:description')),
    ogImage: pick(h, /<meta property="og:image" content="([^"]*)"/, 'og:image'),
    datePublished: art.datePublished,
    dateModified: new Date(Date.now() + 7 * 3600e3).toISOString().slice(0, 19) + '+07:00',
    dateDisplay: `${d.getUTCDate()} ${BULAN[d.getUTCMonth()]} ${d.getUTCFullYear()}`,
    readTime: `${Math.max(3, Math.ceil(words / 200))} menit baca`,
    category: category(slug),
    h1, crumb: h1,
    author: art.author, authorName,
    about: (art.about || []).map((x) => x.name).filter(Boolean),
    image, noHeroReason: image ? null : NO_HERO,
    bodyHtml: body, faq,
    related: rel.map(card), tags, sources,
    sourcesCheckedNote: 'Sumber diperiksa tim YUKA saat artikel disusun.',
    editorialHtml,
  };
}

async function liveSet(slugs) {
  const ok = new Set();
  for (const s of slugs) {
    const r = await fetch(`${SITE}/artikel/${s}`, { redirect: 'follow' });
    const t = await r.text();
    if (r.status === 200 && !/<title>[^<]*(404|tidak ditemukan|not found)/i.test(t)) ok.add(s);
    await new Promise((res) => setTimeout(res, 2500));
  }
  return ok;
}

(async () => {
  const targets = fs.readdirSync(path.join(ROOT, 'artikel')).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5))
    .filter((s) => /class="article-shell"/.test(fs.readFileSync(path.join(ROOT, 'artikel', `${s}.html`), 'utf8')));
  let live = null;
  if (process.argv.includes('--live-check')) {
    const cand = new Set();
    for (const s of targets) {
      const h = fs.readFileSync(path.join(ROOT, 'artikel', `${s}.html`), 'utf8');
      for (const m of h.matchAll(/<li><a href="\/artikel\/([a-z0-9-]+)"/g)) cand.add(m[1]);
      (FALLBACK_RELATED[s] || []).forEach((x) => cand.add(x));
    }
    live = await liveSet([...cand]);
    console.log(`related live: ${live.size}/${cand.size}; tidak tayang: ${[...cand].filter((x) => !live.has(x)).join(', ') || '-'}`);
  }
  for (const slug of targets) {
    const a = parse(slug, live);
    const html = renderArticlePage(a);
    fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
    console.log(`${slug}: ${html.length} B, faq ${a.faq.length}, sumber ${a.sources.length}, related ${a.related.length}, hero ${a.image ? 'ada' : 'kosong'}`);
  }
})().catch((e) => { console.error(e); process.exit(1); });

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
 * Hero: artikel ini tidak pernah punya hero (og:image = assets/images/hero-bg.webp). Atas keputusan Syauqi
 * (2026-10-07) hero memakai ULANG foto Dokumentasi YUKA kelompok/aktivitas yang sudah ada (pengecualian
 * aturan satu foto satu artikel), dipotong 4:3, satu sumber foto berbeda per artikel, caption + kredit kanonik.
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
  "apa-saja-3-pilar-pendidikan": {
    file: "Dokumentasi/artikel/apa-saja-3-pilar-pendidikan-kegiatan.webp",
    alt: "Beberapa siswa duduk di lantai ruang kelas dengan meja lipat, buku, dan mural kupu-kupu di dinding",
    caption: "Siswa belajar bersama di ruang kelas Sekolah Inklusi Taruna Imani YUKA. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "apa-saja-terapi-anak-berkebutuhan-khusus": {
    file: "Dokumentasi/artikel/apa-saja-terapi-anak-berkebutuhan-khusus-kegiatan.webp",
    alt: "Anak-anak dan pendamping duduk melingkar di lantai teras dengan mangkuk dan bahan makanan dalam kegiatan kelompok",
    caption: "Anak-anak dan pendamping YUKA dalam kegiatan kelompok di teras sekolah. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "augmentative-communication-untuk-anak-di-rumah": {
    file: "Dokumentasi/artikel/augmentative-communication-untuk-anak-di-rumah-kegiatan.webp",
    alt: "Dua pendamping berkerudung duduk di lantai dengan meja lipat berisi buku dan alat tulis di ruang belajar",
    caption: "Pendamping YUKA menyiapkan bahan belajar di meja lipat ruang kelas. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "bagaimana-cara-membuat-kartu-disabilitas": {
    file: "Dokumentasi/artikel/bagaimana-cara-membuat-kartu-disabilitas-kegiatan.webp",
    alt: "Rombongan anak, orang tua, dan pendamping berkaus merah muda duduk berfoto di depan mural gunung di sebuah museum",
    caption: "Anak-anak, orang tua, dan pendamping YUKA saat kunjungan bersama ke museum. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh": {
    file: "Dokumentasi/artikel/bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh-kegiatan.webp",
    alt: "Anak-anak bertopi koki duduk menghadap instruktur yang menjelaskan di depan spanduk kelas memasak di pendopo",
    caption: "Anak-anak YUKA menyimak instruktur dalam kelas memasak di pendopo. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "co-teaching-dalam-kelas-inklusi": {
    file: "Dokumentasi/artikel/co-teaching-dalam-kelas-inklusi-kegiatan.webp",
    alt: "Beberapa pendamping dan peserta bercelemek berdiri bersiap di dalam pendopo kayu sebelum kelas memasak",
    caption: "Pendamping dan peserta YUKA bersiap sebelum kelas memasak dimulai di pendopo. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "disabilitas-intelektual": {
    file: "Dokumentasi/artikel/disabilitas-intelektual-kegiatan.webp",
    alt: "Rombongan anak bertopi koki dan bercelemek berfoto bersama pendamping di depan sebuah bangunan",
    caption: "Peserta kelas memasak YUKA berfoto bersama pendamping seusai kegiatan. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "disabilitas": {
    file: "Dokumentasi/artikel/disabilitas-kegiatan.webp",
    alt: "Rombongan anak dan pendamping bertopi koki berfoto bersama di pendopo di depan spanduk kelas memasak",
    caption: "Anak-anak dan pendamping YUKA berfoto bersama seusai kelas memasak di pendopo. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "jenis-disabilitas": {
    file: "Dokumentasi/artikel/jenis-disabilitas-kegiatan.webp",
    alt: "Sekelompok anak dan remaja berkaus merah muda berpose di depan pintu batu berukir sebuah candi",
    caption: "Siswa YUKA berpose di depan pintu candi saat wisata bersama. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "kartu-disabilitas": {
    file: "Dokumentasi/artikel/kartu-disabilitas-kegiatan.webp",
    alt: "Rombongan pengunjung dewasa dan anak berdiri mengamati diorama besar di dalam museum",
    caption: "Anak-anak dan pendamping YUKA mengamati diorama saat kunjungan ke museum. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "konsep-inklusi-sosial": {
    file: "Dokumentasi/artikel/konsep-inklusi-sosial-kegiatan.webp",
    alt: "Rombongan anak dan pendamping berkaus merah muda berpose ceria di ruangan berpilar putih dan karpet merah",
    caption: "Anak-anak dan pendamping YUKA berfoto bersama di ruang berpilar saat kunjungan museum. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "makanan-yang-harus-dihindari-anak-adhd": {
    file: "Dokumentasi/artikel/makanan-yang-harus-dihindari-anak-adhd-kegiatan.webp",
    alt: "Anak-anak bertopi koki dan pendamping duduk di meja panjang dengan alas silikon biru untuk membentuk adonan",
    caption: "Anak-anak dan pendamping YUKA membentuk adonan dalam kelas memasak. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "peer-tutoring-di-kelas-inklusi": {
    file: "Dokumentasi/artikel/peer-tutoring-di-kelas-inklusi-kegiatan.webp",
    alt: "Beberapa peserta bertopi koki duduk berhadapan di meja panjang sambil membentuk bulatan adonan di atas alas biru",
    caption: "Peserta kelas memasak YUKA saling membantu membentuk adonan di meja panjang. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "penerapan-inklusi-sosial": {
    file: "Dokumentasi/artikel/penerapan-inklusi-sosial-kegiatan.webp",
    alt: "Rombongan anak dan pendamping berkaus merah muda berkumpul di depan mural gunung di dalam museum",
    caption: "Anak-anak dan pendamping YUKA berkumpul saat kunjungan ke museum. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "prinsip-inklusi-sosial": {
    file: "Dokumentasi/artikel/prinsip-inklusi-sosial-kegiatan.webp",
    alt: "Pengunjung anak dan dewasa berkeliling meja pamer bundar di ruang pameran museum yang terang",
    caption: "Anak-anak dan pendamping YUKA berkeliling ruang pameran museum. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "reward-system-efektif-untuk-anak-autis": {
    file: "Dokumentasi/artikel/reward-system-efektif-untuk-anak-autis-kegiatan.webp",
    alt: "Anak-anak bertopi koki duduk di lantai pendopo menghadap instruktur di depan spanduk kelas memasak",
    caption: "Anak-anak YUKA mengikuti arahan instruktur dalam kelas memasak di pendopo. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "systematic-review-intervensi-dini-autisme": {
    file: "Dokumentasi/artikel/systematic-review-intervensi-dini-autisme-kegiatan.webp",
    alt: "Sekelompok anak dan remaja berkaus merah muda berdiri di depan panel informasi di ruang pameran museum",
    caption: "Siswa YUKA di ruang pameran saat kunjungan belajar ke museum. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "teori-inklusi-sosial": {
    file: "Dokumentasi/artikel/teori-inklusi-sosial-kegiatan.webp",
    alt: "Anak-anak dan pendamping berkerudung membentuk tanda hati dengan tangan di depan pintu batu berukir sebuah candi",
    caption: "Anak-anak dan pendamping YUKA berpose di depan pintu candi saat wisata bersama. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "terapi-bermain-child-centered-play-therapy": {
    file: "Dokumentasi/artikel/terapi-bermain-child-centered-play-therapy-kegiatan.webp",
    alt: "Tangan pendamping dan siswa memotong sayuran hijau di lantai dengan mangkuk dan baskom di sekitarnya",
    caption: "Siswa dan pendamping YUKA menyiapkan sayuran bersama di lantai. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "yayasan-disabilitas": {
    file: "Dokumentasi/artikel/yayasan-disabilitas-kegiatan.webp",
    alt: "Beberapa remaja dan anak berkaus merah muda tertawa bersama di taman, salah satunya menjunjung bingkisan di atas kepala",
    caption: "Siswa dan pendamping YUKA bermain bersama di taman saat kegiatan luar ruang. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
  "yayasan-sosial": {
    file: "Dokumentasi/artikel/yayasan-sosial-kegiatan.webp",
    alt: "Anak-anak dan pendamping mengelilingi meja peraga interaktif di sebuah museum",
    caption: "Anak-anak dan pendamping YUKA mencoba alat peraga interaktif di museum. Foto ini dokumentasi kegiatan dan tidak menunjukkan kondisi anak tertentu.",
  },
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

  if (!HERO[slug]) throw new Error(`${slug}: hero belum ditentukan`);
  let image = null;
  {
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
    image,
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
    console.log(`${slug}: ${html.length} B, faq ${a.faq.length}, sumber ${a.sources.length}, related ${a.related.length}, hero ${a.image.w}x${a.image.h}`);
  }
})().catch((e) => { console.error(e); process.exit(1); });

#!/usr/bin/env node
'use strict';

// One-time generator for artikel/classroom-management-kelas-inklusi.html
// (catchup 2026-09-25, kartu S662vORX). Canonical shell via scripts/lib/article-shell.js.
// YMYL pendidikan: every regulatory statement was checked against the official text:
// - Permendikbudristek 48/2023 (Pasal 12 ayat 3-6, Lampiran II huruf C disabilitas mental
//   butir 1, 4, 14; Lampiran II disabilitas rungu butir 10). Status on peraturan.bpk.go.id:
//   no "Dicabut dengan" entry (still in force) on 2026-09-25.
// - Panduan Pelaksanaan Pendidikan Inklusif (BSKAP 2022), Bab Pelaksanaan bagian
//   B. Manajemen Kelas (hlm. 32-33), prinsip adaptasi kurikulum/instruksional/lingkungan (hlm. 4-5),
//   bagian Teman Sebaya (hlm. 38).
// - IES/WWC Practice Guide NCEE 2008-012 "Reducing Behavior Problems in the Elementary School
//   Classroom" (recommendations 1-4 and the checklist, p. 13, 22-25).
// - Center on PBIS: Classroom PBIS topic page and the 2022 practice brief "Strategies for
//   De-escalating Student Behavior in the Classroom" (phases + Table 2-4).
// - CEC/CEEDAR High-Leverage Practices (social/emotional/behavioral area).
// Permendiknas 70/2009 is NOT cited as current law (status Tidak Berlaku di JDIH, dicabut
// Pasal 43 Permendikbudristek 48/2023). Permendikbudristek 46/2023 is deliberately NOT cited:
// BPK lists it as "Dicabut dengan Permendikdasmen No. 6 Tahun 2026".
// Positioning vs existing articles (no cannibalization): co-teaching-dalam-kelas-inklusi and
// peer-tutoring-di-kelas-inklusi are spokes on one strategy each; this article is the hub on
// managing the whole inclusive classroom (tata ruang, aturan dan rutinitas, keterlibatan,
// penguatan perilaku, respons perilaku menantang, kerja tim) and links out to the spokes.
// Hero: real CC BY 4.0 photo (Indonesiagood, Wikimedia Commons), empty SD classroom, no people.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'classroom-management-kelas-inklusi';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const TITLE_TAG = 'Classroom Management Kelas Inklusi: Panduan Guru';
const META_DESC = 'Classroom management kelas inklusi: tata ruang, aturan dan rutinitas, penguatan perilaku, dan cara merespons perilaku menantang. Simak panduannya.';
const OG_TITLE = 'Classroom Management Kelas Inklusi: Tata Ruang, Rutinitas, dan Respons Perilaku';
const OG_DESC = 'Panduan classroom management kelas inklusi untuk guru dan orang tua: mengatur tempat duduk, mengajarkan aturan dan rutinitas, menjaga keterlibatan, menguatkan perilaku positif, dan meredakan perilaku menantang sesuai Panduan Pendidikan Inklusif dan Permendikbudristek 48/2023.';
const H1 = 'Classroom Management Kelas Inklusi: Tata Ruang, Rutinitas, dan Respons Perilaku';
const IMAGE_HERO = 'assets/images/artikel/ruang-kelas-sd-kosong-jombang-wikimedia.webp';
const IMAGE_HERO_ALT = 'Ruang kelas sekolah dasar yang kosong dilihat dari ambang pintu, berisi meja dan kursi kayu, kursi yang dinaikkan ke atas meja, serta hasil karya siswa yang ditempel di dinding';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25T08:00:00+07:00';
const DATE_MODIFIED = '2026-09-25T08:00:00+07:00';
const DATE_DISPLAY = '25 September 2026';

const CREDIT = {
  name: 'Indonesiagood',
  source: 'https://commons.wikimedia.org/wiki/File:SD_Ar-Rahman_Jombang_-_Kelas_2_SD.jpg',
  license: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  p48: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-kebudayaan-riset-dan-teknologi-nomor-48-tahun-2023-tentang-akomodasi-yang-layak-untuk-peserta-didik-penyandang-disabilitas-pada-satuan-pendidikan-anak-usia-dini-formal-pendidikan-dasar-pendidikan-menengah-dan-pendidikan-tinggi',
  p48bpk: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023',
  p70: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-nasional-nomor-70-tahun-2009-tentang-pendidikan-inklusif-bagi-peserta-didik-yang-memiliki-kelainan-dan-memiliki-potensi-kecerdasan-dan-atau-bakat-istimewa',
  panduan: 'https://kurikulum.kemendikdasmen.go.id/wp-content/uploads/2022/08/Panduan-Pelaksanaan-Pendidikan-Inklusif.pdf',
  wwc: 'https://ies.ed.gov/ncee/wwc/PracticeGuide/4',
  wwcPdf: 'https://ies.ed.gov/ncee/WWC/Docs/PracticeGuide/behavior_pg_092308.pdf',
  pbis: 'https://www.pbis.org/topics/classroom-pbis',
  deesc: 'https://www.pbis.org/resource/strategies-for-de-escalating-student-behavior-in-the-classroom',
  hlp: 'https://highleveragepractices.org/four-areas-practice-k-12'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa itu classroom management di kelas inklusi?',
    a: 'Classroom management di kelas inklusi adalah cara guru mengatur ruang, waktu, aturan, rutinitas, kegiatan belajar, dan respons terhadap perilaku supaya semua anak, termasuk anak berkebutuhan khusus, bisa hadir, terlibat, dan belajar dengan aman. Panduan Pelaksanaan Pendidikan Inklusif dari Kemendikbudristek (2022) membahasnya di bagian Manajemen Kelas, dengan dua faktor utama: mobilitas dan interaksi teman sekelas.'
  },
  {
    q: 'Di mana sebaiknya anak berkebutuhan khusus duduk di kelas?',
    a: 'Tidak ada satu posisi untuk semua anak. Panduan Pendidikan Inklusif memberi contoh: anak dengan hambatan penglihatan duduk dekat papan tulis, anak dengan hambatan pendengaran di baris depan agar mudah membaca gerak bibir guru, anak dengan hambatan gerak di baris pinggir dekat pintu, dan anak dengan ADHD dekat guru serta jauh dari benda berbahaya. Posisi akhirnya sebaiknya ditentukan dari hasil asesmen dan pengamatan guru.'
  },
  {
    q: 'Apakah anak ABK boleh diberi aturan kelas yang berbeda?',
    a: 'Aturan dasar kelas sebaiknya sama untuk semua anak, tetapi cara mengajarkan, mengingatkan, dan menguatkannya boleh disesuaikan, misalnya dengan gambar, pengulangan, atau pengingat pribadi. Penyesuaian lain seperti waktu istirahat atau posisi duduk yang lebih fleksibel termasuk bentuk akomodasi yang layak dalam Lampiran II Permendikbudristek 48/2023, diberikan sesuai rekomendasi hasil asesmen kebutuhan peserta didik.'
  },
  {
    q: 'Apa yang harus dilakukan guru saat anak tantrum di kelas?',
    a: 'Utamakan keselamatan anak dan teman-temannya, kurangi kata-kata dan tuntutan, beri ruang sambil tetap mengawasi, dan jaga agar guru sendiri tetap tenang. Center on PBIS menyebut saat krisis bukan waktunya membahas konsekuensi. Setelah anak tenang, barulah guru membantu anak kembali ke kegiatan dan mencatat pemicunya. Bila perilaku yang membahayakan terjadi berulang, minta dukungan GPK, psikolog, atau tim sekolah untuk menyusun rencana dukungan perilaku individual.'
  },
  {
    q: 'Apakah sistem token atau stiker efektif untuk kelas inklusi?',
    a: 'Panduan praktik What Works Clearinghouse (2008) menyebut sistem token individual dan kontingensi kelompok sebagai cara meningkatkan motivasi dan kepatuhan pada aturan kelas, dengan dukungan penelitian untuk program kontingensi kelompok. Panduan yang sama menganjurkan hadiah buatan seperti token dikurangi bertahap dan diganti bentuk penguatan lain serta konsekuensi alami, sehingga anak tidak bergantung pada hadiah.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Classroom Management Kelas Inklusi', item: CANONICAL }
  ]
};

const blogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: OG_TITLE,
  description: OG_DESC,
  image: {
    '@type': 'ImageObject',
    url: IMAGE_URL,
    width: 1000,
    height: 750,
    caption: 'Ruang kelas sekolah dasar yang kosong dengan meja kayu dan hasil karya siswa di dinding',
    creditText: `Foto: ${CREDIT.name} / Wikimedia Commons, ${CREDIT.license}`,
    author: { '@type': 'Person', name: CREDIT.name },
    license: CREDIT.licenseUrl,
    acquireLicensePage: CREDIT.source
  },
  author: {
    '@type': 'Person',
    '@id': `${SITE}/profil/bu-yupie-nurul-azkia#person`,
    name: 'Bu Yupie Nurul Azkia',
    url: `${SITE}/profil/bu-yupie-nurul-azkia`,
    image: `${SITE}/Team/Bu%20Yupie.webp`,
    jobTitle: 'Pendiri dan Pengajar Senior YUKA'
  },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE_PUBLISHED,
  dateModified: DATE_MODIFIED,
  inLanguage: 'id-ID',
  keywords: 'classroom management kelas inklusi, manajemen kelas inklusif, pengelolaan kelas inklusi, tata ruang kelas inklusi, aturan dan rutinitas kelas, perilaku menantang di kelas',
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a }
  }))
};

const faqHtml = faq.map(item => `
            <h3>${item.q}</h3>
            <p>${item.a}</p>`).join('\n');

const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- SEO Meta Tags -->
    <title>${TITLE_TAG}</title>
    <meta name="description" content="${META_DESC}">
    <meta name="keywords" content="classroom management kelas inklusi, manajemen kelas inklusif, pengelolaan kelas inklusi, tata ruang kelas inklusi, rutinitas kelas, perilaku menantang, YUKA">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${CANONICAL}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${CANONICAL}">
    <meta property="og:title" content="${OG_TITLE}">
    <meta property="og:description" content="${OG_DESC}">
    <meta property="og:image" content="${IMAGE_URL}">
    <meta property="og:image:alt" content="${IMAGE_HERO_ALT}">
    <meta property="og:locale" content="id_ID">
    <meta property="og:site_name" content="YUKA Indonesia">
    <meta property="article:published_time" content="${DATE_PUBLISHED}">
    <meta property="article:modified_time" content="${DATE_MODIFIED}">

    <!-- X / Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${OG_TITLE}">
    <meta name="twitter:description" content="${OG_DESC}">
    <meta name="twitter:image" content="${IMAGE_URL}">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"></noscript>

    <!-- Styles -->
    <link rel="stylesheet" href="../assets/css/style.min.css">

    <!-- BlogPosting Schema -->
    <script type="application/ld+json">${JSON.stringify(blogPosting)}</script>

    <!-- BreadcrumbList Schema -->
    <script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>

    <!-- FAQ Schema -->
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>

    <style>
        .article-header { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); padding: 8rem 0 4rem; color: var(--white); }
        .article-header h1 { color: var(--white) !important; }
        .article-header .breadcrumb a { color: rgba(255,255,255,0.8); }
        .article-header .breadcrumb .current { color: var(--white); }
        .article-meta { display: flex; gap: 2rem; margin-top: 1.5rem; flex-wrap: wrap; }
        .article-meta span { display: flex; align-items: center; gap: 0.5rem; color: rgba(255,255,255,0.9); font-size: 0.9rem; }
        .article-content { max-width: 800px; margin: 0 auto; padding: 3rem 1.5rem; }
        .article-featured-image { margin: -2rem auto 2rem; max-width: 600px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .article-featured-image img { width: 100%; height: auto; }
        .article-featured-image figcaption { padding: 0.6rem 1rem; font-size: 0.85rem; color: var(--gray-600); text-align: center; background: var(--gray-50); }
        .article-featured-image figcaption a { color: #1565C0; text-decoration: underline; }
        .article-body { font-size: 1.1rem; line-height: 1.9; color: var(--gray-700); }
        .article-body h2 { color: var(--primary); margin: 2.5rem 0 1rem; font-size: 1.75rem; }
        .article-body h3 { color: var(--gray-800); margin: 2rem 0 1rem; font-size: 1.35rem; }
        .article-body p { margin-bottom: 1.5rem; }
        .article-body ul, .article-body ol { margin: 1.5rem 0; padding-left: 2rem; }
        .article-body a { color: #1565C0; text-decoration: underline; text-underline-offset: 2px; }
        .article-body a:hover { color: #0D47A1; }
        .story-highlight { background: linear-gradient(135deg, #e3f2fd 0%, #fff 100%); border: 2px solid #2196F3; border-radius: 16px; padding: 2rem; margin: 2rem 0; }
        .story-highlight h3 { color: #1565C0; margin-top: 0; }
        .article-tags { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-200); }
        .article-tags a { background: var(--gray-100); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; color: var(--gray-600); }
        .article-tags a:hover { background: var(--primary); color: var(--white); }
        .article-share { display: flex; align-items: center; gap: 1rem; margin-top: 2rem; }
        .share-buttons { display: flex; gap: 0.5rem; }
        .share-btn { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--white); }
        .share-btn.whatsapp { background: #25D366; }
        .share-btn.facebook { background: #1877F2; }
        .toc { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 12px; padding: 1.5rem 2rem; margin: 2rem 0; }
        .toc h3 { margin-top: 0; color: var(--primary); font-size: 1.1rem; }
        .toc ol { margin: 0; padding-left: 1.5rem; }
        .toc li { margin-bottom: 0.5rem; }
        .toc a { color: var(--gray-700); text-decoration: none; }
        .toc a:hover { color: var(--primary); }
        .info-box { background: #fff3e0; border-left: 4px solid #ff9800; padding: 1.5rem; margin: 2rem 0; border-radius: 0 12px 12px 0; }
        .info-box h4 { color: #e65100; margin-top: 0; }
        .related-articles { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0; }
        .related-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: 12px; padding: 1.5rem; transition: box-shadow 0.3s; }
        .related-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
        .related-card h4 { font-size: 1rem; margin: 0 0 0.5rem; }
        .related-card a { color: var(--primary); text-decoration: none; font-weight: 600; }
        .related-card p { font-size: 0.9rem; color: var(--gray-600); margin: 0; }
        .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; margin: 1.5rem 0; }
        .classification-table { width: 100%; min-width: 560px; border-collapse: collapse; font-size: 0.98rem; }
        .classification-table th, .classification-table td { border: 1px solid var(--gray-200); padding: 0.75rem 1rem; text-align: left; vertical-align: top; }
        .classification-table th { background: var(--primary); color: var(--white); font-weight: 600; }
        .classification-table tr:nth-child(even) { background: var(--gray-50); }
    </style>
    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16.png">
    <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
</head>
<body>
    <nav class="navbar" id="navbar">
        <div class="container">
            <a href="../" class="navbar-brand">
                <img src="../Logo/Logo.webp" alt="YUKA - Yayasan Ukhuwah Kaffah Amanatullah" class="brand-logo" width="180" height="60">
            </a>
            <div class="navbar-menu" id="navbarMenu">
                <a href="../">Beranda</a>
                <a href="../tentang">Tentang</a>
                <a href="../program">Program</a>
                <a href="../galeri">Galeri</a>
                <a href="../blog" class="active">Artikel</a>
                <a href="../kontak">Kontak</a>
                <a href="../donasi" class="btn btn-primary btn-sm">Donasi</a>
            </div>
            <button class="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation">
                <span></span><span></span><span></span>
            </button>
        </div>
    </nav>

    <header class="article-header">
        <div class="container">
            <div class="breadcrumb">
                <a href="../">Beranda</a>
                <span class="separator">/</span>
                <a href="../blog">Artikel</a>
                <span class="separator">/</span>
                <span class="current">Classroom Management Kelas Inklusi</span>
            </div>
            <span class="card-category" style="background: var(--secondary); color: var(--gray-900); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; display: inline-block; margin: 1rem 0;">Pendidikan</span>
            <h1 style="font-size: 2.5rem; max-width: 800px;">${H1}</h1>
            <div class="article-meta">
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${DATE_DISPLAY}</span>
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>12 menit baca</span>
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Tim YUKA</span>
            </div>
        </div>
    </header>

    <div class="container">
        <figure class="article-featured-image">
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="750" fetchpriority="high">
            <figcaption>Ruang kelas sekolah dasar di Jombang, Jawa Timur, sebelum siswa datang. Susunan meja, jalur bergerak, dan apa yang ditempel di dinding adalah bagian pertama dari manajemen kelas.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Classroom management kelas inklusi adalah cara guru mengatur ruang, waktu, aturan, rutinitas, kegiatan belajar, dan respons terhadap perilaku supaya semua anak, termasuk anak berkebutuhan khusus (ABK), bisa hadir, terlibat, dan belajar dengan aman di kelas yang sama.</strong> Kuncinya ada pada pencegahan: kelas yang tertata, aturan yang diajarkan dan dilatih, serta kegiatan yang sesuai kemampuan anak membuat perilaku menantang jauh lebih jarang muncul. Saat perilaku menantang tetap terjadi, guru sudah punya langkah yang disiapkan.</p>

            <p>Artikel ini membahas manajemen kelas inklusi secara utuh, dari tata ruang sampai cara meredakan anak yang sedang meledak emosinya. Dua strategi yang sering dipakai di dalamnya, yaitu <a href="co-teaching-dalam-kelas-inklusi">co-teaching</a> dan <a href="peer-tutoring-di-kelas-inklusi">peer tutoring</a>, punya artikel tersendiri.</p>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini berisi informasi umum untuk guru dan orang tua, bukan pengganti penanganan tenaga profesional. Perilaku yang membahayakan diri sendiri atau orang lain, atau yang terus berulang walau strategi kelas sudah dijalankan, perlu ditangani bersama guru pembimbing khusus, psikolog, atau tim tumbuh kembang. YUKA tidak menegakkan diagnosis.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu classroom management di kelas inklusi</a></li>
                    <li><a href="#dasar">Dasar aturan dan panduan resmi</a></li>
                    <li><a href="#tata-ruang">Tata ruang dan tempat duduk</a></li>
                    <li><a href="#aturan">Aturan dan rutinitas yang diajarkan</a></li>
                    <li><a href="#keterlibatan">Kegiatan belajar yang membuat anak terlibat</a></li>
                    <li><a href="#penguatan">Mengajarkan dan menguatkan perilaku positif</a></li>
                    <li><a href="#perilaku">Saat perilaku menantang muncul</a></li>
                    <li><a href="#tim">Kerja tim: GPK, teman sebaya, dan orang tua</a></li>
                    <li><a href="#kesalahan">Kesalahan yang sering terjadi</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Classroom Management di Kelas Inklusi</h2>
            <p>Center on PBIS (Positive Behavioral Interventions and Supports) menyebut ${ext(L.pbis, 'classroom PBIS')} sebagai penggunaan praktik berbasis bukti untuk membangun lingkungan belajar yang dapat diprediksi, positif, efektif, dan adil, sehingga setiap siswa mendapat tingkat dukungan yang ia butuhkan. Istilah lainnya adalah manajemen kelas yang positif dan proaktif. Fokusnya pada strategi pencegahan dan iklim kelas tempat setiap anak merasa diterima dan dihargai.</p>
            <p>Di Indonesia, ${ext(L.panduan, 'Panduan Pelaksanaan Pendidikan Inklusif')} yang diterbitkan Badan Standar, Kurikulum, dan Asesmen Pendidikan Kemendikbudristek (2022) punya bagian khusus berjudul Manajemen Kelas. Panduan itu menyebut dua faktor yang harus diperhatikan saat mengelola kelas inklusif:</p>
            <ul>
                <li><strong>Faktor mobilitas:</strong> kelas harus aman untuk setiap anak tanpa terkecuali, dan sarana prasarananya aksesibel sehingga anak mudah bergerak.</li>
                <li><strong>Faktor interaksi teman sekelas:</strong> guru mendorong teman-teman lain untuk mendukung siswa berkebutuhan khusus agar aktif berpartisipasi, serta bekerja sama dengan orang tua untuk menciptakan kelas yang lebih hidup.</li>
            </ul>
            <p>Bedanya dengan kelas biasa bukan pada aturan yang lebih longgar, melainkan pada keragaman kebutuhan yang harus diantisipasi. Satu kelas bisa berisi anak dengan hambatan pendengaran, anak dengan <a href="adhd-adalah">ADHD</a>, anak <a href="autisme-adalah">autis</a> yang sensitif terhadap suara, dan anak yang belajar lebih lambat. Manajemen kelas yang baik membuat semuanya bisa berjalan bersamaan.</p>

            <h2 id="dasar">Dasar Aturan dan Panduan Resmi</h2>
            <p>Panduan Pendidikan Inklusif menyebut tiga dimensi penyesuaian yang harus diperhatikan satuan pendidikan: kurikulum, instruksional (cara dan metode mengajar), dan lingkungan belajar. Adaptasi lingkungan belajar berkaitan dengan pengaturan suasana pembelajaran, yaitu di mana, kapan, dan bersama siapa pembelajaran dilakukan, termasuk ketersediaan alat bantu dan sumber belajar yang sesuai kebutuhan peserta didik.</p>
            <p>${ext(L.p48, 'Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas')} memberi dasar hukumnya:</p>
            <ul>
                <li><strong>Pasal 12 ayat (3) sampai (6):</strong> bentuk akomodasi yang layak diberikan berdasarkan hasil asesmen fungsional yang dilaksanakan sekolah dan difasilitasi Unit Layanan Disabilitas (ULD). Pemenuhannya dilakukan melalui konsultasi yang melibatkan peserta didik, orang tua/wali, dan ULD.</li>
                <li><strong>Lampiran II, peserta didik penyandang disabilitas mental:</strong> akomodasinya antara lain penyediaan ruang untuk melepas ketegangan atau ruang relaksasi, fleksibilitas proses pembelajaran, serta fleksibilitas posisi duduk dan waktu istirahat saat mengikuti pembelajaran, sesuai rekomendasi hasil asesmen kebutuhan peserta didik.</li>
                <li><strong>Lampiran II, peserta didik penyandang disabilitas rungu:</strong> fleksibilitas posisi duduk sesuai kebutuhan dan kemampuan anak, dengan posisi pendidik menghadap peserta didik saat menyampaikan materi, untuk menjaga keterarahwajahan dan keterarahsuaraan.</li>
            </ul>
            <p>Artinya, pengaturan tempat duduk, sudut tenang, dan jeda istirahat bukan sekadar kebaikan hati guru, tetapi bagian dari akomodasi yang layak yang bisa diminta orang tua. Cara sekolah memetakan kebutuhan itu dibahas di artikel <a href="asesmen-abk">asesmen ABK</a>.</p>
            <p><em>Catatan:</em> sebagian tulisan di internet masih merujuk Permendiknas Nomor 70 Tahun 2009 tentang pendidikan inklusif. ${ext(L.p70, 'JDIH Kemendikdasmen')} mencatat peraturan itu berstatus "Tidak Berlaku", dan ketentuannya tentang peserta didik yang memiliki kelainan dicabut oleh Pasal 43 Permendikbudristek 48/2023. Karena itu artikel ini tidak memakainya sebagai rujukan.</p>

            <h2 id="tata-ruang">Tata Ruang dan Tempat Duduk</h2>
            <p>Panduan Pendidikan Inklusif memberi contoh pengaturan kelas yang baik. Tabel berikut merangkumnya:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Kebutuhan anak</th><th>Contoh pengaturan menurut Panduan Pendidikan Inklusif</th><th>Alasannya</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Hambatan penglihatan</strong></td><td>Duduk dekat papan tulis atau dekat guru; guru mengucapkan dengan jelas apa yang sedang ditulis atau dibaca</td><td>Anak <em>low vision</em> tetap bisa mengikuti isi papan tulis</td></tr>
                    <tr><td><strong>Hambatan pendengaran</strong></td><td>Duduk di baris depan</td><td>Mudah membaca gerak bibir guru</td></tr>
                    <tr><td><strong>Hambatan gerak</strong></td><td>Duduk di baris pinggir dekat pintu; tidak memakai tangga bila ada anak berkursi roda; mebel yang fleksibel</td><td>Mudah keluar masuk kelas dan meletakkan tongkat atau kursi roda</td></tr>
                    <tr><td><strong>ADHD</strong></td><td>Duduk dekat guru dan dijauhkan dari benda-benda berbahaya</td><td>Guru mudah memberi pengingat dan anak lebih aman</td></tr>
                </tbody>
            </table>
            </div>
            <p>Selain tempat duduk, perhatikan juga hal-hal praktis berikut:</p>
            <ul>
                <li><strong>Jalur bergerak yang lapang.</strong> Guru perlu bisa mendekati setiap meja, dan anak berkursi roda perlu bisa menjangkau rak serta pintu.</li>
                <li><strong>Sudut tenang.</strong> Satu sudut kecil dengan bantal atau kursi, jauh dari pintu dan jendela ramai, memberi tempat bagi anak yang butuh jeda. Ini sejalan dengan akomodasi ruang relaksasi dalam Lampiran II Permendikbudristek 48/2023.</li>
                <li><strong>Dinding yang tidak terlalu ramai.</strong> Tempelan yang menumpuk bisa mengganggu anak yang mudah terdistraksi. Pajang yang sedang dipakai, seperti jadwal hari ini dan aturan kelas.</li>
                <li><strong>Tempat alat yang jelas.</strong> Label bergambar di rak dan kotak membantu anak mandiri mengambil dan mengembalikan alat.</li>
            </ul>

            <h2 id="aturan">Aturan dan Rutinitas yang Diajarkan</h2>
            <p>Aturan kelas tidak cukup ditempel. ${ext(L.wwc, 'Panduan praktik What Works Clearinghouse (WWC)')} berjudul <em>Reducing Behavior Problems in the Elementary School Classroom</em> (Institute of Education Sciences, 2008) merekomendasikan guru mengubah lingkungan belajar untuk mengurangi perilaku bermasalah, dengan tingkat bukti kuat. Langkah pertamanya adalah meninjau ulang, melatih ulang, dan menguatkan harapan perilaku di kelas. Panduan itu menganjurkan:</p>
            <ul>
                <li>Mengajarkan harapan perilaku secara aktif, terutama untuk situasi seperti berpindah kegiatan, gangguan rutinitas (misalnya guru pengganti), bekerja sendiri dan berkelompok, serta kembali dari istirahat.</li>
                <li>Untuk kelas awal, melatih harapan perilaku setiap hari pada minggu-minggu pertama sekolah, lalu menyisihkan waktu singkat sekitar 10 menit dalam jadwal mingguan atau saat diperlukan.</li>
                <li>Memakai pengingat visual, misalnya gambar anak yang sedang menunjukkan perilaku yang diharapkan, seperti duduk di meja atau berbaris.</li>
                <li>Mengurangi pengingat secara bertahap setelah anak menguasai rutinitas, sehingga rutinitas dipicu oleh kejadian biasa seperti bunyi bel.</li>
            </ul>
            <p>Panduan Pendidikan Inklusif menekankan hal serupa dalam strategi instruksi dan bantuan: memakai bantuan gambar dan menjelaskan aturan berulang-ulang. Untuk anak yang butuh prediktabilitas tinggi, seperti banyak anak autis, <a href="jadwal-visual-anak-autis">jadwal visual</a> yang menunjukkan urutan kegiatan hari itu sangat membantu. Panduan yang sama bahkan mencontohkan lagu berisi rutinitas harian untuk anak TK.</p>
            <p>Beberapa prinsip membuat aturan kelas inklusi:</p>
            <ol>
                <li><strong>Sedikit dan jelas.</strong> Tiga sampai lima aturan lebih mudah diingat daripada sepuluh.</li>
                <li><strong>Dirumuskan positif.</strong> "Berjalan di dalam kelas" lebih mudah dipahami daripada "jangan berlari", karena memberi tahu anak apa yang harus dilakukan.</li>
                <li><strong>Didampingi gambar.</strong> Tiap aturan punya simbol atau foto, sehingga anak yang belum lancar membaca atau memiliki hambatan bahasa tetap bisa memahaminya.</li>
                <li><strong>Diajarkan seperti pelajaran.</strong> Beri contoh, minta anak mencoba, lalu beri umpan balik.</li>
                <li><strong>Selaras dengan aturan sekolah.</strong> WWC mengingatkan aturan kelas sebaiknya mendukung aturan sekolah secara keseluruhan.</li>
            </ol>

            <h2 id="keterlibatan">Kegiatan Belajar yang Membuat Anak Terlibat</h2>
            <p>Banyak perilaku menantang muncul saat tugas terlalu sulit, terlalu mudah, atau terlalu lama. WWC merekomendasikan guru menyesuaikan atau memvariasikan strategi mengajar untuk meningkatkan peluang anak berhasil dan terlibat secara akademik, serta menata lingkungan agar kelas tetap bergerak lancar. Untuk masalah perilaku yang menetap, guru dianjurkan mengenali dan mengubah hal-hal di lingkungan yang mendahului perilaku itu, seperti tata letak kelas, agenda, prosedur dan rutinitas, serta strategi mengajar.</p>
            <p>${ext(L.deesc, 'Center on PBIS (2022)')} juga menyebut pengajaran akademik yang menarik, sesuai tingkat kemampuan siswa, dan memberi kesempatan merespons yang sering dan beragam sebagai salah satu strategi pencegahan perilaku tidak fokus dan mengganggu. Di kelas inklusi, praktiknya bisa berupa:</p>
            <ul>
                <li><strong>Tugas yang dipecah.</strong> Satu lembar kerja panjang dipecah menjadi beberapa bagian pendek dengan jeda singkat di antaranya.</li>
                <li><strong>Pilihan cara menjawab.</strong> Menunjuk, menulis, menjawab lisan, atau memakai kartu jawaban.</li>
                <li><strong>Waktu disesuaikan.</strong> Panduan Pendidikan Inklusif menyarankan aktivitas mempertimbangkan respons anak dan waktu, apakah waktu yang diberikan sudah sesuai kebutuhan anak.</li>
                <li><strong>Media yang disesuaikan.</strong> Panduan yang sama mencontohkan pensil yang dibuat lebih besar atau dilapisi <em>playdough</em>, serta memakai lebih banyak gambar daripada perintah lisan untuk anak dengan hambatan pendengaran atau disleksia.</li>
                <li><strong>Materi sesuai rencana individual.</strong> Tujuan belajar anak ABK sebaiknya berasal dari <a href="program-pembelajaran-individual">program pembelajaran individual (PPI)</a>, bukan sekadar menyalin target kelas.</li>
            </ul>
            <p>Dua guru di satu kelas lewat <a href="co-teaching-dalam-kelas-inklusi">co-teaching</a> dan pembelajaran berpasangan lewat <a href="peer-tutoring-di-kelas-inklusi">peer tutoring</a> adalah cara lain menambah kesempatan setiap anak untuk aktif.</p>

            <h2 id="penguatan">Mengajarkan dan Menguatkan Perilaku Positif</h2>
            <p>Rekomendasi ketiga WWC, juga dengan tingkat bukti kuat, adalah mengajarkan dan menguatkan keterampilan baru untuk meningkatkan perilaku yang sesuai dan menjaga iklim kelas tetap positif. Langkahnya:</p>
            <ol>
                <li><strong>Kenali di mana anak butuh pengajaran eksplisit.</strong> Misalnya cara meminta bantuan, menunggu giliran, atau menyelesaikan perselisihan.</li>
                <li><strong>Ajarkan dengan contoh, latihan, dan umpan balik,</strong> sama seperti mengajarkan materi pelajaran.</li>
                <li><strong>Kelola konsekuensi,</strong> sehingga penguatan diberikan untuk perilaku yang sesuai dan tidak diberikan untuk perilaku yang tidak sesuai.</li>
            </ol>
            <p>WWC mencontohkan sistem token individual, ketika anak yang mengikuti harapan tertentu mendapat poin yang bisa ditukar dengan kegiatan yang disukai, serta kontingensi kelompok, ketika hadiah bergantung pada perilaku seluruh kelas. Panduan itu menyebut penelitian telah menunjukkan efektivitas program kontingensi kelompok untuk mencegah dan menangani masalah perilaku. Namun hadiah buatan seperti token sebaiknya dikurangi bertahap dan diganti bentuk penguatan lain serta konsekuensi alami, misalnya anak yang cepat membereskan meja boleh memakai sisa waktunya untuk kegiatan favorit. Contoh penerapannya ada di artikel <a href="reward-system-efektif-untuk-anak-autis">reward system untuk anak autis</a>.</p>
            <p>Pujian yang paling berguna adalah pujian spesifik. "Terima kasih sudah mengangkat tangan dan menunggu dipanggil" memberi tahu anak persis perilaku mana yang dihargai, berbeda dengan "pintar" yang tidak menjelaskan apa-apa. Anak yang butuh latihan lebih terstruktur untuk keterampilan sosial bisa dibantu dengan <a href="social-skills-training-anak-autis">social skills training</a>.</p>

            <h2 id="perilaku">Saat Perilaku Menantang Muncul</h2>
            <h3>Pahami dulu polanya</h3>
            <p>Rekomendasi pertama WWC adalah mengenali secara spesifik perilaku bermasalah dan kondisi yang memicu serta menguatkannya. Caranya: jelaskan perilaku itu secara konkret beserta dampaknya pada belajar, amati dan catat seberapa sering dan dalam konteks apa perilaku itu muncul, lalu kenali apa yang mendahului dan apa yang terjadi sesudahnya. Anak yang selalu keluar kelas saat pelajaran menulis mungkin sedang menghindari tugas yang terasa terlalu berat, bukan sekadar "nakal". Kalau pemicunya tugas yang terlalu berat, tugasnya yang perlu diubah.</p>
            <h3>Empat fase eskalasi</h3>
            <p>${ext(L.deesc, 'Practice brief Center on PBIS tentang de-eskalasi (2022)')} menggambarkan empat fase: pencegahan, eskalasi, krisis, serta pemulihan dan restorasi. Strategi yang efektif berbeda di tiap fase:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Fase</th><th>Tanda-tanda</th><th>Contoh strategi (Center on PBIS)</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Pencegahan</strong></td><td>Anak tenang dan bisa mengikuti kegiatan</td><td>Mengajarkan dan rutin melatih strategi menenangkan diri saat semua anak tenang, seperti napas dalam atau meminta istirahat; memakai skala perasaan 0 sampai 10</td></tr>
                    <tr><td><strong>Eskalasi (agitasi)</strong></td><td>Perilaku sedikit meningkat, misalnya terus bicara di luar giliran setelah diingatkan</td><td>Memberi 2 sampai 3 pilihan yang dapat diterima, pengalihan singkat dengan nada netral dan bila perlu secara pribadi, ko-regulasi dengan menamai emosi anak, dan mengingatkan strategi menenangkan diri yang sudah dilatih</td></tr>
                    <tr><td><strong>Eskalasi (akselerasi)</strong></td><td>Perilaku lebih mengganggu, misalnya berkata kasar atau merobek kertas tugas</td><td>Pengingat singkat verbal atau visual, memberi ruang sambil tetap mengawasi, mempersilakan anak ke tempat jeda, ko-regulasi dengan kata-kata minimal</td></tr>
                    <tr><td><strong>Krisis</strong></td><td>Puncak; anak tidak bisa mengendalikan diri dan mungkin membahayakan</td><td>Menjaga keselamatan sesuai protokol sekolah, menjauhkan benda berbahaya, memakai kata dan tuntutan seminimal mungkin, guru menjaga dirinya tetap tenang</td></tr>
                    <tr><td><strong>Pemulihan</strong></td><td>Anak lelah, diam, atau malu</td><td>Membantu anak kembali ke rutinitas; pemulihan bisa berlangsung beberapa menit sampai sisa hari sekolah</td></tr>
                </tbody>
            </table>
            </div>
            <p>Center on PBIS menegaskan saat krisis bukan waktunya membahas konsekuensi, dan strategi di atas tidak menggantikan pelatihan penanganan krisis. Brief itu juga mendorong sekolah mengurangi ketergantungan pada cara reaktif yang menghukum atau mengeluarkan anak dari kelas, dan beralih ke pendekatan yang lebih aman, mendidik, dan inklusif. Bagi anak dengan kebutuhan dukungan perilaku yang intensif, tim sekolah menyusun rencana dukungan perilaku individual berdasarkan asesmen fungsional perilaku.</p>
            <p>Untuk anak ADHD secara khusus, strategi kelasnya kami uraikan di artikel <a href="strategi-mengajar-anak-adhd-di-sekolah">strategi mengajar anak ADHD di sekolah</a>. Anak yang perilakunya dipicu kebutuhan sensorik, misalnya menutup telinga atau terus bergerak, mungkin terbantu oleh program <a href="sensori-integrasi">sensori integrasi</a> dari terapis.</p>

            <h2 id="tim">Kerja Tim: GPK, Teman Sebaya, dan Orang Tua</h2>
            <p>Tidak ada guru yang bisa mengelola kelas inklusi sendirian. WWC merekomendasikan guru bekerja sama dengan rekan guru, membangun kemitraan dengan ahli perilaku di sekolah maupun di luar sekolah ketika masalahnya cukup serius, dan mendorong orang tua menjadi mitra aktif dalam mengajarkan dan menguatkan perilaku yang sesuai.</p>
            <ul>
                <li><strong>Guru pendamping.</strong> Panduan Pendidikan Inklusif menyebut penggunaan <em>helper</em>, guru lain, <a href="shadow-teacher-adalah">shadow teacher</a>, atau <a href="gpk-adalah">guru pembimbing khusus (GPK)</a> bila diperlukan. Sepakati siapa melakukan apa, supaya pendamping tidak justru membuat anak terpisah dari teman-temannya.</li>
                <li><strong>Teman sebaya.</strong> Panduan yang sama menyebut teman sebaya sebagai hal yang paling berkontribusi bagi keberhasilan pendidikan inklusif. Ajarkan seluruh kelas cara membantu tanpa mengambil alih, dan beri anak ABK peran yang bermakna.</li>
                <li><strong>Orang tua.</strong> Bagikan aturan dan jadwal kelas ke rumah, sepakati satu atau dua kalimat pengingat yang sama di rumah dan di sekolah, dan kabarkan kemajuan kecil, bukan hanya masalah. Peran keluarga dibahas lebih jauh di artikel <a href="peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.</li>
            </ul>
            <p>${ext(L.hlp, 'High-Leverage Practices')} dari Council for Exceptional Children dan CEEDAR Center merangkum tujuan semua ini: guru pendidikan khusus perlu membangun lingkungan belajar yang konsisten, teratur, dan saling menghormati, karena lingkungan seperti itu menjadi landasan bagi praktik mengajar lainnya.</p>

            <h2 id="kesalahan">Kesalahan yang Sering Terjadi</h2>
            <ul>
                <li><strong>Menempel aturan tanpa pernah mengajarkannya.</strong> Anak ABK sering butuh latihan berulang dan contoh nyata, bukan sekadar poster.</li>
                <li><strong>Menunggu masalah muncul.</strong> WWC menekankan pencegahan lewat lingkungan dan pengajaran, bukan hanya reaksi setelah kejadian.</li>
                <li><strong>Menyamakan tempat duduk semua anak.</strong> Posisi yang tepat untuk anak dengan hambatan pendengaran belum tentu tepat untuk anak yang mudah terdistraksi.</li>
                <li><strong>Menghukum perilaku tanpa mencari fungsinya.</strong> Mengeluarkan anak yang ingin menghindari tugas dari kelas justru memberinya apa yang ia cari.</li>
                <li><strong>Hadiah yang tidak pernah dikurangi.</strong> Token yang terus diberikan tanpa rencana pengurangan membuat anak bergantung pada hadiah.</li>
                <li><strong>Pendamping yang menempel terus.</strong> Shadow teacher atau GPK yang selalu duduk di samping anak bisa menghalangi interaksi dengan teman sebaya.</li>
            </ul>

            <div class="story-highlight">
                <h3>Kelas Inklusi di YUKA</h3>
                <p style="margin-bottom:0;">Di <a href="/sekolah-inklusi-sleman">Sekolah Inklusi Taruna Imani</a> yang dikelola YUKA di Sleman, anak berkebutuhan khusus belajar bersama teman-temannya. Bila Ayah dan Bunda sedang menimbang sekolah yang cocok, artikel <a href="anak-abk-harus-sekolah-dimana">anak ABK harus sekolah dimana</a> dan <a href="pendidikan-inklusi">pendidikan inklusi</a> bisa menjadi titik awal. Untuk pemeriksaan psikologis atau medis, kami akan menyarankan tenaga profesional yang sesuai.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="co-teaching-dalam-kelas-inklusi">Co-Teaching dalam Kelas Inklusi</a></h4>
                    <p>Model, pembagian peran, dan evaluasi dua guru dalam satu kelas.</p>
                </div>
                <div class="related-card">
                    <h4><a href="peer-tutoring-di-kelas-inklusi">Peer Tutoring di Kelas Inklusi</a></h4>
                    <p>Langkah dan etika pembelajaran berpasangan antarsiswa.</p>
                </div>
                <div class="related-card">
                    <h4><a href="jadwal-visual-anak-autis">Jadwal Visual Anak Autis</a></h4>
                    <p>Cara membuat urutan kegiatan bergambar yang membantu anak memprediksi harinya.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#ClassroomManagement</a>
            <a href="#">#KelasInklusi</a>
            <a href="#">#PendidikanInklusi</a>
            <a href="#">#ManajemenKelas</a>
            <a href="#">#GuruABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.p48, '<strong>Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</strong> (Pasal 12, Pasal 43, dan Lampiran II), JDIH Kemendikdasmen')}; status berlaku dicek di ${ext(L.p48bpk, 'JDIH BPK')}</li>
              <li>${ext(L.panduan, '<strong>Panduan Pelaksanaan Pendidikan Inklusif</strong>, Badan Standar, Kurikulum, dan Asesmen Pendidikan Kemendikbudristek, 2022 (bagian Prinsip, Manajemen Kelas, dan Teman Sebaya)')}</li>
              <li>${ext(L.p70, '<strong>Permendiknas Nomor 70 Tahun 2009 tentang Pendidikan Inklusif</strong>, berstatus Tidak Berlaku di JDIH Kemendikdasmen')}</li>
              <li>${ext(L.wwcPdf, '<strong>Reducing Behavior Problems in the Elementary School Classroom</strong> (NCEE 2008-012), What Works Clearinghouse, Institute of Education Sciences, 2008')}</li>
              <li>${ext(L.pbis, '<strong>Classroom PBIS</strong>, Center on PBIS')}</li>
              <li>${ext(L.deesc, '<strong>Strategies for De-escalating Student Behavior in the Classroom</strong>, Center on PBIS, September 2022')}</li>
              <li>${ext(L.hlp, '<strong>High-Leverage Practices: Four Areas of Practice (K-12)</strong>, Council for Exceptional Children dan CEEDAR Center')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti asesmen, diagnosis, atau rencana penanganan dari tenaga profesional</strong>. Regulasi dan panduan dicek pada 25 September 2026 dan dapat berubah.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Classroom%20Management%20Kelas%20Inklusi%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.030-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.870 9.870 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.030 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.480-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.830c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.470h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=Classroom%20Management%20Kelas%20Inklusi&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            </div>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
</article>

    <section class="section bg-primary" style="padding: 4rem 0;">
        <div class="container text-center">
            <h2 style="color: var(--white); margin-bottom: 1rem;">Bantu Pendidikan Anak Berkebutuhan Khusus</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 2rem;">Setiap donasi Anda membantu anak-anak dengan beragam kemampuan mendapatkan pendidikan dan pendampingan yang sesuai kebutuhan mereka.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="../donasi" class="btn btn-secondary">Donasi Sekarang</a>
                <a href="https://wa.me/6281229912332?text=Halo%20YUKA%2C%20saya%20ingin%20bertanya%20tentang%20kelas%20inklusi%20untuk%20anak%20berkebutuhan%20khusus" target="_blank" class="btn btn-outline-light">Hubungi via WhatsApp</a>
            </div>
        </div>
    </section>
    <script src="../assets/js/main.min.js" defer></script>
</body>
</html>`;

if (/—/.test(html)) throw new Error('em dash found in output');

const finalHtml = ensureArticleShell(html);
const missing = missingShellParts(finalHtml);
if (missing.length) throw new Error('shell gate failed: ' + missing.join(', '));

fs.writeFileSync(OUT, finalHtml, 'utf8');
console.log('Wrote', OUT, finalHtml.length, 'bytes');

const bodyMatch = finalHtml.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<div class="article-tags">/);
const text = (bodyMatch ? bodyMatch[1] : finalHtml)
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
console.log('Approx word count (article body):', text.split(' ').filter(Boolean).length);

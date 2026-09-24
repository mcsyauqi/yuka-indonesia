#!/usr/bin/env node
'use strict';

// One-time generator for artikel/apakah-gdd-sama-dengan-autis.html (catchup 2026-09-25, kartu optd5III)
// Follows the canonical shell rule in CLAUDE.md: footer/GA4/analytics come
// from scripts/lib/article-shell.js via ensureArticleShell(), never retyped.
// YMYL: every clinical statement links inline to DSM-5 (via CDC), AAP, IDAI,
// NICE, or Kemenkes. The article does not diagnose; it points to evaluation.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'apakah-gdd-sama-dengan-autis';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const TITLE_TAG = 'Apakah GDD Sama dengan Autis? Ini Bedanya Menurut Ahli';
const META_DESC = 'Apakah GDD sama dengan autis? Tidak. Pahami beda GDD dan autisme menurut DSM-5, AAP, dan IDAI, tanda yang perlu dicermati, dan kapan anak dievaluasi.';
const OG_TITLE = 'Apakah GDD Sama dengan Autis? Perbedaan, Kaitan, dan Kapan Anak Perlu Dievaluasi';
const OG_DESC = 'GDD dan autisme adalah dua kondisi berbeda yang bisa muncul bersamaan. Penjelasan berdasarkan DSM-5, American Academy of Pediatrics, IDAI, NICE, dan CDC, plus langkah skrining di Indonesia.';
const H1 = 'Apakah GDD Sama dengan Autis? Perbedaan, Kaitan, dan Kapan Perlu Evaluasi';
const IMAGE_HERO = 'Dokumentasi/candi-plaosan-rombongan-wisata-candi-borobudur-080.webp';
const IMAGE_HERO_ALT = 'Rombongan siswa, guru, dan pendamping YUKA berkaus merah muda berfoto di tangga Candi Plaosan saat wisata edukasi';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25';
const DATE_MODIFIED = '2026-09-25T00:30:00+07:00';
const DATE_DISPLAY = '25 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const faq = [
  {
    q: 'Apakah GDD sama dengan autis?',
    a: 'Tidak. GDD (global developmental delay atau keterlambatan perkembangan umum) berarti anak tertinggal secara bermakna di dua ranah perkembangan atau lebih, misalnya motorik dan bahasa. Autisme adalah kondisi perkembangan saraf yang ditandai hambatan komunikasi dan interaksi sosial yang menetap, ditambah pola perilaku atau minat yang terbatas dan berulang. Keduanya berbeda, tetapi bisa dialami anak yang sama.'
  },
  {
    q: 'Apakah anak GDD pasti autis?',
    a: 'Tidak. Banyak anak dengan GDD tidak memenuhi kriteria autisme. Kriteria DSM-5 yang dimuat CDC justru mensyaratkan bahwa gejala autisme tidak lebih tepat dijelaskan oleh GDD atau disabilitas intelektual. Sebaliknya, sebagian anak autis juga mengalami keterlambatan di banyak ranah, jadi hanya evaluasi oleh dokter anak atau psikolog yang bisa memastikannya.'
  },
  {
    q: 'Apakah GDD bisa hilang atau mengejar ketertinggalan?',
    a: 'Bisa berbeda-beda. Menurut IDAI, anak dengan keterlambatan perkembangan umum tidak selalu mengalami disabilitas intelektual di kemudian hari, dan laporan klinis American Academy of Pediatrics menyebut keterlambatan yang ringan bisa bersifat sementara. Karena itu GDD dievaluasi ulang seiring anak bertambah usia, sambil stimulasi dan terapi tetap berjalan.'
  },
  {
    q: 'Di usia berapa anak bisa diskrining autisme?',
    a: 'American Academy of Pediatrics merekomendasikan skrining autisme terstandar pada usia 18 dan 24 bulan, di samping skrining perkembangan umum pada usia 9, 18, dan 30 bulan. Di Indonesia, kuesioner M-CHAT versi revisi termasuk instrumen dalam program SDIDTK Kemenkes. Hasil skrining positif artinya perlu evaluasi lanjutan, bukan diagnosis.'
  },
  {
    q: 'Ke mana memeriksakan anak yang dicurigai GDD atau autis?',
    a: 'Mulailah dari posyandu, puskesmas, atau dokter anak untuk skrining perkembangan. Bila hasilnya meragukan atau ada tanda bahaya, anak biasanya dirujuk ke dokter spesialis anak (idealnya konsultan tumbuh kembang), psikolog klinis anak, atau psikiater anak untuk evaluasi menyeluruh. Kehilangan kemampuan bicara atau sosial yang sebelumnya sudah dikuasai adalah alasan untuk segera diperiksa.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Apakah GDD Sama dengan Autis?', item: CANONICAL }
  ]
};

const blogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: OG_TITLE,
  description: OG_DESC,
  image: IMAGE_URL,
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
  about: [
    { '@type': 'MedicalCondition', name: 'Global developmental delay' },
    { '@type': 'MedicalCondition', name: 'Autism spectrum disorder' }
  ],
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

const L = {
  cdcDx: 'https://www.cdc.gov/autism/hcp/diagnosis/index.html',
  cdcSigns: 'https://www.cdc.gov/autism/signs-symptoms/index.html',
  cdcData: 'https://www.cdc.gov/autism/data-research/index.html',
  cdcMilestones: 'https://www.cdc.gov/act-early/milestones/index.html',
  idai: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/mengenal-keterlambatan-perkembangan-umum-pada-anak',
  aap2014: 'https://pubmed.ncbi.nlm.nih.gov/25157020/',
  aapAsd: 'https://pubmed.ncbi.nlm.nih.gov/31843864/',
  aapScreen: 'https://pubmed.ncbi.nlm.nih.gov/31843861/',
  nice: 'https://www.nice.org.uk/guidance/cg128/chapter/Recommendations',
  satusehat: 'https://satusehat.kemkes.go.id/platform/docs/id/interoperability/tumbuh-kembang-new/',
  mchat: 'https://mchatscreen.com/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- SEO Meta Tags -->
    <title>${TITLE_TAG}</title>
    <meta name="description" content="${META_DESC}">
    <meta name="keywords" content="apakah gdd sama dengan autis, gdd adalah, global developmental delay, perbedaan gdd dan autis, keterlambatan perkembangan umum, autisme anak, YUKA">
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
        .article-featured-image { margin: -2rem auto 2rem; max-width: 900px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .article-featured-image img { width: 100%; height: auto; }
        .article-featured-image figcaption { padding: 0.6rem 1rem; font-size: 0.85rem; color: var(--gray-600); text-align: center; background: var(--gray-50); }
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
        .article-inline-image { margin: 2rem 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
        .article-inline-image img { width: 100%; height: auto; }
        .article-inline-image figcaption { padding: 0.75rem 1rem; font-size: 0.9rem; color: var(--gray-600); text-align: center; background: var(--gray-50); }
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
        .classification-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.98rem; }
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
                <span class="current">Apakah GDD Sama dengan Autis?</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="936" height="1248" fetchpriority="high">
            <figcaption>Siswa dan pendamping YUKA saat wisata edukasi ke Candi Plaosan. Foto: dokumentasi YUKA. Foto ini tidak menggambarkan diagnosis anak mana pun.</figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Jawaban singkatnya: GDD tidak sama dengan autis.</strong> GDD (<em>global developmental delay</em>, atau keterlambatan perkembangan umum) adalah keadaan ketika anak tertinggal secara bermakna di dua ranah perkembangan atau lebih, menurut ${ext(L.idai, 'Ikatan Dokter Anak Indonesia (IDAI)')}. Autisme adalah kondisi perkembangan saraf dengan dua ciri inti: hambatan komunikasi dan interaksi sosial yang menetap, serta pola perilaku, minat, atau aktivitas yang terbatas dan berulang, sesuai kriteria DSM-5 yang dimuat ${ext(L.cdcDx, 'CDC')}. Keduanya bisa dialami satu anak sekaligus, dan yang bisa memastikannya hanya evaluasi oleh dokter anak, psikolog, atau psikiater anak.</p>

            <p>Pertanyaan ini sering muncul setelah orang tua membaca istilah GDD di surat rujukan atau hasil pemeriksaan, lalu khawatir itu cara halus menyebut autisme. Artikel ini menjelaskan arti masing-masing istilah, di mana letak perbedaannya, kenapa keduanya sering tertukar, dan langkah pemeriksaan yang tersedia di Indonesia. Kalau Ayah dan Bunda ingin memahami autisme dari dasarnya lebih dulu, bacalah <a href="autisme-adalah">pengertian autisme, ciri, dan penanganannya</a>.</p>

            <div class="info-box">
                <h4>Penting sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini untuk edukasi, bukan alat diagnosis. Daftar tanda di bawah tidak bisa dipakai untuk menyimpulkan kondisi anak sendiri di rumah. Bila ada kekhawatiran soal perkembangan si kecil, bawa ke dokter spesialis anak (Sp.A) atau psikolog klinis anak untuk evaluasi.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#apa-itu-gdd">Apa itu GDD (keterlambatan perkembangan umum)</a></li>
                    <li><a href="#apa-itu-autisme">Apa itu autisme menurut kriteria diagnosis</a></li>
                    <li><a href="#tabel-perbedaan">Tabel perbedaan GDD dan autisme</a></li>
                    <li><a href="#kenapa-tertukar">Kenapa GDD dan autisme sering tertukar</a></li>
                    <li><a href="#keduanya-sekaligus">Bisakah anak mengalami keduanya?</a></li>
                    <li><a href="#tanda-dicermati">Tanda yang perlu dicermati orang tua</a></li>
                    <li><a href="#skrining-evaluasi">Skrining dan evaluasi: langkahnya di Indonesia</a></li>
                    <li><a href="#sambil-menunggu">Yang bisa dilakukan sambil menunggu hasil</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="apa-itu-gdd">Apa Itu GDD (Keterlambatan Perkembangan Umum)?</h2>
            <p>IDAI membagi perkembangan anak ke dalam empat ranah besar: motorik kasar, motorik halus, bahasa atau bicara, dan personal sosial atau kemandirian. Seorang anak bisa terlambat di satu ranah saja, misalnya hanya bicaranya yang tertinggal. Istilah GDD baru dipakai bila keterlambatan yang bermakna terjadi di <strong>dua ranah atau lebih</strong>. Laporan klinis ${ext(L.aap2014, 'American Academy of Pediatrics (AAP) tahun 2014')} memakai definisi serupa dan menambahkan ranah kognitif serta aktivitas sehari-hari.</p>
            <p>Beberapa hal penting tentang GDD:</p>
            <ul>
                <li><strong>Istilah untuk anak kecil.</strong> Menurut IDAI dan AAP, GDD dipakai untuk anak di bawah 5 tahun. Pada anak yang lebih besar, ketika tes kecerdasan sudah bisa memberi hasil yang andal, dokter memakai istilah lain seperti disabilitas intelektual. Penjelasannya ada di artikel <a href="disabilitas-intelektual-adalah">disabilitas intelektual adalah</a>.</li>
                <li><strong>Bukan vonis permanen.</strong> IDAI menegaskan anak dengan keterlambatan perkembangan umum tidak selalu mengalami disabilitas intelektual di kemudian hari. AAP juga mencatat keterlambatan yang ringan bisa bersifat sementara.</li>
                <li><strong>Cukup sering ditemui.</strong> IDAI memperkirakan sekitar 5 sampai 10% anak mengalami keterlambatan perkembangan, dan sekitar 1 sampai 3% anak di bawah 5 tahun mengalami keterlambatan perkembangan umum.</li>
                <li><strong>Penyebabnya beragam.</strong> IDAI menyebut antara lain kelainan genetik atau kromosom seperti <a href="down-syndrome-adalah">sindrom Down</a>, gangguan atau infeksi susunan saraf seperti <a href="cerebral-palsy-adalah">cerebral palsy</a> dan sindrom Rubella, serta riwayat bayi risiko tinggi seperti lahir prematur atau berat lahir rendah.</li>
            </ul>
            <p>Dengan kata lain, GDD adalah <em>deskripsi pola keterlambatan</em>, bukan nama penyakit yang menjelaskan penyebabnya. Itulah sebabnya dokter biasanya melanjutkan dengan mencari penyebab di balik keterlambatan tersebut.</p>

            <h2 id="apa-itu-autisme">Apa Itu Autisme Menurut Kriteria Diagnosis?</h2>
            <p>Autisme (gangguan spektrum autisme, <em>autism spectrum disorder</em>) didiagnosis berdasarkan kriteria DSM-5 dari American Psychiatric Association. Halaman ${ext(L.cdcDx, 'Clinical Testing and Diagnosis for Autism dari CDC')} memuat kriterianya secara lengkap. Intinya, seorang anak perlu menunjukkan:</p>
            <ol>
                <li><strong>Hambatan menetap dalam komunikasi dan interaksi sosial</strong> di berbagai situasi, pada ketiga area berikut: timbal balik sosial dan emosional, komunikasi nonverbal (kontak mata, bahasa tubuh, gestur, ekspresi wajah), serta kemampuan membangun dan memahami hubungan.</li>
                <li><strong>Pola perilaku, minat, atau aktivitas yang terbatas dan berulang</strong>, minimal dua dari empat bentuk: gerakan atau ucapan berulang (misalnya menjajarkan mainan atau ekolalia), kekakuan pada rutinitas, minat yang sangat sempit dan intens, serta respons sensorik yang berlebihan atau kurang.</li>
            </ol>
            <p>Gejalanya muncul sejak periode perkembangan awal dan menimbulkan hambatan nyata dalam keseharian. Data ${ext(L.cdcData, 'jejaring pemantauan ADDM milik CDC')} memperkirakan sekitar 1 dari 31 anak usia 8 tahun di Amerika Serikat teridentifikasi autis. Untuk penyebab yang sejauh ini diketahui, lihat artikel <a href="apa-penyebab-autis-pada-anak">apa penyebab autis pada anak</a>.</p>

            <h2 id="tabel-perbedaan">Tabel Perbedaan GDD dan Autisme</h2>
            <div style="overflow-x:auto;">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>GDD</th><th>Autisme</th></tr>
                </thead>
                <tbody>
                    <tr><td>Yang digambarkan</td><td>Keterlambatan bermakna di dua ranah perkembangan atau lebih</td><td>Pola khas hambatan komunikasi sosial plus perilaku atau minat yang terbatas dan berulang</td></tr>
                    <tr><td>Ciri pembeda</td><td>Anak tertinggal di banyak bidang, tetapi keterampilan sosialnya kurang lebih sejalan dengan tingkat perkembangannya secara umum</td><td>Kemampuan sosial dan komunikasinya lebih rendah daripada yang diharapkan dari tingkat perkembangannya secara umum, disertai perilaku berulang</td></tr>
                    <tr><td>Rentang usia istilah</td><td>Di bawah 5 tahun, lalu dievaluasi ulang</td><td>Bisa didiagnosis sejak usia 18 bulan (AAP) dan tidak dibatasi usia</td></tr>
                    <tr><td>Perilaku berulang</td><td>Tidak menjadi syarat</td><td>Syarat diagnosis (minimal dua bentuk)</td></tr>
                    <tr><td>Arah pemeriksaan lanjutan</td><td>Mencari penyebab (misalnya pemeriksaan genetik), memantau apakah anak mengejar ketertinggalan</td><td>Menilai kebutuhan dukungan, kondisi penyerta, dan intervensi perilaku serta komunikasi</td></tr>
                    <tr><td>Bisa bersamaan?</td><td colspan="2">Ya. Kriteria DSM-5 mengizinkan diagnosis ganda bila syaratnya terpenuhi (lihat bagian di bawah)</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.9rem;color:#666;">Tabel disusun tim YUKA dari kriteria DSM-5 di situs CDC, laporan klinis AAP 2014 dan 2020, serta artikel IDAI yang ditautkan di halaman ini, per September 2026.</p>

            <h2 id="kenapa-tertukar">Kenapa GDD dan Autisme Sering Tertukar?</h2>
            <p>Ada beberapa alasan yang membuat keduanya mudah dikira sama, bahkan oleh orang tua yang sudah banyak membaca:</p>
            <ul>
                <li><strong>Keterlambatan bicara muncul di keduanya.</strong> Anak dengan GDD hampir selalu terlambat bicara karena bahasa adalah salah satu ranahnya. Anak autis juga sering terlambat bicara. Halaman ${ext(L.cdcSigns, 'tanda dan gejala autisme dari CDC')} mencantumkan keterlambatan bahasa, gerak, dan kemampuan kognitif sebagai ciri yang kerap menyertai autisme. Beda keterlambatan bicara biasa dan kondisi lain dibahas di artikel <a href="speech-delay-adalah">speech delay adalah</a>.</li>
                <li><strong>Dokter memang mempertimbangkan keduanya bersamaan.</strong> Pedoman ${ext(L.nice, 'NICE CG128 dari Inggris (rekomendasi 1.5.7)')} memasukkan disabilitas intelektual dan GDD ke dalam daftar diagnosis banding yang perlu dipertimbangkan saat menilai autisme.</li>
                <li><strong>Sebagian anak memang menunjukkan ciri keduanya.</strong> Laporan klinis AAP 2014 tentang evaluasi GDD menyebut ada anak yang datang dengan GDD sekaligus gambaran klinis autisme.</li>
                <li><strong>Pada anak sangat muda, gambarannya belum jelas.</strong> NICE CG128 (rekomendasi 1.5.12) mengingatkan diagnosis autisme bisa belum pasti pada anak di bawah 24 bulan dan pada anak yang usia perkembangannya di bawah 18 bulan, kelompok yang justru banyak berisi anak dengan GDD. Karena itu kesimpulan awal bisa berubah setelah anak diamati lebih lama.</li>
            </ul>
            <p>Kunci pembedanya menurut CDC ada pada perilaku dan minat yang terbatas serta berulang. Ciri itulah yang membedakan autisme dari kondisi yang masalahnya hanya pada komunikasi dan interaksi sosial.</p>

            <figure class="article-inline-image">
                <img src="../Dokumentasi/cpao-anak-kelas-memasak-tradisional-072.webp" alt="Seorang siswa bertopi koki biru dan celemek cokelat tersenyum sambil mengacungkan jempol di pendopo kelas memasak, dengan anak-anak dan pendamping lain di belakangnya" width="936" height="1248" loading="lazy">
                <figcaption>Kelas memasak di luar ruangan bersama YUKA. Kegiatan sehari-hari seperti ini melatih motorik halus, bahasa, dan kemandirian sekaligus. Foto: dokumentasi YUKA. Foto tidak menggambarkan diagnosis anak mana pun.</figcaption>
            </figure>

            <h2 id="keduanya-sekaligus">Bisakah Anak Mengalami GDD dan Autisme Sekaligus?</h2>
            <p>Bisa. Kriteria DSM-5 butir E yang dimuat ${ext(L.cdcDx, 'CDC')} berbunyi bahwa gejala autisme harus <em>tidak lebih tepat dijelaskan</em> oleh disabilitas intelektual atau GDD. Kalimat berikutnya menyebut disabilitas intelektual dan autisme sering muncul bersamaan, dan untuk menegakkan keduanya sekaligus, kemampuan komunikasi sosial anak harus berada di bawah yang diharapkan untuk tingkat perkembangannya secara umum.</p>
            <p>Dalam praktik, artinya tim pemeriksa tidak hanya membandingkan anak dengan teman seusianya. Mereka membandingkan kemampuan sosial anak dengan kemampuan dia sendiri di bidang lain. Contoh sederhananya begini. Seorang anak 3 tahun yang secara keseluruhan berkembang seperti anak 18 bulan wajar bila bicaranya juga seperti anak 18 bulan. Kalau kontak mata, menunjuk untuk berbagi perhatian, dan respons saat dipanggil jauh di bawah tingkat 18 bulan itu, dan ada perilaku berulang, dokter akan menimbang kemungkinan autisme di samping GDD. Penilaian seperti ini butuh pengalaman klinis dan tidak bisa dilakukan lewat kuis daring.</p>

            <h2 id="tanda-dicermati">Tanda yang Perlu Dicermati Orang Tua</h2>
            <p>Daftar berikut bukan alat diagnosis. Fungsinya membantu orang tua tahu kapan saatnya bertanya ke tenaga kesehatan. Menurut IDAI, bila menemukan salah satu tanda bahaya perkembangan, jangan menunda pemeriksaan.</p>
            <h3>Tanda keterlambatan di beberapa ranah (sering dikaitkan dengan GDD)</h3>
            <ul>
                <li>Motorik kasar: gerakan tubuh kiri dan kanan tidak seimbang, otot terlalu lemas atau terlalu kaku, atau refleks bayi yang masih bertahan setelah usia 6 bulan.</li>
                <li>Motorik halus: tangan masih terus menggenggam setelah usia 4 bulan, atau kebiasaan memasukkan mainan ke mulut masih sangat dominan setelah 14 bulan.</li>
                <li>Bahasa: belum ada kata bermakna di usia 24 bulan, atau belum bisa merangkai tiga kata di usia 36 bulan.</li>
                <li>Keterlambatan terlihat di lebih dari satu bidang sekaligus, misalnya belum berjalan dan belum bicara pada usia yang diharapkan. Panduan tahapan usia bisa dilihat di ${ext(L.cdcMilestones, 'daftar milestone perkembangan CDC')} atau buku KIA.</li>
            </ul>
            <h3>Tanda yang lebih mengarah ke autisme</h3>
            <ul>
                <li>Tidak merespons saat namanya dipanggil pada usia 12 bulan, dan kurang mampu berbagi perhatian dengan orang lain (misalnya menunjuk untuk memperlihatkan sesuatu) sekitar usia 20 bulan, sesuai tanda bahaya dari IDAI.</li>
                <li>Menghindari atau jarang melakukan kontak mata, dan belum ikut permainan interaktif sederhana seperti tepuk-tepuk tangan bersama (<em>pat-a-cake</em>) pada usia 12 bulan (contoh dari CDC).</li>
                <li>Menjajarkan mainan dan marah bila urutannya diubah, mengulang kata atau kalimat, sangat terganggu oleh perubahan kecil, atau menggerakkan tangan dan tubuh secara berulang.</li>
                <li>Reaksi yang tidak biasa terhadap suara, bau, rasa, tekstur, atau cahaya.</li>
            </ul>
            <div class="info-box">
                <h4>Tanda yang perlu diperiksakan segera</h4>
                <p style="margin-bottom:0;">Anak kehilangan kemampuan bicara atau sosial yang sebelumnya sudah ia kuasai. NICE CG128 meminta anak di bawah 3 tahun dengan kemunduran bahasa atau sosial langsung dirujuk ke tim autisme, dan anak yang lebih besar dirujuk dulu ke dokter anak atau dokter saraf anak. Kemunduran seperti ini tidak perlu ditunggu.</p>
            </div>

            <h2 id="skrining-evaluasi">Skrining dan Evaluasi: Langkahnya di Indonesia</h2>
            <p>Memeriksakan anak biasanya berjalan dalam dua tahap: <strong>skrining</strong> untuk menyaring siapa yang perlu diperiksa lebih lanjut, lalu <strong>evaluasi diagnostik</strong> oleh tenaga ahli.</p>
            <h3>1. Skrining</h3>
            <p>${ext(L.aapScreen, 'AAP (Lipkin dan Macias, 2020)')} merekomendasikan pemantauan perkembangan di setiap kunjungan kesehatan dan skrining perkembangan terstandar pada usia 9, 18, dan 30 bulan. Untuk autisme, ${ext(L.aapAsd, 'laporan klinis AAP 2020 (Hyman dan rekan)')} tetap merekomendasikan skrining terstandar pada usia 18 dan 24 bulan, karena autisme bisa didiagnosis sejak usia 18 bulan dan intervensinya berbasis bukti.</p>
            <p>Di Indonesia, pemantauan ini masuk program Stimulasi, Deteksi, dan Intervensi Dini Tumbuh Kembang (SDIDTK). ${ext(L.satusehat, 'Dokumentasi SATUSEHAT Kementerian Kesehatan')} mencatat instrumen SDIDTK antara lain Kuesioner Pra Skrining Perkembangan (KPSP), Tes Daya Dengar, Tes Daya Lihat, Kuesioner Masalah Perilaku dan Emosional, M-CHAT versi revisi untuk autisme, serta kuesioner GPPH. KPSP membantu menangkap keterlambatan di berbagai ranah, sedangkan ${ext(L.mchat, 'M-CHAT-R/F')} adalah alat skrining dua tahap berbasis laporan orang tua untuk menilai kemungkinan autisme. Skrining ini bisa ditanyakan di posyandu, puskesmas, atau dokter anak.</p>
            <p>Hasil skrining yang meragukan atau positif <strong>bukan diagnosis</strong>. Artinya anak perlu diperiksa lebih lanjut.</p>
            <h3>2. Evaluasi diagnostik</h3>
            <p>Evaluasi biasanya dilakukan dokter spesialis anak (idealnya subspesialis tumbuh kembang), psikolog klinis anak, atau psikiater anak, sering bersama terapis. Menurut NICE CG128, penilaian autisme mencakup kekhawatiran orang tua, riwayat perkembangan yang rinci, pengamatan langsung kemampuan sosial dan komunikasi anak, pemeriksaan fisik, pertimbangan diagnosis banding, dan pemeriksaan kondisi yang mungkin menyertai. NICE juga meminta diagnosis tidak ditegakkan hanya dari satu alat tes khusus autisme (rekomendasi 1.5.11).</p>
            <p>Bila anak mengalami GDD, laporan klinis AAP 2014 menganjurkan pencarian penyebab secara terarah. Pemeriksaan <em>chromosomal microarray</em> ditetapkan sebagai tes genetik lini pertama, dan tes sindrom fragile X tetap menjadi tes lini pertama yang penting. Dokter yang akan menilai pemeriksaan mana yang relevan untuk tiap anak. Gambaran umum proses penilaian kebutuhan anak juga kami tulis di artikel <a href="asesmen-abk">asesmen ABK</a>.</p>

            <h2 id="sambil-menunggu">Yang Bisa Dilakukan Sambil Menunggu Hasil</h2>
            <p>Proses dari skrining sampai diagnosis bisa makan waktu, apalagi bila antrean ke dokter tumbuh kembang panjang. Kabar baiknya, dukungan untuk anak tidak harus menunggu label akhir. AAP menyebut kekhawatiran perkembangan bisa langsung diikuti rujukan ke layanan intervensi. Beberapa hal yang bisa Ayah dan Bunda lakukan:</p>
            <ol>
                <li><strong>Catat dan rekam.</strong> Tulis kapan anak mencapai tiap kemampuan, dan rekam video singkat perilaku yang dikhawatirkan. Rekaman membantu dokter melihat hal yang mungkin tidak muncul saat pemeriksaan.</li>
                <li><strong>Tanyakan terapi yang bisa dimulai.</strong> Tergantung kebutuhannya, anak mungkin disarankan <a href="terapi-wicara">terapi wicara</a>, <a href="terapi-okupasi">terapi okupasi</a>, atau fisioterapi. Prinsip dan manfaat <a href="intervensi-dini">intervensi dini</a> kami bahas di artikel terpisah.</li>
                <li><strong>Stimulasi lewat kegiatan harian.</strong> Ajak anak bicara saat makan, mandi, dan bermain, beri kesempatan menunjuk dan memilih, dan batasi layar. Hal sederhana ini mendukung perkembangan apa pun hasil pemeriksaannya.</li>
                <li><strong>Jaga diri sendiri.</strong> Masa menunggu sering melelahkan secara emosi. Tulisan kami tentang <a href="menerima-diagnosis-anak-abk">menerima diagnosis anak berkebutuhan khusus</a> bisa menemani prosesnya.</li>
            </ol>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">Di Sekolah Inklusi Taruna Imani, YUKA mendampingi anak dengan beragam kebutuhan belajar melalui rutinitas yang terstruktur, kegiatan praktik seperti memasak dan wisata edukasi, serta komunikasi rutin dengan orang tua. YUKA bukan fasilitas medis dan tidak menegakkan diagnosis GDD maupun autisme; untuk itu kami mengarahkan keluarga ke dokter anak, psikolog, atau psikiater anak. Ingin berdiskusi soal pendampingan belajar anak? <a href="../kontak">Hubungi tim YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="autisme-adalah">Autisme Adalah: Pengertian, Ciri, dan Penanganan</a></h4>
                    <p>Dasar-dasar autisme pada anak, dari ciri sampai pilihan dukungannya.</p>
                </div>
                <div class="related-card">
                    <h4><a href="speech-delay-adalah">Speech Delay Adalah</a></h4>
                    <p>Kapan keterlambatan bicara perlu diperiksakan dan apa bedanya dengan kondisi lain.</p>
                </div>
                <div class="related-card">
                    <h4><a href="perbedaan-adhd-dan-autis-pada-anak">Perbedaan ADHD dan Autis pada Anak</a></h4>
                    <p>Kondisi lain yang juga sering tertukar dengan autisme.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#GDD</a>
            <a href="#">#Autisme</a>
            <a href="#">#TumbuhKembang</a>
            <a href="#">#DeteksiDini</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.idai, '<strong>IDAI: Mengenal Keterlambatan Perkembangan Umum pada Anak (Bernie Endyarni Medise)</strong>')}</li>
              <li>${ext(L.cdcDx, '<strong>CDC: Clinical Testing and Diagnosis for Autism (kriteria DSM-5)</strong>')}</li>
              <li>${ext(L.cdcSigns, '<strong>CDC: Signs and Symptoms of Autism Spectrum Disorder</strong>')}</li>
              <li>${ext(L.cdcData, '<strong>CDC: Data and Statistics on Autism Spectrum Disorder</strong>')}</li>
              <li>${ext(L.aap2014, '<strong>Moeschler JB, Shevell M. Comprehensive Evaluation of the Child With Intellectual Disability or Global Developmental Delays. Pediatrics (AAP), 2014</strong>')}</li>
              <li>${ext(L.aapAsd, '<strong>Hyman SL, Levy SE, Myers SM. Identification, Evaluation, and Management of Children With Autism Spectrum Disorder. Pediatrics (AAP), 2020</strong>')}</li>
              <li>${ext(L.aapScreen, '<strong>Lipkin PH, Macias MM. Promoting Optimal Development: Developmental Surveillance and Screening. Pediatrics (AAP), 2020</strong>')}</li>
              <li>${ext(L.nice, '<strong>NICE CG128: Autism spectrum disorder in under 19s, recognition, referral and diagnosis</strong>')}</li>
              <li>${ext(L.satusehat, '<strong>Kementerian Kesehatan RI, SATUSEHAT: Tumbuh Kembang (instrumen SDIDTK)</strong>')}</li>
              <li>${ext(L.mchat, '<strong>M-CHAT-R/F (Robins, Fein, dan Barton), situs resmi</strong>')}</li>
              <li>${ext(L.cdcMilestones, '<strong>CDC: Developmental Milestones (Learn the Signs. Act Early.)</strong>')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer medis:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti evaluasi oleh dokter spesialis anak, psikolog klinis, atau psikiater anak</strong>. Diagnosis GDD maupun autisme hanya dapat ditegakkan oleh tenaga kesehatan melalui pemeriksaan langsung.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Apakah%20GDD%20Sama%20dengan%20Autis%3F%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=Apakah%20GDD%20Sama%20dengan%20Autis%3F&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            </div>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga kesehatan. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
</article>

    <section class="section bg-primary" style="padding: 4rem 0;">
        <div class="container text-center">
            <h2 style="color: var(--white); margin-bottom: 1rem;">Bantu Pendidikan Anak Berkebutuhan Khusus</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 2rem;">Setiap donasi Anda membantu anak-anak dengan beragam kemampuan mendapatkan pendidikan dan pendampingan yang sesuai kebutuhan mereka.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="../donasi" class="btn btn-secondary">Donasi Sekarang</a>
                <a href="https://wa.me/6281229912332?text=Halo%20YUKA%2C%20saya%20ingin%20bertanya%20tentang%20pendampingan%20anak" target="_blank" class="btn btn-outline-light">Hubungi via WhatsApp</a>
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

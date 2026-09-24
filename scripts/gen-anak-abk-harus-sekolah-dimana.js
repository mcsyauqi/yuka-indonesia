#!/usr/bin/env node
'use strict';

// One-time generator for artikel/anak-abk-harus-sekolah-dimana.html
// (catchup 2026-09-25, kartu iM4LOpMC). Canonical shell via scripts/lib/article-shell.js.
// YMYL ringan (hak pendidikan dan regulasi): every legal statement was checked against the
// official text downloaded from JDIH Kemendikdasmen (storage-jdih.kemendikdasmen.go.id) or
// the UU 8/2016 PDF, and links to the JDIH detail page. Permendiknas 70/2009 is marked
// "Tidak Berlaku" on JDIH and its provisions on peserta didik berkelainan were revoked by
// Pasal 43 Permendikbudristek 48/2023, so the article does NOT present the old
// "1 sekolah inklusi per kecamatan" rule as current law.
// Positioning vs existing articles (no cannibalization): this is the decision hub for the
// query "anak abk harus sekolah dimana". Definitions of SLB, pendidikan inklusi, asesmen,
// and homeschooling detail are delegated to their own articles via internal links.
// Hero: real CC BY-SA 4.0 photo of an SLB name board (no people), visible credit.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'anak-abk-harus-sekolah-dimana';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const TITLE_TAG = 'Anak ABK Harus Sekolah Dimana? Panduan Memilih Sekolah';
const META_DESC = 'Anak ABK harus sekolah dimana? Bandingkan sekolah inklusi, SLB, dan homeschooling, pahami hak akomodasi yang layak, lalu ikuti langkah memilihnya.';
const OG_TITLE = 'Anak ABK Harus Sekolah Dimana? Panduan Memilih Sekolah Inklusi, SLB, atau Jalur Lain';
const OG_DESC = 'Panduan orang tua memilih sekolah untuk anak berkebutuhan khusus: perbandingan sekolah inklusi, SLB, dan homeschooling, hak anak menurut UU 8/2016 dan Permendikbudristek 48/2023, jalur afirmasi SPMB, dan langkah memilih.';
const H1 = 'Anak ABK Harus Sekolah Dimana? Panduan Memilih Sekolah Inklusi, SLB, atau Jalur Lain';
const IMAGE_HERO = 'assets/images/artikel/papan-nama-slb-negeri-tamanwinangun-kebumen-wikimedia.webp';
const IMAGE_HERO_ALT = 'Papan nama Sekolah Luar Biasa Negeri Tamanwinangun Kabupaten Kebumen berwarna hitam dengan huruf kuning di depan gedung sekolah beratap genteng, dikelilingi pot tanaman dan bunga';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25T06:00:00+07:00';
const DATE_MODIFIED = '2026-09-25T06:00:00+07:00';
const DATE_DISPLAY = '25 September 2026';

const CREDIT = {
  name: 'DARMAS BS 9',
  source: 'https://commons.wikimedia.org/wiki/File:SEKOLAH_LUAR_BIASA_NEGERI_TAMANWINANGUN_KAB.KEBUMEN.jpg',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  uu8: 'https://jdih.kemnaker.go.id/asset/data_puu/UU_Nomor_8_Tahun_2016.pdf',
  uu20: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/undang-undang-republik-indonesia-nomor-20-tahun-2003-tentang-sistem-pendidikan-nasional',
  p48: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-kebudayaan-riset-dan-teknologi-nomor-48-tahun-2023-tentang-akomodasi-yang-layak-untuk-peserta-didik-penyandang-disabilitas-pada-satuan-pendidikan-anak-usia-dini-formal-pendidikan-dasar-pendidikan-menengah-dan-pendidikan-tinggi',
  p70: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-nasional-nomor-70-tahun-2009-tentang-pendidikan-inklusif-bagi-peserta-didik-yang-memiliki-kelainan-dan-memiliki-potensi-kecerdasan-dan-atau-bakat-istimewa',
  spmb: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-dasar-dan-menengah-nomor-3-tahun-2025-tentang-sistem-penerimaan-murid-baru'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apakah anak ABK wajib masuk SLB?',
    a: 'Tidak. Pasal 10 UU Nomor 8 Tahun 2016 menyebut penyandang disabilitas berhak mendapatkan pendidikan bermutu di semua jenis, jalur, dan jenjang pendidikan secara inklusif dan khusus. Artinya sekolah reguler yang menyelenggarakan pendidikan inklusif dan sekolah khusus seperti SLB sama-sama pilihan yang sah. Yang menentukan adalah kebutuhan anak dan kesiapan sekolahnya.'
  },
  {
    q: 'Bolehkah sekolah negeri menolak anak berkebutuhan khusus?',
    a: 'Permendikbudristek Nomor 48 Tahun 2023 mewajibkan satuan pendidikan yang sudah mendapat fasilitasi dari pemerintah daerah untuk menyediakan akomodasi yang layak, dan sekolah yang tidak melaksanakannya dapat dikenai sanksi administratif. Bila anak ditolak, minta alasannya secara tertulis lalu tanyakan ke dinas pendidikan setempat. Masyarakat juga dapat menyampaikan pengaduan kepada Menteri, gubernur, bupati atau wali kota, maupun Komisi Nasional Disabilitas (Pasal 27).'
  },
  {
    q: 'Dokumen apa yang dibutuhkan untuk mendaftar lewat jalur afirmasi disabilitas?',
    a: 'Menurut Pasal 19 ayat (2) Permendikdasmen Nomor 3 Tahun 2025 tentang Sistem Penerimaan Murid Baru, calon murid penyandang disabilitas yang mendaftar lewat Jalur Afirmasi harus memiliki kartu penyandang disabilitas dari kementerian bidang sosial, atau surat keterangan dari dokter atau dokter spesialis. Rincian teknis dan jadwalnya tetap mengikuti petunjuk teknis SPMB di daerah masing-masing.'
  },
  {
    q: 'Apakah ada batas usia masuk sekolah untuk anak ABK?',
    a: 'Pasal 15 Permendikdasmen Nomor 3 Tahun 2025 mengecualikan persyaratan usia bagi calon murid penyandang disabilitas, serta bagi calon murid di satuan pendidikan yang menyelenggarakan pendidikan khusus. Jadi anak yang usianya sudah melewati batas umum tetap dapat mendaftar, walau keputusan penempatan kelas sebaiknya dibicarakan dengan sekolah.'
  },
  {
    q: 'Kalau sekolah pertama ternyata tidak cocok, apakah boleh pindah?',
    a: 'Boleh. Pilihan sekolah bukan keputusan seumur hidup. Banyak keluarga berpindah dari SLB ke sekolah inklusi, atau sebaliknya, setelah melihat perkembangan anak. Yang penting evaluasi dilakukan berkala bersama guru dan tenaga profesional, dan perpindahan disiapkan dengan masa transisi agar anak tidak kaget.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Anak ABK Harus Sekolah Dimana', item: CANONICAL }
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
    caption: 'Papan nama Sekolah Luar Biasa Negeri Tamanwinangun, Kabupaten Kebumen, Jawa Tengah',
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
  keywords: 'anak abk harus sekolah dimana, sekolah untuk anak berkebutuhan khusus, sekolah inklusi atau SLB, memilih sekolah ABK, akomodasi yang layak',
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
    <meta name="keywords" content="anak abk harus sekolah dimana, sekolah anak berkebutuhan khusus, sekolah inklusi, SLB, homeschooling ABK, akomodasi yang layak, YUKA">
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
                <span class="current">Anak ABK Harus Sekolah Dimana</span>
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
            <figcaption>Papan nama SLB Negeri Tamanwinangun di Kabupaten Kebumen, Jawa Tengah (foto 2022). SLB hanyalah salah satu pilihan; sekolah reguler penyelenggara pendidikan inklusif juga merupakan hak anak.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Anak ABK (anak berkebutuhan khusus) tidak harus bersekolah di satu jenis sekolah tertentu. Anak berhak belajar di sekolah reguler yang menyelenggarakan pendidikan inklusif maupun di sekolah khusus seperti SLB, dan pilihan terbaik ditentukan oleh hasil asesmen kebutuhan anak serta kesiapan sekolah memberikan akomodasi yang layak, bukan oleh label diagnosisnya.</strong> Keluarga juga bisa menempuh jalur pendidikan informal di rumah, yang hasilnya dapat diakui setelah anak lulus ujian sesuai standar nasional.</p>

            <p>Pertanyaan "anak ABK harus sekolah dimana" biasanya muncul tepat setelah orang tua menerima hasil pemeriksaan, atau ketika sekolah pertama ternyata tidak cocok. Artikel ini membantu Ayah dan Bunda memetakan pilihan yang tersedia di Indonesia, memahami hak anak menurut aturan yang berlaku, lalu memilih dengan langkah yang jelas. Bila istilah ABK masih terasa asing, penjelasan dasarnya ada di artikel <a href="pengertian-abk">pengertian ABK</a>.</p>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini berisi informasi umum tentang pilihan sekolah dan regulasi, bukan nasihat hukum atau rekomendasi penempatan untuk anak tertentu. Keputusan sebaiknya diambil bersama tenaga profesional yang sudah memeriksa anak (dokter spesialis anak, psikolog, atau tim asesmen), pihak sekolah, dan dinas pendidikan setempat. Aturan teknis penerimaan murid dapat berbeda di tiap daerah.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pilihan">Pilihan sekolah untuk anak ABK</a></li>
                    <li><a href="#hak">Hak anak menurut aturan yang berlaku</a></li>
                    <li><a href="#akomodasi">Contoh akomodasi yang layak di sekolah</a></li>
                    <li><a href="#faktor">Faktor yang menentukan pilihan</a></li>
                    <li><a href="#langkah">Langkah memilih sekolah</a></li>
                    <li><a href="#ditolak">Kalau anak ditolak sekolah</a></li>
                    <li><a href="#evaluasi">Kapan perlu pindah jalur</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pilihan">Pilihan Sekolah untuk Anak ABK di Indonesia</h2>
            <p>${ext(L.uu20, 'Pasal 32 ayat (1) UU Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional')} menyebut pendidikan khusus sebagai pendidikan bagi peserta didik yang memiliki tingkat kesulitan dalam mengikuti proses pembelajaran karena kelainan fisik, emosional, mental, sosial, dan/atau memiliki potensi kecerdasan dan bakat istimewa. Sementara ${ext(L.uu8, 'Pasal 40 ayat (2) UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')} menegaskan pendidikan untuk penyandang disabilitas dilaksanakan dalam sistem pendidikan nasional melalui <strong>pendidikan inklusif dan pendidikan khusus</strong>. Dalam praktiknya, pilihan yang umum ditemui keluarga adalah sebagai berikut.</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Pilihan</th><th>Gambaran singkat</th><th>Sering cocok bila</th><th>Yang perlu dicek</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Sekolah reguler penyelenggara pendidikan inklusif</strong></td><td>Anak belajar di kelas yang sama dengan teman sebaya, dengan penyesuaian pembelajaran dan pendampingan.</td><td>Anak bisa mengikuti rutinitas kelas dengan dukungan, dan manfaat bergaul dengan teman sebaya besar baginya.</td><td>Ada guru pendamping atau guru pendidikan khusus, jumlah siswa per kelas, pengalaman sekolah menangani ABK.</td></tr>
                    <tr><td><strong>Sekolah khusus (SLB)</strong></td><td>Sekolah yang dirancang untuk ragam kebutuhan tertentu, dengan kelas kecil dan guru berlatar pendidikan khusus.</td><td>Anak butuh dukungan intensif, program bina diri, atau komunikasi khusus seperti braille dan bahasa isyarat.</td><td>Kekhususan yang dilayani, program keterampilan, jarak tempuh, rencana transisi.</td></tr>
                    <tr><td><strong>Pendidikan informal di rumah (homeschooling)</strong></td><td>Keluarga menyelenggarakan kegiatan belajar secara mandiri.</td><td>Kondisi kesehatan anak membuat hadir setiap hari sulit, atau sebagai jembatan sementara.</td><td>Kesiapan waktu orang tua, kesempatan bersosialisasi, dan jalur ujian untuk pengakuan hasil belajar.</td></tr>
                </tbody>
            </table>
            </div>
            <p>Penjelasan lengkap tentang jenis-jenis SLB (A, B, C, D, E, dan seterusnya) ada di artikel <a href="sekolah-slb-untuk-anak-apa">sekolah SLB untuk anak apa</a>, sedangkan konsep dan dasar hukum pendidikan inklusif dibahas di artikel <a href="pendidikan-inklusi">pendidikan inklusi</a>. Untuk jalur rumah, ${ext(L.uu20, 'Pasal 27 UU Sisdiknas')} menyatakan hasil pendidikan informal yang dilakukan keluarga diakui sama dengan pendidikan formal dan nonformal setelah peserta didik lulus ujian sesuai standar nasional pendidikan. Perbandingan untung-ruginya kami uraikan di artikel <a href="perbedaan-homeschooling-dan-sekolah-formal-untuk-abk">perbedaan homeschooling dan sekolah formal untuk ABK</a>, dan tata caranya di artikel <a href="homeschooling-anak-berkebutuhan-khusus">homeschooling untuk ABK</a>.</p>

            <h2 id="hak">Hak Anak Menurut Aturan yang Berlaku</h2>
            <p>Sebelum berkeliling mencari sekolah, ada baiknya orang tua memegang empat pegangan hukum berikut. Semuanya bisa dibaca langsung di sumber resminya.</p>
            <h3>1. Hak atas pendidikan inklusif dan khusus</h3>
            <p>${ext(L.uu8, 'Pasal 10 UU Nomor 8 Tahun 2016')} menyebut hak pendidikan penyandang disabilitas meliputi hak mendapatkan pendidikan yang bermutu pada satuan pendidikan di semua jenis, jalur, dan jenjang pendidikan <strong>secara inklusif dan khusus</strong>, serta hak mendapatkan akomodasi yang layak sebagai peserta didik. Pasal 40 ayat (1) UU yang sama mewajibkan pemerintah dan pemerintah daerah menyelenggarakan dan/atau memfasilitasi pendidikan untuk penyandang disabilitas di setiap jalur, jenis, dan jenjang pendidikan.</p>
            <h3>2. Kewajiban akomodasi yang layak</h3>
            <p>${ext(L.p48, 'Permendikbudristek Nomor 48 Tahun 2023')} mendefinisikan akomodasi yang layak sebagai modifikasi dan penyesuaian yang tepat dan diperlukan untuk menjamin penikmatan atau pelaksanaan hak penyandang disabilitas berdasarkan kesetaraan. Menurut Pasal 12, bentuk akomodasi diberikan berdasarkan hasil <strong>asesmen fungsional</strong> yang dilaksanakan sekolah, dan pemenuhannya dilakukan melalui konsultasi yang melibatkan peserta didik, <strong>orang tua/wali</strong>, dan Unit Layanan Disabilitas. Satuan pendidikan yang sudah mendapat fasilitasi dari pemerintah daerah wajib menyediakan akomodasi yang layak.</p>
            <h3>3. Unit Layanan Disabilitas di dinas pendidikan</h3>
            <p>Pasal 13 peraturan yang sama mewajibkan pemerintah daerah melalui dinas pendidikan memfasilitasi pembentukan Unit Layanan Disabilitas (ULD) untuk PAUD formal, pendidikan dasar, dan pendidikan menengah. Tugas ULD menurut Pasal 16 antara lain menyediakan data dan informasi, memberikan rekomendasi, melaksanakan pendampingan, serta membangun sinergi antara keluarga, sekolah, dan masyarakat. Jadi orang tua bisa bertanya ke dinas pendidikan kabupaten/kota tentang ULD di daerahnya.</p>
            <h3>4. Jalur afirmasi saat penerimaan murid baru</h3>
            <p>${ext(L.spmb, 'Permendikdasmen Nomor 3 Tahun 2025 tentang Sistem Penerimaan Murid Baru (SPMB)')} menyediakan Jalur Afirmasi untuk calon murid dari keluarga ekonomi tidak mampu dan calon murid penyandang disabilitas. Kuotanya paling sedikit 15% daya tampung untuk SD, 20% untuk SMP, dan 30% untuk SMA (Pasal 30 ayat 3), dibagi bersama kelompok ekonomi tidak mampu. Persyaratan usia juga dikecualikan bagi calon murid penyandang disabilitas (Pasal 15).</p>
            <p><em>Catatan penting:</em> banyak tulisan di internet masih mengutip Permendiknas Nomor 70 Tahun 2009, termasuk aturan penunjukan sekolah inklusi di setiap kecamatan. Ketentuan tentang peserta didik yang memiliki kelainan dalam peraturan itu sudah dicabut oleh Pasal 43 Permendikbudristek 48/2023, dan ${ext(L.p70, 'JDIH Kemendikdasmen')} kini mencatat statusnya "Tidak Berlaku". Karena itu, cara paling aman mengetahui sekolah mana yang siap menerima anak adalah menanyakannya langsung ke dinas pendidikan atau ULD setempat.</p>

            <h2 id="akomodasi">Contoh Akomodasi yang Layak di Sekolah</h2>
            <p>Lampiran II Permendikbudristek 48/2023 merinci bentuk akomodasi per ragam disabilitas. Untuk peserta didik penyandang disabilitas intelektual dan mental, contohnya antara lain:</p>
            <ul>
                <li>ruang untuk melepas ketegangan atau ruang relaksasi;</li>
                <li>fleksibilitas proses pembelajaran dan bentuk materi sesuai rekomendasi hasil asesmen kebutuhan;</li>
                <li>fleksibilitas evaluasi, penilaian, serta waktu penyelesaian tugas;</li>
                <li>penyesuaian rasio jumlah guru dengan jumlah peserta didik di kelas;</li>
                <li>pembelajaran keterampilan hidup sehari-hari dan keterampilan berinteraksi di masyarakat;</li>
                <li>fleksibilitas posisi duduk dan waktu istirahat, serta akses konseling rutin untuk disabilitas mental;</li>
                <li>surat keterangan dari sekolah yang menginformasikan ragam disabilitas dan capaian kemampuan anak.</li>
            </ul>
            <p>Daftar ini berguna sebagai bahan pertanyaan saat mengunjungi calon sekolah. Sekolah yang baik biasanya bisa menjelaskan akomodasi mana yang sudah mereka jalankan, bukan sekadar menjawab "bisa diatur nanti". Contoh penyesuaian soal ujian bisa dilihat di artikel <a href="adaptasi-soal-ujian-untuk-anak-abk">adaptasi soal ujian untuk anak ABK</a>.</p>

            <h2 id="faktor">Faktor yang Menentukan Pilihan</h2>
            <p>Dua anak dengan diagnosis yang sama bisa membutuhkan sekolah yang sangat berbeda. Pertimbangkan hal-hal berikut secara jujur:</p>
            <ol>
                <li><strong>Tingkat dukungan belajar yang dibutuhkan.</strong> Apakah anak bisa mengikuti materi kelas dengan penyesuaian, atau butuh kurikulum yang sangat dimodifikasi dan kelas kecil?</li>
                <li><strong>Cara anak berkomunikasi.</strong> Anak yang memakai bahasa isyarat, braille, atau alat bantu komunikasi perlu guru dan teman yang memahami cara itu.</li>
                <li><strong>Kebutuhan sensori dan regulasi emosi.</strong> Kelas besar yang ramai bisa membuat sebagian anak kewalahan. Tanyakan apakah ada ruang tenang dan bagaimana guru menangani anak yang sedang tantrum atau cemas.</li>
                <li><strong>Kemandirian sehari-hari.</strong> Makan, ke toilet, dan berpindah tempat. Bila anak masih butuh banyak bantuan, pastikan sekolah punya pendamping yang cukup.</li>
                <li><strong>Kesiapan sekolah, bukan sekadar label.</strong> Sekolah berlabel inklusi belum tentu punya guru pendamping; sebaliknya ada sekolah reguler yang sangat terbuka dan kreatif.</li>
                <li><strong>Jarak, biaya, dan ritme keluarga.</strong> Sekolah terbaik di atas kertas bisa menjadi beban bila perjalanannya dua jam setiap hari.</li>
                <li><strong>Suara anak sendiri.</strong> Ajak anak mengunjungi sekolah dan perhatikan reaksinya. Untuk anak yang lebih besar, tanyakan langsung apa yang ia harapkan.</li>
            </ol>

            <h2 id="langkah">Langkah Memilih Sekolah</h2>
            <ol>
                <li><strong>Mulai dari asesmen.</strong> Hasil pemeriksaan psikolog atau tim tumbuh kembang menggambarkan kekuatan dan hambatan anak, dan menjadi dasar akomodasi. Prosesnya dijelaskan di artikel <a href="asesmen-abk">asesmen ABK</a>.</li>
                <li><strong>Buat daftar calon sekolah.</strong> Tanyakan ke dinas pendidikan atau ULD, sesama orang tua ABK, dan terapis anak. Bila tinggal di Yogyakarta, daftar SLB bisa dilihat di artikel <a href="slb-terdekat">SLB terdekat</a>.</li>
                <li><strong>Kunjungi dan amati kelas.</strong> Datang saat jam belajar, bukan hanya saat pendaftaran. Perhatikan cara guru berbicara kepada siswa dan bagaimana anak berkebutuhan khusus dilibatkan.</li>
                <li><strong>Ajukan pertanyaan konkret.</strong> Siapa yang mendampingi anak, berapa rasio guru dan siswa, apakah ada program pembelajaran individual, bagaimana penilaiannya, dan bagaimana komunikasi dengan orang tua. Peran pendamping dijelaskan di artikel <a href="gpk-adalah">GPK (guru pembimbing khusus)</a> dan <a href="shadow-teacher-adalah">shadow teacher</a>, sedangkan rencana belajar per anak dibahas di artikel <a href="program-pembelajaran-individual">program pembelajaran individual</a>.</li>
                <li><strong>Siapkan dokumen SPMB.</strong> Untuk Jalur Afirmasi, Pasal 19 ayat (2) Permendikdasmen 3/2025 mensyaratkan kartu penyandang disabilitas dari kementerian bidang sosial atau surat keterangan dari dokter atau dokter spesialis. Cek jadwal dan petunjuk teknis SPMB di daerah Anda.</li>
                <li><strong>Sepakati rencana awal.</strong> Minta sekolah menuliskan akomodasi yang akan diberikan dan kapan akan dievaluasi. Masa peralihan juga perlu disiapkan; tipsnya ada di artikel <a href="transisi-anak-abk-dari-tk-ke-sd">transisi anak ABK dari TK ke SD</a>.</li>
            </ol>

            <h2 id="ditolak">Kalau Anak Ditolak Sekolah</h2>
            <p>Penolakan terasa menyakitkan, tetapi tetap ada langkah yang bisa ditempuh dengan tenang:</p>
            <ul>
                <li>Minta penjelasan alasan penolakan, sebaiknya secara tertulis, dan tanyakan akomodasi apa yang menurut sekolah tidak bisa mereka sediakan.</li>
                <li>Hubungi dinas pendidikan kabupaten/kota atau ULD. Permendikbudristek 48/2023 Pasal 5 ayat (2) meminta pemerintah daerah memfasilitasi akomodasi yang layak secara bertahap, dan sekolah negeri yang belum memiliki peserta didik disabilitas dapat mengajukan permohonan fasilitasi.</li>
                <li>Bila ada dugaan pelanggaran, Pasal 27 memberi ruang bagi masyarakat untuk menyampaikan pengaduan tertulis kepada Menteri, gubernur, bupati/wali kota, dan/atau Komisi Nasional Disabilitas. Sekolah yang sudah difasilitasi namun tidak menyediakan akomodasi yang layak dapat dikenai sanksi administratif, mulai dari teguran tertulis sampai pencabutan izin (Pasal 28 dan 29).</li>
            </ul>
            <p>Di sisi lain, tidak semua penolakan berarti diskriminasi. Kadang sekolah memang jujur belum mampu, dan memaksakan anak masuk ke lingkungan yang tidak siap bisa merugikan anak sendiri. Menimbang hal ini bersama tenaga profesional akan membantu.</p>

            <h2 id="evaluasi">Kapan Perlu Mempertimbangkan Pindah Jalur</h2>
            <p>Pilihan sekolah sebaiknya ditinjau ulang secara berkala, misalnya setiap akhir semester. Beberapa tanda yang perlu didiskusikan dengan guru dan terapis:</p>
            <ul>
                <li>anak terus-menerus menolak berangkat sekolah, sering sakit perut atau sulit tidur menjelang hari sekolah;</li>
                <li>tidak ada kemajuan berarti setelah beberapa bulan meski akomodasi sudah dijalankan;</li>
                <li>anak sering menjadi sasaran ejekan atau perundungan dan sekolah tidak menanganinya;</li>
                <li>sebaliknya, anak di SLB sudah berkembang pesat dan tampak siap belajar bersama teman sebaya di sekolah reguler.</li>
            </ul>
            <p>Perpindahan bukan tanda kegagalan orang tua. Justru itu tanda Ayah dan Bunda memperhatikan anak. Dukungan emosional untuk orang tua selama proses ini juga penting, seperti dibahas di artikel <a href="dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">Di <a href="../sekolah-inklusi-sleman">Sekolah Inklusi Taruna Imani</a>, anak berkebutuhan khusus belajar bersama teman sebayanya dengan pendampingan guru. Bila Ayah dan Bunda masih menimbang pilihan, tim kami terbuka untuk berdiskusi tentang kebutuhan anak. YUKA bukan fasilitas kesehatan dan tidak menegakkan diagnosis; untuk pemeriksaan, kami akan menyarankan tenaga profesional yang sesuai.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="sekolah-slb-untuk-anak-apa">Sekolah SLB untuk Anak Apa?</a></h4>
                    <p>Jenis SLB dan ragam kebutuhan yang dilayani masing-masing.</p>
                </div>
                <div class="related-card">
                    <h4><a href="pendidikan-inklusi">Pendidikan Inklusi</a></h4>
                    <p>Pengertian, prinsip, dan praktik pendidikan inklusi di sekolah.</p>
                </div>
                <div class="related-card">
                    <h4><a href="program-pemerintah-untuk-abk">Program Pemerintah untuk ABK</a></h4>
                    <p>Cara mencari bantuan pendidikan, kesehatan, dan sosial dari layanan resmi.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#SekolahABK</a>
            <a href="#">#PendidikanInklusi</a>
            <a href="#">#SLB</a>
            <a href="#">#AkomodasiLayak</a>
            <a href="#">#ParentingABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.uu8, '<strong>Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas</strong> (Pasal 10 dan Pasal 40)')}</li>
              <li>${ext(L.uu20, '<strong>Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional</strong> (Pasal 27 dan Pasal 32), JDIH Kemendikdasmen')}</li>
              <li>${ext(L.p48, '<strong>Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</strong> (Pasal 1, 5, 12, 13, 16, 27 sampai 29, 43, dan Lampiran II), JDIH Kemendikdasmen')}</li>
              <li>${ext(L.spmb, '<strong>Permendikdasmen Nomor 3 Tahun 2025 tentang Sistem Penerimaan Murid Baru</strong> (Pasal 1 angka 21, Pasal 15, Pasal 19, Pasal 30), JDIH Kemendikdasmen')}</li>
              <li>${ext(L.p70, '<strong>Permendiknas Nomor 70 Tahun 2009 tentang Pendidikan Inklusif</strong>, berstatus Tidak Berlaku di JDIH Kemendikdasmen')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat hukum maupun pengganti asesmen dari tenaga profesional</strong>. Regulasi dicek pada 25 September 2026 dan dapat berubah. Untuk ketentuan penerimaan murid di daerah Anda, rujuk petunjuk teknis dinas pendidikan setempat.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Anak%20ABK%20Harus%20Sekolah%20Dimana%3F%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.030-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.870 9.870 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.480-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.830c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.470h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=Anak%20ABK%20Harus%20Sekolah%20Dimana%3F&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            </div>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional atau nasihat hukum. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
</article>

    <section class="section bg-primary" style="padding: 4rem 0;">
        <div class="container text-center">
            <h2 style="color: var(--white); margin-bottom: 1rem;">Bantu Pendidikan Anak Berkebutuhan Khusus</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 2rem;">Setiap donasi Anda membantu anak-anak dengan beragam kemampuan mendapatkan pendidikan dan pendampingan yang sesuai kebutuhan mereka.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="../donasi" class="btn btn-secondary">Donasi Sekarang</a>
                <a href="https://wa.me/6281229912332?text=Halo%20YUKA%2C%20saya%20ingin%20bertanya%20tentang%20sekolah%20untuk%20anak%20berkebutuhan%20khusus" target="_blank" class="btn btn-outline-light">Hubungi via WhatsApp</a>
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

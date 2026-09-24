#!/usr/bin/env node
'use strict';

// One-time generator for artikel/perawatan-gigi-anak-berkebutuhan-khusus-tips.html
// (catchup 2026-09-25, kartu F7t9kO0v). Canonical shell via scripts/lib/article-shell.js.
// YMYL: every factual statement links inline to AAPD, NIDCR, ADA, CDC, WHO, IDAI,
// Kemenkes, or peer-reviewed reviews on PubMed. Hero is a real CC BY-SA photo from
// Wikimedia Commons with visible credit (no AI image). 0 identical paragraphs with
// other articles is checked after writing.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'perawatan-gigi-anak-berkebutuhan-khusus-tips';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const TITLE_TAG = 'Perawatan Gigi Anak Berkebutuhan Khusus: Tips di Rumah';
const META_DESC = 'Perawatan gigi anak berkebutuhan khusus butuh cara yang disesuaikan. Simak tips menyikat gigi, pola makan, dan persiapan ke dokter gigi. Baca panduannya.';
const OG_TITLE = 'Perawatan Gigi Anak Berkebutuhan Khusus: Tips Menyikat Gigi, Pola Makan, dan Kunjungan ke Dokter Gigi';
const OG_DESC = 'Panduan perawatan gigi anak berkebutuhan khusus berdasarkan AAPD, NIDCR, ADA, CDC, IDAI, dan Kemenkes: alat yang tepat, posisi menyikat, anak sensitif sensorik, kondisi medis khusus, dan persiapan ke dokter gigi.';
const H1 = 'Perawatan Gigi Anak Berkebutuhan Khusus: Tips Menyikat Gigi, Pola Makan, dan Kunjungan ke Dokter Gigi';
const IMAGE_HERO = 'assets/images/artikel/anak-down-syndrome-menyikat-gigi-wikimedia.webp';
const IMAGE_HERO_ALT = 'Anak laki-laki dengan sindrom Down berkaus krem memegang sendiri sikat gigi merah berkepala kuning di depan mulutnya sambil melirik ke samping';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25T02:30:00+07:00';
const DATE_MODIFIED = '2026-09-25T02:30:00+07:00';
const DATE_DISPLAY = '25 September 2026';

const CREDIT = {
  name: 'Latrobebohs',
  source: 'https://commons.wikimedia.org/wiki/File:Nepalese_child_with_Down_Syndrome_practicing_oral_health_during_an_oral_health_promotion_activity.jpg',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const faq = [
  {
    q: 'Berapa kali sehari gigi anak berkebutuhan khusus harus disikat?',
    a: 'Sama seperti anak lain, yaitu dua kali sehari: pagi dan malam sebelum tidur, memakai pasta gigi berfluoride. Anjuran ini disampaikan Kementerian Kesehatan. Bila anak belum mampu menyikat sendiri, orang tua atau pendamping yang menyikatkan, lalu anak dilatih mengambil alih langkah demi langkah.'
  },
  {
    q: 'Berapa banyak pasta gigi yang boleh dipakai anak?',
    a: 'Menurut American Dental Association, anak di bawah 3 tahun cukup memakai pasta gigi berfluoride seukuran butir beras, sedangkan anak usia 3 sampai 6 tahun seukuran biji kacang polong. Untuk anak yang belum bisa meludah atau cenderung menelan pasta gigi, tanyakan takaran yang aman kepada dokter gigi anak.'
  },
  {
    q: 'Anak saya menolak keras saat disikat giginya. Apa yang harus dilakukan?',
    a: 'Mulailah dari langkah yang bisa diterima anak, misalnya hanya memegang sikat atau menyentuhkan sikat ke bibir, lalu tambah sedikit demi sedikit. Jadwal bergambar, posisi yang stabil, dan waktu yang sama setiap hari membantu anak tahu apa yang akan terjadi. Bila penolakan terkait sensitivitas sensorik, terapis okupasi bisa membantu menyusun latihannya.'
  },
  {
    q: 'Kapan anak berkebutuhan khusus pertama kali dibawa ke dokter gigi?',
    a: 'Ikatan Dokter Anak Indonesia menyebut usia 0 sampai 1 tahun, terutama menjelang 12 bulan, sebagai usia awal kontrol pertama ke dokter gigi. Setelah itu Kemenkes menganjurkan pemeriksaan setiap 6 bulan meskipun tidak ada keluhan. Untuk anak dengan kebutuhan khusus, dokter gigi spesialis kedokteran gigi anak umumnya paling siap menangani.'
  },
  {
    q: 'Apakah obat yang rutin diminum anak bisa memengaruhi giginya?',
    a: 'Bisa. NIDCR menyebut sebagian obat resep dapat menyebabkan mulut kering, pembengkakan gusi, atau perubahan lain yang menyulitkan perawatan mulut. Jangan menghentikan atau mengganti obat sendiri. Sampaikan daftar obat anak kepada dokter gigi dan dokter yang meresepkan agar perawatannya bisa disesuaikan.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Perawatan Gigi Anak Berkebutuhan Khusus', item: CANONICAL }
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
    width: 900,
    height: 1200,
    caption: 'Anak dengan sindrom Down berlatih menyikat gigi dalam kegiatan promosi kesehatan mulut di Nepal',
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
  keywords: 'perawatan gigi anak berkebutuhan khusus, tips menyikat gigi anak abk, kesehatan gigi anak autis, gigi anak down syndrome, dokter gigi anak berkebutuhan khusus',
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
  aapd: 'https://www.aapd.org/research/oral-health-policies--recommendations/management-of-dental-patients-with-special-health-care-needs/',
  nidcr: 'https://www.nidcr.nih.gov/health-info/developmental-disabilities',
  ada: 'https://www.mouthhealthy.org/all-topics-a-z/fluoride',
  cdc: 'https://www.cdc.gov/oral-health/prevention/oral-health-tips-for-children.html',
  who: 'https://www.who.int/news-room/fact-sheets/detail/oral-health',
  idai: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/kapan-anak-mulai-menggosok-gigi',
  kemenkesKaries: 'https://keslan.kemkes.go.id/view_artikel/4156/ketahui-apa-itu-karies-gigi-pada-anak',
  kemenkesGingivitis: 'https://keslan.kemkes.go.id/view_artikel/4154/apa-itu-gingivitis-pada-anak',
  downPerio: 'https://pubmed.ncbi.nlm.nih.gov/37341556/',
  asdCaries: 'https://pubmed.ncbi.nlm.nih.gov/39976759/',
  asdAdapt: 'https://pubmed.ncbi.nlm.nih.gov/39685603/',
  cermak: 'https://pubmed.ncbi.nlm.nih.gov/25931290/'
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
    <meta name="keywords" content="perawatan gigi anak berkebutuhan khusus, tips menyikat gigi anak abk, kesehatan gigi anak autis, gigi anak down syndrome, dokter gigi anak, YUKA">
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
        .article-featured-image figcaption a, .article-inline-image figcaption a { color: #1565C0; text-decoration: underline; }
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
        .article-inline-image { margin: 2rem auto; max-width: 560px; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
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
        .crisis-box { background: #fdecea; border-left: 4px solid #c62828; padding: 1.5rem; margin: 2rem 0; border-radius: 0 12px 12px 0; }
        .crisis-box h4 { color: #b71c1c; margin-top: 0; }
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
                <span class="current">Perawatan Gigi Anak Berkebutuhan Khusus</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="900" height="1200" fetchpriority="high">
            <figcaption>Seorang anak dengan sindrom Down berlatih menyikat gigi sendiri dalam kegiatan promosi kesehatan mulut di Nepal. Anak dalam foto bukan murid YUKA.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Perawatan gigi anak berkebutuhan khusus pada dasarnya sama dengan anak lain: sikat gigi dua kali sehari dengan pasta gigi berfluoride, batasi gula, dan periksa ke dokter gigi secara rutin.</strong> Bedanya ada pada caranya. Anak mungkin belum bisa memegang sikat, tidak tahan rasa busa di mulut, sulit membuka mulut lama, atau sedang minum obat yang memengaruhi gusi. Karena itu alat, posisi, urutan, dan persiapan ke dokter gigi perlu disesuaikan dengan kemampuan anak.</p>

            <p>Kesehatan mulut bukan urusan kecil. ${ext(L.who, 'Organisasi Kesehatan Dunia (WHO)')} memperkirakan penyakit mulut dialami hampir 3,7 miliar orang, padahal sebagian besar bisa dicegah. Pada anak yang kesulitan menyampaikan rasa sakit, gigi berlubang bisa lama tidak ketahuan dan baru terlihat saat anak rewel, menolak makan, atau sulit tidur. Artikel ini merangkum langkah praktis yang bisa dilakukan orang tua dan pendamping di rumah.</p>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini berisi informasi umum. Kondisi mulut tiap anak berbeda, jadi rencana perawatannya sebaiknya disusun bersama dokter gigi, terutama dokter gigi spesialis kedokteran gigi anak, serta dokter anak yang menangani kondisi medisnya.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#lebih-rentan">Kenapa gigi anak ABK lebih rentan</a></li>
                    <li><a href="#alat">Memilih sikat gigi dan pasta gigi</a></li>
                    <li><a href="#langkah">Posisi dan langkah menyikat gigi</a></li>
                    <li><a href="#sensorik">Bila anak menolak karena sensitif sensorik</a></li>
                    <li><a href="#kondisi-khusus">Perhatian untuk kondisi tertentu</a></li>
                    <li><a href="#makanan">Makanan, minuman, dan hadiah</a></li>
                    <li><a href="#dokter-gigi">Menyiapkan kunjungan ke dokter gigi</a></li>
                    <li><a href="#tanda-bahaya">Kapan harus segera ke dokter gigi</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="lebih-rentan">Kenapa Gigi Anak ABK Lebih Rentan</h2>
            <p>Pedoman ${ext(L.aapd, 'American Academy of Pediatric Dentistry (AAPD)')} tentang pasien dengan kebutuhan kesehatan khusus menjelaskan bahwa kelompok ini berisiko lebih tinggi mengalami kesehatan mulut yang buruk karena kondisi medis, masalah sensorik, tantangan perilaku, dan hambatan besar dalam mengakses layanan gigi. AAPD juga mencatat bahwa makin berat kondisi kesehatan anak, makin besar kemungkinan kebutuhan perawatan giginya tidak terpenuhi.</p>
            <p>${ext(L.nidcr, 'National Institute of Dental and Craniofacial Research (NIDCR)')} di Amerika Serikat merinci penyebabnya. Gigi berlubang sering dijumpai pada penyandang disabilitas perkembangan, antara lain karena kebersihan mulut kurang terjaga dan gigi yang berjejal atau bentuknya tidak biasa sehingga lebih sulit dibersihkan. Penyakit gusi juga muncul lebih sering dan pada usia lebih muda. Kebiasaan seperti menggeretakkan gigi, menyimpan makanan di pipi, bernapas lewat mulut, dan mendorong lidah ke depan ikut memperberat masalah.</p>
            <p>Penelitian gabungan memberi gambaran yang lebih spesifik:</p>
            <ul>
                <li><strong>Sindrom Down.</strong> ${ext(L.downPerio, 'Tinjauan sistematis dan meta-analisis tahun 2023')} yang menggabungkan 26 penelitian menemukan hubungan kuat antara sindrom Down dan periodontitis (radang jaringan penyangga gigi), dengan rasio odds 3,93, serta hubungan sedang dengan radang gusi. Penulisnya mencatat kualitas studi yang dianalisis tergolong sedang hingga rendah.</li>
                <li><strong>Autisme.</strong> ${ext(L.asdCaries, 'Meta-analisis 25 penelitian yang terbit 2025')} tidak menemukan perbedaan bermakna pada sebagian besar indikator gigi berlubang antara anak dengan dan tanpa autisme. Namun jumlah permukaan gigi yang berlubang lebih tinggi pada anak autis, yang menunjukkan kerusakan cenderung lebih parah ketika terjadi.</li>
            </ul>
            <p>Artinya, risiko tidak datang dari diagnosisnya saja, tetapi dari kombinasi kebiasaan, kemampuan motorik, pola makan, obat, dan akses ke dokter gigi. Kabar baiknya, sebagian besar faktor itu bisa diperbaiki di rumah.</p>

            <h2 id="alat">Memilih Sikat Gigi dan Pasta Gigi</h2>
            <p>Kementerian Kesehatan dalam ${ext(L.kemenkesGingivitis, 'panduan pencegahan radang gusi pada anak')} menganjurkan sikat gigi berbulu lembut yang sesuai usia anak. Untuk anak berkebutuhan khusus, beberapa penyesuaian berikut sering membantu:</p>
            <ul>
                <li><strong>Gagang yang mudah digenggam.</strong> NIDCR menyarankan sikat gigi dimodifikasi sesuai keterbatasan fisik agar anak tetap bisa menyikat sendiri. Contohnya, gagang dibungkus busa atau karet agar lebih tebal. Terapis okupasi bisa membantu memilih bentuk genggaman yang paling cocok. Latihan kekuatan tangan juga dibahas di artikel <a href="terapi-okupasi">terapi okupasi</a>.</li>
                <li><strong>Kepala sikat kecil.</strong> Lebih mudah menjangkau gigi belakang dan tidak memicu refleks muntah sebesar kepala sikat dewasa.</li>
                <li><strong>Takaran pasta gigi sesuai usia.</strong> ${ext(L.ada, 'American Dental Association (ADA)')} menganjurkan pasta gigi berfluoride seukuran butir beras untuk anak di bawah 3 tahun, dan seukuran biji kacang polong untuk usia 3 sampai 6 tahun.</li>
                <li><strong>Alat bantu benang gigi.</strong> NIDCR menyebut flossing bisa sangat sulit bagi sebagian anak, sehingga orang tua mungkin perlu melakukannya untuk anak atau memakai pegangan benang gigi (floss holder).</li>
            </ul>
            <p>Pasta gigi berfluoride dipilih karena, menurut ADA, fluoride membantu memperbaiki kerusakan awal lapisan email akibat asam dari bakteri. Bila anak belum bisa meludah dan sering menelan pasta gigi, diskusikan pilihan dan takarannya dengan dokter gigi anak, jangan langsung beralih ke pasta tanpa fluoride.</p>

            <h2 id="langkah">Posisi dan Langkah Menyikat Gigi</h2>
            <p>Kemenkes melalui ${ext(L.kemenkesKaries, 'halaman pencegahan karies gigi pada anak')} menganjurkan anak menyikat gigi dua kali sehari, pagi dan malam sebelum tidur, dengan pasta gigi berfluoride. ${ext(L.cdc, 'CDC')} menambahkan agar orang tua membantu menyikat sampai anak punya keterampilan yang baik, dan mengawasi anak di bawah 6 tahun supaya pasta gigi diludahkan, bukan ditelan. ADA menyebut durasi sekitar dua menit untuk anak usia 3 sampai 6 tahun.</p>
            <p>NIDCR mengingatkan bahwa, tergantung kemampuan anak, pendamping mungkin perlu mengambil alih tugas menyikat. Urutan yang biasa kami anjurkan kepada orang tua di YUKA:</p>
            <ol>
                <li><strong>Pilih tempat yang tenang dan terang.</strong> Tidak harus di kamar mandi. Anak yang tegang di wastafel bisa disikat sambil duduk di sofa atau berbaring di pangkuan.</li>
                <li><strong>Stabilkan posisi.</strong> Untuk anak kecil atau anak yang sulit duduk tegak, pendamping duduk di belakang atau di samping anak sehingga kepala anak bersandar di dada atau lengan pendamping. Posisi ini membuat pendamping bisa melihat ke dalam mulut dan menahan kepala dengan lembut.</li>
                <li><strong>Mulai dari bagian yang paling mudah diterima anak.</strong> Biasanya gigi depan bagian luar, lalu perlahan ke gigi belakang dan permukaan dalam.</li>
                <li><strong>Gunakan hitungan atau lagu pendek.</strong> Anak lebih tenang bila tahu kapan kegiatan selesai. Hitung sampai sepuluh untuk tiap bagian mulut, lalu pindah.</li>
                <li><strong>Akhiri dengan pujian yang spesifik.</strong> Misalnya, "Tadi Adik membuka mulut lebar sekali." Pujian yang jelas lebih mudah dipahami daripada "pintar".</li>
            </ol>
            <p>Anak yang mampu menyikat sendiri tetap perlu diperiksa hasilnya, terutama gigi geraham belakang yang sering terlewat. Cara melatih kemandirian bertahap bisa dibaca di artikel <a href="bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh">mengajarkan kemandirian kepada anak berkebutuhan khusus</a>.</p>

            <h2 id="sensorik">Bila Anak Menolak karena Sensitif Sensorik</h2>
            <p>Bagi sebagian anak, terutama anak autis, bulu sikat, rasa mint, busa, dan suara air bisa terasa sangat mengganggu. Penolakan keras saat sikat gigi sering bukan soal nakal, melainkan cara anak menghadapi rangsangan yang berlebihan. Penjelasan tentang pengolahan sensorik ada di artikel <a href="sensori-integrasi">sensori integrasi</a>.</p>
            <p>Beberapa strategi yang bisa dicoba di rumah:</p>
            <ul>
                <li><strong>Naik bertahap.</strong> Minggu pertama cukup memegang sikat. Minggu berikutnya menyentuhkan sikat ke bibir, lalu ke gigi depan, dan seterusnya. Setiap tahap dipertahankan sampai anak tenang.</li>
                <li><strong>Kurangi rangsangan.</strong> Coba pasta gigi dengan rasa yang lebih lembut, sikat berbulu ekstra lembut, dan lampu yang tidak menyilaukan.</li>
                <li><strong>Buat urutannya bisa dilihat.</strong> Gambar langkah ambil sikat, beri pasta, sikat gigi atas, sikat gigi bawah, kumur, lalu selesai. Panduannya ada di artikel <a href="cara-membuat-jadwal-visual-untuk-anak-autis">cara membuat jadwal visual untuk anak autis</a>.</li>
                <li><strong>Tonton contoh.</strong> Video singkat orang lain menyikat gigi dapat membantu anak meniru.</li>
            </ul>
            <p>Strategi serupa terbukti membantu di klinik. ${ext(L.asdAdapt, 'Tinjauan sistematis sembilan uji acak terkontrol tahun 2024')} menemukan bahwa pada anak autis, strategi adaptasi seperti alat bantu visual, video modeling, dan ruang praktik yang disesuaikan secara sensorik memperbaiki kebersihan mulut, menurunkan kecemasan, dan meningkatkan kerja sama. Penulisnya mencatat video modeling dan lingkungan yang disesuaikan secara sensorik paling efektif mengurangi rasa tertekan saat ke dokter gigi.</p>

            <h2 id="kondisi-khusus">Perhatian untuk Kondisi Tertentu</h2>
            <p>NIDCR mencatat beberapa kondisi yang memengaruhi perawatan mulut. Tabel berikut merangkumnya bersama hal yang bisa dilakukan keluarga.</p>
            <div style="overflow-x:auto;">
            <table class="classification-table">
                <thead>
                    <tr><th>Kondisi</th><th>Yang perlu diperhatikan (menurut NIDCR)</th><th>Yang bisa dilakukan keluarga</th></tr>
                </thead>
                <tbody>
                    <tr><td>Sindrom Down</td><td>Gigi bisa tumbuh terlambat, bahkan gigi susu pertama baru muncul sekitar usia 2 tahun. Gangguan jantung juga sering menyertai.</td><td>Tetap bersihkan gusi sejak bayi. Sampaikan riwayat jantung kepada dokter gigi, karena NIDCR menganjurkan konsultasi dengan dokter jantung soal perlu tidaknya antibiotik sebelum tindakan.</td></tr>
                    <tr><td>Cerebral palsy</td><td>Otot pengunyah bisa kaku atau lemah, ada air liur berlebih, mudah tersedak atau muntah. Refluks asam lambung dapat membuat gigi sensitif atau terkikis.</td><td>Pakai sedikit pasta gigi dan kepala sikat kecil. Tanyakan ke dokter posisi yang aman bila anak sulit berbaring telentang.</td></tr>
                    <tr><td>Epilepsi</td><td>Saat kejang, gigi bisa patah atau lidah dan pipi tergigit.</td><td>Periksakan gigi setelah kejang disertai benturan di wajah atau mulut.</td></tr>
                    <tr><td>Anak yang rutin minum obat</td><td>Sebagian obat resep dapat menyebabkan mulut kering, pembengkakan gusi, atau perubahan lain.</td><td>Jangan menghentikan obat sendiri. Bawa daftar obat saat ke dokter gigi.</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.9rem;color:#666;">Ringkasan disusun tim YUKA dari halaman NIDCR tentang disabilitas perkembangan dan kesehatan mulut, bukan pengganti pemeriksaan dokter.</p>
            <p>Untuk memahami kondisi-kondisi tersebut lebih jauh, baca artikel <a href="down-syndrome-adalah">down syndrome adalah</a> dan <a href="cerebral-palsy-adalah">cerebral palsy adalah</a>. Anak dengan kesulitan mengunyah dan menelan juga bisa terbantu latihan otot mulut yang dibahas di artikel <a href="terapi-wicara-oral-motor-exercises">latihan oral motor dalam terapi wicara</a>.</p>

            <h2 id="makanan">Makanan, Minuman, dan Hadiah</h2>
            <p>Sikat gigi yang rajin bisa kalah oleh kebiasaan ngemil manis sepanjang hari. Kemenkes menyebut konsumsi gula berlebihan dari permen, biskuit, minuman manis, dan camilan lain sebagai penyebab utama karies pada anak. Pencegahannya adalah mengurangi makanan manis, membatasi camilan di antara waktu makan, dan membiasakan minum air putih setelah makan. Kemenkes juga mengingatkan bahaya tertidur dengan botol susu di mulut, karena sisa susu menempel di gigi dan menjadi makanan bakteri.</p>

            <figure class="article-inline-image">
                <img src="../Dokumentasi/cpao-anak-chef-makan-kue-bahagia-017.webp" alt="Anak laki-laki bertopi koki biru dan celemek cokelat memejamkan mata sambil tertawa lebar, memegang bakpao bergaris cokelat di atas piring kecil di teras" width="936" height="1248" loading="lazy">
                <figcaption>Seorang murid YUKA menikmati bakpao buatannya sendiri di kelas memasak. Kudapan manis tidak harus dilarang, cukup diberikan bersama waktu makan lalu diikuti minum air putih. Foto: dokumentasi YUKA.</figcaption>
            </figure>

            <p>Tantangannya, banyak anak berkebutuhan khusus pemilih makanan dan hanya mau beberapa jenis camilan. Strategi memperluas pilihan makanan dibahas di artikel <a href="cara-mengatasi-picky-eater-anak-autis">cara mengatasi picky eater pada anak autis</a>. Satu hal lagi yang sering terlewat: permen dan cokelat kerap dipakai sebagai hadiah dalam latihan perilaku. Pertimbangkan hadiah lain seperti stiker, waktu bermain, atau kegiatan favorit. Idenya ada di artikel <a href="reward-system-efektif-untuk-anak-autis">sistem hadiah yang efektif untuk anak autis</a>.</p>

            <h2 id="dokter-gigi">Menyiapkan Kunjungan ke Dokter Gigi</h2>
            <p>${ext(L.idai, 'Ikatan Dokter Anak Indonesia (IDAI)')} menyebut usia 0 sampai 1 tahun, terutama menjelang 12 bulan, sebagai usia awal kontrol pertama ke dokter gigi. Setelah itu, Kemenkes menganjurkan pemeriksaan setiap 6 bulan sekali meskipun tidak ada keluhan. Untuk anak berkebutuhan khusus, pilih dokter gigi spesialis kedokteran gigi anak atau dokter gigi yang terbiasa menangani pasien berkebutuhan khusus. Kunjungan rutin sejak dini membuat anak mengenal suasana klinik sebelum ada keluhan yang menyakitkan.</p>
            <p>Beberapa persiapan yang membantu:</p>
            <ol>
                <li><strong>Kunjungan perkenalan tanpa tindakan.</strong> NIDCR menyarankan orang tua menghubungi dokter gigi untuk mengatur kunjungan perkenalan tanpa perawatan, agar anak mengenal ruangan dan urutan pemeriksaan sebelum kunjungan sebenarnya.</li>
                <li><strong>Cerita sosial bergambar.</strong> Foto pintu klinik, kursi periksa, lampu, dan cermin kecil, lalu ceritakan urutannya beberapa hari sebelumnya.</li>
                <li><strong>Informasi lengkap untuk dokter.</strong> Diagnosis, obat yang diminum, alergi (NIDCR menyebut alergi lateks mungkin lebih sering pada penyandang disabilitas perkembangan), cara anak berkomunikasi, dan hal yang membuat anak tenang atau panik.</li>
                <li><strong>Jadwal yang tepat.</strong> Pilih jam ketika anak biasanya segar dan tidak lapar. NIDCR mencatat bahwa anak dengan keterbatasan gerak mungkin butuh waktu kunjungan lebih panjang dan bantuan saat pindah ke kursi periksa.</li>
            </ol>
            <p>Klinik yang menyesuaikan lingkungannya juga memberi hasil. Dalam ${ext(L.cermak, 'uji coba acak Cermak dan tim (2015)')} terhadap 44 anak usia 6 sampai 12 tahun, pembersihan gigi profesional di ruang praktik yang disesuaikan secara sensorik menurunkan kecemasan fisiologis serta rasa sakit dan ketidaknyamanan sensorik, baik pada anak autis maupun anak tanpa autisme. Orang tua boleh menanyakan apakah klinik bisa meredupkan lampu atau mengurangi suara.</p>
            <p>Tanyakan juga tindakan pencegahan. Menurut CDC, sealant (lapisan pelindung) pada gigi belakang mencegah 80% gigi berlubang, dan varnish fluoride dapat mencegah sepertiga gigi berlubang pada gigi susu. NIDCR menegaskan sealant efektif mencegah karies pada anak maupun dewasa dengan disabilitas perkembangan.</p>

            <h2 id="tanda-bahaya">Kapan Harus Segera ke Dokter Gigi</h2>
            <div class="crisis-box">
                <h4>Jangan menunggu jadwal kontrol bila muncul tanda berikut</h4>
                <ul style="margin-bottom:0;">
                    <li>Gusi atau pipi bengkak, bernanah, atau anak demam disertai sakit di mulut.</li>
                    <li>Gigi patah, goyang, atau berdarah setelah jatuh atau kejang.</li>
                    <li>Gusi terus berdarah saat disikat selama lebih dari beberapa hari.</li>
                    <li>Anak yang sulit berbicara tiba-tiba menolak makan, sering memegang atau memukul pipi, menggigit tangan, atau sulit tidur tanpa sebab lain yang jelas. Perubahan perilaku seperti ini bisa menjadi cara anak menunjukkan rasa sakit, dan dokter gigi perlu memeriksa untuk memastikan penyebabnya.</li>
                </ul>
            </div>
            <p>Bila pembengkakan disertai sulit bernapas atau sulit menelan, segera bawa anak ke IGD rumah sakit terdekat.</p>

            <div class="story-highlight">
                <h3>Latihan kebersihan diri di YUKA</h3>
                <p style="margin-bottom:0;">Di Sekolah Inklusi Taruna Imani, kebiasaan menjaga kebersihan diri dilatih lewat rutinitas harian dan kegiatan praktik, lalu dikomunikasikan kepada orang tua agar bisa dilanjutkan di rumah. YUKA bukan fasilitas kesehatan dan tidak melakukan pemeriksaan atau perawatan gigi; untuk itu kami mengarahkan keluarga ke dokter gigi anak, puskesmas, atau rumah sakit. Ingin berdiskusi tentang pendampingan anak? <a href="../kontak">Hubungi tim YUKA</a> atau lihat <a href="../program">program YUKA</a>. Bila Ayah dan Bunda merasa kewalahan mengurus semua kebutuhan anak, artikel <a href="dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a> membahas cara membagi peran di rumah.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="sensori-integrasi">Sensori Integrasi</a></h4>
                    <p>Memahami kenapa sebagian anak sangat peka terhadap sentuhan, rasa, dan suara.</p>
                </div>
                <div class="related-card">
                    <h4><a href="cara-mengatasi-picky-eater-anak-autis">Mengatasi Picky Eater pada Anak Autis</a></h4>
                    <p>Langkah bertahap memperluas pilihan makanan anak.</p>
                </div>
                <div class="related-card">
                    <h4><a href="terapi-okupasi">Terapi Okupasi</a></h4>
                    <p>Melatih keterampilan sehari-hari, termasuk merawat diri.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#KesehatanGigiAnak</a>
            <a href="#">#ParentingABK</a>
            <a href="#">#MenyikatGigi</a>
            <a href="#">#DokterGigiAnak</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.aapd, '<strong>American Academy of Pediatric Dentistry: Management of Dental Patients with Special Health Care Needs (Reference Manual of Pediatric Dentistry, revisi 2026)</strong>')}</li>
              <li>${ext(L.nidcr, '<strong>NIDCR (National Institutes of Health): Developmental Disabilities and Oral Health</strong>')}</li>
              <li>${ext(L.ada, '<strong>American Dental Association (MouthHealthy): Fluoride</strong>')}</li>
              <li>${ext(L.cdc, '<strong>CDC: Oral Health Tips for Children</strong>')}</li>
              <li>${ext(L.who, '<strong>WHO: Oral Health Fact Sheet (17 Maret 2025)</strong>')}</li>
              <li>${ext(L.idai, '<strong>Ikatan Dokter Anak Indonesia: Kapan Anak Mulai Menggosok Gigi?</strong>')}</li>
              <li>${ext(L.kemenkesKaries, '<strong>Kementerian Kesehatan RI (Ditjen Kesehatan Lanjutan): Ketahui Apa Itu Karies Gigi pada Anak</strong>')}</li>
              <li>${ext(L.kemenkesGingivitis, '<strong>Kementerian Kesehatan RI (Ditjen Kesehatan Lanjutan): Apa Itu Gingivitis pada Anak</strong>')}</li>
              <li>${ext(L.downPerio, '<strong>Rondón-Avalo S, Rodríguez-Medina C, Botero JE. Association of Down syndrome with periodontal diseases: Systematic review and meta-analysis. Special Care in Dentistry, 2024</strong>')}</li>
              <li>${ext(L.asdCaries, '<strong>da Motta TP, dkk. Dental Caries of Individuals with Autism Spectrum Disorder (ASD): A Systematic Review and Meta-Analysis. Journal of Autism and Developmental Disorders, 2025/2026</strong>')}</li>
              <li>${ext(L.asdAdapt, '<strong>Prynda M, dkk. Dental Adaptation Strategies for Children with Autism Spectrum Disorder: A Systematic Review of Randomized Trials. Journal of Clinical Medicine, 2024</strong>')}</li>
              <li>${ext(L.cermak, '<strong>Cermak SA, dkk. Sensory Adapted Dental Environments to Enhance Oral Care for Children with Autism Spectrum Disorders: A Randomized Controlled Pilot Study. Journal of Autism and Developmental Disorders, 2015</strong>')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti pemeriksaan oleh dokter gigi atau dokter anak</strong>. Konsultasikan perawatan gigi anak, termasuk pemakaian fluoride dan pengaruh obat yang diminum, kepada dokter gigi spesialis kedokteran gigi anak.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Perawatan%20Gigi%20Anak%20Berkebutuhan%20Khusus%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.870 9.870 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.480-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.470h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=Perawatan%20Gigi%20Anak%20Berkebutuhan%20Khusus&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
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

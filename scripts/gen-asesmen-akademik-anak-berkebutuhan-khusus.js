#!/usr/bin/env node
'use strict';

// One-time generator for artikel/asesmen-akademik-anak-berkebutuhan-khusus.html
// (catchup 2026-09-25, kartu yLze0aPm). Canonical shell via scripts/lib/article-shell.js.
// YMYL pendidikan: every regulatory statement was checked against the official text of
// Permendikbudristek 48/2023 (JDIH Kemendikdasmen PDF) and every statement attributed to
// the Panduan Pelaksanaan Pendidikan Inklusif (BSKAP 2022) against the PDF on
// kurikulum.kemendikdasmen.go.id. Permendiknas 70/2009 is NOT cited as current law
// (status Tidak Berlaku, dicabut Pasal 43 Permendikbudristek 48/2023).
// No named commercial test instruments are listed (only what is sourced).
// Positioning vs existing articles (no cannibalization): artikel/asesmen-abk is the hub
// for asesmen ABK in general (all types, instrumen psikologis). This spoke goes deep on
// ASESMEN AKADEMIK only (aspek membaca/menulis/berhitung, metode formal vs informal,
// langkah guru, hasil ke tujuan pembelajaran). The hub gets a link to this spoke.
// Hero: real CC BY-SA 4.0 photo (Jeuwre, Wikimedia Commons), hands and a math workbook
// only, no face. Visible credit in figcaption plus ImageObject fields.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'asesmen-akademik-anak-berkebutuhan-khusus';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const TITLE_TAG = 'Asesmen Akademik Anak Berkebutuhan Khusus: Panduan Lengkap';
const META_DESC = 'Asesmen akademik anak berkebutuhan khusus memetakan kemampuan membaca, menulis, dan berhitung. Pahami aspek, metode, langkah, dan cara memakai hasilnya.';
const OG_TITLE = 'Asesmen Akademik Anak Berkebutuhan Khusus: Aspek, Metode, dan Cara Memakai Hasilnya';
const OG_DESC = 'Panduan asesmen akademik untuk orang tua dan guru ABK: apa yang dinilai pada membaca, menulis, dan berhitung, beda asesmen formal dan informal, langkah pelaksanaan, dan cara mengubah hasilnya menjadi tujuan belajar sesuai Permendikbudristek 48/2023.';
const H1 = 'Asesmen Akademik Anak Berkebutuhan Khusus: Aspek, Metode, dan Cara Memakai Hasilnya';
const IMAGE_HERO = 'assets/images/artikel/tangan-anak-berhitung-dengan-jari-wikimedia.webp';
const IMAGE_HERO_ALT = 'Dua tangan anak di atas buku latihan matematika dan buku kotak-kotak berisi soal pembagian bersusun, satu tangan menghitung dengan jari, di sebelahnya ada pulpen';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25T07:00:00+07:00';
const DATE_MODIFIED = '2026-09-25T07:00:00+07:00';
const DATE_DISPLAY = '25 September 2026';

const CREDIT = {
  name: 'Jeuwre',
  source: 'https://commons.wikimedia.org/wiki/File:Child_calculating_with_fingers.jpg',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  p48: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-kebudayaan-riset-dan-teknologi-nomor-48-tahun-2023-tentang-akomodasi-yang-layak-untuk-peserta-didik-penyandang-disabilitas-pada-satuan-pendidikan-anak-usia-dini-formal-pendidikan-dasar-pendidikan-menengah-dan-pendidikan-tinggi',
  p70: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-nasional-nomor-70-tahun-2009-tentang-pendidikan-inklusif-bagi-peserta-didik-yang-memiliki-kelainan-dan-memiliki-potensi-kecerdasan-dan-atau-bakat-istimewa',
  panduan: 'https://kurikulum.kemendikdasmen.go.id/wp-content/uploads/2022/08/Panduan-Pelaksanaan-Pendidikan-Inklusif.pdf',
  cfr: 'https://www.law.cornell.edu/cfr/text/34/300.304',
  ncii: 'https://intensiveintervention.org/intensive-intervention/progress-monitor'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa beda asesmen akademik dengan tes IQ?',
    a: 'Tes kecerdasan (tes IQ) mengukur kemampuan berpikir umum dan hanya boleh dilakukan psikolog. Asesmen akademik mengukur apa yang sudah dan belum dikuasai anak dalam membaca, menulis, dan berhitung, sehingga hasilnya langsung dipakai untuk menentukan materi dan cara mengajar. Keduanya saling melengkapi, tetapi tidak saling menggantikan.'
  },
  {
    q: 'Siapa yang boleh melakukan asesmen akademik anak berkebutuhan khusus?',
    a: 'Panduan Pelaksanaan Pendidikan Inklusif dari Kemendikbudristek (2022) menyebut asesmen dapat dilakukan secara formal oleh para ahli seperti psikolog, terapis, dan dokter spesialis, dan secara informal oleh guru kelas, guru mata pelajaran, guru BK, maupun guru pembimbing khusus. Untuk asesmen akademik sehari-hari di kelas, guru adalah pelaksana utamanya.'
  },
  {
    q: 'Berapa kali asesmen akademik perlu dilakukan?',
    a: 'Asesmen awal dilakukan sebelum program belajar disusun, lalu kemajuan anak dipantau berkala selama program berjalan. Praktik pemantauan kemajuan yang dianjurkan National Center on Intensive Intervention adalah mengumpulkan data secara sering, menggambarkannya dalam grafik, dan membandingkannya dengan target belajar anak. Asesmen lengkap biasanya diulang saat kenaikan kelas atau perpindahan jenjang.'
  },
  {
    q: 'Apakah orang tua bisa melakukan asesmen akademik sendiri di rumah?',
    a: 'Orang tua bisa mencatat pengamatan, misalnya huruf yang sudah dikenal anak atau jenis soal hitungan yang selalu keliru, dan catatan itu sangat berguna bagi guru. Namun kesimpulan asesmen dan penyusunan program sebaiknya tetap dilakukan guru atau tenaga profesional, karena mereka membandingkan hasilnya dengan tujuan kurikulum dan mengamati anak dalam situasi belajar yang terstruktur.'
  },
  {
    q: 'Bagaimana hasil asesmen akademik memengaruhi penilaian dan kenaikan kelas?',
    a: 'Lampiran II Permendikbudristek Nomor 48 Tahun 2023 menyebut bentuk akomodasi yang layak antara lain fleksibilitas proses dan materi pembelajaran, perumusan capaian pembelajaran, evaluasi dan penilaian, serta waktu penyelesaian tugas, sesuai rekomendasi hasil asesmen kebutuhan peserta didik. Panduan Pendidikan Inklusif juga menyebut kenaikan kelas peserta didik berkebutuhan khusus dapat mengikuti capaian pada fase yang ditentukan guru atau lintas fase sesuai kemampuan anak.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Asesmen Akademik Anak Berkebutuhan Khusus', item: CANONICAL }
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
    height: 666,
    caption: 'Anak mengerjakan soal pembagian bersusun sambil menghitung dengan jari',
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
  keywords: 'asesmen akademik anak berkebutuhan khusus, asesmen akademik ABK, asesmen membaca menulis berhitung, asesmen informal guru, program pembelajaran individual',
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
    <meta name="keywords" content="asesmen akademik anak berkebutuhan khusus, asesmen akademik ABK, asesmen membaca, asesmen menulis, asesmen berhitung, asesmen informal, YUKA">
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
                <span class="current">Asesmen Akademik ABK</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="666" fetchpriority="high">
            <figcaption>Cara anak mengerjakan soal, termasuk kebiasaan menghitung dengan jari, adalah data berharga dalam asesmen akademik, bukan sekadar benar atau salahnya jawaban.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Asesmen akademik anak berkebutuhan khusus adalah proses mengumpulkan informasi tentang kemampuan anak dalam membaca, menulis, dan berhitung, termasuk keterampilan prasyarat seperti memegang buku atau alat tulis, untuk mengetahui apa yang sudah dikuasai, di mana hambatannya, dan pada kondisi apa anak paling mudah belajar.</strong> Hasilnya bukan untuk memberi label, melainkan menjadi dasar menyusun tujuan belajar, memilih cara mengajar, dan menentukan akomodasi yang layak di sekolah.</p>

            <p>Artikel ini fokus pada asesmen akademik saja: apa yang dinilai, metode yang dipakai, langkah pelaksanaannya, dan bagaimana hasilnya berubah menjadi program belajar. Gambaran asesmen ABK secara umum, termasuk asesmen perilaku, perkembangan, dan psikologis, sudah kami bahas di artikel <a href="asesmen-abk">asesmen ABK: pengertian, jenis, dan prosesnya</a>.</p>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini berisi informasi umum untuk orang tua dan guru, bukan pengganti pemeriksaan oleh tenaga profesional. Bila ada dugaan gangguan belajar spesifik, hambatan penglihatan atau pendengaran, atau keterlambatan perkembangan, konsultasikan dengan psikolog, dokter spesialis anak, atau tim tumbuh kembang. YUKA tidak menegakkan diagnosis.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu asesmen akademik dan bedanya dengan tes lain</a></li>
                    <li><a href="#dasar">Kedudukannya dalam aturan dan panduan resmi</a></li>
                    <li><a href="#aspek">Aspek yang dinilai</a></li>
                    <li><a href="#metode">Metode asesmen formal dan informal</a></li>
                    <li><a href="#langkah">Langkah pelaksanaan oleh guru</a></li>
                    <li><a href="#hasil">Dari hasil asesmen ke tujuan belajar</a></li>
                    <li><a href="#orangtua">Peran orang tua</a></li>
                    <li><a href="#kesalahan">Kesalahan yang sering terjadi</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Asesmen Akademik dan Bedanya dengan Tes Lain</h2>
            <p>${ext(L.panduan, 'Panduan Pelaksanaan Pendidikan Inklusif')} yang diterbitkan Badan Standar, Kurikulum, dan Asesmen Pendidikan Kemendikbudristek (2022) mendefinisikan asesmen sebagai proses yang sistematis dan komprehensif untuk menggali permasalahan lebih lanjut, sehingga diketahui masalah, hambatan, keunggulan, dan kebutuhan individu. Panduan itu menyebut empat area asesmen: belajar (<em>learning</em>), sosial emosi, komunikasi, dan neuromotor. Asesmen akademik adalah bagian dari area belajar.</p>
            <p>Orang tua sering bingung membedakan asesmen akademik dengan pemeriksaan lain yang pernah dijalani anak. Tabel berikut membantu memilahnya.</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Jenis</th><th>Pertanyaan yang dijawab</th><th>Umumnya dilakukan oleh</th><th>Dipakai untuk</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Asesmen akademik</strong></td><td>Apa yang sudah dan belum dikuasai anak dalam membaca, menulis, dan berhitung? Kesalahan apa yang berulang?</td><td>Guru kelas, guru pembimbing khusus, atau ahli pendidikan khusus</td><td>Menentukan titik awal materi, tujuan belajar, dan cara mengajar</td></tr>
                    <tr><td><strong>Tes kecerdasan</strong></td><td>Bagaimana kemampuan berpikir umum anak dibanding anak seusianya?</td><td>Psikolog</td><td>Bagian dari pemeriksaan psikologis; penjelasannya ada di artikel <a href="berapa-iq-anak-yang-normal">berapa IQ anak yang normal</a></td></tr>
                    <tr><td><strong>Asesmen fungsional (Permendikbudristek 48/2023)</strong></td><td>Apa kondisi, hambatan, dan kebutuhan anak atas bentuk akomodasi yang layak?</td><td>Satuan pendidikan, difasilitasi Unit Layanan Disabilitas</td><td>Menentukan bentuk akomodasi di sekolah</td></tr>
                </tbody>
            </table>
            </div>
            <p>Ketiganya saling melengkapi. Hasil tes kecerdasan yang rendah, misalnya, tidak memberi tahu guru huruf mana yang sudah dikenal anak. Sebaliknya, asesmen akademik tidak bisa dipakai untuk menyimpulkan diagnosis.</p>

            <h2 id="dasar">Kedudukannya dalam Aturan dan Panduan Resmi</h2>
            <p>Beberapa ketentuan dalam ${ext(L.p48, 'Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas')} membuat asesmen menjadi pintu masuk layanan di sekolah:</p>
            <ul>
                <li><strong>Pasal 11</strong> mengatur penyediaan kurikulum dalam bentuk modifikasi sesuai ragam disabilitas. Bagi peserta didik tanpa hambatan intelektual, modifikasi dilakukan terhadap standar proses. Bagi peserta didik dengan hambatan intelektual, modifikasi dapat mencakup standar kompetensi lulusan, standar isi, standar proses, dan standar penilaian. Seberapa jauh modifikasi diperlukan hanya bisa diketahui lewat asesmen.</li>
                <li><strong>Pasal 12 ayat (3) sampai (6)</strong> menyebut bentuk akomodasi yang layak diberikan berdasarkan hasil asesmen fungsional yang dilaksanakan sekolah dan difasilitasi Unit Layanan Disabilitas (ULD), dengan tujuan memperoleh informasi tentang kondisi, hambatan, dan kebutuhan peserta didik. Pemenuhannya dilakukan melalui konsultasi yang melibatkan peserta didik, orang tua/wali, dan ULD.</li>
                <li><strong>Pasal 16 ayat (6)</strong> menyebut salah satu tugas ULD adalah melakukan asesmen bagi peserta didik dan calon peserta didik penyandang disabilitas.</li>
                <li><strong>Lampiran II</strong> merinci akomodasi seperti fleksibilitas proses pembelajaran, bentuk materi, perumusan capaian pembelajaran, evaluasi dan penilaian, serta waktu penyelesaian tugas, yang semuanya diberikan sesuai rekomendasi hasil asesmen kebutuhan peserta didik.</li>
            </ul>
            <p>Panduan Pendidikan Inklusif menggambarkan alurnya secara berurutan: penerimaan peserta didik baru, identifikasi, asesmen, penyusunan profil belajar, perencanaan pembelajaran, pelaksanaan, lalu penilaian dan laporan hasil belajar. Profil belajar itu sekurang-kurangnya memuat identitas, kemampuan akademik, kemampuan sosial emosi, kemampuan motorik, kondisi kesehatan, dan kemandirian anak.</p>
            <p><em>Catatan:</em> sebagian tulisan di internet masih merujuk Permendiknas Nomor 70 Tahun 2009 tentang pendidikan inklusif. ${ext(L.p70, 'JDIH Kemendikdasmen')} mencatat peraturan itu berstatus "Tidak Berlaku", dan ketentuannya tentang peserta didik yang memiliki kelainan dicabut oleh Pasal 43 Permendikbudristek 48/2023. Karena itu artikel ini tidak memakainya sebagai rujukan.</p>

            <h2 id="aspek">Aspek yang Dinilai dalam Asesmen Akademik</h2>
            <p>Asesmen akademik untuk anak berkebutuhan khusus sebaiknya dimulai dari tingkat kemampuan anak saat ini, bukan dari target kelasnya. Karena itu keterampilan prasyarat ikut dinilai. Contoh dalam Panduan Pendidikan Inklusif sendiri memasukkan kegiatan pramembaca, seperti cara memegang buku, jarak mata dengan buku, cara membalik halaman, dan memilih pencahayaan.</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>Contoh kemampuan yang diamati</th><th>Contoh tugas asesmen</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Prasyarat belajar</strong></td><td>Duduk dan memperhatikan tugas, mengikuti instruksi sederhana, memegang buku dan alat tulis, koordinasi mata dan tangan</td><td>Mengamati anak saat mengerjakan satu tugas singkat; meminta anak menebalkan garis</td></tr>
                    <tr><td><strong>Membaca</strong></td><td>Mengenal huruf, membaca suku kata, kata, kalimat, kelancaran, dan pemahaman isi bacaan</td><td>Kartu huruf acak, daftar suku kata, bacaan pendek lalu pertanyaan tentang isinya</td></tr>
                    <tr><td><strong>Menulis</strong></td><td>Menebalkan dan menyalin, menulis nama sendiri, menulis dari dikte, menyusun kalimat, ejaan, kerapian</td><td>Menyalin kalimat dari papan, dikte lima kata, menulis satu kalimat tentang gambar</td></tr>
                    <tr><td><strong>Berhitung</strong></td><td>Membilang, mengenal lambang bilangan, nilai tempat, operasi hitung, soal cerita, serta penerapan fungsional seperti uang dan waktu</td><td>Menghitung benda, mencocokkan angka dengan jumlah benda, soal bersusun, soal cerita sederhana</td></tr>
                </tbody>
            </table>
            </div>
            <p>Yang dicatat bukan hanya benar atau salah. Guru juga mencatat waktu yang dibutuhkan, strategi yang dipakai anak (misalnya menghitung dengan jari), bantuan yang membuat anak berhasil, dan pola kesalahannya. Anak yang selalu tertukar huruf b dan d membutuhkan program yang berbeda dari anak yang lancar mengeja tetapi tidak memahami isi bacaan. Pola seperti ini juga menjadi bahan pertimbangan bila perlu rujukan, misalnya dugaan <a href="disleksia-adalah">disleksia</a> atau <a href="diskalkulia-adalah">diskalkulia</a>.</p>

            <h2 id="metode">Metode Asesmen Formal dan Informal</h2>
            <p>Panduan Pendidikan Inklusif membedakan dua jalur. Asesmen formal dilakukan oleh para ahli, seperti psikolog, terapis, dan dokter spesialis (THT, mata, dan lainnya). Asesmen informal dilakukan oleh guru kelas, guru mata pelajaran, guru BK, maupun guru pembimbing khusus. Dalam asesmen akademik, keduanya punya peran masing-masing.</p>
            <h3>Asesmen formal</h3>
            <p>Asesmen formal memakai instrumen terstandar yang membandingkan hasil anak dengan kelompok seusianya. Alat seperti ini umumnya hanya boleh digunakan oleh tenaga yang memiliki kualifikasi, dan hasilnya berguna untuk melihat seberapa jauh kemampuan anak tertinggal dari teman sebaya atau untuk mendukung pemeriksaan gangguan belajar. Kelemahannya, skor terstandar jarang memberi tahu guru materi apa yang harus diajarkan besok pagi.</p>
            <h3>Asesmen informal</h3>
            <p>Asesmen informal disusun guru dari materi yang memang akan diajarkan. Bentuknya beragam:</p>
            <ul>
                <li><strong>Tes buatan guru berbasis kurikulum:</strong> soal-soal kecil yang disusun bertingkat dari yang paling mudah, misalnya dari mengenal huruf sampai membaca kalimat.</li>
                <li><strong>Observasi:</strong> mengamati anak saat belajar di kelas, termasuk kapan ia mulai kehilangan fokus.</li>
                <li><strong>Analisis kesalahan:</strong> mengelompokkan jenis kesalahan untuk menemukan polanya, bukan menghitung jumlahnya saja.</li>
                <li><strong>Portofolio:</strong> kumpulan hasil kerja anak dari waktu ke waktu, sehingga perkembangan kecil pun terlihat.</li>
                <li><strong>Wawancara orang tua dan pemeriksaan dokumen:</strong> riwayat sekolah sebelumnya, laporan terapi, dan hasil pemeriksaan psikolog. Panduan Pendidikan Inklusif menyebut observasi, wawancara, tes, dan pemeriksaan dokumen sebagai cara menggali data pada tahap identifikasi.</li>
            </ul>
            <h3>Pemantauan kemajuan</h3>
            <p>Asesmen tidak berhenti setelah program disusun. ${ext(L.ncii, 'National Center on Intensive Intervention')}, pusat yang didukung Departemen Pendidikan Amerika Serikat, menganjurkan tim menyusun rencana pemantauan kemajuan yang memuat alat ukur, target, dan frekuensi pengambilan data, lalu mengumpulkan data secara sering, menggambarkannya dalam grafik, dan membandingkannya dengan target belajar anak. Bila kemajuan belum cukup, tim berdiskusi untuk menyesuaikan intervensi. Di kelas, bentuknya bisa sederhana: misalnya mencatat jumlah kata yang dibaca benar dalam satu menit setiap minggu.</p>

            <h2 id="langkah">Langkah Pelaksanaan Asesmen Akademik oleh Guru</h2>
            <ol>
                <li><strong>Kumpulkan informasi awal.</strong> Baca laporan dari sekolah sebelumnya, terapis, atau psikolog, dan wawancarai orang tua tentang kebiasaan belajar anak di rumah.</li>
                <li><strong>Tentukan tujuan asesmen.</strong> Misalnya, "mengetahui titik awal kemampuan membaca permulaan" atau "mengetahui penyebab anak selalu keliru pada soal pengurangan bersusun".</li>
                <li><strong>Siapkan instrumen bertingkat.</strong> Susun tugas dari yang paling mudah ke yang paling sulit, sesuai urutan materi di kurikulum. Gunakan bahan yang dekat dengan kehidupan anak.</li>
                <li><strong>Atur situasi yang nyaman.</strong> Pilih tempat yang tenang, beri waktu yang cukup, dan lakukan dalam beberapa sesi pendek bila anak mudah lelah. Pastikan alat bantu yang biasa dipakai anak, seperti kacamata atau alat bantu dengar, sudah terpasang.</li>
                <li><strong>Laksanakan dan catat.</strong> Catat jawaban, waktu, strategi, bantuan yang diberikan, dan perilaku anak selama asesmen.</li>
                <li><strong>Analisis hasil.</strong> Tentukan kemampuan yang sudah dikuasai mandiri, yang bisa dilakukan dengan bantuan, dan yang belum. Cari pola kesalahannya.</li>
                <li><strong>Susun simpulan dan rekomendasi.</strong> Panduan Pendidikan Inklusif menyebut simpulan hasil asesmen menjadi dasar menyusun program intervensi dan program pembelajaran, didahului penyusunan profil belajar peserta didik.</li>
                <li><strong>Bicarakan dengan orang tua.</strong> Jelaskan hasilnya dengan bahasa sederhana, lalu sepakati prioritas tujuan bersama.</li>
            </ol>
            <p>Guru yang mendampingi anak secara khusus, seperti <a href="gpk-adalah">guru pembimbing khusus (GPK)</a> atau <a href="shadow-teacher-adalah">shadow teacher</a>, biasanya memegang peran besar pada langkah 5 sampai 7 karena paling sering mengamati anak.</p>

            <h2 id="hasil">Dari Hasil Asesmen ke Tujuan Belajar</h2>
            <p>Nilai terbesar asesmen akademik ada pada apa yang dilakukan dengan hasilnya. Panduan Pendidikan Inklusif memberi contoh untuk elemen membaca. Hasil asesmen awal seorang peserta didik menunjukkan ia sudah mengenal huruf A sampai Z dan dapat menulis nama sendiri, tetapi belum lancar membaca, kurang memahami isi bacaan, belum dapat menyebutkan benda dari huruf abjad, dan belum dapat menyusun huruf abjad. Dari situ tujuan pembelajarannya disesuaikan menjadi menyebutkan benda dari huruf abjad dan menyusun huruf abjad, dengan materi melabel huruf abjad.</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Tahap</th><th>Isi (contoh dari Panduan Pendidikan Inklusif)</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Hasil asesmen awal</strong></td><td>Sudah: mengenal huruf A sampai Z, menulis nama sendiri. Belum: lancar membaca, memahami isi bacaan, menyebutkan benda dari huruf abjad, menyusun huruf abjad.</td></tr>
                    <tr><td><strong>Penyesuaian tujuan</strong></td><td>Menyebutkan benda dari huruf abjad; menyusun huruf abjad.</td></tr>
                    <tr><td><strong>Penyesuaian materi</strong></td><td>Melabel huruf abjad (A sampai Z).</td></tr>
                </tbody>
            </table>
            </div>
            <p>Tujuan seperti ini kemudian dituangkan ke dalam rencana belajar per anak. Panduan yang sama menyebut guru mengembangkan tujuan jangka panjang yang bersifat tahunan sampai tujuan jangka pendek yang bersifat harian, dengan langkah mengajar yang dirinci dalam bentuk analisis tugas. Cara menyusunnya kami bahas di artikel <a href="program-pembelajaran-individual">program pembelajaran individual (PPI)</a>. Hasil asesmen juga menjadi dasar penyesuaian soal ulangan, yang contohnya ada di artikel <a href="adaptasi-soal-ujian-untuk-anak-abk">adaptasi soal ujian untuk anak ABK</a>.</p>
            <p>Untuk penilaian dan kenaikan kelas, Panduan Pendidikan Inklusif menyebut kenaikan kelas peserta didik berkebutuhan khusus dilakukan bila capaian pembelajaran pada fase yang ditentukan guru sudah dituntaskan, atau lintas fase sesuai kemampuan anak, dan sekolah memiliki keleluasaan menentukan kriterianya.</p>

            <h2 id="orangtua">Peran Orang Tua dalam Asesmen Akademik</h2>
            <p>Permendikbudristek 48/2023 menempatkan orang tua/wali sebagai pihak yang dilibatkan dalam konsultasi pemenuhan akomodasi. Beberapa hal yang bisa Ayah dan Bunda lakukan:</p>
            <ul>
                <li><strong>Bawa data.</strong> Laporan terapi, hasil pemeriksaan psikolog atau dokter, rapor lama, dan contoh tulisan anak di rumah.</li>
                <li><strong>Ceritakan pengamatan sehari-hari.</strong> Misalnya anak hafal lagu dengan cepat tetapi lupa huruf yang baru dipelajari, atau bisa menghitung uang jajan tetapi kesulitan soal di buku.</li>
                <li><strong>Jangan melatih anak mengerjakan soal asesmen sebelumnya.</strong> Tujuannya melihat kemampuan anak apa adanya, sehingga program yang disusun benar-benar tepat.</li>
                <li><strong>Minta penjelasan hasil.</strong> Laporan yang baik menjelaskan apa yang sudah dikuasai, apa yang belum, pola kesalahan, dan rekomendasi, bukan hanya skor atau label.</li>
                <li><strong>Sepakati cara berlatih di rumah.</strong> Tanyakan satu atau dua kegiatan sederhana yang sejalan dengan tujuan di sekolah. Peran keluarga dalam proses ini dijelaskan lebih jauh di artikel <a href="peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.</li>
            </ul>

            <h2 id="kesalahan">Kesalahan yang Sering Terjadi</h2>
            <ul>
                <li><strong>Mengandalkan satu tes.</strong> Dalam regulasi pendidikan khusus Amerika Serikat, ${ext(L.cfr, '34 CFR 300.304')} mewajibkan evaluasi memakai beragam alat dan strategi untuk mengumpulkan informasi fungsional, perkembangan, dan akademik, termasuk informasi dari orang tua, serta melarang satu ukuran dijadikan satu-satunya dasar menentukan program pendidikan anak. Aturan itu tidak berlaku di Indonesia, tetapi prinsipnya relevan: gabungkan tes, observasi, contoh hasil kerja, dan cerita orang tua.</li>
                <li><strong>Mulai dari target kelas, bukan dari kemampuan anak.</strong> Anak kelas 3 yang belum mengenal semua huruf perlu diasesmen dari pengenalan huruf, bukan dari soal kelas 3.</li>
                <li><strong>Mengabaikan faktor di luar akademik.</strong> Kesulitan membaca bisa berhubungan dengan penglihatan, pendengaran, atau kelelahan. Karena itu Panduan Pendidikan Inklusif menyebut dokter spesialis THT dan mata sebagai bagian dari asesmen formal.</li>
                <li><strong>Menyimpulkan diagnosis dari hasil asesmen akademik.</strong> Asesmen akademik bisa menunjukkan pola yang perlu diperiksa, misalnya ciri <a href="kesulitan-belajar">kesulitan belajar</a> atau <a href="slow-learner">slow learner</a>, tetapi diagnosis tetap wewenang tenaga profesional.</li>
                <li><strong>Tidak pernah diulang.</strong> Hasil asesmen cepat usang. Tanpa pemantauan berkala, program bisa tertinggal dari perkembangan anak.</li>
            </ul>

            <div class="story-highlight">
                <h3>Asesmen di YUKA</h3>
                <p style="margin-bottom:0;">Di <a href="/sekolah-inklusi-sleman">Sekolah Inklusi Taruna Imani</a>, guru mengamati kemampuan membaca, menulis, dan berhitung setiap anak sebelum menyusun rencana belajarnya, lalu membicarakannya bersama orang tua. Bila Ayah dan Bunda masih menimbang sekolah yang cocok, artikel <a href="anak-abk-harus-sekolah-dimana">anak ABK harus sekolah dimana</a> bisa menjadi titik awal. YUKA bukan fasilitas kesehatan; untuk pemeriksaan psikologis atau medis, kami akan menyarankan tenaga profesional yang sesuai.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="asesmen-abk">Asesmen ABK</a></h4>
                    <p>Pengertian, jenis, tahapan, dan instrumen asesmen anak berkebutuhan khusus.</p>
                </div>
                <div class="related-card">
                    <h4><a href="program-pembelajaran-individual">Program Pembelajaran Individual</a></h4>
                    <p>Cara menyusun rencana belajar per anak dari hasil asesmen.</p>
                </div>
                <div class="related-card">
                    <h4><a href="cara-mengajar-anak-disleksia-membaca">Cara Mengajar Anak Disleksia Membaca</a></h4>
                    <p>Strategi mengajar membaca untuk anak dengan kesulitan membaca.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#AsesmenAkademik</a>
            <a href="#">#AsesmenABK</a>
            <a href="#">#PendidikanInklusi</a>
            <a href="#">#PPI</a>
            <a href="#">#GuruABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.p48, '<strong>Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</strong> (Pasal 11, 12, 16, 43, dan Lampiran II), JDIH Kemendikdasmen')}</li>
              <li>${ext(L.panduan, '<strong>Panduan Pelaksanaan Pendidikan Inklusif</strong>, Badan Standar, Kurikulum, dan Asesmen Pendidikan Kemendikbudristek, 2022 (bagian Identifikasi dan Asesmen, Profil Belajar, Perencanaan Pembelajaran, Penilaian, Laporan Hasil Belajar)')}</li>
              <li>${ext(L.p70, '<strong>Permendiknas Nomor 70 Tahun 2009 tentang Pendidikan Inklusif</strong>, berstatus Tidak Berlaku di JDIH Kemendikdasmen')}</li>
              <li>${ext(L.cfr, '<strong>34 CFR 300.304, Evaluation procedures</strong>, Legal Information Institute, Cornell Law School')}</li>
              <li>${ext(L.ncii, '<strong>Progress Monitor</strong>, National Center on Intensive Intervention')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti asesmen atau diagnosis dari tenaga profesional</strong>. Regulasi dan panduan dicek pada 25 September 2026 dan dapat berubah.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Asesmen%20Akademik%20Anak%20Berkebutuhan%20Khusus%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.030-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.870 9.870 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.480-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.830c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.470h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=Asesmen%20Akademik%20Anak%20Berkebutuhan%20Khusus&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
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
                <a href="https://wa.me/6281229912332?text=Halo%20YUKA%2C%20saya%20ingin%20bertanya%20tentang%20asesmen%20belajar%20anak%20berkebutuhan%20khusus" target="_blank" class="btn btn-outline-light">Hubungi via WhatsApp</a>
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

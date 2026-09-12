#!/usr/bin/env node
'use strict';

// One-time generator for artikel/berapa-iq-anak-yang-normal.html
// Follows the canonical shell rule in CLAUDE.md: footer/GA4/analytics come
// from scripts/lib/article-shell.js via ensureArticleShell(), never retyped.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'berapa-iq-anak-yang-normal';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const TITLE_TAG = 'Berapa IQ Anak yang Normal? Kategori IQ Lengkap';
const META_DESC = 'Berapa IQ anak yang normal? Simak kategori skor IQ 90-109 rata-rata, faktor yang memengaruhi, dan cara tes IQ anak yang valid. Baca panduan lengkap YUKA.';
const OG_TITLE = 'Berapa IQ Anak yang Normal? Kategori, Faktor, dan Cara Tes yang Tepat';
const OG_DESC = 'Berapa IQ anak yang normal? Pelajari tabel kategori skor IQ, perbedaan rata-rata dan rentang normal, faktor yang memengaruhi, serta cara tes IQ anak yang valid di Indonesia.';
const H1 = 'Berapa IQ Anak yang Normal? Kategori dan Cara Mengetahuinya';
const IMAGE_HERO = 'Dokumentasi/candi-plaosan-wisatawan-candi-borobudur-foto-066.webp';
const IMAGE_HERO_ALT = 'Anak dalam kegiatan wisata edukasi YUKA di Candi Plaosan, Yogyakarta, mengenakan kostum tradisional saat berkunjung bersama rombongan sekolah';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-12';
const DATE_MODIFIED = '2026-09-12T10:00:00+07:00';
const DATE_DISPLAY = '12 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const faq = [
  {
    q: 'Berapa IQ anak yang normal?',
    a: 'Skor IQ 90 sampai 109 termasuk kategori Average atau rata-rata menurut klasifikasi Wechsler yang paling umum dipakai psikolog. Sebagian sumber menyebut rentang 85 sampai 115 sebagai "normal" karena itu adalah satu simpangan baku dari rata-rata 100. Keduanya benar, hanya beda sudut pandang: 90-109 adalah kategori resmi Average, sedangkan 85-115 adalah kisaran statistik di sekitar rata-rata. Skor 100 adalah titik rata-rata normatif, bukan target yang wajib dicapai setiap anak.'
  },
  {
    q: 'Apa yang harus dilakukan jika IQ anak di bawah rata-rata?',
    a: 'Skor di bawah rata-rata (misalnya kategori Low Average 80-89) tidak otomatis berarti anak bermasalah. Perhatikan dulu kemampuan adaptif anak sehari-hari (komunikasi, kemandirian, interaksi sosial), lalu konsultasikan hasil tes dengan psikolog anak untuk memastikan apakah anak membutuhkan pendampingan belajar tambahan, asesmen lanjutan, atau intervensi dini. Jangan melabeli anak berdasarkan satu angka saja.'
  },
  {
    q: 'Apakah tes IQ online atau kuis media sosial akurat untuk anak?',
    a: 'Tidak. Tes IQ online gratis dan kuis media sosial umumnya tidak memiliki norma usia, prosedur administrasi terkendali, maupun validitas ilmiah yang memadai. Untuk hasil yang bisa dipakai mengambil keputusan pendidikan atau terapi, tes IQ anak harus dilakukan secara individual oleh psikolog menggunakan instrumen terstandar seperti WISC atau WPPSI.'
  },
  {
    q: 'Apakah skor IQ anak bisa berubah seiring waktu?',
    a: 'Bisa. Skor IQ bukan angka tetap sejak lahir. Stimulasi belajar, gizi, kualitas tidur, kesehatan fisik dan emosional, serta lingkungan pengasuhan dapat memengaruhi performa anak saat tes, terutama pada usia dini. Karena itu hasil tes IQ sebaiknya dibaca sebagai gambaran kemampuan anak pada satu titik waktu, bukan ramalan permanen tentang masa depannya.'
  },
  {
    q: 'Di mana bisa tes IQ anak di Yogyakarta?',
    a: 'Tes IQ anak yang valid dilakukan oleh psikolog klinis anak atau psikolog pendidikan, bisa melalui rumah sakit yang punya layanan psikologi tumbuh kembang, klinik tumbuh kembang anak, atau biro psikologi dengan psikolog berizin. Untuk memastikan psikolog terdaftar resmi, orang tua bisa mengecek direktori Cari Psikolog dari HIMPSI (Himpunan Psikologi Indonesia). Di Sleman, YUKA juga dapat membantu mengarahkan orang tua ke jejaring rujukan asesmen anak berkebutuhan khusus.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog.html` },
    { '@type': 'ListItem', position: 3, name: H1.split('?')[0].trim() + '?', item: CANONICAL }
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
    <meta name="keywords" content="berapa iq anak yang normal, iq anak normal, kategori iq anak, rata-rata iq anak, tes iq anak, skor iq anak, YUKA">
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
        .article-body { font-size: 1.1rem; line-height: 1.9; color: var(--gray-700); }
        .article-body h2 { color: var(--primary); margin: 2.5rem 0 1rem; font-size: 1.75rem; }
        .article-body h3 { color: var(--gray-800); margin: 2rem 0 1rem; font-size: 1.35rem; }
        .article-body p { margin-bottom: 1.5rem; }
        .article-body ul, .article-body ol { margin: 1.5rem 0; padding-left: 2rem; }
        .article-body a { color: #1565C0; text-decoration: underline; text-underline-offset: 2px; }
        .article-body a:hover { color: #0D47A1; }
        .article-body blockquote { background: var(--primary-50); border-left: 4px solid var(--primary); padding: 1.5rem 2rem; margin: 2rem 0; border-radius: 0 12px 12px 0; font-style: italic; }
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
        .share-btn.twitter { background: #1DA1F2; }
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
        .classification-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
        .classification-table th, .classification-table td { border: 1px solid var(--gray-200); padding: 0.75rem 1rem; text-align: left; }
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
                <span class="current">Berapa IQ Anak yang Normal</span>
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
        <div class="article-featured-image">
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="800" height="600">
        </div>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Berapa IQ anak yang normal?</strong> Jawaban singkatnya, skor <strong>90 sampai 109</strong> termasuk kategori <em>Average</em> atau rata-rata menurut klasifikasi Wechsler yang paling banyak dipakai psikolog untuk menilai kemampuan kognitif anak. Sebagian sumber juga menyebut rentang <strong>85 sampai 115</strong> sebagai "normal" karena itu adalah satu simpangan baku di sekitar rata-rata 100. Kedua angka ini sama-sama benar, hanya beda sudut pandang: yang satu kategori resmi tes, yang satu lagi kisaran statistik.</p>

            <p>Yang lebih penting daripada angka tunggal adalah cara membacanya. Skor IQ bukan vonis permanen dan bukan satu-satunya ukuran kecerdasan anak. Di Yayasan Ukhuwah Kaffah Amanatullah (YUKA), kami mendampingi anak-anak dengan beragam profil kemampuan di Sekolah Inklusi Taruna Imani, Sleman, dan sering menerima pertanyaan orang tua tentang skor IQ anaknya. Artikel ini merangkum kategori IQ anak secara lengkap, faktor yang memengaruhinya, serta cara tes yang benar-benar valid.</p>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#tabel-kategori">Tabel Kategori IQ Anak Berdasarkan Skor</a></li>
                    <li><a href="#beda-rata-rata-normal">Beda IQ Rata-Rata dan Rentang Normal</a></li>
                    <li><a href="#arti-kategori">Arti Tiap Kategori Skor IQ Anak</a></li>
                    <li><a href="#faktor">Faktor yang Memengaruhi IQ Anak</a></li>
                    <li><a href="#tanda">Tanda yang Perlu Diperhatikan Orang Tua</a></li>
                    <li><a href="#cara-tes">Cara Tes IQ Anak yang Valid</a></li>
                    <li><a href="#tempat-tes">Tempat Tes IQ Anak di Yogyakarta dan Indonesia</a></li>
                    <li><a href="#iq-vs-prestasi">Apakah IQ Sama dengan Prestasi Sekolah?</a></li>
                    <li><a href="#peran-yuka">Pengalaman YUKA Mendampingi Anak dengan Beragam Kemampuan</a></li>
                    <li><a href="#faq">FAQ Seputar IQ Anak</a></li>
                </ol>
            </div>

            <h2 id="tabel-kategori">Tabel Kategori IQ Anak Berdasarkan Skor</h2>

            <p>Tes IQ anak modern seperti WISC (Wechsler Intelligence Scale for Children) memakai skala dengan rata-rata 100 dan simpangan baku 15. Skor ini adalah <em>standard score</em> yang sudah dibandingkan dengan norma anak lain seusianya, sehingga anak SD dan remaja bisa sama-sama punya skor sekitar 100 meski soal yang dikerjakan berbeda.</p>

            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1rem 0"><table class="classification-table">
                <thead>
                    <tr>
                        <th>Rentang Skor IQ</th>
                        <th>Klasifikasi</th>
                        <th>Interpretasi Singkat</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>130 ke atas</td>
                        <td>Very Superior</td>
                        <td>Sangat tinggi, dapat mengindikasikan potensi gifted</td>
                    </tr>
                    <tr>
                        <td>120-129</td>
                        <td>Superior</td>
                        <td>Di atas rata-rata secara signifikan</td>
                    </tr>
                    <tr>
                        <td>110-119</td>
                        <td>High Average</td>
                        <td>Rata-rata atas</td>
                    </tr>
                    <tr>
                        <td><strong>90-109</strong></td>
                        <td><strong>Average</strong></td>
                        <td>Rata-rata atau tipikal, ini kategori "normal" resmi</td>
                    </tr>
                    <tr>
                        <td>80-89</td>
                        <td>Low Average</td>
                        <td>Rata-rata bawah, belum tentu ada gangguan</td>
                    </tr>
                    <tr>
                        <td>70-79</td>
                        <td>Borderline</td>
                        <td>Perlu evaluasi menyeluruh, bukan diagnosis otomatis</td>
                    </tr>
                    <tr>
                        <td>69 ke bawah</td>
                        <td>Extremely Low</td>
                        <td>Perlu asesmen profesional lanjutan</td>
                    </tr>
                </tbody>
            </table></div>
            <p style="font-size:0.85rem;color:#666;margin-top:-1rem;">Sumber: klasifikasi skor Wechsler, dirangkum dari <a href="https://acisiq.com/iq-score-chart" target="_blank" rel="noopener nofollow">tabel skor IQ ACIS</a>.</p>

            <h2 id="beda-rata-rata-normal">Beda IQ Rata-Rata dan Rentang Normal</h2>

            <p>Banyak orang tua bingung karena ada dua angka berbeda yang sama-sama disebut "normal": 90-109 dan 85-115. Berikut penjelasannya supaya tidak keliru membaca hasil tes:</p>

            <ul>
                <li><strong>90-109 (kategori Average)</strong>: ini adalah label resmi yang dipakai psikolog dalam laporan tes, hasil dari pembagian skor ke dalam tujuh pita klasifikasi.</li>
                <li><strong>85-115 (rentang satu simpangan baku)</strong>: ini kisaran statistik. Karena skala IQ punya simpangan baku 15 dari rata-rata 100, sekitar 68% populasi berada di rentang ini.</li>
                <li><strong>Skor 100</strong>: titik rata-rata normatif dari populasi yang dites, bukan target yang harus dicapai anak, dan bukan standar minimal kecerdasan.</li>
            </ul>

            <p>Kedua rentang ini sama-sama valid dipakai, tergantung apakah yang dimaksud adalah kategori resmi tes atau kisaran statistik umum. Untuk laporan psikologi anak Anda, perhatikan istilah yang dipakai psikolog (Average, Low Average, dan seterusnya) karena itu yang dipakai untuk rekomendasi lanjutan.</p>

            <figure class="article-inline-image">
                <img src="../Dokumentasi/21-jan-2026-anak-anak-belajar-bersama-guru-013.webp" alt="Anak-anak belajar bersama guru di Sekolah Inklusi Taruna Imani YUKA, Sleman" loading="lazy" width="800" height="600">
                <figcaption>Kemampuan anak paling baik dipahami lewat pengamatan proses belajar sehari-hari, bukan hanya dari satu angka skor tes.</figcaption>
            </figure>

            <h2 id="arti-kategori">Arti Tiap Kategori Skor IQ Anak</h2>

            <h3>IQ 130 ke atas: Very Superior</h3>
            <p>Anak berada jauh di atas rata-rata pada kemampuan yang diukur tes. Skor ini bisa mengindikasikan potensi gifted, tetapi tidak otomatis berarti anak unggul di semua bidang atau pasti berprestasi akademik tanpa dukungan yang sesuai.</p>

            <h3>IQ 110-129: High Average sampai Superior</h3>
            <p>Anak umumnya mampu mengikuti tuntutan belajar dengan baik dan cepat memahami pola atau konsep baru, tergantung juga pada kualitas pengajaran dan profil kemampuan lain seperti daya ingat dan kecepatan memproses informasi.</p>

            <h3>IQ 90-109: Average</h3>
            <p>Ini kategori rata-rata atau tipikal. Kategori ini tidak berarti anak punya kemampuan yang sama rata di semua area; verbal bisa lebih kuat daripada kecepatan pemrosesan, atau sebaliknya.</p>

            <h3>IQ 80-89: Low Average</h3>
            <p>Skor di bawah rata-rata, tetapi tidak otomatis menunjukkan gangguan intelektual. Anak mungkin butuh waktu lebih panjang, instruksi lebih konkret, atau pengulangan untuk menguasai materi baru.</p>

            <h3>IQ 70-79: Borderline, dan IQ 69 ke bawah: Extremely Low</h3>
            <p>Skor pada rentang ini menunjukkan kemampuan yang jauh di bawah norma usia dan perlu evaluasi menyeluruh, bukan cuma dari angka tes. Perlu dilihat juga kemampuan adaptif anak (komunikasi, perawatan diri, interaksi sosial) sebelum menyimpulkan apa pun. Kementerian Kesehatan menegaskan bahwa <a href="https://keslan.kemkes.go.id/view_artikel/2040/kenali-tanda-dan-gejala-anak-dengan-retardasi-metal" target="_blank" rel="noopener nofollow">disabilitas intelektual</a> ditandai dengan kecerdasan yang signifikan di bawah rata-rata seusianya <strong>disertai</strong> ketidakmampuan dalam adaptasi perilaku yang muncul sejak masa perkembangan, bukan dari skor IQ saja. Untuk penjelasan lebih lengkap, baca panduan kami tentang <a href="disabilitas-intelektual-adalah">disabilitas intelektual</a> dan <a href="tunagrahita-adalah">tunagrahita</a>.</p>

            <div class="info-box">
                <h4>Penting Diingat</h4>
                <p>Satu angka IQ tidak pernah cukup untuk menyimpulkan apa pun tentang anak. Laporan psikolog yang baik selalu menyertakan interval kepercayaan, profil subtes (verbal, visual-spasial, memori kerja, kecepatan proses), observasi perilaku, dan rekomendasi, bukan cuma satu skor tunggal.</p>
            </div>

            <h2 id="faktor">Faktor yang Memengaruhi IQ Anak</h2>

            <p>IQ bukan angka tetap sejak lahir yang tidak tersentuh lingkungan. Hasil tes mencerminkan interaksi antara faktor biologis, pengalaman, pendidikan, dan kondisi saat tes dilakukan.</p>

            <h3>Genetik</h3>
            <p>Genetik berkontribusi pada perbedaan kemampuan kognitif antaranak, termasuk memori, penalaran, dan pemrosesan informasi. Namun faktor genetik bukan takdir tunggal; pengaruhnya berinteraksi dengan kualitas pengasuhan dan pendidikan.</p>

            <h3>Gizi dan kesehatan</h3>
            <p>Otak yang sedang berkembang butuh energi, protein, mikronutrien, tidur cukup, dan kesehatan fisik yang memadai. Kekurangan gizi, anemia, gangguan tiroid, atau masalah pendengaran dan penglihatan yang tidak terdeteksi bisa mengganggu proses belajar maupun performa saat tes.</p>

            <h3>Stimulasi dan pengasuhan responsif</h3>
            <p>WHO menekankan bahwa hampir 80% otak bayi terbentuk sebelum usia 3 tahun, dan periode ini paling sensitif terhadap pengaruh lingkungan. Kerangka <em>nurturing care</em> dari WHO menyebutkan lingkungan yang aman, nutrisi yang tepat, serta stimulasi dari orang tua atau pengasuh sebagai fondasi perkembangan otak yang sehat. Bentuk stimulasi yang relevan bukan les atau hafalan soal IQ, melainkan hal sederhana seperti membaca dan mengobrol dengan anak, bermain konstruktif, menyusun puzzle, serta memberi kesempatan memecahkan masalah sendiri.</p>

            <h3>Faktor saat tes berlangsung</h3>
            <p>Skor juga bisa terpengaruh oleh kecemasan, kelelahan, kurang tidur, lapar, gangguan perhatian, hambatan bahasa, atau motivasi anak saat tes. Karena itu, satu kali hasil tes yang kurang optimal tidak selalu mencerminkan kemampuan anak yang sesungguhnya.</p>

            <figure class="article-inline-image">
                <img src="../Dokumentasi/21-jan-2026-keluarga-belajar-bersama-dirumah-003.webp" alt="Keluarga belajar dan bermain bersama di rumah sebagai bentuk stimulasi kognitif anak" loading="lazy" width="800" height="600">
                <figcaption>Pengasuhan responsif dan stimulasi belajar di rumah berperan besar pada perkembangan kognitif anak, jauh sebelum anak menjalani tes IQ formal.</figcaption>
            </figure>

            <h2 id="tanda">Tanda yang Perlu Diperhatikan Orang Tua</h2>

            <p>Tanda berikut bukan bukti pasti IQ anak rendah. Tanda ini juga bisa disebabkan gangguan bahasa, <a href="adhd-adalah">ADHD</a>, gangguan belajar spesifik, masalah pendengaran atau penglihatan, kurang stimulasi, atau kondisi perkembangan lain. Yang layak dievaluasi lebih lanjut jika berlangsung konsisten dan mengganggu fungsi anak sehari-hari:</p>

            <ul>
                <li>Keterlambatan bahasa yang cukup jauh dibandingkan anak seusianya</li>
                <li>Sulit memahami instruksi sederhana meski sudah diulang dengan cara yang sesuai</li>
                <li>Kesulitan memahami konsep sebab-akibat atau aturan sederhana</li>
                <li>Kesulitan mengingat informasi baru dan menerapkannya kembali</li>
                <li>Keterlambatan menguasai keterampilan perawatan diri seperti makan, berpakaian, atau toilet training</li>
                <li>Kesulitan menetap dalam membaca, menulis, berhitung, atau menyelesaikan masalah sederhana</li>
                <li>Membutuhkan bantuan jauh lebih banyak daripada teman sebaya dalam aktivitas sehari-hari</li>
            </ul>

            <p>Jangan melabeli anak "kurang pintar" hanya dari satu perilaku atau satu momen kesulitan. Kalau tanda-tanda di atas terjadi berulang dan menetap, langkah paling tepat adalah <a href="asesmen-abk">asesmen</a> menyeluruh oleh profesional, bukan menyimpulkan sendiri di rumah.</p>

            <h2 id="cara-tes">Cara Tes IQ Anak yang Valid</h2>

            <p>Untuk anak usia sekolah, instrumen yang umum dipakai adalah <strong>WISC</strong> (Wechsler Intelligence Scale for Children), diberikan secara individual oleh psikolog terlatih. Instrumen lain disesuaikan dengan usia dan tujuan pemeriksaan, misalnya <strong>WPPSI</strong> untuk anak prasekolah atau <strong>Stanford-Binet</strong> pada kebutuhan tertentu.</p>

            <p><strong>Tes IQ online gratis dan kuis di media sosial tidak bisa menggantikan pemeriksaan psikologis terstandar.</strong> Tes semacam itu umumnya tidak punya norma usia, prosedur administrasi terkendali, atau interpretasi klinis yang bisa dipertanggungjawabkan.</p>

            <p>Pemeriksaan yang baik biasanya mencakup:</p>

            <ol>
                <li>Wawancara dengan orang tua tentang riwayat perkembangan, kesehatan, dan perilaku anak</li>
                <li>Observasi anak selama pemeriksaan berlangsung</li>
                <li>Administrasi tes individual oleh psikolog yang kompeten</li>
                <li>Penghitungan skor berdasarkan norma usia dan alat tes yang sesuai</li>
                <li>Interpretasi FSIQ, indeks kemampuan, subtes, dan pola kekuatan-kelemahan anak</li>
                <li>Rekomendasi tindak lanjut, termasuk <a href="intervensi-dini">intervensi dini</a> bila diperlukan</li>
            </ol>

            <h2 id="tempat-tes">Tempat Tes IQ Anak di Yogyakarta dan Indonesia</h2>

            <p>Orang tua dapat mencari layanan tes IQ anak melalui psikolog klinis anak atau psikolog pendidikan, rumah sakit dengan layanan psikologi tumbuh kembang, klinik tumbuh kembang anak, atau biro psikologi dengan psikolog berizin resmi. Untuk memverifikasi bahwa psikolog terdaftar resmi, orang tua bisa memakai direktori <a href="https://himpsi.or.id/cari-psikolog" target="_blank" rel="noopener nofollow">Cari Psikolog dari HIMPSI</a> (Himpunan Psikologi Indonesia).</p>

            <p>Sebelum memilih layanan, tanyakan hal berikut kepada penyedia jasa:</p>
            <ul>
                <li>Apakah pemeriksaan dilakukan langsung oleh psikolog berizin?</li>
                <li>Alat tes apa yang dipakai, dan apakah sesuai usia anak?</li>
                <li>Apakah orang tua menerima laporan tertulis yang lengkap?</li>
                <li>Apakah laporan menjelaskan rekomendasi pembelajaran atau intervensi, bukan cuma angka?</li>
            </ul>

            <p>Di Sleman, Yogyakarta, YUKA melalui Sekolah Inklusi Taruna Imani dapat membantu mengarahkan orang tua ke jejaring rujukan asesmen anak berkebutuhan khusus, meski YUKA sendiri bukan penyedia layanan tes psikologi formal.</p>

            <h2 id="iq-vs-prestasi">Apakah IQ Sama dengan Prestasi Sekolah?</h2>

            <p>Tidak selalu. IQ mengukur sebagian kemampuan kognitif tertentu (penalaran, memori kerja, kecepatan proses, pemahaman verbal dan visual), sedangkan prestasi sekolah juga dipengaruhi motivasi, kualitas pengajaran, dukungan keluarga, kesehatan emosional, dan gaya belajar anak. Anak dengan skor Average pun bisa berprestasi sangat baik kalau mendapat lingkungan belajar yang tepat, sebagaimana anak dengan skor tinggi bisa kesulitan tanpa dukungan yang sesuai. Konsep ini berkaitan dengan teori <a href="kecerdasan-majemuk">kecerdasan majemuk</a>, yang melihat kecerdasan anak lebih luas daripada satu angka tes saja.</p>

            <blockquote>
                <p>"Skor IQ adalah satu potret kemampuan kognitif pada satu titik waktu, bukan ramalan tentang siapa anak akan menjadi di masa depan."</p>
            </blockquote>

            <h2 id="peran-yuka">Pengalaman YUKA Mendampingi Anak dengan Beragam Kemampuan</h2>

            <p>Di Sekolah Inklusi Taruna Imani, YUKA mendampingi anak-anak dengan profil kemampuan yang sangat beragam, termasuk anak dengan <a href="disabilitas-intelektual-adalah">disabilitas intelektual</a>, <a href="slow-learner">slow learner</a>, maupun anak dengan kemampuan di atas rata-rata. Pendekatan kami tidak berhenti pada angka tes, melainkan pada apa yang benar-benar dibutuhkan anak untuk berkembang.</p>

            <div class="story-highlight">
                <h3>Pendampingan yang Melihat Anak Secara Utuh</h3>
                <p>Setiap anak yang mendaftar di YUKA melalui proses <a href="asesmen-abk">asesmen</a> awal untuk memahami kebutuhan belajarnya, bukan sekadar mengukur satu skor. Anak yang membutuhkan dukungan tambahan didampingi <a href="gpk-adalah">Guru Pendamping Khusus (GPK)</a> atau <a href="shadow-teacher-adalah">shadow teacher</a>, dengan pendekatan pembelajaran yang disesuaikan kecepatan dan gaya belajar masing-masing anak, bukan disamaratakan berdasarkan angka tes semata.</p>
            </div>

            <p>Prinsip kami di YUKA: setiap anak adalah amanah yang punya potensi untuk berkembang, apa pun hasil tes kognitifnya. Rasulullah SAW bersabda, <em>"Setiap anak dilahirkan dalam keadaan fitrah."</em> (HR. Bukhari-Muslim). Tugas orang tua, pendidik, dan masyarakat adalah menemukan cara terbaik untuk mendampingi setiap anak sesuai kemampuannya, bukan membandingkannya dengan angka semata.</p>

            <h2 id="faq">FAQ Seputar IQ Anak</h2>
${faqHtml}

            <div class="related-reading" style="background:#f8fafc;border-left:4px solid #2b7a78;padding:1rem 1.25rem;margin:1.5rem 0;">
                <p style="margin:0;">Untuk memahami kebutuhan belajar anak lebih jauh, baca juga panduan tentang <a href="pendidikan-inklusi">pendidikan inklusi</a> dan <a href="stimulasi-motorik-halus">stimulasi motorik halus</a> anak.</p>
            </div>

            <h2>Kesimpulan</h2>

            <p><strong>Berapa IQ anak yang normal?</strong> Skor 90-109 adalah kategori Average resmi, sementara 85-115 adalah rentang statistik satu simpangan baku dari rata-rata. Angka ini penting untuk dipahami, tapi jauh lebih penting adalah membaca skor IQ sebagai satu bagian kecil dari gambaran anak secara utuh, bukan vonis tunggal tentang masa depannya. Kalau Anda mengkhawatirkan perkembangan kognitif anak, langkah paling tepat adalah konsultasi dengan psikolog anak berizin, bukan menyimpulkan sendiri dari tes online atau membandingkan dengan anak lain.</p>

            <p>Jika Anda membutuhkan pendampingan pendidikan untuk anak dengan kebutuhan belajar khusus di Yogyakarta, YUKA siap menjadi mitra Anda melalui Sekolah Inklusi Taruna Imani di Sleman.</p>

            <h3>Baca Juga Artikel Terkait:</h3>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="disabilitas-intelektual-adalah">Disabilitas Intelektual Adalah: Pengertian, Penyebab, dan Penanganan</a></h4>
                    <p>Memahami disabilitas intelektual, klasifikasi berdasarkan IQ, dan cara mendampinginya.</p>
                </div>
                <div class="related-card">
                    <h4><a href="kecerdasan-majemuk">Kecerdasan Majemuk: 9 Jenis Kecerdasan Menurut Howard Gardner</a></h4>
                    <p>Melihat kecerdasan anak lebih luas daripada satu angka skor IQ.</p>
                </div>
                <div class="related-card">
                    <h4><a href="slow-learner">Slow Learner Adalah: Ciri, Penyebab, dan Cara Mendampingi</a></h4>
                    <p>Anak dengan IQ 70-89 yang butuh pendekatan belajar berbeda.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#IQAnak</a>
            <a href="#">#TesIQ</a>
            <a href="#">#KecerdasanAnak</a>
            <a href="#">#PsikologiAnak</a>
            <a href="#">#PendidikanInklusi</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
            <a href="#">#Yogyakarta</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber Resmi &amp; Referensi Authoritative</h3>
          <p style="font-size:0.95rem;color:#444;margin-bottom:0.75rem;">Konten artikel ini diperkuat dengan referensi dari lembaga resmi dan sumber psikometri yang kredibel:</p>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li><a href="https://keslan.kemkes.go.id/view_artikel/2040/kenali-tanda-dan-gejala-anak-dengan-retardasi-metal" target="_blank" rel="noopener nofollow"><strong>Kemenkes Keslan: Kenali Tanda dan Gejala Anak dengan Retardasi Mental</strong></a> <span style="color:#666;">keslan.kemkes.go.id</span></li>
              <li><a href="https://www.who.int/publications/i/item/9789241514064" target="_blank" rel="noopener nofollow"><strong>WHO: Nurturing Care for Early Childhood Development</strong></a> <span style="color:#666;">who.int</span></li>
              <li><a href="https://himpsi.or.id/cari-psikolog" target="_blank" rel="noopener nofollow"><strong>HIMPSI: Direktori Cari Psikolog Resmi Indonesia</strong></a> <span style="color:#666;">himpsi.or.id</span></li>
              <li><a href="https://acisiq.com/iq-score-chart" target="_blank" rel="noopener nofollow"><strong>Tabel Klasifikasi Skor IQ (skala Wechsler)</strong></a> <span style="color:#666;">acisiq.com</span></li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer Medis &amp; Pendidikan:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti konsultasi profesional</strong>. Untuk tes IQ, diagnosis, atau penanganan anak, <strong>silakan konsultasikan langsung dengan psikolog anak, psikiater anak, atau tenaga ahli pendidikan khusus yang berlisensi</strong>. YUKA Indonesia mendukung pendekatan multidisiplin dan tidak menggantikan peran psikolog maupun tenaga medis profesional.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Berapa%20IQ%20Anak%20yang%20Normal%3F%20Kategori%20dan%20Cara%20Mengetahuinya%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=Berapa%20IQ%20Anak%20yang%20Normal%3F&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
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

const finalHtml = ensureArticleShell(html);
const missing = missingShellParts(finalHtml);
if (missing.length) throw new Error('shell gate failed: ' + missing.join(', '));

fs.writeFileSync(OUT, finalHtml, 'utf8');
console.log('Wrote', OUT, finalHtml.length, 'bytes');

// Rough word count of visible body text (strip tags/scripts/styles)
const bodyMatch = finalHtml.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<div class="article-tags">/);
const text = (bodyMatch ? bodyMatch[1] : finalHtml)
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const wordCount = text.split(' ').filter(Boolean).length;
console.log('Approx word count (article body):', wordCount);

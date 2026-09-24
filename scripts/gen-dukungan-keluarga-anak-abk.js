#!/usr/bin/env node
'use strict';

// One-time generator for artikel/dukungan-keluarga-anak-abk.html (catchup 2026-09-25, kartu 1QsvfO5n)
// Follows the canonical shell rule in CLAUDE.md: footer/GA4/analytics come
// from scripts/lib/article-shell.js via ensureArticleShell(), never retyped.
// YMYL: every factual statement links inline to WHO, CDC, AAP (PubMed),
// peer-reviewed meta-analyses (PubMed), UU 8/2016 (JDIH), or Kemenkes.
// Sister articles published the same day (menerima-diagnosis-anak-abk,
// kesehatan-mental-remaja-berkebutuhan-khusus) must share 0 identical paragraphs.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'dukungan-keluarga-anak-abk';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const TITLE_TAG = 'Dukungan Keluarga Anak ABK: Peran Tiap Anggota Rumah';
const META_DESC = 'Dukungan keluarga anak ABK tidak boleh bertumpu pada ibu saja. Pelajari bentuk dukungan, pembagian peran, dan layanan yang bisa dihubungi. Baca panduannya.';
const OG_TITLE = 'Dukungan Keluarga Anak ABK: Bentuk, Pembagian Peran, dan Cara Menjaga Pengasuh Tetap Kuat';
const OG_DESC = 'Panduan dukungan keluarga untuk anak berkebutuhan khusus berdasarkan WHO, CDC, American Academy of Pediatrics, dan UU 8/2016: bentuk dukungan, peran ayah, saudara kandung, rutinitas rumah, dan kesehatan jiwa pengasuh.';
const H1 = 'Dukungan Keluarga Anak ABK: Bentuk, Pembagian Peran, dan Cara Menjaga Pengasuh Tetap Kuat';
const IMAGE_HERO = 'Dokumentasi/21-jan-2026-keluarga-foto-bersama-rumah-tradisional-014.webp';
const IMAGE_HERO_ALT = 'Guru dan pendamping YUKA berdiri di belakang enam anak yang duduk bersimpuh di lantai ruang kegiatan berhias gantungan kertas warna-warni dan lemari piala';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25T01:00:00+07:00';
const DATE_MODIFIED = '2026-09-25T01:00:00+07:00';
const DATE_DISPLAY = '25 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const faq = [
  {
    q: 'Apa yang dimaksud dukungan keluarga untuk anak ABK?',
    a: 'Dukungan keluarga adalah semua bantuan yang diberikan orang-orang serumah dan keluarga besar agar anak berkebutuhan khusus bisa tumbuh, belajar, dan ikut serta dalam kehidupan sehari-hari. Bentuknya mencakup dukungan emosional, informasi yang benar tentang kondisi anak, bantuan praktis dalam pengasuhan, serta advokasi di sekolah dan layanan kesehatan. Dukungan ini juga mencakup perhatian untuk pengasuh utama dan saudara kandung.'
  },
  {
    q: 'Apa peran ayah dalam mendampingi anak berkebutuhan khusus?',
    a: 'Ayah bukan sekadar pencari nafkah. Ayah bisa memegang tugas rutin yang jelas, misalnya mengantar terapi, memandu rutinitas mandi atau tidur, mengikuti pertemuan dengan guru, dan menggantikan ibu agar ibu punya waktu istirahat. Yang penting pembagiannya disepakati dan dicatat, sehingga beban tidak diam-diam kembali ke satu orang.'
  },
  {
    q: 'Bagaimana menjelaskan kondisi adik atau kakak ABK kepada saudaranya?',
    a: 'Gunakan kalimat jujur sesuai usia, misalnya bahwa otak adik bekerja dengan cara berbeda sehingga ia butuh bantuan untuk bicara atau belajar. Beri ruang bagi saudara untuk bertanya dan mengungkapkan rasa kesal tanpa dimarahi, dan sediakan waktu khusus berdua dengan orang tua. Meta-analisis tahun 2019 menyarankan saudara kandung ikut dilibatkan dalam intervensi dan strategi dukungan keluarga.'
  },
  {
    q: 'Apa itu respite care dan adakah di Indonesia?',
    a: 'Respite care adalah perawatan sementara untuk anak dengan disabilitas agar keluarganya bisa beristirahat sejenak dari rutinitas pengasuhan, sesuai definisi CDC. Di Indonesia layanan formalnya masih terbatas, sehingga banyak keluarga membuat versi sederhana: kakek-nenek, kerabat, atau pendamping terlatih yang sudah mengenal anak bergantian menjaga selama beberapa jam secara terjadwal.'
  },
  {
    q: 'Ke mana orang tua ABK bisa mencari bantuan psikologis?',
    a: 'Untuk dukungan psikologis awal, Kementerian Kesehatan menyediakan layanan gratis Healing119 melalui telepon 119 ekstensi 8 atau situs healing119.id. Layanan ini memberi dukungan psikologis awal dan dapat merujuk ke layanan profesional bila dibutuhkan. Untuk pendampingan jangka panjang, orang tua bisa ke puskesmas, psikolog klinis, atau psikiater. Bila ada risiko keselamatan, segera ke IGD terdekat.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Dukungan Keluarga Anak ABK', item: CANONICAL }
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
  keywords: 'dukungan keluarga anak abk, peran keluarga anak berkebutuhan khusus, pengasuhan anak abk, saudara kandung abk, respite care',
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
  whoCst: 'https://www.who.int/teams/mental-health-and-substance-use/treatment-care/who-caregivers-skills-training-for-families-of-children-with-developmental-delays-and-disorders',
  cdcCare: 'https://www.cdc.gov/disability-and-health/about/information-for-family-caregivers.html',
  cdcDd: 'https://www.cdc.gov/child-development/about/developmental-disability-basics.html',
  aap2011: 'https://pubmed.ncbi.nlm.nih.gov/21949138/',
  hayes: 'https://pubmed.ncbi.nlm.nih.gov/22790429/',
  shivers: 'https://pubmed.ncbi.nlm.nih.gov/30178117/',
  uu8: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016',
  kemenkes119: 'https://kesprimkom.kemkes.go.id/konten/127/151/0/cegah-bunuh-diri-dukung-kesehatan-jiwa-kenali-layanan-healing119-id',
  healing119: 'https://www.healing119.id/'
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
    <meta name="keywords" content="dukungan keluarga anak abk, peran keluarga anak berkebutuhan khusus, pengasuhan anak abk, peran ayah anak abk, saudara kandung abk, respite care, YUKA">
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
                <span class="current">Dukungan Keluarga Anak ABK</span>
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
            <figcaption>Guru, pendamping, dan anak-anak YUKA berfoto bersama di ruang kegiatan. Foto: dokumentasi YUKA. Foto tidak menggambarkan kondisi atau diagnosis anak mana pun.</figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Dukungan keluarga anak ABK adalah kerja tim satu rumah, bukan tugas satu orang.</strong> Bentuknya meliputi dukungan emosional, informasi yang benar tentang kondisi anak, bantuan praktis dalam pengasuhan harian, serta advokasi di sekolah dan layanan kesehatan. Laporan klinis ${ext(L.aap2011, 'American Academy of Pediatrics (AAP) tahun 2011')} menegaskan bahwa kebutuhan anak dengan disabilitas paling baik dipenuhi lewat kemitraan yang kuat antara orang tua, tenaga kesehatan, dan komunitas, dan bahwa keluarganya sendiri membutuhkan dukungan sosial serta finansial.</p>

            <p>Di banyak rumah, kenyataannya berbeda. Ibu memegang hampir semua urusan: jadwal terapi, obat, pekerjaan rumah dari sekolah, sampai menenangkan anak saat tantrum. Ayah bekerja, saudara kandung diminta mengalah, dan kakek-nenek tidak tahu harus membantu apa. Artikel ini membahas cara menyusun dukungan keluarga yang lebih adil dan tahan lama: siapa melakukan apa, bagaimana melibatkan saudara kandung, rutinitas rumah yang membantu anak belajar, dan kapan pengasuh sendiri perlu ditolong.</p>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini berisi informasi umum untuk keluarga. Kebutuhan tiap anak berbeda, jadi rencana dukungan sebaiknya disusun bersama dokter anak, psikolog, terapis, dan guru yang mengenal anak secara langsung.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#kenapa-penting">Kenapa dukungan keluarga menentukan</a></li>
                    <li><a href="#empat-bentuk">Empat bentuk dukungan keluarga</a></li>
                    <li><a href="#pembagian-peran">Membagi peran di dalam rumah</a></li>
                    <li><a href="#saudara-kandung">Jangan lupakan saudara kandung</a></li>
                    <li><a href="#rutinitas-rumah">Rutinitas rumah sebagai ruang belajar</a></li>
                    <li><a href="#pengasuh-utama">Menjaga pengasuh utama tetap kuat</a></li>
                    <li><a href="#sekolah-terapis">Bekerja sama dengan sekolah dan terapis</a></li>
                    <li><a href="#dukungan-luar">Mencari dukungan di luar rumah</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="kenapa-penting">Kenapa Dukungan Keluarga Menentukan</h2>
            <p>Anak menghabiskan sebagian besar waktunya di rumah, bukan di ruang terapi. Sesi terapi wicara atau okupasi umumnya hanya berlangsung beberapa jam dalam seminggu, sedangkan kesempatan berlatih bicara, makan sendiri, atau berpakaian muncul puluhan kali setiap hari. Keluarga yang kompak memastikan kesempatan-kesempatan kecil itu tidak terbuang.</p>
            <p>Peran ini juga diakui hukum Indonesia. ${ext(L.uu8, 'Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')} Pasal 5 ayat (3) menyebut anak penyandang disabilitas berhak mendapatkan perawatan dan pengasuhan keluarga atau keluarga pengganti untuk tumbuh kembang secara optimal, serta berhak dilindungi kepentingannya dalam pengambilan keputusan. Dengan kata lain, keluarga bukan pelengkap layanan, tetapi bagian dari hak anak itu sendiri.</p>
            <p>Kebutuhan ini juga tidak langka. ${ext(L.cdcDd, 'CDC')} memperkirakan sekitar 1 dari 6 anak usia 3 sampai 17 tahun di Amerika Serikat memiliki satu atau lebih disabilitas perkembangan. Angka itu berlaku untuk Amerika Serikat, tetapi memberi gambaran bahwa banyak sekali keluarga yang menjalani perjalanan serupa. Untuk pengertian dasar istilah ABK, lihat artikel <a href="abk-adalah-anak-berkebutuhan-khusus">ABK adalah anak berkebutuhan khusus</a>.</p>

            <h2 id="empat-bentuk">Empat Bentuk Dukungan Keluarga</h2>
            <p>Halaman ${ext(L.cdcCare, 'informasi untuk pengasuh keluarga dari CDC')} menyebut informasi, dukungan, advokasi, pemberdayaan, perawatan, dan keseimbangan sebagai fondasi keluarga yang sehat. Dalam praktik sehari-hari, fondasi itu bisa diringkas menjadi empat bentuk dukungan:</p>
            <ol>
                <li><strong>Dukungan emosional.</strong> Anggota keluarga menerima anak apa adanya, tidak menyalahkan ibu atau ayah atas kondisi anak, dan mau mendengar keluh kesah pengasuh tanpa buru-buru memberi nasihat.</li>
                <li><strong>Dukungan informasi.</strong> CDC menganjurkan keluarga mengumpulkan informasi tentang kondisi anggota keluarganya dan mendiskusikannya dengan orang lain yang ikut merawat. Artinya, kakek, nenek, atau pengasuh harian juga perlu tahu apa yang dianjurkan terapis, bukan hanya orang tua.</li>
                <li><strong>Dukungan praktis.</strong> Menurut CDC, anggota keluarga dan teman biasanya ingin membantu, tetapi sering tidak tahu caranya. Tugas yang jelas dan spesifik, seperti menjemput dari sekolah setiap Selasa atau menemani anak saat ibu memasak, jauh lebih berguna daripada tawaran umum "kabari saja kalau butuh".</li>
                <li><strong>Advokasi.</strong> CDC menyebut pengasuh yang menjadi advokat efektif cenderung lebih berhasil mendapatkan layanan yang lebih baik. Advokasi berarti bertanya, mencatat riwayat kesehatan anak, dan memastikan setiap pihak yang merawat tahu kondisi khusus anak.</li>
            </ol>

            <h2 id="pembagian-peran">Membagi Peran di Dalam Rumah</h2>
            <p>Pembagian peran yang tidak pernah dibicarakan hampir selalu berakhir dengan satu orang memikul semuanya. Cara paling sederhana untuk mencegahnya adalah duduk bersama sekali seminggu, lima belas menit saja, lalu menuliskan tugas minggu itu. Tabel berikut bisa menjadi titik awal dan disesuaikan dengan kondisi masing-masing keluarga.</p>
            <div style="overflow-x:auto;">
            <table class="classification-table">
                <thead>
                    <tr><th>Anggota keluarga</th><th>Contoh peran yang bisa dipegang</th></tr>
                </thead>
                <tbody>
                    <tr><td>Ibu</td><td>Koordinasi jadwal terapi dan sekolah, mencatat perkembangan anak, menyampaikan pesan terapis ke anggota keluarga lain</td></tr>
                    <tr><td>Ayah</td><td>Memegang rutinitas tetap (misalnya mandi sore dan rutinitas tidur), mengantar terapi di akhir pekan, hadir di pertemuan dengan guru, mengurus administrasi layanan dan pembiayaan</td></tr>
                    <tr><td>Saudara kandung</td><td>Menjadi teman bermain dalam permainan sederhana sesuai usia, bukan pengasuh pengganti</td></tr>
                    <tr><td>Kakek dan nenek</td><td>Menjaga anak beberapa jam secara terjadwal agar orang tua bisa beristirahat, dengan mengikuti aturan yang sama seperti di rumah</td></tr>
                    <tr><td>Kerabat dan tetangga</td><td>Bantuan praktis kecil yang rutin: belanja, antar jemput, atau menemani saudara kandung</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.9rem;color:#666;">Tabel disusun tim YUKA sebagai contoh pembagian peran berdasarkan pengalaman mendampingi keluarga, bukan pedoman klinis.</p>
            <p>Dua hal membuat pembagian ini bertahan. Pertama, <strong>konsistensi aturan</strong>: bila di rumah anak diminta menunjuk gambar sebelum diberi camilan, kakek dan nenek sebaiknya memakai aturan yang sama. Kedua, <strong>pengakuan</strong>: ucapan terima kasih kecil kepada anggota keluarga yang membantu membuat mereka mau terus terlibat. Bagi keluarga Muslim, kerja sama ini juga bagian dari saling menolong dalam kebaikan yang dianjurkan agama.</p>

            <figure class="article-inline-image">
                <img src="../Dokumentasi/cpao-ibu-anak-belajar-memasak-bersama-027.webp" alt="Seorang pendamping berkerudung dan celemek merah muda memegang kedua tangan anak laki-laki untuk menekan adonan di atas alas silikon biru saat kelas memasak" width="936" height="1248" loading="lazy">
                <figcaption>Pendampingan tangan di atas tangan saat kelas memasak YUKA. Bantuan fisik seperti ini dikurangi sedikit demi sedikit seiring anak makin mampu. Foto: dokumentasi YUKA.</figcaption>
            </figure>

            <h2 id="saudara-kandung">Jangan Lupakan Saudara Kandung</h2>
            <p>Saudara kandung sering menjadi anggota keluarga yang paling jarang ditanya perasaannya. Sebuah ${ext(L.shivers, 'meta-analisis tahun 2019 di Clinical Child and Family Psychology Review')} menggabungkan 69 sampel penelitian tentang saudara kandung individu autis. Hasilnya, secara keseluruhan mereka menunjukkan hasil yang lebih kurang baik dibanding kelompok pembanding, terutama pada gejala kecemasan dan depresi, fungsi sosial, dan hubungan antarsaudara. Para peneliti menyarankan agar saudara kandung ikut dilibatkan dalam intervensi dan strategi dukungan keluarga.</p>
            <p>Temuan itu bukan berarti semua saudara kandung pasti bermasalah. Banyak yang tumbuh menjadi pribadi yang peka dan penyayang. Namun keluarga perlu sengaja memberi perhatian, antara lain:</p>
            <ul>
                <li><strong>Waktu berdua yang terjadwal.</strong> CDC mengingatkan orang tua anak dengan disabilitas untuk juga meluangkan waktu dengan anak-anak lainnya. Tiga puluh menit berdua setiap minggu, tanpa membahas adiknya, sudah berarti.</li>
                <li><strong>Penjelasan sesuai usia.</strong> Anak yang tidak diberi penjelasan cenderung mengarang sendiri alasan kenapa adiknya diperlakukan berbeda.</li>
                <li><strong>Boleh kesal.</strong> Rasa iri atau malu adalah perasaan wajar. Dengarkan dulu, jangan langsung dinasihati untuk bersabar.</li>
                <li><strong>Bukan pengasuh cadangan.</strong> Membantu sesekali itu baik, tetapi tanggung jawab pengasuhan tetap milik orang dewasa.</li>
            </ul>

            <h2 id="rutinitas-rumah">Rutinitas Rumah sebagai Ruang Belajar</h2>
            <p>Organisasi Kesehatan Dunia (WHO) mengembangkan ${ext(L.whoCst, 'Caregiver Skills Training (CST)')}, program pelatihan bagi keluarga anak dengan keterlambatan perkembangan atau disabilitas. Program ini terdiri atas sembilan sesi kelompok dan tiga kunjungan rumah, dan melatih pengasuh memakai permainan sehari-hari serta kegiatan dan rutinitas rumah sebagai kesempatan untuk berinteraksi, berpartisipasi, dan belajar. Materinya meliputi komunikasi, keterlibatan anak, keterampilan hidup sehari-hari, perilaku yang menantang, dan strategi pengasuh mengelola beban.</p>
            <p>Prinsip ini bisa diterapkan tanpa alat mahal. Beberapa contohnya:</p>
            <ul>
                <li><strong>Saat makan:</strong> beri dua pilihan lauk dan tunggu anak memilih dengan kata, isyarat, atau menunjuk.</li>
                <li><strong>Saat berpakaian:</strong> biarkan anak menyelesaikan langkah terakhir sendiri, misalnya menarik celana ke atas, lalu tambah langkahnya perlahan.</li>
                <li><strong>Saat membereskan mainan:</strong> jadikan permainan memilah warna atau bentuk.</li>
                <li><strong>Saat pergi ke warung:</strong> latih menunggu giliran dan menyapa penjual.</li>
            </ul>
            <p>Anak yang kesulitan memahami urutan kegiatan sering terbantu dengan gambar langkah-langkah yang ditempel di dinding. Caranya kami tulis di artikel <a href="cara-membuat-jadwal-visual-untuk-anak-autis">cara membuat jadwal visual</a>. Untuk ide latihan kemandirian yang lebih rinci, baca <a href="bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh">cara mengajarkan kemandirian kepada anak berkebutuhan khusus</a>.</p>

            <figure class="article-inline-image">
                <img src="../Dokumentasi/cocopandan-lemon-keluarga-membuat-kerajinan-bersama-005.webp" alt="Dua perempuan berkerudung merah muda dan dua anak laki-laki duduk di lantai membuat minuman lemon, satu anak memegang irisan lemon dibantu orang dewasa di sebelahnya" width="936" height="1248" loading="lazy">
                <figcaption>Membuat minuman lemon bersama di lantai rumah. Kegiatan dapur sederhana memberi kesempatan berlatih memegang, menunggu giliran, dan mengikuti instruksi. Foto: dokumentasi YUKA.</figcaption>
            </figure>

            <h2 id="pengasuh-utama">Menjaga Pengasuh Utama Tetap Kuat</h2>
            <p>Beban pengasuhan itu nyata dan terukur. ${ext(L.hayes, 'Meta-analisis Hayes dan Watson (2013)')} yang membandingkan hasil banyak penelitian menemukan bahwa stres pengasuhan pada keluarga anak autis lebih tinggi dibanding keluarga anak dengan perkembangan tipikal, dengan ukuran efek yang tergolong besar. Penelitian ini khusus pada autisme, tetapi pesannya berlaku luas: kelelahan pengasuh bukan tanda lemah iman atau kurang sayang, melainkan akibat wajar dari tuntutan yang berat.</p>
            <p>Keluarga bisa menolong pengasuh utama dengan cara-cara berikut:</p>
            <ul>
                <li><strong>Jeda terjadwal.</strong> CDC mendefinisikan <em>respite care</em> sebagai perawatan sementara jangka pendek bagi penyandang disabilitas agar keluarganya bisa beristirahat dari rutinitas pengasuhan. Di Indonesia, versi sederhananya adalah anggota keluarga yang sudah mengenal anak bergantian menjaga beberapa jam setiap minggu.</li>
                <li><strong>Kesehatan fisik tidak ditunda.</strong> CDC mengingatkan pengasuh untuk tidak mengabaikan tanda sakit dan memperhatikan kesehatan mental serta emosionalnya, karena merawat diri juga membantu orang yang dirawat.</li>
                <li><strong>Teman senasib.</strong> Menurut CDC, kelompok dukungan membantu berbagi informasi dengan orang yang mengalami hal serupa dan dapat mengurangi rasa terisolasi.</li>
            </ul>
            <p>Ide perawatan diri yang lebih lengkap untuk orang tua ada di artikel <a href="self-care-untuk-orang-tua-anak-disabilitas">self care untuk orang tua anak disabilitas</a>. Bila Ayah dan Bunda baru saja menerima diagnosis anak, artikel <a href="menerima-diagnosis-anak-abk">menerima diagnosis anak ABK</a> membahas masa awal tersebut.</p>

            <div class="crisis-box">
                <h4>Bila beban terasa terlalu berat</h4>
                <p style="margin-bottom:0;">Kementerian Kesehatan menyediakan layanan gratis ${ext(L.healing119, 'Healing119')} untuk dukungan psikologis awal. ${ext(L.kemenkes119, 'Menurut Kemenkes')}, layanan ini bisa diakses dengan menelepon <strong>119 ekstensi 8</strong> atau melalui situs healing119.id (panggilan suara dan chat WhatsApp). Layanan ini menghubungkan Anda dengan konselor secara anonim dan dapat merujuk ke layanan profesional bila dibutuhkan. Bila Anda atau anggota keluarga punya pikiran untuk menyakiti diri, jangan menunggu: hubungi 119 ekstensi 8 atau datang ke IGD rumah sakit terdekat.</p>
            </div>

            <h2 id="sekolah-terapis">Bekerja Sama dengan Sekolah dan Terapis</h2>
            <p>Dukungan keluarga paling terasa hasilnya bila sejalan dengan yang dilakukan di sekolah dan tempat terapi. UU Nomor 8 Tahun 2016 Pasal 10 menyebut penyandang disabilitas berhak mendapatkan pendidikan yang bermutu secara inklusif dan khusus, serta berhak mendapatkan akomodasi yang layak sebagai peserta didik. Keluarga adalah pihak yang paling tahu kebutuhan anak, sehingga suara keluarga penting saat akomodasi itu disusun.</p>
            <p>Langkah-langkah yang membantu:</p>
            <ol>
                <li><strong>Satu buku penghubung.</strong> Guru, terapis, dan orang tua menulis di buku atau grup pesan yang sama, sehingga tidak ada informasi yang tercecer.</li>
                <li><strong>Ikut menyusun target.</strong> Minta dilibatkan saat sekolah menyusun <a href="program-pembelajaran-individual">program pembelajaran individual</a>, dan pastikan target di rumah dan di sekolah saling menguatkan.</li>
                <li><strong>Minta pekerjaan rumah dari terapis.</strong> Tanyakan satu atau dua latihan yang bisa diulang di rumah, lalu bagikan ke anggota keluarga lain.</li>
                <li><strong>Hadir bergantian.</strong> Ayah dan ibu tidak harus selalu hadir berdua, tetapi sebaiknya sama-sama pernah bertemu guru dan terapis agar paham kondisi anak dari sumbernya langsung.</li>
            </ol>
            <p>Pembahasan khusus tentang keterlibatan orang tua di sekolah inklusi ada di artikel <a href="peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>. Bila anak membutuhkan pendamping di kelas, baca juga <a href="shadow-teacher-adalah">shadow teacher adalah</a>.</p>

            <h2 id="dukungan-luar">Mencari Dukungan di Luar Rumah</h2>
            <p>Laporan AAP 2011 menyebut anak dengan disabilitas membutuhkan sistem layanan komunitas yang terpadu dan mendorong partisipasi semua anak. Keluarga tidak perlu menanggung semuanya sendiri. Beberapa pintu yang bisa diketuk:</p>
            <ul>
                <li><strong>Layanan kesehatan dasar.</strong> Posyandu, puskesmas, dan dokter anak untuk pemantauan tumbuh kembang dan rujukan terapi.</li>
                <li><strong>Program pemerintah.</strong> Bantuan pendidikan, jaminan kesehatan, dan layanan sosial untuk anak dengan disabilitas. Rangkumannya ada di artikel <a href="program-pemerintah-untuk-abk">program pemerintah untuk ABK</a>, termasuk cara mengurus <a href="kartu-disabilitas">kartu disabilitas</a>.</li>
                <li><strong>Komunitas orang tua.</strong> Kelompok orang tua di sekolah, di rumah sakit, atau daring. CDC menyarankan tidak membatasi diri pada kelompok yang fokus pada satu jenis kondisi saja.</li>
                <li><strong>Yayasan dan sekolah inklusi.</strong> Lembaga yang memahami ABK bisa menjadi teman diskusi. Panduan menilainya ada di artikel <a href="memilih-yayasan-anak-berkebutuhan-khusus">memilih yayasan anak berkebutuhan khusus</a>.</li>
            </ul>

            <h3>Tanda keluarga butuh bantuan tambahan</h3>
            <ul>
                <li>Pengasuh utama sulit tidur, mudah menangis, atau kehilangan minat pada hal yang dulu disukai selama berminggu-minggu.</li>
                <li>Pertengkaran suami istri soal pengasuhan makin sering dan tidak pernah selesai.</li>
                <li>Saudara kandung menarik diri, prestasinya menurun tajam, atau sering mengeluh sakit tanpa sebab jelas.</li>
                <li>Anggota keluarga mulai membentak atau memukul anak karena kehabisan kesabaran.</li>
            </ul>
            <p>Bila tanda-tanda ini muncul, berkonsultasilah dengan psikolog, konselor keluarga, atau tenaga kesehatan di puskesmas. Mencari bantuan adalah bentuk tanggung jawab, bukan kegagalan.</p>

            <div class="story-highlight">
                <h3>Pendampingan keluarga di YUKA</h3>
                <p style="margin-bottom:0;">Di Sekolah Inklusi Taruna Imani, YUKA mendampingi anak lewat rutinitas terstruktur dan kegiatan praktik seperti memasak dan wisata edukasi, sambil berkomunikasi rutin dengan orang tua agar yang dilatih di sekolah bisa dilanjutkan di rumah. YUKA bukan fasilitas medis dan tidak memberikan layanan psikologis klinis; untuk itu kami mengarahkan keluarga ke tenaga kesehatan. Ingin berdiskusi soal pendampingan anak? <a href="../kontak">Hubungi tim YUKA</a> atau lihat <a href="../program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="menerima-diagnosis-anak-abk">Menerima Diagnosis Anak ABK</a></h4>
                    <p>Menata emosi dan langkah awal setelah anak didiagnosis.</p>
                </div>
                <div class="related-card">
                    <h4><a href="kesehatan-mental-remaja-berkebutuhan-khusus">Kesehatan Mental Remaja Berkebutuhan Khusus</a></h4>
                    <p>Tantangan dan dukungan saat anak ABK memasuki usia remaja.</p>
                </div>
                <div class="related-card">
                    <h4><a href="tips-mendampingi-anak-autis">Tips Mendampingi Anak Autis</a></h4>
                    <p>Strategi praktis pendampingan harian di rumah.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#DukunganKeluarga</a>
            <a href="#">#ParentingABK</a>
            <a href="#">#SaudaraKandung</a>
            <a href="#">#PengasuhABK</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.aap2011, '<strong>Murphy NA, Carbone PS; AAP Council on Children With Disabilities. Parent-Provider-Community Partnerships: Optimizing Outcomes for Children With Disabilities. Pediatrics, 2011</strong>')}</li>
              <li>${ext(L.cdcCare, '<strong>CDC: Disability and Health Information for Family Caregivers</strong>')}</li>
              <li>${ext(L.cdcDd, '<strong>CDC: Developmental Disability Basics</strong>')}</li>
              <li>${ext(L.whoCst, '<strong>WHO: Caregiver Skills Training for Families of Children with Developmental Delays or Disabilities</strong>')}</li>
              <li>${ext(L.hayes, '<strong>Hayes SA, Watson SL. The Impact of Parenting Stress: A Meta-analysis. Journal of Autism and Developmental Disorders, 2013</strong>')}</li>
              <li>${ext(L.shivers, '<strong>Shivers CM, Jackson JB, McGregor CM. Functioning Among Typically Developing Siblings of Individuals with Autism Spectrum Disorder: A Meta-Analysis. Clinical Child and Family Psychology Review, 2019</strong>')}</li>
              <li>${ext(L.uu8, '<strong>Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (JDIH BPK)</strong>')}</li>
              <li>${ext(L.kemenkes119, '<strong>Kementerian Kesehatan RI: Kenali Layanan Healing119.id</strong>')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti konsultasi dengan dokter, psikolog, atau tenaga profesional lain</strong>. Rencana dukungan untuk anak dan keluarga sebaiknya disusun bersama tenaga profesional yang memeriksa anak secara langsung.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Dukungan%20Keluarga%20Anak%20ABK%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.870 9.870 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.480-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.470h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=Dukungan%20Keluarga%20Anak%20ABK&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
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

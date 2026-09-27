#!/usr/bin/env node
'use strict';

// One-time generator for artikel/gut-microbiome-dan-autisme-penelitian.html
// (catchup 2026-09-27, kartu IA4EN0B2). Canonical shell via scripts/lib/article-shell.js.
// YMYL: every research claim was checked on 2026-09-27 against the PubMed abstract:
// - PMID 24777214 McElhanon 2014 Pediatrics: meta-analysis 15 studies, GI symptoms OR 4.42 (1.90-10.28),
//   diarrhea OR 3.63, constipation OR 3.86, abdominal pain OR 2.45.
// - PMID 34767757 Yap 2021 Cell: n=247 metagenomics, negligible direct association ASD-microbiome,
//   restricted interests -> less diverse diet -> lower diversity; caution against driving-role claims.
// - PMID 37365313 Morton 2023 Nat Neurosci: 10 microbiome datasets + 15 other datasets; profile present in
//   age/sex-matched cohorts, NOT present in sibling-matched cohorts.
// - PMID 28122648 Kang 2017 Microbiome: open-label, 18 children, MTT (antibiotic, bowel cleanse, FMT 7-8 weeks),
//   ~80% GSRS reduction, improvements persisted 8 weeks.
// - PMID 36986145 He 2023 Nutrients: 7 studies, nonsignificant overall SMD -0.24 (-0.60 to 0.11).
// - PMID 39265200 Soleimanpour 2024 J Psychiatr Res: 8 RCTs, 318 participants aged 1.5-20, significantly better behaviour.
// - PMID 40647353 Liber 2025 Nutrients: FMT systematic review, 2 RCTs + 7 before-after; RCTs inconsistent,
//   before-after high risk of bias, no clear conclusion.
// Photo: Wikimedia Commons, viewed before use. E. coli SEM, Eric Erbe / Christopher Pooley, USDA ARS, public domain.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'gut-microbiome-dan-autisme-penelitian';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Gut Microbiome dan Autisme: Apa Kata Penelitian?';
const META_DESC = 'Gut microbiome dan autisme: apa kata penelitian? Simak temuan meta-analisis, status bukti probiotik dan transplantasi feses, serta sikap bijak orang tua.';
const OG_TITLE = 'Gut Microbiome dan Autisme: Rangkuman Penelitian untuk Orang Tua';
const OG_DESC = 'Benarkah bakteri usus berperan dalam autisme? Rangkuman jujur penelitian gut microbiome dan autisme: apa yang sudah terbukti, apa yang belum, dan apa artinya bagi keluarga.';
const H1 = 'Gut Microbiome dan Autisme: Apa Kata Penelitian Sejauh Ini?';
const IMAGE_HERO = 'assets/images/artikel/bakteri-e-coli-mikroskop-elektron-wikimedia.webp';
const IMAGE_HERO_ALT = 'Foto mikroskop elektron sekumpulan bakteri Escherichia coli berbentuk batang lonjong, diperbesar sekitar 10.000 kali, dengan skala 1 mikrometer';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-27T23:00:00+07:00';
const DATE_MODIFIED = '2026-09-27T23:00:00+07:00';
const DATE_DISPLAY = '27 September 2026';

const CREDIT = {
  name: 'Eric Erbe dan Christopher Pooley (USDA ARS)',
  author: 'https://commons.wikimedia.org/wiki/File:E_coli_at_10000x,_original.jpg',
  source: 'https://commons.wikimedia.org/wiki/File:E_coli_at_10000x,_original.jpg',
  license: 'Domain Publik',
  licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  mcelhanon: 'https://pubmed.ncbi.nlm.nih.gov/24777214/',
  yap: 'https://pubmed.ncbi.nlm.nih.gov/34767757/',
  morton: 'https://pubmed.ncbi.nlm.nih.gov/37365313/',
  kang: 'https://pubmed.ncbi.nlm.nih.gov/28122648/',
  he: 'https://pubmed.ncbi.nlm.nih.gov/36986145/',
  soleimanpour: 'https://pubmed.ncbi.nlm.nih.gov/39265200/',
  liber: 'https://pubmed.ncbi.nlm.nih.gov/40647353/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apakah bakteri usus menyebabkan autisme?',
    a: 'Belum ada bukti bahwa bakteri usus menyebabkan autisme. Studi besar tahun 2021 di jurnal Cell terhadap 247 peserta justru menemukan hubungan langsung antara diagnosis autisme dan mikrobioma usus sangat kecil. Perbedaan mikrobioma lebih banyak dijelaskan oleh pola makan yang terbatas.'
  },
  {
    q: 'Apakah anak autis lebih sering mengalami gangguan pencernaan?',
    a: 'Ya. Meta-analisis 15 studi di jurnal Pediatrics tahun 2014 menemukan anak autis lebih sering mengalami keluhan pencernaan dibanding anak pembanding, termasuk diare, sembelit, dan nyeri perut. Keluhan ini perlu diperiksakan ke dokter anak.'
  },
  {
    q: 'Apakah probiotik bisa mengobati autisme?',
    a: 'Tidak ada probiotik yang terbukti mengobati autisme. Hasil meta-analisis masih berbeda satu sama lain, jumlah pesertanya kecil, dan jenis probiotik yang diuji beragam. Pemberian suplemen apa pun pada anak sebaiknya dibicarakan dulu dengan dokter.'
  },
  {
    q: 'Apa itu transplantasi mikrobiota feses untuk autisme?',
    a: 'Transplantasi mikrobiota feses adalah pemindahan bakteri usus dari donor sehat ke usus penerima. Untuk autisme, prosedur ini masih berstatus penelitian. Tinjauan sistematis tahun 2025 menyimpulkan buktinya belum cukup untuk menarik kesimpulan yang jelas, jadi jangan dicoba di luar uji klinis resmi.'
  },
  {
    q: 'Apa yang bisa orang tua lakukan sekarang?',
    a: 'Catat keluhan pencernaan anak, konsultasikan ke dokter anak, bantu anak mengenal lebih banyak jenis makanan secara bertahap, dan tetap jalankan terapi yang sudah terbukti seperti terapi perilaku, terapi wicara, dan terapi okupasi.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Gut Microbiome dan Autisme', item: CANONICAL }
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
    height: 728,
    caption: 'Bakteri Escherichia coli di bawah mikroskop elektron, perbesaran sekitar 10.000 kali',
    creditText: 'Foto: Eric Erbe, pewarnaan digital Christopher Pooley, USDA ARS / Wikimedia Commons, domain publik',
    author: { '@type': 'Organization', name: 'USDA Agricultural Research Service' },
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
  keywords: 'gut microbiome dan autisme penelitian, mikrobioma usus autisme, bakteri usus autisme, probiotik autisme, gut-brain axis, transplantasi feses autisme',
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
    <meta name="keywords" content="gut microbiome dan autisme penelitian, mikrobioma usus autisme, bakteri usus autisme, probiotik autisme, YUKA">
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

    ${STYLE}
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
                <span class="current">Gut Microbiome dan Autisme</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="728" fetchpriority="high">
            <figcaption>Bakteri <em>Escherichia coli</em>, salah satu penghuni normal usus manusia, dilihat dengan mikroskop elektron. Gambar ini hanya ilustrasi bentuk bakteri usus, bukan sampel dari anak autis.
                <span class="kredit">Foto: Eric Erbe, pewarnaan digital Christopher Pooley (USDA ARS) / <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">Wikimedia Commons</a>, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">domain publik</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> penelitian memang menemukan bahwa anak autis lebih sering mengalami keluhan pencernaan dan komposisi bakteri ususnya (gut microbiome) sering berbeda dari anak lain. Namun studi terbesar dan paling ketat menunjukkan perbedaan itu <strong>sebagian besar dijelaskan oleh pola makan yang terbatas</strong>, bukan penyebab autisme. Probiotik dan transplantasi feses <strong>belum terbukti</strong> sebagai pengobatan autisme dan masih berstatus penelitian.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah rangkuman penelitian untuk orang tua, guru, dan pendamping, <strong>bukan saran medis dan bukan panduan pengobatan</strong>. Kami sengaja tidak menyebut merek, jenis, atau dosis probiotik. Setiap keluhan pencernaan dan setiap rencana suplemen perlu dibicarakan dengan dokter anak. Semua temuan dicek terhadap abstrak di PubMed pada 27 September 2026.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#apa-itu">Apa itu gut microbiome?</a></li>
                    <li><a href="#pencernaan">Keluhan pencernaan pada anak autis</a></li>
                    <li><a href="#temuan">Apa kata penelitian terbesar?</a></li>
                    <li><a href="#probiotik">Probiotik: status buktinya</a></li>
                    <li><a href="#fmt">Transplantasi mikrobiota feses</a></li>
                    <li><a href="#ringkasan">Tabel ringkasan status bukti</a></li>
                    <li><a href="#orang-tua">Apa artinya bagi orang tua?</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="apa-itu">Apa Itu Gut Microbiome?</h2>
            <p><strong>Gut microbiome</strong> atau mikrobioma usus adalah kumpulan mikroorganisme, terutama bakteri, yang hidup di saluran pencernaan beserta materi genetiknya. Jumlahnya sangat besar. Studi uji klinis tahun 2017 di jurnal <em>Microbiome</em> menyebut angka sekitar 10<sup>13</sup> bakteri di usus manusia (${ext(L.kang, 'Kang dkk., 2017')}). Bakteri ini membantu mencerna serat, menghasilkan sejumlah zat, dan berinteraksi dengan sistem kekebalan tubuh.</p>
            <p>Hubungan dua arah antara usus dan otak disebut <strong>gut-brain axis</strong> (sumbu usus-otak). Karena itulah para peneliti bertanya: mungkinkah bakteri usus ikut berperan dalam kondisi perkembangan otak seperti <a href="/artikel/autisme-adalah">autisme</a>? Pertanyaan ini wajar, tetapi jawabannya jauh lebih rumit daripada yang sering beredar di media sosial.</p>

            <h2 id="pencernaan">Keluhan Pencernaan pada Anak Autis Itu Nyata</h2>
            <p>Bagian ini punya bukti yang cukup kuat. Meta-analisis 15 studi yang terbit di jurnal <em>Pediatrics</em> membandingkan anak autis dengan anak pembanding (${ext(L.mcelhanon, 'McElhanon dkk., 2014')}). Hasilnya, anak autis sekitar 4,4 kali lebih mungkin mengalami keluhan pencernaan umum (odds ratio 4,42; 95% CI 1,90 sampai 10,28). Rinciannya:</p>
            <ul>
                <li><strong>Diare:</strong> odds ratio 3,63</li>
                <li><strong>Sembelit:</strong> odds ratio 3,86</li>
                <li><strong>Nyeri perut:</strong> odds ratio 2,45</li>
            </ul>
            <p>Para penulis juga mengingatkan bahwa metode studi yang dianalisis sangat beragam, dan penyebab keluhan itu belum bisa dipastikan. Salah satu faktor yang mereka sarankan untuk diteliti adalah <strong>pembatasan makanan</strong>. Poin ini penting, karena banyak anak autis sangat pemilih soal tekstur, warna, dan rasa makanan. Strategi menghadapinya dibahas di artikel <a href="/artikel/cara-mengatasi-picky-eater-anak-autis">cara mengatasi picky eater pada anak autis</a>.</p>
            <p>Pesan praktisnya: sembelit, diare, atau nyeri perut pada anak autis <strong>bukan bagian autisme yang harus diterima begitu saja</strong>. Anak yang sulit mengungkapkan rasa sakit bisa menunjukkannya lewat rewel, sulit tidur, atau perilaku yang berubah. Keluhan ini layak diperiksakan ke dokter anak.</p>

            <h2 id="temuan">Apa Kata Penelitian Terbesar?</h2>
            <p>Banyak studi awal melaporkan perbedaan bakteri usus antara anak autis dan anak lain. Masalahnya, sebagian besar studi itu kecil dan tidak mengendalikan faktor pengganggu seperti pola makan, usia, dan obat. Dua studi besar berikut mengubah cara para ilmuwan membaca data tersebut.</p>

            <h3>Studi Cell 2021: pola makan yang menjelaskan perbedaan</h3>
            <p>Tim dari Australia menganalisis sampel feses 247 peserta dari Australian Autism Biobank dan proyek kembar Queensland dengan metode metagenomik (${ext(L.yap, 'Yap dkk., 2021, <em>Cell</em>')}). Temuan utamanya:</p>
            <ul>
                <li>Hubungan <strong>langsung</strong> antara diagnosis autisme dan mikrobioma usus <strong>sangat kecil</strong>.</li>
                <li>Minat yang terbatas, salah satu ciri autisme, berkaitan dengan <strong>pola makan yang kurang beragam</strong>. Pola makan inilah yang kemudian berkaitan dengan keragaman bakteri usus yang lebih rendah dan feses yang lebih lembek.</li>
                <li>Para penulis secara tegas <strong>mengingatkan agar tidak mengklaim bahwa mikrobioma berperan sebagai pendorong autisme</strong>.</li>
            </ul>
            <p>Dengan kata lain, arah hubungannya kemungkinan terbalik dari yang sering dibayangkan: ciri autisme memengaruhi pilihan makanan, lalu makanan memengaruhi bakteri usus.</p>

            <h3>Studi Nature Neuroscience 2023: gambaran yang lebih kompleks</h3>
            <p>Studi lain menggabungkan 10 kumpulan data mikrobioma dan 15 kumpulan data lain, termasuk pola makan, metabolit, dan profil peradangan (${ext(L.morton, 'Morton dkk., 2023, <em>Nature Neuroscience</em>')}). Mereka menemukan pola molekuler dan bakteri tertentu yang berkaitan dengan autisme dan juga berkaitan dengan pola makan yang terbatas. Namun ada catatan penting: pola itu terlihat saat anak autis dibandingkan dengan anak lain yang disamakan usia dan jenis kelaminnya, tetapi <strong>tidak terlihat saat dibandingkan dengan saudara kandungnya sendiri</strong>. Artinya, faktor keluarga dan lingkungan bersama, termasuk makanan di rumah, ikut membentuk perbedaan tersebut.</p>
            <p>Kedua studi ini tidak menutup kemungkinan bahwa usus berperan pada sebagian gejala. Tetapi keduanya menunjukkan bahwa bukti saat ini <strong>belum mendukung</strong> anggapan bahwa bakteri usus adalah penyebab autisme. Penjelasan tentang apa yang sejauh ini diketahui soal penyebab autisme ada di artikel <a href="/artikel/apa-penyebab-autis-pada-anak">apa penyebab autis pada anak</a>.</p>

            <h2 id="probiotik">Probiotik: Status Buktinya</h2>
            <p>Probiotik sering dipasarkan sebagai solusi untuk anak autis. Bagaimana dengan buktinya? Hasil meta-analisis uji klinis ternyata <strong>tidak seragam</strong>:</p>
            <ul>
                <li>Meta-analisis 7 studi di jurnal <em>Nutrients</em> menemukan efek keseluruhan probiotik terhadap gejala perilaku anak autis <strong>tidak bermakna secara statistik</strong> (SMD -0,24; 95% CI -0,60 sampai 0,11). Penulis menyebut buktinya terbatas karena jumlah peserta kecil, durasi pendek, jenis probiotik berbeda-beda, dan kualitas penelitian rendah (${ext(L.he, 'He dkk., 2023')}).</li>
                <li>Meta-analisis lain terhadap 8 uji acak terkontrol dengan total 318 peserta berusia 1,5 sampai 20 tahun melaporkan skor perilaku kelompok probiotik lebih baik (${ext(L.soleimanpour, 'Soleimanpour dkk., 2024')}).</li>
            </ul>
            <p>Saat dua rangkuman bukti yang sama-sama baru memberi kesimpulan berbeda, dan jumlah pesertanya hanya ratusan orang, itu tanda bahwa <strong>pertanyaannya belum terjawab</strong>. Belum ada jenis, dosis, atau lama pemberian yang terbukti. Karena itu artikel ini tidak merekomendasikan produk apa pun. Prinsip yang sama berlaku untuk suplemen lain, seperti yang kami bahas di artikel <a href="/artikel/suplemen-untuk-anak-adhd">suplemen untuk anak ADHD</a>.</p>

            <h2 id="fmt">Transplantasi Mikrobiota Feses: Masih Penelitian</h2>
            <p>Transplantasi mikrobiota feses (<em>fecal microbiota transplantation</em>, FMT) adalah pemindahan bakteri usus dari donor sehat ke usus penerima. Studi yang paling sering dikutip adalah uji klinis terbuka tahun 2017 terhadap <strong>18 anak</strong> autis (${ext(L.kang, 'Kang dkk., 2017')}). Prosedurnya berat: 2 minggu antibiotik, pembersihan usus, lalu transplantasi feses setiap hari selama 7 sampai 8 minggu. Keluhan pencernaan dilaporkan turun sekitar 80% dan gejala perilaku membaik sampai 8 minggu setelah terapi.</p>
            <p>Namun studi itu <strong>tanpa kelompok pembanding</strong> (tidak ada plasebo), sehingga orang tua dan peneliti tahu anak menerima terapi. Tinjauan sistematis tahun 2025 terhadap 2 uji acak terkontrol dan 7 studi sebelum-sesudah menyimpulkan bahwa studi sebelum-sesudah punya risiko bias tinggi, hasil uji acak terkontrolnya tidak konsisten, dan <strong>belum bisa ditarik kesimpulan yang jelas</strong> tentang efektivitas FMT untuk anak autis (${ext(L.liber, 'Liber dkk., 2025')}).</p>
            <p>FMT melibatkan antibiotik dan bahan biologis dari orang lain. Prosedur ini <strong>tidak boleh dicoba sendiri di rumah</strong> dan hanya layak dijalani dalam uji klinis resmi dengan pengawasan dokter.</p>

            <h2 id="ringkasan">Tabel Ringkasan Status Bukti</h2>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Pertanyaan</th><th>Status bukti</th><th>Sumber utama</th></tr>
                </thead>
                <tbody>
                    <tr><td>Anak autis lebih sering punya keluhan pencernaan?</td><td><strong>Cukup kuat</strong>, didukung meta-analisis 15 studi</td><td>McElhanon dkk., 2014</td></tr>
                    <tr><td>Komposisi bakteri usus anak autis berbeda?</td><td><strong>Sering terlihat</strong>, tetapi sebagian besar dijelaskan pola makan</td><td>Yap dkk., 2021; Morton dkk., 2023</td></tr>
                    <tr><td>Bakteri usus menyebabkan autisme?</td><td><strong>Tidak terbukti</strong></td><td>Yap dkk., 2021</td></tr>
                    <tr><td>Probiotik memperbaiki gejala autisme?</td><td><strong>Belum pasti</strong>, meta-analisis saling bertentangan</td><td>He dkk., 2023; Soleimanpour dkk., 2024</td></tr>
                    <tr><td>Transplantasi feses memperbaiki gejala autisme?</td><td><strong>Belum pasti</strong>, masih tahap penelitian</td><td>Kang dkk., 2017; Liber dkk., 2025</td></tr>
                </tbody>
            </table>
            </div>

            <h2 id="orang-tua">Apa Artinya bagi Orang Tua?</h2>
            <ol>
                <li><strong>Anggap serius keluhan pencernaan.</strong> Catat frekuensi buang air besar, bentuk feses, tanda nyeri, dan perubahan perilaku, lalu bawa catatan itu ke dokter anak.</li>
                <li><strong>Perluas variasi makanan secara bertahap.</strong> Pola makan yang lebih beragam baik untuk gizi anak secara umum. Terapis okupasi dapat membantu bila anak sangat sensitif terhadap tekstur, sesuai pendekatan dalam <a href="/artikel/sensori-integrasi">sensori integrasi</a>.</li>
                <li><strong>Waspadai janji "menyembuhkan autisme".</strong> Produk atau terapi yang mengklaim menyembuhkan autisme lewat usus tidak didukung bukti saat ini. Pola kehati-hatian yang sama berlaku untuk terapi eksperimental lain, seperti yang kami tulis di artikel <a href="/artikel/stem-cell-therapy-untuk-autisme-perkembangan">stem cell therapy untuk autisme</a>.</li>
                <li><strong>Jangan hentikan terapi yang sudah terbukti.</strong> Intervensi dini, terapi perilaku, terapi wicara, dan terapi okupasi tetap menjadi fondasi. Rangkuman buktinya ada di artikel <a href="/artikel/systematic-review-intervensi-dini-autisme">systematic review intervensi dini autisme</a>.</li>
                <li><strong>Diskusikan sebelum memberi suplemen.</strong> Sampaikan kepada dokter semua suplemen yang sedang atau ingin diberikan, termasuk probiotik.</li>
            </ol>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi anak berkebutuhan khusus, termasuk anak autis, melalui pendidikan inklusi dan layanan terapi di Sleman. Kami tidak memberikan layanan medis atau suplemen, tetapi kami bisa membantu keluarga menyusun rutinitas makan dan belajar yang ramah anak. Baca <a href="/artikel/tips-mendampingi-anak-autis">tips mendampingi anak autis</a> atau hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/autisme-adalah">Autisme Adalah</a></h4>
                    <p>Pengertian, ciri, dan diagnosis autisme.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/cara-mengatasi-picky-eater-anak-autis">Picky Eater pada Anak Autis</a></h4>
                    <p>Strategi bertahap memperluas pilihan makanan.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/apa-penyebab-autis-pada-anak">Apa Penyebab Autis pada Anak</a></h4>
                    <p>Faktor yang sejauh ini diketahui dari penelitian.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#Autisme</a>
            <a href="#">#GutMicrobiome</a>
            <a href="#">#KesehatanPencernaan</a>
            <a href="#">#Penelitian</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.mcelhanon, 'McElhanon BO, dkk. <strong>Gastrointestinal symptoms in autism spectrum disorder: a meta-analysis.</strong> Pediatrics. 2014;133(5):872-83')}</li>
              <li>${ext(L.yap, 'Yap CX, dkk. <strong>Autism-related dietary preferences mediate autism-gut microbiome associations.</strong> Cell. 2021;184(24):5916-5931')}</li>
              <li>${ext(L.morton, 'Morton JT, dkk. <strong>Multi-level analysis of the gut-brain axis shows autism spectrum disorder-associated molecular and microbial profiles.</strong> Nat Neurosci. 2023;26(7):1208-1217')}</li>
              <li>${ext(L.kang, 'Kang DW, dkk. <strong>Microbiota Transfer Therapy alters gut ecosystem and improves gastrointestinal and autism symptoms: an open-label study.</strong> Microbiome. 2017')}</li>
              <li>${ext(L.he, 'He X, dkk. <strong>Effects of Probiotics on Autism Spectrum Disorder in Children: A Systematic Review and Meta-Analysis of Clinical Trials.</strong> Nutrients. 2023')}</li>
              <li>${ext(L.soleimanpour, 'Soleimanpour S, dkk. <strong>Probiotics for autism spectrum disorder: An updated systematic review and meta-analysis of effects on symptoms.</strong> J Psychiatr Res. 2024')}</li>
              <li>${ext(L.liber, 'Liber, dkk. <strong>The Impact of Fecal Microbiota Transplantation on Gastrointestinal and Behavioral Symptoms in Children and Adolescents with Autism Spectrum Disorder: A Systematic Review.</strong> Nutrients. 2025')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat medis</strong>. Tidak ada probiotik, suplemen, atau prosedur yang terbukti menyembuhkan autisme. Konsultasikan keluhan kesehatan anak kepada dokter. Sumber dicek pada 27 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Gut%20Microbiome%20dan%20Autisme%3A%20Apa%20Kata%20Penelitian%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Gut%20Microbiome%20dan%20Autisme&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
            </div>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
</article>

    <section class="section bg-primary" style="padding: 4rem 0;">
        <div class="container text-center">
            <h2 style="color: var(--white); margin-bottom: 1rem;">Bantu Pendidikan Anak Berkebutuhan Khusus</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 2rem;">Setiap donasi Anda membantu anak-anak dengan beragam kemampuan mendapatkan pendidikan, pendampingan, dan fasilitas belajar yang sesuai kebutuhan mereka.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="../donasi" class="btn btn-secondary">Donasi Sekarang</a>
                <a href="https://wa.me/6281229912332?text=Halo%20YUKA%2C%20saya%20ingin%20bertanya%20tentang%20pendampingan%20anak%20berkebutuhan%20khusus" target="_blank" class="btn btn-outline-light">Hubungi via WhatsApp</a>
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

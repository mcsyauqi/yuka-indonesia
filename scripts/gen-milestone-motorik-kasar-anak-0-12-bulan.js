#!/usr/bin/env node
'use strict';

// One-time generator for artikel/milestone-motorik-kasar-anak-0-12-bulan.html
// (catchup 2026-09-27, kartu IM9GfNAj). Canonical shell via scripts/lib/article-shell.js.
// YMYL: every milestone was checked on 2026-09-27 against the live source:
// - CDC Learn the Signs. Act Early. pages 2-months, 4-months, 6-months, 9-months, 1-year
//   ("Movement/Physical Development Milestones" lists; "things most children (75% or more) can do by a certain age";
//   "Don't wait ... act early. Talk with your child's doctor").
// - Zubler dkk. 2022, Pediatrics, PMID 35132439 (AAP working group, >=75% criterion, 67.7% of moved milestones went to older ages).
// - WHO Motor Development Study 2006, Acta Paediatr Suppl, PMID 16817682: 816 children, 1st/99th percentile windows,
//   4.3% did not crawl on hands and knees.
// - AAP HealthyChildren safe sleep page: supervised awake tummy time, 15 to 30 minutes per day by 7 weeks.
// Photo: Wikimedia Commons, viewed before use. "Baby learning to crawl, Moscow, Russia", Vyacheslav Argenberg, CC BY 4.0.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'milestone-motorik-kasar-anak-0-12-bulan';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Milestone Motorik Kasar Anak 0-12 Bulan: Panduan per Usia';
const META_DESC = 'Milestone motorik kasar anak 0-12 bulan menurut CDC dan WHO: kapan bayi berguling, duduk, merangkak, berdiri. Kenali juga tanda perlu cek ke dokter.';
const OG_TITLE = 'Milestone Motorik Kasar Anak 0-12 Bulan: Panduan Usia demi Usia';
const OG_DESC = 'Panduan milestone motorik kasar bayi 0-12 bulan berdasarkan CDC dan WHO, lengkap dengan rentang usia normal, cara stimulasi, dan kapan perlu konsultasi.';
const H1 = 'Milestone Motorik Kasar Anak 0-12 Bulan: Panduan Usia demi Usia untuk Orang Tua';
const IMAGE_HERO = 'assets/images/artikel/bayi-empat-bulan-tengkurap-belajar-merangkak-wikimedia.webp';
const IMAGE_HERO_ALT = 'Bayi perempuan berusia empat bulan berbaju merah muda sedang tengkurap di atas kasur bermotif bunga biru, difoto dari atas';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-27T23:30:00+07:00';
const DATE_MODIFIED = '2026-09-27T23:30:00+07:00';
const DATE_DISPLAY = '27 September 2026';

const CREDIT = {
  source: 'https://commons.wikimedia.org/wiki/File:Baby_learning_to_crawl,_Moscow,_Russia.jpg',
  author: 'https://commons.wikimedia.org/wiki/User:Argenberg',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  cdc2: 'https://www.cdc.gov/act-early/milestones/2-months.html',
  cdc4: 'https://www.cdc.gov/act-early/milestones/4-months.html',
  cdc6: 'https://www.cdc.gov/act-early/milestones/6-months.html',
  cdc9: 'https://www.cdc.gov/act-early/milestones/9-months.html',
  cdc12: 'https://www.cdc.gov/act-early/milestones/1-year.html',
  zubler: 'https://pubmed.ncbi.nlm.nih.gov/35132439/',
  who: 'https://pubmed.ncbi.nlm.nih.gov/16817682/',
  aap: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/a-parents-guide-to-safe-sleep.aspx'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa saja milestone motorik kasar anak 0-12 bulan?',
    a: 'Menurut daftar CDC, sebagian besar bayi mengangkat kepala saat tengkurap di usia 2 bulan, menahan kepala tegak di usia 4 bulan, berguling dari tengkurap ke telentang di usia 6 bulan, duduk tanpa bantuan di usia 9 bulan, lalu menarik badan untuk berdiri dan berjalan sambil berpegangan pada perabot di usia 1 tahun.'
  },
  {
    q: 'Kapan bayi normalnya bisa duduk sendiri?',
    a: 'Studi WHO pada 816 anak di lima negara menemukan rentang normal duduk tanpa bantuan adalah usia 3,8 sampai 9,2 bulan. Daftar CDC menempatkan duduk tanpa bantuan pada usia 9 bulan, yaitu usia ketika sebagian besar bayi sudah bisa melakukannya.'
  },
  {
    q: 'Apakah bayi yang tidak merangkak berarti terlambat?',
    a: 'Tidak selalu. Dalam studi WHO, 4,3% anak sehat tidak pernah merangkak dengan tangan dan lutut dan langsung ke tahap berikutnya. Yang lebih penting adalah apakah bayi terus menunjukkan kemajuan gerak lain, seperti duduk, menarik badan untuk berdiri, dan berjalan berpegangan.'
  },
  {
    q: 'Kapan orang tua perlu membawa bayi ke dokter?',
    a: 'CDC menganjurkan untuk tidak menunggu bila bayi belum mencapai satu atau lebih milestone, kehilangan kemampuan yang sebelumnya sudah bisa, atau orang tua punya kekhawatiran lain. Bicarakan dengan dokter anak dan tanyakan tentang skrining perkembangan.'
  },
  {
    q: 'Berapa lama tummy time yang dianjurkan untuk bayi?',
    a: 'American Academy of Pediatrics menganjurkan tummy time setiap hari saat bayi bangun dan diawasi orang dewasa. Mulailah dengan waktu singkat sejak pulang dari rumah sakit, lalu tambah bertahap hingga minimal 15 sampai 30 menit per hari saat bayi berusia 7 minggu.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Milestone Motorik Kasar Anak 0-12 Bulan', item: CANONICAL }
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
    height: 684,
    caption: 'Bayi berusia empat bulan sedang tengkurap dan belajar mengangkat badan',
    creditText: 'Foto: Vyacheslav Argenberg / Wikimedia Commons, CC BY 4.0',
    author: { '@type': 'Person', name: 'Vyacheslav Argenberg', url: CREDIT.author },
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
  keywords: 'milestone motorik kasar anak 0 12 bulan, perkembangan motorik kasar bayi, tahapan motorik kasar bayi, kapan bayi duduk, kapan bayi merangkak, tummy time',
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
    <meta name="keywords" content="milestone motorik kasar anak 0 12 bulan, perkembangan motorik kasar bayi, tahapan motorik kasar bayi, tummy time, YUKA">
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
                <span class="current">Milestone Motorik Kasar Anak 0-12 Bulan</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="684" fetchpriority="high">
            <figcaption>Waktu tengkurap saat bayi bangun (tummy time) melatih otot leher, bahu, dan lengan yang dibutuhkan untuk berguling, duduk, dan merangkak.
                <span class="kredit">Foto: <a href="${CREDIT.author}" rel="nofollow noopener" target="_blank">Vyacheslav Argenberg</a> / <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">Wikimedia Commons</a>, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">CC BY 4.0</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> milestone motorik kasar anak 0-12 bulan berjalan dari kepala ke kaki. Menurut daftar CDC, sebagian besar bayi <strong>mengangkat kepala saat tengkurap di usia 2 bulan</strong>, <strong>menahan kepala tegak di usia 4 bulan</strong>, <strong>berguling dari tengkurap ke telentang di usia 6 bulan</strong>, <strong>duduk tanpa bantuan di usia 9 bulan</strong>, lalu <strong>menarik badan untuk berdiri dan berjalan sambil berpegangan di usia 1 tahun</strong>. Rentang normalnya lebar, jadi bandingkan anak dengan rentang itu, bukan dengan bayi tetangga.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah panduan edukasi untuk orang tua, guru, dan pendamping, <strong>bukan alat diagnosis</strong>. Hanya dokter anak atau tenaga kesehatan yang bisa menilai apakah perkembangan seorang anak terlambat. Semua usia di bawah ini dicek terhadap halaman CDC dan abstrak studi WHO pada 27 September 2026.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu milestone motorik kasar?</a></li>
                    <li><a href="#cara-baca">Cara membaca usia milestone</a></li>
                    <li><a href="#per-usia">Milestone per usia: 2, 4, 6, 9, dan 12 bulan</a></li>
                    <li><a href="#who">Rentang normal menurut studi WHO</a></li>
                    <li><a href="#stimulasi">Cara menstimulasi motorik kasar bayi</a></li>
                    <li><a href="#konsultasi">Kapan perlu konsultasi ke dokter?</a></li>
                    <li><a href="#abk">Untuk bayi dengan kebutuhan khusus</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Milestone Motorik Kasar?</h2>
            <p><strong>Motorik kasar</strong> adalah kemampuan gerak yang memakai otot besar tubuh, seperti otot leher, punggung, perut, lengan, dan kaki. Contohnya mengangkat kepala, berguling, duduk, merangkak, berdiri, dan berjalan. Penjelasan lengkap tentang pengertiannya ada di artikel <a href="/artikel/motorik-kasar-adalah">motorik kasar adalah</a>, sedangkan perbandingannya dengan gerakan jari dan tangan dibahas di <a href="/artikel/perbedaan-motorik-kasar-dan-halus">perbedaan motorik kasar dan halus</a>.</p>
            <p><strong>Milestone</strong> atau tonggak perkembangan adalah kemampuan yang umumnya sudah dikuasai anak pada usia tertentu. Pada tahun pertama, urutan kemampuan motorik kasar cenderung bergerak dari atas ke bawah: bayi lebih dulu menguasai kontrol kepala, lalu badan bagian atas, lalu duduk, dan terakhir kaki untuk berdiri dan melangkah.</p>

            <h2 id="cara-baca">Cara Membaca Usia Milestone dengan Benar</h2>
            <p>Banyak orang tua cemas karena membaca usia milestone sebagai batas waktu yang kaku. Padahal ada dua cara penyajian yang berbeda:</p>
            <ul>
                <li><strong>Daftar CDC</strong> memuat kemampuan yang sudah dikuasai oleh <strong>sebagian besar anak (75% atau lebih)</strong> pada usia tertentu (${ext(L.cdc12, 'CDC, Milestones by 1 Year')}). Artinya, bila bayi belum melakukannya di usia itu, ada alasan untuk berbicara dengan dokter, bukan untuk menunggu. Daftar ini direvisi tahun 2022 oleh kelompok kerja American Academy of Pediatrics, dan dari milestone yang dipindahkan usianya, 67,7% justru digeser ke usia yang lebih tua agar orang tua tidak cemas tanpa alasan (${ext(L.zubler, 'Zubler dkk., 2022, <em>Pediatrics</em>')}).</li>
                <li><strong>Studi WHO</strong> menyajikan <strong>rentang</strong> usia pencapaian dari persentil 1 sampai persentil 99 pada anak sehat (${ext(L.who, 'WHO Motor Development Study, 2006')}). Rentang ini menunjukkan betapa lebarnya variasi normal.</li>
            </ul>
            <p>Jadi, patokan CDC berfungsi seperti "lampu kuning" untuk memeriksakan anak, sedangkan rentang WHO membantu orang tua memahami bahwa bayi yang sehat pun bisa berbeda waktu beberapa bulan satu sama lain.</p>

            <h2 id="per-usia">Milestone Motorik Kasar per Usia</h2>
            <p>Daftar berikut diterjemahkan dari bagian <em>Movement/Physical Development Milestones</em> di halaman CDC untuk masing-masing usia. Kami hanya mengambil kemampuan motorik kasar. Kemampuan tangan dan jari seperti menggenggam mainan dibahas di artikel <a href="/artikel/apa-itu-motorik-halus">apa itu motorik halus</a>.</p>

            <h3>Usia 2 bulan</h3>
            <ul>
                <li>Mengangkat kepala saat tengkurap.</li>
                <li>Menggerakkan kedua lengan dan kedua kaki.</li>
            </ul>
            <p>Sumber: ${ext(L.cdc2, 'CDC, Milestones by 2 Months')}. Pada usia ini, kekuatan leher mulai terbentuk. Waktu tengkurap yang diawasi membantu bayi berlatih mengangkat kepala.</p>

            <h3>Usia 4 bulan</h3>
            <ul>
                <li>Menahan kepala tetap tegak tanpa ditopang saat digendong.</li>
                <li>Bertumpu pada siku atau lengan bawah untuk mengangkat dada saat tengkurap.</li>
            </ul>
            <p>Sumber: ${ext(L.cdc4, 'CDC, Milestones by 4 Months')}. Kontrol kepala yang stabil adalah fondasi untuk semua kemampuan berikutnya.</p>

            <h3>Usia 6 bulan</h3>
            <ul>
                <li>Berguling dari posisi tengkurap ke telentang.</li>
                <li>Mendorong badan ke atas dengan lengan lurus saat tengkurap.</li>
                <li>Bertumpu pada kedua tangan untuk menopang badan saat duduk.</li>
            </ul>
            <p>Sumber: ${ext(L.cdc6, 'CDC, Milestones by 6 Months')}. Karena bayi mulai bisa berguling, jangan tinggalkan bayi sendirian di kasur, sofa, atau meja ganti popok.</p>

            <h3>Usia 9 bulan</h3>
            <ul>
                <li>Bisa masuk ke posisi duduk sendiri.</li>
                <li>Duduk tanpa bantuan.</li>
            </ul>
            <p>Sumber: ${ext(L.cdc9, 'CDC, Milestones by 9 Months')}. Banyak bayi pada rentang usia ini juga mulai merangkak, walaupun merangkak tidak tercantum dalam daftar CDC.</p>

            <h3>Usia 12 bulan</h3>
            <ul>
                <li>Menarik badan untuk berdiri.</li>
                <li>Berjalan sambil berpegangan pada perabot.</li>
            </ul>
            <p>Sumber: ${ext(L.cdc12, 'CDC, Milestones by 1 Year')}. Perhatikan bahwa di usia 1 tahun, CDC belum mencantumkan berjalan sendiri tanpa pegangan. Jadi bayi 12 bulan yang belum melangkah sendiri belum tentu terlambat.</p>

            <h2 id="who">Rentang Normal Menurut Studi WHO</h2>
            <p>WHO Motor Development Study mengamati <strong>816 anak</strong> di Ghana, India, Norwegia, Oman, dan Amerika Serikat. Petugas terlatih memeriksa anak setiap bulan pada tahun pertama dan setiap dua bulan pada tahun kedua (${ext(L.who, 'WHO Multicentre Growth Reference Study Group, 2006')}). Hasilnya adalah "jendela" usia normal untuk enam kemampuan motorik kasar:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Kemampuan</th><th>Rentang usia normal (persentil 1 sampai 99)</th></tr>
                </thead>
                <tbody>
                    <tr><td>Duduk tanpa bantuan</td><td>3,8 sampai 9,2 bulan</td></tr>
                    <tr><td>Berdiri dengan bantuan</td><td>4,8 sampai 11,4 bulan</td></tr>
                    <tr><td>Merangkak dengan tangan dan lutut</td><td>5,2 sampai 13,5 bulan</td></tr>
                    <tr><td>Berjalan dengan bantuan</td><td>5,9 sampai 13,7 bulan</td></tr>
                    <tr><td>Berdiri sendiri</td><td>6,9 sampai 16,9 bulan</td></tr>
                    <tr><td>Berjalan sendiri</td><td>8,2 sampai 17,6 bulan</td></tr>
                </tbody>
            </table>
            </div>
            <p>Tiga hal penting dari studi ini:</p>
            <ol>
                <li><strong>Rentangnya lebar.</strong> Jendela paling sempit adalah duduk tanpa bantuan (5,4 bulan), sedangkan jendela paling lebar adalah berjalan sendiri (9,4 bulan) dan berdiri sendiri (10 bulan).</li>
                <li><strong>Tidak semua bayi merangkak.</strong> Sebanyak 4,3% anak sehat dalam studi ini tidak pernah merangkak dengan tangan dan lutut.</li>
                <li><strong>Urutannya umumnya sama.</strong> Sekitar 90% anak mencapai lima kemampuan dalam urutan yang serupa.</li>
            </ol>
            <p>Para peneliti WHO menegaskan bahwa jendela ini menggambarkan variasi normal dan dapat menjadi sinyal perlunya skrining bila seorang anak tampak terlambat. Jadi tabel ini bukan alat untuk mendiagnosis sendiri.</p>

            <h2 id="stimulasi">Cara Menstimulasi Motorik Kasar Bayi</h2>
            <p>Stimulasi tidak membutuhkan alat mahal. Yang dibutuhkan adalah kesempatan bergerak yang aman dan cukup setiap hari.</p>
            <ol>
                <li><strong>Tummy time setiap hari.</strong> American Academy of Pediatrics menganjurkan bayi tengkurap saat bangun dan selalu diawasi orang dewasa. Mulailah dengan waktu singkat sejak pulang dari rumah sakit, lalu tambah bertahap hingga minimal 15 sampai 30 menit per hari saat bayi berusia 7 minggu (${ext(L.aap, 'AAP, HealthyChildren.org')}). Tummy time juga membantu mencegah kepala peyang. Untuk tidur, bayi tetap diletakkan telentang.</li>
                <li><strong>Beri ruang di lantai.</strong> Alas yang rata dan bersih di lantai memberi bayi ruang untuk berguling dan mencoba merangkak, lebih leluasa dibanding digendong atau ditaruh di kursi bayi terlalu lama.</li>
                <li><strong>Letakkan mainan sedikit di luar jangkauan.</strong> Cara ini memancing bayi untuk mengangkat kepala, berguling, atau bergeser.</li>
                <li><strong>Latih duduk dengan penyangga.</strong> Duduk di pangkuan atau dikelilingi bantal membantu bayi melatih keseimbangan badan sebelum duduk sendiri.</li>
                <li><strong>Sediakan pegangan yang kokoh.</strong> Menjelang usia 1 tahun, sofa atau meja rendah yang stabil memberi kesempatan bayi menarik badan untuk berdiri dan melangkah sambil berpegangan. Singkirkan benda yang mudah jatuh dan tutup sudut tajam.</li>
                <li><strong>Ajak bermain dan bicara.</strong> Gerak dan bahasa tumbuh bersama. Menirukan suara bayi sambil bermain juga menstimulasi bahasa, seperti dijelaskan di artikel <a href="/artikel/babbling-dan-cooing-tahap-perkembangan-bahasa">babbling dan cooing</a>.</li>
            </ol>
            <p>Ide permainan untuk anak yang lebih besar ada di artikel <a href="/artikel/permainan-motorik-kasar">permainan motorik kasar</a> dan <a href="/artikel/contoh-motorik-kasar">contoh motorik kasar</a>.</p>

            <h2 id="konsultasi">Kapan Perlu Konsultasi ke Dokter?</h2>
            <p>Pesan CDC untuk orang tua sangat jelas: <strong>jangan menunggu</strong>. Bila anak belum mencapai satu atau lebih milestone, <strong>kehilangan kemampuan yang dulu sudah bisa</strong>, atau orang tua punya kekhawatiran lain, bertindaklah lebih awal. Bicarakan dengan dokter anak, sampaikan kekhawatiran Anda, dan tanyakan tentang skrining perkembangan (${ext(L.cdc12, 'CDC')}).</p>
            <p>Hal yang bisa dicatat sebelum kontrol:</p>
            <ul>
                <li>Kemampuan gerak apa yang sudah dan belum bisa dilakukan, beserta usia saat pertama kali terlihat.</li>
                <li>Apakah ada kemampuan yang hilang.</li>
                <li>Apakah bayi lahir prematur atau punya kebutuhan kesehatan khusus. CDC secara khusus meminta orang tua menyampaikan hal ini kepada dokter.</li>
                <li>Video singkat gerakan bayi di rumah, karena bayi sering tidak menunjukkan kemampuannya di ruang praktik.</li>
            </ul>
            <p>Di Indonesia, pemeriksaan bisa dimulai dari dokter anak, puskesmas, atau posyandu, yang dapat merujuk ke dokter spesialis atau layanan tumbuh kembang bila diperlukan. Pemeriksaan lebih awal bukan berarti anak pasti bermasalah. Bila memang ada keterlambatan, penanganan yang dimulai lebih dini memberi peluang terbaik, seperti dibahas di artikel <a href="/artikel/intervensi-dini">intervensi dini</a>.</p>

            <h2 id="abk">Untuk Bayi dengan Kebutuhan Khusus</h2>
            <p>Beberapa kondisi memang memengaruhi perkembangan motorik kasar, misalnya <a href="/artikel/down-syndrome-adalah">down syndrome</a> atau <a href="/artikel/cerebral-palsy-adalah">cerebral palsy</a>. Pada anak dengan kondisi seperti ini, milestone umum tetap berguna sebagai gambaran urutan, tetapi target dan waktunya sebaiknya disusun bersama dokter dan terapis. Fisioterapi dan terapi okupasi dapat membantu anak berlatih gerakan sesuai kemampuannya, dan anak yang sensitif terhadap sentuhan atau gerakan kadang terbantu dengan pendekatan <a href="/artikel/sensori-integrasi">sensori integrasi</a>.</p>
            <p>Yang terpenting adalah membandingkan anak dengan dirinya sendiri: apakah ia terus membuat kemajuan dari bulan ke bulan.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi anak berkebutuhan khusus melalui pendidikan inklusi dan layanan terapi di Sleman. Kami tidak memberikan diagnosis medis, tetapi kami bisa membantu keluarga memahami langkah pendampingan setelah anak diperiksa tenaga kesehatan. Baca daftar <a href="/artikel/apa-saja-terapi-anak-berkebutuhan-khusus">terapi untuk anak berkebutuhan khusus</a> atau hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/motorik-kasar-adalah">Motorik Kasar Adalah</a></h4>
                    <p>Pengertian, contoh, dan cara melatihnya.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/permainan-motorik-kasar">Permainan Motorik Kasar</a></h4>
                    <p>Ide permainan untuk melatih otot besar anak.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/intervensi-dini">Intervensi Dini</a></h4>
                    <p>Mengapa penanganan lebih awal itu penting.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#MotorikKasar</a>
            <a href="#">#TumbuhKembang</a>
            <a href="#">#Bayi</a>
            <a href="#">#Milestone</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.cdc2, 'CDC, Learn the Signs. Act Early. <strong>Milestones by 2 Months</strong>')}</li>
              <li>${ext(L.cdc4, 'CDC, Learn the Signs. Act Early. <strong>Milestones by 4 Months</strong>')}</li>
              <li>${ext(L.cdc6, 'CDC, Learn the Signs. Act Early. <strong>Milestones by 6 Months</strong>')}</li>
              <li>${ext(L.cdc9, 'CDC, Learn the Signs. Act Early. <strong>Milestones by 9 Months</strong>')}</li>
              <li>${ext(L.cdc12, 'CDC, Learn the Signs. Act Early. <strong>Milestones by 1 Year</strong>')}</li>
              <li>${ext(L.zubler, 'Zubler JM, dkk. <strong>Evidence-Informed Milestones for Developmental Surveillance Tools.</strong> Pediatrics. 2022')}</li>
              <li>${ext(L.who, 'WHO Multicentre Growth Reference Study Group. <strong>WHO Motor Development Study: windows of achievement for six gross motor development milestones.</strong> Acta Paediatr Suppl. 2006')}</li>
              <li>${ext(L.aap, 'American Academy of Pediatrics, HealthyChildren.org. <strong>How to Keep Your Sleeping Baby Safe: AAP Policy Explained</strong>')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti pemeriksaan tenaga kesehatan</strong>. Setiap anak berkembang dengan kecepatannya sendiri. Bila ada kekhawatiran tentang perkembangan anak, konsultasikan kepada dokter anak. Sumber dicek pada 27 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Milestone%20Motorik%20Kasar%20Anak%200-12%20Bulan%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Milestone%20Motorik%20Kasar%20Anak%200-12%20Bulan&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

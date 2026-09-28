#!/usr/bin/env node
'use strict';

// One-time generator for artikel/latihan-fisioterapi-anak-di-rumah.html (catchup 2026-09-28, kartu IdBZ4jxf).
// Skeleton from gen-empati-pada-anak-berkebutuhan-khusus.js. Card Candi Plaosan tourist photo rejected as off-topic;
// hero = crop of YUKA documentation photo cpao-anak-kecil-berdiri-teras-rumah-008 (below the chin: adult hand beside a standing child), no face. No AI images, no prices.
// Claims checked 2026-09-28 via PubMed E-utilities: PMID 32086598, 19770175, 25317927, 27027732; WHO physical activity fact sheet.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'latihan-fisioterapi-anak-di-rumah';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Latihan Fisioterapi Anak di Rumah: Panduan Orang Tua';
const META_DESC = 'Latihan fisioterapi anak di rumah paling aman bila dirancang fisioterapis. Pahami prinsip, contoh latihan, dan tanda bahaya sebelum mulai di sini.';
const OG_TITLE = 'Latihan Fisioterapi Anak di Rumah: Prinsip dan Batas Aman';
const OG_DESC = 'Panduan orang tua menjalankan program latihan fisioterapi anak di rumah: apa kata penelitian, contoh latihan yang umum diberikan, dan kapan harus berhenti.';
const H1 = 'Latihan Fisioterapi Anak di Rumah: Prinsip, Contoh Latihan, dan Batas Amannya';
const IMAGE = 'Dokumentasi/artikel/latihan-fisioterapi-anak-di-rumah-pendampingan-berdiri.webp';
const IMAGE_ALT = 'Tangan orang dewasa mendampingi lengan anak yang sedang berdiri dalam kegiatan YUKA';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T21:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T21:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';
const META_KW = 'latihan fisioterapi anak di rumah, fisioterapi anak, program latihan rumah, cerebral palsy, motorik kasar, YUKA';
const CRUMB = 'Latihan Fisioterapi Anak di Rumah';
const CAPTION = 'Latihan di rumah berjalan paling baik bila orang tua mendampingi dengan sabar dan mengikuti arahan fisioterapis. <span class="kredit">Foto: dokumentasi YUKA Indonesia</span>';
const SHARE_TXT = 'Latihan%20Fisioterapi%20Anak%20di%20Rumah';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  novak2020: 'https://pubmed.ncbi.nlm.nih.gov/32086598/',
  novak2009: 'https://pubmed.ncbi.nlm.nih.gov/19770175/',
  novakBerry: 'https://pubmed.ncbi.nlm.nih.gov/25317927/',
  morgan: 'https://pubmed.ncbi.nlm.nih.gov/27027732/',
  who: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apakah latihan fisioterapi anak boleh dilakukan sendiri di rumah?',
    a: 'Boleh, asalkan programnya disusun dan dicontohkan oleh fisioterapis yang sudah memeriksa anak. Orang tua berperan menjalankan latihan secara rutin, sedangkan pemilihan jenis latihan, posisi, dan beratnya tetap ditentukan fisioterapis. Latihan hasil meniru video tanpa pemeriksaan berisiko tidak cocok untuk kondisi anak.'
  },
  {
    q: 'Apakah program latihan di rumah benar-benar efektif?',
    a: 'Untuk anak dengan cerebral palsy, tinjauan bukti Novak dan rekan (2020) memasukkan program rumahan (home programs) ke dalam daftar intervensi yang efektif. Uji acak Novak dan rekan (2009) juga menemukan program rumahan yang disusun bersama terapis dan dijalankan orang tua selama 8 minggu memperbaiki fungsi anak dibanding tanpa program.'
  },
  {
    q: 'Berapa lama latihan fisioterapi di rumah sebaiknya dilakukan?',
    a: 'Tidak ada satu angka yang cocok untuk semua anak. Durasi dan frekuensi ditentukan fisioterapis sesuai kondisi dan usia anak. Sebagai gambaran, dalam penelitian Novak dan rekan (2009) program rumahan yang efektif dijalankan rata-rata 17,5 kali per bulan dengan lama sekitar 16,5 menit per sesi, tetapi angka itu berasal dari satu penelitian dan bukan resep umum.'
  },
  {
    q: 'Kapan latihan di rumah harus dihentikan?',
    a: 'Hentikan latihan dan hubungi fisioterapis atau dokter bila anak mengeluh nyeri yang menetap, menangis kesakitan saat digerakkan, ada pembengkakan atau kemerahan pada sendi, tampak sesak, pucat, atau sangat lelah, atau muncul kejang. Jangan memaksa sendi melewati batas geraknya.'
  },
  {
    q: 'Apa bedanya fisioterapi dan terapi okupasi untuk anak?',
    a: 'Secara umum fisioterapi berfokus pada gerak tubuh seperti kekuatan otot, keseimbangan, duduk, berdiri, dan berjalan. Terapi okupasi berfokus pada kemampuan melakukan kegiatan sehari-hari seperti makan, berpakaian, dan menulis. Banyak anak membutuhkan keduanya, dan program rumah sering menggabungkan latihan dari kedua terapis.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: CRUMB, item: CANONICAL }
  ]
};

const blogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: OG_TITLE,
  description: OG_DESC,
  image: { '@type': 'ImageObject', url: IMAGE_URL, caption: IMAGE_ALT, creditText: 'Dokumentasi YUKA Indonesia' },
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
  keywords: 'latihan fisioterapi anak di rumah, fisioterapi anak, program latihan rumah, home program, cerebral palsy, motorik kasar',
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
    <title>${TITLE_TAG}</title>
    <meta name="description" content="${META_DESC}">
    <meta name="keywords" content="${META_KW}">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${CANONICAL}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${CANONICAL}">
    <meta property="og:title" content="${OG_TITLE}">
    <meta property="og:description" content="${OG_DESC}">
    <meta property="og:image" content="${IMAGE_URL}">
    <meta property="og:image:alt" content="${IMAGE_ALT}">
    <meta property="og:locale" content="id_ID">
    <meta property="og:site_name" content="YUKA Indonesia">
    <meta property="article:published_time" content="${DATE_PUBLISHED}">
    <meta property="article:modified_time" content="${DATE_MODIFIED}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${OG_TITLE}">
    <meta name="twitter:description" content="${OG_DESC}">
    <meta name="twitter:image" content="${IMAGE_URL}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"></noscript>
    <link rel="stylesheet" href="../assets/css/style.min.css">
    <script type="application/ld+json">${JSON.stringify(blogPosting)}</script>
    <script type="application/ld+json">${JSON.stringify(breadcrumb)}</script>
    <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
    ${STYLE.replace('</style>', `        .article-featured-image { margin: -2rem auto 2rem; max-width: 600px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .article-featured-image img { width: 100%; height: auto; }
        .article-featured-image figcaption { padding: 0.6rem 1rem; font-size: 0.85rem; color: var(--gray-600); text-align: center; background: var(--gray-50); }
    </style>`)}
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
                <span class="current">${CRUMB}</span>
            </div>
            <span class="card-category" style="background: var(--secondary); color: var(--gray-900); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; display: inline-block; margin: 1rem 0;">Pendidikan</span>
            <h1 style="font-size: 2.5rem; max-width: 800px;">${H1}</h1>
            <div class="article-meta">
                <span>${DATE_DISPLAY}</span>
                <span>12 menit baca</span>
                <span>Tim YUKA</span>
            </div>
        </div>
    </header>

    <div class="container">
        <figure class="article-featured-image">
            <img src="../${IMAGE}" alt="${IMAGE_ALT}" width="520" height="400" fetchpriority="high" decoding="async">
            <figcaption>${CAPTION}</figcaption>
        </figure>
    </div>
    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> latihan fisioterapi anak di rumah adalah program latihan gerak yang <strong>disusun fisioterapis</strong> lalu <strong>dijalankan orang tua</strong> secara rutin di sela jadwal terapi. Penelitian pada anak dengan cerebral palsy menunjukkan program rumahan seperti ini bisa efektif, asalkan tujuannya jelas, latihannya sesuai kondisi anak, dan dilakukan konsisten. Orang tua tidak perlu menciptakan latihan sendiri; tugas utamanya adalah menjalankan program dengan aman dan melaporkan perkembangan anak ke terapis.</p></div>

            <div class="info-box">
                <h4>Batas keamanan, baca sebelum mulai</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum, <strong>bukan pengganti pemeriksaan fisioterapis atau dokter</strong>. Contoh latihan di bawah hanya gambaran jenis latihan yang biasa diberikan, bukan program untuk anak Anda. Sebelum memulai, pastikan anak sudah diperiksa fisioterapis, terutama bila anak punya kondisi seperti cerebral palsy, kelainan sendi atau tulang, riwayat operasi, kejang, atau kelainan jantung dan paru. Hentikan latihan bila anak kesakitan.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu latihan fisioterapi anak di rumah</a></li>
                    <li><a href="#penelitian">Apa kata penelitian</a></li>
                    <li><a href="#sebelum-mulai">Sebelum mulai: yang perlu disiapkan</a></li>
                    <li><a href="#contoh">Contoh jenis latihan yang sering diberikan</a></li>
                    <li><a href="#tips">Tips agar latihan konsisten</a></li>
                    <li><a href="#tanda-bahaya">Tanda harus berhenti</a></li>
                    <li><a href="#kesalahan">Kesalahan yang sering terjadi</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Latihan Fisioterapi Anak di Rumah</h2>
            <p>Fisioterapi anak membantu anak mengembangkan dan mempertahankan kemampuan gerak: menegakkan kepala, duduk, merangkak, berdiri, berjalan, menjaga keseimbangan, sampai memperkuat otot. Jadwal terapi di klinik biasanya hanya beberapa kali dalam seminggu. Padahal kemampuan gerak berkembang dari latihan yang diulang setiap hari. Di sinilah peran <strong>program latihan rumah</strong> (home program).</p>
            <p>Dalam program rumah, fisioterapis menetapkan tujuan bersama keluarga, memilih latihan, mencontohkan cara melakukannya, lalu orang tua melanjutkannya di rumah. Anak yang sering mendapat program seperti ini antara lain anak dengan <a href="/artikel/cerebral-palsy-adalah">cerebral palsy</a>, <a href="/artikel/down-syndrome-adalah">down syndrome</a>, keterlambatan perkembangan motorik, atau anak yang sedang pemulihan setelah cedera dan operasi.</p>
            <p>Supaya tidak rancu, fisioterapi berbeda dari terapi okupasi. Fisioterapi lebih banyak menangani gerak tubuh secara keseluruhan (<a href="/artikel/motorik-kasar-adalah">motorik kasar</a>), sedangkan <a href="/artikel/terapi-okupasi">terapi okupasi</a> berfokus pada kegiatan sehari-hari dan keterampilan tangan. Banyak program rumah menggabungkan keduanya.</p>

            <h2 id="penelitian">Apa Kata Penelitian tentang Program Latihan Rumah</h2>
            <p>Sebagian besar penelitian tentang program rumah dilakukan pada anak dengan cerebral palsy. Hasilnya cukup menggembirakan, dengan beberapa catatan penting.</p>
            <h3>Program rumah termasuk intervensi yang efektif</h3>
            <p>Tinjauan sistematis besar oleh Novak dan rekan merangkum bukti intervensi untuk anak dengan cerebral palsy dari 2012 sampai 2019. Program rumahan (home programs) masuk daftar intervensi tenaga kesehatan yang efektif, bersama latihan kekuatan (strength training), latihan kebugaran, latihan berbasis tujuan (goal-directed training), latihan spesifik tugas (task-specific training), latihan mobilitas, dan latihan menumpu berat badan (${ext(L.novak2020, 'Novak dkk., 2020')}).</p>
            <h3>Yang dijalankan orang tua pun bisa berhasil</h3>
            <p>Dalam uji acak terkontrol, Novak, Cusick, dan Lannin membagi 36 anak cerebral palsy usia sekolah ke kelompok program rumah dan kelompok tanpa program. Setelah 8 minggu, kelompok program rumah menunjukkan perbaikan fungsi dan kepuasan orang tua yang bermakna dibanding kelompok tanpa program. Program ini disusun secara kolaboratif bersama terapis dan dijalankan orang tua di rumah, rata-rata 17,5 kali per bulan dengan lama sekitar 16,5 menit per sesi (${ext(L.novak2009, 'Novak dkk., 2009')}). Catatannya, program dalam penelitian ini adalah program terapi okupasi, dan angka tersebut bukan dosis baku untuk semua anak.</p>
            <h3>Pada bayi: gerak yang dimulai anak sendiri</h3>
            <p>Tinjauan Morgan dan rekan terhadap 34 penelitian intervensi motorik untuk bayi dengan atau berisiko cerebral palsy menemukan kualitas buktinya masih terbatas. Meski begitu, ada bukti yang menjanjikan untuk intervensi dini yang menekankan <strong>gerak yang dimulai oleh anak sendiri</strong>, latihan spesifik tugas, <strong>edukasi orang tua</strong>, dan penyesuaian lingkungan (${ext(L.morgan, 'Morgan dkk., 2016')}). Artinya, lingkungan rumah yang mengundang anak bergerak sama pentingnya dengan latihannya.</p>
            <p>Di luar terapi, anak dengan disabilitas tetap perlu aktif bergerak sehari-hari. Pedoman aktivitas fisik ${ext(L.who, 'Organisasi Kesehatan Dunia (WHO)')} berlaku juga untuk orang yang hidup dengan disabilitas, dengan penyesuaian sesuai kemampuan masing-masing.</p>

            <h2 id="sebelum-mulai">Sebelum Mulai: Yang Perlu Disiapkan</h2>
            <ol>
                <li><strong>Pemeriksaan dan program tertulis dari fisioterapis.</strong> Minta daftar latihan, jumlah pengulangan, dan posisi yang benar. Bila perlu, rekam video saat terapis mencontohkan agar bisa ditonton ulang di rumah.</li>
                <li><strong>Tujuan yang jelas dan bermakna.</strong> Contohnya "anak bisa duduk sendiri saat makan" atau "anak bisa naik tangga sambil berpegangan". Tujuan yang konkret memudahkan orang tua dan terapis menilai kemajuan.</li>
                <li><strong>Tempat yang aman.</strong> Lantai beralas matras atau karpet, bebas benda tajam, dan cukup luas. Perabot yang stabil bisa dipakai untuk berpegangan.</li>
                <li><strong>Waktu yang pas.</strong> Pilih saat anak segar, tidak lapar, dan tidak baru saja makan kenyang.</li>
                <li><strong>Buku catatan.</strong> Catat latihan yang dilakukan, respons anak, dan keluhan yang muncul untuk dibawa ke sesi terapi berikutnya.</li>
            </ol>

            <h2 id="contoh">Contoh Jenis Latihan yang Sering Diberikan</h2>
            <p>Daftar berikut adalah jenis latihan yang <strong>umum</strong> ada dalam program rumah. Jangan memilih sendiri; tanyakan ke fisioterapis mana yang cocok untuk anak Anda, bagaimana posisinya, dan berapa pengulangannya.</p>
            <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.95rem;">
                <thead>
                    <tr style="background:#2B3A67;color:#fff;">
                        <th style="padding:0.75rem;text-align:left;">Jenis latihan</th>
                        <th style="padding:0.75rem;text-align:left;">Tujuan umum</th>
                        <th style="padding:0.75rem;text-align:left;">Contoh bentuk sehari-hari</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Kontrol kepala dan tubuh</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Menguatkan leher, punggung, dan perut</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Bayi bermain dalam posisi tengkurap dengan mainan di depannya, selalu diawasi</td></tr>
                    <tr><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Latihan duduk</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Keseimbangan saat duduk</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Duduk di lantai sambil meraih mainan ke samping kanan dan kiri</td></tr>
                    <tr><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Menumpu berat badan</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Menguatkan kaki dan melatih berdiri</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Berdiri berpegangan pada meja atau sofa yang stabil sambil bermain</td></tr>
                    <tr><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Latihan kekuatan</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Menguatkan otot tungkai dan panggul</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Duduk ke berdiri dari kursi pendek, naik anak tangga rendah</td></tr>
                    <tr><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Keseimbangan</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Mengurangi risiko jatuh</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Berjalan di atas garis atau selotip di lantai, berdiri satu kaki sambil berpegangan</td></tr>
                    <tr><td style="padding:0.75rem;">Peregangan</td><td style="padding:0.75rem;">Menjaga kelenturan otot dan sendi</td><td style="padding:0.75rem;">Hanya dengan teknik dan batas yang dicontohkan fisioterapis, gerakan pelan tanpa menyentak</td></tr>
                </tbody>
            </table>
            <p>Sesuai temuan penelitian tentang latihan spesifik tugas, latihan paling bermakna biasanya adalah <strong>kegiatan nyata</strong> yang ingin dikuasai anak. Bila tujuannya naik tangga, latihannya ya naik tangga dengan bantuan secukupnya. Ide permainan yang melatih gerak bisa dilihat di artikel <a href="/artikel/permainan-motorik-kasar">permainan motorik kasar</a>, dan patokan perkembangan bayi ada di <a href="/artikel/milestone-motorik-kasar-anak-0-12-bulan">milestone motorik kasar anak 0 sampai 12 bulan</a>.</p>

            <h2 id="tips">Tips agar Latihan di Rumah Konsisten</h2>
            <ul>
                <li><strong>Selipkan ke rutinitas.</strong> Latihan duduk seimbang bisa dilakukan saat mandi atau makan; latihan naik tangga saat berangkat tidur. Latihan yang menyatu dengan kegiatan harian lebih mudah dijalankan setiap hari.</li>
                <li><strong>Jadikan permainan.</strong> Anak lebih mau bergerak bila ada mainan yang ingin diraih, lagu, atau hitungan bersama.</li>
                <li><strong>Biarkan anak memulai gerak.</strong> Bantu secukupnya saja. Gerak yang dimulai anak sendiri adalah prinsip yang didukung penelitian pada bayi.</li>
                <li><strong>Libatkan anggota keluarga lain.</strong> Ayah, kakak, atau nenek bisa bergantian menemani supaya beban tidak di satu orang. Peran keluarga dibahas di artikel <a href="/artikel/dukungan-keluarga-anak-abk">dukungan keluarga untuk anak ABK</a>.</li>
                <li><strong>Evaluasi rutin dengan terapis.</strong> Program perlu disesuaikan seiring anak berkembang. Bawa catatan latihan ke setiap sesi.</li>
                <li><strong>Jaga diri sendiri juga.</strong> Menjalankan latihan setiap hari itu melelahkan. Cara mengelolanya ada di artikel <a href="/artikel/mengelola-stres-orang-tua-anak-abk">mengelola stres orang tua anak ABK</a>.</li>
            </ul>

            <h2 id="tanda-bahaya">Tanda Harus Berhenti dan Menghubungi Tenaga Kesehatan</h2>
            <div class="info-box">
                <p>Hentikan latihan dan hubungi fisioterapis atau dokter bila muncul salah satu tanda berikut:</p>
                <ul style="margin-bottom:0;">
                    <li>Anak menangis kesakitan saat digerakkan, atau nyeri tidak hilang setelah istirahat</li>
                    <li>Sendi tampak bengkak, merah, atau terasa panas</li>
                    <li>Anak tampak sesak napas, pucat, kebiruan, atau sangat lemas</li>
                    <li>Muncul kejang, atau kejang menjadi lebih sering</li>
                    <li>Kemampuan gerak anak justru menurun dari sebelumnya</li>
                </ul>
            </div>
            <p>Untuk anak yang memakai alat bantu seperti brace atau ortosis, atau pernah menjalani operasi tulang, tanyakan terlebih dahulu gerakan apa saja yang tidak boleh dilakukan. Anak dengan cerebral palsy juga perlu dipantau kondisi tulang belakangnya; informasinya ada di artikel <a href="/artikel/skoliosis-pada-anak-cerebral-palsy">skoliosis pada anak cerebral palsy</a>.</p>

            <h2 id="kesalahan">Kesalahan yang Sering Terjadi</h2>
            <ul>
                <li><strong>Meniru latihan dari video tanpa pemeriksaan.</strong> Latihan yang cocok untuk satu anak bisa tidak aman untuk anak lain.</li>
                <li><strong>Memaksa peregangan sampai anak menangis.</strong> Peregangan yang dipaksakan berisiko mencederai otot dan sendi.</li>
                <li><strong>Latihan terlalu lama sekaligus.</strong> Sesi pendek tapi rutin biasanya lebih mudah dijalankan daripada sesi panjang yang jarang.</li>
                <li><strong>Menganggap program rumah menggantikan terapi.</strong> Program rumah melengkapi sesi dengan fisioterapis, bukan menggantikannya.</li>
                <li><strong>Membandingkan anak dengan anak lain.</strong> Ukur kemajuan anak dari tujuannya sendiri.</li>
            </ul>

            <div class="story-highlight">
                <h3>Belajar dan bergerak bersama di YUKA</h3>
                <p style="margin-bottom:0;">Di Sekolah Inklusi Taruna Imani, anak berkebutuhan khusus belajar dan berkegiatan bersama teman-temannya setiap hari, dan keluarga menjadi bagian penting dari proses itu. Bila Anda sedang mencari layanan terapi di sekitar Yogyakarta, artikel <a href="/artikel/tempat-terapi-anak-jogja">tempat terapi anak di Jogja</a> bisa menjadi titik awal. Untuk mengenal program kami, kunjungi halaman <a href="/program">program YUKA</a> atau hubungi tim melalui halaman <a href="/kontak">kontak</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/terapi-okupasi-untuk-anak-cerebral-palsy">Terapi Okupasi untuk Anak Cerebral Palsy</a></h4>
                    <p>Pendamping latihan gerak untuk kegiatan sehari-hari.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/cerebral-palsy-adalah">Cerebral Palsy Adalah</a></h4>
                    <p>Pengertian, jenis, dan penanganan cerebral palsy.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/permainan-motorik-kasar">Permainan Motorik Kasar</a></h4>
                    <p>Ide bermain yang melatih gerak anak.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#Fisioterapi</a>
            <a href="#">#MotorikKasar</a>
            <a href="#">#CerebralPalsy</a>
            <a href="#">#ParentingABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.novak2020, 'Novak I, Morgan C, Fahey M, dkk. <strong>State of the Evidence Traffic Lights 2019: Systematic Review of Interventions for Preventing and Treating Children with Cerebral Palsy.</strong> Curr Neurol Neurosci Rep. 2020;20(2):3')}</li>
              <li>${ext(L.novak2009, 'Novak I, Cusick A, Lannin N. <strong>Occupational therapy home programs for cerebral palsy: double-blind, randomized, controlled trial.</strong> Pediatrics. 2009;124(4):e606-14')}</li>
              <li>${ext(L.novakBerry, 'Novak I, Berry J. <strong>Home program intervention effectiveness evidence.</strong> Phys Occup Ther Pediatr. 2014;34(4):384-9')}</li>
              <li>${ext(L.morgan, 'Morgan C, Darrah J, Gordon AM, dkk. <strong>Effectiveness of motor interventions in infants with cerebral palsy: a systematic review.</strong> Dev Med Child Neurol. 2016;58(9):900-9')}</li>
              <li>${ext(L.who, 'World Health Organization. <strong>Physical activity</strong> (lembar fakta)')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum, <strong>bukan nasihat medis atau program terapi</strong>. Latihan untuk anak perlu ditetapkan oleh fisioterapis atau dokter yang memeriksa anak secara langsung. Sumber dicek pada 28 September 2026.
            </p>
        </div>

<div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=${SHARE_TXT}%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=${SHARE_TXT}&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
            </div>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>.</aside>
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
  .replace(/\s+/g, ' ')
  .trim();
console.log('Approx word count (article body):', text.split(' ').filter(Boolean).length);

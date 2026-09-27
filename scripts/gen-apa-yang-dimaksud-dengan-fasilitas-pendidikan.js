#!/usr/bin/env node
'use strict';

// One-time generator for artikel/apa-yang-dimaksud-dengan-fasilitas-pendidikan.html
// (catchup 2026-09-27, kartu N4c0pO7Y). Canonical shell via scripts/lib/article-shell.js.
// Every legal claim below was checked on 2026-09-27 against the official PDFs from JDIH BPK:
// - UU 20/2003 Pasal 45 ayat (1)-(2): kewajiban satuan pendidikan menyediakan sarana dan prasarana.
// - Permendikbudristek 22/2023 (Standar Sarana dan Prasarana PAUD, Dikdas, Dikmen):
//   Menimbang (melaksanakan Pasal 26 PP 57/2021), Pasal 1 angka 1 (definisi standar), Pasal 4 (sarana, prasarana,
//   sarana/prasarana spesifik), Pasal 5 (sarana = bahan, alat, perlengkapan), Pasal 6 ayat (1) (ketentuan sarana),
//   Pasal 7 (prasarana = fasilitas dasar: lahan, bangunan, ruang), Pasal 8 ayat (2) huruf b, f, Pasal 9 ayat (2) huruf h,
//   Pasal 11 (9 jenis ruang), Pasal 12 ayat (2) (2 m2 vs 3 m2 per peserta didik), Pasal 13 ayat (2) huruf a,
//   Pasal 14 ayat (2) huruf a, Pasal 20 ayat (2) huruf d, Pasal 21, Pasal 24, Pasal 25 huruf b dan h, Pasal 26,
//   Pasal 28 (mencabut Permendiknas 24/2007 dan 33/2008), ditetapkan 7 Maret 2023.
// Photo: Wikimedia Commons, viewed before use.
//   Hero: Perpustakaan SMA Muhammadiyah 1 Palangka Raya, Xxjajarii, CC0.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'apa-yang-dimaksud-dengan-fasilitas-pendidikan';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Apa yang Dimaksud dengan Fasilitas Pendidikan? Ini Artinya';
const META_DESC = 'Apa yang dimaksud dengan fasilitas pendidikan? Pahami arti sarana dan prasarana, 9 ruang wajib menurut Permendikbudristek 22/2023, dan cara menilainya.';
const OG_TITLE = 'Apa yang Dimaksud dengan Fasilitas Pendidikan? Pengertian, Jenis, dan Standarnya';
const OG_DESC = 'Fasilitas pendidikan adalah sarana dan prasarana yang menunjang belajar. Simak pengertian resmi, jenis ruang minimal tiap jenjang, dan fasilitas khusus untuk ABK.';
const H1 = 'Apa yang Dimaksud dengan Fasilitas Pendidikan? Pengertian, Jenis, dan Standarnya';
const IMAGE_HERO = 'assets/images/artikel/perpustakaan-sma-muhammadiyah-1-palangka-raya-wikimedia.webp';
const IMAGE_HERO_ALT = 'Ruang perpustakaan sekolah dengan rak buku, lemari piala, meja bertaplak batik, dan layar televisi besar, tempat beberapa guru dan tamu duduk berdiskusi';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-27T22:00:00+07:00';
const DATE_MODIFIED = '2026-09-27T22:00:00+07:00';
const DATE_DISPLAY = '27 September 2026';

const CREDIT = {
  name: 'Xxjajarii',
  author: 'https://commons.wikimedia.org/wiki/User:Xxjajarii',
  source: 'https://commons.wikimedia.org/wiki/File:Perpustakaan_Matan_Andau_SMA_Muhammadiyah_1_Palangka_Raya.jpg',
  license: 'CC0 1.0',
  licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  uu20: 'https://peraturan.bpk.go.id/Details/43920/uu-no-20-tahun-2003',
  p22: 'https://peraturan.bpk.go.id/Details/263717/permendikbudriset-no-22-tahun-2023',
  p48: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa yang dimaksud dengan fasilitas pendidikan?',
    a: 'Fasilitas pendidikan adalah segala sarana dan prasarana yang dipakai untuk menjalankan kegiatan belajar di satuan pendidikan. Dalam Permendikbudristek Nomor 22 Tahun 2023, sarana adalah alat dan perlengkapan untuk mencapai tujuan pembelajaran, sedangkan prasarana adalah fasilitas dasar berupa lahan, bangunan, dan ruang.'
  },
  {
    q: 'Apa perbedaan sarana dan prasarana pendidikan?',
    a: 'Sarana dipakai langsung dalam belajar, yaitu bahan pembelajaran, alat pembelajaran, dan perlengkapan seperti buku, alat peraga, meja, dan kursi. Prasarana adalah fasilitas dasar tempat pendidikan berlangsung, yaitu lahan, bangunan, dan ruang seperti ruang kelas, perpustakaan, dan toilet.'
  },
  {
    q: 'Ruang apa saja yang wajib ada di sekolah dasar?',
    a: 'Menurut Pasal 25 Permendikbudristek 22/2023, SD atau MI paling sedikit memiliki ruang kelas, ruang perpustakaan, ruang administrasi, ruang kesehatan, tempat beribadah, tempat bermain atau berolahraga, kantin, dan toilet.'
  },
  {
    q: 'Apakah SLB punya fasilitas yang berbeda dengan sekolah umum?',
    a: 'Ya. SDLB, SMPLB, dan SMALB wajib memiliki ruang pengembangan kekhususan dan ruang pengembangan keterampilan selain ruang umum. Rasio luas ruang kelasnya juga lebih besar, minimal 3 meter persegi per peserta didik, dibanding 2 meter persegi di SD, SMP, dan SMA.'
  },
  {
    q: 'Peraturan apa yang mengatur fasilitas pendidikan saat ini?',
    a: 'Dasarnya Pasal 45 UU Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional. Rinciannya kini diatur Permendikbudristek Nomor 22 Tahun 2023 tentang Standar Sarana dan Prasarana, yang mencabut Permendiknas 24/2007 dan Permendiknas 33/2008.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Apa yang Dimaksud dengan Fasilitas Pendidikan', item: CANONICAL }
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
    caption: 'Ruang perpustakaan SMA Muhammadiyah 1 Palangka Raya',
    creditText: `Foto: ${CREDIT.name} / Wikimedia Commons, ${CREDIT.license}`,
    author: { '@type': 'Person', name: CREDIT.name, url: CREDIT.author },
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
  keywords: 'apa yang dimaksud dengan fasilitas pendidikan, fasilitas pendidikan, sarana dan prasarana pendidikan, standar sarana dan prasarana, Permendikbudristek 22 Tahun 2023, fasilitas sekolah inklusi',
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
    <meta name="keywords" content="apa yang dimaksud dengan fasilitas pendidikan, fasilitas pendidikan, sarana dan prasarana pendidikan, standar sarana prasarana, YUKA">
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
                <span class="current">Fasilitas Pendidikan</span>
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
            <figcaption>Ruang perpustakaan SMA Muhammadiyah 1 Palangka Raya, Kalimantan Tengah. Perpustakaan adalah salah satu dari sembilan jenis ruang yang disebut dalam standar sarana dan prasarana sekolah. Foto ini bukan dokumentasi kegiatan YUKA.
                <span class="kredit">Foto: <a href="${CREDIT.author}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">Wikimedia Commons</a>, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Fasilitas pendidikan</strong> adalah seluruh sarana dan prasarana yang dipakai untuk menjalankan kegiatan belajar di sekolah atau satuan pendidikan lain. <strong>Sarana</strong> adalah alat dan perlengkapan belajar, yaitu bahan pembelajaran, alat pembelajaran, dan perlengkapan. <strong>Prasarana</strong> adalah fasilitas dasar berupa lahan, bangunan, dan ruang. Standar minimalnya di Indonesia kini diatur <strong>Permendikbudristek Nomor 22 Tahun 2023</strong>, termasuk fasilitas khusus bagi peserta didik penyandang disabilitas.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum untuk orang tua, guru, dan pendamping. Kutipan peraturan diambil dari naskah resmi di JDIH BPK dan dicek pada 27 September 2026. Rincian teknis per jenis ruang diatur lebih lanjut dalam petunjuk teknis kementerian.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Pengertian fasilitas pendidikan</a></li>
                    <li><a href="#sarana-prasarana">Beda sarana dan prasarana</a></li>
                    <li><a href="#dasar-hukum">Dasar hukum fasilitas pendidikan</a></li>
                    <li><a href="#jenis-ruang">Sembilan jenis ruang dan standarnya</a></li>
                    <li><a href="#per-jenjang">Ruang minimal per jenjang</a></li>
                    <li><a href="#abk">Fasilitas untuk peserta didik penyandang disabilitas</a></li>
                    <li><a href="#fungsi">Mengapa fasilitas pendidikan penting</a></li>
                    <li><a href="#menilai">Cara orang tua menilai fasilitas sekolah</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Pengertian Fasilitas Pendidikan</h2>
            <p>Dalam percakapan sehari-hari, fasilitas pendidikan berarti apa saja yang disediakan sekolah agar anak bisa belajar: gedung, ruang kelas, buku, meja, alat peraga, lapangan, sampai toilet. Peraturan perundang-undangan jarang memakai istilah "fasilitas pendidikan" secara langsung. Istilah resminya adalah <strong>sarana dan prasarana pendidikan</strong>.</p>
            <p>${ext(L.p22, 'Permendikbudristek Nomor 22 Tahun 2023')} mendefinisikan Standar Sarana dan Prasarana sebagai kriteria minimal sarana dan prasarana yang harus tersedia pada satuan pendidikan dalam penyelenggaraan pendidikan (Pasal 1 angka 1). Jadi, ketika orang tua bertanya apa yang dimaksud dengan fasilitas pendidikan, jawaban paling tepat adalah: <em>sarana dan prasarana yang menunjang tercapainya tujuan pembelajaran</em>, dengan batas minimal yang ditetapkan negara.</p>
            <p>Aturan ini berlaku untuk pendidikan anak usia dini, jenjang pendidikan dasar, dan jenjang pendidikan menengah, termasuk TKLB, SDLB, SMPLB, dan SMALB (Pasal 3). Aturan yang sama menjadi pedoman bagi pemerintah, pemerintah daerah, sekolah, dan masyarakat dalam memenuhi kebutuhan fasilitas sekolah (Pasal 2).</p>

            <h2 id="sarana-prasarana">Beda Sarana dan Prasarana</h2>
            <p>Dua istilah ini sering disebut berpasangan, padahal artinya berbeda. Pasal 5 dan Pasal 7 Permendikbudristek 22/2023 memisahkannya dengan jelas:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>Sarana</th><th>Prasarana</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Pengertian resmi</strong></td><td>Segala sesuatu yang dapat dipakai sebagai alat dan perlengkapan dalam mencapai tujuan pembelajaran</td><td>Fasilitas dasar yang dibutuhkan untuk menjalankan fungsi satuan pendidikan</td></tr>
                    <tr><td><strong>Komponen</strong></td><td>Bahan pembelajaran, alat pembelajaran, dan perlengkapan</td><td>Lahan, bangunan, dan ruang</td></tr>
                    <tr><td><strong>Contoh</strong></td><td>Buku pelajaran, alat peraga, media pembelajaran, meja, kursi, papan tulis</td><td>Tanah sekolah, gedung, ruang kelas, perpustakaan, laboratorium, toilet</td></tr>
                    <tr><td><strong>Sifat</strong></td><td>Dipakai langsung dalam proses belajar</td><td>Tempat proses belajar berlangsung</td></tr>
                </tbody>
            </table>
            </div>
            <p>Pasal 5 juga menjelaskan tiga jenis sarana. <strong>Bahan pembelajaran</strong> adalah segala bentuk materi yang digunakan dalam pembelajaran. <strong>Alat pembelajaran</strong> adalah benda yang digunakan dalam pembelajaran, termasuk media untuk menyampaikan pesan dan informasi. <strong>Perlengkapan</strong> adalah benda yang berfungsi sebagai penunjang untuk mencapai tujuan pembelajaran.</p>
            <p>Sarana yang baik tidak cukup sekadar ada. Pasal 6 ayat (1) mensyaratkan sarana sesuai kebutuhan jalur, jenjang, dan jenis pendidikan; mengakomodasi karakteristik peserta didik; memperhatikan kebutuhan akomodasi yang layak bagi peserta didik penyandang disabilitas; memanfaatkan sumber daya di lingkungan sekitar; aman, sehat, dan selamat; serta ramah lingkungan.</p>

            <h2 id="dasar-hukum">Dasar Hukum Fasilitas Pendidikan</h2>
            <ul>
                <li><strong>Pasal 45 ayat (1) ${ext(L.uu20, 'UU Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional')}</strong>: setiap satuan pendidikan formal dan nonformal menyediakan sarana dan prasarana yang memenuhi keperluan pendidikan sesuai dengan pertumbuhan dan perkembangan potensi fisik, kecerdasan intelektual, sosial, emosional, dan kejiwaan peserta didik.</li>
                <li><strong>PP Nomor 57 Tahun 2021 tentang Standar Nasional Pendidikan</strong> (diubah dengan PP Nomor 4 Tahun 2022): Pasal 26-nya menjadi dasar penetapan standar sarana dan prasarana, sebagaimana disebut dalam konsiderans Permendikbudristek 22/2023.</li>
                <li><strong>${ext(L.p22, 'Permendikbudristek Nomor 22 Tahun 2023')}</strong> tentang Standar Sarana dan Prasarana pada PAUD, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah, ditetapkan 7 Maret 2023. Pasal 28 mencabut aturan lama, antara lain Permendiknas Nomor 24 Tahun 2007 (SD/MI, SMP/MTs, SMA/MA) dan Permendiknas Nomor 33 Tahun 2008 (SDLB, SMPLB, SMALB).</li>
            </ul>
            <p>Catatan penting: banyak artikel di internet masih mengutip Permendiknas 24/2007, lengkap dengan daftar perabot per ruang. Aturan itu sudah tidak berlaku. Rincian sarana per ruang kini dituangkan dalam petunjuk teknis yang ditetapkan pimpinan unit utama kementerian (Pasal 27).</p>

            <h2 id="jenis-ruang">Sembilan Jenis Ruang dan Standarnya</h2>
            <p>Prasarana terdiri atas lahan, bangunan, dan ruang. Untuk ruang, Pasal 11 menyebut sembilan jenis. Berikut fungsi dan ketentuan utamanya menurut Pasal 12 sampai Pasal 20:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Jenis ruang</th><th>Fungsi</th><th>Ketentuan utama</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Ruang kelas</strong></td><td>Pembelajaran teori dan praktik yang tidak butuh alat khusus</td><td>Minimal 2 m² per peserta didik di SD, SMP, SMA, SMK; minimal 3 m² per peserta didik di TK/KB dan sekolah luar biasa</td></tr>
                    <tr><td><strong>Ruang perpustakaan</strong></td><td>Memperoleh informasi dari bahan pustaka</td><td>Luas minimal sama dengan satu ruang kelas</td></tr>
                    <tr><td><strong>Ruang laboratorium</strong></td><td>Praktik yang memerlukan peralatan khusus</td><td>Luas minimal 1,5 kali luas ruang kelas</td></tr>
                    <tr><td><strong>Ruang administrasi</strong></td><td>Ruang kepala sekolah, guru, dan tata usaha</td><td>Boleh terpisah atau dalam satu ruangan</td></tr>
                    <tr><td><strong>Ruang kesehatan</strong></td><td>Penanganan dini warga sekolah yang sakit</td><td>Ruang tersendiri atau bagian dari ruang lain</td></tr>
                    <tr><td><strong>Tempat beribadah</strong></td><td>Beribadah sesuai agama dan kepercayaan</td><td>Ruang terpisah, bagian ruang lain, berbagi pakai, atau berbagi dengan lingkungan sekitar</td></tr>
                    <tr><td><strong>Tempat bermain atau berolahraga</strong></td><td>Kebugaran dan kesehatan</td><td>Bentuk dan luas sesuai kebutuhan sekolah</td></tr>
                    <tr><td><strong>Kantin</strong></td><td>Penyediaan makanan dan minuman sehat dan aman</td><td>Aman dari potensi pencemaran</td></tr>
                    <tr><td><strong>Toilet</strong></td><td>Sanitasi dan cuci tangan</td><td>Sesuai usia, jenis kelamin, jumlah warga sekolah, dan kebutuhan penyandang disabilitas</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sebagai gambaran, kelas berisi 28 siswa SD membutuhkan ruang minimal 56 m² (28 × 2 m²). Kelas SDLB berisi 8 siswa membutuhkan minimal 24 m² (8 × 3 m²). Rasio yang lebih besar di sekolah luar biasa memberi ruang gerak untuk kursi roda, alat bantu, dan pembelajaran individual.</p>
            <p>Untuk lahan dan bangunan, aturan ini juga mensyaratkan ruang terbuka hijau, lokasi yang aman dari bahaya dengan akses evakuasi darurat, akses jalan yang memenuhi aksesibilitas bagi penyandang disabilitas (Pasal 8), serta bangunan yang sehat, aman, dan memiliki fasilitas untuk penyandang disabilitas (Pasal 9).</p>

            <h2 id="per-jenjang">Ruang Minimal per Jenjang</h2>
            <p>Tidak semua sekolah wajib memiliki sembilan ruang tersebut. Pasal 25 menetapkan ruang minimal per jenjang:</p>
            <ul>
                <li><strong>TK, RA, KB, TPA:</strong> ruang kelas, ruang kegiatan literasi anak, ruang laktasi, ruang administrasi, ruang kesehatan, tempat beribadah, tempat bermain atau berolahraga, dan toilet.</li>
                <li><strong>SD dan MI:</strong> ruang kelas, ruang perpustakaan, ruang administrasi, ruang kesehatan, tempat beribadah, tempat bermain atau berolahraga, kantin, dan toilet.</li>
                <li><strong>SMP, MTs, SMA, dan MA:</strong> seperti SD, ditambah ruang laboratorium.</li>
                <li><strong>SMK dan MAK:</strong> seperti SMA, ditambah ruang praktik sesuai konsentrasi keahlian.</li>
                <li><strong>Paket A, B, dan C:</strong> ruang kelas, ruang perpustakaan, ruang administrasi, tempat beribadah, dan toilet.</li>
                <li><strong>TKLB:</strong> seperti TK, ditambah ruang pengembangan kekhususan.</li>
                <li><strong>SDLB, SMPLB, dan SMALB:</strong> ruang kelas, ruang perpustakaan, ruang pengembangan kekhususan, ruang pengembangan keterampilan, ruang administrasi, ruang kesehatan, tempat beribadah, tempat bermain atau berolahraga, kantin, dan toilet.</li>
            </ul>
            <p>Sekolah tidak harus memiliki semuanya sendiri. Pasal 26 membolehkan penyediaan secara mandiri atau <strong>berbagi sumber daya</strong>, misalnya memakai lapangan olahraga milik desa atau laboratorium sekolah lain, asalkan tertuang dalam rencana kerja sekolah dan berdasarkan perjanjian kerja sama yang menjamin keberlanjutan pembelajaran.</p>

            <h2 id="abk">Fasilitas untuk Peserta Didik Penyandang Disabilitas</h2>
            <p>Bagian ini paling relevan bagi keluarga anak berkebutuhan khusus. Permendikbudristek 22/2023 mengenal <strong>sarana spesifik</strong> dan <strong>prasarana spesifik</strong> untuk pendidikan khusus (Pasal 4):</p>
            <ul>
                <li><strong>Sarana spesifik</strong> (Pasal 21): peralatan pengembangan kekhususan dan peralatan pengembangan keterampilan, keduanya disesuaikan dengan karakteristik dan kebutuhan peserta didik penyandang disabilitas. Contohnya perangkat braille untuk anak tunanetra, yang dibahas di artikel <a href="/artikel/media-pembelajaran-braille-untuk-tunanetra">media pembelajaran braille untuk tunanetra</a>.</li>
                <li><strong>Ruang pengembangan kekhususan</strong> (Pasal 24): tempat mengembangkan kemampuan spesifik sesuai ragam disabilitas, dilengkapi peralatan yang sesuai ragam disabilitas tersebut.</li>
                <li><strong>Ruang pengembangan keterampilan</strong> (Pasal 24): tempat pelatihan keterampilan untuk mendukung kemandirian peserta didik penyandang disabilitas.</li>
            </ul>
            <p>Sekolah reguler yang menerima anak berkebutuhan khusus juga terikat. Aksesibilitas bagi penyandang disabilitas disebut dalam ketentuan lahan, bangunan, ruang, dan toilet, sedangkan sarana wajib memperhatikan akomodasi yang layak. Bentuk akomodasi itu diatur lebih rinci dalam ${ext(L.p48, 'Permendikbudristek Nomor 48 Tahun 2023')} tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas. Perbandingan layanan di dua jalur ini ada di artikel <a href="/artikel/apa-perbedaan-sekolah-inklusi-dan-slb">apa perbedaan sekolah inklusi dan SLB</a>, dan jenis-jenis SLB dijelaskan di <a href="/artikel/slb-adalah">SLB adalah</a>.</p>

            <h2 id="fungsi">Mengapa Fasilitas Pendidikan Penting</h2>
            <p>UU Sisdiknas sendiri memberi alasannya: fasilitas harus sesuai dengan pertumbuhan dan perkembangan fisik, kecerdasan, sosial, emosional, dan kejiwaan peserta didik. Dalam praktik, fasilitas yang memadai berperan dalam beberapa hal:</p>
            <ol>
                <li><strong>Keselamatan dan kesehatan.</strong> Bangunan yang kokoh, jalur evakuasi, sanitasi, dan ruang kesehatan melindungi anak selama berada di sekolah.</li>
                <li><strong>Kualitas belajar.</strong> Perpustakaan, laboratorium, dan alat peraga memungkinkan anak belajar dengan melihat, mencoba, dan membaca, bukan hanya mendengar.</li>
                <li><strong>Kesetaraan.</strong> Toilet yang aksesibel, jalan landai, dan alat bantu belajar menentukan apakah anak penyandang disabilitas bisa ikut belajar bersama teman-temannya di <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a>.</li>
                <li><strong>Kemandirian.</strong> Ruang pengembangan keterampilan membantu anak berkebutuhan khusus menyiapkan diri untuk hidup mandiri setelah lulus.</li>
            </ol>

            <h2 id="menilai">Cara Orang Tua Menilai Fasilitas Sekolah</h2>
            <p>Saat survei sekolah, orang tua bisa memakai standar di atas sebagai daftar periksa sederhana:</p>
            <ol>
                <li><strong>Cek ruang minimal sesuai jenjang.</strong> Apakah ada perpustakaan yang benar-benar dipakai, ruang kesehatan, dan toilet yang bersih serta berfungsi?</li>
                <li><strong>Perhatikan kepadatan kelas.</strong> Bandingkan jumlah siswa dengan luas kelas. Kelas yang terlalu padat menyulitkan guru memberi perhatian individual.</li>
                <li><strong>Periksa aksesibilitas.</strong> Adakah jalan landai, pegangan tangan, dan toilet yang bisa dipakai anak dengan hambatan gerak?</li>
                <li><strong>Tanyakan sarana pendukung ABK.</strong> Adakah ruang untuk layanan khusus, alat peraga yang sesuai, dan guru pendamping? Pertanyaan lanjutan soal pilihan sekolah ada di artikel <a href="/artikel/anak-abk-harus-sekolah-dimana">anak ABK harus sekolah di mana</a>.</li>
                <li><strong>Nilai bersama anak.</strong> Fasilitas lengkap tidak berarti apa-apa bila anak merasa tidak nyaman. Perhatikan reaksi anak saat berkunjung.</li>
            </ol>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mengelola layanan pendidikan inklusi bagi anak berkebutuhan khusus di Sleman. Ayah dan Bunda yang ingin melihat langsung layanan dan ruang belajar kami bisa membaca halaman <a href="/sekolah-inklusi-sleman">sekolah inklusi Sleman</a> atau menghubungi tim YUKA melalui halaman <a href="/kontak">kontak</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/pendidikan-inklusi">Pendidikan Inklusi</a></h4>
                    <p>Konsep, prinsip, dan penerapannya di Indonesia.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/apa-perbedaan-sekolah-inklusi-dan-slb">Perbedaan Sekolah Inklusi dan SLB</a></h4>
                    <p>Dasar hukum, kurikulum, dan cara memilih.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/sekolah-slb-untuk-anak-apa">Sekolah SLB untuk Anak Apa</a></h4>
                    <p>Siapa saja yang dilayani Sekolah Luar Biasa.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#FasilitasPendidikan</a>
            <a href="#">#SaranaPrasarana</a>
            <a href="#">#Sekolah</a>
            <a href="#">#PendidikanInklusi</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.uu20, '<strong>Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional</strong>, JDIH BPK RI (Pasal 45)')}</li>
              <li>${ext(L.p22, '<strong>Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 22 Tahun 2023 tentang Standar Sarana dan Prasarana pada Pendidikan Anak Usia Dini, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah</strong>, JDIH BPK RI (Pasal 1 sampai 28)')}</li>
              <li>${ext(L.p48, '<strong>Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</strong>, JDIH BPK RI')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat hukum</strong>. Sumber dicek pada 27 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Apa%20yang%20Dimaksud%20dengan%20Fasilitas%20Pendidikan%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Apa%20yang%20Dimaksud%20dengan%20Fasilitas%20Pendidikan&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

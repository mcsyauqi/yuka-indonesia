#!/usr/bin/env node
'use strict';

// One-time generator for artikel/apa-yang-dimaksud-dengan-sekolah-luar-biasa.html
// (catchup 2026-09-28, kartu nFpWQchl). Skeleton copied from scripts/gen-terapi-perilaku-kognitif-anak.js.
// Anti-cannibalization: artikel/slb-adalah.html already owns the practical "SLB adalah" guide
// (jenis, kurikulum, daftar SLB Yogyakarta). This article takes the definitional + legal angle:
// what the law means by "pendidikan khusus" and "sekolah luar biasa", and links to slb-adalah as the hub.
// No hero photo: card suggested a Candi Plaosan tourism photo, which does not depict an SLB (one image = one honest claim),
// and no licensed photo of a real SLB without identifiable children was used.
// Legal text checked 2026-09-28 against PDFs from peraturan.bpk.go.id:
// - UU 20/2003 Pasal 5 ayat (2), Pasal 32 ayat (1)-(2)
// - PP 17/2010 Pasal 129 ayat (1)-(4), Pasal 130 ayat (1)-(2), Pasal 131 ayat (1), Pasal 133 ayat (1)-(5)
// - UU 8/2016 Pasal 10 + penjelasan huruf a, Pasal 40 ayat (2)-(4)
// - PP 13/2020 Pasal 1 angka 1, Pasal 3 ayat (1)
// SLB-A..G lettering is a customary grouping, not in these regulations; stated as such.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'apa-yang-dimaksud-dengan-sekolah-luar-biasa';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Apa yang Dimaksud dengan Sekolah Luar Biasa? Dasar Hukumnya';
const META_DESC = 'Apa yang dimaksud dengan sekolah luar biasa menurut UU Sisdiknas, PP 17/2010, dan UU Disabilitas: arti, jenjang, dan hak anak. Baca penjelasannya.';
const OG_TITLE = 'Apa yang Dimaksud dengan Sekolah Luar Biasa (SLB)? Pengertian Menurut Undang-Undang';
const OG_DESC = 'Pengertian sekolah luar biasa menurut peraturan di Indonesia, jenjang TKLB sampai SMALB, siapa yang dilayani, dan bedanya dengan pendidikan inklusif.';
const H1 = 'Apa yang Dimaksud dengan Sekolah Luar Biasa? Pengertian Menurut Undang-Undang';
const IMAGE = 'Logo/Logo.webp';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-30T09:00:00+07:00';
const DATE_MODIFIED = '2026-09-30T09:00:00+07:00';
const DATE_DISPLAY = '30 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  uu20: 'https://peraturan.bpk.go.id/Details/43920/uu-no-20-tahun-2003',
  pp17: 'https://peraturan.bpk.go.id/Details/5025/pp-no-17-tahun-2010',
  uu8: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016',
  pp13: 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa yang dimaksud dengan sekolah luar biasa?',
    a: 'Sekolah luar biasa (SLB) adalah satuan pendidikan khusus, yaitu sekolah yang hanya melayani peserta didik penyandang disabilitas dengan kurikulum, proses pembelajaran, dan tenaga pendidik khusus. PP 17 Tahun 2010 menyebut bentuknya taman kanak-kanak luar biasa, sekolah dasar luar biasa, sekolah menengah pertama luar biasa, serta sekolah menengah atas atau kejuruan luar biasa.'
  },
  {
    q: 'Apa dasar hukum sekolah luar biasa di Indonesia?',
    a: 'Dasar utamanya Pasal 5 ayat (2) dan Pasal 32 ayat (1) UU Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional, Pasal 129 sampai 133 PP Nomor 17 Tahun 2010 tentang Pengelolaan dan Penyelenggaraan Pendidikan, Pasal 10 dan 40 UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas, serta PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas.'
  },
  {
    q: 'Siapa saja yang bisa bersekolah di SLB?',
    a: 'PP 17 Tahun 2010 Pasal 129 ayat (3) menyebut peserta didik berkelainan meliputi anak tunanetra, tunarungu, tunawicara, tunagrahita, tunadaksa, tunalaras, berkesulitan belajar, lamban belajar, autis, memiliki gangguan motorik, korban penyalahgunaan narkotika dan zat adiktif, serta kelainan lain, termasuk gabungannya (tunaganda). Sekolah mana yang paling cocok ditentukan setelah asesmen.'
  },
  {
    q: 'Apakah anak berkebutuhan khusus wajib masuk SLB?',
    a: 'Tidak. UU 8 Tahun 2016 memberi hak pendidikan secara inklusif maupun khusus, dan PP 17 Tahun 2010 Pasal 130 menyatakan pendidikan khusus dapat diselenggarakan di satuan pendidikan khusus maupun di sekolah umum, kejuruan, atau keagamaan. Orang tua dapat memilih SLB atau sekolah inklusi sesuai kebutuhan anak.'
  },
  {
    q: 'Apa beda SLB dan sekolah inklusi?',
    a: 'Menurut penjelasan Pasal 10 UU 8 Tahun 2016, pendidikan secara khusus hanya melayani peserta didik penyandang disabilitas di tempat belajar khusus, sedangkan pendidikan secara inklusif membuat peserta didik penyandang disabilitas belajar bersama teman bukan penyandang disabilitas di sekolah reguler.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Apa yang Dimaksud dengan Sekolah Luar Biasa', item: CANONICAL }
  ]
};

const blogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: OG_TITLE,
  description: OG_DESC,
  image: { '@type': 'ImageObject', url: IMAGE_URL },
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
  keywords: 'apa yang dimaksud dengan sekolah luar biasa, pengertian sekolah luar biasa, SLB, pendidikan khusus, dasar hukum SLB',
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
    <meta name="keywords" content="apa yang dimaksud dengan sekolah luar biasa, pengertian sekolah luar biasa, SLB, pendidikan khusus, YUKA">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${CANONICAL}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${CANONICAL}">
    <meta property="og:title" content="${OG_TITLE}">
    <meta property="og:description" content="${OG_DESC}">
    <meta property="og:image" content="${IMAGE_URL}">
    <meta property="og:image:alt" content="Logo YUKA, Yayasan Ukhuwah Kaffah Amanatullah">
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
    ${STYLE}
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
                <span class="current">Apa yang Dimaksud dengan Sekolah Luar Biasa</span>
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

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> sekolah luar biasa (SLB) adalah <strong>satuan pendidikan khusus</strong>, yaitu sekolah yang hanya melayani peserta didik penyandang disabilitas dengan kurikulum, proses pembelajaran, dan tenaga pendidik khusus. Dasarnya ada di UU Sistem Pendidikan Nasional, yang menjamin hak warga negara berkelainan fisik, emosional, mental, intelektual, dan/atau sosial untuk memperoleh pendidikan khusus. Bentuknya berjenjang, dari TK luar biasa sampai SMA dan SMK luar biasa. SLB adalah salah satu pilihan, bukan kewajiban: anak juga berhak bersekolah secara inklusif di sekolah reguler.</p></div>

            <div class="info-box">
                <h4>Cakupan artikel ini</h4>
                <p style="margin-bottom:0;">Artikel ini fokus pada <strong>arti istilah dan dasar hukumnya</strong>, dikutip langsung dari teks peraturan di JDIH BPK. Untuk panduan praktis (jenis SLB, kurikulum, dan daftar SLB di Yogyakarta), baca artikel <a href="/artikel/slb-adalah">SLB adalah: jenis, kurikulum, dan daftar SLB Yogyakarta</a>.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Pengertian sekolah luar biasa</a></li>
                    <li><a href="#dasar-hukum">Dasar hukum: dari UU Sisdiknas sampai PP 13/2020</a></li>
                    <li><a href="#jenjang">Jenjang SLB menurut PP 17/2010</a></li>
                    <li><a href="#peserta-didik">Siapa yang dilayani SLB?</a></li>
                    <li><a href="#istilah">Kenapa disebut "luar biasa"? Istilah SLB A sampai G</a></li>
                    <li><a href="#khusus-inklusif">Pendidikan khusus dan pendidikan inklusif</a></li>
                    <li><a href="#hak">Hak anak dan kewajiban pemerintah</a></li>
                    <li><a href="#orang-tua">Apa artinya bagi orang tua?</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Pengertian Sekolah Luar Biasa</h2>
            <p>Dalam bahasa sehari-hari, sekolah luar biasa atau SLB adalah sekolah untuk <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a>. Dalam bahasa peraturan, SLB adalah salah satu bentuk <strong>satuan pendidikan khusus</strong>, yaitu lembaga yang menyelenggarakan <em>pendidikan khusus</em> bagi peserta didik berkelainan.</p>
            <p>Undang-Undang Sistem Pendidikan Nasional mendefinisikan pendidikan khusus sebagai berikut:</p>
            <blockquote>"Pendidikan khusus merupakan pendidikan bagi peserta didik yang memiliki tingkat kesulitan dalam mengikuti proses pembelajaran karena kelainan fisik, emosional, mental, sosial, dan/atau memiliki potensi kecerdasan dan bakat istimewa." (UU 20/2003, Pasal 32 ayat (1), ${ext(L.uu20, 'JDIH BPK')})</blockquote>
            <p>Perhatikan bahwa definisi itu mencakup dua kelompok: anak yang mengalami hambatan dan anak yang punya kecerdasan atau bakat istimewa. SLB melayani kelompok pertama. Anak dengan kecerdasan atau bakat istimewa dilayani di sekolah umum seperti TK, SD, SMP, SMA, dan SMK (PP 17/2010 Pasal 135 ayat (1), ${ext(L.pp17, 'JDIH BPK')}).</p>
            <p>Undang-Undang Penyandang Disabilitas memberi rumusan yang paling mudah dipahami. Dalam penjelasan Pasal 10 huruf a, <strong>pendidikan secara khusus</strong> adalah "pendidikan yang hanya memberikan layanan kepada peserta didik Penyandang Disabilitas dengan menggunakan kurikulum khusus, proses pembelajaran khusus, bimbingan, dan/atau pengasuhan dengan tenaga pendidik khusus dan tempat pelaksanaannya di tempat belajar khusus" (${ext(L.uu8, 'UU 8/2016')}). Itulah gambaran sekolah luar biasa.</p>

            <h2 id="dasar-hukum">Dasar Hukum: dari UU Sisdiknas sampai PP 13/2020</h2>
            <p>Keberadaan SLB bertumpu pada beberapa peraturan yang saling melengkapi:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Peraturan</th><th>Pasal</th><th>Isi pokok</th></tr>
                </thead>
                <tbody>
                    <tr><td>${ext(L.uu20, 'UU 20/2003 tentang Sistem Pendidikan Nasional')}</td><td>Pasal 5 ayat (2)</td><td>Warga negara yang memiliki kelainan fisik, emosional, mental, intelektual, dan/atau sosial berhak memperoleh pendidikan khusus.</td></tr>
                    <tr><td>${ext(L.uu20, 'UU 20/2003')}</td><td>Pasal 32 ayat (1)</td><td>Definisi pendidikan khusus (dikutip di atas).</td></tr>
                    <tr><td>${ext(L.pp17, 'PP 17/2010 tentang Pengelolaan dan Penyelenggaraan Pendidikan')}</td><td>Pasal 129 sampai 133</td><td>Fungsi dan tujuan pendidikan khusus, daftar peserta didik berkelainan, dan bentuk satuan pendidikan khusus dari TKLB sampai SMALB/SMKLB.</td></tr>
                    <tr><td>${ext(L.uu8, 'UU 8/2016 tentang Penyandang Disabilitas')}</td><td>Pasal 10 dan 40</td><td>Hak pendidikan secara inklusif dan khusus, kewajiban pemerintah menyelenggarakan pendidikan bagi penyandang disabilitas.</td></tr>
                    <tr><td>${ext(L.pp13, 'PP 13/2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas')}</td><td>Pasal 1 dan 3</td><td>Pengertian akomodasi yang layak dan kewajiban pemerintah memfasilitasi lembaga pendidikan menyediakannya.</td></tr>
                </tbody>
            </table>
            </div>
            <p>Menurut PP 17/2010 Pasal 129 ayat (1) dan (2), pendidikan khusus bagi peserta didik berkelainan <strong>berfungsi</strong> memberikan pelayanan pendidikan bagi peserta didik yang kesulitan mengikuti proses pembelajaran karena kelainan fisik, emosional, mental, intelektual, dan/atau sosial, dan <strong>bertujuan</strong> mengembangkan potensi peserta didik secara optimal sesuai kemampuannya (${ext(L.pp17, 'PP 17/2010')}). Jadi ukuran keberhasilan SLB adalah kemajuan setiap anak menurut kemampuannya, bukan perbandingan dengan anak lain.</p>

            <h2 id="jenjang">Jenjang SLB Menurut PP 17/2010</h2>
            <p>Pasal 133 PP 17/2010 menyebut bentuk satuan pendidikan khusus formal untuk peserta didik berkelainan (${ext(L.pp17, 'PP 17/2010')}):</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Jenjang</th><th>Bentuk satuan pendidikan khusus</th><th>Singkatan yang lazim</th></tr>
                </thead>
                <tbody>
                    <tr><td>Pendidikan anak usia dini</td><td>Taman kanak-kanak luar biasa</td><td>TKLB</td></tr>
                    <tr><td>Pendidikan dasar</td><td>Sekolah dasar luar biasa</td><td>SDLB</td></tr>
                    <tr><td>Pendidikan dasar</td><td>Sekolah menengah pertama luar biasa</td><td>SMPLB</td></tr>
                    <tr><td>Pendidikan menengah</td><td>Sekolah menengah atas luar biasa atau sekolah menengah kejuruan luar biasa</td><td>SMALB / SMKLB</td></tr>
                </tbody>
            </table>
            </div>
            <p>Setiap bentuk boleh memakai "sebutan lain untuk satuan pendidikan yang sejenis dan sederajat". Penjelasan pasal itu mencontohkan taman kanak-kanak khusus atau taman kanak-kanak istimewa. Ayat (4) juga membolehkan satuan pendidikan khusus diselenggarakan <strong>terintegrasi antarjenjang dan/atau antarjenis kelainan</strong>. Karena itulah banyak SLB di lapangan menampung TKLB sampai SMALB dalam satu kompleks, dan melayani lebih dari satu jenis hambatan.</p>
            <p>Karena setara dengan jenjang reguler, lulusan SLB juga memperoleh ijazah. Soal kesetaraannya dibahas di artikel <a href="/artikel/ijazah-slb-setara-apa">ijazah SLB setara apa</a>.</p>

            <h2 id="peserta-didik">Siapa yang Dilayani SLB?</h2>
            <p>PP 17/2010 Pasal 129 ayat (3) merinci peserta didik berkelainan, yaitu peserta didik yang (${ext(L.pp17, 'PP 17/2010')}):</p>
            <ul>
                <li>tunanetra, tunarungu, dan tunawicara;</li>
                <li>tunagrahita (hambatan intelektual);</li>
                <li>tunadaksa (hambatan fisik dan gerak);</li>
                <li>tunalaras (hambatan emosi dan perilaku);</li>
                <li>berkesulitan belajar dan lamban belajar;</li>
                <li>autis;</li>
                <li>memiliki gangguan motorik;</li>
                <li>menjadi korban penyalahgunaan narkotika, obat terlarang, dan zat adiktif lain; dan</li>
                <li>memiliki kelainan lain.</li>
            </ul>
            <p>Ayat (4) menambahkan bahwa kelainan bisa berupa gabungan dua jenis atau lebih, yang disebut <strong>tunaganda</strong>. Daftar ini berlaku untuk pendidikan khusus secara umum, bukan hanya SLB. Anak dengan kesulitan belajar atau lamban belajar, misalnya, sering lebih cocok dilayani di sekolah inklusi. Penjelasan praktis soal kebutuhan apa yang cocok di SLB ada di artikel <a href="/artikel/sekolah-slb-untuk-anak-apa">sekolah SLB untuk anak apa</a>.</p>

            <h2 id="istilah">Kenapa Disebut "Luar Biasa"? Istilah SLB A sampai G</h2>
            <p>Kata "luar biasa" di sini berarti <strong>di luar layanan sekolah biasa</strong>, bukan penilaian terhadap anaknya. Istilah ini tetap dipakai dalam peraturan: PP 17/2010 menulis "taman kanak-kanak luar biasa", "sekolah dasar luar biasa", dan seterusnya.</p>
            <p>Di masyarakat juga dikenal penggolongan dengan huruf, misalnya SLB-A untuk tunanetra, SLB-B untuk tunarungu, SLB-C untuk tunagrahita, SLB-D untuk tunadaksa, SLB-E untuk tunalaras, dan SLB-G untuk tunaganda. Penggolongan huruf ini adalah kebiasaan penamaan yang masih dipakai banyak sekolah, <strong>tidak tercantum</strong> dalam PP 17/2010 maupun UU 8/2016 yang kami kutip. Rincian tiap golongan dibahas di artikel <a href="/artikel/slb-adalah">SLB adalah</a>.</p>
            <p>Peraturan yang lebih baru juga bergeser dari istilah "berkelainan" ke istilah <strong>penyandang disabilitas</strong>, seperti terlihat pada UU 8/2016 dan PP 13/2020. Dalam percakapan sehari-hari, istilah yang lebih menghargai anak, seperti "anak dengan hambatan penglihatan" atau "anak penyandang disabilitas", semakin umum dipakai.</p>

            <h2 id="khusus-inklusif">Pendidikan Khusus dan Pendidikan Inklusif</h2>
            <p>SLB bukan satu-satunya jalur. PP 17/2010 Pasal 130 ayat (2) menyatakan penyelenggaraan pendidikan khusus <strong>dapat dilakukan melalui satuan pendidikan khusus, satuan pendidikan umum, satuan pendidikan kejuruan, dan/atau satuan pendidikan keagamaan</strong> (${ext(L.pp17, 'PP 17/2010')}). UU 8/2016 Pasal 40 ayat (2) juga menyebut pendidikan untuk penyandang disabilitas dilaksanakan melalui pendidikan inklusif dan pendidikan khusus (${ext(L.uu8, 'UU 8/2016')}).</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>Pendidikan secara khusus (SLB)</th><th>Pendidikan secara inklusif</th></tr>
                </thead>
                <tbody>
                    <tr><td>Teman belajar</td><td>Hanya peserta didik penyandang disabilitas</td><td>Bersama peserta didik bukan penyandang disabilitas</td></tr>
                    <tr><td>Tempat</td><td>Tempat belajar khusus</td><td>Sekolah reguler atau perguruan tinggi</td></tr>
                    <tr><td>Kurikulum dan pengajar</td><td>Kurikulum khusus, tenaga pendidik khusus</td><td>Kurikulum sekolah yang disesuaikan, dengan akomodasi yang layak</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.9rem;">Sumber rumusan: penjelasan Pasal 10 huruf a UU 8/2016 (${ext(L.uu8, 'JDIH BPK')}).</p>
            <p>Pilihan mana yang tepat tergantung kebutuhan anak, kesiapan sekolah, dan jarak dari rumah. Perbandingan lengkapnya ada di artikel <a href="/artikel/apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a>, dan pertimbangan memilih sekolah ada di artikel <a href="/artikel/anak-abk-harus-sekolah-dimana">anak ABK harus sekolah di mana</a>.</p>

            <h2 id="hak">Hak Anak dan Kewajiban Pemerintah</h2>
            <p>Pasal 10 UU 8/2016 menyebut hak pendidikan penyandang disabilitas, antara lain hak <strong>mendapatkan pendidikan yang bermutu pada satuan pendidikan di semua jenis, jalur, dan jenjang pendidikan secara inklusif dan khusus</strong>, serta hak <strong>mendapatkan akomodasi yang layak</strong> sebagai peserta didik (${ext(L.uu8, 'UU 8/2016')}). Pasal 40 menambahkan beberapa kewajiban pemerintah:</p>
            <ul>
                <li>mengikutsertakan anak penyandang disabilitas dalam program wajib belajar 12 tahun (ayat 3);</li>
                <li>pemerintah daerah wajib mengutamakan anak penyandang disabilitas bersekolah di lokasi yang dekat tempat tinggalnya (ayat 4).</li>
            </ul>
            <p>Dari sisi penyelenggaraan, PP 17/2010 Pasal 131 ayat (1) mewajibkan pemerintah provinsi menyelenggarakan paling sedikit satu satuan pendidikan khusus untuk setiap jenis kelainan dan jenjang pendidikan sebagai model (${ext(L.pp17, 'PP 17/2010')}).</p>
            <p>PP 13/2020 mengatur <strong>akomodasi yang layak</strong>, yaitu "modifikasi dan penyesuaian yang tepat dan diperlukan untuk menjamin penikmatan atau pelaksanaan semua hak asasi manusia dan kebebasan fundamental untuk Penyandang Disabilitas berdasarkan kesetaraan" (Pasal 1 angka 1). Pasal 3 ayat (1) mewajibkan pemerintah pusat dan pemerintah daerah memfasilitasi lembaga penyelenggara pendidikan dalam menyediakannya (${ext(L.pp13, 'PP 13/2020')}). Akomodasi ini berlaku di SLB maupun di sekolah inklusi.</p>

            <h2 id="orang-tua">Apa Artinya bagi Orang Tua?</h2>
            <ol>
                <li><strong>Mulai dari asesmen.</strong> Sebelum memilih SLB atau sekolah inklusi, pahami dulu kebutuhan dan kekuatan anak melalui <a href="/artikel/asesmen-abk">asesmen ABK</a> oleh tenaga profesional.</li>
                <li><strong>Ketahui bahwa ada pilihan.</strong> Peraturan memberi hak pendidikan secara khusus maupun inklusif. SLB tepat bagi sebagian anak, sekolah inklusi tepat bagi anak lain.</li>
                <li><strong>Cek jenjang dan layanannya.</strong> Tanyakan jenjang yang tersedia (TKLB sampai SMALB/SMKLB), jenis hambatan yang dilayani, dan program keterampilannya.</li>
                <li><strong>Pertimbangkan jarak.</strong> Sekolah yang dekat rumah memudahkan rutinitas anak. Referensi lokasi ada di artikel <a href="/artikel/slb-terdekat">SLB terdekat</a>.</li>
                <li><strong>Tanyakan akomodasi yang layak.</strong> Misalnya penyesuaian materi, waktu ujian, alat bantu, atau pendamping, sesuai semangat PP 13/2020.</li>
            </ol>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA menjalankan pendidikan inklusi untuk anak berkebutuhan khusus di Sleman melalui Sekolah Inklusi Taruna Imani, dan terbiasa berdiskusi dengan orang tua yang sedang menimbang antara SLB dan sekolah inklusi. Lihat <a href="/sekolah-inklusi-sleman">sekolah inklusi di Sleman</a> atau hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/slb-adalah">SLB Adalah: Jenis, Kurikulum, dan Daftar SLB Yogyakarta</a></h4>
                    <p>Panduan praktis mengenal SLB.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/apa-perbedaan-sekolah-inklusi-dan-slb">Perbedaan Sekolah Inklusi dan SLB</a></h4>
                    <p>Membandingkan dua jalur pendidikan ABK.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/ijazah-slb-setara-apa">Ijazah SLB Setara Apa?</a></h4>
                    <p>Kesetaraan ijazah lulusan SLB.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#SekolahLuarBiasa</a>
            <a href="#">#SLB</a>
            <a href="#">#PendidikanKhusus</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.uu20, '<strong>Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional.</strong> JDIH BPK RI')}</li>
              <li>${ext(L.pp17, '<strong>Peraturan Pemerintah Nomor 17 Tahun 2010 tentang Pengelolaan dan Penyelenggaraan Pendidikan.</strong> JDIH BPK RI')}</li>
              <li>${ext(L.uu8, '<strong>Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas.</strong> JDIH BPK RI')}</li>
              <li>${ext(L.pp13, '<strong>Peraturan Pemerintah Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas.</strong> JDIH BPK RI')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Catatan:</strong> Artikel ini adalah informasi umum, <strong>bukan nasihat hukum</strong>. Peraturan dapat diubah; periksa versi terbaru di JDIH. Teks pasal dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Apa%20yang%20Dimaksud%20dengan%20Sekolah%20Luar%20Biasa%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Apa%20yang%20Dimaksud%20dengan%20Sekolah%20Luar%20Biasa&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

#!/usr/bin/env node
'use strict';

// One-time generator for artikel/berapa-biaya-terapi-anak-berkebutuhan-khusus.html (catchup 2026-09-28, kartu pZiizG2w).
// Skeleton from scripts/gen-berapa-biaya-terapi-bicara-anak.js. Every price is copied from an official
// government hospital tariff source (RSJ Grhasia DIY tarif pages, RSUD Kota Yogyakarta Perwali 53/2021).
// No private clinic prices, no YUKA service prices. Speech therapy detail lives in the sibling article
// berapa-biaya-terapi-bicara-anak (linked, not duplicated).

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'berapa-biaya-terapi-anak-berkebutuhan-khusus';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'berapa-biaya-terapi-bicara-anak.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');
if (!/article-featured-image/.test(STYLE)) throw new Error('sibling style has no featured image css');

const TITLE_TAG = 'Berapa Biaya Terapi Anak Berkebutuhan Khusus? Tarif Resmi';
const META_DESC = 'Berapa biaya terapi anak berkebutuhan khusus? Lihat tarif resmi terapi okupasi, sensori integrasi, wicara, dan psikologi di RS pemerintah Jogja.';
const OG_TITLE = 'Berapa Biaya Terapi Anak Berkebutuhan Khusus? Tarif Resmi RS Pemerintah dan Jalur BPJS';
const OG_DESC = 'Tarif okupasi terapi, sensori integrasi, terapi wicara, fisioterapi, dan layanan psikologi dari dokumen resmi RS Jiwa Grhasia DIY dan RSUD Kota Yogyakarta, plus cara menghitung total biaya.';
const H1 = 'Berapa Biaya Terapi Anak Berkebutuhan Khusus? Tarif Resmi RS Pemerintah, Cara Menghitung, dan Jalur BPJS';
const IMAGE_REL = 'Dokumentasi/21-jan-2026-keluarga-belajar-bersama-dirumah-003.webp';
const IMAGE_URL = `${SITE}/${IMAGE_REL}`;
const IMAGE_ALT = 'Seorang pendamping dan dua remaja putri berhijab belajar dengan meja lipat di lantai rumah, salah satunya merangkai manik-manik, dalam kegiatan YUKA';
const IMAGE_W = 1209;
const IMAGE_H = 907;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T15:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T15:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  grhasiaOT: 'https://grhasia.jogjaprov.go.id/embed_tarif/index?page=43',
  grhasiaWicara: 'https://grhasia.jogjaprov.go.id/embed_tarif/index?page=42',
  grhasiaPsi: 'https://grhasia.jogjaprov.go.id/embed_tarif/index?page=51',
  rsud: 'https://rumahsakitjogja.jogjakota.go.id/assets/download/regulasi/05_TARIF_RUMAH_SAKIT_PADA_RUMAH_SAKIT_UMUM_DAERAH.pdf',
  rsij: 'https://rsij.co.id/artikel/terapi-wicara-anak-kapan-orang-tua-harus-mulai-biaya-dan-prosedur-di-rsij',
  kontan: 'https://nasional.kontan.co.id/news/pemotongan-manfaat-bpjs-berisiko-putus-terapi-anak-berkebutuhan-khusus'
};
const ext = (href, text) => `<a href="${href.replace(/&/g, '&amp;')}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  { q: 'Berapa biaya terapi anak berkebutuhan khusus per sesi di rumah sakit pemerintah?', a: 'Tergantung jenis terapinya. Contoh dari tarif resmi di Yogyakarta: di RS Jiwa Grhasia DIY, terapi sensori integrasi tercantum Rp40.000 per tindakan, terapi Activity Daily Living Rp35.000, dan latihan terapi wicara Rp60.000. Di RSUD Kota Yogyakarta, sensori integrasi tercantum Rp66.000, layanan okupasi terapi pediatri Rp27.500, dan terapi gangguan wicara Rp44.000. Pendaftaran dan konsultasi dokter dihitung terpisah.' },
  { q: 'Kenapa total biaya terapi ABK per bulan jauh lebih besar dari tarif satu tindakan?', a: 'Karena anak berkebutuhan khusus sering menjalani lebih dari satu jenis terapi, masing-masing beberapa kali seminggu, selama berbulan-bulan. Total bulanan adalah jumlah semua tindakan per kunjungan dikali jumlah kunjungan, ditambah pendaftaran, asesmen awal, dan kontrol dokter.' },
  { q: 'Apakah terapi anak berkebutuhan khusus ditanggung BPJS Kesehatan?', a: 'Terapi rehabilitasi medik seperti okupasi terapi, terapi wicara, dan fisioterapi dapat dijamin bila ada indikasi medis dan mengikuti alur rujukan berjenjang. Pada 2024 media melaporkan pembatasan untuk sebagian diagnosis pada anak di atas tujuh tahun, jadi tanyakan ketentuan terbaru ke bagian BPJS rumah sakit tujuan.' },
  { q: 'Berapa biaya asesmen atau tes psikologi untuk anak berkebutuhan khusus?', a: 'Di RSUD Kota Yogyakarta, contohnya, Tes CHAT-CARS (skrining autisme) tercantum Rp27.500, Tes Denver Rp27.500, Tes Conners untuk GPPH Rp27.500, dan Tes WISC Rp82.500. Di RS Jiwa Grhasia DIY, konseling dasar psikologi tercantum Rp50.000. Rincian biaya pemeriksaan psikologi dibahas di artikel tes psikolog anak bayar berapa.' },
  { q: 'Bagaimana cara menekan biaya terapi anak berkebutuhan khusus?', a: 'Mulai dari asesmen agar terapi yang dijalani memang yang dibutuhkan, manfaatkan jalur BPJS bila memenuhi syarat, minta rincian tindakan per kunjungan secara tertulis, dan lanjutkan latihan dari terapis di rumah supaya kemajuan tidak hanya bergantung pada jumlah sesi.' }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Berapa Biaya Terapi Anak Berkebutuhan Khusus', item: CANONICAL }
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
    width: IMAGE_W,
    height: IMAGE_H,
    caption: 'Kegiatan belajar pendampingan YUKA',
    creditText: 'Dokumentasi YUKA Indonesia',
    author: { '@type': 'Organization', name: 'YUKA Indonesia' },
    copyrightHolder: { '@id': `${SITE}/#organization` }
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
  keywords: 'berapa biaya terapi anak berkebutuhan khusus, biaya terapi abk, tarif okupasi terapi, biaya sensori integrasi, terapi abk bpjs',
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
    <meta name="keywords" content="berapa biaya terapi anak berkebutuhan khusus, biaya terapi ABK, tarif okupasi terapi, biaya sensori integrasi, terapi ABK BPJS, YUKA">
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
    <meta property="og:image:alt" content="${IMAGE_ALT}">
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
                <span class="current">Berapa Biaya Terapi Anak Berkebutuhan Khusus</span>
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
            <img src="../${IMAGE_REL}" alt="${IMAGE_ALT}" width="${IMAGE_W}" height="${IMAGE_H}" fetchpriority="high" decoding="async">
            <figcaption>Terapi di rumah sakit hanya sebagian dari program; latihan harian di rumah ikut menentukan hasilnya. Foto ini kegiatan belajar pendampingan YUKA. <span class="kredit">Foto: dokumentasi YUKA Indonesia</span></figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> berapa biaya terapi anak berkebutuhan khusus tergantung jenis terapi, jumlah tindakan per kunjungan, dan berapa lama program berjalan. Di rumah sakit pemerintah Yogyakarta, tarif per tindakan tercantum di dokumen resmi, umumnya puluhan ribu rupiah: di RS Jiwa Grhasia DIY misalnya terapi sensori integrasi Rp40.000 dan latihan terapi wicara Rp60.000, sedangkan di RSUD Kota Yogyakarta sensori integrasi Rp66.000 dan okupasi terapi pediatri Rp27.500. Karena ABK sering menjalani beberapa terapi sekaligus selama berbulan-bulan, total yang dibayar bisa berlipat, ditambah pendaftaran dan konsultasi dokter. Peserta BPJS Kesehatan bisa memakai jalur rujukan bila ada indikasi medis.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Semua angka di artikel ini diambil dari dokumen tarif yang dipublikasikan sendiri oleh rumah sakit pemerintah, dan dicek pada 28 September 2026. Tarif bisa diperbarui lewat peraturan baru, jadi konfirmasi ke rumah sakit sebelum datang. Kami sengaja tidak mencantumkan tarif klinik swasta karena tidak ada dokumen resmi bertanggal yang bisa diperiksa pembaca.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#jenis">Jenis terapi yang paling sering dijalani ABK</a></li>
                    <li><a href="#grhasia">Tarif terapi di RS Jiwa Grhasia DIY</a></li>
                    <li><a href="#rsud-jogja">Tarif terapi di RSUD Kota Yogyakarta</a></li>
                    <li><a href="#psikologi">Biaya asesmen dan tes psikologi</a></li>
                    <li><a href="#hitung">Cara menghitung perkiraan biaya bulanan</a></li>
                    <li><a href="#bpjs">Terapi ABK dengan BPJS Kesehatan</a></li>
                    <li><a href="#hemat">Cara agar biaya terapi tidak sia-sia</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="jenis">Jenis Terapi yang Paling Sering Dijalani ABK</h2>
            <p>Anak berkebutuhan khusus jarang hanya menjalani satu jenis terapi. Anak dengan <a href="/artikel/autisme-adalah">autisme</a>, misalnya, bisa mendapat terapi wicara, okupasi terapi, dan sensori integrasi dalam program yang sama. Karena itu, pertanyaan soal biaya perlu dijawab per jenis terapi dulu, baru dijumlahkan. Jenis yang paling sering muncul:</p>
            <ul>
                <li><strong>Okupasi terapi (OT)</strong>, melatih kemandirian sehari-hari, motorik halus, dan kesiapan belajar. Penjelasan lengkap ada di <a href="/artikel/terapi-okupasi">terapi okupasi</a>.</li>
                <li><strong>Sensori integrasi (SI)</strong>, membantu anak mengolah rangsang sensorik. Baca <a href="/artikel/sensori-integrasi">sensori integrasi</a>.</li>
                <li><strong>Terapi wicara</strong>, untuk kemampuan bicara, bahasa, dan oral motor. Rincian tarifnya dibahas khusus di <a href="/artikel/berapa-biaya-terapi-bicara-anak">berapa biaya terapi bicara anak</a>.</li>
                <li><strong>Fisioterapi</strong>, untuk kekuatan otot, keseimbangan, dan gerak kasar. Lihat <a href="/artikel/terapi-fisik-untuk-abk">terapi fisik untuk ABK</a>.</li>
                <li><strong>Layanan psikologi</strong>, mulai dari tes, asesmen, sampai konseling orang tua.</li>
            </ul>
            <p>Gambaran menyeluruh jenis-jenis terapi ada di artikel <a href="/artikel/apa-saja-terapi-anak-berkebutuhan-khusus">apa saja terapi anak berkebutuhan khusus</a>. Terapi mana yang dibutuhkan ditentukan lewat <a href="/artikel/asesmen-abk">asesmen anak berkebutuhan khusus</a>, dan hasil asesmen itulah yang paling menentukan biaya.</p>

            <h2 id="grhasia">Tarif Terapi di RS Jiwa Grhasia DIY</h2>
            <p>RS Jiwa Grhasia milik Pemerintah Daerah DIY menampilkan tarif pelayanannya di situs resmi, per ruangan layanan. Tarif di bawah sama untuk semua kelas (non kelas, VIP, kelas I, II, dan III).</p>
            <h3>Okupasi Terapi (termasuk sensori integrasi)</h3>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Tindakan (sesuai situs)</th><th>Tarif</th></tr>
                </thead>
                <tbody>
                    <tr><td>Terapi Activity Daily Living (ADL) rawat jalan</td><td>Rp35.000</td></tr>
                    <tr><td>Latihan akademik / pre akademik</td><td>Rp35.000</td></tr>
                    <tr><td>Terapi sensori integrasi</td><td>Rp40.000</td></tr>
                    <tr><td>Terapi perilaku / bermain / leisure</td><td>Rp40.000</td></tr>
                    <tr><td>Latihan Koordinasi dan Motorik</td><td>Rp35.000</td></tr>
                    <tr><td>Edukasi Terapi</td><td>Rp30.000</td></tr>
                    <tr><td>Jasa rumah sakit (registrasi rawat jalan)</td><td>Rp15.000</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sumber: ${ext(L.grhasiaOT, 'Tarif Pelayanan RS Jiwa Grhasia DIY, ruangan OT (Okupasi Terapi), grhasia.jogjaprov.go.id')}, diakses 28 September 2026.</p>
            <h3>Terapi Wicara</h3>
            <p>Di ruangan Terapi Wicara, asesmen tercantum Rp30.000 dan tiap jenis latihan (bahasa reseptif, bahasa ekspresif, oral motor, artikulasi, irama kelancaran) Rp60.000 per tindakan (${ext(L.grhasiaWicara, 'sumber: tarif ruangan Terapi Wicara')}). Tabel lengkapnya ada di artikel <a href="/artikel/berapa-biaya-terapi-bicara-anak">berapa biaya terapi bicara anak</a>, jadi tidak kami ulang di sini.</p>

            <h2 id="rsud-jogja">Tarif Terapi di RSUD Kota Yogyakarta</h2>
            <p>RSUD Kota Yogyakarta (Rumah Sakit Jogja) mempublikasikan Peraturan Walikota Yogyakarta Nomor 53 Tahun 2021 tentang Tarif Rumah Sakit di situs resminya. Bagian Rehabilitasi Medik pada lampirannya memuat tindakan yang relevan untuk anak berkebutuhan khusus berikut:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Tindakan (sesuai dokumen)</th><th>Tarif</th></tr>
                </thead>
                <tbody>
                    <tr><td>Assessment Okupasi Terapi</td><td>Rp66.000</td></tr>
                    <tr><td>Layanan Okupasi Terapi pada Pediatri</td><td>Rp27.500</td></tr>
                    <tr><td>Sensori Integrasi</td><td>Rp66.000</td></tr>
                    <tr><td>Neurosensori motor</td><td>Rp55.000</td></tr>
                    <tr><td>Exercise</td><td>Rp55.000</td></tr>
                    <tr><td>Tes Wicara</td><td>Rp55.000</td></tr>
                    <tr><td>Terapi Gangguan Wicara</td><td>Rp44.000</td></tr>
                    <tr><td>Oral Motor Exercise</td><td>Rp38.500</td></tr>
                    <tr><td>Poliklinik Spesialis (pemeriksaan dan konsultasi rawat jalan)</td><td>Rp50.000</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sumber: ${ext(L.rsud, 'Peraturan Walikota Yogyakarta Nomor 53 Tahun 2021, dokumen di rumahsakitjogja.jogjakota.go.id')}, lampiran bagian Tarif Pelayanan Pemeriksaan dan Konsultasi serta Rehabilitasi Medik, diakses 28 September 2026. Peraturan ini terbit tahun 2021, jadi tanyakan ke rumah sakit apakah tarifnya sudah diperbarui.</p>
            <p>Perhatikan bahwa tarif satu jenis terapi bisa berbeda cukup jauh antar rumah sakit. Sensori integrasi, misalnya, tercantum Rp40.000 di RS Jiwa Grhasia DIY dan Rp66.000 di RSUD Kota Yogyakarta. Karena itu, bandingkan dokumen tarif rumah sakit yang terjangkau dari rumah sebelum memilih.</p>

            <h2 id="psikologi">Biaya Asesmen dan Tes Psikologi</h2>
            <p>Sebelum atau selama terapi, anak sering menjalani tes psikologi, dan orang tua bisa mendapat konseling. Beberapa tarif dari dokumen resmi:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Layanan</th><th>Tempat</th><th>Tarif</th></tr>
                </thead>
                <tbody>
                    <tr><td>Tes CHAT - CARS</td><td>RSUD Kota Yogyakarta</td><td>Rp27.500</td></tr>
                    <tr><td>Tes Denver</td><td>RSUD Kota Yogyakarta</td><td>Rp27.500</td></tr>
                    <tr><td>Tes Conners - Kuesioner GPPH</td><td>RSUD Kota Yogyakarta</td><td>Rp27.500</td></tr>
                    <tr><td>Tes WISC</td><td>RSUD Kota Yogyakarta</td><td>Rp82.500</td></tr>
                    <tr><td>Konsultasi Psikologi sampai 60 menit</td><td>RSUD Kota Yogyakarta</td><td>Rp50.000</td></tr>
                    <tr><td>Konseling Dasar Psikologi</td><td>RS Jiwa Grhasia DIY</td><td>Rp50.000</td></tr>
                    <tr><td>Konseling Sedang Psikologi</td><td>RS Jiwa Grhasia DIY</td><td>Rp60.000</td></tr>
                    <tr><td>Konseling Kompleks Psikologi</td><td>RS Jiwa Grhasia DIY</td><td>Rp70.000</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sumber: ${ext(L.rsud, 'Perwali Yogyakarta 53/2021')} bagian Pelayanan Psikologi dan Konsultasi, serta ${ext(L.grhasiaPsi, 'tarif ruangan Psikologi RS Jiwa Grhasia DIY')}, diakses 28 September 2026. Penjelasan lebih rinci tentang pemeriksaan psikologi anak ada di <a href="/artikel/tes-psikolog-anak-bayar-berapa">tes psikolog anak bayar berapa</a>.</p>

            <h2 id="hitung">Cara Menghitung Perkiraan Biaya Bulanan</h2>
            <p>Karena terapi ABK berupa program, rumus sederhananya:</p>
            <div class="info-box">
                <p style="margin-bottom:0;"><strong>Perkiraan biaya per bulan</strong> = (jumlah tarif semua tindakan dalam satu kunjungan + biaya pendaftaran) x jumlah kunjungan per bulan, ditambah asesmen awal dan kontrol dokter bila ada.</p>
            </div>
            <p>Contoh hitungan dengan tarif RS Jiwa Grhasia DIY di atas, <em>hanya sebagai ilustrasi cara menghitung</em>: bila satu kunjungan berisi terapi sensori integrasi (Rp40.000) dan terapi ADL (Rp35.000) ditambah registrasi (Rp15.000), satu kunjungan menjadi Rp90.000. Bila dijadwalkan empat kali sebulan, perkiraannya Rp360.000. Bila anak juga menjalani satu latihan terapi wicara (Rp60.000) di tiap kunjungan, angkanya naik menjadi Rp600.000 per bulan. Jumlah kunjungan dan jenis tindakan yang sebenarnya ditentukan dokter dan terapis, bukan oleh contoh ini, dan konsultasi dokter belum termasuk.</p>
            <p>Faktor yang paling membuat biaya berbeda antar keluarga adalah jumlah jenis terapi, frekuensi per minggu, lama program, jumlah asesmen ulang, dan jenis lembaga. Klinik tumbuh kembang swasta menetapkan tarif sendiri, sering dalam bentuk paket, jadi mintalah rincian tertulis sebelum menandatangani paket apa pun. Daftar tempat terapi di Yogyakarta ada di <a href="/artikel/tempat-terapi-anak-jogja">tempat terapi anak Jogja</a>.</p>

            <h2 id="bpjs">Terapi ABK dengan BPJS Kesehatan</h2>
            <p>Okupasi terapi, terapi wicara, dan fisioterapi termasuk layanan rehabilitasi medik yang dapat dijamin BPJS Kesehatan bila ada indikasi medis dan mengikuti alur rujukan berjenjang. Sebagai contoh, ${ext(L.rsij, 'RS Islam Jakarta Cempaka Putih')} menulis bahwa layanan terapi wicaranya dapat ditanggung BPJS Kesehatan dengan syarat peserta aktif dan membawa surat rujukan dari dokter atau puskesmas.</p>
            <p>Pada Juni 2024, ${ext(L.kontan, 'Kontan melaporkan')} keluhan orang tua karena terapi untuk anak di atas tujuh tahun dengan diagnosis gangguan perkembangan tertentu tidak lagi dijamin di sejumlah rumah sakit. Dalam laporan yang sama, BPJS Kesehatan menyatakan pembatasan itu bukan kebijakannya, melainkan merujuk pada pedoman perhimpunan dokter spesialis rehabilitasi medik (Perdosri). Tanyakan ketentuan terbaru ke bagian BPJS rumah sakit tujuan sebelum program dimulai.</p>
            <p>Alur umumnya: datang ke Puskesmas atau dokter keluarga tempat anak terdaftar, minta rujukan ke rumah sakit, lalu dokter spesialis menentukan terapi apa yang dibutuhkan dan berapa kali. Bantuan lain dari pemerintah untuk keluarga ABK dirangkum di <a href="/artikel/program-pemerintah-untuk-abk">program pemerintah untuk ABK</a>.</p>

            <h2 id="hemat">Cara agar Biaya Terapi Tidak Sia-sia</h2>
            <ol>
                <li><strong>Mulai dari asesmen.</strong> Terapi yang tepat sasaran lebih hemat daripada mencoba banyak terapi sekaligus.</li>
                <li><strong>Minta rincian tertulis.</strong> Tanyakan tindakan apa saja per kunjungan, berapa kali seminggu, dan kapan evaluasi.</li>
                <li><strong>Bandingkan tarif resmi.</strong> Seperti terlihat di atas, tarif tindakan yang sama bisa berbeda antar rumah sakit.</li>
                <li><strong>Lanjutkan latihan di rumah.</strong> Sesi terapi hanya beberapa jam seminggu. Minta pekerjaan rumah dari terapis dan jalankan dalam kegiatan sehari-hari. Dukungan keluarga dibahas di <a href="/artikel/dukungan-keluarga-anak-abk">dukungan keluarga untuk anak ABK</a>.</li>
                <li><strong>Catat perkembangan.</strong> Catatan kemajuan membantu terapis memutuskan kapan frekuensi bisa dikurangi.</li>
            </ol>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/berapa-biaya-terapi-bicara-anak">Berapa Biaya Terapi Bicara Anak</a></h4>
                    <p>Tarif resmi terapi wicara per tindakan dan jalur BPJS.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/terapi-okupasi">Terapi Okupasi</a></h4>
                    <p>Apa itu okupasi terapi dan untuk siapa.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/tempat-terapi-anak-jogja">Tempat Terapi Anak Jogja</a></h4>
                    <p>Jalur layanan terapi anak di Yogyakarta.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#TerapiABK</a>
            <a href="#">#OkupasiTerapi</a>
            <a href="#">#SensoriIntegrasi</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.grhasiaOT, 'RS Jiwa Grhasia DIY. <strong>Tarif Pelayanan, ruangan OT (Okupasi Terapi)</strong>. grhasia.jogjaprov.go.id, diakses 28 September 2026')}</li>
              <li>${ext(L.grhasiaWicara, 'RS Jiwa Grhasia DIY. <strong>Tarif Pelayanan, ruangan Terapi Wicara</strong>. grhasia.jogjaprov.go.id, diakses 28 September 2026')}</li>
              <li>${ext(L.grhasiaPsi, 'RS Jiwa Grhasia DIY. <strong>Tarif Pelayanan, ruangan Psikologi</strong>. grhasia.jogjaprov.go.id, diakses 28 September 2026')}</li>
              <li>${ext(L.rsud, 'Walikota Yogyakarta. <strong>Peraturan Walikota Yogyakarta Nomor 53 Tahun 2021 tentang Tarif Rumah Sakit pada RSUD Kota Yogyakarta</strong>. rumahsakitjogja.jogjakota.go.id, diakses 28 September 2026')}</li>
              <li>${ext(L.rsij, 'RS Islam Jakarta Cempaka Putih. <strong>Terapi Wicara Anak: Kapan Orang Tua Harus Mulai, Biaya, dan Prosedur di RSIJ</strong>. rsij.co.id, diakses 28 September 2026')}</li>
              <li>${ext(L.kontan, 'Kontan. <strong>Pemotongan Manfaat BPJS Berisiko Putus Terapi Anak Berkebutuhan Khusus</strong> (13 Juni 2024). nasional.kontan.co.id, diakses 28 September 2026')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat informasi umum, <strong>bukan rekomendasi dan bukan nasihat medis</strong>. YUKA tidak memiliki hubungan kerja sama dengan rumah sakit yang disebut. Tarif dikutip dari sumber resmi masing-masing pada 28 September 2026 dan bisa berubah, jadi konfirmasi langsung sebelum datang.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Berapa%20Biaya%20Terapi%20Anak%20Berkebutuhan%20Khusus%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Berapa%20Biaya%20Terapi%20Anak%20Berkebutuhan%20Khusus&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

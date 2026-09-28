#!/usr/bin/env node
'use strict';

// One-time generator for artikel/berapa-biaya-terapi-bicara-anak.html (catchup 2026-09-28, kartu s0SFFdNv).
// Skeleton from scripts/gen-tes-psikolog-anak-bayar-berapa.js. Every price is copied from an official
// government hospital tariff source (RSJ Grhasia DIY tarif page, RSUD Kota Yogyakarta Perwali 53/2021).
// No private clinic prices, no YUKA service prices (keputusan Syauqi tertunda).

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'berapa-biaya-terapi-bicara-anak';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'tes-psikolog-anak-bayar-berapa.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');
if (!/article-featured-image/.test(STYLE)) throw new Error('sibling style has no featured image css');

const TITLE_TAG = 'Berapa Biaya Terapi Bicara Anak? Tarif Resmi RS di Jogja';
const META_DESC = 'Berapa biaya terapi bicara anak? Lihat tarif resmi terapi wicara di RS pemerintah Yogyakarta, komponen biaya, dan jalur BPJS. Cek rinciannya di sini.';
const OG_TITLE = 'Berapa Biaya Terapi Bicara Anak? Tarif Resmi RS Pemerintah, Komponen Biaya, dan Jalur BPJS';
const OG_DESC = 'Tarif terapi wicara per tindakan dari dokumen resmi RS Jiwa Grhasia DIY dan RSUD Kota Yogyakarta, cara menghitung total biaya bulanan, dan jalur BPJS Kesehatan.';
const H1 = 'Berapa Biaya Terapi Bicara Anak? Tarif Resmi RS Pemerintah, Komponen Biaya, dan Jalur BPJS';
const IMAGE_REL = 'Dokumentasi/museum-gunung-merapi-ibu-anak-perjalanan-bus-bersama-039.webp';
const IMAGE_URL = `${SITE}/${IMAGE_REL}`;
const IMAGE_ALT = 'Seorang ibu berhijab merah muda duduk di bangku bus bersama anak perempuan kecil bertopi merah dalam perjalanan kegiatan YUKA';
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T09:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T09:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  grhasia: 'https://grhasia.jogjaprov.go.id/embed_tarif/index?page=42',
  rsud: 'https://rumahsakitjogja.jogjakota.go.id/assets/download/regulasi/05_TARIF_RUMAH_SAKIT_PADA_RUMAH_SAKIT_UMUM_DAERAH.pdf',
  rsij: 'https://rsij.co.id/artikel/terapi-wicara-anak-kapan-orang-tua-harus-mulai-biaya-dan-prosedur-di-rsij',
  kontan: 'https://nasional.kontan.co.id/news/pemotongan-manfaat-bpjs-berisiko-putus-terapi-anak-berkebutuhan-khusus'
};
const ext = (href, text) => `<a href="${href.replace(/&/g, '&amp;')}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  { q: 'Berapa biaya terapi bicara anak per sesi di rumah sakit pemerintah?', a: 'Contoh dari tarif resmi di Yogyakarta: di RS Jiwa Grhasia DIY, satu tindakan latihan terapi wicara (bahasa reseptif, bahasa ekspresif, oral motor, artikulasi, atau irama kelancaran) tercantum Rp60.000 dan asesmen terapi wicara Rp30.000. Di RSUD Kota Yogyakarta, terapi gangguan wicara tercantum Rp44.000 dan tes wicara Rp55.000. Biaya pendaftaran dan konsultasi dokter dihitung terpisah.' },
  { q: 'Kenapa total biaya terapi bicara per bulan jauh lebih besar dari tarif satu sesi?', a: 'Karena terapi bicara jarang cukup satu kali. Total bulanan adalah tarif per tindakan dikali jumlah tindakan per kunjungan, dikali jumlah kunjungan per bulan, ditambah biaya pendaftaran, asesmen awal, dan kontrol ke dokter. Frekuensinya ditentukan oleh dokter dan terapis sesuai kondisi anak.' },
  { q: 'Apakah terapi bicara anak ditanggung BPJS Kesehatan?', a: 'Bisa, bila ada indikasi medis dan mengikuti alur rujukan. RS Islam Jakarta Cempaka Putih, misalnya, menyebut terapi wicara dapat ditanggung BPJS Kesehatan dengan syarat peserta aktif dan membawa surat rujukan dari dokter atau puskesmas. Pada 2024 media melaporkan pembatasan untuk anak di atas tujuh tahun dengan diagnosis gangguan bicara tertentu, jadi tanyakan ketentuan terbaru ke rumah sakit tujuan.' },
  { q: 'Apakah tarif rumah sakit yang tercantum sudah termasuk konsultasi dokter?', a: 'Tidak. Di dokumen tarif, tindakan terapi wicara, asesmen, pendaftaran, dan konsultasi dokter tercantum sebagai baris yang berbeda. Di RS Jiwa Grhasia DIY misalnya, jasa rumah sakit untuk registrasi rawat jalan tercantum Rp15.000 di luar tindakan terapinya.' },
  { q: 'Apa yang perlu ditanyakan sebelum anak mulai terapi bicara?', a: 'Tanyakan tindakan apa saja yang akan diberikan tiap kunjungan, berapa kali seminggu, berapa lama program direncanakan, kapan evaluasi dilakukan, dan apakah ada biaya tambahan seperti asesmen ulang atau laporan tertulis.' }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Berapa Biaya Terapi Bicara Anak', item: CANONICAL }
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
    width: 936,
    height: 1248,
    caption: 'Ibu dan anak dalam perjalanan kegiatan YUKA',
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
  keywords: 'berapa biaya terapi bicara anak, biaya terapi wicara anak, tarif terapi wicara rsud, terapi wicara bpjs',
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
    <meta name="keywords" content="berapa biaya terapi bicara anak, biaya terapi wicara anak, tarif terapi wicara, terapi wicara BPJS, YUKA">
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
                <span class="current">Berapa Biaya Terapi Bicara Anak</span>
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
            <img src="../${IMAGE_REL}" alt="${IMAGE_ALT}" width="936" height="1248" fetchpriority="high" decoding="async">
            <figcaption>Pendampingan orang tua ikut menentukan hasil terapi bicara anak. Foto ini ibu dan anak dalam perjalanan kegiatan YUKA. <span class="kredit">Foto: dokumentasi YUKA Indonesia</span></figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> berapa biaya terapi bicara anak tergantung tempat, jenis tindakan, dan berapa kali anak perlu datang. Di rumah sakit pemerintah Yogyakarta, tarif per tindakan tercantum di dokumen resmi: di RS Jiwa Grhasia DIY latihan terapi wicara tercantum Rp60.000 per tindakan dan asesmen Rp30.000; di RSUD Kota Yogyakarta terapi gangguan wicara tercantum Rp44.000 dan tes wicara Rp55.000. Karena terapi berjalan berminggu-minggu, total yang dibayar adalah tarif per tindakan dikali jumlah kunjungan, ditambah pendaftaran dan konsultasi dokter. Peserta BPJS Kesehatan bisa memakai jalur rujukan bila ada indikasi medis.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Semua angka di artikel ini diambil dari dokumen tarif yang dipublikasikan sendiri oleh rumah sakit pemerintah, dan dicek pada 28 September 2026. Tarif bisa diperbarui lewat peraturan baru, jadi konfirmasi ke rumah sakit sebelum datang. Kami sengaja tidak mencantumkan tarif klinik swasta karena tidak ada dokumen resmi bertanggal yang bisa diperiksa pembaca.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#kapan">Kapan anak perlu terapi bicara</a></li>
                    <li><a href="#grhasia">Tarif terapi wicara di RS Jiwa Grhasia DIY</a></li>
                    <li><a href="#rsud-jogja">Tarif terapi wicara di RSUD Kota Yogyakarta</a></li>
                    <li><a href="#hitung">Cara menghitung perkiraan biaya bulanan</a></li>
                    <li><a href="#faktor">Faktor yang membuat biaya berbeda</a></li>
                    <li><a href="#bpjs">Terapi bicara dengan BPJS Kesehatan</a></li>
                    <li><a href="#rumah">Latihan di rumah yang membuat terapi lebih efektif</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="kapan">Kapan Anak Perlu Terapi Bicara</h2>
            <p>Sebelum membahas biaya, pastikan dulu terapi memang dibutuhkan. Orang tua biasanya mulai mencari terapi bicara ketika anak belum bisa merangkai kata sesuai usianya, sulit dipahami orang lain, gagap, atau sulit memahami perintah sederhana. Kondisi yang paling sering melatarbelakanginya adalah <a href="/artikel/speech-delay-adalah">speech delay</a>, tetapi terlambat bicara juga bisa berkaitan dengan gangguan pendengaran atau <a href="/artikel/autisme-adalah">autisme</a>.</p>
            <p>Karena penyebabnya beragam, langkah pertama sebaiknya pemeriksaan oleh dokter anak atau dokter rehabilitasi medik, lalu asesmen oleh terapis wicara. Hasil asesmen inilah yang menentukan jenis latihan dan frekuensinya, dan pada akhirnya menentukan biaya. Gambaran proses asesmen ada di artikel <a href="/artikel/asesmen-abk">asesmen anak berkebutuhan khusus</a>, sedangkan penjelasan tentang terapinya sendiri ada di <a href="/artikel/terapi-wicara">apa itu terapi wicara</a>. Pertanyaan apakah kondisi ini bisa membaik dibahas di <a href="/artikel/apakah-speech-delay-bisa-sembuh">apakah speech delay bisa sembuh</a>.</p>

            <h2 id="grhasia">Tarif Terapi Wicara di RS Jiwa Grhasia DIY</h2>
            <p>RS Jiwa Grhasia milik Pemerintah Daerah DIY menampilkan tarif pelayanannya di situs resmi, dengan kategori tersendiri untuk Terapi Wicara. Tarifnya sama untuk semua kelas (non kelas, VIP, kelas I, II, dan III):</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Layanan Terapi Wicara (sesuai situs)</th><th>Tarif</th><th>Keterangan umum</th></tr>
                </thead>
                <tbody>
                    <tr><td>Assesment Terapi Wicara</td><td>Rp30.000</td><td>Pemeriksaan awal kemampuan bicara dan bahasa</td></tr>
                    <tr><td>Latihan Bahasa Reseptif</td><td>Rp60.000</td><td>Melatih pemahaman bahasa</td></tr>
                    <tr><td>Latihan Bahasa Ekspresif</td><td>Rp60.000</td><td>Melatih kemampuan mengungkapkan kata dan kalimat</td></tr>
                    <tr><td>Latihan Oral Motor</td><td>Rp60.000</td><td>Melatih otot mulut, bibir, dan lidah</td></tr>
                    <tr><td>Latihan Artikulasi</td><td>Rp60.000</td><td>Melatih pengucapan bunyi</td></tr>
                    <tr><td>Latihan Irama Kelancaran</td><td>Rp60.000</td><td>Untuk bicara yang tersendat atau gagap</td></tr>
                    <tr><td>Stimulasi Dengan Alat</td><td>Rp65.000</td><td>Stimulasi memakai alat bantu</td></tr>
                    <tr><td>Jasa rumah sakit (registrasi rawat jalan)</td><td>Rp15.000</td><td>Biaya pendaftaran</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sumber: ${ext(L.grhasia, 'Tarif Pelayanan RS Jiwa Grhasia DIY, kategori Terapi Wicara, grhasia.jogjaprov.go.id')}, diakses 28 September 2026. Kolom keterangan adalah penjelasan umum dari kami, bukan bagian dokumen. Tarif tercantum per tindakan, jadi satu kunjungan yang berisi dua jenis latihan dihitung dua baris.</p>

            <h2 id="rsud-jogja">Tarif Terapi Wicara di RSUD Kota Yogyakarta</h2>
            <p>RSUD Kota Yogyakarta (Rumah Sakit Jogja) mempublikasikan Peraturan Walikota Yogyakarta Nomor 53 Tahun 2021 tentang Tarif Rumah Sakit di situs resminya. Bagian Rehabilitasi Medik pada lampirannya memuat tindakan terapi wicara berikut:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Tindakan (sesuai dokumen)</th><th>Tarif</th></tr>
                </thead>
                <tbody>
                    <tr><td>Tes Wicara</td><td>Rp55.000</td></tr>
                    <tr><td>Terapi Gangguan Wicara</td><td>Rp44.000</td></tr>
                    <tr><td>Terapi Gangguan Bahasa/Memori</td><td>Rp44.000</td></tr>
                    <tr><td>Terapi Gangguan Irama Kelancaran</td><td>Rp44.000</td></tr>
                    <tr><td>Terapi Gangguan Suara</td><td>Rp44.000</td></tr>
                    <tr><td>Oral Motor Exercise</td><td>Rp38.500</td></tr>
                    <tr><td>Massage Oral</td><td>Rp38.500</td></tr>
                    <tr><td>Kunjungan Fisioterapis ke rumah (homecare), termasuk terapi wicara</td><td>Rp60.000</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sumber: ${ext(L.rsud, 'Peraturan Walikota Yogyakarta Nomor 53 Tahun 2021, dokumen di rumahsakitjogja.jogjakota.go.id')}, lampiran bagian Rehabilitasi Medik dan Pelayanan Homecare, diakses 28 September 2026. Layanan homecare di dokumen yang sama juga mencantumkan biaya pendaftaran homecare Rp80.000. Peraturan ini terbit tahun 2021, jadi tanyakan ke rumah sakit apakah tarifnya sudah diperbarui.</p>

            <h2 id="hitung">Cara Menghitung Perkiraan Biaya Bulanan</h2>
            <p>Pertanyaan "berapa biaya terapi bicara anak" jarang terjawab dengan satu angka, karena terapi adalah program, bukan sekali datang. Rumus sederhananya:</p>
            <div class="info-box">
                <p style="margin-bottom:0;"><strong>Perkiraan biaya per bulan</strong> = (tarif per tindakan x jumlah tindakan per kunjungan + biaya pendaftaran) x jumlah kunjungan per bulan, ditambah asesmen awal dan kontrol dokter bila ada.</p>
            </div>
            <p>Contoh hitungan dengan tarif RS Jiwa Grhasia DIY di atas, <em>hanya sebagai ilustrasi cara menghitung</em>: bila satu kunjungan berisi satu latihan (Rp60.000) ditambah registrasi (Rp15.000), satu kunjungan menjadi Rp75.000. Bila anak dijadwalkan empat kali sebulan, perkiraannya Rp300.000 per bulan, ditambah asesmen awal Rp30.000 di bulan pertama. Jumlah kunjungan dan jenis latihan yang sebenarnya ditentukan dokter dan terapis, bukan oleh contoh ini, dan biaya konsultasi dokter belum termasuk.</p>

            <h2 id="faktor">Faktor yang Membuat Biaya Berbeda</h2>
            <ul>
                <li><strong>Frekuensi dan lama program.</strong> Faktor terbesar. Dua kali seminggu selama enam bulan jelas berbeda dengan sekali seminggu selama dua bulan.</li>
                <li><strong>Jumlah jenis latihan per kunjungan.</strong> Anak yang butuh latihan oral motor sekaligus bahasa ekspresif bisa ditagih dua tindakan dalam satu kunjungan.</li>
                <li><strong>Asesmen dan evaluasi ulang.</strong> Asesmen awal dan tes berkala tercantum sebagai tindakan tersendiri.</li>
                <li><strong>Konsultasi dokter.</strong> Di rumah sakit, terapi biasanya berjalan di bawah dokter rehabilitasi medik atau dokter anak yang juga punya tarif konsultasi.</li>
                <li><strong>Lokasi layanan.</strong> Terapi di rumah (homecare) memakai tarif kunjungan dan pendaftaran yang berbeda dari rawat jalan.</li>
                <li><strong>Jenis lembaga.</strong> Klinik tumbuh kembang dan praktik terapis swasta menetapkan tarif sendiri, sering dalam bentuk paket. Mintalah rincian tertulis sebelum menandatangani paket apa pun.</li>
            </ul>
            <p>Bila anak juga membutuhkan terapi lain, biayanya ikut bertambah. Perbedaan dua terapi yang paling sering dijalani bersamaan dibahas di <a href="/artikel/perbedaan-terapi-okupasi-dan-terapi-wicara">perbedaan terapi okupasi dan terapi wicara</a>, dan biaya pemeriksaan psikologi dibahas di <a href="/artikel/tes-psikolog-anak-bayar-berapa">tes psikolog anak bayar berapa</a>.</p>

            <h2 id="bpjs">Terapi Bicara dengan BPJS Kesehatan</h2>
            <p>Terapi wicara termasuk layanan rehabilitasi medik yang dapat dijamin BPJS Kesehatan bila ada indikasi medis dan mengikuti alur rujukan berjenjang. Sebagai contoh, ${ext(L.rsij, 'RS Islam Jakarta Cempaka Putih')} menulis bahwa layanan terapi wicaranya dapat ditanggung BPJS Kesehatan dengan syarat peserta aktif dan membawa surat rujukan dari dokter atau puskesmas.</p>
            <p>Ada satu catatan penting. Pada Juni 2024, ${ext(L.kontan, 'Kontan melaporkan')} keluhan orang tua karena terapi untuk anak di atas tujuh tahun dengan diagnosis gangguan perkembangan bicara dan bahasa yang tidak spesifik tidak lagi dijamin di sejumlah rumah sakit, sehingga orang tua membayar sendiri. Dalam laporan yang sama, BPJS Kesehatan menyatakan pembatasan itu bukan kebijakannya, melainkan merujuk pada pedoman perhimpunan dokter spesialis rehabilitasi medik (Perdosri). Karena itu, tanyakan ketentuan terbaru ke bagian BPJS rumah sakit tujuan sebelum program dimulai.</p>
            <p>Alur umumnya: datang ke Puskesmas atau dokter keluarga tempat anak terdaftar, sampaikan keluhannya, minta rujukan ke rumah sakit, lalu dokter spesialis yang menentukan apakah anak dirujuk ke terapi wicara dan berapa kali.</p>

            <h2 id="rumah">Latihan di Rumah yang Membuat Terapi Lebih Efektif</h2>
            <p>Sesi terapi hanya beberapa puluh menit dalam seminggu. Sisanya, anak belajar bicara dari orang di sekitarnya. Karena itu, cara paling masuk akal untuk membuat biaya terapi tidak sia-sia adalah meneruskan latihannya di rumah:</p>
            <ol>
                <li><strong>Minta pekerjaan rumah dari terapis.</strong> Tanyakan latihan apa yang bisa diulang di rumah dan bagaimana cara melakukannya dengan benar.</li>
                <li><strong>Ajak bicara dalam kegiatan sehari-hari.</strong> Sebutkan nama benda saat makan, mandi, atau bermain, lalu beri anak waktu untuk merespons.</li>
                <li><strong>Kurangi layar, perbanyak interaksi.</strong> Bermain dan membaca bersama memberi kesempatan anak meniru dan menjawab.</li>
                <li><strong>Catat perkembangan.</strong> Kata baru, kalimat pertama, atau bunyi yang mulai jelas. Catatan ini membantu terapis saat evaluasi.</li>
            </ol>
            <p>Pendekatan yang menempatkan orang tua sebagai pelatih utama dibahas di artikel <a href="/artikel/hanen-approach-terapi-bahasa-anak">Hanen approach untuk terapi bahasa anak</a>. Contoh latihan otot mulut ada di <a href="/artikel/terapi-wicara-oral-motor-exercises">latihan oral motor terapi wicara</a>, dan daftar layanan terapi di Yogyakarta ada di <a href="/artikel/tempat-terapi-anak-jogja">tempat terapi anak Jogja</a>.</p>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/terapi-wicara">Terapi Wicara</a></h4>
                    <p>Apa itu terapi wicara dan bagaimana prosesnya.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/speech-delay-adalah">Speech Delay Adalah</a></h4>
                    <p>Tanda, penyebab, dan kapan perlu diperiksa.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/tempat-terapi-anak-jogja">Tempat Terapi Anak Jogja</a></h4>
                    <p>Jalur layanan terapi anak di Yogyakarta.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#TerapiWicara</a>
            <a href="#">#SpeechDelay</a>
            <a href="#">#TumbuhKembang</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.grhasia, 'RS Jiwa Grhasia DIY. <strong>Tarif Pelayanan, kategori Terapi Wicara</strong>. grhasia.jogjaprov.go.id, diakses 28 September 2026')}</li>
              <li>${ext(L.rsud, 'Walikota Yogyakarta. <strong>Peraturan Walikota Yogyakarta Nomor 53 Tahun 2021 tentang Tarif Rumah Sakit pada RSUD Kota Yogyakarta</strong>. rumahsakitjogja.jogjakota.go.id, diakses 28 September 2026')}</li>
              <li>${ext(L.rsij, 'RS Islam Jakarta Cempaka Putih. <strong>Terapi Wicara Anak: Kapan Orang Tua Harus Mulai, Biaya, dan Prosedur di RSIJ</strong> (30 Juni 2026). rsij.co.id, diakses 28 September 2026')}</li>
              <li>${ext(L.kontan, 'Kontan. <strong>Pemotongan Manfaat BPJS Berisiko Putus Terapi Anak Berkebutuhan Khusus</strong> (13 Juni 2024). nasional.kontan.co.id, diakses 28 September 2026')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat informasi umum, <strong>bukan rekomendasi dan bukan nasihat medis</strong>. YUKA tidak memiliki hubungan kerja sama dengan rumah sakit yang disebut. Tarif dikutip dari sumber resmi masing-masing pada 28 September 2026 dan bisa berubah, jadi konfirmasi langsung sebelum datang.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Berapa%20Biaya%20Terapi%20Bicara%20Anak%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Berapa%20Biaya%20Terapi%20Bicara%20Anak&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

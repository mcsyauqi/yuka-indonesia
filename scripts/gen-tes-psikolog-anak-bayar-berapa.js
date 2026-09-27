#!/usr/bin/env node
'use strict';

// One-time generator for artikel/tes-psikolog-anak-bayar-berapa.html (catchup 2026-09-28, kartu 3GnIK32K).
// Skeleton from scripts/gen-tempat-terapi-anak-jogja.js. Every price is copied from an official dated
// government hospital document (RSUD Kota Yogyakarta Perwali 53/2021, RSJ Grhasia DIY tarif retribusi, RSJ Menur).
// No private clinic prices, no YUKA paid service promotion.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'tes-psikolog-anak-bayar-berapa';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Tes Psikolog Anak Bayar Berapa? Tarif Resmi RS Pemerintah';
const META_DESC = 'Tes psikolog anak bayar berapa? Lihat tarif resmi tes psikologi di RS pemerintah Yogyakarta dan Jawa Timur beserta sumbernya. Cek rinciannya di sini.';
const OG_TITLE = 'Tes Psikolog Anak Bayar Berapa? Tarif Resmi dari RS Pemerintah dan Faktor yang Menentukan Biaya';
const OG_DESC = 'Tarif tes psikologi anak dari dokumen resmi RSUD Kota Yogyakarta, RS Jiwa Grhasia DIY, dan RS Jiwa Menur, plus faktor yang membuat total biaya berbeda.';
const H1 = 'Tes Psikolog Anak Bayar Berapa? Tarif Resmi dari RS Pemerintah dan Faktor yang Menentukan Biaya';
const IMAGE_URL = `${SITE}/Logo/Logo.webp`;
const IMAGE_HERO_ALT = 'Logo YUKA - Yayasan Ukhuwah Kaffah Amanatullah';
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T09:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T09:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  rsud: 'https://rumahsakitjogja.jogjakota.go.id/assets/download/regulasi/05_TARIF_RUMAH_SAKIT_PADA_RUMAH_SAKIT_UMUM_DAERAH.pdf',
  grhasia: 'https://grhasia.jogjaprov.go.id/file/preview/556?hash=8139d12434d310cf9d8607ab794b8420&updated_at=07-01-25+14:55:47',
  menur: 'https://rsmenur.jatimprov.go.id/tarif-pelayanan/'
};
const ext = (href, text) => `<a href="${href.replace(/&/g, '&amp;')}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  { q: 'Tes psikolog anak bayar berapa di rumah sakit pemerintah?', a: 'Tergantung rumah sakit dan jenis tesnya. Contoh dari dokumen tarif resmi: di RSUD Kota Yogyakarta (Peraturan Walikota Yogyakarta Nomor 53 Tahun 2021) tes WISC tercantum Rp82.500 dan tes Denver Rp27.500, di luar biaya pendaftaran dan konsultasi. Di RS Jiwa Menur Surabaya, tes IQ tercantum Rp150.000.' },
  { q: 'Kenapa total biaya tes psikologi anak bisa lebih mahal dari tarif satu tes?', a: 'Pemeriksaan anak biasanya terdiri dari beberapa komponen: pendaftaran, konsultasi atau wawancara awal, satu atau beberapa alat tes, dan pembuatan laporan hasil. Tiap komponen punya tarif sendiri, jadi totalnya adalah penjumlahan dari yang benar-benar dijalani anak.' },
  { q: 'Apakah tes psikologi anak ditanggung BPJS Kesehatan?', a: 'Penjaminan mengikuti indikasi medis, alur rujukan berjenjang, dan kebijakan rumah sakit yang berlaku. Tes untuk keperluan administrasi seperti pendaftaran sekolah umumnya diperlakukan berbeda dari pemeriksaan atas indikasi medis. Tanyakan langsung ke fasilitas kesehatan tingkat pertama dan bagian pendaftaran rumah sakit tujuan.' },
  { q: 'Tes apa yang biasanya dipakai untuk mengukur kecerdasan anak?', a: 'Dokumen tarif RSUD Kota Yogyakarta mencantumkan beberapa alat tes kecerdasan, antara lain WISC, Binet, CFIT, dan SPM-CPM. Psikolog yang memilih alat tes sesuai usia anak dan tujuan pemeriksaan.' },
  { q: 'Apa yang perlu ditanyakan sebelum mendaftar tes psikologi anak?', a: 'Tanyakan komponen apa saja yang termasuk dalam biaya, berapa kali anak perlu datang, apakah ada sesi penjelasan hasil untuk orang tua, kapan laporan tertulis selesai, dan apakah laporan itu dikenai biaya terpisah.' }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Tes Psikolog Anak Bayar Berapa', item: CANONICAL }
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
  keywords: 'tes psikolog anak bayar berapa, biaya tes psikologi anak, tarif tes iq anak, biaya psikolog anak rsud',
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
    <meta name="keywords" content="tes psikolog anak bayar berapa, biaya tes psikologi anak, tarif tes IQ anak, YUKA">
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
                <span class="current">Tes Psikolog Anak Bayar Berapa</span>
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


    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> tes psikolog anak bayar berapa tergantung tempat, jenis tes, dan berapa komponen pemeriksaan yang dijalani. Di rumah sakit pemerintah, tarif per alat tes tercantum di dokumen resmi. Contohnya, di RSUD Kota Yogyakarta tes WISC tercantum Rp82.500 dan konsultasi psikotes Rp82.000; di RS Jiwa Grhasia DIY psikotes sederhana sampai kompleks tercantum Rp70.000 sampai Rp250.000; di RS Jiwa Menur Surabaya tes IQ tercantum Rp150.000. Total yang dibayar biasanya lebih besar dari satu baris tarif, karena ada pendaftaran, konsultasi, dan laporan hasil.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Semua angka di artikel ini diambil dari dokumen tarif yang dipublikasikan sendiri oleh rumah sakit pemerintah, dan dicek pada 28 September 2026. Tarif bisa diperbarui sewaktu-waktu lewat peraturan baru, jadi perlakukan angka di bawah sebagai gambaran, lalu konfirmasi ke rumah sakit sebelum datang. Kami sengaja tidak mencantumkan tarif klinik atau biro swasta karena tidak ada dokumen resmi bertanggal yang bisa diperiksa pembaca.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#kapan">Kapan anak perlu tes psikologi</a></li>
                    <li><a href="#rsud-jogja">Tarif di RSUD Kota Yogyakarta</a></li>
                    <li><a href="#grhasia">Tarif di RS Jiwa Grhasia DIY</a></li>
                    <li><a href="#menur">Tarif di RS Jiwa Menur Surabaya</a></li>
                    <li><a href="#faktor">Faktor yang menentukan total biaya</a></li>
                    <li><a href="#bpjs">Soal BPJS Kesehatan dan asuransi</a></li>
                    <li><a href="#persiapan">Cara menyiapkan anak dan pertanyaan untuk rumah sakit</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="kapan">Kapan Anak Perlu Tes Psikologi</h2>
            <p>Orang tua biasanya mencari tes psikolog anak untuk salah satu dari dua keperluan. Pertama, keperluan administrasi, misalnya syarat masuk sekolah atau pemetaan minat. Kedua, keperluan klinis, yaitu ketika ada kekhawatiran pada perkembangan anak: <a href="/artikel/speech-delay-adalah">terlambat bicara</a>, sulit fokus seperti pada <a href="/artikel/adhd-adalah">ADHD</a>, tanda-tanda <a href="/artikel/autisme-adalah">autisme</a>, atau kesulitan belajar seperti <a href="/artikel/disleksia-adalah">disleksia</a>.</p>
            <p>Tujuan ini penting karena menentukan tes yang dipakai dan akhirnya biayanya. Pemeriksaan klinis biasanya diawali wawancara dengan orang tua, lalu satu atau beberapa alat tes, lalu penjelasan hasil. Gambaran lengkap proses asesmen ada di artikel <a href="/artikel/asesmen-abk">asesmen anak berkebutuhan khusus</a>. Kalau yang ingin Anda ketahui adalah arti skor kecerdasan, baca <a href="/artikel/berapa-iq-anak-yang-normal">berapa IQ anak yang normal</a>.</p>

            <h2 id="rsud-jogja">Tarif Tes Psikologi di RSUD Kota Yogyakarta</h2>
            <p>RSUD Kota Yogyakarta (Rumah Sakit Jogja) mempublikasikan Peraturan Walikota Yogyakarta Nomor 53 Tahun 2021 tentang Tarif Rumah Sakit, ditetapkan 21 Juli 2021, di situs resminya. Bagian "Pelayanan Psikologi" pada lampirannya memuat tarif per alat tes. Berikut baris yang paling relevan untuk anak:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Layanan (sesuai dokumen)</th><th>Tarif</th><th>Keterangan umum</th></tr>
                </thead>
                <tbody>
                    <tr><td>Konsultasi Psikotes</td><td>Rp82.000</td><td>Konsultasi terkait pemeriksaan psikologi</td></tr>
                    <tr><td>Tes WISC</td><td>Rp82.500</td><td>Tes kecerdasan untuk anak usia sekolah</td></tr>
                    <tr><td>Tes Binnet (Binet)</td><td>Rp82.500</td><td>Tes kecerdasan</td></tr>
                    <tr><td>Tes CFIT</td><td>Rp44.500</td><td>Tes kecerdasan nonverbal</td></tr>
                    <tr><td>Tes SPM-CPM</td><td>Rp44.500</td><td>Tes penalaran nonverbal (matriks progresif)</td></tr>
                    <tr><td>Tes Denver</td><td>Rp27.500</td><td>Skrining perkembangan anak usia dini</td></tr>
                    <tr><td>Tes CHAT - CARS</td><td>Rp27.500</td><td>Instrumen terkait gejala autisme</td></tr>
                    <tr><td>Tes Conners - Kuesioner GPPH</td><td>Rp27.500</td><td>Kuesioner gejala gangguan pemusatan perhatian dan hiperaktivitas</td></tr>
                    <tr><td>Tes VSMS / Tes VABS</td><td>Rp27.500 / Rp44.500</td><td>Skala kematangan sosial dan perilaku adaptif</td></tr>
                    <tr><td>Konsultasi Psikologi (60 menit atau kurang / lebih dari 60 menit)</td><td>Rp50.000 / Rp105.000</td><td>Tarif konsultasi rawat jalan</td></tr>
                    <tr><td>Surat keterangan hasil pemeriksaan psikologi (untuk asuransi)</td><td>Rp30.000</td><td>Tercantum di bagian surat keterangan asuransi</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sumber: ${ext(L.rsud, 'Peraturan Walikota Yogyakarta Nomor 53 Tahun 2021, dokumen di rumahsakitjogja.jogjakota.go.id')}, diakses 28 September 2026. Kolom keterangan adalah penjelasan umum dari kami, bukan bagian dokumen. Peraturan ini terbit tahun 2021, jadi tanyakan ke rumah sakit apakah tarifnya sudah diperbarui.</p>

            <h2 id="grhasia">Tarif di RS Jiwa Grhasia DIY</h2>
            <p>RS Jiwa Grhasia milik Pemerintah Daerah DIY mempublikasikan daftar tarif retribusinya dengan dasar Perda DIY Nomor 11 Tahun 2023 dan Pergub DIY Nomor 3 Tahun 2024 (berkas diunggah 7 Januari 2025). Bagian Klinik Psikologi tidak memakai nama alat tes, tetapi tingkat kerumitan:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Layanan Klinik Psikologi</th><th>Tarif</th></tr>
                </thead>
                <tbody>
                    <tr><td>Assesment Dasar</td><td>Rp30.000</td></tr>
                    <tr><td>Skrining Anak</td><td>Rp40.000</td></tr>
                    <tr><td>Psikotes Sederhana</td><td>Rp70.000</td></tr>
                    <tr><td>Psikotes Sedang</td><td>Rp130.000</td></tr>
                    <tr><td>Psikotes Komplek</td><td>Rp250.000</td></tr>
                    <tr><td>Psikoterapi Anak Dasar / Sedang</td><td>Rp70.000 / Rp80.000</td></tr>
                    <tr><td>Pemeriksaan DDST (Denver Development Screening Test) di Klinik Anak dan Tumbuh Kembang</td><td>Rp48.000</td></tr>
                    <tr><td>Kunjungan dan konsul klinik spesialis (Klinik Anak dan Tumbuh Kembang)</td><td>Rp97.000</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sumber: ${ext(L.grhasia, 'Tarif Retribusi RS Jiwa Grhasia DIY, grhasia.jogjaprov.go.id')}, diakses 28 September 2026. Dokumen tidak menjelaskan tes apa yang masuk kategori sederhana, sedang, atau kompleks, jadi tanyakan ke petugas pendaftaran kategori mana yang sesuai dengan kebutuhan anak Anda.</p>

            <h2 id="menur">Tarif di RS Jiwa Menur Surabaya</h2>
            <p>Sebagai pembanding dari provinsi lain, RS Jiwa Menur milik Pemerintah Provinsi Jawa Timur mencantumkan tarif psikologi di halaman "Tarif Pelayanan" (halaman terakhir diperbarui 31 Agustus 2026):</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Layanan Psikologi</th><th>Tarif</th></tr>
                </thead>
                <tbody>
                    <tr><td>Tes IQ (Intelegency)</td><td>Rp150.000</td></tr>
                    <tr><td>Tes Kepribadian</td><td>Rp150.000</td></tr>
                    <tr><td>Tes Minat Bakat</td><td>Rp250.000</td></tr>
                    <tr><td>Tes Penjurusan</td><td>Rp250.000</td></tr>
                    <tr><td>Konseling Psikolog (Reguler / Eksekutif)</td><td>Rp150.000 / Rp250.000</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sumber: ${ext(L.menur, 'Tarif Pelayanan, rsmenur.jatimprov.go.id')}, diakses 28 September 2026. Halaman ini tidak menyebut apakah tarif berlaku khusus untuk anak atau dewasa.</p>

            <h2 id="faktor">Faktor yang Menentukan Total Biaya</h2>
            <p>Tiga dokumen di atas menunjukkan satu pola: yang tercantum adalah tarif per komponen, bukan harga paket "tes psikolog anak". Total yang Anda bayar dipengaruhi oleh:</p>
            <ul>
                <li><strong>Tujuan pemeriksaan.</strong> Tes kecerdasan untuk syarat sekolah biasanya lebih ringkas daripada asesmen untuk mencari tahu penyebab keterlambatan perkembangan.</li>
                <li><strong>Jumlah alat tes.</strong> Asesmen klinis sering memakai lebih dari satu alat, misalnya tes kecerdasan ditambah kuesioner perilaku. Setiap alat punya tarif sendiri.</li>
                <li><strong>Konsultasi dan pendaftaran.</strong> Wawancara awal dengan orang tua dan sesi penjelasan hasil bisa ditagih sebagai konsultasi terpisah, belum termasuk biaya pendaftaran atau kunjungan poliklinik.</li>
                <li><strong>Laporan tertulis.</strong> Surat keterangan atau laporan hasil kadang dikenai biaya tersendiri, seperti terlihat di dokumen RSUD Kota Yogyakarta.</li>
                <li><strong>Jenis layanan dan kelas.</strong> RS Jiwa Menur, misalnya, membedakan konseling reguler dan eksekutif.</li>
                <li><strong>Jenis lembaga.</strong> Klinik, biro psikologi, dan praktik psikolog swasta menetapkan tarif sendiri. Mintalah rincian tertulis sebelum pemeriksaan dimulai.</li>
            </ul>

            <h2 id="bpjs">Soal BPJS Kesehatan dan Asuransi</h2>
            <p>Apakah tes psikologi anak ditanggung BPJS Kesehatan tidak bisa dijawab dengan satu kalimat. Penjaminan mengikuti indikasi medis, alur rujukan berjenjang dari fasilitas kesehatan tingkat pertama, dan kebijakan rumah sakit tujuan. Pemeriksaan untuk keperluan administrasi, seperti syarat pendaftaran sekolah, umumnya diperlakukan berbeda dari pemeriksaan karena ada keluhan perkembangan.</p>
            <p>Langkah paling aman: datang dulu ke Puskesmas atau dokter keluarga tempat anak terdaftar, sampaikan keluhannya, lalu tanyakan apakah rujukan ke layanan psikologi di rumah sakit bisa diberikan. Untuk asuransi swasta, periksa polis atau tanyakan ke penyedia apakah pemeriksaan psikologi termasuk manfaat rawat jalan.</p>

            <h2 id="persiapan">Cara Menyiapkan Anak dan Pertanyaan untuk Rumah Sakit</h2>
            <ol>
                <li><strong>Tulis alasan pemeriksaan.</strong> Catat contoh konkret perilaku atau kesulitan anak, sejak kapan terlihat, dan apa kata guru. Bawa buku KIA dan rapor bila ada.</li>
                <li><strong>Pastikan anak cukup tidur dan sudah makan.</strong> Hasil tes bisa terpengaruh kondisi anak saat itu.</li>
                <li><strong>Jelaskan dengan bahasa sederhana.</strong> Katakan anak akan bermain dan mengerjakan beberapa tugas bersama ibu atau bapak psikolog, bukan "diuji".</li>
                <li><strong>Tanyakan rincian biaya sebelum mulai:</strong> komponen apa saja yang ditagih, berapa kali perlu datang, apakah ada sesi penjelasan hasil, dan berapa lama laporan tertulis selesai.</li>
                <li><strong>Minta rekomendasi tindak lanjut.</strong> Hasil tes paling berguna bila diikuti rencana, misalnya rujukan terapi. Panduan mencari layanan terapi di Yogyakarta ada di artikel <a href="/artikel/tempat-terapi-anak-jogja">tempat terapi anak Jogja</a>.</li>
            </ol>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/asesmen-abk">Asesmen ABK</a></h4>
                    <p>Proses asesmen sebelum program pendampingan disusun.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/berapa-iq-anak-yang-normal">Berapa IQ Anak yang Normal</a></h4>
                    <p>Cara membaca skor kecerdasan anak.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/tempat-terapi-anak-jogja">Tempat Terapi Anak Jogja</a></h4>
                    <p>Jalur layanan terapi anak di Yogyakarta.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#TesPsikologi</a>
            <a href="#">#PsikologAnak</a>
            <a href="#">#TumbuhKembang</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.rsud, 'Walikota Yogyakarta. <strong>Peraturan Walikota Yogyakarta Nomor 53 Tahun 2021 tentang Tarif Rumah Sakit pada RSUD Kota Yogyakarta</strong> (ditetapkan 21 Juli 2021). rumahsakitjogja.jogjakota.go.id, diakses 28 September 2026')}</li>
              <li>${ext(L.grhasia, 'RS Jiwa Grhasia DIY. <strong>Tarif Retribusi RS Jiwa Grhasia DIY berdasarkan Perda 11 Tahun 2023 dan Pergub 3 Tahun 2024</strong> (diunggah 7 Januari 2025). grhasia.jogjaprov.go.id, diakses 28 September 2026')}</li>
              <li>${ext(L.menur, 'RS Jiwa Menur Provinsi Jawa Timur. <strong>Tarif Pelayanan</strong> (diperbarui 31 Agustus 2026). rsmenur.jatimprov.go.id, diakses 28 September 2026')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat informasi umum, <strong>bukan rekomendasi dan bukan nasihat medis</strong>. YUKA tidak memiliki hubungan kerja sama dengan rumah sakit yang disebut. Tarif dikutip dari dokumen resmi masing-masing pada 28 September 2026 dan bisa berubah, jadi konfirmasi langsung sebelum datang.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Tes%20Psikolog%20Anak%20Bayar%20Berapa%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Tes%20Psikolog%20Anak%20Bayar%20Berapa&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

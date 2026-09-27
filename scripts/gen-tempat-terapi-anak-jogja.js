#!/usr/bin/env node
'use strict';

// One-time generator for artikel/tempat-terapi-anak-jogja.html
// (catchup 2026-09-28, kartu RUWPXzgo). Skeleton copied from scripts/gen-gangguan-makan-anak-abk.js.
// Every hospital row was checked on 2026-09-28 against the hospital's own page (name, address, listed therapy):
// - RS PKU Muhammadiyah Yogyakarta: https://rspkujogja.com/poliklinik/terapi-tumbuh-kembang-anak/
// - RSUD Kota Yogyakarta: https://rumahsakitjogja.jogjakota.go.id/pelayanan/rehab_medik
// - RSA UGM: https://rsa.ugm.ac.id/rehabilitasi-medik-2/
// No prices, no ratings, no recommendation. No photo: no licensed current photo of these hospitals on Commons.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'tempat-terapi-anak-jogja';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Tempat Terapi Anak Jogja: Pilihan dan Cara Memilih';
const META_DESC = 'Tempat terapi anak Jogja: jalur rumah sakit, klinik, dan yayasan, daftar RS dengan layanan terapi resmi, serta cara memilihnya. Baca panduannya.';
const OG_TITLE = 'Tempat Terapi Anak Jogja: Jalur Layanan, Daftar Rumah Sakit, dan Cara Memilih';
const OG_DESC = 'Panduan orang tua mencari tempat terapi wicara, okupasi, sensori integrasi, dan fisioterapi anak di Yogyakarta, lengkap dengan daftar periksa sebelum mendaftar.';
const H1 = 'Tempat Terapi Anak Jogja: Jalur Layanan, Daftar Rumah Sakit, dan Cara Memilih';
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
  pku: 'https://rspkujogja.com/poliklinik/terapi-tumbuh-kembang-anak/',
  rsud: 'https://rumahsakitjogja.jogjakota.go.id/pelayanan/rehab_medik',
  rsa: 'https://rsa.ugm.ac.id/rehabilitasi-medik-2/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  { q: 'Di mana tempat terapi anak di Jogja?', a: 'Tempat terapi anak di Jogja tersedia di rumah sakit (unit rehabilitasi medik atau klinik tumbuh kembang), klinik dan rumah terapi swasta, serta sekolah atau yayasan anak berkebutuhan khusus. Contoh rumah sakit yang mencantumkan layanan terapi di situs resminya adalah RS PKU Muhammadiyah Yogyakarta, RSUD Kota Yogyakarta, dan Rumah Sakit Akademik UGM.' },
  { q: 'Apakah terapi anak harus lewat rujukan dokter?', a: 'Klinik swasta umumnya menerima pendaftaran langsung, tetapi pemeriksaan dokter anak tetap disarankan lebih dulu agar penyebab medis tersingkir dan jenis terapi yang dipilih tepat. Di rumah sakit, alur biasanya dimulai dari pemeriksaan dokter spesialis.' },
  { q: 'Terapi apa yang dibutuhkan anak saya?', a: 'Jenis terapi ditentukan dari hasil pemeriksaan dan asesmen, bukan dari gejala yang terlihat sekilas. Anak yang terlambat bicara bisa membutuhkan terapi wicara, sedangkan kesulitan motorik halus atau sensorik biasanya ditangani terapis okupasi.' },
  { q: 'Apakah terapi anak di rumah sakit bisa memakai BPJS?', a: 'Penjaminan BPJS Kesehatan mengikuti aturan rujukan berjenjang yang berlaku dan kebijakan rumah sakit. Tanyakan langsung ke Puskesmas atau fasilitas kesehatan pertama Anda serta ke bagian pendaftaran rumah sakit tujuan.' },
  { q: 'Bagaimana cara menilai apakah tempat terapi cocok?', a: 'Perhatikan apakah ada asesmen awal dan rencana tertulis, siapa terapisnya dan apa latar pendidikannya, seberapa sering orang tua menerima laporan kemajuan, serta apakah jadwal dan jaraknya realistis untuk dijalani berbulan-bulan.' }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Tempat Terapi Anak Jogja', item: CANONICAL }
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
  keywords: 'tempat terapi anak jogja, terapi anak yogyakarta, terapi wicara jogja, terapi okupasi jogja, klinik tumbuh kembang jogja',
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
    <meta name="keywords" content="tempat terapi anak jogja, terapi anak yogyakarta, klinik tumbuh kembang jogja, YUKA">
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
                <span class="current">Tempat Terapi Anak Jogja</span>
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
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> tempat terapi anak di Jogja umumnya ada di tiga jalur: unit rehabilitasi medik atau klinik tumbuh kembang di rumah sakit, klinik dan rumah terapi swasta, serta sekolah atau yayasan yang punya program terapi. Jalur yang paling aman untuk memulai adalah pemeriksaan dokter anak, karena dokter yang menentukan terapi apa yang dibutuhkan. Artikel ini memuat beberapa rumah sakit di Yogyakarta yang layanan terapinya tercantum di situs resminya, plus cara memilih tempat terapi mana pun secara mandiri.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Daftar di artikel ini <strong>bukan rekomendasi, bukan peringkat, dan bukan kerja sama</strong> antara YUKA dan lembaga yang disebut. Kami hanya mencantumkan tempat yang nama, alamat, dan layanan terapinya bisa dicek di situs resmi lembaga itu sendiri pada 28 September 2026. Jadwal, tenaga terapis, dan biaya bisa berubah sewaktu-waktu, jadi selalu konfirmasi langsung ke tempat terapi sebelum datang.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#jenis-terapi">Jenis terapi anak yang paling sering dicari</a></li>
                    <li><a href="#jalur">Tiga jalur tempat terapi anak di Jogja</a></li>
                    <li><a href="#rumah-sakit">Rumah sakit di Yogyakarta dengan layanan terapi tercantum resmi</a></li>
                    <li><a href="#langkah">Langkah sebelum mendaftar terapi</a></li>
                    <li><a href="#memilih">Cara memilih tempat terapi anak</a></li>
                    <li><a href="#pertanyaan">Pertanyaan yang perlu diajukan saat survei</a></li>
                    <li><a href="#rumah">Peran orang tua di antara sesi terapi</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="jenis-terapi">Jenis Terapi Anak yang Paling Sering Dicari</h2>
            <p>Sebelum mencari tempat terapi anak di Jogja, pahami dulu jenis terapinya. Satu tempat belum tentu menyediakan semua jenis, dan tiap jenis ditangani profesi yang berbeda.</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Jenis terapi</th><th>Fokus utama</th><th>Contoh kondisi yang sering dirujuk</th></tr>
                </thead>
                <tbody>
                    <tr><td><a href="/artikel/terapi-wicara">Terapi wicara</a></td><td>Bahasa, bicara, suara, kelancaran, dan fungsi menelan</td><td><a href="/artikel/speech-delay-adalah">Speech delay</a>, gangguan artikulasi, kesulitan menelan</td></tr>
                    <tr><td><a href="/artikel/terapi-okupasi">Terapi okupasi</a></td><td>Kemandirian aktivitas sehari-hari, motorik halus, dan pengolahan sensorik</td><td>Keterlambatan tumbuh kembang, kesulitan menulis atau makan sendiri</td></tr>
                    <tr><td><a href="/artikel/sensori-integrasi">Sensori integrasi</a></td><td>Cara anak mengolah rangsang sentuhan, gerak, suara, dan keseimbangan</td><td>Anak sangat peka atau justru kurang responsif terhadap rangsang</td></tr>
                    <tr><td>Fisioterapi anak</td><td>Gerak, kekuatan otot, dan keseimbangan</td><td><a href="/artikel/cerebral-palsy-adalah">Cerebral palsy</a>, terlambat duduk atau berjalan</td></tr>
                    <tr><td><a href="/artikel/terapi-aba">Terapi perilaku</a></td><td>Keterampilan sosial, komunikasi, dan perilaku sehari-hari</td><td><a href="/artikel/autisme-adalah">Autisme</a>, ADHD</td></tr>
                </tbody>
            </table>
            </div>
            <p>Penjelasan lebih lengkap tentang tiap jenis ada di artikel <a href="/artikel/macam-macam-terapi-pada-anak">macam-macam terapi pada anak</a>. Kalau Anda bingung membedakan dua terapi yang paling sering tertukar, baca <a href="/artikel/perbedaan-terapi-okupasi-dan-terapi-wicara">perbedaan terapi okupasi dan terapi wicara</a>.</p>

            <h2 id="jalur">Tiga Jalur Tempat Terapi Anak di Jogja</h2>
            <p>Di Yogyakarta dan sekitarnya (Sleman, Bantul, Kulon Progo, Gunungkidul), layanan terapi anak biasanya tersedia lewat tiga jalur berikut.</p>
            <h3>1. Rumah sakit (rehabilitasi medik atau klinik tumbuh kembang)</h3>
            <p>Di rumah sakit, terapi biasanya berada di bawah instalasi rehabilitasi medik atau poliklinik tumbuh kembang anak. Kelebihannya, anak diperiksa dokter lebih dulu sehingga penyebab medis bisa dicari, dan terapinya terhubung dengan dokter spesialis lain bila dibutuhkan. Antrean dan jadwal bisa lebih padat.</p>
            <h3>2. Klinik dan rumah terapi swasta</h3>
            <p>Jumlahnya banyak, terutama di Kota Yogyakarta dan Sleman. Jadwal biasanya lebih fleksibel dan sebagian menawarkan paket sesi rutin. Kualitasnya bervariasi, jadi cek izin, latar belakang terapis, dan cara mereka menyusun program sebelum mendaftar.</p>
            <h3>3. Sekolah atau yayasan dengan program terapi</h3>
            <p>Beberapa sekolah luar biasa, sekolah inklusi, dan yayasan anak berkebutuhan khusus menyediakan terapi yang terhubung dengan kegiatan belajar. Pilihan ini cocok bila Anda ingin terapi dan pendidikan berjalan dalam satu rencana. Panduan menilai lembaga semacam ini ada di artikel <a href="/artikel/memilih-yayasan-anak-berkebutuhan-khusus">memilih yayasan anak berkebutuhan khusus</a>.</p>

            <h2 id="rumah-sakit">Rumah Sakit di Yogyakarta dengan Layanan Terapi Tercantum Resmi</h2>
            <p>Tabel ini hanya memuat rumah sakit yang halaman resminya menyebut layanan terapi secara langsung. Urutannya alfabetis dan tidak menunjukkan kualitas. Tidak masuk daftar bukan berarti sebuah tempat tidak menyediakan terapi, hanya berarti kami belum menemukan informasinya di sumber resmi.</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Rumah sakit</th><th>Alamat</th><th>Layanan terapi yang tercantum</th><th>Sumber</th></tr>
                </thead>
                <tbody>
                    <tr><td>RS PKU Muhammadiyah Yogyakarta</td><td>Jl. KH. Ahmad Dahlan No. 20, Yogyakarta</td><td>Poliklinik Terapi Tumbuh Kembang Anak: terapi okupasi, fisioterapi anak, terapi wicara, dan stimulasi sensori integrasi, untuk anak dengan keterlambatan perkembangan, gangguan motorik, spektrum autisme, dan ADHD</td><td>${ext(L.pku, 'rspkujogja.com')}</td></tr>
                    <tr><td>RSUD Kota Yogyakarta (Rumah Sakit Jogja)</td><td>Jl. Wirosaban No. 1, Yogyakarta</td><td>Rehabilitasi medik: fisioterapi, okupasi terapi (termasuk untuk keterlambatan tumbuh kembang), dan terapi wicara</td><td>${ext(L.rsud, 'rumahsakitjogja.jogjakota.go.id')}</td></tr>
                    <tr><td>Rumah Sakit Akademik UGM</td><td>Jl. Kabupaten (Lingkar Utara), Kronggahan, Trihanggo, Gamping, Sleman 55291</td><td>Rehabilitasi medik: fisioterapi, terapi okupasi, terapi wicara, dan ortotik prostetik, dikoordinasi dokter spesialis rehabilitasi medik. Halamannya juga menyebut layanan Psikologi Anak dan Cerebral Palsy Center</td><td>${ext(L.rsa, 'rsa.ugm.ac.id')}</td></tr>
                </tbody>
            </table>
            </div>
            <p>Beberapa hal yang perlu diperhatikan dari tabel di atas:</p>
            <ul>
                <li><strong>Jadwal dan alur pendaftaran</strong> tiap rumah sakit berbeda. Sebagian mengharuskan anak diperiksa dokter spesialis lebih dulu sebelum dijadwalkan terapi.</li>
                <li><strong>Penjaminan BPJS Kesehatan atau asuransi</strong> tergantung aturan rujukan yang berlaku saat itu. Tanyakan langsung ke bagian pendaftaran rumah sakit.</li>
                <li><strong>Biaya tidak kami cantumkan</strong> karena tarif berubah dan berbeda per jenis sesi. Minta rincian tertulis saat mendaftar.</li>
            </ul>

            <h2 id="langkah">Langkah Sebelum Mendaftar Terapi</h2>
            <ol>
                <li><strong>Catat hal yang Anda khawatirkan.</strong> Tulis contoh konkret: kata yang sudah bisa diucapkan, kapan anak mulai duduk atau berjalan, perilaku yang sulit ditangani. Bawa buku KIA anak.</li>
                <li><strong>Periksakan ke dokter anak.</strong> Pemeriksaan tumbuh kembang awal bisa dimulai dari Puskesmas atau dokter anak, yang lalu merujuk ke dokter spesialis atau unit terapi bila perlu.</li>
                <li><strong>Jalani asesmen.</strong> Terapi yang tepat disusun dari hasil asesmen, bukan dari tebakan. Gambaran prosesnya ada di artikel <a href="/artikel/asesmen-abk">asesmen anak berkebutuhan khusus</a>.</li>
                <li><strong>Tetapkan tujuan terapi bersama terapis.</strong> Tujuan yang jelas dan terukur memudahkan Anda menilai kemajuan setelah beberapa bulan.</li>
            </ol>

            <h2 id="memilih">Cara Memilih Tempat Terapi Anak</h2>
            <p>Apa pun jalurnya, gunakan daftar periksa berikut untuk menilai tempat terapi anak di Jogja:</p>
            <ul>
                <li><strong>Izin dan latar belakang terapis.</strong> Terapis wicara, terapis okupasi, dan fisioterapis adalah tenaga kesehatan dengan pendidikan khusus. Tanyakan latar pendidikan dan surat izin praktiknya.</li>
                <li><strong>Ada asesmen awal dan rencana tertulis.</strong> Tempat yang baik menjelaskan hasil asesmen dan tujuan terapi kepada orang tua, bukan langsung menjual paket sesi.</li>
                <li><strong>Laporan kemajuan berkala.</strong> Tanyakan seberapa sering orang tua menerima laporan dan dilibatkan dalam evaluasi.</li>
                <li><strong>Orang tua boleh mengamati.</strong> Tempat yang terbuka memberi kesempatan orang tua melihat sesi atau mendapat penjelasan tentang apa yang dilatih.</li>
                <li><strong>Jarak dan jadwal yang realistis.</strong> Terapi biasanya berlangsung rutin selama berbulan-bulan. Tempat yang terlalu jauh membuat anak lelah dan sesi sering terlewat.</li>
                <li><strong>Waspadai janji yang terlalu muluk.</strong> Hindari tempat yang menjanjikan anak "sembuh" dalam waktu singkat atau menawarkan metode tanpa dasar ilmiah.</li>
            </ul>

            <h2 id="pertanyaan">Pertanyaan yang Perlu Diajukan Saat Survei</h2>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Topik</th><th>Pertanyaan</th></tr>
                </thead>
                <tbody>
                    <tr><td>Asesmen</td><td>Apakah ada asesmen awal? Siapa yang melakukannya, dan apakah hasilnya diberikan tertulis?</td></tr>
                    <tr><td>Terapis</td><td>Apakah terapis anak saya tetap orang yang sama setiap sesi?</td></tr>
                    <tr><td>Program</td><td>Apa tujuan terapi tiga bulan pertama, dan bagaimana cara mengukurnya?</td></tr>
                    <tr><td>Keterlibatan orang tua</td><td>Latihan apa yang perlu dilakukan di rumah, dan bagaimana kami diajari?</td></tr>
                    <tr><td>Biaya dan jadwal</td><td>Berapa biaya per sesi atau per paket, apa kebijakan bila sesi batal, dan apakah bisa memakai BPJS atau asuransi?</td></tr>
                    <tr><td>Kerja sama</td><td>Bisakah terapis berkoordinasi dengan dokter dan guru di sekolah anak?</td></tr>
                </tbody>
            </table>
            </div>

            <h2 id="rumah">Peran Orang Tua di Antara Sesi Terapi</h2>
            <p>Sesi terapi hanya berlangsung beberapa jam dalam seminggu, sedangkan anak menghabiskan sebagian besar waktunya di rumah dan sekolah. Karena itu, latihan yang diajarkan terapis perlu diteruskan di keseharian: saat makan, mandi, bermain, dan berangkat sekolah.</p>
            <ul>
                <li>Minta terapis menuliskan dua atau tiga latihan sederhana untuk dikerjakan di rumah.</li>
                <li>Catat perubahan kecil setiap minggu agar evaluasi dengan terapis lebih objektif.</li>
                <li>Bagikan rencana terapi kepada guru supaya pendekatan di rumah dan sekolah sejalan.</li>
                <li>Jaga kesehatan diri sendiri. Pendampingan jangka panjang butuh orang tua yang juga cukup istirahat.</li>
            </ul>

            <div class="story-highlight">
                <h3>Layanan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA juga menjalankan pendidikan inklusi dan program terapi untuk anak berkebutuhan khusus di Sleman. Informasi layanannya ada di halaman <a href="/terapi-wicara-jogja">terapi wicara Jogja</a>, <a href="/terapi-okupasi-sleman">terapi okupasi Sleman</a>, dan <a href="/terapi-sensori-integrasi-yogyakarta">terapi sensori integrasi Yogyakarta</a>. Tetap gunakan daftar periksa di atas untuk menilai tempat mana pun, termasuk YUKA.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/terapis-speech-delay">Terapis Speech Delay</a></h4>
                    <p>Peran terapis wicara untuk anak yang terlambat bicara.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/macam-macam-terapi-pada-anak">Macam-Macam Terapi pada Anak</a></h4>
                    <p>Mengenal pilihan terapi untuk anak berkebutuhan khusus.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/asesmen-abk">Asesmen ABK</a></h4>
                    <p>Proses asesmen sebelum program terapi disusun.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#TerapiAnak</a>
            <a href="#">#Jogja</a>
            <a href="#">#TerapiWicara</a>
            <a href="#">#TerapiOkupasi</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.pku, 'RS PKU Muhammadiyah Yogyakarta. <strong>Terapi Tumbuh Kembang Anak</strong>. rspkujogja.com, diakses 28 September 2026')}</li>
              <li>${ext(L.rsud, 'RSUD Kota Yogyakarta. <strong>Pelayanan Rehabilitasi Medik</strong>. rumahsakitjogja.jogjakota.go.id, diakses 28 September 2026')}</li>
              <li>${ext(L.rsa, 'Rumah Sakit Akademik UGM. <strong>Rehabilitasi Medik</strong>. rsa.ugm.ac.id, diakses 28 September 2026')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat informasi umum, <strong>bukan rekomendasi dan bukan nasihat medis</strong>. YUKA tidak memiliki hubungan kerja sama dengan rumah sakit yang disebut. Data layanan dicek di situs resmi masing-masing pada 28 September 2026 dan bisa berubah, jadi konfirmasi langsung sebelum datang.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Tempat%20Terapi%20Anak%20Jogja%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Tempat%20Terapi%20Anak%20Jogja&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

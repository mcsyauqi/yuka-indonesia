#!/usr/bin/env node
'use strict';

// One-time generator for artikel/digital-therapeutics-untuk-adhd-anak.html (catchup 2026-09-28, kartu PCoEuXVZ).
// Skeleton from gen-terapi-okupasi-untuk-anak-cerebral-palsy.js. Card's Candi Plaosan tourist photo rejected as off-topic;
// hero = YUKA classroom documentation photo (no product image, no AI image).
// Claims checked 2026-09-28 against: FDA De Novo DEN200026 decision letter + database entry, Kollins dkk. 2020 PMID 33334505,
// Kollins dkk. 2021 PMID 33772095, AAP 2019 guideline PMID 31570648 (KAS 5b read in PMC7067282).

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'digital-therapeutics-untuk-adhd-anak';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Digital Therapeutics untuk ADHD Anak: Panduan Orang Tua';
const META_DESC = 'Digital therapeutics untuk ADHD anak: apa itu, cara kerja EndeavorRx yang diizinkan FDA, hasil uji klinis, dan batasannya. Baca panduannya.';
const OG_TITLE = 'Digital Therapeutics untuk ADHD Anak: Cara Kerja, Bukti, dan Batasannya';
const OG_DESC = 'Apa itu digital therapeutics untuk ADHD anak, apa kata FDA dan uji klinis tentang EndeavorRx, dan bagaimana orang tua menyikapinya dengan bijak.';
const H1 = 'Digital Therapeutics untuk ADHD Anak: Cara Kerja, Bukti Ilmiah, dan Batasannya';
const IMAGE = 'Dokumentasi/21-jan-2026-siswa-belajar-ruang-kelas-005.webp';
const IMAGE_ALT = 'Anak-anak belajar menulis dan membaca di lantai dan meja rendah dalam satu ruang kelas';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T18:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T18:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  fdaLetter: 'https://www.accessdata.fda.gov/cdrh_docs/pdf20/DEN200026.pdf',
  fdaDb: 'https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/denovo.cfm?id=DEN200026',
  stars: 'https://pubmed.ncbi.nlm.nih.gov/33334505/',
  adjunct: 'https://pubmed.ncbi.nlm.nih.gov/33772095/',
  aap: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7067282/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa itu digital therapeutics untuk ADHD anak?',
    a: 'Digital therapeutics adalah perangkat lunak yang dirancang dan diuji secara klinis untuk menangani suatu kondisi kesehatan. Untuk ADHD anak, contoh yang paling dikenal adalah EndeavorRx, program berbentuk video game yang diizinkan FDA Amerika Serikat pada Juni 2020 untuk memperbaiki fungsi atensi anak usia 8 sampai 12 tahun.'
  },
  {
    q: 'Apakah digital therapeutics bisa menggantikan obat atau terapi perilaku?',
    a: 'Tidak. Surat keputusan FDA untuk EndeavorRx mewajibkan peringatan bahwa perangkat ini tidak dimaksudkan sebagai terapi tunggal, dan menyebutnya sebagai bagian dari program terapi yang bisa mencakup terapi dari klinisi, obat, dan program pendidikan.'
  },
  {
    q: 'Apakah game edukasi biasa sama dengan digital therapeutics?',
    a: 'Tidak sama. Digital therapeutics melewati uji klinis dan penilaian regulator untuk klaim medis tertentu. Aplikasi atau game yang menyebut dirinya melatih fokus belum tentu pernah diuji, jadi klaimnya tidak bisa disamakan.'
  },
  {
    q: 'Apakah EndeavorRx mengurangi hiperaktivitas?',
    a: 'Belum tentu. Indikasi resmi dari FDA menyebut anak yang memakai EndeavorRx menunjukkan perbaikan pada ukuran atensi berbasis komputer (TOVA), dan mungkin tidak menunjukkan manfaat pada gejala perilaku seperti hiperaktivitas.'
  },
  {
    q: 'Apa yang sebaiknya dilakukan orang tua yang tertarik mencoba?',
    a: 'Mulailah dari diagnosis dan rencana terapi bersama dokter anak, psikiater anak, atau psikolog klinis. Tanyakan apakah program digital tertentu sesuai usia dan tipe ADHD anak, bagaimana memantaunya, dan bagaimana program itu dipadukan dengan terapi perilaku serta dukungan sekolah.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Digital Therapeutics untuk ADHD Anak', item: CANONICAL }
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
  keywords: 'digital therapeutics untuk adhd anak, EndeavorRx, terapi digital ADHD, ADHD anak, atensi anak',
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
    <meta name="keywords" content="digital therapeutics untuk adhd anak, EndeavorRx, terapi digital ADHD, YUKA">
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
                <span class="current">Digital Therapeutics untuk ADHD Anak</span>
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
            <img src="../${IMAGE}" alt="${IMAGE_ALT}" width="1209" height="907" fetchpriority="high" decoding="async">
            <figcaption>Belajar bersama di kelas tetap menjadi tempat utama anak melatih perhatian. Program digital, bila dipakai, hanya pelengkap. <span class="kredit">Foto: dokumentasi YUKA Indonesia</span></figcaption>
        </figure>
    </div>
    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> digital therapeutics untuk ADHD anak adalah perangkat lunak yang diuji secara klinis untuk membantu mengatasi gejala ADHD. Contoh paling dikenal adalah EndeavorRx, program berbentuk video game yang diizinkan FDA Amerika Serikat pada Juni 2020 untuk memperbaiki fungsi atensi anak usia 8 sampai 12 tahun dengan ADHD tipe inatentif atau kombinasi. Program ini berupa resep dokter, <strong>bukan pengganti</strong> obat, terapi perilaku, atau dukungan sekolah, dan manfaatnya terukur pada tes atensi komputer, belum tentu pada perilaku sehari-hari.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum untuk orang tua, guru, dan pendamping, <strong>bukan saran medis dan bukan rekomendasi produk</strong>. Diagnosis ADHD dan rencana terapinya harus ditetapkan oleh dokter anak, psikiater anak, atau psikolog klinis yang memeriksa anak secara langsung.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu digital therapeutics?</a></li>
                    <li><a href="#berbeda">Bedanya dengan aplikasi dan game biasa</a></li>
                    <li><a href="#endeavorrx">EndeavorRx: yang diizinkan FDA</a></li>
                    <li><a href="#bukti">Apa kata uji klinisnya?</a></li>
                    <li><a href="#batasan">Batasan yang perlu dipahami</a></li>
                    <li><a href="#posisi">Posisinya dalam penanganan ADHD</a></li>
                    <li><a href="#orang-tua">Panduan bagi orang tua</a></li>
                    <li><a href="#sekolah">Peran guru dan sekolah</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Digital Therapeutics untuk ADHD Anak?</h2>
            <p>Digital therapeutics (sering disingkat DTx) adalah program perangkat lunak yang dibuat untuk menangani, mengelola, atau mencegah suatu kondisi kesehatan, dan klaimnya diuji lewat penelitian klinis. Bentuknya bisa aplikasi di tablet, program di komputer, atau permainan video. Yang membedakannya dari aplikasi kesehatan biasa adalah <strong>bukti klinis dan penilaian regulator</strong> untuk klaim medis yang spesifik.</p>
            <p><a href="/artikel/adhd-adalah">ADHD</a> (attention deficit hyperactivity disorder) adalah gangguan perkembangan saraf yang memengaruhi perhatian, kontrol impuls, dan tingkat aktivitas anak. Pedoman American Academy of Pediatrics (AAP) menyebut ADHD sebagai salah satu gangguan perilaku saraf yang paling sering terjadi pada masa kanak-kanak, dengan dampak pada prestasi belajar, kesejahteraan, dan pergaulan anak (${ext(L.aap, 'Wolraich dkk., AAP 2019')}).</p>
            <p>Gagasan di balik digital therapeutics untuk ADHD cukup sederhana: kalau latihan tertentu bisa merangsang fungsi atensi, latihan itu bisa dikemas dalam permainan yang menarik bagi anak, dimainkan dengan dosis terukur di rumah, dan dipantau oleh tenaga kesehatan.</p>

            <h2 id="berbeda">Bedanya dengan Aplikasi dan Game Biasa</h2>
            <p>Di toko aplikasi, banyak sekali game yang mengklaim "melatih fokus" atau "mengasah konsentrasi". Sebagian mungkin menyenangkan dan tidak berbahaya, tetapi klaim seperti itu belum tentu pernah diuji. Perbedaan utamanya:</p>
            <ul>
                <li><strong>Uji klinis.</strong> Digital therapeutics diuji pada anak dengan diagnosis ADHD, dibandingkan dengan kelompok kontrol, dan hasilnya dipublikasikan.</li>
                <li><strong>Klaim yang dibatasi.</strong> Regulator menetapkan untuk siapa dan untuk apa produk itu boleh dipakai. Klaim di luar itu tidak didukung.</li>
                <li><strong>Pengawasan tenaga kesehatan.</strong> EndeavorRx, misalnya, berstatus perangkat resep di Amerika Serikat (${ext(L.fdaLetter, 'FDA DEN200026')}).</li>
                <li><strong>Dosis dan durasi.</strong> Waktu bermain diatur, bukan bebas sepanjang hari.</li>
            </ul>
            <p>Jadi, sebuah game yang terlihat mirip belum tentu memberi manfaat yang sama. Anak ADHD justru sering kesulitan menghentikan aktivitas layar, sehingga pembatasan waktu tetap penting.</p>

            <h2 id="endeavorrx">EndeavorRx: Digital Therapeutic yang Diizinkan FDA</h2>
            <p>Pada <strong>15 Juni 2020</strong>, FDA Amerika Serikat mengabulkan permohonan De Novo nomor DEN200026 untuk EndeavorRx, yang diajukan Akili Interactive Labs, dan menggolongkannya sebagai perangkat medis kelas II dengan nama generik "digital therapy device for ADHD" (${ext(L.fdaDb, 'database De Novo FDA')}).</p>
            <p>Indikasi resmi yang tercantum dalam surat keputusan FDA intinya sebagai berikut (${ext(L.fdaLetter, 'FDA DEN200026')}):</p>
            <ul>
                <li>Untuk <strong>memperbaiki fungsi atensi</strong> yang diukur dengan tes berbasis komputer.</li>
                <li>Untuk anak <strong>usia 8 sampai 12 tahun</strong> dengan ADHD tipe <a href="/artikel/ciri-adhd-tipe-inattentive-pada-anak">inatentif</a> atau tipe kombinasi, yang memang menunjukkan masalah atensi.</li>
                <li>Perbaikan terlihat pada Test of Variables of Attention (TOVA), yaitu ukuran atensi berkelanjutan dan selektif, dan anak <strong>mungkin tidak menunjukkan manfaat pada gejala perilaku seperti hiperaktivitas</strong>.</li>
                <li>Sebaiknya dipakai sebagai bagian dari program terapi yang dapat mencakup terapi dari klinisi, obat, dan program pendidikan.</li>
            </ul>
            <p>FDA juga mewajibkan label untuk pasien dan dokter memuat peringatan bahwa perangkat ini <strong>tidak dimaksudkan sebagai terapi tunggal</strong>.</p>

            <h2 id="bukti">Apa Kata Uji Klinisnya?</h2>
            <h3>Uji STARS-ADHD (2020)</h3>
            <p>Uji klinis acak tersamar ganda ini melibatkan 348 anak usia 8 sampai 12 tahun dengan ADHD yang tidak sedang minum obat ADHD, di 20 lembaga penelitian di Amerika Serikat. Kelompok perlakuan memainkan AKL-T01 (nama penelitian EndeavorRx) sekitar <strong>25 menit sehari, 5 hari seminggu, selama 4 minggu</strong>, sedangkan kelompok kontrol memainkan program digital pembanding (${ext(L.stars, 'Kollins dkk., 2020')}).</p>
            <p>Hasilnya, skor atensi TOVA pada kelompok AKL-T01 membaik lebih banyak dibanding kelompok kontrol, dan perbedaannya bermakna secara statistik. Tidak ada efek samping serius. Efek samping yang muncul tergolong ringan, yang paling sering adalah rasa frustrasi (3 persen) dan sakit kepala (2 persen). Rata-rata anak menyelesaikan 83 persen sesi yang dijadwalkan. Para peneliti sendiri menulis bahwa penelitian lanjutan masih diperlukan.</p>

            <h3>Uji STARS-Adjunct (2021)</h3>
            <p>Penelitian kedua bersifat terbuka (tanpa kelompok kontrol) dan melibatkan anak usia 8 sampai 14 tahun: 130 anak yang sedang minum obat stimulan dan 76 anak yang tidak minum obat ADHD. Setelah 4 minggu, skor gangguan fungsi sehari-hari (Impairment Rating Scale) yang dinilai orang tua membaik pada kedua kelompok. Hasil bertahan selama jeda 4 minggu dan membaik lagi pada putaran terapi kedua (${ext(L.adjunct, 'Kollins dkk., 2021')}).</p>

            <h3>Cara membaca bukti ini</h3>
            <p>Dua catatan penting untuk orang tua. Pertama, kedua penelitian <strong>didanai atau didukung oleh perusahaan pembuatnya</strong>, dan hal ini dinyatakan terbuka dalam publikasinya. Kedua, penelitian kedua tidak memakai kelompok kontrol, sehingga perbaikan yang terlihat belum bisa dipastikan berasal dari programnya saja. Bukti yang ada menjanjikan, tetapi belum sekuat bukti untuk obat ADHD dan terapi perilaku yang sudah diteliti selama puluhan tahun.</p>

            <h2 id="batasan">Batasan yang Perlu Dipahami</h2>
            <ul>
                <li><strong>Yang membaik adalah skor tes atensi.</strong> Indikasi FDA sendiri menyebut manfaat pada gejala perilaku seperti hiperaktivitas belum tentu terlihat.</li>
                <li><strong>Rentang usia terbatas.</strong> Izin FDA untuk anak 8 sampai 12 tahun. Untuk anak prasekolah, pendekatan utamanya berbeda.</li>
                <li><strong>Bukan terapi tunggal.</strong> Program ini dirancang sebagai pelengkap.</li>
                <li><strong>Status regulasi berbeda antarnegara.</strong> Izin FDA berlaku di Amerika Serikat. Ketersediaan dan status izinnya di Indonesia perlu ditanyakan kepada dokter yang menangani anak.</li>
                <li><strong>Waktu layar tetap perlu dijaga.</strong> Program terapi punya dosis. Tambahan waktu bermain game lain di luar dosis itu bukan bagian dari terapi, apalagi bila mengganggu tidur. Masalah tidur pada anak ADHD dibahas di artikel <a href="/artikel/gangguan-tidur-anak-adhd-solusi">gangguan tidur anak ADHD</a>.</li>
            </ul>

            <h2 id="posisi">Posisinya dalam Penanganan ADHD</h2>
            <p>Pedoman AAP 2019 merekomendasikan bahwa untuk anak usia 6 tahun sampai sebelum 12 tahun, dokter meresepkan obat ADHD yang disetujui FDA <strong>bersama</strong> pelatihan manajemen perilaku untuk orang tua dan/atau intervensi perilaku di kelas, dan menegaskan bahwa dukungan pendidikan serta penyesuaian di sekolah adalah bagian yang wajib dari setiap rencana terapi (${ext(L.aap, 'AAP 2019, KAS 5b')}).</p>
            <p>Artinya, fondasi penanganan ADHD anak tetap terdiri dari beberapa lapis:</p>
            <ol>
                <li><strong>Diagnosis yang tepat</strong> oleh tenaga profesional. Proses dan jalurnya di Indonesia dibahas di artikel <a href="/artikel/diagnosis-adhd-di-indonesia">diagnosis ADHD di Indonesia</a>.</li>
                <li><strong>Terapi perilaku dan pelatihan orang tua</strong>, yang mengubah cara keluarga merespons perilaku anak.</li>
                <li><strong>Obat</strong> bila direkomendasikan dokter, termasuk pilihan <a href="/artikel/non-stimulant-medication-adhd-terbaru">obat non-stimulan</a>.</li>
                <li><strong>Dukungan sekolah</strong>, dari posisi duduk sampai cara tugas diberikan.</li>
            </ol>
            <p>Digital therapeutics, bila tersedia dan sesuai, bisa menjadi lapis tambahan di atas fondasi itu, bukan penggantinya. Gambaran berbagai jenis terapi lain ada di artikel <a href="/artikel/macam-macam-terapi-pada-anak">macam-macam terapi pada anak</a>.</p>

            <h2 id="orang-tua">Panduan bagi Orang Tua</h2>
            <p>Bila Anda membaca tentang digital therapeutics dan tertarik mencobanya, beberapa langkah berikut bisa membantu:</p>
            <ol>
                <li><strong>Pastikan diagnosisnya dulu.</strong> Anak yang sangat aktif belum tentu ADHD. Bacalah <a href="/artikel/ciri-ciri-anak-adhd-berdasarkan-usia">ciri-ciri anak ADHD berdasarkan usia</a> dan <a href="/artikel/anakku-hiperaktif">panduan untuk orang tua anak hiperaktif</a>, lalu konsultasikan ke profesional.</li>
                <li><strong>Tanyakan ke dokter secara spesifik.</strong> Apakah usia dan tipe ADHD anak sesuai indikasi? Program mana yang punya bukti? Bagaimana memantau hasilnya?</li>
                <li><strong>Waspadai klaim berlebihan.</strong> Aplikasi yang menjanjikan "menyembuhkan ADHD" atau "tanpa obat, tanpa terapi" patut dicurigai.</li>
                <li><strong>Atur jadwal dan batas waktu.</strong> Ikuti dosis yang ditentukan dan jangan jadikan program terapi sebagai pengganti waktu bermain di luar rumah atau waktu bersama keluarga.</li>
                <li><strong>Amati perubahan nyata.</strong> Catat bagaimana anak mengerjakan PR, mengikuti instruksi, dan berinteraksi, lalu bawa catatan itu saat kontrol.</li>
                <li><strong>Hentikan dan konsultasikan</strong> bila anak sering frustrasi, sakit kepala, atau tidurnya terganggu.</li>
            </ol>

            <h2 id="sekolah">Peran Guru dan Sekolah</h2>
            <p>Apa pun program yang dijalani di rumah, sebagian besar tantangan atensi anak ADHD terlihat di kelas. Guru bisa membantu dengan instruksi yang singkat dan bertahap, tempat duduk yang jauh dari gangguan, jeda gerak di sela pelajaran, dan umpan balik positif yang segera. Guru juga bisa berbagi pengamatan dengan orang tua dan tenaga kesehatan, karena perubahan perilaku di kelas adalah salah satu ukuran paling bermakna untuk menilai apakah sebuah terapi benar-benar membantu.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a>, termasuk anak dengan ADHD, melalui pendidikan inklusi dan layanan terapi di Sleman. Untuk berdiskusi tentang kebutuhan anak Anda, hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a> atau lihat <a href="/program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/adhd-adalah">ADHD Adalah</a></h4>
                    <p>Pengertian, gejala, dan penanganan ADHD pada anak.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/diagnosis-adhd-di-indonesia">Diagnosis ADHD di Indonesia</a></h4>
                    <p>Ke mana dan bagaimana proses diagnosisnya.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/non-stimulant-medication-adhd-terbaru">Obat Non-Stimulan ADHD</a></h4>
                    <p>Pilihan obat selain stimulan untuk anak ADHD.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#ADHD</a>
            <a href="#">#DigitalTherapeutics</a>
            <a href="#">#ParentingABK</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.fdaLetter, 'U.S. Food and Drug Administration. <strong>De Novo decision letter DEN200026: EndeavorRx.</strong> 15 Juni 2020')}</li>
              <li>${ext(L.fdaDb, 'U.S. Food and Drug Administration. <strong>Device Classification Under Section 513(f)(2) (De Novo): DEN200026.</strong> accessdata.fda.gov')}</li>
              <li>${ext(L.stars, 'Kollins SH, DeLoss DJ, Cañadas E, dkk. <strong>A novel digital intervention for actively reducing severity of paediatric ADHD (STARS-ADHD): a randomised controlled trial.</strong> Lancet Digit Health. 2020;2(4):e168-e178')}</li>
              <li>${ext(L.adjunct, 'Kollins SH, Childress A, Heusser AC, Lutz J. <strong>Effectiveness of a digital therapeutic as adjunct to treatment with medication in pediatric ADHD.</strong> NPJ Digit Med. 2021;4(1):58')}</li>
              <li>${ext(L.aap, 'Wolraich ML, Hagan JF Jr, Allan C, dkk. <strong>Clinical Practice Guideline for the Diagnosis, Evaluation, and Treatment of Attention-Deficit/Hyperactivity Disorder in Children and Adolescents.</strong> Pediatrics. 2019;144(4):e20192528')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum, <strong>bukan nasihat medis dan bukan promosi produk</strong>. YUKA tidak berafiliasi dengan pembuat produk yang disebut. Diagnosis dan rencana terapi harus ditetapkan oleh tenaga kesehatan yang berkompeten. Sumber dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Digital%20Therapeutics%20untuk%20ADHD%20Anak%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Digital%20Therapeutics%20untuk%20ADHD%20Anak&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

#!/usr/bin/env node
'use strict';

// One-time generator for artikel/strategi-mengajar-anak-autis-di-kelas.html (cycle #72 backfill slot 2026-10-01).
// Skeleton from gen-cara-melatih-anak-speech-delay-bicara.js (shared shell via scripts/lib/article-shell).
// Images: 4 crops of YUKA documentation photos (Dokumentasi/21 Jan 2026: IMG_8421, IMG_8414, IMG_8415, 20260121_120255),
// each opened and checked 2026-10-02. No AI images, no close-up of a single identifiable child, no caption labels any child as autistic.
// Claims checked 2026-10-02 (evidence in data/sumber/strategi-mengajar-anak-autis-di-kelas/):
// Hume dkk. 2021 (PMID 33449225): review 1990-2017, 972 artikel, 28 praktik berbasis bukti (daftar praktik dari PMC8510990).
// CDC treatment page: behavioral approaches most evidence; TEACCH (konsistensi, visual, rutinitas tertulis/bergambar, batas area belajar, instruksi visual).
// WHO autism fact sheet (17 Sep 2025): 2021 sekitar 1 dari 127 orang; kemampuan dan kebutuhan beragam; sulit transisi antar aktivitas, reaksi tak biasa terhadap sensasi.
// CDC data: sekitar 1 dari 31 anak usia 8 tahun teridentifikasi ASD (ADDM).
// Permendikbudristek 48/2023: akomodasi yang layak untuk peserta didik penyandang disabilitas.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'strategi-mengajar-anak-autis-di-kelas';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Strategi Mengajar Anak Autis di Kelas | YUKA';
const META_DESC = 'Strategi mengajar anak autis di kelas: 10 cara berbasis bukti untuk guru, dari jadwal visual, instruksi bertahap, hingga transisi dan akomodasi. Baca di sini.';
const OG_TITLE = 'Strategi Mengajar Anak Autis di Kelas: 10 Cara Berbasis Bukti';
const OG_DESC = 'Panduan guru kelas inklusi mengajar anak autis: praktik yang didukung penelitian, contoh penerapan di kelas, tabel akomodasi, dan kerja sama dengan orang tua.';
const H1 = 'Strategi Mengajar Anak Autis di Kelas: 10 Cara Berbasis Bukti untuk Guru';
const IMG_DIR = 'Dokumentasi/artikel';
const IMAGE = `${IMG_DIR}/${SLUG}-kelas.webp`;
const IMAGE_ALT = 'Beberapa siswa belajar di lantai ruang kelas dengan meja lipat kecil, tas tertata di bangku belakang dan spanduk bergambar di dinding';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-10-01T09:00:00+07:00';
const DATE_MODIFIED = '2026-10-01T09:00:00+07:00';
const DATE_DISPLAY = '1 Oktober 2026';
const META_KW = 'strategi mengajar anak autis di kelas, cara mengajar anak autis, anak autis di sekolah inklusi, guru kelas inklusi, praktik berbasis bukti autisme, YUKA';
const CRUMB = 'Strategi Mengajar Anak Autis di Kelas';
const CREDIT = '<span class="kredit">Foto: dokumentasi YUKA Indonesia</span>';
const SHARE_TXT = 'Strategi%20Mengajar%20Anak%20Autis%20di%20Kelas';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 160) throw new Error('meta description out of range: ' + META_DESC.length);

const L = {
  hume: 'https://pubmed.ncbi.nlm.nih.gov/33449225/',
  humePmc: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8510990/',
  cdcTreat: 'https://www.cdc.gov/autism/treatment/index.html',
  cdcData: 'https://www.cdc.gov/autism/data-research/index.html',
  who: 'https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders',
  permen48: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-kebudayaan-riset-dan-teknologi-nomor-48-tahun-2023-tentang-akomodasi-yang-layak-untuk-peserta-didik-penyandang-disabilitas-pada-satuan-pendidikan-anak-usia-dini-formal-pendidikan-dasar-pendidikan-menengah-dan-pendidikan-tinggi'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
const fig = (file, alt, caption, w, h) => `
            <figure style="margin:2rem 0;">
                <img src="../${IMG_DIR}/${SLUG}-${file}.webp" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:12px;">
                <figcaption style="font-size:0.9rem;color:#555;margin-top:0.5rem;text-align:center;">${caption} ${CREDIT}</figcaption>
            </figure>`;

const faq = [
  {
    q: 'Apa strategi paling penting saat mengajar anak autis di kelas?',
    a: 'Tidak ada satu strategi yang cocok untuk semua anak autis, karena kemampuan dan kebutuhan mereka sangat beragam. Namun dukungan visual, rutinitas yang dapat diprediksi, instruksi yang dipecah menjadi langkah kecil, penguatan positif, dan persiapan transisi termasuk praktik yang paling sering dipakai dan didukung penelitian. Mulailah dari pengamatan terhadap anak itu sendiri, lalu pilih strategi yang sesuai tujuannya.'
  },
  {
    q: 'Apakah anak autis bisa belajar di sekolah reguler atau inklusi?',
    a: 'Bisa. Banyak anak autis belajar di sekolah inklusi bersama teman sebaya dengan dukungan yang sesuai. Permendikbudristek Nomor 48 Tahun 2023 mengatur akomodasi yang layak bagi peserta didik penyandang disabilitas di satuan pendidikan. Seberapa banyak dukungan yang dibutuhkan berbeda pada tiap anak, sehingga pilihan sekolah perlu disesuaikan dengan hasil asesmen dan kebutuhan anak.'
  },
  {
    q: 'Bagaimana cara menenangkan anak autis yang tantrum atau meltdown di kelas?',
    a: 'Utamakan keselamatan, kurangi rangsangan (suara, cahaya, kerumunan), bicara sesedikit mungkin dengan nada tenang, dan beri anak ruang atau sudut tenang yang sudah dikenalnya. Jangan menghukum saat anak sedang kewalahan. Setelah tenang, catat apa yang terjadi sebelumnya agar pemicu bisa dicegah. Bila kejadian sering berulang, diskusikan dengan orang tua, GPK, dan profesional yang menangani anak.'
  },
  {
    q: 'Apakah anak autis harus didampingi shadow teacher di kelas?',
    a: 'Tidak selalu. Sebagian anak membutuhkan pendamping individu, terutama di awal masa sekolah, sedangkan anak lain cukup dengan akomodasi dari guru kelas dan guru pembimbing khusus. Keputusan sebaiknya berdasarkan asesmen. Bila memakai pendamping, tujuannya adalah membangun kemandirian anak secara bertahap, bukan mengerjakan tugas untuk anak.'
  },
  {
    q: 'Berapa lama anak autis bisa fokus belajar di kelas?',
    a: 'Tidak ada angka baku, karena rentang perhatian berbeda pada tiap anak dan bergantung pada minat, tingkat kesulitan tugas, dan kondisi lingkungan. Amati berapa lama anak mampu bekerja sebelum tampak lelah atau gelisah, lalu rancang tugas sedikit di bawah batas itu, selingi jeda singkat, dan tambah durasinya perlahan.'
  },
  {
    q: 'Apa itu praktik berbasis bukti untuk autisme?',
    a: 'Praktik berbasis bukti adalah cara mengajar atau intervensi yang terbukti berdampak positif melalui penelitian yang memenuhi kriteria tertentu. Tinjauan sistematis Hume dan rekan (2021) mensintesis 972 artikel penelitian terbitan 1990 sampai 2017 dan menemukan 28 praktik yang memenuhi kriteria, misalnya dukungan visual, prompting, penguatan, analisis tugas, video modeling, dan intervensi berbasis teman sebaya.'
  },
  {
    q: 'Bagaimana cara guru bekerja sama dengan orang tua anak autis?',
    a: 'Sepakati tujuan belajar bersama, misalnya dalam Program Pembelajaran Individual (PPI), gunakan istilah, jadwal visual, dan sistem penguatan yang sama di rumah dan sekolah, serta buat jalur komunikasi rutin seperti buku penghubung. Tanyakan kepada orang tua apa yang menenangkan anak, apa yang memicu kecemasan, dan apa minatnya, karena informasi itu sangat membantu guru.'
  },
  {
    q: 'Apakah anak autis perlu soal ujian yang berbeda?',
    a: 'Tidak selalu berbeda isinya, tetapi sering membutuhkan akomodasi, misalnya instruksi yang lebih jelas, tambahan waktu, ruang yang lebih tenang, soal yang dibagi menjadi beberapa bagian, atau format jawaban yang disesuaikan. Bentuk akomodasi sebaiknya ditetapkan bersama berdasarkan kebutuhan anak, bukan disamaratakan.'
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
  keywords: 'strategi mengajar anak autis di kelas, cara mengajar anak autis, sekolah inklusi, praktik berbasis bukti, dukungan visual, TEACCH',
  citation: Object.values(L),
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

const td = 'style="padding:0.75rem;border-bottom:1px solid #e5e7eb;vertical-align:top;"';
const th = 'style="padding:0.75rem;text-align:left;"';

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
    ${STYLE.replace('</style>', `        .article-featured-image { margin: -2rem auto 2rem; max-width: 720px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .article-featured-image img { width: 100%; height: auto; }
        .article-featured-image figcaption { padding: 0.6rem 1rem; font-size: 0.85rem; color: var(--gray-600); text-align: center; background: var(--gray-50); }
        .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
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
                <span>13 menit baca</span>
                <span>Tim YUKA</span>
            </div>
        </div>
    </header>

    <div class="container">
        <figure class="article-featured-image">
            <img src="../${IMAGE}" alt="${IMAGE_ALT}" width="1080" height="675" fetchpriority="high" decoding="async">
            <figcaption>Suasana belajar di ruang kelas Sekolah Inklusi Taruna Imani: tiap siswa punya meja kecil sendiri dan tas ditata di satu tempat. ${CREDIT}</figcaption>
        </figure>
    </div>
    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> strategi mengajar anak autis di kelas yang paling didukung bukti adalah membuat pembelajaran <strong>terstruktur, dapat diprediksi, dan visual</strong>: jadwal dan instruksi bergambar, tugas dipecah menjadi langkah kecil, bantuan (prompt) yang dikurangi bertahap, penguatan positif, persiapan transisi, pengaturan lingkungan sensorik, dan keterlibatan teman sebaya. Tinjauan sistematis Hume dan rekan (2021) atas 972 artikel penelitian menemukan 28 praktik berbasis bukti untuk anak dan remaja autis, dan sebagian besar bisa diterapkan guru di kelas. Kuncinya, pilih strategi berdasarkan kebutuhan anak itu sendiri, karena setiap anak autis berbeda.</p></div>

            <div class="info-box">
                <h4>Untuk siapa artikel ini</h4>
                <p style="margin-bottom:0;">Artikel ini ditujukan untuk guru kelas, guru pembimbing khusus, pendamping, dan orang tua yang ingin memahami cara mendukung anak autis belajar di kelas. Isinya informasi pendidikan umum, <strong>bukan pengganti asesmen</strong> oleh psikolog, dokter, atau tim sekolah yang mengenal anak secara langsung.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#memahami">Memahami cara belajar anak autis</a></li>
                    <li><a href="#bukti">Apa kata penelitian: 28 praktik berbasis bukti</a></li>
                    <li><a href="#strategi">10 strategi mengajar anak autis di kelas</a></li>
                    <li><a href="#tabel-tantangan">Tantangan umum di kelas dan cara menyikapinya</a></li>
                    <li><a href="#akomodasi">Akomodasi yang layak menurut aturan di Indonesia</a></li>
                    <li><a href="#kerja-sama">Kerja sama guru, GPK, dan orang tua</a></li>
                    <li><a href="#kesalahan">Kesalahan yang sering terjadi</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="memahami">Memahami Cara Belajar Anak Autis</h2>
            <p>Menurut ${ext(L.who, 'WHO')}, autisme atau gangguan spektrum autisme adalah sekelompok kondisi beragam yang berkaitan dengan perkembangan otak. Cirinya antara lain kesulitan dalam interaksi sosial dan komunikasi, pola aktivitas dan perilaku yang tidak biasa, <strong>kesulitan berpindah dari satu aktivitas ke aktivitas lain</strong>, perhatian yang besar pada detail, dan reaksi yang tidak biasa terhadap sensasi. WHO memperkirakan pada 2021 sekitar 1 dari 127 orang di dunia adalah autis. Di Amerika Serikat, ${ext(L.cdcData, 'CDC')} melaporkan sekitar 1 dari 31 anak usia 8 tahun teridentifikasi autis menurut jaringan pemantauan ADDM. Artinya, besar kemungkinan setiap guru akan mengajar anak autis setidaknya sekali dalam kariernya.</p>
            <p>WHO juga menekankan bahwa <strong>kemampuan dan kebutuhan orang autis sangat bervariasi</strong> dan dapat berubah seiring waktu. Ada anak autis yang membaca jauh di atas teman sekelasnya tetapi kesulitan bekerja dalam kelompok, ada pula yang membutuhkan dukungan besar untuk berkomunikasi. Karena itu, label "autis" saja tidak cukup untuk merancang pembelajaran. Penjelasan dasar tentang kondisi ini ada di artikel <a href="/artikel/autisme-adalah">autisme adalah</a>, dan perbedaan tingkat kebutuhan dukungan dibahas di artikel <a href="/artikel/apa-itu-autisme-level-1-2-3">autisme level 1, 2, dan 3</a>.</p>
            <p>Dari ciri-ciri di atas, ada beberapa pola yang sering terlihat di kelas dan penting dipahami guru:</p>
            <ul>
                <li><strong>Kebutuhan akan keteraturan.</strong> Perubahan mendadak, misalnya jadwal yang digeser tanpa pemberitahuan, bisa memicu kecemasan.</li>
                <li><strong>Kekuatan pemrosesan visual.</strong> ${ext(L.cdcTreat, 'CDC')} menjelaskan bahwa pendekatan TEACCH didasarkan pada gagasan bahwa orang autis berkembang baik dengan konsistensi dan pembelajaran visual.</li>
                <li><strong>Kesulitan memahami instruksi lisan yang panjang</strong> atau bahasa kiasan, sehingga instruksi perlu singkat dan konkret.</li>
                <li><strong>Kepekaan sensorik</strong> terhadap suara, cahaya, sentuhan, atau keramaian, yang bisa membuat anak sulit berkonsentrasi.</li>
                <li><strong>Minat khusus</strong> yang kuat, yang bisa menjadi pintu masuk motivasi belajar.</li>
            </ul>

            <h2 id="bukti">Apa Kata Penelitian: 28 Praktik Berbasis Bukti</h2>
            <p>Rujukan terpenting untuk guru adalah tinjauan sistematis dari National Clearinghouse on Autism Evidence and Practice di University of North Carolina. Dalam publikasi ${ext(L.hume, 'Hume dan rekan (2021) di Journal of Autism and Developmental Disorders')}, tim peneliti menelusuri literatur intervensi terbitan 1990 sampai 2017. Pencarian awal menghasilkan 31.779 artikel, lalu 567 studi baru lolos penyaringan. Digabung dengan tinjauan sebelumnya, total 972 artikel disintesis, dan <strong>28 praktik intervensi terfokus</strong> memenuhi kriteria praktik berbasis bukti.</p>
            <p>Beberapa praktik dalam daftar itu (${ext(L.humePmc, 'teks lengkap di PMC')}) yang paling relevan untuk kelas antara lain:</p>
            <div class="table-wrap">
            <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.95rem;">
                <thead>
                    <tr style="background:#2B3A67;color:#fff;">
                        <th ${th}>Praktik berbasis bukti</th>
                        <th ${th}>Inti cara kerjanya</th>
                        <th ${th}>Contoh di kelas</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td ${td}>Dukungan visual (visual supports)</td><td ${td}>Informasi disajikan dalam bentuk gambar, tulisan, atau benda</td><td ${td}>Jadwal bergambar di meja, kartu langkah kerja, label rak</td></tr>
                    <tr><td ${td}>Intervensi berbasis anteseden</td><td ${td}>Mengatur kondisi sebelum perilaku muncul</td><td ${td}>Memberi peringatan sebelum pergantian pelajaran, mengatur posisi duduk</td></tr>
                    <tr><td ${td}>Prompting</td><td ${td}>Bantuan (isyarat, contoh, bantuan fisik) yang dikurangi bertahap</td><td ${td}>Menunjuk soal pertama, lalu hanya mengetuk meja, lalu tanpa bantuan</td></tr>
                    <tr><td ${td}>Penguatan (reinforcement)</td><td ${td}>Konsekuensi yang membuat perilaku diharapkan lebih sering muncul</td><td ${td}>Pujian spesifik, token, waktu bebas untuk kegiatan yang disukai</td></tr>
                    <tr><td ${td}>Analisis tugas (task analysis)</td><td ${td}>Keterampilan dipecah menjadi langkah kecil yang diajarkan berurutan</td><td ${td}>Langkah menulis kalimat, langkah merapikan meja</td></tr>
                    <tr><td ${td}>Time delay</td><td ${td}>Jeda waktu sebelum bantuan diberikan, agar anak mencoba sendiri</td><td ${td}>Menunggu 3 sampai 5 detik sebelum memberi petunjuk</td></tr>
                    <tr><td ${td}>Video modeling</td><td ${td}>Anak menonton contoh perilaku lewat video lalu menirukannya</td><td ${td}>Video singkat cara antre cuci tangan atau cara meminta bantuan</td></tr>
                    <tr><td ${td}>Narasi sosial (social narratives)</td><td ${td}>Cerita pendek yang menjelaskan situasi sosial dan respons yang diharapkan</td><td ${td}>Cerita bergambar tentang upacara bendera atau kunjungan museum</td></tr>
                    <tr><td ${td}>Instruksi dan intervensi berbasis teman sebaya</td><td ${td}>Teman sebaya dilatih untuk berinteraksi dan membantu</td><td ${td}>Teman pendamping saat bermain atau kerja kelompok</td></tr>
                    <tr><td style="padding:0.75rem;vertical-align:top;">Manajemen diri (self-management)</td><td style="padding:0.75rem;vertical-align:top;">Anak belajar memantau dan mencatat perilakunya sendiri</td><td style="padding:0.75rem;vertical-align:top;">Daftar centang tugas selesai di meja</td></tr>
                </tbody>
            </table>
            </div>
            <p>Hal penting dari tinjauan ini: praktik-praktik tersebut adalah <strong>alat</strong>, bukan paket yang harus dipakai semuanya. Guru memilih praktik yang sesuai dengan tujuan belajar individual anak. ${ext(L.cdcTreat, 'CDC')} juga mencatat bahwa pendekatan perilaku memiliki bukti terbanyak untuk menangani gejala autisme dan sudah diterima luas di sekolah, sementara pendekatan pendidikan seperti TEACCH memberi guru cara menyesuaikan struktur kelas.</p>

            <h2 id="strategi">10 Strategi Mengajar Anak Autis di Kelas</h2>
            <p>Strategi berikut menerjemahkan praktik berbasis bukti di atas ke rutinitas kelas sehari-hari. Tidak semua dibutuhkan setiap anak; mulailah dari dua atau tiga yang paling menjawab kesulitan utama anak.</p>

            <h3>1. Pasang jadwal visual harian</h3>
            <p>CDC mencontohkan bahwa dalam pendekatan TEACCH, rutinitas harian bisa ditulis atau digambar lalu dipasang di tempat yang mudah terlihat. Jadwal visual membuat hari sekolah dapat diprediksi: anak tahu apa yang sedang terjadi, apa berikutnya, dan kapan kegiatan berakhir. Untuk anak yang belum membaca, gunakan foto atau gambar; untuk yang sudah membaca, daftar tertulis cukup. Biasakan anak mencentang atau melepas kartu setiap kegiatan selesai. Panduan membuatnya ada di artikel <a href="/artikel/jadwal-visual-anak-autis">jadwal visual anak autis</a>.</p>

            <h3>2. Buat batas area belajar yang jelas</h3>
            <p>Masih dari contoh CDC tentang TEACCH, batas dapat dibuat di sekitar stasiun belajar. Di kelas, ini bisa berupa meja sendiri dengan wadah bahan yang tetap, area membaca yang ditandai karpet, atau sudut tenang. Ruang yang tertata membantu anak memahami "di sini saya mengerjakan apa" tanpa harus mendengar penjelasan berulang.</p>
${fig('meja-kerja', 'Meja lipat kecil berisi wadah bahan kerajinan dan gunting, dengan tumpukan buku di lantai di sampingnya', 'Satu meja, satu wadah bahan, satu tugas: area kerja yang tertata membuat anak tahu apa yang harus dikerjakan.', 760, 475)}

            <h3>3. Lengkapi instruksi lisan dengan instruksi visual atau contoh</h3>
            <p>CDC menyebut instruksi verbal dapat dilengkapi dengan instruksi visual atau demonstrasi fisik. Berikan satu instruksi dalam satu waktu, dengan kalimat pendek dan konkret ("Buka buku halaman 10" lebih jelas daripada "Ayo kita lanjutkan yang kemarin"). Tuliskan langkah kerja di papan atau kartu, atau tunjukkan contoh hasil akhir yang diharapkan. Hindari bahasa kiasan dan sindiran yang mudah disalahpahami.</p>

            <h3>4. Pecah tugas menjadi langkah kecil</h3>
            <p>Analisis tugas adalah salah satu praktik berbasis bukti dalam tinjauan Hume dan rekan. Tugas "kerjakan halaman 10" bisa dipecah menjadi "kerjakan nomor 1 sampai 3, lalu tunjukkan ke Bu Guru". Langkah kecil memberi anak banyak kesempatan berhasil dan mengurangi rasa kewalahan. Untuk menilai titik awal kemampuan anak, gunakan hasil <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik</a>.</p>

            <h3>5. Beri bantuan secukupnya, lalu kurangi bertahap</h3>
            <p>Prompting dan time delay bekerja bersama: guru memberi bantuan yang paling sedikit tetapi cukup agar anak berhasil, lalu memberi jeda beberapa detik sebelum membantu di kesempatan berikutnya. Tujuannya agar anak tidak bergantung pada bantuan. Teknik bertingkat ini dibahas lebih rinci di artikel <a href="/artikel/metode-prompt-dalam-terapi-wicara">metode prompt</a>.</p>
${fig('pendampingan', 'Seorang pendamping duduk bersila di samping meja lipat sambil menulis di selembar kertas, siswa lain bekerja di meja sebelahnya', 'Pendamping duduk sejajar di samping siswa dan memberi contoh, bukan mengambil alih pekerjaan.', 760, 475)}

            <h3>6. Gunakan penguatan positif yang bermakna bagi anak</h3>
            <p>Penguatan adalah praktik berbasis bukti yang paling dasar. Pujian akan lebih efektif bila spesifik ("Kamu sudah menulis tiga kalimat sendiri") dan segera. Sebagian anak lebih termotivasi oleh kesempatan melakukan kegiatan yang disukai, misalnya lima menit membaca buku tentang kereta, daripada pujian lisan. Contoh sistem token dan cara menyusunnya ada di artikel <a href="/artikel/reward-system-efektif-untuk-anak-autis">reward system untuk anak autis</a>.</p>

            <h3>7. Siapkan transisi sebelum terjadi</h3>
            <p>Kesulitan berpindah aktivitas termasuk ciri yang disebut WHO. Beri peringatan beberapa menit sebelum pergantian kegiatan, gunakan pengatur waktu visual, dan tunjukkan di jadwal kegiatan berikutnya. Untuk perubahan besar, seperti guru pengganti, kunjungan lapangan, atau upacara, siapkan narasi sosial sehari sebelumnya. Ini contoh intervensi berbasis anteseden: mencegah masalah dengan mengatur kondisi sebelum masalah muncul.</p>

            <h3>8. Atur lingkungan sensorik kelas</h3>
            <p>Reaksi tidak biasa terhadap sensasi bisa membuat anak sulit fokus. Amati apa yang mengganggu anak: suara kipas, lampu yang berkedip, bau, atau keramaian saat istirahat. Penyesuaian sederhana seperti tempat duduk jauh dari pintu, izin memakai penutup telinga saat kegiatan bising, atau sudut tenang untuk menenangkan diri bisa sangat membantu. Beberapa alat bantu sensorik dibahas di artikel <a href="/artikel/sensory-toys-terbaik-untuk-anak-autis">sensory toys untuk anak autis</a>, tetapi pemakaiannya di kelas sebaiknya disepakati dengan terapis yang menangani anak.</p>

            <h3>9. Libatkan teman sebaya</h3>
            <p>Instruksi dan intervensi berbasis teman sebaya termasuk dalam 28 praktik berbasis bukti. Teman sekelas bisa dilatih untuk mengajak bermain, menunggu giliran, dan membantu dengan cara yang tepat. Selain membantu anak autis, pendekatan ini menumbuhkan budaya kelas yang inklusif. Cara menyusunnya dijelaskan di artikel <a href="/artikel/peer-tutoring-di-kelas-inklusi">peer tutoring di kelas inklusi</a>, sedangkan keterampilan sosial yang bisa dilatih bersama ada di artikel <a href="/artikel/social-skills-training-anak-autis">social skills training anak autis</a>.</p>

            <h3>10. Manfaatkan minat khusus anak</h3>
            <p>Minat yang kuat pada satu topik bisa menjadi jembatan ke materi pelajaran. Anak yang menyukai kereta bisa berlatih berhitung dengan gerbong, membaca jadwal keberangkatan, atau menulis cerita tentang perjalanan. Pendekatan yang mengikuti minat dan motivasi anak juga menjadi dasar <a href="/artikel/pivotal-response-training-prt-autisme">Pivotal Response Training</a>, yang dalam tinjauan Hume dan rekan dikelompokkan ke dalam intervensi naturalistik.</p>
${fig('materi', 'Meja belajar kecil berisi mushaf terbuka, buku tulis, dan pena, dengan seorang siswa duduk membelakangi kamera', 'Bahan yang sudah disiapkan di meja sebelum pelajaran dimulai mengurangi waktu menunggu dan kebingungan.', 900, 440)}

            <h2 id="tabel-tantangan">Tantangan Umum di Kelas dan Cara Menyikapinya</h2>
            <p>Perilaku yang tampak "sulit" sering kali adalah cara anak menyampaikan sesuatu: bingung, cemas, kewalahan oleh rangsangan, atau ingin menghindari tugas yang terlalu berat. Tabel berikut merangkum situasi yang sering dihadapi guru dan strategi yang bisa dicoba lebih dulu.</p>
            <div class="table-wrap">
            <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.95rem;">
                <thead>
                    <tr style="background:#2B3A67;color:#fff;">
                        <th ${th}>Situasi di kelas</th>
                        <th ${th}>Kemungkinan penyebab</th>
                        <th ${th}>Strategi yang bisa dicoba</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td ${td}>Menolak pindah ke pelajaran berikutnya</td><td ${td}>Transisi mendadak, belum selesai dengan kegiatan sebelumnya</td><td ${td}>Peringatan sebelum pergantian, timer visual, tunjukkan jadwal</td></tr>
                    <tr><td ${td}>Tidak mulai mengerjakan tugas</td><td ${td}>Instruksi kurang jelas, tugas terlalu besar</td><td ${td}>Instruksi tertulis, pecah tugas, contoh hasil akhir</td></tr>
                    <tr><td ${td}>Menutup telinga atau keluar kelas saat ramai</td><td ${td}>Kewalahan oleh suara atau keramaian</td><td ${td}>Sudut tenang, penutup telinga, tempat duduk lebih tenang</td></tr>
                    <tr><td ${td}>Sulit bekerja kelompok</td><td ${td}>Aturan sosial belum dipahami</td><td ${td}>Peran yang jelas dalam kelompok, narasi sosial, teman pendamping</td></tr>
                    <tr><td ${td}>Bertanya hal yang sama berulang kali</td><td ${td}>Cemas tentang apa yang akan terjadi</td><td ${td}>Jawaban dalam bentuk tulisan atau gambar yang bisa dilihat ulang</td></tr>
                    <tr><td style="padding:0.75rem;vertical-align:top;">Meltdown</td><td style="padding:0.75rem;vertical-align:top;">Akumulasi stres atau rangsangan</td><td style="padding:0.75rem;vertical-align:top;">Utamakan keselamatan, kurangi rangsangan, beri waktu tenang, catat pemicunya</td></tr>
                </tbody>
            </table>
            </div>
            <p>Bila perilaku menantang terjadi berulang, catat pola sebelum dan sesudahnya (apa yang terjadi sebelum, perilakunya, lalu apa yang terjadi sesudah). CDC menjelaskan bahwa pendekatan perilaku berfokus pada memahami apa yang terjadi sebelum dan sesudah suatu perilaku. Catatan sederhana seperti ini membantu tim sekolah dan profesional menemukan fungsi perilaku tersebut. Prinsip pengelolaan kelas yang lebih umum ada di artikel <a href="/artikel/classroom-management-kelas-inklusi">classroom management kelas inklusi</a>.</p>

            <h2 id="akomodasi">Akomodasi yang Layak Menurut Aturan di Indonesia</h2>
            <p>Di Indonesia, ${ext(L.permen48, 'Permendikbudristek Nomor 48 Tahun 2023')} mengatur akomodasi yang layak untuk peserta didik penyandang disabilitas pada satuan pendidikan anak usia dini formal, pendidikan dasar, pendidikan menengah, dan pendidikan tinggi. Akomodasi adalah penyesuaian agar anak bisa mengakses pembelajaran setara dengan teman-temannya, bukan keringanan atau perlakuan istimewa.</p>
            <p>Dalam praktik kelas, akomodasi untuk anak autis bisa berupa jadwal dan instruksi visual, tambahan waktu, tugas yang dipecah, tempat duduk yang disesuaikan, ruang tenang, maupun penyesuaian bentuk penilaian. Penyesuaian soal ujian dibahas di artikel <a href="/artikel/adaptasi-soal-ujian-untuk-anak-abk">adaptasi soal ujian untuk anak ABK</a>. Akomodasi yang dibutuhkan setiap anak sebaiknya ditulis dalam <a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual (PPI)</a> agar konsisten dijalankan oleh semua guru yang mengajar anak tersebut, bukan bergantung pada ingatan satu orang guru.</p>
            <p>Bagi orang tua yang masih menimbang pilihan sekolah, perbandingan sekolah inklusi, SLB, dan jalur lain ada di artikel <a href="/artikel/anak-abk-harus-sekolah-dimana">anak ABK harus sekolah di mana</a>, dan konsep dasarnya di artikel <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a>.</p>

            <h2 id="kerja-sama">Kerja Sama Guru, GPK, dan Orang Tua</h2>
            <p>Strategi di kelas paling efektif bila dijalankan secara konsisten oleh semua orang di sekitar anak. Di sekolah inklusi, guru kelas biasanya bekerja bersama <a href="/artikel/gpk-adalah">guru pembimbing khusus (GPK)</a>, dan sebagian anak juga didampingi <a href="/artikel/shadow-teacher-adalah">shadow teacher</a>. Pembagian peran perlu jelas: siapa yang menyiapkan materi yang disesuaikan, siapa yang mencatat perkembangan, dan bagaimana pendamping secara bertahap mengurangi bantuannya. Model mengajar berdua di satu kelas dibahas di artikel <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching dalam kelas inklusi</a>.</p>
            <p>Orang tua adalah sumber informasi yang tidak tergantikan. Mereka tahu apa yang menenangkan anak, apa yang membuatnya cemas, cara anak berkomunikasi saat lelah, dan minatnya. Beberapa cara menjaga kerja sama:</p>
            <ul>
                <li><strong>Buku penghubung atau pesan singkat rutin</strong> tentang hal yang berjalan baik, bukan hanya laporan masalah.</li>
                <li><strong>Bahasa dan alat yang sama</strong>, misalnya jadwal visual dan sistem penguatan yang serupa di rumah dan di sekolah.</li>
                <li><strong>Pertemuan berkala</strong> untuk meninjau tujuan PPI dan menyesuaikan strategi.</li>
                <li><strong>Koordinasi dengan terapis</strong> bila anak menjalani terapi, agar target di kelas dan di ruang terapi saling menguatkan.</li>
            </ul>
            <p>Keterampilan memperhatikan hal yang sama dengan orang lain, yang menjadi dasar banyak pembelajaran di kelas, dibahas di artikel <a href="/artikel/joint-attention-anak-autis-kenapa-penting">joint attention pada anak autis</a>. Untuk perbandingan dengan strategi bagi anak dengan kebutuhan lain, lihat juga <a href="/artikel/strategi-mengajar-anak-adhd-di-sekolah">strategi mengajar anak ADHD di sekolah</a>.</p>

            <h2 id="kesalahan">Kesalahan yang Sering Terjadi</h2>
            <ul>
                <li><strong>Menyamakan semua anak autis.</strong> Strategi yang berhasil untuk satu anak belum tentu cocok untuk anak lain. WHO menegaskan kemampuan dan kebutuhan orang autis sangat beragam.</li>
                <li><strong>Hanya mengandalkan instruksi lisan.</strong> Ucapan cepat hilang, sedangkan petunjuk tertulis atau bergambar bisa dilihat ulang.</li>
                <li><strong>Mengubah jadwal tanpa pemberitahuan.</strong> Bila perubahan tidak terhindarkan, beri tahu sedini mungkin dan tunjukkan di jadwal.</li>
                <li><strong>Menghukum perilaku yang sebenarnya reaksi kewalahan.</strong> Hukuman tidak mengajarkan cara mengatasi rangsangan yang berlebihan.</li>
                <li><strong>Pendamping mengerjakan tugas untuk anak.</strong> Bantuan berlebihan membuat anak bergantung; bantuan perlu dikurangi bertahap.</li>
                <li><strong>Memisahkan anak dari kegiatan kelas terlalu sering.</strong> Ruang tenang berguna untuk menenangkan diri, bukan tempat anak menghabiskan sebagian besar hari sekolah.</li>
            </ul>

            <div class="story-highlight">
                <h3>Belajar bersama di Sekolah Inklusi Taruna Imani</h3>
                <p style="margin-bottom:0;">Di Sekolah Inklusi Taruna Imani yang dikelola YUKA di Yogyakarta, anak berkebutuhan khusus belajar bersama teman-temannya dengan meja dan bahan belajar masing-masing, dan orang tua menjadi mitra dalam setiap tahap. Untuk mengenal program kami, kunjungi halaman <a href="/program">program YUKA</a> atau hubungi tim melalui halaman <a href="/kontak">kontak</a>. Anda juga bisa mendukung pendidikan anak berkebutuhan khusus melalui halaman <a href="/donasi">donasi</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/jadwal-visual-anak-autis">Jadwal Visual Anak Autis</a></h4>
                    <p>Manfaat, cara membuat, dan contoh rutinitas bergambar.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/classroom-management-kelas-inklusi">Classroom Management Kelas Inklusi</a></h4>
                    <p>Mengelola kelas yang beragam agar semua siswa belajar.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual</a></h4>
                    <p>Menyusun PPI sebagai dasar akomodasi tiap anak.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#Autisme</a>
            <a href="#">#KelasInklusi</a>
            <a href="#">#StrategiMengajar</a>
            <a href="#">#GuruInklusi</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.hume, 'Hume K, Steinbrenner JR, Odom SL, dkk. <strong>Evidence-Based Practices for Children, Youth, and Young Adults with Autism: Third Generation Review.</strong> J Autism Dev Disord. 2021;51(11):4013-4032')} (${ext(L.humePmc, 'teks lengkap PMC8510990')})</li>
              <li>${ext(L.cdcTreat, 'Centers for Disease Control and Prevention. <strong>Treatment and Intervention for Autism Spectrum Disorder</strong>')}</li>
              <li>${ext(L.cdcData, 'Centers for Disease Control and Prevention. <strong>Data and Statistics on Autism Spectrum Disorder</strong>')}</li>
              <li>${ext(L.who, 'World Health Organization. <strong>Autism</strong> (fact sheet, 17 September 2025)')}</li>
              <li>${ext(L.permen48, 'Kemendikbudristek. <strong>Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</strong>')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum untuk pendidik dan orang tua, <strong>bukan nasihat medis atau program intervensi individual</strong>. Rencana pembelajaran dan intervensi anak perlu disusun bersama tim sekolah, orang tua, dan profesional yang memeriksa anak secara langsung. Sumber dicek pada 2 Oktober 2026.
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

if (/[—–]/.test(html.replace(STYLE, ''))) throw new Error('em/en dash found in output');

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

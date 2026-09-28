#!/usr/bin/env node
'use strict';

// One-time generator for artikel/alat-bantu-belajar-anak-disleksia.html (catchup 2026-09-28, kartu 6l2Hrln8).
// Skeleton from gen-digital-therapeutics-untuk-adhd-anak.js. Card's Candi Plaosan tourist photo rejected as off-topic;
// hero = crop of YUKA documentation photo 21-jan-2026-anak-anak-belajar-bersama-guru-013 showing only a desk, books and
// hands (no identifiable child). No product images, no AI images, no prices.
// Claims checked 2026-09-28 against: IDA definition + Dyslexia Basics pages, Wood dkk. 2018 PMID 28112580,
// AAP/AAO joint statement 2009 PMID 19651597, Griffiths dkk. 2016 PMID 27580753, Kuster dkk. 2018 PMID 29204931,
// Zorzi dkk. 2012 PMID 22665803.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'alat-bantu-belajar-anak-disleksia';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Alat Bantu Belajar Anak Disleksia: Panduan Orang Tua';
const META_DESC = 'Alat bantu belajar anak disleksia yang didukung bukti: text-to-speech, buku audio, jarak huruf, dan alat multisensori. Cek mana yang terbukti di sini.';
const OG_TITLE = 'Alat Bantu Belajar Anak Disleksia: Mana yang Terbukti Membantu';
const OG_DESC = 'Panduan alat bantu belajar anak disleksia untuk orang tua dan guru: yang didukung penelitian, yang belum terbukti, dan cara memilihnya.';
const H1 = 'Alat Bantu Belajar Anak Disleksia: Mana yang Terbukti dan Cara Memilihnya';
const IMAGE = 'Dokumentasi/artikel/meja-belajar-buku-dan-alat-tulis-anak.webp';
const IMAGE_ALT = 'Meja lipat belajar berisi buku tulis, pena, dan kitab terbuka di ruang belajar YUKA';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T19:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T19:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  idaDef: 'https://dyslexiaida.org/definition-of-dyslexia/',
  idaBasics: 'https://dyslexiaida.org/dyslexia-basics/',
  tts: 'https://pubmed.ncbi.nlm.nih.gov/28112580/',
  aapVision: 'https://pubmed.ncbi.nlm.nih.gov/19651597/',
  overlay: 'https://pubmed.ncbi.nlm.nih.gov/27580753/',
  font: 'https://pubmed.ncbi.nlm.nih.gov/29204931/',
  spacing: 'https://pubmed.ncbi.nlm.nih.gov/22665803/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa alat bantu belajar anak disleksia yang paling didukung penelitian?',
    a: 'Text-to-speech dan alat baca nyaring lain punya dukungan paling jelas untuk pemahaman bacaan. Meta-analisis Wood dan rekan (2018) menemukan efek rata-rata sedang terhadap pemahaman bacaan siswa dengan kesulitan membaca. International Dyslexia Association juga menyebut buku audio, program pembaca teks, dan pengolah kata sebagai bantuan yang bermanfaat.'
  },
  {
    q: 'Apakah alat bantu bisa menggantikan terapi atau les membaca?',
    a: 'Tidak. Alat bantu membuat anak bisa mengakses pelajaran, tetapi kemampuan membaca tetap perlu dilatih lewat pengajaran bahasa yang terstruktur dan multisensori oleh guru atau terapis terlatih, seperti dianjurkan International Dyslexia Association.'
  },
  {
    q: 'Apakah kacamata atau plastik berwarna membantu anak disleksia?',
    a: 'Bukti ilmiahnya tidak mendukung. Pernyataan bersama American Academy of Pediatrics dan American Academy of Ophthalmology menyatakan lensa atau filter berwarna tidak terbukti memperbaiki prestasi belajar jangka panjang dan tidak direkomendasikan. Tinjauan sistematis tahun 2016 juga menemukan efeknya kecil atau mirip plasebo.'
  },
  {
    q: 'Apakah font khusus disleksia membuat anak lebih lancar membaca?',
    a: 'Penelitian pada 170 anak disleksia di Belanda tidak menemukan bahwa font Dyslexie membuat anak membaca lebih cepat atau lebih akurat dibanding Arial. Yang lebih punya dasar adalah memperlebar jarak antarhuruf, yang dalam penelitian Zorzi dan rekan (2012) membantu anak disleksia membaca lebih baik.'
  },
  {
    q: 'Bagaimana memulai memilih alat bantu untuk anak?',
    a: 'Mulailah dari asesmen oleh psikolog atau tenaga profesional, lalu tentukan kesulitan utama anak (membaca kata, memahami bacaan, atau menulis). Pilih satu atau dua alat yang menjawab kesulitan itu, coba selama beberapa minggu, amati hasilnya bersama guru, dan sesuaikan.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Alat Bantu Belajar Anak Disleksia', item: CANONICAL }
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
  keywords: 'alat bantu belajar anak disleksia, disleksia, text-to-speech, buku audio, multisensori, akomodasi belajar',
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
    <meta name="keywords" content="alat bantu belajar anak disleksia, disleksia, text-to-speech, buku audio, YUKA">
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
                <span class="current">Alat Bantu Belajar Anak Disleksia</span>
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
            <img src="../${IMAGE}" alt="${IMAGE_ALT}" width="558" height="384" fetchpriority="high" decoding="async">
            <figcaption>Alat bantu yang paling berguna sering kali sederhana: buku, alat tulis, meja yang nyaman, dan pendamping yang sabar. <span class="kredit">Foto: dokumentasi YUKA Indonesia</span></figcaption>
        </figure>
    </div>
    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> alat bantu belajar anak disleksia yang paling didukung bukti adalah <strong>text-to-speech dan buku audio</strong> (agar anak tetap bisa memahami isi pelajaran), <strong>alat pengolah kata</strong> untuk menulis, <strong>jarak huruf yang lebih lebar</strong> pada bahan bacaan, dan <strong>benda konkret untuk pengajaran multisensori</strong>. Kacamata atau plastik berwarna dan font khusus disleksia belum terbukti membantu. Alat bantu memudahkan akses belajar, tetapi tidak menggantikan pengajaran membaca yang terstruktur.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum untuk orang tua, guru, dan pendamping, <strong>bukan saran klinis dan bukan rekomendasi merek tertentu</strong>. Diagnosis disleksia dan rencana intervensinya perlu ditetapkan lewat asesmen oleh psikolog atau tenaga profesional yang memeriksa anak secara langsung.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#memahami">Memahami disleksia dan peran alat bantu</a></li>
                    <li><a href="#dua-jenis">Dua jenis alat bantu: melatih dan mengakomodasi</a></li>
                    <li><a href="#membaca">Alat bantu untuk membaca</a></li>
                    <li><a href="#menulis">Alat bantu untuk menulis dan mengeja</a></li>
                    <li><a href="#multisensori">Alat multisensori untuk latihan membaca</a></li>
                    <li><a href="#belum-terbukti">Alat yang belum terbukti</a></li>
                    <li><a href="#memilih">Cara memilih alat bantu</a></li>
                    <li><a href="#sekolah">Peran guru dan sekolah</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="memahami">Memahami Disleksia dan Peran Alat Bantu Belajar</h2>
            <p>International Dyslexia Association (IDA) mendefinisikan disleksia sebagai gangguan belajar spesifik yang ditandai kesulitan membaca kata dan/atau mengeja, baik dari sisi ketepatan, kecepatan, atau keduanya (${ext(L.idaDef, 'IDA, Definition of Dyslexia')}). IDA juga menyebut disleksia sebagai gangguan belajar berbasis bahasa (${ext(L.idaBasics, 'IDA, Dyslexia Basics')}). Artinya, masalahnya bukan pada kecerdasan atau kemalasan anak. Penjelasan lengkapnya ada di artikel <a href="/artikel/disleksia-adalah">disleksia adalah</a>.</p>
            <p>Karena kesulitan utamanya ada pada mengolah tulisan, anak disleksia sering tertinggal bukan karena tidak paham materinya, tetapi karena lambat membaca soal atau kesulitan menuliskan jawabannya. Di sinilah alat bantu belajar berperan: menjembatani jarak antara kemampuan berpikir anak dan kemampuannya membaca serta menulis.</p>
            <p>Pedoman IDA menyebut bahwa sekolah bisa menerapkan akomodasi akademik, dan bahwa siswa bisa terbantu dengan mendengarkan buku audio serta memakai program pembaca teks dan pengolah kata di komputer (${ext(L.idaBasics, 'IDA, Dyslexia Basics')}).</p>

            <h2 id="dua-jenis">Dua Jenis Alat Bantu: Melatih dan Mengakomodasi</h2>
            <p>Sebelum memilih, pahami dulu bahwa alat bantu belajar anak disleksia punya dua fungsi yang berbeda:</p>
            <ul>
                <li><strong>Alat untuk melatih kemampuan membaca.</strong> Contohnya kartu huruf, kartu suku kata, huruf timbul, dan benda untuk latihan bunyi. Alat ini dipakai dalam sesi belajar bersama guru, terapis, atau orang tua untuk membangun kemampuan dasar membaca.</li>
                <li><strong>Alat untuk mengakomodasi.</strong> Contohnya text-to-speech, buku audio, dan pengolah kata. Alat ini tidak melatih membaca, tetapi membuat anak tetap bisa belajar materi pelajaran lain (IPA, sejarah, agama) tanpa terhambat kesulitan membacanya.</li>
            </ul>
            <p>Anak disleksia umumnya butuh keduanya. Kalau hanya diberi alat akomodasi, kemampuan membacanya tidak berkembang. Kalau hanya dilatih tanpa akomodasi, anak bisa tertinggal di semua mata pelajaran dan kehilangan rasa percaya diri.</p>

            <h2 id="membaca">Alat Bantu untuk Membaca</h2>
            <h3>1. Text-to-speech dan alat baca nyaring</h3>
            <p>Text-to-speech adalah fitur yang mengubah tulisan menjadi suara. Anak bisa mendengarkan teks sambil mengikuti tulisannya. Fitur pembaca layar semacam ini umumnya sudah tersedia di ponsel, tablet, dan komputer tanpa perlu membeli aplikasi tambahan.</p>
            <p>Meta-analisis Wood dan rekan (2018) terhadap penelitian tentang text-to-speech dan alat baca nyaring pada siswa dengan kesulitan membaca menemukan efek rata-rata sebesar 0,35 terhadap pemahaman bacaan, dengan rentang kepercayaan 0,14 sampai 0,56. Para peneliti menyimpulkan bahwa teknologi ini <strong>dapat membantu</strong> pemahaman bacaan, sekaligus mencatat bahwa penelitian lanjutan masih diperlukan (${ext(L.tts, 'Wood dkk., 2018')}).</p>
            <p>Yang perlu diingat, text-to-speech membantu anak <em>memahami isi</em> bacaan, bukan melatih kemampuan membaca kata. Jadi alat ini paling cocok untuk mata pelajaran yang bacaannya panjang.</p>

            <h3>2. Buku audio</h3>
            <p>Buku audio memungkinkan anak menikmati cerita dan menambah kosakata tanpa terhambat kesulitan membaca. IDA menyebut buku audio sebagai salah satu hal yang bermanfaat bagi siswa disleksia (${ext(L.idaBasics, 'IDA, Dyslexia Basics')}). Cara yang baik adalah mendengarkan sambil memegang buku cetaknya, sehingga anak tetap terpapar bentuk tulisan.</p>

            <h3>3. Bahan bacaan dengan jarak huruf lebih lebar</h3>
            <p>Penelitian Zorzi dan rekan (2012) pada anak disleksia di Italia dan Prancis menemukan bahwa memperlebar jarak antarhuruf memperbaiki kinerja membaca teks secara langsung, tanpa latihan. Penjelasannya, anak disleksia lebih terganggu oleh efek <em>crowding</em>, yaitu huruf yang berdekatan saling mengganggu pengenalan satu sama lain (${ext(L.spacing, 'Zorzi dkk., 2012')}).</p>
            <p>Penerapannya sederhana: saat mencetak lembar kerja, gunakan huruf yang cukup besar, jarak antarhuruf dan antarbaris yang lebih lega, serta jangan memadatkan terlalu banyak teks dalam satu halaman.</p>

            <h3>4. Penanda baris baca</h3>
            <p>Penggaris atau kertas tebal yang diletakkan di bawah baris yang sedang dibaca membantu sebagian anak tidak kehilangan posisi baca. Ini alat murah yang bisa dibuat sendiri. Belum ada bukti kuat bahwa alat ini meningkatkan kemampuan membaca, jadi pakailah bila anak merasa terbantu, bukan sebagai terapi.</p>

            <h2 id="menulis">Alat Bantu untuk Menulis dan Mengeja</h2>
            <ul>
                <li><strong>Pengolah kata di komputer atau tablet.</strong> IDA menyebut program pengolah kata sebagai bantuan bagi siswa disleksia (${ext(L.idaBasics, 'IDA, Dyslexia Basics')}). Fitur pemeriksa ejaan membantu anak menemukan kesalahan yang sulit ia lihat sendiri.</li>
                <li><strong>Fitur dikte suara.</strong> Anak bisa mengucapkan idenya lalu mengubahnya menjadi tulisan, sehingga gagasannya tidak tertahan oleh kesulitan mengeja.</li>
                <li><strong>Kerangka tulisan dan peta pikiran.</strong> Lembar berisi kotak "awal, tengah, akhir" atau peta pikiran membantu anak menyusun ide sebelum menulis.</li>
                <li><strong>Daftar kata sering dipakai.</strong> Kartu berisi kata-kata yang sering salah dieja, ditempel di meja belajar.</li>
            </ul>
            <p>Bila kesulitan menulis anak sangat menonjol, bicarakan dengan psikolog, karena kesulitan belajar spesifik bisa muncul dalam beberapa bentuk. Gambaran umumnya ada di artikel <a href="/artikel/kesulitan-belajar">kesulitan belajar</a> dan <a href="/artikel/diskalkulia-adalah">diskalkulia</a> untuk kesulitan berhitung.</p>

            <h2 id="multisensori">Alat Multisensori untuk Latihan Membaca</h2>
            <p>IDA menyatakan bahwa sebagian besar penyandang disleksia membutuhkan bantuan guru, tutor, atau terapis yang terlatih khusus dalam pendekatan bahasa yang multisensori dan terstruktur (${ext(L.idaBasics, 'IDA, Dyslexia Basics')}). Multisensori artinya anak belajar lewat penglihatan, pendengaran, gerak, dan sentuhan sekaligus. Alat yang sering dipakai dalam pendekatan ini:</p>
            <ul>
                <li><strong>Kartu huruf dan kartu suku kata</strong> untuk latihan bunyi huruf dan menggabungkan suku kata. Bahasa Indonesia banyak memakai pola suku kata yang teratur, sehingga kartu suku kata sangat berguna.</li>
                <li><strong>Huruf timbul, huruf amplas, atau huruf magnet</strong> yang bisa diraba dan disusun, agar anak "merasakan" bentuk huruf.</li>
                <li><strong>Nampan pasir atau garam</strong> untuk menulis huruf dengan jari sambil mengucapkan bunyinya.</li>
                <li><strong>Balok atau token berwarna</strong> untuk mewakili bunyi dalam kata, misalnya tiga token untuk kata "b-u-ku" yang dipecah per bunyi.</li>
            </ul>
            <p>Alat-alat ini bisa dibuat sendiri dari bahan di rumah. Kuncinya bukan pada alatnya, tetapi pada urutan pengajaran yang sistematis. Langkah-langkahnya dibahas di artikel <a href="/artikel/cara-mengajar-anak-disleksia-membaca">cara mengajar anak disleksia membaca</a> dan <a href="/artikel/belajar-membaca-ala-montessori">belajar membaca ala Montessori</a>.</p>

            <h2 id="belum-terbukti">Alat yang Belum Terbukti Membantu</h2>
            <p>Beberapa produk dipasarkan untuk anak disleksia, tetapi bukti ilmiahnya lemah. Orang tua sebaiknya berhati-hati sebelum mengeluarkan biaya.</p>
            <h3>Kacamata atau plastik berwarna</h3>
            <p>Pernyataan bersama American Academy of Pediatrics, American Academy of Ophthalmology, dan organisasi dokter mata anak lainnya menyatakan bahwa masalah penglihatan bukan penyebab disleksia, dan bahwa bukti ilmiah tidak mendukung latihan mata, terapi penglihatan perilaku, maupun filter atau lensa berwarna untuk memperbaiki prestasi belajar jangka panjang. Pendekatan ini tidak direkomendasikan (${ext(L.aapVision, 'AAP dkk., 2009')}). Tinjauan sistematis Griffiths dan rekan (2016) atas 51 publikasi juga menemukan bahwa efek plastik atau lensa berwarna umumnya kecil dan/atau mirip dengan efek plasebo (${ext(L.overlay, 'Griffiths dkk., 2016')}).</p>
            <p>Meski begitu, pemeriksaan mata tetap penting. Anak yang sulit membaca sebaiknya dipastikan penglihatannya normal, karena gangguan penglihatan bisa ikut mengganggu belajar.</p>
            <h3>Font khusus disleksia</h3>
            <p>Penelitian Kuster dan rekan (2018) pada 170 anak disleksia menemukan bahwa font "Dyslexie" tidak membuat anak membaca lebih cepat atau lebih akurat dibanding Arial, dan sebagian besar anak justru lebih suka Arial (${ext(L.font, 'Kuster dkk., 2018')}). Jadi tidak perlu membeli font khusus. Font yang jelas, ukuran cukup besar, dan jarak huruf yang lega sudah memadai.</p>

            <h2 id="memilih">Cara Memilih Alat Bantu yang Tepat</h2>
            <ol>
                <li><strong>Mulai dari asesmen.</strong> Pastikan anak memang mengalami disleksia, dan ketahui di mana kesulitan utamanya: mengenali kata, memahami bacaan, mengeja, atau menulis.</li>
                <li><strong>Cocokkan alat dengan kesulitan.</strong> Kesulitan memahami bacaan panjang cocok dibantu text-to-speech. Kesulitan mengeja cocok dibantu pengolah kata dan pemeriksa ejaan.</li>
                <li><strong>Mulai dari yang gratis dan sederhana.</strong> Fitur pembaca layar di perangkat yang sudah ada, kartu huruf buatan sendiri, dan lembar kerja dengan jarak huruf lebar tidak memerlukan biaya besar.</li>
                <li><strong>Waspadai klaim berlebihan.</strong> Produk yang menjanjikan "menyembuhkan disleksia" atau "lancar membaca dalam seminggu" patut dicurigai.</li>
                <li><strong>Coba, amati, sesuaikan.</strong> Gunakan satu atau dua alat selama beberapa minggu, catat perubahannya, lalu diskusikan dengan guru.</li>
                <li><strong>Libatkan anak.</strong> Alat yang membuat anak malu atau tidak nyaman cenderung ditinggalkan. Tanyakan pendapatnya.</li>
            </ol>

            <h2 id="sekolah">Peran Guru dan Sekolah</h2>
            <p>IDA menganjurkan agar rencana intervensi individual untuk anak dengan profil disleksia mencakup akomodasi yang sesuai, misalnya tambahan waktu (${ext(L.idaBasics, 'IDA, Dyslexia Basics')}). Di kelas, guru bisa:</p>
            <ul>
                <li>Membacakan soal ujian atau mengizinkan anak memakai text-to-speech untuk soal yang bukan tes membaca.</li>
                <li>Memberi tambahan waktu mengerjakan tugas dan ujian.</li>
                <li>Menilai pemahaman lewat jawaban lisan bila tulisan anak belum lancar.</li>
                <li>Menyediakan lembar kerja dengan huruf besar dan jarak lega.</li>
                <li>Tidak meminta anak membaca nyaring di depan kelas tanpa persiapan.</li>
            </ul>
            <p>Kerja sama guru dan orang tua sangat menentukan. Di <a href="/artikel/pendidikan-inklusi">sekolah inklusi</a>, penyesuaian seperti ini adalah bagian dari layanan bagi <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a>. Peran keluarga dibahas lebih jauh di artikel <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi anak berkebutuhan khusus, termasuk anak dengan kesulitan belajar, melalui pendidikan inklusi dan layanan terapi di Sleman. Untuk berdiskusi tentang kebutuhan belajar anak Anda, hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a> atau lihat <a href="/program">program YUKA</a>. Pilihan terapi lain dirangkum di artikel <a href="/artikel/macam-macam-terapi-pada-anak">macam-macam terapi pada anak</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/disleksia-adalah">Disleksia Adalah</a></h4>
                    <p>Pengertian, tanda, dan penanganan disleksia pada anak.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/cara-mengajar-anak-disleksia-membaca">Cara Mengajar Anak Disleksia Membaca</a></h4>
                    <p>Langkah mengajar membaca yang terstruktur.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/kesulitan-belajar">Kesulitan Belajar</a></h4>
                    <p>Jenis kesulitan belajar dan cara mengenalinya.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#Disleksia</a>
            <a href="#">#AlatBantuBelajar</a>
            <a href="#">#KesulitanBelajar</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.idaDef, 'International Dyslexia Association. <strong>Definition of Dyslexia.</strong> dyslexiaida.org')}</li>
              <li>${ext(L.idaBasics, 'International Dyslexia Association. <strong>Dyslexia Basics.</strong> dyslexiaida.org')}</li>
              <li>${ext(L.tts, 'Wood SG, Moxley JH, Tighe EL, Wagner RK. <strong>Does Use of Text-to-Speech and Related Read-Aloud Tools Improve Reading Comprehension for Students With Reading Disabilities? A Meta-Analysis.</strong> J Learn Disabil. 2018;51(1):73-84')}</li>
              <li>${ext(L.spacing, 'Zorzi M, Barbiero C, Facoetti A, dkk. <strong>Extra-large letter spacing improves reading in dyslexia.</strong> Proc Natl Acad Sci U S A. 2012;109(28):11455-9')}</li>
              <li>${ext(L.aapVision, 'American Academy of Pediatrics, American Academy of Ophthalmology, dkk. <strong>Joint statement: Learning disabilities, dyslexia, and vision.</strong> Pediatrics. 2009;124(2):837-44')}</li>
              <li>${ext(L.overlay, 'Griffiths PG, Taylor RH, Henderson LM, Barrett BT. <strong>The effect of coloured overlays and lenses on reading: a systematic review of the literature.</strong> Ophthalmic Physiol Opt. 2016;36(5):519-44')}</li>
              <li>${ext(L.font, 'Kuster SM, van Weerdenburg M, Gompel M, Bosman AMT. <strong>Dyslexie font does not benefit reading in children with or without dyslexia.</strong> Ann Dyslexia. 2018;68(1):25-42')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum, <strong>bukan nasihat klinis dan bukan promosi produk</strong>. YUKA tidak berafiliasi dengan pembuat produk atau aplikasi apa pun. Asesmen dan rencana intervensi perlu ditetapkan oleh tenaga profesional yang berkompeten. Sumber dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Alat%20Bantu%20Belajar%20Anak%20Disleksia%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Alat%20Bantu%20Belajar%20Anak%20Disleksia&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

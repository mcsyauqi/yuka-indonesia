#!/usr/bin/env node
'use strict';

// One-time generator for artikel/pivotal-response-training-prt-autisme.html
// (catchup 2026-09-27, kartu 9CTRWyca). Canonical shell via scripts/lib/article-shell.js.
// YMYL intervensi autisme. Every claim below was checked live on 2026-09-27 against:
// - Koegel, Koegel, McNerney 2001 J Clin Child Psychol (PMID 11294074): core pivotal areas = motivation,
//   responsivity to multiple cues, self-management, self-initiation of social interactions.
// - Mohammadzaheri et al. 2014 JADD (PMID 24840596, PMC4194254): PRT variables = child choice, task variation,
//   interspersing maintenance and acquisition trials, reinforcing attempts, direct natural consequences;
//   RCT 30 children 6-11 y in Iran school setting, PRT significantly more effective than structured ABA after 3 months.
// - Hardan et al. 2015 J Child Psychol Psychiatry (PMID 25346345): 53 children 2-6 y, PRT parent group vs psychoeducation,
//   12 weeks, greater improvement in utterances (d = 0.42), 84% parents met fidelity.
// - Gengoux et al. 2019 Pediatrics (PMID 31387868, PMC6856784): 48 children 2-5 y, 24 weeks PRT-P
//   (12 weeks: weekly 60-min parent training + 10 h/week in-home; next 12 weeks: monthly + 5 h/week),
//   functional utterances d = 0.61, 91% parents fidelity. PRT = NDBI, child interest, reward effort with natural
//   reinforcement, model language during play, wait for attempt.
// - Hume et al. 2021 JADD (PMC8510990): PRT merged into Naturalistic Intervention EBP category (Koegel & Koegel 2006).
// Hero: real CC BY-SA 4.0 photo (Ibex73, Wikimedia Commons), already in repo (used by social-skills-training-anak-autis).

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'pivotal-response-training-prt-autisme';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Pivotal Response Training (PRT) Autisme: Cara dan Bukti';
const META_DESC = 'Pivotal Response Training (PRT) untuk autisme melatih area kunci seperti motivasi lewat bermain. Pahami cara kerja, bukti riset, dan peran orang tua.';
const OG_TITLE = 'Pivotal Response Training (PRT) untuk Anak Autis: Cara Kerja, Bukti Riset, dan Peran Orang Tua';
const OG_DESC = 'Panduan untuk orang tua dan guru tentang Pivotal Response Training (PRT): empat area kunci, teknik memotivasi anak lewat bermain, hasil uji klinis, dan cara menerapkannya di rumah.';
const H1 = 'Pivotal Response Training (PRT) untuk Anak Autis: Cara Kerja, Bukti Riset, dan Peran Orang Tua';
const IMAGE_HERO = 'assets/images/artikel/tangan-anak-bermain-bersama-wikimedia.webp';
const IMAGE_HERO_ALT = 'Delapan telapak tangan anak dengan warna kulit berbeda terbuka di atas meja kayu, disusun melingkar dengan ujung jari saling mendekat';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-27T19:00:00+07:00';
const DATE_MODIFIED = '2026-09-27T19:00:00+07:00';
const DATE_DISPLAY = '27 September 2026';

const CREDIT = {
  name: 'Ibex73',
  source: 'https://commons.wikimedia.org/wiki/File:Playing_with_hands.JPG',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  koegel: 'https://pubmed.ncbi.nlm.nih.gov/11294074/',
  moh: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4194254/',
  hardan: 'https://pubmed.ncbi.nlm.nih.gov/25346345/',
  gengoux: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6856784/',
  hume: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8510990/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa itu Pivotal Response Training (PRT)?',
    a: 'PRT adalah intervensi perilaku naturalistik untuk anak autis yang dikembangkan Robert dan Lynn Koegel. Alih-alih melatih keterampilan satu per satu, PRT menyasar area kunci (pivotal) seperti motivasi, sehingga kemajuan di satu area diharapkan ikut memperbaiki keterampilan lain. Latihannya dilakukan lewat bermain dan rutinitas sehari-hari dengan mengikuti minat anak.'
  },
  {
    q: 'Apa beda PRT dengan terapi ABA biasa?',
    a: 'PRT berakar dari prinsip ABA, tetapi dilakukan secara naturalistik. ABA terstruktur (misalnya discrete trial) memakai latihan berulang di meja dengan materi yang dipilih terapis. PRT memakai benda dan kegiatan yang dipilih anak, memberi hadiah alami (anak langsung mendapat benda yang dimintanya), dan menghargai usaha anak walau belum sempurna.'
  },
  {
    q: 'Umur berapa anak bisa mengikuti PRT?',
    a: 'Uji klinis PRT melibatkan anak dari usia prasekolah sampai usia sekolah dasar. Hardan dan rekan (2015) meneliti anak usia 2 sampai 6 tahun, Gengoux dan rekan (2019) anak usia 2 sampai 5 tahun, dan Mohammadzaheri dan rekan (2014) anak usia 6 sampai 11 tahun. Kesesuaian untuk anak tertentu tetap ditentukan tenaga profesional setelah asesmen.'
  },
  {
    q: 'Apakah orang tua bisa belajar menerapkan PRT?',
    a: 'Bisa. PRT memang dirancang agar orang tua ikut menerapkannya. Dalam uji klinis Hardan dan rekan (2015), 84 persen orang tua di kelompok pelatihan PRT memenuhi kriteria ketepatan penerapan setelah 12 minggu. Pada studi Gengoux dan rekan (2019), angkanya 91 persen dalam 24 minggu. Pelatihan tetap sebaiknya didampingi terapis yang memahami PRT.'
  },
  {
    q: 'Apakah PRT menjamin anak autis bisa bicara?',
    a: 'Tidak. Penelitian menunjukkan rata-rata kemajuan komunikasi yang lebih besar dibanding kelompok pembanding, tetapi respons setiap anak berbeda. Hardan dan rekan (2015) juga mencatat bahwa kemampuan visual awal anak ikut memprediksi respons terhadap PRT. PRT adalah salah satu pilihan intervensi, bukan jaminan hasil.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Pivotal Response Training (PRT) Autisme', item: CANONICAL }
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
    height: 694,
    caption: 'Telapak tangan anak-anak disusun melingkar di atas meja kayu',
    creditText: `Foto: ${CREDIT.name} / Wikimedia Commons, ${CREDIT.license}`,
    author: { '@type': 'Person', name: CREDIT.name },
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
  keywords: 'pivotal response training prt autisme, pivotal response treatment, PRT autisme, intervensi naturalistik, terapi autisme, motivasi anak autis',
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
    <meta name="keywords" content="pivotal response training prt autisme, pivotal response treatment, PRT, intervensi autisme, YUKA">
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
                <span class="current">Pivotal Response Training (PRT) Autisme</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="694" fetchpriority="high">
            <figcaption>PRT menempatkan anak sebagai mitra bermain, bukan penerima perintah. Foto ini ilustrasi kebersamaan anak, bukan dokumentasi sesi PRT atau kegiatan YUKA.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Pivotal Response Training (PRT)</strong>, juga disebut <em>Pivotal Response Treatment</em>, adalah intervensi perilaku naturalistik untuk anak autis yang melatih <strong>area kunci</strong> perkembangan, yaitu motivasi, respons terhadap berbagai isyarat, pengelolaan diri, dan inisiatif sosial. Latihannya dilakukan lewat bermain dengan mengikuti minat anak, sehingga kemajuan di area kunci diharapkan ikut memperbaiki keterampilan lain yang tidak dilatih langsung.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini menjelaskan cara kerja PRT dan ringkasan penelitian, bukan panduan terapi mandiri. Kesesuaian PRT untuk anak ditentukan psikolog, terapis, atau dokter tumbuh kembang setelah asesmen. Hasil penelitian yang dikutip berlaku untuk kelompok anak tertentu dan tidak menjamin hasil yang sama pada setiap anak.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#apa-itu">Apa itu Pivotal Response Training</a></li>
                    <li><a href="#area-kunci">Empat area kunci dalam PRT</a></li>
                    <li><a href="#teknik">Teknik memotivasi anak dalam PRT</a></li>
                    <li><a href="#contoh">Contoh satu putaran latihan</a></li>
                    <li><a href="#bukti">Apa kata penelitian</a></li>
                    <li><a href="#tabel">PRT dibanding ABA terstruktur</a></li>
                    <li><a href="#orang-tua">Peran orang tua dan guru</a></li>
                    <li><a href="#batasan">Batasan yang perlu diketahui</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="apa-itu">Apa Itu Pivotal Response Training</h2>
            <p>PRT dikembangkan oleh Robert L. Koegel dan Lynn Kern Koegel di University of California, Santa Barbara. Kata <em>pivotal</em> berarti "poros" atau "kunci". Gagasannya sederhana: bila beberapa kemampuan dasar yang menjadi poros diperkuat, banyak keterampilan lain ikut membaik tanpa harus dilatih satu per satu.</p>
            <p>PRT berakar dari prinsip <a href="/artikel/terapi-aba">Applied Behavior Analysis (ABA)</a>, tetapi dijalankan secara naturalistik. Menurut ${ext(L.gengoux, 'Gengoux dan rekan (2019)')}, PRT termasuk intervensi perilaku perkembangan naturalistik (NDBI) yang dirancang untuk meningkatkan motivasi anak berinteraksi dengan berfokus pada minat anak dan menghargai usahanya dengan penguatan alami. Terapis atau orang tua mencontohkan bahasa selama bermain, lalu menunggu anak mencoba berkomunikasi sebelum memberi akses ke kegiatan yang disukainya.</p>
            <p>Dalam kajian besar praktik berbasis bukti untuk anak dan remaja autis, ${ext(L.hume, 'Hume dan rekan (2021)')} menggabungkan PRT ke dalam kategori <strong>Naturalistic Intervention</strong> (intervensi naturalistik), bersama pendekatan seperti JASPER dan Milieu Teaching. Artinya, PRT tidak lagi dihitung sebagai kategori tersendiri, tetapi sebagai salah satu model dalam kelompok intervensi yang dinilai berbasis bukti.</p>

            <h2 id="area-kunci">Empat Area Kunci dalam PRT</h2>
            <p>${ext(L.koegel, 'Koegel, Koegel, dan McNerney (2001)')} membahas beberapa area kunci yang dinilai sangat berpengaruh dalam intervensi autisme:</p>
            <ol>
                <li><strong>Motivasi.</strong> Area yang paling sering dilatih. Banyak anak autis tampak tidak tertarik pada kegiatan belajar. PRT berusaha membuat anak <em>ingin</em> berkomunikasi karena komunikasi itu langsung membawa hasil yang ia sukai.</li>
                <li><strong>Respons terhadap berbagai isyarat.</strong> Sebagian anak autis hanya memperhatikan satu ciri benda, misalnya warna saja. Latihan ini mengajak anak memperhatikan beberapa ciri sekaligus, misalnya "ambil bola <em>merah</em> yang <em>besar</em>".</li>
                <li><strong>Pengelolaan diri (<em>self-management</em>).</strong> Anak belajar mengenali dan mencatat perilakunya sendiri, lalu memberi hadiah untuk dirinya, sehingga tidak selalu bergantung pada pengawasan orang dewasa.</li>
                <li><strong>Inisiatif sosial.</strong> Anak belajar memulai interaksi, misalnya bertanya "apa itu?" atau mengajak teman bermain, bukan hanya menjawab saat ditanya.</li>
            </ol>
            <p>Koegel dan rekan menulis bahwa ketika anak autis termotivasi memulai interaksi sosial yang kompleks, siklus hambatan perkembangannya bisa berbalik, dan banyak anak menunjukkan hasil intervensi yang sangat baik. Ini temuan kelompok, bukan janji untuk setiap anak.</p>

            <h2 id="teknik">Teknik Memotivasi Anak dalam PRT</h2>
            <p>${ext(L.moh, 'Mohammadzaheri dan rekan (2014)')} merangkum variabel yang dipakai PRT untuk meningkatkan respons, kecepatan merespons, dan suasana hati anak saat belajar:</p>
            <ul>
                <li><strong>Pilihan anak.</strong> Anak memilih mainan, kegiatan, atau topik. Orang dewasa mengikuti, lalu menyisipkan kesempatan belajar di dalamnya.</li>
                <li><strong>Variasi tugas.</strong> Kegiatan diganti-ganti agar anak tidak bosan dengan latihan berulang yang sama.</li>
                <li><strong>Selingan tugas yang sudah dikuasai.</strong> Tugas baru diselingi tugas yang sudah bisa dilakukan anak, supaya anak tetap merasakan berhasil.</li>
                <li><strong>Menghargai usaha.</strong> Percobaan yang masuk akal tetap diberi hadiah walau belum sempurna. Anak yang berkata "bo" untuk bola tetap mendapat bolanya.</li>
                <li><strong>Konsekuensi alami.</strong> Hadiahnya berhubungan langsung dengan permintaan. Anak meminta mobil, ia mendapat mobil, bukan stiker atau makanan kecil yang tidak berkaitan.</li>
            </ul>
            <p>Prinsip menghargai usaha dan hadiah alami ini berbeda dari sistem hadiah umum. Untuk gambaran sistem hadiah di rumah, lihat juga artikel <a href="/artikel/reward-system-efektif-untuk-anak-autis">reward system untuk anak autis</a>.</p>

            <h2 id="contoh">Contoh Satu Putaran Latihan</h2>
            <p>Berikut gambaran sederhana satu putaran PRT saat anak bermain gelembung sabun. Ini penyederhanaan untuk memahami alurnya, bukan protokol terapi:</p>
            <ol>
                <li><strong>Ikuti pilihan anak.</strong> Anak tertarik pada botol gelembung. Orang tua memegang botolnya sehingga anak perlu berkomunikasi untuk mendapatkannya (kendali bersama).</li>
                <li><strong>Beri kesempatan yang jelas.</strong> Orang tua memastikan anak memperhatikan, lalu mencontohkan kata singkat: "tiup".</li>
                <li><strong>Tunggu.</strong> Beri jeda beberapa detik agar anak mencoba merespons.</li>
                <li><strong>Hargai usaha.</strong> Anak berkata "ti..." Itu dihitung usaha yang masuk akal.</li>
                <li><strong>Beri hadiah alami segera.</strong> Orang tua langsung meniup gelembung sambil mengulang "tiup!". Anak mendapat persis apa yang dimintanya.</li>
            </ol>
            <p>Putaran seperti ini diulang berkali-kali sepanjang hari, dalam kegiatan yang berbeda: saat makan, mandi, atau bermain mobil-mobilan. Targetnya disesuaikan kemampuan anak, dari satu suku kata sampai kalimat.</p>

            <h2 id="bukti">Apa Kata Penelitian</h2>
            <ul>
                <li><strong>Pelatihan orang tua berkelompok.</strong> Uji acak terkontrol oleh ${ext(L.hardan, 'Hardan dan rekan (2015)')} melibatkan 53 anak autis usia 2 sampai 6 tahun dengan keterlambatan bahasa yang bermakna. Selama 12 minggu, orang tua di satu kelompok belajar PRT, sedangkan kelompok lain mendapat edukasi umum tentang autisme. Anak di kelompok PRT menunjukkan peningkatan jumlah ucapan yang lebih besar (ukuran efek d = 0,42) dan kemajuan keterampilan komunikasi adaptif. Sebanyak 84 persen orang tua mampu menerapkan PRT sesuai kriteria.</li>
                <li><strong>Paket PRT 24 minggu.</strong> ${ext(L.gengoux, 'Gengoux dan rekan (2019)')} meneliti 48 anak autis usia 2 sampai 5 tahun. Dua belas minggu pertama berisi pelatihan orang tua 60 menit tiap minggu ditambah 10 jam per minggu terapi di rumah oleh klinisi, lalu 12 minggu berikutnya pelatihan bulanan ditambah 5 jam per minggu. Dibanding kelompok yang menunggu, anak di kelompok PRT menunjukkan peningkatan ucapan fungsional yang lebih besar (d = 0,61), dan 91 persen orang tua mampu menerapkan PRT dengan tepat.</li>
                <li><strong>PRT dibanding ABA terstruktur di sekolah.</strong> ${ext(L.moh, 'Mohammadzaheri dan rekan (2014)')} membandingkan PRT dengan ABA terstruktur pada 30 anak autis usia 6 sampai 11 tahun di Iran. Setelah 3 bulan, PRT secara signifikan lebih efektif memperbaiki area yang dilatih maupun yang tidak dilatih langsung.</li>
            </ul>
            <p><strong>Cara membaca bukti ini:</strong> uji acak terkontrol tentang PRT masih berukuran kecil sampai sedang (30 sampai 53 anak), dan ukuran efeknya tergolong sedang. Para peneliti sendiri menyebut perlunya penelitian lanjutan, misalnya untuk menentukan kombinasi intensitas dan durasi yang paling tepat. Ringkasan yang lebih luas tentang intervensi dini ada di artikel <a href="/artikel/systematic-review-intervensi-dini-autisme">tinjauan sistematis intervensi dini autisme</a>.</p>

            <h2 id="tabel">PRT Dibanding ABA Terstruktur</h2>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>PRT (naturalistik)</th><th>ABA terstruktur (discrete trial)</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Siapa memilih materi</strong></td><td>Anak, sesuai minatnya</td><td>Terapis, sesuai kurikulum</td></tr>
                    <tr><td><strong>Tempat latihan</strong></td><td>Bermain dan rutinitas sehari-hari</td><td>Umumnya di meja, sesi terjadwal</td></tr>
                    <tr><td><strong>Hadiah</strong></td><td>Alami, berkaitan langsung dengan permintaan anak</td><td>Sering berupa hadiah terpisah (pujian, token, makanan kecil)</td></tr>
                    <tr><td><strong>Respons yang dihargai</strong></td><td>Usaha yang masuk akal</td><td>Umumnya respons yang benar atau mendekati target</td></tr>
                    <tr><td><strong>Sasaran</strong></td><td>Area kunci (motivasi, inisiatif, dan lainnya)</td><td>Keterampilan spesifik satu per satu</td></tr>
                    <tr><td><strong>Pelaksana</strong></td><td>Terapis, guru, dan orang tua yang dilatih</td><td>Terutama terapis terlatih</td></tr>
                </tbody>
            </table>
            </div>
            <p>Kedua pendekatan sama-sama berakar pada prinsip perilaku dan tidak saling meniadakan. Banyak program menggabungkan keduanya sesuai kebutuhan anak. Pendekatan berbasis bermain lain yang sering dibandingkan dengan PRT adalah <a href="/artikel/floor-time-terapi">Floortime</a> dan <a href="/artikel/hanen-approach-terapi-bahasa-anak">Hanen</a>.</p>

            <h2 id="orang-tua">Peran Orang Tua dan Guru</h2>
            <p>PRT dirancang agar anak mendapat banyak kesempatan belajar di luar ruang terapi. ${ext(L.gengoux, 'Gengoux dan rekan (2019)')} menjelaskan bahwa pelatihan orang tua dalam PRT menambah paparan anak terhadap intervensi di sepanjang rutinitas harian. Beberapa langkah yang bisa dilakukan:</p>
            <ol>
                <li><strong>Cari pendamping yang memahami PRT.</strong> Tanyakan kepada psikolog atau terapis apakah mereka memakai pendekatan naturalistik dan bisa melatih orang tua.</li>
                <li><strong>Amati minat anak.</strong> Buat daftar benda dan kegiatan yang paling disukai anak. Daftar ini menjadi bahan latihan.</li>
                <li><strong>Pegang kendali bersama.</strong> Letakkan benda favorit di tempat yang terlihat tetapi perlu diminta, supaya anak punya alasan untuk berkomunikasi.</li>
                <li><strong>Sabar menunggu, cepat menghargai.</strong> Beri jeda agar anak mencoba, lalu hargai usahanya dengan segera.</li>
                <li><strong>Samakan cara dengan guru.</strong> Guru pendamping di <a href="/artikel/pendidikan-inklusi">sekolah inklusi</a> bisa memakai prinsip yang sama saat anak bermain atau belajar di kelas.</li>
            </ol>
            <p>Bila anak juga menjalani terapi wicara, cara memberi bantuan saat anak belum berhasil dibahas di artikel <a href="/artikel/metode-prompt-dalam-terapi-wicara">metode prompt dalam terapi wicara</a>. Tips mendampingi sehari-hari ada di <a href="/artikel/tips-mendampingi-anak-autis">tips mendampingi anak autis</a>.</p>

            <h2 id="batasan">Batasan yang Perlu Diketahui</h2>
            <ul>
                <li><strong>Bukan pengganti asesmen.</strong> Diagnosis <a href="/artikel/autisme-adalah">autisme</a> dan rencana intervensi tetap perlu ditetapkan tenaga profesional.</li>
                <li><strong>Respons anak berbeda.</strong> Hardan dan rekan (2015) menemukan kemampuan visual awal anak ikut memprediksi respons terhadap pelatihan PRT.</li>
                <li><strong>Butuh konsistensi.</strong> Dalam studi Gengoux dan rekan (2019), anak mendapat 10 jam per minggu terapi di rumah pada 12 minggu pertama, ditambah latihan oleh orang tua. Latihan sesekali tidak sama dengan program tersebut.</li>
                <li><strong>Penelitian di Indonesia masih terbatas.</strong> Studi yang dikutip di sini dilakukan di Amerika Serikat dan Iran, sehingga penerapannya perlu disesuaikan dengan bahasa dan budaya keluarga.</li>
            </ul>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi anak berkebutuhan khusus dan keluarganya lewat pendidikan inklusi di Sleman. Pemilihan intervensi seperti PRT tetap perlu asesmen oleh tenaga profesional. Ayah dan Bunda bisa berdiskusi dengan tim YUKA tentang pendampingan belajar anak melalui halaman <a href="/kontak">kontak</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/terapi-aba">Terapi ABA</a></h4>
                    <p>Prinsip terapi perilaku yang menjadi akar PRT.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/floor-time-terapi">Terapi Floortime</a></h4>
                    <p>Pendekatan berbasis bermain yang mengikuti minat anak.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/terapi-bermain">Terapi Bermain</a></h4>
                    <p>Manfaat bermain untuk perkembangan anak berkebutuhan khusus.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#PRT</a>
            <a href="#">#PivotalResponseTraining</a>
            <a href="#">#Autisme</a>
            <a href="#">#IntervensiDini</a>
            <a href="#">#TerapiAnak</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.koegel, '<strong>Pivotal areas in intervention for autism</strong>, Koegel RL, Koegel LK, McNerney EK, Journal of Clinical Child Psychology, 2001')}</li>
              <li>${ext(L.moh, '<strong>A randomized clinical trial comparison between pivotal response treatment (PRT) and structured applied behavior analysis (ABA) intervention for children with autism</strong>, Mohammadzaheri F dkk., Journal of Autism and Developmental Disorders, 2014')}</li>
              <li>${ext(L.hardan, '<strong>A randomized controlled trial of Pivotal Response Treatment Group for parents of children with autism</strong>, Hardan AY dkk., Journal of Child Psychology and Psychiatry, 2015')}</li>
              <li>${ext(L.gengoux, '<strong>A Pivotal Response Treatment Package for Children With Autism Spectrum Disorder: An RCT</strong>, Gengoux GW dkk., Pediatrics, 2019')}</li>
              <li>${ext(L.hume, '<strong>Evidence-Based Practices for Children, Youth, and Young Adults with Autism: Third Generation Review</strong>, Hume K dkk., Journal of Autism and Developmental Disorders, 2021')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti pemeriksaan, diagnosis, atau saran dari dokter, psikolog, dan terapis</strong>. Sumber dicek pada 27 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Pivotal%20Response%20Training%20(PRT)%20Autisme%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Pivotal%20Response%20Training%20(PRT)%20Autisme&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
            </div>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
</article>

    <section class="section bg-primary" style="padding: 4rem 0;">
        <div class="container text-center">
            <h2 style="color: var(--white); margin-bottom: 1rem;">Bantu Pendidikan Anak Berkebutuhan Khusus</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 2rem;">Setiap donasi Anda membantu anak-anak dengan beragam kemampuan mendapatkan pendidikan dan pendampingan yang sesuai kebutuhan mereka.</p>
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

#!/usr/bin/env node
'use strict';

// One-time generator for artikel/metode-prompt-dalam-terapi-wicara.html
// (catchup 2026-09-27, kartu 6y3JZxNd). Canonical shell via scripts/lib/article-shell.js.
// YMYL terapi wicara. Every claim below was checked live on 2026-09-27 against:
// - ASHA Practice Portal "Childhood Apraxia of Speech": PROMPT = tactile method based on touch, pressure,
//   kinesthetic and proprioceptive cues; SLP touches face, neck, head; DTTC adds/fades auditory, visual, tactile cues.
// - Dale & Hayden 2013 AJSLP (PMID 23813194): 4 children CAS 3;6-4;8, 8 weeks 2x/week, more gain with TKP cues.
// - Ward, Strauss, Leitao 2013 IJSLP (PMID 23025573) and Ward, Leitao, Strauss 2014 IJSLP (PMID 24521506):
//   6 children with CP aged 3-11, PROMPT motor-speech hierarchy, significant change, single-subject design.
// - Namasivayam et al. 2021 Pediatr Res (PMID 32357364): RCT 49 children SMD, 45 min 2x/week 10 weeks,
//   gains in motor control, articulation, word intelligibility; weak for sentence level and functional communication.
// - Rogers et al. 2006 JADD (PMID 16845576): 10 nonverbal children with autism, Denver vs PROMPT, 8/10 used 5+ words,
//   no difference between groups.
// - Hume et al. 2021 JADD (PMID 33449225, PMC8510990): 28 EBPs; Prompting = verbal, gestural, or physical assistance.
// - Libby et al. 2008 Behav Anal Pract (PMID 22477678): MTL fewer errors, LTM sometimes faster, MTL with delay.
// - Cengher et al. 2018 J Dev Phys Disabil (doi 10.1007/s10882-017-9575-8): 45 articles, all prompt-fading generally effective.
// Hero: real CC BY 2.0 photo (Shixart1985, Wikimedia Commons), already in repo (used by terapi-adhd-pada-anak).

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'metode-prompt-dalam-terapi-wicara';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Metode Prompt dalam Terapi Wicara: Jenis dan Buktinya';
const META_DESC = 'Metode prompt dalam terapi wicara mencakup teknik PROMPT dan hierarki bantuan bertahap. Pahami cara kerja, bukti riset, dan perannya. Baca panduannya.';
const OG_TITLE = 'Metode Prompt dalam Terapi Wicara: PROMPT, Hierarki Bantuan, dan Bukti Ilmiahnya';
const OG_DESC = 'Panduan untuk orang tua dan guru tentang metode prompt dalam terapi wicara: teknik sentuhan PROMPT, jenis prompt verbal sampai fisik, prompt fading, dan apa kata penelitian.';
const H1 = 'Metode Prompt dalam Terapi Wicara: PROMPT, Hierarki Bantuan, dan Bukti Ilmiahnya';
const IMAGE_HERO = 'assets/images/artikel/tangan-menyusun-balok-bentuk-warna-wikimedia.webp';
const IMAGE_HERO_ALT = 'Tangan seorang tenaga kesehatan berbaju hijau toska menyusun balok kayu warna-warni berbagai bentuk di papan pasak, dengan mainan edukatif lain di meja';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-27T09:00:00+07:00';
const DATE_MODIFIED = '2026-09-27T09:00:00+07:00';
const DATE_DISPLAY = '27 September 2026';

const CREDIT = {
  name: 'Shixart1985',
  source: 'https://commons.wikimedia.org/wiki/File:Child_engaging_in_colorful_wooden_block_sorting_activity.jpg',
  license: 'CC BY 2.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/2.0/deed.id'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  asha: 'https://www.asha.org/practice-portal/clinical-topics/childhood-apraxia-of-speech/',
  dale: 'https://pubmed.ncbi.nlm.nih.gov/23813194/',
  ward13: 'https://pubmed.ncbi.nlm.nih.gov/23025573/',
  ward14: 'https://pubmed.ncbi.nlm.nih.gov/24521506/',
  nama: 'https://pubmed.ncbi.nlm.nih.gov/32357364/',
  rogers: 'https://pubmed.ncbi.nlm.nih.gov/16845576/',
  hume: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8510990/',
  libby: 'https://pubmed.ncbi.nlm.nih.gov/22477678/',
  cengher: 'https://link.springer.com/article/10.1007/s10882-017-9575-8'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa kepanjangan PROMPT dalam terapi wicara?',
    a: 'PROMPT adalah singkatan dari Prompts for Restructuring Oral Muscular Phonetic Targets. Ini pendekatan terapi wicara berbasis sentuhan: terapis memberi isyarat sentuhan, tekanan, dan gerak pada wajah, rahang, dan area mulut anak untuk membantu membentuk gerakan bicara, sebagaimana dijelaskan ASHA dan Dale serta Hayden (2013).'
  },
  {
    q: 'Apa bedanya metode PROMPT dengan prompt biasa dalam terapi?',
    a: 'PROMPT adalah satu metode khusus untuk gangguan motorik bicara yang memakai sentuhan pada otot bicara. Prompt dalam arti umum adalah bantuan apa pun (verbal, isyarat, contoh, atau fisik) yang diberikan terapis agar anak bisa merespons dengan benar, lalu dikurangi bertahap. Prompt umum dipakai di banyak jenis terapi, termasuk terapi wicara dan ABA.'
  },
  {
    q: 'Apakah metode PROMPT cocok untuk anak autis?',
    a: 'Ada penelitian awal. Rogers dan rekan (2006) membandingkan PROMPT dengan Denver Model pada 10 anak autis nonverbal, dan 8 dari 10 anak memakai lima kata fungsional baru atau lebih di akhir program, tanpa perbedaan antara kedua kelompok. Sampelnya kecil, jadi keputusan metode tetap ditentukan terapis wicara setelah asesmen.'
  },
  {
    q: 'Apakah orang tua boleh melakukan teknik sentuhan PROMPT di rumah?',
    a: 'Teknik sentuhan PROMPT dirancang untuk dilakukan terapis wicara yang terlatih, karena posisi dan tekanan sentuhan disesuaikan dengan hasil asesmen tiap anak. Yang bisa dilakukan orang tua adalah meminta terapis menunjukkan bantuan sederhana yang aman untuk latihan di rumah, misalnya contoh ucapan atau isyarat visual.'
  },
  {
    q: 'Mengapa bantuan (prompt) harus dikurangi bertahap?',
    a: 'Tujuan prompt adalah membantu anak berhasil, lalu memindahkan kendali dari bantuan ke situasi aslinya. Kalau bantuan tidak pernah dikurangi, anak bisa hanya merespons saat dibantu. Tinjauan Cengher dan rekan (2018) atas 45 artikel menemukan berbagai cara pengurangan prompt umumnya efektif membantu anak menguasai keterampilan.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Metode Prompt dalam Terapi Wicara', item: CANONICAL }
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
    height: 668,
    caption: 'Tangan tenaga kesehatan menyusun balok kayu warna-warni di papan pasak',
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
  keywords: 'metode prompt dalam terapi wicara, PROMPT terapi wicara, prompting, hierarki prompt, prompt fading, apraksia bicara, terapi wicara anak',
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
    <meta name="keywords" content="metode prompt dalam terapi wicara, PROMPT, prompting, prompt fading, terapi wicara anak, YUKA">
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
                <span class="current">Metode Prompt dalam Terapi Wicara</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="668" fetchpriority="high">
            <figcaption>Alat bermain terstruktur seperti balok bentuk dan warna sering dipakai dalam kegiatan terapi dan belajar. Foto ini ilustrasi suasana terapi, bukan dokumentasi sesi PROMPT.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Metode prompt dalam terapi wicara punya dua arti.</strong> Pertama, <strong>PROMPT</strong> (<em>Prompts for Restructuring Oral Muscular Phonetic Targets</em>), yaitu teknik terapi berbasis sentuhan pada wajah dan rahang untuk anak dengan gangguan motorik bicara. Kedua, <strong>prompting</strong>, yaitu bantuan bertahap (verbal, isyarat, contoh, atau fisik) yang diberikan terapis agar anak berhasil merespons, lalu dikurangi pelan-pelan sampai anak mandiri.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini menjelaskan cara kerja metode dan ringkasan penelitian, bukan panduan terapi mandiri. Pemilihan metode untuk anak ditentukan terapis wicara setelah asesmen. Hasil penelitian yang dikutip berasal dari kelompok anak tertentu dan tidak menjamin hasil yang sama pada setiap anak.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#dua-arti">Dua arti "prompt" dalam terapi wicara</a></li>
                    <li><a href="#prompt-hayden">Metode PROMPT: terapi berbasis sentuhan</a></li>
                    <li><a href="#bukti">Apa kata penelitian tentang PROMPT</a></li>
                    <li><a href="#hierarki">Prompting: jenis bantuan dari ringan sampai penuh</a></li>
                    <li><a href="#mtl-ltm">Most-to-least atau least-to-most</a></li>
                    <li><a href="#fading">Prompt fading dan risiko ketergantungan</a></li>
                    <li><a href="#tabel">Tabel perbandingan</a></li>
                    <li><a href="#orang-tua">Peran orang tua dan guru</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="dua-arti">Dua Arti "Prompt" dalam Terapi Wicara</h2>
            <p>Orang tua yang mencari "metode prompt" sering menemukan dua hal berbeda dengan nama yang mirip. Keduanya dipakai terapis, tetapi tujuannya tidak sama:</p>
            <ul>
                <li><strong>PROMPT (huruf kapital)</strong> adalah nama sebuah pendekatan terapi untuk gangguan bunyi bicara yang bersumber dari masalah gerak (motorik). Terapis memakai sentuhan untuk "menuntun" gerakan rahang, bibir, dan lidah.</li>
                <li><strong>Prompt atau prompting (huruf kecil)</strong> adalah istilah umum untuk bantuan yang diberikan sebelum atau saat anak merespons. Kajian besar tentang praktik berbasis bukti untuk anak autis oleh ${ext(L.hume, 'Hume dan rekan (2021)')} mendefinisikan prompting sebagai bantuan verbal, gestur, atau fisik yang diberikan kepada anak untuk mendukungnya menguasai atau melakukan suatu perilaku atau keterampilan sasaran.</li>
            </ul>
            <p>Karena itu, bila terapis menyebut "anak ini akan dilatih dengan prompt", tanyakan dengan sopan maksudnya: apakah metode PROMPT dengan sentuhan, atau bantuan bertahap yang nanti dikurangi. Jawabannya menentukan apa yang bisa Ayah dan Bunda bantu di rumah.</p>

            <h2 id="prompt-hayden">Metode PROMPT: Terapi Berbasis Sentuhan</h2>
            <p>PROMPT dikembangkan oleh Deborah Hayden. Menurut ${ext(L.dale, 'Dale dan Hayden (2013)')}, pendekatan ini memakai isyarat taktil, kinestetik, dan proprioseptif (sering disingkat TKP), yaitu isyarat sentuhan, gerak, dan posisi, untuk mendukung dan membentuk gerakan organ artikulasi di mulut.</p>
            <p>Practice Portal milik ${ext(L.asha, 'American Speech-Language-Hearing Association (ASHA)')} menggolongkan PROMPT sebagai salah satu metode fasilitasi taktil. Dalam metode seperti ini, terapis memberi tekanan atau menyentuh wajah, leher, dan kepala anak sebagai isyarat untuk menghasilkan bunyi atau gerakan bicara yang benar.</p>
            <h3>Seperti apa dalam sesi terapi</h3>
            <p>Bayangkan anak kesulitan mengucapkan "ma" karena bibirnya belum menutup dengan tepat. Dengan PROMPT, terapis tidak hanya mencontohkan bunyi dan menunggu anak meniru. Terapis juga memberi isyarat sentuhan di area bibir atau rahang pada waktu yang tepat, sehingga anak "merasakan" gerakan yang dibutuhkan sambil mendengar dan melihat contohnya. Gambaran ini penyederhanaan; posisi dan tekanan sentuhan yang sebenarnya ditentukan terapis berdasarkan asesmen.</p>
            <h3>Hierarki motorik bicara</h3>
            <p>Terapis PROMPT menyusun sasaran latihan berdasarkan hierarki motorik bicara, yaitu urutan kendali gerak dari yang lebih dasar (misalnya kestabilan rahang) ke yang lebih rumit. Dalam studi ${ext(L.ward14, 'Ward, Leitão, dan Strauss (2014)')}, sasaran pertama tiap anak diambil dari prioritas terendah yang belum dikuasai pada hierarki ini, lalu dinaikkan satu tingkat di fase berikutnya.</p>
            <h3>Untuk kondisi apa PROMPT dipakai</h3>
            <p>Penelitian tentang PROMPT paling banyak dilakukan pada anak dengan <em>childhood apraxia of speech</em> (apraksia bicara pada anak), anak dengan <a href="/artikel/cerebral-palsy-adalah">cerebral palsy</a>, anak dengan keterlambatan motorik bicara berat, dan sebagian anak <a href="/artikel/autisme-adalah">autis</a> yang belum berbicara. Ringkasan buktinya ada di bagian berikut.</p>

            <h2 id="bukti">Apa Kata Penelitian tentang PROMPT</h2>
            <ul>
                <li><strong>Apraksia bicara.</strong> ${ext(L.dale, 'Dale dan Hayden (2013)')} menerapi 4 anak berusia 3 tahun 6 bulan sampai 4 tahun 8 bulan yang memenuhi kriteria apraksia bicara, dua kali seminggu selama 8 minggu. Keempatnya membuat kemajuan bermakna, dan kemajuannya lebih besar saat isyarat sentuhan disertakan.</li>
                <li><strong>Cerebral palsy.</strong> Dua studi dari Curtin University pada 6 anak cerebral palsy usia 3 sampai 11 tahun mencatat perubahan gerak rahang dan bibir yang terukur (${ext(L.ward13, 'Ward dkk., 2013')}) serta peningkatan akurasi bicara yang bermakna secara statistik pada semua peserta (${ext(L.ward14, 'Ward dkk., 2014')}).</li>
                <li><strong>Keterlambatan motorik bicara berat.</strong> Uji acak terkontrol oleh ${ext(L.nama, 'Namasivayam dan rekan (2021)')} melibatkan 49 anak. Kelompok yang menjalani PROMPT 45 menit, dua kali seminggu selama 10 minggu, menunjukkan perbaikan kendali motorik bicara, artikulasi, dan kejelasan bicara di tingkat kata dibanding kelompok tunggu. Perbaikan pada kejelasan kalimat dan komunikasi fungsional tergolong lemah.</li>
                <li><strong>Autisme nonverbal.</strong> ${ext(L.rogers, 'Rogers dan rekan (2006)')} membandingkan PROMPT dengan Denver Model pada 10 anak autis yang belum berbicara, dengan sesi terapi mingguan ditambah latihan harian oleh orang tua. Sebanyak 8 dari 10 anak memakai lima kata fungsional baru atau lebih secara spontan, dan tidak ada perbedaan hasil antara kedua kelompok.</li>
            </ul>
            <p><strong>Cara membaca bukti ini:</strong> sebagian besar studi berukuran kecil (4 sampai 10 anak) dengan desain subjek tunggal. Uji acak terkontrol baru ada untuk kelompok keterlambatan motorik bicara. Artinya, PROMPT punya dasar penelitian yang menjanjikan, tetapi bukan satu-satunya pilihan dan tidak cocok untuk semua penyebab <a href="/artikel/speech-delay-adalah">keterlambatan bicara</a>. Anak yang kesulitan bicaranya bersumber dari pendengaran atau pemahaman bahasa, misalnya, membutuhkan pendekatan lain.</p>

            <h2 id="hierarki">Prompting: Jenis Bantuan dari Ringan sampai Penuh</h2>
            <p>Arti kedua "prompt" jauh lebih luas. Hampir semua terapis wicara, guru pendamping, dan terapis <a href="/artikel/terapi-aba">ABA</a> memakai prompting. ${ext(L.hume, 'Hume dan rekan (2021)')} memasukkan prompting ke dalam 28 praktik yang memenuhi kriteria praktik berbasis bukti untuk anak dan remaja autis. Bentuk bantuan yang umum dipakai, diurutkan dari yang paling ringan:</p>
            <ol>
                <li><strong>Prompt visual.</strong> Gambar, kartu kata, atau simbol yang mengingatkan anak apa yang harus diucapkan. Anak yang memakai <a href="/artikel/aplikasi-komunikasi-aac-terbaik-untuk-anak">alat bantu komunikasi AAC</a> sering dibantu dengan prompt jenis ini.</li>
                <li><strong>Prompt gestur.</strong> Isyarat tubuh seperti menunjuk benda, mengangguk, atau membentuk mulut tanpa bersuara.</li>
                <li><strong>Prompt verbal.</strong> Petunjuk lisan, misalnya "Bilang apa kalau mau minum?" atau memberi bunyi awal kata ("mi...").</li>
                <li><strong>Prompt model.</strong> Terapis mengucapkan kata utuh untuk ditiru, misalnya "minum".</li>
                <li><strong>Prompt fisik sebagian.</strong> Sentuhan ringan untuk mengarahkan gerakan, misalnya menyentuh dagu sebagai pengingat membuka mulut.</li>
                <li><strong>Prompt fisik penuh.</strong> Bantuan fisik yang menuntun seluruh gerakan. Dalam terapi wicara, bantuan fisik pada area mulut dilakukan oleh terapis terlatih.</li>
            </ol>
            <p>ASHA juga menjelaskan pendekatan <em>Dynamic Temporal and Tactile Cueing</em> (DTTC) untuk apraksia bicara. Di sini terapis terus menambah atau mengurangi isyarat pendengaran, penglihatan, dan sentuhan setelah setiap percobaan, sesuai kebutuhan anak (${ext(L.asha, 'ASHA')}). Prinsipnya sama: bantuan secukupnya, lalu dikurangi.</p>

            <h2 id="mtl-ltm">Most-to-Least atau Least-to-Most</h2>
            <p>Ada dua cara umum menyusun urutan bantuan:</p>
            <ul>
                <li><strong>Most-to-least (MTL)</strong>: mulai dari bantuan paling besar agar anak langsung berhasil, lalu bantuan dikurangi seiring kemampuan anak meningkat.</li>
                <li><strong>Least-to-most (LTM)</strong>: beri anak kesempatan merespons sendiri dulu, lalu bantuan dinaikkan setingkat demi setingkat bila anak belum berhasil.</li>
            </ul>
            <p>Studi ${ext(L.libby, 'Libby dan rekan (2008)')} pada anak autis membandingkan keduanya. Semua peserta berhasil belajar dengan MTL, dan MTL menghasilkan lebih sedikit kesalahan, tetapi tiga peserta justru belajar lebih cepat dengan LTM. Versi MTL yang diberi jeda waktu sebelum bantuan (memberi kesempatan anak mencoba sendiri) menghasilkan kecepatan belajar hampir setara LTM dengan kesalahan lebih sedikit. Pesannya, tidak ada satu urutan yang paling benar untuk semua anak. Terapis memilih berdasarkan respons anak.</p>

            <h2 id="fading">Prompt Fading dan Risiko Ketergantungan</h2>
            <p>Bantuan yang terus diberikan tanpa dikurangi bisa membuat anak hanya berbicara saat dibantu. Karena itu, setiap rencana prompting perlu disertai <em>prompt fading</em>, yaitu pengurangan bantuan secara bertahap. Caranya bisa dengan menurunkan jenis bantuan (dari model ke verbal, lalu ke gestur), mengurangi kekuatan sentuhan, atau memberi jeda waktu lebih lama sebelum bantuan datang.</p>
            <p>Tinjauan sistematis ${ext(L.cengher, 'Cengher dan rekan (2018)')} atas 45 artikel penelitian menemukan bahwa berbagai prosedur pengurangan prompt umumnya efektif membantu anak menguasai keterampilan, walau efisiensinya berbeda antar anak. Tanda anak mulai siap bantuannya dikurangi, antara lain, ia mulai merespons sebelum bantuan datang.</p>

            <h2 id="tabel">Tabel Perbandingan</h2>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>Metode PROMPT</th><th>Prompting (bantuan bertahap)</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Apa itu</strong></td><td>Pendekatan terapi khusus berbasis sentuhan pada wajah, rahang, dan area mulut</td><td>Strategi umum memberi bantuan lalu menguranginya</td></tr>
                    <tr><td><strong>Sasaran utama</strong></td><td>Gerakan bicara (motorik bicara)</td><td>Keterampilan apa saja: bicara, komunikasi, bina diri, akademik</td></tr>
                    <tr><td><strong>Siapa yang melakukan</strong></td><td>Terapis wicara terlatih</td><td>Terapis, guru, dan orang tua yang sudah diajari terapis</td></tr>
                    <tr><td><strong>Contoh kondisi</strong></td><td>Apraksia bicara, cerebral palsy, keterlambatan motorik bicara</td><td>Autisme, speech delay, disabilitas intelektual, dan lainnya</td></tr>
                    <tr><td><strong>Bukti</strong></td><td>Studi kecil dan satu uji acak terkontrol (Dale 2013, Ward 2013 dan 2014, Rogers 2006, Namasivayam 2021)</td><td>Termasuk praktik berbasis bukti untuk autisme (Hume 2021)</td></tr>
                </tbody>
            </table>
            </div>

            <h2 id="orang-tua">Peran Orang Tua dan Guru</h2>
            <p>Terapi di ruang terapi biasanya hanya berlangsung beberapa jam per minggu. Latihan di rumah dan di sekolah membantu keterampilan anak berpindah ke kehidupan sehari-hari. Beberapa hal yang bisa dilakukan:</p>
            <ol>
                <li><strong>Tanyakan tingkat bantuan saat ini.</strong> Minta terapis menyebut jenis prompt yang sedang dipakai dan tahap pengurangannya, supaya bantuan di rumah tidak lebih besar atau lebih kecil dari di ruang terapi.</li>
                <li><strong>Beri kesempatan anak mencoba dulu.</strong> Tunggu beberapa detik sebelum membantu. Jeda kecil ini memberi ruang anak untuk merespons sendiri.</li>
                <li><strong>Pakai bantuan yang aman di rumah.</strong> Contoh ucapan, gambar, dan isyarat tangan bisa dilakukan siapa saja. Sentuhan pada area mulut sebaiknya hanya dilakukan bila terapis sudah mencontohkan dan mengizinkannya.</li>
                <li><strong>Catat kemajuan sederhana.</strong> Misalnya, berapa kali anak meminta minum tanpa bantuan dalam sehari. Catatan ini membantu terapis menentukan kapan bantuan dikurangi.</li>
                <li><strong>Libatkan guru.</strong> Guru pendamping di <a href="/artikel/pendidikan-inklusi">sekolah inklusi</a> bisa memakai urutan bantuan yang sama agar anak tidak bingung.</li>
            </ol>
            <p>Bila Ayah dan Bunda belum yakin apakah anak membutuhkan terapi, artikel <a href="/artikel/terapi-wicara">terapi wicara</a> dan <a href="/artikel/perbedaan-terapi-okupasi-dan-terapi-wicara">perbedaan terapi okupasi dan terapi wicara</a> bisa membantu memahami langkah awalnya. Untuk latihan otot mulut, lihat juga <a href="/artikel/terapi-wicara-oral-motor-exercises">oral motor exercises dalam terapi wicara</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi anak berkebutuhan khusus dan keluarganya lewat pendidikan inklusi di Sleman. Pemilihan metode terapi wicara, termasuk PROMPT, tetap perlu asesmen oleh terapis wicara. Ayah dan Bunda bisa berdiskusi dengan tim YUKA tentang pendampingan belajar anak melalui halaman <a href="/kontak">kontak</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/terapi-wicara">Terapi Wicara</a></h4>
                    <p>Manfaat, proses, dan kapan anak membutuhkannya.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/speech-delay-adalah">Speech Delay pada Anak</a></h4>
                    <p>Penyebab, tanda, dan cara menangani keterlambatan bicara.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/terapi-aba">Terapi ABA</a></h4>
                    <p>Prinsip terapi perilaku yang juga memakai prompting.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#TerapiWicara</a>
            <a href="#">#MetodePROMPT</a>
            <a href="#">#Prompting</a>
            <a href="#">#ApraksiaBicara</a>
            <a href="#">#SpeechDelay</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.asha, '<strong>Childhood Apraxia of Speech</strong>, Practice Portal, American Speech-Language-Hearing Association (ASHA)')}</li>
              <li>${ext(L.dale, '<strong>Treating speech subsystems in childhood apraxia of speech with tactual input: the PROMPT approach</strong>, Dale PS, Hayden DA, American Journal of Speech-Language Pathology, 2013')}</li>
              <li>${ext(L.ward13, '<strong>Kinematic changes in jaw and lip control of children with cerebral palsy following participation in a motor-speech (PROMPT) intervention</strong>, Ward R dkk., International Journal of Speech-Language Pathology, 2013')}</li>
              <li>${ext(L.ward14, '<strong>An evaluation of the effectiveness of PROMPT therapy in improving speech production accuracy in six children with cerebral palsy</strong>, Ward R dkk., International Journal of Speech-Language Pathology, 2014')}</li>
              <li>${ext(L.nama, '<strong>PROMPT intervention for children with severe speech motor delay: a randomized control trial</strong>, Namasivayam AK dkk., Pediatric Research, 2021')}</li>
              <li>${ext(L.rogers, '<strong>Teaching young nonverbal children with autism useful speech: a pilot study of the Denver Model and PROMPT interventions</strong>, Rogers SJ dkk., Journal of Autism and Developmental Disorders, 2006')}</li>
              <li>${ext(L.hume, '<strong>Evidence-Based Practices for Children, Youth, and Young Adults with Autism: Third Generation Review</strong>, Hume K dkk., Journal of Autism and Developmental Disorders, 2021')}</li>
              <li>${ext(L.libby, '<strong>A Comparison of Most-to-Least and Least-to-Most Prompting on the Acquisition of Solitary Play Skills</strong>, Libby ME dkk., Behavior Analysis in Practice, 2008')}</li>
              <li>${ext(L.cengher, '<strong>A Review of Prompt-Fading Procedures: Implications for Effective and Efficient Skill Acquisition</strong>, Cengher M dkk., Journal of Developmental and Physical Disabilities, 2018')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti pemeriksaan, diagnosis, atau saran dari dokter anak, terapis wicara, dan tenaga kesehatan</strong>. Sumber dicek pada 27 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Metode%20Prompt%20dalam%20Terapi%20Wicara%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Metode%20Prompt%20dalam%20Terapi%20Wicara&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

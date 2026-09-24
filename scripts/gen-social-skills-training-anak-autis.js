#!/usr/bin/env node
'use strict';

// One-time generator for artikel/social-skills-training-anak-autis.html
// (catchup 2026-09-25, kartu 3Nv1JtM0). Canonical shell via scripts/lib/article-shell.js.
// YMYL (intervensi autisme): every factual statement links inline to NICE CG170, CDC,
// NIMH, AAP (Pediatrics 2020), Cochrane (Reichow 2012), meta-analyses (Gates 2017,
// Wolstencroft 2018), UCLA PEERS, or Kemenkes Ayo Sehat. The article promises no outcome
// and refers families to psikolog klinis / dokter spesialis anak / tim tumbuh kembang.
// Hero is a real CC BY-SA 4.0 photo from Wikimedia Commons showing only children's hands
// (no identifiable child), with visible credit. Links to /artikel/autisme-adalah as the
// pillar for the definition instead of re-explaining it (no cannibalization).

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'social-skills-training-anak-autis';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const TITLE_TAG = 'Social Skills Training Anak Autis: Panduan Orang Tua';
const META_DESC = 'Social skills training anak autis melatih cara menyapa, bergiliran, dan berteman. Pahami bukti ilmiahnya, bentuk latihannya, dan cara memilih program.';
const OG_TITLE = 'Social Skills Training Anak Autis: Bukti Ilmiah, Bentuk Latihan, dan Peran Orang Tua';
const OG_DESC = 'Panduan social skills training untuk anak autis berdasarkan NICE, CDC, Cochrane, dan meta-analisis: apa yang dilatih, seberapa kuat buktinya, contoh program seperti PEERS, latihan di rumah, dan cara memilih layanan.';
const H1 = 'Social Skills Training Anak Autis: Bukti Ilmiah, Bentuk Latihan, dan Peran Orang Tua';
const IMAGE_HERO = 'assets/images/artikel/tangan-anak-bermain-bersama-wikimedia.webp';
const IMAGE_HERO_ALT = 'Sembilan telapak tangan anak dengan warna kulit berbeda terbuka di atas meja kayu, disusun melingkar dengan ujung jari saling mendekat, lengan baju terlihat di tepi foto';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25T04:30:00+07:00';
const DATE_MODIFIED = '2026-09-25T04:30:00+07:00';
const DATE_DISPLAY = '25 September 2026';

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

const faq = [
  {
    q: 'Mulai usia berapa anak autis bisa ikut social skills training?',
    a: 'Latihan bisa dimulai sejak usia prasekolah, tetapi bentuknya berbeda. NICE menganjurkan intervensi sosial-komunikasi berbasis bermain yang melibatkan orang tua, pengasuh, atau guru untuk anak prasekolah, dan melibatkan teman sebaya untuk anak usia sekolah. Program kelompok seperti PEERS dari UCLA punya versi untuk usia 4 sampai 6 tahun dan untuk remaja 11 sampai 17 tahun.'
  },
  {
    q: 'Apakah social skills training bisa menyembuhkan autisme?',
    a: 'Tidak. Autisme bukan penyakit yang disembuhkan, dan tujuan latihan adalah membantu anak memahami serta menjalani interaksi sosial dengan lebih nyaman. Tinjauan Cochrane menemukan bukti bahwa kelompok keterampilan sosial dapat meningkatkan kompetensi sosial pada sebagian anak dan remaja autis, dengan catatan kualitas buktinya masih terbatas. Hasil tiap anak berbeda.'
  },
  {
    q: 'Berapa lama program social skills training biasanya berjalan?',
    a: 'Durasinya bergantung pada program. Sebagai contoh, PEERS for Adolescents dari UCLA berlangsung 16 sesi mingguan, masing-masing 90 menit, dengan sesi terpisah untuk orang tua. Meta-analisis Wolstencroft dan rekan (2018) menemukan program yang lebih lama atau lebih intensif, serta yang menyertakan kelompok orang tua, cenderung menunjukkan efek lebih besar.'
  },
  {
    q: 'Apakah anak cukup ikut kelas di tempat terapi saja?',
    a: 'Sebaiknya tidak. Meta-analisis Gates dan rekan (2017) menunjukkan efek latihan kelompok paling besar pada pengetahuan sosial anak, sedangkan perubahan yang dilaporkan guru tidak bermakna. Artinya keterampilan yang dipelajari di ruang terapi perlu dilatih ulang di rumah dan di sekolah agar terbawa ke kehidupan sehari-hari.'
  },
  {
    q: 'Siapa yang sebaiknya memberikan social skills training?',
    a: 'NICE menyebut intervensi sosial-komunikasi sebaiknya diberikan oleh tenaga profesional yang terlatih. Di Indonesia, orang tua bisa memulai dari dokter spesialis anak atau klinik tumbuh kembang, lalu dirujuk ke psikolog klinis, terapis okupasi, atau terapis wicara yang berpengalaman menangani anak autis.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Social Skills Training Anak Autis', item: CANONICAL }
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
    caption: 'Telapak tangan beberapa anak disusun melingkar di atas meja',
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
  keywords: 'social skills training anak autis, pelatihan keterampilan sosial anak autis, social skills group autisme, PEERS, terapi sosial anak autis',
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

const L = {
  nice: 'https://www.nice.org.uk/guidance/cg170/chapter/Recommendations',
  cdc: 'https://www.cdc.gov/autism/treatment/index.html',
  nimh: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd',
  aap: 'https://doi.org/10.1542/peds.2019-3447',
  cochrane: 'https://doi.org/10.1002/14651858.CD008511.pub2',
  gates: 'https://doi.org/10.1016/j.cpr.2017.01.006',
  wolstencroft: 'https://doi.org/10.1007/s10803-018-3485-1',
  peers: 'https://teams.semel.ucla.edu/peers/programs',
  kemenkes: 'https://ayosehat.kemkes.go.id/topik-penyakit/pola-asuh-dan-perkembangan-anak/autisme'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- SEO Meta Tags -->
    <title>${TITLE_TAG}</title>
    <meta name="description" content="${META_DESC}">
    <meta name="keywords" content="social skills training anak autis, pelatihan keterampilan sosial anak autis, social skills group autisme, PEERS, terapi sosial anak autis, YUKA">
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

    <style>
        .article-header { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); padding: 8rem 0 4rem; color: var(--white); }
        .article-header h1 { color: var(--white) !important; }
        .article-header .breadcrumb a { color: rgba(255,255,255,0.8); }
        .article-header .breadcrumb .current { color: var(--white); }
        .article-meta { display: flex; gap: 2rem; margin-top: 1.5rem; flex-wrap: wrap; }
        .article-meta span { display: flex; align-items: center; gap: 0.5rem; color: rgba(255,255,255,0.9); font-size: 0.9rem; }
        .article-content { max-width: 800px; margin: 0 auto; padding: 3rem 1.5rem; }
        .article-featured-image { margin: -2rem auto 2rem; max-width: 600px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .article-featured-image img { width: 100%; height: auto; }
        .article-featured-image figcaption { padding: 0.6rem 1rem; font-size: 0.85rem; color: var(--gray-600); text-align: center; background: var(--gray-50); }
        .article-featured-image figcaption a { color: #1565C0; text-decoration: underline; }
        .article-body { font-size: 1.1rem; line-height: 1.9; color: var(--gray-700); }
        .article-body h2 { color: var(--primary); margin: 2.5rem 0 1rem; font-size: 1.75rem; }
        .article-body h3 { color: var(--gray-800); margin: 2rem 0 1rem; font-size: 1.35rem; }
        .article-body p { margin-bottom: 1.5rem; }
        .article-body ul, .article-body ol { margin: 1.5rem 0; padding-left: 2rem; }
        .article-body a { color: #1565C0; text-decoration: underline; text-underline-offset: 2px; }
        .article-body a:hover { color: #0D47A1; }
        .story-highlight { background: linear-gradient(135deg, #e3f2fd 0%, #fff 100%); border: 2px solid #2196F3; border-radius: 16px; padding: 2rem; margin: 2rem 0; }
        .story-highlight h3 { color: #1565C0; margin-top: 0; }
        .article-tags { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-200); }
        .article-tags a { background: var(--gray-100); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; color: var(--gray-600); }
        .article-tags a:hover { background: var(--primary); color: var(--white); }
        .article-share { display: flex; align-items: center; gap: 1rem; margin-top: 2rem; }
        .share-buttons { display: flex; gap: 0.5rem; }
        .share-btn { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--white); }
        .share-btn.whatsapp { background: #25D366; }
        .share-btn.facebook { background: #1877F2; }
        .toc { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 12px; padding: 1.5rem 2rem; margin: 2rem 0; }
        .toc h3 { margin-top: 0; color: var(--primary); font-size: 1.1rem; }
        .toc ol { margin: 0; padding-left: 1.5rem; }
        .toc li { margin-bottom: 0.5rem; }
        .toc a { color: var(--gray-700); text-decoration: none; }
        .toc a:hover { color: var(--primary); }
        .info-box { background: #fff3e0; border-left: 4px solid #ff9800; padding: 1.5rem; margin: 2rem 0; border-radius: 0 12px 12px 0; }
        .info-box h4 { color: #e65100; margin-top: 0; }
        .crisis-box { background: #fdecea; border-left: 4px solid #c62828; padding: 1.5rem; margin: 2rem 0; border-radius: 0 12px 12px 0; }
        .crisis-box h4 { color: #b71c1c; margin-top: 0; }
        .related-articles { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0; }
        .related-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: 12px; padding: 1.5rem; transition: box-shadow 0.3s; }
        .related-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
        .related-card h4 { font-size: 1rem; margin: 0 0 0.5rem; }
        .related-card a { color: var(--primary); text-decoration: none; font-weight: 600; }
        .related-card p { font-size: 0.9rem; color: var(--gray-600); margin: 0; }
        .classification-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.98rem; }
        .classification-table th, .classification-table td { border: 1px solid var(--gray-200); padding: 0.75rem 1rem; text-align: left; vertical-align: top; }
        .classification-table th { background: var(--primary); color: var(--white); font-weight: 600; }
        .classification-table tr:nth-child(even) { background: var(--gray-50); }
    </style>
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
                <span class="current">Social Skills Training Anak Autis</span>
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
            <figcaption>Bermain dan berkegiatan bersama memberi anak kesempatan alami untuk berlatih bergiliran dan bekerja sama. Foto ini hanya memperlihatkan tangan anak-anak dan tidak menggambarkan anak autis atau peserta program tertentu.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Social skills training anak autis adalah latihan terstruktur untuk membantu anak memahami dan mempraktikkan cara berinteraksi, misalnya menyapa, bergiliran, memulai obrolan, bermain bersama, dan menghadapi penolakan.</strong> Latihan ini biasanya diberikan dalam kelompok kecil, disertai contoh langsung, bermain peran, dan tugas latihan di rumah. Tinjauan Cochrane menemukan bukti bahwa kelompok keterampilan sosial dapat meningkatkan kompetensi sosial pada sebagian anak dan remaja autis, tetapi hasilnya tidak sama pada semua anak dan perlu didukung latihan di rumah serta di sekolah.</p>

            <p>Artikel ini ditulis untuk orang tua, guru, dan pendamping yang ingin tahu apa saja yang dilatih, seberapa kuat bukti ilmiahnya, contoh program yang sudah diteliti, dan cara memilih layanan yang tepat. Bila Ayah dan Bunda baru mulai mengenal kondisi ini, pengertian dasarnya sudah kami bahas di artikel <a href="autisme-adalah">autisme adalah</a>, jadi di sini kita langsung fokus pada latihan keterampilan sosial.</p>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini berisi informasi umum, bukan rencana terapi untuk anak tertentu. Jenis, intensitas, dan tujuan latihan sebaiknya ditentukan bersama dokter spesialis anak, psikolog klinis, atau terapis yang sudah memeriksa anak secara langsung. Tidak ada program yang bisa menjanjikan hasil yang sama untuk setiap anak.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu social skills training</a></li>
                    <li><a href="#yang-dilatih">Keterampilan yang biasa dilatih</a></li>
                    <li><a href="#bukti">Seberapa kuat bukti ilmiahnya</a></li>
                    <li><a href="#bentuk">Bentuk-bentuk latihan</a></li>
                    <li><a href="#pedoman">Apa kata pedoman klinis</a></li>
                    <li><a href="#di-rumah">Melanjutkan latihan di rumah</a></li>
                    <li><a href="#memilih">Cara memilih program</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Social Skills Training untuk Anak Autis</h2>
            <p>${ext(L.nimh, 'National Institute of Mental Health (NIMH)')} menjelaskan bahwa orang dengan autisme memiliki gejala yang sangat beragam, termasuk perbedaan dalam perilaku sosial dan komunikasi. ${ext(L.kemenkes, 'Kementerian Kesehatan RI')} juga menyebut autisme sebagai gangguan perkembangan neurologis yang memengaruhi interaksi sosial, komunikasi, dan perilaku. Karena itu, banyak anak autis membutuhkan bantuan khusus untuk memahami "aturan tak tertulis" dalam pergaulan yang bagi anak lain dipelajari tanpa sadar.</p>
            <p>Social skills training (pelatihan keterampilan sosial) mengisi celah itu dengan cara yang eksplisit. Aturan sosial dipecah menjadi langkah kecil, dijelaskan dengan bahasa sederhana, dicontohkan, lalu dipraktikkan berulang dalam situasi yang aman. ${ext(L.cdc, 'Centers for Disease Control and Prevention (CDC)')} menggambarkan kelompok keterampilan sosial sebagai kesempatan bagi individu autis untuk berlatih keterampilan sosial di lingkungan yang terstruktur.</p>
            <p>Penting dipahami sejak awal: tujuannya bukan membuat anak "tampak tidak autis". Tujuannya membantu anak punya pilihan dan kepercayaan diri saat ingin berteman, bekerja sama di kelas, atau meminta bantuan, dengan tetap menghargai cara anak berkomunikasi.</p>

            <h2 id="yang-dilatih">Keterampilan yang Biasa Dilatih</h2>
            <p>Materi latihan disesuaikan dengan usia dan tahap perkembangan anak. Secara umum, program keterampilan sosial menyentuh beberapa kelompok kemampuan berikut:</p>
            <ul>
                <li><strong>Perhatian bersama (joint attention).</strong> Melihat benda yang ditunjuk orang lain, menunjukkan sesuatu yang menarik, dan berbagi fokus. Pedoman NICE menyebut peningkatan perhatian bersama, keterlibatan, dan komunikasi timbal balik sebagai sasaran intervensi sosial-komunikasi.</li>
                <li><strong>Memulai dan menjaga interaksi.</strong> Menyapa, memanggil nama teman, mengajak bermain, dan menanggapi ajakan.</li>
                <li><strong>Percakapan dua arah.</strong> Bergantian bicara, bertanya balik, tetap pada topik, dan mengenali kapan lawan bicara mulai bosan.</li>
                <li><strong>Bermain bersama.</strong> Bergiliran, berbagi mainan, mengikuti aturan permainan, dan menerima kalah.</li>
                <li><strong>Mengenali emosi.</strong> Membaca ekspresi wajah, nada suara, dan bahasa tubuh, serta menyebutkan perasaan sendiri.</li>
                <li><strong>Pertemanan dan konflik.</strong> Memilih teman yang cocok, bergabung dalam kelompok, menghadapi ejekan, dan menyelesaikan perselisihan. Materi ini lebih banyak dipakai untuk anak usia sekolah dan remaja.</li>
            </ul>
            <p>Untuk anak yang belum banyak berbicara, latihan biasanya dimulai dari komunikasi dasar lebih dulu, misalnya dengan bantuan gambar atau perangkat komunikasi. Pilihan alatnya dibahas di artikel <a href="aplikasi-komunikasi-aac-terbaik-untuk-anak">aplikasi komunikasi AAC untuk anak</a>.</p>

            <h2 id="bukti">Seberapa Kuat Bukti Ilmiahnya</h2>
            <p>Social skills training sering direkomendasikan, tetapi orang tua berhak tahu apa yang benar-benar sudah terbukti. Tiga tinjauan sistematis berikut paling sering dijadikan rujukan:</p>
            <table class="classification-table">
                <thead>
                    <tr><th>Tinjauan</th><th>Cakupan</th><th>Temuan utama</th></tr>
                </thead>
                <tbody>
                    <tr><td>${ext(L.cochrane, 'Cochrane, Reichow dan rekan (2012)')}</td><td>5 uji acak terkontrol, 196 peserta usia 6 sampai 21 tahun</td><td>Ada bukti peningkatan kompetensi sosial (effect size 0,47) dan kualitas pertemanan (0,41). Tidak ada perbedaan bermakna pada kemampuan mengenali emosi.</td></tr>
                    <tr><td>${ext(L.gates, 'Gates dan rekan (2017), Clinical Psychology Review')}</td><td>19 uji acak terkontrol program kelompok</td><td>Efek keseluruhan sedang (g = 0,51). Efek terbesar pada pengetahuan sosial anak, sedangkan laporan guru tidak menunjukkan perubahan bermakna.</td></tr>
                    <tr><td>${ext(L.wolstencroft, 'Wolstencroft dan rekan (2018), Journal of Autism and Developmental Disorders')}</td><td>Uji acak terkontrol program kelompok, usia 6 sampai 25 tahun</td><td>Program yang menyertakan kelompok orang tua, serta yang lebih lama atau lebih intensif, menunjukkan efek lebih besar.</td></tr>
                </tbody>
            </table>
            <p>Ada beberapa catatan jujur dari para peneliti yang perlu diketahui orang tua. Tim Cochrane menilai risiko bias pada studi-studi tersebut tinggi, dan semua studi yang mereka ulas dilakukan di Amerika Serikat, sebagian besar pada anak usia 7 sampai 12 tahun dengan kemampuan intelektual rata-rata atau di atas rata-rata. Jadi hasilnya belum tentu berlaku sama untuk anak yang lebih kecil atau yang juga memiliki <a href="disabilitas-intelektual-adalah">disabilitas intelektual</a>.</p>
            <p>Temuan Gates dan rekan juga memberi pelajaran penting: anak bisa menjadi lebih <em>tahu</em> tentang aturan sosial tanpa otomatis lebih sering <em>mempraktikkannya</em>. Para penulis menyimpulkan efek program kelompok tampak cukup baik, tetapi mungkin belum terbawa ke lingkungan sekolah. Inilah alasan keterlibatan orang tua dan guru begitu menentukan.</p>

            <h2 id="bentuk">Bentuk-Bentuk Latihan</h2>
            <p>Social skills training bukan satu metode tunggal. Beberapa bentuk yang umum dipakai:</p>
            <h3>1. Kelompok keterampilan sosial</h3>
            <p>Beberapa anak dengan usia dan kemampuan yang mirip berlatih bersama di bawah bimbingan terapis. Setiap sesi biasanya berisi penjelasan singkat, contoh dari terapis, bermain peran, lalu praktik dalam permainan. Contoh program yang paling banyak diteliti adalah ${ext(L.peers, 'PEERS dari UCLA')}. Versi untuk remaja 11 sampai 17 tahun berlangsung 16 sesi mingguan selama 90 menit, dan orang tua mengikuti sesi terpisah pada waktu yang sama untuk belajar mendampingi anak berteman. Versi prasekolah untuk usia 4 sampai 6 tahun juga berlangsung 16 sesi mingguan dengan partisipasi orang tua sebagai syarat.</p>
            <h3>2. Social stories</h3>
            <p>Menurut ${ext(L.cdc, 'CDC')}, social stories memberikan gambaran sederhana tentang apa yang bisa diharapkan dalam situasi sosial tertentu. Contohnya cerita pendek bergambar tentang "apa yang terjadi saat ulang tahun teman" yang dibaca beberapa hari sebelum acara. Cara ini cocok dipadukan dengan <a href="jadwal-visual-anak-autis">jadwal visual anak autis</a> agar anak lebih siap menghadapi perubahan.</p>
            <h3>3. Latihan melalui teman sebaya (peer-mediated)</h3>
            <p>Teman sekelas yang sudah diberi pengarahan diajak menjadi mitra bermain dan memberi contoh. Pedoman ${ext(L.nice, 'NICE CG170')} menyarankan pelibatan teman sebaya untuk anak usia sekolah. Pendekatan ini sejalan dengan kelas inklusi, yang praktiknya kami uraikan di artikel <a href="peer-tutoring-di-kelas-inklusi">peer tutoring di kelas inklusi</a>.</p>
            <h3>4. Latihan melalui orang tua dan guru</h3>
            <p>Untuk anak prasekolah, NICE menyarankan intervensi yang dijalankan melalui orang tua, pengasuh, atau guru dengan strategi berbasis bermain. Orang tua dilatih membaca pola komunikasi anak dan menanggapinya dengan lebih peka. Pendekatan berbasis bermain seperti <a href="floor-time-terapi">Floortime</a> termasuk dalam keluarga pendekatan sosial-relasional yang disebut CDC.</p>
            <h3>5. Contoh langsung dan umpan balik video</h3>
            <p>NICE menyebut teknik pemberian contoh oleh terapis dan umpan balik lewat rekaman video interaksi sebagai bagian dari intervensi sosial-komunikasi. Anak atau orang tua melihat rekaman interaksinya sendiri, lalu terapis menunjukkan bagian yang sudah berjalan baik dan yang bisa dicoba berbeda.</p>
            <p>Di banyak tempat, latihan sosial juga disisipkan dalam terapi lain seperti <a href="terapi-aba">terapi ABA</a>, <a href="terapi-wicara">terapi wicara</a>, atau <a href="terapi-bermain">terapi bermain</a>. CDC mencatat pendekatan perilaku memiliki bukti paling banyak untuk menangani gejala autisme, dan pendekatan perkembangan sering dikombinasikan dengan pendekatan perilaku.</p>

            <h2 id="pedoman">Apa Kata Pedoman Klinis</h2>
            <p>Pedoman ${ext(L.nice, 'NICE CG170')} dari Inggris, yang terakhir diperbarui 14 Juni 2021, memuat rekomendasi yang cukup rinci. Untuk ciri inti autisme, NICE menyarankan mempertimbangkan intervensi sosial-komunikasi yang:</p>
            <ul>
                <li>menggunakan strategi berbasis bermain bersama orang tua, pengasuh, dan guru untuk meningkatkan perhatian bersama, keterlibatan, dan komunikasi timbal balik;</li>
                <li>disesuaikan dengan tahap perkembangan anak;</li>
                <li>meningkatkan pemahaman dan kepekaan orang dewasa atau teman sebaya terhadap pola komunikasi anak;</li>
                <li>diberikan oleh tenaga profesional yang terlatih.</li>
            </ul>
            <p>Pada rekomendasi yang sama, NICE menegaskan agar antipsikotik, antidepresan, antikonvulsan, dan diet eliminasi (seperti diet bebas gluten atau kasein) <strong>tidak</strong> digunakan untuk menangani ciri inti autisme. CDC juga menyatakan belum ada obat yang mengatasi gejala inti autisme; obat hanya dipakai untuk gejala penyerta. Jadi bila ada layanan yang menjanjikan "obat" atau suplemen untuk membuat anak mudah bergaul, sebaiknya Ayah dan Bunda bertanya ulang kepada dokter.</p>
            <p>Laporan klinis ${ext(L.aap, 'American Academy of Pediatrics (Hyman dan rekan, Pediatrics 2020)')} menyebut bukti ilmiah untuk intervensi perilaku dan intervensi lain yang menyasar keterampilan tertentu terus bertambah, dan menekankan pengambilan keputusan bersama antara tenaga kesehatan dan keluarga saat memilih intervensi. Artinya, orang tua adalah bagian dari tim, bukan penonton.</p>

            <h2 id="di-rumah">Melanjutkan Latihan di Rumah</h2>
            <p>Karena keterampilan yang dipelajari di ruang terapi belum tentu otomatis terbawa ke kehidupan sehari-hari, latihan di rumah menjadi jembatannya. Beberapa hal sederhana yang bisa dicoba, setelah didiskusikan dengan terapis anak:</p>
            <ol>
                <li><strong>Pilih satu target per minggu.</strong> Misalnya "menyapa kakek saat datang". Target yang terlalu banyak sekaligus membuat anak dan orang tua sama-sama kewalahan.</li>
                <li><strong>Pakai bahasa dan contoh yang sama dengan terapis.</strong> Tanyakan kalimat atau kartu yang dipakai di sesi, lalu gunakan hal yang sama di rumah supaya anak tidak bingung.</li>
                <li><strong>Latih di situasi nyata yang pendek.</strong> Membayar di warung, memesan makanan, atau bermain ular tangga lima menit bersama saudara lebih bermakna daripada latihan panjang di meja.</li>
                <li><strong>Beri pujian yang spesifik.</strong> "Kamu tadi menunggu giliran dengan sabar" lebih jelas daripada "pintar". Sistem penghargaan yang konsisten bisa membantu, seperti diuraikan di artikel <a href="reward-system-efektif-untuk-anak-autis">reward system untuk anak autis</a>.</li>
                <li><strong>Atur pertemuan bermain yang terstruktur.</strong> Satu teman, durasi singkat, kegiatan yang disukai anak, dan tempat yang tidak terlalu ramai atau bising.</li>
                <li><strong>Hargai kebutuhan istirahat.</strong> Interaksi sosial bisa sangat melelahkan bagi anak autis. Waktu menyendiri setelah acara keluarga bukan tanda latihan gagal.</li>
                <li><strong>Libatkan sekolah.</strong> Ceritakan target latihan kepada guru atau guru pendamping agar anak mendapat kesempatan berlatih yang sama di kelas.</li>
            </ol>
            <p>Tips pendampingan sehari-hari lainnya bisa Ayah dan Bunda baca di artikel <a href="tips-mendampingi-anak-autis">tips mendampingi anak autis</a>.</p>

            <h2 id="memilih">Cara Memilih Program Social Skills Training</h2>
            <p>Layanan kelompok sosial kini banyak tersedia di klinik tumbuh kembang dan pusat terapi. Pertanyaan berikut bisa membantu menilai apakah sebuah program cocok untuk anak:</p>
            <ul>
                <li><strong>Siapa pelatihnya?</strong> Tanyakan latar belakang dan pengalamannya menangani anak autis. NICE menyebut intervensi sebaiknya diberikan oleh tenaga profesional yang terlatih.</li>
                <li><strong>Apakah anak diasesmen dulu?</strong> Program yang baik menilai kemampuan awal anak dan menetapkan target yang terukur, bukan langsung memasukkan anak ke kelompok mana pun.</li>
                <li><strong>Bagaimana komposisi kelompoknya?</strong> Usia dan kemampuan bahasa anggota kelompok sebaiknya tidak terlalu jauh berbeda.</li>
                <li><strong>Apakah orang tua dilibatkan?</strong> Temuan Wolstencroft dan rekan mendukung program yang menyertakan kelompok orang tua.</li>
                <li><strong>Apakah ada tugas rumah dan komunikasi dengan sekolah?</strong> Ini cara paling realistis agar keterampilan terbawa ke luar ruang terapi.</li>
                <li><strong>Bagaimana kemajuan diukur?</strong> Mintalah laporan berkala yang menggambarkan perubahan perilaku nyata, bukan hanya daftar kegiatan.</li>
                <li><strong>Apakah ada janji hasil yang berlebihan?</strong> Hindari program yang menjamin anak "normal" atau "sembuh" dalam waktu tertentu.</li>
            </ul>
            <p>Bila anak belum pernah diperiksa, langkah pertama tetap konsultasi ke dokter spesialis anak atau klinik tumbuh kembang. Dari sana anak bisa dirujuk ke psikolog klinis, terapis okupasi, atau terapis wicara sesuai kebutuhannya. Gambaran jenis-jenis terapi yang tersedia ada di artikel <a href="apa-saja-terapi-anak-berkebutuhan-khusus">apa saja terapi anak berkebutuhan khusus</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">Di <a href="../sekolah-inklusi-sleman">Sekolah Inklusi Taruna Imani</a>, anak-anak berkebutuhan khusus belajar dan bermain bersama teman sebayanya setiap hari, sehingga ada banyak kesempatan alami untuk berlatih menyapa, bergiliran, dan bekerja sama. YUKA bukan fasilitas kesehatan dan tidak menegakkan diagnosis; bila guru melihat anak membutuhkan penanganan khusus, kami menyampaikannya kepada orang tua dan menyarankan pemeriksaan ke tenaga profesional.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="autisme-adalah">Autisme Adalah</a></h4>
                    <p>Pengertian, ciri, dan penyebab autisme sebagai dasar sebelum memilih terapi.</p>
                </div>
                <div class="related-card">
                    <h4><a href="jadwal-visual-anak-autis">Jadwal Visual Anak Autis</a></h4>
                    <p>Membantu anak memahami urutan kegiatan dan lebih siap menghadapi perubahan.</p>
                </div>
                <div class="related-card">
                    <h4><a href="terapi-bermain">Terapi Bermain</a></h4>
                    <p>Bermain sebagai sarana melatih komunikasi dan interaksi anak.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#SocialSkillsTraining</a>
            <a href="#">#AnakAutis</a>
            <a href="#">#KeterampilanSosial</a>
            <a href="#">#ParentingABK</a>
            <a href="#">#PendidikanInklusi</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.nice, '<strong>NICE: Autism spectrum disorder in under 19s, support and management (CG170), rekomendasi 1.3.1 dan 1.3.2, diperbarui 14 Juni 2021</strong>')}</li>
              <li>${ext(L.cdc, '<strong>CDC: Treatment and Intervention for Autism Spectrum Disorder</strong>')}</li>
              <li>${ext(L.nimh, '<strong>NIMH: Autism Spectrum Disorder</strong>')}</li>
              <li>${ext(L.aap, '<strong>Hyman SL, Levy SE, Myers SM, dkk. Identification, Evaluation, and Management of Children With Autism Spectrum Disorder. Pediatrics, 2020 (American Academy of Pediatrics)</strong>')}</li>
              <li>${ext(L.cochrane, '<strong>Reichow B, Steiner AM, Volkmar F. Social skills groups for people aged 6 to 21 with autism spectrum disorders. Cochrane Database of Systematic Reviews, 2012</strong>')}</li>
              <li>${ext(L.gates, '<strong>Gates JA, Kang E, Lerner MD. Efficacy of group social skills interventions for youth with autism spectrum disorder: A systematic review and meta-analysis. Clinical Psychology Review, 2017</strong>')}</li>
              <li>${ext(L.wolstencroft, '<strong>Wolstencroft J, Robinson L, Srinivasan R, dkk. A Systematic Review of Group Social Skills Interventions, and Meta-analysis of Outcomes, for Children with High Functioning ASD. Journal of Autism and Developmental Disorders, 2018</strong>')}</li>
              <li>${ext(L.peers, '<strong>UCLA PEERS Clinic: Programs</strong>')}</li>
              <li>${ext(L.kemenkes, '<strong>Kementerian Kesehatan RI (Ayo Sehat): Autisme</strong>')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti pemeriksaan atau rencana terapi dari dokter spesialis anak, psikolog klinis, atau terapis</strong>. Hasil social skills training berbeda pada setiap anak. Konsultasikan kebutuhan anak kepada tenaga profesional.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Social%20Skills%20Training%20Anak%20Autis%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.030-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.870 9.870 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.480-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.470h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=Social%20Skills%20Training%20Anak%20Autis&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            </div>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga kesehatan. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
</article>

    <section class="section bg-primary" style="padding: 4rem 0;">
        <div class="container text-center">
            <h2 style="color: var(--white); margin-bottom: 1rem;">Bantu Pendidikan Anak Berkebutuhan Khusus</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 2rem;">Setiap donasi Anda membantu anak-anak dengan beragam kemampuan mendapatkan pendidikan dan pendampingan yang sesuai kebutuhan mereka.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="../donasi" class="btn btn-secondary">Donasi Sekarang</a>
                <a href="https://wa.me/6281229912332?text=Halo%20YUKA%2C%20saya%20ingin%20bertanya%20tentang%20pendampingan%20anak" target="_blank" class="btn btn-outline-light">Hubungi via WhatsApp</a>
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

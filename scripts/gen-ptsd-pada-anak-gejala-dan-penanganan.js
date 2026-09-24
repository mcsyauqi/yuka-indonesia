#!/usr/bin/env node
'use strict';

// One-time generator for artikel/ptsd-pada-anak-gejala-dan-penanganan.html
// (catchup 2026-09-25, kartu hrTsJkEV). Canonical shell via scripts/lib/article-shell.js.
// YMYL (trauma/PTSD anak): every factual statement links inline to WHO, NIMH, APA
// (psychiatry.org), National Center for PTSD (VA), NCTSN, IDAI, Kemenkes, or KemenPPPA.
// The article does not diagnose; it refers families to psikolog klinis / psikiater anak.
// Hero is a real CC BY 2.0 photo from Wikimedia Commons showing only a child's hands
// (no identifiable child in a trauma context), with visible credit.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'ptsd-pada-anak-gejala-dan-penanganan';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const TITLE_TAG = 'PTSD pada Anak: Gejala dan Penanganan untuk Orang Tua';
const META_DESC = 'PTSD pada anak bisa muncul setelah peristiwa traumatis. Kenali gejalanya per usia, kapan perlu ke psikolog, dan cara mendampingi anak. Baca panduannya.';
const OG_TITLE = 'PTSD pada Anak: Gejala, Penanganan, dan Cara Orang Tua Mendampingi';
const OG_DESC = 'Panduan PTSD pada anak berdasarkan WHO, NIMH, American Psychiatric Association, NCTSN, IDAI, dan Kemenkes: gejala per usia, risiko pada anak berkebutuhan khusus, terapi yang terbukti, dan layanan bantuan di Indonesia.';
const H1 = 'PTSD pada Anak: Gejala, Penanganan, dan Cara Orang Tua Mendampingi';
const IMAGE_HERO = 'assets/images/artikel/tangan-anak-menggambar-krayon-wikimedia.webp';
const IMAGE_HERO_ALT = 'Dua tangan anak di atas kertas putih, tangan kanan menggenggam krayon ungu dan sedang menggambar sosok orang berambut biru, foto hitam putih dengan krayon dan garis gambar berwarna';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25T03:30:00+07:00';
const DATE_MODIFIED = '2026-09-25T03:30:00+07:00';
const DATE_DISPLAY = '25 September 2026';

const CREDIT = {
  name: 'D. Sharon Pruitt',
  source: 'https://commons.wikimedia.org/wiki/File:Child_drawing.jpg',
  license: 'CC BY 2.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const faq = [
  {
    q: 'Apakah setiap anak yang mengalami peristiwa traumatis pasti terkena PTSD?',
    a: 'Tidak. Menurut WHO, sebagian besar orang yang mengalami peristiwa berpotensi traumatis tidak mengalami PTSD, dan dukungan dari keluarga atau orang terdekat dapat menurunkan risikonya. Pada anak, data National Center for PTSD menunjukkan hanya sebagian kecil anak yang pernah mengalami trauma kemudian mengalami PTSD.'
  },
  {
    q: 'Berapa lama gejala harus berlangsung sebelum anak perlu diperiksa?',
    a: 'American Psychiatric Association menyebut diagnosis PTSD baru dipertimbangkan bila gejala berlangsung lebih dari satu bulan dan mengganggu kehidupan sehari-hari. NIMH menganjurkan keluarga menghubungi tenaga kesehatan bila reaksi anak berlangsung lebih dari sebulan, atau lebih cepat bila muncul kilas balik, jantung berdebar dan berkeringat, mudah terkejut, mati rasa secara emosi, atau sangat sedih selama beberapa minggu.'
  },
  {
    q: 'Siapa yang berwenang menegakkan diagnosis PTSD pada anak?',
    a: 'Diagnosis ditegakkan oleh profesional kesehatan jiwa, yaitu psikolog klinis atau dokter spesialis kedokteran jiwa (psikiater), sebaiknya yang berpengalaman menangani anak. Orang tua dan guru berperan mencatat perubahan perilaku anak dan menyampaikannya saat pemeriksaan, bukan menyimpulkan diagnosis sendiri.'
  },
  {
    q: 'Terapi apa yang terbukti membantu anak dengan PTSD?',
    a: 'WHO menyebut intervensi psikologis sebagai pilihan pertama, dengan bukti terkuat pada terapi perilaku kognitif yang berfokus pada trauma dan EMDR. Untuk anak, NCTSN menjelaskan Trauma-Focused Cognitive Behavioral Therapy (TF-CBT) untuk usia 3 sampai 18 tahun, melibatkan orang tua, dan telah diuji dalam 25 uji acak terkontrol. Penggunaan obat hanya diputuskan oleh psikiater.'
  },
  {
    q: 'Ke mana mencari bantuan cepat di Indonesia?',
    a: 'Untuk dukungan psikologis, Kementerian Kesehatan menyediakan layanan Healing119.id yang gratis, bisa dihubungi lewat telepon 119 ekstensi 8. Bila anak mengalami atau menyaksikan kekerasan, laporkan ke SAPA 129 milik KemenPPPA (telepon 129 atau WhatsApp 08-111-129-129). Bila anak berisiko melukai diri atau dalam bahaya, segera ke IGD rumah sakit terdekat.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'PTSD pada Anak', item: CANONICAL }
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
    width: 900,
    height: 790,
    caption: 'Tangan anak menggambar sosok orang dengan krayon',
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
  keywords: 'ptsd pada anak, gejala ptsd pada anak, penanganan ptsd anak, trauma pada anak, trauma anak berkebutuhan khusus',
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
  who: 'https://www.who.int/news-room/fact-sheets/detail/post-traumatic-stress-disorder',
  nimhCope: 'https://www.nimh.nih.gov/health/publications/helping-children-and-adolescents-cope-with-disasters-and-other-traumatic-events',
  nimhPtsd: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd',
  apa: 'https://www.psychiatry.org/patients-families/ptsd/what-is-ptsd',
  va: 'https://www.ptsd.va.gov/understand/common/common_children_teens.asp',
  nctsnIdd: 'https://www.nctsn.org/what-is-child-trauma/populations-at-risk/intellectual-and-developmental-disabilities',
  tfcbt: 'https://www.nctsn.org/interventions/trauma-focused-cognitive-behavioral-therapy',
  idai: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/bagaimana-mencurigai-tindak-kekerasan-pada-anak-child-abuse',
  kemenkesBanjir: 'https://keslan.kemkes.go.id/view_artikel/4236/bangkit-dari-trauma-panduan-pemulihan-mental-pasca-banjir-dan-longsor',
  healing: 'https://kesprimkom.kemkes.go.id/konten/158/151/0/cegah-bunuh-diri-dukung-kesehatan-jiwa-kenali-layanan-healing119-id',
  sapa: 'https://laporsapa129.kemenpppa.go.id/'
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
    <meta name="keywords" content="ptsd pada anak, gejala ptsd pada anak, penanganan ptsd anak, trauma pada anak, trauma anak berkebutuhan khusus, YUKA">
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
                <span class="current">PTSD pada Anak</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="900" height="790" fetchpriority="high">
            <figcaption>Menggambar sering menjadi cara anak mengungkapkan hal yang sulit diucapkan. Foto ini hanya memperlihatkan tangan seorang anak dan tidak berkaitan dengan kasus trauma mana pun.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>PTSD pada anak (post-traumatic stress disorder atau gangguan stres pascatrauma) adalah kondisi ketika reaksi takut dan tertekan setelah peristiwa traumatis tidak mereda, berlangsung lebih dari sebulan, dan mengganggu keseharian anak.</strong> Gejalanya bisa berupa mimpi buruk, menghindari hal yang mengingatkan pada kejadian, mudah kaget, sampai mengulang kejadian itu dalam permainan. Kabar baiknya, sebagian besar anak pulih dengan dukungan orang dewasa di sekitarnya, dan PTSD bisa ditangani dengan terapi yang sudah teruji.</p>

            <p>Peristiwa traumatis bisa berupa bencana alam, kecelakaan, kekerasan, kehilangan orang tercinta secara mendadak, atau tindakan medis yang menakutkan. Artikel ini membantu orang tua, guru, dan pendamping mengenali tanda yang perlu diwaspadai, memahami kapan anak perlu diperiksa profesional, dan tahu apa yang bisa dilakukan di rumah sambil menunggu atau menjalani terapi.</p>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini berisi informasi umum dan tidak dimaksudkan untuk mendiagnosis. Diagnosis PTSD hanya dapat ditegakkan oleh psikolog klinis atau psikiater setelah pemeriksaan langsung. Bila anak dalam bahaya atau berisiko melukai diri, lihat bagian <a href="#bantuan-darurat">bantuan darurat</a> di bawah.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu PTSD dan bedanya dengan reaksi stres biasa</a></li>
                    <li><a href="#seberapa-sering">Seberapa sering anak mengalami PTSD</a></li>
                    <li><a href="#gejala">Gejala PTSD pada anak menurut usia</a></li>
                    <li><a href="#abk">Anak berkebutuhan khusus lebih rentan</a></li>
                    <li><a href="#kapan-periksa">Kapan anak perlu diperiksa profesional</a></li>
                    <li><a href="#penanganan">Penanganan PTSD pada anak</a></li>
                    <li><a href="#di-rumah">Yang bisa dilakukan orang tua di rumah</a></li>
                    <li><a href="#bantuan-darurat">Layanan bantuan di Indonesia</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu PTSD dan Bedanya dengan Reaksi Stres Biasa</h2>
            <p>Setelah mengalami atau menyaksikan kejadian menakutkan, wajar bila anak cemas, sedih, marah, sulit tidur, atau terus memikirkan kejadian itu. ${ext(L.nimhPtsd, 'National Institute of Mental Health (NIMH)')} menjelaskan bahwa kebanyakan orang pulih dari reaksi semacam ini dan gejalanya berkurang seiring waktu. PTSD dipertimbangkan bila gejala bertahan lama dan mulai mengganggu aspek kehidupan sehari-hari, sehingga anak tetap merasa terancam padahal sudah tidak berada dalam bahaya.</p>
            <p>${ext(L.apa, 'American Psychiatric Association (APA)')} mengelompokkan gejala PTSD ke dalam empat kategori:</p>
            <ul>
                <li><strong>Ingatan yang mengganggu (intrusi).</strong> Kenangan tentang kejadian datang berulang tanpa diinginkan, lewat mimpi buruk atau kilas balik yang terasa seperti mengalaminya lagi.</li>
                <li><strong>Menghindar.</strong> Menjauhi orang, tempat, benda, atau kegiatan yang mengingatkan pada kejadian, serta enggan membicarakannya.</li>
                <li><strong>Perubahan pikiran dan suasana hati.</strong> Murung, kehilangan minat pada hal yang dulu disukai, merasa bersalah atau malu, merasa jauh dari orang lain, atau berpikir "aku anak nakal" dan "tidak ada yang bisa dipercaya".</li>
                <li><strong>Perubahan kewaspadaan dan reaksi.</strong> Mudah marah, meledak-ledak, terlalu waspada terhadap sekitar, mudah terkejut, sulit berkonsentrasi, dan sulit tidur.</li>
            </ul>
            <p>Menurut APA, diagnosis PTSD mensyaratkan gejala berlangsung <strong>lebih dari satu bulan</strong> dan menimbulkan penderitaan atau hambatan nyata dalam fungsi sehari-hari. Bila gejala serupa muncul antara tiga hari sampai satu bulan setelah kejadian, kondisinya disebut gangguan stres akut. APA mencatat sekitar separuh orang dengan gangguan stres akut kemudian mengalami PTSD, sehingga fase awal ini tetap perlu diperhatikan.</p>

            <h2 id="seberapa-sering">Seberapa Sering Anak Mengalami PTSD</h2>
            <p>Pengalaman traumatis cukup sering terjadi pada masa kanak-kanak, tetapi PTSD tidak. ${ext(L.va, 'National Center for PTSD milik Departemen Urusan Veteran Amerika Serikat')} merangkum penelitian yang menunjukkan sekitar 15% sampai 43% anak perempuan dan 14% sampai 43% anak laki-laki pernah mengalami setidaknya satu peristiwa traumatis. Dari anak yang mengalami trauma itu, 3% sampai 15% anak perempuan dan 1% sampai 6% anak laki-laki kemudian mengalami PTSD. Angkanya lebih tinggi pada jenis trauma tertentu.</p>
            <p>Gambaran global dari ${ext(L.who, 'Organisasi Kesehatan Dunia (WHO)')} sejalan dengan itu: sekitar 70% orang di dunia akan mengalami peristiwa berpotensi traumatis sepanjang hidupnya, tetapi hanya sebagian kecil (5,6%) yang kemudian mengalami PTSD. WHO juga menegaskan bahwa merasa didukung oleh keluarga, teman, atau orang lain setelah kejadian dapat menurunkan risiko PTSD. Inilah alasan peran orang tua dan guru begitu penting sejak hari-hari pertama.</p>

            <h2 id="gejala">Gejala PTSD pada Anak Menurut Usia</h2>
            <p>Anak tidak selalu bisa berkata "aku takut" atau "aku teringat kejadian itu". Rasa tertekan lebih sering muncul lewat perilaku. WHO mencatat bahwa pada anak yang lebih kecil, gejala sering berbentuk perilaku, termasuk memerankan ulang kejadian traumatis saat bermain atau menggambar, dan anak kerap menyalahkan dirinya sendiri atas apa yang terjadi. Tabel berikut merangkum reaksi yang dicatat ${ext(L.nimhCope, 'NIMH dalam panduan membantu anak menghadapi peristiwa traumatis')}.</p>
            <div style="overflow-x:auto;">
            <table class="classification-table">
                <thead>
                    <tr><th>Kelompok usia</th><th>Reaksi yang mungkin muncul (menurut NIMH)</th></tr>
                </thead>
                <tbody>
                    <tr><td>Semua usia</td><td>Mengeluh sakit perut atau sakit kepala, mimpi buruk atau menolak tidur, sulit berkonsentrasi, kehilangan minat pada kegiatan yang biasanya disukai, merasa bersalah karena tidak bisa mencegah kejadian, memikirkan balas dendam.</td></tr>
                    <tr><td>5 tahun ke bawah</td><td>Menempel pada pengasuh, sering menangis, tantrum atau mudah rewel, kembali mengompol atau mengisap jempol, takut gelap, takut monster, takut ditinggal sendiri, memasukkan unsur kejadian ke dalam permainan pura-pura.</td></tr>
                    <tr><td>6 tahun ke atas dan remaja</td><td>Masalah di sekolah, menarik diri dari keluarga dan teman, menghindari pengingat kejadian, bersikap mengganggu atau merusak, marah dan menyimpan dendam, pada remaja bisa mulai mencoba rokok, alkohol, atau obat.</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.9rem;color:#666;">Ringkasan disusun tim YUKA dari panduan NIMH. Reaksi dalam tabel belum tentu berarti PTSD; banyak di antaranya normal pada minggu-minggu awal.</p>
            <p>Pengamatan tenaga kesehatan di Indonesia serupa. Dalam ${ext(L.kemenkesBanjir, 'panduan pemulihan mental pascabencana dari Kementerian Kesehatan')}, anak yang terdampak trauma digambarkan menjadi pendiam, terus menempel pada orang tua, atau mengalami kemunduran perilaku. Ikatan Dokter Anak Indonesia dalam ${ext(L.idai, 'artikel tentang mengenali kekerasan pada anak')} juga menyebut gangguan tidur, munculnya fobia, prestasi sekolah yang menurun, dan kembali mengompol sebagai tanda yang perlu dicurigai pada anak yang mungkin mengalami kekerasan seksual.</p>
            <p>Satu hal yang perlu diingat: NIMH menyebut banyak dari reaksi ini normal dan akan berkurang seiring waktu. Yang membedakan adalah lamanya gejala, seberapa kuat gejala itu, dan seberapa besar pengaruhnya pada kemampuan anak bermain, belajar, tidur, dan bergaul.</p>

            <h2 id="abk">Anak Berkebutuhan Khusus Lebih Rentan</h2>
            <p>${ext(L.nctsnIdd, 'National Child Traumatic Stress Network (NCTSN)')} menjelaskan bahwa anak dengan disabilitas intelektual dan perkembangan lebih sering terpapar trauma dibanding teman sebayanya. Mereka berisiko lebih tinggi mengalami kekerasan fisik, kekerasan seksual, penelantaran emosional, serta pengekangan fisik dan pengasingan. NCTSN juga mencatat bahwa tekanan psikologis akibat prosedur medis lebih sering dialami anak-anak ini, karena banyak di antara mereka harus menjalani operasi dan tindakan medis berulang. Menurut NCTSN, dampak psikologis trauma pada kelompok ini juga lebih menantang untuk ditangani.</p>
            <p>APA pun mencantumkan kelompok yang terpinggirkan, termasuk penyandang disabilitas, serta riwayat trauma dan kesulitan di masa kecil sebagai faktor risiko PTSD. Bagi orang tua anak berkebutuhan khusus, ada tantangan tambahan: anak yang belum lancar berbicara mungkin tidak bisa menceritakan apa yang dialaminya, dan perubahan perilaku mudah dianggap bagian dari kondisinya.</p>
            <p>Karena itu, yang paling berguna adalah membandingkan perilaku anak dengan kebiasaannya sendiri sebelum kejadian. Catat kapan perubahan mulai muncul, seperti tiba-tiba menolak tempat tertentu, kembali mengompol, lebih sering tantrum, atau sulit tidur. Anak yang memakai alat bantu komunikasi bisa dibantu dengan gambar perasaan, seperti yang dibahas di artikel <a href="cara-membuat-jadwal-visual-untuk-anak-autis">cara membuat jadwal visual untuk anak autis</a>. Catatan ini sangat membantu psikolog saat melakukan <a href="asesmen-abk">asesmen</a>, dan membantu membedakan reaksi trauma dari kondisi lain seperti yang diulas di artikel <a href="intermittent-explosive-disorder-anak">ledakan amarah pada anak</a>.</p>

            <h2 id="kapan-periksa">Kapan Anak Perlu Diperiksa Profesional</h2>
            <p>NIMH menganjurkan keluarga menghubungi tenaga kesehatan bila reaksi anak berlangsung lebih dari sebulan. Pemeriksaan sebaiknya dilakukan lebih cepat bila muncul masalah baru, terutama bila tanda-tanda berikut bertahan lebih dari beberapa minggu:</p>
            <ul>
                <li>Kilas balik, yaitu anak seperti mengalami ulang kejadiannya.</li>
                <li>Jantung berdebar kencang dan berkeringat.</li>
                <li>Sangat mudah terkejut.</li>
                <li>Mati rasa secara emosi, tampak datar dan tidak bereaksi.</li>
                <li>Sangat sedih atau murung.</li>
            </ul>
            <p>Kementerian Kesehatan menegaskan bahwa untuk kasus PTSD atau depresi berat, korban sebaiknya segera dirujuk ke psikolog atau psikiater. Di Indonesia, jalurnya bisa dimulai dari puskesmas atau dokter anak untuk mendapatkan rujukan, lalu ke psikolog klinis atau dokter spesialis kedokteran jiwa, sebaiknya yang berpengalaman menangani anak. APA menegaskan bahwa trauma dapat menimbulkan penderitaan berat, penderitaan itu bukan kesalahan anak, dan makin cepat penanganan dimulai, makin besar peluang pulih.</p>
            <p>Bila ada tanda kekerasan, IDAI menganjurkan agar anak segera diperiksakan ke dokter dan orang tua mencari pertolongan secepatnya. Jangan menunda karena menunggu anak mau bercerita.</p>

            <h2 id="penanganan">Penanganan PTSD pada Anak</h2>
            <p>WHO menyatakan PTSD dapat diobati secara efektif. Intervensi psikologis berbasis bukti adalah pilihan pertama, dan yang buktinya paling kuat adalah terapi perilaku kognitif yang berfokus pada trauma serta EMDR (eye movement desensitization and reprocessing). Banyak di antaranya membantu orang menghadapi ingatan traumatis secara bertahap dalam suasana yang aman dan suportif.</p>
            <p>Untuk anak, salah satu terapi yang paling banyak diteliti adalah ${ext(L.tfcbt, 'Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)')}. Menurut NCTSN, TF-CBT ditujukan untuk anak usia 3 sampai 18 tahun, dijalankan terapis untuk anak dan orang tua atau pengasuhnya secara paralel, ditambah sesi bersama anak dan orang tua. Terapi ini telah diuji dalam 25 uji acak terkontrol dan terbukti memperbaiki gejala PTSD anak dalam 8 sampai 25 sesi, pada anak dengan beragam latar belakang dan jenis trauma. Keterlibatan orang tua dalam terapi ini menunjukkan bahwa pemulihan anak tidak hanya terjadi di ruang praktik.</p>
            <p>Bagaimana dengan obat? APA menyebut psikoterapi dan obat sama-sama termasuk penanganan berbasis bukti untuk PTSD, tetapi pada anak keputusan memakai obat sepenuhnya ada di tangan psikiater setelah pemeriksaan. Jangan memberikan obat penenang atau obat tidur kepada anak tanpa resep.</p>
            <p>Kegiatan kreatif juga punya tempat. Panduan Kemenkes menyebut terapi bermain, menggambar, mewarnai, dan kegiatan kreatif lain membantu anak mengolah rasa takut. Kegiatan ini melengkapi, bukan menggantikan, terapi dari profesional. Pendekatan bermain yang dipimpin terapis dijelaskan di artikel <a href="terapi-bermain">terapi bermain</a>, dan manfaat kegiatan seni di artikel <a href="seni-dan-kreativitas-untuk-anak-disabilitas">seni dan kreativitas untuk anak disabilitas</a>.</p>

            <h2 id="di-rumah">Yang Bisa Dilakukan Orang Tua di Rumah</h2>
            <p>NIMH menekankan bahwa cara orang dewasa merespons trauma sangat memengaruhi reaksi anak. Anak perlu tahu bahwa keluarganya menyayanginya dan akan berusaha sebaik mungkin menjaganya. Berikut anjuran NIMH yang bisa langsung diterapkan:</p>
            <ol>
                <li><strong>Pastikan anak aman dan kebutuhan dasarnya terpenuhi.</strong> Makan, tidur, dan tempat yang terasa aman didahulukan sebelum hal lain.</li>
                <li><strong>Izinkan anak sedih atau menangis.</strong> Tidak perlu buru-buru menghentikan tangisnya.</li>
                <li><strong>Beri ruang untuk bercerita, menulis, atau menggambar</strong> tentang kejadian dan perasaannya, saat anak sendiri yang siap.</li>
                <li><strong>Batasi paparan berita</strong> yang terus mengulang kejadian traumatis, termasuk video di media sosial.</li>
                <li><strong>Bantu tidurnya.</strong> Untuk sementara, anak boleh tidur di kamar orang tua atau dengan lampu menyala.</li>
                <li><strong>Pertahankan rutinitas,</strong> seperti membacakan cerita sebelum tidur, makan malam bersama, dan bermain.</li>
                <li><strong>Beri anak rasa kendali</strong> lewat pilihan kecil, misalnya memilih lauk atau baju yang ingin dipakai.</li>
                <li><strong>Perhatikan perubahan mendadak</strong> pada perilaku, cara bicara, penggunaan bahasa, atau emosi yang kuat.</li>
            </ol>
            <p>NIMH juga mencatat hal yang sebaiknya <strong>dihindari</strong>:</p>
            <ul>
                <li>Menuntut anak untuk berani atau kuat.</li>
                <li>Memaksa anak membicarakan kejadian sebelum ia siap.</li>
                <li>Marah ketika anak menunjukkan emosi yang kuat.</li>
                <li>Kesal ketika anak kembali mengompol, berulah, atau mengisap jempol.</li>
                <li>Membuat janji yang tidak bisa ditepati, misalnya "besok kamu pasti baik-baik saja".</li>
            </ul>
            <p>Untuk anak yang peka terhadap suara, sentuhan, atau keramaian, lingkungan yang tenang dan dapat diprediksi membantu menurunkan kewaspadaan berlebih. Prinsip pengaturan sensorik dijelaskan di artikel <a href="sensori-integrasi">sensori integrasi</a>. Sementara itu, remaja berkebutuhan khusus yang menunjukkan tanda murung berkepanjangan bisa dipahami lebih jauh lewat artikel <a href="kesehatan-mental-remaja-berkebutuhan-khusus">kesehatan mental remaja berkebutuhan khusus</a>.</p>
            <p>Jangan lupakan diri sendiri. NIMH menyebut pengasuh yang menjaga kemampuannya sendiri untuk bertahan akan lebih mampu merawat anak. Bila Ayah dan Bunda juga terguncang oleh kejadian yang sama, mencari bantuan untuk diri sendiri adalah bagian dari menolong anak. Idenya ada di artikel <a href="self-care-untuk-orang-tua-anak-disabilitas">self-care untuk orang tua anak disabilitas</a> dan <a href="dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a>.</p>

            <h2 id="bantuan-darurat">Layanan Bantuan di Indonesia</h2>
            <div class="crisis-box">
                <h4>Bila anak atau keluarga butuh pertolongan sekarang</h4>
                <ul style="margin-bottom:0;">
                    <li><strong>Dukungan psikologis:</strong> ${ext(L.healing, 'Healing119.id dari Kementerian Kesehatan')}, layanan gratis yang dapat dihubungi lewat telepon <strong>119 ekstensi 8</strong> atau situs healing119.id. Layanan ini memberi dukungan psikologis dan rujukan ke tenaga profesional.</li>
                    <li><strong>Kekerasan terhadap anak:</strong> ${ext(L.sapa, 'SAPA 129 dari KemenPPPA')}, telepon <strong>129</strong> atau WhatsApp <strong>08-111-129-129</strong>, untuk melaporkan kekerasan fisik, psikis, atau seksual yang dialami atau diketahui.</li>
                    <li><strong>Bahaya langsung:</strong> bila anak berusaha melukai diri, bicara ingin mati, atau masih berada dalam situasi berbahaya, segera bawa ke IGD rumah sakit terdekat atau hubungi polisi di 110.</li>
                </ul>
            </div>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">Di Sekolah Inklusi Taruna Imani, guru dan pendamping berusaha menjaga rutinitas kelas yang dapat diprediksi dan memberi ruang bagi anak untuk mengungkapkan perasaan lewat kegiatan seni dan bermain. YUKA bukan fasilitas kesehatan dan tidak memberikan diagnosis atau terapi trauma; bila guru melihat tanda yang mengkhawatirkan, kami menyampaikannya kepada orang tua dan menyarankan pemeriksaan ke psikolog klinis, psikiater anak, atau puskesmas. Ingin berdiskusi tentang pendampingan anak? <a href="../kontak">Hubungi tim YUKA</a> atau lihat <a href="../program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="terapi-bermain">Terapi Bermain</a></h4>
                    <p>Cara bermain membantu anak mengolah perasaan yang sulit diucapkan.</p>
                </div>
                <div class="related-card">
                    <h4><a href="kesehatan-mental-remaja-berkebutuhan-khusus">Kesehatan Mental Remaja Berkebutuhan Khusus</a></h4>
                    <p>Mengenali tanda masalah emosi pada remaja ABK.</p>
                </div>
                <div class="related-card">
                    <h4><a href="self-care-untuk-orang-tua-anak-disabilitas">Self-Care untuk Orang Tua</a></h4>
                    <p>Menjaga kesehatan mental orang tua yang mendampingi anak.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#PTSDAnak</a>
            <a href="#">#TraumaAnak</a>
            <a href="#">#KesehatanMentalAnak</a>
            <a href="#">#ParentingABK</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.who, '<strong>WHO: Post-traumatic Stress Disorder, Fact Sheet (11 September 2026)</strong>')}</li>
              <li>${ext(L.nimhCope, '<strong>NIMH: Helping Children and Adolescents Cope With Traumatic Events</strong>')}</li>
              <li>${ext(L.nimhPtsd, '<strong>NIMH: Traumatic Events and Post-Traumatic Stress Disorder (PTSD)</strong>')}</li>
              <li>${ext(L.apa, '<strong>American Psychiatric Association: What is Posttraumatic Stress Disorder (PTSD)?</strong>')}</li>
              <li>${ext(L.va, '<strong>National Center for PTSD (U.S. Department of Veterans Affairs): How Common is PTSD in Children and Teens?</strong>')}</li>
              <li>${ext(L.nctsnIdd, '<strong>NCTSN: Intellectual and Developmental Disabilities (Populations at Risk)</strong>')}</li>
              <li>${ext(L.tfcbt, '<strong>NCTSN: Trauma-Focused Cognitive Behavioral Therapy (TF-CBT)</strong>')}</li>
              <li>${ext(L.idai, '<strong>Ikatan Dokter Anak Indonesia: Bagaimana Mencurigai Tindak Kekerasan pada Anak (Child Abuse)</strong>')}</li>
              <li>${ext(L.kemenkesBanjir, '<strong>Kementerian Kesehatan RI (Ditjen Kesehatan Lanjutan): Bangkit dari Trauma, Panduan Pemulihan Mental Pasca Banjir dan Longsor (2025)</strong>')}</li>
              <li>${ext(L.healing, '<strong>Kementerian Kesehatan RI: Cegah Bunuh Diri, Dukung Kesehatan Jiwa, Kenali Layanan Healing119.id (2025)</strong>')}</li>
              <li>${ext(L.sapa, '<strong>KemenPPPA: Layanan Pengaduan SAPA 129</strong>')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan alat diagnosis maupun pengganti pemeriksaan oleh psikolog klinis atau psikiater</strong>. Bila Anda khawatir anak mengalami trauma, konsultasikan kepada profesional kesehatan jiwa anak.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=PTSD%20pada%20Anak%3A%20Gejala%20dan%20Penanganan%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.030-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.870 9.870 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.050 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.480-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.470h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=PTSD%20pada%20Anak%3A%20Gejala%20dan%20Penanganan&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
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

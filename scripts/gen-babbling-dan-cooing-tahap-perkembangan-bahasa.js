#!/usr/bin/env node
'use strict';

// One-time generator for artikel/babbling-dan-cooing-tahap-perkembangan-bahasa.html
// (catchup 2026-09-25, kartu WFc9AqBP). Canonical shell via scripts/lib/article-shell.js.
// YMYL tumbuh kembang anak. Every age range below was checked live on 2026-09-25 against:
// - CDC Learn the Signs. Act Early. milestone pages 2, 4, 6, 9 months and 1 year
//   (Language/Communication Milestones + "Tips and activities" sections).
// - Zubler et al., Pediatrics 2022 (PMID 35132439), basis of the 2022 CDC/AAP checklist revision
//   (milestones most children, >=75%, reach by that age).
// - NIDCD "Speech and Language Developmental Milestones" checklist (0-3 mo, 4-6 mo, 7-12 mo).
// - IDAI "Keterlambatan Bicara" (idai.or.id, 21.06.2013): cooing 2-3 bulan, babbling mendekati 6 bulan,
//   "Waspada bila" per age band, penyebab, 5-8% prasekolah.
// - Oller et al. 1998 AJMR (PMID 9833656) and Oller et al. 1999 J Commun Disord (PMID 10466095):
//   canonical babbling by 10 months, late onset as possible marker.
// - Oller & Eilers 1988 Child Dev (PMID 3359864): deaf infants vs hearing infants canonical babbling.
// - Yankowitz et al. 2022 Mol Autism (PMID 35761377): lower canonical babbling ratio in infants later
//   diagnosed with autism, "evidence is mixed".
// Cannibalization: speech-delay-adalah (keterlambatan bicara umum 0-5 th) and terapi-wicara are
// broader; this article is the deep dive on the pre-linguistic stage 0-12 months and links out.
// Hero: real CC BY-SA 2.0 photo (Paul Goyette, Wikimedia Commons), baby seen from behind the head,
// face not visible.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'babbling-dan-cooing-tahap-perkembangan-bahasa';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

// Reuse the exact <style> block and share-button SVGs from the most recent article
// so the page looks identical to its siblings.
const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Babbling dan Cooing: Tahap Perkembangan Bahasa Bayi';
const META_DESC = 'Babbling dan cooing adalah tahap awal perkembangan bahasa bayi. Kenali usianya, cara menstimulasi, dan tanda kapan perlu ke dokter. Baca panduannya.';
const OG_TITLE = 'Babbling dan Cooing: Tahap Perkembangan Bahasa Bayi 0 sampai 12 Bulan';
const OG_DESC = 'Panduan babbling dan cooing untuk orang tua: kapan bayi mulai cooing dan mengoceh, bedanya, cara menstimulasi di rumah, dan tanda waspada kapan perlu ke dokter anak, berdasarkan CDC, NIDCD, dan IDAI.';
const H1 = 'Babbling dan Cooing: Tahap Perkembangan Bahasa Bayi 0 sampai 12 Bulan';
const IMAGE_HERO = 'assets/images/artikel/bayi-berbaring-dilihat-dari-atas-kepala-wikimedia.webp';
const IMAGE_HERO_ALT = 'Bayi berbaju kuning berbaring telentang di kasur, difoto dari arah atas kepala sehingga yang terlihat rambut dan kedua tangannya, wajahnya tidak tampak';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25T10:00:00+07:00';
const DATE_MODIFIED = '2026-09-25T10:00:00+07:00';
const DATE_DISPLAY = '25 September 2026';

const CREDIT = {
  name: 'Paul Goyette',
  source: 'https://commons.wikimedia.org/wiki/File:Sleeping_baby_in_crib.jpg',
  license: 'CC BY-SA 2.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  cdc2: 'https://www.cdc.gov/act-early/milestones/2-months.html',
  cdc4: 'https://www.cdc.gov/act-early/milestones/4-months.html',
  cdc6: 'https://www.cdc.gov/act-early/milestones/6-months.html',
  cdc9: 'https://www.cdc.gov/act-early/milestones/9-months.html',
  cdc12: 'https://www.cdc.gov/act-early/milestones/1-year.html',
  zubler: 'https://pubmed.ncbi.nlm.nih.gov/35132439/',
  nidcd: 'https://www.nidcd.nih.gov/health/speech-and-language',
  idai: 'https://www.idai.or.id/artikel/klinik/keluhan-anak/keterlambatan-bicara',
  oller98: 'https://pubmed.ncbi.nlm.nih.gov/9833656/',
  oller99: 'https://pubmed.ncbi.nlm.nih.gov/10466095/',
  oller88: 'https://pubmed.ncbi.nlm.nih.gov/3359864/',
  yankowitz: 'https://pubmed.ncbi.nlm.nih.gov/35761377/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa bedanya cooing dan babbling?',
    a: 'Cooing adalah bunyi vokal panjang seperti "aaa" dan "uuu" yang biasanya muncul sekitar usia 2 sampai 3 bulan. Babbling atau mengoceh adalah rangkaian suku kata yang menggabungkan konsonan dan vokal, misalnya "ba-ba-ba" atau "ma-ma-ma". IDAI menyebut cooing berangsur menjadi babbling mendekati usia 6 bulan.'
  },
  {
    q: 'Umur berapa bayi mulai mengoceh "mamama" atau "bababa"?',
    a: 'Menurut daftar milestone CDC, sebagian besar bayi membuat banyak bunyi berbeda seperti "mamamama" dan "bababababa" pada usia 9 bulan. Penelitian Oller dan rekan menyebut hampir semua bayi dengan pendengaran normal sudah masuk tahap babbling kanonik (suku kata utuh yang diulang) sebelum usia 10 bulan.'
  },
  {
    q: 'Apakah bayi yang mengoceh "mama" berarti sudah memanggil ibunya?',
    a: 'Belum tentu. IDAI menjelaskan pada usia 6 sampai 9 bulan bayi dapat mengucapkan "mama" dan "papa" tanpa arti, sebagai bagian dari babbling. Baru sekitar usia 9 sampai 12 bulan kata itu dipakai dengan arti untuk memanggil orang tua atau pengasuhnya.'
  },
  {
    q: 'Kapan orang tua perlu membawa bayi ke dokter karena belum mengoceh?',
    a: 'IDAI menyarankan waspada bila mendekati usia 6 bulan bayi belum babbling atau tidak menoleh saat dipanggil namanya dari belakang. CDC juga menganjurkan orang tua tidak menunggu bila anak belum mencapai satu atau lebih milestone atau kehilangan kemampuan yang sebelumnya sudah ada. Pada usia berapa pun, kemunduran kemampuan bicara atau sosial perlu segera diperiksakan.'
  },
  {
    q: 'Apakah bayi tuli tetap bisa mengoceh?',
    a: 'Bayi dengan gangguan pendengaran tetap bisa bersuara dan membuat bunyi awal. Namun penelitian Oller dan Eilers (1988) menemukan bayi yang mendengar sudah memproduksi suku kata utuh dalam 10 bulan pertama, sedangkan bayi tuli dalam penelitian itu belum. Karena itu babbling yang tidak muncul atau berkurang menjadi alasan untuk memeriksakan pendengaran.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Babbling dan Cooing', item: CANONICAL }
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
    height: 666,
    caption: 'Bayi berbaring telentang, difoto dari arah atas kepala',
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
  keywords: 'babbling dan cooing tahap perkembangan bahasa, babbling adalah, cooing adalah, bayi mengoceh, perkembangan bahasa bayi, tahap pralinguistik, tanda keterlambatan bicara bayi',
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
    <meta name="keywords" content="babbling dan cooing tahap perkembangan bahasa, babbling adalah, cooing adalah, bayi mengoceh, perkembangan bahasa bayi, YUKA">
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
                <span class="current">Babbling dan Cooing</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="666" fetchpriority="high">
            <figcaption>Sebelum bisa mengucapkan kata pertama, bayi berlatih lewat tangisan, cooing, lalu ocehan. Tahap ini berlangsung sepanjang tahun pertama.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Cooing dan babbling adalah dua tahap awal perkembangan bahasa bayi, jauh sebelum kata pertama muncul. Cooing adalah bunyi vokal seperti "aaa" dan "uuu" yang biasanya mulai terdengar pada usia 2 sampai 3 bulan. Babbling atau mengoceh adalah rangkaian suku kata seperti "ba-ba-ba" dan "ma-ma-ma" yang berkembang sejak mendekati usia 6 bulan dan umumnya sudah jelas pada usia 9 bulan.</strong> Keduanya adalah latihan otot bicara sekaligus latihan bergiliran "mengobrol" dengan orang tua.</p>

            <p>Artikel ini membahas urutan tahapnya dari lahir sampai usia 12 bulan, cara menstimulasi di rumah, dan tanda waspada kapan perlu memeriksakan bayi ke dokter anak. Untuk keterlambatan bicara pada anak yang lebih besar, bacaan lanjutannya ada di artikel <a href="/artikel/speech-delay-adalah">speech delay</a>.</p>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Rentang usia di artikel ini adalah patokan umum dari lembaga kesehatan, bukan alat diagnosis. Setiap bayi berkembang dengan kecepatan sedikit berbeda. Bila Ayah dan Bunda khawatir, bicarakan dengan dokter anak atau tenaga kesehatan di posyandu dan puskesmas. YUKA tidak menegakkan diagnosis.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu cooing dan babbling</a></li>
                    <li><a href="#tahapan">Tahapan dari lahir sampai 12 bulan</a></li>
                    <li><a href="#tabel">Tabel ringkas milestone bahasa bayi</a></li>
                    <li><a href="#penting">Mengapa babbling penting</a></li>
                    <li><a href="#stimulasi">Cara menstimulasi cooing dan babbling</a></li>
                    <li><a href="#waspada">Tanda waspada: kapan perlu ke dokter</a></li>
                    <li><a href="#penyebab">Hal yang bisa membuat babbling terlambat</a></li>
                    <li><a href="#mitos">Mitos yang sering terdengar</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Cooing dan Babbling</h2>
            <p>Masa sebelum bayi mengucapkan kata bermakna sering disebut tahap pralinguistik. Pada masa ini bayi belum berbicara, tetapi terus berkomunikasi lewat tangisan, bunyi, ekspresi wajah, dan gerak tubuh. Dua istilah yang paling sering dipakai untuk menggambarkan bunyi bayi pada masa ini adalah cooing dan babbling.</p>
            <ul>
                <li><strong>Cooing</strong> adalah bunyi vokal yang lembut dan panjang, seperti "aah", "uuh", atau "oooo". Ikatan Dokter Anak Indonesia (${ext(L.idai, 'IDAI')}) menyebut bayi mulai membuat suara seperti "aah" atau "uuh" pada usia 2 sampai 3 bulan, dan bunyi inilah yang dikenal dengan istilah cooing. Daftar milestone ${ext(L.cdc4, 'CDC usia 4 bulan')} mencantumkan "membuat bunyi seperti oooo, aahh (cooing)" sebagai kemampuan yang dicapai sebagian besar bayi pada usia itu.</li>
                <li><strong>Babbling</strong> atau mengoceh adalah bunyi yang sudah menggabungkan konsonan dan vokal menjadi suku kata, lalu diulang, seperti "papapapa", "dadadada", "bababa", atau "mamama". IDAI menjelaskan cooing berangsur menjadi babbling mendekati usia 6 bulan, yaitu mengoceh dengan suku kata tunggal.</li>
            </ul>
            <p>Para peneliti membedakan lagi babbling menjadi beberapa jenis. Yang paling sering dijadikan patokan adalah <em>babbling kanonik</em>, yaitu suku kata utuh dengan konsonan dan vokal yang tersambung mulus, seperti "ba" atau "da", yang sering diulang menjadi "bababa". Suku kata jenis inilah yang nanti dipakai untuk membentuk kata.</p>

            <h2 id="tahapan">Tahapan dari Lahir sampai 12 Bulan</h2>
            <h3>Usia 0 sampai 2 bulan: menangis dan bunyi pertama</h3>
            <p>Saat lahir, bayi hanya bisa menangis untuk menyatakan keinginannya. Seiring waktu, tangisan itu mulai berbeda tergantung kebutuhannya. Checklist ${ext(L.nidcd, 'NIDCD')} (lembaga riset gangguan pendengaran dan komunikasi di bawah National Institutes of Health Amerika Serikat) untuk usia lahir sampai 3 bulan mencantumkan bayi punya cara menangis yang khas untuk kebutuhan yang berbeda, tenang atau tersenyum saat diajak bicara, dan bereaksi terhadap suara keras. Pada usia ${ext(L.cdc2, '2 bulan')}, CDC mencatat sebagian besar bayi sudah membuat bunyi selain menangis.</p>

            <h3>Usia 2 sampai 4 bulan: cooing</h3>
            <p>Inilah masa cooing. Bayi bereksperimen dengan bunyi vokal, dan IDAI menyebut bayi juga senang mencoba bunyi yang menyerupai berkumur. Hal yang paling menarik: bayi mulai bereaksi terhadap orang lain dengan mengeluarkan suara. Daftar ${ext(L.cdc4, 'CDC usia 4 bulan')} mencantumkan tiga kemampuan bahasa dan komunikasi: membuat bunyi cooing, membalas dengan bunyi saat diajak bicara, dan menoleh ke arah suara orang tuanya.</p>

            <h3>Usia 4 sampai 6 bulan: bermain bunyi</h3>
            <p>Suara bayi makin beragam. Checklist NIDCD untuk usia 4 sampai 6 bulan menyebut bayi mengoceh dengan cara yang mirip bicara dan memakai banyak bunyi berbeda, termasuk bunyi yang diawali p, b, dan m, tertawa, serta mengoceh saat senang atau tidak senang. Pada usia ${ext(L.cdc6, '6 bulan')}, CDC mencatat sebagian besar bayi bergantian membuat bunyi dengan orang tuanya, meniup bunyi "prrr" dengan lidah menjulur, dan memekik.</p>
            <p>IDAI menambahkan, mendekati usia 6 bulan bayi dapat berespons terhadap namanya sendiri, mengenali emosi dalam nada bicara, dan cooing berangsur menjadi babbling.</p>

            <h3>Usia 6 sampai 9 bulan: babbling kanonik</h3>
            <p>Ocehan bayi kini berisi suku kata utuh yang diulang. Pada usia ${ext(L.cdc9, '9 bulan')}, CDC mencatat sebagian besar bayi membuat banyak bunyi berbeda seperti "mamamama" dan "bababababa", serta mengangkat kedua tangan minta digendong. IDAI menjelaskan pada usia 6 sampai 9 bulan bayi mengoceh dengan intonasi yang mirip bahasa ibunya dan dapat mengucapkan "mama" dan "papa" <strong>tanpa arti</strong>. Jadi ocehan "mama" pada usia ini belum tentu panggilan untuk ibu.</p>
            <p>Penelitian D. Kimbrough Oller dan rekan, yang mengamati lebih dari 3.400 bayi berisiko, menyebut hampir semua bayi dengan pendengaran normal sudah masuk tahap babbling kanonik sebelum usia 10 bulan (${ext(L.oller99, 'Oller dkk., 1999')}).</p>

            <h3>Usia 9 sampai 12 bulan: menuju kata pertama</h3>
            <p>Ocehan makin panjang dan bervariasi. Checklist NIDCD untuk usia 7 bulan sampai 1 tahun mencantumkan mengoceh dengan rangkaian bunyi pendek dan panjang ("tata, upup, bibibi"), mengoceh untuk menarik dan mempertahankan perhatian, meniru berbagai bunyi bicara, berkomunikasi dengan isyarat seperti melambai atau mengangkat tangan, dan punya satu atau dua kata menjelang ulang tahun pertama.</p>
            <p>Pada usia ${ext(L.cdc12, '1 tahun')}, CDC mencatat sebagian besar bayi melambai "dadah", memanggil orang tua dengan "mama", "dada", atau panggilan khusus lain, dan memahami kata "jangan" (berhenti sejenak saat mendengarnya). IDAI menyebut pada usia 9 sampai 12 bulan bayi sudah dapat mengucapkan mama dan papa <strong>dengan arti</strong>, menoleh saat dipanggil, dan menunjuk atau merentangkan tangan untuk menyatakan keinginannya.</p>

            <h2 id="tabel">Tabel Ringkas Milestone Bahasa Bayi</h2>
            <p>Daftar CDC direvisi pada 2022 bersama American Academy of Pediatrics. Menurut makalah revisinya (${ext(L.zubler, 'Zubler dkk., Pediatrics 2022')}), setiap milestone dipilih dari kemampuan yang diharapkan sudah dicapai oleh sebagian besar anak, yaitu 75 persen atau lebih, pada usia tersebut. Artinya, bila bayi belum mencapainya, itu alasan untuk memantau dan berdiskusi dengan dokter, bukan untuk menunggu saja.</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Usia</th><th>Yang dilakukan sebagian besar bayi (CDC)</th><th>Tahap bunyi</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>2 bulan</strong></td><td>Membuat bunyi selain menangis, bereaksi terhadap suara keras</td><td>Tangisan dan bunyi awal</td></tr>
                    <tr><td><strong>4 bulan</strong></td><td>Membuat bunyi "oooo", "aahh" (cooing), membalas dengan bunyi saat diajak bicara, menoleh ke arah suara orang tua</td><td>Cooing</td></tr>
                    <tr><td><strong>6 bulan</strong></td><td>Bergantian membuat bunyi dengan orang tua, meniup bunyi "prrr", memekik</td><td>Bermain bunyi, awal babbling</td></tr>
                    <tr><td><strong>9 bulan</strong></td><td>Membuat banyak bunyi berbeda seperti "mamamama" dan "bababababa", mengangkat tangan minta digendong</td><td>Babbling kanonik</td></tr>
                    <tr><td><strong>12 bulan</strong></td><td>Melambai "dadah", memanggil orang tua "mama" atau "dada" atau panggilan khusus, memahami "jangan"</td><td>Kata pertama dan isyarat</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.95rem;">Sumber: halaman milestone CDC usia ${ext(L.cdc2, '2 bulan')}, ${ext(L.cdc4, '4 bulan')}, ${ext(L.cdc6, '6 bulan')}, ${ext(L.cdc9, '9 bulan')}, dan ${ext(L.cdc12, '1 tahun')}, dicek 25 September 2026. Bila bayi lahir prematur, sampaikan hal itu saat konsultasi, karena CDC memasukkan kelahiran prematur ke daftar hal yang perlu diceritakan kepada dokter.</p>

            <h2 id="penting">Mengapa Babbling Penting</h2>
            <p>Babbling bukan sekadar lucu. Suku kata yang diulang-ulang adalah bahan mentah kata pertama. Saat mengoceh, bayi melatih koordinasi bibir, lidah, rahang, dan napas, sekaligus mencocokkan bunyi yang ia buat dengan bunyi yang ia dengar.</p>
            <p>Karena itu pendengaran sangat berperan. Penelitian ${ext(L.oller88, 'Oller dan Eilers (1988)')} yang membandingkan bayi tuli dan bayi yang mendengar menemukan bayi yang mendengar sudah memproduksi suku kata utuh dalam 10 bulan pertama, sedangkan bayi tuli dalam penelitian itu belum. Temuan ini membantah anggapan lama bahwa pendengaran hanya berperan kecil dalam ocehan bayi.</p>
            <p>Waktu munculnya babbling kanonik juga diteliti sebagai tanda awal. Studi pada 1.536 bayi berisiko (${ext(L.oller98, 'Oller dkk., 1998')}) menemukan keterlambatan babbling kanonik jarang terjadi, tetapi sering berkaitan dengan kondisi genetik, saraf, anatomi, atau fisiologis, dan lebih dari separuh kasusnya belum punya diagnosis medis saat keterlambatan itu ditemukan. Studi lanjutannya (${ext(L.oller99, 'Oller dkk., 1999')}) menunjukkan bayi dengan babbling kanonik terlambat memiliki kosakata lebih sedikit pada usia 18, 24, dan 30 bulan dibanding kelompok pembanding.</p>
            <p>NIDCD menyebut tiga tahun pertama kehidupan sebagai masa paling intensif untuk memperoleh kemampuan bicara dan bahasa, dan kemampuan itu berkembang paling baik di lingkungan yang kaya bunyi dan paparan bahasa dari orang lain. Itulah sebabnya pengamatan pada tahun pertama berguna: masalah yang ketahuan lebih awal bisa ditangani lebih awal lewat <a href="/artikel/intervensi-dini">intervensi dini</a>.</p>

            <h2 id="stimulasi">Cara Menstimulasi Cooing dan Babbling</h2>
            <p>CDC menyebut orang tua sebagai guru pertama bayi dan memberi beberapa saran aktivitas sederhana di setiap halaman milestone. Berikut yang berkaitan dengan bahasa:</p>
            <ol>
                <li><strong>Balas setiap bunyi bayi.</strong> Pada usia 2 bulan, CDC menganjurkan orang tua merespons dengan senang, tersenyum, dan berbicara saat bayi mengeluarkan bunyi. Ini mengajarkan bayi bergiliran "mengobrol".</li>
                <li><strong>Main tiru-tiruan bunyi.</strong> Untuk usia 6 bulan, CDC menyarankan permainan bolak-balik: saat bayi tersenyum, orang tua ikut tersenyum; saat bayi membuat bunyi, orang tua menirukannya.</li>
                <li><strong>Bicara, bacakan, dan nyanyikan.</strong> CDC menganjurkan berbicara, membaca, dan bernyanyi untuk bayi sejak usia 2 bulan agar ia belajar memahami bahasa. Buku bergambar sederhana sudah cukup. Tanggapi ocehan bayi seolah ia ikut "membaca", misalnya "Iya, itu kucing!"</li>
                <li><strong>Beri nama pada benda di sekitar.</strong> Saat jalan-jalan, tunjuk dan sebutkan mobil, pohon, atau hewan yang dilihat.</li>
                <li><strong>Batasi layar.</strong> CDC tidak menganjurkan waktu layar untuk anak di bawah 2 tahun, kecuali panggilan video dengan keluarga, karena bayi belajar lewat bicara, bermain, dan berinteraksi dengan orang lain. Pembahasan lebih lengkap ada di artikel <a href="/artikel/screen-time-untuk-anak-autis-batasan">batasan screen time</a>.</li>
                <li><strong>Kurangi gawai orang tua saat bersama bayi.</strong> CDC mengingatkan bahwa membatasi layar orang tua saat bersama bayi membantu orang tua lebih responsif terhadap sinyal bayi.</li>
            </ol>
            <p>Pendekatan yang menempatkan orang tua sebagai mitra bicara utama anak juga dipakai dalam program terapi bahasa berbasis keluarga, misalnya <a href="/artikel/hanen-approach-terapi-bahasa-anak">Hanen approach</a>.</p>

            <h2 id="waspada">Tanda Waspada: Kapan Perlu ke Dokter</h2>
            <p>IDAI memberi daftar "waspada bila" untuk setiap rentang usia. Yang berkaitan dengan tahun pertama:</p>
            <ul>
                <li><strong>Mendekati usia 6 bulan:</strong> tidak menoleh jika dipanggil namanya dari belakang, atau tidak ada babbling.</li>
                <li><strong>Usia 12 bulan:</strong> tidak menunjuk dengan jari, atau ekspresi wajah kurang.</li>
                <li><strong>Pada usia berapa pun:</strong> kemunduran kemampuan berbicara atau kemampuan sosial. IDAI menyarankan anak segera dibawa ke dokter bila ini terjadi.</li>
            </ul>
            <p>CDC memakai prinsip serupa: bila anak belum mencapai satu atau lebih milestone, kehilangan kemampuan yang sebelumnya sudah ada, atau orang tua punya kekhawatiran lain, jangan menunggu. Bicarakan dengan dokter anak dan tanyakan tentang skrining perkembangan. Di Indonesia, pemantauan perkembangan rutin bisa dilakukan di posyandu, puskesmas, atau dokter anak, termasuk mencatat perkembangan di Buku KIA.</p>
            <p>Satu tanda saja tidak berarti bayi pasti mengalami gangguan. Tanda waspada adalah alasan untuk diperiksa, bukan diagnosis. Dokter yang akan menilai apakah perlu pemeriksaan lanjutan, misalnya tes pendengaran.</p>

            <h2 id="penyebab">Hal yang Bisa Membuat Babbling Terlambat</h2>
            <p>IDAI menyebut keterlambatan bicara dapat disebabkan gangguan pendengaran, gangguan pada otak (misalnya disabilitas intelektual atau gangguan bahasa spesifik), autisme, atau gangguan pada organ mulut yang membuat anak sulit melafalkan kata. Menentukan penyebabnya perlu pemeriksaan teliti oleh dokter, kadang dengan pendekatan multidisiplin dari dokter anak, dokter THT, dan psikolog atau psikiater anak.</p>
            <ul>
                <li><strong>Gangguan pendengaran.</strong> Karena babbling bergantung pada kemampuan mendengar, ocehan yang tidak muncul atau berkurang sering menjadi alasan pertama untuk tes pendengaran. Informasi tentang kondisi ini ada di artikel <a href="/artikel/tuna-rungu-adalah">tuna rungu</a> dan pilihan alat bantunya di artikel <a href="/artikel/hearing-aid-vs-cochlear-implant-anak">hearing aid vs cochlear implant</a>.</li>
                <li><strong>Autisme.</strong> Beberapa penelitian menemukan rasio babbling kanonik yang lebih rendah pada bayi yang kemudian didiagnosis autisme, misalnya ${ext(L.yankowitz, 'Yankowitz dkk. (2022)')}, tetapi para penelitinya sendiri menyebut bukti di bidang ini masih beragam. Babbling saja tidak bisa dipakai untuk menyimpulkan autisme. Tanda-tanda autisme yang lebih lengkap dibahas di artikel <a href="/artikel/autisme-adalah">autisme</a>.</li>
                <li><strong>Kondisi medis atau perkembangan lain.</strong> Studi Oller dkk. (1998) mencatat keterlambatan babbling kanonik sering menyertai kondisi genetik, saraf, atau anatomi.</li>
            </ul>
            <p>Bila dokter menyarankan terapi, <a href="/artikel/terapi-wicara">terapi wicara</a> biasanya menjadi salah satu pilihan. Cara memilih terapisnya dibahas di artikel <a href="/artikel/terapis-speech-delay">terapis speech delay</a>.</p>

            <h2 id="mitos">Mitos yang Sering Terdengar</h2>
            <ul>
                <li><strong>"Nanti juga bisa bicara sendiri."</strong> IDAI mencatat sebagian anak dengan gangguan bicara dan bahasa terlambat mendapat perhatian karena orang tua berpikir begitu. Menunggu tanpa memeriksakan bisa membuat masa penting terlewat.</li>
                <li><strong>"Bayi yang sudah bilang mama pasti sudah bisa bicara."</strong> Ocehan "mama" pada usia 6 sampai 9 bulan bisa jadi belum bermakna. Yang penting diamati adalah apakah kata itu dipakai untuk memanggil orang yang tepat.</li>
                <li><strong>"Bayi tuli tidak bisa bersuara sama sekali."</strong> Bayi dengan gangguan pendengaran tetap bisa menangis dan membuat bunyi awal. Yang biasanya berbeda adalah munculnya suku kata utuh. Karena itu bayi yang "bersuara" belum tentu pendengarannya baik.</li>
                <li><strong>"Video anak bisa membantu bayi cepat bicara."</strong> CDC justru tidak menganjurkan waktu layar untuk anak di bawah 2 tahun. Bayi belajar bahasa dari interaksi langsung.</li>
            </ul>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi anak berkebutuhan khusus dan keluarganya lewat pendidikan inklusi di Sleman. Bila Ayah dan Bunda menemukan tanda waspada, langkah pertama tetap pemeriksaan ke dokter anak. Setelah itu, informasi tentang <a href="/artikel/apa-saja-terapi-anak-berkebutuhan-khusus">jenis terapi anak berkebutuhan khusus</a> dan <a href="/artikel/apakah-speech-delay-bisa-sembuh">peluang anak speech delay mengejar ketertinggalan</a> bisa membantu merencanakan langkah berikutnya.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/speech-delay-adalah">Speech Delay pada Anak</a></h4>
                    <p>Penyebab, tanda, dan cara menangani keterlambatan bicara.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/intervensi-dini">Intervensi Dini ABK</a></h4>
                    <p>Mengapa penanganan sejak usia 0 sampai 6 tahun penting.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/terapi-wicara">Terapi Wicara</a></h4>
                    <p>Manfaat, proses, dan kapan anak membutuhkannya.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#Babbling</a>
            <a href="#">#Cooing</a>
            <a href="#">#PerkembanganBahasa</a>
            <a href="#">#TumbuhKembangBayi</a>
            <a href="#">#SpeechDelay</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.idai, '<strong>Keterlambatan Bicara</strong>, Ikatan Dokter Anak Indonesia (IDAI), idai.or.id')}</li>
              <li><strong>Learn the Signs. Act Early.</strong>, Centers for Disease Control and Prevention (CDC): milestone ${ext(L.cdc2, '2 bulan')}, ${ext(L.cdc4, '4 bulan')}, ${ext(L.cdc6, '6 bulan')}, ${ext(L.cdc9, '9 bulan')}, ${ext(L.cdc12, '1 tahun')}</li>
              <li>${ext(L.zubler, '<strong>Evidence-Informed Milestones for Developmental Surveillance Tools</strong>, Zubler JM dkk., Pediatrics, 2022')}</li>
              <li>${ext(L.nidcd, '<strong>Speech and Language Developmental Milestones</strong>, National Institute on Deafness and Other Communication Disorders (NIDCD)')}</li>
              <li>${ext(L.oller88, '<strong>The role of audition in infant babbling</strong>, Oller DK, Eilers RE, Child Development, 1988')}</li>
              <li>${ext(L.oller98, '<strong>Late onset canonical babbling: a possible early marker of abnormal development</strong>, Oller DK dkk., American Journal on Mental Retardation, 1998')}</li>
              <li>${ext(L.oller99, '<strong>Precursors to speech in infancy: the prediction of speech and language disorders</strong>, Oller DK dkk., Journal of Communication Disorders, 1999')}</li>
              <li>${ext(L.yankowitz, '<strong>Infants later diagnosed with autism have lower canonical babbling ratios in the first year of life</strong>, Yankowitz LD dkk., Molecular Autism, 2022')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti pemeriksaan, diagnosis, atau saran dari dokter anak dan tenaga kesehatan</strong>. Sumber dicek pada 25 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Babbling%20dan%20Cooing%20Tahap%20Perkembangan%20Bahasa%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Babbling%20dan%20Cooing%20Tahap%20Perkembangan%20Bahasa&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

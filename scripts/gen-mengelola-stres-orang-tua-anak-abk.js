#!/usr/bin/env node
'use strict';

// One-time generator for artikel/mengelola-stres-orang-tua-anak-abk.html
// (catchup 2026-09-25, kartu DBG2Cr8b). Canonical shell via scripts/lib/article-shell.js.
// YMYL kesehatan mental orang tua. Every figure below was checked live on 2026-09-25:
// - WHO Q&A "Stress" (30 March 2026): definition "state of worry or mental tension caused by a
//   difficult situation", signs (irritability, concentration, headaches, sleep, appetite), chronic
//   stress can worsen health / increase alcohol-tobacco use, can cause or exacerbate anxiety and
//   depression; coping: Doing What Matters guide, routine, sleep hygiene, connect, eat, exercise,
//   limit news; seek help from trusted health-care provider.
// - WHO "Doing What Matters in Times of Stress" (9789240003927): practical skills, a few minutes
//   each day, audio exercises, Indonesian edition listed.
// - WHO fact sheet Depression: depressed mood / loss of interest most of the day, nearly every day,
//   at least two weeks, plus symptoms list; crisis line if in immediate danger.
// - Hayes SA, Watson SL, J Autism Dev Disord 2013 (PMID 22790429): meta-analysis, large effect size
//   ASD vs TD parenting stress.
// - Barroso NE et al., J Abnorm Child Psychol 2018 (PMID 28555335): 133 studies, stress higher for
//   ASD/DD than other clinical groups; stronger link with externalizing behavior (r = 0.57).
// - Watson SL et al., J Intellect Dev Disabil 2013 (PMID 23672659): stressors multitasking,
//   diagnostic process, behaviour issues; supports must be tailored.
// - Li S et al., J Autism Dev Disord 2024 (PMID 37668850): 25 RCTs, 1915 participants,
//   cognitive-based interventions reduced parental stress (g = -0.69).
// - Yang T et al., J Autism Dev Disord 2026 (PMID 40080346): 15 studies (1124 participants),
//   mindfulness-based interventions reduced stress, effects moderate, >= 8 weeks showed effect.
// - Healing119.id (Kemenkes): 119 ext. 8 darurat bunuh diri, konseling via WhatsApp.
// - SAPA 129 (KemenPPPA): telepon 129, WhatsApp 08-111-129-129, kekerasan terhadap perempuan/anak.
// Cannibalization: self-care-untuk-orang-tua-anak-disabilitas (rutinitas self care umum),
// dukungan-keluarga-anak-abk (pembagian peran keluarga), menerima-diagnosis-anak-abk (fase awal
// diagnosis). This article targets "stres pengasuhan": sumber, tanda, beda dengan depresi,
// teknik saat situasi memanas, rencana stres pribadi, jalur bantuan. Links out to all three.
// Hero: real CC BY-SA 4.0 silhouette photo (PattayaPatrol, Wikimedia Commons), faces not visible.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'mengelola-stres-orang-tua-anak-abk';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'masalah-penglihatan-pada-anak-down-syndrome.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Mengelola Stres Orang Tua Anak ABK: Panduan Praktis';
const META_DESC = 'Mengelola stres orang tua anak ABK dimulai dari mengenali tanda dan pemicunya. Pelajari cara meredakannya dan kapan perlu bantuan ahli. Baca di sini.';
const OG_TITLE = 'Mengelola Stres Orang Tua Anak ABK: Tanda, Cara Meredakan, dan Kapan Minta Bantuan';
const OG_DESC = 'Panduan berbasis sumber WHO dan penelitian untuk orang tua anak berkebutuhan khusus: kenapa stres pengasuhan lebih tinggi, tanda yang perlu diwaspadai, teknik meredakan, dan layanan bantuan resmi di Indonesia.';
const H1 = 'Mengelola Stres Orang Tua Anak ABK: Tanda, Cara Meredakan, dan Kapan Minta Bantuan';
const IMAGE_HERO = 'assets/images/artikel/orang-tua-dan-anak-berjalan-di-pantai-senja-wikimedia.webp';
const IMAGE_HERO_ALT = 'Siluet seorang ibu dan anak kecil berjalan di tepi pantai saat matahari terbenam, wajah tidak terlihat';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25T11:00:00+07:00';
const DATE_MODIFIED = '2026-09-25T11:00:00+07:00';
const DATE_DISPLAY = '25 September 2026';

const CREDIT = {
  name: 'PattayaPatrol',
  source: 'https://commons.wikimedia.org/wiki/File:DSC_7746_A_parent_and_child_walk_along_the_shoreline_at_sunset_the_sun_casting_a_golden_path_across_the_water.jpg',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  whoStress: 'https://www.who.int/news-room/questions-and-answers/item/stress',
  whoDwm: 'https://www.who.int/publications/i/item/9789240003927',
  whoDep: 'https://www.who.int/news-room/fact-sheets/detail/depression',
  hayes: 'https://pubmed.ncbi.nlm.nih.gov/22790429/',
  barroso: 'https://pubmed.ncbi.nlm.nih.gov/28555335/',
  watson: 'https://pubmed.ncbi.nlm.nih.gov/23672659/',
  li: 'https://pubmed.ncbi.nlm.nih.gov/37668850/',
  yang: 'https://pubmed.ncbi.nlm.nih.gov/40080346/',
  healing: 'https://www.healing119.id/',
  sapa: 'https://laporsapa129.kemenpppa.go.id/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apakah wajar orang tua anak ABK merasa stres?',
    a: 'Wajar. WHO menjelaskan stres sebagai respons alami manusia terhadap situasi sulit, dan setiap orang mengalaminya dalam kadar tertentu. Meta-analisis Hayes dan Watson (2013) juga menemukan tingkat stres pengasuhan pada orang tua anak autisme jauh lebih tinggi dibanding orang tua anak dengan perkembangan tipikal. Merasa stres bukan tanda Anda orang tua yang gagal, tetapi sinyal bahwa beban Anda perlu dibagi dan dikelola.'
  },
  {
    q: 'Bagaimana membedakan stres biasa dengan depresi?',
    a: 'Stres umumnya mereda ketika situasinya membaik atau ketika kita mulai bisa menghadapinya. Menurut WHO, episode depresi ditandai suasana hati sedih, mudah marah, atau hampa, atau hilangnya minat pada kegiatan yang biasanya disukai, yang berlangsung hampir sepanjang hari, hampir setiap hari, selama minimal dua minggu. Bila tanda seperti itu muncul, temui dokter di puskesmas atau psikolog. Diagnosis hanya dapat ditegakkan tenaga kesehatan.'
  },
  {
    q: 'Saya tidak punya waktu untuk diri sendiri. Apa yang bisa dilakukan dalam beberapa menit?',
    a: 'Mulai dari yang kecil. Panduan WHO Doing What Matters in Times of Stress dirancang agar tekniknya bisa dilatih hanya beberapa menit setiap hari dan tersedia dalam bahasa Indonesia. Anda juga bisa mencoba napas perlahan beberapa kali sebelum merespons anak, minum air, atau menepi sebentar ke ruang yang tenang bila anak dalam kondisi aman.'
  },
  {
    q: 'Ke mana saya bisa menghubungi bila merasa sangat tertekan?',
    a: 'Kementerian Kesehatan menyediakan layanan Healing119: hubungi 119 ekstensi 8 bila ada pikiran untuk mengakhiri hidup, atau pilih konseling via WhatsApp melalui situs healing119.id bila butuh teman bercerita. Bila Anda dalam bahaya langsung, segera ke IGD rumah sakit terdekat. Untuk kekerasan terhadap perempuan atau anak, laporkan ke SAPA 129 (telepon 129 atau WhatsApp 08-111-129-129).'
  },
  {
    q: 'Apakah stres orang tua berpengaruh pada anak?',
    a: 'Ada kaitannya. Tinjauan sistematis Barroso dan rekan (2018) terhadap 133 penelitian menemukan hubungan antara stres pengasuhan dan masalah perilaku anak, terutama perilaku yang tampak keluar seperti tantrum dan agresi. Hubungan ini dua arah: perilaku anak menambah stres orang tua, dan orang tua yang kelelahan lebih sulit merespons dengan tenang. Karena itu mengurus kesehatan mental orang tua termasuk bagian dari mendukung anak.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Mengelola Stres Orang Tua Anak ABK', item: CANONICAL }
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
    caption: 'Siluet orang tua dan anak berjalan di tepi pantai saat senja',
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
  keywords: 'mengelola stres orang tua anak abk, stres pengasuhan, parenting stress, kesehatan mental orang tua anak berkebutuhan khusus, burnout orang tua, healing119',
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
    <meta name="keywords" content="mengelola stres orang tua anak abk, stres pengasuhan, kesehatan mental orang tua, orang tua anak berkebutuhan khusus, healing119, YUKA">
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
                <span class="current">Mengelola Stres Orang Tua Anak ABK</span>
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
            <figcaption>Menjaga diri sendiri tetap kuat adalah bagian dari mendampingi anak. Langkah kecil yang dilakukan rutin sering lebih bertahan daripada perubahan besar sekaligus.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Mengelola stres orang tua anak ABK dimulai dari tiga hal: mengakui bahwa beban Anda memang berat, mengenali tanda stres sejak awal, lalu membagi beban dan memakai teknik sederhana yang bisa dilakukan setiap hari. Bila stres sudah mengganggu tidur, pekerjaan, atau hubungan dengan anak selama berminggu-minggu, itu saatnya mencari bantuan profesional, bukan menunggu kuat sendiri.</strong></p>

            <p>Artikel ini membahas mengapa orang tua anak berkebutuhan khusus lebih rentan stres, tanda yang perlu diwaspadai, perbedaan stres dengan depresi, cara meredakan stres dalam keseharian dan saat situasi memanas, serta layanan bantuan resmi yang bisa dihubungi. Untuk rutinitas merawat diri jangka panjang, baca juga <a href="/artikel/self-care-untuk-orang-tua-anak-disabilitas">self care untuk orang tua anak disabilitas</a>.</p>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum, bukan alat diagnosis dan bukan pengganti konsultasi dengan dokter, psikolog, atau psikiater. Bila Anda memiliki pikiran untuk menyakiti diri atau mengakhiri hidup, hubungi <strong>119 ekstensi 8</strong> (layanan Kementerian Kesehatan) atau datang ke IGD rumah sakit terdekat sekarang juga.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#kenapa">Mengapa orang tua anak ABK lebih rentan stres</a></li>
                    <li><a href="#tanda">Tanda stres yang perlu dikenali</a></li>
                    <li><a href="#depresi">Stres atau depresi? Kapan perlu bantuan</a></li>
                    <li><a href="#harian">Cara mengelola stres dalam keseharian</a></li>
                    <li><a href="#memanas">Saat situasi memanas: teknik beberapa menit</a></li>
                    <li><a href="#berbagi">Membagi beban dengan pasangan, keluarga, dan sekolah</a></li>
                    <li><a href="#rencana">Menyusun rencana stres pribadi</a></li>
                    <li><a href="#bantuan">Bantuan profesional dan layanan resmi</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="kenapa">Mengapa Orang Tua Anak ABK Lebih Rentan Stres</h2>
            <p>Organisasi Kesehatan Dunia (${ext(L.whoStress, 'WHO')}) mendefinisikan stres sebagai keadaan cemas atau tegang secara mental yang dipicu situasi sulit. Stres adalah respons alami yang membantu kita menghadapi tantangan. Sedikit stres membantu kita tetap bergerak, tetapi stres yang terlalu banyak dan berkepanjangan dapat menimbulkan masalah kesehatan fisik maupun mental.</p>
            <p>Mengasuh anak berkebutuhan khusus membawa tantangan yang datang terus-menerus, bukan sesekali. Penelitian menunjukkan hal ini secara konsisten:</p>
            <ul>
                <li>Meta-analisis ${ext(L.hayes, 'Hayes dan Watson (2013)')} yang menggabungkan penelitian dengan kelompok pembanding menemukan perbedaan stres pengasuhan yang besar antara keluarga anak autisme dan keluarga anak dengan perkembangan tipikal.</li>
                <li>Tinjauan sistematis ${ext(L.barroso, 'Barroso dan rekan (2018)')} atas 133 penelitian menemukan tingkat stres pengasuhan pada orang tua anak autisme dan keterlambatan perkembangan lebih tinggi dibanding orang tua dari kelompok klinis lain, termasuk anak dengan penyakit kronis.</li>
                <li>Wawancara mendalam oleh ${ext(L.watson, 'Watson dan rekan (2013)')} menggambarkan sumber stres yang sering disebut orang tua: harus mengerjakan banyak hal sekaligus, proses mendapatkan diagnosis, dan menghadapi masalah perilaku anak. Mereka menyimpulkan dukungan bagi orang tua perlu disesuaikan dengan kebutuhan tiap keluarga.</li>
            </ul>
            <p>Dalam keseharian di Indonesia, sumber stres itu bisa berupa jadwal terapi yang padat dan jauh dari rumah, biaya, mencari sekolah yang mau menerima anak, komentar keluarga besar atau tetangga, rasa bersalah, kurang tidur, serta kekhawatiran tentang masa depan anak. Memahami bahwa stres ini punya sebab nyata membantu kita berhenti menyalahkan diri sendiri.</p>

            <h2 id="tanda">Tanda Stres yang Perlu Dikenali</h2>
            <p>Banyak orang tua baru menyadari dirinya stres ketika sudah "meledak". Padahal tubuh dan pikiran biasanya sudah memberi sinyal lebih awal. Menurut ${ext(L.whoStress, 'WHO')}, tanda stres antara lain:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Area</th><th>Tanda yang sering muncul</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Perasaan</strong></td><td>Sulit rileks, cemas, mudah tersinggung atau marah</td></tr>
                    <tr><td><strong>Pikiran</strong></td><td>Sulit berkonsentrasi, pikiran terus berputar pada masalah</td></tr>
                    <tr><td><strong>Tubuh</strong></td><td>Sakit kepala atau nyeri badan, perut tidak nyaman, sulit tidur</td></tr>
                    <tr><td><strong>Kebiasaan</strong></td><td>Nafsu makan hilang atau justru makan berlebihan, lebih banyak merokok atau memakai zat lain</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.95rem;">Sumber: ${ext(L.whoStress, 'WHO, Questions and answers: Stress')}, dicek 25 September 2026.</p>
            <p>WHO juga mengingatkan bahwa stres kronis dapat memperburuk masalah kesehatan yang sudah ada, dan situasi yang penuh tekanan dapat memicu atau memperberat kondisi kesehatan mental, paling sering kecemasan dan depresi. Karena itu, tanda-tanda di atas layak dicatat, bukan diabaikan.</p>

            <h2 id="depresi">Stres atau Depresi? Kapan Perlu Bantuan</h2>
            <p>Stres biasanya berkurang ketika situasinya membaik atau ketika kita mulai menemukan cara menghadapinya. Depresi berbeda. Menurut ${ext(L.whoDep, 'lembar fakta WHO tentang depresi')}, episode depresi ditandai suasana hati sedih, mudah marah, atau hampa, atau hilangnya rasa senang dan minat pada kegiatan, yang berlangsung hampir sepanjang hari, hampir setiap hari, <strong>selama minimal dua minggu</strong>. Gejala lain yang bisa menyertainya:</p>
            <ul>
                <li>sulit berkonsentrasi;</li>
                <li>rasa bersalah berlebihan atau merasa tidak berharga;</li>
                <li>merasa tidak ada harapan tentang masa depan;</li>
                <li>pikiran tentang kematian atau bunuh diri;</li>
                <li>tidur terganggu, perubahan nafsu makan atau berat badan;</li>
                <li>sangat lelah atau tidak bertenaga.</li>
            </ul>
            <p>Daftar ini bukan alat untuk mendiagnosis diri sendiri. Gunakan sebagai alasan untuk berbicara dengan tenaga kesehatan. WHO menyarankan, bila kita kesulitan menghadapi stres, mintalah bantuan tenaga kesehatan yang dipercaya atau orang yang dipercaya di lingkungan kita. Di Indonesia, pintu masuk yang paling mudah dijangkau adalah puskesmas, yang dapat merujuk ke psikolog atau psikiater bila diperlukan.</p>
            <p><strong>Segera cari pertolongan hari ini juga</strong> bila muncul pikiran untuk menyakiti diri, mengakhiri hidup, atau menyakiti anak. Nomor yang bisa dihubungi ada di bagian <a href="#bantuan">layanan resmi</a> di bawah.</p>

            <h2 id="harian">Cara Mengelola Stres dalam Keseharian</h2>
            <p>WHO merangkum beberapa langkah dasar untuk mengelola stres. Di bawah ini langkah-langkah tersebut, disesuaikan dengan kenyataan hidup orang tua anak ABK:</p>
            <ol>
                <li><strong>Jaga rutinitas harian.</strong> Jadwal yang teratur membantu kita merasa lebih memegang kendali. Rutinitas juga menguntungkan anak, terutama anak autisme yang nyaman dengan hal yang dapat diprediksi. <a href="/artikel/jadwal-visual-anak-autis">Jadwal visual</a> bisa membantu seluruh rumah berjalan lebih tertib.</li>
                <li><strong>Lindungi waktu tidur.</strong> WHO menyebut tidur yang cukup membantu memulihkan tubuh dan pikiran dari dampak stres. Usahakan jam tidur dan bangun yang konsisten, kurangi layar sebelum tidur, dan hindari kafein menjelang malam. Bila anak sering terbangun malam, bergantianlah dengan pasangan atau anggota keluarga lain.</li>
                <li><strong>Tetap terhubung dengan orang lain.</strong> Menceritakan perasaan kepada orang yang dipercaya dapat memperbaiki suasana hati dan mengurangi stres. Kelompok sesama orang tua ABK sering menjadi tempat yang paling memahami.</li>
                <li><strong>Makan teratur dan cukup minum.</strong> Orang tua yang sibuk mengurus anak sering lupa makan. Siapkan makanan sederhana yang mudah dijangkau.</li>
                <li><strong>Bergerak setiap hari.</strong> WHO menyebut olahraga harian, termasuk berjalan kaki, dapat membantu mengurangi stres. Jalan pagi bersama anak di sekitar rumah sudah termasuk.</li>
                <li><strong>Batasi paparan berita dan media sosial</strong> bila terasa menambah cemas, termasuk unggahan yang membuat Anda membandingkan anak dengan anak lain.</li>
            </ol>
            <p>WHO juga menerbitkan panduan bergambar ${ext(L.whoDwm, '<em>Doing What Matters in Times of Stress</em>')} yang berisi keterampilan praktis untuk menghadapi stres. Menurut WHO, cukup beberapa menit setiap hari untuk melatih teknik di dalamnya, dan panduan ini tersedia dalam banyak bahasa termasuk bahasa Indonesia, lengkap dengan latihan audio.</p>

            <h2 id="memanas">Saat Situasi Memanas: Teknik Beberapa Menit</h2>
            <p>Stres paling terasa saat anak tantrum atau meltdown di tempat umum, saat menerima kabar yang mengecewakan dari sekolah, atau saat lelah menumpuk di malam hari. Di momen seperti ini, tujuan kita bukan menghilangkan stres, melainkan cukup tenang untuk merespons dengan aman. Beberapa cara sederhana:</p>
            <ul>
                <li><strong>Pastikan keamanan dulu.</strong> Jauhkan anak dari benda berbahaya dan jalan raya. Setelah anak aman, fokus pada diri sendiri beberapa detik.</li>
                <li><strong>Perlambat napas.</strong> Tarik napas perlahan lewat hidung, lalu hembuskan lebih panjang dari tarikannya. Ulangi beberapa kali sebelum berbicara.</li>
                <li><strong>Rasakan pijakan.</strong> Tekan telapak kaki ke lantai, perhatikan apa yang Anda lihat dan dengar di sekitar. Cara ini membantu pikiran kembali ke saat ini, bukan tenggelam dalam kekhawatiran.</li>
                <li><strong>Beri nama perasaannya.</strong> Katakan dalam hati, "Saya sedang merasa kewalahan." Mengenali perasaan membuat kita tidak langsung dikendalikan olehnya.</li>
                <li><strong>Menepi sebentar bila memungkinkan.</strong> Bila anak aman dan ada orang dewasa lain, keluar ruangan satu atau dua menit tidak apa-apa.</li>
                <li><strong>Evaluasi setelah semuanya tenang</strong>, bukan saat itu juga. Catat pemicu kejadian untuk dibahas dengan terapis anak, misalnya lewat pendekatan <a href="/artikel/terapi-aba">terapi perilaku</a> yang dijalani anak.</li>
            </ul>
            <p>Bila Anda merasa hampir kehilangan kendali dan khawatir akan menyakiti anak, itu tanda beban Anda sudah melampaui batas. Hubungi seseorang saat itu juga dan cari bantuan profesional setelahnya. Meminta bantuan adalah tindakan melindungi anak.</p>

            <h2 id="berbagi">Membagi Beban dengan Pasangan, Keluarga, dan Sekolah</h2>
            <p>Salah satu sumber stres terbesar adalah ketika seluruh pengasuhan bertumpu pada satu orang, sering kali ibu. Beberapa langkah praktis:</p>
            <ul>
                <li><strong>Buat daftar tugas yang terlihat.</strong> Tulis semua tugas mingguan (antar terapi, latihan di rumah, urusan sekolah, administrasi) lalu bagi secara adil. Cara membagi peran tiap anggota keluarga dibahas lebih lengkap di artikel <a href="/artikel/dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a>.</li>
                <li><strong>Latih "pengasuh cadangan".</strong> Ajari kakek, nenek, atau kerabat cara menenangkan anak dan membaca tandanya, sehingga Anda bisa beristirahat tanpa cemas.</li>
                <li><strong>Jadikan sekolah mitra.</strong> Komunikasi rutin dengan guru mengurangi kejutan dan kekhawatiran. <a href="/artikel/program-pembelajaran-individual">Program pembelajaran individual</a> yang jelas membuat semua pihak memegang target yang sama. Lihat juga <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.</li>
                <li><strong>Ambil jarak dari komentar yang melukai.</strong> Anda tidak wajib menjelaskan kondisi anak kepada setiap orang. Siapkan satu kalimat pendek untuk menutup pembicaraan dengan sopan.</li>
            </ul>
            <p>Bila Anda baru saja menerima diagnosis anak dan masih dalam masa penyesuaian, artikel <a href="/artikel/menerima-diagnosis-anak-abk">menerima diagnosis anak ABK</a> membahas fase awal itu secara khusus.</p>

            <h2 id="rencana">Menyusun Rencana Stres Pribadi</h2>
            <p>Rencana tertulis membantu saat kita terlalu lelah untuk berpikir jernih. Isi tabel sederhana berikut dan tempel di tempat yang mudah dilihat:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Bagian</th><th>Pertanyaan untuk diri sendiri</th><th>Contoh jawaban</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Pemicu</strong></td><td>Situasi apa yang paling sering membuat saya kewalahan?</td><td>Pagi hari sebelum berangkat sekolah, anak menolak berpakaian</td></tr>
                    <tr><td><strong>Tanda awal</strong></td><td>Apa sinyal pertama dari tubuh dan pikiran saya?</td><td>Rahang tegang, bicara makin keras</td></tr>
                    <tr><td><strong>Langkah cepat</strong></td><td>Apa yang bisa saya lakukan dalam 1 sampai 5 menit?</td><td>Napas perlahan, minum air, minta pasangan mengambil alih sebentar</td></tr>
                    <tr><td><strong>Pencegahan</strong></td><td>Apa yang bisa diubah agar pemicu berkurang?</td><td>Siapkan baju malam sebelumnya, pakai jadwal visual pagi</td></tr>
                    <tr><td><strong>Orang yang bisa dihubungi</strong></td><td>Siapa yang bisa saya telepon hari ini?</td><td>Adik, sesama orang tua di sekolah, psikolog puskesmas</td></tr>
                    <tr><td><strong>Batas bahaya</strong></td><td>Kapan saya harus langsung minta bantuan profesional?</td><td>Sedih hampir setiap hari lebih dari 2 minggu, atau muncul pikiran menyakiti diri</td></tr>
                </tbody>
            </table>
            </div>
            <p>Tinjau rencana ini setiap beberapa bulan, karena kebutuhan anak dan situasi keluarga terus berubah.</p>

            <h2 id="bantuan">Bantuan Profesional dan Layanan Resmi</h2>
            <p>Mencari bantuan bukan tanda lemah. Penelitian menunjukkan bantuan psikologis untuk orang tua memang bermanfaat:</p>
            <ul>
                <li>Meta-analisis ${ext(L.li, 'Li dan rekan (2024)')} atas 25 uji klinis acak dengan 1.915 peserta menemukan intervensi berbasis kognitif, termasuk terapi kognitif perilaku (CBT) dan program berbasis mindfulness, menurunkan stres, gejala depresi, dan kecemasan orang tua anak dengan disabilitas perkembangan.</li>
                <li>Meta-analisis ${ext(L.yang, 'Yang dan rekan (2026)')} atas 15 penelitian dengan 1.124 peserta menemukan program berbasis mindfulness menurunkan stres, depresi, dan kecemasan orang tua anak dengan disabilitas intelektual atau perkembangan, dengan efek yang sedang. Program yang berlangsung 8 minggu atau lebih menunjukkan hasil pada hubungan orang tua dan anak.</li>
            </ul>
            <p>Program seperti ini dijalankan oleh tenaga profesional. Tanyakan ke puskesmas, psikolog klinis, atau layanan psikologi di rumah sakit dan kampus terdekat.</p>

            <div class="story-highlight">
                <h3>Layanan resmi yang bisa dihubungi</h3>
                <ul style="margin-bottom:0;">
                    <li><strong>${ext(L.healing, 'Healing119')} (Kementerian Kesehatan):</strong> hubungi <strong>119 ekstensi 8</strong> untuk darurat bunuh diri, atau pilih konseling via WhatsApp melalui situs healing119.id bila butuh teman bercerita.</li>
                    <li><strong>${ext(L.sapa, 'SAPA 129')} (Kementerian Pemberdayaan Perempuan dan Perlindungan Anak):</strong> telepon <strong>129</strong> atau WhatsApp <strong>08-111-129-129</strong> untuk melaporkan kekerasan terhadap perempuan atau anak, termasuk kekerasan dalam rumah tangga.</li>
                    <li><strong>Keadaan gawat darurat:</strong> datang ke IGD rumah sakit terdekat.</li>
                    <li><strong>Layanan rutin:</strong> puskesmas terdekat, yang dapat merujuk ke psikolog atau psikiater.</li>
                </ul>
            </div>

            <h2>Pendampingan di YUKA</h2>
            <p>YUKA mendampingi anak berkebutuhan khusus dan keluarganya lewat pendidikan inklusi di <a href="/sekolah-inklusi-sleman">Sekolah Inklusi Taruna Imani Sleman</a>. Guru dan pendamping dapat membantu orang tua menyusun rutinitas, berbagi perkembangan anak, dan mengarahkan ke layanan yang sesuai. YUKA bukan layanan kesehatan mental dan tidak menegakkan diagnosis, sehingga kebutuhan konseling atau pengobatan tetap diarahkan ke tenaga profesional. Informasi pendampingan lain ada di halaman <a href="/konsultasi-abk-sleman">konsultasi ABK Sleman</a> dan artikel <a href="/artikel/intervensi-dini">intervensi dini</a>.</p>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/self-care-untuk-orang-tua-anak-disabilitas">Self Care untuk Orang Tua Anak Disabilitas</a></h4>
                    <p>Rutinitas merawat diri yang realistis untuk jangka panjang.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/dukungan-keluarga-anak-abk">Dukungan Keluarga Anak ABK</a></h4>
                    <p>Membagi peran agar pengasuhan tidak bertumpu pada satu orang.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/menerima-diagnosis-anak-abk">Menerima Diagnosis Anak ABK</a></h4>
                    <p>Langkah orang tua di masa awal setelah diagnosis.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#StresPengasuhan</a>
            <a href="#">#KesehatanMentalOrangTua</a>
            <a href="#">#OrangTuaABK</a>
            <a href="#">#AnakBerkebutuhanKhusus</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.whoStress, '<strong>Questions and answers: Stress</strong>, World Health Organization, 30 Maret 2026')}</li>
              <li>${ext(L.whoDwm, '<strong>Doing What Matters in Times of Stress: An Illustrated Guide</strong>, World Health Organization')}</li>
              <li>${ext(L.whoDep, '<strong>Depressive disorder (depression)</strong>, lembar fakta World Health Organization')}</li>
              <li>${ext(L.hayes, '<strong>The impact of parenting stress: a meta-analysis of studies comparing the experience of parenting stress in parents of children with and without autism spectrum disorder</strong>, Hayes SA, Watson SL, Journal of Autism and Developmental Disorders, 2013')}</li>
              <li>${ext(L.barroso, '<strong>Parenting Stress through the Lens of Different Clinical Groups: a Systematic Review and Meta-Analysis</strong>, Barroso NE dkk., Journal of Abnormal Child Psychology, 2018')}</li>
              <li>${ext(L.watson, '<strong>Autism spectrum disorder and fetal alcohol spectrum disorder. Part II: a qualitative comparison of parenting stress</strong>, Watson SL dkk., Journal of Intellectual and Developmental Disability, 2013')}</li>
              <li>${ext(L.li, '<strong>Cognitive-Based Interventions for Improving Psychological Health and Well-Being for Parents of Children with Developmental Disabilities: A Systematic Review and Meta-analysis</strong>, Li S dkk., Journal of Autism and Developmental Disorders, 2024')}</li>
              <li>${ext(L.yang, '<strong>The Effectiveness of Mindfulness-Based Interventions in Improving the Mental Health of Parents of Children with Intellectual or Developmental Disabilities</strong>, Yang T dkk., Journal of Autism and Developmental Disorders, 2026')}</li>
              <li>${ext(L.healing, '<strong>Healing119</strong>, Layanan Hotline Kesehatan Mental dan Bunuh Diri, Kementerian Kesehatan RI')}</li>
              <li>${ext(L.sapa, '<strong>SAPA 129</strong>, Layanan Pengaduan Kekerasan terhadap Perempuan dan Anak, KemenPPPA')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti diagnosis, konseling, atau pengobatan dari dokter, psikolog, atau psikiater</strong>. Sumber dan nomor layanan dicek pada 25 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Mengelola%20Stres%20Orang%20Tua%20Anak%20ABK%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Mengelola%20Stres%20Orang%20Tua%20Anak%20ABK&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

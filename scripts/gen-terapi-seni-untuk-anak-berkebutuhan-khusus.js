#!/usr/bin/env node
'use strict';

// One-time generator for artikel/terapi-seni-untuk-anak-berkebutuhan-khusus.html
// (catchup 2026-09-27, kartu olX5lhJi). Canonical shell via scripts/lib/article-shell.js.
// Page skeleton (head, nav, share, CTA) is copied from scripts/gen-gut-microbiome-dan-autisme-penelitian.js.
// YMYL: every claim was checked on 2026-09-27 against the source:
// - AATA "About Art Therapy" (arttherapy.org/about-art-therapy/): definition as a mental health profession,
//   facilitated by a professional art therapist, master's-level clinicians; "art therapy" by non art therapists
//   and products such as adult coloring books are an inaccurate use of the term.
// - PMID 41302349 Wei 2025 Healthcare (Basel): 12 RCTs, ASD children/adolescents; promise for ASD symptoms,
//   stress, social communication, motor, language; most studies small, short, high risk of bias, low quality.
// - PMID 38929285 Martinez-Verez 2024 Children (Basel): 80 articles, art + music therapy in ASD, ADHD,
//   language disorders, learning difficulties; impact on symptoms, behaviour, communication; calls for more study.
// - PMID 33132993 Bosgraaf 2020 Front Psychol: 37 studies (16 RCT, 8 CT, 13 pre-post); non-directive,
//   directive, eclectic therapist behaviour; flexible use of materials.
// - PMID 38936289 Zhang 2024 Clinics: 6 studies, 422 participants, anxiety SMD -1.42, I2 94%.
// - PMID 40367574 Zhang 2025 Clinics: 12 controlled trials, depression SMD -0.72, low power and quality.
// Photo: Wikimedia Commons File:Gouache.jpg, Jeff Dahl, CC BY-SA 3.0, viewed before use (paint tubes, palette, brushes).

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'terapi-seni-untuk-anak-berkebutuhan-khusus';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Terapi Seni untuk Anak Berkebutuhan Khusus: Panduan';
const META_DESC = 'Terapi seni untuk anak berkebutuhan khusus: pengertian, bedanya dengan kegiatan menggambar, bukti penelitian terbaru, dan cara memulainya. Baca panduannya.';
const OG_TITLE = 'Terapi Seni untuk Anak Berkebutuhan Khusus: Pengertian, Bukti, dan Cara Memulai';
const OG_DESC = 'Apa itu terapi seni, apa bedanya dengan kegiatan menggambar biasa, dan apa kata penelitian soal manfaatnya bagi anak autis, ADHD, dan anak berkebutuhan khusus lain.';
const H1 = 'Terapi Seni untuk Anak Berkebutuhan Khusus: Pengertian, Bukti Penelitian, dan Cara Memulai';
const IMAGE_HERO = 'assets/images/artikel/cat-gouache-kuas-palet-wikimedia.webp';
const IMAGE_HERO_ALT = 'Sembilan tube cat gouache warna-warni, palet keramik berisi cat merah, kuning, hijau, biru, dan hitam, tiga kuas, serta kertas uji warna di atas meja abu-abu';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-27T23:30:00+07:00';
const DATE_MODIFIED = '2026-09-27T23:30:00+07:00';
const DATE_DISPLAY = '27 September 2026';

const CREDIT = {
  name: 'Jeff Dahl',
  author: 'https://commons.wikimedia.org/wiki/User:Jeff_Dahl',
  source: 'https://commons.wikimedia.org/wiki/File:Gouache.jpg',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  aata: 'https://arttherapy.org/about-art-therapy/',
  wei: 'https://pubmed.ncbi.nlm.nih.gov/41302349/',
  martinez: 'https://pubmed.ncbi.nlm.nih.gov/38929285/',
  bosgraaf: 'https://pubmed.ncbi.nlm.nih.gov/33132993/',
  zhangAnx: 'https://pubmed.ncbi.nlm.nih.gov/38936289/',
  zhangDep: 'https://pubmed.ncbi.nlm.nih.gov/40367574/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa itu terapi seni untuk anak berkebutuhan khusus?',
    a: 'Terapi seni adalah layanan kesehatan mental yang memakai kegiatan berkarya, seperti menggambar, melukis, dan membentuk tanah liat, di dalam hubungan terapeutik dengan terapis seni terlatih. Untuk anak berkebutuhan khusus, terapi seni dipakai sebagai jalur komunikasi dan ekspresi yang tidak bergantung pada kata-kata.'
  },
  {
    q: 'Apakah kegiatan menggambar di rumah sudah termasuk terapi seni?',
    a: 'Belum. Menurut American Art Therapy Association (AATA), istilah terapi seni hanya tepat untuk layanan yang dijalankan terapis seni profesional. Menggambar bersama di rumah tetap bermanfaat sebagai kegiatan kreatif, tetapi bukan terapi.'
  },
  {
    q: 'Apakah terapi seni bisa menyembuhkan autisme atau ADHD?',
    a: 'Tidak. Autisme dan ADHD bukan penyakit yang disembuhkan dengan terapi seni. Penelitian menunjukkan terapi seni berpotensi membantu komunikasi sosial, emosi, dan keterampilan motorik, tetapi kualitas buktinya masih rendah sehingga terapi seni diposisikan sebagai pendamping, bukan pengganti terapi utama.'
  },
  {
    q: 'Anak usia berapa yang bisa mengikuti terapi seni?',
    a: 'Penelitian yang dirangkum dalam tinjauan sistematis melibatkan anak dan remaja dengan rentang usia yang lebar. Kegiatannya disesuaikan dengan kemampuan anak, sehingga anak yang belum bisa memegang pensil pun dapat mulai dari cat jari, tanah liat, atau bahan bertekstur.'
  },
  {
    q: 'Bagaimana memilih terapis seni?',
    a: 'Tanyakan latar pendidikan dan pelatihan terapisnya, pengalamannya menangani anak berkebutuhan khusus, tujuan terapi yang terukur, dan cara ia berkoordinasi dengan dokter, psikolog, atau terapis lain yang sudah menangani anak.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Terapi Seni untuk Anak Berkebutuhan Khusus', item: CANONICAL }
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
    height: 588,
    caption: 'Cat gouache, palet, dan kuas, bahan yang umum dipakai dalam kegiatan melukis',
    creditText: 'Foto: Jeff Dahl / Wikimedia Commons, CC BY-SA 3.0',
    author: { '@type': 'Person', name: CREDIT.name, url: CREDIT.author },
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
  keywords: 'terapi seni untuk anak berkebutuhan khusus, terapi seni anak autis, art therapy ABK, manfaat terapi seni, terapi seni ADHD',
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
    <meta name="keywords" content="terapi seni untuk anak berkebutuhan khusus, terapi seni anak autis, art therapy ABK, manfaat terapi seni, YUKA">
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
                <span class="current">Terapi Seni untuk ABK</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="588" fetchpriority="high">
            <figcaption>Cat, palet, dan kuas hanyalah alat. Dalam terapi seni, yang bekerja adalah proses berkarya di dalam hubungan dengan terapis yang terlatih.
                <span class="kredit">Foto: <a href="${CREDIT.author}" rel="nofollow noopener" target="_blank">Jeff Dahl</a> / <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">Wikimedia Commons</a>, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">CC BY-SA 3.0</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> terapi seni untuk anak berkebutuhan khusus adalah layanan kesehatan mental yang memakai kegiatan berkarya (menggambar, melukis, membentuk tanah liat, kolase) di dalam hubungan terapeutik dengan <strong>terapis seni terlatih</strong>. Penelitian terbaru menunjukkan terapi seni <strong>berpotensi</strong> membantu komunikasi sosial, pengelolaan emosi, dan keterampilan motorik anak autis maupun anak berkebutuhan khusus lain. Namun kualitas buktinya masih rendah, jadi terapi seni paling tepat dipakai sebagai <strong>pendamping</strong> terapi utama, bukan penggantinya.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah rangkuman informasi untuk orang tua, guru, dan pendamping, <strong>bukan saran medis atau psikologis</strong>. Terapi seni tidak menyembuhkan autisme, ADHD, atau kondisi perkembangan lain. Semua temuan penelitian di bawah dicek terhadap abstrak di PubMed dan situs resmi American Art Therapy Association pada 27 September 2026.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu terapi seni?</a></li>
                    <li><a href="#bukan-sekadar-menggambar">Terapi seni bukan sekadar kegiatan menggambar</a></li>
                    <li><a href="#cara-kerja">Mengapa seni bisa membantu anak berkebutuhan khusus?</a></li>
                    <li><a href="#bukti">Apa kata penelitian?</a></li>
                    <li><a href="#sesi">Seperti apa sesi terapi seni?</a></li>
                    <li><a href="#per-kondisi">Penyesuaian untuk tiap kebutuhan anak</a></li>
                    <li><a href="#memilih">Cara memilih terapis dan memulai</a></li>
                    <li><a href="#rumah">Yang bisa dilakukan orang tua di rumah</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Terapi Seni untuk Anak Berkebutuhan Khusus?</h2>
            <p>American Art Therapy Association (AATA), asosiasi profesi terapis seni di Amerika Serikat, mendefinisikan terapi seni sebagai <strong>profesi kesehatan mental</strong> yang memperkaya hidup individu, keluarga, dan komunitas melalui kegiatan berkarya secara aktif, proses kreatif, teori psikologi terapan, dan pengalaman manusia di dalam <strong>hubungan psikoterapeutik</strong> (${ext(L.aata, 'AATA, About Art Therapy')}).</p>
            <p>Menurut AATA, terapi seni dipakai untuk memperbaiki fungsi kognitif dan sensorimotor, membangun harga diri dan kesadaran diri, mengembangkan ketahanan emosi, meningkatkan keterampilan sosial, serta mengurangi konflik dan tekanan. Terapi seni dijalankan oleh terapis seni profesional, yang di Amerika Serikat merupakan klinisi berpendidikan minimal setara magister di bidang seni dan terapi.</p>
            <p>Untuk <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus (ABK)</a>, daya tarik utamanya jelas: banyak anak yang kesulitan berbicara atau menjelaskan perasaan tetap bisa menggores, menempel, atau membentuk sesuatu. AATA menyebut ekspresi visual dan simbolik memberi jalur komunikasi alternatif yang <strong>dapat melewati keterbatasan bahasa</strong>.</p>

            <h2 id="bukan-sekadar-menggambar">Terapi Seni Bukan Sekadar Kegiatan Menggambar</h2>
            <p>Ini hal yang paling sering disalahpahami. AATA secara tegas menyatakan bahwa kegiatan yang dijalankan oleh orang yang bukan terapis seni, atau produk seperti buku mewarnai dewasa, <strong>tidak tepat disebut terapi seni</strong>. Istilah itu hanya berlaku untuk layanan dari orang yang memiliki pelatihan, sertifikasi, dan izin praktik yang disyaratkan (${ext(L.aata, 'AATA')}).</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>Kegiatan seni atau pelajaran seni</th><th>Terapi seni</th></tr>
                </thead>
                <tbody>
                    <tr><td>Tujuan utama</td><td>Mengenal teknik, bersenang-senang, menghasilkan karya</td><td>Tujuan terapi yang terukur, misalnya regulasi emosi atau komunikasi</td></tr>
                    <tr><td>Pendamping</td><td>Guru, orang tua, fasilitator</td><td>Terapis seni terlatih</td></tr>
                    <tr><td>Fokus</td><td>Hasil karya</td><td>Proses berkarya dan hubungan anak dengan terapis</td></tr>
                    <tr><td>Evaluasi</td><td>Penilaian karya atau partisipasi</td><td>Perkembangan terhadap tujuan terapi, dikoordinasikan dengan tim</td></tr>
                </tbody>
            </table>
            </div>
            <p>Kegiatan seni tetap sangat berharga. Ide kegiatan kreatif yang bisa dijalankan guru dan orang tua sudah kami bahas di artikel <a href="/artikel/seni-dan-kreativitas-untuk-anak-disabilitas">seni dan kreativitas untuk anak disabilitas</a>. Artikel ini berfokus pada terapi seni sebagai layanan profesional.</p>

            <h2 id="cara-kerja">Mengapa Seni Bisa Membantu Anak Berkebutuhan Khusus?</h2>
            <p>Tinjauan sistematis naratif terhadap 37 studi terapi seni pada anak dan remaja dengan masalah psikososial menjelaskan bahwa ada tiga unsur yang dianggap bekerja: <strong>bahan seni</strong>, <strong>proses berkarya</strong> di hadapan dan dengan bimbingan terapis, serta <strong>karya yang dihasilkan</strong> (${ext(L.bosgraaf, 'Bosgraaf dkk., 2020')}). Beberapa jalur yang masuk akal bagi anak berkebutuhan khusus:</p>
            <ul>
                <li><strong>Komunikasi tanpa kata.</strong> Gambar dan bentuk menjadi jembatan bagi anak yang verbalnya terbatas.</li>
                <li><strong>Pengalaman sensorik yang terarah.</strong> Tekstur cat, tanah liat, dan kertas memberi masukan sensorik yang bisa diatur takarannya, sejalan dengan prinsip <a href="/artikel/sensori-integrasi">sensori integrasi</a>.</li>
                <li><strong>Latihan motorik halus.</strong> Menggenggam kuas, meremas, menggunting, dan menempel melatih koordinasi tangan dan mata.</li>
                <li><strong>Regulasi emosi.</strong> Perasaan yang sulit diucapkan bisa dituangkan, lalu dibicarakan bersama terapis.</li>
                <li><strong>Interaksi sosial.</strong> Sesi kelompok atau sesi bersama orang tua membuka kesempatan bergiliran, berbagi alat, dan meniru.</li>
            </ul>

            <h2 id="bukti">Apa Kata Penelitian?</h2>
            <p>Bagian ini penting dibaca dengan jujur: hasilnya menjanjikan, tetapi belum kuat.</p>

            <h3>Anak dan remaja autis: 12 uji acak terkontrol</h3>
            <p>Tinjauan sistematis tahun 2025 menelusuri delapan basis data dan menemukan <strong>12 uji acak terkontrol</strong> terapi seni pada anak dan remaja dengan gangguan spektrum autisme (${ext(L.wei, 'Wei dkk., 2025')}). Terapi seni menunjukkan hasil yang menjanjikan dalam mengurangi gejala autisme dan gejala terkait stres, serta memperbaiki komunikasi sosial, keterampilan motorik, bahasa, dan perkembangan saraf. Namun penulisnya juga mencatat bahwa sebagian besar studi berukuran kecil, berdurasi pendek, berisiko bias tinggi, dan kualitas metodologinya rendah. Kesimpulan mereka: dibutuhkan penelitian yang lebih ketat sebelum efektivitasnya bisa dipastikan.</p>

            <h3>Autisme, ADHD, gangguan bahasa, dan kesulitan belajar</h3>
            <p>Tinjauan sistematis tahun 2024 menganalisis 80 artikel tentang terapi seni dan terapi musik pada anak dengan autisme, ADHD, gangguan perkembangan bahasa, dan kesulitan belajar bahasa (${ext(L.martinez, 'Martinez-Verez dkk., 2024')}). Penulis melaporkan dampak pada gejala, perilaku, komunikasi, serta keterampilan sosial, kognitif, dan emosi, dan menyebut kedua terapi ini layak dipakai sebagai pelengkap. Perlu dicatat, tinjauan ini menggabungkan terapi seni dan terapi musik, sehingga tidak bisa dibaca sebagai bukti khusus terapi seni. Pembahasan terapi musik ada di artikel <a href="/artikel/neurologic-music-therapy-untuk-abk">neurologic music therapy untuk ABK</a>.</p>

            <h3>Kecemasan dan depresi pada anak</h3>
            <p>Dua meta-analisis pada anak dan remaja umum (tidak khusus ABK) memberi gambaran tambahan. Meta-analisis 6 studi dengan 422 peserta menemukan penurunan gejala kecemasan yang bermakna, tetapi heterogenitas antarstudinya sangat tinggi (I<sup>2</sup> 94%) (${ext(L.zhangAnx, 'Zhang dkk., 2024')}). Meta-analisis 12 uji terkontrol menemukan penurunan gejala depresi, dengan catatan kekuatan statistik dan kualitas metodologi studinya rendah (${ext(L.zhangDep, 'Zhang dkk., 2025')}). Temuan ini relevan karena anak berkebutuhan khusus juga bisa mengalami kecemasan, seperti yang kami bahas di artikel <a href="/artikel/kesehatan-mental-remaja-berkebutuhan-khusus">kesehatan mental remaja berkebutuhan khusus</a>.</p>

            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Pertanyaan</th><th>Status bukti</th><th>Sumber</th></tr>
                </thead>
                <tbody>
                    <tr><td>Terapi seni membantu anak autis?</td><td><strong>Menjanjikan</strong>, tetapi studinya kecil dan berisiko bias tinggi</td><td>Wei dkk., 2025</td></tr>
                    <tr><td>Terapi seni membantu anak ADHD atau gangguan bahasa?</td><td><strong>Ada laporan positif</strong>, digabung dengan terapi musik</td><td>Martinez-Verez dkk., 2024</td></tr>
                    <tr><td>Terapi seni mengurangi kecemasan dan depresi anak?</td><td><strong>Efek positif</strong> pada anak umum, kualitas studi rendah</td><td>Zhang dkk., 2024; 2025</td></tr>
                    <tr><td>Terapi seni menyembuhkan autisme atau ADHD?</td><td><strong>Tidak</strong>, dan tidak ada penelitian yang mengklaim demikian</td><td>Semua sumber di atas</td></tr>
                </tbody>
            </table>
            </div>

            <h2 id="sesi">Seperti Apa Sesi Terapi Seni?</h2>
            <p>Tinjauan Bosgraaf dan rekan menemukan tiga gaya terapis: <strong>non-direktif</strong> (anak bebas memilih bahan dan tema), <strong>direktif</strong> (terapis memberi tema atau tugas), dan <strong>eklektik</strong> (gabungan keduanya). Ketiganya sama-sama menunjukkan efek pada masalah psikososial, dan terapis menyesuaikan bahan serta strukturnya dengan kebutuhan anak (${ext(L.bosgraaf, 'Bosgraaf dkk., 2020')}). Gambaran umum sebuah sesi:</p>
            <ol>
                <li><strong>Pembuka.</strong> Rutinitas yang sama tiap pertemuan membantu anak merasa aman, terutama anak autis yang nyaman dengan keteraturan.</li>
                <li><strong>Berkarya.</strong> Anak menggambar, melukis, membentuk, atau menempel, dengan tema bebas atau tema dari terapis.</li>
                <li><strong>Refleksi.</strong> Terapis mengajak anak menceritakan atau menunjuk bagian karyanya, dengan kata-kata, isyarat, atau alat bantu komunikasi.</li>
                <li><strong>Penutup.</strong> Membereskan alat bersama sebagai transisi yang jelas.</li>
            </ol>
            <p>Karya anak <strong>tidak dinilai bagus atau jelek</strong>. Terapis juga tidak "membaca kepribadian" dari satu gambar. Karya dipakai sebagai bahan percakapan dan catatan perkembangan dari waktu ke waktu.</p>

            <h2 id="per-kondisi">Penyesuaian untuk Tiap Kebutuhan Anak</h2>
            <ul>
                <li><strong>Anak autis:</strong> jadwal visual, pilihan bahan yang terbatas agar tidak kewalahan, dan perhatian pada sensitivitas tekstur. Kenali dulu ciri <a href="/artikel/autisme-adalah">autisme</a> pada anak Anda.</li>
                <li><strong>Anak ADHD:</strong> tugas pendek dengan langkah jelas, jeda gerak, dan bahan yang memberi umpan balik cepat. Lihat juga pengertian <a href="/artikel/adhd-adalah">ADHD</a>.</li>
                <li><strong>Anak dengan hambatan motorik:</strong> kuas bergagang besar, kertas yang direkatkan ke meja, atau cat jari.</li>
                <li><strong>Anak dengan hambatan penglihatan:</strong> bahan bertekstur, tanah liat, dan kolase timbul. Baca juga tentang <a href="/artikel/disabilitas-sensorik">disabilitas sensorik</a>.</li>
            </ul>

            <h2 id="memilih">Cara Memilih Terapis dan Memulai</h2>
            <ol>
                <li><strong>Konsultasikan dulu ke dokter atau psikolog</strong> yang menangani anak, agar terapi seni menjadi bagian dari rencana yang utuh, bersama <a href="/artikel/macam-macam-terapi-pada-anak">jenis terapi lain</a> seperti terapi wicara dan terapi okupasi.</li>
                <li><strong>Tanyakan latar pendidikan dan pelatihan terapis</strong>, termasuk pengalamannya menangani anak berkebutuhan khusus.</li>
                <li><strong>Minta tujuan terapi yang jelas</strong>, misalnya "anak mampu menunjukkan perasaan marah lewat warna dalam 8 pertemuan", bukan sekadar "anak senang".</li>
                <li><strong>Waspadai klaim menyembuhkan.</strong> Layanan yang menjanjikan autisme atau ADHD "hilang" lewat menggambar tidak didukung penelitian mana pun.</li>
                <li><strong>Minta laporan perkembangan berkala</strong> dan cara terapis berkoordinasi dengan guru serta terapis lain.</li>
            </ol>

            <h2 id="rumah">Yang Bisa Dilakukan Orang Tua di Rumah</h2>
            <p>Kegiatan seni di rumah bukan terapi, tetapi tetap bermanfaat untuk kedekatan dan latihan motorik:</p>
            <ul>
                <li>Sediakan sudut berkarya kecil dengan bahan yang aman dan mudah dibersihkan.</li>
                <li>Ikuti minat anak. Kalau anak suka kereta, mulai dari menggambar kereta.</li>
                <li>Puji usahanya, bukan hasilnya: "Kamu memakai banyak warna biru hari ini."</li>
                <li>Jangan memaksa anak bercerita tentang gambarnya.</li>
                <li>Kegiatan ini juga bisa menjadi waktu tenang bagi orang tua. Tips menjaga diri ada di artikel <a href="/artikel/mengelola-stres-orang-tua-anak-abk">mengelola stres orang tua anak ABK</a>.</li>
            </ul>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi anak berkebutuhan khusus melalui pendidikan inklusi dan layanan terapi di Sleman. Untuk mengetahui layanan yang tersedia dan menyesuaikannya dengan kebutuhan anak Anda, hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a> atau lihat <a href="/program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/seni-dan-kreativitas-untuk-anak-disabilitas">Seni dan Kreativitas untuk Anak Disabilitas</a></h4>
                    <p>Ide kegiatan seni inklusif di rumah dan sekolah.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/macam-macam-terapi-pada-anak">Macam-Macam Terapi pada Anak</a></h4>
                    <p>Mengenal pilihan terapi untuk anak berkebutuhan khusus.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/neurologic-music-therapy-untuk-abk">Neurologic Music Therapy untuk ABK</a></h4>
                    <p>Terapi berbasis musik dan bukti penelitiannya.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#TerapiSeni</a>
            <a href="#">#ArtTherapy</a>
            <a href="#">#Autisme</a>
            <a href="#">#ADHD</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.aata, 'American Art Therapy Association. <strong>About Art Therapy.</strong> arttherapy.org')}</li>
              <li>${ext(L.wei, 'Wei S, Lai AHY, Ho HWH. <strong>The Effectiveness of Art Therapy on Children and Adolescents with ASD: A Systematic Review of RCTs.</strong> Healthcare (Basel). 2025;13(22):2960')}</li>
              <li>${ext(L.martinez, 'Martinez-Verez V, Gil-Ruiz P, Dominguez-Lloria S. <strong>Interventions through Art Therapy and Music Therapy in Autism Spectrum Disorder, ADHD, Language Disorders, and Learning Disabilities in Pediatric-Aged Children: A Systematic Review.</strong> Children (Basel). 2024;11(6):706')}</li>
              <li>${ext(L.bosgraaf, 'Bosgraaf L, Spreen M, Pattiselanno K, van Hooren S. <strong>Art Therapy for Psychosocial Problems in Children and Adolescents: A Systematic Narrative Review.</strong> Front Psychol. 2020;11:584685')}</li>
              <li>${ext(L.zhangAnx, 'Zhang B, Wang J, Abdullah AB. <strong>The effects of art therapy interventions on anxiety in children and adolescents: A meta-analysis.</strong> Clinics (Sao Paulo). 2024;79:100404')}</li>
              <li>${ext(L.zhangDep, 'Zhang B, dkk. <strong>The effect of the art therapy interventions to alleviate depression symptoms among children and adolescents: a systematic review and meta-analysis.</strong> Clinics (Sao Paulo). 2025;80:100683')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat medis atau psikologis</strong>. Terapi seni tidak menyembuhkan autisme, ADHD, atau kondisi perkembangan lain. Konsultasikan kebutuhan anak kepada dokter, psikolog, atau terapis yang berkompeten. Sumber dicek pada 27 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Terapi%20Seni%20untuk%20Anak%20Berkebutuhan%20Khusus%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Terapi%20Seni%20untuk%20Anak%20Berkebutuhan%20Khusus&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

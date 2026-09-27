#!/usr/bin/env node
'use strict';

// One-time generator for artikel/skoliosis-pada-anak-cerebral-palsy.html
// (catchup 2026-09-28, kartu f1lMkTU8). Skeleton copied from scripts/gen-joint-attention-anak-autis-kenapa-penting.js.
// No hero photo on purpose (YMYL, no identifiable child photos; card image candi-plaosan is unrelated to the topic).
// Claims checked 2026-09-28 against PubMed abstracts:
// - PMID 22218299 Persson-Bunke 2012: 666 children 4-18 y; 17% mild + 11% moderate/severe (clinical); GMFCS IV-V 50% risk
//   moderate/severe by 18 y; GMFCS I-II almost no risk; most diagnosed after 8 y; follow-up by GMFCS level and age.
// - PMID 29537343 Hagglund 2018: 962 individuals; scoliosis increased up to 20-25 y; GMFCS V: 75% Cobb >=40 at 20 y;
//   GMFCS I nobody >=40; surveillance from young age into adulthood.
// - PMID 34453468 Willoughby 2022: 292 at mean 21 y; Cobb >10 in 41%; GMFCS V 23.4x vs GMFCS I; Cobb >40 in 13%, almost
//   exclusively GMFCS IV-V; 18.2x more likely with dystonia than spasticity.
// - PMID 9734885 Saito 1998: 37 patients followed 17.3 y; usually starts before 10 y, rapid during growth, continues after
//   growth; >40 before 15 y -> 85% (11/13) >60; <40 at 15 y -> 13% (3/24); risk factors listed.
// - PMID 10972416 Terjesen 2000: 86 patients bracing; progression continued mean 4.2 deg/yr; caregivers satisfied due to sitting stability.
// - PMID 27792122 DiFazio 2017: 26 GMFCS IV-V fusion; CPCHILD +9.8 at 1 y, back to baseline at 2 y.
// - PMID 34296760 DiFazio 2022: 26 fusion among 69; HRQoL +7.6 avg at >=5 y; caregiver burden unchanged.
// - PMID 31306277 Miller 2020: 157 nonambulatory CP after fusion; 36.3% meaningful improvement at 2 y.
// - PMID 21673625 Lonstein 2012: 93 patients; early complications in 58% of patients; no perioperative death.
// - PMID 9183258 Palisano 1997: GMFCS is a five-level classification system.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'skoliosis-pada-anak-cerebral-palsy';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Skoliosis pada Anak Cerebral Palsy: Risiko & Penanganan';
const META_DESC = 'Skoliosis pada anak cerebral palsy: seberapa sering terjadi, siapa yang paling berisiko, tanda awal, dan pilihan penanganannya. Baca panduan lengkapnya.';
const OG_TITLE = 'Skoliosis pada Anak Cerebral Palsy: Risiko, Tanda, dan Penanganan';
const OG_DESC = 'Panduan orang tua dan guru tentang skoliosis pada anak cerebral palsy: data penelitian, faktor risiko, pemantauan rutin, korset, posisi duduk, dan operasi.';
const H1 = 'Skoliosis pada Anak Cerebral Palsy: Risiko, Tanda Awal, dan Penanganannya';
const IMAGE = 'Logo/Logo.webp';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T09:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T09:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  persson: 'https://pubmed.ncbi.nlm.nih.gov/22218299/',
  hagglund: 'https://pubmed.ncbi.nlm.nih.gov/29537343/',
  willoughby: 'https://pubmed.ncbi.nlm.nih.gov/34453468/',
  saito: 'https://pubmed.ncbi.nlm.nih.gov/9734885/',
  terjesen: 'https://pubmed.ncbi.nlm.nih.gov/10972416/',
  difazio17: 'https://pubmed.ncbi.nlm.nih.gov/27792122/',
  difazio22: 'https://pubmed.ncbi.nlm.nih.gov/34296760/',
  miller: 'https://pubmed.ncbi.nlm.nih.gov/31306277/',
  lonstein: 'https://pubmed.ncbi.nlm.nih.gov/21673625/',
  palisano: 'https://pubmed.ncbi.nlm.nih.gov/9183258/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Seberapa sering skoliosis terjadi pada anak cerebral palsy?',
    a: 'Cukup sering. Dalam studi populasi di Swedia atas 666 anak cerebral palsy usia 4 sampai 18 tahun, 17 persen memiliki skoliosis ringan dan 11 persen skoliosis sedang atau berat berdasarkan pemeriksaan klinis. Studi di Australia pada usia dewasa muda menemukan skoliosis (sudut Cobb lebih dari 10 derajat) pada 41 persen peserta.'
  },
  {
    q: 'Anak cerebral palsy mana yang paling berisiko mengalami skoliosis?',
    a: 'Risiko paling tinggi ada pada anak dengan kemampuan motorik kasar paling terbatas, yaitu GMFCS level IV dan V. Anak GMFCS IV atau V memiliki risiko sekitar 50 persen mengalami skoliosis sedang atau berat pada usia 18 tahun, sedangkan anak GMFCS I atau II hampir tidak berisiko. Gangguan gerak tipe distonia juga dikaitkan dengan kurva yang lebih berat.'
  },
  {
    q: 'Apakah skoliosis pada anak cerebral palsy berhenti setelah masa pertumbuhan?',
    a: 'Tidak selalu. Berbeda dengan banyak kasus skoliosis lain, penelitian jangka panjang menemukan kurva tulang belakang pada cerebral palsy bisa terus bertambah setelah pertumbuhan selesai. Karena itu pemantauan dianjurkan dimulai sejak usia dini dan dilanjutkan sampai dewasa.'
  },
  {
    q: 'Apakah korset bisa menyembuhkan skoliosis pada anak cerebral palsy?',
    a: 'Tidak. Studi pada 86 pasien menemukan kurva tetap bertambah rata-rata 4,2 derajat per tahun meski memakai korset. Namun keluarga dan pengasuh merasa terbantu karena korset membuat posisi duduk anak lebih stabil. Keputusan memakai korset ditentukan dokter ortopedi.'
  },
  {
    q: 'Kapan anak cerebral palsy dengan skoliosis perlu dioperasi?',
    a: 'Keputusan operasi selalu ditetapkan dokter ortopedi tulang belakang berdasarkan besar kurva, kecepatan bertambahnya, usia, dan dampaknya pada duduk, pernapasan, serta kenyamanan anak. Operasi fusi tulang belakang adalah tindakan besar dengan risiko komplikasi, sehingga manfaat dan risikonya perlu dibicarakan terbuka dengan tim dokter.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Skoliosis pada Anak Cerebral Palsy', item: CANONICAL }
  ]
};

const blogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: OG_TITLE,
  description: OG_DESC,
  image: { '@type': 'ImageObject', url: IMAGE_URL },
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
  keywords: 'skoliosis pada anak cerebral palsy, skoliosis cerebral palsy, skoliosis neuromuskular, GMFCS, tulang belakang bengkok anak CP',
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
    <meta name="keywords" content="skoliosis pada anak cerebral palsy, skoliosis cerebral palsy, skoliosis neuromuskular, GMFCS, YUKA">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${CANONICAL}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${CANONICAL}">
    <meta property="og:title" content="${OG_TITLE}">
    <meta property="og:description" content="${OG_DESC}">
    <meta property="og:image" content="${IMAGE_URL}">
    <meta property="og:image:alt" content="Logo YUKA, Yayasan Ukhuwah Kaffah Amanatullah">
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
    ${STYLE}
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
                <span class="current">Skoliosis pada Anak Cerebral Palsy</span>
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

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> skoliosis pada anak cerebral palsy adalah kelengkungan tulang belakang ke samping yang muncul akibat gangguan kendali otot dan postur, bukan karena posisi duduk yang "salah". Risikonya sangat bergantung pada kemampuan motorik anak: anak yang tidak bisa berjalan (GMFCS level IV dan V) memiliki risiko sekitar 50 persen mengalami skoliosis sedang atau berat sebelum usia 18 tahun, sedangkan anak yang berjalan mandiri hampir tidak berisiko. Kurvanya bisa terus bertambah bahkan setelah masa pertumbuhan, sehingga pemeriksaan rutin sejak dini adalah langkah terpenting.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah rangkuman informasi untuk orang tua, guru, dan pendamping, <strong>bukan alat diagnosis dan bukan saran medis</strong>. Diagnosis skoliosis dan keputusan penanganannya, termasuk korset dan operasi, hanya bisa ditetapkan oleh dokter spesialis ortopedi atau rehabilitasi medik yang memeriksa anak secara langsung.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu skoliosis pada anak cerebral palsy?</a></li>
                    <li><a href="#seberapa-sering">Seberapa sering terjadi?</a></li>
                    <li><a href="#faktor-risiko">Siapa yang paling berisiko?</a></li>
                    <li><a href="#perjalanan">Bagaimana perjalanan skoliosisnya?</a></li>
                    <li><a href="#tanda">Tanda awal yang bisa diamati orang tua dan guru</a></li>
                    <li><a href="#pemantauan">Pemantauan rutin: kapan dan bagaimana</a></li>
                    <li><a href="#penanganan">Pilihan penanganan</a></li>
                    <li><a href="#sehari-hari">Dukungan sehari-hari di rumah dan sekolah</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Skoliosis pada Anak Cerebral Palsy?</h2>
            <p>Skoliosis adalah kondisi ketika tulang belakang melengkung ke samping sehingga dari belakang tampak seperti huruf C atau S. Besarnya lengkungan diukur dari foto rontgen dengan <strong>sudut Cobb</strong>. Dalam penelitian cerebral palsy, skoliosis umumnya didefinisikan sebagai sudut Cobb lebih dari 10 derajat, dan kurva di atas 40 derajat dianggap berat (${ext(L.willoughby, 'Willoughby dkk., 2022')}).</p>
            <p><a href="/artikel/cerebral-palsy-adalah">Cerebral palsy (CP)</a> adalah gangguan gerak dan postur akibat kerusakan otak yang terjadi saat otak masih berkembang. Pada anak CP, otot di sekitar tulang belakang bisa terlalu kaku (spastik), terlalu lemah, atau bergerak tidak terkendali. Ketidakseimbangan tarikan otot inilah yang membuat tulang belakang pelan-pelan melengkung. Karena penyebabnya adalah gangguan saraf dan otot, dokter menyebutnya <strong>skoliosis neuromuskular</strong>, berbeda dengan skoliosis idiopatik yang penyebabnya tidak diketahui dan biasa ditemukan pada remaja yang sehat.</p>

            <h2 id="seberapa-sering">Seberapa Sering Skoliosis Terjadi pada Anak CP?</h2>
            <p>Beberapa studi populasi besar memberi gambaran yang cukup jelas:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Studi</th><th>Peserta</th><th>Temuan utama</th></tr>
                </thead>
                <tbody>
                    <tr><td>${ext(L.persson, 'Persson-Bunke dkk., 2012')} (Swedia)</td><td>666 anak CP usia 4 sampai 18 tahun</td><td>17% skoliosis ringan dan 11% skoliosis sedang atau berat berdasarkan pemeriksaan klinis; sebagian besar terdiagnosis setelah usia 8 tahun</td></tr>
                    <tr><td>${ext(L.hagglund, 'Hägglund dkk., 2018')} (Swedia)</td><td>962 individu CP yang dipantau sejak kecil</td><td>Jumlah penderita skoliosis terus bertambah sampai usia 20 sampai 25 tahun</td></tr>
                    <tr><td>${ext(L.willoughby, 'Willoughby dkk., 2022')} (Australia)</td><td>292 dewasa muda CP, rata-rata usia 21 tahun</td><td>41% mengalami skoliosis; 13% memiliki kurva berat di atas 40 derajat</td></tr>
                </tbody>
            </table>
            </div>
            <p>Angkanya berbeda antarstudi karena usia peserta dan definisi skoliosis yang dipakai tidak sama. Pesan utamanya tetap sama: skoliosis adalah salah satu masalah ortopedi yang paling sering menyertai cerebral palsy, dan jumlahnya meningkat seiring bertambahnya usia.</p>

            <h2 id="faktor-risiko">Siapa yang Paling Berisiko?</h2>
            <h3>1. Tingkat kemampuan motorik kasar (GMFCS)</h3>
            <p>Faktor terkuat adalah tingkat kemampuan motorik kasar anak, yang diukur dengan <strong>GMFCS</strong> (<em>Gross Motor Function Classification System</em>), sistem klasifikasi lima level yang dikembangkan khusus untuk anak cerebral palsy (${ext(L.palisano, 'Palisano dkk., 1997')}). Level I berarti anak bisa berjalan tanpa keterbatasan berarti, sedangkan level V berarti anak sangat bergantung pada orang lain untuk berpindah dan duduk.</p>
            <ul>
                <li>Anak GMFCS IV atau V memiliki risiko sekitar <strong>50 persen</strong> mengalami skoliosis sedang atau berat pada usia 18 tahun, sementara anak GMFCS I atau II <strong>hampir tidak berisiko</strong> (${ext(L.persson, 'Persson-Bunke dkk., 2012')}).</li>
                <li>Pada kelompok GMFCS V, <strong>75 persen</strong> sudah memiliki kurva 40 derajat atau lebih pada usia 20 tahun. Tidak satu pun peserta GMFCS I mencapai kurva sebesar itu (${ext(L.hagglund, 'Hägglund dkk., 2018')}).</li>
                <li>Individu GMFCS V <strong>23,4 kali</strong> lebih mungkin mengalami skoliosis dibanding GMFCS I, dan kurva berat hampir hanya ditemukan pada GMFCS IV dan V (${ext(L.willoughby, 'Willoughby dkk., 2022')}).</li>
            </ul>
            <h3>2. Jenis gangguan gerak</h3>
            <p>Studi yang sama menemukan kurva berat <strong>18,2 kali</strong> lebih mungkin terjadi pada individu dengan distonia (gerakan dan postur yang terpelintir tidak terkendali) dibanding tipe spastik (${ext(L.willoughby, 'Willoughby dkk., 2022')}). Kemampuan tangan (MACS) yang lebih terbatas juga berkaitan dengan skoliosis.</p>
            <h3>3. Usia dan besar kurva saat masih tumbuh</h3>
            <p>Penelitian jangka panjang Saito dkk. mencatat faktor risiko bertambah beratnya skoliosis pada CP spastik: kurva sudah mencapai 40 derajat sebelum usia 15 tahun, keterlibatan seluruh tubuh, anak yang lebih banyak berbaring, dan kurva di area peralihan dada dan pinggang (torakolumbal) (${ext(L.saito, 'Saito dkk., 1998')}).</p>

            <h2 id="perjalanan">Bagaimana Perjalanan Skoliosis pada Anak CP?</h2>
            <p>Studi Saito mengikuti 37 pasien CP spastik berat rata-rata selama 17 tahun. Hasilnya, skoliosis <strong>biasanya mulai sebelum usia 10 tahun</strong>, bertambah cepat selama masa pertumbuhan, dan pada banyak pasien <strong>terus bertambah setelah pertumbuhan selesai</strong>. Dari 13 pasien yang kurvanya lebih dari 40 derajat sebelum usia 15 tahun, 11 orang (85 persen) akhirnya mencapai lebih dari 60 derajat. Sebaliknya, hanya 3 dari 24 pasien (13 persen) dengan kurva di bawah 40 derajat pada usia 15 tahun yang berkembang sejauh itu (${ext(L.saito, 'Saito dkk., 1998')}).</p>
            <p>Inilah perbedaan penting dengan skoliosis pada remaja yang sehat. Orang tua anak CP tidak bisa berasumsi kurvanya akan "berhenti sendiri" setelah anak berhenti tumbuh. Kurva yang besar dapat mengganggu keseimbangan duduk, menimbulkan nyeri, membuat panggul miring, dan menekan rongga dada.</p>

            <h2 id="tanda">Tanda Awal yang Bisa Diamati Orang Tua dan Guru</h2>
            <p>Karena anak CP sering belum bisa menyampaikan keluhan dengan jelas, pengamatan orang di sekitarnya sangat berharga. Perhatikan hal-hal berikut:</p>
            <ul>
                <li>Anak <strong>selalu miring ke satu sisi</strong> saat duduk, di kursi roda maupun di kursi biasa, dan perlu terus dibetulkan posisinya.</li>
                <li>Bahu atau pinggang tampak <strong>tidak sama tinggi</strong>, atau satu sisi punggung tampak lebih menonjol saat anak dibungkukkan.</li>
                <li>Anak mulai <strong>sulit duduk lama</strong>, lebih cepat lelah, atau tampak tidak nyaman di posisi yang sebelumnya baik-baik saja.</li>
                <li>Satu sisi pinggul lebih sering tertekan, atau muncul kemerahan kulit di area bokong dan punggung.</li>
                <li>Pakaian atau sabuk kursi roda terasa tidak lagi pas di satu sisi.</li>
            </ul>
            <div class="info-box">
                <p style="margin-bottom:0;"><strong>Penting:</strong> tanda di atas bukan diagnosis. Anak bisa miring karena banyak sebab lain, misalnya masalah panggul atau kursi yang tidak sesuai. Catat apa yang Anda lihat, bila perlu foto punggung anak dari belakang untuk dokumentasi pribadi, lalu sampaikan ke dokter saat kontrol.</p>
            </div>

            <h2 id="pemantauan">Pemantauan Rutin: Kapan dan Bagaimana?</h2>
            <p>Para peneliti dari program pemantauan CP di Swedia menyimpulkan bahwa pemantauan skoliosis sebaiknya <strong>disesuaikan dengan usia dan level GMFCS</strong>, <strong>dimulai sejak usia muda</strong>, dan <strong>dilanjutkan sampai dewasa</strong> (${ext(L.hagglund, 'Hägglund dkk., 2018')}). Program tersebut memakai pemeriksaan klinis tahunan untuk semua anak CP, lalu foto rontgen untuk anak yang tampak memiliki skoliosis sedang atau berat.</p>
            <p>Studi di Australia memberi rekomendasi serupa: <strong>semua anak CP sebaiknya diperiksa klinis</strong>, sedangkan pemantauan dengan rontgen difokuskan pada anak GMFCS IV dan V yang risikonya paling tinggi (${ext(L.willoughby, 'Willoughby dkk., 2022')}).</p>
            <p>Dalam praktik, pemeriksaan tulang belakang biasanya dilakukan bersamaan dengan kontrol rutin ke dokter rehabilitasi medik atau ortopedi, yang juga memantau panggul dan kekakuan sendi. Tanyakan kepada dokter anak Anda seberapa sering pemeriksaan perlu dilakukan sesuai kondisinya.</p>

            <h2 id="penanganan">Pilihan Penanganan</h2>
            <p>Tujuan penanganan skoliosis pada anak CP bukan sekadar meluruskan tulang belakang, melainkan menjaga anak tetap bisa <strong>duduk nyaman dan stabil</strong>, bernapas dengan baik, dan menjalani aktivitas sehari-hari. Pilihannya ditentukan dokter berdasarkan besar kurva, usia, dan kondisi umum anak.</p>
            <h3>1. Pengaturan posisi dan kursi (seating)</h3>
            <p>Kursi atau kursi roda yang disesuaikan dengan bantalan samping, sabuk panggul, dan sandaran yang tepat membantu anak duduk tegak dengan lebih sedikit usaha. Terapis okupasi dan fisioterapis biasanya terlibat menilai kebutuhan ini. Pelajari lebih lanjut peran <a href="/artikel/terapi-okupasi">terapi okupasi</a> dan <a href="/artikel/macam-macam-terapi-pada-anak">macam-macam terapi pada anak</a>.</p>
            <h3>2. Korset (brace)</h3>
            <p>Korset dapat membuat posisi duduk lebih stabil, tetapi bukti menunjukkan korset <strong>tidak menghentikan</strong> bertambahnya kurva pada anak CP berat. Studi pada 86 pasien CP spastik kuadriplegia yang memakai korset menemukan kurva tetap bertambah rata-rata <strong>4,2 derajat per tahun</strong>. Meski begitu, sebagian besar keluarga dan pengasuh merasa puas karena korset membuat anak <strong>lebih stabil saat duduk</strong> sehingga fungsi sehari-hari lebih baik (${ext(L.terjesen, 'Terjesen dkk., 2000')}).</p>
            <h3>3. Operasi fusi tulang belakang</h3>
            <p>Untuk kurva yang besar dan terus bertambah, dokter ortopedi tulang belakang dapat mempertimbangkan operasi fusi, yaitu menyatukan ruas tulang belakang dengan batang dan sekrup logam. Saito dkk. menilai pasien dengan faktor risiko progresi mungkin mendapat manfaat dari operasi yang lebih awal, sebelum kurvanya menjadi sangat berat (${ext(L.saito, 'Saito dkk., 1998')}).</p>
            <p>Apa kata penelitian tentang hasilnya?</p>
            <ul>
                <li>Dalam studi 5 tahun pada anak CP GMFCS IV dan V, kualitas hidup terkait kesehatan membaik rata-rata <strong>7,6 poin</strong> setelah operasi panggul atau tulang belakang, terutama dalam hal posisi, pemindahan, kenyamanan, dan kesehatan. Namun <strong>beban pengasuh tidak berubah</strong> karena anak tetap membutuhkan bantuan penuh (${ext(L.difazio22, 'DiFazio dkk., 2022')}).</li>
                <li>Studi multisenter pada 157 anak CP yang tidak bisa berjalan menemukan <strong>36,3 persen</strong> mengalami perbaikan kualitas hidup yang bermakna dua tahun setelah operasi (${ext(L.miller, 'Miller dkk., 2020')}). Artinya tidak semua anak merasakan manfaat yang sama besar.</li>
                <li>Operasi ini adalah tindakan besar. Dalam satu seri 93 pasien, komplikasi dini terjadi pada <strong>58 persen</strong> pasien, meski tidak ada kematian atau komplikasi saraf selama operasi (${ext(L.lonstein, 'Lonstein dkk., 2012')}).</li>
            </ul>
            <p>Karena itu keputusan operasi perlu dibicarakan terbuka bersama tim dokter: apa tujuan yang realistis untuk anak, apa risikonya, dan bagaimana persiapan serta pemulihannya.</p>

            <h2 id="sehari-hari">Dukungan Sehari-hari di Rumah dan Sekolah</h2>
            <ul>
                <li><strong>Variasikan posisi.</strong> Hindari anak berada di satu posisi terlalu lama. Selingi duduk dengan posisi lain yang dianjurkan terapis.</li>
                <li><strong>Periksa kursi secara berkala.</strong> Anak terus tumbuh, sehingga kursi dan bantalan yang dulu pas bisa menjadi tidak sesuai.</li>
                <li><strong>Jaga kulit.</strong> Perhatikan area yang sering tertekan dan laporkan kemerahan yang tidak hilang.</li>
                <li><strong>Libatkan guru.</strong> Di kelas inklusi, guru dapat membantu mengatur posisi duduk, meja dengan ketinggian yang sesuai, dan jeda untuk berganti posisi.</li>
                <li><strong>Simpan catatan.</strong> Catat hasil pemeriksaan, sudut Cobb bila ada, dan perubahan yang Anda amati. Catatan ini memudahkan dokter menilai perkembangan kurva.</li>
            </ul>
            <p>Anak dengan hambatan gerak termasuk kelompok <a href="/artikel/tuna-daksa-adalah">tunadaksa</a>, dan hak mereka atas pendidikan dan layanan dibahas di artikel <a href="/artikel/disabilitas-adalah">disabilitas</a>. Bagi yang membutuhkan informasi administrasi layanan kesehatan, lihat juga <a href="/artikel/kode-icd-10-cerebral-palsy">kode ICD-10 cerebral palsy</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a> melalui pendidikan inklusi dan layanan terapi di Sleman. YUKA tidak menangani skoliosis secara medis; untuk pemeriksaan tulang belakang, silakan berkonsultasi ke dokter ortopedi atau rehabilitasi medik. Untuk mengetahui layanan pendidikan dan terapi yang tersedia, hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a> atau lihat <a href="/program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/cerebral-palsy-adalah">Cerebral Palsy Adalah</a></h4>
                    <p>Pengertian, jenis, dan penyebab cerebral palsy.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/terapi-okupasi">Terapi Okupasi</a></h4>
                    <p>Peran terapi okupasi untuk kemandirian anak.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/tuna-daksa-adalah">Tunadaksa Adalah</a></h4>
                    <p>Mengenal anak dengan hambatan fisik dan gerak.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#CerebralPalsy</a>
            <a href="#">#Skoliosis</a>
            <a href="#">#Tunadaksa</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.persson, 'Persson-Bunke M, Hägglund G, dkk. <strong>Scoliosis in a total population of children with cerebral palsy.</strong> Spine. 2012;37(12):E708-13')}</li>
              <li>${ext(L.hagglund, 'Hägglund G, Pettersson K, dkk. <strong>Incidence of scoliosis in cerebral palsy.</strong> Acta Orthop. 2018;89(4):443-447')}</li>
              <li>${ext(L.willoughby, 'Willoughby KL, dkk. <strong>Epidemiology of scoliosis in cerebral palsy: A population-based study at skeletal maturity.</strong> J Paediatr Child Health. 2022;58(2):295-301')}</li>
              <li>${ext(L.saito, 'Saito N, dkk. <strong>Natural history of scoliosis in spastic cerebral palsy.</strong> Lancet. 1998;351(9117):1687-92')}</li>
              <li>${ext(L.terjesen, 'Terjesen T, Lange JE, Steen H. <strong>Treatment of scoliosis with spinal bracing in quadriplegic cerebral palsy.</strong> Dev Med Child Neurol. 2000;42(7):448-54')}</li>
              <li>${ext(L.difazio22, 'DiFazio RL, dkk. <strong>Health-related quality of life and caregiver burden after hip reconstruction and spinal fusion in children with spastic cerebral palsy.</strong> Dev Med Child Neurol. 2022;64(1):80-87')}</li>
              <li>${ext(L.miller, 'Miller DJ, dkk. <strong>Improving Health-related Quality of Life for Patients With Nonambulatory Cerebral Palsy: Who Stands to Gain From Scoliosis Surgery?</strong> J Pediatr Orthop. 2020;40(3):e186-e192')}</li>
              <li>${ext(L.lonstein, 'Lonstein JE, dkk. <strong>Results and complications after spinal fusion for neuromuscular scoliosis in cerebral palsy and static encephalopathy.</strong> Spine. 2012;37(7):583-91')}</li>
              <li>${ext(L.palisano, 'Palisano R, dkk. <strong>Development and reliability of a system to classify gross motor function in children with cerebral palsy.</strong> Dev Med Child Neurol. 1997;39(4):214-23')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat medis</strong>. Diagnosis skoliosis serta keputusan pemakaian korset atau operasi harus ditetapkan oleh dokter spesialis yang memeriksa anak secara langsung. Sumber dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Skoliosis%20pada%20Anak%20Cerebral%20Palsy%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Skoliosis%20pada%20Anak%20Cerebral%20Palsy&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

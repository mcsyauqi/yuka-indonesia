#!/usr/bin/env node
'use strict';

// One-time generator for artikel/cerebral-palsy-athetoid-adalah.html
// (catchup 2026-09-28, kartu EIsgzCFg). Skeleton copied from scripts/gen-skoliosis-pada-anak-cerebral-palsy.js.
// No hero photo on purpose (YMYL, no identifiable child photos; card image candi-plaosan is unrelated to the topic).
// Claims checked 2026-09-28 against PubMed abstracts:
// - PMID 21496597 Przekop & Sanger 2011: athetos = "without fixed position"; Hammond 1871; slow irregular continual movements
//   of distal extremities; Foley 1983 athetoid syndrome (basal ganglia, full-term brain, dysarthria, sparing ... intelligence);
//   "athetoid syndrome" replaced by "dyskinetic cerebral palsy"; causes asphyxia, trauma, perinatal stroke, kernicterus;
//   kernicterus features (extrapyramidal movement disorder, sensorineural hearing loss, impaired upward gaze, enamel dysplasia);
//   aggressive treatment of hyperbilirubinemia -> kernicterus now rare cause.
// - PMID 28816119 Monbaliu 2017: DCP second most common type after spastic; basal ganglia/thalamus lesions; dystonia and
//   choreoathetosis present together most of the time; dystonia often more pronounced; oral drugs limited; ITB and DBS promising.
// - PMID 19465585 Himmelmann 2009 (SCPE): 578 children, 70% term; prevalence 0.08 -> 0.14 per 1000 (1970s -> 1990s);
//   16% walk without aids, 24% with aids, 59% wheelchair; severe learning disability 52%, epilepsy 51%, severe visual 19%, hearing 6%.
// - PMID 17376133 Himmelmann 2007: prevalence 0.27/1000; 48 examined, 39 dystonic, 9 choreo-athetotic; GMFCS IV 10, V 28;
//   38 anarthria; dominant type in term-born AGA children with severe impairments and adverse perinatal events.
// - PMID 23408442 Koy 2013: 20 articles, 68 patients DBS; movement score -23.6%, disability -9.2% at median 12 months; mostly case reports.
// - PMID 11132255 SCPE 2000: CP occurs in 2 to 3 per 1000 live births.
// - PMID 9183258 Palisano 1997: GMFCS five levels.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'cerebral-palsy-athetoid-adalah';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Cerebral Palsy Athetoid Adalah: Ciri, Penyebab, dan Terapi';
const META_DESC = 'Cerebral palsy athetoid adalah CP dengan gerakan menggeliat yang tidak terkendali. Kenali ciri, penyebab, data penelitian, dan terapinya. Baca di sini.';
const OG_TITLE = 'Cerebral Palsy Athetoid Adalah: Ciri, Penyebab, dan Penanganannya';
const OG_DESC = 'Panduan orang tua dan guru tentang cerebral palsy athetoid (diskinetik): ciri gerakan, penyebab, kondisi penyerta, terapi, dan dukungan belajar di sekolah.';
const H1 = 'Cerebral Palsy Athetoid Adalah: Ciri, Penyebab, dan Penanganannya';
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
  przekop: 'https://pubmed.ncbi.nlm.nih.gov/21496597/',
  monbaliu: 'https://pubmed.ncbi.nlm.nih.gov/28816119/',
  himm09: 'https://pubmed.ncbi.nlm.nih.gov/19465585/',
  himm07: 'https://pubmed.ncbi.nlm.nih.gov/17376133/',
  koy: 'https://pubmed.ncbi.nlm.nih.gov/23408442/',
  scpe: 'https://pubmed.ncbi.nlm.nih.gov/11132255/',
  palisano: 'https://pubmed.ncbi.nlm.nih.gov/9183258/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Cerebral palsy athetoid adalah apa?',
    a: 'Cerebral palsy athetoid adalah jenis cerebral palsy yang ditandai gerakan lambat, tidak teratur, dan terus-menerus yang tidak bisa dikendalikan anak, terutama di tangan, kaki, dan wajah. Kini istilah medis yang dipakai adalah cerebral palsy diskinetik, yang mencakup subtipe distonik dan koreoatetotik. Penyebabnya adalah kerusakan pada bagian otak bernama ganglia basalis atau talamus.'
  },
  {
    q: 'Apa bedanya cerebral palsy athetoid dengan cerebral palsy spastik?',
    a: 'Pada cerebral palsy spastik, otot cenderung kaku dan sulit digerakkan. Pada cerebral palsy athetoid atau diskinetik, masalah utamanya adalah gerakan yang muncul tanpa diinginkan dan tonus otot yang berubah-ubah. Cerebral palsy diskinetik adalah jenis kedua terbanyak setelah tipe spastik.'
  },
  {
    q: 'Apakah anak dengan cerebral palsy athetoid pasti mengalami disabilitas intelektual?',
    a: 'Tidak pasti. Definisi klasik sindrom athetoid menyebut kecerdasan sering tidak terdampak, namun data registri Eropa atas 578 anak dengan cerebral palsy diskinetik mencatat 52 persen memiliki disabilitas belajar berat. Kemampuan tiap anak berbeda dan perlu dinilai oleh profesional, apalagi gangguan bicara bisa membuat kemampuan anak terlihat lebih rendah dari sebenarnya.'
  },
  {
    q: 'Apakah penyakit kuning bayi bisa menyebabkan cerebral palsy athetoid?',
    a: 'Kadar bilirubin yang sangat tinggi dan tidak tertangani dapat merusak otak (kernikterus) dan menjadi salah satu penyebab cerebral palsy athetoid. Namun berkat penanganan penyakit kuning bayi yang lebih agresif, kernikterus kini menjadi penyebab yang jarang. Penyebab lain antara lain kekurangan oksigen saat lahir, trauma, dan stroke perinatal.'
  },
  {
    q: 'Apakah cerebral palsy athetoid bisa disembuhkan?',
    a: 'Kerusakan otaknya tidak bertambah parah, tetapi juga tidak bisa dipulihkan. Tujuan penanganan adalah mengurangi dampak gerakan tak terkendali, melatih kemampuan sehari-hari, dan membuka jalur komunikasi. Pilihannya meliputi fisioterapi, terapi okupasi, terapi wicara, alat bantu komunikasi, obat, hingga tindakan seperti baclofen intratekal dan deep brain stimulation yang diputuskan dokter.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Cerebral Palsy Athetoid Adalah', item: CANONICAL }
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
  keywords: 'cerebral palsy athetoid adalah, cerebral palsy athetoid, cerebral palsy diskinetik, athetosis, koreoatetosis, CP athetoid',
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
    <meta name="keywords" content="cerebral palsy athetoid adalah, cerebral palsy athetoid, cerebral palsy diskinetik, athetosis, YUKA">
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
                <span class="current">Cerebral Palsy Athetoid Adalah</span>
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
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> cerebral palsy athetoid adalah jenis cerebral palsy yang ditandai gerakan lambat, menggeliat, dan terus-menerus yang tidak bisa dikendalikan anak, terutama di tangan, kaki, dan wajah. Penyebabnya adalah kerusakan pada ganglia basalis atau talamus, bagian otak yang mengatur kelancaran gerak. Dunia medis kini menyebutnya <strong>cerebral palsy diskinetik</strong>, jenis kedua terbanyak setelah tipe spastik. Anak dengan kondisi ini umumnya butuh dukungan gerak, alat bantu komunikasi, dan kerja sama tim terapi, dokter, keluarga, serta sekolah.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah rangkuman informasi untuk orang tua, guru, dan pendamping, <strong>bukan alat diagnosis dan bukan saran medis</strong>. Diagnosis jenis cerebral palsy dan keputusan penanganannya hanya bisa ditetapkan oleh dokter spesialis anak (neurologi anak) atau rehabilitasi medik yang memeriksa anak secara langsung.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Cerebral palsy athetoid adalah apa?</a></li>
                    <li><a href="#istilah">Dari "athetoid" ke "diskinetik"</a></li>
                    <li><a href="#ciri">Ciri-ciri cerebral palsy athetoid</a></li>
                    <li><a href="#penyebab">Penyebab dan faktor risiko</a></li>
                    <li><a href="#data">Seberapa sering dan seberapa berat?</a></li>
                    <li><a href="#penanganan">Terapi dan penanganan</a></li>
                    <li><a href="#sekolah">Dukungan belajar di rumah dan sekolah</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Cerebral Palsy Athetoid Adalah Apa?</h2>
            <p><a href="/artikel/cerebral-palsy-adalah">Cerebral palsy (CP)</a> adalah gangguan gerak dan postur akibat kerusakan otak yang terjadi ketika otak masih berkembang, dan kerusakannya tidak bertambah parah. CP ditemukan pada sekitar 2 sampai 3 dari setiap 1.000 kelahiran hidup (${ext(L.scpe, 'SCPE, 2000')}).</p>
            <p>Kata <em>athetoid</em> berasal dari <strong>athetosis</strong>. Istilah ini berakar dari bahasa Yunani <em>athetos</em> yang berarti "tanpa posisi tetap", dan pertama kali dipakai oleh Hammond pada 1871 untuk menggambarkan gerakan lambat, tidak teratur, dan terus-menerus pada tangan dan kaki (${ext(L.przekop, 'Przekop dan Sanger, 2011')}). Jadi, cerebral palsy athetoid adalah CP yang gambaran utamanya berupa gerakan menggeliat yang muncul sendiri, bukan kekakuan otot seperti pada tipe spastik.</p>
            <p>Bagi anak, ini berarti tubuhnya sering bergerak ketika ia tidak ingin bergerak, dan gerakan yang ia inginkan (meraih gelas, menunjuk gambar, berbicara) justru sulit dilakukan dengan tepat. Gerakan biasanya makin terlihat ketika anak berusaha keras, gembira, atau cemas.</p>

            <h2 id="istilah">Dari "Athetoid" ke "Diskinetik"</h2>
            <p>Pada 1983, Foley mendefinisikan <strong>sindrom athetoid</strong> sebagai gangguan yang tidak progresif akibat kerusakan ganglia basalis pada otak bayi cukup bulan, dengan gangguan refleks postur, gerakan tak disengaja yang tidak berirama, dan gangguan bicara (disartria). Sekitar satu dekade kemudian, istilah "sindrom athetoid" digantikan oleh <strong>cerebral palsy diskinetik</strong> (${ext(L.przekop, 'Przekop dan Sanger, 2011')}).</p>
            <p>Cerebral palsy diskinetik mencakup dua pola gerak utama:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Pola gerak</th><th>Gambaran</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Distonia</strong></td><td>Otot berkontraksi lama sehingga tubuh terkunci dalam posisi terpelintir atau tidak wajar, dengan tonus otot yang mudah berubah</td></tr>
                    <tr><td><strong>Koreoatetosis</strong></td><td>Gabungan gerakan cepat dan tersentak (korea) dengan gerakan lambat dan menggeliat (athetosis); inilah yang dulu disebut "athetoid"</td></tr>
                </tbody>
            </table>
            </div>
            <p>Dalam praktiknya, kedua pola ini <strong>paling sering muncul bersamaan</strong> pada satu anak, dan distonia sering kali lebih menonjol serta lebih berat dampaknya pada aktivitas sehari-hari (${ext(L.monbaliu, 'Monbaliu dkk., 2017')}). Dalam satu studi populasi di Swedia, dari 48 anak dengan CP diskinetik yang diperiksa, 39 anak tergolong subtipe distonik dan 9 anak subtipe koreoatetotik (${ext(L.himm07, 'Himmelmann dkk., 2007')}). Karena itu, bila dokter menulis "CP diskinetik" atau "CP distonik" di hasil pemeriksaan, orang tua tidak perlu bingung: kondisinya masih berada dalam keluarga yang sama dengan CP athetoid.</p>

            <h2 id="ciri">Ciri-Ciri Cerebral Palsy Athetoid</h2>
            <p>Setiap anak tampil berbeda, tetapi tanda yang sering dilaporkan dokter dan terapis meliputi:</p>
            <ul>
                <li><strong>Gerakan menggeliat yang tidak disengaja</strong> pada jari, tangan, lengan, kaki, atau wajah, sehingga anak sulit memegang benda dengan stabil.</li>
                <li><strong>Tonus otot berubah-ubah</strong>: tubuh bisa terasa lemas saat bayi, lalu mendadak kaku ketika anak mencoba bergerak.</li>
                <li><strong>Kesulitan menjaga postur</strong> saat duduk atau berdiri, karena gerakan tak disengaja terus menggeser posisi tubuh.</li>
                <li><strong>Gangguan bicara dan menelan.</strong> Otot wajah, lidah, dan tenggorokan ikut terdampak sehingga bicara tidak jelas (disartria) atau bahkan tidak bisa bicara sama sekali (anartria), dan anak bisa mudah tersedak atau mengeces.</li>
                <li><strong>Gerakan memburuk saat emosi atau lelah</strong>, dan biasanya mereda ketika anak tidur.</li>
            </ul>
            <p>Gangguan bicara ini sangat penting dipahami guru dan orang tua. Dalam studi Swedia tadi, <strong>38 dari 48 anak</strong> dengan CP diskinetik mengalami anartria (${ext(L.himm07, 'Himmelmann dkk., 2007')}). Anak yang tidak bisa bicara belum tentu tidak paham. Ia mungkin mengerti banyak hal tetapi tidak punya jalur untuk mengungkapkannya.</p>
            <div class="info-box">
                <p style="margin-bottom:0;"><strong>Penting:</strong> gerakan tak disengaja pada bayi dan anak bisa punya banyak penyebab lain. Jangan menyimpulkan sendiri. Bila Anda melihat perkembangan <a href="/artikel/motorik-kasar-adalah">motorik kasar</a> yang terlambat disertai gerakan yang aneh, catat dan rekam videonya, lalu bawa ke dokter anak.</p>
            </div>

            <h2 id="penyebab">Penyebab dan Faktor Risiko</h2>
            <p>CP diskinetik umumnya disebabkan oleh <strong>lesi yang tidak progresif pada ganglia basalis, talamus, atau keduanya</strong> (${ext(L.monbaliu, 'Monbaliu dkk., 2017')}). Bagian otak ini berperan mengatur agar gerakan berjalan halus dan sesuai keinginan. Kerusakannya bisa terjadi melalui beberapa mekanisme, antara lain kekurangan oksigen (asfiksia) sekitar waktu lahir, trauma, stroke perinatal, dan kernikterus (${ext(L.przekop, 'Przekop dan Sanger, 2011')}).</p>
            <h3>Kernikterus: kaitan dengan penyakit kuning bayi</h3>
            <p>Kernikterus adalah kerusakan otak akibat kadar bilirubin yang sangat tinggi pada bayi baru lahir. Gambaran klinisnya mencakup gangguan gerak, gangguan pendengaran sensorineural, kesulitan melirik ke atas, dan kelainan email gigi. Dulu kernikterus adalah penyebab umum athetosis. Berkat penanganan penyakit kuning bayi yang lebih agresif, kernikterus kini menjadi penyebab yang <strong>jarang</strong> (${ext(L.przekop, 'Przekop dan Sanger, 2011')}). Pesannya bagi orang tua sederhana: bayi kuning perlu diperiksakan ke tenaga kesehatan, bukan hanya dijemur.</p>
            <h3>Bayi cukup bulan dengan kejadian berat saat lahir</h3>
            <p>Berbeda dengan beberapa jenis CP lain yang lebih banyak dialami bayi prematur, CP diskinetik sering ditemukan pada bayi cukup bulan. Data registri Eropa mencatat <strong>70 persen</strong> dari 578 anak dengan CP diskinetik lahir cukup bulan, dan mereka lebih sering mengalami kejadian perinatal berat seperti skor Apgar rendah dan kejang di tiga hari pertama (${ext(L.himm09, 'Himmelmann dkk., 2009')}). Studi Swedia juga menyimpulkan bahwa CP diskinetik adalah tipe dominan pada anak cukup bulan dengan gangguan berat yang pernah mengalami kejadian buruk saat persalinan (${ext(L.himm07, 'Himmelmann dkk., 2007')}).</p>

            <h2 id="data">Seberapa Sering dan Seberapa Berat?</h2>
            <p>CP diskinetik adalah <strong>jenis CP kedua terbanyak</strong> setelah tipe spastik (${ext(L.monbaliu, 'Monbaliu dkk., 2017')}). Data penelitian berikut membantu memberi gambaran, dengan catatan semuanya berasal dari Eropa dan belum tentu sama persis dengan kondisi di Indonesia:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>Temuan</th><th>Sumber</th></tr>
                </thead>
                <tbody>
                    <tr><td>Prevalensi (Eropa)</td><td>Naik dari 0,08 per 1.000 kelahiran hidup (1970-an) menjadi 0,14 per 1.000 (1990-an)</td><td>${ext(L.himm09, 'Himmelmann dkk., 2009')}</td></tr>
                    <tr><td>Prevalensi (Swedia, lahir 1991-1998)</td><td>0,27 per 1.000 kelahiran hidup</td><td>${ext(L.himm07, 'Himmelmann dkk., 2007')}</td></tr>
                    <tr><td>Kemampuan berjalan</td><td>16% berjalan tanpa alat bantu, 24% dengan alat bantu, 59% memerlukan kursi roda</td><td>${ext(L.himm09, 'Himmelmann dkk., 2009')}</td></tr>
                    <tr><td>Tingkat GMFCS (48 anak Swedia)</td><td>10 anak level IV dan 28 anak level V</td><td>${ext(L.himm07, 'Himmelmann dkk., 2007')}</td></tr>
                    <tr><td>Kondisi penyerta</td><td>Disabilitas belajar berat 52%, epilepsi 51%, gangguan penglihatan berat 19%, gangguan pendengaran berat 6%</td><td>${ext(L.himm09, 'Himmelmann dkk., 2009')}</td></tr>
                </tbody>
            </table>
            </div>
            <p>GMFCS (<em>Gross Motor Function Classification System</em>) adalah sistem lima level untuk menggambarkan kemampuan motorik kasar anak CP, dari level I (berjalan tanpa keterbatasan berarti) sampai level V (sangat bergantung pada orang lain) (${ext(L.palisano, 'Palisano dkk., 1997')}).</p>
            <p>Angka disabilitas belajar di atas perlu dibaca hati-hati. Definisi klasik sindrom athetoid justru menyebut kecerdasan sering tidak terdampak (${ext(L.przekop, 'Przekop dan Sanger, 2011')}), sementara data registri modern menunjukkan banyak anak memiliki hambatan belajar berat. Kedua hal ini bisa sama-sama benar karena CP diskinetik sangat beragam. Yang pasti, anak yang tidak bisa bicara dan sulit menggerakkan tangan sering <strong>diremehkan kemampuannya</strong>, sehingga penilaian kognitif sebaiknya memakai cara yang tidak menuntut bicara atau gerakan halus.</p>

            <h2 id="penanganan">Terapi dan Penanganan</h2>
            <p>Kerusakan otak pada CP tidak bisa dipulihkan, tetapi dampaknya bisa dikurangi. Penanganan CP diskinetik umumnya <strong>multidisiplin</strong> (${ext(L.monbaliu, 'Monbaliu dkk., 2017')}), melibatkan beberapa bidang berikut.</p>
            <h3>1. Fisioterapi</h3>
            <p>Fisioterapis melatih kontrol postur, keseimbangan duduk, dan cara berpindah yang aman, serta menyarankan alat bantu seperti kursi dengan penyangga atau alat bantu berdiri.</p>
            <h3>2. Terapi okupasi</h3>
            <p><a href="/artikel/terapi-okupasi">Terapi okupasi</a> membantu anak melakukan aktivitas sehari-hari seperti makan, berpakaian, dan menulis dengan strategi dan alat yang disesuaikan, misalnya sendok bergagang tebal, penyangga lengan, atau papan tulis miring.</p>
            <h3>3. Terapi wicara dan komunikasi alternatif</h3>
            <p>Karena gangguan bicara sangat sering terjadi, terapi wicara menjadi kunci, termasuk untuk masalah menelan. Bila bicara belum memungkinkan, anak bisa diperkenalkan pada <a href="/artikel/aplikasi-komunikasi-aac-terbaik-untuk-anak">komunikasi augmentatif dan alternatif (AAC)</a>, seperti papan gambar, penunjuk mata, atau perangkat bersuara. Bedanya dengan terapi okupasi dijelaskan di artikel <a href="/artikel/perbedaan-terapi-okupasi-dan-terapi-wicara">perbedaan terapi okupasi dan terapi wicara</a>.</p>
            <h3>4. Obat dan tindakan medis</h3>
            <p>Obat minum dapat dicoba untuk meredakan gerakan tak terkendali, tetapi manfaatnya terbatas karena efek samping dan bukti efektivitasnya masih sedikit. Tindakan <strong>neuromodulasi</strong> seperti baclofen intratekal (obat yang dialirkan langsung ke cairan sumsum tulang belakang melalui pompa) dan <strong>deep brain stimulation</strong> (DBS) disebut sebagai pilihan yang menjanjikan (${ext(L.monbaliu, 'Monbaliu dkk., 2017')}).</p>
            <p>Sebuah meta-analisis atas 20 publikasi yang mencakup 68 pasien CP diskinetik yang menjalani DBS menemukan skor gerakan distonia membaik rata-rata <strong>23,6 persen</strong> dan skor disabilitas membaik <strong>9,2 persen</strong> pada pemantauan median 12 bulan. Sebagian besar datanya berasal dari laporan kasus, sehingga peneliti menyarankan studi yang lebih besar (${ext(L.koy, 'Koy dkk., 2013')}). Artinya DBS bisa membantu sebagian anak, tetapi bukan penyembuh, dan keputusannya sepenuhnya di tangan tim dokter spesialis.</p>
            <p>Anak CP juga perlu dipantau untuk masalah ortopedi seperti kelengkungan tulang belakang. Baca <a href="/artikel/skoliosis-pada-anak-cerebral-palsy">skoliosis pada anak cerebral palsy</a> untuk penjelasannya, dan <a href="/artikel/macam-macam-terapi-pada-anak">macam-macam terapi pada anak</a> untuk gambaran layanan terapi lainnya.</p>

            <h2 id="sekolah">Dukungan Belajar di Rumah dan Sekolah</h2>
            <p>Anak dengan CP athetoid berhak mendapat pendidikan yang sesuai kebutuhannya. Beberapa hal praktis yang bisa dilakukan keluarga dan guru:</p>
            <ul>
                <li><strong>Utamakan komunikasi.</strong> Sepakati cara anak menjawab "ya" dan "tidak" (misalnya kedipan, arah pandang, atau kartu), lalu pakai cara yang sama di rumah dan di kelas.</li>
                <li><strong>Beri waktu lebih.</strong> Gerakan dan bicara butuh usaha besar. Tunggu jawaban anak dan jangan menyelesaikan kalimatnya terburu-buru.</li>
                <li><strong>Stabilkan posisi dulu.</strong> Anak yang duduk stabil dengan kaki menapak dan tubuh tersangga lebih mudah mengendalikan tangannya.</li>
                <li><strong>Sesuaikan alat tulis dan tugas.</strong> Pertimbangkan papan miring, alat tulis tebal, keyboard dengan pelindung tombol, atau menjawab lisan dan lewat pilihan gambar alih-alih menulis panjang.</li>
                <li><strong>Kelola suasana.</strong> Karena gerakan memburuk saat anak tegang, suasana kelas yang tenang dan tidak tergesa-gesa membantu anak tampil lebih baik.</li>
            </ul>
            <p>Anak dengan hambatan gerak termasuk kelompok <a href="/artikel/tuna-daksa-adalah">tunadaksa</a>, dan hak mereka atas pendidikan serta layanan dibahas di artikel <a href="/artikel/disabilitas-adalah">disabilitas</a>. Untuk urusan administrasi layanan kesehatan, lihat juga <a href="/artikel/kode-icd-10-cerebral-palsy">kode ICD-10 cerebral palsy</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a> melalui pendidikan inklusi dan layanan terapi di Sleman. YUKA tidak mendiagnosis atau mengobati cerebral palsy secara medis; untuk itu silakan berkonsultasi ke dokter spesialis anak atau rehabilitasi medik. Untuk mengetahui layanan pendidikan dan terapi yang tersedia, hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a> atau lihat <a href="/program">program YUKA</a>.</p>
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
                    <h4><a href="/artikel/skoliosis-pada-anak-cerebral-palsy">Skoliosis pada Anak Cerebral Palsy</a></h4>
                    <p>Risiko, tanda awal, dan penanganannya.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/aplikasi-komunikasi-aac-terbaik-untuk-anak">Aplikasi Komunikasi AAC untuk Anak</a></h4>
                    <p>Pilihan alat bantu komunikasi bagi anak yang sulit bicara.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#CerebralPalsy</a>
            <a href="#">#CPAthetoid</a>
            <a href="#">#Tunadaksa</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.monbaliu, 'Monbaliu E, Himmelmann K, dkk. <strong>Clinical presentation and management of dyskinetic cerebral palsy.</strong> Lancet Neurol. 2017;16(9):741-749')}</li>
              <li>${ext(L.przekop, 'Przekop A, Sanger TD. <strong>Birth-related syndromes of athetosis and kernicterus.</strong> Handb Clin Neurol. 2011;100:387-95')}</li>
              <li>${ext(L.himm09, 'Himmelmann K, McManus V, dkk. <strong>Dyskinetic cerebral palsy in Europe: trends in prevalence and severity.</strong> Arch Dis Child. 2009;94(12):921-6')}</li>
              <li>${ext(L.himm07, 'Himmelmann K, Hagberg G, dkk. <strong>Dyskinetic cerebral palsy: a population-based study of children born between 1991 and 1998.</strong> Dev Med Child Neurol. 2007;49(4):246-51')}</li>
              <li>${ext(L.koy, 'Koy A, Hellmich M, dkk. <strong>Effects of deep brain stimulation in dyskinetic cerebral palsy: a meta-analysis.</strong> Mov Disord. 2013;28(5):647-54')}</li>
              <li>${ext(L.scpe, 'Surveillance of Cerebral Palsy in Europe. <strong>Surveillance of cerebral palsy in Europe: a collaboration of cerebral palsy surveys and registers.</strong> Dev Med Child Neurol. 2000;42(12):816-24')}</li>
              <li>${ext(L.palisano, 'Palisano R, dkk. <strong>Development and reliability of a system to classify gross motor function in children with cerebral palsy.</strong> Dev Med Child Neurol. 1997;39(4):214-23')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat medis</strong>. Diagnosis jenis cerebral palsy serta keputusan obat, baclofen intratekal, atau deep brain stimulation harus ditetapkan oleh dokter spesialis yang memeriksa anak secara langsung. Sumber dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Cerebral%20Palsy%20Athetoid%20Adalah%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Cerebral%20Palsy%20Athetoid%20Adalah&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

#!/usr/bin/env node
'use strict';

// One-time generator for artikel/joint-attention-anak-autis-kenapa-penting.html
// (catchup 2026-09-28, kartu RBSlRH8s). Canonical shell via scripts/lib/article-shell.js.
// Skeleton copied from scripts/gen-gangguan-makan-anak-abk.js. No hero photo on purpose
// (YMYL autism: no identifiable child photos; no licensed real photo fits the concept).
// Claims checked 2026-09-28 against PubMed abstracts / official pages:
// - PMID 12639329 Charman 2003: JA impairments among earliest signs; JA at 20 mo predicted language gains and lower
//   social/communication symptoms at 42 mo; triadic gaze switching predicted, dyadic eye contact did not; unrelated to repetitive symptoms.
// - PMID 28922520 Mundy 2018: JA begins to develop by 5 months; whole-brain system; continuity with later theory of mind in ASD.
// - PMID 27059941 Bottema-Beutel 2016: 71 reports, 605 effect sizes, 1,859 ASD + 1,835 TD; JA-language association stronger in ASD, RJA strongest.
// - PMID 16712638 Kasari 2006: 58 children 3-4 y, 30 min daily 5-6 weeks; JA group more showing, RJA, child-initiated JA with mother.
// - PMID 18229990 Kasari 2008: 12 months later, expressive language gains greater; lowest-language children benefited most from JA.
// - PMID 26952136 Murza 2016: 15 randomized studies, all comparisons significant, strong support for explicit JA interventions, unclear who responds to which.
// - PMID 31843864 Hyman 2020 AAP: screening at 18 and 24 months; ASD diagnosable as young as 18 months.
// - CDC signs and symptoms: no sharing interests by 15 months, no pointing to show by 18 months, avoids eye contact.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'joint-attention-anak-autis-kenapa-penting';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Joint Attention Anak Autis: Kenapa Penting & Cara Melatih';
const META_DESC = 'Joint attention anak autis kenapa penting? Pahami kaitannya dengan bahasa, tanda yang perlu diwaspadai, dan cara melatihnya di rumah. Baca selengkapnya.';
const OG_TITLE = 'Joint Attention Anak Autis: Kenapa Penting dan Cara Melatihnya';
const OG_DESC = 'Apa itu joint attention, kenapa kemampuan berbagi perhatian ini penting bagi anak autis, apa kata penelitian, dan latihan sederhana yang bisa dimulai orang tua.';
const H1 = 'Joint Attention Anak Autis: Kenapa Penting dan Bagaimana Melatihnya';
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
  charman: 'https://pubmed.ncbi.nlm.nih.gov/12639329/',
  mundy: 'https://pubmed.ncbi.nlm.nih.gov/28922520/',
  bottema: 'https://pubmed.ncbi.nlm.nih.gov/27059941/',
  kasari06: 'https://pubmed.ncbi.nlm.nih.gov/16712638/',
  kasari08: 'https://pubmed.ncbi.nlm.nih.gov/18229990/',
  murza: 'https://pubmed.ncbi.nlm.nih.gov/26952136/',
  hyman: 'https://pubmed.ncbi.nlm.nih.gov/31843864/',
  cdc: 'https://www.cdc.gov/autism/signs-symptoms/index.html'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa itu joint attention pada anak?',
    a: 'Joint attention adalah kemampuan anak berbagi perhatian dengan orang lain terhadap benda atau kejadian yang sama, misalnya menoleh ke arah yang ditunjuk orang tua, lalu melihat kembali ke wajah orang tua. Kemampuan ini mulai berkembang sejak bayi berusia sekitar 5 bulan.'
  },
  {
    q: 'Kenapa joint attention penting bagi anak autis?',
    a: 'Karena joint attention berkaitan erat dengan perkembangan bahasa dan kemampuan sosial. Penelitian menemukan anak autis dengan joint attention lebih baik di usia 20 bulan menunjukkan kemajuan bahasa yang lebih besar di usia 42 bulan, dan kaitan joint attention dengan bahasa justru lebih kuat pada anak autis dibanding anak pada umumnya.'
  },
  {
    q: 'Apa tanda anak kesulitan joint attention?',
    a: 'Menurut CDC, beberapa tanda yang perlu diperhatikan adalah anak tidak menunjukkan benda yang ia sukai kepada orang lain sampai usia 15 bulan, tidak menunjuk untuk memperlihatkan sesuatu yang menarik sampai usia 18 bulan, dan menghindari kontak mata. Tanda ini bukan diagnosis, tetapi alasan untuk berkonsultasi ke dokter anak.'
  },
  {
    q: 'Apakah joint attention bisa dilatih?',
    a: 'Bisa. Tinjauan sistematis atas 15 studi acak menemukan intervensi joint attention yang terarah memberi efek positif pada anak autis usia dini. Latihan paling baik dirancang bersama terapis, lalu dilanjutkan orang tua dalam kegiatan sehari-hari seperti bermain dan makan.'
  },
  {
    q: 'Umur berapa anak sebaiknya diskrining autisme?',
    a: 'American Academy of Pediatrics menganjurkan skrining autisme terstandar pada usia 18 dan 24 bulan, karena autisme dapat didiagnosis sejak usia 18 bulan. Bila orang tua khawatir lebih awal, jangan menunggu jadwal skrining untuk berkonsultasi.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Joint Attention Anak Autis', item: CANONICAL }
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
  keywords: 'joint attention anak autis kenapa penting, joint attention adalah, atensi bersama anak autis, melatih joint attention, tanda autisme',
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
    <meta name="keywords" content="joint attention anak autis kenapa penting, joint attention adalah, atensi bersama, melatih joint attention, YUKA">
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
                <span class="current">Joint Attention Anak Autis</span>
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
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> joint attention adalah kemampuan anak berbagi perhatian dengan orang lain terhadap hal yang sama, misalnya melihat ke arah yang ditunjuk ibu lalu menatap kembali wajah ibu. Pada anak autis, kemampuan ini sering terlambat berkembang dan termasuk tanda paling awal. Joint attention penting karena berkaitan erat dengan kemampuan berbahasa dan bersosialisasi di kemudian hari, dan penelitian menunjukkan kemampuan ini bisa dilatih lewat intervensi yang terarah.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah rangkuman informasi untuk orang tua, guru, dan pendamping, <strong>bukan alat diagnosis dan bukan saran medis</strong>. Autisme hanya bisa didiagnosis oleh dokter atau psikolog yang berkompeten. Tidak ada latihan yang "menyembuhkan" autisme; tujuan latihan joint attention adalah membantu anak berkomunikasi dengan lebih baik.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu joint attention?</a></li>
                    <li><a href="#jenis">Dua jenis joint attention: merespons dan memulai</a></li>
                    <li><a href="#kenapa-penting">Kenapa joint attention penting bagi anak autis?</a></li>
                    <li><a href="#tanda">Tanda anak kesulitan joint attention</a></li>
                    <li><a href="#bisa-dilatih">Apakah joint attention bisa dilatih?</a></li>
                    <li><a href="#di-rumah">Cara melatih joint attention di rumah</a></li>
                    <li><a href="#sekolah">Peran guru dan sekolah</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Joint Attention?</h2>
            <p>Bayangkan seorang ibu menunjuk kucing di halaman sambil berkata, "Lihat, ada kucing!" Anaknya menoleh ke arah kucing, lalu menatap wajah ibunya sambil tersenyum, seolah berkata, "Iya, aku juga lihat." Momen sederhana itu disebut <strong>joint attention</strong> atau atensi bersama: dua orang memperhatikan hal yang sama, dan keduanya <em>sadar</em> sedang berbagi perhatian.</p>
            <p>Kemampuan ini muncul jauh sebelum anak bisa bicara. Menurut tinjauan neurosains oleh Peter Mundy, joint attention <strong>mulai berkembang sejak bayi berusia sekitar 5 bulan</strong> dan pada dasarnya adalah kemampuan untuk mengambil sudut pandang yang sama dengan orang lain (${ext(L.mundy, 'Mundy, 2018')}). Tinjauan yang sama menjelaskan bahwa joint attention melibatkan jaringan luas di otak, bukan satu bagian saja, dan berhubungan dengan kemampuan memahami pikiran orang lain yang berkembang kemudian.</p>
            <p>Ciri khas joint attention adalah pola <strong>segitiga</strong>: anak, orang lain, dan benda. Anak tidak hanya melihat benda, dan tidak hanya melihat orang, tetapi berpindah pandangan di antara keduanya untuk berbagi pengalaman.</p>

            <h2 id="jenis">Dua Jenis Joint Attention: Merespons dan Memulai</h2>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Jenis</th><th>Artinya</th><th>Contoh sehari-hari</th></tr>
                </thead>
                <tbody>
                    <tr><td>Merespons joint attention (RJA)</td><td>Anak mengikuti arah pandangan atau tunjukan orang lain</td><td>Ayah menunjuk pesawat, anak ikut melihat ke langit</td></tr>
                    <tr><td>Memulai joint attention (IJA)</td><td>Anak yang mengajak orang lain memperhatikan sesuatu</td><td>Anak menunjuk bus lalu menoleh ke ibu, atau membawa mainan untuk diperlihatkan</td></tr>
                </tbody>
            </table>
            </div>
            <p>Penting juga membedakan <strong>menunjuk untuk berbagi</strong> dengan <strong>menunjuk untuk meminta</strong>. Anak yang menunjuk biskuit karena ingin diambilkan sedang meminta. Anak yang menunjuk burung lalu menatap wajah Anda sedang berbagi. Penelitian Charman menemukan bahwa perilaku berbagi yang melibatkan perpindahan pandangan segitiga inilah yang memprediksi perkembangan bahasa, sedangkan kontak mata dua arah saja tidak (${ext(L.charman, 'Charman, 2003')}).</p>

            <h2 id="kenapa-penting">Kenapa Joint Attention Penting bagi Anak Autis?</h2>
            <p>Ada setidaknya empat alasan yang didukung penelitian.</p>
            <h3>1. Termasuk tanda paling awal autisme</h3>
            <p>Hambatan joint attention termasuk tanda <a href="/artikel/autisme-adalah">autisme</a> yang paling awal terlihat (${ext(L.charman, 'Charman, 2003')}). Karena itu, perilaku seperti menunjuk dan menunjukkan benda menjadi bagian dari daftar tanda yang dipantau dokter anak. American Academy of Pediatrics menganjurkan skrining autisme terstandar pada usia <strong>18 dan 24 bulan</strong>, dan autisme dapat didiagnosis sejak usia 18 bulan (${ext(L.hyman, 'Hyman dkk., AAP 2020')}).</p>
            <h3>2. Berkaitan erat dengan kemampuan bahasa</h3>
            <p>Anak belajar kata dengan menghubungkan suara yang diucapkan orang dewasa dengan benda yang sedang sama-sama diperhatikan. Tanpa atensi bersama, kata "kucing" tidak punya pasangan yang jelas. Dalam studi Charman, joint attention anak autis pada usia 20 bulan berhubungan dengan <strong>kemajuan bahasa yang lebih besar dan gejala sosial komunikasi yang lebih ringan</strong> pada usia 42 bulan (${ext(L.charman, 'Charman, 2003')}).</p>
            <p>Tinjauan sistematis dan meta-regresi atas <strong>71 laporan dengan 1.859 peserta autis dan 1.835 peserta tipikal</strong> menemukan hubungan joint attention dan bahasa <strong>lebih kuat pada kelompok autis</strong> dibanding anak pada umumnya, dan paling kuat untuk kemampuan merespons joint attention (${ext(L.bottema, 'Bottema-Beutel, 2016')}). Penulisnya menjelaskan, anak yang berkembang tipikal biasanya sudah punya joint attention yang cukup, sehingga perbedaan kecil tidak banyak berpengaruh. Pada anak autis, perkembangan bahasa lebih bergantung pada seberapa baik kemampuan joint attention-nya.</p>
            <p>Bila anak juga terlambat bicara, baca penjelasan <a href="/artikel/speech-delay-adalah">speech delay</a> dan peran <a href="/artikel/terapi-wicara">terapi wicara</a>.</p>
            <h3>3. Fondasi kemampuan sosial</h3>
            <p>Berbagi perhatian adalah bentuk paling awal dari "ngobrol" tanpa kata. Mundy menjelaskan adanya kesinambungan antara hambatan joint attention di usia prasekolah dengan kemampuan memahami sudut pandang dan pikiran orang lain di masa kanak-kanak (${ext(L.mundy, 'Mundy, 2018')}). Kemampuan inilah yang nanti dipakai anak untuk bergiliran bermain, memahami candaan, dan berteman. Latihan lanjutannya dibahas di artikel <a href="/artikel/social-skills-training-anak-autis">social skills training anak autis</a>.</p>
            <h3>4. Bisa menjadi sasaran intervensi dini</h3>
            <p>Joint attention termasuk kemampuan yang disebut <em>pivotal</em>, yaitu kemampuan kunci yang bila membaik ikut mendorong kemampuan lain. Charman mencatat joint attention berkaitan dengan hasil perkembangan anak, baik secara alami maupun ketika dijadikan sasaran program intervensi dini (${ext(L.charman, 'Charman, 2003')}). Menariknya, joint attention tidak berhubungan dengan perilaku berulang, sehingga keduanya tampaknya berkembang lewat jalur yang berbeda.</p>

            <h2 id="tanda">Tanda Anak Kesulitan Joint Attention</h2>
            <p>CDC (pusat pengendalian penyakit Amerika Serikat) mencantumkan beberapa tanda autisme yang berkaitan langsung dengan joint attention (${ext(L.cdc, 'CDC')}):</p>
            <ul>
                <li>Tidak berbagi minat dengan orang lain sampai usia <strong>15 bulan</strong>, misalnya tidak memperlihatkan benda yang ia sukai.</li>
                <li>Tidak menunjuk untuk memperlihatkan sesuatu yang menarik sampai usia <strong>18 bulan</strong>.</li>
                <li>Menghindari atau tidak mempertahankan kontak mata.</li>
            </ul>
            <p>Tanda lain yang sering dilaporkan orang tua: anak jarang menoleh ke arah yang Anda tunjuk, jarang melihat wajah Anda saat sesuatu yang seru terjadi, atau lebih sering menarik tangan Anda ke benda yang diinginkan tanpa menatap Anda.</p>
            <div class="info-box">
                <p style="margin-bottom:0;"><strong>Penting:</strong> satu atau dua tanda di atas tidak berarti anak pasti autis. Tanda ini adalah alasan untuk berkonsultasi ke dokter anak atau psikolog, bukan untuk menyimpulkan sendiri. Semakin awal dievaluasi, semakin awal anak bisa mendapat dukungan yang sesuai.</p>
            </div>

            <h2 id="bisa-dilatih">Apakah Joint Attention Bisa Dilatih?</h2>
            <p>Bisa, dan buktinya cukup kuat.</p>
            <ul>
                <li><strong>Uji acak terkontrol Kasari dkk. (2006)</strong> melibatkan 58 anak autis usia 3 sampai 4 tahun. Anak yang mendapat intervensi joint attention selama 30 menit per hari selama 5 sampai 6 minggu lebih sering memperlihatkan benda, lebih baik merespons joint attention, dan lebih sering memulai joint attention saat bermain dengan ibunya dibanding kelompok kontrol (${ext(L.kasari06, 'Kasari dkk., 2006')}).</li>
                <li><strong>Pemantauan 12 bulan kemudian</strong> menunjukkan kemajuan bahasa ekspresif yang lebih besar pada kelompok intervensi. Anak yang kemampuan bahasanya paling rendah di awal mendapat manfaat paling besar dari latihan joint attention (${ext(L.kasari08, 'Kasari dkk., 2008')}).</li>
                <li><strong>Meta-analisis 15 studi acak</strong> menyimpulkan ada dukungan kuat untuk intervensi joint attention yang terarah pada anak autis usia dini. Namun, penulisnya juga mencatat belum jelas anak mana yang paling cocok dengan jenis intervensi yang mana (${ext(L.murza, 'Murza dkk., 2016')}).</li>
            </ul>
            <p>Artinya, hasil setiap anak berbeda. Program sebaiknya disusun bersama terapis berdasarkan kemampuan awal anak. Pendekatan yang sering memasukkan joint attention antara lain <a href="/artikel/pivotal-response-training-prt-autisme">pivotal response training (PRT)</a> dan <a href="/artikel/terapi-bermain">terapi bermain</a>. Gambaran lebih luas ada di artikel <a href="/artikel/systematic-review-intervensi-dini-autisme">tinjauan intervensi dini autisme</a> dan <a href="/artikel/macam-macam-terapi-pada-anak">macam-macam terapi pada anak</a>.</p>

            <h2 id="di-rumah">Cara Melatih Joint Attention di Rumah</h2>
            <p>Latihan berikut bersifat umum dan paling baik dijalankan sesuai arahan terapis anak Anda. Kuncinya: singkat, sering, dan menyenangkan.</p>
            <ol>
                <li><strong>Ikuti minat anak.</strong> Duduk sejajar dengan anak dan ikut bermain dengan benda yang sedang ia pegang. Anak lebih mudah berbagi perhatian pada hal yang ia sukai.</li>
                <li><strong>Posisikan wajah Anda di depan anak.</strong> Duduk berhadapan, bukan di belakang, supaya anak mudah berpindah pandang antara mainan dan wajah Anda.</li>
                <li><strong>Buat jeda yang ditunggu.</strong> Tiup gelembung sabun, lalu berhenti sejenak sambil menunggu anak menatap Anda sebelum meniup lagi.</li>
                <li><strong>Tunjuk sambil beri nama.</strong> Tunjuk benda yang dekat dulu, ucapkan namanya dengan singkat, lalu tunggu anak melihat. Bila perlu, dekatkan benda ke arah pandangan anak.</li>
                <li><strong>Tanggapi setiap usaha berbagi.</strong> Saat anak menunjuk atau memperlihatkan sesuatu, respons dengan antusias dan beri nama bendanya.</li>
                <li><strong>Masukkan ke rutinitas.</strong> Waktu makan, mandi, dan membaca buku bergambar adalah kesempatan alami. <a href="/artikel/jadwal-visual-anak-autis">Jadwal visual</a> dapat membantu anak merasa aman dengan rutinitas.</li>
                <li><strong>Jangan memaksa kontak mata.</strong> Memegang dagu anak agar menatap Anda bisa membuat anak tidak nyaman. Tujuannya berbagi pengalaman, bukan menatap lama.</li>
            </ol>
            <p>Tips pendampingan sehari-hari lainnya ada di artikel <a href="/artikel/tips-mendampingi-anak-autis">tips mendampingi anak autis</a>.</p>

            <h2 id="sekolah">Peran Guru dan Sekolah</h2>
            <ul>
                <li>Gunakan benda nyata dan gerakan menunjuk yang jelas saat memberi instruksi.</li>
                <li>Pastikan anak sudah memperhatikan benda yang sama sebelum menjelaskan sesuatu.</li>
                <li>Beri kesempatan anak memperlihatkan hasil karyanya dan tanggapi dengan hangat.</li>
                <li>Koordinasikan target latihan dengan orang tua dan terapis agar anak berlatih dengan cara yang sama di rumah dan di kelas.</li>
            </ul>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a> melalui pendidikan inklusi dan layanan terapi di Sleman. Untuk mengetahui layanan yang tersedia, hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a> atau lihat <a href="/program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/social-skills-training-anak-autis">Social Skills Training Anak Autis</a></h4>
                    <p>Melatih kemampuan sosial anak autis secara bertahap.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/pivotal-response-training-prt-autisme">Pivotal Response Training (PRT)</a></h4>
                    <p>Pendekatan yang menargetkan kemampuan kunci anak autis.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/terapi-wicara">Terapi Wicara</a></h4>
                    <p>Peran terapi wicara untuk komunikasi anak.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#JointAttention</a>
            <a href="#">#Autisme</a>
            <a href="#">#IntervensiDini</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.charman, 'Charman T. <strong>Why is joint attention a pivotal skill in autism?</strong> Philos Trans R Soc Lond B Biol Sci. 2003;358(1430):315-24')}</li>
              <li>${ext(L.mundy, 'Mundy P. <strong>A review of joint attention and social-cognitive brain systems in typical development and autism spectrum disorder.</strong> Eur J Neurosci. 2018;47(6):497-514')}</li>
              <li>${ext(L.bottema, 'Bottema-Beutel K. <strong>Associations between joint attention and language in autism spectrum disorder and typical development: A systematic review and meta-regression analysis.</strong> Autism Res. 2016;9(10):1021-1035')}</li>
              <li>${ext(L.kasari06, 'Kasari C, Freeman S, Paparella T. <strong>Joint attention and symbolic play in young children with autism: a randomized controlled intervention study.</strong> J Child Psychol Psychiatry. 2006;47(6):611-20')}</li>
              <li>${ext(L.kasari08, 'Kasari C, dkk. <strong>Language outcome in autism: randomized comparison of joint attention and play interventions.</strong> J Consult Clin Psychol. 2008;76(1):125-37')}</li>
              <li>${ext(L.murza, 'Murza KA, dkk. <strong>Joint attention interventions for children with autism spectrum disorder: a systematic review and meta-analysis.</strong> Int J Lang Commun Disord. 2016;51(3):236-51')}</li>
              <li>${ext(L.hyman, 'Hyman SL, Levy SE, Myers SM; AAP. <strong>Identification, Evaluation, and Management of Children With Autism Spectrum Disorder.</strong> Pediatrics. 2020;145(1):e20193447')}</li>
              <li>${ext(L.cdc, 'CDC. <strong>Signs and Symptoms of Autism Spectrum Disorder.</strong> cdc.gov')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat medis</strong>. Diagnosis autisme dan rencana intervensi harus ditetapkan oleh dokter, psikolog, atau terapis yang berkompeten. Sumber dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Joint%20Attention%20Anak%20Autis%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Joint%20Attention%20Anak%20Autis&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

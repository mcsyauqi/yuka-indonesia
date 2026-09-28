#!/usr/bin/env node
'use strict';

// One-time generator for artikel/empati-pada-anak-berkebutuhan-khusus.html (catchup 2026-09-28, kartu Fi6CdACx).
// Skeleton from gen-alat-bantu-belajar-anak-disleksia.js. Card's Candi Plaosan tourist photo rejected as off-topic;
// hero = crop of YUKA documentation photo cocopandan-lemon-keluarga-membuat-kerajinan-bersama-005 showing only hands
// (an adult and a child squeezing a lemon together), no identifiable face. No AI images, no prices.
// Claims checked 2026-09-28 against: Lindsay & Edwards 2013 PMID 22831703, Armstrong dkk. 2017 PMID 27780687,
// Armstrong dkk. 2016 PMID 26289369, Crompton dkk. 2020 PMID 32431157, Mitchell dkk. 2021 PMID 33393101,
// UU No. 8 Tahun 2016 (JDIH BPK).

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'empati-pada-anak-berkebutuhan-khusus';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Empati pada Anak Berkebutuhan Khusus: Panduan Praktis';
const META_DESC = 'Empati pada anak berkebutuhan khusus bisa dilatih lewat kontak, contoh, dan kebiasaan kecil. Simak cara menumbuhkannya di rumah dan sekolah di sini.';
const OG_TITLE = 'Empati pada Anak Berkebutuhan Khusus: Cara Menumbuhkannya';
const OG_DESC = 'Panduan orang tua dan guru menumbuhkan empati pada anak berkebutuhan khusus: apa kata penelitian, kesalahan umum, dan langkah praktis di rumah dan sekolah.';
const H1 = 'Empati pada Anak Berkebutuhan Khusus: Arti, Bukti Penelitian, dan Cara Menumbuhkannya';
const IMAGE = 'Dokumentasi/artikel/empati-anak-berkebutuhan-khusus-tangan-bersama.webp';
const IMAGE_ALT = 'Tangan orang dewasa dan tangan anak memeras jeruk lemon bersama dalam kegiatan belajar YUKA';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T20:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T20:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';
const META_KW = 'empati pada anak berkebutuhan khusus, empati ABK, inklusi, pendidikan inklusi, YUKA';
const CRUMB = 'Empati pada Anak Berkebutuhan Khusus';
const CAPTION = 'Empati tumbuh dari hal sederhana: mengerjakan sesuatu bersama, pelan-pelan, dan saling menunggu. <span class="kredit">Foto: dokumentasi YUKA Indonesia</span>';
const SHARE_TXT = 'Empati%20pada%20Anak%20Berkebutuhan%20Khusus';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  lindsay: 'https://pubmed.ncbi.nlm.nih.gov/22831703/',
  armMeta: 'https://pubmed.ncbi.nlm.nih.gov/27780687/',
  armCross: 'https://pubmed.ncbi.nlm.nih.gov/26289369/',
  crompton: 'https://pubmed.ncbi.nlm.nih.gov/32431157/',
  mitchell: 'https://pubmed.ncbi.nlm.nih.gov/33393101/',
  uu8: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa arti empati pada anak berkebutuhan khusus?',
    a: 'Empati pada anak berkebutuhan khusus adalah kemampuan memahami perasaan dan sudut pandang anak berkebutuhan khusus (ABK), lalu bersikap dengan cara yang menghargai mereka. Empati berbeda dari rasa kasihan: empati menempatkan ABK sebagai teman yang setara, bukan objek belas kasihan.'
  },
  {
    q: 'Bagaimana cara mengajarkan empati kepada anak terhadap teman ABK?',
    a: 'Cara yang paling didukung penelitian adalah memberi kesempatan anak berinteraksi langsung dengan teman ABK dalam kegiatan bersama yang terarah. Meta-analisis Armstrong dan rekan (2017) menemukan kontak langsung dan kontak tidak langsung (misalnya mendengar cerita teman yang berteman dengan ABK) memperbaiki sikap anak terhadap disabilitas.'
  },
  {
    q: 'Apakah anak autis tidak punya empati?',
    a: 'Anggapan itu terlalu menyederhanakan. Penelitian Crompton dan rekan (2020) menunjukkan orang autis berbagi informasi sama baiknya dengan sesama autis seperti orang nonautis dengan sesama nonautis; kesulitan muncul di kelompok campuran. Para peneliti menyebutnya masalah empati ganda: kesalahpahaman terjadi dari dua arah, bukan hanya dari pihak orang autis.'
  },
  {
    q: 'Apakah kegiatan simulasi disabilitas cukup untuk menumbuhkan empati?',
    a: 'Belum tentu. Tinjauan sistematis Lindsay dan Edwards (2013) menyimpulkan program kesadaran disabilitas paling berhasil bila memadukan beberapa komponen dan berlangsung dalam beberapa sesi. Satu kegiatan sekali jalan tanpa kontak dan diskusi lanjutan cenderung tidak cukup.'
  },
  {
    q: 'Apa dasar hukum perlakuan setara terhadap anak disabilitas di Indonesia?',
    a: 'Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas mengatur hak penyandang disabilitas, termasuk hak atas pendidikan dan hak bebas dari stigma serta diskriminasi. Teks lengkapnya tersedia di JDIH BPK.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: CRUMB, item: CANONICAL }
  ]
};

const blogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: OG_TITLE,
  description: OG_DESC,
  image: { '@type': 'ImageObject', url: IMAGE_URL, caption: IMAGE_ALT, creditText: 'Dokumentasi YUKA Indonesia' },
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
  keywords: 'empati pada anak berkebutuhan khusus, empati ABK, pendidikan inklusi, kesadaran disabilitas, masalah empati ganda',
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
    <meta name="keywords" content="${META_KW}">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${CANONICAL}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${CANONICAL}">
    <meta property="og:title" content="${OG_TITLE}">
    <meta property="og:description" content="${OG_DESC}">
    <meta property="og:image" content="${IMAGE_URL}">
    <meta property="og:image:alt" content="${IMAGE_ALT}">
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
    ${STYLE.replace('</style>', `        .article-featured-image { margin: -2rem auto 2rem; max-width: 600px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .article-featured-image img { width: 100%; height: auto; }
        .article-featured-image figcaption { padding: 0.6rem 1rem; font-size: 0.85rem; color: var(--gray-600); text-align: center; background: var(--gray-50); }
    </style>`)}
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
                <span class="current">${CRUMB}</span>
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

    <div class="container">
        <figure class="article-featured-image">
            <img src="../${IMAGE}" alt="${IMAGE_ALT}" width="520" height="400" fetchpriority="high" decoding="async">
            <figcaption>${CAPTION}</figcaption>
        </figure>
    </div>
    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> empati pada anak berkebutuhan khusus berarti berusaha memahami perasaan dan cara pandang anak berkebutuhan khusus (ABK), lalu memperlakukan mereka sebagai teman yang setara, bukan sebagai objek rasa kasihan. Penelitian menunjukkan empati ini bisa dilatih. Cara yang paling didukung bukti adalah <strong>kontak langsung yang terarah</strong> antara anak dan teman ABK, <strong>program kesadaran yang berlangsung beberapa sesi</strong>, dan <strong>contoh sikap dari orang dewasa</strong> di rumah dan sekolah.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum untuk orang tua, guru, dan pendamping, <strong>bukan saran klinis</strong>. Kebutuhan tiap anak berbeda. Bila anak menunjukkan kesulitan sosial atau emosional yang berat, konsultasikan dengan psikolog atau tenaga profesional yang memeriksa anak secara langsung.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#arti">Arti empati pada anak berkebutuhan khusus</a></li>
                    <li><a href="#bukan-kasihan">Empati bukan rasa kasihan</a></li>
                    <li><a href="#penelitian">Apa kata penelitian</a></li>
                    <li><a href="#dua-arah">Empati berjalan dua arah</a></li>
                    <li><a href="#rumah">Menumbuhkan empati di rumah</a></li>
                    <li><a href="#sekolah">Menumbuhkan empati di sekolah</a></li>
                    <li><a href="#kesalahan">Kesalahan yang sering terjadi</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="arti">Arti Empati pada Anak Berkebutuhan Khusus</h2>
            <p>Empati adalah kemampuan untuk memahami apa yang dirasakan dan dipikirkan orang lain, lalu menanggapinya dengan tepat. Dalam konteks <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a>, empati berarti mau melihat dunia dari sudut pandang anak yang mungkin berkomunikasi, bergerak, atau belajar dengan cara berbeda.</p>
            <p>Empati punya dua sisi. Sisi pertama adalah <strong>memahami</strong>: mengerti mengapa teman autis menutup telinga saat kelas ramai, atau mengapa teman dengan cerebral palsy butuh waktu lebih lama untuk berjalan ke kantin. Sisi kedua adalah <strong>bertindak</strong>: mengecilkan suara, menunggu dengan sabar, atau mengajak teman itu bermain tanpa diminta.</p>
            <p>Istilah ini sering dipakai untuk dua hal yang berbeda, dan keduanya dibahas di artikel ini:</p>
            <ul>
                <li><strong>Empati terhadap ABK</strong>, yaitu sikap orang tua, guru, saudara, dan teman sebaya kepada anak berkebutuhan khusus.</li>
                <li><strong>Empati yang dimiliki ABK</strong>, yaitu cara anak berkebutuhan khusus sendiri memahami dan menanggapi perasaan orang lain.</li>
            </ul>

            <h2 id="bukan-kasihan">Empati Bukan Rasa Kasihan</h2>
            <p>Banyak orang dewasa bermaksud baik tetapi menunjukkan rasa kasihan, bukan empati. Bedanya terasa oleh anak. Rasa kasihan menempatkan ABK di posisi lebih rendah: "kasihan ya, dia tidak bisa apa-apa." Empati menempatkan ABK sebagai teman yang punya perasaan, minat, dan kemampuan sendiri: "dia suka menggambar, ayo ajak menggambar bersama."</p>
            <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.95rem;">
                <thead>
                    <tr style="background:#2B3A67;color:#fff;">
                        <th style="padding:0.75rem;text-align:left;">Rasa kasihan</th>
                        <th style="padding:0.75rem;text-align:left;">Empati</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Mengerjakan semua hal untuk anak</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Membantu seperlunya, memberi kesempatan anak mencoba sendiri</td></tr>
                    <tr><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Membicarakan anak di depannya seolah ia tidak mengerti</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Berbicara langsung kepada anak dengan cara yang ia pahami</td></tr>
                    <tr><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Fokus pada apa yang tidak bisa dilakukan</td><td style="padding:0.75rem;border-bottom:1px solid #e5e7eb;">Mencari minat dan kekuatan anak</td></tr>
                    <tr><td style="padding:0.75rem;">Menjauhkan anak dari kegiatan kelompok "supaya aman"</td><td style="padding:0.75rem;">Menyesuaikan kegiatan supaya anak bisa ikut</td></tr>
                </tbody>
            </table>
            <p>Sikap ini sejalan dengan semangat ${ext(L.uu8, 'Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')}, yang mengakui penyandang disabilitas sebagai pemilik hak yang setara, termasuk hak atas pendidikan dan hak bebas dari stigma.</p>

            <h2 id="penelitian">Apa Kata Penelitian tentang Menumbuhkan Empati</h2>
            <p>Kabar baiknya, sikap anak terhadap teman berkebutuhan khusus bukan sesuatu yang tetap. Beberapa penelitian menunjukkan sikap itu bisa berubah ke arah yang lebih baik.</p>
            <h3>Kontak langsung paling berpengaruh</h3>
            <p>Survei Armstrong dan rekan (2016) terhadap 1.881 anak usia 7 sampai 16 tahun di 20 sekolah di Inggris menemukan bahwa anak yang lebih sering berinteraksi dengan penyandang disabilitas punya sikap yang lebih positif. Sekitar sepertiga hubungan itu dijelaskan oleh dua hal: <strong>rasa canggung atau cemas yang berkurang</strong> dan <strong>empati yang meningkat</strong>. Hubungannya lebih kuat pada anak usia sekolah dasar dibanding sekolah menengah (${ext(L.armCross, 'Armstrong dkk., 2016')}).</p>
            <p>Meta-analisis lanjutan oleh tim yang sama merangkum 12 program sekolah. Kontak langsung (bertemu dan berkegiatan bersama) dan kontak tidak langsung (misalnya mengetahui ada teman sekelompok yang bersahabat dengan anak disabilitas) sama-sama memperbaiki sikap anak. Program yang hanya mengandalkan tontonan media tidak menunjukkan bukti efek yang jelas (${ext(L.armMeta, 'Armstrong dkk., 2017')}).</p>
            <h3>Program kesadaran perlu beberapa sesi</h3>
            <p>Tinjauan sistematis Lindsay dan Edwards meninjau 42 penelitian program kesadaran disabilitas untuk anak dan remaja. Sebagian besar program (34 penelitian) memperbaiki sikap atau penerimaan terhadap teman disabilitas, tetapi 5 program tidak menunjukkan perbaikan. Kesimpulan penulisnya: program sebaiknya memadukan beberapa komponen, seperti kontak, materi pelajaran, dan media, serta berlangsung dalam beberapa sesi (${ext(L.lindsay, 'Lindsay dan Edwards, 2013')}).</p>
            <p>Artinya, satu kali acara "hari peduli ABK" belum cukup. Empati tumbuh dari pengalaman yang diulang, seperti yang terjadi setiap hari di kelas <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a>.</p>

            <h2 id="dua-arah">Empati Berjalan Dua Arah</h2>
            <p>Ada anggapan lama bahwa anak berkebutuhan khusus, terutama anak <a href="/artikel/autisme-adalah">autis</a>, "tidak punya empati". Penelitian terbaru menunjukkan gambarannya lebih rumit.</p>
            <p>Dalam percobaan Crompton dan rekan (2020), informasi dioper berantai dalam kelompok. Kelompok yang semua anggotanya autis menyampaikan informasi sama baiknya dengan kelompok yang semua anggotanya nonautis. Penurunan terjadi justru di kelompok campuran, dan peserta di kelompok campuran juga merasa kurang nyambung satu sama lain (${ext(L.crompton, 'Crompton dkk., 2020')}).</p>
            <p>Temuan seperti ini dikenal sebagai <strong>masalah empati ganda</strong> (double empathy problem). Mitchell dan rekan (2021) menjelaskan bahwa orang nonautis juga sering salah membaca orang autis, dan kesalahpahaman itu bisa membuat anak autis makin terpisah dari lingkungannya (${ext(L.mitchell, 'Mitchell dkk., 2021')}).</p>
            <p>Pelajarannya untuk orang tua dan guru: jangan hanya menuntut ABK "belajar memahami orang lain". Anak-anak lain dan orang dewasa di sekitarnya juga perlu belajar memahami cara ABK berkomunikasi. Latihan keterampilan sosial tetap bermanfaat bagi ABK, seperti dibahas di artikel <a href="/artikel/social-skills-training-anak-autis">social skills training untuk anak autis</a>, tetapi itu hanya separuh pekerjaan.</p>

            <h2 id="rumah">Cara Menumbuhkan Empati di Rumah</h2>
            <p>Rumah adalah tempat pertama anak belajar bersikap. Beberapa kebiasaan kecil ini bisa dimulai hari ini:</p>
            <ol>
                <li><strong>Jawab pertanyaan anak dengan jujur dan sederhana.</strong> Bila anak bertanya "kenapa temanku tidak bisa bicara?", jawab dengan tenang: "Dia bicara dengan cara lain, misalnya dengan gambar atau isyarat. Yuk kita pelajari caranya."</li>
                <li><strong>Beri contoh lewat sikap.</strong> Anak meniru cara orang tuanya menyapa, menunggu, dan berbicara kepada penyandang disabilitas.</li>
                <li><strong>Pakai bahasa yang menghargai.</strong> Hindari julukan atau candaan tentang disabilitas, dan tegur dengan lembut bila anak memakainya.</li>
                <li><strong>Buka kesempatan bermain bersama.</strong> Undang teman ABK ke rumah atau ikut kegiatan komunitas inklusi. Kontak langsung terbukti paling berpengaruh.</li>
                <li><strong>Bahas perasaan, bukan hanya aturan.</strong> Tanyakan "menurutmu dia merasa apa waktu ditertawakan?" agar anak belajar membayangkan sudut pandang orang lain.</li>
            </ol>
            <p>Bila di rumah ada anak berkebutuhan khusus, saudara kandungnya juga butuh perhatian. Saudara yang dilibatkan dan didengarkan lebih mudah tumbuh menjadi pendukung. Peran keluarga dibahas lengkap di artikel <a href="/artikel/dukungan-keluarga-anak-abk">dukungan keluarga untuk anak ABK</a>. Empati juga berlaku untuk orang tua ABK sendiri; kelelahan pengasuhan itu nyata, dan cara mengelolanya ada di artikel <a href="/artikel/mengelola-stres-orang-tua-anak-abk">mengelola stres orang tua anak ABK</a>.</p>

            <h2 id="sekolah">Cara Menumbuhkan Empati di Sekolah</h2>
            <p>Sekolah punya peran besar karena di sanalah anak menghabiskan banyak waktu bersama teman sebaya. Beberapa langkah yang bisa dilakukan guru:</p>
            <ul>
                <li><strong>Rancang kegiatan kelompok yang benar-benar bersama.</strong> Beri setiap anak, termasuk ABK, peran yang jelas dalam kelompok. Metode seperti <a href="/artikel/peer-tutoring-di-kelas-inklusi">peer tutoring di kelas inklusi</a> membuat anak saling membantu secara alami.</li>
                <li><strong>Kenalkan perbedaan sebelum muncul pertanyaan.</strong> Jelaskan dengan bahasa sederhana mengapa seorang teman memakai alat bantu atau butuh istirahat di ruang tenang.</li>
                <li><strong>Jadikan program kesadaran berkelanjutan.</strong> Sesuai temuan Lindsay dan Edwards, gabungkan cerita, diskusi, dan kegiatan bersama dalam beberapa pertemuan, bukan sekali acara.</li>
                <li><strong>Tangani ejekan dengan cepat.</strong> Aturan kelas yang jelas tentang saling menghargai membantu semua anak merasa aman. Pengaturan kelas yang mendukung hal ini dibahas di artikel <a href="/artikel/classroom-management-kelas-inklusi">classroom management kelas inklusi</a>.</li>
                <li><strong>Libatkan orang tua.</strong> Sampaikan kegiatan empati di kelas agar orang tua bisa melanjutkannya di rumah. Lihat juga <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.</li>
            </ul>

            <div class="story-highlight">
                <h3>Empati dalam keseharian di YUKA</h3>
                <p style="margin-bottom:0;">Di Sekolah Inklusi Taruna Imani, anak berkebutuhan khusus dan anak lainnya belajar, makan, dan berkegiatan bersama setiap hari, dari belajar di kelas sampai kegiatan memasak dan membuat minuman bersama. Kebersamaan sehari-hari inilah bentuk kontak langsung yang dibahas penelitian di atas. Untuk mengenal program kami, kunjungi halaman <a href="/program">program YUKA</a> atau hubungi tim melalui halaman <a href="/kontak">kontak</a>.</p>
            </div>

            <h2 id="kesalahan">Kesalahan yang Sering Terjadi</h2>
            <ul>
                <li><strong>Menganggap empati cukup diajarkan lewat nasihat.</strong> Nasihat membantu, tetapi pengalaman berinteraksi langsung jauh lebih berpengaruh.</li>
                <li><strong>Memuji anak "baik hati" karena mau berteman dengan ABK.</strong> Pujian seperti ini diam-diam mengajarkan bahwa berteman dengan ABK adalah pengorbanan. Lebih baik puji kerja samanya.</li>
                <li><strong>Menuntut ABK menyesuaikan diri sepenuhnya.</strong> Seperti ditunjukkan penelitian masalah empati ganda, penyesuaian perlu datang dari dua arah.</li>
                <li><strong>Menyamakan semua ABK.</strong> Setiap anak punya kebutuhan, minat, dan cara berkomunikasi sendiri. Kenali anaknya, bukan labelnya.</li>
            </ul>
            <p>Empati yang tumbuh sejak kecil ikut membentuk masyarakat yang lebih terbuka. Gambaran besarnya bisa dibaca di artikel <a href="/artikel/inklusi-sosial">inklusi sosial</a>.</p>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/pendidikan-inklusi">Pendidikan Inklusi</a></h4>
                    <p>Pengertian dan penerapan pendidikan inklusi.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/peer-tutoring-di-kelas-inklusi">Peer Tutoring di Kelas Inklusi</a></h4>
                    <p>Teman sebaya sebagai pendamping belajar.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/dukungan-keluarga-anak-abk">Dukungan Keluarga Anak ABK</a></h4>
                    <p>Peran keluarga dalam tumbuh kembang ABK.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#Empati</a>
            <a href="#">#ABK</a>
            <a href="#">#PendidikanInklusi</a>
            <a href="#">#ParentingABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.lindsay, 'Lindsay S, Edwards A. <strong>A systematic review of disability awareness interventions for children and youth.</strong> Disabil Rehabil. 2013;35(8):623-46')}</li>
              <li>${ext(L.armCross, 'Armstrong M, Morris C, Abraham C, Ukoumunne OC, Tarrant M. <strong>Children\'s contact with people with disabilities and their attitudes towards disability: a cross-sectional study.</strong> Disabil Rehabil. 2016;38(9):879-88')}</li>
              <li>${ext(L.armMeta, 'Armstrong M, Morris C, Abraham C, Tarrant M. <strong>Interventions utilising contact with people with disabilities to improve children\'s attitudes towards disability: A systematic review and meta-analysis.</strong> Disabil Health J. 2017;10(1):11-22')}</li>
              <li>${ext(L.crompton, 'Crompton CJ, Ropar D, Evans-Williams CV, Flynn EG, Fletcher-Watson S. <strong>Autistic peer-to-peer information transfer is highly effective.</strong> Autism. 2020;24(7):1704-1712')}</li>
              <li>${ext(L.mitchell, 'Mitchell P, Sheppard E, Cassidy S. <strong>Autism and the double empathy problem: Implications for development and mental health.</strong> Br J Dev Psychol. 2021;39(1):1-18')}</li>
              <li>${ext(L.uu8, 'Undang-Undang Republik Indonesia Nomor 8 Tahun 2016 tentang Penyandang Disabilitas. JDIH BPK')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum, <strong>bukan nasihat klinis</strong>. Asesmen dan rencana intervensi untuk anak perlu ditetapkan oleh tenaga profesional yang berkompeten. Sumber dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=${SHARE_TXT}%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=${SHARE_TXT}&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

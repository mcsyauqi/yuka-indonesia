#!/usr/bin/env node
'use strict';

// One-time generator for artikel/apa-saja-hak-anak-berkebutuhan-khusus.html (cycle #72, slot 2026-10-03).
// Shell copied from gen-strategi-mengajar-anak-autis-di-kelas.js (shared footer via scripts/lib/article-shell).
// Primary sources (full text saved in data/sumber/apa-saja-hak-anak-berkebutuhan-khusus/, from JDIH BPK PDFs, read 2026-10-02):
// UU 8/2016 Pasal 4, 5 ayat (1) dan (3), 10, 40, 41, 42; PP 13/2020 Pasal 2, 3, 9, 10, 12, 38.
// UU 19/2011 = pengesahan CRPD (judul dicek di JDIH BPK). Permendikbudristek 48/2023 (judul resmi, URL JDIH Kemendikdasmen).
// Catatan: Putusan MK 130/PUU-XXIII/2025 hanya mengubah makna Penjelasan Pasal 4 ayat (1) huruf a (disabilitas fisik); tidak dikutip di artikel.
// Images: 4 crops of YUKA documentation photos, each opened and checked 2026-10-02. No AI images; no caption labels any child's condition.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'apa-saja-hak-anak-berkebutuhan-khusus';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Apa Saja Hak Anak Berkebutuhan Khusus? | YUKA';
const META_DESC = 'Apa saja hak anak berkebutuhan khusus menurut UU 8/2016 dan PP 13/2020: 7 hak khusus anak, hak pendidikan, akomodasi yang layak, dan cara menuntutnya.';
const OG_TITLE = 'Apa Saja Hak Anak Berkebutuhan Khusus? Panduan Menurut UU 8/2016';
const OG_DESC = 'Daftar hak anak berkebutuhan khusus menurut UU 8/2016 dan PP 13/2020, kewajiban pemerintah dan sekolah, contoh akomodasi yang layak, dan langkah bila hak anak tidak dipenuhi.';
const H1 = 'Apa Saja Hak Anak Berkebutuhan Khusus? Panduan Orang Tua Menurut UU 8/2016 dan PP 13/2020';
const IMG_DIR = 'Dokumentasi/artikel';
const IMAGE = `${IMG_DIR}/${SLUG}-kegiatan-bersama.webp`;
const IMAGE_ALT = 'Rombongan siswa berseragam dan pendamping berfoto bersama di lobi sebuah gedung saat kegiatan kunjungan';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-10-03T09:00:00+07:00';
const DATE_MODIFIED = '2026-10-03T09:00:00+07:00';
const DATE_DISPLAY = '3 Oktober 2026';
const META_KW = 'apa saja hak anak berkebutuhan khusus, hak anak disabilitas, UU 8 tahun 2016, PP 13 tahun 2020, akomodasi yang layak, hak pendidikan ABK, YUKA';
const CRUMB = 'Apa Saja Hak Anak Berkebutuhan Khusus';
const CREDIT = '<span class="kredit">Foto: dokumentasi YUKA Indonesia</span>';
const SHARE_TXT = 'Apa%20Saja%20Hak%20Anak%20Berkebutuhan%20Khusus';
const READ_TIME = '12 menit baca';
const HERO_W = 1200, HERO_H = 570;
const HERO_CAPTION = 'Siswa, guru, dan pendamping YUKA dalam kegiatan kunjungan bersama. Ikut serta dalam kegiatan seperti ini termasuk hak anak penyandang disabilitas untuk diperlakukan sama dengan anak lain.';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 160) throw new Error('meta description out of range: ' + META_DESC.length);

const L = {
  uu8: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016',
  pp13: 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020',
  uu19: 'https://peraturan.bpk.go.id/Details/39255/uu-no-19-tahun-2011',
  permen48: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-kebudayaan-riset-dan-teknologi-nomor-48-tahun-2023-tentang-akomodasi-yang-layak-untuk-peserta-didik-penyandang-disabilitas-pada-satuan-pendidikan-anak-usia-dini-formal-pendidikan-dasar-pendidikan-menengah-dan-pendidikan-tinggi'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
const fig = (file, alt, caption, w, h) => `
            <figure style="margin:2rem 0;">
                <img src="../${IMG_DIR}/${SLUG}-${file}.webp" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:12px;">
                <figcaption style="font-size:0.9rem;color:#555;margin-top:0.5rem;text-align:center;">${caption} ${CREDIT}</figcaption>
            </figure>`;

const faq = [
  {
    q: 'Apa saja hak anak berkebutuhan khusus menurut undang-undang?',
    a: 'Menurut Pasal 5 ayat (3) UU Nomor 8 Tahun 2016, selain hak umum penyandang disabilitas, anak penyandang disabilitas berhak atas: pelindungan khusus dari diskriminasi, penelantaran, pelecehan, eksploitasi, serta kekerasan dan kejahatan seksual; perawatan dan pengasuhan keluarga atau keluarga pengganti; perlindungan kepentingannya dalam pengambilan keputusan; perlakuan manusiawi sesuai martabat dan hak anak; pemenuhan kebutuhan khusus; perlakuan yang sama dengan anak lain untuk integrasi sosial dan pengembangan individu; serta pendampingan sosial.'
  },
  {
    q: 'Apakah anak berkebutuhan khusus boleh ditolak sekolah reguler?',
    a: 'UU 8/2016 Pasal 10 menjamin hak anak penyandang disabilitas mendapatkan pendidikan bermutu secara inklusif dan khusus di semua jenis, jalur, dan jenjang, serta mendapatkan akomodasi yang layak. Pasal 40 mewajibkan pemerintah daerah mengutamakan anak penyandang disabilitas bersekolah di lokasi yang dekat tempat tinggalnya. Bila anak ditolak, mintalah alasan tertulis dan konsultasikan dengan dinas pendidikan setempat.'
  },
  {
    q: 'Apa yang dimaksud akomodasi yang layak di sekolah?',
    a: 'Akomodasi yang layak adalah penyesuaian yang diberikan agar peserta didik penyandang disabilitas dapat mengikuti pendidikan setara dengan teman-temannya. PP 13/2020 merinci bentuknya per ragam disabilitas, misalnya fleksibilitas proses dan materi pembelajaran, fleksibilitas evaluasi dan waktu pengerjaan tugas, asistensi, penyesuaian rasio guru, dan ruang relaksasi.'
  },
  {
    q: 'Apakah anak berkebutuhan khusus wajib ikut wajib belajar 12 tahun?',
    a: 'Ya. Pasal 40 ayat (3) UU 8/2016 menyatakan pemerintah dan pemerintah daerah wajib mengikutsertakan anak penyandang disabilitas dalam program wajib belajar 12 tahun.'
  },
  {
    q: 'Apakah anak berkebutuhan khusus berhak atas beasiswa?',
    a: 'Pasal 40 ayat (6) UU 8/2016 mewajibkan pemerintah dan pemerintah daerah menyediakan beasiswa untuk peserta didik penyandang disabilitas berprestasi yang orang tuanya tidak mampu membiayai pendidikannya. Ayat (7) juga mewajibkan penyediaan biaya pendidikan bagi anak dari penyandang disabilitas yang tidak mampu. Program dan syarat teknisnya ditetapkan oleh instansi terkait, jadi tanyakan ke sekolah atau dinas pendidikan.'
  },
  {
    q: 'Siapa yang menetapkan ragam disabilitas anak untuk keperluan akomodasi di sekolah?',
    a: 'Menurut PP 13/2020, ragam penyandang disabilitas ditetapkan oleh tenaga medis, yaitu dokter dan/atau dokter spesialis. Dokter tersebut dapat disediakan oleh sekolah penyelenggara pendidikan inklusif, Unit Layanan Disabilitas, atau orang tua/wali.'
  },
  {
    q: 'Apa itu Unit Layanan Disabilitas?',
    a: 'Unit Layanan Disabilitas adalah unit yang menurut Pasal 42 UU 8/2016 wajib difasilitasi pembentukannya oleh pemerintah daerah untuk mendukung pendidikan inklusif tingkat dasar dan menengah. Fungsinya antara lain meningkatkan kompetensi guru sekolah reguler, menyediakan pendampingan bagi peserta didik, menyediakan media pembelajaran dan alat bantu, serta melakukan deteksi dan intervensi dini.'
  },
  {
    q: 'Apa yang bisa dilakukan orang tua bila hak anak tidak dipenuhi sekolah?',
    a: 'Mulailah dengan dialog dan permintaan tertulis kepada sekolah, dengan merujuk pasal yang relevan. Bila tidak ada penyelesaian, sampaikan ke dinas pendidikan kabupaten/kota atau provinsi sesuai kewenangan. PP 13/2020 mengatur sanksi administratif, dari teguran tertulis sampai pencabutan izin, bagi lembaga yang sudah difasilitasi tetapi tidak melaksanakan kewajiban akomodasi yang layak.'
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
  keywords: 'hak anak berkebutuhan khusus, hak anak penyandang disabilitas, UU 8 tahun 2016, PP 13 tahun 2020, akomodasi yang layak, pendidikan inklusif',
  citation: Object.values(L),
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

const td = 'style="padding:0.75rem;border-bottom:1px solid #e5e7eb;vertical-align:top;"';
const tdl = 'style="padding:0.75rem;vertical-align:top;"';
const th = 'style="padding:0.75rem;text-align:left;"';

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
    ${STYLE.replace('</style>', `        .article-featured-image { margin: -2rem auto 2rem; max-width: 720px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .article-featured-image img { width: 100%; height: auto; }
        .article-featured-image figcaption { padding: 0.6rem 1rem; font-size: 0.85rem; color: var(--gray-600); text-align: center; background: var(--gray-50); }
        .table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
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
                <span>${READ_TIME}</span>
                <span>Tim YUKA</span>
            </div>
        </div>
    </header>

    <div class="container">
        <figure class="article-featured-image">
            <img src="../${IMAGE}" alt="${IMAGE_ALT}" width="${HERO_W}" height="${HERO_H}" fetchpriority="high" decoding="async">
            <figcaption>${HERO_CAPTION} ${CREDIT}</figcaption>
        </figure>
    </div>
    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> hak anak berkebutuhan khusus di Indonesia diatur terutama dalam ${ext(L.uu8, 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')}. Selain 22 hak umum penyandang disabilitas di Pasal 5 ayat (1), seperti hak pendidikan, kesehatan, aksesibilitas, dan bebas dari stigma, Pasal 5 ayat (3) memberi anak penyandang disabilitas <strong>7 hak khusus</strong>: pelindungan khusus dari diskriminasi dan kekerasan, pengasuhan keluarga, perlindungan kepentingan dalam pengambilan keputusan, perlakuan manusiawi, pemenuhan kebutuhan khusus, perlakuan yang sama dengan anak lain, dan pendampingan sosial. Di sekolah, hak itu diwujudkan lewat <strong>akomodasi yang layak</strong> yang dirinci dalam ${ext(L.pp13, 'PP Nomor 13 Tahun 2020')}.</p></div>

            <div class="info-box">
                <h4>Catatan istilah</h4>
                <p style="margin-bottom:0;">"Anak berkebutuhan khusus" (ABK) adalah istilah yang lazim di dunia pendidikan, sedangkan peraturan perundang-undangan memakai istilah "anak penyandang disabilitas". Artikel ini merangkum isi peraturan untuk orang tua dan guru, <strong>bukan nasihat hukum</strong>. Untuk kasus tertentu, rujuk teks resmi peraturan dan konsultasikan dengan dinas terkait atau pendamping hukum.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#dasar-hukum">Dasar hukum hak anak berkebutuhan khusus</a></li>
                    <li><a href="#hak-umum">22 hak umum penyandang disabilitas</a></li>
                    <li><a href="#hak-khusus-anak">7 hak khusus anak penyandang disabilitas</a></li>
                    <li><a href="#hak-pendidikan">Hak pendidikan dan kewajiban pemerintah</a></li>
                    <li><a href="#akomodasi">Akomodasi yang layak menurut PP 13/2020</a></li>
                    <li><a href="#unit-layanan">Unit Layanan Disabilitas</a></li>
                    <li><a href="#langkah">Langkah orang tua bila hak anak tidak dipenuhi</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="dasar-hukum">Dasar Hukum Hak Anak Berkebutuhan Khusus</h2>
            <p>Hak anak berkebutuhan khusus tidak berdiri di satu peraturan saja. Ada beberapa lapis aturan yang saling melengkapi, dan orang tua sebaiknya mengenal setidaknya empat di antaranya:</p>
            <div class="table-wrap">
            <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.95rem;">
                <thead>
                    <tr style="background:#2B3A67;color:#fff;">
                        <th ${th}>Peraturan</th>
                        <th ${th}>Isi pokok yang relevan untuk anak</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td ${td}>${ext(L.uu19, 'UU Nomor 19 Tahun 2011')}</td><td ${td}>Pengesahan Konvensi Mengenai Hak-hak Penyandang Disabilitas (CRPD) PBB, sehingga Indonesia terikat pada konvensi tersebut</td></tr>
                    <tr><td ${td}>${ext(L.uu8, 'UU Nomor 8 Tahun 2016')}</td><td ${td}>Ragam disabilitas, daftar hak penyandang disabilitas, hak khusus anak, hak pendidikan, kewajiban pemerintah di bidang pendidikan, Unit Layanan Disabilitas</td></tr>
                    <tr><td ${td}>${ext(L.pp13, 'PP Nomor 13 Tahun 2020')}</td><td ${td}>Akomodasi yang layak untuk peserta didik penyandang disabilitas: tujuan, bentuk per ragam disabilitas, fasilitasi, dan sanksi administratif</td></tr>
                    <tr><td ${tdl}>${ext(L.permen48, 'Permendikbudristek Nomor 48 Tahun 2023')}</td><td ${tdl}>Aturan pelaksana akomodasi yang layak pada PAUD formal, pendidikan dasar, menengah, dan tinggi</td></tr>
                </tbody>
            </table>
            </div>
            <p>UU 8/2016 Pasal 4 membagi ragam penyandang disabilitas menjadi empat: disabilitas fisik, intelektual, mental, dan sensorik, yang dapat dialami secara tunggal, ganda, atau multi. Pembagian ini penting karena bentuk akomodasi di sekolah disusun per ragam. Penjelasan tiap ragam ada di artikel <a href="/artikel/golongan-disabilitas-apa-saja">golongan disabilitas apa saja</a>, dan pengertian umumnya di artikel <a href="/artikel/disabilitas-adalah">disabilitas adalah</a>.</p>

            <h2 id="hak-umum">22 Hak Umum Penyandang Disabilitas</h2>
            <p>Pasal 5 ayat (1) UU 8/2016 menyebut 22 hak yang dimiliki setiap penyandang disabilitas, termasuk anak. Daftarnya: hak hidup; bebas dari stigma; privasi; keadilan dan perlindungan hukum; pendidikan; pekerjaan, kewirausahaan, dan koperasi; kesehatan; politik; keagamaan; keolahragaan; kebudayaan dan pariwisata; kesejahteraan sosial; aksesibilitas; pelayanan publik; pelindungan dari bencana; habilitasi dan rehabilitasi; konsesi; pendataan; hidup secara mandiri dan dilibatkan dalam masyarakat; berekspresi, berkomunikasi, dan memperoleh informasi; berpindah tempat dan kewarganegaraan; serta bebas dari tindakan diskriminasi, penelantaran, penyiksaan, dan eksploitasi.</p>
            <p>Beberapa hak itu sangat terasa dalam keseharian anak. <strong>Hak bebas dari stigma</strong>, menurut Pasal 7, berarti hak bebas dari pelecehan, penghinaan, dan pelabelan negatif terkait kondisi disabilitasnya. Ini relevan di sekolah, misalnya ketika anak diejek teman atau dipanggil dengan sebutan merendahkan. <strong>Hak hidup</strong> di Pasal 6 mencakup bebas dari penelantaran, pemasungan, pengurungan, dan pengucilan. Adapun <strong>hak pendataan</strong> berkaitan dengan pencatatan penyandang disabilitas oleh pemerintah, yang menjadi dasar layanan seperti <a href="/artikel/bagaimana-cara-membuat-kartu-disabilitas">kartu penyandang disabilitas</a>.</p>
${fig('budaya', 'Sekelompok anak berbaju merah muda membentuk tanda hati dengan tangan di depan pintu candi berukir', 'Hak atas kebudayaan dan pariwisata juga milik anak penyandang disabilitas: siswa dan pendamping YUKA saat kunjungan ke candi.', 936, 640)}

            <h2 id="hak-khusus-anak">7 Hak Khusus Anak Penyandang Disabilitas</h2>
            <p>Inilah bagian yang paling sering dicari orang tua. Pasal 5 ayat (3) UU 8/2016 menyatakan bahwa selain hak di ayat (1), anak penyandang disabilitas memiliki hak:</p>
            <ol>
                <li><strong>Mendapatkan pelindungan khusus</strong> dari diskriminasi, penelantaran, pelecehan, eksploitasi, serta kekerasan dan kejahatan seksual.</li>
                <li><strong>Mendapatkan perawatan dan pengasuhan keluarga</strong> atau keluarga pengganti untuk tumbuh kembang secara optimal.</li>
                <li><strong>Dilindungi kepentingannya dalam pengambilan keputusan.</strong></li>
                <li><strong>Mendapat perlakuan secara manusiawi</strong> sesuai dengan martabat dan hak anak.</li>
                <li><strong>Pemenuhan kebutuhan khusus.</strong></li>
                <li><strong>Mendapat perlakuan yang sama dengan anak lain</strong> untuk mencapai integrasi sosial dan pengembangan individu.</li>
                <li><strong>Mendapatkan pendampingan sosial.</strong></li>
            </ol>
            <p>Bagaimana hak-hak ini terlihat dalam kehidupan sehari-hari? Tabel berikut memberi contoh penerapannya. Contoh ini adalah ilustrasi kami, bukan rumusan resmi peraturan.</p>
            <div class="table-wrap">
            <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.95rem;">
                <thead>
                    <tr style="background:#2B3A67;color:#fff;">
                        <th ${th}>Hak khusus anak (Pasal 5 ayat 3)</th>
                        <th ${th}>Contoh di rumah dan di sekolah</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td ${td}>Pelindungan khusus dari diskriminasi dan kekerasan</td><td ${td}>Sekolah menindak perundungan, pengasuh tidak memakai hukuman fisik, anak diajari mengenali sentuhan yang tidak aman</td></tr>
                    <tr><td ${td}>Perawatan dan pengasuhan keluarga</td><td ${td}>Anak dibesarkan di lingkungan keluarga, bukan disembunyikan atau dititipkan tanpa alasan yang jelas</td></tr>
                    <tr><td ${td}>Kepentingan dilindungi dalam pengambilan keputusan</td><td ${td}>Pendapat anak didengar, sesuai kemampuannya, saat memilih sekolah, terapi, atau kegiatan</td></tr>
                    <tr><td ${td}>Perlakuan manusiawi sesuai martabat</td><td ${td}>Tidak dipasung, dikurung, atau dipermalukan di depan umum; dipanggil dengan namanya, bukan dengan label kondisinya</td></tr>
                    <tr><td ${td}>Pemenuhan kebutuhan khusus</td><td ${td}>Akses terapi, alat bantu, dan akomodasi belajar sesuai hasil asesmen</td></tr>
                    <tr><td ${td}>Perlakuan yang sama dengan anak lain</td><td ${td}>Ikut upacara, karya wisata, lomba, dan kegiatan kelas bersama teman-temannya</td></tr>
                    <tr><td ${tdl}>Pendampingan sosial</td><td ${tdl}>Keluarga dan anak mendapat pendampingan dari pekerja sosial atau layanan sosial saat dibutuhkan</td></tr>
                </tbody>
            </table>
            </div>
            <p>Hak atas pengasuhan keluarga juga mengingatkan bahwa keluarga butuh dukungan agar mampu mengasuh dengan baik. Peran tiap anggota keluarga dibahas di artikel <a href="/artikel/dukungan-keluarga-anak-abk">dukungan keluarga untuk anak ABK</a>, dan cara orang tua menjaga dirinya di artikel <a href="/artikel/mengelola-stres-orang-tua-anak-abk">mengelola stres orang tua anak ABK</a>.</p>

            <h2 id="hak-pendidikan">Hak Pendidikan dan Kewajiban Pemerintah</h2>
            <p>Pasal 10 UU 8/2016 merinci hak pendidikan penyandang disabilitas, yaitu hak mendapatkan pendidikan yang bermutu pada satuan pendidikan di semua jenis, jalur, dan jenjang pendidikan <strong>secara inklusif dan khusus</strong>, hak atas kesamaan kesempatan menjadi pendidik, tenaga kependidikan, atau penyelenggara pendidikan, serta hak <strong>mendapatkan akomodasi yang layak sebagai peserta didik</strong>.</p>
            <p>Hak itu diikuti kewajiban yang jelas bagi pemerintah di Pasal 40:</p>
            <ul>
                <li>Pemerintah dan pemerintah daerah wajib menyelenggarakan dan/atau memfasilitasi pendidikan untuk penyandang disabilitas di setiap jalur, jenis, dan jenjang, melalui <strong>pendidikan inklusif dan pendidikan khusus</strong> (ayat 1 dan 2).</li>
                <li>Anak penyandang disabilitas wajib diikutsertakan dalam <strong>program wajib belajar 12 tahun</strong> (ayat 3).</li>
                <li>Pemerintah daerah wajib <strong>mengutamakan anak penyandang disabilitas bersekolah di lokasi yang dekat tempat tinggalnya</strong> (ayat 4).</li>
                <li>Penyandang disabilitas yang tidak berpendidikan formal difasilitasi untuk mendapatkan ijazah pendidikan dasar dan menengah melalui <strong>program kesetaraan</strong> (ayat 5).</li>
                <li>Pemerintah wajib menyediakan <strong>beasiswa</strong> bagi peserta didik penyandang disabilitas berprestasi yang orang tuanya tidak mampu, dan biaya pendidikan bagi anak dari penyandang disabilitas yang tidak mampu (ayat 6 dan 7).</li>
            </ul>
            <p>Pasal 41 menambahkan kewajiban memfasilitasi keterampilan dasar untuk kemandirian dan partisipasi penuh, antara lain membaca dan menulis huruf braille bagi penyandang disabilitas netra, orientasi dan mobilitas, komunikasi augmentatif dan alternatif, serta bahasa isyarat bagi komunitas penyandang disabilitas rungu (lihat artikel <a href="/artikel/bahasa-isyarat-tuna-rungu">bahasa isyarat tuna rungu</a>).</p>
            <p>Pilihan antara pendidikan inklusif dan khusus dibahas di artikel <a href="/artikel/apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a> dan artikel <a href="/artikel/anak-abk-harus-sekolah-dimana">anak ABK harus sekolah di mana</a>. Soal kesetaraan ijazah, baca <a href="/artikel/ijazah-slb-setara-apa">ijazah SLB setara apa</a>.</p>
${fig('belajar', 'Seorang guru dan beberapa siswa duduk di lantai dengan meja lipat di depan papan bertuliskan Taruna Imani', 'Kegiatan belajar di Sekolah Inklusi Taruna Imani YUKA: hak pendidikan berarti setiap anak mendapat tempat dan dukungan untuk belajar.', 1200, 750)}

            <h2 id="akomodasi">Akomodasi yang Layak Menurut PP 13/2020</h2>
            <p>${ext(L.pp13, 'PP 13/2020')} menyatakan penyediaan akomodasi yang layak di bidang pendidikan bertujuan menjamin terselenggaranya dan/atau terfasilitasinya pendidikan untuk peserta didik penyandang disabilitas, dan dilakukan di semua jalur, jenjang, dan jenis pendidikan, baik secara inklusif maupun khusus (Pasal 2). Pemerintah pusat dan daerah wajib memfasilitasi lembaga penyelenggara pendidikan dalam menyediakannya (Pasal 3).</p>
            <p>Bentuk akomodasi disediakan berdasarkan ragam disabilitas (Pasal 10). Sebagai contoh, untuk peserta didik penyandang disabilitas intelektual, Pasal 12 menyebut antara lain:</p>
            <ul>
                <li>afirmasi seleksi masuk sesuai kondisi anak berdasarkan keterangan dokter dan/atau dokter spesialis;</li>
                <li>fleksibilitas proses pembelajaran, bentuk materi, perumusan kompetensi lulusan, serta evaluasi dan penilaian;</li>
                <li>penyesuaian rasio jumlah guru dengan jumlah peserta didik penyandang disabilitas intelektual di kelas;</li>
                <li>capaian pembelajaran yang disesuaikan dengan kemampuan masing-masing anak;</li>
                <li>pengajaran keterampilan hidup sehari-hari, baik keterampilan domestik, berinteraksi di masyarakat, maupun di tempat berkarya;</li>
                <li>fleksibilitas waktu penyelesaian tugas dan masa studi;</li>
                <li>ruang untuk melepas ketegangan atau ruang relaksasi;</li>
                <li>ijazah atau sertifikat kompetensi yang menginformasikan capaian kemampuan anak dalam bentuk deskriptif dan angka.</li>
            </ul>
            <p>Untuk ragam lain, misalnya disabilitas rungu dan wicara (Pasal 15), bentuknya mencakup komunikasi dan instruksi dengan cara yang sesuai pilihan anak, pendampingan juru bahasa isyarat atau juru catat bila guru tidak dapat berbahasa isyarat, serta posisi duduk yang fleksibel dengan guru menghadap ke anak saat menjelaskan materi.</p>
            <p>PP 13/2020 juga mengatur siapa yang menetapkan ragam disabilitas: <strong>tenaga medis, yaitu dokter dan/atau dokter spesialis</strong>, yang dapat disediakan oleh sekolah penyelenggara pendidikan inklusif, Unit Layanan Disabilitas, atau orang tua/wali. Karena itu, simpan baik-baik hasil pemeriksaan anak. Di tingkat sekolah, akomodasi yang disepakati sebaiknya dituangkan dalam <a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual (PPI)</a>, termasuk penyesuaian ujian seperti dibahas di artikel <a href="/artikel/adaptasi-soal-ujian-untuk-anak-abk">adaptasi soal ujian untuk anak ABK</a>. Contoh penerapan di kelas untuk anak autis ada di artikel <a href="/artikel/strategi-mengajar-anak-autis-di-kelas">strategi mengajar anak autis di kelas</a>.</p>
${fig('keterampilan', 'Beberapa anak bertopi kain biru dan bercelemek duduk menghadap meja kayu rendah di sebuah pendopo', 'Pengajaran keterampilan hidup sehari-hari, seperti memasak, termasuk bentuk akomodasi yang disebut PP 13/2020 untuk peserta didik penyandang disabilitas intelektual.', 606, 480)}

            <h2 id="unit-layanan">Unit Layanan Disabilitas</h2>
            <p>Banyak orang tua belum mengenal Unit Layanan Disabilitas (ULD). Pasal 42 UU 8/2016 mewajibkan pemerintah daerah memfasilitasi pembentukan ULD untuk mendukung penyelenggaraan pendidikan inklusif tingkat dasar dan menengah. Fungsinya antara lain:</p>
            <ul>
                <li>meningkatkan kompetensi pendidik dan tenaga kependidikan di sekolah reguler dalam menangani peserta didik penyandang disabilitas;</li>
                <li>menyediakan pendampingan kepada peserta didik penyandang disabilitas untuk mendukung kelancaran pembelajaran;</li>
                <li>mengembangkan program kompensatorik;</li>
                <li>menyediakan media pembelajaran dan alat bantu yang diperlukan;</li>
                <li>melakukan deteksi dini dan intervensi dini bagi peserta didik dan calon peserta didik penyandang disabilitas;</li>
                <li>menyediakan data dan informasi tentang disabilitas, serta layanan konsultasi.</li>
            </ul>
            <p>Bila di daerah Anda sudah ada ULD pendidikan, unit ini bisa menjadi tempat bertanya tentang akomodasi, guru pendamping, atau rujukan asesmen. Di sekolah inklusi, peran pendampingan sehari-hari biasanya dijalankan oleh <a href="/artikel/gpk-adalah">guru pembimbing khusus (GPK)</a>. Pentingnya deteksi dan penanganan sejak awal dibahas di artikel <a href="/artikel/intervensi-dini">intervensi dini</a>.</p>

            <h2 id="langkah">Langkah Orang Tua Bila Hak Anak Tidak Dipenuhi</h2>
            <p>Hak yang tertulis di peraturan tidak selalu otomatis terwujud. Bila anak ditolak sekolah, tidak mendapat akomodasi, atau mengalami perundungan yang dibiarkan, langkah berikut bisa ditempuh secara bertahap:</p>
            <ol>
                <li><strong>Kumpulkan dokumen.</strong> Hasil asesmen atau keterangan dokter, rapor, catatan komunikasi dengan sekolah, dan bukti kejadian.</li>
                <li><strong>Ajak sekolah berdialog.</strong> Minta pertemuan dengan kepala sekolah dan guru. Sampaikan kebutuhan anak secara spesifik dan rujuk pasal yang relevan, misalnya Pasal 10 UU 8/2016 tentang hak atas akomodasi yang layak.</li>
                <li><strong>Ajukan permintaan tertulis</strong> bila dialog belum menghasilkan kesepakatan, dan minta jawaban tertulis pula.</li>
                <li><strong>Sampaikan ke dinas pendidikan</strong> kabupaten/kota atau provinsi sesuai kewenangannya, atau ke kantor kementerian agama untuk madrasah. PP 13/2020 Pasal 38 mengatur sanksi administratif berupa teguran tertulis, penghentian kegiatan pendidikan, pembekuan izin, sampai pencabutan izin bagi lembaga yang sudah mendapat fasilitasi akomodasi tetapi tidak melaksanakan kewajibannya.</li>
                <li><strong>Gunakan jalur pengaduan pelayanan publik</strong> atau pendampingan dari organisasi penyandang disabilitas dan lembaga bantuan hukum bila masalah tidak selesai.</li>
            </ol>
            <p>Dalam semua langkah, utamakan kepentingan terbaik anak. Kadang sekolah memang belum siap, dan solusi terbaik adalah bekerja sama memperbaiki layanan; kadang pindah ke sekolah yang lebih siap justru lebih melindungi anak. Bila orang tua masih dalam tahap awal menerima kondisi anak, artikel <a href="/artikel/menerima-diagnosis-anak-abk">menerima diagnosis anak ABK</a> bisa membantu.</p>

            <div class="story-highlight">
                <h3>YUKA dan pemenuhan hak anak</h3>
                <p style="margin-bottom:0;">Yayasan Ukhuwah Kaffah Amanatullah (YUKA) mengelola Sekolah Inklusi Taruna Imani di Yogyakarta, tempat anak berkebutuhan khusus belajar dan berkegiatan bersama teman sebayanya. Untuk mengenal program kami, kunjungi halaman <a href="/program">program YUKA</a> atau hubungi tim melalui halaman <a href="/kontak">kontak</a>. Dukungan Anda lewat halaman <a href="/donasi">donasi</a> membantu lebih banyak anak mendapatkan haknya atas pendidikan. Gambaran biaya layanan terapi ada di artikel <a href="/artikel/berapa-biaya-terapi-anak-berkebutuhan-khusus">berapa biaya terapi anak berkebutuhan khusus</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/golongan-disabilitas-apa-saja">Golongan Disabilitas Apa Saja</a></h4>
                    <p>Empat ragam disabilitas menurut UU 8/2016.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/anak-abk-harus-sekolah-dimana">Anak ABK Harus Sekolah di Mana</a></h4>
                    <p>Memilih sekolah inklusi, SLB, atau jalur lain.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/penyandang-disabilitas">Penyandang Disabilitas</a></h4>
                    <p>Hak, kartu disabilitas, dan program pemerintah.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#HakAnak</a>
            <a href="#">#AnakBerkebutuhanKhusus</a>
            <a href="#">#UU8Tahun2016</a>
            <a href="#">#PendidikanInklusif</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.uu8, '<strong>Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas</strong> (JDIH BPK)')}</li>
              <li>${ext(L.pp13, '<strong>Peraturan Pemerintah Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</strong> (JDIH BPK)')}</li>
              <li>${ext(L.uu19, '<strong>Undang-Undang Nomor 19 Tahun 2011 tentang Pengesahan Convention on the Rights of Persons with Disabilities</strong> (JDIH BPK)')}</li>
              <li>${ext(L.permen48, '<strong>Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</strong> (JDIH Kemendikdasmen)')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini merangkum peraturan untuk edukasi umum, <strong>bukan nasihat hukum</strong>. Kutipan pasal diringkas dari teks resmi yang dicek pada 2 Oktober 2026; peraturan dapat berubah atau ditafsirkan berbeda oleh putusan pengadilan. Untuk kasus tertentu, rujuk teks lengkap peraturan dan instansi yang berwenang.
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

if (/[—–]/.test(html.replace(STYLE, ''))) throw new Error('em/en dash found in output');

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

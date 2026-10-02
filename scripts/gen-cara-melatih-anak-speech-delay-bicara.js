#!/usr/bin/env node
'use strict';

// One-time generator for artikel/cara-melatih-anak-speech-delay-bicara.html (catchup 2026-10-02, kartu 4Z38ER7Z).
// Skeleton from gen-latihan-fisioterapi-anak-di-rumah.js. Card image (papan nama dekorasi) rejected as off-topic;
// hero = crop of YUKA documentation photo 21-jan-2026-keluarga-belajar-bersama-dirumah-003 (hands, picture book, folding desk), no faces. No AI images.
// Claims checked 2026-10-02, evidence text saved in data/sumber/cara-melatih-anak-speech-delay-bicara/:
// PubMed 21478280 (Roberts & Kaiser 2011), 31107508 (Roberts dkk. 2019), AAP HealthyChildren Language Delay,
// ASHA tips + Practice Portal Late Language Emergence, NIDCD speech and language, WHO under-5 guideline 2019, CDC milestones 18 bulan + 3 tahun.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'cara-melatih-anak-speech-delay-bicara';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Cara Melatih Anak Speech Delay Bicara di Rumah | YUKA';
const META_DESC = 'Cara melatih anak speech delay bicara di rumah: 10 teknik stimulasi berbasis bukti per usia, contoh kalimat, dan tanda kapan harus ke dokter. Baca di sini.';
const OG_TITLE = 'Cara Melatih Anak Speech Delay Bicara: 10 Teknik di Rumah';
const OG_DESC = 'Panduan orang tua melatih anak speech delay bicara lewat kegiatan sehari-hari: teknik yang didukung penelitian, contoh kalimat per usia, dan tanda bahaya.';
const H1 = 'Cara Melatih Anak Speech Delay Bicara: 10 Teknik Stimulasi di Rumah yang Didukung Bukti';
const IMAGE = 'Dokumentasi/artikel/cara-melatih-anak-speech-delay-bicara-buku-bergambar.webp';
const IMAGE_ALT = 'Tangan memegang buku bergambar berwarna hijau di atas meja lipat saat kegiatan belajar di rumah';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-10-02T10:30:00+07:00';
const DATE_MODIFIED = '2026-10-02T10:30:00+07:00';
const DATE_DISPLAY = '2 Oktober 2026';
const META_KW = 'cara melatih anak speech delay bicara, stimulasi bicara anak, anak terlambat bicara, speech delay, terapi wicara, YUKA';
const CRUMB = 'Cara Melatih Anak Speech Delay Bicara';
const CAPTION = 'Buku bergambar dan meja kecil sudah cukup untuk memulai latihan bicara di rumah. <span class="kredit">Foto: dokumentasi YUKA Indonesia</span>';
const SHARE_TXT = 'Cara%20Melatih%20Anak%20Speech%20Delay%20Bicara';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  roberts2011: 'https://pubmed.ncbi.nlm.nih.gov/21478280/',
  roberts2019: 'https://pubmed.ncbi.nlm.nih.gov/31107508/',
  aap: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Language-Delay.aspx',
  ashaTips: 'https://www.asha.org/public/speech/development/activities-to-encourage-speech-and-language-development/',
  ashaLle: 'https://www.asha.org/practice-portal/clinical-topics/late-language-emergence/',
  nidcd: 'https://www.nidcd.nih.gov/health/speech-and-language',
  who: 'https://www.who.int/news/item/24-04-2019-to-grow-up-healthy-children-need-to-sit-less-and-play-more',
  cdc18: 'https://www.cdc.gov/act-early/milestones/18-months.html',
  cdc3: 'https://www.cdc.gov/act-early/milestones/3-years.html'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Bagaimana cara melatih anak speech delay bicara di rumah?',
    a: 'Latih lewat kegiatan sehari-hari, bukan sesi hafalan. Bicarakan apa yang sedang Anda dan anak lakukan, tirukan lalu tambahkan satu atau dua kata pada ucapan anak, beri pilihan, beri jeda agar anak sempat merespons, bacakan buku bergambar, dan kurangi layar. Penelitian menunjukkan strategi seperti ini efektif bila dijalankan orang tua secara konsisten, terutama setelah dilatih terapis wicara.'
  },
  {
    q: 'Berapa lama anak speech delay bisa mulai bicara setelah dilatih?',
    a: 'Tidak ada angka pasti. Kecepatannya bergantung pada penyebab, usia, kemampuan memahami bahasa, dan konsistensi latihan. Sebagian anak dengan keterlambatan sederhana menyusul, sedangkan anak dengan penyebab lain seperti gangguan pendengaran atau autisme membutuhkan penanganan khusus. Diskusikan target yang realistis dengan terapis wicara yang memeriksa anak.'
  },
  {
    q: 'Apakah anak speech delay harus terapi wicara atau cukup dilatih orang tua?',
    a: 'Menurut ASHA, bila tidak ada keterlambatan atau gangguan lain, anak biasanya cukup dipantau berkala sambil distimulasi di rumah dengan arahan terapis. Bila keterlambatan menetap atau disertai masalah lain seperti gangguan pendengaran, disabilitas intelektual, atau autisme, anak membutuhkan terapi wicara langsung. Pemeriksaan dokter dan terapis yang menentukan.'
  },
  {
    q: 'Apakah boleh memakai video atau gawai untuk melatih anak bicara?',
    a: 'Untuk anak di bawah 2 tahun, WHO dan CDC tidak menganjurkan waktu layar selain panggilan video dengan keluarga. Anak usia 2 tahun sebaiknya tidak lebih dari 1 jam per hari. Anak belajar bicara dari interaksi langsung, jadi video tidak bisa menggantikan percakapan dengan orang tua.'
  },
  {
    q: 'Apakah anak harus dicek pendengarannya?',
    a: 'Ya, sebaiknya. AAP dan NIDCD menyebutkan tes pendengaran sering menjadi bagian dari evaluasi anak yang terlambat bicara, karena masalah pendengaran bisa mengganggu perkembangan bicara dan bahasa. Mintalah rujukan ke dokter anak atau dokter THT.'
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
  keywords: 'cara melatih anak speech delay bicara, stimulasi bicara anak, anak terlambat bicara, speech delay, terapi wicara, parent-implemented intervention',
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
    ${STYLE.replace('</style>', `        .article-featured-image { margin: -2rem auto 2rem; max-width: 620px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
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
                <span>12 menit baca</span>
                <span>Tim YUKA</span>
            </div>
        </div>
    </header>

    <div class="container">
        <figure class="article-featured-image">
            <img src="../${IMAGE}" alt="${IMAGE_ALT}" width="620" height="400" fetchpriority="high" decoding="async">
            <figcaption>${CAPTION}</figcaption>
        </figure>
    </div>
    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> cara melatih anak speech delay bicara yang paling didukung bukti adalah <strong>stimulasi bahasa oleh orang tua di tengah kegiatan sehari-hari</strong>: mengikuti minat anak, membicarakan apa yang sedang dilakukan, menirukan lalu menambah kata pada ucapan anak, memberi pilihan, memberi jeda menunggu respons, membaca buku bergambar bersama, dan mengurangi layar. Dua meta-analisis (Roberts dan Kaiser, 2011; Roberts dan rekan, 2019) menemukan intervensi yang dijalankan orang tua berdampak positif pada kemampuan bahasa anak. Latihan di rumah melengkapi, bukan menggantikan, pemeriksaan dokter, tes pendengaran, dan terapi wicara bila dibutuhkan.</p></div>

            <div class="info-box">
                <h4>Baca dulu sebelum mulai</h4>
                <p style="margin-bottom:0;">Artikel ini informasi umum, <strong>bukan pengganti pemeriksaan dokter anak atau terapis wicara</strong>. Keterlambatan bicara bisa menjadi tanda masalah lain, seperti gangguan pendengaran atau autisme, yang perlu diperiksa sejak dini. Bila anak Anda terlambat bicara, periksakan dulu, lalu gunakan teknik di bawah sebagai latihan harian sesuai arahan terapis.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#sebelum-melatih">Sebelum melatih: pastikan penyebabnya diperiksa</a></li>
                    <li><a href="#bukti">Apa kata penelitian tentang latihan oleh orang tua</a></li>
                    <li><a href="#teknik">10 teknik melatih anak speech delay bicara</a></li>
                    <li><a href="#per-usia">Contoh latihan menurut usia</a></li>
                    <li><a href="#rutinitas">Menyelipkan latihan ke rutinitas harian</a></li>
                    <li><a href="#hindari">Yang sebaiknya dihindari</a></li>
                    <li><a href="#kapan-ke-dokter">Kapan harus ke dokter atau terapis</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="sebelum-melatih">Sebelum Melatih: Pastikan Penyebabnya Diperiksa</h2>
            <p>Speech delay (keterlambatan bicara) adalah kondisi ketika anak mulai berbicara atau menggunakan kata lebih lambat dari anak seusianya. Menurut ${ext(L.aap, 'American Academy of Pediatrics (AAP)')}, keterlambatan bahasa adalah jenis keterlambatan perkembangan yang paling sering, dan sekitar 1 dari 5 anak belajar bicara lebih lambat daripada teman sebayanya. Penjelasan lengkap tentang pengertian, penyebab, dan tandanya ada di artikel <a href="/artikel/speech-delay-adalah">speech delay adalah</a>.</p>
            <p>AAP juga menjelaskan bahwa keterlambatan bicara sederhana kadang bersifat sementara dan bisa membaik sendiri atau dengan sedikit bantuan keluarga. Namun keterlambatan juga bisa menjadi tanda masalah lain, misalnya <a href="/artikel/tuna-rungu-wicara-adalah">gangguan pendengaran</a>, keterlambatan perkembangan di area lain, atau <a href="/artikel/autisme-adalah">gangguan spektrum autisme</a>. Karena itu, langkah pertama melatih anak bicara justru <strong>memeriksakan anak</strong>. Dokter dapat meminta tes pendengaran dan merujuk ke terapis wicara untuk menilai kemampuan bicara (bahasa ekspresif) dan pemahaman anak (bahasa reseptif). ${ext(L.nidcd, 'NIDCD')} menambahkan bahwa tes pendengaran sering menjadi bagian dari evaluasi, karena masalah pendengaran bisa mengganggu perkembangan bicara dan bahasa.</p>
            <p>Hasil pemeriksaan menentukan bentuk bantuan. Menurut ${ext(L.ashaLle, 'ASHA (American Speech-Language-Hearing Association)')}, bila tidak ada keterlambatan atau disabilitas lain, penanganan yang umum adalah pemantauan berkala, atau pemantauan disertai stimulasi bahasa tidak langsung, yaitu kegiatan yang dijalankan orang tua dengan contoh dari terapis. Bila keterlambatan menetap atau disertai kondisi lain seperti disabilitas intelektual, autisme, atau gangguan pendengaran, anak membutuhkan terapi wicara langsung.</p>

            <h2 id="bukti">Apa Kata Penelitian tentang Latihan oleh Orang Tua</h2>
            <p>Orang tua adalah lawan bicara yang paling sering ditemui anak, sehingga perannya besar. Dua tinjauan penelitian mendukung hal ini:</p>
            <ul>
                <li><strong>Roberts dan Kaiser (2011)</strong> menganalisis 18 penelitian tentang intervensi bahasa yang dijalankan orang tua pada anak usia 18 sampai 60 bulan dengan gangguan bahasa. Hasilnya, intervensi oleh orang tua berdampak positif dan bermakna pada kemampuan bahasa reseptif dan ekspresif anak, baik pada anak dengan maupun tanpa disabilitas intelektual (${ext(L.roberts2011, 'Roberts dan Kaiser, 2011')}).</li>
                <li><strong>Roberts dan rekan (2019)</strong> merangkum 76 penelitian dengan total 5.848 peserta. Pelatihan orang tua berkaitan dengan perbaikan komunikasi dan bahasa anak dengan efek sedang, dan berkaitan kuat dengan meningkatnya penggunaan strategi pendukung bahasa oleh orang tua. Sebagian besar program memakai pendekatan pengajaran alami (naturalistic teaching) dalam kegiatan sehari-hari, sisanya memakai pembacaan buku dialogis (${ext(L.roberts2019, 'Roberts dkk., 2019')}).</li>
            </ul>
            <p>Pesan pentingnya: yang diteliti adalah orang tua yang <strong>dilatih</strong> menggunakan strategi tertentu, biasanya oleh terapis. Jadi teknik di bawah paling efektif bila Anda juga meminta terapis wicara mencontohkan dan memberi umpan balik. Salah satu program pelatihan orang tua yang terkenal dibahas di artikel <a href="/artikel/hanen-approach-terapi-bahasa-anak">Hanen approach</a>.</p>

            <h2 id="teknik">10 Teknik Melatih Anak Speech Delay Bicara</h2>
            <p>Teknik berikut diambil dari gaya interaksi yang menurut ${ext(L.ashaLle, 'ASHA')} merangsang kemampuan bahasa anak, yaitu merespons langsung upaya komunikasi anak, memberi contoh ucapan, memberi contoh isyarat seperti menunjuk dan kontak mata, menirukan atau memperluas tindakan dan kata anak, menghargai setiap upaya komunikasi, dan memberi anak cukup waktu untuk memulai serta merespons. Contoh kegiatan lainnya mengikuti ${ext(L.ashaTips, 'panduan ASHA untuk orang tua')} dan ${ext(L.cdc18, 'CDC')}.</p>

            <h3>1. Sejajarkan posisi dan ikuti minat anak</h3>
            <p>Duduk atau jongkok setinggi mata anak, lalu bermain dengan apa yang sedang ia minati. CDC menganjurkan berbicara sambil menghadap anak dan menyejajarkan posisi dengan matanya. Anak lebih mudah memperhatikan wajah dan mulut Anda, dan lebih termotivasi bicara tentang hal yang ia sukai.</p>

            <h3>2. Ceritakan apa yang sedang dilakukan (self-talk dan parallel talk)</h3>
            <p>Bicarakan kegiatan Anda ("Ibu potong pisang. Pisangnya kuning.") dan kegiatan anak ("Adik dorong mobil. Mobilnya jalan, brum!"). ASHA menyarankan orang tua berbicara saat memandikan, menyuapi, dan memakaikan baju anak. Gunakan kalimat pendek dan jelas, sedikit di atas kemampuan anak.</p>

            <h3>3. Tirukan, lalu tambahkan satu atau dua kata (ekspansi)</h3>
            <p>Bila anak berkata "susu", jawab "Susu. Minum susu." Bila ia berkata "mau jus", jawab "Mau jus? Ini jus. Jus jeruk." Contoh seperti ini ada di panduan ASHA untuk usia 2 sampai 4 tahun, dan CDC menyarankan hal serupa untuk anak 3 tahun: ulangi ucapan anak lalu contohkan kalimat yang lebih lengkap. Jangan meminta anak mengulang; cukup berikan contohnya.</p>

            <h3>4. Beri pilihan</h3>
            <p>Tanyakan "Mau apel atau jeruk?" sambil menunjukkan keduanya. Menurut ASHA, pilihan membantu anak menyampaikan keinginannya dan memahami bahwa kata-katanya punya kekuatan. Bila anak hanya menunjuk, sebutkan kata yang ia maksud ("Jeruk. Kamu mau jeruk."), lalu berikan.</p>

            <h3>5. Beri jeda dan tunggu</h3>
            <p>Setelah bertanya atau berhenti di tengah lagu, diam beberapa detik sambil menatap anak dengan wajah menunggu. ASHA menyebut pemberian waktu yang cukup bagi anak untuk memulai dan merespons sebagai bagian dari gaya interaksi yang merangsang bahasa. Banyak orang tua tanpa sadar langsung menjawab sendiri, sehingga anak tidak pernah mendapat giliran.</p>

            <h3>6. Hargai semua bentuk komunikasi</h3>
            <p>Tunjukan, gerakan, ekspresi, dan bunyi adalah awal bahasa. AAP menganjurkan orang tua mendorong anak "berbicara" lewat isyarat atau bunyi. Respons setiap upaya itu dengan antusias dan berikan kata yang tepat. ASHA juga mendorong komunikasi multimodal (bicara, isyarat, tanda, dan gambar) sebagai bagian dari stimulasi.</p>

            <h3>7. Baca buku bergambar bersama</h3>
            <p>Tidak perlu membaca setiap kata. ASHA menyarankan membicarakan gambar, memilih buku dengan gambar besar dan berwarna, dan bertanya "Ini apa?" agar anak menunjuk atau menyebut nama benda. Untuk anak yang lebih besar, CDC menyarankan pertanyaan seperti "Apa yang terjadi di gambar ini?" dan "Menurutmu, nanti bagaimana?". Pembacaan buku dialogis termasuk pendekatan yang diteliti dalam meta-analisis Roberts dan rekan (2019).</p>

            <h3>8. Bernyanyi dan bermain bunyi</h3>
            <p>Lagu dan sajak membantu anak mempelajari irama bicara (ASHA). Gunakan lagu anak berbahasa Indonesia yang ada gerakannya, lalu berhenti sebelum kata terakhir dan tunggu anak melengkapinya. Mainkan bunyi hewan dan kendaraan ("Kucing bilang meong"), karena bunyi seperti ini sering lebih mudah ditirukan daripada kata.</p>

            <h3>9. Ciptakan kesempatan untuk meminta</h3>
            <p>Letakkan mainan favorit di tempat yang terlihat tetapi tidak terjangkau, berikan wadah yang sulit dibuka, atau berikan biskuit sepotong demi sepotong. Situasi ini mengundang anak berkomunikasi untuk meminta. Begitu anak menunjuk atau bersuara, beri contoh katanya ("Buka. Tolong buka.") lalu penuhi permintaannya. Jangan menahan sampai anak frustrasi.</p>

            <h3>10. Kurangi layar dan matikan televisi di latar</h3>
            <p>Pedoman ${ext(L.who, 'WHO tahun 2019')} tidak menganjurkan waktu layar untuk bayi dan anak usia 1 tahun, dan membatasi anak 2 tahun maksimal 1 jam per hari, dengan anjuran membaca dan bercerita bersama pengasuh saat anak duduk diam. CDC menegaskan anak belajar dengan berbicara, bermain, dan berinteraksi, dan menyarankan orang tua juga membatasi gawainya sendiri saat bersama anak agar bisa menanggapi kata dan tindakannya.</p>

            <h2 id="per-usia">Contoh Latihan Menurut Usia</h2>
            <p>Tabel ini merangkum contoh dari ${ext(L.ashaTips, 'ASHA')} dan ${ext(L.cdc3, 'CDC')}. Untuk anak speech delay, mulailah dari kemampuan anak saat ini, bukan dari usianya. Patokan perkembangan bicara awal bisa dilihat di artikel <a href="/artikel/babbling-dan-cooing-tahap-perkembangan-bahasa">babbling dan cooing</a>.</p>
            <div class="table-wrap">
            <table style="width:100%;border-collapse:collapse;margin:1.5rem 0;font-size:0.95rem;">
                <thead>
                    <tr style="background:#2B3A67;color:#fff;">
                        <th style="padding:0.75rem;text-align:left;">Tahap kemampuan</th>
                        <th style="padding:0.75rem;text-align:left;">Fokus latihan</th>
                        <th style="padding:0.75rem;text-align:left;">Contoh kegiatan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td ${td}>Belum ada kata (masih bunyi dan isyarat)</td><td ${td}>Kontak mata, meniru, bergantian</td><td ${td}>Tirukan bunyi anak seperti bercakap-cakap, main ciluk ba, tepuk tangan, lambaikan tangan, ucapkan suku kata sederhana seperti "ba" dan "ma"</td></tr>
                    <tr><td ${td}>Beberapa kata tunggal</td><td ${td}>Menambah kosakata benda dan kegiatan</td><td ${td}>Tanya "Ini apa?" saat membaca buku, sebut nama bagian tubuh, ekspansi satu kata menjadi dua kata ("Bola. Bola merah.")</td></tr>
                    <tr><td ${td}>Gabungan dua kata</td><td ${td}>Kalimat lebih panjang, pertanyaan</td><td ${td}>Beri pilihan, main tebak ya atau tidak ("Kucing bisa terbang?"), kotak berisi benda yang dikenal lalu anak menyebut nama dan kegunaannya</td></tr>
                    <tr><td style="padding:0.75rem;vertical-align:top;">Kalimat pendek</td><td style="padding:0.75rem;vertical-align:top;">Bercerita, mengikuti instruksi</td><td style="padding:0.75rem;vertical-align:top;">Instruksi dua langkah ("Ambil sepatu, lalu bawa ke sini."), bercerita dari foto keluarga, main boneka atau rumah-rumahan, memasak bersama sambil membicarakan urutannya</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sebagai gambaran, AAP menyebutkan pada usia 2 tahun sebagian besar anak sudah dapat mengucapkan sekitar 50 sampai 100 kata dan beberapa frasa dua kata. Anak yang jauh di bawah patokan ini perlu diperiksakan, bukan sekadar ditunggu.</p>
            <p>Bila di rumah dipakai lebih dari satu bahasa, misalnya bahasa Indonesia dan bahasa Jawa, ASHA mendorong orang tua menstimulasi anak dalam bahasa apa pun yang dipakai di rumah. Saat pemeriksaan, sampaikan kepada terapis bahasa apa saja yang anak dengar, karena menurut ASHA penilaian anak bilingual perlu mencakup semua bahasanya.</p>

            <h2 id="rutinitas">Menyelipkan Latihan ke Rutinitas Harian</h2>
            <p>Orang tua yang bekerja tidak harus menyediakan jam khusus. Latihan paling alami justru terjadi di kegiatan yang memang berulang setiap hari:</p>
            <ul>
                <li><strong>Mandi:</strong> sebut bagian tubuh yang dibasuh ("Cuci tangan. Cuci kaki."), mainkan bunyi air.</li>
                <li><strong>Makan:</strong> beri pilihan lauk atau buah, sebut rasa dan warna ("Manis. Pisang manis.").</li>
                <li><strong>Berpakaian:</strong> beri pilihan baju, sebut warna dan urutan ("Kaos dulu, lalu celana.").</li>
                <li><strong>Di jalan atau di pasar:</strong> bicarakan yang terlihat ("Ada motor. Motornya cepat."), ajak menghitung belanjaan.</li>
                <li><strong>Sebelum tidur:</strong> satu atau dua buku bergambar, lalu ceritakan ulang kegiatan hari itu.</li>
            </ul>
            <p>Libatkan juga ayah, kakek, nenek, atau pengasuh agar semua orang memakai cara yang sama. Peran keluarga dibahas lebih lanjut di artikel <a href="/artikel/dukungan-keluarga-anak-abk">dukungan keluarga untuk anak ABK</a>.</p>

            <h2 id="hindari">Yang Sebaiknya Dihindari</h2>
            <ul>
                <li><strong>Memaksa anak mengulang kata</strong> ("Ayo bilang 'mama'! Bilang!"). Tekanan bisa membuat anak menghindari bicara. Lebih baik beri contoh dan tunggu.</li>
                <li><strong>Mengoreksi dengan nada menyalahkan.</strong> Bila anak berkata "tutu", cukup jawab "Iya, susu" dengan pengucapan yang benar.</li>
                <li><strong>Selalu menebak dan memenuhi kebutuhan anak sebelum ia berkomunikasi.</strong> Beri kesempatan anak menyampaikan dulu, dengan cara apa pun.</li>
                <li><strong>Mengandalkan video "belajar bicara".</strong> Layar tidak bisa merespons anak seperti orang tua.</li>
                <li><strong>Menunggu "nanti juga bisa sendiri".</strong> AAP menyarankan meminta pendapat kedua bila Anda masih khawatir walau sudah dibilang tidak apa-apa.</li>
                <li><strong>Membandingkan anak dengan saudara atau tetangga.</strong> Ukur kemajuan dari kemampuan anak sendiri.</li>
            </ul>

            <h2 id="kapan-ke-dokter">Kapan Harus ke Dokter atau Terapis</h2>
            <div class="info-box">
                <p>Menurut ${ext(L.aap, 'AAP')}, sampaikan kepada dokter anak bila perkembangan anak tampak terlambat atau muncul tanda berikut:</p>
                <ul style="margin-bottom:0;">
                    <li>Anak <strong>berhenti bicara</strong> atau tidak lagi melakukan hal yang dulu bisa ia lakukan</li>
                    <li>Tidak membalas senyum dan seperti tidak menyadari kehadiran Anda</li>
                    <li>Tampak mendengar bunyi tertentu tetapi tidak menoleh saat dipanggil namanya</li>
                    <li>Seperti asyik di dunianya sendiri dan lebih suka bermain sendirian</li>
                    <li>Bisa menyebut huruf, angka, atau lirik iklan, tetapi tidak memakai kata untuk meminta sesuatu</li>
                    <li>Memakai kata yang tidak sesuai situasi atau mengulang kalimat dari televisi</li>
                </ul>
            </div>
            <p>Tanda-tanda di atas bisa berkaitan dengan autisme atau masalah perkembangan lain, sehingga penanganannya berbeda dari keterlambatan bicara biasa. Bila anak memerlukan terapi, panduan memilih terapis ada di artikel <a href="/artikel/terapis-speech-delay">terapis speech delay</a>, gambaran prosesnya di artikel <a href="/artikel/terapi-wicara">terapi wicara</a>, perkiraan biayanya di artikel <a href="/artikel/berapa-biaya-terapi-bicara-anak">berapa biaya terapi bicara anak</a>, dan pembahasan peluang anak menyusul ada di artikel <a href="/artikel/apakah-speech-delay-bisa-sembuh">apakah speech delay bisa sembuh</a>. Untuk pentingnya penanganan sejak awal, baca juga <a href="/artikel/intervensi-dini">intervensi dini</a>.</p>

            <div class="story-highlight">
                <h3>Belajar berkomunikasi bersama di YUKA</h3>
                <p style="margin-bottom:0;">Di Sekolah Inklusi Taruna Imani, anak berkebutuhan khusus belajar dan berkegiatan bersama teman-temannya, dan orang tua menjadi mitra penting dalam proses itu. Bila Anda mencari layanan terapi di sekitar Yogyakarta, artikel <a href="/artikel/tempat-terapi-anak-jogja">tempat terapi anak di Jogja</a> bisa menjadi titik awal. Untuk mengenal program kami, kunjungi halaman <a href="/program">program YUKA</a> atau hubungi tim melalui halaman <a href="/kontak">kontak</a>. Mendampingi anak setiap hari juga melelahkan; cara menjaga diri ada di artikel <a href="/artikel/mengelola-stres-orang-tua-anak-abk">mengelola stres orang tua anak ABK</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/speech-delay-adalah">Speech Delay Adalah</a></h4>
                    <p>Pengertian, penyebab, dan tanda keterlambatan bicara.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/hanen-approach-terapi-bahasa-anak">Hanen Approach</a></h4>
                    <p>Program pelatihan orang tua untuk perkembangan bahasa anak.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/perbedaan-terapi-okupasi-dan-terapi-wicara">Terapi Okupasi vs Terapi Wicara</a></h4>
                    <p>Memahami perbedaan dua terapi yang sering dibutuhkan anak.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#SpeechDelay</a>
            <a href="#">#StimulasiBicara</a>
            <a href="#">#TerapiWicara</a>
            <a href="#">#ParentingABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.roberts2011, 'Roberts MY, Kaiser AP. <strong>The effectiveness of parent-implemented language interventions: a meta-analysis.</strong> Am J Speech Lang Pathol. 2011;20(3):180-99')}</li>
              <li>${ext(L.roberts2019, 'Roberts MY, Curtis PR, Sone BJ, Hampton LH. <strong>Association of Parent Training With Child Language Development: A Systematic Review and Meta-analysis.</strong> JAMA Pediatr. 2019;173(7):671-680')}</li>
              <li>${ext(L.aap, 'American Academy of Pediatrics, HealthyChildren.org. <strong>Language Delays in Toddlers: Information for Parents</strong>')}</li>
              <li>${ext(L.ashaLle, 'American Speech-Language-Hearing Association. <strong>Late Language Emergence</strong> (Practice Portal)')}</li>
              <li>${ext(L.ashaTips, 'American Speech-Language-Hearing Association. <strong>Tips for Your Child\'s Speech and Language Development</strong>')}</li>
              <li>${ext(L.nidcd, 'National Institute on Deafness and Other Communication Disorders (NIDCD). <strong>Speech and Language Developmental Milestones</strong>')}</li>
              <li>${ext(L.who, 'World Health Organization. <strong>To grow up healthy, children need to sit less and play more</strong> (pedoman anak di bawah 5 tahun, 2019)')}</li>
              <li>${ext(L.cdc18, 'Centers for Disease Control and Prevention. <strong>Milestones by 18 Months</strong>')}</li>
              <li>${ext(L.cdc3, 'Centers for Disease Control and Prevention. <strong>Milestones by 3 Years</strong>')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum, <strong>bukan nasihat medis atau program terapi</strong>. Diagnosis dan rencana terapi bicara perlu ditetapkan oleh dokter dan terapis wicara yang memeriksa anak secara langsung. Sumber dicek pada 2 Oktober 2026.
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

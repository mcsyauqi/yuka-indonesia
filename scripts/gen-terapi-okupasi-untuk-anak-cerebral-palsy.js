#!/usr/bin/env node
'use strict';

// One-time generator for artikel/terapi-okupasi-untuk-anak-cerebral-palsy.html (catchup 2026-09-28, kartu 67nwCOxx).
// Skeleton from gen-gangguan-emosional-pada-anak-sekolah.js. Card's Candi Plaosan tourist photo rejected as off-topic.
// Hero = crop tangan saja dari Dokumentasi/cpao-anak-membuat-adonan-kue-baking-030.webp (tanpa wajah). Claims checked 2026-09-28 against: Novak dkk. 2020 PMID 32086598, Hoare dkk. Cochrane 2019 PMID 30932166,
// Eliasson dkk. 2006 MACS PMID 16780622, CDC cerebral palsy treatment page, NICE NG62 recommendations.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'terapi-okupasi-untuk-anak-cerebral-palsy';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Terapi Okupasi untuk Anak Cerebral Palsy: Panduan Orang Tua';
const META_DESC = 'Terapi okupasi untuk anak cerebral palsy: tujuan, metode yang terbukti (CIMT, latihan bimanual), dan latihan di rumah. Baca panduan lengkapnya.';
const OG_TITLE = 'Terapi Okupasi untuk Anak Cerebral Palsy: Tujuan, Metode, dan Latihan di Rumah';
const OG_DESC = 'Apa yang dikerjakan terapis okupasi untuk anak cerebral palsy, metode mana yang didukung penelitian, dan bagaimana orang tua melanjutkan latihan di rumah.';
const H1 = 'Terapi Okupasi untuk Anak Cerebral Palsy: Tujuan, Metode, dan Peran Orang Tua';
const IMAGE = 'Dokumentasi/artikel/terapi-okupasi-untuk-anak-cerebral-palsy-dokumentasi.webp';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T16:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T16:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  novak: 'https://pubmed.ncbi.nlm.nih.gov/32086598/',
  cimt: 'https://pubmed.ncbi.nlm.nih.gov/30932166/',
  macs: 'https://pubmed.ncbi.nlm.nih.gov/16780622/',
  cdc: 'https://www.cdc.gov/cerebral-palsy/treatment/index.html',
  nice: 'https://www.nice.org.uk/guidance/ng62/chapter/Recommendations'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa itu terapi okupasi untuk anak cerebral palsy?',
    a: 'Terapi okupasi adalah terapi yang membantu anak cerebral palsy melakukan kegiatan sehari-hari semandiri mungkin, seperti makan, berpakaian, menulis, dan bermain. Fokusnya pada fungsi tangan dan lengan, kemandirian merawat diri, serta penyesuaian alat dan lingkungan.'
  },
  {
    q: 'Apa bedanya terapi okupasi dengan fisioterapi untuk anak CP?',
    a: 'Fisioterapi umumnya berfokus pada gerak kasar seperti duduk, berdiri, berjalan, dan kekuatan otot. Terapi okupasi berfokus pada penggunaan gerak itu untuk kegiatan bermakna, terutama fungsi tangan, merawat diri, dan partisipasi di sekolah. Keduanya sering berjalan bersama dalam satu tim.'
  },
  {
    q: 'Metode terapi okupasi apa yang punya bukti ilmiah?',
    a: 'Tinjauan sistematis Novak dkk. (2020) menilai efektif antara lain latihan bimanual, constraint-induced movement therapy (CIMT), goal-directed training, task-specific training, dan program latihan di rumah. Tinjauan Cochrane 2019 menemukan CIMT memperbaiki fungsi tangan dibanding terapi dosis rendah, tetapi tidak lebih unggul dari terapi lain dengan dosis setara.'
  },
  {
    q: 'Apakah terapi okupasi bisa menyembuhkan cerebral palsy?',
    a: 'Tidak. Menurut CDC, cerebral palsy tidak bisa disembuhkan, tetapi deteksi dan penanganan sejak dini dapat memperbaiki kehidupan anak. Tujuan terapi okupasi adalah meningkatkan kemampuan dan kemandirian anak sesuai potensinya.'
  },
  {
    q: 'Sejak usia berapa anak CP bisa mulai terapi okupasi?',
    a: 'Sedini mungkin. CDC menyebut layanan intervensi dini bisa dimulai bahkan sebelum diagnosis CP ditegakkan. Kapan dan seberapa sering terapi dilakukan ditentukan oleh dokter rehabilitasi medik dan terapis setelah asesmen.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Terapi Okupasi untuk Anak Cerebral Palsy', item: CANONICAL }
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
  keywords: 'terapi okupasi untuk anak cerebral palsy, terapi okupasi CP, CIMT, latihan bimanual, fungsi tangan anak CP',
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
    <meta name="keywords" content="terapi okupasi untuk anak cerebral palsy, terapi okupasi CP, CIMT, latihan bimanual, YUKA">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${CANONICAL}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${CANONICAL}">
    <meta property="og:title" content="${OG_TITLE}">
    <meta property="og:description" content="${OG_DESC}">
    <meta property="og:image" content="${IMAGE_URL}">
    <meta property="og:image:alt" content="Tangan anak membentuk adonan kue berwarna jingga di atas alas silikon biru">
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
                <span class="current">Terapi Okupasi untuk Anak Cerebral Palsy</span>
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
            <img src="../${IMAGE}" alt="Tangan anak membentuk adonan kue berwarna jingga di atas alas silikon biru" width="900" height="484" fetchpriority="high" decoding="async">
            <figcaption>Kegiatan membentuk adonan di kelas memasak YUKA. Meremas, menggulung, dan menekan adonan adalah contoh kegiatan sehari-hari yang juga melatih fungsi tangan. <span class="kredit">Foto: dokumentasi YUKA Indonesia</span></figcaption>
        </figure>
    </div>
    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> terapi okupasi untuk anak cerebral palsy (CP) membantu anak melakukan kegiatan sehari-hari semandiri mungkin, terutama yang memakai tangan: makan, berpakaian, menulis, dan bermain. Metode yang didukung penelitian antara lain latihan bimanual, constraint-induced movement therapy (CIMT), goal-directed training, dan program latihan di rumah. Terapi tidak menyembuhkan CP, tetapi dapat meningkatkan kemampuan dan partisipasi anak.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum untuk orang tua, guru, dan pendamping, <strong>bukan saran medis dan bukan pengganti asesmen</strong>. Jenis, intensitas, dan lama terapi untuk anak Anda harus ditentukan oleh dokter spesialis kedokteran fisik dan rehabilitasi serta terapis okupasi yang memeriksa anak secara langsung.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu terapi okupasi untuk anak CP?</a></li>
                    <li><a href="#mengapa">Mengapa anak CP membutuhkannya?</a></li>
                    <li><a href="#tujuan">Tujuan terapi okupasi</a></li>
                    <li><a href="#asesmen">Asesmen: dari mana terapis mulai</a></li>
                    <li><a href="#metode">Metode yang didukung penelitian</a></li>
                    <li><a href="#tipe">Penyesuaian menurut tipe CP</a></li>
                    <li><a href="#alat">Alat bantu dan penyesuaian lingkungan</a></li>
                    <li><a href="#rumah">Latihan di rumah</a></li>
                    <li><a href="#sekolah">Terapi okupasi dan sekolah</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Terapi Okupasi untuk Anak Cerebral Palsy?</h2>
            <p>Kata "okupasi" di sini berarti kegiatan yang mengisi hari seseorang. Bagi anak, kegiatan itu adalah bermain, makan, mandi, berpakaian, belajar, dan bergaul. Terapi okupasi membantu anak melakukan kegiatan-kegiatan tersebut sebaik dan semandiri mungkin.</p>
            <p>Pada anak dengan <a href="/artikel/cerebral-palsy-adalah">cerebral palsy</a>, gangguan kontrol gerak dan tonus otot membuat banyak kegiatan sederhana terasa sulit: menggenggam sendok, mengancingkan baju, memegang pensil, atau memakai kedua tangan bersamaan. Terapis okupasi melatih keterampilan itu, mengajarkan cara lain untuk mencapai tujuan yang sama, dan menyesuaikan alat atau lingkungan supaya anak bisa ikut serta. Penjelasan umum tentang terapi ini ada di artikel <a href="/artikel/terapi-okupasi">terapi okupasi</a>.</p>
            <p>CDC mencantumkan terapi okupasi, fisioterapi, dan terapi wicara di antara layanan yang umum dibutuhkan anak dengan CP, dan menegaskan bahwa CP tidak bisa disembuhkan tetapi <strong>deteksi dan penanganan sejak dini dapat memperbaiki kehidupan anak</strong> (${ext(L.cdc, 'CDC')}).</p>

            <h2 id="mengapa">Mengapa Anak CP Membutuhkan Terapi Okupasi?</h2>
            <p>CP adalah disabilitas fisik yang paling sering dijumpai pada masa kanak-kanak (${ext(L.novak, 'Novak dkk., 2020')}). Dampaknya pada tangan sangat beragam. Ada anak yang hanya sedikit canggung, ada yang hanya bisa memakai satu tangan, dan ada yang membutuhkan bantuan penuh untuk hampir semua kegiatan.</p>
            <p>Untuk menggambarkan keragaman ini, para ahli memakai <strong>Manual Ability Classification System (MACS)</strong>, yang membagi kemampuan anak CP memegang dan memakai benda dalam kegiatan sehari-hari ke dalam lima level. MACS dikembangkan dan diuji untuk anak usia 4 sampai 18 tahun (${ext(L.macs, 'Eliasson dkk., 2006')}). Level ini membantu terapis dan orang tua menetapkan tujuan yang realistis.</p>
            <p>Tanda awal masalah tangan kadang sudah terlihat pada bayi. Pedoman NICE Inggris untuk CP menyebut <strong>asimetri fungsi tangan dini (sudah memilih satu tangan) sebelum usia 1 tahun</strong>, dihitung dengan usia koreksi, sebagai salah satu tanda yang perlu diperhatikan (${ext(L.nice, 'NICE NG62')}). Bayi pada umumnya belum menunjukkan tangan dominan di usia itu.</p>

            <h2 id="tujuan">Tujuan Terapi Okupasi</h2>
            <p>Tujuan terapi selalu disusun bersama keluarga dan disesuaikan dengan kemampuan serta kebutuhan anak. Area yang paling sering dikerjakan antara lain:</p>
            <ul>
                <li><strong>Fungsi tangan dan lengan:</strong> meraih, menggenggam, melepas, memindahkan benda, dan memakai kedua tangan bersama. Dasar-dasarnya dibahas di artikel <a href="/artikel/motorik-halus">motorik halus</a>.</li>
                <li><strong>Merawat diri:</strong> makan dan minum, berpakaian, menyikat gigi, dan kebersihan diri.</li>
                <li><strong>Posisi duduk dan kontrol tubuh</strong> yang cukup stabil supaya tangan bebas bekerja.</li>
                <li><strong>Keterampilan sekolah:</strong> memegang alat tulis, menggunting, memakai komputer atau tablet.</li>
                <li><strong>Pengolahan sensorik</strong> bila anak juga punya kesulitan dalam memproses rangsang. Lihat artikel <a href="/artikel/sensori-integrasi">sensori integrasi</a>.</li>
                <li><strong>Bermain dan partisipasi</strong> bersama teman dan keluarga.</li>
            </ul>

            <h2 id="asesmen">Asesmen: Dari Mana Terapis Mulai</h2>
            <p>Sebelum latihan dimulai, terapis okupasi mengamati bagaimana anak bergerak dan melakukan kegiatan, bertanya kepada orang tua tentang rutinitas harian, dan mencatat apa yang paling ingin dicapai keluarga. Terapis juga bisa memakai alat ukur baku, misalnya MACS untuk menggambarkan kemampuan tangan secara umum.</p>
            <p>Hasil asesmen dipakai untuk menyusun <strong>tujuan yang spesifik</strong>, misalnya "anak bisa makan sendiri memakai sendok bergagang besar dalam tiga bulan", bukan tujuan umum seperti "memperbaiki motorik halus". Tujuan yang spesifik lebih mudah dilatih dan dievaluasi.</p>

            <h2 id="metode">Metode Terapi Okupasi yang Didukung Penelitian</h2>
            <p>Tinjauan sistematis besar oleh Novak dkk. (2020) mengelompokkan intervensi untuk anak CP menurut kekuatan buktinya. Di antara intervensi yang dinilai efektif dan relevan dengan terapi okupasi adalah <strong>latihan bimanual, constraint-induced movement therapy (CIMT), goal-directed training, task-specific training, program latihan di rumah, serta toksin botulinum yang dikombinasikan dengan terapi okupasi</strong> (${ext(L.novak, 'Novak dkk., 2020')}).</p>

            <h3>1. Constraint-induced movement therapy (CIMT)</h3>
            <p>CIMT dipakai untuk anak dengan CP unilateral (satu sisi tubuh lebih terdampak). Prinsipnya dua: tangan yang lebih kuat dibatasi sementara, misalnya dengan sarung tangan atau gendongan, lalu tangan yang lebih terdampak dilatih secara intensif lewat permainan dan kegiatan.</p>
            <p>Tinjauan Cochrane atas 36 uji klinis dengan 1.264 peserta menemukan CIMT <strong>lebih efektif dibanding terapi dengan dosis rendah</strong> untuk memperbaiki penggunaan kedua tangan dan kemampuan tangan yang terdampak. Namun, CIMT <strong>tidak lebih unggul dibanding terapi lain dengan dosis yang setara</strong>, seperti latihan bimanual intensif. Kualitas buktinya dinilai rendah sampai sangat rendah, dan CIMT dinilai aman, walau sebagian anak merasa frustrasi atau menolak alat pembatasnya (${ext(L.cimt, 'Hoare dkk., Cochrane 2019')}).</p>
            <p>Pesan pentingnya untuk orang tua: yang membuat perbedaan tampaknya adalah <strong>latihan yang cukup banyak dan terarah</strong>, bukan satu teknik tertentu.</p>

            <h3>2. Latihan bimanual</h3>
            <p>Latihan bimanual melatih anak memakai kedua tangan bersama dalam kegiatan nyata, misalnya memegang mangkuk dengan satu tangan sambil menyendok dengan tangan lainnya, atau membuka tutup botol. Latihan ini dinilai efektif dalam tinjauan Novak dkk. dan menjadi salah satu pembanding yang setara dengan CIMT dalam tinjauan Cochrane.</p>

            <h3>3. Goal-directed training dan task-specific training</h3>
            <p>Pada pendekatan ini, anak berlatih langsung kegiatan yang ingin dikuasai, bukan latihan otot yang terpisah dari kegiatan. Kalau tujuannya memakai kaus sendiri, maka yang dilatih adalah memakai kaus, dipecah menjadi langkah-langkah kecil dan diulang dengan bantuan yang dikurangi sedikit demi sedikit.</p>

            <h3>4. Program latihan di rumah</h3>
            <p>Program rumah, yaitu latihan yang dirancang terapis dan dilakukan keluarga dalam rutinitas harian, juga masuk daftar intervensi efektif (${ext(L.novak, 'Novak dkk., 2020')}). Ini masuk akal: sesi terapi hanya sebentar dalam seminggu, sedangkan anak berada di rumah hampir sepanjang waktu.</p>

            <h3>5. Kombinasi dengan penanganan medis</h3>
            <p>Pada sebagian anak dengan kekakuan otot (spastisitas), dokter dapat memberikan suntikan toksin botulinum. Novak dkk. mencatat kombinasi toksin botulinum dengan terapi okupasi sebagai intervensi efektif. Keputusan ini sepenuhnya wewenang dokter.</p>

            <h2 id="tipe">Penyesuaian Menurut Tipe CP</h2>
            <p>Pendekatan terapi disesuaikan dengan tipe gerak anak:</p>
            <ul>
                <li><strong>CP spastik</strong> (otot kaku): fokus pada rentang gerak, posisi yang baik, dan latihan fungsi. Bila ada kelainan tulang belakang, koordinasikan dengan tim medis; lihat artikel <a href="/artikel/skoliosis-pada-anak-cerebral-palsy">skoliosis pada anak cerebral palsy</a>.</li>
                <li><strong>CP athetoid atau diskinetik</strong> (gerakan tak terkendali): fokus pada stabilitas tubuh, pegangan yang mantap, dan alat bantu yang mengurangi gerakan berlebih. Ciri tipe ini dibahas di artikel <a href="/artikel/cerebral-palsy-athetoid-adalah">cerebral palsy athetoid</a>.</li>
                <li><strong>CP ataksik</strong> (keseimbangan dan koordinasi terganggu): fokus pada ketepatan gerak dan kegiatan yang membutuhkan koordinasi.</li>
            </ul>
            <p>Terapi okupasi sering berjalan bersama fisioterapi dan terapi lain. Sebagian keluarga juga bertanya tentang pijat; bukti dan batasannya dibahas di artikel <a href="/artikel/terapi-pijat-anak-cerebral-palsy">terapi pijat anak cerebral palsy</a>.</p>

            <h2 id="alat">Alat Bantu dan Penyesuaian Lingkungan</h2>
            <p>Terapis okupasi tidak hanya melatih anak, tetapi juga mengubah "tugas" dan "tempat" supaya anak bisa berhasil. Contohnya:</p>
            <ul>
                <li>Sendok dan pensil dengan gagang yang dipertebal agar mudah digenggam.</li>
                <li>Piring berpinggiran tinggi dan alas anti-selip.</li>
                <li>Kursi dengan penyangga yang tepat supaya tubuh stabil dan tangan bebas bekerja.</li>
                <li>Pakaian dengan perekat atau karet pinggang sebagai pengganti kancing.</li>
                <li>Bidai (splint) tangan bila direkomendasikan tim medis.</li>
                <li>Tablet atau komputer dengan penyesuaian akses untuk menulis dan berkomunikasi.</li>
            </ul>

            <h2 id="rumah">Latihan Sederhana di Rumah</h2>
            <p>Latihan di rumah sebaiknya berasal dari program yang disusun terapis anak Anda. Beberapa prinsip umum yang bisa dipegang:</p>
            <ol>
                <li><strong>Selipkan latihan ke rutinitas.</strong> Waktu makan, mandi, dan berpakaian adalah kesempatan latihan yang alami.</li>
                <li><strong>Beri waktu dan kurangi bantuan perlahan.</strong> Tahan diri untuk langsung mengambil alih; bantu hanya sebanyak yang dibutuhkan.</li>
                <li><strong>Pakai permainan.</strong> Meremas adonan, memasukkan koin ke celengan, menempel stiker, atau membuka wadah berisi mainan kecil melatih tangan sambil bermain. Ide lain ada di artikel <a href="/artikel/latihan-motorik-halus">latihan motorik halus</a>.</li>
                <li><strong>Libatkan kedua tangan</strong> bila anak punya satu sisi yang lebih terdampak, misalnya satu tangan menahan kertas sementara tangan lain mewarnai.</li>
                <li><strong>Catat kemajuan</strong> dan bawa catatan itu ke sesi terapi.</li>
                <li><strong>Hentikan</strong> bila anak kesakitan atau sangat kelelahan, lalu tanyakan kepada terapis.</li>
            </ol>

            <h2 id="sekolah">Terapi Okupasi dan Sekolah</h2>
            <p>Di sekolah, terapis okupasi dapat membantu guru menyesuaikan posisi duduk, alat tulis, dan cara anak mengerjakan tugas, misalnya mengganti tulisan tangan panjang dengan mengetik atau menjawab lisan. Penyesuaian seperti ini membantu anak CP ikut belajar bersama teman di kelas inklusi. Bila Anda ingin memahami perbedaan peran antarterapis, baca <a href="/artikel/perbedaan-terapi-okupasi-dan-terapi-wicara">perbedaan terapi okupasi dan terapi wicara</a>. Untuk mencari layanan, lihat <a href="/artikel/tempat-terapi-anak-jogja">tempat terapi anak Jogja</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a> melalui pendidikan inklusi dan layanan terapi di Sleman. Untuk berdiskusi tentang kebutuhan anak Anda, hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a> atau lihat <a href="/program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/cerebral-palsy-athetoid-adalah">Cerebral Palsy Athetoid</a></h4>
                    <p>Ciri dan penanganan CP tipe diskinetik.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/terapi-pijat-anak-cerebral-palsy">Terapi Pijat Anak Cerebral Palsy</a></h4>
                    <p>Manfaat, bukti, dan batasan pijat untuk anak CP.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/cerebral-palsy-adalah">Cerebral Palsy Adalah</a></h4>
                    <p>Pengertian, penyebab, dan jenis CP.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#CerebralPalsy</a>
            <a href="#">#TerapiOkupasi</a>
            <a href="#">#MotorikHalus</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.novak, 'Novak I, Morgan C, Fahey M, dkk. <strong>State of the Evidence Traffic Lights 2019: Systematic Review of Interventions for Preventing and Treating Children with Cerebral Palsy.</strong> Curr Neurol Neurosci Rep. 2020;20(2):3')}</li>
              <li>${ext(L.cimt, 'Hoare BJ, Wallen MA, Thorley MN, dkk. <strong>Constraint-induced movement therapy in children with unilateral cerebral palsy.</strong> Cochrane Database Syst Rev. 2019;4:CD004149')}</li>
              <li>${ext(L.macs, 'Eliasson AC, Krumlinde-Sundholm L, Rosblad B, dkk. <strong>The Manual Ability Classification System (MACS) for children with cerebral palsy.</strong> Dev Med Child Neurol. 2006;48(7):549-54')}</li>
              <li>${ext(L.cdc, 'Centers for Disease Control and Prevention. <strong>Treatment and Intervention for Cerebral Palsy.</strong> cdc.gov')}</li>
              <li>${ext(L.nice, 'NICE. <strong>Cerebral palsy in under 25s: assessment and management (NG62).</strong> nice.org.uk')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat medis</strong>. Asesmen, diagnosis, dan rencana terapi harus ditetapkan oleh dokter dan terapis yang berkompeten. Sumber dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Terapi%20Okupasi%20untuk%20Anak%20Cerebral%20Palsy%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Terapi%20Okupasi%20untuk%20Anak%20Cerebral%20Palsy&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

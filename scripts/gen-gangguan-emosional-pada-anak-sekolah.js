#!/usr/bin/env node
'use strict';

// One-time generator for artikel/gangguan-emosional-pada-anak-sekolah.html (catchup 2026-09-28, kartu vD2Iw5bb).
// Skeleton from gen-terapi-perilaku-kognitif-anak.js. No hero photo (YMYL child mental health); card's Candi Plaosan photo rejected (off-topic).
// Claims checked 2026-09-28: WHO adolescent mental health fact sheet (1 in 7 = 14.3%; anxiety 4.1/5.3%; depression 1.3/3.4%; ADHD 2.7/2.2%; conduct 3.3/1.8%),
// NIMH children-and-mental-health (warning signs, weeks-distress-functioning rule), Cochrane PMID 33196111, NICE CG159, NICE NG134.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'gangguan-emosional-pada-anak-sekolah';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Gangguan Emosional pada Anak Sekolah: Tanda & Cara Bantu';
const META_DESC = 'Gangguan emosional pada anak sekolah: jenis, tanda yang perlu diwaspadai, dampaknya ke belajar, dan langkah orang tua serta guru. Baca panduannya.';
const OG_TITLE = 'Gangguan Emosional pada Anak Sekolah: Panduan untuk Orang Tua dan Guru';
const OG_DESC = 'Kenali kecemasan, depresi, dan masalah emosi lain pada anak usia sekolah, bedanya dengan emosi yang wajar, serta kapan perlu mencari bantuan profesional.';
const H1 = 'Gangguan Emosional pada Anak Sekolah: Jenis, Tanda, dan Cara Membantu';
const IMAGE = 'Dokumentasi/artikel/gangguan-emosional-pada-anak-sekolah-dokumentasi.webp';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T15:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T15:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  who: 'https://www.who.int/news-room/fact-sheets/detail/adolescent-mental-health',
  nimh: 'https://www.nimh.nih.gov/health/publications/children-and-mental-health',
  cochrane: 'https://pubmed.ncbi.nlm.nih.gov/33196111/',
  niceSocial: 'https://www.nice.org.uk/guidance/cg159/chapter/Recommendations',
  niceDep: 'https://www.nice.org.uk/guidance/ng134/chapter/Recommendations'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa yang dimaksud gangguan emosional pada anak sekolah?',
    a: 'Gangguan emosional adalah masalah perasaan seperti cemas, takut, sedih, atau mudah marah yang berlangsung lama, lebih berat dari yang wajar untuk usianya, dan mengganggu kehidupan anak di sekolah, di rumah, atau dengan teman. Yang paling sering adalah gangguan kecemasan dan depresi. Diagnosis hanya bisa ditegakkan oleh psikolog klinis atau dokter.'
  },
  {
    q: 'Bagaimana membedakan emosi yang wajar dengan gangguan emosional?',
    a: 'Semua anak kadang sedih, cemas, atau marah. Menurut NIMH, orang tua sebaiknya mencari bantuan bila perilaku atau emosi anak berlangsung berminggu-minggu atau lebih, membuat anak atau keluarga tertekan, atau mengganggu fungsi anak di sekolah, di rumah, atau dengan teman.'
  },
  {
    q: 'Seberapa sering gangguan emosional terjadi pada anak?',
    a: 'WHO memperkirakan satu dari tujuh anak dan remaja usia 10 sampai 19 tahun di dunia mengalami gangguan kesehatan mental. Gangguan kecemasan dialami sekitar 4,1% anak usia 10 sampai 14 tahun, dan depresi sekitar 1,3% pada kelompok usia yang sama.'
  },
  {
    q: 'Apa yang bisa dilakukan guru di kelas?',
    a: 'Guru dapat mencatat perubahan perilaku secara spesifik, berbicara dengan orang tua, memberi ruang tenang saat anak kewalahan, menyesuaikan tugas sementara, dan mengarahkan keluarga ke psikolog sekolah atau layanan kesehatan. Guru tidak perlu mendiagnosis, cukup mengamati dan menghubungkan.'
  },
  {
    q: 'Terapi apa yang dipakai untuk gangguan emosional anak?',
    a: 'Untuk kecemasan dan depresi, terapi psikologis seperti terapi perilaku kognitif (CBT) punya bukti paling kuat. Tinjauan Cochrane 2020 menemukan 49,4% anak dengan gangguan kecemasan tidak lagi memenuhi kriteria gangguannya setelah CBT, dibanding 17,8% pada kelompok yang belum diterapi. Jenis terapi ditentukan profesional setelah asesmen.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Gangguan Emosional pada Anak Sekolah', item: CANONICAL }
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
  keywords: 'gangguan emosional pada anak sekolah, gangguan emosi anak, kecemasan anak sekolah, depresi anak, kesehatan mental anak',
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
    <meta name="keywords" content="gangguan emosional pada anak sekolah, gangguan emosi anak, kecemasan anak, depresi anak, YUKA">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${CANONICAL}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${CANONICAL}">
    <meta property="og:title" content="${OG_TITLE}">
    <meta property="og:description" content="${OG_DESC}">
    <meta property="og:image" content="${IMAGE_URL}">
    <meta property="og:image:alt" content="Papan hias bertuliskan Taruna Imani dengan bunga kertas warna-warni di ruang kelas YUKA">
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
        .article-featured-image figcaption a { color: #1565C0; text-decoration: underline; }
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
                <span class="current">Gangguan Emosional pada Anak Sekolah</span>
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
            <img src="../${IMAGE}" alt="Papan hias hitam bertuliskan Taruna Imani dengan rangkaian bunga kertas warna-warni di sudut ruang kelas" width="900" height="600" fetchpriority="high" decoding="async">
            <figcaption>Papan hias buatan warga sekolah di ruang kelas Sekolah Inklusi Taruna Imani, YUKA. Lingkungan kelas yang hangat dan dapat diprediksi membantu anak merasa aman. <span class="kredit">Foto: dokumentasi YUKA Indonesia</span></figcaption>
        </figure>
    </div>
    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> gangguan emosional pada anak sekolah adalah masalah perasaan, seperti cemas, takut, sedih, atau mudah marah, yang berlangsung berminggu-minggu atau lebih dan mengganggu kegiatan anak di sekolah, di rumah, atau dengan teman. Yang paling sering adalah gangguan kecemasan dan depresi. Orang tua dan guru berperan mengenali tandanya lebih awal, mendampingi dengan tenang, dan menghubungkan anak ke psikolog atau dokter untuk asesmen.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum untuk orang tua, guru, dan pendamping, <strong>bukan alat diagnosis dan bukan saran medis</strong>. Daftar tanda di bawah tidak dimaksudkan untuk memberi label pada anak. Bila Anda khawatir, bicarakan dengan psikolog klinis, dokter anak, atau puskesmas terdekat. Bila anak membicarakan keinginan mengakhiri hidup atau melukai diri, segera bawa ke IGD rumah sakit terdekat.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu gangguan emosional pada anak sekolah?</a></li>
                    <li><a href="#seberapa-sering">Seberapa sering terjadi?</a></li>
                    <li><a href="#jenis">Jenis gangguan emosional yang umum</a></li>
                    <li><a href="#tanda">Tanda yang perlu diwaspadai</a></li>
                    <li><a href="#wajar">Emosi wajar atau gangguan?</a></li>
                    <li><a href="#penyebab">Faktor yang ikut berperan</a></li>
                    <li><a href="#dampak">Dampaknya pada belajar</a></li>
                    <li><a href="#orang-tua">Langkah untuk orang tua</a></li>
                    <li><a href="#guru">Langkah untuk guru</a></li>
                    <li><a href="#penanganan">Penanganan profesional</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Gangguan Emosional pada Anak Sekolah?</h2>
            <p>Anak usia sekolah sedang belajar banyak hal sekaligus: pelajaran, aturan kelas, pertemanan, dan cara mengelola perasaannya sendiri. Wajar kalau sesekali mereka menangis sebelum ujian, kesal karena kalah bermain, atau malu saat maju ke depan kelas. Perasaan seperti itu adalah bagian dari tumbuh kembang.</p>
            <p>Istilah <strong>gangguan emosional</strong> dipakai ketika perasaan negatif itu menjadi terlalu kuat, terlalu sering, atau terlalu lama untuk usianya, sampai mengganggu kemampuan anak untuk belajar, bermain, dan bergaul. WHO memakai istilah <em>emotional disorders</em> untuk kelompok gangguan kecemasan dan depresi, dan menyebutnya umum dijumpai pada anak dan remaja (${ext(L.who, 'WHO')}).</p>
            <p>Gangguan emosional berbeda dengan gangguan perilaku, walau keduanya sering tumpang tindih. Anak dengan gangguan emosional cenderung menanggung beban di dalam dirinya (cemas, murung, menarik diri), sedangkan gangguan perilaku lebih tampak keluar (melawan, merusak, agresif). Anak yang tampak "marah" di kelas bisa saja sebenarnya sedang cemas atau sedih.</p>

            <h2 id="seberapa-sering">Seberapa Sering Terjadi?</h2>
            <p>Menurut WHO, secara global <strong>satu dari tujuh (14,3%) anak dan remaja usia 10 sampai 19 tahun</strong> mengalami gangguan kesehatan mental. Depresi, kecemasan, dan gangguan perilaku termasuk penyebab utama sakit dan disabilitas pada kelompok usia ini (${ext(L.who, 'WHO')}).</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Kondisi</th><th>Usia 10 sampai 14 tahun</th><th>Usia 15 sampai 19 tahun</th></tr>
                </thead>
                <tbody>
                    <tr><td>Gangguan kecemasan</td><td>4,1%</td><td>5,3%</td></tr>
                    <tr><td>Depresi</td><td>1,3%</td><td>3,4%</td></tr>
                    <tr><td>ADHD</td><td>2,7%</td><td>2,2%</td></tr>
                    <tr><td>Gangguan perilaku (conduct disorder)</td><td>3,3%</td><td>1,8%</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.9rem;">Sumber angka: ${ext(L.who, 'WHO, Mental health of adolescents')}. Angka ini estimasi global, bukan angka khusus Indonesia.</p>
            <p>WHO juga mencatat bahwa gangguan kecemasan dan depresi <strong>dapat sangat memengaruhi kehadiran dan tugas sekolah</strong>, dan menarik diri dari pergaulan dapat memperparah rasa terisolasi (${ext(L.who, 'WHO')}).</p>

            <h2 id="jenis">Jenis Gangguan Emosional yang Umum</h2>
            <h3>1. Gangguan kecemasan</h3>
            <p>Kecemasan adalah jenis yang paling sering. Bentuknya bisa berupa cemas berpisah dari orang tua, cemas berlebihan tentang banyak hal, takut tampil atau berbicara di depan orang lain (kecemasan sosial), atau takut pada hal tertentu. Pada anak sekolah, kecemasan sering muncul sebagai keluhan fisik, misalnya sakit perut atau pusing di pagi hari sebelum berangkat.</p>
            <h3>2. Depresi</h3>
            <p>Depresi pada anak tidak selalu tampak sebagai sedih. WHO menyebut depresi dan kecemasan punya sebagian gejala yang sama, termasuk perubahan suasana hati yang cepat dan tak terduga (${ext(L.who, 'WHO')}). Anak bisa tampak mudah tersinggung, kehilangan minat pada hal yang dulu disukai, lelah terus, atau sering berkata dirinya tidak berguna.</p>
            <h3>3. Obsesif kompulsif</h3>
            <p>Sebagian anak mengulang tindakan atau memeriksa sesuatu berkali-kali karena takut hal buruk akan terjadi, misalnya berulang kali memastikan pintu terkunci (${ext(L.nimh, 'NIMH')}).</p>
            <h3>4. Masalah emosi yang menyertai kondisi lain</h3>
            <p>Anak dengan <a href="/artikel/adhd-adalah">ADHD</a>, <a href="/artikel/autisme-adalah">autisme</a>, atau <a href="/artikel/kesulitan-belajar">kesulitan belajar</a> juga bisa mengalami kecemasan atau suasana hati yang menurun, misalnya karena berulang kali merasa gagal di kelas. Pada anak berkebutuhan khusus, tanda emosinya kadang tertutup oleh kondisi utamanya, sehingga perlu pengamatan yang lebih cermat. Pembahasan untuk usia remaja ada di artikel <a href="/artikel/kesehatan-mental-remaja-berkebutuhan-khusus">kesehatan mental remaja berkebutuhan khusus</a>.</p>

            <h2 id="tanda">Tanda yang Perlu Diwaspadai</h2>
            <p>National Institute of Mental Health (NIMH) Amerika Serikat mencantumkan sejumlah tanda yang patut diperhatikan pada anak, di antaranya (${ext(L.nimh, 'NIMH')}):</p>
            <ul>
                <li>Sering tantrum atau mudah tersinggung hampir sepanjang waktu.</li>
                <li>Sering tampak takut atau khawatir.</li>
                <li>Tidur terlalu banyak atau terlalu sedikit, sering mimpi buruk, atau tampak mengantuk di siang hari.</li>
                <li>Mengulang tindakan atau memeriksa sesuatu berkali-kali karena takut hal buruk terjadi.</li>
                <li>Makan atau berolahraga secara berlebihan, atau takut berat badannya naik.</li>
                <li>Melukai diri sendiri.</li>
            </ul>
            <p>Di sekolah, guru mungkin melihat tanda tambahan seperti sering izin ke UKS dengan keluhan fisik, menolak masuk kelas, nilai turun tanpa sebab jelas, menarik diri dari teman, atau reaksi marah yang tidak sebanding dengan pemicunya.</p>

            <h2 id="wajar">Emosi Wajar atau Gangguan?</h2>
            <p>NIMH mengingatkan bahwa semua anak kadang sedih, cemas, mudah marah, atau agresif, dan umumnya itu fase perkembangan yang biasa. Orang tua disarankan mencari bantuan bila perilaku atau emosi anak (${ext(L.nimh, 'NIMH')}):</p>
            <ol>
                <li><strong>berlangsung berminggu-minggu atau lebih</strong>,</li>
                <li><strong>membuat anak atau keluarga tertekan</strong>, atau</li>
                <li><strong>mengganggu fungsi anak</strong> di sekolah, di rumah, atau dengan teman.</li>
            </ol>
            <p>Tiga pertanyaan ini sederhana tetapi berguna. Anak yang menangis di hari pertama masuk sekolah lalu perlahan menyesuaikan diri berbeda dengan anak yang berbulan-bulan sakit perut setiap pagi dan akhirnya sering tidak masuk.</p>

            <h2 id="penyebab">Faktor yang Ikut Berperan</h2>
            <p>Gangguan emosional jarang punya satu penyebab. Biasanya beberapa faktor saling bertemu:</p>
            <ul>
                <li><strong>Faktor dalam diri anak</strong>, seperti temperamen yang mudah cemas, riwayat keluarga, atau kondisi perkembangan tertentu.</li>
                <li><strong>Faktor keluarga</strong>, misalnya konflik berkepanjangan, perceraian, kehilangan anggota keluarga, atau pengasuhan yang sangat keras.</li>
                <li><strong>Faktor sekolah</strong>, seperti tekanan akademik, perundungan, atau kesulitan belajar yang tidak dikenali.</li>
                <li><strong>Pengalaman berat</strong>, termasuk kekerasan atau peristiwa traumatis. Pembahasannya ada di artikel <a href="/artikel/ptsd-pada-anak-gejala-dan-penanganan">PTSD pada anak</a>.</li>
            </ul>
            <p>WHO menekankan pentingnya lingkungan yang melindungi dan mendukung di keluarga, sekolah, dan masyarakat, serta kebiasaan seperti pola tidur sehat, olahraga teratur, dan keterampilan mengelola emosi (${ext(L.who, 'WHO')}).</p>

            <h2 id="dampak">Dampaknya pada Belajar</h2>
            <p>Anak yang terus cemas atau murung menghabiskan banyak energi untuk menahan perasaannya, sehingga sulit berkonsentrasi dan mengingat pelajaran. Hasilnya bisa terlihat seperti malas atau tidak mampu, padahal akar masalahnya emosional. Sebaliknya, kegagalan akademik yang berulang juga bisa memicu rasa cemas dan rendah diri. Karena itu, asesmen sebaiknya melihat kedua sisi: kemampuan belajar dan kondisi emosinya. Informasi tentang proses asesmen ada di artikel <a href="/artikel/asesmen-abk">asesmen ABK</a>.</p>

            <h2 id="orang-tua">Langkah untuk Orang Tua</h2>
            <ul>
                <li><strong>Dengarkan tanpa menghakimi.</strong> Ganti "Begitu saja kok takut" dengan "Kamu kelihatan khawatir. Mau cerita?"</li>
                <li><strong>Catat polanya.</strong> Kapan emosi itu muncul, berapa lama, apa pemicunya, dan apa dampaknya. Catatan ini sangat membantu tenaga profesional.</li>
                <li><strong>Bicara dengan guru.</strong> NIMH menyarankan orang tua yang khawatir memulai dengan berbicara kepada orang yang sering berinteraksi dengan anak, termasuk gurunya (${ext(L.nimh, 'NIMH')}).</li>
                <li><strong>Jaga rutinitas dasar.</strong> Tidur cukup, makan teratur, aktivitas fisik, dan waktu bermain.</li>
                <li><strong>Jangan menghindarkan anak dari semua hal yang ditakutinya.</strong> Menghindar terasa menolong, tetapi bisa membuat kecemasan bertahan. Bantu anak menghadapi langkah kecil secara bertahap.</li>
                <li><strong>Rawat diri sendiri.</strong> Orang tua yang lelah sulit menjadi penenang. Baca <a href="/artikel/mengelola-stres-orang-tua-anak-abk">cara mengelola stres orang tua anak ABK</a>.</li>
            </ul>

            <h2 id="guru">Langkah untuk Guru</h2>
            <ul>
                <li><strong>Amati dan catat secara spesifik</strong>, bukan memberi label. "Tiga kali minggu ini minta ke UKS saat pelajaran matematika" lebih berguna daripada "anaknya cengeng".</li>
                <li><strong>Sediakan ruang atau waktu tenang</strong> ketika anak kewalahan, dengan kesepakatan yang jelas kapan kembali ke kelas.</li>
                <li><strong>Sesuaikan tuntutan sementara</strong>, misalnya presentasi di depan kelompok kecil dulu sebelum di depan kelas.</li>
                <li><strong>Cegah dan tangani perundungan</strong> dengan tegas, karena perundungan adalah salah satu pemicu masalah emosi di sekolah.</li>
                <li><strong>Hubungkan, jangan mendiagnosis.</strong> Sampaikan pengamatan kepada orang tua dan guru BK atau psikolog sekolah.</li>
            </ul>
            <p>Di kelas inklusi, strategi pengelolaan kelas yang terstruktur juga membantu anak yang mudah cemas. Contohnya dibahas di artikel <a href="/artikel/classroom-management-kelas-inklusi">classroom management kelas inklusi</a>.</p>

            <h2 id="penanganan">Penanganan Profesional</h2>
            <p>Penanganan dimulai dengan asesmen oleh psikolog klinis atau dokter. NIMH menjelaskan bahwa evaluasi dapat memakai informasi dari sekolah, seperti laporan perilaku, kemampuan, dan kesulitan anak, lalu profesional menilai apakah emosi dan perilaku anak berkaitan dengan perubahan atau tekanan di rumah dan sekolah, atau mengarah pada gangguan yang perlu diterapi (${ext(L.nimh, 'NIMH')}).</p>
            <p>Untuk kecemasan dan depresi, terapi psikologis menjadi pilihan utama. Pedoman NICE menganjurkan CBT individual atau kelompok yang berfokus pada kecemasan sosial untuk anak dan remaja dengan gangguan kecemasan sosial (${ext(L.niceSocial, 'NICE CG159')}), dan mencantumkan CBT di antara pilihan terapi psikologis untuk depresi pada anak dan remaja (${ext(L.niceDep, 'NICE NG134')}). Tinjauan Cochrane atas 87 studi dengan 5.964 peserta di bawah 19 tahun menemukan <strong>49,4% anak yang menjalani CBT</strong> tidak lagi memenuhi kriteria gangguan kecemasan utamanya, dibanding <strong>17,8%</strong> pada kelompok yang menunggu atau tanpa terapi (${ext(L.cochrane, 'James dkk., Cochrane 2020')}).</p>
            <p>Cara kerja terapi ini dijelaskan lebih rinci di artikel <a href="/artikel/terapi-perilaku-kognitif-anak">terapi perilaku kognitif anak</a>. Pilihan terapi lain bisa dibaca di <a href="/artikel/macam-macam-terapi-pada-anak">macam-macam terapi pada anak</a> dan <a href="/artikel/terapi-bermain">terapi bermain</a>. Referensi layanan di sekitar Yogyakarta tersedia di <a href="/artikel/tempat-terapi-anak-jogja">tempat terapi anak Jogja</a>. Obat hanya diberikan atas pertimbangan dan resep dokter.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a> melalui pendidikan inklusi dan layanan terapi di Sleman. Untuk berdiskusi tentang kebutuhan anak Anda, hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a> atau lihat <a href="/program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/terapi-perilaku-kognitif-anak">Terapi Perilaku Kognitif Anak</a></h4>
                    <p>Cara kerja CBT dan peran orang tua.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/kesehatan-mental-remaja-berkebutuhan-khusus">Kesehatan Mental Remaja Berkebutuhan Khusus</a></h4>
                    <p>Tantangan emosi di masa remaja.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/kesulitan-belajar">Kesulitan Belajar</a></h4>
                    <p>Mengenali hambatan belajar pada anak.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#KesehatanMentalAnak</a>
            <a href="#">#GangguanEmosional</a>
            <a href="#">#Kecemasan</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.who, 'World Health Organization. <strong>Mental health of adolescents</strong> (fact sheet). who.int')}</li>
              <li>${ext(L.nimh, 'National Institute of Mental Health. <strong>Children and Mental Health: Is This Just a Stage?</strong> nimh.nih.gov')}</li>
              <li>${ext(L.cochrane, 'James AC, Reardon T, Soler A, James G, Creswell C. <strong>Cognitive behavioural therapy for anxiety disorders in children and adolescents.</strong> Cochrane Database Syst Rev. 2020;11:CD013162')}</li>
              <li>${ext(L.niceSocial, 'NICE. <strong>Social anxiety disorder: recognition, assessment and treatment (CG159).</strong> nice.org.uk')}</li>
              <li>${ext(L.niceDep, 'NICE. <strong>Depression in children and young people: identification and management (NG134).</strong> nice.org.uk')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat medis atau psikologis</strong>. Asesmen, diagnosis, dan rencana terapi harus ditetapkan oleh psikolog klinis atau dokter yang berkompeten. Sumber dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Gangguan%20Emosional%20pada%20Anak%20Sekolah%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Gangguan%20Emosional%20pada%20Anak%20Sekolah&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

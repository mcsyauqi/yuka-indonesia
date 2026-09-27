#!/usr/bin/env node
'use strict';

// One-time generator for artikel/terapi-perilaku-kognitif-anak.html
// (catchup 2026-09-28, kartu wCjKv1kP). Skeleton copied from scripts/gen-joint-attention-anak-autis-kenapa-penting.js.
// No hero photo on purpose (YMYL child mental health: no identifiable child photos). Card suggested a Candi Plaosan
// tourism photo, rejected because it does not depict the topic (one image = one honest claim).
// Claims checked 2026-09-28 against PubMed abstracts / official pages:
// - PMID 33196111 James 2020 Cochrane: 87 studies, 5,964 participants <19 y; remission primary anxiety CBT 49.4% vs waitlist 17.8%,
//   OR 5.45, NNTB 3, moderate quality; little/no evidence CBT superior to usual care or alternative treatments; no adverse effects reported.
// - PMID 18974308 Walkup 2008 CAMS: 488 children 7-17 y, 14 CBT sessions, 12 weeks; much/very much improved: combination 80.7%,
//   CBT 59.7%, sertraline 54.9%, all superior to placebo; less insomnia/fatigue/sedation/restlessness with CBT than sertraline.
// - PMID 24167175 Sukhodolsky 2013: 8 RCTs, 469 participants with ASD; effect size d=1.19 clinician, 1.21 parent; calls for studies vs attention control.
// - PMID 15507582 POTS 2004: OCD 7-17 y, 12 weeks; remission combined 53.6%, CBT alone 39.3%, sertraline 21.4%, placebo 3.6%;
//   conclusion: begin with CBT alone or CBT plus SSRI.
// - NICE CG159 rec: offer individual or group CBT focused on social anxiety to children and young people; consider involving parents, esp. young children.
// - NICE NG134: digital CBT, group CBT, individual CBT among psychological therapies for depression in children and young people;
//   therapists trained in child and adolescent mental health.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'terapi-perilaku-kognitif-anak';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Terapi Perilaku Kognitif Anak: Cara Kerja & Manfaat';
const META_DESC = 'Terapi perilaku kognitif anak (CBT): cara kerjanya, untuk masalah apa, apa kata penelitian, dan peran orang tua. Baca panduan lengkapnya di sini.';
const OG_TITLE = 'Terapi Perilaku Kognitif (CBT) untuk Anak: Panduan untuk Orang Tua';
const OG_DESC = 'Apa itu terapi perilaku kognitif anak, bagaimana sesinya berjalan, untuk kecemasan, OCD, depresi, dan anak autis, serta cara orang tua ikut mendukung.';
const H1 = 'Terapi Perilaku Kognitif Anak: Cara Kerja, Manfaat, dan Peran Orang Tua';
const IMAGE = 'Logo/Logo.webp';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-29T09:00:00+07:00';
const DATE_MODIFIED = '2026-09-29T09:00:00+07:00';
const DATE_DISPLAY = '29 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  cochrane: 'https://pubmed.ncbi.nlm.nih.gov/33196111/',
  cams: 'https://pubmed.ncbi.nlm.nih.gov/18974308/',
  asd: 'https://pubmed.ncbi.nlm.nih.gov/24167175/',
  pots: 'https://pubmed.ncbi.nlm.nih.gov/15507582/',
  niceSocial: 'https://www.nice.org.uk/guidance/cg159/chapter/Recommendations',
  niceDep: 'https://www.nice.org.uk/guidance/ng134/chapter/Recommendations'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa itu terapi perilaku kognitif untuk anak?',
    a: 'Terapi perilaku kognitif atau CBT (cognitive behavioral therapy) adalah terapi psikologis terstruktur yang membantu anak mengenali hubungan antara pikiran, perasaan, dan perilaku, lalu berlatih cara berpikir dan bertindak yang lebih membantu. Pada anak, CBT biasanya dibuat lebih konkret dengan gambar, permainan, dan latihan bertahap, serta melibatkan orang tua.'
  },
  {
    q: 'CBT anak cocok untuk masalah apa saja?',
    a: 'Bukti terkuat ada pada gangguan kecemasan anak, termasuk kecemasan sosial, dan pada gangguan obsesif kompulsif (OCD). Pedoman NICE juga mencantumkan CBT sebagai salah satu pilihan terapi psikologis untuk depresi pada anak dan remaja. Penelitian juga menunjukkan hasil positif untuk kecemasan pada anak autis dengan kemampuan verbal yang memadai.'
  },
  {
    q: 'Berapa lama terapi perilaku kognitif anak?',
    a: 'Tergantung masalah dan kondisi anak. Sebagai gambaran, dalam uji klinis besar CAMS, anak usia 7 sampai 17 tahun dengan gangguan kecemasan mendapat 14 sesi CBT selama 12 minggu. Jumlah sesi yang tepat ditentukan oleh psikolog setelah asesmen.'
  },
  {
    q: 'Apakah CBT bisa untuk anak autis?',
    a: 'Bisa, terutama untuk menangani kecemasan pada anak autis yang sudah mampu berkomunikasi secara verbal. Meta-analisis 8 uji acak dengan 469 peserta autis menemukan penurunan kecemasan yang besar setelah CBT, walau penulisnya meminta studi lanjutan dengan kelompok kontrol yang lebih ketat. CBT tidak menyembuhkan autisme, tetapi membantu anak mengelola kecemasannya.'
  },
  {
    q: 'Siapa yang boleh memberikan CBT untuk anak?',
    a: 'CBT sebaiknya diberikan oleh psikolog klinis atau tenaga kesehatan jiwa yang terlatih dalam CBT dan dalam menangani anak. Pedoman NICE menekankan terapi psikologis untuk anak diberikan oleh tenaga yang terlatih di bidang kesehatan jiwa anak dan remaja.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Terapi Perilaku Kognitif Anak', item: CANONICAL }
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
  keywords: 'terapi perilaku kognitif anak, CBT anak, cognitive behavioral therapy anak, terapi kecemasan anak, CBT anak autis',
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
    <meta name="keywords" content="terapi perilaku kognitif anak, CBT anak, cognitive behavioral therapy anak, terapi kecemasan anak, YUKA">
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
                <span class="current">Terapi Perilaku Kognitif Anak</span>
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
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> terapi perilaku kognitif anak atau CBT (cognitive behavioral therapy) adalah terapi psikologis terstruktur yang mengajari anak mengenali hubungan antara pikiran, perasaan, dan perilakunya, lalu berlatih cara menghadapi masalah dengan lebih baik. Bukti ilmiahnya paling kuat untuk kecemasan dan OCD pada anak, dan CBT juga menjadi salah satu pilihan untuk depresi pada anak dan remaja. Pada anak, terapi ini dibuat lebih konkret dan hampir selalu melibatkan orang tua.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum untuk orang tua, guru, dan pendamping, <strong>bukan alat diagnosis dan bukan saran medis</strong>. Keputusan apakah anak membutuhkan CBT, dan dalam bentuk apa, ditentukan oleh psikolog klinis atau dokter setelah asesmen. CBT tidak menyembuhkan kondisi perkembangan seperti autisme atau ADHD; yang dibantu adalah masalah emosi dan perilaku yang menyertainya.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu terapi perilaku kognitif anak?</a></li>
                    <li><a href="#cara-kerja">Bagaimana CBT bekerja pada anak?</a></li>
                    <li><a href="#untuk-apa">Untuk masalah apa CBT dipakai?</a></li>
                    <li><a href="#bukti">Apa kata penelitian?</a></li>
                    <li><a href="#abk">CBT untuk anak berkebutuhan khusus</a></li>
                    <li><a href="#sesi">Seperti apa sesi CBT anak?</a></li>
                    <li><a href="#orang-tua">Peran orang tua dan guru</a></li>
                    <li><a href="#memilih">Memilih tenaga profesional</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Terapi Perilaku Kognitif Anak?</h2>
            <p>Terapi perilaku kognitif, dalam bahasa Inggris <em>cognitive behavioral therapy</em> (CBT), adalah salah satu bentuk terapi bicara atau psikoterapi. Dasarnya sederhana: cara kita <strong>berpikir</strong> tentang suatu kejadian memengaruhi apa yang kita <strong>rasakan</strong>, dan perasaan itu memengaruhi apa yang kita <strong>lakukan</strong>. Ketiganya saling mengunci dan bisa membentuk lingkaran yang membuat masalah bertahan.</p>
            <p>Contohnya, seorang anak berpikir, "Kalau aku maju ke depan kelas, semua teman pasti menertawakanku." Pikiran itu membuatnya cemas, perutnya mulas, lalu ia menolak masuk sekolah. Karena ia terus menghindar, ia tidak pernah punya kesempatan membuktikan bahwa ketakutannya tidak terjadi, sehingga rasa cemasnya justru makin kuat. CBT membantu anak memutus lingkaran itu sedikit demi sedikit.</p>
            <p>Berbeda dengan terapi yang banyak membahas masa lalu, CBT berfokus pada masalah yang terjadi sekarang, punya tujuan yang jelas, dan biasanya berlangsung dalam jumlah sesi yang terbatas. Anak juga diberi "pekerjaan rumah" berupa latihan kecil di antara sesi.</p>

            <h2 id="cara-kerja">Bagaimana CBT Bekerja pada Anak?</h2>
            <p>Anak belum berpikir seabstrak orang dewasa, sehingga CBT untuk anak disesuaikan dengan usia dan tahap perkembangannya. Komponen yang umum dipakai:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Komponen</th><th>Tujuannya</th><th>Contoh pada anak</th></tr>
                </thead>
                <tbody>
                    <tr><td>Psikoedukasi</td><td>Anak dan orang tua memahami apa yang terjadi</td><td>Menjelaskan kecemasan sebagai "alarm tubuh" yang terlalu sensitif</td></tr>
                    <tr><td>Mengenali emosi</td><td>Anak bisa menamai dan mengukur perasaannya</td><td>Termometer perasaan dari 1 sampai 10, kartu wajah emosi</td></tr>
                    <tr><td>Keterampilan menenangkan diri</td><td>Menurunkan reaksi tubuh saat emosi memuncak</td><td>Napas perut pelan, relaksasi otot sederhana</td></tr>
                    <tr><td>Restrukturisasi kognitif</td><td>Menguji pikiran yang tidak membantu</td><td>"Detektif pikiran": apa buktinya? apa kemungkinan lain?</td></tr>
                    <tr><td>Paparan bertahap (exposure)</td><td>Menghadapi hal yang ditakuti selangkah demi selangkah</td><td>Tangga ketakutan, dari yang paling ringan ke yang paling berat</td></tr>
                    <tr><td>Pemecahan masalah</td><td>Mencari langkah praktis saat menghadapi kesulitan</td><td>Menyusun beberapa pilihan lalu memilih yang paling masuk akal</td></tr>
                    <tr><td>Penguatan (reward)</td><td>Menghargai usaha, bukan hanya hasil</td><td>Pujian spesifik, stiker, atau kegiatan yang disukai</td></tr>
                </tbody>
            </table>
            </div>
            <p>Untuk anak yang lebih kecil, porsi latihan perilaku dan keterlibatan orang tua biasanya lebih besar. Untuk remaja, porsi diskusi tentang pikiran bisa lebih besar. Pedoman NICE untuk kecemasan sosial, misalnya, menganjurkan untuk mempertimbangkan pelibatan orang tua atau pengasuh agar intervensinya berjalan efektif, <strong>terutama pada anak yang masih kecil</strong> (${ext(L.niceSocial, 'NICE CG159')}).</p>

            <h2 id="untuk-apa">Untuk Masalah Apa CBT Dipakai?</h2>
            <p>CBT bukan jawaban untuk semua masalah anak. Berdasarkan pedoman dan penelitian, pemakaiannya yang paling kuat buktinya adalah:</p>
            <ul>
                <li><strong>Gangguan kecemasan</strong>, termasuk cemas berpisah, cemas menyeluruh, dan kecemasan sosial. NICE menganjurkan CBT individual atau kelompok yang berfokus pada kecemasan sosial untuk anak dan remaja dengan gangguan kecemasan sosial (${ext(L.niceSocial, 'NICE CG159')}).</li>
                <li><strong>Gangguan obsesif kompulsif (OCD)</strong>, dengan teknik paparan dan pencegahan respons.</li>
                <li><strong>Depresi pada anak dan remaja.</strong> NICE mencantumkan CBT digital, CBT kelompok, dan CBT individual di antara pilihan terapi psikologis, dengan catatan terapis harus terlatih di bidang kesehatan jiwa anak dan remaja (${ext(L.niceDep, 'NICE NG134')}).</li>
                <li><strong>Trauma.</strong> Pendekatan CBT yang berfokus pada trauma dibahas lebih rinci di artikel <a href="/artikel/ptsd-pada-anak-gejala-dan-penanganan">PTSD pada anak</a>.</li>
            </ul>
            <p>Untuk masalah perilaku seperti tantrum berat atau perilaku menentang pada anak kecil, pendekatan yang lebih banyak dipakai biasanya pelatihan orang tua berbasis perilaku. Karena itu, asesmen awal oleh psikolog penting agar jenis terapinya tepat. Gambaran pilihan terapi lain ada di artikel <a href="/artikel/macam-macam-terapi-pada-anak">macam-macam terapi pada anak</a>.</p>

            <h2 id="bukti">Apa Kata Penelitian?</h2>
            <h3>Kecemasan: bukti paling banyak</h3>
            <p>Tinjauan Cochrane tahun 2020 merangkum <strong>87 studi dengan 5.964 peserta</strong> berusia di bawah 19 tahun yang mengalami gangguan kecemasan. Setelah terapi, <strong>49,4% anak yang menjalani CBT</strong> tidak lagi memenuhi kriteria gangguan kecemasan utamanya, dibanding <strong>17,8%</strong> pada kelompok yang menunggu atau tanpa terapi. Artinya, kira-kira satu dari setiap tiga anak yang diterapi mendapat manfaat tambahan (${ext(L.cochrane, 'James dkk., Cochrane 2020')}).</p>
            <p>Tinjauan yang sama juga jujur soal keterbatasannya: bukti bahwa CBT lebih unggul dibanding layanan biasa atau terapi alternatif lain masih sedikit, dan tidak ada efek samping yang dilaporkan, walau efek samping jarang dipantau secara sistematis. Jadi CBT jelas lebih baik daripada tidak diterapi, tetapi bukan satu-satunya jalan.</p>
            <p>Uji klinis besar CAMS melibatkan <strong>488 anak usia 7 sampai 17 tahun</strong> dengan gangguan kecemasan. Setelah 12 minggu, anak yang dinilai membaik banyak atau sangat banyak mencapai <strong>59,7% pada kelompok CBT</strong>, 54,9% pada kelompok obat sertraline, dan <strong>80,7% pada kombinasi keduanya</strong>, semuanya lebih baik daripada plasebo. Kelompok CBT juga lebih jarang mengalami sulit tidur, lelah, dan gelisah dibanding kelompok obat (${ext(L.cams, 'Walkup dkk., 2008')}). Pemberian obat tentu hanya boleh atas resep dan pengawasan dokter.</p>
            <h3>OCD</h3>
            <p>Studi POTS pada anak dan remaja usia 7 sampai 17 tahun dengan OCD menemukan angka remisi setelah 12 minggu sebesar <strong>53,6% untuk kombinasi CBT dan sertraline</strong>, <strong>39,3% untuk CBT saja</strong>, 21,4% untuk sertraline saja, dan 3,6% untuk plasebo. Penulisnya menyimpulkan anak dengan OCD sebaiknya memulai penanganan dengan CBT saja atau CBT bersama obat (${ext(L.pots, 'POTS Team, 2004')}).</p>

            <h2 id="abk">CBT untuk Anak Berkebutuhan Khusus</h2>
            <p>Kecemasan cukup sering menyertai <a href="/artikel/autisme-adalah">autisme</a> dan <a href="/artikel/adhd-adalah">ADHD</a>. Meta-analisis atas <strong>8 uji acak dengan 469 peserta autis</strong> menemukan penurunan kecemasan yang besar setelah CBT, baik menurut penilaian klinisi maupun orang tua. Penulisnya tetap mencatat perlunya penelitian lanjutan dengan kelompok kontrol yang lebih ketat (${ext(L.asd, 'Sukhodolsky dkk., 2013')}).</p>
            <p>Sebagian besar studi itu melibatkan anak autis dengan kemampuan bahasa yang cukup. Tinjauan Cochrane juga mencatat masih sedikit bukti untuk anak dengan hambatan intelektual (${ext(L.cochrane, 'James dkk., 2020')}). Karena itu, untuk anak berkebutuhan khusus CBT biasanya dimodifikasi:</p>
            <ul>
                <li>Lebih banyak bahan visual, seperti gambar, skala warna, dan <a href="/artikel/jadwal-visual-anak-autis">jadwal visual</a>.</li>
                <li>Bahasa yang singkat, konkret, dan tidak bergantung pada kiasan.</li>
                <li>Memanfaatkan minat khusus anak sebagai contoh atau hadiah.</li>
                <li>Porsi latihan perilaku dan peran orang tua lebih besar.</li>
                <li>Memperhatikan kebutuhan sensori anak saat latihan paparan.</li>
            </ul>
            <p>Untuk ADHD, CBT tidak menggantikan penanganan inti yang dianjurkan dokter, tetapi dapat membantu remaja dengan keterampilan mengatur diri dan masalah emosi yang menyertai. Pilihan penanganan ADHD dibahas di artikel <a href="/artikel/terapi-adhd-pada-anak">terapi ADHD pada anak</a>.</p>

            <h2 id="sesi">Seperti Apa Sesi CBT Anak?</h2>
            <ol>
                <li><strong>Asesmen awal.</strong> Psikolog berbicara dengan orang tua dan anak, mengamati, dan bila perlu memakai alat tes untuk memahami masalah dan kekuatan anak. Informasi soal proses tes ada di artikel <a href="/artikel/asesmen-abk">asesmen ABK</a>.</li>
                <li><strong>Menyusun tujuan bersama.</strong> Tujuannya konkret, misalnya "bisa masuk kelas tanpa menangis" atau "bisa tidur di kamar sendiri".</li>
                <li><strong>Sesi terstruktur.</strong> Setiap sesi biasanya diawali meninjau latihan minggu lalu, mempelajari satu keterampilan baru, lalu mempraktikkannya. Dalam uji CAMS, program CBT berlangsung <strong>14 sesi selama 12 minggu</strong> (${ext(L.cams, 'Walkup dkk., 2008')}), tetapi jumlah sesi setiap anak bisa berbeda.</li>
                <li><strong>Latihan di rumah dan sekolah.</strong> Keterampilan baru dilatih di situasi nyata, dibantu orang tua dan guru.</li>
                <li><strong>Evaluasi dan penutupan.</strong> Kemajuan diukur, lalu disusun rencana agar anak tetap memakai keterampilannya dan tahu apa yang dilakukan bila gejalanya kambuh.</li>
            </ol>

            <h2 id="orang-tua">Peran Orang Tua dan Guru</h2>
            <p>Hasil CBT anak sangat dipengaruhi apa yang terjadi di antara sesi. Beberapa hal yang bisa dilakukan:</p>
            <ul>
                <li><strong>Validasi perasaan, jangan meremehkan.</strong> Ganti "Begitu saja kok takut" dengan "Kamu merasa takut, ya. Ayo kita coba langkah kecilnya bersama."</li>
                <li><strong>Kurangi pola menyelamatkan.</strong> Menghindarkan anak dari semua hal yang ia takuti terasa menolong, tetapi bisa membuat kecemasan bertahan. Ikuti tangga latihan yang disusun terapis.</li>
                <li><strong>Puji usahanya secara spesifik.</strong> "Tadi kamu berani menyapa teman walau deg-degan, hebat."</li>
                <li><strong>Jadi contoh.</strong> Anak belajar dari cara orang tua menghadapi rasa cemas dan kecewa.</li>
                <li><strong>Jaga kesehatan diri sendiri.</strong> Mendampingi anak butuh tenaga. Baca juga <a href="/artikel/mengelola-stres-orang-tua-anak-abk">cara mengelola stres orang tua anak ABK</a>.</li>
            </ul>
            <p>Guru dapat membantu dengan menyepakati strategi yang sama dengan orang tua dan terapis, memberi waktu tenang saat anak kewalahan, dan menghargai langkah kecil anak di kelas. Anak yang juga mengalami <a href="/artikel/kesulitan-belajar">kesulitan belajar</a> perlu dukungan akademik yang terpisah dari CBT.</p>

            <h2 id="memilih">Memilih Tenaga Profesional</h2>
            <ul>
                <li>Pilih <strong>psikolog klinis</strong> yang berizin praktik dan berpengalaman menangani anak. Tanyakan apakah ia terlatih dalam CBT.</li>
                <li>Tanyakan rencana terapinya: tujuan, perkiraan jumlah sesi, dan cara kemajuan diukur.</li>
                <li>Pastikan orang tua dilibatkan dan mendapat panduan latihan di rumah.</li>
                <li>Waspadai layanan yang menjanjikan "sembuh total" dalam waktu singkat atau tidak melakukan asesmen lebih dulu.</li>
                <li>Bila anak menunjukkan tanda bahaya, seperti membicarakan keinginan mengakhiri hidup atau melukai diri, segera cari bantuan medis darurat.</li>
            </ul>
            <p>Referensi tempat layanan di sekitar Yogyakarta tersedia di artikel <a href="/artikel/tempat-terapi-anak-jogja">tempat terapi anak Jogja</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a> melalui pendidikan inklusi dan layanan terapi di Sleman. Untuk mengetahui layanan yang tersedia, hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a> atau lihat <a href="/program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/macam-macam-terapi-pada-anak">Macam-Macam Terapi pada Anak</a></h4>
                    <p>Mengenal pilihan terapi untuk kebutuhan anak yang berbeda.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/terapi-bermain">Terapi Bermain</a></h4>
                    <p>Bermain sebagai cara anak mengolah perasaan.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/terapi-aba">Terapi ABA</a></h4>
                    <p>Pendekatan analisis perilaku untuk anak autis.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#CBT</a>
            <a href="#">#TerapiAnak</a>
            <a href="#">#Kecemasan</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.cochrane, 'James AC, Reardon T, Soler A, James G, Creswell C. <strong>Cognitive behavioural therapy for anxiety disorders in children and adolescents.</strong> Cochrane Database Syst Rev. 2020;11:CD013162')}</li>
              <li>${ext(L.cams, 'Walkup JT, dkk. <strong>Cognitive behavioral therapy, sertraline, or a combination in childhood anxiety.</strong> N Engl J Med. 2008;359(26):2753-66')}</li>
              <li>${ext(L.pots, 'Pediatric OCD Treatment Study (POTS) Team. <strong>Cognitive-behavior therapy, sertraline, and their combination for children and adolescents with obsessive-compulsive disorder.</strong> JAMA. 2004;292(16):1969-76')}</li>
              <li>${ext(L.asd, 'Sukhodolsky DG, dkk. <strong>Cognitive-behavioral therapy for anxiety in children with high-functioning autism: a meta-analysis.</strong> Pediatrics. 2013;132(5):e1341-50')}</li>
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
                <a href="https://wa.me/?text=Terapi%20Perilaku%20Kognitif%20Anak%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Terapi%20Perilaku%20Kognitif%20Anak&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

#!/usr/bin/env node
'use strict';

// One-time generator for artikel/gangguan-makan-anak-abk.html
// (catchup 2026-09-28, kartu ZVH7mIQt). Canonical shell via scripts/lib/article-shell.js.
// Page skeleton (head, nav, share, CTA) copied from scripts/gen-terapi-seni-untuk-anak-berkebutuhan-khusus.js.
// YMYL: every claim was checked on 2026-09-28 against the PubMed abstract or official page:
// - PMID 30358739 Goday 2019 JPGN: Pediatric Feeding Disorder = impaired oral intake that is not age-appropriate,
//   associated with medical, nutritional, feeding skill and/or psychosocial dysfunction; 4 domains; WHO ICF framework.
// - PMID 23371510 Sharp 2013 J Autism Dev Disord: 17 prospective studies, ASD children more feeding problems,
//   OR 5.11 (95% CI 3.74-6.97); lower calcium and protein intake.
// - PMID 39760303 Sader 2025 Int J Eat Disord: 21 studies, n=7442; autism in ARFID 16.27%, ARFID in autism 11.41%
//   (95% CI 2.89-35.76%); suggests screening.
// - PMID 39679744 Estrem 2025 Int J Eat Disord: US consensus on overlap and distinction PFD vs ARFID.
// - PMID 42696185 Sariyer Temelli 2026 Curr Nutr Rep: ASD food selectivity + sensory; ADHD impulsive/irregular eating,
//   obesity risk; intellectual disability poor diet quality, swallowing difficulties, micronutrient deficiency;
//   Down syndrome feeding difficulties + obesity risk; multifactorial; individualized multidisciplinary + family.
// - PMID 40012369 Taylor 2025 JBI Evid Synth: CP feeding difficulties common, dysphagia and aspiration risk,
//   poor growth; caregivers find feeding stressful.
// - PMID 27843007 Sharp 2017 J Pediatr: intensive multidisciplinary intervention for pediatric feeding disorders.
// - NHS eating disorders overview: ARFID definition, not about weight/body shape; reasons smell/taste/texture,
//   past upsetting experience (choking, being sick), lack of interest in eating.
// Photo: Wikimedia Commons File:Mashed potoatoes, rice and vegetables.jpg, Daniel Sone / National Cancer Institute,
//   public domain, viewed before use (penne with pesto, black bean corn salad, mashed potato scoops on kale).

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'gangguan-makan-anak-abk';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Gangguan Makan Anak ABK: Tanda, Penyebab, Penanganan';
const META_DESC = 'Gangguan makan anak ABK: beda pilih-pilih makan, ARFID, dan pediatric feeding disorder, tanda bahaya, dan tim yang menangani. Baca panduan lengkapnya.';
const OG_TITLE = 'Gangguan Makan Anak ABK: Tanda, Penyebab, dan Cara Penanganannya';
const OG_DESC = 'Kenapa anak berkebutuhan khusus lebih sering sulit makan, kapan pilih-pilih makan berubah jadi gangguan, dan siapa yang perlu dilibatkan untuk menanganinya.';
const H1 = 'Gangguan Makan Anak ABK: Tanda, Penyebab, dan Cara Penanganannya';
const IMAGE_HERO = 'assets/images/artikel/piring-pasta-kacang-kentang-tumbuk-wikimedia.webp';
const IMAGE_HERO_ALT = 'Piring saji oval berisi tiga makanan bertekstur berbeda di atas daun kale: pasta penne berbumbu pesto, salad kacang hitam dengan jagung dan tomat, serta bulatan kentang tumbuk, dihias bunga anggrek ungu';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T10:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T10:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';

const CREDIT = {
  name: 'Daniel Sone, National Cancer Institute',
  author: 'https://visualsonline.cancer.gov/details.cfm?imageid=8353',
  source: 'https://commons.wikimedia.org/wiki/File:Mashed_potoatoes,_rice_and_vegetables.jpg',
  license: 'Public Domain',
  licenseUrl: 'https://commons.wikimedia.org/wiki/File:Mashed_potoatoes,_rice_and_vegetables.jpg'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  goday: 'https://pubmed.ncbi.nlm.nih.gov/30358739/',
  sharp13: 'https://pubmed.ncbi.nlm.nih.gov/23371510/',
  sader: 'https://pubmed.ncbi.nlm.nih.gov/39760303/',
  estrem: 'https://pubmed.ncbi.nlm.nih.gov/39679744/',
  temelli: 'https://pubmed.ncbi.nlm.nih.gov/42696185/',
  taylor: 'https://pubmed.ncbi.nlm.nih.gov/40012369/',
  sharp17: 'https://pubmed.ncbi.nlm.nih.gov/27843007/',
  nhs: 'https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/behaviours/eating-disorders/overview/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa itu gangguan makan pada anak ABK?',
    a: 'Gangguan makan pada anak berkebutuhan khusus adalah kesulitan makan yang tidak sesuai usia dan berdampak pada kesehatan, gizi, keterampilan makan, atau kehidupan sosial anak. Istilah medisnya bisa berupa pediatric feeding disorder atau ARFID, dan penetapannya dilakukan oleh dokter atau tim klinis, bukan dari pengamatan di rumah saja.'
  },
  {
    q: 'Apa bedanya pilih-pilih makan biasa dengan ARFID?',
    a: 'Pilih-pilih makan biasa tidak mengganggu pertumbuhan dan aktivitas anak. ARFID adalah kondisi ketika anak menghindari makanan tertentu, makan terlalu sedikit, atau keduanya, sampai berdampak pada gizi atau kehidupan sehari-hari. Penyebabnya bukan soal berat badan atau bentuk tubuh, melainkan misalnya tekstur, bau, rasa, atau pengalaman buruk seperti tersedak.'
  },
  {
    q: 'Mengapa anak autis lebih sering sulit makan?',
    a: 'Meta-analisis 17 studi menemukan anak autis memiliki peluang sekitar lima kali lebih besar mengalami masalah makan dibanding anak seusianya. Faktor yang sering disebut adalah sensitivitas sensorik terhadap tekstur dan bau, kebutuhan akan rutinitas yang sama, serta kesulitan menerima hal baru.'
  },
  {
    q: 'Kapan orang tua perlu membawa anak ABK yang sulit makan ke dokter?',
    a: 'Segera periksakan anak bila berat badan turun atau tidak naik, sering tersedak atau batuk saat makan, makan sangat lama, jenis makanan yang diterima makin sedikit, atau anak tampak lemas. Dokter anak dapat menilai kondisi medis dan merujuk ke ahli gizi, terapis wicara, terapis okupasi, atau psikolog.'
  },
  {
    q: 'Apakah gangguan makan anak ABK bisa membaik?',
    a: 'Banyak anak menunjukkan perbaikan dengan penanganan yang tepat. Penanganan yang dianjurkan bersifat individual, melibatkan beberapa disiplin sekaligus, dan melibatkan keluarga secara aktif. Hasilnya berbeda pada tiap anak, jadi targetnya disepakati bersama tim yang menangani.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Gangguan Makan Anak ABK', item: CANONICAL }
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
    height: 666,
    caption: 'Tiga makanan dengan tekstur berbeda dalam satu piring saji',
    creditText: 'Foto: Daniel Sone, National Cancer Institute / Wikimedia Commons, Public Domain',
    author: { '@type': 'Person', name: 'Daniel Sone', url: CREDIT.author },
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
  keywords: 'gangguan makan anak abk, ARFID anak, pediatric feeding disorder, anak autis susah makan, kesulitan makan anak berkebutuhan khusus',
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
    <meta name="keywords" content="gangguan makan anak abk, ARFID anak, pediatric feeding disorder, anak autis susah makan, YUKA">
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
                <span class="current">Gangguan Makan Anak ABK</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="666" fetchpriority="high">
            <figcaption>Tekstur yang berbeda dalam satu piring, seperti pasta, kacang, dan kentang tumbuk, bisa terasa sangat berbeda bagi anak yang peka secara sensorik.
                <span class="kredit">Foto: <a href="${CREDIT.author}" rel="nofollow noopener" target="_blank">Daniel Sone, National Cancer Institute</a> / <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">Wikimedia Commons</a>, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">Public Domain</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> gangguan makan anak ABK adalah kesulitan makan yang tidak sesuai usia dan sudah berdampak pada kesehatan, gizi, keterampilan makan, atau keseharian anak. Anak berkebutuhan khusus lebih rentan mengalaminya karena faktor sensorik, motorik mulut, medis, dan perilaku sering muncul bersamaan. Pada anak autis, peluang mengalami masalah makan sekitar <strong>lima kali</strong> lebih tinggi dibanding anak seusianya. Penanganannya dilakukan oleh <strong>tim lintas profesi</strong> bersama keluarga, bukan dengan memaksa anak makan.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah rangkuman informasi untuk orang tua, guru, dan pendamping, <strong>bukan alat diagnosis dan bukan saran medis</strong>. Istilah seperti ARFID dan pediatric feeding disorder hanya bisa ditetapkan oleh dokter atau tim klinis. Semua temuan penelitian di bawah dicek terhadap abstrak di PubMed dan halaman resmi NHS pada 28 September 2026.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu gangguan makan pada anak ABK?</a></li>
                    <li><a href="#pilih-pilih">Pilih-pilih makan, ARFID, dan pediatric feeding disorder</a></li>
                    <li><a href="#seberapa-sering">Seberapa sering terjadi pada anak ABK?</a></li>
                    <li><a href="#per-kondisi">Pola kesulitan makan menurut kondisi anak</a></li>
                    <li><a href="#tanda-bahaya">Tanda bahaya yang perlu segera diperiksakan</a></li>
                    <li><a href="#tim">Siapa yang menangani?</a></li>
                    <li><a href="#rumah">Yang bisa dilakukan orang tua di rumah</a></li>
                    <li><a href="#sekolah">Peran guru dan sekolah</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Gangguan Makan pada Anak ABK?</h2>
            <p>Hampir semua orang tua pernah menghadapi anak yang menolak sayur. Pada <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus (ABK)</a>, masalahnya sering lebih berat dan lebih lama: daftar makanan yang mau dimakan sangat pendek, waktu makan penuh tangis, atau anak sering tersedak.</p>
            <p>Para ahli gizi anak, gastroenterologi, psikologi, dan terapi menyepakati satu istilah payung, yaitu <strong>pediatric feeding disorder (PFD)</strong>. PFD didefinisikan sebagai <strong>asupan makan lewat mulut yang terganggu dan tidak sesuai usia</strong>, disertai gangguan pada satu atau lebih dari empat ranah: medis, gizi, keterampilan makan, dan psikososial (${ext(L.goday, 'Goday dkk., 2019')}). Kerangka ini memakai klasifikasi fungsi dan disabilitas dari WHO (ICF), sehingga yang dinilai bukan hanya "anak mau makan atau tidak", tetapi juga dampaknya pada tubuh dan keseharian anak.</p>
            <p>Empat ranah itu penting dipahami orang tua karena menentukan siapa yang perlu dilibatkan:</p>
            <ul>
                <li><strong>Medis:</strong> misalnya refluks, sembelit, alergi, atau gangguan menelan.</li>
                <li><strong>Gizi:</strong> berat badan tidak naik, kekurangan zat gizi tertentu, atau ketergantungan pada susu atau suplemen.</li>
                <li><strong>Keterampilan makan:</strong> kemampuan mengunyah, menelan, memakai sendok, dan minum dari gelas.</li>
                <li><strong>Psikososial:</strong> perilaku menolak, kecemasan saat makan, dan ketegangan di keluarga karena jam makan.</li>
            </ul>

            <h2 id="pilih-pilih">Pilih-Pilih Makan, ARFID, dan Pediatric Feeding Disorder</h2>
            <p>Tiga istilah ini sering tertukar. Bedanya terletak pada dampak dan penyebab.</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Istilah</th><th>Gambaran</th><th>Dampak</th></tr>
                </thead>
                <tbody>
                    <tr><td>Pilih-pilih makan (picky eating)</td><td>Anak menolak beberapa jenis makanan, tetapi masih mau cukup banyak variasi</td><td>Tumbuh kembang dan aktivitas tidak terganggu</td></tr>
                    <tr><td>ARFID (avoidant/restrictive food intake disorder)</td><td>Anak menghindari makanan tertentu, membatasi jumlah makan, atau keduanya. Bukan karena ingin kurus</td><td>Berdampak pada gizi, pertumbuhan, atau kehidupan sehari-hari</td></tr>
                    <tr><td>Pediatric feeding disorder (PFD)</td><td>Asupan makan lewat mulut terganggu dan tidak sesuai usia</td><td>Disertai gangguan medis, gizi, keterampilan makan, atau psikososial</td></tr>
                </tbody>
            </table>
            </div>
            <p>Menurut NHS (layanan kesehatan nasional Inggris), ARFID terjadi saat seseorang menghindari makanan tertentu, membatasi jumlah makan, atau keduanya, dan <strong>keyakinan soal berat atau bentuk tubuh bukan alasannya</strong>. Kemungkinan penyebabnya antara lain perasaan tidak nyaman terhadap bau, rasa, atau tekstur makanan, pengalaman buruk dengan makanan seperti tersedak atau muntah, serta tidak merasa lapar atau kurang tertarik makan (${ext(L.nhs, 'NHS, Eating disorders')}).</p>
            <p>PFD dan ARFID bisa tumpang tindih pada satu anak. Konsensus para ahli di Amerika Serikat tahun 2025 khusus membahas kapan kedua diagnosis itu beririsan dan kapan dibedakan (${ext(L.estrem, 'Estrem dkk., 2025')}). Bagi orang tua, yang terpenting: label diagnosis ditetapkan tim klinis, sedangkan tugas keluarga adalah mencatat pola makan anak dengan jujur.</p>
            <p>Kalau anak Anda autis dan masalah utamanya menolak banyak jenis makanan, strategi praktisnya sudah kami bahas di artikel <a href="/artikel/cara-mengatasi-picky-eater-anak-autis">cara mengatasi picky eater anak autis</a>. Artikel ini membahas gambaran yang lebih luas untuk semua kondisi ABK.</p>

            <h2 id="seberapa-sering">Seberapa Sering Terjadi pada Anak ABK?</h2>
            <p>Data paling kuat datang dari penelitian pada anak autis:</p>
            <ul>
                <li>Meta-analisis 17 studi prospektif menemukan anak dengan gangguan spektrum autisme mengalami masalah makan jauh lebih sering dibanding anak seusianya, dengan <strong>odds ratio 5,11</strong> (IK 95% 3,74 sampai 6,97). Asupan <strong>kalsium dan protein</strong> mereka juga lebih rendah (${ext(L.sharp13, 'Sharp dkk., 2013')}).</li>
                <li>Meta-analisis 21 studi dengan 7.442 peserta menemukan <strong>16,27%</strong> orang dengan ARFID juga terdiagnosis autis, dan sekitar <strong>11,41%</strong> kelompok autis memenuhi kriteria ARFID. Rentang keyakinan angka kedua ini masih lebar (2,89% sampai 35,76%), sehingga penulis menyarankan skrining ARFID pada individu autis dan sebaliknya (${ext(L.sader, 'Sader dkk., 2025')}).</li>
            </ul>
            <p>Untuk kondisi lain, datanya lebih banyak berupa tinjauan naratif. Tinjauan tahun 2026 tentang masalah gizi pada gangguan perkembangan saraf menyimpulkan bahwa penyebabnya <strong>multifaktor</strong>: biologis, perilaku, sensorik, kognitif, dan lingkungan (${ext(L.temelli, 'Sariyer Temelli dkk., 2026')}).</p>

            <h2 id="per-kondisi">Pola Kesulitan Makan Menurut Kondisi Anak</h2>
            <p>Tiap kondisi punya pola yang cenderung berbeda. Tabel ini merangkum temuan tinjauan penelitian, bukan patokan untuk mendiagnosis anak.</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Kondisi</th><th>Pola yang sering dilaporkan</th><th>Sumber</th></tr>
                </thead>
                <tbody>
                    <tr><td><a href="/artikel/autisme-adalah">Autisme</a></td><td>Selektif terhadap makanan dan sensitif secara sensorik, sehingga variasi makanan terbatas</td><td>Sariyer Temelli dkk., 2026; Sharp dkk., 2013</td></tr>
                    <tr><td><a href="/artikel/adhd-adalah">ADHD</a></td><td>Makan impulsif dan pola makan tidak teratur, dengan risiko obesitas yang lebih tinggi</td><td>Sariyer Temelli dkk., 2026</td></tr>
                    <tr><td>Disabilitas intelektual</td><td>Kualitas makanan kurang baik, kesulitan menelan, dan kekurangan zat gizi mikro</td><td>Sariyer Temelli dkk., 2026</td></tr>
                    <tr><td><a href="/artikel/down-syndrome-adalah">Down syndrome</a></td><td>Kesulitan makan sekaligus risiko obesitas yang lebih tinggi</td><td>Sariyer Temelli dkk., 2026</td></tr>
                    <tr><td><a href="/artikel/cerebral-palsy-adalah">Cerebral palsy</a></td><td>Gangguan menelan (disfagia) dan risiko aspirasi, yang bisa mengganggu pertumbuhan</td><td>Taylor dkk., 2025</td></tr>
                </tbody>
            </table>
            </div>
            <p>Beberapa catatan praktis dari pola di atas:</p>
            <ul>
                <li><strong>Faktor sensorik.</strong> Anak yang sangat peka terhadap tekstur, bau, atau suhu makanan sering menolak makanan campur atau bertekstur kasar. Pahami dasarnya lewat artikel <a href="/artikel/sensori-integrasi">sensori integrasi</a>.</li>
                <li><strong>Faktor motorik mulut.</strong> Otot bibir, lidah, dan rahang yang lemah membuat anak sulit mengunyah dan menelan. Latihan yang biasa dipakai terapis ada di artikel <a href="/artikel/terapi-wicara-oral-motor-exercises">oral motor exercises dalam terapi wicara</a>.</li>
                <li><strong>Faktor medis.</strong> Sembelit, refluks, atau nyeri gigi dapat membuat anak menolak makan tanpa bisa menjelaskan sebabnya. Hubungan pencernaan dan autisme dibahas di artikel <a href="/artikel/gut-microbiome-dan-autisme-penelitian">gut microbiome dan autisme</a>.</li>
                <li><strong>Faktor perilaku dan rutinitas.</strong> Anak yang butuh keteraturan bisa hanya mau makanan dengan merek, warna, atau piring yang sama.</li>
            </ul>

            <h2 id="tanda-bahaya">Tanda Bahaya yang Perlu Segera Diperiksakan</h2>
            <p>Segera konsultasikan ke dokter anak bila Anda melihat salah satu tanda berikut:</p>
            <ul>
                <li>Berat badan turun, tidak naik, atau garis pertumbuhan di buku KIA melambat.</li>
                <li>Sering <strong>tersedak, batuk, atau tampak sesak</strong> saat makan atau minum. Pada anak dengan gangguan menelan, ini bisa berkaitan dengan risiko aspirasi (${ext(L.taylor, 'Taylor dkk., 2025')}).</li>
                <li>Jumlah jenis makanan yang mau dimakan terus berkurang.</li>
                <li>Anak sangat bergantung pada susu, bubur halus, atau satu jenis makanan saja di usia yang seharusnya sudah makan makanan keluarga.</li>
                <li>Waktu makan sangat lama dan selalu berakhir dengan tangis, muntah, atau anak menutup mulut rapat.</li>
                <li>Anak tampak lemas, pucat, sering sakit, atau sembelit berkepanjangan.</li>
            </ul>
            <p>Catat pola makan anak selama beberapa hari sebelum ke dokter: apa yang dimakan, berapa banyak, berapa lama, dan apa yang terjadi saat anak menolak. Catatan ini jauh lebih berguna daripada ingatan saat konsultasi.</p>

            <h2 id="tim">Siapa yang Menangani Gangguan Makan Anak ABK?</h2>
            <p>Karena PFD mencakup empat ranah, penanganannya juga melibatkan beberapa profesi (${ext(L.goday, 'Goday dkk., 2019')}). Tinjauan tahun 2026 juga menekankan <strong>intervensi individual, multidisiplin, dan keterlibatan aktif keluarga</strong> (${ext(L.temelli, 'Sariyer Temelli dkk., 2026')}).</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Profesi</th><th>Peran</th></tr>
                </thead>
                <tbody>
                    <tr><td>Dokter spesialis anak</td><td>Menilai pertumbuhan, mencari penyebab medis, dan menjadi koordinator rujukan</td></tr>
                    <tr><td>Ahli gizi atau dokter gizi klinik</td><td>Menilai kecukupan gizi dan menyusun rencana makan yang realistis</td></tr>
                    <tr><td>Terapis wicara</td><td>Menangani kemampuan mengunyah, menelan, dan motorik mulut</td></tr>
                    <tr><td><a href="/artikel/terapi-okupasi">Terapis okupasi</a></td><td>Menangani faktor sensorik, posisi duduk, dan kemandirian makan</td></tr>
                    <tr><td>Psikolog</td><td>Menangani kecemasan, perilaku menolak, dan pola interaksi saat makan</td></tr>
                </tbody>
            </table>
            </div>
            <p>Bedanya peran terapis wicara dan terapis okupasi dijelaskan di artikel <a href="/artikel/perbedaan-terapi-okupasi-dan-terapi-wicara">perbedaan terapi okupasi dan terapi wicara</a>. Untuk kasus berat yang tidak membaik dengan terapi rawat jalan, ada program intensif multidisiplin di rumah sakit, dan efektivitasnya sudah dirangkum dalam meta-analisis (${ext(L.sharp17, 'Sharp dkk., 2017')}).</p>

            <h2 id="rumah">Yang Bisa Dilakukan Orang Tua di Rumah</h2>
            <p>Langkah berikut bersifat umum dan tidak menggantikan rencana dari tim yang menangani anak:</p>
            <ol>
                <li><strong>Jangan memaksa atau menyuapi dengan paksa.</strong> Paksaan menambah pengalaman buruk dengan makanan, yang menurut NHS justru termasuk pemicu ARFID.</li>
                <li><strong>Buat jadwal makan yang teratur</strong> dengan jam makan dan camilan yang jelas. Anak yang butuh keteraturan terbantu oleh <a href="/artikel/jadwal-visual-anak-autis">jadwal visual</a>.</li>
                <li><strong>Sajikan makanan baru berdampingan dengan makanan yang sudah disukai</strong>, dalam porsi sangat kecil, tanpa kewajiban untuk dimakan.</li>
                <li><strong>Perhatikan posisi duduk.</strong> Kaki menapak dan punggung tegak membantu anak mengunyah dan menelan dengan aman. Untuk anak dengan hambatan motorik, minta arahan terapis.</li>
                <li><strong>Kenali tekstur yang ditoleransi anak</strong> dan naikkan tahapannya pelan-pelan bersama terapis.</li>
                <li><strong>Jangan mengganti makan dengan susu atau suplemen tanpa arahan dokter.</strong> Hal yang sama berlaku untuk diet khusus seperti bebas gluten. Untuk anak ADHD, lihat juga pembahasan <a href="/artikel/makanan-yang-harus-dihindari-anak-adhd">makanan yang perlu dibatasi pada anak ADHD</a>.</li>
                <li><strong>Jaga suasana makan tetap tenang.</strong> Jam makan yang penuh ketegangan melelahkan seluruh keluarga. Tips menjaga diri ada di artikel <a href="/artikel/mengelola-stres-orang-tua-anak-abk">mengelola stres orang tua anak ABK</a>.</li>
            </ol>

            <h2 id="sekolah">Peran Guru dan Sekolah</h2>
            <p>Anak menghabiskan beberapa jam sehari di sekolah, termasuk jam makan bekal. Guru dan pendamping bisa membantu dengan cara:</p>
            <ul>
                <li>Mengikuti rencana makan dari orang tua dan terapis, bukan membuat aturan sendiri.</li>
                <li>Tidak menjadikan makanan sebagai hadiah atau hukuman.</li>
                <li>Memberi tempat makan yang lebih tenang bagi anak yang mudah kewalahan oleh suara dan bau.</li>
                <li>Mencatat dan melaporkan kejadian tersedak atau penolakan makan kepada orang tua.</li>
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
                    <h4><a href="/artikel/cara-mengatasi-picky-eater-anak-autis">Cara Mengatasi Picky Eater Anak Autis</a></h4>
                    <p>Strategi praktis untuk anak autis yang pilih-pilih makan.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/macam-macam-terapi-pada-anak">Macam-Macam Terapi pada Anak</a></h4>
                    <p>Mengenal pilihan terapi untuk anak berkebutuhan khusus.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/sensori-integrasi">Sensori Integrasi</a></h4>
                    <p>Dasar pengolahan sensorik yang memengaruhi cara anak makan.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#GangguanMakan</a>
            <a href="#">#ARFID</a>
            <a href="#">#Autisme</a>
            <a href="#">#GiziAnak</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.goday, 'Goday PS, dkk. <strong>Pediatric Feeding Disorder: Consensus Definition and Conceptual Framework.</strong> J Pediatr Gastroenterol Nutr. 2019;68(1):124-129')}</li>
              <li>${ext(L.sharp13, 'Sharp WG, dkk. <strong>Feeding problems and nutrient intake in children with autism spectrum disorders: a meta-analysis and comprehensive review of the literature.</strong> J Autism Dev Disord. 2013;43(9):2159-73')}</li>
              <li>${ext(L.sader, 'Sader M, dkk. <strong>The Co-Occurrence of Autism and Avoidant/Restrictive Food Intake Disorder (ARFID): A Prevalence-Based Meta-Analysis.</strong> Int J Eat Disord. 2025;58(3):473-488')}</li>
              <li>${ext(L.estrem, 'Estrem HH, dkk. <strong>A US-Based Consensus on Diagnostic Overlap and Distinction for Pediatric Feeding Disorder and Avoidant/Restrictive Food Intake Disorder.</strong> Int J Eat Disord. 2025;58(3):489-499')}</li>
              <li>${ext(L.temelli, 'Sariyer Temelli MN, dkk. <strong>Nutritional Problems in Neurodevelopmental Disorders: A Narrative Review.</strong> Curr Nutr Rep. 2026;15(1):75')}</li>
              <li>${ext(L.taylor, 'Taylor C, Badawi N, Novak I, Foster J. <strong>Caregivers\' experiences of feeding children with cerebral palsy: a systematic review of qualitative evidence.</strong> JBI Evid Synth. 2025;23(4):704-755')}</li>
              <li>${ext(L.sharp17, 'Sharp WG, dkk. <strong>A Systematic Review and Meta-Analysis of Intensive Multidisciplinary Intervention for Pediatric Feeding Disorders.</strong> J Pediatr. 2017;181:116-124')}</li>
              <li>${ext(L.nhs, 'NHS. <strong>Eating disorders: overview</strong> (bagian ARFID). nhs.uk')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat medis</strong>. Gangguan makan pada anak perlu dinilai langsung oleh dokter dan tim yang berkompeten. Jangan mengubah pola makan, susu, atau suplemen anak tanpa arahan tenaga kesehatan. Sumber dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Gangguan%20Makan%20Anak%20ABK%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Gangguan%20Makan%20Anak%20ABK&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

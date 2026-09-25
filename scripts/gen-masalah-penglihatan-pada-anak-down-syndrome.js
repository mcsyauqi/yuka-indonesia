#!/usr/bin/env node
'use strict';

// One-time generator for artikel/masalah-penglihatan-pada-anak-down-syndrome.html
// (catchup 2026-09-25, kartu 6yLkYFCF). Canonical shell via scripts/lib/article-shell.js.
// YMYL kesehatan mata anak Down syndrome. Every figure below was checked live on 2026-09-25:
// - AAPOS "Down Syndrome" patient page (aapos.org/glossary/down-syndrome, updated 04/2023):
//   strabismus 20%-60%, esotropia more common, keratoconus around puberty + eye rubbing,
//   cataract congenital/developing, glaucoma infants, blepharitis, NLDO tearing, nystagmus,
//   bifocals, AAP exam within first 6 months.
// - EyeWiki (American Academy of Ophthalmology) "Trisomy 21/Down Syndrome": ophthalmic disorder
//   prevalence 46%-100%, nystagmus 3%-33%, blepharitis 3%-34%, accommodation deficit 32%-100%,
//   keratoconus up to 20.8%-32% with modern topography, Norway 30x risk, congenital cataract up to
//   2.2% (Brazil), AAP 2022 schedule (first 6 months; 1-5 th photoscreening each visit or annual
//   referral; 5-12 th photoscreening or every 2 years; 12-21 th acuity/photoscreening/ophthalmologist).
// - Bull MJ et al., Pediatrics 2022 (PMID 35490285), AAP Health Supervision for Down syndrome.
// - Roizen NJ et al., Dev Med Child Neurol 1994 (PMID 8034121): 77 children, 61% needed treatment,
//   38% at 2-12 months to 80% at 5-12 years.
// - Creavin AL, Brown RD, J Pediatr Ophthalmol Strabismus 2009 (PMID 19343968): review of 23 studies.
// - Cregg M et al., IOVS 2001 (PMID 11133848): underaccommodation even when refraction corrected.
// - Woodhouse JM et al., IOVS 2000 (PMID 10937557): near vision out of focus, educators must know.
// - Stewart RE et al., Optom Vis Sci 2007 (PMID 17299346): underaccommodation linked to hyperopia
//   >= +3.00 D and strabismus.
// - Al-Bagdady M et al., Ophthalmic Physiol Opt 2009 (PMID 19470088): accommodation reduced in
//   approx. 75%, bifocals improved accommodation in 65% (26 of 40).
// Cannibalization: down-syndrome-adalah only lists "gangguan penglihatan" as one bullet;
// penuaan-pada-penyandang-down-syndrome is about adults. This article is the eye deep dive.
// Hero: real CC BY-SA 2.0 photo of a phoropter (Ben Schumin, Wikimedia Commons), no people.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'masalah-penglihatan-pada-anak-down-syndrome';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'babbling-dan-cooing-tahap-perkembangan-bahasa.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Masalah Penglihatan pada Anak Down Syndrome: Panduan';
const META_DESC = 'Masalah penglihatan pada anak down syndrome sering tidak disadari. Kenali jenisnya, tanda awal, dan jadwal periksa mata yang dianjurkan. Baca panduannya.';
const OG_TITLE = 'Masalah Penglihatan pada Anak Down Syndrome: Jenis, Tanda, dan Jadwal Periksa Mata';
const OG_DESC = 'Panduan untuk orang tua dan guru tentang masalah penglihatan pada anak Down syndrome: kelainan refraksi, mata juling, katarak, keratokonus, nistagmus, fokus dekat, dan jadwal periksa mata menurut AAP.';
const H1 = 'Masalah Penglihatan pada Anak Down Syndrome: Jenis, Tanda, dan Jadwal Periksa Mata';
const IMAGE_HERO = 'assets/images/artikel/phoropter-alat-pemeriksaan-refraksi-mata-wikimedia.webp';
const IMAGE_HERO_ALT = 'Phoropter, alat pemeriksaan refraksi mata berwarna hitam dengan dua lubang intip, dilihat dari sisi yang menghadap pasien';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-25T10:00:00+07:00';
const DATE_MODIFIED = '2026-09-25T10:00:00+07:00';
const DATE_DISPLAY = '25 September 2026';

const CREDIT = {
  name: 'Ben Schumin',
  source: 'https://commons.wikimedia.org/wiki/File:Patient-facing_side_of_a_phoropter_(50847449492).png',
  license: 'CC BY-SA 2.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  aapos: 'https://aapos.org/glossary/down-syndrome',
  eyewiki: 'https://eyewiki.org/Trisomy_21/Down_Syndrome',
  aap: 'https://pubmed.ncbi.nlm.nih.gov/35490285/',
  roizen: 'https://pubmed.ncbi.nlm.nih.gov/8034121/',
  creavin: 'https://pubmed.ncbi.nlm.nih.gov/19343968/',
  cregg: 'https://pubmed.ncbi.nlm.nih.gov/11133848/',
  woodhouse: 'https://pubmed.ncbi.nlm.nih.gov/10937557/',
  stewart: 'https://pubmed.ncbi.nlm.nih.gov/17299346/',
  bagdady: 'https://pubmed.ncbi.nlm.nih.gov/19470088/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apakah semua anak Down syndrome pasti punya masalah mata?',
    a: 'Tidak semua, tetapi risikonya jauh lebih tinggi daripada anak lain. EyeWiki dari American Academy of Ophthalmology merangkum bahwa angka gangguan mata pada penyandang Down syndrome yang dilaporkan penelitian berkisar 46 sampai 100 persen, tergantung usia dan cara pemeriksaan. Karena itu setiap anak Down syndrome dianjurkan diperiksa dokter mata sejak bayi, bukan menunggu ada keluhan.'
  },
  {
    q: 'Kapan anak Down syndrome pertama kali perlu diperiksa dokter mata?',
    a: 'American Academy of Pediatrics (AAP) menganjurkan pemeriksaan oleh dokter mata anak, atau dokter mata yang berpengalaman menangani anak dengan disabilitas, dalam 6 bulan pertama kehidupan. Setelah itu penglihatan anak dipantau rutin sepanjang masa kanak-kanak dan remaja.'
  },
  {
    q: 'Mengapa anak Down syndrome sering kesulitan melihat benda dekat walau sudah berkacamata?',
    a: 'Banyak anak Down syndrome mengalami akomodasi yang lemah, yaitu kemampuan mata memfokuskan benda dekat kurang optimal. Penelitian Cregg dan rekan (2001) menemukan akomodasi tetap lemah walaupun kelainan refraksinya tidak ada atau sudah dikoreksi kacamata biasa. Pada sebagian anak, dokter mata dapat meresepkan kacamata bifokal untuk membantu penglihatan dekat.'
  },
  {
    q: 'Apakah mata juling pada anak Down syndrome bisa sembuh sendiri?',
    a: 'Mata juling (strabismus) sebaiknya tidak ditunggu sembuh sendiri. Menurut AAPOS, strabismus pada anak Down syndrome dapat ditangani dengan kacamata dan kadang operasi otot mata. Pemeriksaan dini penting karena mata yang juling berisiko mengalami mata malas (ambliopia) bila tidak ditangani.'
  },
  {
    q: 'Mengapa anak Down syndrome sebaiknya tidak sering mengucek mata?',
    a: 'AAPOS menjelaskan bahwa keratokonus, yaitu kornea yang menipis dan menonjol seperti kerucut, lebih sering terjadi pada remaja dan dewasa dengan Down syndrome, dan kondisi ini diperburuk oleh kebiasaan mengucek mata. Bila anak sering mengucek mata karena gatal atau kelopak meradang, periksakan ke dokter agar penyebabnya ditangani.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Masalah Penglihatan Anak Down Syndrome', item: CANONICAL }
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
    height: 750,
    caption: 'Phoropter, alat untuk mengukur kebutuhan kacamata',
    creditText: `Foto: ${CREDIT.name} / Wikimedia Commons, ${CREDIT.license}`,
    author: { '@type': 'Person', name: CREDIT.name },
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
  keywords: 'masalah penglihatan pada anak down syndrome, mata anak down syndrome, strabismus down syndrome, katarak kongenital, keratokonus, kacamata bifokal anak down syndrome, periksa mata anak',
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
    <meta name="keywords" content="masalah penglihatan pada anak down syndrome, mata anak down syndrome, strabismus, katarak kongenital, keratokonus, kacamata bifokal, YUKA">
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
                <span class="current">Masalah Penglihatan Anak Down Syndrome</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="750" fetchpriority="high">
            <figcaption>Phoropter adalah salah satu alat yang dipakai dokter mata atau optometris untuk mengukur kebutuhan kacamata. Pada anak kecil, pengukuran biasanya dilakukan dengan cara lain yang tidak menuntut anak menjawab.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Masalah penglihatan pada anak Down syndrome sangat umum dan sering tidak disadari keluarga. Yang paling sering ditemukan adalah kelainan refraksi (perlu kacamata), mata juling atau strabismus, dan lemahnya kemampuan mata memfokuskan benda dekat. Katarak bawaan, keratokonus, nistagmus, radang kelopak mata, dan mata berair juga lebih sering terjadi.</strong> Kabar baiknya, sebagian besar kondisi ini bisa ditangani, terutama bila ditemukan sejak dini lewat pemeriksaan mata rutin.</p>

            <p>Artikel ini membahas jenis-jenis masalah mata yang perlu diketahui, tanda yang bisa diamati di rumah dan di kelas, jadwal pemeriksaan yang dianjurkan, dan cara guru serta orang tua membantu anak belajar dengan penglihatan terbaiknya. Pengenalan umum tentang kondisi ini ada di artikel <a href="/artikel/down-syndrome-adalah">Down syndrome adalah</a>.</p>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum untuk keluarga dan pendidik, bukan alat diagnosis. Keputusan pemeriksaan, kacamata, obat, atau operasi hanya diambil oleh dokter mata, sebaiknya dokter spesialis mata anak. YUKA tidak menegakkan diagnosis.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#seberapa-sering">Seberapa sering masalah mata terjadi</a></li>
                    <li><a href="#jenis">Jenis masalah penglihatan yang sering ditemukan</a></li>
                    <li><a href="#tabel">Tabel ringkas kondisi mata</a></li>
                    <li><a href="#tanda">Tanda yang bisa diamati orang tua dan guru</a></li>
                    <li><a href="#jadwal">Jadwal periksa mata yang dianjurkan</a></li>
                    <li><a href="#pemeriksaan">Seperti apa pemeriksaannya</a></li>
                    <li><a href="#kelas">Dukungan di rumah dan di kelas</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="seberapa-sering">Seberapa Sering Masalah Mata Terjadi</h2>
            <p>Anak dengan Down syndrome (trisomi 21) memiliki risiko lebih tinggi mengalami berbagai gangguan mata dan penglihatan. American Association for Pediatric Ophthalmology and Strabismus (${ext(L.aapos, 'AAPOS')}), perhimpunan dokter mata anak di Amerika Serikat, menyebut banyak dari masalah ini dapat diobati, terutama bila ditemukan pada usia dini.</p>
            <p>Seberapa sering? Angkanya berbeda antarpenelitian karena usia anak dan cara pemeriksaannya tidak sama. Ensiklopedia klinis ${ext(L.eyewiki, 'EyeWiki')} dari American Academy of Ophthalmology merangkum angka gangguan mata pada penyandang Down syndrome berkisar 46 sampai 100 persen. Salah satu penelitian yang sering dikutip adalah studi ${ext(L.roizen, 'Roizen dan rekan (1994)')} terhadap 77 anak Down syndrome yang diperiksa dokter mata anak tanpa diseleksi berdasarkan keluhan mata. Hasilnya, 61 persen memiliki gangguan mata yang perlu diobati atau dipantau. Angkanya naik seiring usia, dari 38 persen pada kelompok usia 2 sampai 12 bulan menjadi 80 persen pada kelompok usia 5 sampai 12 tahun.</p>
            <p>Artinya, mata anak yang tampak normal saat bayi belum tentu tetap normal saat usia sekolah. Itulah alasan pemeriksaan dilakukan berkala, bukan sekali saja.</p>

            <h2 id="jenis">Jenis Masalah Penglihatan yang Sering Ditemukan</h2>
            <p>Tinjauan ${ext(L.creavin, 'Creavin dan Brown (2009)')} atas 23 penelitian pada anak usia 0 sampai 16 tahun menyimpulkan bahwa kelainan refraksi (terutama rabun dekat atau hipermetropia) dan strabismus sering dilaporkan. Temuan lain yang sering muncul adalah ketajaman penglihatan yang rendah, nistagmus, dan blefaritis. Katarak dan glaukoma lebih jarang, tetapi dampaknya bisa serius bagi penglihatan anak di masa depan.</p>

            <h3>1. Kelainan refraksi (butuh kacamata)</h3>
            <p>Kelainan refraksi berarti bayangan benda tidak jatuh tepat di retina sehingga penglihatan kabur. Bentuknya bisa rabun jauh (miopia), rabun dekat (hipermetropia), atau silinder (astigmatisma). AAPOS menyebut anak Down syndrome lebih mungkin membutuhkan kacamata dibanding anak lain, dan kelainan ini bisa muncul sejak awal kehidupan atau baru berkembang belakangan. Menurut EyeWiki, anak Down syndrome lebih sering mengalami hipermetropia dan astigmatisma dengan ukuran yang lebih besar dibanding anak seusianya.</p>

            <h3>2. Mata juling (strabismus)</h3>
            <p>Strabismus adalah kondisi saat kedua mata tidak lurus menatap ke arah yang sama. AAPOS menyebut 20 sampai 60 persen penyandang Down syndrome memiliki mata yang tidak lurus, dan yang lebih sering adalah esotropia (mata bergulir ke arah hidung) dibanding eksotropia (mata bergulir ke arah telinga). Penanganannya bisa berupa kacamata dan kadang operasi otot mata.</p>
            <p>Strabismus perlu ditangani karena otak anak dapat "mengabaikan" gambar dari mata yang juling. Lama-kelamaan mata itu bisa menjadi mata malas (ambliopia), yang makin sulit diperbaiki bila terlambat ditangani.</p>

            <h3>3. Fokus dekat yang lemah (akomodasi kurang)</h3>
            <p>Ini masalah yang paling sering luput, padahal sangat berpengaruh pada belajar. Akomodasi adalah kemampuan mata mengubah fokus agar benda dekat, seperti buku dan lembar kerja, terlihat tajam. Penelitian di Cardiff University (${ext(L.cregg, 'Cregg dan rekan, 2001')}) menemukan anak Down syndrome mengalami akomodasi yang kurang secara substansial, <strong>bahkan ketika tidak ada kelainan refraksi atau kelainan itu sudah dikoreksi kacamata</strong>. Kacamata biasa untuk rabun dekat tidak memperbaiki respons fokusnya.</p>
            <p>Penelitian lain dari tim yang sama (${ext(L.woodhouse, 'Woodhouse dan rekan, 2000')}) menegaskan bahwa guru dan tenaga kesehatan perlu tahu bahwa penglihatan dekat anak-anak ini sering tidak fokus. ${ext(L.stewart, 'Stewart dan rekan (2007)')} juga menemukan anak dengan akomodasi kurang lebih mungkin memiliki hipermetropia sedang sampai tinggi dan strabismus.</p>
            <p>Salah satu penanganannya adalah kacamata bifokal, yaitu lensa dengan bagian bawah khusus untuk melihat dekat. Studi ${ext(L.bagdady, 'Al-Bagdady dan rekan (2009)')} menyebut akomodasi berkurang pada sekitar 75 persen anak Down syndrome. Dari 40 anak yang memakai bifokal dalam studi itu, kemampuan akomodasi 26 anak (65 persen) membaik. Keputusan memakai bifokal tetap ditentukan dokter mata setelah pemeriksaan.</p>

            <h3>4. Katarak bawaan dan katarak yang berkembang</h3>
            <p>Katarak adalah kekeruhan lensa mata. AAPOS menyebut anak Down syndrome berisiko lebih tinggi mengalami katarak yang sudah ada sejak lahir maupun yang berkembang seiring waktu. Katarak bisa memburuk perlahan, sehingga perlu dipantau dan dioperasi bila dibutuhkan. EyeWiki mencatat satu penelitian besar di Brasil menemukan katarak bawaan pada sampai 2,2 persen bayi Down syndrome. Karena katarak bawaan yang tidak ditangani dapat mengganggu perkembangan penglihatan, EyeWiki menekankan agar bayi Down syndrome diperiksa pantulan merah mata (red reflex) oleh dokter anak segera setelah lahir.</p>

            <h3>5. Keratokonus</h3>
            <p>Keratokonus adalah kondisi kornea (lapisan bening terdepan mata) yang menipis dan menonjol menyerupai kerucut, sehingga penglihatan menjadi kabur dan ukuran silinder terus berubah. Menurut AAPOS, keratokonus lebih sering terjadi pada remaja dan dewasa dengan Down syndrome, biasanya terdiagnosis sekitar masa pubertas, dan <strong>diperburuk oleh kebiasaan mengucek mata</strong>. EyeWiki mencatat Down syndrome termasuk faktor risiko terkuat keratokonus, dengan satu studi di Norwegia menemukan risikonya sekitar 30 kali lebih tinggi dibanding populasi umum. Penanganannya bisa berupa kacamata, lensa kontak khusus, sampai tindakan bedah.</p>

            <h3>6. Nistagmus</h3>
            <p>Nistagmus adalah gerakan bola mata bolak-balik atau bergetar yang tidak disadari. AAPOS menyebut kondisi ini dapat memengaruhi penglihatan. EyeWiki merangkum nistagmus ditemukan pada 3 sampai 33 persen anak Down syndrome, lebih tinggi dibanding anak tanpa Down syndrome.</p>

            <h3>7. Radang kelopak mata dan mata berair</h3>
            <p>Blefaritis adalah radang tepi kelopak mata dengan kemerahan dan kerak di sekitar bulu mata, yang dapat terasa kering atau perih. Mata berair terus-menerus pada anak Down syndrome sering disebabkan saluran air mata yang tersumbat atau sempit (obstruksi duktus nasolakrimalis), dan menurut AAPOS kadang memerlukan tindakan bedah. Keduanya juga penting karena rasa gatal dan perih mendorong anak mengucek mata, kebiasaan yang berkaitan dengan keratokonus.</p>

            <h3>8. Glaukoma</h3>
            <p>Glaukoma adalah tekanan bola mata yang tinggi dan dapat merusak saraf mata. AAPOS menyebut risiko glaukoma meningkat pada bayi dengan Down syndrome, walaupun EyeWiki mencatat kasusnya pada anak tetap jarang. Mata bayi yang tampak sangat besar, keruh, atau sangat sensitif terhadap cahaya perlu segera diperiksakan.</p>

            <h2 id="tabel">Tabel Ringkas Kondisi Mata</h2>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Kondisi</th><th>Apa yang terjadi</th><th>Contoh penanganan (oleh dokter mata)</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Kelainan refraksi</strong></td><td>Penglihatan kabur jauh, dekat, atau keduanya</td><td>Kacamata</td></tr>
                    <tr><td><strong>Strabismus</strong></td><td>Kedua mata tidak lurus, paling sering bergulir ke arah hidung</td><td>Kacamata, kadang operasi otot mata</td></tr>
                    <tr><td><strong>Akomodasi kurang</strong></td><td>Benda dekat seperti buku tidak terlihat tajam</td><td>Kacamata bifokal bila dianjurkan</td></tr>
                    <tr><td><strong>Katarak</strong></td><td>Lensa mata keruh, sejak lahir atau berkembang kemudian</td><td>Pemantauan, operasi bila diperlukan</td></tr>
                    <tr><td><strong>Keratokonus</strong></td><td>Kornea menipis dan menonjol, biasanya muncul sekitar pubertas</td><td>Kacamata, lensa kontak khusus, tindakan bedah</td></tr>
                    <tr><td><strong>Nistagmus</strong></td><td>Bola mata bergerak bolak-balik tanpa disadari</td><td>Pemeriksaan dan pemantauan dokter mata</td></tr>
                    <tr><td><strong>Blefaritis dan mata berair</strong></td><td>Kelopak meradang, saluran air mata tersumbat</td><td>Perawatan kelopak, kadang tindakan pada saluran air mata</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.95rem;">Sumber: ${ext(L.aapos, 'AAPOS, Down Syndrome')} dan ${ext(L.eyewiki, 'EyeWiki, Trisomy 21/Down Syndrome')}, dicek 25 September 2026. Tabel ini bukan panduan pengobatan mandiri.</p>

            <h2 id="tanda">Tanda yang Bisa Diamati Orang Tua dan Guru</h2>
            <p>Anak Down syndrome, terutama yang masih kecil atau memiliki hambatan komunikasi, sering tidak bisa mengatakan "mata saya kabur". Karena itu pengamatan orang dewasa di sekitarnya sangat berharga. Beberapa tanda yang layak dicatat dan disampaikan ke dokter:</p>
            <ul>
                <li>Satu atau kedua mata tampak bergulir ke dalam, ke luar, atau tidak sejajar, terutama saat lelah.</li>
                <li>Bagian hitam mata (pupil) tampak putih atau keabu-abuan, atau pantulan mata di foto dengan lampu kilat berbeda antara mata kanan dan kiri.</li>
                <li>Bola mata bergerak bolak-balik atau bergetar.</li>
                <li>Mata sering berair, belekan, atau kelopak merah dan berkerak.</li>
                <li>Anak sering mengucek mata, menyipitkan mata, atau memiringkan kepala saat melihat.</li>
                <li>Anak mendekatkan wajah ke buku atau layar, atau justru menghindari kegiatan melihat dekat seperti mewarnai dan membaca.</li>
                <li>Anak sering tersandung, ragu melangkah di tangga, atau kesulitan meraih benda dengan tepat. (Hal ini juga bisa berkaitan dengan <a href="/artikel/motorik-kasar-adalah">motorik kasar</a>, jadi perlu dinilai dokter.)</li>
                <li>Ukuran kacamata sering berubah atau anak mengeluh penglihatan tetap kabur walau berkacamata, terutama pada usia remaja.</li>
            </ul>
            <p>Tanda-tanda ini bukan diagnosis. Satu tanda saja sudah cukup menjadi alasan untuk memeriksakan anak lebih awal dari jadwal rutinnya.</p>

            <h2 id="jadwal">Jadwal Periksa Mata yang Dianjurkan</h2>
            <p>American Academy of Pediatrics (AAP) menerbitkan pedoman pemantauan kesehatan anak dan remaja dengan Down syndrome (${ext(L.aap, 'Bull dan rekan, Pediatrics 2022')}). Rangkuman bagian matanya, sebagaimana dikutip ${ext(L.eyewiki, 'EyeWiki')}, adalah sebagai berikut:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Usia</th><th>Anjuran pemeriksaan</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Segera setelah lahir</strong></td><td>Dokter anak memeriksa pantulan merah mata (red reflex) untuk menapis katarak bawaan</td></tr>
                    <tr><td><strong>Dalam 6 bulan pertama</strong></td><td>Dirujuk ke dokter mata anak, atau dokter mata yang berpengalaman menangani anak dengan disabilitas, untuk memeriksa strabismus, katarak, sumbatan saluran air mata, kelainan refraksi, glaukoma, dan nistagmus</td></tr>
                    <tr><td><strong>1 sampai 5 tahun</strong></td><td>Penglihatan dicek di setiap kunjungan rutin, termasuk photoscreening bila tersedia. Dirujuk ke dokter mata bila ada temuan, atau setiap tahun bila photoscreening tidak tersedia</td></tr>
                    <tr><td><strong>5 sampai 12 tahun</strong></td><td>Photoscreening di setiap kunjungan rutin. Dirujuk bila ada temuan, atau setiap 2 tahun bila photoscreening tidak tersedia</td></tr>
                    <tr><td><strong>12 sampai 21 tahun</strong></td><td>Tes ketajaman penglihatan atau photoscreening, atau tetap dalam pemantauan dokter mata untuk menilai munculnya katarak, kelainan refraksi, atau keratokonus</td></tr>
                </tbody>
            </table>
            </div>
            <p>Photoscreening adalah pemeriksaan penapisan dengan kamera khusus yang tidak membutuhkan jawaban dari anak. Di Indonesia, alat ini belum tentu tersedia di setiap fasilitas kesehatan. Bila tidak tersedia, cara paling aman adalah mengikuti jadwal pemeriksaan langsung ke dokter mata sesuai saran dokter yang merawat anak. Bawa catatan hasil pemeriksaan sebelumnya setiap kali kontrol.</p>

            <h2 id="pemeriksaan">Seperti Apa Pemeriksaannya</h2>
            <p>Banyak orang tua ragu membawa anak ke dokter mata karena mengira anak harus bisa membaca huruf di papan. Kenyataannya, dokter mata anak punya cara memeriksa yang tidak membutuhkan jawaban lisan, misalnya:</p>
            <ul>
                <li><strong>Pemeriksaan dengan senter dan lampu khusus</strong> untuk melihat kelopak, kornea, lensa, dan pantulan cahaya di kedua mata.</li>
                <li><strong>Retinoskopi</strong>, yaitu mengukur kebutuhan kacamata dengan menyorotkan cahaya ke mata dan mengamati pantulannya. Penelitian akomodasi di Cardiff juga memakai modifikasi teknik ini (retinoskopi dinamis) untuk menilai fokus dekat anak.</li>
                <li><strong>Tes gambar atau simbol</strong> untuk anak yang lebih besar, sebagai pengganti huruf.</li>
                <li><strong>Pemeriksaan bagian dalam mata</strong>, kadang setelah pupil dilebarkan dengan tetes mata.</li>
            </ul>
            <p>Beberapa hal kecil membuat kunjungan lebih lancar: pilih jam saat anak tidak mengantuk, ceritakan urutan kegiatannya dengan gambar sederhana sebelum berangkat (mirip <a href="/artikel/jadwal-visual-anak-autis">jadwal visual</a>), bawa mainan kesukaan, dan sampaikan kepada dokter cara anak paling mudah diajak bekerja sama.</p>

            <h2 id="kelas">Dukungan di Rumah dan di Kelas</h2>
            <p>Pemeriksaan mata baru separuh jalan. Separuh lainnya adalah memastikan anak benar-benar mendapat manfaat dari penglihatannya dalam kegiatan sehari-hari.</p>
            <ol>
                <li><strong>Biasakan memakai kacamata.</strong> Mulai dari waktu singkat saat kegiatan menyenangkan, lalu perpanjang bertahap. Pastikan bingkainya pas dan tidak melorot, karena kacamata yang turun membuat anak melihat dari atas lensa. Tanyakan kepada optik tentang bingkai dan tali pengikat yang sesuai untuk anak.</li>
                <li><strong>Perbesar dan pertegas materi dekat.</strong> Karena fokus dekat sering lemah, gunakan huruf yang lebih besar, garis tebal, dan kontras yang jelas (hitam di atas putih). Kurangi lembar kerja yang padat.</li>
                <li><strong>Atur posisi duduk.</strong> Dudukkan anak dekat papan tulis dengan cahaya yang cukup dan tidak menyilaukan. Beri jeda bagi mata setelah tugas melihat dekat yang panjang.</li>
                <li><strong>Cegah kebiasaan mengucek mata.</strong> Alihkan tangan anak dengan kegiatan lain dan periksakan bila mata tampak gatal atau meradang.</li>
                <li><strong>Catat di program belajar anak.</strong> Kebutuhan penglihatan sebaiknya dimasukkan ke <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a> agar semua guru dan pendamping memakai penyesuaian yang sama.</li>
                <li><strong>Libatkan terapis.</strong> Terapis okupasi dapat membantu kegiatan yang melibatkan koordinasi mata dan tangan. Informasinya ada di artikel <a href="/artikel/terapi-okupasi">terapi okupasi</a>.</li>
            </ol>
            <p>Masalah penglihatan dan pendengaran yang tidak terdeteksi kadang disalahartikan sebagai kurang perhatian atau kesulitan belajar. Karena itu pemeriksaan mata dan pendengaran rutin adalah bagian penting dari <a href="/artikel/intervensi-dini">intervensi dini</a> dan penilaian <a href="/artikel/disabilitas-intelektual-adalah">kemampuan belajar</a> anak. Bila penglihatan anak tetap sangat terbatas walau sudah dikoreksi, informasi tentang layanan untuk <a href="/artikel/tuna-netra-adalah">tunanetra dan low vision</a> bisa membantu.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi anak berkebutuhan khusus, termasuk anak dengan Down syndrome, lewat pendidikan inklusi di <a href="/sekolah-inklusi-sleman">Sekolah Inklusi Taruna Imani Sleman</a>. Guru dan pendamping membantu keluarga mengamati tanda-tanda sehari-hari dan menyesuaikan materi belajar, sementara pemeriksaan dan pengobatan mata tetap dilakukan oleh dokter mata. Bacaan terkait kesehatan anak berkebutuhan khusus lainnya: <a href="/artikel/perawatan-gigi-anak-berkebutuhan-khusus-tips">perawatan gigi anak berkebutuhan khusus</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/down-syndrome-adalah">Down Syndrome Adalah</a></h4>
                    <p>Penyebab, ciri, dan cara mendukung tumbuh kembang anak.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/intervensi-dini">Intervensi Dini ABK</a></h4>
                    <p>Mengapa penanganan sejak usia 0 sampai 6 tahun penting.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual</a></h4>
                    <p>Cara menyusun target belajar sesuai kebutuhan anak.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#DownSyndrome</a>
            <a href="#">#KesehatanMataAnak</a>
            <a href="#">#Strabismus</a>
            <a href="#">#KacamataBifokal</a>
            <a href="#">#PendidikanInklusi</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.aapos, '<strong>Down Syndrome</strong>, American Association for Pediatric Ophthalmology and Strabismus (AAPOS), diperbarui April 2023')}</li>
              <li>${ext(L.eyewiki, '<strong>Trisomy 21/Down Syndrome</strong>, EyeWiki, American Academy of Ophthalmology')}</li>
              <li>${ext(L.aap, '<strong>Health Supervision for Children and Adolescents With Down Syndrome</strong>, Bull MJ dkk., Pediatrics, 2022')}</li>
              <li>${ext(L.roizen, '<strong>Ophthalmic disorders in children with Down syndrome</strong>, Roizen NJ dkk., Developmental Medicine and Child Neurology, 1994')}</li>
              <li>${ext(L.creavin, '<strong>Ophthalmic abnormalities in children with Down syndrome</strong>, Creavin AL, Brown RD, Journal of Pediatric Ophthalmology and Strabismus, 2009')}</li>
              <li>${ext(L.cregg, '<strong>Accommodation and refractive error in children with Down syndrome</strong>, Cregg M dkk., Investigative Ophthalmology and Visual Science, 2001')}</li>
              <li>${ext(L.woodhouse, '<strong>The effect of age, size of target, and cognitive factors on accommodative responses of children with Down syndrome</strong>, Woodhouse JM dkk., Investigative Ophthalmology and Visual Science, 2000')}</li>
              <li>${ext(L.stewart, '<strong>Association between accommodative accuracy, hypermetropia, and strabismus in children with Down\'s syndrome</strong>, Stewart RE dkk., Optometry and Vision Science, 2007')}</li>
              <li>${ext(L.bagdady, '<strong>Bifocals and Down\'s syndrome: correction or treatment?</strong>, Al-Bagdady M dkk., Ophthalmic and Physiological Optics, 2009')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti pemeriksaan, diagnosis, atau saran dari dokter mata dan dokter anak</strong>. Sumber dicek pada 25 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Masalah%20Penglihatan%20pada%20Anak%20Down%20Syndrome%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Masalah%20Penglihatan%20pada%20Anak%20Down%20Syndrome&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
            </div>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
</article>

    <section class="section bg-primary" style="padding: 4rem 0;">
        <div class="container text-center">
            <h2 style="color: var(--white); margin-bottom: 1rem;">Bantu Pendidikan Anak Berkebutuhan Khusus</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 2rem;">Setiap donasi Anda membantu anak-anak dengan beragam kemampuan mendapatkan pendidikan dan pendampingan yang sesuai kebutuhan mereka.</p>
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

#!/usr/bin/env node
'use strict';

// One-time generator for artikel/supported-employment-disabilitas-di-indonesia.html
// (catchup 2026-09-27, kartu 5hLYNtHc). Canonical shell via scripts/lib/article-shell.js.
// Every claim below was checked live on 2026-09-27 against:
// - UU 8/2016 (JDIH BPK, PDF): Pasal 11 (hak pekerjaan, a-h), Pasal 45 (proses rekrutmen s.d. pengembangan karier
//   tanpa diskriminasi), Pasal 46 (pelatihan kerja inklusif), Pasal 53 (2% Pemerintah/Pemda/BUMN/BUMD, 1% swasta),
//   Pasal 54 (insentif), Pasal 55 (ULD dinas ketenagakerjaan, tugas a-e incl. pendampingan tenaga kerja & pemberi kerja).
// - PP 60/2020 tentang Unit Layanan Disabilitas Bidang Ketenagakerjaan (JDIH BPK Details/148910, title verified).
// - Suijkerbuijk et al. 2017 Cochrane CD011867 (PMID 28898402, PMC6483771): 48 RCT, 8743 peserta; SE & augmented SE
//   most effective for obtaining and maintaining employment (severe mental illness), moderate-low quality evidence;
//   IPS = most widely researched SE model, help looking for job, support indefinitely once employed.
// - Wehman et al. 2014 JADD (PMID 23893098): Project SEARCH plus ASD Supports RCT, youth 18-21, 21/24 (87.5%) vs 1/16 (6.25%).
// - Fong et al. 2021 Campbell Syst Rev (PMID 37052419, PMC8354554): only 3 studies with employment outcomes for ASD;
//   need for more rigorous trials.
// Hero: real CC BY 2.0 photo (DFAT / Joao Vas, AusAID) Wikimedia Commons, disability training workshop (vocational training & employment officers).

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'supported-employment-disabilitas-di-indonesia';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Supported Employment Disabilitas di Indonesia: Panduan';
const META_DESC = 'Supported employment membantu penyandang disabilitas bekerja di tempat kerja umum dengan pendampingan. Pahami tahapan, bukti riset, dan dasar hukumnya.';
const OG_TITLE = 'Supported Employment Disabilitas di Indonesia: Cara Kerja, Bukti Riset, dan Dasar Hukum';
const OG_DESC = 'Panduan untuk orang tua dan pendamping tentang supported employment: bekerja dulu lalu dilatih di tempat kerja, peran job coach, hasil penelitian, dan hak kerja menurut UU 8/2016.';
const H1 = 'Supported Employment Disabilitas di Indonesia: Cara Kerja, Bukti Riset, dan Dasar Hukum';
const IMAGE_HERO = 'assets/images/artikel/lokakarya-layanan-kerja-disabilitas-wikimedia.webp';
const IMAGE_HERO_ALT = 'Seorang pria berjaket hitam tersenyum di depan laptop, di samping seorang fasilitator perempuan berkaus putih, dalam lokakarya pelatihan di ruangan berdinding putih';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-27T20:00:00+07:00';
const DATE_MODIFIED = '2026-09-27T20:00:00+07:00';
const DATE_DISPLAY = '27 September 2026';

const CREDIT = {
  name: 'Joao Vas/AusAID (Department of Foreign Affairs and Trade)',
  source: 'https://commons.wikimedia.org/wiki/File:Disability_training_workshop_2_(10692393155).jpg',
  license: 'CC BY 2.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/2.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  uu8: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016',
  pp60: 'https://peraturan.bpk.go.id/Details/148910/pp-no-60-tahun-2020',
  cochrane: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6483771/',
  wehman: 'https://pubmed.ncbi.nlm.nih.gov/23893098/',
  fong: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8354554/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa itu supported employment?',
    a: 'Supported employment adalah pendekatan yang membantu penyandang disabilitas mendapatkan pekerjaan berbayar di tempat kerja umum secepat mungkin, lalu memberi dukungan berkelanjutan agar pekerjaan itu bisa dipertahankan. Prinsipnya bekerja dulu, lalu dilatih langsung di tempat kerja, bukan berlatih bertahun-tahun di lembaga sebelum boleh mencoba bekerja.'
  },
  {
    q: 'Apa bedanya supported employment dengan bengkel kerja terlindung?',
    a: 'Bengkel kerja terlindung (sheltered workshop) mempekerjakan penyandang disabilitas di lingkungan terpisah, biasanya bersama sesama penyandang disabilitas. Supported employment menempatkan orang di tempat kerja umum, bekerja berdampingan dengan rekan non-disabilitas, dengan upah dan tanggung jawab yang sama untuk jenis pekerjaan yang sama.'
  },
  {
    q: 'Apa tugas job coach atau pendamping kerja?',
    a: 'Job coach membantu mengenali minat dan kemampuan calon pekerja, mencari pekerjaan yang cocok, mendekati pemberi kerja, melatih tugas langsung di tempat kerja, lalu mengurangi pendampingan secara bertahap. Pendampingan tetap tersedia bila muncul masalah baru, misalnya pergantian atasan atau tugas.'
  },
  {
    q: 'Apakah perusahaan di Indonesia wajib mempekerjakan penyandang disabilitas?',
    a: 'Ya. Pasal 53 UU Nomor 8 Tahun 2016 mewajibkan Pemerintah, Pemerintah Daerah, BUMN, dan BUMD mempekerjakan paling sedikit 2 persen penyandang disabilitas dari jumlah pegawai, dan perusahaan swasta paling sedikit 1 persen.'
  },
  {
    q: 'Kapan sebaiknya orang tua mulai menyiapkan anak berkebutuhan khusus untuk bekerja?',
    a: 'Sebaiknya sejak usia sekolah menengah, jauh sebelum lulus. Persiapan bisa dimulai dari kemandirian sehari-hari, keterampilan sosial, pengenalan minat, dan pengalaman magang. Studi Project SEARCH yang dikutip di artikel ini melibatkan remaja usia 18 sampai 21 tahun pada masa transisi dari sekolah ke dunia kerja.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Supported Employment Disabilitas di Indonesia', item: CANONICAL }
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
    height: 670,
    caption: 'Lokakarya pelatihan tentang layanan kerja bagi penyandang disabilitas',
    creditText: `Foto: ${CREDIT.name} / Wikimedia Commons, ${CREDIT.license}`,
    author: { '@type': 'Organization', name: 'Department of Foreign Affairs and Trade (Australia)' },
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
  keywords: 'supported employment disabilitas di indonesia, supported employment, job coach, pendamping kerja disabilitas, kuota kerja disabilitas, UU 8 2016',
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
    <meta name="keywords" content="supported employment disabilitas di indonesia, supported employment, job coach, kuota kerja disabilitas, YUKA">
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
                <span class="current">Supported Employment Disabilitas di Indonesia</span>
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
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="1000" height="670" fetchpriority="high">
            <figcaption>Lokakarya bagi petugas lembaga pemerintah bidang pelatihan kerja dan ketenagakerjaan (foto program bantuan Australia), agar layanan mereka lebih ramah bagi penyandang disabilitas yang mencari pelatihan dan pekerjaan. Foto ini bukan dokumentasi kegiatan YUKA.
                <span class="kredit">Foto: <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / Wikimedia Commons, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Supported employment</strong> (pekerjaan dengan dukungan) adalah pendekatan yang membantu penyandang disabilitas <strong>mendapatkan pekerjaan berbayar di tempat kerja umum</strong> secepat mungkin, lalu memberi <strong>pendampingan berkelanjutan</strong> agar pekerjaan itu bertahan. Prinsipnya bekerja dulu, lalu dilatih di tempat kerja. Di Indonesia, pendekatan ini sejalan dengan hak atas pekerjaan dalam UU Nomor 8 Tahun 2016 dan kewajiban kuota kerja penyandang disabilitas.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum untuk orang tua, guru, dan pendamping. Kutipan peraturan diambil dari naskah resmi di JDIH BPK. Hasil penelitian yang dikutip berasal dari luar negeri dan berlaku untuk kelompok peserta tertentu, sehingga tidak menjamin hasil yang sama pada setiap orang.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#apa-itu">Apa itu supported employment</a></li>
                    <li><a href="#beda">Bedanya dengan model latih dulu baru bekerja</a></li>
                    <li><a href="#tahapan">Tahapan supported employment</a></li>
                    <li><a href="#job-coach">Peran job coach atau pendamping kerja</a></li>
                    <li><a href="#bukti">Apa kata penelitian</a></li>
                    <li><a href="#hukum">Dasar hukum di Indonesia</a></li>
                    <li><a href="#orang-tua">Yang bisa dilakukan orang tua dan sekolah</a></li>
                    <li><a href="#tantangan">Tantangan penerapan di Indonesia</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="apa-itu">Apa Itu Supported Employment</h2>
            <p>Supported employment lahir dari satu pertanyaan sederhana: mengapa penyandang disabilitas harus menunggu "siap" sebelum boleh mencoba bekerja? Pendekatan lama cenderung melatih orang lebih dulu di lembaga atau bengkel kerja terlindung, dengan harapan suatu saat peserta pindah ke pekerjaan sungguhan. Supported employment membalik urutannya: cari pekerjaan nyata lebih dulu, lalu berikan dukungan yang dibutuhkan di tempat kerja itu.</p>
            <p>Tinjauan Cochrane oleh ${ext(L.cochrane, 'Suijkerbuijk dan rekan (2017)')} merumuskan bahwa program supported employment berusaha membantu orang mendapatkan pekerjaan kompetitif dengan cepat dan memberi dukungan berkelanjutan untuk mempertahankannya. Model yang paling jelas dijabarkan dan paling banyak diteliti adalah <em>Individual Placement and Support</em> (IPS): peserta dibantu mencari kerja, dan setelah bekerja dukungan diberikan tanpa batas waktu.</p>
            <p>Kata kuncinya adalah <strong>pekerjaan kompetitif</strong>: pekerjaan di tempat kerja umum, dengan upah yang wajar, bersama rekan kerja non-disabilitas. Ini berbeda dari kegiatan kerja yang hanya bersifat terapi atau latihan.</p>

            <h2 id="beda">Bedanya dengan Model Latih Dulu Baru Bekerja</h2>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>Supported employment</th><th>Latih dulu, baru bekerja</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Urutan</strong></td><td>Bekerja dulu, dilatih di tempat kerja</td><td>Pelatihan panjang di lembaga sebelum mencari kerja</td></tr>
                    <tr><td><strong>Tempat</strong></td><td>Tempat kerja umum</td><td>Kelas, balai latihan, atau bengkel kerja terlindung</td></tr>
                    <tr><td><strong>Rekan kerja</strong></td><td>Campuran, bersama pekerja non-disabilitas</td><td>Sering sesama penyandang disabilitas</td></tr>
                    <tr><td><strong>Upah</strong></td><td>Upah sesuai pekerjaan</td><td>Sering berupa uang saku atau belum ada</td></tr>
                    <tr><td><strong>Dukungan</strong></td><td>Berlanjut setelah diterima kerja</td><td>Biasanya berhenti saat pelatihan selesai</td></tr>
                </tbody>
            </table>
            </div>
            <p>Pelatihan keterampilan tetap penting. Supported employment tidak menolak pelatihan, tetapi menempatkannya di konteks pekerjaan nyata sehingga keterampilan langsung terpakai dan tidak perlu "dipindahkan" dari ruang latihan ke tempat kerja. Bagi anak dengan <a href="/artikel/disabilitas-intelektual-adalah">disabilitas intelektual</a> atau autisme, yang sering kesulitan menerapkan keterampilan di situasi baru, perbedaan ini cukup berarti.</p>

            <h2 id="tahapan">Tahapan Supported Employment</h2>
            <p>Istilah tiap tahap berbeda antarnegara, tetapi alurnya umumnya serupa:</p>
            <ol>
                <li><strong>Mengenal calon pekerja.</strong> Pendamping menggali minat, kekuatan, riwayat sekolah, kebutuhan dukungan, dan pilihan orang itu sendiri. Pendekatan <a href="/artikel/person-centered-planning-disabilitas">person centered planning</a> sering dipakai di tahap ini.</li>
                <li><strong>Menyusun profil kerja.</strong> Hasil penggalian dirangkum menjadi gambaran pekerjaan yang cocok, misalnya jenis tugas, jam kerja, lingkungan, dan jarak dari rumah.</li>
                <li><strong>Mencari dan mendekati pemberi kerja.</strong> Pendamping menghubungi perusahaan, menjelaskan kemampuan calon pekerja, dan bila perlu menyesuaikan uraian tugas bersama pemberi kerja.</li>
                <li><strong>Pelatihan di tempat kerja.</strong> Setelah diterima, pekerja dilatih langsung pada tugasnya. Akomodasi yang layak disiapkan, misalnya jadwal visual, instruksi bertahap, atau alat bantu kerja.</li>
                <li><strong>Dukungan berkelanjutan.</strong> Pendampingan dikurangi pelan-pelan seiring pekerja makin mandiri, tetapi tetap tersedia saat ada perubahan, misalnya tugas baru atau pergantian atasan.</li>
            </ol>

            <h2 id="job-coach">Peran Job Coach atau Pendamping Kerja</h2>
            <p>Tokoh penting dalam supported employment adalah <em>job coach</em> atau pendamping kerja. Ia bekerja ke dua arah: mendampingi pekerja, dan mendampingi pemberi kerja.</p>
            <ul>
                <li><strong>Untuk pekerja:</strong> memecah tugas menjadi langkah kecil, melatih rutinitas perjalanan ke tempat kerja, membantu memahami aturan tidak tertulis di kantor, dan menjadi tempat bertanya saat bingung.</li>
                <li><strong>Untuk pemberi kerja:</strong> menjelaskan cara memberi instruksi yang jelas, menyarankan akomodasi, dan membantu rekan kerja memahami kebutuhan pekerja baru.</li>
                <li><strong>Untuk keluarga:</strong> menyelaraskan jadwal, transportasi, dan kebiasaan di rumah yang mendukung pekerjaan, termasuk <a href="/artikel/money-management-untuk-penyandang-disabilitas">mengelola gaji pertama</a>.</li>
            </ul>
            <p>Menariknya, pembagian peran ini juga tercermin dalam hukum Indonesia. Pasal 55 ${ext(L.uu8, 'UU Nomor 8 Tahun 2016')} menugaskan Unit Layanan Disabilitas di dinas ketenagakerjaan untuk menyediakan pendampingan kepada tenaga kerja penyandang disabilitas <em>dan</em> kepada pemberi kerja yang menerima mereka.</p>

            <h2 id="bukti">Apa Kata Penelitian</h2>
            <ul>
                <li><strong>Tinjauan Cochrane 48 uji acak.</strong> ${ext(L.cochrane, 'Suijkerbuijk dan rekan (2017)')} menganalisis 48 uji acak terkontrol dengan 8.743 peserta dewasa dengan gangguan jiwa berat. Supported employment dan supported employment yang diperkuat intervensi lain menjadi pendekatan paling efektif untuk mendapatkan dan mempertahankan pekerjaan, tanpa menambah risiko efek merugikan. Para penulis menilai kualitas buktinya sedang sampai rendah.</li>
                <li><strong>Project SEARCH untuk remaja autis.</strong> Uji acak oleh ${ext(L.wehman, 'Wehman dan rekan (2014)')} meneliti remaja autis usia 18 sampai 21 tahun yang mengikuti magang Project SEARCH dengan dukungan khusus autisme. Hasil awalnya, 21 dari 24 peserta (87,5 persen) mendapat pekerjaan, dibanding 1 dari 16 (6,25 persen) di kelompok pembanding.</li>
                <li><strong>Bukti untuk autisme masih sedikit.</strong> Tinjauan sistematis Campbell oleh ${ext(L.fong, 'Fong dan rekan (2021)')} hanya menemukan tiga studi intervensi yang mengukur hasil kerja nyata pada orang autis. Semuanya menunjukkan program berbasis vokasi berpotensi meningkatkan hasil kerja, tetapi penulis menekankan perlunya uji yang lebih ketat.</li>
            </ul>
            <p><strong>Cara membaca bukti ini:</strong> penelitian terbesar tentang supported employment dilakukan pada orang dewasa dengan gangguan jiwa berat, bukan pada anak berkebutuhan khusus yang beranjak dewasa. Studi pada remaja autis masih kecil jumlahnya dan dilakukan di Amerika Serikat. Arah temuannya konsisten, tetapi hasilnya belum bisa langsung disamakan dengan kondisi di Indonesia.</p>

            <h2 id="hukum">Dasar Hukum di Indonesia</h2>
            <p>Indonesia belum memakai istilah "supported employment" dalam undang-undang, tetapi unsur-unsurnya ada dalam ${ext(L.uu8, 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')}:</p>
            <ul>
                <li><strong>Pasal 11</strong> memuat hak pekerjaan, antara lain memperoleh pekerjaan tanpa diskriminasi, upah yang sama untuk jenis pekerjaan dan tanggung jawab yang sama, akomodasi yang layak dalam pekerjaan, dan tidak diberhentikan karena alasan disabilitas.</li>
                <li><strong>Pasal 45</strong> mewajibkan Pemerintah dan Pemerintah Daerah menjamin proses rekrutmen, penerimaan, pelatihan kerja, penempatan kerja, keberlanjutan kerja, dan pengembangan karier yang adil dan tanpa diskriminasi.</li>
                <li><strong>Pasal 46</strong> mewajibkan kesempatan mengikuti pelatihan keterampilan kerja, dan lembaga pelatihan kerja harus bersifat inklusif serta mudah diakses.</li>
                <li><strong>Pasal 53</strong> menetapkan kuota: Pemerintah, Pemerintah Daerah, BUMN, dan BUMD wajib mempekerjakan paling sedikit <strong>2 persen</strong> penyandang disabilitas dari jumlah pegawai, sedangkan perusahaan swasta paling sedikit <strong>1 persen</strong>.</li>
                <li><strong>Pasal 54</strong> mewajibkan pemerintah memberi insentif kepada perusahaan swasta yang mempekerjakan penyandang disabilitas.</li>
                <li><strong>Pasal 55</strong> mewajibkan Pemerintah Daerah memiliki Unit Layanan Disabilitas pada dinas ketenagakerjaan. Tugasnya termasuk memberi informasi kepada pemberi kerja, mendampingi tenaga kerja penyandang disabilitas, mendampingi pemberi kerja, dan mengoordinasikan penyediaan alat bantu kerja.</li>
            </ul>
            <p>Ketentuan tentang unit layanan tersebut kemudian diatur lebih rinci dalam ${ext(L.pp60, 'Peraturan Pemerintah Nomor 60 Tahun 2020 tentang Unit Layanan Disabilitas Bidang Ketenagakerjaan')}. Bagi keluarga, dinas ketenagakerjaan kabupaten atau kota adalah pintu pertama untuk menanyakan layanan ini. Ketersediaan dan bentuk layanannya bisa berbeda antardaerah. Ringkasan hak lain penyandang disabilitas ada di artikel <a href="/artikel/penyandang-disabilitas">penyandang disabilitas: hak dan dukungan</a>.</p>

            <h2 id="orang-tua">Yang Bisa Dilakukan Orang Tua dan Sekolah</h2>
            <p>Persiapan kerja sebaiknya dimulai jauh sebelum anak lulus. Beberapa langkah praktis:</p>
            <ol>
                <li><strong>Kenali minat sejak dini.</strong> Catat kegiatan yang membuat anak tekun dan senang, misalnya menyusun barang, merawat tanaman, memasak, atau bekerja dengan komputer. Lihat juga contoh <a href="/artikel/pekerjaan-yang-cocok-untuk-orang-autis">pekerjaan yang cocok untuk orang autis</a> dan <a href="/artikel/pekerjaan-untuk-penyandang-disabilitas">pekerjaan untuk penyandang disabilitas</a>.</li>
                <li><strong>Latih kemandirian sehari-hari.</strong> Bangun tepat waktu, berpakaian rapi, naik kendaraan umum, dan mengelola uang saku adalah fondasi yang sering menentukan keberhasilan kerja. Anak dengan <a href="/artikel/down-syndrome-adalah">Down syndrome</a> atau autisme biasanya terbantu oleh jadwal visual dan latihan berulang.</li>
                <li><strong>Beri pengalaman kerja nyata.</strong> Magang singkat di usaha keluarga, toko tetangga, atau kantin sekolah memberi gambaran tentang aturan kerja yang tidak bisa diajarkan di kelas.</li>
                <li><strong>Libatkan sekolah dalam rencana transisi.</strong> Guru bisa memasukkan tujuan vokasional ke program pembelajaran individual. Sekolah juga bisa menjalin kerja sama magang dengan usaha di sekitarnya.</li>
                <li><strong>Hubungi dinas ketenagakerjaan setempat.</strong> Tanyakan apakah Unit Layanan Disabilitas sudah tersedia dan layanan apa yang bisa diakses.</li>
                <li><strong>Pertimbangkan jalur usaha sendiri.</strong> Bila pekerjaan formal belum terbuka, usaha kecil yang didampingi keluarga bisa menjadi pilihan. Idenya dibahas di <a href="/artikel/kewirausahaan-anak-muda-disabilitas">kewirausahaan anak muda disabilitas</a>.</li>
            </ol>

            <h2 id="tantangan">Tantangan Penerapan di Indonesia</h2>
            <ul>
                <li><strong>Profesi job coach belum umum.</strong> Peran pendamping kerja sering dijalankan guru, terapis, atau orang tua secara informal, tanpa pelatihan khusus.</li>
                <li><strong>Pemahaman pemberi kerja beragam.</strong> Kuota kerja tidak mengatur jenis disabilitas, sehingga pekerja dengan disabilitas intelektual atau autisme, yang biasanya butuh pendampingan lebih banyak di awal, perlu diperkenalkan secara aktif kepada pemberi kerja.</li>
                <li><strong>Layanan antardaerah tidak merata.</strong> Kewajiban Unit Layanan Disabilitas ada di tingkat daerah, sehingga kesiapannya bergantung pada pemerintah daerah masing-masing.</li>
                <li><strong>Transisi dari sekolah perlu direncanakan.</strong> Tanpa rencana kerja yang disusun sebelum lulus, masa setelah sekolah mudah berlalu tanpa kegiatan yang terarah. Di sinilah peran keluarga dan sekolah menjadi penting.</li>
            </ul>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mendampingi anak berkebutuhan khusus dan keluarganya lewat pendidikan inklusi di Sleman, termasuk membangun kemandirian yang menjadi bekal masa depan anak. Ayah dan Bunda bisa berdiskusi dengan tim YUKA tentang pendampingan belajar anak melalui halaman <a href="/kontak">kontak</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/pekerjaan-untuk-penyandang-disabilitas">Pekerjaan untuk Penyandang Disabilitas</a></h4>
                    <p>Jenis pekerjaan dan cara mencarinya.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/person-centered-planning-disabilitas">Person Centered Planning</a></h4>
                    <p>Merencanakan masa depan berdasarkan pilihan orangnya sendiri.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/kewirausahaan-anak-muda-disabilitas">Kewirausahaan Anak Muda Disabilitas</a></h4>
                    <p>Ide dan langkah memulai usaha sendiri.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#SupportedEmployment</a>
            <a href="#">#Disabilitas</a>
            <a href="#">#JobCoach</a>
            <a href="#">#DuniaKerja</a>
            <a href="#">#Inklusi</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.uu8, '<strong>Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas</strong>, JDIH BPK RI')}</li>
              <li>${ext(L.pp60, '<strong>Peraturan Pemerintah Nomor 60 Tahun 2020 tentang Unit Layanan Disabilitas Bidang Ketenagakerjaan</strong>, JDIH BPK RI')}</li>
              <li>${ext(L.cochrane, '<strong>Interventions for obtaining and maintaining employment in adults with severe mental illness, a network meta-analysis</strong>, Suijkerbuijk YB dkk., Cochrane Database of Systematic Reviews, 2017')}</li>
              <li>${ext(L.wehman, '<strong>Competitive employment for youth with autism spectrum disorders: early results from a randomized clinical trial</strong>, Wehman PH dkk., Journal of Autism and Developmental Disorders, 2014')}</li>
              <li>${ext(L.fong, '<strong>Interventions for improving employment outcomes for persons with autism spectrum disorders: A systematic review update</strong>, Fong CJ dkk., Campbell Systematic Reviews, 2021')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat hukum atau pengganti konsultasi dengan tenaga profesional</strong>. Sumber dicek pada 27 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Supported%20Employment%20Disabilitas%20di%20Indonesia%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Supported%20Employment%20Disabilitas%20di%20Indonesia&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

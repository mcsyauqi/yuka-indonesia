#!/usr/bin/env node
'use strict';

// One-time generator for artikel/homeschooling-vs-sekolah-inklusi.html
// (catchup 2026-09-28, kartu Gy7AJsA9, GEO/AEO comparison page).
// Skeleton copied from scripts/gen-apa-yang-dimaksud-dengan-sekolah-luar-biasa.js.
// Anti-cannibalization: artikel/perbedaan-homeschooling-dan-sekolah-formal-untuk-abk.html owns the broad
// "homeschooling vs sekolah formal" decision guide. This page is narrower: homeschooling (sekolahrumah) vs
// sekolah inklusi specifically, as a criteria table meant to be quoted, and links to that guide as the hub.
// No rupiah figures on purpose: the card forbids invented price ranges and no named, dated, live source gives
// comparable costs for both paths. Cost row is built only from legal text (UU 20/2003 Pasal 34 ayat 2,
// Permendikbudristek 48/2023 Pasal 5-6) and links to artikel/biaya-homeschooling for components.
// Legal text checked 2026-09-28 on pasal.id / JDIH BPK:
// - Permendikbud 129/2014 Pasal 1 angka 4, 4, 5, 6 ayat (1), 7, 10, 11, 12
// - UU 20/2003 Pasal 27, 34 ayat (2)
// - UU 8/2016 Pasal 10, 40 ayat (2)-(5)
// - Permendikbudristek 48/2023 Pasal 4, 5, 8, 10, 43 (43 revokes the kelainan provisions of Permendiknas 70/2009)
// No image: no licensed photo without identifiable children; logo used as OG image, like sibling articles.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'homeschooling-vs-sekolah-inklusi';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Homeschooling vs Sekolah Inklusi untuk ABK: Tabel Perbandingan';
const META_DESC = 'Homeschooling vs sekolah inklusi untuk anak berkebutuhan khusus: biaya, ijazah, sosialisasi, pendamping, dan dasar hukumnya dalam satu tabel perbandingan.';
const OG_TITLE = 'Homeschooling vs Sekolah Inklusi: Perbandingan untuk Orang Tua ABK';
const OG_DESC = 'Tabel perbandingan homeschooling dan sekolah inklusi dengan kriteria biaya, legalitas ijazah, sosialisasi, kebutuhan pendamping, dan kecocokan untuk ABK.';
const H1 = 'Homeschooling vs Sekolah Inklusi: Perbandingan untuk Orang Tua Anak Berkebutuhan Khusus';
const IMAGE = 'Logo/Logo.webp';
const IMAGE_URL = `${SITE}/${IMAGE}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T09:00:00+07:00';
const DATE_MODIFIED = '2026-09-28T09:00:00+07:00';
const DATE_DISPLAY = '28 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 65) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 160) throw new Error('meta description out of range: ' + META_DESC.length);

const L = {
  p129: 'https://pasal.id/peraturan/permen/permendikbud-no-129-tahun-2014',
  uu20: 'https://peraturan.bpk.go.id/Details/43920/uu-no-20-tahun-2003',
  uu8: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016',
  p48: 'https://pasal.id/peraturan/permen/permendikbudriset-no-48-tahun-2023',
  p70: 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-nasional-nomor-70-tahun-2009-tentang-pendidikan-inklusif-bagi-peserta-didik-yang-memiliki-kelainan-dan-memiliki-potensi-kecerdasan-dan-atau-bakat-istimewa'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Mana yang lebih baik untuk ABK, homeschooling atau sekolah inklusi?',
    a: 'Tidak ada yang otomatis lebih baik. Sekolah inklusi memberi kesempatan belajar bersama teman sebaya dan ijazah langsung dari sekolah, dengan akomodasi yang layak yang wajib disediakan. Homeschooling memberi fleksibilitas penuh, tetapi keluarga memikul pengajaran, biaya, dan kesempatan sosialisasi. Pilihan sebaiknya didasarkan pada asesmen kebutuhan anak.'
  },
  {
    q: 'Apakah anak homeschooling bisa mendapat ijazah?',
    a: 'Bisa. Permendikbud 129 Tahun 2014 Pasal 4 menyatakan hasil pendidikan sekolahrumah diakui sama dengan pendidikan formal dan nonformal setelah peserta didik lulus ujian sesuai standar nasional pendidikan. Ujiannya diikuti di satuan pendidikan formal atau nonformal yang disetujui atau ditunjuk dinas pendidikan kabupaten/kota (Pasal 12), dan ijazahnya berupa ijazah kesetaraan Paket A, B, atau C.'
  },
  {
    q: 'Apakah homeschooling wajib didaftarkan?',
    a: 'Ya. Pasal 6 ayat (1) Permendikbud 129 Tahun 2014 mewajibkan penyelenggara sekolahrumah tunggal dan majemuk mendaftar ke dinas pendidikan kabupaten/kota. Kurikulumnya mengacu pada kurikulum nasional, dan pendidikan agama, Pancasila dan Kewarganegaraan, serta bahasa Indonesia wajib diajarkan (Pasal 7).'
  },
  {
    q: 'Apakah sekolah inklusi wajib menyediakan guru pendamping?',
    a: 'Permendikbudristek 48 Tahun 2023 mewajibkan pemerintah daerah, penyelenggara, dan satuan pendidikan menyediakan akomodasi yang layak, termasuk penyiapan pendidik. Pendidiknya bisa guru kelas atau guru mata pelajaran dan/atau guru pendidikan khusus, yang bertugas melayani peserta didik penyandang disabilitas dan membimbing guru lain. Pendamping pribadi (shadow teacher) biasanya diatur lewat kesepakatan dengan sekolah.'
  },
  {
    q: 'Bisakah anak pindah dari homeschooling ke sekolah inklusi?',
    a: 'Bisa. Menurut Pasal 10 dan 11 Permendikbud 129 Tahun 2014, anak sekolahrumah dapat diterima di SD tidak pada awal kelas 1 setelah lulus tes kelayakan dan penempatan, di SMP sejak awal kelas 7 setelah lulus Paket A atau SD, dan di SMA atau SMK sejak awal kelas 10 setelah lulus Paket B atau SMP.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Homeschooling vs Sekolah Inklusi', item: CANONICAL }
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
  keywords: 'homeschooling vs sekolah inklusi, homeschooling atau sekolah inklusi, homeschooling ABK, sekolah inklusi, perbandingan homeschooling',
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
    <meta name="keywords" content="homeschooling vs sekolah inklusi, homeschooling atau sekolah inklusi, homeschooling ABK, sekolah inklusi, YUKA">
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
                <span class="current">Homeschooling vs Sekolah Inklusi</span>
            </div>
            <span class="card-category" style="background: var(--secondary); color: var(--gray-900); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; display: inline-block; margin: 1rem 0;">Pendidikan</span>
            <h1 style="font-size: 2.5rem; max-width: 800px;">${H1}</h1>
            <div class="article-meta">
                <span>${DATE_DISPLAY}</span>
                <span>9 menit baca</span>
                <span>Tim YUKA</span>
            </div>
        </div>
    </header>

        <article class="article-content">
        <div class="article-body">
            <p style="font-size:0.95rem;color:#555;margin-bottom:1rem;"><strong>Terakhir diperbarui:</strong> <time datetime="2026-09-28">28 September 2026</time>. Teks peraturan dicek pada tanggal yang sama.</p>

            <div class="jawaban-singkat" style="background:#F1F5FF;border-left:4px solid var(--primary);padding:1rem 1.25rem;border-radius:8px;margin-bottom:1.5rem;"><p style="margin:0;"><strong>Jawaban singkat:</strong> homeschooling (sekolahrumah) adalah pendidikan yang dijalankan keluarga, sedangkan sekolah inklusi adalah sekolah reguler yang menerima anak berkebutuhan khusus belajar bersama teman sebayanya. Keduanya sah dan bisa berujung ijazah. Sekolah inklusi unggul dalam sosialisasi dan dukungan guru, homeschooling unggul dalam fleksibilitas. Pilihan terbaik bergantung pada hasil asesmen anak.</p></div>

            <div class="info-box">
                <h4>Cakupan artikel ini</h4>
                <p style="margin-bottom:0;">Halaman ini khusus membandingkan <strong>homeschooling dan sekolah inklusi</strong> dengan kriteria yang eksplisit. Untuk panduan yang lebih luas (homeschooling dibanding sekolah formal secara umum, termasuk kerangka keputusan), baca <a href="/artikel/perbedaan-homeschooling-dan-sekolah-formal-untuk-abk">perbedaan homeschooling dan sekolah formal untuk ABK</a>.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Pengertian singkat dua jalur</a></li>
                    <li><a href="#tabel">Tabel perbandingan homeschooling vs sekolah inklusi</a></li>
                    <li><a href="#biaya">Biaya: apa yang ditanggung siapa</a></li>
                    <li><a href="#ijazah">Legalitas dan ijazah</a></li>
                    <li><a href="#sosialisasi">Sosialisasi anak</a></li>
                    <li><a href="#pendamping">Kebutuhan pendamping</a></li>
                    <li><a href="#cocok">Kecocokan untuk ABK</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Pengertian Singkat Dua Jalur</h2>
            <p><strong>Homeschooling</strong> dalam peraturan disebut <em>sekolahrumah</em>. Permendikbud 129 Tahun 2014 Pasal 1 angka 4 mendefinisikannya sebagai proses layanan pendidikan yang secara sadar dan terencana dilakukan oleh orang tua atau keluarga di rumah atau tempat lain, dalam bentuk tunggal, majemuk, dan komunitas (${ext(L.p129, 'Permendikbud 129/2014')}). Bentuk dan cara memulainya dibahas di pilar <a href="/artikel/homeschooling-adalah">homeschooling adalah</a>.</p>
            <p><strong>Sekolah inklusi</strong> adalah sekolah reguler yang menjalankan pendidikan inklusif. Penjelasan Pasal 10 UU 8 Tahun 2016 membedakan pendidikan secara inklusif (anak penyandang disabilitas belajar bersama anak lain di sekolah reguler) dari pendidikan secara khusus (${ext(L.uu8, 'UU 8/2016')}). Konsep dan dasar hukumnya lengkap di pilar <a href="/artikel/pendidikan-inklusi">pendidikan inklusi adalah</a>. Jalur ketiga, yaitu sekolah luar biasa, dibahas terpisah di <a href="/artikel/apa-yang-dimaksud-dengan-sekolah-luar-biasa">apa yang dimaksud dengan sekolah luar biasa</a>.</p>

            <h2 id="tabel">Tabel Perbandingan Homeschooling vs Sekolah Inklusi</h2>
            <div class="table-wrap">
            <table class="classification-table">
                <caption style="caption-side:top;text-align:left;font-weight:600;padding-bottom:0.5rem;">Homeschooling vs sekolah inklusi untuk anak berkebutuhan khusus (diperbarui 28 September 2026)</caption>
                <thead>
                    <tr><th>Kriteria</th><th>Homeschooling (sekolahrumah)</th><th>Sekolah inklusi</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Biaya</strong></td><td>Ditanggung keluarga: materi, tutor atau lembaga pendamping, terapi, dan biaya ujian kesetaraan. Besarnya sangat bergantung pada pilihan keluarga.</td><td>Sekolah negeri jenjang pendidikan dasar: wajib belajar dijamin <strong>tanpa memungut biaya</strong> (UU 20/2003 Pasal 34 ayat 2). Sekolah swasta menetapkan biayanya sendiri. Pendamping pribadi, jika ada, bisa menjadi biaya tambahan.</td></tr>
                    <tr><td><strong>Legalitas dan ijazah</strong></td><td>Sah. Wajib didaftarkan ke dinas pendidikan kabupaten/kota (Permendikbud 129/2014 Pasal 6). Hasilnya diakui setara setelah lulus ujian (Pasal 4), berupa ijazah Paket A, B, atau C.</td><td>Sah sebagai sekolah formal. Ijazah diterbitkan sekolah seperti siswa reguler lain.</td></tr>
                    <tr><td><strong>Sosialisasi anak</strong></td><td>Harus dirancang keluarga: kelompok belajar, komunitas homeschooling, kegiatan di luar rumah.</td><td>Terjadi setiap hari bersama teman sebaya, termasuk teman tanpa disabilitas.</td></tr>
                    <tr><td><strong>Kebutuhan pendamping</strong></td><td>Orang tua menjadi pendidik utama, bisa dibantu tutor atau terapis.</td><td>Sekolah wajib menyediakan akomodasi yang layak, termasuk penyiapan pendidik dan guru pendidikan khusus (Permendikbudristek 48/2023). Sebagian anak tetap butuh pendamping pribadi.</td></tr>
                    <tr><td><strong>Kecocokan untuk ABK</strong></td><td>Cocok bila anak butuh ritme sangat individual, sedang menjalani terapi intensif, atau mudah kewalahan di kelas besar, dan keluarga sanggup mengajar.</td><td>Cocok bila anak bisa mengikuti rutinitas kelas dengan dukungan, dan sekolah benar-benar siap memberi akomodasi.</td></tr>
                    <tr><td><strong>Kurikulum</strong></td><td>Mengacu kurikulum nasional; agama, Pancasila dan Kewarganegaraan, serta bahasa Indonesia wajib (Pasal 7).</td><td>Kurikulum sekolah yang disesuaikan dengan kebutuhan anak.</td></tr>
                    <tr><td><strong>Pindah jalur</strong></td><td>Bisa masuk sekolah formal lewat tes kelayakan dan penempatan atau ijazah Paket (Pasal 10 dan 11).</td><td>Bisa pindah ke homeschooling kapan saja dengan mendaftarkan sekolahrumah.</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.9rem;">Sumber: ${ext(L.p129, 'Permendikbud 129/2014 tentang Sekolahrumah')}, ${ext(L.uu20, 'UU 20/2003 tentang Sistem Pendidikan Nasional')}, ${ext(L.p48, 'Permendikbudristek 48/2023 tentang Akomodasi yang Layak')}. Teks pasal dicek 28 September 2026.</p>

            <h2 id="biaya">Biaya: Apa yang Ditanggung Siapa</h2>
            <p>Kami sengaja tidak mencantumkan kisaran rupiah. Biaya homeschooling dan sekolah inklusi swasta sangat beragam, dan tidak ada sumber resmi yang merangkum keduanya secara sebanding. Yang bisa dipastikan dari peraturan:</p>
            <ul>
                <li><strong>Sekolah negeri jenjang dasar.</strong> UU 20/2003 Pasal 34 ayat (2) menyatakan pemerintah dan pemerintah daerah menjamin wajib belajar minimal jenjang pendidikan dasar <em>tanpa memungut biaya</em> (${ext(L.uu20, 'UU 20/2003')}).</li>
                <li><strong>Dukungan untuk akomodasi.</strong> Permendikbudristek 48/2023 Pasal 5 dan 6 menyebut fasilitasi akomodasi yang layak dapat berupa dukungan anggaran, bantuan atau beasiswa bagi peserta didik penyandang disabilitas, serta dana sarana dan prasarana (${ext(L.p48, 'Permendikbudristek 48/2023')}).</li>
                <li><strong>Homeschooling.</strong> Seluruh biaya belajar ditanggung keluarga. Komponennya (materi, tutor, lembaga, ujian) dirinci di artikel <a href="/artikel/biaya-homeschooling">biaya homeschooling</a>.</li>
            </ul>
            <p>Saat membandingkan, hitung juga biaya yang tidak tertulis: waktu orang tua yang mengajar di rumah, atau honor pendamping pribadi bila sekolah memintanya.</p>

            <h2 id="ijazah">Legalitas dan Ijazah</h2>
            <p>UU 20/2003 Pasal 27 menyebut hasil pendidikan informal oleh keluarga diakui sama dengan pendidikan formal dan nonformal setelah peserta didik lulus ujian sesuai standar nasional pendidikan. Permendikbud 129/2014 mengulang prinsip itu di Pasal 4 dan menambahkan bahwa ujian diikuti di satuan pendidikan formal atau nonformal yang disetujui atau ditunjuk dinas pendidikan kabupaten/kota (Pasal 12). Penjelasan praktisnya ada di <a href="/artikel/apakah-homeschooling-dapat-ijazah">apakah homeschooling dapat ijazah</a>.</p>
            <p>Untuk anak penyandang disabilitas, UU 8/2016 Pasal 40 ayat (5) juga mewajibkan pemerintah daerah memfasilitasi penyandang disabilitas yang tidak berpendidikan formal untuk mendapatkan ijazah pendidikan dasar dan menengah melalui program kesetaraan (${ext(L.uu8, 'UU 8/2016')}).</p>
            <p>Siswa sekolah inklusi menerima ijazah dari sekolahnya seperti siswa lain. Perlu dicatat, banyak tulisan masih merujuk ${ext(L.p70, 'Permendiknas 70/2009')} sebagai dasar sekolah inklusi. Ketentuan tentang peserta didik yang memiliki kelainan di peraturan itu sudah dicabut oleh Pasal 43 Permendikbudristek 48/2023, sehingga acuan yang berlaku kini adalah peraturan 2023 tersebut.</p>

            <h2 id="sosialisasi">Sosialisasi Anak</h2>
            <p>Di sekolah inklusi, interaksi dengan teman sebaya terjadi setiap hari, termasuk dengan anak tanpa disabilitas. Itu kesempatan belajar keterampilan sosial dalam situasi nyata, tetapi juga bisa melelahkan bagi anak yang sensitif terhadap keramaian. Di homeschooling, sosialisasi tidak hilang, tetapi harus direncanakan: kelompok belajar, komunitas sekolahrumah, kegiatan olahraga, atau kegiatan keagamaan. Tanpa rencana, anak berisiko jarang bertemu teman sebaya.</p>

            <h2 id="pendamping">Kebutuhan Pendamping</h2>
            <p>Pada homeschooling, orang tua adalah pendidik utama. Keluarga bisa melibatkan tutor, terapis, atau lembaga, tetapi tanggung jawab akhirnya tetap di rumah.</p>
            <p>Pada sekolah inklusi, Permendikbudristek 48/2023 Pasal 8 menyebut pendidik untuk akomodasi yang layak terdiri atas guru kelas atau guru mata pelajaran dan/atau guru pendidikan khusus. Pasal 10 menugaskan guru pendidikan khusus memberi layanan pembelajaran bagi peserta didik penyandang disabilitas dan membimbing guru lain (${ext(L.p48, 'Permendikbudristek 48/2023')}). Anak yang butuh pendampingan satu lawan satu sepanjang hari biasanya tetap memerlukan pendamping pribadi. Perannya dijelaskan di <a href="/artikel/shadow-teacher-adalah">shadow teacher adalah</a> dan <a href="/artikel/gpk-adalah">GPK adalah</a>.</p>

            <h2 id="cocok">Kecocokan untuk ABK</h2>
            <p>Tidak ada jalur yang cocok untuk semua anak. Beberapa pertanyaan yang membantu:</p>
            <ol>
                <li><strong>Apa hasil asesmen anak?</strong> Mulai dari <a href="/artikel/asesmen-abk">asesmen ABK</a> oleh tenaga profesional sebelum memilih jalur.</li>
                <li><strong>Bisakah anak mengikuti rutinitas kelas dengan dukungan?</strong> Jika ya, sekolah inklusi memberi manfaat sosial yang sulit ditiru di rumah.</li>
                <li><strong>Apakah sekolah benar-benar siap?</strong> Tanyakan guru pendidikan khusus, penyesuaian materi, dan cara sekolah menangani krisis.</li>
                <li><strong>Apakah keluarga sanggup mengajar?</strong> Homeschooling menuntut waktu, konsistensi, dan kemampuan mengelola kurikulum.</li>
                <li><strong>Apakah anak sedang menjalani terapi intensif?</strong> Jadwal terapi yang padat sering lebih mudah diatur lewat homeschooling.</li>
            </ol>
            <p>Keputusan ini juga bisa ditinjau ulang. Karena peraturan memungkinkan perpindahan jalur, sebagian keluarga memulai dengan homeschooling lalu masuk sekolah inklusi saat anak siap, atau sebaliknya. Panduan <a href="/artikel/homeschooling-anak-berkebutuhan-khusus">homeschooling untuk ABK</a> membahas persiapan di rumah secara lebih rinci.</p>

            <div class="story-highlight">
                <h3>Tentang YUKA</h3>
                <p style="margin-bottom:0;">YUKA menjalankan pendidikan inklusi untuk anak berkebutuhan khusus di Sleman melalui Sekolah Inklusi Taruna Imani. Artikel ini disusun sebagai informasi netral untuk membantu orang tua menimbang pilihan, bukan rekomendasi layanan tertentu. Gambaran program yayasan ada di halaman <a href="/program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/perbedaan-homeschooling-dan-sekolah-formal-untuk-abk">Perbedaan Homeschooling dan Sekolah Formal untuk ABK</a></h4>
                    <p>Kerangka keputusan yang lebih luas.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/apa-perbedaan-sekolah-inklusi-dan-slb">Perbedaan Sekolah Inklusi dan SLB</a></h4>
                    <p>Membandingkan sekolah inklusi dengan sekolah luar biasa.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/biaya-homeschooling">Biaya Homeschooling</a></h4>
                    <p>Komponen biaya belajar di rumah.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#Homeschooling</a>
            <a href="#">#SekolahInklusi</a>
            <a href="#">#PendidikanInklusi</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.p129, '<strong>Peraturan Menteri Pendidikan dan Kebudayaan Nomor 129 Tahun 2014 tentang Sekolahrumah.</strong> Teks via pasal.id, sumber peraturan.go.id')}</li>
              <li>${ext(L.uu20, '<strong>Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional.</strong> JDIH BPK RI')}</li>
              <li>${ext(L.uu8, '<strong>Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas.</strong> JDIH BPK RI')}</li>
              <li>${ext(L.p48, '<strong>Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas.</strong> Teks via pasal.id')}</li>
              <li>${ext(L.p70, '<strong>Peraturan Menteri Pendidikan Nasional Nomor 70 Tahun 2009 tentang Pendidikan Inklusif.</strong> JDIH Kemendikdasmen (sebagian ketentuannya dicabut Permendikbudristek 48/2023)')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Catatan:</strong> Artikel ini adalah informasi umum, <strong>bukan nasihat hukum</strong>. Peraturan dapat diubah; periksa versi terbaru di JDIH. Teks pasal dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Homeschooling%20vs%20Sekolah%20Inklusi%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Homeschooling%20vs%20Sekolah%20Inklusi&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000;">${SVG_X}</a>
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

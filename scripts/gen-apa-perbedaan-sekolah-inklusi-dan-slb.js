#!/usr/bin/env node
'use strict';

// One-time generator for artikel/apa-perbedaan-sekolah-inklusi-dan-slb.html
// (catchup 2026-09-27, kartu KXahaaka). Canonical shell via scripts/lib/article-shell.js.
// Every legal claim below was checked on 2026-09-27 against the official PDFs from JDIH BPK:
// - UU 20/2003 Pasal 32 ayat (1): definisi pendidikan khusus.
// - UU 8/2016 Pasal 10 huruf a + Penjelasan (definisi "pendidikan secara inklusif" dan "pendidikan secara khusus"),
//   Pasal 40 ayat (1)-(4) (inklusif DAN khusus; wajib belajar 12 tahun; sekolah dekat rumah),
//   Pasal 42 ayat (1)-(2) (ULD untuk pendidikan inklusif dasar-menengah, fungsi a-f).
// - Permendikbudristek 48/2023: Pasal 1 (definisi Akomodasi yang Layak), Pasal 5 ayat (1) (anggaran, sarpras, PTK,
//   kurikulum), Pasal 10 (guru pendidikan khusus di ULD, bisa di lebih dari 1 satuan), Pasal 11 (modifikasi
//   kurikulum per ragam disabilitas; hambatan intelektual = modifikasi SKL, isi, proses, penilaian),
//   Pasal 12 (akomodasi berdasar asesmen fungsional, konsultasi dengan peserta didik, orang tua, ULD).
// Photos: Wikimedia Commons, both viewed before use.
//   Hero: Gedung SLB Negeri Tamanwinangun Kebumen, DARMAS BS 9, CC BY-SA 4.0.
//   Body: DFAT/BEST Program Philippines inclusive classroom (buddy system), CC BY 4.0.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'apa-perbedaan-sekolah-inklusi-dan-slb';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Perbedaan Sekolah Inklusi dan SLB: Panduan Orang Tua';
const META_DESC = 'Apa perbedaan sekolah inklusi dan SLB? Pahami bedanya dari dasar hukum, kurikulum, guru, dan teman belajar, lalu pilih yang paling cocok untuk anak.';
const OG_TITLE = 'Apa Perbedaan Sekolah Inklusi dan SLB? Panduan Lengkap untuk Orang Tua';
const OG_DESC = 'Sekolah inklusi dan SLB sama-sama diakui undang-undang. Bedanya ada pada teman belajar, kurikulum, guru, dan layanan. Simak perbandingan dan cara memilihnya.';
const H1 = 'Apa Perbedaan Sekolah Inklusi dan SLB? Panduan Lengkap untuk Orang Tua';
const IMAGE_HERO = 'assets/images/artikel/gedung-slb-negeri-tamanwinangun-kebumen-wikimedia.webp';
const IMAGE_HERO_ALT = 'Deretan ruang kelas beratap genteng dengan teras berpilar putih dan pot tanaman di Sekolah Luar Biasa Negeri Tamanwinangun, Kebumen, di samping lapangan sekolah';
const IMAGE_BODY = 'assets/images/artikel/kelas-inklusif-buddy-system-dfat-wikimedia.webp';
const IMAGE_BODY_ALT = 'Seorang anak laki-laki kecil berseragam putih menyusun kepingan permainan edukatif di atas meja merah muda, didampingi seorang siswa yang lebih besar di sebelahnya';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-27T21:00:00+07:00';
const DATE_MODIFIED = '2026-09-27T21:00:00+07:00';
const DATE_DISPLAY = '27 September 2026';

const CREDIT = {
  name: 'DARMAS BS 9',
  author: 'https://commons.wikimedia.org/wiki/User:DARMAS_BS_9',
  source: 'https://commons.wikimedia.org/wiki/File:Gedung_Sekolah_Luar_Biasa_Negeri_Tamanwinangun_Kebumen.jpg',
  license: 'CC BY-SA 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
};
const CREDIT2 = {
  name: 'DFAT / Basic Education Sector Transformation Program',
  source: 'https://commons.wikimedia.org/wiki/File:Inclusive_education_supported_by_the_Philippines-Australia_Basic_Education_Sector_Transformation_(BEST)_Program_(31651169287).jpg',
  license: 'CC BY 4.0',
  licenseUrl: 'https://creativecommons.org/licenses/by/4.0/'
};

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const L = {
  uu20: 'https://peraturan.bpk.go.id/Details/43920/uu-no-20-tahun-2003',
  uu8: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016',
  p48: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa perbedaan utama sekolah inklusi dan SLB?',
    a: 'Sekolah inklusi adalah sekolah reguler yang menerima anak penyandang disabilitas untuk belajar bersama anak lain di kelas yang sama. SLB (Sekolah Luar Biasa) hanya melayani peserta didik penyandang disabilitas, dengan kurikulum khusus, proses pembelajaran khusus, dan guru pendidikan khusus di tempat belajar khusus.'
  },
  {
    q: 'Mana yang lebih baik, sekolah inklusi atau SLB?',
    a: 'Tidak ada yang selalu lebih baik. UU Nomor 8 Tahun 2016 mengakui keduanya sebagai jalur pendidikan yang sah. Pilihan terbaik bergantung pada kebutuhan dukungan anak, kesiapan sekolah memberi akomodasi yang layak, dan hasil asesmen. Banyak anak cocok di sekolah inklusi, sementara anak dengan kebutuhan dukungan sangat tinggi sering lebih terlayani di SLB.'
  },
  {
    q: 'Apakah anak berkebutuhan khusus boleh ditolak sekolah reguler?',
    a: 'UU Nomor 8 Tahun 2016 menjamin hak penyandang disabilitas mendapatkan pendidikan bermutu secara inklusif dan khusus, dan Pemerintah Daerah wajib mengutamakan anak penyandang disabilitas bersekolah di lokasi dekat tempat tinggalnya. Jika anak ditolak, orang tua bisa menanyakan alasannya secara tertulis dan menghubungi dinas pendidikan setempat.'
  },
  {
    q: 'Apakah kurikulum sekolah inklusi sama dengan kurikulum SLB?',
    a: 'Tidak persis sama. Di sekolah inklusi, anak mengikuti kurikulum sekolah yang dimodifikasi sesuai ragam disabilitasnya. Permendikbudristek 48/2023 mengatur bahwa bagi anak dengan hambatan intelektual, modifikasi bisa mencakup standar kompetensi lulusan, isi, proses, dan penilaian. SLB memakai kurikulum pendidikan khusus sejak awal.'
  },
  {
    q: 'Bisakah anak pindah dari SLB ke sekolah inklusi atau sebaliknya?',
    a: 'Bisa. Pilihan sekolah bukan keputusan seumur hidup. Evaluasi perkembangan anak secara berkala bersama guru dan tenaga ahli, lalu pertimbangkan pindah jalur bila kebutuhan anak berubah atau dukungan di sekolah saat ini tidak lagi mencukupi.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Perbedaan Sekolah Inklusi dan SLB', item: CANONICAL }
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
    caption: 'Gedung Sekolah Luar Biasa Negeri Tamanwinangun, Kebumen',
    creditText: `Foto: ${CREDIT.name} / Wikimedia Commons, ${CREDIT.license}`,
    author: { '@type': 'Person', name: CREDIT.name, url: CREDIT.author },
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
  keywords: 'apa perbedaan sekolah inklusi dan slb, perbedaan sekolah inklusi dan slb, sekolah inklusi, SLB, sekolah luar biasa, pendidikan khusus, akomodasi yang layak',
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
    <meta name="keywords" content="apa perbedaan sekolah inklusi dan slb, sekolah inklusi, SLB, sekolah luar biasa, pendidikan khusus, YUKA">
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
                <span class="current">Perbedaan Sekolah Inklusi dan SLB</span>
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
            <figcaption>Gedung Sekolah Luar Biasa Negeri Tamanwinangun di Kebumen, Jawa Tengah, contoh SLB negeri yang khusus melayani peserta didik penyandang disabilitas. Foto ini bukan dokumentasi kegiatan YUKA.
                <span class="kredit">Foto: <a href="${CREDIT.author}" rel="nofollow noopener" target="_blank">${CREDIT.name}</a> / <a href="${CREDIT.source}" rel="nofollow noopener" target="_blank">Wikimedia Commons</a>, <a href="${CREDIT.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT.license}</a>, diperkecil dan dikonversi ke WebP.</span>
            </figcaption>
        </figure>
    </div>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Perbedaan sekolah inklusi dan SLB</strong> terletak pada siapa teman belajarnya. <strong>Sekolah inklusi</strong> adalah sekolah reguler tempat anak penyandang disabilitas belajar bersama anak lain di kelas yang sama, dengan akomodasi yang layak. <strong>SLB (Sekolah Luar Biasa)</strong> hanya melayani peserta didik penyandang disabilitas, memakai kurikulum khusus dan guru pendidikan khusus di tempat belajar khusus. Keduanya diakui UU Nomor 8 Tahun 2016, jadi pilihan terbaik bergantung pada kebutuhan dukungan anak.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah informasi umum untuk orang tua, guru, dan pendamping. Kutipan peraturan diambil dari naskah resmi di JDIH BPK. Keputusan sekolah untuk anak sebaiknya didasarkan pada asesmen oleh tenaga profesional dan diskusi langsung dengan pihak sekolah.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Pengertian sekolah inklusi dan SLB</a></li>
                    <li><a href="#tabel">Tabel perbedaan sekolah inklusi dan SLB</a></li>
                    <li><a href="#hukum">Dasar hukum keduanya</a></li>
                    <li><a href="#kurikulum">Beda kurikulum dan cara belajar</a></li>
                    <li><a href="#guru">Beda guru dan layanan pendamping</a></li>
                    <li><a href="#kelebihan">Kelebihan dan tantangan masing-masing</a></li>
                    <li><a href="#memilih">Cara memilih yang cocok untuk anak</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Pengertian Sekolah Inklusi dan SLB</h2>
            <p>Istilah resminya bisa ditemukan di Penjelasan Pasal 10 huruf a ${ext(L.uu8, 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')}. Undang-undang ini membedakan dua jalur:</p>
            <ul>
                <li><strong>Pendidikan secara inklusif</strong> adalah pendidikan bagi peserta didik penyandang disabilitas untuk belajar bersama dengan peserta didik bukan penyandang disabilitas di sekolah reguler atau perguruan tinggi. Sekolah yang menjalankannya biasa disebut sekolah inklusi.</li>
                <li><strong>Pendidikan secara khusus</strong> adalah pendidikan yang hanya memberikan layanan kepada peserta didik penyandang disabilitas dengan kurikulum khusus, proses pembelajaran khusus, bimbingan, dan/atau pengasuhan oleh tenaga pendidik khusus, di tempat belajar khusus. Bentuk sekolahnya yang paling dikenal adalah SLB.</li>
            </ul>
            <p>Jauh sebelumnya, Pasal 32 ayat (1) ${ext(L.uu20, 'UU Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional')} sudah mendefinisikan pendidikan khusus sebagai pendidikan bagi peserta didik yang memiliki tingkat kesulitan mengikuti proses pembelajaran karena kelainan fisik, emosional, mental, sosial, dan/atau memiliki potensi kecerdasan dan bakat istimewa. Penjelasan lebih lengkap tentang jenis SLB (SLB-A sampai SLB-G) ada di artikel <a href="/artikel/slb-adalah">SLB adalah</a>, sedangkan konsep inklusi dibahas tuntas di <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a>.</p>

            <h2 id="tabel">Tabel Perbedaan Sekolah Inklusi dan SLB</h2>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>Sekolah inklusi</th><th>SLB (Sekolah Luar Biasa)</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Teman belajar</strong></td><td>Campuran, anak penyandang disabilitas bersama anak lain</td><td>Hanya peserta didik penyandang disabilitas</td></tr>
                    <tr><td><strong>Jenis sekolah</strong></td><td>Sekolah reguler (SD, SMP, SMA/SMK, dan sederajat)</td><td>Satuan pendidikan khusus</td></tr>
                    <tr><td><strong>Kurikulum</strong></td><td>Kurikulum sekolah yang dimodifikasi sesuai ragam disabilitas</td><td>Kurikulum pendidikan khusus</td></tr>
                    <tr><td><strong>Guru</strong></td><td>Guru kelas atau guru mapel, didukung guru pendidikan khusus</td><td>Guru pendidikan khusus sebagai pengajar utama</td></tr>
                    <tr><td><strong>Ukuran kelas</strong></td><td>Umumnya seperti kelas reguler</td><td>Umumnya lebih kecil, dikelompokkan menurut ragam disabilitas</td></tr>
                    <tr><td><strong>Fokus</strong></td><td>Akademik dan sosial bersama teman sebaya</td><td>Layanan khusus yang intensif, termasuk kemandirian dan keterampilan</td></tr>
                    <tr><td><strong>Lokasi</strong></td><td>Sekolah reguler lebih banyak dan sering lebih dekat rumah</td><td>Jumlah lebih terbatas, sebagian anak harus menempuh jarak jauh</td></tr>
                </tbody>
            </table>
            </div>
            <p>Baris ukuran kelas dan fokus di atas menggambarkan pola umum, bukan aturan baku. Praktik tiap sekolah bisa berbeda, jadi selalu tanyakan langsung saat survei.</p>

            <h2 id="hukum">Dasar Hukum Keduanya</h2>
            <p>Hal terpenting yang perlu dipahami orang tua: <strong>sekolah inklusi dan SLB sama-sama sah dan sama-sama hak anak</strong>. Tidak ada yang "kelas dua".</p>
            <ul>
                <li><strong>Pasal 10 huruf a UU 8/2016</strong> menjamin hak penyandang disabilitas mendapatkan pendidikan bermutu di semua jenis, jalur, dan jenjang pendidikan <em>secara inklusif dan khusus</em>.</li>
                <li><strong>Pasal 40 UU 8/2016</strong> mewajibkan Pemerintah dan Pemerintah Daerah menyelenggarakan atau memfasilitasi pendidikan penyandang disabilitas melalui pendidikan inklusif dan pendidikan khusus, mengikutsertakan anak penyandang disabilitas dalam program wajib belajar 12 tahun, dan <strong>mengutamakan anak penyandang disabilitas bersekolah di lokasi yang dekat tempat tinggalnya</strong>.</li>
                <li><strong>Pasal 42 UU 8/2016</strong> mewajibkan Pemerintah Daerah memfasilitasi pembentukan Unit Layanan Disabilitas untuk mendukung pendidikan inklusif tingkat dasar dan menengah. Fungsinya antara lain meningkatkan kompetensi guru sekolah reguler, menyediakan pendampingan bagi peserta didik, menyediakan media pembelajaran dan alat bantu, serta melakukan deteksi dan intervensi dini.</li>
                <li><strong>${ext(L.p48, 'Permendikbudristek Nomor 48 Tahun 2023')}</strong> mengatur akomodasi yang layak bagi peserta didik penyandang disabilitas, yaitu modifikasi dan penyesuaian yang tepat dan diperlukan agar mereka bisa menikmati haknya berdasarkan kesetaraan (Pasal 1). Aturan ini berlaku mulai dari PAUD formal sampai pendidikan tinggi.</li>
            </ul>
            <p>Artinya, sekolah reguler tidak bisa sekadar "menerima" anak lalu membiarkannya menyesuaikan diri sendiri. Sekolah yang menerima peserta didik penyandang disabilitas diharapkan menyediakan dukungan yang sesuai. Hak-hak ini dibahas lebih rinci di artikel <a href="/artikel/anak-abk-harus-sekolah-dimana">anak ABK harus sekolah di mana</a>.</p>

            <h2 id="kurikulum">Beda Kurikulum dan Cara Belajar</h2>
            <p>Di <strong>SLB</strong>, kurikulum pendidikan khusus dipakai sejak awal. Kelompok belajar biasanya dibentuk menurut ragam disabilitas, misalnya tunanetra, tunarungu, atau hambatan intelektual, sehingga metode dan media bisa disiapkan sesuai kebutuhan kelompok itu.</p>
            <p>Di <strong>sekolah inklusi</strong>, anak mengikuti kurikulum sekolah reguler dengan penyesuaian. Pasal 11 Permendikbudristek 48/2023 mengatur bahwa satuan pendidikan menyediakan kurikulum dalam bentuk modifikasi sesuai ragam disabilitas:</p>
            <ul>
                <li>Untuk anak <strong>tanpa hambatan intelektual</strong> (misalnya disabilitas fisik atau sensorik), modifikasi dilakukan pada standar proses, yaitu cara mengajarnya. Contohnya materi dalam huruf braille, juru bahasa isyarat, atau waktu ujian yang lebih panjang.</li>
                <li>Untuk anak <strong>dengan hambatan intelektual</strong>, modifikasi bisa mencakup standar kompetensi lulusan, standar isi, standar proses, dan standar penilaian. Target belajarnya disesuaikan dengan kemampuan anak.</li>
            </ul>
            <p>Penyesuaian ini tidak ditebak-tebak. Pasal 12 aturan yang sama menyebut bentuk akomodasi diberikan berdasarkan <strong>asesmen fungsional</strong> oleh sekolah, lalu dipenuhi melalui konsultasi yang melibatkan peserta didik, orang tua atau wali, dan Unit Layanan Disabilitas. Di lapangan, hasilnya sering dituangkan dalam <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual (PPI)</a>. Tahap penilaian awalnya dijelaskan di artikel <a href="/artikel/asesmen-abk">asesmen ABK</a>.</p>

            <figure style="margin:2rem 0;">
                <img src="../${IMAGE_BODY}" alt="${IMAGE_BODY_ALT}" width="1000" height="563" loading="lazy" style="width:100%;height:auto;border-radius:10px;">
                <figcaption style="font-size:0.9rem;color:#555;margin-top:0.5rem;line-height:1.6;">Sistem teman sebaya (buddy system) di kelas inklusif sebuah sekolah di Filipina: seorang siswa TK dengan disabilitas belajar dibantu temannya memahami pelajaran matematika. Foto program bantuan pendidikan Australia, bukan dokumentasi kegiatan YUKA.
                    <span class="kredit">Foto: <a href="${CREDIT2.source}" rel="nofollow noopener" target="_blank">${CREDIT2.name}</a> / Wikimedia Commons, <a href="${CREDIT2.licenseUrl}" rel="nofollow noopener" target="_blank">${CREDIT2.license}</a>, diperkecil dan dikonversi ke WebP.</span>
                </figcaption>
            </figure>

            <h2 id="guru">Beda Guru dan Layanan Pendamping</h2>
            <p>Di SLB, guru pendidikan khusus adalah pengajar utama di kelas. Di sekolah inklusi, pengajar utamanya tetap guru kelas atau guru mata pelajaran, dengan dukungan tambahan.</p>
            <p>Permendikbudristek 48/2023 Pasal 10 mengatur bahwa guru pendidikan khusus ditugaskan pada Unit Layanan Disabilitas. Tugasnya memberikan layanan pembelajaran bagi peserta didik penyandang disabilitas dan/atau membimbing guru lain dalam melayani mereka, dan satu guru pendidikan khusus bisa bertugas di lebih dari satu sekolah. Di banyak sekolah inklusi, peran ini dikenal sebagai guru pembimbing khusus (GPK).</p>
            <p>Selain itu, sebagian keluarga memakai <a href="/artikel/shadow-teacher-adalah">shadow teacher</a> yang mendampingi satu anak di kelas. Pendekatan mengajar bersama seperti <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching di kelas inklusi</a> juga membantu guru reguler dan guru pendidikan khusus berbagi peran.</p>

            <h2 id="kelebihan">Kelebihan dan Tantangan Masing-Masing</h2>
            <h3>Sekolah inklusi</h3>
            <ul>
                <li><strong>Kelebihan:</strong> anak bergaul setiap hari dengan teman sebaya yang beragam, berlatih keterampilan sosial di situasi nyata, dan sering bisa bersekolah lebih dekat dengan rumah. Teman sekelas juga belajar menghargai perbedaan.</li>
                <li><strong>Tantangan:</strong> kesiapan sekolah sangat beragam. Jumlah guru pendamping, pelatihan guru kelas, dan sarana pendukung belum merata, sehingga kualitas layanan bisa berbeda jauh antarsekolah.</li>
            </ul>
            <h3>SLB</h3>
            <ul>
                <li><strong>Kelebihan:</strong> guru terlatih menangani ragam disabilitas tertentu, kelas biasanya lebih kecil, dan sarana khusus seperti alat bantu dengar atau buku braille lebih mudah tersedia. Program kemandirian dan keterampilan sering menjadi bagian inti.</li>
                <li><strong>Tantangan:</strong> kesempatan bergaul dengan anak nondisabilitas lebih sedikit, dan jumlah SLB lebih terbatas, sehingga sebagian anak harus menempuh perjalanan jauh. Cari lokasinya lewat panduan <a href="/artikel/slb-terdekat">SLB terdekat</a>.</li>
            </ul>

            <h2 id="memilih">Cara Memilih yang Cocok untuk Anak</h2>
            <p>Tidak ada jawaban yang sama untuk semua anak. Langkah berikut membantu orang tua mengambil keputusan yang lebih terarah:</p>
            <ol>
                <li><strong>Mulai dari asesmen.</strong> Minta asesmen dari psikolog, dokter tumbuh kembang, atau tenaga ahli pendidikan khusus untuk memahami kekuatan dan kebutuhan dukungan anak.</li>
                <li><strong>Nilai kebutuhan dukungan harian.</strong> Anak yang butuh dukungan sangat intensif sepanjang hari, misalnya untuk komunikasi dasar atau keselamatan, bisa lebih terlayani di SLB. Anak yang bisa mengikuti rutinitas kelas dengan akomodasi sering berkembang baik di sekolah inklusi.</li>
                <li><strong>Survei sekolah langsung.</strong> Tanyakan berapa guru pendamping yang tersedia, bagaimana penyusunan program pembelajaran individual, dan bagaimana sekolah menangani perundungan. Amati suasana kelas bila diizinkan.</li>
                <li><strong>Tanyakan akomodasi secara spesifik.</strong> Misalnya penyesuaian tugas, waktu ujian, tempat duduk, atau media belajar. Jawaban yang konkret menunjukkan kesiapan sekolah.</li>
                <li><strong>Libatkan anak.</strong> Perhatikan kenyamanan dan pendapat anak setelah kunjungan atau masa percobaan.</li>
                <li><strong>Evaluasi berkala.</strong> Pilihan sekolah bukan keputusan seumur hidup. Anak bisa pindah dari SLB ke sekolah inklusi atau sebaliknya bila kebutuhannya berubah.</li>
            </ol>
            <p>Peran keluarga selama proses ini sangat menentukan. Tipsnya dibahas di <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA mengelola layanan pendidikan inklusi bagi anak berkebutuhan khusus di Sleman. Ayah dan Bunda yang sedang menimbang pilihan sekolah bisa melihat informasi di halaman <a href="/sekolah-inklusi-sleman">sekolah inklusi Sleman</a> atau berdiskusi dengan tim YUKA melalui halaman <a href="/kontak">kontak</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/pendidikan-inklusi">Pendidikan Inklusi</a></h4>
                    <p>Konsep, prinsip, dan penerapannya di Indonesia.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/slb-adalah">SLB Adalah</a></h4>
                    <p>Pengertian dan jenis-jenis Sekolah Luar Biasa.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/anak-abk-harus-sekolah-dimana">Anak ABK Harus Sekolah di Mana</a></h4>
                    <p>Pilihan sekolah dan hak anak menurut aturan.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#SekolahInklusi</a>
            <a href="#">#SLB</a>
            <a href="#">#PendidikanKhusus</a>
            <a href="#">#ABK</a>
            <a href="#">#Inklusi</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.uu8, '<strong>Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas</strong>, JDIH BPK RI (Pasal 10, Pasal 40, Pasal 42, dan Penjelasannya)')}</li>
              <li>${ext(L.uu20, '<strong>Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional</strong>, JDIH BPK RI (Pasal 32)')}</li>
              <li>${ext(L.p48, '<strong>Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</strong>, JDIH BPK RI (Pasal 1, 5, 10, 11, 12)')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat hukum atau pengganti konsultasi dengan tenaga profesional</strong>. Sumber dicek pada 27 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Apa%20Perbedaan%20Sekolah%20Inklusi%20dan%20SLB%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Apa%20Perbedaan%20Sekolah%20Inklusi%20dan%20SLB&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

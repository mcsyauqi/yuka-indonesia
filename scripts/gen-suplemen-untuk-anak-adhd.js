#!/usr/bin/env node
'use strict';

// One-time generator for artikel/suplemen-untuk-anak-adhd.html (catchup 2026-09-24, kartu TvQumg0d)
// Follows the canonical shell rule in CLAUDE.md: footer/GA4/analytics come
// from scripts/lib/article-shell.js via ensureArticleShell(), never retyped.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'suplemen-untuk-anak-adhd';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const TITLE_TAG = 'Suplemen untuk Anak ADHD: Apa Kata Bukti Ilmiah?';
const META_DESC = 'Suplemen untuk anak ADHD: omega-3, zat besi, zinc, dan melatonin menurut Cochrane, NICE, dan AAP, plus batas buktinya. Baca sebelum membeli.';
const OG_TITLE = 'Suplemen untuk Anak ADHD: Bukti Ilmiah, Batasnya, dan Kapan Perlu ke Dokter';
const OG_DESC = 'Belum ada suplemen yang terbukti mengobati ADHD. Ulasan omega-3, zat besi, zinc, magnesium, vitamin D, melatonin, dan herbal berdasarkan Cochrane, NICE, AAP, CDC, dan NIH.';
const H1 = 'Suplemen untuk Anak ADHD: Apa Kata Bukti Ilmiah dan Kapan Perlu?';
const IMAGE_HERO = 'Dokumentasi/candi-plaosan-anak-anak-wisata-candi-borobudur-110.webp';
const IMAGE_HERO_ALT = 'Siswa Sekolah Inklusi Taruna Imani berpose di tangga Candi Plaosan, Klaten, saat wisata edukasi bersama YUKA';
const IMAGE_URL = `${SITE}/${IMAGE_HERO}`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-24';
const DATE_MODIFIED = '2026-09-24T23:30:00+07:00';
const DATE_DISPLAY = '24 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const faq = [
  {
    q: 'Apakah ada suplemen yang bisa menyembuhkan ADHD pada anak?',
    a: 'Tidak ada. Sampai saat ini belum ada suplemen yang terbukti mengobati atau menyembuhkan ADHD. Pedoman AAP yang dirangkum CDC menempatkan terapi perilaku sebagai langkah utama, ditambah obat untuk anak 6 tahun ke atas bila diperlukan. Suplemen hanya berperan kalau pemeriksaan dokter menemukan kekurangan gizi tertentu.'
  },
  {
    q: 'Apakah minyak ikan atau omega-3 bagus untuk anak ADHD?',
    a: 'Tinjauan Cochrane tahun 2023 terhadap 37 uji klinis menemukan bukti berkepastian tinggi bahwa suplemen asam lemak tak jenuh ganda tidak berpengaruh pada total gejala ADHD yang dinilai orang tua. Pedoman NICE juga meminta tenaga kesehatan tidak menyarankan suplemen asam lemak sebagai terapi ADHD pada anak. Ikan tetap baik sebagai bagian dari menu seimbang.'
  },
  {
    q: 'Perlukah anak ADHD diberi suplemen zat besi?',
    a: 'Hanya bila pemeriksaan darah menunjukkan kekurangan. Meta-analisis menemukan kadar feritin (cadangan besi) lebih rendah pada anak ADHD, tetapi itu hubungan, bukan bukti bahwa suplemen besi memperbaiki gejala. Zat besi berlebih berbahaya bagi anak, jadi jenis dan takarannya harus ditentukan dokter.'
  },
  {
    q: 'Bolehkah memberi melatonin untuk anak ADHD yang susah tidur?',
    a: 'Diskusikan dulu dengan dokter anak. Melatonin bukan obat ADHD, dan American Academy of Sleep Medicine mengingatkan kandungan melatonin dalam produk bisa jauh berbeda dari angka di label, terutama tablet kunyah. Perbaikan kebiasaan tidur biasanya dicoba lebih dulu, dan dokter juga perlu menilai apakah sulit tidurnya berkaitan dengan obat yang sedang diminum.'
  },
  {
    q: 'Bagaimana memilih suplemen yang aman untuk anak?',
    a: 'Mulailah dari konsultasi dengan dokter yang menangani anak dan sebutkan semua produk yang ingin diberikan. Pastikan produk terdaftar di BPOM (cek di cekbpom.pom.go.id), hindari produk yang mengklaim menyembuhkan ADHD, jangan hentikan obat atau terapi yang sedang berjalan, dan simpan suplemen di luar jangkauan anak.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog.html` },
    { '@type': 'ListItem', position: 3, name: 'Suplemen untuk Anak ADHD', item: CANONICAL }
  ]
};

const blogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: OG_TITLE,
  description: OG_DESC,
  image: IMAGE_URL,
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
    <meta name="keywords" content="suplemen untuk anak adhd, omega-3 adhd, minyak ikan adhd, zat besi adhd, vitamin anak adhd, melatonin anak, YUKA">
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

    <style>
        .article-header { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); padding: 8rem 0 4rem; color: var(--white); }
        .article-header h1 { color: var(--white) !important; }
        .article-header .breadcrumb a { color: rgba(255,255,255,0.8); }
        .article-header .breadcrumb .current { color: var(--white); }
        .article-meta { display: flex; gap: 2rem; margin-top: 1.5rem; flex-wrap: wrap; }
        .article-meta span { display: flex; align-items: center; gap: 0.5rem; color: rgba(255,255,255,0.9); font-size: 0.9rem; }
        .article-content { max-width: 800px; margin: 0 auto; padding: 3rem 1.5rem; }
        .article-featured-image { margin: -2rem auto 2rem; max-width: 900px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); }
        .article-featured-image img { width: 100%; height: auto; }
        .article-body { font-size: 1.1rem; line-height: 1.9; color: var(--gray-700); }
        .article-body h2 { color: var(--primary); margin: 2.5rem 0 1rem; font-size: 1.75rem; }
        .article-body h3 { color: var(--gray-800); margin: 2rem 0 1rem; font-size: 1.35rem; }
        .article-body p { margin-bottom: 1.5rem; }
        .article-body ul, .article-body ol { margin: 1.5rem 0; padding-left: 2rem; }
        .article-body a { color: #1565C0; text-decoration: underline; text-underline-offset: 2px; }
        .article-body a:hover { color: #0D47A1; }
        .article-body blockquote { background: var(--primary-50); border-left: 4px solid var(--primary); padding: 1.5rem 2rem; margin: 2rem 0; border-radius: 0 12px 12px 0; font-style: italic; }
        .story-highlight { background: linear-gradient(135deg, #e3f2fd 0%, #fff 100%); border: 2px solid #2196F3; border-radius: 16px; padding: 2rem; margin: 2rem 0; }
        .story-highlight h3 { color: #1565C0; margin-top: 0; }
        .article-tags { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-200); }
        .article-tags a { background: var(--gray-100); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; color: var(--gray-600); }
        .article-tags a:hover { background: var(--primary); color: var(--white); }
        .article-share { display: flex; align-items: center; gap: 1rem; margin-top: 2rem; }
        .share-buttons { display: flex; gap: 0.5rem; }
        .share-btn { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--white); }
        .share-btn.whatsapp { background: #25D366; }
        .share-btn.facebook { background: #1877F2; }
        .share-btn.twitter { background: #1DA1F2; }
        .article-inline-image { margin: 2rem 0; border-radius: 12px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
        .article-inline-image img { width: 100%; height: auto; }
        .article-inline-image figcaption { padding: 0.75rem 1rem; font-size: 0.9rem; color: var(--gray-600); text-align: center; background: var(--gray-50); }
        .toc { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 12px; padding: 1.5rem 2rem; margin: 2rem 0; }
        .toc h3 { margin-top: 0; color: var(--primary); font-size: 1.1rem; }
        .toc ol { margin: 0; padding-left: 1.5rem; }
        .toc li { margin-bottom: 0.5rem; }
        .toc a { color: var(--gray-700); text-decoration: none; }
        .toc a:hover { color: var(--primary); }
        .info-box { background: #fff3e0; border-left: 4px solid #ff9800; padding: 1.5rem; margin: 2rem 0; border-radius: 0 12px 12px 0; }
        .info-box h4 { color: #e65100; margin-top: 0; }
        .related-articles { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0; }
        .related-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: 12px; padding: 1.5rem; transition: box-shadow 0.3s; }
        .related-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,0.1); }
        .related-card h4 { font-size: 1rem; margin: 0 0 0.5rem; }
        .related-card a { color: var(--primary); text-decoration: none; font-weight: 600; }
        .related-card p { font-size: 0.9rem; color: var(--gray-600); margin: 0; }
        .classification-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; }
        .classification-table th, .classification-table td { border: 1px solid var(--gray-200); padding: 0.75rem 1rem; text-align: left; }
        .classification-table th { background: var(--primary); color: var(--white); font-weight: 600; }
        .classification-table tr:nth-child(even) { background: var(--gray-50); }
    </style>
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
                <span class="current">Suplemen untuk Anak ADHD</span>
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
        <div class="article-featured-image">
            <img src="../${IMAGE_HERO}" alt="${IMAGE_HERO_ALT}" width="800" height="600">
        </div>
    </div>

    <article class="article-content">
        <div class="article-body">
            <p><strong>Jawaban singkatnya: sampai hari ini belum ada suplemen yang terbukti mengobati ADHD pada anak.</strong> Pedoman dokter anak Amerika (AAP) yang dirangkum <a href="https://www.cdc.gov/adhd/treatment/index.html" target="_blank" rel="noopener">CDC</a> menempatkan terapi perilaku sebagai langkah utama, ditambah obat untuk anak usia 6 tahun ke atas bila dokter menilainya perlu. Pedoman Inggris <a href="https://www.nice.org.uk/guidance/ng87/chapter/Recommendations" target="_blank" rel="noopener">NICE NG87</a> bahkan secara tegas meminta tenaga kesehatan tidak menyarankan suplemen asam lemak (seperti minyak ikan) untuk mengobati ADHD pada anak. Suplemen baru relevan kalau pemeriksaan dokter menemukan kekurangan gizi tertentu, dan itu pun untuk memperbaiki kekurangannya, bukan untuk "menyembuhkan" ADHD.</p>

            <p>Artikel ini membahas suplemen yang paling sering ditanyakan orang tua (omega-3, zat besi, zinc, magnesium, vitamin D, melatonin, dan herbal), apa kata penelitian terbaik tentang masing-masing, di mana batas buktinya, dan pertanyaan apa yang sebaiknya Ayah dan Bunda bawa ke dokter anak.</p>

            <div class="info-box">
                <h4>Penting sebelum membaca</h4>
                <p style="margin-bottom:0;">Tulisan ini informasi umum, bukan resep dan bukan rekomendasi merek atau dosis. Jangan memberi, mengganti, atau menghentikan suplemen maupun obat ADHD tanpa berbicara dengan dokter anak (Sp.A) atau psikiater anak yang menangani si kecil.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#kenapa-mencari-suplemen">Kenapa banyak orang tua mencari suplemen</a></li>
                    <li><a href="#pedoman-resmi">Apa yang direkomendasikan pedoman resmi</a></li>
                    <li><a href="#omega-3">Omega-3 dan minyak ikan</a></li>
                    <li><a href="#zat-besi">Zat besi dan kadar feritin</a></li>
                    <li><a href="#mineral-vitamin-lain">Zinc, magnesium, vitamin D, dan multivitamin</a></li>
                    <li><a href="#melatonin-herbal">Melatonin dan suplemen herbal</a></li>
                    <li><a href="#tabel-ringkas">Tabel ringkas bukti per suplemen</a></li>
                    <li><a href="#langkah-aman">Langkah aman kalau tetap ingin mencoba</a></li>
                    <li><a href="#pertanyaan-dokter">Pertanyaan untuk dibawa ke dokter anak</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="kenapa-mencari-suplemen">Kenapa Banyak Orang Tua Mencari Suplemen untuk Anak ADHD</h2>
            <p>Keinginan mencari suplemen biasanya lahir dari niat baik. Sebagian orang tua ragu memberi obat resep kepada anak yang masih kecil, sebagian lain sudah menjalani terapi tetapi merasa kemajuannya lambat, dan tidak sedikit yang terpapar iklan produk "penambah fokus" di media sosial. Kata "alami" juga sering terdengar lebih aman daripada kata "obat".</p>
            <p>Yang perlu dipahami, ADHD adalah kondisi perkembangan saraf, bukan akibat kurang vitamin. Kalau Ayah dan Bunda belum membaca dasar-dasarnya, penjelasan lengkap tentang gejala, penyebab, dan proses diagnosisnya ada di artikel <a href="adhd-adalah">ADHD adalah: pengertian, gejala, dan penanganannya</a>. Memahami kondisinya lebih dulu membantu orang tua menilai klaim produk dengan kepala dingin.</p>
            <p>Label "alami" juga tidak sama dengan "aman untuk anak". Suplemen tetap bisa menimbulkan efek samping dan berinteraksi dengan obat, seperti diingatkan oleh <a href="https://www.nccih.nih.gov/health/attention-deficit-hyperactivity-disorder-at-a-glance" target="_blank" rel="noopener">NCCIH, lembaga riset pengobatan komplementer di bawah NIH Amerika Serikat</a>.</p>

            <h2 id="pedoman-resmi">Apa yang Direkomendasikan Pedoman Resmi</h2>
            <p>Sebelum membahas suplemen satu per satu, ada baiknya melihat dulu peta penanganan yang disusun para ahli. Menurut ringkasan <a href="https://www.cdc.gov/adhd/treatment/index.html" target="_blank" rel="noopener">CDC tentang penanganan ADHD</a> yang mengacu pada pedoman <a href="https://pubmed.ncbi.nlm.nih.gov/31570648/" target="_blank" rel="noopener">American Academy of Pediatrics tahun 2019</a>:</p>
            <ul>
                <li><strong>Anak di bawah 6 tahun:</strong> pelatihan orang tua dalam manajemen perilaku menjadi pilihan pertama, sebelum obat dicoba.</li>
                <li><strong>Anak 6 tahun ke atas:</strong> kombinasi obat dan terapi perilaku, ditambah dukungan dari sekolah seperti intervensi perilaku di kelas.</li>
                <li><strong>Pemantauan berkala:</strong> rencana penanganan yang baik selalu dievaluasi, apakah membantu dan seberapa besar, lalu disesuaikan.</li>
            </ul>
            <p>Soal makanan, pedoman <a href="https://www.nice.org.uk/guidance/ng87/chapter/Recommendations" target="_blank" rel="noopener">NICE NG87 bagian 1.6</a> menekankan nilai pola makan seimbang, gizi yang baik, dan olahraga teratur. Di bagian yang sama NICE menyatakan suplemen asam lemak tidak disarankan sebagai terapi ADHD pada anak. Jadi posisi suplemen dalam pedoman resmi bukan sebagai pengganti terapi, melainkan paling jauh sebagai koreksi kekurangan gizi yang sudah dibuktikan lewat pemeriksaan.</p>
            <p>Dukungan di sekolah juga bagian dari penanganan. Guru bisa memakai strategi kelas yang terbukti membantu, yang kami rangkum dalam <a href="strategi-mengajar-anak-adhd-di-sekolah">strategi mengajar anak ADHD di sekolah</a>.</p>

            <h2 id="omega-3">Omega-3 dan Minyak Ikan: Suplemen yang Paling Banyak Diteliti</h2>
            <p>Omega-3 (EPA dan DHA, umumnya dari minyak ikan) adalah suplemen yang paling sering dikaitkan dengan ADHD. Latar belakangnya dijelaskan dalam tinjauan Cochrane di bawah: penelitian menemukan kadar asam lemak omega-3 dalam darah anak dengan ADHD lebih rendah dibanding anak tanpa ADHD. Namun kadar yang lebih rendah belum tentu berarti menambahkannya akan meredakan gejala.</p>
            <p>Bukti paling kuat datang dari <a href="https://pubmed.ncbi.nlm.nih.gov/37058600/" target="_blank" rel="noopener">tinjauan sistematis Cochrane tahun 2023</a> yang menggabungkan 37 uji klinis dengan lebih dari 2.374 peserta berusia 18 tahun ke bawah. Hasilnya:</p>
            <ul>
                <li>Ada bukti dengan <strong>kepastian tinggi</strong> bahwa suplemen asam lemak tak jenuh ganda (PUFA) <strong>tidak berpengaruh</strong> terhadap total gejala ADHD yang dinilai orang tua dalam jangka menengah (16 studi, 1.166 peserta).</li>
                <li>Skor kurang perhatian dan skor hiperaktif-impulsif juga tidak berbeda dibanding plasebo, juga dengan kepastian tinggi.</li>
                <li>Ada sinyal bahwa anak yang mendapat PUFA sedikit lebih mungkin dinilai membaik, tetapi kepastiannya <strong>rendah</strong> karena hanya berasal dari 3 studi dengan 191 peserta.</li>
                <li>Efek samping secara keseluruhan kemungkinan tidak berbeda dengan plasebo (kepastian sedang).</li>
            </ul>
            <p>Para penulis tinjauan itu juga mencatat kelemahan penelitian yang ada: sampel kecil, kriteria peserta yang beragam, jenis dan takaran suplemen yang berbeda-beda, serta masa pengamatan yang pendek (antara dua minggu sampai enam bulan). Artinya, kesimpulan "tidak berpengaruh" berlaku untuk gejala ADHD secara umum. Pertanyaan apakah kelompok anak tertentu bisa mendapat manfaat masih terbuka dan belum terjawab.</p>
            <p>Sejalan dengan itu, <a href="https://www.nccih.nih.gov/health/attention-deficit-hyperactivity-disorder-at-a-glance" target="_blank" rel="noopener">NCCIH</a> menyebut bahwa meski sudah banyak diteliti, masih belum jelas apakah omega-3 membantu ADHD. Ikan sebagai lauk tetap bagian dari gizi seimbang, tetapi kapsul minyak ikan tidak seharusnya diposisikan sebagai terapi ADHD.</p>

            <h2 id="zat-besi">Zat Besi dan Kadar Feritin: Periksa Dulu, Jangan Menebak</h2>
            <p>Zat besi berperan dalam kerja otak, termasuk sistem dopamin yang berkaitan dengan perhatian. Dua meta-analisis menemukan hubungan antara ADHD dan cadangan besi yang rendah:</p>
            <ul>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/28046016/" target="_blank" rel="noopener">Wang dan rekan (PLoS One, 2017)</a> menganalisis 10 studi dengan 2.191 peserta dan menemukan kadar feritin serum (penanda cadangan besi) lebih rendah pada anak dengan ADHD, sementara kadar besi serum tidak berbeda.</li>
                <li><a href="https://pubmed.ncbi.nlm.nih.gov/29335588/" target="_blank" rel="noopener">Tseng dan rekan (Scientific Reports, 2018)</a> menggabungkan 17 artikel dan menemukan feritin lebih rendah pada anak ADHD serta kaitan antara ADHD dan kekurangan zat besi (rasio odds 1,636).</li>
            </ul>
            <p>Batas buktinya penting dipahami: kedua penelitian ini menunjukkan <strong>hubungan</strong>, bukan sebab-akibat. Tseng dan rekan sendiri menyatakan perlu penelitian jangka panjang untuk memastikannya. Temuan ini juga tidak membuktikan bahwa memberi suplemen besi pada anak ADHD yang kadar besinya normal akan memperbaiki gejala.</p>
            <p>Karena itu langkah yang masuk akal adalah meminta dokter anak memeriksa darah (misalnya hemoglobin dan feritin) bila ada tanda kekurangan besi, seperti pucat, mudah lelah, atau pola makan yang sangat pilih-pilih. Kalau hasilnya memang kurang, dokterlah yang menentukan jenis, takaran, dan lama pemberian suplemen besi.</p>
            <p>Jangan memberi zat besi atas inisiatif sendiri. Menurut <a href="https://medlineplus.gov/ency/article/002659.htm" target="_blank" rel="noopener">MedlinePlus (National Library of Medicine AS)</a>, overdosis zat besi sangat berbahaya bagi anak, terutama bila anak menelan multivitamin dewasa. Sumber yang sama mencatat anak kadang menelan banyak tablet besi karena bentuknya mirip permen. Simpan semua suplemen jauh dari jangkauan si kecil.</p>

            <figure class="article-inline-image">
                <img src="../Dokumentasi/16-feb-2026-siswa-abk-menyiapkan-makanan-dibawa-pulang-02.webp" alt="Siswa YUKA duduk melingkar di lantai bersama pendamping, masing-masing memegang mangkuk logam saat kegiatan menyiapkan makanan bersama" width="1280" height="960" loading="lazy">
                <figcaption>Kegiatan menyiapkan makanan bersama di YUKA. Gizi anak paling banyak dibangun dari makanan sehari-hari yang beragam, bukan dari kapsul. Foto: dokumentasi YUKA, 16 Februari 2026.</figcaption>
            </figure>

            <h2 id="mineral-vitamin-lain">Zinc, Magnesium, Vitamin D, dan Multivitamin</h2>
            <p>Zinc, magnesium, dan vitamin D juga sering dipromosikan untuk anak ADHD, biasanya dengan klaim "meningkatkan konsentrasi". Sejauh ini bukti untuk ketiganya belum cukup kuat untuk masuk ke pedoman penanganan.</p>
            <p>Hal yang bisa dicek dengan mudah: pedoman <a href="https://pubmed.ncbi.nlm.nih.gov/31570648/" target="_blank" rel="noopener">AAP 2019</a>, <a href="https://www.nice.org.uk/guidance/ng87/chapter/Recommendations" target="_blank" rel="noopener">NICE NG87</a>, dan <a href="https://www.cdc.gov/adhd/treatment/index.html" target="_blank" rel="noopener">ringkasan penanganan CDC</a> tidak mencantumkan zinc, magnesium, vitamin D, atau multivitamin sebagai terapi ADHD. Kalau anak ternyata kekurangan salah satunya berdasarkan pemeriksaan, koreksinya adalah urusan kesehatan umum yang ditangani dokter, dan tetap berjalan berdampingan dengan terapi ADHD, bukan menggantikannya.</p>
            <p>Multivitamin anak biasa umumnya tidak diperlukan kalau makan anak sudah cukup beragam. Kalau anak sangat pemilih makanan, minta dokter anak atau ahli gizi menilai asupannya secara menyeluruh.</p>

            <h2 id="melatonin-herbal">Melatonin dan Suplemen Herbal</h2>
            <h3>Melatonin untuk masalah tidur</h3>
            <p>Masalah tidur kerap menjadi keluhan orang tua anak ADHD, dan pedoman NICE (rekomendasi 1.8.17) meminta dokter memantau perubahan pola tidur anak yang minum obat ADHD, misalnya dengan buku harian tidur, lalu menyesuaikan obatnya. Dari situ melatonin sering ditanyakan. Melatonin bukan obat ADHD; paling jauh ia membantu masalah jadwal tidur. <a href="https://aasm.org/advocacy/position-statements/melatonin-use-in-children-and-adolescents-health-advisory/" target="_blank" rel="noopener">American Academy of Sleep Medicine (2022)</a> mengingatkan orang tua untuk berbicara dengan tenaga kesehatan sebelum memberi melatonin atau suplemen apa pun kepada anak. Mereka juga mengutip studi yang menemukan kandungan melatonin dalam produk bisa kurang dari separuh sampai lebih dari empat kali lipat angka di label, dengan variasi terbesar pada tablet kunyah, bentuk yang paling sering dikonsumsi anak.</p>
            <p>Sebelum mencoba melatonin, kebiasaan tidur yang konsisten (jam tidur tetap, layar dimatikan sebelum tidur, kamar gelap dan tenang) biasanya menjadi langkah pertama yang disarankan dokter.</p>
            <h3>Herbal: St. John's wort, ginkgo, dan ekstrak kulit pinus</h3>
            <p>Menurut <a href="https://www.nccih.nih.gov/health/attention-deficit-hyperactivity-disorder-at-a-glance" target="_blank" rel="noopener">NCCIH</a>, penelitian tentang karnitin serta herbal seperti St. John's wort, ekstrak kulit pinus maritim Prancis (Pycnogenol), dan Ginkgo biloba masih terbatas dan belum menunjukkan perbaikan gejala ADHD. NCCIH juga mengingatkan bahwa St. John's wort dapat melemahkan efek banyak obat, termasuk obat-obatan penting. Ini alasan kuat untuk selalu memberi tahu dokter tentang semua produk herbal yang dikonsumsi anak.</p>

            <h2 id="tabel-ringkas">Tabel Ringkas Bukti per Suplemen</h2>
            <div style="overflow-x:auto;">
            <table class="classification-table">
                <thead>
                    <tr><th>Suplemen</th><th>Apa kata bukti terbaik</th><th>Sikap yang aman</th></tr>
                </thead>
                <tbody>
                    <tr><td>Omega-3 / minyak ikan</td><td>Cochrane 2023: tidak berpengaruh pada total gejala menurut orang tua (kepastian tinggi). NICE: tidak disarankan sebagai terapi.</td><td>Bukan terapi ADHD. Ikan sebagai lauk tetap baik.</td></tr>
                    <tr><td>Zat besi</td><td>Feritin rendah lebih sering ditemukan pada anak ADHD (hubungan, bukan sebab-akibat).</td><td>Periksa darah dulu. Suplemen hanya bila dokter menemukan kekurangan.</td></tr>
                    <tr><td>Zinc, magnesium, vitamin D</td><td>Bukti belum cukup kuat. Tidak tercantum sebagai terapi di pedoman AAP, NICE, maupun CDC.</td><td>Koreksi kekurangan yang terbukti, atas arahan dokter.</td></tr>
                    <tr><td>Melatonin</td><td>Bukan obat ADHD. Kandungan produk bisa jauh berbeda dari label (AASM).</td><td>Perbaiki kebiasaan tidur dulu, lalu diskusikan dengan dokter.</td></tr>
                    <tr><td>Herbal (St. John's wort, ginkgo, Pycnogenol)</td><td>Penelitian terbatas, belum terbukti memperbaiki gejala (NCCIH).</td><td>Hindari tanpa izin dokter, waspadai interaksi obat.</td></tr>
                </tbody>
            </table>
            </div>
            <p style="font-size:0.9rem;color:#666;">Tabel disusun tim YUKA dari sumber yang ditautkan di artikel ini, per September 2026.</p>

            <h2 id="langkah-aman">Langkah Aman Kalau Tetap Ingin Mencoba Suplemen</h2>
            <p>Sebagian orang tua tetap ingin mencoba, dan itu keputusan yang sebaiknya diambil bersama dokter, bukan diam-diam. Beberapa prinsip yang membantu:</p>
            <ol>
                <li><strong>Bicarakan dulu dengan dokter yang menangani anak.</strong> Sebutkan nama produk dan komposisinya, terutama bila anak sedang minum obat ADHD.</li>
                <li><strong>Jangan menghentikan atau mengurangi obat dan terapi</strong> karena mulai memberi suplemen.</li>
                <li><strong>Pastikan produk terdaftar di BPOM.</strong> Nomor izin edar bisa dicek di <a href="https://cekbpom.pom.go.id/" target="_blank" rel="noopener">cekbpom.pom.go.id</a>. Hindari produk yang menjanjikan "menyembuhkan ADHD" atau "fokus instan".</li>
                <li><strong>Ubah satu hal dalam satu waktu</strong>, lalu catat perubahan perilaku, tidur, dan nafsu makan bersama guru atau terapis, supaya efeknya bisa dinilai jujur.</li>
                <li><strong>Simpan di tempat tinggi dan terkunci.</strong> Suplemen rasa buah dan bentuk permen mudah dikira camilan oleh anak.</li>
            </ol>
            <p>Untuk urusan pola makan sehari-hari, pedoman NICE menyarankan orang tua membuat catatan harian makanan dan perilaku bila tampak ada makanan tertentu yang memicu anak, lalu merujuk ke ahli gizi kalau catatan itu memang menunjukkan hubungan. Panduan praktis soal makanan yang perlu dibatasi ada di artikel <a href="makanan-yang-harus-dihindari-anak-adhd">makanan yang harus dihindari anak ADHD</a>.</p>

            <h2 id="pertanyaan-dokter">Pertanyaan untuk Dibawa ke Dokter Anak</h2>
            <p>Supaya konsultasi lebih efektif, Ayah dan Bunda bisa membawa daftar berikut:</p>
            <ul>
                <li>Apakah perlu pemeriksaan darah untuk melihat kadar hemoglobin, feritin, atau vitamin D anak saya?</li>
                <li>Apakah suplemen yang sedang atau ingin saya berikan aman dikombinasikan dengan obat dan terapi anak saat ini?</li>
                <li>Apakah masalah tidur atau makan anak saya berkaitan dengan efek samping obat, dan apa pilihannya?</li>
                <li>Apakah gejala anak saya mungkin berkaitan dengan kondisi lain yang mirip ADHD? (Baca juga <a href="diagnosis-banding-adhd">diagnosis banding ADHD</a> dan <a href="perbedaan-adhd-dan-autis-pada-anak">perbedaan ADHD dan autis pada anak</a>.)</li>
                <li>Bagaimana cara menilai apakah penanganan saat ini sudah berhasil, dan kapan dievaluasi ulang?</li>
            </ul>
            <p>Kalau anak cenderung melamun dan sulit fokus tanpa banyak hiperaktif, gejalanya sering terlewat. Kenali polanya di artikel <a href="ciri-adhd-tipe-inattentive-pada-anak">ciri ADHD tipe inattentive pada anak</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">Di Sekolah Inklusi Taruna Imani, YUKA mendampingi anak dengan beragam kebutuhan, termasuk anak dengan gangguan perhatian, lewat rutinitas kelas yang terstruktur dan komunikasi rutin dengan orang tua. YUKA bukan fasilitas medis dan tidak meresepkan obat maupun suplemen; untuk diagnosis dan terapi medis, kami mengarahkan keluarga ke dokter anak atau psikiater anak. Ingin berdiskusi soal pendampingan belajar? <a href="../kontak">Hubungi tim YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="adhd-adalah">ADHD Adalah: Pengertian, Gejala, dan Penanganan</a></h4>
                    <p>Dasar-dasar ADHD pada anak, dari gejala sampai pilihan penanganannya.</p>
                </div>
                <div class="related-card">
                    <h4><a href="makanan-yang-harus-dihindari-anak-adhd">Makanan yang Harus Dihindari Anak ADHD</a></h4>
                    <p>Panduan praktis pola makan harian untuk anak dengan ADHD.</p>
                </div>
                <div class="related-card">
                    <h4><a href="strategi-mengajar-anak-adhd-di-sekolah">Strategi Mengajar Anak ADHD di Sekolah</a></h4>
                    <p>Cara guru membantu anak ADHD belajar di kelas.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#ADHD</a>
            <a href="#">#SuplemenAnak</a>
            <a href="#">#GiziAnak</a>
            <a href="#">#KesehatanAnak</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li><a href="https://pubmed.ncbi.nlm.nih.gov/37058600/" target="_blank" rel="noopener"><strong>Gillies D, Leach MJ, Perez Algorta G. Polyunsaturated fatty acids (PUFA) for ADHD in children and adolescents. Cochrane Database Syst Rev, 2023</strong></a></li>
              <li><a href="https://www.nice.org.uk/guidance/ng87/chapter/Recommendations" target="_blank" rel="noopener"><strong>NICE NG87: ADHD diagnosis and management, rekomendasi 1.6 Dietary advice</strong></a></li>
              <li><a href="https://www.cdc.gov/adhd/treatment/index.html" target="_blank" rel="noopener"><strong>CDC: Treatment of ADHD</strong></a></li>
              <li><a href="https://pubmed.ncbi.nlm.nih.gov/31570648/" target="_blank" rel="noopener"><strong>Wolraich ML dkk. Clinical Practice Guideline for ADHD in Children and Adolescents. Pediatrics (AAP), 2019</strong></a></li>
              <li><a href="https://www.nccih.nih.gov/health/attention-deficit-hyperactivity-disorder-at-a-glance" target="_blank" rel="noopener"><strong>NCCIH (NIH): Attention-Deficit Hyperactivity Disorder at a Glance</strong></a></li>
              <li><a href="https://pubmed.ncbi.nlm.nih.gov/28046016/" target="_blank" rel="noopener"><strong>Wang Y dkk. Iron Status in ADHD: A Systematic Review and Meta-Analysis. PLoS One, 2017</strong></a></li>
              <li><a href="https://pubmed.ncbi.nlm.nih.gov/29335588/" target="_blank" rel="noopener"><strong>Tseng PT dkk. Peripheral iron levels in children with ADHD: a systematic review and meta-analysis. Sci Rep, 2018</strong></a></li>
              <li><a href="https://aasm.org/advocacy/position-statements/melatonin-use-in-children-and-adolescents-health-advisory/" target="_blank" rel="noopener"><strong>AASM: Health Advisory, Melatonin Use in Children and Adolescents (2022)</strong></a></li>
              <li><a href="https://medlineplus.gov/ency/article/002659.htm" target="_blank" rel="noopener"><strong>MedlinePlus: Iron overdose</strong></a></li>
              <li><a href="https://cekbpom.pom.go.id/" target="_blank" rel="noopener"><strong>BPOM RI: Cek Produk BPOM</strong></a></li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer medis:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti konsultasi dengan dokter anak atau psikiater anak</strong>. YUKA tidak merekomendasikan merek, dosis, atau suplemen tertentu, dan tidak menyarankan suplemen sebagai pengganti terapi perilaku maupun obat yang diresepkan dokter.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Suplemen%20untuk%20Anak%20ADHD%20Kategori%20dan%20Cara%20Mengetahuinya%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=Suplemen%20untuk%20Anak%20ADHD&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            </div>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga kesehatan. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
</article>

    <section class="section bg-primary" style="padding: 4rem 0;">
        <div class="container text-center">
            <h2 style="color: var(--white); margin-bottom: 1rem;">Bantu Pendidikan Anak Berkebutuhan Khusus</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 2rem;">Setiap donasi Anda membantu anak-anak dengan beragam kemampuan mendapatkan pendidikan dan pendampingan yang sesuai kebutuhan mereka.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="../donasi" class="btn btn-secondary">Donasi Sekarang</a>
                <a href="https://wa.me/6281229912332?text=Halo%20YUKA%2C%20saya%20ingin%20bertanya%20tentang%20pendampingan%20anak" target="_blank" class="btn btn-outline-light">Hubungi via WhatsApp</a>
            </div>
        </div>
    </section>
    <script src="../assets/js/main.min.js" defer></script>
</body>
</html>`;

const finalHtml = ensureArticleShell(html);
const missing = missingShellParts(finalHtml);
if (missing.length) throw new Error('shell gate failed: ' + missing.join(', '));

fs.writeFileSync(OUT, finalHtml, 'utf8');
console.log('Wrote', OUT, finalHtml.length, 'bytes');

// Rough word count of visible body text (strip tags/scripts/styles)
const bodyMatch = finalHtml.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<div class="article-tags">/);
const text = (bodyMatch ? bodyMatch[1] : finalHtml)
  .replace(/<script[\s\S]*?<\/script>/g, ' ')
  .replace(/<style[\s\S]*?<\/style>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
const wordCount = text.split(' ').filter(Boolean).length;
console.log('Approx word count (article body):', wordCount);

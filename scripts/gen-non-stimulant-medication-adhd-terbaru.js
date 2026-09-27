#!/usr/bin/env node
'use strict';

// One-time generator for artikel/non-stimulant-medication-adhd-terbaru.html
// (catchup 2026-09-28, kartu EctwwugL). Canonical shell via scripts/lib/article-shell.js.
// Skeleton copied from scripts/gen-gangguan-makan-anak-abk.js.
// YMYL obat: semua fakta dicek 2026-09-28 ke sumber resmi. TIDAK ada dosis, TIDAK ada rekomendasi pemakaian.
// - Drugs@FDA (accessdata.fda.gov, overview per NDA) + openFDA drugsfda:
//   Strattera atomoxetine NDA021411 ORIG 2002-11-26 (NME); Intuniv guanfacine NDA022037 ORIG 2009-09-02;
//   Kapvay clonidine NDA022331 ORIG 2009-09-29; Qelbree viloxazine NDA211964 ORIG 2021-04-02 (NME), efficacy suppl 2022-04-29;
//   Onyda XR clonidine ER oral suspension NDA217645 ORIG 2024-05-24; Simtriyo centanafadine NDA218145 ORIG 2026-07-24 (NME).
// - Label FDA: Strattera boxed warning suicidal thoughts pediatric (openFDA label set 309de576..., eff 2026-06-30);
//   Qelbree boxed warning suicidal thoughts (DailyMed setid aedf408d...); Intuniv indication mono + adjunct, common AR
//   hypotension somnolence fatigue nausea lethargy; clonidine ER common AR somnolence fatigue irritability ...;
//   Simtriyo label 2026: "norepinephrine-dopamine-serotonin reuptake inhibitor and central nervous system stimulant",
//   boxed warning suicidal ideation + abuse/misuse, controlled substance schedule pending.
// - NICE NG87 1.7.10: offer atomoxetine or guanfacine to children 5+ if cannot tolerate methylphenidate/lisdexamfetamine
//   or no response to separate 6-week trials; 1.7.17 clonidine for children only with tertiary advice (off-label UK).
// - PMID 42779129 Ward 2026 J Atten Disord: two phase 3 RCTs centanafadine children/adolescents.
// Ketersediaan di Indonesia: tidak diklaim; pembaca diarahkan ke cekbpom.pom.go.id dan dokter.

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const SLUG = 'non-stimulant-medication-adhd-terbaru';
const OUT = path.join(ROOT, 'artikel', `${SLUG}.html`);

const SIBLING = fs.readFileSync(path.join(ROOT, 'artikel', 'classroom-management-kelas-inklusi.html'), 'utf8');
const STYLE = (SIBLING.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const SVG_WA = (SIBLING.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_FB = (SIBLING.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const SVG_X = (SIBLING.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!STYLE || !SVG_WA || !SVG_FB || !SVG_X) throw new Error('could not extract style/share svg from sibling article');

const TITLE_TAG = 'Non Stimulant Medication ADHD Terbaru: Daftar dan Faktanya';
const META_DESC = 'Non stimulant medication ADHD terbaru: atomoxetine, guanfacine, clonidine, viloxazine, tanggal persetujuan FDA, efek samping, dan cara cek izin BPOM.';
const OG_TITLE = 'Non Stimulant Medication ADHD Terbaru: Daftar Obat, Tanggal Persetujuan, dan Faktanya';
const OG_DESC = 'Daftar obat ADHD nonstimulan yang disetujui FDA beserta tanggalnya, posisinya di pedoman NICE, peringatan keamanan, dan hal yang perlu ditanyakan orang tua ke dokter.';
const H1 = 'Non Stimulant Medication ADHD Terbaru: Daftar Obat, Tanggal Persetujuan, dan Faktanya';
// Tidak ada foto obat (kartu YMYL: tanpa gambar). OG memakai foto dokumentasi YUKA yang juga dipakai beranda.
const OG_IMAGE = `${SITE}/Dokumentasi/21%20Jan%202026/IMG_8420.webp`;
const CANONICAL = `${SITE}/artikel/${SLUG}`;
const DATE_PUBLISHED = '2026-09-28T02:30:00+07:00';
const DATE_MODIFIED = '2026-09-28T02:30:00+07:00';
const DATE_DISPLAY = '28 September 2026';

console.log('Meta title length:', TITLE_TAG.length);
console.log('Meta description length:', META_DESC.length);
if (TITLE_TAG.length > 60) throw new Error('meta title too long');
if (META_DESC.length < 120 || META_DESC.length > 155) throw new Error('meta description out of 120-155 range: ' + META_DESC.length);

const daf = n => `https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=${n}`;
const L = {
  strattera: daf('021411'),
  intuniv: daf('022037'),
  kapvay: daf('022331'),
  qelbree: daf('211964'),
  onyda: daf('217645'),
  simtriyo: daf('218145'),
  simtriyoLabel: 'https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/218145s000lbl.pdf',
  stratteraLabel: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=309de576-c318-404a-bc15-660c2b1876fb',
  qelbreeLabel: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=aedf408d-0f84-418d-9416-7c39ddb0d29a',
  intunivLabel: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b972af81-3a37-40be-9fe1-3ddf59852528',
  nice: 'https://www.nice.org.uk/guidance/ng87/chapter/Recommendations',
  ward: 'https://pubmed.ncbi.nlm.nih.gov/42779129/',
  clonidineLabel: 'https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=0100c70d-7fde-46a1-8374-940550a27e43',
  bpom: 'https://cekbpom.pom.go.id/'
};
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const faq = [
  {
    q: 'Apa itu non stimulant medication untuk ADHD?',
    a: 'Non stimulant medication adalah obat ADHD yang tidak termasuk golongan stimulan seperti methylphenidate atau amfetamin. Yang sudah disetujui FDA untuk ADHD adalah atomoxetine, viloxazine, serta guanfacine dan clonidine bentuk lepas lambat. Semuanya obat resep dan hanya boleh dipakai atas keputusan dokter.'
  },
  {
    q: 'Obat ADHD nonstimulan apa yang paling baru?',
    a: 'Menurut catatan Drugs@FDA, zat aktif nonstimulan paling baru untuk ADHD adalah viloxazine (Qelbree), disetujui 2 April 2021 dan diperluas untuk dewasa pada 29 April 2022. Produk paling baru adalah Onyda XR (24 Mei 2024), yaitu clonidine lepas lambat dalam bentuk suspensi cair, jadi zat aktifnya bukan baru.'
  },
  {
    q: 'Apakah centanafadine (Simtriyo) termasuk obat nonstimulan?',
    a: 'Tidak. Centanafadine disetujui FDA dengan nama Simtriyo pada 24 Juli 2026, tetapi label resminya menyebutnya sebagai stimulan sistem saraf pusat dan memuat peringatan risiko penyalahgunaan. Jadi obat ini tidak tepat disebut nonstimulan.'
  },
  {
    q: 'Apakah obat ADHD nonstimulan tersedia di Indonesia?',
    a: 'Artikel ini tidak mengklaim ketersediaan obat tertentu di Indonesia. Izin edar hanya bisa dipastikan lewat situs Cek BPOM (cekbpom.pom.go.id), dan pilihan obat untuk anak tetap ditentukan oleh dokter spesialis anak atau psikiater anak.'
  },
  {
    q: 'Apakah obat nonstimulan lebih aman dari stimulan?',
    a: 'Tidak bisa disimpulkan begitu. Atomoxetine dan viloxazine sama-sama memiliki peringatan kotak (boxed warning) FDA tentang pikiran dan perilaku bunuh diri, sedangkan guanfacine dan clonidine dapat menyebabkan kantuk dan tekanan darah turun. Setiap obat punya profil risiko sendiri yang perlu dibahas dengan dokter.'
  }
];

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: 'Non Stimulant Medication ADHD Terbaru', item: CANONICAL }
  ]
};

const blogPosting = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: OG_TITLE,
  description: OG_DESC,
  image: OG_IMAGE,
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
  keywords: 'non stimulant medication adhd terbaru, obat adhd nonstimulan, atomoxetine, guanfacine, viloxazine, clonidine adhd',
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
    <meta name="keywords" content="non stimulant medication adhd terbaru, obat adhd nonstimulan, atomoxetine, guanfacine, viloxazine, YUKA">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${CANONICAL}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="${CANONICAL}">
    <meta property="og:title" content="${OG_TITLE}">
    <meta property="og:description" content="${OG_DESC}">
    <meta property="og:image" content="${OG_IMAGE}">
    <meta property="og:image:alt" content="Kegiatan belajar di YUKA Indonesia">
    <meta property="og:locale" content="id_ID">
    <meta property="og:site_name" content="YUKA Indonesia">
    <meta property="article:published_time" content="${DATE_PUBLISHED}">
    <meta property="article:modified_time" content="${DATE_MODIFIED}">

    <!-- X / Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${OG_TITLE}">
    <meta name="twitter:description" content="${OG_DESC}">
    <meta name="twitter:image" content="${OG_IMAGE}">

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
                <span class="current">Non Stimulant Medication ADHD Terbaru</span>
            </div>
            <span class="card-category" style="background: var(--secondary); color: var(--gray-900); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; display: inline-block; margin: 1rem 0;">Pendidikan</span>
            <h1 style="font-size: 2.5rem; max-width: 800px;">${H1}</h1>
            <div class="article-meta">
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${DATE_DISPLAY}</span>
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>11 menit baca</span>
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Tim YUKA</span>
            </div>
        </div>
    </header>

    <article class="article-content">
        <div class="article-body">
            <div class="jawaban-singkat"><p><strong>Singkatnya:</strong> obat ADHD nonstimulan yang disetujui FDA untuk ADHD ada empat zat aktif: <strong>atomoxetine</strong> (2002), <strong>guanfacine lepas lambat</strong> (2009), <strong>clonidine lepas lambat</strong> (2009), dan <strong>viloxazine</strong> (2021). Zat aktif nonstimulan paling baru adalah viloxazine, sedangkan produk paling baru adalah clonidine lepas lambat bentuk cair (Onyda XR, Mei 2024). Centanafadine yang disetujui Juli 2026 <strong>bukan nonstimulan</strong>, karena labelnya menyebut obat itu stimulan. Semua obat ini obat resep; <strong>konsultasikan ke dokter</strong> sebelum mengambil keputusan apa pun.</p></div>

            <div class="info-box">
                <h4>Catatan sebelum membaca</h4>
                <p style="margin-bottom:0;">Artikel ini adalah rangkuman informasi resmi untuk orang tua, guru, dan pendamping, <strong>bukan saran medis</strong>. Kami sengaja <strong>tidak mencantumkan dosis</strong> dan tidak menganjurkan obat tertentu. Tanggal persetujuan diambil dari database Drugs@FDA, peringatan keamanan dari label resmi FDA, dan posisi obat dari pedoman NICE Inggris. Semua dicek pada 28 September 2026.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#pengertian">Apa itu obat ADHD nonstimulan?</a></li>
                    <li><a href="#daftar">Daftar obat nonstimulan dan tanggal persetujuannya</a></li>
                    <li><a href="#terbaru">Mana yang benar-benar terbaru?</a></li>
                    <li><a href="#centanafadine">Centanafadine: baru, tetapi bukan nonstimulan</a></li>
                    <li><a href="#posisi">Kapan dokter mempertimbangkan nonstimulan?</a></li>
                    <li><a href="#keamanan">Peringatan keamanan yang perlu diketahui</a></li>
                    <li><a href="#indonesia">Bagaimana dengan di Indonesia?</a></li>
                    <li><a href="#pertanyaan">Pertanyaan untuk dibawa ke dokter</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="pengertian">Apa Itu Obat ADHD Nonstimulan?</h2>
            <p><a href="/artikel/adhd-adalah">ADHD</a> (attention deficit hyperactivity disorder) paling sering diobati dengan obat golongan stimulan, seperti methylphenidate dan lisdexamfetamine. Istilah <strong>non stimulant medication</strong> dipakai untuk obat ADHD yang bekerja dengan cara lain dan tidak digolongkan sebagai stimulan.</p>
            <p>Secara garis besar ada dua kelompok:</p>
            <ul>
                <li><strong>Penghambat ambilan ulang norepinefrin:</strong> atomoxetine dan viloxazine.</li>
                <li><strong>Agonis reseptor alfa-2 adrenergik:</strong> guanfacine lepas lambat dan clonidine lepas lambat. Label FDA Intuniv, misalnya, menyebut guanfacine sebagai agonis reseptor alfa-2A adrenergik di sistem saraf pusat (${ext(L.intunivLabel, 'label Intuniv, DailyMed')}).</li>
            </ul>
            <p>Obat hanyalah salah satu bagian penanganan. Label FDA atomoxetine sendiri menyebut obat itu dipakai sebagai bagian dari program penanganan menyeluruh yang dapat mencakup langkah psikologis, pendidikan, dan sosial (${ext(L.stratteraLabel, 'label Strattera, DailyMed')}). Gambaran lengkap penanganan non-obat ada di artikel <a href="/artikel/terapi-adhd-pada-anak">terapi ADHD pada anak</a>.</p>

            <h2 id="daftar">Daftar Obat Nonstimulan dan Tanggal Persetujuannya</h2>
            <p>Tabel berikut memuat tanggal persetujuan awal setiap aplikasi obat (NDA) menurut database resmi Drugs@FDA. Setiap nama merek tertaut ke halaman FDA-nya.</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Zat aktif (merek di AS)</th><th>Golongan</th><th>Persetujuan awal di Drugs@FDA</th></tr>
                </thead>
                <tbody>
                    <tr><td>Atomoxetine (${ext(L.strattera, 'Strattera')})</td><td>Penghambat ambilan ulang norepinefrin</td><td>26 November 2002, zat aktif baru</td></tr>
                    <tr><td>Guanfacine lepas lambat (${ext(L.intuniv, 'Intuniv')})</td><td>Agonis alfa-2A adrenergik</td><td>2 September 2009, bentuk sediaan baru</td></tr>
                    <tr><td>Clonidine lepas lambat, tablet (${ext(L.kapvay, 'Kapvay')})</td><td>Agonis alfa-2 adrenergik</td><td>29 September 2009, bentuk sediaan baru</td></tr>
                    <tr><td>Viloxazine lepas lambat (${ext(L.qelbree, 'Qelbree')})</td><td>Penghambat ambilan ulang norepinefrin</td><td>2 April 2021, zat aktif baru; perluasan tercatat 29 April 2022</td></tr>
                    <tr><td>Clonidine lepas lambat, suspensi cair (${ext(L.onyda, 'Onyda XR')})</td><td>Agonis alfa-2 adrenergik</td><td>24 Mei 2024</td></tr>
                </tbody>
            </table>
            </div>
            <p>Menurut label FDA terbaru, atomoxetine dan viloxazine sama-sama diindikasikan untuk ADHD pada <strong>dewasa dan anak usia 6 tahun ke atas</strong> (${ext(L.stratteraLabel, 'label Strattera')}; ${ext(L.qelbreeLabel, 'label Qelbree')}). Guanfacine lepas lambat dan clonidine lepas lambat diindikasikan sebagai obat tunggal maupun <strong>tambahan untuk obat stimulan</strong> (${ext(L.intunivLabel, 'label Intuniv')}).</p>

            <h2 id="terbaru">Mana yang Benar-Benar Terbaru?</h2>
            <p>Kata "terbaru" sering dipakai longgar di internet. Supaya tidak salah paham, bedakan dua hal:</p>
            <ul>
                <li><strong>Zat aktif baru.</strong> Di antara obat nonstimulan ADHD, yang paling akhir disetujui FDA sebagai zat aktif baru adalah <strong>viloxazine</strong> pada 2 April 2021 (${ext(L.qelbree, 'Drugs@FDA NDA 211964')}).</li>
                <li><strong>Produk atau bentuk sediaan baru.</strong> Yang paling akhir adalah <strong>Onyda XR</strong> pada 24 Mei 2024, yaitu clonidine lepas lambat dalam bentuk suspensi cair untuk diminum (${ext(L.onyda, 'Drugs@FDA NDA 217645')}). Zat aktifnya sama dengan obat yang sudah ada sejak 2009, hanya bentuknya yang berbeda.</li>
            </ul>
            <p>Obat yang baru disetujui belum tentu lebih baik untuk anak Anda. Pilihan obat bergantung pada gejala, usia, kondisi penyerta, riwayat kesehatan keluarga, dan respons anak terhadap pengobatan sebelumnya. Itu sebabnya keputusan ada di tangan dokter.</p>

            <h2 id="centanafadine">Centanafadine: Baru, tetapi Bukan Nonstimulan</h2>
            <p>Pada <strong>24 Juli 2026</strong>, FDA menyetujui centanafadine dengan nama Simtriyo sebagai zat aktif baru untuk ADHD (${ext(L.simtriyo, 'Drugs@FDA NDA 218145')}). Obat ini sering dibahas sebagai pilihan baru, tetapi perlu dicatat:</p>
            <ul>
                <li>Label resminya menyebut centanafadine sebagai penghambat ambilan ulang norepinefrin, dopamin, dan serotonin sekaligus <strong>stimulan sistem saraf pusat</strong> (${ext(L.simtriyoLabel, 'label Simtriyo, FDA')}).</li>
                <li>Labelnya memuat peringatan kotak tentang <strong>pikiran dan perilaku bunuh diri pada anak</strong> serta <strong>risiko penyalahgunaan dan kecanduan</strong>, dan penggolongan zat terkendalinya saat itu masih menunggu keputusan.</li>
                <li>Dua uji klinis fase 3 pada anak dan remaja di Amerika Serikat dan Kanada menjadi dasar datanya (${ext(L.ward, 'Ward dkk., 2026')}).</li>
            </ul>
            <p>Jadi, kalau Anda membaca "obat ADHD nonstimulan terbaru 2026" yang menyebut centanafadine, informasinya kurang tepat. Menurut label FDA, obat ini bukan nonstimulan.</p>

            <h2 id="posisi">Kapan Dokter Mempertimbangkan Nonstimulan?</h2>
            <p>Pedoman NICE NG87 dari Inggris memberi gambaran urutan yang umum dipakai. Untuk anak usia 5 tahun ke atas dan remaja, methylphenidate ditawarkan sebagai pengobatan lini pertama. NICE menganjurkan <strong>atomoxetine atau guanfacine</strong> bila anak tidak dapat menoleransi methylphenidate atau lisdexamfetamine, atau gejalanya tidak membaik setelah percobaan masing-masing obat itu selama 6 minggu (${ext(L.nice, 'NICE NG87, rekomendasi 1.7.10')}).</p>
            <p>NICE juga menyebut clonidine untuk anak dengan ADHD disertai gangguan tidur, ledakan amarah, atau tic hanya boleh diberikan dengan saran layanan ADHD tersier, karena pemakaiannya di Inggris di luar izin edar (${ext(L.nice, 'NICE NG87, rekomendasi 1.7.17')}). Masalah tidur pada anak ADHD kami bahas di artikel <a href="/artikel/gangguan-tidur-anak-adhd-solusi">gangguan tidur anak ADHD</a>.</p>
            <p>Pedoman tiap negara bisa berbeda. Di Indonesia, proses penegakan diagnosis dan rujukannya dijelaskan di artikel <a href="/artikel/diagnosis-adhd-di-indonesia">diagnosis ADHD di Indonesia</a>.</p>

            <h2 id="keamanan">Peringatan Keamanan yang Perlu Diketahui</h2>
            <p>Nonstimulan bukan berarti tanpa risiko. Ringkasan dari label resmi FDA:</p>
            <div class="table-wrap">
            <table class="classification-table">
                <thead>
                    <tr><th>Obat</th><th>Peringatan utama di label FDA</th></tr>
                </thead>
                <tbody>
                    <tr><td>Atomoxetine</td><td>Peringatan kotak: pikiran dan perilaku bunuh diri pada pasien anak usia 6 tahun ke atas, perlu dipantau ketat terutama di bulan-bulan awal dan saat dosis diubah. Efek samping yang sering pada anak antara lain mual, muntah, lelah, nafsu makan turun, nyeri perut, dan mengantuk (${ext(L.stratteraLabel, 'label Strattera')}).</td></tr>
                    <tr><td>Viloxazine</td><td>Peringatan kotak: pikiran dan perilaku bunuh diri dilaporkan lebih sering dibanding plasebo dalam uji klinis, perlu dipantau ketat (${ext(L.qelbreeLabel, 'label Qelbree')}).</td></tr>
                    <tr><td>Guanfacine lepas lambat</td><td>Efek samping yang sering pada anak dan remaja: tekanan darah rendah, mengantuk, lelah, mual, dan lesu (${ext(L.intunivLabel, 'label Intuniv')}).</td></tr>
                    <tr><td>Clonidine lepas lambat</td><td>Efek samping yang sering: mengantuk, lelah, mudah marah, mimpi buruk, sulit tidur, sembelit, dan mulut kering (${ext(L.clonidineLabel, 'label clonidine lepas lambat, DailyMed')}).</td></tr>
                </tbody>
            </table>
            </div>
            <p>Hal praktis untuk orang tua: <strong>jangan menghentikan atau mengubah obat sendiri</strong>, catat perubahan perilaku, suasana hati, tidur, dan nafsu makan anak, lalu sampaikan ke dokter saat kontrol. Segera hubungi dokter bila anak menunjukkan pikiran atau perilaku menyakiti diri.</p>

            <h2 id="indonesia">Bagaimana dengan di Indonesia?</h2>
            <p>Persetujuan FDA berlaku di Amerika Serikat. Di Indonesia, obat hanya boleh beredar bila punya izin edar dari Badan POM. Kami <strong>tidak mengklaim</strong> obat mana yang tersedia di Indonesia. Untuk memastikannya:</p>
            <ol>
                <li>Buka ${ext(L.bpom, 'Cek BPOM (cekbpom.pom.go.id)')} dan cari nama zat aktif atau nama dagang obat.</li>
                <li>Tanyakan kepada dokter spesialis anak, psikiater anak, atau apoteker di rumah sakit tempat anak berobat.</li>
                <li>Jangan membeli obat ADHD secara daring tanpa resep, dan jangan memakai obat milik anak lain.</li>
            </ol>

            <h2 id="pertanyaan">Pertanyaan untuk Dibawa ke Dokter</h2>
            <p>Kalau dokter menyebut kemungkinan obat nonstimulan, pertanyaan berikut bisa membantu diskusi:</p>
            <ul>
                <li>Mengapa obat ini yang dipilih untuk anak saya, dan apa alternatifnya?</li>
                <li>Berapa lama biasanya sampai efeknya bisa dinilai?</li>
                <li>Efek samping apa yang perlu saya pantau di rumah, dan kapan harus segera menghubungi dokter?</li>
                <li>Apakah obat ini berinteraksi dengan obat, suplemen, atau kondisi lain yang dimiliki anak saya? Soal suplemen, lihat juga <a href="/artikel/suplemen-untuk-anak-adhd">suplemen untuk anak ADHD</a>.</li>
                <li>Apa yang perlu diketahui guru di sekolah?</li>
            </ul>
            <p>Guru juga berperan penting. Dokter sering meminta masukan tentang perilaku anak di kelas, dan strategi yang terbukti membantu tetap diperlukan walau anak minum obat. Lihat <a href="/artikel/strategi-mengajar-anak-adhd-di-sekolah">strategi mengajar anak ADHD di sekolah</a> dan <a href="/artikel/ciri-ciri-anak-adhd-berdasarkan-usia">ciri-ciri anak ADHD berdasarkan usia</a>.</p>

            <div class="story-highlight">
                <h3>Pendampingan di YUKA</h3>
                <p style="margin-bottom:0;">YUKA tidak meresepkan obat. Kami mendampingi anak berkebutuhan khusus, termasuk anak dengan ADHD, melalui pendidikan inklusi dan layanan terapi di Sleman, berdampingan dengan dokter yang menangani anak. Hubungi tim YUKA melalui halaman <a href="/kontak">kontak</a> atau lihat <a href="/program">program YUKA</a>.</p>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            ${faqHtml}

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card">
                    <h4><a href="/artikel/terapi-adhd-pada-anak">Terapi ADHD pada Anak</a></h4>
                    <p>Pilihan penanganan ADHD sesuai usia menurut pedoman resmi.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/diagnosis-adhd-di-indonesia">Diagnosis ADHD di Indonesia</a></h4>
                    <p>Alur pemeriksaan dan siapa yang berwenang mendiagnosis.</p>
                </div>
                <div class="related-card">
                    <h4><a href="/artikel/adhd-adalah">ADHD Adalah</a></h4>
                    <p>Pengertian, gejala, dan penanganan ADHD pada anak.</p>
                </div>
            </div>
        </div>

        <div class="article-tags">
            <a href="#">#ADHD</a>
            <a href="#">#ObatADHD</a>
            <a href="#">#Nonstimulan</a>
            <a href="#">#ABK</a>
            <a href="#">#YUKA</a>
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              <li>${ext(L.strattera, 'U.S. FDA. <strong>Drugs@FDA: Strattera (atomoxetine), NDA 021411</strong>')}</li>
              <li>${ext(L.intuniv, 'U.S. FDA. <strong>Drugs@FDA: Intuniv (guanfacine), NDA 022037</strong>')}</li>
              <li>${ext(L.kapvay, 'U.S. FDA. <strong>Drugs@FDA: Kapvay (clonidine), NDA 022331</strong>')}</li>
              <li>${ext(L.qelbree, 'U.S. FDA. <strong>Drugs@FDA: Qelbree (viloxazine), NDA 211964</strong>')}</li>
              <li>${ext(L.onyda, 'U.S. FDA. <strong>Drugs@FDA: Onyda XR (clonidine), NDA 217645</strong>')}</li>
              <li>${ext(L.simtriyo, 'U.S. FDA. <strong>Drugs@FDA: Simtriyo (centanafadine), NDA 218145</strong>')} dan ${ext(L.simtriyoLabel, 'label resmi Simtriyo (PDF)')}</li>
              <li>${ext(L.stratteraLabel, 'DailyMed (NLM). <strong>Label Strattera</strong>')}, ${ext(L.qelbreeLabel, '<strong>Label Qelbree</strong>')}, ${ext(L.intunivLabel, '<strong>Label Intuniv</strong>')}</li>
              <li>${ext(L.nice, 'NICE. <strong>Attention deficit hyperactivity disorder: diagnosis and management (NG87)</strong>, Recommendations')}</li>
              <li>${ext(L.ward, 'Ward CL, dkk. <strong>Clinically Meaningful Within-Patient Change in Core ADHD Symptoms in Children and Adolescents Treated With Centanafadine.</strong> J Atten Disord. 2026')}</li>
              <li>${ext(L.bpom, 'Badan POM RI. <strong>Cek Produk BPOM</strong>')}</li>
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan nasihat medis</strong>. Selalu <strong>konsultasikan ke dokter</strong> sebelum memulai, mengganti, atau menghentikan obat ADHD. Artikel ini tidak memuat dosis dan tidak merekomendasikan obat tertentu. Sumber dicek pada 28 September 2026.
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=Non%20Stimulant%20Medication%20ADHD%20Terbaru%20-%20${CANONICAL}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${SVG_WA}</a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${SVG_FB}</a>
                <a href="https://twitter.com/intent/tweet?text=Non%20Stimulant%20Medication%20ADHD%20Terbaru&url=${CANONICAL}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;">${SVG_X}</a>
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

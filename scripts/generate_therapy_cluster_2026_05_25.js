const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const today = '2026-05-25';

const sourcesFooter = `
        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber Resmi &amp; Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
            <li><a href="https://www.who.int/health-topics/rehabilitation" target="_blank" rel="noopener nofollow">WHO: Rehabilitation</a></li>
            <li><a href="https://www.cdc.gov/act-early/early-intervention/index.html" target="_blank" rel="noopener nofollow">CDC: Early Intervention</a></li>
            <li><a href="https://medlineplus.gov/rehabilitation.html" target="_blank" rel="noopener nofollow">MedlinePlus: Rehabilitation</a></li>
            <li><a href="https://medlineplus.gov/cerebralpalsy.html" target="_blank" rel="noopener nofollow">MedlinePlus: Cerebral Palsy</a></li>
          </ul>
          <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;"><strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan bukan pengganti asesmen dokter, psikolog, fisioterapis, terapis okupasi, atau terapis wicara. Program terapi anak perlu disesuaikan dengan kondisi dan evaluasi profesional.</p>
        </div>`;

const articles = [
  {
    slug: 'perbedaan-terapi-okupasi-dan-terapi-wicara',
    title: 'Perbedaan Terapi Okupasi dan Terapi Wicara untuk Anak ABK',
    shortTitle: 'Perbedaan Terapi Okupasi dan Terapi Wicara',
    description: 'Terapi okupasi dan terapi wicara punya fokus berbeda. Pelajari kapan anak membutuhkan OT, speech therapy, atau kombinasi keduanya.',
    keywords: 'perbedaan terapi okupasi dan terapi wicara, terapi okupasi, terapi wicara, occupational therapy, speech therapy anak, terapi ABK',
    category: 'Terapi',
    readTime: '10 menit baca',
    image: 'Dokumentasi/cpao-anak-anak-belajar-bersama-outdoor-046.webp',
    imageAlt: 'Anak-anak belajar bersama sebagai ilustrasi kolaborasi terapi okupasi dan terapi wicara',
    intro: [
      'Orang tua sering bertanya: apakah anak perlu terapi okupasi, terapi wicara, atau keduanya? Pertanyaan ini wajar karena beberapa tanda terlihat mirip. Anak yang sulit bicara mungkin juga kesulitan fokus, memegang alat tulis, makan mandiri, atau mengatur respons terhadap suara dan tekstur.',
      'Secara sederhana, terapi okupasi membantu anak menjalani aktivitas harian dengan lebih mandiri, sedangkan terapi wicara membantu anak berkomunikasi, memahami bahasa, dan menggunakan kemampuan bicara atau komunikasi alternatif. Pada banyak anak berkebutuhan khusus, dua terapi ini saling melengkapi.'
    ],
    sections: [
      ['Apa Itu Terapi Okupasi?', [
        'Terapi okupasi atau occupational therapy berfokus pada kemampuan fungsional anak dalam aktivitas sehari-hari. Contohnya makan, berpakaian, menulis, bermain, mengikuti instruksi kelas, mengatur emosi, dan merespons rangsangan sensorik.',
        'Anak mungkin diarahkan ke terapi okupasi jika ia kesulitan motorik halus, koordinasi tangan-mata, kemandirian, pemrosesan sensorik, atau keterampilan bermain yang sesuai usia. Baca panduan utama YUKA tentang <a href="terapi-okupasi">terapi okupasi untuk anak berkebutuhan khusus</a>.'
      ]],
      ['Apa Itu Terapi Wicara?', [
        'Terapi wicara atau speech therapy berfokus pada komunikasi. Area yang ditangani dapat mencakup pemahaman bahasa, ekspresi verbal, artikulasi, kelancaran bicara, komunikasi sosial, hingga alternatif komunikasi ketika anak belum mampu berbicara lisan.',
        'Anak mungkin memerlukan terapi wicara jika terlambat bicara, sulit memahami instruksi, tidak jelas mengucapkan kata, belum mampu bergiliran dalam percakapan, atau membutuhkan dukungan komunikasi nonverbal. Baca juga artikel YUKA tentang <a href="terapi-wicara">terapi wicara untuk anak</a>.'
      ]],
      ['Perbedaan Fokus Terapi', [
        '<ul><li><strong>Terapi okupasi:</strong> fokus pada kemandirian aktivitas harian, motorik halus, integrasi sensorik, koordinasi, dan kesiapan belajar.</li><li><strong>Terapi wicara:</strong> fokus pada bahasa, bicara, komunikasi sosial, pemahaman instruksi, dan alternatif komunikasi.</li><li><strong>Keduanya:</strong> dapat bekerja bersama ketika anak perlu mengatur tubuh, fokus, dan komunikasi sekaligus.</li></ul>',
        'Contohnya, anak yang menolak tekstur makanan mungkin perlu terapi okupasi untuk toleransi sensorik. Namun jika anak juga kesulitan mengunyah, menelan, atau menyampaikan kebutuhan saat makan, terapis wicara dapat ikut membantu sesuai asesmen profesional.'
      ]],
      ['Kapan Anak Membutuhkan Keduanya?', [
        'Kombinasi terapi sering dipertimbangkan ketika anak menunjukkan hambatan di beberapa area perkembangan. Misalnya anak autis yang sulit fokus, sensitif terhadap suara, belum mampu bermain bergiliran, dan belum menggunakan kata secara konsisten.',
        'CDC menekankan pentingnya intervensi dini untuk anak dengan keterlambatan perkembangan. Karena itu, orang tua sebaiknya tidak menunggu semua tanda menjadi berat. Mulailah dari asesmen profesional agar kebutuhan anak dipetakan dengan jelas.'
      ]],
      ['Cara YUKA Mendampingi Anak', [
        'Di YUKA, pendampingan anak dilakukan dengan melihat kebutuhan anak secara utuh. Kegiatan belajar, bermain, memasak, gerak, dan komunikasi diarahkan agar anak lebih mandiri di rumah, sekolah, dan lingkungan sosial.',
        'Orang tua dapat menggunakan artikel ini sebagai titik awal diskusi dengan guru, dokter, psikolog, atau terapis. Untuk dukungan pendidikan inklusi di Sleman, silakan hubungi YUKA melalui halaman <a href="/kontak">kontak</a>.'
      ]]
    ],
    faq: [
      ['Apakah terapi okupasi sama dengan terapi wicara?', 'Tidak. Terapi okupasi berfokus pada kemandirian aktivitas harian, motorik, sensorik, dan fungsi belajar. Terapi wicara berfokus pada kemampuan komunikasi, bahasa, bicara, dan komunikasi sosial.'],
      ['Mana yang harus dipilih lebih dulu?', 'Pilihan terapi sebaiknya mengikuti hasil asesmen profesional. Jika hambatan utama anak adalah komunikasi, terapi wicara dapat menjadi prioritas. Jika hambatan utama adalah kemandirian, motorik, atau sensorik, terapi okupasi bisa lebih dulu.'],
      ['Apakah anak boleh mengikuti dua terapi sekaligus?', 'Boleh, jika memang direkomendasikan oleh profesional. Banyak anak berkebutuhan khusus mendapat manfaat dari pendekatan multidisiplin yang melibatkan guru, orang tua, dan beberapa jenis terapis.']
    ]
  },
  {
    slug: 'terapi-fisik-untuk-abk',
    title: 'Terapi Fisik untuk ABK: Manfaat, Contoh Latihan, dan Kapan Dibutuhkan',
    shortTitle: 'Terapi Fisik untuk ABK',
    description: 'Terapi fisik untuk ABK membantu kekuatan, keseimbangan, postur, dan gerak anak. Kenali manfaat, tanda kebutuhan, dan contoh dukungannya.',
    keywords: 'terapi fisik untuk ABK, fisioterapi anak, terapi fisik anak berkebutuhan khusus, motorik kasar, cerebral palsy, terapi ABK',
    category: 'Terapi',
    readTime: '11 menit baca',
    image: 'Dokumentasi/museum-gunung-merapi-anak-sekolah-bermain-bersama-011.webp',
    imageAlt: 'Anak-anak bergerak dan bermain bersama sebagai ilustrasi terapi fisik untuk ABK',
    intro: [
      'Terapi fisik untuk ABK adalah pendampingan yang membantu anak mengembangkan kemampuan gerak, kekuatan, postur, keseimbangan, dan koordinasi. Dalam konteks anak berkebutuhan khusus, terapi fisik sering menjadi bagian dari program rehabilitasi dan pendidikan yang lebih luas.',
      'Tujuannya bukan sekadar membuat anak mampu melakukan gerakan tertentu, tetapi membantu anak berpartisipasi lebih nyaman dalam kegiatan sehari-hari: berjalan ke kelas, duduk lebih stabil, bermain, naik turun tangga dengan aman, atau mengikuti aktivitas bersama teman.'
    ],
    sections: [
      ['Apa Itu Terapi Fisik untuk ABK?', [
        'Terapi fisik atau fisioterapi berfokus pada kemampuan motorik kasar dan fungsi gerak tubuh. Area yang sering diperhatikan meliputi kekuatan otot, rentang gerak, postur, keseimbangan, koordinasi, pola jalan, dan daya tahan.',
        'WHO menjelaskan rehabilitasi sebagai layanan yang membantu seseorang mengoptimalkan fungsi dan mengurangi dampak keterbatasan. Pada anak, pendekatan ini perlu disesuaikan dengan usia, kondisi medis, motivasi, dan lingkungan keluarga.'
      ]],
      ['Tanda Anak Mungkin Membutuhkan Fisioterapi', [
        '<ul><li>Anak terlambat duduk, merangkak, berdiri, atau berjalan dibanding tahap perkembangan yang diharapkan.</li><li>Gerakan tampak kaku, sangat lemah, atau mudah jatuh.</li><li>Anak sulit menjaga keseimbangan saat bermain atau berjalan.</li><li>Ada riwayat cerebral palsy, kelainan postur, cedera, atau kondisi neurologis tertentu.</li><li>Anak cepat lelah ketika melakukan aktivitas fisik sederhana.</li></ul>',
        'Tanda di atas bukan diagnosis. Orang tua tetap perlu berkonsultasi dengan dokter atau fisioterapis anak untuk asesmen yang tepat.'
      ]],
      ['Contoh Dukungan Terapi Fisik', [
        'Latihan dapat berupa aktivitas sederhana seperti berdiri dengan dukungan, berjalan di permukaan aman, latihan keseimbangan, permainan lempar tangkap, peregangan, latihan naik turun tangga, atau aktivitas bermain yang mendorong koordinasi tubuh.',
        'Program yang baik tidak memaksa anak bergerak secara berlebihan. Terapis akan menyesuaikan tingkat tantangan agar anak tetap aman, termotivasi, dan mampu membangun kemampuan secara bertahap.'
      ]],
      ['Hubungan dengan Terapi Okupasi dan Wicara', [
        'Terapi fisik sering berjalan bersama <a href="terapi-okupasi">terapi okupasi</a> dan <a href="terapi-wicara">terapi wicara</a>. Fisioterapi membantu fondasi gerak besar, terapi okupasi membantu fungsi aktivitas harian, dan terapi wicara membantu komunikasi.',
        'Misalnya, anak yang posturnya belum stabil mungkin lebih sulit duduk tenang untuk belajar, menulis, atau berkomunikasi. Ketika postur dan keseimbangan membaik, anak sering lebih siap mengikuti aktivitas belajar dan sosial.'
      ]],
      ['Peran Orang Tua di Rumah', [
        'Latihan di rumah harus mengikuti arahan profesional. Orang tua dapat membantu dengan membuat rutinitas gerak yang aman, memberi pujian, mencatat perkembangan, dan menghindari perbandingan dengan anak lain.',
        'Di YUKA, kegiatan belajar dan bermain dirancang agar anak punya kesempatan bergerak, berinteraksi, dan membangun kemandirian secara bertahap. Untuk pendampingan pendidikan inklusi, keluarga dapat menghubungi YUKA melalui WhatsApp atau halaman kontak.'
      ]]
    ],
    faq: [
      ['Apa bedanya fisioterapi dan terapi okupasi?', 'Fisioterapi berfokus pada kemampuan gerak besar seperti kekuatan, keseimbangan, postur, dan berjalan. Terapi okupasi berfokus pada fungsi aktivitas sehari-hari seperti makan, berpakaian, menulis, bermain, dan kemandirian.'],
      ['Apakah terapi fisik hanya untuk cerebral palsy?', 'Tidak. Terapi fisik dapat membantu berbagai kondisi yang memengaruhi gerak, kekuatan, postur, atau keseimbangan anak. Namun kebutuhan terapi harus ditentukan melalui asesmen profesional.'],
      ['Bolehkah latihan fisioterapi dilakukan di rumah?', 'Boleh jika latihan tersebut diberikan atau disetujui oleh fisioterapis atau dokter. Latihan yang tidak sesuai dapat membuat anak tidak nyaman atau berisiko cedera.']
    ]
  }
];

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function articleHtml(a) {
  const faqJson = a.faq.map(([q, ans]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: ans }
  }));
  return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LDXC5GQF61"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-LDXC5GQF61',{'send_page_view':true,'cookie_flags':'SameSite=None;Secure'});</script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${esc(a.shortTitle)} | YUKA</title>
    <meta name="description" content="${esc(a.description)}">
    <meta name="keywords" content="${esc(a.keywords)}">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://www.yukaindonesia.com/artikel/${a.slug}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="https://www.yukaindonesia.com/feed.xml">
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://www.yukaindonesia.com/artikel/${a.slug}">
    <meta property="og:title" content="${esc(a.title)}">
    <meta property="og:description" content="${esc(a.description)}">
    <meta property="og:image" content="https://www.yukaindonesia.com/${a.image}">
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16.png">
    <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"></noscript>
    <link rel="stylesheet" href="../assets/css/style.min.css">
    <script type="application/ld+json">${JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: a.title,
      description: a.description,
      image: `https://www.yukaindonesia.com/${a.image}`,
      author: {'@type':'Organization', name:'Yayasan Ukhuwah Kaffah Amanatullah'},
      publisher: {'@type':'Organization', name:'YUKA', logo:{'@type':'ImageObject', url:'https://www.yukaindonesia.com/Logo/Logo.webp'}},
      datePublished: today,
      dateModified: today,
      mainEntityOfPage: {'@type':'WebPage', '@id':`https://www.yukaindonesia.com/artikel/${a.slug}`}
    }, null, 8)}</script>
    <script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqJson}, null, 8)}</script>
    <style>
        .article-header{background:linear-gradient(135deg,var(--primary) 0%,var(--primary-dark) 100%);padding:8rem 0 4rem;color:var(--white)}.article-header h1{color:var(--white)!important}.article-header .breadcrumb a{color:rgba(255,255,255,.8)}.article-header .breadcrumb .current{color:var(--white)}.article-meta{display:flex;gap:2rem;margin-top:1.5rem;flex-wrap:wrap}.article-meta span{display:flex;align-items:center;gap:.5rem;color:rgba(255,255,255,.9);font-size:.9rem}.article-content{max-width:800px;margin:0 auto;padding:3rem 1.5rem}.article-featured-image{margin:-2rem auto 2rem;max-width:900px;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.15)}.article-featured-image img{width:100%;height:auto}.article-body{font-size:1.1rem;line-height:1.9;color:var(--gray-700)}.article-body h2{color:var(--primary);margin:2.5rem 0 1rem;font-size:1.75rem}.article-body h3{color:var(--gray-800);margin:2rem 0 1rem;font-size:1.35rem}.article-body p{margin-bottom:1.5rem}.article-body ul,.article-body ol{margin:1.5rem 0;padding-left:2rem}.article-body a{color:#1565C0;text-decoration:underline;text-underline-offset:2px}.toc{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:12px;padding:1.5rem 2rem;margin:2rem 0}.related-articles{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;margin:2rem 0}.related-card{background:var(--white);border:1px solid var(--gray-200);border-radius:12px;padding:1.5rem}.article-tags{display:flex;gap:.75rem;flex-wrap:wrap;margin-top:3rem;padding-top:2rem;border-top:1px solid var(--gray-200)}.article-tags a{background:var(--gray-100);padding:.5rem 1rem;border-radius:20px;font-size:.875rem;color:var(--gray-600)}
    </style>
</head>
<body>
    <nav class="navbar" id="navbar"><div class="container"><a href="/" class="navbar-brand"><img src="../Logo/Logo.webp" alt="YUKA - Yayasan Ukhuwah Kaffah Amanatullah" class="brand-logo" width="180" height="60"></a><div class="navbar-menu" id="navbarMenu"><a href="/">Beranda</a><a href="/tentang">Tentang</a><a href="/program">Program</a><a href="/galeri">Galeri</a><a href="/blog" class="active">Artikel</a><a href="/kontak">Kontak</a><a href="/donasi" class="btn btn-primary btn-sm">Donasi</a></div><button class="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button></div></nav>
    <header class="article-header"><div class="container"><div class="breadcrumb"><a href="/">Beranda</a><span class="separator">/</span><a href="/blog">Artikel</a><span class="separator">/</span><span class="current">${esc(a.shortTitle)}</span></div><span class="card-category" style="background:var(--secondary);color:var(--gray-900);padding:.5rem 1rem;border-radius:20px;font-size:.875rem;display:inline-block;margin:1rem 0;">${a.category}</span><h1 style="font-size:2.5rem;max-width:800px;">${esc(a.title)}</h1><div class="article-meta"><span>25 Mei 2026</span><span>${a.readTime}</span><span>Tim YUKA</span></div></div></header>
    <div class="container"><div class="article-featured-image"><img src="../${a.image}" alt="${esc(a.imageAlt)}" width="800" height="600"></div></div>
    <article class="article-content"><div class="article-body">
      ${a.intro.map(p=>`<p>${p}</p>`).join('\n      ')}
      <div class="toc"><h3>Daftar Isi</h3><ol>${a.sections.map(([h],i)=>`<li><a href="#section-${i+1}">${h}</a></li>`).join('')}<li><a href="#faq">FAQ</a></li></ol></div>
      ${a.sections.map(([h,ps],i)=>`<h2 id="section-${i+1}">${h}</h2>\n      ${ps.map(p=>p.startsWith('<')?p:`<p>${p}</p>`).join('\n      ')}`).join('\n      ')}
      <h2 id="faq">FAQ</h2>
      ${a.faq.map(([q,ans],i)=>`<h3>${i+1}. ${q}</h3><p>${ans}</p>`).join('\n      ')}
      <h3>Baca Juga Artikel Terkait:</h3><div class="related-articles"><div class="related-card"><h4><a href="terapi-okupasi">Terapi Okupasi untuk ABK</a></h4><p>Panduan utama tentang manfaat dan proses terapi okupasi.</p></div><div class="related-card"><h4><a href="terapi-wicara">Terapi Wicara untuk Anak</a></h4><p>Pelajari manfaat terapi wicara untuk komunikasi anak.</p></div><div class="related-card"><h4><a href="sensori-integrasi">Sensori Integrasi</a></h4><p>Pahami dukungan sensorik untuk anak berkebutuhan khusus.</p></div></div>
    </div>
    <div class="article-tags"><a href="#">#TerapiABK</a><a href="#">#TerapiOkupasi</a><a href="#">#TerapiWicara</a><a href="#">#FisioterapiAnak</a><a href="#">#YUKA</a></div>
    ${sourcesFooter}
    <div class="article-share"><span style="font-weight:600;">Bagikan:</span><div class="share-buttons"><a href="https://wa.me/?text=${encodeURIComponent(a.title + ' - https://www.yukaindonesia.com/artikel/' + a.slug)}" target="_blank" class="share-btn whatsapp" aria-label="Share to WhatsApp">WA</a><a href="https://www.facebook.com/sharer/sharer.php?u=https://www.yukaindonesia.com/artikel/${a.slug}" target="_blank" class="share-btn facebook" aria-label="Share to Facebook">f</a><a href="https://twitter.com/intent/tweet?text=${encodeURIComponent(a.title)}&url=https://www.yukaindonesia.com/artikel/${a.slug}" target="_blank" class="share-btn twitter" aria-label="Share to Twitter">x</a></div></div>
    </article>
    <section class="section bg-primary" style="padding:4rem 0;"><div class="container text-center"><h2 style="color:var(--white);margin-bottom:1rem;">Butuh Pendampingan Pendidikan Inklusi?</h2><p style="color:rgba(255,255,255,.9);max-width:600px;margin:0 auto 2rem;">YUKA mendampingi anak berkebutuhan khusus dengan pendekatan pendidikan, terapi, dan keluarga yang saling terhubung.</p><a href="/kontak" class="btn btn-secondary">Hubungi YUKA</a></div></section>
    <footer class="footer"><div class="container"><div class="footer-grid"><div class="footer-about"><img src="../Logo/Logo.webp" alt="YUKA Logo" style="height:60px;margin-bottom:1rem;" width="180" height="60"><p>Yayasan Ukhuwah Kaffah Amanatullah (YUKA) berfokus pada pendidikan inklusi untuk anak berkebutuhan khusus.</p></div><div class="footer-links"><h4>Tautan</h4><ul><li><a href="/">Beranda</a></li><li><a href="/tentang">Tentang Kami</a></li><li><a href="/program">Program</a></li><li><a href="/donasi">Donasi</a></li></ul></div><div class="footer-contact"><h4>Kontak</h4><ul><li>Jl. Kronggahan Raya II, RT 04 RW 07</li><li>Kronggahan II, Trihanggo, Gamping, Sleman</li><li><a href="tel:+6281229912332">+62 812-2991-2332</a></li></ul></div></div><div class="footer-bottom"><p>&copy; 2026 Yayasan Ukhuwah Kaffah Amanatullah. Hak Cipta Dilindungi.</p></div></div></footer>
    <script src="../assets/js/main.min.js" defer></script><script src="../assets/js/analytics.js" defer></script>
</body>
</html>
`;
}

function cardHtml(a) {
  return `                <!-- Article: ${a.title} -->
                <article class="card blog-card animate-on-scroll">
                    <div class="card-image">
                        <img src="${a.image}" alt="${a.title}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <span class="card-category">${a.category}</span>
                        <h3 class="card-title">
                            <a href="artikel/${a.slug}">${a.title}</a>
                        </h3>
                        <p class="card-text">${a.description}</p>
                        <div class="card-meta">
                            <span>25 Mei 2026</span>
                            <span>${a.readTime}</span>
                        </div>
                    </div>
                </article>
`;
}

function upsertAfterBlogGrid() {
  let blog = fs.readFileSync('blog.html', 'utf8');
  blog = blog.replace(/href="artikel\/([^"#?]+)\.html"/g, 'href="artikel/$1"');
  const marker = '<div class="blog-grid" id="blogGrid">';
  let insert = '';
  for (const a of articles) {
    if (!blog.includes(`href="artikel/${a.slug}"`)) insert += cardHtml(a);
  }
  if (insert) blog = blog.replace(marker, marker + '\n' + insert);
  fs.writeFileSync('blog.html', blog);
}

function addSitemap(file) {
  let xml = fs.readFileSync(file, 'utf8');
  for (const a of articles) {
    const loc = `https://www.yukaindonesia.com/artikel/${a.slug}`;
    if (!xml.includes(loc)) {
      const block = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
      xml = xml.replace('</urlset>', block + '</urlset>');
    }
  }
  fs.writeFileSync(file, xml);
}

function addFeed() {
  let feed = fs.readFileSync('feed.xml', 'utf8');
  feed = feed.replace(/<lastBuildDate>.*?<\/lastBuildDate>/, '<lastBuildDate>Mon, 25 May 2026 07:00:00 +0700</lastBuildDate>');
  let items = '';
  for (const a of articles) {
    const link = `https://www.yukaindonesia.com/artikel/${a.slug}`;
    if (!feed.includes(`<link>${link}</link>`)) {
      items += `    <item>\n      <title>${a.title}</title>\n      <link>${link}</link>\n      <guid>${link}</guid>\n      <description>${a.description}</description>\n      <pubDate>Mon, 25 May 2026 07:00:00 +0700</pubDate>\n    </item>\n`;
    }
  }
  if (items) feed = feed.replace('<atom:link href="https://www.yukaindonesia.com/feed.xml" rel="self" type="application/rss+xml"/>', '<atom:link href="https://www.yukaindonesia.com/feed.xml" rel="self" type="application/rss+xml"/>\n' + items);
  fs.writeFileSync('feed.xml', feed);
}

function injectRelatedLinks(file) {
  let s = fs.readFileSync(file, 'utf8');
  const block = '<div class="related-reading"><strong>Bacaan terkait:</strong> Lengkapi pemahaman terapi anak melalui <a href="perbedaan-terapi-okupasi-dan-terapi-wicara">perbedaan terapi okupasi dan terapi wicara</a> serta <a href="terapi-fisik-untuk-abk">terapi fisik untuk ABK</a>.</div>';
  if (!s.includes('perbedaan-terapi-okupasi-dan-terapi-wicara')) {
    s = s.replace('<div class="article-tags">', `${block}\n\n        <div class="article-tags">`);
  }
  fs.writeFileSync(file, s);
}

for (const a of articles) {
  fs.writeFileSync(path.join('artikel', `${a.slug}.html`), articleHtml(a));
}
upsertAfterBlogGrid();
addSitemap('sitemap.xml');
addSitemap('sitemap-articles.xml');
addFeed();
for (const f of ['artikel/terapi-okupasi.html', 'artikel/terapi-wicara.html', 'artikel/sensori-integrasi.html']) {
  if (fs.existsSync(f)) injectRelatedLinks(f);
}
console.log(JSON.stringify({created: articles.map(a => `artikel/${a.slug}.html`), updated: ['blog.html','sitemap.xml','sitemap-articles.xml','feed.xml','artikel/terapi-okupasi.html','artikel/terapi-wicara.html','artikel/sensori-integrasi.html']}, null, 2));

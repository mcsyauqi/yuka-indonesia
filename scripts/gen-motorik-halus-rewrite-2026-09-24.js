// Menulis ulang 4 artikel klaster motorik halus (kartu Trello PaAYbrU3, 2026-09-24).
// Kerangka halaman diambil dari artikel perbedaan-motorik-kasar-dan-halus versi 2454b4d
// (nav, style, blok CTA), footer + GA4 + analytics.js lewat scripts/lib/article-shell.
// Jalankan: node scripts/gen-motorik-halus-rewrite-2026-09-24.js
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');
const { articles } = require('./content/motorik-halus-2026-09-24');

const ROOT = path.resolve(__dirname, '..');
const BASE = 'https://www.yukaindonesia.com';
const MODIFIED = '2026-09-24';
const shell = execSync('git show 2454b4d:artikel/perbedaan-motorik-kasar-dan-halus.html', { cwd: ROOT, encoding: 'utf8', maxBuffer: 1 << 24 });
const pick = (re) => { const m = shell.match(re); if (!m) throw new Error('shell part missing: ' + re); return m[0]; };
const STYLE = pick(/<style>[\s\S]*?<\/style>/);
const NAV = pick(/<nav class="navbar"[\s\S]*?<\/nav>/);
const ICON_CAL = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';
const ICON_CLOCK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
const ICON_USER = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
const SHARE_TPL = pick(/<div class="article-share">[\s\S]*?<\/div>\s*<\/div>/);
const OLD_SLUG = 'perbedaan-motorik-kasar-dan-halus';
const OLD_TITLE_ENC = 'Perbedaan%20Motorik%20Kasar%20dan%20Halus%20dan%20Penerapannya%20Sehari-hari';

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const strip = (s) => s.replace(/<[^>]+>/g, '');
const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const tgl = (iso) => { const [y, m, d] = iso.split('-').map(Number); return `${d} ${BULAN[m - 1]} ${y}`; };
const dims = (src, w, h) => (/^(cocopandan|cpao)-/.test(src) ? [936, 1248] : [w, h]);

function render(a) {
  const url = `${BASE}/artikel/${a.slug}`;
  const img = `${BASE}/Dokumentasi/${a.hero.src}`;
  const [hw, hh] = dims(a.hero.src, a.hero.w, a.hero.h);
  const articleLd = {
    '@context': 'https://schema.org', '@type': 'Article', headline: a.h1, description: a.description,
    image: { '@type': 'ImageObject', url: img, width: hw, height: hh },
    author: { '@type': 'Organization', name: 'Tim YUKA', url: BASE + '/' },
    publisher: { '@type': 'Organization', name: 'Yayasan Ukhuwah Kaffah Amanatullah', url: BASE + '/', logo: { '@type': 'ImageObject', url: BASE + '/Logo/Logo.webp' } },
    datePublished: a.datePublished, dateModified: MODIFIED,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url }, inLanguage: 'id-ID', keywords: a.keywords,
    citation: a.sources.map(([u]) => u),
  };
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: a.faq.map(([q, ans]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: ans } })) };
  const crumbLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: BASE + '/' },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: BASE + '/blog' },
    { '@type': 'ListItem', position: 3, name: a.breadcrumb, item: url } ] };

  const share = SHARE_TPL.split(OLD_SLUG).join(a.slug).split(OLD_TITLE_ENC).join(encodeURIComponent(a.h1));
  const faqHtml = `<h2 id="faq">Pertanyaan yang Sering Diajukan</h2>\n` + a.faq.map(([q, ans]) => `<h3>${q}</h3>\n<p>${ans}</p>`).join('\n');
  const srcHtml = `<h2 id="sumber">Sumber</h2>\n<ul>\n` + a.sources.map(([u, t]) => `<li><a href="${u}" target="_blank" rel="noopener">${t}</a></li>`).join('\n') + `\n</ul>`;
  const relHtml = `<h2>Baca Juga</h2>\n<div class="related-articles">\n` + a.related.map(([s, t, d]) => `<div class="related-card"><h4><a href="${s}">${t}</a></h4><p>${d}</p></div>`).join('\n') + `\n</div>`;
  let body = a.body.replace(/<img src="\.\.\/Dokumentasi\/([^"]+)"([^>]*?) width="\d+" height="\d+"/g, (m, src, mid) => { const [w, h] = dims(src, 1200, 900); return `<img src="../Dokumentasi/${src}"${mid} width="${w}" height="${h}"`; });

  return `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <!-- Google Analytics 4 -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-LDXC5GQF61"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-LDXC5GQF61',{'send_page_view':true,'cookie_flags':'SameSite=None;Secure'});</script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${esc(a.title)} | YUKA</title>
    <meta name="description" content="${esc(a.description)}">
    <meta name="keywords" content="${esc(a.keywords.join(', '))}">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${url}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${BASE}/feed.xml">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${url}">
    <meta property="og:title" content="${esc(a.h1)}">
    <meta property="og:description" content="${esc(a.description)}">
    <meta property="og:image" content="${img}">
    <meta property="article:published_time" content="${a.datePublished}">
    <meta property="article:modified_time" content="${MODIFIED}">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(a.h1)}">
    <meta name="twitter:description" content="${esc(a.description)}">
    <meta name="twitter:image" content="${img}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"></noscript>
    <link rel="stylesheet" href="../assets/css/style.min.css">
    <script type="application/ld+json">${JSON.stringify(articleLd)}</script>
    <script type="application/ld+json">${JSON.stringify(faqLd)}</script>
    <script type="application/ld+json">${JSON.stringify(crumbLd)}</script>
    ${STYLE}
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16.png">
    <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
</head>
<body>
    ${NAV}

    <header class="article-header">
        <div class="container">
            <div class="breadcrumb">
                <a href="/">Beranda</a>
                <span class="separator">/</span>
                <a href="/blog">Artikel</a>
                <span class="separator">/</span>
                <span class="current">${a.breadcrumb}</span>
            </div>
            <span class="card-category" style="background: var(--secondary); color: var(--gray-900); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; display: inline-block; margin: 1rem 0;">${a.category}</span>
            <h1 style="font-size: 2.5rem; max-width: 800px;">${a.h1}</h1>
            <div class="article-meta">
                <span>${ICON_CAL}${tgl(a.datePublished)} (diperbarui ${tgl(MODIFIED)})</span>
                <span>${ICON_CLOCK}${a.readMin} menit baca</span>
                <span>${ICON_USER}Tim YUKA</span>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="article-featured-image">
            <img src="../Dokumentasi/${a.hero.src}" alt="${esc(a.hero.alt)}" width="${hw}" height="${hh}">
        </div>
    </div>

    <article class="article-content">
        <div class="article-body">
${body}
${faqHtml}
${srcHtml}
${relHtml}
        <div class="article-tags">
            <a href="/artikel/motorik-halus">#MotorikHalus</a>
            <a href="/artikel/stimulasi-motorik-halus">#StimulasiAnak</a>
            <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">#ABK</a>
            <a href="/blog">#TumbuhKembang</a>
        </div>
        ${share}
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga kesehatan. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
    </article>

    <section class="section bg-primary" style="padding: 4rem 0;">
        <div class="container text-center">
            <h2 style="color: var(--white); margin-bottom: 1rem;">Dukung Pendidikan Inklusi Anak Berkebutuhan Khusus</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 2rem;">Donasi Anda membantu anak berkebutuhan khusus di Sekolah Inklusi Taruna Imani mendapatkan pendidikan, terapi, dan pendampingan untuk tumbuh mandiri.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="/donasi" class="btn btn-secondary">Donasi Sekarang</a>
                <a href="https://wa.me/6281229912332?text=Halo%20YUKA%2C%20saya%20ingin%20bertanya%20tentang%20program%20pendidikan%20inklusi" target="_blank" class="btn btn-outline-light">Hubungi via WhatsApp</a>
            </div>
        </div>
    </section>

    <script src="../assets/js/main.min.js" defer></script>
</body>
</html>
`;
}

for (const a of articles) {
  const html = ensureArticleShell(render(a));
  const missing = missingShellParts(html);
  if (missing.length) throw new Error(`${a.slug}: shell gate failed: ${missing.join(', ')}`);
  if (/—/.test(strip(html))) throw new Error(`${a.slug}: em dash found`);
  fs.writeFileSync(path.join(ROOT, 'artikel', a.slug + '.html'), html);
  console.log('wrote', a.slug, html.length);
}

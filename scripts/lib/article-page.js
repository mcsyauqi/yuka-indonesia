'use strict';
/*
 * Kerangka halaman artikel KANONIK YUKA, satu sumber (cycle #74, 2026-10-07).
 *
 * Diangkat apa adanya dari template generator kanonik (gen-respite-care-2026-10-04.js,
 * sama dengan artikel/sibling-anak-berkebutuhan-khusus.html): font Poppins, pita header
 * navy + breadcrumb, article-featured-image, article-content/article-body, related-articles,
 * article-tags, article-sources, article-share, CTA donasi, lalu footer/GA4 dari article-shell.
 *
 * Kenapa ada: batch MinTiv 2026-10-06 (uu-no-19-tahun-2011-tentang-apa, sensory-seeking-behavior-anak,
 * lembaga-sertifikasi-terapis-anak-di-indonesia) mengetik ulang kerangka dari ingatan dan tayang tanpa
 * font, tanpa pita header, tanpa share/sumber/tag/related. Generator BARU wajib memanggil
 * renderArticlePage(); render() hasil ketik ulang tidak boleh dipakai lagi.
 *
 * Validasi: renderArticlePage() melempar error kalau hasilnya gagal shell gate
 * (article-shell.js) atau skeleton gate (article-skeleton.js).
 */
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./article-shell');
const { missingSkeletonParts } = require('./article-skeleton');

const SITE = 'https://www.yukaindonesia.com';
const ROOT = path.resolve(__dirname, '..', '..');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const stripTags = (s) => String(s).replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();

const EDITORIAL_DEFAULT = "<aside data-catchup=\"editorial-policy\" style=\"margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px\"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional. Baca <a href=\"/kebijakan-editorial\">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href=\"mailto:info@yukaindonesia.com\">info@yukaindonesia.com</a>.</aside>";

// Gaya tambahan untuk elemen isi yang dipakai beberapa generator (figure isi, kotak jawaban, peringatan).
const EXTRA_CSS = `
        .article-body figure { margin: 2rem 0; border-radius: 12px; overflow: hidden; background: var(--gray-50); }
        .article-body figure img { width: 100%; height: auto; display: block; max-height: 560px; object-fit: cover; }
        .article-body figure figcaption { padding: 0.7rem 1rem; font-size: 0.9rem; color: var(--gray-600); line-height: 1.6; }
        .article-body figure .kredit { display: block; font-size: 0.8rem; margin-top: 0.25rem; }
        .warning-box { background: #fff1f1; border-left: 4px solid #c0392b; padding: 1.25rem 1.5rem; margin: 2rem 0; border-radius: 0 12px 12px 0; }
        .article-body table:not(.classification-table) { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 1rem; }
        .article-body table:not(.classification-table) th, .article-body table:not(.classification-table) td { border: 1px solid var(--gray-200); padding: 0.75rem 1rem; text-align: left; vertical-align: top; }
        .article-body table:not(.classification-table) th { background: var(--primary); color: var(--white); }
        @media (max-width: 700px) { .article-header h1 { font-size: 1.8rem !important; } .article-body table { display: block; overflow-x: auto; } }`;

/**
 * a = { slug, titleTag, metaDesc, keywords, ogTitle, ogDesc, datePublished, dateModified, dateDisplay,
 *       readTime, category, h1, crumb, parent?: {href,name}, about?: [], image: {file,w,h,alt,caption,credit},
 *       bodyHtml, faq: [{q,a}], related: [{href,title,desc}], tags: [], sources: [{url,label}],
 *       sourcesCheckedNote, editorialHtml? }
 */
function renderArticlePage(a) {
  for (const k of ['slug', 'titleTag', 'metaDesc', 'h1', 'crumb', 'category', 'datePublished', 'dateDisplay', 'readTime', 'bodyHtml']) {
    if (!a[k]) throw new Error(`${a.slug || '?'}: field ${k} kosong`);
  }
  if (!a.image || !a.image.file || !a.image.w || !a.image.h || !a.image.credit) throw new Error(`${a.slug}: hero image tidak lengkap`);
  if (a.image.h > a.image.w) throw new Error(`${a.slug}: hero potret ${a.image.w}x${a.image.h}, pakai foto lanskap`);
  if (!a.related || a.related.length < 3) throw new Error(`${a.slug}: related-articles < 3`);
  if (!a.sources || !a.sources.length) throw new Error(`${a.slug}: sumber kosong`);
  a.dateModified = a.dateModified || a.datePublished;
  a.sourcesCheckedNote = a.sourcesCheckedNote || '';
  const CANONICAL = `${SITE}/artikel/${a.slug}`;
  const IMAGE_URL = `${SITE}/${a.image.file}`;
  const IMG_ALT = a.image.alt;
  const crumbs = [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
  ];
  if (a.parent) crumbs.push({ '@type': 'ListItem', position: 3, name: a.parent.name, item: `${SITE}/artikel/${a.parent.href}` });
  crumbs.push({ '@type': 'ListItem', position: crumbs.length + 1, name: a.crumb, item: CANONICAL });
  const breadcrumb = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: crumbs };
  const blogPosting = {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline: a.ogTitle || a.h1, description: a.ogDesc || a.metaDesc,
    image: {
      '@type': 'ImageObject', url: IMAGE_URL, width: a.image.w, height: a.image.h,
      caption: a.image.alt, creditText: stripTags(a.image.credit),
      author: { '@type': 'Organization', name: 'Yayasan Ukhuwah Kaffah Amanatullah (YUKA)' },
    },
    author: a.author || { '@type': 'Organization', name: 'Tim YUKA', url: `${SITE}/` },
    publisher: { '@id': `${SITE}/#organization` },
    datePublished: a.datePublished, dateModified: a.dateModified,
    mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
    inLanguage: 'id-ID',
  };
  if (a.keywords) blogPosting.keywords = a.keywords;
  if (a.about) blogPosting.about = a.about.map((n) => ({ '@type': 'Thing', name: n }));
  if (a.sources.length) blogPosting.citation = a.sources.map((s) => ({ '@type': 'CreativeWork', name: stripTags(s.label), url: s.url }));
  const faqSchema = a.faq && a.faq.length ? {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: a.faq.map((f) => ({ '@type': 'Question', name: stripTags(f.q), acceptedAnswer: { '@type': 'Answer', text: stripTags(f.a) } })),
  } : null;
  const parentCrumb = a.parent
    ? `                <a href="${a.parent.href}">${a.parent.name}</a>\n                <span class="separator">/</span>\n`
    : '';
  const related = a.related.map((r) => `
                <div class="related-card">
                    <h4><a href="${r.href}">${r.title}</a></h4>
                    <p>${r.desc}</p>
                </div>`).join('');
  const sources = a.sources.map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener"><strong>${s.label}</strong></a></li>`).join('\n              ');
  const tags = (a.tags || []).map((t) => `<a href="#">#${t}</a>`).join('\n            ');
  const shareText = encodeURIComponent(a.crumb);
  const heroHtml = `    <div class="container">
        <figure class="article-featured-image">
            <img src="../${a.image.file}" alt="${esc(a.image.alt)}" width="${a.image.w}" height="${a.image.h}" fetchpriority="high">
            <figcaption>${a.image.caption}
                <span class="kredit">${a.image.credit}</span>
            </figcaption>
        </figure>
    </div>
`;
  let html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- SEO Meta Tags -->
    <title>${a.titleTag}</title>
    <meta name="description" content="${esc(a.metaDesc)}">
    <meta name="keywords" content="${esc(a.keywords)}">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow, max-image-preview:large">
    <link rel="canonical" href="${CANONICAL}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:locale" content="id_ID">
    <meta property="og:site_name" content="YUKA Indonesia">
    <meta property="og:url" content="${CANONICAL}">
    <meta property="og:title" content="${esc(a.ogTitle)}">
    <meta property="og:description" content="${esc(a.ogDesc)}">
    <meta property="og:image" content="${IMAGE_URL}">
    <meta property="og:image:alt" content="${esc(IMG_ALT)}">
    <meta property="article:published_time" content="${a.datePublished}">
    <meta property="article:modified_time" content="${a.dateModified}">

    <!-- X / Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${esc(a.ogTitle)}">
    <meta name="twitter:description" content="${esc(a.ogDesc)}">
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
        .article-featured-image { margin: -2rem auto 2rem; max-width: 900px; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.15); background: var(--white); }
        .article-featured-image img { width: 100%; height: auto; display: block; }
        .article-featured-image img { max-height: 620px; object-fit: cover; object-position: center 35%; }
        .article-featured-image figcaption { padding: 0.75rem 1rem; font-size: 0.9rem; color: var(--gray-600); background: var(--gray-50); line-height: 1.6; }
        .article-featured-image .kredit { display: block; font-size: 0.8rem; color: var(--gray-600); margin-top: 0.25rem; }
        .article-featured-image .kredit a { color: #1565C0; text-decoration: underline; }
        .article-body { font-size: 1.1rem; line-height: 1.9; color: var(--gray-700); }
        .article-body h2 { color: var(--primary); margin: 2.5rem 0 1rem; font-size: 1.75rem; }
        .article-body h3 { color: var(--gray-800); margin: 2rem 0 1rem; font-size: 1.35rem; }
        .article-body p { margin-bottom: 1.5rem; }
        .article-body ul, .article-body ol { margin: 1.5rem 0; padding-left: 2rem; }
        .article-body a { color: #1565C0; text-decoration: underline; text-underline-offset: 2px; }
        .article-body a:hover { color: #0D47A1; }
        .jawaban-singkat { background: #F1F5FF; border-left: 4px solid var(--primary); padding: 1.25rem 1.5rem; border-radius: 0 12px 12px 0; margin-bottom: 1.5rem; }
        .jawaban-singkat p { margin: 0; }
        .story-highlight { background: linear-gradient(135deg, #e3f2fd 0%, #fff 100%); border: 2px solid #2196F3; border-radius: 16px; padding: 2rem; margin: 2rem 0; }
        .story-highlight h3 { color: #1565C0; margin-top: 0; }
        .article-tags { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--gray-200); }
        .article-tags a { background: var(--gray-100); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; color: var(--gray-600); }
        .article-share { display: flex; align-items: center; gap: 1rem; margin-top: 2rem; }
        .share-buttons { display: flex; gap: 0.5rem; }
        .share-btn { width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--white); }
        .share-btn.whatsapp { background: #25D366; }
        .share-btn.facebook { background: #1877F2; }
        .toc { background: var(--gray-50); border: 1px solid var(--gray-200); border-radius: 12px; padding: 1.5rem 2rem; margin: 2rem 0; }
        .toc h3 { margin-top: 0; color: var(--primary); font-size: 1.1rem; }
        .toc ol { margin: 0; padding-left: 1.5rem; }
        .toc li { margin-bottom: 0.5rem; }
        .toc a { color: var(--gray-700); text-decoration: none; }
        .info-box { background: #fff3e0; border-left: 4px solid #ff9800; padding: 1.5rem; margin: 2rem 0; border-radius: 0 12px 12px 0; }
        .info-box h4 { color: #e65100; margin-top: 0; }
        .related-articles { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1.5rem; margin: 2rem 0; }
        .related-card { background: var(--white); border: 1px solid var(--gray-200); border-radius: 12px; padding: 1.5rem; }
        .related-card h4 { font-size: 1rem; margin: 0 0 0.5rem; }
        .related-card a { color: var(--primary); text-decoration: none; font-weight: 600; }
        .related-card p { font-size: 0.9rem; color: var(--gray-600); margin: 0; }
        .classification-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 1rem; }
        .classification-table th, .classification-table td { border: 1px solid var(--gray-200); padding: 0.75rem 1rem; text-align: left; vertical-align: top; }
        .classification-table th { background: var(--primary); color: var(--white); font-weight: 600; }
        .classification-table tr:nth-child(even) { background: var(--gray-50); }
${EXTRA_CSS}
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
${parentCrumb}                <span class="current">${a.crumb}</span>
            </div>
            <span class="card-category" style="background: var(--secondary); color: var(--gray-900); padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.875rem; display: inline-block; margin: 1rem 0;">${esc(a.category)}</span>
            <h1 style="font-size: 2.5rem; max-width: 800px;">${a.h1}</h1>
            <div class="article-meta">
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${a.dateDisplay}</span>
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>${a.readTime}</span>
                <span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>${a.authorName || 'Tim YUKA'}</span>
            </div>
        </div>
    </header>

${heroHtml}
    <article class="article-content">
        <div class="article-body">
${a.bodyHtml.trim()}

            <h2>Bacaan Terkait</h2>
            <div class="related-articles">${related}
            </div>
        </div>

        <div class="article-tags">
            ${tags}
        </div>

        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber dan Referensi</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              ${sources}
          </ul>
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Catatan:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti konsultasi dengan psikolog, tenaga kesehatan, atau petugas layanan sosial resmi</strong>. ${a.sourcesCheckedNote}
            </p>
        </div>

        <div class="article-share">
            <span style="font-weight: 600;">Bagikan:</span>
            <div class="share-buttons">
                <a href="https://wa.me/?text=${shareText}%20-%20${CANONICAL}" target="_blank" rel="noopener" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=${CANONICAL}" target="_blank" rel="noopener" class="share-btn facebook" aria-label="Bagikan ke Facebook"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href="https://twitter.com/intent/tweet?text=${shareText}&url=${CANONICAL}" target="_blank" rel="noopener" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000000;"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
            </div>
        </div>
    ${a.editorialHtml || EDITORIAL_DEFAULT}
</article>

    <section class="section bg-primary" style="padding: 4rem 0;">
        <div class="container text-center">
            <h2 style="color: var(--white); margin-bottom: 1rem;">Bantu Pendidikan Anak Berkebutuhan Khusus</h2>
            <p style="color: rgba(255,255,255,0.9); max-width: 600px; margin: 0 auto 2rem;">Setiap donasi Anda membantu anak-anak dengan beragam kemampuan mendapatkan pendidikan dan pendampingan yang sesuai kebutuhan mereka.</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
                <a href="../donasi" class="btn btn-secondary">Donasi Sekarang</a>
                <a href="https://wa.me/6281229912332?text=Halo%20YUKA%2C%20saya%20ingin%20bertanya%20tentang%20pendampingan%20anak" target="_blank" rel="noopener" class="btn btn-outline-light">Hubungi via WhatsApp</a>
            </div>
        </div>
    </section>
    <script src="../assets/js/main.min.js" defer></script>
</body>
</html>`;
  if (!faqSchema) html = html.replace(/\n    <!-- FAQ Schema -->\n    <script type="application\/ld\+json">null<\/script>\n/, '\n');
  html = ensureArticleShell(html, a.slug);
  // Tag konversi GA4 (donation_cta_click, whatsapp_click), sama dengan scripts/ensure-conversion-tracking.js.
  if (!html.includes('yuka-conversions.js')) {
    const i = html.lastIndexOf('</body>');
    html = html.slice(0, i) + '<script src="/assets/js/yuka-conversions.js" defer></script>\n' + html.slice(i);
  }
  const shell = missingShellParts(html);
  if (shell.length) throw new Error(`${a.slug}: shell gate failed: ${shell.join(', ')}`);
  const sk = missingSkeletonParts(html, { root: ROOT });
  if (sk.length) throw new Error(`${a.slug}: skeleton gate failed: ${sk.join(', ')}`);
  if (/[\u2014\u2013]/.test(stripTags(html.replace(/<script[\s\S]*?<\/script>/g, '')))) throw new Error(`${a.slug}: ada em/en dash di teks`);
  return html;
}

module.exports = { renderArticlePage, esc, stripTags, SITE };

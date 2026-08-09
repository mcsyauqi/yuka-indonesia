const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const SITE = 'https://www.yukaindonesia.com';
const TODAY = new Date().toISOString().slice(0, 10);

const staticPages = [
  { loc: `${SITE}/`, file: 'index.html', changefreq: 'weekly', priority: '1.0' },
  { loc: `${SITE}/donasi`, file: 'donasi.html', changefreq: 'monthly', priority: '0.9' },
  { loc: `${SITE}/program`, file: 'program.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/tentang`, file: 'tentang.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/blog`, file: 'blog.html', changefreq: 'weekly', priority: '0.8' },
  { loc: `${SITE}/galeri`, file: 'galeri.html', changefreq: 'monthly', priority: '0.7' },
  { loc: `${SITE}/kontak`, file: 'kontak.html', changefreq: 'monthly', priority: '0.7' },
  { loc: `${SITE}/yayasan-abk-yogyakarta`, file: 'yayasan-abk-yogyakarta.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/sekolah-inklusi-sleman`, file: 'sekolah-inklusi-sleman.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/donasi-pendidikan-abk`, file: 'donasi-pendidikan-abk.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/zakat-pendidikan-abk`, file: 'zakat-pendidikan-abk.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/csr-pendidikan-inklusi`, file: 'csr-pendidikan-inklusi.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/terapi-wicara-jogja`, file: 'terapi-wicara-jogja.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/terapi-okupasi-sleman`, file: 'terapi-okupasi-sleman.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/terapi-sensori-integrasi-yogyakarta`, file: 'terapi-sensori-integrasi-yogyakarta.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/sekolah-autis-yogyakarta`, file: 'sekolah-autis-yogyakarta.html', changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/konsultasi-abk-sleman`, file: 'konsultasi-abk-sleman.html', changefreq: 'monthly', priority: '0.8' },
];

function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
}

function existingMeta(files) {
  const meta = new Map();
  for (const file of files) {
    const xml = read(file);
    const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
    for (const block of urlBlocks) {
      const loc = block.match(/<loc>(.*?)<\/loc>/)?.[1];
      if (!loc || meta.has(loc)) continue;
      meta.set(loc, {
        lastmod: block.match(/<lastmod>(.*?)<\/lastmod>/)?.[1] || TODAY,
        changefreq: block.match(/<changefreq>(.*?)<\/changefreq>/)?.[1] || 'monthly',
        priority: block.match(/<priority>(.*?)<\/priority>/)?.[1] || '0.7',
      });
    }
  }
  return meta;
}

function cleanSlug(fileName) {
  return path.basename(fileName, '.html');
}

// Cycle #24 fix (2026-06-10): lastmod was inherited verbatim from the previous
// sitemap, so 63 entries stayed stuck at 2026-05-01 forever (even freshly
// published articles). Derive lastmod from the article's own JSON-LD
// dateModified/datePublished instead; cap future-dated (pre-deployed) articles
// at TODAY so the sitemap stays valid.
function articleLastmod(file) {
  const html = read(path.join('artikel', file));
  const dm = html.match(/"dateModified"\s*:\s*"(\d{4}-\d{2}-\d{2})/)?.[1];
  const dp = html.match(/"datePublished"\s*:\s*"(\d{4}-\d{2}-\d{2})/)?.[1];
  const d = dm || dp;
  if (!d) return null;
  return d > TODAY ? TODAY : d;
}

function articlePages(meta) {
  return fs.readdirSync('artikel')
    .filter((file) => file.endsWith('.html'))
    .sort()
    .map((file) => {
      const loc = `${SITE}/artikel/${cleanSlug(file)}`;
      return {
        loc,
        lastmod: articleLastmod(file) || meta.get(loc)?.lastmod || TODAY,
        changefreq: meta.get(loc)?.changefreq || 'monthly',
        priority: meta.get(loc)?.priority || '0.7',
      };
    });
}

// Cycle #24 fix, part 2 (2026-08-03): articles were fixed in June but the STATIC
// pages kept inheriting lastmod verbatim from the previous sitemap, so 10 of 17
// froze (blog/tentang/program at 2026-05-01 while their files changed on
// 2026-08-03, i.e. 94 days stale). Worse, /yayasan-abk-yogyakarta was crawled on
// 2026-05-01 and returned 404 back then; with lastmod also pinned to 2026-05-01
// Google had no signal to retry, so the stale 404 never cleared even though the
// page has served 200 since the nginx clean-URL config landed. Derive lastmod
// from the file's own last commit date instead; fall back to filesystem mtime,
// then to the previous sitemap value.
function gitLastCommitDate(file) {
  try {
    const out = execFileSync('git', ['log', '-1', '--format=%ad', '--date=short', '--', file], {
      encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  } catch (_) {
    return null;
  }
}

function fileLastmod(file) {
  if (!file || !fs.existsSync(file)) return null;
  const d = gitLastCommitDate(file);
  if (d) return d > TODAY ? TODAY : d;
  const mtime = fs.statSync(file).mtime.toISOString().slice(0, 10);
  return mtime > TODAY ? TODAY : mtime;
}

function withMeta(entries, meta) {
  return entries.map((entry) => ({
    ...entry,
    lastmod: fileLastmod(entry.file) || meta.get(entry.loc)?.lastmod || TODAY,
  }));
}

function renderUrlset(entries, indent = '  ') {
  const body = entries.map((entry) => [
    `${indent}<url>`,
    `${indent}  <loc>${entry.loc}</loc>`,
    `${indent}  <lastmod>${entry.lastmod}</lastmod>`,
    `${indent}  <changefreq>${entry.changefreq}</changefreq>`,
    `${indent}  <priority>${entry.priority}</priority>`,
    `${indent}</url>`,
  ].join('\n')).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function renderSitemapIndex() {
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${SITE}/sitemap-pages.xml</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>${SITE}/sitemap-articles.xml</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>${SITE}/sitemap-images.xml</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>\n</sitemapindex>\n`;
}

function writeIfChanged(file, content) {
  if (read(file) === content) return false;
  fs.writeFileSync(file, content);
  return true;
}

const meta = existingMeta(['sitemap-pages.xml', 'sitemap-articles.xml', 'sitemap.xml']);
const pages = withMeta(staticPages, meta);
const articles = articlePages(meta);
const combinedByLoc = new Map();

for (const entry of [...pages, ...articles]) {
  combinedByLoc.set(entry.loc, entry);
}

const combined = Array.from(combinedByLoc.values()).sort((a, b) => {
  if (a.loc === `${SITE}/`) return -1;
  if (b.loc === `${SITE}/`) return 1;
  return a.loc.localeCompare(b.loc);
});

const changed = {
  pages: writeIfChanged('sitemap-pages.xml', renderUrlset(pages)),
  articles: writeIfChanged('sitemap-articles.xml', renderUrlset(articles)),
  main: writeIfChanged('sitemap.xml', renderUrlset(combined, '    ')),
  index: writeIfChanged('sitemap-index.xml', renderSitemapIndex()),
};

console.log(JSON.stringify({
  changed,
  pages: pages.length,
  articles: articles.length,
  sitemap: combined.length,
}, null, 2));

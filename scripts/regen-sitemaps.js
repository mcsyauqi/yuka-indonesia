const fs = require('fs');
const path = require('path');

const SITE = 'https://www.yukaindonesia.com';
const TODAY = new Date().toISOString().slice(0, 10);

const staticPages = [
  { loc: `${SITE}/`, changefreq: 'weekly', priority: '1.0' },
  { loc: `${SITE}/donasi`, changefreq: 'monthly', priority: '0.9' },
  { loc: `${SITE}/program`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/tentang`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/blog`, changefreq: 'weekly', priority: '0.8' },
  { loc: `${SITE}/galeri`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${SITE}/kontak`, changefreq: 'monthly', priority: '0.7' },
  { loc: `${SITE}/yayasan-abk-yogyakarta`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/sekolah-inklusi-sleman`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/donasi-pendidikan-abk`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/zakat-pendidikan-abk`, changefreq: 'monthly', priority: '0.8' },
  { loc: `${SITE}/csr-pendidikan-inklusi`, changefreq: 'monthly', priority: '0.8' },
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

function withMeta(entries, meta) {
  return entries.map((entry) => ({
    ...entry,
    lastmod: meta.get(entry.loc)?.lastmod || TODAY,
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
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap>\n    <loc>${SITE}/sitemap-pages.xml</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>\n  <sitemap>\n    <loc>${SITE}/sitemap-articles.xml</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>\n</sitemapindex>\n`;
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

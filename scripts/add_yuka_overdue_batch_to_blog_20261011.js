'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const slugs = [
  'slb-itu-singkatan-dari-apa',
  'terapis-anak-berkebutuhan-khusus-di-solo',
  'lebaran-anak-abk'
];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const attr = (html, re) => { const m = html.match(re); if (!m) throw new Error(`missing ${re}`); return m[1]; };
let blog = fs.readFileSync(path.join(ROOT, 'blog.html'), 'utf8');
const marker = '<div class="blog-grid" id="blogGrid">';
if (!blog.includes(marker)) throw new Error('blog marker missing');
let added = 0;
for (const slug of slugs) {
  const html = fs.readFileSync(path.join(ROOT, 'artikel', `${slug}.html`), 'utf8');
  const title = attr(html, /<h1[^>]*>([\s\S]*?)<\/h1>/);
  const description = attr(html, /<meta name="description" content="([^"]+)"/);
  const image = attr(html, /<figure class="article-featured-image">\s*<img src="\.\.\/(.*?)"/);
  const date = attr(html, /<div class="article-meta">[\s\S]*?<svg[^>]*>[\s\S]*?<\/svg>([^<]+)<\/span>/);
  const category = attr(html, /<span class="card-category"[^>]*>([^<]+)<\/span>/);
  if (blog.includes(`href="artikel/${slug}"`)) continue;
  const card = `
                <!-- Article: ${esc(title)} -->
                <article class="card blog-card animate-on-scroll">
                    <div class="card-image">
                        <img src="${image}" alt="${esc(title)}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <span class="card-category">${esc(category)}</span>
                        <h3 class="card-title"><a href="artikel/${slug}">${title}</a></h3>
                        <p class="card-text">${esc(description)}</p>
                        <div class="card-meta">
                            <span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                                ${esc(date.trim())}
                            </span>
                            <span>${slug === 'slb-itu-singkatan-dari-apa' ? '14 menit baca' : '15 menit baca'}</span>
                        </div>
                    </div>
                </article>`;
  blog = blog.replace(marker, marker + card, 1);
  added++;
}
if (added) {
  blog = blog.replace(/Menampilkan (\d+) artikel/, (_, n) => `Menampilkan ${Number(n) + added} artikel`);
  fs.writeFileSync(path.join(ROOT, 'blog.html'), blog);
}
console.log(JSON.stringify({ added, slugs }));

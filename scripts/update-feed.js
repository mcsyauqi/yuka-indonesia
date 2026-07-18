#!/usr/bin/env node

const fs = require('fs');

const [slug, title, description, publishDate] = process.argv.slice(2);
if (!slug || !title || !description || !/^\d{4}-\d{2}-\d{2}$/.test(publishDate || '')) {
  console.error('Usage: node scripts/update-feed.js <slug> <title> <description> <YYYY-MM-DD>');
  process.exit(1);
}

const feedPath = 'feed.xml';
let feed = fs.readFileSync(feedPath, 'utf8');
const cleanUrl = `https://www.yukaindonesia.com/artikel/${slug}`;

if (feed.includes(`<guid>${cleanUrl}</guid>`)) {
  console.log(`Skipped duplicate feed item: ${slug}`);
  process.exit(0);
}

const escapeXml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

const publishedAt = new Date(`${publishDate}T02:00:00Z`).toUTCString();
const item = [
  '    <item>',
  `      <title>${escapeXml(title)}</title>`,
  `      <link>${cleanUrl}</link>`,
  `      <guid>${cleanUrl}</guid>`,
  `      <description>${escapeXml(description)}</description>`,
  `      <pubDate>${publishedAt}</pubDate>`,
  '    </item>',
].join('\n');

const atomLink = '    <atom:link href="https://www.yukaindonesia.com/feed.xml" rel="self" type="application/rss+xml"/>';
if (!feed.includes(atomLink)) {
  console.error('RSS atom self-link marker not found');
  process.exit(1);
}

feed = feed.replace(atomLink, `${atomLink}\n${item}`);
feed = feed.replace(
  /<lastBuildDate>[^<]*<\/lastBuildDate>/,
  `<lastBuildDate>${publishedAt}</lastBuildDate>`,
);
fs.writeFileSync(feedPath, feed);
console.log(`Added to feed.xml: ${slug}`);

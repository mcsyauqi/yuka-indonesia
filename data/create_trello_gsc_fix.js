const https = require('https');
const fs = require('fs');
const path = require('path');

const envContent = fs.readFileSync('D:/Projects/Creativism App/.env', 'utf8');
const env = {};
envContent.split('\n').forEach(line => {
  const m = line.match(/^([^=]+)=(.*)$/);
  if (m) env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
});
const KEY = env.TRELLO_API_KEY;
const TOKEN = env.TRELLO_TOKEN;
const DONE_LIST_ID = '69bd74749a9518237a1b023d';
const TODO_LIST_ID = '69be462e5ee119810b7c2655';

function apiRequest(method, path_, body) {
  return new Promise((resolve, reject) => {
    const bodyStr = body ? JSON.stringify(body) : null;
    const req = https.request({
      hostname: 'api.trello.com', path: path_, method,
      headers: { 'Content-Type': 'application/json', ...(bodyStr ? {'Content-Length': Buffer.byteLength(bodyStr)} : {}) }
    }, r => {
      let d = ''; r.on('data', c => d += c);
      r.on('end', () => { try { resolve({ status: r.statusCode, data: JSON.parse(d) }); } catch(e) { resolve({ status: r.statusCode, data: {} }); }});
    });
    req.on('error', reject);
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

function attachFile(cardId, filePath, name) {
  return new Promise((resolve) => {
    const boundary = '----FormBoundary' + Date.now();
    const fileData = fs.readFileSync(filePath);
    const ext = path.extname(filePath).substring(1);
    const mime = { pdf: 'application/pdf', png: 'image/png', webp: 'image/webp' }[ext] || 'application/octet-stream';
    const header = `--${boundary}\r\nContent-Disposition: form-data; name="file"; filename="${name}"\r\nContent-Type: ${mime}\r\n\r\n`;
    const footer = `\r\n--${boundary}--\r\n`;
    const body = Buffer.concat([Buffer.from(header), fileData, Buffer.from(footer)]);
    const req = https.request({
      hostname: 'api.trello.com',
      path: `/1/cards/${cardId}/attachments?key=${KEY}&token=${TOKEN}`,
      method: 'POST',
      headers: { 'Content-Type': `multipart/form-data; boundary=${boundary}`, 'Content-Length': body.length }
    }, r => {
      let d = ''; r.on('data', c => d += c);
      r.on('end', () => { console.log('Attach', name, '→ HTTP', r.statusCode); resolve(); });
    });
    req.write(body); req.end();
  });
}

function attachUrl(cardId, url, name) {
  return new Promise((resolve) => {
    const params = new URLSearchParams({ url, name }).toString();
    const req = https.request({
      hostname: 'api.trello.com',
      path: `/1/cards/${cardId}/attachments?key=${KEY}&token=${TOKEN}`,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(params) }
    }, r => {
      let d = ''; r.on('data', c => d += c);
      r.on('end', () => { console.log('Attach URL', name, '→ HTTP', r.statusCode); resolve(); });
    });
    req.write(params); req.end();
  });
}

async function main() {
  // 1. Create Done card
  const card = await apiRequest('POST', `/1/cards?key=${KEY}&token=${TOKEN}`, {
    idList: DONE_LIST_ID,
    name: 'Fix GSC: Page with Redirect & Alternate Page — Clean URLs Internal Links',
    pos: 'top',
    idMembers: ['58f95f285a8d5d5d65949327']
  });
  const cardId = card.data.id;
  console.log('Card created:', cardId, card.data.shortUrl);

  // 2. Update description
  const desc = [
    '## Fix GSC: Page with Redirect & Alternate Page — Clean URLs Internal Links',
    '',
    '**Status:** Selesai',
    '**Tanggal:** 3 April 2026',
    '**PIC:** Ahmad Thariq Syauqi',
    '**Commit:** e18701f (links fix) + 030fe6b (sitemap fix)',
    '**Deploy:** Vercel (auto)',
    '**Live URL:** https://www.yukaindonesia.com',
    '',
    '---',
    '',
    '### Ringkasan',
    '',
    'Ditemukan 2 jenis GSC error akibat penggunaan .html extension di URL internal:',
    '1. "Alternate page with proper canonical tag" (7 halaman) — sitemap masih pakai URL .html',
    '2. "Page with redirect" (4 halaman) — 388 internal links di artikel masih pakai .html',
    '',
    'Kedua issue berhasil diperbaiki dengan memastikan semua URL di sitemap dan internal links menggunakan clean URL (tanpa .html, dengan www).',
    '',
    '### Root Cause',
    '',
    '- Sitemap entry untuk tunaganda-adalah.html menggunakan URL non-www + .html',
    '- Workflow auto-publish menambahkan URL sitemap format lama: yukaindonesia.com/artikel/slug.html',
    '- 9 artikel batch baru (Jul 2026) ditulis dengan nav links dan internal links masih pakai .html',
    '- Googlebot follow links .html → redirect (301 via Vercel cleanUrls) → GSC flag sebagai "Page with redirect"',
    '',
    '### Yang Dikerjakan',
    '',
    '1. Fix sitemap.xml: URL tunaganda-adalah.html → www.yukaindonesia.com/artikel/tunaganda-adalah',
    '2. Fix workflow publish-scheduled.yml: sitemap entry sekarang pakai https://www.yukaindonesia.com/artikel/{slug}',
    '3. Fix email link di workflow: ganti href ke clean URL',
    '4. Bulk fix 388 internal links di 9 artikel: nav links (143) + article links (245)',
    '5. Buat script fix_html_links.js untuk future use',
    '',
    '### Hasil',
    '',
    '- 0 sisa .html links di semua 63 artikel',
    '- Sitemap 100% clean URL dengan www',
    '- Workflow auto-publish sudah menggunakan clean URL format',
    '- GSC validation: perlu 1-2 minggu untuk Google re-crawl dan konfirmasi fix',
    '',
    '### Commits',
    '',
    '- 030fe6b — fix: sitemap clean URLs (www + no .html) + fix workflow sitemap entry format',
    '- e18701f — fix: remove .html from all internal nav + article links (388 links, 9 files)',
    '',
    '### Detail Lengkap',
    '',
    'Lihat PDF report terlampir.',
  ].join('\n');

  await apiRequest('PUT', `/1/cards/${cardId}?key=${KEY}&token=${TOKEN}`, { desc });
  console.log('Desc updated');

  // 3. Mark complete
  await apiRequest('PUT', `/1/cards/${cardId}?key=${KEY}&token=${TOKEN}`, {
    dueComplete: true,
    due: '2026-04-03T03:00:00.000Z'
  });
  console.log('Marked complete');

  // Store card info for later
  console.log('CARD_ID=' + cardId);
  console.log('SHORT_URL=' + card.data.shortUrl);

  return { cardId, shortUrl: card.data.shortUrl };
}

main().catch(console.error);

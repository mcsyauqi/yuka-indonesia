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
const CARD_ID = '69d0976467642c5cb7be83e9';
const TODO_LIST_ID = '69be462e5ee119810b7c2655';
const DONE_CARD_URL = 'https://trello.com/c/XknGxMsH';

function apiRequest(method, urlPath, body) {
  return new Promise((resolve) => {
    const bodyStr = body ? JSON.stringify(body) : null;
    const req = https.request({
      hostname: 'api.trello.com', path: urlPath, method,
      headers: { 'Content-Type': 'application/json', ...(bodyStr ? {'Content-Length': Buffer.byteLength(bodyStr)} : {}) }
    }, r => {
      let d = ''; r.on('data', c => d += c);
      r.on('end', () => { try { resolve({ status: r.statusCode, data: JSON.parse(d) }); } catch(e) { resolve({ status: r.statusCode, data: {} }); }});
    });
    req.on('error', () => resolve({ status: 0, data: {} }));
    if (bodyStr) req.write(bodyStr);
    req.end();
  });
}

function attachFile(cardId, filePath, name) {
  return new Promise((resolve) => {
    const boundary = '----FB' + Date.now();
    const fileData = fs.readFileSync(filePath);
    const ext = path.extname(filePath).substring(1);
    const mime = { pdf: 'application/pdf', png: 'image/png' }[ext] || 'application/octet-stream';
    const header = '--' + boundary + '\r\nContent-Disposition: form-data; name="file"; filename="' + name + '"\r\nContent-Type: ' + mime + '\r\n\r\n';
    const footer = '\r\n--' + boundary + '--\r\n';
    const body = Buffer.concat([Buffer.from(header), fileData, Buffer.from(footer)]);
    const req = https.request({
      hostname: 'api.trello.com',
      path: '/1/cards/' + cardId + '/attachments?key=' + KEY + '&token=' + TOKEN,
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data; boundary=' + boundary, 'Content-Length': body.length }
    }, r => {
      let d = ''; r.on('data', c => d += c);
      r.on('end', () => { console.log('Attach file', name, '->', r.statusCode); resolve(); });
    });
    req.write(body); req.end();
  });
}

function attachUrl(cardId, url, name) {
  return new Promise((resolve) => {
    const params = 'url=' + encodeURIComponent(url) + '&name=' + encodeURIComponent(name);
    const req = https.request({
      hostname: 'api.trello.com',
      path: '/1/cards/' + cardId + '/attachments?key=' + KEY + '&token=' + TOKEN,
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Content-Length': Buffer.byteLength(params) }
    }, r => {
      let d = ''; r.on('data', c => d += c);
      r.on('end', () => { console.log('Attach URL', name, '->', r.statusCode); resolve(); });
    });
    req.write(params); req.end();
  });
}

async function reorderListByDueDate(listId) {
  const res = await apiRequest('GET', '/1/lists/' + listId + '/cards?fields=id,name,due&key=' + KEY + '&token=' + TOKEN, null);
  const cards = res.data;
  cards.sort((a, b) => {
    if (!a.due && !b.due) return 0;
    if (!a.due) return 1;
    if (!b.due) return -1;
    return new Date(a.due) - new Date(b.due);
  });
  for (let i = 0; i < cards.length; i++) {
    await apiRequest('PUT', '/1/cards/' + cards[i].id + '?key=' + KEY + '&token=' + TOKEN, { pos: (i + 1) * 1000 });
    await new Promise(r => setTimeout(r, 150));
  }
  console.log('Reordered', cards.length, 'cards by due date');
}

async function main() {
  // Attach PDF
  await attachFile(CARD_ID, 'D:/Projects/Yuka/data/YUKA_GSC_Fix_Redirect_Report.pdf', 'YUKA_GSC_Fix_Redirect_Report.pdf');
  await new Promise(r => setTimeout(r, 500));
  await attachUrl(CARD_ID, 'https://www.yukaindonesia.com', 'Live: yukaindonesia.com');
  await new Promise(r => setTimeout(r, 500));
  await attachUrl(CARD_ID, 'https://search.google.com/search-console', 'GSC: yukaindonesia.com');
  await new Promise(r => setTimeout(r, 500));

  // Todo 1
  const desc1 = '## Konteks\n\nTask ini tindak lanjut dari: **Fix GSC: Page with Redirect** (3 Apr 2026)\nDone card: ' + DONE_CARD_URL + '\n\n## Latar Belakang\n\nSetelah fix sitemap + 388 internal links (commit 030fe6b + e18701f), Google perlu 1-2 minggu untuk re-crawl. GSC mengirim email validation failed 2 April 2026.\n\n## Yang Perlu Dikerjakan\n\n- Buka GSC > Page indexing > "Page with redirect" > cek status: Passed atau masih ada?\n- Buka GSC > Page indexing > "Alternate page with proper canonical tag" > cek apakah 7 halaman resolved\n- Jika masih ada halaman bermasalah, jalankan: node scripts/fix_html_links.js\n- Cek apakah ada .html links baru dari artikel auto-publish berikutnya\n\n## Target Output\n\nKedua GSC issues berstatus Passed atau 0 halaman terdampak\n\n## Referensi\n\n- PDF: D:/Projects/Yuka/data/YUKA_GSC_Fix_Redirect_Report.pdf\n- Script: D:/Projects/Yuka/scripts/fix_html_links.js';

  const card1 = await apiRequest('POST', '/1/cards?key=' + KEY + '&token=' + TOKEN, {
    idList: TODO_LIST_ID,
    name: 'Monitor GSC Validation: Page with Redirect & Alternate Page',
    pos: 'bottom',
    due: '2026-04-17T03:00:00.000Z',
    idMembers: ['58f95f285a8d5d5d65949327']
  });
  await apiRequest('PUT', '/1/cards/' + card1.data.id + '?key=' + KEY + '&token=' + TOKEN, { desc: desc1 });
  console.log('Todo 1:', card1.data.shortUrl);
  await new Promise(r => setTimeout(r, 500));

  // Todo 2
  const desc2 = '## Konteks\n\nTask ini tindak lanjut dari: **Fix GSC: Page with Redirect** (3 Apr 2026)\nDone card: ' + DONE_CARD_URL + '\n\n## Latar Belakang\n\n388 internal .html links ditemukan di 9 artikel batch Jul 2026 (template lama). Perlu audit template agar batch berikutnya tidak mengulang masalah.\n\n## Yang Perlu Dikerjakan\n\n- Cek template artikel yang dipakai content writer -- pastikan nav links sudah clean URL (tanpa .html)\n- Spot-check 3-5 artikel scheduled Jun-Jul 2026 di folder artikel/ untuk verifikasi\n- Jalankan: node scripts/fix_html_links.js untuk verifikasi 0 .html links\n- Update CLAUDE.md atau instruksi template: semua href harus tanpa .html\n\n## Target Output\n\n0 artikel dengan .html links. Template/instruksi diupdate.\n\n## Referensi\n\n- Script fix: D:/Projects/Yuka/scripts/fix_html_links.js\n- Folder artikel: D:/Projects/Yuka/artikel/';

  const card2 = await apiRequest('POST', '/1/cards?key=' + KEY + '&token=' + TOKEN, {
    idList: TODO_LIST_ID,
    name: 'Audit Template Artikel Baru: Pastikan Tidak Ada .html Links',
    pos: 'bottom',
    due: '2026-04-10T03:00:00.000Z',
    idMembers: ['58f95f285a8d5d5d65949327']
  });
  await apiRequest('PUT', '/1/cards/' + card2.data.id + '?key=' + KEY + '&token=' + TOKEN, { desc: desc2 });
  console.log('Todo 2:', card2.data.shortUrl);
  await new Promise(r => setTimeout(r, 500));

  // Reorder
  await reorderListByDueDate(TODO_LIST_ID);

  console.log('\nAll done!');
  console.log('Done card: https://trello.com/c/XknGxMsH');
}

main().catch(console.error);

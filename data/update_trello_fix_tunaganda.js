const https = require('https');

const TRELLO_KEY = process.env.TRELLO_API_KEY;
const TRELLO_TOKEN = process.env.TRELLO_TOKEN;
const CARD_ID = '69c5fde13d0042554412e069';

const desc = [
  '## Fix: Artikel Tunaganda Tidak Muncul di Blog',
  '',
  '**Status:** Selesai',
  '**Tanggal:** 27 Maret 2026',
  '**PIC:** Ahmad Thariq Syauqi',
  '**Commit:** ad36961',
  '**Deploy:** Vercel (auto via GitHub push)',
  '**Live URL:** https://www.yukaindonesia.com/blog',
  '',
  '---',
  '',
  '### Root Cause',
  '',
  'Saat fitur search & filter ditambahkan ke blog.html (commit 568da37), marker blog grid berubah dari `<div class="blog-grid">` menjadi `<div class="blog-grid" id="blogGrid">`. GitHub Actions workflow masih mencari marker lama, sehingga Python replace() gagal dan artikel tidak di-insert ke blog.html. Tapi publish-schedule.json tetap diupdate dan di-commit — menyebabkan artikel tunaganda "hilang" dari jadwal tapi tidak muncul di blog.',
  '',
  '### Perubahan',
  '',
  '- Marker workflow: `<div class="blog-grid">` -> `<div class="blog-grid" id="blogGrid">`',
  '- blog.html: Artikel tunaganda-adalah ditambahkan manual ke blog grid',
  '- GitHub Actions: Workflow akan berjalan normal mulai artikel berikutnya (30 Mar)',
  '',
  '### Yang Dikerjakan',
  '',
  '1. Git pull dari GitHub — temukan commit 3535120 (auto-publish) yang hanya mengubah publish-schedule.json + sitemap.xml, tanpa blog.html',
  '2. Analisis diff commit — konfirmasi tunaganda-adalah di-remove dari schedule tapi tidak diinsert ke blog grid',
  '3. Baca workflow YAML — temukan root cause: marker `<div class="blog-grid">` vs `<div class="blog-grid" id="blogGrid">`',
  '4. Fix blog.html — tambahkan card tunaganda-adalah secara manual di posisi paling atas grid',
  '5. Fix workflow YAML — update marker ke versi yang benar',
  '6. Commit ad36961 + push — Vercel auto-deploy',
  '',
  '### Artikel yang Diperbaiki',
  '',
  '- Slug: tunaganda-adalah',
  '- Judul: Tunaganda Adalah: Pengertian, Ciri-Ciri, Penyebab, dan Pendidikan Anak Tunaganda',
  '- Kategori: Pendidikan',
  '- Tanggal tayang: 27 Maret 2026',
  '- URL: https://www.yukaindonesia.com/artikel/tunaganda-adalah',
  '',
  '### Artikel Berikutnya',
  '',
  '- 30 Mar: tunagrahita-adalah (sudah aman — workflow sudah dipatch)',
  '',
  '### Detail Lengkap',
  '',
  'Lihat PDF report terlampir.'
].join('\n');

const body = JSON.stringify({ desc });
const req = https.request({
  hostname: 'api.trello.com',
  path: `/1/cards/${CARD_ID}?key=${TRELLO_KEY}&token=${TRELLO_TOKEN}`,
  method: 'PUT',
  headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
}, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => console.log('HTTP', res.statusCode));
});
req.write(body);
req.end();

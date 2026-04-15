const https = require('https');

const TRELLO_KEY = process.env.TRELLO_API_KEY;
const TRELLO_TOKEN = process.env.TRELLO_TOKEN;
const CARD_ID = '69c5aec76f3a9e332862eaab';

const desc = [
  '## Fitur Search & Filter Halaman Blog',
  '',
  '**Status:** Selesai',
  '**Tanggal:** 27 Maret 2026',
  '**PIC:** Ahmad Thariq Syauqi',
  '**Commit:** 568da37',
  '**Deploy:** Vercel (auto via GitHub push)',
  '**Live URL:** https://www.yukaindonesia.com/blog',
  '',
  '---',
  '',
  '### Ringkasan',
  '',
  'Halaman blog yukaindonesia.com ditambahkan fitur search real-time, filter kategori (chip scrollable), load more (12 artikel/batch), dan no-result state. Pure vanilla JS tanpa dependensi library. Meningkatkan UX navigasi 63+ artikel.',
  '',
  '### Fitur yang Diimplementasi',
  '',
  '1. Search bar real-time — filter by judul, deskripsi, dan kategori artikel',
  '2. Tombol clear (x) muncul saat user mengetik',
  '3. Category filter chips — Semua, Pendidikan, Terapi, Parenting, Inspirasi, Dakwah, Program, Panduan, Laporan',
  '4. Horizontal scroll chips di mobile (scrollbar hidden)',
  '5. Load more button — tampil 12 artikel per batch',
  '6. Dynamic article count — "X artikel ditemukan" / "Menampilkan X dari Y artikel"',
  '7. No-result state — pesan kosong + tombol Reset Filter',
  '8. Filter kombinasi — search + kategori bisa dipakai bersamaan',
  '',
  '### Teknis',
  '',
  '- Pure vanilla JavaScript (no jQuery, no library)',
  '- IIFE pattern untuk scope isolation',
  '- CSS chip styles inline (tidak polusi stylesheet utama)',
  '- Kompatibel dengan auto-publish workflow (artikel baru otomatis masuk grid)',
  '- File: blog.html (+139 lines)',
  '',
  '### Kategori Artikel (22 artikel live)',
  '',
  '- Pendidikan: 13 artikel',
  '- Parenting: 2 artikel',
  '- Inspirasi: 2 artikel',
  '- Program: 2 artikel',
  '- Panduan: 1 artikel',
  '- Laporan: 1 artikel',
  '- Dakwah: 1 artikel',
  '',
  '### SEO Impact',
  '',
  '- UX lebih baik → lower bounce rate → sinyal positif SEO',
  '- Time on site meningkat karena navigasi lebih mudah',
  '- Pages/session meningkat karena user bisa explore lebih banyak artikel',
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

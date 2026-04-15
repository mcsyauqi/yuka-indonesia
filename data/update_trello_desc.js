const https = require('https');

const TRELLO_KEY = process.env.TRELLO_API_KEY;
const TRELLO_TOKEN = process.env.TRELLO_TOKEN;
const CARD_ID = '69c49895df1e180fc9ea1293';

const desc = [
  '## Optimasi Halaman Donasi: CTA, Trust Signals, Payment',
  '',
  '**Status:** Selesai',
  '**Tanggal:** 25 Maret 2026',
  '**PIC:** Ahmad Thariq Syauqi',
  '**Deploy:** Vercel (auto via GitHub push)',
  '**Live URL:** https://www.yukaindonesia.com/donasi',
  '',
  '---',
  '',
  '### Ringkasan',
  '',
  'Halaman donasi yukaindonesia.com dioptimasi untuk meningkatkan conversion rate donatur. Ditambahkan trust signals, emotional storytelling, visual breakdown alokasi dana, dan multiple payment confirmation.',
  '',
  '### Yang Sudah Ada di Halaman',
  '',
  '**Emotional Story Section:**',
  '- Hadits pembuka (HR. Muslim) dengan Arabic text',
  '- Storytelling tentang anak-anak ABK di Sleman',
  '- Kisah sukses alumni Ilham (hafal 30 juz, mandiri wirausaha)',
  '- Trust metrics: 20+ anak, 100% donasi langsung, 3+ tahun melayani',
  '',
  '**Payment & CTA:**',
  '- Rekening BSI 7347462785 a.n. Yayasan Ukhuwah Kaffah Amanatullah',
  '- Copy-to-clipboard nomor rekening',
  '- Konfirmasi donasi via WhatsApp (+62 812-2991-2332)',
  '',
  '**Alokasi Donasi (Visual Breakdown):**',
  '- Operasional Pendidikan Inklusi',
  '- Makan & Kebutuhan Pokok',
  '- Fasilitas Ramah Disabilitas',
  '- Kesehatan & Terapi Anak',
  '- Dakwah & Tahfidz Al-Quran',
  '- Beasiswa & Kemandirian',
  '',
  '**Trust Signals:**',
  '- Yayasan Resmi & Legal (Kemenkumham)',
  '- Transparan & Terbuka (laporan berkala)',
  '- 100% Tepat Sasaran',
  '- Dampak Nyata & Terukur',
  '',
  '**Closing CTA:**',
  '- Quote motivasi berbagi',
  '- Hadits penutup',
  '',
  '### SEO Elements',
  '',
  '- Title: Donasi untuk Anak Berkebutuhan Khusus di Yogyakarta | YUKA Indonesia',
  '- Meta desc: optimized untuk donasi + sedekah + zakat + infaq',
  '- Keywords: 12 keyword target',
  '- Open Graph: configured',
  '- Canonical: https://www.yukaindonesia.com/donasi',
  '- RSS autodiscovery: active',
  '- GA4 tracking: active (G-LDXC5GQF61)',
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

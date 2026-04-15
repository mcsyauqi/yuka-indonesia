const fs = require('fs');
const path = require('path');

const PROJECT_DIR = 'D:/Projects/Yuka';
const assetsDir = path.join(PROJECT_DIR, 'report-assets');

const headerHtml = fs.readFileSync(path.join(assetsDir, 'header.html'), 'utf8');
const footerHtml = fs.readFileSync(path.join(assetsDir, 'footer.html'), 'utf8');
const brand = JSON.parse(fs.readFileSync(path.join(assetsDir, 'brand.json'), 'utf8'));

const primary = brand.colors.primary;    // #2B3A67
const secondary = brand.colors.secondary; // #FFD700
const dark = brand.colors.dark;           // #2B3A67
const fontFamily = brand.font.family;
const fontImport = brand.font.import;

// GSC Data
const gscByPage = JSON.parse(fs.readFileSync(path.join(PROJECT_DIR, 'data/gsc_by_page.json'), 'utf8'));
const gscByQuery = JSON.parse(fs.readFileSync(path.join(PROJECT_DIR, 'data/gsc_by_query.json'), 'utf8'));
const gscByImpressions = JSON.parse(fs.readFileSync(path.join(PROJECT_DIR, 'data/gsc_by_impressions.json'), 'utf8'));
const gscByQueryPage = JSON.parse(fs.readFileSync(path.join(PROJECT_DIR, 'data/gsc_by_query_page.json'), 'utf8'));

const pRows = gscByPage.rows || [];
const qRows = gscByQuery.rows || [];
const impRows = gscByImpressions.rows || [];
const qpRows = gscByQueryPage.rows || [];

const totalClicks = pRows.reduce((s,r) => s+r.clicks, 0);
const totalImpressions = pRows.reduce((s,r) => s+r.impressions, 0);
const avgCTR = totalImpressions > 0 ? (totalClicks/totalImpressions*100).toFixed(2) : '0';
const avgPos = pRows.length > 0 ? (pRows.reduce((s,r) => s+r.position, 0)/pRows.length).toFixed(1) : '-';

const top10 = qpRows.filter(r => r.position <= 10);
const top20 = qpRows.filter(r => r.position > 10 && r.position <= 20);
const top50 = qpRows.filter(r => r.position > 20 && r.position <= 50);
const below50 = qpRows.filter(r => r.position > 50);

// Pages table rows
const pagesTableRows = pRows.map((r, i) => {
  const page = r.keys[0].replace('https://www.yukaindonesia.com/', '').replace('.html', '') || 'Homepage';
  const ctr = (r.ctr * 100).toFixed(1);
  const pos = r.position.toFixed(1);
  const highlight = parseFloat(pos) <= 10 ? `background:#e8f5e9;` : (parseFloat(pos) <= 30 ? `background:#fff8e1;` : '');
  return `<tr style="${highlight}">
    <td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:10px">${i+1}</td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:10px;color:#333">${page}</td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:10px"><b>${r.clicks}</b></td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:10px">${r.impressions}</td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:10px">${pos}</td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:10px">${ctr}%</td>
  </tr>`;
}).join('');

// Keywords by impressions table (top 30)
const kwTableRows = impRows.slice(0, 30).map((r, i) => {
  const pos = r.position.toFixed(1);
  const ctr = (r.ctr * 100).toFixed(1);
  const posColor = parseFloat(pos) <= 10 ? '#2e7d32' : (parseFloat(pos) <= 30 ? '#f57f17' : '#c62828');
  const badge = parseFloat(pos) <= 10 ? `<span style="background:#e8f5e9;color:#2e7d32;padding:1px 6px;border-radius:10px;font-size:9px;font-weight:bold">TOP 10</span>` :
                (parseFloat(pos) <= 20 ? `<span style="background:#e3f2fd;color:#1565c0;padding:1px 6px;border-radius:10px;font-size:9px;font-weight:bold">TOP 20</span>` :
                (parseFloat(pos) <= 50 ? `<span style="background:#fff8e1;color:#f57f17;padding:1px 6px;border-radius:10px;font-size:9px;font-weight:bold">TOP 50</span>` :
                `<span style="background:#fce4ec;color:#c62828;padding:1px 6px;border-radius:10px;font-size:9px">>${pos}</span>`));
  return `<tr>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:10px">${i+1}</td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;font-size:10px">${r.keys[0]}</td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:10px"><b>${r.clicks}</b></td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:10px">${r.impressions}</td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:10px;color:${posColor}">${pos}</td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:10px">${ctr}%</td>
    <td style="padding:6px 10px;border-bottom:1px solid #eee;text-align:center;font-size:10px">${badge}</td>
  </tr>`;
}).join('');

// Published articles list
const blogContent = fs.readFileSync(path.join(PROJECT_DIR, 'blog.html'), 'utf8');
const articleRegex = /<h3 class="card-title">\s*<a href="([^"]+)">([^<]+)<\/a>/g;
let m, publishedArticles = [];
while ((m = articleRegex.exec(blogContent)) !== null) {
  publishedArticles.push({ url: m[1], title: m[2].trim() });
}

const articlesTableRows = publishedArticles.map((a, i) => {
  const slug = a.url.replace('artikel/', '');
  return `<tr style="${i%2===1?'background:#f9f9f9':''}">
    <td style="padding:5px 10px;border-bottom:1px solid #eee;font-size:10px">${i+1}</td>
    <td style="padding:5px 10px;border-bottom:1px solid #eee;font-size:10px">${a.title}</td>
    <td style="padding:5px 10px;border-bottom:1px solid #eee;font-size:9px;color:#666">${slug}</td>
  </tr>`;
}).join('');

// Upcoming schedule (first 20)
const schedule = JSON.parse(fs.readFileSync(path.join(PROJECT_DIR, 'publish-schedule.json'), 'utf8'));
const nextArticles = schedule.slice(0, 20);
const scheduleRows = nextArticles.map((a, i) => {
  return `<tr style="${i%2===1?'background:#f9f9f9':''}">
    <td style="padding:5px 10px;border-bottom:1px solid #eee;font-size:10px">${i+1}</td>
    <td style="padding:5px 10px;border-bottom:1px solid #eee;font-size:10px">${a.date}</td>
    <td style="padding:5px 10px;border-bottom:1px solid #eee;font-size:10px">${a.title}</td>
    <td style="padding:5px 10px;border-bottom:1px solid #eee;font-size:10px">${a.category}</td>
  </tr>`;
}).join('');

const html = `<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<link href="${fontImport}" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: '${fontFamily}', sans-serif; max-width: 900px; margin: 0 auto; padding: 30px; font-size: 12px; color: #333; padding-bottom: 80px; }
  h1 { font-size: 22px; border-bottom: 3px solid ${primary}; color: ${primary}; padding-bottom: 10px; margin: 20px 0 12px; }
  h2 { font-size: 16px; color: ${primary}; border-left: 4px solid ${secondary}; padding-left: 10px; margin: 20px 0 10px; }
  h3 { font-size: 13px; color: ${dark}; margin: 14px 0 6px; }
  p { font-size: 12px; line-height: 1.7; color: #444; margin-bottom: 8px; }
  table { width: 100%; border-collapse: collapse; margin: 8px 0; }
  table th { background: ${primary}; color: #fff; padding: 8px 10px; text-align: left; font-size: 11px; }
  table td { font-size: 11px; }
  .meta-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px 16px; background: #f4f6fb; padding: 14px; border-radius: 8px; margin: 12px 0; border-left: 4px solid ${primary}; }
  .meta-grid div { font-size: 11px; color: #555; }
  .meta-grid strong { color: ${primary}; }
  .stat-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 16px 0; }
  .stat-card { background: ${primary}; color: #fff; border-radius: 8px; padding: 14px; text-align: center; }
  .stat-card .num { font-size: 28px; font-weight: 700; color: ${secondary}; }
  .stat-card .label { font-size: 10px; opacity: 0.85; margin-top: 4px; }
  .stat-cards-2 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 16px 0; }
  .stat-card-2 { background: #f4f6fb; border: 1px solid #dde3f0; border-radius: 8px; padding: 12px; text-align: center; }
  .stat-card-2 .num2 { font-size: 22px; font-weight: 700; color: ${primary}; }
  .stat-card-2 .label2 { font-size: 10px; color: #666; margin-top: 3px; }
  .insight-box { background: #fff8e1; border-left: 4px solid ${secondary}; padding: 10px 14px; border-radius: 0 6px 6px 0; margin: 10px 0; font-size: 11px; color: #555; }
  .action-box { background: #e8f5e9; border-left: 4px solid #2e7d32; padding: 10px 14px; border-radius: 0 6px 6px 0; margin: 10px 0; font-size: 11px; }
  .warn-box { background: #fce4ec; border-left: 4px solid #c62828; padding: 10px 14px; border-radius: 0 6px 6px 0; margin: 10px 0; font-size: 11px; }
  .progress-bar-wrap { background: #e0e0e0; border-radius: 20px; height: 10px; overflow: hidden; margin: 4px 0; }
  .progress-bar { height: 10px; border-radius: 20px; background: linear-gradient(90deg, ${primary}, ${secondary}); }
  .kpi-table { width: 100%; border-collapse: collapse; margin: 10px 0; }
  .kpi-table th { background: ${primary}; color: #fff; padding: 7px 10px; font-size: 11px; text-align: left; }
  .kpi-table td { padding: 7px 10px; border-bottom: 1px solid #eee; font-size: 11px; }
  .report-footer { position: static !important; margin-top: 40px !important; }
  .page-break { page-break-before: always; }
  ul li { margin-bottom: 5px; font-size: 11px; color: #444; }
  ol li { margin-bottom: 5px; font-size: 11px; color: #444; }
</style>
</head><body>

${headerHtml}

<h1>Review Performa 1 Bulan Pertama SEO — YUKA Indonesia</h1>

<div class="meta-grid">
  <div><strong>Status:</strong> Selesai</div>
  <div><strong>Tanggal Review:</strong> 30 Maret 2026</div>
  <div><strong>PIC:</strong> Ahmad Thariq Syauqi</div>
  <div><strong>Periode Data:</strong> 28 Feb — 30 Mar 2026</div>
  <div><strong>Platform:</strong> Google Search Console</div>
  <div><strong>Board:</strong> SEO — yukaindonesia.com</div>
  <div><strong>Target Jangka Pendek:</strong> 500 organic visitors/bulan dalam 3 bulan</div>
  <div><strong>Live URL:</strong> https://www.yukaindonesia.com</div>
  <div><strong>Tools:</strong> GSC API, GitHub Actions, Playwright</div>
</div>

<!-- KPI Highlights -->
<div class="stat-cards">
  <div class="stat-card">
    <div class="num">1</div>
    <div class="label">Total Clicks<br>28 Feb – 30 Mar</div>
  </div>
  <div class="stat-card">
    <div class="num">104</div>
    <div class="label">Total Impressions<br>28 Feb – 30 Mar</div>
  </div>
  <div class="stat-card">
    <div class="num">0.96%</div>
    <div class="label">Avg CTR<br>Semua halaman</div>
  </div>
  <div class="stat-card">
    <div class="num">22.0</div>
    <div class="label">Avg Position<br>Semua halaman</div>
  </div>
</div>

<div class="stat-cards-2">
  <div class="stat-card-2">
    <div class="num2">63</div>
    <div class="label2">File Artikel HTML<br>Tersedia di repo</div>
  </div>
  <div class="stat-card-2">
    <div class="num2">23</div>
    <div class="label2">Artikel Live<br>Di blog grid</div>
  </div>
  <div class="stat-card-2">
    <div class="num2">6</div>
    <div class="label2">Halaman Terindeks<br>Google (GSC)</div>
  </div>
  <div class="stat-card-2">
    <div class="num2">443</div>
    <div class="label2">Artikel Terjadwal<br>Apr – Des 2026</div>
  </div>
</div>

<h2>Ringkasan Eksekusi</h2>
<p>
  Bulan Maret 2026 adalah bulan pertama implementasi SEO untuk YUKA Indonesia (yukaindonesia.com) — yayasan anak berkebutuhan khusus berbasis Yogyakarta. Dalam bulan ini, seluruh infrastruktur teknikal SEO dibangun dari nol: sitemap, RSS feed, robots.txt, canonical tags, IndexNow, GA4, serta pipeline auto-publish artikel via GitHub Actions (cron harian 09:00 WIB).
</p>
<p>
  Batch pertama sebanyak 63 artikel SEO berhasil ditulis dan di-deploy ke repo GitHub. Dari 63 artikel tersebut, 23 artikel sudah ditampilkan di halaman blog, sementara sisanya terjadwal auto-publish setiap 3 hari sekali hingga Desember 2026. Total jadwal artikel mencapai 443 artikel tambahan.
</p>
<p>
  Data GSC masih sangat awal — Google baru mulai crawl dan mengindeks site dalam minggu-minggu terakhir. Dari 6 halaman yang sudah punya data GSC, 2 keyword sudah masuk top 10, dan halaman <em>keutamaan-merawat-anak-yatim</em> ranking di posisi 6.1. Ini indikasi positif bahwa konten berkualitas tinggi sudah mulai dikenali Google meski site baru.
</p>
<p>
  Secara keseluruhan, kondisi bulan pertama sangat normal untuk site baru. Indexing masih berlangsung dan ranking akan terus naik seiring bertambahnya artikel live dan link internal. Review berikutnya dijadwalkan akhir April 2026.
</p>

<h2>Status Indexing & Coverage</h2>

<div class="insight-box">
  <strong>Insight:</strong> Dari 63 artikel HTML yang tersedia, baru 6 halaman yang mendapat data di GSC. Ini bukan masalah — site baru butuh 4–8 minggu untuk Googlebot crawl penuh. Sitemap sudah disubmit. IndexNow sudah aktif untuk notif cepat ke Bing/Yandex.
</div>

<h3>Progress Indexing</h3>
<p>Estimasi halaman terindeks vs total halaman:</p>
<p style="font-size:11px;color:#666">6 terindeks dari 70+ halaman (homepage + 63 artikel + pages)</p>
<div class="progress-bar-wrap"><div class="progress-bar" style="width:8%"></div></div>
<p style="font-size:10px;color:#999;margin-top:3px">8% — Normal untuk site usia < 1 bulan</p>

<h3>Halaman yang Sudah Punya Data GSC</h3>
<table>
  <thead>
    <tr>
      <th style="width:30px">#</th>
      <th>Halaman</th>
      <th style="text-align:center;width:60px">Clicks</th>
      <th style="text-align:center;width:80px">Impressions</th>
      <th style="text-align:center;width:70px">Avg Pos</th>
      <th style="text-align:center;width:60px">CTR</th>
    </tr>
  </thead>
  <tbody>
    ${pagesTableRows}
  </tbody>
</table>

<p style="font-size:10px;color:#888;margin-top:5px">Hijau = Top 10 | Kuning = Top 30 | Putih = >30</p>

<h2>Performa Keywords</h2>

<div class="stat-cards-2" style="grid-template-columns:repeat(4,1fr)">
  <div class="stat-card-2"><div class="num2">${top10.length}</div><div class="label2">Keywords<br>Top 10</div></div>
  <div class="stat-card-2"><div class="num2">${top20.length}</div><div class="label2">Keywords<br>Top 11–20</div></div>
  <div class="stat-card-2"><div class="num2">${top50.length}</div><div class="label2">Keywords<br>Top 21–50</div></div>
  <div class="stat-card-2"><div class="num2">${below50.length}</div><div class="label2">Keywords<br>Di bawah 50</div></div>
</div>

<h3>Top 30 Keywords by Impressions (dengan posisi & peluang)</h3>
<table>
  <thead>
    <tr>
      <th style="width:30px">#</th>
      <th>Keyword</th>
      <th style="text-align:center;width:55px">Clicks</th>
      <th style="text-align:center;width:80px">Impressions</th>
      <th style="text-align:center;width:65px">Avg Pos</th>
      <th style="text-align:center;width:55px">CTR</th>
      <th style="text-align:center;width:80px">Status</th>
    </tr>
  </thead>
  <tbody>
    ${kwTableRows}
  </tbody>
</table>

<div class="insight-box">
  <strong>Keyword Terbaik saat ini:</strong><br>
  • <strong>yuka indonesia</strong> / branded terms — posisi ~5, sudah ada klik (1 click dari homepage)<br>
  • <strong>keutamaan merawat anak yatim</strong> — posisi 6.1, 15 impresi. Hampir di page 1!<br>
  • <strong>adhd adalah</strong> — 5 impresi, posisi 58.6 — masih jauh tapi keyword volume tinggi<br>
  • <strong>adhd</strong> — 2 impresi, posisi 44.5 — butuh push lebih lanjut
</div>

<h2>Analisis & Rekomendasi Aksi</h2>

<h3>1. Artikel ranking 21–50 → Tambah Konten & Internal Links</h3>
<div class="action-box">
  <ul>
    <li><strong>adhd-adalah</strong> (pos ~44–66): Artikel sudah diindex tapi ranking dalam. Tambah FAQ section, perluas konten ke 2500+ kata, tambah internal links dari artikel terkait (autisme-adalah, hiperaktif-adalah)</li>
    <li><strong>down-syndrome-adalah</strong> (pos ~45): Strategi sama — perluas konten, tambah data statistik Indonesia terbaru</li>
  </ul>
</div>

<h3>2. Artikel belum terindeks → Percepat Crawling</h3>
<div class="warn-box">
  <ul>
    <li>57+ artikel HTML belum dapat data GSC — kemungkinan belum di-crawl</li>
    <li>Aksi: Submit sitemap secara manual via GSC console setiap batch artikel baru</li>
    <li>Pastikan internal linking antar artikel aktif (setiap artikel harus ada 2-3 link ke artikel lain)</li>
    <li>Gunakan IndexNow API yang sudah aktif untuk notifikasi cepat ke search engines</li>
  </ul>
</div>

<h3>3. Artikel keutamaan-merawat-anak-yatim → Optimasi CTR</h3>
<div class="action-box">
  <ul>
    <li>Posisi 6.1 = sudah di halaman 1 Google! CTR masih 0% karena impresi baru 15x</li>
    <li>Optimalkan meta title untuk click-bait: tambah angka, tahun (2026), atau power word</li>
    <li>Tambah structured data FAQ untuk rich snippet</li>
  </ul>
</div>

<h2 class="page-break">Daftar Artikel Live (23 Artikel)</h2>
<table>
  <thead>
    <tr>
      <th style="width:30px">#</th>
      <th>Judul Artikel</th>
      <th>Slug</th>
    </tr>
  </thead>
  <tbody>
    ${articlesTableRows}
  </tbody>
</table>

<h2>Jadwal Auto-Publish 20 Artikel Berikutnya</h2>
<p style="font-size:11px;color:#666">Total artikel terjadwal: <strong>443 artikel</strong> (hingga Desember 2026, interval 3 hari)</p>
<table>
  <thead>
    <tr>
      <th style="width:30px">#</th>
      <th style="width:120px">Tanggal Publish</th>
      <th>Judul</th>
      <th style="width:100px">Kategori</th>
    </tr>
  </thead>
  <tbody>
    ${scheduleRows}
  </tbody>
</table>

<h2>KPI & Target</h2>
<table class="kpi-table">
  <thead>
    <tr>
      <th>KPI</th>
      <th>Formula</th>
      <th>Saat Ini (Mar 2026)</th>
      <th>Target Bulan ke-3 (Jun 2026)</th>
      <th>Target Bulan ke-6 (Sep 2026)</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Organic Clicks</td><td>Sum(clicks) dari GSC</td><td style="color:#c62828"><b>1</b></td><td style="color:#f57f17">500/bulan</td><td style="color:#2e7d32">2.000/bulan</td></tr>
    <tr style="background:#f9f9f9"><td>Organic Impressions</td><td>Sum(impressions) dari GSC</td><td><b>104</b></td><td>10.000/bulan</td><td>50.000/bulan</td></tr>
    <tr><td>Avg CTR</td><td>clicks / impressions × 100</td><td>0.96%</td><td>3–5%</td><td>5–8%</td></tr>
    <tr style="background:#f9f9f9"><td>Avg Position</td><td>Avg posisi semua keyword</td><td>22.0</td><td>≤ 20</td><td>≤ 15</td></tr>
    <tr><td>Halaman Terindeks</td><td>Coverage report GSC</td><td><b>6</b></td><td>50+</td><td>100+</td></tr>
    <tr style="background:#f9f9f9"><td>Keywords Top 10</td><td>Count keyword pos ≤ 10</td><td><b>${top10.length}</b></td><td>20+</td><td>100+</td></tr>
    <tr><td>Artikel Live</td><td>Count artikel di blog grid</td><td><b>23</b></td><td>63 (all published)</td><td>150+</td></tr>
    <tr style="background:#f9f9f9"><td>Donasi Conversion</td><td>GA4: donasi_click / organic sessions</td><td>N/A (traffic terlalu kecil)</td><td>> 0.5%</td><td>> 1%</td></tr>
  </tbody>
</table>

<h2>Next Steps</h2>
<ol style="padding-left:20px">
  <li style="margin-bottom:10px"><strong>[April 2026]</strong> Monitor indexing progress — cek di GSC Coverage report apakah artikel-artikel Maret sudah terindeks</li>
  <li style="margin-bottom:10px"><strong>[1-7 Apr 2026]</strong> Tambah internal links ke artikel adhd-adalah dan down-syndrome-adalah dari artikel yang sudah live</li>
  <li style="margin-bottom:10px"><strong>[Apr 2026]</strong> Optimasi meta title/description untuk keutamaan-merawat-anak-yatim (posisi 6.1 → target top 3)</li>
  <li style="margin-bottom:10px"><strong>[Ongoing, setiap 3 hari]</strong> Auto-publish artikel berjalan otomatis via GitHub Actions — pantau email notifikasi setiap pagi</li>
  <li style="margin-bottom:10px"><strong>[30 April 2026]</strong> Review Performa Bulan ke-2 — target: 50+ halaman terindeks, 20+ keyword top 50</li>
  <li style="margin-bottom:10px"><strong>[Juni 2026]</strong> Review Performa Bulan ke-3 — target milestone 500 organic visitors/bulan</li>
  <li style="margin-bottom:10px"><strong>[Jika indexing lambat]</strong> Submit sitemap manual di GSC → Sitemaps → Submit sitemap baru</li>
  <li style="margin-bottom:10px"><strong>[Jika ada artikel bounce rate tinggi]</strong> Improve content quality — tambah FAQ, gambar, video embed</li>
</ol>

<h2>Files & Dokumentasi</h2>
<table>
  <thead>
    <tr>
      <th>File</th>
      <th>Deskripsi</th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="font-size:10px">D:/Projects/Yuka/data/gsc_by_page.json</td><td style="font-size:10px">Data GSC by halaman (clicks, impressions, ctr, position)</td></tr>
    <tr style="background:#f9f9f9"><td style="font-size:10px">D:/Projects/Yuka/data/gsc_by_query.json</td><td style="font-size:10px">Data GSC by keyword sorted by clicks</td></tr>
    <tr><td style="font-size:10px">D:/Projects/Yuka/data/gsc_by_impressions.json</td><td style="font-size:10px">Data GSC by keyword sorted by impressions</td></tr>
    <tr style="background:#f9f9f9"><td style="font-size:10px">D:/Projects/Yuka/data/gsc_by_query_page.json</td><td style="font-size:10px">Data GSC kombinasi keyword + halaman</td></tr>
    <tr><td style="font-size:10px">D:/Projects/Yuka/publish-schedule.json</td><td style="font-size:10px">Jadwal 443 artikel terjadwal auto-publish</td></tr>
    <tr style="background:#f9f9f9"><td style="font-size:10px">D:/Projects/Yuka/.github/workflows/publish-scheduled.yml</td><td style="font-size:10px">GitHub Actions workflow auto-publish (fixed marker)</td></tr>
    <tr><td style="font-size:10px">D:/Projects/Yuka/data/YUKA_SEO_Review_Bulan1_Report.pdf</td><td style="font-size:10px">PDF laporan ini</td></tr>
  </tbody>
</table>

${footerHtml}

</body></html>`;

const outPath = path.join(PROJECT_DIR, 'data', 'report_seo_review_bulan1.html');
fs.writeFileSync(outPath, html);
console.log('HTML report written to:', outPath);

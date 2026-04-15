const fs = require('fs');
const path = require('path');

const PROJECT_DIR = 'D:/Projects/Yuka';
const assetsDir = path.join(PROJECT_DIR, 'report-assets');
const headerHtml = fs.readFileSync(path.join(assetsDir, 'header.html'), 'utf8');
const footerHtml = fs.readFileSync(path.join(assetsDir, 'footer.html'), 'utf8');
const brand = JSON.parse(fs.readFileSync(path.join(assetsDir, 'brand.json'), 'utf8'));

const primary = brand.colors.primary;
const secondary = brand.colors.secondary;
const dark = brand.colors.dark;

const html = `<!DOCTYPE html>
<html><head>
<meta charset="utf-8">
<link href="${brand.font.import}" rel="stylesheet">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: '${brand.font.family}', sans-serif; max-width: 900px; margin: 0 auto; padding: 30px; font-size: 12px; color: #333; padding-bottom: 80px; }
  h1 { font-size: 22px; border-bottom: 3px solid ${primary}; color: ${primary}; padding-bottom: 10px; margin: 20px 0 12px; }
  h2 { font-size: 16px; color: ${primary}; border-left: 4px solid ${secondary}; padding-left: 10px; margin: 20px 0 10px; }
  h3 { font-size: 13px; color: ${dark}; margin: 14px 0 6px; font-weight: 600; }
  p { font-size: 12px; line-height: 1.7; color: #444; margin-bottom: 8px; }
  table { width: 100%; border-collapse: collapse; margin: 8px 0; }
  table th { background: ${primary}; color: #fff; padding: 8px 10px; text-align: left; font-size: 11px; }
  table td { padding: 7px 10px; border-bottom: 1px solid #eee; font-size: 11px; }
  table tr:nth-child(even) { background: #f9f9f9; }
  .meta-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px 16px; background: #f4f6fb; padding: 14px; border-radius: 8px; margin: 12px 0; border-left: 4px solid ${primary}; }
  .meta-grid div { font-size: 11px; color: #555; }
  .meta-grid strong { color: ${primary}; }
  .stat-cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin: 16px 0; }
  .stat-card { background: ${primary}; color: #fff; border-radius: 8px; padding: 14px; text-align: center; }
  .stat-card .num { font-size: 28px; font-weight: 700; color: ${secondary}; }
  .stat-card .label { font-size: 10px; opacity: 0.85; margin-top: 4px; }
  .before-after { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 12px 0; }
  .before-box { background: #fce4ec; border: 1px solid #ef9a9a; border-radius: 8px; padding: 12px; }
  .after-box { background: #e8f5e9; border: 1px solid #a5d6a7; border-radius: 8px; padding: 12px; }
  .box-title { font-weight: 700; font-size: 12px; margin-bottom: 8px; }
  .before-box .box-title { color: #c62828; }
  .after-box .box-title { color: #2e7d32; }
  .box-item { font-size: 11px; color: #444; margin-bottom: 4px; padding-left: 12px; position: relative; }
  .box-item::before { content: "•"; position: absolute; left: 0; }
  .code-block { background: #f5f5f5; border: 1px solid #e0e0e0; border-radius: 4px; padding: 10px 12px; font-family: monospace; font-size: 10px; color: #333; margin: 8px 0; line-height: 1.6; }
  .warn-box { background: #fff3e0; border-left: 4px solid #ff9800; padding: 10px 14px; border-radius: 0 6px 6px 0; margin: 10px 0; font-size: 11px; }
  .info-box { background: #e3f2fd; border-left: 4px solid #1565c0; padding: 10px 14px; border-radius: 0 6px 6px 0; margin: 10px 0; font-size: 11px; }
  .success-box { background: #e8f5e9; border-left: 4px solid #2e7d32; padding: 10px 14px; border-radius: 0 6px 6px 0; margin: 10px 0; font-size: 11px; }
  .report-footer { position: static !important; margin-top: 40px !important; }
  .page-break { page-break-before: always; }
  ul, ol { padding-left: 20px; }
  li { margin-bottom: 4px; font-size: 11px; color: #444; }
  .badge-red { background: #fce4ec; color: #c62828; padding: 2px 8px; border-radius: 10px; font-size: 10px; font-weight: bold; }
  .badge-green { background: #e8f5e9; color: #2e7d32; padding: 2px 8px; border-radius: 10px; font-size: 10px; font-weight: bold; }
  .badge-blue { background: #e3f2fd; color: #1565c0; padding: 2px 8px; border-radius: 10px; font-size: 10px; font-weight: bold; }
</style>
</head><body>

${headerHtml}

<h1>Fix GSC: Page with Redirect & Alternate Page — Clean URLs Audit</h1>

<div class="meta-grid">
  <div><strong>Status:</strong> Selesai</div>
  <div><strong>Tanggal:</strong> 3 April 2026</div>
  <div><strong>PIC:</strong> Ahmad Thariq Syauqi</div>
  <div><strong>Commit 1:</strong> 030fe6b (sitemap fix)</div>
  <div><strong>Commit 2:</strong> e18701f (links fix)</div>
  <div><strong>Deploy:</strong> Vercel (auto)</div>
  <div><strong>Live URL:</strong> https://www.yukaindonesia.com</div>
  <div><strong>Board:</strong> SEO — yukaindonesia.com</div>
  <div><strong>Tools:</strong> Node.js, Git, Vercel, GSC</div>
</div>

<div class="stat-cards">
  <div class="stat-card">
    <div class="num">388</div>
    <div class="label">Internal links<br>difix (.html removed)</div>
  </div>
  <div class="stat-card">
    <div class="num">9</div>
    <div class="label">File artikel<br>dimodifikasi</div>
  </div>
  <div class="stat-card">
    <div class="num">2</div>
    <div class="label">GSC issues<br>ditangani</div>
  </div>
  <div class="stat-card">
    <div class="num">4</div>
    <div class="label">Halaman GSC<br>"Page with redirect"</div>
  </div>
</div>

<h2>Ringkasan Eksekusi</h2>
<p>
  Google Search Console mengirim notifikasi (2 April 2026) bahwa validasi fix untuk issue "Page with redirect" gagal — 4 halaman masih terdeteksi. Investigasi menunjukkan bahwa meskipun sitemap sudah menggunakan clean URL, Googlebot masih menemukan URL berekstensi .html melalui <strong>internal links di dalam artikel HTML</strong>.
</p>
<p>
  Batch 9 artikel baru (ditulis untuk jadwal Juli 2026) menggunakan template lama yang masih memiliki navigasi dengan .html extension (../index.html, ../blog.html, dll) dan internal article-to-article links dengan .html (disabilitas-adalah.html, tuna-rungu-adalah.html, dll). Total 388 links ini menyebabkan Googlebot crawl URL .html yang kemudian redirect (301) ke clean URL via Vercel cleanUrls.
</p>
<p>
  Fix dilakukan secara bulk dengan Node.js script yang mengganti semua 388 link sekaligus. Selain itu, workflow auto-publish juga sudah diupdate agar artikel berikutnya tidak menambah URL .html ke sitemap.
</p>

<h2>GSC Issues yang Ditangani</h2>

<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Issue Type</th>
      <th>Halaman Terdampak</th>
      <th>Root Cause</th>
      <th>Status Fix</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alternate page with proper canonical tag</td>
      <td>7 halaman</td>
      <td>Sitemap entry pakai URL .html + non-www</td>
      <td><span class="badge-green">FIXED</span></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Page with redirect</td>
      <td>4 halaman</td>
      <td>Internal links di artikel pakai href .html</td>
      <td><span class="badge-green">FIXED</span></td>
    </tr>
  </tbody>
</table>

<h3>Halaman yang Bermasalah (Page with redirect)</h3>
<table>
  <thead>
    <tr>
      <th>URL yang di-flag GSC</th>
      <th>Redirect ke</th>
      <th>Last Crawled</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>https://www.yukaindonesia.com/index.html</td><td>https://www.yukaindonesia.com/</td><td>Mar 31, 2026</td></tr>
    <tr><td>https://www.yukaindonesia.com/artikel/autisme-adalah.html</td><td>https://www.yukaindonesia.com/artikel/autisme-adalah</td><td>Mar 21, 2026</td></tr>
    <tr><td>https://www.yukaindonesia.com/artikel/inklusi-sosial.html</td><td>https://www.yukaindonesia.com/artikel/inklusi-sosial</td><td>Mar 20, 2026</td></tr>
    <tr><td>https://www.yukaindonesia.com/artikel/program-pemberdayaan-anak-berkebutuhan-khusus.html</td><td>https://www.yukaindonesia.com/artikel/program-pemberdayaan...</td><td>Mar 19, 2026</td></tr>
  </tbody>
</table>

<h2>Before vs After</h2>

<div class="before-after">
  <div class="before-box">
    <div class="box-title">❌ SEBELUM</div>
    <div class="box-item">Sitemap: yukaindonesia.com/artikel/tunaganda-adalah.html</div>
    <div class="box-item">Nav links: href="../index.html" href="../blog.html"</div>
    <div class="box-item">Article links: href="disabilitas-adalah.html"</div>
    <div class="box-item">Workflow: pakai $file (artikel/slug.html)</div>
    <div class="box-item">GSC: 4 "Page with redirect" + 7 "Alternate page"</div>
    <div class="box-item">388 link internal berekstensi .html</div>
  </div>
  <div class="after-box">
    <div class="box-title">✅ SESUDAH</div>
    <div class="box-item">Sitemap: www.yukaindonesia.com/artikel/tunaganda-adalah</div>
    <div class="box-item">Nav links: href="../" href="../blog"</div>
    <div class="box-item">Article links: href="disabilitas-adalah"</div>
    <div class="box-item">Workflow: pakai $slug (clean URL)</div>
    <div class="box-item">0 sisa .html internal links di 63 artikel</div>
    <div class="box-item">Validasi GSC akan konfirmasi dalam 1-2 minggu</div>
  </div>
</div>

<h2>Detail Fix per File</h2>

<table>
  <thead>
    <tr>
      <th>File Artikel</th>
      <th>Nav Links Fixed</th>
      <th>Internal Links Fixed</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>bisindo-adalah.html</td><td>15</td><td>20</td><td>35</td></tr>
    <tr><td>csr-pendidikan.html</td><td>17</td><td>28</td><td>45</td></tr>
    <tr><td>disabilitas-intelektual-adalah.html</td><td>16</td><td>27</td><td>43</td></tr>
    <tr><td>floor-time-terapi.html</td><td>16</td><td>17</td><td>33</td></tr>
    <tr><td>intervensi-dini.html</td><td>18</td><td>44</td><td>62</td></tr>
    <tr><td>latihan-motorik-halus.html</td><td>15</td><td>23</td><td>38</td></tr>
    <tr><td>program-pembelajaran-individual.html</td><td>15</td><td>27</td><td>42</td></tr>
    <tr><td>slb-terdekat.html</td><td>15</td><td>43</td><td>58</td></tr>
    <tr><td>terapis-speech-delay.html</td><td>16</td><td>16</td><td>32</td></tr>
    <tr style="background:#f4f6fb;font-weight:bold"><td>TOTAL</td><td>143</td><td>245</td><td>388</td></tr>
  </tbody>
</table>

<h2>Perubahan Workflow Auto-Publish</h2>

<h3>Sebelum (workflow lama)</h3>
<div class="code-block">entry = '&lt;loc&gt;https://yukaindonesia.com/' + $file + '&lt;/loc&gt;'
# $file = "artikel/tunagrahita-adalah.html" → URL salah: non-www + .html</div>

<h3>Sesudah (workflow baru)</h3>
<div class="code-block">CLEAN_URL="https://www.yukaindonesia.com/artikel/$slug"
# $slug = "tunagrahita-adalah" → URL benar: www + tanpa .html</div>

<div class="success-box">
  <strong>Dampak:</strong> Semua artikel yang auto-publish mulai 30 Maret 2026 (tunagrahita-adalah) dan seterusnya akan otomatis menggunakan clean URL yang benar di sitemap.
</div>

<h2 class="page-break">Commits & Files Changed</h2>

<table>
  <thead>
    <tr>
      <th>Commit</th>
      <th>Files</th>
      <th>Deskripsi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="font-family:monospace">030fe6b</td>
      <td>sitemap.xml, publish-scheduled.yml</td>
      <td>Fix sitemap clean URLs (www + no .html) + fix workflow sitemap entry format</td>
    </tr>
    <tr>
      <td style="font-family:monospace">e18701f</td>
      <td>9 artikel/*.html, scripts/fix_html_links.js</td>
      <td>Remove .html dari 388 internal nav + article links di 9 file artikel</td>
    </tr>
  </tbody>
</table>

<h3>Script Fix (Reusable)</h3>
<p>Script <code>scripts/fix_html_links.js</code> sudah tersimpan di repo dan bisa dijalankan ulang jika ada artikel baru yang menggunakan template lama:</p>
<div class="code-block">node scripts/fix_html_links.js
# Output: Files modified: N, Nav links fixed: X, Internal article links fixed: Y</div>

<h2>Next Steps</h2>
<ol>
  <li style="margin-bottom:8px"><strong>[Apr 2026 — ongoing]</strong> Monitor GSC Coverage report — tunggu validasi otomatis Google dalam 1-2 minggu</li>
  <li style="margin-bottom:8px"><strong>[Saat artikel baru ditulis]</strong> Pastikan template artikel baru tidak menggunakan .html di nav links. Jalankan script fix_html_links.js setelah batch artikel baru selesai</li>
  <li style="margin-bottom:8px"><strong>[Apr 2026]</strong> Cek jika ada artikel lain yang masih punya .html di social share links (WhatsApp, Facebook, Twitter) — prioritas rendah karena social share links tidak difollow Googlebot</li>
  <li style="margin-bottom:8px"><strong>[30 Apr 2026]</strong> Review Performa Bulan ke-2 — pastikan kedua GSC issues sudah resolved dalam report</li>
</ol>

<h2>Files & Dokumentasi</h2>
<table>
  <thead>
    <tr><th>File</th><th>Deskripsi</th></tr>
  </thead>
  <tbody>
    <tr><td style="font-size:10px">D:/Projects/Yuka/scripts/fix_html_links.js</td><td style="font-size:10px">Script reusable untuk bulk fix .html links di artikel</td></tr>
    <tr><td style="font-size:10px">D:/Projects/Yuka/sitemap.xml</td><td style="font-size:10px">Sitemap yang sudah difix ke clean URLs</td></tr>
    <tr><td style="font-size:10px">D:/Projects/Yuka/.github/workflows/publish-scheduled.yml</td><td style="font-size:10px">Workflow auto-publish dengan clean URL sitemap entry</td></tr>
    <tr><td style="font-size:10px">D:/Projects/Yuka/data/YUKA_GSC_Fix_Redirect_Report.pdf</td><td style="font-size:10px">PDF laporan ini</td></tr>
  </tbody>
</table>

${footerHtml}

</body></html>`;

const outPath = path.join(PROJECT_DIR, 'data', 'report_gsc_fix_redirect.html');
fs.writeFileSync(outPath, html);
console.log('HTML written:', outPath);

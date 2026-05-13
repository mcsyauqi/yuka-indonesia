# Yuka Indonesia - yukaindonesia.com

## Project Snapshot (Updated 2026-05-13)

YUKA Indonesia adalah static HTML SEO/fundraising site untuk Yayasan Ukhuwah Kaffah Amanatullah, fokus pendidikan inklusi anak berkebutuhan khusus (ABK), donasi, zakat, CSR pendidikan, terapi, dan edukasi orang tua/guru.

### Brand & Audience
- Brand: YUKA - Yayasan Ukhuwah Kaffah Amanatullah
- Program utama: Sekolah Inklusi Taruna Imani, pendidikan inklusi ABK, program terapi, donasi/beasiswa, sosial dan dakwah Islam
- Target: orang tua ABK, donatur, relawan, guru/pendamping pendidikan khusus, perusahaan CSR
- Tone: hangat, caring, profesional, informatif, islami
- Visual: navy `#2B3A67`, gold `#FFD700`, accent red/cyan, font Poppins + Amiri

### Tech Stack
- Static HTML + CSS + vanilla JS, no app framework
- Hosting: Vercel with `cleanUrls: true`
- Main config: `vercel.json`, `robots.txt`, `llms.txt`
- CSS: `assets/css/style.css` and minified `assets/css/style.min.css`
- JS: `assets/js/main.js`, `assets/js/main.min.js`, `assets/js/analytics.js`
- Analytics: GA4 `G-LDXC5GQF61`

### Core Site Files
- Main pages: `index.html`, `tentang.html`, `program.html`, `donasi.html`, `blog.html`, `galeri.html`, `kontak.html`, `404.html`
- Commercial landing pages: `yayasan-abk-yogyakarta.html`, `sekolah-inklusi-sleman.html`, `donasi-pendidikan-abk.html`, `zakat-pendidikan-abk.html`, `csr-pendidikan-inklusi.html`
- Articles: 63 HTML files under `artikel/`
- Sitemaps: `sitemap.xml`, `sitemap-pages.xml`, `sitemap-articles.xml`, `sitemap-images.xml`, `sitemap-index.xml`
- RSS: `feed.xml`
- Assets: `Dokumentasi/`, `Logo/`, `Team/`, `Flyer Zakat/`, `Sertifikat dan Legalitas/`, `assets/images/banks/`
- Report theme assets: `report-assets/brand.json`, `report-assets/header.html`, `report-assets/footer.html`

### Publish Automation
- Scheduled publish workflow: `.github/workflows/publish-scheduled.yml`
- Runs daily at 02:00 UTC / 09:00 WIB
- Reads `publish-schedule.json`
- For entries with `date <= today`, inserts cards into `blog.html`, appends clean URLs to `sitemap.xml`, removes published entries from `publish-schedule.json`, commits, pushes, and sends email notification
- Important: before relying on scheduled publish, check that referenced article files actually exist.

### Current Data Snapshot (2026-05-13)
- `publish-schedule.json`: 428 remaining entries
- Existing files referenced by schedule: 26
- Missing future article files referenced by schedule: 402
- Sitemaps: `sitemap.xml` 71 URLs, `sitemap-pages.xml` 12 URLs, `sitemap-articles.xml` 63 URLs, `sitemap-images.xml` 303 URLs, `sitemap-index.xml` 3 refs
- `feed.xml`: 63 items, lastBuildDate `Tue, 25 Mar 2026 07:00:00 +0700`
- Keyword data:
  - `YUKA_Keyword_Database.xlsx`
  - `keyword_research_new.json` 280 rows
  - `keyword_research_filtered.json` 183 rows
  - `keyword_research_batch3.json` 47 rows
  - `data/new_keywords_batch4.json` 275 keywords
  - `data/new_keywords_expanded.json` 421 keywords
- GSC/report data lives under `data/` and `reports/`

### Important Current Caveats
- 63/63 article files currently have clean canonical URLs, no article `.html` hrefs, no `.html` social-share URLs, GA4 present, and `analytics.js` present.
- `blog.html` top article card links have been normalized to clean URLs; local audit currently reports 0 `.html` article-card links.
- `donasi.html` includes impact-based nominal cards before the bank-transfer block to improve donation conversion clarity.
- `tentang.html` uses `Logo/Logo.webp` in the logo meaning section; local image audit currently reports 0 referenced images over 1MB.
- Many report/script/screenshot artifacts are untracked existing work. Do not delete or reset them unless explicitly asked.
- `data/node_modules/` is dependency code for report/doc generation; do not treat it as project source.
- Latest observed Git HEAD during scan: check `git rev-parse --short HEAD` before making release/deploy claims.

## Trello Reporting (Post-Task Workflow)

Setiap kali menyelesaikan tugas terkait website yukaindonesia.com, **WAJIB** buat kartu di Trello SEO board dan generate laporan PDF.

### Trello Details
- **SEO Board ID**: `69b894ffb5e27a49caff86b7`
- **SEO Done List ID**: `69bd74749a9518237a1b023d`
- **SMM**: Tidak dikelola Claude (sudah ada yang handle)
- **Syauqi Member ID**: `58f95f285a8d5d5d65949327`

### Workflow
1. Buat kartu di **Done** list (paling atas, pos=top)
2. Set `name` = judul tugas yang deskriptif
3. Set `due` = tanggal hari ini, `dueComplete` = true
4. Set `idMembers` = Syauqi (`58f95f285a8d5d5d65949327`)
5. Set `desc` = deskripsi lengkap (Status, Tanggal, PIC, Ringkasan, Yang Dikerjakan, Hasil, Commits)
6. Generate PDF laporan, simpan ke `reports/` folder
7. Attach PDF ke kartu Trello
8. Gunakan `/rankcrown-report` skill (adaptasi per proyek) atau panggil workflow manual

### Trello API
Credentials: `D:/Projects/Creativism App/.env` (TRELLO_API_KEY, TRELLO_TOKEN)


---

## Wiki Knowledge Base
Path: D:/Projects/_wiki

Di akhir percakapan yang menghasilkan informasi baru (keputusan bisnis, data, insight, hasil kerja), simpan ke wiki Obsidian terpusat. Plugin claude-obsidian mengelola vault ini.

When you need context not already in this project:
1. Read wiki/hot.md first (recent context cache)
2. If not enough, read wiki/index.md
3. Only then drill into specific wiki pages

Do NOT read the wiki for general coding questions or tasks unrelated to business context.

---

## Article Template: URL Standards

### Social Share Buttons
Social share buttons di setiap artikel HARUS menggunakan **clean URL tanpa .html**:

```html
<!-- BENAR ✅ -->
<a href="https://wa.me/?text=...https://yukaindonesia.com/artikel/{slug}" ...>
<a href="https://www.facebook.com/sharer/sharer.php?u=https://yukaindonesia.com/artikel/{slug}" ...>
<a href="https://twitter.com/intent/tweet?...url=https://yukaindonesia.com/artikel/{slug}" ...>

<!-- SALAH ❌ — Jangan pakai .html -->
<a href="https://wa.me/?text=...https://yukaindonesia.com/artikel/{slug}.html" ...>
```

**Kenapa:** URL `.html` di social share → user share → Google crawl URL `.html` → redirect → GSC "Page with Redirect" issue.

### Navigation & Internal Links
- Nav links: `href="../tentang"` (bukan `href="../tentang.html"`)
- Internal artikel links: `href="slug"` (bukan `href="slug.html"`)

### Fix Scripts
- `scripts/fix_html_links.js` — fix nav & internal relative links
- `scripts/fix_social_share_html_links.js` — fix .html di social share buttons (WA/FB/Twitter)

Jalankan kedua script setelah batch generate artikel untuk memastikan 0 .html links.

### JSON-LD @id Field
Note: JSON-LD schema `@id` di beberapa artikel masih menggunakan `.html` URL — ini separate issue dari social share dan tidak langsung menyebabkan GSC redirect errors. Akan di-fix di batch tersendiri.

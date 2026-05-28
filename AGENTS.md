# Yuka Indonesia - yukaindonesia.com

## Project Snapshot (Updated 2026-05-13)

YUKA Indonesia adalah static HTML SEO/fundraising site untuk Yayasan Ukhuwah Kaffah Amanatullah, fokus pendidikan inklusi anak berkebutuhan khusus (ABK), donasi, zakat, CSR pendidikan, terapi, dan edukasi orang tua/guru.

### Brand & Audience
- Brand: YUKA - Yayasan Ukhuwah Kaffah Amanatullah
- Program utama: Sekolah Inklusi Taruna Imani, pendidikan inklusi ABK, program terapi, donasi/beasiswa, sosial dan dakwah Islam
- Target: orang tua ABK, donatur, relawan, guru/pendamping pendidikan khusus, perusahaan CSR
- Tone: hangat, caring, profesional, informatif, islami
- Visual: navy `#2B3A67`, gold `#FFD700`, accent red `#E53935` / cyan `#00BCD4`, font Poppins + Amiri
- Logo: `Logo/Logo.webp` (180×60), favicon `Icon.ico`
- Address: Jl. Kronggahan Raya II, RT 04 RW 07, Kronggahan II, Trihanggo, Gamping, Sleman (Utara RSA UGM)
- WhatsApp: +62 812-2991-2332
- Email: info@yukaindonesia.com
- GA4: `G-LDXC5GQF61`

### Tech Stack
- Static HTML + CSS + vanilla JS, no app framework
- Hosting: Vercel with `cleanUrls: true`
- Main config: `vercel.json`, `robots.txt`, `llms.txt`
- CSS: `assets/css/style.css` (68KB) and minified `assets/css/style.min.css` (51KB)
- JS: `assets/js/main.js` (18KB), `assets/js/main.min.js` (17KB), `assets/js/analytics.js` (15KB)
- Report generation: `data/node_modules/` has `docx` dependency for DOCX report generation
- IndexNow key: `18e6b8d14c264b7533b34b39f60e71db` (file exists at root)

### Core Site Files
- Main pages (8): `index.html`, `tentang.html`, `program.html`, `donasi.html`, `blog.html`, `galeri.html`, `kontak.html`, `404.html`
- Commercial landing pages (5): `yayasan-abk-yogyakarta.html`, `sekolah-inklusi-sleman.html`, `donasi-pendidikan-abk.html`, `zakat-pendidikan-abk.html`, `csr-pendidikan-inklusi.html`
- Articles: 65 HTML files under `artikel/`
- Sitemaps: `sitemap.xml`, `sitemap-pages.xml` (12 URLs), `sitemap-articles.xml` (65 URLs), `sitemap-images.xml` (303 URLs), `sitemap-index.xml` (3 refs)
- RSS: `feed.xml` (65 items)
- Assets: `Dokumentasi/` (~298 WebP photos), `Logo/` (7 files), `Team/` (4 files: Bu Yupie, Pak Diyat), `Flyer Zakat/`, `Sertifikat dan Legalitas/` (NPWP, SK Domisili, SK Kemenkumham)
- Report theme assets: `report-assets/brand.json`, `report-assets/header.html`, `report-assets/footer.html`, `report-assets/logo.webp`

### Publish Automation
- Scheduled publish workflow: `.github/workflows/publish-scheduled.yml`
- Runs daily at 02:00 UTC / 09:00 WIB (also manual trigger via `workflow_dispatch`)
- Reads `publish-schedule.json`
- For entries with `date <= today`:
  1. Inserts cards into `blog.html` (after `<div class="blog-grid" id="blogGrid">`)
  2. Regenerates `sitemap.xml`, `sitemap-pages.xml`, and `sitemap-articles.xml` via `scripts/regen-sitemaps.js`
  3. Removes published entries from `publish-schedule.json`
  4. Commits and pushes
  5. Sends email notification to ahmadthariqsyauqi@gmail.com via SMTP
- **Important**: before relying on scheduled publish, check that referenced article files actually exist. As of 2026-05-13, 402 future entries had missing article files.

### Sitemap Decision
- Decision 2026-05-28: keep the multi-sitemap structure (`sitemap.xml`, `sitemap-pages.xml`, `sitemap-articles.xml`, `sitemap-images.xml`, `sitemap-index.xml`) and make article/page sitemap sync automatic instead of deleting split sitemaps.
- Source of truth for article URLs: `artikel/*.html`.
- Regeneration command: `node scripts/regen-sitemaps.js`.
- Scheduled publish workflow calls the generator after publishing due articles so `sitemap-articles.xml` no longer lags behind `sitemap.xml`.

### Current Data Snapshot (2026-05-13)
- `publish-schedule.json`: 428 remaining entries (dates from 2026-05-14 through end of year)
  - Schedule pattern: 3 articles/day Mon-Sat from Aug onwards; 1 article every 3 days May-Jul
  - Existing article files: 63 in `artikel/`
  - Most future entries (post-Jul 2026) reference articles NOT yet created
- Keyword data:
  - `YUKA_Keyword_Database.xlsx`
  - `keyword_research_new.json` — 280 rows
  - `keyword_research_filtered.json` — 183 rows
  - `keyword_research_batch3.json` — 47 rows
  - `data/new_keywords_batch4.json` — 275 keywords
  - `data/new_keywords_expanded.json` — 421 keywords
  - Total: ~696 keywords across 5 batches
- Commercial keyword targets: `data/commercial-keyword-targets-2026-05-01.json` — 5 commercial landing pages
- GSC data: `data/gsc_by_impressions.json`, `data/gsc_by_query.json`, `data/gsc_by_page.json`, `data/gsc_by_query_page.json`

### Article Template Structure
Each article in `artikel/` follows this template:
```
<!DOCTYPE html>
<html lang="id">
<head>
  - GA4 tracking script (G-LDXC5GQF61)
  - SEO meta tags (title, description, keywords, canonical, robots)
  - Open Graph meta (og:type article, og:url, og:title, og:description, og:image)
  - Favicon: ../Icon.ico
  - Google Fonts: Poppins + Amiri (preload)
  - Stylesheet: ../assets/css/style.min.css
  - JSON-LD: Article schema (headline, description, image, author, publisher, dates)
  - JSON-LD: FAQPage schema (3-5 questions)
  - Inline <style> for article-specific CSS (header, body, TOC, images, share, tags, related)
</head>
<body>
  - <nav> with logo, nav links (clean URLs: /, /tentang, /program, /galeri, /blog, /kontak, /donasi)
  - <header class="article-header"> with breadcrumb, category badge, h1, meta (date, read time, author)
  - Featured image (from Dokumentasi/)
  - <article class="article-content"> with:
    - TOC (ordered list with anchor links)
    - Article body (h2/h3 sections, inline images with figcaption)
    - Related reading block (cross-links to cluster articles)
    - Conclusion
    - Related articles grid (3 cards)
  - Tags section
  - Share buttons (WhatsApp, Facebook, Twitter) — MUST use clean URLs
  - CTA section (donasi + WhatsApp)
  - Footer (logo, links, contact address)
  - Scripts: ../assets/js/main.min.js (defer), ../assets/js/analytics.js (defer)
</body>
```

### Important Current Caveats
- 65/65 article files currently have clean canonical URLs, no article `.html` hrefs, no `.html` social-share URLs, GA4 present, and `analytics.js` present.
- `blog.html` top article card links have been normalized to clean URLs; local audit currently reports 0 `.html` article-card links.
- Many report/script/screenshot artifacts are untracked existing work. Do not delete or reset them unless explicitly asked.
- `data/node_modules/` is dependency code for report/doc generation; do not treat it as project source.
- JSON-LD `@id` in some articles still uses `.html` URL — separate issue from social share, not causing GSC redirect errors.

---

## Scripts Inventory

### URL Fix Scripts (run after batch article generation)
1. **`scripts/fix_html_links.js`** — Fix nav & internal relative links in articles (`../page.html` → `../page`, `slug.html` → `slug`)
2. **`scripts/fix_social_share_html_links.js`** — Fix `.html` in social share button URLs (WA/FB/Twitter) — prevents GSC "Page with Redirect" issues

### SEO & Indexing
3. **`scripts/submit_indexnow.py`** — Batch submit URLs to IndexNow API (reads from `sitemap.xml` or CLI args)

### Trello Report Scripts (in `scripts/`)
4. **`scripts/create_todo_cards.js`** — Create Trello todo cards
5. **`scripts/create_done_card_gsc_failed.js`** — Create done card for GSC failed validation fix
6. **`scripts/fix_cwv.js`** — Fix Core Web Vitals issues
7. **`scripts/fix_seo_csv_ideas.js`** — Fix SEO CSV-based improvements
8. **`scripts/trello_*.js`** (15+ files) — Various Trello card creation and report attachment scripts for specific article topics
9. **`scripts/generate_*.js`** (4 files) — Generate HTML/PDF reports for specific tasks

### Data Scripts (in `data/`)
10. **`data/generate_schedule.js`** — Generate publish schedule entries
11. **`data/create_brief_doc.js`** / **`data/create_yuka_brief*.js`** — Generate YUKA brief DOCX documents
12. **`data/create_report.py`** — Generate SEO review report
13. **`data/report_*.js`** — HTML report generators (donasi, fix_tunaganda, gsc_fix_redirect, search_filter, seo_review_bulan1)
14. **`data/trello_*.js`** — Trello update scripts (CWV fix, description updates)

---

## Reports Generated (in `reports/` and `data/`)
- 33 files in `reports/` — HTML and PDF reports for various SEO tasks, article deployments, GSC fixes, CWV verifications
- 6 PDF reports in `data/` — CWV fix, blog fix, GSC redirect fix, donasi optimization, SEO review month 1, search filter
- Screenshots in `screenshots/` — 9 screenshots for deployment verification and before/after comparisons

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
- Root pages use absolute clean: `href="/donasi"`, `href="/blog"`, etc.

### Fix Scripts
- `scripts/fix_html_links.js` — fix nav & internal relative links
- `scripts/fix_social_share_html_links.js` — fix .html di social share buttons (WA/FB/Twitter)

Jalankan kedua script setelah batch generate artikel untuk memastikan 0 .html links.

### JSON-LD @id Field
Note: JSON-LD schema `@id` di beberapa artikel masih menggunakan `.html` URL — ini separate issue dari social share dan tidak langsung menyebabkan GSC redirect errors. Akan di-fix di batch tersendiri.

---

## Vercel Configuration
```json
{
  "cleanUrls": true,
  "redirects": [
    { "source": "/index.html", "destination": "/", "statusCode": 301 },
    { "source": "/tentang.html", "destination": "/tentang", "statusCode": 301 },
    { "source": "/program.html", "destination": "/program", "statusCode": 301 },
    { "source": "/galeri.html", "destination": "/galeri", "statusCode": 301 },
    { "source": "/blog.html", "destination": "/blog", "statusCode": 301 },
    { "source": "/kontak.html", "destination": "/kontak", "statusCode": 301 },
    { "source": "/donasi.html", "destination": "/donasi", "statusCode": 301 }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

---

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

## External Resources

### Google Spreadsheet
- **ID**: `1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc`
- **Sheets**: Artikel Blog, Halaman Utama, Ringkasan SEO, Riset Keyword Baru, Riset Keyword Batch 2, Riset Keyword Batch 3
- **Access**: Google Sheets API via OAuth (credentials in Creativism App `.env`)

### Google Drive
- Folder ID: `14NRs18DkGWogwtMaJlcjx3P9rQaIbcII`
- Location: Business/yuka/

### Report Branding
- `report-assets/brand.json` — brand colors, font, logo path, website
- `report-assets/header.html` — branded HTML report header (logo + gradient)
- `report-assets/footer.html` — branded HTML report footer (navy bar + gold border)
- `report-assets/logo.webp` — logo for reports

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

## Content Categories & Topic Clusters

### Primary Topics (63 existing articles)
| Category | Count | Examples |
|----------|-------|---------|
| Pendidikan | ~40 | ABK, pendidikan inklusi, SLB, homeschooling, GPK, shadow teacher, kecerdasan majemuk |
| Terapi | ~10 | Terapi ABA, wicara, okupasi, bermain, floor time, sensori integrasi, memasak |
| Disabilitas | ~10 | Tunagrahita, tunadaksa, tunalaras, tunarungu, tunawicara, tunaganda, cerebral palsy, disabilitas intelektual |
| Donasi | ~3 | Donasi online, CSR pendidikan, transparansi donasi |
| Lokal | ~3 | Panti asuhan Yogyakarta, SLB terdekat, wisata edukasi ABK |
| Kisah | ~3 | Kisah Ilham hafiz, Ilham mandiri telur asin, program Ramadhan |

### Article Naming Convention
- Slug format: `{topic-keyword}.html` (e.g., `adhd-adalah.html`, `terapi-aba.html`)
- Canonical URL: `https://www.yukaindonesia.com/artikel/{slug}` (no .html)
- Image naming: `{event/location}-{description}-{number}.webp`

### Future Content Pipeline
- 428 entries in `publish-schedule.json` span May 2026 – Dec 2026
- Most entries after Jul 2026 reference articles that DO NOT yet exist and need to be created
- Topics expand into: AI+disability, therapy subtypes, legal/policy, parenting strategies, specific conditions

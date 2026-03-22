# YUKA - Project Rules & Context

> Baca file ini dulu sebelum melanjutkan pekerjaan.

## Brand Identity
- **Nama**: YUKA - Yayasan Ukhuwah Kaffah Amanatullah
- **Tagline**: Sekolah Inklusi Taruna Imani | Yogyakarta
- **Niche**: Pendidikan Anak Berkebutuhan Khusus (ABK), Donasi, Yayasan Sosial
- **Target Market**: Orang tua ABK, donatur, relawan, guru pendidikan khusus
- **Tone**: Hangat, caring, profesional, informatif, islami
- **Primary Color**: #2B3A67 (Navy Blue)
- **Secondary Color**: #FFD700 (Gold)
- **Accent**: #E53935 (Red), #00BCD4 (Cyan)
- **Font**: Poppins (primary), Amiri (Arabic)

## Tech Stack
- Static HTML + CSS (no framework)
- Hosted on Vercel (`cleanUrls: true`)
- GitHub Actions: `publish-scheduled.yml` (daily 09:00 WIB auto-publish)
- GA4 tracking on all pages
- Sitemap: `/sitemap.xml`, Robots: `/robots.txt`

## Folder Structure
```
D:/Claude/Projects/Yuka/
├── artikel/          # All article HTML files (63 files)
├── assets/css/       # Global stylesheet (style.css)
├── Dokumentasi/      # Photos for articles
├── Logo/             # Logo variations + Facebook cover
├── Team/             # Team member photos
├── data/             # Scripts, reports
├── blog.html         # Blog listing page
├── publish-schedule.json  # Auto-publish schedule
├── sitemap.xml
├── robots.txt
├── vercel.json
└── .github/workflows/publish-scheduled.yml
```

## Spreadsheet
- **ID**: `1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc`
- **Sheets**: Artikel Blog, Halaman Utama, Ringkasan SEO, Riset Keyword Baru, Riset Keyword Batch 2, Riset Keyword Batch 3
- **Access**: Google Sheets API via OAuth (credentials in Creativism App `.env`)

## Current State (22 Mar 2026)
- **63 articles** exist as HTML files
- **21 articles** published (visible in blog.html)
- **43 articles** in publish-schedule.json (next: 24 Mar, last: 28 Jul 2026)
- **Social Media**: SKIP (no Instagram scheduling needed)

## Google Drive
- Folder ID: `14NRs18DkGWogwtMaJlcjx3P9rQaIbcII`
- Location: Business/yuka/

## Trello
- Board: `69b894ffb5e27a49caff86b7` (seo-yukaindonesia_com)
- Done list: `69bd74749a9518237a1b023d`

## Important Notes
- Canonical URLs: tanpa .html extension
- Images: use from Dokumentasi/ folder, WebP preferred
- Schema: BlogPosting + BreadcrumbList + FAQPage per article
- Internal linking: min 5 links per article
- Git: secrets in .env blocked by GitHub secret scanning - use unblock URLs if needed

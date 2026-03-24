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
- **445 articles** in publish-schedule.json (24 Mar 2026 - 31 Dec 2026)
- **696 keywords** researched across 5 batches
- **Schedule**: 3 articles/day Mon-Sat, auto-publish via GitHub Actions
- **Social Media**: SKIP (no Instagram scheduling needed)

## Keyword Batches
| Batch | Keywords | Source |
|-------|----------|--------|
| Batch 1-3 | 133 | Manual research |
| Batch 4 | 275 | DataForSEO SERP + PAA |
| Batch 5 | 421 | 10 topic clusters |
| **Total** | **696** | |

## Schedule Distribution
| Month | Articles |
|-------|----------|
| Mar 2026 | 3 |
| Apr 2026 | 10 |
| May 2026 | 10 |
| Jun 2026 | 10 |
| Jul 2026 | 19 |
| Aug 2026 | 78 |
| Sep 2026 | 78 |
| Oct 2026 | 81 |
| Nov 2026 | 75 |
| Dec 2026 | 81 |

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

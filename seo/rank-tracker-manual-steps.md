# Rank Tracker Yuka: 40 keyword prioritas, langkah manual yang tersisa

Status per 2026-09-11: semua persiapan sudah jadi, tinggal satu langkah manual (login Ahrefs)
sebelum skrip bisa jalan sampai selesai.

Kartu Trello: https://trello.com/c/zsuUHPDj (board seo-yukaindonesia_com)

## Kenapa berhenti

Sesi web Ahrefs bersama membalas `401 Unauthorized` untuk SEMUA panggilan `/v4`, bukan cuma
Rank Tracker. Dibuktikan live 2026-09-11:

```
$ ahrefs-web-pp-cli doctor --transport web
[x] session.json exists (C:\Users\Mcsyauqi\.ahrefs-web-pp-cli\session.json)
[x] session.json parses
[x] has at least 1 cookie
[x] cookie age < 30 days (356h37m0s)
[ ] live /v4 data call (web POST https://app.ahrefs.com/v4/tkGetSubscriptions: 401 ["Error","Unauthorized"])

$ ahrefs-web-pp-cli rt projects --transport web --agent
error: web POST https://app.ahrefs.com/v4/rtGetProjects: 401 ["Error","Unauthorized"]
```

Cookie-nya ADA dan belum kedaluwarsa secara umur, tapi sudah dicabut sisi server. Ini bukan
masalah payload: `400 InvalidInput` berarti auth sehat, `401` berarti sesi mati.

Jalur lain yang sudah dipertimbangkan dan tidak dipakai:

- `AHREFS_API_KEY` / `ahrefs-pp-cli`: DILARANG tanpa izin eksplisit Syauqi.
- Channel Slack `#ahrefs-ss`: hanya menghasilkan screenshot Site Explorer dan Keywords
  Explorer (baca). Tidak ada Rank Tracker di sana, dan operasi tulis tidak mungkin lewat foto.
- Menyuntik cookie `session.json` ke `fetch` Node atau Playwright: sudah terbukti tetap 401,
  karena `cf_clearance` terikat sidik jari TLS/HTTP2 Chrome.

## Yang harus Syauqi lakukan (5 menit)

1. Pulihkan sesi. Coba yang murah dulu:

   ```
   ahrefs-web-pp-cli auth refresh
   ```

   Kalau profil Chrome-nya masih login, ini selesai tanpa interaksi. Kalau tidak:

   ```
   ahrefs-web-pp-cli auth login
   ```

   lalu login manual di jendela Chrome yang terbuka. Jangan jalankan ini saat banyak agen
   lain sedang memakai `ahrefs-web`, karena `auth login` bisa meng-evict cookie bersama.

2. Pastikan sudah hijau:

   ```
   ahrefs-web-pp-cli doctor --transport web
   ```

   Baris `live /v4 data call` harus `[x]`.

3. Pastikan ada project Rank Tracker untuk `yukaindonesia.com`. Kalau belum ada, buat di UI
   Ahrefs (Rank Tracker, Add project, domain `yukaindonesia.com`, negara Indonesia).

## Sesudah itu semuanya otomatis

```
cd D:/Projects/Yuka
node scripts/rank-tracker-setup.mjs --dry-run    # cek dulu, tidak menulis apa pun
node scripts/rank-tracker-setup.mjs --yes        # tambah 40 keyword
node scripts/rank-tracker-weekly.mjs --dry-run   # cek tarikan
node scripts/rank-tracker-weekly.mjs             # tulis file mingguan + baris sheet
```

Kedua skrip **menolak jalan** selama `doctor` merah (exit code 2), jadi tidak ada risiko
menulis baseline palsu ke sheet saat sesi mati.

Catatan kontrak CLI yang penting (deskripsi kartu Trello lama menyebut bentuk yang tidak ada):

- Subcommand-nya `rt add-keyword` (TUNGGAL), bukan `rt add-keywords`.
- Tidak ada flag `--keywords-file` dan tidak ada flag `--language`. Yang ada:
  `--keyword`, `--project-id`, `--country`, `--yes`, `--no-confirm`.
- Default `rt add-keyword` adalah dry-run; perlu `--yes` untuk benar-benar menulis.
- Respons tulis TIDAK bisa dipercaya. Bukti sah cuma `rt settings` yang menunjukkan
  `number_of_active_keywords` benar-benar naik. Skrip setup sudah mengecek ini dan keluar
  dengan exit code 4 kalau read-back tidak mengonfirmasi.
- `rt keywords-table-dynamic` bisa balas HTTP 200 dengan `rows: []`. Itu KEGAGALAN, bukan
  "tracker masih kosong". Skrip mingguan sudah memperlakukannya sebagai error.
- Posisi baru terisi setelah siklus update harian Ahrefs (sampai 24 jam). Kolom posisi kosong
  tepat sesudah menambah keyword itu normal.

## Yang sudah siap di disk

| Berkas | Isi |
|---|---|
| `seo/rt-keywords.txt` | 40 keyword final, satu per baris, siap dibaca skrip setup |
| `seo/rt-keywords-baseline.json` | 40 keyword + seksi asal + volume + URL target + baseline GSC |
| `seo/rt-keywords-baseline.csv` | versi tabel dari file di atas |
| `seo/rt-weekly/` | folder tujuan tarikan mingguan (`YYYY-Www.json`) |
| `scripts/rank-tracker-setup.mjs` | pendaftaran 40 keyword, bergerbang doctor |
| `scripts/rank-tracker-weekly.mjs` | tarikan mingguan + append ke tab sheet `Rank Tracker` |

Sheet tujuan: **YUKA Keyword Database - SEO**
(`1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc`), tab `Rank Tracker`.

## Komposisi 40 keyword

Persis seperti yang diminta deskripsi kartu:

- 6 keyword bagian F (ditandai "sudah ada" di sheet tapi nol impresi di GSC)
- 1 keyword bagian C (`inklusi sosial`, posisi 12,7)
- 1 keyword bagian B (`keutamaan merawat anak yatim`, posisi 10)
- 4 keyword bagian D (`autis adalah`, `adhd adalah`, `autisme adalah`, `down syndrome adalah`)
- 28 head term bagian E dengan volume tertinggi (`disabilitas` 12.100 sampai
  `mainan montessori` 480)

Catatan: `kode icd 10 cerebral palsy` dan `kode icd-10 cerebral palsy` masuk berdua karena
urutan volume diambil apa adanya dari brief. Keduanya menuju halaman yang sama. Kalau slot
tracker mahal, ganti varian bertanda hubung dengan `contoh motorik kasar dan halus` (480).

## Baseline GSC sebagai pembanding

Diambil live 2026-09-11 dari GSC Search Analytics, properti `https://www.yukaindonesia.com/`,
jendela 2026-08-12 sampai 2026-09-08 (28 hari, `dataState=final`).

Hanya **3 dari 40** keyword yang punya data posisi di GSC:

| Keyword | Posisi | Impresi | Klik |
|---|---|---|---|
| inklusi sosial | 15,0 | 7 | 0 |
| adhd adalah | 68,0 | 16 | 0 |
| down syndrome adalah | 69,0 | 2 | 0 |

37 sisanya nol impresi. Ini justru menegaskan alasan kartu ini ada: tanpa Rank Tracker,
pergerakan klaster besar seperti `disabilitas` (12.100) dan `tuna rungu` (5.400) tidak
terpantau sama sekali. Semua 40 keyword sudah punya halaman target yang benar-benar ada di
`artikel/` (dicek 40/40 file hadir).

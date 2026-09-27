# Uji SOV AI: halaman komparasi homeschooling vs sekolah inklusi

Halaman: https://www.yukaindonesia.com/artikel/homeschooling-vs-sekolah-inklusi
Terbit: 2026-09-28 (commit 5e8d933, deployment Coolify 0egkyarwfgf66tebpyqqprym)
Kartu: https://trello.com/c/Gy7AJsA9

## Prompt uji (tetap, dipakai ulang tiap putaran)

1. homeschooling vs sekolah inklusi untuk anak berkebutuhan khusus, mana yang lebih baik?
2. perbandingan homeschooling dan sekolah inklusi dari sisi biaya, ijazah, dan sosialisasi anak
3. apakah anak ABK lebih baik homeschooling atau sekolah inklusi di Indonesia?
4. tabel perbedaan homeschooling dan sekolah inklusi untuk anak autis
5. kelebihan dan kekurangan homeschooling dibanding sekolah inklusi menurut peraturan di Indonesia

## Putaran 1: 2026-09-28 (hari terbit, beberapa jam setelah deploy)

| # | Perplexity (web) | ChatGPT (web) | yukaindonesia.com dikutip? |
|---|---|---|---|
| 1 | GAGAL: sesi logout | GAGAL: sesi tidak jalan | tidak terukur |
| 2 | GAGAL: sesi logout | GAGAL: sesi tidak jalan | tidak terukur |
| 3 | GAGAL: sesi logout | GAGAL: sesi tidak jalan | tidak terukur |
| 4 | GAGAL: sesi logout | GAGAL: sesi tidak jalan | tidak terukur |
| 5 | GAGAL: sesi logout | GAGAL: sesi tidak jalan | tidak terukur |

Bukti kegagalan (bukan hasil negatif, alat tidak bisa dipakai):
- `perplexity-web-pp-cli ask` akun #1 dan `--account 2 --transport web --no-fallback`: jawaban literal "Daftar dan ulangi permintaan Anda." (halaman sign-up, cookie #1 ditangkap 767 jam lalu, #2 1731 jam lalu). API fallback sengaja dimatikan (aturan subscription-first).
- `chatgpt-web-pp-cli chat send --account 2`: `--transport ui` dan `browser` -> "chrome failed to start"; `--transport web` -> "web session expired ... sentinel HTTP 401 Could not parse your authentication token".

Catatan metodologi: uji di hari terbit juga belum bermakna karena halaman belum dirayapi. Putaran berikutnya dijadwalkan lewat kartu lanjutan (target 2026-10-05), setelah sesi Perplexity dan ChatGPT di-login ulang (`perplexity-web-pp-cli auth login`, `chatgpt-web-pp-cli auth login --chrome`).

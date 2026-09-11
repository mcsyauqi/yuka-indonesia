# deploy/

Catatan konfigurasi produksi. Isi folder ini **tidak dieksekusi oleh apa pun**; ini rekaman
supaya konfigurasi yang hidup bisa dibaca dan direview lewat git.

## nginx.conf

Salinan nilai field `custom_nginx_configuration` pada aplikasi Coolify
`9jodtdgn6snrqsqaxqw0gav8` (nama `yuka-indonesia`). **Konfigurasi yang sebenarnya dipakai ada
di Coolify, bukan di berkas ini.** Mengedit berkas ini saja tidak mengubah apa pun di produksi.

Untuk mengubah konfigurasi hidup:

```
PATCH https://coolify.mcsyauqi.com/api/v1/applications/9jodtdgn6snrqsqaxqw0gav8
  body: {"custom_nginx_configuration": "<base64 dari isi berkas>"}
```

Nilainya **wajib base64**, kalau tidak API balas 422. Sesudah PATCH, konfigurasi baru baru
aktif setelah deployment berikutnya (push ke main sudah cukup, webhook Coolify menyala).

`vercel.json` di root adalah konfigurasi mati, disimpan hanya sebagai catatan niat routing
lama. Situs ini dilayani kontainer nginx di Coolify, bukan Vercel.

## Kenapa ada blok 404 untuk folder kerja

Seluruh isi repo disajikan sebagai berkas statis, jadi **setiap berkas yang di-commit ikut
terbit**. Dibuktikan 2026-09-11: `https://www.yukaindonesia.com/seo/cannibal-decisions.md`
balas 200 (2.027 byte) dan `/scripts/regen-sitemaps.js` balas 200 (7.446 byte). Isinya riset
keyword, keputusan kanibalisasi, export GSC, laporan audit, dan skrip build, semuanya data
kerja internal yang tidak seharusnya bisa dibaca kompetitor.

Blok `location ^~ /<folder>/ { return 404; }` menutup jalur itu tanpa menghapus berkasnya dari
repo. `^~` wajib dipakai, bukan prefix biasa: lokasi prefix biasa kalah dari regex penghapus
`.html` di bawahnya, sehingga `/seo/laporan-xxx.html` akan tetap di-301 alih-alih diblokir.

Tidak ada halaman, stylesheet, skrip, maupun sitemap yang merujuk folder-folder itu, jadi
pemblokiran tidak memutus apa pun. Kalau nanti ada berkas di salah satu folder itu yang MEMANG
harus publik, pindahkan berkasnya ke `assets/`, jangan melonggarkan aturan ini.

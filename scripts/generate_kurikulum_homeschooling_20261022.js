'use strict';
// Generator artikel "kurikulum homeschooling standar nasional" (cycle #80, antrean 2026-10-22).
// Keyword dari Google Sheet Keyword Data YUKA (tab "Keyword Data"). Fakta dibaca dari PDF resmi:
// Permendikbud 129/2014 (Pasal 4, 7, 8, 10, 11), Permendikbudristek 12/2024 sebagaimana diubah
// Permendikdasmen 13/2025 (struktur kurikulum kesetaraan, SKK), Permendikdasmen 9/2025 (TKA),
// Kepka BSKAP 032/H/KR/2024 (CP, Lampiran IV Paket A/B/C dan Lampiran V pendidikan khusus).
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');
const ROOT = path.resolve(__dirname, '..');
const slug = 'kurikulum-homeschooling-standar-nasional';
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const heroFile = 'Dokumentasi/yuka-kurikulum-homeschooling-hero-20261022.webp';
const IMG = 'assets/images/artikel';

const diagrams = {
  [`${IMG}/${slug}-lapisan.svg`]: svg.cards('Lapisan acuan kurikulum homeschooling', 'Dari aturan sekolahrumah sampai capaian pembelajaran per mata pelajaran', [
    { h: 'Aturan sekolahrumah', color: '#2B3A67', items: ['Permendikbud 129/2014 Pasal 7', 'Kurikulum mengacu kurikulum nasional', 'Boleh kurikulum formal atau kesetaraan', 'Wajib agama, Pancasila dan Kewarganegaraan, bahasa Indonesia'] },
    { h: 'Kurikulum nasional', color: '#00838F', items: ['Permendikbudristek 12/2024, diubah Permendikdasmen 13/2025', 'Memuat struktur kurikulum kesetaraan Paket A, B, C', 'Standar Isi dan SKL terbaru terbit 2025'] },
    { h: 'Capaian pembelajaran', color: '#7A5A06', items: ['Kepka BSKAP 032/H/KR/2024', 'Lampiran IV untuk Paket A, B, C', 'Lampiran V untuk TKLB sampai SMALB', 'Dipecah per fase dan mata pelajaran'] },
  ]),
  [`${IMG}/${slug}-skk.svg`]: svg.grid('Satuan Kredit Kompetensi (SKK) pendidikan kesetaraan', 'Menurut struktur kurikulum kesetaraan dalam Permendikdasmen 13/2025', ['Unsur', 'Ketentuan', 'Makna bagi keluarga'], [
    ['1 SKK', '1 jam tatap muka, atau 2 jam tutorial, atau 3 jam belajar mandiri', 'Belajar mandiri di rumah diakui dengan bobot jam lebih banyak'],
    ['Jam tatap muka', '35 menit Paket A, 40 menit Paket B, 45 menit Paket C', 'Sesuaikan durasi sesi dengan jenjang anak'],
    ['Paket A total', '64, 78, dan 78 SKK untuk Fase A, B, C (220 SKK)', 'Termasuk muatan lokal paling banyak 2 SKK per fase'],
    ['Pemberdayaan dan keterampilan', '14 SKK per fase pada Paket A (gabungan)', 'Ruang untuk keterampilan hidup dan kemandirian'],
  ], [230, 470, 404]),
  [`${IMG}/${slug}-alur.svg`]: svg.flow('Dari rencana belajar sampai penyetaraan', 'Alur umum keluarga homeschooling yang memakai kurikulum nasional', [
    { h: 'Pilih acuan', d: 'Tentukan kurikulum formal atau kesetaraan sesuai Pasal 7 ayat (3) Permendikbud 129/2014.' },
    { h: 'Petakan capaian', d: 'Ambil capaian pembelajaran fase yang sesuai dari Kepka BSKAP 032/H/KR/2024.' },
    { h: 'Susun rencana', d: 'Atur tema, jadwal, dan sumber belajar dengan penyesuaian bagi kebutuhan anak.' },
    { h: 'Nilai berkala', d: 'Pendidik di rumah menilai proses dan kemajuan secara berkesinambungan.' },
    { h: 'Terdaftar resmi', d: 'Pastikan anak tercatat, karena peserta TKA wajib ada di basis data kementerian.' },
    { h: 'Penyetaraan', d: 'Hasil TKA dipakai menyetarakan pendidikan informal dengan pendidikan formal.' },
  ]),
};

const fig = (file, alt, caption, kredit) => {
  const { w, h } = imageSize(path.join(ROOT, file));
  return `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${kredit}</span></figcaption></figure>`;
};
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;

const faq = [
  { q: 'Apakah homeschooling wajib memakai kurikulum nasional?', a: 'Ya. Pasal 7 ayat (1) Permendikbud 129/2014 menyatakan kurikulum yang diterapkan dalam sekolahrumah mengacu kepada kurikulum nasional. Ayat (3) memberi pilihan memakai kurikulum pendidikan formal atau kurikulum pendidikan kesetaraan, dengan pendalaman sesuai minat, potensi, dan kebutuhan anak. Keluarga tetap boleh memperkaya materi di luar kurikulum.' },
  { q: 'Mata pelajaran apa yang wajib dalam homeschooling?', a: 'Pasal 7 ayat (2) Permendikbud 129/2014 mewajibkan penyelenggara sekolahrumah mengajarkan pendidikan agama, pendidikan Pancasila dan Kewarganegaraan, serta bahasa Indonesia. Mata pelajaran lain mengikuti struktur kurikulum nasional yang dipilih, baik formal maupun kesetaraan.' },
  { q: 'Kurikulum nasional yang berlaku sekarang apa?', a: 'Acuannya adalah Permendikbudristek 12/2024 tentang Kurikulum pada PAUD, jenjang pendidikan dasar, dan menengah, yang telah diubah dengan Permendikdasmen 13/2025. Peraturan ini memuat struktur kurikulum untuk satuan pendidikan penyelenggara pendidikan kesetaraan Paket A, B, dan C, serta sekolah luar biasa.' },
  { q: 'Apa itu SKK dalam pendidikan kesetaraan?', a: 'SKK atau Satuan Kredit Kompetensi adalah satuan bobot kompetensi. Satu SKK dicapai melalui 1 jam tatap muka, 2 jam tutorial, atau 3 jam belajar mandiri, atau kombinasi ketiganya. Satu jam tatap muka setara 35 menit untuk Paket A, 40 menit untuk Paket B, dan 45 menit untuk Paket C.' },
  { q: 'Bagaimana anak homeschooling mendapat pengakuan hasil belajar sekarang?', a: 'Permendikdasmen 9/2025 tentang Tes Kemampuan Akademik menyebut murid sekolahrumah sebagai peserta dari jalur pendidikan informal. Pasal 11 ayat (2) menyatakan peserta jalur informal yang mengikuti TKA dan memenuhi kategori hasil berhak memperoleh sertifikat hasil TKA dan dinyatakan lulus dari satuan pendidikan. Peserta wajib terdaftar dalam basis data kementerian.' },
  { q: 'Apakah anak berkebutuhan khusus wajib ikut TKA?', a: 'Pasal 8 ayat (7) Permendikdasmen 9/2025 mengecualikan murid berkebutuhan khusus penyandang disabilitas yang memiliki hambatan intelektual dari kepesertaan TKA. Untuk kondisi lain, tanyakan kepada satuan pendidikan atau dinas pendidikan bagaimana akomodasi tes dan penilaian disediakan bagi anak Anda.' },
  { q: 'Bisakah anak homeschooling pindah ke sekolah formal?', a: 'Bisa. Pasal 10 dan 11 Permendikbud 129/2014 mengatur penerimaan di SD, SMP, dan SMA atau sederajat. Untuk masuk di tengah jenjang, anak mengikuti tes kelayakan dan penempatan dari sekolah yang dituju. Untuk awal kelas 7 atau 10, anak perlu lulus jenjang sebelumnya atau ujian kesetaraan yang berlaku.' },
];

const sections = [
  ['dasar', 'Dasar hukum kurikulum homeschooling'],
  ['pilihan', 'Pilihan kurikulum formal atau kesetaraan'],
  ['struktur', 'Struktur kurikulum kesetaraan dan SKK'],
  ['capaian', 'Capaian pembelajaran sebagai peta belajar'],
  ['menyusun', 'Menyusun rencana belajar di rumah'],
  ['abk', 'Penyesuaian kurikulum untuk anak berkebutuhan khusus'],
  ['penilaian', 'Penilaian hasil belajar dan TKA'],
  ['pindah', 'Pindah ke sekolah formal'],
  ['faq', 'Pertanyaan Umum tentang Kurikulum Homeschooling'],
];

const bodyHtml = `
<div class="jawaban-singkat"><p><strong>Kurikulum homeschooling standar nasional</strong> artinya sekolahrumah di Indonesia wajib mengacu pada kurikulum nasional, sesuai Pasal 7 Permendikbud 129/2014. Keluarga boleh memakai kurikulum pendidikan formal atau kurikulum pendidikan kesetaraan Paket A, B, C, wajib mengajarkan agama, Pancasila dan Kewarganegaraan, serta bahasa Indonesia, lalu memperdalam materi sesuai minat dan kebutuhan anak.</p></div>
<p>Banyak keluarga memilih homeschooling karena ingin keleluasaan. Namun keleluasaan itu tetap berada dalam kerangka kurikulum nasional, agar hasil belajar anak dapat diakui dan anak bisa melanjutkan pendidikan. Aturan tentang kurikulum, struktur, dan penilaian juga berubah dalam beberapa tahun terakhir. Artikel ini merangkum acuan yang berlaku per Oktober 2026 dan cara menerapkannya di rumah, termasuk untuk anak berkebutuhan khusus.</p>
<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>

<h2 id="dasar">Dasar hukum kurikulum homeschooling</h2>
<p>Homeschooling di Indonesia disebut sekolahrumah dan diatur dalam <a href="https://peraturan.go.id/id/permendikbud-no-129-tahun-2014" target="_blank" rel="noopener">Permendikbud Nomor 129 Tahun 2014</a>. Pasal 7 ayat (1) menyatakan kurikulum yang diterapkan dalam sekolahrumah mengacu kepada kurikulum nasional. Ini fondasi utamanya: keluarga tidak bebas sepenuhnya, tetapi juga tidak harus meniru jadwal sekolah formal jam demi jam.</p>
<p>Ayat (2) pasal yang sama mewajibkan penyelenggara sekolahrumah mengajarkan pendidikan agama, pendidikan Pancasila dan Kewarganegaraan, serta pendidikan bahasa Indonesia. Ketiga muatan ini tidak boleh ditinggalkan, apa pun pendekatan belajar yang dipilih keluarga. Mata pelajaran lain mengikuti struktur kurikulum nasional yang dipakai.</p>
<p>Pasal 4 ayat (1) menjelaskan alasan pentingnya acuan nasional: hasil pendidikan sekolahrumah diakui sama dengan pendidikan formal dan nonformal setelah peserta didik lulus ujian sesuai standar nasional pendidikan. Pengakuan ini membuka hak yang sama untuk mendaftar ke jenjang lebih tinggi atau memasuki dunia kerja. Pengertian dasar homeschooling dibahas di artikel <a href="/artikel/homeschooling-adalah">homeschooling adalah</a>.</p>
<p>Peraturan ini terbit tahun 2014, sehingga beberapa istilah di dalamnya, seperti UN dan UNPK, sudah tidak dipakai lagi. Ketentuan kurikulum dan penilaian kini merujuk ke peraturan yang lebih baru. Karena itu, keluarga perlu membaca Permendikbud 129/2014 bersama aturan kurikulum dan tes akademik terbaru yang dibahas di bagian berikutnya.</p>

<h2 id="pilihan">Pilihan kurikulum formal atau kesetaraan</h2>
<p>Pasal 7 ayat (3) Permendikbud 129/2014 memberi dua pilihan kurikulum nasional: kurikulum pendidikan formal atau kurikulum pendidikan kesetaraan. Keduanya boleh diperluas atau diperdalam sesuai minat, potensi, dan kebutuhan peserta didik. Pilihan ini sebaiknya diambil dengan mempertimbangkan rencana jangka panjang anak, misalnya apakah anak kelak akan masuk sekolah formal.</p>
<p>Kurikulum nasional yang berlaku saat ini ditetapkan dalam <a href="https://peraturan.bpk.go.id/Details/281847/permendikbudriset-no-12-tahun-2024" target="_blank" rel="noopener">Permendikbudristek Nomor 12 Tahun 2024 tentang Kurikulum pada PAUD, Jenjang Pendidikan Dasar, dan Jenjang Pendidikan Menengah</a>, yang telah diubah dengan <a href="https://peraturan.bpk.go.id/Details/322506/permendikdasmen-no-13-tahun-2025" target="_blank" rel="noopener">Permendikdasmen Nomor 13 Tahun 2025</a>. Peraturan ini memuat struktur kurikulum untuk SD sampai SMA, sekolah luar biasa, dan satuan pendidikan penyelenggara pendidikan kesetaraan.</p>
<p>Kurikulum formal cocok bila keluarga ingin ritme dan materi yang paralel dengan sekolah, misalnya karena anak berencana kembali ke sekolah. Kurikulum kesetaraan memberi ruang lebih besar bagi belajar mandiri dan keterampilan hidup, karena bobotnya dihitung dengan satuan kredit kompetensi. Perbandingan lebih luas antara kedua jalur ada di artikel <a href="/artikel/perbedaan-homeschooling-dan-sekolah-formal-untuk-abk">perbedaan homeschooling dan sekolah formal untuk ABK</a>.</p>
${diag(`${IMG}/${slug}-lapisan.svg`, 'Diagram tiga lapis acuan kurikulum homeschooling: aturan sekolahrumah, kurikulum nasional, dan capaian pembelajaran', 'Tiga lapis acuan kurikulum homeschooling, dari Permendikbud 129/2014 sampai Kepka BSKAP 032/H/KR/2024.')}

<h2 id="struktur">Struktur kurikulum kesetaraan dan SKK</h2>
<p>Struktur kurikulum kesetaraan disusun dalam Program Paket A, Paket B, dan Paket C. Menurut lampiran Permendikdasmen 13/2025, strukturnya terdiri atas kelompok mata pelajaran wajib serta kelompok muatan pemberdayaan dan keterampilan. Mata pelajaran wajib mengacu pada standar nasional pendidikan yang sama dengan pendidikan formal. Muatan pemberdayaan dan keterampilan mencakup keterampilan okupasional, fungsional, vokasional, sikap profesional, dan jiwa wirausaha.</p>
<p>Bobot belajar kesetaraan dinyatakan dalam Satuan Kredit Kompetensi (SKK). Satu SKK dicapai melalui 1 jam tatap muka, atau 2 jam tutorial, atau 3 jam belajar mandiri, atau kombinasi proporsional ketiganya. Satu jam tatap muka setara 35 menit untuk Paket A, 40 menit untuk Paket B, dan 45 menit untuk Paket C. Sistem ini cocok dengan pola homeschooling yang banyak mengandalkan belajar mandiri.</p>
<table><thead><tr><th>Struktur Paket A</th><th>Fase A (kelas I sampai II)</th><th>Fase B (kelas III sampai IV)</th><th>Fase C (kelas V sampai VI)</th><th>Total</th></tr></thead><tbody>
<tr><td>Muatan pemberdayaan dan keterampilan</td><td>14 SKK</td><td>14 SKK</td><td>14 SKK</td><td>42 SKK</td></tr>
<tr><td>Mata pelajaran wajib + pemberdayaan dan keterampilan</td><td>62 SKK</td><td>76 SKK</td><td>76 SKK</td><td>214 SKK</td></tr>
<tr><td>Muatan lokal (paling banyak)</td><td>2 SKK</td><td>2 SKK</td><td>2 SKK</td><td>6 SKK</td></tr>
<tr><td>Total keseluruhan</td><td>64 SKK</td><td>78 SKK</td><td>78 SKK</td><td>220 SKK</td></tr>
</tbody></table>
<p>Sumber tabel: Tabel 27 Struktur Kurikulum Program Paket A dalam lampiran Permendikdasmen 13/2025. Tabel serupa tersedia untuk Paket B dan Paket C. Keluarga yang mendaftarkan anak di PKBM biasanya mendapat jadwal tutorial dan tagihan tugas yang mengikuti bobot ini, jadi tanyakan kepada lembaga bagaimana SKK diterjemahkan ke kegiatan mingguan.</p>
${diag(`${IMG}/${slug}-skk.svg`, 'Tabel visual Satuan Kredit Kompetensi: definisi 1 SKK, durasi jam tatap muka per paket, total SKK Paket A, dan muatan pemberdayaan', 'Ringkasan SKK pendidikan kesetaraan menurut struktur kurikulum dalam Permendikdasmen 13/2025.')}

<h2 id="capaian">Capaian pembelajaran sebagai peta belajar</h2>
<p>Struktur kurikulum memberi tahu mata pelajaran dan bobotnya. Isi yang perlu dikuasai anak dijabarkan dalam capaian pembelajaran. Acuannya adalah Keputusan Kepala BSKAP Nomor 032/H/KR/2024 tentang Capaian Pembelajaran. Diktum kesatu keputusan ini menyebut capaian untuk Program Paket A, B, dan C tercantum dalam Lampiran IV, sedangkan capaian untuk TKLB, SDLB, SMPLB, dan SMALB tercantum dalam Lampiran V.</p>
<p>Capaian pembelajaran disusun per fase, bukan per kelas. Satu fase mencakup beberapa tahun, misalnya Fase A untuk kelas I sampai II. Bagi keluarga homeschooling, pola ini sangat membantu karena anak boleh bergerak lebih cepat di satu mata pelajaran dan lebih lambat di mata pelajaran lain, selama target fase tercapai pada akhirnya.</p>
<p>Standar pendukungnya juga diperbarui. <a href="https://peraturan.bpk.go.id/Details/321419/permendikdasmen-no-10-tahun-2025" target="_blank" rel="noopener">Permendikdasmen Nomor 10 Tahun 2025</a> mengatur Standar Kompetensi Lulusan, sedangkan <a href="https://peraturan.bpk.go.id/Details/322494/permendikdasmen-no-12-tahun-2025" target="_blank" rel="noopener">Permendikdasmen Nomor 12 Tahun 2025</a> mengatur Standar Isi. Keduanya menjadi rujukan saat lembaga menilai apakah hasil belajar anak memenuhi standar nasional.</p>
${fig(`${IMG}/commons-siswa-mengerjakan-ujian-jambi.webp`, 'Seorang siswa SD berpeci putih dan berbaju batik merah menulis jawaban di meja, dengan teman-teman di belakangnya', 'Siswa SD Islam Uswatun Hasanah mengerjakan tugas ujian di Masjid Ubay bin Kaab, Jambi, karena ruang kelas masih kurang. Penilaian tetap berjalan di ruang belajar yang tidak biasa, prinsip yang juga berlaku bagi homeschooling.', 'Foto: <a href="https://commons.wikimedia.org/wiki/File:Siswa_SD_Islam_Uswatun_Hasanah_Mengerjakan_Ujian.jpg" target="_blank" rel="nofollow noopener">Muhamad Izzul Fiqih</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="nofollow noopener">CC BY-SA 4.0</a>')}

<h2 id="menyusun">Menyusun rencana belajar di rumah</h2>
<p>Dengan acuan di atas, keluarga dapat menyusun rencana belajar yang tetap fleksibel. Mulailah dari capaian fase yang sesuai, lalu kelompokkan menjadi tema atau proyek. Satu proyek memasak sederhana, misalnya, dapat memuat matematika lewat menakar, bahasa Indonesia lewat membaca resep, dan keterampilan hidup lewat menyiapkan bahan. Pendekatan ini sejalan dengan muatan pemberdayaan dan keterampilan di kurikulum kesetaraan.</p>
<ol>
<li>Tentukan jenjang dan fase anak, lalu unduh capaian pembelajaran yang relevan.</li>
<li>Pilih acuan kurikulum, formal atau kesetaraan, dan catat muatan wajib.</li>
<li>Petakan capaian ke tema bulanan atau proyek yang dekat dengan kehidupan anak.</li>
<li>Susun jadwal mingguan yang realistis, termasuk waktu tutorial bila terdaftar di PKBM.</li>
<li>Siapkan portofolio sederhana berisi hasil karya, catatan pengamatan, dan foto kegiatan.</li>
<li>Tinjau rencana setiap akhir bulan dan sesuaikan dengan kemajuan anak.</li>
</ol>
<p>Rencana tertulis juga dibutuhkan saat mendaftar. Pasal 6 ayat (2) Permendikbud 129/2014 mensyaratkan dokumen program sekolahrumah yang sekurang-kurangnya memuat rencana pembelajaran. Rincian syarat pendaftaran ada di artikel <a href="/artikel/syarat-izin-homeschooling">syarat izin homeschooling</a>. Contoh penerapan untuk anak autis dapat dibaca di <a href="/artikel/homeschooling-untuk-anak-autis-kurikulum">homeschooling untuk anak autis</a>.</p>
${diag(`${IMG}/${slug}-alur.svg`, 'Diagram enam langkah dari memilih acuan kurikulum sampai penyetaraan hasil belajar melalui TKA', 'Alur dari rencana belajar sampai penyetaraan. Kewajiban terdaftar di basis data kementerian mengacu pada Pasal 8 ayat (2) Permendikdasmen 9/2025.')}

<h2 id="abk">Penyesuaian kurikulum untuk anak berkebutuhan khusus</h2>
<p>Bagi anak berkebutuhan khusus, keleluasaan Pasal 7 ayat (3) sangat berarti. Materi boleh diperluas atau diperdalam sesuai potensi dan kebutuhan anak. Dalam praktik, keluarga dapat mengatur ulang urutan materi, memperbanyak latihan pada kemampuan yang menjadi prioritas, dan memakai media yang sesuai, misalnya gambar, benda nyata, atau alat komunikasi alternatif.</p>
<p>Kepka BSKAP 032/H/KR/2024 juga memuat capaian pembelajaran untuk satuan pendidikan khusus dalam Lampiran V. Lampiran ini dapat menjadi rujukan tambahan bagi keluarga yang anaknya membutuhkan target berbeda dari capaian umum. Pendekatan kurikulum fungsional yang menekankan kemandirian sehari-hari dibahas di artikel <a href="/artikel/kurikulum-fungsional-untuk-anak-tunagrahita">kurikulum fungsional untuk anak tunagrahita</a>.</p>
<p>Penyesuaian sebaiknya dituliskan dalam rencana individual yang jelas: kemampuan saat ini, tujuan, cara mengajar, dan cara menilai kemajuan. Format semacam ini dikenal sebagai <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>. Dokumen ini memudahkan diskusi dengan tutor, terapis, atau lembaga tempat anak terdaftar, sekaligus menjadi bukti proses belajar yang terencana.</p>
<p>Keluarga yang masih menimbang apakah homeschooling cocok bagi anaknya dapat membaca <a href="/artikel/homeschooling-anak-berkebutuhan-khusus">homeschooling untuk ABK</a> dan <a href="/artikel/homeschooling-vs-sekolah-inklusi">homeschooling vs sekolah inklusi</a>. Bila hambatan belajar anak belum jelas, langkah <a href="/artikel/asesmen-abk">asesmen ABK</a> membantu menentukan titik awal kurikulum yang tepat.</p>

<h2 id="penilaian">Penilaian hasil belajar dan TKA</h2>
<p>Pasal 8 Permendikbud 129/2014 membagi penilaian sekolahrumah menjadi tiga: penilaian oleh pendidik, oleh satuan pendidikan nonformal atau formal, dan oleh pemerintah. Penilaian oleh pendidik, yang di rumah biasanya orang tua atau tutor, dilakukan berkesinambungan untuk memantau proses, kemajuan, dan perbaikan hasil belajar. Portofolio dan catatan pengamatan adalah alat yang paling praktis.</p>
<p>Untuk penilaian oleh pemerintah, aturan terbarunya adalah <a href="https://peraturan.bpk.go.id/Details/321171/permendikdasmen-no-9-tahun-2025" target="_blank" rel="noopener">Permendikdasmen Nomor 9 Tahun 2025 tentang Tes Kemampuan Akademik (TKA)</a>, yang mencabut peraturan Uji Kesetaraan tahun 2023. Pasal 8 ayat (6) menyebut peserta TKA dari jalur pendidikan informal merupakan murid sekolahrumah, dan ayat (2) mewajibkan peserta terdaftar dalam sistem basis data kementerian.</p>
<p>Pasal 9 mengatur mata uji. Untuk SD, Paket A, SMP, dan Paket B, mata ujinya bahasa Indonesia dan matematika. Untuk SMA, Paket C, dan SMK, mata ujinya bahasa Indonesia, matematika, bahasa Inggris, dan mata pelajaran pilihan. Pasal 11 ayat (2) menyatakan peserta jalur informal yang mengikuti TKA dan memenuhi kategori hasil berhak memperoleh sertifikat hasil TKA dan dinyatakan lulus dari satuan pendidikan.</p>
<p>Ada pengecualian penting bagi keluarga ABK. Pasal 8 ayat (7) mengecualikan murid berkebutuhan khusus penyandang disabilitas yang memiliki hambatan intelektual dari kepesertaan TKA. Tanyakan kepada dinas pendidikan atau lembaga bagaimana penilaian dan pengakuan hasil belajar dilakukan bagi anak dalam kondisi ini. Penjelasan tentang ijazah ada di artikel <a href="/artikel/apakah-homeschooling-dapat-ijazah">apakah homeschooling dapat ijazah</a>.</p>

<h2 id="pindah">Pindah ke sekolah formal</h2>
<p>Kurikulum nasional menjaga pintu ke sekolah formal tetap terbuka. Pasal 10 Permendikbud 129/2014 menyebut peserta didik sekolahrumah dapat diterima di SD tidak pada awal kelas 1 setelah lulus tes kelayakan dan penempatan dari sekolah yang dituju. Untuk SMP, anak dapat diterima di awal kelas 7 setelah lulus jenjang SD atau ujian kesetaraan Paket A yang berlaku.</p>
<p>Pasal 11 mengatur hal serupa untuk SMA dan SMK: anak dapat diterima di awal kelas 10 setelah lulus jenjang SMP atau kesetaraannya, dan di tengah jenjang setelah lulus tes kelayakan dan penempatan. Karena itu, portofolio dan catatan capaian yang rapi sangat membantu saat anak menjalani tes penempatan, terutama untuk menunjukkan kemampuan yang tidak tampak dalam satu kali tes.</p>
<p>Bila anak berkebutuhan khusus berencana pindah ke sekolah inklusi, siapkan juga informasi tentang dukungan yang selama ini berhasil di rumah. Sekolah akan memerlukannya untuk merencanakan akomodasi. Pembahasan tentang <a href="/artikel/apa-itu-homeschooling">apa itu homeschooling</a> dan pilihan lanjutannya dapat membantu keluarga merencanakan transisi dengan tenang. Untuk berdiskusi, tim YUKA dapat dihubungi melalui halaman <a href="/kontak">kontak</a>.</p>

<h2 id="faq">Pertanyaan Umum tentang Kurikulum Homeschooling</h2>
${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('\n')}
`;

const meta = 'Kurikulum homeschooling standar nasional: aturan Pasal 7 Permendikbud 129/2014, pilihan kurikulum formal atau kesetaraan, SKK, capaian pembelajaran, dan TKA.';
const data = {
  slug,
  titleTag: 'Kurikulum Homeschooling Standar Nasional: Aturan dan SKK | YUKA',
  metaDesc: meta,
  keywords: 'kurikulum homeschooling standar nasional, kurikulum sekolahrumah, skk paket a, capaian pembelajaran paket, tka homeschooling',
  ogTitle: 'Kurikulum Homeschooling Standar Nasional: Aturan dan SKK',
  ogDesc: meta,
  h1: 'Kurikulum Homeschooling Standar Nasional: Aturan, Struktur, dan Penilaiannya',
  crumb: 'Kurikulum Homeschooling',
  category: 'Pendidikan',
  datePublished: '2026-10-22T08:00:00+07:00',
  dateModified: '2026-10-22T08:00:00+07:00',
  dateDisplay: '22 Oktober 2026',
  readTime: '15 menit baca',
  image: { file: heroFile, w: 1200, h: 900, alt: 'Kue bola berwarna oranye berhias mata dan rambut cokelat di atas kertas, dipegang di telapak tangan peserta kegiatan', caption: 'Dokumentasi kegiatan membuat kue di YUKA. Hasil karya dari kegiatan praktik seperti ini dapat menjadi bagian portofolio belajar.', credit },
  bodyHtml,
  faq,
  related: [
    { href: '/artikel/syarat-izin-homeschooling', title: 'Syarat Izin Homeschooling', desc: 'Dasar hukum dan pendaftaran sekolahrumah.' },
    { href: '/artikel/apakah-homeschooling-dapat-ijazah', title: 'Apakah Homeschooling Dapat Ijazah?', desc: 'Mengenal penyetaraan dan pengakuan hasil belajar.' },
    { href: '/artikel/homeschooling-untuk-anak-autis-kurikulum', title: 'Homeschooling untuk Anak Autis', desc: 'Kurikulum dan rutinitas belajar di rumah.' },
  ],
  tags: ['Homeschooling', 'Kurikulum', 'PendidikanKesetaraan'],
  sources: [
    { url: 'https://peraturan.go.id/id/permendikbud-no-129-tahun-2014', label: 'Permendikbud No. 129 Tahun 2014 tentang Sekolahrumah (Pasal 4, 6, 7, 8, 10, 11)' },
    { url: 'https://peraturan.bpk.go.id/Details/281847/permendikbudriset-no-12-tahun-2024', label: 'Permendikbudristek No. 12 Tahun 2024 tentang Kurikulum pada PAUD, Jenjang Pendidikan Dasar, dan Menengah' },
    { url: 'https://peraturan.bpk.go.id/Details/322506/permendikdasmen-no-13-tahun-2025', label: 'Permendikdasmen No. 13 Tahun 2025 tentang Perubahan atas Permendikbudristek 12/2024 (struktur kurikulum kesetaraan, Tabel 27)' },
    { url: 'https://peraturan.bpk.go.id/Details/321171/permendikdasmen-no-9-tahun-2025', label: 'Permendikdasmen No. 9 Tahun 2025 tentang Tes Kemampuan Akademik (Pasal 8, 9, 11, 13)' },
    { url: 'https://peraturan.bpk.go.id/Details/321419/permendikdasmen-no-10-tahun-2025', label: 'Permendikdasmen No. 10 Tahun 2025 tentang Standar Kompetensi Lulusan' },
    { url: 'https://peraturan.bpk.go.id/Details/322494/permendikdasmen-no-12-tahun-2025', label: 'Permendikdasmen No. 12 Tahun 2025 tentang Standar Isi' },
    { url: 'https://kurikulum.kemendikdasmen.go.id/', label: 'Kemendikdasmen: Laman Kurikulum (Capaian Pembelajaran, Kepka BSKAP 032/H/KR/2024)' },
  ],
  sourcesCheckedNote: 'Seluruh pasal dibaca dari salinan PDF resmi (peraturan.go.id dan JDIH BPK) pada 19 Oktober 2026.',
};

if (require.main === module) {
  for (const [file, content] of Object.entries(diagrams)) fs.writeFileSync(path.join(ROOT, file), content);
  const size = imageSize(path.join(ROOT, heroFile));
  if (size.w !== 1200 || size.h !== 900) throw new Error('Hero wajib 1200x900.');
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), renderArticlePage(data));
  console.log(`Generated artikel/${slug}.html`);
}
module.exports = { data, faq, bodyHtml };

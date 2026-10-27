'use strict';
// Generator artikel "rubrik penilaian anak berkebutuhan khusus" (cycle #84 bl1, tambal tanggal kosong 2026-10-27).
// Keyword dari Google Sheet Keyword Data YUKA (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
// tab "Riset Keyword Batch 5", baris 140, status Planned. Fakta dibaca langsung dari PDF resmi
// Panduan Pelaksanaan Pendidikan Inklusif (BSKAP Kemendikbudristek, 2022): bagian modifikasi proses
// dan penilaian, tahapan penilaian, laporan hasil belajar, dan contoh rubrik penilaian di modul ajar
// Matematika Fase B Kelas IV (kriteria mandiri 3, bantuan 2, paksaan 1). Semua foto = dokumentasi
// asli YUKA (Sekolah Inklusi Taruna Imani), tidak ada gambar AI.
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'rubrik-penilaian-anak-berkebutuhan-khusus';
const IMG = 'assets/images/artikel';
const heroFile = `${IMG}/yuka-rubrik-penilaian-hero.webp`;
const KREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const PANDUAN = 'https://kurikulum.kemendikdasmen.go.id/wp-content/uploads/2022/08/Panduan-Pelaksanaan-Pendidikan-Inklusif.pdf';

const fig = (file, alt, caption) => {
  const { w, h } = imageSize(path.join(ROOT, file));
  return `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${KREDIT}</span></figcaption></figure>`;
};

const faq = [
  { q: 'Apa itu rubrik penilaian untuk anak berkebutuhan khusus?', a: 'Rubrik penilaian adalah alat yang memuat aspek yang dinilai dan kriteria untuk setiap tingkat capaian, sehingga guru menilai dengan patokan yang sama. Untuk anak berkebutuhan khusus, kriterianya sering menggambarkan tingkat kemandirian, misalnya mandiri, dengan bantuan, atau belum mau mengikuti, dan disusun berdasarkan tujuan belajar individual anak.' },
  { q: 'Apakah rubrik untuk anak ABK harus berbeda dari teman sekelasnya?', a: 'Tidak selalu. Rubrik bisa sama bila anak mengejar tujuan yang sama dengan akomodasi tertentu, misalnya waktu tambahan atau soal dibacakan. Rubrik perlu disesuaikan bila tujuan belajarnya berbeda, misalnya anak mengenal bentuk bangun datar sementara teman sekelasnya menghitung volume. Kuncinya, rubrik mengikuti tujuan pembelajaran dalam rencana individual anak.' },
  { q: 'Apa contoh kriteria rubrik dari panduan resmi?', a: 'Panduan Pelaksanaan Pendidikan Inklusif dari BSKAP Kemendikbudristek (2022) memuat contoh modul ajar Matematika Fase B Kelas IV dengan aspek mengikuti permainan, kerja sama, dan ketepatan jawaban. Kriterianya: mengikuti dengan mandiri bernilai 3, mengikuti dengan bantuan bernilai 2, dan mengikuti dengan paksaan bernilai 1.' },
  { q: 'Berapa banyak aspek yang ideal dalam satu rubrik?', a: 'Tidak ada angka baku dalam panduan resmi. Dalam praktik, tiga sampai lima aspek biasanya cukup untuk satu kegiatan, seperti contoh di panduan BSKAP yang memakai tiga aspek. Terlalu banyak aspek membuat guru sulit mengamati semuanya sekaligus, terutama di kelas inklusi yang ramai.' },
  { q: 'Bagaimana cara mengubah skor rubrik menjadi nilai rapor?', a: 'Panduan BSKAP menyebut laporan hasil belajar bersifat sederhana dan informatif, dan sekolah punya keleluasaan menentukan mekanisme serta formatnya. Banyak sekolah inklusi melengkapi angka dengan deskripsi capaian, misalnya keterampilan yang sudah dikuasai, yang masih perlu bantuan, dan rencana tindak lanjut, agar orang tua memahami kemajuan anak.' },
  { q: 'Siapa yang menyusun rubrik untuk anak berkebutuhan khusus?', a: 'Biasanya guru kelas bersama guru pendamping khusus, dengan masukan dari hasil asesmen dan diskusi bersama orang tua. Rubrik paling berguna bila disusun bersamaan dengan tujuan dalam program pembelajaran individual, bukan dibuat setelah kegiatan selesai.' },
  { q: 'Apakah rubrik boleh dipakai untuk menilai keterampilan hidup sehari-hari?', a: 'Boleh, dan justru sangat membantu. Keterampilan seperti menyiapkan bahan makanan, merapikan barang, atau mengikuti rutinitas bisa dipecah menjadi langkah, lalu setiap langkah dinilai tingkat bantuannya. Cara ini memperlihatkan kemajuan kecil yang sering tidak tertangkap oleh nilai angka biasa.' },
  { q: 'Seberapa sering rubrik perlu ditinjau ulang?', a: 'Tinjau rubrik setiap kali tujuan belajar anak berubah atau ketika hasil penilaian menunjukkan anak sudah konsisten di tingkat tertinggi. Panduan BSKAP menempatkan penilaian sebagai dasar menentukan program tindak lanjut, jadi rubrik yang tidak lagi menantang perlu diperbarui bersama rencana individual anak.' },
];

const sections = [
  ['pengertian', 'Apa itu rubrik penilaian untuk anak berkebutuhan khusus'],
  ['dasar', 'Dasar dari panduan resmi pendidikan inklusif'],
  ['komponen', 'Komponen rubrik yang baik'],
  ['contoh', 'Contoh rubrik dari panduan BSKAP'],
  ['langkah', 'Langkah menyusun rubrik penilaian'],
  ['akomodasi', 'Menyesuaikan cara penilaian tanpa mengubah tujuannya'],
  ['keterampilan', 'Rubrik untuk keterampilan hidup sehari-hari'],
  ['rapor', 'Dari skor rubrik ke laporan hasil belajar'],
  ['kesalahan', 'Kesalahan yang sering terjadi'],
  ['faq', 'Pertanyaan Umum tentang Rubrik Penilaian Anak Berkebutuhan Khusus'],
];

const bodyHtml = `
<div class="jawaban-singkat"><p><strong>Rubrik penilaian anak berkebutuhan khusus</strong> adalah alat yang memuat aspek yang dinilai beserta kriteria untuk setiap tingkat capaian, disusun dari tujuan belajar individual anak. Panduan Pelaksanaan Pendidikan Inklusif (BSKAP Kemendikbudristek, 2022) mencontohkan kriteria berbasis kemandirian: mengikuti dengan mandiri bernilai 3, dengan bantuan bernilai 2, dan dengan paksaan bernilai 1.</p></div>
<p>Menilai anak berkebutuhan khusus sering membuat guru ragu. Kalau memakai patokan yang sama dengan teman sekelasnya, nilai anak bisa terus rendah dan tidak menggambarkan kemajuannya. Kalau terlalu longgar, orang tua tidak mendapat gambaran yang jujur. Rubrik penilaian membantu keluar dari dilema itu, karena guru menilai dengan kriteria yang jelas dan sesuai tujuan belajar anak.</p>
<p>Artikel ini menjelaskan pengertian rubrik, dasar dari panduan resmi pendidikan inklusif, komponen rubrik yang baik, contoh dari panduan BSKAP, langkah menyusunnya, dan cara mengubah hasil rubrik menjadi laporan yang mudah dipahami orang tua. Contoh foto di artikel ini diambil dari kegiatan belajar di Sekolah Inklusi Taruna Imani yang dikelola YUKA.</p>
<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>

<h2 id="pengertian">Apa itu rubrik penilaian untuk anak berkebutuhan khusus</h2>
<p>Rubrik adalah tabel penilaian yang berisi dua hal. Pertama, aspek yang dinilai, misalnya ketepatan jawaban atau kerja sama. Kedua, kriteria untuk setiap tingkat capaian, misalnya apa yang terlihat ketika anak mendapat nilai 3, 2, atau 1. Dengan rubrik, dua guru yang mengamati anak yang sama seharusnya sampai pada nilai yang mirip, karena patokannya tertulis.</p>
<p>Untuk anak berkebutuhan khusus, rubrik punya fungsi tambahan. Rubrik bisa menangkap kemajuan yang tidak terlihat dari nilai benar atau salah. Seorang anak mungkin belum bisa menjawab semua soal, tetapi sudah mampu mengikuti kegiatan tanpa dibujuk. Itu kemajuan nyata, dan rubrik yang baik memberinya tempat.</p>
<p>Rubrik juga membuat penilaian lebih adil. Anak dinilai berdasarkan tujuan belajar yang memang ditetapkan untuknya, bukan dibandingkan begitu saja dengan teman sekelas. Tujuan itu biasanya tertulis dalam <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>, yang disusun dari hasil <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik anak berkebutuhan khusus</a>.</p>
${fig(`${IMG}/yuka-rubrik-kerajinan-pendamping.webp`, 'Dua siswi berjilbab duduk bersila di lantai kelas, satu merangkai kerajinan di meja lipat dan satu lagi berbicara sambil menunjuk', 'Siswa Sekolah Inklusi Taruna Imani mengerjakan kerajinan tangan di meja lipat. Kegiatan seperti ini bisa dinilai dengan rubrik yang mengamati kemandirian, ketekunan, dan hasil karya.')}

<h2 id="dasar">Dasar dari panduan resmi pendidikan inklusif</h2>
<p>Acuan yang paling praktis bagi sekolah adalah <a href="${PANDUAN}" target="_blank" rel="noopener">Panduan Pelaksanaan Pendidikan Inklusif</a> terbitan Badan Standar, Kurikulum, dan Asesmen Pendidikan (BSKAP) Kemendikbudristek tahun 2022. Panduan ini menyebut penilaian sebagai proses pengumpulan dan pengolahan informasi untuk mengukur pencapaian peserta didik, dan penilaian pembelajaran berbentuk formatif serta sumatif.</p>
<p>Panduan yang sama merinci empat tahapan penilaian pembelajaran. Urutannya bisa dipakai sebagai kerangka menyusun rubrik:</p>
<ol>
<li>Merumuskan tujuan penilaian.</li>
<li>Mengembangkan instrumen penilaian.</li>
<li>Melaksanakan penilaian.</li>
<li>Mengolah hasil penilaian.</li>
</ol>
<p>Rubrik termasuk instrumen penilaian pada tahap kedua. Panduan BSKAP juga menegaskan bahwa penilaian dipakai untuk mengukur dan mengambil keputusan tentang sejauh mana kemajuan yang dicapai peserta didik, apakah tujuan pembelajaran sudah tercapai, serta menentukan program tindak lanjut. Artinya, rubrik bukan sekadar alat memberi angka, melainkan dasar keputusan tentang langkah belajar berikutnya.</p>
<p>Dalam panduan itu, peserta didik berkebutuhan khusus disebut PDBK. Panduan menempatkan penilaian sesudah serangkaian langkah lain: identifikasi, asesmen, perencanaan pembelajaran, modifikasi proses, dan penyusunan Program Pendidikan Individual. Rubrik yang baik lahir dari rangkaian itu, bukan berdiri sendiri.</p>

<h2 id="komponen">Komponen rubrik yang baik</h2>
<p>Rubrik untuk kelas inklusi tidak perlu rumit. Yang penting, setiap komponennya jelas dan bisa diamati. Tabel berikut merangkum komponen yang perlu ada beserta contoh pengisiannya.</p>
<table><thead><tr><th>Komponen</th><th>Isi</th><th>Contoh</th></tr></thead><tbody>
<tr><td>Tujuan pembelajaran</td><td>Kemampuan yang ingin dicapai anak, diambil dari rencana individual</td><td>Anak menyebutkan nama empat bangun datar dari benda di sekitarnya</td></tr>
<tr><td>Aspek yang dinilai</td><td>Bagian perilaku atau hasil yang diamati</td><td>Mengikuti kegiatan, kerja sama, ketepatan jawaban</td></tr>
<tr><td>Tingkat capaian</td><td>Skala singkat, biasanya tiga atau empat tingkat</td><td>3, 2, 1</td></tr>
<tr><td>Deskripsi kriteria</td><td>Gambaran yang bisa diamati untuk setiap tingkat</td><td>Mandiri, dengan bantuan, dengan paksaan</td></tr>
<tr><td>Catatan bantuan</td><td>Jenis bantuan yang diberikan bila ada</td><td>Isyarat lisan, contoh gerakan, bantuan fisik</td></tr>
<tr><td>Catatan tindak lanjut</td><td>Langkah berikutnya berdasarkan hasil</td><td>Ulangi dengan kartu gambar, kurangi bantuan minggu depan</td></tr>
</tbody></table>
<p>Kolom catatan bantuan sering terlupa, padahal sangat berguna. Dua anak bisa sama-sama mendapat nilai 2, tetapi yang satu cukup diberi isyarat lisan dan yang lain perlu dibimbing tangannya. Catatan itu membantu guru melihat apakah bantuan bisa dikurangi perlahan. Pendekatan mencatat tingkat bantuan juga dibahas di artikel <a href="/artikel/mengukur-kemajuan-belajar-anak-disabilitas-intelektual">mengukur kemajuan belajar anak disabilitas intelektual</a>.</p>
<p>Deskripsi kriteria sebaiknya memakai kata kerja yang bisa diamati, seperti menyebutkan, menunjuk, menyusun, atau menyelesaikan. Hindari kata yang samar seperti memahami dengan baik atau cukup aktif, karena dua guru bisa menafsirkannya berbeda.</p>

<h2 id="contoh">Contoh rubrik dari panduan BSKAP</h2>
<p>Panduan Pelaksanaan Pendidikan Inklusif memuat contoh modul ajar Matematika Fase B Kelas IV tentang bangun datar. Kondisi awal peserta didik yang digambarkan antara lain memiliki kemampuan matematika yang kurang dalam operasi bilangan dan masih dibantu benda konkret untuk berhitung. Tujuannya mengenal bentuk bangun datar lewat benda di sekitar.</p>
<p>Di kolom asesmen, modul itu memakai tiga jenis penilaian. Penilaian tertulis meminta anak menuliskan nama bangun datar sesuai bentuk atau gambarnya. Penilaian lisan dilakukan lewat permainan tebak-tebakan nama bangun datar dari gambar rumah, mobil, atau benda lain. Lalu ada rubrik penilaian untuk mengamati keikutsertaan anak.</p>
<table><thead><tr><th>Aspek (sesuai panduan)</th><th>Nilai 3</th><th>Nilai 2</th><th>Nilai 1</th></tr></thead><tbody>
<tr><td>Mengikuti permainan</td><td>Mengikuti dengan mandiri</td><td>Mengikuti dengan bantuan</td><td>Mengikuti dengan paksaan</td></tr>
<tr><td>Kerja sama</td><td>Mengikuti dengan mandiri</td><td>Mengikuti dengan bantuan</td><td>Mengikuti dengan paksaan</td></tr>
<tr><td>Ketepatan jawaban</td><td>Mengikuti dengan mandiri</td><td>Mengikuti dengan bantuan</td><td>Mengikuti dengan paksaan</td></tr>
</tbody></table>
<p>Sumber tabel: contoh modul ajar Matematika Fase B Kelas IV dalam Panduan Pelaksanaan Pendidikan Inklusif, BSKAP Kemendikbudristek, 2022. Panduan menuliskan kriteria penilaian satu kali untuk ketiga aspek, yaitu mengikuti dengan mandiri nilai 3, mengikuti dengan bantuan nilai 2, dan mengikuti dengan paksaan nilai 1.</p>
<p>Contoh ini memperlihatkan prinsip penting: untuk banyak anak berkebutuhan khusus, tingkat kemandirian adalah ukuran kemajuan yang paling bermakna. Guru dapat mengembangkan contoh tersebut dengan deskripsi yang lebih spesifik per aspek. Misalnya, untuk ketepatan jawaban, nilai 3 bisa berarti menyebutkan empat nama bangun datar tanpa petunjuk, nilai 2 menyebutkan setelah diberi pilihan, dan nilai 1 baru bisa menunjuk gambar ketika guru menyebut namanya.</p>
${fig(`${IMG}/yuka-rubrik-kerajinan-kelompok.webp`, 'Seorang siswa laki-laki dan dua siswi duduk di lantai mengerjakan tugas di meja lipat masing-masing di depan lemari buku', 'Saat anak bekerja di meja masing-masing, guru bisa berkeliling dan mengisi rubrik untuk tiap anak, termasuk mencatat jenis bantuan yang diberikan.')}

<h2 id="langkah">Langkah menyusun rubrik penilaian</h2>
<p>Berikut langkah praktis yang bisa dipakai guru kelas dan guru pendamping khusus. Urutannya mengikuti tahapan penilaian dalam panduan BSKAP.</p>
<ol>
<li><strong>Mulai dari tujuan individual.</strong> Ambil satu tujuan dari rencana pembelajaran individual anak. Tulis dengan kata kerja yang bisa diamati.</li>
<li><strong>Pilih tiga sampai lima aspek.</strong> Pilih aspek yang paling menggambarkan tujuan itu. Contoh panduan BSKAP memakai tiga aspek untuk satu kegiatan.</li>
<li><strong>Tentukan skala.</strong> Skala tiga tingkat mudah dipakai saat mengajar. Skala empat tingkat memberi ruang lebih rinci bila guru punya waktu mengamati.</li>
<li><strong>Tulis deskripsi tiap tingkat.</strong> Gambarkan apa yang terlihat, bukan apa yang dirasakan guru. Pastikan perbedaan antartingkat jelas.</li>
<li><strong>Uji pada satu kegiatan.</strong> Pakai rubrik pada satu kegiatan, lalu periksa apakah ada kriteria yang membingungkan.</li>
<li><strong>Diskusikan dengan rekan.</strong> Minta guru lain menilai anak yang sama. Bila hasilnya jauh berbeda, perjelas deskripsinya.</li>
<li><strong>Olah dan tindak lanjuti.</strong> Bandingkan hasil dari waktu ke waktu dan tentukan langkah berikutnya, sesuai tahap mengolah hasil penilaian.</li>
</ol>
<p>Libatkan orang tua sejak awal. Orang tua sering tahu bentuk bantuan apa yang efektif di rumah, dan mereka akan lebih mudah memahami laporan bila sudah mengenal rubriknya. Kerja sama guru kelas dan guru pendamping dalam proses ini dibahas di artikel <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching dalam kelas inklusi</a> dan <a href="/artikel/gpk-adalah">GPK adalah</a>.</p>
<p>Simpan rubrik yang sudah terisi dalam satu map atau berkas digital per anak. Kumpulan rubrik dari beberapa bulan menjadi bukti kemajuan yang jauh lebih kaya daripada satu nilai ulangan, dan memudahkan guru saat menyusun laporan di akhir semester.</p>

<h2 id="akomodasi">Menyesuaikan cara penilaian tanpa mengubah tujuannya</h2>
<p>Rubrik yang baik bisa gagal kalau cara penilaiannya tidak cocok dengan kondisi anak. Panduan BSKAP menjelaskan beberapa bentuk modifikasi yang relevan dengan penilaian. Tabel berikut merangkumnya.</p>
<table><thead><tr><th>Bentuk modifikasi</th><th>Penjelasan dalam panduan BSKAP</th><th>Contoh penerapan</th></tr></thead><tbody>
<tr><td>Soal</td><td>Soal yang digunakan berbeda dengan peserta didik pada umumnya, disesuaikan dengan materi yang diajarkan untuk PDBK</td><td>Soal mengenal bentuk bangun datar, bukan menghitung volume</td></tr>
<tr><td>Alat</td><td>Penilaian dapat menggunakan alat khusus, misalnya braille atau komputer dengan program pembaca layar JAWS</td><td>Lembar soal braille untuk anak tunanetra</td></tr>
<tr><td>Waktu</td><td>Memberikan perpanjangan waktu</td><td>Tambahan waktu mengerjakan tugas tertulis</td></tr>
<tr><td>Tempat</td><td>Penilaian dapat dilaksanakan di tempat tertentu, secara individual, atau dengan tempat duduk dekat guru</td><td>Ruang yang lebih tenang untuk anak yang mudah terdistraksi</td></tr>
<tr><td>Cara</td><td>Penilaian secara lisan, guru membacakan soal, anak menjawab lisan lalu jawabannya dituliskan guru; dapat melalui pendampingan tutor sebaya</td><td>Guru membacakan soal untuk anak yang belum lancar membaca</td></tr>
</tbody></table>
<p>Sumber tabel: bagian Proses Pelaksanaan Pembelajaran dalam Panduan Pelaksanaan Pendidikan Inklusif, BSKAP Kemendikbudristek, 2022.</p>
<p>Perhatikan bedanya. Akomodasi waktu, tempat, alat, dan cara tidak mengubah apa yang diukur. Anak yang mendapat waktu tambahan tetap dinilai dengan rubrik yang sama dengan teman sekelasnya bila tujuannya sama. Modifikasi soal berbeda, karena mengubah materi yang dinilai. Dalam kasus ini, rubriknya juga harus mengikuti tujuan baru yang ditetapkan untuk anak. Untuk ujian berskala besar, bahasannya ada di artikel <a href="/artikel/ujian-nasional-anak-abk">ujian nasional anak ABK</a>.</p>
<p>Cara terakhir, pendampingan tutor sebaya, berhubungan erat dengan strategi <a href="/artikel/peer-tutoring-di-kelas-inklusi">peer tutoring di kelas inklusi</a>. Bila teman sebaya ikut membacakan soal, guru tetap perlu memastikan bantuan itu tidak berubah menjadi memberi jawaban.</p>
${fig(`${IMG}/yuka-rubrik-kelas-belajar.webp`, 'Beberapa siswa laki-laki duduk di lantai kelas berkeramik putih membaca dan menulis di meja-meja kecil dengan spanduk motivasi di dinding', 'Kelas di Sekolah Inklusi Taruna Imani menata siswa di meja-meja kecil. Pengaturan tempat seperti ini memudahkan guru memberi akomodasi tempat duduk saat penilaian.')}

<h2 id="keterampilan">Rubrik untuk keterampilan hidup sehari-hari</h2>
<p>Panduan BSKAP menyebut pelaksanaan pembelajaran bagi PDBK dilakukan antara lain secara kontekstual, sederhana, dan berbasis kecakapan hidup. Karena itu, banyak tujuan belajar anak berkebutuhan khusus berupa keterampilan sehari-hari, seperti menyiapkan bahan makanan, merapikan alat tulis, atau mengikuti jadwal kegiatan. Rubrik sangat cocok untuk menilai keterampilan semacam ini.</p>
<p>Caranya, pecah keterampilan menjadi langkah-langkah kecil, lalu nilai setiap langkah berdasarkan tingkat bantuan. Contoh berikut adalah rubrik buatan Tim YUKA untuk kegiatan menyiapkan sayuran, disusun mengikuti pola kriteria kemandirian dari panduan BSKAP. Ini contoh ilustrasi, bukan instrumen baku.</p>
<table><thead><tr><th>Langkah</th><th>3: mandiri</th><th>2: dengan bantuan</th><th>1: belum mau mengikuti</th></tr></thead><tbody>
<tr><td>Mencuci tangan sebelum mulai</td><td>Melakukan tanpa diingatkan</td><td>Melakukan setelah diingatkan atau dicontohkan</td><td>Belum mau melakukan meski dibujuk</td></tr>
<tr><td>Memisahkan daun dari batang</td><td>Menyelesaikan satu ikat sendiri</td><td>Menyelesaikan dengan dicontohkan beberapa kali</td><td>Belum mau mencoba</td></tr>
<tr><td>Mencuci sayuran di baskom</td><td>Mencuci sampai bersih tanpa arahan</td><td>Mencuci dengan arahan langkah demi langkah</td><td>Belum mau menyentuh air atau sayuran</td></tr>
<tr><td>Merapikan alat setelah selesai</td><td>Merapikan sendiri ke tempatnya</td><td>Merapikan setelah ditunjukkan tempatnya</td><td>Belum mau merapikan</td></tr>
</tbody></table>
<p>Dengan rubrik seperti ini, kemajuan kecil jadi terlihat. Anak yang bulan lalu baru mau mencuci tangan setelah dicontohkan, lalu bulan ini melakukannya sendiri, jelas sudah berkembang. Kegiatan memasak sebagai sarana belajar dibahas lebih jauh di artikel <a href="/artikel/belajar-memasak-untuk-anak-berkebutuhan-khusus">belajar memasak untuk anak berkebutuhan khusus</a>, sedangkan kurikulum yang berfokus pada keterampilan sehari-hari ada di <a href="/artikel/kurikulum-fungsional-untuk-anak-tunagrahita">kurikulum fungsional untuk anak tunagrahita</a>.</p>
${fig(`${IMG}/yuka-rubrik-menyiapkan-sayur.webp`, 'Beberapa siswa duduk di lantai memetik dan memilah sayuran hijau ke dalam baskom logam dan wadah plastik', 'Siswa YUKA menyiapkan sayuran bersama. Keterampilan hidup seperti ini bisa dipecah menjadi langkah kecil, lalu tiap langkah dinilai tingkat bantuannya dengan rubrik.')}

<h2 id="rapor">Dari skor rubrik ke laporan hasil belajar</h2>
<p>Panduan BSKAP menyebut laporan kemajuan belajar dan pencapaian peserta didik bersifat sederhana dan informatif, memberikan informasi yang bermanfaat tentang karakter dan kompetensi yang dicapai, serta strategi tindak lanjut. Satuan pendidikan memiliki keleluasaan untuk menentukan mekanisme dan format laporan hasil belajar kepada orang tua atau wali, dan sekolah menyampaikan rapor melalui e-rapor secara berkala.</p>
<p>Untuk kenaikan kelas PDBK, panduan menyebut sekolah memiliki keleluasaan menentukan kriteria dengan mempertimbangkan antara lain laporan kemajuan belajar, laporan pencapaian projek penguatan profil pelajar Pancasila, portofolio peserta didik, prestasi akademik dan nonakademik, ekstrakurikuler, serta penghargaan dan tingkat kehadiran. Kumpulan rubrik yang terisi rapi bisa menjadi bagian penting portofolio itu.</p>
<p>Agar skor rubrik mudah dipahami orang tua, ubah angka menjadi kalimat. Satu pola sederhana yang bisa dipakai:</p>
<ul>
<li><strong>Yang sudah dikuasai:</strong> aspek yang konsisten bernilai tertinggi, misalnya mengikuti permainan secara mandiri.</li>
<li><strong>Yang sedang berkembang:</strong> aspek yang masih membutuhkan bantuan, beserta jenis bantuannya.</li>
<li><strong>Rencana berikutnya:</strong> tujuan baru atau cara mengurangi bantuan, serta apa yang bisa dilatih orang tua di rumah.</li>
</ul>
<p>Laporan seperti ini jujur sekaligus memotivasi. Orang tua tahu posisi anak, dan anak mendapat pengakuan atas usahanya. Gagasan serupa untuk mengukur dampak pembelajaran dibahas di artikel <a href="/artikel/pelatihan-guru-inklusi">pelatihan guru inklusi</a> dan <a href="/artikel/evaluasi-kemajuan-homeschooling">evaluasi kemajuan homeschooling</a>.</p>

<h2 id="kesalahan">Kesalahan yang sering terjadi</h2>
<p>Beberapa kesalahan berikut membuat rubrik kehilangan manfaatnya. Kenali sejak awal agar tidak terulang.</p>
<ul>
<li><strong>Rubrik disusun setelah kegiatan.</strong> Rubrik yang dibuat belakangan cenderung menyesuaikan diri dengan hasil, bukan dengan tujuan.</li>
<li><strong>Deskripsi terlalu samar.</strong> Kriteria seperti cukup baik atau kurang aktif sulit diamati secara konsisten.</li>
<li><strong>Terlalu banyak aspek.</strong> Guru di kelas inklusi yang ramai tidak sempat mengamati sepuluh aspek sekaligus.</li>
<li><strong>Tidak mencatat bantuan.</strong> Tanpa catatan bantuan, guru sulit melihat apakah anak makin mandiri.</li>
<li><strong>Rubrik tidak pernah diperbarui.</strong> Ketika anak konsisten di tingkat tertinggi, tujuan dan rubriknya perlu dinaikkan.</li>
<li><strong>Hanya menilai kelemahan.</strong> Rubrik juga perlu menangkap kekuatan anak, karena dari situ strategi belajar berikutnya bisa dirancang.</li>
</ul>
<p>Suasana kelas ikut menentukan keberhasilan penilaian. Anak yang merasa aman lebih mudah menunjukkan kemampuannya. Strategi mengelola kelas yang beragam bisa dibaca di artikel <a href="/artikel/classroom-management-kelas-inklusi">classroom management kelas inklusi</a>, sedangkan cara memberi penguatan positif ada di <a href="/artikel/reward-system-efektif-untuk-anak-autis">reward system efektif untuk anak autis</a>. Gambaran umum tentang sekolah inklusi ada di <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a>.</p>
<p>Di Sekolah Inklusi Taruna Imani, kegiatan belajar dirancang agar setiap anak bisa menunjukkan kemampuannya dengan caranya sendiri. Orang tua yang ingin berdiskusi tentang penilaian dan rencana belajar anak dapat menghubungi YUKA melalui halaman <a href="/kontak">kontak</a>.</p>

<h2 id="faq">Pertanyaan Umum tentang Rubrik Penilaian Anak Berkebutuhan Khusus</h2>
${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('\n')}
`;

const meta = 'Rubrik penilaian anak berkebutuhan khusus: pengertian, komponen, contoh dari panduan BSKAP, langkah menyusun, akomodasi penilaian, dan cara melaporkannya ke orang tua.';
const data = {
  slug,
  titleTag: 'Rubrik Penilaian Anak Berkebutuhan Khusus dan Contohnya | YUKA',
  metaDesc: meta,
  keywords: 'rubrik penilaian anak berkebutuhan khusus, rubrik penilaian ABK, penilaian anak berkebutuhan khusus, asesmen kelas inklusi, contoh rubrik penilaian',
  ogTitle: 'Rubrik Penilaian Anak Berkebutuhan Khusus dan Contohnya',
  ogDesc: meta,
  h1: 'Rubrik Penilaian Anak Berkebutuhan Khusus: Komponen, Contoh, dan Cara Menyusunnya',
  crumb: 'Rubrik Penilaian Anak Berkebutuhan Khusus',
  category: 'Pendidikan',
  datePublished: '2026-10-27T08:00:00+07:00',
  dateModified: '2026-10-27T08:00:00+07:00',
  dateDisplay: '27 Oktober 2026',
  readTime: '13 menit baca',
  image: {
    file: heroFile, w: 1200, h: 900,
    alt: 'Empat siswa Sekolah Inklusi Taruna Imani duduk di lantai dengan meja lipat masing-masing di samping papan bertuliskan Taruna Imani',
    caption: 'Siswa Sekolah Inklusi Taruna Imani belajar di meja lipat masing-masing. Rubrik membantu guru menilai tiap anak sesuai tujuan belajarnya sendiri.',
    credit: KREDIT,
  },
  bodyHtml,
  faq,
  related: [
    { href: '/artikel/asesmen-akademik-anak-berkebutuhan-khusus', title: 'Asesmen Akademik Anak Berkebutuhan Khusus', desc: 'Cara guru mengenali kemampuan akademik anak sebelum menyusun tujuan.' },
    { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Komponen dan langkah menyusun PPI.' },
    { href: '/artikel/mengukur-kemajuan-belajar-anak-disabilitas-intelektual', title: 'Mengukur Kemajuan Belajar Anak Disabilitas Intelektual', desc: 'Target terukur, analisis tugas, dan catatan tingkat bantuan.' },
  ],
  tags: ['RubrikPenilaian', 'PendidikanInklusi', 'AsesmenABK'],
  sources: [
    { url: PANDUAN, label: 'Panduan Pelaksanaan Pendidikan Inklusif, Badan Standar, Kurikulum, dan Asesmen Pendidikan Kemendikbudristek, 2022 (bagian Proses Pelaksanaan Pembelajaran, Penilaian, Laporan Hasil Belajar, dan contoh modul ajar Matematika Fase B Kelas IV)' },
  ],
  sourcesCheckedNote: 'Seluruh kutipan dibaca dari PDF resmi di laman kurikulum.kemendikdasmen.go.id pada 28 Oktober 2026.',
};

if (require.main === module) {
  const size = imageSize(path.join(ROOT, heroFile));
  if (size.w !== 1200 || size.h !== 900) throw new Error('Hero wajib 1200x900.');
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), renderArticlePage(data));
  console.log(`Generated artikel/${slug}.html`);
}
module.exports = { data, faq, bodyHtml };

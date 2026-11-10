'use strict';
/*
 * Generator artikel 10 November 2026 (cycle #94 /cek-daily-artikel, tambal hari kosong).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5", baris 162: "pendidikan vokasional untuk anak disabilitas".
 * Belum punya artikel (yang ada: pekerjaan-untuk-penyandang-disabilitas membahas jenis pekerjaan, bukan jalur pendidikan).
 *
 * Fakta hukum: UU 8/2016 (kuota kerja Pasal 53), PP 60/2020 (Unit Layanan Disabilitas ketenagakerjaan),
 * PP 13/2020. Foto: Wikimedia Commons (domain publik USAID Indonesia, CC BY-SA 4.0, CC BY 4.0). Diagram SVG sendiri.
 *
 *   node scripts/generate-gap-20261110.js --prepare   # tulis SVG diagram
 *   node scripts/generate-gap-20261110.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-gap-20261110.js             # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const BYSA = 'https://creativecommons.org/licenses/by-sa/4.0/';
const CC = (page, author, lic, licUrl) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">${author}</a> / Wikimedia Commons, <a href="${licUrl}" target="_blank" rel="nofollow noopener">${lic}</a>.`;
const fig = (file, w, h, alt, caption, credit) => `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${credit}</span></figcaption></figure>`;
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const faqHtml = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;
const ext = (url, text) => `<a href="${url}" target="_blank" rel="nofollow noopener">${text}</a>`;
const table = (caption, head, rows) => `<div class="table-wrap"><table><caption>${caption}</caption><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;

const diagrams = {};
const addDiagram = (file, markup) => { diagrams[file] = markup; };

const URL_UU8 = 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016';
const URL_PP60 = 'https://peraturan.bpk.go.id/Details/148910/pp-no-60-tahun-2020';
const URL_SETKAB = 'https://setkab.go.id/presiden-teken-pp-tentang-unit-layanan-disabilitas-bidang-ketenagakerjaan/';
const URL_PP13 = 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020';

const PDU = (page) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">USAID Indonesia</a> / Wikimedia Commons, domain publik.`;
const F_HERO = 'https://commons.wikimedia.org/wiki/File:Siswa_Teknik_di_Politeknik_Aceh_(17064687029).jpg';
const F_ELEK = 'https://commons.wikimedia.org/wiki/File:Mengajarkan_riset_terapan_dan_keterampilan_teknologi_(4324296515).jpg';
const F_DENA = 'https://commons.wikimedia.org/wiki/File:SLB-B_Dena_Upakara.jpg';
const F_BATIK = 'https://commons.wikimedia.org/wiki/File:Hasil_Karya_Seni_Membatik_Siswa.jpg';
const F_BLK = 'https://commons.wikimedia.org/wiki/File:Balai_Latihan_Kerja_Jember.jpg';

const sections = [
  ['arti', 'Apa itu pendidikan vokasional untuk anak disabilitas'],
  ['kapan', 'Kapan pendidikan vokasional sebaiknya dimulai'],
  ['jalur', 'Jalur pendidikan vokasional yang tersedia'],
  ['bidang', 'Memilih bidang keterampilan yang cocok'],
  ['dasar', 'Keterampilan dasar yang menentukan keberhasilan kerja'],
  ['hukum', 'Dasar hukum: hak atas pekerjaan dan kuota kerja'],
  ['rencana', 'Menyusun rencana transisi ke dunia kerja'],
  ['peran', 'Peran orang tua, sekolah, dan pemberi kerja'],
  ['faq', 'Pertanyaan umum'],
];

const faq = [
  { q: 'Apa yang dimaksud pendidikan vokasional untuk anak disabilitas?', a: 'Pendidikan vokasional untuk anak disabilitas adalah pendidikan dan pelatihan yang membekali anak berkebutuhan khusus dengan keterampilan kerja yang nyata, misalnya tata boga, menjahit, kerajinan, pertanian, perawatan, atau komputer, beserta kebiasaan kerja yang dibutuhkan untuk mandiri atau bekerja setelah lulus sekolah.' },
  { q: 'Mulai usia berapa anak berkebutuhan khusus perlu dikenalkan keterampilan kerja?', a: 'Pengenalan bisa dimulai sejak SD lewat tugas rumah dan kegiatan bina diri. Penjajakan minat yang lebih terarah biasanya dilakukan di SMP, lalu pelatihan keterampilan yang spesifik di SMA, SMK, SMALB, atau lembaga pelatihan. Semakin awal kebiasaan kerja dilatih, semakin mudah anak beradaptasi kelak.' },
  { q: 'Di mana anak disabilitas bisa mendapat pendidikan vokasional?', a: 'Pilihannya antara lain program keterampilan di SLB jenjang SMPLB dan SMALB, SMK yang menerima murid berkebutuhan khusus, balai latihan kerja milik pemerintah, kursus di lembaga pelatihan, program magang di tempat kerja, dan usaha keluarga. Ketersediaannya berbeda di tiap daerah, jadi tanyakan ke dinas pendidikan dan dinas ketenagakerjaan setempat.' },
  { q: 'Bagaimana memilih keterampilan yang cocok untuk anak berkebutuhan khusus?', a: 'Mulailah dari minat dan kekuatan anak, bukan dari jenis disabilitasnya. Amati pekerjaan apa yang bisa ia lakukan dengan tekun, lingkungan seperti apa yang membuatnya nyaman, dan kebutuhan pekerjaan di sekitar rumah. Uji coba singkat di beberapa bidang lebih bisa diandalkan daripada menebak.' },
  { q: 'Apakah perusahaan wajib mempekerjakan penyandang disabilitas?', a: 'Ya. Pasal 53 UU Nomor 8 Tahun 2016 mewajibkan pemerintah, pemerintah daerah, BUMN, dan BUMD mempekerjakan paling sedikit 2 persen penyandang disabilitas dari jumlah pegawai, dan perusahaan swasta paling sedikit 1 persen dari jumlah pegawai atau pekerjanya.' },
  { q: 'Apa itu Unit Layanan Disabilitas bidang ketenagakerjaan?', a: 'Unit Layanan Disabilitas bidang ketenagakerjaan adalah unit di dinas yang membidangi ketenagakerjaan di provinsi dan kabupaten atau kota, diatur dalam PP Nomor 60 Tahun 2020. Unit ini menjadi tempat keluarga dan pemberi kerja bertanya tentang pelatihan, penempatan, dan pendampingan tenaga kerja penyandang disabilitas.' },
  { q: 'Bagaimana jika anak belum siap bekerja di perusahaan setelah lulus?', a: 'Bekerja di perusahaan bukan satu-satunya tujuan. Banyak anak memulai dari kegiatan produktif di rumah, membantu usaha keluarga, bekerja dengan pendampingan, atau berwirausaha kecil. Yang penting anak punya kegiatan bermakna, terus belajar, dan kemandiriannya bertambah sedikit demi sedikit.' },
  { q: 'Apakah keterampilan vokasional perlu dicatat dalam Program Pembelajaran Individual?', a: 'Sebaiknya ya. Untuk anak usia SMP ke atas, tujuan vokasional dan rencana transisi ke dunia kerja perlu ditulis dalam Program Pembelajaran Individual, lengkap dengan target keterampilan, tempat berlatih, dan cara menilai kemajuannya, sehingga semua pihak bergerak ke arah yang sama.' },
];

addDiagram(`${IMG}/vokasional-tahapan.webp`, svg.flow('Tahapan pendidikan vokasional anak disabilitas', 'Contoh urutan dari mengenal minat sampai bekerja atau berwirausaha', [
  { h: 'Kenali minat', d: 'Amati kekuatan anak lewat tugas rumah dan bina diri sejak SD.' },
  { h: 'Jelajahi bidang', d: 'Coba beberapa keterampilan singkat di SMP atau SMPLB.' },
  { h: 'Latih keterampilan', d: 'Pelatihan terarah di SMK, SMALB, balai latihan kerja, atau kursus.' },
  { h: 'Magang', d: 'Praktik di tempat kerja nyata dengan pendampingan.' },
  { h: 'Bekerja atau usaha', d: 'Bekerja dengan dukungan, di usaha keluarga, atau berwirausaha.' },
]));

const body = [
  p('<strong>Pendidikan vokasional untuk anak disabilitas</strong> adalah bekal keterampilan kerja yang nyata, seperti tata boga, menjahit, kerajinan, pertanian, perawatan, atau komputer, ditambah kebiasaan kerja yang membuat anak berkebutuhan khusus bisa mandiri setelah lulus sekolah. Jalurnya beragam, mulai dari program keterampilan di SLB, SMK yang menerima murid berkebutuhan khusus, balai latihan kerja, sampai magang di tempat kerja.'),
  p('Panduan ini ditujukan untuk orang tua dan guru yang mulai memikirkan masa depan anak setelah sekolah. Kami membahas kapan sebaiknya mulai, pilihan jalur yang tersedia di Indonesia, cara memilih bidang yang cocok, dasar hukum hak atas pekerjaan, serta langkah menyusun rencana transisi dari bangku sekolah ke dunia kerja.'),
  toc(sections),

  '<h2 id="arti">Apa itu pendidikan vokasional untuk anak disabilitas</h2>',
  p('Kata vokasional berarti berkaitan dengan pekerjaan. Pendidikan vokasional tidak berhenti pada pengetahuan di buku, tetapi melatih anak melakukan suatu pekerjaan sampai mahir. Untuk anak berkebutuhan khusus, pendidikan vokasional juga mencakup keterampilan pendukung seperti datang tepat waktu, mengikuti instruksi, menjaga kebersihan diri, dan berkomunikasi dengan rekan kerja.'),
  p('Pendekatan ini sangat penting bagi anak yang kemampuan akademiknya terbatas. Bagi mereka, mengejar nilai pelajaran yang sama dengan teman sebaya sering kurang bermakna dibanding menguasai keterampilan yang bisa dipakai sehari-hari. Itulah sebabnya banyak sekolah memakai <a href="/artikel/kurikulum-fungsional-untuk-anak-tunagrahita">kurikulum fungsional</a> yang menekankan kemandirian dan keterampilan hidup.'),
  p('Namun pendidikan vokasional bukan hanya untuk anak dengan hambatan intelektual. Anak dengan hambatan pendengaran, penglihatan, fisik, atau di spektrum autisme juga membutuhkan arah yang jelas tentang pekerjaan yang sesuai minat dan kekuatannya. Gambaran jenis pekerjaan yang bisa dijajaki ada di <a href="/artikel/pekerjaan-untuk-penyandang-disabilitas">pekerjaan untuk penyandang disabilitas</a> dan <a href="/artikel/pekerjaan-yang-cocok-untuk-orang-autis">pekerjaan yang cocok untuk orang autis</a>.'),
  fig(`${IMG}/vokasional-praktik-elektronika.webp`, 1200, 800, 'Seorang mahasiswa laki-laki dan seorang mahasiswi berkerudung merangkai kabel pada papan percobaan elektronika di depan alat ukur di laboratorium', 'Praktik merangkai komponen elektronika di laboratorium Politeknik Aceh. Belajar lewat praktik langsung seperti ini adalah ciri utama pendidikan vokasional.', PDU(F_ELEK)),

  '<h2 id="kapan">Kapan pendidikan vokasional sebaiknya dimulai</h2>',
  p('Persiapan kerja tidak dimulai saat anak lulus SMA. Kebiasaan kerja tumbuh sejak kecil lewat tugas rumah yang sederhana, misalnya merapikan tempat tidur, mencuci piring, atau menyiram tanaman. Kegiatan ini melatih urutan langkah, ketekunan, dan tanggung jawab, yang kelak dibutuhkan di tempat kerja.'),
  p('Secara umum, tahapannya bisa dibagi menurut jenjang sekolah. Tabel berikut adalah gambaran praktik yang umum dipakai, dan perlu disesuaikan dengan kemampuan tiap anak.'),
  table('Gambaran tahapan pendidikan vokasional menurut jenjang', ['Jenjang', 'Fokus', 'Contoh kegiatan'], [
    ['SD', 'Kebiasaan kerja dan bina diri', 'Tugas rumah, merawat barang sendiri, berbelanja kecil bersama orang tua'],
    ['SMP atau SMPLB', 'Mengenal berbagai bidang', 'Mencoba memasak, menjahit, berkebun, kerajinan, atau komputer secara bergiliran'],
    ['SMA, SMK, atau SMALB', 'Melatih satu atau dua keterampilan secara mendalam', 'Praktik rutin di bengkel atau dapur sekolah, membuat produk nyata'],
    ['Setelah sekolah', 'Magang, pelatihan lanjutan, bekerja', 'Balai latihan kerja, kursus, magang di usaha, bekerja dengan pendampingan'],
  ]),
  p('Masa SMP adalah titik penting. Pada usia ini anak mulai menunjukkan minat yang lebih jelas, dan keluarga sudah bisa membayangkan jalur setelah SMP. Persiapan pindah jenjang di masa ini kami bahas di <a href="/artikel/transisi-anak-abk-dari-sd-ke-smp">transisi anak ABK dari SD ke SMP</a>.'),
  diag(`${IMG}/vokasional-tahapan.webp`, 'Diagram alur lima tahap pendidikan vokasional dari mengenali minat sampai bekerja atau berwirausaha', 'Lima tahap pendidikan vokasional untuk anak disabilitas. Urutan ini contoh umum; anak bisa bergerak maju atau mundur sesuai kesiapannya.'),

  '<h2 id="jalur">Jalur pendidikan vokasional yang tersedia</h2>',
  p('Di Indonesia, pendidikan vokasional untuk anak berkebutuhan khusus bisa ditempuh lewat jalur sekolah maupun luar sekolah. Masing-masing punya kelebihan dan keterbatasan.'),
  table('Perbandingan jalur pendidikan vokasional untuk anak disabilitas', ['Jalur', 'Kelebihan', 'Hal yang perlu dicek'], [
    ['Program keterampilan di SLB (SMPLB dan SMALB)', 'Kelas kecil, guru pendidikan khusus, materi disesuaikan', 'Ragam bidang keterampilan dan kelengkapan ruang praktik'],
    ['SMK yang menerima murid berkebutuhan khusus', 'Bidang keahlian beragam, suasana lebih dekat ke dunia kerja', 'Kesiapan guru, akomodasi praktik, dan pendampingan'],
    ['Balai latihan kerja pemerintah', 'Pelatihan singkat yang terarah ke kebutuhan kerja', 'Syarat usia dan kesesuaian program dengan kebutuhan peserta'],
    ['Kursus dan lembaga pelatihan', 'Waktu fleksibel, bidang spesifik', 'Biaya, sertifikat, dan kesiapan pengajar'],
    ['Magang dan usaha keluarga', 'Belajar langsung di tempat kerja nyata', 'Pendamping yang sabar dan tugas yang jelas'],
  ]),
  p('Sekolah luar biasa umumnya menyediakan program keterampilan sesuai sumber daya masing-masing, sehingga bidang yang tersedia bisa berbeda antarsekolah. Saat memilih SLB, tanyakan bidang keterampilan apa yang diajarkan, berapa jam praktik per minggu, dan apakah ada kerja sama dengan usaha di sekitar sekolah. Pengertian SLB dan jenjangnya ada di <a href="/artikel/slb-adalah">SLB adalah</a>, sedangkan perbandingannya dengan sekolah inklusi di <a href="/artikel/apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a>.'),
  fig(`${IMG}/vokasional-slb-dena-upakara.webp`, 1200, 897, 'Papan nama Lembaga Pendidikan Anak Tunarungu Dena Upakara di Jalan Mangli Wonosobo dengan atap kecil bergaya joglo', 'Papan nama Lembaga Pendidikan Anak Tunarungu Dena Upakara di Wonosobo, Jawa Tengah. Sekolah luar biasa adalah salah satu tempat anak berkebutuhan khusus mendapat program keterampilan.', CC(F_DENA, 'SLB/B Dena Upakara', 'CC BY-SA 4.0', BYSA)),
  p('Di luar sekolah, balai latihan kerja milik pemerintah pusat maupun daerah menyelenggarakan pelatihan kerja di berbagai bidang. Untuk mengetahui program yang terbuka bagi penyandang disabilitas di daerah Anda, tanyakan langsung ke balai latihan kerja atau dinas ketenagakerjaan setempat.'),

  '<h2 id="bidang">Memilih bidang keterampilan yang cocok</h2>',
  p('Kesalahan yang sering terjadi adalah memilih bidang berdasarkan jenis disabilitas, misalnya menganggap semua anak tunanetra cocok menjadi pemijat atau semua anak tunarungu cocok menjahit. Padahal minat dan kekuatan tiap anak berbeda. Pilihan yang baik lahir dari pengamatan, bukan dari anggapan.'),
  p('Pertimbangkan beberapa hal berikut saat memilih bidang:'),
  ol([
    '<strong>Minat anak.</strong> Kegiatan apa yang ia lakukan dengan senang hati tanpa disuruh?',
    '<strong>Kekuatan yang sudah terlihat.</strong> Misalnya ketelitian, kekuatan fisik, daya ingat visual, atau kemampuan mengikuti urutan langkah.',
    '<strong>Lingkungan yang nyaman.</strong> Ada anak yang nyaman di tempat ramai, ada yang lebih tenang bekerja sendiri dan di ruang yang sepi.',
    '<strong>Kebutuhan dukungan.</strong> Apakah anak memerlukan alat bantu, instruksi bergambar, atau pendamping?',
    '<strong>Peluang di sekitar rumah.</strong> Pekerjaan apa yang dibutuhkan di lingkungan sekitar, sehingga keterampilan itu benar-benar bisa dipakai?',
  ]),
  p('Uji coba singkat sangat membantu. Biarkan anak mencoba beberapa bidang selama beberapa minggu, catat apa yang ia kuasai dan nikmati, lalu pilih satu atau dua bidang untuk didalami. Hasil karya dari uji coba ini bisa dikumpulkan dalam <a href="/artikel/penilaian-portofolio-anak-abk">portofolio</a> sebagai bukti kemampuan. Asesmen yang menyeluruh juga membantu memetakan kekuatan anak, seperti dijelaskan di <a href="/artikel/asesmen-abk">asesmen anak berkebutuhan khusus</a>.'),
  fig(`${IMG}/vokasional-karya-batik.webp`, 1200, 900, 'Beberapa lembar batik berbingkai bermotif rumah, bunga, dan ikan berwarna merah, hijau, dan biru bersandar di dinding ruang kerja', 'Karya batik siswa sekolah dasar yang disiapkan untuk lomba membatik tingkat kecamatan. Kerajinan seperti membatik adalah salah satu bidang yang bisa dijajaki sejak dini.', CC(F_BATIK, 'NANA SUHERI', 'CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0/')),

  '<h2 id="dasar">Keterampilan dasar yang menentukan keberhasilan kerja</h2>',
  p('Keterampilan teknis saja tidak cukup. Banyak orang kehilangan pekerjaan bukan karena tidak mampu mengerjakan tugasnya, tetapi karena kesulitan dengan hal-hal pendukung. Karena itu pendidikan vokasional yang baik juga melatih keterampilan dasar berikut:'),
  ul([
    '<strong>Bina diri.</strong> Menjaga kebersihan, berpakaian rapi, dan makan secara mandiri.',
    '<strong>Ketepatan waktu.</strong> Bangun, berangkat, dan memulai kerja sesuai jadwal.',
    '<strong>Mengikuti instruksi.</strong> Memahami perintah lisan, tertulis, atau bergambar, lalu bertanya bila belum paham.',
    '<strong>Keselamatan kerja.</strong> Memakai alat dengan benar dan mengenali bahaya di tempat kerja.',
    '<strong>Komunikasi dan sikap.</strong> Menyapa, meminta izin, menerima koreksi, dan bekerja sama dengan rekan.',
    '<strong>Mengelola uang.</strong> Mengenal nilai uang, menghitung upah, dan berbelanja kebutuhan sendiri.',
    '<strong>Bepergian.</strong> Menggunakan rute dan kendaraan menuju tempat kerja dengan aman.',
  ]),
  p('Keterampilan ini paling efektif dilatih di situasi nyata, misalnya berbelanja di warung, membantu usaha tetangga, atau bertugas di kantin sekolah. Cara melatih kemandirian di rumah dijelaskan di <a href="/artikel/bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh">cara mengajarkan kemandirian kepada anak berkebutuhan khusus</a>.'),

  '<h2 id="hukum">Dasar hukum: hak atas pekerjaan dan kuota kerja</h2>',
  p(ext(URL_UU8, 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas') + ' menjamin hak penyandang disabilitas atas pendidikan dan pekerjaan. Salah satu ketentuan yang paling sering dirujuk adalah Pasal 53 tentang kuota kerja. Pemerintah, pemerintah daerah, BUMN, dan BUMD wajib mempekerjakan paling sedikit 2 persen penyandang disabilitas dari jumlah pegawai, sedangkan perusahaan swasta wajib mempekerjakan paling sedikit 1 persen dari jumlah pegawai atau pekerjanya.'),
  table('Ketentuan kuota kerja penyandang disabilitas dalam Pasal 53 UU Nomor 8 Tahun 2016', ['Pemberi kerja', 'Kewajiban paling sedikit'], [
    ['Pemerintah, pemerintah daerah, BUMN, dan BUMD', '2 persen penyandang disabilitas dari jumlah pegawai'],
    ['Perusahaan swasta', '1 persen penyandang disabilitas dari jumlah pegawai atau pekerja'],
  ]),
  p('Untuk menjalankan amanat itu, pemerintah menerbitkan ' + ext(URL_PP60, 'PP Nomor 60 Tahun 2020 tentang Unit Layanan Disabilitas Bidang Ketenagakerjaan') + '. ' + ext(URL_SETKAB, 'Sekretariat Kabinet') + ' menjelaskan bahwa peraturan ini lahir dari amanat UU Nomor 8 Tahun 2016. Unit layanan ini berada di dinas yang membidangi ketenagakerjaan di provinsi dan kabupaten atau kota, sehingga keluarga bisa menanyakan informasi pelatihan dan penempatan kerja di sana.'),
  p('Di bangku sekolah, ' + ext(URL_PP13, 'PP Nomor 13 Tahun 2020') + ' mewajibkan satuan pendidikan menyediakan akomodasi yang layak bagi peserta didik penyandang disabilitas. Akomodasi ini juga berlaku saat praktik keterampilan, misalnya alat yang disesuaikan, instruksi bergambar, atau waktu praktik yang lebih panjang.'),
  fig(`${IMG}/vokasional-blk-jember.webp`, 1200, 900, 'Gedung Balai Latihan Kerja Jember berpagar hijau dengan papan nama UPT Pelatihan Kerja dan spanduk informasi pelatihan di depannya', 'Tampak depan Balai Latihan Kerja Jember, Jawa Timur. Balai latihan kerja milik pemerintah adalah salah satu jalur pelatihan setelah lulus sekolah.', CC(F_BLK, 'Ardhan Febriansyah', 'CC BY-SA 4.0', BYSA)),

  '<h2 id="rencana">Menyusun rencana transisi ke dunia kerja</h2>',
  p('Rencana transisi adalah dokumen sederhana yang menjawab pertanyaan: setelah lulus, anak akan melakukan apa, di mana, dan dengan dukungan apa? Rencana ini sebaiknya mulai ditulis sejak SMP atau awal SMA, lalu diperbarui setiap tahun. Untuk anak yang memiliki <a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual</a>, rencana transisi bisa menjadi bagian dari PPI.'),
  p('Langkah menyusunnya:'),
  ol([
    '<strong>Tuliskan tujuan jangka panjang.</strong> Misalnya bekerja di dapur katering, membantu usaha keluarga, atau membuka usaha jahit kecil.',
    '<strong>Petakan keterampilan yang dibutuhkan.</strong> Teknis maupun keterampilan dasar seperti ketepatan waktu dan bepergian.',
    '<strong>Bandingkan dengan kemampuan sekarang.</strong> Catat yang sudah dikuasai dan yang perlu dilatih.',
    '<strong>Tentukan tempat berlatih.</strong> Sekolah, balai latihan kerja, kursus, atau usaha di sekitar rumah.',
    '<strong>Rencanakan magang.</strong> Cari tempat kerja yang bersedia memberi kesempatan praktik dengan pendampingan.',
    '<strong>Siapkan dukungan setelah lulus.</strong> Siapa pendampingnya, bagaimana transportasinya, dan ke mana bertanya bila ada masalah.',
    '<strong>Tinjau setiap tahun.</strong> Sesuaikan tujuan bila minat atau kemampuan anak berubah.',
  ]),
  p('Rencana tidak harus berakhir di perusahaan besar. Berwirausaha kecil sering cocok bagi anak yang membutuhkan ritme kerja fleksibel. Contoh nyata bisa dibaca di <a href="/artikel/kisah-mas-ilham-mandiri-telur-asin">kisah Mas Ilham yang mandiri lewat usaha telur asin</a> dan <a href="/artikel/kewirausahaan-anak-muda-disabilitas">kewirausahaan anak muda disabilitas</a>.'),

  '<h2 id="peran">Peran orang tua, sekolah, dan pemberi kerja</h2>',
  p('Keberhasilan pendidikan vokasional bergantung pada kerja sama banyak pihak. Orang tua mengenal anak paling dalam dan menjadi penghubung yang konsisten. Sekolah menyediakan latihan terarah dan penilaian kemajuan. Pemberi kerja membuka kesempatan magang dan pekerjaan yang sesungguhnya.'),
  table('Pembagian peran dalam pendidikan vokasional anak disabilitas', ['Pihak', 'Peran utama'], [
    ['Orang tua', 'Melatih kebiasaan kerja di rumah, mengamati minat, mencari jejaring magang, menjaga semangat anak'],
    ['Guru dan GPK', 'Menyusun tujuan vokasional di PPI, melatih keterampilan, menilai kemajuan, menghubungi calon tempat magang'],
    ['Sekolah', 'Menyediakan ruang praktik, menjalin kerja sama dengan usaha, memberi akomodasi yang layak'],
    ['Pemberi kerja', 'Memberi tugas yang jelas, menyesuaikan lingkungan kerja, menunjuk rekan pendamping'],
    ['Dinas ketenagakerjaan', 'Informasi pelatihan dan penempatan lewat Unit Layanan Disabilitas'],
  ]),
  p('Peran <a href="/artikel/gpk-adalah">guru pendamping khusus</a> sering menjadi kunci, terutama saat anak mulai magang dan membutuhkan jembatan antara sekolah dan tempat kerja. Orang tua juga perlu menjaga kesehatan mental anak selama masa peralihan ini, karena remaja berkebutuhan khusus rentan merasa cemas tentang masa depannya. Kami membahasnya di <a href="/artikel/kesehatan-mental-remaja-berkebutuhan-khusus">kesehatan mental remaja berkebutuhan khusus</a>.'),
  p('Pada akhirnya, tujuan pendidikan vokasional adalah kehidupan yang bermakna dan semandiri mungkin. Setiap langkah kecil, dari mampu menyiapkan bekal sendiri sampai menerima upah pertama, layak dirayakan. Peran keluarga dalam perjalanan pendidikan anak kami uraikan di <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>, dan gambaran besarnya di <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a>.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(faq),
];

const articles = [
  {
    slug: 'pendidikan-vokasional-untuk-anak-disabilitas',
    titleTag: 'Pendidikan Vokasional untuk Anak Disabilitas: Panduan | YUKA',
    metaDesc: 'Pendidikan vokasional untuk anak disabilitas: kapan dimulai, jalur SLB, SMK, dan balai latihan kerja, memilih bidang, kuota kerja UU 8/2016, dan rencana transisi.',
    keywords: 'pendidikan vokasional untuk anak disabilitas, keterampilan kerja anak berkebutuhan khusus, pelatihan kerja penyandang disabilitas, transisi ke dunia kerja',
    ogTitle: 'Pendidikan Vokasional untuk Anak Disabilitas',
    ogDesc: 'Panduan orang tua dan guru menyiapkan anak berkebutuhan khusus menuju dunia kerja lewat pendidikan vokasional.',
    h1: 'Pendidikan Vokasional untuk Anak Disabilitas: Jalur, Bidang Keterampilan, dan Rencana Menuju Dunia Kerja',
    crumb: 'Pendidikan Vokasional untuk Anak Disabilitas',
    category: 'Pendidikan',
    datePublished: '2026-11-10T08:00:00+07:00', dateModified: '2026-11-10T08:00:00+07:00',
    dateDisplay: '10 November 2026', readTime: '12 menit baca',
    image: {
      file: `${IMG}/vokasional-hero.webp`, w: 1200, h: 800,
      alt: 'Empat mahasiswa laki-laki berdiskusi di meja laboratorium sambil memegang kabel alat ukur dan lembar petunjuk praktik',
      caption: 'Mahasiswa Politeknik Aceh berdiskusi saat praktik di laboratorium. Pendidikan vokasional menekankan latihan langsung dan kerja sama, bekal yang juga dibutuhkan anak berkebutuhan khusus menuju dunia kerja.',
      credit: PDU(F_HERO),
    },
    bodyHtml: body.join('\n'), faq,
    related: [
      { href: '/artikel/pekerjaan-untuk-penyandang-disabilitas', title: 'Pekerjaan untuk Penyandang Disabilitas', desc: 'Jenis pekerjaan yang bisa dijajaki penyandang disabilitas.' },
      { href: '/artikel/kurikulum-fungsional-untuk-anak-tunagrahita', title: 'Kurikulum Fungsional untuk Anak Tunagrahita', desc: 'Kurikulum yang menekankan kemandirian dan keterampilan hidup.' },
      { href: '/artikel/kewirausahaan-anak-muda-disabilitas', title: 'Kewirausahaan Anak Muda Disabilitas', desc: 'Peluang berwirausaha bagi anak muda penyandang disabilitas.' },
    ],
    tags: ['Vokasional', 'TransisiKerja', 'Disabilitas'],
    sources: [
      { url: URL_UU8, label: 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (Pasal 53 kuota kerja)' },
      { url: URL_PP60, label: 'PP Nomor 60 Tahun 2020 tentang Unit Layanan Disabilitas Bidang Ketenagakerjaan' },
      { url: URL_SETKAB, label: 'Sekretariat Kabinet: Presiden Teken PP tentang Unit Layanan Disabilitas Bidang Ketenagakerjaan' },
      { url: URL_PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 11 November 2026. Tahapan dan pembagian peran adalah gambaran praktik umum dan perlu disesuaikan dengan kemampuan tiap anak; ketersediaan program pelatihan berbeda di tiap daerah.',
  },
];

function prepare() {
  fs.mkdirSync(path.join(ROOT, IMG), { recursive: true });
  for (const [file, markup] of Object.entries(diagrams)) fs.writeFileSync(imgPath(file.replace(/\.webp$/, '.svg')), markup);
  console.log(`Wrote ${Object.keys(diagrams).length} SVG diagrams into ${IMG}/`);
}
async function raster() {
  const sharp = require('D:/Projects/Creativism App/node_modules/sharp');
  for (const file of Object.keys(diagrams)) {
    const buf = await sharp(fs.readFileSync(imgPath(file.replace(/\.webp$/, '.svg'))), { density: 150 }).resize(1200, 760, { fit: 'fill' }).webp({ quality: 90 }).toBuffer();
    fs.writeFileSync(imgPath(file), buf);
    console.log(`Rasterized ${file} (${buf.length} bytes)`);
  }
}
function render() {
  for (const a of articles) {
    fs.writeFileSync(path.join(articleDir, `${a.slug}.html`), renderArticlePage(a));
    console.log(`Rendered artikel/${a.slug}.html`);
  }
}

if (require.main === module) {
  if (process.argv.includes('--prepare')) prepare();
  else if (process.argv.includes('--raster')) raster();
  else render();
}

module.exports = { articles, diagrams };

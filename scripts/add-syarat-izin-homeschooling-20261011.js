'use strict';
/*
 * Artikel baru YUKA (cycle #76): syarat-izin-homeschooling, tayang terjadwal 2026-10-13.
 * Generator ini TIDAK menulis kartu ke blog.html; kartu ditambah workflow publish-scheduled saat tanggal tayang.
 * Fakta hukum dikutip dari naskah yang dibaca langsung:
 *   - Permendikbud 129/2014 (Berita Negara 2014 No. 1660, peraturan.go.id/files/bn1660-2014.pdf), status "Berlaku" di peraturan.go.id
 *   - UU 20/2003 Sisdiknas (JDIH BPK), Pasal 1 angka 13, 5, 6, 7, 13, 26, 27
 *   - UU 8/2016 Penyandang Disabilitas (JDIH BPK), Pasal 10
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'syarat-izin-homeschooling';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const image = (file, alt, caption) => {
  const size = imageSize(path.join(ROOT, file));
  return { file, w: size.w, h: size.h, alt, caption, credit: CREDIT };
};
const fig = (file, alt, caption) => {
  const s = imageSize(path.join(ROOT, file));
  return `<figure class="article-inline-image"><img src="../${file}" alt="${alt}" loading="lazy" width="${s.w}" height="${s.h}"><figcaption>${caption} <span class="kredit">${CREDIT}</span></figcaption></figure>`;
};
const p = (text) => `<p>${text}</p>`;
const h2 = (id, text) => `<h2 id="${id}">${text}</h2>`;
const h3 = (text) => `<h3>${text}</h3>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((x) => `<li>${x}</li>`).join('')}</ol>`;

const hero = image(
  'Dokumentasi/museum-gunung-merapi-keluarga-dalam-bus-perjalanan-006.webp',
  'Anak-anak, remaja, dan seorang pendamping duduk bersama di dalam bus dalam perjalanan kegiatan YUKA',
  'Rombongan anak dan pendamping YUKA dalam perjalanan kegiatan luar kelas. Foto ini dokumentasi kegiatan yayasan, bukan kegiatan sekolahrumah keluarga tertentu.'
);
const bodyImages = {
  legal: 'Dokumentasi/candi-plaosan-anak-anak-wisata-candi-borobudur-054.webp',
  group: 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-057.webp',
  community: 'Dokumentasi/candi-plaosan-grup-anak-kostum-tradisional-candi-021.webp',
  support: 'Dokumentasi/candi-plaosan-wisatawan-candi-borobudur-berpose-026.webp',
};

const faq = [
  { q: 'Apakah homeschooling wajib punya izin di Indonesia?', a: 'Permendikbud Nomor 129 Tahun 2014 membedakannya menurut bentuk. Sekolahrumah tunggal dan majemuk wajib mendaftar ke dinas pendidikan kabupaten/kota, sedangkan sekolahrumah komunitas wajib memperoleh izin pendirian satuan pendidikan nonformal sebagai kelompok belajar. Jadi keluarga tidak meminta izin seperti mendirikan sekolah, tetapi tetap wajib mendaftar.' },
  { q: 'Apa saja syarat pendaftaran sekolahrumah tunggal?', a: 'Pasal 6 ayat (2) menyebut empat persyaratan: identitas diri orang tua dan peserta didik, surat pernyataan kedua orang tua bahwa mereka bertanggung jawab melaksanakan pendidikan di rumah, surat pernyataan anak yang sudah berusia 13 tahun bahwa ia bersedia, dan dokumen program sekolahrumah yang sekurang-kurangnya memuat rencana pembelajaran.' },
  { q: 'Berapa jumlah keluarga dalam sekolahrumah majemuk?', a: 'Menurut Pasal 6 ayat (3) huruf b, sekolahrumah majemuk dilengkapi surat pernyataan dari paling sedikit 2 keluarga dan paling banyak 10 keluarga. Kegiatan inti tetap berlangsung di masing-masing keluarga, sementara satu atau lebih kegiatan dilakukan bersama.' },
  { q: 'Ke mana mendaftarkan homeschooling?', a: 'Pendaftaran sekolahrumah tunggal dan majemuk ditujukan ke dinas pendidikan kabupaten/kota tempat keluarga tinggal. Format formulir dan alur layanan bisa berbeda antardaerah, karena peraturan menyerahkan ketentuan teknis kepada petunjuk teknis Direktur Jenderal. Tanyakan langsung ke bidang yang menangani pendidikan nonformal di dinas setempat.' },
  { q: 'Mata pelajaran apa yang wajib diajarkan dalam homeschooling?', a: 'Pasal 7 ayat (2) mewajibkan penyelenggara sekolahrumah mengajarkan pendidikan agama, pendidikan Pancasila dan kewarganegaraan, serta bahasa Indonesia. Kurikulumnya mengacu pada kurikulum nasional, boleh memakai kurikulum pendidikan formal atau pendidikan kesetaraan, dan dapat diperluas sesuai minat serta kebutuhan anak.' },
  { q: 'Apakah anak homeschooling bisa pindah ke sekolah formal?', a: 'Bisa. Pasal 10 dan 11 mengatur penerimaan di SD, SMP, dan SMA atau yang sederajat. Masuk awal kelas 7 atau kelas 10 mensyaratkan lulus ujian kesetaraan atau lulus jenjang sebelumnya. Masuk di tengah jenjang juga mensyaratkan lulus tes kelayakan dan penempatan dari sekolah tujuan.' },
  { q: 'Apakah ada syarat tambahan untuk anak berkebutuhan khusus?', a: 'Permendikbud 129 Tahun 2014 tidak membuat daftar syarat khusus bagi anak berkebutuhan khusus. Syarat pendaftarannya sama. Yang perlu diperkuat adalah dokumen program, yaitu rencana pembelajaran yang memuat akomodasi, cara penilaian, dan dukungan yang dibutuhkan anak, karena UU 8 Tahun 2016 menjamin hak atas akomodasi yang layak.' },
  { q: 'Apakah Permendikbud 129 Tahun 2014 masih berlaku?', a: 'Saat kami periksa pada Oktober 2026, basis data peraturan.go.id milik Ditjen Peraturan Perundang-undangan mencantumkan status Permendikbud Nomor 129 Tahun 2014 sebagai Berlaku. Karena aturan teknis bisa diperbarui, tetap konfirmasi ke dinas pendidikan setempat sebelum mendaftar.' },
];

const faqHtml = `<div class="faq-list"><h2 id="faq">Pertanyaan yang Sering Diajukan</h2>${faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div>`;

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> syarat izin homeschooling di Indonesia diatur Permendikbud Nomor 129 Tahun 2014 tentang Sekolahrumah. Sekolahrumah tunggal dan majemuk wajib mendaftar ke dinas pendidikan kabupaten/kota dengan identitas orang tua dan anak, surat pernyataan tanggung jawab orang tua, surat kesediaan anak berusia 13 tahun ke atas, serta dokumen program yang memuat rencana pembelajaran. Sekolahrumah komunitas wajib memperoleh izin pendirian sebagai kelompok belajar nonformal.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#dasar-hukum">Dasar hukum homeschooling di Indonesia</a></li><li><a href="#bentuk">Tiga bentuk sekolahrumah dan status izinnya</a></li><li><a href="#syarat-pendaftaran">Syarat pendaftaran sekolahrumah tunggal dan majemuk</a></li><li><a href="#izin-komunitas">Izin sekolahrumah komunitas</a></li><li><a href="#prosedur">Langkah mendaftar ke dinas pendidikan</a></li><li><a href="#kurikulum">Kewajiban kurikulum dan mata pelajaran</a></li><li><a href="#wajib-belajar">Wajib belajar dan tanggung jawab orang tua</a></li><li><a href="#penilaian">Penilaian, ujian kesetaraan, dan pindah ke sekolah formal</a></li><li><a href="#abk">Syarat izin homeschooling untuk anak berkebutuhan khusus</a></li><li><a href="#checklist">Kesalahan umum dan checklist dokumen</a></li><li><a href="#faq">Pertanyaan yang sering diajukan</a></li></ol></div>',

  h2('dasar-hukum', 'Dasar Hukum Homeschooling di Indonesia'),
  p('Homeschooling di Indonesia memiliki dua lapis dasar hukum. Lapis pertama adalah Undang-Undang Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional. Pasal 1 angka 13 mendefinisikan pendidikan informal sebagai jalur pendidikan keluarga dan lingkungan. Pasal 13 ayat (1) menyebut jalur pendidikan terdiri atas pendidikan formal, nonformal, dan informal yang dapat saling melengkapi dan memperkaya.'),
  p('Pasal 27 undang-undang yang sama menjadi pijakan utama. Ayat (1) menyebut kegiatan pendidikan informal yang dilakukan keluarga dan lingkungan berbentuk kegiatan belajar secara mandiri. Ayat (2) menyatakan hasil pendidikan informal diakui sama dengan pendidikan formal dan nonformal setelah peserta didik lulus ujian sesuai standar nasional pendidikan. Artinya, belajar di rumah sah, tetapi pengakuan hasilnya tetap melalui ujian.'),
  p('Lapis kedua adalah Peraturan Menteri Pendidikan dan Kebudayaan Nomor 129 Tahun 2014 tentang Sekolahrumah, ditetapkan 9 Oktober 2014 dan diundangkan dalam Berita Negara 2014 Nomor 1660. Peraturan inilah yang memuat syarat administratif. Pasal 1 angka 4 mendefinisikan sekolahrumah sebagai layanan pendidikan yang secara sadar dan terencana dilakukan orang tua atau keluarga di rumah atau tempat lain, dalam bentuk tunggal, majemuk, dan komunitas.'),
  p('Saat kami periksa pada Oktober 2026, basis data peraturan.go.id mencantumkan status peraturan ini sebagai Berlaku. Bila Anda masih menimbang apakah jalur ini cocok, baca dulu ulasan <a href="homeschooling-vs-sekolah-inklusi">homeschooling vs sekolah inklusi</a> sebelum masuk ke urusan berkas.'),
  fig(bodyImages.legal, 'Delapan anak dan remaja berhijab, sebagian berseragam olahraga Taruna Imani, berpose di tangga sebuah candi', 'Dokumentasi kunjungan edukasi siswa YUKA ke kompleks candi. Kegiatan belajar di luar ruang seperti ini juga dapat menjadi bagian rencana pembelajaran keluarga sekolahrumah.'),

  h2('bentuk', 'Tiga Bentuk Sekolahrumah dan Status Izinnya'),
  p('Pasal 5 Permendikbud 129 Tahun 2014 membagi sekolahrumah menjadi tiga bentuk. Pembedaan ini penting karena kewajiban administratifnya tidak sama. Banyak orang tua menyebut semuanya "izin homeschooling", padahal untuk dua bentuk pertama yang diatur adalah kewajiban mendaftar, sedangkan izin pendirian hanya berlaku untuk bentuk komunitas.'),
  p('Sekolahrumah tunggal dilaksanakan orang tua dalam satu keluarga dan tidak bergabung dengan keluarga lain. Sekolahrumah majemuk diselenggarakan orang tua dari dua keluarga atau lebih yang melakukan satu atau lebih kegiatan pembelajaran bersama, sementara pembelajaran inti tetap di keluarga masing-masing. Sekolahrumah komunitas adalah kelompok belajar gabungan sekolahrumah majemuk yang menyusun silabus, fasilitas, waktu belajar, dan bahan ajar bersama.'),
  '<table class="article-table"><caption>Perbandingan tiga bentuk sekolahrumah menurut Permendikbud 129 Tahun 2014</caption><thead><tr><th>Bentuk</th><th>Penyelenggara</th><th>Kewajiban administratif</th><th>Dasar pasal</th></tr></thead><tbody><tr><td>Sekolahrumah tunggal</td><td>Orang tua dalam satu keluarga, tidak bergabung dengan keluarga lain</td><td>Wajib mendaftar ke dinas pendidikan kabupaten/kota</td><td>Pasal 1 angka 5, Pasal 6 ayat (1) dan (2)</td></tr><tr><td>Sekolahrumah majemuk</td><td>Orang tua dari 2 sampai 10 keluarga, pembelajaran inti tetap di tiap keluarga</td><td>Wajib mendaftar ke dinas pendidikan kabupaten/kota</td><td>Pasal 1 angka 6, Pasal 6 ayat (1) dan (3)</td></tr><tr><td>Sekolahrumah komunitas</td><td>Gabungan sekolahrumah majemuk dengan silabus dan bahan ajar bersama</td><td>Wajib memperoleh izin pendirian satuan pendidikan nonformal sebagai kelompok belajar</td><td>Pasal 1 angka 7, Pasal 6 ayat (4)</td></tr></tbody></table>',
  p('Pilih bentuk berdasarkan siapa yang benar-benar memegang tanggung jawab belajar sehari-hari, bukan berdasarkan nama program yang ditawarkan lembaga. Rincian biaya tiap jalur dibahas terpisah di artikel <a href="biaya-homeschooling">biaya homeschooling</a>.'),

  h2('syarat-pendaftaran', 'Syarat Pendaftaran Sekolahrumah Tunggal dan Majemuk'),
  p('Pasal 6 ayat (1) menyatakan penyelenggara sekolahrumah tunggal dan majemuk wajib mendaftar ke dinas pendidikan kabupaten/kota. Ayat (2) dan (3) kemudian merinci kelengkapan berkasnya. Isinya hampir sama untuk kedua bentuk, dengan satu perbedaan pada surat pernyataan orang tua.'),
  h3('Untuk sekolahrumah tunggal'),
  ol([
    '<strong>Identitas diri orang tua dan peserta didik.</strong> Dalam praktik, dinas biasanya meminta salinan dokumen kependudukan, tetapi jenis dokumen persisnya mengikuti layanan daerah masing-masing.',
    '<strong>Surat pernyataan dari kedua orang tua</strong> bahwa mereka bertanggung jawab melaksanakan pendidikan di rumah.',
    '<strong>Surat pernyataan dari peserta didik yang telah berusia 13 tahun</strong> bahwa ia bersedia mengikuti pendidikan di sekolahrumah.',
    '<strong>Dokumen program sekolahrumah</strong> yang sekurang-kurangnya mencantumkan rencana pembelajaran.',
  ]),
  h3('Untuk sekolahrumah majemuk'),
  p('Berkasnya sama, kecuali surat pernyataan orang tua. Pasal 6 ayat (3) huruf b meminta surat pernyataan dari paling sedikit 2 keluarga dan paling banyak 10 keluarga. Setiap keluarga menyatakan bahwa sebagai orang tua mereka bertanggung jawab melaksanakan sekolahrumah majemuk secara sadar dan terencana. Surat kesediaan anak berusia 13 tahun dan dokumen program tetap diperlukan.'),
  p('Perhatikan bahwa syarat kesediaan anak menghormati suara anak itu sendiri. Bagi remaja, keputusan belajar di rumah bukan semata pilihan orang tua. Diskusi jujur tentang alasan, harapan, dan cara bersosialisasi akan membuat surat pernyataan itu bermakna, bukan sekadar formalitas tanda tangan.'),

  h2('izin-komunitas', 'Izin Sekolahrumah Komunitas'),
  p('Sekolahrumah komunitas diperlakukan berbeda. Pasal 6 ayat (4) menyatakan sekolahrumah komunitas wajib memperoleh izin pendirian satuan pendidikan nonformal sebagai kelompok belajar dari dinas pendidikan kabupaten/kota, sesuai ketentuan peraturan perundang-undangan. Dengan kata lain, komunitas tidak cukup hanya mendaftar seperti keluarga. Ia menjadi satuan pendidikan nonformal yang perizinannya mengikuti aturan pendirian satuan pendidikan.'),
  p('Hal ini sejalan dengan UU 20 Tahun 2003 Pasal 26 ayat (4), yang menyebut satuan pendidikan nonformal terdiri atas lembaga kursus, lembaga pelatihan, kelompok belajar, pusat kegiatan belajar masyarakat (PKBM), majelis taklim, dan satuan sejenis. Kelompok belajar dan PKBM sama-sama satuan nonformal, tetapi bentuk dan perizinannya bisa berbeda.'),
  p('Bagi orang tua, implikasinya praktis. Sebelum bergabung dengan komunitas atau lembaga yang menyebut dirinya "homeschooling", tanyakan statusnya: apakah ia kelompok belajar berizin, PKBM berizin, komunitas yang menginduk ke satuan berizin, atau hanya penyedia les. Status inilah yang menentukan apakah anak tercatat dan punya jalur resmi ke ujian.'),
  p('Komunitas juga perlu memastikan peran orang tua tetap jelas. Definisi dalam Pasal 1 angka 7 menyebut komunitas menyusun silabus, fasilitas belajar, waktu pembelajaran, dan bahan ajar bersama, termasuk kegiatan seperti olahraga, musik atau seni, dan bahasa. Kegiatan bersama memperkaya, tetapi bukan pengganti tanggung jawab keluarga atas pendidikan anaknya.'),
  fig(bodyImages.community, 'Belasan anak dan pendamping berkostum tradisional buatan sendiri berpose di tangga sebuah candi', 'Dokumentasi kegiatan kelompok siswa YUKA dengan kostum karya sendiri. Kegiatan bersama seperti ini menggambarkan ruang belajar kolektif yang juga ada dalam sekolahrumah majemuk dan komunitas.'),

  h2('prosedur', 'Langkah Mendaftar ke Dinas Pendidikan'),
  p('Peraturan tidak merinci alur loket. Pasal 15 menyebut ketentuan lebih lanjut diatur dalam petunjuk teknis yang ditetapkan Direktur Jenderal, sehingga formulir dan saluran layanan bisa berbeda antardaerah. Urutan berikut adalah cara kerja yang aman, disusun dari kewajiban dalam Pasal 6 dan pengalaman umum mengurus layanan pendidikan.'),
  ol([
    '<strong>Tentukan bentuk sekolahrumah.</strong> Tunggal, majemuk, atau bergabung dengan komunitas berizin. Bentuk ini menentukan berkas yang disiapkan.',
    '<strong>Hubungi dinas pendidikan kabupaten/kota.</strong> Tanyakan bidang yang menangani pendidikan nonformal atau kesetaraan, format formulir, dan apakah pendaftaran bisa daring.',
    '<strong>Siapkan identitas orang tua dan anak</strong> sesuai yang diminta dinas.',
    '<strong>Tulis surat pernyataan orang tua.</strong> Untuk majemuk, kumpulkan pernyataan dari setiap keluarga peserta.',
    '<strong>Siapkan surat kesediaan anak</strong> bila anak sudah berusia 13 tahun.',
    '<strong>Susun dokumen program sekolahrumah</strong> yang memuat rencana pembelajaran, mata pelajaran wajib, jadwal, dan cara penilaian.',
    '<strong>Serahkan berkas dan simpan tanda terima.</strong> Catat nama petugas, tanggal, dan nomor registrasi bila ada.',
    '<strong>Rencanakan jalur ujian sejak awal.</strong> Tanyakan satuan pendidikan formal atau nonformal mana yang disetujui atau ditunjuk dinas untuk ujian anak.',
  ]),
  p('Simpan semua salinan dalam satu map. Arsip yang rapi memudahkan saat anak mendaftar ujian kesetaraan, pindah ke sekolah formal, atau ketika dinas melakukan pembinaan sebagaimana kewajiban pemerintah daerah dalam Pasal 13.'),

  h2('kurikulum', 'Kewajiban Kurikulum dan Mata Pelajaran'),
  p('Banyak orang tua mengira homeschooling bebas sepenuhnya dari kurikulum. Pasal 7 Permendikbud 129 Tahun 2014 mengatur sebaliknya. Ayat (1) menyatakan kurikulum sekolahrumah mengacu kepada kurikulum nasional. Ayat (3) memberi ruang: kurikulum nasional yang dipakai dapat berupa kurikulum pendidikan formal atau kurikulum pendidikan kesetaraan, dengan cakupan yang diperluas atau diperdalam sesuai minat, potensi, dan kebutuhan peserta didik.'),
  p('Ayat (2) memuat kewajiban yang sering terlewat. Penyelenggara sekolahrumah wajib mengajarkan pendidikan agama, pendidikan Pancasila dan kewarganegaraan, serta bahasa Indonesia. Ketiganya harus tampak dalam dokumen program yang diserahkan ke dinas, lengkap dengan rencana kegiatan dan sumber belajarnya.'),
  p('Bagi keluarga muslim, kewajiban pendidikan agama sejalan dengan amanah mendidik anak yang menjadi tanggung jawab orang tua. Rencanakan dengan sungguh-sungguh: hafalan dan pemahaman, praktik ibadah, akhlak, serta pembiasaan harian. Kegiatan di masjid atau majelis taklim dapat mendukung, dan majelis taklim sendiri termasuk satuan pendidikan nonformal menurut UU Sisdiknas.'),
  p('Dokumen program tidak harus tebal. Yang penting memuat tujuan per periode, daftar mata pelajaran, jadwal mingguan, bahan ajar, cara mencatat kemajuan, dan rencana ujian. Pasal 1 angka 9 menyebut laporan kemajuan sebagai catatan hasil belajar berupa pencapaian kompetensi, jadi biasakan menulis catatan sejak bulan pertama.'),

  h2('wajib-belajar', 'Wajib Belajar dan Tanggung Jawab Orang Tua'),
  p('Memilih sekolahrumah tidak menghapus kewajiban wajib belajar. UU 20 Tahun 2003 Pasal 6 ayat (1) menyatakan setiap warga negara berusia tujuh sampai lima belas tahun wajib mengikuti pendidikan dasar. Pasal 7 ayat (2) menegaskan orang tua dari anak usia wajib belajar berkewajiban memberikan pendidikan dasar kepada anaknya.'),
  p('Di sisi lain, Pasal 7 ayat (1) memberi orang tua hak berperan serta dalam memilih satuan pendidikan dan memperoleh informasi tentang perkembangan pendidikan anaknya. Hak memilih dan kewajiban memberi pendidikan berjalan bersama. Karena itu, pendaftaran ke dinas bukan beban birokrasi semata, melainkan bukti bahwa anak tetap berada dalam sistem pendidikan nasional.'),
  p('Pasal 2 Permendikbud 129 Tahun 2014 merumuskan tujuan sekolahrumah, antara lain pemenuhan layanan pendidikan dasar dan menengah yang bermutu bagi anak dari keluarga yang memilih jalur ini, serta layanan pendidikan akademik dan kecakapan hidup yang fleksibel. Tujuan ini membantu orang tua menilai diri sendiri secara jujur: apakah waktu, kemampuan, dan dukungan keluarga cukup untuk memenuhinya.'),
  p('Bila jawabannya belum, tidak ada yang salah dengan memilih sekolah. Perbandingan yang lebih rinci untuk anak berkebutuhan khusus ada di artikel <a href="perbedaan-homeschooling-dan-sekolah-formal-untuk-abk">perbedaan homeschooling dan sekolah formal untuk ABK</a> dan <a href="anak-abk-harus-sekolah-dimana">anak ABK harus sekolah di mana</a>. Peran orang tua tetap besar di jalur mana pun, seperti dibahas dalam <a href="peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.'),
  fig(bodyImages.group, 'Rombongan anak, remaja, dan pendamping berkaos merah muda duduk bersama di tangga sebuah candi', 'Dokumentasi kegiatan bersama keluarga dan pendamping YUKA. Keterlibatan orang tua tetap menjadi kunci, baik anak belajar di sekolah maupun di rumah.'),

  h2('penilaian', 'Penilaian, Ujian Kesetaraan, dan Pindah ke Sekolah Formal'),
  p('Pasal 4 ayat (1) Permendikbud 129 Tahun 2014 menyatakan hasil sekolahrumah diakui sama dengan pendidikan formal dan nonformal setelah peserta didik lulus ujian sesuai standar nasional pendidikan. Pasal 8 ayat (3) menyebut penilaian dilakukan oleh pendidik, oleh satuan pendidikan nonformal atau formal, dan oleh pemerintah. Pasal 12 menambahkan bahwa peserta didik dapat mengikuti ujian pada satuan pendidikan formal atau nonformal yang disetujui atau ditunjuk dinas pendidikan kabupaten/kota.'),
  p('Jalur yang paling umum adalah pendidikan kesetaraan. Pasal 1 angka 13 mendefinisikannya sebagai program pendidikan nonformal yang mencakup Paket A, Paket B, Paket C, dan Paket C Kejuruan. UU Sisdiknas Pasal 26 ayat (6) menegaskan hasil pendidikan nonformal dapat dihargai setara dengan pendidikan formal setelah penilaian penyetaraan. Naskah 2014 masih memakai istilah UN dan UNPK, jadi tanyakan mekanisme ujian yang berlaku saat ini ke PKBM atau dinas.'),
  '<table class="article-table"><caption>Syarat diterima di sekolah formal bagi peserta didik sekolahrumah (Pasal 10 dan 11)</caption><thead><tr><th>Tujuan</th><th>Waktu masuk</th><th>Syarat</th></tr></thead><tbody><tr><td>SD/MI atau sederajat</td><td>Tidak pada awal kelas 1</td><td>Lulus tes kelayakan dan penempatan dari sekolah tujuan</td></tr><tr><td>SMP/MTs atau sederajat</td><td>Awal kelas 7</td><td>Lulus ujian kesetaraan Paket A atau lulus SD/MI sederajat</td></tr><tr><td>SMP/MTs atau sederajat</td><td>Tidak pada awal kelas 7</td><td>Lulus Paket A atau SD/MI sederajat, dan lulus tes kelayakan serta penempatan</td></tr><tr><td>SMA/MA, SMK/MAK atau sederajat</td><td>Awal kelas 10</td><td>Lulus Paket B atau lulus SMP/MTs sederajat</td></tr><tr><td>SMA/MA, SMK/MAK atau sederajat</td><td>Sesudah awal kelas 10</td><td>Lulus Paket B atau SMP/MTs sederajat, dan lulus tes kelayakan serta penempatan</td></tr></tbody></table>',
  p('Pasal 4 ayat (2) menegaskan lulusan yang hasilnya telah disetarakan memiliki hak yang sama untuk mendaftar ke jenjang lebih tinggi atau memasuki lapangan kerja. Untuk pertanyaan seputar jenjang ijazah pada jalur pendidikan khusus, lihat juga <a href="ijazah-slb-setara-apa">ijazah SLB setara apa</a>.'),

  h2('abk', 'Syarat Izin Homeschooling untuk Anak Berkebutuhan Khusus'),
  p('Permendikbud 129 Tahun 2014 tidak membuat daftar syarat tersendiri untuk anak berkebutuhan khusus. Berkas pendaftarannya sama dengan anak lain. Namun, kerangka hak anak berkebutuhan khusus membuat dokumen program perlu disusun lebih cermat. UU 20 Tahun 2003 Pasal 5 ayat (2) menyatakan warga negara yang memiliki kelainan fisik, emosional, mental, intelektual, dan/atau sosial berhak memperoleh pendidikan khusus.'),
  p('UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas Pasal 10 menyebut hak pendidikan penyandang disabilitas, antara lain mendapatkan pendidikan bermutu di semua jenis, jalur, dan jenjang pendidikan secara inklusif dan khusus, serta mendapatkan akomodasi yang layak sebagai peserta didik. Kata "semua jalur" berarti hak ini juga melekat ketika anak belajar melalui jalur informal.'),
  p('Dalam praktik, perkuat tiga hal di dokumen program. Pertama, tuliskan profil kebutuhan belajar anak berdasarkan hasil <a href="asesmen-abk">asesmen ABK</a>, bukan hanya label diagnosis. Kedua, susun tujuan dan akomodasi seperti dalam <a href="program-pembelajaran-individual">program pembelajaran individual</a>. Ketiga, rencanakan sejak awal akomodasi ujian yang mungkin dibutuhkan, lalu tanyakan kemungkinannya ke PKBM atau satuan pendidikan tempat anak akan diuji.'),
  p('Homeschooling bisa menjadi pilihan baik bagi sebagian anak, tetapi bukan satu-satunya jalan. Pendidikan khusus dan <a href="pendidikan-inklusi">pendidikan inklusi</a> juga merupakan hak anak. Bandingkan dengan tenang, termasuk melalui ulasan <a href="homeschooling-anak-berkebutuhan-khusus">homeschooling untuk anak berkebutuhan khusus</a> dan <a href="apa-saja-hak-anak-berkebutuhan-khusus">hak anak berkebutuhan khusus</a>.'),
  fig(bodyImages.support, 'Seorang anak berkostum tradisional dan seorang pendamping berhijab bergerak bersama di halaman rumput candi', 'Dokumentasi kegiatan YUKA: pendamping menirukan gerak anak di halaman candi. Dukungan yang tepat dari orang dewasa di sekitarnya merupakan bagian dari akomodasi yang layak.'),

  h2('checklist', 'Kesalahan Umum dan Checklist Dokumen'),
  p('Sebagian besar masalah administrasi homeschooling bukan karena aturan yang rumit, melainkan karena langkah sederhana terlewat. Beberapa kesalahan yang sering terjadi dan cara menghindarinya:'),
  ul([
    '<strong>Tidak mendaftar sama sekali.</strong> Keluarga merasa cukup "belajar di rumah", lalu kesulitan saat anak butuh ujian atau pindah sekolah. Pasal 6 ayat (1) menjadikan pendaftaran sebagai kewajiban.',
    '<strong>Mengira semua lembaga homeschooling berizin.</strong> Tanyakan status perizinan dan nomor identitas satuan pendidikannya, lalu cocokkan dengan informasi dinas.',
    '<strong>Dokumen program terlalu umum.</strong> Rencana pembelajaran wajib ada, dan pendidikan agama, Pancasila dan kewarganegaraan, serta bahasa Indonesia wajib tercantum.',
    '<strong>Tidak menyimpan catatan kemajuan.</strong> Portofolio dan laporan kemajuan memudahkan penilaian dan tes penempatan.',
    '<strong>Menunda rencana ujian.</strong> Tanyakan sejak awal satuan pendidikan yang ditunjuk dinas untuk ujian kesetaraan.',
  ]),
  p('Checklist ringkas sebelum ke dinas: identitas orang tua dan anak, surat pernyataan orang tua (atau pernyataan 2 sampai 10 keluarga untuk majemuk), surat kesediaan anak usia 13 tahun ke atas, dokumen program berisi rencana pembelajaran, dan catatan kontak PKBM atau sekolah calon tempat ujian. Untuk komunitas, siapkan berkas perizinan satuan pendidikan nonformal sesuai arahan dinas.'),
  p('Semoga Allah memudahkan setiap ikhtiar orang tua dalam mendidik anak, apa pun jalur yang dipilih. Bila Anda membutuhkan teman diskusi tentang pilihan pendidikan anak berkebutuhan khusus di Yogyakarta, tim YUKA dapat dihubungi melalui tombol WhatsApp di bawah artikel ini.'),

  faqHtml,
].join('\n');

const article = {
  slug,
  titleTag: 'Syarat Izin Homeschooling: Dasar Hukum dan Cara Daftar',
  metaDesc: 'Syarat izin homeschooling menurut Permendikbud 129/2014: berkas daftar sekolahrumah tunggal dan majemuk, izin komunitas, kurikulum wajib, dan ujian kesetaraan.',
  keywords: 'syarat izin homeschooling, izin homeschooling, sekolahrumah, Permendikbud 129 Tahun 2014, daftar homeschooling dinas pendidikan, homeschooling ABK',
  ogTitle: 'Syarat Izin Homeschooling di Indonesia',
  ogDesc: 'Panduan berkas, prosedur pendaftaran ke dinas pendidikan, dan kewajiban legal sekolahrumah tunggal, majemuk, serta komunitas.',
  datePublished: '2026-10-13',
  dateModified: '2026-10-13',
  dateDisplay: '13 Okt 2026',
  readTime: '12 menit baca',
  category: 'Pendidikan',
  h1: 'Syarat Izin Homeschooling: Dasar Hukum, Berkas, dan Prosedur Pendaftaran',
  crumb: 'Syarat Izin Homeschooling',
  about: ['Sekolahrumah', 'Homeschooling', 'Permendikbud Nomor 129 Tahun 2014', 'Pendidikan informal'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'biaya-homeschooling', title: 'Biaya Homeschooling', desc: 'Rincian biaya jalur mandiri, komunitas, PKBM, dan ujian kesetaraan.' },
    { href: 'homeschooling-anak-berkebutuhan-khusus', title: 'Homeschooling untuk Anak Berkebutuhan Khusus', desc: 'Kapan homeschooling cocok untuk ABK dan bagaimana menjalankannya.' },
    { href: 'homeschooling-vs-sekolah-inklusi', title: 'Homeschooling vs Sekolah Inklusi', desc: 'Membandingkan dua pilihan pendidikan untuk anak berkebutuhan khusus.' },
    { href: 'program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Menyusun tujuan dan akomodasi belajar sesuai kebutuhan anak.' },
  ],
  tags: ['Homeschooling', 'Sekolahrumah', 'RegulasiPendidikan', 'PendidikanABK'],
  sources: [
    { url: 'https://peraturan.go.id/files/bn1660-2014.pdf', label: 'Berita Negara RI 2014 No. 1660, Permendikbud Nomor 129 Tahun 2014 tentang Sekolahrumah (naskah)' },
    { url: 'https://peraturan.go.id/id/permendikbud-no-129-tahun-2014', label: 'Ditjen Peraturan Perundang-undangan, status Permendikbud Nomor 129 Tahun 2014' },
    { url: 'https://peraturan.bpk.go.id/Details/43920/uu-no-20-tahun-2003', label: 'JDIH BPK, UU Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional' },
    { url: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016', label: 'JDIH BPK, UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas' },
  ],
  sourcesCheckedNote: 'Naskah peraturan dibaca langsung dan status peraturan diperiksa pada 11 Oktober 2026. Prosedur teknis pendaftaran dapat berbeda antardaerah, jadi konfirmasikan ke dinas pendidikan kabupaten/kota setempat.',
};

const html = renderArticlePage(article);
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

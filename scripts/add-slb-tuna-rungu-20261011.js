'use strict';
// Generator artikel "SLB Tuna Rungu" (cycle #76, 2026-10-11). Dijadwalkan tayang 2026-10-18.
// TIDAK menulis kartu ke blog.html: kartu ditambah workflow publish-scheduled saat tanggal tayang.
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'slb-tuna-rungu';
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
  'Dokumentasi/museum-gunung-merapi-gambar-056.webp',
  'Anak-anak dan pendamping YUKA mengamati alat peraga di ruang pamer museum dalam kunjungan edukasi',
  'Dokumentasi kunjungan edukasi YUKA ke museum: anak dan pendamping mengamati alat peraga bersama. Foto ini bukan dokumentasi kegiatan di SLB-B.'
);
const bodyImages = {
  tangga: 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-107.webp',
  kostum: 'Dokumentasi/candi-plaosan-wisatawan-candi-borobudur-foto-bersama-009.webp',
  gerbang: 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-043.webp',
  ruang: 'Dokumentasi/museum-gunung-merapi-grup-keluarga-foto-bersama-istana-023.webp',
};

const faq = [
  { q: 'Apa itu SLB tuna rungu?', a: 'SLB tuna rungu adalah sekolah luar biasa yang melayani peserta didik dengan hambatan pendengaran. Dalam penamaan yang masih banyak dipakai, sekolah ini dikenal sebagai SLB-B. Banyak SLB juga melayani lebih dari satu jenis kekhususan, jadi pastikan sekolah benar-benar memiliki layanan untuk anak tunarungu.' },
  { q: 'Apa arti huruf B pada SLB-B?', a: 'Huruf B adalah kode kekhususan dalam penamaan SLB yang lazim dipakai untuk layanan anak tunarungu, berdampingan dengan kode lain seperti A untuk tunanetra dan C untuk tunagrahita. Nama sekolah tidak selalu memakai huruf ini, sehingga layanan yang tersedia tetap perlu ditanyakan langsung ke sekolah.' },
  { q: 'Jenjang apa saja yang tersedia di SLB tuna rungu?', a: 'Jenjangnya mengikuti pendidikan khusus formal, yaitu TKLB, SDLB, SMPLB, dan jenjang menengah seperti SMALB atau SMKLB. Tidak semua sekolah membuka seluruh jenjang, jadi cek data program atau layanan sekolah di Data Referensi Kemendikdasmen.' },
  { q: 'Apakah anak tunarungu wajib sekolah di SLB?', a: 'Tidak. Anak tunarungu dapat belajar di SLB atau di sekolah reguler yang menyelenggarakan pendidikan inklusif. Pilihan terbaik bergantung pada cara komunikasi anak, dukungan yang tersedia, kesiapan guru, jarak, dan pertimbangan keluarga.' },
  { q: 'Bagaimana cara mengecek SLB yang resmi?', a: 'Buka Data Referensi Kemendikdasmen, pilih menu program atau layanan Sekolah Luar Biasa, lalu telusuri provinsi, kabupaten atau kota, dan kecamatan. Profil tiap sekolah memuat NPSN, status, akreditasi, nomor SK izin operasional, alamat, dan kontak.' },
  { q: 'Apakah pendaftaran SLB mengikuti jalur SPMB?', a: 'Permendikdasmen Nomor 3 Tahun 2025 mengecualikan jalur penerimaan murid baru bagi satuan pendidikan yang menyelenggarakan pendidikan khusus. Karena itu, jadwal dan tata cara pendaftaran SLB perlu ditanyakan langsung ke sekolah atau dinas pendidikan setempat.' },
  { q: 'Dokumen apa yang perlu disiapkan untuk mendaftar?', a: 'Umumnya akta kelahiran, kartu keluarga, identitas orang tua, rapor atau ijazah jenjang sebelumnya, dan dokumen tentang kondisi pendengaran anak seperti kartu penyandang disabilitas atau surat keterangan dokter. Persyaratan persis tiap sekolah dapat berbeda.' },
  { q: 'Apakah SLB-B mengajarkan bahasa isyarat?', a: 'Banyak SLB-B memakai bahasa isyarat bersama bahasa lisan, membaca ujaran, dan tulisan. Sistem yang dipakai bisa SIBI, BISINDO, atau kombinasi. Tanyakan pendekatan komunikasi sekolah dan pastikan sesuai dengan cara anak berkomunikasi di rumah.' },
];
const faqHtml = `<div class="faq-list">${h2('faq', 'Pertanyaan yang Sering Diajukan')}${faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div>`;

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> SLB tuna rungu, yang dalam penamaan lama dikenal sebagai SLB-B, adalah sekolah luar biasa yang melayani anak dengan hambatan pendengaran dari jenjang TKLB, SDLB, SMPLB, sampai SMALB atau SMKLB. Sekolah ini memberi program kekhususan seperti pengembangan komunikasi dan latihan persepsi bunyi, serta dapat memakai bahasa isyarat. Sebelum memilih, cek izin dan akreditasi sekolah lewat Data Referensi Kemendikdasmen, lalu kunjungi sekolahnya langsung.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#pengertian">Apa itu SLB tuna rungu (SLB-B)?</a></li><li><a href="#jenjang">Jenjang pendidikan di SLB tuna rungu</a></li><li><a href="#kurikulum">Kurikulum dan program kekhususan</a></li><li><a href="#komunikasi">Pendekatan komunikasi: lisan, isyarat, BISINDO, dan SIBI</a></li><li><a href="#perbandingan">SLB-B atau sekolah inklusi?</a></li><li><a href="#memilih">Cara memilih SLB tuna rungu</a></li><li><a href="#data-resmi">Cara mencari data SLB resmi</a></li><li><a href="#pendaftaran">Pendaftaran dan dokumen yang disiapkan</a></li><li><a href="#orang-tua">Peran orang tua selama anak bersekolah</a></li><li><a href="#faq">Pertanyaan yang sering diajukan</a></li></ol></div>',

  h2('pengertian', 'Apa Itu SLB Tuna Rungu (SLB-B)?'),
  p('SLB tuna rungu adalah satuan pendidikan khusus untuk peserta didik yang mengalami hambatan pendengaran. Peraturan Pemerintah Nomor 17 Tahun 2010 menyebut tunarungu sebagai salah satu kelompok peserta didik berkelainan yang berhak atas pendidikan khusus, bersama tunanetra, tunawicara, tunagrahita, tunadaksa, dan kelompok lain. Tujuannya mengembangkan potensi anak secara optimal sesuai kemampuannya.'),
  p('Di masyarakat, sekolah ini sering disebut SLB-B. Huruf B adalah kode kekhususan dalam penamaan SLB yang sudah lama dipakai untuk layanan tunarungu, berdampingan dengan kode lain seperti A untuk tunanetra dan C untuk tunagrahita. Kode ini membantu orang tua mengenali fokus layanan, tetapi bukan jaminan. Ada sekolah bernama SLB-B yang juga menerima kekhususan lain, dan ada SLB tanpa huruf apa pun yang memiliki kelas tunarungu.'),
  p('Hal ini wajar karena PP 17 Tahun 2010 Pasal 133 membolehkan satuan pendidikan khusus diselenggarakan secara terintegrasi antarjenjang dan antarjenis kelainan. Jadi, pertanyaan yang paling penting bukan sekadar huruf di papan nama, melainkan apakah sekolah punya guru, kelas, dan cara komunikasi yang cocok untuk anak tunarungu. Bila Anda masih mempelajari kondisi anak, baca juga <a href="tuna-rungu-adalah">pengertian tuna rungu</a> dan <a href="slb-adalah">penjelasan umum tentang SLB</a>.'),
  fig(bodyImages.tangga, 'Rombongan anak dan pendamping YUKA duduk bersama di tangga candi saat kunjungan edukasi', 'Rombongan anak dan pendamping YUKA dalam kunjungan edukasi ke candi. Kegiatan luar kelas seperti ini memberi kesempatan berlatih berkomunikasi dengan banyak orang. Foto ini dokumentasi kunjungan, bukan kegiatan di SLB-B.'),

  h2('jenjang', 'Jenjang Pendidikan di SLB Tuna Rungu'),
  p('PP 17 Tahun 2010 Pasal 133 mengatur bentuk satuan pendidikan khusus formal. Untuk anak usia dini bentuknya taman kanak-kanak luar biasa. Untuk pendidikan dasar ada sekolah dasar luar biasa dan sekolah menengah pertama luar biasa. Untuk pendidikan menengah ada sekolah menengah atas luar biasa dan sekolah menengah kejuruan luar biasa. Permendikbudristek Nomor 48 Tahun 2023 juga menyebut TKLB, SDLB, SMPLB, SMALB, dan SMKLB sebagai satuan pendidikan yang wajib memperhatikan akomodasi yang layak.'),
  p('Tidak semua SLB membuka semua jenjang. Saat diperiksa pada 11 Oktober 2026, halaman program atau layanan SLB di Data Referensi Kemendikdasmen mencatat untuk D.I. Yogyakarta 27 layanan TKLB, 80 SDLB, 79 SMPLB, dan 77 SMLB, dengan total 263 layanan. Angka ini menghitung layanan per jenjang, bukan jumlah gedung sekolah, dan tidak dipilah per jenis kekhususan. Datanya dapat berubah sewaktu-waktu.'),
  '<table class="article-table"><caption>Jenjang pendidikan khusus formal dan hal yang perlu ditanyakan untuk anak tunarungu</caption><thead><tr><th>Jenjang</th><th>Padanan jenjang reguler</th><th>Hal yang perlu ditanyakan ke sekolah</th></tr></thead><tbody><tr><td>TKLB</td><td>Taman kanak-kanak</td><td>Cara sekolah membangun bahasa awal, kebiasaan memakai alat bantu dengar, dan keterlibatan orang tua di kelas</td></tr><tr><td>SDLB</td><td>Sekolah dasar</td><td>Pendekatan komunikasi, cara mengajar membaca dan menulis, serta jadwal program kekhususan</td></tr><tr><td>SMPLB</td><td>Sekolah menengah pertama</td><td>Penyesuaian materi akademik, dukungan bahasa tulis, dan kegiatan sosial di luar kelas</td></tr><tr><td>SMALB atau SMKLB</td><td>SMA atau SMK</td><td>Program keterampilan, persiapan kerja atau studi lanjut, dan kemitraan dengan dunia usaha</td></tr></tbody></table>',
  p('Untuk anak yang pindah jalur, misalnya dari SDLB ke SMP reguler, tanyakan sejak awal bagaimana sekolah tujuan menilai kesiapan dan dokumen apa yang dibutuhkan. Penjelasan tentang status kelulusan ada di artikel <a href="ijazah-slb-setara-apa">ijazah SLB setara apa</a>.'),

  h2('kurikulum', 'Kurikulum dan Program Kekhususan'),
  p('SLB mengikuti kurikulum nasional yang berlaku, lalu menyesuaikannya dengan kebutuhan peserta didik. Untuk anak tunarungu, penyesuaian terbesar biasanya ada pada akses bahasa. Banyak konsep pelajaran disampaikan lewat bahasa, sehingga anak yang belum memiliki bahasa yang kuat perlu bantuan visual, isyarat, tulisan, dan pengulangan dalam konteks nyata.'),
  p('Selain mata pelajaran umum, SLB untuk anak tunarungu biasanya memiliki program kekhususan. Di banyak sekolah, program ini dikenal dengan nama seperti Pengembangan Komunikasi, Persepsi Bunyi, dan Irama atau bina komunikasi. Nama, jam pelajaran, dan isinya dapat berbeda antarsekolah, jadi mintalah sekolah menunjukkan dokumen kurikulum satuan pendidikannya.'),
  h3('Bina komunikasi'),
  p('Bina komunikasi melatih anak memahami dan menyampaikan pesan. Isinya dapat mencakup kosakata, struktur kalimat, membaca ujaran, latihan bicara, isyarat, dan bahasa tulis. Targetnya anak mampu meminta, bertanya, menolak, bercerita, dan memahami instruksi sesuai cara komunikasi yang paling efektif baginya.'),
  h3('Persepsi bunyi dan irama'),
  p('Latihan persepsi bunyi membantu anak yang masih memiliki sisa pendengaran untuk menyadari ada atau tidaknya bunyi, membedakan bunyi, dan mengenali pola atau irama. Kegiatannya sering memakai alat musik sederhana, getaran, dan permainan. Manfaatnya berbeda pada tiap anak, bergantung pada tingkat pendengaran dan alat bantu yang dipakai.'),
  p('Program kekhususan sebaiknya dituangkan dalam rencana belajar individual agar target dan kemajuannya terukur. Panduan menyusunnya ada di artikel <a href="program-pembelajaran-individual">program pembelajaran individual</a>, sedangkan cara menilai kebutuhan awal dibahas di <a href="asesmen-abk">asesmen anak berkebutuhan khusus</a>.'),
  fig(bodyImages.kostum, 'Sekelompok anak dan pendamping YUKA berkostum warna-warni duduk di depan candi', 'Anak dan pendamping YUKA berkostum dalam kegiatan seni saat kunjungan ke candi. Kegiatan seni dan gerak dapat menjadi konteks belajar irama, giliran, dan kerja sama. Foto ini bukan dokumentasi kelas SLB-B.'),

  h2('komunikasi', 'Pendekatan Komunikasi: Lisan, Isyarat, BISINDO, dan SIBI'),
  p('Anak tunarungu tidak seragam. Panduan Pelaksanaan Pendidikan Inklusif dari Kemendikbudristek membedakan kelompok kurang dengar dan tuli, serta menegaskan bahwa anak yang memakai alat bantu dengar tetap membutuhkan penyesuaian layanan pendidikan. WHO juga menjelaskan bahwa orang dengan gangguan pendengaran ringan sampai berat umumnya berkomunikasi lewat bahasa lisan dan terbantu alat dengar serta teks, sedangkan sebagian orang Tuli memakai bahasa isyarat.'),
  p('Karena itu, sekolah dapat memakai pendekatan yang berbeda. Ada yang menekankan bahasa lisan dan membaca ujaran, ada yang memakai bahasa isyarat, dan banyak yang menggabungkan keduanya dengan tulisan serta media visual. Dua sistem isyarat yang paling sering dibicarakan di Indonesia adalah SIBI dan BISINDO. Perbedaan dan sejarah keduanya dibahas di <a href="bisindo-adalah">BISINDO adalah</a> dan <a href="bahasa-isyarat-tuna-rungu">bahasa isyarat tuna rungu</a>.'),
  p('Regulasi memberi pegangan yang jelas. PP Nomor 13 Tahun 2020 Pasal 15 menyebut bentuk akomodasi yang layak bagi peserta didik penyandang disabilitas rungu, antara lain komunikasi dalam pembelajaran dan evaluasi dengan cara yang sesuai pilihan masing-masing peserta didik, pendampingan juru bahasa isyarat atau juru catat bila pendidik tidak dapat berbahasa isyarat, serta fleksibilitas bentuk tugas dan evaluasi.'),
  p('Saat berkunjung, tanyakan bahasa apa yang dipakai guru di kelas, apakah guru lancar berisyarat, dan bagaimana sekolah melibatkan orang tua agar komunikasi di rumah sejalan. Tips praktis sehari-hari tersedia di <a href="cara-berkomunikasi-dengan-anak-tuna-rungu">cara berkomunikasi dengan anak tuna rungu</a>.'),

  h2('perbandingan', 'SLB-B atau Sekolah Inklusi?'),
  p('Pilihan sekolah bukan soal mana yang lebih baik secara umum, tetapi mana yang paling sesuai untuk anak saat ini. Sebagian anak berkembang pesat di SLB karena seluruh lingkungan memakai bahasa yang sama. Sebagian lain cocok di sekolah inklusi bila sekolah siap memberi akomodasi. Pilihan juga boleh berubah seiring perkembangan anak.'),
  '<table class="article-table"><caption>Perbandingan umum SLB tuna rungu dan sekolah inklusi</caption><thead><tr><th>Aspek</th><th>SLB tuna rungu (SLB-B)</th><th>Sekolah reguler penyelenggara inklusi</th></tr></thead><tbody><tr><td>Lingkungan bahasa</td><td>Guru dan teman umumnya terbiasa dengan kebutuhan komunikasi anak tunarungu</td><td>Mayoritas teman berkomunikasi secara lisan, anak perlu dukungan agar tidak tertinggal</td></tr><tr><td>Program kekhususan</td><td>Biasanya tersedia sebagai bagian dari jadwal sekolah</td><td>Bergantung pada guru pendamping khusus dan layanan pendukung yang ada</td></tr><tr><td>Ukuran kelas</td><td>Cenderung kecil sehingga guru dapat memberi perhatian lebih</td><td>Kelas lebih besar, perlu strategi seperti tempat duduk depan dan materi tertulis</td></tr><tr><td>Interaksi sosial</td><td>Anak bertemu teman dengan pengalaman yang mirip dan komunitas isyarat</td><td>Anak berbaur dengan teman sebaya yang lebih beragam</td></tr><tr><td>Hal yang perlu dicek</td><td>Jenjang yang dibuka, kompetensi guru, dan jarak dari rumah</td><td>Kesiapan guru, akomodasi yang layak, dan ketersediaan juru bahasa isyarat atau juru catat</td></tr></tbody></table>',
  p('Untuk sekolah reguler, Permendikbudristek Nomor 48 Tahun 2023 mengatur penyediaan akomodasi yang layak dan pembentukan Unit Layanan Disabilitas. Tanyakan bagaimana sekolah menerapkannya. Pembahasan lebih lengkap ada di <a href="apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a>, <a href="pendidikan-inklusi">pendidikan inklusi</a>, dan <a href="anak-abk-harus-sekolah-dimana">anak ABK harus sekolah di mana</a>.'),
  fig(bodyImages.gerbang, 'Beberapa anak dan pendamping YUKA berpose di gerbang batu sebuah candi', 'Anak dan pendamping YUKA dalam kunjungan edukasi ke candi. Pilihan sekolah sebaiknya mempertimbangkan kesempatan anak bergaul dan berpartisipasi, bukan hanya label sekolahnya. Foto ini dokumentasi kunjungan.'),

  h2('memilih', 'Cara Memilih SLB Tuna Rungu'),
  p('Memilih sekolah lebih mudah bila Anda memakai daftar periksa yang sama untuk setiap kandidat. Kunjungi minimal dua sekolah, datang saat jam belajar bila diizinkan, dan ajak anak bila memungkinkan. Reaksi anak terhadap suasana kelas sering memberi informasi yang tidak tertulis di brosur.'),
  ol([
    '<strong>Pastikan legalitas.</strong> Cek NPSN, status negeri atau swasta, dan nomor SK izin operasional di Data Referensi Kemendikdasmen.',
    '<strong>Lihat akreditasi.</strong> Status akreditasi tercantum di profil sekolah. Tanyakan juga kapan sekolah terakhir dinilai.',
    '<strong>Tanyakan layanan tunarungu secara spesifik.</strong> Berapa kelas atau rombongan belajar untuk anak tunarungu di jenjang yang Anda tuju, dan siapa gurunya.',
    '<strong>Nilai kompetensi komunikasi guru.</strong> Minta penjelasan pendekatan komunikasi dan, bila perlu, lihat guru berinteraksi dengan siswa.',
    '<strong>Cek dukungan alat bantu dengar.</strong> Tanyakan apakah guru terbiasa memeriksa alat bantu dengar, cara sekolah mengurangi kebisingan, dan apa yang dilakukan bila alat rusak saat jam sekolah.',
    '<strong>Perhatikan ruang kelas.</strong> Pencahayaan yang baik membantu anak membaca ujaran dan isyarat, sedangkan kelas yang bising menyulitkan pengguna alat dengar.',
    '<strong>Hitung akses dan transportasi.</strong> Jarak dan waktu tempuh memengaruhi kehadiran dan energi anak setiap hari.',
    '<strong>Tanyakan komunikasi dengan orang tua.</strong> Buku penghubung, pertemuan rutin, atau pelatihan bahasa isyarat untuk keluarga adalah tanda kemitraan yang baik.'
  ]),
  p('Jangan ragu meminta waktu untuk berpikir setelah kunjungan. Sekolah yang baik akan menjawab pertanyaan dengan terbuka dan tidak menekan keluarga untuk segera mendaftar.'),

  h2('data-resmi', 'Cara Mencari Data SLB Resmi'),
  p('Daftar SLB di internet sering tidak diperbarui. Sumber yang lebih dapat diandalkan adalah Data Referensi Kemendikdasmen di referensi.data.kemendikdasmen.go.id, yang dikelola Pusdatin Kemendikdasmen sebagai acuan sinkronisasi data pendidikan. Halaman ini menampilkan program atau layanan SLB per provinsi sampai tingkat kecamatan.'),
  ol([
    'Buka <a href="https://referensi.data.kemendikdasmen.go.id/pendidikan/program/slb" target="_blank" rel="noopener">halaman program atau layanan SLB</a> di Data Referensi Kemendikdasmen.',
    'Pilih provinsi, lalu kabupaten atau kota, lalu kecamatan tempat Anda tinggal atau kecamatan di sekitarnya.',
    'Perhatikan kolom TKLB, SDLB, SMPLB, dan SMLB untuk melihat jenjang yang dibuka setiap sekolah.',
    'Klik NPSN sekolah untuk membuka profilnya. Profil memuat status, akreditasi, nomor SK izin operasional, yayasan penaung untuk sekolah swasta, alamat, kontak, dan koordinat peta.',
    'Bila sudah tahu nama atau NPSN sekolah, gunakan kotak Cari Sekolah atau NPSN di bagian atas halaman.',
    'Hubungi sekolah untuk memastikan layanan bagi anak tunarungu, kuota, dan jadwal pendaftaran.'
  ]),
  p('Satu catatan penting: profil sekolah di Data Referensi tidak selalu menyebutkan jenis kekhususan yang dilayani. Karena itu, langkah terakhir tetap wajib dilakukan. Kemendikdasmen juga menyediakan portal Sekolah Kita di sekolah.data.kemendikdasmen.go.id untuk melihat profil dan peta sekolah. Untuk mencari sekolah di sekitar rumah, baca panduan <a href="slb-terdekat">mencari SLB terdekat</a>.'),
  fig(bodyImages.ruang, 'Kelompok anak dan pendamping YUKA berkumpul di sebuah ruangan bergaya klasik saat kunjungan edukasi', 'Anak dan pendamping YUKA berkumpul dalam sebuah ruangan saat kunjungan edukasi. Sebelum mendaftar, kunjungan langsung ke sekolah membantu orang tua menilai suasana belajar yang sebenarnya. Foto ini bukan dokumentasi SLB-B.'),

  h2('pendaftaran', 'Pendaftaran dan Dokumen yang Disiapkan'),
  p('Banyak orang tua mengira semua sekolah mengikuti jalur Sistem Penerimaan Murid Baru (SPMB). Permendikdasmen Nomor 3 Tahun 2025 menyebut SPMB dilaksanakan oleh TK, SD, SMP, SMA, dan SMK. Pasal 7 ayat (2) mengecualikan jalur penerimaan murid baru, yaitu domisili, afirmasi, prestasi, dan mutasi, untuk satuan pendidikan yang menyelenggarakan pendidikan khusus. Jadi, tata cara pendaftaran SLB perlu ditanyakan langsung ke sekolah atau dinas pendidikan setempat.'),
  p('Bila anak mendaftar ke sekolah reguler, aturan yang sama memberi ruang lewat Jalur Afirmasi, yang diperuntukkan bagi calon murid dari keluarga ekonomi tidak mampu dan calon murid penyandang disabilitas. Persyaratan khususnya adalah kartu penyandang disabilitas dari kementerian di bidang sosial atau surat keterangan dari dokter atau dokter spesialis. Pasal 15 juga mengecualikan persyaratan usia bagi calon murid penyandang disabilitas.'),
  p('Dokumen yang umumnya diminta saat mendaftar ke SLB atau sekolah reguler meliputi:'),
  ul([
    'Akta kelahiran dan kartu keluarga.',
    'Identitas orang tua atau wali.',
    'Rapor atau ijazah jenjang sebelumnya, bila ada.',
    'Kartu penyandang disabilitas atau surat keterangan dokter tentang kondisi pendengaran anak.',
    'Hasil pemeriksaan pendengaran dan laporan asesmen atau terapi yang sudah pernah dilakukan.',
    'Catatan tentang alat bantu dengar atau implan yang dipakai, termasuk kontak layanan perawatannya.'
  ]),
  p('Persyaratan persis bisa berbeda di tiap sekolah dan daerah. Informasi pengurusan kartu ada di <a href="kartu-disabilitas">kartu disabilitas</a> dan <a href="bagaimana-cara-membuat-kartu-disabilitas">cara membuat kartu disabilitas</a>.'),

  h2('orang-tua', 'Peran Orang Tua Selama Anak Bersekolah'),
  p('Sekolah hanya mengisi sebagian hari anak. Bahasa tumbuh paling kuat bila anak mendapat akses komunikasi yang konsisten di rumah. Pelajari cara komunikasi yang dipakai sekolah, termasuk isyarat dasar bila sekolah memakainya, supaya anak tidak harus berganti sistem setiap pulang. Libatkan saudara dan kakek nenek sejauh mereka mampu.'),
  p('Jaga kebiasaan sederhana yang mendukung belajar. Pastikan alat bantu dengar terpasang dan berfungsi sebelum berangkat, bacakan atau ceritakan kegiatan harian dengan media visual, dan tanyakan pengalaman anak di sekolah dengan pertanyaan pendek. Bila ada kekhawatiran tentang perkembangan bicara, diskusikan dengan sekolah dan tenaga profesional. Gambaran layanannya ada di <a href="terapi-wicara">terapi wicara</a>.'),
  p('Hadiri pertemuan sekolah dan sampaikan perubahan yang Anda lihat di rumah. Kemitraan seperti ini membuat target belajar lebih realistis. Panduan umumnya dibahas di <a href="peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>. Bila Anda masih bertanya tentang peluang perbaikan pendengaran, artikel <a href="apakah-tuna-rungu-bisa-sembuh">apakah tuna rungu bisa sembuh</a> dapat membantu, dan keputusan medis tetap dibicarakan dengan dokter.'),
  p('Setiap anak tunarungu berhak tumbuh dengan bahasa, ilmu, dan rasa percaya diri. Semoga Allah memudahkan setiap langkah orang tua dalam memilih tempat belajar terbaik bagi buah hatinya.'),
  faqHtml,
].join('\n');

const article = {
  slug,
  titleTag: 'SLB Tuna Rungu (SLB-B): Jenjang, Program, dan Cara Memilih',
  metaDesc: 'Panduan SLB tuna rungu (SLB-B): jenjang TKLB sampai SMALB, program kekhususan, beda dengan sekolah inklusi, cara cek data resmi, dan dokumen pendaftaran.',
  keywords: 'slb tuna rungu, slb b, sekolah luar biasa tunarungu, sekolah anak tunarungu, sdlb tunarungu, cara memilih slb',
  ogTitle: 'SLB Tuna Rungu (SLB-B): Panduan Lengkap untuk Orang Tua',
  ogDesc: 'Mengenal SLB-B, jenjang, program kekhususan, pendekatan komunikasi, cara mengecek data SLB resmi, dan persiapan pendaftaran.',
  datePublished: '2026-10-18',
  dateModified: '2026-10-18',
  dateDisplay: '18 Okt 2026',
  readTime: '13 menit baca',
  category: 'Pendidikan',
  h1: 'SLB Tuna Rungu (SLB-B): Jenjang, Program Kekhususan, dan Cara Memilihnya',
  crumb: 'SLB Tuna Rungu',
  parent: { href: 'slb-adalah', name: 'SLB Adalah' },
  about: ['Sekolah luar biasa', 'Tunarungu', 'Pendidikan khusus'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'slb-terdekat', title: 'Cara Mencari SLB Terdekat', desc: 'Langkah menemukan sekolah luar biasa di sekitar rumah.' },
    { href: 'tuna-rungu-adalah', title: 'Tuna Rungu Adalah', desc: 'Pengertian, jenis, dan dampak hambatan pendengaran pada anak.' },
    { href: 'apa-perbedaan-sekolah-inklusi-dan-slb', title: 'Perbedaan Sekolah Inklusi dan SLB', desc: 'Pertimbangan memilih jalur pendidikan untuk anak berkebutuhan khusus.' },
    { href: 'bahasa-isyarat-tuna-rungu', title: 'Bahasa Isyarat Tuna Rungu', desc: 'Mengenal bahasa isyarat yang dipakai anak dan komunitas Tuli.' },
  ],
  tags: ['SLBTunaRungu', 'SLBB', 'Tunarungu', 'PendidikanKhusus'],
  sources: [
    { url: 'https://peraturan.bpk.go.id/Details/5025/pp-no-17-tahun-2010', label: 'JDIH BPK, PP Nomor 17 Tahun 2010 tentang Pengelolaan dan Penyelenggaraan Pendidikan (Pasal 129 dan 133)' },
    { url: 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020', label: 'JDIH BPK, PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas (Pasal 15)' },
    { url: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023', label: 'JDIH BPK, Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
    { url: 'https://peraturan.bpk.go.id/Details/315671/permendikdasmen-no-3-tahun-2025', label: 'JDIH BPK, Permendikdasmen Nomor 3 Tahun 2025 tentang Sistem Penerimaan Murid Baru' },
    { url: 'https://referensi.data.kemendikdasmen.go.id/pendidikan/program/slb', label: 'Data Referensi Kemendikdasmen, Jumlah Program atau Layanan SLB per Provinsi' },
    { url: 'https://repositori.kemendikdasmen.go.id/24970/1/Panduan_Inklusif.pdf', label: 'Kemendikbudristek, Panduan Pelaksanaan Pendidikan Inklusif (2021)' },
    { url: 'https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss', label: 'WHO, Deafness and hearing loss' },
  ],
  sourcesCheckedNote: 'Sumber resmi diperiksa pada 11 Oktober 2026. Data jumlah layanan SLB dapat berubah; selalu konfirmasi langsung ke sekolah dan dinas pendidikan setempat.',
};

const html = renderArticlePage(article);
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

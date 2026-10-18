'use strict';
// Generator artikel "asesmen abk sebelum masuk sekolah" (cycle #80, antrean 2026-10-19).
// Keyword dari Google Sheet Keyword Data YUKA (tab "Keyword Data"). Fakta regulasi dibaca langsung
// dari PDF JDIH BPK: Permendikdasmen 3/2025 (SPMB) dan Permendikbudristek 48/2023 (Akomodasi yang Layak).
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');
const ROOT = path.resolve(__dirname, '..');
const slug = 'asesmen-abk-sebelum-masuk-sekolah';
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const heroFile = 'Dokumentasi/yuka-asesmen-pra-sekolah-hero-20261019.webp';
const IMG = 'assets/images/artikel';

const diagrams = {
  [`${IMG}/${slug}-alur.svg`]: svg.flow('Alur asesmen sebelum anak masuk sekolah', 'Urutan yang bisa dibicarakan keluarga dengan sekolah dan profesional', [
    { h: 'Kumpulkan catatan', d: 'Riwayat perkembangan, laporan terapi, rapor PAUD, dan pengamatan harian di rumah.' },
    { h: 'Kunjungi sekolah', d: 'Tanyakan layanan inklusif, Unit Layanan Disabilitas, dan siapa yang melakukan asesmen.' },
    { h: 'Asesmen fungsional', d: 'Sekolah memetakan kondisi, hambatan, dan kebutuhan belajar anak, bukan menguji untuk menolak.' },
    { h: 'Konsultasi bersama', d: 'Anak, orang tua, guru, dan ULD membahas bentuk akomodasi yang layak.' },
    { h: 'Rencana awal', d: 'Tujuan semester pertama, penyesuaian kelas, dan pembagian peran ditulis bersama.' },
    { h: 'Tinjau ulang', d: 'Setelah beberapa pekan belajar, rencana dievaluasi dan diperbaiki bila perlu.' },
  ]),
  [`${IMG}/${slug}-tujuan.svg`]: svg.cards('Asesmen pra-sekolah: untuk apa?', 'Membedakan tujuan asesmen dari seleksi masuk', [
    { h: 'Tujuan yang sah', color: '#2B3A67', items: ['Memahami kekuatan dan hambatan belajar anak', 'Menentukan akomodasi yang layak sejak hari pertama', 'Menyiapkan guru dan lingkungan kelas', 'Menjadi dasar program pembelajaran individual'] },
    { h: 'Bukan tujuannya', color: '#E53935', items: ['Tes membaca, menulis, berhitung sebagai syarat kelas 1 SD', 'Mencari alasan untuk menolak calon murid', 'Memberi label permanen pada anak', 'Menggantikan diagnosis oleh tenaga kesehatan'] },
    { h: 'Hasil yang berguna', color: '#00838F', items: ['Profil kemampuan dalam bahasa sehari-hari', 'Daftar penyesuaian yang konkret', 'Nama penanggung jawab di sekolah', 'Jadwal evaluasi bersama keluarga'] },
  ]),
  [`${IMG}/${slug}-berkas.svg`]: svg.grid('Berkas yang membantu asesmen', 'Bawa yang ada, tidak perlu menunggu semuanya lengkap', ['Berkas', 'Isi yang dicari', 'Catatan'], [
    ['Catatan perkembangan', 'Usia mulai bicara, berjalan, makan sendiri, dan perubahan penting', 'Boleh berupa tulisan tangan orang tua'],
    ['Laporan terapi atau klinik', 'Rekomendasi, alat bantu, dan strategi yang terbukti membantu', 'Bagikan sebatas yang relevan untuk belajar'],
    ['Rapor atau catatan PAUD', 'Cara anak bergabung dalam kegiatan kelompok', 'Pengamatan guru sebelumnya sangat berharga'],
    ['Kartu atau surat keterangan disabilitas', 'Syarat jalur afirmasi SPMB bagi penyandang disabilitas', 'Lihat Pasal 19 ayat (2) Permendikdasmen 3/2025'],
    ['Contoh karya dan video singkat', 'Cara anak berkomunikasi, bermain, dan menyelesaikan tugas', 'Minta izin anak dan jaga privasinya'],
  ], [300, 470, 334]),
};

const fig = (file, alt, caption, kredit) => {
  const { w, h } = imageSize(path.join(ROOT, file));
  return `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${kredit}</span></figcaption></figure>`;
};
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA, disusun dari Permendikbudristek 48/2023 dan Permendikdasmen 3/2025.</span></figcaption></figure>`;

const faq = [
  { q: 'Apakah anak ABK wajib ikut asesmen sebelum masuk sekolah?', a: 'Untuk kelas 1 SD, Permendikdasmen 3/2025 Pasal 11 ayat (5) menegaskan calon murid tidak dipersyaratkan mengikuti tes membaca, menulis, berhitung, atau bentuk tes lain. Asesmen fungsional bagi anak penyandang disabilitas dipakai sekolah untuk menentukan akomodasi yang layak, bukan sebagai saringan masuk. Tanyakan kepada sekolah kapan asesmen itu dilakukan dan apa gunanya.' },
  { q: 'Siapa yang melakukan asesmen fungsional di sekolah?', a: 'Permendikbudristek 48/2023 Pasal 12 menyebut asesmen fungsional dilaksanakan oleh satuan pendidikan dan difasilitasi Unit Layanan Disabilitas. Dalam praktik, guru kelas, guru pembimbing khusus, dan tenaga lain dapat terlibat. Orang tua boleh menanyakan nama penanggung jawabnya dan meminta penjelasan hasil dengan bahasa yang mudah dipahami.' },
  { q: 'Apakah hasil asesmen bisa dipakai sekolah untuk menolak anak?', a: 'Tujuan asesmen fungsional menurut Pasal 12 ayat (5) Permendikbudristek 48/2023 adalah memperoleh informasi kondisi, hambatan, dan kebutuhan anak atas bentuk akomodasi yang layak. Jadi arah pembicaraannya adalah dukungan apa yang perlu disiapkan. Bila keluarga merasa hasil asesmen dipakai untuk menolak, minta penjelasan tertulis dan konsultasikan dengan dinas pendidikan setempat.' },
  { q: 'Apa beda asesmen pra-sekolah dengan diagnosis dokter atau psikolog?', a: 'Diagnosis menjawab pertanyaan kesehatan atau psikologis dan ditetapkan tenaga berwenang. Asesmen pendidikan menjawab pertanyaan belajar: bagaimana anak berkomunikasi, mengikuti rutinitas, memakai alat tulis, dan bergabung dalam kelompok. Keduanya saling melengkapi. Laporan klinis membantu, tetapi sekolah tetap perlu mengamati anak di lingkungan belajarnya sendiri.' },
  { q: 'Dokumen apa yang diperlukan untuk jalur afirmasi penyandang disabilitas?', a: 'Pasal 19 ayat (2) Permendikdasmen 3/2025 menyebut calon murid penyandang disabilitas pada jalur afirmasi harus memiliki kartu penyandang disabilitas dari kementerian yang menangani urusan sosial, atau surat keterangan dari dokter atau dokter spesialis. Ketentuan teknis tiap daerah dapat menambah rincian, jadi baca juknis SPMB daerah Anda.' },
  { q: 'Berapa lama sebaiknya asesmen dilakukan sebelum tahun ajaran dimulai?', a: 'Tidak ada angka baku yang berlaku nasional. Semakin awal keluarga mulai berkomunikasi dengan sekolah, semakin banyak waktu untuk menyiapkan alat bantu, jadwal, dan guru. Banyak keluarga mulai mengumpulkan catatan beberapa bulan sebelum pendaftaran, lalu melanjutkan pengamatan selama minggu pertama sekolah sebagai bagian dari evaluasi awal.' },
  { q: 'Bagaimana jika sekolah belum punya Unit Layanan Disabilitas?', a: 'Tanyakan apakah dinas pendidikan setempat sudah membentuk Unit Layanan Disabilitas yang dapat memfasilitasi sekolah. Sementara itu, keluarga dapat membantu dengan membawa catatan perkembangan, laporan terapi, dan contoh strategi yang berhasil di rumah. Rencana awal yang sederhana dan dievaluasi rutin lebih berguna daripada menunggu semua layanan lengkap.' },
];

const sections = [
  ['pengertian', 'Apa itu asesmen ABK sebelum masuk sekolah'],
  ['aturan', 'Aturan terbaru: tidak ada tes calistung untuk kelas 1 SD'],
  ['fungsional', 'Asesmen fungsional dan akomodasi yang layak'],
  ['yang-dinilai', 'Aspek yang biasanya diamati'],
  ['alur', 'Alur asesmen dari rumah sampai kelas'],
  ['berkas', 'Berkas yang perlu disiapkan orang tua'],
  ['afirmasi', 'Jalur afirmasi SPMB bagi anak penyandang disabilitas'],
  ['hasil', 'Membaca hasil asesmen dan menyusun rencana'],
  ['pertanyaan', 'Hal yang layak ditanyakan ke sekolah'],
  ['kesalahan', 'Kesalahan umum yang sebaiknya dihindari'],
  ['faq', 'Pertanyaan Umum tentang Asesmen ABK Pra-Sekolah'],
];

const bodyHtml = `
<div class="jawaban-singkat"><p><strong>Asesmen ABK sebelum masuk sekolah</strong> adalah proses mengenali kemampuan, hambatan, dan kebutuhan belajar anak berkebutuhan khusus agar sekolah dapat menyiapkan dukungan sejak hari pertama. Untuk kelas 1 SD, aturan SPMB terbaru melarang tes membaca, menulis, dan berhitung sebagai syarat masuk. Asesmen yang benar berfungsi sebagai dasar akomodasi, bukan saringan penolakan.</p></div>
<p>Menjelang pendaftaran sekolah, banyak orang tua anak berkebutuhan khusus bertanya hal yang sama: apakah anak saya akan dites, dan bagaimana jika hasilnya kurang baik? Kekhawatiran ini wajar. Kabar baiknya, regulasi pendidikan terbaru justru menempatkan asesmen sebagai alat untuk menyiapkan dukungan. Artikel ini membahas aturan yang berlaku, apa saja yang biasanya diamati, berkas yang membantu, serta cara membaca hasilnya bersama sekolah.</p>
<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>

<h2 id="pengertian">Apa itu asesmen ABK sebelum masuk sekolah</h2>
<p>Asesmen pra-sekolah adalah pengumpulan informasi tentang cara anak belajar sebelum ia mulai bersekolah atau pindah ke jenjang baru. Informasi itu mencakup komunikasi, kemandirian, perhatian, kemampuan motorik, interaksi sosial, dan kesiapan mengikuti rutinitas kelas. Tujuannya membantu guru menyiapkan cara mengajar yang cocok, bukan memberi angka lulus atau gagal.</p>
<p>Istilah asesmen sering tertukar dengan tes masuk. Tes masuk membandingkan calon murid satu sama lain untuk menentukan siapa yang diterima. Asesmen fungsional melihat satu anak secara utuh, lalu menjawab pertanyaan praktis: penyesuaian apa yang perlu ada di kelas, alat bantu apa yang diperlukan, dan siapa yang mendampingi. Penjelasan dasar tentang ragam asesmen dapat dibaca di artikel <a href="/artikel/asesmen-abk">asesmen ABK</a>.</p>
<p>Asesmen juga berbeda dari diagnosis. Diagnosis menjawab pertanyaan kesehatan atau psikologis dan ditetapkan oleh tenaga berwenang seperti dokter atau psikolog. Asesmen pendidikan menjawab pertanyaan belajar sehari-hari. Laporan klinis sangat membantu sebagai bahan, tetapi sekolah tetap perlu mengamati anak di lingkungan belajarnya sendiri, karena perilaku anak di ruang praktik bisa berbeda dengan perilakunya di kelas yang ramai.</p>
<p>Bagi keluarga, asesmen pra-sekolah adalah kesempatan berbagi pengetahuan. Orang tua paling mengenal kebiasaan, minat, dan pemicu stres anak. Guru mengenal tuntutan kelas. Ketika dua pengetahuan ini bertemu sebelum tahun ajaran dimulai, masa adaptasi anak biasanya lebih mulus dan kesalahpahaman di minggu pertama dapat dikurangi.</p>

<h2 id="aturan">Aturan terbaru: tidak ada tes calistung untuk kelas 1 SD</h2>
<p>Penerimaan murid baru kini diatur oleh <a href="https://peraturan.bpk.go.id/Details/315671/permendikdasmen-no-3-tahun-2025" target="_blank" rel="noopener">Permendikdasmen Nomor 3 Tahun 2025 tentang Sistem Penerimaan Murid Baru</a>. Pasal 11 ayat (5) menyatakan calon murid kelas 1 SD tidak dipersyaratkan mengikuti tes kemampuan membaca, menulis, berhitung, dan/atau bentuk tes lain. Ketentuan ini berlaku untuk semua anak, termasuk anak berkebutuhan khusus.</p>
<p>Pasal yang sama mengatur usia. Calon murid kelas 1 SD berusia 7 tahun pada 1 Juli tahun berjalan, dan anak berusia paling rendah 6 tahun dapat mendaftar. Anak berusia 7 tahun ke atas diprioritaskan. Pengecualian usia 5 tahun 6 bulan hanya untuk anak dengan kecerdasan atau bakat istimewa dan kesiapan psikis yang dibuktikan rekomendasi psikolog profesional atau dewan guru.</p>
<p>Artinya, bila ada sekolah dasar yang meminta anak lulus tes membaca agar diterima di kelas 1, permintaan itu tidak sejalan dengan aturan nasional. Keluarga boleh menanyakan dasar permintaan tersebut dengan sopan. Ini berbeda dengan pengamatan yang dilakukan sekolah untuk merencanakan dukungan, yang justru membantu anak dan sebaiknya disambut.</p>
<p>Untuk jenjang SMP dan SMA, persyaratan dan jalur seleksi berbeda, misalnya ada jalur prestasi yang memakai nilai rapor atau hasil tes akademik. Meski demikian, prinsip akomodasi bagi peserta didik penyandang disabilitas tetap berlaku di semua jenjang. Bila anak sedang bersiap pindah jenjang, baca juga panduan <a href="/artikel/transisi-anak-abk-dari-tk-ke-sd">transisi anak ABK dari TK ke SD</a>.</p>
${fig(`${IMG}/commons-belajar-kelompok-siswa-sd.webp`, 'Lima siswa SD berseragam putih belajar berkelompok di satu meja kayu dengan buku dan alat tulis', 'Belajar kelompok di kelas SD menuntut kemampuan berbagi meja, bergiliran, dan mengikuti instruksi lisan. Kebutuhan seperti ini yang dipetakan asesmen fungsional sebelum anak masuk kelas.', 'Foto: <a href="https://commons.wikimedia.org/wiki/File:Belajar_Kelompok.jpg" target="_blank" rel="nofollow noopener">Galeri ega</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="nofollow noopener">CC BY-SA 4.0</a>')}

<h2 id="fungsional">Asesmen fungsional dan akomodasi yang layak</h2>
<p>Dasar asesmen fungsional di sekolah adalah <a href="https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023" target="_blank" rel="noopener">Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</a>. Pasal 12 ayat (3) menyebut bentuk akomodasi yang layak diberikan berdasarkan hasil asesmen fungsional yang dilaksanakan oleh satuan pendidikan. Ayat (4) menambahkan bahwa asesmen itu difasilitasi oleh Unit Layanan Disabilitas.</p>
<p>Tujuannya dirumuskan jelas di ayat (5): memperoleh informasi mengenai kondisi, hambatan, dan kebutuhan peserta didik penyandang disabilitas atas bentuk akomodasi yang layak. Ayat (6) mewajibkan pemenuhan kebutuhan itu dilakukan melalui konsultasi yang melibatkan peserta didik, orang tua atau wali, dan Unit Layanan Disabilitas. Jadi orang tua bukan penonton, melainkan peserta konsultasi.</p>
<p>Unit Layanan Disabilitas (ULD) bidang pendidikan juga punya tugas yang relevan dengan masa pra-sekolah. Pasal 16 peraturan yang sama menyebut ULD melakukan deteksi dini dan intervensi dini bagi peserta didik dan calon peserta didik penyandang disabilitas, serta melakukan asesmen bagi peserta didik dan calon peserta didik. Keluarga dapat menanyakan ke dinas pendidikan setempat apakah ULD sudah terbentuk dan bagaimana cara menghubunginya.</p>
<p>Akomodasi yang layak bisa sangat sederhana: tempat duduk dekat guru, jadwal visual, waktu tambahan, istirahat singkat, instruksi tertulis, atau alat bantu dengar. Bisa juga melibatkan pendamping. Pilihan yang tepat bergantung pada hasil asesmen, bukan pada label diagnosis. Dua anak dengan diagnosis sama dapat membutuhkan dukungan yang sangat berbeda.</p>
${diag(`${IMG}/${slug}-tujuan.svg`, 'Diagram tiga kolom: tujuan sah asesmen pra-sekolah, hal yang bukan tujuannya, dan hasil yang berguna bagi keluarga', 'Asesmen pra-sekolah dipakai untuk merencanakan dukungan. Tes membaca, menulis, dan berhitung sebagai syarat masuk kelas 1 SD tidak dipersyaratkan menurut Pasal 11 ayat (5) Permendikdasmen 3/2025.')}

<h2 id="yang-dinilai">Aspek yang biasanya diamati</h2>
<p>Setiap sekolah dapat memakai instrumen berbeda, tetapi ada beberapa aspek yang hampir selalu dibahas. Aspek komunikasi melihat bagaimana anak menyampaikan kebutuhan, memahami instruksi, dan menggunakan alat komunikasi alternatif bila ada. Aspek kemandirian mencakup ke toilet, makan, merapikan barang, dan berpindah tempat. Informasi ini menentukan seberapa banyak bantuan yang perlu disiapkan.</p>
<p>Aspek perhatian dan regulasi diri melihat berapa lama anak dapat bertahan dalam satu kegiatan, apa yang membuatnya gelisah, dan strategi apa yang menenangkannya. Aspek sensori mencatat kepekaan terhadap suara, cahaya, sentuhan, atau keramaian. Aspek motorik melihat cara memegang pensil, menggunting, berjalan di tangga, atau duduk lama. Semua ini dicatat sebagai kebutuhan, bukan kekurangan.</p>
<p>Aspek akademik awal juga diamati, misalnya mengenal huruf, angka, warna, atau menyimak cerita. Namun untuk kelas 1 SD, hasil pengamatan ini tidak boleh menjadi syarat penerimaan. Pengamatan akademik dipakai untuk menentukan titik awal pembelajaran. Panduan lebih rinci tentang hal ini ada di artikel <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik anak berkebutuhan khusus</a>.</p>
<p>Terakhir, aspek sosial melihat cara anak bermain, bergiliran, dan menghadapi perubahan rutinitas. Kekuatan anak juga wajib dicatat: minat yang kuat, ingatan visual yang baik, atau kesenangan pada musik sering menjadi pintu masuk pembelajaran. Asesmen yang hanya berisi daftar kesulitan kehilangan separuh gambaran.</p>
<table><thead><tr><th>Aspek</th><th>Contoh pertanyaan pengamatan</th><th>Contoh akomodasi bila dibutuhkan</th></tr></thead><tbody>
<tr><td>Komunikasi</td><td>Bagaimana anak meminta bantuan atau menolak sesuatu?</td><td>Kartu gambar, papan komunikasi, atau instruksi satu langkah</td></tr>
<tr><td>Kemandirian</td><td>Apakah anak perlu bantuan ke toilet atau saat makan?</td><td>Jadwal toilet, pendamping pada waktu tertentu</td></tr>
<tr><td>Perhatian dan regulasi</td><td>Berapa lama anak bertahan dalam satu tugas?</td><td>Tugas dipecah, jeda gerak, sudut tenang</td></tr>
<tr><td>Sensori</td><td>Suara atau keramaian apa yang membuat anak tidak nyaman?</td><td>Tempat duduk jauh dari pintu, peredam suara</td></tr>
<tr><td>Motorik</td><td>Bagaimana anak memegang pensil dan duduk di kursi?</td><td>Pensil bergagang tebal, kursi dengan sandaran kaki</td></tr>
<tr><td>Sosial</td><td>Bagaimana anak bergiliran dan bermain bersama?</td><td>Teman sebaya pendamping, permainan terstruktur</td></tr>
</tbody></table>

<h2 id="alur">Alur asesmen dari rumah sampai kelas</h2>
<p>Asesmen yang baik tidak terjadi dalam satu hari. Prosesnya dimulai dari rumah, ketika orang tua mengumpulkan catatan perkembangan dan laporan yang sudah ada. Setelah itu keluarga mengunjungi sekolah untuk mengenal lingkungan dan menanyakan layanan inklusif. Kunjungan ini juga memberi kesempatan anak mengenal gedung, suara, dan wajah guru sebelum hari pertama.</p>
<p>Langkah berikutnya adalah asesmen fungsional oleh sekolah, yang dapat berupa pengamatan saat anak bermain atau mengikuti kegiatan singkat, wawancara dengan orang tua, serta telaah dokumen. Hasilnya dibahas dalam pertemuan konsultasi. Dari pertemuan itu lahir rencana awal yang memuat tujuan, penyesuaian, dan pembagian peran antara rumah dan sekolah.</p>
<p>Rencana awal kemudian diuji di kelas nyata. Setelah beberapa pekan, sekolah dan keluarga meninjau apa yang berjalan dan apa yang perlu diubah. Tinjauan ini penting karena perilaku anak sering berubah setelah ia merasa aman. Rencana yang terlalu kaku sejak awal cenderung tidak bertahan lama.</p>
${diag(`${IMG}/${slug}-alur.svg`, 'Diagram enam langkah asesmen pra-sekolah: kumpulkan catatan, kunjungi sekolah, asesmen fungsional, konsultasi bersama, rencana awal, tinjau ulang', 'Enam langkah asesmen pra-sekolah. Konsultasi bersama anak, orang tua, dan Unit Layanan Disabilitas mengikuti Pasal 12 ayat (6) Permendikbudristek 48/2023.')}
<p>Bila hasil konsultasi menunjukkan anak memerlukan rencana belajar yang disesuaikan, langkah berikutnya biasanya menyusun <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>. Dokumen ini menerjemahkan hasil asesmen menjadi tujuan yang dapat diukur, misalnya anak mampu meminta istirahat dengan kartu dalam dua minggu pertama.</p>

<h2 id="berkas">Berkas yang perlu disiapkan orang tua</h2>
<p>Orang tua tidak perlu menunggu semua dokumen lengkap. Berkas yang ada sudah membantu sekolah memahami anak lebih cepat. Catatan perkembangan sederhana, misalnya kapan anak mulai berjalan, bicara, dan makan sendiri, sangat berguna. Tulisan tangan pun cukup, asalkan jujur dan menggambarkan keadaan anak saat ini, bukan keadaan ideal yang diharapkan.</p>
<p>Laporan terapi wicara, okupasi, atau psikologi dapat dibagikan sebatas yang relevan untuk belajar. Orang tua berhak memilih bagian mana yang dibagikan. Rapor atau catatan guru PAUD juga berharga karena menggambarkan anak dalam kelompok. Contoh karya dan video singkat aktivitas sehari-hari dapat memperlihatkan kemampuan yang tidak muncul saat anak gugup di tempat baru.</p>
<p>Untuk pendaftaran melalui jalur afirmasi, siapkan kartu penyandang disabilitas atau surat keterangan dokter. Bila belum memiliki kartu, baca panduan <a href="/artikel/bagaimana-cara-membuat-kartu-disabilitas">cara membuat kartu disabilitas</a> dan penjelasan manfaatnya di artikel <a href="/artikel/kartu-disabilitas">kartu disabilitas</a>. Mengurus kartu memerlukan waktu, jadi mulailah jauh sebelum masa pendaftaran.</p>
${diag(`${IMG}/${slug}-berkas.svg`, 'Tabel visual lima berkas yang membantu asesmen: catatan perkembangan, laporan terapi, rapor PAUD, kartu disabilitas, contoh karya', 'Lima berkas yang membantu sekolah memahami anak. Kartu atau surat keterangan disabilitas menjadi syarat jalur afirmasi sesuai Pasal 19 ayat (2) Permendikdasmen 3/2025.')}

<h2 id="afirmasi">Jalur afirmasi SPMB bagi anak penyandang disabilitas</h2>
<p>Permendikdasmen 3/2025 menyediakan jalur afirmasi bagi calon murid dari keluarga ekonomi tidak mampu dan calon murid penyandang disabilitas. Pasal 30 ayat (3) menetapkan kuota jalur afirmasi paling sedikit 15 persen dari daya tampung SD, 20 persen untuk SMP, dan 30 persen untuk SMA. Kuota ini dibagi untuk kedua kelompok sasaran, sehingga rinciannya ditentukan daerah.</p>
<p>Pasal 32 meminta dinas pendidikan berkoordinasi dengan dinas sosial untuk menghitung potensi jumlah calon murid penyandang disabilitas saat menentukan kuota. Data ini menjadi alasan penting bagi keluarga untuk terdata di layanan sosial setempat. Anak yang tidak tercatat berisiko tidak terhitung dalam perencanaan kuota.</p>
<p>Syarat khususnya tertulis di Pasal 19 ayat (2): calon murid penyandang disabilitas harus memiliki kartu penyandang disabilitas yang dikeluarkan kementerian yang menangani urusan sosial, atau surat keterangan dari dokter atau dokter spesialis. Petunjuk teknis daerah dapat memuat rincian tambahan seperti jadwal dan format berkas, sehingga keluarga perlu membaca juknis SPMB di kabupaten atau kota masing-masing.</p>
<p>Perlu diingat, jalur afirmasi adalah pintu masuk. Setelah anak diterima, kebutuhan belajarnya tetap perlu dipetakan melalui asesmen fungsional. Sekolah yang menerima anak lewat jalur afirmasi tetap berkewajiban memberikan akomodasi yang layak sesuai kemampuannya. Pembahasan pilihan sekolah ada di artikel <a href="/artikel/anak-abk-harus-sekolah-dimana">anak ABK harus sekolah di mana</a>.</p>

<h2 id="hasil">Membaca hasil asesmen dan menyusun rencana</h2>
<p>Hasil asesmen yang berguna ditulis dalam bahasa sehari-hari. Kalimat seperti anak dapat mengikuti instruksi dua langkah bila disertai gambar jauh lebih bermanfaat daripada skor tanpa penjelasan. Bila laporan memuat istilah teknis, orang tua berhak meminta penjelasan. Pertanyaan sederhana seperti apa artinya untuk kegiatan di kelas sering membuka diskusi yang paling berguna.</p>
<p>Perhatikan apakah hasil asesmen mencantumkan kekuatan anak, bukan hanya kesulitannya. Kekuatan menjadi titik tolak rencana. Periksa juga apakah ada rekomendasi konkret: siapa melakukan apa, kapan, dan bagaimana keberhasilannya dilihat. Rekomendasi yang kabur, misalnya anak perlu perhatian lebih, sebaiknya dipertajam bersama guru.</p>
<p>Bila hasil asesmen menunjukkan anak membutuhkan pendamping, keluarga dan sekolah perlu membicarakan bentuknya. Sebagian sekolah memiliki <a href="/artikel/gpk-adalah">guru pembimbing khusus</a>, sebagian lain bekerja sama dengan pendamping dari luar. Perbedaan peran pendamping dijelaskan di artikel <a href="/artikel/shadow-teacher-adalah">shadow teacher</a>.</p>
<p>Simpan salinan hasil asesmen dan rencana awal. Dokumen ini berguna saat evaluasi, saat anak pindah kelas, atau saat keluarga berkonsultasi dengan terapis. Catatan yang tersimpan rapi membuat setiap pihak baru tidak perlu mengulang pengamatan dari nol.</p>

<h2 id="pertanyaan">Hal yang layak ditanyakan ke sekolah</h2>
<p>Saat berkunjung, orang tua dapat menyiapkan beberapa pertanyaan. Pertanyaan ini bukan untuk menguji sekolah, melainkan untuk memastikan harapan kedua pihak sama sejak awal. Jawaban yang jujur, termasuk pengakuan tentang keterbatasan sekolah, sering lebih menenangkan daripada janji yang terlalu besar.</p>
<ol>
<li>Siapa yang melakukan asesmen fungsional, dan kapan hasilnya dibahas bersama keluarga?</li>
<li>Apakah sekolah bekerja sama dengan Unit Layanan Disabilitas di daerah ini?</li>
<li>Akomodasi apa yang sudah biasa disediakan, dan apa yang perlu disiapkan khusus?</li>
<li>Bagaimana sekolah berkomunikasi dengan orang tua, dan seberapa sering?</li>
<li>Kapan rencana awal ditinjau ulang setelah anak mulai belajar?</li>
</ol>
<p>Catat jawabannya, lalu bandingkan bila keluarga mengunjungi lebih dari satu sekolah. Untuk wilayah Sleman dan Yogyakarta, keluarga juga dapat mempelajari <a href="/sekolah-inklusi-sleman">layanan sekolah inklusi di Sleman</a> sebagai bahan perbandingan. Prinsip <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a> membantu orang tua menilai apakah sekolah benar-benar siap menyambut keberagaman.</p>

<h2 id="kesalahan">Kesalahan umum yang sebaiknya dihindari</h2>
<p>Kesalahan pertama adalah menyembunyikan informasi karena takut anak ditolak. Informasi yang ditutupi biasanya muncul dalam minggu pertama, dan sekolah kehilangan waktu menyiapkan dukungan. Keterbukaan yang disertai penjelasan tentang strategi yang berhasil di rumah membuat guru lebih percaya diri menerima anak.</p>
<p>Kesalahan kedua adalah melatih anak menghafal jawaban tes. Asesmen fungsional bertujuan melihat kebutuhan nyata. Anak yang tampil di atas kemampuannya karena dilatih khusus justru berisiko tidak mendapat dukungan yang ia perlukan. Biarkan anak tampil apa adanya dan ceritakan konteksnya kepada penilai.</p>
<p>Kesalahan ketiga adalah menganggap asesmen selesai setelah anak diterima. Kebutuhan anak berubah seiring usia dan pengalaman. Asesmen sebaiknya diulang secara berkala, terutama saat naik kelas atau berganti guru. Kebiasaan ini sejalan dengan <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a> sebagai mitra jangka panjang sekolah.</p>
<p>Kesalahan keempat adalah melupakan hak anak. Anak penyandang disabilitas berhak atas pendidikan bermutu sebagaimana dijamin <a href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" target="_blank" rel="noopener">UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas</a>. Ringkasan hak-hak tersebut ada di artikel <a href="/artikel/apa-saja-hak-anak-berkebutuhan-khusus">hak anak berkebutuhan khusus</a>. Bila keluarga membutuhkan teman diskusi, tim YUKA dapat dihubungi melalui halaman <a href="/kontak">kontak</a>.</p>

<h2 id="faq">Pertanyaan Umum tentang Asesmen ABK Pra-Sekolah</h2>
${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('\n')}
`;

const meta = 'Panduan asesmen ABK sebelum masuk sekolah: aturan SPMB tanpa tes calistung, asesmen fungsional, berkas, jalur afirmasi, dan cara membaca hasilnya.';
const data = {
  slug,
  titleTag: 'Asesmen ABK Sebelum Masuk Sekolah: Aturan dan Persiapan | YUKA',
  metaDesc: meta,
  keywords: 'asesmen abk sebelum masuk sekolah, asesmen fungsional, akomodasi yang layak, spmb disabilitas, jalur afirmasi',
  ogTitle: 'Asesmen ABK Sebelum Masuk Sekolah: Aturan dan Persiapan',
  ogDesc: meta,
  h1: 'Asesmen ABK Sebelum Masuk Sekolah: Aturan, Alur, dan Persiapan Orang Tua',
  crumb: 'Asesmen ABK Pra-Sekolah',
  category: 'Pendidikan',
  datePublished: '2026-10-19T08:00:00+07:00',
  dateModified: '2026-10-19T08:00:00+07:00',
  dateDisplay: '19 Oktober 2026',
  readTime: '14 menit baca',
  image: { file: heroFile, w: 1200, h: 900, alt: 'Anak-anak dan pendamping YUKA duduk berjajar di kursi auditorium berkarpet merah saat kunjungan kegiatan', caption: 'Dokumentasi kegiatan kunjungan kelompok YUKA di sebuah auditorium. Foto suasana, bukan dokumentasi asesmen peserta.', credit },
  bodyHtml,
  faq,
  related: [
    { href: '/artikel/asesmen-abk', title: 'Asesmen ABK: Pengertian, Jenis, dan Prosesnya', desc: 'Mengenal ragam asesmen bagi anak berkebutuhan khusus.' },
    { href: '/artikel/transisi-anak-abk-dari-tk-ke-sd', title: 'Transisi Anak ABK dari TK ke SD', desc: 'Menyiapkan perpindahan jenjang dengan tenang.' },
    { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Mengubah hasil asesmen menjadi rencana belajar.' },
  ],
  tags: ['AsesmenABK', 'PendidikanInklusi', 'SPMB'],
  sources: [
    { url: 'https://peraturan.bpk.go.id/Details/315671/permendikdasmen-no-3-tahun-2025', label: 'Permendikdasmen No. 3 Tahun 2025 tentang Sistem Penerimaan Murid Baru (Pasal 11, 19, 30, 32)' },
    { url: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023', label: 'Permendikbudristek No. 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas (Pasal 12 dan 16)' },
    { url: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016', label: 'UU No. 8 Tahun 2016 tentang Penyandang Disabilitas' },
    { url: 'https://repositori.kemendikdasmen.go.id/24970/1/Panduan_Inklusif.pdf', label: 'Kemendikdasmen: Panduan Pelaksanaan Pendidikan Inklusif' },
  ],
  sourcesCheckedNote: 'Pasal-pasal dibaca langsung dari salinan PDF di JDIH BPK pada 19 Oktober 2026.',
};

if (require.main === module) {
  for (const [file, content] of Object.entries(diagrams)) fs.writeFileSync(path.join(ROOT, file), content);
  const size = imageSize(path.join(ROOT, heroFile));
  if (size.w !== 1200 || size.h !== 900) throw new Error('Hero wajib 1200x900.');
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), renderArticlePage(data));
  console.log(`Generated artikel/${slug}.html`);
}
module.exports = { data, faq, bodyHtml };

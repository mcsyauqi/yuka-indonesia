'use strict';
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'kurikulum-fungsional-untuk-anak-tunagrahita';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const image = (file, alt, caption) => {
  const size = imageSize(path.join(ROOT, file));
  return { file, w: size.w, h: size.h, alt, caption, credit: CREDIT };
};
const fig = (file, alt, caption) => `<figure class="article-inline-image"><img src="../${file}" alt="${alt}" loading="lazy" width="${imageSize(path.join(ROOT, file)).w}" height="${imageSize(path.join(ROOT, file)).h}"><figcaption>${caption} <span class="kredit">${CREDIT}</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const h2 = (id, text) => `<h2 id="${id}">${text}</h2>`;
const h3 = (text) => `<h3>${text}</h3>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;

const hero = image(
  'Dokumentasi/museum-gunung-merapi-grup-anak-foto-bersama-istana-026.webp',
  'Kelompok anak dan pendamping mengikuti kegiatan bersama sebagai ilustrasi pembelajaran yang inklusif',
  'Kegiatan bersama dapat menjadi ruang untuk melatih komunikasi, partisipasi, dan kemandirian. Foto ini dokumentasi kegiatan YUKA, bukan contoh kelas individual.'
);
const bodyImages = {
  community: 'Dokumentasi/museum-gunung-merapi-grup-wisatawan-foto-bersama-museum-033.webp',
  social: 'Dokumentasi/museum-gunung-merapi-grup-wisatawan-museum-foto-bersama-038.webp',
  routine: 'Dokumentasi/museum-gunung-merapi-rombongan-wisata-edukasi-gunung-merapi-029.webp',
  participation: 'Dokumentasi/museum-gunung-merapi-grup-keluarga-foto-bersama-museum-037.webp',
};

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> kurikulum fungsional untuk anak tunagrahita adalah cara merancang pembelajaran agar pengetahuan dan keterampilan dapat dipakai dalam kehidupan nyata. Fokusnya bukan mengurangi harapan, tetapi memilih tujuan yang bermakna, memecah tugas menjadi langkah yang dapat dipelajari, menyediakan dukungan yang tepat, dan mengukur kemajuan dari partisipasi serta kemandirian anak.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#pengertian">Apa yang dimaksud kurikulum fungsional?</a></li><li><a href="#tujuan">Mengapa pembelajaran fungsional penting?</a></li><li><a href="#ranah">Ranah keterampilan yang dapat diajarkan</a></li><li><a href="#asesmen">Cara melakukan asesmen kebutuhan</a></li><li><a href="#rancang">Langkah merancang program belajar</a></li><li><a href="#strategi">Strategi mengajar yang praktis</a></li><li><a href="#ukur">Cara mengukur kemajuan</a></li><li><a href="#kolaborasi">Kolaborasi sekolah dan keluarga</a></li><li><a href="#transisi">Menyiapkan transisi dan pilihan masa depan</a></li></ol></div>',
  h2('pengertian', 'Apa yang Dimaksud Kurikulum Fungsional?'),
  p('Kurikulum fungsional adalah pendekatan pembelajaran yang menghubungkan materi dengan kebutuhan anak dalam rutinitas sehari-hari, sekolah, rumah, komunitas, dan masa depan. Istilah ini menggambarkan fokus program, bukan satu buku atau satu format nasional yang otomatis cocok untuk semua peserta didik. Sekolah tetap perlu mengikuti kebijakan kurikulum yang berlaku, lalu menyesuaikan tujuan, materi, metode, media, dan asesmen berdasarkan kebutuhan individual.'),
  p('Pada anak tunagrahita, kemampuan akademik, komunikasi, adaptif, sosial, motorik, dan kesehatan dapat berkembang dengan kecepatan yang berbeda. Karena itu, angka kelas atau usia saja tidak cukup untuk menentukan target. Anak kelas enam mungkin masih perlu belajar mengancingkan baju, membaca tanda toilet, meminta bantuan, mengenali uang, atau menunggu giliran. Itu bukan tujuan yang lebih rendah. Keterampilan tersebut dapat menjadi fondasi agar anak lebih aman dan terlibat.'),
  p('Dalam kerangka perilaku adaptif, keterampilan konseptual, sosial, dan praktis dilihat sebagai bagian dari kemampuan anak untuk berfungsi dalam kehidupan sehari-hari. Kerangka itu membantu guru melihat kemampuan secara utuh. Membaca bukan hanya melafalkan kata, tetapi dapat berarti membaca nama ruang. Berhitung bukan sekadar mengerjakan lembar soal, tetapi dapat berarti menghitung benda, memahami jumlah, atau membayar dengan dukungan.'),
  fig(bodyImages.community, 'Anak dan pendamping mengikuti kegiatan kelompok di ruang publik sebagai ilustrasi pembelajaran yang terhubung dengan lingkungan', 'Pembelajaran fungsional menghubungkan kemampuan di kelas dengan pengalaman anak di rumah dan komunitas.'),
  h2('tujuan', 'Mengapa Pembelajaran Fungsional Penting?'),
  p('Pembelajaran yang fungsional menjawab pertanyaan “kemampuan ini akan dipakai untuk apa?” Pertanyaan tersebut membuat guru memilih konteks, alat, dan cara berlatih yang lebih dekat dengan kehidupan anak. Jika targetnya meminta minum, latihan dapat memakai gelas yang benar-benar digunakan. Jika targetnya mengenali jadwal, gunakan jadwal visual sekolah. Jika targetnya keselamatan, ajarkan simbol berhenti melalui simulasi yang aman dan berulang.'),
  p('Fokus fungsional tidak berarti pelajaran membaca, menulis, matematika, seni, olahraga, atau agama dihapus. Sebaliknya, bidang tersebut dapat menjadi jalan untuk mengembangkan tujuan hidup yang bermakna. Membaca dapat dipakai untuk label obat dan papan arah. Matematika dapat dipakai untuk membandingkan jumlah. Bahasa dapat dipakai untuk menyatakan persetujuan, penolakan, pilihan, atau kebutuhan istirahat. Seni dan olahraga dapat membuka komunikasi, koordinasi, kesehatan, serta relasi sosial.'),
  p('UNICEF menekankan bahwa pendidikan inklusif perlu membantu anak memperoleh pengetahuan dan keterampilan hidup, sekaligus mengurangi hambatan yang berasal dari lingkungan dan sikap. Jadi, program bukan hanya meminta anak berubah. Sekolah juga perlu memperbaiki akses, memberi alat bantu, melatih staf, menyesuaikan tugas, dan membuat anak merasa aman untuk berpartisipasi.'),
  ul([
    '<strong>Lebih bermakna:</strong> anak melihat hubungan antara pelajaran dan aktivitas yang ia sukai atau perlukan.',
    '<strong>Lebih dapat digeneralisasi:</strong> kemampuan dilatih di lebih dari satu tempat dan bersama lebih dari satu orang.',
    '<strong>Lebih mudah dievaluasi:</strong> kemajuan dapat diamati dari langkah dan tingkat bantuan yang dibutuhkan.',
    '<strong>Lebih menghormati anak:</strong> target disusun dari kekuatan, pilihan, komunikasi, dan kebutuhan dukungan, bukan dari label diagnosis saja.'
  ]),
  h2('ranah', 'Ranah Keterampilan yang Dapat Diajarkan'),
  p('Program yang baik tidak hanya berisi latihan bina diri. Guru perlu menyeimbangkan keterampilan konseptual, sosial, praktis, akademik, dan kesempatan membuat pilihan. Prioritas setiap anak berbeda. Beberapa anak membutuhkan komunikasi alternatif, sebagian membutuhkan dukungan motorik atau sensorik, dan lainnya membutuhkan bantuan untuk mengelola perubahan atau memahami aturan sosial.'),
  h3('Komunikasi dan literasi fungsional'),
  p('Ajarkan cara meminta, menolak, menyapa, bertanya, memberi informasi, dan meminta bantuan. Media dapat berupa kata, gestur, foto, simbol, papan pilihan, atau perangkat komunikasi. Literasi fungsional dapat mencakup membaca nama, label, jadwal, menu, tanda keselamatan, dan pesan pendek. Tujuan utamanya adalah anak memiliki akses untuk memahami dan menyampaikan sesuatu, bukan sekadar menghafal daftar kata.'),
  h3('Numerasi dan penggunaan uang'),
  p('Numerasi dapat dimulai dari mencocokkan jumlah, membandingkan banyak dan sedikit, memahami urutan, membaca waktu, dan mengikuti ukuran sederhana. Untuk uang, guru dapat memakai kegiatan bermain peran seperti memilih barang, menyerahkan nominal, menunggu kembalian, dan menyimpan bukti transaksi. Tingkat dukungan harus disesuaikan agar latihan aman dan tidak membuat anak menghadapi risiko keuangan sebelum siap.'),
  h3('Bina diri, kesehatan, dan keselamatan'),
  p('Ranah ini dapat meliputi mencuci tangan, makan dan minum, berpakaian, menggunakan toilet, merawat barang, mengenali rasa tidak nyaman, mengikuti jadwal obat dari orang dewasa yang berwenang, serta mencari pertolongan. Keselamatan juga mencakup mengenali orang tepercaya, berhenti di batas aman, memahami tanda bahaya, dan menggunakan alat pelindung. Ajarkan dalam urutan kecil dan hormati privasi tubuh anak.'),
  h3('Keterampilan sosial dan regulasi'),
  p('Anak dapat berlatih bergiliran, berbagi ruang, mengikuti aturan permainan, menyelesaikan konflik sederhana, mengenali emosi, meminta jeda, dan kembali ke kegiatan setelah tenang. Jangan menyamakan kepatuhan diam dengan keberhasilan sosial. Kemampuan memilih, menyampaikan penolakan yang aman, dan meminta bantuan juga merupakan bagian dari kemandirian.'),
  h3('Keterampilan rumah, komunitas, dan pra-vokasional'),
  p('Sesuai usia dan keamanan, kegiatan dapat mencakup merapikan meja, mengelompokkan benda, menyiapkan bahan sederhana, merawat tanaman, menggunakan transportasi dengan pendamping, mengenali lokasi, mengikuti antrean, dan menyelesaikan tugas bersama. Untuk anak yang lebih besar, sekolah dapat mengenalkan minat kerja, kebiasaan hadir, mengikuti instruksi, menjaga alat, bekerja dalam durasi bertahap, dan memahami hak untuk meminta dukungan.'),
  '<table class="article-table"><caption>Contoh pemetaan tujuan ke kegiatan belajar</caption><thead><tr><th>Tujuan fungsional</th><th>Kegiatan belajar</th><th>Bukti kemajuan</th></tr></thead><tbody><tr><td>Meminta bantuan</td><td>Simulasi aktivitas sulit dengan kartu atau gestur</td><td>Anak memakai cara komunikasi yang disepakati sebelum frustrasi meningkat</td></tr><tr><td>Membeli barang kecil</td><td>Bermain peran toko dengan uang tiruan</td><td>Anak memilih barang, menyerahkan jumlah sesuai dukungan, dan membawa barang</td></tr><tr><td>Mengikuti rutinitas</td><td>Jadwal visual dan latihan transisi</td><td>Anak berpindah langkah dengan bantuan yang berkurang</td></tr><tr><td>Berpartisipasi bersama</td><td>Permainan bergiliran atau tugas kelompok</td><td>Anak menunggu, memberi respons, dan meminta jeda secara aman</td></tr></tbody></table>',
  fig(bodyImages.social, 'Kelompok anak dan pendamping berkegiatan bersama sebagai ilustrasi latihan komunikasi sosial dan partisipasi', 'Kegiatan kelompok dapat menjadi konteks untuk melatih giliran, respons, pilihan, dan kerja sama.'),
  h2('asesmen', 'Cara Melakukan Asesmen Kebutuhan'),
  p('Asesmen program dimulai dari aktivitas, bukan dari daftar kekurangan. Pilih rutinitas yang penting bagi anak dan keluarga. Amati apa yang dapat dilakukan anak sendiri, bagian yang paling sulit, jenis bantuan yang sudah berhasil, alat yang membantu, dan kondisi yang membuat performa berubah. Tanyakan juga kepada anak dengan cara komunikasi yang ia kuasai. Informasi dari keluarga, guru, terapis, dan anak dapat saling melengkapi.'),
  p('Gunakan analisis tugas untuk memecah aktivitas menjadi langkah. Contoh memakai sepatu: mengambil sepatu, mengenali kanan dan kiri, membuka perekat, memasukkan kaki, menarik bagian belakang, dan merapikan. Tidak semua langkah harus diajarkan sekaligus. Guru dapat memilih langkah yang paling penting, memberi bantuan secukupnya, lalu mengurangi bantuan secara bertahap.'),
  p('Catat kondisi awal secara sederhana. Berapa langkah yang sudah dilakukan, berapa kali bantuan diberikan, apakah anak memahami instruksi, dan apakah ia mau mengulang kegiatan? Hindari menyimpulkan kemampuan dari satu percobaan. Amati pada waktu dan tempat yang berbeda agar rencana tidak hanya cocok di satu ruangan.'),
  p('Asesmen bukan proses untuk mengunci anak dalam label. Jika strategi tidak berhasil, periksa kembali instruksi, lingkungan, alat, waktu, motivasi, akses komunikasi, serta kesehatan anak. Kesulitan yang tampak seperti “tidak mau” bisa berasal dari tugas yang terlalu panjang, instruksi yang tidak dipahami, rasa sakit, kelelahan, atau tidak tersedianya cara untuk menolak.'),
  h2('rancang', 'Langkah Merancang Program Belajar'),
  p('Pertama, pilih prioritas yang berdampak pada keselamatan, komunikasi, kesehatan, partisipasi, dan peluang anak membuat keputusan. Kedua, tulis tujuan dengan kata kerja yang dapat diamati. “Meningkatkan kemandirian” masih terlalu luas. “Anak menyiapkan tiga alat makan dengan kartu urutan dan paling banyak satu pengingat” lebih mudah dipahami, diuji, dan direvisi.'),
  p('Ketiga, tentukan konteks, alat, tingkat bantuan, dan cara memberi pilihan. Keempat, siapkan generalisasi. Jika anak belajar memilah benda di kelas, latih juga saat merapikan rumah atau menata perlengkapan. Kelima, sepakati siapa yang mencatat dan kapan tim meninjau. Tujuan tidak perlu banyak. Beberapa tujuan yang benar-benar dipakai lebih baik daripada daftar panjang yang tidak pernah dievaluasi.'),
  p('Untuk anak dengan kebutuhan komunikasi kompleks, pastikan semua staf memakai simbol, kata kunci, atau perangkat yang sama. Untuk anak yang membutuhkan dukungan motorik, cek posisi, keamanan, dan akses alat. Untuk anak yang mudah kewalahan, atur durasi, jeda, suara, pencahayaan, dan urutan aktivitas. Adaptasi bukan memanjakan. Adaptasi adalah cara membuka akses terhadap tujuan belajar.'),
  fig(bodyImages.routine, 'Rombongan anak dan pendamping melakukan kegiatan luar ruang sebagai ilustrasi pembelajaran berbasis rutinitas dan lingkungan nyata', 'Lingkungan nyata memberi kesempatan anak mempraktikkan keterampilan dengan dukungan yang direncanakan.'),
  h2('strategi', 'Strategi Mengajar yang Praktis'),
  h3('Gunakan contoh konkret dan urutan visual'),
  p('Benda nyata, foto, warna, tanda arah, dan contoh langsung membantu anak memahami apa yang harus dilakukan. Urutan visual dapat menunjukkan awal, langkah tengah, jeda, dan selesai. Setelah anak memahami pola, kurangi petunjuk secara bertahap agar ia tidak bergantung pada satu jenis bantuan.'),
  h3('Berikan instruksi singkat dan waktu memproses'),
  p('Satu instruksi pada satu waktu sering lebih mudah daripada kalimat panjang. Beri waktu anak memproses sebelum mengulang atau menambah bantuan. Pastikan posisi guru memungkinkan anak melihat media dan memakai cara komunikasinya. Pujian sebaiknya spesifik pada usaha atau langkah, misalnya “kamu melihat kartu jadwal lalu mengambil tas”.'),
  h3('Latih di konteks berbeda'),
  p('Keterampilan dianggap fungsional bila dapat dipakai di lebih dari satu situasi. Latih meminta bantuan kepada guru, pendamping, dan keluarga dengan cara komunikasi yang sama. Latih membaca tanda di kelas, koridor, dan tempat umum yang aman. Pindahkan kegiatan secara bertahap, bukan mendadak, supaya anak memahami bahwa kemampuan tetap berguna ketika konteks berubah.'),
  h3('Jadikan minat anak sebagai pintu masuk'),
  p('Minat pada musik, kendaraan, makanan, hewan, atau permainan dapat menjadi konteks untuk membaca, berhitung, menunggu, memilih, dan berkomunikasi. Minat bukan hadiah yang hanya boleh diberikan setelah anak patuh. Minat adalah jembatan agar anak terlibat dan memiliki alasan yang bermakna untuk belajar.'),
  h2('ukur', 'Cara Mengukur Kemajuan'),
  p('Pilih ukuran yang menjawab tujuan. Catat apakah langkah dilakukan mandiri, dengan isyarat, dengan bantuan fisik, atau belum dilakukan. Catat juga kualitas partisipasi, waktu bertahan, jumlah kesempatan, dan tingkat kenyamanan bila relevan. Data tidak harus rumit, tetapi perlu konsisten sehingga tim dapat melihat pola.'),
  p('Kemajuan tidak selalu berupa melakukan seluruh tugas tanpa bantuan. Anak mungkin mulai memilih alat, meminta jeda, menyelesaikan bagian pertama, atau pulih lebih cepat setelah kesulitan. Semua itu dapat menjadi kemajuan jika sesuai tujuan. Jangan menaikkan tuntutan hanya karena satu kali berhasil. Pastikan keterampilan stabil dan tidak mengorbankan kesehatan atau martabat anak.'),
  p('Tinjau program berdasarkan bukti. Jika kemajuan berhenti, ubah satu hal pada satu waktu, seperti ukuran langkah, media, waktu latihan, atau jenis bantuan. Jika anak menolak terus-menerus, jangan langsung menambah tekanan. Cari tahu apakah tujuan perlu diubah, konteks terlalu berat, atau anak membutuhkan pemeriksaan kesehatan dan dukungan lain.'),
  h2('kolaborasi', 'Kolaborasi Sekolah dan Keluarga'),
  p('Keluarga mengetahui rutinitas, minat, cara komunikasi, dan perubahan kondisi anak. Guru mengetahui tuntutan kelas dan lingkungan sekolah. Terapis atau profesional lain dapat memberi masukan sesuai kompetensi. Pertemuan yang baik tidak hanya melaporkan kekurangan, tetapi membahas apa yang berhasil, apa yang membuat anak nyaman, dan dukungan apa yang bisa dipakai secara konsisten.'),
  p('Buat lembar komunikasi singkat dengan target, cara memberi bantuan, kata atau simbol yang dipakai, dan catatan penting tentang kesehatan atau keselamatan. Hindari meminta keluarga mengulang pekerjaan sekolah berjam-jam di rumah. Pilih satu rutinitas yang realistis. Bila targetnya merapikan barang, sepakati kotak yang sama dan urutan yang sama. Konsistensi kecil lebih berguna daripada instruksi yang terlalu banyak.'),
  p('Koordinasi juga perlu membahas perlindungan anak. Anak berhak memahami apa yang dilakukan pada tubuhnya, meminta berhenti, menjaga privasi, dan memperoleh bantuan ketika merasa tidak aman. Keterampilan keselamatan dan self-advocacy perlu masuk dalam pembelajaran, bukan ditunda sampai anak dianggap sudah mandiri.'),
  fig(bodyImages.participation, 'Anak dan pendamping melakukan kegiatan bersama dalam lingkungan komunitas sebagai ilustrasi partisipasi dan kemandirian bertahap', 'Tujuan akhir pembelajaran adalah memperluas kesempatan anak untuk hadir, memilih, dan berkontribusi dalam kehidupan sehari-hari.'),
  h2('transisi', 'Menyiapkan Transisi dan Pilihan Masa Depan'),
  p('Untuk anak yang lebih besar, kurikulum fungsional perlu mulai menghubungkan keterampilan sekolah dengan kehidupan setelah lulus. Bicarakan minat, kekuatan, dukungan yang dibutuhkan, kegiatan komunitas, pilihan pelatihan, dan cara menjaga keselamatan. Jangan menentukan masa depan hanya dari nilai akademik atau diagnosis. Libatkan anak dalam memilih aktivitas dan menetapkan tujuan yang mungkin berkembang.'),
  p('Rencana transisi dapat berisi target komunikasi, mobilitas, kebiasaan kerja, perawatan diri, penggunaan uang, teknologi, relasi sosial, kesehatan, dan perlindungan diri. Setiap target harus memiliki kesempatan latihan yang nyata dan aman. Sekolah dapat bekerja sama dengan keluarga, layanan kesehatan, organisasi penyandang disabilitas, dan pihak lain yang relevan sesuai izin serta kebutuhan anak.'),
  p('Kurikulum fungsional yang baik menjaga keseimbangan antara akses terhadap pengetahuan dan dukungan untuk hidup sehari-hari. Anak tunagrahita tidak perlu dipaksa memilih antara belajar akademik atau belajar mandiri. Dengan adaptasi yang tepat, keduanya dapat saling menguatkan. Ukuran keberhasilan yang paling penting adalah apakah anak lebih mampu memahami pilihan, berkomunikasi, berpartisipasi, dan menggunakan dukungan untuk mencapai tujuan yang bermakna.'),
  p('Bacaan terkait untuk memperluas rencana belajar: <a href="../artikel/pendidikan-inklusi.html">pendidikan inklusi</a>, <a href="../artikel/program-pembelajaran-individual.html">program pembelajaran individual</a>, <a href="../artikel/asesmen-akademik-anak-berkebutuhan-khusus.html">asesmen akademik ABK</a>, <a href="../artikel/peran-orang-tua-pendidikan-inklusi.html">peran orang tua dalam pendidikan inklusi</a>, dan <a href="../artikel/kegiatan-untuk-anak-tunagrahita.html">kegiatan untuk anak tunagrahita</a>.'),
  '<div class="faq-list"><h2 id="faq">Pertanyaan yang Sering Diajukan</h2><details><summary>Apakah kurikulum fungsional berarti pelajaran akademik dihapus?</summary><p>Tidak. Akademik tetap diajarkan, tetapi dihubungkan dengan kebutuhan nyata, misalnya membaca tanda, menghitung benda, memahami waktu, atau menulis pesan. Prioritas dan cara penyajiannya disesuaikan dengan kebutuhan anak.</p></details><details><summary>Siapa yang menyusun program kurikulum fungsional?</summary><p>Program sebaiknya disusun oleh tim sekolah bersama keluarga dan anak, dengan melibatkan profesional lain sesuai kebutuhan. Guru memimpin tujuan pembelajaran, sementara masukan keluarga dan tenaga ahli membantu memastikan tujuan aman serta relevan.</p></details><details><summary>Contoh keterampilan fungsional untuk anak tunagrahita apa saja?</summary><p>Contohnya meminta bantuan, mengikuti jadwal, memakai toilet, merawat barang, membaca tanda, menggunakan uang dengan aman, menunggu giliran, memilih aktivitas, dan mengikuti prosedur keselamatan. Target disesuaikan dengan usia, kemampuan, minat, dan dukungan anak.</p></details><details><summary>Bagaimana cara mengukur kemajuan anak?</summary><p>Catat langkah yang dilakukan mandiri, dengan isyarat, atau dengan bantuan, serta konteks dan frekuensinya. Tinjau data secara berkala. Kemajuan dapat berupa bantuan yang berkurang, komunikasi yang lebih jelas, partisipasi yang lebih lama, atau kemampuan memakai keterampilan di tempat berbeda.</p></details><details><summary>Apakah latihan di rumah harus dilakukan setiap hari?</summary><p>Tidak harus dalam bentuk sesi panjang. Pilih satu rutinitas yang aman dan realistis, lalu gunakan strategi yang disepakati sekolah. Waktu istirahat, bermain bebas, dan penolakan anak tetap perlu dihormati.</p></details><details><summary>Apakah anak tunagrahita harus belajar di sekolah khusus?</summary><p>Keputusan pendidikan perlu mempertimbangkan kebutuhan, akses, dukungan, keamanan, dan pilihan keluarga serta anak. Pendidikan inklusif maupun layanan khusus harus berupaya memberi akses belajar, partisipasi, dan dukungan yang sesuai, bukan hanya menentukan tempat berdasarkan label.</p></details><details><summary>Kapan program belajar perlu diubah?</summary><p>Program perlu ditinjau ketika tujuan sudah tercapai, kemajuan berhenti, konteks berubah, anak menunjukkan ketidaknyamanan, atau dukungan yang dipakai tidak aman. Ubah strategi berdasarkan catatan dan diskusi tim, bukan karena satu percobaan yang kebetulan berhasil atau gagal.</p></details></div>',
].join('\n');

const article = {
  slug,
  titleTag: 'Kurikulum Fungsional untuk Anak Tunagrahita: Panduan Praktis',
  metaDesc: 'Kurikulum fungsional untuk anak tunagrahita menghubungkan belajar dengan kemandirian, komunikasi, keselamatan, dan partisipasi di rumah serta sekolah.',
  keywords: 'kurikulum fungsional untuk anak tunagrahita, pembelajaran fungsional, keterampilan bina diri, pendidikan anak tunagrahita',
  ogTitle: 'Kurikulum Fungsional untuk Anak Tunagrahita',
  ogDesc: 'Panduan guru dan orang tua menyusun tujuan belajar yang fungsional, terukur, aman, dan relevan dengan kehidupan anak.',
  datePublished: '2026-10-09',
  dateModified: '2026-10-09',
  dateDisplay: '09 Okt 2026',
  readTime: '13 menit baca',
  category: 'Pendidikan',
  h1: 'Kurikulum Fungsional untuk Anak Tunagrahita: Prinsip dan Contoh Program',
  crumb: 'Kurikulum Fungsional untuk Anak Tunagrahita',
  parent: { href: 'pendidikan-anak-tunagrahita', name: 'Pendidikan Anak Tunagrahita' },
  image: hero,
  bodyHtml,
  faq: [
    { q: 'Apakah kurikulum fungsional berarti pelajaran akademik dihapus?', a: 'Tidak. Akademik tetap diajarkan, tetapi dihubungkan dengan kebutuhan nyata, misalnya membaca tanda, menghitung benda, memahami waktu, atau menulis pesan. Prioritas dan cara penyajiannya disesuaikan dengan kebutuhan anak.' },
    { q: 'Siapa yang menyusun program kurikulum fungsional?', a: 'Program sebaiknya disusun oleh tim sekolah bersama keluarga dan anak, dengan melibatkan profesional lain sesuai kebutuhan. Guru memimpin tujuan pembelajaran, sementara masukan keluarga dan tenaga ahli membantu memastikan tujuan aman serta relevan.' },
    { q: 'Contoh keterampilan fungsional untuk anak tunagrahita apa saja?', a: 'Contohnya meminta bantuan, mengikuti jadwal, memakai toilet, merawat barang, membaca tanda, menggunakan uang dengan aman, menunggu giliran, memilih aktivitas, dan mengikuti prosedur keselamatan. Target disesuaikan dengan usia, kemampuan, minat, dan dukungan anak.' },
    { q: 'Bagaimana cara mengukur kemajuan anak?', a: 'Catat langkah yang dilakukan mandiri, dengan isyarat, atau dengan bantuan, serta konteks dan frekuensinya. Tinjau data secara berkala. Kemajuan dapat berupa bantuan yang berkurang, komunikasi yang lebih jelas, partisipasi yang lebih lama, atau kemampuan memakai keterampilan di tempat berbeda.' },
    { q: 'Apakah latihan di rumah harus dilakukan setiap hari?', a: 'Tidak harus dalam bentuk sesi panjang. Pilih satu rutinitas yang aman dan realistis, lalu gunakan strategi yang disepakati sekolah. Waktu istirahat, bermain bebas, dan penolakan anak tetap perlu dihormati.' },
    { q: 'Apakah anak tunagrahita harus belajar di sekolah khusus?', a: 'Keputusan pendidikan perlu mempertimbangkan kebutuhan, akses, dukungan, keamanan, dan pilihan keluarga serta anak. Pendidikan inklusif maupun layanan khusus harus berupaya memberi akses belajar, partisipasi, dan dukungan yang sesuai, bukan hanya menentukan tempat berdasarkan label.' },
    { q: 'Kapan program belajar perlu diubah?', a: 'Program perlu ditinjau ketika tujuan sudah tercapai, kemajuan berhenti, konteks berubah, anak menunjukkan ketidaknyamanan, atau dukungan yang dipakai tidak aman. Ubah strategi berdasarkan catatan dan diskusi tim, bukan karena satu percobaan yang kebetulan berhasil atau gagal.' },
  ],
  related: [
    { href: 'pendidikan-anak-tunagrahita', title: 'Pendidikan Anak Tunagrahita', desc: 'Memahami dukungan pendidikan yang menghargai kemampuan dan kebutuhan anak.' },
    { href: 'cara-mendidik-anak-tunagrahita', title: 'Cara Mendidik Anak Tunagrahita', desc: 'Prinsip pendampingan belajar yang konsisten di rumah dan sekolah.' },
    { href: 'kegiatan-untuk-anak-tunagrahita', title: 'Kegiatan untuk Anak Tunagrahita', desc: 'Ide aktivitas yang melatih komunikasi, motorik, dan kemandirian.' },
    { href: 'pendidikan-inklusif-anak-berkebutuhan-khusus', title: 'Pendidikan Inklusif Anak Berkebutuhan Khusus', desc: 'Cara membangun lingkungan belajar yang dapat diakses dan ramah.' },
  ],
  tags: ['PendidikanKhusus', 'Tunagrahita', 'KurikulumFungsional', 'KeterampilanHidup'],
  sources: [
    { url: 'https://www.who.int/publications/i/item/9789240080539', label: 'WHO-UNICEF, Global report on children with developmental disabilities' },
    { url: 'https://www.who.int/publications/i/item/9789241514064', label: 'WHO, Early Childhood Development and Disability' },
    { url: 'https://www.cdc.gov/child-development/about/developmental-disability-basics.html', label: 'CDC, Developmental Disability Basics' },
    { url: 'https://www.unicef.org/disabilities', label: 'UNICEF, Children with Disabilities and Inclusive Education' },
    { url: 'https://www.ibe.unesco.org/curricula/southafrica/sa_ie_gu_2009_eng.pdf', label: 'UNESCO IBE, Guidelines for Full Service and Inclusive Schools' },
    { url: 'https://jdih.kemdikbud.go.id/sjdih/siperpu/dokumen/salinan/salinan_Salinan%20Permendikbudristek%20Nomor%208%20tahun%202024%20tentang%20Standar%20Isi%20Pada%20jenjang%20PAUD%20Dikdas%20Dikmen.pdf', label: 'Kementerian Pendidikan, Permendikbudristek Nomor 8 Tahun 2024 tentang Standar Isi' },
  ],
  sourcesCheckedNote: 'Sumber resmi dan kerangka pendidikan inklusif diperiksa pada 9 Oktober 2026. Artikel ini adalah panduan umum, bukan pengganti asesmen pendidikan atau rekomendasi individual.',
};

const html = renderArticlePage(article);
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
const blogPath = path.join(ROOT, 'blog.html');
let blog = fs.readFileSync(blogPath, 'utf8');
if (!blog.includes(`href="artikel/${slug}"`)) {
  const card = `<article class="card blog-card animate-on-scroll">
                    <div class="card-image">
                        <img src="${hero.file}" alt="${article.h1.replace(/"/g, '&quot;')}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <span class="card-category">${article.category}</span>
                        <h3 class="card-title">
                            <a href="artikel/${slug}">${article.h1}</a>
                        </h3>
                        <p class="card-text">${article.metaDesc}</p>
                        <div class="card-meta">
                            <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>09 Oct 2026</span>
                            <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0"/></svg>${article.readTime}</span>
                        </div>
                    </div>
                </article>`;
  const marker = '<div class="blog-grid" id="blogGrid">';
  if (!blog.includes(marker)) throw new Error('blog grid marker not found');
  blog = blog.replace(marker, `${marker}\n                ${card}`);
  fs.writeFileSync(blogPath, blog, 'utf8');
}
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: article.faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

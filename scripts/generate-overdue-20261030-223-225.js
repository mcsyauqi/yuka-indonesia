'use strict';
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');
const ROOT = path.resolve(__dirname, '..');
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const fig = (file, alt, caption) => {
  const { w, h } = imageSize(imgPath(file));
  return `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${credit}</span></figcaption></figure>`;
};
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const faqHtml = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;

const diagrams = {};
function addDiagram(file, markup) { diagrams[file] = markup; }

const faq223 = [
  { q: 'Apakah semua anak dengan cerebral palsy bisa belajar berpakaian sendiri?', a: 'Tidak semua anak mencapai tingkat kemandirian yang sama, dan itu bukan kegagalan. Kemampuan dipengaruhi fungsi tangan, keseimbangan, penglihatan, kognisi, komunikasi, dan lingkungan. Target sebaiknya dibuat bersama anak dan terapis, lalu dipecah menjadi langkah yang aman dan dapat diulang.' },
  { q: 'Mulai dari pakaian apa untuk latihan self dressing?', a: 'Mulailah dari pakaian yang longgar, nyaman, dan mudah dibedakan bagian depan serta belakangnya. Celana pinggang elastis, kaus dengan lubang leher lebar, dan sepatu dengan perekat sering lebih mudah daripada kancing kecil. Pilihan akhir tetap mengikuti kemampuan tangan dan tujuan anak.' },
  { q: 'Apakah orang tua harus membiarkan anak lama saat berpakaian?', a: 'Beri waktu yang cukup, tetapi tetap gunakan batas yang realistis. Buat jadwal latihan ketika anak tidak terburu-buru berangkat sekolah. Jika waktu habis, orang dewasa dapat menyelesaikan bagian yang belum aman, kemudian mencatat langkah yang perlu dilatih lagi.' },
  { q: 'Kapan perlu berkonsultasi dengan okupasi terapis?', a: 'Konsultasikan bila anak kesulitan memegang kain, menjaga posisi duduk, menggerakkan kedua tangan bersama, atau sering kehilangan keseimbangan. Okupasi terapis dapat menilai tugas, menyarankan adaptasi, dan membantu menyusun target fungsional. Jangan mengubah alat atau posisi tubuh yang berisiko tanpa penilaian profesional.' },
  { q: 'Apakah pakaian adaptif selalu diperlukan?', a: 'Tidak selalu. Banyak anak dapat mulai dengan pakaian biasa yang dipilih lebih sederhana. Pakaian adaptif dipertimbangkan bila bukaan, bahan, atau posisi pakaian biasa menjadi hambatan besar. Keputusan sebaiknya didasarkan pada tujuan anak, keamanan kulit, kenyamanan, dan hasil asesmen fungsi.' },
  { q: 'Bagaimana cara mengajarkan kancing dan ritsleting?', a: 'Ajarkan satu komponen pada satu waktu. Latih gerak menarik, memasukkan, atau menekan pada papan latihan atau pakaian yang tidak sedang dipakai terburu-buru. Gunakan bantuan tangan seperlunya, lalu kurangi bantuan secara bertahap. Beri jeda bila tangan lelah atau gerakan mulai tidak terkontrol.' },
  { q: 'Apakah latihan berpakaian termasuk terapi?', a: 'Latihan berpakaian adalah aktivitas kehidupan sehari-hari yang dapat menjadi tujuan intervensi. Terapi tidak hanya dilakukan melalui latihan abstrak. Terapis dapat menggabungkan latihan tugas nyata dengan strategi motorik dan adaptasi lingkungan, sesuai asesmen dan tujuan keluarga.' },
];
const sections223 = [
  ['jawaban','Apa yang dimaksud self dressing pada anak dengan cerebral palsy?'],
  ['asesmen','Mengapa target harus dibuat dari kemampuan anak?'],
  ['urutan','Urutan latihan memakai baju yang lebih mudah diikuti'],
  ['adaptasi','Adaptasi pakaian dan lingkungan yang dapat dicoba'],
  ['bantuan','Cara memberi bantuan tanpa mengambil alih'],
  ['keamanan','Keamanan posisi, kulit, dan kelelahan'],
  ['rumah-sekolah','Membuat latihan konsisten di rumah dan sekolah'],
  ['evaluasi','Cara mengevaluasi kemajuan secara realistis'],
  ['faq','Pertanyaan umum tentang self dressing dan cerebral palsy'],
];
addDiagram(`${IMG}/self-dressing-urutan.webp`, svg.flow('Urutan latihan self dressing', 'Pecah satu tugas menjadi langkah yang terlihat dan dapat diulang', [
  { h: 'Pilih pakaian', d: 'Mulai dari bahan nyaman dan bukaan yang mudah dikenali.' },
  { h: 'Atur posisi', d: 'Pastikan duduk atau berdiri stabil sebelum memulai.' },
  { h: 'Satu langkah', d: 'Latih satu gerak, misalnya memasukkan lengan ke lengan baju.' },
  { h: 'Kurangi bantuan', d: 'Tunggu respons anak sebelum tangan dewasa membantu.' },
  { h: 'Ulangi', d: 'Latihan singkat yang konsisten lebih berguna daripada sesi panjang.' },
]));
addDiagram(`${IMG}/self-dressing-adaptasi.webp`, svg.cards('Adaptasi yang mungkin membantu', 'Pilih sesuai asesmen, bukan berdasarkan tren produk', [
  { h: 'Pakaian', color: '#2B3A67', items: ['Pinggang elastis', 'Bukaan leher lebih lebar', 'Penanda depan dan belakang'] },
  { h: 'Posisi', color: '#00838F', items: ['Kursi dengan penopang', 'Pijakan kaki stabil', 'Cermin pada tinggi yang sesuai'] },
  { h: 'Rutinitas', color: '#7A5A06', items: ['Urutan gambar', 'Tempat pakaian tetap', 'Waktu latihan tidak terburu-buru'] },
]));
addDiagram(`${IMG}/self-dressing-bantuan.webp`, svg.grid('Bantuan bertahap saat berpakaian', 'Catat bantuan yang dipakai agar target berikutnya jelas', ['Tahap', 'Peran orang dewasa', 'Tanda bantuan dapat dikurangi'], [
  ['Mulai', 'Menyiapkan posisi dan menunjukkan langkah pertama.', 'Anak mengikuti arah dengan respons yang konsisten.'],
  ['Dengan isyarat', 'Memberi contoh, gestur, atau petunjuk singkat.', 'Anak memulai gerak setelah isyarat.'],
  ['Sentuhan ringan', 'Menstabilkan bagian tubuh tanpa mengerjakan seluruh tugas.', 'Anak menyelesaikan sebagian besar gerak.'],
  ['Mandiri', 'Mengawasi keselamatan dan memberi waktu.', 'Anak meminta bantuan pada bagian yang memang sulit.'],
], [230, 480, 394]));
addDiagram(`${IMG}/self-dressing-evaluasi.webp`, svg.flow('Evaluasi tujuan fungsional', 'Ukuran kemajuan bukan hanya cepat atau sempurna', [
  { h: 'Tugas apa?', d: 'Tentukan satu aktivitas berpakaian yang bermakna bagi anak.' },
  { h: 'Bantuan apa?', d: 'Catat jenis bantuan, posisi, dan alat yang digunakan.' },
  { h: 'Seberapa aman?', d: 'Periksa keseimbangan, kulit, nyeri, dan kelelahan.' },
  { h: 'Apa berubah?', d: 'Bandingkan kemampuan dalam konteks rumah atau sekolah.' },
]));
const body223 = [
  '<span data-revision-marker="yuka-20261030-223-r1" hidden></span>',
  '<div class="jawaban-singkat"><p><strong>Self dressing pada anak dengan cerebral palsy</strong> adalah latihan kemandirian berpakaian yang disusun dari kemampuan dan tujuan anak. Fokusnya bukan membuat anak bergerak seperti anak lain, melainkan membantu anak memakai pakaian dengan aman, nyaman, dan dengan bantuan yang makin sesuai. Asesmen okupasi, adaptasi pakaian, posisi stabil, dan latihan tugas nyata dapat menjadi bagian dari rencana.</p></div>',
  p('Bagi banyak keluarga, memakai baju terlihat seperti aktivitas sederhana. Bagi anak dengan cerebral palsy, aktivitas ini dapat melibatkan keseimbangan, jangkauan tangan, koordinasi kedua sisi tubuh, kemampuan mengikuti urutan, dan toleransi terhadap bahan pakaian. Karena itu, latihan self dressing perlu dipandang sebagai tujuan kehidupan sehari-hari, bukan sekadar latihan motorik yang dilakukan tanpa konteks.'),
  toc(sections223),
  '<h2 id="jawaban">Apa yang dimaksud self dressing pada anak dengan cerebral palsy?</h2>',
  p('Self dressing berarti keterampilan memakai dan melepas pakaian dengan tingkat bantuan yang sesuai. Pada satu anak, targetnya mungkin memilih kaus dan memasukkan kedua lengan. Pada anak lain, targetnya mungkin menarik celana sampai pinggang, membuka perekat, atau memberi tanda bahwa bagian tertentu membutuhkan bantuan. Target ini bersifat individual, bukan standar yang sama untuk semua anak.'),
  p('Cerebral palsy memengaruhi gerak dan postur dengan cara yang beragam. Sebagian anak mengalami kekakuan, gerakan tidak terkendali, kelemahan, atau kesulitan menjaga keseimbangan. Kondisi tersebut dapat berubah menurut posisi, kelelahan, rasa nyeri, atau lingkungan. Karena itu, kemampuan berpakaian pada pagi hari dapat berbeda dari sore hari tanpa berarti anak kehilangan kemajuan.'),
  p('CDC menjelaskan bahwa intervensi cerebral palsy dapat melibatkan terapi fisik, okupasi, dan wicara sesuai kebutuhan anak. Cerebral Palsy Alliance juga menjelaskan bahwa tujuan fungsional seperti mengancingkan baju dan memakai pakaian dapat dilatih melalui tugas nyata. Sumber tersebut mendukung pendekatan yang berorientasi pada aktivitas, bukan janji bahwa satu teknik cocok untuk semua anak.'),
  diag(`${IMG}/self-dressing-urutan.webp`, 'Diagram urutan latihan self dressing dari memilih pakaian hingga mengulang latihan', 'Urutan latihan dibuat pendek agar anak dan pendamping dapat melihat langkah yang sedang dilatih. Diagram ini adalah kerangka edukasi umum, bukan instruksi terapi individual.'),
  '<h2 id="asesmen">Mengapa target harus dibuat dari kemampuan anak?</h2>',
  p('Target yang baik menjawab tiga pertanyaan. Aktivitas apa yang ingin dilakukan anak? Bagian mana yang sudah dapat dilakukan? Bantuan apa yang membuat aktivitas lebih aman? Jawaban tersebut bisa diperoleh dari pengamatan keluarga, guru, dan terapis. Tulis target dalam bentuk perilaku yang terlihat, misalnya anak memasukkan lengan kanan ke lubang baju dengan satu isyarat.'),
  p('Asesmen bukan ujian yang menentukan nilai anak. Asesmen membantu tim memahami hubungan antara posisi tubuh, fungsi tangan, penglihatan, komunikasi, perhatian, dan tuntutan tugas. Anak yang belum dapat berdiri untuk memakai celana mungkin tetap dapat belajar melakukannya dalam posisi duduk dengan dukungan yang tepat.'),
  p('Cerebral Palsy Alliance menempatkan tujuan yang dipilih anak dan keluarga sebagai bagian penting dari goal directed training. Tujuan yang bermakna dapat meningkatkan motivasi karena hasilnya langsung terasa dalam rutinitas. Keluarga dapat membawa contoh pakaian yang biasa dipakai saat berkonsultasi agar rekomendasi tidak berhenti di ruang terapi.'),
  '<h2 id="urutan">Urutan latihan memakai baju yang lebih mudah diikuti</h2>',
  p('Mulai dengan memilih satu tugas dan satu jenis pakaian. Jangan melatih seluruh rutinitas dari membuka lemari sampai memakai sepatu bila anak cepat lelah. Pilih bagian yang paling berguna dan cukup singkat untuk diulang. Contohnya, latihan memasukkan lengan ke kaus setelah posisi duduk stabil.'),
  p('Letakkan pakaian dalam arah yang mudah dipahami. Penanda warna atau label kecil pada bagian belakang dapat membantu anak membedakan depan dan belakang, selama penanda itu tidak mengganggu kulit. Berikan waktu bagi anak untuk mengamati, meraba, dan mencoba sebelum orang dewasa memberi bantuan.'),
  p('Gunakan bahasa singkat dan konsisten. Satu kalimat seperti "cari lubang lengan" lebih mudah diikuti daripada penjelasan panjang. Untuk anak yang lebih terbantu oleh visual, kartu urutan dapat menampilkan gambar pakaian, posisi, satu langkah, dan selesai. Pastikan kartu tidak menjadi beban baru yang harus dihafal.'),
  '<h2 id="adaptasi">Adaptasi pakaian dan lingkungan yang dapat dicoba</h2>',
  p('Adaptasi paling sederhana sering berkaitan dengan pilihan pakaian. Pinggang elastis, bukaan yang lebih besar, bahan yang tidak mudah menggulung, dan perekat yang mudah diraba dapat mengurangi tuntutan gerak halus. Kancing kecil atau ritsleting bukan larangan, tetapi dapat dijadikan target terpisah setelah gerak dasar lebih stabil.'),
  p('Lingkungan juga menentukan hasil. Kursi dengan tinggi sesuai, pijakan kaki stabil, cermin, dan tempat pakaian yang mudah dijangkau dapat mengurangi kebutuhan menjaga keseimbangan sambil mencari pakaian. Jangan memindahkan anak ke posisi berdiri hanya demi terlihat mandiri bila duduk lebih aman untuk tahap latihan.'),
  diag(`${IMG}/self-dressing-adaptasi.webp`, 'Diagram adaptasi pakaian, posisi, dan rutinitas untuk latihan self dressing', 'Adaptasi dapat berasal dari pakaian, posisi, dan rutinitas. Pilihan yang tepat harus disesuaikan dengan hasil asesmen fungsional dan kenyamanan anak.'),
  p('CDC menyebut assistive technology dapat membantu aktivitas kehidupan sehari-hari. Namun, alat bantu perlu dipilih dengan penilaian yang tepat. Alat yang tidak sesuai dapat menambah beban, menimbulkan posisi tidak aman, atau membuat anak sulit memakai strategi yang sebenarnya dapat dipelajari.'),
  '<h2 id="bantuan">Cara memberi bantuan tanpa mengambil alih</h2>',
  p('Bantuan orang dewasa sebaiknya diberikan secukupnya. Tunjukkan langkah, beri isyarat, atau stabilkan posisi sebelum langsung menggerakkan tangan anak. Tunggu beberapa detik untuk melihat respons. Jika orang dewasa selalu menyelesaikan tugas, anak kehilangan kesempatan memahami urutan dan merasakan akibat dari usahanya sendiri.'),
  p('Bantuan sentuhan ringan dapat digunakan bila sudah disepakati dengan terapis. Sentuhan harus bertujuan membantu posisi atau arah, bukan memaksa sendi bergerak melewati batas. Hentikan latihan bila anak menunjukkan nyeri, takut, napas berubah, warna kulit berubah, atau kelelahan yang tidak biasa.'),
  p('Catat jenis bantuan yang dipakai. Misalnya, anak memerlukan bantuan penuh untuk membuka kancing, isyarat verbal untuk mencari lubang lengan, dan pengawasan saja untuk memasukkan kaki ke celana. Catatan semacam ini membuat kemajuan kecil terlihat dan membantu sekolah memakai pendekatan yang sama.'),
  diag(`${IMG}/self-dressing-bantuan.webp`, 'Tabel visual bantuan bertahap saat anak belajar berpakaian', 'Bantuan bertahap membantu keluarga melihat kapan harus menunggu, memberi isyarat, atau membantu secara fisik. Pengurangan bantuan harus tetap mengutamakan keamanan.'),
  '<h2 id="keamanan">Keamanan posisi, kulit, dan kelelahan</h2>',
  p('Latihan berpakaian tidak boleh mengorbankan keselamatan. Pastikan lantai tidak licin, kursi tidak mudah bergeser, dan anak tidak perlu menjangkau terlalu jauh. Untuk anak yang memakai alat bantu mobilitas atau penopang, ikuti instruksi penggunaannya. Jangan membuka atau mengubah alat tanpa arahan tenaga profesional.'),
  p('Periksa kulit setelah memakai pakaian atau alat bantu baru. Jahitan, label, karet, dan bahan kasar dapat menimbulkan iritasi, terutama bila anak sulit menyampaikan rasa tidak nyaman. Perhatikan juga suhu ruangan dan waktu latihan. Anak yang lelah mungkin membutuhkan jeda, bukan dorongan lebih keras.'),
  p('CDC menekankan bahwa tidak ada satu pengobatan yang terbaik untuk semua anak dengan cerebral palsy. Pesan ini juga relevan untuk self dressing. Bila kesulitan berkaitan dengan nyeri, kontraktur, penglihatan, menelan, atau perubahan gerak yang baru, keluarga perlu meminta evaluasi tenaga kesehatan, bukan mencoba menambah latihan sendiri.'),
  '<table><thead><tr><th>Situasi</th><th>Yang dapat diperiksa</th><th>Langkah aman berikutnya</th></tr></thead><tbody><tr><td>Sulit memasukkan lengan</td><td>Lebar bukaan, posisi bahu, dan urutan gerak.</td><td>Coba pakaian lebih longgar dan minta asesmen okupasi bila tetap sulit.</td></tr><tr><td>Sering kehilangan keseimbangan</td><td>Tinggi kursi, pijakan kaki, dan kebutuhan pegangan.</td><td>Latih dalam posisi duduk stabil dan jangan memaksa berdiri.</td></tr><tr><td>Kulit memerah atau gatal</td><td>Label, jahitan, karet, bahan, dan lama pakaian dipakai.</td><td>Hentikan pemicu, catat perubahan, dan konsultasikan bila menetap.</td></tr></tbody></table>',
  p('Tabel ini bukan alat untuk memilih alat bantu secara mandiri. Fungsinya membantu keluarga membawa contoh masalah yang jelas saat berdiskusi dengan tenaga profesional. Seorang anak dapat mengalami lebih dari satu situasi sekaligus. Prioritaskan hambatan yang paling memengaruhi keselamatan, kenyamanan, dan kesempatan anak berpartisipasi.'),
  p('Cerebral Palsy Alliance menjelaskan bahwa kemampuan self care dipengaruhi fungsi motorik kasar dan halus, penglihatan, kognisi, serta faktor lain. Karena itu, strategi yang berhasil pada saudara atau teman belum tentu cocok untuk anak tertentu. Penyesuaian harus diuji bertahap, dicatat, dan dihentikan bila membuat anak kesakitan atau makin tertekan.'),
  '<h2 id="rumah-sekolah">Membuat latihan konsisten di rumah dan sekolah</h2>',
  p('Anak lebih mudah memakai keterampilan bila langkahnya konsisten di beberapa tempat. Rumah dan sekolah tidak harus memiliki pakaian atau furnitur yang sama, tetapi urutan bahasa, cara memberi waktu, dan aturan bantuan sebaiknya serupa. Bagikan satu lembar ringkas yang menjelaskan target, bantuan yang boleh diberikan, dan tanda berhenti.'),
  p('Guru dapat memberi kesempatan anak mengatur bagian yang memang dapat dilakukan sebelum kegiatan dimulai. Pendamping atau teman sebaya tidak perlu menggantikan seluruh tugas. Peran mereka dapat berupa mengingatkan urutan, menunggu, atau membantu mengambil pakaian. Pendekatan ini sejalan dengan prinsip pendidikan inklusif yang menekankan akses dan partisipasi.'),
  p('Tautkan latihan berpakaian dengan rutinitas nyata. Anak dapat memilih pakaian untuk kegiatan sekolah, memasukkan baju kotor ke tempatnya, atau menyiapkan jaket sebelum keluar. Kegiatan seperti ini membantu keterampilan berpindah ke konteks lain, bukan hanya berhasil saat sesi latihan.'),
  '<h2 id="evaluasi">Cara mengevaluasi kemajuan secara realistis</h2>',
  p('Gunakan ukuran yang dapat diamati. Catat bagian tugas yang selesai, jumlah isyarat, jenis bantuan, durasi, dan apakah anak tetap aman. Tidak perlu mengejar waktu tercepat. Anak yang menyelesaikan tugas sedikit lebih lama tetapi dengan bantuan lebih sedikit dapat menunjukkan kemajuan penting.'),
  p('Evaluasi dalam beberapa hari dan situasi. Satu kali berhasil tidak selalu berarti keterampilan sudah stabil. Sebaliknya, satu hari sulit tidak menghapus kemajuan. Catat apakah perubahan terjadi karena tidur, nyeri, lingkungan bising, pakaian berbeda, atau jadwal yang terburu-buru.'),
  p('Cerebral Palsy Alliance menyebut latihan tugas nyata di rumah, sekolah, dan komunitas dapat membantu penggunaan keterampilan dalam kehidupan sehari-hari. Evaluasi karena itu perlu melihat konteks, bukan hanya hasil di ruang terapi. Bawa catatan tersebut saat berdiskusi dengan okupasi terapis atau tim sekolah.'),
  diag(`${IMG}/self-dressing-evaluasi.webp`, 'Diagram evaluasi tujuan fungsional self dressing dari tugas hingga perubahan', 'Evaluasi yang baik melihat tugas, bantuan, keamanan, dan perubahan dalam konteks nyata. Tidak ada angka tunggal yang dapat menggambarkan kemandirian setiap anak.'),
  '<h2 id="faq">Pertanyaan umum tentang self dressing dan cerebral palsy</h2>',
  faqHtml(faq223),
];

const faq224 = [
  { q: 'Apa tujuan utama UU Nomor 8 Tahun 2016?', a: 'UU Nomor 8 Tahun 2016 membangun kerangka penghormatan, pelindungan, dan pemenuhan hak penyandang disabilitas. JDIH BPK menjelaskan bahwa undang-undang ini juga mengatur kesamaan kesempatan, aksesibilitas, dan akomodasi yang layak. Pelaksanaan teknis tetap perlu dibaca bersama peraturan turunannya.' },
  { q: 'Apakah UU 8 Tahun 2016 hanya berlaku untuk sekolah luar biasa?', a: 'Tidak. Undang-undang ini mengatur hak penyandang disabilitas dalam berbagai aspek kehidupan, bukan hanya pendidikan khusus. Dalam pendidikan, prinsip kesamaan kesempatan perlu diterjemahkan melalui aksesibilitas dan akomodasi yang layak pada jenjang dan satuan pendidikan sesuai kebutuhan peserta didik.' },
  { q: 'Apa arti akomodasi yang layak di sekolah?', a: 'Akomodasi yang layak adalah modifikasi dan penyesuaian yang tepat dan diperlukan agar peserta didik penyandang disabilitas dapat menikmati atau menjalankan haknya atas dasar kesetaraan. Bentuknya bergantung pada asesmen kebutuhan, lingkungan, ragam disabilitas, dan tujuan pembelajaran.' },
  { q: 'Siapa yang harus terlibat menentukan dukungan pendidikan?', a: 'Satuan pendidikan, peserta didik, orang tua atau wali, dan pihak yang memiliki kompetensi perlu terlibat sesuai kebutuhan. Permendikbudristek 48 Tahun 2023 mengatur asesmen fungsional, konsultasi, Unit Layanan Disabilitas, pendidik, sarana prasarana, dan modifikasi kurikulum.' },
  { q: 'Apakah sekolah boleh menolak peserta didik penyandang disabilitas?', a: 'Keputusan penerimaan dan layanan tidak boleh didasarkan pada stereotip atau penolakan terhadap hak. Sekolah perlu melihat kewajiban, kapasitas, akomodasi yang diperlukan, dan mekanisme dukungan sesuai hukum yang berlaku. Orang tua dapat meminta penjelasan tertulis dan berkonsultasi dengan dinas pendidikan atau lembaga bantuan hukum.' },
  { q: 'Apakah UU 8 Tahun 2016 menetapkan semua sekolah harus memiliki fasilitas yang sama?', a: 'Undang-undang menetapkan hak dan prinsip, sedangkan bentuk fasilitas dan penyelenggaraan dirinci oleh aturan pelaksana. Kebutuhan peserta didik tidak seragam. Karena itu, perencanaan perlu berbasis asesmen, aksesibilitas, akomodasi yang layak, kompetensi pendidik, dan ketersediaan layanan pendukung.' },
  { q: 'Bagaimana orang tua menggunakan UU ini secara praktis?', a: 'Mulailah dengan mencatat kebutuhan dan hambatan anak, meminta pertemuan resmi dengan sekolah, serta meminta rencana dukungan tertulis. Simpan hasil asesmen, komunikasi, dan tindak lanjut. Jika masalah belum selesai, gunakan jalur pengaduan sekolah, dinas pendidikan, Unit Layanan Disabilitas, atau bantuan hukum.' },
];
const sections224 = [
  ['jawaban','Ringkasan UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas'],
  ['hak','Hak, kesamaan kesempatan, dan perubahan pendekatan'],
  ['pendidikan','Apa kaitannya dengan pendidikan inklusif?'],
  ['akomodasi','Akomodasi yang layak sebagai kewajiban layanan'],
  ['sekolah','Tanggung jawab sekolah, pemerintah, dan keluarga'],
  ['praktik','Contoh penerapan di kelas tanpa mengarang kebutuhan'],
  ['langkah','Langkah orang tua ketika dukungan belum tersedia'],
  ['batas','Batas artikel dan pentingnya membaca aturan terbaru'],
  ['faq','Pertanyaan umum tentang UU 8 Tahun 2016'],
];
addDiagram(`${IMG}/uu-8-kerangka-hak.webp`, svg.flow('Kerangka hak dalam UU 8 Tahun 2016', 'Baca undang-undang sebagai kerangka hak, lalu cek aturan teknisnya', [
  { h: 'Hak', d: 'Kenali hak dan kesamaan kesempatan penyandang disabilitas.' },
  { h: 'Aksesibilitas', d: 'Hapus hambatan lingkungan, informasi, dan layanan.' },
  { h: 'Akomodasi', d: 'Sesuaikan dukungan agar hak dapat dijalankan.' },
  { h: 'Partisipasi', d: 'Libatkan penyandang disabilitas dalam keputusan.' },
  { h: 'Akuntabilitas', d: 'Catat rencana, pelaksanaan, dan jalur pengaduan.' },
]));
addDiagram(`${IMG}/uu-8-pendidikan.webp`, svg.cards('Penerjemahan prinsip ke pendidikan', 'Prinsip umum perlu menjadi layanan yang dapat diamati', [
  { h: 'Akses', color: '#2B3A67', items: ['Masuk dan bergerak', 'Informasi yang dapat dipahami', 'Materi dan komunikasi'] },
  { h: 'Pembelajaran', color: '#00838F', items: ['Modifikasi proses', 'Alat bantu', 'Waktu dan cara penilaian'] },
  { h: 'Dukungan', color: '#7A5A06', items: ['ULD atau pendamping', 'Guru dan tenaga kependidikan', 'Koordinasi keluarga'] },
]));
addDiagram(`${IMG}/uu-8-pihak.webp`, svg.grid('Pihak dan pertanyaan kunci', 'Pembagian peran membantu rapat sekolah menjadi konkret', ['Pihak', 'Peran yang perlu ditanyakan', 'Bukti tindak lanjut'], [
  ['Peserta didik', 'Apa tujuan, preferensi, dan hambatan yang dirasakan?', 'Kesepakatan dukungan yang dipahami anak.'],
  ['Keluarga', 'Informasi apa yang membantu sekolah memahami rutinitas?', 'Catatan kebutuhan dan komunikasi tertulis.'],
  ['Sekolah', 'Akomodasi apa yang tersedia dan siapa koordinatornya?', 'Rencana layanan dan jadwal evaluasi.'],
  ['Pemerintah daerah', 'Fasilitasi apa yang dapat diakses sekolah?', 'Rujukan layanan atau dukungan ULD.'],
], [260, 470, 374]));
addDiagram(`${IMG}/uu-8-langkah.webp`, svg.flow('Langkah meminta akomodasi yang layak', 'Mulai dari kebutuhan nyata dan dokumentasi yang rapi', [
  { h: 'Catat hambatan', d: 'Tulis situasi, dampak pada belajar, dan dukungan yang dicoba.' },
  { h: 'Bertemu sekolah', d: 'Bahas kebutuhan bersama guru, pimpinan, dan pihak terkait.' },
  { h: 'Susun rencana', d: 'Tetapkan bentuk akomodasi, pelaksana, dan waktu evaluasi.' },
  { h: 'Pantau', d: 'Catat pelaksanaan dan perubahan kebutuhan anak.' },
]));
const body224 = [
  '<span data-revision-marker="yuka-20261030-224-r1" hidden></span>',
  '<div class="jawaban-singkat"><p><strong>UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas</strong> adalah undang-undang yang mengatur penghormatan, pelindungan, dan pemenuhan hak penyandang disabilitas. JDIH BPK mencatat undang-undang ini berlaku sejak 15 April 2016. Dalam pendidikan, prinsipnya perlu diterjemahkan melalui kesamaan kesempatan, aksesibilitas, akomodasi yang layak, dan layanan yang melibatkan peserta didik.</p></div>',
  p('Membaca undang-undang penting, tetapi mengutip pasal tanpa memahami pelaksanaannya dapat membuat keluarga bingung. Artikel ini merangkum kerangka hak dan menghubungkannya dengan praktik pendidikan inklusif. Ini bukan pendapat hukum individual. Untuk sengketa atau kebutuhan yang mendesak, minta nasihat dari lembaga bantuan hukum atau pejabat yang berwenang.'),
  toc(sections224),
  '<h2 id="jawaban">Ringkasan UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas</h2>',
  p('UU Nomor 8 Tahun 2016 menggantikan UU Nomor 4 Tahun 1997 tentang Penyandang Cacat. JDIH BPK mencatat judul resmi, tanggal penetapan, tanggal pengundangan, status berlaku, dan sumber Lembaran Negara Nomor 69 Tahun 2016. Perubahan pentingnya adalah kerangka yang menempatkan penyandang disabilitas sebagai pemegang hak, bukan sekadar penerima belas kasihan.'),
  p('JDIH BPK merangkum bahwa undang-undang ini mencakup kesamaan kesempatan dalam penyelenggaraan negara dan masyarakat, penghormatan, pelindungan, pemenuhan hak, aksesibilitas, serta akomodasi yang layak. Artinya, pembahasan tidak berhenti pada bantuan sosial. Negara, penyelenggara layanan, dan masyarakat memiliki peran untuk mengurangi hambatan partisipasi.'),
  p('Undang-undang juga memuat banyak bidang, termasuk pendidikan, kesehatan, pekerjaan, politik, kebudayaan, olahraga, kesejahteraan sosial, dan perlindungan dari diskriminasi. Karena cakupannya luas, pembaca perlu melihat aturan pelaksana yang lebih spesifik ketika membahas sekolah, layanan kesehatan, pekerjaan, atau fasilitas publik.'),
  diag(`${IMG}/uu-8-kerangka-hak.webp`, 'Diagram kerangka hak UU Nomor 8 Tahun 2016 dari hak hingga akuntabilitas', 'Diagram ini merangkum cara membaca UU 8/2016 sebagai kerangka hak. Ia bukan pengganti naskah undang-undang atau nasihat hukum.'),
  '<h2 id="hak">Hak, kesamaan kesempatan, dan perubahan pendekatan</h2>',
  p('Pendekatan berbasis hak mengubah pertanyaan yang diajukan kepada layanan publik. Pertanyaannya bukan apakah seorang anak cukup mampu untuk mengikuti sekolah, melainkan hambatan apa yang membuat partisipasi sulit dan penyesuaian apa yang diperlukan. Pergeseran ini tidak berarti semua layanan harus identik. Kesetaraan sering membutuhkan dukungan yang berbeda.'),
  p('Aksesibilitas juga lebih luas daripada ramp. Akses dapat menyangkut bangunan, transportasi, informasi, komunikasi, teknologi, prosedur, serta sikap orang yang memberikan layanan. Dalam pendidikan, hambatan dapat muncul dari jadwal yang tidak fleksibel, materi yang hanya tersedia dalam satu bentuk, atau penilaian yang tidak memberi cara menunjukkan pemahaman.'),
  p('Kesamaan kesempatan perlu dibaca bersama suara penyandang disabilitas dan keluarganya. Rencana yang dibuat tanpa melibatkan peserta didik dapat tampak baik di atas kertas tetapi tidak terpakai. Prinsip partisipasi membantu sekolah mengetahui dukungan yang benar-benar berguna, bukan hanya menambah administrasi.'),
  '<h2 id="pendidikan">Apa kaitannya dengan pendidikan inklusif?</h2>',
  p('UU 8/2016 menyediakan dasar hak, sementara aturan pendidikan menguraikan cara layanan dijalankan. Pendidikan inklusif berarti peserta didik dapat belajar bersama dengan dukungan yang sesuai, bukan sekadar ditempatkan di kelas biasa tanpa penyesuaian. Pembahasan tentang prinsip dan bentuk pendidikan inklusif dapat dibaca pada artikel <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a>.'),
  p('Peraturan Menteri Pendidikan, Kebudayaan, Riset, dan Teknologi Nomor 48 Tahun 2023 mengatur akomodasi yang layak untuk peserta didik penyandang disabilitas pada PAUD formal, pendidikan dasar, menengah, dan pendidikan tinggi. Dokumen resmi tersebut menjelaskan definisi akomodasi yang layak, aksesibilitas, Unit Layanan Disabilitas, pendidik, peserta didik, dan satuan pendidikan.'),
  p('Aturan tersebut penting karena menghubungkan prinsip dengan tindakan. Sekolah perlu memikirkan sarana prasarana, pendidik, tenaga kependidikan, kurikulum, asesmen fungsional, pendampingan, dan konsultasi. Rincian layanan tetap perlu disesuaikan dengan ragam disabilitas dan kebutuhan peserta didik, bukan disalin dari kasus lain.'),
  '<h2 id="akomodasi">Akomodasi yang layak sebagai kewajiban layanan</h2>',
  p('Permendikbudristek 48 Tahun 2023 mendefinisikan akomodasi yang layak sebagai modifikasi dan penyesuaian yang tepat dan diperlukan untuk menjamin penikmatan atau pelaksanaan hak atas dasar kesetaraan. Dalam praktik, bentuknya dapat berupa perubahan cara mengajar, alat bantu, waktu, komunikasi, ruang, pendamping, atau cara penilaian.'),
  p('Dokumen resmi tersebut mengatur bahwa bentuk akomodasi ditetapkan berdasarkan asesmen fungsional. Asesmen bertujuan memperoleh informasi tentang kondisi, hambatan, dan kebutuhan peserta didik. Konsultasi melibatkan peserta didik, orang tua atau wali, serta Unit Layanan Disabilitas. Ini berarti rencana layanan seharusnya memiliki alasan dan target, bukan hanya label disabilitas.'),
  diag(`${IMG}/uu-8-pendidikan.webp`, 'Diagram penerjemahan prinsip UU disabilitas ke akses, pembelajaran, dan dukungan sekolah', 'Prinsip hukum perlu diterjemahkan menjadi akses, pembelajaran, dan dukungan yang dapat diamati. Bentuk akhirnya bergantung pada asesmen fungsional dan kondisi satuan pendidikan.'),
  p('Akomodasi tidak sama dengan menurunkan harapan belajar. Tujuannya adalah menghilangkan hambatan yang tidak berkaitan dengan kompetensi yang sedang dinilai. Seorang peserta didik dapat membutuhkan waktu tambahan, format materi berbeda, atau alat komunikasi agar dapat menunjukkan pemahamannya.'),
  '<h2 id="sekolah">Tanggung jawab sekolah, pemerintah, dan keluarga</h2>',
  p('Satuan pendidikan memiliki peran langsung dalam menyediakan layanan dan mengatur pelaksanaannya. Pemerintah daerah dapat memfasilitasi dukungan anggaran, sarana prasarana, pendidik, tenaga kependidikan, dan Unit Layanan Disabilitas sesuai kewenangan. Keluarga memberikan informasi penting tentang kebutuhan anak dan ikut memantau apakah dukungan berjalan.'),
  p('Permendikbudristek 48 Tahun 2023 menjelaskan bahwa guru pendidikan khusus dapat memberikan layanan pembelajaran atau membimbing guru lain. Peraturan itu juga membahas pelatihan, pendampingan, modifikasi kurikulum, dan asesmen. Karena aturan pelaksana dapat berubah, sekolah sebaiknya merujuk dokumen resmi terbaru saat menyusun kebijakan.'),
  p('Tidak semua masalah sekolah dapat diselesaikan oleh satu guru. Koordinasi kepala sekolah, guru kelas, guru mata pelajaran, guru pendidikan khusus, konselor, orang tua, peserta didik, dan pihak profesional dapat mencegah dukungan berjalan sendiri-sendiri. Pertemuan singkat dengan agenda dan catatan keputusan sering lebih bermanfaat daripada komunikasi yang hanya lisan.'),
  diag(`${IMG}/uu-8-pihak.webp`, 'Tabel visual pihak yang perlu dilibatkan dan bukti tindak lanjut layanan inklusif', 'Pembagian peran membuat permintaan layanan lebih konkret. Nama pihak dan bukti tindak lanjut harus disesuaikan dengan struktur sekolah dan daerah masing-masing.'),
  '<h2 id="praktik">Contoh penerapan di kelas tanpa mengarang kebutuhan</h2>',
  p('Contoh pertama adalah akses materi. Jika peserta didik kesulitan membaca teks panjang karena hambatan penglihatan, bahasa, atau perhatian, guru dapat menawarkan format yang sesuai berdasarkan asesmen. Contoh kedua adalah waktu. Peserta didik dengan kebutuhan motorik mungkin memerlukan waktu untuk berpindah posisi atau menyiapkan alat.'),
  p('Contoh ketiga adalah komunikasi. Anak yang menggunakan komunikasi augmentatif mungkin membutuhkan perangkat atau papan komunikasi selama pelajaran, bukan hanya saat terapi. Guru perlu memastikan perangkat tersedia, teman memahami aturan penggunaannya, dan anak tidak dihukum karena menyampaikan jawaban dengan cara berbeda.'),
  p('Contoh keempat adalah penilaian. Guru dapat memeriksa kompetensi yang sama melalui jawaban lisan, tulisan, gambar, demonstrasi, atau perangkat bantu jika cara tersebut tidak mengubah kompetensi yang dinilai. Keputusan harus dicatat agar tidak bergantung pada satu orang dan dapat dievaluasi.'),
  '<table><thead><tr><th>Hambatan yang terlihat</th><th>Contoh penyesuaian</th><th>Yang perlu dipantau</th></tr></thead><tbody><tr><td>Materi sulit diakses</td><td>Format teks, audio, visual, atau alat bantu yang sesuai.</td><td>Apakah anak dapat memahami dan menunjukkan kompetensi?</td></tr><tr><td>Transisi atau waktu</td><td>Peringatan, waktu tambahan, urutan kegiatan, atau jeda.</td><td>Apakah partisipasi meningkat tanpa menambah tekanan?</td></tr><tr><td>Komunikasi</td><td>Bahasa jelas, gambar, tulisan, atau perangkat komunikasi.</td><td>Apakah anak dapat menyampaikan jawaban dan kebutuhan?</td></tr></tbody></table>',
  p('Penyesuaian bukan fasilitas istimewa bila diperlukan untuk membuat hak belajar dapat dijalankan. Namun, bentuknya harus masuk akal, aman, dan dapat ditinjau. Sekolah perlu membedakan antara modifikasi yang membantu akses dan perubahan kompetensi yang memang memerlukan keputusan pembelajaran tersendiri.'),
  p('Catat siapa yang bertanggung jawab menjalankan penyesuaian. Rencana yang hanya menyebut "akan dibantu" sulit dievaluasi. Tuliskan bentuk dukungan, kapan digunakan, siapa yang menyiapkan, bagaimana anak memberi umpan balik, dan kapan tim bertemu lagi. Dokumentasi ini membantu mencegah dukungan berhenti ketika satu guru tidak hadir.'),
  '<h2 id="langkah">Langkah orang tua ketika dukungan belum tersedia</h2>',
  p('Mulai dengan mencatat situasi yang menjadi hambatan. Tuliskan kapan terjadi, kegiatan yang terdampak, apa yang sudah dicoba, serta dampaknya pada partisipasi anak. Sertakan hasil asesmen atau rekomendasi profesional jika ada. Catatan konkret lebih mudah dibahas daripada pernyataan umum bahwa anak kesulitan di sekolah.'),
  p('Minta pertemuan resmi dengan sekolah. Sampaikan kebutuhan, usulan akomodasi, pelaksana, dan waktu evaluasi. Tanyakan siapa koordinator layanan disabilitas atau pihak yang mengelola dukungan. Minta ringkasan keputusan tertulis. Dokumentasi tidak dimaksudkan untuk memperkeruh hubungan, tetapi untuk memastikan semua pihak memiliki pemahaman yang sama.'),
  p('Jika dukungan belum tersedia, tanyakan jalur fasilitasi pada dinas pendidikan atau Unit Layanan Disabilitas di daerah. Untuk sengketa, diskriminasi, atau risiko keselamatan, keluarga dapat mencari bantuan hukum. Artikel <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusif</a> dapat membantu menyiapkan percakapan dengan sekolah.'),
  diag(`${IMG}/uu-8-langkah.webp`, 'Diagram langkah meminta akomodasi yang layak mulai dari mencatat hambatan hingga memantau', 'Permintaan layanan sebaiknya dimulai dari hambatan yang dapat diamati, dibahas bersama, lalu dipantau. Jalur pengaduan berbeda menurut lembaga dan daerah.'),
  '<h2 id="batas">Batas artikel dan pentingnya membaca aturan terbaru</h2>',
  p('Ringkasan populer tidak dapat menggantikan naskah UU 8/2016, peraturan pemerintah, peraturan menteri, atau keputusan yang relevan. Status suatu peraturan, putusan pengadilan, dan petunjuk pelaksanaan dapat berubah. Gunakan sumber resmi JDIH BPK, JDIH kementerian, peraturan.go.id, atau situs pemerintah yang dapat diverifikasi.'),
  p('Artikel ini menggunakan UU 8/2016 sebagai kerangka dan Permendikbudristek 48/2023 sebagai contoh aturan teknis pendidikan. Jangan menyimpulkan bahwa satu pasal otomatis menyelesaikan semua kebutuhan anak. Akomodasi harus direncanakan berdasarkan asesmen dan konsultasi, sementara konflik hukum perlu ditangani melalui jalur yang tepat.'),
  p('Tujuan akhirnya adalah pendidikan yang dapat diakses, aman, dan bermartabat. Hukum memberi dasar kewajiban, tetapi kualitas pelaksanaan juga dipengaruhi budaya sekolah, kompetensi pendidik, komunikasi dengan keluarga, dan kemauan mendengar pengalaman peserta didik.'),
  p('Saat membaca peraturan, bedakan antara hak yang dirumuskan dalam undang-undang, mekanisme pelaksanaan dalam peraturan pemerintah, dan petunjuk teknis kementerian. Perbedaan tingkat aturan membantu keluarga mencari sumber yang tepat. Jika pertanyaannya tentang akses gedung, cari ketentuan aksesibilitas. Jika tentang penilaian atau pendampingan, cari aturan pendidikan yang lebih khusus.'),
  p('Keluarga juga dapat meminta sekolah menjelaskan alasan ketika sebuah dukungan belum dapat diberikan. Jawaban yang baik menyebut kebutuhan, keterbatasan, rencana alternatif, pihak yang bertanggung jawab, dan waktu peninjauan ulang. Dengan cara ini, percakapan bergeser dari permintaan umum menjadi perencanaan layanan yang dapat dipantau.'),
  p('Dalam setiap proses, jaga kerahasiaan data anak. Bagikan informasi yang relevan kepada pihak yang memang terlibat dalam layanan, dan minta persetujuan sebelum foto, cerita, atau hasil asesmen dipublikasikan. Perlindungan martabat adalah bagian dari layanan yang setara, bukan tambahan setelah masalah selesai.'),
  '<h2 id="faq">Pertanyaan umum tentang UU 8 Tahun 2016</h2>',
  faqHtml(faq224),
];

const faq225 = [
  { q: 'Apa arti autisme ringan?', a: 'Istilah autisme ringan sering dipakai sehari-hari, tetapi bukan diagnosis yang cukup untuk menggambarkan kebutuhan seseorang. Pedoman klinis memakai spektrum dan tingkat dukungan yang diperlukan pada area komunikasi sosial serta perilaku terbatas atau berulang. Kebutuhan setiap orang tetap perlu dilihat secara individual.' },
  { q: 'Apakah anak yang bicara lancar pasti tidak autistik?', a: 'Tidak. Kemampuan bicara tidak sendirian menentukan autisme. Seseorang dapat berbicara lancar tetapi mengalami tantangan memahami percakapan timbal balik, perubahan rutinitas, sensorik, atau fungsi sehari-hari. Evaluasi melihat perkembangan dan perilaku dalam berbagai konteks, bukan satu ciri.' },
  { q: 'Apakah tanda autisme dapat terlihat dari satu perilaku?', a: 'Satu perilaku tidak cukup untuk menyimpulkan autisme. Beberapa ciri dapat muncul pada anak tanpa autisme atau pada kondisi lain. Penilaian mempertimbangkan pola, sejak kapan muncul, dampaknya pada fungsi, laporan keluarga, observasi profesional, serta perkembangan komunikasi dan sosial.' },
  { q: 'Kapan orang tua perlu meminta evaluasi?', a: 'Minta konsultasi bila ada kekhawatiran tentang komunikasi, interaksi, permainan, respons sensorik, gerakan berulang, perubahan rutinitas, atau perkembangan yang tidak sesuai harapan. Evaluasi lebih awal dapat membantu keluarga memahami kekuatan dan kebutuhan anak, meskipun hasil akhirnya bukan diagnosis autisme.' },
  { q: 'Apakah anak autistik dengan kebutuhan dukungan lebih sedikit tidak memerlukan bantuan?', a: 'Tidak. Kebutuhan dukungan dapat berubah menurut lingkungan, tuntutan sosial, usia, kesehatan, dan tugas. Anak yang tampak mandiri dalam satu konteks bisa membutuhkan penyesuaian di sekolah atau rumah. Dukungan sebaiknya diberikan berdasarkan hambatan nyata, bukan label tingkat ringan.' },
  { q: 'Apa dukungan sekolah yang dapat membantu?', a: 'Dukungan dapat berupa jadwal visual, instruksi yang jelas, waktu transisi, ruang tenang, cara komunikasi alternatif, penyesuaian penilaian, penguatan minat, dan koordinasi keluarga. Pilihan harus dibuat berdasarkan asesmen dan respons anak. Tidak semua strategi cocok untuk semua anak.' },
  { q: 'Apakah autisme bisa disembuhkan?', a: 'Autisme adalah kondisi perkembangan, bukan penyakit yang harus dihapus. Layanan dan intervensi ditujukan untuk mendukung komunikasi, kesehatan, partisipasi, keterampilan hidup, dan kualitas hidup. Tidak ada satu pendekatan yang terbaik untuk semua orang. Waspadai klaim penyembuhan cepat tanpa sumber dan risiko yang jelas.' },
];
const sections225 = [
  ['jawaban','Autisme ringan sebenarnya seperti apa?'],
  ['istilah','Mengapa istilah ringan perlu dibaca hati-hati?'],
  ['ciri','Ciri yang dapat terlihat dalam komunikasi dan rutinitas'],
  ['asesmen','Bagaimana evaluasi profesional dilakukan?'],
  ['dukungan','Dukungan rumah dan sekolah yang berangkat dari kebutuhan'],
  ['sensorik','Mengelola perubahan, sensorik, dan transisi'],
  ['kekuatan','Melihat kekuatan tanpa menutupi kebutuhan'],
  ['kapan','Kapan keluarga perlu mencari bantuan?'],
  ['faq','Pertanyaan umum tentang autisme dan dukungan'],
];
addDiagram(`${IMG}/autisme-istilah.webp`, svg.flow('Membaca istilah autisme ringan', 'Gunakan kebutuhan dukungan, bukan label singkat, sebagai dasar bantuan', [
  { h: 'Dengar kekhawatiran', d: 'Catat pengalaman anak dan keluarga dalam situasi nyata.' },
  { h: 'Lihat pola', d: 'Perhatikan komunikasi sosial serta perilaku berulang.' },
  { h: 'Nilai fungsi', d: 'Tanyakan dampaknya pada belajar, bermain, dan keseharian.' },
  { h: 'Rancang dukungan', d: 'Pilih penyesuaian yang membantu partisipasi dan kualitas hidup.' },
]));
addDiagram(`${IMG}/autisme-ciri.webp`, svg.cards('Area yang perlu diamati', 'Tidak satu pun area berdiri sendiri sebagai diagnosis', [
  { h: 'Komunikasi sosial', color: '#2B3A67', items: ['Percakapan timbal balik', 'Gestur dan konteks', 'Memahami perspektif'] },
  { h: 'Rutinitas', color: '#00838F', items: ['Transisi kegiatan', 'Minat yang mendalam', 'Gerakan atau pola berulang'] },
  { h: 'Fungsi harian', color: '#7A5A06', items: ['Belajar dan bermain', 'Regulasi sensorik', 'Kemandirian dan kesehatan'] },
]));
addDiagram(`${IMG}/autisme-dukungan.webp`, svg.grid('Contoh dukungan berbasis kebutuhan', 'Pilih strategi setelah memahami hambatan yang dialami anak', ['Situasi', 'Dukungan yang mungkin dicoba', 'Cara memantau'], [
  ['Transisi', 'Jadwal visual, peringatan waktu, dan pilihan terbatas.', 'Catat durasi transisi dan tanda stres.'],
  ['Instruksi', 'Kalimat singkat, contoh visual, dan waktu memproses.', 'Tanyakan apakah anak memahami, bukan hanya diam.'],
  ['Sensorik', 'Kurangi pemicu, sediakan jeda, dan ajarkan cara meminta istirahat.', 'Pantau keamanan dan pemulihan setelah jeda.'],
  ['Komunikasi', 'Gunakan cara bicara, gambar, tulisan, atau alat bantu yang sesuai.', 'Catat apakah anak lebih mampu menyampaikan kebutuhan.'],
], [240, 520, 344]));
addDiagram(`${IMG}/autisme-evaluasi.webp`, svg.flow('Dari kekhawatiran menuju evaluasi', 'Evaluasi menggabungkan riwayat perkembangan, observasi, dan kebutuhan fungsi', [
  { h: 'Kekhawatiran', d: 'Keluarga, guru, atau anak menyampaikan contoh nyata.' },
  { h: 'Skrining', d: 'Tenaga kesehatan menggunakan alat yang sesuai bila diperlukan.' },
  { h: 'Evaluasi', d: 'Tim menilai perkembangan, perilaku, komunikasi, dan fungsi.' },
  { h: 'Rencana', d: 'Keluarga dan profesional memilih layanan serta penyesuaian.' },
]));
const body225 = [
  '<span data-revision-marker="yuka-20261030-225-r1" hidden></span>',
  '<div class="jawaban-singkat"><p><strong>Autisme ringan</strong> adalah istilah sehari-hari yang dapat menyederhanakan kebutuhan anak. Pedoman klinis menggambarkan tingkat dukungan pada komunikasi sosial dan perilaku terbatas atau berulang, bukan nilai seseorang. Anak yang tampak mandiri tetap dapat membutuhkan dukungan pada transisi, sensorik, komunikasi, belajar, atau keterampilan hidup. Diagnosis tidak dapat dibuat dari satu ciri.</p></div>',
  p('Pertanyaan tentang autisme sering muncul setelah orang tua melihat perbedaan cara anak berbicara, bermain, merespons suara, atau menghadapi perubahan. Jawaban yang aman tidak memberi label dari jauh. Jawaban yang berguna membantu keluarga mengenali pola, memahami dampaknya, dan mencari evaluasi serta dukungan yang sesuai.'),
  toc(sections225),
  '<h2 id="jawaban">Autisme ringan sebenarnya seperti apa?</h2>',
  p('Dalam percakapan sehari-hari, kata ringan sering berarti anak dapat berbicara, bersekolah, atau melakukan sebagian kegiatan tanpa bantuan penuh. Namun, kemampuan yang terlihat dari luar tidak selalu menunjukkan beban yang dialami anak. Anak dapat berbicara lancar tetapi kesulitan mengikuti percakapan, membaca maksud sosial, mengelola sensasi, atau pulih setelah perubahan.'),
  p('CDC menjelaskan bahwa autisme berkaitan dengan perbedaan perkembangan pada komunikasi dan interaksi sosial serta perilaku atau minat yang terbatas dan berulang. CDC juga menekankan bahwa anak dengan autisme tidak harus memiliki semua contoh perilaku yang tercantum. Karena itu, daftar ciri internet tidak boleh dipakai sebagai alat diagnosis mandiri.'),
  p('Istilah yang lebih membantu adalah menanyakan dukungan apa yang diperlukan dalam situasi tertentu. Anak mungkin membutuhkan sedikit dukungan saat belajar topik yang disukai, tetapi dukungan lebih besar saat berganti kegiatan, berada di tempat ramai, atau memahami instruksi sosial yang tidak langsung.'),
  diag(`${IMG}/autisme-istilah.webp`, 'Diagram membaca istilah autisme ringan dari kekhawatiran hingga dukungan berbasis kebutuhan', 'Diagram ini membantu mengganti label singkat dengan pertanyaan tentang pola dan kebutuhan. Ia bukan alat skrining atau diagnosis.'),
  '<h2 id="istilah">Mengapa istilah ringan perlu dibaca hati-hati?</h2>',
  p('Pedoman diagnosis klinis yang dirujuk CDC menggunakan tiga tingkat dukungan pada dua kelompok kriteria. Level 1 berarti memerlukan dukungan, level 2 memerlukan dukungan substansial, dan level 3 memerlukan dukungan sangat substansial. Tingkat tersebut tidak dimaksudkan sebagai label tetap untuk seluruh kehidupan seseorang.'),
  p('Kebutuhan dukungan dapat berbeda antara komunikasi sosial dan perilaku terbatas atau berulang. Seseorang dapat membutuhkan dukungan lebih besar pada satu area tetapi tidak pada area lain. Kebutuhan juga dipengaruhi lingkungan, tuntutan, kesehatan, tidur, kecemasan, bahasa, dan pengalaman hidup.'),
  p('Kata ringan dapat membuat orang menganggap anak tidak membutuhkan akomodasi. Sebaliknya, kata berat dapat menutupi kekuatan dan pilihan anak. Gunakan bahasa yang menjelaskan situasi, misalnya anak membutuhkan jadwal visual untuk transisi atau waktu pemrosesan lebih panjang saat instruksi kelompok.'),
  '<h2 id="ciri">Ciri yang dapat terlihat dalam komunikasi dan rutinitas</h2>',
  p('Pada komunikasi sosial, beberapa anak kesulitan memulai atau mempertahankan percakapan timbal balik, memahami bahasa kiasan, membaca gestur, atau menyesuaikan cara bicara dengan konteks. Anak lain mungkin berbicara panjang tentang minat tertentu tetapi kesulitan menanggapi pertanyaan atau sudut pandang lawan bicara.'),
  p('Pada rutinitas, perubahan kecil dapat terasa besar. Anak mungkin membutuhkan urutan kegiatan yang dapat diprediksi, menata benda dengan cara tertentu, mengulang gerakan, atau menghabiskan waktu pada minat yang mendalam. Perilaku tersebut perlu dipahami bersama konteks sensorik dan fungsi, bukan langsung dianggap sebagai perilaku buruk.'),
  p('CDC menyebut orang dengan autisme dapat memiliki cara berbeda dalam belajar, bergerak, atau memperhatikan. Beberapa anak juga mengalami tantangan tidur, makan, kecemasan, atau kondisi lain. Ciri yang muncul tidak selalu berarti autisme karena kondisi lain dapat memiliki gejala yang serupa.'),
  diag(`${IMG}/autisme-ciri.webp`, 'Diagram area pengamatan komunikasi sosial, rutinitas, dan fungsi harian pada autisme', 'Area pengamatan perlu dilihat sebagai pola yang memengaruhi fungsi, bukan daftar centang untuk menetapkan diagnosis.'),
  '<h2 id="asesmen">Bagaimana evaluasi profesional dilakukan?</h2>',
  p('NIMH menjelaskan bahwa diagnosis autisme dilakukan dengan mengevaluasi perilaku dan perkembangan. Pada anak, evaluasi dapat melibatkan riwayat perkembangan dari pengasuh, observasi perilaku, pemeriksaan kemampuan komunikasi, dan penilaian keterampilan sehari-hari. Tim dapat terdiri dari dokter, psikolog, terapis wicara, terapis okupasi, dan profesional pendidikan sesuai kebutuhan.'),
  p('CDC menjelaskan bahwa diagnosis klinis menggunakan informasi dari orang tua atau pengasuh dan observasi profesional. Evaluasi tidak hanya bertanya apakah anak melakukan suatu perilaku. Evaluasi juga melihat kapan perilaku muncul, seberapa konsisten, dampaknya pada fungsi, serta apakah ada penjelasan perkembangan atau kondisi lain.'),
  p('Keluarga dapat menyiapkan video atau catatan singkat dari situasi yang sulit, tetapi jangan membuat anak mengulang perilaku untuk membuktikan sesuatu. Catatan tentang tidur, perubahan rutinitas, bahasa yang dipakai, permainan, sensorik, dan kegiatan yang berjalan baik akan membantu profesional melihat gambaran yang lebih lengkap.'),
  diag(`${IMG}/autisme-evaluasi.webp`, 'Diagram proses dari kekhawatiran menuju skrining, evaluasi, dan rencana dukungan', 'Proses evaluasi dimulai dari contoh nyata dan berakhir pada rencana dukungan. Hasil evaluasi perlu dibahas dengan keluarga dan anak sesuai usia serta pemahamannya.'),
  '<h2 id="dukungan">Dukungan rumah dan sekolah yang berangkat dari kebutuhan</h2>',
  p('Dukungan tidak perlu menunggu diagnosis final bila anak mengalami hambatan yang nyata. Sekolah dapat menyesuaikan cara memberi instruksi, menyediakan rutinitas yang dapat diprediksi, memberi waktu transisi, dan mengurangi tuntutan yang tidak berkaitan dengan kompetensi belajar. Penyesuaian tetap perlu dibahas dengan keluarga dan tim sekolah.'),
  p('Di rumah, keluarga dapat membuat urutan visual untuk kegiatan pagi, mandi, makan, atau berangkat. Gunakan kata yang konsisten dan pilihan yang terbatas. Jangan mengubah seluruh rumah menjadi ruang tanpa tantangan. Tujuan dukungan adalah membantu anak berpartisipasi dan belajar cara meminta bantuan atau istirahat.'),
  p('NIMH menjelaskan bahwa layanan untuk autisme dapat meliputi intervensi pendidikan, okupasi, fisik, wicara, psikologis, dan pendekatan lain sesuai kebutuhan. Tidak ada satu pendekatan yang terbaik untuk semua orang. Keluarga perlu menimbang tujuan, bukti, risiko, biaya, dan suara anak.'),
  '<h2 id="sensorik">Mengelola perubahan, sensorik, dan transisi</h2>',
  p('Transisi dapat dibantu dengan pemberitahuan sebelum perubahan, timer visual, jadwal gambar, atau urutan yang dapat dicentang. Mulai dari perubahan kecil dan beri waktu pemulihan. Jika anak menunjukkan tanda kewalahan, keselamatan didahulukan. Memaksa anak terus mengikuti kegiatan bukan ukuran keberhasilan dukungan.'),
  p('Kebutuhan sensorik berbeda. Ada anak yang terganggu suara, cahaya, tekstur, kerumunan, atau bau. Ada pula anak yang mencari gerakan atau tekanan. Orang dewasa dapat mengamati pola, tetapi tidak boleh menyimpulkan kebutuhan medis dari satu respons. Terapis okupasi atau tenaga kesehatan dapat membantu menyusun penyesuaian yang lebih tepat.'),
  '<table><thead><tr><th>Situasi</th><th>Contoh dukungan</th><th>Indikator yang dipantau</th></tr></thead><tbody><tr><td>Perubahan jadwal</td><td>Peringatan, urutan visual, dan pilihan terbatas.</td><td>Waktu transisi dan cara anak meminta bantuan.</td></tr><tr><td>Instruksi panjang</td><td>Pecah menjadi langkah pendek dan beri waktu memproses.</td><td>Anak dapat memulai tugas atau meminta penjelasan.</td></tr><tr><td>Lingkungan ramai</td><td>Jeda, tempat lebih tenang, atau perlindungan suara sesuai kebutuhan.</td><td>Keamanan, pemulihan, dan kesiapan kembali.</td></tr></tbody></table>',
  p('Catatan perilaku sebaiknya menjelaskan konteks, bukan hanya menyebut anak nakal, malas, atau tidak mau bekerja sama. Tulis apa yang terjadi sebelum perilaku, apa yang dilakukan anak, respons orang dewasa, dan apa yang membantu. Catatan ini membantu tim mencari fungsi kebutuhan tanpa menyalahkan anak.'),
  p('Sebagian anak belajar menyamarkan kesulitan agar terlihat mengikuti teman. Hal ini dapat membuat kebutuhan tidak terlihat di sekolah, lalu muncul sebagai kelelahan, sakit kepala, penarikan diri, atau ledakan emosi di rumah. Dengarkan laporan anak dan keluarga, bukan hanya penampilan singkat di satu ruangan.'),
  diag(`${IMG}/autisme-dukungan.webp`, 'Tabel visual dukungan berbasis kebutuhan untuk transisi, instruksi, sensorik, dan komunikasi', 'Dukungan dipilih dari hambatan yang teramati. Pantau respons anak dan hentikan strategi yang meningkatkan risiko atau tekanan.'),
  p('Buat cara meminta jeda yang dapat dipakai anak. Bentuknya bisa kata, kartu, gestur, atau perangkat komunikasi. Jeda bukan hadiah karena anak berperilaku baik. Jeda adalah bagian dari akses agar anak dapat kembali berpartisipasi dengan aman bila sudah siap.'),
  '<h2 id="kekuatan">Melihat kekuatan tanpa menutupi kebutuhan</h2>',
  p('Anak autistik dapat memiliki minat, ingatan, ketekunan, kemampuan visual, kreativitas, atau pengetahuan mendalam yang menjadi modal belajar. Kekuatan tersebut sebaiknya digunakan untuk membuka akses, bukan untuk membuktikan bahwa anak tidak membutuhkan bantuan.'),
  p('Pujian yang baik menjelaskan usaha dan strategi, bukan membandingkan anak dengan teman. Misalnya, orang dewasa dapat mengatakan bahwa anak berhasil meminta jeda sebelum kewalahan atau menemukan cara menyelesaikan tugas. Pengakuan semacam ini membantu anak memahami dirinya dan mengembangkan komunikasi kebutuhan.'),
  p('Hindari cerita yang menggambarkan autisme hanya sebagai masalah yang harus dihilangkan. Fokus pada kesehatan, keselamatan, hubungan, komunikasi, partisipasi, dan kualitas hidup. Artikel <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusif</a> dan <a href="/artikel/cara-membuat-jadwal-visual-untuk-anak-autis">cara membuat jadwal visual</a> dapat menjadi bacaan lanjutan.'),
  '<h2 id="kapan">Kapan keluarga perlu mencari bantuan?</h2>',
  p('Carilah konsultasi bila ada kekhawatiran tentang perkembangan komunikasi, interaksi, permainan, respons sensorik, gerakan berulang, tidur, makan, atau kemandirian. Keluarga tidak perlu menunggu sampai anak mengalami kegagalan besar di sekolah. Kekhawatiran yang dicatat lebih awal dapat membantu menentukan langkah berikutnya.'),
  p('Mulailah dari dokter anak atau layanan perkembangan yang dapat melakukan skrining dan rujukan. Tanyakan proses, biaya, waktu tunggu, dan dokumen yang perlu disiapkan. Bila tersedia, ajak guru atau terapis menyampaikan pengamatan, dengan tetap menghormati privasi anak.'),
  p('Waspadai layanan yang menjanjikan penyembuhan cepat, meminta biaya besar tanpa rincian, atau menyalahkan keluarga. Tanyakan bukti, risiko, tujuan, cara mengukur hasil, dan pilihan lain. Intervensi seharusnya meningkatkan fungsi dan kesejahteraan, bukan hanya membuat anak tampak lebih tenang untuk kenyamanan orang dewasa.'),
  p('Skrining bukan diagnosis. Hasil skrining dapat menunjukkan bahwa evaluasi lanjutan layak dipertimbangkan, tetapi tidak menetapkan kondisi anak. Sebaliknya, hasil skrining yang tidak menunjukkan risiko tinggi tidak selalu menutup semua pertanyaan. Keluarga tetap dapat menyampaikan kekhawatiran kepada tenaga kesehatan bila hambatan nyata berlanjut.'),
  p('Gunakan bahasa yang menjaga martabat anak. Hindari menjadikan foto, cerita, atau perilaku anak sebagai bahan pembuktian di depan orang lain tanpa persetujuan. Anak berhak mengetahui bahwa dukungan diberikan untuk membantu kehidupannya, bukan untuk memenuhi label atau harapan orang dewasa.'),
  p('Kebutuhan dukungan juga perlu ditinjau ulang saat anak naik kelas, berganti guru, memasuki lingkungan baru, atau mengalami perubahan kesehatan. Rencana yang tepat tahun ini belum tentu tepat tahun depan. Pantau perubahan bersama tim secara teratur.'),
  '<h2 id="faq">Pertanyaan umum tentang autisme dan dukungan</h2>',
  faqHtml(faq225),
];

const articles = [
  {
    slug: 'self-dressing-anak-cerebral-palsy-tips',
    titleTag: 'Self Dressing Anak Cerebral Palsy: Tips Aman dan Bertahap | YUKA',
    metaDesc: 'Tips self dressing anak cerebral palsy dengan target fungsional, adaptasi pakaian, bantuan bertahap, dan latihan aman di rumah serta sekolah.',
    keywords: 'self dressing anak cerebral palsy tips, kemandirian berpakaian anak cerebral palsy, terapi okupasi cerebral palsy',
    ogTitle: 'Self Dressing Anak Cerebral Palsy: Tips Aman dan Bertahap',
    ogDesc: 'Panduan berbasis kebutuhan untuk membantu anak dengan cerebral palsy belajar berpakaian secara aman dan bertahap.',
    h1: 'Self Dressing Anak Cerebral Palsy: Tips Aman dan Bertahap', crumb: 'Self Dressing Anak Cerebral Palsy', category: 'Pendidikan',
    datePublished: '2026-10-20T08:00:00+07:00', dateModified: '2026-10-30T08:00:00+07:00', dateDisplay: '20 Oktober 2026', readTime: '15 menit baca',
    image: { file: 'Dokumentasi/self-dressing-anak-cerebral-palsy-hero.webp', w: 1200, h: 900, alt: 'Peserta kegiatan YUKA berlatih aktivitas kemandirian di lingkungan rumah', caption: 'Dokumentasi kegiatan kemandirian YUKA. Foto ini menunjukkan aktivitas harian dan tidak menggambarkan diagnosis cerebral palsy atau langkah berpakaian tertentu.', credit },
    bodyHtml: body223.join('\n'), faq: faq223, related: [
      { href: '/artikel/terapi-okupasi-untuk-anak-cerebral-palsy', title: 'Terapi Okupasi untuk Anak Cerebral Palsy', desc: 'Memahami tujuan aktivitas fungsional dan dukungan okupasi.' },
      { href: '/artikel/asesmen-abk', title: 'Asesmen Anak Berkebutuhan Khusus', desc: 'Mengapa kebutuhan anak perlu dipahami sebelum memilih strategi.' },
      { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Menyusun target dan dukungan yang dapat dievaluasi.' },
    ], tags: ['CerebralPalsy', 'SelfDressing', 'Kemandirian'], sources: [
      { url: 'https://cdc.gov/cerebral-palsy/treatment/index.html', label: 'CDC: Treatment and Intervention for Cerebral Palsy' },
      { url: 'https://cerebralpalsy.org.au/services/therapy-health-and-wellbeing/occupational-therapy/', label: 'Cerebral Palsy Alliance: Occupational Therapy' },
      { url: 'https://cerebralpalsy.org.au/wp-content/uploads/2023/09/Fact-Sheet_-Goal-Directed-Training_GDT.pdf', label: 'Cerebral Palsy Alliance: Goal Directed Training' },
      { url: 'https://www.cdc.gov/disability-inclusion/strategies/', label: 'CDC: Disability Inclusion Strategies' },
    ], sourcesCheckedNote: 'Sumber diperiksa 30 Oktober 2026. Artikel ini memberi informasi umum dan tidak menggantikan asesmen tenaga kesehatan atau okupasi terapis.'
  },
  {
    slug: 'uu-no-8-tahun-2016-tentang-penyandang-disabilitas',
    titleTag: 'UU No 8 Tahun 2016 tentang Penyandang Disabilitas | YUKA',
    metaDesc: 'Ringkasan UU No 8 Tahun 2016 tentang Penyandang Disabilitas, kaitannya dengan pendidikan inklusif, aksesibilitas, dan akomodasi yang layak.',
    keywords: 'uu no 8 tahun 2016 tentang penyandang disabilitas, pendidikan inklusif, akomodasi yang layak',
    ogTitle: 'UU No 8 Tahun 2016 tentang Penyandang Disabilitas',
    ogDesc: 'Ringkasan berbasis sumber resmi tentang hak penyandang disabilitas dan kaitannya dengan pendidikan inklusif.',
    h1: 'UU No 8 Tahun 2016 tentang Penyandang Disabilitas: Ringkasan dan Kaitannya dengan Pendidikan Inklusif', crumb: 'UU No 8 Tahun 2016 tentang Penyandang Disabilitas', category: 'Pendidikan',
    datePublished: '2026-10-21T08:00:00+07:00', dateModified: '2026-10-30T08:00:00+07:00', dateDisplay: '21 Oktober 2026', readTime: '15 menit baca',
    image: { file: 'Dokumentasi/museum-gunung-merapi-gambar-055.webp', w: 1600, h: 1200, alt: 'Peserta kunjungan edukatif melihat pameran museum dalam kegiatan kelompok YUKA', caption: 'Dokumentasi kunjungan edukatif YUKA. Foto ini bukan bukti kepatuhan hukum dan tidak menggantikan pembacaan naskah peraturan resmi.', credit },
    bodyHtml: body224.join('\n'), faq: faq224, related: [
      { href: '/artikel/pendidikan-inklusi', title: 'Pendidikan Inklusi', desc: 'Pengantar prinsip sekolah yang memberi akses dan partisipasi.' },
      { href: '/artikel/apa-perbedaan-sekolah-inklusi-dan-slb', title: 'Perbedaan Sekolah Inklusi dan SLB', desc: 'Membandingkan konteks layanan tanpa membuat hierarki nilai.' },
      { href: '/artikel/gpk-adalah', title: 'GPK Adalah Guru Pembimbing Khusus', desc: 'Memahami peran dukungan pendidik dalam layanan inklusif.' },
    ], tags: ['UU82016', 'Disabilitas', 'PendidikanInklusif'], sources: [
      { url: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016', label: 'JDIH BPK: UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas' },
      { url: 'https://peraturan.bpk.go.id/Download/26352/UU%20Nomor%208%20Tahun%202016.pdf', label: 'JDIH BPK: Naskah PDF UU Nomor 8 Tahun 2016' },
      { url: 'https://jdih.kemdikbud.go.id/sjdih/siperpu/dokumen/salinan/salinan_20230818_112509_PERMEN%2048%20TAHUN%202023_AYL.pdf', label: 'JDIH Kemendikbud: Permendikbudristek Nomor 48 Tahun 2023' },
      { url: 'https://peraturan.bpk.go.id/Download/107879/PP%20Nomor%2052%20Tahun%202019.pdf', label: 'JDIH BPK: PP Nomor 52 Tahun 2019' },
    ], sourcesCheckedNote: 'Sumber hukum diperiksa 30 Oktober 2026 melalui JDIH BPK dan JDIH Kemendikbud. Ringkasan ini bukan nasihat hukum individual.'
  },
  {
    slug: 'autisme-ringan-seperti-apa',
    titleTag: 'Autisme Ringan Seperti Apa? Pahami Spektrum dan Dukungan | YUKA',
    metaDesc: 'Autisme ringan seperti apa? Pahami mengapa istilah ini perlu hati-hati, ciri yang diamati, evaluasi profesional, dan dukungan anak.',
    keywords: 'autisme ringan seperti apa, autisme level 1, ciri autisme anak, dukungan anak autis',
    ogTitle: 'Autisme Ringan Seperti Apa? Pahami Spektrum dan Dukungan',
    ogDesc: 'Penjelasan hati-hati tentang istilah autisme ringan, proses evaluasi, dan dukungan berbasis kebutuhan anak.',
    h1: 'Autisme Ringan Seperti Apa? Pahami Spektrum dan Dukungan Anak', crumb: 'Autisme Ringan Seperti Apa', category: 'Pendidikan',
    datePublished: '2026-10-21T08:00:00+07:00', dateModified: '2026-10-30T08:00:00+07:00', dateDisplay: '21 Oktober 2026', readTime: '15 menit baca',
    image: { file: 'Dokumentasi/autisme-ringan-seperti-apa-hero.webp', w: 1200, h: 900, alt: 'Kelompok peserta kegiatan YUKA berkumpul dalam aktivitas edukatif bersama', caption: 'Dokumentasi kegiatan edukatif YUKA. Foto ini tidak menunjukkan diagnosis autisme atau sesi terapi tertentu.', credit },
    bodyHtml: body225.join('\n'), faq: faq225, related: [
      { href: '/artikel/autisme-adalah', title: 'Autisme Adalah', desc: 'Pengantar kondisi spektrum autisme dan kebutuhan yang beragam.' },
      { href: '/artikel/cara-membuat-jadwal-visual-untuk-anak-autis', title: 'Cara Membuat Jadwal Visual', desc: 'Strategi rutinitas yang dapat disesuaikan dengan anak.' },
      { href: '/artikel/pecs-komunikasi-autis', title: 'PECS dan Komunikasi Autis', desc: 'Mengenal dukungan komunikasi visual secara hati-hati.' },
    ], tags: ['Autisme', 'PerkembanganAnak', 'PendidikanInklusif'], sources: [
      { url: 'https://www.cdc.gov/autism/signs-symptoms/index.html', label: 'CDC: Signs and Symptoms of Autism Spectrum Disorder' },
      { url: 'https://www.cdc.gov/autism/hcp/diagnosis/index.html', label: 'CDC: Clinical Testing and Diagnosis for ASD' },
      { url: 'https://www.nimh.nih.gov/health/publications/autism-spectrum-disorder', label: 'NIMH: Autism Spectrum Disorder' },
      { url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd', label: 'NIMH: Autism Spectrum Disorder Overview' },
    ], sourcesCheckedNote: 'Sumber diperiksa 30 Oktober 2026 melalui CDC dan NIMH. Artikel ini tidak mendiagnosis anak dan tidak menggantikan evaluasi profesional.'
  }
];

function prepare() {
  fs.mkdirSync(path.join(ROOT, IMG), { recursive: true });
  for (const [file, markup] of Object.entries(diagrams)) fs.writeFileSync(imgPath(file.replace(/\.webp$/, '.svg')), markup);
  // Crop the unused portrait documentary photo into a landscape hero without inventing content.
  fs.mkdirSync(path.join(ROOT, 'Dokumentasi'), { recursive: true });
  console.log('Prepared SVG diagrams and hero crop target.');
}
function render() {
  for (const a of articles) {
    fs.writeFileSync(path.join(articleDir, `${a.slug}.html`), renderArticlePage(a));
    console.log(`Rendered artikel/${a.slug}.html`);
  }
}
if (require.main === module) {
  if (process.argv.includes('--prepare')) prepare();
  else render();
}
module.exports = { articles, diagrams };

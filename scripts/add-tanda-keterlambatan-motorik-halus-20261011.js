'use strict';
/*
 * Artikel baru: tanda-keterlambatan-motorik-halus (cycle #76, terbit terjadwal 2026-10-11).
 * Keyword utama "tanda keterlambatan motorik halus" (Keyword Data YUKA, halaman induk motorik-halus-adalah).
 * Generator ini TIDAK menulis kartu ke blog.html: kartu ditambah publish-scheduled.yml saat tanggal tayang.
 * Hero = potongan lanskap (4:3) dari Dokumentasi/candi-plaosan-anak-anak-wisata-candi-borobudur-003.webp.
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags, SITE } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'tanda-keterlambatan-motorik-halus';
const DATE = '2026-10-11';
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
const table = (caption, head, rows) => `<table class="article-table"><caption>${caption}</caption><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
const a = (href, text) => `<a href="${href}">${text}</a>`;

const hero = image(
  'Dokumentasi/tanda-keterlambatan-motorik-halus-kunjungan-edukasi.webp',
  'Rombongan anak YUKA berkaos seragam duduk dan berdiri di tangga candi saat kunjungan edukasi',
  'Anak-anak YUKA berfoto bersama di tangga candi saat kunjungan edukasi. Foto ini dokumentasi kegiatan kelompok, bukan sesi asesmen atau terapi.'
);
const bodyImages = {
  kostum: 'Dokumentasi/candi-plaosan-anak-kostum-tradisional-candi-borobudur-092.webp',
  keluarga: 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-052.webp',
  pendamping: 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-prambanan-004.webp',
  barisan: 'Dokumentasi/candi-plaosan-wisatawan-kostum-tradisional-candi-borobudur-061.webp',
};

const faq = [
  { q: 'Apa saja tanda keterlambatan motorik halus yang paling mudah dikenali?', a: 'Tanda yang mudah diamati antara lain bayi masih terus mengepalkan tangan setelah usia 4 bulan, belum memindahkan benda dari satu tangan ke tangan lain menjelang 9 bulan, belum menjumput benda kecil dengan ibu jari dan telunjuk sekitar usia 1 tahun, belum mencoret di usia 18 bulan, dan masih menggenggam krayon dengan kepalan di usia 4 tahun. Satu tanda saja sudah layak dibicarakan dengan tenaga kesehatan.' },
  { q: 'Apakah anak yang lambat memegang pensil pasti mengalami gangguan?', a: 'Tidak pasti. Kecepatan perkembangan setiap anak berbeda dan kesempatan berlatih ikut berpengaruh. Namun keterlambatan yang menetap, apalagi disertai kesulitan di bidang lain, perlu diperiksa. Hanya skrining dan evaluasi oleh tenaga profesional yang dapat menyimpulkan ada atau tidaknya keterlambatan.' },
  { q: 'Mengapa memakai satu tangan saja sebelum usia 1 tahun perlu diperhatikan?', a: 'IDAI mencantumkan dominasi satu tangan sebelum usia 1 tahun sebagai tanda bahaya motorik halus. Pada usia itu bayi umumnya masih memakai kedua tangan bergantian, sehingga kecenderungan kuat pada satu sisi dapat menjadi petunjuk adanya kelemahan pada sisi lain dan perlu diperiksa dokter.' },
  { q: 'Kapan sebaiknya anak dibawa ke dokter karena motorik halus?', a: 'Segera konsultasikan bila anak belum menunjukkan satu atau lebih kemampuan yang umumnya dicapai di usianya, kehilangan kemampuan yang sebelumnya sudah bisa, menunjukkan tanda bahaya yang disebut IDAI, atau bila Anda sendiri merasa ada yang tidak beres. CDC menganjurkan orang tua tidak menunggu.' },
  { q: 'Apa itu KPSP dan apakah bisa dipakai di rumah?', a: 'KPSP atau Kuesioner Pra Skrining Perkembangan adalah instrumen yang disusun Kementerian Kesehatan, berisi 9 sampai 10 pertanyaan sesuai kelompok usia. IDAI menyebut KPSP dapat diakses orang tua lewat aplikasi PRIMA, tetapi hasil yang meragukan atau menyimpang tetap perlu dibawa ke dokter untuk ditindaklanjuti.' },
  { q: 'Apa peran terapi okupasi untuk keterlambatan motorik halus?', a: 'Terapis okupasi menilai keterampilan motorik halus dan pemrosesan sensorik anak, lalu menyusun strategi agar anak lebih mandiri dalam aktivitas sehari-hari seperti makan, berpakaian, dan bermain. Latihan dari sesi terapi kemudian dipraktikkan di rumah dan sekolah.' },
  { q: 'Bagaimana menghitung usia untuk bayi yang lahir prematur?', a: 'AAP menganjurkan memakai usia koreksi selama dua tahun pertama, yaitu usia sejak lahir dikurangi jumlah minggu kelahiran lebih awal. Contohnya, bayi yang lahir pada usia kehamilan 32 minggu dan kini berusia 4 bulan dinilai seperti bayi cukup bulan berusia 2 bulan.' },
  { q: 'Apa yang bisa dilakukan guru bila melihat tanda keterlambatan di kelas?', a: 'Guru dapat mencatat pengamatan secara spesifik, menyampaikannya kepada orang tua dengan bahasa yang tidak menghakimi, dan menyesuaikan tugas sementara menunggu evaluasi. Guru tidak menetapkan diagnosis, tetapi catatannya sangat membantu dokter dan terapis.' },
];
const faqHtml = `<div class="faq-list"><h2 id="faq">Pertanyaan yang Sering Diajukan</h2>${faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div>`;

const bodyHtml = [
  `<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> tanda keterlambatan motorik halus adalah kemampuan tangan dan jari yang belum muncul pada usia ketika sebagian besar anak sudah melakukannya. Contohnya bayi yang masih terus mengepal setelah 4 bulan, belum menjumput benda kecil dengan ibu jari dan telunjuk di usia 1 tahun, belum mencoret di usia 18 bulan, atau masih menggenggam krayon dengan kepalan di usia 4 tahun. Satu tanda saja cukup menjadi alasan untuk berkonsultasi, karena penanganan yang dimulai lebih awal memberi hasil lebih baik.</p></div>`,
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#pengertian">Apa yang dimaksud keterlambatan motorik halus?</a></li><li><a href="#bayi">Tanda di usia 0 sampai 12 bulan</a></li><li><a href="#batita">Tanda di usia 1 sampai 3 tahun</a></li><li><a href="#prasekolah">Tanda di usia 3 sampai 5 tahun dan awal sekolah</a></li><li><a href="#ringkasan">Tabel ringkasan tanda per usia</a></li><li><a href="#dokter">Kapan harus ke dokter?</a></li><li><a href="#penyebab">Penyebab yang umum ditemukan</a></li><li><a href="#asesmen">Bagaimana asesmen dilakukan?</a></li><li><a href="#terapi-okupasi">Peran terapi okupasi</a></li><li><a href="#rumah">Dukungan di rumah</a></li><li><a href="#sekolah">Dukungan di sekolah</a></li><li><a href="#faq">Pertanyaan yang sering diajukan</a></li></ol></div>',

  h2('pengertian', 'Apa yang Dimaksud Keterlambatan Motorik Halus?'),
  p(`Motorik halus adalah kemampuan memakai otot kecil di tangan dan jari, yang bekerja sama dengan mata, untuk meraih, menggenggam, menjumput, memutar, mencoret, hingga menulis. Penjelasan lengkap tentang pengertian dan komponennya ada di artikel induk kami, ${a('motorik-halus-adalah', 'motorik halus adalah')}. Artikel ini berfokus pada satu pertanyaan yang sering membuat orang tua cemas: tanda apa yang menunjukkan kemampuan itu tertinggal dari usianya?`),
  p('Ikatan Dokter Anak Indonesia (IDAI) membagi perkembangan anak ke dalam empat ranah, yaitu motor kasar, motor halus, bahasa atau bicara, dan personal sosial atau kemandirian. Keterlambatan bisa terjadi hanya pada satu ranah, atau pada dua ranah atau lebih yang disebut keterlambatan perkembangan umum (global developmental delay). Karena itu, kesulitan tangan tidak boleh dilihat terpisah dari kemampuan bicara, bermain, dan bergerak anak.'),
  p('IDAI juga mengingatkan bahwa kisaran waktu pencapaian perkembangan cukup lebar, sehingga anak seusia wajar berbeda. Yang membedakan variasi normal dari keterlambatan adalah pola yang menetap, jumlah kemampuan yang belum muncul, hilangnya kemampuan yang dulu sudah bisa, dan adanya tanda bahaya tertentu. Penilaian akhirnya tetap di tangan tenaga kesehatan, bukan dari membandingkan anak dengan sepupu atau tetangga.'),

  h2('bayi', 'Tanda Keterlambatan Motorik Halus di Usia 0 sampai 12 Bulan'),
  p('Pada tahun pertama, tangan bayi berubah dari kepalan refleks menjadi alat untuk menjelajah. Daftar tonggak perkembangan CDC (program Learn the Signs. Act Early.) memuat kemampuan yang dilakukan sebagian besar bayi pada usia tertentu. Bila kemampuan di bawah ini belum terlihat, catat dan bicarakan saat kunjungan ke dokter atau posyandu.'),
  ul([
    '<strong>Sekitar 4 bulan:</strong> sebagian besar bayi memegang mainan yang diletakkan di tangannya, mengayunkan lengan ke arah mainan, dan membawa tangan ke mulut.',
    '<strong>Sekitar 9 bulan:</strong> bayi umumnya memindahkan benda dari satu tangan ke tangan lain dan memakai jari untuk "menyapu" makanan ke arah dirinya.',
    '<strong>Sekitar 1 tahun:</strong> bayi biasanya menjumput benda kecil, seperti potongan makanan, dengan ibu jari dan telunjuk, serta minum dari cangkir tanpa tutup yang dipegangi orang dewasa.',
  ]),
  p('Selain daftar CDC, IDAI menyebut beberapa tanda bahaya (red flags) motorik halus yang tidak perlu ditunggu: bayi masih menggenggam setelah usia 4 bulan, sudah dominan memakai satu tangan sebelum usia 1 tahun, perhatian penglihatan yang tidak konsisten, dan kebiasaan memasukkan mainan ke mulut yang masih sangat dominan setelah 14 bulan. Dominasi satu tangan terlalu dini patut diperhatikan karena bisa berarti tangan sisi lain kurang berfungsi.'),
  p(`Untuk bayi yang lahir prematur, American Academy of Pediatrics (AAP) menganjurkan memakai usia koreksi selama dua tahun pertama. Bayi yang lahir pada usia kehamilan 32 minggu dan kini berusia 4 bulan, misalnya, dinilai seperti bayi cukup bulan berusia 2 bulan. Cara ini mencegah kecemasan yang tidak perlu sekaligus tetap menjaga kewaspadaan. Panduan memahami tonggak usia ada di artikel ${a('what-is-a-milestone-for-a-kid', 'apa itu milestone anak')}.`),
  fig(bodyImages.pendamping, 'Dua anak YUKA berpose di anak tangga candi sementara pendamping dan seorang remaja berdiri di gerbang batu', 'Dokumentasi kunjungan edukasi YUKA ke kompleks candi, bukan sesi pemeriksaan. Pengamatan perkembangan paling jujur justru terjadi dalam kegiatan sehari-hari seperti ini.'),

  h2('batita', 'Tanda Keterlambatan Motorik Halus di Usia 1 sampai 3 Tahun'),
  p(`Di usia batita, tangan mulai dipakai untuk makan sendiri, bermain dengan tujuan, dan meniru orang dewasa. Rincian kemampuan per enam bulan sudah kami bahas di ${a('milestone-motorik-halus-anak-1-3-tahun', 'milestone motorik halus anak 1 sampai 3 tahun')}. Di sini kami merangkum yang perlu diwaspadai bila belum muncul, mengacu pada daftar CDC.`),
  ul([
    '<strong>15 bulan:</strong> sebagian besar anak memakai jari untuk menyuapkan sebagian makanannya sendiri.',
    '<strong>18 bulan:</strong> anak umumnya sudah mencoret-coret, makan dengan jari, dan mencoba memakai sendok.',
    '<strong>2 tahun:</strong> anak biasanya makan dengan sendok, memegang sesuatu dengan satu tangan sambil tangan lain bekerja (misalnya memegang wadah dan membuka tutupnya), serta mencoba menekan tombol atau memutar kenop mainan.',
    '<strong>30 bulan:</strong> anak umumnya memutar dengan tangan, seperti membuka tutup botol ulir atau kenop pintu, membalik halaman buku satu per satu, dan melepas sebagian pakaian longgar.',
    '<strong>3 tahun:</strong> anak biasanya meronce benda besar seperti manik atau makaroni, memakai sebagian pakaian sendiri, memakai garpu, dan menggambar lingkaran setelah dicontohkan.',
  ]),
  p('Perhatikan juga kualitas gerakannya, bukan hanya ada atau tidaknya. Anak yang selalu menghindari aktivitas tangan, tampak sangat cepat lelah ketika makan sendiri, memakai satu sisi tubuh saja, atau gerakannya tampak kaku dan tidak terkendali perlu diamati lebih saksama. IDAI memasukkan gerakan yang tidak seimbang antara sisi kiri dan kanan, gangguan tonus otot, dan gerakan yang tidak terkontrol ke dalam tanda bahaya motorik kasar, dan tanda seperti ini sering ikut memengaruhi kemampuan tangan.'),
  p(`Ingat bahwa kesempatan berlatih ikut berperan. Anak yang jarang diberi kesempatan memegang sendok atau krayon bisa tampak tertinggal. Setelah kesempatan diberikan secara rutin selama beberapa minggu tetapi kemampuannya tetap belum muncul, itulah saat yang tepat untuk berkonsultasi. Ide stimulasi yang aman ada di ${a('stimulasi-motorik-halus', 'stimulasi motorik halus')}.`),

  h2('prasekolah', 'Tanda Keterlambatan Motorik Halus di Usia 3 sampai 5 Tahun dan Awal Sekolah'),
  p('Menjelang sekolah, tuntutan pada tangan meningkat: menggambar, menggunting, mengancingkan baju, dan mulai menulis. Daftar CDC menunjukkan bahwa di usia 4 tahun sebagian besar anak sudah membuka sebagian kancing, mengambil makanan sendiri atau menuang air dengan pengawasan, menggambar orang dengan tiga bagian tubuh atau lebih, dan memegang krayon atau pensil di antara jari dan ibu jari, bukan dengan kepalan.'),
  p('Di usia 5 tahun, anak umumnya sudah mengancingkan sebagian kancing dan menulis beberapa huruf dari namanya. Bila anak masih menggenggam alat tulis dengan kepalan penuh di usia 4 tahun, belum bisa membuka kancing sama sekali, atau menghindari semua kegiatan menggambar, hal itu layak dicatat dan didiskusikan.'),
  p('Di kelas, tanda keterlambatan sering muncul dalam bentuk yang tidak langsung. Anak tampak lambat menyelesaikan tugas tulis, tulisannya sangat sulit dibaca, mudah frustrasi saat prakarya, menolak menggunting, atau perlu bantuan berlebihan untuk membuka bekal dan memakai sepatu. AAP mencatat bahwa kesulitan motorik halus dapat tampak sebagai kesulitan merawat diri seperti berpakaian, memakai sendok, dan menyikat gigi, serta kesulitan bermain seperti menyusun puzzle atau memakai gunting.'),
  p(`Anak usia sekolah dengan kesulitan tangan tidak berarti kurang cerdas atau malas. Sering kali anak memahami pelajarannya, tetapi tangannya belum mampu mengikuti kecepatan kelas. Membedakan hal ini penting agar anak tidak diberi label yang keliru. Perbandingan kemampuan tangan dan gerak tubuh besar dijelaskan di ${a('perbedaan-motorik-kasar-dan-halus', 'perbedaan motorik kasar dan halus')}.`),
  fig(bodyImages.kostum, 'Rombongan anak dan remaja YUKA mengenakan kostum dan hiasan kepala warna-warni berfoto di tangga candi', 'Dokumentasi kunjungan edukasi YUKA, bukan sesi terapi. Kegiatan seperti mengenakan kostum dan aksesori melibatkan banyak keterampilan tangan sehari-hari: memasang, mengikat, dan merapikan.'),

  h2('ringkasan', 'Tabel Ringkasan Tanda Keterlambatan per Usia'),
  p('Tabel berikut merangkum kemampuan tangan yang dicapai sebagian besar anak menurut daftar CDC, ditambah tanda bahaya dari IDAI. Gunakan tabel ini sebagai bahan percakapan dengan tenaga kesehatan, bukan sebagai alat diagnosis. CDC sendiri menegaskan bahwa daftar tonggak perkembangan bukan pengganti alat skrining perkembangan yang terstandar dan tervalidasi.'),
  table('Kemampuan motorik halus yang umumnya dicapai dan tanda yang perlu didiskusikan (CDC dan IDAI)', ['Usia', 'Umumnya sudah bisa (CDC)', 'Perlu didiskusikan bila'], [
    ['4 bulan', 'Memegang mainan yang diletakkan di tangan, membawa tangan ke mulut', 'Tangan masih terus mengepal (tanda bahaya IDAI)'],
    ['9 bulan', 'Memindahkan benda antartangan, menyapu makanan dengan jari', 'Belum memindahkan benda atau hanya memakai satu tangan'],
    ['1 tahun', 'Menjumput benda kecil dengan ibu jari dan telunjuk', 'Belum menjumput, atau sudah dominan satu tangan (tanda bahaya IDAI)'],
    ['18 bulan', 'Mencoret, makan dengan jari, mencoba memakai sendok', 'Belum mencoret sama sekali; eksplorasi mulut masih sangat dominan setelah 14 bulan (IDAI)'],
    ['30 bulan', 'Memutar tutup botol atau kenop, membalik halaman satu per satu', 'Belum dapat memutar atau membalik halaman'],
    ['3 tahun', 'Meronce benda besar, memakai garpu, menggambar lingkaran setelah dicontohkan', 'Belum meronce atau menghindari semua aktivitas tangan'],
    ['4 tahun', 'Memegang krayon di antara jari dan ibu jari, membuka sebagian kancing', 'Masih menggenggam alat tulis dengan kepalan'],
    ['5 tahun', 'Mengancingkan sebagian kancing, menulis beberapa huruf nama', 'Belum mampu mengancingkan atau menulis huruf apa pun'],
  ]),
  p('Apa pun usianya, ada dua tanda yang berlaku umum: anak kehilangan kemampuan yang sebelumnya sudah bisa, atau kemampuan tangan tertinggal bersamaan dengan bicara, sosial, atau gerak tubuh. Keduanya merupakan alasan untuk segera menemui dokter, tidak cukup dengan menunggu dan melihat.'),

  h2('dokter', 'Kapan Harus ke Dokter?'),
  p('Halaman CDC untuk orang tua yang khawatir tentang perkembangan anak menyampaikan pesan yang tegas: jangan menunggu. Bila anak belum mencapai satu atau lebih tonggak usianya, kehilangan kemampuan yang dulu sudah bisa, atau orang tua merasa ada masalah pada cara anak bermain, belajar, berbicara, bertindak, dan bergerak, bicarakan dengan dokter anak. IDAI menyampaikan hal serupa: bila menemukan salah satu tanda bahaya, segera periksakan ke tenaga kesehatan terdekat.'),
  p('Siapkan catatan sebelum konsultasi. CDC menyarankan orang tua membawa daftar tonggak yang sudah diisi dan menyampaikan hal-hal berikut: kegiatan yang dilakukan bersama anak, apa yang disukai anak, apa yang membuat orang tua khawatir, apakah ada kemampuan yang hilang, serta apakah anak memiliki kebutuhan kesehatan khusus atau lahir prematur. Video pendek anak saat makan atau bermain juga membantu dokter melihat gerakan yang mungkin tidak muncul di ruang periksa.'),
  p(`Bila dokter atau orang tua masih khawatir, mintalah rujukan untuk evaluasi lebih mendalam. CDC menyebut beberapa tenaga yang mungkin terlibat, yaitu dokter anak dengan keahlian tumbuh kembang, dokter saraf anak, serta psikolog atau psikiater anak. Di Indonesia, pemeriksaan biasanya dimulai di puskesmas atau dokter anak, lalu dirujuk sesuai kebutuhan. Pentingnya bertindak cepat dibahas lebih jauh di ${a('intervensi-dini', 'intervensi dini')}.`),

  h2('penyebab', 'Penyebab Keterlambatan Motorik Halus yang Umum Ditemukan'),
  p('Keterlambatan motorik halus adalah tanda, bukan diagnosis. Penyebabnya beragam dan sebagian anak tidak memiliki satu penyebab yang jelas. IDAI menyebut beberapa penyebab keterlambatan perkembangan yang perlu dipertimbangkan dokter:'),
  ul([
    '<strong>Gangguan genetik atau kromosom</strong>, misalnya sindrom Down.',
    `<strong>Gangguan atau infeksi susunan saraf</strong>, seperti palsi serebral (${a('cerebral-palsy-adalah', 'cerebral palsy')}), spina bifida, dan sindrom rubella.`,
    '<strong>Riwayat bayi risiko tinggi</strong>, misalnya lahir kurang bulan, berat lahir rendah, atau sakit berat di awal kehidupan sehingga memerlukan perawatan intensif.',
  ]),
  p(`AAP menambahkan bahwa anak dengan gangguan spektrum autisme dan disabilitas perkembangan lain sering mengalami kesulitan pada motorik halus, pemrosesan sensorik, dan perencanaan gerak. Kesulitan pemrosesan sensorik membuat sebagian anak menghindari tekstur tertentu, misalnya lem, pasir, atau adonan, sehingga kesempatan berlatih tangannya berkurang. Penjelasan tentang hal ini ada di ${a('sensori-integrasi', 'sensori integrasi')}.`),
  p('IDAI juga memasukkan perhatian penglihatan yang tidak konsisten ke dalam tanda bahaya motorik halus, karena tangan bekerja bersama mata. Masalah penglihatan, nyeri, atau kondisi medis lain dapat memengaruhi kemampuan tangan, sehingga pemeriksaan menyeluruh lebih aman daripada menebak penyebab sendiri. Hindari juga menyalahkan pola asuh: banyak penyebab keterlambatan berada di luar kendali orang tua.'),
  fig(bodyImages.keluarga, 'Rombongan anak, remaja, dan pendamping berhijab duduk bersama di tangga sebuah candi', 'Dokumentasi kunjungan edukasi YUKA bersama keluarga dan pendamping, bukan kegiatan klinis. Pendampingan anak berjalan paling baik bila keluarga, sekolah, dan tenaga profesional bergerak bersama.'),

  h2('asesmen', 'Bagaimana Asesmen Keterlambatan Motorik Halus Dilakukan?'),
  p('Asesmen berjalan bertahap. Tahap pertama adalah pemantauan, yaitu mengamati kemampuan anak dari waktu ke waktu. Tahap berikutnya adalah skrining dengan alat yang terstandar untuk melihat apakah perlu evaluasi lanjutan. AAP menganjurkan skrining perkembangan formal pada usia 9, 18, 30, dan 48 bulan serta kapan pun ada kekhawatiran, dan skrining tersebut mencakup motorik halus dan kasar, bahasa, pemecahan masalah, serta sosial emosional.'),
  p('Di Indonesia, pemantauan dilakukan lewat program Stimulasi, Deteksi, dan Intervensi Dini Tumbuh Kembang (SDIDTK). Dokumentasi SATUSEHAT Kementerian Kesehatan mencatat bahwa data SDIDTK mencakup Kuesioner Pra Skrining Perkembangan (KPSP), tes daya dengar, tes daya lihat, kuesioner masalah perilaku dan emosional, skrining autisme M-CHAT-R, serta skrining GPPH. IDAI menjelaskan bahwa KPSP disusun Kementerian Kesehatan dan berisi 9 sampai 10 pertanyaan sesuai kelompok usia.'),
  p(`IDAI juga menyebut bahwa semua anak usia 0 sampai 6 tahun dapat dipantau di tingkat puskesmas, sedangkan bayi berisiko tinggi dipantau dokter anak di rumah sakit. Bila skrining menunjukkan hasil meragukan atau ada penyimpangan, langkah berikutnya adalah evaluasi oleh dokter dan tim profesional. Gambaran tahapan asesmen bagi anak berkebutuhan khusus ada di ${a('asesmen-abk', 'asesmen ABK')}.`),
  table('Tahapan menemukan dan menangani keterlambatan motorik halus', ['Tahap', 'Siapa yang terlibat', 'Hasil yang diharapkan'], [
    ['Pemantauan', 'Orang tua, guru, kader posyandu', 'Catatan kemampuan anak dari waktu ke waktu'],
    ['Skrining', 'Tenaga kesehatan (misalnya KPSP di puskesmas)', 'Keputusan apakah perlu evaluasi lanjutan'],
    ['Evaluasi', 'Dokter anak atau dokter tumbuh kembang, dokter saraf anak, psikolog', 'Gambaran kemampuan dan kemungkinan penyebab'],
    ['Intervensi', 'Terapis okupasi bersama keluarga dan sekolah', 'Tujuan fungsional dan latihan yang dipakai sehari-hari'],
  ]),

  h2('terapi-okupasi', 'Peran Terapi Okupasi'),
  p(`Terapi okupasi adalah layanan yang paling sering terlibat bila kesulitan utamanya ada di tangan. Menurut AAP, terapis okupasi menilai keterampilan motorik halus dan perkembangan pemrosesan sensorik anak, lalu menyiapkan strategi untuk tugas sehari-hari. Latihan diberikan dalam sesi bersama terapis, kemudian dipraktikkan di rumah dan sekolah. Tujuannya bergantung pada kebutuhan setiap anak, dengan arah yang sama: anak lebih mandiri dan kualitas hidupnya meningkat. Gambaran umumnya ada di ${a('terapi-okupasi', 'terapi okupasi')}.`),
  p('Contoh tujuan terapi yang baik bersifat konkret dan dapat diamati, misalnya anak membuka tutup botol minumnya sendiri, memegang sendok sampai makanannya habis, atau menulis namanya di lembar tugas. Tujuan seperti itu lebih bermakna daripada sekadar menambah jumlah latihan. Terapis juga dapat menyarankan adaptasi alat, seperti pegangan pensil yang lebih tebal atau gunting yang lebih mudah digunakan.'),
  p(`Laporan klinis AAP tahun 2019 menyebut bahwa terapi fisik, okupasi, dan wicara membantu anak mengembangkan keterampilan baru, memperoleh kembali keterampilan yang hilang, atau memakai akomodasi bila keterampilan tertentu belum dapat berkembang. Laporan itu juga memperingatkan terhadap terapi yang belum terbukti. Bila anak juga membutuhkan dukungan bicara, perbedaan kedua layanan dijelaskan di ${a('perbedaan-terapi-okupasi-dan-terapi-wicara', 'perbedaan terapi okupasi dan terapi wicara')}.`),
  fig(bodyImages.barisan, 'Barisan anak, remaja, dan pendamping berkostum warna-warni duduk di kaki candi di atas rumput', 'Dokumentasi kunjungan edukasi YUKA, bukan sesi terapi okupasi. Tujuan dukungan pada akhirnya adalah partisipasi anak dalam kegiatan bersama seperti ini.'),

  h2('rumah', 'Dukungan di Rumah Sambil Menunggu dan Menjalani Evaluasi'),
  p('Orang tua tidak perlu menjadi terapis untuk membantu. Rumah adalah tempat anak memakai tangannya sepanjang hari, sehingga perubahan kecil dalam rutinitas sudah berarti. Langkah berikut dapat dilakukan sambil menunggu jadwal pemeriksaan, lalu disesuaikan dengan saran terapis setelah evaluasi.'),
  ol([
    '<strong>Catat pengamatan.</strong> Tulis tanggal, kegiatan, seberapa banyak bantuan yang diperlukan, dan respons anak. Catatan sederhana lebih berguna bagi dokter daripada ingatan umum.',
    '<strong>Beri kesempatan dalam rutinitas.</strong> Biarkan anak mencoba menyuap sendiri, membuka tutup wadah, atau memasukkan benda ke dalam kotak, meski lebih lambat dan sedikit berantakan.',
    '<strong>Pilih kegiatan yang sesuai usia dan aman.</strong> Meremas adonan, menyobek kertas, menempel stiker, atau meronce manik besar dengan pengawasan. Hindari benda kecil yang bisa tertelan pada anak yang masih suka memasukkan benda ke mulut.',
    '<strong>Atur posisi duduk.</strong> Kaki menapak dan meja setinggi siku membantu tangan bekerja lebih stabil.',
    '<strong>Pecah tugas menjadi langkah kecil.</strong> Untuk memakai baju, mulai dari memasukkan lengan; untuk kancing, mulai dari membuka kancing besar.',
    '<strong>Hargai usaha, bukan hasil.</strong> Pujian atas usaha menjaga motivasi, terutama pada anak yang mudah frustrasi.',
    '<strong>Ikuti arahan profesional.</strong> Setelah evaluasi, terapkan latihan yang diajarkan terapis dan laporkan respons anak pada sesi berikutnya.',
  ]),
  p(`Ide kegiatan yang tersusun per tingkat kesulitan tersedia di ${a('kegiatan-motorik-halus', 'kegiatan motorik halus')} dan ${a('latihan-motorik-halus', 'latihan motorik halus')}. Ingatlah bahwa kegiatan di rumah melengkapi pemeriksaan, bukan menggantikannya. Bila tanda bahaya sudah terlihat, jadwalkan konsultasi tanpa menunggu hasil latihan.`),

  h2('sekolah', 'Dukungan di Sekolah dan Kelas Inklusi'),
  p('Guru sering menjadi orang pertama yang melihat kesulitan tangan anak saat tugas menulis atau prakarya. Peran guru adalah mengamati, mencatat, dan berkomunikasi, bukan menetapkan diagnosis. Catatan yang spesifik, misalnya "anak membutuhkan waktu dua kali lebih lama untuk menyalin satu baris dan sering mengeluh tangannya pegal", jauh lebih membantu daripada kesan umum seperti "tulisannya jelek".'),
  p('Sampaikan pengamatan kepada orang tua dengan bahasa yang hangat dan tidak menghakimi. Banyak orang tua sudah merasa cemas, sehingga yang mereka butuhkan adalah informasi yang jelas dan rencana bersama. Setelah ada hasil evaluasi, guru dapat bekerja sama dengan terapis untuk menerapkan saran yang realistis di kelas.'),
  ul([
    'Kurangi jumlah tulisan tanpa mengurangi tujuan belajar, misalnya dengan lembar isian atau jawaban pilihan.',
    'Beri waktu tambahan untuk tugas tulis dan prakarya.',
    'Sediakan alat yang lebih mudah digenggam, seperti pensil tebal atau krayon besar, sesuai saran terapis.',
    'Tempatkan anak pada posisi duduk yang stabil dan dekat dengan contoh di papan.',
    'Libatkan anak dalam kegiatan kelompok agar ia tetap berpartisipasi tanpa merasa diuji.',
  ]),
  p(`Pendekatan ini sejalan dengan prinsip sekolah inklusi: menyesuaikan lingkungan agar setiap anak dapat belajar. Peran keluarga dalam proses ini dijelaskan di ${a('peran-orang-tua-pendidikan-inklusi', 'peran orang tua dalam pendidikan inklusi')}. Bagi kami di YUKA, setiap anak membawa kekuatannya sendiri; tugas orang dewasa adalah mengenali tanda lebih awal dan membuka jalan bantuan, insyaAllah dengan kesabaran dan ikhtiar bersama.`),

  faqHtml,
].join('\n');

const PROVENANCE = `<div class="article-provenance" style="margin:2rem 0;padding:1.5rem;background:#FFFFFF;border:1px solid #DDE3F0;border-radius:10px;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Tentang artikel ini</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.25rem;font-size:0.95rem;line-height:1.85;color:#333;">
            <li><strong>Ditulis oleh:</strong> Tim YUKA (Yayasan Ukhuwah Kaffah Amanatullah), pengelola Sekolah Inklusi Taruna Imani, Sleman, Yogyakarta.</li>
            <li><strong>Dasar rujukan:</strong> cdc.gov, healthychildren.org (American Academy of Pediatrics), idai.or.id, satusehat.kemkes.go.id. Semua rujukan ditautkan langsung di bagian sumber di bawah artikel ini.</li>
            <li><strong>Terbit:</strong> 11 Oktober 2026. <strong>Pembaruan terakhir:</strong> 11 Oktober 2026.</li>
<!-- MEDICAL_REVIEW_STATUS:START -->
            <li><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik, <strong>belum ditinjau oleh dokter berlisensi</strong>. Tinjauan oleh tenaga medis berkredensial sedang kami siapkan dan status ini akan diperbarui di halaman ini begitu selesai. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk keputusan diagnosis atau terapi, rujuklah pada dokter anak, dokter tumbuh kembang, atau terapis okupasi yang menangani anak.</li>
          <!-- MEDICAL_REVIEW_STATUS:END -->
            <li><strong>Kebijakan koreksi:</strong> jika Anda menemukan klaim yang keliru atau sumber yang tidak cocok, beri tahu kami lewat <a href="/kontak">halaman kontak</a>. Kami memperbaiki isinya dan mencantumkan catatan koreksi secara terbuka.</li>
          </ul>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>`;

const article = {
  slug,
  titleTag: 'Tanda Keterlambatan Motorik Halus pada Anak per Usia | YUKA',
  metaDesc: 'Kenali tanda keterlambatan motorik halus anak per usia menurut CDC dan IDAI, kapan ke dokter, penyebab umum, asesmen KPSP, peran terapi okupasi, dan dukungan di rumah.',
  keywords: 'tanda keterlambatan motorik halus, keterlambatan motorik halus anak, red flag motorik halus, motorik halus terlambat, terapi okupasi motorik halus',
  ogTitle: 'Tanda Keterlambatan Motorik Halus pada Anak per Usia',
  ogDesc: 'Panduan orang tua dan guru mengenali tanda keterlambatan motorik halus dari bayi sampai usia sekolah, kapan perlu ke dokter, dan dukungan yang bisa diberikan.',
  datePublished: DATE,
  dateModified: DATE,
  dateDisplay: '11 Okt 2026',
  readTime: '12 menit baca',
  category: 'Pendidikan',
  h1: 'Tanda Keterlambatan Motorik Halus pada Anak: Panduan per Usia dan Kapan ke Dokter',
  crumb: 'Tanda Keterlambatan Motorik Halus',
  parent: { href: 'motorik-halus-adalah', name: 'Motorik Halus Adalah' },
  about: ['Keterlambatan motorik halus', 'Tumbuh kembang anak', 'Terapi okupasi'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'motorik-halus-adalah', title: 'Motorik Halus Adalah: Pengertian, Komponen, dan Tahapan Usia', desc: 'Dasar pengertian motorik halus dan komponennya sebelum menilai keterlambatan.' },
    { href: 'milestone-motorik-halus-anak-1-3-tahun', title: 'Milestone Motorik Halus Anak 1 sampai 3 Tahun', desc: 'Rincian kemampuan tangan anak batita dan cara mencatatnya.' },
    { href: 'terapi-okupasi', title: 'Terapi Okupasi untuk Anak', desc: 'Mengenal layanan yang paling sering membantu kesulitan motorik halus.' },
    { href: 'intervensi-dini', title: 'Intervensi Dini', desc: 'Mengapa dukungan yang dimulai lebih awal memberi hasil lebih baik.' },
  ],
  tags: ['MotorikHalus', 'TumbuhKembang', 'DeteksiDini', 'TerapiOkupasi'],
  sources: [
    { url: 'https://www.cdc.gov/act-early/milestones/index.html', label: "CDC, CDC's Developmental Milestones (Learn the Signs. Act Early.)" },
    { url: 'https://www.cdc.gov/act-early/milestones/4-months.html', label: 'CDC, Milestones by 4 Months' },
    { url: 'https://www.cdc.gov/act-early/milestones/9-months.html', label: 'CDC, Milestones by 9 Months' },
    { url: 'https://www.cdc.gov/act-early/milestones/1-year.html', label: 'CDC, Milestones by 1 Year' },
    { url: 'https://www.cdc.gov/act-early/milestones/15-months.html', label: 'CDC, Milestones by 15 Months' },
    { url: 'https://www.cdc.gov/act-early/milestones/18-months.html', label: 'CDC, Milestones by 18 Months' },
    { url: 'https://www.cdc.gov/act-early/milestones/2-years.html', label: 'CDC, Milestones by 2 Years' },
    { url: 'https://www.cdc.gov/act-early/milestones/30-months.html', label: 'CDC, Milestones by 30 Months' },
    { url: 'https://www.cdc.gov/act-early/milestones/3-years.html', label: 'CDC, Milestones by 3 Years' },
    { url: 'https://www.cdc.gov/act-early/milestones/4-years.html', label: 'CDC, Milestones by 4 Years' },
    { url: 'https://www.cdc.gov/act-early/milestones/5-years.html', label: 'CDC, Milestones by 5 Years' },
    { url: 'https://www.cdc.gov/act-early/families/concerned.html', label: "CDC, Concerned About Your Child's Development?" },
    { url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Assessing-Developmental-Delays.aspx', label: 'American Academy of Pediatrics (HealthyChildren.org), Assessing Developmental Delays in Children' },
    { url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx', label: 'American Academy of Pediatrics (HealthyChildren.org), Corrected Age For Preemies' },
    { url: 'https://www.healthychildren.org/English/health-issues/conditions/developmental-disabilities/Pages/Occupational-Therapy.aspx', label: 'American Academy of Pediatrics (HealthyChildren.org), Occupational Therapy' },
    { url: 'https://www.healthychildren.org/English/news/Pages/Therapy-Services-for-Children-with-Disabilities.aspx', label: 'American Academy of Pediatrics (HealthyChildren.org), AAP Report Advises on Therapy Services for Children with Disabilities' },
    { url: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/mengenal-keterlambatan-perkembangan-umum-pada-anak', label: 'IDAI, Mengenal Keterlambatan Perkembangan Umum pada Anak' },
    { url: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/pentingnya-memantau-pertumbuhan-dan-perkembangan-anak-bagian-2', label: 'IDAI, Pentingnya Memantau Pertumbuhan dan Perkembangan Anak (Bagian 2)' },
    { url: 'https://www.idai.or.id/artikel/klinik/pengasuhan-anak/pentingnya-pemantauan-tumbuh-kembang-1000-hari-pertama-kehidupan-anak', label: 'IDAI, Pentingnya Pemantauan Tumbuh Kembang 1000 Hari Pertama Kehidupan Anak' },
    { url: 'https://satusehat.kemkes.go.id/platform/docs/id/interoperability/tumbuh-kembang-new/', label: 'Kementerian Kesehatan RI (SATUSEHAT), Tumbuh Kembang: data SDIDTK' },
  ],
  sourcesCheckedNote: 'Sumber resmi diperiksa pada 11 Oktober 2026. Artikel ini tidak memberikan diagnosis; daftar tonggak perkembangan bukan pengganti skrining terstandar oleh tenaga kesehatan.',
  editorialHtml: PROVENANCE,
};

let html = renderArticlePage(article);

// MedicalWebPage JSON-LD (pola wave 1/2 tinjauan medis, commit 9508370): tanpa nama peninjau.
const CANONICAL = `${SITE}/artikel/${slug}`;
const medical = {
  '@context': 'https://schema.org', '@type': 'MedicalWebPage', '@id': `${CANONICAL}#medicalwebpage`, url: CANONICAL,
  name: article.h1, inLanguage: 'id-ID', publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE, dateModified: DATE, specialty: 'https://schema.org/Pediatric',
  medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient', name: 'Orang tua dan guru yang memantau perkembangan motorik halus anak' },
  about: { '@type': 'MedicalCondition', name: 'Keterlambatan motorik halus', alternateName: 'Fine motor delay' },
  publishingPrinciples: { '@type': 'CreativeWork', name: 'Kebijakan Editorial YUKA', url: `${SITE}/kebijakan-editorial` },
};
const marker = '\n    <!-- BreadcrumbList Schema -->';
if (!html.includes(marker)) throw new Error('marker BreadcrumbList tidak ditemukan');
html = html.replace(marker, `\n    <script type="application/ld+json">${JSON.stringify(medical)}</script>\n${marker}`);

if (/[—–]/.test(html)) throw new Error('em/en dash ditemukan');
if (/href="(\.\.\/artikel\/)?[a-z0-9-]+\.html"/.test(bodyHtml)) throw new Error('tautan internal .html ditemukan');

// Tautan internal hanya ke artikel yang sudah tayang (berkas ada + kartu di blog.html), kecuali induk (ada di sitemap).
const blog = fs.readFileSync(path.join(ROOT, 'blog.html'), 'utf8');
const internal = [...new Set([...bodyHtml.matchAll(/<a href="([a-z0-9-]+)"/g)].map((m) => m[1]))];
const notLive = internal.filter((s) => !fs.existsSync(path.join(ROOT, 'artikel', `${s}.html`)) || (!blog.includes(`artikel/${s}"`) && s !== 'motorik-halus-adalah'));
if (notLive.length) throw new Error(`tautan ke artikel belum tayang: ${notLive.join(', ')}`);

fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, internal: internal.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

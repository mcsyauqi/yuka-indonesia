'use strict';
/*
 * Generator artikel: alat-bantu-dengar-untuk-anak-sekolah (cycle #76, 2026-10-11).
 * Dijadwalkan tayang 2026-10-14. Generator ini TIDAK menulis kartu ke blog.html;
 * kartu ditambahkan workflow publish-scheduled saat tanggal tayang.
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'alat-bantu-dengar-untuk-anak-sekolah';
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

// Hero: potongan lanskap dari foto pool Dokumentasi/candi-plaosan-grup-wisatawan-candi-borobudur-063.webp
// (pool cycle76 hanya berisi foto potret; renderer menolak hero potret).
const hero = image(
  'Dokumentasi/alat-bantu-dengar-untuk-anak-sekolah-hero.webp',
  'Rombongan siswa dan pendamping YUKA duduk bersama di tangga candi saat kunjungan edukasi',
  'Anak dan pendamping YUKA dalam kunjungan edukasi bersama. Foto ini dokumentasi kegiatan, bukan sesi pemeriksaan atau pemasangan alat bantu dengar.'
);
const bodyImages = {
  group: 'Dokumentasi/candi-plaosan-anak-anak-wisata-candi-borobudur-078.webp',
  seated: 'Dokumentasi/candi-plaosan-wisatawan-foto-bersama-candi-borobudur-065.webp',
  bus: 'Dokumentasi/museum-gunung-merapi-keluarga-muslim-dalam-bus-003.webp',
  companion: 'Dokumentasi/candi-plaosan-wisatawan-berpose-candi-prambanan-010.webp',
  student: 'Dokumentasi/candi-plaosan-wisatawan-candi-borobudur-berpose-104.webp',
};

const faq = [
  { q: 'Apakah anak harus memakai alat bantu dengar sepanjang hari di sekolah?', a: 'Umumnya alat dipakai secara konsisten selama anak terjaga, termasuk saat belajar di kelas, karena pendengaran dibutuhkan untuk menangkap bahasa sepanjang hari. Jadwal pemakaian yang tepat tetap mengikuti arahan audiolog atau dokter THT yang memasang alat, terutama pada masa adaptasi.' },
  { q: 'Jenis alat bantu dengar apa yang paling sering dipakai anak?', a: 'Model di belakang telinga (BTE) paling sering dipakai anak karena cetakan telinganya dapat diganti saat telinga tumbuh, dan model ini umumnya mendukung fitur seperti mikrofon jarak jauh. Pilihan akhir ditentukan audiolog berdasarkan jenis dan derajat gangguan dengar, bentuk telinga, serta kebutuhan anak.' },
  { q: 'Apa itu sistem FM atau mikrofon jarak jauh di kelas?', a: 'Sistem ini terdiri dari mikrofon yang dipakai guru dan penerima yang terhubung ke alat dengar anak. Suara guru dikirim langsung sehingga tidak terlalu tertutup kebisingan dan jarak. Pedoman Kemenkes menyebut manfaatnya dalam meningkatkan perbandingan sinyal terhadap bising di ruang kelas.' },
  { q: 'Bagaimana cara guru mengetahui alat bantu dengar anak berfungsi?', a: 'Guru atau pendamping dapat melakukan pengecekan singkat setiap pagi sesuai panduan audiolog: alat menyala, baterai cukup, selang dan cetakan bersih, tidak ada bunyi mendenging, lalu anak merespons suara sederhana. Bila ada keraguan, hubungi orang tua dan catat temuannya.' },
  { q: 'Apakah alat bantu dengar membuat pendengaran anak normal kembali?', a: 'Tidak. Alat bantu dengar membantu memperkeras dan memperjelas suara, tetapi tidak mengembalikan pendengaran menjadi seperti sebelumnya. Hasilnya dipengaruhi jenis gangguan, usia mulai memakai, konsistensi pemakaian, lingkungan dengar, serta dukungan terapi bicara dan bahasa.' },
  { q: 'Apakah BPJS Kesehatan menanggung alat bantu dengar anak?', a: 'Pedoman Nasional Pelayanan Kedokteran dari Kemenkes tahun 2022 mencatat alat bantu dengar diberikan kepada peserta BPJS Kesehatan sesuai indikasi medis, dengan plafon harga dan batasan waktu pengambilan. Ketentuan bisa berubah, jadi tanyakan aturan terbaru ke fasilitas kesehatan atau kantor BPJS Kesehatan.' },
  { q: 'Bagaimana jika anak sering melepas alat bantu dengarnya di kelas?', a: 'Cari penyebabnya lebih dulu: alat terasa sakit, cetakan longgar, suara terlalu keras, berdenging, atau anak merasa malu. Catat kapan anak melepasnya, lalu sampaikan ke audiolog. Klip pengaman, penyesuaian setelan, dan dukungan teman sekelas sering membantu anak lebih nyaman.' },
  { q: 'Seberapa sering anak perlu kontrol ke audiolog?', a: 'Frekuensi kontrol ditentukan audiolog. Anak kecil biasanya lebih sering kontrol karena telinga tumbuh dan cetakan perlu diganti. Segera kembali bila respons anak terhadap suara menurun, alat sering berdenging, telinga lecet atau bernanah, atau guru melaporkan perubahan perilaku mendengar.' },
];
const faqHtml = `<h2 id="faq">Pertanyaan yang Sering Diajukan</h2>\n${faq.map((f) => `${h3(f.q)}\n${p(f.a)}`).join('\n')}`;

const medicalStatus = `<!-- MEDICAL_REVIEW_STATUS:START -->
<div class="medical-review-status" style="margin:2rem 0;padding:1.25rem 1.5rem;background:#FFF8E6;border-left:4px solid #F4B41A;border-radius:10px;">
  <p style="margin:0;font-size:0.95rem;line-height:1.7;color:#333;"><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik, <strong>belum ditinjau oleh dokter berlisensi</strong>. Tinjauan oleh tenaga medis berkredensial sedang kami siapkan dan status ini akan diperbarui di halaman ini begitu selesai. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk keputusan pemilihan alat, pemasangan, atau terapi, rujuklah pada dokter THT, audiolog, atau terapis wicara yang menangani anak.</p>
</div>
<!-- MEDICAL_REVIEW_STATUS:END -->`;
const editorialHtml = "<aside data-catchup=\"editorial-policy\" style=\"margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px\"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional. Baca <a href=\"/kebijakan-editorial\">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href=\"mailto:info@yukaindonesia.com\">info@yukaindonesia.com</a>.</aside>\n" + medicalStatus;

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> alat bantu dengar untuk anak sekolah dipilih dan dipasang oleh audiolog atau dokter THT sesuai hasil pemeriksaan, bukan dibeli berdasarkan merek atau rekomendasi teman. Model di belakang telinga paling sering dipakai anak. Agar bermanfaat di kelas, alat perlu dipakai konsisten, dicek setiap hari, dirawat dari kelembapan, dan didukung posisi duduk yang tepat, mikrofon jarak jauh bila dianjurkan, ruang kelas yang tidak bising, serta guru yang memahami kebutuhan anak.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#mengapa">Mengapa alat bantu dengar penting di sekolah</a></li><li><a href="#jenis">Jenis alat bantu dengar dan perangkat pendengaran</a></li><li><a href="#perangkat-lain">Perangkat hantaran tulang dan implan koklea</a></li><li><a href="#fitting">Proses pemeriksaan dan fitting</a></li><li><a href="#perawatan">Perawatan harian di rumah</a></li><li><a href="#kelas">Penggunaan di kelas</a></li><li><a href="#fm">Mikrofon jarak jauh dan akustik kelas</a></li><li><a href="#guru">Peran guru dan shadow teacher</a></li><li><a href="#cek">Kebiasaan cek harian rumah dan sekolah</a></li><li><a href="#biaya">Akses pembiayaan</a></li><li><a href="#kontrol">Kapan kembali ke audiolog</a></li><li><a href="#faq">Pertanyaan yang sering diajukan</a></li></ol></div>',

  h2('mengapa', 'Mengapa Alat Bantu Dengar Penting untuk Anak Sekolah?'),
  p('Sekolah adalah tempat anak menghabiskan banyak waktu untuk mendengar: penjelasan guru, pertanyaan teman, instruksi saat olahraga, sampai pengumuman di halaman. Anak dengan gangguan pendengaran yang tidak mendapat dukungan bisa tertinggal bukan karena kurang mampu, tetapi karena informasinya tidak sampai dengan jelas. Itulah sebabnya alat bantu dengar sering menjadi bagian penting dari rencana belajar anak dengan <a href="tuna-rungu-adalah">tuna rungu</a> atau gangguan dengar ringan sampai berat.'),
  p('Organisasi Kesehatan Dunia (WHO) memperkirakan sekitar 95,1 juta anak dan remaja usia 5 sampai 19 tahun hidup dengan gangguan pendengaran di seluruh dunia. WHO juga menjelaskan bahwa rehabilitasi pendengaran membantu seseorang berpartisipasi dalam pendidikan, pekerjaan, dan kehidupan keluarga. Salah satu bentuknya adalah penyediaan dan pelatihan memakai teknologi pendengaran, seperti alat bantu dengar, implan koklea, dan implan hantaran tulang.'),
  p('Meski begitu, alat bukan satu-satunya jawaban. CDC menegaskan tidak ada satu penanganan yang tepat untuk setiap anak dan keluarga. Sebagian anak memakai alat bantu dengar bersama terapi wicara, sebagian juga belajar <a href="bahasa-isyarat-tuna-rungu">bahasa isyarat</a>, dan sebagian memadukan beberapa cara komunikasi. Yang terpenting, anak mendapat akses bahasa yang konsisten di rumah maupun di sekolah, lalu kemajuannya dipantau bersama.'),
  fig(bodyImages.group, 'Sekelompok anak dan remaja berkaus seragam kegiatan berpose bersama di tangga candi', 'Kegiatan kelompok di luar kelas juga menuntut anak menangkap instruksi lisan. Foto ini dokumentasi kunjungan edukasi YUKA, bukan sesi pemeriksaan pendengaran.'),

  h2('jenis', 'Jenis Alat Bantu Dengar dan Perangkat Pendengaran untuk Anak'),
  p('Istilah alat bantu dengar sering dipakai untuk semua perangkat pendengaran, padahal cara kerjanya berbeda. Uraian berikut bersifat umum dan tidak merujuk merek tertentu. Pilihan untuk seorang anak hanya bisa ditentukan setelah pemeriksaan, karena dipengaruhi jenis dan derajat gangguan dengar, bentuk telinga, kondisi medis, serta kebutuhan komunikasi anak.'),
  h3('Di belakang telinga (behind-the-ear, BTE)'),
  p('Badan alat bertengger di belakang daun telinga dan tersambung ke cetakan telinga yang dibuat khusus. ASHA menyebut BTE sebagai jenis yang paling umum dipakai anak. Pedoman Kemenkes juga menilai BTE lebih cocok untuk anak karena ukuran telinga terus berubah hingga pubertas, sehingga cukup cetakannya yang diganti. Model ini umumnya mendukung fitur seperti mikrofon terarah, telecoil, dan penerima FM.'),
  h3('Penerima di liang telinga dan di dalam telinga (RIC dan ITE)'),
  p('Pada model penerima di liang telinga, badan alat tetap di belakang telinga, tetapi pengeras suaranya berada di liang telinga dan tersambung kabel tipis. Model di dalam telinga (in-the-ear, ITE) dibuat mengikuti bentuk telinga dan duduk di liang atau mangkuk telinga. ASHA mencatat sebagian model ini lebih sesuai untuk anak yang lebih besar dan remaja.'),
  h2('perangkat-lain', 'Perangkat Hantaran Tulang dan Implan Koklea'),
  p('Perangkat hantaran tulang (bone conduction) meneruskan suara lewat getaran tulang tengkorak, dan dapat dipasang dengan ikat kepala atau ditanam. CDC menyebutnya dapat dipertimbangkan untuk gangguan dengar konduktif, campuran, atau satu sisi, terutama bila anak tidak bisa memakai model biasa. Implan koklea berbeda lagi: perangkat ini dipasang lewat operasi dan dipertimbangkan bila gangguan dengar berat dan alat bantu dengar tidak cukup membantu.'),
  '<table class="article-table"><caption>Gambaran umum jenis perangkat pendengaran pada anak (tanpa merek)</caption><thead><tr><th>Jenis</th><th>Cara kerja singkat</th><th>Catatan untuk anak sekolah</th></tr></thead><tbody><tr><td>Di belakang telinga (BTE)</td><td>Memperkeras suara, disalurkan lewat selang ke cetakan telinga</td><td>Paling umum pada anak, cetakan diganti seiring pertumbuhan, umumnya mendukung mikrofon jarak jauh</td></tr><tr><td>Penerima di liang telinga (RIC)</td><td>Badan di belakang telinga, pengeras suara di liang telinga</td><td>Bentuk lebih ringkas, sesuai atau tidaknya ditentukan audiolog</td></tr><tr><td>Di dalam telinga (ITE)</td><td>Seluruh alat dibuat mengikuti bentuk telinga</td><td>Lebih sering untuk anak besar dan remaja karena telinga anak kecil masih tumbuh</td></tr><tr><td>Hantaran tulang</td><td>Meneruskan suara lewat getaran tulang tengkorak</td><td>Pilihan untuk gangguan konduktif, campuran, atau satu sisi tertentu</td></tr><tr><td>Implan koklea</td><td>Bagian dalam ditanam lewat operasi, merangsang saraf pendengaran</td><td>Untuk gangguan berat yang tidak cukup terbantu alat biasa, perlu pemrograman berkala dan latihan mendengar</td></tr></tbody></table>',

  h2('fitting', 'Proses Pemeriksaan dan Fitting oleh Audiolog atau Dokter THT'),
  p('Alat bantu dengar bukan kacamata baca yang bisa dicoba sendiri di toko. Penyetelannya mengikuti hasil pemeriksaan pendengaran tiap telinga, sehingga prosesnya perlu dipandu dokter spesialis THT dan audiolog. Pedoman Kemenkes menegaskan pemasangan alat untuk bayi dan anak sebaiknya dilakukan audiolog yang berpengalaman menangani anak. Secara umum, alurnya berjalan seperti berikut.'),
  ol([
    '<strong>Pemeriksaan awal.</strong> Dokter THT memeriksa telinga dan menyingkirkan masalah medis yang perlu ditangani lebih dulu, misalnya cairan atau infeksi.',
    '<strong>Tes pendengaran lengkap.</strong> Audiolog mengukur ambang dengar tiap telinga dan menentukan jenis serta derajat gangguan dengar.',
    '<strong>Pemilihan alat.</strong> Model dipilih berdasarkan hasil tes, bentuk telinga, keterampilan tangan anak, kebutuhan komunikasi, dan kecocokan dengan teknologi kelas.',
    '<strong>Pembuatan cetakan telinga.</strong> Untuk model BTE, cetakan dibuat mengikuti liang telinga anak agar nyaman dan tidak berdenging.',
    '<strong>Fitting dan verifikasi.</strong> Audiolog menyetel alat lalu mengukur apakah suara ucapan benar-benar terdengar pada tingkat lembut, sedang, dan keras.',
    '<strong>Validasi dan pemantauan.</strong> Kemajuan anak dinilai dari kemampuan mendengar sehari-hari, kejelasan bicara, dan masukan keluarga serta guru.',
  ]),
  p('ASHA menjelaskan bahwa pada pemasangan alat untuk anak, fokus utamanya adalah memastikan suara ucapan terdengar. Karena anak tumbuh cepat, cetakan telinga pada bayi bisa perlu diganti sesering setiap 1 sampai 2 bulan pada tahun pertama. Pada anak sekolah penggantiannya lebih jarang, tetapi cetakan yang mulai longgar tetap perlu diperiksa. Libatkan anak sesuai usianya, misalnya menanyakan apakah suara terasa terlalu keras atau ada bagian yang sakit.'),
  fig(bodyImages.bus, 'Seorang pendamping tersenyum sambil memegang lengan anak di dalam bus, dengan anak lain di kursi belakang', 'Pendampingan yang sabar membantu anak terbiasa dengan rutinitas baru. Foto ini dokumentasi perjalanan kegiatan YUKA, bukan kunjungan ke klinik audiologi.'),

  h2('perawatan', 'Perawatan Harian Alat Bantu Dengar di Rumah'),
  p('Alat yang mati, lemah, atau berdenging tidak membantu anak belajar, bahkan bisa membuat anak enggan memakainya. Karena itu perawatan harian sama pentingnya dengan pemilihan alat. Pedoman Kemenkes menyebut konsultasi pasca pemasangan perlu membahas cara memakai dan merawat semua komponen, termasuk baterai dan kabel. Ikuti petunjuk dari audiolog dan buku panduan alat, karena cara perawatan tiap model bisa berbeda.'),
  h3('Baterai dan pengisian daya'),
  p('Sebagian alat memakai baterai sekali pakai, sebagian lain dapat diisi ulang. Biasakan memeriksa daya setiap pagi dan menyimpan baterai cadangan di tas sekolah bila alat memakai baterai biasa. ASHA menyebut pintu baterai yang sulit dibuka anak sebagai salah satu pertimbangan keamanan untuk anak. Simpan baterai cadangan di tempat yang tidak dijangkau adik atau anak kecil lain.'),
  h3('Kelembapan, keringat, dan kebersihan'),
  p('Indonesia beriklim lembap, dan anak sekolah sering berkeringat saat bermain. Lepaskan alat sebelum mandi, berenang, atau bermain air, kecuali alat memang dirancang untuk itu. Lap bagian luar dengan kain kering, bersihkan cetakan sesuai petunjuk, dan simpan alat di wadahnya saat tidak dipakai. Tanyakan ke audiolog apakah alat anak perlu disimpan di wadah pengering. Laporkan ke audiolog bila selang mengembun, retak, atau berubah warna.'),
  ul([
    'Simpan alat di wadah yang sama setiap malam supaya tidak hilang atau terinjak.',
    'Jauhkan dari hewan peliharaan, panas langsung, dan tumpahan minuman.',
    'Jangan meminjamkan cetakan telinga atau alat ke anak lain.',
    'Catat tanggal ganti baterai dan keluhan agar mudah dilaporkan saat kontrol.',
  ]),

  h2('kelas', 'Penggunaan Alat Bantu Dengar di Kelas'),
  p('Alat bantu dengar bekerja paling baik ketika jarak ke sumber suara dekat dan suasana tidak bising. Masalahnya, ruang kelas jarang sunyi. ASHA menjelaskan dua penyebab akustik kelas yang buruk: kebisingan latar, seperti kendaraan, kipas, atau siswa di lorong, dan gema yang muncul ketika suara memantul di dinding dan meja. Kondisi ini menyulitkan anak memahami ucapan, membaca, mengeja, dan berkonsentrasi.'),
  h3('Posisi duduk dan cara guru berbicara'),
  p('Tempatkan anak cukup dekat dengan guru, jauh dari jendela ramai atau kipas yang berisik, dan dengan sudut pandang yang jelas ke wajah guru serta papan tulis. Banyak anak juga membaca gerak bibir dan ekspresi. Guru sebaiknya berbicara sambil menghadap kelas, tidak sambil menulis di papan, dan mengulang pertanyaan teman yang duduk jauh. Posisi duduk termasuk akomodasi yang disebut ASHA bersama penataan akustik kelas.'),
  p('Dukungan visual melengkapi apa yang didengar anak. Tuliskan tugas, halaman buku, dan tenggat di papan atau kertas, gunakan gambar dan contoh nyata, serta beri tanda sebelum berganti topik. Cara ini membantu anak yang sesekali kehilangan sebagian kalimat, dan juga bermanfaat bagi siswa lain di kelas.'),
  h2('fm', 'Mikrofon Jarak Jauh dan Akustik Ruang Kelas'),
  p('Sistem FM atau mikrofon jarak jauh terdiri dari mikrofon kecil yang dipakai guru dan penerima yang tersambung ke alat dengar anak. Suara guru langsung sampai ke telinga anak tanpa banyak tertutup bising. Pedoman Kemenkes menyebut pemilihan alat untuk anak perlu memperhatikan aksesibilitas teknologi mikrofon jarak jauh, dan sistem ini dapat meningkatkan perbandingan sinyal terhadap bising di kelas. Tanyakan ke audiolog apakah anak membutuhkannya.'),
  '<table class="article-table"><caption>Hambatan mendengar di kelas dan penyesuaian sederhana</caption><thead><tr><th>Hambatan</th><th>Dampak pada anak</th><th>Penyesuaian yang bisa dicoba</th></tr></thead><tbody><tr><td>Kebisingan dari luar dan kipas</td><td>Suara guru tertutup bising</td><td>Duduk jauh dari jendela ramai, matikan alat berisik saat tidak dipakai</td></tr><tr><td>Gema di ruangan berdinding keras</td><td>Ucapan terdengar bercampur dan kabur</td><td>Gorden, karpet, papan gabus di dinding, alas lembut di kaki kursi</td></tr><tr><td>Guru berbicara sambil membelakangi</td><td>Anak kehilangan petunjuk gerak bibir</td><td>Menghadap kelas saat menjelaskan, tulis instruksi penting di papan</td></tr><tr><td>Diskusi kelompok yang ramai</td><td>Anak sulit mengikuti giliran bicara</td><td>Atur giliran bicara, ulangi jawaban teman, kelompok kecil di sudut tenang</td></tr></tbody></table>',
  p('Penyesuaian ruangan di tabel ini bersumber dari saran ASHA tentang akustik kelas. Kelas yang lebih tenang juga membantu siswa lain dan menjaga suara guru. Untuk ide penataan yang lebih luas, baca juga tulisan kami tentang <a href="classroom-management-kelas-inklusi">pengelolaan kelas inklusi</a>.'),
  fig(bodyImages.seated, 'Deretan anak dan pendamping berkostum warna-warni duduk di batur candi, di depan rumput hijau', 'Saat berkumpul dalam kelompok besar, posisi duduk ikut menentukan seberapa jelas anak menangkap arahan. Foto ini dokumentasi kegiatan budaya YUKA, bukan kegiatan kelas.'),

  h2('guru', 'Peran Guru dan Shadow Teacher'),
  p('ASHA menyebut perawatan anak pengguna alat bantu dengar melibatkan tim, termasuk audiolog, dokter THT, terapis wicara, guru kelas, dan guru bagi anak tuli. Di Indonesia, peran ini sering dibagi antara guru kelas, guru pendamping khusus, dan <a href="shadow-teacher-adalah">shadow teacher</a>. Guru tidak perlu menjadi ahli audiologi, tetapi perlu tahu cara kerja dasar alat dan apa yang harus dilakukan bila alat bermasalah.'),
  ul([
    '<strong>Guru kelas:</strong> mengatur posisi duduk, memakai mikrofon jarak jauh bila tersedia, menulis instruksi penting, dan memberi waktu tunggu sebelum anak menjawab.',
    '<strong>Shadow teacher atau guru pendamping:</strong> melakukan cek alat setiap pagi, mengulang instruksi secara individual, mencatat kapan anak tampak kesulitan mendengar, dan menjembatani komunikasi dengan orang tua.',
    '<strong>Teman sekelas:</strong> dapat diajak berbicara bergiliran dan menghadap anak, misalnya lewat <a href="buddy-system-untuk-anak-abk-di-sekolah">buddy system</a>, tanpa memperlakukan alat sebagai bahan candaan.',
  ]),
  p('Guru juga berperan menjaga martabat anak. Hindari menegur anak di depan kelas soal alatnya, dan ajak anak menjelaskan alat itu sendiri bila ia nyaman. Untuk ujian, pertimbangkan instruksi tertulis dan ruang yang lebih tenang, seperti dibahas dalam <a href="adaptasi-soal-ujian-untuk-anak-abk">adaptasi soal ujian untuk anak ABK</a>. Strategi berkomunikasi sehari-hari juga bisa dipelajari di <a href="cara-berkomunikasi-dengan-anak-tuna-rungu">cara berkomunikasi dengan anak tuna rungu</a>.'),
  fig(bodyImages.companion, 'Seorang pendamping berkerudung dan berkostum tari berpose ceria di samping relief candi', 'Pendamping yang hangat membuat anak lebih berani menyampaikan kesulitan. Foto ini dokumentasi kegiatan budaya YUKA.'),

  h2('cek', 'Kebiasaan Cek Harian Rumah dan Sekolah'),
  p('ASHA memasukkan pemeriksaan visual dan pengecekan dengar sederhana sebagai bagian rutin dukungan bagi anak pengguna alat bantu dengar, termasuk pengecekan baterai. Kebiasaan ini paling efektif bila dilakukan di dua tempat: sebelum berangkat oleh orang tua, lalu di awal pelajaran oleh guru atau pendamping. Minta audiolog mengajarkan cara cek yang sesuai dengan alat anak, lalu tuliskan langkahnya di kartu kecil yang disimpan di tas.'),
  ol([
    'Lihat bagian luar alat: tidak retak, tidak basah, selang tidak tertekuk atau berembun.',
    'Periksa cetakan telinga: bersih dari kotoran telinga dan tidak longgar.',
    'Pastikan baterai terisi atau daya cukup, dan alat menyala.',
    'Lakukan pengecekan dengar sesuai cara yang diajarkan audiolog, misalnya dengan stetoskop dengar khusus, untuk menangkap suara putus atau berdesis.',
    'Pasang di telinga anak dan perhatikan apakah ada bunyi mendenging.',
    'Lakukan tes respons sederhana yang dianjurkan audiolog, misalnya meminta anak mengulang beberapa bunyi dari jarak dekat.',
    'Bila memakai mikrofon jarak jauh, pastikan penerima tersambung dan mikrofon guru menyala.',
    'Catat hasilnya di buku penghubung, lalu kabari orang tua bila ada masalah.',
  ]),
  p('Buku penghubung membantu orang tua dan sekolah melihat pola. Misalnya, alat sering mati pada hari olahraga karena keringat, atau anak lebih sering melepas alat setelah jam istirahat. Catatan seperti ini sangat berguna saat kontrol, dan sejalan dengan peran orang tua yang dibahas dalam <a href="peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.'),

  h2('biaya', 'Akses Pembiayaan Alat Bantu Dengar'),
  p('Biaya sering menjadi pertanyaan pertama keluarga. Perpres Nomor 82 Tahun 2018 tentang Jaminan Kesehatan menyebut manfaat Jaminan Kesehatan mencakup alat kesehatan sesuai kebutuhan medis, termasuk alat bantu kesehatan. Untuk alat bantu dengar secara khusus, Pedoman Nasional Pelayanan Kedokteran Tata Laksana Tuli Sensorineural Kongenital yang ditetapkan Kemenkes tahun 2022 mencatat alat bantu dengar diberikan kepada peserta BPJS Kesehatan sesuai indikasi medis, dengan plafon harga dan batasan waktu pengambilan.'),
  p('Dokumen yang sama menulis bahwa saat itu tarif yang diberikan maksimal satu juta rupiah dan paling cepat lima tahun sekali per telinga, dan menilai jumlah itu belum mencukupi kebutuhan orang tua anak dengan gangguan pendengaran. Aturan tarif dapat diperbarui, sehingga keluarga perlu menanyakan ketentuan terbaru langsung ke fasilitas kesehatan rujukan atau kantor BPJS Kesehatan, termasuk syarat rujukan dan dokumen yang dibutuhkan.'),
  p('Selain jaminan kesehatan, beberapa keluarga mencari dukungan dari program pemerintah daerah, lembaga sosial, atau donatur. Ringkasan program yang tersedia dapat dibaca di <a href="program-pemerintah-untuk-abk">program pemerintah untuk ABK</a>. Apa pun sumbernya, pastikan alat tetap dipilih dan disetel oleh tenaga profesional, serta tanyakan biaya lanjutan seperti baterai, cetakan baru, servis, dan kontrol berkala sebelum memutuskan.'),
  fig(bodyImages.student, 'Seorang remaja berkaus merah muda dan rok rumbai biru berdiri di halaman rumput depan candi', 'Dukungan pembiayaan membantu anak tetap mengikuti kegiatan belajar dan budaya bersama teman-temannya. Foto ini dokumentasi kegiatan YUKA.'),

  h2('kontrol', 'Kapan Anak Perlu Kembali ke Audiolog?'),
  p('Pendengaran anak dapat berubah, telinga terus tumbuh, dan kebutuhan belajar bertambah seiring naik kelas. Pedoman Kemenkes menyebut gangguan pendengaran progresif umum terjadi pada bayi dan anak, sehingga alat perlu bisa disetel ulang. Selain jadwal kontrol rutin yang ditentukan audiolog, ada beberapa tanda yang membuat anak perlu diperiksa lebih cepat.'),
  ul([
    'Anak tampak lebih sering tidak merespons panggilan, padahal alat menyala.',
    'Guru melaporkan anak makin sulit mengikuti pelajaran atau sering salah menangkap instruksi.',
    'Alat sering berdenging walaupun sudah dipasang dengan benar, tanda cetakan mungkin sudah longgar.',
    'Telinga merah, lecet, nyeri, gatal hebat, atau keluar cairan.',
    'Anak terus menolak memakai alat atau mengeluh suara terlalu keras.',
    'Alat jatuh, terendam air, atau rusak.',
  ]),
  p('Kontrol juga menjadi kesempatan meninjau tujuan belajar bersama terapis wicara dan sekolah. Bila anak baru didiagnosis, baca juga penjelasan tentang <a href="intervensi-dini">intervensi dini</a> dan <a href="asesmen-abk">asesmen ABK</a> agar dukungan disusun sejak awal. Pertanyaan apakah gangguan dengar dapat pulih dibahas di <a href="apakah-tuna-rungu-bisa-sembuh">apakah tuna rungu bisa sembuh</a>. Semoga Allah memudahkan setiap langkah keluarga dalam mendampingi ananda belajar.'),

  faqHtml,
].join('\n');

const article = {
  slug,
  titleTag: 'Alat Bantu Dengar untuk Anak Sekolah: Jenis, Fitting, dan Kelas',
  metaDesc: 'Panduan alat bantu dengar untuk anak sekolah: jenis alat, proses fitting oleh audiolog, perawatan harian, penggunaan di kelas, peran guru, dan akses pembiayaan.',
  keywords: 'alat bantu dengar untuk anak sekolah, alat bantu dengar anak, sistem FM kelas, perawatan alat bantu dengar, anak tuna rungu di sekolah',
  ogTitle: 'Alat Bantu Dengar untuk Anak Sekolah: Panduan Orang Tua dan Guru',
  ogDesc: 'Jenis alat bantu dengar, proses fitting, perawatan harian, penggunaan di kelas, peran guru dan shadow teacher, serta akses pembiayaan.',
  datePublished: '2026-10-14',
  dateModified: '2026-10-14',
  dateDisplay: '14 Okt 2026',
  readTime: '12 menit baca',
  category: 'Pendidikan',
  h1: 'Alat Bantu Dengar untuk Anak Sekolah: Jenis, Fitting, Perawatan, dan Penggunaan di Kelas',
  crumb: 'Alat Bantu Dengar untuk Anak Sekolah',
  parent: { href: 'tuna-rungu-adalah', name: 'Tuna Rungu' },
  about: ['Alat bantu dengar', 'Gangguan pendengaran pada anak', 'Pendidikan inklusi'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'tuna-rungu-adalah', title: 'Tuna Rungu Adalah', desc: 'Pengertian, klasifikasi, dan dukungan bagi anak dengan gangguan pendengaran.' },
    { href: 'cara-berkomunikasi-dengan-anak-tuna-rungu', title: 'Cara Berkomunikasi dengan Anak Tuna Rungu', desc: 'Strategi komunikasi sehari-hari di rumah dan sekolah.' },
    { href: 'shadow-teacher-adalah', title: 'Shadow Teacher Adalah', desc: 'Peran pendamping individual bagi anak di sekolah inklusi.' },
    { href: 'pendidikan-inklusi', title: 'Pendidikan Inklusi', desc: 'Prinsip sekolah yang menerima dan menyesuaikan diri dengan kebutuhan semua anak.' },
  ],
  tags: ['AlatBantuDengar', 'TunaRungu', 'SekolahInklusi', 'ParentingABK'],
  sources: [
    { url: 'https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss', label: 'WHO, Deafness and hearing loss (fact sheet)' },
    { url: 'https://www.who.int/publications/i/item/9789240020481', label: 'WHO, World report on hearing' },
    { url: 'https://www.cdc.gov/hearing-loss-children/treatment/index.html', label: 'CDC, Treatment and Intervention for Hearing Loss in Children' },
    { url: 'https://www.asha.org/practice-portal/professional-issues/hearing-aids-for-children/', label: 'ASHA Practice Portal, Hearing Aids for Children' },
    { url: 'https://www.asha.org/public/hearing/classroom-acoustics/', label: 'ASHA, Classroom Acoustics' },
    { url: 'https://www.asha.org/public/hearing/cochlear-implant/', label: 'ASHA, Cochlear Implants' },
    { url: 'https://kemkes.go.id/app_asset/file_content_download/17000957756555671f5a24a4.07748915.pdf', label: 'Kemenkes, KMK HK.01.07/MENKES/1989/2022 tentang PNPK Tata Laksana Tuli Sensorineural Kongenital' },
    { url: 'https://peraturan.bpk.go.id/Details/94711/perpres-no-82-tahun-2018', label: 'JDIH BPK, Perpres Nomor 82 Tahun 2018 tentang Jaminan Kesehatan' },
  ],
  sourcesCheckedNote: 'Sumber resmi diperiksa pada 11 Oktober 2026. Artikel ini tidak memberikan diagnosis, rekomendasi merek, atau penyetelan alat untuk anak tertentu.',
  editorialHtml,
};

const html = renderArticlePage(article);
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

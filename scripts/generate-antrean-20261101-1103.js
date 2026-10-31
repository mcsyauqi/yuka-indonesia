'use strict';
/*
 * Generator antrean 1 sampai 3 November 2026 (cycle alarm antrean kosong, 2026-10-31).
 *
 * publish-schedule.json kosong, jadi guard scripts/check-schedule-gaps.js --window 3 --quality
 * memerahkan run harian. Tiga artikel ini mengisi 2026-11-01, 11-02, dan 11-03.
 *
 * Topik dipilih dari celah nyata di artikel/ (tidak ada satu pun artikel tentang perundungan,
 * toilet training, atau pertanyaan "mengapa inklusi penting"), bukan dari tab "Artikel Blog"
 * di spreadsheet yang isinya catatan historis.
 *
 * Semua angka dan klaim diambil dari sumber yang benar-benar dibuka 31 Oktober 2026:
 * CDC (perundungan), American Academy of Pediatrics lewat HealthyChildren (toilet training),
 * WHO (disabilitas), UNESCO (inklusi), dan UN CRPD pasal 24.
 *
 *   node scripts/generate-antrean-20261101-1103.js --prepare   # tulis SVG diagram
 *   node scripts/generate-antrean-20261101-1103.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-antrean-20261101-1103.js             # render artikel/*.html
 *   node scripts/generate-antrean-20261101-1103.js --schedule  # tulis publish-schedule.json
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const imgPath = (file) => path.join(ROOT, file);
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const faqHtml = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;

const diagrams = {};
const addDiagram = (file, markup) => { diagrams[file] = markup; };

/* ------------------------------------------------------------------ */
/* 1. anak-abk-dan-bullying-cara-mencegah                              */
/* ------------------------------------------------------------------ */

const sections1 = [
  ['jawaban', 'Apa yang disebut perundungan, dan apa yang bukan'],
  ['kenapa', 'Mengapa anak berkebutuhan khusus perlu perhatian tambahan'],
  ['bentuk', 'Bentuk perundungan yang sering terlewat orang dewasa'],
  ['tanda', 'Tanda yang perlu diperhatikan di rumah dan di sekolah'],
  ['dampak', 'Dampak perundungan menurut data kesehatan masyarakat'],
  ['sekolah', 'Pencegahan di sekolah: aturan, pengawasan, dan keterampilan'],
  ['rumah', 'Pencegahan di rumah: bahasa, kepercayaan, dan latihan'],
  ['respons', 'Apa yang dilakukan ketika perundungan sudah terjadi'],
  ['pelaku', 'Kalau anak kita yang melakukan perundungan'],
  ['faq', 'Pertanyaan umum orang tua dan guru'],
];

const faq1 = [
  { q: 'Apakah semua pertengkaran antar anak termasuk perundungan?', a: 'Tidak. CDC membatasi perundungan sebagai perilaku agresif yang tidak diinginkan, disertai ketimpangan kekuatan yang teramati atau dirasakan, dan berulang atau sangat mungkin berulang. Perselisihan sekali antara dua anak yang posisinya setara biasanya konflik biasa. Pembedaan ini penting karena penanganannya berbeda, bukan karena konflik biasa boleh dibiarkan.' },
  { q: 'Apakah anak berkebutuhan khusus pasti menjadi korban perundungan?', a: 'Tidak pasti, dan menakuti keluarga dengan kepastian semacam itu tidak membantu. Yang terdokumentasi WHO adalah bahwa penyandang disabilitas menghadapi stigma dan diskriminasi di hampir semua bidang kehidupan. Risiko itu nyata, tetapi besarnya berbeda tiap anak, tiap kelas, dan tiap sekolah. Pencegahan yang baik menurunkan risiko tersebut.' },
  { q: 'Bagaimana jika anak saya tidak bisa menceritakan kejadiannya?', a: 'Anak yang komunikasinya terbatas tetap dapat menyampaikan banyak hal lewat perubahan perilaku, tidur, nafsu makan, atau penolakan berangkat sekolah. Siapkan cara lapor yang tidak bergantung pada kalimat panjang, misalnya kartu bergambar, gerakan yang disepakati, atau aplikasi komunikasi. Orang dewasa juga perlu memeriksa situasi secara langsung, bukan menunggu laporan.' },
  { q: 'Apakah anak perlu dilatih membalas agar tidak diganggu?', a: 'Melatih anak membalas secara fisik menambah risiko cedera dan menggeser tanggung jawab orang dewasa kepada anak. Yang lebih berguna adalah melatih anak menjauh, mencari orang dewasa tepercaya, dan menyebut apa yang terjadi. Pengawasan serta aturan sekolah tetap menjadi lapisan utama pencegahan.' },
  { q: 'Bagaimana jika sekolah menganggap kejadiannya hanya bercanda?', a: 'Sampaikan catatan tertulis yang memuat tanggal, tempat, siapa yang terlibat, apa yang dikatakan atau dilakukan, dan siapa yang melihat. Minta rencana tindak lanjut beserta tenggat dan penanggung jawabnya. Catatan mengubah percakapan dari kesan menjadi kejadian, dan memudahkan sekolah menilai apakah ada pola yang berulang.' },
  { q: 'Apakah perundungan lewat gawai juga urusan sekolah?', a: 'CDC mencatat perundungan dapat terjadi melalui teknologi, yang disebut perundungan elektronik atau perundungan siber. Ketika pelaku dan korbannya teman sekelas, dampaknya terbawa ke ruang kelas, jadi sekolah berkepentingan. Simpan tangkapan layar sebelum melapor, lalu batasi akses sementara tanpa menjadikan anak merasa dihukum karena melapor.' },
  { q: 'Bagaimana jika anak saya yang melakukan perundungan?', a: 'Tanggapi dengan serius tanpa melabeli anak sebagai anak jahat. CDC mencatat anak yang melakukan perundungan berisiko lebih tinggi mengalami penyalahgunaan zat, masalah akademik, dan kekerasan pada masa remaja serta dewasa. Cari tahu fungsi perilakunya, ajarkan cara mendapatkan kebutuhan itu tanpa menyakiti, dan libatkan sekolah sejak awal.' },
];

addDiagram(`${IMG}/bullying-bentuk.webp`, svg.cards('Empat bentuk perundungan yang perlu dikenali', 'Rujukan definisi: CDC, Youth Violence Prevention', [
  { h: 'Fisik', color: '#2B3A67', items: ['Memukul, menendang, menjegal', 'Mendorong saat antre atau di tangga', 'Menahan agar tidak bisa pergi'] },
  { h: 'Verbal', color: '#00838F', items: ['Memanggil dengan julukan merendahkan', 'Mengejek cara bicara atau cara jalan', 'Mengancam akan menyakiti'] },
  { h: 'Relasional', color: '#7A5A06', items: ['Menyebarkan rumor', 'Mengeluarkan anak dari kelompok', 'Mengatur teman lain agar menjauh'] },
  { h: 'Daring dan barang', color: '#B3261E', items: ['Pesan atau unggahan yang merendahkan', 'Menyebar foto tanpa izin', 'Merusak atau menyembunyikan barang'] },
]));

addDiagram(`${IMG}/bullying-tanda.webp`, svg.grid('Tanda yang perlu ditindaklanjuti', 'Tanda bukan bukti, tetapi alasan untuk bertanya dan mengamati', ['Yang terlihat', 'Kemungkinan yang perlu dicek', 'Langkah pertama'], [
  ['Menolak berangkat', 'Ada situasi yang dihindari di sekolah', 'Tanyakan bagian hari yang paling tidak disukai.'],
  ['Barang sering hilang', 'Barang diambil atau dirusak orang lain', 'Catat tanggal dan benda, minta sekolah mengecek.'],
  ['Tidur dan makan berubah', 'Tekanan emosional yang belum terucap', 'Beri waktu bercerita, hubungi tenaga kesehatan bila menetap.'],
  ['Menarik diri dari teman', 'Dikeluarkan dari kelompok', 'Tanyakan pada guru siapa teman duduk dan teman mainnya.'],
], [300, 430, 374]));

addDiagram(`${IMG}/bullying-langkah.webp`, svg.flow('Empat lapis pencegahan di sekolah', 'Pencegahan bekerja ketika keempatnya berjalan bersama, bukan satu per satu', [
  { h: 'Aturan yang jelas', d: 'Definisi, cara melapor, dan konsekuensi ditulis serta dibahas bersama siswa.' },
  { h: 'Pengawasan titik rawan', d: 'Kantin, toilet, tangga, dan jam pulang diberi orang dewasa yang bertugas.' },
  { h: 'Pengajaran keterampilan', d: 'Siswa berlatih meminta bantuan, menolak, dan menjadi penonton yang menolong.' },
  { h: 'Tindak lanjut tercatat', d: 'Setiap laporan ditulis, ditindak, lalu dipantau agar tidak berulang.' },
]));

addDiagram(`${IMG}/bullying-respons.webp`, svg.flow('Urutan tanggapan saat kejadian sudah terjadi', 'Keselamatan lebih dulu, pencarian siapa yang salah belakangan', [
  { h: 'Hentikan dan amankan', d: 'Pisahkan anak, pastikan tidak ada cedera, jangan menuntut penjelasan saat itu juga.' },
  { h: 'Dengarkan tanpa menyela', d: 'Catat kalimat anak apa adanya, hindari pertanyaan yang menyarankan jawaban.' },
  { h: 'Catat dan laporkan', d: 'Tanggal, tempat, pihak terlibat, saksi, lalu sampaikan ke wali kelas secara tertulis.' },
  { h: 'Pantau pemulihan', d: 'Periksa kembali setelah satu dan dua pekan, termasuk tidur, nafsu makan, dan kemauan sekolah.' },
]));

const body1 = [
  '<span data-revision-marker="yuka-20261101-bully-r1" hidden></span>',
  '<div class="jawaban-singkat"><p><strong>Perundungan</strong> bukan sekadar pertengkaran anak. CDC membatasinya sebagai perilaku agresif yang tidak diinginkan, disertai ketimpangan kekuatan, dan berulang atau sangat mungkin berulang. Pencegahan untuk anak berkebutuhan khusus bertumpu pada empat hal: aturan sekolah yang jelas, pengawasan di titik rawan, pengajaran keterampilan sosial kepada semua siswa, dan jalur pelaporan yang bisa dipakai anak dengan cara komunikasinya sendiri.</p></div>',
  p('Banyak orang tua anak berkebutuhan khusus menyimpan kekhawatiran yang sama ketika mengantar anak ke sekolah. Bukan soal nilai, melainkan soal apakah anaknya aman dan diterima. Kekhawatiran itu masuk akal, dan menjawabnya tidak cukup dengan menenangkan. Artikel ini menyusun apa yang bisa dilakukan sekolah dan keluarga, dengan batas yang jujur tentang apa yang datanya memang ada dan apa yang belum.'),
  toc(sections1),
  '<h2 id="jawaban">Apa yang disebut perundungan, dan apa yang bukan</h2>',
  p('CDC mendefinisikan perundungan sebagai perilaku agresif yang tidak diinginkan oleh anak atau sekelompok anak lain, yang bukan saudara kandung dan bukan pasangan berkencan. Di dalamnya ada ketimpangan kekuatan yang teramati atau dirasakan, dan perilakunya berulang beberapa kali atau sangat mungkin berulang. Batasan ini dibuat agar penanganan tidak salah sasaran.'),
  p('Ketimpangan kekuatan tidak selalu soal ukuran badan. Jumlah teman yang mendukung, kemampuan berbicara, posisi di kelas, atau penguasaan gawai juga menciptakan ketimpangan. Anak yang sulit menyampaikan kejadian berada pada posisi lebih lemah bukan karena dirinya, melainkan karena lingkungan belum menyediakan cara melapor yang bisa dia pakai.'),
  p('Perbedaan antara konflik biasa dan perundungan penting karena responsnya berbeda. Konflik biasa diselesaikan dengan mediasi dan latihan menyelesaikan masalah. Perundungan membutuhkan penghentian perilaku, pengawasan tambahan, dan tindak lanjut tercatat. Mencampur keduanya membuat korban merasa disamakan dengan pelaku, dan itu melemahkan kepercayaannya untuk melapor lagi.'),
  '<table><thead><tr><th>Aspek</th><th>Konflik biasa</th><th>Perundungan</th></tr></thead><tbody><tr><td>Posisi anak</td><td>Relatif setara dalam kekuatan atau pengaruh</td><td>Ada ketimpangan kekuatan yang teramati atau dirasakan</td></tr><tr><td>Pengulangan</td><td>Biasanya kejadian tunggal</td><td>Berulang, atau sangat mungkin berulang</td></tr><tr><td>Niat</td><td>Sering karena salah paham atau rebutan</td><td>Perilaku agresif yang tidak diinginkan sasarannya</td></tr><tr><td>Respons yang sesuai</td><td>Mediasi dan latihan menyelesaikan masalah</td><td>Penghentian, pengawasan, dan tindak lanjut tercatat</td></tr></tbody></table>',
  p('Tabel di atas bukan alat untuk menolak laporan anak. Ketika sebuah kejadian belum jelas masuk kategori mana, perlakukan sebagai laporan yang perlu dicek. Penilaian kategori dilakukan sesudah fakta dikumpulkan, bukan sebelum anak sempat bercerita.'),
  '<h2 id="kenapa">Mengapa anak berkebutuhan khusus perlu perhatian tambahan</h2>',
  p('Kami tidak menemukan satu sumber resmi berbahasa Indonesia yang memuat angka perundungan khusus anak dengan disabilitas, jadi kami tidak akan menyebut persentase yang tidak bisa ditelusuri. Yang bisa dirujuk adalah dokumentasi WHO bahwa penyandang disabilitas mengalami ableisme, stigma, dan diskriminasi di hampir semua bidang kehidupan, dan bahwa hal itu memengaruhi kesehatan fisik maupun mental mereka.'),
  p('WHO juga mencatat bahwa sekitar 1,3 miliar orang, atau 16 persen penduduk dunia, hidup dengan disabilitas yang signifikan. Angka sebesar itu berarti hampir setiap kelas di sekolah mana pun berpeluang memiliki anak yang membutuhkan penyesuaian. Membangun kelas yang aman karena itu bukan program tambahan untuk segelintir anak, melainkan bagian dari pengelolaan kelas sehari-hari.'),
  p('Tiga keadaan membuat anak berkebutuhan khusus lebih rentan tidak terlindungi. Pertama, perbedaan yang terlihat mudah dijadikan bahan ejekan. Kedua, hambatan komunikasi membuat laporan datang terlambat atau tidak datang sama sekali. Ketiga, perilaku anak yang berubah setelah kejadian kadang dibaca sebagai bagian dari kondisinya, bukan sebagai tanda ada yang terjadi.'),
  p('Risiko biasanya naik pada masa peralihan, misalnya ketika anak pindah jenjang, berganti kelas, atau berganti guru. Pada masa itu kelompok pertemanan sedang terbentuk ulang dan orang dewasa belum mengenal pola setiap anak. Persiapan masa peralihan dibahas tersendiri di artikel <a href="/artikel/transisi-anak-abk-dari-tk-ke-sd">transisi anak ABK dari TK ke SD</a>.'),
  diag(`${IMG}/bullying-bentuk.webp`, 'Diagram empat bentuk perundungan yaitu fisik, verbal, relasional, serta daring dan perusakan barang', 'Empat bentuk perundungan yang dirangkum dari definisi CDC. Bentuk relasional dan daring paling sering luput karena tidak meninggalkan bekas yang terlihat.'),
  '<h2 id="bentuk">Bentuk perundungan yang sering terlewat orang dewasa</h2>',
  p('CDC menyebut bentuk perundungan yang umum meliputi fisik seperti memukul, menendang, dan menjegal; verbal seperti memanggil dengan julukan dan mengejek; relasional atau sosial seperti menyebarkan rumor dan mengeluarkan anak dari kelompok; serta perusakan barang milik korban. Perundungan juga dapat terjadi melalui teknologi, yang disebut perundungan elektronik atau perundungan siber.'),
  p('Bentuk relasional paling sering lolos dari pengawasan karena tidak meninggalkan memar. Seorang anak bisa duduk di kelas yang sama setiap hari tanpa pernah diajak bicara, tanpa pernah dipilih dalam kelompok, dan tanpa pernah diundang. Tidak ada satu peristiwa besar yang bisa ditunjuk, tetapi pengalaman itu berulang setiap hari.'),
  p('Perundungan daring menambah lapisan baru. Pesan atau unggahan dapat terus ada setelah jam sekolah berakhir, dan dapat disebarkan ke banyak orang dalam hitungan menit. Ketika pelaku dan sasarannya teman sekelas, urusannya terbawa kembali ke ruang kelas, sehingga sekolah tetap berkepentingan walaupun kejadiannya di luar jam belajar.'),
  p('Satu pola yang perlu diwaspadai adalah perundungan yang dibungkus sebagai bercanda atau sebagai pertolongan. Misalnya teman yang selalu mengambil alih tugas anak sambil mengatakan anak itu tidak bisa, lalu menceritakannya ke orang lain. Niat baik yang diklaim tidak menghapus dampak merendahkan yang berulang.'),
  '<h2 id="tanda">Tanda yang perlu diperhatikan di rumah dan di sekolah</h2>',
  p('Tidak ada satu tanda yang membuktikan perundungan. Yang ada adalah perubahan yang layak ditanyakan. Perubahan itu antara lain menolak berangkat sekolah, barang yang sering hilang atau rusak, perubahan pola tidur dan nafsu makan, menarik diri dari teman, serta keluhan fisik berulang yang muncul khusus pada pagi hari sekolah.'),
  p('Untuk anak dengan hambatan komunikasi, amati pola waktu dan tempat. Catat pada jam berapa perubahan muncul, di kegiatan apa, dan setelah bertemu siapa. Catatan sederhana selama satu pekan sering memperlihatkan pola yang tidak terlihat dalam percakapan. Bawa catatan itu ketika berbicara dengan wali kelas atau guru pendamping khusus.'),
  p('Hindari pertanyaan yang sudah memuat jawaban, misalnya menanyakan apakah seseorang memukul anak. Pertanyaan semacam itu dapat menghasilkan jawaban yang mengikuti harapan orang dewasa. Lebih aman bertanya tentang urutan hari, bagian yang paling disukai, dan bagian yang paling tidak disukai, lalu menelusuri jawaban anak dengan tenang.'),
  diag(`${IMG}/bullying-tanda.webp`, 'Tabel visual berisi tanda yang terlihat, kemungkinan penyebab, dan langkah pertama yang dapat diambil orang tua', 'Tanda bukan bukti. Setiap baris pada tabel ini adalah alasan untuk bertanya dan mengamati, bukan untuk menyimpulkan.'),
  '<h2 id="dampak">Dampak perundungan menurut data kesehatan masyarakat</h2>',
  p('CDC mencatat perundungan dapat berujung pada cedera fisik, tekanan sosial dan emosional, perilaku menyakiti diri, bahkan kematian. Perundungan juga meningkatkan risiko depresi, kecemasan, kesulitan tidur, pencapaian akademik yang lebih rendah, dan putus sekolah. Dampak ini mengenai anak yang dirundung, anak yang merundung, maupun yang menyaksikan.'),
  p('CDC menyebut perundungan sebagai salah satu pengalaman masa kecil yang merugikan dan menyebutnya meluas. Sekitar satu dari lima siswa sekolah menengah atas di Amerika Serikat melaporkan pernah dirundung di lingkungan sekolah dalam satu tahun terakhir, dan lebih dari satu dari enam melaporkan dirundung secara elektronik, termasuk lewat pesan teks dan media sosial.'),
  p('Angka tersebut berasal dari survei di Amerika Serikat, jadi tidak bisa dipindahkan begitu saja menjadi angka Indonesia. Nilainya ada pada skala masalahnya: perundungan bukan kejadian langka yang hanya menimpa satu dua anak. Sekolah yang menganggapnya pengecualian biasanya belum memiliki jalur pelaporan yang benar-benar dipakai siswa.'),
  p('CDC juga mencatat bahwa anak yang merundung sekaligus dirundung menanggung konsekuensi paling berat dan berisiko lebih besar mengalami masalah kesehatan mental serta perilaku. Temuan ini penting bagi sekolah inklusif karena menunjukkan bahwa memisahkan anak menjadi korban dan pelaku secara permanen tidak selalu menggambarkan keadaan sebenarnya.'),
  '<h2 id="sekolah">Pencegahan di sekolah: aturan, pengawasan, dan keterampilan</h2>',
  p('Lapis pertama adalah aturan yang jelas. Sekolah perlu menuliskan apa yang dianggap perundungan, ke siapa siswa melapor, apa yang terjadi setelah laporan masuk, dan berapa lama prosesnya. Aturan yang hanya tertempel di dinding tidak cukup. Aturan perlu dibahas bersama siswa dengan contoh konkret, termasuk contoh yang melibatkan teman dengan kebutuhan khusus.'),
  p('Lapis kedua adalah pengawasan di titik rawan. Sebagian besar kejadian berlangsung di tempat yang jarang ada orang dewasa, seperti kantin, toilet, tangga, halaman belakang, serta saat menunggu jemputan. Memetakan titik rawan di sekolah sendiri lebih berguna daripada menyalin daftar dari tempat lain, karena denah setiap sekolah berbeda.'),
  p('Lapis ketiga adalah pengajaran keterampilan kepada semua siswa, bukan hanya kepada anak yang dianggap rentan. CDC menyebut contoh program berbasis sekolah yang membangun keterampilan, termasuk pendekatan pengelolaan perilaku di kelas dan pembelajaran sosial emosional. Intinya sama: anak diajari secara eksplisit cara meminta bantuan, menolak, dan menolong teman yang sedang disasar.'),
  p('CDC juga menekankan pentingnya melibatkan siswa langsung dalam pencegahan, karena merekalah yang paling tahu pengalaman mereka sendiri dengan kekerasan. Melibatkan siswa membantu mereka memahami konsekuensi kekerasan, menjadi penggerak perubahan di sekolah, memberi masukan kepada pengambil keputusan, serta menumbuhkan rasa hormat dan empati di antara teman sebaya.'),
  p('Lapis keempat adalah tindak lanjut yang tercatat. Tanpa catatan, sekolah tidak bisa melihat pola, dan keluarga tidak bisa menilai apakah ada kemajuan. Format catatannya tidak perlu rumit: tanggal, tempat, siapa yang terlibat, apa yang terjadi, tindakan yang diambil, dan jadwal pemeriksaan ulang. Pendekatan serupa juga dibahas di artikel <a href="/artikel/classroom-management-kelas-inklusi">manajemen kelas inklusi</a>.'),
  p('Keempat lapis itu pantas ditanyakan orang tua sebelum memilih sekolah, bersama pertanyaan lain tentang pelaksanaan inklusi. Daftar hal yang dapat diperiksa tersedia di artikel <a href="/artikel/indikator-keberhasilan-sekolah-inklusi">indikator keberhasilan sekolah inklusi</a>, dan pembagian peran keluarga serta sekolah dibahas di <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusif</a>.'),
  diag(`${IMG}/bullying-langkah.webp`, 'Diagram empat lapis pencegahan perundungan di sekolah yaitu aturan, pengawasan, pengajaran keterampilan, dan tindak lanjut', 'Empat lapis ini saling menopang. Aturan tanpa pengawasan tidak terasa, dan pengawasan tanpa pengajaran keterampilan hanya memindahkan masalah ke tempat lain.'),
  '<h2 id="rumah">Pencegahan di rumah: bahasa, kepercayaan, dan latihan</h2>',
  p('Di rumah, pekerjaan terbesar adalah menjaga agar anak tetap mau bercerita. Itu lebih mudah ketika cerita pertama tidak dibalas dengan kemarahan, interogasi, atau janji besar yang tidak bisa ditepati. Tanggapan yang menenangkan sekaligus jujur terdengar seperti pengakuan bahwa kejadian itu tidak pantas, lalu penjelasan singkat tentang langkah berikutnya.'),
  p('Latih kalimat atau isyarat pendek yang bisa dipakai anak ketika merasa tidak aman. Untuk anak yang belum berbicara, bisa berupa kartu, simbol, atau tombol di alat bantu komunikasi. Bahas bersama guru supaya isyarat yang sama dikenali di sekolah. Artikel <a href="/artikel/pecs-komunikasi-autis">PECS dan komunikasi</a> membahas prinsip dasar alat bantu semacam ini.'),
  p('Latihan bermain peran membantu, asalkan tidak dibuat menakutkan. Mainkan situasi sederhana seperti ada teman yang mengambil barang, lalu latih tiga langkah: menjauh, mencari orang dewasa, dan menyebut apa yang terjadi. Ulangi dalam waktu singkat beberapa kali, bukan sekali dalam waktu panjang, agar anak tidak kelelahan.'),
  p('Libatkan kakak atau adik bila ada. Saudara kandung sering menjadi saksi pertama dan pendukung yang paling dekat, tetapi mereka juga perlu tahu batas tanggung jawabnya dan tidak dibebani menjadi penjaga. Keseimbangan peran ini dibahas di artikel <a href="/artikel/sibling-anak-berkebutuhan-khusus">saudara kandung anak berkebutuhan khusus</a>.'),
  p('Jaga juga hubungan anak dengan teman sebayanya di luar jam sekolah. Satu atau dua teman yang benar-benar dekat memberi perlindungan sosial yang nyata. Mengundang teman ke rumah untuk kegiatan yang disukai anak sering lebih efektif daripada meminta anak berusaha populer di kelas. Pembahasan terkait ada di artikel <a href="/artikel/empati-pada-anak-berkebutuhan-khusus">empati pada anak berkebutuhan khusus</a>.'),
  p('Perhatikan pula beban orang tua sendiri. Menghadapi kasus perundungan menguras tenaga dan sering memunculkan rasa bersalah. Mencari dukungan bukan tanda lemah, dan kondisi orang tua yang terjaga membuat pendampingan lebih stabil. Topik ini dibahas terpisah di artikel <a href="/artikel/mengelola-stres-orang-tua-anak-abk">mengelola stres orang tua anak ABK</a>.'),
  '<h2 id="respons">Apa yang dilakukan ketika perundungan sudah terjadi</h2>',
  p('Langkah pertama adalah menghentikan dan mengamankan. Pisahkan anak yang terlibat, pastikan tidak ada cedera, dan jangan menuntut penjelasan panjang saat emosi masih tinggi. Anak yang sedang kewalahan sering tidak dapat menyusun cerita yang runtut, dan memaksanya justru menghasilkan keterangan yang kacau.'),
  p('Langkah kedua adalah mendengarkan tanpa menyela. Catat kalimat anak apa adanya, termasuk kata yang dipakainya. Hindari menambahkan tafsiran orang dewasa ke dalam catatan. Jika anak memakai alat bantu komunikasi, simpan juga catatan tentang simbol atau gambar yang dipilihnya.'),
  p('Langkah ketiga adalah mencatat dan melaporkan. Tulis tanggal, waktu, tempat, siapa yang terlibat, siapa yang melihat, dan apa yang sudah dilakukan sekolah. Sampaikan secara tertulis, misalnya lewat pesan atau surat singkat, lalu minta konfirmasi penerimaan. Catatan tertulis memudahkan semua pihak melihat pola jika kejadian berulang.'),
  p('Langkah keempat adalah memantau pemulihan. Periksa kembali setelah satu pekan dan dua pekan. Perhatikan tidur, nafsu makan, kemauan berangkat sekolah, dan minat pada kegiatan yang biasanya disukai. Bila tanda tekanan menetap atau memberat, hubungi tenaga kesehatan atau psikolog. Artikel ini bukan pengganti penilaian profesional.'),
  diag(`${IMG}/bullying-respons.webp`, 'Diagram urutan tanggapan saat perundungan terjadi mulai dari mengamankan hingga memantau pemulihan', 'Urutan ini menempatkan keselamatan lebih dulu. Mencari siapa yang salah tanpa lebih dulu mengamankan anak sering memperpanjang kejadian.'),
  '<h2 id="pelaku">Kalau anak kita yang melakukan perundungan</h2>',
  p('Kemungkinan ini perlu dibicarakan karena sering dihindari. Anak berkebutuhan khusus juga dapat menyakiti teman, kadang karena belum punya cara lain untuk menyampaikan kebutuhan, kadang karena meniru perlakuan yang pernah diterimanya. Menanggapi dengan menyangkal membuat anak kehilangan kesempatan belajar.'),
  p('Mulailah dengan mencari fungsi perilakunya. Apa yang didapat anak setelah perilaku itu, apa yang dihindarinya, dan situasi apa yang mendahuluinya. Setelah itu ajarkan cara lain untuk mendapatkan hal yang sama, dan pastikan cara baru itu berhasil lebih cepat daripada cara lama. Proses ini sebaiknya disusun bersama guru dan terapis, bukan sendirian.'),
  p('Konsekuensi tetap diperlukan, tetapi bentuknya perlu dapat dipahami anak dan berkaitan dengan perbuatannya. Hukuman yang tidak dimengerti hanya menimbulkan rasa takut tanpa pembelajaran. Permintaan maaf yang dipaksakan di depan kelas juga jarang memperbaiki hubungan, dan kadang menambah ketegangan baru.'),
  p('Pastikan anak yang disakiti tetap menjadi perhatian utama dalam proses ini. Dukungan untuk anak yang melakukan perundungan dan perlindungan untuk anak yang dirundung bukan dua hal yang harus dipilih salah satu. Keduanya berjalan bersama, dengan penanggung jawab yang jelas di sekolah.'),
  '<h2 id="faq">Pertanyaan umum orang tua dan guru</h2>',
  faqHtml(faq1),
];

/* ------------------------------------------------------------------ */
/* 2. cara-melatih-toilet-training-anak-abk                            */
/* ------------------------------------------------------------------ */

const sections2 = [
  ['jawaban', 'Kapan toilet training sebaiknya dimulai'],
  ['kesiapan', 'Tanda kesiapan yang sama untuk semua anak'],
  ['tiga', 'Tiga kemampuan yang harus bertemu'],
  ['lambat', 'Mengapa anak berkebutuhan khusus sering mulai lebih lambat'],
  ['persiapan', 'Menyiapkan lingkungan, bahasa, dan jadwal'],
  ['tahapan', 'Tahapan latihan yang bisa diikuti di rumah'],
  ['hambatan', 'Hambatan yang umum muncul dan cara menanggapinya'],
  ['sekolah', 'Menyamakan cara di rumah dan di sekolah'],
  ['konsultasi', 'Kapan perlu bicara dengan dokter atau terapis'],
  ['faq', 'Pertanyaan umum tentang toilet training anak ABK'],
];

const faq2 = [
  { q: 'Umur berapa anak berkebutuhan khusus mulai toilet training?', a: 'Tidak ada satu umur yang berlaku untuk semua. American Academy of Pediatrics mencatat rata-rata anak di Amerika Serikat mulai antara usia 2 dan 3 tahun, dan sebagian besar sudah terlatih buang air besar serta kecil pada usia 4 tahun. AAP juga menyebut anak dengan kebutuhan khusus sering mulai lebih lambat dan tidak jarang baru tuntas pada usia lima tahun atau lebih.' },
  { q: 'Apakah anak autis bisa toilet training?', a: 'AAP menyatakan sebagian besar anak dengan keterlambatan perkembangan, disabilitas intelektual, atau kondisi spektrum autisme dapat dilatih menggunakan toilet. Waktu yang dibutuhkan berkisar dari beberapa bulan sampai satu tahun atau lebih. Prosesnya menjadi lebih mudah ketika anak memiliki kemampuan verbal minimal, bisa mengatur pakaiannya walau dengan bantuan, dan menunjukkan kesadaran akan kebutuhan buang air.' },
  { q: 'Bagaimana jika anak takut duduk di kloset?', a: 'Kurangi dulu tuntutannya. Biarkan anak duduk dengan pakaian lengkap, lalu bertahap. Pastikan kakinya menapak pada pijakan supaya posisinya stabil, karena kaki yang menggantung membuat anak merasa tidak aman. Jangan memaksa anak tetap duduk ketika dia menangis, sebab pengalaman buruk akan membuat langkah berikutnya lebih sulit.' },
  { q: 'Apakah boleh memakai hadiah atau stiker?', a: 'Boleh, selama hadiahnya kecil, diberikan segera, dan tidak menjadi satu-satunya alasan anak mau mencoba. Berikan penghargaan untuk perilaku yang bisa dikendalikan anak, misalnya mau duduk di toilet pada jadwalnya, bukan hanya untuk hasil akhir. Hentikan secara bertahap ketika kebiasaan mulai terbentuk.' },
  { q: 'Berapa lama proses toilet training biasanya?', a: 'AAP menyebut rentang beberapa bulan sampai satu tahun atau lebih untuk anak dengan keterlambatan perkembangan, disabilitas intelektual, atau autisme. Kecepatan dipengaruhi kesiapan tubuh, pemahaman bahasa, pengalaman sebelumnya, serta konsistensi orang dewasa di rumah dan di sekolah. Membandingkan anak dengan teman seusianya jarang membantu.' },
  { q: 'Bagaimana jika anak sudah bisa di rumah tetapi tidak mau di sekolah?', a: 'Itu lazim terjadi karena keterampilan baru sering terikat pada tempat dan orang. Samakan kata atau isyarat yang dipakai, samakan jadwal, dan minta sekolah memakai urutan langkah yang sama. Kunjungi toilet sekolah bersama anak di luar jam ramai agar tempatnya menjadi familier sebelum dipakai.' },
  { q: 'Kapan harus berhenti mencoba dan berkonsultasi?', a: 'Hubungi dokter anak bila muncul nyeri saat buang air, sembelit berulang, tinja berdarah, demam, mengompol kembali setelah lama kering, atau bila anak sangat tertekan setiap kali diajak ke toilet. AAP menganjurkan menanyakan pendapat dokter sebelum memulai, karena dokter dapat memeriksa kondisi fisik anak dan menyarankan alat bantu yang sesuai.' },
];

addDiagram(`${IMG}/toilet-kesiapan.webp`, svg.cards('Tiga kelompok tanda kesiapan', 'Rujukan: American Academy of Pediatrics, HealthyChildren', [
  { h: 'Tubuh', color: '#2B3A67', items: ['Kering minimal dua jam atau setelah tidur siang', 'Menunjukkan tanda akan buang air', 'Bisa berjalan ke kamar mandi'] },
  { h: 'Pemahaman', color: '#00838F', items: ['Mengikuti instruksi sederhana', 'Mengenali rasa basah dan kering', 'Bisa membuat rencana singkat dan mengingatnya'] },
  { h: 'Kemauan', color: '#7A5A06', items: ['Tidak nyaman dengan popok basah', 'Meminta ke toilet atau menunjukkannya', 'Mau mencoba tanpa ditekan'] },
]));

addDiagram(`${IMG}/toilet-tahapan.webp`, svg.flow('Tahapan latihan yang bisa diikuti', 'Tiap tahap diulang sampai stabil sebelum naik ke tahap berikutnya', [
  { h: 'Mengenalkan', d: 'Anak mengenal kamar mandi, kloset, dan kata atau isyarat yang dipakai.' },
  { h: 'Menjadwalkan', d: 'Anak diajak ke toilet pada jam tetap, bukan hanya saat terlihat ingin.' },
  { h: 'Mengenali sinyal', d: 'Anak belajar menyampaikan kebutuhan sebelum, bukan sesudah, kejadian.' },
  { h: 'Mengurangi bantuan', d: 'Bantuan dikurangi sedikit demi sedikit sampai anak melakukannya sendiri.' },
]));

addDiagram(`${IMG}/toilet-jadwal.webp`, svg.grid('Contoh catatan harian sederhana', 'Catatan dipakai untuk melihat pola, bukan untuk menilai anak', ['Waktu', 'Yang dicatat', 'Yang dibaca dari catatan'], [
  ['Bangun tidur', 'Popok kering atau basah', 'Apakah anak mulai bisa menahan semalam.'],
  ['Tiap dua jam', 'Hasil saat diajak ke toilet', 'Jam berapa peluang berhasil paling besar.'],
  ['Setelah makan', 'Buang air besar atau tidak', 'Pola waktu yang bisa dijadikan jadwal tetap.'],
  ['Sore hari', 'Jumlah kejadian basah', 'Apakah hari itu terlalu padat atau terlalu lelah.'],
], [260, 430, 414]));

addDiagram(`${IMG}/toilet-hambatan.webp`, svg.grid('Hambatan umum dan tanggapan pertama', 'Hentikan latihan dan hubungi tenaga kesehatan bila muncul nyeri atau darah', ['Hambatan', 'Kemungkinan penyebab', 'Tanggapan pertama'], [
  ['Menolak masuk kamar mandi', 'Suara, bau, cahaya, atau pengalaman tidak nyaman', 'Kurangi pemicu, mulai dari pintu, beri waktu lebih panjang.'],
  ['Mau duduk tapi tidak keluar', 'Posisi tidak stabil atau sembelit', 'Pakai pijakan kaki, periksa pola buang air besar.'],
  ['Berhasil lalu mundur lagi', 'Perubahan rutinitas, sakit, atau kelelahan', 'Kembali ke tahap sebelumnya tanpa menyalahkan anak.'],
  ['Bisa di rumah, tidak di sekolah', 'Keterampilan belum berpindah tempat', 'Samakan kata, jadwal, dan urutan langkah dengan guru.'],
], [300, 420, 384]));

const body2 = [
  '<span data-revision-marker="yuka-20261102-toilet-r1" hidden></span>',
  '<div class="jawaban-singkat"><p><strong>Toilet training anak berkebutuhan khusus</strong> memakai tanda kesiapan yang sama dengan anak lain, tetapi sering dimulai lebih lambat dan berjalan lebih panjang. American Academy of Pediatrics menyatakan sebagian besar anak dengan keterlambatan perkembangan, disabilitas intelektual, atau autisme dapat dilatih menggunakan toilet, dengan waktu beberapa bulan sampai satu tahun atau lebih. Kuncinya ada pada kesiapan, jadwal yang tetap, bahasa yang konsisten, dan penghentian latihan bila muncul keluhan fisik.</p></div>',
  p('Pertanyaan tentang toilet training biasanya datang bersama tekanan dari luar. Ada komentar tetangga, ada syarat masuk sekolah, ada perbandingan dengan sepupu seusia. Tekanan itu sering membuat latihan dimulai sebelum anak siap, lalu berhenti dengan kelelahan di kedua pihak. Artikel ini menyusun urutan yang lebih tenang, dengan rujukan yang bisa diperiksa.'),
  toc(sections2),
  '<h2 id="jawaban">Kapan toilet training sebaiknya dimulai</h2>',
  p('American Academy of Pediatrics lewat HealthyChildren menjelaskan bahwa toilet training biasanya dibicarakan pada pemeriksaan kesehatan anak usia 18 bulan, 2 tahun, 2,5 tahun, dan 3 tahun. Rata-rata anak di Amerika Serikat mulai dilatih antara usia 2 dan 3 tahun, dan sebagian besar sudah terlatih buang air besar maupun kecil pada usia 4 tahun.'),
  p('AAP juga menyebut bahwa latihan dapat dimulai kapan pun orang tua dan anak ingin memulainya. Kalimat itu penting karena menggeser patokan dari umur ke kesiapan. Anak yang dipaksa mulai sebelum siap umumnya membutuhkan waktu lebih lama, dan prosesnya terasa lebih berat bagi semua orang di rumah.'),
  p('Secara umum, AAP menyebut anak menunjukkan tanda kontrol kandung kemih dan usus antara usia 18 dan 24 bulan. Pada anak dengan hambatan perkembangan, tanda itu bisa muncul lebih lambat. Menunggu bukan berarti tidak melakukan apa-apa, karena pengenalan kamar mandi dan kosakata dapat dimulai lebih dulu tanpa menuntut hasil.'),
  '<h2 id="kesiapan">Tanda kesiapan yang sama untuk semua anak</h2>',
  p('AAP menegaskan bahwa tanda kesiapan toilet training pada anak dengan kebutuhan khusus sama dengan anak lain. Pertanyaannya meliputi apakah anak menyadari perbedaan antara basah dan kering, apakah bisa tetap kering setidaknya dua jam, apakah merasakan kapan perlu buang air, apakah mampu mencapai toilet tepat waktu walau dengan bantuan, apakah bisa melepas dan memakai pakaian atau siap belajar, dan apakah ada keinginan untuk melangkah ke tahap ini.'),
  p('Pada halaman lain, AAP merinci tanda kesiapan perkembangan yang mirip: kering minimal dua jam di siang hari atau kering setelah tidur siang, menunjukkan tanda akan buang air seperti mengejan, diam mendadak, atau berjongkok, mampu mengikuti instruksi sederhana, bisa berjalan ke kamar mandi dan membantu melepas pakaian, tidak suka berada dalam popok basah, serta mulai meminta memakai toilet atau celana dalam.'),
  p('Daftar ini sebaiknya dibaca sebagai gambaran, bukan ujian lulus atau tidak lulus. Banyak anak memenuhi sebagian tanda lebih dulu. Yang berguna adalah mengetahui tanda mana yang belum muncul, lalu melatih bagian itu secara terpisah, misalnya melatih melepas celana karet sebelum latihan di toilet dimulai.'),
  '<table><thead><tr><th>Tanda kesiapan</th><th>Cara memeriksanya di rumah</th><th>Jika belum muncul</th></tr></thead><tbody><tr><td>Kering minimal dua jam</td><td>Periksa popok atau celana tiap sekitar satu jam selama tiga hari</td><td>Tunda latihan di toilet, lanjutkan pengenalan kamar mandi</td></tr><tr><td>Menunjukkan tanda akan buang air</td><td>Catat gerakan seperti mengejan, diam mendadak, atau berjongkok</td><td>Catat pola waktunya lebih dulu, lalu susun jadwal dari pola itu</td></tr><tr><td>Mengikuti instruksi sederhana</td><td>Coba perintah satu langkah di luar kamar mandi</td><td>Pakai isyarat atau kartu, kurangi jumlah kata per perintah</td></tr><tr><td>Bisa melepas dan memakai celana</td><td>Minta anak menurunkan celana karet sambil berdiri berpegangan</td><td>Latih terpisah dengan celana longgar sebelum latihan toilet</td></tr><tr><td>Mau mencoba</td><td>Perhatikan reaksi saat diajak masuk kamar mandi</td><td>Turunkan tuntutan, beri jeda beberapa pekan, jangan dipaksa</td></tr></tbody></table>',
  diag(`${IMG}/toilet-kesiapan.webp`, 'Diagram tiga kelompok tanda kesiapan toilet training yaitu tubuh, pemahaman, dan kemauan', 'Tiga kelompok tanda kesiapan yang dirangkum dari panduan American Academy of Pediatrics. Anak biasanya memenuhi sebagian lebih dulu, dan itu wajar.'),
  '<h2 id="tiga">Tiga kemampuan yang harus bertemu</h2>',
  p('AAP menjelaskan bahwa belajar menggunakan toilet melibatkan tubuh sekaligus pikiran. Pertama, anak perlu menyadari sinyal kandung kemih dan ususnya sendiri. Kedua, anak perlu tahu cara memakai toilet, termasuk duduk atau berdiri dengan nyaman serta menurunkan dan menaikkan celana. Ketiga, anak perlu mau memakainya.'),
  p('Bagian ketiga sering diabaikan. AAP menyebut perebutan dalam toilet training terjadi ketika anak memilih untuk tidak memakai toilet, dan mengingatkan bahwa anak dapat berhasil pada waktunya sendiri. Membaca penolakan sebagai kesengajaan yang harus dilawan biasanya memperpanjang masalah, sedangkan menurunkan tuntutan sementara sering memulihkan kemajuan.'),
  p('Pada sisi berpikir, AAP menjelaskan bahwa anak perlu lebih dari sekadar memahami hubungan antara rasa ingin buang air dan tindakannya. Anak juga perlu dapat membayangkan toilet ketika merasa ingin, menyusun rencana untuk sampai ke kamar mandi, dan mengingat rencana itu cukup lama untuk menjalankannya. Kemampuan tersebut tumbuh bertahap, dan pada sebagian anak tumbuhnya lebih lambat.'),
  p('Selama proses berlangsung, anak juga perlu memahami penjelasan, perintah, dan tanggapan orang dewasa sampai batas tertentu, serta dapat menyampaikan perasaannya tentang penggunaan toilet. Karena itu, dukungan komunikasi bukan pelengkap melainkan bagian inti dari latihan. Pembahasan tentang alat bantu komunikasi ada di artikel <a href="/artikel/pecs-komunikasi-autis">PECS dan komunikasi anak autis</a>.'),
  '<h2 id="lambat">Mengapa anak berkebutuhan khusus sering mulai lebih lambat</h2>',
  p('AAP menyebut anak dengan kebutuhan khusus sering memulai toilet training lebih lambat daripada anak lain, dan tidak jarang baru menuntaskan prosesnya pada usia lima tahun atau bahkan lebih. AAP juga mengingatkan bahwa anak dengan kondisi tertentu mungkin akan selalu memerlukan bantuan untuk urusan pakaian seperti kancing, ritsleting, dan celana ketat.'),
  p('Keterlambatan itu bukan tanda kegagalan pengasuhan. Penyebabnya beragam, mulai dari kontrol otot yang belum matang, pemahaman bahasa yang masih berkembang, kepekaan sensorik terhadap suara atau bau kamar mandi, sampai pengalaman tidak nyaman yang pernah terjadi. Memahami penyebab membantu memilih penyesuaian yang tepat, bukan sekadar mengulang latihan lebih keras.'),
  p('Karena penyebabnya berlapis, hasil asesmen yang sudah dimiliki anak sebaiknya ikut dibaca sebelum menyusun rencana latihan. Pembahasannya ada di artikel <a href="/artikel/asesmen-abk">asesmen anak berkebutuhan khusus</a>, dan bila anak sudah memiliki <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>, keterampilan ini dapat dimasukkan sebagai salah satu tujuannya.'),
  p('AAP menyatakan sebagian besar anak dengan keterlambatan perkembangan, disabilitas intelektual, atau kondisi spektrum autisme dapat dilatih menggunakan toilet, dengan waktu beberapa bulan sampai satu tahun atau lebih. Prosesnya menjadi lebih mudah ketika anak mencapai kemampuan verbal minimal, mampu mengatur pakaiannya walau dengan bantuan, dan menunjukkan kesadaran akan kebutuhan buang air.'),
  p('AAP menambahkan bahwa toilet training berjalan paling baik ketika orang tua anak dengan kebutuhan khusus mendapat panduan, instruksi, dan dukungan dari dokter anak, tenaga terlatih lain termasuk pihak sekolah, kelompok dukungan, atau gabungan dari semuanya. Dukungan dari <a href="/artikel/terapi-okupasi">terapi okupasi</a> sering relevan untuk urusan pakaian dan posisi duduk.'),
  '<h2 id="persiapan">Menyiapkan lingkungan, bahasa, dan jadwal</h2>',
  p('Siapkan lingkungan lebih dulu. Pastikan anak dapat duduk dengan stabil, kaki menapak pada pijakan, dan pegangan tersedia bila diperlukan. Kaki yang menggantung membuat anak sulit mengejan dan sering memicu rasa takut jatuh. Periksa juga suhu ruangan, suara kuras air, serta bau pembersih yang terlalu tajam.'),
  p('Pilih kata atau isyarat yang akan dipakai, lalu gunakan sama persis oleh semua orang dewasa. AAP memberi contoh pendekatan sederhana untuk anak dengan hambatan perkembangan: memeriksa kondisi popok atau celana setiap sekitar satu jam dan memberi komentar satu kata tanpa penilaian ketika basah, lalu tersenyum dan mengatakan kering setelah diganti. Bila kemampuan verbal anak terbatas, kata itu dapat diganti isyarat khusus.'),
  p('AAP juga menyarankan mengajak anak ikut ke kamar mandi ketika orang dewasa memakainya, dan bila memungkinkan memberi kesempatan anak melihat anak lain memakai toilet, karena anak sering lebih mudah menghubungkan dirinya dengan sesama anak. Jadwalkan kegiatan ini pada waktu yang tidak terburu-buru.'),
  p('Susun jadwal tetap, bukan jadwal yang bergantung pada tebakan. Ajak anak ke toilet pada jam yang sama setiap hari, misalnya setelah bangun, setelah makan, dan sebelum tidur. Catat hasilnya pada tabel sederhana selama satu pekan untuk melihat pola. Catatan ini juga memudahkan diskusi dengan guru atau terapis.'),
  diag(`${IMG}/toilet-jadwal.webp`, 'Tabel visual contoh catatan harian toilet training berisi waktu, yang dicatat, dan yang bisa dibaca dari catatan', 'Catatan harian dipakai untuk menemukan pola waktu, bukan untuk menilai anak. Satu pekan biasanya cukup untuk melihat jam dengan peluang keberhasilan terbesar.'),
  '<h2 id="tahapan">Tahapan latihan yang bisa diikuti di rumah</h2>',
  p('Tahap pertama adalah pengenalan. Anak mengenal kamar mandi, kloset atau pispot, serta kata atau isyarat yang dipakai, tanpa dituntut mengeluarkan apa pun. Pada tahap ini keberhasilan diukur dari kesediaan anak masuk dan duduk, bukan dari hasil. Lama tahap ini berbeda pada tiap anak.'),
  p('Tahap kedua adalah penjadwalan. Anak diajak ke toilet pada jam tetap yang sudah dipilih dari catatan, bukan hanya ketika terlihat ingin. Durasi duduk dibuat pendek, misalnya dua sampai lima menit, dan dihentikan bila anak gelisah. Mengakhiri sebelum anak kesal lebih baik daripada memaksa sampai berhasil.'),
  p('Tahap ketiga adalah pengenalan sinyal. Anak dilatih menyampaikan kebutuhan sebelum kejadian, dengan kata, kartu, atau isyarat yang sudah disepakati. Pada awalnya orang dewasa membantu dengan menanyakan pada waktu yang tepat, lalu pertanyaan dikurangi agar inisiatif datang dari anak.'),
  p('Tahap keempat adalah pengurangan bantuan. Bantuan fisik dan lisan dikurangi sedikit demi sedikit sampai anak melakukan rangkaiannya sendiri, dari melepas celana hingga mencuci tangan. Prinsip mengurangi bantuan secara bertahap ini sama dengan yang dipakai pada keterampilan harian lain, misalnya di artikel <a href="/artikel/self-dressing-anak-cerebral-palsy-tips">latihan berpakaian mandiri</a>.'),
  diag(`${IMG}/toilet-tahapan.webp`, 'Diagram empat tahap toilet training dari pengenalan, penjadwalan, pengenalan sinyal, hingga pengurangan bantuan', 'Tiap tahap diulang sampai stabil sebelum naik ke tahap berikutnya. Kembali satu tahap ketika anak mundur bukan kemunduran permanen.'),
  '<h2 id="hambatan">Hambatan yang umum muncul dan cara menanggapinya</h2>',
  p('Penolakan masuk kamar mandi sering berkaitan dengan pengalaman sensorik. Suara kuras air yang keras, pantulan suara di ruang berkeramik, bau pembersih, atau cahaya yang menyilaukan dapat menjadi pemicu. Mulailah dari pintu, lalu maju sedikit demi sedikit. Pembahasan lebih luas ada di artikel <a href="/artikel/sensori-integrasi">sensori integrasi</a>.'),
  p('Anak yang mau duduk tetapi tidak mengeluarkan apa pun sering terhambat posisi atau sembelit. Pastikan kaki menapak dan tubuh condong sedikit ke depan. Bila tinja keras, jarang, atau menyakitkan, hentikan tekanan latihan dan bicarakan dengan dokter. Memaksa anak yang sedang kesakitan membuat kamar mandi menjadi tempat yang dihindari.'),
  p('Kemunduran setelah periode berhasil juga lazim. Pemicunya bisa berupa pindah rumah, pergantian guru, sakit, kurang tidur, atau kelahiran adik. Tanggapi dengan kembali ke tahap sebelumnya untuk sementara, tanpa menyalahkan anak dan tanpa menghapus kemajuan yang sudah dicapai.'),
  p('Hindari pula menumpuk perubahan besar pada waktu yang sama. Memulai toilet training bersamaan dengan masuk sekolah baru atau berhenti menyusu sering membuat ketiganya berjalan lebih lambat. Pilih satu perubahan besar, selesaikan sampai stabil, baru lanjut ke berikutnya.'),
  diag(`${IMG}/toilet-hambatan.webp`, 'Tabel visual hambatan umum toilet training beserta kemungkinan penyebab dan tanggapan pertama', 'Hambatan hampir selalu punya penjelasan yang dapat ditangani. Nyeri, darah, atau sembelit berulang adalah alasan untuk berhenti sementara dan menghubungi tenaga kesehatan.'),
  '<h2 id="sekolah">Menyamakan cara di rumah dan di sekolah</h2>',
  p('Keterampilan baru sering terikat pada tempat dan orang tertentu. Anak yang sudah bisa di rumah belum tentu langsung bisa di sekolah, dan itu bukan kemunduran. Yang membantu adalah menyamakan hal-hal kecil: kata atau isyarat yang dipakai, urutan langkah, jam ke toilet, dan cara memberi bantuan.'),
  p('Buat catatan singkat satu halaman untuk guru, berisi kata yang dipakai, jadwal, tanda yang biasanya muncul sebelum anak ingin, bantuan yang masih dibutuhkan, dan apa yang sebaiknya tidak dilakukan. Minta guru menuliskan kembali apa yang terjadi di sekolah, sehingga keduanya membaca catatan yang sama.'),
  p('Kunjungi toilet sekolah bersama anak di luar jam ramai agar tempatnya menjadi familier sebelum benar-benar dipakai. Periksa tinggi kloset, keberadaan pegangan, dan pijakan kaki. Permintaan penyesuaian semacam ini wajar disampaikan kepada sekolah inklusif, dan dibahas juga dalam artikel <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusif</a>.'),
  '<h2 id="konsultasi">Kapan perlu bicara dengan dokter atau terapis</h2>',
  p('AAP menganjurkan menanyakan pendapat dokter anak ketika orang tua merasa anaknya sudah siap. Dokter dapat memeriksa kondisi fisik anak, memberi masukan sesuai kebutuhan khususnya, serta menjelaskan jenis peralatan khusus yang mungkin dianjurkan. Konsultasi di awal sering menghemat waktu dibandingkan mencoba sendiri berbulan-bulan.'),
  p('Hubungi tenaga kesehatan bila muncul nyeri saat buang air, sembelit berulang, tinja berdarah, demam, mengompol kembali setelah lama kering, atau rasa takut yang sangat kuat setiap kali diajak ke kamar mandi. Tanda-tanda ini membutuhkan penilaian medis, bukan penambahan latihan.'),
  p('Terapis okupasi dapat membantu pada urusan posisi duduk, kestabilan tubuh, keterampilan mengatur pakaian, dan penyesuaian sensorik. Terapis wicara dapat membantu menyiapkan cara anak menyampaikan kebutuhan. Artikel ini bersifat edukasi umum dan tidak menggantikan penilaian tenaga kesehatan yang memeriksa anak secara langsung.'),
  p('Terakhir, jaga ekspektasi orang dewasa tetap manusiawi. AAP mengingatkan orang tua anak dengan kebutuhan khusus untuk menyiapkan diri secara emosional sebelum memulai, dan memandang kemunduran sebagai kesempatan mengenali cara belajar anak, bukan sebagai kegagalan. Pandangan itu membuat proses panjang menjadi lebih mungkin dijalani.'),
  '<h2 id="faq">Pertanyaan umum tentang toilet training anak ABK</h2>',
  faqHtml(faq2),
];

/* ------------------------------------------------------------------ */
/* 3. mengapa-pendidikan-inklusi-penting                               */
/* ------------------------------------------------------------------ */

const sections3 = [
  ['jawaban', 'Jawaban singkat: inklusi penting karena hak, bukti, dan mutu'],
  ['makna', 'Inklusi bukan sekadar menempatkan anak di kelas reguler'],
  ['hak', 'Dasar hak: apa yang disepakati secara internasional'],
  ['skala', 'Skala persoalannya menurut data global'],
  ['manfaat', 'Siapa saja yang diuntungkan oleh kelas inklusif'],
  ['syarat', 'Syarat agar inklusi benar-benar bekerja'],
  ['hambatan', 'Hambatan yang paling sering muncul'],
  ['peran', 'Peran orang tua, guru, dan masyarakat'],
  ['ukur', 'Cara menilai apakah inklusi di satu sekolah berjalan'],
  ['faq', 'Pertanyaan umum tentang pendidikan inklusi'],
];

const faq3 = [
  { q: 'Apakah pendidikan inklusi berarti menutup sekolah luar biasa?', a: 'Tidak otomatis. Laporan UNESCO menyoroti bertahannya sistem paralel dan sekolah khusus sebagai salah satu tantangan menuju inklusi, tetapi keputusan penempatan tetap harus berangkat dari kebutuhan anak dan kesiapan layanan. Perbandingan kedua jalur dibahas terpisah dalam artikel kami tentang perbedaan sekolah inklusi dan SLB.' },
  { q: 'Apakah anak tanpa disabilitas dirugikan di kelas inklusif?', a: 'Kekhawatiran ini wajar ditanyakan, dan jawabannya bergantung pada kualitas pelaksanaan, bukan pada keberadaan anak berkebutuhan khusus di kelas. Kelas yang gurunya didukung, jumlah siswanya wajar, dan materinya disesuaikan cenderung membantu semua siswa, termasuk yang tertinggal karena sebab lain seperti bahasa pengantar atau kondisi ekonomi.' },
  { q: 'Apa beda integrasi dan inklusi?', a: 'Integrasi menempatkan anak di sekolah umum dan meminta anak menyesuaikan diri dengan sistem yang ada. Inklusi mengubah cara sekolah bekerja agar sistemnya menampung keragaman siswa, mulai dari cara mengajar, cara menilai, sampai cara menyusun lingkungan fisik. Perbedaannya terlihat pada siapa yang dituntut berubah.' },
  { q: 'Apakah inklusi hanya untuk anak dengan disabilitas?', a: 'Tidak. UNESCO menempatkan inklusi dalam kerangka semua yang tersisih dari pendidikan, termasuk karena latar belakang maupun kemampuan. Dalam praktiknya, kelas inklusif juga menyentuh anak yang bahasa ibunya berbeda dari bahasa pengantar sekolah, anak yang bekerja membantu keluarga, serta anak yang sering berpindah tempat tinggal.' },
  { q: 'Apakah guru kelas reguler mampu mengajar anak berkebutuhan khusus?', a: 'Dengan pelatihan dan dukungan, banyak yang mampu. Masalahnya, UNESCO mencatat sekitar 40 persen negara tidak menyediakan pelatihan guru tentang inklusi. Karena itu pelatihan guru dan kehadiran guru pembimbing khusus bukan pelengkap, melainkan syarat agar kebijakan inklusi tidak berhenti di atas kertas.' },
  { q: 'Bagaimana orang tua tahu sekolah benar-benar inklusif?', a: 'Tanyakan hal yang dapat diperiksa: apakah ada guru pembimbing khusus, bagaimana bentuk penyesuaian materi dan penilaian, bagaimana sekolah menangani perundungan, apakah ada program pembelajaran individual, dan bagaimana sekolah melaporkan kemajuan anak. Jawaban yang hanya berupa pernyataan menerima semua anak belum cukup.' },
  { q: 'Apakah inklusi membuat anak lebih lambat belajar?', a: 'Yang membuat anak tertinggal umumnya bukan keberadaannya di kelas umum, melainkan ketiadaan penyesuaian. Anak yang duduk di kelas tanpa materi yang bisa diaksesnya tetap tersisih meski secara fisik hadir. Karena itu ukuran keberhasilan inklusi bukan kehadiran, melainkan partisipasi dan hasil belajar yang terdokumentasi.' },
];

addDiagram(`${IMG}/inklusi-penting-makna.webp`, svg.cards('Tiga ukuran inklusi yang sebenarnya', 'Kehadiran fisik saja belum memenuhi satu pun dari ketiganya', [
  { h: 'Akses', color: '#2B3A67', items: ['Anak diterima dan terdaftar', 'Lingkungan fisik dapat dijangkau', 'Biaya dan jarak tidak menghalangi'] },
  { h: 'Partisipasi', color: '#00838F', items: ['Anak ikut kegiatan belajar', 'Materi disajikan dengan cara yang dapat diakses', 'Anak punya teman dan peran di kelas'] },
  { h: 'Hasil belajar', color: '#7A5A06', items: ['Kemajuan dicatat dan ditinjau', 'Penilaian disesuaikan tanpa menurunkan tujuan', 'Ada rencana untuk tahap berikutnya'] },
]));

addDiagram(`${IMG}/inklusi-penting-syarat.webp`, svg.flow('Empat syarat agar inklusi bekerja', 'Menghapus satu syarat biasanya membuat tiga lainnya ikut gagal', [
  { h: 'Guru yang dilatih', d: 'Pelatihan tentang penyesuaian pembelajaran, bukan sekadar sosialisasi kebijakan.' },
  { h: 'Dukungan di kelas', d: 'Guru pembimbing khusus, bahan ajar alternatif, dan jumlah siswa yang wajar.' },
  { h: 'Data yang dipakai', d: 'Asesmen awal dan catatan kemajuan dipakai untuk menyesuaikan pengajaran.' },
  { h: 'Lingkungan aman', d: 'Aturan antiperundungan, aksesibilitas fisik, dan jalur pelaporan yang jelas.' },
]));

addDiagram(`${IMG}/inklusi-penting-hambatan.webp`, svg.grid('Hambatan yang sering muncul dan langkah pertama', 'Hambatan disusun UNESCO sebagai tantangan menuju pendidikan inklusif', ['Hambatan', 'Wujudnya di sekolah', 'Langkah pertama'], [
  ['Pemahaman berbeda', 'Inklusi dibaca sekadar menerima pendaftaran', 'Sepakati definisi dan ukuran keberhasilan bersama.'],
  ['Guru kurang didukung', 'Tidak ada pelatihan dan tidak ada pendamping', 'Prioritaskan pelatihan guru dan penempatan GPK.'],
  ['Data tidak ada', 'Kebutuhan siswa tidak tercatat', 'Mulai dari asesmen sederhana dan catatan kemajuan.'],
  ['Sarana belum memadai', 'Akses fisik dan bahan ajar terbatas', 'Perbaiki yang paling menghambat lebih dulu, bertahap.'],
], [280, 440, 384]));

addDiagram(`${IMG}/inklusi-penting-peran.webp`, svg.cards('Siapa melakukan apa', 'Inklusi gagal ketika hanya satu pihak yang bekerja', [
  { h: 'Orang tua', color: '#2B3A67', items: ['Menyampaikan kebutuhan anak secara spesifik', 'Meminta rencana dan jadwal tinjauan', 'Menjaga komunikasi dua arah dengan guru'] },
  { h: 'Sekolah dan guru', color: '#00838F', items: ['Menyesuaikan cara mengajar dan menilai', 'Mencatat kemajuan dan menindaklanjuti', 'Menegakkan aturan antiperundungan'] },
  { h: 'Masyarakat', color: '#7A5A06', items: ['Menyediakan akses layanan dan transportasi', 'Membuka kegiatan untuk semua anak', 'Menghentikan ujaran yang merendahkan'] },
]));

const body3 = [
  '<span data-revision-marker="yuka-20261103-inklusi-r1" hidden></span>',
  '<div class="jawaban-singkat"><p><strong>Pendidikan inklusi penting</strong> karena tiga alasan yang bisa diperiksa. Pertama, pendidikan inklusif adalah hak yang diakui Konvensi PBB tentang Hak Penyandang Disabilitas pasal 24. Kedua, UNESCO mendokumentasikan bahwa sebagian besar hambatan pendidikan bukan berasal dari anak, melainkan dari sistem sekolah. Ketiga, inklusi yang dijalankan dengan benar memperbaiki mutu pengajaran untuk semua siswa, bukan hanya untuk anak berkebutuhan khusus.</p></div>',
  p('Pertanyaan mengapa inklusi penting biasanya muncul dalam bentuk yang lebih praktis. Mengapa anak saya harus bersekolah di sana, mengapa sekolah harus repot menyesuaikan, atau mengapa guru harus menambah pekerjaan. Artikel ini menjawabnya dengan rujukan yang dapat ditelusuri, lalu menurunkannya menjadi daftar yang bisa diperiksa orang tua dan sekolah.'),
  toc(sections3),
  '<h2 id="jawaban">Jawaban singkat: inklusi penting karena hak, bukti, dan mutu</h2>',
  p('Alasan pertama bersifat hukum dan moral. Konvensi PBB tentang Hak Penyandang Disabilitas pasal 24 menyatakan negara pihak mengakui hak penyandang disabilitas atas pendidikan, dan untuk mewujudkan hak itu tanpa diskriminasi serta atas dasar kesempatan yang setara, negara pihak memastikan adanya sistem pendidikan inklusif pada semua jenjang.'),
  p('Alasan kedua bersifat empiris. Laporan Pemantauan Pendidikan Global UNESCO tahun 2020 yang berjudul Inclusion and education menyoroti mereka yang tersisih dari pendidikan karena latar belakang maupun kemampuan, serta memetakan tantangan yang menahan kemajuan. Laporan itu memperlihatkan bahwa hambatan terbesar berada pada sistem, bukan pada anak.'),
  p('Alasan ketiga bersifat praktis. Penyesuaian yang dirancang untuk satu anak sering berguna bagi banyak anak lain. Instruksi yang dipecah menjadi langkah pendek, jadwal visual, dan penilaian yang memberi lebih dari satu cara menunjukkan pemahaman membantu siswa yang kesulitan karena sebab apa pun, termasuk sebab yang tidak terkait disabilitas.'),
  '<h2 id="makna">Inklusi bukan sekadar menempatkan anak di kelas reguler</h2>',
  p('Kesalahpahaman paling umum adalah menyamakan inklusi dengan penerimaan pendaftaran. Anak diterima, duduk di kelas yang sama, lalu dianggap selesai. Dalam praktiknya anak dapat hadir secara fisik tetapi tetap tersisih, karena materi tidak dapat diaksesnya, karena tidak ada yang mendampingi, atau karena ia tidak pernah benar-benar masuk ke dalam kegiatan kelompok.'),
  p('Ukuran yang lebih jujur terdiri atas tiga lapis. Akses berarti anak diterima, lingkungannya dapat dijangkau, dan biaya atau jarak tidak menghalangi. Partisipasi berarti anak benar-benar ikut dalam kegiatan belajar dan punya peran di kelas. Hasil belajar berarti ada kemajuan yang dicatat, ditinjau, dan dipakai untuk merencanakan tahap berikutnya.'),
  p('Perbedaan antara integrasi dan inklusi terletak pada siapa yang dituntut berubah. Pada integrasi, anak dituntut menyesuaikan diri dengan sistem yang sudah ada. Pada inklusi, sistemnya yang diubah agar mampu menampung keragaman siswa. Artikel <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a> membahas kerangka dasarnya lebih dalam.'),
  '<table><thead><tr><th>Aspek</th><th>Pendekatan integrasi</th><th>Pendekatan inklusi</th></tr></thead><tbody><tr><td>Yang dituntut berubah</td><td>Anak menyesuaikan diri dengan sistem</td><td>Sistem sekolah menyesuaikan diri dengan keragaman siswa</td></tr><tr><td>Kurikulum</td><td>Seragam, penyesuaian bersifat pengecualian</td><td>Disesuaikan secara terencana tanpa menurunkan tujuan</td></tr><tr><td>Dukungan</td><td>Terpisah dari kegiatan kelas</td><td>Melekat pada kegiatan kelas sehari-hari</td></tr><tr><td>Ukuran keberhasilan</td><td>Anak hadir di kelas umum</td><td>Akses, partisipasi, dan hasil belajar tercatat</td></tr></tbody></table>',
  diag(`${IMG}/inklusi-penting-makna.webp`, 'Diagram tiga ukuran inklusi yaitu akses, partisipasi, dan hasil belajar', 'Tiga ukuran yang membedakan inklusi dari sekadar kehadiran. Sekolah yang hanya memenuhi lapis pertama belum dapat disebut inklusif.'),
  '<h2 id="hak">Dasar hak: apa yang disepakati secara internasional</h2>',
  p('Pasal 24 Konvensi PBB tentang Hak Penyandang Disabilitas menempatkan pendidikan inklusif sebagai cara memenuhi hak atas pendidikan, bukan sebagai salah satu pilihan di antara banyak pilihan. Rumusannya menyebut sistem pendidikan inklusif pada semua jenjang, yang berarti kewajiban itu berlaku dari jenjang awal sampai jenjang lanjut.'),
  p('Di Indonesia, kerangka haknya tertuang dalam Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas. Kami membahas isinya pada artikel tersendiri agar ringkasan hukum tidak bercampur dengan panduan praktis. Baca <a href="/artikel/uu-no-8-tahun-2016-tentang-penyandang-disabilitas">ringkasan UU Nomor 8 Tahun 2016</a> untuk kaitannya dengan pendidikan dan akomodasi yang layak.'),
  p('Hak tersebut juga bersinggungan dengan kesehatan. WHO mencatat bahwa pengucilan dari pendidikan dan pekerjaan termasuk faktor sosial yang menambah risiko kesehatan buruk serta kebutuhan kesehatan yang tidak terpenuhi pada penyandang disabilitas. Dengan kata lain, akses pendidikan bukan urusan sekolah semata.'),
  '<h2 id="skala">Skala persoalannya menurut data global</h2>',
  p('WHO memperkirakan sekitar 1,3 miliar orang, atau 16 persen penduduk dunia, hidup dengan disabilitas yang signifikan. WHO juga mencatat bahwa penyandang disabilitas memiliki risiko dua kali lipat mengalami kondisi seperti depresi, asma, diabetes, stroke, obesitas, atau kesehatan mulut yang buruk, dan sebagian meninggal sampai dua puluh tahun lebih awal.'),
  p('Pada sisi pendidikan, UNESCO menampilkan data bahwa hampir 240 juta anak di dunia memiliki suatu bentuk disabilitas, dan bahwa sekitar 40 persen negara tidak menyediakan pelatihan guru tentang inklusi. Dua angka itu menjelaskan mengapa banyak kebijakan inklusi berhenti pada dokumen: gurunya tidak pernah disiapkan.'),
  p('Laporan UNESCO tahun 2020 menyebut sejumlah tantangan yang menahan kemajuan, termasuk perbedaan pemahaman tentang kata inklusi, kurangnya dukungan untuk guru, ketiadaan data tentang mereka yang tersisih dari pendidikan, sarana yang tidak memadai, dan bertahannya sistem paralel serta sekolah khusus.'),
  p('Angka-angka ini bersifat global dan tidak dapat dipindahkan begitu saja menjadi angka Indonesia. Gunanya adalah menunjukkan arah persoalan. Ketika satu sekolah mengeluhkan guru yang belum siap, keluhan itu bukan kasus khusus, melainkan pola yang terdokumentasi di banyak negara sekaligus.'),
  '<h2 id="manfaat">Siapa saja yang diuntungkan oleh kelas inklusif</h2>',
  p('Bagi anak berkebutuhan khusus, manfaat paling langsung adalah akses pada kurikulum umum, teman sebaya, dan ekspektasi belajar yang tidak otomatis diturunkan. Lingkungan yang menuntut secara wajar membantu anak menunjukkan kemampuan yang mungkin tidak terlihat dalam kelompok yang sangat kecil dan terpisah.'),
  p('Bagi teman sebaya, kelas inklusif memberi pengalaman berinteraksi dengan orang yang berbeda cara belajar dan cara berkomunikasi. Pengalaman itu sulit digantikan oleh pelajaran teori tentang keberagaman. Artikel <a href="/artikel/empati-pada-anak-berkebutuhan-khusus">empati pada anak berkebutuhan khusus</a> membahas bagaimana sikap itu dibangun secara sengaja.'),
  p('Bagi guru, penyesuaian yang dituntut kelas inklusif memperluas cara mengajar. Strategi seperti instruksi bertingkat, pengelompokan fleksibel, dan penilaian dengan beberapa jalur bermanfaat untuk seluruh kelas. Praktik semacam <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching</a> dan <a href="/artikel/peer-tutoring-di-kelas-inklusi">peer tutoring</a> lahir dari kebutuhan ini.'),
  p('Bagi sekolah, inklusi memaksa sistem pencatatan menjadi lebih rapi. Asesmen awal, rencana pembelajaran, dan catatan kemajuan yang tadinya hanya ada untuk sebagian siswa menjadi kebiasaan. Rapi pada bagian ini biasanya terbawa pada pengelolaan kelas secara keseluruhan.'),
  '<h2 id="syarat">Syarat agar inklusi benar-benar bekerja</h2>',
  p('Syarat pertama adalah guru yang dilatih. Pelatihan yang dibutuhkan bukan sosialisasi kebijakan, melainkan latihan praktis menyesuaikan materi, memecah instruksi, membuat penilaian alternatif, dan mengelola kelas dengan rentang kemampuan lebar. Topik ini dibahas di artikel <a href="/artikel/pelatihan-guru-inklusi">pelatihan guru inklusi</a>.'),
  p('Syarat kedua adalah dukungan yang hadir di dalam kelas. Guru pembimbing khusus, bahan ajar alternatif, dan jumlah siswa yang wajar menentukan apakah penyesuaian dapat dijalankan setiap hari atau hanya saat ada kunjungan pengawas. Peran pendamping dijelaskan pada artikel <a href="/artikel/gpk-adalah">guru pembimbing khusus</a>.'),
  p('Syarat ketiga adalah data yang benar-benar dipakai. Asesmen awal menjelaskan kebutuhan anak, dan catatan kemajuan menjelaskan apakah penyesuaian berhasil. Tanpa keduanya, keputusan diambil berdasarkan kesan. Lihat <a href="/artikel/asesmen-abk">asesmen anak berkebutuhan khusus</a> dan <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>.'),
  p('Syarat keempat adalah lingkungan yang aman. Aturan antiperundungan yang ditegakkan, aksesibilitas fisik, dan jalur pelaporan yang dapat dipakai anak dengan cara komunikasinya sendiri. Sekolah yang unggul pada tiga syarat pertama tetapi membiarkan perundungan akan kehilangan hasilnya.'),
  diag(`${IMG}/inklusi-penting-syarat.webp`, 'Diagram empat syarat agar pendidikan inklusi bekerja yaitu guru terlatih, dukungan kelas, data, dan lingkungan aman', 'Empat syarat ini saling bergantung. Menghapus satu syarat biasanya membuat tiga lainnya ikut gagal walaupun kebijakannya tetap ada.'),
  '<h2 id="hambatan">Hambatan yang paling sering muncul</h2>',
  p('Hambatan pertama adalah perbedaan pemahaman. UNESCO menyebut perbedaan pengertian tentang kata inklusi sebagai salah satu tantangan. Di lapangan, hal itu tampak ketika sekolah merasa sudah inklusif karena menerima pendaftaran, sementara keluarga mengharapkan penyesuaian pembelajaran. Kesepakatan definisi di awal mencegah kekecewaan di tengah jalan.'),
  p('Hambatan kedua adalah guru yang tidak didukung. Pelatihan tidak tersedia, pendamping tidak ada, dan jumlah siswa terlalu banyak. Dalam keadaan itu, guru yang paling berniat baik pun akan kehabisan tenaga. Menuntut guru lebih keras tanpa menambah dukungan bukan strategi yang berkelanjutan.'),
  p('Hambatan ketiga adalah ketiadaan data. Ketika kebutuhan siswa tidak tercatat, sekolah tidak tahu apa yang harus disediakan dan tidak dapat membuktikan kemajuan. UNESCO menyebut absennya data tentang mereka yang tersisih sebagai bagian dari persoalan. Mulai dari catatan sederhana lebih baik daripada menunggu sistem besar.'),
  p('Hambatan keempat adalah sarana. Akses fisik, bahan ajar, dan alat bantu sering terbatas. Jalan keluar yang realistis adalah memperbaiki yang paling menghambat lebih dulu, bukan menunggu semuanya lengkap. Satu ruang kelas yang dapat diakses dan satu set bahan ajar alternatif sudah mengubah pengalaman belajar seorang anak.'),
  diag(`${IMG}/inklusi-penting-hambatan.webp`, 'Tabel visual hambatan pendidikan inklusi berisi wujudnya di sekolah dan langkah pertama yang bisa diambil', 'Hambatan pada tabel ini disusun dari tantangan yang dicatat UNESCO. Setiap baris memiliki langkah pertama yang dapat dikerjakan sekolah tanpa menunggu anggaran besar.'),
  '<h2 id="peran">Peran orang tua, guru, dan masyarakat</h2>',
  p('Orang tua berperan menyampaikan kebutuhan anak secara spesifik, bukan hanya menyebut diagnosis. Keterangan seperti anak membutuhkan instruksi satu per satu, atau anak memerlukan waktu tambahan untuk memproses pertanyaan, jauh lebih berguna bagi guru daripada nama kondisi. Pembahasan lebih lengkap ada di <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusif</a>.'),
  p('Guru dan sekolah berperan mengubah cara mengajar dan menilai, mencatat kemajuan, serta menindaklanjuti laporan. Termasuk di dalamnya memastikan kelas aman dari perundungan, karena rasa aman adalah prasyarat belajar. Pengelolaan hariannya dibahas pada <a href="/artikel/classroom-management-kelas-inklusi">manajemen kelas inklusi</a>.'),
  p('Masyarakat berperan pada hal yang sering luput, yaitu akses di luar gerbang sekolah. WHO mencatat penyandang disabilitas menghadapi transportasi yang tidak dapat diakses dan tidak terjangkau dengan kesulitan lima belas kali lipat dibandingkan mereka yang tanpa disabilitas. Sekolah yang inklusif tetap sulit dijangkau bila perjalanannya tidak mungkin ditempuh.'),
  p('Keluarga besar dan lingkungan terdekat juga berpengaruh pada ketahanan orang tua. Artikel <a href="/artikel/dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a> membahas bentuk dukungan yang benar-benar meringankan, dan yang justru menambah beban meski bermaksud baik.'),
  diag(`${IMG}/inklusi-penting-peran.webp`, 'Diagram pembagian peran orang tua, sekolah dan guru, serta masyarakat dalam pendidikan inklusi', 'Pembagian peran ini mencegah beban menumpuk pada satu pihak. Inklusi yang hanya ditopang orang tua biasanya tidak bertahan lama.'),
  '<h2 id="ukur">Cara menilai apakah inklusi di satu sekolah berjalan</h2>',
  p('Tanyakan hal yang dapat diperiksa. Apakah ada guru pembimbing khusus dan berapa jumlahnya. Bagaimana bentuk penyesuaian materi dan penilaian. Apakah ada program pembelajaran individual dan seberapa sering ditinjau. Bagaimana sekolah menangani laporan perundungan. Bagaimana kemajuan anak dilaporkan kepada keluarga.'),
  p('Minta contoh konkret, bukan pernyataan umum. Misalnya, minta sekolah menjelaskan bagaimana satu topik pelajaran disesuaikan untuk siswa dengan kebutuhan berbeda pekan lalu. Jawaban yang spesifik menunjukkan praktik yang hidup, sedangkan jawaban normatif menunjukkan niat yang belum berjalan.'),
  p('Perhatikan juga tanda yang tidak perlu ditanyakan. Apakah anak berkebutuhan khusus terlihat berada di dalam kegiatan kelas atau selalu di pinggir. Apakah mereka punya teman. Apakah jadwal kegiatan sekolah dapat diikuti semua siswa. Indikator yang lebih rinci dibahas di artikel <a href="/artikel/indikator-keberhasilan-sekolah-inklusi">indikator keberhasilan sekolah inklusi</a>.'),
  p('Terakhir, jangan menilai sekolah dari satu kunjungan. Inklusi terlihat dalam kebiasaan sehari-hari, dan kebiasaan hanya tampak setelah beberapa pekan. Mintalah jadwal tinjauan berkala sejak awal, sehingga penilaian dilakukan bersama dengan data, bukan berdasarkan kesan sesaat.'),
  '<h2 id="faq">Pertanyaan umum tentang pendidikan inklusi</h2>',
  faqHtml(faq3),
];

/* ------------------------------------------------------------------ */

const articles = [
  {
    slug: 'anak-abk-dan-bullying-cara-mencegah',
    titleTag: 'Anak ABK dan Bullying: Cara Mencegah di Sekolah dan Rumah | YUKA',
    metaDesc: 'Cara mencegah bullying pada anak ABK: definisi CDC, bentuk perundungan yang sering terlewat, tanda yang perlu dicek, langkah sekolah, dan langkah rumah.',
    keywords: 'anak abk dan bullying cara mencegah, perundungan anak berkebutuhan khusus, bullying di sekolah inklusi',
    ogTitle: 'Anak ABK dan Bullying: Cara Mencegah di Sekolah dan Rumah',
    ogDesc: 'Panduan pencegahan perundungan untuk keluarga dan sekolah, dengan definisi serta data dari CDC, WHO, dan UNESCO.',
    h1: 'Anak ABK dan Bullying: Cara Mencegah di Sekolah dan di Rumah',
    crumb: 'Anak ABK dan Bullying',
    category: 'Pendidikan',
    datePublished: '2026-11-01T08:00:00+07:00', dateModified: '2026-11-01T08:00:00+07:00',
    dateDisplay: '1 November 2026', readTime: '15 menit baca',
    image: {
      file: 'Dokumentasi/cpao-anak-anak-kelas-memasak-bersama-071.webp', w: 1200, h: 900,
      alt: 'Anak-anak dan pendamping YUKA berdiri bersama memakai celemek pada kegiatan kelas memasak',
      caption: 'Dokumentasi kegiatan kelompok YUKA. Foto ini menggambarkan kegiatan bersama dan tidak menggambarkan peristiwa perundungan.',
      credit,
    },
    bodyHtml: body1.join('\n'), faq: faq1,
    related: [
      { href: '/artikel/classroom-management-kelas-inklusi', title: 'Manajemen Kelas Inklusi', desc: 'Mengatur kelas dengan rentang kebutuhan yang lebar secara konsisten.' },
      { href: '/artikel/empati-pada-anak-berkebutuhan-khusus', title: 'Empati pada Anak Berkebutuhan Khusus', desc: 'Membangun sikap teman sebaya secara sengaja, bukan menunggu terjadi sendiri.' },
      { href: '/artikel/gangguan-emosional-pada-anak-sekolah', title: 'Gangguan Emosional pada Anak Sekolah', desc: 'Mengenali tekanan emosional yang muncul di lingkungan sekolah.' },
    ],
    tags: ['Perundungan', 'SekolahInklusi', 'KeamananAnak'],
    sources: [
      { url: 'https://www.cdc.gov/youth-violence/about/about-bullying.html', label: 'CDC: Bullying (Youth Violence Prevention)' },
      { url: 'https://www.cdc.gov/youth-violence/prevention/index.html', label: 'CDC: Preventing Youth Violence' },
      { url: 'https://www.who.int/news-room/fact-sheets/detail/disability-and-health', label: 'WHO: Disability (fact sheet)' },
      { url: 'https://www.unesco.org/en/inclusion-education', label: 'UNESCO: Inclusion in education' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 31 Oktober 2026 melalui CDC, WHO, dan UNESCO. Angka perundungan yang dikutip berasal dari survei di Amerika Serikat dan tidak dapat dibaca sebagai angka Indonesia.',
  },
  {
    slug: 'cara-melatih-toilet-training-anak-abk',
    titleTag: 'Cara Melatih Toilet Training Anak ABK: Tanda Siap dan Tahapan | YUKA',
    metaDesc: 'Cara melatih toilet training anak ABK: tanda kesiapan menurut AAP, tahapan latihan di rumah, hambatan umum, dan kapan perlu konsultasi ke dokter.',
    keywords: 'cara melatih toilet training anak abk, toilet training anak berkebutuhan khusus, tanda kesiapan toilet training',
    ogTitle: 'Cara Melatih Toilet Training Anak ABK: Tanda Siap dan Tahapan',
    ogDesc: 'Panduan bertahap toilet training anak berkebutuhan khusus berdasarkan panduan American Academy of Pediatrics.',
    h1: 'Cara Melatih Toilet Training Anak ABK: Tanda Kesiapan dan Tahapannya',
    crumb: 'Toilet Training Anak ABK',
    category: 'Pendidikan',
    datePublished: '2026-11-02T08:00:00+07:00', dateModified: '2026-11-02T08:00:00+07:00',
    dateDisplay: '2 November 2026', readTime: '15 menit baca',
    image: {
      file: 'Dokumentasi/16-feb-2026-siswa-abk-menyiapkan-makanan-dibawa-pulang-01.webp', w: 1200, h: 900,
      alt: 'Siswa dan pendamping YUKA duduk melingkar menyiapkan makanan dalam kegiatan keterampilan harian',
      caption: 'Dokumentasi kegiatan keterampilan harian YUKA. Foto ini menggambarkan latihan kemandirian secara umum, bukan sesi toilet training.',
      credit,
    },
    bodyHtml: body2.join('\n'), faq: faq2,
    related: [
      { href: '/artikel/bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh', title: 'Mengajarkan Kemandirian pada Anak ABK', desc: 'Prinsip umum melatih keterampilan hidup sehari-hari secara bertahap.' },
      { href: '/artikel/terapi-okupasi', title: 'Terapi Okupasi', desc: 'Peran terapi okupasi pada posisi tubuh, pakaian, dan aktivitas harian.' },
      { href: '/artikel/sensori-integrasi', title: 'Sensori Integrasi', desc: 'Memahami respons sensorik yang memengaruhi kenyamanan anak di kamar mandi.' },
    ],
    tags: ['ToiletTraining', 'Kemandirian', 'PengasuhanABK'],
    sources: [
      { url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx', label: 'American Academy of Pediatrics: Potty Training (HealthyChildren)' },
      { url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/The-Right-Age-to-Toilet-Train.aspx', label: 'American Academy of Pediatrics: The Right Age to Potty Train' },
      { url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/Toilet-Training-Children-with-Special-Needs.aspx', label: 'American Academy of Pediatrics: Potty Training Children with Special Needs' },
      { url: 'https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/Cognitive-and-Verbal-Skills-Needed-for-Toilet-Training.aspx', label: 'American Academy of Pediatrics: Potty Training Readiness, Thinking and Language Milestones' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 31 Oktober 2026 melalui HealthyChildren, kanal edukasi American Academy of Pediatrics. Artikel ini tidak menggantikan pemeriksaan dokter anak atau terapis yang menangani anak.',
  },
  {
    slug: 'mengapa-pendidikan-inklusi-penting',
    titleTag: 'Mengapa Pendidikan Inklusi Penting? Alasan, Bukti, dan Syarat | YUKA',
    metaDesc: 'Mengapa pendidikan inklusi penting: dasar hak menurut CRPD pasal 24, data UNESCO dan WHO, manfaat untuk semua siswa, syarat, hambatan, dan cara menilainya.',
    keywords: 'mengapa pendidikan inklusi penting, manfaat pendidikan inklusif, syarat sekolah inklusi',
    ogTitle: 'Mengapa Pendidikan Inklusi Penting? Alasan, Bukti, dan Syarat',
    ogDesc: 'Alasan pendidikan inklusi penting, dengan rujukan CRPD pasal 24, laporan UNESCO 2020, dan data WHO.',
    h1: 'Mengapa Pendidikan Inklusi Penting? Alasan, Bukti, dan Syaratnya',
    crumb: 'Mengapa Pendidikan Inklusi Penting',
    category: 'Pendidikan',
    datePublished: '2026-11-03T08:00:00+07:00', dateModified: '2026-11-03T08:00:00+07:00',
    dateDisplay: '3 November 2026', readTime: '15 menit baca',
    image: {
      file: 'Dokumentasi/museum-gunung-merapi-anak-sekolah-kunjungan-museum-foto-bersama-047.webp', w: 2000, h: 1500,
      alt: 'Rombongan anak dan pendamping YUKA berfoto bersama pada kunjungan edukatif ke museum',
      caption: 'Dokumentasi kunjungan edukatif YUKA. Foto ini menggambarkan kegiatan bersama dan bukan bukti status akreditasi inklusif suatu sekolah.',
      credit,
    },
    bodyHtml: body3.join('\n'), faq: faq3,
    related: [
      { href: '/artikel/pendidikan-inklusi', title: 'Pendidikan Inklusi', desc: 'Kerangka dasar prinsip akses, partisipasi, dan hasil belajar.' },
      { href: '/artikel/apa-perbedaan-sekolah-inklusi-dan-slb', title: 'Perbedaan Sekolah Inklusi dan SLB', desc: 'Membandingkan dua jalur layanan tanpa membuat hierarki nilai.' },
      { href: '/artikel/indikator-keberhasilan-sekolah-inklusi', title: 'Indikator Keberhasilan Sekolah Inklusi', desc: 'Hal yang dapat diperiksa untuk menilai pelaksanaan di satu sekolah.' },
    ],
    tags: ['PendidikanInklusif', 'HakDisabilitas', 'SekolahInklusi'],
    sources: [
      { url: 'https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/article-24-education.html', label: 'UN CRPD: Article 24 Education' },
      { url: 'https://www.unesco.org/gem-report/en/inclusion', label: 'UNESCO GEM Report 2020: Inclusion and education' },
      { url: 'https://www.unesco.org/en/inclusion-education', label: 'UNESCO: Inclusion in education' },
      { url: 'https://www.who.int/news-room/fact-sheets/detail/disability-and-health', label: 'WHO: Disability (fact sheet)' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 31 Oktober 2026 melalui UN, UNESCO, dan WHO. Angka global pada artikel ini tidak dapat dibaca sebagai angka Indonesia.',
  },
];

const SCHEDULE = [
  {
    slug: 'anak-abk-dan-bullying-cara-mencegah',
    file: 'artikel/anak-abk-dan-bullying-cara-mencegah.html',
    title: 'Anak ABK dan Bullying: Cara Mencegah di Sekolah dan di Rumah',
    description: 'Definisi perundungan menurut CDC, bentuk yang sering terlewat, tanda yang perlu dicek, serta langkah pencegahan di sekolah dan di rumah.',
    image: 'Dokumentasi/cpao-anak-anak-kelas-memasak-bersama-071.webp',
    category: 'Pendidikan',
    readTime: '15 menit baca',
    date: '2026-11-01',
  },
  {
    slug: 'cara-melatih-toilet-training-anak-abk',
    file: 'artikel/cara-melatih-toilet-training-anak-abk.html',
    title: 'Cara Melatih Toilet Training Anak ABK: Tanda Kesiapan dan Tahapannya',
    description: 'Tanda kesiapan menurut American Academy of Pediatrics, tahapan latihan di rumah, hambatan umum, dan kapan perlu konsultasi ke dokter.',
    image: 'Dokumentasi/16-feb-2026-siswa-abk-menyiapkan-makanan-dibawa-pulang-01.webp',
    category: 'Pendidikan',
    readTime: '15 menit baca',
    date: '2026-11-02',
  },
  {
    slug: 'mengapa-pendidikan-inklusi-penting',
    file: 'artikel/mengapa-pendidikan-inklusi-penting.html',
    title: 'Mengapa Pendidikan Inklusi Penting? Alasan, Bukti, dan Syaratnya',
    description: 'Dasar hak menurut CRPD pasal 24, data UNESCO dan WHO, manfaat untuk semua siswa, syarat pelaksanaan, hambatan, dan cara menilainya.',
    image: 'Dokumentasi/museum-gunung-merapi-anak-sekolah-kunjungan-museum-foto-bersama-047.webp',
    category: 'Pendidikan',
    readTime: '15 menit baca',
    date: '2026-11-03',
  },
];

function prepare() {
  fs.mkdirSync(path.join(ROOT, IMG), { recursive: true });
  for (const [file, markup] of Object.entries(diagrams)) {
    fs.writeFileSync(imgPath(file.replace(/\.webp$/, '.svg')), markup);
  }
  console.log(`Wrote ${Object.keys(diagrams).length} SVG diagrams into ${IMG}/`);
}

async function raster() {
  const sharp = require('D:/Projects/Creativism App/node_modules/sharp');
  for (const file of Object.keys(diagrams)) {
    const src = imgPath(file.replace(/\.webp$/, '.svg'));
    const buf = await sharp(fs.readFileSync(src), { density: 150 }).resize(1200, 760, { fit: 'fill' }).webp({ quality: 90 }).toBuffer();
    fs.writeFileSync(imgPath(file), buf);
    const { w, h } = imageSize(imgPath(file));
    console.log(`Rasterized ${file} (${w}x${h}, ${buf.length} bytes)`);
  }
}

function render() {
  for (const a of articles) {
    fs.writeFileSync(path.join(articleDir, `${a.slug}.html`), renderArticlePage(a));
    console.log(`Rendered artikel/${a.slug}.html`);
  }
}

function schedule() {
  fs.writeFileSync(path.join(ROOT, 'publish-schedule.json'), JSON.stringify(SCHEDULE, null, 2) + '\n');
  console.log(`Wrote publish-schedule.json with ${SCHEDULE.length} entries.`);
}

if (require.main === module) {
  if (process.argv.includes('--prepare')) prepare();
  else if (process.argv.includes('--raster')) raster();
  else if (process.argv.includes('--schedule')) schedule();
  else render();
}

module.exports = { articles, diagrams, SCHEDULE };

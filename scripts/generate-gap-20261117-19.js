'use strict';
/*
 * Generator artikel antrean 17, 18, dan 19 November 2026 (cycle #98 /cek-daily-artikel, runway kosong).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5":
 *   - baris 158 "token economy system untuk anak abk"     -> 15 Nov (dipindah dari 17 Nov: tambal hari kosong 15 Nov, arahan induk cycle 98)
 *   - baris 117 "pendidikan inklusi penuh vs parsial"     -> 18 Nov
 *   - baris 83  "social stories terapi autisme"          -> 19 Nov
 *   - baris 210 "peran ayah dalam pengasuhan anak abk"   -> 20 Nov (window guard 3 hari)
 * Ketiganya belum punya artikel sendiri (dicek terhadap artikel/*.html).
 *
 * Stok foto Dokumentasi habis, jadi foto memakai berkas Wikimedia Commons berlisensi
 * (CC BY-SA 4.0, CC BY 3.0) dengan subjek Indonesia dan kredit terlihat, tanpa potret dekat
 * satu anak di bawah judul diagnosis. Diagram SVG dari scripts/lib/diagram-svg.js (bukan AI).
 *
 *   node scripts/generate-gap-20261117-19.js --prepare   # tulis SVG diagram
 *   node scripts/generate-gap-20261117-19.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-gap-20261117-19.js [slug]      # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const CC = (page, by, lic, licUrl) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">${by}</a> / Wikimedia Commons, <a href="${licUrl}" target="_blank" rel="nofollow noopener">${lic}</a>.`;
const fig = (file, w, h, alt, caption, credit) => `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${credit}</span></figcaption></figure>`;
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const faqHtml = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;
const ext = (url, text) => `<a href="${url}" target="_blank" rel="nofollow noopener">${text}</a>`;
const table = (caption, head, rows) => `<div class="table-wrap"><table><caption>${caption}</caption><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;
const a = (slug, text) => `<a href="/artikel/${slug}">${text}</a>`;

const diagrams = {};
const addDiagram = (file, markup) => { diagrams[file] = markup; };

const BYSA4 = ['CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'];
const BY3 = ['CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0/'];

const URL_TOKEN_WP = 'https://en.wikipedia.org/wiki/Token_economy';
const URL_MATSON = 'https://pubmed.ncbi.nlm.nih.gov/18486442/';
const URL_INCL_WP = 'https://en.wikipedia.org/wiki/Inclusion_(education)';
const URL_PP13 = 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020';
const URL_UNESCO = 'https://www.unesco.org/en/inclusion-education';
const URL_SS_WP = 'https://en.wikipedia.org/wiki/Social_Stories';
const URL_GRAY = 'https://carolgraysocialstories.com/social-stories/what-is-it/';

// ---------------------------------------------------------------------------
// Artikel 1: token economy untuk anak ABK (17 Nov 2026)
// ---------------------------------------------------------------------------
const T_HERO = 'https://commons.wikimedia.org/wiki/File:Afrizal_menerangkan_pelajaran.jpg';
const T_PRAMUKA = 'https://commons.wikimedia.org/wiki/File:Praja_Muda_Karana.jpg';
const T_TENDA = 'https://commons.wikimedia.org/wiki/File:Semangat_Mencerdaskan_Anak_Bangsa.jpg';

const tSections = [
  ['pengertian', 'Apa itu token economy'],
  ['komponen', 'Komponen sistem token'],
  ['bukti', 'Apa kata penelitian'],
  ['langkah', 'Langkah menyusun token economy di kelas'],
  ['contoh', 'Contoh papan token dan penukaran'],
  ['rumah', 'Menyambungkan sekolah dan rumah'],
  ['memudar', 'Mengurangi token secara bertahap'],
  ['keliru', 'Kesalahan yang sering terjadi'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const tFaq = [
  { q: 'Apa itu token economy untuk anak ABK?', a: 'Token economy adalah sistem penguatan perilaku yang terencana. Anak menerima token, misalnya stiker, bintang, atau centang, setiap kali menunjukkan perilaku target yang sudah disepakati. Token itu kemudian ditukar dengan penguat cadangan seperti kegiatan yang disukai, waktu bermain, atau hak istimewa kecil di kelas.' },
  { q: 'Apa bedanya token economy dengan memberi hadiah biasa?', a: 'Hadiah biasa sering diberikan spontan menurut suasana hati orang dewasa. Token economy punya aturan tertulis: perilaku apa yang mendapat token, berapa token yang dibutuhkan, dan kapan token ditukar. Aturan yang sistematis itulah yang membedakannya, karena anak bisa memperkirakan apa yang terjadi setelah ia berusaha.' },
  { q: 'Pada usia berapa token economy bisa mulai dipakai?', a: 'Tidak ada patokan usia yang baku. Yang lebih menentukan adalah apakah anak sudah bisa memahami hubungan antara token dan penguat cadangan. Untuk anak yang baru belajar, mulailah dengan papan berisi sedikit token dan penukaran yang cepat, lalu perpanjang jarak penukaran secara bertahap.' },
  { q: 'Apakah token economy cocok untuk anak autis dan ADHD?', a: 'Sistem token sudah banyak diterapkan pada anak dengan disabilitas perkembangan, termasuk anak autis, dan sering dipakai di kelas pendidikan khusus. Meski begitu, setiap anak berbeda. Susun sistemnya berdasarkan pengamatan dan asesmen anak, lalu evaluasi hasilnya bersama guru pendamping atau terapis yang menangani anak.' },
  { q: 'Berapa banyak perilaku target yang sebaiknya dipakai?', a: 'Sebaiknya sedikit, misalnya satu sampai tiga perilaku yang paling penting. Terlalu banyak target membuat anak bingung dan guru kesulitan mencatat secara konsisten. Tulis perilaku dalam kalimat yang bisa diamati, misalnya duduk di kursi saat guru menjelaskan, bukan sekadar bersikap baik.' },
  { q: 'Bolehkah token diambil kembali saat anak melanggar aturan?', a: 'Sebagian program memakai pengurangan token, tetapi cara ini perlu dipertimbangkan dengan hati-hati karena dapat memicu frustrasi dan membuat anak kehilangan motivasi. Untuk awal penerapan di kelas inklusi, lebih aman fokus pada pemberian token untuk perilaku yang diharapkan, lalu tangani pelanggaran dengan cara yang sudah disepakati tim.' },
  { q: 'Kapan token economy perlu dihentikan?', a: 'Token economy sebaiknya tidak dipakai selamanya. Setelah perilaku target stabil, kurangi token secara bertahap, perpanjang jarak penukaran, dan ganti dengan pujian atau penguat alami. Tujuan akhirnya adalah anak tetap menunjukkan perilaku itu karena sudah menjadi kebiasaan, bukan karena menunggu token.' },
  { q: 'Bagaimana jika token economy tidak berhasil?', a: 'Periksa kembali penguat cadangannya, karena sering kali penguat itu tidak cukup menarik bagi anak. Periksa juga apakah target terlalu sulit, token diberikan tidak konsisten, atau jarak penukaran terlalu lama. Bila sudah disesuaikan tetapi tetap tidak ada perubahan, diskusikan dengan guru pendamping khusus atau terapis.' },
];

addDiagram(`${IMG}/token-economy-alur.webp`, svg.flow('Alur token economy di kelas', 'Dari perilaku target sampai penukaran', [
  { h: 'Tentukan target', d: 'Satu sampai tiga perilaku yang bisa diamati dan diukur.' },
  { h: 'Pilih token', d: 'Stiker, bintang, centang, atau keping yang mudah diberikan.' },
  { h: 'Daftar penguat', d: 'Kegiatan atau hak kecil yang benar-benar disukai anak.' },
  { h: 'Beri segera', d: 'Token diberikan tepat setelah perilaku, disertai pujian.' },
  { h: 'Tukar teratur', d: 'Jadwal penukaran jelas, awalnya cepat, lalu diperpanjang.' },
  { h: 'Evaluasi', d: 'Catat data mingguan, sesuaikan target dan penguat.' },
]));
addDiagram(`${IMG}/token-economy-papan.webp`, svg.grid('Contoh aturan papan token', 'Contoh untuk satu anak di kelas inklusi, disesuaikan hasil pengamatan', ['Perilaku target', 'Kapan token diberi', 'Penukaran'], [
  ['Duduk saat guru menjelaskan', 'Setiap selesai satu sesi penjelasan', '5 token: memilih kegiatan 10 menit'],
  ['Mengangkat tangan sebelum bicara', 'Setiap kali dilakukan', '5 token: membantu guru membagikan buku'],
  ['Menyelesaikan satu lembar tugas', 'Setelah tugas dikumpulkan', '5 token: waktu membaca buku favorit'],
  ['Merapikan meja sebelum pulang', 'Sekali di akhir hari', 'Dihitung untuk penukaran hari Jumat'],
], [400, 352, 352]));

const tBody = [
  p('<strong>Token economy system untuk anak ABK</strong> adalah cara terencana untuk membangun perilaku belajar dengan memberi token, misalnya stiker atau bintang, setiap kali anak menunjukkan perilaku yang sudah disepakati. Token yang terkumpul kemudian ditukar dengan sesuatu yang anak sukai. Kuncinya bukan pada stikernya, melainkan pada aturan yang jelas, konsisten, dan dipahami anak.'),
  p('Banyak guru dan orang tua sudah memakai stiker atau bintang tanpa menyebutnya token economy. Masalahnya, pemberiannya sering tidak teratur sehingga anak tidak tahu apa yang membuatnya mendapat bintang. Artikel ini membahas pengertian token economy, komponennya, apa kata penelitian, langkah menyusunnya di kelas inklusi, contoh papan token, dan cara menguranginya secara bertahap. Untuk sisi penguatan di rumah, baca juga ' + a('reward-system-efektif-untuk-anak-autis', 'reward system untuk anak autis') + '.'),
  toc(tSections),

  '<h2 id="pengertian">Apa itu token economy</h2>',
  p('Token economy adalah sistem pengelolaan perilaku yang didasarkan pada penguatan yang sistematis terhadap perilaku target. Penguatnya berupa simbol atau token yang kemudian dapat ditukar dengan penguat lain. ' + ext(URL_TOKEN_WP, 'Ensiklopedia Wikipedia') + ' mencatat bahwa token yang dipakai dalam praktik sangat beragam, mulai dari koin, centang, gambar bintang atau matahari kecil, sampai poin pada penghitung. Token itu hampir tidak bernilai di luar hubungan guru dan siswa, tetapi menjadi berharga karena bisa ditukar.'),
  p('Hal yang sering terlewat adalah unsur sistematis. Memberi stiker hanya karena guru merasa anak sedang bersikap baik belum termasuk token economy. Supaya sistem bekerja, kriterianya harus ditentukan dan jelas: perilaku apa yang dihargai, kapan token diberikan, berapa token yang dibutuhkan, dan apa yang bisa ditukar. Kejelasan ini sangat membantu anak berkebutuhan khusus yang lebih nyaman dengan aturan yang bisa diprediksi.'),
  p('Secara sejarah, sistem token modern berkembang di rumah sakit jiwa pada 1960-an dengan tokoh seperti Teodoro Ayllon dan Nathan Azrin, lalu diterapkan juga di sekolah, terutama dalam program pendidikan khusus. Di Indonesia, prinsip yang sama sering dipakai guru kelas inklusi dan terapis perilaku, termasuk dalam ' + a('terapi-aba', 'terapi ABA') + '.'),
  fig(`${IMG}/token-economy-pramuka.webp`, 1200, 540, 'Siswa sekolah dasar berseragam pramuka duduk di lantai halaman sekolah menghadap papan tulis putih bertuliskan materi lambang pramuka', 'Kegiatan belajar ekstrakurikuler pramuka untuk siswa SD kelas 1 sampai 3. Aturan yang jelas dan bisa diprediksi membantu banyak anak, termasuk anak berkebutuhan khusus, mengikuti kegiatan kelompok.', CC(T_PRAMUKA, 'DIRlarasati', ...BYSA4)),

  '<h2 id="komponen">Komponen sistem token</h2>',
  p('Sistem token yang berjalan baik selalu punya empat komponen. Kalau salah satunya kabur, anak cenderung kehilangan minat atau malah bingung. Tabel berikut merangkum komponen itu beserta contoh penerapannya di kelas inklusi.'),
  table('Empat komponen token economy dan contohnya di kelas', ['Komponen', 'Pengertian', 'Contoh di kelas inklusi'], [
    ['Perilaku target', 'Perilaku yang ingin ditingkatkan, ditulis agar bisa diamati', 'Mengangkat tangan sebelum bicara'],
    ['Token', 'Tanda yang diberikan segera setelah perilaku muncul', 'Stiker bintang di papan kecil milik anak'],
    ['Penguat cadangan', 'Hal yang bisa ditukar dengan token', 'Memilih kegiatan, membantu guru, membaca buku favorit'],
    ['Aturan penukaran', 'Jumlah token dan jadwal penukaran', 'Lima token ditukar setiap selesai jam pelajaran'],
  ]),
  p('Penguat cadangan adalah komponen yang paling menentukan. Token baru bermakna kalau penukarannya benar-benar diinginkan anak. Karena itu, daftar penguat sebaiknya disusun dari pengamatan: apa yang dipilih anak saat diberi kebebasan, kegiatan apa yang membuatnya bersemangat, atau peran apa yang ia banggakan. Penguat tidak harus barang. Hak kecil seperti duduk di dekat jendela, menjadi pemimpin barisan, atau memilih lagu sering lebih efektif dan tidak memakan biaya.'),

  '<h2 id="bukti">Apa kata penelitian</h2>',
  p('Token economy termasuk metode yang paling lama diteliti dalam pengelolaan perilaku. Tinjauan pustaka Matson dan Boisjoli yang terbit pada 2009 di jurnal ' + ext(URL_MATSON, 'Research in Developmental Disabilities') + ' secara khusus membahas pemakaian token economy pada anak dengan disabilitas intelektual dan autisme. Rangkuman ensiklopedis tentang topik ini menyebut sistem token telah dipakai untuk meningkatkan perhatian dan motivasi menyelesaikan tugas pada anak dengan disabilitas perkembangan, serta untuk mengurangi perilaku yang mengganggu.'),
  p('Di sekolah, sistem token banyak dipakai dalam program pendidikan khusus. Hasil yang dilaporkan antara lain perhatian yang meningkat dan perilaku mengganggu yang berkurang. Meski begitu, hasil penelitian tidak berarti sistem token pasti berhasil untuk setiap anak. Efeknya sangat bergantung pada pemilihan perilaku target, kualitas penguat, dan konsistensi pelaksanaan.'),
  p('Ada juga catatan kritis yang perlu dipahami. Sistem token yang dipakai terlalu lama tanpa rencana pengurangan bisa membuat anak hanya berperilaku baik saat ada imbalan. Itulah sebabnya rencana memudarkan token perlu disiapkan sejak awal, seperti dibahas di bagian akhir artikel ini. Untuk gambaran jenis intervensi perilaku lain, lihat ' + a('apa-saja-terapi-perilaku-untuk-autisme', 'apa saja terapi perilaku untuk autisme') + '.'),

  '<h2 id="langkah">Langkah menyusun token economy di kelas</h2>',
  diag(`${IMG}/token-economy-alur.webp`, 'Diagram enam langkah token economy: tentukan target, pilih token, daftar penguat, beri segera, tukar teratur, dan evaluasi', 'Enam langkah menyusun token economy. Langkah evaluasi menentukan apakah sistem perlu diubah.'),
  p('Berikut urutan yang bisa dipakai guru kelas bersama ' + a('gpk-adalah', 'guru pendamping khusus') + '. Langkah ini juga bisa dituliskan sebagai bagian dari ' + a('program-pembelajaran-individual', 'Program Pembelajaran Individual') + ' anak.'),
  ol([
    '<strong>Amati dulu.</strong> Catat selama beberapa hari kapan perilaku yang ingin ditingkatkan muncul dan kapan tidak. Data awal ini menjadi pembanding nanti.',
    '<strong>Pilih satu sampai tiga perilaku target.</strong> Tulis dalam kalimat positif yang bisa diamati, misalnya menyelesaikan satu lembar tugas, bukan jangan malas.',
    '<strong>Pilih bentuk token.</strong> Gunakan sesuatu yang mudah diberikan dengan cepat dan mudah dilihat anak, misalnya stiker pada papan kecil di mejanya.',
    '<strong>Susun daftar penguat cadangan.</strong> Libatkan anak memilih dari beberapa pilihan. Siapkan variasi agar penguat tidak cepat membosankan.',
    '<strong>Tentukan aturan penukaran.</strong> Untuk awal, buat penukaran cepat, misalnya setelah lima token. Anak perlu merasakan hubungan antara usaha dan hasil.',
    '<strong>Jelaskan dengan bahasa sederhana.</strong> Tunjukkan papan token, contoh perilaku, dan contoh penukaran. Gunakan gambar untuk anak yang belum lancar membaca.',
    '<strong>Laksanakan dengan konsisten.</strong> Semua orang dewasa di kelas memakai aturan yang sama. Token selalu disertai pujian yang menyebut perilakunya.',
    '<strong>Evaluasi setiap minggu.</strong> Bandingkan dengan data awal. Kalau tidak ada perubahan, periksa penguat, target, dan konsistensi.',
  ]),
  p('Konsistensi antarorang dewasa sering menjadi titik lemah. Kalau guru kelas memberi token tetapi guru mata pelajaran lain tidak, anak menerima pesan yang membingungkan. Sepakati aturan dalam rapat singkat tim, terutama di kelas yang menerapkan ' + a('co-teaching-dalam-kelas-inklusi', 'co-teaching') + '.'),

  '<h2 id="contoh">Contoh papan token dan penukaran</h2>',
  diag(`${IMG}/token-economy-papan.webp`, 'Tabel contoh aturan papan token berisi empat perilaku target, waktu pemberian token, dan bentuk penukarannya', 'Contoh aturan papan token untuk satu anak. Isi sebenarnya disesuaikan hasil pengamatan dan kesepakatan tim.'),
  p('Papan token bisa dibuat sangat sederhana: selembar kertas tebal berisi lima kotak, gambar penguat yang sedang diincar di ujungnya, dan stiker yang ditempel satu per satu. Untuk anak yang perlu dukungan visual, tempelkan juga gambar perilaku targetnya. Papan seperti ini bisa dipadukan dengan ' + a('cara-membuat-jadwal-visual-untuk-anak-autis', 'jadwal visual') + ' yang sudah dipakai di kelas.'),
  p('Perhatikan juga martabat anak. Papan token sebaiknya bersifat pribadi, misalnya di meja anak atau di buku penghubung, bukan papan besar yang membandingkan semua siswa. Papan peringkat terbuka berisiko mempermalukan anak yang sedang kesulitan. Di kelas inklusi, sistem token yang berlaku untuk seluruh kelas juga bisa dipakai, asalkan setiap anak punya target yang sesuai kemampuannya. Prinsip ini sejalan dengan ' + a('classroom-management-kelas-inklusi', 'manajemen kelas inklusi') + '.'),
  fig(`${IMG}/token-economy-kelas-tenda.webp`, 1200, 800, 'Guru SD berseragam batik berdiri mengajar di depan murid-murid berseragam putih merah yang duduk di bangku kayu di bawah tenda darurat', 'Seorang guru SD Negeri Gelang 07 di Jember, Jawa Timur, tetap mengajar di bawah tenda darurat setelah ruang kelas rusak karena bencana. Sistem token tidak membutuhkan sarana mahal, cukup aturan yang jelas dan konsisten.', CC(T_TENDA, 'Kang maman99', ...BYSA4)),

  '<h2 id="rumah">Menyambungkan sekolah dan rumah</h2>',
  p('Perilaku yang dilatih di sekolah lebih mudah menetap kalau rumah ikut mendukung. Namun, menyamakan seluruh sistem token di sekolah dan rumah tidak selalu perlu. Yang lebih penting adalah orang tua tahu perilaku apa yang sedang dilatih dan bisa memberi pujian yang sama di rumah.'),
  ul([
    '<strong>Buku penghubung.</strong> Guru menuliskan jumlah token hari itu dan satu perilaku yang berhasil. Orang tua membaca dan memuji anak di rumah.',
    '<strong>Penguat dari rumah.</strong> Sebagian keluarga memilih menambahkan penukaran mingguan di rumah, misalnya kegiatan bersama di akhir pekan.',
    '<strong>Bahasa yang sama.</strong> Kalimat pujian dan istilah perilaku target disamakan agar anak tidak bingung.',
    '<strong>Pertemuan berkala.</strong> Guru dan orang tua meninjau data bersama, seperti dibahas di artikel ' + a('peran-orang-tua-pendidikan-inklusi', 'peran orang tua dalam pendidikan inklusi') + '.',
  ]),
  p('Hindari menjadikan token sebagai alat ancaman di rumah, misalnya tidak boleh makan camilan kalau tidak dapat bintang di sekolah. Cara ini mengubah sistem penguatan menjadi hukuman dan dapat membuat anak cemas berangkat sekolah.'),

  '<h2 id="memudar">Mengurangi token secara bertahap</h2>',
  p('Tujuan akhir token economy bukan membuat anak bergantung pada stiker, melainkan membuat perilaku baik menjadi kebiasaan. Karena itu, rencana pengurangan token sebaiknya ditulis sejak awal. Mulailah ketika data menunjukkan perilaku target sudah stabil selama beberapa minggu.'),
  table('Contoh tahapan memudarkan token economy', ['Tahap', 'Yang diubah', 'Tanda siap ke tahap berikutnya'], [
    ['Awal', 'Token tiap perilaku, penukaran setelah 5 token', 'Perilaku muncul pada sebagian besar kesempatan'],
    ['Perpanjang', 'Penukaran setelah 10 token atau sekali sehari', 'Perilaku tetap stabil walau penukaran lebih jarang'],
    ['Selang', 'Token diberikan tidak setiap kali, tetapi pujian tetap', 'Anak tidak lagi menanyakan token'],
    ['Alami', 'Token dihentikan, diganti pujian dan penguat alami', 'Perilaku bertahan dalam kegiatan sehari-hari'],
  ]),
  p('Kalau perilaku menurun lagi saat token dikurangi, kembalilah satu tahap sebelumnya. Itu bukan kegagalan, melainkan tanda anak masih membutuhkan dukungan. Pantau juga apakah anak mulai menunjukkan perilaku yang sama di tempat lain tanpa token, misalnya saat ' + a('karyawisata-untuk-anak-berkebutuhan-khusus', 'karyawisata') + ' atau di rumah.'),

  '<h2 id="keliru">Kesalahan yang sering terjadi</h2>',
  ul([
    '<strong>Target terlalu banyak atau kabur.</strong> Anak tidak tahu persis apa yang harus dilakukan untuk mendapat token.',
    '<strong>Penguat tidak menarik.</strong> Daftar penguat dibuat orang dewasa tanpa melihat minat anak.',
    '<strong>Penukaran terlalu lama.</strong> Anak yang baru belajar perlu melihat hasil dengan cepat.',
    '<strong>Pemberian tidak konsisten.</strong> Kadang diberi, kadang lupa, sehingga hubungan perilaku dan token menjadi lemah.',
    '<strong>Token dijadikan hukuman.</strong> Mengambil token sembarangan membuat anak frustrasi dan berhenti berusaha.',
    '<strong>Tidak ada rencana memudarkan.</strong> Sistem berjalan bertahun-tahun dan anak hanya berperilaku baik demi imbalan.',
    '<strong>Membandingkan anak secara terbuka.</strong> Papan peringkat seluruh kelas berisiko mempermalukan anak berkebutuhan khusus.',
  ]),
  p('Kalau sistem sudah diperbaiki tetapi perilaku tidak berubah, mungkin ada faktor lain, misalnya kesulitan sensorik, kelelahan, atau materi yang terlalu sulit. Diskusikan dengan guru pendamping atau terapis, dan pertimbangkan ' + a('asesmen-abk', 'asesmen ABK') + ' untuk memahami kebutuhan anak lebih utuh. Strategi kelas lain bisa dibaca di ' + a('strategi-mengajar-anak-adhd-di-sekolah', 'strategi mengajar anak ADHD di sekolah') + ' dan ' + a('strategi-mengajar-anak-autis-di-kelas', 'strategi mengajar anak autis di kelas') + '.'),
  p('Kesimpulannya, token economy adalah alat sederhana yang bisa sangat membantu anak berkebutuhan khusus memahami perilaku apa yang diharapkan, asalkan dirancang dengan target yang jelas, penguat yang tepat, pemberian yang konsisten, dan rencana pengurangan. Untuk konsultasi tentang program pendidikan di YUKA, hubungi kami lewat halaman <a href="/kontak">kontak YUKA</a>.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqHtml(tFaq),
];

// ---------------------------------------------------------------------------
// Artikel 2: pendidikan inklusi penuh vs parsial (18 Nov 2026)
// ---------------------------------------------------------------------------
const I_HERO = 'https://commons.wikimedia.org/wiki/File:The_atmosphere_of_a_junior_high_school_classroom_in_Indonesia.jpg';
const I_ARRAHMAH = 'https://commons.wikimedia.org/wiki/File:TPW_717.jpg';
const I_MI = 'https://commons.wikimedia.org/wiki/File:MI_AL-KHOIRIYAH.jpg';

const iSections = [
  ['pengertian', 'Pengertian inklusi penuh dan parsial'],
  ['beda', 'Perbedaan utama keduanya'],
  ['spektrum', 'Bentuk layanan dari penuh sampai terpisah'],
  ['dasar', 'Dasar hak dan akomodasi di Indonesia'],
  ['memilih', 'Cara menentukan model yang tepat untuk anak'],
  ['sekolah', 'Yang perlu disiapkan sekolah'],
  ['orang-tua', 'Hal yang perlu ditanyakan orang tua'],
  ['jadwal', 'Contoh jadwal mingguan model parsial'],
  ['keliru', 'Salah kaprah tentang inklusi'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const iFaq = [
  { q: 'Apa yang dimaksud pendidikan inklusi penuh?', a: 'Pendidikan inklusi penuh adalah model ketika anak berkebutuhan khusus belajar di kelas reguler bersama teman sebayanya hampir sepanjang waktu, dengan dukungan yang dibawa ke dalam kelas. Dukungan itu bisa berupa guru pendamping, materi yang disesuaikan, alat bantu, atau penyesuaian penilaian.' },
  { q: 'Apa yang dimaksud pendidikan inklusi parsial?', a: 'Pendidikan inklusi parsial adalah model ketika anak berkebutuhan khusus belajar di kelas reguler pada sebagian waktu atau mata pelajaran, dan pada waktu lain mendapat layanan terpisah, misalnya di ruang sumber atau kelas khusus. Proporsinya disesuaikan dengan kebutuhan dan kemajuan anak.' },
  { q: 'Mana yang lebih baik, inklusi penuh atau parsial?', a: 'Tidak ada jawaban yang sama untuk semua anak. Model yang tepat adalah yang memungkinkan anak belajar bermakna, aman, dan tetap terhubung dengan teman sebaya. Banyak anak bisa berkembang di kelas reguler dengan dukungan yang cukup, sementara sebagian anak membutuhkan layanan terpisah pada waktu tertentu.' },
  { q: 'Apakah inklusi parsial sama dengan integrasi?', a: 'Tidak persis. Integrasi atau mainstreaming lebih menekankan anak menyesuaikan diri dengan kelas reguler. Inklusi menekankan kewajiban sekolah menyesuaikan diri dengan anak. Inklusi parsial tetap memakai cara berpikir inklusi, hanya saja sebagian layanan diberikan di luar kelas reguler karena kebutuhan anak.' },
  { q: 'Apakah model inklusi anak bisa berubah?', a: 'Bisa dan sebaiknya ditinjau berkala. Anak yang awalnya banyak belajar di ruang sumber bisa makin lama berada di kelas reguler ketika kemampuan dan dukungannya berkembang. Sebaliknya, pada masa tertentu anak mungkin butuh lebih banyak layanan terpisah. Keputusan sebaiknya diambil dalam pertemuan tim bersama orang tua.' },
  { q: 'Apa itu ruang sumber di sekolah inklusi?', a: 'Ruang sumber adalah ruang di sekolah reguler tempat anak berkebutuhan khusus mendapat layanan tambahan, misalnya pengajaran individual, latihan keterampilan tertentu, atau waktu menenangkan diri. Anak tetap terdaftar di kelas reguler dan kembali ke kelasnya setelah sesi selesai.' },
  { q: 'Siapa yang menentukan model inklusi untuk anak?', a: 'Idealnya ditentukan bersama oleh tim sekolah, yaitu kepala sekolah, guru kelas, guru pendamping khusus, dan orang tua, dengan masukan dari hasil asesmen dan tenaga profesional yang menangani anak. Kesepakatannya dituliskan dalam program pembelajaran individual dan ditinjau secara berkala.' },
  { q: 'Apakah sekolah reguler boleh menolak anak berkebutuhan khusus?', a: 'Penyandang disabilitas memiliki hak atas pendidikan, dan peraturan tentang akomodasi yang layak mewajibkan penyelenggara pendidikan memberikan penyesuaian yang diperlukan. Bila menghadapi penolakan, orang tua dapat meminta penjelasan tertulis, berdiskusi dengan dinas pendidikan setempat, atau mencari pendampingan dari lembaga yang memahami pendidikan inklusi.' },
];

addDiagram(`${IMG}/inklusi-penuh-parsial-spektrum.webp`, svg.cards('Spektrum layanan pendidikan ABK', 'Dari kelas reguler penuh sampai layanan terpisah', [
  { h: 'Inklusi penuh', color: '#2B3A67', items: ['Belajar di kelas reguler hampir sepanjang waktu', 'Dukungan dibawa ke dalam kelas', 'Guru pendamping, materi dan penilaian disesuaikan'] },
  { h: 'Inklusi parsial', color: '#00BCD4', items: ['Sebagian waktu di kelas reguler', 'Sebagian di ruang sumber atau kelas khusus', 'Porsi ditinjau berkala sesuai kemajuan'] },
  { h: 'Layanan terpisah', color: '#E53935', items: ['Belajar di kelas atau sekolah khusus', 'Kegiatan bersama teman reguler terbatas', 'Dipilih bila kebutuhan sangat intensif'] },
]));
addDiagram(`${IMG}/inklusi-penuh-parsial-keputusan.webp`, svg.flow('Langkah menentukan model inklusi', 'Keputusan diambil tim bersama orang tua dan ditinjau berkala', [
  { h: 'Asesmen anak', d: 'Kemampuan akademik, komunikasi, sensorik, dan perilaku.' },
  { h: 'Tujuan belajar', d: 'Apa yang ingin dicapai anak semester ini.' },
  { h: 'Dukungan tersedia', d: 'Guru pendamping, ruang sumber, alat bantu sekolah.' },
  { h: 'Rancang jadwal', d: 'Bagian kelas reguler dan bagian layanan terpisah.' },
  { h: 'Tulis di PPI', d: 'Kesepakatan dicatat dan ditandatangani bersama.' },
  { h: 'Tinjau berkala', d: 'Porsi kelas reguler disesuaikan dengan kemajuan.' },
]));

const iBody = [
  p('<strong>Pendidikan inklusi penuh vs parsial</strong> membedakan seberapa banyak waktu anak berkebutuhan khusus belajar di kelas reguler. Pada inklusi penuh, anak belajar bersama teman sebayanya hampir sepanjang waktu dengan dukungan yang dibawa ke dalam kelas. Pada inklusi parsial, anak belajar di kelas reguler pada sebagian waktu dan mendapat layanan terpisah pada waktu lain, misalnya di ruang sumber.'),
  p('Pertanyaan penuh atau parsial sering muncul saat orang tua mencari sekolah, atau saat sekolah mulai menerima siswa berkebutuhan khusus. Artikel ini membahas pengertian keduanya, perbedaannya, bentuk layanan di antara keduanya, dasar hak di Indonesia, dan cara menentukan model yang paling tepat untuk seorang anak. Pengantar umum tentang topik ini ada di artikel ' + a('pendidikan-inklusi', 'pendidikan inklusi') + ' dan ' + a('mengapa-pendidikan-inklusi-penting', 'mengapa pendidikan inklusi penting') + '.'),
  toc(iSections),

  '<h2 id="pengertian">Pengertian inklusi penuh dan parsial</h2>',
  p('Inklusi dalam pendidikan berangkat dari gagasan bahwa setiap anak berhak berpartisipasi di sekolah, dan sekolah berkewajiban menerima serta menyesuaikan diri dengan anak. ' + ext(URL_INCL_WP, 'Rangkuman ensiklopedis tentang inklusi pendidikan') + ' membedakan gagasan ini dari model integrasi atau mainstreaming yang lebih dulu berkembang, yang menekankan anak menyesuaikan diri dengan kelas reguler.'),
  p('Istilah <strong>inklusi penuh</strong> merujuk pada gagasan bahwa semua anak, termasuk anak dengan disabilitas berat, dapat dan sebaiknya belajar di kelas reguler. Dukungan apa pun yang dibutuhkan, seperti pendamping, alat bantu, atau program individual, dibawa ke dalam kelas, bukan dengan mengeluarkan anak dari kelas.'),
  p('<strong>Inklusi parsial</strong> adalah bentuk ketika anak tetap menjadi bagian dari kelas reguler, tetapi pada waktu tertentu mendapat layanan di luar kelas. Contohnya, anak mengikuti pelajaran seni, olahraga, dan kegiatan kelas bersama teman, lalu belajar membaca permulaan secara individual di ruang sumber. Di Indonesia, banyak sekolah penyelenggara pendidikan inklusif menjalankan variasi dari model ini, tergantung tenaga dan sarana yang tersedia.'),
  fig(`${IMG}/inklusi-penuh-parsial-arrahmah.webp`, 1200, 800, 'Beberapa siswa berseragam putih duduk di bangku kayu membaca buku tebal di kelas, didampingi seorang guru perempuan berkerudung', 'Kegiatan belajar di Lembaga Pendidikan Islam Arrahmah, Pontianak, yang memfasilitasi anak penyandang tunanetra untuk mengenyam pendidikan umum dan agama. Layanan khusus seperti ini bisa menjadi bagian dari model parsial atau terpisah.', CC(I_ARRAHMAH, 'Tripandito', ...BYSA4)),

  '<h2 id="beda">Perbedaan utama keduanya</h2>',
  p('Perbedaan inklusi penuh dan parsial tidak hanya soal jam pelajaran. Keduanya membawa konsekuensi pada peran guru, tata ruang, penilaian, dan pengalaman sosial anak. Tabel berikut merangkum perbedaan yang paling sering dirasakan di sekolah.'),
  table('Perbandingan pendidikan inklusi penuh dan parsial', ['Aspek', 'Inklusi penuh', 'Inklusi parsial'], [
    ['Tempat belajar utama', 'Kelas reguler hampir sepanjang waktu', 'Kelas reguler ditambah ruang sumber atau kelas khusus'],
    ['Bentuk dukungan', 'Dibawa ke dalam kelas', 'Sebagian di kelas, sebagian di luar kelas'],
    ['Peran guru kelas', 'Sangat besar, merancang pembelajaran untuk semua', 'Berbagi peran dengan guru di ruang sumber'],
    ['Peran guru pendamping', 'Mendampingi di dalam kelas', 'Mendampingi dan memberi layanan individual'],
    ['Interaksi dengan teman', 'Paling banyak', 'Tetap ada, tetapi berkurang pada jam terpisah'],
    ['Kebutuhan sarana', 'Penyesuaian kelas reguler', 'Kelas reguler ditambah ruang sumber'],
  ]),
  p('Inklusi penuh memberi kesempatan interaksi sosial paling besar, tetapi menuntut kesiapan guru kelas dan dukungan yang memadai. Inklusi parsial memberi ruang untuk layanan intensif, tetapi berisiko membuat anak merasa sebagai tamu di kelasnya sendiri kalau jadwal keluar masuk tidak diatur dengan baik. Kedua risiko itu bisa dikurangi dengan perencanaan, misalnya lewat ' + a('co-teaching-dalam-kelas-inklusi', 'co-teaching') + ' dan ' + a('peer-tutoring-di-kelas-inklusi', 'peer tutoring') + '.'),

  '<h2 id="spektrum">Bentuk layanan dari penuh sampai terpisah</h2>',
  diag(`${IMG}/inklusi-penuh-parsial-spektrum.webp`, 'Diagram tiga kartu: inklusi penuh di kelas reguler dengan dukungan di dalam kelas, inklusi parsial dengan sebagian waktu di ruang sumber, dan layanan terpisah di kelas atau sekolah khusus', 'Model layanan sebaiknya dilihat sebagai rentang, bukan dua pilihan yang kaku.'),
  p('Dalam praktik, penuh dan parsial lebih tepat dilihat sebagai rentang. Di satu ujung ada kelas reguler penuh dengan dukungan di dalam kelas. Di tengah ada berbagai kombinasi, misalnya kelas reguler dengan sesi ruang sumber dua kali seminggu, atau kelas reguler pada mata pelajaran tertentu saja. Di ujung lain ada layanan terpisah di kelas khusus atau ' + a('slb-adalah', 'sekolah luar biasa') + '.'),
  p('Posisi seorang anak dalam rentang itu tidak harus tetap. Anak yang baru pindah sekolah mungkin butuh lebih banyak waktu di ruang sumber untuk beradaptasi, lalu berangsur menambah waktu di kelas reguler. Perbedaan sekolah inklusi dan SLB dijelaskan lebih lengkap di artikel ' + a('apa-perbedaan-sekolah-inklusi-dan-slb', 'apa perbedaan sekolah inklusi dan SLB') + '.'),

  '<h2 id="dasar">Dasar hak dan akomodasi di Indonesia</h2>',
  p('Di Indonesia, hak anak berkebutuhan khusus atas pendidikan diperkuat oleh ' + ext(URL_PP13, 'Peraturan Pemerintah Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas') + '. Peraturan ini mengatur penyesuaian yang perlu diberikan lembaga penyelenggara pendidikan agar peserta didik penyandang disabilitas dapat belajar setara dengan yang lain. Penjelasan kebijakan secara lebih luas ada di artikel ' + a('kebijakan-pendidikan-inklusi-di-indonesia', 'kebijakan pendidikan inklusi di Indonesia') + '.'),
  p('Di tingkat global, ' + ext(URL_UNESCO, 'UNESCO') + ' menempatkan inklusi sebagai bagian dari hak setiap anak atas pendidikan yang bermutu. Artinya, pertanyaan utamanya bukan apakah anak layak masuk kelas reguler, melainkan dukungan apa yang perlu disiapkan agar anak bisa belajar di sana. Dari sudut pandang ini, inklusi parsial sebaiknya dipilih karena kebutuhan belajar anak, bukan karena sekolah belum mau menyesuaikan diri.'),
  fig(`${IMG}/inklusi-penuh-parsial-madrasah.webp`, 1200, 900, 'Gedung madrasah ibtidaiyah dua lantai bercat hijau dengan atap baja ringan di halaman depan, pagar besi, beberapa sepeda dan sepeda motor terparkir', 'Gedung Madrasah Ibtidaiyah Al-Khoiriyah di Desa Meluntur. Sekolah reguler di desa juga bisa menerapkan pendidikan inklusif selama dukungan dan akomodasinya direncanakan.', CC(I_MI, 'Ilmi Haqiqih', ...BYSA4)),

  '<h2 id="memilih">Cara menentukan model yang tepat untuk anak</h2>',
  diag(`${IMG}/inklusi-penuh-parsial-keputusan.webp`, 'Diagram enam langkah menentukan model inklusi: asesmen anak, tujuan belajar, dukungan yang tersedia, rancang jadwal, tulis di PPI, dan tinjau berkala', 'Langkah menentukan model inklusi bersama tim sekolah dan orang tua.'),
  p('Keputusan penuh atau parsial sebaiknya diambil berdasarkan data, bukan perkiraan. Urutan berikut bisa dipakai tim sekolah bersama orang tua.'),
  ol([
    '<strong>Mulai dari asesmen.</strong> Pahami kemampuan akademik, komunikasi, kebutuhan sensorik, dan perilaku anak. Panduan awalnya ada di ' + a('asesmen-abk-sebelum-masuk-sekolah', 'asesmen ABK sebelum masuk sekolah') + '.',
    '<strong>Rumuskan tujuan belajar.</strong> Apa yang ingin dicapai anak semester ini, baik akademik maupun sosial.',
    '<strong>Petakan dukungan yang tersedia.</strong> Apakah ada guru pendamping, ruang sumber, alat bantu, dan guru yang sudah mendapat pelatihan.',
    '<strong>Rancang jadwal.</strong> Tentukan bagian mana yang dijalani di kelas reguler dan bagian mana yang membutuhkan layanan terpisah.',
    '<strong>Tuliskan dalam PPI.</strong> Kesepakatan dicatat di ' + a('program-pembelajaran-individual', 'Program Pembelajaran Individual') + ' agar semua pihak memegang rencana yang sama.',
    '<strong>Tinjau berkala.</strong> Setiap semester, lihat kembali apakah porsi kelas reguler bisa ditambah atau perlu disesuaikan.',
  ]),
  p('Satu prinsip yang membantu: utamakan waktu di kelas reguler, lalu tambahkan layanan terpisah hanya untuk kebutuhan yang memang tidak bisa dipenuhi di dalam kelas. Prinsip ini menjaga anak tetap menjadi bagian dari kelasnya.'),

  '<h2 id="sekolah">Yang perlu disiapkan sekolah</h2>',
  p('Model apa pun yang dipilih hanya berjalan baik kalau sekolah menyiapkan beberapa hal dasar. Tanpa persiapan, inklusi penuh mudah berubah menjadi anak yang sekadar duduk di kelas tanpa belajar, dan inklusi parsial mudah berubah menjadi pemisahan terselubung.'),
  ul([
    '<strong>Guru yang terlatih.</strong> Guru kelas memahami cara menyesuaikan materi dan penilaian. Lihat ' + a('pelatihan-guru-inklusi', 'pelatihan guru inklusi') + '.',
    '<strong>Guru pendamping khusus.</strong> Peran dan pembagian tugasnya jelas, dijelaskan di ' + a('gpk-adalah', 'GPK adalah') + '.',
    '<strong>Ruang sumber atau sudut tenang.</strong> Diperlukan terutama untuk model parsial dan untuk anak yang butuh waktu menenangkan diri.',
    '<strong>Rapat tim berkala.</strong> Guru kelas, guru pendamping, dan orang tua bertemu untuk meninjau kemajuan.',
    '<strong>Budaya kelas yang menerima.</strong> Teman sekelas dipersiapkan untuk menerima perbedaan, bukan sekadar diminta memaklumi.',
  ]),
  p('Sekolah juga bisa mengukur kesiapannya dengan ' + a('indikator-keberhasilan-sekolah-inklusi', 'indikator keberhasilan sekolah inklusi') + ', sehingga perbaikan bisa dilakukan berdasarkan data.'),

  '<h2 id="orang-tua">Hal yang perlu ditanyakan orang tua</h2>',
  p('Saat mengunjungi sekolah, orang tua bisa memakai pertanyaan berikut untuk melihat model inklusi yang sebenarnya dijalankan, bukan hanya yang tertulis di brosur.'),
  ul([
    'Berapa lama anak berkebutuhan khusus biasanya berada di kelas reguler setiap hari?',
    'Apakah ada guru pendamping khusus, dan berapa anak yang didampingi satu guru?',
    'Bagaimana materi dan penilaian disesuaikan untuk anak yang membutuhkan?',
    'Apakah ada ruang sumber, dan kapan anak menggunakannya?',
    'Seberapa sering sekolah bertemu orang tua untuk meninjau kemajuan anak?',
  ]),
  p('Jawaban yang jelas dan konkret biasanya tanda sekolah sudah berpengalaman. Pertimbangan lain saat memilih jalur pendidikan dibahas di ' + a('homeschooling-vs-sekolah-inklusi', 'homeschooling vs sekolah inklusi') + ' dan ' + a('anak-abk-harus-sekolah-dimana', 'anak ABK harus sekolah di mana') + '.'),

  '<h2 id="jadwal">Contoh jadwal mingguan model parsial</h2>',
  p('Supaya gambaran model parsial lebih konkret, berikut contoh jadwal mingguan untuk seorang siswa kelas rendah yang sedang belajar membaca permulaan. Contoh ini bersifat ilustrasi. Jadwal sebenarnya disusun tim sekolah berdasarkan asesmen dan tujuan dalam program pembelajaran individual anak.'),
  table('Contoh pembagian waktu kelas reguler dan ruang sumber dalam seminggu', ['Kegiatan', 'Tempat', 'Alasan'], [
    ['Upacara, olahraga, seni, dan istirahat', 'Bersama kelas reguler', 'Kesempatan berinteraksi dengan teman sebaya paling besar'],
    ['Matematika dan tematik', 'Kelas reguler dengan guru pendamping', 'Materi disesuaikan, anak tetap mengikuti kegiatan kelas'],
    ['Membaca permulaan, tiga kali seminggu', 'Ruang sumber, sesi singkat', 'Butuh pengajaran individual yang intensif'],
    ['Waktu menenangkan diri bila perlu', 'Sudut tenang atau ruang sumber', 'Membantu anak kembali siap belajar'],
  ]),
  p('Perhatikan bahwa sesi di ruang sumber dibuat singkat dan dijadwalkan pada jam yang tidak bertabrakan dengan kegiatan sosial penting, seperti istirahat atau pelajaran olahraga. Pengaturan ini menjaga anak tetap merasa menjadi bagian dari kelasnya. Guru kelas juga perlu tahu apa yang dipelajari anak di ruang sumber, supaya keterampilan itu bisa dilatih lagi di dalam kelas. Setiap akhir semester, tim meninjau apakah sesi terpisah masih dibutuhkan, dikurangi, atau diganti dengan dukungan di dalam kelas. Bila hasil tinjauan menunjukkan anak sudah mampu mengikuti pelajaran membaca bersama teman dengan sedikit bantuan, porsi ruang sumber dapat dikurangi secara bertahap.'),

  '<h2 id="keliru">Salah kaprah tentang inklusi</h2>',
  ul([
    '<strong>Inklusi penuh berarti tanpa dukungan.</strong> Justru sebaliknya, inklusi penuh membutuhkan dukungan paling terencana di dalam kelas.',
    '<strong>Inklusi parsial berarti setengah hati.</strong> Model parsial bisa sangat inklusif bila anak tetap menjadi bagian kelas dan layanan terpisahnya punya tujuan jelas.',
    '<strong>Model sekali ditentukan, berlaku selamanya.</strong> Kebutuhan anak berubah, jadi modelnya juga perlu ditinjau.',
    '<strong>Inklusi hanya urusan guru pendamping.</strong> Keberhasilan inklusi adalah tanggung jawab seluruh sekolah.',
  ]),
  p('Kesimpulannya, pilihan antara pendidikan inklusi penuh dan parsial sebaiknya dilihat sebagai keputusan yang disesuaikan dengan anak, bukan label untuk sekolah. Yang terpenting adalah anak belajar bermakna, aman, dan tetap terhubung dengan teman sebayanya. Untuk berdiskusi tentang layanan pendidikan di YUKA, kunjungi halaman <a href="/kontak">kontak YUKA</a>.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqHtml(iFaq),
];

// ---------------------------------------------------------------------------
// Artikel 3: social story untuk anak autis (19 Nov 2026)
// ---------------------------------------------------------------------------
const S_HERO = 'https://commons.wikimedia.org/wiki/File:Perpustakaan_Wahana_Menimba_Ilmu.jpg';
const S_MUPAT = 'https://commons.wikimedia.org/wiki/File:Beberapa_siswa_membaca_bersama_di_perpustakaan_Mupat.jpg';
const S_KELILING = 'https://commons.wikimedia.org/wiki/File:Membaca_Buku_bersama_Limbah_Pustaka.jpg';

const sSections = [
  ['pengertian', 'Apa itu social story'],
  ['manfaat', 'Untuk situasi apa social story dipakai'],
  ['kalimat', 'Jenis kalimat dalam social story'],
  ['langkah', 'Langkah menulis social story'],
  ['contoh', 'Contoh social story sederhana'],
  ['membacakan', 'Cara membacakan dan memakainya'],
  ['sekolah-rumah', 'Memakai social story di sekolah dan rumah'],
  ['bukti', 'Apa kata penelitian'],
  ['keliru', 'Kesalahan yang sering terjadi'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const sFaq = [
  { q: 'Apa itu social story untuk anak autis?', a: 'Social story adalah cerita pendek yang menjelaskan sebuah situasi sosial secara jelas dan tenang: apa yang terjadi, siapa yang terlibat, apa yang mungkin dipikirkan orang lain, dan apa yang bisa dilakukan anak. Konsep ini dikembangkan oleh Carol Gray pada 1991 untuk membantu individu autistik memahami situasi sosial.' },
  { q: 'Apa bedanya social story dengan cerita anak biasa?', a: 'Cerita anak biasa bertujuan menghibur dan sering memakai tokoh rekaan. Social story ditulis khusus untuk satu anak dan satu situasi nyata, dengan gaya dan format tertentu. Isinya fakta yang bisa diamati, bukan petualangan, dan nadanya meyakinkan, bukan menggurui.' },
  { q: 'Berapa panjang social story yang ideal?', a: 'Sesuaikan dengan kemampuan anak. Untuk anak kecil atau yang baru belajar membaca, beberapa kalimat dengan satu kalimat per halaman disertai gambar sering sudah cukup. Untuk anak yang lebih besar, cerita bisa lebih panjang dan rinci. Yang penting, cerita tetap fokus pada satu situasi.' },
  { q: 'Apakah social story harus memakai gambar?', a: 'Tidak wajib, tetapi sering membantu. Rangkuman tentang Social Stories menyebut satu kalimat per halaman yang dipasangkan dengan gambar dapat membantu anak fokus pada satu konsep, karena banyak individu autistik lebih mudah memahami informasi visual. Gambar bisa berupa foto tempat nyata atau gambar sederhana.' },
  { q: 'Kapan sebaiknya social story dibacakan?', a: 'Bacakan saat anak tenang, sebelum situasi yang dijelaskan terjadi, misalnya beberapa hari sebelum karyawisata atau sebelum hari pertama sekolah. Jangan membacakannya saat anak sedang meltdown atau marah, karena pada saat itu anak sulit menerima informasi baru.' },
  { q: 'Apakah social story bisa dipakai untuk anak non-autis?', a: 'Prinsipnya bisa dipakai untuk anak lain yang butuh penjelasan situasi sosial secara terstruktur. Namun, rangkuman penelitian menyebut efektivitas Social Stories pada kelompok selain individu autistik belum cukup diteliti. Pakai dengan pengamatan, dan evaluasi apakah anak benar-benar terbantu.' },
  { q: 'Siapa yang sebaiknya menulis social story?', a: 'Orang yang paling mengenal anak dan situasinya, misalnya orang tua, guru kelas, guru pendamping, atau terapis. Penulisan akan lebih tepat bila diawali pengamatan tentang apa yang membuat situasi itu sulit bagi anak. Melibatkan anak, sesuai kemampuannya, juga membantu cerita terasa miliknya sendiri.' },
  { q: 'Apakah social story bisa menggantikan terapi?', a: 'Tidak. Social story adalah salah satu alat bantu untuk memahami situasi sosial, bukan pengganti terapi atau pendampingan profesional. Social story paling bermanfaat bila dipakai bersama strategi lain yang sudah disepakati dengan guru, terapis, atau tenaga profesional yang menangani anak.' },
];

addDiagram(`${IMG}/social-story-kalimat.webp`, svg.grid('Jenis kalimat dalam social story', 'Disarikan dari format Social Stories yang dikembangkan Carol Gray', ['Jenis kalimat', 'Fungsinya', 'Contoh'], [
  ['Deskriptif', 'Fakta yang bisa diamati tentang situasi', 'Setiap pagi, kelas dimulai pukul tujuh.'],
  ['Perspektif', 'Pikiran atau perasaan orang lain', 'Bu guru senang kalau kami datang tepat waktu.'],
  ['Direktif', 'Pilihan tindakan, ditulis positif', 'Aku bisa menunggu giliran sambil duduk.'],
  ['Afirmatif', 'Menegaskan nilai atau aturan bersama', 'Ini cara yang baik dan aman.'],
  ['Kooperatif', 'Bantuan yang diberikan orang lain', 'Bu guru akan membantu kalau aku bingung.'],
], [260, 420, 424]));
addDiagram(`${IMG}/social-story-langkah.webp`, svg.flow('Langkah menulis social story', 'Dari pengamatan sampai evaluasi', [
  { h: 'Amati situasi', d: 'Kapan, di mana, dan bagian mana yang sulit bagi anak.' },
  { h: 'Tentukan tujuan', d: 'Membagikan informasi yang jelas, bukan memerintah.' },
  { h: 'Tulis dari sudut anak', d: 'Pakai kata aku dan bahasa yang sesuai usia.' },
  { h: 'Utamakan deskripsi', d: 'Lebih banyak kalimat fakta daripada kalimat arahan.' },
  { h: 'Tambah gambar', d: 'Foto tempat nyata atau gambar sederhana per halaman.' },
  { h: 'Baca dan evaluasi', d: 'Bacakan saat tenang, amati perubahan, lalu revisi.' },
]));

const sBody = [
  p('<strong>Social story untuk anak autis</strong> adalah cerita pendek yang menjelaskan satu situasi sosial secara jelas: apa yang terjadi, siapa yang terlibat, apa yang mungkin dipikirkan orang lain, dan apa yang bisa dilakukan anak. Konsep Social Stories dikembangkan oleh Carol Gray pada 1991 untuk membantu individu autistik memahami seluk-beluk komunikasi antarpribadi.'),
  p('Banyak kesulitan anak autis dalam situasi sosial muncul karena situasi itu membingungkan dan sulit diprediksi, bukan karena anak tidak mau bekerja sama. Social story membantu dengan membuat situasi itu lebih bisa dipahami. Artikel ini membahas pengertian social story, jenis kalimatnya, langkah menulis, contoh, cara membacakan, dan apa kata penelitian. Untuk dasar pemahaman autisme, baca ' + a('autisme-adalah', 'autisme adalah') + '.'),
  toc(sSections),

  '<h2 id="pengertian">Apa itu social story</h2>',
  p('Menurut ' + ext(URL_SS_WP, 'rangkuman ensiklopedis tentang Social Stories') + ', Social Stories dirancang sebagai alat untuk membantu individu autistik memahami nuansa komunikasi antarpribadi agar dapat berinteraksi secara efektif dan sesuai. Tujuannya adalah membagikan informasi yang sering disampaikan secara tidak langsung dalam pergaulan sehari-hari, sehingga anak lebih memahami apa yang terjadi di sekitarnya.'),
  p('Social story bukan sekadar cerita moral. Cerita ini memakai gaya dan format tertentu: kalimatnya jujur dan bisa diamati, sudut pandangnya biasanya dari anak, nadanya tenang dan meyakinkan, dan fokusnya pada satu situasi. Carol Gray juga menjelaskan konsep ini di situs resminya, ' + ext(URL_GRAY, 'Carol Gray Social Stories') + '.'),
  p('Dalam praktik di Indonesia, istilah ini sering diterjemahkan menjadi cerita sosial. Guru pendamping dan terapis banyak memakainya untuk menyiapkan anak menghadapi kegiatan baru, misalnya hari pertama sekolah, upacara bendera, atau kunjungan ke dokter. Social story juga sering dipakai bersama strategi lain dalam ' + a('social-skills-training-anak-autis', 'social skills training') + '.'),
  fig(`${IMG}/social-story-perpustakaan.webp`, 1200, 800, 'Beberapa siswi SD berkerudung merah duduk berdampingan membaca buku bergambar di perpustakaan sekolah dengan rak buku warna-warni di belakang', 'Siswa membaca bersama di perpustakaan sekolah. Membaca cerita bersama adalah kegiatan yang akrab bagi anak, sehingga social story mudah diterima sebagai bagian dari rutinitas.', CC(S_MUPAT, 'Caktuyul', ...BYSA4)),

  '<h2 id="manfaat">Untuk situasi apa social story dipakai</h2>',
  p('Social story paling berguna untuk situasi yang membuat anak bingung, cemas, atau sering memicu perilaku yang sulit. Beberapa situasi yang sering dibuatkan social story:'),
  ul([
    '<strong>Perubahan rutinitas.</strong> Guru berganti, jadwal pelajaran berubah, atau pindah kelas.',
    '<strong>Kegiatan baru.</strong> Hari pertama sekolah, karyawisata, atau ' + a('cara-membawa-anak-autis-ke-dokter-gigi', 'kunjungan ke dokter gigi') + '.',
    '<strong>Aturan sosial yang tidak tertulis.</strong> Menunggu giliran bicara, antre, atau meminjam barang teman.',
    '<strong>Situasi sensorik yang berat.</strong> Suara bel, keramaian di kantin, atau upacara di lapangan.',
    '<strong>Keterampilan kemandirian.</strong> Mencuci tangan sebelum makan atau naik kendaraan umum, seperti dibahas di ' + a('melatih-anak-abk-naik-transportasi-umum', 'melatih anak ABK naik transportasi umum') + '.',
  ]),
  p('Social story juga bisa dipakai untuk memuji. Cerita tentang hal yang sudah berhasil dilakukan anak membantu ia mengingat dan mengulanginya. Banyak praktisi menyarankan agar tidak semua social story berisi masalah, supaya anak tidak mengaitkan cerita dengan teguran.'),

  '<h2 id="kalimat">Jenis kalimat dalam social story</h2>',
  diag(`${IMG}/social-story-kalimat.webp`, 'Tabel jenis kalimat social story: deskriptif, perspektif, direktif, afirmatif, dan kooperatif, masing-masing dengan fungsi dan contoh kalimat', 'Lima jenis kalimat yang paling sering dipakai. Kalimat deskriptif sebaiknya paling banyak.'),
  p('Rangkuman tentang Social Stories mencatat tujuh jenis kalimat yang dapat dipakai, merujuk pada buku Carol Gray. Lima di antaranya paling sering dipakai dalam cerita sederhana:'),
  ul([
    '<strong>Deskriptif.</strong> Kalimat yang jujur, bisa diamati, bebas opini, dan menjelaskan faktor paling penting dalam situasi. Sering menjawab pertanyaan mengapa.',
    '<strong>Perspektif.</strong> Menggambarkan keadaan batin orang lain, misalnya pikiran, perasaan, atau keyakinan, agar anak memahami cara orang lain memandang kejadian.',
    '<strong>Direktif.</strong> Menyarankan pilihan tindakan dalam kalimat positif.',
    '<strong>Afirmatif.</strong> Menegaskan makna, nilai bersama, atau aturan agar anak merasa yakin.',
    '<strong>Kooperatif.</strong> Menjelaskan bantuan yang akan diberikan orang lain, sehingga respons orang dewasa menjadi konsisten.',
  ]),
  p('Dua jenis lainnya adalah kalimat kontrol, yaitu strategi pribadi yang ditulis anak sendiri setelah membaca cerita, dan kalimat parsial, yaitu kalimat dengan bagian kosong yang mengajak anak menebak langkah berikutnya. Prinsip penting yang sering ditekankan adalah memperbanyak kalimat deskriptif dan perspektif dibanding kalimat arahan, agar cerita terasa sebagai penjelasan, bukan perintah.'),

  '<h2 id="langkah">Langkah menulis social story</h2>',
  diag(`${IMG}/social-story-langkah.webp`, 'Diagram enam langkah menulis social story: amati situasi, tentukan tujuan, tulis dari sudut anak, utamakan deskripsi, tambah gambar, serta baca dan evaluasi', 'Enam langkah menulis social story dari pengamatan sampai evaluasi.'),
  ol([
    '<strong>Amati situasinya.</strong> Catat kapan dan di mana kesulitan muncul, serta bagian mana yang paling membingungkan anak.',
    '<strong>Tentukan tujuan.</strong> Tujuan utama adalah membagikan informasi yang jelas, bukan mengubah perilaku dengan paksa.',
    '<strong>Tulis dari sudut pandang anak.</strong> Gunakan kata aku dan bahasa yang sesuai usia serta kemampuan bahasanya.',
    '<strong>Utamakan kalimat deskriptif.</strong> Jelaskan dulu apa yang terjadi dan mengapa, baru tambahkan satu atau dua pilihan tindakan.',
    '<strong>Tambahkan gambar.</strong> Foto tempat nyata atau gambar sederhana, satu konsep per halaman.',
    '<strong>Baca, amati, dan perbaiki.</strong> Perhatikan respons anak dan revisi cerita bila ada bagian yang tidak dipahami.',
  ]),
  p('Pilih kata dengan hati-hati. Hindari kata selalu dan tidak pernah, karena anak autis bisa memahaminya secara harfiah. Lebih aman menulis biasanya atau sering kali. Hindari juga nada mengancam. Kalimat seperti kalau aku berteriak, aku akan dihukum tidak termasuk gaya social story.'),

  '<h2 id="contoh">Contoh social story sederhana</h2>',
  p('Berikut contoh social story untuk situasi upacara bendera hari Senin. Contoh ini hanya ilustrasi umum. Cerita untuk anak tertentu perlu disesuaikan dengan sekolah, jadwal, dan hal yang membuatnya cemas.'),
  table('Contoh social story: upacara bendera hari Senin', ['Halaman', 'Kalimat', 'Jenis kalimat'], [
    ['1', 'Setiap hari Senin, sekolahku mengadakan upacara bendera di lapangan.', 'Deskriptif'],
    ['2', 'Semua siswa dan guru berdiri berbaris. Biasanya upacara berlangsung tidak terlalu lama.', 'Deskriptif'],
    ['3', 'Kadang suara pengeras suara terdengar keras.', 'Deskriptif'],
    ['4', 'Bu guru tahu suara keras bisa membuatku tidak nyaman.', 'Perspektif'],
    ['5', 'Aku bisa berdiri di barisan dekat Bu guru pendamping.', 'Direktif'],
    ['6', 'Kalau suaranya terlalu keras, Bu guru akan membantuku memakai penutup telinga.', 'Kooperatif'],
    ['7', 'Berdiri dengan tenang saat upacara adalah cara menghormati bendera.', 'Afirmatif'],
  ]),
  p('Perhatikan bahwa sebagian besar kalimat menjelaskan situasi, dan hanya satu kalimat yang berisi arahan. Kalimat kooperatif juga mengikat orang dewasa untuk memberi bantuan yang sama setiap kali. Untuk anak yang kesulitan sensorik, strategi pendukung dibahas di ' + a('sensory-toys-terbaik-untuk-anak-autis', 'sensory toys untuk anak autis') + ' dan ' + a('cara-mengatasi-tantrum-anak-autis', 'cara mengatasi tantrum anak autis') + '.'),

  '<h2 id="membacakan">Cara membacakan dan memakainya</h2>',
  p('Cara membacakan sama pentingnya dengan isi cerita. Beberapa kebiasaan yang membantu:'),
  ul([
    '<strong>Pilih waktu yang tenang.</strong> Bacakan sebelum situasi terjadi, bukan saat anak sedang kesal.',
    '<strong>Ulangi secara teratur.</strong> Misalnya sekali sehari selama beberapa hari sebelum kegiatan baru.',
    '<strong>Libatkan orang lain.</strong> Guru, orang tua, dan pendamping memakai cerita dan bahasa yang sama.',
    '<strong>Biarkan anak memegang ceritanya.</strong> Cetak sebagai buku kecil atau simpan di tablet agar anak bisa membaca sendiri.',
    '<strong>Kurangi bertahap.</strong> Setelah anak nyaman, cerita bisa dibaca lebih jarang dan disimpan untuk pengingat.',
  ]),
  p('Social story bisa dipadukan dengan ' + a('jadwal-visual-anak-autis', 'jadwal visual') + ' dan ' + a('pecs-komunikasi-autis', 'PECS') + ' bagi anak yang memakai komunikasi berbasis gambar.'),
  fig(`${IMG}/social-story-pustaka-keliling.webp`, 1200, 800, 'Anak-anak SD berseragam merah putih membaca buku di halaman sekolah di sekitar mobil perpustakaan keliling hijau, beberapa duduk di lantai paving dan beberapa berdiri bersama ibu berkerudung', 'Perpustakaan keliling milik warga yang membagikan semangat literasi kepada anak sekolah. Kebiasaan membaca bersama memudahkan anak menerima cerita yang menjelaskan situasi sehari-hari.', CC(S_KELILING, 'Saputrariza', ...BYSA4)),

  '<h2 id="sekolah-rumah">Memakai social story di sekolah dan rumah</h2>',
  p('Social story bekerja paling baik bila orang dewasa di sekitar anak memakai cerita yang sama. Di sekolah, guru kelas dan guru pendamping bisa menyimpan salinan cerita di meja anak dan membacakannya beberapa menit sebelum kegiatan yang dijelaskan. Di rumah, orang tua bisa membacakan cerita yang sama pada malam sebelumnya. Dengan begitu, anak mendengar penjelasan yang konsisten dari dua tempat penting dalam hidupnya.'),
  p('Buku penghubung membantu menjaga kesinambungan ini. Guru menuliskan cerita apa yang sedang dipakai dan bagaimana respons anak, lalu orang tua menambahkan pengamatan dari rumah. Bila situasinya berubah, misalnya jadwal upacara dipindah atau guru pendamping berganti, ceritanya diperbarui bersama sebelum anak menghadapinya. Kalau anak memakai alat komunikasi khusus, sesuaikan cerita dengan alat itu, seperti dibahas di ' + a('aplikasi-komunikasi-aac-terbaik-untuk-anak', 'aplikasi komunikasi AAC') + '. Kerja sama sekolah dan rumah seperti ini juga menjadi bagian dari ' + a('peran-orang-tua-pendidikan-inklusi', 'peran orang tua dalam pendidikan inklusi') + '.'),

  '<h2 id="bukti">Apa kata penelitian</h2>',
  p('Social Stories cukup banyak diteliti sejak tulisan awal Carol Gray dan Joy Garand pada 1993 di jurnal Focus on Autistic Behavior. Namun, hasil penelitian tidak seragam. Social story umumnya dipandang sebagai alat pendukung yang mudah dibuat dan aman, tetapi efeknya berbeda antaranak dan bergantung pada cara cerita ditulis dan dipakai.'),
  p('Rangkuman ensiklopedis juga mencatat bahwa efektivitas Social Stories pada kelompok selain individu autistik belum cukup diteliti. Karena itu, perlakukan social story sebagai bagian dari rencana dukungan yang lebih luas, lalu amati apakah anak benar-benar terbantu. Catat situasi sebelum dan sesudah cerita dipakai, misalnya seberapa sering anak cemas menjelang kegiatan tersebut.'),
  p('Bila kesulitan sosial anak sangat mengganggu belajar atau keseharian, diskusikan dengan tenaga profesional. Pilihan intervensi lain dibahas di ' + a('apa-saja-terapi-perilaku-untuk-autisme', 'apa saja terapi perilaku untuk autisme') + ' dan ' + a('cara-melatih-social-skills-anak-autis-di-rumah', 'cara melatih social skills anak autis di rumah') + '.'),

  '<h2 id="keliru">Kesalahan yang sering terjadi</h2>',
  ul([
    '<strong>Terlalu banyak perintah.</strong> Cerita berubah menjadi daftar larangan dan anak merasa ditegur.',
    '<strong>Membahas banyak situasi sekaligus.</strong> Satu cerita sebaiknya fokus pada satu situasi.',
    '<strong>Bahasa terlalu sulit.</strong> Kalimat panjang dan istilah abstrak membuat anak kehilangan inti cerita.',
    '<strong>Dibacakan saat krisis.</strong> Anak yang sedang meltdown tidak siap menerima informasi.',
    '<strong>Isi tidak sesuai kenyataan.</strong> Cerita menjanjikan bantuan yang ternyata tidak diberikan, sehingga anak kehilangan kepercayaan.',
    '<strong>Tidak pernah dievaluasi.</strong> Cerita dipakai terus tanpa melihat apakah anak terbantu.',
  ]),
  p('Kesimpulannya, social story untuk anak autis adalah cara sederhana untuk membuat situasi sosial lebih mudah dipahami. Kekuatannya ada pada kalimat yang jujur dan tenang, sudut pandang anak, fokus pada satu situasi, dan pemakaian yang konsisten oleh orang-orang di sekitarnya. Untuk konsultasi tentang pendampingan anak di YUKA, hubungi kami lewat halaman <a href="/kontak">kontak YUKA</a>.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqHtml(sFaq),
];

// ---------------------------------------------------------------------------
// Artikel 4: peran ayah dalam pengasuhan anak ABK (20 Nov 2026)
// Keyword: tab "Riset Keyword Batch 5" baris 210 "peran ayah dalam pengasuhan anak abk".
// ---------------------------------------------------------------------------
const A_HERO = 'https://commons.wikimedia.org/wiki/File:Potret_Keluarga_Cemara_Bermain_Gelembung_Sabun_di_Taman_Ahmad_Yani.jpg';
const A_PANTAI = 'https://commons.wikimedia.org/wiki/File:Bermain_bersama_keluarga_ditepi_pantai.jpg';
const A_TAMAN = 'https://commons.wikimedia.org/wiki/File:Area_Bermain_Anak-anak_di_Kebon_Rojo_Jombang-1.jpg';
const BY4 = ['CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0/'];
const BY3B = ['CC BY 3.0', 'https://creativecommons.org/licenses/by/3.0/'];
const URL_NC = 'https://nurturing-care.org/';
const URL_WHO_NC = 'https://www.who.int/publications/i/item/9789241514064';

const aSections = [
  ['mengapa', 'Mengapa peran ayah penting'],
  ['bentuk', 'Bentuk keterlibatan ayah sehari-hari'],
  ['pembagian', 'Berbagi peran dengan ibu'],
  ['sekolah', 'Ayah dalam urusan sekolah dan terapi'],
  ['hambatan', 'Hambatan yang sering dialami ayah'],
  ['mulai', 'Langkah kecil untuk memulai'],
  ['kegiatan', 'Contoh kegiatan ayah dan anak'],
  ['emosi', 'Menjaga kesehatan emosi ayah'],
  ['keliru', 'Kesalahan yang sering terjadi'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const aFaq = [
  { q: 'Apa saja peran ayah dalam pengasuhan anak ABK?', a: 'Peran ayah mencakup pengasuhan harian, bermain dan menemani belajar, ikut mengambil keputusan tentang sekolah dan terapi, mendukung pasangan secara emosional, dan menjadi teladan bagi anak. Peran ini bukan pelengkap. Ayah adalah pengasuh yang setara, sehingga keterlibatannya ikut menentukan suasana keluarga dan kemajuan anak.' },
  { q: 'Bagaimana jika ayah bekerja jauh atau pulang larut?', a: 'Keterlibatan tidak selalu diukur dari lamanya waktu. Ayah yang bekerja jauh bisa tetap terlibat lewat panggilan video rutin, mengikuti kabar dari sekolah atau terapis, membaca catatan perkembangan anak, dan memegang satu kegiatan tetap saat pulang, misalnya mengantar sekolah atau bermain di akhir pekan.' },
  { q: 'Apakah ayah perlu ikut sesi terapi anak?', a: 'Sangat dianjurkan, setidaknya sesekali. Dengan melihat langsung, ayah memahami strategi yang dipakai terapis dan bisa melanjutkannya di rumah. Bila jadwal kerja tidak memungkinkan, minta terapis membagikan catatan singkat atau rekaman contoh latihan yang bisa dipraktikkan bersama anak.' },
  { q: 'Bagaimana ayah bisa membantu ibu yang kelelahan?', a: 'Ambil alih tugas tertentu secara penuh, bukan hanya membantu sesekali. Contohnya memegang rutinitas mandi dan tidur, mengurus jadwal terapi, atau menemani anak di akhir pekan agar ibu bisa beristirahat. Dengarkan juga cerita pasangan tanpa langsung memberi solusi, karena dukungan emosional sama pentingnya.' },
  { q: 'Apakah wajar jika ayah sulit menerima kondisi anak?', a: 'Wajar. Banyak ayah merasakan sedih, bingung, atau menyangkal saat pertama mengetahui kondisi anak, hanya saja sering tidak diungkapkan. Perasaan itu perlu diakui, bukan dipendam. Berbicara dengan pasangan, sesama ayah dari anak ABK, atau konselor bisa membantu ayah melewati masa penerimaan.' },
  { q: 'Kegiatan apa yang cocok dilakukan ayah bersama anak ABK?', a: 'Pilih kegiatan yang disukai anak dan sesuai kemampuannya, misalnya bermain di taman, berjalan pagi, bermain bola sederhana, merakit balok, atau membantu pekerjaan rumah yang ringan. Yang penting bukan jenis kegiatannya, melainkan kehadiran yang rutin, sabar, dan menyenangkan bagi anak.' },
  { q: 'Bagaimana jika ayah dan ibu berbeda pendapat soal pengasuhan?', a: 'Bicarakan saat anak tidak ada dan suasana tenang. Mulailah dari tujuan yang sama, yaitu kebaikan anak, lalu cari kesepakatan tentang aturan dan cara merespons perilaku tertentu. Bila perlu, ajak guru, terapis, atau konselor keluarga sebagai penengah agar keputusan didasarkan pada kebutuhan anak.' },
  { q: 'Di mana ayah bisa mencari dukungan?', a: 'Dukungan bisa datang dari pasangan, keluarga besar, sesama orang tua di sekolah atau tempat terapi, komunitas orang tua anak berkebutuhan khusus, dan konselor atau psikolog. Banyak ayah merasa lebih ringan setelah bertemu ayah lain yang mengalami hal serupa, karena mereka saling memahami tanpa perlu banyak penjelasan.' },
];

addDiagram(`${IMG}/peran-ayah-bentuk.webp`, svg.cards('Empat bentuk keterlibatan ayah', 'Keterlibatan tidak harus besar, yang penting rutin', [
  { h: 'Harian', color: '#2B3A67', items: ['Memegang satu rutinitas tetap', 'Mandi, makan, atau menidurkan', 'Mengantar ke sekolah'] },
  { h: 'Bermain', color: '#00BCD4', items: ['Bermain sesuai minat anak', 'Kegiatan fisik di luar rumah', 'Membaca atau merakit balok'] },
  { h: 'Keputusan', color: '#E53935', items: ['Ikut asesmen dan rapat sekolah', 'Memahami program terapi', 'Ikut merencanakan keuangan'] },
  { h: 'Dukungan', color: '#2B3A67', items: ['Menjadi tempat cerita pasangan', 'Berbagi tugas secara adil', 'Menjaga kesehatan emosi sendiri'] },
]));
addDiagram(`${IMG}/peran-ayah-mulai.webp`, svg.flow('Langkah kecil ayah untuk memulai', 'Mulai dari satu kebiasaan, lalu tambah perlahan', [
  { h: 'Kenali anak', d: 'Pelajari kekuatan, minat, dan pemicu kesulitan anak.' },
  { h: 'Pilih satu tugas', d: 'Ambil alih satu rutinitas harian secara penuh.' },
  { h: 'Jadwalkan bermain', d: 'Waktu khusus berdua, singkat tetapi rutin.' },
  { h: 'Hadir di sekolah', d: 'Ikut minimal satu pertemuan guru atau terapis.' },
  { h: 'Bicara dengan pasangan', d: 'Evaluasi pembagian tugas setiap pekan.' },
  { h: 'Cari teman sesama ayah', d: 'Bergabung dengan komunitas orang tua ABK.' },
]));

const aBody = [
  p('<strong>Peran ayah dalam pengasuhan anak ABK</strong> sama pentingnya dengan peran ibu. Ayah bukan sekadar pencari nafkah atau pembantu sesekali, melainkan pengasuh yang ikut hadir dalam rutinitas harian, bermain, mengambil keputusan tentang sekolah dan terapi, serta mendukung pasangan. Keterlibatan ayah yang rutin membantu anak merasa aman dan meringankan beban keluarga.'),
  p('Di banyak keluarga, pengasuhan anak berkebutuhan khusus masih banyak dipikul ibu. Ibu yang mengantar terapi, berbicara dengan guru, dan mengurus kebutuhan harian, sementara ayah bekerja dan baru terlibat saat ada masalah besar. Artikel ini membahas mengapa peran ayah penting, bentuk keterlibatan yang realistis, cara berbagi peran, hambatan yang sering dialami ayah, dan langkah kecil untuk memulai. Pembahasan dukungan keluarga secara umum ada di artikel ' + a('dukungan-keluarga-anak-abk', 'dukungan keluarga anak ABK') + '.'),
  toc(aSections),

  '<h2 id="mengapa">Mengapa peran ayah penting</h2>',
  p('Kerangka ' + ext(URL_WHO_NC, 'Nurturing Care for Early Childhood Development') + ' yang diterbitkan WHO bersama mitranya menjelaskan bahwa anak membutuhkan pengasuhan yang menyeluruh: kesehatan yang baik, gizi yang cukup, pengasuhan yang responsif, kesempatan belajar sejak dini, serta rasa aman dan keselamatan. Kerangka ini ditujukan kepada para pengasuh anak, dan ayah termasuk di dalamnya. Penjelasan ringkasnya juga tersedia di situs ' + ext(URL_NC, 'Nurturing Care Framework') + '.'),
  p('Bagi anak berkebutuhan khusus, pengasuhan yang responsif berarti orang dewasa di sekitarnya memahami sinyal dan kebutuhannya, lalu menanggapinya dengan tepat. Semakin banyak pengasuh yang memahami anak, semakin konsisten respons yang ia terima. Ayah yang mengenal cara anak berkomunikasi, apa yang menenangkannya, dan apa yang memicu kesulitannya akan membuat rumah terasa lebih bisa diprediksi bagi anak.'),
  p('Keterlibatan ayah juga berdampak pada keluarga secara keseluruhan. Beban yang dibagi lebih adil memberi ruang bagi ibu untuk beristirahat, menjaga hubungan suami istri, dan memberi perhatian pada saudara kandung. Topik saudara kandung dibahas di ' + a('sibling-anak-berkebutuhan-khusus', 'sibling anak berkebutuhan khusus') + '.'),
  fig(`${IMG}/peran-ayah-pantai.webp`, 1200, 800, 'Seorang ayah berbaju merah memboncengkan anak di atas motor ATV kuning di pantai berpasir, diikuti ATV merah lain di belakangnya, dengan laut dan langit berawan', 'Kegiatan bersama keluarga di tepi pantai. Waktu bermain di luar rumah bersama ayah memberi anak pengalaman baru dalam suasana yang menyenangkan.', CC(A_PANTAI, 'Dody.bukittinggi', ...BYSA4)),

  '<h2 id="bentuk">Bentuk keterlibatan ayah sehari-hari</h2>',
  diag(`${IMG}/peran-ayah-bentuk.webp`, 'Diagram empat kartu bentuk keterlibatan ayah: harian, bermain, keputusan, dan dukungan, masing-masing dengan contoh kegiatan', 'Empat bentuk keterlibatan ayah. Tidak harus semuanya sekaligus, yang penting rutin.'),
  p('Keterlibatan ayah tidak harus berupa perubahan besar. Banyak ayah merasa harus menjadi ahli terapi lebih dulu sebelum terlibat, padahal yang paling dibutuhkan anak adalah kehadiran yang rutin dan bisa diandalkan. Empat bentuk keterlibatan berikut bisa dipilih sesuai waktu dan kemampuan.'),
  ul([
    '<strong>Rutinitas harian.</strong> Memegang satu kegiatan tetap, misalnya memandikan, menyiapkan sarapan, atau menidurkan anak. Rutinitas yang dipegang ayah membuat anak terbiasa diasuh oleh lebih dari satu orang.',
    '<strong>Bermain.</strong> Bermain sesuai minat anak, baik di dalam maupun di luar rumah. Panduan memilih permainan ada di ' + a('tahapan-perkembangan-bermain-anak-abk', 'tahapan perkembangan bermain anak ABK') + '.',
    '<strong>Keputusan penting.</strong> Ikut asesmen, pertemuan sekolah, dan pembahasan program terapi, sehingga keputusan diambil bersama.',
    '<strong>Dukungan bagi pasangan.</strong> Menjadi tempat bercerita, berbagi tugas secara adil, dan memberi kesempatan pasangan beristirahat.',
  ]),

  '<h2 id="pembagian">Berbagi peran dengan ibu</h2>',
  p('Pembagian peran yang jelas mencegah salah satu orang tua kelelahan. Kuncinya adalah membagi tanggung jawab penuh atas tugas tertentu, bukan sekadar membantu ketika diminta. Tabel berikut berisi contoh pembagian yang bisa disesuaikan dengan jadwal kerja dan kekuatan masing-masing.'),
  table('Contoh pembagian peran ayah dan ibu dalam seminggu', ['Tugas', 'Contoh pembagian', 'Catatan'], [
    ['Rutinitas pagi', 'Ayah menyiapkan sarapan dan mengantar sekolah', 'Cocok bila ayah berangkat kerja searah sekolah'],
    ['Jadwal terapi', 'Bergantian, ayah memegang sesi Sabtu', 'Ayah bisa langsung belajar dari terapis'],
    ['Komunikasi dengan sekolah', 'Ibu membaca buku penghubung, ayah ikut rapat semester', 'Keduanya tahu perkembangan anak'],
    ['Waktu bermain', 'Ayah memegang waktu bermain sore atau akhir pekan', 'Rutin lebih penting daripada lama'],
    ['Waktu istirahat ibu', 'Ayah mengasuh penuh beberapa jam di akhir pekan', 'Mencegah kelelahan pengasuh utama'],
  ]),
  p('Pembagian ini sebaiknya dievaluasi berkala, misalnya setiap akhir pekan, karena kebutuhan anak dan jadwal kerja bisa berubah. Kelelahan pengasuh dibahas lebih lanjut di ' + a('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak ABK') + ' dan ' + a('respite-care-untuk-keluarga-anak-abk', 'respite care untuk keluarga anak ABK') + '.'),

  '<h2 id="sekolah">Ayah dalam urusan sekolah dan terapi</h2>',
  p('Kehadiran ayah di sekolah dan tempat terapi memberi dua manfaat. Pertama, ayah mendengar langsung penjelasan guru atau terapis sehingga tidak bergantung pada cerita orang lain. Kedua, anak melihat bahwa kedua orang tuanya peduli pada sekolah dan latihannya.'),
  ol([
    '<strong>Ikut asesmen awal.</strong> Informasi dari kedua orang tua membuat gambaran tentang anak lebih lengkap. Lihat ' + a('asesmen-abk', 'asesmen ABK') + '.',
    '<strong>Hadir dalam penyusunan program.</strong> Ayah ikut membahas tujuan dalam ' + a('program-pembelajaran-individual', 'Program Pembelajaran Individual') + '.',
    '<strong>Pelajari satu strategi dari terapis.</strong> Minta contoh latihan yang bisa dilakukan di rumah dan praktikkan rutin.',
    '<strong>Baca catatan perkembangan.</strong> Buku penghubung atau laporan bulanan membantu ayah mengikuti kemajuan anak.',
  ]),
  p('Peran orang tua dalam pendidikan anak di sekolah inklusi dijelaskan lebih lengkap di ' + a('peran-orang-tua-pendidikan-inklusi', 'peran orang tua dalam pendidikan inklusi') + '. Bila anak sedang menjalani terapi perilaku, ayah juga perlu memahami prinsipnya agar responsnya di rumah sejalan, seperti dibahas di ' + a('apa-saja-terapi-perilaku-untuk-autisme', 'apa saja terapi perilaku untuk autisme') + '.'),

  '<h2 id="hambatan">Hambatan yang sering dialami ayah</h2>',
  p('Banyak ayah sebenarnya ingin terlibat, tetapi menghadapi hambatan yang jarang dibicarakan. Mengenali hambatan ini membantu keluarga mencari jalan keluar bersama, bukan saling menyalahkan.'),
  ul([
    '<strong>Jadwal kerja.</strong> Jam kerja panjang atau bekerja di luar kota membuat waktu bersama anak terbatas.',
    '<strong>Merasa tidak tahu caranya.</strong> Ayah yang jarang terlibat sejak awal sering ragu dan takut salah.',
    '<strong>Proses menerima yang berbeda.</strong> Ayah dan ibu bisa melewati masa penerimaan dengan kecepatan yang berbeda. Lihat ' + a('grief-dan-acceptance-orang-tua-anak-abk', 'grief dan acceptance orang tua anak ABK') + '.',
    '<strong>Anggapan peran tradisional.</strong> Pandangan bahwa mengasuh adalah urusan ibu membuat ayah enggan terlibat.',
    '<strong>Perasaan dipendam.</strong> Ayah sering merasa harus kuat sehingga tidak membicarakan kesedihan atau kecemasannya.',
  ]),
  p('Hambatan-hambatan ini bukan alasan untuk mundur, melainkan hal yang perlu diakui lalu diatasi pelan-pelan. Pasangan bisa membantu dengan memberi ruang bagi ayah untuk belajar, termasuk membiarkan ayah melakukan sesuatu dengan caranya sendiri selama aman bagi anak.'),
  fig(`${IMG}/peran-ayah-taman-bermain.webp`, 1200, 900, 'Area bermain anak di taman kota beralas rumput sintetis hijau dengan ayunan kuning, pepohonan rindang, dan beberapa keluarga duduk serta bermain bersama anak', 'Area bermain anak di Kebon Rojo, Jombang. Taman bermain umum bisa menjadi tempat sederhana bagi ayah untuk meluangkan waktu rutin bersama anak.', CC(A_TAMAN, 'Indonesiagood', ...BY3B)),

  '<h2 id="mulai">Langkah kecil untuk memulai</h2>',
  diag(`${IMG}/peran-ayah-mulai.webp`, 'Diagram enam langkah kecil ayah: kenali anak, pilih satu tugas, jadwalkan bermain, hadir di sekolah, bicara dengan pasangan, dan cari teman sesama ayah', 'Mulai dari satu kebiasaan, lalu tambah perlahan sesuai kemampuan.'),
  p('Bagi ayah yang ingin lebih terlibat tetapi belum tahu harus mulai dari mana, langkah berikut bisa dicoba satu per satu.'),
  ol([
    '<strong>Kenali anak lebih dalam.</strong> Tanyakan kepada pasangan, guru, atau terapis tentang kekuatan, minat, dan hal yang membuat anak kesulitan.',
    '<strong>Pilih satu tugas tetap.</strong> Ambil alih satu rutinitas harian secara penuh, misalnya menidurkan anak setiap malam.',
    '<strong>Jadwalkan waktu bermain berdua.</strong> Lima belas sampai tiga puluh menit yang rutin lebih bermakna daripada sesekali seharian.',
    '<strong>Hadir minimal di satu pertemuan.</strong> Datangi rapat sekolah atau sesi terapi, lalu catat satu hal yang bisa dipraktikkan di rumah.',
    '<strong>Evaluasi bersama pasangan.</strong> Setiap pekan, bicarakan apa yang berjalan baik dan apa yang perlu diubah.',
    '<strong>Cari teman sesama ayah.</strong> Komunitas orang tua anak ABK membantu ayah merasa tidak sendirian.',
  ]),

  '<h2 id="kegiatan">Contoh kegiatan ayah dan anak</h2>',
  p('Kegiatan bersama tidak harus mahal atau rumit. Yang penting kegiatan itu disukai anak, sesuai kemampuannya, dan bisa diulang secara rutin. Tabel berikut berisi contoh yang bisa disesuaikan dengan usia dan kebutuhan anak.'),
  table('Contoh kegiatan rutin ayah bersama anak berkebutuhan khusus', ['Kegiatan', 'Manfaat bagi anak', 'Tips'], [
    ['Berjalan pagi di sekitar rumah', 'Gerak tubuh, mengenal lingkungan, waktu tenang berdua', 'Pakai rute yang sama agar anak merasa aman'],
    ['Bermain bola atau lempar tangkap', 'Koordinasi tangan dan mata, giliran bermain', 'Mulai dari jarak dekat dan bola yang ringan'],
    ['Membaca buku bergambar sebelum tidur', 'Bahasa, kedekatan, dan rutinitas tidur', 'Biarkan anak memilih buku dan menunjuk gambar'],
    ['Membantu pekerjaan rumah ringan', 'Kemandirian dan rasa mampu', 'Pecah tugas menjadi langkah kecil yang jelas'],
    ['Bermain di taman bermain umum', 'Keterampilan sosial dan motorik', 'Pilih jam yang tidak terlalu ramai'],
  ]),
  p('Saat memilih kegiatan, perhatikan juga kebutuhan sensorik anak. Anak yang mudah kewalahan oleh suara keras atau keramaian mungkin lebih nyaman bermain di rumah atau di tempat yang tenang. Ayah tidak perlu memaksakan kegiatan yang sedang populer. Kegiatan yang sederhana tetapi dilakukan dengan sabar dan rutin biasanya meninggalkan kenangan yang paling kuat bagi anak.'),

  '<h2 id="emosi">Menjaga kesehatan emosi ayah</h2>',
  p('Mengasuh anak berkebutuhan khusus bisa melelahkan secara fisik dan emosional, termasuk bagi ayah. Tekanan pekerjaan, kekhawatiran tentang biaya terapi, dan rasa cemas tentang masa depan anak sering menumpuk tanpa disadari. Ayah yang kelelahan cenderung lebih mudah marah atau justru menarik diri.'),
  p('Beberapa hal sederhana membantu menjaga kesehatan emosi: tidur dan olahraga yang cukup, waktu untuk diri sendiri, berbicara terbuka dengan pasangan, dan mencari bantuan profesional bila perasaan sedih atau cemas berlangsung lama. Dalam nilai-nilai keluarga muslim, kesabaran dan ikhtiar berjalan bersama, dan meminta pertolongan ketika berat juga bagian dari ikhtiar. Panduan merawat diri bagi orang tua ada di ' + a('self-care-untuk-orang-tua-anak-disabilitas', 'self care untuk orang tua anak disabilitas') + '.'),

  '<h2 id="keliru">Kesalahan yang sering terjadi</h2>',
  ul([
    '<strong>Menunggu sampai merasa siap.</strong> Rasa percaya diri justru tumbuh dari mencoba, bukan dari menunggu.',
    '<strong>Hanya terlibat saat ada masalah.</strong> Anak dan pasangan butuh kehadiran rutin, bukan hanya saat krisis.',
    '<strong>Membantu, bukan bertanggung jawab.</strong> Membantu ketika diminta tetap membuat beban berpikir ada di satu orang.',
    '<strong>Membandingkan anak dengan anak lain.</strong> Bandingkan anak dengan dirinya sendiri sebelumnya, bukan dengan teman sebaya.',
    '<strong>Memendam perasaan.</strong> Perasaan yang tidak dibicarakan sering muncul sebagai kemarahan atau menjauh dari keluarga.',
  ]),
  p('Kesimpulannya, peran ayah dalam pengasuhan anak ABK adalah peran pengasuh yang setara. Ayah yang hadir secara rutin, memahami kebutuhan anak, ikut mengambil keputusan, dan mendukung pasangan memberi rasa aman bagi anak dan meringankan beban seluruh keluarga. Untuk berdiskusi tentang pendampingan anak di YUKA, hubungi kami lewat halaman <a href="/kontak">kontak YUKA</a>.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqHtml(aFaq),
];

const ayahArticle = {
  slug: 'peran-ayah-dalam-pengasuhan-anak-abk',
  titleTag: 'Peran Ayah dalam Pengasuhan Anak ABK | YUKA',
  metaDesc: 'Peran ayah dalam pengasuhan anak ABK: mengapa penting, bentuk keterlibatan sehari-hari, berbagi peran dengan ibu, hambatan yang dialami ayah, dan langkah kecil untuk memulai.',
  keywords: 'peran ayah dalam pengasuhan anak abk, ayah anak berkebutuhan khusus, pengasuhan anak abk, keterlibatan ayah',
  ogTitle: 'Peran Ayah dalam Pengasuhan Anak ABK',
  ogDesc: 'Panduan bagi ayah untuk lebih terlibat dalam pengasuhan anak berkebutuhan khusus, dari rutinitas harian sampai urusan sekolah dan terapi.',
  h1: 'Peran Ayah dalam Pengasuhan Anak ABK: Bentuk Keterlibatan dan Cara Memulainya',
  crumb: 'Peran Ayah dalam Pengasuhan Anak ABK',
  category: 'Pendidikan',
  datePublished: '2026-11-20T08:00:00+07:00', dateModified: '2026-11-20T08:00:00+07:00',
  dateDisplay: '20 November 2026', readTime: '13 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/peran-ayah-hero.webp`, w: 1200, h: 900,
    alt: 'Seorang ayah bertopi meniup gelembung sabun di taman bermain, beberapa anak dan orang dewasa berdiri dan duduk di sekitarnya dengan latar pepohonan dan ayunan',
    caption: 'Keluarga bermain gelembung sabun di Taman Ahmad Yani. Keterlibatan ayah dalam kegiatan sederhana seperti ini memberi anak waktu bersama yang menyenangkan.',
    credit: CC(A_HERO, 'Syahmari', ...BY4),
  },
  bodyHtml: aBody.join('\n'), faq: aFaq,
  related: [
    { href: '/artikel/dukungan-keluarga-anak-abk', title: 'Dukungan Keluarga Anak ABK', desc: 'Peran seluruh keluarga dalam mendampingi anak.' },
    { href: '/artikel/mengelola-stres-orang-tua-anak-abk', title: 'Mengelola Stres Orang Tua Anak ABK', desc: 'Mengenali dan mengurangi beban pengasuhan.' },
    { href: '/artikel/peran-orang-tua-pendidikan-inklusi', title: 'Peran Orang Tua dalam Pendidikan Inklusi', desc: 'Bekerja sama dengan sekolah untuk kemajuan anak.' },
  ],
  tags: ['Ayah', 'Pengasuhan', 'Keluarga'],
  sources: [
    { url: URL_WHO_NC, label: 'WHO, UNICEF, dan Bank Dunia: Nurturing care for early childhood development (2018)' },
    { url: URL_NC, label: 'Nurturing Care Framework for Early Childhood Development' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Contoh pembagian peran dan langkah di artikel ini adalah praktik umum dan perlu disesuaikan dengan kondisi tiap keluarga.',
};

const articles = [
  {
    slug: 'token-economy-untuk-anak-abk',
    titleTag: 'Token Economy untuk Anak ABK: Cara Menerapkan | YUKA',
    metaDesc: 'Token economy system untuk anak ABK: pengertian, komponen, apa kata penelitian, langkah menyusun di kelas inklusi, contoh papan token, dan cara mengurangi token.',
    keywords: 'token economy system untuk anak abk, token economy, papan token, penguatan perilaku anak abk, kelas inklusi',
    ogTitle: 'Token Economy untuk Anak ABK',
    ogDesc: 'Panduan menyusun token economy di kelas inklusi: target perilaku, token, penguat cadangan, contoh papan, dan cara memudarkannya.',
    h1: 'Token Economy untuk Anak ABK: Pengertian, Langkah, dan Contoh di Kelas Inklusi',
    crumb: 'Token Economy untuk Anak ABK',
    category: 'Pendidikan',
    datePublished: '2026-11-15T08:00:00+07:00', dateModified: '2026-11-15T08:00:00+07:00',
    dateDisplay: '15 November 2026', readTime: '13 menit baca',
    authorName: 'Tim YUKA',
    image: {
      file: `${IMG}/token-economy-hero.webp`, w: 1200, h: 740,
      alt: 'Guru perempuan berkerudung merah dan berpelindung wajah berdiri menunjuk ke papan di depan kelas SD, beberapa siswa bermasker duduk di bangku kayu menyimak',
      caption: 'Proses belajar mengajar di salah satu kelas SD 005 Tpi Kota. Aturan kelas yang jelas dan bisa diprediksi menjadi dasar sistem token yang berhasil.',
      credit: CC(T_HERO, 'Reyvasumonca', ...BYSA4),
    },
    bodyHtml: tBody.join('\n'), faq: tFaq,
    related: [
      { href: '/artikel/reward-system-efektif-untuk-anak-autis', title: 'Reward System untuk Anak Autis', desc: 'Memilih penguat dan target yang realistis di rumah.' },
      { href: '/artikel/classroom-management-kelas-inklusi', title: 'Manajemen Kelas Inklusi', desc: 'Menata aturan dan rutinitas kelas untuk semua siswa.' },
      { href: '/artikel/terapi-aba', title: 'Terapi ABA', desc: 'Pengantar terapi perilaku yang memakai prinsip penguatan.' },
    ],
    tags: ['TokenEconomy', 'KelasInklusi', 'Perilaku'],
    sources: [
      { url: URL_TOKEN_WP, label: 'Wikipedia: Token economy (pengertian, komponen, sejarah, penerapan di sekolah)' },
      { url: URL_MATSON, label: 'Matson dan Boisjoli (2009), The token economy for children with intellectual disability and/or autism: a review, Research in Developmental Disabilities' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Contoh papan token dan tahapan pengurangan di artikel ini adalah praktik umum di kelas inklusi dan perlu disesuaikan dengan pengamatan serta kesepakatan tim untuk tiap anak.',
  },
  {
    slug: 'pendidikan-inklusi-penuh-vs-parsial',
    titleTag: 'Pendidikan Inklusi Penuh vs Parsial: Bedanya | YUKA',
    metaDesc: 'Pendidikan inklusi penuh vs parsial: pengertian, perbedaan, bentuk layanan, dasar hak di Indonesia, dan cara menentukan model yang tepat untuk anak berkebutuhan khusus.',
    keywords: 'pendidikan inklusi penuh vs parsial, inklusi penuh, inklusi parsial, ruang sumber, sekolah inklusi',
    ogTitle: 'Pendidikan Inklusi Penuh vs Parsial',
    ogDesc: 'Perbedaan inklusi penuh dan parsial, spektrum layanan, dan langkah menentukan model inklusi bersama sekolah dan orang tua.',
    h1: 'Pendidikan Inklusi Penuh vs Parsial: Pengertian, Perbedaan, dan Cara Memilih',
    crumb: 'Inklusi Penuh vs Parsial',
    category: 'Pendidikan',
    datePublished: '2026-11-18T08:00:00+07:00', dateModified: '2026-11-18T08:00:00+07:00',
    dateDisplay: '18 November 2026', readTime: '13 menit baca',
    authorName: 'Tim YUKA',
    image: {
      file: `${IMG}/inklusi-penuh-parsial-hero.webp`, w: 1200, h: 900,
      alt: 'Suasana kelas SMP di Indonesia, guru berkerudung di depan layar televisi menjelaskan peta, siswa berseragam pramuka duduk menyimak di bangku kayu',
      caption: 'Suasana kelas SMP di Indonesia saat guru mengajar dan siswa menyimak. Dalam inklusi penuh, anak berkebutuhan khusus belajar di kelas seperti ini dengan dukungan yang dibawa ke dalam kelas.',
      credit: CC(I_HERO, 'Fitrah 9131', ...BY3),
    },
    bodyHtml: iBody.join('\n'), faq: iFaq,
    related: [
      { href: '/artikel/pendidikan-inklusi', title: 'Pendidikan Inklusi', desc: 'Pengertian dan prinsip dasar pendidikan inklusi.' },
      { href: '/artikel/apa-perbedaan-sekolah-inklusi-dan-slb', title: 'Perbedaan Sekolah Inklusi dan SLB', desc: 'Membandingkan dua jalur pendidikan anak berkebutuhan khusus.' },
      { href: '/artikel/co-teaching-dalam-kelas-inklusi', title: 'Co-Teaching dalam Kelas Inklusi', desc: 'Berbagi peran guru kelas dan guru pendamping.' },
    ],
    tags: ['PendidikanInklusi', 'SekolahInklusi', 'RuangSumber'],
    sources: [
      { url: URL_INCL_WP, label: 'Wikipedia: Inclusion (education), inklusi, integrasi, dan full inclusion' },
      { url: URL_PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
      { url: URL_UNESCO, label: 'UNESCO: Inclusion in education' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Contoh bentuk layanan dan langkah penentuan model di artikel ini adalah praktik umum dan perlu disesuaikan dengan hasil asesmen anak serta kebijakan sekolah.',
  },
  {
    slug: 'social-story-untuk-anak-autis',
    titleTag: 'Social Story untuk Anak Autis: Cara Membuat | YUKA',
    metaDesc: 'Social story untuk anak autis: pengertian, jenis kalimat, langkah menulis, contoh cerita upacara bendera, cara membacakan, dan apa kata penelitian.',
    keywords: 'social stories terapi autisme, social story anak autis, cerita sosial autisme, carol gray social story',
    ogTitle: 'Social Story untuk Anak Autis',
    ogDesc: 'Panduan menulis social story untuk anak autis lengkap dengan jenis kalimat, contoh, dan cara membacakannya.',
    h1: 'Social Story untuk Anak Autis: Pengertian, Cara Membuat, dan Contohnya',
    crumb: 'Social Story untuk Anak Autis',
    category: 'Terapi',
    datePublished: '2026-11-19T08:00:00+07:00', dateModified: '2026-11-19T08:00:00+07:00',
    dateDisplay: '19 November 2026', readTime: '13 menit baca',
    authorName: 'Tim YUKA',
    image: {
      file: `${IMG}/social-story-hero.webp`, w: 1200, h: 629,
      alt: 'Ruang perpustakaan dengan rak buku kayu di kiri dan kanan, beberapa pengunjung duduk membaca di meja dekat dinding beranyaman logam',
      caption: 'Suasana perpustakaan sebagai ruang belajar bersama. Social story adalah cerita pendek yang ditulis khusus untuk membantu anak memahami satu situasi sosial.',
      credit: CC(S_HERO, 'Chaichaio', ...BYSA4),
    },
    bodyHtml: sBody.join('\n'), faq: sFaq,
    related: [
      { href: '/artikel/social-skills-training-anak-autis', title: 'Social Skills Training Anak Autis', desc: 'Latihan keterampilan sosial dan bukti ilmiahnya.' },
      { href: '/artikel/jadwal-visual-anak-autis', title: 'Jadwal Visual Anak Autis', desc: 'Membantu anak memahami urutan kegiatan harian.' },
      { href: '/artikel/cara-melatih-social-skills-anak-autis-di-rumah', title: 'Melatih Social Skills di Rumah', desc: 'Latihan keterampilan sosial dalam kegiatan sehari-hari.' },
    ],
    tags: ['Autisme', 'SocialStory', 'KeterampilanSosial'],
    sources: [
      { url: URL_SS_WP, label: 'Wikipedia: Social Stories (asal-usul, jenis kalimat, catatan efektivitas)' },
      { url: URL_GRAY, label: 'Carol Gray Social Stories: What is it?' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Contoh cerita di artikel ini adalah ilustrasi umum, bukan program terapi. Social story untuk anak tertentu perlu disusun berdasarkan pengamatan dan didiskusikan dengan guru atau terapis yang menangani anak.',
  },
];

articles.push(ayahArticle);

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
function render(only) {
  for (const art of articles) {
    if (only && art.slug !== only) continue;
    fs.writeFileSync(path.join(articleDir, `${art.slug}.html`), renderArticlePage(art));
    console.log(`Rendered artikel/${art.slug}.html`);
  }
}

if (require.main === module) {
  if (process.argv.includes('--prepare')) prepare();
  else if (process.argv.includes('--raster')) raster();
  else render(process.argv[2]);
}

module.exports = { articles, diagrams };

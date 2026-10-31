'use strict';
/*
 * Generator artikel 31 Oktober 2026 (cycle #87 /cek-daily-artikel, tambal hari kosong 31 Okt).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5" baris 120: "diferensiasi pembelajaran untuk anak abk".
 * Tidak ada artikel khusus tentang topik ini di artikel/ (cek kanibal 1 Nov 2026).
 *
 * Stok foto Dokumentasi yang belum dipakai artikel sudah habis (semua berkas Dokumentasi/
 * sudah dipakai, dan foto Dokumentasi/gbp/ adalah duplikat), jadi hero dan foto isi memakai
 * foto domain publik USAID Indonesia dari Wikimedia Commons, kredit terlihat di figcaption.
 * Satu diagram SVG deterministik dari scripts/lib/diagram-svg.js (bukan gambar AI).
 *
 *   node scripts/generate-diferensiasi-20261031.js --prepare   # tulis SVG diagram
 *   node scripts/generate-diferensiasi-20261031.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-diferensiasi-20261031.js             # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const PD = (page) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">USAID Indonesia</a> / Wikimedia Commons, domain publik.`;
const foto = (file, alt, caption, page) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">${PD(page)}</span></figcaption></figure>`;
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const faqHtml = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;

const diagrams = {};
const addDiagram = (file, markup) => { diagrams[file] = markup; };

const URL_PP13 = 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020';
const URL_P48 = 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023';
const URL_P12 = 'https://peraturan.bpk.go.id/Details/281847/permendikbudriset-no-12-tahun-2024';
const URL_UDL = 'https://udlguidelines.cast.org/';
const URL_UNESCO = 'https://www.unesco.org/en/inclusion-education';
const URL_WHO = 'https://www.who.int/news-room/fact-sheets/detail/disability-and-health';

const sections = [
  ['jawaban', 'Apa itu diferensiasi pembelajaran'],
  ['dasar', 'Dasar aturannya di Indonesia'],
  ['empat', 'Empat hal yang bisa dibedakan'],
  ['asesmen', 'Mulai dari asesmen, bukan dari label'],
  ['contoh', 'Contoh diferensiasi untuk beberapa kebutuhan'],
  ['langkah', 'Langkah menyusun satu pelajaran yang terdiferensiasi'],
  ['keliru', 'Salah kaprah yang sering terjadi'],
  ['orangtua', 'Peran orang tua dan pendamping'],
  ['faq', 'Pertanyaan umum'],
];

const faq = [
  { q: 'Apa yang dimaksud diferensiasi pembelajaran untuk anak ABK?', a: 'Diferensiasi pembelajaran adalah cara guru menyesuaikan isi, cara belajar, bentuk hasil kerja, dan suasana kelas sesuai kesiapan, minat, dan profil belajar tiap siswa, sambil tetap mengejar tujuan belajar yang jelas. Untuk anak berkebutuhan khusus, penyesuaian itu juga merupakan bagian dari akomodasi yang layak yang diatur PP Nomor 13 Tahun 2020.' },
  { q: 'Apa bedanya diferensiasi dengan kurikulum khusus?', a: 'Diferensiasi menyesuaikan jalan menuju tujuan belajar di kelas yang sama, sehingga anak tetap belajar bersama teman sebaya. Kurikulum khusus atau program individual dipakai ketika tujuan belajarnya sendiri perlu diubah. Dalam praktik sekolah inklusi, keduanya sering berjalan bersama untuk anak yang berbeda.' },
  { q: 'Apakah diferensiasi berarti guru membuat rencana pelajaran berbeda untuk setiap anak?', a: 'Tidak. Yang lebih realistis adalah satu rencana pelajaran dengan beberapa pilihan bertingkat, misalnya dua atau tiga versi lembar kerja, beberapa cara menunjukkan pemahaman, dan kelompok yang berubah sesuai tugas. Penyesuaian yang sangat individual disimpan untuk anak yang memang membutuhkannya berdasarkan asesmen.' },
  { q: 'Apa dasar hukum diferensiasi dan akomodasi di sekolah?', a: 'Rujukan utamanya adalah UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas, PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas, dan Permendikbudristek Nomor 48 Tahun 2023 yang mengatur pelaksanaannya di satuan pendidikan. Kurikulum yang berlaku diatur Permendikbudristek Nomor 12 Tahun 2024.' },
  { q: 'Bagaimana jika di kelas hanya ada satu guru tanpa pendamping?', a: 'Mulailah dari penyesuaian yang murah tenaga: instruksi tertulis dan lisan sekaligus, contoh hasil kerja yang terlihat, jadwal visual, dan pilihan cara mengumpulkan tugas. Kelompok belajar yang disusun dengan sengaja juga membantu karena teman sebaya bisa saling menopang. Pendamping khusus dibicarakan dengan sekolah bila asesmen menunjukkan kebutuhan yang lebih besar.' },
  { q: 'Apakah nilai anak ABK yang belajar dengan diferensiasi jadi tidak sebanding?', a: 'Nilai tetap mengukur tujuan belajar yang sama, tetapi cara anak menunjukkannya boleh berbeda, misalnya menjawab lisan alih alih menulis panjang. Kalau tujuan belajarnya diubah, hal itu perlu dicatat di laporan agar orang tua memahami apa yang sebenarnya diukur.' },
  { q: 'Bagaimana orang tua tahu anaknya sudah mendapat diferensiasi?', a: 'Tanyakan kepada guru apa tujuan belajar anak semester ini, penyesuaian apa yang diberikan, dan bagaimana kemajuannya dicatat. Sekolah yang menjalankan diferensiasi biasanya bisa menunjukkan contoh lembar kerja, catatan pengamatan, atau hasil karya anak yang memperlihatkan penyesuaian itu.' },
  { q: 'Apakah diferensiasi hanya untuk anak berkebutuhan khusus?', a: 'Tidak. Diferensiasi berguna untuk semua siswa karena setiap kelas berisi anak dengan kesiapan dan minat yang berbeda. Pendekatan seperti Universal Design for Learning dari CAST justru menganjurkan pilihan disiapkan sejak awal untuk semua siswa, sehingga anak berkebutuhan khusus tidak perlu diperlakukan sebagai pengecualian.' },
];

addDiagram(`${IMG}/diferensiasi-empat-aspek.webp`, svg.grid('Empat aspek yang bisa didiferensiasi', 'Tujuan belajarnya sama, jalannya disesuaikan', ['Aspek', 'Pertanyaan guru', 'Contoh untuk anak ABK'],
  [
    ['Konten', 'Bahan apa yang dipakai?', 'Teks pendek bergambar, benda nyata, atau rekaman suara untuk materi yang sama.'],
    ['Proses', 'Bagaimana anak mengolahnya?', 'Langkah dipecah kecil, contoh dikerjakan bersama, waktu lebih panjang.'],
    ['Produk', 'Bagaimana anak menunjukkan paham?', 'Menjawab lisan, menunjuk gambar, membuat model, atau menulis singkat.'],
    ['Lingkungan', 'Di mana dan bersama siapa?', 'Tempat duduk dekat guru, sudut tenang, kelompok yang disusun sengaja.'],
  ], [200, 380, 524]));

const body = [
  '<span data-revision-marker="yuka-20261031-diferensiasi-r1" hidden></span>',
  `<div class="jawaban-singkat"><p><strong>Diferensiasi pembelajaran untuk anak ABK</strong> adalah cara guru menyesuaikan bahan, cara belajar, bentuk hasil kerja, dan suasana kelas sesuai kebutuhan tiap anak, sambil tetap mengejar tujuan belajar yang jelas. Di Indonesia, penyesuaian bagi peserta didik penyandang disabilitas merupakan bagian dari akomodasi yang layak yang diatur PP Nomor 13 Tahun 2020. Kuncinya ada pada asesmen awal, pilihan bertingkat, dan pencatatan kemajuan, bukan pada membuat rencana pelajaran berbeda untuk setiap anak.</p></div>`,
  p('Di sebuah kelas inklusi, satu pelajaran yang sama bisa diikuti anak yang sudah lancar membaca, anak yang baru mengenal huruf, anak yang lebih mudah paham lewat gambar, dan anak yang perlu bergerak setiap beberapa menit. Guru yang mengajar dengan satu cara untuk semuanya hampir pasti kehilangan sebagian dari mereka. Diferensiasi adalah jawaban praktis untuk keadaan itu.'),
  p('Artikel ini ditulis untuk guru, pendamping, dan orang tua yang ingin memahami diferensiasi secara konkret: apa artinya, dasar aturannya di Indonesia, aspek apa saja yang bisa disesuaikan, contoh untuk beberapa kebutuhan, dan langkah menyusunnya dalam satu pelajaran. Kami sengaja tidak memakai angka yang tidak bisa ditelusuri. Setiap rujukan aturan kami tautkan ke basis data peraturan resmi.'),
  toc(sections),

  '<h2 id="jawaban">Apa itu diferensiasi pembelajaran</h2>',
  p('Diferensiasi pembelajaran adalah pendekatan mengajar yang berangkat dari kenyataan bahwa siswa di satu kelas berbeda dalam tiga hal: kesiapan belajar, minat, dan profil belajar. Kesiapan menyangkut apa yang sudah dikuasai anak. Minat menyangkut apa yang membuatnya mau terlibat. Profil belajar menyangkut cara yang paling membantunya memahami sesuatu, misalnya lewat gambar, gerak, atau percakapan.'),
  p('Yang tidak berubah dalam diferensiasi adalah tujuan belajar. Guru tetap menentukan apa yang harus dipahami atau bisa dilakukan siswa di akhir pelajaran. Yang disesuaikan adalah jalan menuju tujuan itu. Inilah yang membedakan diferensiasi dari sekadar menurunkan standar.'),
  p('Untuk anak berkebutuhan khusus, diferensiasi punya bobot tambahan. Penyesuaian yang dibutuhkan anak dengan hambatan penglihatan, pendengaran, gerak, perhatian, atau intelektual bukan lagi soal gaya mengajar yang baik, melainkan syarat agar anak bisa mengakses pelajaran sama sekali. Karena itu, diferensiasi di sekolah inklusi selalu berjalan bersama akomodasi dan dukungan individual.'),
  p('Pendekatan ini juga sejalan dengan arah pendidikan inklusi global. <a href="' + URL_UNESCO + '" target="_blank" rel="nofollow noopener">UNESCO</a> menyatakan bahwa setiap peserta didik sama pentingnya, dan pendidikan inklusi bekerja untuk mengenali serta menghapus hambatan belajar, mulai dari kurikulum sampai cara mengajar. Diferensiasi adalah salah satu alat paling langsung untuk menghapus hambatan di tingkat kelas.'),
  '<table><thead><tr><th>Istilah</th><th>Yang disesuaikan</th><th>Kapan dipakai</th></tr></thead><tbody>'
    + '<tr><td>Diferensiasi</td><td>Bahan, cara belajar, bentuk hasil kerja, lingkungan</td><td>Untuk semua siswa di kelas, sesuai kesiapan dan minat</td></tr>'
    + '<tr><td>Akomodasi</td><td>Akses terhadap pelajaran dan asesmen, misalnya huruf besar, waktu tambahan, alat bantu</td><td>Untuk siswa yang hambatannya menghalangi akses</td></tr>'
    + '<tr><td>Modifikasi</td><td>Tujuan belajarnya sendiri, misalnya target yang lebih sederhana</td><td>Ketika tujuan umum belum realistis bagi siswa tertentu</td></tr>'
    + '<tr><td>Program individual</td><td>Rencana tertulis per anak, berisi tujuan, layanan, dan cara evaluasi</td><td>Untuk anak dengan kebutuhan yang perlu direncanakan khusus</td></tr>'
    + '</tbody></table>',
  p('Tabel di atas adalah ringkasan istilah yang lazim dipakai di sekolah inklusi, bukan definisi hukum. Program individual dibahas lebih rinci di artikel <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>.'),

  '<h2 id="dasar">Dasar aturannya di Indonesia</h2>',
  p('Kewajiban menyesuaikan pembelajaran bagi peserta didik penyandang disabilitas punya dasar hukum yang jelas. <a href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" target="_blank" rel="nofollow noopener">UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas</a> menjamin hak atas pendidikan. Aturan pelaksananya, <a href="' + URL_PP13 + '" target="_blank" rel="nofollow noopener">PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</a>, mewajibkan penyesuaian yang diperlukan agar peserta didik penyandang disabilitas bisa belajar setara dengan peserta didik lain.'),
  p('Di tingkat satuan pendidikan, pelaksanaan akomodasi yang layak diatur lebih lanjut oleh <a href="' + URL_P48 + '" target="_blank" rel="nofollow noopener">Permendikbudristek Nomor 48 Tahun 2023</a>. Sementara itu, kurikulum yang berlaku di PAUD, pendidikan dasar, dan menengah diatur <a href="' + URL_P12 + '" target="_blank" rel="nofollow noopener">Permendikbudristek Nomor 12 Tahun 2024 tentang Kurikulum</a>, yang memberi ruang bagi sekolah dan guru untuk menyesuaikan pembelajaran dengan kebutuhan peserta didik.'),
  p('Bagi orang tua, arti praktisnya sederhana. Penyesuaian bagi anak berkebutuhan khusus bukan kebaikan hati guru yang boleh ada atau tidak ada, melainkan hak yang diakui aturan. Bagi sekolah, artinya perencanaan penyesuaian perlu tertulis dan bisa dipertanggungjawabkan. Gambaran kebijakan yang lebih luas ada di <a href="/artikel/kebijakan-pendidikan-inklusi-di-indonesia">kebijakan pendidikan inklusi di Indonesia</a>.'),
  p('Kebutuhan ini juga besar dari sisi jumlah. <a href="' + URL_WHO + '" target="_blank" rel="nofollow noopener">WHO</a> mencatat sekitar 1,3 miliar orang, atau sekitar 16 persen penduduk dunia, hidup dengan disabilitas yang signifikan. Artinya hampir setiap sekolah berpeluang menerima siswa yang membutuhkan penyesuaian, dan guru yang siap berdiferensiasi akan menjadi kebutuhan, bukan pengecualian.'),
  foto(`${IMG}/diferensiasi-individu.webp`, 'Seorang guru berkacamata berseragam cokelat menunjuk lembar bacaan sambil membimbing seorang siswa berseragam pramuka', 'Guru membimbing seorang siswa membaca secara perorangan. Dukungan satu lawan satu seperti ini adalah bentuk diferensiasi proses yang paling intensif, dan biasanya diberikan singkat di sela kerja kelompok.', 'https://commons.wikimedia.org/wiki/File:USAID_Basic_Education_Program_(8313182096).jpg'),

  '<h2 id="empat">Empat hal yang bisa dibedakan</h2>',
  p('Diferensiasi biasanya dibagi ke dalam empat aspek. Guru tidak perlu menyesuaikan keempatnya sekaligus dalam setiap pelajaran. Cukup pilih satu atau dua yang paling menentukan bagi siswa yang sedang direncanakan.'),
  p('<strong>Konten</strong> adalah bahan yang dipakai untuk mencapai tujuan. Materi tentang pecahan, misalnya, bisa disajikan lewat teks soal, potongan kertas yang dilipat, atau kue yang dibagi. Untuk anak dengan hambatan membaca seperti yang dibahas di <a href="/artikel/disleksia-adalah">disleksia</a>, bahan berupa gambar dan benda nyata sering membuka pemahaman lebih cepat dari teks panjang.'),
  p('<strong>Proses</strong> adalah cara anak mengolah bahan. Langkah bisa dipecah lebih kecil, contoh dikerjakan bersama lebih dulu, atau waktu diberi lebih panjang. Anak yang mudah lelah perhatian bisa bekerja dalam sesi pendek dengan jeda bergerak. Anak yang sudah mahir bisa diberi tantangan tambahan agar tidak bosan.'),
  p('<strong>Produk</strong> adalah cara anak menunjukkan bahwa ia paham. Tidak semua anak bisa menunjukkan pemahaman lewat tulisan panjang. Menjawab lisan, menunjuk gambar, menyusun kartu, membuat model, atau memakai alat bantu komunikasi seperti yang dijelaskan di <a href="/artikel/pecs-komunikasi-autis">PECS untuk anak autis</a> sama sahnya, selama yang diukur tetap tujuan belajar yang sama.'),
  p('<strong>Lingkungan belajar</strong> mencakup tempat duduk, tingkat kebisingan, pencahayaan, dan dengan siapa anak bekerja. Sudut tenang untuk anak yang mudah kewalahan oleh suara, tempat duduk dekat guru untuk anak yang perlu sering diarahkan, dan kelompok yang disusun sengaja termasuk diferensiasi lingkungan. Pengaturan kelas secara menyeluruh dibahas di <a href="/artikel/classroom-management-kelas-inklusi">manajemen kelas inklusi</a>.'),
  diag(`${IMG}/diferensiasi-empat-aspek.webp`, 'Diagram tabel empat aspek diferensiasi yaitu konten, proses, produk, dan lingkungan, masing-masing dengan pertanyaan guru dan contoh untuk anak berkebutuhan khusus', 'Empat aspek yang bisa didiferensiasi. Dalam satu pelajaran, guru cukup memilih satu atau dua aspek yang paling menentukan bagi siswanya.'),

  '<h2 id="asesmen">Mulai dari asesmen, bukan dari label</h2>',
  p('Kesalahan yang paling sering adalah merancang penyesuaian berdasarkan label diagnosis. Dua anak dengan diagnosis yang sama bisa punya kebutuhan yang sangat berbeda. Yang menentukan penyesuaian adalah apa yang sudah dan belum bisa dilakukan anak, apa yang menarik baginya, dan cara apa yang terbukti membantunya.'),
  p('Karena itu, diferensiasi dimulai dari asesmen. Asesmen awal bisa berupa pengamatan, tugas singkat, percakapan dengan orang tua, dan laporan dari terapis atau sekolah sebelumnya. Untuk anak yang baru masuk, langkah ini dijelaskan di <a href="/artikel/asesmen-abk-sebelum-masuk-sekolah">asesmen ABK sebelum masuk sekolah</a>.'),
  p('Asesmen juga tidak berhenti di awal. Guru perlu mengecek kemajuan secara berkala supaya penyesuaian bisa dikurangi ketika anak sudah mampu, atau ditambah ketika ternyata belum cukup. Alat bantu untuk mencatat kemajuan dibahas di <a href="/artikel/rubrik-penilaian-anak-berkebutuhan-khusus">rubrik penilaian anak berkebutuhan khusus</a> dan <a href="/artikel/mengukur-kemajuan-belajar-anak-disabilitas-intelektual">mengukur kemajuan belajar anak disabilitas intelektual</a>.'),
  p('Catatan asesmen yang baik bersifat konkret. Daripada menulis anak lemah dalam matematika, lebih berguna menulis anak bisa menjumlahkan sampai sepuluh dengan benda nyata tetapi belum dengan angka tertulis. Kalimat seperti itu langsung menunjukkan konten dan proses yang perlu disesuaikan.'),

  '<h2 id="contoh">Contoh diferensiasi untuk beberapa kebutuhan</h2>',
  p('Contoh berikut menggambarkan penyesuaian yang lazim di kelas inklusi. Ini bukan resep yang berlaku untuk semua anak dengan kondisi yang sama, karena keputusan akhirnya tetap bergantung pada asesmen masing-masing anak.'),
  '<table><thead><tr><th>Kebutuhan yang teramati</th><th>Penyesuaian konten atau proses</th><th>Penyesuaian produk atau lingkungan</th></tr></thead><tbody>'
    + '<tr><td>Kesulitan membaca teks panjang</td><td>Teks dipendekkan, kata kunci ditebalkan, bacaan dibantu rekaman suara</td><td>Menjawab lisan atau menunjuk pilihan gambar</td></tr>'
    + '<tr><td>Perhatian mudah berpindah</td><td>Tugas dipecah menjadi langkah pendek dengan tanda centang</td><td>Duduk jauh dari pintu, jeda gerak terjadwal</td></tr>'
    + '<tr><td>Hambatan komunikasi verbal</td><td>Instruksi didukung gambar dan contoh yang terlihat</td><td>Menjawab dengan kartu gambar atau alat bantu komunikasi</td></tr>'
    + '<tr><td>Hambatan gerak tangan</td><td>Waktu menulis diperpanjang, lembar kerja berukuran lebih besar</td><td>Menjawab dengan menempel kartu atau diketik</td></tr>'
    + '<tr><td>Sudah menguasai materi lebih cepat</td><td>Soal tantangan dan tugas pengembangan</td><td>Proyek mandiri atau menjadi teman belajar kelompok</td></tr>'
    + '</tbody></table>',
  p('Perhatikan baris terakhir. Diferensiasi juga berlaku bagi anak yang lebih cepat, termasuk anak berkebutuhan khusus yang punya kekuatan di bidang tertentu. Anak autis yang sangat kuat di pola dan angka, misalnya, bisa mendapat tantangan matematika lebih tinggi sambil tetap didukung di keterampilan sosialnya.'),
  p('Untuk anak dengan perilaku yang mengganggu belajar, penyesuaian lingkungan dan proses sebaiknya dipadukan dengan pendekatan dukungan perilaku positif seperti dibahas di <a href="/artikel/positive-behavior-support-pbs-anak">positive behavior support</a>. Untuk anak dengan disabilitas intelektual yang tujuannya lebih fungsional, rujukan yang relevan ada di <a href="/artikel/kurikulum-fungsional-untuk-anak-tunagrahita">kurikulum fungsional untuk anak tunagrahita</a>.'),
  foto(`${IMG}/diferensiasi-kelompok.webp`, 'Sekelompok siswa sekolah dasar berseragam pramuka duduk mengelilingi meja kayu di perpustakaan sambil membaca buku masing-masing', 'Siswa membaca bersama di perpustakaan sekolah dengan buku yang berbeda-beda. Kelompok yang anggotanya membaca bahan sesuai kemampuan masing-masing adalah contoh diferensiasi konten dalam kegiatan bersama.', 'https://commons.wikimedia.org/wiki/File:Literacy_Ambassador,_Aisyah_(35619248754).jpg'),

  '<h2 id="langkah">Langkah menyusun satu pelajaran yang terdiferensiasi</h2>',
  p('Guru sering membayangkan diferensiasi sebagai pekerjaan berlipat. Kenyataannya, satu pelajaran bisa didiferensiasi dengan beberapa langkah yang berulang setiap minggu. Urutan berikut bisa dipakai sebagai kerangka.'),
  '<ol>'
    + '<li><strong>Tentukan satu tujuan belajar yang jelas.</strong> Tuliskan dalam satu kalimat apa yang harus dipahami atau bisa dilakukan siswa di akhir pelajaran.</li>'
    + '<li><strong>Petakan siswa dari catatan asesmen.</strong> Kelompokkan secara kasar: yang perlu dukungan lebih, yang siap, dan yang perlu tantangan. Tandai siswa yang butuh akomodasi khusus.</li>'
    + '<li><strong>Pilih aspek yang akan disesuaikan.</strong> Cukup satu atau dua aspek, misalnya konten dan produk.</li>'
    + '<li><strong>Siapkan pilihan bertingkat.</strong> Dua atau tiga versi lembar kerja, atau beberapa cara menunjukkan pemahaman, sudah cukup untuk kebanyakan kelas.</li>'
    + '<li><strong>Atur kelompok secara lentur.</strong> Kelompok sebaiknya berubah sesuai tugas, tidak menetap sepanjang tahun, agar tidak menjadi label.</li>'
    + '<li><strong>Sediakan dukungan dari teman sebaya.</strong> Pasangan belajar seperti dijelaskan di <a href="/artikel/buddy-system-untuk-anak-abk-di-sekolah">buddy system</a> mengurangi beban guru dan melatih empati.</li>'
    + '<li><strong>Catat hasil dan sesuaikan minggu berikutnya.</strong> Penyesuaian yang tidak lagi diperlukan dikurangi, yang belum cukup ditambah.</li>'
    + '</ol>',
  p('Kerangka ini sejalan dengan prinsip <a href="' + URL_UDL + '" target="_blank" rel="nofollow noopener">Universal Design for Learning dari CAST</a>, yang menganjurkan guru merancang pilihan sejak awal melalui tiga jalur: beragam cara melibatkan siswa, beragam cara menyajikan informasi, serta beragam cara siswa bertindak dan mengekspresikan pemahaman. Bedanya, UDL menekankan rancangan yang dari awal terbuka bagi semua siswa, sedangkan diferensiasi menekankan penyesuaian berdasarkan pengamatan guru terhadap siswa tertentu. Keduanya saling melengkapi.'),
  p('Guru yang baru memulai tidak perlu menunggu pelatihan lengkap. Meski begitu, pelatihan membantu sekolah membangun kebiasaan bersama. Pilihan dan materi pelatihannya dibahas di <a href="/artikel/pelatihan-guru-inklusi">pelatihan guru inklusi</a>. Untuk siswa yang membutuhkan pendampingan terus-menerus di kelas, peran <a href="/artikel/shadow-teacher-adalah">shadow teacher</a> perlu dibicarakan bersama sekolah dan orang tua.'),
  foto(`${IMG}/diferensiasi-media.webp`, 'Seorang guru perempuan berkain batik mendampingi anak laki-laki berkacamata yang menaiki mainan beroda di ruang kelas berwarna cerah dengan rak alat peraga', 'Guru mendampingi seorang anak berkacamata bermain dengan mainan beroda di ruang kelas anak usia dini. Bagi anak tertentu, gerak dan benda nyata adalah jalan masuk belajar yang lebih efektif daripada lembar kerja.', 'https://commons.wikimedia.org/wiki/File:USAID_supports_better_opportunities_for_children_with_disabilities_(4325053812).jpg'),

  '<h2 id="keliru">Salah kaprah yang sering terjadi</h2>',
  p('Beberapa salah kaprah membuat diferensiasi gagal walaupun niatnya baik. Mengenalinya membantu guru dan orang tua menilai apakah praktik di kelas sudah tepat.'),
  '<ul>'
    + '<li><strong>Menurunkan tujuan tanpa alasan.</strong> Memberi anak ABK tugas mewarnai saat teman lain belajar pecahan bukan diferensiasi, melainkan pengucilan yang halus.</li>'
    + '<li><strong>Kelompok menetap sepanjang tahun.</strong> Kelompok tetap mudah berubah menjadi label, dan anak cepat tahu dirinya ditempatkan di kelompok yang dianggap lemah.</li>'
    + '<li><strong>Menyerahkan semuanya kepada pendamping.</strong> Pendamping membantu, tetapi tanggung jawab pembelajaran tetap ada pada guru kelas.</li>'
    + '<li><strong>Penyesuaian tidak pernah dikurangi.</strong> Akomodasi yang terus diberikan padahal anak sudah mampu justru menghambat kemandirian.</li>'
    + '<li><strong>Tidak ada catatan.</strong> Tanpa catatan, sekolah tidak bisa menunjukkan apa yang sudah dilakukan dan apakah berhasil.</li>'
    + '</ul>',
  p('Sekolah yang menjalankan inklusi dengan baik biasanya punya indikator yang bisa diperiksa, mulai dari perencanaan sampai evaluasi. Daftar indikatornya bisa dilihat di <a href="/artikel/indikator-keberhasilan-sekolah-inklusi">indikator keberhasilan sekolah inklusi</a>.'),

  '<h2 id="orangtua">Peran orang tua dan pendamping</h2>',
  p('Orang tua adalah sumber informasi asesmen yang paling kaya. Mereka tahu apa yang menenangkan anak, apa yang membuatnya bersemangat, dan kebiasaan apa yang sudah berhasil di rumah. Informasi seperti ini sering tidak terlihat dalam beberapa hari pertama di sekolah, padahal sangat menentukan pilihan konten dan lingkungan belajar.'),
  p('Ada beberapa pertanyaan yang layak diajukan orang tua kepada guru: apa tujuan belajar anak pada semester ini, penyesuaian apa yang diberikan dan pada pelajaran apa, bagaimana kemajuannya dicatat, serta kapan penyesuaian akan ditinjau ulang. Pertanyaan ini bukan untuk menguji guru, melainkan untuk menyamakan arah antara rumah dan sekolah.'),
  p('Di rumah, orang tua bisa memperkuat diferensiasi dengan cara sederhana. Pakai jadwal bergambar yang sama dengan di sekolah, latih keterampilan yang sedang dikejar dalam kegiatan sehari-hari, dan beri tahu guru bila ada perubahan besar seperti pola tidur atau obat. Kerja sama yang konsisten membuat penyesuaian di kelas lebih cepat membuahkan hasil.'),
  p('Di Sekolah Inklusi Taruna Imani yang dikelola YUKA, kami mendorong komunikasi rutin antara guru, pendamping, dan orang tua supaya penyesuaian bagi tiap anak bisa ditinjau bersama. Informasi tentang program sekolah tersedia di halaman <a href="/sekolah-inklusi-sleman">sekolah inklusi di Sleman</a> dan <a href="/program">program YUKA</a>.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(faq),
];

const articles = [
  {
    slug: 'diferensiasi-pembelajaran-untuk-anak-abk',
    titleTag: 'Diferensiasi Pembelajaran untuk Anak ABK: Konsep dan Contoh | YUKA',
    metaDesc: 'Diferensiasi pembelajaran untuk anak ABK: arti, dasar aturan PP 13/2020, empat aspek yang bisa disesuaikan, contoh per kebutuhan, dan langkah menyusunnya.',
    keywords: 'diferensiasi pembelajaran untuk anak abk, pembelajaran berdiferensiasi anak berkebutuhan khusus, akomodasi yang layak di sekolah',
    ogTitle: 'Diferensiasi Pembelajaran untuk Anak ABK: Konsep dan Contoh',
    ogDesc: 'Panduan diferensiasi konten, proses, produk, dan lingkungan belajar untuk anak berkebutuhan khusus di kelas inklusi.',
    h1: 'Diferensiasi Pembelajaran untuk Anak ABK: Konsep, Dasar Aturan, dan Contohnya',
    crumb: 'Diferensiasi Pembelajaran untuk Anak ABK',
    category: 'Pendidikan',
    datePublished: '2026-10-31T08:00:00+07:00', dateModified: '2026-10-31T08:00:00+07:00',
    dateDisplay: '31 Oktober 2026', readTime: '14 menit baca',
    image: {
      file: `${IMG}/diferensiasi-hero.webp`, w: 1200, h: 900,
      alt: 'Seorang guru perempuan berseragam biru berdiri di samping meja siswa sementara murid sekolah dasar menulis, salah satunya duduk di kursi roda',
      caption: 'Guru mendampingi siswa di kelas sekolah dasar yang juga diikuti siswa pengguna kursi roda. Kelas seperti ini menuntut penyesuaian bahan, cara belajar, dan tata ruang supaya semua siswa bisa ikut belajar.',
      credit: PD('https://commons.wikimedia.org/wiki/File:USAID_supports_better_opportunities_for_children_with_disabilities_(18950505793).jpg'),
    },
    bodyHtml: body.join('\n'), faq,
    related: [
      { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Rencana tertulis per anak berisi tujuan, layanan, dan cara evaluasi.' },
      { href: '/artikel/classroom-management-kelas-inklusi', title: 'Manajemen Kelas Inklusi', desc: 'Mengatur kelas dengan rentang kebutuhan yang lebar secara konsisten.' },
      { href: '/artikel/asesmen-abk-sebelum-masuk-sekolah', title: 'Asesmen ABK Sebelum Masuk Sekolah', desc: 'Langkah memetakan kebutuhan anak sebelum mulai belajar di sekolah.' },
    ],
    tags: ['Diferensiasi', 'SekolahInklusi', 'Pembelajaran'],
    sources: [
      { url: URL_PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
      { url: URL_P48, label: 'Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas pada PAUD Formal, Pendidikan Dasar, Pendidikan Menengah, dan Pendidikan Tinggi' },
      { url: URL_P12, label: 'Permendikbudristek Nomor 12 Tahun 2024 tentang Kurikulum' },
      { url: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016', label: 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas' },
      { url: URL_UDL, label: 'CAST: Universal Design for Learning Guidelines' },
      { url: URL_UNESCO, label: 'UNESCO: Inclusion in education' },
      { url: URL_WHO, label: 'WHO: Disability (fact sheet)' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 1 November 2026. Contoh penyesuaian di artikel ini adalah praktik umum di kelas inklusi dan tidak menggantikan asesmen profesional untuk tiap anak.',
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

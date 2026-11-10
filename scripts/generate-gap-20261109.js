'use strict';
/*
 * Generator artikel 9 November 2026 (cycle #94 /cek-daily-artikel, tambal hari kosong).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5", baris 148: "transisi anak abk dari sd ke smp".
 * Belum punya artikel (yang ada: transisi-anak-abk-dari-tk-ke-sd, jenjang berbeda).
 *
 * Fakta SPMB dari Permendikdasmen Nomor 3 Tahun 2025 seperti dikutip detik.com (4 Maret 2025)
 * dan Metro TV (11 Juni 2025). Akomodasi yang layak: PP 13/2020, Permendikbudristek 48/2023.
 * Foto: Wikimedia Commons (CC BY-SA 4.0 dan CC0), sekolah SMP di Indonesia. Diagram SVG sendiri.
 *
 *   node scripts/generate-gap-20261109.js --prepare   # tulis SVG diagram
 *   node scripts/generate-gap-20261109.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-gap-20261109.js             # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const BYSA = 'https://creativecommons.org/licenses/by-sa/4.0/';
const CC = (page, author, lic, licUrl) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">${author}</a> / Wikimedia Commons, <a href="${licUrl}" target="_blank" rel="nofollow noopener">${lic}</a>.`;
const fig = (file, w, h, alt, caption, credit) => `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${credit}</span></figcaption></figure>`;
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const faqHtml = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;
const ext = (url, text) => `<a href="${url}" target="_blank" rel="nofollow noopener">${text}</a>`;
const table = (caption, head, rows) => `<div class="table-wrap"><table><caption>${caption}</caption><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;

const diagrams = {};
const addDiagram = (file, markup) => { diagrams[file] = markup; };

const URL_DETIK = 'https://www.detik.com/edu/sekolah/d-7806175/kuota-jalur-prestasi-dan-afirmasi-smp-sma-naik-di-spmb-2025';
const URL_METRO = 'https://www.metrotvnews.com/read/NrWCo4DE-catat-ini-4-jalur-spmb-2025-beserta-jumlah-kuotanya';
const URL_PP13 = 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020';
const URL_P48 = 'https://peraturan.bpk.go.id/Details/285711';
const URL_UU8 = 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016';

const F_HERO = 'https://commons.wikimedia.org/wiki/File:Guru_dan_Siswa_SMPN_1_Lunang.jpg';
const F_LIT = 'https://commons.wikimedia.org/wiki/File:Literasi_Siswa_SMP_Negeri_Satap_Oebelo_Kab.TTS.jpg';
const F_PIKET = 'https://commons.wikimedia.org/wiki/File:Kesepakatan_kelas_pada_SMP_Negeri_1_Tigapanah.jpg';
const F_KELAS = 'https://commons.wikimedia.org/wiki/File:Ruang_Kelas_SMPN_3_Tanjung_Redeb.jpg';
const F_SISWA = 'https://commons.wikimedia.org/wiki/File:Siswa_dan_siswi_SMPN_2_Palangka_Raya.jpg';

const sections = [
  ['arti', 'Mengapa SD ke SMP terasa berat bagi anak ABK'],
  ['beda', 'Apa saja yang berubah di SMP'],
  ['spmb', 'Jalur masuk SMP: SPMB dan jalur afirmasi'],
  ['pilih', 'Memilih SMP: inklusi, SMPLB, atau pilihan lain'],
  ['jadwal', 'Jadwal persiapan dari kelas 5 sampai bulan pertama'],
  ['dokumen', 'Dokumen yang perlu dibawa ke sekolah baru'],
  ['kemandirian', 'Melatih kemandirian sebelum hari pertama'],
  ['sekolah', 'Peran sekolah asal dan sekolah tujuan'],
  ['tanda', 'Tanda anak butuh bantuan tambahan'],
  ['faq', 'Pertanyaan umum'],
];

const faq = [
  { q: 'Kapan sebaiknya persiapan transisi SD ke SMP untuk anak ABK dimulai?', a: 'Idealnya sejak kelas 5 SD. Satu sampai dua tahun memberi waktu untuk mengenali pilihan sekolah, melatih kemandirian, dan menyusun catatan perkembangan anak. Persiapan intensif biasanya dilakukan pada semester terakhir kelas 6, menjelang pendaftaran.' },
  { q: 'Apakah anak berkebutuhan khusus bisa mendaftar SMP negeri lewat jalur afirmasi?', a: 'Bisa. Dalam Sistem Penerimaan Murid Baru menurut Permendikdasmen Nomor 3 Tahun 2025, jalur afirmasi diperuntukkan bagi calon murid dari keluarga ekonomi tidak mampu dan calon murid penyandang disabilitas. Untuk SMP, kuota afirmasi paling sedikit 20 persen dari daya tampung sekolah. Syarat bukti disabilitas diatur oleh petunjuk teknis daerah masing-masing.' },
  { q: 'Apa beda SMP inklusi dan SMPLB?', a: 'SMP inklusi adalah SMP reguler yang menerima murid berkebutuhan khusus untuk belajar bersama murid lain dengan dukungan tertentu. SMPLB adalah jenjang SMP di sekolah luar biasa yang seluruh muridnya berkebutuhan khusus, dengan kelas kecil dan guru pendidikan khusus. Pilihan terbaik bergantung pada kebutuhan belajar anak, bukan pada label sekolah.' },
  { q: 'Dokumen apa yang sebaiknya diserahkan ke SMP baru?', a: 'Selain syarat pendaftaran umum, siapkan rapor dan catatan perkembangan dari SD, Program Pembelajaran Individual terakhir, hasil asesmen psikologis atau medis bila ada, daftar akomodasi yang selama ini membantu, serta profil singkat anak berisi kekuatan, pemicu stres, dan cara menenangkannya.' },
  { q: 'Bagaimana jika anak menolak berangkat sekolah di minggu pertama SMP?', a: 'Penolakan di awal cukup sering terjadi karena lingkungan baru terasa asing. Cari tahu pemicunya bersama wali kelas atau guru pendamping khusus, misalnya kebisingan, kelas yang berpindah-pindah, atau teman baru. Kurangi pemicu itu secara bertahap dan pertahankan rutinitas pagi yang sama. Bila penolakan berlanjut lebih dari beberapa minggu, libatkan psikolog.' },
  { q: 'Apakah Program Pembelajaran Individual dari SD masih berlaku di SMP?', a: 'PPI dari SD tidak otomatis berlaku, tetapi sangat berguna sebagai bahan awal. Tim di SMP biasanya melakukan asesmen ulang di awal tahun ajaran lalu menyusun PPI baru yang menyesuaikan mata pelajaran SMP. Menyerahkan PPI lama mempercepat proses itu.' },
  { q: 'Apakah anak ABK harus didampingi guru pendamping khusus di SMP?', a: 'Tidak selalu. Ada anak yang cukup dengan akomodasi di kelas, misalnya waktu tambahan atau soal yang dibacakan. Ada pula anak yang membutuhkan guru pendamping khusus sebagian atau sepanjang jam sekolah. Keputusannya sebaiknya berdasarkan asesmen dan dibicarakan bersama sekolah.' },
  { q: 'Bagaimana cara orang tua menilai apakah SMP benar-benar siap menerima anak ABK?', a: 'Tanyakan berapa murid berkebutuhan khusus yang sedang belajar di sana, apakah ada guru pendamping khusus atau unit layanan disabilitas, bagaimana penyesuaian ujian dilakukan, dan bagaimana sekolah menangani perundungan. Mintalah izin melihat kelas saat jam belajar berlangsung.' },
];

addDiagram(`${IMG}/sd-smp-linimasa.webp`, svg.flow('Linimasa persiapan transisi SD ke SMP', 'Contoh urutan kerja keluarga dan sekolah untuk anak berkebutuhan khusus', [
  { h: 'Kelas 5', d: 'Kenali kebutuhan anak dan kumpulkan catatan perkembangan serta PPI.' },
  { h: 'Awal kelas 6', d: 'Survei dan kunjungi dua sampai tiga calon SMP.' },
  { h: 'Semester 2 kelas 6', d: 'Siapkan dokumen, pantau jadwal SPMB daerah, lalu daftar.' },
  { h: 'Libur kenaikan', d: 'Kunjungan ulang, latihan rute, dan jadwal visual.' },
  { h: 'Bulan pertama SMP', d: 'Pantau bersama wali kelas dan GPK, susun PPI baru.' },
]));

const body = [
  p('<strong>Transisi anak ABK dari SD ke SMP</strong> adalah masa peralihan yang paling banyak mengubah keseharian anak berkebutuhan khusus: guru berganti tiap mata pelajaran, jadwal lebih padat, dan anak diharapkan lebih mandiri. Persiapan yang dimulai sejak kelas 5, kunjungan ke calon sekolah, dokumen yang lengkap, dan komunikasi antara SD dan SMP membuat peralihan ini jauh lebih mulus.'),
  p('Panduan ini kami tulis untuk orang tua dan guru yang mendampingi anak berkebutuhan khusus menjelang lulus SD. Isinya mencakup apa saja yang berubah di SMP, jalur pendaftaran lewat Sistem Penerimaan Murid Baru (SPMB), cara memilih sekolah, jadwal persiapan, sampai tanda-tanda anak memerlukan bantuan tambahan di bulan-bulan pertama.'),
  toc(sections),

  '<h2 id="arti">Mengapa SD ke SMP terasa berat bagi anak ABK</h2>',
  p('Bagi kebanyakan anak, masuk SMP terasa seperti naik kelas yang lebih besar. Bagi anak berkebutuhan khusus, perubahannya bisa terasa seperti pindah ke dunia lain. Di SD, anak umumnya diasuh oleh satu wali kelas yang hafal kebiasaannya. Di SMP, anak bertemu banyak guru mata pelajaran yang masing-masing hanya mengajar beberapa jam seminggu.'),
  p('Anak di spektrum autisme sering mengandalkan rutinitas yang dapat diprediksi, sehingga pergantian guru dan ruangan bisa memicu kecemasan. Anak dengan ADHD menghadapi tuntutan mengatur tugas dari banyak mata pelajaran sekaligus. Anak dengan kesulitan belajar spesifik bertemu bacaan yang lebih panjang dan istilah yang lebih abstrak. Anak dengan hambatan fisik perlu memastikan gedung baru bisa diakses.'),
  p('Usia masuk SMP juga bertepatan dengan awal masa remaja. Perubahan tubuh, keinginan diterima teman sebaya, dan kesadaran bahwa dirinya berbeda bisa muncul bersamaan. Karena itu persiapan transisi tidak hanya soal akademik, tetapi juga soal emosi dan pergaulan. Topik ini kami bahas lebih dalam di <a href="/artikel/kesehatan-mental-remaja-berkebutuhan-khusus">kesehatan mental remaja berkebutuhan khusus</a>.'),
  p('Kabar baiknya, sebagian besar kesulitan ini bisa diantisipasi. Prinsip yang sama dengan <a href="/artikel/transisi-anak-abk-dari-tk-ke-sd">transisi dari TK ke SD</a> tetap berlaku: kenalkan lebih awal, latih bertahap, dan pastikan sekolah baru memahami anak sebelum hari pertama.'),
  fig(`${IMG}/sd-smp-literasi.webp`, 1200, 900, 'Guru perempuan berbaju merah duduk di bangku kayu membimbing beberapa siswa SMP berseragam putih yang membaca buku di kelas berdinding biru', 'Guru membimbing kelompok kecil siswa SMP yang belum lancar membaca dalam kegiatan literasi pagi di SMP Negeri Satu Atap Oebelo, Timor Tengah Selatan. Dukungan kelompok kecil seperti ini sering dibutuhkan di awal SMP.', CC(F_LIT, 'Dianadola', 'CC BY-SA 4.0', BYSA)),

  '<h2 id="beda">Apa saja yang berubah di SMP</h2>',
  p('Memahami perubahan secara konkret membantu orang tua memilih apa yang perlu dilatih lebih dulu. Tabel berikut merangkum perbedaan yang paling sering dirasakan anak saat pindah dari SD ke SMP.'),
  table('Perubahan utama dari SD ke SMP dan dampaknya bagi anak berkebutuhan khusus', ['Aspek', 'Di SD', 'Di SMP', 'Yang perlu disiapkan'], [
    ['Guru', 'Satu wali kelas mengajar sebagian besar pelajaran', 'Guru berbeda untuk tiap mata pelajaran', 'Profil anak yang dibagikan ke semua guru'],
    ['Jadwal', 'Relatif tetap dan sederhana', 'Lebih banyak mata pelajaran, jadwal berganti tiap hari', 'Jadwal visual mingguan dan latihan membacanya'],
    ['Ruangan', 'Hampir selalu di satu kelas', 'Bisa pindah ke laboratorium, perpustakaan, lapangan', 'Kunjungan dan peta sederhana gedung'],
    ['Tugas', 'Dipantau ketat oleh wali kelas', 'Tugas dari banyak guru dengan tenggat berbeda', 'Buku agenda atau daftar periksa harian'],
    ['Materi', 'Konkret dan banyak gambar', 'Lebih abstrak, bacaan lebih panjang', 'Akomodasi yang tercatat di PPI'],
    ['Pergaulan', 'Teman lama sejak kelas 1', 'Teman baru dari banyak SD', 'Latihan keterampilan sosial dan teman pendamping'],
  ]),
  p('Tidak semua perubahan itu buruk. Banyak anak justru berkembang di SMP karena menemukan guru mata pelajaran yang cocok dengan minatnya, misalnya seni, olahraga, atau informatika. Tugas orang tua dan guru adalah mengurangi kejutan, bukan menghindari semua perubahan.'),
  fig(`${IMG}/sd-smp-jadwal-piket.webp`, 1200, 677, 'Papan berlatar hitam berisi kartu jadwal piket Senin sampai Sabtu dengan tulisan Jagalah Kebersihan di tengah', 'Papan jadwal piket kelas di SMP Negeri 1 Tigapanah, Karo. Aturan dan jadwal yang ditempel jelas di dinding membantu anak yang mengandalkan rutinitas memahami apa yang diharapkan setiap hari.', CC(F_PIKET, 'Yeslika Debora', 'CC BY-SA 4.0', BYSA)),

  '<h2 id="spmb">Jalur masuk SMP: SPMB dan jalur afirmasi</h2>',
  p('Sejak 2025, penerimaan murid baru di sekolah negeri memakai Sistem Penerimaan Murid Baru (SPMB) yang diatur Permendikdasmen Nomor 3 Tahun 2025, menggantikan PPDB. Ada empat jalur: domisili, afirmasi, prestasi, dan mutasi. Menurut ' + ext(URL_DETIK, 'detik.com yang mengutip aturan tersebut') + ', kuota jalur SMP adalah domisili paling sedikit 40 persen, afirmasi paling sedikit 20 persen, prestasi paling sedikit 25 persen, dan mutasi paling banyak 5 persen dari daya tampung.'),
  table('Kuota jalur SPMB jenjang SMP menurut Permendikdasmen Nomor 3 Tahun 2025', ['Jalur', 'Kuota SMP', 'Diperuntukkan bagi'], [
    ['Domisili', 'Paling sedikit 40 persen', 'Calon murid yang tinggal di wilayah yang ditetapkan pemerintah daerah'],
    ['Afirmasi', 'Paling sedikit 20 persen', 'Calon murid dari keluarga ekonomi tidak mampu dan calon murid penyandang disabilitas'],
    ['Prestasi', 'Paling sedikit 25 persen', 'Calon murid dengan prestasi akademik atau nonakademik'],
    ['Mutasi', 'Paling banyak 5 persen', 'Perpindahan tugas orang tua atau wali, dan anak guru di sekolah tempat orang tuanya mengajar'],
  ]),
  p('Bagi keluarga anak berkebutuhan khusus, jalur yang paling relevan adalah afirmasi. ' + ext(URL_METRO, 'Metro TV') + ' menjelaskan bahwa jalur ini diperuntukkan bagi calon murid dari keluarga ekonomi tidak mampu dan calon murid penyandang disabilitas. Artinya, anak penyandang disabilitas bersaing di dalam kuota afirmasi, bukan di kuota terpisah.'),
  p('Pemerintah daerah menyusun petunjuk teknis sendiri, termasuk jadwal, cara mendaftar, dan bukti yang diminta untuk jalur afirmasi disabilitas. Karena itu, pantau situs SPMB dinas pendidikan kabupaten atau kota Anda sejak awal semester genap kelas 6. Kalau anak tidak masuk lewat afirmasi, jalur domisili tetap terbuka. Sekolah swasta inklusi dan SMPLB biasanya memakai proses pendaftaran sendiri di luar SPMB negeri.'),

  '<h2 id="pilih">Memilih SMP: inklusi, SMPLB, atau pilihan lain</h2>',
  p('Pilihan sekolah sebaiknya ditentukan oleh kebutuhan belajar anak saat ini, bukan oleh gengsi atau kebiasaan keluarga. Anak yang di SD mampu mengikuti kelas reguler dengan sedikit dukungan biasanya cocok di SMP inklusi. Anak yang membutuhkan kurikulum yang banyak dimodifikasi dan kelas kecil mungkin lebih berkembang di SMPLB. Perbandingan keduanya kami uraikan di <a href="/artikel/apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a>.'),
  p('Secara hukum, ' + ext(URL_UU8, 'UU Nomor 8 Tahun 2016') + ' menjamin hak penyandang disabilitas atas pendidikan di semua jenis, jalur, dan jenjang. ' + ext(URL_PP13, 'PP Nomor 13 Tahun 2020') + ' mewajibkan satuan pendidikan menyediakan akomodasi yang layak, dan ' + ext(URL_P48, 'Permendikbudristek Nomor 48 Tahun 2023') + ' mengatur pelaksanaannya, termasuk unit layanan disabilitas. Aturan ini menjadi dasar ketika orang tua meminta penyesuaian kepada sekolah.'),
  p('Saat mengunjungi calon sekolah, ajukan pertanyaan berikut:'),
  ol([
    'Berapa murid berkebutuhan khusus yang sedang belajar di sini, dan di kelas berapa saja?',
    'Apakah ada <a href="/artikel/gpk-adalah">guru pendamping khusus</a>, dan berapa anak yang didampingi tiap GPK?',
    'Bagaimana sekolah menyusun dan mengevaluasi <a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual</a>?',
    'Bagaimana penyesuaian ujian dan penilaian dilakukan, misalnya waktu tambahan atau soal dibacakan?',
    'Apakah ada ruang tenang untuk anak yang kewalahan?',
    'Bagaimana sekolah mencegah dan menangani perundungan?',
    'Apakah gedung bisa diakses kursi roda bila anak membutuhkannya?',
  ]),
  p('Jawaban yang jujur dan konkret, termasuk pengakuan tentang keterbatasan sekolah, biasanya lebih bisa dipercaya daripada janji bahwa semua akan beres. Kalau keluarga masih menimbang jalur di luar sekolah formal, baca juga <a href="/artikel/homeschooling-vs-sekolah-inklusi">homeschooling atau sekolah inklusi</a>.'),
  fig(`${IMG}/sd-smp-ruang-kelas.webp`, 1200, 900, 'Ruang kelas SMP kosong berdinding hijau dengan deretan meja dan kursi yang dinaikkan ke atas meja, kipas angin di langit-langit', 'Ruang kelas SMPN 3 Tanjung Redeb, Berau, dalam keadaan kosong. Mengajak anak melihat ruang kelas saat sepi sebelum hari pertama membantu mengurangi kejutan dari suasana baru.', CC(F_KELAS, 'Kenhad75', 'CC0', 'https://creativecommons.org/publicdomain/zero/1.0/')),

  '<h2 id="jadwal">Jadwal persiapan dari kelas 5 sampai bulan pertama</h2>',
  p('Persiapan yang dicicil membuat keluarga tidak terburu-buru menjelang pendaftaran. Diagram dan tabel berikut memberi gambaran urutan kerja yang bisa disesuaikan dengan kondisi anak dan jadwal SPMB di daerah Anda.'),
  diag(`${IMG}/sd-smp-linimasa.webp`, 'Diagram alur lima tahap persiapan transisi dari kelas 5 SD sampai bulan pertama SMP', 'Lima tahap persiapan transisi SD ke SMP. Jadwal pendaftaran mengikuti petunjuk teknis SPMB pemerintah daerah masing-masing.'),
  table('Contoh jadwal persiapan transisi SD ke SMP untuk anak berkebutuhan khusus', ['Waktu', 'Kegiatan keluarga', 'Kegiatan sekolah'], [
    ['Kelas 5', 'Catat kekuatan, tantangan, dan akomodasi yang berhasil', 'Perbarui <a href="/artikel/asesmen-abk">asesmen</a> dan PPI'],
    ['Awal kelas 6', 'Survei dan kunjungi dua sampai tiga calon SMP', 'Wali kelas menyiapkan catatan perkembangan'],
    ['Semester 2 kelas 6', 'Siapkan dokumen, pantau jadwal SPMB, daftar', 'Bantu surat keterangan dan rapor yang dibutuhkan'],
    ['Libur kenaikan kelas', 'Kunjungan ulang, latihan rute, buat jadwal visual', 'SD dan SMP bertukar informasi tentang anak'],
    ['Masa pengenalan sekolah', 'Dampingi seperlunya, bicarakan perasaan anak', 'Kenalkan anak pada wali kelas, GPK, dan ruang tenang'],
    ['Bulan pertama', 'Komunikasi rutin dengan wali kelas', 'Asesmen awal dan penyusunan PPI baru'],
  ]),
  p('Kalau waktunya sudah mepet, misalnya anak baru terdiagnosis di kelas 6, prioritaskan tiga hal: memilih sekolah yang siap, menyerahkan profil anak sebelum masuk, dan menyepakati satu orang di sekolah yang menjadi kontak utama keluarga.'),

  '<h2 id="dokumen">Dokumen yang perlu dibawa ke sekolah baru</h2>',
  p('Sekolah baru tidak bisa membantu anak yang tidak dikenalnya. Berkas yang lengkap memperpendek masa ketika guru masih menebak-nebak. Selain syarat pendaftaran yang diminta panitia SPMB, siapkan berkas berikut:'),
  ul([
    '<strong>Rapor dan catatan perkembangan SD.</strong> Termasuk deskripsi capaian yang ditulis guru. Contoh isinya ada di <a href="/artikel/cara-membuat-rapor-anak-berkebutuhan-khusus">cara membuat rapor anak berkebutuhan khusus</a>.',
    '<strong>PPI terakhir.</strong> Berisi tujuan, layanan, dan cara evaluasi yang dipakai di SD.',
    '<strong>Hasil asesmen.</strong> Laporan psikolog, dokter, atau terapis yang masih relevan.',
    '<strong>Daftar akomodasi yang berhasil.</strong> Misalnya duduk di depan, soal dibacakan, waktu tambahan, atau istirahat singkat.',
    '<strong>Contoh karya anak.</strong> Kumpulan karya dari <a href="/artikel/penilaian-portofolio-anak-abk">portofolio</a> memperlihatkan kemampuan nyata anak.',
    '<strong>Profil satu halaman.</strong> Kekuatan dan minat anak, pemicu stres, tanda awal kewalahan, cara menenangkan, dan kontak orang tua.',
  ]),
  p('Profil satu halaman adalah berkas yang paling sering dibaca guru mata pelajaran karena singkat. Tulis dengan bahasa positif dan konkret, misalnya "Raka lebih mudah memahami instruksi tertulis daripada lisan" alih-alih "Raka tidak mendengarkan".'),

  '<h2 id="kemandirian">Melatih kemandirian sebelum hari pertama</h2>',
  p('Kemandirian yang dilatih di rumah selama libur kenaikan kelas sangat membantu anak bertahan di minggu-minggu pertama. Pilih beberapa keterampilan yang paling dibutuhkan, lalu latih sedikit demi sedikit setiap hari:'),
  ol([
    '<strong>Membaca jadwal pelajaran.</strong> Buat jadwal mingguan bergambar, lalu latih anak menyiapkan buku sesuai jadwal setiap malam. Cara membuatnya ada di <a href="/artikel/jadwal-visual-anak-autis">jadwal visual anak autis</a>.',
    '<strong>Mengelola tas dan barang.</strong> Gunakan daftar periksa di pintu kamar untuk seragam, buku, alat tulis, dan bekal.',
    '<strong>Mencatat tugas.</strong> Biasakan anak menulis atau memotret tugas di buku agenda sebelum pulang.',
    '<strong>Perjalanan ke sekolah.</strong> Latih rute beberapa kali, termasuk apa yang dilakukan bila terlambat atau tersesat.',
    '<strong>Meminta bantuan.</strong> Latih kalimat sederhana seperti "Bu, saya belum paham, boleh diulang?" lewat bermain peran.',
    '<strong>Mengenali rasa kewalahan.</strong> Sepakati tanda atau kartu yang bisa ditunjukkan anak kepada guru bila butuh jeda.',
  ]),
  p('Latihan sosial juga penting. Ceritakan lewat cerita bergambar apa yang akan terjadi pada masa pengenalan sekolah, siapa saja yang akan ditemui, dan apa yang boleh dilakukan saat bingung. Bicarakan pula cara menghadapi ejekan. Langkah pencegahannya kami tulis di <a href="/artikel/anak-abk-dan-bullying-cara-mencegah">anak ABK dan bullying</a>.'),
  fig(`${IMG}/sd-smp-siswa.webp`, 1200, 800, 'Puluhan siswa SMP berkaos hitam dan beberapa penari berkostum adat merah berfoto bersama di halaman sekolah', 'Siswa SMPN 2 Palangka Raya berfoto bersama sebelum tampil menari di halaman sekolah. Kegiatan seni dan ekstrakurikuler sering menjadi tempat anak berkebutuhan khusus menemukan teman dan rasa percaya diri di SMP.', CC(F_SISWA, 'ParadoxP P', 'CC BY-SA 4.0', BYSA)),

  '<h2 id="sekolah">Peran sekolah asal dan sekolah tujuan</h2>',
  p('Transisi yang baik adalah kerja sama dua sekolah, bukan hanya urusan orang tua. SD yang mengenal anak selama enam tahun memegang informasi berharga yang sering hilang saat anak lulus. Wali kelas 6 dan guru pendamping khusus di SD bisa menulis catatan serah terima berisi strategi yang berhasil dan yang tidak.'),
  p('Di pihak SMP, langkah yang membantu antara lain menunjuk satu kontak utama untuk keluarga, membagikan profil anak kepada semua guru mata pelajaran, memberi kesempatan anak melihat sekolah sebelum ramai, dan melakukan asesmen awal pada minggu-minggu pertama. Setelah itu tim menyusun PPI baru bersama orang tua.'),
  p('Guru mata pelajaran tidak perlu menjadi ahli pendidikan khusus untuk membantu. Rancangan pelajaran yang luwes sejak awal, seperti dijelaskan dalam <a href="/artikel/universal-design-for-learning-udl-abk">Universal Design for Learning</a>, sudah mengurangi banyak hambatan. Bila guru mata pelajaran dan GPK mengajar bersama, model <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching</a> bisa dipakai. Penyesuaian ujian dapat mengacu pada <a href="/artikel/adaptasi-soal-ujian-untuk-anak-abk">adaptasi soal ujian untuk anak ABK</a>.'),
  p('Orang tua tetap menjadi penghubung yang paling konsisten. Pertemuan singkat secara rutin di bulan pertama, misalnya dua minggu sekali, lebih efektif daripada menunggu masalah membesar. Peran keluarga dibahas lebih lengkap di <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.'),

  '<h2 id="tanda">Tanda anak butuh bantuan tambahan</h2>',
  p('Masa penyesuaian wajar berlangsung beberapa minggu. Namun beberapa tanda menunjukkan anak memerlukan dukungan lebih dari biasanya. Perhatikan pola yang menetap, bukan satu kejadian.'),
  table('Tanda yang perlu diperhatikan di bulan-bulan pertama SMP dan langkah awalnya', ['Tanda', 'Kemungkinan penyebab', 'Langkah awal'], [
    ['Sering menolak berangkat atau mengeluh sakit setiap pagi', 'Kecemasan, kebisingan, atau masalah dengan teman', 'Bicarakan dengan wali kelas, cari pemicu, kurangi bertahap'],
    ['Tugas sering tidak dikumpulkan', 'Kesulitan mengatur tugas dari banyak guru', 'Buku agenda harian yang dicek guru dan orang tua'],
    ['Nilai turun tajam di mata pelajaran tertentu', 'Materi terlalu abstrak atau bacaan terlalu panjang', 'Minta asesmen dan akomodasi tambahan di PPI'],
    ['Menarik diri atau tidak punya teman', 'Kesulitan sosial atau perundungan', 'Libatkan GPK, cari kegiatan ekstrakurikuler yang cocok'],
    ['Ledakan emosi di sekolah atau rumah meningkat', 'Kelelahan menyesuaikan diri', 'Sediakan jeda dan ruang tenang, konsultasikan ke psikolog'],
  ]),
  p('Bila tanda-tanda itu bertahan lebih dari satu bulan, ajukan pertemuan dengan sekolah untuk meninjau dukungan. Untuk kecemasan yang berat, minta bantuan psikolog anak. Informasi pendukungnya ada di <a href="/artikel/gangguan-kecemasan-anak">gangguan kecemasan pada anak</a>.'),
  p('Ingat bahwa tujuan transisi bukan membuat anak langsung sama dengan teman-temannya. Tujuannya adalah anak merasa aman, tetap belajar, dan sedikit demi sedikit menjadi lebih mandiri di lingkungan barunya. Dengan persiapan yang cukup, SMP bisa menjadi masa ketika anak berkebutuhan khusus menemukan minat dan kemampuannya sendiri. Gambaran besar pendidikan inklusi ada di <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a>.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(faq),
];

const articles = [
  {
    slug: 'transisi-anak-abk-dari-sd-ke-smp',
    titleTag: 'Transisi Anak ABK dari SD ke SMP: Panduan Orang Tua | YUKA',
    metaDesc: 'Transisi anak ABK dari SD ke SMP: apa yang berubah, jalur afirmasi SPMB, memilih SMP inklusi atau SMPLB, jadwal persiapan, dokumen, dan tanda butuh bantuan.',
    keywords: 'transisi anak abk dari sd ke smp, anak berkebutuhan khusus masuk smp, spmb jalur afirmasi disabilitas, smp inklusi',
    ogTitle: 'Transisi Anak ABK dari SD ke SMP',
    ogDesc: 'Panduan orang tua dan guru menyiapkan anak berkebutuhan khusus pindah dari SD ke SMP, dari kelas 5 sampai bulan pertama.',
    h1: 'Transisi Anak ABK dari SD ke SMP: Persiapan, Jalur Masuk, dan Pendampingan',
    crumb: 'Transisi Anak ABK dari SD ke SMP',
    category: 'Pendidikan',
    datePublished: '2026-11-09T08:00:00+07:00', dateModified: '2026-11-09T08:00:00+07:00',
    dateDisplay: '9 November 2026', readTime: '12 menit baca',
    image: {
      file: `${IMG}/sd-smp-hero.webp`, w: 1200, h: 800,
      alt: 'Guru dan siswa SMP berseragam berfoto bersama di lapangan rumput depan gedung sekolah, beberapa siswa memegang piagam',
      caption: 'Guru dan siswa SMPN 1 Lunang, Sumatera Barat, berfoto bersama di halaman sekolah. Masuk SMP berarti anak akan bertemu lebih banyak guru dan teman baru dibanding di SD.',
      credit: CC(F_HERO, 'Dyima Guszita', 'CC BY-SA 4.0', BYSA),
    },
    bodyHtml: body.join('\n'), faq,
    related: [
      { href: '/artikel/transisi-anak-abk-dari-tk-ke-sd', title: 'Transisi Anak ABK dari TK ke SD', desc: 'Menyiapkan anak berkebutuhan khusus masuk sekolah dasar.' },
      { href: '/artikel/apa-perbedaan-sekolah-inklusi-dan-slb', title: 'Perbedaan Sekolah Inklusi dan SLB', desc: 'Membandingkan dua pilihan sekolah untuk anak ABK.' },
      { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Rencana tertulis per anak berisi tujuan, layanan, dan cara evaluasi.' },
    ],
    tags: ['TransisiSekolah', 'SekolahInklusi', 'SPMB'],
    sources: [
      { url: URL_DETIK, label: 'detik.com (4 Maret 2025): Kuota Jalur Prestasi dan Afirmasi SMP-SMA Naik di SPMB 2025' },
      { url: URL_METRO, label: 'Metro TV (11 Juni 2025): Catat! Ini 4 Jalur SPMB 2025 Beserta Jumlah Kuotanya' },
      { url: URL_UU8, label: 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas' },
      { url: URL_PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
      { url: URL_P48, label: 'Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 11 November 2026. Kuota SPMB mengacu pada Permendikdasmen Nomor 3 Tahun 2025 sebagaimana dikutip media; jadwal dan syarat teknis mengikuti petunjuk teknis pemerintah daerah. Jadwal persiapan adalah contoh praktik dan perlu disesuaikan dengan kondisi tiap anak.',
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

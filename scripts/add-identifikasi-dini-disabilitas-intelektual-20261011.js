'use strict';
/*
 * Artikel baru cycle #76: identifikasi-dini-disabilitas-intelektual (tayang terjadwal 2026-10-17).
 * Generator ini SENGAJA tidak menulis kartu ke blog.html: kartu ditambah publish-scheduled.yml
 * saat tanggal tayang. Hanya menulis artikel/identifikasi-dini-disabilitas-intelektual.html.
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags, SITE } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'identifikasi-dini-disabilitas-intelektual';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const DATE = '2026-10-17';

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
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((x) => `<li>${x}</li>`).join('')}</ol>`;

const hero = image(
  'Dokumentasi/museum-gunung-merapi-anak-anak-menonton-auditorium-merah-012.webp',
  'Rombongan siswa dan pendamping YUKA duduk di kursi auditorium saat kegiatan kunjungan edukasi',
  'Siswa dan pendamping duduk bersama di sebuah auditorium saat kunjungan edukasi. Foto ini dokumentasi kegiatan YUKA, bukan sesi skrining atau asesmen.'
);
const bodyImages = {
  group: 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-041.webp',
  gate: 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-100.webp',
  guide: 'Dokumentasi/museum-gunung-merapi-gambar-007.webp',
  costume: 'Dokumentasi/candi-plaosan-anak-kostum-tradisional-candi-borobudur-031.webp',
};

const faq = [
  { q: 'Apakah identifikasi dini sama dengan memberi label pada anak?', a: 'Tidak. Identifikasi dini adalah proses mengenali kebutuhan anak sedini mungkin melalui pemantauan, skrining, dan bila perlu evaluasi. Tujuannya membuka akses pada dukungan, bukan menempelkan label. Diagnosis hanya ditegakkan oleh tenaga profesional setelah penilaian yang menyeluruh.' },
  { q: 'Pada usia berapa disabilitas intelektual bisa dikenali?', a: 'Tanda keterlambatan dapat terlihat sejak bayi atau balita, tetapi diagnosis disabilitas intelektual biasanya baru dapat ditegakkan dengan lebih yakin pada usia yang lebih besar. IDAI menjelaskan bahwa untuk anak di bawah 5 tahun lebih sering dipakai istilah keterlambatan perkembangan umum, karena tes kecerdasan lebih andal pada anak yang lebih tua.' },
  { q: 'Apakah anak dengan keterlambatan perkembangan umum pasti mengalami disabilitas intelektual?', a: 'Tidak selalu. IDAI menyebutkan bahwa anak dengan keterlambatan perkembangan umum tidak selalu mengalami disabilitas intelektual di kemudian hari. Karena itu anak perlu dipantau dan dievaluasi ulang secara berkala sambil tetap mendapat stimulasi dan intervensi.' },
  { q: 'Apakah skor IQ saja cukup untuk menentukan disabilitas intelektual?', a: 'Tidak. American Psychiatric Association menjelaskan bahwa diagnosis melihat fungsi intelektual dan fungsi adaptif, dan skor IQ harus ditafsirkan dalam konteks kemampuan anak sehari-hari. Keterbatasan juga harus mulai tampak pada masa perkembangan. Tes IQ tunggal tanpa penilaian fungsi adaptif tidak cukup.' },
  { q: 'Apa itu KPSP dan siapa yang bisa memakainya?', a: 'KPSP atau Kuesioner Pra Skrining Perkembangan adalah instrumen yang disusun Kementerian Kesehatan RI. Menurut IDAI, kuesioner ini berisi 9 sampai 10 pertanyaan tentang kemampuan yang sudah dicapai anak sesuai kelompok usianya. Hasilnya bukan diagnosis; bila perkembangan meragukan, orang tua dianjurkan berkonsultasi ke dokter.' },
  { q: 'Mengapa bayi baru lahir perlu skrining hipotiroid kongenital?', a: 'Kemenkes menjelaskan bahwa hipotiroid kongenital yang tidak terdeteksi dapat menyebabkan gangguan pertumbuhan fisik dan keterbelakangan mental. Skrining dilakukan dengan mengambil sampel darah dari tumit bayi, idealnya pada usia 48 sampai 72 jam, sehingga pengobatan dapat dimulai sedini mungkin bila hasilnya positif.' },
  { q: 'Bolehkah intervensi dimulai sebelum ada diagnosis pasti?', a: 'Boleh, dan sering kali dianjurkan. CDC menjelaskan bahwa intervensi dini ditujukan bagi bayi dan anak kecil dengan keterlambatan perkembangan maupun disabilitas, dan kelayakannya ditentukan dari evaluasi kemampuan anak. Stimulasi yang terarah tidak perlu menunggu label diagnosis.' },
  { q: 'Apa yang bisa dilakukan sekolah bila guru melihat tanda kesulitan?', a: 'Guru dapat mencatat pengamatan secara objektif, berdiskusi dengan orang tua tanpa menghakimi, menyesuaikan cara mengajar sementara, dan menyarankan pemeriksaan ke tenaga profesional. Guru tidak menegakkan diagnosis, tetapi pengamatannya sangat membantu proses evaluasi.' },
];

const faqHtml = `<h2 id="faq">Pertanyaan yang Sering Diajukan</h2>\n${faq.map((f) => `<h3>${f.q}</h3>\n<p>${f.a}</p>`).join('\n')}`;

const redFlagTable = '<table class="article-table"><caption>Tanda bahaya gangguan kognitif menurut IDAI (bukan alat diagnosis)</caption><thead><tr><th>Usia anak</th><th>Tanda yang patut dikonsultasikan</th></tr></thead><tbody>'
  + '<tr><td>2 bulan</td><td>Kurang mampu memusatkan pandangan (fiksasi)</td></tr>'
  + '<tr><td>4 bulan</td><td>Mata kurang mampu mengikuti gerak benda</td></tr>'
  + '<tr><td>6 bulan</td><td>Belum berespons atau mencari sumber suara</td></tr>'
  + '<tr><td>9 bulan</td><td>Belum mengoceh seperti "mama" atau "baba"</td></tr>'
  + '<tr><td>24 bulan</td><td>Belum ada kata yang bermakna</td></tr>'
  + '<tr><td>36 bulan</td><td>Belum dapat merangkai tiga kata</td></tr>'
  + '</tbody></table>';

const layerTable = '<table class="article-table"><caption>Tiga lapis identifikasi dini menurut kerangka CDC</caption><thead><tr><th>Aspek</th><th>Pemantauan perkembangan</th><th>Skrining perkembangan</th><th>Evaluasi diagnostik</th></tr></thead><tbody>'
  + '<tr><td>Siapa</td><td>Orang tua, pengasuh, guru, siapa pun yang dekat dengan anak</td><td>Tenaga kesehatan atau pendidik anak usia dini yang terlatih memakai alat skrining</td><td>Dokter spesialis anak, dokter tumbuh kembang, psikolog, atau tim profesional</td></tr>'
  + '<tr><td>Alat</td><td>Daftar tonggak perkembangan sederhana</td><td>Kuesioner atau daftar periksa formal yang tervalidasi</td><td>Pemeriksaan klinis, tes kecerdasan terstandar, penilaian fungsi adaptif, pemeriksaan penunjang</td></tr>'
  + '<tr><td>Kapan</td><td>Terus-menerus, terutama sejak lahir sampai 5 tahun</td><td>Pada usia tertentu (AAP: 9, 18, dan 30 bulan) dan kapan pun ada kekhawatiran</td><td>Bila hasil skrining atau pengamatan menimbulkan kekhawatiran</td></tr>'
  + '<tr><td>Hasil</td><td>Gambaran kemajuan anak dari waktu ke waktu</td><td>Apakah anak perlu dukungan atau evaluasi lebih lanjut</td><td>Penjelasan kondisi anak, kemungkinan diagnosis, dan rencana dukungan</td></tr>'
  + '</tbody></table>';

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> identifikasi dini disabilitas intelektual adalah proses bertahap untuk mengenali kebutuhan anak sedini mungkin, dimulai dari pemantauan tonggak perkembangan oleh keluarga, skrining dengan alat resmi seperti KPSP, lalu evaluasi oleh tenaga profesional bila ada kekhawatiran. Diagnosis hanya ditegakkan oleh profesional dengan melihat tiga hal sekaligus: fungsi intelektual, fungsi adaptif, dan awal kesulitan pada masa perkembangan. Intervensi boleh dimulai tanpa menunggu diagnosis.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol>'
    + '<li><a href="#mengapa">Mengapa identifikasi dini penting?</a></li>'
    + '<li><a href="#tanda">Tanda yang patut diwaspadai menurut usia</a></li>'
    + '<li><a href="#tiga-lapis">Pemantauan, skrining, dan evaluasi diagnostik</a></li>'
    + '<li><a href="#sdidtk">SDIDTK dan KPSP di layanan kesehatan</a></li>'
    + '<li><a href="#penyebab">Pemeriksaan untuk mencari penyebab</a></li>'
    + '<li><a href="#diagnosis">Siapa yang menegakkan diagnosis?</a></li>'
    + '<li><a href="#langkah">Langkah praktis bagi orang tua</a></li>'
    + '<li><a href="#intervensi">Intervensi dini tanpa menunggu label</a></li>'
    + '<li><a href="#sekolah">Peran guru dan sekolah</a></li>'
    + '<li><a href="#keluarga">Menjaga hati keluarga selama proses</a></li>'
    + '<li><a href="#faq">Pertanyaan yang sering diajukan</a></li>'
    + '</ol></div>',

  h2('mengapa', 'Mengapa Identifikasi Dini Penting?'),
  p('Setiap anak tumbuh dengan kecepatannya sendiri. IDAI mencontohkan bahwa anak masih dianggap wajar bila mulai berjalan di rentang usia 10 sampai 18 bulan, sehingga perbedaan antaranak seusia sangat umum. Justru karena rentangnya lebar, orang tua sering ragu: apakah ini sekadar lambat, atau tanda bahwa anak membutuhkan dukungan khusus?'),
  p('Identifikasi dini menjawab keraguan itu dengan cara yang tertata. Bukan dengan menebak, bukan pula dengan menunggu sampai anak masuk sekolah dan tertinggal jauh. IDAI menegaskan bahwa dengan mengetahui keterlambatan sejak dini, penyebabnya dapat dicari dan intervensi yang tepat dapat segera dimulai.'),
  p(`Artikel ini berfokus pada <em>proses</em> identifikasi: tanda apa yang patut dicermati, tahapan pemeriksaan, siapa yang berwenang menegakkan diagnosis, dan apa yang bisa dilakukan keluarga sambil menunggu. Untuk pengertian, klasifikasi, dan penyebab disabilitas intelektual secara lengkap, baca <a href="disabilitas-intelektual-adalah">pengertian disabilitas intelektual</a> dan panduan induk <a href="disabilitas-intelektual">disabilitas intelektual</a>.`),
  p('Satu hal perlu diingat sejak awal: mengenali tanda bukan berarti mendiagnosis. Tanda-tanda di bawah ini adalah alasan untuk berkonsultasi, bukan kesimpulan tentang masa depan anak.'),

  h2('tanda', 'Tanda yang Patut Diwaspadai Menurut Usia'),
  p('IDAI menyusun daftar tanda bahaya (red flag) gangguan kognitif yang sederhana dan mudah diamati orang tua. Bila menemukan salah satunya, IDAI menyarankan agar orang tua tidak menunda dan segera memeriksakan anak ke tenaga kesehatan.'),
  redFlagTable,
  p(`Tanda ini berkaitan erat dengan tonggak perkembangan bahasa dan penglihatan. Untuk memahami tahap awal bahasa bayi, baca <a href="babbling-dan-cooing-tahap-perkembangan-bahasa">tahap babbling dan cooing</a>. Tonggak gerak juga penting dicatat, karena keterlambatan pada dua ranah atau lebih perlu perhatian; rinciannya ada di <a href="milestone-motorik-kasar-anak-0-12-bulan">milestone motorik kasar 0 sampai 12 bulan</a> dan <a href="what-is-a-milestone-for-a-kid">penjelasan tentang milestone anak</a>.`),
  p('Pada anak yang lebih besar, MedlinePlus dari National Library of Medicine menyebutkan beberapa hal yang dapat membuat keluarga curiga:'),
  ul([
    'perkembangan keterampilan gerak, bahasa, dan bina diri yang lambat atau tidak muncul dibanding teman sebaya;',
    'kesulitan mengikuti pelajaran di sekolah;',
    'kesulitan menyesuaikan diri dengan situasi baru;',
    'kesulitan memahami dan mengikuti aturan sosial;',
    'kurangnya rasa ingin tahu terhadap lingkungan.',
  ]),
  p('Daftar ini tidak dimaksudkan untuk menilai anak sendiri di rumah. Banyak hal lain, seperti gangguan pendengaran, penglihatan, atau kesulitan belajar spesifik, dapat menimbulkan gambaran serupa. Karena itulah langkah berikutnya adalah skrining dan evaluasi.'),
  fig(bodyImages.group, 'Rombongan siswa dan pendamping YUKA duduk bersama di tangga sebuah candi saat kegiatan kunjungan', 'Kegiatan kelompok memberi kesempatan pendamping mengamati keterampilan sehari-hari anak, seperti mengikuti arahan dan berinteraksi. Foto ini dokumentasi kunjungan edukasi YUKA, bukan kegiatan skrining.'),

  h2('tiga-lapis', 'Pemantauan, Skrining, dan Evaluasi Diagnostik: Apa Bedanya?'),
  p('CDC membedakan dengan jelas antara pemantauan perkembangan dan skrining perkembangan. Pemantauan adalah mengamati bagaimana anak tumbuh dan berubah dari waktu ke waktu, apakah ia mencapai tonggak perkembangan dalam bermain, belajar, berbicara, bertindak, dan bergerak. Pemantauan bisa dilakukan siapa saja yang dekat dengan anak.'),
  p('Skrining lebih formal. CDC menjelaskan bahwa skrining memakai kuesioner atau daftar periksa berbasis riset yang menanyakan bahasa, gerak, berpikir, perilaku, dan emosi anak. American Academy of Pediatrics (AAP) merekomendasikan skrining perkembangan untuk semua anak setidaknya pada usia 9, 18, dan 30 bulan, ditambah skrining kapan pun ada kekhawatiran.'),
  layerTable,
  p('Hasil skrining tidak sama dengan diagnosis. Menurut CDC, skrining bertujuan mengetahui apakah anak membutuhkan dukungan lebih dan apakah evaluasi lanjutan dianjurkan. Evaluasi diagnostik dilakukan oleh profesional dengan pemeriksaan yang jauh lebih menyeluruh. Penjelasan tentang bentuk penilaian ini ada di artikel <a href="asesmen-abk">asesmen anak berkebutuhan khusus</a>.'),

  h2('sdidtk', 'SDIDTK dan KPSP di Layanan Kesehatan'),
  p('Di Indonesia, pemantauan dan skrining perkembangan dikenal melalui program Stimulasi, Deteksi, dan Intervensi Dini Tumbuh Kembang (SDIDTK) dari Kementerian Kesehatan. Dokumentasi platform SATUSEHAT Kemenkes untuk data tumbuh kembang mencantumkan beberapa instrumen dalam SDIDTK, antara lain Kuesioner Pra Skrining Perkembangan (KPSP), Tes Daya Dengar (TDD), dan Tes Daya Lihat (TDL).'),
  p('IDAI menjelaskan bahwa KPSP adalah instrumen pemeriksaan perkembangan yang disusun Kementerian Kesehatan RI, berisi 9 sampai 10 pertanyaan tentang kemampuan yang sudah dicapai anak sesuai kelompok usianya. IDAI juga menyebut aplikasi PRIMA untuk Orangtua yang memungkinkan orang tua memantau perkembangan anak secara mandiri. Bila perkembangan meragukan atau ada penyimpangan, IDAI menganjurkan segera berkonsultasi ke dokter.'),
  p('Tes daya dengar dan daya lihat sangat relevan untuk identifikasi disabilitas intelektual. Anak yang tidak mendengar dengan baik bisa tampak lambat berbahasa dan sulit mengikuti instruksi, padahal kemampuan berpikirnya berkembang. Memastikan pendengaran dan penglihatan adalah langkah penting sebelum menyimpulkan apa pun.'),
  p('Orang tua dapat menanyakan pemeriksaan tumbuh kembang kepada petugas di puskesmas, posyandu, atau dokter anak yang biasa didatangi. Bawalah Buku KIA atau catatan kesehatan anak, karena riwayat pertumbuhan dan imunisasi di dalamnya membantu petugas membaca perkembangan anak secara utuh.'),
  fig(bodyImages.gate, 'Siswa, guru, dan pendamping YUKA berfoto bersama di gerbang sebuah candi saat kunjungan edukasi', 'Pemantauan perkembangan melibatkan banyak orang dewasa di sekitar anak: orang tua, guru, dan pendamping. Foto ini dokumentasi kunjungan edukasi YUKA, bukan kegiatan pemeriksaan.'),

  h2('penyebab', 'Pemeriksaan untuk Mencari Penyebab'),
  p('Identifikasi dini tidak berhenti pada pertanyaan "apakah anak terlambat", tetapi juga "mengapa". IDAI menyebut beberapa penyebab keterlambatan perkembangan umum, antara lain gangguan genetik atau kromosom seperti sindrom Down, gangguan atau infeksi susunan saraf seperti palsi serebral, spina bifida, dan sindrom rubela, serta riwayat bayi risiko tinggi seperti lahir prematur, berat lahir rendah, atau sakit berat pada awal kehidupan sehingga memerlukan perawatan intensif.'),
  p('Salah satu pemeriksaan pencegahan yang paling penting justru dilakukan sejak bayi baru lahir, yaitu Skrining Hipotiroid Kongenital (SHK). Kemenkes melalui laman Ayo Sehat menjelaskan bahwa SHK dilakukan pada bayi usia 48 sampai 72 jam, atau dalam kondisi tertentu setelah 24 jam dan paling lambat sebelum 14 hari, dengan mengambil sampel darah dari tumit bayi untuk diuji kadar hormon tiroidnya. Hipotiroid kongenital yang tidak terdeteksi dapat menyebabkan gangguan pertumbuhan fisik dan keterbelakangan mental.'),
  p(`Bila anak memiliki ciri fisik tertentu atau riwayat keluarga yang mengarah ke kondisi genetik, dokter dapat mempertimbangkan pemeriksaan tambahan, misalnya pemeriksaan kromosom. Keputusan ini sepenuhnya wewenang dokter. Contoh kondisi genetik yang sering disertai hambatan intelektual dibahas di <a href="down-syndrome-adalah">artikel sindrom Down</a>, dan kaitannya dengan fungsi tiroid ada di <a href="hipotiroid-pada-anak-down-syndrome">hipotiroid pada anak sindrom Down</a>.`),
  p('Perlu diketahui pula bahwa MedlinePlus mencatat sebagian kasus disabilitas intelektual tidak diketahui penyebabnya. Tidak ditemukannya penyebab bukan berarti proses identifikasi gagal; dukungan bagi anak tetap bisa dan perlu dimulai.'),

  h2('diagnosis', 'Siapa yang Menegakkan Diagnosis dan Apa Kriterianya?'),
  p('Diagnosis disabilitas intelektual ditegakkan oleh tenaga profesional yang berwenang, misalnya dokter spesialis anak (terutama konsultan tumbuh kembang), psikiater anak, atau psikolog klinis, sering kali bekerja sebagai tim. Guru, terapis, dan orang tua memberi data pengamatan yang sangat berharga, tetapi tidak menegakkan diagnosis.'),
  p('American Psychiatric Association, penyusun DSM-5, menjelaskan bahwa diagnosis melihat tiga hal sekaligus:'),
  ol([
    '<strong>Fungsi intelektual</strong>, seperti belajar, memecahkan masalah, dan menimbang keputusan, yang diukur dengan tes kecerdasan terstandar.',
    '<strong>Fungsi adaptif</strong>, yaitu keterampilan konseptual, sosial, dan praktis yang dipakai sehari-hari, misalnya berkomunikasi, mengikuti aturan, dan merawat diri.',
    '<strong>Awal pada masa perkembangan</strong>, artinya keterbatasan tersebut mulai tampak sejak masa kanak-kanak atau remaja.',
  ]),
  p(`APA juga menegaskan bahwa skor IQ tertentu tidak lagi menjadi syarat tunggal; skor sekitar 70 sampai 75 menunjukkan keterbatasan bermakna, tetapi harus ditafsirkan bersama kemampuan sehari-hari anak. Penjelasan tentang rentang skor ada di <a href="berapa-iq-anak-yang-normal">berapa IQ anak yang normal</a>. Rujukan lain memberi batas usia sedikit berbeda: APA menyebut umumnya sebelum 18 tahun, sedangkan AAIDD menetapkan sebelum usia 22 tahun.`),
  p(`Pada balita, IDAI menjelaskan bahwa istilah keterlambatan perkembangan umum lebih tepat dipakai untuk anak di bawah 5 tahun, karena tes kecerdasan lebih akurat pada anak yang lebih besar. Anak dengan keterlambatan perkembangan umum tidak selalu mengalami disabilitas intelektual di kemudian hari. Kondisi lain yang sering tertukar dibahas di <a href="slow-learner">artikel slow learner</a>, dan gambaran biaya pemeriksaan ada di <a href="tes-psikolog-anak-bayar-berapa">tes psikolog anak</a>.`),
  fig(bodyImages.guide, 'Pemandu museum menjelaskan maket gunung kepada rombongan siswa dan pendamping YUKA', 'Seperti pemandu yang menjelaskan maket kepada rombongan, evaluasi yang baik dijelaskan dengan jelas kepada keluarga. Foto ini dokumentasi kunjungan edukasi YUKA ke museum, bukan sesi evaluasi.'),

  h2('langkah', 'Langkah Praktis bagi Orang Tua'),
  p('Bila Anda merasa ada yang perlu diperhatikan pada perkembangan anak, langkah-langkah berikut dapat membantu proses berjalan lebih tertata:'),
  ol([
    '<strong>Catat pengamatan secara konkret.</strong> Tulis kemampuan yang sudah dan belum muncul, lengkap dengan usia dan contoh situasi. Video singkat di rumah juga membantu.',
    '<strong>Gunakan alat pemantauan resmi.</strong> Pakai KPSP melalui petugas kesehatan atau aplikasi yang disebut IDAI, serta daftar tonggak perkembangan dari CDC.',
    '<strong>Konsultasikan ke tenaga kesehatan.</strong> Mulai dari puskesmas, posyandu, atau dokter anak. Sampaikan catatan Anda dan minta skrining bila belum dilakukan.',
    '<strong>Pastikan pendengaran dan penglihatan diperiksa.</strong> Gangguan indra dapat menyerupai hambatan belajar.',
    '<strong>Ikuti rujukan evaluasi.</strong> Bila hasil skrining meragukan, minta rujukan ke dokter tumbuh kembang, psikiater anak, atau psikolog.',
    '<strong>Tanyakan pemeriksaan penyebab.</strong> Diskusikan dengan dokter apakah anak perlu pemeriksaan tambahan, misalnya hormon tiroid atau kromosom.',
    '<strong>Minta penjelasan tertulis.</strong> Mintalah ringkasan hasil evaluasi, apa yang sudah dan belum dapat disimpulkan, serta kapan evaluasi ulang.',
    '<strong>Mulai stimulasi dan intervensi.</strong> Jangan menunggu label; lanjutkan stimulasi terarah sesuai anjuran profesional.',
  ]),
  p(`Langkah ini tidak harus selesai dalam waktu singkat. Yang penting, setiap tahap tercatat sehingga keluarga dan profesional dapat melihat perkembangan anak dari waktu ke waktu. Bila ingin memahami bentuk penilaian akademik ketika anak sudah bersekolah, baca <a href="asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik ABK</a>.`),

  h2('intervensi', 'Intervensi Dini Tanpa Menunggu Label'),
  p('CDC menjelaskan bahwa intervensi dini adalah layanan dan dukungan bagi bayi dan anak kecil dengan keterlambatan perkembangan maupun disabilitas, beserta keluarganya. Layanannya dapat berupa terapi wicara, fisioterapi, dan layanan lain sesuai kebutuhan anak dan keluarga. Menurut CDC, intervensi dini dapat berdampak besar pada kemampuan anak mempelajari keterampilan baru.'),
  p('Hal yang patut digarisbawahi: kelayakan intervensi dini ditentukan dari evaluasi kemampuan anak, bukan dari label diagnosis. Dalam sistem di Amerika Serikat yang dijelaskan CDC, orang tua bahkan dapat menghubungi program intervensi dini tanpa rujukan dokter. Di Indonesia jalurnya berbeda, tetapi prinsipnya sama: kebutuhan anak yang terlihat sudah cukup menjadi alasan untuk mulai mendukung.'),
  p(`MedlinePlus juga mencatat bahwa pendidikan khusus dan pelatihan dapat dimulai sejak bayi, dan bahwa anak perlu dievaluasi oleh spesialis untuk masalah kesehatan fisik dan mental lain yang mungkin menyertai. Gambaran lengkap bentuk dukungan ini ada di <a href="intervensi-dini">artikel intervensi dini</a> dan <a href="terapi-anak-untuk-apa">tujuan terapi anak</a>.`),
  p('Di rumah, intervensi dini sering berwujud hal sederhana yang dilakukan konsisten: mengajak anak berbicara sambil beraktivitas, memberi kesempatan mencoba sendiri, memecah tugas menjadi langkah kecil, dan memuji usaha. Mintalah terapis menunjukkan strategi yang sesuai agar latihan tidak terasa membebani.'),

  h2('sekolah', 'Peran Guru dan Sekolah'),
  p('Banyak anak dengan hambatan intelektual ringan baru dikenali setelah masuk sekolah, ketika tuntutan akademik meningkat. Di sinilah guru memegang peran penting. Guru melihat anak dalam situasi belajar yang terstruktur dan dapat membandingkannya dengan teman sebaya secara wajar.'),
  p('Peran guru dalam identifikasi dini adalah mengamati dan mengomunikasikan, bukan mendiagnosis. Guru dapat mencatat contoh konkret, misalnya anak sulit mengikuti instruksi dua langkah atau membutuhkan bantuan lebih banyak saat berpindah kegiatan. Catatan ini kemudian disampaikan kepada orang tua dengan bahasa yang hangat dan tanpa menghakimi.'),
  ul([
    'Gunakan catatan pengamatan yang objektif, bukan kesan umum seperti "anaknya lambat".',
    'Sesuaikan cara mengajar sementara menunggu evaluasi, misalnya dengan instruksi visual dan tugas yang dipecah.',
    'Sarankan pemeriksaan ke tenaga profesional dan bantu keluarga memahami alurnya.',
    'Libatkan anak dalam kegiatan kelompok agar ia tetap merasa menjadi bagian dari kelas.',
  ]),
  p(`Sekolah inklusi memberi ruang bagi anak untuk belajar bersama teman sebaya dengan penyesuaian yang dibutuhkan. Prinsipnya dijelaskan di <a href="pendidikan-inklusi">pendidikan inklusi</a>, dan perbedaannya dengan sekolah luar biasa ada di <a href="apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a>.`),
  fig(bodyImages.costume, 'Siswi YUKA mengenakan kostum tari sederhana dan berpose bersama di tangga sebuah candi', 'Kegiatan seni dan kelompok membantu anak tetap merasa menjadi bagian dari komunitasnya. Foto ini dokumentasi kegiatan YUKA, bukan sesi asesmen.'),

  h2('keluarga', 'Menjaga Hati Keluarga Selama Proses'),
  p('Proses identifikasi bisa terasa panjang dan melelahkan. Wajar bila orang tua merasa cemas, sedih, atau bahkan menyangkal. Perasaan ini tidak membuat Anda menjadi orang tua yang buruk. Mencari tahu kebutuhan anak justru merupakan bentuk kasih sayang dan tanggung jawab, sebuah ikhtiar yang bernilai ibadah.'),
  p('Berbagilah dengan pasangan, keluarga, atau sesama orang tua yang pernah menjalani proses serupa. Ingatlah bahwa setiap anak adalah amanah dengan potensi yang Allah titipkan, dan diagnosis apa pun tidak mengubah nilai dirinya. Bila hasil evaluasi akhirnya menunjukkan disabilitas intelektual, artikel <a href="menerima-diagnosis-anak-abk">menerima diagnosis anak ABK</a> dapat menemani langkah berikutnya.'),
  p('Jagalah juga kesehatan diri Anda sendiri. Orang tua yang cukup istirahat dan punya tempat bercerita biasanya lebih sabar menemani anak berlatih. Tidak apa-apa meminta bantuan anggota keluarga lain untuk bergantian mengantar anak ke pemeriksaan atau terapi, karena proses ini adalah perjalanan bersama, bukan beban satu orang.'),
  p('YUKA mendampingi keluarga anak berkebutuhan khusus di Sleman, Yogyakarta, melalui pendidikan inklusi dan program pendampingan. Bila Anda membutuhkan teman berdiskusi, tim kami terbuka untuk dihubungi.'),

  faqHtml,
].join('\n');

const sourcesCheckedNote = 'Sumber resmi diperiksa pada 11 Oktober 2026. Artikel ini tidak mendiagnosis dan tidak menggantikan evaluasi oleh dokter, psikiater anak, atau psikolog.';

const provenance = `<!-- E-E-A-T: transparansi penulis, tinjauan, dan kebijakan koreksi -->
        <div class="article-provenance" style="margin:2rem 0;padding:1.5rem;background:#FFFFFF;border:1px solid #DDE3F0;border-radius:10px;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Tentang artikel ini</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.25rem;font-size:0.95rem;line-height:1.85;color:#333;">
            <li><strong>Ditulis oleh:</strong> Tim YUKA (Yayasan Ukhuwah Kaffah Amanatullah), pengelola Sekolah Inklusi Taruna Imani, Sleman, Yogyakarta.</li>
            <li><strong>Dasar rujukan:</strong> cdc.gov, psychiatry.org, aaidd.org, medlineplus.gov, idai.or.id, ayosehat.kemkes.go.id, satusehat.kemkes.go.id. Semua rujukan ditautkan langsung di bagian sumber di bawah artikel ini.</li>
            <li><strong>Terbit:</strong> 17 Oktober 2026. <strong>Pembaruan terakhir:</strong> 17 Oktober 2026.</li>
<!-- MEDICAL_REVIEW_STATUS:START -->
            <li><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik, <strong>belum ditinjau oleh dokter berlisensi</strong>. Tinjauan oleh tenaga medis berkredensial sedang kami siapkan dan status ini akan diperbarui di halaman ini begitu selesai. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk keputusan diagnosis atau terapi, rujuklah pada dokter anak, psikiater anak, atau psikolog perkembangan.</li>
          <!-- MEDICAL_REVIEW_STATUS:END -->
            <li><strong>Kebijakan koreksi:</strong> jika Anda menemukan klaim yang keliru atau sumber yang tidak cocok, beri tahu kami lewat <a href="/kontak">halaman kontak</a>. Kami memperbaiki isinya dan mencantumkan catatan koreksi secara terbuka.</li>
          </ul>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>`;

const article = {
  slug,
  titleTag: 'Identifikasi Dini Disabilitas Intelektual: Tanda, Skrining, dan Langkah Orang Tua',
  metaDesc: 'Panduan identifikasi dini disabilitas intelektual: tanda per usia, beda pemantauan, skrining KPSP, dan evaluasi, siapa yang mendiagnosis, serta langkah orang tua.',
  keywords: 'identifikasi dini disabilitas intelektual, deteksi dini disabilitas intelektual, skrining perkembangan anak, KPSP, SDIDTK, keterlambatan perkembangan umum, diagnosis disabilitas intelektual',
  ogTitle: 'Identifikasi Dini Disabilitas Intelektual: Panduan Orang Tua',
  ogDesc: 'Tanda yang patut diwaspadai, tahapan pemantauan, skrining, dan evaluasi, kriteria diagnosis, serta peran keluarga dan sekolah.',
  datePublished: DATE,
  dateModified: DATE,
  dateDisplay: '17 Okt 2026',
  readTime: '13 menit baca',
  category: 'Disabilitas',
  h1: 'Identifikasi Dini Disabilitas Intelektual: Tanda, Tahapan Skrining, dan Langkah Orang Tua',
  crumb: 'Identifikasi Dini Disabilitas Intelektual',
  parent: { href: 'disabilitas-intelektual', name: 'Disabilitas Intelektual' },
  about: ['Disabilitas intelektual', 'Skrining perkembangan anak', 'Intervensi dini'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'disabilitas-intelektual-adalah', title: 'Disabilitas Intelektual Adalah', desc: 'Pengertian, perubahan istilah, penyebab, dan klasifikasi disabilitas intelektual.' },
    { href: 'intervensi-dini', title: 'Intervensi Dini', desc: 'Bentuk dukungan sejak usia dini bagi anak dengan keterlambatan perkembangan.' },
    { href: 'asesmen-abk', title: 'Asesmen Anak Berkebutuhan Khusus', desc: 'Cara asesmen membantu memahami kebutuhan belajar anak.' },
    { href: 'berapa-iq-anak-yang-normal', title: 'Berapa IQ Anak yang Normal?', desc: 'Memahami rentang skor kecerdasan dan batas penafsirannya.' },
  ],
  tags: ['DisabilitasIntelektual', 'DeteksiDini', 'SkriningPerkembangan', 'IntervensiDini', 'ParentingABK'],
  sources: [
    { url: 'https://www.cdc.gov/act-early/about/developmental-monitoring-and-screening.html', label: 'CDC, Developmental Monitoring and Screening' },
    { url: 'https://www.cdc.gov/act-early/early-intervention/index.html', label: 'CDC, Early Intervention' },
    { url: 'https://www.psychiatry.org/patients-families/intellectual-disability/what-is-intellectual-disability', label: 'American Psychiatric Association, What is Intellectual Disability?' },
    { url: 'https://www.aaidd.org/intellectual-disability/definition', label: 'AAIDD, Defining Criteria for Intellectual Disability' },
    { url: 'https://medlineplus.gov/ency/article/001523.htm', label: 'MedlinePlus (National Library of Medicine), Intellectual disability' },
    { url: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/mengenal-keterlambatan-perkembangan-umum-pada-anak', label: 'IDAI, Mengenal Keterlambatan Perkembangan Umum pada Anak' },
    { url: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/pentingnya-memantau-pertumbuhan-dan-perkembangan-anak-bagian-2', label: 'IDAI, Pentingnya Memantau Pertumbuhan dan Perkembangan Anak (Bagian 2)' },
    { url: 'https://ayosehat.kemkes.go.id/skrining-hipotiroid-kongenital-shk', label: 'Kemenkes Ayo Sehat, Skrining Hipotiroid Kongenital (SHK)' },
    { url: 'https://satusehat.kemkes.go.id/platform/docs/id/interoperability/tumbuh-kembang-new/', label: 'Kemenkes SATUSEHAT, Interoperabilitas Data Tumbuh Kembang (SDIDTK, KPSP, TDD, TDL)' },
  ],
  sourcesCheckedNote,
  editorialHtml: provenance,
};

let html = renderArticlePage(article);

// MedicalWebPage node, sama dengan pola artikel medis gelombang 1-2 (commit 9508370). Tanpa nama peninjau.
const CANONICAL = `${SITE}/artikel/${slug}`;
const medical = {
  '@context': 'https://schema.org', '@type': 'MedicalWebPage', '@id': `${CANONICAL}#medicalwebpage`, url: CANONICAL,
  name: article.h1, inLanguage: 'id-ID', publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE, dateModified: DATE, specialty: 'https://schema.org/Pediatric',
  medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient', name: 'Orang tua dan pendamping anak dengan keterlambatan perkembangan' },
  about: { '@type': 'MedicalCondition', name: 'Disabilitas Intelektual', alternateName: 'Intellectual Disability' },
  publishingPrinciples: { '@type': 'CreativeWork', name: 'Kebijakan Editorial YUKA', url: `${SITE}/kebijakan-editorial` },
};
const marker = '\n    <!-- FAQ Schema -->';
if (!html.includes(marker)) throw new Error('FAQ schema marker not found');
html = html.replace(marker, `\n    <script type="application/ld+json">${JSON.stringify(medical)}</script>${marker}`);

fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

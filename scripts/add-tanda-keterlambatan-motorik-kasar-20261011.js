'use strict';
/*
 * Artikel baru YUKA (cycle #76): tanda-keterlambatan-motorik-kasar.
 * Terbit terjadwal 2026-10-12. Generator ini TIDAK menulis kartu ke blog.html;
 * kartu ditambahkan workflow publish-scheduled saat tanggal tayang.
 * Fokus: tanda keterlambatan per rentang usia, kapan segera periksa, kemungkinan penyebab
 * (tanpa diagnosis), alur asesmen, fisioterapi, dukungan rumah dan sekolah.
 * Pengertian dan milestone lengkap ada di artikel induk motorik-kasar-adalah.
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags, SITE } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'tanda-keterlambatan-motorik-kasar';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const DATE = '2026-10-12';

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

const hero = image(
  'Dokumentasi/museum-gunung-merapi-keluarga-besar-foto-bersama-istana-028.webp',
  'Rombongan siswa, guru, dan pendamping YUKA berfoto bersama di aula berpilar saat kunjungan edukasi',
  'Anak-anak dengan beragam usia dan kemampuan gerak mengikuti kunjungan edukasi bersama guru dan pendamping. Foto ini dokumentasi kegiatan YUKA, bukan sesi pemeriksaan atau terapi.'
);
const bodyImages = {
  steps: 'Dokumentasi/candi-plaosan-anak-anak-wisata-candi-borobudur-037.webp',
  move: 'Dokumentasi/candi-plaosan-wisatawan-candi-borobudur-tradisional-024.webp',
  group: 'Dokumentasi/candi-plaosan-rombongan-wisata-candi-borobudur-039.webp',
  dance: 'Dokumentasi/candi-plaosan-wisatawan-kostum-tradisional-candi-borobudur-088.webp',
  costume: 'Dokumentasi/candi-plaosan-penari-tradisional-candi-borobudur-030.webp',
};

const faq = [
  { q: 'Apa saja tanda keterlambatan motorik kasar pada anak?', a: 'Tanda yang paling sering dibicarakan adalah anak belum mampu menahan kepala, berguling, duduk, berdiri dengan berpegangan, atau berjalan pada usia ketika sebagian besar anak sudah melakukannya. Tanda lain adalah otot terasa sangat kaku atau sangat lemas, gerakan tubuh kiri dan kanan tidak seimbang, berjalan hanya dengan ujung jari kaki, dan hilangnya kemampuan yang sebelumnya sudah dikuasai.' },
  { q: 'Umur berapa anak dianggap terlambat berjalan?', a: 'IDAI menyebut anak dapat dikatakan normal bila mulai berjalan antara usia 10 sampai 18 bulan. AAP menganjurkan orang tua memberi tahu dokter anak bila anak belum dapat berjalan pada usia 18 bulan. Bila anak lahir prematur, sampaikan riwayat itu kepada dokter karena AAP mengingatkan anak prematur dapat berkembang lebih lambat dibanding anak seusia.' },
  { q: 'Apakah bayi yang tidak merangkak pasti terlambat?', a: 'Tidak selalu. AAP menjelaskan sebagian anak tidak pernah merangkak dan memakai cara lain untuk berpindah, misalnya bergeser dengan bokong. Selama kedua sisi tubuh dipakai seimbang, hal itu tidak otomatis mengkhawatirkan. Yang perlu diperiksa adalah bayi yang menyeret satu sisi tubuh saat merangkak lebih dari satu bulan atau belum dapat berdiri walau ditopang menjelang usia satu tahun.' },
  { q: 'Kapan orang tua harus segera memeriksakan anak?', a: 'Segera periksakan bila anak kehilangan kemampuan gerak yang sebelumnya sudah bisa, gerakan tubuh tampak berat sebelah, otot terasa sangat kaku atau sangat lemas, atau refleks bayi masih menetap setelah usia enam bulan. CDC juga menganjurkan orang tua tidak menunggu bila anak belum mencapai satu atau lebih milestone.' },
  { q: 'Apa penyebab keterlambatan motorik kasar?', a: 'Penyebabnya beragam dan hanya dapat ditentukan lewat pemeriksaan. IDAI menyebut antara lain kelainan genetik atau kromosom seperti sindrom Down, gangguan atau infeksi susunan saraf seperti cerebral palsy dan spina bifida, serta riwayat bayi risiko tinggi seperti prematur dan berat lahir rendah. Sebagian anak juga hanya lebih lambat lalu mengejar ketertinggalannya.' },
  { q: 'Siapa yang menangani keterlambatan motorik kasar?', a: 'Langkah pertama biasanya dokter anak atau tenaga kesehatan di Puskesmas yang melakukan skrining. Bila diperlukan, anak dirujuk ke dokter spesialis anak atau dokter rehabilitasi medik, lalu dapat mendapat program fisioterapi. AAP menyebut anak dengan keterlambatan motorik kasar seperti berguling, duduk, atau berjalan dapat dirujuk ke fisioterapis.' },
  { q: 'Apakah baby walker membantu anak cepat berjalan?', a: 'Tidak. AAP menjelaskan baby walker tidak membantu anak belajar berjalan dan justru berisiko membuat anak terguling atau jatuh dari tangga, sehingga AAP sangat menganjurkan orang tua tidak memakainya. Kesempatan bermain di lantai yang aman lebih bermanfaat.' },
  { q: 'Bagaimana sekolah dapat membantu anak dengan keterlambatan motorik kasar?', a: 'Sekolah dapat menyesuaikan kegiatan olahraga, menyediakan jalur yang aman, memberi waktu lebih untuk berpindah, dan menyusun tujuan gerak dalam program pembelajaran individual. Koordinasi dengan orang tua dan fisioterapis membantu latihan yang sama dipakai di kelas dan di rumah.' },
];

const faqHtml = `<div class="faq-list"><h2 id="faq">Pertanyaan yang Sering Diajukan</h2>${faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div>`;

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> tanda keterlambatan motorik kasar adalah kemampuan gerak besar yang belum muncul pada usia ketika sebagian besar anak sudah menguasainya, misalnya belum duduk tanpa bantuan sekitar usia 9 bulan atau belum berjalan pada usia 18 bulan. Tanda yang perlu segera diperiksa adalah hilangnya kemampuan yang sudah dikuasai, gerakan berat sebelah, serta otot yang sangat kaku atau sangat lemas. Satu tanda bukan diagnosis, tetapi cukup menjadi alasan untuk berkonsultasi.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#pengertian">Apa yang dimaksud keterlambatan motorik kasar?</a></li><li><a href="#bayi">Tanda pada bayi 0 sampai 12 bulan</a></li><li><a href="#balita">Tanda pada balita dan anak prasekolah</a></li><li><a href="#segera">Tanda yang perlu segera diperiksa</a></li><li><a href="#penyebab">Kemungkinan penyebab</a></li><li><a href="#asesmen">Alur pemeriksaan dan asesmen</a></li><li><a href="#fisioterapi">Peran fisioterapi dan intervensi dini</a></li><li><a href="#rumah">Dukungan di rumah</a></li><li><a href="#sekolah">Dukungan di sekolah</a></li><li><a href="#faq">Pertanyaan yang sering diajukan</a></li></ol></div>',

  h2('pengertian', 'Apa yang Dimaksud Keterlambatan Motorik Kasar?'),
  p('Motorik kasar adalah kemampuan memakai otot besar untuk menahan kepala, berguling, duduk, merangkak, berdiri, berjalan, berlari, dan melompat. Pengertian lengkap beserta contoh gerakannya sudah kami bahas di artikel <a href="motorik-kasar-adalah">motorik kasar adalah</a>. Artikel ini berfokus pada satu pertanyaan yang sering membuat orang tua cemas: kapan perbedaan kecepatan gerak anak sebaiknya dibicarakan dengan tenaga kesehatan?'),
  p('CDC menjelaskan bahwa milestone adalah kemampuan yang dapat dilakukan sebagian besar anak, yaitu 75 persen atau lebih, pada usia tertentu. Artinya, daftar milestone bukan batas paling awal, melainkan titik ketika kebanyakan anak sudah sampai. Bila anak belum mencapai satu atau lebih milestone, CDC menganjurkan orang tua tidak menunggu, membicarakannya dengan dokter, dan menanyakan skrining perkembangan.'),
  p('IDAI mengingatkan bahwa kisaran waktu pencapaian perkembangan cukup lebar. Contohnya, anak dapat dikatakan normal bila mulai berjalan antara usia 10 sampai 18 bulan. Karena itu, keterlambatan motorik kasar tidak ditentukan dari perbandingan dengan sepupu atau tetangga, tetapi dari pola gerak anak dari waktu ke waktu, kualitas gerakannya, dan hasil pemeriksaan dengan alat skrining yang tepat.'),

  h2('bayi', 'Tanda Keterlambatan Motorik Kasar pada Bayi 0 sampai 12 Bulan'),
  p('AAP menjelaskan kontrol gerak umumnya berkembang dari atas ke bawah: kepala lebih dulu, lalu tubuh bagian atas. Tabel berikut merangkum kemampuan yang menurut CDC sudah dilakukan sebagian besar bayi pada usia tertentu, beserta hal yang perlu ditanyakan bila kemampuan itu belum muncul. Daftar milestone bulan demi bulan yang lebih rinci ada di artikel <a href="milestone-motorik-kasar-anak-0-12-bulan">milestone motorik kasar anak 0-12 bulan</a>.'),
  '<table class="article-table"><caption>Milestone motorik kasar bayi menurut CDC dan hal yang perlu didiskusikan bila belum muncul</caption><thead><tr><th>Usia</th><th>Sebagian besar bayi sudah (CDC)</th><th>Diskusikan dengan dokter bila</th></tr></thead><tbody><tr><td>4 bulan</td><td>Menahan kepala tetap tegak saat digendong, bertumpu pada siku atau lengan bawah saat tengkurap</td><td>Kepala masih sangat goyah saat digendong atau bayi tidak mengangkat dada ketika tengkurap</td></tr><tr><td>6 bulan</td><td>Berguling dari tengkurap ke telentang, mendorong dengan lengan lurus saat tengkurap, bertumpu pada tangan saat duduk</td><td>Belum berguling sama sekali atau tubuh terasa sangat lemas saat diangkat</td></tr><tr><td>9 bulan</td><td>Duduk tanpa ditopang dan dapat mengambil posisi duduk sendiri</td><td>Belum dapat duduk walau sebentar tanpa ditopang</td></tr><tr><td>12 bulan</td><td>Menarik badan untuk berdiri dan berjalan sambil berpegangan pada perabot</td><td>Belum dapat berdiri walau ditopang, atau merangkak dengan menyeret satu sisi tubuh</td></tr></tbody></table>',
  p('Pada rentang 8 sampai 12 bulan, AAP meminta orang tua memberi tahu dokter anak bila bayi tidak merangkak, menyeret satu sisi tubuh saat merangkak selama lebih dari satu bulan, atau tidak dapat berdiri meski ditopang. Namun AAP juga menjelaskan bahwa sebagian anak memang tidak pernah merangkak dan memilih bergeser dengan bokong. Selama kedua sisi tubuh dipakai seimbang, cara berpindah yang berbeda ini tidak otomatis mengkhawatirkan.'),
  p('Bila bayi lahir prematur, yaitu sebelum usia kehamilan 37 minggu, AAP mengingatkan bahwa perkembangannya bisa lebih lambat dibanding anak seusia. Karena itu, selalu sampaikan riwayat kelahiran ketika berkonsultasi agar tenaga kesehatan dapat menilai perkembangan bayi dengan tepat.'),

  h2('balita', 'Tanda pada Balita dan Anak Prasekolah'),
  p('Setelah usia satu tahun, perhatian bergeser ke berjalan mandiri, kualitas langkah, dan keterampilan seperti berlari, menendang, naik tangga, serta melompat. CDC mencatat bahwa pada usia 18 bulan sebagian besar anak sudah berjalan tanpa berpegangan dan dapat naik turun sofa atau kursi tanpa bantuan. Pada usia 2 tahun, sebagian besar anak sudah menendang bola, berlari, dan menaiki beberapa anak tangga dengan atau tanpa bantuan.'),
  p('AAP memberi beberapa tanda yang perlu disampaikan kepada dokter anak pada rentang usia ini: anak belum dapat berjalan pada usia 18 bulan, belum menunjukkan pola jalan tumit ke jari yang matang setelah beberapa bulan berjalan, berjalan hanya dengan ujung jari kaki, atau belum dapat mendorong mainan beroda pada usia dua tahun. AAP juga menyebut tanda umum seperti kesulitan menjaga keseimbangan dan cara berjalan atau berlari yang tidak biasa.'),
  p('Untuk usia prasekolah, CDC mencatat bahwa pada usia 4 tahun sebagian besar anak dapat menangkap bola besar hampir setiap kali, dan pada usia 5 tahun dapat melompat dengan satu kaki. Anak yang sering jatuh, tampak jauh lebih cepat lelah saat bermain dibanding teman sebaya, atau menghindari permainan fisik karena kesulitan, juga layak diamati lebih saksama. Ide aktivitas yang sesuai usia dapat dilihat di artikel <a href="permainan-motorik-kasar">permainan motorik kasar</a>, tetapi permainan bukan pengganti pemeriksaan bila tanda di atas muncul.'),
  fig(bodyImages.steps, 'Sekelompok anak dan pendamping YUKA duduk dan berdiri di tangga batu Candi Plaosan saat kunjungan edukasi', 'Naik turun tangga, berdiri, dan duduk di permukaan yang tidak rata termasuk kemampuan motorik kasar yang berkembang bertahap. Foto ini dokumentasi kunjungan edukasi YUKA ke Candi Plaosan, bukan sesi pemeriksaan.'),

  h2('segera', 'Tanda yang Perlu Segera Diperiksa'),
  p('Sebagian tanda tidak perlu menunggu jadwal kontrol berikutnya. IDAI menganjurkan orang tua tidak menunda dan segera memeriksakan anak ke tenaga kesehatan terdekat bila menemukan tanda bahaya perkembangan. Untuk ranah gerak, beberapa tanda berikut bersumber dari IDAI, AAP, dan CDC:'),
  ul([
    '<strong>Kehilangan kemampuan.</strong> Anak dulu sudah bisa duduk, berdiri, atau berjalan, lalu tidak bisa lagi. CDC dan AAP sama-sama menyebut hilangnya kemampuan sebagai alasan untuk segera berbicara dengan dokter.',
    '<strong>Gerakan tidak simetris.</strong> IDAI menyebut gerakan asimetris atau tidak seimbang antara anggota tubuh kiri dan kanan sebagai tanda bahaya. Contohnya bayi hanya memakai satu tangan atau menyeret satu kaki.',
    '<strong>Otot sangat kaku atau sangat lemas.</strong> AAP mencantumkan otot yang terasa kaku atau lunglai sebagai salah satu tanda keterlambatan motorik kasar.',
    '<strong>Refleks bayi yang menetap.</strong> IDAI menyebut refleks primitif, yaitu refleks yang muncul saat bayi, yang masih menetap lebih dari usia 6 bulan sebagai tanda bahaya.',
    '<strong>Kontrol kepala yang buruk.</strong> AAP menyebut kesulitan menahan kepala dan leher tetap stabil sebagai tanda yang perlu diperhatikan.',
  ]),
  p('Tanda di atas tidak berarti anak pasti memiliki kondisi tertentu. Fungsinya adalah memberi tahu orang tua bahwa pemeriksaan sebaiknya dilakukan sekarang, bukan beberapa bulan lagi. Bila anak juga mengalami kejang, demam tinggi, atau tiba-tiba lemas, segera bawa ke fasilitas kesehatan karena keadaan itu membutuhkan penanganan medis langsung.'),

  h2('penyebab', 'Kemungkinan Penyebab, Bukan untuk Mendiagnosis Sendiri'),
  p('Penyebab keterlambatan motorik kasar hanya dapat ditentukan melalui pemeriksaan oleh tenaga kesehatan. AAP menjelaskan bahwa biasanya anak yang belum melakukan kemampuan tertentu akan mengejar teman seusianya, tetapi kadang keterlambatan menjadi tanda adanya kondisi kesehatan. Karena itu, mengenali kemungkinan penyebab berguna untuk memahami pertanyaan dokter, bukan untuk menebak diagnosis di rumah.'),
  p('IDAI menyebut beberapa penyebab keterlambatan perkembangan, antara lain gangguan genetik atau kromosom seperti <a href="down-syndrome-adalah">sindrom Down</a>, gangguan atau infeksi susunan saraf seperti <a href="cerebral-palsy-adalah">cerebral palsy</a>, spina bifida, dan sindrom rubela, serta riwayat bayi risiko tinggi seperti lahir prematur, berat lahir rendah, atau sakit berat di awal kehidupan sehingga perlu perawatan intensif.'),
  p('IDAI juga menjelaskan bahwa keterlambatan bisa terjadi pada satu ranah saja atau pada dua ranah atau lebih. Bila terjadi pada dua ranah atau lebih secara bermakna, kondisinya disebut keterlambatan perkembangan umum; perbedaannya dengan kondisi lain kami bahas di artikel <a href="apakah-gdd-sama-dengan-autis">apakah GDD sama dengan autis</a>.'),
  p('Lingkungan juga berpengaruh. Kemenkes melalui laman Ayo Sehat menjelaskan bahwa anak yang lahir sehat tanpa kelainan pun dapat mengalami gangguan perkembangan bila tidak mendapat stimulasi yang cukup, terutama di masa awal kehidupan. Hal ini tidak dimaksudkan untuk menyalahkan orang tua. Banyak keluarga menghadapi keterbatasan waktu, ruang, atau informasi, dan pemeriksaan justru membantu menemukan dukungan yang tepat.'),
  fig(bodyImages.move, 'Seorang siswa berkostum tari berdiri di halaman rumput Candi Plaosan bersama pendamping yang memperagakan gerakan', 'Pendamping memperagakan gerakan dan siswa menirukannya di halaman rumput. Foto ini dokumentasi kegiatan seni YUKA, bukan sesi fisioterapi.'),

  h2('asesmen', 'Alur Pemeriksaan dan Asesmen'),
  p('Orang tua sering bingung harus mulai dari mana. Di Indonesia, Kemenkes menjelaskan bahwa skrining perkembangan dapat dilakukan tenaga kesehatan di Puskesmas memakai Kuesioner Pra Skrining Perkembangan (KPSP). Buku Kesehatan Ibu dan Anak (KIA), yang dipakai sampai anak berusia 6 tahun, juga memuat pemantauan perkembangan termasuk motorik halus dan motorik kasar. Di Amerika Serikat, CDC mencatat AAP menganjurkan skrining perkembangan untuk semua anak setidaknya pada usia 9, 18, dan 30 bulan.'),
  p('Alur umum bagi keluarga:'),
  ol([
    '<strong>Catat pengamatan.</strong> Tulis kemampuan yang sudah dan belum bisa dilakukan anak, sejak kapan, serta rekam video singkat gerakan yang mengkhawatirkan.',
    '<strong>Bawa Buku KIA ke Posyandu atau Puskesmas.</strong> Minta pemeriksaan perkembangan dan sampaikan riwayat kelahiran, termasuk bila anak lahir prematur.',
    '<strong>Ikuti skrining.</strong> Tenaga kesehatan akan menanyakan dan mengamati kemampuan anak dengan alat skrining. AAP menekankan bahwa pengamatan orang tua adalah bagian penting dari evaluasi.',
    '<strong>Jalani rujukan bila diperlukan.</strong> Hasil yang meragukan atau menyimpang dapat diikuti rujukan ke dokter spesialis anak, dokter rehabilitasi medik, atau layanan tumbuh kembang untuk pemeriksaan lebih lanjut.',
    '<strong>Susun rencana bersama.</strong> Tanyakan apa yang ditemukan, layanan apa yang dianjurkan, dan kapan evaluasi ulang.',
  ]),
  '<table class="article-table"><caption>Siapa melakukan apa dalam alur pemeriksaan motorik kasar</caption><thead><tr><th>Pihak</th><th>Peran utama</th><th>Yang dapat disiapkan keluarga</th></tr></thead><tbody><tr><td>Orang tua dan pengasuh</td><td>Mengamati gerak anak sehari-hari dan menyampaikan kekhawatiran</td><td>Catatan kemampuan, video singkat, Buku KIA</td></tr><tr><td>Tenaga kesehatan Posyandu atau Puskesmas</td><td>Pemantauan dan skrining perkembangan, misalnya dengan KPSP</td><td>Riwayat kelahiran dan imunisasi</td></tr><tr><td>Dokter spesialis anak atau rehabilitasi medik</td><td>Pemeriksaan lanjutan dan menentukan rujukan</td><td>Hasil skrining dan daftar pertanyaan</td></tr><tr><td>Fisioterapis</td><td>Penilaian gerak dan program latihan sesuai arahan dokter</td><td>Tujuan fungsional yang penting bagi keluarga</td></tr><tr><td>Guru dan sekolah</td><td>Penyesuaian kegiatan belajar dan bermain</td><td>Ringkasan rekomendasi terapis yang relevan</td></tr></tbody></table>',
  p('Untuk anak usia sekolah, <a href="asesmen-abk">asesmen ABK</a> membantu guru memahami kebutuhan belajar anak, sebagai pelengkap pemeriksaan medis.'),

  h2('fisioterapi', 'Peran Fisioterapi dan Intervensi Dini'),
  p('Bila ditemukan keterlambatan motorik, AAP menjelaskan bahwa layanan intervensi dini tersedia untuk mendukung perkembangan anak, dan anak dengan keterlambatan motorik kasar seperti berguling, duduk, atau berjalan dapat dirujuk ke fisioterapis. Anak yang juga kesulitan dengan keterampilan tangan dan kemandirian dapat dibantu <a href="terapi-okupasi">terapi okupasi</a>. Pembahasan umum tentang manfaat menangani masalah perkembangan sejak awal ada di artikel <a href="intervensi-dini">intervensi dini</a>.'),
  p('Fisioterapi anak umumnya dimulai dengan penilaian kekuatan, tonus otot, keseimbangan, pola gerak, dan kemampuan fungsional anak. Tujuannya disusun dalam bentuk yang dapat diamati, misalnya duduk stabil saat makan, berpindah dari duduk ke berdiri dengan bantuan lebih sedikit, atau berjalan di permukaan yang tidak rata. Program dan frekuensinya ditentukan fisioterapis bersama dokter sesuai kondisi anak, jadi hindari layanan yang menjanjikan hasil pasti dalam waktu singkat.'),
  p('Keluarga biasanya diajari beberapa latihan sederhana untuk dilakukan di rumah. Contoh latihan dan cara melakukannya dengan aman dibahas di artikel <a href="latihan-fisioterapi-anak-di-rumah">latihan fisioterapi anak di rumah</a>, sedangkan gambaran terapi untuk anak yang belum berjalan ada di artikel <a href="terapi-fisik-untuk-anak-terlambat-jalan">terapi fisik untuk anak terlambat jalan</a>. Lakukan latihan hanya sesuai arahan terapis, dan laporkan bila anak tampak kesakitan atau kelelahan berlebihan.'),
  fig(bodyImages.dance, 'Dua peserta kegiatan YUKA bergerak dengan kuda-kuda lebar di halaman rumput Candi Plaosan', 'Gerakan seperti kuda-kuda, memutar badan, dan menjaga keseimbangan melibatkan otot besar tubuh. Foto ini dokumentasi kegiatan seni YUKA, bukan latihan terapi.'),

  h2('rumah', 'Dukungan di Rumah'),
  p('Dukungan di rumah tidak berarti mengubah seluruh waktu bermain menjadi sesi latihan. Yang lebih penting adalah memberi kesempatan bergerak setiap hari di tempat yang aman. Untuk bayi, waktu bermain di lantai dengan pengawasan membantu anak berlatih berguling, merangkak, dan menarik badan untuk berdiri. Untuk balita, ruang untuk berjalan, memanjat rendah, dan menendang bola sudah menjadi latihan yang alami.'),
  p('AAP mengingatkan bahwa baby walker tidak membantu anak belajar berjalan. Alat ini justru dapat mengurangi keinginan anak untuk berjalan dan berisiko membuat anak terguling atau jatuh dari tangga, sehingga AAP sangat menganjurkan orang tua tidak memakainya. AAP juga menyebut sepatu pertama anak cukup yang tertutup, nyaman, lentur, dan tidak licin, tanpa sisipan khusus yang dimaksudkan membentuk kaki.'),
  ul([
    'Pilih satu atau dua tujuan gerak yang disepakati dengan terapis, misalnya berdiri berpegangan saat bermain.',
    'Selipkan latihan dalam rutinitas, seperti berjongkok mengambil mainan atau naik tangga sambil berpegangan.',
    'Hargai tanda lelah dan beri jeda. Latihan yang menyenangkan lebih mudah diulang.',
    'Catat kemajuan sederhana setiap minggu agar perubahan kecil terlihat dan mudah dilaporkan saat kontrol.',
  ]),
  p('Orang tua juga perlu dukungan. Merawat anak dengan keterlambatan perkembangan dapat melelahkan secara fisik dan emosi. Berbagi tugas dengan pasangan dan keluarga besar, serta bergabung dengan komunitas orang tua, membantu keluarga bertahan dalam jangka panjang. Saran praktisnya ada di artikel <a href="dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a>.'),
  fig(bodyImages.costume, 'Sekelompok siswi YUKA berkostum tari berpose di tangga Candi Plaosan', 'Kegiatan seni dan kunjungan luar kelas memberi kesempatan anak bergerak bersama teman. Foto ini dokumentasi kegiatan YUKA, bukan sesi terapi.'),

  h2('sekolah', 'Dukungan di Sekolah dan Lingkungan Belajar'),
  p('Keterlambatan motorik kasar dapat memengaruhi kehidupan sekolah, misalnya saat berbaris, berpindah ruangan, naik tangga, bermain di halaman, atau mengikuti pelajaran olahraga. Anak yang sering tertinggal atau jatuh bisa kehilangan rasa percaya diri dan enggan bermain bersama teman. Dukungan sekolah membantu anak tetap ikut serta tanpa dipaksa mencapai standar gerak yang sama dengan semua teman.'),
  p('Guru dapat menyesuaikan kegiatan, misalnya memberi jarak lebih pendek, menyediakan pegangan, membagi gerakan menjadi langkah kecil, atau memberi peran yang tetap melibatkan anak dalam permainan kelompok. Tujuan gerak dapat dimasukkan ke dalam <a href="program-pembelajaran-individual">program pembelajaran individual</a> dan ditinjau bersama orang tua secara berkala. Bila anak menjalani fisioterapi, minta saran terapis tentang posisi duduk dan aktivitas yang aman di kelas.'),
  p('Di Sekolah Inklusi Taruna Imani yang dikelola YUKA, kegiatan seperti kunjungan edukasi, menari, dan permainan di luar kelas dirancang agar anak dengan beragam kemampuan dapat ikut serta bersama pendamping. Pendekatan seperti ini sejalan dengan prinsip <a href="pendidikan-inklusi">pendidikan inklusi</a>, yaitu menyesuaikan lingkungan agar setiap anak dapat belajar dan bermain bersama teman sebayanya. Keluarga di sekitar Yogyakarta yang mencari layanan pendamping dapat melihat daftar di artikel <a href="tempat-terapi-anak-jogja">tempat terapi anak di Jogja</a>.'),
  p('Pada akhirnya, mengenali tanda keterlambatan motorik kasar adalah langkah awal, bukan vonis. Dengan pengamatan yang tenang, skrining yang tepat, dan kerja sama antara keluarga, tenaga kesehatan, serta sekolah, anak dapat memperoleh dukungan sesuai kebutuhannya. Semoga Allah memudahkan setiap ikhtiar orang tua dalam mendampingi tumbuh kembang buah hatinya.'),
  fig(bodyImages.group, 'Rombongan siswa, guru, dan pendamping YUKA duduk bersama di tangga batu Candi Plaosan', 'Kegiatan luar kelas melibatkan anak dengan beragam kemampuan gerak bersama guru dan pendamping. Foto ini dokumentasi kunjungan edukasi YUKA.'),
  faqHtml,
].join('\n');

const article = {
  slug,
  titleTag: 'Tanda Keterlambatan Motorik Kasar pada Anak dan Kapan Periksa | YUKA',
  metaDesc: 'Kenali tanda keterlambatan motorik kasar per usia menurut CDC, AAP, dan IDAI, tanda yang perlu segera diperiksa, alur skrining, fisioterapi, dan dukungan rumah serta sekolah.',
  keywords: 'tanda keterlambatan motorik kasar, keterlambatan motorik kasar, anak belum bisa berjalan, bayi belum bisa duduk, red flag perkembangan motorik, fisioterapi anak',
  ogTitle: 'Tanda Keterlambatan Motorik Kasar pada Anak',
  ogDesc: 'Panduan orang tua mengenali tanda keterlambatan motorik kasar per rentang usia, kapan harus segera periksa, dan langkah asesmen serta dukungannya.',
  datePublished: DATE,
  dateModified: DATE,
  dateDisplay: '12 Okt 2026',
  readTime: '12 menit baca',
  category: 'Motorik',
  h1: 'Tanda Keterlambatan Motorik Kasar pada Anak: Per Usia, Kapan Periksa, dan Cara Mendukung',
  crumb: 'Tanda Keterlambatan Motorik Kasar',
  parent: { href: 'motorik-kasar-adalah', name: 'Motorik Kasar' },
  about: ['Keterlambatan motorik kasar', 'Perkembangan anak', 'Deteksi dini tumbuh kembang'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'motorik-kasar-adalah', title: 'Motorik Kasar: Contoh, Tahapan, dan Stimulasi Anak', desc: 'Pengertian motorik kasar, jenis gerakan, dan tahapan perkembangannya dari bayi sampai usia 6 tahun.' },
    { href: 'milestone-motorik-kasar-anak-0-12-bulan', title: 'Milestone Motorik Kasar Anak 0-12 Bulan', desc: 'Panduan milestone gerak bayi bulan demi bulan dan cara membacanya.' },
    { href: 'permainan-motorik-kasar', title: 'Permainan Motorik Kasar', desc: 'Ide permainan aman per usia untuk melatih gerak anak.' },
    { href: 'terapi-fisik-untuk-anak-terlambat-jalan', title: 'Terapi Fisik untuk Anak Terlambat Jalan', desc: 'Gambaran dukungan fisioterapi bagi anak yang belum berjalan.' },
  ],
  tags: ['MotorikKasar', 'TumbuhKembang', 'DeteksiDini', 'Fisioterapi', 'ParentingABK'],
  sources: [
    { url: 'https://www.cdc.gov/act-early/milestones/index.html', label: 'CDC, Developmental Milestones (Learn the Signs. Act Early.)' },
    { url: 'https://www.cdc.gov/act-early/milestones/9-months.html', label: 'CDC, Milestones by 9 Months' },
    { url: 'https://www.cdc.gov/act-early/milestones/1-year.html', label: 'CDC, Milestones by 1 Year' },
    { url: 'https://www.cdc.gov/act-early/milestones/18-months.html', label: 'CDC, Milestones by 18 Months' },
    { url: 'https://www.cdc.gov/act-early/milestones/2-years.html', label: 'CDC, Milestones by 2 Years' },
    { url: 'https://www.cdc.gov/act-early/about/developmental-monitoring-and-screening.html', label: 'CDC, Developmental Monitoring and Screening' },
    { url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Is-Your-Babys-Physical-Development-on-Track.aspx', label: 'AAP HealthyChildren.org, Is Your Baby’s Physical Development on Track?' },
    { url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-12-Months.aspx', label: 'AAP HealthyChildren.org, Developmental Milestones: 12 Months' },
    { url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Developmental-Milestones-2-Year-Olds.aspx', label: 'AAP HealthyChildren.org, Developmental Milestones: 2 Year Olds' },
    { url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Movement-8-to-12-Months.aspx', label: 'AAP HealthyChildren.org, Movement Milestones in Babies 8 to 12 Months Old' },
    { url: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/mengenal-keterlambatan-perkembangan-umum-pada-anak', label: 'IDAI, Mengenal Keterlambatan Perkembangan Umum pada Anak' },
    { url: 'https://ayosehat.kemkes.go.id/rahasia-anak-sehat-dan-cerdas-lakukan-stimulasi-tumbuh-kembang-dengan-buku-kia', label: 'Kemenkes Ayo Sehat, Stimulasi Tumbuh Kembang dengan Buku KIA' },
    { url: 'https://keslan.kemkes.go.id/view_artikel/1298/seberapa-penting-buku-kia', label: 'Kemenkes, Seberapa Penting Buku KIA?' },
  ],
  sourcesCheckedNote: 'Sumber resmi diperiksa pada 11 Oktober 2026. Artikel ini tidak memberikan diagnosis; keputusan pemeriksaan dan terapi tetap bersama dokter anak dan tenaga kesehatan yang menangani anak.',
};

let html = renderArticlePage(article);

// Pola artikel kesehatan YUKA (commit 9508370): blok "Tentang artikel ini" dengan penanda
// MEDICAL_REVIEW_STATUS (jujur, tanpa nama peninjau) + node JSON-LD MedicalWebPage.
const provenance = `
        <!-- E-E-A-T: transparansi penulis, tinjauan, dan kebijakan koreksi -->
        <div class="article-provenance" style="margin:2rem 0;padding:1.5rem;background:#FFFFFF;border:1px solid #DDE3F0;border-radius:10px;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Tentang artikel ini</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.25rem;font-size:0.95rem;line-height:1.85;color:#333;">
            <li><strong>Ditulis oleh:</strong> Tim YUKA (Yayasan Ukhuwah Kaffah Amanatullah), pengelola Sekolah Inklusi Taruna Imani, Sleman, Yogyakarta.</li>
            <li><strong>Dasar rujukan:</strong> cdc.gov, healthychildren.org (American Academy of Pediatrics), idai.or.id, ayosehat.kemkes.go.id, keslan.kemkes.go.id. Semua rujukan ditautkan langsung di bagian sumber di bawah artikel ini.</li>
            <li><strong>Terbit:</strong> 12 Oktober 2026. <strong>Pembaruan terakhir:</strong> 12 Oktober 2026.</li>
<!-- MEDICAL_REVIEW_STATUS:START -->
            <li><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik, <strong>belum ditinjau oleh dokter berlisensi</strong>. Tinjauan oleh tenaga medis berkredensial sedang kami siapkan dan status ini akan diperbarui di halaman ini begitu selesai. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk keputusan diagnosis atau terapi, rujuklah pada dokter anak, dokter rehabilitasi medik, atau fisioterapis yang menangani anak.</li>
          <!-- MEDICAL_REVIEW_STATUS:END -->
            <li><strong>Kebijakan koreksi:</strong> jika Anda menemukan klaim yang keliru atau sumber yang tidak cocok, beri tahu kami lewat <a href="/kontak">halaman kontak</a>. Kami memperbaiki isinya dan mencantumkan catatan koreksi secara terbuka.</li>
          </ul>
        </div>
`;
const anchor = '<div class="article-sources"';
if (!html.includes(anchor)) throw new Error('anchor article-sources tidak ditemukan');
html = html.replace(anchor, provenance.trimStart() + anchor);

const CANONICAL = `${SITE}/artikel/${slug}`;
const medicalPage = {
  '@context': 'https://schema.org', '@type': 'MedicalWebPage', '@id': `${CANONICAL}#medicalwebpage`,
  url: CANONICAL, name: article.h1, inLanguage: 'id-ID',
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE, dateModified: DATE,
  specialty: 'https://schema.org/Pediatric',
  medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient', name: 'Orang tua dan guru yang memantau perkembangan motorik anak' },
  about: { '@type': 'MedicalCondition', name: 'Keterlambatan motorik kasar', alternateName: 'Gross motor delay' },
  publishingPrinciples: { '@type': 'CreativeWork', name: 'Kebijakan Editorial YUKA', url: `${SITE}/kebijakan-editorial` },
};
const bpMarker = '\n    <!-- BreadcrumbList Schema -->';
if (!html.includes(bpMarker)) throw new Error('marker BreadcrumbList tidak ditemukan');
html = html.replace(bpMarker, `\n    <script type="application/ld+json">${JSON.stringify(medicalPage)}</script>\n${bpMarker}`);

if (/[—–]/.test(html)) throw new Error('ada em/en dash di HTML');
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

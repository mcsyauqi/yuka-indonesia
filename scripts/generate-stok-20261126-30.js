'use strict';
/*
 * Generator artikel stok antrean 26 sampai 30 November 2026 (stok-artikel-des-2026, situs #12 Yuka).
 *
 * Keyword dari sheet Keyword Data proyek (tab Riset Keyword Batch 4 dan 5, status Planned).
 * Tiap artikel ditambahkan satu per satu ke array `articles` dan diklaim di state slot sebelum ditulis.
 *
 * Foto: foto asli Wikimedia Commons berlisensi CC BY / CC BY-SA / CC0, pemotret dan lisensi dikreditkan
 * dan terlihat di caption, tanpa potret dekat satu anak di bawah judul diagnosis. Diagram SVG dari
 * scripts/lib/diagram-svg.js (bukan AI). Nol gambar AI.
 *
 *   node scripts/generate-stok-20261126-30.js --prepare   # tulis SVG diagram
 *   node scripts/generate-stok-20261126-30.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-stok-20261126-30.js [slug]      # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const LIC = {
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  CC0: 'https://creativecommons.org/publicdomain/zero/1.0/',
};
const CM = (page, by, lic) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">${by}</a> / Wikimedia Commons, <a href="${LIC[lic]}" target="_blank" rel="nofollow noopener">${lic}</a>.`;
const fig = (file, w, h, alt, caption, credit) => `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${credit}</span></figcaption></figure>`;
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;
const ext = (url, text) => `<a href="${url}" target="_blank" rel="nofollow noopener">${text}</a>`;
const table = (caption, head, rows) => `<div class="table-wrap"><table><caption>${caption}</caption><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const a = (slug, text) => `<a href="/artikel/${slug}">${text}</a>`;
const faqBlock = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');

const diagrams = {};
const addDiagram = (file, markup) => { diagrams[file] = markup; };

const articles = [];

// ---------------------------------------------------------------------------
// Artikel 1: distrofi otot Duchenne pada anak (26 Nov 2026)
// Keyword: "distrofi otot duchenne pada anak" (tab Riset Keyword Batch 5, baris 26)
// ---------------------------------------------------------------------------
const URL_NHS_MD = 'https://www.nhs.uk/conditions/muscular-dystrophy/';
const URL_MP_DMD = 'https://medlineplus.gov/ency/article/000705.htm';
const URL_MPG_DMD = 'https://medlineplus.gov/genetics/condition/duchenne-and-becker-muscular-dystrophy/';
const URL_CDC_MD = 'https://www.cdc.gov/muscular-dystrophy/about/index.html';
const D_HERO = 'https://commons.wikimedia.org/wiki/File:Iran_v_Japan_men%27s_wheelchair_basketball_final_at_the_2018_Asian_Para_Games.jpg';
const D_FISIO = 'https://commons.wikimedia.org/wiki/File:Physiotherapy_equipment_in_Laquintinie_Hospital_Cameroon.jpg';
const D_VOLI = 'https://commons.wikimedia.org/wiki/File:Sitting_Volleyball_IRN_vs_JPN_-_Asian_Para_Games_2018.jpg';

const dSections = [
  ['pengertian', 'Apa itu distrofi otot Duchenne'],
  ['penyebab', 'Penyebab: gen DMD dan protein distrofin'],
  ['gejala', 'Gejala yang perlu diperhatikan orang tua'],
  ['perjalanan', 'Perjalanan kondisi dari tahun ke tahun'],
  ['diagnosis', 'Pemeriksaan dan diagnosis'],
  ['penanganan', 'Penanganan oleh tim kesehatan'],
  ['sekolah', 'Mendukung anak di sekolah'],
  ['keluarga', 'Dukungan untuk keluarga'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const dFaq = [
  { q: 'Apa itu distrofi otot Duchenne?', a: 'Distrofi otot Duchenne adalah kondisi genetik yang membuat otot makin lemah seiring waktu. Menurut NHS, Duchenne adalah jenis distrofi otot yang paling umum, dimulai pada masa kanak-kanak awal, biasanya hanya mengenai anak laki-laki, dan memburuk dengan cepat.' },
  { q: 'Pada usia berapa gejala Duchenne biasanya muncul?', a: 'MedlinePlus menyebut gejala paling sering muncul sebelum usia 6 tahun dan bisa mulai sejak bayi, walaupun kebanyakan anak laki-laki tidak menunjukkan gejala pada beberapa tahun pertama. Tanda awal yang sering dikenali orang tua adalah anak lebih sering jatuh, sulit berlari atau melompat, dan sulit bangun dari posisi berbaring.' },
  { q: 'Mengapa Duchenne hampir selalu terjadi pada anak laki-laki?', a: 'Gen DMD terletak di kromosom X dan diturunkan dengan pola resesif terkait X. Anak laki-laki hanya punya satu kromosom X, sehingga satu salinan gen yang berubah sudah cukup menimbulkan kondisi ini. Anak perempuan punya dua kromosom X, sehingga biasanya menjadi pembawa tanpa gejala, meskipun sebagian pembawa bisa mengalami lemah otot ringan.' },
  { q: 'Seberapa sering distrofi otot Duchenne terjadi?', a: 'MedlinePlus memperkirakan Duchenne terjadi pada sekitar 1 dari 3.500 bayi laki-laki. Bila digabung dengan tipe Becker, MedlinePlus Genetics menyebut keduanya mengenai sekitar 1 dari 3.500 sampai 5.000 bayi laki-laki di seluruh dunia.' },
  { q: 'Apakah distrofi otot Duchenne bisa disembuhkan?', a: 'NHS dan MedlinePlus sama-sama menyatakan belum ada obat yang menyembuhkan distrofi otot Duchenne. Penanganan bertujuan mengendalikan gejala dan menjaga kualitas hidup, misalnya obat steroid untuk memperlambat hilangnya kekuatan otot, fisioterapi, perawatan jantung dan pernapasan, serta alat bantu mobilitas.' },
  { q: 'Bagaimana Duchenne didiagnosis?', a: 'Dokter biasanya merujuk ke dokter spesialis. Pemeriksaan yang dapat dilakukan antara lain tes darah kadar kreatin kinase, tes genetik, elektromiografi (EMG), biopsi otot, dan MRI otot. Pemeriksaan jantung, paru, dan tulang belakang juga dilakukan untuk melihat dampak kondisi pada organ lain.' },
  { q: 'Apakah anak dengan Duchenne boleh tetap aktif bergerak?', a: 'Ya, dengan arahan tim kesehatan. MedlinePlus menyebut aktivitas dianjurkan karena tidak bergerak, seperti berbaring terlalu lama, dapat memperburuk kondisi otot. Fisioterapi dapat membantu mempertahankan kekuatan dan fungsi otot. Jenis dan takaran aktivitas sebaiknya disusun oleh fisioterapis yang mengenal kondisi anak.' },
  { q: 'Apakah anak dengan Duchenne bisa bersekolah di sekolah reguler?', a: 'Bisa. Banyak anak dengan Duchenne bersekolah di sekolah inklusi dengan penyesuaian seperti akses tanpa tangga, waktu ekstra untuk berpindah tempat, pendamping saat makan atau ke toilet, dan dukungan belajar bila ada kesulitan belajar. NHS menyebut dukungan di sekolah termasuk bagian dari layanan bagi penyandang distrofi otot.' },
];

addDiagram(`${IMG}/duchenne-perjalanan.webp`, svg.flow('Perjalanan umum distrofi otot Duchenne', 'Rangkuman usia menurut MedlinePlus; tiap anak bisa berbeda', [
  { h: 'Tahun pertama', d: 'Banyak anak belum menunjukkan gejala; sebagian terlambat duduk, berdiri, atau berjalan' },
  { h: 'Sebelum usia 6', d: 'Gejala biasanya mulai tampak: sering jatuh, sulit berlari, melompat, dan bangun dari lantai' },
  { h: 'Sekitar usia 4 sampai 5', d: 'Otot betis, bokong, dan bahu tampak membesar (pseudohipertrofi)' },
  { h: 'Sekitar usia 12', d: 'Kemampuan berjalan dapat hilang sehingga anak memakai kursi roda' },
  { h: 'Remaja dan dewasa muda', d: 'Masalah jantung dan pernapasan makin perlu dipantau ketat' },
]));
addDiagram(`${IMG}/duchenne-tim.webp`, svg.cards('Tim yang biasanya terlibat', 'Penanganan Duchenne melibatkan beberapa spesialis sekaligus', [
  { h: 'Saraf dan otot', items: ['Dokter anak dan neurolog', 'Obat steroid sesuai resep', 'Pemantauan kekuatan otot'] },
  { h: 'Gerak dan aktivitas', items: ['Fisioterapi rutin', 'Terapi okupasi', 'Alat bantu dan kursi roda'] },
  { h: 'Jantung dan paru', items: ['Pemeriksaan jantung berkala', 'Tes fungsi paru', 'Alat bantu napas bila perlu'] },
  { h: 'Tulang dan keluarga', items: ['Pemantauan skoliosis', 'Konseling genetik', 'Dukungan sekolah dan psikologis'] },
]));

const dBody = [
  p('<strong>Distrofi otot Duchenne</strong> adalah kondisi genetik yang membuat otot anak makin lemah dari waktu ke waktu. Menurut NHS, Duchenne adalah jenis distrofi otot yang paling umum, dimulai pada masa kanak-kanak awal, biasanya hanya mengenai anak laki-laki, dan memburuk dengan cepat. Kondisi ini terjadi karena tubuh tidak membuat protein distrofin yang dibutuhkan untuk melindungi serat otot. Belum ada obat yang menyembuhkannya, tetapi penanganan yang tepat dapat membantu anak tetap aktif, belajar, dan menikmati masa kecilnya lebih lama.'),
  p('Banyak orang tua awalnya mengira anaknya hanya sedikit lebih lambat atau kurang lincah dibandingkan teman seusianya. Artikel ini membahas pengertian distrofi otot Duchenne, penyebab genetiknya, gejala yang perlu diperhatikan, perjalanan kondisi dari tahun ke tahun, cara diagnosis, pilihan penanganan, dukungan di sekolah, dan dukungan bagi keluarga. Bila Anda sedang mengamati perkembangan gerak anak, baca juga ' + a('tanda-keterlambatan-motorik-kasar', 'tanda keterlambatan motorik kasar') + ' sebagai pembanding.'),
  toc(dSections),

  '<h2 id="pengertian">Apa itu distrofi otot Duchenne</h2>',
  p('Distrofi otot adalah nama untuk sekelompok kondisi genetik yang membuat otot menjadi lemah. ' + ext(URL_CDC_MD, 'CDC (Pusat Pengendalian dan Pencegahan Penyakit Amerika Serikat)') + ' menjelaskan bahwa setiap jenis distrofi otot mengenai kelompok otot tertentu, muncul pada usia yang berbeda, dan tingkat keparahannya beragam. Distrofi otot disebabkan perubahan pada lebih dari 40 gen. Seiring waktu, kelemahan otot mengurangi kemampuan bergerak sehingga aktivitas sehari-hari menjadi sulit.'),
  p(ext(URL_NHS_MD, 'NHS (layanan kesehatan nasional Inggris)') + ' menyebut distrofi otot sebagai kondisi genetik yang langka. Di antara banyak jenisnya, Duchenne adalah yang paling umum. Duchenne dimulai pada masa kanak-kanak awal, biasanya hanya mengenai anak laki-laki, dan berkembang cepat. Kerabat dekatnya, distrofi otot Becker, disebabkan perubahan pada gen yang sama tetapi gejalanya biasanya lebih ringan dan memburuk jauh lebih lambat.'),
  p('Menurut ' + ext(URL_MP_DMD, 'MedlinePlus dari Perpustakaan Kedokteran Nasional Amerika Serikat') + ', Duchenne terjadi pada sekitar 1 dari 3.500 bayi laki-laki. Halaman ' + ext(URL_MPG_DMD, 'MedlinePlus Genetics') + ' memberi angka gabungan untuk tipe Duchenne dan Becker, yaitu sekitar 1 dari 3.500 sampai 5.000 bayi laki-laki di seluruh dunia. Angka ini menunjukkan bahwa Duchenne memang jarang, tetapi bukan kondisi yang sangat langka sehingga setiap guru dan tenaga kesehatan anak sebaiknya mengenal tanda awalnya.'),
  p('Duchenne termasuk kelompok ' + a('disabilitas-fisik', 'disabilitas fisik') + ' yang sifatnya progresif, artinya kemampuan gerak anak berubah seiring usia. Karena itu dukungan untuk anak dengan Duchenne tidak bisa disusun sekali lalu dibiarkan. Rencana di rumah dan di sekolah perlu ditinjau ulang secara berkala mengikuti kondisi anak, dan keputusan penting sebaiknya diambil bersama tim kesehatan yang menanganinya.'),

  '<h2 id="penyebab">Penyebab: gen DMD dan protein distrofin</h2>',
  p('MedlinePlus Genetics menjelaskan bahwa Duchenne dan Becker disebabkan perubahan pada gen DMD. Gen ini memberi instruksi untuk membuat protein distrofin, protein yang terutama berada di otot rangka dan otot jantung. Distrofin membantu menstabilkan dan melindungi serat otot. Tanpa cukup distrofin, sel otot rusak setiap kali otot berkontraksi dan mengendur saat dipakai. Serat yang rusak lama-lama melemah dan mati, sehingga muncul kelemahan otot dan masalah jantung yang menjadi ciri kondisi ini.'),
  p('Perbedaan Duchenne dan Becker terletak pada jenis perubahan gennya. Perubahan yang masih menghasilkan distrofin dengan sebagian fungsi biasanya menyebabkan Becker. Perubahan yang membuat tubuh sama sekali tidak menghasilkan distrofin yang berfungsi cenderung menyebabkan Duchenne. Itulah sebabnya Duchenne umumnya jauh lebih berat dan lebih cepat memburuk.'),
  p('Pola pewarisannya disebut resesif terkait kromosom X. Gen DMD berada di kromosom X. Anak laki-laki hanya punya satu kromosom X, sehingga satu salinan gen yang berubah sudah cukup menimbulkan kondisi ini. Anak perempuan punya dua kromosom X, sehingga perubahan harus terjadi pada kedua salinan, dan itu sangat jarang. MedlinePlus menyebut anak laki-laki dari ibu pembawa masing-masing memiliki peluang 50 persen mengalami Duchenne, sedangkan anak perempuannya masing-masing berpeluang 50 persen menjadi pembawa.'),
  p('Satu hal penting yang sering membuat orang tua merasa bersalah: menurut MedlinePlus, Duchenne sering terjadi pada keluarga tanpa riwayat kondisi ini. MedlinePlus Genetics menyebut sebagian kasus diwarisi dari ibu pembawa, sementara sisanya kemungkinan berasal dari perubahan gen baru pada anak itu sendiri. Jadi diagnosis Duchenne bukan akibat sesuatu yang dilakukan atau tidak dilakukan orang tua selama kehamilan. Ibu pembawa umumnya tidak bergejala, tetapi sebagian dapat mengalami lemah otot atau kram yang ringan, dan risiko masalah jantungnya juga lebih tinggi sehingga perlu diperiksa.'),
  p('Karena menyangkut beberapa anggota keluarga, NHS menganjurkan konseling genetik bagi keluarga yang memiliki riwayat distrofi otot, termasuk bagi yang sedang hamil atau merencanakan kehamilan. Konselor genetik membantu keluarga memahami hasil tes, siapa saja yang mungkin perlu diperiksa, dan pilihan yang tersedia. Bila Anda ingin memahami dasar genetik kondisi anak secara umum, artikel ' + a('penyebab-autisme-penelitian-genetik-terbaru', 'penelitian genetik pada kondisi perkembangan') + ' memberi gambaran cara kerja penelitian genetik.'),

  '<h2 id="gejala">Gejala yang perlu diperhatikan orang tua</h2>',
  p('MedlinePlus menyebut gejala Duchenne paling sering muncul sebelum usia 6 tahun dan bisa mulai sejak bayi, walaupun kebanyakan anak laki-laki tidak menunjukkan gejala pada beberapa tahun pertama. NHS mencatat bahwa pada anak kecil, distrofi otot dapat tampak sebagai tubuh yang lemas atau terkulai serta waktu yang lebih lama dari biasanya untuk merangkak atau berjalan. Tanda-tanda ini mudah tertukar dengan keterlambatan perkembangan biasa, sehingga pengamatan orang tua sangat berarti.'),
  p('Kelemahan otot pada Duchenne biasanya dimulai dari tungkai dan panggul, lalu juga mengenai lengan, leher, dan bagian tubuh lain dengan derajat yang lebih ringan. Orang tua sering pertama kali melihatnya dari cara anak bergerak sehari-hari: anak lebih sering jatuh, kesulitan berlari, melompat, atau melompat dengan satu kaki, dan tampak berusaha keras saat naik tangga atau bangun dari posisi berbaring di lantai. Sebagian anak berjalan dengan bertumpu pada ujung jari kaki karena otot di sekitar tumit menjadi kaku.'),
  table('Tanda Duchenne menurut NHS dan MedlinePlus', ['Bidang', 'Tanda yang dapat terlihat', 'Catatan untuk orang tua'], [
    ['Gerak kasar', 'Sering jatuh, sulit berlari, melompat, naik tangga, dan bangun dari lantai', 'Biasanya mulai tampak sebelum usia 6 tahun'],
    ['Otot', 'Betis, bokong, dan bahu tampak besar sekitar usia 4 sampai 5 tahun', 'Pembesaran ini bukan tanda otot kuat; jaringan otot perlahan digantikan lemak dan jaringan ikat'],
    ['Sendi dan tulang', 'Sendi kaku di tumit dan tungkai, tulang belakang melengkung (skoliosis)', 'Perlu dipantau dokter dan fisioterapis'],
    ['Belajar', 'Kesulitan belajar; disabilitas intelektual mungkin ada tetapi tidak memburuk', 'Asesmen belajar membantu sekolah menyusun dukungan'],
    ['Jantung dan napas', 'Mudah lelah, sesak napas, kaki bengkak pada tahap lanjut', 'Pemeriksaan jantung dan paru dilakukan berkala'],
  ]),
  p('Tanda yang sering mengejutkan orang tua adalah otot betis yang tampak besar. MedlinePlus menyebut pembesaran otot betis, bokong, dan bahu biasanya terlihat sekitar usia 4 atau 5 tahun, lalu jaringan otot tersebut lama-lama digantikan lemak dan jaringan ikat. Istilah medisnya pseudohipertrofi, artinya pembesaran yang tampak seperti otot kuat padahal kekuatannya justru berkurang.'),
  p('Duchenne tidak hanya soal otot. MedlinePlus mencatat sebagian anak mengalami kesulitan belajar, dan disabilitas intelektual mungkin ada tetapi tidak memburuk seiring waktu. Kelelahan juga sering muncul. Karena itu pengamatan guru di kelas, misalnya anak cepat lelah setelah upacara atau kesulitan mengikuti pelajaran tertentu, sama pentingnya dengan pengamatan di rumah.'),
  p('NHS menganjurkan orang tua menemui dokter bila anak menunjukkan gejala distrofi otot atau bila orang tua khawatir tentang perkembangan anak. Anda tidak perlu menunggu sampai yakin. Catat apa yang Anda lihat, kapan terjadi, dan bila memungkinkan rekam video pendek saat anak naik tangga atau bangun dari lantai. Rekaman seperti ini sangat membantu dokter melihat pola gerak yang sulit dijelaskan dengan kata-kata.'),
  fig(`${IMG}/duchenne-fisioterapi.webp`, 1200, 798, 'Ruang fisioterapi rumah sakit berisi treadmill dengan pegangan tangan, sepeda statis, dan peralatan latihan lain', 'Ruang fisioterapi di sebuah rumah sakit. Fisioterapi rutin termasuk penanganan utama untuk menjaga kekuatan dan kelenturan otot anak dengan distrofi otot Duchenne.', CM(D_FISIO, 'Happi Raphael', 'CC BY-SA 4.0')),

  '<h2 id="perjalanan">Perjalanan kondisi dari tahun ke tahun</h2>',
  p('MedlinePlus Genetics menggambarkan bahwa pada anak dengan Duchenne, kelemahan otot cenderung muncul pada masa kanak-kanak awal dan memburuk dengan cepat. Anak bisa mengalami keterlambatan keterampilan motorik seperti duduk, berdiri, dan berjalan. Diagram berikut merangkum perjalanan umum yang digambarkan MedlinePlus. Usia di dalamnya adalah gambaran umum, bukan jadwal pasti untuk setiap anak.'),
  diag(`${IMG}/duchenne-perjalanan.webp`, 'Diagram alur perjalanan umum distrofi otot Duchenne dari tahun pertama, sebelum usia 6, usia 4 sampai 5, sekitar usia 12, sampai remaja dan dewasa muda', 'Perjalanan umum distrofi otot Duchenne menurut MedlinePlus. Perawatan yang baik dapat mengubah perjalanan ini, jadi angka usia hanyalah gambaran.'),
  p('MedlinePlus menyebut kemampuan berjalan dapat hilang sekitar usia 12 tahun sehingga anak perlu memakai kursi roda, dan MedlinePlus Genetics menyebut anak dengan Duchenne biasanya bergantung pada kursi roda saat remaja. Masalah pernapasan dan penyakit jantung biasanya mulai muncul sebelum usia 20 tahun. Otot jantung yang melemah, disebut kardiomiopati, menurut MedlinePlus Genetics biasanya mulai pada masa remaja dan dapat menyebabkan detak jantung tidak teratur, sesak napas, kelelahan berat, serta bengkak di tungkai dan kaki.'),
  p('Informasi ini memang berat untuk dibaca. Namun ada hal penting yang perlu diingat: MedlinePlus mencatat bahwa kemajuan perawatan suportif membuat banyak laki-laki dengan Duchenne kini hidup sampai usia sekitar 35 tahun. NHS juga menegaskan bahwa distrofi otot berbeda pada setiap orang, dan tim perawatan anak Anda adalah sumber terbaik untuk informasi tentang kondisi anak Anda sendiri. Angka rata-rata tidak menentukan hari-hari anak Anda.'),
  p('Perubahan dari berjalan ke kursi roda sering menjadi masa transisi yang emosional bagi anak dan keluarga. Di sisi lain, banyak keluarga merasakan bahwa kursi roda justru mengembalikan kebebasan anak untuk bermain, bersekolah, dan bepergian tanpa kelelahan. NHS menyebut banyak penyandang distrofi otot memerlukan alat bantu mobilitas seperti kursi roda ketika kelemahan otot bertambah. Menyiapkan transisi ini lebih awal, termasuk akses di rumah dan sekolah, membuat perubahan terasa lebih ringan.'),

  '<h2 id="diagnosis">Pemeriksaan dan diagnosis</h2>',
  p('Menurut NHS, bila dokter menduga seorang anak mengalami distrofi otot, anak biasanya dirujuk ke dokter spesialis untuk pemeriksaan. Lebih dari satu tes mungkin dibutuhkan untuk memastikan diagnosis atau menentukan jenisnya. Di Indonesia, jalur yang umum dimulai dari dokter anak atau puskesmas, lalu rujukan ke dokter spesialis anak konsultan saraf atau ke rumah sakit yang memiliki layanan neuromuskular.'),
  p('Pemeriksaan yang disebut NHS dan MedlinePlus antara lain:'),
  ul([
    'Tes darah kadar kreatin kinase, enzim yang keluar dari otot yang rusak dan biasanya sangat tinggi pada Duchenne.',
    'Tes genetik untuk mencari perubahan pada gen DMD, yang juga menentukan jenis perubahan gennya.',
    'Elektromiografi (EMG), yaitu jarum kecil dimasukkan ke otot untuk memeriksa aktivitas listriknya.',
    'Biopsi otot, yaitu sepotong kecil jaringan otot diambil untuk diperiksa.',
    'MRI otot untuk melihat kondisi jaringan otot.',
    'Pemeriksaan jantung seperti elektrokardiogram (EKG), tes fungsi paru, dan rontgen tulang belakang untuk melihat skoliosis.',
  ]),
  p('Hasil tes genetik penting bukan hanya untuk memastikan diagnosis. MedlinePlus menjelaskan bahwa sebagian terapi genetik hanya bekerja pada orang dengan jenis perubahan gen tertentu. Jadi mengetahui perubahan gen yang tepat membantu dokter menilai pilihan penanganan yang mungkin sesuai. Proses diagnosis bisa memakan waktu. Selama menunggu, keluarga tetap dapat memulai ' + a('intervensi-dini', 'intervensi dini') + ' seperti fisioterapi untuk menjaga gerak anak.'),
  p('Menerima diagnosis Duchenne sering terasa seperti dunia berhenti sejenak. Wajar bila orang tua merasa sedih, marah, atau bingung. Beri diri Anda waktu, ajukan semua pertanyaan kepada dokter, dan minta penjelasan ulang bila ada istilah yang belum dipahami. Artikel ' + a('menerima-diagnosis-anak-abk', 'menerima diagnosis anak ABK') + ' membahas tahap-tahap yang sering dialami orang tua setelah diagnosis.'),

  '<h2 id="penanganan">Penanganan oleh tim kesehatan</h2>',
  p('NHS dan MedlinePlus sama-sama menyatakan belum ada obat yang menyembuhkan distrofi otot Duchenne. Penanganan bertujuan mengendalikan gejala agar kualitas hidup anak sebaik mungkin. NHS menyebut penyandang distrofi otot biasanya didukung oleh tim yang terdiri dari beberapa spesialis, dan penanganannya bergantung pada jenis distrofi otot serta gejala yang dialami.'),
  diag(`${IMG}/duchenne-tim.webp`, 'Diagram empat kartu tim penanganan Duchenne: saraf dan otot, gerak dan aktivitas, jantung dan paru, serta tulang dan keluarga', 'Penanganan distrofi otot Duchenne melibatkan banyak bidang. Susunan tim bisa berbeda di tiap rumah sakit.'),
  p('Obat steroid adalah salah satu penanganan utama. MedlinePlus menyebut steroid dapat memperlambat hilangnya kekuatan otot dan bisa dimulai saat anak didiagnosis atau saat kekuatan otot mulai menurun. Steroid punya efek samping, salah satunya kenaikan berat badan, sehingga dosis dan pemantauannya harus diatur dokter. Jangan pernah menghentikan atau mengubah dosis steroid tanpa petunjuk dokter.'),
  p('MedlinePlus juga mencatat adanya terapi genetik yang dapat membantu sebagian orang, bergantung pada penyebab genetiknya. Setiap terapi hanya cocok untuk sebagian kecil penyandang dengan perubahan gen tertentu. Terapi ini terbukti meningkatkan produksi distrofin, tetapi manfaat klinisnya yang bermakna belum terbukti. Berbagai suplemen juga pernah dicoba, namun MedlinePlus menyebut efeknya belum terbukti. Diskusikan setiap tawaran terapi baru dengan dokter yang menangani anak, terutama bila harganya mahal dan janjinya terdengar terlalu bagus.'),
  p('Gerak tetap penting. MedlinePlus menyebut aktivitas dianjurkan, karena tidak bergerak seperti berbaring terlalu lama dapat memperburuk kondisi otot. Fisioterapi membantu mempertahankan kekuatan dan fungsi otot, dan NHS menambahkan fisioterapi juga membantu gerak serta meredakan nyeri. Fisioterapis biasanya mengajarkan peregangan harian untuk mencegah sendi kaku, dan dapat menyarankan bidai atau penyangga untuk dipakai malam hari. Contoh latihan yang aman dilakukan di rumah dibahas di ' + a('latihan-fisioterapi-anak-di-rumah', 'latihan fisioterapi anak di rumah') + ', tetapi takarannya untuk anak dengan Duchenne harus mengikuti arahan fisioterapisnya.'),
  p('Penanganan lain menurut NHS dan MedlinePlus meliputi obat untuk jantung, alat bantu napas yang dipakai siang atau malam hari bila otot pernapasan melemah, operasi untuk skoliosis atau sendi yang kaku pada sebagian anak, serta terapi wicara yang sering dibutuhkan. ' + a('terapi-okupasi', 'Terapi okupasi') + ' membantu anak tetap mandiri dalam kegiatan sehari-hari seperti makan, berpakaian, dan menulis. Untuk anak yang mengalami skoliosis, prinsip pemantauan tulang belakang mirip dengan yang dibahas di artikel ' + a('skoliosis-pada-anak-cerebral-palsy', 'skoliosis pada anak cerebral palsy') + '.'),
  fig(`${IMG}/duchenne-voli.webp`, 1200, 726, 'Arena voli duduk Asian Para Games 2018 di Jakarta, para pemain dan ofisial berkumpul di tepi lapangan sebelum pertandingan', 'Arena voli duduk di Asian Para Games 2018, Jakarta. Olahraga dan aktivitas adaptif menunjukkan bahwa gerak tetap mungkin dengan penyesuaian; untuk anak dengan Duchenne, jenis aktivitas ditentukan bersama fisioterapis.', CM(D_VOLI, 'Griff88', 'CC BY-SA 4.0')),

  '<h2 id="sekolah">Mendukung anak di sekolah</h2>',
  p('Anak dengan Duchenne berhak mendapatkan pendidikan yang sama seperti anak lain. NHS menyebut dukungan di rumah, tempat kerja, dan sekolah termasuk bagian dari layanan bagi penyandang distrofi otot. Di Indonesia, hak ini sejalan dengan prinsip pendidikan inklusif yang dibahas di artikel ' + a('apa-saja-hak-anak-berkebutuhan-khusus', 'hak anak berkebutuhan khusus') + '. Berikut beberapa penyesuaian yang sering membantu:'),
  ul([
    '<strong>Akses fisik.</strong> Kelas di lantai dasar, jalur landai, toilet yang bisa dimasuki kursi roda, dan meja dengan tinggi yang sesuai.',
    '<strong>Waktu ekstra.</strong> Izin keluar kelas lebih awal agar anak tidak berdesakan saat berpindah ruangan atau pulang.',
    '<strong>Mengatur energi.</strong> Waktu istirahat singkat, mengurangi berdiri lama saat upacara, dan tugas tulis yang bisa diganti mengetik atau menjawab lisan saat tangan lelah.',
    '<strong>Pendidikan jasmani yang disesuaikan.</strong> Anak tetap ikut kegiatan olahraga dengan peran dan gerakan yang disepakati bersama fisioterapis, bukan dikeluarkan sepenuhnya.',
    '<strong>Dukungan belajar.</strong> Bila ada kesulitan belajar, guru dapat menyusun program pembelajaran individual dan memberi bantuan visual.',
    '<strong>Rencana darurat.</strong> Guru tahu apa yang harus dilakukan bila anak jatuh, sesak, atau tampak sangat lelah, serta siapa yang perlu dihubungi.',
  ]),
  p('Komunikasi rutin antara orang tua, guru, dan terapis menjadi kunci. Kondisi anak berubah, sehingga penyesuaian yang cocok tahun ini mungkin perlu diubah tahun depan. Pertimbangan memilih ' + a('apa-perbedaan-sekolah-inklusi-dan-slb', 'sekolah inklusi atau SLB') + ' sebaiknya didasarkan pada kebutuhan anak, kesiapan sekolah, dan jarak tempuh, bukan hanya pada diagnosis.'),
  p('Jangan lupakan sisi sosial. Anak dengan Duchenne bisa merasa berbeda ketika tidak lagi mampu mengikuti permainan lari di jam istirahat. Guru dapat membantu dengan menyediakan permainan yang bisa dimainkan semua anak sambil duduk, seperti permainan papan, teka-teki, atau kegiatan seni. Teman sebaya yang memahami kondisi temannya biasanya justru menjadi pendukung terbaik.'),

  '<h2 id="keluarga">Dukungan untuk keluarga</h2>',
  p('Merawat anak dengan kondisi progresif adalah perjalanan panjang. Orang tua perlu menyiapkan perubahan di rumah, misalnya pegangan di kamar mandi, jalur landai, atau penataan kamar di lantai bawah. NHS menyebut adaptasi rumah seperti pegangan dan alat bantu naik tangga sebagai bagian dari dukungan hidup sehari-hari. Untuk urusan administrasi layanan disabilitas di Indonesia, panduan ' + a('kartu-disabilitas', 'kartu disabilitas') + ' dapat menjadi titik awal.'),
  p('Jaga juga kesehatan Anda sendiri. Kelelahan fisik dan emosional sangat umum pada orang tua anak dengan kondisi kronis. Bagi tugas dengan pasangan dan keluarga besar, beri ruang untuk beristirahat, dan jangan ragu mencari bantuan psikolog. NHS menyebut dukungan dari orang lain yang mengalami hal serupa, termasuk sesama orang tua anak dengan distrofi otot, sering sangat membantu. Strategi praktis bisa dibaca di artikel ' + a('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak ABK') + '.'),
  p('Saudara kandung juga butuh perhatian. Mereka mungkin ikut menjalani tes genetik, mendengar istilah medis yang membingungkan, atau merasa perhatian orang tua lebih banyak tersita untuk saudaranya. Jelaskan kondisi saudaranya dengan bahasa yang sesuai usia, libatkan mereka dalam kegiatan bersama, dan sediakan waktu khusus untuk masing-masing anak. Saudara perempuan yang sudah dewasa dapat berkonsultasi dengan konselor genetik tentang kemungkinan menjadi pembawa.'),
  p('Terakhir, lihatlah anak sebagai pribadi yang utuh. Anak dengan Duchenne tetap punya minat, cita-cita, dan humor sendiri. Banyak dari mereka menekuni hobi seperti menggambar, membaca, musik, permainan strategi, atau teknologi. Mendukung minat itu sejak kecil memberi anak rasa mampu dan bahagia, apa pun perubahan yang dialami tubuhnya.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(dFaq),
];

articles.push({
  slug: 'distrofi-otot-duchenne-pada-anak',
  titleTag: 'Distrofi Otot Duchenne pada Anak: Gejala dan Penanganan | YUKA',
  metaDesc: 'Distrofi otot Duchenne pada anak: penyebab gen DMD, gejala awal, perjalanan kondisi, diagnosis, penanganan oleh tim kesehatan, serta dukungan di sekolah dan keluarga.',
  keywords: 'distrofi otot duchenne pada anak, duchenne muscular dystrophy, DMD, distrofi otot, gen distrofin',
  ogTitle: 'Distrofi Otot Duchenne pada Anak',
  ogDesc: 'Panduan distrofi otot Duchenne untuk orang tua dan guru: gejala, diagnosis, penanganan, dan dukungan di sekolah.',
  h1: 'Distrofi Otot Duchenne pada Anak: Gejala, Diagnosis, Penanganan, dan Dukungan',
  crumb: 'Distrofi Otot Duchenne pada Anak',
  category: 'Kesehatan',
  datePublished: '2026-11-26T08:00:00+07:00', dateModified: '2026-11-26T08:00:00+07:00',
  dateDisplay: '26 November 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/duchenne-hero.webp`, w: 1200, h: 900,
    alt: 'Pertandingan bola basket kursi roda di gedung olahraga dengan tribun penonton penuh, para pemain berkursi roda bergerak di bawah ring',
    caption: 'Final bola basket kursi roda putra Asian Para Games 2018 di Gelora Bung Karno, Jakarta. Kursi roda bukan akhir dari aktivitas; bagi anak dengan distrofi otot Duchenne, alat bantu mobilitas membantu tetap ikut bersekolah, bermain, dan bepergian.',
    credit: CM(D_HERO, 'Phetoy6', 'CC0'),
  },
  bodyHtml: dBody.join('\n'), faq: dFaq,
  related: [
    { href: '/artikel/disabilitas-fisik', title: 'Disabilitas Fisik', desc: 'Pengertian, jenis, dan dukungan bagi anak.' },
    { href: '/artikel/latihan-fisioterapi-anak-di-rumah', title: 'Latihan Fisioterapi di Rumah', desc: 'Latihan sederhana dengan arahan terapis.' },
    { href: '/artikel/terapi-fisik-untuk-anak-hipotonia', title: 'Terapi Fisik untuk Anak Hipotonia', desc: 'Mengenal terapi untuk otot yang lemah.' },
  ],
  tags: ['DistrofiOtot', 'Duchenne', 'DisabilitasFisik'],
  sources: [
    { url: URL_NHS_MD, label: 'NHS: Muscular dystrophy (gejala, jenis, diagnosis, penanganan, dukungan)' },
    { url: URL_MP_DMD, label: 'MedlinePlus: Duchenne muscular dystrophy (gejala, pemeriksaan, penanganan, prognosis)' },
    { url: URL_MPG_DMD, label: 'MedlinePlus Genetics: Duchenne and Becker muscular dystrophy (gen DMD, frekuensi, pewarisan)' },
    { url: URL_CDC_MD, label: 'CDC: About Muscular Dystrophy' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum untuk orang tua dan pendidik, bukan pengganti pemeriksaan dokter. Diagnosis dan rencana penanganan ditetapkan oleh dokter dan tim yang memeriksa anak.',
});

// [ARTIKEL_BERIKUTNYA]

function prepare() {
  fs.mkdirSync(path.join(ROOT, IMG), { recursive: true });
  for (const [file, markup] of Object.entries(diagrams)) fs.writeFileSync(imgPath(file.replace(/\.webp$/, '.svg')), markup);
  console.log(`Wrote ${Object.keys(diagrams).length} SVG diagrams into ${IMG}/`);
}
async function raster(only) {
  const sharp = require('D:/Projects/Creativism App/node_modules/sharp');
  for (const file of Object.keys(diagrams)) {
    if (only && !file.includes(only)) continue;
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
  else if (process.argv.includes('--raster')) raster(process.argv[3]);
  else render(process.argv[2]);
}

module.exports = { articles, diagrams };

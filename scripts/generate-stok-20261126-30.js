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
const CM = (page, by, lic) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">${by}</a> / Wikimedia Commons, ${lic === 'PD' ? 'domain publik' : `<a href="${LIC[lic]}" target="_blank" rel="nofollow noopener">${lic}</a>`}.`;
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

// ---------------------------------------------------------------------------
// Artikel 2: sindrom Prader-Willi (27 Nov 2026)
// Keyword: "sindrom prader willi ciri dan penanganan" (tab Riset Keyword Batch 5, baris 36)
// ---------------------------------------------------------------------------
const URL_NHS_PWS = 'https://www.nhs.uk/conditions/prader-willi-syndrome/';
const URL_NHS_PWS_SYM = 'https://www.nhs.uk/conditions/prader-willi-syndrome/symptoms/';
const URL_NHS_PWS_DX = 'https://www.nhs.uk/conditions/prader-willi-syndrome/diagnosis/';
const URL_MP_PWS = 'https://medlineplus.gov/ency/article/001605.htm';
const URL_MPG_PWS = 'https://medlineplus.gov/genetics/condition/prader-willi-syndrome/';
const P_HERO = 'https://commons.wikimedia.org/wiki/File:Sebuah_Kios_Buah_dan_Sayur_di_Pasar_Angso_Duo_-_Kota_Jambi,_JA_(10_Mei_2023).jpg';
const P_MAKAN = 'https://commons.wikimedia.org/wiki/File:USAID_Legacy_Materal_Child_Health_(8313229620).jpg';
const P_TIMBANG = 'https://commons.wikimedia.org/wiki/File:Kegiatan_Posyandu_Desa_Kanoman.jpg';

const pSections = [
  ['pengertian', 'Apa itu sindrom Prader-Willi'],
  ['penyebab', 'Penyebab: kromosom 15'],
  ['ciri', 'Ciri dari bayi sampai remaja'],
  ['lapar', 'Rasa lapar yang terus-menerus'],
  ['diagnosis', 'Diagnosis'],
  ['penanganan', 'Penanganan dan perawatan sehari-hari'],
  ['sekolah', 'Belajar dan perilaku di sekolah'],
  ['keluarga', 'Dukungan untuk keluarga'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const pFaq = [
  { q: 'Apa itu sindrom Prader-Willi?', a: 'Sindrom Prader-Willi adalah kondisi genetik langka yang menurut NHS menimbulkan beragam gejala fisik, kesulitan belajar, dan tantangan perilaku. Ciri yang paling dikenal adalah rasa lapar berlebihan sejak masa kanak-kanak, otot lemah sejak bayi, tubuh pendek, dan keterlambatan perkembangan.' },
  { q: 'Apa ciri sindrom Prader-Willi pada bayi?', a: 'Pada bayi, ciri yang paling sering terlihat adalah tubuh lemas karena otot lemah (hipotonia), tangisan lemah, refleks lemah, dan kesulitan menyusu. NHS menyebut kesulitan menyusu dapat membuat berat badan bayi kurang sampai usia 1 tahun dan sebagian bayi memerlukan selang makan.' },
  { q: 'Kapan rasa lapar berlebihan mulai muncul?', a: 'Menurut NHS, antara usia 1 dan 4 tahun anak mulai menunjukkan minat yang besar pada makanan, meminta makanan tambahan, dan frustrasi bila tidak mendapatkannya. MedlinePlus Genetics menyebut rasa lapar ekstrem ini mulai muncul pada masa kanak-kanak dan dapat menyebabkan makan berlebihan kronis serta obesitas.' },
  { q: 'Apakah sindrom Prader-Willi diturunkan dari orang tua?', a: 'Sebagian besar kasus tidak diturunkan. MedlinePlus Genetics menjelaskan bahwa perubahan genetiknya terjadi secara acak saat pembentukan sel telur atau sperma atau pada awal perkembangan janin, sehingga biasanya tidak ada riwayat keluarga. NHS menyebut sangat jarang orang tua memiliki lebih dari satu anak dengan sindrom ini.' },
  { q: 'Seberapa sering sindrom Prader-Willi terjadi?', a: 'MedlinePlus Genetics memperkirakan sindrom Prader-Willi terjadi pada sekitar 1 dari 10.000 sampai 30.000 orang di seluruh dunia. Kondisi ini dapat terjadi pada anak laki-laki maupun perempuan dari semua latar belakang etnis.' },
  { q: 'Apakah sindrom Prader-Willi bisa disembuhkan?', a: 'NHS menyatakan belum ada obat yang menyembuhkan sindrom Prader-Willi, sehingga penanganan bertujuan mengelola gejala. Bagian terpenting adalah menjaga berat badan tetap normal melalui pengaturan makanan sejak awal. MedlinePlus juga menyebut terapi hormon pertumbuhan, terapi wicara, fisioterapi, terapi okupasi, dan konseling perilaku.' },
  { q: 'Mengapa makanan perlu dikunci atau disimpan jauh dari jangkauan anak?', a: 'Anak dengan sindrom Prader-Willi tidak dapat mengendalikan asupan makanannya sendiri, sehingga lingkunganlah yang perlu diatur. MedlinePlus menyarankan mengendalikan lingkungan anak agar tidak mudah mengakses makanan, dan meminta keluarga, tetangga, serta sekolah bekerja sama. Ini bukan hukuman, melainkan perlindungan dari risiko obesitas, tersedak, dan masalah lambung.' },
  { q: 'Apakah anak dengan sindrom Prader-Willi bisa bersekolah di sekolah reguler?', a: 'Bisa. NHS menyebut sebagian besar anak dengan sindrom Prader-Willi dapat bersekolah di sekolah umum dengan dukungan tambahan, walaupun sebagian pindah ke sekolah khusus di jenjang menengah. Sekolah perlu memahami aturan makanan anak dan menyediakan rutinitas yang jelas.' },
];

addDiagram(`${IMG}/prader-willi-tahapan.webp`, svg.flow('Ciri sindrom Prader-Willi menurut usia', 'Rangkuman dari NHS dan MedlinePlus; tiap anak bisa berbeda', [
  { h: 'Bayi baru lahir', d: 'Tubuh lemas (hipotonia), tangis lemah, sulit menyusu' },
  { h: 'Tahun pertama', d: 'Berat badan kurang; duduk sekitar usia 12 bulan' },
  { h: 'Usia 1 sampai 4', d: 'Minat besar pada makanan mulai muncul dan bertambah' },
  { h: 'Sekitar usia 2', d: 'Tubuh lebih pendek dari teman seusia mulai terlihat' },
  { h: 'Anak dan remaja', d: 'Lapar terus-menerus, risiko obesitas, pubertas terlambat' },
]));
addDiagram(`${IMG}/prader-willi-rumah.webp`, svg.cards('Mengatur lingkungan makan di rumah', 'Prinsip praktis berdasarkan anjuran NHS dan MedlinePlus', [
  { h: 'Makanan aman', items: ['Simpan makanan di tempat terkunci', 'Tidak ada camilan terbuka di meja', 'Sampah dapur tertutup'] },
  { h: 'Jadwal jelas', items: ['Jam makan tetap setiap hari', 'Menu diketahui sebelumnya', 'Porsi disiapkan orang dewasa'] },
  { h: 'Semua sepakat', items: ['Keluarga besar paham aturan', 'Sekolah dan tetangga dilibatkan', 'Hadiah tidak berupa makanan'] },
  { h: 'Tetap bergerak', items: ['Aktivitas fisik setiap hari', 'Fisioterapi bila dianjurkan', 'Jalan kaki bersama keluarga'] },
]));

const pBody = [
  p('<strong>Sindrom Prader-Willi</strong> adalah kondisi genetik langka yang menurut NHS menimbulkan beragam gejala fisik, kesulitan belajar, dan tantangan perilaku. Ciri yang paling dikenal adalah rasa lapar yang terus-menerus sejak masa kanak-kanak, sehingga anak bisa makan jauh lebih banyak dari kebutuhannya dan berat badannya naik dengan cepat. Sebelum itu, sejak lahir bayi biasanya tampak sangat lemas karena otot lemah. Belum ada obat yang menyembuhkannya, tetapi dengan pengaturan makanan yang ketat dan dukungan yang tepat, anak dapat tumbuh dengan kualitas hidup yang baik.'),
  p('Artikel ini membahas pengertian sindrom Prader-Willi, penyebab genetiknya, ciri dari bayi sampai remaja, rasa lapar berlebihan yang menjadi tantangan utama, cara diagnosis, penanganan dan perawatan sehari-hari, strategi di sekolah, serta dukungan bagi keluarga. Bila bayi Anda tampak sangat lemas, baca juga ' + a('terapi-fisik-untuk-anak-hipotonia', 'terapi fisik untuk anak hipotonia') + ' untuk memahami kondisi otot yang lemah.'),
  toc(pSections),

  '<h2 id="pengertian">Apa itu sindrom Prader-Willi</h2>',
  p('Menurut ' + ext(URL_NHS_PWS, 'NHS (layanan kesehatan nasional Inggris)') + ', sindrom Prader-Willi adalah kondisi genetik langka yang biasanya sudah terlihat tidak lama setelah lahir. ' + ext(URL_MPG_PWS, 'MedlinePlus Genetics dari Perpustakaan Kedokteran Nasional Amerika Serikat') + ' menggambarkannya sebagai kondisi genetik kompleks yang memengaruhi banyak bagian tubuh. Pada masa bayi, ciri utamanya adalah otot lemah, kesulitan makan, pertumbuhan yang kurang, dan perkembangan yang terlambat. Mulai masa kanak-kanak, anak mengalami rasa lapar ekstrem yang menyebabkan makan berlebihan kronis dan obesitas.'),
  p('MedlinePlus Genetics memperkirakan sindrom ini terjadi pada sekitar 1 dari 10.000 sampai 30.000 orang di seluruh dunia. NHS menegaskan bahwa anak laki-laki maupun perempuan dari semua latar belakang etnis dapat mengalaminya. Karena jarang, banyak orang tua di Indonesia baru mendengar nama sindrom ini saat anaknya diperiksa dokter, dan tidak sedikit yang sebelumnya mengira bayinya hanya kurang kuat menyusu.'),
  p('Pemahaman yang tepat sangat penting karena sindrom Prader-Willi sering disalahpahami. Rasa lapar pada anak dengan sindrom ini bukan soal kurang disiplin atau pola asuh yang salah. Rasa lapar itu berasal dari perubahan di otak yang mengatur nafsu makan. Ketika keluarga, guru, dan tetangga memahami hal ini, mereka lebih mudah bekerja sama mengatur lingkungan anak tanpa menyalahkan anak atau orang tuanya.'),

  '<h2 id="penyebab">Penyebab: kromosom 15</h2>',
  p('NHS menjelaskan bahwa sindrom Prader-Willi disebabkan hilangnya sebagian materi genetik pada sekelompok gen di kromosom nomor 15. Kondisi ini diduga memengaruhi bagian otak bernama hipotalamus, yang menghasilkan hormon serta mengatur pertumbuhan dan nafsu makan. Inilah yang mungkin menjelaskan dua ciri khasnya: pertumbuhan yang terhambat dan rasa lapar yang tidak kunjung hilang.'),
  p('MedlinePlus Genetics memberi penjelasan lebih rinci. Setiap orang mewarisi satu salinan kromosom 15 dari ayah dan satu dari ibu. Beberapa gen di wilayah tertentu kromosom 15 hanya aktif pada salinan dari ayah, sebuah proses yang disebut imprinting genomik. Sindrom Prader-Willi terjadi bila gen-gen pada salinan ayah tersebut tidak berfungsi. Ada beberapa cara hal ini terjadi:'),
  ul([
    '<strong>Delesi pada kromosom 15 dari ayah</strong>, yaitu sebagian kecil kromosom hilang. Menurut MedlinePlus Genetics, ini penyebab sekitar 70 persen kasus.',
    '<strong>Dua salinan kromosom 15 dari ibu</strong> dan tidak ada salinan dari ayah, disebut disomi uniparental maternal. Ini terjadi pada sekitar 25 persen kasus.',
    '<strong>Penyebab yang jarang</strong>, seperti penataan ulang kromosom (translokasi) atau perubahan lain yang mematikan gen pada salinan ayah.',
  ]),
  p('Kabar yang menenangkan bagi orang tua: MedlinePlus Genetics menyebut sebagian besar kasus tidak diturunkan. Perubahan genetiknya terjadi secara acak saat pembentukan sel telur atau sperma, atau pada awal perkembangan janin. NHS juga menyatakan penyebab genetiknya terjadi murni karena kebetulan dan sangat jarang orang tua memiliki lebih dari satu anak dengan sindrom ini. Diagnosis Prader-Willi bukan akibat kesalahan orang tua selama kehamilan.'),
  p('Karena hasil tes genetik dapat menjelaskan jenis penyebabnya, NHS menyebut hasil tersebut juga membantu keluarga memperkirakan kemungkinan memiliki anak lain dengan sindrom yang sama. Konseling genetik membantu orang tua memahami hasil tes ini. Bagi yang ingin memahami genetika kondisi perkembangan secara umum, artikel ' + a('penyebab-autisme-penelitian-genetik-terbaru', 'penelitian genetik pada kondisi perkembangan') + ' dapat menjadi bacaan pengantar.'),

  '<h2 id="ciri">Ciri dari bayi sampai remaja</h2>',
  p('Ciri sindrom Prader-Willi berubah seiring usia. NHS menjelaskan bahwa tubuh lemas karena otot lemah, yang secara medis disebut hipotonia, biasanya sudah terlihat tidak lama setelah lahir. Bayi dengan hipotonia dapat memiliki rentang gerak yang terbatas, tangisan lemah, refleks lemah, dan tidak dapat mengisap dengan baik. Akibatnya bayi kesulitan menyusu, berat badannya bisa kurang sampai usia 1 tahun, dan sebagian memerlukan selang makan.'),
  diag(`${IMG}/prader-willi-tahapan.webp`, 'Diagram alur ciri sindrom Prader-Willi menurut usia: bayi baru lahir, tahun pertama, usia 1 sampai 4, sekitar usia 2, serta anak dan remaja', 'Ciri sindrom Prader-Willi berubah seiring usia, dari sulit menyusu di masa bayi menjadi rasa lapar berlebihan di masa kanak-kanak.'),
  p('Perkembangan anak juga lebih lambat. NHS menyebut kebanyakan penyandang sindrom Prader-Willi memiliki kesulitan belajar ringan sampai sedang. Anak biasanya mulai duduk sekitar usia 12 bulan dan mulai berjalan sekitar usia 24 bulan. Banyak yang terlambat bicara dan kesulitan mengucapkan beberapa bunyi. Mereka umumnya kesulitan dengan ingatan jangka pendek, tetapi sering memiliki ingatan jangka panjang yang baik, dan cenderung pandai memecahkan teka-teki seperti mencari kata dan menyusun puzzle.'),
  p('Tubuh pendek adalah ciri lain. NHS menyebut anak dengan sindrom Prader-Willi biasanya jauh lebih pendek dari teman seusianya, dan hal ini biasanya sudah tampak saat usia 2 tahun. Kadar hormon pertumbuhan yang rendah ikut berperan, dan anak tidak mengalami lonjakan pertumbuhan yang biasa terjadi saat pubertas. Pubertas sendiri datang terlambat dan sering tidak lengkap.'),
  table('Ringkasan ciri sindrom Prader-Willi menurut NHS dan MedlinePlus', ['Bidang', 'Ciri yang sering ditemui', 'Catatan'], [
    ['Otot dan makan di masa bayi', 'Tubuh lemas, tangis lemah, sulit menyusu, berat badan kurang', 'Sebagian bayi butuh selang makan sementara'],
    ['Nafsu makan', 'Lapar terus-menerus mulai usia 1 sampai 4 tahun', 'Asupan makanan harus diatur oleh orang dewasa'],
    ['Pertumbuhan', 'Tubuh pendek, tangan dan kaki kecil', 'Biasanya terlihat sekitar usia 2 tahun'],
    ['Belajar', 'Kesulitan belajar ringan sampai sedang, ingatan jangka pendek lemah', 'Sering pandai menyusun puzzle'],
    ['Perilaku', 'Ledakan emosi, keras kepala, sulit menerima perubahan, menggaruk atau mencungkil kulit', 'Pemicu umum: perubahan mendadak, cemas soal makanan'],
    ['Kesehatan lain', 'Gangguan tidur dan henti napas saat tidur, skoliosis, masalah mata, gigi berlubang', 'Perlu pemeriksaan rutin'],
  ]),
  p('NHS juga mencatat ciri wajah yang sering terlihat, seperti mata berbentuk seperti buah almon, dahi yang menyempit di bagian pelipis, bibir atas yang tipis, serta rambut, kulit, dan mata yang lebih terang dari anggota keluarga lain. Ciri-ciri ini biasanya tampak saat atau tidak lama setelah lahir. Namun ciri wajah saja tidak cukup untuk menegakkan diagnosis.'),
  p('Perilaku juga menjadi bagian penting. NHS menyebut kebanyakan penyandang sindrom Prader-Willi mengalami fase ketika perilakunya menantang, misalnya berteriak, menangis, sulit menerima perubahan, atau menanyakan hal yang sama berulang kali. Banyak juga yang terus-menerus menggaruk atau mencungkil kulit sampai luka. Di sisi lain, NHS menekankan bahwa penyandang sindrom ini dikenal penyayang, baik hati, peduli, dan lucu. Pemicu perilaku sulit yang disebut NHS antara lain perubahan mendadak, frustrasi, kecemasan tentang makanan, merasa tertekan, kurangnya struktur, dan rangsangan yang terlalu banyak.'),

  '<h2 id="lapar">Rasa lapar yang terus-menerus</h2>',
  p('Rasa lapar berlebihan, yang secara medis disebut hiperfagia, adalah tantangan terbesar dalam sindrom Prader-Willi. NHS menjelaskan bahwa antara usia 1 dan 4 tahun anak mulai menunjukkan minat besar pada makanan, meminta makanan tambahan, dan menjadi frustrasi bila tidak mendapatkannya. Seseorang dengan sindrom ini bisa makan jauh lebih banyak dari orang lain dan tetap merasa lapar.'),
  p('Makanan bisa menjadi pemicu perilaku sulit. Menurut NHS, anak bisa marah untuk mendapatkan makanan, sangat tertarik pada gambar atau pembicaraan tentang makanan, menyembunyikan atau mengambil makanan, bahkan mengambil uang untuk membeli makanan. Sebagian memakan makanan beku, mentah, atau sisa makanan, dan mereka sering sangat ingat siapa yang pernah memberi makanan. Semua ini bukan tanda anak nakal, melainkan bagian dari kondisinya.'),
  p('Ada pula risiko kesehatan yang perlu diketahui semua orang dewasa di sekitar anak. NHS menyebut penyandang sindrom Prader-Willi dapat menelan jumlah makanan yang jauh lebih besar sebelum tubuhnya memuntahkannya, dan mereka kurang peka terhadap rasa sakit. Akibatnya risiko keracunan makanan, tersedak, dan robeknya lambung lebih tinggi. Muntah dan sakit perut adalah dua tanda paling umum robeknya lambung. Karena penyandang sindrom ini biasanya jarang muntah atau mengeluh sakit perut, NHS meminta gejala ini ditanggapi sangat serius dan segera menghubungi tim kesehatan.'),
  p('Hal lain yang penting: NHS menjelaskan bahwa penyandang sindrom Prader-Willi memiliki metabolisme yang lambat sehingga membutuhkan lebih sedikit makanan dan kalori dibanding orang lain. Otot yang lemah juga membuat mereka kurang aktif secara fisik. Kombinasi lapar terus-menerus dan kebutuhan kalori yang rendah inilah yang membuat berat badan cepat naik bila makanan tidak diatur. NHS juga menegaskan bahwa penyandang sindrom ini tidak selalu menjadi obesitas bila pola makan dan masalah makanannya dikendalikan.'),
  fig(`${IMG}/prader-willi-posyandu-makanan.webp`, 'Foto dokumentasi lama berwarna kecokelatan: seorang bidan menyiapkan makanan di meja, beberapa ibu memangku balita di bangku, poster Taman Gizi dan 4 Sehat 5 Sempurna di dinding', 'Demonstrasi menyiapkan makanan sehat oleh bidan di sebuah posyandu (foto dokumentasi lama). Bagi anak dengan sindrom Prader-Willi, NHS menganjurkan pola makan sehat dan seimbang sejak awal, tanpa makanan manis dan tinggi kalori.', CM(P_MAKAN, 'USAID Indonesia', 'PD')),

  '<h2 id="diagnosis">Diagnosis</h2>',
  p('Menurut ' + ext(URL_NHS_PWS_DX, 'halaman diagnosis NHS') + ', sindrom Prader-Willi biasanya dapat dipastikan melalui serangkaian tes genetik. Tes ini memeriksa kromosom dalam sampel darah anak untuk mencari perubahan genetik yang diketahui menyebabkan sindrom ini. NHS menyebut tes genetik dapat dianjurkan bila anak menunjukkan gejala sindrom Prader-Willi, dan bayi yang sangat lemas saat lahir juga dapat diperiksa. MedlinePlus menambahkan bahwa sindrom ini sering sudah dicurigai sejak lahir.'),
  p('NHS juga menjelaskan adanya daftar periksa gejala yang dipakai untuk menentukan anak mana yang perlu dites. Beberapa kriteria utamanya adalah tubuh lemas dan otot lemah sejak lahir, masalah makan dan pertumbuhan kurang di tahun pertama, berat badan naik cepat pada usia 1 sampai 6 tahun, ciri wajah khas, perkembangan seksual yang terlambat, serta keterlambatan perkembangan fisik atau kesulitan belajar. Daftar ini membantu dokter, tetapi diagnosis tetap ditegakkan dengan tes genetik.'),
  p('Di Indonesia, pemeriksaan biasanya dimulai dari dokter anak, lalu dirujuk ke dokter spesialis anak konsultan endokrinologi atau ke layanan genetika di rumah sakit rujukan. Mencatat riwayat menyusu, pola berat badan, dan tahapan perkembangan anak akan sangat membantu dokter. Bila anak Anda sedang menjalani pemeriksaan keterlambatan perkembangan, panduan ' + a('langkah-langkah-deteksi-dini-tumbuh-kembang-anak', 'langkah deteksi dini tumbuh kembang anak') + ' dapat membantu Anda menyiapkan catatan.'),

  '<h2 id="penanganan">Penanganan dan perawatan sehari-hari</h2>',
  p('NHS menyatakan belum ada obat yang menyembuhkan sindrom Prader-Willi, sehingga penanganan bertujuan mengelola gejala dan kesulitan yang menyertainya, termasuk nafsu makan berlebihan dan tantangan perilaku. Salah satu bagian terpenting dalam merawat penyandang sindrom ini adalah menjaga berat badan tetap normal. NHS menganjurkan pola makan sehat dan seimbang, menghindari makanan manis dan tinggi kalori sejak awal. Bila dibiarkan makan sebanyak yang diinginkan, berat badan anak akan naik ke tingkat yang berbahaya dengan cepat.'),
  p(ext(URL_MP_PWS, 'MedlinePlus') + ' menyebut obesitas sebagai ancaman terbesar bagi kesehatan penyandang sindrom Prader-Willi. Membatasi kalori dapat mengendalikan kenaikan berat badan, dan lingkungan anak juga perlu diatur agar anak tidak mudah mengakses makanan. MedlinePlus menekankan bahwa keluarga, tetangga, dan sekolah harus bekerja sama, karena anak akan mencoba mendapatkan makanan di mana pun memungkinkan. Diagram berikut merangkum prinsip praktis mengatur lingkungan makan di rumah.'),
  diag(`${IMG}/prader-willi-rumah.webp`, 'Diagram empat kartu cara mengatur lingkungan makan di rumah: makanan aman, jadwal jelas, semua sepakat, dan tetap bergerak', 'Prinsip mengatur lingkungan makan di rumah untuk anak dengan sindrom Prader-Willi. Detailnya disesuaikan dengan arahan dokter dan ahli gizi.'),
  p('Terapi hormon pertumbuhan adalah penanganan medis yang penting. MedlinePlus menyebut hormon pertumbuhan dapat membantu membangun kekuatan dan kelincahan, menambah tinggi badan, meningkatkan massa otot dan mengurangi lemak tubuh, meningkatkan stamina, serta meningkatkan kepadatan tulang. Namun terapi ini dapat memicu henti napas saat tidur, sehingga anak yang menjalaninya perlu dipantau. Kadar hormon seks yang rendah juga dapat ditangani dengan terapi pengganti hormon saat pubertas.'),
  p('Gerak tetap dianjurkan. MedlinePlus menyebut olahraga dapat membantu anak dengan sindrom Prader-Willi membangun otot, dan anak juga membutuhkan terapi wicara, fisioterapi, dan ' + a('terapi-okupasi', 'terapi okupasi') + ' sedini mungkin. Konseling kesehatan mental dan perilaku juga penting untuk membantu masalah seperti mencungkil kulit dan perilaku kompulsif, dan kadang diperlukan obat. Dengan pengaturan yang baik, NHS menyebut orang dewasa dengan sindrom ini dapat memiliki kualitas hidup yang baik dan kemungkinan harapan hidup yang normal bila berat badannya terjaga.'),
  p('NHS juga mengingatkan risiko tersedak yang lebih tinggi karena nafsu makan yang besar, sehingga pengasuh dianjurkan mempelajari pertolongan pertama saat seseorang tersedak. Bila tidak dikendalikan, makan berlebihan dan kenaikan berat badan dapat menyebabkan diabetes tipe 2, gagal jantung, dan kesulitan bernapas pada usia dewasa muda. Gangguan tidur juga sering terjadi, termasuk henti napas saat tidur yang memburuk seiring kenaikan berat badan.'),
  fig(`${IMG}/prader-willi-penimbangan.webp`, 'Kegiatan posyandu di teras: seorang kader berkerudung cokelat membungkuk mencatat saat seorang balita bertopi hijau berdiri di atas timbangan, beberapa ibu dan anak menunggu di sekitarnya', 'Penimbangan balita di sebuah posyandu desa. Pemantauan berat dan tinggi badan secara rutin membantu keluarga dan tenaga kesehatan melihat apakah pengaturan makan anak dengan sindrom Prader-Willi sudah berjalan baik.', CM(P_TIMBANG, 'Kanoman123', 'CC BY-SA 4.0')),

  '<h2 id="sekolah">Belajar dan perilaku di sekolah</h2>',
  p('NHS menyebut sebagian besar anak dengan sindrom Prader-Willi dapat bersekolah di sekolah umum dengan dukungan tambahan, walaupun sebagian pindah ke sekolah khusus di jenjang menengah. Pilihan antara ' + a('apa-perbedaan-sekolah-inklusi-dan-slb', 'sekolah inklusi dan SLB') + ' sebaiknya diputuskan berdasarkan kebutuhan anak dan kesiapan sekolah. Apa pun pilihannya, sekolah perlu memahami bahwa aturan makanan adalah bagian dari perawatan medis anak.'),
  p('Beberapa hal yang membantu di sekolah:'),
  ul([
    '<strong>Kesepakatan soal makanan.</strong> Guru tahu bahwa anak tidak boleh diberi camilan tambahan, termasuk saat ada perayaan kelas, dan hadiah tidak berupa makanan.',
    '<strong>Pengawasan saat istirahat.</strong> Kantin, tas teman, dan sisa makanan di kelas bisa menjadi godaan, sehingga anak perlu didampingi saat jam istirahat.',
    '<strong>Rutinitas yang jelas.</strong> Karena perubahan mendadak memicu cemas, jadwal harian sebaiknya disampaikan sejak pagi. ' + a('cara-membuat-jadwal-visual-untuk-anak-autis', 'Jadwal visual') + ' bisa sangat membantu.',
    '<strong>Pelajaran yang memanfaatkan kekuatan anak.</strong> Kegiatan seperti puzzle dan mencari kata, yang menurut NHS sering dikuasai anak, dapat dipakai sebagai jembatan belajar.',
    '<strong>Pengulangan untuk ingatan jangka pendek.</strong> Instruksi pendek, ditulis atau digambar, dan diulang.',
    '<strong>Aktivitas fisik setiap hari.</strong> Anak tetap ikut olahraga dengan penyesuaian, karena gerak membantu membangun otot.',
  ]),
  p('Saat anak menunjukkan perilaku sulit, cari pemicunya dulu. Apakah ada perubahan jadwal, rasa cemas menjelang jam makan, atau kelas terlalu ramai? Menurunkan suara, memberi waktu tenang, dan mengingatkan jadwal berikutnya sering lebih efektif daripada teguran keras. Prinsip menghadapi ledakan emosi pada anak dengan kebutuhan khusus juga dibahas di artikel ' + a('cara-mengatasi-tantrum-anak-autis', 'cara mengatasi tantrum') + '.'),

  '<h2 id="keluarga">Dukungan untuk keluarga</h2>',
  p('NHS mengakui bahwa membatasi asupan makanan bisa sangat menantang. Penyandang sindrom Prader-Willi bisa frustrasi saat menginginkan makanan tambahan, dan rasa laparnya bisa membuat mereka menyembunyikan atau mengambil makanan. Bagi orang tua, ini berarti kewaspadaan sepanjang hari. Wajar bila Anda merasa lelah. Membagi tugas dengan pasangan dan anggota keluarga lain, serta memastikan semua orang memegang aturan yang sama, akan sangat meringankan.'),
  p('Libatkan keluarga besar sejak awal. Di banyak keluarga Indonesia, kakek, nenek, atau tetangga terbiasa menunjukkan kasih sayang lewat makanan. Jelaskan dengan lembut bahwa memberi makanan tambahan justru membahayakan kesehatan anak, lalu tawarkan cara lain menunjukkan sayang, seperti mengajak bermain, membacakan cerita, atau berjalan-jalan. Artikel ' + a('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak ABK') + ' dan ' + a('menerima-diagnosis-anak-abk', 'menerima diagnosis anak ABK') + ' dapat membantu di masa awal setelah diagnosis.'),
  p('Perhatikan juga saudara kandung. Aturan makanan di rumah ikut mengubah kebiasaan mereka, misalnya camilan tidak lagi disimpan di meja. Jelaskan alasannya sesuai usia, beri mereka ruang untuk menikmati makanan tertentu di luar rumah, dan sediakan waktu khusus bersama mereka. Saudara yang memahami kondisi saudaranya biasanya menjadi sekutu yang luar biasa.'),
  p('Terakhir, lihat anak sebagai pribadi yang utuh. NHS menyebut banyak orang dewasa dengan sindrom Prader-Willi mengikuti kegiatan seperti kerja sukarela atau paruh waktu, walaupun kecil kemungkinan mereka dapat hidup sepenuhnya mandiri. Mengembangkan minat anak, seperti puzzle, menggambar, atau kegiatan yang ia sukai, sejak kecil memberi rasa mampu dan bahagia yang tidak bergantung pada makanan.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(pFaq),
];

articles.push({
  slug: 'sindrom-prader-willi',
  titleTag: 'Sindrom Prader-Willi: Ciri dan Penanganan pada Anak | YUKA',
  metaDesc: 'Sindrom Prader-Willi: kondisi genetik kromosom 15 dengan otot lemah sejak bayi dan rasa lapar terus-menerus. Ciri per usia, diagnosis, penanganan, dan dukungan di sekolah.',
  keywords: 'sindrom prader willi, prader willi syndrome, ciri sindrom prader willi, penanganan prader willi, hiperfagia anak',
  ogTitle: 'Sindrom Prader-Willi: Ciri dan Penanganan',
  ogDesc: 'Panduan sindrom Prader-Willi untuk orang tua dan guru: penyebab, ciri dari bayi sampai remaja, diagnosis, pengaturan makan, dan dukungan.',
  h1: 'Sindrom Prader-Willi: Ciri, Penyebab, dan Penanganan pada Anak',
  crumb: 'Sindrom Prader-Willi',
  category: 'Kesehatan',
  datePublished: '2026-11-27T08:00:00+07:00', dateModified: '2026-11-27T08:00:00+07:00',
  dateDisplay: '27 November 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/prader-willi-hero.webp`, w: 1200, h: 676,
    alt: 'Kios buah dan sayur di pasar tradisional beratap seng, peti kayu berisi pisang, cabai, dan sayuran hijau, sepeda motor terparkir di depan',
    caption: 'Kios buah dan sayur di Pasar Angso Duo, Kota Jambi. Bagi keluarga anak dengan sindrom Prader-Willi, memilih bahan makanan segar dan mengatur porsi menjadi bagian dari perawatan sehari-hari.',
    credit: CM(P_HERO, 'Firzafp', 'CC BY-SA 4.0'),
  },
  bodyHtml: pBody.join('\n'), faq: pFaq,
  related: [
    { href: '/artikel/terapi-fisik-untuk-anak-hipotonia', title: 'Terapi Fisik untuk Anak Hipotonia', desc: 'Mengenal terapi untuk otot yang lemah.' },
    { href: '/artikel/gangguan-makan-anak-abk', title: 'Gangguan Makan pada Anak ABK', desc: 'Masalah makan yang sering dialami anak berkebutuhan khusus.' },
    { href: '/artikel/disabilitas-intelektual-adalah', title: 'Disabilitas Intelektual Adalah', desc: 'Pengertian, tingkat, dan dukungan bagi anak.' },
  ],
  tags: ['PraderWilli', 'Genetik', 'KesehatanAnak'],
  sources: [
    { url: URL_NHS_PWS, label: 'NHS: Prader-Willi syndrome (gejala utama, penyebab, penanganan, masalah jangka panjang)' },
    { url: URL_NHS_PWS_SYM, label: 'NHS: Prader-Willi syndrome, symptoms (hipotonia, nafsu makan, perkembangan, perilaku)' },
    { url: URL_NHS_PWS_DX, label: 'NHS: Prader-Willi syndrome, diagnosis (tes genetik dan daftar periksa)' },
    { url: URL_MP_PWS, label: 'MedlinePlus: Prader-Willi syndrome (gejala, pemeriksaan, penanganan, hormon pertumbuhan)' },
    { url: URL_MPG_PWS, label: 'MedlinePlus Genetics: Prader-Willi syndrome (frekuensi, kromosom 15, pewarisan)' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum untuk orang tua dan pendidik, bukan pengganti pemeriksaan dokter. Diagnosis, pengaturan makan, dan terapi hormon ditetapkan oleh dokter dan tim yang memeriksa anak.',
});

// ---------------------------------------------------------------------------
// Artikel 3: apraksia bicara pada anak / childhood apraxia of speech (28 Nov 2026)
// Keyword: "childhood apraxia of speech cas ciri" (tab Riset Keyword Batch 5, baris 46)
// ---------------------------------------------------------------------------
const URL_NIDCD_AOS = 'https://www.nidcd.nih.gov/health/apraxia-speech';
const URL_ASHA_CAS = 'https://www.asha.org/public/speech/disorders/childhood-apraxia-of-speech/';
const A_HERO = 'https://commons.wikimedia.org/wiki/File:Ruang_Kelas_SMPN_1_Jakarta_2.jpg';
const A_BUKU = 'https://commons.wikimedia.org/wiki/File:Communication_book.jpg';
const A_DENGAR = 'https://commons.wikimedia.org/wiki/File:HearingExam.jpg';

const aSections = [
  ['pengertian', 'Apa itu apraksia bicara pada anak'],
  ['beda', 'Bedanya dengan speech delay dan disartria'],
  ['ciri', 'Ciri apraksia bicara yang perlu dikenali'],
  ['penyebab', 'Penyebab dan faktor yang terkait'],
  ['diagnosis', 'Bagaimana apraksia bicara didiagnosis'],
  ['terapi', 'Terapi wicara untuk apraksia'],
  ['komunikasi', 'Cara lain berkomunikasi selama terapi'],
  ['rumah', 'Peran orang tua dan guru'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const aFaq = [
  { q: 'Apa itu childhood apraxia of speech (CAS)?', a: 'Childhood apraxia of speech atau apraksia bicara pada anak adalah gangguan bunyi bicara yang membuat anak sulit mengucapkan apa yang ingin ia katakan dengan benar dan konsisten. Menurut NIDCD, otak anak tahu apa yang ingin dikatakan, tetapi tidak dapat merencanakan dan mengurutkan gerakan bunyi bicara dengan tepat.' },
  { q: 'Apa ciri utama apraksia bicara pada anak?', a: 'ASHA menyebut anak dengan apraksia mungkin tidak selalu mengucapkan kata dengan cara yang sama, memberi tekanan pada suku kata atau kata yang salah, mengubah atau mendistorsi bunyi bicara, dan mengucapkan kata pendek lebih jelas daripada kata panjang. NIDCD menambahkan anak tampak meraba-raba mencari bunyi yang tepat dan biasanya memahami bahasa jauh lebih baik daripada kemampuannya berbicara.' },
  { q: 'Apa bedanya apraksia bicara dengan speech delay?', a: 'Pada speech delay, anak mengikuti jalur perkembangan bicara yang biasa tetapi lebih lambat. NIDCD menegaskan apraksia bicara pada anak tidak sama dengan keterlambatan perkembangan bicara, karena masalahnya ada pada perencanaan gerakan bicara di otak. Kesalahan anak dengan apraksia juga cenderung tidak konsisten.' },
  { q: 'Apakah apraksia bicara bisa sembuh sendiri?', a: 'Tidak. NIDCD dan ASHA sama-sama menyebut anak dengan apraksia bicara tidak akan sembuh dengan sendirinya. Anak juga tidak mendapatkan dasar-dasar bicara hanya dengan berada di sekitar anak lain, misalnya di kelas. Karena itu terapi wicara diperlukan.' },
  { q: 'Apa penyebab apraksia bicara pada anak?', a: 'Penyebabnya sering tidak diketahui. NIDCD menyebut penyebab apraksia bicara pada anak belum dipahami dengan baik, tetapi temuan penelitian menunjukkan faktor genetik mungkin berperan. ASHA menyebut pada sebagian kasus penyebabnya adalah kerusakan atau perbedaan di otak, misalnya akibat kelainan genetik atau sindrom, stroke, atau cedera otak.' },
  { q: 'Seberapa sering anak dengan apraksia perlu terapi wicara?', a: 'Frekuensinya ditentukan oleh terapis wicara. NIDCD menyebut sesi terapi wicara yang sering, intensif, dan satu lawan satu diperlukan, dan anak dengan apraksia berat mungkin membutuhkan terapi intensif selama bertahun-tahun sambil tetap bersekolah. ASHA menyebut frekuensi terapi dapat dikurangi saat bicara anak membaik.' },
  { q: 'Apakah memakai AAC akan menghambat anak belajar bicara?', a: 'Tidak menurut ASHA dan NIDCD. ASHA menjelaskan bahwa AAC seperti bahasa isyarat, papan gambar, dan alat penghasil suara membantu anak menyampaikan keinginan dan kebutuhannya sambil terus berlatih bicara dengan terapis. NIDCD menambahkan metode komunikasi pendukung juga dapat membantu anak belajar membaca dan lebih memahami bahasa lisan.' },
  { q: 'Kapan orang tua perlu membawa anak ke terapis wicara?', a: 'ASHA menganjurkan berbicara dengan dokter anak dan menemui terapis wicara bila anak tidak selalu mengucapkan kata dengan cara yang sama, sering salah memberi tekanan pada suku kata, mengubah bunyi bicara, atau jauh lebih jelas mengucapkan kata pendek daripada kata panjang. Pemeriksaan pendengaran juga penting dilakukan.' },
];

addDiagram(`${IMG}/apraksia-beda.webp`, svg.grid('Apraksia bicara, speech delay, dan disartria', 'Rangkuman perbedaan menurut NIDCD dan ASHA', ['Kondisi', 'Inti masalah', 'Gambaran bicara'], [
  ['Apraksia bicara pada anak', 'Otak sulit merencanakan dan mengurutkan gerakan bicara', 'Kesalahan tidak konsisten, meraba-raba mencari bunyi'],
  ['Keterlambatan bicara', 'Perkembangan bicara biasa tetapi lebih lambat', 'Pola kesalahan sesuai tahap usia yang lebih muda'],
  ['Disartria', 'Otot rahang, lidah, atau bibir lemah atau lumpuh', 'Bicara pelan, cadel, atau kurang jelas secara konsisten'],
], [330, 400, 378]));
addDiagram(`${IMG}/apraksia-isyarat.webp`, svg.cards('Isyarat yang dipakai saat terapi', 'Strategi multisensori yang dicontohkan ASHA', [
  { h: 'Isyarat sentuhan', items: ['Jari di bibir saat bunyi p', 'Mengingatkan bibir menutup', 'Dilakukan berulang'] },
  { h: 'Isyarat visual', items: ['Melihat cermin saat berkata', 'Melihat gerak mulut terapis', 'Kartu gambar kata'] },
  { h: 'Latihan bertahap', items: ['Suku kata ke kata', 'Kata pendek ke kata panjang', 'Kata ke kalimat'] },
  { h: 'Latihan di rumah', items: ['Singkat dan menyenangkan', 'Istirahat saat anak lelah', 'Cerita ke terapis'] },
]));

const aBody = [
  p('<strong>Apraksia bicara pada anak</strong>, dalam bahasa Inggris disebut <em>childhood apraxia of speech</em> (CAS), adalah gangguan bunyi bicara yang membuat anak sulit mengucapkan apa yang ingin ia katakan dengan benar dan konsisten. Menurut NIDCD, otak anak tahu apa yang ingin dikatakan, tetapi tidak dapat merencanakan dan mengurutkan gerakan bunyi bicara dengan tepat. Masalahnya bukan pada otot yang lemah. Ciri yang paling khas adalah kesalahan bicara yang berubah-ubah, misalnya satu kata bisa diucapkan benar hari ini tetapi salah besok. Anak dengan apraksia tidak sembuh sendiri dan membutuhkan terapi wicara.'),
  p('Banyak orang tua awalnya mengira anaknya hanya terlambat bicara. Artikel ini membahas pengertian apraksia bicara pada anak, bedanya dengan speech delay dan disartria, ciri yang perlu dikenali, penyebab, cara diagnosis, terapi wicara, cara lain berkomunikasi selama terapi, dan peran orang tua serta guru. Bila Anda masih memahami dasar keterlambatan bicara, baca juga ' + a('speech-delay-adalah', 'pengertian speech delay') + '.'),
  toc(aSections),

  '<h2 id="pengertian">Apa itu apraksia bicara pada anak</h2>',
  p(ext(URL_NIDCD_AOS, 'NIDCD (Institut Nasional Ketulian dan Gangguan Komunikasi Lainnya, Amerika Serikat)') + ' menjelaskan bahwa apraksia bicara adalah gangguan neurologis yang memengaruhi jalur di otak yang terlibat dalam merencanakan urutan gerakan untuk berbicara. Saat seseorang berbicara, otak harus mengirim perintah yang sangat cepat dan tepat ke bibir, lidah, rahang, dan pita suara. Pada apraksia, perintah itu tidak tersusun dengan baik.'),
  p(ext(URL_ASHA_CAS, 'ASHA (Asosiasi Bicara, Bahasa, dan Pendengaran Amerika)') + ' memakai gambaran yang mudah dipahami orang tua: otak anak mengirim pesan ke mulut untuk bergerak dan menghasilkan bunyi, tetapi pada anak dengan apraksia pesan itu menjadi kacau di tengah jalan. Anak tahu apa yang ingin ia katakan, tetapi kesulitan mengucapkannya dengan jelas. Kondisi ini kadang juga disebut dispraksia verbal atau apraksia perkembangan.'),
  p('NIDCD membedakan dua jenis utama apraksia bicara. Apraksia yang didapat biasanya terjadi pada orang dewasa setelah stroke, cedera kepala, atau penyakit lain yang mengenai otak, dan menyebabkan hilangnya kemampuan bicara yang sebelumnya sudah ada. Apraksia bicara pada anak sudah ada sejak lahir. Artikel ini berfokus pada jenis kedua. NIDCD juga mencatat bahwa apraksia bicara pada anak tampaknya lebih banyak dialami anak laki-laki daripada perempuan.'),
  p('Tingkat keparahannya beragam. Menurut NIDCD, apraksia bisa sangat ringan sehingga hanya menyulitkan beberapa bunyi atau pengucapan kata yang bersuku kata banyak. Pada kasus yang paling berat, seseorang mungkin tidak dapat berkomunikasi secara efektif lewat bicara dan membutuhkan bantuan metode komunikasi alternatif. Karena itu dua anak dengan diagnosis yang sama bisa tampak sangat berbeda.'),

  '<h2 id="beda">Bedanya dengan speech delay dan disartria</h2>',
  p('Apraksia bicara sering tertukar dengan dua kondisi lain. Yang pertama adalah ' + a('speech-delay-adalah', 'keterlambatan bicara atau speech delay') + '. NIDCD menegaskan bahwa apraksia bicara pada anak tidak sama dengan keterlambatan perkembangan bicara. Pada speech delay, anak mengikuti jalur perkembangan bicara yang biasa, hanya saja lebih lambat dari umumnya. Pada apraksia, masalahnya ada pada perencanaan gerakan bicara, sehingga pola kesalahannya berbeda.'),
  p('Kondisi kedua adalah disartria. NIDCD menjelaskan bahwa apraksia tidak disebabkan oleh lemah atau lumpuhnya otot bicara, yaitu otot rahang, lidah, atau bibir. Lemah atau lumpuhnya otot bicara menyebabkan gangguan lain yang disebut disartria. Sebagian orang memiliki apraksia dan disartria sekaligus, sehingga diagnosisnya menjadi lebih sulit. Tabel visual berikut merangkum perbedaan ketiganya.'),
  diag(`${IMG}/apraksia-beda.webp`, 'Tabel visual perbedaan apraksia bicara pada anak, keterlambatan bicara, dan disartria berdasarkan inti masalah dan gambaran bicara', 'Perbedaan apraksia bicara, keterlambatan bicara, dan disartria. Hanya terapis wicara yang dapat memastikan kondisi mana yang dialami anak.'),
  p('Membedakan ketiganya penting karena pendekatan terapinya berbeda. Anak dengan speech delay sering berkembang baik dengan stimulasi bahasa yang kaya. Anak dengan apraksia membutuhkan latihan gerakan bicara yang sering dan berulang. Mengira apraksia sebagai speech delay biasa bisa membuat keluarga menunggu terlalu lama, padahal NIDCD dan ASHA sama-sama menyebut anak dengan apraksia tidak akan sembuh dengan sendirinya.'),

  '<h2 id="ciri">Ciri apraksia bicara yang perlu dikenali</h2>',
  p('ASHA menyebut anak dengan apraksia tidak selalu menunjukkan tanda yang sama. Anak bisa menunjukkan sebagian atau semua tanda berikut. Bila anak berbicara lebih dari satu bahasa, misalnya bahasa Indonesia dan bahasa daerah, tanda-tandanya akan muncul di semua bahasa. ASHA menganjurkan orang tua berbicara dengan dokter anak dan menemui terapis wicara bila anak:'),
  ul([
    'Tidak selalu mengucapkan kata dengan cara yang sama, atau dengan cara yang bisa Anda pahami.',
    'Memberi tekanan pada suku kata atau kata yang salah.',
    'Mendistorsi atau mengubah bunyi bicara.',
    'Mengucapkan kata pendek lebih jelas daripada kata panjang.',
  ]),
  p('NIDCD menjelaskan ciri-ciri tersebut lebih rinci. Bunyi, terutama bunyi vokal, sering terdistorsi karena anak tidak menempatkan lidah atau rahang tepat di posisinya. Kesalahannya tidak konsisten: anak bisa mengucapkan kata yang sulit dengan benar, lalu kesulitan saat mengulanginya. Anak juga tampak meraba-raba mencari bunyi atau kata yang tepat dan mungkin mencoba mengucapkan sebuah kata beberapa kali sebelum benar. Selain itu, irama dan intonasi bicaranya bisa tidak wajar, misalnya semua suku kata diberi tekanan yang sama, suku kata dipenggal, atau ada jeda di tempat yang tidak semestinya.'),
  table('Ciri apraksia bicara pada anak menurut NIDCD dan ASHA', ['Ciri', 'Contoh dalam keseharian', 'Sumber'], [
    ['Kesalahan tidak konsisten', 'Kata "bola" diucapkan benar pagi hari, lalu menjadi "pola" atau "bowa" sore harinya', 'NIDCD, ASHA'],
    ['Meraba-raba mencari bunyi', 'Mulut anak tampak bergerak mencoba posisi sebelum bunyi keluar', 'NIDCD'],
    ['Kata panjang lebih sulit', 'Kata "mama" jelas, tetapi kata "kupu-kupu" atau "sepeda" sulit', 'NIDCD, ASHA'],
    ['Irama dan tekanan tidak wajar', 'Setiap suku kata ditekan sama, jeda di tengah kata', 'NIDCD, ASHA'],
    ['Pemahaman lebih baik dari bicara', 'Anak mengerti perintah dan cerita, tetapi sulit menjawab dengan kata', 'NIDCD'],
  ]),
  p('Ada ciri penting lain yang sering membuat orang tua lega sekaligus bingung. NIDCD menyebut anak dengan apraksia umumnya memahami bahasa jauh lebih baik daripada kemampuannya menggunakan bahasa. Anak bisa mengikuti perintah, menunjuk gambar yang benar, dan menikmati cerita, tetapi kesulitan menjawab dengan kata-kata. Kesenjangan ini sering membuat anak frustrasi, sehingga ledakan emosi kadang muncul karena ia tidak bisa menyampaikan maksudnya.'),
  p('ASHA juga mencatat bahwa anak dengan apraksia bisa memiliki tantangan lain, seperti kesulitan keterampilan motorik halus, keterlambatan bahasa ekspresif, dan kesulitan membaca, mengeja, serta menulis. NIDCD menyebut sebagian anak juga memiliki masalah bicara lain, masalah bahasa ekspresif, atau masalah keterampilan motorik. Karena itu pengamatan guru di kelas sangat berharga, terutama saat anak mulai belajar ' + a('motorik-halus', 'keterampilan motorik halus') + ' dan membaca.'),

  '<h2 id="penyebab">Penyebab dan faktor yang terkait</h2>',
  p('Penyebab apraksia bicara pada anak sering tidak diketahui. NIDCD menyebut penyebabnya belum dipahami dengan baik, dan studi pencitraan otak belum menemukan bukti kerusakan atau perbedaan struktur otak pada anak dengan kondisi ini. Namun anak dengan apraksia sering memiliki anggota keluarga dengan riwayat gangguan komunikasi atau kesulitan belajar. Pengamatan ini dan temuan penelitian terbaru menunjukkan bahwa faktor genetik mungkin berperan.'),
  p('ASHA menyebut bahwa pada sebagian kasus, apraksia disebabkan kerusakan atau perbedaan di otak. Kerusakan tersebut dapat terjadi akibat kelainan genetik atau sindrom, stroke, atau cedera otak traumatis. Artinya, apraksia bisa muncul sendiri tanpa kondisi lain, atau menyertai kondisi lain yang memengaruhi perkembangan anak. Yang perlu ditegaskan, apraksia bukan akibat orang tua kurang mengajak anak bicara atau terlalu banyak memberi gawai.'),
  p('Penelitian tentang penyebab apraksia masih terus berjalan. NIDCD menyebut para peneliti sedang mencari penyebab apraksia bicara pada anak, termasuk kemungkinan kelainan di otak atau bagian lain sistem saraf dan faktor genetik yang mungkin berperan. Penelitian lain bertujuan menemukan kriteria dan teknik baru untuk mendiagnosis apraksia dan membedakannya dari gangguan komunikasi lain.'),

  '<h2 id="diagnosis">Bagaimana apraksia bicara didiagnosis</h2>',
  p('NIDCD menjelaskan bahwa terapis wicara memegang peran kunci dalam mendiagnosis dan menangani apraksia. Tidak ada satu gejala atau satu tes yang bisa memastikan apraksia, sehingga terapis biasanya mencari kumpulan beberapa gejala sekaligus. Menyingkirkan kondisi lain, seperti kelemahan otot atau masalah produksi bahasa, juga membantu proses diagnosis. Untuk apraksia pada anak, NIDCD menyebut orang tua dan tenaga profesional mungkin perlu mengamati bicara anak selama beberapa waktu.'),
  p('Dalam pemeriksaan formal, terapis dapat meminta anak mengulang kata tertentu beberapa kali, atau mengulang deretan kata yang makin panjang. Dalam bahasa Indonesia, contohnya seperti "makan", "makanan", "dimakan". ASHA menyebut terapis akan melihat cara anak menggunakan otot di sekitar mulut, naik turunnya suara saat berbicara, cara anak mengucapkan bunyi dalam suku kata, kata, dan percakapan, serta seberapa baik orang lain memahami bicara anak. Karena banyak anak dengan masalah bicara juga kesulitan memahami atau menggunakan bahasa, kemampuan bahasa anak juga diperiksa.'),
  p('ASHA juga menganjurkan orang tua berbicara dengan dokter anak untuk memeriksa kemungkinan masalah medis, dan memeriksakan pendengaran anak ke audiolog. Gangguan pendengaran dapat membuat anak sulit mendengar bunyi bicara dengan jelas sehingga perlu disingkirkan lebih dulu. Penjelasan jenis gangguan pendengaran ada di artikel ' + a('gangguan-pendengaran-konduktif-vs-sensorineural', 'gangguan pendengaran konduktif dan sensorineural') + '.'),
  fig(`${IMG}/apraksia-tes-pendengaran.webp`, 'Pemeriksa mengoperasikan alat audiometer di depan bilik kedap suara, seorang pria berheadphone duduk di dalam bilik di balik kaca', 'Pemeriksaan pendengaran dengan audiometri. ASHA menganjurkan pendengaran anak diperiksa oleh audiolog sebagai bagian dari evaluasi apraksia bicara.', CM(A_DENGAR, 'Flávia Costa', 'CC BY 3.0')),

  '<h2 id="terapi">Terapi wicara untuk apraksia</h2>',
  p('NIDCD menegaskan bahwa anak dengan apraksia tidak akan sembuh dari masalah ini dengan sendirinya. Mereka juga tidak mendapatkan dasar-dasar bicara hanya dengan berada di sekitar anak lain, misalnya di kelas. Karena itu ' + a('terapi-wicara', 'terapi wicara') + ' diperlukan. ASHA menambahkan bahwa mengatasi apraksia bisa membutuhkan banyak usaha, tetapi terapis wicara dapat mendampingi keluarga dengan rencana perawatan agar bicara anak membaik.'),
  p('Tujuan terapi menurut ASHA adalah membantu anak berbicara lebih jelas. Anak belajar menggerakkan mulut untuk menghasilkan bunyi dan kata, melakukan gerakan itu dengan cara yang benar pada waktu yang tepat, dan menggunakan strategi agar orang lain lebih mudah memahaminya. ASHA menyebut bicara anak seharusnya membaik dengan latihan, dan melibatkan semua indra saat belajar mengucapkan kata akan membantu.'),
  diag(`${IMG}/apraksia-isyarat.webp`, 'Diagram empat kartu isyarat terapi apraksia: isyarat sentuhan, isyarat visual, latihan bertahap, dan latihan di rumah', 'Contoh isyarat dan prinsip latihan yang sering dipakai terapis wicara untuk anak dengan apraksia. Rencana latihan tiap anak disusun oleh terapisnya.'),
  p('ASHA memberi dua contoh strategi. Isyarat sentuhan, misalnya meletakkan jari di bibir saat mengucapkan bunyi p sebagai pengingat untuk menutup bibir. Isyarat visual, misalnya melihat ke cermin saat mengucapkan kata. Terapis biasanya memulai dari suku kata dan kata yang sederhana, lalu perlahan meningkat ke kata yang lebih panjang dan kalimat. Teknik pemberian bantuan bertahap seperti ini dibahas juga di artikel ' + a('metode-prompt-dalam-terapi-wicara', 'metode prompt dalam terapi wicara') + '.'),
  p('Soal frekuensi, NIDCD menyebut sesi terapi wicara yang sering, intensif, dan satu lawan satu diperlukan, karena latihan berulang dan perhatian pribadi sulit diberikan dalam terapi kelompok. Anak dengan apraksia berat mungkin membutuhkan terapi intensif selama bertahun-tahun, berjalan bersamaan dengan sekolah biasa, untuk mencapai kemampuan bicara yang memadai. ASHA menyebut terapis yang menentukan seberapa sering anak perlu terapi dan apakah dilakukan sendiri atau berkelompok, dan frekuensinya dapat dikurangi saat bicara anak membaik. Pertimbangan jadwal terapi juga dibahas di ' + a('frekuensi-terapi-wicara-yang-ideal', 'frekuensi terapi wicara yang ideal') + '.'),
  p('NIDCD juga menyebut bahwa terapis menggunakan berbagai pendekatan, dan belum ada satu pendekatan yang terbukti paling efektif. Terapi disesuaikan dengan masing-masing anak dan juga menangani masalah bicara atau bahasa lain yang menyertai. Kemajuan tiap anak berbeda. Dukungan dan semangat dari keluarga serta latihan tambahan di rumah sangat penting.'),

  '<h2 id="komunikasi">Cara lain berkomunikasi selama terapi</h2>',
  p('Berbicara hanyalah salah satu cara berkomunikasi. ASHA menjelaskan bahwa anak dengan apraksia juga dapat menggunakan komunikasi augmentatif dan alternatif atau AAC, misalnya bahasa isyarat atau gerakan tubuh, papan gambar, alat penghasil suara, atau gabungan semuanya. Sistem AAC membantu anak menyampaikan keinginan dan kebutuhannya sambil terus berlatih bicara dengan terapis.'),
  p('NIDCD menyebut pada kasus berat, anak dengan apraksia mungkin perlu cara lain untuk mengekspresikan diri, seperti bahasa isyarat formal maupun informal, buku catatan berisi gambar atau tulisan yang bisa ditunjuk, atau perangkat elektronik seperti ponsel pintar dan tablet untuk menulis atau menghasilkan suara. NIDCD menambahkan bahwa metode komunikasi pendukung ini juga dapat membantu anak belajar membaca dan lebih memahami bahasa lisan.'),
  p('Banyak orang tua khawatir AAC akan membuat anak malas bicara. Penjelasan ASHA dan NIDCD justru menunjukkan sebaliknya: AAC dipakai berdampingan dengan terapi bicara, bukan menggantikannya. Anak yang bisa menyampaikan maksudnya cenderung lebih tenang dan lebih siap belajar. Pilihan alat dan cara memulainya dibahas di ' + a('augmentative-communication-untuk-anak-di-rumah', 'komunikasi augmentatif untuk anak di rumah') + ' dan ' + a('aplikasi-komunikasi-aac-terbaik-untuk-anak', 'aplikasi komunikasi AAC untuk anak') + '.'),
  fig(`${IMG}/apraksia-buku-komunikasi.webp`, 'Buku komunikasi terbuka berisi kotak-kotak simbol gambar makanan dan sayuran beserta katanya dalam bahasa Inggris', 'Contoh buku komunikasi berisi simbol gambar makanan. NIDCD menyebut buku berisi gambar atau tulisan yang bisa ditunjuk sebagai salah satu cara anak dengan apraksia berat menyampaikan maksudnya.', CM(A_BUKU, 'Poule', 'CC BY-SA 3.0')),

  '<h2 id="rumah">Peran orang tua dan guru</h2>',
  p('ASHA menekankan bahwa terapi apraksia membutuhkan waktu dan anak memerlukan dukungan keluarga. Beberapa cara yang dianjurkan ASHA adalah sering berbicara dengan anak dan mempraktikkan apa yang ia pelajari bersama terapis, membuat latihan semenyenangkan mungkin, beristirahat saat anak tampak kewalahan, menceritakan kepada terapis apa yang terjadi di rumah, dan membantu anak memakai strateginya saat berbicara dengan orang lain.'),
  p('Dalam keseharian, beberapa kebiasaan kecil sangat membantu. Beri anak waktu untuk menjawab tanpa memotong atau menyelesaikan kalimatnya. Duduk sejajar dan berhadapan agar anak bisa melihat gerakan mulut Anda. Pilih kata yang sering ia butuhkan, seperti minum, makan, mau, dan selesai, lalu latih kata itu dalam situasi nyata. Rayakan usaha, bukan hanya hasil yang sempurna. Gagasan latihan sehari-hari dapat diambil dari ' + a('cara-melatih-anak-speech-delay-bicara', 'cara melatih anak bicara') + ', dengan penyesuaian dari terapis.'),
  p('Guru juga berperan besar. Di kelas, anak dengan apraksia mungkin enggan menjawab pertanyaan lisan karena takut salah ucap atau ditertawakan teman. Guru dapat memberi pilihan menjawab dengan menunjuk, menulis, atau memakai kartu gambar, memberi waktu tunggu lebih lama, dan tidak meminta anak mengulang di depan kelas. Bekerja sama dengan terapis wicara anak membantu guru mengetahui strategi apa yang sedang dilatih, sehingga latihan di sekolah dan di rumah saling menguatkan.'),
  p('Perhatikan juga perasaan anak. Kesulitan menyampaikan maksud setiap hari bisa melelahkan secara emosional. Akui perasaannya, misalnya dengan berkata bahwa Anda tahu ia sedang berusaha keras. Dengan terapi yang tepat, latihan yang konsisten, dan lingkungan yang sabar, banyak anak dengan apraksia membuat kemajuan yang berarti.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(aFaq),
];

articles.push({
  slug: 'apraksia-bicara-pada-anak',
  titleTag: 'Apraksia Bicara pada Anak (CAS): Ciri dan Terapi | YUKA',
  metaDesc: 'Childhood apraxia of speech (CAS) atau apraksia bicara pada anak: ciri, bedanya dengan speech delay dan disartria, penyebab, diagnosis, terapi wicara, dan peran orang tua.',
  keywords: 'childhood apraxia of speech, apraksia bicara pada anak, CAS ciri, apraksia verbal, dispraksia verbal anak',
  ogTitle: 'Apraksia Bicara pada Anak (CAS)',
  ogDesc: 'Panduan childhood apraxia of speech untuk orang tua dan guru: ciri, perbedaan dengan speech delay, diagnosis, terapi, dan AAC.',
  h1: 'Apraksia Bicara pada Anak (Childhood Apraxia of Speech): Ciri, Diagnosis, dan Terapi',
  crumb: 'Apraksia Bicara pada Anak',
  category: 'Terapi',
  datePublished: '2026-11-28T08:00:00+07:00', dateModified: '2026-11-28T08:00:00+07:00',
  dateDisplay: '28 November 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/apraksia-hero.webp`, w: 1200, h: 844,
    alt: 'Ruang kelas kosong dengan papan tulis putih, meja guru bertaplak batik, deretan meja dan kursi siswa, serta lemari kayu di sudut',
    caption: 'Ruang kelas di SMP Negeri 1 Jakarta. Anak dengan apraksia bicara sering memahami pelajaran dengan baik, tetapi membutuhkan cara lain untuk menjawab dan waktu tunggu yang lebih panjang.',
    credit: CM(A_HERO, 'Adjiebrotot', 'CC BY-SA 3.0'),
  },
  bodyHtml: aBody.join('\n'), faq: aFaq,
  related: [
    { href: '/artikel/speech-delay-adalah', title: 'Speech Delay Adalah', desc: 'Pengertian keterlambatan bicara pada anak.' },
    { href: '/artikel/terapi-wicara', title: 'Terapi Wicara', desc: 'Apa yang dilakukan terapis wicara dan siapa yang membutuhkannya.' },
    { href: '/artikel/augmentative-communication-untuk-anak-di-rumah', title: 'Komunikasi Augmentatif di Rumah', desc: 'Memulai AAC bersama anak di rumah.' },
  ],
  tags: ['Apraksia', 'TerapiWicara', 'GangguanBicara'],
  sources: [
    { url: URL_NIDCD_AOS, label: 'NIDCD (NIH): Apraxia of Speech (jenis, penyebab, gejala, diagnosis, penanganan)' },
    { url: URL_ASHA_CAS, label: 'ASHA: Childhood Apraxia of Speech (tanda, penyebab, pemeriksaan, terapi, AAC, dukungan keluarga)' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum untuk orang tua dan pendidik, bukan pengganti pemeriksaan terapis wicara. Diagnosis apraksia bicara ditetapkan oleh terapis wicara setelah pemeriksaan langsung.',
});

// ---------------------------------------------------------------------------
// Artikel 4: amputasi kongenital pada anak (29 Nov 2026)
// Keyword: "anak amputasi kongenital" (tab Riset Keyword Batch 5, baris 27)
// ---------------------------------------------------------------------------
const URL_CDC_LRD = 'https://www.cdc.gov/birth-defects/about/limb-reduction-defects.html';
const URL_CDC_LRD_SM = 'https://archive.cdc.gov/www_cdc_gov/ncbddd/birthdefects/surveillancemanual/quick-reference-handbook/limb-reduction-defects-limb-deficiencies.html';
const URL_WHO_AT = 'https://www.who.int/news-room/fact-sheets/detail/assistive-technology';
const K_HERO = 'https://commons.wikimedia.org/wiki/File:A_worker_at_the_Cooperative_Orthotic_and_Prosthetic_Enterprise_(COPE)_(2)_(10664389234).jpg';
const K_BENGKEL = 'https://commons.wikimedia.org/wiki/File:Invalidis%C3%A4%C3%A4ti%C3%B6%27s_prosthesis_workshop_2007_(JOKAKAL3B-7750).tif';
const K_ATLETIK = 'https://commons.wikimedia.org/wiki/File:Gelora_Bung_Karno_-_2018_Asian_Para_Games.jpg';

const kSections = [
  ['pengertian', 'Apa itu amputasi kongenital'],
  ['jenis', 'Jenis-jenis kekurangan anggota gerak'],
  ['penyebab', 'Penyebab dan faktor risiko'],
  ['dampak', 'Dampak pada perkembangan anak'],
  ['penanganan', 'Penanganan: prostesis, ortosis, operasi, dan terapi'],
  ['sekolah', 'Mendukung anak di sekolah'],
  ['keluarga', 'Dukungan untuk keluarga'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const kFaq = [
  { q: 'Apa yang dimaksud amputasi kongenital pada anak?', a: 'Amputasi kongenital adalah istilah yang sering dipakai untuk anak yang lahir tanpa sebagian atau seluruh lengan atau tungkai. Dalam istilah medis, CDC menyebutnya limb reduction defect atau kekurangan anggota gerak, yaitu kondisi ketika lengan atau tungkai tidak terbentuk sempurna selama kehamilan. Berbeda dengan amputasi karena kecelakaan atau penyakit, kondisi ini sudah ada sejak lahir.' },
  { q: 'Seberapa sering bayi lahir dengan kekurangan anggota gerak?', a: 'Peneliti yang dikutip CDC memperkirakan sekitar 1 dari setiap 1.852 bayi di Amerika Serikat lahir dengan kekurangan anggota gerak. Angka untuk Indonesia belum tersedia di sumber resmi yang kami periksa.' },
  { q: 'Apa penyebab anak lahir tanpa tangan atau kaki?', a: 'Menurut CDC, penyebab pada sebagian besar kasus tidak diketahui. Beberapa faktor yang dapat meningkatkan risiko adalah paparan bahan kimia atau virus tertentu selama kehamilan, penggunaan obat tertentu selama kehamilan, dan merokok. Penelitian juga menunjukkan konsumsi multivitamin sebelum kehamilan dapat menurunkan risikonya.' },
  { q: 'Apakah anak dengan amputasi kongenital perlu memakai kaki atau tangan palsu?', a: 'Tidak selalu. CDC menyebut penanganan ditentukan oleh dokter anak berdasarkan usia anak serta luas dan jenis kekurangannya. Pilihannya meliputi prostesis (anggota gerak buatan), ortosis (bidai atau penyangga), operasi, dan rehabilitasi berupa fisioterapi atau terapi okupasi. Keputusan diambil bersama keluarga dan tim rehabilitasi.' },
  { q: 'Apakah anak dengan kekurangan anggota gerak bisa hidup normal?', a: 'CDC menyebut anak dengan kekurangan anggota gerak mungkin mengalami beberapa kesulitan dan keterbatasan sepanjang hidupnya, tetapi penanganan dan perawatan yang tepat mendukung mereka untuk hidup panjang, sehat, dan produktif.' },
  { q: 'Apakah kondisi ini bisa terdeteksi sebelum lahir?', a: 'Sebagian kekurangan anggota gerak dapat terlihat saat pemeriksaan USG kehamilan, tetapi tidak semua. Diskusikan hasil pemeriksaan kehamilan dengan dokter kandungan. Bila kondisi ini ditemukan, dokter dapat memeriksa kemungkinan kelainan lain yang menurut CDC kadang menyertai, seperti kelainan jantung.' },
  { q: 'Apa tantangan yang paling sering dihadapi anak?', a: 'CDC menyebut beberapa kemungkinan masalah: kesulitan perkembangan seperti keterampilan motorik, membutuhkan bantuan untuk aktivitas sehari-hari seperti merawat diri, keterbatasan pada gerakan, olahraga, atau aktivitas tertentu, serta kemungkinan masalah emosional dan sosial karena penampilan fisik. Besarnya tantangan bergantung pada letak dan ukuran kekurangannya.' },
  { q: 'Apakah anak dengan amputasi kongenital bisa bersekolah di sekolah reguler?', a: 'Bisa. Sebagian besar anak dengan kekurangan anggota gerak dapat belajar di sekolah reguler atau sekolah inklusi dengan penyesuaian seperti alat tulis yang dimodifikasi, waktu ekstra untuk tugas tertentu, akses fisik yang memadai, dan dukungan dari guru untuk mencegah perundungan.' },
];

addDiagram(`${IMG}/amputasi-jenis.webp`, svg.grid('Jenis kekurangan anggota gerak', 'Pembagian dasar menurut panduan surveilans CDC', ['Jenis', 'Arti', 'Contoh'], [
  ['Transversal terminal', 'Bagian ujung anggota gerak tidak terbentuk sama sekali', 'Lengan berakhir di bawah siku tanpa tangan'],
  ['Transversal interkalari', 'Bagian tengah hilang, bagian ujung tetap ada', 'Tangan ada tetapi lengan bawah sangat pendek'],
  ['Longitudinal', 'Kekurangan sepanjang sumbu panjang anggota gerak', 'Tulang di sisi ibu jari atau kelingking tidak terbentuk'],
], [300, 420, 388]));
addDiagram(`${IMG}/amputasi-penanganan.webp`, svg.cards('Pilihan penanganan menurut CDC', 'Ditentukan dokter berdasarkan usia anak serta jenis dan luas kekurangan', [
  { h: 'Prostesis', items: ['Anggota gerak buatan', 'Disesuaikan saat anak tumbuh', 'Dilatih bersama terapis'] },
  { h: 'Ortosis', items: ['Bidai atau penyangga', 'Menopang dan menjaga posisi', 'Dipantau secara berkala'] },
  { h: 'Operasi', items: ['Pada sebagian anak', 'Memperbaiki fungsi', 'Diputuskan oleh dokter'] },
  { h: 'Rehabilitasi', items: ['Fisioterapi', 'Terapi okupasi', 'Latihan aktivitas harian'] },
]));

const kBody = [
  p('<strong>Amputasi kongenital pada anak</strong> adalah istilah yang sering dipakai untuk anak yang lahir tanpa sebagian atau seluruh lengan atau tungkai. Dalam istilah medis, CDC menyebutnya kekurangan anggota gerak (limb reduction defect), yaitu kondisi ketika lengan atau tungkai tidak terbentuk sempurna selama kehamilan. Peneliti yang dikutip CDC memperkirakan sekitar 1 dari 1.852 bayi di Amerika Serikat lahir dengan kondisi ini. Penyebabnya sering tidak diketahui. Dengan penanganan yang tepat, seperti prostesis, terapi, dan dukungan keluarga, anak dapat tumbuh aktif, bersekolah, dan menjalani hidup yang produktif.'),
  p('Kelahiran bayi dengan anggota gerak yang tidak lengkap sering membuat orang tua terkejut dan dipenuhi pertanyaan. Artikel ini membahas pengertian amputasi kongenital, jenis-jenis kekurangan anggota gerak, penyebab dan faktor risiko, dampaknya pada perkembangan anak, pilihan penanganan, dukungan di sekolah, dan dukungan bagi keluarga. Untuk gambaran yang lebih luas tentang kondisi yang memengaruhi gerak, baca juga ' + a('disabilitas-fisik', 'pengertian disabilitas fisik') + '.'),
  toc(kSections),

  '<h2 id="pengertian">Apa itu amputasi kongenital</h2>',
  p('Kata amputasi biasanya dikaitkan dengan tindakan memotong anggota tubuh karena kecelakaan atau penyakit. Pada amputasi kongenital, tidak ada tindakan seperti itu. Anak sudah lahir dengan anggota gerak yang tidak lengkap karena bagian tersebut tidak terbentuk sempurna saat janin berkembang di dalam kandungan. Karena itu tenaga kesehatan lebih sering memakai istilah kekurangan anggota gerak bawaan atau perbedaan anggota gerak.'),
  p(ext(URL_CDC_LRD, 'CDC (Pusat Pengendalian dan Pencegahan Penyakit Amerika Serikat)') + ' menjelaskan bahwa kekurangan anggota gerak terjadi ketika sebagian atau seluruh lengan atau tungkai tidak terbentuk sempurna. Disebut "pengurangan" karena anggota gerak lebih kecil dari ukuran normal atau tidak ada sama sekali. Kondisi ini dapat mengenai seluruh anggota gerak atau hanya sebagian, dan sebagian bayi mengalaminya pada lengan sekaligus tungkai.'),
  p('Peneliti yang dikutip CDC memperkirakan sekitar 1 dari setiap 1.852 bayi di Amerika Serikat lahir dengan kekurangan anggota gerak. Angka resmi untuk Indonesia belum tersedia di sumber yang kami periksa, tetapi angka tersebut menunjukkan bahwa kondisi ini tidak sangat langka. Di sekolah dengan ratusan siswa, bukan hal yang mustahil bila suatu saat ada satu atau dua anak dengan kondisi ini.'),
  p('Penting dipahami bahwa kekurangan anggota gerak berbeda pada setiap anak. Seorang anak mungkin hanya tidak memiliki satu jari, sementara anak lain tidak memiliki tangan atau tungkai bawah. Tingkat dukungan yang dibutuhkan pun sangat beragam. Karena itu pembahasan di artikel ini adalah gambaran umum, dan rencana untuk tiap anak tetap disusun oleh dokter dan tim rehabilitasi yang memeriksanya.'),

  '<h2 id="jenis">Jenis-jenis kekurangan anggota gerak</h2>',
  p('Panduan surveilans cacat lahir dari ' + ext(URL_CDC_LRD_SM, 'CDC') + ' membagi kekurangan anggota gerak menjadi dua jenis dasar, yaitu longitudinal dan transversal. Kekurangan longitudinal terjadi sepanjang sumbu panjang anggota gerak, misalnya tulang di sisi ibu jari atau sisi kelingking tidak terbentuk. Kekurangan transversal terjadi melintang terhadap sumbu panjang anggota gerak, sehingga tampak seperti anggota gerak berhenti pada titik tertentu.'),
  p('Kekurangan transversal sendiri dibagi dua. Jenis terminal, ketika bagian ujung anggota gerak tidak ada sama sekali, dan menurut panduan CDC jenis ini lebih sering ditemukan. Jenis interkalari, ketika sebagian anggota gerak hilang tetapi bagian ujungnya tetap ada walaupun bentuknya bisa tidak biasa. Panduan CDC menekankan bahwa pengelompokan jenis ini penting karena tiap jenis cenderung memiliki penyebab dan proses terjadinya yang berbeda.'),
  diag(`${IMG}/amputasi-jenis.webp`, 'Tabel visual tiga jenis kekurangan anggota gerak: transversal terminal, transversal interkalari, dan longitudinal beserta arti dan contohnya', 'Pembagian dasar kekurangan anggota gerak menurut panduan surveilans CDC. Dokter akan menjelaskan jenis yang dialami anak setelah pemeriksaan.'),
  p('Bagi orang tua, istilah-istilah ini mungkin terdengar rumit. Yang terpenting adalah memahami bagian mana yang tidak terbentuk dan bagaimana hal itu memengaruhi fungsi anak. Dua anak dengan jenis yang sama bisa memiliki kebutuhan yang sangat berbeda, tergantung letak dan ukuran kekurangannya. Jangan ragu meminta dokter menggambar atau menjelaskan ulang dengan bahasa sederhana.'),

  '<h2 id="penyebab">Penyebab dan faktor risiko</h2>',
  p('CDC menyatakan bahwa penyebab kekurangan anggota gerak pada sebagian besar kasus tidak diketahui. Peran faktor genetik dan faktor lain masih perlu diteliti lebih lanjut. Meski begitu, CDC menyebut beberapa faktor yang diketahui dapat meningkatkan risiko bayi lahir dengan kekurangan anggota gerak:'),
  ul([
    'Paparan bahan kimia atau virus tertentu selama kehamilan.',
    'Penggunaan obat-obatan tertentu selama kehamilan.',
    'Merokok.',
  ]),
  p('CDC juga mencatat bahwa penelitian menunjukkan konsumsi multivitamin sebelum kehamilan dapat menurunkan risiko bayi lahir dengan kekurangan anggota gerak. Ini salah satu alasan pemeriksaan dan persiapan sebelum kehamilan dianjurkan, termasuk berkonsultasi dengan dokter sebelum minum obat apa pun saat hamil atau merencanakan kehamilan.'),
  p('Namun penting bagi orang tua yang anaknya sudah lahir dengan kondisi ini untuk tidak menyalahkan diri sendiri. Karena penyebab pada sebagian besar kasus tidak diketahui, kebanyakan orang tua tidak melakukan kesalahan apa pun. Pertanyaan "apa yang salah dengan kehamilan saya" adalah hal yang wajar, tetapi energi keluarga akan lebih bermanfaat bila diarahkan untuk mendukung tumbuh kembang anak.'),
  p('CDC juga menyebut bahwa beberapa bentuk kekurangan anggota gerak dapat berkaitan dengan cacat lahir lain, seperti kelainan jantung, omfalokel, dan gastroskisis. Karena itu dokter biasanya memeriksa bayi secara menyeluruh, bukan hanya anggota geraknya. Bila Anda ingin memahami proses penerimaan setelah diagnosis, artikel ' + a('menerima-diagnosis-anak-abk', 'menerima diagnosis anak ABK') + ' membahas tahap-tahap yang sering dialami orang tua.'),

  '<h2 id="dampak">Dampak pada perkembangan anak</h2>',
  p('CDC menjelaskan bahwa bayi dan anak dengan kekurangan anggota gerak mungkin menghadapi berbagai masalah, dan seberapa besar tantangannya bergantung pada letak dan ukuran kekurangannya. Beberapa kemungkinan masalah yang disebut CDC adalah:'),
  table('Kemungkinan tantangan menurut CDC dan contoh dukungannya', ['Tantangan', 'Contoh dalam keseharian', 'Dukungan yang dapat membantu'], [
    ['Perkembangan motorik', 'Terlambat merangkak, berdiri, atau berjalan; kesulitan memegang benda', 'Fisioterapi dan terapi okupasi sejak dini'],
    ['Aktivitas sehari-hari', 'Butuh bantuan makan, berpakaian, atau mandi', 'Latihan kemandirian dan alat bantu yang dimodifikasi'],
    ['Gerakan, olahraga, dan aktivitas tertentu', 'Sulit ikut permainan atau olahraga tertentu', 'Aktivitas yang disesuaikan, prostesis bila cocok'],
    ['Emosional dan sosial', 'Rasa minder, pertanyaan atau ejekan teman', 'Pendampingan, pencegahan perundungan, dukungan psikolog'],
  ]),
  p('Banyak anak dengan kekurangan anggota gerak sangat pandai menemukan cara mereka sendiri untuk melakukan sesuatu. Anak yang lahir tanpa satu tangan, misalnya, sering belajar memakai tangan yang lain, lengan, atau bahkan kakinya untuk memegang benda. Orang tua dan terapis sebaiknya memberi ruang bagi anak untuk bereksperimen, sambil memastikan posisi tubuhnya tetap aman dan tidak menimbulkan nyeri jangka panjang.'),
  p('Perkembangan motorik tetap perlu dipantau. Panduan umum tahapan motorik di artikel ' + a('tanda-keterlambatan-motorik-kasar', 'tanda keterlambatan motorik kasar') + ' dan ' + a('motorik-halus', 'perkembangan motorik halus') + ' bisa menjadi pembanding, dengan catatan bahwa anak dengan kekurangan anggota gerak mungkin mencapai tahapan dengan cara yang berbeda. Yang terpenting adalah kemajuan anak dari waktu ke waktu dan kemampuannya ikut serta dalam kegiatan sehari-hari.'),
  p('Sisi emosional dan sosial sering menjadi tantangan yang lebih besar daripada sisi fisik, terutama saat anak mulai bersekolah. CDC menyebut kemungkinan masalah emosional dan sosial karena penampilan fisik. Membantu anak menyiapkan jawaban sederhana saat ditanya teman, misalnya "Aku memang lahir begini, dan aku tetap bisa main", dapat membuatnya lebih percaya diri.'),
  fig(`${IMG}/amputasi-bengkel-1946.webp`, 'Foto hitam putih bengkel prostetik lama: beberapa kaki palsu berdiri berjajar di atas panggung kayu, perkakas tergantung di dinding papan', 'Deretan kaki palsu di bengkel prostetik Invalidisäätiö, Finlandia, pada tahun 1946. Teknologi prostesis sudah berkembang jauh sejak itu, dan kini prostesis anak dibuat dan disesuaikan mengikuti pertumbuhannya.', CM(K_BENGKEL, 'Invalidisäätiö / Finnish Heritage Agency', 'CC BY 4.0')),

  '<h2 id="penanganan">Penanganan: prostesis, ortosis, operasi, dan terapi</h2>',
  p('Menurut CDC, penanganan kekurangan anggota gerak ditentukan oleh dokter anak dan bergantung pada usia anak serta luas dan jenis kekurangannya. Tujuan penanganan adalah memberi anak anggota gerak yang berfungsi baik dan berpenampilan wajar. Penanganan bisa berbeda untuk setiap anak. CDC menyebut beberapa pilihan berikut.'),
  diag(`${IMG}/amputasi-penanganan.webp`, 'Diagram empat kartu pilihan penanganan kekurangan anggota gerak menurut CDC: prostesis, ortosis, operasi, dan rehabilitasi', 'Pilihan penanganan kekurangan anggota gerak menurut CDC. Kombinasi yang tepat ditentukan dokter bersama keluarga.'),
  p('<strong>Prostesis</strong> adalah anggota gerak buatan, misalnya kaki atau tangan palsu. Karena anak terus tumbuh, prostesis anak perlu diperiksa dan disesuaikan secara berkala. Anak juga perlu dilatih memakainya, biasanya oleh fisioterapis atau terapis okupasi. Tidak semua anak memerlukan atau menginginkan prostesis. Sebagian anak, terutama dengan kekurangan pada lengan, merasa lebih leluasa tanpa prostesis untuk aktivitas tertentu. Keputusan ini sebaiknya melibatkan anak sesuai usianya.'),
  p('<strong>Ortosis</strong> adalah bidai atau penyangga yang membantu menopang bagian tubuh, menjaga posisi, atau membantu fungsi. <strong>Operasi</strong> dilakukan pada sebagian anak untuk memperbaiki fungsi, sesuai pertimbangan dokter. <strong>Rehabilitasi</strong> berupa fisioterapi dan ' + a('terapi-okupasi', 'terapi okupasi') + ' membantu anak membangun kekuatan, keseimbangan, dan keterampilan sehari-hari. Latihan sederhana yang dapat dilanjutkan di rumah dibahas di ' + a('latihan-fisioterapi-anak-di-rumah', 'latihan fisioterapi anak di rumah') + ', tentu dengan arahan terapis.'),
  p('Akses ke alat bantu masih menjadi tantangan di banyak negara. ' + ext(URL_WHO_AT, 'WHO (Organisasi Kesehatan Dunia)') + ' menyebut produk bantu seperti anggota gerak prostetik dan kursi roda membantu menjaga atau meningkatkan fungsi seseorang dalam bergerak dan merawat diri, sehingga mendukung kesehatan, kesejahteraan, dan partisipasinya. WHO juga mencatat bahwa di banyak negara, sebagian besar orang yang membutuhkan teknologi bantu belum memiliki aksesnya. Di Indonesia, keluarga dapat menanyakan layanan rehabilitasi medik di rumah sakit, program bantuan alat dari pemerintah daerah, atau lembaga sosial. Informasi administrasi seperti ' + a('kartu-disabilitas', 'kartu disabilitas') + ' dapat membantu proses ini.'),
  p('CDC menutup penjelasannya dengan pesan yang patut diingat keluarga: bayi dan anak dengan kekurangan anggota gerak mungkin mengalami beberapa kesulitan dan keterbatasan sepanjang hidupnya, tetapi penanganan dan perawatan yang tepat mendukung mereka untuk hidup panjang, sehat, dan produktif.'),
  fig(`${IMG}/amputasi-para-atletik.webp`, 'Stadion Utama Gelora Bung Karno saat nomor atletik Asian Para Games 2018, lintasan merah dan lapangan hijau dengan tribun berbendera negara peserta', 'Nomor atletik Asian Para Games 2018 di Stadion Utama Gelora Bung Karno, Jakarta. Para atlet dengan berbagai jenis disabilitas fisik, termasuk perbedaan anggota gerak, berlaga di ajang ini.', CM(K_ATLETIK, 'Griff88', 'CC BY-SA 4.0')),

  '<h2 id="sekolah">Mendukung anak di sekolah</h2>',
  p('Sebagian besar anak dengan kekurangan anggota gerak dapat belajar di sekolah reguler atau sekolah inklusi. Hak anak untuk mendapatkan pendidikan yang setara dibahas di artikel ' + a('apa-saja-hak-anak-berkebutuhan-khusus', 'hak anak berkebutuhan khusus') + '. Penyesuaian yang dibutuhkan biasanya sederhana, tetapi berdampak besar:'),
  ul([
    '<strong>Alat tulis dan peralatan yang dimodifikasi.</strong> Pegangan pensil yang lebih tebal, gunting khusus, atau penahan kertas untuk anak yang menulis dengan satu tangan.',
    '<strong>Waktu ekstra.</strong> Untuk tugas menulis, praktikum, atau berganti pakaian sebelum pelajaran olahraga.',
    '<strong>Akses fisik.</strong> Jalur yang aman untuk anak dengan prostesis kaki, kursi roda, atau kruk, termasuk toilet yang mudah dijangkau.',
    '<strong>Olahraga yang disesuaikan.</strong> Anak tetap ikut pelajaran jasmani dengan aturan atau peran yang disesuaikan, bukan sekadar menonton.',
    '<strong>Rencana bila prostesis bermasalah.</strong> Guru tahu apa yang perlu dilakukan bila prostesis lepas, lecet, atau terasa sakit.',
  ]),
  p('Perundungan adalah risiko nyata bagi anak dengan perbedaan fisik. Guru dapat mencegahnya dengan membicarakan keberagaman secara terbuka, misalnya mengajak anak-anak memahami bahwa setiap orang punya cara berbeda melakukan sesuatu. Bila anak bersedia, ia bisa menjelaskan sendiri kondisinya atau memperlihatkan prostesisnya kepada teman sekelas. Langkah pencegahan lebih lengkap ada di artikel ' + a('anak-abk-dan-bullying-cara-mencegah', 'anak ABK dan bullying') + '.'),
  p('Hindari dua sikap ekstrem: membebaskan anak dari semua tugas karena kasihan, atau memaksanya melakukan segala sesuatu persis seperti teman-temannya. Tanyakan kepada anak dan orang tuanya apa yang sudah bisa dilakukan dan bagian mana yang butuh bantuan. Anak dengan kekurangan anggota gerak sering lebih mampu daripada yang dibayangkan orang dewasa di sekitarnya.'),

  '<h2 id="keluarga">Dukungan untuk keluarga</h2>',
  p('Kelahiran anak dengan kekurangan anggota gerak bisa memunculkan perasaan campur aduk, dari sedih, kaget, cemas, sampai bersalah. Semua perasaan itu wajar. Beri diri Anda waktu, cari informasi dari sumber yang terpercaya, dan bicarakan perasaan Anda dengan pasangan, keluarga, atau psikolog. Artikel ' + a('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak ABK') + ' berisi langkah praktis untuk menjaga kesehatan mental orang tua.'),
  p('Dorong kemandirian anak sejak dini. Biarkan anak mencoba makan, berpakaian, dan bermain dengan caranya sendiri, lalu bantu bila benar-benar dibutuhkan. Prinsip melatih kemandirian anak berkebutuhan khusus dibahas di ' + a('bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh', 'cara mengajarkan kemandirian kepada anak berkebutuhan khusus') + '. Rayakan setiap keberhasilan kecil, seperti berhasil menaiki tangga sendiri atau mengancingkan baju.'),
  p('Bangun juga rasa percaya diri anak tentang tubuhnya. Gunakan kata-kata yang netral saat membicarakan kondisinya, perkenalkan anak pada tokoh atau atlet dengan perbedaan anggota gerak, dan beri kesempatan untuk mencoba berbagai kegiatan. Banyak keluarga merasa terbantu setelah bertemu keluarga lain yang anaknya memiliki kondisi serupa.'),
  p('Terakhir, ingat bahwa anak Anda adalah anak yang utuh dengan minat, bakat, dan mimpinya sendiri. Kekurangan anggota gerak hanyalah salah satu bagian dari dirinya. Dengan penanganan yang tepat, lingkungan yang menerima, dan keluarga yang mendukung, anak dapat tumbuh menjadi pribadi yang percaya diri dan berdaya.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(kFaq),
];

articles.push({
  slug: 'amputasi-kongenital-pada-anak',
  titleTag: 'Amputasi Kongenital pada Anak: Penyebab dan Penanganan | YUKA',
  metaDesc: 'Amputasi kongenital pada anak atau kekurangan anggota gerak bawaan: pengertian, jenis, penyebab, dampak pada perkembangan, prostesis dan terapi, serta dukungan sekolah dan keluarga.',
  keywords: 'anak amputasi kongenital, amputasi kongenital, kekurangan anggota gerak bawaan, limb reduction defect, prostesis anak',
  ogTitle: 'Amputasi Kongenital pada Anak',
  ogDesc: 'Panduan amputasi kongenital atau kekurangan anggota gerak bawaan untuk orang tua dan guru: jenis, penyebab, penanganan, dan dukungan.',
  h1: 'Amputasi Kongenital pada Anak: Jenis, Penyebab, Penanganan, dan Dukungan',
  crumb: 'Amputasi Kongenital pada Anak',
  category: 'Kesehatan',
  datePublished: '2026-11-29T08:00:00+07:00', dateModified: '2026-11-29T08:00:00+07:00',
  dateDisplay: '29 November 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/amputasi-hero.webp`, w: 1200, h: 800,
    alt: 'Seorang teknisi berkemeja putih merakit bagian kaki palsu di meja kerja bengkel prostetik, kotak perkakas hijau dan komponen prostesis di sekitarnya',
    caption: 'Seorang teknisi di bengkel ortotik dan prostetik COPE, Laos, sedang membuat kaki palsu. Bagi anak dengan amputasi kongenital, prostesis dibuat sesuai ukuran tubuh dan perlu disesuaikan seiring pertumbuhannya.',
    credit: CM(K_HERO, 'Department of Foreign Affairs and Trade', 'CC BY 2.0'),
  },
  bodyHtml: kBody.join('\n'), faq: kFaq,
  related: [
    { href: '/artikel/disabilitas-fisik', title: 'Disabilitas Fisik', desc: 'Pengertian, jenis, dan dukungan bagi anak.' },
    { href: '/artikel/terapi-okupasi', title: 'Terapi Okupasi', desc: 'Membantu anak mandiri dalam kegiatan sehari-hari.' },
    { href: '/artikel/anak-abk-dan-bullying-cara-mencegah', title: 'Anak ABK dan Bullying', desc: 'Cara mencegah perundungan di sekolah.' },
  ],
  tags: ['AmputasiKongenital', 'DisabilitasFisik', 'Prostesis'],
  sources: [
    { url: URL_CDC_LRD, label: 'CDC: Limb Reduction Defects (pengertian, prevalensi, faktor risiko, penanganan)' },
    { url: URL_CDC_LRD_SM, label: 'CDC (arsip), Birth Defects Surveillance Quick Reference: Limb Reduction Defects/Limb Deficiencies (jenis longitudinal dan transversal)' },
    { url: URL_WHO_AT, label: 'WHO: Assistive technology (fact sheet)' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum untuk orang tua dan pendidik, bukan pengganti pemeriksaan dokter. Rencana penanganan ditetapkan oleh dokter dan tim rehabilitasi yang memeriksa anak.',
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

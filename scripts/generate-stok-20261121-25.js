'use strict';
/*
 * Generator artikel stok antrean 21 sampai 25 November 2026 (stok-artikel-des-2026, situs #12 Yuka).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc).
 * Tiap artikel ditambahkan satu per satu ke array `articles` dan diklaim di state slot sebelum ditulis.
 *
 * Foto: foto asli Pexels (Lisensi Pexels, bebas dipakai) dengan subjek dan lokasi Indonesia, pemotret
 * dikreditkan dan terlihat di caption, tanpa potret dekat satu anak di bawah judul diagnosis. Stok foto
 * Dokumentasi YUKA sudah habis terpakai, dan unduhan Wikimedia Commons sedang diblokir rate limit (HTTP 429)
 * saat batch ini disusun. Diagram SVG dari scripts/lib/diagram-svg.js (bukan AI). Nol gambar AI.
 *
 *   node scripts/generate-stok-20261121-25.js --prepare   # tulis SVG diagram
 *   node scripts/generate-stok-20261121-25.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-stok-20261121-25.js [slug]      # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const PEXELS_LICENSE = 'https://www.pexels.com/license/';
const PX = (page, by) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">${by}</a> / Pexels, <a href="${PEXELS_LICENSE}" target="_blank" rel="nofollow noopener">Lisensi Pexels</a>.`;
const fig = (file, w, h, alt, caption, credit) => `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${credit}</span></figcaption></figure>`;
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;
const ext = (url, text) => `<a href="${url}" target="_blank" rel="nofollow noopener">${text}</a>`;
const table = (caption, head, rows) => `<div class="table-wrap"><table><caption>${caption}</caption><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;
const a = (slug, text) => `<a href="/artikel/${slug}">${text}</a>`;
const faqBlock = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');

const diagrams = {};
const addDiagram = (file, markup) => { diagrams[file] = markup; };


const articles = [];

// ---------------------------------------------------------------------------
// Artikel 1: mutisme selektif pada anak (21 Nov 2026)
// Keyword: "selective mutism anak" (tab Riset Keyword Batch 4, baris 221)
// ---------------------------------------------------------------------------
const URL_NHS_SM = 'https://www.nhs.uk/mental-health/conditions/selective-mutism/';
const URL_ASHA_SM = 'https://www.asha.org/practice-portal/clinical-topics/selective-mutism/';
const M_HERO = 'https://www.pexels.com/photo/indonesian-classroom-scene-with-teacher-and-students-35548841/';
const M_KELAS = 'https://www.pexels.com/photo/indonesian-classroom-with-students-and-teacher-35548842/';
const M_MAIN = 'https://www.pexels.com/photo/indonesian-schoolchildren-playing-traditional-game-40653648/';

const mSections = [
  ['pengertian', 'Apa itu mutisme selektif'],
  ['tanda', 'Tanda yang perlu diperhatikan'],
  ['penyebab', 'Penyebab dan faktor yang terkait'],
  ['beda', 'Bedanya dengan pemalu, speech delay, dan autisme'],
  ['diagnosis', 'Bagaimana mutisme selektif didiagnosis'],
  ['penanganan', 'Pendekatan penanganan'],
  ['rumah', 'Yang bisa dilakukan orang tua di rumah'],
  ['sekolah', 'Peran guru dan sekolah'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const mFaq = [
  { q: 'Apa itu selective mutism pada anak?', a: 'Selective mutism atau mutisme selektif adalah gangguan kecemasan yang membuat anak tidak mampu berbicara di situasi sosial tertentu, misalnya di kelas atau di depan kerabat yang jarang ditemui, padahal di rumah bersama keluarga dekat anak bisa berbicara lancar. Anak tidak sedang memilih untuk diam. Rasa cemasnya memicu respons membeku saat ia diharapkan berbicara.' },
  { q: 'Apakah anak dengan mutisme selektif sengaja tidak mau bicara?', a: 'Tidak. NHS menegaskan bahwa mutisme selektif bukan pilihan. Anak benar-benar tidak mampu berbicara di situasi yang memicu kecemasannya. Karena itu memaksa, menyuap, atau memarahi anak agar bicara justru bisa memperberat kecemasan dan membuat anak semakin menghindari situasi tersebut.' },
  { q: 'Pada usia berapa mutisme selektif biasanya muncul?', a: 'NHS menyebut kondisi ini paling sering mulai pada usia 2 sampai 4 tahun, sedangkan rangkuman ASHA mencatat awal munculnya umumnya pada usia 3 sampai 6 tahun. Kondisi ini sering baru terlihat jelas ketika anak mulai masuk PAUD, TK, atau SD dan harus berinteraksi dengan orang di luar keluarga.' },
  { q: 'Apakah mutisme selektif bisa hilang sendiri seiring usia?', a: 'Orang tua dianjurkan tidak menerima anggapan bahwa anak akan sembuh sendiri atau hanya pemalu. Menurut NHS, sebagian besar anak dapat mengatasi mutisme selektif bila dikenali sejak dini dan ditangani dengan tepat. Semakin besar usia anak saat terdiagnosis, biasanya penanganannya membutuhkan waktu lebih lama.' },
  { q: 'Apa bedanya mutisme selektif dengan anak pemalu?', a: 'Anak pemalu biasanya tetap bisa berbicara setelah beberapa waktu menyesuaikan diri. Pada mutisme selektif, ketidakmampuan berbicara menetap di situasi tertentu, berlangsung paling sedikit satu bulan, dan mengganggu kegiatan anak, misalnya belajar di sekolah atau berteman. Tanda fisiknya juga khas, seperti tubuh membeku dan wajah tanpa ekspresi saat diajak bicara.' },
  { q: 'Apakah mutisme selektif sama dengan autisme?', a: 'Tidak sama. NHS menjelaskan bahwa mutisme selektif terpisah dari autisme, meskipun keduanya bisa terjadi bersamaan pada satu anak. Autisme melibatkan ciri lain seperti perilaku berulang, perbedaan sensorik, dan kesulitan komunikasi yang tidak terbatas pada situasi tertentu. Penilaian profesional dibutuhkan untuk membedakannya.' },
  { q: 'Ke mana orang tua sebaiknya membawa anak untuk diperiksa?', a: 'Langkah awal bisa ke dokter anak atau layanan tumbuh kembang untuk dirujuk ke psikolog anak, psikiater anak, atau terapis wicara. Penilaian yang baik biasanya melibatkan tim, karena perlu memastikan tidak ada gangguan bahasa, pendengaran, atau kondisi lain yang lebih menjelaskan gejala anak.' },
  { q: 'Apakah anak dengan mutisme selektif perlu obat?', a: 'Menurut NHS, obat umumnya hanya dipertimbangkan untuk anak yang lebih besar, remaja, dan orang dewasa yang kecemasannya sudah menimbulkan masalah lain seperti depresi, dan tidak boleh menggantikan pendekatan perilaku dan penyesuaian lingkungan. Keputusan pemberian obat sepenuhnya ada pada dokter yang memeriksa anak.' },
];

addDiagram(`${IMG}/mutisme-selektif-tangga.webp`, svg.flow('Tangga keberanian berbicara', 'Langkah bertahap dari komunikasi tanpa suara sampai bercakap dua arah (prinsip shaping)', [
  { h: 'Merasa aman', d: 'Anak santai di ruangan tanpa tuntutan untuk bicara.' },
  { h: 'Nonverbal', d: 'Mengangguk, menunjuk, melambai, atau memberi barang.' },
  { h: 'Bunyi dan tulisan', d: 'Suara hewan, bunyi mainan, menulis, atau rekaman suara.' },
  { h: 'Satu kata', d: 'Kata pendek kepada satu orang yang mulai ia percaya.' },
  { h: 'Kalimat', d: 'Kalimat pendek, lalu lebih panjang, dengan orang yang sama.' },
  { h: 'Banyak orang', d: 'Bercakap dua arah dengan lebih banyak orang dan tempat.' },
]));
addDiagram(`${IMG}/mutisme-selektif-lakukan.webp`, svg.grid('Lakukan dan hindari', 'Sikap orang dewasa yang membantu anak dengan mutisme selektif', ['Situasi', 'Lakukan', 'Hindari'], [
  ['Anak diam saat ditanya', 'Beri waktu, tawarkan pilihan nonverbal', 'Mengulang pertanyaan sambil mendesak'],
  ['Anak akhirnya bersuara', 'Tanggapi hangat tanpa kaget', 'Memuji heboh di depan orang banyak'],
  ['Acara keluarga', 'Tetap datang, atur agar lebih nyaman', 'Menghindari semua acara'],
  ['Di kelas', 'Sediakan cara lain untuk menjawab', 'Memaksa anak maju dan bicara'],
  ['Membahas kondisinya', 'Akui bahwa bicara terasa sulit', 'Melabeli anak sombong atau bandel'],
], [300, 404, 404]));

const mBody = [
  p('<strong>Selective mutism pada anak</strong> atau mutisme selektif adalah gangguan kecemasan yang membuat anak tidak mampu berbicara di situasi sosial tertentu, misalnya di kelas, padahal di rumah bersama keluarga dekat ia bisa berbicara lancar. Anak tidak sedang keras kepala atau sengaja diam. Ketika ia diharapkan berbicara, kecemasannya memicu respons membeku sehingga suaranya seolah terkunci.'),
  p('Banyak orang tua baru menyadari kondisi ini ketika guru PAUD atau TK bercerita bahwa anaknya tidak pernah bersuara di sekolah, sementara di rumah anak yang sama bernyanyi dan bercerita panjang. Perbedaan yang mencolok itu sering membuat orang dewasa bingung, lalu menganggap anak hanya pemalu atau manja. Artikel ini membahas pengertian mutisme selektif, tandanya, penyebab yang dikenal, cara membedakannya dari kondisi lain, proses diagnosis, pendekatan penanganan, serta peran orang tua dan guru. Untuk gambaran umum kecemasan pada anak, baca juga ' + a('gangguan-kecemasan-anak', 'gangguan kecemasan pada anak') + '.'),
  toc(mSections),

  '<h2 id="pengertian">Apa itu mutisme selektif</h2>',
  p('Dalam halaman informasinya, ' + ext(URL_NHS_SM, 'NHS (layanan kesehatan nasional Inggris)') + ' menjelaskan mutisme selektif sebagai gangguan kecemasan yang membuat seseorang tidak mampu berbicara di situasi sosial tertentu, misalnya dengan teman sekelas atau kerabat yang jarang ditemui. Kondisi ini biasanya mulai di masa kanak-kanak dan bisa berlanjut sampai dewasa bila tidak ditangani. NHS juga menyebut kondisi ini paling sering mulai pada usia 2 sampai 4 tahun dan dialami sekitar 1 dari 140 anak kecil.'),
  p('Asosiasi profesi terapis wicara Amerika Serikat, ' + ext(URL_ASHA_SM, 'ASHA') + ', menggolongkan mutisme selektif sebagai gangguan kecemasan yang kompleks dan memengaruhi penggunaan bahasa dalam interaksi sosial. ASHA merangkum bahwa sebagian besar perkiraan prevalensi berada di kisaran 0,2 sampai 1,6 persen, dengan awal munculnya umumnya pada usia 3 sampai 6 tahun. Diagnosis sering ditegakkan ketika anak mulai bersekolah, karena di situlah tuntutan berbicara dengan orang di luar keluarga pertama kali benar-benar terasa.'),
  p('Hal terpenting yang perlu dipahami orang tua dan guru adalah bahwa anak tidak memilih untuk diam. NHS menggambarkan bahwa antisipasi akan tuntutan berbicara memicu respons membeku, disertai rasa cemas dan panik. Lama kelamaan, anak bisa belajar menghindari situasi yang memicu perasaan itu. Karena itu fokus penanganan bukan pada membuat anak berbicara secepat mungkin, melainkan menurunkan kecemasan yang mengunci suaranya.'),
  fig(`${IMG}/mutisme-selektif-kelas.webp`, 1200, 800, 'Ruang kelas di Pandeglang, siswa berseragam batik biru duduk di bangku kayu dan kursi plastik hijau menghadap papan tulis, guru berdiri di depan kelas', 'Kegiatan belajar di sebuah sekolah di Pandeglang, Banten. Di kelas seperti ini, anak dengan mutisme selektif bisa mengikuti pelajaran dengan baik tetapi tetap tidak bersuara ketika ditanya. Guru dapat menyediakan cara menjawab tanpa suara, misalnya menunjuk atau mengangkat kartu jawaban.', PX(M_KELAS, 'el jusuf')),

  '<h2 id="tanda">Tanda yang perlu diperhatikan</h2>',
  p('Tanda utama mutisme selektif adalah perbedaan yang sangat mencolok antara cara anak berkomunikasi dengan orang yang berbeda. Di rumah anak bisa cerewet, tetapi di sekolah atau di depan tamu ia mendadak diam. NHS menyebut tanda yang sering terlihat, yaitu tubuh mendadak kaku dan wajah membeku tanpa ekspresi ketika anak diharapkan berbicara kepada orang yang belum akrab.'),
  p('Tanda lain yang dicatat NHS antara lain menghindari kontak mata, tampak gugup, canggung, kaku, tegang, atau malah terlihat cemberut dan keras kepala. Sebagian anak meluapkan emosi sepulang sekolah atau marah ketika ditanya-tanya orang tua. Anak yang lebih percaya diri mungkin masih mengangguk, menggeleng, atau memakai isyarat. Anak yang kondisinya lebih berat bisa menghindari semua bentuk komunikasi, termasuk tulisan dan isyarat, sementara anak lain mampu mengucapkan beberapa kata atau berbisik.'),
  p('Dampaknya pada kehidupan sekolah sering tidak terlihat oleh orang yang tidak memperhatikan dengan teliti. NHS mencatat sebagian anak menahan buang air kecil karena tidak berani meminta izin ke kamar mandi, bahkan menghindari makan dan minum di sekolah agar tidak perlu meninggalkan kelas. Kesulitan bertanya juga bisa membuat anak tertinggal di pelajaran tertentu. Tabel berikut membantu orang tua dan guru mengenali pola yang perlu dicatat.'),
  table('Contoh tanda mutisme selektif di rumah dan di sekolah', ['Situasi', 'Yang sering terlihat', 'Catatan untuk pengamat'], [
    ['Di rumah bersama keluarga inti', 'Berbicara lancar, bercerita, bernyanyi', 'Rekam contoh suara anak bila perlu untuk asesmen'],
    ['Di kelas saat ditanya guru', 'Diam, tubuh kaku, wajah tanpa ekspresi', 'Catat apakah anak memakai isyarat atau tulisan'],
    ['Bertemu kerabat yang jarang datang', 'Bersembunyi di balik orang tua, tidak menjawab salam', 'Catat berapa lama anak mulai rileks'],
    ['Kebutuhan pribadi di sekolah', 'Menahan ke kamar mandi, tidak makan atau minum', 'Sampaikan ke guru agar ada cara meminta izin tanpa bicara'],
    ['Sepulang sekolah', 'Meledak marah, menangis, atau sangat lelah', 'Bisa menjadi tanda anak menahan cemas seharian'],
  ]),

  '<h2 id="penyebab">Penyebab dan faktor yang terkait</h2>',
  p('Penyebab pasti mutisme selektif tidak selalu jelas. NHS menjelaskan bahwa para ahli memandangnya sebagai fobia terhadap berbicara kepada orang tertentu, dan kondisinya berkaitan erat dengan kecemasan. Anak dengan mutisme selektif sering mendapati kejadian sehari-hari sulit dihadapi. Kecemasan saat berpisah dengan orang tua, misalnya ketika diantar ke sekolah, bisa berpindah menjadi kecemasan terhadap orang dewasa yang berusaha menenangkannya.'),
  p('Beberapa faktor dapat membuat berbicara terasa lebih menegangkan. NHS menyebut masalah bicara, bahasa, atau pendengaran, serta kesulitan memproses rangsang sensorik seperti suara keras dan keramaian yang membuat anak seakan mati suri di tempat ramai. Bila anak Anda mudah kewalahan oleh suara dan keramaian, artikel ' + a('gangguan-pemrosesan-sensorik', 'gangguan pemrosesan sensorik') + ' bisa membantu memahami sisi tersebut.'),
  p('ASHA mencatat bahwa prevalensi mutisme selektif kemungkinan lebih tinggi pada anak imigran, anak dari kelompok bahasa minoritas, dan anak dengan keterlambatan bicara dan bahasa. Ini relevan di Indonesia, tempat banyak anak tumbuh dengan bahasa daerah di rumah lalu memakai bahasa Indonesia di sekolah. Namun kriteria diagnosis juga menegaskan bahwa diam karena belum menguasai bahasa yang dipakai di sekolah tidak termasuk mutisme selektif. Ada satu pola yang berbeda lagi: NHS menjelaskan bahwa diam akibat trauma biasanya muncul tiba-tiba di tempat yang sebelumnya tidak bermasalah. Bila itu yang terjadi, baca juga ' + a('ptsd-pada-anak-gejala-dan-penanganan', 'PTSD pada anak') + ' dan segera konsultasikan dengan profesional.'),

  '<h2 id="beda">Bedanya dengan pemalu, speech delay, dan autisme</h2>',
  p('Membedakan mutisme selektif dari kondisi lain penting karena penanganannya berbeda. Anak pemalu biasanya tetap bisa berbicara setelah beberapa waktu menyesuaikan diri, dan rasa malunya tidak sampai mengganggu belajar. Pada mutisme selektif, ketidakmampuan berbicara menetap di situasi tertentu dan berlangsung lama. Kriteria yang dikutip ASHA dari DSM-5-TR menyebut durasi paling sedikit satu bulan dan tidak terbatas pada bulan pertama sekolah, karena wajar bila anak masih diam di minggu-minggu awal masuk sekolah.'),
  p('Pada ' + a('speech-delay-adalah', 'speech delay') + ', kemampuan bicara anak memang tertinggal dari anak seusianya di semua tempat, termasuk di rumah. Pada mutisme selektif, kemampuan bicaranya bisa saja normal ketika ia merasa aman. Meski begitu, keduanya bisa terjadi bersamaan. NHS dan ASHA sama-sama menyebut bahwa sebagian anak dengan mutisme selektif juga punya kesulitan bicara atau bahasa, sehingga terapis wicara berperan penting dalam asesmen.'),
  p('Mutisme selektif juga terpisah dari ' + a('autisme-adalah', 'autisme') + ', walaupun keduanya bisa terjadi pada anak yang sama. Pada autisme, perbedaan komunikasi dan interaksi sosial terlihat di berbagai situasi dan disertai ciri lain seperti perilaku berulang dan perbedaan sensorik. Kriteria diagnosis mutisme selektif sendiri mensyaratkan bahwa gejalanya tidak semata-mata disebabkan oleh autisme atau gangguan komunikasi lain. Karena batasnya bisa tipis, penilaian sebaiknya dilakukan oleh tim profesional, bukan disimpulkan sendiri dari daftar ciri di internet.'),

  '<h2 id="diagnosis">Bagaimana mutisme selektif didiagnosis</h2>',
  p('NHS menganjurkan orang tua yang curiga anaknya mengalami mutisme selektif untuk meminta rujukan ke layanan spesialis, dan tidak menerima anggapan bahwa anak akan sembuh sendiri atau sekadar pemalu. Di Indonesia, langkah awalnya bisa melalui dokter anak, layanan tumbuh kembang, psikolog anak, atau terapis wicara. Bagi keluarga di Yogyakarta, daftar layanan bisa dilihat di artikel ' + a('klinik-tumbuh-kembang-anak-yogyakarta', 'klinik tumbuh kembang anak Yogyakarta') + '.'),
  p('Proses penilaian yang baik dimulai dari wawancara dengan orang tua, kadang tanpa kehadiran anak. Pemeriksa biasanya menanyakan riwayat kecemasan di keluarga, pemicu stres seperti perubahan rutinitas atau belajar bahasa kedua, perilaku anak di berbagai tempat, dan riwayat kesehatannya. NHS menekankan bahwa asesmen harus memberi ruang bagi komunikasi tanpa suara, misalnya melalui orang tua, tulisan, komputer, pengamatan saat bermain, atau rekaman video anak yang sedang berbicara di rumah.'),
  p('Kriteria yang dirangkum NHS dan ASHA mencakup empat hal utama. Pertama, anak konsisten tidak berbicara di situasi tertentu yang menuntut bicara, tetapi bisa berbicara di situasi lain. Kedua, kondisi itu mengganggu kegiatan sekolah atau sosialnya. Ketiga, berlangsung paling sedikit satu bulan, atau dua bulan di lingkungan baru menurut NHS. Keempat, tidak lebih tepat dijelaskan oleh kondisi lain, termasuk karena belum menguasai bahasa yang dipakai. Informasi lebih lanjut tentang proses pemeriksaan ada di artikel ' + a('asesmen-abk', 'asesmen anak berkebutuhan khusus') + ' dan ' + a('tes-psikolog-anak-bayar-berapa', 'tes psikolog anak') + '.'),
  p('Agar pertemuan pertama dengan profesional lebih bermanfaat, orang tua bisa menyiapkan beberapa bahan. Catat sejak kapan anak mulai diam di luar rumah, di tempat mana saja ia tidak berbicara, dan dengan siapa saja ia masih mau bersuara. Siapkan rekaman video singkat saat anak bercerita atau bermain di rumah, karena anak kemungkinan besar tidak akan berbicara di ruang praktik. Minta juga catatan dari guru tentang perilaku anak di kelas, cara ia berkomunikasi, dan apakah ia makan, minum, serta ke kamar mandi di sekolah. Bahan seperti ini membantu pemeriksa melihat gambaran utuh tanpa harus menuntut anak berbicara di hari pertama.'),

  '<h2 id="penanganan">Pendekatan penanganan</h2>',
  p('Kabar baiknya, menurut NHS sebagian besar anak dapat mengatasi mutisme selektif dengan dukungan yang tepat. Penanganan menyasar kecemasan seputar berbicara, bukan melatih bicara itu sendiri. Kemajuannya umumnya bertahap: anak lebih dulu rileks di sebuah tempat, kemudian mampu mengucapkan satu kata atau kalimat kepada satu orang, lalu akhirnya berbicara bebas dengan semua orang di berbagai tempat. Semakin lama kondisi berlangsung dan semakin besar usia anak saat terdiagnosis, biasanya semakin lama pula prosesnya.'),
  p('Teknik yang disebut NHS berakar pada terapi perilaku dan ' + a('terapi-perilaku-kognitif-anak', 'terapi perilaku kognitif (CBT)') + '. <em>Graded exposure</em> dimulai dari situasi yang paling ringan lalu naik perlahan. <em>Stimulus fading</em> dimulai saat anak nyaman berbicara dengan satu orang, misalnya ibu, lalu orang lain diperkenalkan sedikit demi sedikit sampai ibu bisa mundur. <em>Shaping</em> menuntun anak dari komunikasi nonverbal ke kontak mata, kata pendek, kalimat, sampai percakapan dua arah. Desensitisasi memakai rekaman suara atau video untuk mengurangi takut didengar orang lain.'),
  diag(`${IMG}/mutisme-selektif-tangga.webp`, 'Diagram enam langkah tangga keberanian berbicara: merasa aman, nonverbal, bunyi dan tulisan, satu kata, kalimat, dan bicara dengan banyak orang', 'Shaping menuntun anak naik satu anak tangga setiap kali, dari komunikasi tanpa suara sampai bercakap dengan banyak orang. Kecepatannya berbeda untuk tiap anak.'),
  p('ASHA juga mencantumkan berbagai pendekatan lain yang dipakai profesional, termasuk penguatan positif, <em>contingency management</em>, komunikasi augmentatif dan alternatif (AAC), serta program terapi bersama orang tua. Penggunaan AAC tidak berarti anak menyerah untuk berbicara. Alat ini memberi anak jalan untuk tetap berpartisipasi selama suaranya belum keluar. Pilihan alatnya bisa dilihat di artikel ' + a('aplikasi-komunikasi-aac-terbaik-untuk-anak', 'aplikasi komunikasi AAC untuk anak') + '.'),
  p('Tentang obat, NHS menjelaskan bahwa obat umumnya hanya sesuai untuk anak yang lebih besar, remaja, dan orang dewasa yang kecemasannya sudah memicu masalah lain seperti depresi. Obat tidak boleh menggantikan pendekatan lingkungan dan perilaku. Keputusan ini sepenuhnya wewenang dokter, sehingga orang tua tidak perlu cemas bahwa setiap anak dengan mutisme selektif pasti harus minum obat.'),

  '<h2 id="rumah">Yang bisa dilakukan orang tua di rumah</h2>',
  p('NHS menyebut bahwa perubahan lingkungan oleh keluarga dan staf sekolah sering kali bisa mencegah anak membutuhkan terapi individual. Artinya peran orang tua sangat besar. Prinsip pertama adalah jangan menekan atau menyuap anak agar berbicara. Akui bahwa berbicara terasa sulit dan menakutkan baginya, lalu sampaikan bahwa langkah kecil sudah sangat baik dan berbicara akan terasa makin mudah.'),
  p('Pujian juga perlu diatur. NHS menyarankan agar anak tidak dipuji secara terbuka di depan orang banyak ketika akhirnya berbicara, karena hal itu bisa membuatnya malu. Pujilah secara pribadi di rumah. Terimalah komunikasi nonverbal seperti tersenyum, melambai, atau menunjuk sampai anak merasa lebih nyaman. Ketika anak bersuara, tanggapi dengan hangat tetapi tanpa terlihat kaget, seolah itu hal biasa.'),
  diag(`${IMG}/mutisme-selektif-lakukan.webp`, 'Tabel visual lakukan dan hindari untuk lima situasi: anak diam saat ditanya, anak bersuara, acara keluarga, di kelas, dan membahas kondisinya', 'Ringkasan sikap yang membantu dan yang sebaiknya dihindari, disusun dari saran NHS untuk orang tua dan pendidik.'),
  p('Jangan menghindari acara keluarga atau kumpul bersama teman. Lebih baik siapkan situasinya agar lebih nyaman. Minta kerabat memberi anak waktu untuk menghangat dan mengajaknya bermain, bukan langsung menanyainya. Datang lebih awal sebelum ruangan ramai juga sering membantu. Bermain bersama anak lain dalam suasana santai memberi kesempatan anak berinteraksi tanpa tekanan untuk menjawab pertanyaan. Ide kegiatan semacam ini ada di artikel ' + a('play-date-untuk-anak-berkebutuhan-khusus', 'play date untuk anak berkebutuhan khusus') + '.'),
  fig(`${IMG}/mutisme-selektif-bermain.webp`, 1200, 675, 'Tiga siswi sekolah dasar berseragam merah putih duduk di anak tangga batu sambil memainkan permainan tradisional dari kayu', 'Tiga anak sekolah dasar bermain permainan tradisional bersama. Suasana bermain yang santai memberi anak kesempatan ikut berinteraksi tanpa tuntutan untuk langsung menjawab pertanyaan.', PX(M_MAIN, 'murod lens')),
  p('Terakhir, jaga juga kondisi orang tua sendiri. Mendampingi anak yang tidak bisa berbicara di sekolah sering memancing rasa khawatir, malu di depan orang lain, atau frustrasi. NHS mengingatkan pentingnya kasih sayang, dukungan, dan kesabaran. Orang tua yang tenang membantu anak merasa aman, sedangkan kecemasan orang tua yang terlihat jelas bisa menular. Tips menjaga kondisi diri ada di artikel ' + a('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak ABK') + '.'),

  '<h2 id="sekolah">Peran guru dan sekolah</h2>',
  p('Sekolah adalah tempat mutisme selektif paling sering terlihat, sehingga kerja sama guru dan orang tua sangat menentukan. NHS menekankan bahwa keluarga dan sekolah perlu mengenali kondisi ini sejak awal dan bekerja bersama. Guru kelas sebaiknya diberi tahu bahwa diamnya anak bukan bentuk pembangkangan. Di sekolah inklusi, ' + a('gpk-adalah', 'guru pendamping khusus (GPK)') + ' bisa membantu menyusun langkah bertahap dan mencatat kemajuan anak.'),
  p('Beberapa penyesuaian sederhana sangat membantu. Sediakan cara menjawab tanpa suara, misalnya mengangkat kartu, menunjuk gambar, atau menulis. Buat cara meminta izin ke kamar mandi tanpa bicara supaya anak tidak menahan diri seharian. Hindari meminta anak maju ke depan dan berbicara sebelum ia siap. Pasangkan anak dengan teman yang tenang dan ramah, seperti dalam ' + a('buddy-system-untuk-anak-abk-di-sekolah', 'buddy system di sekolah') + ', dan waspadai ejekan teman karena anak yang diam mudah menjadi sasaran. Langkah pencegahannya ada di artikel ' + a('anak-abk-dan-bullying-cara-mencegah', 'cara mencegah bullying pada anak ABK') + '.'),
  p('Teknik <em>stimulus fading</em> bisa diterapkan di sekolah dengan bantuan orang tua. Contohnya, orang tua dan anak bermain di ruang kelas yang kosong sepulang sekolah, tempat anak biasanya nyaman berbicara dengan orang tuanya. Lalu guru masuk dan ikut bermain tanpa menuntut apa pun. Setelah beberapa pertemuan, guru mulai ikut dalam permainan yang membutuhkan suara, dan orang tua perlahan mundur. Masa peralihan juga perlu disiapkan, karena perpindahan jenjang sekolah bisa memicu kecemasan baru. Baca ' + a('transisi-anak-abk-dari-tk-ke-sd', 'transisi anak ABK dari TK ke SD') + ' untuk persiapannya.'),
  p('Bila dalam beberapa bulan tidak ada kemajuan, atau anak tampak makin menarik diri, sekolah dan orang tua sebaiknya bersama-sama mencari bantuan profesional. NHS mengingatkan bahwa mutisme selektif yang tidak ditangani dapat berujung pada isolasi, rasa percaya diri yang rendah, dan gangguan kecemasan sosial. Penanganan yang dimulai lebih awal memberi peluang lebih besar bagi anak untuk kembali menemukan suaranya. Untuk anak yang sudah remaja, perhatikan juga ' + a('kesehatan-mental-remaja-berkebutuhan-khusus', 'kesehatan mental remaja berkebutuhan khusus') + '.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(mFaq),
];

articles.push({
  slug: 'mutisme-selektif-pada-anak',
  titleTag: 'Selective Mutism Anak: Tanda dan Penanganan | YUKA',
  metaDesc: 'Selective mutism anak atau mutisme selektif: pengertian, tanda di rumah dan sekolah, penyebab, beda dengan pemalu dan autisme, diagnosis, dan cara membantu anak.',
  keywords: 'selective mutism anak, mutisme selektif, anak tidak mau bicara di sekolah, gangguan kecemasan anak',
  ogTitle: 'Selective Mutism pada Anak',
  ogDesc: 'Panduan mutisme selektif untuk orang tua dan guru: tanda, penyebab, diagnosis, dan langkah bertahap membantu anak kembali berbicara.',
  h1: 'Selective Mutism pada Anak: Tanda, Penyebab, dan Cara Membantunya',
  crumb: 'Selective Mutism pada Anak',
  category: 'Parenting',
  datePublished: '2026-11-21T08:00:00+07:00', dateModified: '2026-11-21T08:00:00+07:00',
  dateDisplay: '21 November 2026', readTime: '13 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/mutisme-selektif-hero.webp`, w: 1200, h: 800,
    alt: 'Guru berkemeja biru muda berdiri di depan kelas sambil berbicara, siswa laki-laki berpeci dan berseragam batik duduk di bangku kayu',
    caption: 'Suasana kelas di sebuah sekolah di Pandeglang, Banten. Anak dengan mutisme selektif bisa tampak diam di kelas seperti ini, padahal di rumah ia berbicara lancar.',
    credit: PX(M_HERO, 'el jusuf'),
  },
  bodyHtml: mBody.join('\n'), faq: mFaq,
  related: [
    { href: '/artikel/gangguan-kecemasan-anak', title: 'Gangguan Kecemasan Anak', desc: 'Jenis kecemasan pada anak dan cara mendampinginya.' },
    { href: '/artikel/speech-delay-adalah', title: 'Speech Delay Adalah', desc: 'Pengertian keterlambatan bicara dan tanda yang perlu diperiksa.' },
    { href: '/artikel/terapi-perilaku-kognitif-anak', title: 'Terapi Perilaku Kognitif Anak', desc: 'Cara kerja CBT untuk anak dan remaja.' },
  ],
  tags: ['MutismeSelektif', 'KecemasanAnak', 'Parenting'],
  sources: [
    { url: URL_NHS_SM, label: 'NHS: Selective mutism (tanda, penyebab, diagnosis, penanganan, saran orang tua)' },
    { url: URL_ASHA_SM, label: 'ASHA Practice Portal: Selective Mutism (kriteria DSM-5-TR, prevalensi, pendekatan terapi)' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum untuk orang tua dan pendidik, bukan alat diagnosis. Diagnosis dan rencana penanganan perlu ditetapkan oleh dokter, psikolog, atau terapis wicara yang memeriksa anak.',
});

// [ARTIKEL_BERIKUTNYA]

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

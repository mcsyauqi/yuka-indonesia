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

// ---------------------------------------------------------------------------
// Artikel 2: sindrom Rett (22 Nov 2026)
// Keyword: "sindrom rett" (tab Riset Keyword Batch 4, baris 226)
// ---------------------------------------------------------------------------
const URL_NHS_RETT = 'https://www.nhs.uk/conditions/rett-syndrome/';
const URL_FDA_RETT = 'https://www.fda.gov/drugs/news-events-human-drugs/fda-approves-first-treatment-rett-syndrome';
const R_HERO = 'https://www.pexels.com/photo/indonesian-schoolgirls-in-uniform-celebrating-29599422/';
const R_KEGIATAN = 'https://www.pexels.com/photo/class-photo-from-the-closing-ceremony-in-an-indonesian-high-school-10489236/';
const R_KELAS = 'https://www.pexels.com/photo/students-learning-in-a-classroom-in-indonesia-35548840/';

const rSections = [
  ['pengertian', 'Apa itu sindrom Rett'],
  ['penyebab', 'Penyebab: perubahan gen MECP2'],
  ['tahap', 'Empat tahap perkembangan sindrom Rett'],
  ['gejala', 'Gejala yang paling sering muncul'],
  ['diagnosis', 'Bagaimana sindrom Rett didiagnosis'],
  ['penanganan', 'Penanganan dan terapi pendukung'],
  ['komunikasi', 'Komunikasi dan belajar di sekolah'],
  ['keluarga', 'Mendampingi anak dan menjaga keluarga'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const rFaq = [
  { q: 'Apa itu sindrom Rett?', a: 'Sindrom Rett adalah kelainan genetik langka yang memengaruhi perkembangan otak dan menimbulkan disabilitas fisik serta intelektual yang berat. Anak biasanya tampak berkembang wajar di bulan-bulan pertama, lalu perkembangannya melambat dan sebagian keterampilan yang sudah dikuasai, seperti penggunaan tangan dan bicara, hilang.' },
  { q: 'Mengapa sindrom Rett hampir selalu dialami anak perempuan?', a: 'Sebagian besar kasus disebabkan perubahan pada gen MECP2 yang terletak di kromosom X. NHS menyebut sindrom Rett diperkirakan dialami sekitar 1 dari 10.000 bayi perempuan yang lahir setiap tahun dan jarang ditemukan pada anak laki-laki. FDA juga menyebut kondisi ini terutama dialami perempuan dan jauh lebih jarang pada laki-laki.' },
  { q: 'Apakah sindrom Rett diturunkan dari orang tua?', a: 'Pada umumnya tidak. Menurut NHS, lebih dari 99 persen kasus terjadi secara spontan, bukan diwariskan, dan biasanya tidak ada riwayat keluarga. Orang tua yang ingin memahami risikonya untuk kehamilan berikutnya sebaiknya berkonsultasi dengan dokter atau layanan konseling genetik.' },
  { q: 'Pada usia berapa gejala sindrom Rett mulai terlihat?', a: 'NHS menjelaskan bahwa gejala biasanya mulai muncul antara usia 6 dan 18 bulan. Tahap kemunduran keterampilan umumnya terjadi antara usia 1 dan 4 tahun dan bisa berlangsung dari 2 bulan sampai lebih dari 2 tahun.' },
  { q: 'Apakah sindrom Rett sama dengan autisme?', a: 'Tidak sama, tetapi pada tahap kemunduran beberapa ciri sindrom Rett bisa mirip autisme, misalnya menarik diri dari interaksi sosial dan kontak mata berkurang. Sindrom Rett memiliki ciri khas lain seperti hilangnya penggunaan tangan yang bertujuan, gerakan tangan berulang seperti meremas atau bertepuk, pertumbuhan kepala melambat, dan gangguan pernapasan.' },
  { q: 'Apakah sindrom Rett bisa disembuhkan?', a: 'Sampai sekarang belum ada obat yang menyembuhkan sindrom Rett. Penanganan berfokus pada pengelolaan gejala, misalnya terapi wicara dan komunikasi, fisioterapi, terapi okupasi, obat antikejang, dan pengaturan gizi. Pada 2023 FDA Amerika Serikat menyetujui trofinetide sebagai pengobatan pertama untuk sindrom Rett pada usia 2 tahun ke atas, tetapi obat ini mengelola gejala dan tidak menyembuhkan.' },
  { q: 'Apakah anak dengan sindrom Rett bisa bersekolah?', a: 'Bisa. Anak dengan sindrom Rett tetap berhak atas pendidikan, baik di sekolah luar biasa maupun sekolah inklusi dengan dukungan yang sesuai. Kuncinya adalah sistem komunikasi alternatif, misalnya papan gambar atau teknologi tatapan mata, posisi duduk yang baik, dan program yang disusun bersama terapis serta guru pendamping.' },
  { q: 'Berapa harapan hidup anak dengan sindrom Rett?', a: 'NHS tidak memberikan angka harapan hidup yang pasti. Banyak penyandang sindrom Rett hidup sampai dewasa, dan mereka yang gejalanya lebih ringan bisa mencapai usia lanjut. Sebagian meninggal di usia relatif muda karena komplikasi seperti gangguan irama jantung, pneumonia, dan epilepsi, sehingga pemeriksaan kesehatan rutin sangat penting.' },
];

addDiagram(`${IMG}/sindrom-rett-tahap.webp`, svg.flow('Empat tahap sindrom Rett', 'Rentang usia menurut NHS, tiap anak bisa berbeda', [
  { h: '1. Stagnasi', d: 'Mulai 6 sampai 18 bulan. Perkembangan melambat, tonus otot rendah.' },
  { h: '2. Kemunduran', d: 'Usia 1 sampai 4 tahun. Kehilangan penggunaan tangan dan bicara.' },
  { h: '3. Plateau', d: 'Mulai usia 2 sampai 10 tahun. Perhatian dan kontak membaik.' },
  { h: '4. Penurunan gerak', d: 'Bertahun-tahun. Skoliosis, kaku otot, kemampuan berjalan menurun.' },
]));
addDiagram(`${IMG}/sindrom-rett-tim.webp`, svg.cards('Tim pendukung anak dengan sindrom Rett', 'Siapa membantu apa, dari NHS', [
  { h: 'Komunikasi', items: ['Terapi wicara', 'Papan gambar dan PECS', 'Teknologi tatapan mata'] },
  { h: 'Gerak dan postur', items: ['Fisioterapi', 'Posisi duduk yang baik', 'Ortosis kaki dan bidai tangan'] },
  { h: 'Kesehatan', items: ['Obat antikejang', 'Pemantauan jantung dan napas', 'Pengaturan gizi'] },
  { h: 'Keseharian', items: ['Terapi okupasi', 'Terapi musik dan air', 'Dukungan untuk pengasuh'] },
]));

const rBody = [
  p('<strong>Sindrom Rett</strong> adalah kelainan genetik langka yang memengaruhi perkembangan otak dan hampir selalu dialami anak perempuan. Anak biasanya tampak tumbuh wajar pada bulan-bulan pertama, lalu perkembangannya melambat dan keterampilan yang sudah dikuasai, terutama penggunaan tangan dan kemampuan bicara, perlahan hilang. Kondisi ini belum bisa disembuhkan, tetapi gejalanya bisa dikelola sehingga anak tetap dapat berkomunikasi, belajar, dan menjalani hidup sebaik mungkin.'),
  p('Karena sangat jarang, banyak orang tua baru mendengar nama sindrom Rett ketika dokter menyampaikannya. Artikel ini membahas pengertian sindrom Rett, penyebabnya, empat tahap perkembangannya, gejala yang paling sering muncul, cara diagnosis, pilihan penanganan, serta cara mendampingi anak di rumah dan di sekolah. Bila keluarga Anda baru menerima diagnosis, artikel ' + a('menerima-diagnosis-anak-abk', 'menerima diagnosis anak ABK') + ' bisa menjadi bacaan pendamping.'),
  toc(rSections),

  '<h2 id="pengertian">Apa itu sindrom Rett</h2>',
  p('Menurut ' + ext(URL_NHS_RETT, 'NHS (layanan kesehatan nasional Inggris)') + ', sindrom Rett adalah kelainan genetik langka yang memengaruhi perkembangan otak dan menyebabkan disabilitas fisik dan intelektual yang berat. NHS memperkirakan kondisi ini dialami sekitar 1 dari 10.000 bayi perempuan yang lahir setiap tahun, dan jarang ditemukan pada anak laki-laki. Angka yang sama juga dicantumkan ' + ext(URL_FDA_RETT, 'FDA Amerika Serikat') + ' yang menyebut sindrom Rett terutama dialami perempuan dan jauh lebih jarang pada laki-laki.'),
  p('Ciri yang membuat sindrom Rett berbeda dari banyak kondisi perkembangan lain adalah polanya. Anak tidak terlihat bermasalah sejak lahir. NHS menjelaskan bahwa perkembangan anak tampak wajar setidaknya selama 6 bulan pertama, meskipun mungkin sudah ada tanda halus. Setelah itu muncul fase melambat, disusul fase kemunduran ketika anak kehilangan keterampilan yang sudah dimilikinya. Bagi orang tua, kehilangan keterampilan seperti ini sangat membingungkan dan menyedihkan, sehingga dukungan sejak awal sangat penting.'),
  p('Sindrom Rett termasuk dalam kelompok kondisi yang menyebabkan disabilitas ganda, karena memengaruhi gerak, komunikasi, dan fungsi kognitif sekaligus. Di Indonesia, anak dengan kondisi seperti ini sering dilayani dalam program untuk ' + a('tunaganda-adalah', 'tunaganda') + ' di sekolah luar biasa, atau di sekolah inklusi dengan pendampingan yang memadai. Pemahaman tentang kondisinya membantu orang tua dan guru menyusun dukungan yang realistis.'),

  '<h2 id="penyebab">Penyebab: perubahan gen MECP2</h2>',
  p('NHS menjelaskan bahwa sebagian besar kasus sindrom Rett disebabkan oleh perubahan atau mutasi pada gen MECP2, yang terletak di kromosom X. Gen ini memberi instruksi untuk membuat protein MeCP2, protein yang dibutuhkan otak untuk berkembang. Ketika gen ini berubah, sel saraf tidak dapat bekerja sebagaimana mestinya. Letak gen di kromosom X inilah yang menjelaskan mengapa kondisi ini hampir selalu terlihat pada anak perempuan.'),
  p('Hal yang sering membuat orang tua merasa bersalah adalah pertanyaan apakah kondisi ini diturunkan. NHS menegaskan bahwa biasanya tidak ada riwayat keluarga, dan lebih dari 99 persen kasus terjadi secara spontan, bukan diwariskan dari orang tua. Artinya sindrom Rett bukan akibat pola asuh, makanan selama hamil, atau kesalahan orang tua. Untuk pertanyaan tentang risiko pada kehamilan berikutnya, konsultasikan dengan dokter atau layanan konseling genetik.'),
  p('Karena penyebabnya genetik, sindrom Rett tidak menular dan tidak bisa dicegah dengan cara tertentu setelah anak lahir. Fokus keluarga sebaiknya diarahkan pada deteksi dini dan dukungan. Memahami ' + a('langkah-langkah-deteksi-dini-tumbuh-kembang-anak', 'langkah deteksi dini tumbuh kembang anak') + ' membantu orang tua menyadari perubahan perkembangan lebih cepat dan segera mencari pemeriksaan.'),

  '<h2 id="tahap">Empat tahap perkembangan sindrom Rett</h2>',
  p('NHS membagi perjalanan sindrom Rett menjadi empat tahap. Rentang usia di setiap tahap hanya gambaran umum, karena perjalanan tiap anak bisa berbeda. Sebagian anak tidak melewati semua tahap dengan jelas, dan banyak yang menetap lama di tahap tertentu. Tabel berikut merangkum keempat tahap tersebut beserta perubahan yang biasanya terlihat.'),
  table('Empat tahap sindrom Rett menurut NHS', ['Tahap', 'Kapan biasanya terjadi', 'Perubahan yang terlihat'], [
    ['1. Tanda awal (stagnasi)', 'Mulai usia 6 sampai 18 bulan, berlangsung beberapa bulan sampai setahun atau lebih', 'Tonus otot rendah, sulit makan, gerakan tangan berulang, bicara terlambat, kurang tertarik pada mainan'],
    ['2. Kemunduran', 'Usia 1 sampai 4 tahun, berlangsung 2 bulan sampai lebih dari 2 tahun', 'Kehilangan penggunaan tangan dan bicara, gerakan meremas atau bertepuk, menarik diri, gangguan tidur dan napas'],
    ['3. Plateau', 'Bisa mulai usia 2 sampai 10 tahun, sering bertahan bertahun-tahun', 'Rewel berkurang, perhatian dan komunikasi membaik, tetapi kejang dan masalah berat badan bisa berlanjut'],
    ['4. Penurunan kemampuan gerak', 'Bisa berlangsung bertahun-tahun sampai puluhan tahun', 'Skoliosis, otot lemah dan kaku terutama di kaki, kemampuan berjalan menurun; komunikasi umumnya tidak memburuk'],
  ]),
  diag(`${IMG}/sindrom-rett-tahap.webp`, 'Diagram empat tahap sindrom Rett: stagnasi, kemunduran, plateau, dan penurunan kemampuan gerak beserta rentang usianya', 'Ringkasan empat tahap sindrom Rett. Tahap plateau bisa berlangsung sangat lama, dan banyak penyandang menetap di tahap ini sepanjang hidupnya.'),
  p('Ada kabar yang menguatkan di balik tahap-tahap ini. NHS mencatat bahwa pada tahap plateau, sebagian gejala tahap kemunduran seperti rewel dan menangis bisa mereda, sementara minat pada orang lain, kewaspadaan, perhatian, dan komunikasi anak bisa membaik. Pada tahap keempat pun, kemampuan komunikasi dan fungsi otak umumnya tidak memburuk, dan tatapan mata biasanya justru membaik. Tatapan mata inilah yang kelak menjadi jalur komunikasi penting bagi banyak anak.'),

  '<h2 id="gejala">Gejala yang paling sering muncul</h2>',
  p('Gejala paling khas sindrom Rett adalah hilangnya penggunaan tangan yang bertujuan, digantikan oleh gerakan tangan berulang seperti meremas, seperti mencuci tangan, bertepuk, atau mengetuk. NHS juga mencatat tanda lain di tahap kemunduran, yaitu tekanan emosional dan teriakan tanpa sebab yang jelas, menarik diri dari interaksi sosial, kontak mata berkurang, cara berjalan tidak stabil, gangguan tidur, dan pertumbuhan kepala yang melambat.'),
  p('Gejala fisik lain juga perlu dipantau. NHS menyebut kesulitan menelan, sembelit, serta masalah pada denyut atau irama jantung. Kemudian bisa muncul episode napas cepat atau lambat, menahan napas, dan menelan udara yang membuat perut kembung. Kejang juga sering terjadi, dan berat badan kadang sulit naik atau dipertahankan. Karena itu anak dengan sindrom Rett perlu dipantau oleh dokter secara rutin, tidak hanya oleh terapis.'),
  p('Pada tahap kemunduran, beberapa ciri sindrom Rett bisa menyerupai autisme, misalnya menarik diri dan kontak mata berkurang. Inilah sebabnya sebagian anak sempat diduga autis sebelum diagnosis yang tepat ditegakkan. Perbedaannya, sindrom Rett disertai ciri fisik yang khas seperti hilangnya fungsi tangan, gangguan napas, dan pertumbuhan kepala melambat. Bila Anda ingin memahami ciri autisme sebagai pembanding, baca ' + a('autisme-adalah', 'pengertian autisme') + '. Masalah tulang belakang yang sering menyertai disabilitas fisik dijelaskan di artikel ' + a('skoliosis-pada-anak-cerebral-palsy', 'skoliosis pada anak cerebral palsy') + '.'),

  p('Bagi orang tua, mencatat gejala sehari-hari sangat membantu dokter. Buat buku catatan sederhana atau catatan di ponsel yang berisi tanggal, jam, dan gambaran singkat setiap episode yang tidak biasa, misalnya napas tertahan, napas sangat cepat, kejang, atau tangisan yang sulit diredakan. Catat juga pola tidur, buang air besar, berat badan, dan jumlah makanan yang masuk. Bila memungkinkan, rekam video pendek ketika episode terjadi, karena gerakan yang sulit dijelaskan dengan kata-kata sering langsung dikenali dokter dari rekaman. Catatan seperti ini membantu membedakan mana yang merupakan bagian dari sindrom Rett dan mana yang perlu penanganan segera.'),

  '<h2 id="diagnosis">Bagaimana sindrom Rett didiagnosis</h2>',
  p('Menurut NHS, diagnosis sindrom Rett ditegakkan berdasarkan gejala setelah kondisi lain yang lebih umum disingkirkan. Karena kondisinya langka, diagnosis sering terlambat. Gejala biasanya muncul antara usia 6 dan 18 bulan, ketika orang tua mulai melihat anak tidak lagi berkembang seperti sebelumnya atau kehilangan keterampilan yang sudah dikuasai.'),
  p('Tes darah genetik dapat memeriksa adanya perubahan pada gen MECP2. NHS menjelaskan bahwa ditemukannya perubahan gen ini memastikan diagnosis, tetapi tidak ditemukannya perubahan belum tentu menyingkirkan sindrom Rett. Karena itu dokter tetap memadukan hasil tes dengan pengamatan gejala dan riwayat perkembangan anak. Di Indonesia, pemeriksaan biasanya dimulai dari dokter spesialis anak, lalu dirujuk ke dokter spesialis anak konsultan saraf atau layanan genetik di rumah sakit rujukan.'),
  p('Orang tua bisa membantu proses diagnosis dengan mencatat riwayat perkembangan anak secara rinci. Kapan anak mulai duduk, merangkak, mengoceh, atau memegang mainan, dan kapan keterampilan itu mulai berkurang. Video anak di usia yang berbeda juga sangat berguna. Bila Anda khawatir tentang perkembangan anak, jangan menunggu. Artikel ' + a('intervensi-dini', 'intervensi dini') + ' menjelaskan mengapa dukungan sejak awal penting, apa pun diagnosis akhirnya.'),

  '<h2 id="penanganan">Penanganan dan terapi pendukung</h2>',
  p('NHS menegaskan bahwa belum ada pengobatan yang menyembuhkan sindrom Rett. Penanganan bertujuan mengelola gejala dan membantu anak berfungsi sebaik mungkin, sehingga biasanya melibatkan banyak profesional sekaligus. Obat dapat diberikan untuk masalah napas dan gerak, serta obat antiepilepsi untuk mengendalikan kejang. Semua keputusan tentang obat ada di tangan dokter yang menangani anak.'),
  p('Pada Maret 2023, ' + ext(URL_FDA_RETT, 'FDA Amerika Serikat') + ' menyetujui Daybue (trofinetide) sebagai pengobatan pertama untuk sindrom Rett pada orang dewasa dan anak usia 2 tahun ke atas. FDA mencatat efek samping yang paling sering adalah diare dan muntah. Obat ini membantu mengelola gejala dan tidak menyembuhkan. Ketersediaannya di Indonesia perlu ditanyakan langsung kepada dokter, karena persetujuan di satu negara tidak otomatis berlaku di negara lain.'),
  diag(`${IMG}/sindrom-rett-tim.webp`, 'Diagram empat kelompok dukungan untuk anak dengan sindrom Rett: komunikasi, gerak dan postur, kesehatan, serta keseharian', 'Penanganan sindrom Rett melibatkan banyak bidang. Diagram ini merangkum jenis dukungan yang disebut NHS.'),
  p('Terapi pendukung memegang peran besar. NHS menyebut ' + a('terapi-fisik-untuk-abk', 'fisioterapi') + ' untuk menjaga kemampuan gerak, perhatian pada posisi duduk agar risiko skoliosis berkurang, dan sering berganti posisi. Bila skoliosis sudah terjadi, penyangga punggung dapat dipakai, dan kadang dibutuhkan operasi tulang belakang. ' + a('terapi-okupasi', 'Terapi okupasi') + ' membantu kegiatan sehari-hari seperti berpakaian dan makan. Ortosis kaki dapat membantu anak berjalan, dan bidai tangan kadang dipakai dalam waktu terbatas untuk mencegah anak melukai diri atau mendorong penggunaan tangan yang lain.'),
  p('Gizi juga perlu perhatian khusus. NHS menyebut diet ketogenik tinggi kalori dan rendah karbohidrat dapat dipertimbangkan untuk membantu berat badan dan pengendalian kejang, dengan selang makan atau alat bantu lain bila diperlukan. Diet seperti ini harus diawasi dokter dan ahli gizi, bukan dicoba sendiri di rumah. NHS juga mencatat bahwa berkuda terapeutik, berenang, hidroterapi, dan ' + a('terapi-musik-anak-berkebutuhan-khusus', 'terapi musik') + ' dilaporkan bermanfaat bagi sebagian penyandang.'),
  p('Karena banyak profesional terlibat, koordinasi menjadi tantangan tersendiri bagi keluarga. Simpan semua hasil pemeriksaan, resep, dan laporan terapi dalam satu map, lalu bawa setiap kali kontrol. Mintalah setiap terapis menuliskan tujuan dan latihan rumah secara singkat agar orang tua dan guru bisa menjalankannya dengan cara yang sama. Bila memungkinkan, tunjuk satu dokter sebagai koordinator utama yang memantau gambaran besar kesehatan anak, terutama soal kejang, pernapasan, jantung, dan berat badan. Untuk gambaran jenis terapi yang tersedia, baca artikel ' + a('apa-saja-terapi-anak-berkebutuhan-khusus', 'terapi anak berkebutuhan khusus') + '.'),
  fig(`${IMG}/sindrom-rett-kegiatan.webp`, 1200, 800, 'Puluhan siswi berkerudung putih dan beberapa siswa duduk berkerumun di halaman sekolah bersama seorang guru, memegang bendera merah putih kecil dan balon', 'Kegiatan bersama siswa dan guru di sebuah sekolah menengah di Bima, Nusa Tenggara Barat. Kegiatan yang menyenangkan seperti musik dan perayaan sekolah bisa menjadi ruang bagi anak dengan sindrom Rett untuk tetap terlibat bersama teman.', PX(R_KEGIATAN, 'Wasio Kadir')),

  p('Posisi tubuh dan gerak juga bisa dirawat di rumah setiap hari. Ikuti latihan yang diberikan fisioterapis, ganti posisi anak secara berkala bila ia lama duduk atau berbaring, dan perhatikan kursi atau stroller yang dipakai agar punggungnya tetap tersangga dengan baik. Bila anak masih bisa berjalan, beri kesempatan berjalan di tempat yang aman setiap hari, karena kemampuan ini lebih mudah dipertahankan daripada dipulihkan. Ide latihan sederhana tersedia di artikel ' + a('latihan-fisioterapi-anak-di-rumah', 'latihan fisioterapi anak di rumah') + ', tetapi tetap sesuaikan dengan arahan terapis yang mengenal kondisi anak.'),

  '<h2 id="komunikasi">Komunikasi dan belajar di sekolah</h2>',
  p('Kehilangan kemampuan bicara tidak berarti anak kehilangan keinginan untuk berkomunikasi. NHS menyebut berbagai dukungan komunikasi untuk sindrom Rett, yaitu terapi wicara, papan gambar, teknologi tatapan mata (eye gaze), dan sistem seperti Makaton, Signalong, atau PECS. Karena tatapan mata cenderung membaik di tahap lanjut, banyak anak dapat memilih gambar atau kata dengan melihatnya. Penjelasan tentang sistem bergambar ada di artikel ' + a('pecs-komunikasi-autis', 'PECS') + ' dan pilihan alat bantu ada di ' + a('aplikasi-komunikasi-aac-terbaik-untuk-anak', 'aplikasi komunikasi AAC') + '.'),
  p('Di sekolah, anak dengan sindrom Rett membutuhkan program yang disusun khusus untuknya. ' + a('program-pembelajaran-individual', 'Program pembelajaran individual (PPI)') + ' dapat memuat tujuan komunikasi, posisi duduk selama pelajaran, jadwal istirahat, dan cara anak menunjukkan pilihan. Guru perlu memberi waktu tunggu yang cukup, karena anak sering butuh waktu lebih lama untuk merespons dengan tatapan atau gerakan. Penting juga menganggap anak memahami lebih banyak daripada yang bisa ia tunjukkan, sehingga anak tetap diajak bicara dan dilibatkan.'),
  p('Latihan komunikasi bisa dimulai di rumah dengan cara yang sederhana. Tunjukkan dua pilihan yang jelas berbeda, misalnya dua gambar makanan atau dua mainan, lalu letakkan agak berjauhan di depan anak. Sebut nama keduanya, tunggu dengan sabar, dan perhatikan ke mana pandangan anak berhenti. Bila anak menatap satu pilihan, berikan pilihan itu dan sebutkan namanya. Kegiatan kecil seperti ini memberi pesan penting bahwa pendapat anak didengar. Terapis wicara dapat membantu menyusun papan pilihan yang lebih lengkap sesuai kemampuan dan minat anak.'),
  fig(`${IMG}/sindrom-rett-kelas.webp`, 1200, 800, 'Ruang kelas berdinding putih dengan deretan meja kayu, siswa laki-laki berpeci dan siswi berkerudung duduk menulis di bangku masing-masing', 'Ruang kelas di sebuah sekolah di Pandeglang, Banten. Penataan kelas, seperti jalur yang lapang untuk kursi roda dan posisi duduk yang bisa diatur, ikut menentukan apakah anak dengan disabilitas fisik bisa belajar dengan nyaman.', PX(R_KELAS, 'el jusuf')),
  p('Pilihan tempat belajar perlu didiskusikan bersama terapis dan pihak sekolah. Sebagian keluarga memilih sekolah luar biasa yang sudah terbiasa melayani anak dengan disabilitas ganda, sebagian lain memilih sekolah inklusi dengan ' + a('gpk-adalah', 'guru pendamping khusus') + '. Perbandingan keduanya dijelaskan di artikel ' + a('apa-perbedaan-sekolah-inklusi-dan-slb', 'perbedaan sekolah inklusi dan SLB') + '. Yang terpenting adalah lingkungan belajar yang aksesibel, tim yang mau belajar tentang kondisi anak, dan komunikasi rutin antara guru dan orang tua.'),

  '<h2 id="keluarga">Mendampingi anak dan menjaga keluarga</h2>',
  p('NHS menyampaikan bahwa sebagian penyandang sindrom Rett mempertahankan sebagian kemampuan tangan, berjalan, atau berkomunikasi, tetapi kebanyakan membutuhkan perawatan sepanjang hari seumur hidup. Banyak yang hidup sampai dewasa, dan mereka yang gejalanya lebih ringan dapat mencapai usia lanjut. Sebagian meninggal di usia relatif muda karena komplikasi seperti gangguan irama jantung, pneumonia, dan epilepsi. Pemeriksaan kesehatan rutin karena itu sangat penting.'),
  p('Merawat anak dengan sindrom Rett menuntut tenaga fisik dan mental yang besar. NHS menekankan bahwa kebanyakan pengasuh membutuhkan dukungan sosial dan psikologis, termasuk waktu jeda dari tugas merawat. Orang tua tidak perlu merasa bersalah ketika membutuhkan istirahat. Konsep ' + a('respite-care-untuk-keluarga-anak-abk', 'respite care') + ' dan ' + a('self-care-untuk-orang-tua-anak-disabilitas', 'self care untuk orang tua') + ' bisa menjadi titik awal untuk menata ulang pembagian tugas di keluarga.'),
  p('Libatkan juga saudara kandung dan keluarga besar dengan cara yang sesuai usia mereka. Saudara kandung sering ikut merasakan perubahan suasana rumah dan perlu tetap mendapat perhatian. Bergabung dengan komunitas orang tua anak berkebutuhan khusus juga membantu, karena pengalaman orang tua lain sering memberi ide praktis yang tidak tertulis di buku. Untuk hak dan bantuan yang bisa diakses keluarga, baca ' + a('apa-saja-hak-anak-berkebutuhan-khusus', 'hak anak berkebutuhan khusus') + ' dan ' + a('cara-mengajukan-bantuan-pemerintah-untuk-anak-disabilitas', 'cara mengajukan bantuan pemerintah untuk anak disabilitas') + '.'),

  p('Rencanakan juga masa depan secara bertahap. Anak dengan sindrom Rett akan tumbuh menjadi remaja dan orang dewasa yang tetap membutuhkan dukungan. Pikirkan sejak awal siapa saja yang dapat membantu merawat bila orang tua sakit atau berhalangan, bagaimana pembiayaan terapi dan alat bantu jangka panjang, serta layanan apa yang tersedia di daerah Anda. Langkah kecil seperti mengajari anggota keluarga lain cara memberi makan, memindahkan posisi, dan membaca isyarat anak akan sangat berarti di kemudian hari. Kartu identitas disabilitas juga dapat membantu mengakses layanan, sebagaimana dijelaskan di artikel ' + a('kartu-disabilitas', 'kartu disabilitas') + '.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(rFaq),
];

articles.push({
  slug: 'sindrom-rett',
  titleTag: 'Sindrom Rett: Penyebab, Tahap, dan Penanganan | YUKA',
  metaDesc: 'Sindrom Rett: kelainan genetik langka pada anak perempuan. Penyebab gen MECP2, empat tahap, gejala, diagnosis, terapi pendukung, dan cara mendampingi anak.',
  keywords: 'sindrom rett, rett syndrome, gen MECP2, sindrom rett pada anak perempuan, tahap sindrom rett',
  ogTitle: 'Sindrom Rett pada Anak',
  ogDesc: 'Panduan sindrom Rett untuk orang tua dan guru: penyebab, empat tahap, gejala, diagnosis, terapi, dan dukungan di sekolah.',
  h1: 'Sindrom Rett: Penyebab, Empat Tahap, Gejala, dan Penanganannya',
  crumb: 'Sindrom Rett',
  category: 'Kesehatan',
  datePublished: '2026-11-22T08:00:00+07:00', dateModified: '2026-11-22T08:00:00+07:00',
  dateDisplay: '22 November 2026', readTime: '13 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/sindrom-rett-hero.webp`, w: 1200, h: 800,
    alt: 'Enam siswi berkerudung putih dan berseragam rok merah duduk berjajar di depan bangunan sekolah berdinding oranye dan hijau sambil tertawa',
    caption: 'Siswi sebuah sekolah di Jawa Barat duduk bersama di depan kelas. Sindrom Rett hampir selalu dialami anak perempuan, dan setiap anak tetap berhak belajar dan bergaul bersama teman sebayanya.',
    credit: PX(R_HERO, 'Mulya Has'),
  },
  bodyHtml: rBody.join('\n'), faq: rFaq,
  related: [
    { href: '/artikel/tunaganda-adalah', title: 'Tunaganda Adalah', desc: 'Pengertian disabilitas ganda dan layanan pendidikannya.' },
    { href: '/artikel/aplikasi-komunikasi-aac-terbaik-untuk-anak', title: 'Aplikasi Komunikasi AAC', desc: 'Alat bantu komunikasi untuk anak yang belum atau tidak bisa berbicara.' },
    { href: '/artikel/terapi-fisik-untuk-abk', title: 'Terapi Fisik untuk ABK', desc: 'Peran fisioterapi dalam menjaga kemampuan gerak anak.' },
  ],
  tags: ['SindromRett', 'Genetik', 'DisabilitasGanda'],
  sources: [
    { url: URL_NHS_RETT, label: 'NHS: Rett syndrome (penyebab, tahap, diagnosis, penanganan, prognosis)' },
    { url: URL_FDA_RETT, label: 'FDA: FDA approves first treatment for Rett syndrome (Daybue/trofinetide)' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum, bukan pengganti pemeriksaan dokter. Diagnosis, pilihan obat, dan program terapi untuk anak tertentu ditetapkan oleh dokter dan tim terapis yang menanganinya.',
});


// ---------------------------------------------------------------------------
// Artikel 3: Early Start Denver Model (ESDM) (23 Nov 2026)
// Keyword: "early start denver model esdm" (tab Riset Keyword Batch 5, baris 80)
// ---------------------------------------------------------------------------
const URL_ESDM_WP = 'https://en.wikipedia.org/wiki/Early_Start_Denver_Model';
const URL_DAWSON = 'https://pubmed.ncbi.nlm.nih.gov/19948568/';
const E_HERO = 'https://www.pexels.com/photo/children-playing-with-wooden-objects-outdoors-38374089/';
const E_EGRANG = 'https://www.pexels.com/photo/children-playing-traditional-game-outdoors-39985546/';
const E_WAYANG = 'https://www.pexels.com/photo/children-playing-with-puppets-in-javanese-garden-40646710/';

const eSections = [
  ['pengertian', 'Apa itu Early Start Denver Model'],
  ['sejarah', 'Asal-usul dan pengembangnya'],
  ['prinsip', 'Prinsip dan cara kerja ESDM'],
  ['sesi', 'Seperti apa sesi ESDM berlangsung'],
  ['bukti', 'Apa kata penelitian'],
  ['banding', 'ESDM dibandingkan pendekatan lain'],
  ['orang-tua', 'Peran orang tua dalam ESDM'],
  ['memilih', 'Hal yang perlu ditanyakan sebelum memilih'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const eFaq = [
  { q: 'Apa itu Early Start Denver Model (ESDM)?', a: 'ESDM adalah program intervensi dini untuk anak autis usia sangat muda yang memadukan pendekatan perkembangan berbasis bermain dengan teknik perilaku. Anak belajar melalui kegiatan bersama dan rutinitas sehari-hari yang dibangun dari minat dan pilihan anak sendiri, bukan lewat latihan duduk di meja.' },
  { q: 'Untuk usia berapa ESDM ditujukan?', a: 'ESDM umumnya ditujukan untuk anak usia 12 sampai 48 bulan. Rentang 24 sampai 60 bulan berlaku untuk Denver Model asli yang berbentuk program kelompok prasekolah, bukan untuk ESDM.' },
  { q: 'Siapa yang mengembangkan ESDM?', a: 'ESDM dikembangkan oleh psikolog Amerika Serikat Sally J. Rogers dan Geraldine Dawson. Manual pertamanya terbit pada 2010. ESDM merupakan pengembangan dari Denver Model, program berbasis bermain untuk anak autis usia prasekolah yang mulai dikembangkan Rogers dan rekan pada 1980-an.' },
  { q: 'Apakah ESDM sama dengan terapi ABA?', a: 'Tidak persis sama. Pengembangnya menyebut ESDM berakar pada ABA dan memakai teknik perilaku seperti prompting, shaping, fading, dan chaining, tetapi pengajarannya dikemas dalam permainan dan rutinitas yang dipimpin minat anak. Apakah ESDM dapat digolongkan sebagai praktik ABA masih diperdebatkan di kalangan ahli.' },
  { q: 'Berapa jam per minggu ESDM dijalankan?', a: 'Tidak ada satu angka baku. Dalam studi Dawson dan rekan tahun 2010, anak menerima rata-rata 15,2 jam per minggu dari terapis, dan orang tua melaporkan memakai strategi ESDM rata-rata 16,3 jam per minggu. Studi lain memakai 12, 15, atau 25 jam per minggu. Intensitas untuk anak tertentu sebaiknya ditentukan bersama profesional.' },
  { q: 'Apakah ESDM terbukti efektif?', a: 'Hasil penelitiannya beragam. Uji acak Dawson dan rekan tahun 2010 menunjukkan kemajuan bermakna pada kemampuan kognitif dan perilaku adaptif, tetapi beberapa uji yang lebih baru hanya mereplikasi sebagian hasil itu atau tidak menemukan perbedaan bermakna. Tinjauan sistematis umumnya menemukan efek sedang pada kognisi dan bahasa.' },
  { q: 'Bisakah orang tua menerapkan ESDM di rumah?', a: 'Bisa, dengan bimbingan. Ada versi yang dijalankan orang tua (P-ESDM), dengan terapis melatih orang tua secara berkala. Strategi ESDM memang dirancang untuk disisipkan dalam kegiatan sehari-hari seperti makan, mandi, dan bermain. Namun orang tua tetap memerlukan pelatihan dan evaluasi dari profesional yang memahami model ini.' },
  { q: 'Bagaimana cara mencari terapis ESDM?', a: 'Tanyakan apakah terapis memiliki pelatihan atau sertifikasi ESDM, bagaimana mereka menyusun tujuan dan mengukur kemajuan, serta bagaimana orang tua dilibatkan. Bila terapis ESDM bersertifikat belum tersedia di kota Anda, prinsip intervensi dini berbasis bermain tetap bisa dijalankan oleh terapis tumbuh kembang yang berpengalaman.' },
];

addDiagram(`${IMG}/esdm-rutinitas.webp`, svg.flow('Satu putaran rutinitas bermain bersama', 'Pola kegiatan bersama (joint activity routine) dalam ESDM', [
  { h: 'Ikuti minat anak', d: 'Orang dewasa memperhatikan mainan atau kegiatan yang dipilih anak.' },
  { h: 'Bangun permainan', d: 'Orang dewasa ikut bermain dan menjadi bagian dari kegiatan itu.' },
  { h: 'Sisipkan tujuan', d: 'Ada kesempatan meniru, menunjuk, bersuara, atau bergantian.' },
  { h: 'Variasikan', d: 'Permainan dikembangkan agar anak belajar hal baru.' },
  { h: 'Tutup dan pindah', d: 'Permainan diakhiri, lalu anak memilih kegiatan berikutnya.' },
]));
addDiagram(`${IMG}/esdm-ranah.webp`, svg.cards('Ranah sasaran utama ESDM', 'Lima ranah, sosial dan bermain digabung dalam satu kartu', [
  { h: 'Meniru', items: ['Meniru gerakan', 'Meniru bunyi dan kata', 'Meniru cara bermain'] },
  { h: 'Komunikasi nonverbal', items: ['Atensi bersama', 'Menunjuk dan menatap', 'Isyarat tubuh'] },
  { h: 'Komunikasi verbal', items: ['Bunyi dan kata pertama', 'Meminta dan menolak', 'Memberi nama benda'] },
  { h: 'Sosial dan bermain', items: ['Berbagi emosi', 'Bergantian', 'Bermain fungsional'] },
]));

const eBody = [
  p('<strong>Early Start Denver Model (ESDM)</strong> adalah program intervensi dini untuk anak autis usia sangat muda, umumnya 12 sampai 48 bulan, yang memadukan pendekatan perkembangan berbasis bermain dengan teknik perilaku. Dalam ESDM, anak belajar meniru, berkomunikasi, dan berinteraksi melalui permainan serta rutinitas sehari-hari yang dibangun dari minat anak sendiri. Orang tua dilibatkan agar strategi yang sama bisa dipakai di rumah sepanjang hari.'),
  p('Nama ESDM makin sering terdengar di kalangan orang tua anak autis di Indonesia, terutama mereka yang anaknya terdiagnosis sejak usia dua tahun. Namun informasi yang beredar kadang terlalu menjanjikan. Artikel ini membahas pengertian ESDM, asal-usulnya, prinsip dan contoh sesinya, apa kata penelitian secara jujur, perbandingannya dengan pendekatan lain, peran orang tua, dan hal yang perlu ditanyakan sebelum memilih layanan. Untuk gambaran umum dukungan sejak usia dini, baca juga ' + a('intervensi-dini', 'intervensi dini') + '.'),
  toc(eSections),

  '<h2 id="pengertian">Apa itu Early Start Denver Model</h2>',
  p('Menurut rangkuman ' + ext(URL_ESDM_WP, 'ensiklopedia Wikipedia tentang ESDM') + ', ESDM adalah model intervensi untuk anak autis usia dini yang mengajarkan keterampilan melalui rutinitas kegiatan bersama, yaitu permainan dan kegiatan sehari-hari yang dibangun dari pilihan dan inisiatif anak. Tujuan pengajarannya dicapai dengan prosedur perilaku seperti memberi bantuan (prompting), membentuk bertahap (shaping), mengurangi bantuan (fading), dan merangkai langkah (chaining).'),
  p('ESDM umumnya ditujukan untuk anak berusia 12 sampai 48 bulan. Rentang usia ini dipilih karena masa awal kehidupan adalah saat otak berkembang sangat pesat dan anak belajar banyak hal dari interaksi dengan orang di sekitarnya. Banyak anak autis kurang memperhatikan wajah dan suara orang lain, sehingga kesempatan belajar sosialnya berkurang. ESDM berusaha mengembalikan kesempatan itu dengan membuat interaksi sosial terasa menyenangkan bagi anak.'),
  p('Hal yang membedakan ESDM dari banyak program lain adalah tempat dan bentuk belajarnya. Anak tidak harus duduk di meja mengerjakan kartu. Belajar bisa terjadi di lantai sambil bermain balok, di meja makan sambil memilih camilan, atau di kamar mandi sambil bermain air. Pendekatan seperti ini sejalan dengan prinsip ' + a('terapi-bermain', 'terapi bermain') + ', tetapi dengan tujuan yang tertulis, data kemajuan, dan aturan pengambilan keputusan yang jelas.'),
  fig(`${IMG}/esdm-egrang.webp`, 1200, 800, 'Beberapa anak laki-laki bermain egrang bambu dan permainan tradisional lain di lapangan rumput berlatar pohon pisang', 'Anak-anak bermain egrang dan permainan tradisional di Bandung. Permainan yang melibatkan bergantian, meniru gerakan, dan memperhatikan teman melatih keterampilan yang juga dibangun ESDM sejak usia dini, dalam bentuk yang lebih sederhana.', PX(E_EGRANG, 'Tri Martono AS')),

  '<h2 id="sejarah">Asal-usul dan pengembangnya</h2>',
  p('ESDM dikembangkan oleh dua psikolog Amerika Serikat, Sally J. Rogers dan Geraldine Dawson, dengan manual yang terbit pada 2010. Model ini adalah pengembangan dari Denver Model, program berbasis bermain untuk anak autis usia prasekolah yang mulai dikembangkan Rogers dan rekannya pada 1980-an. Denver Model berlandaskan teori perkembangan Piaget dan pada awalnya dikenal sebagai play school model.'),
  p('Dalam versi ESDM, pendekatan perkembangan tersebut digabungkan dengan teknik dari ' + a('pivotal-response-training-prt-autisme', 'pivotal response treatment (PRT)') + ', yang juga menekankan motivasi dan pilihan anak. Wikipedia mencatat bahwa edisi kedua manual ESDM terbit pada Desember 2025 dengan judul baru <em>Early Start Denver Model for Young Autistic Children</em>. Perubahan judul ini mengikuti pergeseran bahasa di dunia autisme yang lebih menghormati cara penyandang autis menyebut diri mereka.'),
  p('Pengembang ESDM menyebut model ini berakar pada analisis perilaku terapan atau ABA. Namun apakah ESDM dapat digolongkan sebagai praktik ABA masih diperdebatkan. Sebagian ahli menempatkannya di antara program ABA, sementara yang lain melihatnya sebagai pendekatan perilaku perkembangan naturalistik yang berbeda dari ABA klasik. Bagi orang tua, yang lebih penting adalah memahami cara kerjanya dan memastikan terapis menjalankannya sesuai manual. Penjelasan tentang ABA sendiri ada di artikel ' + a('terapi-aba', 'terapi ABA') + '.'),

  '<h2 id="prinsip">Prinsip dan cara kerja ESDM</h2>',
  p('Inti ESDM adalah rutinitas kegiatan bersama atau joint activity routine. Orang dewasa memperhatikan apa yang menarik bagi anak, lalu masuk ke dalam permainan itu sebagai teman bermain yang menyenangkan. Dari permainan tersebut, orang dewasa menciptakan banyak kesempatan bagi anak untuk meniru, menatap, menunjuk, bersuara, dan bergantian. Karena kegiatannya disukai anak, motivasi untuk berinteraksi muncul secara alami.'),
  diag(`${IMG}/esdm-rutinitas.webp`, 'Diagram lima langkah rutinitas bermain bersama dalam ESDM: ikuti minat anak, bangun permainan, sisipkan tujuan, variasikan, tutup dan pindah', 'Satu putaran rutinitas bermain bersama. Dalam satu sesi, putaran seperti ini bisa terjadi berkali-kali dengan kegiatan yang berbeda.'),
  p('Wikipedia mencatat lima ranah yang mendapat penekanan khusus dalam ESDM, yaitu kemampuan meniru, komunikasi nonverbal termasuk ' + a('joint-attention-anak-autis-kenapa-penting', 'atensi bersama (joint attention)') + ', komunikasi verbal, perkembangan sosial termasuk berbagi emosi, dan bermain. Kelima ranah ini dipilih karena menjadi fondasi bagi banyak keterampilan lain. Anak yang mulai bisa meniru dan memperhatikan apa yang diperhatikan orang lain akan lebih mudah belajar bahasa dan bermain bersama teman.'),
  p('ESDM juga sangat terstruktur dalam hal pencatatan. Kemampuan anak dinilai dengan Daftar Periksa Kurikulum ESDM, dan penilaian ulang dilakukan setiap 12 minggu. Kemajuan diukur dengan kriteria penguasaan, dan pohon keputusan dipakai untuk menentukan perubahan bila kemajuan anak lambat. Kesetiaan terapis terhadap model diperiksa dengan daftar periksa 13 butir. Struktur ini membedakan ESDM dari sekadar bermain bebas.'),
  diag(`${IMG}/esdm-ranah.webp`, 'Diagram empat kartu ranah sasaran ESDM: meniru, komunikasi nonverbal, komunikasi verbal, serta sosial dan bermain', 'Ranah yang ditekankan ESDM. Ranah sosial dan bermain digabung dalam satu kartu agar mudah dibaca.'),

  '<h2 id="sesi">Seperti apa sesi ESDM berlangsung</h2>',
  p('Bayangkan seorang anak berusia dua tahun yang suka melempar bola ke dalam keranjang. Terapis duduk di lantai, ikut memegang bola, lalu menahan bola sejenak sambil menatap anak dan berkata bola. Ketika anak menatap atau mengeluarkan suara, bola langsung diberikan dan permainan berlanjut. Setelah beberapa kali, terapis mengganti cara bermain, misalnya menggelindingkan bola atau memasukkan bola sambil bertepuk, untuk mengajak anak meniru.'),
  p('Contoh di atas adalah ilustrasi umum, bukan prosedur baku. Dalam praktik, setiap tujuan ditulis berdasarkan hasil asesmen anak. Satu sesi bisa berisi beberapa rutinitas berbeda: bermain balok, bernyanyi dengan gerakan, membaca buku bergambar, dan makan camilan. Di setiap rutinitas, terapis menyisipkan beberapa tujuan sekaligus dan mencatat respons anak. Bila anak bosan, kegiatan diganti dengan pilihan anak berikutnya.'),
  table('Contoh menyisipkan tujuan ESDM dalam rutinitas sehari-hari', ['Rutinitas', 'Tujuan yang bisa disisipkan', 'Contoh kesempatan'], [
    ['Bermain balok', 'Meniru dan bergantian', 'Orang dewasa menyusun dua balok, anak diajak meniru, lalu bergantian menumpuk'],
    ['Makan camilan', 'Meminta dengan isyarat atau kata', 'Camilan ditunjukkan, anak menunjuk atau mengucapkan namanya sebelum diberikan'],
    ['Bernyanyi dengan gerakan', 'Meniru gerakan dan menatap wajah', 'Lagu berhenti di tengah, orang dewasa menunggu anak melanjutkan gerakan'],
    ['Mandi', 'Memberi nama benda dan bagian tubuh', 'Menyebut sabun, air, tangan, kaki sambil bermain air'],
    ['Membaca buku bergambar', 'Atensi bersama dan menunjuk', 'Orang dewasa menunjuk gambar, lalu menunggu anak ikut menunjuk'],
  ]),
  p('Intensitas ESDM berbeda di setiap studi. Dalam uji acak Dawson dan rekan tahun 2010, layanan yang ditawarkan sampai 20 jam per minggu, tetapi anak menerima rata-rata 15,2 jam. Orang tua dilatih dua kali sebulan dan melaporkan memakai strategi ESDM rata-rata 16,3 jam per minggu. Studi lain memakai 12, 15, atau 25 jam per minggu. Angka ini menunjukkan bahwa sebagian besar pembelajaran justru terjadi di luar ruang terapi, dalam keseharian anak bersama keluarganya.'),

  p('Bagi orang tua, catatan data ini sebenarnya kabar baik. Kemajuan anak tidak dinilai dari kesan semata, melainkan dari catatan yang bisa dilihat bersama. Mintalah terapis menunjukkan grafik atau ringkasan kemajuan secara berkala, misalnya setiap kali penilaian ulang 12 minggu dilakukan. Tanyakan tujuan mana yang sudah dikuasai, mana yang masih berjalan, dan apa yang diubah bila sebuah tujuan lama tidak tercapai. Percakapan seperti ini membantu orang tua memahami arah program dan ikut menentukan prioritas, misalnya mendahulukan kemampuan meminta tolong sebelum menyebut nama warna.'),

  '<h2 id="bukti">Apa kata penelitian</h2>',
  p('Penelitian ESDM yang paling sering dikutip adalah ' + ext(URL_DAWSON, 'uji acak terkontrol Dawson dan rekan yang terbit di jurnal Pediatrics pada 2010') + '. Studi ini melibatkan 48 anak yang terdiagnosis autis pada usia 18 sampai 30 bulan dan diikuti selama dua tahun. Kelompok ESDM menunjukkan kemajuan lebih besar dibanding kelompok yang menerima layanan biasa di komunitas, dalam IQ, perilaku adaptif, dan diagnosis. Skor kognitif gabungan kelompok ESDM naik rata-rata 17,6 poin, dibanding 7,0 poin pada kelompok pembanding.'),
  p('Namun penelitian berikutnya memberi gambaran yang lebih beragam. Studi multisite Rogers dan rekan tahun 2019 dengan 118 anak usia 14 sampai 24 bulan menemukan keunggulan bermakna dalam bahasa pada data gabungan, tetapi tidak pada kemampuan perkembangan umum, keparahan autisme, dan perilaku adaptif. Para penulis menyebutnya replikasi sebagian. Studi Geoffray dan rekan tahun 2025 dengan 180 anak di Prancis dan Belgia tidak menemukan perbaikan bermakna pada hasil utamanya setelah 24 bulan, dan penulisnya menyatakan ESDM tidak dapat direkomendasikan secara universal.'),
  p('Tinjauan sistematis juga perlu diperhatikan. Tinjauan Fuller dan rekan tahun 2020 terhadap 12 studi dengan 640 anak menemukan efek sedang, terutama pada kognisi dan bahasa, tetapi tidak pada gejala autisme dan perilaku adaptif. Tinjauan Wang dan rekan tahun 2022 terhadap 11 uji acak menemukan efek bermakna pada kognisi, gejala autisme, dan bahasa. Kritik yang sering muncul adalah bahwa banyak studi melibatkan pengembang aslinya, sehingga diperlukan lebih banyak penelitian independen. Bagi orang tua, kesimpulannya: ESDM menjanjikan, tetapi bukan jaminan, dan respons tiap anak berbeda. Rangkuman penelitian intervensi dini lain ada di artikel ' + a('systematic-review-intervensi-dini-autisme', 'systematic review intervensi dini autisme') + '.'),

  p('Pertanyaan tentang biaya juga sudah diteliti. Wikipedia merangkum analisis Cidav dan rekan tahun 2017 terhadap 39 anak dari studi 2010. Selama masa intervensi, biaya tahunan kelompok ESDM diperkirakan sekitar 14.000 dolar AS lebih tinggi, meskipun perbedaan itu tidak bermakna secara statistik. Setelah intervensi selesai, anak di kelompok ESDM memakai layanan lain sekitar 19.000 dolar AS lebih sedikit per anak per tahun, sehingga biaya awal diperkirakan tertutup dalam beberapa tahun. Waktu yang dicurahkan pengasuh tidak ikut dihitung. Angka ini berasal dari sistem layanan di Amerika Serikat dan tidak bisa langsung diterapkan di Indonesia, tetapi menunjukkan bahwa investasi di usia dini perlu dilihat dalam jangka panjang.'),

  '<h2 id="banding">ESDM dibandingkan pendekatan lain</h2>',
  p('Orang tua sering bingung memilih antara ESDM, ABA klasik, dan terapi lain. ABA klasik, seperti ' + a('metode-lovaas-untuk-anak-autis', 'metode Lovaas') + ', banyak memakai discrete trial teaching, yaitu latihan terstruktur dengan instruksi, respons, dan penguat yang jelas, sering di meja. ESDM memakai prinsip perilaku yang sama tetapi menyisipkannya dalam permainan dan rutinitas yang dipimpin anak. Studi Rogers dan rekan tahun 2021 yang membandingkan ESDM dengan intervensi perilaku berbasis discrete trial tidak menemukan perbedaan efek keseluruhan antara gaya maupun intensitas yang diuji.'),
  p('ESDM juga punya kemiripan dengan ' + a('floor-time-terapi', 'DIR Floortime') + ', yang sama-sama mengikuti minat anak dan menekankan hubungan emosional. Perbedaannya, ESDM memiliki kurikulum tertulis, pencatatan data yang ketat, dan prosedur perilaku yang eksplisit. Pendekatan lain seperti ' + a('hanen-approach-terapi-bahasa-anak', 'Hanen') + ' berfokus melatih orang tua untuk mendukung bahasa anak dalam keseharian. Pada praktiknya banyak anak menerima kombinasi beberapa layanan, misalnya ESDM bersama ' + a('terapi-wicara', 'terapi wicara') + ' dan terapi okupasi.'),
  p('Tidak ada satu pendekatan yang cocok untuk semua anak. Pertimbangkan usia anak, profil kemampuannya, ketersediaan terapis terlatih di kota Anda, biaya, dan waktu yang bisa diberikan keluarga. Pendekatan yang dijalankan dengan konsisten dan melibatkan keluarga sering lebih bermanfaat daripada pendekatan yang secara teori lebih baik tetapi sulit dijalankan. Gambaran berbagai pilihan terapi perilaku ada di artikel ' + a('apa-saja-terapi-perilaku-untuk-autisme', 'terapi perilaku untuk autisme') + '.'),

  '<h2 id="orang-tua">Peran orang tua dalam ESDM</h2>',
  p('Orang tua adalah bagian penting dari ESDM. Ada versi yang dijalankan orang tua, disebut P-ESDM, di mana terapis melatih orang tua untuk memakai strategi ESDM dalam kegiatan sehari-hari. Studi Rogers dan rekan tahun 2012 menguji P-ESDM selama 12 minggu dengan satu jam pertemuan terapis per minggu pada 98 balita berisiko autis. Hasilnya tidak berbeda dari kelompok layanan komunitas, meskipun kedua kelompok sama-sama mengalami kemajuan. Artinya pelatihan orang tua bermanfaat sebagai bagian dari dukungan, tetapi bentuk dan intensitasnya perlu disesuaikan.'),
  fig(`${IMG}/esdm-wayang.webp`, 1200, 800, 'Dua anak laki-laki berbaju hitam duduk di rumput sambil memainkan boneka wayang golek', 'Dua anak bermain boneka wayang di Jawa Barat. Bermain pura-pura dengan boneka memberi banyak kesempatan untuk meniru suara, bergantian bicara, dan berbagi perhatian pada benda yang sama.', PX(E_WAYANG, 'Andreas Suwardy')),
  p('Dalam keseharian, orang tua bisa mulai dari prinsip dasar ESDM. Posisikan diri sejajar dengan wajah anak saat bermain, ikuti minatnya, buat permainan yang membuat anak ingin Anda tetap terlibat, dan beri jeda agar anak punya kesempatan merespons. Hindari bertanya terus-menerus atau mengambil alih permainan. Strategi ini aman dicoba sambil menunggu layanan, tetapi tetap sebaiknya didampingi profesional agar tujuan dan kemajuannya terukur. Ide kegiatan di rumah ada di artikel ' + a('cara-melatih-social-skills-anak-autis-di-rumah', 'melatih social skills anak autis di rumah') + ' dan ' + a('daftar-mainan-edukatif-untuk-anak-autis', 'mainan edukatif untuk anak autis') + '.'),
  p('Rutinitas harian adalah ladang latihan yang paling kaya. Saat memakaikan baju, orang tua bisa berhenti sejenak sebelum memasukkan lengan dan menunggu anak mengulurkan tangan. Saat menyiapkan susu, botol bisa ditunjukkan dan anak diberi kesempatan menunjuk atau bersuara sebelum menerimanya. Saat menyanyikan lagu yang disukai, orang tua bisa berhenti di kata terakhir dan menunggu anak melengkapinya, sekecil apa pun suaranya. Kesempatan seperti ini bisa muncul puluhan kali dalam sehari tanpa perlu waktu khusus. Yang penting, suasananya tetap menyenangkan dan anak tidak merasa dites.'),
  p('Orang tua juga perlu menjaga tenaga sendiri. Menyisipkan latihan sepanjang hari bisa terasa melelahkan bila dilakukan dengan tekanan untuk selalu sempurna. Pilih dua atau tiga rutinitas yang paling sering terjadi dan paling disukai anak, lalu fokus di sana lebih dulu. Libatkan pasangan, kakek nenek, atau pengasuh lain agar strategi yang sama dipakai oleh semua orang di rumah. Bila merasa kewalahan, sampaikan kepada terapis supaya target disesuaikan. Tips menjaga kondisi diri ada di artikel ' + a('self-care-untuk-orang-tua-anak-disabilitas', 'self care untuk orang tua anak disabilitas') + '.'),

  '<h2 id="memilih">Hal yang perlu ditanyakan sebelum memilih</h2>',
  p('Sebelum memilih layanan yang menyebut dirinya ESDM, ajukan beberapa pertanyaan. Apakah terapis pernah mengikuti pelatihan atau sertifikasi ESDM, dan siapa penyelenggaranya. Bagaimana asesmen awal dilakukan dan seberapa sering kemajuan anak dievaluasi. Berapa jam layanan langsung per minggu, dan bagaimana orang tua dilatih untuk melanjutkannya di rumah. Jawaban yang jelas dan terukur adalah tanda layanan yang serius.'),
  p('Waspadai juga janji yang berlebihan. Tidak ada intervensi yang bisa menjamin anak sembuh dari autisme atau hilang diagnosisnya. Penelitian menunjukkan sebagian anak mengalami kemajuan besar, tetapi sebagian lain kemajuannya lebih kecil. Tujuan yang realistis adalah membantu anak berkomunikasi, belajar, dan berinteraksi sebaik mungkin sesuai potensinya. Biaya juga perlu dipertimbangkan sejak awal agar program bisa dijalankan cukup lama. Gambaran umum biaya terapi ada di artikel ' + a('biaya-terapi-anak-autis-per-bulan', 'biaya terapi anak autis per bulan') + '.'),
  p('Bila keluarga Anda tinggal di Yogyakarta dan sekitarnya, mulailah dari layanan tumbuh kembang yang bisa melakukan asesmen menyeluruh, lalu tanyakan pilihan intervensi dini yang tersedia. Daftar tempat terapi bisa dilihat di artikel ' + a('tempat-terapi-anak-jogja', 'tempat terapi anak di Jogja') + '. Apa pun pendekatannya, mulai sedini mungkin, libatkan keluarga, dan evaluasi kemajuan secara rutin adalah tiga prinsip yang selalu berlaku.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(eFaq),
];

articles.push({
  slug: 'early-start-denver-model-esdm',
  titleTag: 'Early Start Denver Model (ESDM) untuk Anak Autis | YUKA',
  metaDesc: 'Early Start Denver Model (ESDM): intervensi dini berbasis bermain untuk anak autis usia 12 sampai 48 bulan. Prinsip, contoh sesi, hasil penelitian, dan peran orang tua.',
  keywords: 'early start denver model esdm, ESDM autisme, intervensi dini autis, terapi bermain autis, P-ESDM',
  ogTitle: 'Early Start Denver Model (ESDM)',
  ogDesc: 'Panduan ESDM untuk orang tua: cara kerja, contoh sesi, bukti penelitian, dan hal yang perlu ditanyakan sebelum memilih layanan.',
  h1: 'Early Start Denver Model (ESDM): Intervensi Dini Berbasis Bermain untuk Anak Autis',
  crumb: 'Early Start Denver Model',
  category: 'Terapi',
  datePublished: '2026-11-23T08:00:00+07:00', dateModified: '2026-11-23T08:00:00+07:00',
  dateDisplay: '23 November 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/esdm-hero.webp`, w: 1200, h: 800,
    alt: 'Empat anak laki-laki berdiri mengelilingi lesung kayu panjang di halaman semen sambil bermain bersama',
    caption: 'Anak-anak bermain dengan benda kayu di Yogyakarta. ESDM memakai permainan dan kegiatan bersama sebagai sarana utama belajar.',
    credit: PX(E_HERO, 'Andri Wijayanto'),
  },
  bodyHtml: eBody.join('\n'), faq: eFaq,
  related: [
    { href: '/artikel/terapi-aba', title: 'Terapi ABA', desc: 'Prinsip analisis perilaku terapan untuk anak autis.' },
    { href: '/artikel/pivotal-response-training-prt-autisme', title: 'Pivotal Response Training', desc: 'Pendekatan naturalistik yang menjadi salah satu dasar ESDM.' },
    { href: '/artikel/intervensi-dini', title: 'Intervensi Dini', desc: 'Mengapa dukungan sejak usia dini penting.' },
  ],
  tags: ['ESDM', 'IntervensiDini', 'Autisme'],
  sources: [
    { url: URL_ESDM_WP, label: 'Wikipedia: Early Start Denver Model (sejarah, prinsip, intensitas, ringkasan studi dan tinjauan)' },
    { url: URL_DAWSON, label: 'Dawson G, dkk. (2010). Randomized, controlled trial of an intervention for toddlers with autism: the Early Start Denver Model. Pediatrics' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Angka penelitian dikutip dari ringkasan studi yang dirujuk. Contoh sesi dan rutinitas di artikel ini adalah ilustrasi umum, bukan program terapi. Program intervensi untuk anak tertentu disusun berdasarkan asesmen oleh profesional.',
});


// ---------------------------------------------------------------------------
// Artikel 4: twice exceptional (2e) (24 Nov 2026)
// Keyword: "twice exceptional anak" (tab Riset Keyword Batch 4, baris 265)
// ---------------------------------------------------------------------------
const URL_2E_WP = 'https://en.wikipedia.org/wiki/Twice_exceptional';
const URL_2E_TEA = 'https://gtfamilytoolkit.tea.texas.gov/resources/twice-exceptional-2e';
const T2_HERO = 'https://www.pexels.com/photo/indonesian-students-in-classroom-exam-setting-31940733/';
const T2_UJIAN = 'https://www.pexels.com/photo/indonesian-high-school-students-in-classroom-35865718/';
const T2_LAPANGAN = 'https://www.pexels.com/photo/basketball-court-2968077/';

const wSections = [
  ['pengertian', 'Apa itu twice exceptional'],
  ['kombinasi', 'Kombinasi yang sering ditemui'],
  ['menutupi', 'Ketika kelebihan dan kesulitan saling menutupi'],
  ['tanda', 'Tanda yang bisa diamati orang tua dan guru'],
  ['identifikasi', 'Mengapa anak 2e sering terlewat'],
  ['sekolah', 'Strategi belajar di sekolah'],
  ['rumah', 'Dukungan di rumah dan sisi emosional'],
  ['indonesia', 'Konteks layanan di Indonesia'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const wFaq = [
  { q: 'Apa arti twice exceptional pada anak?', a: 'Twice exceptional atau 2e adalah istilah untuk anak yang memiliki kecerdasan atau bakat istimewa di satu bidang atau lebih, sekaligus memiliki satu atau lebih kondisi seperti disleksia, ADHD, atau autisme. Disebut dua kali istimewa karena anak membutuhkan dukungan untuk kelebihannya dan juga untuk kesulitannya.' },
  { q: 'Siapa yang pertama memakai istilah twice exceptional?', a: 'Menurut rangkuman Wikipedia, istilah ini pertama muncul dalam artikel James J. Gallagher tahun 1988 tentang agenda nasional pendidikan anak berbakat di Amerika Serikat. Gerakan pendidikannya sendiri sudah dimulai pada awal 1970-an dengan sebutan pendidikan anak berbakat dengan hambatan.' },
  { q: 'Apakah anak autis bisa termasuk twice exceptional?', a: 'Bisa. Autisme termasuk kondisi yang sering disebut dalam pembahasan twice exceptional, bersama ADHD dan kesulitan belajar spesifik seperti disleksia. Seorang anak autis yang sangat menonjol di matematika, musik, atau bidang lain dapat dianggap 2e bila kedua sisinya dinilai oleh profesional.' },
  { q: 'Mengapa anak 2e sering tidak terdeteksi?', a: 'Kelebihan anak bisa menutupi kesulitannya sehingga nilainya tampak rata-rata, atau sebaliknya kesulitannya begitu terlihat sehingga bakatnya tidak diperhatikan. Penilaian yang hanya memakai satu skor IQ juga bisa menyesatkan. Tanda kesulitan sering baru muncul ketika tuntutan sekolah meningkat.' },
  { q: 'Bagaimana cara memastikan anak twice exceptional?', a: 'Diperlukan asesmen menyeluruh oleh psikolog, yang melihat profil kemampuan secara rinci, bukan hanya skor total. Asesmen ini biasanya dipadukan dengan pengamatan guru, contoh hasil kerja anak, dan riwayat perkembangan. Diagnosis kondisi penyerta seperti ADHD atau autisme ditegakkan oleh profesional yang berwenang.' },
  { q: 'Apakah anak 2e sebaiknya masuk kelas akselerasi atau kelas inklusi?', a: 'Tidak ada jawaban tunggal. Yang dibutuhkan anak 2e adalah tantangan di bidang kekuatannya dan dukungan di bidang kesulitannya secara bersamaan. Sebagian anak cocok di sekolah inklusi dengan pengayaan, sebagian lain membutuhkan kombinasi program pengayaan dan akomodasi. Diskusikan bersama sekolah dan psikolog yang memahami profil anak.' },
  { q: 'Apa yang paling dibutuhkan anak twice exceptional?', a: 'Pendekatan yang berangkat dari kekuatan. Mengajar lewat kemampuan anak, bukan hanya memperbaiki kekurangannya, membantu anak tetap termotivasi dan percaya diri. Anak juga membutuhkan strategi kompensasi, akomodasi seperti tambahan waktu, dan kemampuan menyuarakan kebutuhannya sendiri.' },
  { q: 'Apakah istilah twice exceptional masih tepat dipakai?', a: 'Istilah ini masih banyak dipakai dalam dunia pendidikan, tetapi sebagian komunitas neurodivergen mengkritiknya dan menyarankan bahasa yang lebih netral. Yang lebih penting dari labelnya adalah memahami profil anak secara utuh, termasuk kelebihan dan kebutuhannya.' },
];

addDiagram(`${IMG}/twice-exceptional-profil.webp`, svg.grid('Tiga pola anak 2e di kelas', 'Bagaimana kelebihan dan kesulitan bisa terlihat oleh guru', ['Pola', 'Yang terlihat', 'Risikonya'], [
  ['Bakat menonjol, kesulitan tertutup', 'Dianggap pintar tapi kurang berusaha', 'Kesulitan tidak pernah ditangani'],
  ['Kesulitan menonjol, bakat tertutup', 'Dianggap hanya punya hambatan belajar', 'Bakat tidak pernah dikembangkan'],
  ['Saling menutupi', 'Nilai tampak rata-rata, tidak menonjol', 'Kedua sisi sama-sama terlewat'],
], [330, 400, 378]));
addDiagram(`${IMG}/twice-exceptional-dukungan.webp`, svg.cards('Dua sisi dukungan untuk anak 2e', 'Tantangan dan dukungan diberikan bersamaan, bukan bergantian', [
  { h: 'Mengembangkan kekuatan', items: ['Pengayaan di bidang minat', 'Proyek dan pertanyaan terbuka', 'Mentor atau klub sesuai bakat'], color: '#2B3A67' },
  { h: 'Mendukung kesulitan', items: ['Akomodasi seperti tambahan waktu', 'Strategi kompensasi dan alat bantu', 'Terapi sesuai kondisi penyerta'], color: '#00838F' },
  { h: 'Menguatkan diri', items: ['Mengenal profil diri', 'Belajar menyuarakan kebutuhan', 'Dukungan emosional'], color: '#B8860B' },
]));

const wBody = [
  p('<strong>Twice exceptional</strong>, sering disingkat <strong>2e</strong>, adalah istilah untuk anak yang memiliki kecerdasan atau bakat istimewa sekaligus kondisi yang membuatnya kesulitan belajar atau beradaptasi, misalnya disleksia, ADHD, atau autisme. Anak seperti ini disebut dua kali istimewa karena ia membutuhkan dukungan untuk dua sisi sekaligus: tantangan untuk mengembangkan kelebihannya dan bantuan untuk mengatasi kesulitannya.'),
  p('Banyak orang tua mengenali gambaran ini tanpa tahu namanya. Anaknya bisa bercerita panjang tentang tata surya dengan kosakata orang dewasa, tetapi kesulitan menulis satu paragraf. Atau anaknya cepat sekali memecahkan soal logika, tetapi sering lupa membawa buku dan tidak bisa duduk tenang. Artikel ini membahas pengertian twice exceptional, kombinasi yang sering ditemui, mengapa anak 2e sering terlewat, tanda yang bisa diamati, strategi di sekolah dan di rumah, serta konteksnya di Indonesia. Untuk memahami istilah keragaman perkembangan secara umum, baca juga ' + a('neurodivergent-vs-neurotypical-perbedaan', 'neurodivergent dan neurotypical') + '.'),
  toc(wSections),

  '<h2 id="pengertian">Apa itu twice exceptional</h2>',
  p('Menurut rangkuman ' + ext(URL_2E_WP, 'Wikipedia tentang twice exceptional') + ', istilah 2e merujuk pada orang yang berbakat sekaligus neurodivergen. Istilah ini pertama muncul dalam artikel James J. Gallagher tahun 1988 tentang agenda nasional pendidikan anak berbakat di Amerika Serikat, sementara gerakan pendidikannya sudah dimulai sejak awal 1970-an. Istilah lain yang kadang dipakai untuk menggambarkan pola yang sama adalah profil kemampuan yang tidak rata atau spiky profile.'),
  p('Panduan keluarga dari ' + ext(URL_2E_TEA, 'Badan Pendidikan Negara Bagian Texas (TEA)') + ' merumuskan bahwa pelajar 2e adalah anak berbakat yang juga memiliki satu atau lebih disabilitas, dan memiliki potensi untuk berprestasi tinggi. Panduan itu juga menekankan bahwa kontras yang tajam antara kekuatan dan kesulitan anak bisa menimbulkan pandangan negatif dari orang dewasa, teman, bahkan dari diri anak sendiri. Pelajar 2e sangat beragam dan sering tidak cocok dengan satu jenis program saja.'),
  p('Perlu diingat bahwa berbakat di sini tidak selalu berarti juara kelas atau IQ sangat tinggi di semua bidang. Bakat bisa terlihat di bidang tertentu, misalnya matematika, bahasa, sains, seni, musik, atau kepemimpinan. Pandangan tentang ' + a('kecerdasan-majemuk', 'kecerdasan majemuk') + ' membantu orang tua dan guru melihat bahwa kemampuan anak tidak hanya terbaca dari nilai rapor. Begitu pula kesulitannya, yang bisa ringan sampai berat dan tidak selalu tampak dari luar.'),
  fig(`${IMG}/twice-exceptional-ujian.webp`, 1200, 809, 'Siswa SMA berseragam putih menulis di meja kelas, siswi berkerudung di belakangnya ikut mengerjakan tugas', 'Siswa SMA di Indonesia sedang belajar di kelas. Anak 2e bisa sangat menonjol dalam diskusi atau kompetisi, sekaligus kesulitan dengan tugas yang tampak mudah bagi temannya.', PX(T2_UJIAN, 'Airlangga Jati')),

  '<h2 id="kombinasi">Kombinasi yang sering ditemui</h2>',
  p('Twice exceptional bukan diagnosis tersendiri, melainkan gambaran gabungan dua sisi. Wikipedia menyoroti autisme dan ADHD sebagai kondisi yang sering dibahas bersama keberbakatan. Panduan TEA juga memberi contoh lain, yaitu kesulitan belajar spesifik seperti disleksia, disgrafia, dan kesulitan matematika, gangguan emosi, gangguan bicara atau bahasa, serta cedera otak traumatis. Tabel berikut merangkum beberapa kombinasi yang sering ditemui beserta gambaran umumnya di kelas.'),
  table('Contoh kombinasi twice exceptional dan gambarannya di kelas', ['Kondisi penyerta', 'Gambaran kesulitan menurut panduan TEA', 'Contoh kekuatan yang bisa menyertai'], [
    ['Kesulitan belajar spesifik (' + a('disleksia-adalah', 'disleksia') + ', ' + a('disgrafia-adalah', 'disgrafia') + ')', 'Kemampuan tidak rata, kesulitan membaca, menulis, atau berhitung walau pengajaran sudah baik', 'Penalaran lisan kuat, kosakata luas, pemecahan masalah visual'],
    ['ADHD', 'Sulit mempertahankan fokus, memulai atau menyelesaikan tugas, impulsif, gelisah, cepat lelah secara mental', 'Ide kreatif, energi tinggi untuk topik yang diminati'],
    ['Autisme', 'Tantangan interaksi sosial, sulit membaca bahasa tubuh, minat intens dan sempit, respons sensorik berbeda', 'Pengetahuan mendalam di bidang minat, perhatian pada detail'],
    ['Gangguan emosi', 'Emosi kuat, sulit berteman, menghindari sekolah, keluhan fisik saat tertekan', 'Kepekaan tinggi, empati, ekspresi artistik'],
  ]),
  p('Kolom kekuatan pada tabel di atas adalah contoh umum, bukan ciri yang pasti dimiliki setiap anak. Setiap anak 2e memiliki profil yang unik. Ada anak autis yang sangat menonjol di musik, ada anak ADHD yang unggul di sains, dan ada anak disleksia yang sangat kuat dalam bercerita lisan. Untuk memahami masing-masing kondisi, baca ' + a('adhd-adalah', 'pengertian ADHD') + ', ' + a('autisme-ringan-seperti-apa', 'autisme ringan') + ', dan ' + a('gangguan-belajar-spesifik', 'gangguan belajar spesifik') + '.'),

  p('Wikipedia juga menyebut sindrom savant sebagai bentuk ekstrem dari twice exceptional, yaitu kondisi ketika seseorang dengan disabilitas perkembangan menunjukkan kemampuan luar biasa di bidang yang sangat spesifik, seperti menghitung kalender, mengingat detail, atau memainkan musik. Kasus seperti ini sangat jarang dan sering diangkat dalam film, sehingga membentuk anggapan keliru bahwa semua anak autis pasti punya bakat luar biasa. Kenyataannya, kebanyakan anak 2e tidak seperti tokoh film. Kelebihan mereka bisa lebih sederhana, misalnya penalaran yang tajam, rasa ingin tahu yang besar, atau kreativitas, dan tetap layak dikembangkan.'),

  '<h2 id="menutupi">Ketika kelebihan dan kesulitan saling menutupi</h2>',
  p('Salah satu ciri yang paling sering dibicarakan tentang anak 2e adalah efek saling menutupi atau masking. Wikipedia menjelaskan bahwa kelebihan anak bisa mengompensasi kekurangannya, sementara kekurangannya bisa membuat kelebihannya kurang terlihat. Wikipedia juga mencatat bahwa teori ini belum dikonfirmasi oleh penelitian empiris, sehingga sebaiknya dipahami sebagai pola yang sering diamati di lapangan, bukan hukum yang pasti.'),
  diag(`${IMG}/twice-exceptional-profil.webp`, 'Tabel visual tiga pola anak twice exceptional di kelas: bakat menonjol dengan kesulitan tertutup, kesulitan menonjol dengan bakat tertutup, dan saling menutupi', 'Tiga pola yang sering diamati guru. Setiap pola punya risiko berbeda, sehingga anak 2e perlu dilihat dari dua sisi sekaligus.'),
  p('Dalam praktik, ada tiga pola yang sering terlihat. Pertama, anak yang bakatnya menonjol sehingga kesulitannya tertutup. Ia dianggap pintar tetapi malas atau kurang berusaha. Kedua, anak yang kesulitannya sangat terlihat sehingga bakatnya tidak diperhatikan, misalnya anak yang hanya dikenal sebagai anak yang sulit membaca. Ketiga, anak yang kelebihan dan kesulitannya saling menetralkan sehingga nilainya tampak rata-rata. Pola ketiga ini paling mudah terlewat, karena anak tidak tampak membutuhkan program apa pun.'),
  p('Akibatnya bisa serius bagi anak. Wikipedia mencatat pandangan bahwa kegagalan berulang pada tugas yang tampak mudah bagi teman-temannya bisa memicu frustrasi, kecemasan, bahkan suasana hati yang menurun dan rasa percaya diri yang rendah. Sebagian siswa menarik diri di kelas, sebagian lain justru menjadi badut kelas untuk menutupi kesulitannya. Memahami pola ini membantu orang dewasa berhenti melabeli anak sebagai malas atau nakal.'),

  '<h2 id="tanda">Tanda yang bisa diamati orang tua dan guru</h2>',
  p('Tidak ada daftar ciri yang bisa memastikan seorang anak 2e tanpa asesmen. Namun beberapa pola layak dicatat dan didiskusikan. Kesenjangan yang mencolok antara kemampuan lisan dan tulisan, misalnya anak bisa menjelaskan konsep rumit tetapi kesulitan menuliskannya. Minat yang sangat dalam pada topik tertentu disertai kesulitan mengerjakan tugas rutin. Kemampuan memecahkan masalah yang kompleks, tetapi sering kehilangan barang, lupa instruksi, atau sulit mengatur waktu.'),
  p('Tanda emosional juga perlu diperhatikan. Panduan TEA dan Wikipedia sama-sama mencatat bahwa anak 2e bisa kesulitan dalam hubungan dengan teman, bereaksi kuat terhadap kritik, dan bertindak impulsif. Anak mungkin sangat keras pada dirinya sendiri karena merasa seharusnya bisa, tetapi kenyataannya tidak bisa. Kalimat seperti aku bodoh dari anak yang jelas cerdas adalah sinyal yang tidak boleh diabaikan.'),
  p('Panduan TEA menyarankan orang tua untuk mencocokkan ciri-ciri dengan perilaku anak dan mencatat yang sesuai, lalu menyampaikan kekhawatiran kepada guru kelas. Ajak anak berbicara lebih dulu untuk memahami apa yang ia rasakan, karena sudut pandangnya bisa berbeda dari yang terjadi di sekolah. Saat bertemu guru, mulailah dengan hal positif dan bawa contoh hasil kerja yang menunjukkan kekuatan dan kesulitan anak. Lalu sepakati cara memantau kemajuan dan jadwalkan pertemuan lanjutan.'),

  p('Guru juga dapat membantu dengan mengamati pola, bukan hanya nilai akhir. Perhatikan apakah siswa menjawab sangat baik saat diskusi lisan tetapi hasil ulangan tertulisnya rendah, apakah ia cepat bosan dengan latihan berulang tetapi bersemangat pada soal yang menantang, atau apakah kesulitannya hanya muncul di jenis tugas tertentu. Catatan pengamatan seperti ini sangat berguna bagi psikolog ketika asesmen dilakukan, karena memberi gambaran perilaku anak di kelas yang tidak terlihat di ruang tes.'),

  '<h2 id="identifikasi">Mengapa anak 2e sering terlewat</h2>',
  p('Wikipedia menjelaskan bahwa identifikasi formal anak 2e memerlukan penilaian terhadap dua keistimewaan yang terpisah. Kesulitannya, ciri keberbakatan kadang menyerupai gangguan belajar sehingga anak berbakat bisa salah didiagnosis, sementara penggunaan satu skor IQ saja dapat membuat anak 2e dengan kesulitan belajar salah teridentifikasi. Skor total yang rata-rata bisa menyembunyikan skor sangat tinggi di satu bagian dan skor rendah di bagian lain.'),
  p('Tanda kesulitan sering baru muncul ketika tuntutan sekolah meningkat, misalnya saat anak naik ke kelas yang membutuhkan banyak menulis, membaca mandiri, atau mengatur tugas sendiri. Di kelas awal, kecerdasan anak masih cukup untuk menutupi kesulitannya. Begitu tuntutan bertambah, strategi itu tidak lagi cukup dan nilainya mulai turun. Orang tua dan guru sering bingung karena anak yang sebelumnya baik tiba-tiba tampak kesulitan.'),
  p('Karena itu asesmen anak 2e sebaiknya dilakukan oleh psikolog yang terbiasa membaca profil kemampuan secara rinci, bukan sekadar melaporkan skor total. Asesmen dipadukan dengan pengamatan guru, contoh hasil kerja, dan riwayat perkembangan. Informasi tentang proses ini ada di artikel ' + a('asesmen-akademik-anak-berkebutuhan-khusus', 'asesmen akademik anak berkebutuhan khusus') + ', ' + a('berapa-iq-anak-yang-normal', 'rentang IQ anak') + ', dan ' + a('tes-psikolog-anak-bayar-berapa', 'tes psikolog anak') + '.'),

  '<h2 id="sekolah">Strategi belajar di sekolah</h2>',
  p('Wikipedia menjelaskan bahwa pendidikan untuk anak 2e memadukan pendidikan khusus dan pendidikan anak berbakat dalam pendekatan yang berbasis kekuatan dan terdiferensiasi. Salah satu temuan yang dirangkum di sana menunjukkan bahwa mengajar lewat kemampuan siswa, bukan lewat disabilitasnya, meningkatkan skor konsep diri. Artinya anak 2e tidak cukup hanya diberi remedial. Ia juga perlu tantangan yang sesuai dengan kemampuannya.'),
  diag(`${IMG}/twice-exceptional-dukungan.webp`, 'Diagram tiga kartu dukungan untuk anak twice exceptional: mengembangkan kekuatan, mendukung kesulitan, dan menguatkan diri', 'Tiga sisi dukungan untuk anak 2e. Pengayaan dan akomodasi diberikan bersamaan, sambil membantu anak mengenal dan menyuarakan kebutuhannya.'),
  p('Dukungan yang disebut dalam rangkuman tersebut meliputi dorongan, strategi kompensasi, akomodasi waktu, dan keterampilan menyuarakan kebutuhan diri. Contoh penerapannya di kelas: anak dengan disgrafia boleh menjawab secara lisan atau mengetik, anak ADHD mendapat tugas yang dipecah menjadi bagian kecil dengan jeda bergerak, dan anak autis mendapat jadwal visual serta peringatan sebelum perubahan kegiatan. Pada saat yang sama, anak diberi soal pengayaan, proyek, atau pertanyaan terbuka di bidang kekuatannya.'),
  p('Pendekatan seperti ' + a('diferensiasi-pembelajaran-untuk-anak-abk', 'diferensiasi pembelajaran') + ' dan ' + a('universal-design-for-learning-udl-abk', 'Universal Design for Learning') + ' sangat membantu, karena memberi banyak cara bagi siswa untuk menerima materi dan menunjukkan pemahamannya. ' + a('program-pembelajaran-individual', 'Program pembelajaran individual') + ' juga bisa memuat tujuan pengayaan, bukan hanya tujuan perbaikan. Wikipedia mencatat bahwa karena sedikit sekolah yang punya program khusus, sebagian keluarga memilih ' + a('homeschooling-anak-berkebutuhan-khusus', 'homeschooling') + ' atau sekolah daring sebagai alternatif.'),
  p('Sebagai ilustrasi, bayangkan seorang siswa kelas empat yang sangat menyukai dinosaurus dan bisa menjelaskan zaman purba dengan rinci, tetapi tulisannya sulit dibaca dan ia sering tidak menyelesaikan tugas mengarang. Guru bisa memberinya proyek tentang dinosaurus yang hasilnya boleh berupa presentasi lisan, poster bergambar, atau rekaman suara. Kemampuan menulisnya tetap dilatih, tetapi dalam porsi kecil dengan alat bantu seperti kerangka kalimat atau mengetik di komputer. Dengan cara ini anak tetap merasakan keberhasilan di bidang kekuatannya, sementara kesulitannya ditangani tanpa membuatnya merasa gagal setiap hari. Contoh ini ilustrasi umum, dan rencana untuk anak tertentu disusun bersama guru dan psikolog.'),
  fig(`${IMG}/twice-exceptional-lapangan.webp`, 1200, 1601, 'Foto udara lapangan basket sekolah berwarna hijau dan merah dengan tiang bendera merah putih di depannya, beberapa siswa bermain di lapangan', 'Lapangan olahraga sebuah sekolah di Tegal, Jawa Tengah, dilihat dari atas. Bakat anak 2e tidak selalu akademik. Olahraga, seni, dan klub ekstrakurikuler bisa menjadi tempat kekuatannya berkembang.', PX(T2_LAPANGAN, 'Alfin Auzikri')),

  '<h2 id="rumah">Dukungan di rumah dan sisi emosional</h2>',
  p('Di rumah, orang tua bisa membantu anak mengenal profil dirinya. Jelaskan dengan bahasa sederhana bahwa otaknya sangat kuat di beberapa hal dan butuh cara lain di hal yang lain, dan bahwa itu bukan tanda ia bodoh atau malas. Pemahaman ini menjadi dasar keterampilan menyuarakan kebutuhan sendiri, misalnya meminta guru memberi waktu tambahan atau izin mengetik jawaban.'),
  p('Beri ruang yang cukup untuk minat anak. Klub, kursus, buku, atau mentor di bidang yang ia sukai bisa menjadi sumber rasa percaya diri yang sangat besar, terutama ketika ia sedang kesulitan di sekolah. Di sisi lain, bantu anak dengan strategi praktis untuk kesulitannya, misalnya daftar periksa, pengingat visual, atau alat bantu teknologi. Alat bantu belajar untuk anak disleksia dibahas di artikel ' + a('alat-bantu-belajar-anak-disleksia', 'alat bantu belajar anak disleksia') + '.'),
  p('Perhatikan juga kesehatan emosional anak. Kritik keras, perbandingan dengan saudara atau teman, dan tuntutan untuk selalu juara bisa memperberat tekanan yang sudah ia rasakan. Puji usaha dan strategi, bukan hanya hasil. Bila anak tampak cemas, murung, atau menghindari sekolah, jangan ragu mencari bantuan psikolog. Informasi tentang kecemasan dan sisi emosional anak ada di artikel ' + a('gangguan-kecemasan-anak', 'gangguan kecemasan anak') + ' dan ' + a('empati-pada-anak-berkebutuhan-khusus', 'empati pada anak berkebutuhan khusus') + '.'),

  p('Jalin komunikasi yang rutin dengan sekolah. Anak 2e sering menunjukkan wajah yang berbeda di rumah dan di sekolah, sehingga orang tua dan guru perlu saling berbagi pengamatan. Buku penghubung, pesan singkat mingguan, atau pertemuan singkat setiap akhir bulan bisa dipakai untuk mencatat apa yang berjalan baik dan apa yang perlu diubah. Saat ada masalah, fokuskan pembicaraan pada strategi yang bisa dicoba, bukan mencari siapa yang salah. Keterlibatan orang tua dalam pendidikan inklusi dibahas lebih lanjut di artikel ' + a('peran-orang-tua-pendidikan-inklusi', 'peran orang tua dalam pendidikan inklusi') + '.'),

  '<h2 id="indonesia">Konteks layanan di Indonesia</h2>',
  p('Di Indonesia, kebijakan pendidikan inklusif sejak awal mencakup dua kelompok ini. Peraturan Menteri Pendidikan Nasional Nomor 70 Tahun 2009 berjudul Pendidikan Inklusif bagi Peserta Didik yang Memiliki Kelainan dan Memiliki Potensi Kecerdasan dan/atau Bakat Istimewa. Judul itu menunjukkan bahwa sekolah inklusi tidak hanya melayani anak dengan hambatan, tetapi juga anak dengan potensi kecerdasan atau bakat istimewa. Anak 2e berada di persimpangan keduanya. Penjelasan kebijakan inklusi lebih lengkap ada di artikel ' + a('kebijakan-pendidikan-inklusi-di-indonesia', 'kebijakan pendidikan inklusi di Indonesia') + '.'),
  p('Dalam praktik, layanan untuk anak berbakat dan layanan untuk anak berkebutuhan khusus sering berjalan terpisah, sehingga anak 2e mudah jatuh di celah keduanya. Orang tua bisa menjembatani dengan membawa hasil asesmen ke sekolah, meminta pertemuan bersama guru kelas dan ' + a('gpk-adalah', 'guru pendamping khusus') + ', dan mengusulkan program yang memuat pengayaan sekaligus akomodasi. Sekolah inklusi yang baik akan melihat anak secara utuh, bukan hanya dari satu sisi.'),
  p('Ada beberapa langkah praktis yang bisa ditempuh orang tua di Indonesia. Pertama, lakukan asesmen psikologis yang menghasilkan laporan profil kemampuan secara rinci, bukan hanya angka IQ. Kedua, bawa laporan itu ke sekolah dan minta bagian yang relevan diterjemahkan menjadi rekomendasi yang bisa dijalankan guru, misalnya jenis akomodasi dan bidang pengayaan. Ketiga, cari kegiatan di luar sekolah yang sesuai minat anak, seperti klub sains, sanggar seni, atau komunitas pemrograman, agar bakatnya tetap terasah meskipun sekolah belum punya program khusus. Keempat, evaluasi kembali setiap semester, karena kebutuhan anak berubah seiring naiknya tuntutan belajar.'),
  p('Yang paling penting, ingatlah bahwa label hanyalah alat untuk membuka akses dukungan. Wikipedia mencatat bahwa istilah twice exceptional pun dikritik sebagian komunitas neurodivergen. Apa pun sebutannya, tujuan kita sama: anak memahami dirinya, kelebihannya berkembang, kesulitannya didukung, dan ia tumbuh dengan rasa percaya diri. Bila Anda ingin berdiskusi tentang pendidikan inklusi untuk anak Anda, pelajari juga ' + a('pendidikan-inklusi', 'prinsip pendidikan inklusi') + '.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(wFaq),
];

articles.push({
  slug: 'twice-exceptional-anak',
  titleTag: 'Twice Exceptional Anak: Berbakat dan Berkebutuhan Khusus | YUKA',
  metaDesc: 'Twice exceptional (2e) adalah anak berbakat yang juga punya kondisi seperti disleksia, ADHD, atau autisme. Tanda, pola saling menutupi, identifikasi, dan strategi dukungan.',
  keywords: 'twice exceptional anak, anak 2e, anak berbakat berkebutuhan khusus, gifted ADHD, gifted autisme, cerdas istimewa',
  ogTitle: 'Twice Exceptional pada Anak',
  ogDesc: 'Panduan anak twice exceptional (2e) untuk orang tua dan guru: kombinasi yang sering ditemui, tanda, identifikasi, dan strategi di sekolah serta di rumah.',
  h1: 'Twice Exceptional pada Anak: Ketika Bakat dan Kebutuhan Khusus Hadir Bersamaan',
  crumb: 'Twice Exceptional pada Anak',
  category: 'Pendidikan',
  datePublished: '2026-11-24T08:00:00+07:00', dateModified: '2026-11-24T08:00:00+07:00',
  dateDisplay: '24 November 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/twice-exceptional-hero.webp`, w: 1200, h: 675,
    alt: 'Ruang kelas yang terang di Malang, siswa berseragam putih duduk di bangku berjajar mengerjakan ujian tertulis',
    caption: 'Siswa mengerjakan ujian di sebuah sekolah di Malang. Anak twice exceptional bisa berprestasi tinggi di satu bidang, sekaligus membutuhkan dukungan untuk kesulitan yang tidak selalu terlihat dari nilai ujian.',
    credit: PX(T2_HERO, 'Haidar Azmi'),
  },
  bodyHtml: wBody.join('\n'), faq: wFaq,
  related: [
    { href: '/artikel/kecerdasan-majemuk', title: 'Kecerdasan Majemuk', desc: 'Melihat kemampuan anak dari banyak sisi.' },
    { href: '/artikel/gangguan-belajar-spesifik', title: 'Gangguan Belajar Spesifik', desc: 'Disleksia, disgrafia, dan diskalkulia pada anak.' },
    { href: '/artikel/diferensiasi-pembelajaran-untuk-anak-abk', title: 'Diferensiasi Pembelajaran', desc: 'Menyesuaikan pengajaran dengan kebutuhan siswa yang beragam.' },
  ],
  tags: ['TwiceExceptional', 'AnakBerbakat', 'PendidikanInklusi'],
  sources: [
    { url: URL_2E_WP, label: 'Wikipedia: Twice exceptional (definisi, sejarah istilah, identifikasi, pendekatan pendidikan)' },
    { url: URL_2E_TEA, label: 'Texas Education Agency, G/T Family Toolkit: Twice-Exceptional (2E)' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum untuk orang tua dan pendidik. Identifikasi anak twice exceptional dan diagnosis kondisi penyerta dilakukan oleh psikolog atau profesional yang berwenang.',
});


// ---------------------------------------------------------------------------
// Artikel 5: sindrom fragile X (25 Nov 2026)
// Keyword: "sindrom fragile x" (tab Riset Keyword Batch 4, baris 225)
// ---------------------------------------------------------------------------
const URL_CDC_FX = 'https://www.cdc.gov/fragile-x-syndrome/about/index.html';
const URL_MP_FX = 'https://medlineplus.gov/genetics/condition/fragile-x-syndrome/';
const F_HERO = 'https://www.pexels.com/photo/indonesian-school-children-walking-after-class-32218913/';
const F_MAIN = 'https://www.pexels.com/photo/children-playing-traditional-game-outdoors-in-indonesia-35347861/';
const F_RAMAI = 'https://www.pexels.com/photo/children-holding-indonesia-flags-13389844/';

const fSections = [
  ['pengertian', 'Apa itu sindrom fragile X'],
  ['penyebab', 'Penyebab: perubahan gen FMR1'],
  ['ciri', 'Ciri perkembangan, perilaku, dan fisik'],
  ['autisme', 'Hubungan dengan autisme dan ADHD'],
  ['diagnosis', 'Diagnosis dan konseling genetik'],
  ['penanganan', 'Penanganan dan intervensi'],
  ['sekolah', 'Strategi belajar di sekolah'],
  ['keluarga', 'Dukungan untuk keluarga'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const fFaq = [
  { q: 'Apa itu sindrom fragile X?', a: 'Sindrom fragile X adalah kelainan genetik yang menurut CDC termasuk salah satu penyebab paling umum disabilitas intelektual yang diturunkan. Kondisi ini disebabkan perubahan pada gen FMR1 sehingga tubuh tidak membuat protein FMRP yang dibutuhkan untuk perkembangan otak.' },
  { q: 'Seberapa sering sindrom fragile X terjadi?', a: 'Angka pastinya belum diketahui. CDC menyebut sebuah tinjauan penelitian memperkirakan sekitar 1 dari 7.000 laki-laki dan 1 dari 11.000 perempuan telah terdiagnosis sindrom fragile X. MedlinePlus mencantumkan perkiraan sekitar 1 dari 4.000 laki-laki dan 1 dari 8.000 perempuan. Perbedaan angka ini wajar karena metode dan populasi penelitiannya berbeda.' },
  { q: 'Mengapa anak laki-laki biasanya mengalami gejala lebih berat?', a: 'Gen FMR1 terletak di kromosom X. Anak laki-laki hanya memiliki satu kromosom X, sedangkan anak perempuan memiliki dua. Menurut MedlinePlus, laki-laki dengan satu salinan yang berubah biasanya terdampak lebih berat daripada perempuan, dan CDC juga mencatat perempuan sering memiliki gejala yang lebih ringan.' },
  { q: 'Apakah sindrom fragile X diturunkan?', a: 'Ya, sindrom fragile X adalah kondisi yang diturunkan dengan pola terkait kromosom X. Karena hasil tes genetik bisa berdampak pada anggota keluarga lain, CDC menganjurkan konseling genetik sebelum pemeriksaan. Konselor dapat menjelaskan siapa saja di keluarga yang mungkin perlu diperiksa.' },
  { q: 'Apa hubungan fragile X dengan autisme?', a: 'Autisme lebih sering ditemukan pada orang dengan sindrom fragile X. MedlinePlus menyebut sekitar sepertiga penyandang sindrom fragile X memiliki ciri spektrum autisme yang memengaruhi komunikasi dan interaksi sosial. Karena itu sebagian dokter menyarankan tes fragile X bagi anak dengan autisme atau disabilitas intelektual yang penyebabnya belum diketahui.' },
  { q: 'Bagaimana sindrom fragile X didiagnosis?', a: 'Menurut CDC, sindrom fragile X dapat didiagnosis dengan memeriksa DNA dari sampel darah. Tes ini dapat dipesan oleh dokter atau konselor genetik dan juga dapat mendeteksi perubahan gen FMR1 yang terkait gangguan lain dalam keluarga fragile X.' },
  { q: 'Apakah sindrom fragile X bisa disembuhkan?', a: 'CDC menyatakan belum ada obat yang menyembuhkan sindrom fragile X. Terapi dapat membantu anak membangun keterampilan seperti bicara, berjalan, dan berinteraksi sosial, dan obat dapat membantu mengelola masalah tertentu seperti perilaku. Intervensi dini sangat dianjurkan dan bisa dimulai bahkan sebelum diagnosis formal ditegakkan.' },
  { q: 'Apakah anak dengan sindrom fragile X bisa bersekolah di sekolah inklusi?', a: 'Bisa, bergantung pada kebutuhan masing-masing anak. Banyak anak dengan sindrom fragile X belajar lebih baik dengan bantuan visual, rutinitas yang dapat diprediksi, dan lingkungan yang tidak terlalu ramai. Pilihan sekolah sebaiknya diputuskan bersama psikolog, terapis, dan pihak sekolah berdasarkan asesmen anak.' },
];

addDiagram(`${IMG}/fragile-x-cgg.webp`, svg.grid('Jumlah pengulangan CGG pada gen FMR1', 'Kategori menurut MedlinePlus (National Library of Medicine AS)', ['Kategori', 'Jumlah pengulangan CGG', 'Artinya'], [
  ['Normal', 'Sekitar 5 sampai 40', 'Gen bekerja seperti biasa'],
  ['Premutasi', '55 sampai 200', 'Pembawa, risiko kondisi terkait fragile X'],
  ['Sindrom fragile X', 'Lebih dari 200', 'Protein FMRP tidak dibuat'],
], [300, 380, 428]));
addDiagram(`${IMG}/fragile-x-dukungan.webp`, svg.cards('Dukungan yang sering dibutuhkan', 'Disusun berdasarkan kebutuhan tiap anak setelah asesmen', [
  { h: 'Bicara dan bahasa', items: ['Terapi wicara sejak dini', 'Bantuan visual untuk komunikasi', 'Latihan percakapan bertahap'] },
  { h: 'Belajar dan perilaku', items: ['Jadwal visual dan rutinitas', 'Tugas dipecah kecil', 'Strategi untuk cemas dan fokus'] },
  { h: 'Gerak dan sensorik', items: ['Terapi okupasi', 'Fisioterapi bila perlu', 'Lingkungan tidak terlalu ramai'] },
  { h: 'Kesehatan dan keluarga', items: ['Pemantauan kejang', 'Konseling genetik', 'Dukungan untuk orang tua'] },
]));

const fBody = [
  p('<strong>Sindrom fragile X</strong> adalah kelainan genetik yang menurut CDC termasuk salah satu penyebab paling umum disabilitas intelektual yang diturunkan. Kondisi ini disebabkan perubahan pada gen FMR1 di kromosom X, sehingga tubuh tidak membuat protein yang dibutuhkan untuk perkembangan otak. Anak dengan sindrom fragile X dapat mengalami keterlambatan bicara dan perkembangan, kesulitan belajar, kecemasan, serta ciri yang mirip autisme atau ADHD. Gejalanya umumnya lebih berat pada anak laki-laki.'),
  p('Banyak keluarga baru mendengar nama fragile X setelah bertahun-tahun mencari penjelasan mengapa anaknya terlambat bicara atau sulit belajar. Artikel ini membahas pengertian sindrom fragile X, penyebab genetiknya, ciri perkembangan, perilaku, dan fisik, hubungannya dengan autisme, cara diagnosis, pilihan penanganan, strategi di sekolah, dan dukungan untuk keluarga. Bila anak Anda sedang dalam proses pemeriksaan keterlambatan perkembangan, baca juga ' + a('langkah-langkah-deteksi-dini-tumbuh-kembang-anak', 'langkah deteksi dini tumbuh kembang anak') + '.'),
  toc(fSections),

  '<h2 id="pengertian">Apa itu sindrom fragile X</h2>',
  p('Menurut ' + ext(URL_CDC_FX, 'CDC (Pusat Pengendalian dan Pencegahan Penyakit Amerika Serikat)') + ', sindrom fragile X adalah kelainan genetik dan salah satu penyebab paling umum disabilitas intelektual yang diturunkan. Nama fragile atau rapuh berasal dari tampilan kromosom X yang terlihat seperti patah atau rapuh di bawah mikroskop pada pemeriksaan zaman dulu. Saat ini diagnosis dilakukan dengan pemeriksaan DNA yang jauh lebih akurat.'),
  p('CDC menyebut jumlah pasti penyandang sindrom fragile X belum diketahui. Sebuah tinjauan penelitian memperkirakan sekitar 1 dari 7.000 laki-laki dan 1 dari 11.000 perempuan telah terdiagnosis. Sementara itu ' + ext(URL_MP_FX, 'MedlinePlus dari Perpustakaan Kedokteran Nasional Amerika Serikat') + ' mencantumkan perkiraan sekitar 1 dari 4.000 laki-laki dan 1 dari 8.000 perempuan. Perbedaan ini wajar, karena satu angka menghitung yang sudah terdiagnosis dan yang lain memperkirakan kejadian di populasi.'),
  p('Hal yang penting dipahami orang tua adalah bahwa sindrom fragile X sangat bervariasi. Sebagian anak, terutama perempuan, memiliki kecerdasan dalam rentang normal dengan kesulitan belajar ringan. Sebagian lain, terutama laki-laki, memiliki disabilitas intelektual yang menurut CDC bisa berkisar dari ringan sampai berat. Pemahaman tentang ' + a('disabilitas-intelektual-adalah', 'disabilitas intelektual') + ' membantu keluarga menyusun harapan yang realistis tanpa meremehkan potensi anak.'),
  fig(`${IMG}/fragile-x-bermain.webp`, 1200, 960, 'Empat anak berkain batik bermain permainan tradisional di halaman berumput, dua anak saling berpegangan tangan membentuk gerbang', 'Anak-anak memainkan permainan tradisional di halaman. Anak dengan sindrom fragile X sering lebih nyaman ikut bermain bila aturan permainannya jelas dan kelompoknya kecil.', PX(F_MAIN, 'Sandi Yudha')),

  '<h2 id="penyebab">Penyebab: perubahan gen FMR1</h2>',
  p('CDC menjelaskan bahwa sindrom fragile X disebabkan perubahan pada gen FMR1. Gen ini biasanya membuat protein FMRP, protein yang dibutuhkan untuk perkembangan otak. Orang dengan sindrom fragile X tidak membuat protein ini. Sementara itu, orang dengan gangguan lain yang terkait fragile X juga memiliki perubahan gen FMR1, tetapi biasanya masih membuat sebagian protein FMRP.'),
  p('Perubahan pada gen FMR1 berupa pengulangan berlebihan satu potongan kecil DNA yang disebut CGG. MedlinePlus menjelaskan bahwa pada kebanyakan orang, potongan CGG ini berulang sekitar 5 sampai 40 kali. Orang dengan 55 sampai 200 pengulangan disebut memiliki premutasi. Bila pengulangannya lebih dari 200, gen FMR1 tidak bekerja dan terjadilah sindrom fragile X. Diagram berikut merangkum kategori tersebut.'),
  diag(`${IMG}/fragile-x-cgg.webp`, 'Tabel visual kategori pengulangan CGG pada gen FMR1: normal sekitar 5 sampai 40, premutasi 55 sampai 200, dan sindrom fragile X lebih dari 200', 'Kategori jumlah pengulangan CGG pada gen FMR1 menurut MedlinePlus. Pembawa premutasi biasanya tidak mengalami sindrom fragile X, tetapi memiliki risiko kondisi lain yang terkait.'),
  p('MedlinePlus menyebut sindrom fragile X diturunkan dengan pola dominan terkait kromosom X. Pembawa premutasi juga memiliki risiko lebih tinggi mengalami kondisi lain, yaitu insufisiensi ovarium primer terkait fragile X (FXPOI) pada perempuan dan sindrom tremor atau ataksia terkait fragile X (FXTAS) yang biasanya muncul di usia dewasa. Karena menyangkut beberapa generasi, satu diagnosis fragile X pada anak sering membuka pertanyaan bagi anggota keluarga lain. Inilah alasan konseling genetik sangat dianjurkan.'),

  p('Untuk memahami mengapa anak laki-laki biasanya lebih terdampak, ingat kembali pelajaran biologi tentang kromosom. Anak laki-laki memiliki satu kromosom X dan satu kromosom Y, sedangkan anak perempuan memiliki dua kromosom X. Bila satu-satunya gen FMR1 pada anak laki-laki tidak bekerja, tidak ada salinan lain yang bisa menggantikannya. Pada anak perempuan, kromosom X yang kedua biasanya masih membawa gen FMR1 yang bekerja, sehingga sebagian protein tetap dibuat. Inilah alasan sederhana mengapa MedlinePlus menyebut laki-laki dengan satu salinan yang berubah biasanya terdampak lebih berat daripada perempuan, dan mengapa gejala pada perempuan sangat bervariasi.'),

  '<h2 id="ciri">Ciri perkembangan, perilaku, dan fisik</h2>',
  p('CDC mencatat bahwa anak dengan sindrom fragile X dapat mengalami keterlambatan duduk, berjalan, atau bicara dibandingkan anak seusianya, serta kesulitan mempelajari keterampilan baru. MedlinePlus menambahkan bahwa keterlambatan bicara dan bahasa biasanya sudah terlihat pada usia 2 tahun. Sebagian besar anak laki-laki memiliki disabilitas intelektual ringan sampai sedang, sedangkan sekitar sepertiga anak perempuan yang terdampak mengalami disabilitas intelektual.'),
  p('Ciri perilaku dan sosial juga sering terlihat. CDC menyebut menghindari kontak mata, kecemasan, sulit fokus, mengepakkan tangan, bicara atau bertindak impulsif, dan tingkat aktivitas yang tinggi. MedlinePlus juga mencatat kecemasan dan hiperaktivitas, termasuk gelisah atau bertindak impulsif, serta kesulitan mempertahankan perhatian. Selain itu, MedlinePlus menyebut kejang dialami sekitar 15 persen laki-laki dan 5 persen perempuan dengan sindrom ini.'),
  table('Ringkasan ciri sindrom fragile X menurut CDC dan MedlinePlus', ['Bidang', 'Ciri yang sering ditemui', 'Catatan'], [
    ['Perkembangan', 'Terlambat duduk, berjalan, atau bicara; keterlambatan bahasa terlihat sekitar usia 2 tahun', 'Intervensi dini bisa dimulai sebelum diagnosis formal'],
    ['Kemampuan intelektual', 'Laki-laki umumnya disabilitas intelektual ringan sampai sedang; sekitar sepertiga perempuan terdampak', 'Sebagian perempuan memiliki kecerdasan normal'],
    ['Perilaku', 'Cemas, sulit fokus, impulsif, aktivitas tinggi, mengepakkan tangan, menghindari kontak mata', 'Ciri ini sering tumpang tindih dengan ADHD dan autisme'],
    ['Fisik', 'Wajah panjang dan sempit, telinga besar, dahi dan rahang menonjol, jari sangat lentur, kaki datar', 'Lebih terlihat seiring usia, tidak selalu ada'],
    ['Kesehatan', 'Kejang pada sekitar 15 persen laki-laki dan 5 persen perempuan', 'Perlu pemantauan dokter'],
  ]),
  p('Ciri fisik yang dicatat MedlinePlus, seperti wajah panjang dan sempit, telinga besar, dahi dan rahang menonjol, jari yang sangat lentur, dan kaki datar, terlihat pada kebanyakan laki-laki dan sekitar separuh perempuan yang terdampak, dan biasanya makin jelas seiring bertambahnya usia. Pada anak kecil ciri ini sering belum terlihat, sehingga tidak bisa dijadikan patokan untuk menebak diagnosis. Diagnosis tetap memerlukan pemeriksaan DNA.'),

  '<h2 id="autisme">Hubungan dengan autisme dan ADHD</h2>',
  p('CDC menyebut autisme lebih sering ditemukan pada orang dengan sindrom fragile X. MedlinePlus memperkirakan sekitar sepertiga penyandang sindrom fragile X memiliki ciri spektrum autisme yang memengaruhi komunikasi dan interaksi sosial. Karena itu, sebagian anak dengan sindrom fragile X lebih dulu terdiagnosis autis, dan penyebab genetiknya baru diketahui kemudian. Untuk memahami ciri autisme, baca ' + a('autisme-adalah', 'pengertian autisme') + ' dan ' + a('penyebab-autisme-penelitian-genetik-terbaru', 'penelitian genetik penyebab autisme') + '.'),
  p('Ciri seperti sulit fokus, impulsif, dan aktivitas tinggi juga membuat sebagian anak dengan fragile X tampak seperti anak ADHD. Kecemasan sosial yang kuat juga sering terlihat, misalnya anak sangat ingin berinteraksi tetapi menghindari tatapan mata karena merasa kewalahan. Memahami bahwa perilaku ini berakar pada kecemasan, bukan pada tidak peduli, membantu orang dewasa merespons dengan lebih tepat. Bacaan pendamping: ' + a('adhd-adalah', 'pengertian ADHD') + ' dan ' + a('gangguan-kecemasan-anak', 'gangguan kecemasan anak') + '.'),
  p('Mengetahui penyebab genetik di balik autisme atau keterlambatan perkembangan bukan sekadar soal label. Diagnosis fragile X membantu dokter memantau risiko kesehatan seperti kejang, membantu keluarga memahami peluang kondisi yang sama pada anak berikutnya atau anggota keluarga lain, dan membuka akses ke informasi serta komunitas yang lebih spesifik. Karena itu, bila anak memiliki autisme atau disabilitas intelektual yang penyebabnya belum jelas, tanyakan kepada dokter apakah pemeriksaan fragile X perlu dilakukan.'),

  p('Bagi guru dan terapis, membedakan kecemasan dari penolakan sangat penting. Anak yang memalingkan wajah saat disapa belum tentu tidak mau berteman. Sering kali ia sebenarnya tertarik, tetapi kontak mata langsung terasa terlalu berat. Menyapa dari samping, berbicara dengan suara tenang, dan memberi waktu sebelum menuntut jawaban bisa membuat anak lebih mudah terlibat. Sikap sederhana seperti ini sering lebih efektif daripada meminta anak berulang kali untuk melihat mata lawan bicaranya.'),

  '<h2 id="diagnosis">Diagnosis dan konseling genetik</h2>',
  p('CDC menjelaskan bahwa sindrom fragile X dapat didiagnosis dengan memeriksa DNA dari sampel darah. Tes ini dapat dipesan oleh dokter atau konselor genetik, dan juga dapat mendeteksi perubahan gen FMR1 yang terkait gangguan lain dalam keluarga fragile X. Karena hasilnya bisa berdampak pada anggota keluarga lain, CDC menganjurkan konseling genetik sebelum pemeriksaan dilakukan.'),
  p('Di Indonesia, pemeriksaan biasanya dimulai dari dokter spesialis anak yang memantau tumbuh kembang, lalu dirujuk ke layanan genetik atau laboratorium yang menyediakan pemeriksaan DNA. Ketersediaan dan biaya pemeriksaan berbeda di setiap fasilitas, sehingga sebaiknya ditanyakan langsung. Bagi keluarga di Yogyakarta, artikel ' + a('klinik-tumbuh-kembang-anak-yogyakarta', 'klinik tumbuh kembang anak Yogyakarta') + ' bisa menjadi titik awal untuk mencari layanan.'),
  p('Menunggu hasil pemeriksaan genetik tidak berarti dukungan harus ditunda. CDC menekankan bahwa layanan intervensi dini dapat diberikan kepada anak sejak lahir sampai usia 36 bulan, dan anak bisa memenuhi syarat layanan bahkan tanpa diagnosis formal. Prinsip yang sama berlaku di Indonesia: bila anak terlambat bicara atau berjalan, mulailah terapi sambil menunggu kepastian diagnosis. Baca ' + a('intervensi-dini', 'intervensi dini') + ' untuk penjelasan lebih lanjut.'),

  p('Sebelum bertemu dokter atau konselor genetik, siapkan beberapa hal agar pertemuan lebih efektif. Tuliskan riwayat perkembangan anak, kapan ia mulai duduk, berjalan, dan berbicara, serta perilaku yang paling mengkhawatirkan. Susun juga silsilah keluarga sederhana yang mencatat anggota keluarga dengan keterlambatan perkembangan, disabilitas intelektual, autisme, gangguan menstruasi atau menopause dini, maupun gangguan gerak atau tremor di usia dewasa. Informasi keluarga seperti ini membantu konselor menilai pola pewarisan dan menentukan siapa saja yang mungkin perlu ditawari pemeriksaan. Tulis pula pertanyaan Anda sebelumnya, karena banyak orang tua lupa bertanya ketika sudah berada di ruang praktik.'),

  '<h2 id="penanganan">Penanganan dan intervensi</h2>',
  p('CDC menyatakan bahwa belum ada obat yang menyembuhkan sindrom fragile X. Namun terapi dapat membantu anak membangun keterampilan penting seperti bicara, berjalan, dan berinteraksi sosial, dan obat dapat membantu mengelola masalah tertentu seperti perilaku. Penanganan yang baik biasanya melibatkan tim: dokter anak, psikolog, ' + a('terapi-wicara', 'terapis wicara') + ', ' + a('terapi-okupasi', 'terapis okupasi') + ', dan bila perlu fisioterapis.'),
  diag(`${IMG}/fragile-x-dukungan.webp`, 'Diagram empat kelompok dukungan untuk anak dengan sindrom fragile X: bicara dan bahasa, belajar dan perilaku, gerak dan sensorik, serta kesehatan dan keluarga', 'Kelompok dukungan yang sering dibutuhkan anak dengan sindrom fragile X. Susunan pastinya ditentukan dari asesmen tiap anak.'),
  p('Terapi wicara membantu anak yang terlambat bicara, termasuk dengan bantuan visual dan sistem komunikasi alternatif bila perlu. Terapi okupasi membantu keterampilan motorik halus, kemandirian sehari-hari, dan cara anak mengelola rangsang sensorik. Karena banyak anak dengan fragile X mudah kewalahan oleh suara, keramaian, atau sentuhan, pemahaman tentang ' + a('gangguan-pemrosesan-sensorik', 'gangguan pemrosesan sensorik') + ' sering membantu orang tua dan guru menata lingkungan yang lebih nyaman.'),
  p('Untuk perilaku, pendekatan seperti ' + a('positive-behavior-support-pbs-anak', 'positive behavior support') + ' membantu mencari tahu apa yang memicu perilaku dan mengajarkan cara lain yang lebih sesuai. Bila dokter mempertimbangkan obat, misalnya untuk kecemasan, sulit fokus, atau kejang, keputusannya harus berdasarkan pemeriksaan langsung dan dipantau secara berkala. Orang tua sebaiknya mencatat perubahan perilaku dan efek samping agar dokter memiliki data yang cukup.'),

  p('Di rumah, rutinitas yang konsisten membantu anak merasa aman. Susun jadwal harian bergambar, beri tahu anak sebelum ada perubahan rencana, dan siapkan tempat tenang yang bisa ia datangi ketika merasa kewalahan. Ketika anak cemas di tempat ramai, misalnya pasar atau acara keluarga, kunjungan singkat yang direncanakan dengan baik sering lebih berhasil daripada kunjungan panjang yang berakhir dengan anak kewalahan. Pujilah usaha anak setiap kali ia berhasil mencoba sesuatu yang baru, sekecil apa pun langkahnya. Ide menyusun rutinitas ada di artikel ' + a('rutinitas-pagi-anak-autis-cara-membuat', 'rutinitas pagi anak') + '.'),

  '<h2 id="sekolah">Strategi belajar di sekolah</h2>',
  p('Anak dengan sindrom fragile X sering belajar lebih baik melalui penglihatan dan contoh nyata daripada melalui penjelasan lisan yang panjang. Guru bisa memakai gambar, video pendek, benda konkret, dan ' + a('jadwal-visual-anak-autis', 'jadwal visual') + ' untuk membantu anak memahami urutan kegiatan. Rutinitas yang dapat diprediksi dan pemberitahuan sebelum perubahan juga membantu mengurangi kecemasan.'),
  p('Karena kecemasan sosial sering kuat, hindari memaksa anak menatap mata atau tampil di depan kelas tanpa persiapan. Beri anak peran yang membuatnya nyaman, misalnya membantu membagikan buku, sebelum perlahan diajak berpartisipasi lebih banyak. Tugas sebaiknya dipecah menjadi bagian kecil dengan jeda, dan anak bisa diberi tempat tenang ketika mulai kewalahan. ' + a('program-pembelajaran-individual', 'Program pembelajaran individual') + ' membantu merumuskan tujuan dan akomodasi ini secara tertulis.'),
  fig(`${IMG}/fragile-x-keramaian.webp`, 1200, 800, 'Puluhan siswa sekolah dasar berseragam batik merah dan celana putih berdiri berjajar di depan sekolah sambil mengibarkan bendera merah putih kecil', 'Perayaan di sebuah sekolah dasar di Krui, Lampung. Keramaian seperti ini menyenangkan bagi banyak anak, tetapi bisa membuat anak dengan sindrom fragile X kewalahan, sehingga perlu persiapan dan tempat menepi.', PX(F_RAMAI, 'Irgi Nur Fadil')),
  p('Pilihan antara sekolah inklusi dan sekolah luar biasa bergantung pada kebutuhan anak, kesiapan sekolah, dan ketersediaan pendamping. Sebagian anak dengan fragile X berkembang baik di sekolah inklusi dengan ' + a('gpk-adalah', 'guru pendamping khusus') + ', sebagian lain lebih terbantu di SLB dengan kelas yang lebih kecil. Perbandingan keduanya ada di artikel ' + a('apa-perbedaan-sekolah-inklusi-dan-slb', 'perbedaan sekolah inklusi dan SLB') + '. Untuk anak yang lebih besar, ' + a('kurikulum-fungsional-untuk-anak-tunagrahita', 'kurikulum fungsional') + ' bisa membantu menyiapkan kemandirian sehari-hari.'),

  p('Masa peralihan perlu disiapkan dengan cermat. Pindah kelas, berganti guru, atau naik jenjang sekolah bisa memicu kecemasan yang besar pada anak dengan sindrom fragile X. Kenalkan lingkungan baru secara bertahap, misalnya dengan mengunjungi sekolah saat masih sepi, memotret ruang kelas dan wajah guru baru, lalu membuat buku cerita sederhana tentang hari pertama. Latihan keterampilan sosial dalam kelompok kecil juga membantu anak membangun pertemanan dengan cara yang tidak terlalu menekan. Persiapan transisi dibahas lebih lanjut di artikel ' + a('transisi-anak-abk-dari-sd-ke-smp', 'transisi anak ABK dari SD ke SMP') + '.'),

  '<h2 id="keluarga">Dukungan untuk keluarga</h2>',
  p('Diagnosis sindrom fragile X sering membawa perasaan campur aduk. Ada kelegaan karena akhirnya ada penjelasan, tetapi juga kekhawatiran tentang masa depan anak dan pertanyaan tentang anggota keluarga lain. Konseling genetik membantu keluarga memahami hasil pemeriksaan dan memutuskan langkah berikutnya, termasuk apakah saudara kandung atau kerabat perlu diperiksa.'),
  p('Jaga juga kondisi orang tua. Mendampingi anak dengan kebutuhan khusus sambil memahami informasi genetik yang rumit bisa sangat melelahkan. Bagi tugas dengan pasangan, minta bantuan keluarga besar, dan bergabunglah dengan komunitas orang tua. Artikel ' + a('menerima-diagnosis-anak-abk', 'menerima diagnosis anak ABK') + ' dan ' + a('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak ABK') + ' bisa membantu di masa awal ini.'),
  p('Perhatikan juga saudara kandung. Mereka mungkin ikut menjalani pemeriksaan genetik, mendengar istilah yang membingungkan, atau merasa perhatian orang tua tersita untuk adiknya. Jelaskan kondisi saudaranya dengan bahasa yang sesuai usia, beri ruang untuk bertanya, dan sediakan waktu khusus bersama mereka. Bila saudara kandung sudah remaja atau dewasa, hasil pemeriksaan genetik dapat berkaitan dengan rencana mereka sendiri di masa depan, sehingga pembicaraan ini sebaiknya didampingi konselor genetik. Tips mendampingi saudara kandung ada di artikel ' + a('sibling-anak-berkebutuhan-khusus', 'sibling anak berkebutuhan khusus') + '.'),
  p('Terakhir, lihatlah anak sebagai pribadi yang utuh, bukan hanya diagnosisnya. Banyak anak dengan sindrom fragile X dikenal ramah, punya rasa humor, dan sangat ingin terlibat dengan orang di sekitarnya, meskipun kecemasan kadang membuat mereka menghindar. Dengan dukungan yang tepat sejak dini, anak dapat terus belajar dan berkembang sesuai potensinya. Hak pendidikan dan layanan bagi anak dibahas di artikel ' + a('hak-pendidikan-anak-disabilitas-intelektual', 'hak pendidikan anak disabilitas intelektual') + '.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(fFaq),
];

articles.push({
  slug: 'sindrom-fragile-x',
  titleTag: 'Sindrom Fragile X: Penyebab, Ciri, dan Penanganan | YUKA',
  metaDesc: 'Sindrom fragile X: kelainan genetik gen FMR1 dan penyebab umum disabilitas intelektual yang diturunkan. Ciri, hubungan dengan autisme, diagnosis, terapi, dan strategi sekolah.',
  keywords: 'sindrom fragile x, fragile x syndrome, gen FMR1, fragile x autisme, disabilitas intelektual genetik',
  ogTitle: 'Sindrom Fragile X pada Anak',
  ogDesc: 'Panduan sindrom fragile X untuk orang tua dan guru: penyebab genetik, ciri, hubungan dengan autisme, diagnosis, dan dukungan di sekolah.',
  h1: 'Sindrom Fragile X: Penyebab, Ciri, Diagnosis, dan Dukungan untuk Anak',
  crumb: 'Sindrom Fragile X',
  category: 'Kesehatan',
  datePublished: '2026-11-25T08:00:00+07:00', dateModified: '2026-11-25T08:00:00+07:00',
  dateDisplay: '25 November 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/fragile-x-hero.webp`, w: 1200, h: 799,
    alt: 'Sekelompok siswa sekolah dasar berseragam merah putih, sebagian berkerudung, berjalan bersama di jalan setapak berumput di tepi danau',
    caption: 'Siswa sekolah dasar berjalan pulang bersama di Bandung, Jawa Barat. Anak dengan sindrom fragile X dapat belajar dan bergaul bersama teman sebaya dengan dukungan yang sesuai.',
    credit: PX(F_HERO, 'ujangubed hidayat'),
  },
  bodyHtml: fBody.join('\n'), faq: fFaq,
  related: [
    { href: '/artikel/disabilitas-intelektual-adalah', title: 'Disabilitas Intelektual Adalah', desc: 'Pengertian, tingkat, dan dukungan bagi anak.' },
    { href: '/artikel/penyebab-autisme-penelitian-genetik-terbaru', title: 'Penelitian Genetik Autisme', desc: 'Apa yang diketahui tentang faktor genetik autisme.' },
    { href: '/artikel/intervensi-dini', title: 'Intervensi Dini', desc: 'Mengapa dukungan sejak usia dini penting.' },
  ],
  tags: ['FragileX', 'Genetik', 'DisabilitasIntelektual'],
  sources: [
    { url: URL_CDC_FX, label: 'CDC: About Fragile X Syndrome (penyebab, prevalensi, gejala, diagnosis, penanganan)' },
    { url: URL_MP_FX, label: 'MedlinePlus Genetics: Fragile X syndrome (ciri, pengulangan CGG, pola pewarisan, kondisi terkait premutasi)' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum, bukan pengganti pemeriksaan dokter atau konseling genetik. Diagnosis dan rencana penanganan ditetapkan oleh dokter dan tim yang memeriksa anak.',
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

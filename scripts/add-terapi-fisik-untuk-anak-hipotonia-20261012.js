'use strict';
/*
 * Artikel baru: terapi-fisik-untuk-anak-hipotonia (Trello d28D3aH7, jadwal kartu 2026-10-10, tayang 2026-10-12).
 * Fokus: hipotonia sebagai GEJALA (bukan diagnosis) dan peran fisioterapi anak. Artikel umum fisioterapi ABK
 * (terapi-fisik-untuk-abk), anak terlambat jalan (terapi-fisik-untuk-anak-terlambat-jalan), latihan rumahan
 * (latihan-fisioterapi-anak-di-rumah) dan tanda keterlambatan usia 2 tahun (terbit hari yang sama) ditautkan,
 * isinya tidak diulang. Tidak ada program latihan berdosis, tidak ada janji hasil, tidak ada tarif atau layanan.
 * Setiap klaim dibaca dari TEKS sumber pada 12 Oktober 2026: MedlinePlus (NLM), teks NINDS yang dimuat ulang
 * BrainFacts.org (halaman ninds.nih.gov kini dialihkan ke glosarium), Cleveland Clinic, StatPearls (snapshot
 * Wayback, NCBI menolak akses otomatis), ChoosePT (APTA, disusun bersama APTA Pediatrics), abstrak Paleg 2025
 * (Crossref) dan Noritz 2013 (Europe PMC), IDAI.
 * Foto: potongan tanpa wajah dari dokumentasi YUKA, caption tanpa label diagnosis.
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags, SITE } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'terapi-fisik-untuk-anak-hipotonia';
const DATE = '2026-10-12';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const image = (file, alt, caption) => {
  const size = imageSize(path.join(ROOT, file));
  return { file, w: size.w, h: size.h, alt, caption, credit: CREDIT };
};
const fig = (file, alt, caption) => {
  const s = imageSize(path.join(ROOT, file));
  return `<figure class="article-inline-image"><img src="../${file}" alt="${esc(alt)}" loading="lazy" width="${s.w}" height="${s.h}"><figcaption>${caption} <span class="kredit">${CREDIT}</span></figcaption></figure>`;
};
const p = (text) => `<p>${text}</p>`;
const h2 = (id, text) => `<h2 id="${id}">${text}</h2>`;
const h3 = (text) => `<h3>${text}</h3>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((x) => `<li>${x}</li>`).join('')}</ol>`;
const table = (caption, head, rows) => `<table class="article-table"><caption>${caption}</caption><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
const a = (href, text) => `<a href="${href}">${text}</a>`;
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const SRC = {
  medline: 'https://medlineplus.gov/ency/article/003298.htm',
  ninds: 'https://www.brainfacts.org/diseases-and-disorders/neurological-disorders-az/diseases-a-to-z-from-ninds/hypotonia',
  cleveland: 'https://my.clevelandclinic.org/health/diseases/22223-hypotonia-in-babies',
  statpearls: 'https://www.ncbi.nlm.nih.gov/books/NBK562209/',
  choosept: 'https://www.choosept.com/guide/physical-therapy--guide-hypotonia',
  paleg: 'https://doi.org/10.3390/disabilities5010014',
  noritz: 'https://pubmed.ncbi.nlm.nih.gov/23713113/',
  idai: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/mengenal-keterlambatan-perkembangan-umum-pada-anak',
};

const hero = image(
  'Dokumentasi/artikel/terapi-fisik-untuk-anak-hipotonia-hero.webp',
  'Tangan beberapa anak menekan alas silikon biru bergambar lingkaran di atas meja kayu',
  'Kegiatan membuat kue di meja rendah. Menekan dan meratakan adonan memakai otot lengan dan bahu, salah satu bentuk gerak sehari-hari yang sering dilirik fisioterapis saat menyusun aktivitas fungsional. Foto dipotong agar wajah tidak tampak; ini dokumentasi kegiatan sekolah, bukan sesi terapi.'
);
const IMG = {
  duduk: 'Dokumentasi/artikel/terapi-fisik-untuk-anak-hipotonia-duduk-bersila.webp',
  berdiri: 'Dokumentasi/artikel/terapi-fisik-untuk-anak-hipotonia-berdiri.webp',
  kuda: 'Dokumentasi/artikel/terapi-fisik-untuk-anak-hipotonia-kuda-kuda.webp',
  ember: 'Dokumentasi/artikel/terapi-fisik-untuk-anak-hipotonia-membawa-ember.webp',
};

const faq = [
  {
    q: 'Apakah hipotonia sama dengan otot lemah?',
    a: 'Tidak sama. Tonus otot adalah sisa ketegangan otot saat beristirahat, sedangkan kekuatan adalah tenaga maksimal yang bisa dihasilkan otot. NINDS dan StatPearls menjelaskan bahwa hipotonia bisa muncul dengan atau tanpa kelemahan otot. Karena itu dokter memeriksa keduanya secara terpisah.',
  },
  {
    q: 'Apakah hipotonia sebuah penyakit?',
    a: 'Bukan. Hipotonia adalah gejala atau temuan pemeriksaan yang bisa disebabkan banyak kondisi, mulai dari gangguan di otak, saraf tulang belakang, saraf tepi, sampai otot. Cleveland Clinic menulis bahwa sangat jarang bayi memiliki hipotonia tanpa kondisi dasar yang menyertainya. Penyebabnya hanya bisa ditentukan dokter.',
  },
  {
    q: 'Siapa yang menegakkan diagnosis hipotonia dan penyebabnya?',
    a: 'Dokter. Pemeriksaan biasanya dimulai dari dokter anak, lalu sering melibatkan dokter saraf anak dan, bila perlu, ahli genetika. Pemeriksaan penunjang seperti MRI, tes genetik, atau EMG dipilih dokter sesuai dugaan penyebab. Fisioterapis menilai kemampuan gerak anak, tetapi tidak menggantikan diagnosis dokter.',
  },
  {
    q: 'Kapan anak dengan hipotonia sebaiknya mulai fisioterapi?',
    a: 'Waktunya ditentukan bersama dokter yang memeriksa anak. Laporan klinis American Academy of Pediatrics (Noritz dan Murphy, 2013) menekankan bahwa pemeriksaan penyebab sebaiknya berjalan bersamaan dengan rujukan ke program intervensi dini, jadi anak tidak perlu menunggu diagnosis lengkap untuk mulai mendapat dukungan.',
  },
  {
    q: 'Apa yang dilakukan fisioterapis pada anak hipotonia?',
    a: 'Menurut panduan ChoosePT dari American Physical Therapy Association, fisioterapis melakukan evaluasi lengkap, lalu menyusun program yang bisa berisi edukasi keluarga tentang posisi dan aktivitas yang mendukung perkembangan, terapi langsung termasuk mengajari orang tua cara menggendong dan memosisikan anak, serta latihan penguatan otot yang dipilih khusus untuk anak tersebut.',
  },
  {
    q: 'Apakah fisioterapi bisa menyembuhkan hipotonia?',
    a: 'Tidak ada janji kesembuhan. Fisioterapi bertujuan membantu fungsi gerak, kekuatan, dan kemandirian anak serta mencegah komplikasi, sedangkan perjalanan tonus otot sangat bergantung pada penyebabnya. Sumber resmi pun berbeda nada soal prognosis, jadi gambaran yang paling tepat untuk anak Anda datang dari dokter yang menanganinya.',
  },
  {
    q: 'Bolehkah saya melatih anak hipotonia sendiri di rumah dengan video dari internet?',
    a: 'Sebaiknya tidak tanpa arahan. Latihan rumahan paling aman bila disusun dan dicontohkan langsung oleh fisioterapis yang sudah memeriksa anak, karena kebutuhan tiap anak berbeda menurut penyebab, usia, dan kondisi sendinya. MedlinePlus juga mengingatkan agar ekstra hati-hati saat mengangkat dan menggendong anak dengan hipotonia untuk mencegah cedera.',
  },
  {
    q: 'Apakah hipotonia memengaruhi kecerdasan anak?',
    a: 'Hipotonia itu sendiri tidak memengaruhi kecerdasan, menurut NINDS dan Cleveland Clinic. Namun beberapa kondisi penyebab hipotonia bisa disertai keterlambatan perkembangan lain, sehingga dokter dan tim terapi biasanya juga memantau bicara, kognitif, dan kemampuan sosial anak.',
  },
];

const faqHtml = `${h2('faq', 'Pertanyaan yang Sering Diajukan')}\n${faq.map(({ q, a: ans }) => `${h3(q)}${p(ans)}`).join('\n')}`;

const bodyParts = [
  `<div class="answer-box" style="background:#F0F4FF;border-left:4px solid #2B3A67;padding:1.25rem 1.5rem;margin:0 0 2rem;border-radius:0 12px 12px 0;"><strong>Jawaban singkat:</strong> Hipotonia adalah tonus otot yang rendah, sebuah gejala dengan banyak kemungkinan penyebab, bukan diagnosis. Penyebabnya ditegakkan oleh dokter. Terapi fisik (fisioterapi) untuk anak hipotonia bertujuan membantu anak berkembang seoptimal mungkin, menambah kekuatan, dan membatasi komplikasi, lewat evaluasi, edukasi keluarga tentang posisi dan aktivitas, terapi langsung, serta latihan penguatan yang disusun khusus untuk anak. Programnya harus dibuat fisioterapis berizin yang memeriksa anak, dan hasilnya tidak bisa dijanjikan karena sangat bergantung pada penyebab. Artikel ini bukan alat diagnosis dan bukan pengganti terapis.</div>`,

  p(`Mendengar kata "hipotonia" dari dokter atau terapis sering membuat orang tua cemas. Ada yang langsung mencari latihan di internet, ada yang bertanya-tanya apakah anaknya akan bisa duduk, berdiri, atau berjalan seperti teman sebayanya. Wajar sekali. Yang paling membantu di tahap ini adalah memahami dulu apa itu hipotonia, siapa yang memeriksanya, dan apa sebenarnya peran terapi fisik.`),
  p(`Artikel ini khusus membahas terapi fisik untuk anak dengan hipotonia. Gambaran umum fisioterapi untuk anak berkebutuhan khusus sudah kami tulis di ${a('terapi-fisik-untuk-abk', 'terapi fisik untuk ABK')}, sedangkan anak yang terlambat berjalan dibahas di ${a('terapi-fisik-untuk-anak-terlambat-jalan', 'terapi fisik untuk anak terlambat jalan')}. Kalau anak Anda berusia sekitar 2 tahun dan Anda masih menimbang perlu tidaknya ke dokter, bacalah dulu ${a('tanda-keterlambatan-motorik-kasar-anak-2-tahun', 'tanda keterlambatan motorik kasar anak 2 tahun')}.`),
  p(`Satu hal kami tegaskan sejak awal: tulisan ini membantu Anda memahami dan menyiapkan pertanyaan. Penegakan diagnosis dan penyusunan program terapi hanya bisa dilakukan oleh dokter dan fisioterapis berizin yang memeriksa anak secara langsung.`),

  h2('apa-itu-hipotonia', 'Apa Itu Hipotonia?'),
  p(`${ext(SRC.medline, 'MedlinePlus')}, ensiklopedia kesehatan dari National Library of Medicine Amerika Serikat, mendefinisikan hipotonia sebagai tonus otot yang menurun. Bayi dengan hipotonia tampak lunglai dan terasa seperti "boneka kain" saat digendong. Mereka cenderung berbaring dengan siku dan lutut lurus terkulai, padahal bayi dengan tonus normal biasanya menekuk siku dan lututnya. Kontrol kepala juga bisa lemah, sehingga kepala mudah jatuh ke samping, ke belakang, atau ke depan.`),
  p(`Lalu apa itu tonus otot? StatPearls, buku rujukan klinis yang diterbitkan di ${ext(SRC.statpearls, 'NCBI Bookshelf')}, menjelaskan tonus sebagai sisa ketegangan otot saat beristirahat. Ketegangan kecil inilah yang menjaga postur tubuh. Dokter menilainya dari seberapa besar hambatan yang terasa ketika anggota tubuh anak digerakkan secara pasif. Pada hipotonia, hambatan itu berkurang secara tidak normal.`),
  p(`Teks informasi dari National Institute of Neurological Disorders and Stroke (NINDS), yang dimuat ulang oleh ${ext(SRC.ninds, 'BrainFacts.org')}, memberi gambaran sederhana: dalam keadaan rileks pun, otot normal punya sedikit kontraksi yang membuatnya terasa kenyal. Pada hipotonia, kekenyalan itu berkurang.`),
  h3('Tonus otot tidak sama dengan kekuatan otot'),
  p(`Ini perbedaan penting yang sering tertukar. ${ext(SRC.choosept, 'ChoosePT')}, situs informasi publik milik American Physical Therapy Association yang ditulis bersama APTA Academy of Pediatric Physical Therapy, menyebut tonus sebagai "kesiapan untuk bergerak", sedangkan kekuatan adalah tenaga yang dihasilkan otot untuk melawan beban. Anak dengan hipotonia bisa saja mengangkat beban yang sama dengan anak lain; yang berbeda adalah kesiapan ototnya untuk memulai gerakan. NINDS dan StatPearls juga menegaskan bahwa hipotonia bisa muncul dengan atau tanpa kelemahan otot.`),
  table(
    'Perbedaan tonus otot dan kekuatan otot',
    ['Aspek', 'Tonus otot', 'Kekuatan otot'],
    [
      ['Pengertian', 'Sisa ketegangan otot saat istirahat yang menjaga postur (StatPearls)', 'Tenaga maksimal yang bisa dihasilkan otot (StatPearls)'],
      ['Cara dinilai', 'Hambatan saat anggota tubuh digerakkan secara pasif oleh pemeriksa', 'Kemampuan anak melawan beban atau mengangkat tubuhnya sendiri'],
      ['Istilah bila menurun', 'Hipotonia (tonus rendah)', 'Kelemahan otot'],
      ['Hubungan keduanya', 'Bisa muncul tanpa kelemahan', 'Bisa menyertai hipotonia, bisa juga tidak (NINDS)'],
    ]
  ),

  h2('gejala-bukan-diagnosis', 'Hipotonia Adalah Gejala, Bukan Diagnosis'),
  p(`Inilah pesan terpenting artikel ini. Menurut StatPearls, angka kejadian hipotonia sulit dipastikan karena hipotonia bukan penyakit, melainkan tanda yang muncul pada berbagai penyakit. ${ext(SRC.cleveland, 'Cleveland Clinic')} bahkan menulis bahwa sangat jarang seorang bayi memiliki hipotonia tanpa kondisi dasar yang menyertainya.`),
  p(`MedlinePlus menjelaskan alurnya: tonus dan gerak otot melibatkan otak, saraf tulang belakang, saraf tepi, dan otot. Hipotonia bisa menjadi tanda adanya masalah di titik mana pun di sepanjang jalur itu. StatPearls membagi penyebabnya secara garis besar menjadi penyebab sentral (berasal dari otak dan saraf pusat) dan penyebab perifer (berasal dari saraf tepi, sambungan saraf dan otot, atau otot itu sendiri). Penyebab sentral ditemukan pada sekitar 60 sampai 80 persen kasus.`),
  table(
    'Kelompok penyebab hipotonia menurut sumber medis (contoh, bukan daftar lengkap)',
    ['Kelompok', 'Contoh kondisi yang disebut sumber', 'Sumber'],
    [
      ['Sentral (otak dan saraf pusat)', 'Kekurangan oksigen sebelum atau sesudah lahir, kelainan pembentukan otak, sindrom genetik atau kromosom seperti sindrom Down dan sindrom Prader-Willi, infeksi, gangguan metabolisme', 'StatPearls, MedlinePlus'],
      ['Perifer (saraf tepi dan otot)', 'Atrofi otot spinal (SMA), distrofi otot, miopati bawaan, gangguan sambungan saraf dan otot', 'StatPearls, MedlinePlus'],
      ['Kondisi lain yang dapat menyertai', 'Lahir prematur, hipotiroid bawaan, paparan racun, cedera saraf tulang belakang, palsi serebral', 'Cleveland Clinic, MedlinePlus, NINDS'],
      ['Penyebab tidak ditemukan', 'NINDS menulis bahwa kadang penyebab hipotonia memang tidak dapat ditemukan', 'NINDS'],
    ]
  ),
  p(`Menurut StatPearls, sindrom Down adalah penyebab genetik tersering dari hipotonia sentral, disusul sindrom Prader-Willi. Kalau Anda ingin memahami salah satu kondisi tersebut, bacalah ${a('down-syndrome-adalah', 'down syndrome adalah')} atau ${a('cerebral-palsy-adalah', 'cerebral palsy')}. Namun ingat, daftar di atas hanya contoh. Menebak penyebab dari gejala di rumah tidak mungkin dan tidak perlu; itu tugas dokter.`),
  fig(
    IMG.duduk,
    'Seorang anak berkaus merah muda duduk bersila di lantai teras sambil mengaduk isi panci dengan spatula',
    'Duduk bersila tanpa sandaran sambil memakai kedua tangan menuntut kontrol batang tubuh yang baik. Kemampuan duduk stabil seperti ini sering menjadi salah satu tujuan fungsional dalam program fisioterapi anak. Foto dipotong agar wajah tidak tampak; ini dokumentasi kegiatan sekolah, bukan sesi terapi.'
  ),

  h2('tanda-hipotonia', 'Tanda yang Perlu Disampaikan ke Dokter'),
  p(`Berikut tanda-tanda yang dicantumkan sumber resmi. Satu tanda tidak berarti anak pasti mengalami hipotonia. Gunanya adalah membantu Anda menjelaskan pengamatan kepada dokter.`),
  h3('Pada bayi'),
  ul([
    '<strong>Tampak lunglai seperti boneka kain</strong>, lengan dan tungkai terkulai di sisi tubuh (MedlinePlus, NINDS, Cleveland Clinic).',
    '<strong>Kontrol kepala lemah</strong>, kepala mudah jatuh ke depan, ke belakang, atau ke samping (MedlinePlus, ChoosePT).',
    '<strong>Terasa "melorot" saat diangkat dari ketiak</strong>. MedlinePlus menulis bahwa bayi dengan tonus normal bisa diangkat dengan tangan di bawah ketiaknya, sedangkan bayi hipotonia cenderung tergelincir di antara tangan.',
    '<strong>Sulit mengisap atau menelan saat menyusu</strong>, dan tangis yang lemah (ChoosePT, Cleveland Clinic).',
    '<strong>Gerakan spontan lebih sedikit</strong>, lebih banyak tidur dibanding bayi seusianya, atau refleks yang menurun (ChoosePT).',
  ]),
  h3('Pada anak yang lebih besar'),
  ul([
    '<strong>Keterlambatan tonggak gerak</strong> seperti duduk, merangkak, dan berjalan. Cleveland Clinic juga menyebut keterlambatan mengucapkan kata pertama dan makan sendiri.',
    '<strong>Masalah postur dan mobilitas</strong>, sendi dan ligamen yang terlalu lentur, serta kesulitan bernapas atau berbicara (NINDS).',
    '<strong>Telapak kaki tampak datar</strong> saat duduk, berdiri, atau mendorong tubuh ke ujung jari (ChoosePT).',
  ]),
  p(`Di Indonesia, ${ext(SRC.idai, 'Ikatan Dokter Anak Indonesia (IDAI)')} memasukkan "hiper/hipotonia atau gangguan tonus otot" ke dalam daftar tanda bahaya perkembangan motor kasar, bersama gerakan yang tidak seimbang antara sisi kiri dan kanan serta gerakan yang tidak terkontrol. IDAI menganjurkan orang tua yang menemukan salah satu tanda bahaya untuk tidak menunda dan segera memeriksakan anak ke tenaga kesehatan terdekat. Langkah pemantauan lewat Buku KIA dan Posyandu dirangkum di ${a('langkah-langkah-deteksi-dini-tumbuh-kembang-anak', 'langkah-langkah deteksi dini tumbuh kembang anak')}, dan tonggak gerak tahun pertama ada di ${a('milestone-motorik-kasar-anak-0-12-bulan', 'milestone motorik kasar anak 0-12 bulan')}.`),

  h2('diagnosis-oleh-dokter', 'Siapa yang Menegakkan Diagnosis dan Bagaimana Prosesnya'),
  p(`Diagnosis hipotonia dan penyebabnya ditegakkan oleh dokter, bukan oleh orang tua, guru, atau terapis. MedlinePlus menjelaskan bahwa dokter akan melakukan pemeriksaan fisik, termasuk pemeriksaan rinci sistem saraf dan fungsi otot. Pada kebanyakan kasus, dokter spesialis saraf ikut membantu menilai, dan ahli genetika dapat membantu mendiagnosis kondisi tertentu.`),
  p(`StatPearls menguraikan bahwa evaluasi dimulai dari riwayat yang rinci: riwayat keluarga, kehamilan, persalinan, dan perkembangan anak. Dokter lalu memeriksa tonus dengan beberapa manuver, misalnya mengangkat bayi tegak dengan memegang ketiaknya (suspensi vertikal). Menurut StatPearls, pada sekitar separuh kasus penyebab hipotonia sudah dapat ditentukan dari riwayat dan pemeriksaan fisik yang teliti.`),
  p(`Bila perlu, dokter memilih pemeriksaan penunjang sesuai dugaan penyebab. Cleveland Clinic dan NINDS menyebut contoh seperti MRI atau CT scan otak, tes genetik, dan elektromiografi (EMG) untuk menilai fungsi saraf dan otot. ChoosePT mengingatkan bahwa hipotonia sendiri tidak terlihat di gambar MRI; pemeriksaan pencitraan dipakai untuk mencari kondisi penyebabnya. Laporan klinis ${ext(SRC.noritz, 'American Academy of Pediatrics tentang keterlambatan motorik')} (Noritz dan Murphy, Pediatrics 2013) menyebut pemeriksaan kadar enzim kreatin kinase dalam darah untuk anak dengan tonus otot rendah. Semua keputusan pemeriksaan ini ada di tangan dokter.`),
  p(`Pesan penting dari laporan AAP yang sama: pemeriksaan penyebab sebaiknya dilakukan <strong>bersamaan</strong> dengan rujukan ke program intervensi dini. Artinya, anak tidak harus menunggu semua hasil pemeriksaan untuk mulai mendapat dukungan gerak. Konsep ini kami jelaskan lebih lanjut di ${a('intervensi-dini', 'intervensi dini')}. Untuk keluarga di DIY, daftar layanan resmi dan alur rujukannya ada di ${a('klinik-tumbuh-kembang-anak-yogyakarta', 'klinik tumbuh kembang anak Yogyakarta')}.`),

  h2('tujuan-fisioterapi', 'Tujuan Terapi Fisik untuk Anak Hipotonia'),
  p(`Setelah penyebab diperiksa, NINDS menjelaskan bahwa kondisi dasarnya ditangani lebih dulu, lalu diikuti terapi suportif untuk hipotonianya. Di sinilah fisioterapi berperan. Menurut NINDS, terapi fisik dapat memperbaiki kontrol gerak dan kekuatan tubuh secara keseluruhan.`),
  p(`ChoosePT merinci bahwa fisioterapis akan bekerja bersama keluarga untuk:`),
  ol([
    '<strong>Membantu anak tumbuh dan berkembang seoptimal mungkin.</strong>',
    '<strong>Menambah kekuatan tubuh anak secara keseluruhan.</strong> ChoosePT menyebut sebagian besar penanganan diarahkan untuk menambah kekuatan sebagai kompensasi tonus yang rendah.',
    '<strong>Membatasi komplikasi lebih lanjut.</strong> StatPearls menambahkan bahwa terapi fisik, okupasi, dan wicara berperan penting dalam memaksimalkan fungsi otot dan mencegah kelainan bentuk sekunder.',
    '<strong>Memberi arahan kapan perlu melibatkan profesional lain</strong>, seperti terapis okupasi, terapis wicara, atau dokter saraf.',
  ]),
  p(`Perhatikan bahwa tujuan-tujuan ini berbicara tentang fungsi dan perkembangan, bukan "menormalkan" tonus. Itu sebabnya fisioterapis biasanya menetapkan target yang konkret dan bermakna bagi kehidupan sehari-hari anak, misalnya duduk stabil saat makan atau berpindah posisi sendiri saat bermain, dan target itu disepakati bersama keluarga.`),
  fig(
    IMG.berdiri,
    'Seorang anak bercelemek merah muda bertuliskan Fun Cooking berdiri di lantai keramik paviliun',
    'Berdiri tegak sambil memperhatikan kegiatan di sekitarnya memerlukan keseimbangan dan kontrol postur. Fisioterapis biasanya menilai kemampuan seperti ini dalam konteks aktivitas nyata anak. Foto dipotong agar wajah tidak tampak; ini dokumentasi kegiatan memasak, bukan sesi asesmen.'
  ),

  h2('apa-yang-dilakukan-fisioterapis', 'Apa yang Biasanya Dilakukan Fisioterapis'),
  h3('1. Evaluasi menyeluruh'),
  p(`Menurut ChoosePT, kunjungan pertama berisi evaluasi lengkap. Fisioterapis mengumpulkan informasi tentang riwayat kesehatan dan kelahiran anak, lalu melakukan pemeriksaan fisik. Pada bayi, pemeriksaan bisa mencakup suspensi vertikal, suspensi horizontal (bayi ditopang di dada dan perutnya), dan uji tarik ke posisi duduk untuk melihat apakah bayi menahan kepalanya. Hasil evaluasi menjadi dasar program yang disesuaikan dengan kebutuhan, tantangan, dan tujuan anak.`),
  h3('2. Edukasi keluarga tentang posisi dan aktivitas'),
  p(`ChoosePT menyebut edukasi pasien dan keluarga sebagai bagian program. Fisioterapis memberi panduan posisi dan aktivitas yang paling mendukung perkembangan anak, dan rekomendasinya spesifik untuk kebutuhan anak tersebut. Untuk bayi, ChoosePT juga menganjurkan orang tua memantau posisi tubuh bayi untuk mengurangi risiko komplikasi seperti leher miring (tortikolis) atau kepala peyang.`),
  h3('3. Terapi langsung dan pelatihan orang tua'),
  p(`Fisioterapis dapat mengajari orang tua cara menggerakkan, menopang, dan memosisikan anak, serta mencontohkan aktivitas untuk dilakukan di rumah lengkap dengan cara melakukannya. Bagian ini penting karena anak menghabiskan jauh lebih banyak waktu bersama keluarga daripada di ruang terapi.`),
  h3('4. Latihan penguatan yang disusun khusus'),
  p(`ChoosePT menyebut fisioterapis dapat meresepkan rangkaian latihan khusus untuk membangun kekuatan otot anak dan menjaganya tetap aktif. Kata kuncinya adalah <em>diresepkan</em>: jenis, posisi, dan takarannya ditentukan terapis setelah memeriksa anak. Karena itu artikel ini sengaja tidak memuat program latihan berdosis. Contoh pendekatan bermain yang bisa didiskusikan dengan terapis ada di ${a('latihan-fisioterapi-anak-di-rumah', 'latihan fisioterapi anak di rumah')} dan ${a('permainan-motorik-kasar', 'permainan motorik kasar')}.`),
  fig(
    IMG.kuda,
    'Kaki seorang anak bercelana krem dan berselendang oranye berdiri melebar di atas rumput dengan dinding batu candi di belakangnya',
    'Sikap berdiri dengan kaki melebar saat menari menuntut keseimbangan dan kekuatan tungkai. Aktivitas yang disukai anak, seperti menari atau bermain, sering dipakai fisioterapis sebagai sarana latihan. Foto dipotong agar wajah tidak tampak; ini dokumentasi kunjungan budaya, bukan sesi terapi.'
  ),

  h2('bukti-ilmiah', 'Seberapa Kuat Bukti Ilmiahnya?'),
  p(`Orang tua berhak tahu bukan hanya apa yang dilakukan, tetapi juga seberapa kuat dasarnya. Tinjauan payung terbaru oleh ${ext(SRC.paleg, 'Paleg dan rekan (jurnal Disabilities, 2025)')} merangkum delapan tinjauan sistematis dan dua tinjauan ringkas tentang intervensi terapi fisik dan okupasi untuk anak di bawah 6 tahun dengan hipotonia sentral perkembangan, kelompok yang mencakup antara lain sindrom Down, sindrom Prader-Willi, dan palsi serebral dengan hipotonia sebagai tipe gerak utama.`),
  table(
    'Ringkasan temuan tinjauan Paleg dkk. (2025) tentang intervensi untuk anak usia di bawah 6 tahun dengan hipotonia sentral perkembangan',
    ['Pendekatan', 'Yang ditemukan tinjauan', 'Kekuatan bukti'],
    [
      ['Latihan berjalan di treadmill', 'Mendukung awal kemampuan berjalan pada anak dengan sindrom Down (dinilai oleh empat tinjauan sistematis dan satu tinjauan ringkas)', 'Rendah (GRADE)'],
      ['Latihan motorik dan sensorimotor', 'Hasil positif', 'Rendah atau sangat rendah; rekomendasi bersyarat'],
      ['Ortosis (alat bantu penopang, misalnya untuk kaki)', 'Hasil positif', 'Rendah atau sangat rendah; rekomendasi bersyarat'],
      ['Pengaturan posisi dan alat bantu mobilitas', 'Hasil positif', 'Rendah atau sangat rendah; rekomendasi bersyarat'],
      ['Pijat bayi', 'Hasil positif', 'Rendah atau sangat rendah; rekomendasi bersyarat'],
    ]
  ),
  p(`Para penulis mencatat bahwa sebagian besar bukti berasal dari anak dengan sindrom Down, dan hanya sedikit penelitian tentang hipotonia sentral dari penyebab lain. Mereka menyimpulkan bahwa penelitian primer tentang efektivitas intervensi dini masih sangat dibutuhkan. Bagi orang tua, artinya sederhana: pendekatan-pendekatan ini masuk akal dan didukung bukti awal yang positif, tetapi tidak ada satu metode yang terbukti kuat untuk semua anak. Pemilihan pendekatan perlu disesuaikan dengan penyebab dan kondisi anak oleh terapis yang menanganinya, dan wajar bila Anda bertanya kepada terapis mengapa sebuah pendekatan dipilih.`),

  h2('tim-terapi', 'Fisioterapi Jarang Berjalan Sendiri'),
  p(`NINDS dan Cleveland Clinic menggambarkan penanganan hipotonia sebagai kerja tim. Selain terapi fisik, terapi okupasi membantu anak dalam aktivitas sehari-hari, terapi wicara membantu kesulitan bernapas, bicara, dan menelan, dan pada bayi serta anak kecil bisa ditambah program stimulasi sensorik. StatPearls menambahkan bahwa pendekatan tim antarprofesi memberi hasil yang lebih baik, dan dukungan gizi juga sangat penting karena banyak di antara anak ini memiliki berat badan kurang.`),
  p(`Kalau Anda ingin mengenal anggota tim yang lain, bacalah ${a('terapi-okupasi', 'terapi okupasi')}, ${a('terapi-wicara', 'terapi wicara')}, dan gambaran umum di ${a('macam-macam-terapi-pada-anak', 'macam-macam terapi pada anak')}. Untuk anak dengan palsi serebral, ada juga pembahasan ${a('terapi-okupasi-untuk-anak-cerebral-palsy', 'terapi okupasi untuk anak cerebral palsy')}.`),

  h2('peran-orang-tua', 'Peran Orang Tua di Rumah'),
  p(`StatPearls menekankan bahwa orang tua perlu dilibatkan secara aktif sejak awal dalam menyesuaikan pilihan penanganan, dan pentingnya kontrol rutin. Beberapa hal yang bisa Anda lakukan, tanpa menggantikan peran terapis:`),
  ul([
    '<strong>Ikuti program dari terapis, bukan dari video acak.</strong> ChoosePT menganjurkan orang tua memasukkan aktivitas penguatan yang diajarkan fisioterapis ke dalam rutinitas harian anak. Kalau ragu cara melakukannya, minta terapis mencontohkan ulang.',
    '<strong>Hati-hati saat mengangkat dan menggendong.</strong> MedlinePlus mengingatkan agar ekstra hati-hati saat mengangkat dan menggendong anak dengan hipotonia untuk mencegah cedera. Tanyakan kepada terapis cara menggendong yang tepat untuk anak Anda.',
    '<strong>Perhatikan posisi bayi.</strong> Untuk bayi, ikuti saran terapis soal variasi posisi agar risiko tortikolis dan kepala peyang berkurang (ChoosePT).',
    '<strong>Catat dan rekam.</strong> Catatan perubahan kemampuan dan video pendek gerak anak di rumah membantu dokter dan terapis menilai kemajuan.',
    '<strong>Jaga anak tetap aktif sesuai arahan.</strong> ChoosePT menyebut aktivitas fisik yang teratur penting untuk menjaga kesehatan dan fungsi anak sampai remaja dan dewasa.',
  ]),
  p(`Di Sekolah Inklusi Taruna Imani, kami melihat bahwa kegiatan sehari-hari seperti membawa barang, duduk di lantai saat makan bersama, atau menari di acara sekolah memberi banyak kesempatan bergerak yang menyenangkan. Kegiatan semacam ini melengkapi, bukan menggantikan, program dari terapis. InsyaAllah, dengan kesabaran dan kerja sama antara keluarga, sekolah, dan tenaga kesehatan, setiap langkah kecil anak layak dihargai.`),
  fig(
    IMG.ember,
    'Seseorang berkaus merah muda memegang ember plastik di depan dispenser air galon',
    'Membawa ember dan mengisi air adalah contoh aktivitas fungsional sehari-hari yang melibatkan genggaman, kekuatan lengan, dan keseimbangan. Foto dipotong agar wajah tidak tampak; ini dokumentasi kegiatan kemandirian di sekolah, bukan sesi terapi.'
  ),

  h2('prognosis', 'Bagaimana Prospeknya? Jawaban Jujur dari Sumber Resmi'),
  p(`Pertanyaan ini wajar, tetapi jawabannya tidak bisa diseragamkan. Sumber resmi pun memberi nada yang berbeda. NINDS menulis bahwa hipotonia dapat menjadi kondisi seumur hidup, tetapi pada sebagian kasus tonus otot membaik seiring waktu. Cleveland Clinic menyebut prognosis bervariasi menurut diagnosis dasarnya, dan bila penyebabnya kondisi genetik tertentu, gejala hipotonia bisa saja memburuk. ChoosePT menulis bahwa tonus otot tidak membaik seiring bayi tumbuh, dengan pengecualian bayi prematur yang dapat berkembang ke tonus yang lebih khas, sehingga anak perlu beradaptasi sepanjang hidup.`),
  p(`Benang merahnya sama: perjalanan hipotonia sangat ditentukan oleh penyebabnya. Itulah mengapa diagnosis dari dokter begitu penting, dan mengapa tidak ada pihak yang boleh menjanjikan hasil terapi tertentu. Gambaran yang paling tepat untuk anak Anda datang dari dokter dan terapis yang memeriksanya. NINDS dan Cleveland Clinic sama-sama menegaskan bahwa hipotonia itu sendiri tidak memengaruhi kecerdasan.`),

  h2('memilih-fisioterapis', 'Memilih Fisioterapis untuk Anak'),
  p(`ChoosePT menyarankan beberapa pertimbangan saat memilih fisioterapis: pengalaman menangani hipotonia atau kondisi penyebabnya, kekhususan di bidang fisioterapi anak, dan praktik yang berfokus pada bayi dan anak. Jangan ragu menanyakan pengalaman terapis menangani anak dengan kondisi serupa, dan siapkan penjelasan serinci mungkin tentang keseharian anak.`),
  p(`Di Indonesia, jalur yang lazim dimulai dari Posyandu atau Puskesmas, lalu ke dokter spesialis anak, yang dapat merujuk ke dokter rehabilitasi medik dan fisioterapis. Pastikan anak ditangani oleh fisioterapis berizin yang bekerja berdasarkan hasil pemeriksaan dokter, dan bawa semua hasil pemeriksaan serta catatan Anda ke setiap kunjungan.`),
  ul([
    'Apa tujuan terapi untuk anak saya dalam beberapa bulan ke depan?',
    'Aktivitas apa yang aman dilakukan di rumah, dan apa yang sebaiknya dihindari?',
    'Bagaimana cara menggendong dan memosisikan anak saya dengan benar?',
    'Apakah anak saya perlu dinilai juga oleh terapis okupasi atau terapis wicara?',
    'Tanda apa yang membuat saya perlu segera menghubungi dokter?',
  ]),

  h2('kesalahan-umum', 'Kesalahan Umum yang Sebaiknya Dihindari'),
  ul([
    '<strong>Menganggap hipotonia sebagai diagnosis akhir.</strong> Hipotonia adalah gejala. Pencarian penyebab oleh dokter tetap penting karena menentukan penanganan dan prognosis.',
    '<strong>Menunggu diagnosis lengkap sebelum mulai dukungan.</strong> AAP menganjurkan pemeriksaan penyebab dan rujukan intervensi dini berjalan bersamaan.',
    '<strong>Menyamakan tonus dengan kekuatan.</strong> Anak dengan tonus rendah tidak selalu lemah, dan sebaliknya. Biarkan terapis yang menilai.',
    '<strong>Mengikuti program latihan dari internet.</strong> Latihan yang tidak sesuai dengan kondisi sendi dan penyebab hipotonia bisa berisiko. Mintalah program tertulis dari terapis yang memeriksa anak.',
    '<strong>Percaya pada janji kesembuhan cepat.</strong> Bukti ilmiah untuk berbagai pendekatan masih berkualitas rendah sampai sangat rendah, dan hasil sangat bergantung pada penyebab. Waspadai pihak yang menjanjikan hasil pasti.',
  ]),

  faqHtml,
];

const tocItems = [...bodyParts.join('\n').matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map((m) => `<li><a href="#${m[1]}">${m[2]}</a></li>`);
const toc = `<div class="toc"><h3>Daftar Isi</h3><ol>${tocItems.join('')}</ol></div>`;
const bodyHtml = [bodyParts[0], toc, ...bodyParts.slice(1)].join('\n');

const PROVENANCE = `<div class="article-provenance" style="margin:2rem 0;padding:1.5rem;background:#FFFFFF;border:1px solid #DDE3F0;border-radius:10px;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Tentang artikel ini</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.25rem;font-size:0.95rem;line-height:1.85;color:#333;">
            <li><strong>Ditulis oleh:</strong> Tim YUKA (Yayasan Ukhuwah Kaffah Amanatullah), pengelola Sekolah Inklusi Taruna Imani, Sleman, Yogyakarta.</li>
            <li><strong>Dasar rujukan:</strong> medlineplus.gov (National Library of Medicine), teks informasi NINDS, clevelandclinic.org, StatPearls (NCBI Bookshelf), choosept.com (American Physical Therapy Association), idai.or.id, serta publikasi ilmiah yang ditautkan langsung di bagian sumber di bawah artikel ini.</li>
            <li><strong>Terbit:</strong> 12 Oktober 2026. <strong>Pembaruan terakhir:</strong> 12 Oktober 2026.</li>
<!-- MEDICAL_REVIEW_STATUS:START -->
            <li><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik, <strong>belum ditinjau oleh tenaga kesehatan berizin</strong>. Tinjauan oleh tenaga kesehatan berkredensial sedang kami siapkan dan status ini akan diperbarui di halaman ini begitu selesai. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk diagnosis dan program terapi, rujuklah pada dokter anak, dokter rehabilitasi medik, atau fisioterapis berizin yang memeriksa anak.</li>
          <!-- MEDICAL_REVIEW_STATUS:END -->
            <li><strong>Kebijakan koreksi:</strong> jika Anda menemukan klaim yang keliru atau sumber yang tidak cocok, beri tahu kami lewat <a href="/kontak">halaman kontak</a>. Kami memperbaiki isinya dan mencantumkan catatan koreksi secara terbuka.</li>
          </ul>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional dan bukan alat diagnosis. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>`;

const article = {
  slug,
  titleTag: 'Terapi Fisik untuk Anak Hipotonia: Panduan Orang Tua | YUKA',
  metaDesc: 'Terapi fisik untuk anak hipotonia: arti tonus otot rendah, siapa yang mendiagnosis, tujuan fisioterapi, dan bukti ilmiahnya. Baca panduan lengkapnya.',
  keywords: 'terapi fisik untuk anak hipotonia, fisioterapi hipotonia, hipotonia pada anak, tonus otot rendah, floppy infant, fisioterapi anak',
  ogTitle: 'Terapi Fisik untuk Anak Hipotonia: Panduan Orang Tua',
  ogDesc: 'Hipotonia adalah gejala, bukan diagnosis. Pahami peran dokter dan fisioterapis, tujuan terapi fisik, pendekatan yang umum, dan seberapa kuat bukti ilmiahnya.',
  datePublished: DATE,
  dateModified: DATE,
  dateDisplay: '12 Okt 2026',
  readTime: '12 menit baca',
  category: 'Pendidikan',
  h1: 'Terapi Fisik untuk Anak Hipotonia: Panduan Orang Tua',
  crumb: 'Terapi Fisik untuk Anak Hipotonia',
  parent: { href: 'terapi-fisik-untuk-abk', name: 'Terapi Fisik untuk ABK' },
  about: ['Hipotonia', 'Fisioterapi anak', 'Tonus otot'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'terapi-fisik-untuk-abk', title: 'Terapi Fisik untuk ABK', desc: 'Gambaran umum fisioterapi untuk anak berkebutuhan khusus.' },
    { href: 'terapi-fisik-untuk-anak-terlambat-jalan', title: 'Terapi Fisik untuk Anak Terlambat Jalan', desc: 'Dukungan fisioterapi untuk anak yang terlambat berjalan.' },
    { href: 'tanda-keterlambatan-motorik-kasar-anak-2-tahun', title: 'Tanda Keterlambatan Motorik Kasar Anak 2 Tahun', desc: 'Tonggak gerak usia 18 sampai 30 bulan dan kapan perlu ke dokter.' },
    { href: 'intervensi-dini', title: 'Intervensi Dini ABK', desc: 'Mengapa dukungan sebaiknya dimulai sedini mungkin.' },
  ],
  tags: ['Hipotonia', 'Fisioterapi', 'TerapiFisik', 'TumbuhKembangAnak'],
  sources: [
    { url: SRC.medline, label: 'MedlinePlus (U.S. National Library of Medicine), Hypotonia' },
    { url: SRC.ninds, label: 'National Institute of Neurological Disorders and Stroke, Hypotonia (teks NINDS dimuat ulang BrainFacts.org)' },
    { url: SRC.cleveland, label: 'Cleveland Clinic, Hypotonia in Babies' },
    { url: SRC.statpearls, label: 'Madhok SS, Shabbir N. Hypotonia. StatPearls, NCBI Bookshelf (PMID 32965880)' },
    { url: SRC.choosept, label: 'American Physical Therapy Association (ChoosePT), Physical Therapy Guide to Hypotonia (Low Muscle Tone), disusun bersama APTA Academy of Pediatric Physical Therapy' },
    { url: SRC.paleg, label: 'Paleg GS, Hidalgo Robles A, Govender P, Livingstone RW (2025), Occupational and Physical Therapy Interventions for Young Children with Developmental Central Hypotonia: An Overview of Systematic Reviews, Disabilities 5(1)' },
    { url: SRC.noritz, label: 'Noritz GH, Murphy NA (2013), Motor delays: early identification and evaluation, Pediatrics (PMID 23713113)' },
    { url: SRC.idai, label: 'Ikatan Dokter Anak Indonesia, Mengenal Keterlambatan Perkembangan Umum pada Anak' },
  ],
  sourcesCheckedNote: 'Seluruh sumber dibaca dari teks aslinya pada 12 Oktober 2026 (StatPearls lewat arsip Wayback Machine karena NCBI menolak akses otomatis; teks NINDS lewat BrainFacts.org karena halaman ninds.nih.gov kini dialihkan; tinjauan Paleg dan laporan Noritz dari abstrak resminya). Artikel ini bukan alat diagnosis dan tidak memuat program latihan berdosis.',
  editorialHtml: PROVENANCE,
};

const html = renderArticlePage(article);

if (/[—–]/.test(html)) throw new Error('em/en dash ditemukan');
if (/href="(\.\.\/artikel\/)?[a-z0-9-]+\.html"/.test(bodyHtml)) throw new Error('tautan internal .html ditemukan');

// Tautan internal hanya ke artikel yang sudah tayang (berkas ada DAN kartu di blog.html atau jadwal <= hari terbit).
const blog = fs.readFileSync(path.join(ROOT, 'blog.html'), 'utf8');
const schedule = JSON.parse(fs.readFileSync(path.join(ROOT, 'publish-schedule.json'), 'utf8'));
const dueToday = new Set(schedule.filter((e) => e.date <= DATE).map((e) => e.slug));
const internal = [...new Set([...bodyHtml.matchAll(/<a href="([a-z0-9-]+)"/g), ...article.related.map((r) => [null, r.href])].map((m) => m[1]))];
const notLive = internal.filter((s) => !fs.existsSync(path.join(ROOT, 'artikel', `${s}.html`)) || !(blog.includes(`artikel/${s}"`) || dueToday.has(s)));
if (notLive.length) throw new Error(`tautan ke artikel belum tayang: ${notLive.join(', ')}`);

fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, internal: internal.length, site: SITE, images: [hero.file, ...Object.values(IMG)] }, null, 2));

'use strict';
/*
 * Artikel baru: tanda-keterlambatan-motorik-kasar-anak-2-tahun (Trello pwSdy42Q, jadwal kartu 2026-10-10, tayang 2026-10-12).
 * Fokus SEMPIT: usia 2 tahun (rentang 18 sampai 30 bulan). Artikel umum per usia ada di
 * tanda-keterlambatan-motorik-kasar (bayi sampai prasekolah) dan alur skrining umum ada di
 * langkah-langkah-deteksi-dini-tumbuh-kembang-anak; keduanya ditautkan, isinya tidak diulang.
 * Setiap klaim dibaca dari TEKS sumber pada 12 Oktober 2026: CDC (lewat snapshot Wayback Januari 2026,
 * cdc.gov menolak akses otomatis), HealthyChildren/AAP, abstrak WHO MGRS dan Noritz 2013 (Europe PMC),
 * Zubler 2022 (PMC9680195), IDAI, ayosehat.kemkes.go.id, dokumentasi SATUSEHAT Kemenkes.
 * Foto: potongan tanpa wajah dari dokumentasi YUKA, caption tanpa label diagnosis.
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags, SITE } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'tanda-keterlambatan-motorik-kasar-anak-2-tahun';
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
  cdc18: 'https://www.cdc.gov/act-early/milestones/18-months.html',
  cdc2: 'https://www.cdc.gov/act-early/milestones/2-years.html',
  cdc30: 'https://www.cdc.gov/act-early/milestones/30-months.html',
  cdcConcerned: 'https://www.cdc.gov/act-early/families/concerned.html',
  aap2: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Developmental-Milestones-2-Year-Olds.aspx',
  zubler: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9680195/',
  who: 'https://pubmed.ncbi.nlm.nih.gov/16817682/',
  noritz: 'https://pubmed.ncbi.nlm.nih.gov/23713113/',
  idai: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/mengenal-keterlambatan-perkembangan-umum-pada-anak',
  kia: 'https://ayosehat.kemkes.go.id/rahasia-anak-sehat-dan-cerdas-lakukan-stimulasi-tumbuh-kembang-dengan-buku-kia',
  satusehat: 'https://satusehat.kemkes.go.id/platform/docs/id/interoperability/tumbuh-kembang-new/',
};

const hero = image(
  'Dokumentasi/artikel/tanda-keterlambatan-motorik-kasar-anak-2-tahun-hero.webp',
  'Kaki beberapa anak berkaus kaki duduk berjajar di anak tangga batu candi, dengan papan tanda alas kaki harap dilepas',
  'Anak tangga batu di kompleks candi saat kunjungan edukasi. Naik tangga termasuk kemampuan gerak kasar yang mulai dilatih sekitar usia 2 tahun. Foto dipotong agar wajah tidak tampak; anak dalam foto bukan anak usia 2 tahun dan ini bukan sesi pemeriksaan.'
);
const IMG = {
  jalan: 'Dokumentasi/artikel/tanda-keterlambatan-motorik-kasar-anak-2-tahun-berjalan-jalur.webp',
  sepatu: 'Dokumentasi/artikel/tanda-keterlambatan-motorik-kasar-anak-2-tahun-duduk-batu.webp',
  berdiri: 'Dokumentasi/artikel/tanda-keterlambatan-motorik-kasar-anak-2-tahun-berdiri-meja.webp',
  kue: 'Dokumentasi/artikel/tanda-keterlambatan-motorik-kasar-anak-2-tahun-kue.webp',
};

const faq = [
  {
    q: 'Anak saya 2 tahun belum bisa berjalan sendiri. Apakah perlu ke dokter?',
    a: 'Ya, sebaiknya segera. American Academy of Pediatrics menyarankan orang tua memberi tahu dokter anak bila anak belum bisa berjalan pada usia 18 bulan. Studi WHO pada 816 anak di lima negara juga mencatat batas atas rentang berjalan sendiri sekitar 17,6 bulan. Anak 2 tahun yang belum berjalan sudah melewati kedua patokan itu, jadi pemeriksaan tidak perlu ditunda.',
  },
  {
    q: 'Apa saja kemampuan motorik kasar anak usia 2 tahun?',
    a: 'Menurut daftar tonggak perkembangan CDC versi revisi 2022, sebagian besar anak (75 persen atau lebih) pada usia 2 tahun sudah bisa menendang bola, berlari, dan berjalan menaiki beberapa anak tangga dengan atau tanpa bantuan. AAP menambahkan contoh lain seperti menarik mainan sambil berjalan, berdiri berjinjit, dan naik turun perabot tanpa dibantu.',
  },
  {
    q: 'Anak 2 tahun sering berjalan jinjit. Apakah itu tanda keterlambatan?',
    a: 'Belum tentu, tetapi perlu disampaikan ke dokter. AAP mencantumkan anak yang belum menunjukkan pola jalan tumit ke jari yang matang setelah beberapa bulan berjalan, atau hanya berjalan dengan ujung jari kaki, sebagai tanda yang perlu diberitahukan kepada dokter anak. Dokter yang akan menilai penyebabnya.',
  },
  {
    q: 'Apakah anak yang terlambat berjalan pasti punya gangguan?',
    a: 'Tidak pasti. Keterlambatan motorik kasar adalah tanda, bukan diagnosis. Penyebabnya bisa beragam dan sebagian anak mengejar dengan dukungan yang tepat. Justru karena penyebabnya beragam, pemeriksaan oleh dokter anak penting agar langkah berikutnya tepat sasaran.',
  },
  {
    q: 'Bolehkah menunggu sampai anak 3 tahun?',
    a: 'Sebaiknya tidak. Revisi daftar tonggak CDC tahun 2022 (Zubler dan rekan) secara sengaja memilih patokan yang dicapai sebagian besar anak, dengan tujuan mengurangi sikap menunggu dan melihat. CDC juga menulis: jangan menunggu, bicarakan dengan dokter bila anak belum mencapai satu atau lebih tonggak.',
  },
  {
    q: 'Di mana saya bisa memeriksakan perkembangan anak di Indonesia?',
    a: 'Langkah pertama bisa di Posyandu dan Puskesmas. Kemenkes menganjurkan orang tua memakai ceklis perkembangan di Buku KIA dan memberi tahu kader bila ada jawaban "Tidak", agar anak dibantu mendapat pemeriksaan tenaga kesehatan di Puskesmas. Dari sana anak dapat dirujuk ke dokter spesialis anak dan layanan rehabilitasi medik atau fisioterapi.',
  },
  {
    q: 'Apa itu KPSP dan bagaimana hasilnya dibaca?',
    a: 'KPSP (Kuesioner Pra Skrining Perkembangan) adalah alat skrining yang dipakai tenaga kesehatan dalam program SDIDTK. Dalam dokumentasi SATUSEHAT Kemenkes, hasilnya dicatat dalam tiga kategori: perkembangan sesuai usia, meragukan, atau curiga adanya penyimpangan. Hasil skrining bukan diagnosis; hasil meragukan atau curiga penyimpangan berarti anak perlu tindak lanjut.',
  },
  {
    q: 'Apakah artikel ini bisa dipakai untuk mendiagnosis anak sendiri?',
    a: 'Tidak. Artikel ini membantu orang tua mengamati dan menyiapkan pertanyaan untuk dokter. Penilaian perkembangan, pemeriksaan otot dan saraf, serta rencana terapi hanya bisa dilakukan oleh dokter anak, dokter rehabilitasi medik, atau fisioterapis berizin yang memeriksa anak secara langsung.',
  },
];

const faqHtml = `${h2('faq', 'Pertanyaan yang Sering Diajukan')}\n${faq.map(({ q, a: ans }) => `${h3(q)}${p(ans)}`).join('\n')}`;

const bodyParts = [
  `<div class="answer-box" style="background:#F0F4FF;border-left:4px solid #2B3A67;padding:1.25rem 1.5rem;margin:0 0 2rem;border-radius:0 12px 12px 0;"><strong>Jawaban singkat:</strong> Pada usia 2 tahun, sebagian besar anak sudah bisa menendang bola, berlari, dan menaiki beberapa anak tangga dengan atau tanpa bantuan (CDC). Tanda keterlambatan motorik kasar yang perlu dibicarakan dengan dokter antara lain belum bisa berjalan sendiri, belum bisa mendorong mainan beroda, hanya berjalan jinjit, gerakan tubuh kiri dan kanan tidak seimbang, otot sangat kaku atau sangat lemas, atau kehilangan kemampuan yang dulu sudah bisa. Jangan menunggu: bawa anak ke Puskesmas atau dokter anak untuk diperiksa. Artikel ini bukan alat diagnosis.</div>`,

  p(`Usia 2 tahun sering menjadi masa ketika orang tua mulai membandingkan. Anak tetangga sudah berlari mengejar bola, sepupunya sudah naik tangga sambil berpegangan, sementara anak kita masih ragu melangkah atau sering terjatuh. Wajar kalau muncul pertanyaan: ini masih normal, atau tanda keterlambatan motorik kasar?`),
  p(`Artikel ini khusus membahas anak usia sekitar 2 tahun, yaitu rentang 18 sampai 30 bulan. Kita akan melihat kemampuan gerak yang umumnya sudah muncul, seberapa lebar rentang normalnya, tanda yang perlu dibicarakan dengan dokter, dan apa yang terjadi saat anak diperiksa di Indonesia. Kalau Anda butuh gambaran untuk semua usia dari bayi sampai prasekolah, bacalah ${a('tanda-keterlambatan-motorik-kasar', 'tanda keterlambatan motorik kasar pada anak')} yang membahasnya per rentang usia. Langkah pemantauan umum lewat Buku KIA dan Posyandu ada di ${a('langkah-langkah-deteksi-dini-tumbuh-kembang-anak', 'langkah-langkah deteksi dini tumbuh kembang anak')}.`),
  p(`Satu hal perlu ditegaskan sejak awal: tulisan ini membantu Anda mengamati dan menyiapkan pertanyaan, bukan memberi label. Hanya tenaga kesehatan yang memeriksa anak secara langsung yang bisa menilai apakah ada keterlambatan dan apa penyebabnya.`),

  h2('kenapa-usia-2-tahun', 'Kenapa Usia 2 Tahun Menjadi Titik Periksa Penting'),
  p(`Motorik kasar adalah kemampuan memakai otot besar untuk duduk, berdiri, berjalan, berlari, dan menjaga keseimbangan. Penjelasan dasarnya ada di artikel ${a('motorik-kasar-adalah', 'motorik kasar adalah')}. Di tahun kedua kehidupan, kemampuan ini berubah cepat: dari langkah pertama yang goyah menjadi berlari, menendang, dan naik tangga.`),
  p(`Karena perubahannya cepat, para ahli memasang beberapa titik periksa di sekitar usia ini. Daftar tonggak perkembangan CDC (program <em>Learn the Signs. Act Early.</em>) punya ceklis terpisah untuk usia ${ext(SRC.cdc18, '18 bulan')}, ${ext(SRC.cdc2, '2 tahun')}, dan ${ext(SRC.cdc30, '30 bulan')}. Laporan klinis American Academy of Pediatrics tentang keterlambatan motorik (${ext(SRC.noritz, 'Noritz dan Murphy, Pediatrics 2013')}) menyarankan skrining perkembangan formal pada kunjungan anak sehat usia 9, 18, 30, dan 48 bulan. Dua dari titik itu, 18 dan 30 bulan, mengapit usia 2 tahun.`),
  p(`Daftar CDC yang dipakai sekarang adalah hasil revisi besar tahun 2022. Zubler dan rekan, dalam ${ext(SRC.zubler, 'jurnal Pediatrics')}, menjelaskan bahwa tim ahli yang dibentuk AAP memilih tonggak yang dicapai sebagian besar anak (75 persen atau lebih) pada usia kunjungan tertentu. Salah satu tujuannya adalah memperjelas kapan sebagian besar anak bisa diharapkan mencapai sebuah tonggak, supaya orang tua dan tenaga kesehatan tidak terjebak sikap "tunggu dan lihat". Revisi itu juga menambah ceklis baru untuk usia 15 dan 30 bulan.`),
  p(`Artinya, kalau anak 2 tahun belum menunjukkan kemampuan dalam daftar CDC, itu bukan sekadar "agak lambat dari rata-rata". Tonggak itu memang sudah dicapai oleh mayoritas anak seusianya, sehingga ketidakhadirannya layak dibicarakan dengan dokter.`),

  h2('kemampuan-usia-2-tahun', 'Kemampuan Motorik Kasar yang Umumnya Sudah Muncul di Usia 2 Tahun'),
  p(`Halaman tonggak usia 2 tahun milik ${ext(SRC.cdc2, 'CDC')} mencantumkan tiga kemampuan gerak kasar: menendang bola, berlari, dan berjalan (bukan merangkak atau memanjat) menaiki beberapa anak tangga, dengan atau tanpa bantuan. Di bagian yang sama CDC juga mencantumkan makan dengan sendok, yang lebih dekat ke motorik halus.`),
  p(`American Academy of Pediatrics lewat ${ext(SRC.aap2, 'HealthyChildren.org')} memberi daftar gerak untuk tahun kedua yang lebih rinci: berjalan sendiri, menarik mainan sambil berjalan, membawa mainan besar atau beberapa mainan sambil berjalan, mulai berlari, berdiri berjinjit, menendang bola, naik dan turun dari perabot tanpa dibantu, serta naik dan turun tangga sambil berpegangan.`),
  p(`Supaya lebih mudah dibaca, tabel berikut menyandingkan tonggak gerak kasar CDC pada tiga titik periksa di sekitar usia 2 tahun. Ingat, tonggak ini adalah hal yang sudah bisa dilakukan sebagian besar anak pada usia tersebut, bukan usia rata-rata ketika kemampuan itu pertama muncul.`),
  table(
    'Tonggak gerak kasar menurut CDC di sekitar usia 2 tahun (sebagian besar anak, 75 persen atau lebih)',
    ['Usia', 'Kemampuan gerak kasar menurut CDC', 'Contoh yang bisa diamati di rumah'],
    [
      ['18 bulan', 'Berjalan tanpa berpegangan pada siapa pun atau apa pun; naik dan turun dari sofa atau kursi tanpa bantuan', 'Berjalan dari satu ruangan ke ruangan lain tanpa dituntun; memanjat sofa sendiri lalu turun lagi'],
      ['2 tahun', 'Menendang bola; berlari; berjalan menaiki beberapa anak tangga dengan atau tanpa bantuan', 'Menendang bola plastik ke arah Anda; berlari kecil saat bermain kejar-kejaran; naik dua atau tiga anak tangga sambil dipegangi tangannya'],
      ['30 bulan', 'Melompat dengan kedua kaki terangkat dari lantai', 'Melompat di tempat atau melompat kecil dari garis di lantai dengan dua kaki'],
    ]
  ),
  fig(
    IMG.jalan,
    'Kaki beberapa anak bersepatu dan bersandal berdiri dan melangkah di jalur paving taman',
    'Berjalan di jalur paving yang tidak rata menuntut keseimbangan. Pada usia 18 bulan, sebagian besar anak sudah berjalan tanpa berpegangan. Foto dipotong agar wajah tidak tampak; ini dokumentasi kunjungan edukasi, bukan sesi pemeriksaan.'
  ),

  h2('rentang-normal', 'Seberapa Lebar Rentang Normalnya?'),
  p(`Setiap anak punya kecepatannya sendiri, dan rentang normal untuk berjalan memang lebar. Studi Perkembangan Motorik WHO (${ext(SRC.who, 'WHO Motor Development Study, Acta Paediatrica 2006')}) mengikuti 816 anak berusia 4 sampai 24 bulan di Ghana, India, Norwegia, Oman, dan Amerika Serikat. Studi ini menyusun "jendela pencapaian" untuk enam tonggak gerak kasar, dibatasi persentil 1 dan 99.`),
  p(`Hasilnya, jendela berjalan sendiri adalah 8,2 sampai 17,6 bulan, salah satu jendela yang paling lebar (sekitar 9,4 bulan). Para peneliti menulis bahwa jendela ini menggambarkan variasi normal pada anak sehat, dan dapat dipakai sebagai sinyal perlunya skrining bila seorang anak tampak terlambat mencapainya.`),
  p(`Ikatan Dokter Anak Indonesia (${ext(SRC.idai, 'IDAI')}) memberi gambaran serupa dalam bahasa yang sederhana: seorang anak dikatakan normal jika dapat berjalan mulai usia 10 hingga 18 bulan, sehingga wajar ada perbedaan di antara anak yang seusia. Kalau tonggak yang lebih rinci untuk tahun pertama ingin Anda cek, lihat ${a('milestone-motorik-kasar-anak-0-12-bulan', 'milestone motorik kasar anak 0-12 bulan')}.`),
  p(`Jadi, perbedaan beberapa minggu atau bulan di antara anak 1 tahunan itu wajar. Namun pada usia 2 tahun, semua patokan di atas sudah terlewati. Anak 24 bulan yang belum berjalan sendiri berada di luar jendela WHO, di luar rentang yang disebut IDAI, dan sudah melewati usia 18 bulan yang disebut AAP sebagai saat untuk memberi tahu dokter.`),
  table(
    'Patokan usia berjalan sendiri dari tiga sumber',
    ['Sumber', 'Patokan', 'Arti untuk anak usia 2 tahun'],
    [
      ['WHO Motor Development Study (2006)', 'Jendela berjalan sendiri 8,2 sampai 17,6 bulan (persentil 1 sampai 99)', 'Belum berjalan di usia 24 bulan berada di luar jendela ini'],
      ['IDAI', 'Normal bila dapat berjalan mulai usia 10 hingga 18 bulan', 'Belum berjalan di usia 2 tahun di luar rentang ini'],
      ['AAP (HealthyChildren.org)', 'Beri tahu dokter anak bila belum bisa berjalan pada usia 18 bulan', 'Sudah waktunya diperiksa, tidak perlu menunggu'],
      ['CDC (revisi 2022)', 'Sebagian besar anak berjalan tanpa berpegangan pada usia 18 bulan', 'Tonggak 18 bulan belum tercapai, bicarakan dengan dokter'],
    ]
  ),

  h2('tanda-keterlambatan', 'Tanda Keterlambatan Motorik Kasar pada Anak 2 Tahun'),
  p(`Berikut tanda-tanda yang layak dibicarakan dengan dokter, dikelompokkan berdasarkan sumbernya. Satu tanda tidak berarti anak pasti mengalami gangguan. Fungsinya adalah memberi tahu Anda bahwa pemeriksaan sebaiknya dilakukan sekarang.`),
  h3('Belum mencapai tonggak usia 2 tahun'),
  ul([
    '<strong>Belum berjalan sendiri.</strong> AAP menyebut "tidak bisa berjalan pada usia 18 bulan" sebagai tanda yang perlu disampaikan ke dokter anak.',
    '<strong>Belum berlari, belum bisa menendang bola, atau belum bisa menaiki beberapa anak tangga meski dibantu.</strong> Ketiganya adalah tonggak usia 2 tahun dalam daftar CDC. CDC menulis bahwa bila anak belum mencapai satu atau lebih tonggak, orang tua sebaiknya bertindak lebih awal dan berbicara dengan dokter.',
    '<strong>Belum bisa mendorong mainan beroda pada usia 2 tahun.</strong> Ini tercantum dalam daftar tanda waspada AAP untuk rentang usia ini.',
  ]),
  h3('Cara berjalan yang tidak biasa'),
  ul([
    '<strong>Pola jalan tumit ke jari belum matang setelah beberapa bulan berjalan, atau hanya berjalan dengan ujung jari kaki.</strong> AAP mencantumkan keduanya sebagai tanda yang perlu diberitahukan kepada dokter anak.',
    '<strong>Gerakan tidak seimbang antara sisi kiri dan kanan.</strong> IDAI menyebut gerakan yang asimetris, misalnya antara anggota tubuh kiri dan kanan, sebagai tanda bahaya perkembangan motor kasar. Contohnya anak selalu menyeret satu kaki atau hanya memakai satu sisi tubuh saat memanjat.',
  ]),
  h3('Tanda pada otot dan gerakan'),
  ul([
    '<strong>Otot terasa sangat kaku atau sangat lemas.</strong> IDAI memasukkan gangguan tonus otot (hiper atau hipotonia) ke dalam tanda bahaya motor kasar.',
    '<strong>Gerakan yang tidak terkontrol</strong> juga termasuk tanda bahaya menurut IDAI, begitu pula gangguan refleks tubuh.',
  ]),
  fig(
    IMG.sepatu,
    'Seorang anak duduk di atas batu besar sambil memegang sepatu kets putihnya dengan kedua tangan',
    'Duduk di permukaan batu yang tidak rata lalu bangkit lagi melatih kekuatan tubuh dan keseimbangan. Foto dipotong agar wajah tidak tampak; ini dokumentasi kegiatan luar ruang, bukan sesi asesmen.'
  ),

  h2('jangan-ditunda', 'Tanda yang Tidak Boleh Ditunda'),
  p(`Ada satu tanda yang disebut CDC secara khusus di setiap ceklis usianya: <strong>anak kehilangan kemampuan yang dulu sudah dimilikinya.</strong> Misalnya anak yang tiga bulan lalu sudah berjalan sendiri kini kembali minta dituntun terus, atau anak yang dulu bisa naik sofa kini tidak bisa lagi. CDC meminta orang tua untuk tidak menunggu dan langsung berbicara dengan dokter, menyampaikan kekhawatiran, serta menanyakan skrining perkembangan.`),
  p(`Tanda dari IDAI di bagian sebelumnya, yaitu gerakan asimetris, otot sangat kaku atau sangat lemas, dan gerakan tidak terkontrol, juga sebaiknya diperiksakan dalam waktu dekat, bukan menunggu jadwal kontrol berikutnya. IDAI menyebut daftar ini sebagai tanda bahaya (<em>red flag</em>) yang perlu dikenali orang tua.`),
  p(`Dalam ${ext(SRC.cdcConcerned, 'panduan untuk keluarga')}, CDC juga mengingatkan bahwa orang tua adalah pihak yang paling mengenal anaknya. Bila anak belum mencapai tonggak usianya, atau Anda merasa ada masalah pada cara anak bermain, belajar, berbicara, bertingkah laku, dan bergerak, CDC menganjurkan untuk berbicara dengan dokter anak dan tidak menunggu.`),

  h2('ranah-lain', 'Perhatikan Juga Ranah Perkembangan Lain'),
  p(`Keterlambatan motorik kasar kadang berdiri sendiri, kadang muncul bersama keterlambatan di bidang lain. IDAI menjelaskan bahwa ranah perkembangan anak secara garis besar terdiri atas motor kasar, motor halus, bahasa atau bicara, dan personal sosial atau kemandirian. Bila keterlambatan yang bermakna terjadi pada dua ranah atau lebih, kondisinya disebut keterlambatan perkembangan umum (<em>global developmental delay</em>). IDAI memperkirakan sekitar 5 hingga 10 persen anak mengalami keterlambatan perkembangan, dan sekitar 1 sampai 3 persen anak di bawah 5 tahun mengalami keterlambatan perkembangan umum.`),
  p(`Itulah sebabnya, saat memeriksa gerak anak 2 tahun, perhatikan juga hal lain. Daftar tanda waspada AAP untuk usia ini, misalnya, juga memuat anak yang belum memakai kalimat dua kata dan belum bisa mengikuti perintah sederhana pada usia 2 tahun. IDAI mencantumkan "belum ada kata berarti" pada usia 24 bulan sebagai tanda bahaya. Kalau Anda juga ragu soal kemampuan tangan anak, bacalah ${a('milestone-motorik-halus-anak-1-3-tahun', 'milestone motorik halus anak 1-3 tahun')} dan ${a('tanda-keterlambatan-motorik-halus', 'tanda keterlambatan motorik halus')}. Perbedaan kedua jenis motorik dijelaskan di ${a('perbedaan-motorik-kasar-dan-halus', 'perbedaan motorik kasar dan halus')}.`),
  p(`Istilah keterlambatan perkembangan umum sering disalahpahami sebagai diagnosis tertentu. Penjelasan tentang hubungannya dengan autisme ada di ${a('apakah-gdd-sama-dengan-autis', 'apakah GDD sama dengan autis')}. Sekali lagi, hanya tenaga kesehatan yang dapat menilai hal ini.`),
  fig(
    IMG.kue,
    'Tangan orang dewasa menyodorkan kue bulat oranye berhias wajah lucu, dengan tangan anak berbaju merah muda di latar belakang',
    'Membentuk dan menghias adonan kue melatih gerakan tangan dan jari, yang termasuk motorik halus, berbeda dengan motorik kasar yang memakai otot besar. Foto dipotong agar wajah tidak tampak; ini dokumentasi kegiatan membuat kue, bukan sesi asesmen.'
  ),

  h2('mengamati-di-rumah', 'Cara Mengamati Gerak Anak di Rumah dengan Tenang'),
  p(`Pengamatan di rumah membantu Anda membawa informasi yang jelas ke dokter. Beberapa cara sederhana berikut tidak membutuhkan alat khusus:`),
  ol([
    '<strong>Amati dalam situasi sehari-hari, beberapa hari berturut-turut.</strong> Anak bisa tampak enggan bergerak saat lelah, sakit, atau di tempat ramai. Pola dalam beberapa hari lebih bermakna daripada satu kejadian.',
    '<strong>Catat apa yang SUDAH bisa dilakukan.</strong> Misalnya "berjalan sendiri sejak usia 15 bulan, belum bisa naik tangga walau dipegangi". Catatan seperti ini lebih berguna daripada kesimpulan "anak saya lambat".',
    '<strong>Rekam video pendek.</strong> Video anak berjalan, berlari, atau naik tangga membantu dokter melihat cara berjalan yang mungkin tidak muncul saat di ruang periksa.',
    '<strong>Isi ceklis perkembangan di Buku KIA.</strong> Kementerian Kesehatan, lewat <a href="' + SRC.kia + '" target="_blank" rel="noopener">Ayo Sehat</a>, menjelaskan bahwa Buku KIA memuat ceklis perkembangan sesuai usia. Orang tua dianjurkan segera memberi tahu kader bila ada isian yang terjawab "Tidak", agar anak segera mendapat bantuan tenaga kesehatan di Puskesmas.',
    '<strong>Bandingkan anak dengan dirinya sendiri.</strong> Apakah dalam tiga bulan terakhir ada kemajuan, diam di tempat, atau malah mundur? Kemunduran adalah tanda yang perlu segera diperiksakan.',
  ]),
  table(
    'Contoh lembar catatan pengamatan gerak kasar anak usia 2 tahun',
    ['Kemampuan', 'Sudah bisa sendiri', 'Bisa dengan bantuan', 'Belum bisa', 'Catatan orang tua'],
    [
      ['Berjalan tanpa berpegangan', '', '', '', 'Sejak usia berapa? Sering jatuh?'],
      ['Berlari', '', '', '', 'Seimbang? Ada sisi yang tertinggal?'],
      ['Menendang bola', '', '', '', 'Kaki kanan, kiri, atau keduanya?'],
      ['Naik beberapa anak tangga', '', '', '', 'Berpegangan pada apa?'],
      ['Mendorong atau menarik mainan beroda', '', '', '', ''],
      ['Pola jalan (tumit dulu atau jinjit)', '', '', '', 'Jinjit sesekali atau hampir selalu?'],
    ]
  ),
  p(`Lembar ini hanya alat bantu mencatat, bukan alat skrining resmi. Bawa catatan dan video Anda saat konsultasi.`),

  h2('saat-diperiksa', 'Apa yang Terjadi Saat Anak Diperiksa'),
  p(`Di Indonesia, pintu masuk yang paling dekat adalah Posyandu dan Puskesmas lewat program Stimulasi, Deteksi, dan Intervensi Dini Tumbuh Kembang (SDIDTK). Salah satu alat yang dipakai tenaga kesehatan adalah Kuesioner Pra Skrining Perkembangan (KPSP). Dokumentasi ${ext(SRC.satusehat, 'SATUSEHAT Kementerian Kesehatan')} mencatat hasil KPSP dalam tiga kategori: perkembangan sesuai usia, perkembangan meragukan, dan perkembangan curiga adanya penyimpangan. Hasil skrining bukan diagnosis, melainkan penentu apakah anak perlu tindak lanjut.`),
  p(`Bila skrining atau kekhawatiran Anda mengarah ke masalah gerak, anak biasanya dirujuk ke dokter spesialis anak. Laporan klinis ${ext(SRC.noritz, 'AAP tentang keterlambatan motorik')} menekankan pemeriksaan saraf dengan perhatian khusus pada tonus otot. Laporan itu juga menjelaskan bahwa pemeriksaan penunjang dipilih sesuai temuan, misalnya MRI otak untuk anak dengan tonus otot tinggi dan pemeriksaan kadar enzim kreatin kinase dalam darah untuk anak dengan tonus otot rendah. Keputusan pemeriksaan ini sepenuhnya di tangan dokter, bukan sesuatu yang perlu orang tua minta sendiri.`),
  p(`Pesan penting dari laporan yang sama: pemeriksaan untuk mencari penyebab sebaiknya berjalan <strong>bersamaan</strong> dengan rujukan ke program intervensi dini, bukan bergantian. Dengan kata lain, anak tidak perlu menunggu diagnosis lengkap untuk mulai mendapat dukungan. Penjelasan tentang konsep ini ada di ${a('intervensi-dini', 'intervensi dini')}.`),
  p(`Dukungan gerak biasanya diberikan oleh dokter spesialis rehabilitasi medik bersama fisioterapis berizin. Gambaran tentang terapinya bisa Anda baca di ${a('terapi-fisik-untuk-anak-terlambat-jalan', 'terapi fisik untuk anak terlambat jalan')} dan ${a('terapi-fisik-untuk-abk', 'terapi fisik untuk ABK')}. Untuk keluarga di DIY, daftar layanan resmi dan alur rujukannya kami rangkum di ${a('klinik-tumbuh-kembang-anak-yogyakarta', 'klinik tumbuh kembang anak Yogyakarta')}.`),
  table(
    'Ringkasan alur dari kekhawatiran sampai dukungan',
    ['Langkah', 'Di mana', 'Yang dilakukan'],
    [
      ['1. Pemantauan', 'Rumah, Posyandu', 'Isi ceklis Buku KIA, catat dan rekam gerak anak, beri tahu kader bila ada jawaban "Tidak"'],
      ['2. Skrining', 'Puskesmas', 'Tenaga kesehatan melakukan skrining SDIDTK, termasuk KPSP; hasil sesuai, meragukan, atau curiga penyimpangan'],
      ['3. Pemeriksaan', 'Dokter spesialis anak', 'Pemeriksaan fisik dan saraf, termasuk tonus otot; pemeriksaan penunjang bila dokter menilai perlu'],
      ['4. Intervensi', 'Rehabilitasi medik, fisioterapis berizin', 'Program latihan sesuai kebutuhan anak, berjalan bersamaan dengan pencarian penyebab'],
    ]
  ),
  fig(
    IMG.berdiri,
    'Beberapa anak berseragam berdiri di sekeliling meja permainan interaktif di lantai keramik museum, tangan mereka menyentuh permukaan meja',
    'Berdiri sambil memakai kedua tangan di meja permainan menuntut keseimbangan tubuh. Foto dipotong agar wajah tidak tampak; ini dokumentasi kunjungan museum, bukan sesi pemeriksaan atau terapi.'
  ),

  h2('dukungan-di-rumah', 'Dukungan di Rumah Sambil Menunggu Pemeriksaan'),
  p(`Sambil menunggu jadwal periksa, Anda tetap bisa memberi banyak kesempatan bergerak. Kesempatan bergerak tidak menggantikan pemeriksaan, tetapi membuat hari-hari anak lebih aktif dan memberi Anda informasi tambahan untuk dokter. Beberapa ide yang aman untuk usia 2 tahun:`),
  ul([
    '<strong>Berjalan di berbagai permukaan</strong> seperti rumput, pasir, atau tikar, dengan pengawasan dan tangan Anda siap menolong.',
    '<strong>Main bola besar yang ringan.</strong> Gulirkan atau tendang pelan bergantian. Rayakan setiap usaha, bukan hanya yang berhasil.',
    '<strong>Naik tangga rendah sambil dipegangi.</strong> Mulai dari satu atau dua anak tangga, selalu didampingi.',
    '<strong>Mainan dorong atau tarik</strong> seperti kereta mainan bertali atau kardus berisi boneka yang didorong bersama.',
    '<strong>Permainan menirukan gerak</strong> seperti berjalan seperti bebek atau berjinjit seperti kucing, dalam suasana santai.',
  ]),
  p(`Ide permainan lain yang sesuai usia ada di ${a('permainan-motorik-kasar', 'permainan motorik kasar')} dan ${a('contoh-motorik-kasar', 'contoh motorik kasar')}. Kalau anak sudah mendapat program dari fisioterapis, ikuti program itu lebih dulu; latihan rumahan yang dijelaskan di ${a('latihan-fisioterapi-anak-di-rumah', 'latihan fisioterapi anak di rumah')} sebaiknya dilakukan atas arahan terapis yang menangani anak.`),
  p(`Di Sekolah Inklusi Taruna Imani, kami melihat bahwa kemajuan gerak sering datang dalam langkah kecil, seperti anak yang berani melangkah tanpa berpegangan di jalur yang sudah ia kenal. Langkah kecil itu layak dihargai, insyaAllah dengan kesabaran dan pendampingan bersama.`),

  h2('kesalahan-umum', 'Kesalahan Umum Saat Menghadapi Keterlambatan Gerak'),
  ul([
    '<strong>Menunggu terlalu lama.</strong> Revisi tonggak CDC 2022 justru dirancang untuk mengurangi sikap tunggu dan lihat. Kalau ragu, tanyakan sekarang.',
    '<strong>Membandingkan dengan saudara atau anak tetangga.</strong> Bandingkan anak dengan patokan dari sumber resmi dan dengan dirinya sendiri beberapa bulan lalu.',
    '<strong>Menganggap satu tanda sebagai diagnosis.</strong> Jalan jinjit atau sering jatuh adalah alasan untuk diperiksa, bukan bukti kondisi tertentu.',
    '<strong>Mengabaikan kemunduran.</strong> Kehilangan kemampuan yang dulu sudah bisa selalu perlu dibicarakan dengan dokter.',
    '<strong>Memaksa latihan berat tanpa arahan.</strong> Latihan yang tidak sesuai bisa membuat anak takut bergerak. Pilih bermain yang menyenangkan dan serahkan program terapi kepada tenaga profesional.',
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
            <li><strong>Dasar rujukan:</strong> cdc.gov, healthychildren.org (American Academy of Pediatrics), idai.or.id, ayosehat.kemkes.go.id, satusehat.kemkes.go.id, serta publikasi ilmiah di PubMed dan PubMed Central. Semua rujukan ditautkan langsung di bagian sumber di bawah artikel ini.</li>
            <li><strong>Terbit:</strong> 12 Oktober 2026. <strong>Pembaruan terakhir:</strong> 12 Oktober 2026.</li>
<!-- MEDICAL_REVIEW_STATUS:START -->
            <li><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik, <strong>belum ditinjau oleh tenaga kesehatan berizin</strong>. Tinjauan oleh tenaga kesehatan berkredensial sedang kami siapkan dan status ini akan diperbarui di halaman ini begitu selesai. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk menilai perkembangan atau merencanakan terapi, rujuklah pada dokter anak, dokter rehabilitasi medik, atau fisioterapis berizin yang memeriksa anak.</li>
          <!-- MEDICAL_REVIEW_STATUS:END -->
            <li><strong>Kebijakan koreksi:</strong> jika Anda menemukan klaim yang keliru atau sumber yang tidak cocok, beri tahu kami lewat <a href="/kontak">halaman kontak</a>. Kami memperbaiki isinya dan mencantumkan catatan koreksi secara terbuka.</li>
          </ul>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional dan bukan alat diagnosis. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>`;

const article = {
  slug,
  titleTag: 'Tanda Keterlambatan Motorik Kasar Anak 2 Tahun | YUKA',
  metaDesc: 'Kenali tanda keterlambatan motorik kasar anak 2 tahun menurut CDC, AAP, WHO, dan IDAI, kapan perlu ke dokter, serta alur periksa di Indonesia. Baca di sini.',
  keywords: 'tanda keterlambatan motorik kasar anak 2 tahun, anak 2 tahun belum bisa jalan, motorik kasar anak 2 tahun, milestone anak 2 tahun, anak jalan jinjit, keterlambatan motorik anak',
  ogTitle: 'Tanda Keterlambatan Motorik Kasar Anak 2 Tahun',
  ogDesc: 'Tonggak gerak kasar usia 18 sampai 30 bulan, rentang normal berjalan menurut WHO dan IDAI, tanda yang perlu dibicarakan dengan dokter, dan alur pemeriksaan di Indonesia.',
  datePublished: DATE,
  dateModified: DATE,
  dateDisplay: '12 Okt 2026',
  readTime: '12 menit baca',
  category: 'Pendidikan',
  h1: 'Tanda Keterlambatan Motorik Kasar Anak 2 Tahun dan Kapan Harus ke Dokter',
  crumb: 'Tanda Keterlambatan Motorik Kasar Anak 2 Tahun',
  parent: { href: 'motorik-kasar-adalah', name: 'Motorik Kasar' },
  about: ['Motorik kasar anak', 'Keterlambatan perkembangan', 'Anak usia 2 tahun'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'tanda-keterlambatan-motorik-kasar', title: 'Tanda Keterlambatan Motorik Kasar pada Anak', desc: 'Gambaran tanda keterlambatan dari bayi sampai usia prasekolah.' },
    { href: 'langkah-langkah-deteksi-dini-tumbuh-kembang-anak', title: 'Langkah-langkah Deteksi Dini Tumbuh Kembang Anak', desc: 'Pemantauan lewat Buku KIA, Posyandu, dan Puskesmas.' },
    { href: 'terapi-fisik-untuk-anak-terlambat-jalan', title: 'Terapi Fisik untuk Anak Terlambat Jalan', desc: 'Mengenal dukungan fisioterapi untuk anak yang terlambat berjalan.' },
    { href: 'permainan-motorik-kasar', title: 'Permainan Motorik Kasar', desc: 'Ide bermain yang melatih gerak tubuh anak.' },
  ],
  tags: ['MotorikKasar', 'TumbuhKembangAnak', 'DeteksiDini', 'Parenting'],
  sources: [
    { url: SRC.cdc18, label: 'CDC, Milestones by 18 Months (Learn the Signs. Act Early.)' },
    { url: SRC.cdc2, label: 'CDC, Milestones by 2 Years (Learn the Signs. Act Early.)' },
    { url: SRC.cdc30, label: 'CDC, Milestones by 30 Months (Learn the Signs. Act Early.)' },
    { url: SRC.cdcConcerned, label: "CDC, Concerned About Your Child's Development?" },
    { url: SRC.aap2, label: 'American Academy of Pediatrics (HealthyChildren.org), Developmental Milestones: 2 Year Olds' },
    { url: SRC.zubler, label: 'Zubler JM dkk. (2022), Evidence-Informed Milestones for Developmental Surveillance Tools, Pediatrics (PMC9680195)' },
    { url: SRC.who, label: 'WHO Multicentre Growth Reference Study Group (2006), WHO Motor Development Study: windows of achievement for six gross motor development milestones, Acta Paediatrica Supplement (PMID 16817682)' },
    { url: SRC.noritz, label: 'Noritz GH, Murphy NA (2013), Motor delays: early identification and evaluation, Pediatrics (PMID 23713113)' },
    { url: SRC.idai, label: 'Ikatan Dokter Anak Indonesia, Mengenal Keterlambatan Perkembangan Umum pada Anak' },
    { url: SRC.kia, label: 'Kementerian Kesehatan RI (Ayo Sehat), Rahasia Anak Sehat dan Cerdas, Lakukan Stimulasi Tumbuh Kembang dengan Buku KIA' },
    { url: SRC.satusehat, label: 'Kementerian Kesehatan RI, SATUSEHAT Platform: Tumbuh Kembang (pencatatan SDIDTK dan KPSP)' },
  ],
  sourcesCheckedNote: 'Seluruh sumber dibaca dari teks aslinya pada 12 Oktober 2026 (halaman CDC dibaca lewat arsip Wayback Machine Januari 2026; studi WHO dan Noritz dari abstrak resminya). Tonggak perkembangan adalah alat bantu mengamati, bukan alat diagnosis.',
  editorialHtml: PROVENANCE,
};

const html = renderArticlePage(article);

if (/[—–]/.test(html)) throw new Error('em/en dash ditemukan');
if (/href="(\.\.\/artikel\/)?[a-z0-9-]+\.html"/.test(bodyHtml)) throw new Error('tautan internal .html ditemukan');

// Tautan internal hanya ke artikel yang sudah tayang: berkas ada DAN (kartu di blog.html ATAU
// entri publish-schedule bertanggal <= hari terbit, yang kartunya ditambahkan workflow pukul 09.00 WIB).
const blog = fs.readFileSync(path.join(ROOT, 'blog.html'), 'utf8');
const schedule = JSON.parse(fs.readFileSync(path.join(ROOT, 'publish-schedule.json'), 'utf8'));
const dueToday = new Set(schedule.filter((e) => e.date <= DATE).map((e) => e.slug));
const internal = [...new Set([...bodyHtml.matchAll(/<a href="([a-z0-9-]+)"/g), ...article.related.map((r) => [null, r.href])].map((m) => m[1]))];
const notLive = internal.filter((s) => !fs.existsSync(path.join(ROOT, 'artikel', `${s}.html`)) || !(blog.includes(`artikel/${s}"`) || dueToday.has(s)));
if (notLive.length) throw new Error(`tautan ke artikel belum tayang: ${notLive.join(', ')}`);

fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, internal: internal.length, site: SITE, images: [hero.file, ...Object.values(IMG)] }, null, 2));

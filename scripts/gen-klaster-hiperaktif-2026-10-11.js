#!/usr/bin/env node
/*
 * Klaster hiperaktif (kartu Trello 7tkqCw3d, 2026-10-11).
 * Menulis 2 artikel baru yang melengkapi 3 artikel klaster yang sudah tayang:
 *   pilar        : hiperaktif-adalah (fokus perilaku)
 *   turunan      : hiperaktif-artinya, anakku-hiperaktif (sudah tayang)
 *   baru         : anak-aktif-atau-hiperaktif, cara-mengatasi-anak-hiperaktif
 * Pilar ADHD (adhd-adalah) tetap fokus diagnosis klinis.
 * Semua klaim kesehatan bersumber lembaga resmi (Kemenkes, CDC, AAP, NICE, NIMH, WHO)
 * yang diperiksa 11 Oktober 2026. Status tinjauan medis dipasang jujur oleh
 * scripts/medical-provenance-hiperaktif.mjs (belum ditinjau dokter berlisensi).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'artikel');
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (slug, text) => `<a href="${slug}">${text}</a>`;
const X = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
const fig = (file, alt, caption, w, h) => `<figure><img src="../${file}" alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${CREDIT}</span></figcaption></figure>`;
const P = (s) => `<p>${s}</p>`;
const H2 = (id, s) => `<h2 id="${id}">${s}</h2>`;
const H3 = (s) => `<h3>${s}</h3>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const faqBlock = (items) => `${H2('faq', 'Pertanyaan yang Sering Diajukan')}${items.map((f) => `${H3(f.q)}${P(f.a)}`).join('\n')}`;
const faq = (items) => items.map(([q, a]) => ({ q, a }));
const toc = (items) => `<div class="toc"><h3>Daftar Isi</h3><ol>${items.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>`;
const cluster = (self) => {
  const items = [
    ['hiperaktif-adalah', 'Hiperaktif adalah: pengertian, ciri, dan penanganan (panduan utama)'],
    ['hiperaktif-artinya', 'Hiperaktif artinya apa dan tanda awalnya'],
    ['anakku-hiperaktif', 'Anakku hiperaktif: panduan langkah untuk orang tua'],
    ['anak-aktif-atau-hiperaktif', 'Anak aktif atau hiperaktif: cara membedakannya'],
    ['cara-mengatasi-anak-hiperaktif', 'Cara mengatasi anak hiperaktif di rumah dan sekolah'],
  ].filter(([s]) => s !== self);
  return `<div class="answer-box" style="background:#F8F9FF;border-left:4px solid #2B3A67;padding:1rem 1.25rem;border-radius:0 10px 10px 0;margin:2rem 0;"><strong>Seri panduan hiperaktif YUKA</strong>${ul(items.map(([s, t]) => L(s, t)))}<p style="margin:0.5rem 0 0;">Seri ini membahas <strong>perilaku</strong> hiperaktif sehari-hari. Untuk sisi <strong>diagnosis klinis</strong>, baca ${L('adhd-adalah', 'ADHD adalah')} dan ${L('diagnosis-adhd-di-indonesia', 'alur diagnosis ADHD di Indonesia')}.</p></div>`;
};

const SRC = {
  kemkes: { label: 'Kemenkes, Ditjen Kesehatan Lanjutan: Apa Itu ADHD (Attention Deficit Hyperactivity Disorder)', url: 'https://keslan.kemkes.go.id/view_artikel/3232/apa-itu-adhd-attention-deficit-hyperactivity-disorder' },
  aapUnderstand: { label: 'American Academy of Pediatrics (HealthyChildren.org): Understanding ADHD, Information for Parents', url: 'https://www.healthychildren.org/English/health-issues/conditions/adhd/Pages/Understanding-ADHD.aspx' },
  aapDiagnose: { label: 'American Academy of Pediatrics (HealthyChildren.org): Diagnosing ADHD in Children, Guidelines and Information for Parents', url: 'https://www.healthychildren.org/English/health-issues/conditions/adhd/Pages/Diagnosing-ADHD-in-Children-Guidelines-Information-for-Parents.aspx' },
  cdcSymptoms: { label: 'CDC: Symptoms of ADHD', url: 'https://www.cdc.gov/adhd/signs-symptoms/index.html' },
  cdcTreatment: { label: 'CDC: Treatment of ADHD', url: 'https://www.cdc.gov/adhd/treatment/index.html' },
  cdcBehavior: { label: 'CDC: ADHD Treatment Recommendations, Behavior Therapy', url: 'https://www.cdc.gov/adhd/treatment/behavior-therapy.html' },
  cdcClassroom: { label: 'CDC: ADHD in the Classroom', url: 'https://www.cdc.gov/adhd/treatment/classroom.html' },
  nice: { label: 'NICE Guideline NG87: Attention deficit hyperactivity disorder, diagnosis and management (Recommendations)', url: 'https://www.nice.org.uk/guidance/ng87/chapter/Recommendations' },
  nimh: { label: 'National Institute of Mental Health (NIMH): Attention-Deficit/Hyperactivity Disorder', url: 'https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd' },
  whoActivity: { label: 'WHO: Physical activity (fact sheet)', url: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity' },
  whoPunish: { label: 'WHO: Corporal punishment and health (fact sheet)', url: 'https://www.who.int/news-room/fact-sheets/detail/corporal-punishment-and-health' },
};
const NOTE = 'Sumber resmi diperiksa pada 11 Oktober 2026. Ringkasan ini membantu orang tua dan guru mengamati perilaku anak, tetapi tidak dapat dipakai untuk menetapkan diagnosis.';
const PHOTO_NOTE = ' Foto suasana kegiatan, bukan gambaran kondisi anak tertentu.';

const articles = [];

/* ------------------------------------------------------------------ A */
const A_FAQ = faq([
  ['Apa beda anak aktif dan anak hiperaktif?', 'Anak aktif bergerak banyak tetapi geraknya punya tujuan, ia masih bisa berhenti saat diminta, dan energinya menyesuaikan tempat. Pada perilaku hiperaktif, Kemenkes menggambarkan gerakan yang tampak tidak bertujuan dan sulit dikendalikan. Perbedaan paling jelas biasanya terlihat dari seberapa sering perilaku itu mengganggu belajar, pergaulan, dan keselamatan anak.'],
  ['Apakah anak yang tidak bisa diam pasti hiperaktif?', 'Tidak. CDC menyebut wajar bila anak sesekali sulit fokus dan sulit mengatur perilaku. AAP juga mengingatkan bahwa anak bisa tampak gelisah karena stres di rumah atau sekolah, bosan, atau sedang melewati masa sulit. Label hiperaktif baru masuk akal bila polanya menetap, muncul di beberapa tempat, dan mengganggu keseharian.'],
  ['Berapa lama perilaku harus diamati sebelum ke dokter?', 'AAP menyarankan orang tua membicarakannya dengan dokter anak bila gejala muncul secara teratur selama lebih dari 6 bulan. Namun, orang tua tidak perlu menunggu selama itu bila perilaku anak sudah membahayakan keselamatan atau membuat anak sangat kesulitan di sekolah. Catatan pengamatan sejak awal tetap berguna saat konsultasi.'],
  ['Apakah anak aktif sejak bayi berarti hiperaktif?', 'Kemenkes menulis bahwa aktivitas berlebihan pada sebagian anak dapat tampak sejak bayi, berupa banyak gerakan dan sulit ditenangkan. Meski begitu, banyak bayi dan balita memang sangat aktif dan tetap berkembang wajar. Penilaian dilakukan tenaga profesional dengan melihat perkembangan anak secara utuh, bukan satu tanda saja.'],
  ['Siapa yang bisa menilai apakah anak hiperaktif?', 'Mulailah dari dokter anak atau layanan kesehatan terdekat. Bila perlu, anak dirujuk ke psikolog anak, psikiater anak, atau dokter spesialis tumbuh kembang. Kemenkes menyebut psikoterapi untuk ADHD dapat dilakukan oleh psikiater atau psikolog. Bawa catatan perilaku dan laporan guru agar penilaian lebih lengkap.'],
  ['Apakah hiperaktif sama dengan ADHD?', 'Tidak selalu. Hiperaktif adalah gambaran perilaku, sedangkan ADHD adalah diagnosis klinis yang ditetapkan dengan kriteria tertentu. AAP menjelaskan antara lain bahwa gejala ADHD muncul di dua tempat atau lebih, dimulai sebelum usia 12 tahun, dan berlangsung lebih dari 6 bulan. Anak yang sangat aktif belum tentu memenuhi kriteria itu.'],
  ['Apa yang sebaiknya dilakukan sambil menunggu konsultasi?', 'Buat rutinitas harian yang konsisten, beri instruksi singkat satu per satu, puji perilaku yang Anda harapkan, dan sediakan waktu bergerak yang cukup. CDC menyebut keterampilan yang memakai penguatan positif, struktur, dan disiplin yang konsisten sebagai inti pelatihan orang tua. Langkah ini aman dilakukan apa pun hasil penilaian nanti.'],
  ['Apakah gula atau pewarna makanan membuat anak hiperaktif?', 'Pedoman NICE tidak menganjurkan penghapusan pewarna dan bahan tambahan buatan dari makanan sebagai penanganan umum bagi anak dengan ADHD. NICE meminta tenaga kesehatan menanyakan makanan atau minuman yang tampak memengaruhi perilaku anak. Jadi, bila Anda melihat pola tertentu, catat dan diskusikan dengan dokter, jangan langsung membuat diet ketat sendiri.'],
]);

articles.push({
  slug: 'anak-aktif-atau-hiperaktif',
  titleTag: 'Anak Aktif atau Hiperaktif? Cara Membedakannya | YUKA',
  metaDesc: 'Anak aktif atau hiperaktif? Kenali bedanya dari tujuan gerak, kemampuan berhenti, tempat, dan dampaknya, plus tanda kapan perlu konsultasi ke profesional.',
  keywords: 'anak aktif atau hiperaktif, perbedaan anak aktif dan hiperaktif, hiperaktif versus aktif normal, ciri anak hiperaktif, kapan anak hiperaktif dibawa ke dokter',
  ogTitle: 'Anak Aktif atau Hiperaktif? Cara Membedakan Aktif Normal dan Tanda yang Perlu Dicek',
  ogDesc: 'Panduan orang tua membedakan anak aktif sesuai usia dengan pola hiperaktif yang perlu dinilai profesional, berdasarkan sumber Kemenkes, CDC, dan AAP.',
  datePublished: '2026-10-11T09:00:00+07:00',
  dateModified: '2026-10-11T09:00:00+07:00',
  dateDisplay: '11 Oktober 2026',
  readTime: '12 menit baca',
  category: 'Kesehatan Anak',
  h1: 'Anak Aktif atau Hiperaktif? Cara Membedakan Aktif Normal dan Tanda yang Perlu Dicek',
  crumb: 'Anak Aktif atau Hiperaktif',
  parent: { href: 'hiperaktif-adalah', name: 'Hiperaktif' },
  image: {
    file: 'Dokumentasi/21-jan-2026-anak-anak-belajar-di-rumah-002.webp',
    w: 1209, h: 907,
    alt: 'Anak-anak duduk di lantai dengan meja lipat kecil, sebagian menulis dan membaca, sebagian menoleh dan tertawa',
    caption: 'Suasana belajar bersama di ruang belajar YUKA: sebagian anak menulis, sebagian menoleh dan bercanda. Foto suasana kegiatan, bukan gambaran kondisi anak tertentu.',
    credit: CREDIT,
  },
  about: ['Hiperaktivitas pada anak', 'Perkembangan anak', 'ADHD'],
  tags: ['hiperaktif', 'anak aktif', 'perkembangan anak', 'parenting'],
  sourcesCheckedNote: NOTE,
  sources: [SRC.kemkes, SRC.cdcSymptoms, SRC.aapUnderstand, SRC.aapDiagnose, SRC.cdcBehavior, SRC.nimh, SRC.nice],
  related: [
    { href: 'hiperaktif-adalah', title: 'Hiperaktif Adalah: Pengertian, Ciri, dan Penanganan', desc: 'Panduan utama tentang perilaku hiperaktif pada anak.' },
    { href: 'cara-mengatasi-anak-hiperaktif', title: 'Cara Mengatasi Anak Hiperaktif di Rumah dan Sekolah', desc: 'Strategi harian yang sejalan dengan pedoman CDC dan NICE.' },
    { href: 'adhd-adalah', title: 'ADHD Adalah: Pengertian, Gejala, dan Diagnosis', desc: 'Sisi klinis ADHD, termasuk cara dokter menilai.' },
  ],
  faq: A_FAQ,
  bodyHtml: '',
});

articles[0].bodyHtml = `
${P('<strong>Jawaban singkat:</strong> anak aktif dan anak hiperaktif sama-sama banyak bergerak, tetapi berbeda pada tiga hal. Gerak anak aktif biasanya punya tujuan, ia masih bisa berhenti atau menunggu bila diminta, dan energinya menyesuaikan tempat. Pola hiperaktif tampak sebaliknya: gerak sulit dikendalikan, muncul di banyak tempat, menetap berbulan-bulan, dan mulai mengganggu belajar, pergaulan, atau keselamatan anak. Hanya tenaga profesional yang dapat menilai apakah pola itu termasuk ADHD.')}
${toc([['beda', 'Perbedaan utama anak aktif dan hiperaktif'], ['wajar', 'Aktif sesuai usia: apa yang wajar'], ['tanda', 'Tanda yang perlu dicek lebih jauh'], ['penyebab-lain', 'Hal lain yang membuat anak tampak hiperaktif'], ['catat', 'Cara mengamati dan mencatat perilaku'], ['profesional', 'Kapan dan ke mana berkonsultasi'], ['adhd', 'Hubungan hiperaktif dengan ADHD'], ['sikap', 'Sikap yang membantu sambil menunggu'], ['faq', 'Pertanyaan yang sering diajukan']])}
${H2('beda', 'Perbedaan utama anak aktif dan anak hiperaktif')}
${P(`Banyak orang tua bertanya hal yang sama: anak saya hanya aktif, atau memang hiperaktif? Pertanyaan ini wajar karena keduanya tampak mirip dari luar. Anak sama-sama berlari, memanjat, banyak bicara, dan cepat bosan. Bedanya baru terlihat bila kita memperhatikan <em>kualitas</em> geraknya, bukan hanya jumlahnya.`)}
${P(`${X(SRC.kemkes.url, 'Kemenkes melalui Ditjen Kesehatan Lanjutan')} memberi gambaran yang mudah dipakai. Dibandingkan anak yang aktif tetapi produktif, perilaku hiperaktif tampak tidak bertujuan. Anak kesulitan mengendalikan dan mengoordinasikan gerak, sehingga sulit memilah gerakan yang penting dan yang tidak. Anak aktif yang memanjat pohon biasanya ingin mengambil sesuatu atau menguji kemampuannya. Anak dengan pola hiperaktif bisa berpindah dari satu kegiatan ke kegiatan lain tanpa menyelesaikan apa pun.`)}
${P(`Hal kedua adalah kemampuan berhenti. Anak aktif umumnya masih bisa diminta duduk sebentar saat makan, mendengarkan cerita pendek, atau menunggu giliran, walau perlu diingatkan. Pada pola hiperaktif, permintaan yang sama berulang kali gagal meski anak sebenarnya ingin menurut. Hal ketiga adalah konteks. Anak aktif biasanya lebih tenang di tempat yang menuntut tenang, misalnya masjid atau ruang tunggu dokter. Pola hiperaktif cenderung terbawa ke mana pun anak berada.`)}
<table><thead><tr><th>Aspek yang diamati</th><th>Anak aktif sesuai usia</th><th>Pola yang perlu dicek lebih jauh</th></tr></thead><tbody>
<tr><td>Tujuan gerak</td><td>Gerak terarah pada mainan, permainan, atau tugas tertentu</td><td>Gerak tampak tanpa tujuan, berpindah-pindah tanpa menyelesaikan kegiatan</td></tr>
<tr><td>Kemampuan berhenti</td><td>Bisa berhenti atau menunggu sebentar bila diminta</td><td>Sering gagal berhenti walau sudah diingatkan berulang kali</td></tr>
<tr><td>Tempat</td><td>Lebih tenang di tempat yang menuntut tenang</td><td>Pola serupa muncul di rumah, sekolah, dan tempat lain</td></tr>
<tr><td>Lama berlangsung</td><td>Naik turun mengikuti suasana hati, lelah, atau acara tertentu</td><td>Menetap dan teratur selama berbulan-bulan</td></tr>
<tr><td>Dampak</td><td>Belajar dan pertemanan tetap berjalan</td><td>Belajar tertinggal, sering bertengkar, atau dijauhi teman</td></tr>
<tr><td>Keselamatan</td><td>Masih memperhatikan bahaya setelah diberi tahu</td><td>Sering celaka karena bertindak tanpa berpikir</td></tr>
</tbody></table>
${P(`Tabel ini alat bantu pengamatan, bukan alat diagnosis. Satu atau dua baris yang cocok dengan kolom kanan belum berarti anak hiperaktif. Yang penting adalah gambaran keseluruhan selama beberapa waktu.`)}
${fig('Dokumentasi/museum-gunung-merapi-anak-anak-bermain-bersama-luar-ruang-020.webp', 'Beberapa anak dan remaja bermain di taman, salah satu remaja mengangkat kantong tinggi di atas kepala', 'Anak-anak dan remaja bermain bersama di taman saat kunjungan luar ruang YUKA. Gerak aktif seperti ini wajar dan sehat bagi anak.' + PHOTO_NOTE, 713, 1087)}
${H2('wajar', 'Aktif sesuai usia: apa yang wajar')}
${P(`Anak memang dirancang untuk bergerak. Balita belajar tentang tubuh dan lingkungannya lewat berlari, melompat, memanjat, dan menyentuh apa saja. Rasa ingin tahu yang besar membuat mereka cepat berpindah dari satu benda ke benda lain. Pada usia ini, sulit duduk lama adalah hal yang sangat umum, bukan tanda gangguan.`)}
${P(`${X(SRC.cdcSymptoms.url, 'CDC')} menegaskan bahwa wajar bila anak sesekali kesulitan fokus dan mengatur perilaku. ${X(SRC.aapUnderstand.url, 'American Academy of Pediatrics (AAP)')} juga mengingatkan bahwa semua anak normal menunjukkan sebagian perilaku yang mirip gejala ADHD dari waktu ke waktu. Seiring bertambahnya usia, kemampuan anak menunggu, mengikuti aturan, dan menyelesaikan tugas biasanya ikut berkembang, walau kecepatannya berbeda pada tiap anak.`)}
${P(`Karena itu, bandingkan anak dengan teman sebayanya, bukan dengan kakaknya atau anak tetangga yang lebih besar. Anak usia empat tahun yang tidak betah duduk mendengarkan cerita panjang belum tentu bermasalah. Anak usia sembilan tahun yang sama sekali tidak bisa duduk menyelesaikan satu lembar tugas sekolah, padahal teman sekelasnya bisa, lebih layak diamati. Artikel ${L('ciri-ciri-anak-adhd-berdasarkan-usia', 'ciri-ciri anak ADHD berdasarkan usia')} membahas perbedaan ini per tahap umur.`)}
${P(`Perhatikan juga hal yang membuat anak <em>justru</em> bisa fokus. Banyak anak aktif dapat bermain balok, menggambar, atau mendengarkan cerita favoritnya cukup lama. Kemampuan ini menunjukkan bahwa ia sebenarnya mampu mengatur perhatian bila kegiatannya menarik. Informasi seperti ini berguna saat Anda berbicara dengan dokter atau psikolog nanti.`)}
${H2('tanda', 'Tanda yang membuat orang tua perlu mengecek lebih jauh')}
${P(`Ada beberapa pola yang membuat pengamatan lebih serius layak dilakukan. Pola ini tidak mendiagnosis apa pun, tetapi menjadi alasan untuk berkonsultasi. ${X(SRC.aapUnderstand.url, 'AAP')} menyarankan orang tua membicarakannya dengan dokter anak bila gejala muncul secara teratur selama lebih dari 6 bulan. ${X(SRC.cdcSymptoms.url, 'CDC')} menyebut contoh gejala hiperaktif dan impulsif seperti sering menggeliat atau gelisah dan berbicara terlalu banyak.`)}
${ul([
  'Perilaku sulit diam dan sulit menunggu muncul hampir setiap hari, bukan hanya saat lelah atau sedang ada acara.',
  'Pola yang sama terlihat di rumah, di sekolah, dan di tempat lain, menurut beberapa orang dewasa yang berbeda.',
  'Guru berulang kali menyampaikan bahwa anak sulit mengikuti kegiatan kelas dibanding teman sebayanya.',
  'Anak sering celaka, misalnya berlari ke jalan atau memanjat tempat berbahaya, walau sudah sering diingatkan.',
  'Anak mulai dijauhi teman karena sering menyela, merebut giliran, atau sulit mengikuti aturan permainan.',
  'Anak sendiri tampak frustrasi, merasa dirinya nakal, atau sering dimarahi sampai kehilangan rasa percaya diri.',
])}
${P(`Bila satu tanda saja sudah membahayakan keselamatan, jangan menunggu enam bulan. Konsultasikan lebih cepat. Untuk gambaran tanda awal yang lebih rinci, baca juga ${L('hiperaktif-artinya', 'hiperaktif artinya apa')}, yang membahas empat hal utama yang perlu diamati.`)}
${fig('Dokumentasi/museum-gunung-merapi-anak-anak-bermain-permainan-interaktif-010.webp', 'Anak-anak berkerumun di sekitar meja permainan interaktif di museum dengan didampingi orang dewasa', 'Anak-anak mencoba meja permainan interaktif saat kunjungan museum bersama pendamping YUKA. Tempat baru dan ramai wajar membuat anak bersemangat.' + PHOTO_NOTE, 936, 1248)}
${H2('penyebab-lain', 'Hal lain yang bisa membuat anak tampak hiperaktif')}
${P(`Tidak semua anak yang tampak sangat aktif mengalami ADHD. ${X(SRC.aapUnderstand.url, 'AAP')} menjelaskan bahwa anak bisa sedang bereaksi terhadap stres di sekolah atau di rumah, merasa bosan, atau sedang melewati masa sulit dalam hidupnya. Kepindahan rumah, kelahiran adik, perpisahan orang tua, atau perundungan di sekolah dapat mengubah perilaku anak dalam waktu singkat.`)}
${P(`Tidur juga perlu diperhatikan. ${X(SRC.nimh.url, 'NIMH')} menyebut tidur sebagai salah satu sasaran penting dalam intervensi dini ADHD. Dalam keseharian, orang tua sering mendapati anak yang kurang tidur justru tampak lebih gelisah dan mudah meledak, bukan mengantuk. Catat jam tidur dan bangun anak selama beberapa minggu. Pembahasan lebih lengkap ada di ${L('gangguan-tidur-anak-adhd-solusi', 'gangguan tidur pada anak ADHD')}.`)}
${P(`Kondisi lain seperti gangguan belajar, gangguan kecemasan, atau gangguan perkembangan tertentu dapat menimbulkan perilaku yang mirip. Inilah alasan penilaian profesional penting: dokter atau psikolog akan mempertimbangkan berbagai kemungkinan sebelum menyimpulkan. Proses membedakan kondisi yang mirip ini disebut diagnosis banding, dan dijelaskan dalam artikel ${L('diagnosis-banding-adhd', 'diagnosis banding ADHD')}. Untuk perbedaan dengan autisme, lihat ${L('perbedaan-autis-dan-adhd', 'perbedaan autis dan ADHD')}.`)}
${H2('catat', 'Cara mengamati dan mencatat perilaku anak')}
${P(`Catatan yang rapi membantu orang tua melihat pola dengan lebih jernih, dan membantu profesional menilai lebih cepat. ${X(SRC.aapDiagnose.url, 'AAP')} menjelaskan bahwa orang tua dapat diminta mengisi daftar periksa atau skala penilaian tentang perilaku anak, dan guru dapat diminta memberikan laporan tentang perilaku di kelas serta pola belajar. Jadi, catatan yang Anda buat sendiri akan sangat berguna.`)}
${P(`Pakai buku kecil atau catatan di ponsel. Tidak perlu rumit. Yang penting dicatat secara jujur dan rutin, termasuk hari-hari ketika anak justru tampak tenang. Catatan yang hanya berisi hari buruk akan memberi gambaran yang berat sebelah.`)}
<table><thead><tr><th>Yang dicatat</th><th>Contoh catatan singkat</th></tr></thead><tbody>
<tr><td>Waktu dan tempat</td><td>Senin, 18.30, saat makan malam di rumah</td></tr>
<tr><td>Apa yang terjadi sebelumnya</td><td>Baru pulang dari acara keluarga, belum tidur siang</td></tr>
<tr><td>Perilaku yang terlihat</td><td>Berdiri dari kursi lima kali, menumpahkan minum, tidak menghabiskan makan</td></tr>
<tr><td>Respons orang dewasa</td><td>Diingatkan dengan suara pelan, lalu diberi tugas membawa piring</td></tr>
<tr><td>Hasilnya</td><td>Bisa duduk lagi sekitar lima menit setelah diberi tugas</td></tr>
</tbody></table>
${P(`Mintalah guru atau pengasuh mencatat hal yang sama selama periode yang sama. Bandingkan catatan dari beberapa tempat. Bila pola hanya muncul di satu tempat, misalnya hanya di rumah, kemungkinan pemicunya ada di lingkungan itu. Bila muncul di mana-mana, informasi ini penting untuk disampaikan ke profesional.`)}
${fig('Dokumentasi/museum-gunung-merapi-anak-sekolah-bermain-bersama-011.webp', 'Anak-anak dan seorang pendamping perempuan duduk bersama di bebatuan saat kegiatan luar ruang', 'Anak-anak duduk dan beristirahat bersama pendamping di sela kegiatan luar ruang YUKA. Mengamati anak di berbagai suasana membantu melihat pola perilakunya.' + PHOTO_NOTE, 936, 1248)}
${H2('profesional', 'Kapan dan ke mana berkonsultasi')}
${P(`Bila tanda di atas menetap atau perilaku anak mulai mengganggu keseharian, mulailah dari dokter anak atau layanan kesehatan terdekat. Dokter akan menanyakan riwayat perkembangan, kesehatan, dan perilaku anak, lalu bila perlu merujuk ke psikolog anak, psikiater anak, atau dokter spesialis tumbuh kembang. ${X(SRC.kemkes.url, 'Kemenkes')} menyebut psikoterapi untuk ADHD dapat dilakukan oleh psikiater atau psikolog.`)}
${P(`${X(SRC.aapDiagnose.url, 'Pedoman yang dijelaskan AAP')} menyebut beberapa syarat penting dalam penilaian ADHD: gejala muncul di dua tempat atau lebih seperti rumah, sekolah, dan situasi sosial, dan menimbulkan hambatan; gejala dimulai sebelum anak berusia 12 tahun; dan gejala sudah berlangsung lebih dari 6 bulan. Syarat ini menjelaskan mengapa satu kali pertemuan singkat jarang cukup untuk menyimpulkan.`)}
${P(`Siapkan bahan sebelum berangkat: catatan perilaku, laporan atau pesan dari guru, buku rapor bila ada, dan daftar pertanyaan Anda. Alur pemeriksaan di Indonesia, termasuk siapa yang biasanya terlibat, dijelaskan dalam ${L('diagnosis-adhd-di-indonesia', 'diagnosis ADHD di Indonesia')}. Bila Anda berada di Sleman atau Yogyakarta, halaman ${L('../konsultasi-abk-sleman', 'konsultasi ABK di Sleman')} memuat cara menghubungi tim YUKA untuk bertanya soal pendampingan pendidikan.`)}
${H2('adhd', 'Hubungan hiperaktif dengan ADHD')}
${P(`Kata hiperaktif sering dipakai sehari-hari untuk menggambarkan anak yang sangat aktif. Dalam dunia kesehatan, hiperaktivitas adalah salah satu kelompok gejala ADHD (Attention Deficit Hyperactivity Disorder), bersama kesulitan memusatkan perhatian dan impulsivitas. ${X(SRC.aapUnderstand.url, 'AAP')} menjelaskan ada anak yang terutama menunjukkan perilaku hiperaktif dan impulsif, ada yang terutama sulit memusatkan perhatian, dan ada yang menunjukkan gabungan keduanya.`)}
${P(`Artinya, anak yang hiperaktif belum tentu ADHD, dan anak ADHD belum tentu tampak hiperaktif. Seri artikel hiperaktif YUKA berfokus pada perilaku sehari-hari dan cara mendampinginya. Sementara itu, artikel ${L('adhd-adalah', 'ADHD adalah')} berfokus pada sisi klinis: kriteria, pemeriksaan, dan pilihan terapi. Pembagian ini membantu orang tua menemukan informasi yang tepat sesuai kebutuhan.`)}
${P(`Bila Anda ingin memahami istilah hiperaktif secara menyeluruh, mulai dari pengertian sampai penanganan, baca panduan utama ${L('hiperaktif-adalah', 'hiperaktif adalah')}. Untuk kepanjangan dan arti singkatan ADHD, ada artikel ${L('adhd-singkatan-dari-apa', 'ADHD singkatan dari apa')}.`)}
${fig('Dokumentasi/cpao-anak-anak-belajar-bersama-outdoor-046.webp', 'Anak-anak bertopi koki duduk di meja kayu di teras dekat sawah, seorang pendamping berhijab berbicara kepada mereka', 'Seorang pendamping berbicara kepada anak-anak bertopi koki di meja kegiatan luar ruang dekat sawah. Instruksi langsung dan singkat memudahkan anak mengikuti kegiatan.' + PHOTO_NOTE, 936, 1248)}
${H2('sikap', 'Sikap yang membantu sambil menunggu penilaian')}
${P(`Apa pun hasil penilaian nanti, beberapa langkah aman bisa dimulai sekarang. ${X(SRC.cdcBehavior.url, 'CDC')} menjelaskan bahwa pelatihan orang tua mengajarkan keterampilan yang memakai penguatan positif, struktur, dan disiplin yang konsisten. Prinsip ini berguna untuk semua anak, termasuk anak yang ternyata hanya sangat aktif.`)}
${ul([
  'Buat rutinitas harian yang sama setiap hari, terutama jam bangun, makan, belajar, dan tidur.',
  'Beri instruksi singkat satu per satu sambil menatap mata anak, lalu minta ia mengulanginya.',
  'Puji perilaku yang Anda harapkan secara spesifik, misalnya "Terima kasih sudah duduk sampai makanan habis."',
  'Sediakan waktu bergerak yang cukup setiap hari, misalnya bermain di luar atau bersepeda.',
  'Kurangi pemicu seperti suara televisi yang terus menyala saat anak belajar.',
  'Hindari melabeli anak sebagai nakal di depan orang lain. Label seperti itu mudah melekat dan melukai.',
])}
${P(`Strategi yang lebih lengkap untuk rumah dan sekolah dibahas dalam ${L('cara-mengatasi-anak-hiperaktif', 'cara mengatasi anak hiperaktif di rumah dan sekolah')}. Untuk langkah demi langkah dari sudut pandang orang tua, baca ${L('anakku-hiperaktif', 'anakku hiperaktif')}. Mendampingi anak yang sangat aktif juga melelahkan. Jaga diri Anda dengan bantuan artikel ${L('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua')}.`)}
${P(`Sekolah juga bisa menjadi mitra. Di sekolah inklusi, guru terbiasa menyesuaikan cara mengajar dengan kebutuhan tiap anak. Informasi tentang layanan pendidikan YUKA ada di halaman ${L('../sekolah-inklusi-sleman', 'Sekolah Inklusi Taruna Imani di Sleman')}.`)}
${cluster('anak-aktif-atau-hiperaktif')}
${faqBlock(A_FAQ)}
`;

/* ------------------------------------------------------------------ B */
const B_FAQ = faq([
  ['Bagaimana cara mengatasi anak hiperaktif di rumah?', 'Mulailah dari rutinitas harian yang konsisten, instruksi singkat satu per satu, pujian yang spesifik untuk perilaku baik, dan konsekuensi yang tenang serta konsisten. CDC menyebut penguatan positif, struktur, dan disiplin yang konsisten sebagai inti keterampilan dalam pelatihan orang tua. Sediakan juga waktu bergerak yang cukup dan jam tidur yang teratur.'],
  ['Bagaimana guru menangani anak hiperaktif di kelas?', 'CDC menyarankan manajemen perilaku di kelas melalui sistem penghargaan atau kartu laporan harian, pelatihan keterampilan berorganisasi, umpan balik yang sering untuk perilaku positif, tugas yang jelas, jeda istirahat, dan alat bantu seperti map pekerjaan rumah. Di sekolah inklusi, penyesuaian ini dapat dituangkan dalam program pembelajaran individual.'],
  ['Apakah anak hiperaktif harus minum obat?', 'Tidak selalu, dan keputusan obat hanya diambil oleh dokter. CDC menjelaskan bahwa untuk anak di bawah 6 tahun, terapi perilaku melalui pelatihan orang tua dianjurkan sebagai langkah pertama sebelum obat. Untuk anak 6 tahun ke atas, AAP menganjurkan gabungan obat dan terapi perilaku bila diagnosis ADHD sudah ditegakkan. NICE juga meminta obat tidak diberikan pada anak di bawah 5 tahun tanpa pendapat spesialis kedua.'],
  ['Apakah anak hiperaktif boleh dipukul agar jera?', 'Tidak. WHO menyebut hukuman fisik meningkatkan masalah perilaku dari waktu ke waktu dan tidak memberi hasil positif. Gunakan konsekuensi yang tenang dan konsisten, misalnya kehilangan waktu bermain gawai, serta perkuat perilaku baik dengan pujian. Bila Anda merasa kewalahan, mintalah bantuan profesional atau pelatihan pengasuhan.'],
  ['Aktivitas apa yang cocok untuk anak hiperaktif?', 'Pilih aktivitas yang menyalurkan energi dan punya aturan sederhana, seperti bersepeda, berenang, bermain bola, menari, atau membantu pekerjaan rumah yang melibatkan gerak. WHO menyebut aktivitas fisik dalam jumlah berapa pun lebih baik daripada tidak sama sekali dan menganjurkan semua kelompok usia membatasi waktu duduk diam. Sesuaikan dengan minat anak agar ia mau melakukannya rutin.'],
  ['Apakah ada makanan yang harus dihindari anak hiperaktif?', 'NICE menekankan pentingnya pola makan seimbang, gizi yang baik, dan olahraga teratur, tetapi tidak menganjurkan penghapusan pewarna dan bahan tambahan buatan sebagai penanganan umum. Bila Anda melihat makanan tertentu tampak memengaruhi perilaku anak, catat dan diskusikan dengan dokter. Pembahasan rinci ada di artikel makanan yang harus dihindari anak ADHD.'],
  ['Berapa lama terapi perilaku untuk anak hiperaktif?', 'CDC menjelaskan bahwa dalam pelatihan orang tua, orang tua biasanya mengikuti 8 sampai 16 sesi bersama terapis untuk mempelajari strategi membantu anak. Lamanya bisa berbeda tergantung kebutuhan anak dan keluarga. Hasil yang bertahan biasanya datang dari penerapan strategi secara konsisten di rumah dan sekolah.'],
  ['Apakah anak hiperaktif bisa sekolah di sekolah umum?', 'Banyak anak dengan perilaku hiperaktif dapat belajar di sekolah umum atau sekolah inklusi dengan dukungan yang tepat. Yang penting adalah kerja sama orang tua dan guru, penyesuaian cara belajar, dan komunikasi rutin tentang perkembangan anak. Bicarakan kebutuhan anak dengan sekolah sejak awal agar dukungan bisa disiapkan.'],
]);

articles.push({
  slug: 'cara-mengatasi-anak-hiperaktif',
  titleTag: 'Cara Mengatasi Anak Hiperaktif di Rumah dan Sekolah | YUKA',
  metaDesc: 'Cara mengatasi anak hiperaktif di rumah dan sekolah: rutinitas, instruksi, pujian, konsekuensi, aktivitas fisik, tidur, dan kerja sama guru sesuai pedoman CDC dan NICE.',
  keywords: 'cara mengatasi anak hiperaktif, penanganan anak hiperaktif, cara menangani anak hiperaktif di sekolah, anak hiperaktif di rumah, terapi perilaku anak hiperaktif',
  ogTitle: 'Cara Mengatasi Anak Hiperaktif di Rumah dan Sekolah: Panduan Berbasis Pedoman',
  ogDesc: 'Strategi harian untuk orang tua dan guru dalam mendampingi anak hiperaktif, disusun dari pedoman CDC, AAP, NICE, NIMH, dan WHO.',
  datePublished: '2026-10-11T09:00:00+07:00',
  dateModified: '2026-10-11T09:00:00+07:00',
  dateDisplay: '11 Oktober 2026',
  readTime: '13 menit baca',
  category: 'Kesehatan Anak',
  h1: 'Cara Mengatasi Anak Hiperaktif di Rumah dan Sekolah',
  crumb: 'Cara Mengatasi Anak Hiperaktif',
  parent: { href: 'hiperaktif-adalah', name: 'Hiperaktif' },
  image: {
    file: 'Dokumentasi/21-jan-2026-siswa-belajar-ruang-kelas-tradisional-006.webp',
    w: 1209, h: 907,
    alt: 'Empat pelajar duduk di lantai dengan meja lipat di ruang belajar bertuliskan Taruna Imani, dua di antaranya mengacungkan tanda damai',
    caption: 'Pelajar belajar di lantai dengan meja lipat di ruang belajar Sekolah Inklusi Taruna Imani YUKA. Foto suasana kegiatan, bukan gambaran kondisi anak tertentu.',
    credit: CREDIT,
  },
  about: ['Hiperaktivitas pada anak', 'Terapi perilaku', 'Pendidikan inklusif'],
  tags: ['hiperaktif', 'parenting', 'sekolah inklusi', 'terapi perilaku'],
  sourcesCheckedNote: NOTE,
  sources: [SRC.cdcTreatment, SRC.cdcBehavior, SRC.cdcClassroom, SRC.nice, SRC.nimh, SRC.whoActivity, SRC.whoPunish, SRC.kemkes],
  related: [
    { href: 'hiperaktif-adalah', title: 'Hiperaktif Adalah: Pengertian, Ciri, dan Penanganan', desc: 'Panduan utama tentang perilaku hiperaktif pada anak.' },
    { href: 'anak-aktif-atau-hiperaktif', title: 'Anak Aktif atau Hiperaktif? Cara Membedakannya', desc: 'Kenali beda aktif sesuai usia dengan pola yang perlu dicek.' },
    { href: 'terapi-adhd-pada-anak', title: 'Terapi ADHD pada Anak: Pilihan Sesuai Usia', desc: 'Pilihan terapi klinis bila diagnosis ADHD sudah ditegakkan.' },
  ],
  faq: B_FAQ,
  bodyHtml: '',
});

articles[1].bodyHtml = `
${P('<strong>Jawaban singkat:</strong> cara mengatasi anak hiperaktif yang paling didukung pedoman adalah pendekatan perilaku yang konsisten di rumah dan di sekolah. Di rumah, itu berarti rutinitas yang jelas, instruksi singkat, pujian untuk perilaku baik, dan konsekuensi yang tenang. Di sekolah, guru memakai sistem penghargaan, kartu laporan harian, jeda istirahat, dan tugas yang jelas. Bila perilaku sangat mengganggu, libatkan dokter atau psikolog. Keputusan obat hanya diambil oleh dokter.')}
${toc([['prinsip', 'Prinsip dasar sebelum memilih cara'], ['rumah', 'Di rumah: rutinitas dan lingkungan'], ['instruksi', 'Di rumah: instruksi, pujian, dan konsekuensi'], ['energi', 'Menyalurkan energi: gerak, tidur, dan makan'], ['sekolah', 'Di sekolah: kerja sama dengan guru'], ['emosi', 'Saat anak meledak atau sulit berhenti'], ['profesional', 'Kapan perlu bantuan profesional'], ['orang-tua', 'Merawat diri orang tua'], ['faq', 'Pertanyaan yang sering diajukan']])}
${H2('prinsip', 'Prinsip dasar sebelum memilih cara')}
${P(`Mengatasi anak hiperaktif bukan berarti membuat anak diam. Tujuannya adalah membantu anak mengatur dirinya, sehingga ia bisa belajar, bermain dengan teman, dan tetap aman. Energi anak tidak perlu dimatikan, cukup diarahkan.`)}
${P(`${X(SRC.nimh.url, 'NIMH')} menyebut penanganan standar ADHD meliputi obat dan intervensi psikososial, seperti terapi perilaku kognitif, pelatihan orang tua, dan intervensi di sekolah. ${X(SRC.cdcTreatment.url, 'CDC')} menambahkan bahwa terapi perilaku pada anak kecil paling efektif bila dijalankan oleh orang tua. Artinya, orang tua dan guru memegang peran besar, dan peran itu bisa dimulai tanpa menunggu diagnosis.`)}
${P(`Pedoman juga membedakan pendekatan menurut usia. Ringkasannya ada di tabel berikut. Tabel ini berlaku untuk anak yang sudah didiagnosis ADHD. Untuk anak yang belum dinilai, langkah perilaku di rumah dan sekolah tetap aman dan bermanfaat.`)}
<table><thead><tr><th>Usia anak</th><th>Pendekatan yang dianjurkan pedoman</th><th>Sumber</th></tr></thead><tbody>
<tr><td>Di bawah 5 tahun</td><td>Program pelatihan orang tua berkelompok yang berfokus pada ADHD sebagai penanganan pertama. Obat tidak diberikan tanpa pendapat kedua dari layanan spesialis ADHD anak.</td><td>${X(SRC.nice.url, 'NICE NG87')}</td></tr>
<tr><td>Di bawah 6 tahun</td><td>Pelatihan orang tua dalam manajemen perilaku sebagai langkah pertama, sebelum obat dicoba.</td><td>${X(SRC.cdcTreatment.url, 'CDC, merujuk AAP')}</td></tr>
<tr><td>6 tahun ke atas</td><td>Gabungan obat dan terapi perilaku, ditambah intervensi perilaku di kelas dan dukungan sekolah.</td><td>${X(SRC.cdcTreatment.url, 'CDC, merujuk AAP')}</td></tr>
</tbody></table>
${P(`Perbedaan batas usia di tabel (5 dan 6 tahun) berasal dari dua pedoman yang berbeda, NICE di Inggris dan AAP di Amerika Serikat. Keduanya sejalan pada satu hal: pada anak kecil, pendekatan perilaku lewat orang tua didahulukan. Pilihan terapi klinis yang lebih rinci dibahas di ${L('terapi-adhd-pada-anak', 'terapi ADHD pada anak')}.`)}
${H2('rumah', 'Di rumah: rutinitas dan lingkungan yang membantu')}
${P(`Anak dengan perilaku hiperaktif biasanya lebih tenang bila tahu apa yang akan terjadi. ${X(SRC.cdcBehavior.url, 'CDC')} menyebut struktur sebagai salah satu inti keterampilan yang diajarkan dalam pelatihan orang tua. Struktur di rumah dimulai dari rutinitas yang sama setiap hari: jam bangun, mandi, makan, belajar, bermain, dan tidur.`)}
${P(`Tuliskan atau gambarkan rutinitas itu, lalu tempel di tempat yang mudah dilihat anak. Anak yang belum lancar membaca bisa memakai gambar sederhana. Libatkan anak saat menyusunnya, misalnya memilih gambar atau warna. Anak yang ikut membuat jadwal biasanya lebih mau menjalankannya.`)}
${P(`Lingkungan juga berpengaruh. Siapkan satu tempat belajar yang jauh dari televisi dan mainan. Simpan barang yang tidak dipakai di dalam kotak. Siapkan tas sekolah dan seragam sejak malam agar pagi hari tidak penuh tergesa-gesa. Perubahan kecil seperti ini mengurangi jumlah gangguan yang harus dilawan anak setiap hari.`)}
${ul([
  'Satu jadwal harian yang sama, ditempel di dinding atau pintu kulkas.',
  'Tempat belajar yang tenang, dengan barang seperlunya di atas meja.',
  'Pengingat waktu yang terlihat, misalnya jam pasir atau timer, untuk pergantian kegiatan.',
  'Pemberitahuan lebih awal sebelum kegiatan berganti, misalnya "lima menit lagi kita mandi."',
  'Batas waktu gawai yang jelas dan disepakati bersama, bukan berubah-ubah setiap hari.',
])}
${fig('Dokumentasi/21-jan-2026-keluarga-belajar-bersama-dirumah-003.webp', 'Seorang pemuda, remaja putri, dan seorang ibu duduk di lantai dengan meja lipat kecil di dekat rak buku', 'Kegiatan belajar di lantai dengan meja lipat kecil di ruang belajar YUKA. Tempat belajar yang rapi dan tetap membantu anak memulai tugas.' + PHOTO_NOTE, 1209, 907)}
${H2('instruksi', 'Di rumah: instruksi, pujian, dan konsekuensi yang konsisten')}
${P(`${X(SRC.cdcBehavior.url, 'CDC')} menjelaskan bahwa terapis yang baik mengajarkan orang tua keterampilan dan strategi yang memakai penguatan positif, struktur, dan disiplin yang konsisten. Pelatihan ini juga berfokus pada membangun keterampilan pengasuhan dan memperbaiki hubungan orang tua dengan anak. Tiga hal yang paling sering dipraktikkan adalah cara memberi instruksi, cara memuji, dan cara memberi konsekuensi.`)}
${H3('Instruksi yang singkat dan jelas')}
${P(`Dekati anak, sentuh bahunya dengan lembut, tatap matanya, lalu beri satu instruksi saja. "Taruh sepatumu di rak" lebih mudah diikuti daripada "Rapikan semua barangmu, lalu cuci tangan, lalu makan." Minta anak mengulangi instruksi dengan kata-katanya sendiri. Bila tugasnya panjang, pecah menjadi langkah kecil dan beri pujian di setiap langkah.`)}
${H3('Pujian yang spesifik')}
${P(`Anak yang sering ditegur mudah merasa dirinya selalu salah. Imbangi dengan pujian yang menyebut perilakunya, misalnya "Hebat, kamu menunggu giliran tanpa menyela." Pujian spesifik memberi tahu anak perilaku mana yang perlu diulang. Sebagian keluarga memakai papan bintang atau stiker yang bisa ditukar dengan hadiah kecil yang disepakati bersama.`)}
${H3('Konsekuensi yang tenang dan konsisten')}
${P(`Konsekuensi bekerja paling baik bila sudah disepakati sebelumnya, diberikan dengan tenang, dan selalu sama. Contohnya, waktu gawai berkurang bila anak melempar barang. Hindari hukuman fisik. ${X(SRC.whoPunish.url, 'WHO')} menyebut hukuman fisik meningkatkan masalah perilaku dari waktu ke waktu dan tidak memberi hasil positif. Bila Anda mulai kehilangan kesabaran, ambil jeda sejenak sebelum menanggapi.`)}
${P(`Menurut ${X(SRC.cdcBehavior.url, 'CDC')}, orang tua biasanya mengikuti 8 sampai 16 sesi bersama terapis untuk mempelajari strategi ini. Anda tetap bisa mulai menerapkannya sekarang, lalu menyempurnakannya bersama profesional. Pendekatan serupa juga dipakai dalam ${L('terapi-perilaku-kognitif-anak', 'terapi perilaku kognitif anak')} untuk anak yang lebih besar.`)}
${H2('energi', 'Menyalurkan energi: gerak, tidur, dan makan')}
${P(`Anak yang hiperaktif butuh tempat untuk menyalurkan energinya. ${X(SRC.whoActivity.url, 'WHO')} menyebut aktivitas fisik dalam jumlah berapa pun lebih baik daripada tidak sama sekali, dan semua kelompok usia sebaiknya membatasi waktu duduk diam. ${X(SRC.nice.url, 'NICE')} juga meminta tenaga kesehatan menekankan nilai pola makan seimbang, gizi yang baik, dan olahraga teratur bagi anak dengan ADHD.`)}
${P(`Jadwalkan waktu bergerak sebelum kegiatan yang menuntut duduk, misalnya bermain di halaman sebelum belajar. Pilih kegiatan yang punya aturan sederhana, seperti bersepeda, berenang, bermain bola, atau menari. Pekerjaan rumah yang melibatkan gerak, seperti menyiram tanaman atau membawa belanjaan, juga bisa menjadi cara menyalurkan energi sekaligus melatih tanggung jawab.`)}
${P(`Tidur sama pentingnya. ${X(SRC.nimh.url, 'NIMH')} menyebut tidur sebagai salah satu sasaran penting dalam intervensi dini ADHD. Jaga jam tidur dan bangun yang sama setiap hari, matikan layar sebelum tidur, dan buat rutinitas menjelang tidur yang menenangkan. Panduan lengkapnya ada di ${L('gangguan-tidur-anak-adhd-solusi', 'gangguan tidur anak ADHD')}.`)}
${P(`Soal makanan, ${X(SRC.nice.url, 'NICE')} tidak menganjurkan penghapusan pewarna dan bahan tambahan buatan dari makanan sebagai penanganan umum, tetapi meminta tenaga kesehatan menanyakan makanan atau minuman yang tampak memengaruhi perilaku anak. Bila Anda melihat pola tertentu, catat dan diskusikan dengan dokter. Baca juga ${L('makanan-yang-harus-dihindari-anak-adhd', 'makanan yang harus dihindari anak ADHD')} untuk memisahkan fakta dan mitos.`)}
${fig('Dokumentasi/cpao-siswa-belajar-di-gazebo-062.webp', 'Anak-anak bertopi koki dan beberapa pendamping duduk bersama di gazebo kayu', 'Anak-anak bertopi koki dan pendamping berkumpul di gazebo saat kelas memasak YUKA. Kegiatan praktik dengan langkah jelas bisa menjadi cara menyalurkan energi.' + PHOTO_NOTE, 936, 1248)}
${H2('sekolah', 'Di sekolah: kerja sama dengan guru')}
${P(`Sekolah adalah tempat anak menghabiskan sebagian besar harinya, jadi kerja sama dengan guru sangat menentukan. ${X(SRC.cdcClassroom.url, 'CDC')} menjelaskan bahwa manajemen perilaku di kelas mendorong perilaku positif siswa melalui sistem penghargaan atau kartu laporan harian. Komunikasi harian dengan orang tua lewat kartu laporan itu juga dapat membantu. CDC menyebut pula pelatihan berorganisasi, yang mengajarkan anak mengatur waktu, merencanakan, dan merapikan perlengkapan sekolah.`)}
<table><thead><tr><th>Strategi di kelas (CDC)</th><th>Contoh penerapan sederhana</th></tr></thead><tbody>
<tr><td>Umpan balik dan perhatian yang sering untuk perilaku positif</td><td>Guru memuji anak setiap kali ia menyelesaikan satu bagian tugas</td></tr>
<tr><td>Tugas yang jelas, dicek pemahamannya</td><td>Guru meminta anak mengulang instruksi sebelum mulai mengerjakan</td></tr>
<tr><td>Memberi jeda istirahat</td><td>Anak diberi tugas singkat yang melibatkan gerak, misalnya membagikan buku</td></tr>
<tr><td>Alat bantu berorganisasi</td><td>Satu map khusus pekerjaan rumah yang selalu dicek di akhir hari</td></tr>
<tr><td>Kartu laporan harian</td><td>Buku penghubung berisi dua atau tiga target perilaku yang dinilai setiap hari</td></tr>
</tbody></table>
${P(`${X(SRC.cdcClassroom.url, 'CDC')} juga menyebut bahwa bagi anak dengan ADHD, memusatkan perhatian membutuhkan usaha ekstra dan bisa sangat melelahkan, sehingga jeda istirahat membantu. Di Indonesia, sekolah inklusi dapat menuangkan penyesuaian seperti ini dalam ${L('program-pembelajaran-individual', 'program pembelajaran individual')}. Strategi mengajar yang lebih rinci untuk guru ada di ${L('strategi-mengajar-anak-adhd-di-sekolah', 'strategi mengajar anak ADHD di sekolah')}.`)}
${P(`Mulailah dengan pertemuan singkat bersama wali kelas. Sampaikan apa yang sudah berhasil di rumah, dengarkan apa yang guru lihat di kelas, lalu sepakati dua atau tiga target yang sama. Target yang sama di rumah dan sekolah membuat anak menerima pesan yang konsisten. Informasi tentang pendidikan inklusif ada di ${L('pendidikan-inklusi', 'pendidikan inklusi')}.`)}
${fig('Dokumentasi/21-jan-2026-anak-anak-belajar-bersama-guru-013.webp', 'Anak-anak duduk di lantai dengan meja lipat di ruang kelas, papan tulis putih terlihat di dinding belakang', 'Kegiatan belajar di ruang kelas YUKA dengan meja lipat dan papan tulis. Tugas yang jelas dan dicek pemahamannya membantu anak memulai pekerjaan.' + PHOTO_NOTE, 900, 1200)}
${H2('emosi', 'Saat anak meledak atau sulit berhenti')}
${P(`Ada saatnya semua strategi terasa tidak berjalan. Anak menangis, berteriak, atau terus berlari walau sudah diminta berhenti. Pada saat seperti ini, tujuan pertama adalah keselamatan, bukan menang dalam adu argumen.`)}
${ul([
  'Pastikan anak dan orang di sekitarnya aman. Jauhkan benda berbahaya.',
  'Turunkan suara Anda. Pakai kalimat sangat pendek, misalnya "Berhenti. Duduk di sini."',
  'Beri anak tempat dan waktu untuk tenang, tanpa penonton dan tanpa ceramah panjang.',
  'Setelah tenang, bicarakan apa yang terjadi dengan bahasa sederhana dan cari bersama apa yang bisa dilakukan lain kali.',
  'Catat pemicunya. Lelah, lapar, terlalu ramai, atau pergantian kegiatan yang mendadak sering menjadi pemicu yang berulang.',
])}
${P(`Bila ledakan emosi sering terjadi atau membahayakan, ceritakan kepada dokter atau psikolog. Catatan pemicu yang Anda buat akan membantu mereka menyusun rencana yang tepat. Bila anak juga punya kepekaan sensori yang tinggi, misalnya terganggu suara atau sentuhan, artikel ${L('sensori-integrasi', 'sensori integrasi')} bisa menjadi bacaan tambahan.`)}
${H2('profesional', 'Kapan perlu bantuan profesional')}
${P(`Strategi di rumah dan sekolah sering membantu, tetapi tidak selalu cukup. Carilah bantuan profesional bila perilaku anak terus mengganggu belajar dan pergaulan, membahayakan keselamatan, atau membuat keluarga kewalahan. Mulailah dari dokter anak, yang bila perlu akan merujuk ke psikolog anak, psikiater anak, atau dokter spesialis tumbuh kembang. ${X(SRC.kemkes.url, 'Kemenkes')} menyebut psikoterapi untuk ADHD dapat dilakukan oleh psikiater atau psikolog, biasanya disertai pelatihan keterampilan.`)}
${P(`Bila diagnosis ADHD ditegakkan, dokter dapat membicarakan pilihan obat. ${X(SRC.cdcTreatment.url, 'CDC')} menjelaskan bahwa untuk anak 6 tahun ke atas, AAP menganjurkan gabungan obat dan terapi perilaku. Pada anak yang lebih kecil, pendekatan perilaku didahulukan. Jangan memberi obat, suplemen, atau terapi alternatif tanpa berkonsultasi dengan dokter. Alur pemeriksaan di Indonesia dijelaskan di ${L('diagnosis-adhd-di-indonesia', 'diagnosis ADHD di Indonesia')}, dan sisi klinis ADHD secara umum ada di ${L('adhd-adalah', 'ADHD adalah')}.`)}
${P(`Bila Anda belum yakin apakah anak hanya sangat aktif atau perlu dinilai, baca dulu ${L('anak-aktif-atau-hiperaktif', 'anak aktif atau hiperaktif')}. Panduan langkah demi langkah dari sudut pandang orang tua ada di ${L('anakku-hiperaktif', 'anakku hiperaktif')}.`)}
${fig('Dokumentasi/cpao-ibu-anak-membuat-kue-bersama-007.webp', 'Seorang perempuan berhijab membimbing tangan anak kecil membentuk adonan di atas alas silikon biru', 'Seorang pendamping membimbing tangan anak membentuk adonan di kelas memasak YUKA. Bimbingan langsung langkah demi langkah memudahkan anak menyelesaikan tugas.' + PHOTO_NOTE, 936, 1248)}
${H2('orang-tua', 'Merawat diri orang tua')}
${P(`Mendampingi anak yang sangat aktif setiap hari menguras tenaga dan emosi. Orang tua yang lelah lebih mudah kehilangan kesabaran, dan itu wajar. ${X(SRC.cdcBehavior.url, 'CDC')} mencatat bahwa pelatihan orang tua juga bertujuan memperbaiki hubungan orang tua dan anak, sehingga kesejahteraan orang tua ikut menjadi bagian dari penanganan.`)}
${P(`Bagi tugas dengan pasangan atau anggota keluarga lain. Sisihkan waktu singkat untuk diri sendiri. Bergabunglah dengan kelompok orang tua yang punya pengalaman serupa. Bila stres terasa berat, jangan ragu mencari bantuan. Artikel ${L('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak berkebutuhan khusus')} berisi langkah praktis yang bisa dicoba. Untuk memahami perilaku hiperaktif secara menyeluruh, kembali ke panduan utama ${L('hiperaktif-adalah', 'hiperaktif adalah')}.`)}
${cluster('cara-mengatasi-anak-hiperaktif')}
${faqBlock(B_FAQ)}
`;

for (const a of articles) {
  const html = renderArticlePage(a);
  const out = path.join(OUT, `${a.slug}.html`);
  fs.writeFileSync(out, html);
  console.log(`WROTE ${out} ${html.length} bytes`);
}

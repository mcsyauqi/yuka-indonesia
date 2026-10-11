'use strict';
/*
 * Artikel baru: tahapan-perkembangan-bermain-anak-abk (Trello C4QcFL91, tayang 2026-10-12).
 * Fokus: tahapan bermain sosial Parten (1932) dan tipe bermain Smilansky, serta bagaimana
 * anak berkebutuhan khusus bisa melaluinya dengan kecepatan berbeda. Sengaja TIDAK mengulang
 * isi play-date-untuk-anak-berkebutuhan-khusus (persiapan dan jalannya play date), cukup menautkannya.
 * Setiap klaim dibaca dari TEKS sumber pada 12 Oktober 2026 (PMC, CDC, HealthyChildren/AAP).
 * Foto: potongan tanpa wajah dari dokumentasi YUKA (lihat bodyImages), caption tanpa label diagnosis.
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags, SITE } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'tahapan-perkembangan-bermain-anak-abk';
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
  lee: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8775894/',
  schuchert: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11188555/',
  mohan: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8274541/',
  munambah: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7695500/',
  okeeffe: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12089676/',
  cdcIndex: 'https://www.cdc.gov/act-early/milestones/index.html',
  cdc18: 'https://www.cdc.gov/act-early/milestones/18-months.html',
  cdc2: 'https://www.cdc.gov/act-early/milestones/2-years.html',
  cdc3: 'https://www.cdc.gov/act-early/milestones/3-years.html',
  cdc4: 'https://www.cdc.gov/act-early/milestones/4-years.html',
  cdc5: 'https://www.cdc.gov/act-early/milestones/5-years.html',
  cdcConcerned: 'https://www.cdc.gov/act-early/families/concerned.html',
  hcThrive: 'https://www.healthychildren.org/English/family-life/power-of-play/Pages/The-Power-of-Play-How-Fun-and-Games-Help-Children-Thrive.aspx',
  hcSkills: 'https://www.healthychildren.org/English/family-life/power-of-play/Pages/3-ways-your-child-builds-important-life-skills-through-play.aspx',
};

const hero = image(
  'Dokumentasi/artikel/tahapan-perkembangan-bermain-anak-abk-hero.webp',
  'Tangan anak memegang wadah plastik bersama pendamping yang duduk di lantai saat kegiatan eksperimen sederhana',
  'Kegiatan eksperimen sederhana bersama pendamping di lantai. Foto dipotong agar wajah anak tidak tampak; ini dokumentasi kegiatan, bukan sesi asesmen.'
);
const bodyImages = {
  papan: 'Dokumentasi/artikel/tahapan-perkembangan-bermain-anak-abk-permainan-papan.webp',
  menuang: 'Dokumentasi/artikel/tahapan-perkembangan-bermain-anak-abk-menuang-bersama.webp',
  sayur: 'Dokumentasi/artikel/tahapan-perkembangan-bermain-anak-abk-menyiapkan-sayur.webp',
  adonan: 'Dokumentasi/artikel/apa-itu-autisme-level-1-2-3-kegiatan-tangan.webp',
};

const faq = [
  {
    q: 'Apa saja tahapan perkembangan bermain anak menurut Parten?',
    a: 'Parten (1932) mengelompokkan perilaku bermain sosial anak menjadi enam: tidak terlibat (unoccupied), menonton (onlooker), bermain sendiri (solitary), bermain berdampingan (parallel), bermain asosiatif (associative), dan bermain kooperatif (cooperative). Dua yang terakhir melibatkan interaksi paling kompleks.',
  },
  {
    q: 'Apakah anak berkebutuhan khusus pasti terlambat melewati tahapan bermain?',
    a: 'Tidak pasti. Tinjauan sistematis Munambah dan rekan (2020) menemukan 13 dari 18 studi melaporkan anak dengan kebutuhan kesehatan khusus bermain lebih sedikit dibanding anak seusianya, tetapi setiap anak berbeda. Ada anak yang cepat di satu tahap dan butuh waktu lama di tahap lain.',
  },
  {
    q: 'Anak saya lebih suka bermain sendiri. Apakah itu tanda masalah?',
    a: 'Bermain sendiri adalah salah satu tahap yang wajar dan tetap bernilai. Yang perlu diperhatikan adalah gambaran keseluruhan: apakah anak sama sekali tidak memperhatikan anak lain sampai usia sekitar 3 tahun, atau ada kekhawatiran lain soal bicara, gerak, dan perilaku. Untuk itu, bicarakan dengan dokter atau tenaga kesehatan.',
  },
  {
    q: 'Pada usia berapa anak biasanya bermain bersama anak lain?',
    a: 'Menurut daftar tonggak perkembangan CDC, sebagian besar anak (75 persen atau lebih) pada usia 3 tahun memperhatikan anak lain dan ikut bergabung bermain, dan pada usia 5 tahun mengikuti aturan atau bergiliran saat bermain permainan bersama anak lain. Angka ini patokan umum, bukan batas mutlak.',
  },
  {
    q: 'Apa beda bermain asosiatif dan kooperatif?',
    a: 'Pada bermain asosiatif, anak bermain bersama dan saling berbagi alat atau obrolan, tetapi belum ada tujuan bersama yang tertata. Pada bermain kooperatif, anak bekerja sama menuju satu tujuan, misalnya membangun satu menara atau memainkan peran dalam satu cerita. Peneliti sendiri mengakui keduanya kadang sulit dibedakan.',
  },
  {
    q: 'Apakah artikel ini bisa dipakai untuk mendiagnosis anak?',
    a: 'Tidak. Tahapan bermain dan daftar tonggak perkembangan adalah alat bantu mengamati, bukan alat diagnosis. Kalau ada kekhawatiran, CDC menyarankan orang tua langsung membicarakannya dengan dokter anak dan tidak menunggu.',
  },
  {
    q: 'Bagaimana cara membantu anak naik ke tahap bermain berikutnya?',
    a: 'Mulai dari tahap anak sekarang. Ikuti minatnya, duduk di dekatnya, tiru permainannya, lalu tawarkan satu langkah kecil seperti bergiliran atau berbagi satu benda. Hindari memaksa anak langsung masuk ke permainan kelompok besar.',
  },
  {
    q: 'Apa itu tipe bermain menurut Smilansky?',
    a: 'Smilansky membagi bermain menjadi empat tipe berdasarkan isinya: bermain fungsional, bermain konstruktif, bermain dramatis atau pura-pura, dan permainan dengan aturan. Tipe ini melengkapi tahapan sosial Parten, karena satu anak bisa bermain konstruktif sendirian atau bersama teman.',
  },
];

const faqHtml = `${h2('faq', 'Pertanyaan yang Sering Diajukan')}\n${faq.map(({ q, a: ans }) => `${h3(q)}${p(ans)}`).join('\n')}`;

const bodyParts = [
  `<div class="answer-box" style="background:#F0F4FF;border-left:4px solid #2B3A67;padding:1.25rem 1.5rem;margin:0 0 2rem;border-radius:0 12px 12px 0;"><strong>Jawaban singkat:</strong> Tahapan perkembangan bermain anak yang paling sering dipakai berasal dari Parten (1932): tidak terlibat, menonton, bermain sendiri, bermain berdampingan, asosiatif, dan kooperatif. Anak berkebutuhan khusus (ABK) umumnya melewati tahapan yang sama, tetapi dengan kecepatan dan urutan yang bisa berbeda. Tugas orang dewasa adalah mengenali tahap anak saat ini, lalu membantunya selangkah demi selangkah, bukan memaksanya mengejar usia.</div>`,

  p(`Banyak orang tua bertanya, "Kenapa anak saya belum mau main bersama temannya?" Pertanyaan ini wajar, apalagi ketika anak lain seusianya sudah asyik bermain peran atau bergiliran dalam permainan. Artikel ini menjelaskan tahapan perkembangan bermain anak, dua cara populer untuk memetakannya (tahapan sosial Parten dan tipe bermain Smilansky), apa yang diketahui riset tentang pola bermain anak berkebutuhan khusus, serta cara mendampingi anak di rumah dan di sekolah.`),
  p(`Satu hal perlu ditegaskan sejak awal: artikel ini bukan alat diagnosis. Tahapan bermain membantu kita mengamati, bukan memberi label. Kalau Anda sedang menyiapkan pertemuan bermain dengan anak lain, panduan praktisnya ada di artikel ${a('play-date-untuk-anak-berkebutuhan-khusus', 'play date untuk anak berkebutuhan khusus')}. Di sini fokus kita adalah peta tahapannya.`),

  h2('mengapa-bermain-penting', 'Mengapa Tahapan Bermain Penting untuk Dipahami'),
  p(`Bermain bukan sekadar mengisi waktu. American Academy of Pediatrics (AAP), lewat laporan klinis <em>The Power of Play</em> yang dirangkum di ${ext(SRC.hcThrive, 'HealthyChildren.org')}, menyebut riset menunjukkan bermain dapat meningkatkan kemampuan anak merencanakan, mengatur, bergaul dengan orang lain, dan mengelola emosi. Bermain juga membantu bahasa, matematika, dan keterampilan sosial, bahkan membantu anak menghadapi stres.`),
  p(`Hubungan bermain dan bahasa juga tercatat dalam penelitian. Mohan dan rekan (2021) di ${ext(SRC.mohan, 'Psychology Research and Behavior Management')} merangkum bahwa bermain simbolis atau pura-pura memiliki korelasi tinggi dengan bahasa, dan bermain pura-pura juga berkaitan dengan kemampuan bercerita, pengaturan emosi, fungsi eksekutif, fungsi sosial, penalaran, dan pemecahan masalah. Perlu dicatat, korelasi berarti keduanya berjalan bersama, belum tentu yang satu menyebabkan yang lain.`),
  p(`Karena itu, memahami tahap bermain anak memberi kita titik awal yang jelas. Kalau kita tahu anak sedang di tahap bermain berdampingan, kita tidak akan berharap ia langsung memimpin permainan kelompok. Kita bisa menyiapkan langkah berikutnya yang masuk akal. Pendekatan ini sejalan dengan prinsip ${a('intervensi-dini', 'intervensi dini')}: dukungan dimulai dari kemampuan anak saat ini.`),

  h2('tahapan-parten', 'Enam Tahapan Bermain Sosial Menurut Parten (1932)'),
  p(`Mildred Parten mengamati anak prasekolah dan mengelompokkan perilaku bermain sosial mereka. Lee dan rekan (2022), dalam ${ext(SRC.lee, 'jurnal Healthcare')}, menuliskan bahwa Parten mengklasifikasikan bermain sosial anak menjadi perilaku tidak terlibat, perilaku menonton, bermain sendiri, bermain berdampingan, bermain asosiatif, dan bermain kooperatif. Bermain asosiatif dan kooperatif melibatkan interaksi yang lebih kompleks.`),
  p(`Schuchert dan rekan (2024) di ${ext(SRC.schuchert, 'Clinical Child Psychology and Psychiatry')} menjelaskan bahwa pada perkembangan tipikal, tahapan sosial ini terbentang dari masa bayi sampai usia lima tahun. Anak pada umumnya menunjukkan bermain sendiri dan menonton sekitar usia 2,5 tahun, mencapai bermain asosiatif sekitar usia 4 tahun, dan kooperatif sekitar usia 5 tahun. Mereka juga mencatat kritik terhadap Parten: tahap asosiatif dan kooperatif sulit dipisahkan, dan cara bermain bisa berbeda antarbudaya.`),
  table(
    'Tahapan bermain sosial Parten dan contoh pengamatannya',
    ['Tahap', 'Seperti apa', 'Contoh yang mungkin terlihat', 'Langkah pendampingan'],
    [
      ['Tidak terlibat (unoccupied)', 'Anak belum terlibat dalam kegiatan bermain tertentu', 'Berjalan berkeliling, memperhatikan benda sebentar lalu berpindah', 'Sediakan sedikit pilihan mainan yang menarik, tunjukkan cara memakainya'],
      ['Menonton (onlooker)', 'Anak memperhatikan anak lain bermain tanpa ikut', 'Berdiri di pinggir dan melihat teman menyusun balok', 'Biarkan anak menonton, beri nama apa yang ia lihat, tawarkan duduk lebih dekat'],
      ['Bermain sendiri (solitary)', 'Anak bermain dengan mainannya sendiri', 'Asyik menjajarkan mobil mainan di pojok ruangan', 'Ikut duduk di dekatnya, tiru permainannya tanpa mengambil alih'],
      ['Berdampingan (parallel)', 'Anak bermain di dekat anak lain dengan bahan serupa, tetapi masing-masing', 'Dua anak mewarnai di meja yang sama tanpa saling bicara', 'Siapkan bahan bersama, misalnya satu wadah krayon untuk berdua'],
      ['Asosiatif (associative)', 'Anak bermain bersama, berbagi alat atau obrolan, belum ada tujuan bersama', 'Saling meminjam sekop di bak pasir sambil mengomentari', 'Latih kalimat meminta dan menawarkan, pujilah saat anak berbagi'],
      ['Kooperatif (cooperative)', 'Anak bekerja sama menuju satu tujuan atau mengikuti peran dan aturan', 'Membangun satu menara bersama atau bermain peran toko', 'Beri peran yang jelas dan aturan sederhana, gunakan gambar bila perlu'],
    ]
  ),
  p(`Tabel di atas adalah bantuan mengamati. Kolom contoh dan langkah pendampingan adalah ringkasan praktik umum dari tim YUKA, bukan kriteria penilaian baku. Satu anak bisa terlihat di beberapa tahap pada hari yang sama, tergantung tempat, suasana hati, dan siapa yang ada di sekitarnya.`),
  fig(
    bodyImages.papan,
    'Beberapa tangan anak menyentuh papan permainan interaktif di museum, sebagian anak berdiri berdampingan di sekeliling meja',
    'Anak-anak bermain di depan papan interaktif yang sama saat kunjungan museum. Situasi seperti ini memberi kesempatan bermain berdampingan sebelum anak siap bermain bersama.'
  ),

  h2('tipe-bermain-smilansky', 'Tipe Bermain Menurut Smilansky dan Piaget'),
  p(`Tahapan Parten menjawab pertanyaan "dengan siapa anak bermain". Ada cara lain untuk melihat bermain, yaitu dari isinya: "bermain apa". Mohan dan rekan (2021) mencatat bahwa ${ext(SRC.mohan, 'Smilansky mengelompokkan bermain menjadi empat tipe')}, yaitu bermain konstruktif, bermain fungsional, bermain dramatis, dan permainan dengan aturan. Schuchert dan rekan (2024) juga menyebut permainan dengan aturan sebagai salah satu bentuk bermain yang dibahas Piaget (1952).`),
  table(
    'Empat tipe bermain Smilansky dan contohnya di rumah',
    ['Tipe bermain', 'Isi kegiatannya', 'Contoh sederhana', 'Kemampuan yang ikut dilatih'],
    [
      ['Fungsional', 'Mengulang gerakan atau memakai benda sesuai fungsinya', 'Mendorong mobil mainan, memukul gendang', 'Koordinasi gerak, sebab dan akibat'],
      ['Konstruktif', 'Membuat atau menyusun sesuatu', 'Menyusun balok, membentuk adonan mainan', 'Perencanaan, motorik halus, ketekunan'],
      ['Dramatis atau pura-pura', 'Memakai benda atau diri sendiri sebagai simbol', 'Pura-pura memasak, berperan menjadi guru', 'Bahasa, memahami sudut pandang orang lain'],
      ['Permainan dengan aturan', 'Mengikuti aturan yang disepakati dan bergiliran', 'Ular tangga, petak umpet sederhana', 'Menunggu giliran, menerima kalah dan menang'],
    ]
  ),
  p(`Kolom kemampuan di tabel ini adalah gambaran umum, bukan hasil pengukuran. Menggabungkan kedua peta membantu kita lebih tepat. Misalnya, seorang anak mungkin sudah lancar bermain konstruktif seperti menyusun balok yang rumit, tetapi masih melakukannya sendirian. Langkah berikutnya untuk anak ini bukan mengajari menyusun balok, melainkan mengajak satu teman ikut menambah satu balok.`),
  p(`${ext(SRC.hcSkills, 'HealthyChildren.org (AAP)')} menjelaskan bahwa balita mulai bisa berpikir dengan simbol, sedangkan anak prasekolah mulai berpura-pura menjadi dokter atau pemadam kebakaran. Laman yang sama mencatat bahwa anak yang cara berpikirnya kaku mungkin menolak bermain pura-pura, sehingga orang tua disarankan membuatnya menyenangkan atau lucu. Saran ini relevan untuk banyak anak berkebutuhan khusus yang lebih nyaman dengan hal yang nyata dan terduga.`),
  fig(
    bodyImages.adonan,
    'Dua pasang tangan membentuk adonan di atas alas silikon biru di meja kayu',
    'Kegiatan membentuk adonan di atas alas, contoh bermain konstruktif yang bisa dilakukan sendiri maupun berdampingan.'
  ),

  h2('patokan-usia-cdc', 'Patokan Usia: Apa Kata Daftar Tonggak Perkembangan CDC'),
  p(`Daftar ${ext(SRC.cdcIndex, 'tonggak perkembangan CDC')} (program <em>Learn the Signs. Act Early.</em>) memuat beberapa kemampuan bermain. CDC menjelaskan bahwa tonggak perkembangan adalah hal yang bisa dilakukan sebagian besar anak (75 persen atau lebih) pada usia tertentu. Artinya, daftar ini menggambarkan kebanyakan anak, bukan semua anak.`),
  table(
    'Kemampuan bermain dalam daftar tonggak perkembangan CDC',
    ['Usia', 'Kemampuan yang dilakukan sebagian besar anak', 'Kaitan dengan tahapan bermain'],
    [
      [ext(SRC.cdc18, '18 bulan'), 'Meniru orang tua mengerjakan pekerjaan rumah, seperti menyapu; bermain dengan mainan secara sederhana, seperti mendorong mobil mainan', 'Bermain fungsional, awal meniru'],
      [ext(SRC.cdc2, '2 tahun'), 'Bermain dengan lebih dari satu mainan sekaligus, seperti menaruh makanan mainan di piring mainan', 'Awal bermain pura-pura dan konstruktif'],
      [ext(SRC.cdc3, '3 tahun'), 'Memperhatikan anak lain dan ikut bergabung bermain', 'Dari menonton dan berdampingan menuju asosiatif'],
      [ext(SRC.cdc4, '4 tahun'), 'Berpura-pura menjadi sesuatu saat bermain (guru, pahlawan super, anjing); meminta bermain dengan anak lain bila tidak ada teman', 'Bermain dramatis, asosiatif'],
      [ext(SRC.cdc5, '5 tahun'), 'Mengikuti aturan atau bergiliran saat bermain permainan bersama anak lain', 'Kooperatif, permainan dengan aturan'],
    ]
  ),
  p(`Daftar ini paling berguna sebagai bahan percakapan dengan tenaga kesehatan, bukan sebagai ujian. Kalau anak belum melakukan beberapa hal sesuai usianya, atau Anda merasa ada masalah dengan cara anak bermain, belajar, berbicara, bertindak, dan bergerak, ${ext(SRC.cdcConcerned, 'CDC menyarankan')} untuk membicarakannya dengan dokter anak dan tidak menunggu. Di Indonesia, pemantauan tumbuh kembang bisa dimulai dari Puskesmas dan Buku KIA; langkahnya dijelaskan di ${a('langkah-langkah-deteksi-dini-tumbuh-kembang-anak', 'langkah-langkah deteksi dini tumbuh kembang anak')}. Penjelasan umum tentang tonggak perkembangan ada di ${a('what-is-a-milestone-for-a-kid', 'artikel milestone anak')}.`),

  h2('anak-abk-dan-tahapan-bermain', 'Bagaimana Anak Berkebutuhan Khusus Melalui Tahapan Bermain'),
  p(`Apa yang diketahui riset tentang pola bermain anak berkebutuhan khusus? Munambah dan rekan (2020) melakukan ${ext(SRC.munambah, 'tinjauan sistematis')} terhadap studi yang membandingkan bermain anak dengan kebutuhan kesehatan khusus dan anak dengan perkembangan tipikal. Dari 18 studi yang memenuhi syarat, 13 melaporkan anak dengan kebutuhan kesehatan khusus lebih sedikit bermain. Penulis juga menyimpulkan bahwa kelompok ini rata-rata kurang playful dan lebih singkat waktu bermainnya.`),
  p(`Tabel rangkuman dalam tinjauan yang sama memberi gambaran lebih rinci, walaupun tiap temuan hanya didukung sedikit studi. Pada anak dengan keterlambatan perkembangan dan disabilitas lain, dua studi mencatat lebih banyak bermain sendiri atau berdampingan, dua studi mencatat lebih sedikit bermain kooperatif, dan dua studi mencatat lebih sedikit bermain pura-pura. Pada anak dengan ADHD, tiga studi mencatat lebih sedikit bermain sosial. Penulis mengingatkan bahwa semua studi yang ditinjau berisiko bias karena desainnya, dan ukuran sampelnya sangat beragam.`),
  p(`Jadi, kesimpulan yang adil adalah: banyak anak berkebutuhan khusus memang lebih lama berada di tahap bermain sendiri atau berdampingan, tetapi ini pola rata-rata kelompok, bukan ramalan untuk anak Anda. Kondisi yang berbeda juga memengaruhi bermain dengan cara berbeda. Anak dengan hambatan gerak mungkin paham aturan permainan tetapi kesulitan mengikuti permainan lari. Anak dengan hambatan bahasa mungkin senang bersama teman tetapi sulit masuk ke permainan pura-pura yang banyak dialog.`),
  h3('Kecepatan berbeda, bukan jalan buntu'),
  p(`Studi kecil Schuchert dan rekan (2024) memberi gambaran bahwa tahapan bisa bergerak. Mereka mengamati ${ext(SRC.schuchert, '11 anak autis usia 2 sampai 6 tahun')} yang mengikuti intervensi kelompok di New Delhi, India. Dari rekaman video sebelum dan sesudah intervensi, jumlah aksi bermain di tahap sendiri, menonton, dan berdampingan berkurang pada sembilan dari 11 anak, sementara bermain asosiatif dan kooperatif bertambah. Penulis mencatat peserta bergerak dari bermain menonton ke asosiatif dalam waktu kurang dari setahun.`),
  p(`Hasil ini perlu dibaca hati-hati. Jumlah pesertanya kecil, semuanya mengikuti satu program di satu pusat terapi, dan desainnya membandingkan sebelum dan sesudah pada anak yang sama. Temuan ini tidak membuktikan satu metode lebih baik dari yang lain. Pesan yang bisa diambil lebih sederhana: dengan dukungan yang terarah, banyak anak bisa naik tahap, dan tahapannya sendiri bisa dipakai untuk mengukur kemajuan kecil yang sering terlewat.`),
  h3('Mendengar cara anak sendiri memaknai bermain'),
  p(`Ada juga sudut pandang yang penting tetapi jarang dibahas. O'Keeffe dan rekan (2025) ${ext(SRC.okeeffe, 'mewawancarai 19 anak autis usia 5 sampai 13 tahun')} tentang arti bermain bagi mereka. Anak-anak menggambarkan bermain sebagai kesenangan, hubungan sosial, dan keterlibatan dengan bahan atau kegiatan yang bermakna, dengan otonomi sebagai bagian penting. Penulis menilai temuan ini menantang anggapan lama yang memandang bermain anak autis hanya dari sisi kekurangan.`),
  p(`Bagi orang tua dan guru, pelajarannya jelas: tahapan Parten adalah alat bantu, bukan tolok ukur nilai anak. Anak yang senang menjajarkan benda atau mengulang satu permainan tetap sedang bermain. Tugas kita adalah memperluas pilihannya dengan lembut, bukan menghapus cara bermain yang ia sukai.`),
  fig(
    bodyImages.menuang,
    'Tangan anak dan tangan pendamping bersama-sama memegang corong hijau di atas wadah plastik',
    'Pendamping dan anak menuang bergantian dalam satu kegiatan. Berbagi satu benda adalah jembatan sederhana dari bermain sendiri ke bermain bersama.'
  ),

  h2('cara-mendampingi', 'Cara Mendampingi Anak Naik ke Tahap Berikutnya'),
  p(`Prinsip umumnya: mulai dari tahap anak sekarang, lalu tambahkan satu unsur kecil dari tahap berikutnya. Berikut contoh langkah yang bisa dicoba di rumah. Sesuaikan dengan saran terapis yang menangani anak, karena setiap anak punya kebutuhan sensorik, gerak, dan komunikasi yang berbeda.`),
  ol([
    '<strong>Amati dulu selama beberapa hari.</strong> Catat di mana, dengan siapa, dan bermain apa anak paling sering terlibat. Catatan sederhana lebih membantu daripada kesan umum.',
    '<strong>Ikuti minat anak.</strong> Kalau anak suka kendaraan, gunakan kendaraan sebagai pintu masuk ke permainan lain, misalnya pura-pura mengantar barang.',
    '<strong>Duduk sejajar dan tiru.</strong> Untuk anak di tahap bermain sendiri, meniru permainannya membuat kehadiran orang lain terasa aman dan menarik.',
    '<strong>Tambahkan satu kesempatan berbagi.</strong> Siapkan satu wadah balok untuk berdua atau satu kotak krayon untuk satu meja.',
    '<strong>Latih giliran dengan permainan sangat pendek.</strong> Dua sampai tiga putaran sudah cukup di awal. Pakai kata atau gambar "giliranku" dan "giliranmu".',
    '<strong>Mulai dengan satu teman, bukan kelompok.</strong> Kelompok besar sering terlalu ramai. Satu teman yang sabar, termasuk saudara kandung, adalah awal yang baik.',
    '<strong>Akhiri sebelum anak kewalahan.</strong> Lebih baik berhenti saat anak masih senang daripada menunggu sampai ia tantrum.',
  ]),
  p(`Ide mainan yang mendukung tahap-tahap ini ada di ${a('daftar-mainan-edukatif-untuk-anak-autis', 'daftar mainan edukatif untuk anak autis')} dan ${a('mainan-montessori', 'mainan Montessori')}. Untuk latihan sosial yang lebih terstruktur, baca ${a('cara-melatih-social-skills-anak-autis-di-rumah', 'cara melatih social skills anak autis di rumah')} dan ${a('joint-attention-anak-autis-kenapa-penting', 'joint attention pada anak autis')}, karena kemampuan berbagi perhatian sering menjadi dasar bermain bersama. Peran saudara kandung dibahas di ${a('sibling-anak-berkebutuhan-khusus', 'sibling anak berkebutuhan khusus')}.`),
  h3('Kapan bermain perlu dibantu tenaga profesional'),
  p(`Beberapa anak membutuhkan bantuan terapis untuk berkembang dalam bermain. Terapi bermain, terapi okupasi, dan terapi wicara sering memakai bermain sebagai media. Penjelasan tentang layanan ini ada di ${a('terapi-bermain', 'terapi bermain')} dan ${a('terapi-okupasi', 'terapi okupasi')}. Mintalah terapis menjelaskan tahap bermain anak saat ini dan satu target berikutnya, supaya latihan di rumah dan di tempat terapi berjalan searah.`),
  fig(
    bodyImages.sayur,
    'Tangan beberapa orang menyiapkan sayuran di atas piring dan baskom di lantai',
    'Kegiatan menyiapkan sayur bersama di lantai. Kegiatan sehari-hari yang dikerjakan bersama bisa menjadi latihan berbagi tugas dan bergiliran.'
  ),

  h2('peran-sekolah', 'Peran Guru dan Sekolah Inklusi'),
  p(`Di sekolah, guru bisa memakai tahapan bermain untuk mengatur waktu istirahat dan kegiatan kelompok. Anak yang masih di tahap menonton bisa diberi posisi dekat kelompok tanpa dituntut ikut. Anak di tahap berdampingan bisa ditempatkan di meja yang sama dengan teman yang mengerjakan kegiatan serupa. Anak yang sudah mulai asosiatif bisa dipasangkan dengan teman sebaya yang sabar, pola yang mirip dengan ${a('buddy-system-untuk-anak-abk-di-sekolah', 'buddy system di sekolah')}.`),
  ul([
    'Siapkan area bermain yang tidak terlalu ramai dan punya pilihan kegiatan tenang.',
    'Gunakan aturan permainan yang pendek dan ditampilkan dengan gambar.',
    'Ajarkan teman sebaya cara mengajak, misalnya menawarkan satu mainan atau satu peran.',
    'Catat perubahan kecil, seperti anak yang mulai duduk lebih dekat ke teman, dan sampaikan ke orang tua.',
    'Jangan memakai waktu bermain sebagai hukuman yang dicabut, karena bermain adalah bagian dari belajar.',
  ]),
  p(`Pendekatan ini sejalan dengan prinsip ${a('pendidikan-inklusi', 'pendidikan inklusi')}: lingkungan yang menyesuaikan diri agar setiap anak bisa berpartisipasi. Di Sekolah Inklusi Taruna Imani, kami melihat sendiri bahwa kemajuan bermain sering datang dalam langkah kecil, seperti anak yang mulai menoleh ke teman, lalu duduk di sebelahnya, lalu menyerahkan satu benda. Setiap langkah kecil itu layak dirayakan, insyaAllah dengan kesabaran bersama.`),

  h2('kesalahan-umum', 'Kesalahan Umum Saat Menilai Tahapan Bermain'),
  ul([
    '<strong>Menganggap tahap lebih awal pasti buruk.</strong> Bermain sendiri dan berdampingan tetap bermanfaat, dan anak usia berapa pun kadang memilihnya.',
    '<strong>Menilai dari satu kejadian.</strong> Anak bisa tampak menyendiri di pesta yang ramai tetapi aktif bermain dengan sepupunya di rumah.',
    '<strong>Memaksa permainan kelompok terlalu cepat.</strong> Lompatan yang terlalu jauh bisa membuat anak cemas dan justru menghindari teman.',
    '<strong>Membandingkan dengan anak lain.</strong> Bandingkan anak dengan dirinya sendiri beberapa bulan lalu.',
    '<strong>Menunggu terlalu lama saat khawatir.</strong> Kalau ada kekhawatiran perkembangan, bicarakan dengan tenaga kesehatan sekarang, tanpa harus menunggu anak "terlambat cukup jauh".',
  ]),

  faqHtml,
];
// Daftar Isi dari H2 (disisipkan sesudah kotak jawaban singkat).
const tocItems = [...bodyParts.join('\n').matchAll(/<h2 id="([^"]+)">([^<]+)<\/h2>/g)].map((m) => `<li><a href="#${m[1]}">${m[2]}</a></li>`);
const toc = `<div class="toc"><h3>Daftar Isi</h3><ol>${tocItems.join('')}</ol></div>`;
const bodyHtml = [bodyParts[0], toc, ...bodyParts.slice(1)].join('\n');

const PROVENANCE = `<div class="article-provenance" style="margin:2rem 0;padding:1.5rem;background:#FFFFFF;border:1px solid #DDE3F0;border-radius:10px;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Tentang artikel ini</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.25rem;font-size:0.95rem;line-height:1.85;color:#333;">
            <li><strong>Ditulis oleh:</strong> Tim YUKA (Yayasan Ukhuwah Kaffah Amanatullah), pengelola Sekolah Inklusi Taruna Imani, Sleman, Yogyakarta.</li>
            <li><strong>Dasar rujukan:</strong> cdc.gov, healthychildren.org (American Academy of Pediatrics), dan lima publikasi ilmiah di PubMed Central (pmc.ncbi.nlm.nih.gov). Semua rujukan ditautkan langsung di bagian sumber di bawah artikel ini.</li>
            <li><strong>Terbit:</strong> 12 Oktober 2026. <strong>Pembaruan terakhir:</strong> 12 Oktober 2026.</li>
<!-- MEDICAL_REVIEW_STATUS:START -->
            <li><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik, <strong>belum ditinjau oleh tenaga kesehatan berizin</strong>. Tinjauan oleh tenaga kesehatan berkredensial sedang kami siapkan dan status ini akan diperbarui di halaman ini begitu selesai. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk menilai perkembangan atau merencanakan terapi, rujuklah pada dokter anak, psikolog, atau terapis yang menangani anak.</li>
          <!-- MEDICAL_REVIEW_STATUS:END -->
            <li><strong>Kebijakan koreksi:</strong> jika Anda menemukan klaim yang keliru atau sumber yang tidak cocok, beri tahu kami lewat <a href="/kontak">halaman kontak</a>. Kami memperbaiki isinya dan mencantumkan catatan koreksi secara terbuka.</li>
          </ul>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional dan bukan alat diagnosis. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>`;

const article = {
  slug,
  titleTag: 'Tahapan Perkembangan Bermain Anak ABK: Panduan Lengkap',
  metaDesc: 'Pahami tahapan perkembangan bermain anak ABK menurut Parten dan Smilansky, patokan usia CDC, temuan riset, dan cara mendampingi anak naik tahap. Baca di sini.',
  keywords: 'tahapan perkembangan bermain anak abk, tahapan bermain anak, tahapan bermain parten, bermain paralel, bermain kooperatif, tipe bermain smilansky, bermain anak berkebutuhan khusus',
  ogTitle: 'Tahapan Perkembangan Bermain Anak ABK',
  ogDesc: 'Enam tahapan bermain sosial Parten, empat tipe bermain Smilansky, patokan usia CDC, dan cara mendampingi anak berkebutuhan khusus melaluinya dengan kecepatannya sendiri.',
  datePublished: DATE,
  dateModified: DATE,
  dateDisplay: '12 Okt 2026',
  readTime: '12 menit baca',
  category: 'Pendidikan',
  h1: 'Tahapan Perkembangan Bermain Anak ABK: Dari Bermain Sendiri sampai Bermain Bersama',
  crumb: 'Tahapan Perkembangan Bermain Anak ABK',
  parent: { href: 'terapi-bermain', name: 'Terapi Bermain' },
  about: ['Tahapan bermain anak', 'Anak berkebutuhan khusus', 'Perkembangan sosial anak'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'play-date-untuk-anak-berkebutuhan-khusus', title: 'Play Date untuk Anak Berkebutuhan Khusus', desc: 'Persiapan dan jalannya pertemuan bermain dengan anak lain.' },
    { href: 'terapi-bermain', title: 'Terapi Bermain untuk Anak', desc: 'Mengenal terapi yang memakai bermain sebagai media.' },
    { href: 'cara-melatih-social-skills-anak-autis-di-rumah', title: 'Cara Melatih Social Skills Anak Autis di Rumah', desc: 'Latihan keterampilan sosial sehari-hari di rumah.' },
    { href: 'daftar-mainan-edukatif-untuk-anak-autis', title: 'Daftar Mainan Edukatif untuk Anak Autis', desc: 'Pilihan mainan yang mendukung tiap tahap bermain.' },
  ],
  tags: ['TahapanBermain', 'AnakBerkebutuhanKhusus', 'PerkembanganSosial', 'Parenting'],
  sources: [
    { url: SRC.lee, label: 'Lee SH dkk. (2022), Development of a Social Play Evaluation Tool for Preschool Children, Healthcare (PMC8775894)' },
    { url: SRC.schuchert, label: 'Schuchert SA dkk. (2024), Exploring social stages of play through Eye to I intervention model, Clin Child Psychol Psychiatry (PMC11188555)' },
    { url: SRC.mohan, label: 'Mohan M dkk. (2021), Child, Parent, and Play among Children with and without Receptive Expressive Language Disorder, Psychol Res Behav Manag (PMC8274541)' },
    { url: SRC.munambah, label: 'Munambah N dkk. (2020), A Systematic Review Comparing the Play Profiles of Children with Special Health Care Needs with Typically Developing Children, Biomed Res Int (PMC7695500)' },
    { url: SRC.okeeffe, label: "O'Keeffe C dkk. (2025), A strengths-based understanding of the play of autistic children, Autism (PMC12089676)" },
    { url: SRC.cdcIndex, label: "CDC, CDC's Developmental Milestones (Learn the Signs. Act Early.)" },
    { url: SRC.cdc18, label: 'CDC, Milestones by 18 Months' },
    { url: SRC.cdc2, label: 'CDC, Milestones by 2 Years' },
    { url: SRC.cdc3, label: 'CDC, Milestones by 3 Years' },
    { url: SRC.cdc4, label: 'CDC, Milestones by 4 Years' },
    { url: SRC.cdc5, label: 'CDC, Milestones by 5 Years' },
    { url: SRC.cdcConcerned, label: "CDC, Concerned About Your Child's Development?" },
    { url: SRC.hcThrive, label: 'American Academy of Pediatrics (HealthyChildren.org), The Power of Play: How Fun and Games Help Children Thrive' },
    { url: SRC.hcSkills, label: 'American Academy of Pediatrics (HealthyChildren.org), 3 Ways Your Child Builds Important Life Skills Through Play' },
  ],
  sourcesCheckedNote: 'Seluruh sumber dibaca dari teks aslinya pada 12 Oktober 2026. Tahapan bermain dan tonggak perkembangan adalah alat bantu mengamati, bukan alat diagnosis.',
  editorialHtml: PROVENANCE,
};

const html = renderArticlePage(article);

if (/[—–]/.test(html)) throw new Error('em/en dash ditemukan');
if (/href="(\.\.\/artikel\/)?[a-z0-9-]+\.html"/.test(bodyHtml)) throw new Error('tautan internal .html ditemukan');

// Tautan internal hanya ke artikel yang sudah tayang (berkas ada + kartu di blog.html).
const blog = fs.readFileSync(path.join(ROOT, 'blog.html'), 'utf8');
const internal = [...new Set([...bodyHtml.matchAll(/<a href="([a-z0-9-]+)"/g)].map((m) => m[1]))];
const notLive = internal.filter((s) => !fs.existsSync(path.join(ROOT, 'artikel', `${s}.html`)) || !blog.includes(`artikel/${s}"`));
if (notLive.length) throw new Error(`tautan ke artikel belum tayang: ${notLive.join(', ')}`);

fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, internal: internal.length, site: SITE, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

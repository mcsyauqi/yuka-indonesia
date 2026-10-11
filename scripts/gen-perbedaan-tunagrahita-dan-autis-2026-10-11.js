#!/usr/bin/env node
/*
 * Artikel baru: perbedaan-tunagrahita-dan-autis (Trello YKowF1Tg, 2026-10-11).
 *
 * Belum ada halaman khusus untuk kata kunci ini. Pertanyaan "apa perbedaan tunagrahita dan autisme"
 * selama ini hanya satu FAQ di artikel/tunagrahita-adalah. Artikel ini menjadi jawaban lengkapnya,
 * lalu menautkan balik ke pilar tunagrahita-adalah dan autisme-adalah supaya tidak saling makan.
 *
 * Semua definisi diambil dari teks mentah sumber resmi yang dibaca 11 Oktober 2026:
 * APA (DSM-5 / DSM-5-TR), WHO ICD-11 (6A00, 6A02), WHO fact sheet autisme, CDC MMWR SS 74(2) 2025
 * via PMC12011386, AAIDD, UU 8/2016 (status Berlaku di JDIH BPK), Panduan Pelaksanaan Pendidikan
 * Inklusif Kemendikbudristek 2021, referensi Dapodik Kemendikdasmen, dan Kemenkes (Ayo Sehat).
 * Status tinjauan medis dipasang jujur oleh ensureArticleShell (belum ditinjau dokter berlisensi).
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'artikel');
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const PHOTO_NOTE = ' Foto suasana kegiatan, bukan gambaran kondisi anak tertentu.';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (slug, text) => `<a href="${slug}">${text}</a>`;
const X = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
const fig = (file, alt, caption, w, h) => `<figure><img src="../${file}" alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${CREDIT}</span></figcaption></figure>`;
const P = (s) => `<p>${s}</p>`;
const H2 = (id, s) => `<h2 id="${id}">${s}</h2>`;
const H3 = (s) => `<h3>${s}</h3>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const faqBlock = (items) => `${H2('faq', 'Pertanyaan yang Sering Diajukan')}${items.map((f) => `${H3(f.q)}${P(f.a)}`).join('\n')}`;
const toc = (items) => `<div class="toc"><h3>Daftar Isi</h3><ol>${items.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>`;

const SRC = {
  apaIdSheet: { label: 'American Psychiatric Association: DSM-5 Intellectual Disability Fact Sheet (PDF)', url: 'https://www.psychiatry.org/File%20Library/Psychiatrists/Practice/DSM/APA_DSM-5-Intellectual-Disability.pdf' },
  apaId: { label: 'American Psychiatric Association: What is Intellectual Disability?', url: 'https://www.psychiatry.org/patients-families/intellectual-disability/what-is-intellectual-disability' },
  apaAsd: { label: 'American Psychiatric Association: What is Autism Spectrum Disorder?', url: 'https://www.psychiatry.org/patients-families/autism/what-is-autism-spectrum-disorder' },
  apaAsdSheet: { label: 'American Psychiatric Association: DSM-5 Autism Spectrum Disorder Fact Sheet (PDF)', url: 'https://www.psychiatry.org/File%20Library/Psychiatrists/Practice/DSM/APA_DSM-5-Autism-Spectrum-Disorder.pdf' },
  icd6a00: { label: 'WHO ICD-11 MMS: 6A00 Disorders of intellectual development', url: 'https://icd.who.int/browse/2025-01/mms/en#605267007' },
  icd6a02: { label: 'WHO ICD-11 MMS: 6A02 Autism spectrum disorder', url: 'https://icd.who.int/browse/2025-01/mms/en#437815624' },
  whoAutism: { label: 'WHO: Autism (fact sheet)', url: 'https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders' },
  mmwr2025: { label: 'CDC MMWR Surveillance Summaries 74(2), 2025: Prevalence and Early Identification of Autism Spectrum Disorder Among Children Aged 4 and 8 Years, ADDM Network, 16 Sites, 2022 (PMC12011386)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12011386/' },
  aaidd: { label: 'AAIDD: Defining Criteria for Intellectual Disability', url: 'https://www.aaidd.org/intellectual-disability/definition' },
  uu8: { label: 'JDIH BPK: UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (status Berlaku)', url: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016' },
  panduan: { label: 'Kemendikbudristek (2021): Panduan Pelaksanaan Pendidikan Inklusif (PDF)', url: 'https://repositori.kemendikdasmen.go.id/24970/1/Panduan_Inklusif.pdf' },
  dapodik: { label: 'Kemendikdasmen, Data Referensi: Keterangan Peserta Didik Berkebutuhan Khusus', url: 'https://referensi.data.kemendikdasmen.go.id/berkebutuhan_khusus/keterangan' },
  ayosehat: { label: 'Kemenkes (Ayo Sehat): Autisme', url: 'https://ayosehat.kemkes.go.id/topik-penyakit/pola-asuh-dan-perkembangan-anak/autisme' },
};
const NOTE = 'Sumber resmi diperiksa pada 11 Oktober 2026 dari teks asli setiap halaman. Status UU 8/2016 dicek di JDIH BPK (Berlaku). Ringkasan ini membantu orang tua dan guru memahami istilah, tetapi tidak dapat dipakai untuk menetapkan diagnosis.';

const FAQ = [
  ['Apa perbedaan tunagrahita dan autis secara singkat?', 'Tunagrahita (istilah resmi sekarang: disabilitas intelektual) berpusat pada keterbatasan kemampuan berpikir dan kemampuan adaptif sehari-hari. Autisme berpusat pada perbedaan komunikasi dan interaksi sosial, ditambah pola perilaku, minat, atau aktivitas yang terbatas dan berulang. Keduanya muncul sejak masa perkembangan, tetapi yang dinilai berbeda.'],
  ['Apakah anak autis pasti tunagrahita?', 'Tidak. WHO menyebut tingkat kemampuan intelektual orang autis sangat beragam, dari hambatan berat sampai di atas rata-rata. Data CDC tahun 2022 menunjukkan 39,6 persen anak autis usia 8 tahun yang punya data tes kognitif tergolong disabilitas intelektual, sedangkan 36,1 persen berada pada rentang rata-rata atau lebih tinggi.'],
  ['Apakah anak tunagrahita pasti autis?', 'Tidak. Banyak anak dengan disabilitas intelektual tetap senang berinteraksi, mencari teman, dan menikmati kebersamaan. Autisme baru dipertimbangkan bila ada pola khas pada komunikasi sosial serta perilaku yang terbatas dan berulang, dan penilaiannya dilakukan oleh profesional.'],
  ['Bisakah seorang anak mengalami tunagrahita dan autis sekaligus?', 'Bisa. Klasifikasi WHO ICD-11 bahkan punya kode autisme dengan dan tanpa gangguan perkembangan intelektual. UU 8/2016 juga menyebut ragam disabilitas dapat dialami secara tunggal, ganda, atau multi. Karena itu, penilaian yang baik memeriksa kedua sisi, bukan memilih salah satu.'],
  ['Mengapa tunagrahita dan autisme sering tertukar?', 'Pada anak kecil, keduanya bisa tampak serupa: bicara terlambat, belum mengikuti instruksi, atau tertinggal dari teman sebaya. Perbedaannya baru terlihat saat dicermati apa yang paling menghambat anak, apakah pemahaman dan kemandirian secara umum, atau cara anak berkomunikasi dan berhubungan dengan orang lain.'],
  ['Apakah tes IQ cukup untuk membedakan tunagrahita dan autisme?', 'Tidak. Tes IQ membantu menilai fungsi intelektual, tetapi APA menegaskan tingkat keparahan disabilitas intelektual ditentukan dari fungsi adaptif, bukan skor IQ saja. Autisme dinilai lewat pengamatan perilaku, riwayat perkembangan, dan wawancara, bukan lewat skor IQ.'],
  ['Istilah mana yang sebaiknya dipakai: tunagrahita, disabilitas intelektual, atau retardasi mental?', 'UU 8/2016 memakai penyandang disabilitas intelektual. Di sekolah, tunagrahita dan hambatan intelektual masih dipakai dalam data dan panduan Kemendikbudristek. Retardasi mental adalah istilah lama yang sudah diganti di DSM-5 dan sebaiknya tidak dipakai lagi. Untuk autisme, sebut anak autis atau anak dengan autisme, sesuai pilihan keluarga.'],
  ['Ke mana orang tua sebaiknya memeriksakan anak?', 'Mulailah dari dokter anak atau puskesmas untuk pemantauan tumbuh kembang. Bila perlu, dokter akan merujuk ke dokter spesialis anak konsultan tumbuh kembang, psikiater anak, atau psikolog klinis untuk asesmen. Sekolah dapat membantu dengan catatan pengamatan, tetapi guru tidak menetapkan diagnosis.'],
  ['Apakah layanan sekolah untuk tunagrahita dan autisme berbeda?', 'Sering berbeda penekanannya. Anak dengan hambatan intelektual biasanya membutuhkan penyesuaian tujuan dan materi belajar. Anak autis sering membutuhkan dukungan komunikasi, jadwal yang terduga, dan penyesuaian sensorik. Anak yang mengalami keduanya membutuhkan gabungan dukungan tersebut, disusun dari hasil asesmen.'],
].map(([q, a]) => ({ q, a }));

const a = {
  slug: 'perbedaan-tunagrahita-dan-autis',
  titleTag: 'Perbedaan Tunagrahita dan Autis Menurut DSM-5 & ICD-11 | YUKA',
  metaDesc: 'Perbedaan tunagrahita dan autis menurut DSM-5-TR, ICD-11, dan UU 8/2016, plus fakta bahwa keduanya bisa terjadi bersamaan. Baca panduan untuk orang tua.',
  keywords: 'perbedaan tunagrahita dan autis, perbedaan disabilitas intelektual dan autisme, tunagrahita dan autisme, apakah autis termasuk tunagrahita, ciri tunagrahita dan autis',
  ogTitle: 'Perbedaan Tunagrahita dan Autis: Panduan Orang Tua dan Guru',
  ogDesc: 'Apa yang membedakan tunagrahita (disabilitas intelektual) dan autisme, mengapa keduanya bisa terjadi bersamaan, dan kapan perlu asesmen profesional.',
  datePublished: '2026-10-11T09:00:00+07:00',
  dateModified: '2026-10-11T09:00:00+07:00',
  dateDisplay: '11 Oktober 2026',
  readTime: '12 menit baca',
  category: 'Pendidikan',
  h1: 'Perbedaan Tunagrahita dan Autis: Pengertian, Ciri, dan Mengapa Bisa Terjadi Bersamaan',
  crumb: 'Perbedaan Tunagrahita dan Autis',
  parent: { href: 'tunagrahita-adalah', name: 'Tunagrahita' },
  about: ['Disabilitas intelektual', 'Gangguan spektrum autisme', 'Pendidikan anak berkebutuhan khusus'],
  image: {
    file: 'Dokumentasi/artikel/floor-time-terapi-aktivitas-di-lantai.webp',
    w: 936, h: 702,
    alt: 'Seseorang duduk di lantai memeras jeruk ke dalam teko plastik, di depannya mangkuk berisi dua buah jeruk',
    caption: 'Kegiatan praktik keterampilan sehari-hari di YUKA: memeras jeruk sambil duduk di lantai.' + PHOTO_NOTE,
    credit: CREDIT,
  },
  tags: ['tunagrahita', 'autisme', 'disabilitas intelektual', 'anak berkebutuhan khusus', 'pendidikan inklusi'],
  sourcesCheckedNote: NOTE,
  sources: [SRC.apaId, SRC.apaIdSheet, SRC.apaAsd, SRC.apaAsdSheet, SRC.icd6a00, SRC.icd6a02, SRC.whoAutism, SRC.mmwr2025, SRC.aaidd, SRC.uu8, SRC.panduan, SRC.dapodik, SRC.ayosehat],
  related: [
    { href: 'tunagrahita-adalah', title: 'Tunagrahita Adalah: Klasifikasi, Ciri, dan Pendidikan yang Tepat', desc: 'Panduan utama tentang tunagrahita atau disabilitas intelektual.' },
    { href: 'autisme-adalah', title: 'Autisme Adalah: Pengertian, Ciri, dan Penanganan', desc: 'Panduan utama tentang gangguan spektrum autisme.' },
    { href: 'apakah-gdd-sama-dengan-autis', title: 'Apakah GDD Sama dengan Autis?', desc: 'Beda keterlambatan perkembangan umum dan autisme pada anak kecil.' },
    { href: 'perbedaan-adhd-dan-autis-pada-anak', title: 'Perbedaan ADHD dan Autis pada Anak', desc: 'Dua kondisi lain yang juga sering tertukar.' },
  ],
  faq: FAQ,
  bodyHtml: '',
};

a.bodyHtml = `
<div class="jawaban-singkat" style="background:#F8F9FF;border-left:4px solid #2B3A67;padding:1rem 1.25rem;border-radius:0 10px 10px 0;margin:1.5rem 0;"><strong>Jawaban singkat:</strong> tunagrahita, yang kini secara resmi disebut <strong>disabilitas intelektual</strong>, adalah keterbatasan pada kemampuan berpikir dan kemampuan menjalani kegiatan sehari-hari secara mandiri. <strong>Autisme</strong> adalah perbedaan perkembangan pada cara anak berkomunikasi dan berinteraksi, disertai pola perilaku atau minat yang terbatas dan berulang. Keduanya berbeda, tetapi <strong>bisa terjadi bersamaan pada satu anak</strong>. Hanya tenaga profesional berizin yang dapat menetapkan diagnosis, dan artikel ini bukan alat untuk mendiagnosis sendiri.</div>
${toc([
    ['istilah', 'Dulu dan sekarang: istilah yang dipakai'],
    ['tunagrahita', 'Apa itu tunagrahita atau disabilitas intelektual'],
    ['autisme', 'Apa itu autisme'],
    ['tabel', 'Tabel perbedaan tunagrahita dan autis'],
    ['tertukar', 'Mengapa keduanya sering tertukar'],
    ['bersamaan', 'Bisa terjadi bersamaan: apa kata data'],
    ['asesmen', 'Bagaimana profesional membedakannya'],
    ['sekolah', 'Dampaknya pada layanan belajar'],
    ['orang-tua', 'Langkah untuk orang tua dan guru'],
    ['faq', 'Pertanyaan yang sering diajukan'],
  ])}
${P(`Banyak orang tua datang ke YUKA dengan pertanyaan yang sama: anak saya tunagrahita atau autis? Pertanyaan ini wajar. Di lingkungan sekitar, dua istilah itu sering dipakai bergantian, padahal maknanya berbeda. Ada juga yang mengira autisme selalu berarti kecerdasan rendah, atau sebaliknya, setiap anak yang lambat belajar pasti autis. Kedua anggapan itu keliru.`)}
${P(`Artikel ini menjelaskan perbedaan keduanya dengan bahasa sederhana, merujuk pada sumber resmi: buku pedoman diagnosis psikiatri Amerika (DSM-5-TR) melalui penjelasan American Psychiatric Association, klasifikasi penyakit WHO (ICD-11), data surveilans CDC, Undang-Undang Penyandang Disabilitas, serta panduan pendidikan inklusif Kemendikbudristek. Tujuannya membantu Anda memahami istilah dan tahu kapan perlu meminta asesmen, bukan menggantikan pemeriksaan.`)}

${H2('istilah', 'Dulu dan sekarang: istilah yang dipakai')}
${P(`Sebelum membahas perbedaannya, ada baiknya kita sepakat soal istilah. Bahasa yang kita pakai memengaruhi cara orang memandang anak. Istilah yang tepat juga memudahkan orang tua berbicara dengan dokter, psikolog, dan sekolah.`)}
${P(`<strong>Tunagrahita</strong> adalah istilah pendidikan yang sudah lama dipakai di Indonesia. ${X(SRC.panduan.url, 'Panduan Pelaksanaan Pendidikan Inklusif Kemendikbudristek (2021)')} mencatat bahwa regulasi pendidikan menyebut penyandang disabilitas intelektual dengan istilah tunagrahita, dan di bagian lain panduan itu memakai frasa <em>peserta didik berkebutuhan khusus dengan hambatan intelektual</em>. Data pendidikan nasional pun masih memakai istilah ini: ${X(SRC.dapodik.url, 'referensi Dapodik Kemendikdasmen')} memiliki kategori terpisah untuk "Tuna Grahita Ringan", "Tuna Grahita Sedang", dan "Autis".`)}
${P(`Dalam hukum, ${X(SRC.uu8.url, 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')} memakai istilah <strong>penyandang disabilitas intelektual</strong>. Penjelasan Pasal 4 menyebutnya sebagai "terganggunya fungsi pikir karena tingkat kecerdasan di bawah rata-rata, antara lain lambat belajar, disabilitas grahita dan down syndrom". Undang-undang ini berstatus berlaku menurut JDIH BPK.`)}
${P(`Dalam dunia medis, ${X(SRC.apaIdSheet.url, 'American Psychiatric Association')} menjelaskan bahwa DSM-5 memakai istilah <em>intellectual disability (intellectual developmental disorder)</em> untuk menggantikan istilah lama <em>mental retardation</em> atau retardasi mental. ICD-11 milik WHO memakai nama <em>disorders of intellectual development</em>. Istilah retardasi mental sebaiknya tidak dipakai lagi karena terdengar merendahkan dan sudah ditinggalkan oleh pedoman resmi.`)}
${P(`Untuk autisme, UU 8/2016 menempatkannya di bawah <strong>disabilitas mental</strong>, tepatnya "disabilitas perkembangan yang berpengaruh pada kemampuan interaksi sosial di antaranya autis dan hiperaktif". Jadi, di mata hukum Indonesia pun, disabilitas intelektual dan autisme adalah dua ragam disabilitas yang berbeda.`)}
<table><thead><tr><th>Konteks</th><th>Istilah untuk tunagrahita</th><th>Istilah untuk autisme</th></tr></thead><tbody>
<tr><td>Hukum (UU 8/2016)</td><td>Penyandang disabilitas intelektual</td><td>Disabilitas mental, kelompok disabilitas perkembangan (autis)</td></tr>
<tr><td>Pendidikan (Kemendikbudristek, Dapodik)</td><td>Tunagrahita, hambatan intelektual</td><td>Autis, autisme</td></tr>
<tr><td>Medis (DSM-5-TR)</td><td>Intellectual disability (intellectual developmental disorder)</td><td>Autism spectrum disorder (gangguan spektrum autisme)</td></tr>
<tr><td>Medis (WHO ICD-11)</td><td>Disorders of intellectual development, kode 6A00</td><td>Autism spectrum disorder, kode 6A02</td></tr>
<tr><td>Istilah lama yang sebaiknya dihindari</td><td>Retardasi mental, idiot, "anak bodoh"</td><td>"Anak yang hidup di dunianya sendiri" sebagai label</td></tr>
</tbody></table>
${P(`Di artikel ini kami memakai "tunagrahita" dan "disabilitas intelektual" secara bergantian karena keduanya dikenal pembaca. Kami juga memakai "anak autis" atau "anak dengan autisme". Sebagian keluarga lebih nyaman dengan salah satunya, dan pilihan keluarga perlu dihormati.`)}

${H2('tunagrahita', 'Apa itu tunagrahita atau disabilitas intelektual')}
${P(`${X(SRC.apaId.url, 'American Psychiatric Association')} menjelaskan disabilitas intelektual sebagai kondisi perkembangan saraf yang memengaruhi dua area: <strong>fungsi kognitif</strong>, seperti belajar, memecahkan masalah, dan menilai sesuatu, serta <strong>fungsi adaptif</strong>, yaitu kemampuan menjalani kegiatan sehari-hari seperti berkomunikasi dan ikut serta dalam kehidupan sosial. Hambatan ini dimulai pada masa perkembangan, umumnya sebelum usia 18 tahun untuk keperluan diagnosis. ${X(SRC.aaidd.url, 'AAIDD')}, asosiasi profesional di bidang ini, memakai batas usia 22 tahun.`)}
${P(`Fungsi adaptif dibagi menjadi tiga ranah. Menurut ${X(SRC.apaIdSheet.url, 'lembar fakta DSM-5 dari APA')}, ranah <strong>konseptual</strong> mencakup bahasa, membaca, menulis, berhitung, bernalar, dan mengingat. Ranah <strong>sosial</strong> mencakup empati, penilaian sosial, kemampuan berkomunikasi, serta menjalin dan mempertahankan pertemanan. Ranah <strong>praktis</strong> mencakup merawat diri, mengelola uang, rekreasi, dan mengatur tugas sekolah atau pekerjaan.`)}
${P(`Satu hal penting: tingkat keparahan disabilitas intelektual tidak ditentukan oleh skor IQ semata. APA menegaskan bahwa DSM-5 menilai keparahan dari fungsi adaptif, walau tes kecerdasan tetap dipakai. Secara umum, disabilitas intelektual berada sekitar dua simpangan baku atau lebih di bawah rata-rata populasi, setara skor IQ sekitar 70 atau lebih rendah. ${X(SRC.icd6a00.url, 'ICD-11 (kode 6A00)')} memakai patokan yang sama, yaitu fungsi intelektual dan perilaku adaptif kira-kira di bawah persentil 2,3, diukur dengan tes standar yang dilakukan secara perorangan. ICD-11 membagi tingkatnya menjadi ringan, sedang, berat, dan sangat berat. Penjelasan rinci tentang tingkat ini ada di artikel ${L('tunagrahita-ringan-sedang-berat-perbedaan', 'tunagrahita ringan, sedang, dan berat')}.`)}
${P(`Dalam kehidupan sehari-hari, anak dengan disabilitas intelektual mungkin butuh waktu lebih lama untuk memahami konsep baru, mengikuti instruksi bertahap, atau mengerjakan tugas mandiri seperti berpakaian dan berbelanja. Namun banyak di antara mereka yang ramah, senang bergaul, dan bisa belajar banyak hal dengan dukungan yang tepat. Gambaran umum dan pendidikan yang sesuai dibahas di ${L('tunagrahita-adalah', 'panduan tunagrahita')} dan ${L('disabilitas-intelektual', 'disabilitas intelektual: pengertian, dukungan, dan hak')}.`)}
${fig('Dokumentasi/artikel/strategi-mengajar-anak-autis-di-kelas-materi.webp', 'Seseorang berkaus merah duduk menghadap meja lipat berisi mushaf terbuka, buku tulis, dan pena', 'Kegiatan belajar di meja lipat di ruang belajar YUKA. Materi dan cara belajar disesuaikan dengan kebutuhan tiap peserta.' + PHOTO_NOTE, 900, 440)}

${H2('autisme', 'Apa itu autisme')}
${P(`${X(SRC.ayosehat.url, 'Kemenkes melalui laman Ayo Sehat')} menjelaskan autisme sebagai gangguan perkembangan neurologis yang memengaruhi interaksi sosial, komunikasi, dan perilaku. ${X(SRC.apaAsd.url, 'American Psychiatric Association')} menggambarkan gangguan spektrum autisme sebagai kondisi perkembangan yang kompleks, dengan tantangan menetap pada komunikasi sosial, minat yang terbatas, dan perilaku berulang. Kebutuhan dukungannya berbeda-beda pada setiap orang.`)}
${P(`${X(SRC.icd6a02.url, 'ICD-11 (kode 6A02)')} merumuskan dua kelompok ciri utama. Pertama, kesulitan yang menetap dalam memulai dan mempertahankan interaksi sosial timbal balik serta komunikasi sosial. Kedua, pola perilaku, minat, atau aktivitas yang terbatas, berulang, dan kaku, yang jelas tidak lazim untuk usia dan konteks budaya anak. Gejala muncul pada masa perkembangan, biasanya di masa kanak-kanak awal, tetapi bisa baru tampak jelas ketika tuntutan sosial melebihi kemampuan anak. ${X(SRC.apaAsdSheet.url, 'Lembar fakta DSM-5 tentang autisme')} juga menyebut hal serupa: gejala harus ada sejak masa kanak-kanak awal walau mungkin baru dikenali belakangan.`)}
${P(`Bagian yang paling relevan dengan pembahasan kita: ICD-11 menyatakan bahwa orang di spektrum autisme menunjukkan <strong>seluruh rentang kemampuan intelektual dan bahasa</strong>. ${X(SRC.whoAutism.url, 'WHO')} menegaskan hal yang sama dalam lembar faktanya, bahwa tingkat fungsi intelektual orang autis sangat beragam, mulai dari hambatan berat sampai tingkat di atas rata-rata. Artinya, autisme bukan ukuran kecerdasan.`)}
${P(`Dalam keseharian, anak autis mungkin jarang menatap mata atau menunjuk untuk berbagi perhatian, sulit memahami giliran bicara, sangat terikat pada rutinitas, atau sangat peka terhadap suara, cahaya, dan tekstur. Panduan inklusif Kemendikbudristek juga menyebut kesulitan berkomunikasi, mengulang kata, dan kesulitan bersosialisasi sebagai pola yang sering tampak di sekolah. Penjelasan lengkap ada di ${L('autisme-adalah', 'panduan autisme')} dan ${L('apa-itu-autisme-level-1-2-3', 'tingkat dukungan autisme level 1, 2, dan 3')}.`)}

${H2('tabel', 'Tabel perbedaan tunagrahita dan autis')}
${P(`Tabel berikut merangkum perbedaan utama menurut sumber resmi di atas. Gunakan sebagai bahan memahami istilah, bukan daftar periksa untuk menilai anak sendiri.`)}
<table><thead><tr><th>Aspek</th><th>Tunagrahita (disabilitas intelektual)</th><th>Autisme (gangguan spektrum autisme)</th></tr></thead><tbody>
<tr><td>Inti kondisi</td><td>Keterbatasan fungsi intelektual dan fungsi adaptif</td><td>Perbedaan komunikasi dan interaksi sosial, plus perilaku atau minat terbatas dan berulang</td></tr>
<tr><td>Kemampuan intelektual</td><td>Di bawah rata-rata, sekitar dua simpangan baku atau lebih di bawah rata-rata populasi</td><td>Sangat beragam, dari hambatan berat sampai di atas rata-rata</td></tr>
<tr><td>Interaksi sosial</td><td>Minat bergaul umumnya ada; kesulitan sosial lebih terkait pemahaman situasi</td><td>Kesulitan khas dalam interaksi timbal balik, isyarat nonverbal, dan menjalin hubungan</td></tr>
<tr><td>Pola perilaku berulang dan minat terbatas</td><td>Bukan ciri utama</td><td>Ciri utama yang wajib ada untuk diagnosis</td></tr>
<tr><td>Kepekaan sensorik</td><td>Bukan ciri utama</td><td>Sering ada, misalnya terlalu peka atau kurang peka terhadap suara dan sentuhan</td></tr>
<tr><td>Cara menilai keparahan</td><td>Dari fungsi adaptif pada ranah konseptual, sosial, dan praktis</td><td>Dari tingkat dukungan yang dibutuhkan pada komunikasi sosial dan perilaku</td></tr>
<tr><td>Kode WHO ICD-11</td><td>6A00</td><td>6A02, dengan subkode tersendiri untuk autisme dengan atau tanpa gangguan perkembangan intelektual</td></tr>
<tr><td>Ragam disabilitas menurut UU 8/2016</td><td>Disabilitas intelektual</td><td>Disabilitas mental (disabilitas perkembangan)</td></tr>
<tr><td>Penekanan dukungan belajar</td><td>Penyesuaian tujuan, materi, dan langkah belajar; keterampilan hidup sehari-hari</td><td>Dukungan komunikasi, jadwal yang terduga, penyesuaian sensorik, dan latihan sosial</td></tr>
</tbody></table>
${P(`Perhatikan baris kedua dan ketiga. Di situlah inti perbedaannya. Pada tunagrahita, hambatan utama ada pada kemampuan berpikir dan kemandirian secara umum. Pada autisme, hambatan utama ada pada cara anak berkomunikasi dan berhubungan dengan orang lain, terlepas dari tingkat kecerdasannya.`)}
${fig('Dokumentasi/artikel/cara-melatih-anak-speech-delay-bicara-buku-bergambar.webp', 'Dua orang duduk di lantai menghadap meja lipat, satu menulis di kertas dan satu membuka buku bersampul hijau', 'Belajar dengan buku dan kertas kerja di atas meja lipat. Pendamping memperhatikan cara tiap anak memahami tugas sebelum menyesuaikan langkahnya.' + PHOTO_NOTE, 620, 400)}

${H2('tertukar', 'Mengapa keduanya sering tertukar')}
${P(`Ada beberapa alasan mengapa orang tua, bahkan guru, sering sulit membedakan keduanya.`)}
${ul([
    '<strong>Tanda awal yang mirip.</strong> Pada usia balita, bicara terlambat, belum merespons instruksi, atau tertinggal dari teman sebaya bisa muncul pada keduanya. Tanda ini juga bisa muncul pada keterlambatan perkembangan umum, seperti dibahas di ' + L('apakah-gdd-sama-dengan-autis', 'apakah GDD sama dengan autis') + '.',
    '<strong>Kesulitan sosial ada pada keduanya, tetapi berbeda sumbernya.</strong> Anak dengan disabilitas intelektual bisa kesulitan memahami aturan main atau lelucon karena pemahaman umumnya terbatas. Anak autis bisa paham aturannya tetapi kesulitan membaca isyarat sosial dan menjalin interaksi timbal balik.',
    '<strong>Keduanya bisa terjadi bersamaan.</strong> Ketika satu anak mengalami keduanya, ciri-cirinya bercampur dan sulit dipisahkan tanpa asesmen menyeluruh.',
    '<strong>Tes yang tidak sesuai.</strong> Anak autis yang belum bisa bicara atau sulit mengikuti instruksi tes bisa mendapat skor rendah, padahal kemampuan sebenarnya belum terukur. Karena itu pemilihan alat tes dan cara pengujian perlu disesuaikan oleh profesional.',
    '<strong>Penggunaan istilah sehari-hari.</strong> Kata "autis" kadang dipakai sembarangan untuk menyebut siapa saja yang pendiam atau asyik sendiri. Pemakaian seperti ini mengaburkan arti sebenarnya.',
  ])}
${P(`Karena alasan-alasan itu, jangan mengandalkan satu ciri saja. Seorang anak yang belum bisa bicara pada usia tiga tahun bisa autis, bisa mengalami disabilitas intelektual, bisa mengalami keduanya, atau bisa mengalami hal lain seperti gangguan pendengaran atau keterlambatan bicara. Yang membedakan adalah gambaran keseluruhan, dan gambaran itu hanya bisa disusun lewat asesmen.`)}

${H2('bersamaan', 'Bisa terjadi bersamaan: apa kata data')}
${P(`Pertanyaan "tunagrahita atau autis?" sering kali kurang tepat, karena jawabannya bisa "keduanya". ${X(SRC.apaIdSheet.url, 'APA')} mencatat bahwa disabilitas intelektual sering muncul bersama kondisi lain, termasuk ADHD dan gangguan spektrum autisme. Sebaliknya, ${X(SRC.apaAsd.url, 'APA')} juga menyebut anak autis lebih mungkin mengalami disabilitas intelektual dibanding anak yang tidak autis.`)}
${P(`Data paling baru datang dari ${X(SRC.mmwr2025.url, 'laporan surveilans CDC yang terbit tahun 2025')}. Jaringan pemantauan autisme CDC memeriksa catatan anak usia 8 tahun di 16 wilayah Amerika Serikat pada tahun 2022 dan menemukan prevalensi autisme sekitar 1 dari 31 anak. Dari 5.292 anak autis yang memiliki data tes kognitif, hasilnya terbagi seperti tabel berikut.`)}
<table><thead><tr><th>Kelompok kemampuan kognitif (anak autis usia 8 tahun, data 2022)</th><th>Persentase</th></tr></thead><tbody>
<tr><td>Tergolong disabilitas intelektual (IQ 70 atau lebih rendah)</td><td>39,6%</td></tr>
<tr><td>Rentang batas (IQ 71 sampai 85)</td><td>24,2%</td></tr>
<tr><td>Rentang rata-rata atau lebih tinggi (IQ di atas 85)</td><td>36,1%</td></tr>
</tbody></table>
${P(`Angka ini menunjukkan dua hal sekaligus. Pertama, cukup banyak anak autis yang juga mengalami disabilitas intelektual, sekitar 4 dari 10 dalam data tersebut. Kedua, lebih banyak lagi yang tidak, karena sekitar 6 dari 10 berada di rentang batas atau rata-rata ke atas. Data ini berasal dari Amerika Serikat dan tidak bisa langsung dipakai untuk menggambarkan anak di Indonesia, tetapi cukup jelas untuk mematahkan anggapan bahwa autisme selalu berarti kecerdasan rendah.`)}
${P(`Klasifikasi ${X(SRC.icd6a02.url, 'WHO ICD-11')} juga mencerminkan kenyataan ini. Kode autisme dibagi menurut ada tidaknya gangguan perkembangan intelektual dan menurut kemampuan bahasa fungsional, misalnya "autisme tanpa gangguan perkembangan intelektual dengan hambatan bahasa ringan atau tanpa hambatan" dan "autisme dengan gangguan perkembangan intelektual dan hambatan bahasa fungsional". Dengan kata lain, sejak awal pedoman WHO menganggap keduanya perlu dinilai terpisah.`)}
${P(`Hukum Indonesia sejalan dengan ini. ${X(SRC.uu8.url, 'Pasal 4 ayat (2) UU 8/2016')} menyatakan ragam disabilitas "dapat dialami secara tunggal, ganda, atau multi dalam jangka waktu lama yang ditetapkan oleh tenaga medis". Anak yang mengalami disabilitas intelektual sekaligus autisme berhak atas dukungan untuk kedua kebutuhannya.`)}
${fig('Dokumentasi/artikel/apa-itu-autisme-level-1-2-3-kegiatan-tangan.webp', 'Dua tangan menekan adonan berwarna oranye di atas alas silikon biru, di sebelahnya alas lain berisi adonan', 'Kegiatan membentuk adonan di kelas memasak YUKA. Kegiatan tangan seperti ini melatih keterampilan motorik dan kemandirian.' + PHOTO_NOTE, 536, 324)}

${H2('asesmen', 'Bagaimana profesional membedakannya')}
${P(`Membedakan tunagrahita dan autisme adalah pekerjaan tim profesional, bukan hasil satu tes atau satu kunjungan. Secara umum, ada beberapa hal yang dinilai.`)}
${H3('Riwayat perkembangan')}
${P(`Profesional akan menanyakan kapan anak mulai tengkurap, berjalan, mengoceh, dan berbicara, serta bagaimana anak berinteraksi sejak bayi. Apakah anak menoleh saat dipanggil, menunjuk untuk menunjukkan sesuatu, atau membalas senyum? Catatan seperti ini membantu membedakan keterlambatan yang merata di semua area dari pola khas pada komunikasi sosial.`)}
${H3('Pengamatan perilaku dan komunikasi sosial')}
${P(`Autisme dinilai dari pengamatan langsung dan wawancara terstruktur tentang komunikasi sosial serta perilaku berulang. ${X(SRC.apaAsd.url, 'APA')} menyebut tanda awal autisme sering pertama kali dilihat oleh orang tua. Profesional lalu mencocokkannya dengan kriteria DSM-5-TR atau ICD-11.`)}
${H3('Tes kecerdasan dan fungsi adaptif')}
${P(`Disabilitas intelektual dinilai dengan dua alat sekaligus. ${X(SRC.apaIdSheet.url, 'APA')} menekankan perlunya penilaian klinis dan tes kecerdasan standar, dengan tingkat keparahan ditentukan dari fungsi adaptif. ${X(SRC.icd6a00.url, 'ICD-11')} menambahkan bahwa bila tes yang terstandar dan sesuai norma tidak tersedia, diagnosis lebih mengandalkan penilaian klinis atas perilaku yang sebanding. Pada anak autis, pemilihan dan cara pemberian tes perlu disesuaikan supaya hasilnya mencerminkan kemampuan sebenarnya.`)}
${H3('Pemeriksaan penyebab lain')}
${P(`Dokter juga akan memastikan tidak ada kondisi lain yang menjelaskan gejalanya, misalnya gangguan pendengaran, gangguan penglihatan, kondisi genetik, atau keterlambatan bicara murni. Inilah alasan mengapa langkah pertama sebaiknya ke dokter anak, bukan langsung ke terapi.`)}
${P(`Siapa yang berwenang? Di Indonesia, diagnosis ditetapkan oleh tenaga medis atau tenaga kesehatan berizin, seperti dokter spesialis anak (terutama konsultan tumbuh kembang), dokter spesialis kedokteran jiwa anak, dan psikolog klinis. Guru, terapis, dan pendamping sekolah sangat membantu dengan catatan pengamatan, tetapi tidak menetapkan diagnosis. Kuesioner atau daftar ciri di internet, termasuk tabel di artikel ini, hanya bahan untuk memulai percakapan dengan profesional. Untuk langkah awal pemantauan, baca juga ${L('identifikasi-dini-disabilitas-intelektual', 'identifikasi dini disabilitas intelektual')}.`)}

${H2('sekolah', 'Dampaknya pada layanan belajar')}
${P(`Mengetahui kebutuhan anak dengan tepat membantu sekolah menyusun dukungan yang sesuai. Perbedaannya terlihat dari penekanan layanan, walaupun prinsip dasarnya sama: setiap anak berhak belajar sesuai kemampuannya. Hak ini dijelaskan di ${L('hak-pendidikan-anak-disabilitas-intelektual', 'hak pendidikan anak disabilitas intelektual')}.`)}
<table><thead><tr><th>Kebutuhan</th><th>Penekanan untuk hambatan intelektual</th><th>Penekanan untuk autisme</th></tr></thead><tbody>
<tr><td>Tujuan belajar</td><td>Disederhanakan dan dipecah sesuai hasil asesmen, misalnya membedakan bentuk sebelum menghitung volume</td><td>Bisa mengikuti tujuan kelas bila kemampuan intelektual memadai, dengan penyesuaian cara penyampaian</td></tr>
<tr><td>Cara memberi instruksi</td><td>Kalimat pendek, contoh konkret, pengulangan</td><td>Instruksi visual, jadwal bergambar, pemberitahuan sebelum ada perubahan</td></tr>
<tr><td>Keterampilan yang dilatih</td><td>Keterampilan hidup sehari-hari dan kurikulum fungsional</td><td>Komunikasi, interaksi sosial, dan pengelolaan emosi</td></tr>
<tr><td>Lingkungan kelas</td><td>Tempat duduk dekat guru, materi bertahap</td><td>Pengaturan kebisingan, cahaya, dan sudut tenang</td></tr>
</tbody></table>
${P(`Contoh pada baris pertama diambil dari ${X(SRC.panduan.url, 'Panduan Pelaksanaan Pendidikan Inklusif')}: untuk peserta didik dengan hambatan intelektual yang belum mampu berhitung perkalian, indikator pelajaran bangun ruang bisa diubah dari menghitung volume tabung menjadi membedakan tabung dan kubus. Untuk anak yang mengalami keduanya, sekolah menggabungkan penyesuaian di kedua kolom. Ide penerapannya bisa dilihat di ${L('kurikulum-fungsional-untuk-anak-tunagrahita', 'kurikulum fungsional untuk anak tunagrahita')}, ${L('strategi-mengajar-anak-autis-di-kelas', 'strategi mengajar anak autis di kelas')}, dan ${L('cara-membuat-jadwal-visual-untuk-anak-autis', 'cara membuat jadwal visual')}.`)}
${fig('Dokumentasi/artikel/strategi-mengajar-anak-autis-di-kelas-meja-kerja.webp', 'Seseorang berbaju merah muda duduk di lantai merangkai manik-manik di atas meja lipat, di depannya tumpukan buku dan alat tulis', 'Kegiatan merangkai manik-manik di ruang belajar YUKA. Tugas yang bertahap dan jelas urutannya membantu peserta menyelesaikan pekerjaan secara mandiri.' + PHOTO_NOTE, 760, 475)}

${H2('orang-tua', 'Langkah untuk orang tua dan guru')}
${P(`Bila Anda melihat tanda yang membuat khawatir, berikut langkah yang bisa dilakukan sambil menunggu atau menjalani asesmen.`)}
${ul([
    '<strong>Catat pengamatan secara konkret.</strong> Tulis apa yang dilakukan anak, kapan, dan di mana. Misalnya "belum menoleh saat dipanggil di rumah dan di sekolah" lebih membantu daripada "anak saya cuek".',
    '<strong>Mulai dari dokter anak atau puskesmas.</strong> Minta pemantauan tumbuh kembang dan rujukan bila diperlukan. Jangan menunda hanya karena khawatir dengan label.',
    '<strong>Tanyakan kedua kemungkinan.</strong> Saat asesmen, tanyakan apakah kemampuan intelektual dan ciri autisme sama-sama sudah dinilai.',
    '<strong>Fokus pada kebutuhan, bukan label.</strong> Diagnosis membantu membuka akses layanan, tetapi rencana belajar disusun dari kekuatan dan kebutuhan anak sehari-hari.',
    '<strong>Mulai dukungan sedini mungkin.</strong> Dukungan tidak harus menunggu diagnosis final. Baca ' + L('intervensi-dini', 'intervensi dini') + ' untuk gambaran langkah awal.',
    '<strong>Jaga diri orang tua.</strong> Mendampingi anak dengan kebutuhan khusus menguras tenaga. Artikel ' + L('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak berkebutuhan khusus') + ' berisi langkah praktis.',
  ])}
${P(`Bagi guru, gunakan bahasa yang menghormati saat berbicara dengan orang tua. Sampaikan pengamatan, bukan dugaan diagnosis. Kalimat seperti "kami melihat ananda kesulitan mengikuti instruksi lebih dari dua langkah, apakah di rumah juga begitu?" membuka percakapan. Kalimat seperti "anak Ibu sepertinya autis" bisa melukai dan belum tentu benar.`)}
${P(`YUKA mendampingi anak berkebutuhan khusus melalui ${L('pendidikan-inklusi', 'pendidikan inklusi')} di Sekolah Inklusi Taruna Imani. Bila Anda berada di sekitar Yogyakarta dan ingin berdiskusi, lihat informasi ${L('../sekolah-autis-yogyakarta', 'layanan pendidikan untuk anak autis di Yogyakarta')} atau ${L('../kontak', 'hubungi tim YUKA')}. Kami tidak menetapkan diagnosis, tetapi bisa membantu Anda memahami langkah berikutnya.`)}
${P(`Kesimpulannya, tunagrahita dan autisme adalah dua kondisi berbeda dengan inti yang berbeda: yang satu soal kemampuan berpikir dan kemandirian, yang lain soal komunikasi sosial dan pola perilaku. Keduanya bisa berdiri sendiri dan bisa juga hadir bersamaan. Yang terpenting bukan menebak labelnya, melainkan memastikan anak dinilai oleh profesional yang tepat dan mendapat dukungan sesuai kebutuhannya.`)}
${faqBlock(FAQ)}
`;

const html = renderArticlePage(a);
const out = path.join(OUT, `${a.slug}.html`);
fs.writeFileSync(out, html);
console.log(`WROTE ${out} ${html.length} bytes`);

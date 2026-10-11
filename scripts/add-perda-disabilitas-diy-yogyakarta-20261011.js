'use strict';
// Generator artikel: Perda disabilitas DIY Yogyakarta (Trello 1zhAPDUR, tayang 2026-10-11).
// Semua pasal dikutip dari salinan resmi di JDIH BPK, status berlaku dicek 11 Oktober 2026.
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'perda-disabilitas-diy-yogyakarta';
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
const a = (href, text) => `<a href="${href}">${text}</a>`;
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const BPK = {
  perda5: 'https://peraturan.bpk.go.id/Details/228979/perda-no-5-tahun-2022',
  perda4: 'https://peraturan.bpk.go.id/Details/25643/perda-prov-diy-no-4-tahun-2012',
  perda3: 'https://peraturan.bpk.go.id/Details/231688/perda-no-3-tahun-2022',
  pergub87: 'https://peraturan.bpk.go.id/Details/311049/pergub-prov-diy-no-87-tahun-2024',
  pergub7: 'https://peraturan.bpk.go.id/Details/314838/pergub-prov-diy-no-7-tahun-2025',
  pergub21: 'https://peraturan.bpk.go.id/Details/21464/pergub-prov-diy-no-21-tahun-2013',
  uu8: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016',
};

const hero = image(
  'Dokumentasi/21-jan-2026-spanduk-student-day-sekolah-inklusi-011.webp',
  'Spanduk hijau Student Day Sekolah Inklusi Taruna Imani terpasang di dinding kayu, dengan rak sepatu di bawahnya',
  'Spanduk kegiatan Student Day di Sekolah Inklusi Taruna Imani, sekolah yang dikelola YUKA di Yogyakarta.'
);

const bodyImages = {
  papan: 'Dokumentasi/21-jan-2026-papan-nama-tarina-man-dekorasi-017.webp',
  tangan: 'Dokumentasi/artikel/empati-anak-berkebutuhan-khusus-tangan-bersama.webp',
  meja: 'Dokumentasi/artikel/cara-melatih-anak-speech-delay-bicara-buku-bergambar.webp',
  adonan: 'Dokumentasi/artikel/apa-itu-autisme-level-1-2-3-kegiatan-tangan.webp',
  mengaji: 'Dokumentasi/artikel/strategi-mengajar-anak-autis-di-kelas-materi.webp',
};

const faq = [
  {
    q: 'Apa nomor Perda disabilitas DIY yang berlaku sekarang?',
    a: 'Yang berlaku adalah Peraturan Daerah DIY Nomor 5 Tahun 2022 tentang Pelaksanaan Penghormatan, Pelindungan, dan Pemenuhan Hak Penyandang Disabilitas, ditetapkan dan diundangkan 20 Mei 2022. Pasal 108 Perda ini mencabut Perda DIY Nomor 4 Tahun 2012. Per pengecekan JDIH BPK tanggal 11 Oktober 2026, belum tercatat perubahan atas Perda 5/2022.',
  },
  {
    q: 'Apakah Perda DIY Nomor 4 Tahun 2012 masih bisa dijadikan rujukan?',
    a: 'Tidak sebagai dasar hukum yang berlaku. Pasal 108 Perda DIY 5/2022 menyatakan Perda 4/2012 dicabut dan dinyatakan tidak berlaku. Artikel atau dokumen lama yang masih mengutip Perda 4/2012 sebaiknya dibaca sebagai catatan sejarah, lalu dicocokkan dengan Perda 5/2022.',
  },
  {
    q: 'Apakah sekolah di DIY boleh menolak anak penyandang disabilitas?',
    a: 'Pasal 13 Perda DIY 5/2022 berbunyi: "Setiap lembaga pendidikan wajib menerima peserta didik Penyandang Disabilitas." Pasal 22 Pergub DIY 87/2024 mengatur sanksi administratif berupa teguran lisan dan/atau teguran tertulis bagi lembaga pendidikan yang melanggarnya. Bagaimana kewajiban ini diterapkan pada kasus tertentu tetap perlu dibicarakan dengan sekolah dan dinas pendidikan.',
  },
  {
    q: 'Apa aturan pelaksana Perda disabilitas DIY?',
    a: 'Aturan pelaksana utamanya adalah Pergub DIY Nomor 87 Tahun 2024, ditetapkan 11 Desember 2024. Pergub ini mengatur bantuan hukum, akomodasi yang layak untuk peserta didik penyandang disabilitas, jaminan kesehatan, penghargaan, dan sanksi administratif. Selain itu ada Pergub DIY 7/2025 tentang Rencana Aksi Daerah Penyandang Disabilitas 2024 sampai 2027.',
  },
  {
    q: 'Apa beda Perda DIY 5/2022 dan Perda DIY 3/2022?',
    a: 'Perda 5/2022 mengatur hak penyandang disabilitas secara umum di banyak aspek, termasuk pendidikan, kesehatan, dan pekerjaan. Perda 3/2022 khusus mengatur penyelenggaraan pendidikan bagi peserta didik penyandang disabilitas, yang memiliki potensi kecerdasan, dan/atau bakat istimewa, misalnya Unit Layanan Disabilitas Bidang Pendidikan dan penerimaan siswa di sekolah menengah inklusif.',
  },
  {
    q: 'Siapa yang bisa mendapat bantuan biaya pendidikan dari Pemda DIY?',
    a: 'Pasal 9 Pergub DIY 87/2024 menyebut syaratnya: berstatus peserta didik penyandang disabilitas, orang tua atau wali tidak mampu membiayai pendidikan, tercatat sebagai penduduk DIY yang dibuktikan dengan Kartu Keluarga atau KTP, dan tidak sedang menerima bantuan biaya pendidikan dari lembaga pemerintah lain. Kuota penerimanya ditentukan perangkat daerah di bidang pendidikan.',
  },
  {
    q: 'Apa itu Unit Layanan Disabilitas Bidang Pendidikan di DIY?',
    a: 'Menurut Pasal 15 Perda DIY 3/2022, unit ini dibentuk Pemda DIY dan berkedudukan di bawah perangkat daerah urusan pendidikan. Fungsinya antara lain meningkatkan kompetensi guru, menyediakan pendampingan bagi peserta didik, menyediakan media pembelajaran dan alat bantu, deteksi dini dan intervensi dini, serta layanan konsultasi.',
  },
  {
    q: 'Apakah artikel ini bisa dipakai sebagai nasihat hukum?',
    a: 'Tidak. Artikel ini adalah ringkasan informasi umum dari naskah peraturan yang dicek pada 11 Oktober 2026. Untuk kasus tertentu, misalnya sengketa penerimaan siswa atau pengajuan bantuan, konsultasikan dengan dinas terkait, organisasi penyandang disabilitas, atau lembaga bantuan hukum.',
  },
];

const faqHtml = `<div class="faq-list"><h2 id="faq">Pertanyaan yang Sering Diajukan</h2>${faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div>`;

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> Perda disabilitas DIY yang berlaku saat ini adalah Peraturan Daerah DIY Nomor 5 Tahun 2022 tentang Pelaksanaan Penghormatan, Pelindungan, dan Pemenuhan Hak Penyandang Disabilitas. Perda ini mencabut Perda DIY Nomor 4 Tahun 2012 dan dijalankan lewat Pergub DIY Nomor 87 Tahun 2024. Untuk urusan sekolah, ada juga Perda DIY Nomor 3 Tahun 2022 tentang penyelenggaraan pendidikan bagi peserta didik penyandang disabilitas. Di atas semuanya berdiri UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas.</p></div>',
  '<div class="info-box"><p><strong>Status peraturan dicek: 11 Oktober 2026.</strong> Nomor, tanggal, dan status setiap peraturan di artikel ini dicocokkan dengan database peraturan JDIH BPK, dan isi pasal dibaca dari salinan resmi yang diunduh dari sana. Artikel ini informasi umum, <strong>bukan nasihat hukum</strong>. Peraturan dapat berubah, jadi cek kembali statusnya sebelum dipakai untuk keperluan resmi.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#peraturan">Peraturan yang berlaku di DIY</a></li><li><a href="#perubahan">Dari Perda 4/2012 ke Perda 5/2022</a></li><li><a href="#hak">Hak penyandang disabilitas dalam Perda 5/2022</a></li><li><a href="#pendidikan">Aspek pendidikan dalam Perda 5/2022</a></li><li><a href="#pergub">Isi Pergub DIY 87/2024</a></li><li><a href="#perda3">Perda DIY 3/2022 tentang pendidikan</a></li><li><a href="#uu8">Hubungannya dengan UU 8/2016</a></li><li><a href="#orang-tua">Yang bisa dilakukan orang tua</a></li><li><a href="#batas">Hal yang tidak diatur atau perlu dicek</a></li><li><a href="#faq">Pertanyaan yang sering diajukan</a></li></ol></div>',

  h2('peraturan', 'Peraturan Disabilitas yang Berlaku di DIY Saat Ini'),
  p(`Banyak orang tua di Yogyakarta mencari "Perda disabilitas DIY" karena ingin tahu apa yang menjadi hak anaknya di tingkat daerah. Jawabannya bukan satu dokumen. Ada beberapa peraturan yang saling melengkapi, mulai dari undang-undang nasional sampai peraturan gubernur. Masalahnya, sebagian artikel di internet masih mengutip aturan lama yang sudah dicabut. Karena itu, tabel di bawah hanya memuat peraturan yang statusnya kami cek langsung di ${ext('https://peraturan.bpk.go.id/', 'JDIH BPK')}.`),
  p(`Sebelum membaca tabel, perlu dipahami istilahnya. Perda (peraturan daerah) dibuat pemerintah provinsi bersama DPRD, sedangkan Pergub (peraturan gubernur) dibuat gubernur untuk menjalankan perda. Keduanya berlaku untuk wilayah Daerah Istimewa Yogyakarta. Kabupaten dan kota di DIY dapat memiliki peraturan sendiri yang tidak dibahas di artikel ini.`),
  '<table class="article-table"><caption>Peraturan disabilitas yang relevan bagi warga DIY (status per 11 Oktober 2026)</caption><thead><tr><th>Peraturan</th><th>Judul singkat</th><th>Ditetapkan</th><th>Status di JDIH BPK</th></tr></thead><tbody>'
    + `<tr><td>${ext(BPK.uu8, 'UU 8/2016')}</td><td>Penyandang Disabilitas</td><td>15 April 2016</td><td>Berlaku, mencabut UU 4/1997</td></tr>`
    + `<tr><td>${ext(BPK.perda5, 'Perda DIY 5/2022')}</td><td>Pelaksanaan Penghormatan, Pelindungan, dan Pemenuhan Hak Penyandang Disabilitas</td><td>20 Mei 2022</td><td>Berlaku, mencabut Perda DIY 4/2012</td></tr>`
    + `<tr><td>${ext(BPK.perda3, 'Perda DIY 3/2022')}</td><td>Penyelenggaraan Pendidikan bagi Peserta Didik Penyandang Disabilitas, Memiliki Potensi Kecerdasan, dan/atau Bakat Istimewa</td><td>16 Maret 2022</td><td>Berlaku</td></tr>`
    + `<tr><td>${ext(BPK.pergub87, 'Pergub DIY 87/2024')}</td><td>Peraturan Pelaksanaan Perda DIY 5/2022</td><td>11 Desember 2024</td><td>Berlaku</td></tr>`
    + `<tr><td>${ext(BPK.pergub7, 'Pergub DIY 7/2025')}</td><td>Rencana Aksi Daerah Penyandang Disabilitas DIY 2024 sampai 2027</td><td>7 Februari 2025</td><td>Berlaku</td></tr>`
    + `<tr><td>${ext(BPK.perda4, 'Perda DIY 4/2012')}</td><td>Perlindungan dan Pemenuhan Hak-Hak Penyandang Disabilitas</td><td>2012</td><td>Dicabut oleh Perda DIY 5/2022</td></tr>`
    + '</tbody></table>',
  p(`Daftar ini sengaja dibatasi pada peraturan yang paling sering dibutuhkan keluarga. Untuk gambaran hak anak secara nasional, baca juga ${a('apa-saja-hak-anak-berkebutuhan-khusus', 'hak anak berkebutuhan khusus')} dan penjelasan ${a('uu-no-19-tahun-2011-tentang-apa', 'UU Nomor 19 Tahun 2011')} yang mengesahkan Konvensi Hak-Hak Penyandang Disabilitas.`),
  fig(bodyImages.papan, 'Papan nama bertuliskan Taruna Imani dengan hiasan bunga kertas warna-warni di sebuah ruang kelas', 'Papan nama Sekolah Inklusi Taruna Imani yang dihias bunga kertas buatan warga sekolah. Sekolah inklusi di DIY berjalan di bawah kerangka aturan yang dibahas di artikel ini.'),

  h2('perubahan', 'Dari Perda 4/2012 ke Perda 5/2022: Apa yang Berubah?'),
  p(`DIY sudah lama punya perda disabilitas. Perda DIY Nomor 4 Tahun 2012 tentang Perlindungan dan Pemenuhan Hak-Hak Penyandang Disabilitas lahir sebelum UU 8/2016 terbit. Setelah undang-undang nasional berganti, aturan daerah perlu disesuaikan. Hasilnya adalah Perda DIY Nomor 5 Tahun 2022, yang mulai berlaku pada tanggal diundangkan, yaitu 20 Mei 2022.`),
  p(`Pasal 108 Perda 5/2022 menyatakan bahwa dengan berlakunya perda tersebut, Perda DIY Nomor 4 Tahun 2012 "dicabut dan dinyatakan tidak berlaku". Jadi, bila Anda menemukan brosur, artikel, atau surat yang masih menyebut Perda 4/2012 sebagai aturan berlaku, informasi itu sudah usang.`),
  p(`Ada satu ketentuan peralihan yang penting. Pasal 107 Perda 5/2022 menyebut semua peraturan gubernur yang merupakan pelaksanaan Perda 4/2012 dinyatakan masih tetap berlaku sepanjang tidak bertentangan dengan Perda 5/2022. Salah satu contohnya adalah ${ext(BPK.pergub21, 'Pergub DIY Nomor 21 Tahun 2013 tentang Penyelenggaraan Pendidikan Inklusif')}, yang dasar hukumnya mencantumkan Perda 4/2012. JDIH BPK masih mencatat pergub ini berstatus berlaku tanpa keterangan pencabutan. Namun, karena ketentuan peralihan itu bersyarat, bagian yang bertentangan dengan aturan baru tidak lagi dapat dipakai.`),
  p(`Pasal 106 Perda 5/2022 meminta peraturan gubernur pelaksananya ditetapkan paling lama enam bulan sejak perda diundangkan. Dalam kenyataannya, Pergub DIY 87/2024 sebagai peraturan pelaksana baru ditetapkan pada 11 Desember 2024. Ini catatan faktual dari tanggal di kedua naskah, bukan penilaian atas kinerja siapa pun.`),

  h2('hak', 'Hak Penyandang Disabilitas dalam Perda DIY 5/2022'),
  p(`Pasal 4 Perda 5/2022 menyebut ragam penyandang disabilitas meliputi disabilitas fisik, intelektual, mental, dan/atau sensorik. Ragam ini dapat dialami secara tunggal, ganda, atau multi dalam jangka waktu lama, dan ditetapkan oleh tenaga medis sesuai peraturan perundang-undangan. Penjelasan tiap ragam ada di artikel ${a('jenis-disabilitas', 'jenis disabilitas')}.`),
  p('Pasal 5 ayat (1) kemudian merinci 22 hak penyandang disabilitas. Daftarnya mengikuti pola UU 8/2016, yaitu hak:'),
  ul([
    'hidup, bebas dari stigma, privasi, serta keadilan dan pelindungan hukum;',
    'pendidikan, pekerjaan, kewirausahaan, dan koperasi;',
    'kesehatan, politik, keagamaan, keolahragaan, kebudayaan dan pariwisata;',
    'kesejahteraan sosial, aksesibilitas, pelayanan publik, dan pelindungan dari bencana;',
    'habilitasi dan rehabilitasi, konsesi, serta pendataan;',
    'hidup secara mandiri dan dilibatkan dalam masyarakat;',
    'berekspresi, berkomunikasi, dan memperoleh informasi;',
    'berpindah tempat dan kewarganegaraan;',
    'bebas dari tindakan diskriminasi, penelantaran, penyiksaan, dan eksploitasi.',
  ]),
  p('Ayat (2) pasal yang sama menambahkan hak khusus bagi perempuan dengan disabilitas, misalnya hak atas kesehatan reproduksi. Pasal 6 lalu menyebut 17 aspek tempat pemerintah daerah menjalankan penghormatan, pelindungan, dan pemenuhan hak itu, di antaranya keadilan dan pelindungan hukum, pendidikan, kesehatan, kesejahteraan sosial, infrastruktur, komunikasi dan informasi, serta perempuan dan anak.'),
  p(`Satu contoh dari aspek keadilan: Pasal 8 ayat (1) mewajibkan pemerintah daerah menyediakan bantuan hukum kepada penyandang disabilitas yang berhadapan dengan hukum dalam setiap tahapan pemeriksaan. Bantuan ini mencakup masalah perdata, pidana, dan tata usaha negara, baik litigasi maupun nonlitigasi. Program bantuan lain dari pemerintah pusat dan daerah dirangkum di ${a('apa-saja-program-pemerintah-untuk-penyandang-disabilitas', 'program pemerintah untuk penyandang disabilitas')}.`),
  fig(bodyImages.tangan, 'Tangan seorang pendamping dewasa terbuka menerima, sementara tangan anak berseragam memegang tutup wadah berwarna hijau dan kuning', 'Tangan pendamping dan anak dalam kegiatan bersama di YUKA. Hak yang tertulis di perda baru terasa artinya saat dijalankan dalam keseharian seperti ini.'),

  h2('pendidikan', 'Aspek Pendidikan dalam Perda DIY 5/2022'),
  p(`Bagian ketiga Perda 5/2022 (Pasal 10 sampai Pasal 15) mengatur aspek pendidikan. Pasal 10 ayat (3) menyebut penyelenggaraan dan/atau fasilitasi pendidikan untuk penyandang disabilitas dilaksanakan melalui pendidikan inklusif, pendidikan khusus, pendidikan nonformal, dan pendidikan informal. Pasal 11 ayat (2) menegaskan bahwa pendidikan khusus merupakan suatu pilihan bagi penyandang disabilitas, sehingga keluarga dapat menimbang ${a('pendidikan-inklusi', 'sekolah inklusi')} maupun ${a('sekolah-slb-untuk-anak-apa', 'sekolah luar biasa')}.`),
  p('Pasal 12 ayat (1) memuat daftar langkah pemerintah daerah di bidang pendidikan. Ringkasnya:'),
  '<table class="article-table"><caption>Langkah pemerintah daerah menurut Pasal 12 ayat (1) Perda DIY 5/2022</caption><thead><tr><th>Huruf</th><th>Isi ketentuan</th><th>Artinya bagi keluarga</th></tr></thead><tbody>'
    + '<tr><td>a</td><td>Mengikutsertakan anak penyandang disabilitas dalam program wajib belajar 12 tahun</td><td>Anak termasuk sasaran wajib belajar, sama dengan anak lain</td></tr>'
    + '<tr><td>b</td><td>Mengutamakan peserta didik bersekolah di lokasi terdekat dari tempat tinggal</td><td>Ayat (2) menambahkan pertimbangan fasilitas yang ramah disabilitas</td></tr>'
    + '<tr><td>c</td><td>Memfasilitasi ijazah pendidikan dasar dan menengah lewat program kesetaraan</td><td>Ada jalan bagi yang tidak menempuh pendidikan formal</td></tr>'
    + '<tr><td>d, e, f</td><td>Beasiswa, biaya pendidikan, dan jaminan pendidikan khusus</td><td>Rinciannya diatur Pergub 87/2024</td></tr>'
    + '<tr><td>i</td><td>Memfasilitasi pembentukan Unit Layanan Disabilitas</td><td>Ayat (3): dari PAUD sampai pendidikan tinggi</td></tr>'
    + '<tr><td>j</td><td>Memfasilitasi lembaga pendidikan menyediakan akomodasi yang layak</td><td>Ayat (4): anggaran, sarana, tenaga pendidik, kurikulum, terapis, asrama</td></tr>'
    + '<tr><td>k</td><td>Menjamin pilihan bagi peserta didik dengan disabilitas untuk belajar di sekolah inklusif</td><td>Sekolah inklusif adalah pilihan yang dijamin</td></tr>'
    + '</tbody></table>',
  p('Dua pasal berikutnya pendek tetapi penting. Pasal 13 berbunyi: "Setiap lembaga pendidikan wajib menerima peserta didik Penyandang Disabilitas." Pasal 14 menyebut setiap lembaga pendidikan yang memiliki peserta didik penyandang disabilitas memberikan layanan pendidikan yang sesuai dengan kondisi dan kebutuhan peserta didik serta bersifat afirmatif.'),
  p(`Pasal 15 menyentuh hal yang sering dialami anak berkebutuhan khusus, yaitu perundungan. Pemerintah daerah melakukan edukasi kepada penyelenggara pendidikan, guru, dan peserta didik tentang pencegahan perundungan, yang meliputi perundungan fisik, psikis, verbal, sosial, dan/atau siber. Ayat (3) menyebut pemerintah daerah membangun mekanisme pengaduan secara berjenjang untuk melindungi peserta didik penyandang disabilitas dari perundungan.`),
  p(`Perlu dicatat, perda tidak merinci bentuk layanan untuk tiap anak. Rinciannya bergantung pada asesmen kebutuhan dan kesepakatan dengan sekolah. Gambaran prosesnya dapat dibaca di ${a('asesmen-abk', 'asesmen ABK')} dan ${a('program-pembelajaran-individual', 'program pembelajaran individual')}.`),
  fig(bodyImages.meja, 'Meja belajar lipat dengan kertas dan buku, tangan seseorang menulis, di sebelahnya tumpukan buku dan perlengkapan sekolah di lantai', 'Suasana belajar di lantai dengan meja lipat dalam kegiatan YUKA. Perda 5/2022 meminta layanan pendidikan disesuaikan dengan kondisi dan kebutuhan setiap peserta didik.'),

  h2('pergub', 'Isi Pergub DIY 87/2024 sebagai Aturan Pelaksana'),
  p(`Pergub DIY Nomor 87 Tahun 2024 dibuat untuk menjalankan beberapa pasal Perda 5/2022 yang meminta pengaturan lebih lanjut. Pasal 3 menyebut ruang lingkupnya meliputi penyediaan bantuan hukum, akomodasi yang layak untuk peserta didik penyandang disabilitas, jaminan kesehatan, dan penghargaan. Pergub ini juga memuat ketentuan sanksi administratif.`),
  h3('Pendidikan: jaminan biaya, ULD, guru, dan insentif'),
  p('Pasal 5 Pergub 87/2024 menyebut pemenuhan hak pendidikan terdiri atas empat hal: jaminan pendidikan khusus, unit layanan disabilitas, fasilitasi penyediaan tenaga pendidik dan tenaga kependidikan, serta fasilitasi pemberian insentif bagi pendidik dan tenaga kependidikan.'),
  ul([
    '<strong>Bantuan biaya pendidikan.</strong> Pasal 6 menyebut jaminan pendidikan khusus diberikan dalam bentuk bantuan biaya pendidikan pada tingkatan yang menjadi kewenangan pemerintah daerah. Pasal 8 menyebut bantuan diutamakan untuk pembelian buku dan alat tulis, dan dapat dipakai untuk makan, pakaian, tempat tinggal, transportasi, serta informasi dan komunikasi.',
    '<strong>Syarat penerima.</strong> Pasal 9 mensyaratkan status peserta didik penyandang disabilitas, orang tua atau wali tidak mampu, tercatat sebagai penduduk DIY dengan Kartu Keluarga atau KTP, dan tidak sedang menerima bantuan biaya pendidikan dari lembaga pemerintah lain.',
    '<strong>Unit Layanan Disabilitas.</strong> Pasal 11 menyebut pembentukannya dilakukan melalui penguatan fungsi perangkat daerah di bidang pendidikan, untuk mendukung pendidikan inklusif pada PAUD formal, pendidikan dasar, dan menengah.',
    '<strong>Guru dan insentif.</strong> Pasal 14 menyebut fasilitasi tenaga pendidik antara lain melalui penyediaan guru pendidikan khusus dan pelatihan. Pasal 15 menyebut insentif dapat berupa honor atau pelatihan guru pendamping khusus.',
  ]),
  p(`Pasal 13 Pergub ini menyebut ULD dapat melibatkan dokter, psikolog klinis, fisioterapis, okupasi terapis, terapis wicara, ahli pendidikan luar biasa, ahli pendidikan inklusif, dan praktisi bahasa isyarat atau braille. Bila anak Anda didampingi guru di kelas, pahami juga beda ${a('gpk-adalah', 'guru pembimbing khusus')} dan ${a('shadow-teacher-adalah', 'shadow teacher')}.`),
  h3('Sanksi administratif'),
  p('Bab sanksi dalam Pergub 87/2024 menjalankan Pasal 105 Perda 5/2022. Pasal 22 Pergub mengulang kewajiban setiap lembaga pendidikan menerima peserta didik penyandang disabilitas, lalu menetapkan sanksi administratif berupa teguran lisan dan/atau teguran tertulis bagi yang melanggar. Pasal 23 dan 24 mengatur kewajiban mempekerjakan penyandang disabilitas, yaitu paling sedikit 2 persen bagi perusahaan daerah dan 1 persen bagi perusahaan swasta dari jumlah pegawai atau pekerja.'),
  p(`Sanksi bagi lembaga pendidikan dalam pergub ini sebatas teguran. Jadi, jalur yang paling realistis bagi orang tua tetap dialog, permohonan tertulis, lalu pengaduan ke dinas. Bantuan lain yang dapat diajukan keluarga dijelaskan di ${a('cara-mengajukan-bantuan-pemerintah-untuk-anak-disabilitas', 'cara mengajukan bantuan pemerintah untuk anak disabilitas')}.`),
  fig(bodyImages.adonan, 'Dua pasang tangan menggulung adonan oranye di atas alas silikon biru di meja kayu', 'Kegiatan membentuk adonan dalam kelas keterampilan YUKA. Pergub 87/2024 menyebut ULD dapat melibatkan tenaga seperti okupasi terapis dan ahli pendidikan inklusif.'),

  h2('perda3', 'Perda DIY 3/2022 tentang Pendidikan bagi Peserta Didik Penyandang Disabilitas'),
  p(`Selain perda umum, DIY punya perda yang khusus mengatur sekolah, yaitu Perda DIY Nomor 3 Tahun 2022. Pasal 5 menyebut peserta didik berkebutuhan khusus dalam perda ini meliputi penyandang disabilitas (fisik, intelektual, mental, dan/atau sensorik), anak dengan potensi kecerdasan, dan anak dengan bakat istimewa.`),
  p('Pembagian kewenangan perlu dipahami. Pasal 8 menyebut pemerintah provinsi berwenang menyelenggarakan pendidikan pada sekolah khusus dan satuan pendidikan menengah penyelenggara pendidikan inklusif. Untuk jenjang PAUD dan pendidikan dasar, Pasal 9 menyebut pemerintah provinsi berkoordinasi dengan pemerintah kabupaten/kota dan dapat memberi fasilitasi, misalnya penyediaan guru pembimbing khusus dan sarana prasarana. Artinya, urusan SD dan SMP umumnya ditanyakan ke dinas pendidikan kabupaten/kota, sedangkan SMA, SMK, dan SLB ke dinas pendidikan provinsi.'),
  ul([
    '<strong>Peran orang tua (Pasal 11).</strong> Orang tua berperan mengupayakan hak pendidikan anak, mendukung sekolah, berkonsultasi dengan Unit Layanan Disabilitas Bidang Pendidikan, psikolog, tenaga kesehatan, atau guru pembimbing khusus, serta memberi saran dan kritik kepada sekolah maupun pemerintah daerah.',
    '<strong>ULD Bidang Pendidikan (Pasal 15).</strong> Dibentuk pemerintah daerah di bawah perangkat daerah urusan pendidikan, dengan fungsi antara lain meningkatkan kompetensi guru, pendampingan peserta didik, menyediakan media pembelajaran dan alat bantu, deteksi dini dan intervensi dini, data dan informasi, serta layanan konsultasi. Pasal 78 meminta unit ini dibentuk paling lambat dua tahun sejak perda diundangkan.',
    '<strong>Penerimaan di SMA/SMK inklusif (Pasal 50).</strong> Satuan pendidikan menengah penyelenggara pendidikan inklusif wajib menerima peserta didik berkebutuhan khusus tanpa kriteria hambatan atau kebutuhan khusus tertentu. Sekolah yang tidak menerima karena alasan tertentu harus lebih dahulu berkoordinasi dengan perangkat daerah.',
    '<strong>Sanksi (Pasal 76).</strong> Sekolah yang tidak menjalankan kewajiban menerima peserta didik sebagaimana Pasal 19 ayat (2) dan Pasal 50 ayat (2) dikenai sanksi administratif berupa teguran lisan dan/atau tertulis.',
  ]),
  p(`Untuk perbandingan lebih rinci antara model sekolah, baca ${a('apa-perbedaan-sekolah-inklusi-dan-slb', 'perbedaan sekolah inklusi dan SLB')}. Bila Anda tinggal di Sleman, informasi praktis tersedia di halaman ${a('../sekolah-inklusi-sleman', 'sekolah inklusi Sleman')}.`),

  h2('uu8', 'Hubungan Perda DIY dengan UU 8/2016'),
  p(`Perda daerah tidak berdiri sendiri. Dasarnya adalah UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas, yang di JDIH BPK tercatat mencabut UU Nomor 4 Tahun 1997 tentang Penyandang Cacat. Banyak ketentuan Perda 5/2022 mengikuti rumusan undang-undang ini, sehingga keduanya enak dibaca berdampingan.`),
  '<table class="article-table"><caption>Ketentuan pendidikan di UU 8/2016 dan padanannya di aturan DIY</caption><thead><tr><th>UU 8/2016</th><th>Isi</th><th>Padanan di DIY</th></tr></thead><tbody>'
    + '<tr><td>Pasal 10 huruf a</td><td>Hak pendidikan bermutu di semua jenis, jalur, dan jenjang secara inklusif dan khusus</td><td>Perda 5/2022 Pasal 10 dan 11</td></tr>'
    + '<tr><td>Pasal 10 huruf d</td><td>Hak mendapatkan akomodasi yang layak sebagai peserta didik</td><td>Perda 5/2022 Pasal 12 ayat (1) huruf j dan ayat (4)</td></tr>'
    + '<tr><td>Pasal 40 ayat (3) dan (4)</td><td>Wajib belajar 12 tahun dan pengutamaan sekolah dekat tempat tinggal</td><td>Perda 5/2022 Pasal 12 ayat (1) huruf a dan b</td></tr>'
    + '<tr><td>Pasal 42 ayat (1)</td><td>Pemda wajib memfasilitasi pembentukan Unit Layanan Disabilitas</td><td>Perda 3/2022 Pasal 15, Pergub 87/2024 Pasal 11</td></tr>'
    + '</tbody></table>',
  p('Bila sebuah ketentuan belum dirinci di tingkat daerah, undang-undang dan peraturan pelaksana nasionalnya tetap berlaku. Sebaliknya, perda tidak boleh mengurangi hak yang sudah dijamin undang-undang.'),
  fig(bodyImages.mengaji, 'Seorang remaja dilihat dari belakang duduk menghadap meja lipat berisi mushaf Al-Quran terbuka dan buku tulis', 'Remaja mengikuti kegiatan mengaji di YUKA, difoto dari belakang. Hak keagamaan juga termasuk hak yang disebut Pasal 5 Perda DIY 5/2022.'),

  h2('orang-tua', 'Yang Bisa Dilakukan Orang Tua di DIY'),
  p('Mengetahui isi perda berguna bila dipakai dengan tenang dan terarah. Berikut langkah praktis yang dapat ditempuh keluarga, disusun dari ketentuan yang sudah dibahas:'),
  ol([
    '<strong>Kenali jenjang dan kewenangan.</strong> PAUD, SD, dan SMP umumnya ditangani dinas pendidikan kabupaten/kota. SMA, SMK, dan SLB ditangani dinas pendidikan DIY. Mengetahui ini menghemat waktu saat bertanya atau mengadu.',
    '<strong>Siapkan dokumen.</strong> Hasil pemeriksaan tenaga medis atau psikolog, laporan perkembangan, serta Kartu Keluarga atau KTP DIY bila ingin mengajukan bantuan biaya pendidikan sesuai Pasal 9 Pergub 87/2024.',
    `<strong>Bicarakan kebutuhan anak dengan sekolah.</strong> Rujuk Pasal 13 dan 14 Perda 5/2022 dengan sopan. Banyak sekolah sebenarnya mau menerima, tetapi butuh kejelasan tentang dukungan yang diperlukan. Tips komunikasinya ada di ${a('peran-orang-tua-pendidikan-inklusi', 'peran orang tua dalam pendidikan inklusi')}.`,
    '<strong>Minta jawaban tertulis bila ditolak.</strong> Penjelasan tertulis membantu memastikan alasannya, lalu dapat Anda bawa ke dinas pendidikan sesuai jenjang.',
    '<strong>Hubungi Unit Layanan Disabilitas atau dinas pendidikan.</strong> Unit ini berfungsi memberi konsultasi dan pendampingan menurut Perda 3/2022. Tanyakan langsung apakah layanan tersebut sudah berjalan untuk jenjang anak Anda.',
    `<strong>Lengkapi administrasi disabilitas.</strong> Bila dibutuhkan untuk layanan lain, pelajari ${a('bagaimana-cara-membuat-kartu-disabilitas', 'cara membuat kartu disabilitas')}.`,
    '<strong>Cari pendampingan.</strong> Organisasi penyandang disabilitas, yayasan pendidikan, dan lembaga bantuan hukum dapat membantu menyusun surat atau mendampingi pertemuan. Pasal 8 Perda 5/2022 juga mewajibkan pemerintah daerah menyediakan bantuan hukum bagi penyandang disabilitas yang berhadapan dengan hukum.',
  ]),
  p(`Bagi keluarga muslim, memperjuangkan pendidikan anak adalah bagian dari amanah. Aturan memberi pijakan, tetapi kerja sama yang baik dengan guru sering lebih menentukan keberhasilan anak di sekolah. Bila Anda mencari lembaga pendidikan inklusif di Yogyakarta, kenali juga ${a('../yayasan-abk-yogyakarta', 'yayasan ABK di Yogyakarta')}.`),

  h2('batas', 'Hal yang Tidak Diatur atau Perlu Dicek Sendiri'),
  p('Agar tidak salah paham, berikut beberapa batas yang perlu diketahui:'),
  ul([
    '<strong>Perda tidak menentukan sekolah tertentu untuk anak tertentu.</strong> Perda mengatur kewajiban umum. Penempatan, bentuk dukungan, dan program belajar ditentukan lewat asesmen dan kesepakatan.',
    '<strong>Besaran bantuan biaya pendidikan tidak tertulis di pergub.</strong> Pergub 87/2024 mengatur syarat dan peruntukan, sedangkan kuotanya ditentukan perangkat daerah di bidang pendidikan. Tanyakan jadwal dan besaran ke dinas terkait.',
    '<strong>Kabupaten dan kota dapat punya aturan sendiri.</strong> Artikel ini membahas aturan tingkat provinsi DIY. Cek juga JDIH kabupaten atau kota tempat Anda tinggal.',
    '<strong>Status peraturan dapat berubah.</strong> Pengecekan kami dilakukan 11 Oktober 2026. Sebelum mengutip pasal dalam surat resmi, buka kembali halaman peraturan di JDIH BPK atau JDIH Pemda DIY.',
  ]),
  p(`Untuk memahami istilah dasarnya, baca juga ${a('penyandang-disabilitas', 'pengertian penyandang disabilitas')} dan ${a('kartu-disabilitas', 'fungsi kartu disabilitas')}.`),
  faqHtml,
].join('\n');

const article = {
  slug,
  titleTag: 'Perda Disabilitas DIY Yogyakarta: Isi, Pergub, Hak Pendidikan',
  metaDesc: 'Perda disabilitas DIY yang berlaku adalah Perda 5/2022, pelaksananya Pergub 87/2024. Pelajari hak pendidikan inklusif, bantuan biaya, dan langkah orang tua.',
  keywords: 'perda disabilitas diy, perda diy 5 tahun 2022, pergub diy 87 tahun 2024, perda diy 3 tahun 2022, hak penyandang disabilitas yogyakarta, pendidikan inklusif yogyakarta',
  ogTitle: 'Perda Disabilitas DIY Yogyakarta: Isi, Aturan Pelaksana, dan Hak Pendidikan',
  ogDesc: 'Perda DIY 5/2022, Pergub DIY 87/2024, dan Perda DIY 3/2022 dijelaskan dari naskah resminya, dengan status dicek 11 Oktober 2026.',
  datePublished: '2026-10-11',
  dateModified: '2026-10-11',
  dateDisplay: '11 Okt 2026',
  readTime: '13 menit baca',
  category: 'Pendidikan',
  h1: 'Perda Disabilitas DIY Yogyakarta: Isi Perda 5/2022, Aturan Pelaksana, dan Hak Pendidikan',
  crumb: 'Perda Disabilitas DIY Yogyakarta',
  parent: { href: 'penyandang-disabilitas', name: 'Penyandang Disabilitas' },
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'apa-saja-hak-anak-berkebutuhan-khusus', title: 'Apa Saja Hak Anak Berkebutuhan Khusus?', desc: 'Ringkasan hak umum dan hak khusus anak penyandang disabilitas menurut undang-undang.' },
    { href: 'apa-saja-program-pemerintah-untuk-penyandang-disabilitas', title: 'Program Pemerintah untuk Penyandang Disabilitas', desc: 'Daftar program bantuan dan layanan pemerintah bagi penyandang disabilitas.' },
    { href: 'pendidikan-inklusi', title: 'Pendidikan Inklusi', desc: 'Prinsip, manfaat, dan cara kerja sekolah inklusi bagi anak berkebutuhan khusus.' },
    { href: 'uu-no-19-tahun-2011-tentang-apa', title: 'UU No. 19 Tahun 2011 tentang Apa?', desc: 'Penjelasan ratifikasi Konvensi Hak-Hak Penyandang Disabilitas dan artinya bagi anak.' },
  ],
  tags: ['PerdaDisabilitas', 'Yogyakarta', 'PendidikanInklusif', 'HakDisabilitas'],
  sources: [
    { url: BPK.perda5, label: 'JDIH BPK, Perda DIY Nomor 5 Tahun 2022 (Pasal 4, 5, 6, 8, 10 sampai 15, 105 sampai 108)' },
    { url: BPK.pergub87, label: 'JDIH BPK, Pergub DIY Nomor 87 Tahun 2024 (Pasal 3, 5, 6, 8, 9, 11, 13 sampai 15, 22 sampai 24)' },
    { url: BPK.perda3, label: 'JDIH BPK, Perda DIY Nomor 3 Tahun 2022 (Pasal 5, 8, 9, 11, 15, 50, 76, 78)' },
    { url: BPK.pergub7, label: 'JDIH BPK, Pergub DIY Nomor 7 Tahun 2025 tentang Rencana Aksi Daerah Penyandang Disabilitas 2024 sampai 2027' },
    { url: BPK.perda4, label: 'JDIH BPK, Perda DIY Nomor 4 Tahun 2012 (dicabut oleh Perda DIY 5/2022)' },
    { url: BPK.pergub21, label: 'JDIH BPK, Pergub DIY Nomor 21 Tahun 2013 tentang Penyelenggaraan Pendidikan Inklusif' },
    { url: BPK.uu8, label: 'JDIH BPK, UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (Pasal 10, 40, 42)' },
  ],
  sourcesCheckedNote: 'Naskah dan status peraturan dibaca langsung dari salinan resmi di JDIH BPK pada 11 Oktober 2026. Artikel ini informasi umum, bukan nasihat hukum untuk kasus tertentu.',
};

const html = renderArticlePage(article);
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

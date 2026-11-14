'use strict';
/*
 * Generator artikel 14 November 2026 (cycle #97 /cek-daily-artikel, tambal hari kosong).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5", baris 361: "kuota pekerja disabilitas 1 persen perusahaan".
 * Belum punya artikel sendiri (supported-employment-disabilitas-di-indonesia hanya menyebut kuota
 * dalam satu paragraf; artikel ini menjawab intent spesifik: siapa wajib, cara hitung, cara menagih).
 *
 * Fakta: teks UU 8/2016 Pasal 11, 45 sampai 60, 143 sampai 145 (Wikisumber, salinan teks resmi) dan
 * judul PP 60/2020 (peraturan.go.id). Foto: Wikimedia Commons (CC BY-SA 4.0), subjek Indonesia,
 * tidak ada potret dekat anak. Diagram SVG sendiri. Nol AI.
 *
 *   node scripts/generate-gap-20261114.js --prepare   # tulis SVG diagram
 *   node scripts/generate-gap-20261114.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-gap-20261114.js             # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const BYSA = 'https://creativecommons.org/licenses/by-sa/4.0/';
const CC = (page, author, lic, licUrl) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">${author}</a> / Wikimedia Commons, <a href="${licUrl}" target="_blank" rel="nofollow noopener">${lic}</a>.`;
const fig = (file, w, h, alt, caption, credit) => `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${credit}</span></figcaption></figure>`;
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const faqHtml = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;
const ext = (url, text) => `<a href="${url}" target="_blank" rel="nofollow noopener">${text}</a>`;
const table = (caption, head, rows) => `<div class="table-wrap"><table><caption>${caption}</caption><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((i) => `<li>${i}</li>`).join('')}</ol>`;

const diagrams = {};
const addDiagram = (file, markup) => { diagrams[file] = markup; };

const URL_UU8 = 'https://peraturan.go.id/id/uu-no-8-tahun-2016';
const URL_UU8_TEKS = 'https://id.wikisource.org/wiki/Undang-Undang_Republik_Indonesia_Nomor_8_Tahun_2016';
const URL_PP60 = 'https://peraturan.go.id/id/pp-no-60-tahun-2020';
const URL_KEMNAKER = 'https://kemnaker.go.id/';

const F_HERO = 'https://commons.wikimedia.org/wiki/File:Dedikasi_Guru_Difabel.jpg';
const F_KEMNAKER = 'https://commons.wikimedia.org/wiki/File:Gedung_Kementerian_Ketenagakerjaan_(Desember_2024).jpg';
const F_DISNAKER = 'https://commons.wikimedia.org/wiki/File:Kantor_Dinas_Tenaga_Kerja_Kab.Kebumen.jpg';
const F_BLK = 'https://commons.wikimedia.org/wiki/File:Balai_Latihan_Kerja_(BLK)_Dinas_Tenaga_Kerja_Kab.Kebumen.jpg';
const F_BATIK = 'https://commons.wikimedia.org/wiki/File:Penyandang_disabilitas_membatik_ciprat_bersama.jpg';
const F_BRTPD = 'https://commons.wikimedia.org/wiki/File:Balai_Rehabilitasi_Terpadu_Penyandang_Disabilitas_Pundong_(1).jpg';

const sections = [
  ['inti', 'Isi aturan kuota pekerja disabilitas'],
  ['siapa', 'Siapa yang wajib memenuhi kuota'],
  ['hitung', 'Cara menghitung kuota 1 persen'],
  ['hak', 'Hak pekerja disabilitas selain kuota'],
  ['rekrutmen', 'Penyesuaian saat rekrutmen dan penempatan'],
  ['uld', 'Unit Layanan Disabilitas dan insentif'],
  ['sanksi', 'Bagaimana jika kuota tidak dipenuhi'],
  ['wirausaha', 'Jalur kerja lain: wirausaha dan usaha bersama'],
  ['orang-tua', 'Apa artinya bagi orang tua anak berkebutuhan khusus'],
  ['faq', 'Pertanyaan umum'],
];

const faq = [
  { q: 'Berapa kuota pekerja disabilitas untuk perusahaan swasta?', a: 'Paling sedikit 1 persen dari jumlah pegawai atau pekerja. Ketentuannya ada di UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas Pasal 53 ayat (2). Angka 1 persen adalah batas bawah, jadi perusahaan boleh dan dianjurkan mempekerjakan lebih banyak.' },
  { q: 'Berapa kuota untuk instansi pemerintah, BUMN, dan BUMD?', a: 'Paling sedikit 2 persen dari jumlah pegawai atau pekerja. Pasal 53 ayat (1) UU 8 Tahun 2016 mewajibkan Pemerintah, Pemerintah Daerah, Badan Usaha Milik Negara, dan Badan Usaha Milik Daerah memenuhi angka ini.' },
  { q: 'Apakah perusahaan kecil juga wajib memenuhi kuota 1 persen?', a: 'Pasal 53 menyebut perusahaan swasta tanpa batas minimal jumlah pekerja, dan tidak mengatur cara pembulatan. Untuk perusahaan dengan pekerja sedikit, angka 1 persen bisa berupa pecahan. Cara penghitungan yang dipakai di daerah Anda sebaiknya ditanyakan ke Unit Layanan Disabilitas di dinas ketenagakerjaan setempat.' },
  { q: 'Apakah ada sanksi pidana jika perusahaan tidak memenuhi kuota?', a: 'Ketentuan pidana UU 8 Tahun 2016 ada di Pasal 144 dan 145, dan keduanya tidak mengatur kuota kerja. Sanksi administratif yang tertulis di bab pekerjaan ada di Pasal 50 ayat (4), yaitu untuk pemberi kerja yang tidak menyediakan akomodasi yang layak dan fasilitas yang mudah diakses.' },
  { q: 'Apa itu Unit Layanan Disabilitas bidang ketenagakerjaan?', a: 'Unit di dinas ketenagakerjaan pemerintah daerah yang wajib dibentuk menurut Pasal 55 UU 8 Tahun 2016 dan diatur lebih lanjut dalam PP Nomor 60 Tahun 2020. Tugasnya antara lain memberi informasi rekrutmen tanpa diskriminasi, mendampingi tenaga kerja penyandang disabilitas, dan mendampingi pemberi kerja yang menerima mereka.' },
  { q: 'Apakah gaji pekerja disabilitas boleh lebih rendah?', a: 'Tidak. Pasal 49 mewajibkan pemberi kerja memberi upah yang sama kepada tenaga kerja penyandang disabilitas dan bukan penyandang disabilitas untuk jenis pekerjaan dan tanggung jawab yang sama. Hak ini juga tercantum di Pasal 11 huruf b.' },
  { q: 'Bolehkah pekerja diberhentikan karena disabilitasnya?', a: 'Pasal 11 huruf d UU 8 Tahun 2016 menyebut hak penyandang disabilitas untuk tidak diberhentikan karena alasan disabilitas. Pasal yang sama juga menyebut hak atas program kembali bekerja dan penempatan kerja yang adil, proporsional, dan bermartabat.' },
  { q: 'Kapan orang tua sebaiknya mulai menyiapkan anak ABK untuk dunia kerja?', a: 'Sejak usia sekolah menengah, ketika minat dan kemampuan anak mulai terlihat jelas. Latihan kemandirian, keterampilan vokasional, magang, dan rencana transisi yang ditulis bersama sekolah membuat anak lebih siap memanfaatkan kesempatan kerja yang dibuka aturan kuota.' },
];

addDiagram(`${IMG}/kuota-disabilitas-hitung.webp`, svg.grid('Contoh hitungan kuota pekerja disabilitas', 'UU 8/2016 Pasal 53, sebelum pembulatan. Sektor publik = pemerintah, BUMN, BUMD', ['Jumlah pekerja', 'Swasta (min. 1%)', 'Sektor publik (min. 2%)'], [
  ['50 pekerja', '0,5 orang', '1 orang'],
  ['100 pekerja', '1 orang', '2 orang'],
  ['250 pekerja', '2,5 orang', '5 orang'],
  ['1.000 pekerja', '10 orang', '20 orang'],
  ['5.000 pekerja', '50 orang', '100 orang'],
], [300, 402, 402]));
addDiagram(`${IMG}/kuota-disabilitas-alur.webp`, svg.flow('Jalan anak ABK menuju pekerjaan', 'Gambaran persiapan dari sekolah sampai bekerja', [
  { h: 'Sekolah', d: 'Kenali minat, latih kemandirian dan keterampilan dasar.' },
  { h: 'Vokasional', d: 'Pelatihan keterampilan kerja di sekolah, BLK, atau balai.' },
  { h: 'Magang', d: 'Coba bekerja dengan pendampingan dan penyesuaian.' },
  { h: 'Melamar', d: 'Hubungi ULD dinas ketenagakerjaan dan pemberi kerja.' },
  { h: 'Bekerja', d: 'Masa adaptasi, akomodasi layak, upah yang sama.' },
]));

const body = [
  p('<strong>Kuota pekerja disabilitas 1 persen</strong> adalah kewajiban perusahaan swasta di Indonesia untuk mempekerjakan penyandang disabilitas paling sedikit 1 persen dari jumlah pegawainya. Untuk Pemerintah, Pemerintah Daerah, BUMN, dan BUMD, batasnya paling sedikit 2 persen. Aturan ini tertulis di Pasal 53 UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas dan menjadi salah satu pintu masuk penting bagi anak berkebutuhan khusus yang kelak memasuki dunia kerja.'),
  p('Panduan ini kami susun untuk orang tua, guru, dan pendamping yang ingin memahami aturan kuota secara utuh: siapa yang wajib, cara menghitungnya, hak lain yang menyertai pekerja disabilitas, peran Unit Layanan Disabilitas, dan apa yang terjadi bila kuota tidak dipenuhi. Semua kutipan pasal kami ambil langsung dari teks undang-undang, tanpa angka tambahan yang tidak ada di sumbernya.'),
  toc(sections),

  '<h2 id="inti">Isi aturan kuota pekerja disabilitas</h2>',
  p('Dasar hukumnya adalah ' + ext(URL_UU8, 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas') + ', yang menggantikan UU Nomor 4 Tahun 1997 tentang Penyandang Cacat. Pasal 53 hanya terdiri dari dua ayat, tetapi isinya jelas. Ayat (1) mewajibkan Pemerintah, Pemerintah Daerah, Badan Usaha Milik Negara, dan Badan Usaha Milik Daerah mempekerjakan paling sedikit 2 persen penyandang disabilitas dari jumlah pegawai atau pekerja. Ayat (2) mewajibkan perusahaan swasta mempekerjakan paling sedikit 1 persen.'),
  p('Kata kuncinya adalah <em>paling sedikit</em>. Angka 1 dan 2 persen bukan target maksimal, melainkan batas bawah. Perusahaan yang mempekerjakan lebih banyak penyandang disabilitas tetap sejalan dengan undang-undang. Kata <em>wajib</em> juga penting: ini bukan imbauan, melainkan kewajiban hukum yang melekat pada pemberi kerja.'),
  table('Ringkasan Pasal 53 UU 8 Tahun 2016', ['Pemberi kerja', 'Kuota minimal', 'Dasar'], [
    ['Pemerintah dan Pemerintah Daerah', '2 persen dari jumlah pegawai', 'Pasal 53 ayat (1)'],
    ['Badan Usaha Milik Negara (BUMN)', '2 persen dari jumlah pekerja', 'Pasal 53 ayat (1)'],
    ['Badan Usaha Milik Daerah (BUMD)', '2 persen dari jumlah pekerja', 'Pasal 53 ayat (1)'],
    ['Perusahaan swasta', '1 persen dari jumlah pekerja', 'Pasal 53 ayat (2)'],
  ]),
  p('Aturan kuota tidak menyebut jenis disabilitas tertentu. Artinya, penyandang disabilitas fisik, intelektual, mental, maupun sensorik sama-sama dihitung. Bagi keluarga anak dengan autisme, Down syndrome, atau disabilitas intelektual, hal ini berarti pintu kuota juga terbuka untuk anak mereka, selama pekerjaannya sesuai minat dan kemampuan. Gambaran pasal-pasal lain di undang-undang yang sama ada di <a href="/artikel/uu-no-8-tahun-2016-tentang-penyandang-disabilitas">ringkasan UU No 8 Tahun 2016</a>.'),
  fig(`${IMG}/kuota-disabilitas-kemnaker.webp`, 1200, 674, 'Gedung Kementerian Ketenagakerjaan Republik Indonesia di Jalan Gatot Subroto Jakarta, bangunan kaca gelap bertingkat dengan tulisan KEMNAKER RI di atapnya, dikelilingi pepohonan', 'Gedung Kementerian Ketenagakerjaan di Jakarta. Kebijakan ketenagakerjaan nasional, termasuk penempatan tenaga kerja penyandang disabilitas, dikoordinasikan dari kementerian ini.', CC(F_KEMNAKER, 'Medelam', 'CC BY-SA 4.0', BYSA)),

  '<h2 id="siapa">Siapa yang wajib memenuhi kuota</h2>',
  p('Ada dua kelompok pemberi kerja yang disebut Pasal 53. Kelompok pertama adalah sektor publik: kementerian, lembaga, pemerintah provinsi, pemerintah kabupaten dan kota, serta badan usaha milik negara dan milik daerah. Kelompok ini memikul kuota lebih besar, yaitu 2 persen, karena negara diharapkan memberi contoh. Kelompok kedua adalah perusahaan swasta dengan kuota 1 persen.'),
  p('Undang-undang tidak membuat pengecualian berdasarkan ukuran perusahaan, sektor usaha, atau jenis pekerjaan. Yang dihitung adalah jumlah pegawai atau pekerja. Karena itu, pertanyaan yang lebih praktis bagi pencari kerja biasanya bukan "apakah perusahaan ini wajib", melainkan "posisi apa yang cocok dan penyesuaian apa yang dibutuhkan". Bagian berikutnya membahas cara menghitung kuota dan hak yang menyertainya.'),
  ul([
    '<strong>Pemerintah pusat dan daerah</strong>: termasuk formasi khusus penyandang disabilitas dalam penerimaan aparatur sipil negara yang diumumkan setiap periode seleksi.',
    '<strong>BUMN dan BUMD</strong>: wajib 2 persen, sama dengan instansi pemerintah.',
    '<strong>Perusahaan swasta</strong>: wajib 1 persen, dari usaha menengah sampai korporasi besar.',
  ]),
  p('Bagi keluarga yang ingin mengetahui gambaran pekerjaan secara umum, kami sudah membahas <a href="/artikel/pekerjaan-untuk-penyandang-disabilitas">pekerjaan untuk penyandang disabilitas</a> dan, khusus untuk anak dengan autisme, <a href="/artikel/pekerjaan-yang-cocok-untuk-orang-autis">pekerjaan yang cocok untuk orang autis</a>.'),

  '<h2 id="hitung">Cara menghitung kuota 1 persen</h2>',
  p('Rumusnya sederhana: jumlah seluruh pegawai atau pekerja dikalikan 1 persen untuk perusahaan swasta, atau 2 persen untuk sektor publik. Hasilnya adalah jumlah minimal penyandang disabilitas yang semestinya bekerja di tempat itu. Perusahaan dengan 1.000 pekerja, misalnya, semestinya mempekerjakan paling sedikit 10 penyandang disabilitas.'),
  diag(`${IMG}/kuota-disabilitas-hitung.webp`, 'Tabel contoh hitungan kuota pekerja disabilitas untuk 50, 100, 250, 1.000, dan 5.000 pekerja dengan kuota 1 persen untuk swasta dan 2 persen untuk pemerintah, BUMN, dan BUMD', 'Contoh hitungan kuota sebelum pembulatan. Undang-undang tidak mengatur cara membulatkan angka pecahan.'),
  p('Masalah muncul pada angka pecahan. Perusahaan dengan 250 pekerja menghasilkan angka 2,5 orang, dan perusahaan dengan 50 pekerja menghasilkan 0,5 orang. Pasal 53 tidak mengatur apakah angka itu dibulatkan ke atas atau ke bawah. Karena itu, kami tidak menyarankan memakai satu cara pembulatan seolah-olah sudah pasti. Cara terbaik adalah menanyakan pedoman yang dipakai dinas ketenagakerjaan setempat.'),
  table('Contoh hitungan kuota per ukuran pemberi kerja', ['Jumlah pekerja', 'Swasta, minimal 1 persen', 'Pemerintah, BUMN, BUMD, minimal 2 persen'], [
    ['50', '0,5 orang', '1 orang'],
    ['100', '1 orang', '2 orang'],
    ['250', '2,5 orang', '5 orang'],
    ['1.000', '10 orang', '20 orang'],
    ['5.000', '50 orang', '100 orang'],
  ]),
  p('Satu hal lagi yang sering terlupa: kuota menghitung orang yang benar-benar dipekerjakan, bukan peserta magang atau pelatihan. Magang tetap bernilai sebagai jalan masuk, seperti kami jelaskan di <a href="/artikel/magang-anak-berkebutuhan-khusus">magang anak berkebutuhan khusus</a>, tetapi tujuan akhirnya adalah hubungan kerja yang nyata dengan hak yang sama.'),

  '<h2 id="hak">Hak pekerja disabilitas selain kuota</h2>',
  p('Kuota hanya menjawab pertanyaan berapa banyak. Pertanyaan bagaimana mereka diperlakukan dijawab pasal lain. Pasal 11 UU 8 Tahun 2016 merinci hak pekerjaan, kewirausahaan, dan koperasi bagi penyandang disabilitas. Daftar ini penting dibaca orang tua, karena menjadi pegangan saat anak mulai bekerja dan menghadapi perlakuan yang tidak adil.'),
  table('Hak pekerjaan penyandang disabilitas menurut Pasal 11 UU 8 Tahun 2016', ['Huruf', 'Isi hak'], [
    ['a', 'Memperoleh pekerjaan dari Pemerintah, Pemerintah Daerah, atau swasta tanpa diskriminasi'],
    ['b', 'Memperoleh upah yang sama untuk jenis pekerjaan dan tanggung jawab yang sama'],
    ['c', 'Memperoleh akomodasi yang layak dalam pekerjaan'],
    ['d', 'Tidak diberhentikan karena alasan disabilitas'],
    ['e', 'Mendapatkan program kembali bekerja'],
    ['f', 'Penempatan kerja yang adil, proporsional, dan bermartabat'],
    ['g', 'Kesempatan mengembangkan jenjang karier serta hak normatif yang melekat'],
    ['h', 'Memajukan usaha, memiliki pekerjaan sendiri, wiraswasta, koperasi, dan memulai usaha'],
  ]),
  p('Pasal 49 menegaskan kembali soal upah: pemberi kerja wajib memberi upah yang sama kepada tenaga kerja penyandang disabilitas dengan tenaga kerja bukan penyandang disabilitas untuk jenis pekerjaan dan tanggung jawab yang sama. Pasal 50 mewajibkan pemberi kerja menyediakan akomodasi yang layak serta fasilitas yang mudah diakses, dan membuka mekanisme pengaduan bila hak pekerja disabilitas tidak terpenuhi. Pasal 52 menjamin akses yang setara terhadap program jaminan sosial ketenagakerjaan.'),
  p('Akomodasi yang layak bisa berupa hal sederhana: meja yang bisa dijangkau pengguna kursi roda, instruksi kerja bergambar untuk pekerja dengan disabilitas intelektual, atau ruang tenang bagi pekerja autistik yang mudah kewalahan oleh kebisingan. Cara mengatur uang dari gaji pertama juga perlu dilatih; panduannya ada di <a href="/artikel/money-management-untuk-penyandang-disabilitas">money management untuk penyandang disabilitas</a>.'),

  '<h2 id="rekrutmen">Penyesuaian saat rekrutmen dan penempatan</h2>',
  p('Undang-undang juga memberi ruang penyesuaian sejak proses melamar. Pasal 45 mewajibkan Pemerintah dan Pemerintah Daerah menjamin proses rekrutmen, penerimaan, pelatihan kerja, penempatan kerja, keberlanjutan kerja, dan pengembangan karier yang adil dan tanpa diskriminasi. Pasal 47 dan 48 lalu merinci apa yang dapat dilakukan pemberi kerja.'),
  p('Saat rekrutmen, menurut Pasal 47 pemberi kerja dapat:'),
  ol([
    'melakukan ujian penempatan untuk mengetahui minat, bakat, dan kemampuan;',
    'menyediakan bantuan saat mengisi formulir lamaran dan proses lain yang diperlukan;',
    'menyediakan alat dan bentuk tes yang sesuai dengan kondisi disabilitas;',
    'memberikan keleluasaan waktu mengerjakan tes sesuai kondisi pelamar.',
  ]),
  p('Saat penempatan, menurut Pasal 48 pemberi kerja dapat memberi masa orientasi atau adaptasi di awal masa kerja (termasuk pelatihan atau magang), tempat kerja yang fleksibel tanpa mengurangi target tugas, waktu istirahat, jadwal kerja yang fleksibel, bantuan dalam pelaksanaan pekerjaan, serta izin atau cuti khusus untuk pengobatan. Bagi anak ABK, masa adaptasi ini sering menjadi penentu keberhasilan. Pendekatan pendampingan kerja seperti ini kami uraikan di <a href="/artikel/supported-employment-disabilitas-di-indonesia">supported employment disabilitas di Indonesia</a>.'),
  fig(`${IMG}/kuota-disabilitas-blk.webp`, 1200, 900, 'Gedung UPT Balai Latihan Kerja Dinas Tenaga Kerja Kabupaten Kebumen beratap genteng cokelat dengan papan nama hitam bertulisan kuning di balik pagar biru putih', 'Balai Latihan Kerja milik dinas tenaga kerja di Kebumen, Jawa Tengah. Pasal 46 UU 8 Tahun 2016 mewajibkan lembaga pelatihan kerja bersifat inklusif dan mudah diakses penyandang disabilitas.', CC(F_BLK, 'DARMAS BS 9', 'CC BY-SA 4.0', BYSA)),

  '<h2 id="uld">Unit Layanan Disabilitas dan insentif</h2>',
  p('Supaya kuota tidak berhenti di atas kertas, Pasal 55 mewajibkan Pemerintah Daerah memiliki Unit Layanan Disabilitas (ULD) pada dinas yang menangani urusan ketenagakerjaan, dengan anggaran dari APBD. Ketentuan lebih lanjut diatur dalam ' + ext(URL_PP60, 'PP Nomor 60 Tahun 2020 tentang Unit Layanan Disabilitas Bidang Ketenagakerjaan') + '.'),
  p('Tugas ULD menurut Pasal 55 ayat (2) adalah merencanakan pemenuhan hak atas pekerjaan penyandang disabilitas, memberi informasi kepada pemerintah dan perusahaan swasta tentang rekrutmen sampai pengembangan karier yang adil, mendampingi tenaga kerja penyandang disabilitas, mendampingi pemberi kerja yang menerima mereka, dan mengoordinasikan penyediaan alat bantu kerja. Bagi keluarga, ULD adalah tempat bertanya yang paling tepat tentang lowongan, pelatihan, dan cara menghitung kuota.'),
  fig(`${IMG}/kuota-disabilitas-disnaker.webp`, 1200, 900, 'Kantor Dinas Tenaga Kerja Kabupaten Kebumen berlantai dua dengan papan nama hitam di depan pagar biru putih, tiang daftar layanan berwarna di sisi kiri, dan spanduk posko pengaduan', 'Kantor Dinas Tenaga Kerja Kabupaten Kebumen. Pasal 55 UU 8 Tahun 2016 mewajibkan Unit Layanan Disabilitas berada di dinas ketenagakerjaan daerah seperti ini.', CC(F_DISNAKER, 'DARMAS BS 9', 'CC BY-SA 4.0', BYSA)),
  p('Undang-undang juga memakai pendekatan dorongan, bukan hanya kewajiban. Pasal 54 mewajibkan Pemerintah dan Pemerintah Daerah memberikan insentif kepada perusahaan swasta yang mempekerjakan penyandang disabilitas, dengan bentuk dan tata cara yang diatur dalam peraturan pemerintah. Informasi program dan lowongan dari pemerintah pusat dapat dipantau di ' + ext(URL_KEMNAKER, 'situs resmi Kementerian Ketenagakerjaan') + '. Program pemerintah lain untuk penyandang disabilitas kami rangkum di <a href="/artikel/apa-saja-program-pemerintah-untuk-penyandang-disabilitas">program pemerintah untuk penyandang disabilitas</a>.'),
  p('Di Yogyakarta, layanan rehabilitasi sosial dan pelatihan bagi penyandang disabilitas juga dijalankan pemerintah daerah lewat balai di bawah dinas sosial. Aturan daerahnya kami bahas di <a href="/artikel/perda-disabilitas-diy-yogyakarta">Perda disabilitas DIY</a>.'),
  fig(`${IMG}/kuota-disabilitas-brtpd.webp`, 1200, 900, 'Papan nama Balai Rehabilitasi Terpadu Penyandang Disabilitas milik Dinas Sosial Daerah Istimewa Yogyakarta di Pundong, Bantul, di balik pagar tembok putih dengan pohon palem dan pepohonan rindang', 'Balai Rehabilitasi Terpadu Penyandang Disabilitas (BRTPD) Dinas Sosial DIY di Pundong, Bantul. Balai seperti ini menjadi salah satu tempat pelatihan keterampilan sebelum memasuki dunia kerja.', CC(F_BRTPD, 'Sekar Kinanthi Kidung Wening', 'CC BY-SA 4.0', BYSA)),

  '<h2 id="sanksi">Bagaimana jika kuota tidak dipenuhi</h2>',
  p('Ini pertanyaan yang paling sering diajukan, dan jawabannya perlu jujur. Pasal 53 sendiri tidak memuat sanksi. Ketentuan pidana UU 8 Tahun 2016 ada di Pasal 144 dan 145, dan keduanya mengatur hal lain, yaitu tindakan terhadap hak kepemilikan penyandang disabilitas tanpa penetapan pengadilan dan tindakan menghalangi hak politik. Tidak ada pasal pidana yang secara khusus menghukum perusahaan karena tidak memenuhi kuota.'),
  p('Sanksi administratif yang tertulis di bab pekerjaan ada di Pasal 50 ayat (4), dan sasarannya pemberi kerja yang tidak menyediakan akomodasi yang layak dan fasilitas yang mudah diakses. Bentuknya bertingkat:'),
  table('Sanksi administratif Pasal 50 ayat (4) UU 8 Tahun 2016', ['Tingkat', 'Bentuk sanksi'], [
    ['1', 'Teguran tertulis'],
    ['2', 'Penghentian kegiatan operasional'],
    ['3', 'Pembekuan izin usaha'],
    ['4', 'Pencabutan izin usaha'],
  ]),
  p('Jadi, ketika pekerja disabilitas sudah diterima, kewajiban menyediakan akomodasi punya sanksi yang tegas. Sementara itu, pemenuhan kuota lebih banyak didorong lewat pengawasan, pendampingan ULD, dan insentif. Bila hak anak Anda sebagai pekerja tidak dipenuhi, langkah pertama adalah memakai mekanisme pengaduan internal yang wajib dibuka perusahaan menurut Pasal 50 ayat (2), lalu melapor ke dinas ketenagakerjaan setempat.'),

  '<h2 id="wirausaha">Jalur kerja lain: wirausaha dan usaha bersama</h2>',
  p('Kuota bukan satu-satunya jalan. Tidak semua penyandang disabilitas cocok dengan pekerjaan kantoran, dan sebagian justru berkembang ketika memiliki usaha sendiri. Undang-undang menyiapkan jalur ini: Pasal 56 mewajibkan pemerintah memberi jaminan, perlindungan, dan pendampingan untuk berwirausaha; Pasal 57 mewajibkan bantuan dan akses permodalan; Pasal 58 memperluas peluang pengadaan barang dan jasa bagi unit usaha mandiri penyandang disabilitas; Pasal 59 mewajibkan fasilitasi pemasaran; dan Pasal 60 mewajibkan pelatihan kewirausahaan.'),
  fig(`${IMG}/kuota-disabilitas-batik.webp`, 1200, 675, 'Sekelompok orang dewasa, termasuk anggota komunitas penyandang disabilitas, berdiri di sisi kain panjang yang dibentangkan sambil memercikkan pewarna ungu untuk membuat batik ciprat di halaman bangunan berwarna kuning', 'Anggota Omah Difabel, program UMKM disabilitas Yayasan Lingkar Sosial Indonesia, membatik ciprat bersama di Lawang pada November 2025. Usaha bersama seperti ini adalah jalur kerja yang didukung Pasal 56 sampai 60 UU 8 Tahun 2016.', CC(F_BATIK, 'Ken Kerta', 'CC BY-SA 4.0', BYSA)),
  p('Di banyak daerah, kelompok usaha difabel menghasilkan batik, kerajinan, makanan olahan, dan jasa. Bagi anak dengan disabilitas intelektual, bekerja dalam kelompok yang didampingi sering lebih aman daripada bekerja sendiri. Pilihan ini bisa dipertimbangkan sejak masa sekolah, terutama bila anak menyukai kegiatan tangan yang berulang dan terstruktur.'),

  '<h2 id="orang-tua">Apa artinya bagi orang tua anak berkebutuhan khusus</h2>',
  p('Aturan kuota membuka pintu, tetapi anak tetap perlu bekal untuk melewatinya. Di YUKA kami melihat bahwa keberhasilan kerja jarang ditentukan oleh satu keterampilan teknis saja. Yang lebih menentukan adalah kemandirian sehari-hari, kemampuan mengikuti instruksi, ketahanan menghadapi rutinitas, dan keberanian meminta bantuan.'),
  diag(`${IMG}/kuota-disabilitas-alur.webp`, 'Diagram lima tahap jalan anak ABK menuju pekerjaan: sekolah, pelatihan vokasional, magang, melamar lewat ULD dan pemberi kerja, lalu bekerja dengan masa adaptasi dan akomodasi layak', 'Gambaran persiapan anak berkebutuhan khusus dari bangku sekolah sampai bekerja. Setiap anak menempuh jalannya dengan kecepatan berbeda.'),
  p('Langkah yang bisa dimulai orang tua sejak sekarang:'),
  ol([
    '<strong>Tulis rencana masa depan bersama anak.</strong> Pendekatan <a href="/artikel/person-centered-planning-disabilitas">person centered planning</a> menempatkan minat dan pilihan anak di pusat rencana.',
    '<strong>Dorong pendidikan vokasional</strong> di sekolah atau lembaga pelatihan. Contoh programnya ada di <a href="/artikel/pendidikan-vokasional-untuk-anak-disabilitas">pendidikan vokasional untuk anak disabilitas</a>.',
    '<strong>Urus dokumen pendukung</strong>, termasuk kartu penyandang disabilitas bila dibutuhkan. Caranya ada di <a href="/artikel/bagaimana-cara-membuat-kartu-disabilitas">cara membuat kartu disabilitas</a>.',
    '<strong>Pertimbangkan jalur pendidikan lanjutan</strong> bila anak mampu dan berminat; lihat <a href="/artikel/persiapan-anak-abk-masuk-universitas">persiapan anak ABK masuk universitas</a>.',
    '<strong>Kenali hak anak</strong> di semua bidang, termasuk pendidikan dan kesehatan, seperti kami bahas di <a href="/artikel/hak-pendidikan-anak-disabilitas-intelektual">hak pendidikan anak disabilitas intelektual</a> dan <a href="/artikel/asuransi-kesehatan-untuk-anak-disabilitas">asuransi kesehatan untuk anak disabilitas</a>.',
  ]),
  p('Kalau Anda ingin berdiskusi tentang persiapan anak menuju kemandirian dan dunia kerja, tim YUKA membuka konsultasi untuk orang tua. Silakan hubungi kami lewat halaman <a href="/kontak">kontak YUKA</a>.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(faq),
];

const articles = [
  {
    slug: 'kuota-pekerja-disabilitas-1-persen-perusahaan',
    titleTag: 'Kuota Pekerja Disabilitas 1 Persen untuk Perusahaan | YUKA',
    metaDesc: 'Kuota pekerja disabilitas 1 persen untuk perusahaan swasta dan 2 persen untuk pemerintah, BUMN, BUMD menurut UU 8/2016: cara hitung, hak pekerja, ULD, dan sanksi.',
    keywords: 'kuota pekerja disabilitas 1 persen perusahaan, kuota disabilitas 2 persen BUMN, Pasal 53 UU 8 2016, hak pekerja disabilitas',
    ogTitle: 'Kuota Pekerja Disabilitas 1 Persen untuk Perusahaan',
    ogDesc: 'Isi Pasal 53 UU 8 Tahun 2016, cara menghitung kuota, hak pekerja disabilitas, peran ULD, dan bekal yang perlu disiapkan orang tua.',
    h1: 'Kuota Pekerja Disabilitas 1 Persen di Perusahaan: Aturan, Cara Hitung, dan Hak Pekerja',
    crumb: 'Kuota Pekerja Disabilitas 1 Persen',
    category: 'Panduan Orang Tua',
    datePublished: '2026-11-14T08:00:00+07:00', dateModified: '2026-11-14T08:00:00+07:00',
    dateDisplay: '14 November 2026', readTime: '11 menit baca',
    image: {
      file: `${IMG}/kuota-disabilitas-hero.webp`, w: 1200, h: 675,
      alt: 'Untung, guru penyandang disabilitas di Sumenep, menulis di papan tulis dengan kaki kanannya di depan kelas, sementara murid berseragam terlihat dari belakang',
      caption: 'Untung, guru Madrasah Ibtidaiyah Miftahul Ulum di Sumenep, Madura, menulis di papan tulis dengan kakinya (Oktober 2022). Penyandang disabilitas berhak atas pekerjaan tanpa diskriminasi menurut UU 8 Tahun 2016.',
      credit: CC(F_HERO, 'Achmad Fazeri', 'CC BY-SA 4.0', BYSA),
    },
    bodyHtml: body.join('\n'), faq,
    related: [
      { href: '/artikel/supported-employment-disabilitas-di-indonesia', title: 'Supported Employment Disabilitas', desc: 'Pendampingan kerja bagi penyandang disabilitas.' },
      { href: '/artikel/pekerjaan-untuk-penyandang-disabilitas', title: 'Pekerjaan untuk Penyandang Disabilitas', desc: 'Pilihan pekerjaan dan cara memulainya.' },
      { href: '/artikel/magang-anak-berkebutuhan-khusus', title: 'Magang Anak Berkebutuhan Khusus', desc: 'Panduan magang yang aman dan bermakna.' },
    ],
    tags: ['Kuota Kerja', 'Ketenagakerjaan', 'Disabilitas'],
    sources: [
      { url: URL_UU8, label: 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas, peraturan.go.id' },
      { url: URL_UU8_TEKS, label: 'Teks UU Nomor 8 Tahun 2016 (Pasal 11, 45 sampai 60, 144, 145), Wikisumber' },
      { url: URL_PP60, label: 'PP Nomor 60 Tahun 2020 tentang Unit Layanan Disabilitas Bidang Ketenagakerjaan' },
      { url: URL_KEMNAKER, label: 'Kementerian Ketenagakerjaan, situs resmi' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 14 November 2026. Artikel ini menjelaskan isi undang-undang untuk keperluan informasi, bukan nasihat hukum. Untuk kasus tertentu, konsultasikan dengan dinas ketenagakerjaan atau penasihat hukum.',
  },
];

function prepare() {
  fs.mkdirSync(path.join(ROOT, IMG), { recursive: true });
  for (const [file, markup] of Object.entries(diagrams)) fs.writeFileSync(imgPath(file.replace(/\.webp$/, '.svg')), markup);
  console.log(`Wrote ${Object.keys(diagrams).length} SVG diagrams into ${IMG}/`);
}
async function raster() {
  const sharp = require('C:/Users/Mcsyauqi/AppData/Roaming/npm/node_modules/sharp');
  for (const file of Object.keys(diagrams)) {
    const buf = await sharp(fs.readFileSync(imgPath(file.replace(/\.webp$/, '.svg'))), { density: 150 }).resize(1200, 760, { fit: 'fill' }).webp({ quality: 90 }).toBuffer();
    fs.writeFileSync(imgPath(file), buf);
    console.log(`Rasterized ${file} (${buf.length} bytes)`);
  }
}
function render() {
  for (const a of articles) {
    fs.writeFileSync(path.join(articleDir, `${a.slug}.html`), renderArticlePage(a));
    console.log(`Rendered artikel/${a.slug}.html`);
  }
}

if (require.main === module) {
  if (process.argv.includes('--prepare')) prepare();
  else if (process.argv.includes('--raster')) raster();
  else render();
}

module.exports = { articles, diagrams };

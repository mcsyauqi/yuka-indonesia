'use strict';
/*
 * Generator artikel 13 November 2026 (cycle #96 /cek-daily-artikel, tambal hari kosong).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5", baris 199: "asuransi kesehatan untuk anak disabilitas".
 * Belum punya artikel (tidak ada slug asuransi/bpjs/jaminan di artikel/).
 *
 * Fakta: UU 8/2016 (Pasal 12, 61, 62, 93) dan Perpres 82/2018 (Pasal 46, 47, 51, 52), teks dari
 * peraturan.go.id. Foto: Wikimedia Commons (CC BY-SA 4.0, CC BY 4.0). Diagram SVG sendiri. Nol AI.
 *
 *   node scripts/generate-gap-20261113.js --prepare   # tulis SVG diagram
 *   node scripts/generate-gap-20261113.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-gap-20261113.js             # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const BY4 = 'https://creativecommons.org/licenses/by/4.0/';
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
const URL_PP82 = 'https://peraturan.go.id/id/perpres-no-82-tahun-2018';
const URL_BPJS = 'https://www.bpjs-kesehatan.go.id/';

const F_HERO = 'https://commons.wikimedia.org/wiki/File:Bpjs_kesehatan_office_soreang.jpg';
const F_PKM = 'https://commons.wikimedia.org/wiki/File:Puskesmas_Kelurahan_Gelora.jpg';
const F_KURSI = 'https://commons.wikimedia.org/wiki/File:Kursi_Roda.jpg';

const sections = [
  ['pilihan', 'Pilihan perlindungan kesehatan untuk anak disabilitas'],
  ['hukum', 'Hak anak disabilitas atas layanan kesehatan menurut undang-undang'],
  ['jkn', 'Apa saja yang dijamin JKN'],
  ['tidak', 'Layanan yang tidak dijamin JKN'],
  ['alur', 'Alur berobat dengan JKN'],
  ['bayi', 'Mendaftarkan anak sejak lahir'],
  ['swasta', 'Kapan asuransi swasta perlu dipertimbangkan'],
  ['polis', 'Hal yang wajib dicek sebelum membeli polis'],
  ['bantuan', 'Bantuan bagi keluarga tidak mampu'],
  ['faq', 'Pertanyaan umum'],
];

const faq = [
  { q: 'Apakah anak disabilitas bisa menjadi peserta BPJS Kesehatan?', a: 'Bisa. Jaminan Kesehatan Nasional terbuka untuk setiap penduduk, dan UU Nomor 8 Tahun 2016 Pasal 62 ayat (3) menyebut Pemerintah menjamin pelayanan kesehatan bagi penyandang disabilitas dalam program jaminan kesehatan nasional. Anak didaftarkan sebagai anggota keluarga peserta sesuai segmen kepesertaan orang tuanya.' },
  { q: 'Apakah terapi dan rehabilitasi untuk anak disabilitas ditanggung JKN?', a: 'Perpres Nomor 82 Tahun 2018 Pasal 47 mencantumkan rehabilitasi medis sebagai bagian pelayanan kesehatan rujukan tingkat lanjutan yang dijamin. Layanan diberikan sesuai indikasi medis dan prosedur rujukan, jadi jenis dan jumlah sesi ditentukan dokter di fasilitas kesehatan yang bekerja sama dengan BPJS Kesehatan.' },
  { q: 'Apakah alat bantu seperti alat bantu dengar dan kursi roda ditanggung?', a: 'Pasal 47 ayat (3) Perpres 82 Tahun 2018 menyebut alat kesehatan yang dijamin mencakup alat bantu kesehatan. Jenis, syarat, dan batas biayanya diatur dalam ketentuan teknis yang dapat berubah, jadi tanyakan langsung ke fasilitas kesehatan atau BPJS Kesehatan sebelum mengajukan.' },
  { q: 'Apa saja yang tidak dijamin JKN?', a: 'Pasal 52 Perpres 82 Tahun 2018 antara lain mengecualikan pelayanan di fasilitas yang tidak bekerja sama dengan BPJS Kesehatan kecuali darurat, pelayanan di luar negeri, pelayanan untuk tujuan estetik, ortodonsi, pengobatan komplementer dan alternatif yang belum dinyatakan efektif, serta tindakan yang masih berupa percobaan.' },
  { q: 'Apakah bayi baru lahir langsung dijamin JKN?', a: 'Pasal 46 ayat (5) Perpres 82 Tahun 2018 menyebut manfaat jaminan kesehatan berlaku bagi bayi baru lahir dari peserta paling lama 28 hari sejak dilahirkan. Segera daftarkan bayi agar perlindungannya tidak terputus, terutama bila kondisi khusus sudah terdeteksi sejak lahir.' },
  { q: 'Apakah asuransi swasta masih perlu jika sudah punya BPJS Kesehatan?', a: 'Tidak wajib. Asuransi kesehatan tambahan berguna bila keluarga ingin kelas perawatan lebih tinggi atau layanan di luar jaringan JKN. Pasal 51 Perpres 82 Tahun 2018 mengizinkan peserta meningkatkan perawatan dengan asuransi kesehatan tambahan atau membayar selisih biaya.' },
  { q: 'Apakah asuransi swasta boleh menolak anak disabilitas?', a: 'Setiap perusahaan asuransi menilai risiko dan menuliskan pengecualian di polisnya, misalnya untuk kondisi yang sudah ada sebelum polis dibeli. Minta penjelasan tertulis tentang pengecualian, masa tunggu, dan batas manfaat sebelum membayar premi, dan bandingkan beberapa produk.' },
  { q: 'Adakah bantuan untuk keluarga tidak mampu yang punya anak disabilitas?', a: 'Ada. Perpres 82 Tahun 2018 mengatur Penerima Bantuan Iuran untuk fakir miskin dan orang tidak mampu, sehingga iurannya dibayar pemerintah. UU 8 Tahun 2016 Pasal 93 juga mengatur jaminan sosial bagi penyandang disabilitas miskin dalam bentuk asuransi kesejahteraan sosial, bantuan langsung berkelanjutan, dan bantuan khusus.' },
];

addDiagram(`${IMG}/asuransi-disabilitas-alur-jkn.webp`, svg.flow('Alur berobat dengan JKN', 'Gambaran umum untuk kasus tidak darurat', [
  { h: 'FKTP', d: 'Puskesmas, klinik, atau dokter keluarga tempat anak terdaftar.' },
  { h: 'Pemeriksaan', d: 'Dokter menilai kebutuhan anak dan menangani yang bisa di tingkat pertama.' },
  { h: 'Rujukan', d: 'Bila perlu spesialis, dokter membuat surat rujukan.' },
  { h: 'Rumah sakit', d: 'Spesialis, rehabilitasi medis, dan alat bantu sesuai indikasi.' },
  { h: 'Kontrol', d: 'Kunjungan lanjutan dan rujuk balik sesuai anjuran dokter.' },
]));
addDiagram(`${IMG}/asuransi-disabilitas-cek-polis.webp`, svg.grid('Lima hal yang dicek sebelum membeli polis', 'Minta jawaban tertulis dari perusahaan asuransi', ['Yang dicek', 'Pertanyaan untuk perusahaan asuransi'], [
  ['Pengecualian', 'Apakah kondisi anak yang sudah ada dikecualikan dari manfaat?'],
  ['Masa tunggu', 'Berapa lama sampai klaim untuk kondisi tertentu bisa diajukan?'],
  ['Batas manfaat', 'Berapa batas per tahun dan per jenis layanan?'],
  ['Jaringan', 'Apakah rumah sakit dan terapis langganan anak termasuk rekanan?'],
  ['Koordinasi JKN', 'Bagaimana klaim dihitung bila anak juga peserta JKN?'],
], [300, 804]));

const body = [
  p('<strong>Asuransi kesehatan untuk anak disabilitas</strong> di Indonesia bertumpu pada Jaminan Kesehatan Nasional (JKN) yang dikelola BPJS Kesehatan, lalu bisa dilengkapi asuransi kesehatan swasta bila keluarga membutuhkan kelas perawatan atau jaringan rumah sakit yang lebih luas. Undang-undang menjamin anak penyandang disabilitas berhak atas layanan kesehatan tanpa diskriminasi, termasuk alat bantu kesehatan sesuai kebutuhannya.'),
  p('Panduan ini kami susun untuk orang tua anak berkebutuhan khusus yang sedang memilah perlindungan biaya kesehatan. Kami membahas hak anak menurut UU Nomor 8 Tahun 2016, layanan yang dijamin dan tidak dijamin JKN menurut Perpres Nomor 82 Tahun 2018, alur berobat, kapan asuransi swasta perlu dipertimbangkan, dan apa yang wajib dicek sebelum membeli polis. Kami tidak menyebut besaran iuran, karena angkanya sudah beberapa kali diubah lewat peraturan perubahan.'),
  toc(sections),

  '<h2 id="pilihan">Pilihan perlindungan kesehatan untuk anak disabilitas</h2>',
  p('Secara garis besar ada tiga lapis perlindungan yang bisa dipakai keluarga. Lapis pertama adalah JKN, yang menjadi dasar dan menjamin manfaat medis sesuai indikasi tanpa membedakan besaran iuran. Lapis kedua adalah asuransi kesehatan tambahan dari perusahaan swasta atau dari kantor orang tua. Lapis ketiga adalah bantuan pemerintah bagi keluarga tidak mampu, termasuk iuran JKN yang dibayarkan negara.'),
  table('Perbandingan pilihan perlindungan kesehatan untuk anak disabilitas', ['Pilihan', 'Siapa yang membayar', 'Kekuatan', 'Hal yang perlu diperhatikan'], [
    ['JKN mandiri atau dari pemberi kerja', 'Keluarga atau pemberi kerja', 'Manfaat medis sesuai indikasi, termasuk rehabilitasi medis dan alat bantu kesehatan', 'Wajib lewat fasilitas yang bekerja sama dan prosedur rujukan'],
    ['JKN Penerima Bantuan Iuran', 'Pemerintah', 'Iuran tidak dibayar keluarga', 'Untuk fakir miskin dan orang tidak mampu sesuai data pemerintah'],
    ['Asuransi kesehatan tambahan', 'Keluarga atau pemberi kerja', 'Bisa menambah kelas perawatan dan jaringan rumah sakit', 'Ada pengecualian polis, masa tunggu, dan batas manfaat'],
    ['Bantuan sosial disabilitas', 'Pemerintah dan pemerintah daerah', 'Bantuan langsung dan bantuan khusus', 'Bergantung pada program dan kriteria daerah'],
  ]),
  p('Bagi kebanyakan keluarga, urutan yang paling masuk akal adalah memastikan anak terdaftar dan aktif di JKN lebih dulu, baru menilai apakah perlu tambahan. Asuransi swasta tanpa JKN sering justru meninggalkan celah, karena banyak polis membatasi manfaat untuk kondisi yang sudah ada sejak lahir. Pembahasan biaya layanan terapi secara umum ada di <a href="/artikel/berapa-biaya-terapi-bicara-anak">berapa biaya terapi bicara anak</a>.'),
  fig(`${IMG}/asuransi-disabilitas-puskesmas.webp`, 1200, 900, 'Bagian depan Puskesmas Kelurahan Gelora di Jakarta dengan papan hijau bertuliskan Rawat Jalan dan daftar unit layanan, di samping taman kecil dan trotoar', 'Puskesmas adalah fasilitas kesehatan tingkat pertama tempat banyak peserta JKN terdaftar. Dari sini dokter menangani atau merujuk anak ke rumah sakit.', CC(F_PKM, 'Hutomo', 'CC BY 4.0', BY4)),

  '<h2 id="hukum">Hak anak disabilitas atas layanan kesehatan menurut undang-undang</h2>',
  p('Dasar hukum utamanya adalah ' + ext(URL_UU8, 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas') + '. Pasal 12 menyebut hak kesehatan penyandang disabilitas, antara lain hak memperoleh kesamaan dan kesempatan pelayanan kesehatan yang aman, bermutu, dan terjangkau, serta hak memperoleh alat bantu kesehatan berdasarkan kebutuhannya. Hak ini berlaku untuk anak, tidak hanya untuk orang dewasa.'),
  p('Kewajiban penyedia layanan diatur di pasal berikutnya. Pasal 61 mewajibkan Pemerintah, Pemerintah Daerah, dan swasta memastikan fasilitas pelayanan kesehatan menerima pasien penyandang disabilitas dan menyediakan fasilitas tanpa diskriminasi. Pasal 62 mewajibkan pelayanan kesehatan tanpa diskriminasi, diberikan tenaga kesehatan yang kompeten, dan ayat (3)-nya menegaskan Pemerintah menjamin pelayanan kesehatan bagi penyandang disabilitas dalam program jaminan kesehatan nasional.'),
  table('Pasal UU 8 Tahun 2016 yang relevan dengan perlindungan kesehatan anak', ['Pasal', 'Isi pokok', 'Artinya bagi orang tua'], [
    ['Pasal 12', 'Hak kesehatan, termasuk pelayanan yang aman, bermutu, terjangkau dan alat bantu kesehatan sesuai kebutuhan', 'Anak berhak mendapat alat bantu dan layanan yang layak'],
    ['Pasal 61', 'Fasilitas kesehatan wajib menerima pasien penyandang disabilitas tanpa diskriminasi', 'Fasilitas tidak boleh menolak anak karena disabilitasnya'],
    ['Pasal 62', 'Pelayanan tanpa diskriminasi oleh tenaga kompeten; dijamin dalam JKN', 'JKN adalah jalur utama perlindungan biaya'],
    ['Pasal 93', 'Jaminan sosial bagi penyandang disabilitas miskin dalam bentuk asuransi kesejahteraan sosial, bantuan langsung, dan bantuan khusus', 'Keluarga tidak mampu bisa mengakses bantuan tambahan'],
  ]),
  p('Hak ini juga berkaitan dengan hak lain anak disabilitas, misalnya hak pendidikan yang kami bahas di <a href="/artikel/hak-pendidikan-anak-disabilitas-intelektual">hak pendidikan anak disabilitas intelektual</a>. Pemahaman tentang hak membuat orang tua lebih percaya diri saat berhadapan dengan fasilitas kesehatan.'),

  '<h2 id="jkn">Apa saja yang dijamin JKN</h2>',
  p('Rincian manfaat JKN diatur dalam ' + ext(URL_PP82, 'Perpres Nomor 82 Tahun 2018 tentang Jaminan Kesehatan') + ' beserta perubahannya. Pasal 46 menyebut setiap peserta berhak atas manfaat yang mencakup pelayanan promotif, preventif, kuratif, dan rehabilitatif, termasuk obat, alat kesehatan, dan bahan medis habis pakai sesuai kebutuhan medis. Ayat (3) menegaskan manfaat medis diberikan sesuai indikasi medis dan tidak dibedakan berdasarkan besaran iuran.'),
  p('Pasal 47 membagi layanan menjadi dua tingkat. Di tingkat pertama ada pemeriksaan, pengobatan, konsultasi, tindakan nonspesialistik, obat, pemeriksaan laboratorium pratama, dan rawat inap tingkat pertama. Di tingkat lanjutan ada konsultasi dan tindakan spesialistik, pemeriksaan penunjang lanjutan, <strong>rehabilitasi medis</strong>, serta obat dan alat kesehatan. Ayat (3) pasal yang sama menegaskan alat kesehatan yang dijamin termasuk alat bantu kesehatan.'),
  table('Layanan JKN yang paling sering dibutuhkan anak disabilitas', ['Kebutuhan anak', 'Dasar dalam Perpres 82/2018', 'Catatan praktis'], [
    ['Konsultasi dokter umum dan pemantauan tumbuh kembang', 'Pasal 47 ayat (1) huruf a', 'Mulai dari FKTP tempat anak terdaftar'],
    ['Konsultasi dokter spesialis anak, saraf, atau rehabilitasi medik', 'Pasal 47 ayat (1) huruf b', 'Perlu rujukan dari FKTP, kecuali darurat'],
    ['Fisioterapi, terapi okupasi, dan terapi wicara di rumah sakit', 'Rehabilitasi medis, Pasal 47 ayat (1) huruf b', 'Diberikan sesuai indikasi dan program dokter'],
    ['Alat bantu kesehatan, misalnya alat bantu dengar atau alat bantu gerak', 'Pasal 47 ayat (3)', 'Syarat dan batas biaya mengikuti ketentuan teknis yang berlaku'],
    ['Obat rutin', 'Pasal 46 dan 47', 'Sesuai formularium dan resep dokter'],
  ]),
  p('Satu hal penting: kelas ruang perawatan termasuk manfaat nonmedis yang mengikuti besaran iuran, sedangkan mutu tindakan medisnya sama. Karena aturan kelas rawat sedang bertransisi lewat peraturan perubahan, cek ketentuan terbaru di ' + ext(URL_BPJS, 'situs resmi BPJS Kesehatan') + ' sebelum memutuskan menaikkan atau menurunkan kelas.'),
  fig(`${IMG}/asuransi-disabilitas-kursi-roda.webp`, 1200, 900, 'Kursi roda standar berbahan logam dengan dudukan dan sandaran biru diparkir di lantai keramik putih di dalam rumah, di samping kursi kayu hijau', 'Kursi roda di sebuah rumah di Indonesia. Undang-undang menyebut alat bantu kesehatan sebagai hak penyandang disabilitas, dan JKN memasukkan alat bantu kesehatan ke dalam alat kesehatan yang dijamin.', CC(F_KURSI, 'DARMAS SB 9', 'CC BY-SA 4.0', BYSA)),

  '<h2 id="tidak">Layanan yang tidak dijamin JKN</h2>',
  p('Mengetahui yang tidak dijamin sama pentingnya dengan mengetahui yang dijamin, karena di sinilah biaya tak terduga biasanya muncul. Pasal 52 Perpres 82 Tahun 2018 memuat daftar panjang pengecualian. Beberapa yang paling relevan untuk keluarga anak disabilitas:'),
  ul([
    '<strong>Fasilitas yang tidak bekerja sama</strong> dengan BPJS Kesehatan, kecuali dalam keadaan darurat. Klinik terapi swasta di luar jaringan umumnya dibayar sendiri.',
    '<strong>Pengobatan komplementer, alternatif, dan tradisional</strong> yang belum dinyatakan efektif berdasarkan penilaian teknologi kesehatan.',
    '<strong>Tindakan medis yang masih berupa percobaan atau eksperimen.</strong> Orang tua sering ditawari terapi baru dengan klaim besar; selain tidak dijamin, keamanannya perlu dipertanyakan.',
    '<strong>Pelayanan untuk tujuan estetik</strong> dan meratakan gigi atau ortodonsi.',
    '<strong>Pelayanan kesehatan di luar negeri.</strong>',
    '<strong>Perbekalan kesehatan rumah tangga</strong>, misalnya kebutuhan harian yang bukan alat kesehatan.',
  ]),
  p('Daftar ini menjelaskan mengapa banyak keluarga tetap mengeluarkan biaya sendiri untuk terapi di klinik swasta atau pusat terapi di luar rumah sakit. Kalau Anda sedang memilih tempat terapi, tanyakan sejak awal apakah layanan itu bekerja sama dengan BPJS Kesehatan. Daftar tempat terapi di sekitar Yogyakarta ada di <a href="/artikel/tempat-terapi-anak-jogja">tempat terapi anak Jogja</a>.'),

  '<h2 id="alur">Alur berobat dengan JKN</h2>',
  p('JKN memakai sistem rujukan berjenjang. Untuk kasus yang tidak darurat, anak memeriksakan diri lebih dulu di fasilitas kesehatan tingkat pertama (FKTP) tempat ia terdaftar, misalnya puskesmas, klinik pratama, atau dokter keluarga. Bila dokter menilai anak membutuhkan spesialis atau rehabilitasi medis, dokter membuat rujukan ke rumah sakit.'),
  diag(`${IMG}/asuransi-disabilitas-alur-jkn.webp`, 'Diagram alur berobat dengan JKN dalam lima tahap: FKTP tempat anak terdaftar, pemeriksaan dokter, surat rujukan, layanan rumah sakit, dan kontrol lanjutan', 'Alur umum berobat dengan JKN untuk kasus tidak darurat. Keadaan darurat bisa langsung ke unit gawat darurat.'),
  p('Beberapa kebiasaan yang memudahkan orang tua:'),
  ol([
    '<strong>Pilih FKTP yang paling mudah dijangkau</strong> dan, bila memungkinkan, yang dokternya terbiasa menangani anak berkebutuhan khusus.',
    '<strong>Simpan ringkasan riwayat kesehatan anak</strong>: diagnosis, hasil asesmen, obat rutin, dan alat bantu yang dipakai.',
    '<strong>Catat masa berlaku rujukan</strong> dan jadwal kontrol agar terapi tidak terputus.',
    '<strong>Tanyakan program rehabilitasi secara tertulis</strong>: jenis terapi, frekuensi, dan perkiraan lama program.',
    '<strong>Pastikan status kepesertaan aktif</strong> sebelum jadwal kontrol, terutama bila iuran dibayar mandiri.',
  ]),
  p('Kalau anak masih dalam tahap awal deteksi, ketahui juga tanda yang perlu diperiksakan. Panduan kami tentang <a href="/artikel/intervensi-dini">intervensi dini</a> dan <a href="/artikel/klinik-tumbuh-kembang-anak-yogyakarta">klinik tumbuh kembang anak Yogyakarta</a> bisa membantu.'),

  '<h2 id="bayi">Mendaftarkan anak sejak lahir</h2>',
  p('Sebagian kondisi disabilitas sudah terdeteksi saat lahir atau di bulan-bulan pertama. Karena itu, jangan menunda pendaftaran bayi. Pasal 46 ayat (5) Perpres 82 Tahun 2018 menyebut manfaat jaminan kesehatan juga berlaku bagi bayi baru lahir dari peserta paling lama 28 hari sejak dilahirkan. Setelah itu, perlindungan bergantung pada pendaftaran bayi sebagai peserta.'),
  p('Pendaftaran sejak dini juga penting untuk rencana jangka panjang. Asuransi swasta umumnya menilai kondisi kesehatan saat calon tertanggung mendaftar, sehingga kondisi yang sudah diketahui bisa masuk daftar pengecualian. JKN tidak memakai seleksi kesehatan seperti itu, sehingga menjadi fondasi yang paling aman bagi anak dengan kondisi bawaan.'),

  '<h2 id="swasta">Kapan asuransi swasta perlu dipertimbangkan</h2>',
  p('Asuransi kesehatan swasta tidak wajib, tetapi bisa berguna dalam situasi tertentu. ' + ext(URL_PP82, 'Pasal 51 Perpres 82 Tahun 2018') + ' mengatur bahwa peserta dapat meningkatkan perawatan yang lebih tinggi dari haknya dengan mengikuti asuransi kesehatan tambahan atau membayar selisih biaya. Selisih itu bisa dibayar peserta, pemberi kerja, atau asuransi kesehatan tambahan.'),
  p('Pertimbangkan asuransi tambahan bila:'),
  ul([
    'Orang tua mendapat asuransi kesehatan dari kantor yang bisa mencakup anak, sehingga tidak ada premi tambahan.',
    'Keluarga ingin kelas perawatan lebih tinggi saat rawat inap.',
    'Dokter atau rumah sakit yang sudah lama menangani anak tidak bekerja sama dengan BPJS Kesehatan.',
    'Keluarga sanggup membayar premi rutin tanpa mengorbankan biaya terapi dan pendidikan anak.',
  ]),
  p('Sebaliknya, bila anggaran terbatas, dana yang disiapkan untuk premi sering lebih bermanfaat bila dialokasikan ke terapi di luar jaringan JKN atau kebutuhan pendidikan. Untuk gambaran biaya pendamping sekolah, baca <a href="/artikel/biaya-shadow-teacher-per-bulan">biaya shadow teacher per bulan</a>.'),

  '<h2 id="polis">Hal yang wajib dicek sebelum membeli polis</h2>',
  p('Polis asuransi kesehatan swasta adalah kontrak, dan isi kontrak itulah yang menentukan klaim dibayar atau tidak. Bagi anak dengan kondisi khusus, bagian yang paling menentukan biasanya ada di halaman pengecualian. Minta salinan polis dan ringkasan produk sebelum membayar premi, lalu ajukan pertanyaan berikut secara tertulis.'),
  diag(`${IMG}/asuransi-disabilitas-cek-polis.webp`, 'Diagram lima hal yang dicek sebelum membeli polis asuransi kesehatan: pengecualian kondisi, masa tunggu, batas manfaat, rumah sakit rekanan, dan koordinasi dengan JKN', 'Lima hal yang perlu ditanyakan sebelum membeli polis asuransi kesehatan untuk anak dengan kondisi khusus.'),
  table('Pertanyaan untuk agen atau perusahaan asuransi', ['Pertanyaan', 'Mengapa penting'], [
    ['Apakah kondisi anak saat ini dikecualikan dari manfaat?', 'Polis bisa tetap terbit tetapi tidak membayar klaim untuk kondisi yang sudah ada'],
    ['Berapa lama masa tunggu untuk penyakit atau kondisi tertentu?', 'Klaim pada masa tunggu bisa ditolak'],
    ['Apakah terapi rehabilitasi dan alat bantu termasuk manfaat?', 'Banyak produk berfokus pada rawat inap, bukan terapi rutin'],
    ['Apa batas manfaat per tahun dan per jenis layanan?', 'Terapi jangka panjang bisa cepat menghabiskan batas'],
    ['Bagaimana klaim dihitung bila anak juga peserta JKN?', 'Menentukan berapa bagian yang benar-benar ditanggung'],
  ]),
  p('Jangan menyembunyikan kondisi anak saat mengisi formulir. Informasi yang tidak lengkap bisa menjadi alasan penolakan klaim di kemudian hari. Lebih baik mendapat polis dengan pengecualian yang jelas daripada polis yang tampak lengkap tetapi bermasalah saat dibutuhkan.'),

  '<h2 id="bantuan">Bantuan bagi keluarga tidak mampu</h2>',
  p('Biaya kesehatan anak disabilitas bisa berat, dan negara menyediakan jalur bantuan. Perpres 82 Tahun 2018 mengatur Penerima Bantuan Iuran (PBI) Jaminan Kesehatan, yaitu fakir miskin dan orang tidak mampu yang iurannya dibayar pemerintah. Pendaftaran PBI mengikuti data kesejahteraan sosial, sehingga keluarga perlu menghubungi dinas sosial atau perangkat desa dan kelurahan setempat.'),
  p('UU 8 Tahun 2016 Pasal 93 juga mengatur jaminan sosial dari Pemerintah dan Pemerintah Daerah bagi penyandang disabilitas miskin atau yang tidak berpenghasilan, dalam bentuk asuransi kesejahteraan sosial, bantuan langsung berkelanjutan, dan bantuan khusus seperti pelatihan, konseling, dan perawatan sementara. Program pelaksananya berbeda antardaerah. Informasi bantuan lain bisa dibaca di <a href="/artikel/cara-mengajukan-bantuan-pemerintah-untuk-anak-disabilitas">cara mengajukan bantuan pemerintah untuk anak disabilitas</a>.'),
  p('Di luar bantuan pemerintah, yayasan dan komunitas juga sering membantu, misalnya lewat beasiswa pendidikan atau pendampingan keluarga. YUKA membuka konsultasi untuk orang tua yang ingin berdiskusi soal pendidikan dan pendampingan anak; kunjungi halaman <a href="/kontak">kontak YUKA</a>. Dukungan sesama orang tua juga penting, seperti kami bahas di <a href="/artikel/dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a>.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(faq),
];

const articles = [
  {
    slug: 'asuransi-kesehatan-untuk-anak-disabilitas',
    titleTag: 'Asuransi Kesehatan untuk Anak Disabilitas: JKN dan Swasta | YUKA',
    metaDesc: 'Asuransi kesehatan untuk anak disabilitas: hak menurut UU 8/2016, layanan yang dijamin dan tidak dijamin JKN, alur rujukan, kapan perlu asuransi swasta, dan cek polis.',
    keywords: 'asuransi kesehatan untuk anak disabilitas, BPJS anak disabilitas, JKN alat bantu kesehatan, asuransi anak berkebutuhan khusus',
    ogTitle: 'Asuransi Kesehatan untuk Anak Disabilitas',
    ogDesc: 'Panduan orang tua memilih perlindungan kesehatan anak disabilitas: JKN, asuransi tambahan, dan bantuan pemerintah.',
    h1: 'Asuransi Kesehatan untuk Anak Disabilitas: Hak, Manfaat JKN, dan Kapan Perlu Asuransi Swasta',
    crumb: 'Asuransi Kesehatan untuk Anak Disabilitas',
    category: 'Panduan Orang Tua',
    datePublished: '2026-11-13T08:00:00+07:00', dateModified: '2026-11-13T08:00:00+07:00',
    dateDisplay: '13 November 2026', readTime: '12 menit baca',
    image: {
      file: `${IMG}/asuransi-disabilitas-hero.webp`, w: 1200, h: 675,
      alt: 'Gedung BPJS Kesehatan Kantor Cabang Soreang berlantai tiga dengan dinding kaca hijau, papan nama di atas pintu masuk, dan halaman berpaving',
      caption: 'Kantor Cabang BPJS Kesehatan di Soreang, Kabupaten Bandung. BPJS Kesehatan mengelola Jaminan Kesehatan Nasional, fondasi perlindungan biaya kesehatan bagi anak disabilitas.',
      credit: CC(F_HERO, 'Ilham jayakesuma', 'CC BY-SA 4.0', BYSA),
    },
    bodyHtml: body.join('\n'), faq,
    related: [
      { href: '/artikel/cara-mengajukan-bantuan-pemerintah-untuk-anak-disabilitas', title: 'Bantuan Pemerintah untuk Anak Disabilitas', desc: 'Jenis bantuan yang bisa diakses keluarga.' },
      { href: '/artikel/berapa-biaya-terapi-bicara-anak', title: 'Berapa Biaya Terapi Bicara Anak', desc: 'Gambaran biaya terapi dan cara merencanakannya.' },
      { href: '/artikel/dukungan-keluarga-anak-abk', title: 'Dukungan Keluarga Anak ABK', desc: 'Peran keluarga dalam pendampingan anak.' },
    ],
    tags: ['Asuransi', 'JKN', 'Disabilitas'],
    sources: [
      { url: URL_UU8, label: 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (Pasal 12, 61, 62, 93)' },
      { url: URL_PP82, label: 'Perpres Nomor 82 Tahun 2018 tentang Jaminan Kesehatan (Pasal 46, 47, 51, 52)' },
      { url: URL_BPJS, label: 'BPJS Kesehatan, situs resmi' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 13 November 2026. Perpres 82 Tahun 2018 sudah beberapa kali diubah; besaran iuran, kelas rawat, dan ketentuan teknis alat bantu dapat berubah, jadi konfirmasikan ke BPJS Kesehatan atau fasilitas kesehatan. Artikel ini bukan nasihat keuangan atau hukum.',
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

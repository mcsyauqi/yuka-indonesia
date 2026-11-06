'use strict';
/*
 * Generator artikel 5 dan 6 November 2026 (cycle #91 /cek-daily-artikel, tambal hari kosong).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5":
 *   - baris 161 "cara membuat rapor anak berkebutuhan khusus"   -> 5 Nov
 *   - baris 145 "modifikasi materi pelajaran matematika untuk abk" -> 6 Nov
 * Keduanya belum punya artikel (dicek terhadap artikel/*.html).
 *
 * Stok foto Dokumentasi habis sejak cycle #87, jadi foto memakai berkas Wikimedia Commons
 * berlisensi (domain publik USAID Indonesia, CC0, CC BY-SA 4.0) dengan kredit terlihat.
 * Diagram SVG deterministik dari scripts/lib/diagram-svg.js (bukan gambar AI).
 *
 *   node scripts/generate-gap-20261105-06.js --prepare   # tulis SVG diagram
 *   node scripts/generate-gap-20261105-06.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-gap-20261105-06.js             # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const PD = (page) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">USAID Indonesia</a> / Wikimedia Commons, domain publik.`;
const CC = (page, by, lic, licUrl) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">${by}</a> / Wikimedia Commons, <a href="${licUrl}" target="_blank" rel="nofollow noopener">${lic}</a>.`;
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

const URL_P21 = 'https://peraturan.go.id/files/bn460-2022.pdf';
const URL_PP13 = 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020';
const URL_UDL = 'https://udlguidelines.cast.org/';
const URL_UNESCO = 'https://www.unesco.org/en/inclusion-education';
const URL_CRA = 'https://www.ldatschool.ca/learning-modules/cra-strategies/the-cra-approach/';

const CC0 = ['CC0', 'https://creativecommons.org/publicdomain/zero/1.0/'];
const BYSA4 = ['CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'];

// ---------------------------------------------------------------------------
// Artikel 1: cara membuat rapor anak berkebutuhan khusus (5 Nov 2026)
// ---------------------------------------------------------------------------
const R_HERO = 'https://commons.wikimedia.org/wiki/File:USAID_Basic_Education_Program_(8313184050).jpg';
const R_MEET = 'https://commons.wikimedia.org/wiki/File:USAID_Basic_Education_Program_(8312137209).jpg';
const R_GUIDE = 'https://commons.wikimedia.org/wiki/File:USAID_Basic_Education_Program_(8313181172).jpg';
const R_READ = 'https://commons.wikimedia.org/wiki/File:I_love_reading!_(18948829454).jpg';
const R_LIB = 'https://commons.wikimedia.org/wiki/File:USAID_Basic_Education_Program_(4325050056).jpg';

const rSections = [
  ['arti', 'Apa itu rapor anak berkebutuhan khusus'],
  ['aturan', 'Dasar aturan laporan hasil belajar'],
  ['bahan', 'Bahan yang perlu disiapkan'],
  ['langkah', 'Langkah membuat rapor'],
  ['isi', 'Isi dan format rapor'],
  ['kalimat', 'Contoh kalimat deskripsi'],
  ['bentuk', 'Rapor untuk kebutuhan yang berbeda'],
  ['sampaikan', 'Menyampaikan rapor kepada orang tua'],
  ['keliru', 'Kesalahan yang sering terjadi'],
  ['faq', 'Pertanyaan umum'],
];

const rFaq = [
  { q: 'Apakah anak berkebutuhan khusus mendapat rapor yang sama dengan teman sekelasnya?', a: 'Tidak selalu sama isinya. Di sekolah inklusi, anak ABK umumnya tetap menerima rapor dari sekolah, tetapi capaian yang dilaporkan mengacu pada tujuan belajar yang sudah disesuaikan untuknya. Banyak sekolah melengkapinya dengan lampiran deskripsi perkembangan dari Program Pembelajaran Individual.' },
  { q: 'Siapa yang menulis rapor anak ABK?', a: 'Rapor biasanya ditulis oleh wali kelas bersama guru mata pelajaran, dengan masukan dari guru pendamping khusus yang paling mengenal kebutuhan anak. Catatan terapis atau orang tua bisa menjadi bahan tambahan, tetapi tanggung jawab penulisan tetap ada pada sekolah.' },
  { q: 'Apakah nilai angka wajib ada di rapor anak ABK?', a: 'Aturan standar penilaian menyebut laporan hasil belajar paling sedikit memuat informasi pencapaian hasil belajar, dan bentuknya boleh rapor atau laporan lain. Jadi yang utama adalah informasi capaian yang jelas. Banyak sekolah inklusi memakai deskripsi naratif, dengan atau tanpa angka, sesuai kebijakan sekolahnya.' },
  { q: 'Bagaimana menulis rapor jika anak belum mencapai tujuan belajarnya?', a: 'Tulis kemajuan yang sudah terjadi, bagian yang masih sulit, dan rencana bantuan berikutnya. Hindari kalimat yang hanya menyebut kegagalan. Orang tua perlu tahu posisi anak saat ini dan langkah yang akan diambil sekolah pada semester berikutnya.' },
  { q: 'Apa hubungan rapor dengan Program Pembelajaran Individual?', a: 'Program Pembelajaran Individual memuat tujuan belajar khusus anak, sedangkan rapor melaporkan sejauh mana tujuan itu tercapai pada satu periode. Karena itu, tujuan di rapor sebaiknya diambil langsung dari dokumen PPI agar keduanya tidak saling bertentangan.' },
  { q: 'Apakah rapor anak ABK boleh memakai bahasa yang lebih sederhana?', a: 'Boleh dan dianjurkan. Rapor dibaca orang tua, jadi gunakan kalimat sehari-hari dan hindari istilah teknis yang tidak dijelaskan. Kalau istilah tertentu perlu dipakai, berikan penjelasan singkat dalam kurung.' },
  { q: 'Seberapa panjang deskripsi rapor yang ideal?', a: 'Tidak ada ukuran baku. Deskripsi yang baik cukup memuat apa yang sudah bisa dilakukan anak, tingkat bantuan yang masih dibutuhkan, dan saran lanjutan. Dua sampai empat kalimat per tujuan biasanya sudah memberi gambaran yang jelas tanpa membuat rapor terlalu tebal.' },
  { q: 'Apa yang harus dilakukan orang tua jika tidak setuju dengan isi rapor?', a: 'Minta waktu bertemu wali kelas dan guru pendamping, lalu tanyakan bukti yang mendasari penilaian, misalnya portofolio atau catatan observasi. Sampaikan juga pengamatan di rumah. Percakapan yang tenang biasanya menghasilkan pemahaman bersama dan rencana yang lebih tepat.' },
];

addDiagram(`${IMG}/rapor-abk-alur.webp`, svg.flow('Alur menyusun rapor anak ABK', 'Dari tujuan belajar sampai pertemuan dengan orang tua', [
  { h: 'Ambil tujuan PPI', d: 'Salin tujuan belajar semester ini dari dokumen PPI anak.' },
  { h: 'Kumpulkan bukti', d: 'Portofolio, catatan observasi, dan hasil tugas yang bertanggal.' },
  { h: 'Diskusi tim', d: 'Wali kelas, guru mapel, dan pendamping menyamakan penilaian.' },
  { h: 'Tulis deskripsi', d: 'Capaian, tingkat bantuan, dan saran untuk tiap tujuan.' },
  { h: 'Periksa ulang', d: 'Bahasa sederhana, tanpa label negatif, data akurat.' },
  { h: 'Bahas bersama', d: 'Sampaikan dalam pertemuan, bukan hanya diserahkan.' },
]));

const rBody = [
  p('<strong>Cara membuat rapor anak berkebutuhan khusus</strong> dimulai dari tujuan belajar anak itu sendiri, lalu dilanjutkan dengan mengumpulkan bukti, menilai capaian, dan menuliskannya dalam deskripsi yang mudah dipahami orang tua. Rapor anak ABK tidak cukup berisi angka. Rapor yang baik menjawab tiga pertanyaan: apa yang sudah bisa dilakukan anak, seberapa banyak bantuan yang masih dibutuhkan, dan apa langkah berikutnya.'),
  p('Panduan ini kami tulis untuk wali kelas di sekolah inklusi, guru pendamping khusus, dan orang tua yang ingin memahami rapor anaknya. Contoh di dalamnya adalah praktik umum di kelas inklusi. Format akhir tetap mengikuti kebijakan sekolah masing-masing dan hasil asesmen tiap anak.'),
  toc(rSections),

  '<h2 id="arti">Apa itu rapor anak berkebutuhan khusus</h2>',
  p('Rapor anak berkebutuhan khusus adalah laporan hasil belajar yang menggambarkan capaian anak terhadap tujuan belajar yang sudah disesuaikan dengan kebutuhannya. Bentuk dasarnya sama dengan rapor siswa lain, yaitu laporan resmi dari sekolah pada akhir periode belajar. Perbedaannya ada pada acuan penilaian dan cara menuliskan hasilnya.'),
  p('Pada siswa reguler, capaian biasanya dibandingkan dengan tujuan pembelajaran kelas. Pada anak ABK, terutama yang mengikuti kurikulum yang dimodifikasi, acuannya adalah tujuan dalam <a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual</a> (PPI). Anak dengan hambatan intelektual, misalnya, bisa saja belajar topik yang sama dengan teman sekelas, tetapi dengan target yang lebih sederhana.'),
  p('Karena acuannya berbeda, rapor anak ABK perlu menjelaskan konteks. Tanpa konteks, nilai yang tinggi bisa disalahartikan sebagai capaian setara kelas, sementara nilai rendah bisa membuat orang tua merasa anaknya tidak berkembang. Deskripsi yang jujur dan spesifik mencegah kedua salah paham itu.'),
  fig(`${IMG}/rapor-abk-pertemuan.webp`, 1200, 799, 'Seorang guru berambut putih duduk bersimpuh berbicara dengan anak laki-laki berseragam putih merah di atas tikar busa berwarna, didampingi guru berkerudung merah', 'Rapor yang baik lahir dari pengamatan langsung sehari-hari. Foto ini diambil dalam program pendidikan inklusif bagi anak berkebutuhan khusus di Indonesia.', PD(R_MEET)),

  '<h2 id="aturan">Dasar aturan laporan hasil belajar</h2>',
  p('Dasar aturan rapor di Indonesia saat ini adalah ' + ext(URL_P21, 'Permendikbudristek Nomor 21 Tahun 2022 tentang Standar Penilaian Pendidikan') + '. Pasal 8 aturan itu menyebut bahwa pelaporan hasil penilaian dituangkan dalam laporan kemajuan belajar, yang berupa laporan hasil belajar dan disusun berdasarkan pengolahan hasil penilaian.'),
  p('Pasal yang sama menyebut laporan hasil belajar <em>paling sedikit memuat informasi mengenai pencapaian hasil belajar peserta didik</em>, dan laporan itu <em>tertuang dalam rapor atau bentuk laporan hasil penilaian lainnya</em>. Artinya, sekolah punya ruang untuk memakai deskripsi naratif atau lampiran khusus, selama informasi capaian anak tersampaikan.'),
  p('Aturan yang sama juga menyebut penilaian sumatif dilakukan dengan membandingkan capaian siswa terhadap kriteria ketercapaian tujuan pembelajaran. Bagi anak ABK, hak atas penyesuaian proses belajar dan penilaian diperkuat oleh ' + ext(URL_PP13, 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas') + '. Kebijakan teknis tiap daerah dan sekolah bisa berbeda, jadi cek juga pedoman yang berlaku di sekolah anak.'),
  table('Ringkasan ketentuan laporan hasil belajar dalam Permendikbudristek 21/2022', ['Ketentuan', 'Isi singkat', 'Artinya untuk rapor anak ABK'], [
    ['Bentuk pelaporan', 'Laporan kemajuan belajar berupa laporan hasil belajar', 'Rapor adalah salah satu bentuknya, bukan satu-satunya'],
    ['Isi minimal', 'Informasi pencapaian hasil belajar peserta didik', 'Capaian tiap tujuan harus tertulis jelas'],
    ['Media', 'Rapor atau bentuk laporan hasil penilaian lainnya', 'Lampiran deskripsi PPI bisa dipakai'],
    ['Acuan sumatif', 'Kriteria ketercapaian tujuan pembelajaran', 'Bagi kurikulum modifikasi, acuannya tujuan PPI'],
  ]),

  '<h2 id="bahan">Bahan yang perlu disiapkan</h2>',
  p('Rapor yang akurat hampir tidak mungkin ditulis dari ingatan. Siapkan bahan sejak awal semester supaya saat menulis rapor, guru tinggal membaca bukti yang sudah terkumpul. Bahan berikut biasanya paling berguna.'),
  ul([
    '<strong>Dokumen PPI terbaru.</strong> Berisi tujuan jangka pendek dan bentuk dukungan yang disepakati.',
    '<strong>Portofolio.</strong> Kumpulan karya bertanggal, cara menyusunnya dibahas di artikel <a href="/artikel/penilaian-portofolio-anak-abk">penilaian portofolio anak ABK</a>.',
    '<strong>Catatan observasi.</strong> Catatan singkat guru dan pendamping tentang perilaku, interaksi, dan kemandirian.',
    '<strong>Hasil asesmen.</strong> Hasil <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik</a> awal dan akhir semester sebagai pembanding.',
    '<strong>Rubrik.</strong> Kriteria yang sama untuk semua penilai, lihat <a href="/artikel/rubrik-penilaian-anak-berkebutuhan-khusus">rubrik penilaian anak berkebutuhan khusus</a>.',
    '<strong>Catatan orang tua.</strong> Informasi tentang kemampuan yang muncul di rumah.',
  ]),
  p('Kalau sekolah memakai aplikasi rapor elektronik, siapkan juga kolom deskripsi tambahan atau lampiran. Aplikasi seperti ini sering dirancang untuk siswa reguler, sehingga deskripsi capaian PPI perlu ditempatkan di bagian catatan atau lampiran terpisah.'),
  fig(`${IMG}/rapor-abk-pendampingan.webp`, 1200, 800, 'Tiga perempuan dewasa menuntun anak laki-laki berbaju biru berjalan sambil berpegangan tangan di ruang latihan berlantai keramik', 'Catatan tentang tingkat bantuan, misalnya anak masih perlu dituntun, adalah bahan penting saat menulis rapor. Foto dari program pendidikan inklusif di Indonesia.', PD(R_GUIDE)),

  '<h2 id="langkah">Langkah membuat rapor</h2>',
  p('Langkah membuat rapor anak ABK pada dasarnya mengikuti alur yang sama setiap semester. Yang membedakan hanya isi tujuan dan bukti tiap anak. Berikut urutan yang bisa dipakai wali kelas dan guru pendamping.'),
  ol([
    '<strong>Salin tujuan belajar dari PPI.</strong> Tulis dua sampai lima tujuan utama semester ini sebagai dasar rapor.',
    '<strong>Cocokkan tiap tujuan dengan bukti.</strong> Pilih contoh karya awal dan akhir semester serta catatan observasi yang relevan.',
    '<strong>Tentukan tingkat capaian.</strong> Gunakan skala yang disepakati tim, misalnya belum muncul, berkembang dengan bantuan, atau mandiri.',
    '<strong>Diskusikan dengan tim.</strong> Wali kelas, guru mata pelajaran, dan <a href="/artikel/gpk-adalah">guru pendamping khusus</a> menyamakan penilaian supaya tidak bertentangan.',
    '<strong>Tulis deskripsi per tujuan.</strong> Sebutkan kemampuan nyata, bantuan yang masih diperlukan, dan saran lanjutan.',
    '<strong>Tambahkan catatan umum.</strong> Kekuatan anak, minat, perkembangan sosial, dan hal yang perlu diperhatikan.',
    '<strong>Periksa ulang.</strong> Baca dari sudut pandang orang tua: apakah kalimatnya jelas dan adil?',
    '<strong>Jadwalkan pertemuan.</strong> Serahkan rapor dalam percakapan, bukan hanya lewat amplop atau pesan singkat.',
  ]),
  diag(`${IMG}/rapor-abk-alur.webp`, 'Diagram alur enam langkah menyusun rapor anak berkebutuhan khusus dari mengambil tujuan PPI sampai membahasnya bersama orang tua', 'Rapor anak ABK disusun dari tujuan PPI dan bukti yang terkumpul sepanjang semester, lalu dibahas bersama orang tua.'),
  p('Langkah diskusi tim sering dilewati karena waktu sempit, padahal dampaknya besar. Guru kelas mungkin melihat anak jarang bicara, sementara pendamping tahu anak mulai memakai kartu gambar untuk meminta bantuan. Tanpa diskusi, rapor hanya memuat separuh cerita. Pola kerja sama ini sejalan dengan <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching di kelas inklusi</a>.'),

  '<h2 id="isi">Isi dan format rapor</h2>',
  p('Isi rapor anak ABK sebaiknya mencakup identitas, capaian per tujuan, perkembangan nonakademik, dan rencana berikutnya. Format bisa mengikuti rapor sekolah dengan tambahan lampiran, atau memakai dokumen terpisah yang dilampirkan pada rapor utama. Tabel berikut merangkum bagian yang umum dipakai.'),
  table('Bagian rapor anak berkebutuhan khusus dan isinya', ['Bagian', 'Isi', 'Contoh singkat'], [
    ['Identitas', 'Nama, kelas, semester, nama wali kelas dan pendamping', 'Kelas 3, semester ganjil'],
    ['Acuan penilaian', 'Keterangan bahwa capaian mengacu pada tujuan PPI', 'Kurikulum modifikasi untuk matematika dan bahasa'],
    ['Capaian akademik', 'Deskripsi per tujuan dan tingkat bantuan', 'Membaca kata dua suku kata dengan sedikit bantuan'],
    ['Kemandirian dan bina diri', 'Keterampilan sehari-hari di sekolah', 'Merapikan tas sendiri setelah diingatkan'],
    ['Sosial dan emosi', 'Interaksi, komunikasi, pengelolaan emosi', 'Mulai ikut bermain kelompok kecil'],
    ['Kekuatan dan minat', 'Hal yang disukai dan dikuasai anak', 'Senang menggambar dan menyusun balok'],
    ['Rencana berikutnya', 'Tujuan atau dukungan untuk semester depan', 'Latihan membaca kalimat pendek'],
    ['Saran untuk rumah', 'Kegiatan sederhana yang bisa dilakukan orang tua', 'Membaca bersama 10 menit sebelum tidur'],
  ]),
  p('Bagian acuan penilaian sangat penting. Satu kalimat seperti "capaian di bawah ini mengacu pada tujuan dalam Program Pembelajaran Individual" sudah cukup untuk mencegah salah paham ketika rapor dibaca pihak lain, misalnya saat anak pindah sekolah.'),
  fig(`${IMG}/rapor-abk-membaca.webp`, 1200, 801, 'Dua siswi berkerudung cokelat membaca buku berjudul Pandai Memahami Menulis Cerita Pendek di ruang kelas', 'Capaian membaca lebih mudah dilaporkan bila ada contoh nyata, misalnya judul buku yang sudah bisa dibaca anak. Foto ini menunjukkan siswi MTs di Sidoarjo, Jawa Timur.', PD(R_READ)),

  '<h2 id="kalimat">Contoh kalimat deskripsi</h2>',
  p('Kalimat deskripsi yang baik menyebut perilaku yang bisa diamati, bukan kesan umum. Bandingkan kalimat "Ananda sudah lebih baik dalam membaca" dengan "Ananda dapat membaca 20 kata dua suku kata dengan sedikit bantuan, naik dari 8 kata di awal semester". Kalimat kedua memberi orang tua gambaran yang jauh lebih jelas.'),
  table('Contoh kalimat deskripsi yang kurang jelas dan versi perbaikannya', ['Kurang jelas', 'Lebih jelas'], [
    ['Kemampuan menulis cukup', 'Menulis nama lengkap sendiri tanpa contoh, huruf masih berbeda ukuran'],
    ['Belum bisa berhitung', 'Menghitung benda sampai 10 dengan menunjuk satu per satu, penjumlahan masih perlu benda konkret'],
    ['Sering tantrum', 'Dua kali per minggu menangis saat jadwal berubah, tenang dalam 5 menit dengan pojok tenang'],
    ['Kurang bergaul', 'Bermain berdua dengan satu teman saat istirahat bila diajak guru'],
    ['Sudah mandiri', 'Memakai sepatu dan merapikan tas sendiri tanpa diingatkan'],
  ]),
  p('Pola yang bisa dipakai adalah <strong>kemampuan + kondisi + perkembangan + saran</strong>. Contohnya: "Ananda dapat menjumlahkan bilangan sampai 10 memakai benda konkret (kemampuan), dengan satu kali petunjuk lisan (kondisi). Di awal semester Ananda masih perlu dituntun (perkembangan). Semester depan kami akan mulai memakai gambar sebagai pengganti benda (saran)."'),
  p('Hindari label diagnosis di kalimat capaian, misalnya "karena autis, Ananda belum bisa...". Diagnosis tidak menjelaskan apa yang bisa dilakukan anak, dan kalimat seperti ini mudah melukai perasaan. Fokuslah pada kemampuan dan dukungan.'),

  '<h2 id="bentuk">Rapor untuk kebutuhan yang berbeda</h2>',
  p('Bentuk rapor perlu menyesuaikan kurikulum yang diikuti anak. Anak dengan hambatan penglihatan yang mengikuti kurikulum reguler dengan akomodasi, misalnya, bisa memakai rapor biasa. Anak dengan hambatan intelektual yang belajar dengan <a href="/artikel/kurikulum-fungsional-untuk-anak-tunagrahita">kurikulum fungsional</a> lebih cocok dengan rapor deskriptif penuh.'),
  table('Pilihan bentuk rapor sesuai jenis penyesuaian kurikulum', ['Jenis penyesuaian', 'Bentuk rapor yang cocok', 'Catatan'], [
    ['Akomodasi (tujuan sama, cara berbeda)', 'Rapor reguler', 'Sebutkan akomodasi yang dipakai, misalnya waktu tambahan'],
    ['Modifikasi sebagian mata pelajaran', 'Rapor reguler + lampiran PPI', 'Tandai mata pelajaran yang dimodifikasi'],
    ['Modifikasi penuh atau kurikulum fungsional', 'Rapor deskriptif', 'Utamakan keterampilan hidup dan kemandirian'],
    ['Program khusus (terapi, bina diri)', 'Lampiran perkembangan program', 'Pisahkan dari capaian akademik'],
  ]),
  p('Penyesuaian cara menilai yang dipakai selama semester juga perlu tercatat. Contohnya ujian lisan, soal dengan huruf besar, atau waktu tambahan. Cara menyesuaikan soal dibahas di artikel <a href="/artikel/adaptasi-soal-ujian-untuk-anak-abk">adaptasi soal ujian untuk anak ABK</a>, dan cara menyesuaikan pembelajaran di <a href="/artikel/diferensiasi-pembelajaran-untuk-anak-abk">diferensiasi pembelajaran</a>.'),
  p('Pendekatan ini sejalan dengan prinsip ' + ext(URL_UDL, 'Universal Design for Learning dari CAST') + ' yang memberi siswa beragam cara menunjukkan kemampuannya, dan dengan pandangan ' + ext(URL_UNESCO, 'UNESCO tentang pendidikan inklusif') + ' bahwa sistem pendidikan perlu menyesuaikan diri dengan keberagaman peserta didik.'),

  '<h2 id="sampaikan">Menyampaikan rapor kepada orang tua</h2>',
  p('Rapor anak ABK sebaiknya disampaikan dalam pertemuan tatap muka, bukan hanya diserahkan. Orang tua sering datang dengan rasa cemas, dan isi rapor yang dibaca tanpa penjelasan bisa menambah beban. Pertemuan memberi ruang untuk bertanya dan menyusun rencana bersama.'),
  ol([
    '<strong>Mulai dari kekuatan anak.</strong> Sebutkan satu atau dua hal yang paling berkembang.',
    '<strong>Tunjukkan bukti.</strong> Bandingkan karya awal dan akhir semester dari portofolio.',
    '<strong>Jelaskan tantangan dengan jujur.</strong> Sampaikan bagian yang masih sulit beserta dukungan yang sudah dicoba.',
    '<strong>Dengarkan pengamatan orang tua.</strong> Kemampuan anak di rumah bisa berbeda dengan di sekolah.',
    '<strong>Sepakati dua atau tiga langkah.</strong> Tuliskan siapa melakukan apa sampai pertemuan berikutnya.',
  ]),
  fig(`${IMG}/rapor-abk-perpustakaan.webp`, 1200, 800, 'Sekelompok murid sekolah dasar berseragam batik tersenyum sambil memegang buku cerita di perpustakaan sekolah', 'Rapor bukan hanya soal nilai. Minat anak, seperti senang membaca buku cerita, juga layak dicatat. Foto ini diambil di sebuah sekolah dasar di Indonesia.', PD(R_LIB)),
  p('Peran orang tua dalam proses ini dibahas lebih luas di artikel <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>. Untuk anak dengan hambatan intelektual, cara memantau kemajuan sepanjang tahun dijelaskan di <a href="/artikel/mengukur-kemajuan-belajar-anak-disabilitas-intelektual">mengukur kemajuan belajar anak disabilitas intelektual</a>.'),

  '<h2 id="keliru">Kesalahan yang sering terjadi</h2>',
  p('Kesalahan dalam rapor anak ABK biasanya muncul karena waktu sempit dan format yang tidak dirancang untuk kebutuhan khusus. Mengenalinya membantu sekolah memperbaiki proses tanpa menambah banyak beban.'),
  ul([
    '<strong>Menyalin deskripsi yang sama tiap semester.</strong> Orang tua akan menangkap bahwa rapor tidak benar-benar ditulis untuk anaknya.',
    '<strong>Memberi angka tanpa konteks.</strong> Nilai 85 untuk tujuan yang dimodifikasi bisa dikira setara capaian kelas.',
    '<strong>Membandingkan dengan teman sekelas.</strong> Patokannya adalah tujuan dan kemampuan awal anak itu sendiri.',
    '<strong>Tidak mencatat bantuan.</strong> Capaian dengan bantuan penuh berbeda maknanya dengan capaian mandiri.',
    '<strong>Memakai istilah teknis tanpa penjelasan.</strong> Orang tua tidak selalu tahu arti istilah terapi atau asesmen.',
    '<strong>Hanya menulis kekurangan.</strong> Setiap anak punya kemajuan, sekecil apa pun, dan itu perlu tertulis.',
  ]),
  p('Di Sekolah Inklusi Taruna Imani yang dikelola YUKA, kami mendorong komunikasi rutin antara guru, pendamping, dan orang tua supaya rapor menjadi ringkasan dari percakapan yang sudah berjalan, bukan kejutan di akhir semester. Sekolah yang menjalankan inklusi dengan baik biasanya punya <a href="/artikel/indikator-keberhasilan-sekolah-inklusi">indikator keberhasilan</a> yang bisa diperiksa, termasuk kualitas laporan perkembangan anak.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(rFaq),
];

// ---------------------------------------------------------------------------
// Artikel 2: modifikasi materi pelajaran matematika untuk ABK (6 Nov 2026)
// ---------------------------------------------------------------------------
const M_HERO = 'https://commons.wikimedia.org/wiki/File:Murid-murid_SMP_program_USAID_PRIORITAS_belajar_tentang_gelombang_dan_getaran_(16630734923).jpg';
const M_DIENES = 'https://commons.wikimedia.org/wiki/File:Dienes_Material_(Dyskalkulie).jpg';
const M_CONGKLAK = 'https://commons.wikimedia.org/wiki/File:WikiTuPr%C3%A8t_II_-_Congklak_2.jpg';
const M_FRIEND = 'https://commons.wikimedia.org/wiki/File:USAID_Basic_Education_Project_(9446120255).jpg';
const M_PLACE = 'https://commons.wikimedia.org/wiki/File:Dienes_blocks_used_by_a_8_year-old_student.png';

const mSections = [
  ['arti', 'Apa itu modifikasi materi matematika'],
  ['beda', 'Akomodasi, modifikasi, dan substitusi'],
  ['kapan', 'Kapan materi perlu dimodifikasi'],
  ['langkah', 'Langkah memodifikasi materi'],
  ['kpa', 'Urutan konkret, gambar, simbol'],
  ['contoh', 'Contoh modifikasi per topik'],
  ['alat', 'Alat peraga yang mudah didapat'],
  ['kebutuhan', 'Penyesuaian untuk kebutuhan berbeda'],
  ['nilai', 'Menilai hasil belajar matematika'],
  ['faq', 'Pertanyaan umum'],
];

const mFaq = [
  { q: 'Apa yang dimaksud modifikasi materi pelajaran matematika untuk ABK?', a: 'Modifikasi materi matematika adalah perubahan pada isi, tingkat kesulitan, atau target belajar matematika supaya sesuai dengan kemampuan anak berkebutuhan khusus. Topiknya bisa tetap sama dengan teman sekelas, tetapi bagian yang dipelajari dan ukuran keberhasilannya disesuaikan.' },
  { q: 'Apa beda modifikasi dan akomodasi dalam pelajaran matematika?', a: 'Akomodasi mengubah cara belajar atau cara menilai tanpa mengubah tujuan, misalnya waktu tambahan atau soal dengan huruf besar. Modifikasi mengubah tujuan atau isi materinya, misalnya anak belajar penjumlahan sampai 20 ketika teman sekelas belajar penjumlahan sampai 1.000.' },
  { q: 'Apakah semua anak ABK perlu materi matematika yang dimodifikasi?', a: 'Tidak. Banyak anak ABK cukup dengan akomodasi, misalnya anak dengan hambatan penglihatan atau hambatan motorik yang kemampuan berpikirnya sesuai usia. Modifikasi dipakai bila hasil asesmen menunjukkan anak belum siap dengan tujuan kelas meskipun sudah diberi akomodasi.' },
  { q: 'Siapa yang memutuskan materi matematika anak perlu dimodifikasi?', a: 'Keputusan sebaiknya diambil tim, yaitu guru kelas atau guru matematika, guru pendamping khusus, dan orang tua, berdasarkan hasil asesmen. Keputusan itu lalu dituliskan dalam Program Pembelajaran Individual supaya jelas tujuan dan cara menilainya.' },
  { q: 'Alat peraga matematika apa yang murah untuk anak ABK?', a: 'Banyak benda di rumah dan sekolah bisa dipakai, misalnya sedotan atau lidi yang diikat per sepuluh, tutup botol, biji-bijian, kartu angka buatan sendiri, dan papan congklak. Yang penting alatnya aman, mudah dipegang, dan dipakai secara konsisten.' },
  { q: 'Berapa lama anak boleh memakai benda konkret saat belajar berhitung?', a: 'Tidak ada batas waktu yang sama untuk semua anak. Benda konkret dikurangi perlahan ketika anak sudah bisa menjelaskan atau menggambar caranya. Kalau anak kembali kesulitan, wajar untuk kembali sebentar ke benda konkret sebelum melanjutkan.' },
  { q: 'Bagaimana menilai matematika anak ABK yang materinya dimodifikasi?', a: 'Nilai capaian anak terhadap tujuan modifikasinya sendiri, bukan terhadap tujuan kelas. Catat juga tingkat bantuan yang diberikan. Di rapor, jelaskan bahwa capaian mengacu pada tujuan dalam Program Pembelajaran Individual supaya tidak disalahartikan.' },
  { q: 'Apakah anak dengan materi modifikasi tetap belajar bersama teman sekelas?', a: 'Bisa dan sebaiknya begitu. Anak tetap ikut topik yang sama di kelas, misalnya pengukuran, tetapi tugasnya disesuaikan. Cara ini menjaga anak tetap menjadi bagian kelas sambil belajar sesuai kemampuannya.' },
];

addDiagram(`${IMG}/matematika-abk-kpa.webp`, svg.flow('Urutan konkret, gambar, simbol', 'Contoh untuk penjumlahan 3 + 2', [
  { h: 'Konkret', d: 'Anak menggabungkan 3 tutup botol dan 2 tutup botol, lalu menghitung semuanya.' },
  { h: 'Gambar', d: 'Anak menggambar 3 lingkaran dan 2 lingkaran, lalu menghitung gambar itu.' },
  { h: 'Simbol', d: 'Anak menulis 3 + 2 = 5 tanpa benda dan tanpa gambar.' },
  { h: 'Benda dikurangi', d: 'Benda dipakai hanya untuk memeriksa jawaban, bukan untuk menghitung.' },
  { h: 'Gambar dikurangi', d: 'Anak cukup membuat tanda garis sebagai pengganti gambar.' },
  { h: 'Mandiri', d: 'Anak menyelesaikan soal serupa dengan simbol saja.' },
]));

const mBody = [
  p('<strong>Modifikasi materi pelajaran matematika untuk ABK</strong> adalah penyesuaian isi, tingkat kesulitan, dan target belajar matematika supaya anak berkebutuhan khusus bisa belajar sesuai kemampuannya tanpa keluar dari kelas. Anak tetap ikut topik yang sama dengan teman sekelas, tetapi bagian yang dipelajari, alat bantunya, dan ukuran keberhasilannya diatur ulang.'),
  p('Panduan ini kami tulis untuk guru matematika, wali kelas sekolah inklusi, guru pendamping khusus, dan orang tua yang mendampingi anak belajar di rumah. Contoh di dalamnya adalah praktik umum di kelas inklusi dan perlu disesuaikan dengan hasil asesmen tiap anak.'),
  toc(mSections),

  '<h2 id="arti">Apa itu modifikasi materi matematika</h2>',
  p('Modifikasi materi matematika berarti mengubah <em>apa</em> yang dipelajari anak, bukan hanya <em>bagaimana</em> anak mempelajarinya. Contohnya, ketika kelas 4 belajar penjumlahan bilangan ribuan, anak dengan hambatan intelektual bisa belajar penjumlahan sampai 20 dalam konteks uang jajan. Topiknya sama-sama penjumlahan, tetapi targetnya berbeda.'),
  p('Matematika adalah pelajaran yang sangat berjenjang. Pemahaman bilangan menjadi dasar penjumlahan, penjumlahan menjadi dasar perkalian, dan seterusnya. Anak yang belum menguasai satu anak tangga akan kesulitan di anak tangga berikutnya. Karena itu, modifikasi yang baik selalu dimulai dari kemampuan yang sudah dikuasai anak.'),
  p('Modifikasi bukan berarti menurunkan harapan. Tujuannya membuat target yang menantang tetapi bisa dicapai, lalu menaikkannya sedikit demi sedikit. Anak yang terus diberi soal di luar jangkauannya cenderung kehilangan rasa percaya diri, dan itu justru menghambat belajar.'),
  fig(`${IMG}/matematika-abk-dienes.webp`, 1200, 771, 'Balok dienes kayu berupa kubus besar, papan seratus, batang sepuluh, dan kubus satuan di atas lantai kayu', 'Balok dienes menunjukkan satuan, puluhan, ratusan, dan ribuan sebagai benda yang bisa dipegang. Alat ini sering dipakai untuk anak yang sulit memahami nilai tempat.', CC(M_DIENES, 'Rhetos', ...CC0)),

  '<h2 id="beda">Akomodasi, modifikasi, dan substitusi</h2>',
  p('Sebelum memodifikasi materi, guru perlu membedakan tiga bentuk penyesuaian kurikulum. Ketiganya sering tertukar, padahal dampaknya ke rapor dan ke tujuan belajar anak sangat berbeda. Tabel berikut merangkum perbedaannya dalam konteks pelajaran matematika.'),
  table('Perbedaan akomodasi, modifikasi, dan substitusi dalam pelajaran matematika', ['Bentuk', 'Yang diubah', 'Contoh di matematika'], [
    ['Akomodasi', 'Cara belajar atau cara menilai, tujuan tetap', 'Soal dicetak huruf besar, waktu tambahan, boleh memakai tabel perkalian'],
    ['Modifikasi', 'Isi, tingkat kesulitan, atau target', 'Penjumlahan sampai 20 saat kelas belajar sampai 1.000'],
    ['Substitusi', 'Materi diganti dengan yang setara fungsinya', 'Membaca jam digital sebagai pengganti jam analog'],
    ['Omisi', 'Sebagian materi tidak diberikan', 'Pecahan desimal ditiadakan, fokus pada konsep setengah dan seperempat'],
  ]),
  p('Urutan yang dianjurkan adalah mencoba akomodasi lebih dulu. Banyak anak ABK, misalnya anak dengan hambatan penglihatan atau hambatan motorik, sebenarnya mampu mencapai tujuan kelas bila diberi akomodasi yang tepat. Modifikasi baru dipakai bila asesmen menunjukkan anak belum siap dengan tujuan kelas meskipun sudah diberi akomodasi.'),
  p('Hak atas penyesuaian ini diatur dalam ' + ext(URL_PP13, 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas') + '. Penyesuaian cara belajar secara umum dibahas di artikel <a href="/artikel/diferensiasi-pembelajaran-untuk-anak-abk">diferensiasi pembelajaran untuk anak ABK</a>.'),

  '<h2 id="kapan">Kapan materi perlu dimodifikasi</h2>',
  p('Materi matematika perlu dimodifikasi bila jarak antara kemampuan anak dan tujuan kelas terlalu jauh untuk dijembatani dengan akomodasi. Keputusan ini sebaiknya berdasarkan asesmen, bukan kesan sesaat. Beberapa tanda yang biasanya menjadi bahan pertimbangan tim:'),
  ul([
    'Anak belum menguasai konsep prasyarat, misalnya belum bisa menghitung benda sampai 10 di kelas 3.',
    'Anak tetap tidak bisa mengerjakan tugas kelas meskipun sudah diberi waktu tambahan dan alat bantu.',
    'Hasil <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik</a> menunjukkan kemampuan matematika jauh di bawah jenjang kelasnya.',
    'Anak menunjukkan stres berat setiap pelajaran matematika, misalnya menangis atau menolak masuk kelas.',
    'Tujuan jangka panjang anak lebih mengarah pada matematika fungsional untuk hidup sehari-hari.',
  ]),
  p('Kesulitan berhitung yang menetap juga bisa berkaitan dengan gangguan belajar spesifik. Gambaran tentang kondisi ini ada di artikel <a href="/artikel/diskalkulia-adalah">diskalkulia</a>, tetapi diagnosis tetap perlu ditegakkan oleh psikolog atau tenaga profesional, bukan dari pengamatan guru saja. Anak dengan kemampuan belajar sedikit di bawah rata-rata juga perlu pendekatan khusus, seperti dibahas di <a href="/artikel/slow-learner">slow learner</a>.'),
  fig(`${IMG}/matematika-abk-teman.webp`, 600, 900, 'Dua siswi sekolah dasar berseragam putih merah duduk berdampingan di halaman sekolah, salah satunya merapikan dasi temannya', 'Menurut keterangan foto aslinya, salah satu siswi ini memiliki hambatan penglihatan dan belajar di sekolah inklusif di Jakarta (2006). Anak seperti ini sering hanya butuh akomodasi, misalnya alat peraga yang bisa diraba, bukan modifikasi materi.', PD(M_FRIEND)),

  '<h2 id="langkah">Langkah memodifikasi materi</h2>',
  p('Memodifikasi materi matematika paling mudah dilakukan dengan menurunkan tujuan kelas ke tingkat yang sesuai, lalu menyiapkan tugas yang masih terhubung dengan topik kelas. Langkah berikut bisa dipakai guru matematika bersama guru pendamping.'),
  ol([
    '<strong>Lihat tujuan pembelajaran kelas.</strong> Tentukan topik besar minggu ini, misalnya pengukuran panjang.',
    '<strong>Cek kemampuan awal anak.</strong> Pakai hasil asesmen atau tugas singkat untuk melihat apa yang sudah dikuasai.',
    '<strong>Turunkan tujuannya.</strong> Cari versi lebih sederhana dari topik yang sama, misalnya membandingkan panjang dua benda.',
    '<strong>Pecah menjadi langkah kecil.</strong> Tulis urutan keterampilan dari yang paling mudah.',
    '<strong>Siapkan alat bantu.</strong> Pilih benda konkret atau gambar yang sesuai dengan langkah tersebut.',
    '<strong>Buat tugas paralel.</strong> Anak mengerjakan tugas berbeda tetapi pada topik yang sama dengan teman sekelas.',
    '<strong>Tuliskan di PPI.</strong> Masukkan tujuan modifikasi ke <a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual</a>.',
    '<strong>Tinjau berkala.</strong> Naikkan target bila anak sudah konsisten berhasil.',
  ]),
  p('Tugas paralel menjaga anak tetap menjadi bagian dari kelas. Ketika teman-temannya mengukur panjang meja dengan penggaris, anak bisa mengurutkan tiga pensil dari yang terpendek. Semua siswa membahas panjang, sehingga diskusi kelas tetap bisa diikuti bersama. Kerja sama guru dalam mengatur ini bisa mengikuti pola <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching</a>.'),

  '<h2 id="kpa">Urutan konkret, gambar, simbol</h2>',
  p('Salah satu pendekatan yang paling banyak dipakai untuk anak dengan kesulitan matematika adalah urutan konkret, gambar, simbol. Dalam literatur dikenal sebagai ' + ext(URL_CRA, 'pendekatan CRA (Concrete, Representational, Abstract)') + '. Anak mulai dari benda yang bisa dipegang, lalu beralih ke gambar, dan terakhir ke angka serta lambang.'),
  diag(`${IMG}/matematika-abk-kpa.webp`, 'Diagram enam langkah urutan konkret, gambar, dan simbol untuk penjumlahan tiga ditambah dua, sampai anak bisa mengerjakan secara mandiri', 'Benda konkret dan gambar dikurangi bertahap sampai anak mampu bekerja dengan simbol saja.'),
  p('Panduan LD@school tentang pendekatan ini menyebut setiap tahap sebaiknya diajarkan dengan instruksi yang eksplisit, yaitu guru mencontohkan, lalu anak mencoba dengan bimbingan, kemudian mandiri. Kuncinya ada pada perpindahan antartahap. Anak tidak dipaksa langsung ke simbol, tetapi juga tidak dibiarkan bergantung pada benda terlalu lama.'),
  p('Bagi anak ABK, tahap konkret sering perlu waktu lebih panjang. Ini wajar. Yang penting, guru mencatat kapan anak mulai bisa menggambar caranya sendiri, karena itu tanda anak siap bergerak ke tahap berikutnya.'),

  '<h2 id="contoh">Contoh modifikasi per topik</h2>',
  p('Contoh berikut menunjukkan cara menurunkan tujuan kelas pada beberapa topik matematika sekolah dasar. Ini hanya gambaran umum, dan target sebenarnya harus mengikuti hasil asesmen anak. Perhatikan bahwa setiap modifikasi tetap berada pada topik yang sama dengan kelas.'),
  table('Contoh tujuan kelas dan versi modifikasinya untuk anak ABK', ['Topik', 'Tujuan kelas (contoh)', 'Versi modifikasi (contoh)'], [
    ['Bilangan', 'Membaca dan menulis bilangan sampai 10.000', 'Membaca dan menulis bilangan sampai 50'],
    ['Penjumlahan', 'Menjumlahkan bilangan tiga angka dengan teknik menyimpan', 'Menjumlahkan sampai 20 dengan benda atau garis bilangan'],
    ['Perkalian', 'Memahami perkalian sebagai penjumlahan berulang sampai 10 x 10', 'Menghitung kelompok benda yang sama banyak, misalnya 3 piring berisi 2 kue'],
    ['Pecahan', 'Membandingkan pecahan berpenyebut berbeda', 'Mengenal setengah dan seperempat dengan memotong roti atau kertas'],
    ['Pengukuran', 'Mengukur panjang dengan penggaris dalam sentimeter', 'Membandingkan dan mengurutkan panjang benda'],
    ['Waktu', 'Membaca jam analog sampai menit', 'Membaca jam tepat dan mengurutkan kegiatan harian'],
    ['Uang', 'Menghitung kembalian belanja', 'Mengenal nilai uang kertas dan membayar dengan satu lembar'],
  ]),
  p('Untuk anak yang tujuan jangka panjangnya kemandirian, topik uang, waktu, dan pengukuran sering lebih penting daripada topik yang sangat abstrak. Pendekatan ini disebut matematika fungsional dan banyak dipakai dalam <a href="/artikel/kurikulum-fungsional-untuk-anak-tunagrahita">kurikulum fungsional untuk anak tunagrahita</a>.'),
  fig(`${IMG}/matematika-abk-nilai-tempat.webp`, 1200, 694, 'Tangan seorang anak menyusun batang dienes plastik berwarna ungu di atas karpet kelas, di sampingnya ada papan seratus', 'Saat belajar nilai tempat, anak menyusun batang puluhan dan kubus satuan sendiri sebelum menulis angkanya.', CC(M_PLACE, 'Annielogue', ...BYSA4)),

  '<h2 id="alat">Alat peraga yang mudah didapat</h2>',
  p('Alat peraga tidak harus mahal. Banyak benda sehari-hari bisa menjadi alat bantu matematika yang efektif, asalkan aman, mudah dipegang, dan dipakai secara konsisten. Tabel berikut memuat beberapa pilihan yang mudah ditemukan di sekolah dan rumah di Indonesia.'),
  table('Alat peraga matematika sederhana dan kegunaannya', ['Alat', 'Kegunaan', 'Tips'], [
    ['Lidi atau sedotan diikat per sepuluh', 'Nilai tempat satuan dan puluhan', 'Gunakan karet warna berbeda untuk tiap ikatan'],
    ['Tutup botol', 'Membilang, menjumlah, mengurangi', 'Pilih ukuran yang tidak mudah tertelan untuk anak kecil'],
    ['Papan congklak', 'Membilang satu per satu dan konsep membagi rata', 'Mulai dengan sedikit biji supaya anak tidak kewalahan'],
    ['Garis bilangan dari lakban di lantai', 'Penjumlahan dan pengurangan dengan melangkah', 'Cocok untuk anak yang perlu banyak bergerak'],
    ['Kartu angka buatan sendiri', 'Mengenal lambang bilangan', 'Pasangkan angka dengan titik atau gambar'],
    ['Uang mainan atau uang asli pecahan kecil', 'Nilai uang dan transaksi sederhana', 'Latih dengan situasi belanja nyata'],
  ]),
  fig(`${IMG}/matematika-abk-congklak.webp`, 1200, 900, 'Papan congklak berwarna hijau tosca berisi biji-bijian di setiap lubangnya, diletakkan di atas karpet abu-abu', 'Congklak adalah permainan tradisional yang melatih anak membilang satu per satu. Foto ini diambil pada kegiatan Komunitas Wikimedia Jakarta.', CC(M_CONGKLAK, 'Pitchrigi', ...BYSA4)),
  p('Alat peraga multisensori, yaitu yang bisa dilihat, diraba, dan digerakkan, membantu banyak anak dengan hambatan belajar. Prinsip yang sama dipakai dalam pendekatan Montessori, yang dibahas di artikel <a href="/artikel/metode-montessori">metode Montessori</a> dan <a href="/artikel/mainan-montessori">mainan Montessori</a>.'),

  '<h2 id="kebutuhan">Penyesuaian untuk kebutuhan berbeda</h2>',
  p('Setiap jenis hambatan memengaruhi cara belajar matematika dengan cara yang berbeda. Gambaran berikut bersifat umum, karena dua anak dengan kondisi yang sama bisa membutuhkan dukungan yang berbeda. Gunakan hasil asesmen sebagai acuan utama.'),
  table('Gambaran penyesuaian pelajaran matematika sesuai kebutuhan belajar', ['Kebutuhan', 'Penyesuaian yang sering membantu'], [
    ['Hambatan penglihatan', 'Alat peraga yang bisa diraba, soal huruf besar atau braille, penjelasan lisan untuk gambar'],
    ['Hambatan pendengaran', 'Langkah ditulis dan diperagakan, kosakata matematika diajarkan dengan isyarat atau gambar'],
    ['Hambatan intelektual', 'Modifikasi target, banyak pengulangan, konteks kehidupan sehari-hari'],
    ['Hambatan perhatian', 'Soal sedikit per lembar, istirahat singkat, tugas bertahap'],
    ['Spektrum autisme', 'Jadwal dan langkah kerja visual, rutinitas yang dapat diprediksi, minat anak sebagai konteks soal'],
    ['Hambatan motorik', 'Jawaban lisan atau dengan menunjuk, alat tulis berpegangan besar'],
  ]),
  p('Anak dengan spektrum autisme sering terbantu oleh langkah kerja yang ditampilkan secara visual. Cara membuat dukungan seperti ini dibahas di <a href="/artikel/cara-membuat-jadwal-visual-untuk-anak-autis">cara membuat jadwal visual untuk anak autis</a>, dan strategi kelas secara umum di <a href="/artikel/strategi-mengajar-anak-autis-di-kelas">strategi mengajar anak autis di kelas</a>. Pendekatan beragam cara ini sejalan dengan ' + ext(URL_UDL, 'prinsip Universal Design for Learning dari CAST') + '.'),

  '<h2 id="nilai">Menilai hasil belajar matematika</h2>',
  p('Hasil belajar anak dengan materi modifikasi dinilai terhadap tujuan modifikasinya sendiri, bukan terhadap tujuan kelas. ' + ext(URL_P21, 'Permendikbudristek Nomor 21 Tahun 2022') + ' menyebut penilaian sumatif membandingkan capaian siswa dengan kriteria ketercapaian tujuan pembelajaran. Untuk anak dengan modifikasi, tujuan pembelajaran itu adalah tujuan yang tertulis dalam PPI.'),
  p('Catat juga tingkat bantuan yang diberikan, misalnya dengan benda konkret, dengan gambar, atau mandiri. Catatan ini menunjukkan perkembangan anak dalam urutan konkret, gambar, simbol. Cara menyusun kriterianya dibahas di <a href="/artikel/rubrik-penilaian-anak-berkebutuhan-khusus">rubrik penilaian anak berkebutuhan khusus</a>, dan cara mengumpulkan buktinya di <a href="/artikel/penilaian-portofolio-anak-abk">penilaian portofolio anak ABK</a>.'),
  p('Saat ulangan, anak bisa memakai soal yang disesuaikan. Panduannya ada di artikel <a href="/artikel/adaptasi-soal-ujian-untuk-anak-abk">adaptasi soal ujian untuk anak ABK</a>. Di rapor, jelaskan bahwa capaian matematika mengacu pada tujuan yang dimodifikasi supaya orang tua dan sekolah berikutnya tidak salah membaca nilainya.'),
  p('Di Sekolah Inklusi Taruna Imani yang dikelola YUKA, penyesuaian materi selalu dibicarakan bersama orang tua. Latihan sederhana di rumah, seperti menghitung piring saat menyiapkan makan atau membayar di warung, sering mempercepat pemahaman anak karena matematika menjadi bagian dari kehidupannya. Semangat ini sejalan dengan pandangan ' + ext(URL_UNESCO, 'UNESCO tentang pendidikan inklusif') + '.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(mFaq),
];

const articles = [
  {
    slug: 'cara-membuat-rapor-anak-berkebutuhan-khusus',
    titleTag: 'Cara Membuat Rapor Anak Berkebutuhan Khusus | YUKA',
    metaDesc: 'Cara membuat rapor anak berkebutuhan khusus: dasar aturan, bahan, langkah menyusun, isi dan format, contoh kalimat deskripsi, dan cara menyampaikannya.',
    keywords: 'cara membuat rapor anak berkebutuhan khusus, rapor anak abk, rapor sekolah inklusi, deskripsi rapor abk',
    ogTitle: 'Cara Membuat Rapor Anak Berkebutuhan Khusus',
    ogDesc: 'Panduan menyusun rapor anak ABK di sekolah inklusi: langkah, format, contoh kalimat deskripsi, dan cara membahasnya dengan orang tua.',
    h1: 'Cara Membuat Rapor Anak Berkebutuhan Khusus: Langkah, Format, dan Contoh Deskripsi',
    crumb: 'Cara Membuat Rapor Anak Berkebutuhan Khusus',
    category: 'Pendidikan',
    datePublished: '2026-11-05T08:00:00+07:00', dateModified: '2026-11-05T08:00:00+07:00',
    dateDisplay: '5 November 2026', readTime: '13 menit baca',
    image: {
      file: `${IMG}/rapor-abk-hero.webp`, w: 1200, h: 800,
      alt: 'Seorang guru berkerudung putih memperagakan isyarat tangan kepada siswi berseragam yang duduk di meja warna-warni, seorang guru laki-laki duduk di sampingnya',
      caption: 'Guru dan pendamping bekerja bersama seorang siswi dalam program pendidikan inklusif di Indonesia. Pengamatan seperti ini menjadi bahan utama rapor anak ABK.',
      credit: PD(R_HERO),
    },
    bodyHtml: rBody.join('\n'), faq: rFaq,
    related: [
      { href: '/artikel/penilaian-portofolio-anak-abk', title: 'Penilaian Portofolio Anak ABK', desc: 'Mengumpulkan bukti perkembangan anak sebagai bahan rapor.' },
      { href: '/artikel/rubrik-penilaian-anak-berkebutuhan-khusus', title: 'Rubrik Penilaian Anak Berkebutuhan Khusus', desc: 'Menyusun kriteria penilaian yang adil di kelas inklusi.' },
      { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Rencana tertulis per anak berisi tujuan, layanan, dan cara evaluasi.' },
    ],
    tags: ['Rapor', 'SekolahInklusi', 'Penilaian'],
    sources: [
      { url: URL_P21, label: 'Permendikbudristek Nomor 21 Tahun 2022 tentang Standar Penilaian Pendidikan (Berita Negara 2022 Nomor 460), Pasal 8 dan Pasal 9' },
      { url: URL_PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
      { url: URL_UDL, label: 'CAST: Universal Design for Learning Guidelines' },
      { url: URL_UNESCO, label: 'UNESCO: Inclusion in education' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 7 November 2026. Contoh format dan kalimat di artikel ini adalah praktik umum di kelas inklusi dan perlu disesuaikan dengan kebijakan sekolah serta hasil asesmen tiap anak.',
  },
  {
    slug: 'modifikasi-materi-pelajaran-matematika-untuk-abk',
    titleTag: 'Modifikasi Materi Pelajaran Matematika untuk ABK | YUKA',
    metaDesc: 'Modifikasi materi pelajaran matematika untuk ABK: beda akomodasi dan modifikasi, langkah menyesuaikan, urutan konkret-gambar-simbol, contoh per topik, dan alat peraga.',
    keywords: 'modifikasi materi pelajaran matematika untuk abk, matematika anak berkebutuhan khusus, alat peraga matematika abk',
    ogTitle: 'Modifikasi Materi Pelajaran Matematika untuk ABK',
    ogDesc: 'Panduan menyesuaikan materi matematika untuk anak berkebutuhan khusus di kelas inklusi, lengkap dengan contoh per topik dan alat peraga sederhana.',
    h1: 'Modifikasi Materi Pelajaran Matematika untuk ABK: Langkah, Contoh, dan Alat Peraga',
    crumb: 'Modifikasi Materi Matematika untuk ABK',
    category: 'Pendidikan',
    datePublished: '2026-11-06T08:00:00+07:00', dateModified: '2026-11-06T08:00:00+07:00',
    dateDisplay: '6 November 2026', readTime: '14 menit baca',
    image: {
      file: `${IMG}/matematika-abk-hero.webp`, w: 1200, h: 800,
      alt: 'Siswi SMP berkerudung putih bekerja berkelompok di meja kelas berisi buku dan alat percobaan, guru berkerudung duduk di belakang',
      caption: 'Siswa SMP belajar berkelompok di sebuah sekolah mitra program USAID PRIORITAS. Tugas yang disesuaikan memungkinkan anak ABK tetap bekerja bersama teman sekelas.',
      credit: PD(M_HERO),
    },
    bodyHtml: mBody.join('\n'), faq: mFaq,
    related: [
      { href: '/artikel/diferensiasi-pembelajaran-untuk-anak-abk', title: 'Diferensiasi Pembelajaran untuk Anak ABK', desc: 'Menyesuaikan konten, proses, dan produk belajar di kelas inklusi.' },
      { href: '/artikel/diskalkulia-adalah', title: 'Diskalkulia', desc: 'Mengenal kesulitan belajar matematika yang menetap pada anak.' },
      { href: '/artikel/adaptasi-soal-ujian-untuk-anak-abk', title: 'Adaptasi Soal Ujian untuk Anak ABK', desc: 'Menyesuaikan soal ulangan tanpa mengurangi makna penilaian.' },
    ],
    tags: ['Matematika', 'SekolahInklusi', 'Kurikulum'],
    sources: [
      { url: URL_CRA, label: 'LD@school: The CRA Approach (Concrete, Representational, Abstract)' },
      { url: URL_PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
      { url: URL_P21, label: 'Permendikbudristek Nomor 21 Tahun 2022 tentang Standar Penilaian Pendidikan (Berita Negara 2022 Nomor 460)' },
      { url: URL_UDL, label: 'CAST: Universal Design for Learning Guidelines' },
      { url: URL_UNESCO, label: 'UNESCO: Inclusion in education' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 7 November 2026. Contoh tujuan dan alat peraga di artikel ini adalah praktik umum di kelas inklusi dan tidak menggantikan asesmen untuk tiap anak.',
  },
];

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

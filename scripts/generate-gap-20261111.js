'use strict';
/*
 * Generator artikel 11 November 2026 (cycle #95 /cek-daily-artikel, tambal hari kosong).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5", baris 132: "metode multisensori untuk anak belajar membaca".
 * Belum punya artikel (yang ada: belajar-membaca-ala-montessori dan disleksia-adalah, beda intent).
 *
 * Fakta: Report of the National Reading Panel (NICHD, 2000), halaman NICHD tentang gangguan membaca,
 * PP 13/2020 (akomodasi yang layak), Jurnal Basicedu (Primasari, metode multisensori untuk siswa disleksia).
 * Foto: Wikimedia Commons (domain publik USAID Indonesia, CC BY 2.0, CC BY-SA 4.0). Diagram SVG sendiri. Nol AI.
 *
 *   node scripts/generate-gap-20261111.js --prepare   # tulis SVG diagram
 *   node scripts/generate-gap-20261111.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-gap-20261111.js             # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const BY2 = 'https://creativecommons.org/licenses/by/2.0/';
const BYSA = 'https://creativecommons.org/licenses/by-sa/4.0/';
const CC = (page, author, lic, licUrl) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">${author}</a> / Wikimedia Commons, <a href="${licUrl}" target="_blank" rel="nofollow noopener">${lic}</a>.`;
const PDU = (page) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">USAID Indonesia</a> / Wikimedia Commons, domain publik.`;
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

const URL_NRP = 'https://www.nichd.nih.gov/publications/pubs/nrp/findings';
const URL_NICHD = 'https://www.nichd.nih.gov/health/topics/reading/conditioninfo/disorders';
const URL_PP13 = 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020';
const URL_BASICEDU = 'https://jbasic.org/index.php/basicedu/article/view/1055';

const F_HERO = 'https://commons.wikimedia.org/wiki/File:Membaca_Bersama.jpg';
const F_SAND = 'https://commons.wikimedia.org/wiki/File:Sandpaper_letters.jpg';
const F_MAGNET = 'https://commons.wikimedia.org/wiki/File:Magnetic_letters_scattered_on_a_refrigerator_door.jpg';
const F_BERGAMBAR = 'https://commons.wikimedia.org/wiki/File:Anak-anak_selalu_senang_membaca_buku_bergambar._Ternyata_selain_menyenangkan,_buku_bergambar_mendorong_minat_baca_karena_anak-anak_lebih_bisa_memahami_tulisan_dengan_bantuan_gambar._(34651216762).jpg';

const sections = [
  ['arti', 'Apa itu metode multisensori'],
  ['vakt', 'Empat jalur indra dalam metode VAKT'],
  ['siapa', 'Anak yang paling terbantu'],
  ['ragam', 'Ragam metode multisensori yang dikenal'],
  ['bukti', 'Apa kata penelitian'],
  ['langkah', 'Langkah satu sesi belajar membaca'],
  ['kegiatan', 'Contoh kegiatan dengan bahan sederhana'],
  ['sekolah', 'Di sekolah dan di rumah'],
  ['salah', 'Kesalahan yang sering terjadi'],
  ['faq', 'Pertanyaan umum'],
];

const faq = [
  { q: 'Apa yang dimaksud metode multisensori untuk belajar membaca?', a: 'Metode multisensori adalah cara mengajarkan membaca dengan melibatkan beberapa indra sekaligus, biasanya penglihatan, pendengaran, gerakan, dan sentuhan. Anak melihat huruf, mendengar dan mengucapkan bunyinya, lalu menelusuri atau membentuk huruf itu dengan tangan, sehingga hubungan huruf dan bunyi lebih mudah diingat.' },
  { q: 'Apa kepanjangan VAKT?', a: 'VAKT adalah singkatan dari visual, auditori, kinestetik, dan taktil. Visual berarti melihat, auditori berarti mendengar dan mengucapkan, kinestetik berarti bergerak, dan taktil berarti meraba. Keempat jalur ini dipakai bersamaan dalam satu kegiatan.' },
  { q: 'Apakah metode multisensori hanya untuk anak disleksia?', a: 'Tidak. Metode ini sering dipakai untuk anak dengan disleksia, tetapi juga membantu anak yang lambat belajar, anak dengan hambatan perhatian, dan anak usia dini yang baru mengenal huruf. Prinsipnya bisa dipakai di kelas reguler maupun kelas inklusi.' },
  { q: 'Berapa lama satu sesi belajar membaca multisensori?', a: 'Untuk anak usia sekolah dasar, sesi singkat sekitar 15 sampai 30 menit yang dilakukan rutin biasanya lebih efektif daripada sesi panjang yang jarang. Sesuaikan dengan daya tahan dan konsentrasi anak, dan akhiri sesi sebelum anak terlalu lelah.' },
  { q: 'Apakah ada bukti bahwa metode multisensori efektif?', a: 'Bukti paling kuat ada pada pengajaran kesadaran fonemik dan fonik yang sistematis. Laporan National Reading Panel tahun 2000 menyimpulkan pengajaran fonik sistematis bermanfaat bagi anak yang kesulitan belajar membaca. Teknik multisensori adalah cara menyampaikan pengajaran itu, jadi isinya tetap harus terstruktur dan berurutan.' },
  { q: 'Bahan apa yang dibutuhkan untuk metode multisensori di rumah?', a: 'Bahan sederhana sudah cukup: kartu huruf dari kertas amplas atau kardus, nampan berisi pasir atau garam, plastisin, huruf magnet, buku cerita bergambar, dan papan tulis kecil. Yang terpenting adalah urutan latihan yang konsisten, bukan alat yang mahal.' },
  { q: 'Kapan anak perlu dibawa ke profesional karena sulit membaca?', a: 'Pertimbangkan pemeriksaan bila anak tetap kesulitan mengenal huruf dan bunyinya setelah diajar dengan cara yang tepat, sering tertukar huruf jauh melampaui usia sebayanya, atau tertinggal jauh dari teman sekelas. Psikolog, dokter tumbuh kembang, atau guru pendidikan khusus dapat melakukan asesmen untuk mengetahui penyebabnya.' },
  { q: 'Apakah sekolah wajib menyesuaikan cara mengajar untuk anak yang sulit membaca?', a: 'Untuk peserta didik penyandang disabilitas, PP Nomor 13 Tahun 2020 mewajibkan satuan pendidikan menyediakan akomodasi yang layak. Penyesuaian cara mengajar, materi, dan waktu bisa dibicarakan bersama guru dan dituliskan dalam Program Pembelajaran Individual.' },
];

addDiagram(`${IMG}/multisensori-vakt.webp`, svg.flow('Empat jalur indra dalam metode VAKT', 'Satu huruf dipelajari lewat beberapa indra sekaligus', [
  { h: 'Visual', d: 'Melihat bentuk huruf yang jelas dan berwarna.' },
  { h: 'Auditori', d: 'Mendengar dan mengucapkan bunyi huruf.' },
  { h: 'Kinestetik', d: 'Menulis huruf besar di udara atau di lantai.' },
  { h: 'Taktil', d: 'Meraba huruf amplas atau menulis di pasir.' },
]));
addDiagram(`${IMG}/multisensori-sesi.webp`, svg.flow('Alur satu sesi membaca multisensori', 'Contoh sesi 15 sampai 30 menit untuk anak usia SD', [
  { h: 'Ulang', d: 'Tinjau huruf yang sudah dipelajari.' },
  { h: 'Kenalkan', d: 'Satu bunyi baru: lihat, dengar, ucapkan.' },
  { h: 'Rasakan', d: 'Telusuri dan bentuk hurufnya.' },
  { h: 'Rangkai', d: 'Gabungkan bunyi menjadi suku kata.' },
  { h: 'Baca', d: 'Pakai di kata dan kalimat pendek.' },
]));

const body = [
  p('<strong>Metode multisensori untuk anak belajar membaca</strong> adalah cara mengajarkan huruf, bunyi, dan kata dengan melibatkan beberapa indra sekaligus: penglihatan, pendengaran, gerakan, dan sentuhan. Anak tidak hanya melihat huruf di buku, tetapi juga mengucapkan bunyinya, menelusuri bentuknya dengan jari, dan membentuknya dengan benda. Cara ini banyak dipakai untuk anak dengan disleksia dan anak yang kesulitan belajar membaca.'),
  p('Panduan ini ditujukan untuk orang tua, guru kelas, dan guru pendamping yang ingin membantu anak membaca dengan cara yang lebih ramah. Kami membahas pengertian metode multisensori, empat jalur indra dalam pendekatan VAKT, anak yang paling terbantu, ragam metode yang dikenal, apa kata penelitian, langkah satu sesi belajar, dan contoh kegiatan dengan bahan sederhana di rumah.'),
  toc(sections),

  '<h2 id="arti">Apa itu metode multisensori</h2>',
  p('Membaca pada dasarnya adalah menghubungkan simbol tertulis dengan bunyi bahasa. Bagi sebagian besar anak, hubungan ini terbentuk lewat melihat dan mendengar. Bagi sebagian anak lain, dua jalur itu belum cukup. Huruf b dan d tetap tertukar, bunyi yang sudah dipelajari kemarin hilang hari ini, dan membaca terasa melelahkan.'),
  p('Metode multisensori menambah jalur masuk. Saat anak belajar huruf m, ia melihat bentuknya, mendengar guru mengucapkan bunyi /m/, mengucapkannya sendiri sambil merasakan bibir yang tertutup, lalu menelusuri bentuk huruf itu dengan jari di atas kertas amplas. Semakin banyak jalur yang dipakai bersamaan, semakin banyak "pegangan" yang dimiliki otak untuk mengingat.'),
  p('Pendekatan ini bukan hal baru. Guru pendidikan khusus sudah lama memakainya, dan prinsipnya juga dipakai dalam metode Montessori yang kami bahas di <a href="/artikel/belajar-membaca-ala-montessori">belajar membaca ala Montessori</a>. Perbedaannya, metode multisensori untuk anak dengan kesulitan membaca biasanya disusun lebih terstruktur, berurutan, dan diulang lebih sering.'),
  fig(`${IMG}/multisensori-huruf-amplas.webp`, 1200, 798, 'Tangan seorang anak menelusuri huruf m kecil berbahan amplas di atas kartu merah muda yang diletakkan di meja kayu', 'Anak menelusuri huruf amplas dengan jari. Kegiatan taktil seperti ini membantu anak mengingat bentuk huruf sambil mengucapkan bunyinya.', CC(F_SAND, 'Lisa Maruna', 'CC BY 2.0', BY2)),

  '<h2 id="vakt">Empat jalur indra dalam metode VAKT</h2>',
  p('Istilah yang paling sering dipakai untuk menggambarkan metode multisensori adalah VAKT, singkatan dari visual, auditori, kinestetik, dan taktil. Penelitian di Indonesia juga memakai pembagian ini, misalnya ' + ext(URL_BASICEDU, 'artikel di Jurnal Basicedu') + ' yang menggambarkan peserta didik disleksia belajar dengan memanfaatkan memori visual, auditori, kinestetik, dan taktil.'),
  table('Empat jalur indra dalam metode VAKT dan contoh kegiatannya', ['Jalur', 'Artinya', 'Contoh kegiatan membaca'], [
    ['Visual', 'Melihat', 'Kartu huruf berwarna, huruf besar di papan, buku bergambar, penanda warna untuk huruf yang mirip'],
    ['Auditori', 'Mendengar dan mengucapkan', 'Mengucapkan bunyi huruf, bertepuk mengikuti suku kata, lagu huruf, membaca bergantian'],
    ['Kinestetik', 'Bergerak', 'Menulis huruf besar di udara, melompat di atas huruf di lantai, menyusun huruf magnet'],
    ['Taktil', 'Meraba', 'Menelusuri huruf amplas, menulis di nampan pasir, membentuk huruf dari plastisin'],
  ]),
  p('Keempat jalur ini sebaiknya dipakai bersamaan dalam satu kegiatan, bukan bergiliran tanpa hubungan. Contohnya, anak menelusuri huruf amplas (taktil) sambil melihat bentuknya (visual) dan mengucapkan bunyinya keras-keras (auditori), lalu menuliskannya besar-besar di udara dengan seluruh lengan (kinestetik). Kuncinya adalah satu bunyi dihubungkan ke satu bentuk lewat banyak jalur pada saat yang sama.'),
  diag(`${IMG}/multisensori-vakt.webp`, 'Diagram empat jalur indra VAKT: visual melihat huruf, auditori mendengar dan mengucapkan bunyi, kinestetik menulis huruf di udara, dan taktil meraba huruf', 'Empat jalur indra dalam metode VAKT. Dalam praktik, keempatnya dipakai bersamaan untuk satu huruf atau satu kata.'),

  '<h2 id="siapa">Anak yang paling terbantu</h2>',
  p('Metode multisensori paling sering dikaitkan dengan disleksia. ' + ext(URL_NICHD, 'NICHD') + ', lembaga riset kesehatan anak di Amerika Serikat, menjelaskan bahwa disleksia adalah jenis gangguan membaca yang umumnya ditandai kesulitan membaca kata satu per satu, dan penyandangnya sering kesulitan membunyikan kata. NICHD juga menegaskan bahwa gangguan membaca bukan tanda kecerdasan rendah atau malas belajar. Penjelasan lengkap tentang kondisi ini ada di <a href="/artikel/disleksia-adalah">disleksia adalah</a>.'),
  p('Selain anak dengan disleksia, metode ini juga membantu:'),
  ul([
    '<strong>Anak lambat belajar</strong> yang butuh pengulangan lebih banyak dan contoh lebih konkret. Lihat <a href="/artikel/slow-learner">slow learner</a>.',
    '<strong>Anak dengan hambatan perhatian</strong> yang lebih mudah fokus saat tubuhnya ikut bergerak.',
    '<strong>Anak dengan gangguan pemrosesan sensorik</strong>, asalkan kegiatannya diatur agar tidak berlebihan. Baca <a href="/artikel/gangguan-pemrosesan-sensorik">gangguan pemrosesan sensorik</a>.',
    '<strong>Anak usia dini</strong> yang baru mengenal huruf dan lebih suka belajar lewat bermain.',
    '<strong>Anak yang pernah gagal</strong> dengan cara biasa dan mulai kehilangan rasa percaya diri saat membaca.',
  ]),
  p('Satu catatan penting: kesulitan membaca bisa punya banyak penyebab, termasuk masalah penglihatan atau pendengaran. Sebelum menyimpulkan anak mengalami disleksia, pastikan mata dan telinganya sudah diperiksa, lalu minta asesmen dari tenaga profesional. Gambaran asesmen di sekolah ada di <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik anak berkebutuhan khusus</a>.'),

  '<h2 id="ragam">Ragam metode multisensori yang dikenal</h2>',
  p('Ada beberapa metode yang memakai prinsip multisensori. Masing-masing punya penekanan berbeda, dan banyak guru memadukan unsur dari beberapa metode sesuai kebutuhan anak.'),
  table('Perbandingan beberapa metode membaca yang memakai prinsip multisensori', ['Metode', 'Ciri utama', 'Cocok untuk'], [
    ['VAKT umum', 'Memadukan melihat, mendengar, bergerak, dan meraba untuk tiap huruf atau kata', 'Pengenalan huruf dan bunyi di kelas awal'],
    ['Fernald', 'Anak menelusuri kata dengan jari sambil mengucapkannya, lalu menulisnya dari ingatan', 'Anak yang kesulitan mengingat bentuk kata utuh'],
    ['Orton-Gillingham', 'Fonik eksplisit, sistematis, berurutan, dan multisensori, diajarkan satu per satu', 'Anak dengan disleksia, biasanya lewat guru terlatih'],
    ['Montessori', 'Huruf amplas dan huruf lepas, anak belajar bunyi lewat sentuhan dan penyusunan kata', 'Anak usia dini dan kelas awal'],
  ]),
  p('Yang menyatukan semua metode itu adalah dua hal. Pertama, hubungan huruf dan bunyi diajarkan secara langsung, bukan ditebak dari gambar. Kedua, materi disusun berurutan dari yang mudah ke yang sulit, dan setiap langkah diulang sampai anak benar-benar menguasainya sebelum pindah ke langkah berikutnya.'),
  fig(`${IMG}/multisensori-huruf-magnet.webp`, 1024, 721, 'Huruf magnet plastik berwarna merah, hijau, biru, kuning, dan oranye berserakan di permukaan pintu kulkas berwarna putih', 'Huruf magnet berwarna. Anak bisa memegang, memindahkan, dan menyusun huruf menjadi suku kata, sehingga belajar membaca melibatkan gerakan tangan.', CC(F_MAGNET, 'lylamerle', 'CC BY 2.0', BY2)),

  '<h2 id="bukti">Apa kata penelitian</h2>',
  p('Orang tua berhak tahu seberapa kuat bukti di balik sebuah metode. Salah satu rujukan besar adalah ' + ext(URL_NRP, 'Report of the National Reading Panel') + ' yang diterbitkan NICHD pada April 2000. Panel ini meninjau penelitian eksperimen tentang cara mengajarkan membaca dengan analisis gabungan (meta-analisis).'),
  p('Temuannya, pengajaran <strong>kesadaran fonemik</strong> (kemampuan mendengar dan memainkan bunyi terkecil dalam kata) meningkatkan kemampuan membaca dan mengeja secara bermakna, dan efeknya bertahan setelah latihan selesai. Pengajaran <strong>fonik yang sistematis</strong> juga memberi manfaat bermakna, termasuk bagi anak yang kesulitan belajar membaca. Panel juga mengingatkan bahwa fonik hanyalah satu bagian dari program membaca yang utuh, bersama kelancaran, kosakata, dan pemahaman.'),
  table('Ringkasan temuan National Reading Panel yang relevan dengan metode multisensori', ['Unsur pengajaran', 'Temuan panel', 'Artinya untuk metode multisensori'], [
    ['Kesadaran fonemik', 'Meningkatkan kemampuan membaca dan mengeja, efeknya bertahan setelah latihan', 'Latihan bunyi (auditori) wajib ada di setiap sesi'],
    ['Fonik sistematis', 'Bermanfaat bermakna, termasuk bagi anak yang kesulitan membaca', 'Huruf dan bunyi diajarkan berurutan, bukan acak'],
    ['Program membaca utuh', 'Fonik perlu dipadukan dengan kelancaran dan pemahaman', 'Jangan berhenti di huruf, lanjutkan ke kata dan cerita'],
  ]),
  p('Lalu di mana posisi teknik multisensori? Teknik multisensori adalah <strong>cara menyampaikan</strong> pengajaran fonik dan kesadaran fonemik itu, bukan pengganti isinya. Kegiatan meraba huruf atau menulis di pasir akan bermanfaat bila dipakai untuk mengajarkan hubungan huruf dan bunyi secara berurutan. Tanpa urutan yang jelas, kegiatan yang menyenangkan pun bisa tidak menambah kemampuan membaca.'),
  p('Di Indonesia, penelitian deskriptif seperti ' + ext(URL_BASICEDU, 'kajian di Jurnal Basicedu') + ' melaporkan bahwa metode multisensori membantu meningkatkan kemampuan membaca siswa dengan karakteristik disleksia di sekolah dasar. Penelitian semacam ini memberi gambaran praktik di kelas kita, walau skalanya masih kecil.'),

  '<h2 id="langkah">Langkah satu sesi belajar membaca multisensori</h2>',
  p('Sesi yang baik singkat, rutin, dan punya pola yang sama setiap kali, sehingga anak merasa aman dan tahu apa yang akan terjadi. Berikut contoh urutan sesi 15 sampai 30 menit untuk anak usia sekolah dasar:'),
  ol([
    '<strong>Ulang materi lama.</strong> Tunjukkan kartu huruf yang sudah dipelajari, minta anak mengucapkan bunyinya. Mulai dari yang ia kuasai agar sesi dibuka dengan rasa berhasil.',
    '<strong>Kenalkan satu bunyi baru.</strong> Tunjukkan hurufnya, ucapkan bunyinya dengan jelas, lalu minta anak menirukan sambil memperhatikan gerak mulutnya di cermin.',
    '<strong>Rasakan bentuknya.</strong> Anak menelusuri huruf amplas dengan dua jari sambil mengucapkan bunyinya, lalu menulisnya di nampan pasir dan di udara dengan lengan lurus.',
    '<strong>Rangkai menjadi suku kata.</strong> Pakai huruf magnet atau kartu untuk menggabungkan bunyi, misalnya m dan a menjadi ma. Minta anak menggeser huruf sambil membunyikannya.',
    '<strong>Baca dalam kata dan kalimat.</strong> Tuliskan kata pendek yang memakai bunyi itu, lalu kalimat sederhana. Bacakan bersama, lalu biarkan anak mencoba sendiri.',
    '<strong>Tutup dengan cerita.</strong> Bacakan buku bergambar pendek, minta anak mencari huruf yang baru dipelajari di halaman buku.',
  ]),
  diag(`${IMG}/multisensori-sesi.webp`, 'Diagram alur lima tahap satu sesi membaca multisensori: ulang, kenalkan bunyi baru, rasakan bentuk huruf, rangkai menjadi suku kata, dan baca dalam kata serta kalimat', 'Alur satu sesi membaca multisensori. Urutan ini contoh umum; tempo dan jumlah materi disesuaikan dengan kemampuan anak.'),
  p('Catat kemajuan setiap sesi dalam buku kecil: huruf apa yang sudah dikuasai, kata apa yang masih sulit, dan berapa lama anak bertahan fokus. Catatan ini berguna saat berdiskusi dengan guru, dan bisa menjadi bahan tujuan membaca dalam <a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual</a>.'),

  '<h2 id="kegiatan">Contoh kegiatan dengan bahan sederhana</h2>',
  p('Metode multisensori tidak membutuhkan alat mahal. Banyak kegiatan bisa dibuat dari bahan yang ada di rumah atau di sekolah.'),
  table('Contoh kegiatan multisensori dan bahan yang dibutuhkan', ['Kegiatan', 'Bahan', 'Jalur indra'], [
    ['Huruf amplas', 'Kertas amplas halus, kardus, lem, gunting', 'Taktil, visual, auditori'],
    ['Menulis di nampan pasir', 'Nampan, pasir bersih, garam, atau tepung', 'Taktil, kinestetik'],
    ['Huruf plastisin', 'Plastisin atau adonan tepung', 'Taktil, visual'],
    ['Lompat huruf', 'Kapur atau selotip kertas di lantai', 'Kinestetik, auditori'],
    ['Menyusun suku kata', 'Huruf magnet atau kartu huruf', 'Visual, kinestetik, auditori'],
    ['Tepuk suku kata', 'Tidak perlu bahan', 'Auditori, kinestetik'],
    ['Mencari huruf di buku', 'Buku cerita bergambar', 'Visual, auditori'],
  ]),
  p('Beberapa tips agar kegiatan berjalan baik. Pakai huruf kecil lebih dulu karena huruf kecil paling sering muncul di bacaan. Pisahkan huruf yang mudah tertukar seperti b dan d atau p dan q, jangan diajarkan pada hari yang sama. Beri warna penanda yang konsisten, misalnya huruf vokal selalu merah. Untuk anak yang mudah kewalahan oleh sentuhan atau suara, mulai dari satu jalur yang paling ia sukai lalu tambahkan perlahan.'),
  fig(`${IMG}/multisensori-buku-bergambar.webp`, 1200, 1109, 'Seorang siswi SD berseragam putih tersenyum ke arah kamera sambil memegang pensil di atas buku bacaan bergambar yang terbuka di meja kelas', 'Siswi SD di Medan membaca buku bergambar di kelas. Gambar membantu anak memahami isi tulisan dan membuat kegiatan membaca terasa lebih menyenangkan.', PDU(F_BERGAMBAR)),

  '<h2 id="sekolah">Di sekolah dan di rumah</h2>',
  p('Metode multisensori paling efektif bila sekolah dan rumah memakai cara yang sama. Guru bisa memberi tahu orang tua huruf atau kata apa yang sedang dipelajari minggu ini, lalu orang tua mengulang dengan kegiatan singkat di rumah. Kebiasaan kecil yang konsisten lebih berpengaruh daripada sesi panjang yang hanya sesekali.'),
  p('Di kelas inklusi, guru tidak perlu membuat pelajaran terpisah untuk satu anak. Kegiatan seperti tepuk suku kata, huruf di lantai, atau menyusun kata dengan kartu bisa dinikmati seluruh kelas, sementara anak yang membutuhkan mendapat latihan tambahan dari <a href="/artikel/gpk-adalah">guru pendamping khusus</a> atau <a href="/artikel/shadow-teacher-adalah">shadow teacher</a>. Pendekatan ini sejalan dengan prinsip <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a>.'),
  p('Bagi peserta didik penyandang disabilitas, penyesuaian ini juga punya dasar hukum. ' + ext(URL_PP13, 'PP Nomor 13 Tahun 2020') + ' mewajibkan satuan pendidikan menyediakan akomodasi yang layak bagi peserta didik penyandang disabilitas. Penyesuaian cara mengajar membaca, waktu yang lebih panjang, atau bahan belajar yang berbeda bisa dibicarakan bersama sekolah.'),
  table('Pembagian peran dalam belajar membaca multisensori', ['Pihak', 'Peran utama'], [
    ['Guru kelas', 'Memakai kegiatan multisensori untuk seluruh kelas, menyusun urutan huruf dan bunyi'],
    ['Guru pendamping khusus', 'Memberi latihan tambahan yang lebih intensif dan mencatat kemajuan'],
    ['Orang tua', 'Mengulang kegiatan singkat di rumah, membacakan buku setiap hari, menjaga semangat anak'],
    ['Tenaga profesional', 'Melakukan asesmen dan memberi rekomendasi bila kesulitan menetap'],
  ]),

  '<h2 id="salah">Kesalahan yang sering terjadi</h2>',
  ul([
    '<strong>Banyak kegiatan, tanpa urutan.</strong> Kegiatan yang seru tidak cukup. Hubungan huruf dan bunyi tetap harus diajarkan berurutan dan diulang.',
    '<strong>Terlalu banyak huruf baru sekaligus.</strong> Satu atau dua bunyi baru per sesi sudah cukup bagi anak yang kesulitan.',
    '<strong>Pindah materi sebelum anak menguasai.</strong> Kalau dasar belum kuat, kesulitan akan menumpuk di tahap berikutnya.',
    '<strong>Berhenti di tingkat huruf.</strong> Anak perlu segera memakai bunyi yang dipelajari di kata, kalimat, dan cerita agar membaca terasa bermakna.',
    '<strong>Membandingkan dengan anak lain.</strong> Kemajuan setiap anak berbeda. Bandingkan anak dengan dirinya sendiri minggu lalu.',
    '<strong>Menunda asesmen terlalu lama.</strong> Bila kesulitan menetap, bantuan profesional sejak dini memberi hasil lebih baik. Baca juga <a href="/artikel/intervensi-dini">intervensi dini</a>.',
  ]),
  p('Yang paling penting, jaga agar membaca tetap terasa aman dan menyenangkan. Anak yang sulit membaca sering sudah lama merasa gagal. Pujian yang tulus untuk usaha, bukan hanya hasil, membantu anak mau mencoba lagi besok. Untuk memahami cara anak belajar secara lebih luas, lihat juga <a href="/artikel/kecerdasan-majemuk">kecerdasan majemuk</a> dan <a href="/artikel/sensori-integrasi">sensori integrasi</a>.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(faq),
];

const articles = [
  {
    slug: 'metode-multisensori-untuk-anak-belajar-membaca',
    titleTag: 'Metode Multisensori untuk Anak Belajar Membaca | YUKA',
    metaDesc: 'Metode multisensori untuk anak belajar membaca: arti VAKT, anak yang terbantu, metode Fernald dan Orton-Gillingham, bukti penelitian, langkah sesi, dan kegiatan di rumah.',
    keywords: 'metode multisensori untuk anak belajar membaca, metode VAKT, multisensori disleksia, cara mengajar membaca anak berkebutuhan khusus',
    ogTitle: 'Metode Multisensori untuk Anak Belajar Membaca',
    ogDesc: 'Panduan orang tua dan guru memakai metode multisensori VAKT untuk membantu anak yang kesulitan belajar membaca.',
    h1: 'Metode Multisensori untuk Anak Belajar Membaca: Pengertian VAKT, Langkah, dan Contoh Kegiatan',
    crumb: 'Metode Multisensori untuk Anak Belajar Membaca',
    category: 'Pendidikan',
    datePublished: '2026-11-11T08:00:00+07:00', dateModified: '2026-11-11T08:00:00+07:00',
    dateDisplay: '11 November 2026', readTime: '12 menit baca',
    image: {
      file: `${IMG}/multisensori-hero.webp`, w: 1200, h: 675,
      alt: 'Seorang relawan berkacamata membacakan buku cerita bergambar kepada enam anak yang duduk berkerumun di atas tikar bergambar hewan',
      caption: 'Relawan Buku Berkaki membacakan cerita untuk anak-anak. Membaca bersama melatih pendengaran dan penglihatan sekaligus, dua jalur penting dalam metode multisensori.',
      credit: CC(F_HERO, 'Moh. Ali Zaenal', 'CC BY-SA 4.0', BYSA),
    },
    bodyHtml: body.join('\n'), faq,
    related: [
      { href: '/artikel/disleksia-adalah', title: 'Disleksia Adalah', desc: 'Pengertian, ciri, dan penanganan disleksia pada anak.' },
      { href: '/artikel/belajar-membaca-ala-montessori', title: 'Belajar Membaca ala Montessori', desc: 'Cara Montessori mengenalkan huruf dan bunyi.' },
      { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Menuliskan tujuan belajar yang sesuai kebutuhan anak.' },
    ],
    tags: ['Membaca', 'Disleksia', 'Multisensori'],
    sources: [
      { url: URL_NRP, label: 'NICHD: Report of the National Reading Panel, Findings and Determinations (April 2000)' },
      { url: URL_NICHD, label: 'NICHD: What are reading disorders?' },
      { url: URL_PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
      { url: URL_BASICEDU, label: 'Jurnal Basicedu: Meningkatkan Kemampuan Membaca Siswa Disleksia dengan Metode Multisensori di Sekolah Dasar' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 12 November 2026. Langkah sesi dan contoh kegiatan adalah gambaran praktik umum dan perlu disesuaikan dengan kemampuan tiap anak; untuk kesulitan membaca yang menetap, konsultasikan dengan tenaga profesional.',
  },
];

function prepare() {
  fs.mkdirSync(path.join(ROOT, IMG), { recursive: true });
  for (const [file, markup] of Object.entries(diagrams)) fs.writeFileSync(imgPath(file.replace(/\.webp$/, '.svg')), markup);
  console.log(`Wrote ${Object.keys(diagrams).length} SVG diagrams into ${IMG}/`);
}
async function raster() {
  const sharp = require('D:/Projects/Karir Pintar/website/node_modules/sharp');
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

'use strict';
/*
 * Generator artikel 8 November 2026 (cycle #93 /cek-daily-artikel, tambal hari kosong).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5", baris 119: "universal design for learning udl abk".
 * Belum punya artikel (dicek terhadap artikel/*.html, tidak ada slug atau judul UDL).
 *
 * Fakta pedoman dari situs resmi CAST UDL Guidelines 3.0 (udlguidelines.cast.org).
 * Foto: Wikimedia Commons, domain publik USAID Indonesia (logo USAID dipotong keluar).
 * Diagram SVG deterministik dari scripts/lib/diagram-svg.js (bukan gambar AI).
 *
 *   node scripts/generate-gap-20261108.js --prepare   # tulis SVG diagram
 *   node scripts/generate-gap-20261108.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-gap-20261108.js             # render artikel/*.html
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


const URL_CAST = 'https://udlguidelines.cast.org/';
const URL_CAST_ENG = 'https://udlguidelines.cast.org/engagement/';
const URL_CAST_REP = 'https://udlguidelines.cast.org/representation/';
const URL_CAST_ACT = 'https://udlguidelines.cast.org/action-expression/';
const URL_PP13 = 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020';
const URL_P48 = 'https://peraturan.bpk.go.id/Details/285711';
const URL_UNESCO = 'https://www.unesco.org/en/inclusion-education';

const B_HERO = 'https://commons.wikimedia.org/wiki/File:EDU_-_Classroom_management_(4843397062).jpg';
const B_JOY = 'https://commons.wikimedia.org/wiki/File:Enthusiastic_children_in_class_(4324315285).jpg';
const B_WOOD = 'https://commons.wikimedia.org/wiki/File:Belajar_sambil_bermain_(25677567752).jpg';
const B_IPA = 'https://commons.wikimedia.org/wiki/File:Belajar_IPA_itu_menyenangkan!_(31416317574).jpg';
const B_GROUP = 'https://commons.wikimedia.org/wiki/File:Children_working_together_at_school_(4321352114).jpg';

const sections = [
  ['arti', 'Apa itu Universal Design for Learning'],
  ['asal', 'Asal-usul UDL dan pembaruan Pedoman 3.0'],
  ['prinsip', 'Tiga prinsip UDL'],
  ['pedoman', 'Sembilan pedoman dalam tiga baris'],
  ['beda', 'UDL, diferensiasi, akomodasi, dan modifikasi'],
  ['abk', 'Mengapa UDL penting untuk ABK di kelas inklusi'],
  ['langkah', 'Langkah merancang pelajaran dengan UDL'],
  ['contoh', 'Contoh rencana pelajaran IPA dengan UDL'],
  ['kendala', 'Kendala umum dan cara mengatasinya'],
  ['faq', 'Pertanyaan umum'],
];

const faq = [
  { q: 'Apa itu Universal Design for Learning (UDL)?', a: 'Universal Design for Learning adalah kerangka untuk merancang pembelajaran yang sejak awal memberi beberapa pilihan cara belajar, sehingga sebanyak mungkin murid bisa ikut, termasuk anak berkebutuhan khusus. Kerangka ini dikembangkan oleh lembaga nirlaba CAST dan dituangkan dalam Pedoman UDL.' },
  { q: 'Apa saja tiga prinsip UDL?', a: 'Tiga prinsip UDL adalah menyediakan beragam cara keterlibatan, beragam cara representasi, dan beragam cara aksi dan ekspresi. Singkatnya, guru memberi pilihan pada alasan anak mau belajar, bentuk materi yang diterima anak, dan cara anak menunjukkan pemahamannya.' },
  { q: 'Apa yang baru di Pedoman UDL 3.0?', a: 'CAST merilis Pedoman UDL 3.0 pada 30 Juli 2024. Pembaruan ini menanggapi masukan praktisi dan peneliti untuk menangani hambatan yang berakar pada bias dan praktik yang mengecualikan, baik bagi murid dengan disabilitas maupun tanpa disabilitas. Tujuan UDL juga dirumuskan sebagai kemandirian belajar atau learner agency.' },
  { q: 'Apa beda UDL dengan pembelajaran berdiferensiasi?', a: 'UDL dirancang di awal untuk seluruh kelas, sebelum guru tahu persis siapa yang akan kesulitan. Diferensiasi biasanya menyesuaikan konten, proses, atau produk untuk kelompok atau murid tertentu berdasarkan hasil asesmen. Keduanya saling melengkapi di kelas inklusi.' },
  { q: 'Apakah UDL menggantikan Program Pembelajaran Individual?', a: 'Tidak. UDL membuat rancangan pelajaran lebih luwes untuk semua murid, tetapi anak berkebutuhan khusus tetap bisa membutuhkan tujuan, layanan, dan cara evaluasi pribadi yang ditulis dalam Program Pembelajaran Individual. UDL justru mengurangi jumlah penyesuaian susulan yang perlu dibuat.' },
  { q: 'Apakah UDL butuh teknologi yang mahal?', a: 'Tidak harus. Banyak pilihan UDL bisa dibuat dengan bahan sederhana, seperti gambar, benda nyata, kartu kata, teks yang dibacakan guru, kerja kelompok, dan pilihan menjawab secara lisan atau tertulis. Teknologi membantu, tetapi rancangan yang luwes lebih penting daripada alatnya.' },
  { q: 'Bagaimana cara mulai menerapkan UDL di kelas?', a: 'Mulailah dari satu pelajaran yang sering membuat banyak murid tertinggal. Tulis tujuan pelajarannya dengan jelas, cari hambatan yang mungkin muncul, lalu tambahkan satu pilihan untuk tiap prinsip. Setelah dicoba, catat apa yang berhasil dan perbaiki di pelajaran berikutnya.' },
  { q: 'Apakah ada dasar aturan di Indonesia yang sejalan dengan UDL?', a: 'Indonesia tidak mewajibkan istilah UDL, tetapi PP Nomor 13 Tahun 2020 dan Permendikbudristek Nomor 48 Tahun 2023 mewajibkan satuan pendidikan menyediakan akomodasi yang layak bagi peserta didik penyandang disabilitas. Rancangan pelajaran yang luwes sejak awal memudahkan sekolah memenuhi kewajiban itu.' },
];

addDiagram(`${IMG}/udl-tiga-prinsip.webp`, svg.cards('Tiga prinsip Universal Design for Learning', 'Disarikan dari CAST UDL Guidelines 3.0 (2024)', [
  { h: 'Keterlibatan (mengapa belajar)', color: '#2B3A67', items: ['Beri pilihan dan kaitkan dengan minat anak', 'Atur tantangan dan dukungan', 'Bangun rasa memiliki di kelas', 'Latih kemampuan mengelola emosi'] },
  { h: 'Representasi (apa yang dipelajari)', color: '#00838F', items: ['Sajikan materi lewat lebih dari satu indra', 'Jelaskan kosakata dan simbol', 'Kaitkan dengan pengetahuan awal', 'Tonjolkan pola dan gagasan utama'] },
  { h: 'Aksi dan ekspresi (bagaimana menunjukkan)', color: '#C62828', items: ['Sediakan alat dan cara merespons yang mudah diakses', 'Izinkan beragam bentuk jawaban', 'Bantu menyusun tujuan dan rencana', 'Pantau kemajuan sendiri'] },
]));

const body = [
  p('<strong>Universal Design for Learning (UDL) untuk ABK</strong> adalah cara merancang pelajaran yang sejak awal menyediakan beberapa jalan belajar, sehingga anak berkebutuhan khusus bisa ikut di kelas yang sama tanpa harus menunggu penyesuaian susulan. Kerangka ini bertumpu pada tiga prinsip: beragam cara keterlibatan, beragam cara menyajikan materi, dan beragam cara anak menunjukkan apa yang ia pahami.'),
  p('Panduan ini kami tulis untuk guru kelas inklusi, guru pendamping khusus, kepala sekolah, dan orang tua. Isinya merangkum Pedoman UDL versi 3.0 dari CAST, menghubungkannya dengan aturan akomodasi yang layak di Indonesia, lalu memberi contoh rencana pelajaran yang bisa langsung dicoba di kelas.'),
  toc(sections),

  '<h2 id="arti">Apa itu Universal Design for Learning</h2>',
  p('Istilah desain universal awalnya dipakai di bidang arsitektur. Bangunan yang dirancang dengan landai, pintu lebar, dan petunjuk yang jelas sejak awal ternyata memudahkan semua orang, bukan hanya pengguna kursi roda. Universal Design for Learning membawa gagasan yang sama ke ruang kelas. Hambatan belajar dianggap terletak pada rancangan pelajaran yang kaku, bukan semata pada diri anak.'),
  p('Dalam praktiknya, guru tidak membuat satu rencana untuk murid kebanyakan lalu menambal untuk beberapa anak di belakang. Guru memikirkan keragaman murid sejak menulis rencana. Materi disajikan dalam lebih dari satu bentuk, ada pilihan cara menjawab, dan anak diberi alasan yang jelas untuk terlibat.'),
  p('Menurut ' + ext(URL_CAST, 'CAST, pengembang Pedoman UDL') + ', tujuan UDL adalah kemandirian belajar (<em>learner agency</em>), yaitu murid yang punya tujuan dan mampu merefleksikan belajarnya, cakap memanfaatkan sumber, serta strategis dan berorientasi tindakan. Bagi anak berkebutuhan khusus, tujuan ini penting karena kemandirian belajar sering menjadi kemampuan yang paling lama tumbuh.'),
  fig(`${IMG}/udl-antusias.webp`, 1200, 734, 'Dua siswi SD berseragam putih tersenyum sambil menopang dagu di atas meja kayu kelas', 'Keterlibatan adalah pintu masuk belajar. Prinsip pertama UDL meminta guru memikirkan alasan anak mau ikut, bukan hanya isi materinya. Foto dari program pendidikan dasar USAID di Indonesia.', PD(B_JOY)),

  '<h2 id="asal">Asal-usul UDL dan pembaruan Pedoman 3.0</h2>',
  p('Kerangka UDL dikembangkan oleh David H. Rose dan Anne Meyer bersama CAST, lembaga nirlaba di Amerika Serikat yang semula bernama Center for Applied Special Technology. Gagasannya dituangkan dalam buku <em>Teaching Every Student in the Digital Age</em> terbitan 2002, lalu CAST menerbitkan Pedoman UDL versi pertama pada 2008.'),
  p('Pedoman itu terus diperbarui. Versi yang berlaku sekarang adalah ' + ext(URL_CAST, 'Pedoman UDL 3.0') + ' yang dirilis CAST pada 30 Juli 2024, setelah proses pembaruan yang dimulai sejak 2020. Menurut CAST, versi ini menanggapi permintaan kuat dari praktisi dan peneliti untuk menangani hambatan yang berakar pada bias dan sistem yang mengecualikan, bagi murid dengan maupun tanpa disabilitas.'),
  p('Perubahan itu terlihat pada butir-butir baru, misalnya menumbuhkan rasa memiliki di kelas, menghargai beragam bahasa dan dialek, serta menantang praktik yang mengecualikan. Untuk sekolah inklusi di Indonesia, arah ini sejalan dengan semangat bahwa anak berkebutuhan khusus adalah bagian dari kelas, bukan tamu di dalamnya. CAST juga menyediakan terjemahan pedoman dalam lebih dari 20 bahasa di halaman unduhannya.'),
  table('Tonggak perkembangan Universal Design for Learning', ['Tahun', 'Peristiwa'], [
    ['1990-an', 'Kerangka UDL mulai dirumuskan oleh David H. Rose bersama CAST'],
    ['2002', 'Buku <em>Teaching Every Student in the Digital Age</em> karya David H. Rose dan Anne Meyer terbit'],
    ['2008', 'CAST menerbitkan Pedoman UDL versi 1.0'],
    ['2020', 'CAST memulai proses pembaruan pedoman yang kemudian menjadi versi 3.0'],
    ['2024', 'Pedoman UDL 3.0 dirilis pada 30 Juli 2024'],
  ]),

  '<h2 id="prinsip">Tiga prinsip UDL</h2>',
  p('Ketiga prinsip UDL bisa diingat sebagai tiga pertanyaan: mengapa anak mau belajar, apa yang ia terima, dan bagaimana ia menunjukkan hasilnya. Setiap prinsip punya tiga pedoman, sehingga totalnya ada sembilan pedoman.'),
  diag(`${IMG}/udl-tiga-prinsip.webp`, 'Diagram tiga kolom berisi prinsip keterlibatan, representasi, serta aksi dan ekspresi beserta contoh pilihannya', 'Tiga prinsip UDL dan contoh pilihan yang bisa disiapkan guru. Isi disarikan dari Pedoman UDL 3.0 CAST.'),
  '<h3>Beragam cara keterlibatan</h3>',
  p('Prinsip ' + ext(URL_CAST_ENG, 'keterlibatan') + ' menyangkut minat, ketekunan, dan kemampuan mengelola emosi. Contohnya memberi anak pilihan topik bacaan, mengaitkan materi dengan kehidupan sehari-hari, memecah tugas panjang menjadi bagian kecil, dan memberi umpan balik yang menunjukkan langkah berikutnya. Bagi anak yang mudah cemas, kejelasan jadwal dan aturan kelas juga termasuk dukungan keterlibatan.'),
  '<h3>Beragam cara representasi</h3>',
  p('Prinsip ' + ext(URL_CAST_REP, 'representasi') + ' menyangkut cara materi disajikan. Penjelasan lisan dilengkapi gambar, teks tertulis, benda nyata, atau peragaan. Kosakata baru dijelaskan, simbol diterjemahkan ke bentuk lain, dan materi dikaitkan dengan pengetahuan yang sudah dimiliki anak. Anak dengan hambatan pendengaran, penglihatan, atau kesulitan membaca paling terbantu oleh prinsip ini.'),
  '<h3>Beragam cara aksi dan ekspresi</h3>',
  p('Prinsip ' + ext(URL_CAST_ACT, 'aksi dan ekspresi') + ' menyangkut cara anak bergerak, berkomunikasi, dan menunjukkan pemahaman. Anak boleh menjawab secara lisan, menulis, menggambar, menunjuk kartu, atau memperagakan. Prinsip ini juga mencakup kemampuan merencanakan, seperti menyusun tujuan kecil dan memantau kemajuannya sendiri.'),
  fig(`${IMG}/udl-media-konkret.webp`, 1200, 878, 'Dua anak laki-laki berbaju batik merah menyusun balok kayu warna-warni di atas meja bertaplak biru', 'Siswa TK Koinonia Yayasan Kristen Wamena, Papua, memakai balok kayu berwarna untuk belajar berhitung dan membentuk benda. Benda nyata seperti ini adalah salah satu cara representasi selain penjelasan lisan.', PD(B_WOOD)),

  '<h2 id="pedoman">Sembilan pedoman dalam tiga baris</h2>',
  p('Pedoman UDL 3.0 menyusun sembilan pedoman dalam tiga baris. Baris pertama berisi pilihan yang membuka akses, baris kedua berisi dukungan selama belajar, dan baris ketiga berisi kemampuan fungsi eksekutif yang dituju dalam jangka panjang. Tabel berikut meringkas nama pedoman dari situs resmi CAST beserta padanan sederhananya.'),
  table('Sembilan pedoman UDL 3.0 menurut prinsip dan baris (ringkasan dari udlguidelines.cast.org)', ['Baris', 'Keterlibatan', 'Representasi', 'Aksi dan ekspresi'], [
    ['Akses', 'Pedoman 7: menyambut minat dan identitas', 'Pedoman 1: persepsi', 'Pedoman 4: interaksi'],
    ['Dukungan', 'Pedoman 8: mempertahankan usaha dan ketekunan', 'Pedoman 2: bahasa dan simbol', 'Pedoman 5: ekspresi dan komunikasi'],
    ['Fungsi eksekutif', 'Pedoman 9: kapasitas emosional', 'Pedoman 3: membangun pengetahuan', 'Pedoman 6: pengembangan strategi'],
  ]),
  p('Guru tidak perlu menerapkan seluruh sembilan pedoman dalam satu pelajaran. Pedoman ini lebih tepat dipakai sebagai daftar periksa saat merancang atau mengevaluasi pelajaran. Kalau satu pelajaran sudah punya pilihan di baris akses untuk tiap prinsip, itu awal yang baik.'),

  '<h2 id="beda">UDL, diferensiasi, akomodasi, dan modifikasi</h2>',
  p('Guru sekolah inklusi sering mendengar beberapa istilah yang mirip. Membedakannya membantu tim memutuskan kapan cukup memakai rancangan yang luwes dan kapan anak memerlukan penyesuaian pribadi.'),
  table('Perbedaan UDL dengan pendekatan penyesuaian lain di kelas inklusi', ['Pendekatan', 'Kapan dilakukan', 'Untuk siapa', 'Contoh'], [
    ['UDL', 'Saat merancang pelajaran, sebelum diajarkan', 'Seluruh kelas', 'Materi disajikan lewat gambar, teks, dan peragaan; murid memilih cara menjawab'],
    ['Diferensiasi', 'Setelah tahu kebutuhan murid dari asesmen', 'Kelompok atau murid tertentu', 'Tiga tingkat lembar kerja untuk tujuan yang sama'],
    ['Akomodasi', 'Saat anak butuh akses, tujuan tetap', 'Murid tertentu', 'Soal dibacakan, waktu tambahan, huruf diperbesar'],
    ['Modifikasi', 'Saat tujuan kelas belum sesuai kemampuan anak', 'Murid tertentu, tercatat di PPI', 'Anak menulis kalimat tiga kata saat kelas menulis paragraf'],
  ]),
  p('Rancangan UDL yang baik mengurangi kebutuhan akomodasi susulan. Misalnya, kalau semua teks bacaan sudah tersedia dalam versi dibacakan, anak dengan kesulitan membaca tidak perlu menunggu guru menyiapkan versi khusus. Namun anak dengan hambatan intelektual tetap bisa memerlukan tujuan yang dimodifikasi. Penjelasan lebih lengkap ada di <a href="/artikel/diferensiasi-pembelajaran-untuk-anak-abk">diferensiasi pembelajaran untuk anak ABK</a> dan <a href="/artikel/modifikasi-materi-pelajaran-matematika-untuk-abk">modifikasi materi pelajaran matematika untuk ABK</a>.'),

  '<h2 id="abk">Mengapa UDL penting untuk ABK di kelas inklusi</h2>',
  p('Kelas inklusi berisi anak dengan kebutuhan yang sangat beragam. Ada anak dengan hambatan penglihatan, hambatan pendengaran, spektrum autisme, kesulitan belajar spesifik, atau hambatan intelektual, di samping murid lain yang juga punya gaya dan kecepatan belajar berbeda. Menyiapkan versi khusus untuk tiap anak setiap hari tidak realistis bagi satu guru.'),
  p('UDL membantu karena banyak pilihan yang disiapkan untuk satu anak ternyata bermanfaat bagi banyak anak lain. Langkah kerja bergambar untuk anak autis juga membantu murid yang mudah lupa instruksi. Teks yang dibacakan untuk anak dengan kesulitan membaca juga membantu murid yang bahasa ibunya bukan bahasa Indonesia.'),
  p('Dari sisi aturan, ' + ext(URL_PP13, 'PP Nomor 13 Tahun 2020') + ' mewajibkan penyediaan akomodasi yang layak bagi peserta didik penyandang disabilitas, dan ' + ext(URL_P48, 'Permendikbudristek Nomor 48 Tahun 2023') + ' mengatur pelaksanaannya di satuan pendidikan, termasuk pembentukan unit layanan disabilitas. Istilah UDL tidak disebut sebagai kewajiban, tetapi pelajaran yang dirancang luwes sejak awal memudahkan sekolah memenuhi kewajiban tersebut. ' + ext(URL_UNESCO, 'UNESCO') + ' juga menempatkan pendidikan inklusif sebagai upaya menghapus hambatan bagi semua peserta didik.'),
  p('Kerangka ini juga meringankan beban <a href="/artikel/gpk-adalah">guru pendamping khusus</a>. Ketika pelajaran sudah memiliki pilihan bawaan, GPK bisa memusatkan waktunya pada dukungan yang benar-benar pribadi, bukan mengejar materi yang tertinggal. Kolaborasi guru kelas dan GPK dalam merancang pelajaran dibahas di <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching dalam kelas inklusi</a>.'),

  '<h2 id="langkah">Langkah merancang pelajaran dengan UDL</h2>',
  p('Langkah berikut bisa dipakai untuk satu pelajaran atau satu unit. Tuliskan hasilnya di modul ajar supaya rancangan bisa dipakai ulang dan diperbaiki.'),
  ol([
    '<strong>Tulis tujuan yang jelas.</strong> Pisahkan apa yang benar-benar harus dikuasai dari cara mencapainya. Kalau tujuannya memahami siklus air, menulis paragraf hanyalah salah satu cara menunjukkannya.',
    '<strong>Kenali keragaman murid.</strong> Gunakan hasil <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik</a> dan catatan PPI untuk melihat kebutuhan yang sudah diketahui.',
    '<strong>Cari hambatan dalam rancangan.</strong> Tanyakan bagian mana yang hanya bisa diikuti lewat membaca, mendengar, atau menulis saja.',
    '<strong>Tambahkan pilihan untuk tiap prinsip.</strong> Minimal satu pilihan keterlibatan, satu pilihan representasi, dan satu pilihan aksi dan ekspresi.',
    '<strong>Siapkan bahan sekali untuk semua.</strong> Gambar, teks dibacakan, benda nyata, dan kartu jawaban disiapkan untuk seluruh kelas, bukan hanya untuk satu anak.',
    '<strong>Tentukan cara menilai yang luwes.</strong> Susun rubrik yang menilai tujuan, bukan bentuk jawaban. Contoh penilaian berbasis karya ada di <a href="/artikel/penilaian-portofolio-anak-abk">penilaian portofolio anak ABK</a>.',
    '<strong>Ajarkan, amati, dan catat.</strong> Perhatikan pilihan mana yang dipakai murid dan siapa yang masih tertinggal.',
    '<strong>Perbaiki rancangan.</strong> Tambahkan dukungan pribadi lewat <a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual</a> bila masih diperlukan.',
  ]),
  fig(`${IMG}/udl-kerja-kelompok.webp`, 1200, 900, 'Lima siswi berkerudung putih membungkuk di atas kertas besar, satu siswi menulis dengan spidol sementara yang lain menunjuk', 'Kerja kelompok di atas kertas plano memberi beberapa peran sekaligus: menulis, menunjuk, membacakan, atau menggambar. Foto dari program USAID PRIORITAS di Indonesia.', PD(B_GROUP)),

  '<h2 id="contoh">Contoh rencana pelajaran IPA dengan UDL</h2>',
  p('Misalkan kelas 4 SD belajar tentang air bersih. Tujuannya, murid mampu menjelaskan mengapa air perlu disaring dan menyebutkan satu cara menjernihkan air. Kelas ini berisi anak dengan hambatan pendengaran, anak dengan kesulitan membaca, dan anak di spektrum autisme yang nyaman dengan langkah kerja yang jelas.'),
  table('Contoh pilihan UDL untuk pelajaran IPA kelas 4 tentang menjernihkan air', ['Prinsip', 'Pilihan yang disiapkan', 'Siapa yang terbantu'], [
    ['Keterlibatan', 'Membuka pelajaran dengan dua gelas air sumur dan air keruh, murid memilih peran di kelompok', 'Anak yang sulit fokus pada ceramah, semua murid'],
    ['Representasi', 'Langkah percobaan ditulis, digambar, dan diperagakan; kosakata baru ditempel di papan dengan gambar', 'Anak dengan hambatan pendengaran, anak dengan kesulitan membaca'],
    ['Aksi dan ekspresi', 'Hasil boleh dilaporkan lewat gambar berlabel, penjelasan lisan, atau tulisan singkat', 'Anak dengan kesulitan menulis, anak yang lebih kuat secara lisan'],
    ['Fungsi eksekutif', 'Daftar periksa langkah percobaan yang dicentang tiap kelompok', 'Anak di spektrum autisme, semua murid'],
  ]),
  p('Pilihan di tabel itu disiapkan sekali dan dipakai seluruh kelas. Anak tidak perlu ditandai sebagai pengguna versi khusus. Kalau masih ada anak yang memerlukan tujuan lebih sederhana, misalnya hanya menyebutkan bahwa air keruh perlu disaring, tujuan itu dicatat di PPI dan dinilai terhadap tujuannya sendiri.'),
  fig(`${IMG}/udl-percobaan-ipa.webp`, 1200, 869, 'Sekelompok siswa SD berseragam batik merah putih menuang air ke botol penyaring di atas meja penuh gelas plastik dan kertas', 'Siswa SDN Cibabat Mandiri 2, Jawa Barat, membuat alat penjernih air sederhana di kelas IPA. Percobaan langsung memberi jalan belajar lewat tangan dan mata, bukan hanya lewat bacaan.', PD(B_IPA)),

  '<h2 id="kendala">Kendala umum dan cara mengatasinya</h2>',
  p('Menerapkan UDL tidak selalu mulus, terutama di kelas besar dengan bahan terbatas. Beberapa kendala berikut sering muncul di sekolah inklusi, beserta jalan keluarnya.'),
  ul([
    '<strong>Waktu persiapan terbatas.</strong> Mulai dari satu pelajaran per minggu, lalu simpan bahannya untuk dipakai ulang tahun berikutnya.',
    '<strong>Kelas terlalu ramai.</strong> Pakai kerja kelompok dengan peran yang jelas dan <a href="/artikel/peer-tutoring-di-kelas-inklusi">tutor sebaya</a>, sehingga guru tidak harus melayani semua murid sendirian.',
    '<strong>Bahan dan teknologi kurang.</strong> Gunakan benda di sekitar sekolah, gambar buatan tangan, dan teks yang dibacakan guru.',
    '<strong>Pilihan membuat kelas tidak tertib.</strong> Batasi pilihan menjadi dua atau tiga, dan jelaskan aturannya. Strategi pengelolaan kelas ada di <a href="/artikel/classroom-management-kelas-inklusi">classroom management kelas inklusi</a>.',
    '<strong>Penilaian dianggap tidak adil.</strong> Gunakan rubrik yang menilai tujuan yang sama, sehingga jawaban lisan dan tertulis dinilai dengan ukuran yang setara. Bila soal ujian perlu disesuaikan, lihat <a href="/artikel/adaptasi-soal-ujian-untuk-anak-abk">adaptasi soal ujian untuk anak ABK</a>.',
  ]),
  p('Orang tua juga bisa ikut mendukung. Ceritakan kepada guru cara belajar yang paling berhasil di rumah, misalnya anak lebih paham lewat gambar atau lebih lancar menjawab secara lisan. Informasi seperti itu membantu guru memilih pilihan yang tepat. Peran keluarga dalam sekolah inklusi dibahas di <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.'),
  p('Pada akhirnya, UDL bukan proyek sekali jadi. Rancangan pelajaran diperbaiki sedikit demi sedikit berdasarkan pengamatan di kelas. Sekolah yang konsisten melakukannya akan memiliki kumpulan modul ajar yang semakin ramah bagi semua murid, termasuk anak berkebutuhan khusus. Alasan pendidikan inklusi layak diperjuangkan kami uraikan di <a href="/artikel/mengapa-pendidikan-inklusi-penting">mengapa pendidikan inklusi penting</a>.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(faq),
];

const articles = [
  {
    slug: 'universal-design-for-learning-udl-abk',
    titleTag: 'Universal Design for Learning (UDL) untuk ABK | YUKA',
    metaDesc: 'Universal Design for Learning (UDL) untuk ABK: tiga prinsip, sembilan pedoman UDL 3.0, beda dengan diferensiasi, langkah merancang, dan contoh pelajaran.',
    keywords: 'universal design for learning udl abk, udl adalah, prinsip udl, udl kelas inklusi',
    ogTitle: 'Universal Design for Learning (UDL) untuk ABK',
    ogDesc: 'Panduan merancang pelajaran yang luwes sejak awal untuk kelas inklusi, mengacu pada Pedoman UDL 3.0 CAST.',
    h1: 'Universal Design for Learning (UDL) untuk ABK: Prinsip, Pedoman 3.0, dan Contoh di Kelas Inklusi',
    crumb: 'Universal Design for Learning (UDL) untuk ABK',
    category: 'Pendidikan',
    datePublished: '2026-11-08T08:00:00+07:00', dateModified: '2026-11-08T08:00:00+07:00',
    dateDisplay: '8 November 2026', readTime: '13 menit baca',
    image: {
      file: `${IMG}/udl-hero.webp`, w: 1200, h: 800,
      alt: 'Guru berbaju krem berdiri di tengah kelas SD sementara siswa duduk berkelompok di meja kayu dengan papan nama kelompok',
      caption: 'Siswa SD duduk berkelompok di meja yang diberi papan nama, dengan guru berdiri di tengah kelas. Pengaturan kelompok seperti ini memudahkan guru menyiapkan beberapa pilihan kegiatan dalam satu pelajaran.',
      credit: PD(B_HERO),
    },
    bodyHtml: body.join('\n'), faq,
    related: [
      { href: '/artikel/diferensiasi-pembelajaran-untuk-anak-abk', title: 'Diferensiasi Pembelajaran untuk Anak ABK', desc: 'Menyesuaikan konten, proses, dan produk untuk murid yang beragam.' },
      { href: '/artikel/co-teaching-dalam-kelas-inklusi', title: 'Co-Teaching dalam Kelas Inklusi', desc: 'Model kolaborasi guru kelas dan guru pendamping khusus.' },
      { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Rencana tertulis per anak berisi tujuan, layanan, dan cara evaluasi.' },
    ],
    tags: ['UDL', 'SekolahInklusi', 'Kurikulum'],
    sources: [
      { url: URL_CAST, label: 'CAST: Universal Design for Learning Guidelines version 3.0 (2024)' },
      { url: URL_CAST_ENG, label: 'CAST UDL Guidelines: Design Multiple Means of Engagement' },
      { url: URL_CAST_REP, label: 'CAST UDL Guidelines: Design Multiple Means of Representation' },
      { url: URL_CAST_ACT, label: 'CAST UDL Guidelines: Design Multiple Means of Action and Expression' },
      { url: URL_PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
      { url: URL_P48, label: 'Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
      { url: URL_UNESCO, label: 'UNESCO: Inclusion in education' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 9 November 2026. Nama pedoman diringkas dari situs resmi CAST UDL Guidelines 3.0. Contoh rencana pelajaran adalah praktik umum di kelas inklusi dan tidak menggantikan asesmen untuk tiap anak.',
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

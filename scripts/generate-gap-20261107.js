'use strict';
/*
 * Generator artikel 7 November 2026 (cycle #92 /cek-daily-artikel, tambal hari kosong).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5", baris 145: "modifikasi kurikulum bahasa indonesia untuk abk".
 * Belum punya artikel (dicek terhadap artikel/*.html; artikel matematika 6 Nov membahas mapel lain).
 *
 * Fakta capaian pembelajaran diambil langsung dari PDF Keputusan Kepala BSKAP
 * Nomor 032/H/KR/2024 (halaman 1575-1592, CP Pendidikan Khusus Bahasa Indonesia).
 * Foto: Wikimedia Commons, domain publik USAID Indonesia (logo USAID dipotong keluar).
 * Diagram SVG deterministik dari scripts/lib/diagram-svg.js (bukan gambar AI).
 *
 *   node scripts/generate-gap-20261107.js --prepare   # tulis SVG diagram
 *   node scripts/generate-gap-20261107.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-gap-20261107.js             # render artikel/*.html
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

const URL_CP = 'https://kurikulum.kemendikdasmen.go.id/file/1718471412_manage_file.pdf';
const URL_P21 = 'https://peraturan.go.id/files/bn460-2022.pdf';
const URL_PP13 = 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020';
const URL_UDL = 'https://udlguidelines.cast.org/';
const URL_UNESCO = 'https://www.unesco.org/en/inclusion-education';

const B_HERO = 'https://commons.wikimedia.org/wiki/File:Silent_Reading_before_Class_Starts_(35646604503).jpg';
const B_POINT = 'https://commons.wikimedia.org/wiki/File:Murid_di_Sumatra_Utara_dengan_mudah_membaca_buku_bergambar_yang_dirancang_untuk_membantu_meningkatkan_pemahaman_membaca_di_antara_murid-murid_kelas_1-3_SD_(34427469930).jpg';
const B_HOME = 'https://commons.wikimedia.org/wiki/File:Mengajar_Ibu_Membaca_(35619248044).jpg';
const B_GROUP = 'https://commons.wikimedia.org/wiki/File:Children_working_together_at_school_(4843331570).jpg';
const B_WORK = 'https://commons.wikimedia.org/wiki/File:Kami_bisa_menulis_laporan_(32219458566).jpg';

const sections = [
  ['arti', 'Apa itu modifikasi kurikulum Bahasa Indonesia'],
  ['acuan', 'Acuan resmi: CP Pendidikan Khusus Bahasa Indonesia'],
  ['bentuk', 'Akomodasi, modifikasi, substitusi, dan omisi'],
  ['langkah', 'Langkah memodifikasi kurikulum'],
  ['elemen', 'Contoh modifikasi per elemen'],
  ['tahap', 'Tahapan membaca dan menulis permulaan'],
  ['kebutuhan', 'Penyesuaian untuk kebutuhan berbeda'],
  ['nilai', 'Menilai dan melaporkan hasil belajar'],
  ['rumah', 'Peran orang tua di rumah'],
  ['faq', 'Pertanyaan umum'],
];

const faq = [
  { q: 'Apa yang dimaksud modifikasi kurikulum Bahasa Indonesia untuk ABK?', a: 'Modifikasi kurikulum Bahasa Indonesia adalah perubahan pada tujuan, isi, atau tingkat kesulitan pelajaran Bahasa Indonesia supaya sesuai dengan kemampuan anak berkebutuhan khusus. Anak tetap belajar menyimak, membaca, berbicara, dan menulis, tetapi target dan jenis teksnya disesuaikan dengan hasil asesmen.' },
  { q: 'Apakah ada acuan resmi untuk Bahasa Indonesia anak dengan hambatan intelektual?', a: 'Ada. Keputusan Kepala BSKAP Nomor 032/H/KR/2024 memuat Capaian Pembelajaran Pendidikan Khusus Bahasa Indonesia, dengan Fase A sampai F yang disusun berdasarkan usia mental. Sekolah inklusi bisa memakai capaian ini sebagai jembatan saat menurunkan tujuan kelas reguler.' },
  { q: 'Apa beda akomodasi dan modifikasi dalam pelajaran Bahasa Indonesia?', a: 'Akomodasi mengubah cara belajar atau cara menilai tanpa mengubah tujuan, misalnya teks dicetak lebih besar atau soal dibacakan. Modifikasi mengubah tujuannya, misalnya anak menyalin kalimat tiga kata ketika teman sekelas menulis paragraf.' },
  { q: 'Elemen Bahasa Indonesia apa saja yang bisa dimodifikasi?', a: 'Keempat elemen bisa dimodifikasi, yaitu menyimak, membaca dan memirsa, berbicara dan mempresentasikan, serta menulis. Biasanya tidak semua elemen perlu dimodifikasi. Banyak anak hanya butuh modifikasi di membaca dan menulis, sementara menyimak dan berbicara cukup diberi akomodasi.' },
  { q: 'Bagaimana jika anak belum bisa membaca sama sekali di kelas atas?', a: 'Mulai dari kemampuan prasyarat, seperti mengenal huruf, mengeja suku kata, dan memahami kata yang sering dipakai sehari-hari. Selama itu, anak tetap bisa mengikuti topik kelas lewat teks yang dibacakan, gambar, dan tugas lisan, sehingga ia tidak tertinggal dari isi pelajaran.' },
  { q: 'Siapa yang menyusun modifikasi kurikulum Bahasa Indonesia?', a: 'Modifikasi sebaiknya disusun oleh tim, yaitu guru kelas atau guru Bahasa Indonesia, guru pendamping khusus, dan orang tua, berdasarkan hasil asesmen. Hasilnya dituliskan dalam Program Pembelajaran Individual supaya tujuan dan cara menilainya jelas.' },
  { q: 'Bagaimana menilai Bahasa Indonesia anak dengan kurikulum modifikasi?', a: 'Nilai capaian anak terhadap tujuan modifikasinya sendiri, bukan terhadap tujuan kelas. Catat juga tingkat bantuan yang dibutuhkan. Di rapor, jelaskan bahwa capaian mengacu pada tujuan dalam Program Pembelajaran Individual agar tidak disalahartikan.' },
  { q: 'Apa yang bisa dilakukan orang tua di rumah untuk mendukung pelajaran Bahasa Indonesia?', a: 'Bacakan buku bergambar setiap hari, ajak anak membaca tulisan di sekitar rumah seperti label makanan dan papan nama, dan minta anak menceritakan kegiatannya. Kegiatan singkat yang rutin lebih membantu daripada latihan panjang yang jarang dilakukan.' },
];

addDiagram(`${IMG}/bi-abk-tahapan.webp`, svg.flow('Tahapan membaca dan menulis permulaan', 'Mengacu pada CP Pendidikan Khusus Bahasa Indonesia Fase A sampai C', [
  { h: 'Pramembaca dan pramenulis', d: 'Memegang buku dan alat tulis, menjiplak, menebalkan huruf.' },
  { h: 'Mengenal huruf', d: 'Mengenali dan mengeja kombinasi alfabet pada suku kata.' },
  { h: 'Suku kata menjadi kata', d: 'Merangkai suku kata pola kv dan kvk menjadi kata sehari-hari.' },
  { h: 'Kata menjadi kalimat', d: 'Membaca dan menyalin kalimat dua sampai tiga kata.' },
  { h: 'Kalimat sederhana', d: 'Menulis kalimat sederhana sendiri, dengan atau tanpa gambar.' },
  { h: 'Teks pendek', d: 'Memahami dan menceritakan kembali teks sederhana.' },
]));

const body = [
  p('<strong>Modifikasi kurikulum Bahasa Indonesia untuk ABK</strong> adalah penyesuaian tujuan, isi, dan tingkat kesulitan pelajaran Bahasa Indonesia supaya anak berkebutuhan khusus bisa belajar menyimak, membaca, berbicara, dan menulis sesuai kemampuannya. Anak tetap mengikuti tema yang sama dengan teman sekelas, tetapi jenis teks, panjang tugas, dan ukuran keberhasilannya diatur ulang berdasarkan hasil asesmen.'),
  p('Panduan ini kami tulis untuk guru Bahasa Indonesia, wali kelas sekolah inklusi, guru pendamping khusus, dan orang tua. Acuan utamanya adalah Capaian Pembelajaran Pendidikan Khusus Bahasa Indonesia dalam Kurikulum Merdeka. Contoh di dalamnya adalah praktik umum di kelas inklusi dan perlu disesuaikan dengan kebutuhan tiap anak.'),
  toc(sections),

  '<h2 id="arti">Apa itu modifikasi kurikulum Bahasa Indonesia</h2>',
  p('Modifikasi kurikulum Bahasa Indonesia berarti mengubah <em>apa</em> yang dipelajari dan dicapai anak dalam pelajaran Bahasa Indonesia. Contohnya, ketika kelas 4 belajar menulis paragraf tentang pengalaman liburan, anak yang baru bisa menyalin kata belajar menyalin kalimat tiga kata tentang liburannya, lalu menempelkan gambar. Temanya sama, tujuannya berbeda.'),
  p('Bahasa Indonesia adalah pelajaran yang menopang hampir semua pelajaran lain. Anak membaca soal matematika, menulis jawaban IPAS, dan menyimak penjelasan guru dalam bahasa Indonesia. Karena itu, kesulitan di pelajaran ini sering terlihat di mana-mana. Modifikasi yang tepat membantu anak tetap belajar tanpa terus-menerus merasa gagal.'),
  p('Modifikasi juga bukan berarti anak dikeluarkan dari kegiatan kelas. Anak tetap duduk bersama temannya, mendengarkan cerita yang sama, dan ikut berdiskusi. Yang berubah adalah bagian tugas yang ia kerjakan dan target yang dipakai untuk menilainya. Prinsip ini sejalan dengan pendekatan <a href="/artikel/diferensiasi-pembelajaran-untuk-anak-abk">diferensiasi pembelajaran untuk anak ABK</a>.'),
  fig(`${IMG}/bi-abk-menunjuk.webp`, 880, 960, 'Siswi kelas awal SD berseragam putih merah dengan rambut dikuncir dua menelusuri baris tulisan di buku bacaan dengan jari telunjuknya', 'Menelusuri tulisan dengan jari membantu anak menjaga posisi baca. Foto dari program buku bacaan bergambar untuk murid kelas 1 sampai 3 SD di Sumatra Utara.', PD(B_POINT)),

  '<h2 id="acuan">Acuan resmi: CP Pendidikan Khusus Bahasa Indonesia</h2>',
  p('Acuan resmi yang paling berguna adalah ' + ext(URL_CP, 'Keputusan Kepala BSKAP Nomor 032/H/KR/2024 tentang Capaian Pembelajaran') + ' pada Kurikulum Merdeka. Dokumen ini memuat dua capaian Bahasa Indonesia: capaian untuk sekolah reguler dan capaian Pendidikan Khusus untuk peserta didik berkebutuhan khusus dengan hambatan intelektual. Keduanya memakai empat elemen yang sama, yaitu menyimak, membaca dan memirsa, berbicara dan mempresentasikan, serta menulis.'),
  p('Perbedaannya ada pada patokan fase. Pada capaian reguler, Fase A umumnya untuk kelas I dan II SD. Pada capaian Pendidikan Khusus, fase disusun menurut usia mental. Fase A umumnya untuk usia mental di bawah 7 tahun, Fase B sekitar 7 tahun, dan Fase C sekitar 8 tahun. Dokumen yang sama juga menyebut pembelajaran bahasa Indonesia akan bermakna jika materinya sesuai usia mental, kemampuan, dan kebutuhan peserta didik.'),
  table('Perbandingan capaian akhir Fase A sampai C, Bahasa Indonesia reguler dan Pendidikan Khusus (ringkasan dari BSKAP 032/H/KR/2024)', ['Fase', 'Reguler (patokan kelas)', 'Pendidikan Khusus (patokan usia mental)'], [
    ['A', 'Kelas I dan II SD; berkomunikasi dan bernalar tentang diri dan lingkungan', 'Usia mental di bawah 7 tahun; memahami instruksi lisan sederhana, mengeja suku kata, kegiatan pramenulis'],
    ['B', 'Kelas III dan IV SD; membaca dengan fasih dan lancar', 'Usia mental sekitar 7 tahun; merangkai suku kata pola kv dan kvk menjadi kata, menyalin kata dan kalimat'],
    ['C', 'Kelas V dan VI SD; memahami teks narasi dan informatif, menulis lebih terstruktur', 'Usia mental sekitar 8 tahun; merangkai kata menjadi kalimat sederhana, menulis kalimat tiga kata'],
  ]),
  p('Tabel di atas memperlihatkan jarak yang cukup lebar. Seorang anak kelas 4 dengan hambatan intelektual bisa saja sedang berada di capaian Pendidikan Khusus Fase A atau B. Di sekolah inklusi, capaian Pendidikan Khusus ini bisa menjadi jembatan ketika guru menurunkan tujuan kelas. Penentuan fase tetap harus berdasarkan <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik</a>, bukan usia kalender.'),
  p('Dasar hukum penyesuaian bagi peserta didik penyandang disabilitas juga diatur dalam ' + ext(URL_PP13, 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak') + '. Kebijakan teknis tiap sekolah bisa berbeda, jadi pastikan modifikasi yang disepakati tercatat resmi.'),

  '<h2 id="bentuk">Akomodasi, modifikasi, substitusi, dan omisi</h2>',
  p('Sebelum memodifikasi, guru perlu membedakan beberapa bentuk penyesuaian kurikulum. Keempatnya sering tertukar, padahal dampaknya ke tujuan belajar dan ke rapor anak sangat berbeda. Tabel berikut memberi contoh dalam konteks pelajaran Bahasa Indonesia.'),
  table('Bentuk penyesuaian kurikulum dalam pelajaran Bahasa Indonesia', ['Bentuk', 'Yang diubah', 'Contoh di Bahasa Indonesia'], [
    ['Akomodasi', 'Cara belajar atau cara menilai, tujuan tetap', 'Teks dicetak huruf besar, soal dibacakan, waktu tambahan, jawaban lisan'],
    ['Modifikasi', 'Tujuan, isi, atau tingkat kesulitan', 'Menulis kalimat tiga kata saat kelas menulis paragraf'],
    ['Substitusi', 'Materi diganti dengan yang setara fungsinya', 'Membaca dengan Braille atau menyimak dengan bahasa isyarat'],
    ['Omisi', 'Sebagian materi tidak diberikan', 'Analisis majas ditiadakan, fokus pada memahami isi cerita'],
  ]),
  p('Urutan yang dianjurkan adalah mencoba akomodasi lebih dulu. Anak dengan hambatan penglihatan atau hambatan pendengaran yang kemampuan berpikirnya sesuai usia sering cukup diberi akomodasi atau substitusi media. Modifikasi tujuan dipakai bila asesmen menunjukkan anak belum siap dengan tujuan kelas meskipun sudah diberi akomodasi. Contoh penyesuaian untuk ulangan dibahas di <a href="/artikel/adaptasi-soal-ujian-untuk-anak-abk">adaptasi soal ujian untuk anak ABK</a>.'),

  '<h2 id="langkah">Langkah memodifikasi kurikulum</h2>',
  p('Modifikasi paling mudah dilakukan dengan menurunkan tujuan kelas ke tingkat yang sesuai, lalu menyiapkan tugas yang masih terhubung dengan tema kelas. Langkah berikut bisa dipakai guru Bahasa Indonesia bersama guru pendamping khusus.'),
  ol([
    '<strong>Lihat tujuan pembelajaran kelas.</strong> Tentukan jenis teks dan tema minggu ini, misalnya teks deskripsi tentang hewan peliharaan.',
    '<strong>Cek kemampuan awal anak.</strong> Gunakan hasil asesmen untuk melihat elemen mana yang sudah dikuasai dan mana yang belum.',
    '<strong>Cocokkan dengan fase Pendidikan Khusus.</strong> Cari capaian yang paling dekat dengan kemampuan anak, misalnya Fase B untuk anak yang sedang merangkai suku kata.',
    '<strong>Turunkan tujuannya.</strong> Tulis versi sederhana dari tugas kelas, misalnya menyebutkan tiga ciri hewan secara lisan lalu menyalin satu kalimat.',
    '<strong>Pilih teks yang sesuai.</strong> Gunakan kosakata yang sering didengar anak dan topik dari pengalaman sehari-hari.',
    '<strong>Siapkan media.</strong> Gambar, kartu kata, buku bergambar, atau teks yang dibacakan.',
    '<strong>Tulis di PPI.</strong> Masukkan tujuan modifikasi ke <a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual</a>.',
    '<strong>Tinjau berkala.</strong> Naikkan target bila anak sudah konsisten berhasil.',
  ]),
  p('Dokumen CP Pendidikan Khusus menekankan bahwa kosakata yang diberikan sebaiknya mudah dipahami dan sering didengar, dan materi sesuai pengalaman anak sehari-hari. Jadi teks tentang pasar dekat rumah atau kegiatan di sekolah biasanya lebih efektif daripada teks tentang hal yang belum pernah anak alami.'),
  fig(`${IMG}/bi-abk-menulis-kelompok.webp`, 640, 480, 'Lima siswi berkerudung putih bekerja bersama di atas kertas plano, satu siswi menulis dengan spidol sementara yang lain menunjuk tulisan', 'Kerja kelompok memberi ruang bagi anak dengan tugas yang dimodifikasi untuk tetap berperan, misalnya menyalin judul atau menunjuk kata kunci. Foto dari program pendidikan dasar USAID di Indonesia.', PD(B_GROUP)),

  '<h2 id="elemen">Contoh modifikasi per elemen</h2>',
  p('Contoh berikut menunjukkan cara menurunkan tujuan kelas pada keempat elemen Bahasa Indonesia untuk anak yang sedang berada di sekitar Fase A sampai B Pendidikan Khusus. Target sebenarnya harus mengikuti hasil asesmen anak.'),
  table('Contoh tujuan kelas 4 SD dan versi modifikasinya per elemen', ['Elemen', 'Tujuan kelas (contoh)', 'Versi modifikasi (contoh)'], [
    ['Menyimak', 'Menemukan ide pokok dari cerita yang dibacakan', 'Menjawab pertanyaan siapa dan di mana dari cerita pendek, dibantu gambar'],
    ['Membaca dan memirsa', 'Membaca teks deskripsi dengan lancar dan memahami isinya', 'Membaca kata-kata kunci di teks, lalu mencocokkannya dengan gambar'],
    ['Berbicara dan mempresentasikan', 'Menyampaikan pendapat dalam diskusi kelas', 'Menyebutkan satu hal yang disukai dari cerita dengan kalimat dua sampai tiga kata'],
    ['Menulis', 'Menulis paragraf deskripsi tentang benda di sekitar', 'Menyalin kalimat tiga kata tentang benda itu dan menggambarnya'],
  ]),
  p('Perhatikan bahwa tiap modifikasi tetap memakai tema yang sama dengan kelas. Ketika teman sekelas mempresentasikan paragrafnya, anak bisa menunjukkan gambarnya dan membacakan kalimat salinannya. Semua siswa membahas topik yang sama, sehingga diskusi kelas bisa diikuti bersama. Pembagian peran antara guru kelas dan guru pendamping dalam kegiatan ini bisa mengikuti pola <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching</a>.'),
  p('Untuk elemen berbicara, anak yang memakai alat bantu komunikasi tetap bisa ikut. Kartu gambar atau aplikasi suara dapat menggantikan ucapan lisan. Pilihan alatnya dibahas di <a href="/artikel/aplikasi-komunikasi-aac-terbaik-untuk-anak">aplikasi komunikasi AAC untuk anak</a>.'),

  '<h2 id="tahap">Tahapan membaca dan menulis permulaan</h2>',
  p('Banyak anak ABK di kelas inklusi masih berada pada tahap membaca dan menulis permulaan. CP Pendidikan Khusus menguraikan tahapan ini cukup rinci. Pada Fase A, anak belajar kegiatan pramembaca seperti cara memegang buku, jarak mata dengan buku, dan cara membalik halaman, serta kegiatan pramenulis seperti menjiplak, menebalkan huruf, dan menyalin suku kata.'),
  diag(`${IMG}/bi-abk-tahapan.webp`, 'Diagram enam tahap membaca dan menulis permulaan, dari pramembaca dan pramenulis sampai memahami teks pendek', 'Tahapan disusun dari uraian CP Pendidikan Khusus Bahasa Indonesia Fase A sampai C. Anak boleh berada di tahap berbeda untuk membaca dan menulis.'),
  p('Pada Fase B, anak merangkai suku kata dengan pola konsonan-vokal dan konsonan-vokal-konsonan menjadi kata yang sering ditemui, lalu menyalin kata dan kalimat dua sampai tiga kata. Pada Fase C, anak merangkai kata menjadi kalimat sederhana dan menulis kalimat tiga kata dengan atau tanpa bantuan gambar.'),
  p('Tahapan ini membantu guru menetapkan langkah kecil yang terukur. Anak yang kesulitan membaca karena disleksia membutuhkan pendekatan yang sedikit berbeda, seperti dibahas di <a href="/artikel/cara-mengajar-anak-disleksia-membaca">cara mengajar anak disleksia membaca</a>. Kesulitan menulis yang menetap juga perlu dicermati, karena bisa berkaitan dengan kemampuan <a href="/artikel/motorik-halus-adalah">motorik halus</a> atau kondisi seperti <a href="/artikel/disgrafia-adalah">disgrafia</a>. Diagnosis tetap ditegakkan oleh tenaga profesional, bukan dari pengamatan guru saja.'),

  '<h2 id="kebutuhan">Penyesuaian untuk kebutuhan berbeda</h2>',
  p('Setiap jenis hambatan memengaruhi cara belajar bahasa dengan cara yang berbeda. CP Pendidikan Khusus sendiri menyebut peserta didik dengan hambatan penglihatan memakai Simbol Braille Indonesia dan aplikasi pembaca layar, sedangkan peserta didik dengan hambatan pendengaran memakai lisan, tulisan, dan isyarat sebagai media komunikasi. Gambaran berikut bersifat umum.'),
  table('Gambaran penyesuaian pelajaran Bahasa Indonesia sesuai kebutuhan belajar', ['Kebutuhan', 'Penyesuaian yang sering membantu'], [
    ['Hambatan penglihatan', 'Teks Braille atau huruf besar, pembaca layar, gambar dijelaskan secara lisan'],
    ['Hambatan pendengaran', 'Bahasa isyarat, teks tertulis untuk setiap instruksi, kosakata baru dikenalkan dengan gambar'],
    ['Hambatan intelektual', 'Modifikasi tujuan mengikuti fase usia mental, banyak pengulangan, teks dari pengalaman sehari-hari'],
    ['Kesulitan membaca spesifik', 'Latihan bunyi dan huruf yang terstruktur, teks yang dibacakan, waktu tambahan'],
    ['Spektrum autisme', 'Langkah kerja visual, teks tentang minat anak, instruksi singkat dan jelas'],
    ['Hambatan bicara dan bahasa', 'Kartu gambar, alat bantu komunikasi, jawaban dengan menunjuk'],
  ]),
  p('Untuk anak tunanetra, media belajar dibahas di <a href="/artikel/media-pembelajaran-braille-untuk-tunanetra">media pembelajaran Braille untuk tunanetra</a>. Untuk anak dengan hambatan pendengaran, lihat <a href="/artikel/bahasa-isyarat">bahasa isyarat</a>. Anak dengan spektrum autisme sering terbantu oleh <a href="/artikel/cara-membuat-jadwal-visual-untuk-anak-autis">jadwal visual</a>, dan strategi kelasnya dibahas di <a href="/artikel/strategi-mengajar-anak-autis-di-kelas">strategi mengajar anak autis di kelas</a>. Pendekatan beragam cara ini sejalan dengan ' + ext(URL_UDL, 'prinsip Universal Design for Learning dari CAST') + '.'),

  '<h2 id="nilai">Menilai dan melaporkan hasil belajar</h2>',
  p('Hasil belajar anak dengan kurikulum modifikasi dinilai terhadap tujuan modifikasinya sendiri. ' + ext(URL_P21, 'Permendikbudristek Nomor 21 Tahun 2022 tentang Standar Penilaian Pendidikan') + ' menyebut penilaian sumatif membandingkan capaian siswa dengan kriteria ketercapaian tujuan pembelajaran. Bagi anak dengan modifikasi, tujuan itu adalah tujuan yang tertulis dalam PPI.'),
  p('Catat juga tingkat bantuan, misalnya membaca dengan dibacakan, membaca dengan bantuan gambar, atau membaca mandiri. Bukti seperti hasil salinan bertanggal, rekaman anak membaca, dan catatan observasi sebaiknya dikumpulkan sejak awal semester. Cara mengumpulkannya dibahas di <a href="/artikel/penilaian-portofolio-anak-abk">penilaian portofolio anak ABK</a>, dan cara menyusun kriterianya di <a href="/artikel/rubrik-penilaian-anak-berkebutuhan-khusus">rubrik penilaian anak berkebutuhan khusus</a>.'),
  fig(`${IMG}/bi-abk-karya.webp`, 1200, 800, 'Empat siswa SMP berseragam putih tersenyum memegang laporan tulisan tangan berwarna di depan papan pajangan berlabel Bahasa Sunda, Bahasa Indonesia, dan Matematika', 'Hasil tulisan siswa dipajang per mata pelajaran di sebuah SMP di Cimahi, Jawa Barat. Karya tulis bertanggal seperti ini juga berguna sebagai bukti perkembangan anak dengan tugas yang dimodifikasi.', PD(B_WORK)),
  p('Di rapor, jelaskan bahwa capaian Bahasa Indonesia mengacu pada tujuan yang dimodifikasi. Tanpa keterangan ini, orang tua atau sekolah berikutnya bisa salah membaca nilai anak. Contoh kalimat deskripsinya ada di artikel <a href="/artikel/cara-membuat-rapor-anak-berkebutuhan-khusus">cara membuat rapor anak berkebutuhan khusus</a>. Pola yang sama juga dipakai pada <a href="/artikel/modifikasi-materi-pelajaran-matematika-untuk-abk">modifikasi materi pelajaran matematika untuk ABK</a>.'),

  '<h2 id="rumah">Peran orang tua di rumah</h2>',
  p('Kemampuan berbahasa tumbuh paling cepat ketika anak sering diajak berbicara, mendengar cerita, dan melihat tulisan dalam kehidupannya. Orang tua tidak perlu menjadi guru. Kegiatan singkat yang dilakukan rutin sudah sangat membantu. Beberapa contoh yang mudah dilakukan:'),
  ul([
    'Membacakan buku bergambar 10 sampai 15 menit setiap hari, lalu bertanya siapa tokohnya dan apa yang terjadi.',
    'Mengajak anak membaca tulisan di sekitar rumah, seperti label makanan, nama toko, dan papan jalan.',
    'Meminta anak menceritakan kegiatannya di sekolah dengan kalimat pendek.',
    'Menulis daftar belanja bersama, anak menyalin atau menggambar barangnya.',
    'Memakai kosakata yang sama dengan yang sedang dipelajari di sekolah.',
  ]),
  fig(`${IMG}/bi-abk-membaca-bersama.webp`, 1200, 797, 'Seorang ibu berkerudung motif dan anak perempuan berkaus merah duduk berdampingan menunjuk tulisan di buku cerita bergambar harimau di atas meja kayu', 'Aisyah, duta literasi dalam program USAID, mengajak ibunya membaca buku cerita. Membaca bersama di rumah memperkuat kosakata yang dipelajari anak di sekolah.', PD(B_HOME)),
  p('Di Sekolah Inklusi Taruna Imani yang dikelola YUKA, modifikasi pelajaran selalu dibicarakan bersama orang tua, supaya latihan di rumah dan di sekolah saling menguatkan. Bila anak menunjukkan keterlambatan bicara sejak kecil, informasi awalnya ada di <a href="/artikel/speech-delay-adalah">speech delay</a>. Semangat belajar bersama ini sejalan dengan pandangan ' + ext(URL_UNESCO, 'UNESCO tentang pendidikan inklusif') + '.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(faq),
];

const articles = [
  {
    slug: 'modifikasi-kurikulum-bahasa-indonesia-untuk-abk',
    titleTag: 'Modifikasi Kurikulum Bahasa Indonesia untuk ABK | YUKA',
    metaDesc: 'Modifikasi kurikulum Bahasa Indonesia untuk ABK: acuan CP Pendidikan Khusus, beda akomodasi dan modifikasi, langkah, contoh per elemen, dan cara menilai.',
    keywords: 'modifikasi kurikulum bahasa indonesia untuk abk, bahasa indonesia anak berkebutuhan khusus, cp pendidikan khusus bahasa indonesia',
    ogTitle: 'Modifikasi Kurikulum Bahasa Indonesia untuk ABK',
    ogDesc: 'Panduan menyesuaikan pelajaran Bahasa Indonesia untuk anak berkebutuhan khusus di kelas inklusi, mengacu pada CP Pendidikan Khusus Kurikulum Merdeka.',
    h1: 'Modifikasi Kurikulum Bahasa Indonesia untuk ABK: Acuan, Langkah, dan Contoh per Elemen',
    crumb: 'Modifikasi Kurikulum Bahasa Indonesia untuk ABK',
    category: 'Pendidikan',
    datePublished: '2026-11-07T08:00:00+07:00', dateModified: '2026-11-07T08:00:00+07:00',
    dateDisplay: '7 November 2026', readTime: '14 menit baca',
    image: {
      file: `${IMG}/bi-abk-hero.webp`, w: 1200, h: 800,
      alt: 'Siswa SMP berseragam pramuka membaca buku bersama di sudut baca kelas berdinding kuning dengan rak buku dan tirai merah hijau',
      caption: 'Siswa membaca bersama di sudut baca kelas dalam sesi membaca sebelum pelajaran dimulai. Kegiatan literasi seperti ini bisa diikuti semua anak dengan buku sesuai tingkat bacaannya.',
      credit: PD(B_HERO),
    },
    bodyHtml: body.join('\n'), faq,
    related: [
      { href: '/artikel/modifikasi-materi-pelajaran-matematika-untuk-abk', title: 'Modifikasi Materi Pelajaran Matematika untuk ABK', desc: 'Menyesuaikan target matematika tanpa keluar dari kelas.' },
      { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Rencana tertulis per anak berisi tujuan, layanan, dan cara evaluasi.' },
      { href: '/artikel/cara-mengajar-anak-disleksia-membaca', title: 'Cara Mengajar Anak Disleksia Membaca', desc: 'Strategi membaca terstruktur untuk anak dengan kesulitan membaca.' },
    ],
    tags: ['BahasaIndonesia', 'SekolahInklusi', 'Kurikulum'],
    sources: [
      { url: URL_CP, label: 'Keputusan Kepala BSKAP Nomor 032/H/KR/2024 tentang Capaian Pembelajaran pada Kurikulum Merdeka (CP Bahasa Indonesia dan CP Pendidikan Khusus Bahasa Indonesia)' },
      { url: URL_P21, label: 'Permendikbudristek Nomor 21 Tahun 2022 tentang Standar Penilaian Pendidikan (Berita Negara 2022 Nomor 460)' },
      { url: URL_PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
      { url: URL_UDL, label: 'CAST: Universal Design for Learning Guidelines' },
      { url: URL_UNESCO, label: 'UNESCO: Inclusion in education' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 8 November 2026. Uraian fase dan capaian diringkas dari dokumen BSKAP 032/H/KR/2024. Contoh tujuan modifikasi adalah praktik umum di kelas inklusi dan tidak menggantikan asesmen untuk tiap anak.',
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

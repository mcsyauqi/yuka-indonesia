'use strict';
/*
 * Artikel baru: special-olympics-indonesia (cycle #76, 2026-10-11).
 * Keyword: "special olympics indonesia" (Keyword Data YUKA, tab "Prioritas Publish Jul 2026").
 * Terjadwal 2026-10-16. Generator ini SENGAJA tidak menulis kartu ke blog.html:
 * kartu ditambahkan workflow publish-scheduled.yml pada tanggal tayang.
 *
 * Hero: potongan lanskap dari foto Dokumentasi YUKA museum-gunung-merapi-anak-anak-dalam-bus-traveling-001.webp
 * (crop 936x702; diganti 2026-10-11 karena potongan 094 kembar dengan hero alat-bantu-dengar-untuk-anak-sekolah)
 * (semua foto di pool artikel ini berorientasi potret, renderer menolak hero potret).
 */
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'special-olympics-indonesia';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const image = (file, alt, caption) => {
  const size = imageSize(path.join(ROOT, file));
  return { file, w: size.w, h: size.h, alt, caption, credit: CREDIT };
};
const fig = (file, alt, caption) => {
  const s = imageSize(path.join(ROOT, file));
  return `<figure class="article-inline-image"><img src="../${file}" alt="${alt}" loading="lazy" width="${s.w}" height="${s.h}"><figcaption>${caption} <span class="kredit">${CREDIT}</span></figcaption></figure>`;
};
const p = (text) => `<p>${text}</p>`;
const h2 = (id, text) => `<h2 id="${id}">${text}</h2>`;
const h3 = (text) => `<h3>${text}</h3>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((x) => `<li>${x}</li>`).join('')}</ol>`;
const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

const hero = image(
  'Dokumentasi/special-olympics-indonesia-perjalanan-rombongan-bus.webp',
  'Dua remaja duduk berdampingan di dalam bus rombongan, salah satunya tersenyum dan mengacungkan jempol',
  'Dua remaja duduk bersama di bus dalam perjalanan rombongan YUKA. Foto ini dokumentasi perjalanan edukasi YUKA ke Museum Gunung Merapi, bukan kegiatan Special Olympics Indonesia.'
);
const bodyImages = {
  ceria: 'Dokumentasi/candi-plaosan-wisatawan-berpose-candi-prambanan-028.webp',
  gerak: 'Dokumentasi/candi-plaosan-penari-tradisional-candi-borobudur-079.webp',
  sekolah: 'Dokumentasi/museum-gunung-merapi-kunjungan-edukasi-museum-gunung-merapi-027.webp',
  keluarga: 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-013.webp',
};

const SRC = {
  soina: 'https://soina.org/',
  soinaSejarah: 'https://soina.org/sejarah-soina/',
  soinaCabor: 'https://soina.org/cabang-olahraga/',
  soinaKlub: 'https://soina.org/soina-klub/',
  soinaYA: 'https://soina.org/young-athletes/',
  soinaHA: 'https://soina.org/healty-athletes/',
  soinaFamily: 'https://soina.org/family-support-network/',
  soinaUnified: 'https://soina.org/unified-sports/',
  soinaPesonas: 'https://soina.org/pesonas-ii-ntt-2026-kupang/',
  soCamp: 'https://www.specialolympics.org/about/history/camp-shriver',
  soFaq: 'https://www.specialolympics.org/about/faq',
  soSports: 'https://www.specialolympics.org/our-work/sports',
  soUnified: 'https://www.specialolympics.org/what-we-do/sports/unified-sports',
  soYA: 'https://www.specialolympics.org/our-work/young-athletes',
  soHA: 'https://www.specialolympics.org/our-work/inclusive-health/healthy-athletes',
  wiki: 'https://en.wikipedia.org/wiki/Special_Olympics',
  ipc: 'https://www.paralympic.org/classification',
  kemensos: 'https://kemensos.go.id/en/social-minister-calls-athletes-with-intellectual-disabilities-able-to-create-a-world-inclusive-society',
  jateng: 'https://jatengprov.go.id/beritadaerah/bupati-blora-dukung-pendidikan-anak-difabel/',
  cdc: 'https://www.cdc.gov/physical-activity-basics/guidelines/children.html',
  who: 'https://www.who.int/news-room/fact-sheets/detail/physical-activity',
};

const faq = [
  { q: 'Apa itu Special Olympics Indonesia?', a: 'Special Olympics Indonesia (SOIna) adalah organisasi nirlaba yang diakui pemerintah dan terakreditasi oleh Special Olympics International untuk menyelenggarakan pelatihan, kompetisi olahraga, dan program non-olahraga bagi penyandang disabilitas intelektual, yang oleh SOIna juga disebut Orang Bertalenta Khusus (OBK).' },
  { q: 'Siapa pendiri gerakan Special Olympics?', a: 'Gerakan Special Olympics berawal dari Camp Shriver yang didirikan Eunice Kennedy Shriver pada awal 1960-an di halaman belakang rumahnya di Maryland, Amerika Serikat. Ajang Special Olympics pertama kemudian digelar pada 20 Juli 1968 di Soldier Field, Chicago.' },
  { q: 'Apa bedanya Special Olympics dengan Paralimpiade?', a: 'Special Olympics khusus untuk penyandang disabilitas intelektual dan mengajak atlet dari semua tingkat kemampuan, dengan pembagian divisi berdasarkan usia, jenis kelamin, dan kemampuan. Paralimpiade adalah olahraga prestasi untuk berbagai jenis hambatan yang memenuhi syarat, memakai sistem klasifikasi per cabang olahraga.' },
  { q: 'Berapa usia minimal anak untuk ikut Special Olympics?', a: 'Menurut Special Olympics International, atlet program reguler minimal berusia 8 tahun dan teridentifikasi memiliki disabilitas intelektual atau hambatan kognitif. Anak usia 2 sampai 7 tahun dapat mengikuti program bermain Young Athletes.' },
  { q: 'Cabang olahraga apa saja yang ada di SOIna?', a: 'Situs SOIna menyebut 18 cabang, antara lain renang, atletik, bola basket, sepak bola, bulu tangkis, tenis meja, bocce, bola voli, senam artistik, senam ritmik, futsal, bola tangan, boling, floor hockey, floorball, Motor Activity Training Program, snowshoeing, dan dance sport.' },
  { q: 'Apakah anak tanpa disabilitas intelektual boleh ikut?', a: 'Boleh, melalui Unified Sports. Program ini menyatukan orang dengan dan tanpa disabilitas intelektual dalam satu tim yang anggotanya berusia dan berkemampuan setara. Young Athletes juga terbuka bagi anak usia dini dengan maupun tanpa disabilitas intelektual.' },
  { q: 'Bagaimana cara mendaftarkan anak ke SOIna?', a: 'Mulailah dengan menghubungi sekretariat SOIna lewat kontak di situs resminya atau mencari pengurus SOIna di provinsi dan kabupaten/kota Anda. Tanyakan juga ke sekolah atau SLB anak apakah sudah memiliki klub SOIna, karena sekolah dan komunitas adalah inti gerakan ini.' },
  { q: 'Apakah ikut Special Olympics harus berprestasi?', a: 'Tidak. Misi Special Olympics adalah pelatihan sepanjang tahun dan kompetisi bagi semua tingkat kemampuan. Setiap atlet bertanding dalam divisi yang setara, dan janji atletnya berbunyi: biarkan saya menang, tetapi jika tidak bisa menang, biarkan saya berani mencoba.' },
];

const faqBody = `${h2('faq', 'Pertanyaan yang Sering Diajukan')}\n${faq.map((f) => `${h3(f.q)}\n${p(f.a)}`).join('\n')}`;

const bodyHtml = [
  `<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> Special Olympics Indonesia (SOIna) adalah organisasi nirlaba yang terakreditasi oleh Special Olympics International untuk menyelenggarakan pelatihan dan kompetisi olahraga sepanjang tahun bagi penyandang disabilitas intelektual. Gerakan globalnya berawal dari Camp Shriver yang didirikan Eunice Kennedy Shriver pada awal 1960-an. Anak bisa bergabung melalui klub SOIna di sekolah, SLB, atau komunitas, mulai dari program bermain Young Athletes untuk usia 2 sampai 7 tahun.</p></div>`,
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#apa-itu">Apa itu Special Olympics?</a></li><li><a href="#sejarah">Sejarah singkat gerakan Special Olympics</a></li><li><a href="#soina">Mengenal Special Olympics Indonesia (SOIna)</a></li><li><a href="#cabang">Cabang olahraga dan cara bertanding</a></li><li><a href="#program">Program Unified Sports, Young Athletes, dan Healthy Athletes</a></li><li><a href="#paralimpiade">Perbedaan Special Olympics dan Paralimpiade</a></li><li><a href="#cara-ikut">Cara anak ikut SOIna</a></li><li><a href="#manfaat">Manfaat olahraga bagi anak dengan disabilitas intelektual</a></li><li><a href="#peran">Peran keluarga dan sekolah</a></li><li><a href="#faq">Pertanyaan yang sering diajukan</a></li></ol></div>',

  h2('apa-itu', 'Apa Itu Special Olympics?'),
  p(`Special Olympics adalah gerakan olahraga internasional untuk anak dan orang dewasa dengan <a href="disabilitas-intelektual">disabilitas intelektual</a>. Menurut ${ext(SRC.soFaq, 'halaman FAQ resmi Special Olympics')}, misinya adalah menyediakan pelatihan dan kompetisi olahraga sepanjang tahun dalam berbagai cabang bergaya olimpiade. Tujuannya agar atlet terus punya kesempatan membangun kebugaran, menunjukkan keberanian, merasakan kegembiraan, dan berbagi persahabatan dengan keluarga, sesama atlet, serta masyarakat.`),
  p(`Skala gerakan ini besar. ${ext(SRC.soSports, 'Halaman olahraga Special Olympics')} menyebut lebih dari empat juta atlet dan mitra Unified, serta satu juta pelatih dan relawan, di lebih dari 200 program terakreditasi. Organisasi ini menyelenggarakan lebih dari 30 cabang olahraga bergaya olimpiade dan lebih dari 100.000 pertandingan setiap tahun. ${ext(SRC.wiki, 'Wikipedia')} juga mencatat bahwa Special Olympics diakui oleh Komite Olimpiade Internasional (IOC).`),
  p('Yang membuat Special Olympics berbeda adalah sudut pandangnya. Gerakan ini tidak menunggu anak "cukup mampu" untuk berolahraga. Justru olahraga dipakai sebagai jalan agar anak dengan disabilitas intelektual terlihat, dihargai, dan terlibat di tengah masyarakat. Bagi keluarga, ini kabar baik: anak tidak perlu menjadi juara dulu untuk mendapat tempat di lapangan.'),
  p(`Istilah disabilitas intelektual merujuk pada keterbatasan fungsi intelektual dan perilaku adaptif yang muncul pada masa perkembangan. Di Indonesia, istilah lama yang masih sering dipakai adalah <a href="tunagrahita-adalah">tunagrahita</a>. SOIna sendiri memilih sebutan yang lebih menghargai, yaitu Orang Bertalenta Khusus (OBK), seperti tertulis di ${ext(SRC.soina, 'situs resmi SOIna')}.`),

  h2('sejarah', 'Sejarah Singkat Gerakan Special Olympics'),
  p(`Cerita Special Olympics berawal dari sebuah halaman rumah. ${ext(SRC.soCamp, 'Special Olympics International')} menuliskan bahwa Eunice Kennedy Shriver mendirikan Camp Shriver pada awal 1960-an di halaman belakang rumahnya di Maryland, Amerika Serikat. Ia mengundang anak-anak dengan disabilitas intelektual untuk berenang, menendang bola, bermain basket, dan menunggang kuda bersama pendamping muda.`),
  p(`Menurut ${ext(SRC.soinaSejarah, 'halaman sejarah SOIna')}, kegiatan awal itu melibatkan 34 anak dan 26 pendamping. Para pendamping yang semula ragu akhirnya melihat bahwa anak-anak tersebut bukan "sulit" atau "tidak bisa diajari". Mereka hanya ingin bersenang-senang, sama seperti anak lain. Pengalaman itu mengubah cara pandang banyak orang tentang kemampuan anak dengan disabilitas intelektual.`),
  p(`Dari Camp Shriver, gagasan itu berkembang menjadi ajang olahraga yang lebih besar. ${ext(SRC.wiki, 'Wikipedia')} mencatat bahwa Special Olympics pertama digelar pada 20 Juli 1968 di Soldier Field, Chicago. Sejak itu Special Olympics World Games digelar bergantian antara musim panas dan musim dingin, sementara kompetisi lokal dan nasional berlangsung sepanjang tahun di banyak negara.`),
  p('Satu warisan yang sampai sekarang diucapkan atlet di seluruh dunia adalah janji atlet Special Olympics: "Let me win. But if I cannot win, let me be brave in the attempt." SOIna menerjemahkannya sebagai "Biarkan kami menang, tapi apabila kami tidak menang, berilah kami kesempatan untuk mencobanya." Janji ini menegaskan bahwa keberanian mencoba sama berharganya dengan medali.'),
  fig(bodyImages.ceria, 'Seorang remaja putri berkerudung dan berkostum tari tersenyum sambil mengangkat dua jari di samping relief Candi Plaosan', 'Keberanian mencoba dan rasa gembira adalah semangat yang juga diangkat Special Olympics. Foto ini dokumentasi kunjungan edukasi YUKA ke Candi Plaosan, bukan kegiatan Special Olympics.'),

  h2('soina', 'Mengenal Special Olympics Indonesia (SOIna)'),
  p(`Di Indonesia, gerakan ini dijalankan oleh Special Olympics Indonesia atau SOIna. ${ext(SRC.soina, 'Situs resmi SOIna')} menjelaskan bahwa SOIna adalah organisasi nirlaba yang diakui pemerintah dan telah mendapat akreditasi dari Special Olympics International (SOI). Tugasnya menyelenggarakan pelatihan dan kompetisi olahraga, serta program non-olahraga, bagi penyandang disabilitas intelektual di Indonesia.`),
  p(`Pengakuan itu juga disebut pihak pemerintah. Dalam ${ext(SRC.jateng, 'berita Pemerintah Provinsi Jawa Tengah')} tentang pembentukan pengurus SOIna di Kabupaten Blora, Ketua SOIna Jawa Tengah menyatakan SOIna adalah satu-satunya organisasi di Indonesia yang terakreditasi Special Olympics International untuk pelatihan dan kompetisi olahraga bagi warga tunagrahita. ${ext(SRC.kemensos, 'Kementerian Sosial')} memberitakan bahwa pada Agustus 2021 SOIna memperingati hari jadinya yang ke-32.`),
  h3('Struktur organisasi'),
  p(`SOIna bekerja berjenjang, dari pengurus pusat sampai pengurus di provinsi dan kabupaten/kota. Contohnya, berita Jawa Tengah di atas menyebut pembentukan pengurus SOIna di tingkat kabupaten. ${ext(SRC.soinaSejarah, 'Halaman sejarah SOIna')} memuat susunan pengurus periode 2023-2027 dengan Ketua Umum Warsito Ellwein. Di dalamnya ada direktur untuk olahraga, Healthy Athletes, Young Athletes, kerelawanan, dukungan keluarga, dan kebudayaan.`),
  p(`Di tingkat paling dekat dengan anak, ada SOIna Klub. Menurut ${ext(SRC.soinaKlub, 'halaman SOIna Klub')}, klub ini melibatkan atlet, pelatih atau guru, keluarga, relawan, masyarakat, dan lembaga pemerintah maupun swasta. SOIna menegaskan bahwa sekolah dan komunitas adalah inti gerakan Special Olympics di Indonesia, dan pada saat halaman itu kami baca, klub SOIna tersebar di 204 titik lokasi.`),
  h3('Visi dan kompetisi nasional'),
  p(`Visi SOIna adalah memberi kesempatan kepada penyandang disabilitas intelektual untuk menjadi warga negara yang berguna, produktif, diterima, dihargai, dan diakui kesetaraannya. Salah satu ajang nasionalnya adalah Pekan Special Olympics Nasional (PESONAS). ${ext(SRC.soinaPesonas, 'Halaman PESONAS II NTT 2026')} menjelaskan bahwa ajang empat tahunan di Kupang ini juga menjadi persiapan menuju Special Olympics World Games di Santiago, Chile, tahun 2027.`),

  h2('cabang', 'Cabang Olahraga dan Cara Bertanding'),
  p(`${ext(SRC.soinaCabor, 'Halaman cabang olahraga SOIna')} menyebut 18 cabang olahraga individu dan beregu yang dikembangkan, dengan konsep tradisional dan unified. Daftarnya mencakup renang, atletik, bola basket, sepak bola, bulu tangkis, tenis meja, bocce, bola voli, senam artistik, senam ritmik, futsal, bola tangan, boling, floor hockey, floorball, Motor Activity Training Program, snowshoeing, dan dance sport.`),
  p('Bagi orang tua, pilihan cabang sebaiknya berangkat dari minat dan kenyamanan anak. Anak yang suka air mungkin senang renang. Anak yang suka berlari bisa dikenalkan atletik. Anak yang belum nyaman dengan permainan cepat bisa mulai dari bocce atau boling yang ritmenya lebih tenang. Latihan <a href="motorik-kasar-adalah">motorik kasar</a> di rumah, seperti melempar, menangkap, dan melompat, dapat menjadi bekal awal.'),
  h3('Pembagian divisi yang adil'),
  p(`Special Olympics punya cara bertanding yang khas. Menurut ${ext(SRC.soFaq, 'FAQ Special Olympics')}, lewat proses yang disebut divisioning, atlet bertanding melawan atlet lain dengan jenis kelamin, usia, dan kemampuan yang serupa. ${ext(SRC.wiki, 'Wikipedia')} menambahkan bahwa medali diberikan untuk juara satu sampai tiga, sedangkan pita penghargaan diberikan untuk peringkat empat sampai delapan.`),
  p('Sistem ini penting bagi anak dengan disabilitas intelektual. Anak tidak dihadapkan pada lawan yang jauh lebih kuat sehingga merasa kalah sebelum mulai. Setiap atlet mendapat kesempatan yang bermakna untuk berusaha dan diakui. Bagi anak dengan kebutuhan dukungan yang lebih besar, SOIna sedang merancang Motor Activity Training Program, yaitu kegiatan olahraga yang disesuaikan dengan kemampuan atlet dengan disabilitas intelektual dan perkembangan yang berat.'),
  fig(bodyImages.gerak, 'Seorang remaja berkostum tari tradisional menari di halaman rumput dengan latar Candi Plaosan', 'Gerak tubuh yang menyenangkan, seperti menari, bisa menjadi pintu masuk anak menyukai aktivitas fisik. Foto ini dokumentasi kunjungan edukasi YUKA ke Candi Plaosan, bukan pertandingan dance sport SOIna.'),

  h2('program', 'Program Unified Sports, Young Athletes, dan Healthy Athletes'),
  p('Special Olympics tidak hanya soal pertandingan. Tiga program pendukungnya, yang juga tercantum di situs SOIna, menjangkau anak dan keluarga lebih luas.'),
  h3('Unified Sports: satu tim, satu tujuan'),
  p(`${ext(SRC.soUnified, 'Unified Sports')} menyatukan orang dengan dan tanpa disabilitas intelektual dalam satu tim. Prinsipnya sederhana: berlatih dan bermain bersama adalah jalan cepat menuju persahabatan dan saling memahami. Anggota tim memiliki usia dan kemampuan yang setara, sehingga latihan tetap seru dan pertandingan tetap menantang. ${ext(SRC.soinaUnified, 'SOIna')} memakai prinsip yang sama, sejalan dengan semangat <a href="inklusi-sosial">inklusi sosial</a>.`),
  h3('Young Athletes: bermain sejak usia dini'),
  p(`${ext(SRC.soYA, 'Young Athletes')} adalah program bermain untuk anak usia 2 sampai 7 tahun, dengan maupun tanpa disabilitas intelektual. Anak dikenalkan pada keterampilan dasar seperti berlari, menendang, dan melempar, sambil belajar berbagi, bergiliran, dan mengikuti arahan. Special Olympics melaporkan bahwa anak dengan disabilitas intelektual yang mengikuti Young Athletes mengembangkan keterampilan motorik lebih dari dua kali lebih cepat dibanding yang tidak ikut. ${ext(SRC.soinaYA, 'SOIna')} juga menjalankan program ini.`),
  h3('Healthy Athletes: pemeriksaan kesehatan gratis'),
  p(`Sejak 1997, ${ext(SRC.soHA, 'Healthy Athletes')} menawarkan pemeriksaan kesehatan dan edukasi gratis bagi atlet Special Olympics. Programnya mencakup delapan disiplin, antara lain pemeriksaan umum (MedFest), mata (Opening Eyes), pendengaran (Healthy Hearing), gigi (Special Smiles), dan kebugaran (FUNfitness). ${ext(SRC.soinaHA, 'SOIna')} menyatakan pemeriksaan di Indonesia juga dilakukan dalam delapan disiplin.`),
  '<table class="article-table"><caption>Program utama Special Olympics yang juga dijalankan SOIna</caption><thead><tr><th>Program</th><th>Untuk siapa</th><th>Isi kegiatan</th></tr></thead><tbody><tr><td>Pelatihan dan kompetisi olahraga</td><td>Atlet dengan disabilitas intelektual, minimal 8 tahun (ketentuan SOI)</td><td>Latihan sepanjang tahun dan pertandingan dengan divisi setara</td></tr><tr><td>Unified Sports</td><td>Atlet dengan dan tanpa disabilitas intelektual dengan usia dan kemampuan setara</td><td>Berlatih dan bertanding dalam satu tim</td></tr><tr><td>Young Athletes</td><td>Anak usia 2 sampai 7 tahun, dengan maupun tanpa disabilitas intelektual</td><td>Permainan untuk keterampilan dasar seperti berlari, menendang, dan melempar</td></tr><tr><td>Healthy Athletes</td><td>Atlet Special Olympics</td><td>Pemeriksaan kesehatan dan edukasi gratis dalam delapan disiplin</td></tr><tr><td>Family Support Network</td><td>Orang tua dan saudara kandung atlet</td><td>Family Leader, Family Health Forum, dan Siblings Engagement</td></tr></tbody></table>',

  h2('paralimpiade', 'Perbedaan Special Olympics dan Paralimpiade'),
  p('Banyak orang tua mengira Special Olympics sama dengan Paralimpiade. Keduanya memang sama-sama gerakan olahraga bagi penyandang disabilitas, tetapi tujuan dan cara kerjanya berbeda. Memahami perbedaannya membantu keluarga memilih jalur yang paling sesuai dengan kebutuhan dan minat anak.'),
  p(`Paralimpiade adalah olahraga prestasi tingkat elite. Menurut ${ext(SRC.ipc, 'Komite Paralimpiade Internasional (IPC)')}, klasifikasi adalah inti gerakan Paralimpiade untuk memastikan hasil pertandingan ditentukan oleh faktor selain hambatan atlet. Hambatan intelektual termasuk salah satu jenis hambatan yang memenuhi syarat, tetapi setiap federasi cabang olahraga menentukan sendiri hambatan mana yang mereka layani. Di Indonesia, ajang setingkat nasionalnya dikenal sebagai Peparnas.`),
  p('Special Olympics, sebaliknya, khusus untuk penyandang disabilitas intelektual dan sengaja terbuka bagi semua tingkat kemampuan. Fokusnya adalah pelatihan sepanjang tahun, kesehatan, dan penerimaan sosial, bukan hanya rekor. Seorang anak bisa saja aktif di keduanya bila memenuhi syarat, tetapi bagi kebanyakan anak, Special Olympics adalah pintu masuk yang lebih ramah.'),
  '<table class="article-table"><caption>Perbandingan Special Olympics dan Paralimpiade</caption><thead><tr><th>Aspek</th><th>Special Olympics</th><th>Paralimpiade</th></tr></thead><tbody><tr><td>Peserta</td><td>Penyandang disabilitas intelektual</td><td>Atlet dengan jenis hambatan yang memenuhi syarat, termasuk hambatan fisik, penglihatan, dan intelektual di cabang tertentu</td></tr><tr><td>Tingkat kemampuan</td><td>Semua tingkat kemampuan diajak ikut</td><td>Atlet prestasi yang lolos seleksi dan klasifikasi</td></tr><tr><td>Cara mengelompokkan atlet</td><td>Divisi berdasarkan jenis kelamin, usia, dan kemampuan</td><td>Klasifikasi per cabang olahraga sesuai aturan federasi</td></tr><tr><td>Penghargaan</td><td>Medali juara 1 sampai 3, pita untuk peringkat 4 sampai 8</td><td>Medali untuk juara 1 sampai 3</td></tr><tr><td>Penyelenggara di Indonesia</td><td>SOIna, terakreditasi Special Olympics International</td><td>Komite Paralimpiade Nasional (NPC) Indonesia</td></tr></tbody></table>',

  h2('cara-ikut', 'Cara Anak Ikut SOIna'),
  p('Tidak ada satu pintu tunggal untuk bergabung, karena kegiatan SOIna berjalan lewat pengurus daerah, klub, sekolah, dan komunitas. Kabar baiknya, jalur yang paling dekat sering kali justru sekolah anak sendiri. Berikut langkah yang bisa orang tua tempuh.'),
  ol([
    `<strong>Pahami syarat usia.</strong> Special Olympics International menetapkan atlet minimal berusia 8 tahun dan teridentifikasi memiliki disabilitas intelektual atau hambatan kognitif oleh lembaga atau tenaga profesional. Anak usia 2 sampai 7 tahun dapat mulai dari Young Athletes. Hasil <a href="tunagrahita-ringan-sedang-berat-perbedaan">asesmen tingkat kebutuhan dukungan</a> dari psikolog atau dokter bisa membantu.`,
    '<strong>Tanyakan ke sekolah atau SLB.</strong> Banyak kegiatan SOIna berbasis sekolah. Tanyakan kepada guru olahraga atau kepala sekolah apakah sekolah sudah memiliki klub SOIna atau pernah mengirim atlet.',
    '<strong>Hubungi pengurus SOIna daerah.</strong> Cari pengurus SOIna di provinsi atau kabupaten/kota Anda. Bila belum ketemu, hubungi sekretariat SOIna pusat lewat kontak di situs resminya untuk diarahkan ke pengurus terdekat.',
    '<strong>Pilih cabang yang sesuai minat.</strong> Diskusikan dengan pelatih cabang mana yang paling menyenangkan dan aman untuk anak. Mulailah dari satu cabang dulu.',
    '<strong>Lengkapi pemeriksaan kesehatan.</strong> Ikuti arahan pengurus soal pemeriksaan kesehatan sebelum latihan rutin. Pada ajang tertentu, Healthy Athletes juga menyediakan pemeriksaan gratis.',
    '<strong>Datang ke latihan secara rutin.</strong> Konsistensi lebih penting daripada intensitas. Dampingi anak di awal, lalu beri ruang agar ia membangun kedekatan dengan pelatih dan teman.',
  ]),
  p(`Bila anak belum siap bertanding, tidak apa-apa. Banyak klub juga menyelenggarakan kegiatan non-olahraga seperti seni dan budaya. ${ext(SRC.soinaKlub, 'SOIna')} menyebut klub dimaksudkan menjadi ruang yang aman dan menyenangkan agar atlet tetap aktif, bahkan setelah usia sekolah.`),

  h2('manfaat', 'Manfaat Olahraga bagi Anak dengan Disabilitas Intelektual'),
  p(`Aktivitas fisik penting bagi semua anak, termasuk anak dengan disabilitas. ${ext(SRC.who, 'WHO')} menjelaskan bahwa pedoman aktivitas fisiknya juga berlaku bagi orang yang hidup dengan disabilitas, dan menegaskan bahwa aktivitas fisik sekecil apa pun lebih baik daripada tidak sama sekali. ${ext(SRC.cdc, 'CDC')} merekomendasikan anak usia 6 sampai 17 tahun bergerak dengan intensitas sedang hingga berat minimal 60 menit setiap hari.`),
  p('Bagi anak dengan disabilitas intelektual, olahraga yang terstruktur menawarkan lebih dari kebugaran. Latihan yang berulang dan bertahap memberi kesempatan untuk belajar mengikuti instruksi, menunggu giliran, dan menyelesaikan tugas. Hal ini sejalan dengan temuan Young Athletes yang dilaporkan Special Olympics, yaitu peningkatan keterampilan motorik serta keterampilan sosial dan belajar menurut orang tua dan guru.'),
  ul([
    '<strong>Kebugaran dan kesehatan:</strong> gerak teratur membantu kekuatan otot, keseimbangan, dan daya tahan.',
    '<strong>Keterampilan sosial:</strong> bermain dalam tim melatih kerja sama, komunikasi, dan menerima kemenangan maupun kekalahan.',
    '<strong>Rasa percaya diri:</strong> setiap kemajuan kecil yang diakui pelatih dan keluarga menumbuhkan keyakinan bahwa "aku bisa".',
    '<strong>Rutinitas:</strong> jadwal latihan yang tetap membantu anak memahami struktur waktu dan kebiasaan sehat.',
    '<strong>Penerimaan masyarakat:</strong> Unified Sports mempertemukan anak dengan teman sebaya tanpa disabilitas sehingga prasangka berkurang.',
  ]),
  p(`Manfaat ini tidak muncul seketika dan tidak sama pada setiap anak. Bila anak memiliki kondisi kesehatan tertentu, misalnya pada sebagian anak dengan <a href="down-syndrome-adalah">Down syndrome</a>, konsultasikan dulu jenis dan intensitas olahraga yang aman dengan dokter. Untuk anak dengan hambatan gerak, <a href="terapi-fisik-untuk-abk">terapi fisik</a> bisa berjalan beriringan dengan kegiatan olahraga.`),
  fig(bodyImages.sekolah, 'Rombongan anak, remaja, guru, dan pendamping duduk bersama di ruang pamer Museum Gunung Merapi dengan latar foto gunung', 'Sekolah dan komunitas adalah ruang tempat anak belajar bersama teman dan pendamping. Foto ini dokumentasi kunjungan edukasi YUKA ke Museum Gunung Merapi, bukan kegiatan Special Olympics.'),

  h2('peran', 'Peran Keluarga dan Sekolah'),
  p(`Keluarga adalah pendukung pertama atlet. ${ext(SRC.soinaFamily, 'Family Support Network SOIna')} menekankan bahwa banyak penyandang disabilitas intelektual tetap tinggal bersama keluarga hingga dewasa, sehingga dukungan sosial bagi orang tua penting untuk kesehatan mental dan hubungan pengasuhan yang positif. Melalui Family Leader, Family Health Forum, dan Siblings Engagement, SOIna mengajak keluarga saling menguatkan.`),
  p(`Di rumah, peran orang tua tidak harus rumit. Antar anak ke latihan, rayakan usahanya, dan ajak <a href="sibling-anak-berkebutuhan-khusus">saudara kandungnya</a> ikut menonton atau menjadi mitra Unified. Jaga juga kesehatan diri sendiri. <a href="mengelola-stres-orang-tua-anak-abk">Mengelola stres orang tua</a> sama pentingnya dengan mendampingi anak, karena pendampingan jangka panjang butuh tenaga yang terjaga. Dalam Islam, setiap ikhtiar kecil untuk kebaikan anak adalah amal yang bernilai.`),
  p(`Sekolah juga memegang peran besar. Guru olahraga di <a href="slb-adalah">SLB</a> maupun <a href="pendidikan-inklusi">sekolah inklusi</a> dapat menjadi penghubung dengan pengurus SOIna, mengadaptasi pelajaran olahraga, dan mengajak siswa tanpa disabilitas menjadi mitra Unified. Pendekatan seperti <a href="buddy-system-untuk-anak-abk-di-sekolah">buddy system</a> di kelas bisa diperluas ke lapangan olahraga.`),
  p(`Di YUKA, kami percaya setiap anak berhak bergerak, bermain, dan dihargai usahanya. Kegiatan olahraga dapat dipadukan dengan <a href="kurikulum-fungsional-untuk-anak-tunagrahita">kurikulum fungsional</a> agar keterampilan yang dilatih di lapangan, seperti antre, mengikuti aba-aba, dan bekerja sama, juga terpakai dalam kehidupan sehari-hari. Bila Anda ingin berdiskusi tentang pendampingan anak, tim YUKA siap mendengarkan.`),
  fig(bodyImages.keluarga, 'Anak-anak, remaja, dan dua pendamping perempuan berpose bersama di gerbang batu Candi Plaosan', 'Dukungan keluarga dan pendamping membuat anak lebih berani mencoba hal baru. Foto ini dokumentasi kunjungan edukasi YUKA ke Candi Plaosan, bukan kegiatan SOIna.'),

  faqBody,
  `<p>Bacaan lanjutan: <a href="disabilitas-intelektual-adalah">pengertian disabilitas intelektual</a>, <a href="dukungan-keluarga-anak-abk">dukungan keluarga untuk anak ABK</a>, <a href="peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>, <a href="permainan-motorik-kasar">permainan motorik kasar</a>, dan <a href="hari-disabilitas-internasional">Hari Disabilitas Internasional</a>.</p>`,
].join('\n');

const article = {
  slug,
  titleTag: 'Special Olympics Indonesia (SOIna): Sejarah, Program, dan Cara Ikut',
  metaDesc: 'Kenali Special Olympics Indonesia (SOIna): sejarah gerakan, cabang olahraga, Unified Sports, Young Athletes, beda dengan Paralimpiade, dan cara anak ikut.',
  keywords: 'special olympics indonesia, soina, special olympics, olahraga disabilitas intelektual, unified sports, young athletes, healthy athletes',
  ogTitle: 'Special Olympics Indonesia (SOIna): Panduan untuk Orang Tua',
  ogDesc: 'Sejarah, program, cabang olahraga, dan cara anak dengan disabilitas intelektual bergabung dengan SOIna.',
  datePublished: '2026-10-16',
  dateModified: '2026-10-16',
  dateDisplay: '16 Okt 2026',
  readTime: '12 menit baca',
  category: 'Disabilitas',
  h1: 'Special Olympics Indonesia (SOIna): Sejarah, Program, dan Cara Anak Ikut',
  crumb: 'Special Olympics Indonesia',
  parent: { href: 'disabilitas-intelektual', name: 'Disabilitas Intelektual' },
  about: ['Special Olympics Indonesia', 'Special Olympics', 'Disabilitas intelektual', 'Olahraga inklusif'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'disabilitas-intelektual', title: 'Disabilitas Intelektual', desc: 'Pengertian, ciri, dan dukungan bagi anak dengan disabilitas intelektual.' },
    { href: 'inklusi-sosial', title: 'Inklusi Sosial', desc: 'Mengapa keterlibatan penuh di masyarakat penting bagi penyandang disabilitas.' },
    { href: 'motorik-kasar-adalah', title: 'Motorik Kasar Adalah', desc: 'Dasar gerak tubuh yang menjadi bekal anak berolahraga.' },
    { href: 'dukungan-keluarga-anak-abk', title: 'Dukungan Keluarga Anak ABK', desc: 'Cara keluarga saling menguatkan dalam mendampingi anak.' },
  ],
  tags: ['SpecialOlympics', 'SOIna', 'DisabilitasIntelektual', 'OlahragaInklusif', 'UnifiedSports'],
  sources: [
    { url: SRC.soina, label: 'Special Olympics Indonesia (SOIna), Tentang Special Olympics Indonesia' },
    { url: SRC.soinaSejarah, label: 'SOIna, Sejarah SOIna, visi, misi, dan pengurus periode 2023-2027' },
    { url: SRC.soinaCabor, label: 'SOIna, Cabang Olahraga' },
    { url: SRC.soinaKlub, label: 'SOIna, SOIna Klub' },
    { url: SRC.soinaUnified, label: 'SOIna, Unified Sports' },
    { url: SRC.soinaYA, label: 'SOIna, Young Athletes' },
    { url: SRC.soinaHA, label: 'SOIna, Healthy Athletes' },
    { url: SRC.soinaFamily, label: 'SOIna, Family Support Network' },
    { url: SRC.soinaPesonas, label: 'SOIna, PESONAS II NTT 2026 Kupang' },
    { url: SRC.soCamp, label: 'Special Olympics, Camp Shriver: The Beginning of a Movement' },
    { url: SRC.soFaq, label: 'Special Olympics, Frequently Asked Questions' },
    { url: SRC.soSports, label: 'Special Olympics, Sports' },
    { url: SRC.soUnified, label: 'Special Olympics, Unified Sports' },
    { url: SRC.soYA, label: 'Special Olympics, Young Athletes' },
    { url: SRC.soHA, label: 'Special Olympics, Healthy Athletes' },
    { url: SRC.wiki, label: 'Wikipedia, Special Olympics' },
    { url: SRC.ipc, label: 'International Paralympic Committee, Classification' },
    { url: 'https://en.wikipedia.org/wiki/National_Paralympic_Committee_of_Indonesia', label: 'Wikipedia, National Paralympic Committee of Indonesia' },
    { url: SRC.kemensos, label: 'Kementerian Sosial RI, berita HUT ke-32 SOIna (Agustus 2021)' },
    { url: SRC.jateng, label: 'Pemerintah Provinsi Jawa Tengah, Bupati Blora Dukung Pendidikan Anak Difabel' },
    { url: SRC.who, label: 'WHO, Physical activity (fact sheet)' },
    { url: SRC.cdc, label: 'CDC, Physical Activity Guidelines for Children' },
  ],
  sourcesCheckedNote: 'Sumber resmi diperiksa pada 11 Oktober 2026. Data organisasi (jumlah klub, cabang olahraga, pengurus) dapat berubah; rujuk situs resmi SOIna untuk informasi terbaru. Foto dalam artikel ini adalah dokumentasi kegiatan YUKA, bukan kegiatan Special Olympics.',
};

const html = renderArticlePage(article);
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

// Konten klaster motorik halus, ditulis ulang 2026-09-24 (kartu Trello PaAYbrU3).
// Versi 2026-09-23 memakai templat berulang (paragraf identik di tiap bagian dan
// tabel milestone motorik kasar di artikel motorik halus). File ini menggantinya
// dengan isi unik per intent. Semua butir milestone berasal dari halaman CDC
// "Learn the Signs. Act Early." per usia (bagian Movement/Physical Development).
'use strict';

const CDC = 'https://www.cdc.gov/act-early/milestones/index.html';
const cdc = (p) => `https://www.cdc.gov/act-early/milestones/${p}.html`;

const SRC_CDC = `<a href="${CDC}" target="_blank" rel="noopener">CDC, Learn the Signs. Act Early.: Milestones (2026)</a>`;

const articles = [
  // ------------------------------------------------------------------ A
  {
    slug: 'motorik-halus-adalah',
    title: 'Motorik Halus Adalah: Pengertian, Komponen, dan Tahapan Usia',
    h1: 'Motorik Halus Adalah: Pengertian, 5 Komponen, dan Tahapan per Usia',
    breadcrumb: 'Motorik Halus Adalah',
    description: 'Motorik halus adalah kemampuan mengendalikan otot kecil tangan dan jari bersama mata. Pahami lima komponennya, tahapan per usia menurut CDC, dan cara mengamatinya di rumah.',
    keywords: ['motorik halus adalah', 'pengertian motorik halus', 'komponen motorik halus', 'tahapan motorik halus'],
    category: 'Tumbuh Kembang',
    datePublished: '2026-09-23',
    readMin: 9,
    hero: { src: 'cocopandan-lemon-anak-bermain-eksperimen-sains-rumah-008.webp', alt: 'Anak perempuan memeras jeruk nipis ke saringan di atas teko dengan didampingi orang dewasa', w: 800, h: 1067 },
    faq: [
      ['Motorik halus adalah kemampuan apa?', 'Motorik halus adalah kemampuan memakai otot kecil di tangan dan jari, dibantu koordinasi mata, untuk gerakan yang butuh ketepatan seperti mengambil benda kecil, menyendok, mengancingkan baju, dan menulis.'],
      ['Apa saja komponen motorik halus?', 'Lima komponen yang sering dipakai terapis untuk mengamati motorik halus adalah stabilitas bahu dan lengan, pola genggaman, koordinasi dua tangan, koordinasi mata dan tangan, serta manipulasi benda di dalam genggaman.'],
      ['Pada usia berapa anak bisa menjimpit benda kecil?', 'Menurut daftar milestone CDC, sebagian besar anak sudah bisa mengambil benda kecil di antara ibu jari dan jari telunjuk, misalnya potongan makanan kecil, pada usia sekitar 1 tahun.'],
      ['Kapan orang tua perlu berkonsultasi?', 'CDC menganjurkan bicara dengan dokter anak bila anak tidak mencapai satu atau lebih milestone, kehilangan kemampuan yang sebelumnya sudah bisa, atau orang tua memiliki kekhawatiran lain.'],
    ],
    body: `
<p><strong>Motorik halus adalah kemampuan menggerakkan otot-otot kecil di tangan dan jari secara terkendali, biasanya bersama koordinasi mata, untuk pekerjaan yang menuntut ketepatan.</strong> Menjimpit remah nasi, memutar tutup botol, membalik halaman buku, mengancingkan seragam, sampai menulis nama sendiri adalah contohnya. Berbeda dengan <a href="motorik-kasar-adalah">motorik kasar</a> yang memindahkan seluruh tubuh, motorik halus bekerja pada skala kecil dan hasilnya diukur dari ketelitian, bukan kekuatan.</p>
<p>Artikel ini fokus pada definisi: apa saja yang sebenarnya bekerja ketika anak memakai tangannya, bagaimana urutan perkembangannya menurut daftar milestone CDC, dan bagaimana orang tua bisa mengamatinya tanpa berubah menjadi penguji. Untuk ide kegiatan siap pakai, lihat <a href="kegiatan-dan-stimulasi-motorik-halus">rencana kegiatan dan stimulasi motorik halus 4 minggu</a> dan <a href="permainan-motorik-halus">daftar permainan motorik halus</a>.</p>

<div class="toc"><h3>Daftar Isi</h3><ol>
<li><a href="#pengertian">Pengertian motorik halus</a></li>
<li><a href="#mengapa-penting">Mengapa motorik halus penting</a></li>
<li><a href="#komponen">Lima komponen motorik halus</a></li>
<li><a href="#tahapan">Tahapan motorik halus per usia</a></li>
<li><a href="#faktor">Faktor yang memengaruhi</a></li>
<li><a href="#mengamati">Cara mengamati di rumah</a></li>
<li><a href="#aktivitas">Aktivitas rumah sesuai komponen</a></li>
<li><a href="#konsultasi">Kapan perlu konsultasi</a></li>
<li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
</ol></div>

<h2 id="pengertian">Pengertian Motorik Halus</h2>
<p>Kata "halus" di sini tidak berarti lembut, melainkan kecil dan presisi. Saat anak mengambil satu butir kacang hijau dari piring, ada banyak hal yang terjadi bersamaan: bahu dan siku menahan lengan agar stabil, pergelangan mengarahkan tangan, ibu jari dan telunjuk membuka selebar ukuran benda, mata memberi tahu jaraknya, lalu otak menyesuaikan tekanan supaya kacang tidak terlempar. Semua proses itulah yang disebut motorik halus.</p>
<p>Karena melibatkan mata, otot, dan perencanaan gerak sekaligus, motorik halus tidak bisa dinilai dari satu tugas. Anak yang belum rapi menulis bisa saja sangat cekatan menyusun balok. Anak yang lancar menggambar bisa masih kesulitan membuka bungkus makanan karena kedua tangannya belum bekerja sama. Pemahaman ini penting agar orang tua tidak menarik kesimpulan besar dari satu aktivitas.</p>

<h2 id="mengapa-penting">Mengapa Motorik Halus Penting</h2>
<p>Motorik halus adalah jembatan menuju kemandirian. Hampir semua kegiatan bantu diri, seperti makan dengan sendok, memakai dan melepas baju, menggosok gigi, dan merapikan tas, bergantung pada tangan yang terampil. Ketika tangan anak masih kesulitan, ia lebih sering menunggu dibantu, dan hal ini bisa memengaruhi rasa percaya dirinya.</p>
<p>Di sekolah, motorik halus menopang kegiatan menggunting, menempel, mewarnai, dan kemudian menulis. Anak yang harus berkonsentrasi penuh hanya untuk memegang pensil akan punya sisa perhatian yang lebih sedikit untuk memikirkan isi tulisannya. Itulah sebabnya guru PAUD dan TK banyak memberi kegiatan tangan sebelum mengenalkan huruf.</p>

<h2 id="komponen">Lima Komponen Motorik Halus</h2>
<p>Terapis okupasi biasanya memecah motorik halus menjadi beberapa bagian supaya lebih mudah diamati. Lima komponen berikut membantu orang tua melihat bagian mana yang sudah kuat dan bagian mana yang masih perlu kesempatan latihan.</p>
<ol>
<li><strong>Stabilitas bahu, lengan, dan pergelangan.</strong> Jari hanya bisa bergerak tepat bila pangkalnya stabil. Anak yang bahunya mudah lelah sering menulis sambil menopang kepala atau berganti posisi terus-menerus.</li>
<li><strong>Pola genggaman.</strong> Genggaman berkembang dari menggenggam dengan seluruh telapak, lalu menjepit dengan ibu jari dan telunjuk, sampai memegang alat tulis dengan ujung jari. Perubahan pola ini adalah salah satu tanda kematangan yang paling mudah dilihat.</li>
<li><strong>Koordinasi dua tangan.</strong> Satu tangan memegang, tangan lain bekerja. Membuka tutup wadah, meronce, dan menggunting kertas semuanya membutuhkan pembagian peran ini.</li>
<li><strong>Koordinasi mata dan tangan.</strong> Mata memandu arah dan jarak gerakan. Komponen ini terlihat saat anak memasukkan bentuk ke lubang yang sesuai atau mewarnai tanpa terlalu banyak keluar garis.</li>
<li><strong>Manipulasi di dalam tangan.</strong> Memutar pensil untuk memakai penghapus atau memindahkan koin dari telapak ke ujung jari tanpa bantuan tangan lain. Komponen ini biasanya matang paling akhir.</li>
</ol>

<h2 id="tahapan">Tahapan Motorik Halus per Usia</h2>
<p>Tabel berikut merangkum kemampuan tangan dari daftar milestone CDC. CDC menyusun daftar ini sebagai kemampuan yang dilakukan sebagian besar anak pada usia tersebut, jadi fungsinya sebagai patokan pengamatan, bukan nilai lulus atau gagal. Kolom ketiga menunjukkan komponen yang sedang banyak bekerja.</p>
<div style="overflow-x:auto"><table>
<thead><tr><th>Usia</th><th>Kemampuan tangan yang umum terlihat (CDC)</th><th>Komponen yang sedang berkembang</th></tr></thead>
<tbody>
<tr><td><a href="${cdc('2-months')}" target="_blank" rel="noopener">2 bulan</a></td><td>Membuka genggaman tangan sebentar</td><td>Awal kontrol tangan</td></tr>
<tr><td><a href="${cdc('4-months')}" target="_blank" rel="noopener">4 bulan</a></td><td>Memegang mainan yang diletakkan di tangannya, membawa tangan ke mulut, mengayunkan lengan ke arah mainan</td><td>Stabilitas lengan, mata dan tangan</td></tr>
<tr><td><a href="${cdc('9-months')}" target="_blank" rel="noopener">9 bulan</a></td><td>Memindahkan benda dari satu tangan ke tangan lain, memakai jari untuk "menyapu" makanan ke arahnya</td><td>Koordinasi dua tangan, genggaman</td></tr>
<tr><td><a href="${cdc('1-year')}" target="_blank" rel="noopener">1 tahun</a></td><td>Mengambil benda kecil di antara ibu jari dan telunjuk, misalnya potongan makanan kecil</td><td>Genggaman jepit</td></tr>
<tr><td><a href="${cdc('18-months')}" target="_blank" rel="noopener">18 bulan</a></td><td>Mencoret-coret, mencoba memakai sendok, makan sendiri dengan jari</td><td>Mata dan tangan, penggunaan alat</td></tr>
<tr><td><a href="${cdc('30-months')}" target="_blank" rel="noopener">30 bulan</a></td><td>Memutar benda seperti gagang pintu atau tutup botol ulir, membalik halaman buku satu per satu</td><td>Kekuatan pergelangan, ketepatan jari</td></tr>
<tr><td><a href="${cdc('3-years')}" target="_blank" rel="noopener">3 tahun</a></td><td>Meronce benda besar seperti manik besar atau makaroni, memakai garpu</td><td>Koordinasi dua tangan</td></tr>
<tr><td><a href="${cdc('4-years')}" target="_blank" rel="noopener">4 tahun</a></td><td>Memegang krayon atau pensil di antara jari dan ibu jari (bukan dikepal), membuka sebagian kancing</td><td>Genggaman alat tulis, manipulasi</td></tr>
<tr><td><a href="${cdc('5-years')}" target="_blank" rel="noopener">5 tahun</a></td><td>Mengancingkan sebagian kancing</td><td>Manipulasi di dalam tangan</td></tr>
</tbody></table></div>
<p class="source-note">Sumber: ${SRC_CDC}, halaman per usia bagian Movement/Physical Development, diakses 24 September 2026. Tabel ini bukan alat diagnosis.</p>

<h2 id="faktor">Faktor yang Memengaruhi Motorik Halus</h2>
<ul>
<li><strong>Motorik kasar dan postur.</strong> Duduk tegak yang stabil memberi pangkal kokoh bagi tangan. Karena itu anak yang masih sulit mempertahankan posisi duduk sering juga tampak kesulitan di meja. Penjelasan hubungan keduanya ada di artikel <a href="perbedaan-motorik-kasar-dan-halus">perbedaan motorik kasar dan halus</a>.</li>
<li><strong>Pengolahan sensori.</strong> Anak yang sangat tidak nyaman dengan tekstur lengket atau basah mungkin menghindari kegiatan seperti meremas adonan, sehingga kesempatan latihannya berkurang. Topik ini dibahas di artikel <a href="sensori-integrasi">sensori integrasi</a>.</li>
<li><strong>Kesempatan mencoba.</strong> Anak yang selalu disuapi dan dipakaikan baju punya lebih sedikit waktu latihan dibanding anak yang dibiarkan mencoba, walaupun hasilnya berantakan.</li>
<li><strong>Penglihatan.</strong> Gangguan penglihatan yang belum terdeteksi bisa terlihat seperti masalah koordinasi mata dan tangan.</li>
<li><strong>Kondisi kesehatan dan perkembangan.</strong> Kelahiran prematur, tonus otot yang rendah atau tinggi, dan kondisi seperti <a href="cerebral-palsy-adalah">cerebral palsy</a> atau <a href="down-syndrome-adalah">down syndrome</a> dapat mengubah laju perkembangan. Pada anak prematur, dokter biasanya memakai usia koreksi saat menilai milestone.</li>
</ul>

<h2 id="mengamati">Cara Mengamati Motorik Halus di Rumah</h2>
<p>Pengamatan terbaik terjadi saat kegiatan biasa, bukan saat anak merasa diuji. Pilih tiga momen dalam seminggu, misalnya makan siang, bermain balok, dan bersiap mandi, lalu catat hal-hal berikut:</p>
<ul>
<li>Tangan mana yang lebih sering dipakai, dan apakah tangan lain ikut membantu memegang.</li>
<li>Bagaimana anak memegang sendok, krayon, atau benda kecil: dengan seluruh telapak atau dengan ujung jari.</li>
<li>Apakah anak cepat lelah, sering berhenti, atau menghindari kegiatan tertentu.</li>
<li>Bantuan apa yang masih dibutuhkan: contoh gerakan, bantuan fisik ringan, atau cukup diingatkan.</li>
</ul>
<p>Catatan singkat seperti ini jauh lebih berguna bagi guru atau terapis dibanding kesan umum "anak saya kurang terampil".</p>

<h2 id="aktivitas">Aktivitas Rumah Sesuai Komponen</h2>
<ul>
<li><strong>Stabilitas:</strong> menggambar di kertas yang ditempel di dinding atau jendela, merangkak sambil mendorong mobil mainan.</li>
<li><strong>Genggaman:</strong> memindahkan kancing besar atau tutup botol ke wadah, menjepit jemuran di pinggir kardus.</li>
<li><strong>Dua tangan:</strong> membuka dan menutup wadah bekas selai, meronce sedotan yang dipotong pendek pada tali sepatu.</li>
<li><strong>Mata dan tangan:</strong> memasukkan koin mainan ke celah kardus, menempel stiker tepat di atas titik yang sudah digambar.</li>
<li><strong>Manipulasi:</strong> membalik kartu yang tertelungkup satu per satu, memutar tutup spidol tanpa bantuan tangan lain.</li>
</ul>
<p>Mulailah dengan sesi singkat, cukup beberapa menit, lalu tambah bila anak masih menikmati. Benda kecil selalu dipakai dengan pengawasan, terutama pada anak yang masih suka memasukkan benda ke mulut. Kumpulan aktivitas yang lebih lengkap untuk anak berkebutuhan khusus ada di <a href="latihan-motorik-halus">latihan motorik halus untuk ABK</a>.</p>

<h2 id="konsultasi">Kapan Perlu Konsultasi</h2>
<p>CDC menganjurkan orang tua segera berbicara dengan dokter anak bila anak tidak mencapai satu atau lebih milestone, kehilangan kemampuan yang sebelumnya sudah dikuasai, atau ada kekhawatiran lain. Dokter dapat merujuk ke terapis okupasi yang menilai motorik halus secara menyeluruh. Bawa catatan pengamatan dan, bila memungkinkan, video singkat anak saat makan atau bermain.</p>
<div class="info-box"><p><strong>Ingat:</strong> artikel dan tabel milestone tidak dapat dipakai untuk mendiagnosis. Keputusan tentang perlu atau tidaknya terapi ditentukan melalui pemeriksaan tenaga profesional.</p></div>
`,
    sources: [
      [CDC, 'CDC, Learn the Signs. Act Early.: Milestones (2026)'],
      [cdc('1-year'), 'CDC, Milestones by 1 Year (2026)'],
      [cdc('4-years'), 'CDC, Milestones by 4 Years (2026)'],
    ],
    related: [
      ['apa-itu-motorik-halus', 'Apa Itu Motorik Halus?', 'Penjelasan sederhana lewat rutinitas harian anak.'],
      ['motorik-halus', 'Motorik Halus: Panduan Lengkap', 'Pilar lengkap tahapan dan cara stimulasi.'],
      ['perbedaan-motorik-kasar-dan-halus', 'Perbedaan Motorik Kasar dan Halus', 'Perbandingan dimensi per dimensi.'],
    ],
  },

  // ------------------------------------------------------------------ B
  {
    slug: 'apa-itu-motorik-halus',
    title: 'Apa Itu Motorik Halus? Contoh dalam Rutinitas Harian Anak',
    h1: 'Apa Itu Motorik Halus? Penjelasan Sederhana lewat Rutinitas Harian Anak',
    breadcrumb: 'Apa Itu Motorik Halus',
    description: 'Apa itu motorik halus? Penjelasan singkat untuk orang tua, lengkap dengan contoh di waktu makan, berpakaian, mandi, dan bermain, tabel usia CDC, serta mitos yang perlu diluruskan.',
    keywords: ['apa itu motorik halus', 'motorik halus', 'contoh motorik halus sehari-hari'],
    category: 'Tumbuh Kembang',
    datePublished: '2026-09-23',
    readMin: 8,
    hero: { src: 'cpao-chef-muda-makan-makanan-orange-020.webp', alt: 'Anak bertopi koki memegang bakpao buatannya dengan jari lalu menggigitnya', w: 800, h: 1067 },
    faq: [
      ['Apa itu motorik halus dalam bahasa sederhana?', 'Motorik halus adalah keterampilan tangan dan jari untuk pekerjaan kecil yang butuh ketelitian, seperti menyendok makanan, membuka tutup botol, memakai kancing, dan memegang pensil.'],
      ['Apakah motorik halus sama dengan kemampuan menulis?', 'Tidak. Menulis hanya salah satu hasil akhir motorik halus. Sebelum menulis, anak perlu stabil saat duduk, bisa memakai dua tangan bersamaan, dan mampu memegang alat dengan ujung jari.'],
      ['Apakah bermain gawai melatih motorik halus?', 'Layar sentuh memakai jenis gerakan yang terbatas, terutama mengetuk dan menggeser. Anak tetap butuh kegiatan dengan benda nyata yang punya berat, tekstur, dan bentuk berbeda.'],
      ['Bagaimana cara orang tua membantu tanpa mengambil alih?', 'Beri waktu lebih lama, siapkan benda yang ukurannya pas dengan tangan anak, contohkan gerakannya sekali, lalu biarkan anak mencoba walaupun hasilnya belum rapi.'],
    ],
    body: `
<p><strong>Apa itu motorik halus? Singkatnya, motorik halus adalah keterampilan tangan dan jari untuk pekerjaan kecil yang butuh ketelitian.</strong> Setiap kali anak menyendok nasi, membuka tutup botol minum, memencet pasta gigi, atau memasang kancing, ia sedang memakai motorik halusnya. Keterampilan ini tumbuh sedikit demi sedikit dari pengalaman sehari-hari, bukan dari satu jenis latihan khusus.</p>
<p>Halaman ini ditulis untuk orang tua yang ingin memahami konsepnya dengan cepat lewat contoh yang terjadi di rumah setiap hari. Bila Anda mencari definisi yang lebih teknis beserta komponennya, baca <a href="motorik-halus-adalah">motorik halus adalah: pengertian dan lima komponennya</a>.</p>

<div class="toc"><h3>Daftar Isi</h3><ol>
<li><a href="#jawaban-singkat">Jawaban singkat</a></li>
<li><a href="#rutinitas">Motorik halus di lima momen harian</a></li>
<li><a href="#tabel-usia">Tabel usia: apa yang biasanya sudah bisa</a></li>
<li><a href="#mitos">Empat mitos yang perlu diluruskan</a></li>
<li><a href="#peran-orang-tua">Peran orang tua: memberi ruang mencoba</a></li>
<li><a href="#abk">Untuk anak berkebutuhan khusus</a></li>
<li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
</ol></div>

<h2 id="jawaban-singkat">Jawaban Singkat: Otot Kecil, Pekerjaan Teliti</h2>
<p>Tubuh anak punya dua jenis keterampilan gerak. <a href="motorik-kasar-adalah">Motorik kasar</a> memakai otot besar untuk berjalan, berlari, dan memanjat. Motorik halus memakai otot kecil di tangan dan jari, ditambah bantuan mata, untuk gerakan yang harus tepat. Keduanya saling terhubung: tangan akan lebih terampil bila badan dan bahu anak sudah cukup stabil.</p>
<p>Cara mudah membedakannya adalah melihat tujuan gerakan. Bila tujuannya memindahkan badan, itu motorik kasar. Bila tujuannya mengolah benda kecil dengan teliti, itu motorik halus.</p>

<h2 id="rutinitas">Motorik Halus di Lima Momen Harian</h2>
<figure class="article-inline-image"><img src="../Dokumentasi/jadwal-visual-anak-autis-rumah.webp" alt="Ilustrasi anak menunjuk kartu di papan rutinitas harian sambil didampingi orang dewasa" loading="lazy" width="1200" height="1200"><figcaption>Ilustrasi: rutinitas harian yang terstruktur memberi banyak kesempatan melatih tangan tanpa sesi khusus.</figcaption></figure>
<h3>1. Waktu makan</h3>
<p>Mengambil potongan buah dengan jari, menyendok sup, menuang air dari teko kecil, dan membuka bungkus roti. Waktu makan adalah latihan motorik halus paling rutin yang dimiliki anak, tiga kali sehari.</p>
<h3>2. Berpakaian</h3>
<p>Menarik ritsleting, membuka kancing tekan, melepas kaus kaki, lalu kelak mengancingkan kemeja dan mengikat tali sepatu. Mulailah dari melepas, karena melepas lebih mudah daripada memakai.</p>
<h3>3. Mandi dan kebersihan diri</h3>
<p>Memencet botol sabun, memeras waslap, menggosok gigi, dan menyisir rambut. Kegiatan ini juga melatih kedua tangan bekerja bersama.</p>
<h3>4. Bermain</h3>
<p>Menyusun balok, menempel stiker, meremas adonan, dan menyobek kertas. Ide permainan yang disusun per usia ada di <a href="permainan-motorik-halus">permainan motorik halus dari bahan rumah</a>.</p>
<h3>5. Belajar</h3>
<p>Mewarnai, menggunting, melipat kertas, dan menulis. Momen ini sering dianggap satu-satunya ukuran motorik halus, padahal ia berdiri di atas empat momen sebelumnya.</p>

<h2 id="tabel-usia">Tabel Usia: Apa yang Biasanya Sudah Bisa</h2>
<p>Daftar di bawah diambil dari milestone CDC, yaitu kemampuan yang dilakukan sebagian besar anak pada usia tersebut. Kolom terakhir berisi cara sederhana melibatkan anak dalam rutinitas.</p>
<div style="overflow-x:auto"><table>
<thead><tr><th>Usia</th><th>Contoh dalam rutinitas (CDC)</th><th>Cara melibatkan anak</th></tr></thead>
<tbody>
<tr><td><a href="${cdc('1-year')}" target="_blank" rel="noopener">1 tahun</a></td><td>Mengambil potongan makanan kecil dengan ibu jari dan telunjuk, minum dari gelas tanpa tutup saat dipegangi</td><td>Sajikan potongan buah lunak di piring agar anak mengambil sendiri</td></tr>
<tr><td><a href="${cdc('15-months')}" target="_blank" rel="noopener">15 bulan</a></td><td>Makan sendiri sebagian makanan dengan jari</td><td>Biarkan anak menyuap sendiri di awal makan sebelum dibantu</td></tr>
<tr><td><a href="${cdc('18-months')}" target="_blank" rel="noopener">18 bulan</a></td><td>Mencoba memakai sendok, minum dari gelas tanpa tutup walau kadang tumpah</td><td>Pakai sendok bergagang tebal dan gelas kecil yang ringan</td></tr>
<tr><td><a href="${cdc('2-years')}" target="_blank" rel="noopener">2 tahun</a></td><td>Makan dengan sendok</td><td>Sediakan makanan yang mudah disendok seperti bubur atau nasi tim</td></tr>
<tr><td><a href="${cdc('30-months')}" target="_blank" rel="noopener">30 bulan</a></td><td>Melepas sebagian pakaian sendiri, memutar tutup botol ulir atau gagang pintu</td><td>Minta anak melepas celana karet atau jaket terbuka sendiri</td></tr>
<tr><td><a href="${cdc('3-years')}" target="_blank" rel="noopener">3 tahun</a></td><td>Memakai sebagian pakaian sendiri, memakai garpu</td><td>Siapkan baju berkaret dan beri waktu ekstra di pagi hari</td></tr>
<tr><td><a href="${cdc('4-years')}" target="_blank" rel="noopener">4 tahun</a></td><td>Mengambil makanan atau menuang air sendiri dengan pengawasan, membuka sebagian kancing</td><td>Libatkan anak menuang air dari teko kecil saat makan</td></tr>
<tr><td><a href="${cdc('5-years')}" target="_blank" rel="noopener">5 tahun</a></td><td>Mengancingkan sebagian kancing</td><td>Mulai dari kancing besar di baju luar sebelum kancing seragam</td></tr>
</tbody></table></div>
<p class="source-note">Sumber: ${SRC_CDC}, halaman per usia bagian Movement/Physical Development, diakses 24 September 2026.</p>

<h2 id="mitos">Empat Mitos yang Perlu Diluruskan</h2>
<p><strong>Mitos 1: motorik halus sama dengan menulis.</strong> Menulis adalah puncaknya. Anak perlu banyak pengalaman memegang, menjepit, dan memutar benda sebelum tangannya siap mengendalikan pensil.</p>
<p><strong>Mitos 2: lembar kerja sudah cukup.</strong> Lembar menebalkan garis melatih satu jenis gerakan saja. Tangan berkembang lebih baik dengan benda nyata yang berbeda berat, ukuran, dan teksturnya.</p>
<p><strong>Mitos 3: anak yang lambat berarti malas.</strong> Anak sering menghindari tugas yang terasa berat bagi tangannya. Menghindar bisa menjadi tanda bahwa tugasnya terlalu sulit, bukan tanda malas.</p>
<p><strong>Mitos 4: bermain di layar sentuh ikut melatih.</strong> Mengetuk dan menggeser layar hanya memakai sebagian kecil gerakan tangan. Kegiatan dengan benda nyata tetap dibutuhkan.</p>

<h2 id="peran-orang-tua">Peran Orang Tua: Memberi Ruang Mencoba</h2>
<p>Hambatan terbesar latihan motorik halus di rumah biasanya adalah waktu. Pagi yang terburu-buru membuat orang tua memakaikan baju dan menyuapi karena lebih cepat. Beberapa langkah kecil bisa membantu:</p>
<ul>
<li>Pilih satu kegiatan bantu diri per hari yang sepenuhnya dikerjakan anak, misalnya melepas sepatu sepulang sekolah.</li>
<li>Bangun anak sedikit lebih awal di hari sekolah agar ada waktu untuk berpakaian sendiri.</li>
<li>Pakai peralatan berukuran anak: sendok kecil bergagang tebal, gelas ringan, teko mini.</li>
<li>Contohkan satu kali dengan pelan, lalu mundur. Bantu hanya bagian yang benar-benar belum bisa.</li>
<li>Pujilah usahanya, bukan kerapiannya.</li>
</ul>

<h2 id="abk">Untuk Anak Berkebutuhan Khusus</h2>
<p>Pada anak dengan autisme, ADHD, down syndrome, atau cerebral palsy, motorik halus bisa berkembang dengan pola dan kecepatan yang berbeda. Perlengkapan adaptif seperti pegangan sendok yang dipertebal, alas antiselip, dan gunting pegas dapat membuka akses anak ke kegiatan yang sama dengan teman sebayanya. Jadwal bergambar juga membantu anak memahami urutan langkah berpakaian atau mencuci tangan; caranya ada di <a href="cara-membuat-jadwal-visual-untuk-anak-autis">cara membuat jadwal visual untuk anak autis</a>.</p>
<p>Bila anak tidak mencapai beberapa milestone di tabel atau kehilangan kemampuan yang sudah dimiliki, CDC menganjurkan untuk segera berbicara dengan dokter anak. Penilaian oleh terapis okupasi membantu menentukan dukungan yang tepat.</p>
`,
    sources: [
      [CDC, 'CDC, Learn the Signs. Act Early.: Milestones (2026)'],
      [cdc('2-years'), 'CDC, Milestones by 2 Years (2026)'],
      [cdc('3-years'), 'CDC, Milestones by 3 Years (2026)'],
    ],
    related: [
      ['motorik-halus-adalah', 'Motorik Halus Adalah', 'Pengertian teknis dan lima komponennya.'],
      ['kegiatan-dan-stimulasi-motorik-halus', 'Kegiatan dan Stimulasi Motorik Halus', 'Rencana 4 minggu di rumah.'],
      ['contoh-motorik-kasar-dan-halus', 'Contoh Motorik Kasar dan Halus', 'Contoh per usia untuk kedua jalur.'],
    ],
  },

  // ------------------------------------------------------------------ C
  {
    slug: 'kegiatan-dan-stimulasi-motorik-halus',
    title: 'Kegiatan dan Stimulasi Motorik Halus: Rencana 4 Minggu di Rumah',
    h1: 'Kegiatan dan Stimulasi Motorik Halus: Rencana 4 Minggu di Rumah',
    breadcrumb: 'Kegiatan dan Stimulasi Motorik Halus',
    description: 'Rencana kegiatan dan stimulasi motorik halus selama 4 minggu di rumah: fokus mingguan, bahan murah, tabel kegiatan per usia berdasar milestone CDC, dan adaptasi untuk ABK.',
    keywords: ['kegiatan dan stimulasi motorik halus', 'stimulasi motorik halus', 'kegiatan motorik halus di rumah'],
    category: 'Tumbuh Kembang',
    datePublished: '2026-09-23',
    readMin: 10,
    hero: { src: 'cocopandan-lemon-gambar-009.webp', alt: 'Dua anak duduk di lantai, satu menuang isi sachet ke mangkuk hijau dan satu lagi memegang sendok', w: 800, h: 1067 },
    faq: [
      ['Berapa lama stimulasi motorik halus dilakukan setiap hari?', 'Tidak ada durasi baku. Sesi singkat beberapa menit yang dilakukan hampir setiap hari biasanya lebih mudah dipertahankan daripada satu sesi panjang, dan kegiatan bantu diri seperti makan dan berpakaian juga dihitung sebagai latihan.'],
      ['Apa beda kegiatan dan stimulasi motorik halus?', 'Kegiatan adalah aktivitasnya, misalnya meronce. Stimulasi adalah cara orang tua memilih, mengatur tingkat kesulitan, dan mengulang kegiatan itu dengan tujuan tertentu.'],
      ['Mulai usia berapa rencana 4 minggu ini cocok?', 'Rencana ini paling cocok untuk anak sekitar 2 sampai 6 tahun. Untuk usia lebih muda, pakai kolom usia 1 sampai 2 tahun di tabel sebagai acuan kegiatan.'],
      ['Kapan anak perlu terapi okupasi?', 'Bila anak tidak mencapai beberapa milestone, kehilangan kemampuan yang sudah dimiliki, atau kesulitan tangannya mengganggu kegiatan sehari-hari, konsultasikan ke dokter anak yang dapat merujuk ke terapis okupasi.'],
    ],
    body: `
<p><strong>Kegiatan dan stimulasi motorik halus paling efektif bila dilakukan singkat, rutin, dan naik tingkat perlahan, dengan satu fokus keterampilan dalam satu waktu.</strong> Halaman ini menyusunnya menjadi rencana empat minggu yang bisa langsung dijalankan di rumah dengan bahan dapur dan barang bekas. Setiap minggu punya satu fokus: kekuatan tangan, genggaman jepit, koordinasi dua tangan, lalu koordinasi mata dan tangan.</p>
<p>Rencana ini melengkapi dua artikel lain di YUKA. <a href="stimulasi-motorik-halus">Stimulasi motorik halus per usia</a> membahas tahapan dan adaptasinya, sedangkan <a href="kegiatan-motorik-halus">kegiatan motorik halus</a> membahas cara merancang satu sesi. Di sini fokusnya adalah urutan mingguan yang praktis.</p>

<div class="toc"><h3>Daftar Isi</h3><ol>
<li><a href="#prinsip">Empat prinsip stimulasi</a></li>
<li><a href="#tabel-usia">Kegiatan yang cocok per usia</a></li>
<li><a href="#rencana">Rencana 4 minggu</a></li>
<li><a href="#rutinitas">Menyisipkan stimulasi ke rutinitas</a></li>
<li><a href="#abk">Penyesuaian untuk ABK</a></li>
<li><a href="#catatan">Mencatat kemajuan</a></li>
<li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
</ol></div>

<h2 id="prinsip">Empat Prinsip Stimulasi</h2>
<ol>
<li><strong>Dari besar ke kecil.</strong> Mulai dari benda besar dan gerakan lengan, misalnya mencoret di kertas lebar yang ditempel di dinding, sebelum turun ke benda kecil dan gerakan jari.</li>
<li><strong>Stabil dulu, baru teliti.</strong> Pastikan anak duduk dengan kaki menapak dan meja setinggi siku. Posisi tubuh yang goyah membuat tangan bekerja lebih keras.</li>
<li><strong>Sebentar tapi sering.</strong> Beberapa menit setiap hari lebih bermanfaat daripada satu jam di akhir pekan. Hentikan sebelum anak bosan, supaya besok ia mau lagi.</li>
<li><strong>Naikkan satu hal saja.</strong> Bila kegiatan sudah mudah, ubah satu faktor: ukuran benda lebih kecil, jumlah lebih banyak, atau alat lebih sulit. Jangan mengubah semuanya sekaligus.</li>
</ol>

<h2 id="tabel-usia">Kegiatan yang Cocok per Usia</h2>
<p>Kolom milestone diambil dari daftar CDC, yaitu kemampuan yang dilakukan sebagian besar anak pada usia tersebut. Kolom kegiatan berisi stimulasi yang sejalan dengan kemampuan itu.</p>
<div style="overflow-x:auto"><table>
<thead><tr><th>Usia</th><th>Milestone tangan (CDC)</th><th>Kegiatan stimulasi yang sejalan</th></tr></thead>
<tbody>
<tr><td><a href="${cdc('9-months')}" target="_blank" rel="noopener">9 bulan</a></td><td>Memindahkan benda dari satu tangan ke tangan lain</td><td>Memberi mainan ke satu tangan lalu menawarkan mainan kedua</td></tr>
<tr><td><a href="${cdc('1-year')}" target="_blank" rel="noopener">1 tahun</a></td><td>Menjimpit benda kecil dengan ibu jari dan telunjuk</td><td>Mengambil potongan buah lunak, memasukkan bola ke wadah bermulut lebar</td></tr>
<tr><td><a href="${cdc('18-months')}" target="_blank" rel="noopener">18 bulan</a></td><td>Mencoret-coret, mencoba memakai sendok</td><td>Krayon tebal di kertas besar, menyendok beras ke mangkuk</td></tr>
<tr><td><a href="${cdc('30-months')}" target="_blank" rel="noopener">30 bulan</a></td><td>Memutar tutup botol ulir, membalik halaman satu per satu</td><td>Membuka tutup wadah bekas, buku bergambar berhalaman tebal</td></tr>
<tr><td><a href="${cdc('3-years')}" target="_blank" rel="noopener">3 tahun</a></td><td>Meronce benda besar seperti manik besar atau makaroni</td><td>Meronce sedotan pendek atau makaroni pada tali sepatu</td></tr>
<tr><td><a href="${cdc('4-years')}" target="_blank" rel="noopener">4 tahun</a></td><td>Memegang krayon dengan jari dan ibu jari, membuka sebagian kancing</td><td>Krayon patah pendek untuk mendorong genggaman ujung jari, papan kancing</td></tr>
<tr><td><a href="${cdc('5-years')}" target="_blank" rel="noopener">5 tahun</a></td><td>Mengancingkan sebagian kancing</td><td>Mengancingkan baju boneka atau rompi bekas, menggunting jalur lengkung</td></tr>
</tbody></table></div>
<p class="source-note">Sumber: ${SRC_CDC}, halaman per usia bagian Movement/Physical Development, diakses 24 September 2026.</p>

<h2 id="rencana">Rencana 4 Minggu</h2>
<p>Jalankan satu kegiatan inti setiap hari, lima hari dalam seminggu. Bila anak sudah lancar sebelum minggu berakhir, pakai variasi yang lebih sulit di kolom terakhir.</p>
<div style="overflow-x:auto"><table>
<thead><tr><th>Minggu</th><th>Fokus</th><th>Kegiatan inti</th><th>Bahan</th><th>Variasi lebih sulit</th></tr></thead>
<tbody>
<tr><td>1</td><td>Kekuatan tangan</td><td>Meremas dan menggulung adonan tepung, memeras spons basah, menyobek kertas koran menjadi potongan kecil</td><td>Tepung, air, garam, spons, koran bekas</td><td>Mencubit adonan menjadi bola kecil memakai ujung jari</td></tr>
<tr><td>2</td><td>Genggaman jepit</td><td>Menjepit jemuran di pinggir kardus, memindahkan pompom dengan jari lalu dengan penjepit makanan</td><td>Jepit jemuran, kardus, pompom, penjepit plastik</td><td>Memindahkan kacang merah kering dengan pinset besar (dengan pengawasan)</td></tr>
<tr><td>3</td><td>Koordinasi dua tangan</td><td>Membuka dan menutup berbagai wadah, meronce, menggunting lurus dengan gunting anak</td><td>Wadah bekas, tali sepatu, sedotan, gunting ujung tumpul</td><td>Menggunting mengikuti garis zig-zag atau lengkung</td></tr>
<tr><td>4</td><td>Mata dan tangan</td><td>Menjiplak garis di kertas yang ditempel di dinding, mewarnai bidang besar, melipat kertas menjadi dua</td><td>Kertas, selotip, krayon, spidol</td><td>Melipat kertas menjadi empat, menjiplak bentuk lingkaran dan segitiga</td></tr>
</tbody></table></div>
<p>Setelah empat minggu, ulangi siklus dengan variasi yang lebih sulit, atau pilih kegiatan dari <a href="permainan-motorik-halus">daftar permainan motorik halus</a> agar anak tidak bosan.</p>

<h2 id="rutinitas">Menyisipkan Stimulasi ke Rutinitas</h2>
<figure class="article-inline-image"><img src="../Dokumentasi/cpao-pelatihan-memasak-ibu-ibu-desa-011.webp" alt="Peserta mengolah adonan di meja dalam kegiatan memasak bersama" loading="lazy" width="1200" height="900"><figcaption>Dapur adalah tempat latihan motorik halus yang alami: menguleni, menuang, dan membentuk.</figcaption></figure>
<p>Stimulasi tidak selalu butuh waktu khusus. Beberapa tugas rumah tangga bisa diserahkan kepada anak sesuai usianya:</p>
<ul>
<li><strong>Dapur:</strong> mencuci dan memetik sayur bayam, mengupas telur rebus, menuang beras ke takaran.</li>
<li><strong>Cucian:</strong> memasang jepit jemuran pada kaus kaki, melipat saputangan dan handuk kecil.</li>
<li><strong>Merapikan:</strong> memasukkan krayon ke kotaknya, menutup kembali spidol, mengancingkan tas.</li>
<li><strong>Kebun:</strong> menyiram tanaman dengan botol semprot, memindahkan tanah dengan sekop kecil.</li>
</ul>

<h2 id="abk">Penyesuaian untuk ABK</h2>
<p>Rencana yang sama dapat dipakai anak berkebutuhan khusus dengan beberapa penyesuaian. Anak yang sensitif terhadap tekstur bisa memulai minggu pertama dengan adonan di dalam plastik klip sebelum menyentuhnya langsung. Anak dengan tonus otot rendah mungkin perlu bahan yang lebih ringan dan sesi yang lebih pendek. Anak yang sulit memusatkan perhatian terbantu dengan kartu urutan bergambar dan timer visual.</p>
<p>Bila ada kekakuan, nyeri, atau posisi tangan yang tidak biasa, diskusikan bentuk latihan dengan terapis okupasi lebih dulu. Perbedaan peran terapis okupasi dan terapis wicara dijelaskan di <a href="perbedaan-terapi-okupasi-dan-terapi-wicara">perbedaan terapi okupasi dan terapi wicara</a>.</p>

<h2 id="catatan">Mencatat Kemajuan</h2>
<p>Buat tabel sederhana di buku tulis dengan kolom tanggal, kegiatan, berapa lama anak bertahan, dan bantuan yang diberikan. Di akhir minggu, lihat apakah bantuannya berkurang atau durasinya bertambah. Kemajuan motorik halus sering kecil dan lambat, sehingga catatan membantu orang tua melihat perubahan yang tidak terasa dari hari ke hari.</p>
<div class="info-box"><p><strong>Tanda perlu konsultasi:</strong> CDC menganjurkan segera berbicara dengan dokter anak bila anak tidak mencapai satu atau lebih milestone, kehilangan kemampuan yang sudah dimiliki, atau orang tua punya kekhawatiran lain.</p></div>
`,
    sources: [
      [CDC, 'CDC, Learn the Signs. Act Early.: Milestones (2026)'],
      [cdc('30-months'), 'CDC, Milestones by 30 Months (2026)'],
      [cdc('5-years'), 'CDC, Milestones by 5 Years (2026)'],
    ],
    related: [
      ['stimulasi-motorik-halus', 'Stimulasi Motorik Halus per Usia', 'Tahapan usia dan adaptasi untuk ABK.'],
      ['latihan-motorik-halus', 'Latihan Motorik Halus untuk ABK', 'Lebih dari 25 aktivitas terapi di rumah.'],
      ['permainan-motorik-halus', 'Permainan Motorik Halus', '20 ide permainan dari bahan rumah.'],
    ],
  },

  // ------------------------------------------------------------------ D
  {
    slug: 'permainan-motorik-halus',
    title: 'Permainan Motorik Halus: 20 Ide dari Bahan Rumah Sesuai Usia',
    h1: 'Permainan Motorik Halus: 20 Ide dari Bahan Rumah Sesuai Usia',
    breadcrumb: 'Permainan Motorik Halus',
    description: '20 permainan motorik halus dari bahan rumah, dikelompokkan per usia 1 sampai 6 tahun, lengkap dengan keterampilan yang dilatih, tabel milestone CDC, dan catatan keamanan.',
    keywords: ['permainan motorik halus', 'permainan motorik halus anak', 'permainan motorik halus di rumah'],
    category: 'Tumbuh Kembang',
    datePublished: '2026-09-23',
    readMin: 10,
    hero: { src: 'cpao-anak-anak-kelas-memasak-outdoor-004.webp', alt: 'Anak bertopi koki duduk di depan alas silikon biru berisi bola adonan saat kelas memasak di pendopo', w: 800, h: 1067 },
    faq: [
      ['Permainan motorik halus apa yang cocok untuk anak 2 tahun?', 'Anak 2 tahun biasanya menikmati permainan dengan benda besar seperti meremas adonan, menyobek kertas, menumpuk gelas plastik, dan memasukkan tutup botol besar ke celah kardus.'],
      ['Apakah permainan motorik halus harus memakai mainan edukatif?', 'Tidak. Banyak permainan motorik halus bisa dibuat dari bahan rumah seperti kardus, jepit jemuran, sedotan, tepung, dan wadah bekas.'],
      ['Bagaimana menjaga keamanan saat bermain dengan benda kecil?', 'Selalu dampingi anak, simpan benda kecil setelah dipakai, dan hindari benda kecil untuk anak yang masih suka memasukkan benda ke mulut.'],
      ['Berapa permainan yang sebaiknya dicoba dalam sehari?', 'Satu atau dua permainan sudah cukup. Mengulang permainan yang sama beberapa hari membantu anak menguasainya sebelum berpindah ke tantangan baru.'],
    ],
    body: `
<p><strong>Permainan motorik halus adalah permainan yang membuat anak memakai tangan dan jarinya untuk meremas, menjepit, memutar, meronce, dan menggunting.</strong> Kabar baiknya, hampir semua permainan ini bisa dibuat dari bahan rumah: kardus bekas, jepit jemuran, sedotan, tepung, dan wadah plastik. Berikut 20 ide yang dikelompokkan per usia, lengkap dengan keterampilan yang dilatih.</p>
<p>Permainan di sini bersifat bebas dan menyenangkan. Bila Anda membutuhkan program terstruktur dengan fokus mingguan, gunakan <a href="kegiatan-dan-stimulasi-motorik-halus">rencana kegiatan dan stimulasi motorik halus 4 minggu</a>.</p>

<div class="toc"><h3>Daftar Isi</h3><ol>
<li><a href="#memilih">Cara memilih permainan yang pas</a></li>
<li><a href="#tabel-usia">Tabel milestone dan permainan per usia</a></li>
<li><a href="#usia-1-2">Usia 1 sampai 2 tahun: 5 permainan</a></li>
<li><a href="#usia-2-3">Usia 2 sampai 3 tahun: 5 permainan</a></li>
<li><a href="#usia-3-4">Usia 3 sampai 4 tahun: 5 permainan</a></li>
<li><a href="#usia-4-6">Usia 4 sampai 6 tahun: 5 permainan</a></li>
<li><a href="#keamanan">Catatan keamanan</a></li>
<li><a href="#abk">Adaptasi untuk ABK</a></li>
<li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
</ol></div>

<h2 id="memilih">Cara Memilih Permainan yang Pas</h2>
<p>Permainan yang pas terasa sedikit menantang tetapi masih bisa diselesaikan. Bila anak langsung berhasil tanpa usaha, naikkan tingkatnya. Bila anak cepat frustrasi dan menolak, turunkan: pakai benda lebih besar, kurangi jumlahnya, atau kerjakan bersama. Minat juga penting. Anak yang suka mobil akan lebih betah menjepit "penumpang" ke badan mobil kardus daripada menjepit jemuran di kardus polos.</p>

<h2 id="tabel-usia">Tabel Milestone dan Permainan per Usia</h2>
<p>Milestone di tabel ini berasal dari daftar CDC, yaitu kemampuan yang dilakukan sebagian besar anak pada usia tersebut. Permainan di kolom ketiga dipilih karena melatih kemampuan yang sedang berkembang.</p>
<div style="overflow-x:auto"><table>
<thead><tr><th>Usia</th><th>Milestone tangan (CDC)</th><th>Permainan yang sejalan (nomor di bawah)</th></tr></thead>
<tbody>
<tr><td><a href="${cdc('1-year')}" target="_blank" rel="noopener">1 tahun</a></td><td>Menjimpit benda kecil dengan ibu jari dan telunjuk</td><td>Kotak isi dan keluarkan (1), tarik kain (2)</td></tr>
<tr><td><a href="${cdc('18-months')}" target="_blank" rel="noopener">18 bulan</a></td><td>Mencoret-coret, makan sendiri dengan jari</td><td>Celah tutup botol (3), menumpuk gelas (5)</td></tr>
<tr><td><a href="${cdc('30-months')}" target="_blank" rel="noopener">30 bulan</a></td><td>Memutar tutup botol ulir, membalik halaman satu per satu</td><td>Buka tutup wadah (8), tempel stiker (9)</td></tr>
<tr><td><a href="${cdc('3-years')}" target="_blank" rel="noopener">3 tahun</a></td><td>Meronce benda besar seperti manik besar atau makaroni</td><td>Meronce sedotan (10), kartu jahit (15)</td></tr>
<tr><td><a href="${cdc('4-years')}" target="_blank" rel="noopener">4 tahun</a></td><td>Menuang air dengan pengawasan, memegang krayon dengan jari dan ibu jari</td><td>Menuang air (12), melukis cotton bud (13)</td></tr>
<tr><td><a href="${cdc('5-years')}" target="_blank" rel="noopener">5 tahun</a></td><td>Mengancingkan sebagian kancing</td><td>Menggunting jalur (16), papan karet (19)</td></tr>
</tbody></table></div>
<p class="source-note">Sumber: ${SRC_CDC}, halaman per usia bagian Movement/Physical Development, diakses 24 September 2026.</p>

<h2 id="usia-1-2">Usia 1 sampai 2 Tahun: 5 Permainan</h2>
<ol>
<li><strong>Kotak isi dan keluarkan.</strong> Wadah bermulut lebar berisi bola kain atau balok besar. Anak mengeluarkan semuanya lalu memasukkannya kembali. Melatih genggaman dan melepas benda dengan sengaja.</li>
<li><strong>Tarik kain dari kotak tisu.</strong> Isi kotak tisu bekas dengan beberapa saputangan yang disambung. Melatih jimpitan dan kekuatan tarikan.</li>
<li><strong>Celah tutup botol.</strong> Buat celah di tutup wadah es krim, lalu ajak anak memasukkan tutup botol besar. Melatih arah tangan dan koordinasi mata.</li>
<li><strong>Sobek kertas koran.</strong> Sobek dari pinggir kertas yang sudah diberi sobekan awal. Melatih dua tangan bergerak berlawanan arah.</li>
<li><strong>Menumpuk gelas plastik.</strong> Tumpuk tiga sampai lima gelas, lalu robohkan bersama. Melatih ketepatan meletakkan dan melepas.</li>
</ol>

<h2 id="usia-2-3">Usia 2 sampai 3 Tahun: 5 Permainan</h2>
<figure class="article-inline-image"><img src="../Dokumentasi/cpao-anak-kelas-memasak-tradisional-044.webp" alt="Anak laki-laki bertopi koki menekan alas silikon biru dengan telapak dan jari saat kelas memasak" loading="lazy" width="800" height="1067"><figcaption>Menekan, menguleni, dan menggulung adonan termasuk permainan motorik halus yang paling disukai anak.</figcaption></figure>
<ol start="6">
<li><strong>Adonan tepung.</strong> Campur tepung, garam, dan air hingga kalis. Anak meremas, menggulung, dan menekan cetakan kue. Melatih kekuatan jari dan telapak.</li>
<li><strong>Pindah pompom dengan jari.</strong> Pindahkan pompom besar dari satu mangkuk ke cetakan es batu. Melatih jimpitan ibu jari dan telunjuk.</li>
<li><strong>Tebak isi pouch.</strong> Masukkan mainan kecil ke dompet beritsleting besar, lalu minta anak membuka dan menebak isinya. Melatih memegang dengan satu tangan dan menarik dengan tangan lain.</li>
<li><strong>Buka tutup wadah.</strong> Kumpulkan wadah bekas dengan tutup ulir berbagai ukuran. Anak mencocokkan tutup lalu memutarnya. Melatih putaran pergelangan.</li>
<li><strong>Tempel stiker di titik.</strong> Gambar titik-titik di kertas, lalu anak menempelkan stiker tepat di atasnya. Melatih mengelupas stiker dan ketepatan.</li>
<li><strong>Meronce sedotan.</strong> Potong sedotan besar sepanjang ruas jari, lalu ronce ke tali sepatu. Melatih kerja dua tangan.</li>
</ol>

<h2 id="usia-3-4">Usia 3 sampai 4 Tahun: 5 Permainan</h2>
<ol start="11">
<li><strong>Kereta jepit jemuran.</strong> Jepit jemuran menjadi "gerbong" di pinggir kardus panjang. Melatih kekuatan jimpitan.</li>
<li><strong>Menuang air antar gelas.</strong> Di atas nampan, anak menuang air dari gelas plastik ke gelas lain. Melatih kontrol pergelangan dan kesabaran.</li>
<li><strong>Melukis dengan cotton bud.</strong> Celup cotton bud ke cat air, lalu buat titik-titik mengikuti pola. Melatih genggaman ujung jari.</li>
<li><strong>Pindah dengan penjepit.</strong> Pindahkan pompom atau potongan spons memakai penjepit makanan plastik. Melatih membuka dan menutup tangan secara terkendali.</li>
<li><strong>Kartu jahit.</strong> Lubangi kardus bergambar dengan pelubang kertas, lalu anak menyusupkan tali sepatu. Melatih koordinasi mata dan tangan.</li>
</ol>

<h2 id="usia-4-6">Usia 4 sampai 6 Tahun: 5 Permainan</h2>
<ol start="16">
<li><strong>Menggunting jalur.</strong> Mulai dari garis lurus tebal, lalu zig-zag, kemudian lengkung. Pakai gunting anak berujung tumpul.</li>
<li><strong>Origami sederhana.</strong> Lipat kertas menjadi topi atau kapal. Melatih ketepatan melipat dan menekan lipatan.</li>
<li><strong>Salin bangunan balok kecil.</strong> Orang tua membuat bangunan sederhana, anak menirunya. Melatih ketelitian dan perencanaan gerak.</li>
<li><strong>Papan karet.</strong> Tancapkan paku payung di papan gabus membentuk kisi, lalu anak membuat bentuk dengan karet gelang. Melatih kekuatan jari dan konsep bentuk.</li>
<li><strong>Huruf dari adonan.</strong> Gulung adonan menjadi "cacing" lalu bentuk huruf awal nama anak. Menjembatani permainan tangan ke kegiatan pra-menulis.</li>
</ol>

<h2 id="keamanan">Catatan Keamanan</h2>
<ul>
<li>Dampingi anak selama bermain dengan benda kecil seperti pompom, manik, kacang, dan paku payung.</li>
<li>Untuk anak yang masih suka memasukkan benda ke mulut, pakai benda yang besar saja dan simpan benda kecil di tempat tertutup.</li>
<li>Pilih gunting anak berujung tumpul dan cat yang aman untuk anak.</li>
<li>Bereskan bersama setelah bermain. Memasukkan kembali benda ke wadahnya juga latihan motorik halus.</li>
</ul>

<h2 id="abk">Adaptasi untuk ABK</h2>
<p>Hampir semua permainan di atas dapat disesuaikan. Perbesar ukuran benda, kurangi jumlahnya, pakai alas antiselip agar wadah tidak bergeser, dan berikan contoh visual langkah demi langkah. Anak yang mudah kewalahan oleh tekstur bisa bermain adonan di dalam kantong plastik lebih dulu. Untuk rekomendasi yang lebih spesifik sesuai kondisi anak, lihat <a href="latihan-motorik-halus">latihan motorik halus untuk ABK</a> atau konsultasikan dengan terapis okupasi.</p>
<p>Bila anak tidak mencapai beberapa milestone di tabel atau kehilangan kemampuan yang sudah dimiliki, CDC menganjurkan untuk segera berbicara dengan dokter anak.</p>
`,
    sources: [
      [CDC, 'CDC, Learn the Signs. Act Early.: Milestones (2026)'],
      [cdc('18-months'), 'CDC, Milestones by 18 Months (2026)'],
      [cdc('3-years'), 'CDC, Milestones by 3 Years (2026)'],
    ],
    related: [
      ['permainan-motorik-kasar', 'Permainan Motorik Kasar', 'Ide aman dan bertahap untuk otot besar.'],
      ['kegiatan-dan-stimulasi-motorik-halus', 'Kegiatan dan Stimulasi Motorik Halus', 'Rencana 4 minggu di rumah.'],
      ['apa-itu-motorik-halus', 'Apa Itu Motorik Halus?', 'Contoh di rutinitas harian anak.'],
    ],
  },
];

module.exports = { articles };

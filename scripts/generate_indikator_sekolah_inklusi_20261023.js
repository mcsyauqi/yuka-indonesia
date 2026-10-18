'use strict';
// Generator artikel "indikator keberhasilan sekolah inklusi" (cycle #80 bagian B, antrean 2026-10-23).
// Keyword dari Google Sheet Keyword Data YUKA (tab "Keyword Data", baris ditambahkan 2026-10-19 dari
// sub_query baris "pendidikan inklusi adalah"). Fakta dibaca dari PDF resmi Permendikbudristek 48/2023
// (Pasal 2, 5, 8, 9, 12, 16, 25, Lampiran II) dan dari Index for Inclusion (Booth dan Ainscow, CSIE 2002,
// salinan EENET): tiga dimensi, enam bagian, lima fase.
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');
const ROOT = path.resolve(__dirname, '..');
const slug = 'indikator-keberhasilan-sekolah-inklusi';
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const heroFile = 'Dokumentasi/yuka-indikator-sekolah-inklusi-hero-20261023.webp';
const IMG = 'assets/images/artikel';

const diagrams = {
  [`${IMG}/${slug}-dimensi.svg`]: svg.cards('Tiga dimensi sekolah inklusi', 'Kerangka Index for Inclusion (Booth dan Ainscow, CSIE 2002)', [
    { h: 'Budaya inklusif', color: '#2B3A67', items: ['Membangun komunitas sekolah', 'Menanamkan nilai inklusif bersama', 'Semua warga sekolah merasa dihargai', 'Menjadi fondasi dua dimensi lain'] },
    { h: 'Kebijakan inklusif', color: '#00838F', items: ['Sekolah untuk semua anak', 'Dukungan untuk keberagaman diatur', 'Penerimaan murid tanpa menyaring', 'Strategi perubahan tertulis jelas'] },
    { h: 'Praktik inklusif', color: '#7A5A06', items: ['Pembelajaran yang dirancang untuk semua', 'Murid aktif terlibat', 'Sumber daya guru, murid, dan orang tua', 'Dikerahkan untuk belajar bersama'] },
  ]),
  [`${IMG}/${slug}-bukti.svg`]: svg.grid('Indikator dan bukti yang bisa dicek orang tua', 'Contoh turunan dari Permendikbudristek 48/2023 dan Index for Inclusion', ['Area', 'Indikator', 'Bukti yang bisa diminta'], [
    ['Asesmen', 'Akomodasi berdasar asesmen fungsional', 'Ringkasan hasil asesmen dan rekomendasi'],
    ['Perencanaan', 'Ada rencana pembelajaran individual', 'Dokumen PPI dengan target terukur'],
    ['Guru', 'Guru mendapat pelatihan pendidikan khusus', 'Jadwal pelatihan, pendampingan GPK'],
    ['Partisipasi', 'Anak ikut kegiatan kelas dan sekolah', 'Jadwal, foto kegiatan, catatan guru'],
    ['Kemajuan', 'Target individual dipantau berkala', 'Laporan deskriptif dan grafik capaian'],
  ], [230, 440, 434]),
  [`${IMG}/${slug}-fase.svg`]: svg.flow('Lima fase meninjau sekolah inklusi', 'Siklus perbaikan menurut Index for Inclusion', [
    { h: 'Memulai', d: 'Bentuk tim peninjau yang melibatkan guru, orang tua, dan murid.' },
    { h: 'Mencari tahu', d: 'Kumpulkan pandangan warga sekolah memakai indikator dan pertanyaan.' },
    { h: 'Menyusun rencana', d: 'Pilih prioritas dan masukkan ke rencana pengembangan sekolah.' },
    { h: 'Menjalankan', d: 'Terapkan prioritas dan catat kemajuannya secara berkala.' },
    { h: 'Meninjau ulang', d: 'Nilai hasil dan proses, lalu mulai siklus berikutnya.' },
  ]),
};

const fig = (file, alt, caption, kredit) => {
  const { w, h } = imageSize(path.join(ROOT, file));
  return `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${kredit}</span></figcaption></figure>`;
};
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;

const faq = [
  { q: 'Apa indikator utama keberhasilan sekolah inklusi?', a: 'Indikator utamanya bukan sekadar jumlah anak berkebutuhan khusus yang diterima, tetapi apakah setiap anak hadir, ikut serta, dan berkembang. Kerangka Index for Inclusion membaginya ke tiga dimensi: budaya inklusif, kebijakan inklusif, dan praktik inklusif. Di Indonesia, Permendikbudristek 48/2023 menambahkan ukuran layanan seperti akomodasi yang layak berdasarkan asesmen fungsional.' },
  { q: 'Siapa yang menilai keberhasilan sekolah inklusi?', a: 'Sekolah menilai dirinya sendiri bersama guru, murid, dan orang tua. Pemerintah juga mengawasi. Pasal 25 Permendikbudristek 48/2023 menyebut menteri, gubernur, bupati atau wali kota, dan komisi nasional disabilitas melakukan pemantauan dan evaluasi penyediaan akomodasi yang layak paling sedikit satu kali dalam satu tahun.' },
  { q: 'Apakah sekolah inklusi wajib punya guru pendidikan khusus?', a: 'Permendikbudristek 48/2023 menyebut pendidik untuk akomodasi yang layak terdiri atas guru kelas atau guru mata pelajaran dan/atau guru pendidikan khusus. Guru pendidikan khusus ditugaskan pada Unit Layanan Disabilitas dan dapat melayani lebih dari satu sekolah. Jadi tanyakan bagaimana sekolah mendapat dukungan guru pendidikan khusus, bukan hanya apakah ada GPK tetap.' },
  { q: 'Bagaimana orang tua bisa mengecek sekolah inklusi sebelum mendaftar?', a: 'Minta penjelasan tentang alur asesmen, contoh rencana pembelajaran individual yang sudah dianonimkan, cara guru menyesuaikan tugas dan penilaian, serta bentuk laporan kemajuan. Amati juga suasana kelas dan istirahat. Sekolah yang benar-benar inklusif biasanya terbuka menjawab dan mau mengajak orang tua berdiskusi.' },
  { q: 'Apa itu Unit Layanan Disabilitas di bidang pendidikan?', a: 'Unit Layanan Disabilitas adalah bagian dari institusi yang menyediakan layanan dan fasilitas bagi penyandang disabilitas. Untuk PAUD formal, pendidikan dasar, dan menengah, pembentukannya difasilitasi pemerintah daerah melalui dinas pendidikan. Tugasnya antara lain analisis kebutuhan, rekomendasi, pelatihan guru, pendampingan, serta pengawasan, evaluasi, dan pelaporan.' },
  { q: 'Apakah nilai rapor tinggi menandakan sekolah inklusi berhasil?', a: 'Belum tentu. Nilai hanya satu bagian. Untuk anak berkebutuhan khusus, keberhasilan lebih tepat diukur dari kemajuan terhadap target individualnya, partisipasi dalam kegiatan bersama, relasi dengan teman, dan rasa aman di sekolah. Lampiran II Permendikbudristek 48/2023 bahkan memberi ruang laporan capaian dalam bentuk deskriptif dan angka.' },
  { q: 'Apa tanda sekolah hanya inklusif di atas kertas?', a: 'Beberapa tandanya: anak berkebutuhan khusus lebih sering dikeluarkan dari kelas, orang tua diminta selalu menunggu atau membayar pendamping sendiri tanpa diskusi, tidak ada rencana individual, dan laporan kemajuan hanya berisi nilai tanpa penjelasan. Bila menemukan tanda ini, ajak sekolah berdialog dan minta rencana perbaikan tertulis.' },
];

const sections = [
  ['arti', 'Arti keberhasilan dalam sekolah inklusi'],
  ['aturan', 'Acuan aturan di Indonesia'],
  ['dimensi', 'Tiga dimensi: budaya, kebijakan, praktik'],
  ['indikator', 'Daftar indikator yang bisa diukur'],
  ['layanan', 'Indikator layanan bagi anak berkebutuhan khusus'],
  ['hasil', 'Indikator hasil pada diri anak'],
  ['meninjau', 'Cara sekolah dan orang tua meninjau'],
  ['tanda', 'Tanda sekolah belum benar-benar inklusif'],
  ['faq', 'Pertanyaan Umum tentang Indikator Sekolah Inklusi'],
];

const bodyHtml = `
<div class="jawaban-singkat"><p><strong>Indikator keberhasilan sekolah inklusi</strong> adalah tanda yang bisa diamati bahwa setiap anak, termasuk anak berkebutuhan khusus, hadir, ikut serta, dan berkembang di sekolah. Kerangka yang banyak dipakai membaginya ke tiga dimensi: budaya, kebijakan, dan praktik inklusif. Di Indonesia, ukuran ini dilengkapi kewajiban akomodasi yang layak berdasarkan asesmen fungsional menurut Permendikbudristek 48/2023.</p></div>
<p>Banyak sekolah sudah menyebut dirinya sekolah inklusi. Namun label saja tidak menjamin pengalaman anak di dalamnya. Orang tua, guru, dan pengelola sekolah membutuhkan ukuran yang jelas agar bisa melihat apa yang sudah berjalan dan apa yang perlu diperbaiki. Artikel ini merangkum indikator yang bisa dipakai, sumber aturannya, dan cara memeriksanya dalam keseharian sekolah.</p>
<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>

<h2 id="arti">Arti keberhasilan dalam sekolah inklusi</h2>
<p>Keberhasilan sekolah inklusi sering diukur dari satu angka, yaitu berapa banyak anak berkebutuhan khusus yang diterima. Angka itu penting, tetapi hanya menjawab soal kehadiran. Anak bisa terdaftar di kelas reguler namun sebagian besar waktunya duduk terpisah, tidak diajak bicara, atau tidak pernah mendapat tugas yang sesuai kemampuannya. Dalam keadaan seperti itu, sekolah belum bisa disebut berhasil.</p>
<p>Index for Inclusion, panduan yang disusun Tony Booth dan Mel Ainscow dan diterbitkan Centre for Studies on Inclusive Education pada 2002, memakai rumusan yang lebih utuh. Inklusi dipahami sebagai upaya meningkatkan belajar dan partisipasi semua murid, sekaligus mengurangi hambatan yang membuat sebagian murid tersisih. Fokusnya bukan hanya pada anak berkebutuhan khusus, tetapi pada cara sekolah merespons keberagaman seluruh muridnya.</p>
<p>Dari rumusan itu, keberhasilan bisa dibaca dalam tiga lapis sederhana. Lapis pertama adalah kehadiran: anak diterima dan datang ke sekolah. Lapis kedua adalah partisipasi: anak ikut belajar dan bermain bersama teman. Lapis ketiga adalah perkembangan: anak menunjukkan kemajuan yang berarti menurut targetnya sendiri. Indikator yang baik selalu menyentuh ketiga lapis ini. Pengertian dasar pendidikan inklusi dibahas di artikel <a href="/artikel/pendidikan-inklusi">pendidikan inklusi adalah</a>.</p>

<h2 id="aturan">Acuan aturan di Indonesia</h2>
<p>Acuan yang paling rinci saat ini adalah <a href="https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023" target="_blank" rel="noopener">Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</a>. Pasal 2 menyebut tujuannya: memberikan kesamaan kesempatan memperoleh layanan pendidikan, memberikan akses dan layanan pendidikan yang bermutu, dan mewujudkan penyelenggaraan pendidikan yang saling menghargai. Ketiga tujuan ini sudah bisa dijadikan arah indikator.</p>
<p>Pasal 12 mengatur cara akomodasi diberikan. Bentuk akomodasi yang layak diberikan berdasarkan hasil asesmen fungsional yang dilaksanakan satuan pendidikan dan difasilitasi Unit Layanan Disabilitas. Asesmen ini bertujuan memperoleh informasi tentang kondisi, hambatan, dan kebutuhan anak. Pemenuhannya dilakukan melalui konsultasi yang melibatkan anak, orang tua atau wali, dan Unit Layanan Disabilitas. Artinya, keterlibatan orang tua juga bagian dari ukuran keberhasilan.</p>
<p>Peraturan ini juga mengatur pengawasan. Pasal 25 menyebut menteri, gubernur, bupati atau wali kota, dan komisi nasional disabilitas melakukan pemantauan dan evaluasi terhadap satuan pendidikan dalam menyediakan akomodasi yang layak, paling sedikit satu kali dalam satu tahun. Selain itu, Pasal 5 ayat (3) meminta sekolah yang sudah menerima peserta didik penyandang disabilitas melaporkan datanya melalui sistem pendataan kementerian.</p>
<p>Bagi orang tua, aturan ini memberi bahasa yang sama saat berdiskusi dengan sekolah. Hak anak secara lebih luas dirangkum di artikel <a href="/artikel/apa-saja-hak-anak-berkebutuhan-khusus">apa saja hak anak berkebutuhan khusus</a>, sedangkan perbedaan layanan sekolah inklusi dan SLB dibahas di <a href="/artikel/apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a>.</p>

<h2 id="dimensi">Tiga dimensi: budaya, kebijakan, praktik</h2>
<p>Index for Inclusion membagi peninjauan sekolah ke tiga dimensi yang saling terhubung. Dimensi pertama adalah menciptakan budaya inklusif, yang terdiri atas membangun komunitas dan menanamkan nilai inklusif. Dimensi kedua adalah menghasilkan kebijakan inklusif, yaitu mengembangkan sekolah untuk semua dan mengatur dukungan bagi keberagaman. Dimensi ketiga adalah mengembangkan praktik inklusif, yaitu mengatur pembelajaran dan mengerahkan sumber daya.</p>
<p>Panduan itu sengaja menempatkan budaya sebagai dasar. Alasannya, nilai bersama dan hubungan yang kolaboratif membuat perubahan kebijakan dan praktik bisa bertahan, termasuk saat guru dan murid berganti. Sekolah dengan kebijakan bagus tetapi budaya yang menolak perbedaan biasanya kesulitan menjalankan kebijakannya di kelas.</p>
<p>Setiap dimensi dipecah menjadi dua bagian, dan setiap bagian berisi lima sampai sebelas indikator. Indikator itu ditulis sebagai pernyataan cita-cita, misalnya bahwa setiap orang merasa disambut, yang lalu dibandingkan dengan keadaan sekolah saat ini untuk menentukan prioritas perbaikan. Karena bentuknya pernyataan, indikator ini mudah diubah menjadi pertanyaan survei untuk guru, murid, dan orang tua.</p>
${diag(`${IMG}/${slug}-dimensi.svg`, 'Diagram tiga kartu dimensi sekolah inklusi: budaya inklusif, kebijakan inklusif, dan praktik inklusif beserta isinya', 'Tiga dimensi peninjauan sekolah inklusi menurut Index for Inclusion. Budaya menjadi fondasi bagi kebijakan dan praktik.')}

<h2 id="indikator">Daftar indikator yang bisa diukur</h2>
<p>Indikator yang baik harus bisa dibuktikan, bukan sekadar terasa. Tabel berikut menurunkan tiga dimensi tadi menjadi indikator yang lebih konkret, lengkap dengan contoh bukti yang bisa dilihat. Daftar ini bukan instrumen resmi pemerintah. Gunakan sebagai bahan diskusi, lalu sesuaikan dengan jenjang dan kondisi sekolah.</p>
<table><thead><tr><th>Dimensi</th><th>Contoh indikator</th><th>Contoh bukti</th></tr></thead><tbody>
<tr><td>Budaya</td><td>Anak berkebutuhan khusus disambut dan punya teman di kelas</td><td>Pengamatan saat istirahat, cerita anak, catatan wali kelas</td></tr>
<tr><td>Budaya</td><td>Guru dan orang tua saling percaya dan rutin berkomunikasi</td><td>Buku penghubung, jadwal pertemuan, respons pesan</td></tr>
<tr><td>Kebijakan</td><td>Penerimaan murid tidak menyaring anak karena disabilitasnya</td><td>Aturan penerimaan tertulis, data murid yang diterima</td></tr>
<tr><td>Kebijakan</td><td>Dukungan bagi keberagaman diatur dalam satu kerangka</td><td>Peran GPK, pendamping, dan wali kelas yang tertulis</td></tr>
<tr><td>Praktik</td><td>Pembelajaran dirancang agar semua murid bisa ikut</td><td>Modul ajar dengan variasi tugas dan media</td></tr>
<tr><td>Praktik</td><td>Penilaian disesuaikan dengan kebutuhan anak</td><td>Bentuk soal, waktu tambahan, laporan deskriptif</td></tr>
</tbody></table>
<p>Sumber kerangka: Index for Inclusion (Booth dan Ainscow, 2002) dan Lampiran II Permendikbudristek 48/2023. Perhatikan bahwa sebagian bukti bersifat kualitatif, seperti cerita anak atau pengamatan saat istirahat. Bukti seperti ini sama sahnya dengan angka, asalkan dicatat secara rutin dan jujur.</p>
<p>Indikator praktik paling sering terlihat dalam pengelolaan kelas. Contoh penerapannya bisa dibaca di artikel <a href="/artikel/classroom-management-kelas-inklusi">classroom management kelas inklusi</a>, <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching dalam kelas inklusi</a>, dan <a href="/artikel/peer-tutoring-di-kelas-inklusi">peer tutoring di kelas inklusi</a>.</p>
${diag(`${IMG}/${slug}-bukti.svg`, 'Tabel visual lima area indikator sekolah inklusi: asesmen, perencanaan, guru, partisipasi, dan kemajuan, beserta bukti yang bisa diminta', 'Lima area indikator dan bukti yang bisa diminta orang tua saat berdiskusi dengan sekolah.')}

<h2 id="layanan">Indikator layanan bagi anak berkebutuhan khusus</h2>
<p>Selain tiga dimensi umum, ada indikator layanan yang khusus menyangkut anak berkebutuhan khusus. Yang pertama adalah asesmen. Sekolah yang berhasil tidak menebak kebutuhan anak, tetapi melakukan asesmen fungsional dan memakai hasilnya untuk menentukan akomodasi, sesuai Pasal 12 Permendikbudristek 48/2023. Penjelasan tentang jenis dan proses asesmen ada di artikel <a href="/artikel/asesmen-abk">asesmen ABK</a> dan <a href="/artikel/asesmen-abk-sebelum-masuk-sekolah">asesmen ABK sebelum masuk sekolah</a>.</p>
<p>Indikator kedua adalah perencanaan individual. Hasil asesmen seharusnya berlanjut menjadi rencana tertulis berisi kemampuan anak saat ini, target, cara mengajar, dan cara menilai. Dokumen ini dikenal sebagai <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>. Sekolah yang punya rencana seperti ini lebih mudah menunjukkan kemajuan anak secara terukur.</p>
<p>Indikator ketiga adalah kesiapan guru. Pasal 8 dan 9 peraturan yang sama menyebut pendidik untuk akomodasi terdiri atas guru kelas atau mata pelajaran dan guru pendidikan khusus. Guru reguler bisa mendapat pelatihan modifikasi kurikulum dan komunikasi dengan peserta didik penyandang disabilitas. Tanyakan pelatihan apa yang sudah diikuti guru, dan siapa yang mendampingi mereka. Peran guru pendamping dijelaskan di artikel <a href="/artikel/gpk-adalah">GPK adalah</a> dan <a href="/artikel/shadow-teacher-adalah">shadow teacher adalah</a>.</p>
<p>Indikator keempat adalah dukungan Unit Layanan Disabilitas. Menurut Pasal 16, unit ini bertugas antara lain menyiapkan analisis kebutuhan, memberikan rekomendasi, melatih guru, mendampingi, serta melakukan pengawasan, evaluasi, dan pelaporan. Unit ini juga menyediakan media pembelajaran, alat bantu, dan layanan konsultasi. Sekolah yang tahu cara mengakses unit ini di daerahnya punya nilai tambah yang nyata.</p>

<h2 id="hasil">Indikator hasil pada diri anak</h2>
<p>Pada akhirnya, ukuran yang paling penting terlihat pada anak sendiri. Indikator hasil tidak harus rumit. Mulailah dari pertanyaan sederhana: apakah anak senang berangkat sekolah, apakah ia punya teman yang ia sebut namanya, apakah ia ikut kegiatan bersama, dan apakah ada kemampuan baru yang bisa ia lakukan dibanding semester lalu.</p>
<ul>
<li><strong>Partisipasi.</strong> Anak berada di kelas bersama teman pada sebagian besar waktu belajar, dan ikut kegiatan di luar kelas seperti upacara, olahraga, atau pentas.</li>
<li><strong>Kemajuan belajar.</strong> Target pada rencana individual tercapai sebagian atau seluruhnya, dan target baru disusun berdasarkan hasil itu.</li>
<li><strong>Relasi sosial.</strong> Anak punya interaksi yang hangat dengan teman dan guru, dan perundungan ditangani dengan serius.</li>
<li><strong>Kemandirian.</strong> Anak makin mampu mengurus diri dan mengikuti rutinitas sekolah dengan bantuan yang makin sedikit.</li>
<li><strong>Kesejahteraan.</strong> Anak merasa aman, jarang cemas berlebihan saat berangkat, dan punya tempat untuk menenangkan diri bila perlu.</li>
</ul>
<p>Lampiran II Permendikbudristek 48/2023 juga memuat contoh akomodasi yang memengaruhi hasil, misalnya ruang relaksasi, fleksibilitas waktu penyelesaian tugas dan evaluasi, serta laporan capaian dalam bentuk deskriptif dan angka bagi peserta didik dengan hambatan intelektual. Ketersediaan akomodasi seperti ini membuat hasil anak lebih adil untuk dinilai.</p>
${fig(`${IMG}/commons-tari-kursi-roda-senang-hati-ubud.webp`, 'Penari berkursi roda dan penari berdiri berkostum Bali tampil bersama di panggung berlatar gapura di Ubud', 'Anggota Yayasan Senang Hati tampil dalam pertunjukan tari dan drama di Ubud, Bali, termasuk penari berkursi roda. Ikut tampil di kegiatan bersama adalah salah satu tanda partisipasi yang bisa diamati.', 'Foto: <a href="https://commons.wikimedia.org/wiki/File:Senang_Hati-Diah_Larasati-Wheelchair_Dance.jpeg" target="_blank" rel="nofollow noopener">Jack Merridew</a> / Wikimedia Commons, domain publik')}

<h2 id="meninjau">Cara sekolah dan orang tua meninjau</h2>
<p>Index for Inclusion menawarkan proses peninjauan lima fase yang bisa dipakai berulang. Prosesnya dimulai dengan membentuk tim, mengumpulkan pandangan warga sekolah, menyusun rencana pengembangan yang inklusif, menjalankan prioritas, lalu meninjau ulang proses itu. Siklus ini cocok dijalankan setiap tahun ajaran, sejalan dengan pemantauan tahunan dalam Pasal 25 Permendikbudristek 48/2023.</p>
<p>Orang tua tidak perlu menunggu sekolah memulai. Ada langkah sederhana yang bisa dilakukan sendiri:</p>
<ol>
<li>Catat tujuan anak tahun ini bersama guru, misalnya kemampuan membaca, komunikasi, atau kemandirian.</li>
<li>Minta salinan rencana pembelajaran individual dan cara penilaiannya.</li>
<li>Sepakati jadwal pertemuan rutin, misalnya setiap awal dan akhir semester.</li>
<li>Kumpulkan bukti kemajuan di rumah dan di sekolah, seperti hasil karya dan catatan perilaku.</li>
<li>Diskusikan hambatan yang muncul dan sepakati perubahan dukungan secara tertulis.</li>
<li>Tinjau hasilnya di akhir semester, lalu susun target berikutnya.</li>
</ol>
<p>Langkah ini juga memperkuat kemitraan orang tua dan sekolah, yang dibahas lebih lanjut di artikel <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>. Untuk masa perpindahan jenjang, lihat juga <a href="/artikel/transisi-anak-abk-dari-tk-ke-sd">transisi anak ABK dari TK ke SD</a>.</p>
${diag(`${IMG}/${slug}-fase.svg`, 'Diagram lima fase peninjauan sekolah inklusi: memulai, mencari tahu, menyusun rencana, menjalankan, dan meninjau ulang', 'Lima fase peninjauan sekolah inklusi yang dapat diulang setiap tahun ajaran.')}

<h2 id="tanda">Tanda sekolah belum benar-benar inklusif</h2>
<p>Indikator juga membantu mengenali masalah sejak awal. Beberapa tanda perlu diwaspadai. Anak lebih sering dipisahkan dari kelas tanpa rencana yang jelas. Orang tua diminta selalu menunggu di sekolah atau menyediakan pendamping sendiri tanpa diskusi kebutuhan. Tidak ada rencana individual, dan laporan kemajuan hanya berisi nilai tanpa penjelasan tentang target anak.</p>
<p>Tanda lain lebih halus, misalnya anak tidak pernah diikutkan lomba atau pentas, teman sekelas tidak dikenalkan dengan cara berkomunikasi dengan anak, atau guru tampak kebingungan tanpa pendampingan. Tanda seperti ini biasanya bukan niat buruk, melainkan kurangnya dukungan dan pengetahuan. Karena itu, langkah pertamanya adalah dialog, bukan saling menyalahkan.</p>
<p>Bila dialog tidak membuahkan perubahan, orang tua dapat meminta dukungan Unit Layanan Disabilitas melalui dinas pendidikan setempat. Pasal 27 Permendikbudristek 48/2023 juga membuka jalur pengaduan tertulis kepada menteri, gubernur, bupati atau wali kota, dan/atau komisi nasional disabilitas bila terjadi pelanggaran dalam penyediaan akomodasi yang layak. Identitas pelapor dilindungi sesuai aturan.</p>
<p>Keluarga di Yogyakarta yang ingin melihat penerapan pendidikan inklusi secara langsung dapat mengenal program <a href="/sekolah-inklusi-sleman">sekolah inklusi di Sleman</a> atau menghubungi tim YUKA melalui halaman <a href="/kontak">kontak</a>. Kunjungan dan diskusi terbuka adalah cara paling jujur untuk menilai sebuah sekolah.</p>

<h2 id="faq">Pertanyaan Umum tentang Indikator Sekolah Inklusi</h2>
${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('\n')}
`;

const meta = 'Indikator keberhasilan sekolah inklusi: tiga dimensi budaya, kebijakan, praktik, indikator layanan menurut Permendikbudristek 48/2023, dan cara orang tua menilainya.';
const data = {
  slug,
  titleTag: 'Indikator Keberhasilan Sekolah Inklusi dan Cara Menilainya | YUKA',
  metaDesc: meta,
  keywords: 'indikator keberhasilan sekolah inklusi, indikator sekolah inklusi, evaluasi sekolah inklusi, index for inclusion, akomodasi yang layak',
  ogTitle: 'Indikator Keberhasilan Sekolah Inklusi dan Cara Menilainya',
  ogDesc: meta,
  h1: 'Indikator Keberhasilan Sekolah Inklusi: Ukuran, Bukti, dan Cara Menilainya',
  crumb: 'Indikator Sekolah Inklusi',
  category: 'Pendidikan',
  datePublished: '2026-10-23T08:00:00+07:00',
  dateModified: '2026-10-23T08:00:00+07:00',
  dateDisplay: '23 Oktober 2026',
  readTime: '14 menit baca',
  image: { file: heroFile, w: 1200, h: 900, alt: 'Seorang anak berkostum tari berwarna oranye berdiri tanpa alas kaki di rumput depan dinding candi batu', caption: 'Dokumentasi kegiatan budaya YUKA di kompleks candi. Ikut serta dalam kegiatan bersama adalah salah satu ukuran partisipasi anak.', credit },
  bodyHtml,
  faq,
  related: [
    { href: '/artikel/pendidikan-inklusi', title: 'Pendidikan Inklusi Adalah', desc: 'Pengertian, konsep, dan dasar hukum pendidikan inklusi.' },
    { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Menyusun rencana belajar yang terukur untuk ABK.' },
    { href: '/artikel/peran-orang-tua-pendidikan-inklusi', title: 'Peran Orang Tua dalam Pendidikan Inklusi', desc: 'Kemitraan keluarga dan sekolah.' },
  ],
  tags: ['SekolahInklusi', 'PendidikanInklusi', 'AkomodasiLayak'],
  sources: [
    { url: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023', label: 'Permendikbudristek No. 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas (Pasal 2, 5, 8, 9, 12, 16, 25, 27, Lampiran II)' },
    { url: 'https://www.eenet.org.uk/resources/docs/Index%20English.pdf', label: 'Booth, T. dan Ainscow, M. (2002). Index for Inclusion: developing learning and participation in schools. CSIE (salinan EENET)' },
  ],
  sourcesCheckedNote: 'Pasal peraturan dibaca dari salinan PDF resmi JDIH BPK, dan kerangka Index for Inclusion dibaca dari salinan PDF EENET, pada 19 Oktober 2026.',
};

if (require.main === module) {
  for (const [file, content] of Object.entries(diagrams)) fs.writeFileSync(path.join(ROOT, file), content);
  const size = imageSize(path.join(ROOT, heroFile));
  if (size.w !== 1200 || size.h !== 900) throw new Error('Hero wajib 1200x900.');
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), renderArticlePage(data));
  console.log(`Generated artikel/${slug}.html`);
}
module.exports = { data, faq, bodyHtml };

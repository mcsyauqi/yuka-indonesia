'use strict';
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');

const ROOT = path.resolve(__dirname, '..');
const slug = 'abk-itu-seperti-apa';
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const fig = (file, alt, caption, width, height) => `<figure class="article-inline-image"><img src="../${file}" alt="${alt}" loading="lazy" width="${width}" height="${height}"><figcaption>${caption}<span class="kredit">${credit}</span></figcaption></figure>`;

const faq = [
  { q: 'ABK itu seperti apa?', a: 'ABK adalah istilah payung untuk anak yang memerlukan dukungan atau layanan tambahan agar dapat belajar, bermain, berkomunikasi, berpartisipasi, dan berkembang sesuai potensinya. Istilah ini tidak menunjuk pada satu diagnosis saja.' },
  { q: 'Apakah ABK sama dengan anak penyandang disabilitas?', a: 'Tidak selalu. Anak penyandang disabilitas termasuk anak yang dapat membutuhkan layanan khusus, tetapi istilah ABK juga dapat mencakup anak dengan kesulitan belajar tertentu, hambatan perkembangan, kebutuhan komunikasi, atau potensi kecerdasan dan bakat istimewa.' },
  { q: 'Apa saja contoh anak yang dapat membutuhkan dukungan khusus?', a: 'Contohnya anak dengan hambatan penglihatan, pendengaran, gerak, komunikasi, intelektual, perilaku, emosi, autisme, kesulitan belajar spesifik, keterlambatan perkembangan, kondisi kesehatan tertentu, atau potensi kecerdasan dan bakat istimewa.' },
  { q: 'Bagaimana cara mengetahui kebutuhan khusus anak?', a: 'Mulailah dari pengamatan konkret di rumah dan sekolah, lalu bicarakan kekhawatiran dengan dokter anak, psikolog, guru, atau tenaga profesional yang sesuai. Asesmen membantu memetakan kebutuhan dukungan dan bukan sekadar memberi label.' },
  { q: 'Apakah anak ABK bisa sekolah di sekolah reguler?', a: 'Bisa, jika sekolah memiliki layanan pendidikan inklusif dan penyesuaian yang sesuai kebutuhan anak. Bentuk dukungan dapat berupa modifikasi cara mengajar, media aksesibel, waktu tambahan, pendampingan, atau program pembelajaran individual.' },
  { q: 'Apakah kebutuhan khusus anak pasti menetap seumur hidup?', a: 'Tidak selalu. Sebagian kebutuhan bersifat jangka panjang, sedangkan sebagian lain dapat berubah seiring perkembangan, dukungan, lingkungan, dan akses terhadap layanan. Pemantauan berkala membantu keluarga menyesuaikan dukungan.' },
  { q: 'Apa langkah pertama orang tua ketika melihat tanda perkembangan yang mengkhawatirkan?', a: 'Catat perilaku atau keterampilan yang diamati beserta konteksnya, hindari membandingkan anak secara merendahkan, dan buat janji dengan tenaga profesional. Orang tua tidak perlu menunggu label diagnosis untuk mulai menciptakan lingkungan yang aman dan mendukung.' },
];

const bodyHtml = `
<p><strong>ABK itu seperti apa?</strong> ABK adalah anak berkebutuhan khusus, yaitu anak yang memerlukan dukungan, penyesuaian, atau layanan tambahan agar dapat belajar, bermain, berkomunikasi, berpartisipasi, dan berkembang sesuai potensinya. Kebutuhan itu dapat berkaitan dengan aspek fisik, sensorik, komunikasi, intelektual, sosial, emosi, perilaku, kesehatan, kesulitan belajar, atau potensi kecerdasan dan bakat istimewa.</p>
<p>ABK bukan nama satu diagnosis dan bukan ukuran nilai seorang anak. Istilah ini membantu keluarga, guru, dan layanan pendukung membicarakan kebutuhan yang perlu diakomodasi. Setiap anak tetap memiliki identitas, minat, kelebihan, hak, dan suara. Karena itu, pembahasan tentang ABK sebaiknya tidak berhenti pada daftar kekurangan, tetapi bergerak pada pertanyaan yang lebih berguna: dukungan apa yang membuat anak dapat berpartisipasi dengan aman dan bermakna?</p>
<p>Artikel ini menjelaskan pengertian ABK dengan bahasa sederhana, contoh kebutuhan yang beragam, cara membedakan pengamatan dari diagnosis, pilihan dukungan di rumah dan sekolah, serta langkah awal orang tua. Untuk istilah dasar yang lebih ringkas, Anda juga dapat membaca artikel <a href="pengertian-abk">pengertian ABK</a> dan <a href="abk-adalah-anak-berkebutuhan-khusus">ABK adalah anak berkebutuhan khusus</a>.</p>
<div class="toc" aria-label="Daftar isi artikel"><h3>Daftar Isi</h3><ol>
<li><a href="#definisi">Definisi ABK secara sederhana</a></li>
<li><a href="#bukan-label">ABK bukan label nilai anak</a></li>
<li><a href="#ragam">Ragam kebutuhan yang mungkin dimiliki anak</a></li>
<li><a href="#dukungan">Contoh dukungan berdasarkan kebutuhan</a></li>
<li><a href="#asesmen">Cara mengenali kebutuhan anak</a></li>
<li><a href="#sekolah">ABK dan pendidikan inklusif</a></li>
<li><a href="#rumah">Peran keluarga di rumah</a></li>
<li><a href="#kapan">Kapan perlu mencari bantuan profesional?</a></li>
<li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
</ol></div>

<h2 id="definisi">ABK Itu Seperti Apa? Definisi yang Berpihak pada Kebutuhan</h2>
<p>Secara sederhana, anak berkebutuhan khusus adalah anak yang membutuhkan dukungan berbeda atau tambahan dibandingkan kebanyakan anak seusianya untuk mengakses kegiatan sehari-hari. Dukungan itu dapat berupa alat bantu, cara komunikasi alternatif, penyesuaian lingkungan, instruksi yang lebih terstruktur, waktu belajar yang fleksibel, pendampingan, atau layanan kesehatan dan pendidikan. Kebutuhan khusus tidak otomatis berarti anak tidak mampu. Sering kali, hambatan muncul karena lingkungan belum menyediakan cara yang sesuai untuk mengakses kegiatan.</p>
<p>Buku <em>Psikologi Anak Berkebutuhan Khusus</em> karya Nur Eva dari Universitas Negeri Malang menjelaskan bahwa kebutuhan pendidikan anak dapat berbeda sehingga materi, program, fasilitas, atau layanan perlu disesuaikan. Cakupannya tidak hanya hambatan fisik dan sensorik, tetapi juga kebutuhan belajar serta potensi tinggi. Istilah lama di beberapa literatur perlu dibaca dengan konteks zamannya, bukan dijadikan label yang merendahkan. Dalam pendampingan sehari-hari, makna ABK tidak hanya berisi kondisi anak, tetapi juga peran keluarga, sekolah, masyarakat, dan layanan profesional untuk mengurangi hambatan.</p>
<p>Dalam praktik, dua anak dengan diagnosis yang sama dapat memerlukan strategi berbeda. Seorang anak mungkin membutuhkan dukungan komunikasi visual, sementara anak lain lebih terbantu oleh waktu transisi yang panjang atau lingkungan yang tidak bising. Karena itu, pendekatan terbaik dimulai dari kebutuhan fungsional yang terlihat, bukan dari asumsi tentang label.</p>
${fig('Dokumentasi/museum-gunung-merapi-grup-anak-foto-bersama-istana-026.webp','Sekelompok anak dan pendamping mengikuti kegiatan bersama di ruang publik','Kegiatan kelompok dengan pendamping menunjukkan bahwa dukungan dapat diberikan melalui partisipasi bersama di lingkungan yang beragam.',2080,1560)}

<h2 id="bukan-label">ABK Bukan Label Nilai Anak</h2>
<p>Ketika seseorang bertanya ABK itu seperti apa, jawaban yang kurang tepat biasanya hanya menyebut keterbatasan. Cara ini dapat membuat anak seolah-olah hanya dilihat dari diagnosis atau kesulitannya. Padahal kebutuhan dukungan tidak menghapus kemampuan anak untuk belajar, membuat pilihan, menikmati pertemanan, berkarya, dan berkontribusi. Bahasa yang digunakan orang dewasa juga memengaruhi cara sekolah dan masyarakat memperlakukan anak.</p>
<p>Gunakan bahasa yang menghormati anak. Sebut kebutuhan atau hambatan secara spesifik bila memang relevan, misalnya anak membutuhkan instruksi visual, waktu proses lebih panjang, atau akses komunikasi. Hindari menyamakan anak dengan diagnosisnya dan jangan menganggap semua anak dalam satu kelompok memiliki perilaku yang sama. Dalam percakapan keluarga, fokuskan catatan pada situasi, pemicu, kekuatan, dan dukungan yang membantu.</p>
<p>Sudut pandang ini sejalan dengan pendidikan inklusif. Sekolah tidak hanya meminta anak menyesuaikan diri dengan sistem yang sudah ada, tetapi juga mengevaluasi apakah materi, ruang, jadwal, komunikasi, dan cara penilaian dapat diakses. Orang tua dapat membaca panduan <a href="pendidikan-inklusi">pendidikan inklusi</a> dan <a href="../sekolah-inklusi-sleman">sekolah inklusi di Sleman</a> untuk memahami contoh dukungan yang lebih konkret.</p>
<div class="jawaban-singkat"><p><strong>Intinya:</strong> ABK adalah anak dengan kebutuhan dukungan tertentu, bukan anak yang nilainya lebih rendah. Tujuan pendampingan bukan menghapus keunikan anak, melainkan membuka akses agar anak dapat tumbuh dan berpartisipasi.</p></div>

<h2 id="ragam">Ragam Kebutuhan yang Mungkin Dimiliki Anak</h2>
<p>Ragam ABK sangat luas. Klasifikasi dapat membantu tenaga profesional merancang layanan, tetapi tidak boleh dipakai untuk menyederhanakan pengalaman setiap anak. Beberapa anak memiliki satu kebutuhan utama, sedangkan yang lain mempunyai kombinasi kebutuhan. Ada juga kebutuhan yang tidak langsung terlihat, seperti kesulitan memproses bahasa, regulasi emosi, perhatian, atau kelelahan akibat kondisi kesehatan.</p>
<table class="classification-table"><thead><tr><th>Area kebutuhan</th><th>Contoh dukungan</th><th>Hal yang perlu diamati</th></tr></thead><tbody>
<tr><td>Sensorik dan fisik</td><td>Alat bantu, akses ruang, posisi duduk, atau adaptasi aktivitas</td><td>Akses melihat, mendengar, bergerak, dan menjaga stamina</td></tr>
<tr><td>Komunikasi dan bahasa</td><td>Bahasa isyarat, gambar, gestur, perangkat komunikasi, atau waktu tunggu</td><td>Cara anak memahami pesan dan menyampaikan pilihan</td></tr>
<tr><td>Belajar dan perhatian</td><td>Instruksi bertahap, contoh konkret, pengulangan, atau waktu tambahan</td><td>Materi yang mudah diakses dan kondisi yang membantu fokus</td></tr>
<tr><td>Sosial, emosi, dan perilaku</td><td>Rutinitas, dukungan transisi, ruang tenang, dan strategi regulasi</td><td>Pemicu stres, cara meminta jeda, dan pola pemulihan</td></tr>
<tr><td>Potensi tinggi atau bakat istimewa</td><td>Pengayaan, tantangan yang sesuai, dan dukungan sosial-emosional</td><td>Minat mendalam, kebutuhan tantangan, serta keseimbangan aktivitas</td></tr>
</tbody></table>
<p>Tabel tersebut bukan alat diagnosis. Ia hanya membantu keluarga memulai percakapan yang lebih terarah. Misalnya, anak yang tampak tidak mengikuti instruksi belum tentu tidak mau belajar. Ia mungkin membutuhkan kalimat yang lebih singkat, gambar pendukung, atau waktu untuk memproses bahasa. Anak yang menghindari keramaian belum tentu tidak ingin bersosialisasi. Ruang yang terlalu bising, cahaya menyilaukan, atau perubahan mendadak dapat menjadi hambatan.</p>

<h2 id="dukungan">Contoh Dukungan Sesuai Kebutuhan Anak</h2>
<p>Dukungan yang baik bersifat individual, dapat dicoba, dan dievaluasi. Keluarga tidak harus menerapkan semua strategi sekaligus. Mulailah dari satu hambatan yang paling mengganggu partisipasi anak, lalu ukur perubahan dengan catatan sederhana. Tanyakan kepada anak, bila ia dapat menyampaikan pendapat, dukungan apa yang terasa membantu dan dukungan apa yang justru melelahkan.</p>
<p>Untuk kebutuhan komunikasi, gunakan kata kunci yang konsisten, gambar urutan kegiatan, pilihan terbatas, atau alat komunikasi alternatif bila direkomendasikan profesional. Untuk kebutuhan belajar, pecah tugas menjadi langkah kecil, berikan contoh, dan beri jeda. Untuk kebutuhan sensorik, perhatikan suara, cahaya, tekstur, keramaian, serta waktu pemulihan. Untuk kebutuhan sosial dan emosi, ajarkan cara meminta bantuan dan menyediakan tempat aman, bukan hanya menuntut anak untuk tenang.</p>
${fig('Dokumentasi/museum-gunung-merapi-peserta-acara-foto-bersama-indoor-057.webp','Anak-anak dan pendamping melakukan kegiatan bersama di ruang pameran','Pendampingan dalam kegiatan luar ruang belajar dapat membantu anak berlatih mengikuti alur kegiatan, berkomunikasi, dan tetap terlibat bersama kelompok.',1600,1200)}
<p>Aktivitas keseharian juga dapat menjadi ruang belajar. Menyiapkan makanan, merapikan benda, memilih pakaian, atau mengikuti kegiatan seni dapat melatih perencanaan, motorik, komunikasi, dan kemandirian. Baca juga <a href="terapi-okupasi">terapi okupasi untuk anak</a> dan <a href="program-pemberdayaan-anak-berkebutuhan-khusus">program pemberdayaan anak berkebutuhan khusus</a> untuk melihat bagaimana keterampilan fungsional dapat dilatih secara bermakna.</p>

<h2 id="asesmen">Cara Mengenali Kebutuhan Anak Tanpa Mendiagnosis Sendiri</h2>
<p>Orang tua adalah pengamat penting karena melihat anak dalam banyak situasi, tetapi pengamatan keluarga bukan diagnosis. Mulailah dengan mencatat apa yang benar-benar terjadi. Tuliskan kapan perilaku muncul, aktivitas sebelum kejadian, cara anak merespons, dukungan yang dicoba, dan hasilnya. Catatan seperti ini lebih berguna daripada kesimpulan umum seperti anak malas, nakal, atau tidak mau berusaha.</p>
<ol><li><strong>Amati lintas situasi.</strong> Bandingkan rumah, sekolah, tempat ramai, waktu bermain, dan waktu istirahat. Perbedaan konteks dapat menunjukkan hambatan lingkungan.</li><li><strong>Catat kekuatan dan minat.</strong> Perhatikan aktivitas yang membuat anak fokus, nyaman, mampu menyelesaikan langkah, atau berinisiatif meminta bantuan.</li><li><strong>Diskusikan dengan pihak terkait.</strong> Guru, dokter anak, psikolog, terapis, atau tenaga profesional lain dapat membantu menentukan asesmen yang sesuai.</li><li><strong>Gunakan hasil asesmen untuk merancang dukungan.</strong> Hasil asesmen seharusnya menjawab apa yang membantu anak, bukan menjadi alasan untuk membatasi kesempatan tanpa dasar.</li></ol>
<p>CDC mengingatkan keluarga untuk memantau perkembangan, membicarakan kekhawatiran dengan tenaga kesehatan, dan meminta skrining atau rujukan bila diperlukan. Checklist perkembangan bukan pengganti skrining terstandar dan bukan alat untuk menetapkan diagnosis. Di Indonesia, keluarga dapat mulai dari dokter anak, puskesmas, rumah sakit, psikolog, atau tim layanan sekolah sesuai kebutuhan dan akses setempat. Informasi tentang <a href="asesmen-abk">asesmen ABK</a> dapat membantu menyiapkan pertanyaan.</p>

<h2 id="sekolah">ABK dan Pendidikan Inklusif</h2>
<p>Anak ABK dapat belajar di satuan pendidikan khusus, sekolah reguler penyelenggara pendidikan inklusif, atau bentuk layanan lain yang sesuai hasil asesmen dan pilihan keluarga. Tidak ada satu lingkungan yang otomatis terbaik untuk semua anak. Kecocokan ditentukan oleh kebutuhan belajar, aksesibilitas, kompetensi pendidik, dukungan teman sebaya, keamanan, jarak, biaya, dan kemampuan sekolah berkolaborasi dengan keluarga.</p>
<p>Pendidikan inklusif bukan sekadar menempatkan anak di kelas yang sama. Sekolah perlu mengupayakan akses terhadap materi, komunikasi, aktivitas, penilaian, dan interaksi sosial. Penyesuaian dapat berupa instruksi visual, tempat duduk yang mendukung, pilihan cara menjawab, waktu tambahan, tujuan pembelajaran individual, pendampingan, atau rutinitas transisi. Kemdikdasmen menjelaskan bahwa pendidikan inklusif berupaya memastikan peserta didik penyandang disabilitas memperoleh pendidikan bermutu secara setara, dengan layanan yang akomodatif.</p>
${fig('Dokumentasi/museum-gunung-merapi-grup-wisatawan-foto-bersama-museum-033.webp','Kelompok anak dan pendamping berfoto bersama setelah kegiatan kunjungan','Kegiatan bersama di tempat publik menggambarkan pentingnya kesempatan anak untuk belajar, berinteraksi, dan berpartisipasi di luar ruang kelas.',1248,936)}
<p>Orang tua dapat meminta pertemuan dengan wali kelas dan tim sekolah untuk membahas tujuan dukungan. Tanyakan bagaimana sekolah mengukur kemajuan, siapa yang menjadi kontak saat anak mengalami kesulitan, bagaimana prosedur keselamatan, dan bagaimana keluarga dapat menyampaikan perubahan. Kerja sama ini berbeda dari tuntutan agar anak selalu berperilaku seperti anak lain. Fokusnya adalah akses belajar dan kesejahteraan.</p>

<h2 id="rumah">Peran Keluarga di Rumah</h2>
<p>Keluarga tidak harus menjadi terapis sepanjang hari. Rutinitas yang dapat diprediksi, instruksi yang jelas, kesempatan memilih, dan hubungan yang hangat sudah merupakan fondasi penting. Buat target kecil yang relevan dengan kehidupan sehari-hari, misalnya meminta jeda, menyimpan alat makan, menunggu giliran, atau menyampaikan pilihan. Rayakan usaha dan strategi yang dipakai anak, bukan hanya hasil yang terlihat sempurna.</p>
<p>Jaga komunikasi antaranggota keluarga. Orang tua dapat membagi peran, menyimpan catatan bersama, dan menyepakati kalimat yang digunakan untuk memberi dukungan. Saudara juga perlu mendapat penjelasan yang sesuai usia agar memahami perbedaan tanpa merasa harus menjadi pengasuh utama. Keluarga yang lelah boleh meminta bantuan praktis dari kerabat, komunitas, sekolah, atau layanan profesional. Membaca <a href="dukungan-keluarga-anak-abk">panduan dukungan keluarga</a> dan <a href="mengelola-stres-orang-tua-anak-abk">cara mengelola stres orang tua</a> dapat menjadi langkah awal.</p>
<p>Jika keluarga sedang mencari lingkungan kegiatan, lihat informasi tentang <a href="../program">program YUKA</a>, <a href="../galeri">dokumentasi kegiatan</a>, atau <a href="../kontak">kontak YUKA</a>. Pastikan setiap layanan yang dipilih menjelaskan tujuan, metode, batas kompetensi, biaya, dan cara mengevaluasi kemajuan. Waspadai janji kesembuhan pasti atau program yang menyalahkan orang tua.</p>

<h2 id="kapan">Kapan Perlu Mencari Bantuan Profesional?</h2>
<p>Pertimbangkan konsultasi ketika ada kekhawatiran perkembangan, komunikasi, gerak, belajar, perilaku, kesehatan, makan, tidur, atau interaksi yang menetap dan mengganggu partisipasi anak. Segera cari bantuan medis bila ada kehilangan keterampilan yang sebelumnya sudah dimiliki, kejang, kesulitan bernapas, cedera, masalah makan atau minum yang berisiko, atau kondisi lain yang tampak gawat. Untuk situasi darurat, gunakan layanan kesehatan setempat.</p>
<p>Mencari bantuan bukan berarti orang tua gagal dan bukan berarti anak harus segera diberi label. Tujuan konsultasi adalah memahami kebutuhan, menyingkirkan kemungkinan yang perlu ditangani, serta menemukan dukungan yang aman. Bawa catatan pengamatan, riwayat kesehatan yang relevan, daftar obat bila ada, dan pertanyaan keluarga. Mintalah penjelasan yang dapat dipahami serta rencana tindak lanjut yang jelas.</p>
<p>Artikel ini adalah informasi edukasi umum dan tidak ditinjau oleh dokter atau psikolog untuk kasus individual. Diagnosis, rekomendasi terapi, dan keputusan pendidikan harus disesuaikan dengan asesmen anak, konsultasi tenaga profesional, serta kondisi keluarga. Anak tidak perlu menunggu diagnosis untuk mendapat penghormatan, akses bermain, komunikasi yang aman, dan dukungan yang layak.</p>
${fig('Dokumentasi/museum-gunung-merapi-karyawati-anak-foto-bersama-mall-045.webp','Anak-anak dan pendamping berfoto bersama dalam kegiatan di ruang publik','Kegiatan kelompok dengan pendamping memperlihatkan kesempatan berinteraksi dan berpartisipasi dalam lingkungan publik secara bersama.',2000,1500)}

<h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
<h3>ABK itu seperti apa?</h3><p>ABK adalah istilah payung untuk anak yang memerlukan dukungan atau layanan tambahan agar dapat belajar, bermain, berkomunikasi, berpartisipasi, dan berkembang sesuai potensinya. Istilah ini tidak menunjuk pada satu diagnosis saja.</p>
<h3>Apakah ABK sama dengan anak penyandang disabilitas?</h3><p>Tidak selalu. Anak penyandang disabilitas termasuk anak yang dapat membutuhkan layanan khusus, tetapi istilah ABK juga dapat mencakup anak dengan kesulitan belajar tertentu, hambatan perkembangan, kebutuhan komunikasi, atau potensi kecerdasan dan bakat istimewa.</p>
<h3>Apa saja contoh anak yang dapat membutuhkan dukungan khusus?</h3><p>Contohnya anak dengan hambatan penglihatan, pendengaran, gerak, komunikasi, intelektual, perilaku, emosi, autisme, kesulitan belajar spesifik, keterlambatan perkembangan, kondisi kesehatan tertentu, atau potensi kecerdasan dan bakat istimewa.</p>
<h3>Bagaimana cara mengetahui kebutuhan khusus anak?</h3><p>Mulailah dari pengamatan konkret di rumah dan sekolah, lalu bicarakan kekhawatiran dengan dokter anak, psikolog, guru, atau tenaga profesional yang sesuai. Asesmen membantu memetakan kebutuhan dukungan dan bukan sekadar memberi label.</p>
<h3>Apakah anak ABK bisa sekolah di sekolah reguler?</h3><p>Bisa, jika sekolah memiliki layanan pendidikan inklusif dan penyesuaian yang sesuai kebutuhan anak. Bentuk dukungan dapat berupa modifikasi cara mengajar, media aksesibel, waktu tambahan, pendampingan, atau program pembelajaran individual.</p>
<h3>Apakah kebutuhan khusus anak pasti menetap seumur hidup?</h3><p>Tidak selalu. Sebagian kebutuhan bersifat jangka panjang, sedangkan sebagian lain dapat berubah seiring perkembangan, dukungan, lingkungan, dan akses terhadap layanan. Pemantauan berkala membantu keluarga menyesuaikan dukungan.</p>
<h3>Apa langkah pertama orang tua ketika melihat tanda perkembangan yang mengkhawatirkan?</h3><p>Catat perilaku atau keterampilan yang diamati beserta konteksnya, hindari membandingkan anak secara merendahkan, dan buat janji dengan tenaga profesional. Orang tua tidak perlu menunggu label diagnosis untuk mulai menciptakan lingkungan yang aman dan mendukung.</p>

<h2>Penutup</h2>
<p>Jadi, ABK itu seperti apa? ABK adalah anak yang membutuhkan dukungan tertentu agar dapat mengakses kesempatan tumbuh dan berpartisipasi. Jawaban yang bertanggung jawab tidak berhenti pada label. Ia melihat kekuatan anak, mengenali hambatan di lingkungan, bekerja sama dengan tenaga profesional, dan menyesuaikan dukungan dari waktu ke waktu.</p>
<p>Mulailah dari satu pengamatan dan satu langkah kecil yang aman. Dengarkan anak, libatkan sekolah, simpan catatan, dan cari bantuan ketika diperlukan. Dengan dukungan yang tepat, anak dapat belajar dan berkembang dengan jalannya sendiri tanpa harus kehilangan martabat atau haknya.</p>
`;

const article = {
  slug,
  titleTag: 'ABK Itu Seperti Apa? Pengertian dan Contohnya | YUKA',
  metaDesc: 'ABK itu seperti apa? Kenali pengertian, ragam kebutuhan, contoh dukungan, pendidikan inklusif, dan langkah orang tua. Baca panduannya.',
  keywords: 'abk itu seperti apa, anak berkebutuhan khusus, pengertian ABK, pendidikan inklusif, dukungan anak ABK',
  ogTitle: 'ABK Itu Seperti Apa? Pengertian, Ragam Kebutuhan, dan Dukungan',
  ogDesc: 'Panduan ramah keluarga untuk memahami ABK, mengenali ragam kebutuhan, dan memilih dukungan di rumah maupun sekolah.',
  datePublished: '2026-10-12',
  dateModified: '2026-10-13',
  dateDisplay: '12 Oktober 2026',
  readTime: '13 menit baca',
  category: 'Pendidikan',
  h1: 'ABK Itu Seperti Apa? Pengertian, Ragam Kebutuhan, dan Dukungan',
  crumb: 'ABK Itu Seperti Apa',
  parent: { href: 'pengertian-abk', name: 'Pengertian ABK' },
  about: ['Anak berkebutuhan khusus', 'Pendidikan inklusif', 'Dukungan keluarga'],
  image: {
    file: 'Dokumentasi/museum-gunung-merapi-rombongan-wisata-edukasi-gunung-merapi-032.webp',
    w: 1228, h: 824,
    alt: 'Anak-anak dan pendamping mengikuti kunjungan edukatif bersama di ruang museum',
    caption: 'Sekelompok anak dan pendamping mengikuti kunjungan edukatif bersama di ruang museum.',
    credit,
  },
  bodyHtml,
  faq,
  related: [
    { href: 'pengertian-abk', title: 'Pengertian ABK: Definisi, Jenis, dan Dasar Hukum', desc: 'Memahami istilah ABK, ragam kebutuhan, dan dasar dukungan untuk anak.' },
    { href: 'ciri-ciri-abk', title: 'Ciri-Ciri ABK dan Langkah Pengamatan', desc: 'Panduan mengamati kebutuhan anak tanpa mendiagnosis sendiri.' },
    { href: 'pendidikan-inklusi', title: 'Pendidikan Inklusi untuk Anak Berkebutuhan Khusus', desc: 'Mengenal prinsip pendidikan yang mendukung partisipasi semua anak.' },
  ],
  tags: ['ABK', 'Pendidikan Inklusif', 'Parenting', 'Anak Berkebutuhan Khusus'],
  sources: [
    { url: 'https://lib.um.ac.id/wp-content/uploads/2018/06/BUKU-PABK-NUR-EVA.pdf', label: 'Nur Eva, Universitas Negeri Malang, Psikologi Anak Berkebutuhan Khusus (2015)' },
    { url: 'https://gtkdikmendiksus.kemendikdasmen.go.id/ayo-berpikir-inklusif/', label: 'Direktorat Guru Pendidikan Menengah dan Pendidikan Khusus, Ayo Berpikir Inklusif' },
    { url: 'https://www.unicef.org/education/inclusive-education', label: 'UNICEF, Inclusive Education' },
    { url: 'https://cdc.gov/act-early/families/concerned.html', label: 'CDC, Concerned About Your Child\'s Development?' },
  ],
  sourcesCheckedNote: 'Sumber resmi dibaca dan digunakan untuk memeriksa definisi, hak pendidikan, pemantauan perkembangan, dan rujukan dukungan. Artikel ini tidak menggantikan asesmen individual.',
};

const html = renderArticlePage(article).replace('<article class="article-content">', '<article class="article-content" data-revision-marker="yuka-abk-20261013-link-source-fix">');
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html);
console.log(`wrote artikel/${slug}.html`);
console.log(`body chars=${bodyHtml.length}`);

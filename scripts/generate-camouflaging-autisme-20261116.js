'use strict';

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');

const ROOT = path.resolve(__dirname, '..');
const articleDir = path.join(ROOT, 'artikel');
const slug = 'camouflaging-autisme-pada-wanita-penelitian';
const SITE = 'https://www.yukaindonesia.com';
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const fig = (file, w, h, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${credit}</span></figcaption></figure>`;
const p = (s) => `<p>${s}</p>`;
const ext = (url, label) => `<a href="${url}" target="_blank" rel="nofollow noopener">${label}</a>`;
const toc = `<div class="toc"><h3>Daftar Isi</h3><ol>
<li><a href="#pengertian">Apa itu camouflaging autisme?</a></li>
<li><a href="#wanita">Mengapa sering dibahas pada wanita?</a></li>
<li><a href="#contoh">Contoh camouflaging dalam kehidupan sehari-hari</a></li>
<li><a href="#bukan-diagnosis">Camouflaging bukan alat diagnosis</a></li>
<li><a href="#dampak">Dampak pada energi dan kesehatan mental</a></li>
<li><a href="#asesmen">Bagaimana proses asesmen yang lebih menyeluruh?</a></li>
<li><a href="#dukungan">Dukungan di rumah, sekolah, dan tempat kerja</a></li>
<li><a href="#batas">Melepas camouflaging dengan aman</a></li>
<li><a href="#bantuan">Kapan perlu mencari bantuan?</a></li>
<li><a href="#faq">Pertanyaan yang Sering Diajukan</a></li>
</ol></div>`;

const faq = [
  { q: 'Apa arti camouflaging autisme pada wanita?', a: 'Camouflaging autisme adalah upaya sadar atau tidak sadar untuk menyembunyikan, menahan, atau mengompensasi ciri autisme agar terlihat sesuai dengan harapan sosial. Pada wanita, bentuknya dapat berupa meniru ekspresi orang lain, menyiapkan kalimat, menahan kebutuhan sensorik, atau menyembunyikan minat dan gerakan yang terasa menenangkan.' },
  { q: 'Apakah semua wanita yang melakukan camouflaging pasti autistik?', a: 'Tidak. Banyak orang belajar menyesuaikan diri dalam situasi sosial, dan camouflaging bukan tes atau bukti tunggal autisme. Dugaan autisme perlu dinilai melalui riwayat perkembangan, pola komunikasi, kebutuhan sensorik, minat, fungsi sehari-hari, serta kemungkinan kondisi lain oleh tenaga profesional yang kompeten.' },
  { q: 'Apakah camouflaging dapat menyebabkan autisme?', a: 'Tidak. Camouflaging tidak menyebabkan autisme. Camouflaging adalah strategi yang dapat muncul sebagai respons terhadap tuntutan sosial, stigma, pengalaman ditolak, atau kebutuhan untuk merasa aman. Dampaknya berbeda pada setiap orang dan hubungan sebab akibatnya masih terus diteliti.' },
  { q: 'Apa tanda seseorang terlalu lelah karena camouflaging?', a: 'Tanda yang perlu diperhatikan antara lain kelelahan berat setelah interaksi, membutuhkan waktu menyendiri yang panjang, sulit berbicara saat sudah di rumah, meningkatnya sensitivitas suara atau sentuhan, gangguan tidur, rasa terputus dari diri sendiri, serta kecemasan atau suasana hati yang memburuk.' },
  { q: 'Haruskah wanita autistik berhenti melakukan camouflaging sepenuhnya?', a: 'Tidak ada kewajiban untuk berhenti sepenuhnya. Sebagian orang memilih tetap memakai strategi tertentu di situasi yang dianggap perlu, sambil mencari lingkungan yang lebih aman dan dukungan yang mengurangi beban. Tujuannya bukan memaksa seseorang terbuka, melainkan memperbesar pilihan dan menjaga kesejahteraan.' },
  { q: 'Bagaimana cara mendukung wanita yang sedang camouflaging?', a: 'Dengarkan pengalaman tanpa memaksa pengakuan atau diagnosis, jangan menilai kondisi hanya dari perilaku yang tampak tenang, berikan pilihan komunikasi, sediakan waktu pemulihan, dan izinkan kebutuhan sensorik yang aman. Di sekolah atau tempat kerja, dukungan sebaiknya disusun berdasarkan kebutuhan individu.' },
  { q: 'Apakah camouflaging dapat membuat diagnosis autisme terlambat?', a: 'Camouflaging dapat membuat ciri yang tampak saat observasi menjadi lebih sedikit, terutama bila asesmen hanya mengandalkan kesan singkat. Karena itu, asesmen yang baik perlu menggali riwayat sejak masa kanak-kanak, pengalaman di berbagai lingkungan, kebutuhan dukungan, dan perbedaan antara kemampuan yang terlihat dengan biaya energi yang harus dikeluarkan.' },
];

const body = [
  p('<strong>Camouflaging autisme pada wanita</strong> adalah istilah untuk strategi menutupi atau mengompensasi ciri autisme dalam interaksi sosial. Seseorang mungkin tampak lancar berbicara, mengikuti aturan percakapan, tersenyum pada waktu yang dianggap tepat, atau terlihat mampu beradaptasi. Namun, penampilan luar itu belum tentu menggambarkan energi, kebingungan, atau kelelahan yang dialami setelahnya. Camouflaging bukan alasan untuk meragukan pengalaman seseorang dan bukan pula alat diagnosis mandiri.'),
  p('Penelitian tentang camouflaging penting karena sebagian wanita baru memahami pola neurodivergensi setelah bertahun-tahun dianggap pemalu, terlalu sensitif, cemas, perfeksionis, atau sulit mengatur diri. Artikel ini membahas makna camouflaging, contoh yang dapat diamati, keterbatasan istilah ini, dampak yang mungkin muncul, serta cara membangun dukungan yang lebih aman. Untuk memahami dasar autisme secara umum, pembaca dapat melihat artikel <a href="/artikel/autisme-adalah">autisme adalah</a> dan pembahasan <a href="/artikel/neurodivergent-vs-neurotypical-perbedaan">perbedaan neurodivergent dan neurotypical</a>.'),
  toc,

  '<h2 id="pengertian">Apa itu camouflaging autisme?</h2>',
  p('Camouflaging, masking, atau social camouflaging merujuk pada pola ketika seseorang menyembunyikan ciri autisme, menyesuaikan perilaku secara intens, atau memakai strategi kompensasi agar dapat mengikuti norma sosial. Istilah ini tidak selalu berarti seseorang sedang berpura-pura. Banyak strategi berkembang perlahan karena pengalaman belajar, koreksi dari lingkungan, perundungan, tuntutan sekolah, atau kebutuhan untuk menghindari penolakan. Pada sebagian orang, strategi itu dilakukan secara sadar. Pada orang lain, strategi sudah menjadi kebiasaan sehingga sulit dikenali sebagai tindakan yang menguras energi.'),
  p('Dalam praktiknya, camouflaging dapat meliputi menyiapkan topik obrolan sebelum bertemu orang, menghafalkan respons yang dianggap sopan, meniru intonasi atau gestur, menahan gerakan regulasi diri, dan mengamati wajah lawan bicara untuk menentukan respons. National Autistic Society menjelaskan masking sebagai strategi yang dapat membantu seseorang melewati situasi sosial, tetapi juga dapat berdampak pada kesehatan mental, rasa diri, dan akses diagnosis. Penjelasan ini tidak berarti semua strategi sosial itu buruk. Yang perlu diperhatikan adalah biaya, tekanan, dan apakah seseorang masih memiliki ruang untuk menjadi dirinya sendiri.'),
  fig('Dokumentasi/gbp/yuka-02.jpg', 1200, 900, 'Ruang kegiatan YUKA dengan beberapa kursi dan meja yang tertata untuk aktivitas bersama', 'Lingkungan yang terstruktur dan dapat diprediksi membantu sebagian orang berkomunikasi tanpa harus terus menerus menebak tuntutan sosial.'),

  '<h2 id="wanita">Mengapa camouflaging sering dibahas pada wanita?</h2>',
  p('Pembahasan tentang wanita muncul karena penelitian dan pengalaman klinis menunjukkan bahwa sebagian wanita autistik dapat mengembangkan strategi sosial yang sangat kuat. Mereka mungkin belajar mengamati teman, meniru gaya bicara, mempelajari aturan pertemanan, atau memakai minat khusus untuk membangun percakapan. Hal ini dapat membuat ciri autisme lebih sulit terlihat dalam pertemuan singkat. Namun, tidak semua wanita melakukan camouflaging dan tidak semua orang yang melakukan camouflaging adalah wanita.'),
  p('Perbedaan pengalaman juga dipengaruhi oleh usia, budaya, bahasa, tuntutan keluarga, akses pendidikan, dan harapan gender. Anak perempuan yang diharapkan selalu sopan, membantu, tenang, dan mudah menyesuaikan diri mungkin belajar menahan kebutuhan sejak dini. Di sisi lain, banyak wanita justru tidak dapat atau tidak ingin melakukan camouflaging secara konsisten. Karena itu, istilah ini tidak boleh dipakai untuk membuat stereotip baru atau menyimpulkan bahwa wanita autistik harus tampak lelah, pendiam, atau berbeda secara kasatmata.'),
  `<div class="table-wrap"><table><caption>Contoh pola yang dapat muncul dan pertanyaan dukungannya</caption><thead><tr><th>Pola yang terlihat</th><th>Kemungkinan biaya tersembunyi</th><th>Pertanyaan dukungan</th></tr></thead><tbody>
<tr><td>Selalu menyiapkan kalimat sebelum bertemu orang</td><td>Cemas ketika percakapan berubah arah</td><td>Apakah tersedia pilihan komunikasi tertulis?</td></tr>
<tr><td>Tampak tenang di sekolah atau kantor</td><td>Memerlukan pemulihan panjang setelah pulang</td><td>Apakah ada jeda dan ruang tenang?</td></tr>
<tr><td>Menahan gerakan atau respons sensorik</td><td>Tubuh semakin tegang dan mudah kewalahan</td><td>Apakah strategi regulasi diri yang aman diizinkan?</td></tr>
</tbody></table></div>`,
  p('Daripada bertanya apakah seseorang terlihat autistik, lebih bermanfaat menggali bagaimana ia memahami percakapan, mengelola perubahan, memproses suara atau sentuhan, dan memulihkan energi. Pembaca yang ingin memahami dukungan sosial dapat melanjutkan ke artikel <a href="/artikel/inklusi-sosial">inklusi sosial</a> dan <a href="/artikel/konsep-inklusi-sosial">konsep inklusi sosial</a>.'),

  '<h2 id="contoh">Contoh camouflaging dalam kehidupan sehari-hari</h2>',
  p('Camouflaging tidak selalu tampak dramatis. Contoh yang umum adalah memaksa kontak mata, menghafalkan kapan harus tersenyum, menunggu orang lain selesai berbicara walau belum memahami maksudnya, atau meniru cara teman menyapa. Ada juga yang mengurangi gerakan tangan, menahan suara, menyembunyikan rasa tidak nyaman terhadap cahaya, atau tetap berada di acara sosial walau tubuh sudah memberi tanda kewalahan.'),
  p('Di sekolah, anak atau remaja dapat terlihat patuh dan tidak pernah mengeluh, tetapi baru menangis, diam, atau mengalami shutdown di rumah. Di tempat kerja, seseorang mungkin terlihat sangat terorganisasi karena menggunakan persiapan berlapis, lalu kehabisan energi untuk aktivitas dasar. Dalam pertemanan, ia bisa tampak aktif di grup, tetapi membutuhkan waktu lama untuk membalas pesan karena harus memilih respons yang tepat. Contoh ini bukan daftar gejala dan tidak boleh digunakan untuk mendiagnosis diri sendiri atau orang lain.'),
  fig('Dokumentasi/21 Jan 2026/20260121_115538.webp', 1200, 900, 'Suasana kegiatan bersama di lingkungan YUKA dengan beberapa orang duduk dan berinteraksi', 'Interaksi sosial yang suportif memberi kesempatan untuk berkomunikasi tanpa tuntutan agar semua orang mengikuti satu gaya yang sama.'),
  p('Orang tua dan pendidik dapat mengamati perbedaan antara perilaku saat seseorang merasa aman dan saat berada di lingkungan yang menuntut. Catatan sederhana tentang pemicu, energi sebelum dan sesudah kegiatan, serta strategi pemulihan sering lebih berguna daripada hanya menilai kepatuhan. Pendekatan ini sejalan dengan prinsip <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a> dan dukungan individual dalam <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>.'),

  '<h2 id="bukan-diagnosis">Camouflaging bukan alat diagnosis</h2>',
  p('Camouflaging tidak tercantum sebagai diagnosis terpisah dan belum memiliki satu alat klinis yang dapat digunakan sendirian untuk menentukan autisme. Penelitian memakai kuesioner atau ukuran yang berbeda, sedangkan asesmen klinis mempertimbangkan pola perkembangan dan fungsi secara lebih luas. National Institute for Health and Care Excellence atau NICE merekomendasikan agar penilaian autisme pada orang dewasa memperhatikan riwayat sejak masa kanak-kanak, kesulitan sosial, komunikasi, perilaku berulang, kondisi kesehatan mental, serta sensitivitas sensorik.'),
  p('Karena itu, seseorang tidak perlu membuktikan bahwa dirinya melakukan camouflaging agar layak didengarkan. Sebaliknya, pengalaman camouflaging dapat menjadi informasi penting yang dibawa saat berkonsultasi. Catat situasi yang paling menguras energi, perubahan yang sulit, kebutuhan sensorik, cara berkomunikasi yang nyaman, dan dampaknya pada pendidikan atau pekerjaan. Artikel <a href="/artikel/asesmen-abk">asesmen ABK</a> dan <a href="/artikel/langkah-langkah-deteksi-dini-tumbuh-kembang-anak">langkah deteksi dini tumbuh kembang</a> dapat menjadi bacaan pengantar, tetapi bukan pengganti asesmen langsung.'),
  p('Hindari kesimpulan seperti wanita yang pandai berbicara tidak mungkin autistik atau wanita yang memiliki kecemasan pasti sedang camouflaging. Dua kondisi dapat muncul bersamaan, tetapi hubungan keduanya harus dinilai secara individual. Sumber penelitian juga memiliki keterbatasan, misalnya sampel dewasa tanpa disabilitas intelektual dan desain potong lintang. Hasil penelitian tidak boleh diubah menjadi angka risiko pribadi tanpa pemeriksaan yang sesuai.'),

  '<h2 id="dampak">Dampak pada energi dan kesehatan mental</h2>',
  p('Dampak camouflaging sangat beragam. Sebagian orang merasa strategi tertentu membantu mendapatkan akses pendidikan, pekerjaan, atau pertemanan. Namun, penggunaan yang terus menerus dapat menimbulkan beban kognitif karena seseorang harus memantau ucapan, ekspresi, gerakan, suara, dan respons orang lain secara bersamaan. Setelah interaksi, ia mungkin membutuhkan waktu tenang, tidur lebih lama, atau tidak mampu melakukan tugas rutin.'),
  p('Studi yang tersedia menemukan hubungan antara tingkat camouflaging dengan gejala kecemasan, depresi, atau kecemasan sosial pada sebagian kelompok autistik. Hubungan tersebut tidak otomatis membuktikan sebab akibat. Ada juga penelitian yang menemukan hasil berbeda ketika peserta diikuti lebih lama. Kesimpulan paling aman adalah camouflaging perlu dibahas sebagai salah satu faktor yang mungkin memengaruhi beban hidup, bukan sebagai satu-satunya penyebab kesehatan mental yang memburuk.'),
  fig('Dokumentasi/21 Jan 2026/20260121_115544.webp', 1200, 900, 'Area terbuka YUKA dengan kursi dan suasana yang dapat digunakan untuk jeda setelah kegiatan', 'Jeda pemulihan bukan kemunduran. Waktu tenang dapat membantu seseorang memulihkan energi setelah tuntutan sosial dan sensorik.'),
  p('Perhatikan tanda seperti sakit kepala, sulit tidur, mudah marah, penurunan kemampuan berbicara, menarik diri, atau merasa tidak mengenali diri sendiri. Pada anak, perubahan bisa tampak sebagai ledakan emosi setelah pulang, penolakan sekolah, atau kebutuhan untuk mengulang rutinitas tertentu. Dukungan kesehatan mental dapat membantu, termasuk membaca <a href="/artikel/kesehatan-mental-remaja-berkebutuhan-khusus">kesehatan mental remaja berkebutuhan khusus</a> dan <a href="/artikel/mengelola-stres-orang-tua-anak-abk">cara mengelola stres orang tua</a>.'),

  '<h2 id="asesmen">Bagaimana proses asesmen yang lebih menyeluruh?</h2>',
  p('Asesmen yang baik tidak berhenti pada kesan seseorang selama satu jam. Tenaga profesional biasanya menggali riwayat perkembangan, pengalaman sosial, komunikasi, pola minat, fleksibilitas terhadap perubahan, kebutuhan sensorik, kesehatan mental, dan dampak pada aktivitas harian. Informasi dari orang tua atau orang yang mengenal masa kecil dapat membantu, terutama bila seseorang sudah lama belajar menyembunyikan kesulitannya.'),
  p('Sebelum konsultasi, buat catatan dengan bahasa konkret. Contohnya, tulis bahwa rapat selama satu jam membuat tubuh sangat lelah dan memerlukan dua jam tanpa percakapan, bukan hanya menulis bahwa seseorang tidak suka bersosialisasi. Catat pula strategi yang dipakai, kapan strategi itu gagal, serta dukungan yang membuat aktivitas lebih mudah. Jika tersedia, bawa laporan sekolah, catatan perkembangan, atau riwayat layanan sebelumnya.'),
  p('Tenaga profesional perlu menjelaskan batasan asesmen dan kemungkinan kondisi lain. Autisme dapat hadir bersama ADHD, gangguan kecemasan, depresi, gangguan tidur, atau kondisi sensorik. Artikel <a href="/artikel/diagnosis-adhd-di-indonesia">diagnosis ADHD di Indonesia</a> dan <a href="/artikel/perbedaan-adhd-dan-autis-pada-anak">perbedaan ADHD dan autisme</a> dapat membantu keluarga menyiapkan pertanyaan, tetapi tidak menentukan hasil pemeriksaan. Jika akses layanan sulit, mulai dari dokter, psikolog, atau klinik tumbuh kembang yang memiliki pengalaman menangani kebutuhan individu.'),

  '<h2 id="dukungan">Dukungan di rumah, sekolah, dan tempat kerja</h2>',
  p('Dukungan yang efektif mengurangi kebutuhan untuk terus menerus menyesuaikan diri. Di rumah, keluarga dapat menerima bahwa seseorang membutuhkan waktu tenang, cara bicara yang lebih langsung, atau pemberitahuan sebelum jadwal berubah. Jangan memaksa kontak mata, ekspresi tertentu, atau percakapan panjang sebagai ukuran sopan santun. Tanyakan kebutuhan dengan pilihan sederhana, misalnya apakah lebih nyaman menjawab lisan, tulisan, atau setelah mendapat waktu berpikir.'),
  p('Di sekolah, guru dapat menyediakan instruksi tertulis, jadwal visual, ruang jeda, dan cara meminta bantuan tanpa harus berbicara di depan kelas. Nilai pemahaman dan kemampuan, bukan hanya kontak mata atau kemampuan tampil spontan. Di tempat kerja, dukungan dapat berupa agenda rapat, komunikasi tertulis, jeda sensorik, pencahayaan yang lebih nyaman, atau fleksibilitas saat seseorang memerlukan pemulihan. Penyesuaian harus dibicarakan dengan individu, karena kebutuhan setiap orang berbeda.'),
  fig('Dokumentasi/21 Jan 2026/20260121_115548.webp', 1200, 900, 'Ruang belajar dan aktivitas YUKA dengan meja, kursi, dan perlengkapan kegiatan yang tertata', 'Penataan ruang, instruksi yang jelas, dan pilihan jeda dapat membantu menciptakan lingkungan belajar yang lebih ramah bagi berbagai cara berkomunikasi.'),
  p('Bagi pendidik, strategi <a href="/artikel/strategi-mengajar-anak-autis-di-kelas">mengajar anak autis di kelas</a>, <a href="/artikel/cara-membuat-jadwal-visual-untuk-anak-autis">jadwal visual</a>, dan <a href="/artikel/classroom-management-kelas-inklusi">manajemen kelas inklusi</a> dapat menjadi titik awal. Bagi keluarga, fokus utama adalah membangun hubungan yang aman. Seseorang sebaiknya tidak perlu terlihat lebih neurotipikal untuk mendapatkan pertolongan.'),

  '<h2 id="batas">Melepas camouflaging dengan aman</h2>',
  p('Melepas camouflaging bukan berarti berhenti memakai semua strategi sosial atau membuka diagnosis kepada semua orang. Prosesnya lebih aman bila dimulai dari situasi yang rendah risiko dan bersama orang yang dapat dipercaya. Seseorang dapat mencoba membiarkan gerakan regulasi diri yang aman, memakai headphone, menjawab pesan setelah jeda, atau menyampaikan kebutuhan secara lebih langsung. Tujuannya adalah menambah pilihan, bukan membuat diri rentan terhadap ejekan, diskriminasi, atau bahaya.'),
  p('Buat peta lingkungan. Tandai tempat yang membuat tubuh lebih tenang, orang yang dapat menjadi pendukung, tanda awal kewalahan, dan cara keluar dari situasi. Gunakan prinsip energi: aktivitas yang sangat menguras perlu diimbangi dengan kegiatan yang memulihkan. Jika perubahan membuat kecemasan meningkat, lakukan perlahan dan pertimbangkan dukungan psikolog atau konselor yang memahami autisme dan neurodivergensi.'),
  fig('Dokumentasi/gbp/yuka-03.jpg', 1209, 907, 'Suasana ruang YUKA yang terang dengan area duduk dan perlengkapan kegiatan', 'Lingkungan yang menerima perbedaan memberi ruang bagi seseorang untuk berkomunikasi dan mengatur diri tanpa harus terus menerus menyembunyikan kebutuhan.'),
  p('Keluarga juga perlu menghindari bahasa yang menyalahkan. Jangan menyebut seseorang mencari perhatian hanya karena baru menunjukkan kelelahan di rumah. Baca juga <a href="/artikel/menerima-diagnosis-anak-abk">cara menerima diagnosis anak ABK</a> dan <a href="/artikel/tips-mendampingi-anak-autis">tips mendampingi anak autis</a> untuk memahami bahwa penerimaan dibangun melalui tindakan sehari-hari, bukan sekadar label.'),

  '<h2 id="bantuan">Kapan perlu mencari bantuan?</h2>',
  p('Cari bantuan profesional bila kelelahan, kecemasan, depresi, gangguan tidur, atau penarikan diri mulai mengganggu sekolah, pekerjaan, hubungan, makan, atau perawatan diri. Pada anak, konsultasikan perubahan perilaku yang menetap, penolakan sekolah, kehilangan kemampuan yang sebelumnya ada, atau ledakan emosi yang membahayakan diri. Jangan menunggu sampai seseorang benar-benar kehabisan energi untuk meminta dukungan.'),
  p('Jika ada pembicaraan tentang menyakiti diri, keinginan untuk tidak hidup, atau bahaya yang segera terjadi, utamakan keselamatan. Dampingi orang tersebut, jauhkan benda berbahaya bila aman dilakukan, dan hubungi layanan gawat darurat atau fasilitas kesehatan terdekat. Artikel edukasi tidak dapat menggantikan pertolongan darurat. Untuk berdiskusi tentang layanan pendidikan dan pendampingan YUKA, gunakan halaman <a href="/kontak">kontak YUKA</a>.'),
  p('Kesimpulannya, camouflaging autisme pada wanita adalah pengalaman yang perlu didengarkan dengan hati-hati, bukan label untuk menilai seseorang. Penelitian memberi petunjuk bahwa strategi ini dapat memiliki manfaat sekaligus biaya. Lingkungan yang menerima perbedaan, asesmen yang menyeluruh, dan dukungan yang sesuai kebutuhan dapat mengurangi tekanan untuk terus menerus terlihat baik-baik saja.'),

  '<h2 id="faq">Pertanyaan yang Sering Diajukan</h2>',
  ...faq.flatMap((f) => [`<h3>${f.q}</h3>`, p(f.a)]),
];

const article = {
  slug,
  titleTag: 'Camouflaging Autisme pada Wanita | YUKA Indonesia',
  metaDesc: 'Camouflaging autisme pada wanita adalah strategi menyamarkan ciri autisme. Kenali contoh, dampak, batas diagnosis, dan dukungan yang lebih aman.',
  keywords: 'camouflaging autisme pada wanita, masking autisme, autisme perempuan, social camouflaging, kesehatan mental autisme',
  ogTitle: 'Camouflaging Autisme pada Wanita',
  ogDesc: 'Penjelasan berbasis sumber tentang camouflaging autisme pada wanita, dampak, asesmen, dan dukungan yang aman.',
  h1: 'Camouflaging Autisme pada Wanita: Makna, Contoh, dan Dampaknya',
  crumb: 'Camouflaging Autisme pada Wanita',
  category: 'Pendidikan',
  datePublished: '2026-11-16T08:00:00+07:00',
  dateModified: '2026-11-16T08:00:00+07:00',
  dateDisplay: '16 November 2026',
  readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: 'Dokumentasi/gbp/yuka-cover.jpg',
    w: 1600,
    h: 900,
    alt: 'Suasana lingkungan YUKA yang tertata dengan area kegiatan dan pepohonan di sekitarnya',
    caption: 'Lingkungan yang aman dan menerima perbedaan membantu mengurangi tekanan untuk terus menerus menyamarkan kebutuhan.',
    credit,
  },
  bodyHtml: body.join('\n'),
  faq,
  related: [
    { href: '/artikel/autisme-adalah', title: 'Autisme Adalah', desc: 'Pengantar tentang autisme dan cara memahami spektrumnya.' },
    { href: '/artikel/kesehatan-mental-remaja-berkebutuhan-khusus', title: 'Kesehatan Mental Remaja Berkebutuhan Khusus', desc: 'Tanda tekanan mental dan pentingnya dukungan yang sesuai.' },
    { href: '/artikel/strategi-mengajar-anak-autis-di-kelas', title: 'Strategi Mengajar Anak Autis di Kelas', desc: 'Ide penyesuaian kelas agar anak dapat belajar dengan aman.' },
  ],
  tags: ['Autisme', 'Wanita', 'Kesehatan Mental'],
  sources: [
    { url: 'https://www.autism.org.uk/advice-and-guidance/behaviour/masking', label: 'National Autistic Society, Masking' },
    { url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5536256/', label: 'Lai dkk., Quantifying and exploring camouflaging in men and women with autism' },
    { url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7885456/', label: 'Bradley dkk., Is social camouflaging associated with anxiety and depression in autistic adults?' },
    { url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC8992917/', label: 'Pearson dan Rose, Autistic Adults experiences of camouflaging and its perceived impact on mental health' },
    { url: 'https://www.nice.org.uk/guidance/cg142/chapter/Recommendations', label: 'NICE, Autism spectrum disorder in adults: diagnosis and management' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 16 November 2026. Studi camouflaging memiliki keterbatasan sampel dan sebagian besar tidak membuktikan hubungan sebab akibat. Artikel ini bersifat edukasi umum, bukan diagnosis atau pengganti konsultasi profesional.',
};

const rendered = renderArticlePage(article)
  .replace(/\n[ \t]+\n<!-- MEDICAL_REVIEW_STATUS:/, '\n<!-- MEDICAL_REVIEW_STATUS:')
  .replace(
    '<article class="article-content">',
    '<article class="article-content" data-revision-marker="yuka-autopilot-20261116-e7ZJYXut-v1">',
  );
fs.writeFileSync(path.join(articleDir, `${slug}.html`), rendered);
console.log(`Rendered artikel/${slug}.html`);
console.log(`Words source body: ${rendered.match(/<article class="article-content"[\s\S]*?<\/article>/)?.[0].replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length || 0}`);

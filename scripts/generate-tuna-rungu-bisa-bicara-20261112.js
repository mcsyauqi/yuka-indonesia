'use strict';
// Artikel klaster tuna rungu, slot berikutnya 12 November 2026.
// Satu artikel disiapkan per slot harian sesuai daily-cap.js.
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags, SITE } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'tuna-rungu-bisa-bicara';
const DATE = '2026-11-12';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const image = (file, alt, caption) => {
  const size = imageSize(path.join(ROOT, file));
  return { file, w: size.w, h: size.h, alt, caption, credit: CREDIT };
};
const fig = (file, alt, caption) => {
  const size = imageSize(path.join(ROOT, file));
  return `<figure class="article-inline-image"><img src="../${file}" alt="${alt}" loading="lazy" width="${size.w}" height="${size.h}"><figcaption>${caption} <span class="kredit">${CREDIT}</span></figcaption></figure>`;
};
const p = (text) => `<p>${text}</p>`;
const h2 = (id, text) => `<h2 id="${id}">${text}</h2>`;
const h3 = (text) => `<h3>${text}</h3>`;
const ol = (items) => `<ol>${items.map((x) => `<li>${x}</li>`).join('')}</ol>`;

const hero = image(
  'Dokumentasi/museum-gunung-merapi-kelompok-anak-foto-bersama-mall-049.webp',
  'Sekelompok anak dan pendamping YUKA berfoto bersama dalam kunjungan edukasi di museum',
  'Dokumentasi kegiatan kelompok YUKA dalam kunjungan edukasi. Foto ini bukan dokumentasi pemeriksaan pendengaran atau terapi bicara.'
);
const bodyImages = {
  home: 'Dokumentasi/cpao-anak-bermain-di-rumah-058.webp',
  family: 'Dokumentasi/museum-gunung-merapi-keluarga-besar-foto-bersama-istana-024.webp',
  group: 'Dokumentasi/candi-plaosan-anak-anak-wisata-candi-borobudur-003.webp',
  activity: 'Dokumentasi/candi-plaosan-wisatawan-berpose-candi-borobudur-029.webp',
};

const faq = [
  { q: 'Apakah anak tuna rungu pasti tidak bisa bicara?', a: 'Tidak. Kemampuan bicara setiap anak berbeda. Faktor yang berpengaruh antara lain derajat dan jenis gangguan pendengaran, usia saat gangguan ditemukan, akses anak terhadap bahasa, alat bantu yang sesuai, serta dukungan keluarga dan tenaga profesional. Sebagian anak mengembangkan komunikasi lisan, sebagian memakai bahasa isyarat, dan sebagian menggunakan beberapa cara sekaligus.' },
  { q: 'Apakah alat bantu dengar membuat anak langsung bisa bicara?', a: 'Tidak langsung. Alat bantu dengar dapat membantu suara terdengar bila memang sesuai dengan jenis gangguan dan diprogram dengan tepat, tetapi anak tetap membutuhkan akses bahasa, latihan komunikasi, lingkungan yang responsif, dan pemantauan berkala. Alat bantu bukan jaminan otomatis bahwa ucapan anak akan berkembang seperti anak yang mendengar.' },
  { q: 'Apakah implan koklea wajib untuk anak tuna rungu?', a: 'Tidak. Implan koklea adalah salah satu pilihan untuk kondisi tertentu dan harus dibahas melalui evaluasi tim medis. Tidak semua anak memerlukannya atau cocok dengannya. Keluarga perlu mendapat penjelasan mengenai manfaat, keterbatasan, proses rehabilitasi, risiko, biaya, dan pilihan komunikasi lain sebelum mengambil keputusan.' },
  { q: 'Apakah bahasa isyarat menghambat anak belajar bicara?', a: 'Tidak ada dasar untuk menganggap bahasa isyarat sebagai penghambat otomatis. Bahasa isyarat memberi anak akses bahasa yang dapat dipahami dan digunakan sejak dini. Pilihan komunikasi dapat berupa bahasa isyarat, bahasa lisan, tulisan, atau kombinasi, sesuai kebutuhan anak dan hasil diskusi bersama keluarga serta profesional.' },
  { q: 'Kapan anak tuna rungu perlu diperiksa pendengarannya?', a: 'Sesegera mungkin bila ada kekhawatiran, riwayat faktor risiko, atau anak tidak mencapai respons suara dan perkembangan komunikasi yang diharapkan. Sasaran deteksi dan intervensi pendengaran dini yang banyak dipakai adalah skrining sebelum usia 1 bulan, pemeriksaan diagnostik sebelum 3 bulan bila tidak lolos, dan intervensi sebelum 6 bulan. Anak yang lebih besar tetap perlu diperiksa bila muncul perubahan.' },
  { q: 'Bagaimana orang tua membantu anak mengembangkan komunikasi di rumah?', a: 'Gunakan cara komunikasi yang dapat diakses anak, hadap anak saat berbicara atau berisyarat, pastikan pencahayaan cukup, beri waktu untuk merespons, dan ulangi pesan dengan kalimat sederhana. Jadikan kegiatan makan, mandi, bermain, dan membaca sebagai kesempatan berbahasa tanpa memaksa anak mengulang suara terus-menerus.' },
  { q: 'Apakah anak tuna rungu bisa sekolah di sekolah inklusi?', a: 'Bisa, bila sekolah mampu menyediakan akses dan akomodasi yang sesuai. Dukungan dapat berupa tempat duduk yang membantu melihat guru, materi tertulis atau visual, guru pendamping khusus, juru bahasa isyarat atau juru catat bila dibutuhkan, serta komunikasi rutin dengan keluarga. SLB juga merupakan pilihan yang sah dan perlu dibandingkan berdasarkan kebutuhan anak.' },
];

const faqHtml = `<div class="faq-list">${h2('faq', 'Pertanyaan yang Sering Diajukan tentang Anak Tuna Rungu Bisa Bicara')}${faq.map((f) => `${h3(f.q)}${p(f.a)}`).join('')}</div>`;

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> anak tuna rungu bisa mengembangkan kemampuan bicara, tetapi hasilnya tidak sama pada setiap anak dan tidak boleh dijanjikan secara otomatis. Perkembangan komunikasi dipengaruhi oleh jenis serta derajat gangguan pendengaran, usia saat ditemukan, akses terhadap bahasa sejak dini, penggunaan alat bantu bila sesuai, intervensi yang tepat, dan dukungan keluarga. Bahasa lisan bukan satu-satunya ukuran keberhasilan. Bahasa isyarat, tulisan, gestur, dan komunikasi multimodal juga dapat menjadi bahasa yang bermakna bagi anak.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#jawaban">Mengapa jawabannya tidak sama untuk semua anak</a></li><li><a href="#faktor">Faktor yang memengaruhi kemampuan bicara</a></li><li><a href="#bahasa">Akses bahasa sebelum latihan bicara</a></li><li><a href="#alat">Alat bantu dengar dan implan koklea</a></li><li><a href="#intervensi">Intervensi komunikasi dan terapi</a></li><li><a href="#rumah">Peran keluarga di rumah</a></li><li><a href="#sekolah">Dukungan sekolah inklusi atau SLB</a></li><li><a href="#pantau">Tanda perlu evaluasi ulang</a></li><li><a href="#ringkasan">Ringkasan keputusan dukungan</a></li><li><a href="#faq">Pertanyaan yang sering diajukan</a></li></ol></div>',

  h2('jawaban', 'Mengapa Jawabannya Tidak Sama untuk Semua Anak'),
  p('Istilah tuna rungu mencakup rentang kondisi yang luas. Ada anak yang masih dapat mendengar sebagian suara, ada yang memiliki hambatan pendengaran berat, dan ada yang tidak mendengar suara sama sekali. Gangguan dapat muncul sejak lahir, setelah lahir, atau berkembang kemudian. Karena itu, pertanyaan apakah anak tuna rungu bisa bicara tidak bisa dijawab hanya dengan label diagnosis.'),
  p('Kemampuan bicara juga terdiri dari beberapa bagian. Anak perlu memiliki akses terhadap bahasa, memahami makna kata, membentuk kalimat, mengatur napas dan suara, serta berlatih memakai komunikasi dalam situasi nyata. Seorang anak dapat memiliki suara yang jelas tetapi masih kesulitan memahami percakapan cepat. Anak lain mungkin memakai bahasa isyarat dengan lancar tetapi belum memilih komunikasi lisan. Keduanya tetap memiliki kemampuan komunikasi.'),
  p('Pandangan yang lebih tepat adalah menanyakan akses komunikasi apa yang paling efektif untuk anak saat ini. Organisasi Kesehatan Dunia menjelaskan bahwa rehabilitasi pendengaran dapat mencakup alat bantu dengar, implan koklea, teknologi pendukung, terapi bahasa, serta bahasa isyarat. Kebutuhan setiap anak perlu dibahas secara individual, bukan dibandingkan dengan target anak lain.'),
  p('Untuk mengenal istilah dan jenis hambatan pendengaran, baca juga artikel <a href="tuna-rungu-adalah">tuna rungu adalah</a>. Jika pertanyaan keluarga berkaitan dengan peluang pemulihan, artikel <a href="apakah-tuna-rungu-bisa-sembuh">apakah tuna rungu bisa sembuh</a> membahasnya secara terpisah tanpa memberikan janji hasil.'),
  fig(bodyImages.home, 'Anak dan pendamping bermain bersama di rumah dalam dokumentasi kegiatan YUKA', 'Kegiatan bermain di rumah dapat menjadi kesempatan membangun komunikasi yang aman, berulang, dan menyenangkan. Foto ini dokumentasi kegiatan YUKA, bukan sesi terapi klinis.'),

  h2('faktor', 'Faktor yang Memengaruhi Kemampuan Bicara Anak Tuna Rungu'),
  p('Faktor pertama adalah jenis dan derajat gangguan pendengaran. Gangguan konduktif, sensorineural, dan campuran memiliki mekanisme yang berbeda. Sebagian gangguan konduktif dapat ditangani secara medis, sedangkan gangguan sensorineural dapat memerlukan strategi rehabilitasi dan dukungan komunikasi yang berbeda. Hanya pemeriksaan audiologi dan evaluasi tenaga kesehatan yang dapat menjelaskan kondisi anak secara memadai.'),
  p('Faktor kedua adalah usia saat gangguan ditemukan dan usia saat anak mendapat akses terhadap bahasa. Bayi belajar memahami pola komunikasi jauh sebelum mengucapkan kata. Bila akses terhadap bahasa tertunda, anak mungkin membutuhkan waktu lebih panjang untuk mengejar pemahaman dan kosakata. Menemukan gangguan lebih awal memberi keluarga kesempatan lebih cepat untuk memilih alat bantu, bahasa, dan intervensi yang sesuai.'),
  p('Faktor ketiga adalah konsistensi akses. Alat bantu yang rusak, baterai habis, ruang terlalu bising, wajah pembicara tidak terlihat, atau guru berbicara sambil membelakangi anak dapat mengurangi informasi yang diterima. Masalah ini bukan semata kemampuan anak. Lingkungan juga perlu dibuat lebih mudah diakses.'),
  p('Faktor keempat adalah dukungan komunikasi yang tepat. Anak dapat memakai bahasa lisan, bahasa isyarat, tulisan, membaca ujaran, gestur, atau kombinasi beberapa cara. Akses bahasa tidak seharusnya ditunda hanya karena keluarga berharap anak kelak berbicara. Anak membutuhkan bahasa yang dapat ia gunakan sekarang untuk memahami, meminta bantuan, bermain, dan menyampaikan perasaan.'),
  p('Faktor kelima adalah kesehatan dan perkembangan lain yang menyertai. Kondisi penglihatan, motorik, atensi, perkembangan kognitif, kesehatan mulut, dan pengalaman emosional dapat memengaruhi komunikasi. Karena itu, evaluasi yang baik tidak hanya mendengar suara anak, tetapi juga melihat fungsi komunikasinya dalam kehidupan sehari-hari. Bila ada kondisi penyerta seperti <a href="down-syndrome-adalah">down syndrome</a>, sampaikan seluruh riwayat kepada tim pemeriksa.'),
  fig(bodyImages.family, 'Anak-anak dan pendamping berfoto bersama dalam kegiatan edukasi kelompok YUKA', 'Dukungan orang dewasa dan teman sebaya membantu anak berlatih komunikasi dalam situasi sosial. Foto ini dokumentasi kegiatan kelompok YUKA.'),

  h2('bahasa', 'Akses Bahasa Lebih Dulu, Latihan Bicara Mengikuti'),
  p('Bahasa dan bicara tidak identik. Bahasa adalah sistem untuk memahami dan menyampaikan makna, sedangkan bicara adalah salah satu cara menghasilkan bahasa melalui suara. Anak tuna rungu tetap membutuhkan bahasa yang dapat diakses, walaupun cara penyampaiannya tidak selalu melalui suara.'),
  p('Bila keluarga memilih bahasa isyarat, orang tua dan saudara perlu belajar menggunakannya secara konsisten. Bila anak menggunakan alat bantu dan mengembangkan bahasa lisan, keluarga tetap dapat memakai gestur, tulisan, gambar, atau isyarat pendukung ketika situasi bising atau anak lelah. Komunikasi multimodal membuat anak tidak kehilangan pesan hanya karena satu saluran sedang sulit digunakan.'),
  p('Bahasa isyarat bukan sekadar kumpulan gerakan tangan. Bahasa isyarat memiliki aturan, kosakata, dan komunitas penutur. Di Indonesia, keluarga dapat menemukan pembahasan tentang BISINDO dan SIBI melalui artikel <a href="bahasa-isyarat-tuna-rungu">bahasa isyarat tuna rungu</a>. Pilihan sistem sebaiknya dibicarakan bersama komunitas Tuli, guru, dan tenaga profesional agar keluarga tidak hanya mempelajari tanda secara terpisah. Bila anak juga menjalani <a href="terapi-wicara">terapi wicara</a>, targetnya perlu diselaraskan dengan akses bahasa yang digunakan di rumah.'),
  p('Di rumah, berikan komentar bahasa selama kegiatan sehari-hari. Saat menyiapkan makanan, tunjukkan benda dan tindakan. Saat membaca buku, tunjuk gambar, gunakan isyarat atau kata, lalu tunggu respons. Saat anak menunjuk sesuatu, tanggapi maksudnya dan kembangkan menjadi pesan yang sedikit lebih lengkap. Pola berulang ini membantu anak memahami bahwa komunikasi punya tujuan nyata.'),
  p('Jangan menilai perkembangan hanya dari jumlah kata yang bisa diucapkan. Catat apakah anak dapat meminta, menolak, memilih, menjawab, menceritakan pengalaman, memahami aturan, dan mencari bantuan. Fungsi komunikasi tersebut lebih dekat dengan kebutuhan hidup sehari-hari dibanding kemampuan mengulang daftar kata.'),

  h2('alat', 'Alat Bantu Dengar dan Implan Koklea'),
  p('Alat bantu dengar memperkuat suara yang masuk ke telinga, tetapi tidak mengembalikan pendengaran normal. Manfaatnya bergantung pada jenis gangguan, sisa pendengaran, kecocokan perangkat, pengaturan, kondisi telinga, dan cara anak memakainya. Anak juga perlu lingkungan yang mendukung, bukan hanya perangkat di telinga.'),
  p('Implan koklea bekerja dengan cara berbeda dan hanya dipertimbangkan pada kondisi tertentu setelah evaluasi yang lengkap. Keputusan tidak boleh dibuat berdasarkan testimoni singkat atau janji bahwa anak pasti akan bicara. Tim yang menangani biasanya perlu menilai pendengaran, kesehatan, perkembangan, kesiapan keluarga, ekspektasi, dan rencana rehabilitasi setelah tindakan.'),
  '<table class="article-table"><caption>Pertanyaan sebelum memilih dukungan pendengaran dan komunikasi</caption><thead><tr><th>Hal yang dinilai</th><th>Pertanyaan untuk tenaga profesional</th></tr></thead><tbody><tr><td>Kondisi pendengaran</td><td>Jenis, derajat, dan pola gangguan anak seperti apa, serta apakah berubah dari waktu ke waktu?</td></tr><tr><td>Akses suara</td><td>Seberapa besar manfaat alat bantu untuk mendengar percakapan dan suara lingkungan?</td></tr><tr><td>Akses bahasa</td><td>Bahasa apa yang dapat dipakai anak sekarang agar tidak menunggu terlalu lama untuk berkomunikasi?</td></tr><tr><td>Rencana dukungan</td><td>Siapa yang memantau perangkat, latihan, perkembangan bahasa, dan penyesuaian sekolah?</td></tr><tr><td>Ekspektasi</td><td>Hasil apa yang realistis dalam beberapa bulan, dan tanda apa yang menunjukkan rencana perlu diubah?</td></tr></tbody></table>',
  p('Keluarga sebaiknya menyimpan hasil audiogram, catatan pemeriksaan, jadwal kontrol, dan informasi perangkat. Data tersebut membantu guru serta terapis memahami kebutuhan anak. Bila perangkat tidak nyaman atau anak sering melepasnya, cari penyebabnya bersama profesional. Jangan memaksa atau mengubah pengaturan sendiri.'),

  h2('intervensi', 'Intervensi Komunikasi dan Terapi'),
  p('Intervensi komunikasi adalah rangkaian dukungan agar anak dapat memahami dan menyampaikan pesan dengan lebih efektif. Bentuknya dapat mencakup terapi wicara dan bahasa, latihan mendengar, pembelajaran bahasa isyarat, bimbingan keluarga, dukungan pendidikan, dan penyesuaian teknologi. Tidak semua anak membutuhkan kombinasi yang sama.'),
  p('Terapi wicara dapat membantu produksi suara, artikulasi, pemahaman bahasa, atau penggunaan komunikasi dalam percakapan. Terapis perlu mengetahui hasil pemeriksaan pendengaran dan cara komunikasi yang dipilih keluarga. Target terapi harus konkret, misalnya mampu meminta bantuan saat bermain, bukan sekadar mengejar pengucapan suara tertentu.'),
  p('Latihan mendengar, bila direkomendasikan, perlu dilakukan dalam tahapan yang sesuai. Anak mungkin belajar menyadari ada suara, membedakan suara, menghubungkan suara dengan makna, lalu memakai informasi itu dalam percakapan. Proses tersebut memerlukan pengulangan dan waktu. Hasil yang lambat tidak otomatis berarti anak gagal.'),
  p('Bahasa isyarat dan komunikasi visual dapat berjalan bersama dukungan bicara. Penelitian dan pedoman profesional yang dirujuk ASHA menekankan pentingnya keputusan yang berpusat pada keluarga dan akses bahasa yang konsisten. Orang tua berhak mendapat penjelasan yang seimbang mengenai pilihan, manfaat, keterbatasan, dan kebutuhan dukungan jangka panjang.'),
  p('Buat rencana sederhana bersama tim pendukung. Tentukan sasaran tiga bulan, cara mengukurnya, orang yang bertanggung jawab, serta kapan hasil ditinjau. Misalnya, anak dapat mengikuti instruksi dua langkah memakai kombinasi isyarat dan gambar dalam empat dari lima kesempatan. Sasaran yang terukur lebih membantu daripada kalimat umum seperti anak harus cepat bicara. Proses pemetaan kebutuhan dapat dimulai melalui <a href="asesmen-abk">asesmen anak berkebutuhan khusus</a> yang melibatkan keluarga dan sekolah.'),
  fig(bodyImages.group, 'Anak-anak dan pendamping berdiri bersama dalam dokumentasi kunjungan edukasi YUKA', 'Latihan komunikasi juga terjadi saat anak berinteraksi dengan teman dan pendamping di luar ruang terapi. Foto ini dokumentasi kegiatan YUKA, bukan bukti hasil terapi.'),

  h2('rumah', 'Peran Keluarga dalam Mengembangkan Komunikasi'),
  p('Keluarga adalah lingkungan komunikasi yang paling sering ditemui anak. Beberapa kebiasaan kecil dapat membuat pesan lebih mudah diterima. Panggil perhatian anak sebelum berbicara atau berisyarat, hadap wajahnya, pastikan cahaya cukup, kurangi suara latar, dan beri waktu untuk menyelesaikan respons. Jangan langsung menyelesaikan kalimat anak.'),
  ol([
    '<strong>Gunakan rutinitas.</strong> Ulangi kata, isyarat, atau gambar yang sama ketika kegiatan yang sama dilakukan sehingga anak memahami hubungan antara pesan dan pengalaman.',
    '<strong>Berikan pilihan.</strong> Tawarkan dua benda atau aktivitas, lalu tunggu anak menunjuk, memberi isyarat, menulis, atau mengucapkan pilihan.',
    '<strong>Perluas pesan.</strong> Bila anak menunjuk bola, orang tua dapat menambahkan pesan bola merah atau mau bermain bola tanpa memaksa anak menirukan.',
    '<strong>Baca buku bersama.</strong> Gunakan gambar, ekspresi, tulisan, dan isyarat. Tanyakan siapa, apa, di mana, dan mengapa sesuai kemampuan anak.',
    '<strong>Catat kemajuan.</strong> Simpan contoh komunikasi baru dan situasi ketika anak lebih mudah memahami pesan.',
    '<strong>Jaga interaksi tetap menyenangkan.</strong> Permainan, memasak, berjalan, dan merapikan barang dapat menjadi latihan komunikasi yang lebih bermakna daripada sesi panjang yang melelahkan.'
  ]),
  p('Hindari membandingkan anak dengan saudara atau anak lain. Perbandingan dapat membuat keluarga mengejar suara tertentu sambil mengabaikan kebutuhan anak untuk dipahami. Ukur kemajuan dari titik awal anak sendiri dan dari seberapa baik ia dapat berpartisipasi di rumah, sekolah, dan lingkungan sosial. Panduan <a href="dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a> dapat membantu keluarga membuat rutinitas dukungan yang konsisten.'),
  p('Bila keluarga berbeda pendapat tentang metode komunikasi, kembali ke pertanyaan utama: apakah anak mendapat akses bahasa yang jelas, aman, dan konsisten? Diskusikan bukti dan pengalaman bersama audiolog, terapis, guru, serta komunitas Tuli. Keputusan dapat dievaluasi dan disesuaikan seiring perkembangan anak.'),

  h2('sekolah', 'Dukungan Sekolah Inklusi atau SLB'),
  p('Anak tuna rungu dapat belajar di SLB maupun sekolah reguler penyelenggara pendidikan inklusif. Pilihan sekolah tidak boleh diputuskan dari label saja. Perhatikan akses komunikasi, kesiapan guru, ukuran kelas, akomodasi, teman sebaya, jarak, dan kemampuan sekolah bekerja sama dengan keluarga.'),
  p('Di kelas, guru dapat mengurangi hambatan dengan berdiri menghadap anak, memakai materi visual, menulis instruksi penting, mengatur pencahayaan, mengurangi kebisingan, dan memastikan anak dapat melihat siapa yang sedang berbicara. Bila dibutuhkan, sekolah dapat merencanakan juru bahasa isyarat, juru catat, atau pendamping sesuai asesmen dan peraturan yang berlaku.'),
  p('Orang tua perlu meminta pertemuan rutin untuk membahas tujuan komunikasi dan akademik. Sampaikan cara anak memahami pesan di rumah, alat bantu yang digunakan, tanda anak lelah mendengar, serta strategi yang efektif. Sekolah juga perlu memberi umpan balik yang konkret, bukan hanya menyebut anak kurang fokus.'),
  p('Untuk mengenal pilihan pendidikan lebih lanjut, baca <a href="slb-tuna-rungu">SLB tuna rungu</a>, <a href="pendidikan-inklusi">pendidikan inklusi</a>, dan <a href="cara-berkomunikasi-dengan-anak-tuna-rungu">cara berkomunikasi dengan anak tuna rungu</a>. Pendidikan yang baik membuka partisipasi anak, bukan memaksa semua anak mengikuti satu cara komunikasi.'),
  fig(bodyImages.activity, 'Anak-anak dan pendamping berpose bersama di area kunjungan edukasi YUKA', 'Lingkungan sosial yang ramah memberi kesempatan anak mempraktikkan komunikasi dan rasa percaya diri. Foto ini dokumentasi kegiatan YUKA.'),

  h2('pantau', 'Tanda Anak Memerlukan Evaluasi Ulang'),
  p('Rencana dukungan perlu ditinjau ulang bila anak tiba-tiba tidak merespons suara seperti biasanya, sering melepas alat bantu, tampak kesakitan, mengalami infeksi telinga, berhenti memakai kata atau isyarat yang sebelumnya dikuasai, atau kesulitan mengikuti percakapan di lingkungan yang sebelumnya mudah. Perubahan itu tidak selalu berarti pendengaran memburuk, tetapi perlu diperiksa.'),
  p('Bawa catatan situasi yang memicu kekhawatiran. Tulis kapan perubahan terlihat, apakah terjadi di rumah dan sekolah, apakah perangkat berfungsi, serta apakah ada sakit atau demam. Informasi ini membantu audiolog atau dokter mengarahkan pemeriksaan. Jangan menunda hanya karena anak masih dapat berbicara beberapa kata.'),
  p('Segera cari pertolongan medis bila anak mengalami nyeri telinga berat, keluar cairan berdarah, demam tinggi, cedera kepala, atau perubahan pendengaran yang mendadak. Artikel edukasi tidak dapat menggantikan pemeriksaan langsung. Bila anak memakai implan atau alat bantu khusus, ikuti jalur layanan yang diberikan oleh timnya.'),
  p('Keluarga juga perlu memperhatikan kesehatan emosional. Anak yang berulang kali tidak memahami percakapan dapat merasa tersisih, marah, atau menarik diri. Beri tahu guru dan anggota keluarga lain cara mengikutsertakan anak dalam percakapan. Memastikan anak paham adalah tanggung jawab lingkungan, bukan hanya tuntutan kepada anak.'),

  h2('ringkasan', 'Ringkasan Langkah untuk Keluarga'),
  p('Pertanyaan apakah anak tuna rungu bisa bicara sebaiknya diubah menjadi rencana dukungan yang dapat dilakukan. Pastikan anak memiliki akses bahasa sejak dini, lakukan pemeriksaan yang diperlukan, pilih alat bantu atau intervensi berdasarkan evaluasi, dan sediakan lingkungan komunikasi yang dapat diakses. Pantau kemampuan memahami serta menyampaikan pesan, bukan hanya kejernihan suara.'),
  '<table class="article-table"><caption>Urutan praktis mendukung komunikasi anak tuna rungu</caption><thead><tr><th>Langkah</th><th>Tujuan</th><th>Bukti kemajuan yang dapat dicatat</th></tr></thead><tbody><tr><td>Evaluasi pendengaran</td><td>Memahami jenis dan derajat gangguan</td><td>Hasil pemeriksaan, rekomendasi, dan jadwal kontrol tersimpan</td></tr><tr><td>Pilih akses bahasa</td><td>Memberi anak cara memahami dan menyampaikan pesan sekarang</td><td>Anak dapat meminta, menolak, memilih, dan mencari bantuan</td></tr><tr><td>Atur dukungan</td><td>Menghubungkan keluarga, profesional, dan sekolah</td><td>Ada sasaran tertulis serta pembagian peran yang jelas</td></tr><tr><td>Latih dalam rutinitas</td><td>Membawa komunikasi ke situasi nyata</td><td>Anak menggunakan pesan dalam bermain, makan, belajar, dan bersosialisasi</td></tr><tr><td>Tinjau berkala</td><td>Menyesuaikan rencana dengan perkembangan anak</td><td>Target diperbarui berdasarkan data, bukan perbandingan</td></tr></tbody></table>',
  p('Tidak ada satu jalur yang wajib untuk semua anak. Sebagian anak mengembangkan bicara, sebagian lebih kuat memakai bahasa isyarat, dan sebagian menggunakan keduanya. Yang paling penting adalah anak tidak menunggu tanpa bahasa, keluarga mendapat informasi yang seimbang, dan lingkungan memberi kesempatan anak untuk didengar serta dipahami.'),
  faqHtml,
].join('\n');

const medicalBlock = `<div class="article-provenance" data-revision-marker="yuka-tuna-rungu-bisa-bicara-20261111-v1" style="margin:2rem 0;padding:1.5rem;background:#FFFFFF;border:1px solid #DDE3F0;border-radius:10px;"><h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Tentang artikel ini</h3><ul style="margin:0.5rem 0 0;padding-left:1.25rem;font-size:0.95rem;line-height:1.85;color:#333;"><li><strong>Ditulis oleh:</strong> Tim YUKA (Yayasan Ukhuwah Kaffah Amanatullah), pengelola Sekolah Inklusi Taruna Imani, Sleman, Yogyakarta.</li><li><strong>Dasar rujukan:</strong> WHO, NIDCD, dan ASHA. Tautan sumber spesifik tersedia di bagian referensi.</li><li><strong>Terbit:</strong> 12 November 2026. <strong>Pembaruan terakhir:</strong> 12 November 2026.</li><!-- MEDICAL_REVIEW_STATUS:START --><li><strong>Status tinjauan medis:</strong> artikel ini adalah informasi edukasi umum dan <strong>belum ditinjau oleh dokter berlisensi</strong>. Untuk diagnosis, alat bantu, implan, atau terapi, konsultasikan dengan tenaga kesehatan dan audiolog.</li><!-- MEDICAL_REVIEW_STATUS:END --><li><strong>Kebijakan koreksi:</strong> bila menemukan klaim yang kurang tepat, beri tahu kami melalui <a href="/kontak">halaman kontak</a>.</li></ul></div>`;

const article = {
  slug,
  titleTag: 'Tuna Rungu Bisa Bicara? Faktor yang Memengaruhi | YUKA',
  metaDesc: 'Apakah anak tuna rungu bisa bicara? Kenali faktor pendengaran, akses bahasa, alat bantu, terapi, bahasa isyarat, dukungan keluarga, dan sekolah.',
  keywords: 'tuna rungu bisa bicara, anak tuna rungu bicara, anak tunarungu berbicara, bahasa isyarat, terapi wicara anak tuna rungu',
  ogTitle: 'Tuna Rungu Bisa Bicara? Ini Faktor yang Memengaruhinya',
  ogDesc: 'Panduan keluarga memahami perkembangan bicara dan komunikasi anak tuna rungu tanpa janji hasil yang berlebihan.',
  datePublished: DATE,
  dateModified: DATE,
  dateDisplay: '12 November 2026',
  readTime: '13 menit baca',
  category: 'Kesehatan',
  h1: 'Tuna Rungu Bisa Bicara? Faktor yang Memengaruhi Perkembangan Komunikasi Anak',
  crumb: 'Tuna Rungu Bisa Bicara',
  parent: { href: 'tuna-rungu-adalah', name: 'Tuna Rungu' },
  about: ['Tunarungu', 'Komunikasi anak', 'Gangguan pendengaran'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'tuna-rungu-adalah', title: 'Tuna Rungu Adalah', desc: 'Pengertian, jenis, ciri, dan cara berkomunikasi dengan anak tuna rungu.' },
    { href: 'bahasa-isyarat-tuna-rungu', title: 'Bahasa Isyarat Tuna Rungu', desc: 'Mengenal pilihan bahasa isyarat dan cara keluarga membangun akses bahasa.' },
    { href: 'cara-berkomunikasi-dengan-anak-tuna-rungu', title: 'Cara Berkomunikasi dengan Anak Tuna Rungu', desc: 'Panduan praktis membangun percakapan yang mudah diakses anak.' },
    { href: 'slb-tuna-rungu', title: 'SLB Tuna Rungu', desc: 'Pertimbangan memilih SLB atau sekolah inklusi untuk anak tuna rungu.' },
  ],
  tags: ['TunaRungu', 'KomunikasiAnak', 'BahasaIsyarat', 'PendidikanInklusi'],
  sources: [
    { url: 'https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss', label: 'WHO, Deafness and hearing loss' },

    { url: 'https://www.nidcd.nih.gov/health/your-babys-hearing-and-communicative-development-checklist', label: 'NIDCD, Your Baby\'s Hearing and Communicative Development Checklist' },
    { url: 'https://www.asha.org/public/hearing/children-with-hearing-loss/', label: 'ASHA, Children with Hearing Loss' },
  ],
  sourcesCheckedNote: 'Sumber resmi diperiksa pada 11 November 2026. Artikel ini tidak memberikan diagnosis, pilihan alat, atau rekomendasi terapi individual.',
  editorialHtml: medicalBlock,
};

let html = renderArticlePage(article);
const medicalPage = {
  '@context': 'https://schema.org', '@type': 'MedicalWebPage',
  '@id': `${SITE}/artikel/${slug}#medicalwebpage`, url: `${SITE}/artikel/${slug}`,
  name: article.h1, inLanguage: 'id-ID', publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE, dateModified: DATE, specialty: 'https://schema.org/Otolaryngologic',
  medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient', name: 'Orang tua, pengasuh, dan pendamping anak tuna rungu' },
  about: { '@type': 'MedicalCondition', name: 'Gangguan pendengaran pada anak', alternateName: 'Childhood hearing loss' },
  publishingPrinciples: { '@type': 'CreativeWork', name: 'Kebijakan Editorial YUKA', url: `${SITE}/kebijakan-editorial` },
};
const headEnd = html.indexOf('</head>');
html = html.slice(0, headEnd) + `    <script type="application/ld+json">${JSON.stringify(medicalPage)}</script>\n` + html.slice(headEnd);
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');

const schedulePath = path.join(ROOT, 'publish-schedule.json');
const schedule = JSON.parse(fs.readFileSync(schedulePath, 'utf8'));
if (!schedule.some((x) => x.slug === slug)) {
  schedule.push({ date: DATE, slug, file: `artikel/${slug}.html`, title: 'Tuna Rungu Bisa Bicara', description: article.metaDesc, image: hero.file, category: article.category, readTime: article.readTime });
  fs.writeFileSync(schedulePath, JSON.stringify(schedule, null, 2) + '\n');
}
console.log(JSON.stringify({ slug, date: DATE, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, images: [hero.file, ...Object.values(bodyImages)], scheduled: true }, null, 2));

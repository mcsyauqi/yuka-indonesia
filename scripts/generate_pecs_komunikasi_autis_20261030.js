'use strict';
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const slug = 'pecs-komunikasi-autis';
const IMG = 'assets/images/artikel';
const heroFile = 'Dokumentasi/21 Jan 2026/20260121_115445.jpg';
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';

const diagrams = {
  [`${IMG}/${slug}-tujuan.svg`]: svg.cards('Tujuan penggunaan PECS', 'Komunikasi fungsional dimulai dari kebutuhan anak', [
    { h: 'Meminta', color: '#2B3A67', items: ['Memilih benda atau aktivitas', 'Menunjukkan keinginan dengan jelas', 'Mengurangi tebakan orang dewasa'] },
    { h: 'Menolak', color: '#E53935', items: ['Memakai cara yang dapat dipahami', 'Menyampaikan tidak atau selesai', 'Tetap dihargai saat menolak'] },
    { h: 'Berkomentar', color: '#00838F', items: ['Membagikan pengalaman', 'Menjawab dan mengamati', 'Membangun interaksi dua arah'] },
  ]),
  [`${IMG}/${slug}-fase.svg`]: svg.grid('Enam fase PECS secara ringkas', 'Urutan mengajarkan pertukaran gambar sampai komentar spontan', ['Fase', 'Fokus belajar', 'Contoh kemampuan'], [
    ['I', 'Cara berkomunikasi', 'Menukar satu gambar dengan benda yang diinginkan'],
    ['II', 'Jarak dan ketekunan', 'Mencari buku komunikasi dan pasangan komunikasi'],
    ['III', 'Diskriminasi gambar', 'Memilih gambar yang sesuai dari beberapa pilihan'],
    ['IV', 'Struktur kalimat', 'Menyusun gambar pada strip kalimat'],
    ['V', 'Menjawab permintaan', 'Menjawab pertanyaan tentang keinginan'],
    ['VI', 'Komentar', 'Menggunakan awal kalimat untuk berbagi pengamatan'],
  ], [120, 420, 564]),
  [`${IMG}/${slug}-sesi.svg`]: svg.flow('Contoh alur latihan singkat', 'Ikuti minat anak, beri waktu, lalu hormati pesan yang disampaikan', [
    { h: 'Siapkan pilihan', d: 'Letakkan benda favorit dan gambar yang mudah dijangkau.' },
    { h: 'Tunggu inisiatif', d: 'Amati gerakan anak dan hindari terlalu banyak pertanyaan.' },
    { h: 'Bantu seperlunya', d: 'Gunakan prompt sesuai rencana lalu kurangi bertahap.' },
    { h: 'Berikan hasil', d: 'Serahkan benda atau aktivitas setelah pertukaran berhasil.' },
    { h: 'Catat singkat', d: 'Tulis gambar, bantuan, pasangan, dan konteks latihan.' },
    { h: 'Ulangi alami', d: 'Gunakan sistem di rumah, sekolah, dan kegiatan komunitas.' },
  ]),
  [`${IMG}/${slug}-partner.svg`]: svg.cards('Peran pasangan komunikasi', 'Orang dewasa membuat pertukaran gambar bermakna', [
    { h: 'Siap mendengar', color: '#2B3A67', items: ['Sediakan buku atau papan', 'Posisikan gambar terjangkau', 'Perhatikan pesan nonverbal'] },
    { h: 'Responsif', color: '#FFD700', items: ['Berikan respons yang sesuai', 'Ucapkan kata secara alami', 'Jangan menguji terus-menerus'] },
    { h: 'Konsisten', color: '#00838F', items: ['Pakai cara yang sama', 'Bagikan catatan ke tim', 'Evaluasi bila ada hambatan'] },
  ]),
};

const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const faq = [
  { q: 'Apa itu PECS komunikasi autis?', a: 'PECS adalah Picture Exchange Communication System, sebuah pendekatan komunikasi augmentatif dan alternatif yang mengajarkan anak menukar gambar dengan pasangan komunikasi untuk menyampaikan pesan. Sistem ini memakai urutan fase yang bertahap, mulai dari meminta benda atau aktivitas sampai menjawab dan berkomentar. PECS bukan sekadar menempel gambar, melainkan cara mengajarkan pertukaran pesan yang fungsional.' },
  { q: 'Apakah PECS hanya untuk anak autis yang belum bisa bicara?', a: 'Tidak. PECS dapat dipertimbangkan untuk anak autis atau anak dengan kebutuhan komunikasi lain, termasuk anak yang berbicara tetapi sulit menyampaikan pesan secara konsisten. Pemilihan sistem tetap perlu melihat kemampuan motorik, penglihatan, pemahaman bahasa, minat, dan kebutuhan sehari-hari anak bersama tenaga profesional yang relevan.' },
  { q: 'Apakah menggunakan PECS akan menghambat anak berbicara?', a: 'Tidak otomatis. Tujuan utama PECS adalah memberi akses komunikasi yang dapat dipahami. Sumber ASHA menjelaskan bahwa AAC dapat melengkapi atau menggantikan bicara dan dapat dipakai bersama bahasa lisan. Jika anak mengeluarkan suara atau kata, pasangan komunikasi dapat tetap merespons sambil memodelkan bahasa, tanpa memaksa anak mengucapkan kata.' },
  { q: 'Kapan anak mulai belajar PECS?', a: 'Tidak ada satu usia yang berlaku untuk semua anak. Kesiapan yang lebih penting adalah adanya kebutuhan untuk berkomunikasi, minat terhadap benda atau kegiatan, serta dukungan pasangan komunikasi yang konsisten. Penilaian sebaiknya dilakukan lebih awal ketika keluarga melihat anak kesulitan menyampaikan keinginan atau sering tidak dipahami.' },
  { q: 'Apakah orang tua boleh mengajarkan PECS di rumah?', a: 'Orang tua dapat memakai prinsip komunikasi yang responsif di rumah, seperti menyediakan pilihan, menunggu respons, dan menghormati pesan anak. Untuk mengajarkan protokol PECS secara sistematis, keluarga sebaiknya mendapat pelatihan dari profesional atau pelatih yang memahami pendekatan tersebut. Catatan rumah perlu dibagikan kepada guru dan terapis agar strategi tidak saling bertentangan.' },
  { q: 'Berapa banyak gambar yang harus disiapkan?', a: 'Jumlah gambar mengikuti kebutuhan komunikasi anak, bukan angka tetap. Mulailah dari beberapa benda atau aktivitas yang benar-benar bermakna, lalu tambah secara bertahap ketika anak sudah memahami fungsi pertukaran. Gambar harus mudah dibedakan, tahan dipakai, dan tersedia di tempat anak biasa berkomunikasi.' },
  { q: 'Bagaimana jika anak hanya meminta benda dan tidak mau berkomentar?', a: 'Meminta adalah fungsi komunikasi yang penting dan sering menjadi titik awal. Setelah anak lebih konsisten, tim dapat memperluas kosakata dan kegiatan untuk menjawab pertanyaan, memilih, menolak, atau berbagi pengamatan. Jangan mengurangi akses meminta hanya karena anak belum berkomentar, karena komunikasi harus tetap terasa berguna bagi anak.' },
];
const sections = [
  ['pengertian', 'Apa itu PECS dan komunikasi augmentatif'],
  ['kebutuhan', 'Kapan PECS dapat dipertimbangkan'],
  ['fase', 'Enam fase PECS secara ringkas'],
  ['mulai', 'Cara menyiapkan latihan awal'],
  ['prompt', 'Prompt, bantuan, dan kemandirian'],
  ['rumah', 'Penerapan di rumah dan sekolah'],
  ['lebih-luas', 'Memperluas fungsi komunikasi'],
  ['aman', 'Batas aman dan evaluasi'],
  ['faq', 'Pertanyaan Umum tentang PECS Komunikasi Autis'],
];

const bodyHtml = `
<div class="jawaban-singkat"><p><strong>PECS komunikasi autis</strong> adalah pendekatan yang mengajarkan anak menukar gambar dengan pasangan komunikasi untuk menyampaikan pesan secara fungsional. PECS dapat dimulai dari permintaan sederhana, lalu berkembang ke penggunaan gambar dalam berbagai tempat, penyusunan kalimat, jawaban, dan komentar. Sistem ini bukan sekadar kartu gambar. Anak perlu mendapat latihan terstruktur, respons yang konsisten, dan kesempatan berkomunikasi tentang hal yang benar-benar penting baginya.</p></div>
<p>Ketika anak sulit berbicara atau sulit membuat orang lain memahami maksudnya, keluarga sering mencoba gambar sebagai jalan keluar. Sebagian anak langsung menunjuk, membawa tangan orang dewasa, atau menangis karena pesan tidak tersampaikan. Cara-cara tersebut menunjukkan bahwa anak punya niat berkomunikasi, tetapi belum memiliki sistem yang cukup mudah dipakai dan dipahami bersama.</p>
<p>Artikel ini membahas PECS dari sudut pandang keluarga, guru, dan pendamping. Penjelasannya dibuat untuk edukasi umum, bukan untuk menggantikan asesmen atau pelatihan profesional. Setiap anak memiliki profil motorik, sensorik, kognitif, dan bahasa yang berbeda, sehingga alat komunikasi perlu dipilih dan disesuaikan bersama tim yang mengenal anak.</p>
<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>

<h2 id="pengertian">Apa Itu PECS dan Komunikasi Augmentatif?</h2>
<p>PECS adalah singkatan dari Picture Exchange Communication System. Dalam pendekatan ini, anak belajar mengambil gambar, membawanya kepada pasangan komunikasi, lalu menyerahkannya untuk mendapatkan respons yang sesuai. Pertukaran itu mengajarkan bahwa gambar bukan hiasan, tetapi memiliki fungsi komunikasi. Pada tahap berikutnya, anak belajar memilih gambar, menyusun beberapa gambar, menjawab pertanyaan, dan memberikan komentar.</p>
<p>PECS termasuk salah satu bentuk komunikasi augmentatif dan alternatif, atau AAC. Menurut <a href="https://www.asha.org/practice-portal/clinical-topics/augmentative-and-alternative-communication/" target="_blank" rel="noopener">ASHA Practice Portal tentang AAC</a>, AAC dapat melengkapi bicara yang sudah ada atau dipakai sebagai cara komunikasi ketika bicara belum fungsional. AAC dapat berbentuk gestur, benda, gambar, papan komunikasi, tulisan, atau perangkat penghasil suara. Jadi, PECS bukan lawan dari bicara, melainkan salah satu cara memperluas akses anak untuk menyampaikan maksud.</p>
<p>Perbedaan pentingnya adalah PECS memiliki protokol pengajaran yang berurutan. <a href="https://pecsusa.com/pecs/" target="_blank" rel="noopener">Pyramid Educational Consultants</a> menjelaskan enam fase, dari menukar satu gambar sampai mengembangkan komentar. Urutan ini membantu tim mengetahui keterampilan apa yang sedang dibangun. Namun, penggunaan gambar sehari-hari tetap perlu mengikuti kebutuhan anak dan tidak boleh dipaksakan sebagai satu-satunya cara berkomunikasi.</p>
${diag(`${IMG}/${slug}-tujuan.svg`, 'Diagram tiga tujuan PECS, yaitu meminta, menolak, dan berkomentar', 'PECS dapat diperluas dari permintaan benda atau kegiatan ke penolakan, jawaban, dan komentar. Fungsi komunikasi perlu dibuat bermakna bagi anak.')}

<h2 id="kebutuhan">Kapan PECS Dapat Dipertimbangkan?</h2>
<p>PECS dapat dipertimbangkan ketika anak memiliki niat berkomunikasi tetapi belum mampu menyampaikan pesan dengan cara yang dipahami orang lain. Tanda yang mungkin terlihat antara lain anak menarik tangan orang dewasa menuju benda, menunjuk tetapi sering tidak dipahami, menangis saat pilihan tidak tersedia, atau menggunakan kata yang sangat terbatas untuk banyak kebutuhan. Tanda tersebut bukan diagnosis dan tidak otomatis berarti PECS adalah pilihan terbaik. Tanda itu menjadi alasan untuk melakukan asesmen komunikasi.</p>
<p>Asesmen sebaiknya tidak hanya menghitung jumlah kata. Tim perlu melihat bagaimana anak meminta, menolak, memilih, menjawab, mencari perhatian, memahami bahasa, memakai gerakan, dan merespons gambar. Kemampuan motorik halus juga penting, karena anak mungkin perlu mengambil atau menyerahkan kartu. Posisi duduk, penglihatan, kemampuan menjangkau, dan toleransi terhadap bahan juga perlu dipertimbangkan.</p>
<p>ASHA menekankan bahwa tidak ada prasyarat usia tertentu untuk memperkenalkan AAC pada anak yang mengalami hambatan komunikasi. <a href="https://www.asha.org/practice/early-intervention-provider-support/augmentative-and-alternative-communication-in-early-intervention/" target="_blank" rel="noopener">Panduan ASHA untuk intervensi dini</a> menyebut AAC dapat diperkenalkan sejak anak menunjukkan kesulitan mengembangkan komunikasi lisan, dengan dukungan yang dipersonalisasi. Di Indonesia, keluarga dapat mulai berdiskusi dengan terapis wicara, psikolog, guru pendamping, atau dokter yang merawat anak.</p>
<p>PECS juga bukan ukuran kecerdasan anak. Anak yang belum mampu menggunakan sistem pada satu hari mungkin mengalami lelah, nyeri, gangguan sensorik, perubahan rutinitas, atau gambar yang tidak relevan. Karena itu, hasil latihan perlu dibaca dalam konteks. Pembahasan tentang proses <a href="/artikel/asesmen-abk">asesmen ABK</a> dan <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik anak berkebutuhan khusus</a> dapat membantu keluarga menyiapkan pertanyaan yang lebih terarah.</p>

<h2 id="fase">Enam Fase PECS Secara Ringkas</h2>
<p>Fase bukan perlombaan. Anak dapat memerlukan waktu berbeda untuk menguasai setiap keterampilan. Berikut ringkasan berdasarkan penjelasan resmi Pyramid, sementara penerapan detail harus mengikuti pelatihan dan asesmen yang tepat.</p>
<table><thead><tr><th>Fase</th><th>Fokus</th><th>Contoh kemampuan</th></tr></thead><tbody>
<tr><td>I</td><td>Cara berkomunikasi</td><td>Menukar satu gambar dengan benda yang diinginkan.</td></tr>
<tr><td>II</td><td>Jarak dan ketekunan</td><td>Mencari buku komunikasi dan mendatangi pasangan komunikasi.</td></tr>
<tr><td>III</td><td>Diskriminasi gambar</td><td>Memilih gambar yang sesuai dari beberapa pilihan.</td></tr>
<tr><td>IV</td><td>Struktur kalimat</td><td>Menyusun gambar pada strip kalimat untuk membuat permintaan.</td></tr>
<tr><td>V</td><td>Menjawab permintaan</td><td>Menjawab pertanyaan tentang hal yang ingin diminta.</td></tr>
<tr><td>VI</td><td>Berkomentar</td><td>Memakai awal kalimat untuk berbagi pengamatan.</td></tr>
</tbody></table>
<p>Fase pertama menekankan inisiasi, bukan kemampuan menyebut nama gambar. Pada awalnya, anak belajar bahwa menyerahkan gambar membuat pesan diterima. Fase kedua memperluas keterampilan agar tidak hanya muncul ketika gambar berada tepat di depan anak. Fase ketiga membantu anak memilih gambar yang berbeda, sehingga buku komunikasi dapat memuat kosakata lebih banyak.</p>
<p>Pada fase struktur kalimat, anak mulai menggabungkan simbol untuk membentuk pesan sederhana. Fase menjawab pertanyaan perlu diperkenalkan dengan hati-hati agar kebiasaan meminta spontan tetap terjaga. Fase komentar membuka fungsi komunikasi yang lebih sosial, seperti menyampaikan apa yang dilihat atau didengar. <a href="/artikel/aplikasi-komunikasi-aac-terbaik-untuk-anak">Aplikasi komunikasi AAC</a> dapat menjadi bahan perbandingan ketika tim mempertimbangkan sistem digital, tetapi pilihan teknologi tidak harus menggantikan sistem low-tech.</p>
${diag(`${IMG}/${slug}-fase.svg`, 'Tabel visual enam fase PECS dari pertukaran satu gambar sampai komentar', 'Enam fase PECS membantu tim memetakan keterampilan yang sedang dipelajari. Kecepatan berpindah fase mengikuti data anak, bukan target kalender.')}

<h2 id="mulai">Cara Menyiapkan Latihan Awal</h2>
<p>Mulai dari komunikasi yang memiliki nilai bagi anak. Pilih benda atau aktivitas yang sering dicari anak, misalnya makanan ringan tertentu, gelembung sabun, permainan favorit, musik, atau jeda dari kegiatan. Jangan memulai dengan gambar benda yang tidak pernah dipilih anak hanya karena menurut orang dewasa benda itu penting. Minat anak membuat konsekuensi pertukaran terasa nyata.</p>
<p>Siapkan gambar yang jelas, berukuran mudah diambil, dan ditempatkan pada lokasi yang dapat dijangkau. Gunakan buku atau papan yang cukup kuat untuk dibawa. Pastikan gambar tidak mudah terlepas atau hilang. Untuk anak dengan hambatan penglihatan, diskusikan adaptasi seperti ukuran, kontras, tekstur, atau bentuk lain yang lebih mudah dipahami. Kebutuhan sensorik dan motorik dapat dibahas bersama terapis okupasi melalui <a href="/artikel/terapi-okupasi">terapi okupasi</a>.</p>
<p>Dalam satu sesi, buat tujuan kecil dan kesempatan yang berulang. Pasangan komunikasi perlu memberi waktu bagi anak untuk mengambil dan menyerahkan gambar. Terlalu banyak instruksi lisan bisa membuat anak menunggu perintah, bukan memulai pesan. Catat konteks, gambar yang digunakan, jenis bantuan, dan respons anak. Catatan sederhana lebih bermanfaat daripada kesan umum seperti anak hari ini sulit.</p>
<p>Gunakan rutinitas yang sudah familiar. Waktu makan, bermain, berpakaian, dan berangkat sekolah memberi banyak kesempatan komunikasi. <a href="/artikel/pendidikan-inklusi">Pendidikan inklusi</a> juga membutuhkan sistem yang dapat dipakai di kelas, halaman sekolah, dan kegiatan bersama, bukan hanya di ruang terapi. Pastikan guru tahu cara merespons pertukaran gambar supaya anak tidak menemukan aturan yang berbeda di setiap tempat.</p>
${diag(`${IMG}/${slug}-sesi.svg`, 'Diagram alur latihan singkat PECS dari menyiapkan pilihan sampai mencatat respons anak', 'Latihan singkat dan berulang di rutinitas alami membantu anak memahami bahwa komunikasinya memiliki dampak nyata.')}

<h2 id="prompt">Prompt, Bantuan, dan Kemandirian</h2>
<p>Prompt adalah bantuan yang diberikan agar anak dapat melakukan langkah yang sedang dipelajari. Dalam pengajaran komunikasi, bantuan harus direncanakan dan dikurangi bertahap. Bila orang dewasa selalu mengatakan ambil gambarnya, anak dapat menjadi bergantung pada suara tersebut. Sebaliknya, bila bantuan terlalu cepat dihilangkan sebelum anak memahami tugas, anak mungkin frustrasi.</p>
<p>Jenis bantuan perlu dicatat secara konkret. Contohnya, anak mengambil gambar tanpa bantuan, anak memerlukan isyarat menunjuk, atau tangan anak perlu diarahkan. Hindari penilaian yang terlalu umum seperti dibantu sedikit. Catatan terperinci memudahkan tim melihat apakah kemandirian bertambah dari minggu ke minggu.</p>
<p>Respons pasangan komunikasi juga sangat menentukan. Setelah pesan disampaikan, berikan respons yang sesuai dan dalam waktu yang wajar. Bila gambar menunjukkan benda yang diinginkan, benda itu perlu tersedia atau pasangan menjelaskan dengan jujur bila benda tersebut habis. Bila gambar digunakan untuk menolak, anak perlu mendapat ruang aman untuk berhenti atau memilih alternatif. Komunikasi tidak boleh hanya dihargai ketika anak meminta sesuatu yang disukai orang dewasa.</p>
<p>Perhatikan juga kemungkinan perubahan kebutuhan. Anak mungkin memerlukan kata atau gambar untuk sakit, terlalu bising, butuh bantuan, selesai, atau ingin sendiri. Kosakata keselamatan dan kenyamanan harus diprioritaskan. Pendekatan ini sejalan dengan prinsip <a href="/artikel/bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh">mengajarkan kemandirian kepada anak berkebutuhan khusus</a>, yaitu memberi dukungan agar anak dapat mengambil peran dalam aktivitasnya sendiri.</p>

<h2 id="rumah">Penerapan di Rumah dan Sekolah</h2>
<p>PECS akan lebih berguna bila dipakai oleh banyak pasangan komunikasi. Orang tua, saudara, guru, pendamping, dan terapis perlu mengetahui lokasi buku komunikasi serta cara merespons pesan. Tidak semua orang harus menjadi ahli protokol, tetapi mereka perlu memahami aturan dasar: sediakan akses, tunggu inisiatif, jangan mengambil gambar dari tangan anak tanpa alasan, dan berikan respons yang bermakna.</p>
<p>Buat salinan atau versi yang sesuai untuk tempat yang sering dipakai anak. Buku di rumah tidak harus identik dengan papan di kelas, tetapi gambar penting dan cara meresponsnya sebaiknya konsisten. Bila anak berpindah kelas, informasi komunikasi perlu disampaikan dalam pertemuan transisi. Kegiatan seperti makan, bermain, dan merapikan barang dapat dipakai untuk melihat apakah keterampilan sudah meluas di luar sesi latihan.</p>
<p>Gunakan bahasa lisan bersama gambar secara alami. Saat anak menyerahkan gambar bola, pasangan dapat mengatakan, Kamu ingin bola, lalu menyerahkan bola. Jangan memaksa anak mengulang suara sebelum mendapat benda, karena hal itu dapat mengubah komunikasi menjadi ujian. Bila anak mengucapkan kata atau suara, respons tetap dapat diberikan sambil memperkaya model bahasa.</p>
<p>Untuk mendukung interaksi sosial, libatkan teman sebaya dengan persiapan yang tepat. Teman perlu belajar menunggu, melihat gambar, dan merespons secara ramah. Guru dapat mengaitkan PECS dengan kegiatan <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>, komunikasi kelas, dan dukungan visual. Sistem yang sama dapat dipakai untuk meminta giliran, memilih permainan, atau menyampaikan selesai.</p>
${diag(`${IMG}/${slug}-partner.svg`, 'Diagram tiga peran pasangan komunikasi, yaitu siap mendengar, responsif, dan konsisten', 'Pasangan komunikasi membantu membuat gambar benar-benar berfungsi. Konsistensi respons lebih penting daripada menambah banyak gambar sekaligus.')}

<h2 id="lebih-luas">Memperluas Fungsi Komunikasi</h2>
<p>Meminta benda adalah awal yang penting, tetapi bukan satu-satunya tujuan. Setelah anak lebih nyaman dengan sistem, tim dapat mengembangkan kosakata untuk menolak, meminta bantuan, meminta jeda, memilih, menyapa, menjawab, dan berkomentar. Perluasan sebaiknya mengikuti rutinitas dan kebutuhan anak. Anak yang sering kesulitan saat berpindah aktivitas mungkin lebih membutuhkan gambar selesai atau istirahat daripada gambar benda baru.</p>
<p>Perhatikan apakah anak memakai gambar dengan orang berbeda dan di tempat berbeda. Keterampilan yang hanya muncul saat satu terapis duduk di meja belum tentu sudah tergeneralisasi. Cobalah secara bertahap di ruang keluarga, kelas, halaman, perjalanan singkat, atau kegiatan komunitas. Catat perubahan konteks agar tim mengetahui situasi mana yang masih memerlukan dukungan.</p>
<p>Komunikasi juga mencakup perasaan dan pengalaman. Gambar senang, tidak nyaman, sakit, takut, atau terlalu ramai dapat membantu orang dewasa merespons sebelum masalah membesar. Untuk anak yang mengalami kebutuhan sensorik, tautkan sistem komunikasi dengan strategi <a href="/artikel/sensory-seeking-behavior-anak">perilaku sensory seeking</a> atau <a href="/artikel/sensory-over-responsivity-pada-anak">sensory over responsivity</a> yang sudah dibahas bersama profesional.</p>
<p>Evaluasi bukan berarti menyalahkan anak atau keluarga. Bila sistem sulit dipakai, periksa apakah gambar tersedia, posisi buku tepat, kosakata relevan, tuntutan terlalu tinggi, atau respons pasangan tidak konsisten. Mungkin anak memerlukan bentuk AAC lain, seperti gestur, papan kata, atau perangkat suara. <a href="/artikel/terapi-wicara">Terapi wicara</a> dapat membantu tim menilai bahasa reseptif, ekspresif, dan pilihan sistem komunikasi.</p>

<h2 id="aman">Batas Aman dan Evaluasi</h2>
<p>PECS tidak boleh dipakai untuk menahan kebutuhan dasar anak sampai anak berhasil menukar gambar. Anak tetap perlu diberi makan, minum, pertolongan, dan keselamatan. Komunikasi harus memperluas akses, bukan menjadi syarat untuk mendapatkan perawatan yang semestinya. Jangan memakai gambar untuk memaksa anak melakukan aktivitas yang menyakitkan atau membuatnya kehilangan hak untuk berhenti.</p>
<p>Hindari membuat klaim bahwa satu sistem pasti cocok untuk semua anak atau pasti membuat anak berbicara. Hasil komunikasi dipengaruhi banyak hal, termasuk kemampuan motorik, lingkungan, kualitas pelatihan, kesempatan praktik, dan dukungan pasangan. Sumber PECS dan ASHA memberikan informasi yang berguna, tetapi keputusan individual tetap perlu dibuat melalui asesmen dan pemantauan.</p>
<p>Buat jadwal evaluasi bersama tim. Tinjau apakah anak lebih sering memulai pesan, lebih mudah dipahami, dapat memakai sistem dengan pasangan berbeda, atau membutuhkan lebih sedikit bantuan. Sertakan suara anak sejauh mungkin. Bila ada perubahan perilaku mendadak, nyeri, gangguan tidur, kehilangan kemampuan, atau risiko keselamatan, konsultasikan kepada tenaga kesehatan.</p>
<p>Di lingkungan YUKA, keluarga dapat membaca artikel <a href="/artikel/dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a>, <a href="/artikel/abk-adalah-anak-berkebutuhan-khusus">pengertian anak berkebutuhan khusus</a>, dan menghubungi tim melalui halaman <a href="/kontak">kontak YUKA</a> untuk mendiskusikan kebutuhan pendidikan dan dukungan anak. Artikel ini tetap merupakan informasi umum, bukan diagnosis atau rencana terapi personal.</p>

<h2 id="faq">Pertanyaan Umum tentang PECS Komunikasi Autis</h2>
${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('\n')}
`;

const meta = 'PECS komunikasi autis: pengertian, enam fase, cara memulai latihan, peran orang tua dan guru, serta batas aman penggunaannya sebagai AAC.';
const data = {
  slug,
  titleTag: 'PECS Komunikasi Autis: Pengertian, Fase, dan Cara Mulai | YUKA',
  metaDesc: meta,
  keywords: 'pecs komunikasi autis, picture exchange communication system, komunikasi AAC anak autis, kartu komunikasi anak',
  ogTitle: 'PECS Komunikasi Autis: Pengertian, Fase, dan Cara Mulai',
  ogDesc: meta,
  h1: 'PECS Komunikasi Autis: Pengertian, Enam Fase, dan Cara Memulainya',
  crumb: 'PECS Komunikasi Autis',
  category: 'Pendidikan',
  datePublished: '2026-10-30T08:00:00+07:00',
  dateModified: '2026-10-30T08:00:00+07:00',
  dateDisplay: '30 Oktober 2026',
  readTime: '15 menit baca',
  image: { file: heroFile, w: 1200, h: 900, alt: 'Kegiatan belajar anak bersama pendamping di lingkungan YUKA', caption: 'Dokumentasi kegiatan belajar YUKA. Foto digunakan sebagai ilustrasi suasana pendampingan, bukan dokumentasi latihan PECS tertentu.', credit },
  bodyHtml,
  faq,
  related: [
    { href: '/artikel/aplikasi-komunikasi-aac-terbaik-untuk-anak', title: 'Aplikasi Komunikasi AAC untuk Anak', desc: 'Mengenal pilihan komunikasi augmentatif berbasis teknologi.' },
    { href: '/artikel/terapi-wicara', title: 'Terapi Wicara', desc: 'Peran terapi wicara dalam komunikasi dan bahasa anak.' },
    { href: '/artikel/pendidikan-inklusi', title: 'Pendidikan Inklusi', desc: 'Dukungan belajar yang menyesuaikan kebutuhan anak.' },
  ],
  tags: ['PECS', 'KomunikasiAAC', 'Autisme'],
  sources: [
    { url: 'https://www.asha.org/practice-portal/clinical-topics/augmentative-and-alternative-communication/', label: 'ASHA Practice Portal: Augmentative and Alternative Communication' },
    { url: 'https://www.asha.org/practice/early-intervention-provider-support/augmentative-and-alternative-communication-in-early-intervention/', label: 'ASHA: AAC in Early Intervention' },
    { url: 'https://pecsusa.com/pecs/', label: 'Pyramid Educational Consultants: PECS, An Evidence-Based Practice' },
    { url: 'https://pecsusa.com/download/PECS-Brief%20Description-2020-US.pdf', label: 'Pyramid Educational Consultants: PECS Brief Description 2020' },
  ],
  sourcesCheckedNote: 'Sumber resmi ASHA dan Pyramid Educational Consultants dibuka dan diperiksa pada 30 Oktober 2026. Artikel ini bersifat edukasi umum dan tidak menggantikan asesmen profesional.',
};

if (require.main === module) {
  for (const [file, content] of Object.entries(diagrams)) fs.writeFileSync(path.join(ROOT, file), content);
  const size = imageSize(path.join(ROOT, heroFile));
  if (size.w !== 1200 || size.h !== 900) throw new Error(`Hero wajib 1200x900, didapat ${size.w}x${size.h}`);
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), renderArticlePage(data));
  console.log(`Generated artikel/${slug}.html`);
}
module.exports = { data, faq, bodyHtml };

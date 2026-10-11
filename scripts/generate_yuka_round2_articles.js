'use strict';
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'artikel');
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const L = (slug, text) => `<a href="${slug}">${text}</a>`;
const P = (text) => `<p>${text}</p>`;
const H2 = (id, text) => `<h2 id="${id}">${text}</h2>`;
const H3 = (text) => `<h3>${text}</h3>`;
const UL = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const FIG = (file, alt, caption, w, h) => `<figure><img src="../${file}" alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${CREDIT}</span></figcaption></figure>`;
const FAQ = (items) => `${H2('faq', 'Pertanyaan yang Sering Diajukan')}${items.map(([q, a]) => `${H3(q)}${P(a)}`).join('\n')}`;
const related = (items) => items.map(([href, title, desc]) => ({ href, title, desc }));
const sourceNote = 'Status tinjauan medis: Artikel ini belum ditinjau oleh peninjau medis individual. Sumber resmi diperiksa pada 11 Oktober 2026. Informasi layanan, jadwal, dan rekomendasi dapat berubah, sehingga keluarga perlu mengonfirmasi kembali kepada tenaga profesional atau layanan setempat.';

const adhdFaq = [
  ['Apakah ADHD dan gangguan kecemasan pada anak selalu muncul bersamaan?', 'Tidak. Sebagian anak dengan ADHD juga mengalami kecemasan, tetapi tidak semua. Perilaku yang tampak mirip dapat memiliki penyebab berbeda, sehingga orang tua sebaiknya tidak menyimpulkan kondisi hanya dari satu gejala atau dari perbandingan dengan anak lain.'],
  ['Bagaimana membedakan sulit fokus karena ADHD dan karena cemas?', 'Keduanya dapat memengaruhi perhatian. Perhatikan pola, pemicu, waktu muncul, keluhan tubuh, kekhawatiran, kualitas tidur, dan dampaknya pada lebih dari satu lingkungan. Catatan dari rumah dan sekolah membantu tenaga profesional melakukan penilaian yang lebih utuh.'],
  ['Apa yang dapat dilakukan orang tua di rumah?', 'Buat rutinitas yang dapat diprediksi, pecah instruksi menjadi langkah kecil, beri jeda gerak, gunakan pengingat visual, dan validasi perasaan anak. Hindari memberi label malas, nakal, atau cari perhatian. Sesuaikan dukungan dengan kebutuhan anak.'],
  ['Kapan anak perlu dibawa berkonsultasi?', 'Konsultasi layak dipertimbangkan ketika kesulitan berlangsung, mengganggu belajar, tidur, pertemanan, kemandirian, atau keselamatan. Segera cari bantuan jika anak menyampaikan keinginan menyakiti diri, mengalami serangan panik berat, atau tidak dapat menjalani aktivitas harian.'],
  ['Apakah guru perlu diberi tahu tentang kecemasan anak?', 'Dengan persetujuan keluarga dan sesuai kebutuhan, komunikasi dengan guru dapat membantu menyamakan dukungan. Bagikan informasi praktis seperti pemicu, tanda anak mulai kewalahan, cara memberi instruksi, dan siapa yang perlu dihubungi.'],
  ['Apakah terapi atau obat pasti diperlukan?', 'Tidak ada satu jawaban untuk semua anak. Penanganan dipilih setelah penilaian dan pembicaraan dengan tenaga kesehatan yang berwenang. Dukungan sekolah, strategi perilaku, terapi psikologis, atau obat dapat dipertimbangkan sesuai kondisi, usia, risiko, dan tujuan keluarga.'],
  ['Bagaimana berbicara kepada anak tentang ADHD dan kecemasan?', 'Gunakan bahasa yang sesuai usia dan kekuatan anak. Jelaskan bahwa otak dan tubuh setiap orang bekerja dengan cara berbeda, perasaan dapat dibicarakan, dan meminta bantuan bukan kesalahan. Hindari menjadikan diagnosis sebagai seluruh identitas anak.']
];

const sleepFaq = [
  ['Berapa lama waktu yang dibutuhkan untuk membentuk rutinitas tidur?', 'Tidak ada angka yang sama untuk semua anak. Sebagian keluarga melihat perubahan dalam beberapa hari, sementara yang lain membutuhkan beberapa minggu. Mulailah dengan satu atau dua langkah yang realistis, catat respons anak, lalu ubah secara bertahap.'],
  ['Apakah anak autis harus tidur pada jam yang sama setiap hari?', 'Jadwal yang konsisten sering membantu anak mengetahui apa yang akan terjadi, tetapi kebutuhan dan kondisi keluarga tetap perlu dipertimbangkan. Jika ada perubahan, beri pemberitahuan dan gunakan penanda visual. Konsistensi tidak berarti mengabaikan sakit, perjalanan, atau kebutuhan sensorik.'],
  ['Bagaimana jika anak menolak mandi atau menyikat gigi sebelum tidur?', 'Cari bagian yang membuat tidak nyaman, misalnya suara air, suhu, tekstur pasta gigi, cahaya, atau tuntutan bahasa. Tawarkan pilihan terbatas, gunakan urutan visual, dan latih di waktu yang tidak terburu-buru. Bila nyeri atau masalah kesehatan dicurigai, konsultasikan.'],
  ['Bolehkah menggunakan melatonin untuk anak autis?', 'Jangan memulai suplemen atau obat tanpa konsultasi. NICE merekomendasikan penilaian dan sleep plan terlebih dahulu, serta penggunaan obat hanya dalam kondisi tertentu dan dengan pengawasan dokter spesialis yang sesuai.'],
  ['Apa tanda anak perlu diperiksa karena masalah tidur?', 'Cari bantuan jika masalah menetap dan memengaruhi fungsi anak atau keluarga, atau jika anak mendengkur keras, tersedak, tampak berhenti bernapas, sangat mengantuk di siang hari, kesakitan, atau mengalami perubahan mendadak.'],
  ['Haruskah semua langkah bedtime routine dilakukan sempurna?', 'Tidak. Tujuannya adalah urutan yang dapat dipahami dan cukup menenangkan, bukan kesempurnaan. Pilih langkah yang paling membantu, buat versi singkat untuk malam sulit, dan kembali ke urutan utama ketika kondisi memungkinkan.'],
  ['Bagaimana melibatkan anak dalam membuat rutinitas tidur?', 'Biarkan anak memilih antara dua pilihan yang sama-sama dapat diterima, membantu menempel kartu urutan, memilih buku, atau memberi tanda selesai. Libatkan cara komunikasi yang biasa dipakai anak dan jangan memaksa kontak mata atau percakapan panjang.']
];

const adhdBody = [
  P(`<div class="jawaban-singkat"><strong>Jawaban singkat:</strong> ADHD dan gangguan kecemasan pada anak dapat memiliki gejala yang tumpang tindih, tetapi bukan kondisi yang sama. Anak dapat mengalami salah satunya, keduanya, atau kesulitan yang tampak serupa karena tidur, stres, perubahan lingkungan, atau faktor lain. Penilaian profesional diperlukan untuk memahami pola dan menentukan dukungan.</div>`),
  P(`Ketika anak sering bergerak, lupa, sulit menyelesaikan tugas, mudah frustrasi, atau tampak menghindari situasi tertentu, keluarga mungkin bertanya apakah penyebabnya ADHD, kecemasan, atau keduanya. Pertanyaan ini wajar, tetapi jawaban tidak dapat diperoleh hanya dengan mencocokkan daftar gejala di internet. CDC menjelaskan bahwa kondisi lain dapat tampak seperti ADHD dan sebagian anak dengan ADHD juga memiliki kondisi lain, termasuk kecemasan. Karena itu, pengamatan lintas situasi lebih berguna daripada memberi label terburu-buru.`),
  P(`Artikel ini membantu orang tua, guru, dan pendamping memahami perbedaan pola, menata dukungan harian, serta mengetahui kapan perlu meminta pertolongan. Bahasa yang digunakan tidak dimaksudkan untuk mendiagnosis. Anak tetap lebih besar daripada diagnosis atau perilaku yang terlihat pada satu hari. Untuk konteks yang lebih luas, keluarga dapat membaca ${L('pendidikan-khusus', 'pengantar pendidikan khusus')} dan ${L('pendidikan-inklusi', 'prinsip pendidikan inklusi')} agar dukungan belajar tidak hanya berfokus pada kekurangan.`),
  H2('memahami-dua-kondisi', 'Memahami ADHD dan Gangguan Kecemasan pada Anak'),
  P(`ADHD berkaitan dengan pola perhatian, impulsivitas, dan aktivitas yang berbeda dari harapan perkembangan, dengan dampak pada fungsi sehari-hari. Gangguan kecemasan berkaitan dengan rasa takut atau khawatir yang menetap, berlebihan, atau mengganggu aktivitas. Anak dengan kecemasan dapat gelisah, sulit fokus, banyak bertanya tentang kemungkinan buruk, menghindari kegiatan, atau mengalami keluhan tubuh. Satu perilaku seperti menggoyangkan kaki belum cukup untuk menentukan penyebabnya.`),
  P(`Perhatikan konteks. Anak mungkin dapat fokus pada kegiatan yang sangat disukai, tetapi kesulitan berpindah atau mengikuti instruksi berurutan. Anak yang cemas mungkin bisa menyelesaikan tugas ketika merasa aman, lalu menolak saat ada penilaian, keramaian, atau perubahan mendadak. Sebaliknya, anak dengan ADHD juga dapat merasa cemas setelah berulang kali mengalami teguran atau tertinggal. Pola dan urutan kejadian membantu membedakan kebutuhan dukungan.`),
  P(`Catatan CDC juga menekankan bahwa tidur yang terganggu dapat menyebabkan masalah fokus dan ingatan yang menyerupai ADHD. Karena itu, catat jam tidur, bangun malam, perubahan selera makan, penggunaan layar, obat yang dikonsumsi, perubahan sekolah, dan situasi yang memicu kewalahan. Catatan bukan alat diagnosis mandiri, tetapi bahan percakapan yang membuat konsultasi lebih jelas.`),
  FIG('Dokumentasi/cpao-anak-memasak-dengan-celemek-topi-022.webp', 'Dua anak mengikuti kegiatan memasak dengan celemek dan topi koki di meja kegiatan', 'Kegiatan terstruktur dapat menjadi kesempatan mengamati cara anak mengikuti langkah, meminta bantuan, dan berpindah aktivitas tanpa menyimpulkan diagnosis dari perilaku sesaat.' , 936, 1248),
  H2('tanda-dan-pola', 'Tanda yang Perlu Diamati Tanpa Melabeli Anak'),
  P(`Gunakan pertanyaan yang konkret. Kapan kesulitan muncul? Apakah terjadi di rumah, sekolah, dan tempat lain? Apakah anak sudah memahami instruksi? Apakah tugas terlalu panjang, lingkungan terlalu bising, atau ada rasa takut terhadap hasil? Apakah anak tampak lega setelah menghindari kegiatan? Pertanyaan seperti ini membantu memisahkan kebutuhan akses, keterampilan, emosi, dan kemungkinan kondisi kesehatan.`),
  P(`Pada pola yang lebih dominan perhatian dan impulsivitas, anak mungkin membutuhkan instruksi singkat, benda pengingat, waktu gerak, dan bantuan memulai tugas. Pada pola yang lebih dominan kecemasan, anak mungkin membutuhkan informasi awal, pilihan yang terbatas, latihan bertahap, dan orang dewasa yang membantu menamai rasa takut tanpa mempermalukan. Banyak anak membutuhkan kombinasi dukungan tersebut.`),
  P(`Jangan mengartikan semua gerakan sebagai hiperaktif dan jangan menganggap semua penghindaran sebagai pembangkangan. Gerakan berulang dapat membantu sebagian anak mengatur perhatian atau sensasi. Penghindaran dapat menandakan tuntutan yang terlalu sulit, pengalaman sosial yang menyakitkan, atau rasa takut yang belum dapat diucapkan. Baca juga ${L('sensory-seeking-behavior', 'penjelasan tentang kebutuhan sensorik')} dan ${L('hiperaktif-adalah', 'artikel tentang istilah hiperaktif')} agar bahasa keluarga tetap hati-hati.`),
  UL(['Catat perilaku yang terlihat, bukan kesimpulan seperti malas atau manipulatif.', 'Tuliskan pemicu, durasi, intensitas, dan apa yang membantu anak kembali tenang.', 'Bandingkan tuntutan kegiatan dengan kemampuan komunikasi, motorik, dan kemandirian anak.', 'Tanyakan perspektif anak melalui kata, gambar, gerak, atau alat komunikasi yang biasa digunakan.']),
  P(`Aset visual dari kegiatan musik juga mengingatkan bahwa dukungan dapat dibuat konkret. Gunakan ${L('terapi-musik-untuk-anak-adhd', 'aktivitas musik terstruktur')} sebagai inspirasi umum, bukan sebagai resep terapi. Pilihan aktivitas sebaiknya mengikuti minat dan respons anak, dengan tujuan yang jelas serta evaluasi dari pendamping atau profesional yang kompeten.`),
  FIG('Dokumentasi/artikel/terapi-musik-untuk-anak-adhd-pentas-kostum.webp', 'Papan kegiatan musik berisi urutan sapaan, aktivitas musik, istirahat, dan penutupan', 'Urutan visual dapat membantu anak memahami awal, jeda, dan akhir kegiatan. Setiap anak perlu diberi pilihan dan waktu pemrosesan yang sesuai.' , 921, 690),
  H2('hubungan-dengan-kecemasan', 'Mengapa ADHD dan Kecemasan Dapat Saling Beririsan'),
  P(`Anak yang mengalami kesulitan mengatur perhatian mungkin lebih sering lupa, kehilangan barang, atau terlambat menyelesaikan tugas. Pengalaman berulang mendapatkan teguran dapat membuat anak mengantisipasi kegagalan. Rasa cemas kemudian dapat memperburuk konsentrasi, tidur, dan keberanian mencoba. Siklus ini tidak berarti kecemasan hanya akibat ADHD. Lingkungan, relasi, kesehatan, pengalaman sosial, dan faktor lain juga perlu dipertimbangkan.`),
  P(`NIMH menjelaskan bahwa kecemasan sesekali merupakan bagian dari kehidupan, sedangkan gangguan kecemasan dapat menetap, muncul dalam banyak situasi, dan mengganggu keseharian. Pada anak, kecemasan bisa muncul sebagai rewel, diam, sulit tidur, keluhan perut, menangis sebelum sekolah, kebutuhan memastikan sesuatu berulang kali, atau keengganan berpisah. Tanda tersebut tetap perlu dibaca bersama konteks perkembangan dan kesehatan.`),
  P(`Alih-alih bertanya siapa yang salah, tanyakan dukungan apa yang mengurangi beban. Apakah anak memerlukan jadwal bergambar? Apakah instruksi perlu satu per satu? Apakah guru dapat menyediakan tempat tenang? Apakah keluarga perlu memberi waktu transisi lebih panjang? Baca ${L('teori-inklusi-sosial', 'teori inklusi sosial')} dan ${L('penerapan-inklusi-sosial', 'contoh penerapan inklusi')} untuk melihat bagaimana lingkungan dapat disesuaikan, bukan hanya menuntut anak menyesuaikan diri.`),
  P(`Kecemasan juga dapat membuat anak tampak sangat berhati-hati, sementara ADHD dapat membuat anak tampak terburu-buru. Keduanya bisa muncul pada anak yang sama dan berubah sesuai tuntutan. Perubahan setelah tidur membaik, jadwal lebih jelas, atau tugas diperkecil memberi informasi penting, tetapi tidak menggantikan pemeriksaan. Beri waktu cukup untuk mengamati pola sebelum membuat keputusan besar. Catatan singkat yang konsisten sering lebih berguna daripada ingatan yang hanya muncul saat situasi sedang berat.`),
  FIG('Dokumentasi/artikel/sensory-seeking-behavior-anak-taman-batu-museum.webp', 'Anak dan pendamping mengikuti kegiatan luar ruang di area bebatuan dengan pengawasan orang dewasa', 'Kegiatan di luar ruang perlu dirancang dengan perhatian pada keamanan, jeda, suara, cahaya, dan pilihan anak untuk beristirahat.' , 1200, 900),
  H2('dukungan-di-rumah-dan-sekolah', 'Strategi Dukungan di Rumah dan Sekolah'),
  P(`Mulailah dari struktur yang paling sederhana. Tulis tiga sampai lima langkah kegiatan, gunakan kata kerja yang jelas, dan beri tanda ketika satu langkah selesai. Sediakan pilihan antara dua alternatif yang sama-sama dapat diterima, misalnya mengerjakan tugas di meja atau di sudut tenang. Untuk anak yang mudah terdistraksi, kurangi benda yang tidak dibutuhkan. Untuk anak yang cemas, beri tahu perubahan lebih awal dan jelaskan apa yang tetap sama.`),
  P(`Gunakan bahasa netral ketika memberi umpan balik. Kalimat seperti “tugasnya belum selesai, kita pilih langkah pertama” lebih membantu daripada “kamu tidak pernah memperhatikan”. Validasi perasaan tanpa menguatkan ketakutan, misalnya “kamu khawatir presentasi ini sulit; kita bisa latihan bagian pertama”. Setelah anak tenang, ajak meninjau apa yang membantu. Pembelajaran terjadi ketika anak merasa cukup aman untuk mencoba lagi.`),
  P(`Di sekolah, keluarga dapat meminta komunikasi yang teratur dan singkat. Sampaikan tanda awal kewalahan, cara menawarkan jeda, format instruksi yang mudah dipahami, dan siapa yang menjadi kontak utama. Sekolah tidak harus membuka seluruh informasi pribadi anak kepada semua orang. Bahas batas kerahasiaan dan minta agar dukungan ditulis dalam rencana yang dapat ditinjau.`),
  P(`Dukungan di rumah juga perlu memperhatikan orang tua dan saudara. Jadwal yang realistis harus menyisakan waktu makan, tidur, bermain, dan pemulihan bagi semua anggota keluarga. Jangan membuat daftar intervensi terlalu panjang. Pilih satu kebiasaan yang penting, ukur perubahan sederhana, dan evaluasi bersama. ${L('program-pembelajaran-individual', 'program pembelajaran individual')} dapat membantu keluarga menghubungkan target belajar dengan kebutuhan fungsional anak.`),
  `<table class="classification-table"><thead><tr><th>Situasi yang diamati</th><th>Dukungan awal yang dapat dicoba</th><th>Catatan yang perlu dikumpulkan</th></tr></thead><tbody><tr><td>Sulit memulai tugas</td><td>Instruksi satu langkah, contoh selesai, dan timer visual</td><td>Durasi mulai, jenis tugas, serta bantuan yang diperlukan</td></tr><tr><td>Khawatir terhadap perubahan</td><td>Pemberitahuan awal, urutan bergambar, dan pilihan jeda</td><td>Pemicu, kata atau gerak yang muncul, dan waktu pulih</td></tr><tr><td>Gelisah di lingkungan ramai</td><td>Tempat tenang, pelindung suara bila sesuai, dan akses keluar</td><td>Suara, cahaya, kepadatan, dan strategi yang menenangkan</td></tr><tr><td>Sering lelah atau sulit tidur</td><td>Rutinitas malam konsisten dan konsultasi jika menetap</td><td>Jam tidur, bangun, layar, obat, dan keluhan fisik</td></tr></tbody></table>`,
  FIG('Dokumentasi/artikel/terapi-okupasi-untuk-anak-cerebral-palsy-dokumentasi.webp', 'Pendamping membantu anak mengikuti aktivitas terarah di meja dengan alat kegiatan', 'Aktivitas terarah dapat dipecah menjadi langkah yang dapat dipahami anak, dengan penyesuaian alat dan posisi sesuai kebutuhan.' , 900, 484),
  H2('kapan-mencari-bantuan', 'Kapan Perlu Mencari Bantuan Profesional'),
  P(`Pertimbangkan konsultasi ketika kesulitan berlangsung dan mengganggu sekolah, tidur, relasi, makan, kemandirian, atau keselamatan. Bawa catatan dari lebih dari satu lingkungan bila tersedia. Dokter anak, psikolog, psikiater anak, atau profesional lain yang berwenang dapat membantu menentukan penilaian yang sesuai. Pilih layanan yang menjelaskan proses, meminta persetujuan, dan memberi ruang bagi suara anak.`),
  P(`Mintalah evaluasi lebih cepat jika anak mengalami perubahan perilaku yang mendadak, penurunan fungsi yang tajam, keluhan fisik berulang, serangan panik berat, tidak mau makan atau tidur, atau menyampaikan keinginan menyakiti diri. Jika ada risiko keselamatan yang segera, hubungi layanan gawat darurat setempat. Artikel edukasi tidak dapat menggantikan penanganan langsung.`),
  P(`Penilaian yang baik tidak hanya mencari label. Profesional biasanya mempertimbangkan riwayat perkembangan, kesehatan, tidur, emosi, lingkungan, belajar, komunikasi, dan laporan orang yang mengenal anak. Tanyakan hasil apa yang akan diterima keluarga, pilihan dukungan, manfaat dan risiko, serta kapan tindak lanjut dilakukan. Orang tua berhak meminta penjelasan dengan bahasa yang mudah dipahami.`),
  P(`<div class="info-box"><h4>Catatan penting untuk keluarga</h4><p>Jangan memberi obat, suplemen, atau program terapi intensif berdasarkan artikel internet saja. Hindari menjanjikan “sembuh cepat” atau menyalahkan pola asuh. Fokuskan percakapan pada kebutuhan anak, dukungan yang dapat diuji dengan aman, dan rujukan yang dapat dipertanggungjawabkan.</p></div>`),
  H2('penutup', 'Membangun Dukungan yang Menghormati Anak'),
  P(`ADHD dan gangguan kecemasan pada anak memerlukan pengamatan yang sabar dan dukungan yang disesuaikan. Ada anak yang membutuhkan struktur lebih kuat, ada yang membutuhkan pengurangan suara dan tuntutan, dan ada yang membutuhkan bantuan mengungkapkan kekhawatiran. Sering kali strategi terbaik adalah menggabungkan beberapa penyesuaian kecil sambil memantau dampaknya.`),
  P(`Keberhasilan tidak selalu berupa anak duduk diam atau menyelesaikan tugas dengan cara yang sama seperti teman sekelasnya. Keberhasilan dapat berarti anak mampu meminta jeda, memahami urutan kegiatan, kembali tenang, mencoba langkah berikutnya, dan merasa aman untuk meminta bantuan. Dengan sudut pandang ini, keluarga dan sekolah dapat bekerja sama tanpa mereduksi anak menjadi masalah yang harus diperbaiki.`),
  FAQ(adhdFaq)
];

const sleepBody = [
  P(`<div class="jawaban-singkat"><strong>Intinya:</strong> cara mengatur waktu tidur anak autis dimulai dari mengenali pola tidur, membuat urutan malam yang singkat dan dapat diprediksi, menyesuaikan cahaya, suara, suhu, dan tekstur, lalu mengevaluasi perubahan secara bertahap. Jika masalah menetap, mengganggu fungsi, atau disertai dengkuran keras dan jeda napas, keluarga perlu meminta penilaian profesional.</div>`),
  P(`Masalah tidur dapat membuat pagi, sekolah, terapi, dan hubungan keluarga menjadi lebih berat. Anak mungkin sulit mulai tidur, terbangun berkali-kali, bangun terlalu dini, atau sangat mengantuk pada siang hari. Pada anak autis, kebutuhan terhadap rutinitas dan perbedaan pemrosesan sensorik dapat membuat perubahan kecil terasa besar. Namun, tidak ada satu jadwal yang cocok untuk semua anak. Tujuannya bukan memaksa anak mengikuti jam ideal orang dewasa, melainkan membangun pola yang cukup sehat, aman, dan dapat dijalankan keluarga.`),
  P(`NICE merekomendasikan penilaian terhadap pola tidur siang dan malam, keteraturan waktu tidur, lingkungan, aktivitas, kondisi fisik, obat, hubungan emosional, dan dampak masalah tidur pada keluarga. NHS juga menyarankan rutinitas yang familiar, pemberitahuan perubahan, dan lingkungan yang nyaman. Prinsip ini sejalan dengan ${L('pendidikan-inklusi', 'dukungan inklusif')} dan ${L('program-pembelajaran-individual', 'perencanaan individual')}: kebutuhan anak menjadi titik awal, bukan sekadar kepatuhan pada jadwal.`),
  H2('mulai-dari-pola', 'Mulai dari Pola Tidur, Bukan Tebakan'),
  P(`Selama sekitar dua minggu, catat waktu anak mulai bersiap, masuk tempat tidur, tertidur, terbangun, bangun pagi, tidur siang, dan aktivitas penting pada siang hari. Tambahkan catatan tentang layar, makanan atau minuman yang mengandung kafein, sakit, sembelit, gatal, suara, cahaya, dan perubahan sekolah. Catatan ini bukan ujian bagi orang tua. Data sederhana membantu keluarga melihat apakah masalah terjadi setiap malam atau hanya setelah hari tertentu.`),
  P(`Bedakan antara jam masuk kamar dan jam benar-benar tertidur. Jika anak berada di tempat tidur pukul delapan tetapi baru tertidur pukul sepuluh, memajukan waktu masuk kamar belum tentu membantu. Perhatikan kapan tanda mengantuk muncul secara alami, lalu bangun urutan persiapan di sekitar waktu tersebut. Setelah pola lebih stabil, jadwal dapat digeser perlahan bila keluarga perlu menyesuaikannya dengan sekolah.`),
  P(`Periksa kemungkinan penyebab yang dapat ditangani. Nyeri gigi, refluks, eczema, alergi, konstipasi, kejang, efek obat, atau gangguan napas dapat mengganggu tidur. Jangan menganggap semua masalah tidur sebagai perilaku. Jika anak mendengkur keras, tersedak, atau tampak berhenti bernapas, NICE menyarankan rujukan kepada spesialis untuk menilai sleep apnoea. Bila anak mengantuk berat setiap hari, sampaikan juga kepada tenaga kesehatan.`),
  FIG('Dokumentasi/candi-plaosan-penari-tradisional-candi-borobudur-064.webp', 'Anak-anak dan pendamping berfoto dalam kostum kegiatan di depan bangunan cagar budaya', 'Dokumentasi kegiatan YUKA ini bukan ilustrasi klinis. Kegiatan di luar rumah dapat menjadi contoh bahwa perubahan tempat dan waktu perlu diperkenalkan dengan persiapan yang dapat dipahami anak.' , 936, 1248),
  H2('buat-urutan-yang-dapat-diprediksi', 'Buat Urutan Malam yang Dapat Diprediksi'),
  P(`Pilih tiga sampai enam langkah yang dapat dilakukan dalam urutan sama. Contohnya merapikan barang, ke kamar mandi, memakai pakaian tidur, menyikat gigi, membaca atau mendengarkan suara tenang, lalu masuk tempat tidur. Tidak semua langkah harus dilakukan lama. Yang penting adalah tanda awal, urutan, dan penutupnya konsisten. Untuk anak yang menggunakan komunikasi visual, kartu atau foto dapat ditempel pada ketinggian yang mudah dijangkau.`),
  P(`Biarkan anak berpartisipasi. Anak dapat memilih antara dua piyama, dua buku, atau dua lagu yang sama-sama diterima. Ia dapat membalik kartu setelah langkah selesai atau menekan tombol pada alat komunikasi. Pilihan kecil memberi rasa kendali tanpa mengubah batas utama. Hindari menambahkan banyak pertanyaan ketika anak sudah mengantuk, karena percakapan panjang dapat membuat transisi lebih sulit.`),
  P(`Gunakan kalimat penutup yang sama setiap malam, misalnya “urutan malam selesai, sekarang waktunya tidur”. Kalimat ini bukan ancaman dan tidak harus diucapkan dengan nada keras. Jika anak membutuhkan objek penghibur, pastikan objek tersebut aman dan tidak menimbulkan risiko. Bila ada langkah yang menimbulkan penolakan, cari penyebab sensorik atau kesehatan sebelum menambah hadiah dan hukuman.`),
  P(`Gambar jadwal visual di rumah dapat menjadi alat bantu, tetapi jangan menganggap semua kartu cocok. Pilih gambar yang jelas, letakkan berurutan, dan perbarui jika anak sudah memahami langkah. ${L('jadwal-visual-anak-autis', 'contoh jadwal visual anak autis')} dapat memberi ide tentang cara membuat urutan terlihat, sedangkan ${L('terapi-okupasi-untuk-anak-cerebral-palsy', 'adaptasi aktivitas')} mengingatkan bahwa posisi dan alat juga dapat memengaruhi kenyamanan.`),
  FIG('Dokumentasi/artikel/gangguan-tidur-anak-adhd-jadwal.webp', 'Kartu visual berisi simbol aktivitas makan, mandi, dan tidur yang disusun sebagai urutan', 'Urutan visual dapat membantu anak memahami transisi menuju tidur. Sesuaikan simbol dengan cara komunikasi dan tingkat pemahaman anak.' , 1200, 1200),
  H2('atur-lingkungan-dan-sensorik', 'Atur Lingkungan Tidur dan Kebutuhan Sensorik'),
  P(`Periksa cahaya, suara, suhu, bau, tekstur seprai, posisi bantal, dan pakaian tidur. Sebagian anak lebih tenang dengan ruang gelap, sementara yang lain membutuhkan lampu kecil. Ada anak yang terganggu oleh suara kulkas, kain tertentu, atau aroma sabun. Lakukan satu perubahan pada satu waktu agar keluarga dapat mengetahui apa yang berdampak. Jangan memakai alat penekan, selimut berbobot, atau perangkat tertentu tanpa memastikan keamanan dan saran profesional.`),
  P(`Letakkan layar di luar kamar bila memungkinkan dan buat kesepakatan kapan penggunaannya berhenti. Untuk beberapa keluarga, penghentian mendadak memicu konflik. Gunakan peringatan visual atau timer, lalu ganti layar dengan kegiatan yang tidak terlalu merangsang. Buku, audio tenang, menggambar sederhana, atau merapikan koleksi dapat menjadi pilihan, selama aktivitas tersebut tidak membuat anak semakin aktif.`),
  P(`Atur aktivitas siang agar anak memiliki kesempatan bergerak dan terkena cahaya alami, tetapi hindari mengubah semua hal sekaligus. Tidur siang yang terlalu dekat dengan malam mungkin perlu dibahas, tetapi kebutuhan berbeda menurut usia dan kondisi. Jangan mengurangi tidur siang secara ekstrem agar anak “pasti lelah”. Perubahan drastis dapat memperburuk regulasi emosi dan membuat rutinitas lebih sulit.`),
  P(`Bicarakan aturan kamar dengan bahasa positif. “Lampu redup dan suara pelan” lebih mudah dipahami daripada “jangan berisik”. Jika anak perlu keluar kamar untuk meminta bantuan, sediakan cara komunikasi yang aman. Keluarga dapat mengajarkan satu tanda untuk kebutuhan penting, lalu mengembalikan suasana menjadi tenang tanpa percakapan panjang.`),
  FIG('Dokumentasi/21-jan-2026-keluarga-belajar-bersama-dirumah-003.webp', 'Keluarga belajar bersama di ruang rumah dengan bahan kegiatan di atas meja', 'Lingkungan rumah yang teratur dan dukungan orang dewasa dapat membantu anak memahami urutan aktivitas sebelum dan sesudah waktu istirahat.' , 1209, 907),
  H2('geser-jadwal-secara-bertahap', 'Geser Waktu Tidur Secara Bertahap'),
  P(`Jika anak baru mengantuk jauh setelah waktu tidur yang diharapkan, mulai dari jam yang lebih dekat dengan pola alami. Setelah anak lebih cepat tertidur dan bangun cukup stabil, geser waktu persiapan sedikit demi sedikit. Ukuran perubahan perlu disesuaikan dengan respons anak. Sebagian keluarga lebih berhasil mengubah waktu lima belas menit daripada memajukan satu jam sekaligus.`),
  P(`Bangun pagi juga berperan dalam mengatur ritme. Usahakan waktu bangun tidak berubah terlalu jauh tanpa alasan, termasuk pada akhir pekan. Tetap beri ruang untuk tidur tambahan ketika anak sakit atau sangat lelah. Catat perubahan, bukan hanya keberhasilan. Jika satu langkah membuat anak lebih gelisah selama beberapa malam, kembali ke tahap sebelumnya dan cari penyebabnya.`),
  P(`<table class="classification-table"><thead><tr><th>Bagian yang diatur</th><th>Contoh langkah sederhana</th><th>Yang dipantau</th></tr></thead><tbody><tr><td>Waktu</td><td>Mulai persiapan pada waktu yang relatif sama</td><td>Waktu mulai mengantuk dan lama sampai tertidur</td></tr><tr><td>Urutan</td><td>Gunakan tiga sampai enam kartu aktivitas</td><td>Langkah yang lancar dan langkah yang memicu penolakan</td></tr><tr><td>Lingkungan</td><td>Kurangi cahaya, suara, atau tekstur yang mengganggu</td><td>Respons sensorik dan kemampuan kembali tenang</td></tr><tr><td>Evaluasi</td><td>Catat pola selama dua minggu sebelum menilai hasil</td><td>Bangun malam, bangun pagi, tidur siang, dan fungsi siang hari</td></tr></tbody></table>`),
  P(`Buat versi singkat untuk malam ketika keluarga sedang bepergian atau anak sakit. Misalnya, kamar mandi, pakaian tidur, satu cerita pendek, lalu tempat tidur. Simpan kartu versi singkat di tas atau ponsel. Saat kembali ke rumah, jelaskan bahwa urutan utama akan digunakan lagi. Prediktabilitas dapat dipertahankan meski panjang rutinitas berubah.`),
  FIG('Dokumentasi/jadwal-visual-anak-autis-rumah.webp', 'Papan jadwal visual di rumah yang membantu anak mengikuti urutan kegiatan harian', 'Jadwal visual dapat dipakai untuk menandai kegiatan malam dan perubahan yang sudah diberi tahu sebelumnya.' , 1200, 1200),
  H2('jika-rutinitas-belum-berhasil', 'Jika Rutinitas Belum Berhasil'),
  P(`Jangan langsung menambah aturan. Tinjau catatan dan tanyakan bagian mana yang paling berat. Anak mungkin belum mengantuk, merasa sakit, takut gelap, terganggu suara, atau tidak memahami kapan urutan berakhir. Ubah satu bagian, pertahankan beberapa malam, dan amati. Jika orang tua sangat lelah, minta dukungan keluarga atau layanan setempat. Kebutuhan pengasuh juga bagian dari rencana tidur yang aman.`),
  P(`Jika anak keluar kamar berulang kali, gunakan respons yang singkat, tenang, dan konsisten setelah memastikan kebutuhan dasar terpenuhi. Hindari percakapan panjang atau hukuman yang membuat kamar menjadi tempat menakutkan. Rencana harus disesuaikan dengan usia, komunikasi, kemampuan keselamatan, dan kondisi keluarga. Konsultasikan dengan profesional bila strategi sederhana tidak membantu atau menambah stres.`),
  P(`NICE menyarankan sleep plan yang disusun bersama orang tua atau pengasuh, dicatat, ditinjau, dan dimodifikasi bila perlu. Obat bukan langkah pertama untuk semua masalah tidur. Jika intervensi farmakologis dipertimbangkan, NICE menyebut perlunya konsultasi dengan dokter spesialis anak atau psikiater yang berpengalaman dalam autisme atau kedokteran tidur, serta pemantauan berkala. Jangan membeli melatonin atau obat lain berdasarkan rekomendasi media sosial.`),
  P(`Perhatikan tanda yang perlu rujukan: dengkuran keras, tersedak, jeda napas, berjalan saat tidur yang berisiko, kejang, nyeri, kantuk berat di siang hari, atau penurunan fungsi mendadak. Tulis apa yang terlihat dan kapan terjadi. Keterangan yang konkret membantu tenaga kesehatan memilih pemeriksaan yang tepat dan mencegah semua kesulitan diberi label perilaku.`),
  H2('penutup-tidur-aman', 'Rutinitas yang Fleksibel tetapi Tetap Aman'),
  P(`Cara mengatur waktu tidur anak autis bukan tentang menemukan satu jadwal sempurna. Keluarga perlu menggabungkan pengamatan, urutan yang jelas, penyesuaian sensorik, aktivitas siang, dan evaluasi yang sabar. Anak boleh memiliki preferensi dan cara menenangkan diri yang berbeda. Tugas orang dewasa adalah memastikan pilihan itu aman, dapat dipahami, dan tidak menghalangi bantuan kesehatan ketika diperlukan.`),
  P(`Mulai dari satu perubahan yang dapat dipertahankan. Foto jadwal, kalimat penutup, lampu yang sesuai, atau waktu bangun yang lebih konsisten dapat menjadi langkah pertama. Jika belum berhasil, itu informasi, bukan kegagalan anak atau orang tua. Bawa catatan tidur ketika meminta bantuan agar percakapan dimulai dari pola nyata, bukan dugaan. Kebutuhan setiap keluarga berbeda, jadi keberhasilan dapat berarti malam lebih aman, bukan selalu tidur lebih cepat. Hubungkan penyesuaian rumah dengan prinsip ${L('pendidikan-inklusi', 'pendidikan inklusi')} dan ${L('intervensi-dini', 'intervensi dini')} agar sekolah dan keluarga dapat memakai bahasa dukungan yang selaras. Baca juga ${L('gangguan-tidur-anak-adhd', 'panduan tentang gangguan tidur pada anak')} dan ${L('rutinitas-pagi-anak-autis-cara-membuat', 'cara membangun rutinitas pagi')} agar dukungan tidur terhubung dengan kegiatan sepanjang hari.`),
  P(`Dengan dukungan yang konsisten dan penuh hormat, waktu tidur dapat menjadi momen transisi yang lebih mudah dipahami. Keamanan, kenyamanan, dan kesehatan anak tetap menjadi prioritas. Bila masalah menetap atau berdampak besar, minta bantuan profesional dan bawa catatan tidur yang sudah dibuat.`),
  FAQ(sleepFaq)
];

const articles = [
  {
    slug: 'adhd-dan-gangguan-kecemasan-pada-anak',
    titleTag: 'ADHD dan Gangguan Kecemasan pada Anak: Panduan',
    metaDesc: 'Pahami hubungan ADHD dan gangguan kecemasan pada anak, tanda yang perlu diamati, dukungan di rumah dan sekolah, serta kapan berkonsultasi.',
    keywords: 'adhd dan gangguan kecemasan pada anak, ADHD anak, kecemasan anak, dukungan anak berkebutuhan khusus',
    ogTitle: 'ADHD dan Gangguan Kecemasan pada Anak',
    ogDesc: 'Panduan non-diagnostik untuk orang tua dan guru memahami pola perhatian, kecemasan, serta dukungan yang aman bagi anak.',
    datePublished: '2026-10-08T09:00:00+07:00',
    dateModified: '2026-10-11T12:30:00+07:00',
    dateDisplay: '08 Oktober 2026',
    readTime: '14 menit baca',
    category: 'Pendidikan',
    h1: 'ADHD dan Gangguan Kecemasan pada Anak: Memahami Tanda dan Dukungan',
    crumb: 'ADHD dan Gangguan Kecemasan pada Anak',
    parent: { href: 'pendidikan-khusus', name: 'Pendidikan Khusus' },
    image: { file: 'Dokumentasi/artikel/perbedaan-adhd-dan-autis-pada-anak-dokumentasi.webp', w: 1200, h: 800, alt: 'Anak dan pendamping mengikuti kegiatan bersama di ruang belajar YUKA', caption: 'Dokumentasi kegiatan belajar bersama. Foto ini merupakan gambaran aktivitas umum, bukan ilustrasi diagnosis ADHD atau gangguan kecemasan.', credit: CREDIT },
    about: ['ADHD pada anak', 'Gangguan kecemasan pada anak', 'Pendidikan inklusif'],
    tags: ['ADHD anak', 'kecemasan anak', 'pendidikan inklusif', 'dukungan keluarga'],
    sourcesCheckedNote: sourceNote,
    sources: [
      { label: 'CDC - Other Concerns and Conditions with ADHD', url: 'https://www.cdc.gov/adhd/other-topics/other-concerns-conditions.html' },
      { label: 'CDC - Clinical Care of ADHD', url: 'https://www.cdc.gov/adhd/hcp/clinical-care/index.html' },
      { label: 'NIMH - Anxiety Disorders', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
      { label: 'NIMH - Publications About Children and Adolescents', url: 'https://www.nimh.nih.gov/health/publications/children-and-adolescents-listing' }
    ],
    related: related([
      ['pendidikan-khusus', 'Pendidikan Khusus dan Dukungan Anak', 'Mengenali dukungan belajar berdasarkan kebutuhan dan kekuatan anak.'],
      ['pendidikan-inklusi', 'Pendidikan Inklusi di Sekolah', 'Penyesuaian lingkungan belajar agar anak dapat berpartisipasi.'],
      ['program-pembelajaran-individual', 'Program Pembelajaran Individual', 'Menyusun tujuan belajar yang spesifik dan bermakna.']
    ]),
    faq: adhdFaq.map(([q, a]) => ({ q, a })),
    bodyHtml: adhdBody.join('\n')
  },
  {
    slug: 'cara-mengatur-waktu-tidur-anak-autis',
    titleTag: 'Cara Mengatur Waktu Tidur Anak Autis: Panduan',
    metaDesc: 'Pelajari cara mengatur waktu tidur anak autis dengan rutinitas visual, penyesuaian sensorik, catatan tidur, dan tanda perlu bantuan profesional.',
    keywords: 'cara mengatur waktu tidur anak autis, rutinitas tidur anak autis, sleep plan autisme, jadwal tidur anak',
    ogTitle: 'Cara Mengatur Waktu Tidur Anak Autis',
    ogDesc: 'Langkah praktis dan non-diagnostik untuk membuat rutinitas tidur yang konsisten, fleksibel, dan sesuai kebutuhan anak.',
    datePublished: '2026-08-31T09:00:00+07:00',
    dateModified: '2026-10-11T12:30:00+07:00',
    dateDisplay: '31 Agustus 2026',
    readTime: '14 menit baca',
    category: 'Pendidikan',
    h1: 'Cara Mengatur Waktu Tidur Anak Autis dengan Rutinitas yang Konsisten',
    crumb: 'Cara Mengatur Waktu Tidur Anak Autis',
    parent: { href: 'pendidikan-khusus', name: 'Pendidikan Khusus' },
    image: { file: 'Dokumentasi/artikel/strategi-mengajar-anak-autis-di-kelas-kelas.webp', w: 1080, h: 675, alt: 'Anak-anak mengikuti kegiatan terarah bersama pendamping di ruang belajar', caption: 'Dokumentasi kegiatan belajar terarah. Rutinitas yang jelas dapat membantu anak memahami urutan kegiatan, tetapi penerapannya perlu disesuaikan dengan kebutuhan setiap anak.', credit: CREDIT },
    about: ['Tidur anak autis', 'Rutinitas harian anak', 'Dukungan keluarga'],
    tags: ['tidur anak autis', 'rutinitas tidur', 'jadwal visual', 'pendampingan anak'],
    sourcesCheckedNote: sourceNote,
    sources: [
      { label: 'NICE - Autism spectrum disorder in under 19s: recommendations', url: 'https://www.nice.org.uk/guidance/cg170/chapter/Recommendations' },
      { label: 'NHS - Supporting an autistic child', url: 'https://www.nhs.uk/conditions/autism/supporting-a-child/' },
      { label: 'NHS - Sleep and young children', url: 'https://www.nhs.uk/baby/health/sleep-and-young-children' },
      { label: 'CDC NCHS - Sleep Routines and Tiredness Among Children', url: 'https://www.cdc.gov/nchs/products/databriefs/db551.htm' }
    ],
    related: related([
      ['pendidikan-khusus', 'Pendidikan Khusus untuk Anak', 'Dukungan yang dirancang berdasarkan kebutuhan anak.'],
      ['jadwal-visual-anak-autis', 'Jadwal Visual Anak Autis', 'Cara memakai petunjuk visual dalam kegiatan sehari-hari.'],
      ['gangguan-tidur-anak-adhd', 'Gangguan Tidur pada Anak', 'Tanda yang perlu diamati dan kapan meminta bantuan.']
    ]),
    faq: sleepFaq.map(([q, a]) => ({ q, a })),
    bodyHtml: sleepBody.join('\n')
  }
];

// Artikel ADHD sudah dipublikasikan lebih dulu di origin/main dengan riset upstream
// yang lebih lengkap. Generator ini hanya memelihara artikel tidur pada batch ini.
for (const article of articles.filter((a) => a.slug === 'cara-mengatur-waktu-tidur-anak-autis')) {
  const html = renderArticlePage(article);
  const out = path.join(OUT, `${article.slug}.html`);
  fs.writeFileSync(out, html);
  console.log(`WROTE ${out} ${html.length} bytes`);
}

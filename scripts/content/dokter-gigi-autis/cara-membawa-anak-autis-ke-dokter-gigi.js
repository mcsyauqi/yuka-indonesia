'use strict';
// Isi artikel /artikel/cara-membawa-anak-autis-ke-dokter-gigi (kartu Trello nrqN7H0i, catchup 2026-10-04).
// Menggantikan versi 2026-10-03 04:55 WIB (commit bc1a6f8) yang judulnya kunjungan ke dokter gigi tetapi badannya
// salinan artikel perawatan-gigi-anak-berkebutuhan-khusus-tips (konten duplikat, kartu induk P0 gswe5XFa pasangan #3).
// Sudut artikel: KUNJUNGAN ke dokter gigi (persiapan, hari H, di kursi periksa, bila anak tidak bisa bekerja sama),
// bukan menyikat gigi harian di rumah (itu wilayah artikel perawatan-gigi-anak-berkebutuhan-khusus-tips).
// Fakta dicek ke sumber aslinya pada 4 Oktober 2026:
//  - NIDCR (NIH), Practical Oral Care for People With Autism (PDF berlabel ARCHIVED): kunjungan desensitisasi bertahap,
//    tell-show-do, staf/ruang/jam yang sama, kurangi rangsang, redupkan lampu, benda kenyamanan, pendamping duduk dekat,
//    imobilisasi hanya bila benar-benar perlu, hadiah selain makanan kariogenik, catat preferensi di rekam medis.
//  - NIDCR, halaman Developmental Disabilities and Oral Health (riset kunjungan lebih nyaman untuk anak autis).
//  - AAPD Best Practices: Behavior Guidance (previsit imagery, tell-show-do, desensitisasi, SADE, PECS, kunjungan
//    pra-janji, stabilisasi protektif butuh informed consent, sedasi, anestesi umum).
//  - AAPD Best Practices: Management of Dental Patients with Special Health Care Needs (anestesi umum sebelum usia 2
//    tahun tidak terkait perkembangan autisme menurut riset yang dikutip, riset lanjutan masih diperlukan).
//  - PubMed (angka diambil dari abstrak): Nelson dkk. 2015 (25470557), Cermak dkk. 2015 (25931290), Stein Duker dkk.
//    2023 (37266941), Star dkk. 2023 (38129759), Prynda dkk. 2024 (39685603), Liu dkk. 2026 (42330054),
//    Erwin dkk. 2022 (35716111), Uliana dkk. 2024 (38321186), da Motta dkk. 2026 (39976759).
//  - RSGM UGM Prof. Soedomo, halaman Klinik Gigi Spesialistik (Pedodonti mencakup anak berkebutuhan khusus).
// Tidak ada nama klinik, tarif, jam praktik, nama dokter, atau peninjau medis yang dikarang.

const NIDCR_PDF = 'https://www.nidcr.nih.gov/sites/default/files/2020-10/practical-oral-care-autism.pdf';
const NIDCR_DD = 'https://www.nidcr.nih.gov/health-info/developmental-disabilities';
const NIDCR_NEWS = 'https://www.nidcr.nih.gov/news-events/nidcr-news/2021/safe-space-dental-clinic';
const AAPD_BG = 'https://www.aapd.org/media/Policies_Guidelines/BP_BehavGuide.pdf';
const AAPD_SHCN = 'https://www.aapd.org/media/Policies_Guidelines/BP_SHCN.pdf';
const NELSON = 'https://pubmed.ncbi.nlm.nih.gov/25470557/';
const CERMAK = 'https://pubmed.ncbi.nlm.nih.gov/25931290/';
const STEIN = 'https://pubmed.ncbi.nlm.nih.gov/37266941/';
const STAR = 'https://pubmed.ncbi.nlm.nih.gov/38129759/';
const PRYNDA = 'https://pubmed.ncbi.nlm.nih.gov/39685603/';
const LIU = 'https://pubmed.ncbi.nlm.nih.gov/42330054/';
const ERWIN = 'https://pubmed.ncbi.nlm.nih.gov/35716111/';
const ULIANA = 'https://pubmed.ncbi.nlm.nih.gov/38321186/';
const DAMOTTA = 'https://pubmed.ncbi.nlm.nih.gov/39976759/';
const RSGM_UGM = 'https://rsgm.ugm.ac.id/klinik-gigi-spesialistik/';

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  slug: 'cara-membawa-anak-autis-ke-dokter-gigi',
  keyword: 'cara membawa anak autis ke dokter gigi',
  titleTag: 'Cara Membawa Anak Autis ke Dokter Gigi: 7 Langkah Persiapan',
  metaDesc: 'Panduan orang tua membawa anak autis ke dokter gigi: memilih dokter, cerita sosial, kunjungan perkenalan, ruang ramah sensorik. Simak langkahnya.',
  ogTitle: 'Cara Membawa Anak Autis ke Dokter Gigi: Persiapan, Hari Kunjungan, dan Pilihan Bila Anak Belum Siap',
  ogDesc: 'Tujuh langkah persiapan kunjungan gigi untuk anak autis, teknik tell-show-do dan desensitisasi, hasil riset ruang praktik ramah sensorik, serta pilihan sedasi atau bius umum yang perlu dibicarakan dengan dokter.',
  h1: 'Cara Membawa Anak Autis ke Dokter Gigi: Persiapan Bertahap agar Kunjungan Lebih Tenang',
  crumb: 'Cara Membawa Anak Autis ke Dokter Gigi',
  parent: { name: 'Autisme pada Anak', href: 'autisme-adalah' },
  about: ['Gangguan spektrum autisme', 'Kunjungan dokter gigi anak', 'Desensitisasi dental', 'Sensory-adapted dental environment', 'Tell-show-do', 'Dokter gigi spesialis anak'],
  keywords: 'cara membawa anak autis ke dokter gigi, anak autis ke dokter gigi, persiapan anak autis periksa gigi, desensitisasi dokter gigi autis, dokter gigi anak berkebutuhan khusus, cerita sosial dokter gigi, ruang praktik ramah sensorik',
  readTime: '12 menit baca',
  image: {
    file: 'Dokumentasi/museum-gunung-merapi-keluarga-perjalanan-dalam-mobil-002.webp',
    w: 1248, h: 936,
    alt: 'Beberapa remaja dan anak berkaus merah muda duduk berdampingan di bangku minibus, sebagian menatap kamera, dengan jalan dan rumah terlihat dari kaca depan',
    caption: 'Siswa dan pendamping duduk bersama di dalam minibus saat berangkat ke kegiatan luar sekolah. Foto ini dokumentasi kegiatan YUKA, bukan foto kunjungan ke dokter gigi dan bukan gambaran anak dengan kondisi tertentu.',
    credit: 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).',
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  answer: '<strong>Cara membawa anak autis ke dokter gigi</strong> paling berhasil bila bertahap: pilih dokter yang terbiasa menangani anak berkebutuhan khusus, ceritakan profil sensorik anak sebelumnya, siapkan cerita bergambar, minta kunjungan perkenalan tanpa tindakan, lalu jaga jadwal, ruang, dan petugas tetap sama. Bila anak tetap belum bisa diperiksa, bicarakan pilihan lanjutan dengan dokternya.',
  intro: `
            <p>Bagi banyak anak autis, ruang praktik dokter gigi adalah tempat dengan rangsang paling padat: lampu terang tepat di wajah, bunyi bor dan penyedot liur, bau antiseptik, orang asing yang menyentuh mulut, dan kursi yang bergerak sendiri. Wajar bila kunjungan pertama berakhir dengan tangis atau anak menolak masuk. Kabar baiknya, sebagian besar kesulitan itu bisa dikurangi lewat persiapan yang terencana.</p>
            <p>Artikel ini fokus pada <em>kunjungan</em> ke dokter gigi: memilih tempat, menyiapkan anak, apa yang terjadi di kursi periksa, dan pilihan bila anak belum siap. Untuk urusan menyikat gigi sehari-hari di rumah, bacalah panduan terpisah kami tentang <a href="perawatan-gigi-anak-berkebutuhan-khusus-tips">perawatan gigi anak berkebutuhan khusus</a>. Kalau Anda baru mengenal autisme, mulailah dari halaman <a href="autisme-adalah">pengertian autisme pada anak</a>.</p>`,
  infoBox: 'Artikel ini adalah panduan persiapan untuk orang tua dan pendamping, bukan pengganti pemeriksaan atau saran dokter gigi. Keputusan tentang obat penenang, sedasi, atau bius umum hanya bisa diambil bersama dokter gigi dan dokter yang merawat anak. YUKA tidak mencantumkan tarif atau rekomendasi klinik tertentu karena keduanya berbeda per daerah.',
  sections: [
    {
      id: 'kenapa-penting',
      h2: 'Kenapa Kunjungan Rutin Tetap Penting',
      toc: 'Kenapa kunjungan rutin tetap penting',
      html: `
            <p>Menunda ke dokter gigi sampai anak "siap sendiri" sering berarti baru datang ketika gigi sudah sakit, dan kunjungan karena sakit hampir selalu lebih berat daripada pemeriksaan rutin. Data penelitian juga menunjukkan anak autis punya alasan kuat untuk diperiksa teratur:</p>
            <ul>
                <li>Tinjauan sistematis dan meta-analisis atas 47 studi dengan 6.885 individu autis menemukan tingkat keparahan karies gigi susu, plak, dan radang gusi lebih tinggi dibanding kelompok pembanding, serta peluang bruxism (menggertakkan gigi) sekitar empat kali lipat. Penulis menyebut sebagian besar efeknya kecil dengan kepastian bukti sangat rendah (${ext(ULIANA, 'Uliana dkk., Clin Oral Investig 2024')}).</li>
                <li>Meta-analisis lain atas 25 studi tidak menemukan perbedaan pada sebagian besar indikator karies, tetapi jumlah permukaan gigi yang berlubang (indeks DMFS) lebih tinggi pada anak dan remaja autis, yang menandakan karies lebih parah (${ext(DAMOTTA, 'da Motta dkk., J Autism Dev Disord 2026')}).</li>
            </ul>
            <p>Hambatannya pun sudah dipetakan. Tinjauan sistematis atas 59 studi merangkum sembilan tema yang memengaruhi akses perawatan gigi anak autis, antara lain biaya dan keterjangkauan, lingkungan klinik, cara mengelola perilaku, sikap tenaga kesehatan gigi, kerja sama orang tua dengan dokter, serta komunikasi dan kedekatan (${ext(ERWIN, 'Erwin dkk., Health Expect 2022')}). Artinya, keberhasilan kunjungan bukan hanya soal anak, tetapi juga soal tempat dan cara dokter menyambutnya.</p>`
    },
    {
      id: 'memilih-dokter',
      h2: 'Memilih Dokter Gigi dan Tempat Periksa',
      toc: 'Memilih dokter gigi dan tempat periksa',
      html: `
            <p>Di Indonesia, dokter gigi yang menempuh pendidikan lanjutan khusus anak bergelar <strong>Sp.KGA</strong> (Spesialis Kedokteran Gigi Anak). Rumah sakit gigi dan mulut pendidikan milik fakultas kedokteran gigi umumnya punya layanan ini. Contohnya di Yogyakarta, ${ext(RSGM_UGM, 'Klinik Gigi Spesialistik RSGM UGM Prof. Soedomo')} menyebut layanan Pedodonti (kedokteran gigi anak) mencakup pencegahan dan perawatan penyakit gigi dan mulut pada anak, termasuk anak berkebutuhan khusus. Dokter gigi umum yang sabar dan mau menyesuaikan diri juga bisa menjadi pilihan; buklet NIDCR menyebut sebagian besar orang dengan autisme ringan sampai sedang dapat dirawat dengan baik di praktik umum (${ext(NIDCR_PDF, 'NIDCR, Practical Oral Care for People With Autism')}).</p>
            <p>Sebelum membuat janji, telepon atau kirim pesan ke klinik dan tanyakan beberapa hal ini:</p>
            <ul>
                <li>Apakah dokter pernah menangani anak autis atau anak berkebutuhan khusus lain?</li>
                <li>Bolehkah anak datang sekali untuk berkenalan dan melihat ruangan tanpa tindakan apa pun? Pedoman American Academy of Pediatric Dentistry (AAPD) menyebut petugas penjadwalan dapat menawarkan kunjungan pra-janji untuk bertemu tim dan melihat fasilitas (${ext(AAPD_BG, 'AAPD, Behavior Guidance')}).</li>
                <li>Adakah jam yang biasanya sepi sehingga waktu tunggu singkat, dan bolehkah menunggu di luar atau di mobil sampai dipanggil?</li>
                <li>Bisakah lampu ruangan diredupkan, musik dimatikan, atau anak memakai penutup telinga sendiri?</li>
                <li>Apakah orang tua boleh mendampingi di dalam ruang periksa?</li>
            </ul>
            <p>Jawaban yang terbuka dan tidak terburu-buru biasanya pertanda baik. Klinik yang menolak semua penyesuaian sejak awal mungkin bukan tempat yang tepat untuk kunjungan pertama.</p>`
    },
    {
      id: 'tujuh-langkah',
      h2: '7 Langkah Menyiapkan Kunjungan',
      toc: 'Tujuh langkah menyiapkan kunjungan',
      html: `
            <h3>1. Buat profil singkat anak untuk dokter</h3>
            <p>NIDCR menganjurkan dokter berbicara dengan orang tua untuk memahami kemampuan intelektual dan fungsional anak, lalu berkomunikasi pada tingkat yang anak pahami. Bantu dokter dengan satu lembar catatan: cara anak berkomunikasi (bicara, gambar, isyarat, atau perangkat <a href="aplikasi-komunikasi-aac-terbaik-untuk-anak">komunikasi AAC</a>), hal yang memicu panik, sentuhan yang diterima atau ditolak, rasa yang disukai, benda yang menenangkan, dan riwayat kejang atau obat rutin. Banyak anak autis sangat peka terhadap suara, cahaya, atau sentuhan, seperti dijelaskan dalam artikel kami tentang <a href="sensory-over-responsivity-pada-anak">sensory over-responsivity</a>.</p>
            <h3>2. Siapkan cerita bergambar tentang kunjungan</h3>
            <p>AAPD memasukkan <em>positive previsit imagery</em>, yaitu memperlihatkan foto atau gambar perawatan gigi sebelum janji temu, sebagai teknik yang boleh dipakai untuk semua pasien. Tinjauan Nelson dkk. juga menyebut cerita atau video yang ditonton sebelum janji temu sebagai salah satu prinsip pendidikan anak autis yang bisa dibawa ke klinik gigi (${ext(NELSON, 'Nelson dkk., Spec Care Dentist 2015')}). Susun urutannya dengan foto asli klinik bila ada: datang, menunggu, duduk di kursi, membuka mulut, gigi dihitung, berkumur, selesai, pulang. Format <a href="cara-membuat-jadwal-visual-untuk-anak-autis">jadwal visual</a> yang biasa dipakai di rumah atau sekolah bisa dipakai ulang di sini.</p>
            <h3>3. Latihan di rumah lewat bermain</h3>
            <p>Mainkan peran dokter gigi dengan boneka, lalu bergantian: anak berbaring di sofa, Anda menghitung giginya dengan sikat gigi atau jari sambil menyorotkan senter kecil. Mulai dari hitungan pendek, misalnya sampai lima, lalu panjangkan perlahan. Tinjauan atas sembilan uji acak menemukan pemodelan video, yaitu anak menonton video orang lain menjalani pemeriksaan, bersama ruang ramah sensorik termasuk strategi yang paling efektif menurunkan distres saat kunjungan (${ext(PRYNDA, 'Prynda dkk., J Clin Med 2024')}).</p>
            <h3>4. Minta kunjungan perkenalan (desensitisasi)</h3>
            <p>NIDCR menyarankan dokter merencanakan janji desensitisasi agar pasien mengenal ruangan, petugas, dan alat secara bertahap, dan langkah ini bisa butuh beberapa kali kunjungan. Contoh tahapnya: masuk ruang tunggu, masuk ruang periksa, duduk di kursi, kursi digerakkan, lampu dinyalakan, mulut dibuka, gigi disentuh kaca mulut. Dalam studi di University of California San Francisco, 52 anak autis menjalani rata-rata 6,7 kunjungan desensitisasi dengan pemeriksaan rutin yang dipecah menjadi tujuh tahap. Kira-kira separuhnya berhasil menjalani semua tahap selama dua tahun studi, dan makin banyak kunjungan, makin banyak tahap yang bisa dijalani dengan nyaman (${ext(STAR, 'Star dkk., Pediatr Dent 2023')}).</p>
            <h3>5. Jaga jadwal, ruang, dan petugas tetap sama</h3>
            <p>Anak autis umumnya butuh keteraturan. NIDCR menganjurkan memakai staf, ruang praktik, dan jam janji yang sama agar suasana tetap familier. Mintalah klinik mencatat apa yang berhasil (misalnya rasa pasta tertentu atau musik tertentu) supaya kunjungan berikutnya mengikuti pola yang sama.</p>
            <h3>6. Siapkan tas kunjungan</h3>
            <p>Bawa benda kenyamanan anak, karena NIDCR mencatat perilaku sebagian pasien membaik bila membawa boneka atau selimut kesayangan. Tambahkan penutup telinga, kacamata hitam bila anak silau, camilan dan minuman untuk dibawa pulang, kartu jadwal visual, serta pakaian ganti. Datanglah tepat waktu, tidak terlalu awal, supaya waktu menunggu tidak menghabiskan kesabaran anak.</p>
            <h3>7. Tutup dengan pengalaman yang menyenangkan</h3>
            <p>Berikan pujian yang spesifik dan hadiah yang sudah dijanjikan. NIDCR mengingatkan orang tua agar menawarkan hadiah pengganti makanan atau minuman manis yang merusak gigi. Stiker, waktu bermain favorit, atau kegiatan pilihan anak bisa menjadi gantinya; panduan <a href="reward-system-efektif-untuk-anak-autis">sistem hadiah untuk anak autis</a> membahas cara memilihnya. Catat juga apa yang membuat anak gelisah, sebagai bahan perbaikan kunjungan berikutnya.</p>`
    },
    {
      id: 'di-kursi-periksa',
      h2: 'Apa yang Bisa Dilakukan Dokter di Kursi Periksa',
      toc: 'Di kursi periksa: tell-show-do dan ruang ramah sensorik',
      html: `
            <p>Mengetahui teknik yang biasa dipakai dokter membantu orang tua bertanya dan bekerja sama. Pedoman ${ext(AAPD_BG, 'AAPD tentang behavior guidance')} menyebut beberapa teknik dasar, di antaranya komunikasi yang sesuai usia perkembangan, <em>tell-show-do</em>, penguatan positif, distraksi, dan desensitisasi. Untuk pasien yang cemas dan berkebutuhan khusus, AAPD menambahkan pilihan ruang praktik yang disesuaikan secara sensorik, terapi berbantuan hewan, dan sistem komunikasi pertukaran gambar (PECS).</p>
            <h3>Tell-show-do</h3>
            <p>Dokter <strong>menjelaskan</strong> tindakan dengan kalimat yang sesuai tingkat perkembangan anak, <strong>memperlihatkan</strong> wujud, bunyi, bau, dan sentuhan alatnya di tempat yang aman, lalu <strong>melakukan</strong> tindakan persis seperti yang dijelaskan. NIDCR juga menyarankan dokter memulai pemeriksaan dengan jari dan sikat gigi, karena sikat gigi adalah benda yang sudah dikenal anak, menjaga alat tetap di luar pandangan, dan tidak menyorotkan lampu ke mata anak. Satu catatan dari NIDCR: bila memperagakan alat (misalnya bunyi penyedot) justru membuat anak terus meniru bunyinya, peragaan itu sebaiknya dihindari.</p>
            <h3>Ruang praktik ramah sensorik (SADE)</h3>
            <p><em>Sensory-adapted dental environment</em> (SADE) adalah ruang praktik yang rangsang penglihatan, pendengaran, dan sentuhannya diubah, Ruang SADE yang dikembangkan tim University of Southern California memakai lampu redup, selimut berbobot yang memberi rasa seperti dipeluk erat, musik tenang, dan gambar yang diproyeksikan ke langit-langit (${ext(NIDCR_NEWS, 'NIDCR, A Safe Space in the Dental Clinic')}). Dalam uji acak silang tim tersebut, 162 anak autis usia 6 sampai 12 tahun menjalani satu pembersihan karang gigi di ruang biasa dan satu di ruang SADE. Di ruang SADE, stres fisiologis (diukur dari aktivitas listrik kulit) lebih rendah, dan frekuensi serta lama perilaku tertekan yang dinilai dari rekaman video juga lebih rendah. Tidak ada peserta yang mundur karena efek samping (${ext(STEIN, 'Stein Duker dkk., JAMA Netw Open 2023')}). Studi pendahuluan sebelumnya pada 44 anak juga menemukan kecemasan fisiologis, rasa nyeri, dan ketidaknyamanan sensorik lebih rendah di ruang SADE (${ext(CERMAK, 'Cermak dkk., J Autism Dev Disord 2015')}).</p>
            <p>Klinik di Indonesia jarang menyebut diri "SADE", tetapi banyak unsurnya bisa diminta: lampu ruangan diredupkan, ruang praktik yang agak terpisah dari keramaian, televisi atau musik dimatikan, dan anak memakai penutup telinga sendiri. NIDCR menganjurkan hal serupa: kurangi pemandangan, suara, dan bau yang tidak perlu, pilih ruang yang agak tersembunyi, dan tanyakan kepada pendamping apakah musik lembut membantu.</p>
            <h3>Peran orang tua di ruang periksa</h3>
            <p>NIDCR menyebut meminta pendamping duduk di dekat anak atau menggenggam tangannya bisa membantu. Sepakati dengan dokter siapa yang berbicara kepada anak, agar anak tidak menerima instruksi dari dua orang sekaligus. Bila anak mulai kewalahan, minta jeda singkat; AAPD menyebut jeda pendek saat prosedur yang menegangkan sebagai bentuk distraksi yang efektif sebelum mempertimbangkan teknik lanjutan. Kalau anak sudah terlanjur meltdown, utamakan keselamatan dan ketenangan, lalu jadwalkan ulang. Panduan <a href="cara-mengatasi-tantrum-anak-autis">mengatasi tantrum dan meltdown anak autis</a> bisa membantu membedakan keduanya.</p>`
    },
    {
      id: 'bukti-riset',
      h2: 'Ringkasan Bukti Penelitian',
      toc: 'Ringkasan bukti penelitian',
      html: `
            <p>Strategi di atas punya dasar penelitian, tetapi kekuatan buktinya berbeda-beda. Berikut ringkasannya:</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table" style="margin:0;min-width:560px;">
                <thead><tr><th>Studi</th><th>Desain dan peserta</th><th>Temuan utama dan batasan</th></tr></thead>
                <tbody>
                    <tr><td>${ext(STEIN, 'Stein Duker dkk., 2023')}</td><td>Uji acak silang, 162 anak autis 6 sampai 12 tahun, satu rumah sakit anak di Los Angeles</td><td>SADE menurunkan stres fisiologis dan perilaku tertekan saat pembersihan gigi. Hanya prosedur ringan; usia, IQ, dan kemampuan bicara memengaruhi hasil.</td></tr>
                    <tr><td>${ext(CERMAK, 'Cermak dkk., 2015')}</td><td>Studi pendahuluan acak silang, 22 anak autis dan 22 anak tipikal</td><td>Kecemasan fisiologis, nyeri, dan ketidaknyamanan sensorik lebih rendah di SADE. Sampel kecil.</td></tr>
                    <tr><td>${ext(STAR, 'Star dkk., 2023')}</td><td>Kohort prospektif, 52 anak autis, program desensitisasi tujuh tahap</td><td>Sekitar separuh anak menuntaskan semua tahap; jumlah kunjungan berhubungan dengan jumlah tahap yang dijalani nyaman. Tanpa kelompok pembanding.</td></tr>
                    <tr><td>${ext(PRYNDA, 'Prynda dkk., 2024')}</td><td>Tinjauan sistematis 9 uji acak, 25 sampai 138 peserta per studi</td><td>Pemodelan video dan SADE paling efektif menurunkan distres. Anak dengan autisme berat masih kurang terwakili.</td></tr>
                    <tr><td>${ext(LIU, 'Liu dkk., 2026')}</td><td>Tinjauan sistematis dan meta-analisis, 5 uji acak, 445 anak</td><td>Hanya data realitas virtual yang bisa digabung (kerja sama naik sekitar setengah poin skala Frankl); bukti teknik lain, termasuk SADE, masih terbatas.</td></tr>
                </tbody>
            </table></div>
            <p>Kesimpulan praktisnya: persiapan bertahap, gambaran visual, dan penyesuaian sensorik layak dicoba karena risikonya rendah dan sejumlah studi menunjukkan manfaat, tetapi belum ada satu teknik yang terbukti cocok untuk semua anak.</p>`
    },
    {
      id: 'bila-belum-bisa',
      h2: 'Bila Anak Tetap Belum Bisa Diperiksa',
      toc: 'Bila anak tetap belum bisa diperiksa',
      html: `
            <p>Sebagian anak tetap tidak bisa menjalani tindakan walau sudah dipersiapkan, terutama bila perawatannya panjang, seperti menambal banyak gigi atau mencabut gigi. AAPD menggolongkan stabilisasi protektif, sedasi, dan anestesi umum (bius total) sebagai teknik lanjutan, yang masing-masing harus dinilai tujuan, indikasi, kontraindikasi, dan kehati-hatiannya.</p>
            <ul>
                <li><strong>Stabilisasi protektif</strong> (membatasi gerak anak agar aman). NIDCR menegaskan teknik ini hanya dipakai bila benar-benar perlu untuk melindungi pasien dan petugas, bukan demi kemudahan, dengan persetujuan wali yang sah dan memilih cara paling tidak membatasi. AAPD mewajibkan alasan, jenis, persetujuan tindakan (informed consent), dan lamanya dicatat di rekam medis.</li>
                <li><strong>Sedasi</strong> memakai obat agar anak lebih tenang. NIDCR mengingatkan sebagian pasien dengan disabilitas perkembangan bisa bereaksi tidak terduga terhadap obat, sehingga riwayat obat dan kejang harus disampaikan lengkap.</li>
                <li><strong>Anestesi umum</strong> membuat anak tidak sadar selama perawatan sehingga beberapa tindakan bisa dikerjakan dalam satu sesi, dengan pengawasan dokter anestesi. Pedoman ${ext(AAPD_SHCN, 'AAPD untuk pasien berkebutuhan khusus')} mencatat kekhawatiran orang tua bahwa bius umum memicu autisme, dan menyebut riset tidak menemukan hubungan antara paparan bius umum sebelum usia 2 tahun (beserta jumlah paparannya) dengan perkembangan autisme, meski riset lanjutan masih diperlukan.</li>
            </ul>
            <p>Pertanyaan yang bisa diajukan kepada dokter: tindakan apa saja yang diperlukan dan mana yang paling mendesak, apakah ada pilihan tanpa obat yang belum dicoba, apa risiko tiap pilihan bagi kondisi anak, siapa yang menangani pembiusan, dan bagaimana rencana pemeriksaan rutin setelahnya supaya kerusakan tidak terulang.</p>
            <p>Jangan menunda bila anak tampak kesakitan, pipi atau gusi bengkak, menolak makan di satu sisi, atau giginya patah dan copot akibat jatuh. NIDCR menegaskan cedera gigi memerlukan pertolongan profesional segera. Anak yang sulit mengungkapkan rasa sakit mungkin hanya menunjukkan perubahan perilaku, misalnya memukul pipi, tidur terganggu, atau makin pilih-pilih makanan; perubahan seperti ini layak diperiksakan.</p>`
    },
    {
      id: 'peran-sekolah',
      h2: 'Peran Guru, Terapis, dan Pendamping',
      toc: 'Peran guru, terapis, dan pendamping',
      html: `
            <p>Persiapan kunjungan gigi tidak harus dikerjakan orang tua sendirian. Guru kelas atau guru pendamping bisa membacakan cerita bergambar yang sama di sekolah beberapa hari sebelum janji temu, sehingga anak mendengar alur yang konsisten dari lebih dari satu orang. Terapis okupasi dapat membantu melatih toleransi sentuhan di sekitar wajah dan mulut sebagai bagian dari program sensorik anak; kenali perannya di artikel <a href="terapi-okupasi">terapi okupasi</a>. Pendamping yang ikut ke klinik sebaiknya orang yang paling dipercaya anak dan sudah membaca profil singkat yang dibawa.</p>
            <p>Kerja sama lintas profesi ini juga ditekankan NIDCR, lembaga riset gigi pemerintah Amerika Serikat yang mendanai penelitian agar kunjungan gigi lebih nyaman bagi anak autis (${ext(NIDCR_DD, 'NIDCR, Developmental Disabilities and Oral Health')}). Tim yang didukungnya mengajak terapis okupasi bekerja bersama dokter gigi, dan menyiapkan cerita sosial berisi foto asli seorang anak yang dirawat di klinik untuk dibacakan orang tua sebelum kunjungan (${ext(NIDCR_NEWS, 'NIDCR, A Safe Space in the Dental Clinic')}). Untuk tips pendampingan sehari-hari, baca juga <a href="tips-mendampingi-anak-autis">tips mendampingi anak autis</a>.</p>`
    }
  ],
  storyHighlight: 'Di Sekolah Inklusi Taruna Imani, guru kami terbiasa memakai jadwal visual dan cerita bergambar untuk membantu anak menghadapi kegiatan baru di luar kelas. YUKA bukan klinik gigi dan tidak memberi layanan medis, tetapi kami bisa membantu orang tua menyusun cerita bergambar dan profil singkat anak sebelum kunjungan ke dokter gigi. Hubungi kami bila ingin berdiskusi.',
  relatedIntro: 'Lanjutkan ke panduan YUKA lain tentang mendampingi anak autis dalam kegiatan sehari-hari.',
  faq: [
    { q: 'Umur berapa anak autis sebaiknya pertama kali ke dokter gigi?', a: 'Tidak ada aturan usia khusus untuk anak autis. Makin awal anak mengenal klinik lewat kunjungan perkenalan yang ringan, makin mudah pemeriksaan rutin berikutnya. Tanyakan jadwal kontrol yang sesuai kepada dokter gigi anak Anda.' },
    { q: 'Perlukah memberi tahu dokter bahwa anak saya autis?', a: 'Perlu. Dokter yang tahu sejak awal bisa menyiapkan ruang yang lebih tenang, memberi waktu lebih, dan menyesuaikan cara bicara. Sertakan juga pemicu panik, cara anak berkomunikasi, obat rutin, dan riwayat kejang bila ada.' },
    { q: 'Berapa kali kunjungan perkenalan dibutuhkan sebelum anak mau diperiksa?', a: 'Berbeda untuk tiap anak. Dalam studi Star dkk. (2023), anak autis menjalani rata-rata 6,7 kunjungan desensitisasi dan sekitar separuhnya berhasil menjalani seluruh tahap pemeriksaan rutin selama dua tahun.' },
    { q: 'Apakah anak autis harus dibius total agar giginya bisa dirawat?', a: 'Tidak selalu. Banyak anak bisa diperiksa setelah persiapan bertahap dan penyesuaian sensorik. Bius umum dipertimbangkan dokter bila tindakannya banyak atau anak tetap tidak bisa bekerja sama, dan keputusannya diambil bersama orang tua setelah risiko dijelaskan.' },
    { q: 'Hadiah apa yang cocok setelah anak berhasil ke dokter gigi?', a: 'Pilih hadiah yang bukan makanan atau minuman manis, misalnya stiker, waktu bermain favorit, atau kegiatan pilihan anak. Sebutkan juga dengan jelas perilaku yang dipuji, seperti duduk di kursi atau membuka mulut.' }
  ],
  related: [
    { href: 'perawatan-gigi-anak-berkebutuhan-khusus-tips', title: 'Perawatan Gigi Anak Berkebutuhan Khusus', desc: 'Menyikat gigi dan menjaga kebersihan mulut di rumah.' },
    { href: 'cara-membuat-jadwal-visual-untuk-anak-autis', title: 'Cara Membuat Jadwal Visual untuk Anak Autis', desc: 'Dasar menyusun urutan gambar untuk kegiatan baru.' },
    { href: 'sensory-over-responsivity-pada-anak', title: 'Sensory Over-Responsivity pada Anak', desc: 'Mengenali kepekaan berlebih terhadap suara, cahaya, dan sentuhan.' },
    { href: 'cara-mengatasi-tantrum-anak-autis', title: 'Cara Mengatasi Tantrum Anak Autis', desc: 'Membedakan tantrum dan meltdown serta cara menanganinya.' }
  ],
  tags: ['AnakAutis', 'DokterGigiAnak', 'KesehatanGigi', 'Desensitisasi', 'OrangTuaABK', 'YUKA'],
  sources: [
    { url: NIDCR_PDF, label: 'National Institute of Dental and Craniofacial Research (NIH): Practical Oral Care for People With Autism (buklet arsip)' },
    { url: NIDCR_DD, label: 'NIDCR: Developmental Disabilities and Oral Health' },
    { url: NIDCR_NEWS, label: 'NIDCR News: A Safe Space in the Dental Clinic (2021)' },
    { url: AAPD_BG, label: 'American Academy of Pediatric Dentistry: Best Practices, Behavior Guidance for the Pediatric Dental Patient' },
    { url: AAPD_SHCN, label: 'American Academy of Pediatric Dentistry: Best Practices, Management of Dental Patients with Special Health Care Needs' },
    { url: STEIN, label: 'Stein Duker LI dkk. Sensory Adaptations to Improve Physiological and Behavioral Distress During Dental Visits in Autistic Children: A Randomized Crossover Trial. JAMA Netw Open, 2023 (PubMed 37266941)' },
    { url: CERMAK, label: 'Cermak SA dkk. Sensory Adapted Dental Environments to Enhance Oral Care for Children with ASD: A Randomized Controlled Pilot Study. J Autism Dev Disord, 2015 (PubMed 25931290)' },
    { url: STAR, label: 'Star J dkk. Dental Desensitization to Increase Comfort with Preventive Dental Visits for Children with ASD. Pediatr Dent, 2023 (PubMed 38129759)' },
    { url: NELSON, label: 'Nelson TM dkk. Educational and therapeutic behavioral approaches to providing dental care for patients with ASD. Spec Care Dentist, 2015 (PubMed 25470557)' },
    { url: PRYNDA, label: 'Prynda M dkk. Dental Adaptation Strategies for Children with ASD: A Systematic Review of Randomized Trials. J Clin Med, 2024 (PubMed 39685603)' },
    { url: LIU, label: 'Liu P dkk. Non-pharmacological Behavior Guidance Techniques on Dental Anxiety and Cooperation in Children With Autism: A Systematic Review and Meta-analysis. J Vis Exp, 2026 (PubMed 42330054)' },
    { url: ERWIN, label: 'Erwin J dkk. Factors influencing oral health behaviours, access and delivery of dental care for autistic children and adolescents. Health Expect, 2022 (PubMed 35716111)' },
    { url: ULIANA, label: 'Uliana JC dkk. Autistic individuals have worse oral status than neurotypical controls: systematic review and meta-analysis. Clin Oral Investig, 2024 (PubMed 38321186)' },
    { url: DAMOTTA, label: 'da Motta TP dkk. Dental Caries of Individuals with ASD: A Systematic Review and Meta-Analysis. J Autism Dev Disord, 2026 (PubMed 39976759)' },
    { url: RSGM_UGM, label: 'RSGM UGM Prof. Soedomo: Klinik Gigi Spesialistik (layanan Pedodonti)' }
  ]
};

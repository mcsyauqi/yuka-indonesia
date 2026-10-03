'use strict';
// Isi artikel /artikel/aplikasi-belajar-membaca-untuk-anak-disleksia (kartu Trello aj6J3iWh, catchup 2026-10-04).
// Menggantikan versi 2026-10-03 04:51 WIB (commit 0ce48ca) yang judulnya aplikasi membaca tetapi badannya salinan
// artikel alat-bantu-belajar-anak-disleksia (konten duplikat, kartu induk P0 gswe5XFa pasangan #1).
// Sudut artikel: APLIKASI (perangkat lunak) untuk belajar membaca, dengan bukti meta-analisis tentang intervensi digital,
// pentingnya bahasa aplikasi untuk anak Indonesia, fitur pembaca teks bawaan perangkat, dan daftar periksa memilih.
// Artikel alat bantu membahas alat secara umum (termasuk benda fisik, font, lensa berwarna); bagian itu tidak diulang di sini.
// Fakta dicek ke sumber aslinya pada 4 Oktober 2026:
//  - Pasqualotto dkk. 2025, J Cogn Enhanc (Springer, abstrak): 41 studi pembaca lemah g = 0,433 [0,30; 0,56]; 15 studi
//    pembaca umum g = 0,256; intervensi yang menargetkan keterampilan membaca spesifik efektif di kedua kelompok.
//  - Jahanaray dkk. 2025, Learning Disabilities: A Contemporary Journal (ERIC EJ1492446, abstrak): 67 studi, 1.352 siswa SD
//    dengan disleksia, efek rata-rata 0,36; transfer ke pemahaman bacaan g = 0,21; heterogenitas tinggi.
//  - McTigue dkk., Reading Research Quarterly 55(1):45-73 (Crossref, abstrak): 28 studi GraphoGame, efek keseluruhan pada
//    membaca kata g = -0,02; konteks dengan interaksi orang dewasa tinggi g = 0,48.
//  - Wood dkk. 2018, PMID 28112580: text-to-speech dan alat bacakan, efek pada pemahaman bacaan 0,35 (IK 95% 0,14 sampai 0,56).
//  - Galuschka dkk. 2014, PMID 24587110: 22 RCT; phonics satu-satunya pendekatan yang efektivitasnya terkonfirmasi statistik.
//  - McArthur dkk. 2018, Cochrane, PMID 30480759: 14 studi, 923 peserta; pelatihan phonics diberikan oleh manusia maupun komputer.
//  - Jap dkk. 2017, PMC5574966: ortografi bahasa Indonesia transparan; 17,3% kelas 1 dan 14,1% kelas 2 berisiko disleksia
//    menurut kriteria studi itu.
//  - Google Classroom Help 14174515: Read Along tersedia dalam Bahasa Indonesia; bahasa Indonesia butuh koneksi internet
//    karena data suara dikirim sementara ke server Google. Workspace Updates Juni 2026: tersedia untuk semua pengguna edukasi,
//    pustaka mencakup bahasa Indonesia.
//  - Android Accessibility Help 7349565 (Select to Speak), Apple iPhone User Guide (Speak Screen, Speak Selection),
//    Microsoft Support (Reading mode dan Read Aloud di Edge).
//  - JDIH BPK, UU 27/2022 Pasal 25 (teks dibaca dari PDF resmi): data pribadi anak diproses secara khusus dan wajib
//    mendapat persetujuan orang tua dan/atau wali.
//  - Andamari dan Amalia 2017, Psikologia 2(1):17-26 (PDF jurnal, abstrak): 20 anak, aplikasi Android vs terapi verbal.
//  - Riset kompetitor 2026-10-04 (WebSearch): hasil teratas berupa daftar nama aplikasi (zenius.net 11 aplikasi, speechify.com
//    5 aplikasi) dan prototipe kampus; celah yang diisi artikel ini: bukti riset, bahasa aplikasi, fitur bawaan, daftar periksa.
//  - WHO, rilis 24 April 2019: anak 2 tahun dan 3-4 tahun, screen time sambil duduk tidak lebih dari 1 jam.
// Tidak ada nama aplikasi komersial, harga, peringkat, atau peninjau yang dikarang. Satu-satunya produk yang disebut
// adalah fitur resmi dari pembuat sistem operasi/peramban dan Read Along, karena dukungan bahasanya terdokumentasi.

const PASQ = 'https://link.springer.com/article/10.1007/s41465-025-00336-2';
const JAHAN = 'https://eric.ed.gov/?id=EJ1492446';
const MCTIGUE = 'https://doi.org/10.1002/rrq.256';
const WOOD = 'https://pubmed.ncbi.nlm.nih.gov/28112580/';
const GALUSCHKA = 'https://pubmed.ncbi.nlm.nih.gov/24587110/';
const MCARTHUR = 'https://pubmed.ncbi.nlm.nih.gov/30480759/';
const JAP = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5574966/';
const READALONG = 'https://support.google.com/edu/classroom/answer/14174515?hl=en';
const READALONG_BLOG = 'https://workspaceupdates.googleblog.com/2026/06/read-along-in-google-classroom-is-now-available-to-all-education-users-to-support-foundational-literacy.html';
const ANDROID = 'https://support.google.com/accessibility/android/answer/7349565?hl=en';
const APPLE = 'https://support.apple.com/guide/iphone/hear-whats-on-the-screen-or-typed-iph96b214f0/ios';
const EDGE = 'https://support.microsoft.com/en-us/topic/use-immersive-reader-in-microsoft-edge-78a7a17d-52e1-47ee-b0ac-eff8539015e1';
const PDP = 'https://peraturan.bpk.go.id/Details/229798/uu-no-27-tahun-2022';
const UTY = 'https://psikologia.umsida.ac.id/index.php/psikologia/article/download/1624/1810';
const WHO = 'https://www.who.int/news/item/24-04-2019-to-grow-up-healthy-children-need-to-sit-less-and-play-more';

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  slug: 'aplikasi-belajar-membaca-untuk-anak-disleksia',
  keyword: 'aplikasi belajar membaca untuk anak disleksia',
  titleTag: 'Aplikasi Belajar Membaca untuk Anak Disleksia: Cara Memilih',
  metaDesc: 'Aplikasi membaca bisa membantu anak disleksia bila isinya tepat. Pelajari bukti riset, fitur pembaca teks gratis, dan daftar periksa sebelum memilih.',
  ogTitle: 'Aplikasi Belajar Membaca untuk Anak Disleksia: Bukti Riset, Fitur Gratis, dan Daftar Periksa',
  ogDesc: 'Apa kata meta-analisis tentang aplikasi membaca untuk anak disleksia, kenapa bahasa aplikasi penting bagi anak Indonesia, fitur pembaca teks bawaan perangkat, dan cara memakainya bersama anak.',
  h1: 'Aplikasi Belajar Membaca untuk Anak Disleksia: Apa yang Terbukti dan Cara Memilihnya',
  crumb: 'Aplikasi Belajar Membaca untuk Anak Disleksia',
  parent: { name: 'Disleksia', href: 'disleksia-adalah' },
  about: ['Disleksia', 'Aplikasi belajar membaca', 'Intervensi membaca berbasis komputer', 'Text-to-speech', 'Phonics', 'Literasi awal'],
  keywords: 'aplikasi belajar membaca untuk anak disleksia, aplikasi membaca anak disleksia, aplikasi disleksia bahasa indonesia, text to speech anak disleksia, read along bahasa indonesia, intervensi membaca digital, aplikasi phonics anak',
  readTime: '12 menit baca',
  image: {
    file: 'Dokumentasi/museum-gunung-merapi-gambar-055.webp',
    w: 1600, h: 1200,
    alt: 'Sekelompok siswa berseragam merah putih bertuliskan Taruna Imani dan pendamping berbaju merah muda mengamati alat-alat pemantauan di meja bundar dalam ruang pamer museum',
    caption: 'Siswa dan pendamping mengamati alat peraga saat kunjungan edukasi ke museum. Foto ini dokumentasi kegiatan YUKA, bukan foto penggunaan aplikasi membaca dan bukan gambaran anak dengan kondisi tertentu.',
    credit: 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).',
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  answer: '<strong>Aplikasi belajar membaca untuk anak disleksia</strong> paling berguna bila melatih hubungan huruf dan bunyi secara bertahap, memakai bahasa yang sedang dipelajari anak, dan dipakai bersama orang dewasa. Meta-analisis menemukan manfaat sedang bagi pembaca yang kesulitan, tetapi aplikasi tetap pelengkap pengajaran langsung, bukan penggantinya.',
  intro: `
            <p>Banyak orang tua mulai mencari aplikasi setelah melihat anaknya tertinggal membaca: huruf masih tertukar di kelas dua, membaca satu kalimat terasa seperti mendaki bukit, dan PR berakhir dengan tangis. Toko aplikasi menawarkan ratusan pilihan berlabel "untuk disleksia", dan wajar kalau orang tua bingung harus mulai dari mana.</p>
            <p>Panduan ini tidak membuat peringkat aplikasi. Kami membahas hal yang lebih tahan lama: apa yang ditunjukkan penelitian tentang aplikasi membaca, kenapa bahasa aplikasi sangat menentukan bagi anak Indonesia, fitur pembaca teks gratis yang sudah ada di ponsel atau laptop Anda, dan daftar periksa untuk menilai aplikasi apa pun yang Anda temukan. Untuk alat bantu di luar aplikasi, seperti alat tulis atau alat peraga, baca panduan kami tentang <a href="alat-bantu-belajar-anak-disleksia">alat bantu belajar anak disleksia</a>.</p>`,
  infoBox: 'Disleksia ditegakkan lewat asesmen oleh psikolog atau tenaga profesional, bukan oleh aplikasi. Aplikasi yang mengaku bisa "mendiagnosis" atau "menyembuhkan" disleksia patut dicurigai. Artikel ini tidak menyebut harga atau merek aplikasi berbayar karena keduanya cepat berubah; selalu cek langsung di halaman resmi pengembangnya.',
  sections: [
    {
      id: 'peran',
      h2: 'Bisakah Aplikasi Membantu Anak Disleksia Belajar Membaca?',
      toc: 'Bisakah aplikasi membantu?',
      html: `
            <p>Bisa, dengan syarat. <a href="disleksia-adalah">Disleksia</a> adalah kesulitan belajar spesifik yang terutama mengganggu ketepatan dan kelancaran mengenali kata serta mengeja. Kesulitan ini bukan karena anak malas, dan biasanya tidak hilang hanya dengan menunggu, tetapi kemampuan membaca bisa meningkat dengan pengajaran yang tepat.</p>
            <p>Pertanyaannya bukan "aplikasi atau tidak", melainkan <strong>isi latihan apa yang dibawa aplikasi itu</strong>. Meta-analisis atas 22 uji acak terkontrol oleh ${ext(GALUSCHKA, 'Galuschka dkk. (2014)')} menemukan bahwa pengajaran phonics (hubungan huruf dan bunyi) adalah satu-satunya pendekatan yang efektivitasnya terhadap kemampuan membaca dan mengeja anak dengan kesulitan membaca terkonfirmasi secara statistik. Pendekatan lain yang diuji, seperti pelatihan pendengaran dan lensa berwarna, tidak mencapai signifikansi.</p>
            <p>Tinjauan Cochrane oleh ${ext(MCARTHUR, 'McArthur dkk. (2018)')} yang mencakup 14 studi dengan 923 peserta mencatat bahwa pelatihan phonics dalam studi-studi itu diberikan oleh manusia maupun oleh komputer. Artinya, perangkat lunak bisa menjadi salah satu jalur penyampaian latihan yang sudah terbukti, asalkan latihannya memang latihan phonics yang sistematis, bukan sekadar permainan warna-warni dengan huruf sebagai hiasan.</p>`
    },
    {
      id: 'jenis',
      h2: 'Aplikasi Latihan dan Aplikasi Pembaca Teks: Dua Fungsi Berbeda',
      toc: 'Aplikasi latihan vs aplikasi pembaca teks',
      html: `
            <p>Aplikasi untuk anak disleksia umumnya jatuh ke dalam dua kelompok. Keduanya berguna, tetapi tujuannya berbeda, sehingga cara menilainya juga berbeda.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table" style="margin:0;min-width:540px;">
                <thead><tr><th>Aspek</th><th>Aplikasi latihan membaca</th><th>Aplikasi atau fitur pembaca teks</th></tr></thead>
                <tbody>
                    <tr><td>Tujuan</td><td>Membangun kemampuan membaca anak sendiri</td><td>Membuka akses ke isi bacaan selama kemampuan membaca masih berkembang</td></tr>
                    <tr><td>Contoh isi</td><td>Mengenal bunyi huruf, merangkai suku kata, membaca kata dan kalimat bertahap</td><td>Teks di layar dibacakan dengan suara sambil kata yang sedang dibaca ditandai</td></tr>
                    <tr><td>Yang diukur</td><td>Ketepatan dan kecepatan membaca kata, mengeja</td><td>Pemahaman isi bacaan</td></tr>
                    <tr><td>Kapan dipakai</td><td>Sesi latihan singkat yang terjadwal</td><td>Saat tugas sekolah menuntut membaca teks panjang</td></tr>
                    <tr><td>Risiko kalau salah pakai</td><td>Anak hanya bermain tanpa benar-benar berlatih membaca</td><td>Dipakai sebagai satu-satunya cara sehingga latihan membaca terabaikan</td></tr>
                </tbody>
            </table></div>
            <p>Anak yang sama sering membutuhkan keduanya: waktu khusus untuk berlatih membaca, dan bantuan pembaca teks agar tidak tertinggal materi pelajaran lain. Membedakan keduanya membantu Anda tidak berharap terlalu banyak dari satu aplikasi.</p>`
    },
    {
      id: 'riset',
      h2: 'Apa Kata Penelitian tentang Aplikasi Membaca',
      toc: 'Apa kata penelitian',
      html: `
            <p>Penelitian tentang intervensi membaca digital sudah cukup banyak untuk dirangkum dalam meta-analisis. Ringkasan berikut diambil dari abstrak masing-masing publikasi. Angka <em>g</em> atau <em>d</em> adalah ukuran besar efek: sekitar 0,2 tergolong kecil, 0,5 sedang, dan 0,8 besar.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table" style="margin:0;min-width:600px;">
                <thead><tr><th>Penelitian</th><th>Yang diteliti</th><th>Temuan utama</th></tr></thead>
                <tbody>
                    <tr><td>${ext(PASQ, 'Pasqualotto dkk. (2025)')}</td><td>Intervensi digital untuk anak di bawah 15 tahun; 41 studi pada pembaca yang kesulitan, 15 studi pada pembaca umum</td><td>Efek sedang pada pembaca yang kesulitan (g = 0,433) dan lebih kecil pada pembaca umum (g = 0,256). Intervensi yang menargetkan keterampilan membaca spesifik, seperti decoding dan pemahaman, efektif di kedua kelompok.</td></tr>
                    <tr><td>${ext(JAHAN, 'Jahanaray dkk. (2025)')}</td><td>Teknologi berbasis komputer untuk membaca kata pada siswa SD dengan disleksia; 67 studi, 1.352 siswa</td><td>Efek rata-rata 0,36. Ada efek transfer ke pemahaman bacaan, tetapi kecil (g = 0,21). Hasil antarstudi sangat bervariasi.</td></tr>
                    <tr><td>${ext(MCTIGUE, 'McTigue dkk. (2020)')}</td><td>GraphoGame, permainan adaptif hubungan bunyi dan simbol yang dipakai di lebih dari 20 negara; 28 studi</td><td>Secara keseluruhan tidak ada efek berarti pada kemampuan membaca kata (g = -0,02). Namun studi dengan interaksi orang dewasa yang tinggi menunjukkan efek positif rata-rata (g = 0,48).</td></tr>
                    <tr><td>${ext(WOOD, 'Wood dkk. (2018)')}</td><td>Text-to-speech dan alat bacakan lain pada siswa dengan kesulitan membaca</td><td>Efek rata-rata pada pemahaman bacaan 0,35 (interval kepercayaan 95%: 0,14 sampai 0,56). Penulis menyebut masih perlu lebih banyak studi.</td></tr>
                </tbody>
            </table></div>
            <p>Dari keempat rangkuman itu ada tiga pelajaran praktis:</p>
            <ul>
                <li><strong>Isi lebih penting daripada kemasan.</strong> Aplikasi yang melatih keterampilan membaca secara langsung memberi hasil lebih baik daripada yang hanya melatih kemampuan umum.</li>
                <li><strong>Pendampingan orang dewasa mengubah hasil.</strong> Temuan GraphoGame menunjukkan aplikasi yang sama bisa nyaris tanpa efek bila dimainkan sendirian, dan bermanfaat bila ada orang dewasa yang terlibat.</li>
                <li><strong>Jangan berharap satu aplikasi menyelesaikan semuanya.</strong> Kemajuan membaca kata tidak otomatis menjadi kemajuan memahami bacaan, sehingga latihan pemahaman tetap perlu dilakukan bersama guru atau orang tua.</li>
            </ul>`
    },
    {
      id: 'bahasa',
      h2: 'Kenapa Bahasa Aplikasi Penting bagi Anak Indonesia',
      toc: 'Kenapa bahasa aplikasi penting',
      html: `
            <p>Sebagian besar aplikasi membaca populer dibuat untuk bahasa Inggris. Masalahnya, bahasa Inggris dan bahasa Indonesia sangat berbeda dalam hubungan huruf dan bunyi. Penelitian ${ext(JAP, 'Jap dkk. (2017)')} yang menyusun perangkat asesmen membaca berbahasa Indonesia menyebut bahasa Indonesia memiliki <strong>ortografi transparan</strong>: satu huruf cenderung mewakili satu bunyi yang konsisten. Dalam studi yang sama, 17,3% siswa kelas 1 dan 14,1% siswa kelas 2 yang diperiksa tergolong berisiko disleksia menurut kriteria penelitian itu. Angka ini bukan angka prevalensi nasional, tetapi menunjukkan kesulitan membaca juga nyata pada anak yang belajar bahasa dengan ejaan teratur.</p>
            <p>Akibatnya, aplikasi phonics bahasa Inggris mengajarkan bunyi yang berbeda dari bunyi huruf yang dipakai anak di sekolah. Huruf <em>a</em> dalam bahasa Inggris bisa dibaca dengan beberapa cara, sedangkan dalam bahasa Indonesia hampir selalu dibaca /a/. Bagi anak yang sudah kesulitan menghubungkan huruf dan bunyi, dua sistem yang bertabrakan justru bisa menambah kebingungan.</p>
            <p>Penelitian berbahasa Indonesia tentang aplikasi untuk anak disleksia masih sedikit dan berskala kecil. Salah satunya dari Yogyakarta: ${ext(UTY, 'Andamari dan Amalia (2017)')} dari Universitas Teknologi Yogyakarta membandingkan terapi berbasis aplikasi Android dengan terapi verbal pada 20 anak dengan gejala disleksia, dan melaporkan aplikasi lebih efektif meningkatkan kemampuan membaca. Dengan sampel sekecil itu, hasilnya menjanjikan tetapi belum bisa digeneralisasi, dan aplikasi yang dipakai dalam penelitian kampus sering kali berupa prototipe yang tidak tersedia di toko aplikasi.</p>
            <p>Karena itu, untuk latihan membaca dasar, utamakan aplikasi yang <strong>mengajarkan bunyi huruf dan suku kata bahasa Indonesia</strong>, sejalan dengan cara guru mengajar di kelas. Aplikasi bahasa Inggris lebih cocok disimpan untuk saat anak memang sedang belajar bahasa Inggris, dengan dukungan guru. Pendekatan mengajar membaca secara bertahap dan multisensori dibahas lebih rinci di <a href="cara-mengajar-anak-disleksia-membaca">cara mengajar anak disleksia membaca</a>.</p>`
    },
    {
      id: 'fitur-gratis',
      h2: 'Fitur Pembaca Teks Gratis yang Sudah Ada di Perangkat',
      toc: 'Fitur pembaca teks gratis di perangkat',
      html: `
            <p>Sebelum mengunduh aplikasi baru, periksa dulu fitur aksesibilitas bawaan. Fitur-fitur ini dibuat oleh pembuat sistem operasi atau peramban, tidak berisi iklan, dan sering cukup untuk kebutuhan membacakan teks.</p>
            <ul>
                <li><strong>Android: Select to Speak.</strong> Menurut ${ext(ANDROID, 'Bantuan Aksesibilitas Android')}, fitur ini membacakan atau mendeskripsikan item yang dipilih di layar. Aktifkan lewat Setelan, Aksesibilitas, lalu Select to Speak. Bila tidak muncul, perbarui Android Accessibility Suite dari Google Play.</li>
                <li><strong>iPhone dan iPad: Speak Screen dan Speak Selection.</strong> ${ext(APPLE, 'Panduan Pengguna iPhone dari Apple')} menjelaskan Speak Screen membacakan semua teks di layar, sedangkan Speak Selection membacakan teks yang dipilih. Keduanya bisa diatur agar kata yang sedang dibacakan disorot.</li>
                <li><strong>Laptop dengan Microsoft Edge: Reading mode dan Read Aloud.</strong> ${ext(EDGE, 'Dukungan Microsoft')} menyebut Reading mode menyederhanakan tata letak halaman web dan menghilangkan gangguan, dengan alat Read Aloud untuk membacakan isinya.</li>
                <li><strong>Read Along di Google Classroom.</strong> ${ext(READALONG, 'Halaman Bantuan Google Classroom')} mencantumkan Bahasa Indonesia sebagai salah satu bahasa yang didukung. Untuk bahasa Indonesia, Read Along membutuhkan koneksi internet karena data suara dikirim sementara ke server Google untuk pengenalan suara dan pembacaan teks. Menurut ${ext(READALONG_BLOG, 'pengumuman Google Workspace Updates Juni 2026')}, fitur ini tersedia untuk semua pengguna edukasi dan pustakanya mencakup buku berbahasa Indonesia. Karena berjalan di dalam Classroom, biasanya guru yang memberikan tugas bacaannya.</li>
            </ul>
            <p>Pilihan suara bahasa Indonesia berbeda di tiap perangkat dan versi sistem. Coba dulu dengan satu paragraf buku pelajaran anak: apakah pelafalannya jelas, kecepatannya bisa diatur, dan kata yang dibacakan ikut ditandai. Penanda visual ini membantu anak menghubungkan kata tertulis dengan bunyinya, bukan sekadar mendengarkan.</p>`
    },
    {
      id: 'daftar-periksa',
      h2: 'Daftar Periksa Memilih Aplikasi Belajar Membaca',
      toc: 'Daftar periksa memilih aplikasi',
      html: `
            <p>Pakai pertanyaan berikut setiap kali menilai sebuah aplikasi, gratis maupun berbayar:</p>
            <ol>
                <li><strong>Apakah latihannya tentang membaca?</strong> Cari latihan bunyi huruf, merangkai suku kata, membaca kata, lalu kalimat. Aplikasi yang lebih banyak berisi animasi, hadiah, dan mini game tanpa membaca perlu dipertanyakan.</li>
                <li><strong>Apakah urutannya bertahap?</strong> Materi baru sebaiknya muncul setelah materi sebelumnya dikuasai, dengan pengulangan untuk bagian yang masih sering salah.</li>
                <li><strong>Apakah memakai bahasa Indonesia yang sesuai pelajaran sekolah?</strong> Perhatikan pelafalan suara rekaman dan pemenggalan suku katanya.</li>
                <li><strong>Apakah ada umpan balik yang jelas?</strong> Anak perlu tahu jawabannya benar atau salah, dan diberi kesempatan mencoba lagi tanpa dipermalukan.</li>
                <li><strong>Apakah kecepatan dan tampilan bisa diatur?</strong> Ukuran huruf, jarak baris, dan kecepatan suara yang bisa disesuaikan membuat anak lebih nyaman.</li>
                <li><strong>Apakah bebas dari iklan dan pembelian yang mengganggu?</strong> Iklan di tengah latihan memecah konsentrasi, dan tombol pembelian mudah tertekan tanpa sengaja.</li>
                <li><strong>Apakah ada catatan kemajuan?</strong> Laporan sederhana tentang materi yang sudah dan belum dikuasai berguna untuk dibicarakan dengan guru.</li>
                <li><strong>Bagaimana data anak diperlakukan?</strong> UU Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi Pasal 25 mengatur bahwa data pribadi anak diproses secara khusus dan wajib mendapat persetujuan orang tua dan/atau wali (${ext(PDP, 'JDIH BPK')}). Baca kebijakan privasi, dan hindari aplikasi yang meminta data berlebihan seperti kontak atau lokasi tanpa alasan jelas.</li>
                <li><strong>Apakah klaimnya masuk akal?</strong> Janji "lancar membaca dalam seminggu" atau "menyembuhkan disleksia" adalah tanda bahaya.</li>
            </ol>
            <p>Aplikasi yang lolos sebagian besar pertanyaan ini layak dicoba selama beberapa minggu sambil diamati. Kalau anak makin cemas atau tidak ada kemajuan, jangan ragu berganti atau berhenti.</p>`
    },
    {
      id: 'cara-pakai',
      h2: 'Cara Memakai Aplikasi agar Benar-Benar Bermanfaat',
      toc: 'Cara memakai aplikasi bersama anak',
      html: `
            <p>Aplikasi yang bagus pun bisa sia-sia bila hanya diberikan lalu ditinggal. Beberapa kebiasaan berikut membantu:</p>
            <ul>
                <li><strong>Duduk di samping anak.</strong> Temuan McTigue dkk. tentang interaksi orang dewasa sejalan dengan pengalaman banyak guru: anak lebih fokus dan lebih berani mencoba ketika ada yang menemani dan memberi semangat.</li>
                <li><strong>Sesi singkat dan rutin.</strong> Latihan pendek yang dilakukan hampir setiap hari biasanya lebih mudah dijalani anak daripada satu sesi panjang di akhir pekan. Hentikan sebelum anak terlalu lelah.</li>
                <li><strong>Sambungkan ke buku nyata.</strong> Setelah berlatih suku kata di aplikasi, ajak anak menemukan suku kata yang sama di buku cerita atau label di rumah.</li>
                <li><strong>Pisahkan waktu latihan dan waktu dibacakan.</strong> Pembaca teks membantu mengerjakan tugas, sedangkan waktu latihan adalah saat anak membaca sendiri dengan bantuan secukupnya.</li>
                <li><strong>Libatkan guru.</strong> Ceritakan aplikasi yang dipakai di rumah agar latihannya sejalan dengan <a href="program-pembelajaran-individual">program pembelajaran individual</a> anak di sekolah.</li>
                <li><strong>Perhatikan usia dan waktu layar.</strong> Untuk anak prasekolah, WHO merekomendasikan waktu layar sambil duduk tidak lebih dari 1 jam sehari bagi anak usia 2 sampai 4 tahun, dan menganjurkan membaca serta bercerita bersama pengasuh (${ext(WHO, 'WHO, 2019')}). Pada usia ini, membacakan buku bersama tetap lebih utama daripada aplikasi.</li>
            </ul>`
    },
    {
      id: 'kapan-ahli',
      h2: 'Tanda Aplikasi Saja Tidak Cukup',
      toc: 'Kapan perlu bantuan ahli',
      html: `
            <p>Aplikasi tidak dapat menggantikan asesmen dan pengajaran langsung. Pertimbangkan berkonsultasi dengan psikolog, guru pendidikan khusus, atau tim sekolah bila:</p>
            <ul>
                <li>setelah beberapa bulan berlatih secara rutin, anak masih kesulitan mengenali huruf atau merangkai suku kata yang sudah sering dilatih;</li>
                <li>kemampuan membaca anak jauh tertinggal dari teman sekelas dan mulai memengaruhi pelajaran lain;</li>
                <li>anak menunjukkan tanda cemas, menolak sekolah, atau merasa dirinya bodoh setiap kali harus membaca;</li>
                <li>ada kesulitan lain yang menyertai, seperti sulit memusatkan perhatian, kesulitan berhitung, atau keterlambatan bicara.</li>
            </ul>
            <p>Asesmen membantu memastikan apakah kesulitannya memang disleksia atau bagian dari <a href="kesulitan-belajar">kesulitan belajar</a> lain, dan menentukan kekuatan serta kebutuhan anak. Langkah-langkahnya dijelaskan di <a href="asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik anak berkebutuhan khusus</a>, sedangkan gambaran lebih luas tentang kelompok kondisi ini ada di artikel <a href="gangguan-belajar-spesifik">gangguan belajar spesifik</a>.</p>`
    }
  ],
  faq: [
    {
      q: 'Apakah ada aplikasi yang bisa menyembuhkan disleksia?',
      a: 'Tidak. Disleksia adalah kesulitan belajar yang menetap, tetapi kemampuan membaca bisa meningkat dengan pengajaran yang tepat, terutama latihan hubungan huruf dan bunyi. Aplikasi yang baik bisa menjadi alat latihan pendukung, bukan obat.'
    },
    {
      q: 'Bolehkah anak disleksia memakai aplikasi phonics berbahasa Inggris?',
      a: 'Untuk belajar membaca bahasa Indonesia, sebaiknya tidak dijadikan latihan utama, karena bunyi huruf bahasa Inggris berbeda dengan bahasa Indonesia yang ejaannya teratur. Aplikasi bahasa Inggris lebih tepat dipakai ketika anak memang sedang belajar bahasa Inggris dengan dukungan guru.'
    },
    {
      q: 'Apakah fitur membacakan teks membuat anak malas membaca?',
      a: 'Meta-analisis Wood dkk. (2018) menemukan text-to-speech membantu pemahaman bacaan siswa dengan kesulitan membaca. Agar kemampuan membaca tetap terlatih, pisahkan waktu memakai pembaca teks untuk tugas dengan waktu latihan membaca sendiri.'
    },
    {
      q: 'Apakah Google Read Along mendukung bahasa Indonesia?',
      a: 'Ya. Halaman Bantuan Google Classroom mencantumkan Bahasa Indonesia sebagai bahasa yang didukung Read Along. Untuk bahasa Indonesia, fitur ini membutuhkan koneksi internet yang stabil karena data suara diproses di server Google.'
    },
    {
      q: 'Berapa lama anak sebaiknya memakai aplikasi membaca setiap hari?',
      a: 'Tidak ada angka baku untuk anak usia sekolah. Mulailah dengan sesi singkat yang rutin dan didampingi, lalu sesuaikan dengan daya tahan anak dan saran guru. Untuk anak usia 2 sampai 4 tahun, WHO menyarankan waktu layar sambil duduk tidak lebih dari 1 jam sehari.'
    }
  ],
  storyHighlight: 'Di Sekolah Inklusi Taruna Imani, guru mendampingi anak yang kesulitan membaca dengan latihan bertahap yang disesuaikan kebutuhan masing-masing. YUKA tidak menjual atau merekomendasikan aplikasi tertentu, tetapi orang tua bisa berdiskusi dengan guru tentang aplikasi yang sedang dipakai di rumah agar latihannya sejalan dengan pembelajaran di sekolah. Hubungi kami bila ingin berkonsultasi.',
  relatedIntro: 'Lanjutkan ke panduan YUKA lain tentang disleksia dan cara mendampingi anak belajar membaca.',
  related: [
    { href: 'disleksia-adalah', title: 'Disleksia Adalah: Pengertian dan Ciri-Cirinya', desc: 'Mengenali tanda disleksia dan cara membantu anak.' },
    { href: 'alat-bantu-belajar-anak-disleksia', title: 'Alat Bantu Belajar Anak Disleksia', desc: 'Alat bantu di luar aplikasi dan mana yang terbukti.' },
    { href: 'cara-mengajar-anak-disleksia-membaca', title: 'Cara Mengajar Anak Disleksia Membaca', desc: 'Langkah mengajar membaca secara bertahap di rumah.' },
    { href: 'belajar-membaca-ala-montessori', title: 'Belajar Membaca ala Montessori', desc: 'Pendekatan multisensori untuk anak usia dini.' }
  ],
  tags: ['Disleksia', 'AplikasiMembaca', 'BelajarMembaca', 'TextToSpeech', 'OrangTuaABK', 'YUKA'],
  sources: [
    { url: PASQ, label: 'Pasqualotto A, Cunningham EG, Holman C, Bediou B, Bavelier D. Digital Tools for Reading Success: Meta-analyses of Digital Interventions. Journal of Cognitive Enhancement. 2025' },
    { url: JAHAN, label: 'Jahanaray A, Kassirian A, Jahanaray M. Meta-Analysis on the Effectiveness of Computer-Assisted Technologies on Reading and Comprehension for Elementary Students with Dyslexia. Learning Disabilities: A Contemporary Journal. 2025;23(2):111-148 (ERIC EJ1492446)' },
    { url: MCTIGUE, label: 'McTigue EM, Solheim OJ, Zimmer WK, Uppstad PH. Critically Reviewing GraphoGame Across the World. Reading Research Quarterly. 2020;55(1):45-73' },
    { url: WOOD, label: 'Wood SG, Moxley JH, Tighe EL, Wagner RK. Does Use of Text-to-Speech and Related Read-Aloud Tools Improve Reading Comprehension for Students With Reading Disabilities? A Meta-Analysis. J Learn Disabil. 2018;51(1):73-84' },
    { url: GALUSCHKA, label: 'Galuschka K, Ise E, Krick K, Schulte-Korne G. Effectiveness of treatment approaches for children and adolescents with reading disabilities: a meta-analysis of randomized controlled trials. PLoS One. 2014;9(2):e89900' },
    { url: MCARTHUR, label: 'McArthur G, dkk. Phonics training for English-speaking poor readers. Cochrane Database Syst Rev. 2018;11:CD009115' },
    { url: JAP, label: 'Jap BAJ, Borleffs E, Maassen BAM. Towards identifying dyslexia in Standard Indonesian: the development of a reading assessment battery. Reading and Writing. 2017 (PMC5574966)' },
    { url: READALONG, label: 'Google for Education: Read Along in Google Classroom (Bantuan Google Classroom)' },
    { url: READALONG_BLOG, label: 'Google Workspace Updates: Read Along in Google Classroom is now available to all education users (Juni 2026)' },
    { url: ANDROID, label: 'Android Accessibility Help: Use Select to Speak' },
    { url: APPLE, label: 'Apple iPhone User Guide: Hear what is on the screen or typed (Speak Screen, Speak Selection)' },
    { url: EDGE, label: 'Microsoft Support: Reading mode dan Read Aloud di Microsoft Edge' },
    { url: PDP, label: 'JDIH BPK: Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi' },
    { url: UTY, label: 'Andamari SR, Amalia U. Implementasi Terapi Berbasis Aplikasi Android dan Terapi Verbal untuk Meningkatkan Kemampuan Membaca pada Anak dengan Gejala Disleksia. Psikologia (Jurnal Psikologi). 2017;2(1):17-26' },
    { url: WHO, label: 'WHO: To grow up healthy, children need to sit less and play more (24 April 2019)' }
  ]
};

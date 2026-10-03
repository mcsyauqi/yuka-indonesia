'use strict';
// Isi artikel /artikel/gangguan-belajar-spesifik (kartu Trello s43s4qgD, catchup 2026-10-04).
// Menggantikan versi 2026-10-03 04:29 WIB (commit e20cd8f) yang judulnya topik gangguan belajar spesifik tetapi
// badannya salinan artikel kesulitan-belajar (konten duplikat, kartu induk P0 gswe5XFa pasangan #10).
// Sudut artikel: gangguan belajar spesifik sebagai DIAGNOSIS KLINIS (Specific Learning Disorder, DSM-5/DSM-5-TR;
// Developmental learning disorder 6A03, ICD-11), dibedakan dari "kesulitan belajar" sebagai istilah payung dan
// flag administratif Dapodik. Isi: empat kriteria, tiga subtipe, tingkat keparahan, kode ICD-11, siapa yang
// mengasesmen, akomodasi dan modifikasi di sekolah, Permendikbudristek 48/2023, intervensi terstruktur.
// Fakta dicek ke sumber aslinya pada 4 Oktober 2026: APA "What Is Specific Learning Disorder?" (psychiatry.org);
// APA halaman DSM-5-TR; WHO ICD-11 MMS 2024-01 (6A03.0, .1, .2, .3, .Z, dirender langsung dari browser ICD);
// IDAI "Kesulitan Belajar"; tiga berita ANTARA 15 September 2026 dari seminar daring IDAI (dr. Farid Agung
// Rahmadi, Sp.A, Subsp. T.K.P.S.(K)); JDIH BPK Permendikbudristek 48/2023; referensi.data.kemendikdasmen.go.id
// (flag K Kesulitan Belajar); Keslan Kemenkes (definisi slow learner dan specific learning disabilities).

const APA = 'https://www.psychiatry.org/patients-families/specific-learning-disorder/what-is-specific-learning-disorder';
const APA_TR = 'https://www.psychiatry.org/psychiatrists/practice/dsm';
const ICD = 'https://icd.who.int/browse/2024-01/mms/en#2099676649';
const IDAI = 'https://www.idai.or.id/artikel/klinik/keluhan-anak/kesulitan-belajar';
const ANT_1 = 'https://www.antaranews.com/berita/5742089/anak-pintar-bernilai-akademik-rendah-mungkin-hadapi-gangguan-belajar';
const ANT_AK = 'https://www.antaranews.com/berita/5742881/akomodasi-dan-modifikasi-pembelajaran-bisa-bantu-anak-dengan-sld';
const ANT_LAT = 'https://www.antaranews.com/berita/5742735/rekomendasi-latihan-bagi-anak-dengan-gangguan-belajar-spesifik';
const PERMEN = 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023';
const DAPODIK = 'https://referensi.data.kemendikdasmen.go.id/berkebutuhan_khusus/keterangan';
const KESLAN = 'https://keslan.kemkes.go.id/view_artikel/1917/jangan-ambil-hak-anak-anak-meski-mereka-terlahir-berbeda';

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  slug: 'gangguan-belajar-spesifik',
  keyword: 'gangguan belajar spesifik',
  titleTag: 'Gangguan Belajar Spesifik: Kriteria, Jenis, dan Asesmen',
  metaDesc: 'Gangguan belajar spesifik adalah diagnosis klinis, bukan sekadar nilai jelek. Kenali kriteria DSM-5, kode ICD-11, tiga subtipe, dan akomodasi di sekolah.',
  ogTitle: 'Gangguan Belajar Spesifik (SLD): Kriteria Diagnosis, Tiga Subtipe, dan Akomodasi di Sekolah',
  ogDesc: 'Empat kriteria SLD menurut APA, kode ICD-11 6A03, beda dengan kesulitan belajar umum, siapa yang mengasesmen, serta akomodasi dan modifikasi pembelajaran di sekolah inklusif.',
  h1: 'Gangguan Belajar Spesifik: Saat Kesulitan Membaca, Menulis, atau Berhitung Menjadi Diagnosis',
  crumb: 'Gangguan Belajar Spesifik',
  parent: { name: 'Kesulitan Belajar', href: 'kesulitan-belajar' },
  about: ['Gangguan belajar spesifik', 'Specific learning disorder', 'Disleksia', 'Disgrafia', 'Diskalkulia', 'Akomodasi yang layak'],
  keywords: 'gangguan belajar spesifik, specific learning disorder, SLD, kriteria DSM-5 gangguan belajar, ICD-11 6A03, developmental learning disorder, disleksia, disgrafia, diskalkulia, akomodasi yang layak, Permendikbudristek 48 2023',
  readTime: '12 menit baca',
  image: {
    file: 'Dokumentasi/cpao-anak-anak-belajar-memasak-outdoor-037.webp',
    w: 936, h: 1248,
    alt: 'Seorang anak perempuan bertopi dan bercelemek merah muda duduk di depan alas silikon biru berisi bulatan adonan, ditemani remaja berhijab hitam bertopi koki biru yang tersenyum di sampingnya, di pendopo terbuka',
    caption: 'Seorang anak dan pendamping remaja menyelesaikan bulatan adonan bersama dalam kegiatan belajar memasak di pendopo. Foto ini dokumentasi kegiatan YUKA, bukan sesi asesmen dan bukan gambaran anak dengan diagnosis tertentu.',
    credit: 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).',
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  answer: '<strong>Gangguan belajar spesifik</strong> (specific learning disorder, SLD) adalah gangguan perkembangan saraf yang membuat anak terus kesulitan membaca, menulis, atau berhitung, minimal enam bulan walau sudah mendapat bantuan terarah. Diagnosisnya ditegakkan lewat asesmen klinis setelah penyebab lain disingkirkan, sehingga berbeda dari kesulitan belajar biasa.',
  intro: `
            <p>Banyak orang tua mendengar istilah ini pertama kali dari guru atau psikolog sekolah, biasanya dengan cerita yang mirip: anak tampak cerdas saat diajak berdiskusi, tetapi nilainya jatuh di satu bidang. Dokter spesialis anak tumbuh kembang dr. Farid Agung Rahmadi, dalam seminar daring Ikatan Dokter Anak Indonesia (IDAI) yang diberitakan ${ext(ANT_1, 'ANTARA pada 15 September 2026')}, menyebut pola "anak pintar tetapi nilai akademiknya rendah" sebagai salah satu alasan untuk memikirkan gangguan belajar spesifik.</p>
            <p>Artikel ini fokus pada gangguan belajar spesifik sebagai <strong>diagnosis</strong>: kriteria yang dipakai klinisi, subtipenya, cara asesmen, dan hak akomodasi di sekolah. Untuk gambaran yang lebih luas tentang berbagai sebab anak tertinggal pelajaran, termasuk faktor lingkungan, emosi, dan cara mengajar, bacalah dulu panduan induk kami tentang <a href="kesulitan-belajar">kesulitan belajar pada anak</a>.</p>`,
  infoBox: 'YUKA adalah lembaga pendidikan, bukan fasilitas kesehatan. Artikel ini membantu orang tua dan guru memahami istilah dan alur layanan, tetapi tidak bisa dipakai untuk menetapkan diagnosis. Diagnosis gangguan belajar spesifik hanya bisa ditegakkan oleh dokter, psikolog, atau psikiater yang memeriksa anak secara langsung.',
  sections: [
    {
      id: 'definisi',
      h2: 'Apa yang Dimaksud Gangguan Belajar Spesifik?',
      toc: 'Definisi gangguan belajar spesifik',
      html: `
            <p>American Psychiatric Association (APA) menjelaskan dalam halaman edukasinya, ${ext(APA, 'What Is Specific Learning Disorder?')}, bahwa sejak DSM-5 terbit pada 2013, tiga diagnosis yang dulu terpisah (gangguan membaca, gangguan matematika, dan gangguan ekspresi tulis) digabung menjadi satu diagnosis payung bernama <em>specific learning disorder</em>. Kondisi ini tergolong gangguan perkembangan saraf (neurodevelopmental) dan biasanya terdeteksi pada awal usia sekolah, walau sebagian orang baru dikenali saat dewasa.</p>
            <p>Dr. Farid menambahkan dalam seminar IDAI tersebut bahwa SLD berkaitan dengan kelemahan pada proses kognitif tertentu, misalnya pengolahan bunyi bahasa (fonologi), memori kerja, kecepatan pemrosesan, atau kemampuan visual-spasial. Karena kelemahannya spesifik, anak bisa tertinggal jauh di satu bidang tetapi cakap di bidang lain. Ia juga menegaskan bahwa SLD tidak disebabkan oleh kecerdasan rendah, kemalasan, kurang disiplin, atau pola asuh yang keliru, dan kecerdasan umum anak dengan SLD bisa normal bahkan tinggi.</p>
            <p>Seberapa sering? APA memperkirakan 5 sampai 15 persen anak usia sekolah bergulat dengan gangguan belajar, dan sekitar 80 persen di antaranya mengalami hambatan pada membaca. Halaman IDAI tentang ${ext(IDAI, 'kesulitan belajar')} memakai angka sekitar 5 sampai 10 persen anak di dunia. Perbedaan angka ini wajar karena definisi dan metode survei tiap penelitian tidak sama, jadi yang lebih penting dipegang adalah pesannya: kondisi ini bukan hal langka di kelas mana pun.</p>`
    },
    {
      id: 'beda',
      h2: 'Bedanya dengan Kesulitan Belajar pada Umumnya',
      toc: 'Beda dengan kesulitan belajar umum',
      html: `
            <p>Dua istilah ini sering dipakai bergantian, padahal cakupannya berbeda. "Kesulitan belajar" adalah gejala yang bisa punya banyak sebab. Gangguan belajar spesifik adalah salah satu sebab itu, dan baru boleh disebut setelah sebab lain disingkirkan.</p>
            <table class="classification-table">
                <thead><tr><th>Aspek</th><th>Kesulitan belajar (istilah umum)</th><th>Gangguan belajar spesifik</th></tr></thead>
                <tbody>
                    <tr><td>Sifat istilah</td><td>Deskripsi keadaan: anak tertinggal pelajaran</td><td>Diagnosis klinis dengan kriteria tertulis (DSM-5, ICD-11)</td></tr>
                    <tr><td>Penyebab</td><td>Beragam: cara mengajar, absen panjang, masalah emosi, gangguan penglihatan atau pendengaran, lamban belajar, dan lainnya</td><td>Kelemahan perkembangan saraf pada keterampilan akademik tertentu</td></tr>
                    <tr><td>Lama berlangsung</td><td>Bisa sementara dan membaik bila penyebabnya diatasi</td><td>Menetap minimal enam bulan walau sudah ada bantuan terarah</td></tr>
                    <tr><td>Kecerdasan umum</td><td>Bisa rendah, rata-rata, atau tinggi</td><td>Umumnya rata-rata atau di atasnya; disabilitas intelektual harus disingkirkan</td></tr>
                    <tr><td>Siapa yang menyatakan</td><td>Guru dan orang tua dapat mengamatinya</td><td>Dokter, psikolog, atau psikiater lewat asesmen</td></tr>
                </tbody>
            </table>
            <p>Kementerian Kesehatan, dalam artikel ${ext(KESLAN, 'Keslan tentang hak anak berkebutuhan khusus')}, juga memisahkan anak lamban belajar (<em>slow learner</em>), yaitu anak dengan potensi intelektual sedikit di bawah rata-rata yang butuh waktu lebih lama untuk hampir semua tugas, dari anak dengan kesulitan belajar khusus (<em>specific learning disabilities</em>) yang hambatannya terletak pada proses tertentu seperti membaca, menulis, mengeja, atau berhitung. Pemisahan ini penting karena strategi dukungannya berbeda.</p>
            <p>Di data sekolah, istilahnya lain lagi. Referensi ${ext(DAPODIK, 'data peserta didik berkebutuhan khusus Kemendikdasmen')} memuat kode flag <strong>"K - Kesulitan Belajar"</strong>. Itu label administratif, bukan diagnosis. Anak yang dicatat dengan flag K belum tentu memiliki SLD, dan anak dengan SLD perlu dokumen asesmen agar kebutuhannya tercatat dengan benar.</p>`
    },
    {
      id: 'subtipe',
      h2: 'Tiga Subtipe: Membaca, Ekspresi Tulis, dan Matematika',
      toc: 'Tiga subtipe dan tingkat keparahan',
      html: `
            <p>Karena DSM-5 menyatukan semua gangguan belajar dalam satu nama, klinisi menuliskan <strong>penanda (specifier)</strong> untuk menunjukkan bidang yang terdampak. Satu anak bisa memiliki lebih dari satu penanda.</p>
            <ul>
                <li><strong>Dengan hambatan membaca (disleksia).</strong> Ketepatan membaca kata, kelancaran, atau pemahaman bacaan terganggu. IDAI menyebut disleksia sebagai gangguan belajar yang paling sering dijumpai; anak kesulitan memenggal kata menjadi suku kata dan mencocokkan huruf dengan bunyinya. Penjelasan lengkapnya ada di artikel <a href="disleksia-adalah">disleksia adalah</a>.</li>
                <li><strong>Dengan hambatan ekspresi tulis (disgrafia).</strong> Kesulitan mengeja, tata bahasa dan tanda baca, kejelasan tulisan, serta mengatur gagasan dalam paragraf. IDAI mendeskripsikannya sebagai kesulitan berekspresi lewat tulisan, termasuk tulisan tangan, ejaan, dan pengorganisasian pikiran.</li>
                <li><strong>Dengan hambatan matematika (diskalkulia).</strong> Menurut APA, kelemahan muncul pada pemahaman bilangan (<em>number sense</em>), hafalan fakta aritmetika, ketepatan atau kelancaran berhitung, dan penalaran matematika. Uraian khususnya ada di artikel <a href="diskalkulia-adalah">diskalkulia adalah</a>.</li>
            </ul>
            <p>Selain bidangnya, diagnosis juga mencantumkan <strong>tingkat keparahan</strong>. APA membaginya menjadi tiga. Ringan: kesulitan di satu atau dua bidang yang masih bisa dikompensasi dengan akomodasi. Sedang: kesulitan nyata yang memerlukan pengajaran khusus dan beberapa akomodasi. Berat: kesulitan di beberapa bidang yang membutuhkan pengajaran khusus intensif hampir sepanjang masa sekolah, dan bahkan dengan akomodasi anak mungkin tetap belum efisien mengerjakan tugas akademik. Tingkat ini yang nantinya menentukan seberapa besar dukungan yang dirancang sekolah.</p>`
    },
    {
      id: 'kriteria',
      h2: 'Kriteria Diagnosis DSM-5 dan Kode ICD-11',
      toc: 'Kriteria DSM-5 dan kode ICD-11',
      html: `
            <p>APA merangkum empat syarat yang semuanya harus terpenuhi sebelum diagnosis SLD ditegakkan:</p>
            <ol>
                <li><strong>Kesulitan menetap minimal enam bulan walau sudah mendapat bantuan terarah</strong>, pada setidaknya satu area: membaca kata yang tidak tepat atau lambat, memahami makna bacaan, mengeja, ekspresi tulis, memahami konsep bilangan atau melakukan perhitungan, dan penalaran matematika.</li>
                <li><strong>Kemampuan akademik yang terdampak jauh di bawah yang diharapkan untuk usianya</strong> dan mengganggu sekolah, pekerjaan, atau kegiatan sehari-hari. Ini harus dibuktikan dengan tes capaian akademik terstandar dan asesmen klinis yang menyeluruh.</li>
                <li><strong>Kesulitan mulai muncul pada usia sekolah</strong>, meski sebagian orang baru merasakan dampak besar saat tuntutan bertambah di usia dewasa.</li>
                <li><strong>Kesulitan tidak lebih tepat dijelaskan oleh kondisi lain</strong>, seperti disabilitas intelektual, gangguan penglihatan atau pendengaran, gangguan saraf, kondisi ekonomi atau lingkungan yang tidak mendukung, kurangnya pengajaran, atau kendala memahami bahasa pengantar.</li>
            </ol>
            <p>Syarat pertama itulah yang paling sering terlewat. Anak yang belum pernah mendapat pengajaran terarah belum bisa dinilai memenuhi kriteria, karena belum jelas apakah kesulitannya bertahan bila diajar dengan cara yang tepat. Kriteria yang dirangkum APA di atas merujuk pada ${ext(APA_TR, 'DSM-5-TR')}, revisi teks DSM-5 yang diterbitkan APA pada 2022 dan menjadi edisi yang berlaku saat ini.</p>
            <p>Klasifikasi Organisasi Kesehatan Dunia, ${ext(ICD, 'ICD-11')}, memakai nama <em>developmental learning disorder</em> dengan kode <strong>6A03</strong> di kelompok gangguan perkembangan saraf. Rinciannya: 6A03.0 dengan hambatan membaca, 6A03.1 dengan hambatan ekspresi tulis, 6A03.2 dengan hambatan matematika, 6A03.3 dengan hambatan belajar lain yang dirinci, dan 6A03.Z bila tidak dirinci. Kode ini yang biasanya tertulis di laporan pemeriksaan klinis.</p>`
    },
    {
      id: 'asesmen',
      h2: 'Siapa yang Mengasesmen dan Apa Saja yang Diperiksa',
      toc: 'Siapa yang mengasesmen',
      html: `
            <p>IDAI menganjurkan orang tua segera mencari bantuan profesional, yaitu dokter spesialis anak, psikolog, atau psikiater anak, bila gejala dikeluhkan anak sendiri maupun gurunya. Menurut IDAI, penegakan diagnosis umumnya membutuhkan kerja tim: dokter anak, psikolog, guru, dan terapis terkait seperti audiolog untuk pendengaran, terapis wicara untuk bahasa, atau terapis okupasi.</p>
            <p>Gambaran alurnya sebagai berikut.</p>
            <ol>
                <li><strong>Pemeriksaan dasar oleh dokter.</strong> Penglihatan, pendengaran, riwayat perkembangan, dan kondisi kesehatan lain dicek lebih dulu, karena semuanya bisa meniru gejala gangguan belajar.</li>
                <li><strong>Pengumpulan data.</strong> APA menyebut diagnosis dibangun dari observasi, wawancara, riwayat keluarga, dan laporan sekolah. Bawalah rapor, buku tulis, contoh PR, dan catatan guru.</li>
                <li><strong>Tes oleh psikolog.</strong> Biasanya mencakup tes kecerdasan untuk menyingkirkan disabilitas intelektual dan tes capaian akademik terstandar. Tes neuropsikologis bisa ditambahkan untuk memetakan strategi belajar yang paling cocok. Gambaran biayanya kami ulas di artikel <a href="tes-psikolog-anak-bayar-berapa">tes psikolog anak</a>, sedangkan arti skor kecerdasan ada di artikel <a href="berapa-iq-anak-yang-normal">berapa IQ anak yang normal</a>.</li>
                <li><strong>Penilaian kondisi penyerta.</strong> APA mencatat SLD sering muncul bersama gangguan perkembangan saraf lain seperti ADHD, serta dengan kecemasan. IDAI mengingatkan bahwa ADHD sendiri kini tidak lagi digolongkan sebagai gangguan belajar, sehingga keduanya dinilai terpisah. Lihat juga <a href="adhd-adalah">penjelasan ADHD</a>.</li>
            </ol>
            <p>Di sisi sekolah, guru dapat melakukan asesmen pendidikan untuk mengetahui posisi kemampuan anak saat ini. Asesmen ini tidak menggantikan diagnosis, tetapi sangat berguna untuk menyusun target belajar. Penjelasannya ada di artikel <a href="asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik anak berkebutuhan khusus</a> dan <a href="asesmen-abk">asesmen ABK</a>.</p>`
    },
    {
      id: 'tanda',
      h2: 'Pola yang Patut Dicatat Orang Tua dan Guru',
      toc: 'Pola yang patut dicatat',
      html: `
            <p>Daftar berikut bukan alat diagnosis. Gunanya untuk membantu Anda mencatat pola secara konkret sebelum bertemu tenaga profesional. Dr. Farid menyarankan orang tua dan guru memperhatikan anak dengan kesulitan belajar yang menetap, kesenjangan antara pemahaman lisan dan capaian akademik, nilai rendah pada bidang tertentu saja, atau anak yang mulai menolak sekolah.</p>
            <ul>
                <li><strong>Membaca:</strong> membaca sangat lambat dan penuh usaha, sering menebak kata dari huruf pertama, atau lancar membaca keras tetapi tidak menangkap maknanya.</li>
                <li><strong>Menulis:</strong> ejaan yang sama bisa salah dengan cara berbeda dalam satu halaman, kalimat tanpa tanda baca, atau cerita lisan yang kaya tetapi tulisannya hanya dua kalimat pendek.</li>
                <li><strong>Berhitung:</strong> masih menghitung dengan jari untuk penjumlahan sederhana jauh setelah teman sekelasnya hafal, bingung nilai tempat, atau sulit memperkirakan mana yang lebih banyak.</li>
                <li><strong>Tanda umum:</strong> PR yang seharusnya singkat berlangsung berjam-jam disertai tangis, sakit perut menjelang pelajaran tertentu, atau anak menyebut dirinya bodoh.</li>
            </ul>
            <p>Catat tanggal, tugas yang sedang dikerjakan, dan apa yang sudah dicoba. Catatan seperti ini membantu klinisi menilai syarat "enam bulan meski sudah dibantu". Dr. Farid mengingatkan agar pola seperti ini tidak buru-buru ditanggapi dengan cap pemalas atau sekadar dorongan untuk lebih rajin, karena anak dengan SLD membutuhkan pendekatan yang berbeda.</p>`
    },
    {
      id: 'sekolah',
      h2: 'Akomodasi, Modifikasi, dan Hak di Sekolah Inklusif',
      toc: 'Akomodasi dan hak di sekolah',
      html: `
            <p>Dalam seminar yang sama, ${ext(ANT_AK, 'dr. Farid membedakan dua bentuk dukungan')}. <strong>Akomodasi</strong> membantu anak mengakses pelajaran dan menunjukkan kemampuannya tanpa mengubah target utama. <strong>Modifikasi</strong> menyesuaikan beban atau standar tugas dengan kemampuan anak, tetapi tetap mengukur kompetensi inti yang sama.</p>
            <table class="classification-table">
                <thead><tr><th>Bentuk</th><th>Contoh yang disebutkan dr. Farid</th></tr></thead>
                <tbody>
                    <tr><td>Akomodasi</td><td>Tambahan waktu ujian 50 sampai 100 persen, teks panjang dibacakan guru, kesempatan menjawab secara lisan, huruf yang lebih besar, area kerja minim gangguan</td></tr>
                    <tr><td>Modifikasi</td><td>Jumlah soal dikurangi (misalnya 5 dari 10) dengan kompetensi inti tetap, tugas menulis dikurangi, bacaan disederhanakan, penilaian menekankan pemahaman konsep daripada kerapian dan kecepatan menulis</td></tr>
                </tbody>
            </table>
            <p>Keputusan akomodasi dan modifikasi sebaiknya dibahas bersama oleh orang tua, guru, dan tenaga profesional. Di sekolah inklusif, kesepakatan itu biasanya dituangkan dalam <a href="program-pembelajaran-individual">program pembelajaran individual (PPI)</a> yang ditinjau berkala.</p>
            <p>Dasar hukumnya di Indonesia adalah ${ext(PERMEN, 'Permendikbudristek Nomor 48 Tahun 2023')} tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas, yang berlaku dari PAUD formal sampai perguruan tinggi. Menurut abstrak resminya di JDIH BPK, peraturan ini mengatur fasilitasi akomodasi yang layak lewat dukungan anggaran atau bantuan pendanaan, sarana dan prasarana, penyiapan pendidik dan tenaga kependidikan, serta kurikulum, ditambah pembentukan Unit Layanan Disabilitas (ULD). Peraturan ini juga mencabut Permendiknas Nomor 70 Tahun 2009 tentang pendidikan inklusif. Penerimanya adalah peserta didik penyandang disabilitas, jadi dokumen asesmen yang jelas akan memudahkan orang tua saat membicarakan bentuk akomodasi dengan sekolah.</p>
            <p>Bila sekolah belum siap, orang tua dapat mempertimbangkan sekolah lain. Perbandingan jalurnya kami jelaskan di artikel <a href="apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a> dan prinsip umumnya di <a href="pendidikan-inklusi">pendidikan inklusi</a>.</p>`
    },
    {
      id: 'intervensi',
      h2: 'Intervensi: Terstruktur, Intensif, dan Sesuai Subtipe',
      toc: 'Intervensi sesuai subtipe',
      html: `
            <p>Dalam berita ${ext(ANT_LAT, 'rekomendasi latihan bagi anak dengan SLD')}, dr. Farid menekankan bahwa gangguan belajar spesifik bersifat menetap. Tujuan intervensi bukan "menyembuhkan", melainkan membangun strategi belajar dan mekanisme koping sehingga anak tetap bisa mencapai target pembelajaran yang sama dengan teman-temannya. Intervensi perlu terstruktur dan intensif, serta disesuaikan dengan jenis kesulitannya.</p>
            <ul>
                <li><strong>Hambatan membaca:</strong> pembelajaran fonik yang sistematis, latihan dekoding, dan latihan kelancaran membaca. Langkah praktisnya ada di artikel <a href="cara-mengajar-anak-disleksia-membaca">cara mengajar anak disleksia membaca</a> dan pilihan alat pendukungnya di <a href="alat-bantu-belajar-anak-disleksia">alat bantu belajar anak disleksia</a>.</li>
                <li><strong>Hambatan menulis:</strong> sesuaikan target dengan hasil asesmen. Bila masalahnya pada motorik halus, terapis okupasi biasanya dilibatkan. Bila masalahnya pada ejaan atau penyusunan gagasan, guru dapat melatih tahap demi tahap.</li>
                <li><strong>Hambatan matematika:</strong> konsep bilangan dibangun ulang dari benda konkret ke gambar lalu ke simbol, dengan latihan pendek yang sering.</li>
            </ul>
            <p>Di rumah, dr. Farid menyarankan orang tua memecah tugas menjadi langkah kecil, memakai bantuan visual atau audio, dan menghargai usaha anak. Di sekolah, guru dapat mengidentifikasi kesulitannya lalu menyesuaikan pembelajaran secara individual atau kelompok. Bila anak masih kesulitan setelah langkah-langkah itu dijalankan, orang tua dan guru perlu berkoordinasi agar anak mendapat penilaian dan dukungan dari tenaga profesional, yang kemudian dapat mengidentifikasi kondisi penyerta, menyusun rencana intervensi, dan memantau perkembangannya.</p>
            <p>APA juga mengingatkan bahwa gangguan belajar yang tidak dikenali dan tidak ditangani dapat berdampak lebih luas dari nilai akademik, termasuk risiko tekanan psikologis yang lebih tinggi. Karena itu, perhatikan juga perasaan anak, bukan hanya rapornya.</p>`
    }
  ],
  storyHighlight: 'Di Sekolah Inklusi Taruna Imani, guru YUKA berangkat dari pengamatan harian: tugas apa yang membuat anak macet, bantuan apa yang membuatnya bisa melanjutkan, dan bagaimana perasaannya. Catatan itu kami bagikan kepada orang tua dan menjadi bahan saat keluarga berkonsultasi dengan psikolog atau dokter. Kami tidak menetapkan diagnosis, tetapi kami bisa membantu menyusun penyesuaian belajar di kelas setelah hasil asesmen tersedia.',
  relatedIntro: 'Lanjutkan ke panduan YUKA lain tentang hambatan belajar dan layanan pendidikan inklusif.',
  faq: [
    {
      q: 'Apakah gangguan belajar spesifik sama dengan kesulitan belajar?',
      a: 'Tidak. Kesulitan belajar adalah istilah umum untuk anak yang tertinggal pelajaran dengan banyak kemungkinan sebab. Gangguan belajar spesifik adalah diagnosis klinis yang mensyaratkan kesulitan menetap minimal enam bulan walau sudah dibantu, kemampuan jauh di bawah usianya, muncul di usia sekolah, dan tidak lebih tepat dijelaskan oleh kondisi lain.'
    },
    {
      q: 'Apa kode ICD-11 untuk gangguan belajar spesifik?',
      a: 'ICD-11 memakai nama developmental learning disorder dengan kode 6A03. Subkodenya 6A03.0 untuk hambatan membaca, 6A03.1 untuk ekspresi tulis, 6A03.2 untuk matematika, 6A03.3 untuk hambatan lain yang dirinci, dan 6A03.Z bila tidak dirinci.'
    },
    {
      q: 'Siapa yang berwenang mendiagnosis gangguan belajar spesifik?',
      a: 'Dokter spesialis anak, psikolog, atau psikiater anak. IDAI menyarankan pendekatan tim yang melibatkan dokter anak, psikolog, guru, dan terapis terkait. Guru dan orang tua berperan penting mencatat pola kesulitan, tetapi tidak menetapkan diagnosis.'
    },
    {
      q: 'Apakah anak dengan gangguan belajar spesifik bisa sekolah di sekolah reguler?',
      a: 'Bisa. Banyak anak dengan SLD belajar di kelas reguler dengan akomodasi seperti tambahan waktu ujian, soal dibacakan, atau jawaban lisan. Permendikbudristek 48/2023 mengatur akomodasi yang layak bagi peserta didik penyandang disabilitas di sekolah, dan kesepakatannya bisa dituangkan dalam program pembelajaran individual.'
    },
    {
      q: 'Apakah gangguan belajar spesifik bisa sembuh?',
      a: 'Kondisinya menetap, tetapi anak tetap bisa berkembang. Intervensi yang terstruktur dan sesuai subtipe membantu anak membangun strategi belajar dan mekanisme koping sehingga dapat mencapai target pembelajaran yang sama dengan teman-temannya.'
    }
  ],
  related: [
    { href: 'kesulitan-belajar', title: 'Kesulitan Belajar pada Anak', desc: 'Gambaran luas berbagai sebab anak tertinggal pelajaran.' },
    { href: 'disleksia-adalah', title: 'Disleksia Adalah', desc: 'Subtipe gangguan belajar yang paling sering dijumpai.' },
    { href: 'diskalkulia-adalah', title: 'Diskalkulia Adalah', desc: 'Hambatan memahami bilangan dan berhitung.' },
    { href: 'program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Menuangkan akomodasi ke rencana belajar yang terukur.' }
  ],
  tags: ['GangguanBelajarSpesifik', 'SLD', 'Disleksia', 'Disgrafia', 'Diskalkulia', 'PendidikanInklusi', 'YUKA'],
  sources: [
    { url: APA, label: 'American Psychiatric Association: What Is Specific Learning Disorder? (kriteria, subtipe, tingkat keparahan, prevalensi)' },
    { url: APA_TR, label: 'American Psychiatric Association: Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR)' },
    { url: ICD, label: 'World Health Organization: ICD-11 for Mortality and Morbidity Statistics, 6A03 Developmental learning disorder' },
    { url: IDAI, label: 'Ikatan Dokter Anak Indonesia (IDAI): Kesulitan Belajar' },
    { url: ANT_1, label: 'ANTARA (15 September 2026): Anak pintar bernilai akademik rendah mungkin hadapi gangguan belajar, seminar daring IDAI, dr. Farid Agung Rahmadi, Sp.A, Subsp. T.K.P.S.(K)' },
    { url: ANT_AK, label: 'ANTARA (15 September 2026): Akomodasi dan modifikasi pembelajaran bisa bantu anak dengan SLD' },
    { url: ANT_LAT, label: 'ANTARA (15 September 2026): Rekomendasi latihan bagi anak dengan gangguan belajar spesifik' },
    { url: PERMEN, label: 'JDIH BPK: Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
    { url: DAPODIK, label: 'Kemendikdasmen, Referensi Data Peserta Didik Berkebutuhan Khusus (kode K - Kesulitan Belajar)' },
    { url: KESLAN, label: 'Kementerian Kesehatan (Keslan): Jangan Ambil Hak Anak-Anak, Meski Mereka Terlahir Berbeda' }
  ]
};

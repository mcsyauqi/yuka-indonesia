'use strict';
// Isi artikel /artikel/what-is-a-milestone-for-a-kid (kartu Trello mfCapkYQ, catchup 2026-10-04).
// Menggantikan versi 2026-10-03 05:01 WIB (commit 4a6d2e7) yang judulnya pengertian milestone anak tetapi badannya
// salinan artikel milestone-motorik-halus-anak-1-3-tahun (konten duplikat, kartu induk P0 gswe5XFa pasangan #5).
// Sudut artikel: PENGERTIAN milestone (apa itu, ranahnya, cara patokan usia ditetapkan, bedanya dengan skrining,
// kapan perlu bertindak), bukan daftar motorik halus per usia (wilayah milestone-motorik-halus-anak-1-3-tahun) dan
// bukan motorik kasar bayi (wilayah milestone-motorik-kasar-anak-0-12-bulan).
// Bahasa: target keyword kartu berbahasa Inggris dipakai apa adanya di title/H1, isi artikel berbahasa Indonesia
// mengikuti seluruh situs.
// Fakta dicek ke sumber aslinya pada 4 Oktober 2026:
//  - CDC Learn the Signs. Act Early.: halaman CDC's Developmental Milestones (definisi, daftar usia 2 bulan s.d. 5 tahun,
//    "Don't wait", rekomendasi AAP skrining 9, 18, 30 bulan dan autisme 18 dan 24 bulan), halaman milestone 6 bulan,
//    1 tahun, 2 tahun (definisi "75% or more"), 3 tahun, 5 tahun, dan halaman Early Intervention.
//  - Zubler JM dkk. Pediatrics 2022 (PubMed 35132439): kriteria >=75%, pengurangan 26,4%, penggantian 40,9%,
//    sepertiga dipindah usia, 67,7% ke usia lebih tua, tambahan usia 15 dan 30 bulan.
//  - WHO Motor Development Study, Acta Paediatr Suppl 2006 (PubMed 16817682) dan tabel WHO windows of achievement:
//    816 anak di Ghana, India, Norwegia, Oman, AS; jendela persentil 1 sampai 99; 4,3% tidak merangkak.
//  - AAP HealthyChildren.org: Corrected Age for Preemies (usia koreksi dipakai selama 2 tahun pertama).
//  - IDAI: Mengenal Keterlambatan Perkembangan Umum pada Anak (ranah, 5-10%, 1-3%, berjalan 10-18 bulan, red flag);
//    Pentingnya Pemantauan Tumbuh Kembang 1000 HPK (jadwal pemantauan, tonggak perkembangan, buku KIA);
//    Pentingnya Memantau Pertumbuhan dan Perkembangan Anak bagian 2 (KPSP 9-10 pertanyaan, aplikasi PRIMA).
// Tidak ada nama klinik, tarif, nama dokter, atau peninjau medis yang dikarang.

const CDC_MS = 'https://www.cdc.gov/act-early/milestones/index.html';
const CDC_6M = 'https://www.cdc.gov/act-early/milestones/6-months.html';
const CDC_1Y = 'https://www.cdc.gov/act-early/milestones/1-year.html';
const CDC_2Y = 'https://www.cdc.gov/act-early/milestones/2-years.html';
const CDC_3Y = 'https://www.cdc.gov/act-early/milestones/3-years.html';
const CDC_5Y = 'https://www.cdc.gov/act-early/milestones/5-years.html';
const CDC_EI = 'https://www.cdc.gov/act-early/early-intervention/index.html';
const ZUBLER = 'https://pubmed.ncbi.nlm.nih.gov/35132439/';
const WHO_MGRS = 'https://pubmed.ncbi.nlm.nih.gov/16817682/';
const WHO_PAGE = 'https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones';
const AAP_CORR = 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Corrected-Age-For-Preemies.aspx';
const IDAI_GDD = 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/mengenal-keterlambatan-perkembangan-umum-pada-anak';
const IDAI_1000 = 'https://www.idai.or.id/artikel/klinik/pengasuhan-anak/pentingnya-pemantauan-tumbuh-kembang-1000-hari-pertama-kehidupan-anak';
const IDAI_KPSP = 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/pentingnya-memantau-pertumbuhan-dan-perkembangan-anak-bagian-2';

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  slug: 'what-is-a-milestone-for-a-kid',
  keyword: 'what is a milestone for a kid',
  titleTag: 'What Is a Milestone for a Kid? Arti Milestone Anak',
  metaDesc: 'Apa itu milestone anak? Pahami arti tonggak perkembangan, empat ranahnya, cara patokan usia dibuat, dan kapan perlu ke dokter. Baca panduannya.',
  ogTitle: 'What Is a Milestone for a Kid? Arti Tonggak Perkembangan Anak dan Cara Memakainya',
  ogDesc: 'Milestone adalah kemampuan yang dicapai sebagian besar anak pada usia tertentu. Pelajari empat ranahnya, kenapa patokan usia bukan tenggat, bedanya dengan skrining, dan tanda yang perlu dibicarakan dengan dokter.',
  h1: 'What Is a Milestone for a Kid? Arti Tonggak Perkembangan Anak dan Cara Orang Tua Memakainya',
  crumb: 'What Is a Milestone for a Kid',
  parent: { name: 'Intervensi Dini', href: 'intervensi-dini' },
  about: ['Developmental milestones', 'Tonggak perkembangan anak', 'Pemantauan perkembangan', 'Skrining perkembangan', 'KPSP', 'Keterlambatan perkembangan'],
  keywords: 'what is a milestone for a kid, milestone anak, arti milestone anak, tonggak perkembangan anak, developmental milestone, milestone perkembangan anak, KPSP, skrining perkembangan anak',
  readTime: '12 menit baca',
  image: {
    file: 'Dokumentasi/museum-gunung-merapi-kelompok-anak-foto-bersama-mall-049.webp',
    w: 2000, h: 1500,
    alt: 'Rombongan anak dari berbagai usia berseragam putih merah dan pendamping berkaus merah muda berfoto bersama di lobi bangunan dengan replika gunung di belakangnya',
    caption: 'Siswa berbagai usia dan pendamping berfoto bersama saat kegiatan kunjungan di luar sekolah. Foto ini dokumentasi kegiatan YUKA dan tidak menggambarkan tahap perkembangan atau kondisi anak tertentu.',
    credit: 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).',
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  answer: '<strong>Milestone</strong> (tonggak perkembangan) adalah kemampuan yang sudah bisa dilakukan sebagian besar anak pada usia tertentu, misalnya tersenyum, melambaikan tangan, berjalan, atau merangkai dua kata. CDC menetapkannya sebagai hal yang dicapai sedikitnya 75% anak seusianya. Milestone dipakai untuk memantau perkembangan, bukan tenggat yang harus dikejar setiap anak pada hari yang sama.',
  intro: `
            <p>Pertanyaan "anakmu sudah bisa apa?" sering membuat orang tua cemas, apalagi bila anak tetangga yang seumur sudah lebih dulu berjalan atau berbicara. Di balik pertanyaan itu ada konsep yang dipakai dokter anak di seluruh dunia: <em>developmental milestone</em>, atau dalam bahasa Indonesia disebut tonggak perkembangan.</p>
            <p>Artikel ini menjawab pertanyaan dasarnya: apa itu milestone, apa saja ranahnya, bagaimana patokan usianya dibuat, dan bagaimana memakainya dengan tepat tanpa panik. Kalau Anda mencari daftar kemampuan yang lebih rinci, YUKA sudah menyiapkan panduan terpisah untuk <a href="milestone-motorik-kasar-anak-0-12-bulan">milestone motorik kasar bayi 0 sampai 12 bulan</a> dan <a href="milestone-motorik-halus-anak-1-3-tahun">milestone motorik halus anak 1 sampai 3 tahun</a>.</p>`,
  infoBox: 'Artikel ini adalah informasi edukasi untuk orang tua, guru, dan pendamping. Daftar milestone membantu Anda mengamati dan mencatat, tetapi tidak bisa menetapkan diagnosis. Bila ada kekhawatiran tentang perkembangan anak, bicarakan dengan dokter anak, bidan, atau petugas puskesmas.',
  sections: [
    {
      id: 'pengertian',
      h2: 'Apa Itu Milestone pada Anak?',
      toc: 'Apa itu milestone pada anak',
      html: `
            <p>CDC (Pusat Pengendalian dan Pencegahan Penyakit Amerika Serikat) menjelaskan bahwa kemampuan seperti melangkah pertama kali, tersenyum pertama kali, dan melambaikan tangan "dadah" disebut milestone perkembangan. Anak mencapai milestone dalam cara mereka bermain, belajar, berbicara, bertindak, dan bergerak (${ext(CDC_MS, 'CDC, Developmental Milestones')}). Pada halaman per usianya, CDC menegaskan bahwa milestone adalah hal yang dapat dilakukan sebagian besar anak, yaitu 75% atau lebih, pada usia tertentu (${ext(CDC_2Y, 'CDC, Milestones by 2 Years')}).</p>
            <p>Ikatan Dokter Anak Indonesia (IDAI) memakai istilah tonggak perkembangan. IDAI membedakan dua hal yang sering tertukar: <strong>pertumbuhan</strong> adalah bertambahnya ukuran fisik (berat dan tinggi badan), sedangkan <strong>perkembangan</strong> adalah bertambahnya kemampuan struktur dan fungsi tubuh menjadi lebih kompleks, misalnya dari berguling menjadi duduk, berdiri, lalu berjalan. Kemampuan yang sesuai umur inilah yang disebut tonggak perkembangan (${ext(IDAI_1000, 'IDAI, Pemantauan Tumbuh Kembang 1000 HPK')}).</p>
            <p>Jadi, jawaban singkat untuk "what is a milestone for a kid" adalah: titik pengamatan. Milestone memberi orang tua dan tenaga kesehatan bahasa yang sama untuk menjawab apakah perkembangan seorang anak berjalan sesuai harapan, atau perlu diperiksa lebih lanjut.</p>`
    },
    {
      id: 'ranah',
      h2: 'Empat Ranah Milestone Perkembangan',
      toc: 'Empat ranah milestone',
      html: `
            <p>Milestone tidak hanya soal berjalan dan berbicara. CDC mengelompokkan checklist-nya ke empat ranah, sedangkan IDAI memakai pembagian yang sedikit berbeda namun saling melengkapi.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table" style="margin:0;">
                <thead><tr><th>Pembagian CDC</th><th>Pembagian IDAI</th><th>Contoh dari checklist CDC</th></tr></thead>
                <tbody>
                    <tr><td>Sosial dan emosional</td><td>Personal sosial dan kemandirian</td><td>Usia 6 bulan: mengenali orang yang akrab dan suka melihat dirinya di cermin</td></tr>
                    <tr><td>Bahasa dan komunikasi</td><td>Bahasa dan bicara</td><td>Usia 1 tahun: melambaikan tangan dadah dan memanggil orang tua dengan "mama" atau "dada"</td></tr>
                    <tr><td>Kognitif (belajar, berpikir, memecahkan masalah)</td><td>Tidak dipisah sebagai ranah tersendiri</td><td>Usia 1 tahun: mencari mainan yang ia lihat disembunyikan di bawah selimut</td></tr>
                    <tr><td>Gerak dan perkembangan fisik</td><td>Motor kasar dan motor halus</td><td>Usia 1 tahun: menarik badan untuk berdiri dan mengambil benda kecil dengan ibu jari dan telunjuk</td></tr>
                </tbody>
            </table></div>
            <p>Sumber tabel: ${ext(CDC_6M, 'CDC, Milestones by 6 Months')}, ${ext(CDC_1Y, 'CDC, Milestones by 1 Year')}, dan ${ext(IDAI_GDD, 'IDAI, Mengenal Keterlambatan Perkembangan Umum')}. Pembagian IDAI memisahkan <a href="motorik-kasar-adalah">motorik kasar</a> (otot besar untuk duduk, berdiri, berjalan) dari <a href="motorik-halus-adalah">motorik halus</a> (otot kecil tangan dan jari untuk menjimpit, menggambar, menulis), karena keduanya sering berkembang dengan kecepatan berbeda.</p>
            <p>Pembagian ranah ini penting karena seorang anak bisa sangat cepat di satu ranah tetapi lebih lambat di ranah lain. Menurut IDAI, keterlambatan bisa terjadi hanya di satu ranah, atau di dua ranah atau lebih. Keadaan kedua disebut keterlambatan perkembangan umum (<em>global developmental delay</em>).</p>`
    },
    {
      id: 'contoh-usia',
      h2: 'Contoh Milestone dari Bayi sampai Usia 5 Tahun',
      toc: 'Contoh milestone per usia',
      html: `
            <p>CDC menyusun checklist untuk usia 2, 4, 6, 9 bulan, 1 tahun, 15 bulan, 18 bulan, 2 tahun, 30 bulan, 3, 4, dan 5 tahun (${ext(CDC_MS, 'CDC')}). Tabel berikut hanya mengambil beberapa contoh agar terlihat bagaimana kemampuan anak bertambah kompleks dari waktu ke waktu. Ini bukan daftar lengkap.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table" style="margin:0;">
                <thead><tr><th>Usia</th><th>Contoh yang dilakukan sebagian besar anak</th></tr></thead>
                <tbody>
                    <tr><td>6 bulan</td><td>Tertawa, bergantian bersuara dengan Anda, meraih mainan yang diinginkan, berguling dari tengkurap ke telentang</td></tr>
                    <tr><td>1 tahun</td><td>Bermain tepuk tangan bersama (pat-a-cake), mengerti kata "jangan", memasukkan balok ke dalam gelas, berjalan sambil berpegangan pada perabot</td></tr>
                    <tr><td>2 tahun</td><td>Memperhatikan bila orang lain sedih, merangkai minimal dua kata seperti "mau susu", menunjuk minimal dua bagian tubuh, menendang bola, berlari, makan dengan sendok</td></tr>
                    <tr><td>3 tahun</td><td>Bercakap dengan minimal dua kali saling balas, bertanya "siapa", "apa", "di mana", menyebutkan nama depannya, memakai sebagian baju sendiri, makan dengan garpu</td></tr>
                    <tr><td>5 tahun</td><td>Mengikuti aturan dan bergiliran saat bermain, menceritakan kisah dengan minimal dua kejadian, berhitung sampai 10, melompat dengan satu kaki, mengancingkan sebagian kancing</td></tr>
                </tbody>
            </table></div>
            <p>Sumber: ${ext(CDC_6M, 'CDC 6 bulan')}, ${ext(CDC_1Y, 'CDC 1 tahun')}, ${ext(CDC_2Y, 'CDC 2 tahun')}, ${ext(CDC_3Y, 'CDC 3 tahun')}, ${ext(CDC_5Y, 'CDC 5 tahun')}. Untuk perkembangan bahasa paling awal, seperti cooing dan babbling sebelum kata pertama, baca juga <a href="babbling-dan-cooing-tahap-perkembangan-bahasa">tahap perkembangan bahasa babbling dan cooing</a>.</p>`
    },
    {
      id: 'patokan',
      h2: 'Bagaimana Patokan Usia Milestone Ditentukan',
      toc: 'Bagaimana patokan usia ditentukan',
      html: `
            <p>Banyak orang tua mengira usia pada daftar milestone adalah usia rata-rata. Pada checklist CDC versi terbaru, bukan begitu. Pada 2022, kelompok kerja ahli yang dibentuk American Academy of Pediatrics (AAP) atas pendanaan CDC merevisi checklist tersebut. Mereka menetapkan 11 kriteria, salah satunya hanya memasukkan milestone yang diharapkan sudah dicapai sebagian besar anak (sedikitnya 75%) pada usia kunjungan kesehatan tertentu, serta mudah diamati dalam keseharian (${ext(ZUBLER, 'Zubler dkk., Pediatrics 2022')}).</p>
            <p>Revisi itu cukup besar. Menurut abstrak studi yang sama:</p>
            <ul>
                <li>Jumlah milestone berkurang 26,4% dan 40,9% milestone lama diganti.</li>
                <li>Sepertiga milestone yang dipertahankan dipindah ke usia lain, dan 67,7% di antaranya dipindah ke usia yang lebih tua.</li>
                <li>Checklist untuk usia 15 dan 30 bulan ditambahkan.</li>
                <li>Data normatif paling sedikit tersedia untuk milestone sosial emosional dan kognitif.</li>
            </ul>
            <p>Konsekuensinya praktis: bila anak belum mencapai milestone pada usia yang tercantum di checklist CDC, ia termasuk sekitar seperempat anak yang lebih lambat, sehingga lebih layak dibicarakan dengan dokter daripada ditunggu saja. Perlu diingat juga bahwa daftar lama dan daftar baru bisa mencantumkan usia berbeda untuk kemampuan yang sama, jadi bandingkan anak dengan satu sumber yang sama dan terbaru.</p>`
    },
    {
      id: 'bukan-tenggat',
      h2: 'Milestone Itu Rentang, Bukan Tenggat',
      toc: 'Milestone itu rentang, bukan tenggat',
      html: `
            <p>Studi perkembangan motorik WHO menggambarkan variasi ini dengan jelas. Peneliti mengikuti 816 anak di Ghana, India, Norwegia, Oman, dan Amerika Serikat, lalu menyusun "jendela pencapaian" enam milestone motorik kasar, dibatasi persentil ke-1 dan ke-99 (${ext(WHO_MGRS, 'WHO Multicentre Growth Reference Study Group, 2006')}).</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table" style="margin:0;">
                <thead><tr><th>Milestone motorik kasar</th><th>Jendela pencapaian anak sehat (bulan)</th></tr></thead>
                <tbody>
                    <tr><td>Duduk tanpa bantuan</td><td>3,8 sampai 9,2</td></tr>
                    <tr><td>Berdiri dengan bantuan</td><td>4,8 sampai 11,4</td></tr>
                    <tr><td>Merangkak dengan tangan dan lutut</td><td>5,2 sampai 13,5</td></tr>
                    <tr><td>Berjalan dengan bantuan</td><td>6,0 sampai 13,7</td></tr>
                    <tr><td>Berdiri sendiri</td><td>6,9 sampai 16,9</td></tr>
                    <tr><td>Berjalan sendiri</td><td>8,2 sampai 17,6</td></tr>
                </tbody>
            </table></div>
            <p>Sumber angka: tabel <em>Windows of achievement for six gross motor milestones</em> pada ${ext(WHO_PAGE, 'halaman WHO Motor Development Milestones')}. Studi yang sama mencatat 4,3% anak sehat dalam penelitian itu tidak menunjukkan tahap merangkak dengan tangan dan lutut, sehingga melewatkan tahap merangkak saja belum tentu berarti masalah. IDAI memberi contoh serupa: anak dikatakan normal bila mulai berjalan antara usia 10 hingga 18 bulan, sehingga perbedaan antar anak seusia sering terjadi (${ext(IDAI_GDD, 'IDAI')}).</p>
            <p>Untuk bayi yang lahir prematur, AAP menyarankan memakai <strong>usia koreksi</strong> selama dua tahun pertama. Caranya, usia sejak lahir dikurangi jumlah minggu kelahiran yang terlalu awal. Contoh dari AAP: bayi yang lahir pada usia kehamilan 32 minggu lahir 8 minggu lebih awal, jadi saat berumur 4 bulan, kemampuannya dibandingkan dengan bayi cukup bulan berusia 2 bulan (${ext(AAP_CORR, 'AAP HealthyChildren.org')}).</p>
            <p>Yang perlu diperhatikan bukan satu milestone yang sedikit terlambat, melainkan polanya: apakah kemampuan baru terus bertambah, apakah keterlambatan muncul di beberapa ranah sekaligus, dan apakah ada kemampuan yang hilang.</p>`
    },
    {
      id: 'kapan-waspada',
      h2: 'Kapan Orang Tua Perlu Bertindak',
      toc: 'Kapan perlu bertindak',
      html: `
            <p>Pesan CDC untuk orang tua sangat lugas: Anda yang paling mengenal anak Anda, jadi jangan menunggu. Bila anak belum mencapai satu atau lebih milestone, kehilangan kemampuan yang sebelumnya sudah dimiliki, atau Anda punya kekhawatiran lain, bicarakan dengan dokter anak dan tanyakan tentang skrining perkembangan (${ext(CDC_MS, 'CDC')}).</p>
            <p>IDAI juga menyusun daftar tanda bahaya (<em>red flag</em>) sederhana. Bila menemukan salah satunya, IDAI menyarankan agar orang tua tidak menunda dan segera memeriksakan anak ke tenaga kesehatan terdekat (${ext(IDAI_GDD, 'IDAI')}). Beberapa di antaranya:</p>
            <ul>
                <li>Gerakan tubuh yang tidak seimbang antara sisi kiri dan kanan.</li>
                <li>Refleks primitif bayi masih menetap setelah usia 6 bulan.</li>
                <li>Sudah sangat dominan memakai satu tangan sebelum usia 1 tahun.</li>
                <li>Masih sangat sering memasukkan mainan ke mulut setelah usia 14 bulan.</li>
                <li>Belum menunjuk untuk memperlihatkan benda yang menarik perhatiannya, dan kurang mampu berbagi perhatian dengan orang lain, pada usia 20 bulan.</li>
                <li>Orang tua masih tidak mengerti ucapan anak pada usia 30 bulan, atau anak sering membeo setelah usia 30 bulan.</li>
                <li>Respons terhadap suara tidak konsisten, misalnya tidak selalu menoleh saat dipanggil.</li>
                <li>Pada usia berapa pun: tidak ada babbling, bicara, atau interaksi sosial.</li>
            </ul>
            <p>Tanda yang berkaitan dengan bahasa dan interaksi sosial perlu perhatian khusus, karena bisa berhubungan dengan <a href="speech-delay-adalah">keterlambatan bicara</a>, gangguan pendengaran, atau <a href="autisme-adalah">autisme</a>. Penyebabnya hanya bisa dipastikan lewat pemeriksaan, bukan dari daftar ini.</p>`
    },
    {
      id: 'skrining',
      h2: 'Milestone Berbeda dengan Skrining Perkembangan',
      toc: 'Milestone berbeda dengan skrining',
      html: `
            <p>Checklist milestone adalah alat <em>pemantauan</em> yang bisa dipakai orang tua sendiri. CDC menulis dengan tegas bahwa materi milestone mereka bukan pengganti alat skrining perkembangan yang terstandar dan tervalidasi. AAP merekomendasikan skrining perkembangan umum dengan alat terstandar pada usia 9, 18, dan 30 bulan, serta skrining autisme pada usia 18 dan 24 bulan, atau kapan pun orang tua atau tenaga kesehatan merasa khawatir (${ext(CDC_MS, 'CDC')}).</p>
            <p>Di Indonesia, ada beberapa jalur yang bisa dipakai:</p>
            <ul>
                <li><strong>Buku Kesehatan Ibu dan Anak (buku KIA).</strong> IDAI menyebut skrining perkembangan bisa dilakukan lewat pengamatan petugas kesehatan, kuesioner yang dijawab orang tua, atau buku KIA (${ext(IDAI_1000, 'IDAI')}).</li>
                <li><strong>Kuesioner Pra Skrining Perkembangan (KPSP).</strong> Instrumen yang disusun Kementerian Kesehatan RI ini berisi 9 sampai 10 pertanyaan tentang kemampuan yang sudah dicapai anak sesuai kelompok usianya (${ext(IDAI_KPSP, 'IDAI')}).</li>
                <li><strong>Aplikasi PRIMA dari IDAI.</strong> Menurut IDAI, KPSP bisa diakses lewat aplikasi PRIMA untuk Orangtua, yang juga memuat pemantauan pertumbuhan dan jadwal imunisasi. Bila hasilnya meragukan, IDAI menyarankan segera konsultasi ke dokter.</li>
            </ul>
            <p>Soal frekuensi, IDAI (mengutip pedoman SDIDTK Kemenkes 2014) menganjurkan pemantauan tumbuh kembang tiap bulan untuk bayi, tiap 3 bulan untuk anak usia 12 sampai 24 bulan, dan tiap 6 bulan untuk anak usia 24 sampai 72 bulan (${ext(IDAI_1000, 'IDAI')}). Anak yang hasil pemantauannya normal tetap perlu diperiksa berkala, karena perkembangan terus berlangsung.</p>`
    },
    {
      id: 'abk',
      h2: 'Milestone untuk Anak Berkebutuhan Khusus',
      toc: 'Milestone untuk anak berkebutuhan khusus',
      html: `
            <p>Bagi keluarga dengan <a href="abk-adalah-anak-berkebutuhan-khusus">anak berkebutuhan khusus</a>, daftar milestone bisa terasa menyakitkan karena terus mengingatkan apa yang belum bisa dilakukan anak. Padahal fungsi utamanya adalah membuka jalan ke bantuan, bukan memberi nilai.</p>
            <p>IDAI menyebut penyebab keterlambatan perkembangan umum antara lain gangguan genetik atau kromosom seperti sindrom Down, gangguan atau infeksi susunan saraf seperti palsi serebral, serta riwayat bayi risiko tinggi seperti lahir prematur atau berat lahir rendah. IDAI juga menekankan bahwa dengan mengetahui sejak dini, penyebabnya bisa dicari dan intervensi yang tepat bisa segera dimulai (${ext(IDAI_GDD, 'IDAI')}).</p>
            <p>CDC menggambarkan <a href="intervensi-dini">intervensi dini</a> sebagai layanan dan dukungan untuk bayi dan anak kecil dengan keterlambatan perkembangan atau disabilitas beserta keluarganya. Bentuknya bisa berupa terapi wicara, fisioterapi, dan layanan lain sesuai kebutuhan anak dan keluarga, dan kelayakannya ditentukan dari evaluasi kemampuan anak (${ext(CDC_EI, 'CDC, Early Intervention')}). Sistem layanannya di Amerika berbeda dengan di Indonesia, tetapi prinsipnya sama: evaluasi dulu, lalu dukungan disesuaikan dengan kebutuhan anak.</p>
            <p>Dalam keseharian, beberapa hal ini membantu orang tua memakai milestone dengan lebih sehat:</p>
            <ul>
                <li><strong>Bandingkan anak dengan dirinya sendiri.</strong> Setelah anak menjalani evaluasi dan terapi, catat kemampuan baru yang muncul dari bulan ke bulan, bukan hanya jarak dengan anak seusianya.</li>
                <li><strong>Pecah satu milestone menjadi langkah kecil.</strong> Contohnya, sebelum berjalan sendiri ada berdiri dengan bantuan, berjalan berpegangan, lalu berdiri sendiri, sesuai urutan dalam studi WHO di atas. Kemajuan kecil seperti ini lebih mudah terlihat dan dirayakan. Untuk anak yang terlambat berjalan, baca juga <a href="terapi-fisik-untuk-anak-terlambat-jalan">terapi fisik untuk anak terlambat jalan</a>.</li>
                <li><strong>Bawa catatan ke setiap kunjungan.</strong> CDC menyarankan orang tua menyampaikan hal yang disukai anak, hal yang dilakukan atau belum dilakukan anak yang membuat khawatir, kemampuan yang hilang, serta riwayat kebutuhan kesehatan khusus atau kelahiran prematur (${ext(CDC_2Y, 'CDC')}).</li>
            </ul>`
    },
    {
      id: 'mencatat',
      h2: 'Cara Praktis Memantau Milestone di Rumah',
      toc: 'Cara praktis memantau di rumah',
      html: `
            <p>Anda tidak perlu alat khusus untuk mulai memantau. Langkah sederhana berikut sudah cukup untuk menghasilkan catatan yang berguna bagi dokter atau terapis:</p>
            <ol>
                <li><strong>Pilih satu sumber daftar.</strong> Gunakan buku KIA, KPSP lewat petugas kesehatan atau aplikasi PRIMA, atau checklist CDC. Jangan mencampur beberapa daftar dengan patokan usia yang berbeda.</li>
                <li><strong>Amati dalam kegiatan biasa.</strong> Salah satu kriteria revisi checklist CDC 2022 adalah memilih milestone yang mudah diamati dalam situasi sehari-hari, misalnya saat makan, mandi, atau bermain. Tidak perlu "menguji" anak secara khusus.</li>
                <li><strong>Catat tanggal dan konteks.</strong> Tulis kapan anak pertama kali melakukan suatu kemampuan dan dalam situasi apa. Video pendek di ponsel sering membantu dokter melihat apa yang Anda maksud.</li>
                <li><strong>Perhatikan semua ranah.</strong> Orang tua cenderung fokus pada berjalan dan berbicara. Kemampuan sosial, seperti menunjuk untuk berbagi perhatian atau menoleh saat dipanggil, sama pentingnya.</li>
                <li><strong>Sampaikan kekhawatiran lebih awal.</strong> Kalau ragu, lebih baik bertanya sekarang daripada menunggu kunjungan berikutnya. Kehilangan kemampuan yang sebelumnya sudah ada selalu perlu segera dibicarakan.</li>
            </ol>
            <p>Bila ingin tahu kegiatan sehari-hari yang mendukung perkembangan gerak anak, lihat <a href="contoh-motorik-kasar-dan-halus">contoh motorik kasar dan halus</a> beserta stimulasinya.</p>`
    }
  ],
  storyHighlight: 'Di Sekolah Inklusi Taruna Imani, guru dan pendamping belajar bersama anak dengan kemampuan dan kecepatan perkembangan yang berbeda-beda. YUKA bukan klinik dan tidak melakukan diagnosis, tetapi kami bisa menemani orang tua berdiskusi tentang catatan perkembangan anak dan langkah pendampingan berikutnya. Hubungi kami bila ingin berbincang.',
  relatedIntro: 'Lanjutkan ke panduan YUKA lain tentang perkembangan anak dan pendampingan sejak dini.',
  faq: [
    { q: 'Apa arti milestone pada anak?', a: 'Milestone atau tonggak perkembangan adalah kemampuan yang sudah bisa dilakukan sebagian besar anak pada usia tertentu, misalnya tersenyum, melambaikan tangan, berjalan, atau merangkai dua kata. Pada checklist CDC, patokannya adalah kemampuan yang dicapai sedikitnya 75% anak seusianya.' },
    { q: 'Apa saja jenis milestone anak?', a: 'CDC membaginya menjadi empat ranah: sosial dan emosional, bahasa dan komunikasi, kognitif, serta gerak dan perkembangan fisik. IDAI membaginya menjadi motor kasar, motor halus, bahasa atau bicara, dan personal sosial atau kemandirian.' },
    { q: 'Apakah anak yang terlambat satu milestone pasti mengalami gangguan?', a: 'Tidak pasti. Rentang usia normal cukup lebar, misalnya IDAI menyebut anak normal mulai berjalan antara 10 dan 18 bulan. Namun, bila anak belum mencapai milestone, kehilangan kemampuan yang sudah dimiliki, atau Anda khawatir, CDC menyarankan agar tidak menunggu dan segera bertanya kepada dokter tentang skrining.' },
    { q: 'Bagaimana menghitung milestone untuk bayi prematur?', a: 'AAP menyarankan memakai usia koreksi selama dua tahun pertama, yaitu usia sejak lahir dikurangi jumlah minggu kelahiran yang terlalu awal. Bayi yang lahir 8 minggu lebih awal dan kini berumur 4 bulan dibandingkan dengan bayi cukup bulan berusia 2 bulan.' },
    { q: 'Di mana bisa memeriksa perkembangan anak di Indonesia?', a: 'Pemantauan bisa dilakukan lewat buku KIA dan KPSP bersama bidan, petugas puskesmas, atau dokter anak. IDAI juga menyediakan KPSP di aplikasi PRIMA untuk Orangtua. Bila hasilnya meragukan, konsultasikan ke dokter untuk pemeriksaan lebih lanjut.' }
  ],
  related: [
    { href: 'milestone-motorik-kasar-anak-0-12-bulan', title: 'Milestone Motorik Kasar Anak 0-12 Bulan', desc: 'Tahapan gerak bayi dari mengangkat kepala sampai berjalan.' },
    { href: 'milestone-motorik-halus-anak-1-3-tahun', title: 'Milestone Motorik Halus Anak 1-3 Tahun', desc: 'Perkembangan tangan dan jari pada usia batita.' },
    { href: 'intervensi-dini', title: 'Intervensi Dini', desc: 'Kenapa dukungan sejak awal penting bagi anak dengan keterlambatan.' },
    { href: 'apakah-gdd-sama-dengan-autis', title: 'Apakah GDD Sama dengan Autis?', desc: 'Membedakan keterlambatan perkembangan umum dan autisme.' }
  ],
  tags: ['MilestoneAnak', 'TumbuhKembang', 'PerkembanganAnak', 'DeteksiDini', 'KPSP', 'YUKA'],
  sources: [
    { url: CDC_MS, label: 'CDC Learn the Signs. Act Early.: CDC\'s Developmental Milestones' },
    { url: CDC_6M, label: 'CDC: Important Milestones, Your Baby By Six Months' },
    { url: CDC_1Y, label: 'CDC: Important Milestones, Your Baby By One Year' },
    { url: CDC_2Y, label: 'CDC: Important Milestones, Your Child By Two Years' },
    { url: CDC_3Y, label: 'CDC: Important Milestones, Your Child By Three Years' },
    { url: CDC_5Y, label: 'CDC: Important Milestones, Your Child By Five Years' },
    { url: CDC_EI, label: 'CDC: What is Early Intervention?' },
    { url: ZUBLER, label: 'Zubler JM dkk. Evidence-Informed Milestones for Developmental Surveillance Tools. Pediatrics, 2022 (PubMed 35132439)' },
    { url: WHO_MGRS, label: 'WHO Multicentre Growth Reference Study Group. WHO Motor Development Study: windows of achievement for six gross motor development milestones. Acta Paediatr Suppl, 2006 (PubMed 16817682)' },
    { url: WHO_PAGE, label: 'WHO: Motor development milestones (tabel windows of achievement)' },
    { url: AAP_CORR, label: 'American Academy of Pediatrics, HealthyChildren.org: Corrected Age for Preemies' },
    { url: IDAI_GDD, label: 'Ikatan Dokter Anak Indonesia: Mengenal Keterlambatan Perkembangan Umum pada Anak' },
    { url: IDAI_1000, label: 'Ikatan Dokter Anak Indonesia: Pentingnya Pemantauan Tumbuh Kembang 1000 Hari Pertama Kehidupan Anak' },
    { url: IDAI_KPSP, label: 'Ikatan Dokter Anak Indonesia: Pentingnya Memantau Pertumbuhan dan Perkembangan Anak (Bagian 2)' }
  ]
};

'use strict';
// Isi artikel /artikel/sibling-anak-berkebutuhan-khusus (cycle #73, slot 2026-10-04).
// Sudut: kebutuhan dan dukungan untuk SAUDARA KANDUNG anak berkebutuhan khusus. Beda dari
// dukungan-keluarga-anak-abk (peran seluruh anggota rumah) dan hubungan-suami-istri-dengan-anak-abk-tips (pasangan).
// Fakta dicek ke abstrak PubMed asli pada 5 Oktober 2026:
//  - Shivers, Jackson, McGregor 2019 (PMID 30178117): meta-analisis 69 sampel independen, efek keseluruhan kecil
//    (g = -0,26), lebih buruk pada masalah internalisasi, kecemasan, depresi; tidak berbeda bermakna pada penyesuaian,
//    koping, fungsi keluarga.
//  - Wolff dkk. 2023 (PMID 36175605): 24 studi intervensi sibling; perbaikan terbesar harga diri, kesejahteraan sosial,
//    pengetahuan tentang kondisi; selisih dengan kelompok tunggu positif tetapi kecil.
//  - Tudor dan Lerner 2015 (PMID 25315924): 16 artikel, metode dan hasil sangat bervariasi.
//  - Hartling dkk. 2014 (PMID 20598075): uji terkontrol berkualitas lebih tinggi menunjukkan kecemasan turun dan suasana
//    hati membaik, tetapi tidak konsisten antarstudi.
//  - Sibling Support Project, halaman Sibshops (siblingsupport.org/sibshops/).
// Tidak ada angka prevalensi Indonesia yang dikarang. Foto: Dokumentasi YUKA, tidak ada keterangan kondisi anak mana pun.

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
const SHIVERS = 'https://pubmed.ncbi.nlm.nih.gov/30178117/';
const WOLFF = 'https://pubmed.ncbi.nlm.nih.gov/36175605/';
const TUDOR = 'https://pubmed.ncbi.nlm.nih.gov/25315924/';
const HARTLING = 'https://pubmed.ncbi.nlm.nih.gov/20598075/';
const SIBSHOP = 'https://siblingsupport.org/sibshops/';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';

module.exports = {
  slug: 'sibling-anak-berkebutuhan-khusus',
  date: '2026-10-04',
  category: 'Parenting',
  keyword: 'sibling anak berkebutuhan khusus',
  titleTag: 'Sibling Anak Berkebutuhan Khusus: Cara Mendampingi',
  metaDesc: 'Sibling anak berkebutuhan khusus juga butuh perhatian. Pahami perasaan saudara kandung ABK, temuan riset, dan cara orang tua mendampingi di rumah.',
  ogTitle: 'Sibling Anak Berkebutuhan Khusus: Perasaan, Temuan Riset, dan Cara Orang Tua Mendampingi',
  ogDesc: 'Panduan untuk orang tua yang membesarkan anak berkebutuhan khusus bersama kakak atau adiknya: apa kata riset, cara menjelaskan sesuai usia, waktu khusus, batas tanggung jawab, dan kapan mencari bantuan.',
  h1: 'Sibling Anak Berkebutuhan Khusus: Memahami Perasaan Saudara Kandung dan Cara Orang Tua Mendampinginya',
  crumb: 'Sibling Anak Berkebutuhan Khusus',
  parent: { name: 'Dukungan Keluarga Anak ABK', href: 'dukungan-keluarga-anak-abk' },
  about: ['Saudara kandung anak berkebutuhan khusus', 'Sibling', 'Dukungan keluarga', 'Sibshop', 'Pengasuhan anak berkebutuhan khusus'],
  keywords: 'sibling anak berkebutuhan khusus, saudara kandung ABK, kakak anak autis, adik anak berkebutuhan khusus, sibshop, dukungan sibling, keluarga ABK',
  readTime: '11 menit baca',
  image: {
    file: 'Dokumentasi/artikel/sibling-anak-berkebutuhan-khusus-kunjungan-candi.webp',
    w: 936, h: 870,
    alt: 'Beberapa anak berkaus merah muda dan pendamping berfoto di gerbang batu sebuah candi, sebagian berdiri dan sebagian duduk di anak tangga',
    caption: 'Anak-anak dan pendamping YUKA saat kegiatan kunjungan ke kompleks candi. Foto ini dokumentasi kegiatan dan tidak menunjukkan hubungan keluarga atau kondisi anak tertentu.',
    credit: CREDIT,
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  figures: [
    {
      file: 'Dokumentasi/artikel/sibling-anak-berkebutuhan-khusus-diagram.svg', w: 1200, h: 640,
      alt: 'Diagram empat kebutuhan saudara kandung ABK: informasi yang jujur, waktu khusus, ruang untuk perasaan, dan teman senasib',
      caption: 'Empat kebutuhan yang paling sering muncul dalam riset dan program dukungan sibling. Diagram ini ringkasan edukasi, bukan alat ukur.',
      credit: 'Diagram: Tim YUKA.'
    },
    {
      file: 'Dokumentasi/artikel/sibling-anak-berkebutuhan-khusus-auditorium.webp', w: 1200, h: 962,
      alt: 'Anak-anak dan pendamping duduk berjajar di kursi auditorium berkarpet merah, sebagian menoleh ke arah kamera',
      caption: 'Duduk bersama di auditorium saat kunjungan museum. Kegiatan bersama seperti ini memberi kesempatan anak saling mengenal di luar rutinitas rumah.',
      credit: CREDIT
    },
    {
      file: 'Dokumentasi/artikel/sibling-anak-berkebutuhan-khusus-foto-bersama.webp', w: 934, h: 1245,
      alt: 'Rombongan anak dan pendamping berfoto bersama di anak tangga candi batu yang tinggi',
      caption: 'Foto bersama di anak tangga candi. Di keluarga, momen menyenangkan yang melibatkan semua anak sama pentingnya dengan jadwal terapi.',
      credit: CREDIT
    }
  ],
  answer: '<strong>Sibling anak berkebutuhan khusus</strong> adalah kakak atau adik kandung dari anak dengan disabilitas, autisme, atau kebutuhan khusus lain. Riset menunjukkan sebagian dari mereka lebih rentan cemas dan sedih, tetapi efeknya kecil dan sangat bergantung pada dukungan keluarga. Informasi yang jujur, waktu khusus dengan orang tua, dan ruang untuk bercerita adalah pelindung utamanya.',
  intro: `
            <p>Ketika satu anak di rumah membutuhkan terapi, sekolah khusus, atau pengawasan ekstra, perhatian keluarga wajar tercurah ke sana. Di sudut lain rumah yang sama ada kakak atau adik yang ikut menunggu di ruang tunggu klinik, ikut menahan diri saat saudaranya tantrum di tempat umum, dan sering kali diam-diam merasa "aku harus baik-baik saja supaya Ayah dan Ibu tidak tambah repot".</p>
            <p>Dalam literatur, anak-anak ini disebut <em>sibling</em>, yaitu saudara kandung dari anak berkebutuhan khusus (ABK). Panduan ini melengkapi artikel YUKA tentang <a href="dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a> dengan fokus pada satu anggota keluarga yang paling sering terlewat. Isinya: apa kata riset, perasaan yang wajar muncul, cara menjelaskan kondisi saudara sesuai usia, pembagian peran yang adil, sampai tanda kapan saudara kandung perlu bantuan profesional.</p>`,
  infoBox: 'Artikel ini adalah informasi edukasi untuk orang tua dan pendamping. Setiap keluarga berbeda. Bila kakak atau adik menunjukkan sedih, cemas, atau marah yang menetap lebih dari beberapa minggu, bicarakan dengan psikolog anak, guru BK, atau tenaga kesehatan di puskesmas.',
  sections: [
    {
      id: 'siapa', h2: 'Siapa yang Dimaksud Sibling Anak Berkebutuhan Khusus',
      toc: 'Siapa yang dimaksud sibling ABK',
      html: `
            <p>Istilah sibling berasal dari bahasa Inggris dan berarti saudara kandung. Dalam konteks pendidikan khusus, istilah ini dipakai untuk kakak atau adik yang tumbuh bersama saudara dengan autisme, ADHD, <a href="disabilitas-intelektual-adalah">disabilitas intelektual</a>, cerebral palsy, gangguan pendengaran, atau kondisi lain yang membuat keluarga perlu menyesuaikan rutinitas sehari-hari.</p>
            <p>Hubungan saudara kandung adalah salah satu hubungan terpanjang dalam hidup seseorang. Ia biasanya bertahan lebih lama daripada hubungan dengan orang tua. Itulah sebabnya cara keluarga merawat hubungan ini sejak kecil berpengaruh hingga dewasa, termasuk saat kelak saudara kandung ikut terlibat dalam <a href="person-centered-planning-disabilitas">perencanaan masa depan anak berkebutuhan khusus</a>.</p>
            <p>Posisi tiap sibling juga berbeda. Kakak yang lebih tua sering dititipi tanggung jawab lebih cepat. Adik yang lahir belakangan mungkin tidak pernah mengenal keluarga tanpa jadwal terapi. Anak kembar dari anak berkebutuhan khusus bisa terus-menerus dibandingkan. Karena itu, tidak ada satu resep yang cocok untuk semua; yang ada adalah prinsip yang bisa disesuaikan dengan usia dan watak tiap anak.</p>`
    },
    {
      id: 'riset', h2: 'Apa Kata Riset tentang Kondisi Mereka',
      toc: 'Apa kata riset',
      html: `
            <p>Pertanyaan yang paling sering diajukan orang tua adalah apakah memiliki saudara berkebutuhan khusus membuat anak lain pasti terganggu. Jawaban riset lebih seimbang daripada yang dibayangkan banyak orang.</p>
            <p>Meta-analisis oleh Shivers dan rekan (2019) menggabungkan 69 sampel independen tentang saudara kandung individu autis. Hasilnya, secara keseluruhan kelompok sibling memang menunjukkan hasil yang sedikit lebih kurang baik dibanding kelompok pembanding, dengan ukuran efek tergolong kecil. Perbedaan terlihat pada masalah internalisasi seperti gejala cemas dan sedih, tetapi tidak ada perbedaan bermakna pada penyesuaian diri secara umum, kemampuan koping, dan fungsi keluarga (${ext(SHIVERS, 'Shivers dkk., 2019')}). Artinya, risiko itu nyata tetapi bukan takdir.</p>
            <p>Kabar baiknya, dukungan yang tepat bisa membantu. Tinjauan sistematis Wolff dan rekan (2023) atas 24 studi intervensi menemukan perbaikan terbesar setelah program pada harga diri, kesejahteraan sosial, dan pengetahuan sibling tentang kondisi saudaranya, walaupun selisihnya dengan kelompok pembanding masih kecil (${ext(WOLFF, 'Wolff dkk., 2023')}).</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Kajian</th><th>Cakupan</th><th>Temuan utama</th></tr></thead>
                <tbody>
                    <tr><td>${ext(SHIVERS, 'Shivers dkk., 2019')}</td><td>Meta-analisis, 69 sampel independen saudara kandung individu autis</td><td>Efek keseluruhan kecil; lebih rentan gejala cemas dan sedih; tidak berbeda bermakna pada koping dan fungsi keluarga</td></tr>
                    <tr><td>${ext(WOLFF, 'Wolff dkk., 2023')}</td><td>Tinjauan sistematis 24 studi intervensi untuk sibling</td><td>Harga diri, kesejahteraan sosial, dan pengetahuan membaik setelah program; selisih dengan kelompok tunggu kecil</td></tr>
                    <tr><td>${ext(HARTLING, 'Hartling dkk., 2014')}</td><td>Tinjauan sistematis program untuk saudara anak dengan penyakit kronis atau disabilitas</td><td>Pada uji terkontrol yang lebih baik, kecemasan turun dan suasana hati membaik, tetapi hasil tidak konsisten antarstudi</td></tr>
                    <tr><td>${ext(TUDOR, 'Tudor dan Lerner, 2015')}</td><td>Tinjauan sistematis 16 artikel tentang dukungan sibling</td><td>Metode dan hasil sangat bervariasi, sehingga manfaat program belum bisa disimpulkan seragam</td></tr>
                </tbody>
            </table></div>
            <p>Pesan praktisnya: jangan berasumsi kakak atau adik pasti bermasalah, tetapi jangan pula menganggap mereka pasti kuat. Amati, tanyakan, dan sediakan dukungan sebelum masalah membesar.</p>`
    },
    {
      id: 'perasaan', h2: 'Perasaan yang Wajar Muncul pada Saudara ABK',
      toc: 'Perasaan yang wajar muncul',
      html: `
            <p>Banyak sibling menyimpan perasaan yang saling bertentangan. Mereka menyayangi saudaranya, bangga ketika saudaranya berhasil mengucapkan kata baru, tetapi di hari yang sama bisa kesal karena mainannya rusak atau malu ketika teman sekelas menatap saudaranya di pasar. Semua perasaan itu wajar dan bisa hadir bersamaan.</p>
            <ul>
                <li><strong>Cemburu</strong> karena waktu dan perhatian orang tua lebih banyak tersita untuk saudaranya.</li>
                <li><strong>Khawatir</strong> tentang kesehatan, keselamatan, atau masa depan saudaranya, kadang tanpa berani bertanya.</li>
                <li><strong>Malu</strong> saat saudaranya berperilaku berbeda di tempat umum, terutama di usia remaja.</li>
                <li><strong>Rasa bersalah</strong> karena merasa kesal, atau karena dirinya sendiri "tidak punya masalah".</li>
                <li><strong>Tekanan untuk sempurna</strong>, yaitu keinginan menjadi anak yang tidak merepotkan agar beban orang tua berkurang.</li>
                <li><strong>Bangga dan peduli</strong>, misalnya lebih cepat memahami teman yang berbeda dan lebih sabar.</li>
            </ul>
            <p>Sisi positif seperti empati dan kepedulian memang sering dilaporkan, dan YUKA membahas cara menumbuhkannya dalam artikel <a href="empati-pada-anak-berkebutuhan-khusus">empati pada anak berkebutuhan khusus</a>. Namun, sisi positif ini jangan dipakai untuk menutup sisi yang berat. Anak yang terus dipuji "kamu hebat, tidak pernah mengeluh" bisa belajar bahwa mengeluh itu terlarang.</p>
            {{fig:0}}`
    },
    {
      id: 'menjelaskan', h2: 'Cara Menjelaskan Kondisi Saudara Sesuai Usia',
      toc: 'Cara menjelaskan sesuai usia',
      html: `
            <p>Anak yang tidak diberi penjelasan akan mengisi kekosongan dengan imajinasinya sendiri. Ada yang mengira kondisi saudaranya menular, ada yang mengira itu salahnya karena pernah berkelahi. Penjelasan yang jujur dan sederhana mencegah salah paham seperti ini. Orang tua yang baru menerima diagnosis bisa memulainya setelah diri sendiri cukup tenang; panduan <a href="orang-tua-baru-terima-diagnosis-anak-abk">langkah awal setelah menerima diagnosis</a> bisa membantu menyusun kata-katanya.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Usia sibling</th><th>Yang biasanya bisa dipahami</th><th>Contoh kalimat</th></tr></thead>
                <tbody>
                    <tr><td>3 sampai 5 tahun</td><td>Hal konkret yang terlihat sehari-hari</td><td>"Adik belum bisa bicara seperti kamu, jadi dia menunjuk atau menarik tangan kalau mau sesuatu."</td></tr>
                    <tr><td>6 sampai 9 tahun</td><td>Sebab sederhana dan cara membantu</td><td>"Otak Kakak bekerja dengan cara berbeda. Bukan salah siapa pun dan tidak menular. Suara keras membuatnya kaget, jadi kita pelankan TV."</td></tr>
                    <tr><td>10 sampai 12 tahun</td><td>Nama kondisi, terapi, dan alasan aturan rumah</td><td>"Namanya autisme. Terapi wicara membantu Adik berkomunikasi. Kalau ada pertanyaan dari temanmu, kita bisa latihan jawabannya."</td></tr>
                    <tr><td>Remaja</td><td>Masa depan, keturunan, dan peran keluarga kelak</td><td>"Kamu boleh bertanya apa saja, termasuk soal nanti setelah kami tua. Keputusan itu kita bicarakan bersama, bukan dibebankan padamu."</td></tr>
                </tbody>
            </table></div>
            <p>Pembagian usia di atas hanya patokan kasar. Yang lebih penting adalah membuka pintu: katakan bahwa pertanyaan boleh diajukan kapan saja, dan "Ibu belum tahu, nanti kita cari tahu bersama" adalah jawaban yang sah. Bila keluarga memakai <a href="jadwal-visual-anak-autis">jadwal visual</a> untuk anak autis, ajak sibling ikut menyusunnya agar ia paham alasan di balik rutinitas rumah.</p>`
    },
    {
      id: 'waktu-khusus', h2: 'Waktu Khusus dan Pembagian Perhatian yang Adil',
      toc: 'Waktu khusus dan perhatian yang adil',
      html: `
            <p>Adil tidak selalu berarti sama rata. Anak yang membutuhkan terapi memang memerlukan lebih banyak jam. Yang dibutuhkan sibling adalah kepastian bahwa dirinya juga punya tempat khusus. Cara paling sederhana adalah waktu berdua yang rutin dan terjadwal, misalnya 20 menit setiap Sabtu pagi untuk bersepeda, memasak, atau sekadar mengobrol sebelum tidur.</p>
            <p>Beberapa prinsip yang membantu:</p>
            <ul>
                <li><strong>Terjadwal, bukan sisa waktu.</strong> Waktu khusus yang selalu batal karena urusan terapi justru menegaskan pesan bahwa sibling nomor dua.</li>
                <li><strong>Bukan hadiah atas sikap baik.</strong> Waktu berdua tetap berjalan walau minggu itu sibling sedang rewel.</li>
                <li><strong>Libatkan anggota keluarga lain.</strong> Ayah, nenek, atau om bisa bergantian menemani, sehingga beban tidak hanya di pundak ibu.</li>
                <li><strong>Rayakan pencapaian sibling sendiri.</strong> Lomba, nilai, atau hobi sibling layak mendapat sorotan yang sama.</li>
            </ul>
            <p>Waktu khusus lebih mudah dijaga bila orang tua tidak kehabisan tenaga. Karena itu, merawat diri sendiri bukan kemewahan. Artikel <a href="mengelola-stres-orang-tua-anak-abk">mengelola stres orang tua anak ABK</a>, <a href="self-care-untuk-orang-tua-anak-disabilitas">self-care untuk orang tua anak disabilitas</a>, dan pilihan <a href="respite-care-untuk-keluarga-anak-abk">respite care atau pengasuhan pengganti sementara</a> membahas cara mendapatkan jeda yang aman.</p>
            {{fig:1}}`
    },
    {
      id: 'batas', h2: 'Batas Tanggung Jawab: Membantu, Bukan Menggantikan Orang Tua',
      toc: 'Batas tanggung jawab sibling',
      html: `
            <p>Melibatkan sibling dalam pekerjaan rumah dan membantu saudaranya itu baik, selama porsinya sesuai usia. Masalah muncul ketika kakak berusia sepuluh tahun rutin menjadi pengasuh utama, harus selalu menjaga saudaranya di sekolah, atau merasa bertanggung jawab atas keselamatan seluruh keluarga.</p>
            <p>Bicarakan secara terbuka tiga hal: bantuan apa yang sifatnya sukarela, tugas apa yang memang menjadi kewajiban semua anak di rumah, dan tugas apa yang tetap menjadi tanggung jawab orang dewasa. Contohnya, membacakan buku untuk adik bisa sukarela; merapikan mainan bersama adalah tugas semua anak; sementara menenangkan krisis perilaku, memberi obat, dan mengantar terapi adalah tugas orang dewasa.</p>
            <p>Ajarkan juga apa yang harus dilakukan bila situasi terasa tidak aman, misalnya saat saudaranya mengamuk dan memukul. Sibling berhak menjauh dan memanggil orang dewasa tanpa merasa bersalah. Panduan <a href="cara-mengatasi-tantrum-anak-autis">cara mengatasi tantrum anak autis</a> bisa dibaca bersama remaja agar ia paham bedanya membantu dan mengambil alih.</p>
            <p>Di masa remaja, sibling sering mulai memikirkan masa depan: siapa yang kelak mendampingi saudaranya. Pertanyaan ini sehat. Jawablah dengan rencana keluarga yang nyata, bukan janji yang dibebankan sepihak. Keterlibatan sibling dalam perencanaan masa depan sebaiknya berupa pilihan yang dibicarakan, bukan kewajiban yang diwariskan.</p>`
    },
    {
      id: 'sibshop', h2: 'Kelompok Dukungan Sibling dan Sibshop',
      toc: 'Kelompok dukungan sibling dan Sibshop',
      html: `
            <p>Salah satu kebutuhan yang paling jarang terpenuhi adalah bertemu teman senasib. Di sekolah, sibling mungkin satu-satunya anak yang punya saudara berkebutuhan khusus, sehingga sulit menemukan teman yang benar-benar paham.</p>
            <p>Model yang paling dikenal adalah ${ext(SIBSHOP, 'Sibshops')} dari Sibling Support Project di Amerika Serikat: pertemuan untuk saudara kandung yang memadukan permainan, diskusi santai antarsesama sibling, dan informasi tentang disabilitas. Tujuannya bukan "memperbaiki" perasaan sibling, melainkan memberi ruang tempat mereka diakui sebagai anak dengan kebutuhannya sendiri.</p>
            <p>Di Indonesia, program serupa belum banyak tersedia secara formal. Namun, prinsipnya bisa diterapkan dalam skala kecil:</p>
            <ul>
                <li>Komunitas orang tua atau sekolah inklusi mengadakan sesi bermain khusus untuk kakak dan adik siswa, terpisah dari kegiatan terapi.</li>
                <li>Fasilitator orang dewasa menjaga suasana aman dan kerahasiaan cerita anak.</li>
                <li>Kelompok disusun berdasarkan rentang usia yang dekat agar obrolan nyambung.</li>
                <li>Orang tua tidak ikut di dalam ruangan, sehingga anak lebih leluasa bercerita.</li>
            </ul>
            <p>Hasil riset atas program semacam ini menjanjikan tetapi belum seragam (${ext(TUDOR, 'Tudor dan Lerner, 2015')}), jadi anggap sebagai pelengkap, bukan pengganti bantuan profesional bila memang dibutuhkan. Kegiatan kebersamaan yang inklusif juga sejalan dengan semangat <a href="inklusi-sosial">inklusi sosial</a>: semua anak di keluarga berhak ikut serta.</p>
            {{fig:2}}`
    },
    {
      id: 'sekolah-umum', h2: 'Saat di Sekolah dan di Tempat Umum',
      toc: 'Di sekolah dan tempat umum',
      html: `
            <p>Sibling kerap berada di garis depan ketika lingkungan bereaksi terhadap saudaranya: tatapan di pusat perbelanjaan, pertanyaan teman sekelas, atau ejekan. Persiapan sederhana membuat mereka tidak merasa sendirian.</p>
            <p>Sebelum bepergian, ceritakan apa yang mungkin terjadi dan siapa orang dewasa yang bertanggung jawab. Beri sibling izin untuk tidak menjelaskan apa pun kepada orang asing, untuk menjauh sejenak, dan untuk meminta bantuan. Latih bersama kalimat pendek yang nyaman bagi dia, misalnya "Adikku autis, dia sedang kewalahan dengan suara ramai."</p>
            <p>Di sekolah, kabari wali kelas bila sibling sedang menghadapi masa sulit di rumah, misalnya saat saudaranya baru didiagnosis atau dirawat di rumah sakit. Guru yang tahu konteks bisa lebih peka ketika nilai turun atau anak tampak murung. Jika sibling bersekolah di sekolah yang sama dengan saudaranya, pastikan ia tidak otomatis dijadikan "penjaga" saudaranya; tugas pendampingan ada pada guru dan <a href="shadow-teacher-adalah">shadow teacher</a>.</p>
            <p>Bila sibling menjadi sasaran ejekan karena saudaranya, tangani seperti perundungan lain: dengarkan, catat kejadiannya, dan bicarakan dengan sekolah. Peran orang tua dalam membangun budaya sekolah yang ramah disabilitas dibahas di artikel <a href="peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.</p>`
    },
    {
      id: 'tanda', h2: 'Tanda Saudara Kandung Perlu Bantuan Profesional',
      toc: 'Tanda perlu bantuan profesional',
      html: `
            <p>Sebagian besar perasaan sibling akan mereda dengan dukungan keluarga. Namun, ada tanda yang menunjukkan anak membutuhkan bantuan lebih, terutama bila berlangsung beberapa minggu atau makin berat. Gambaran tanda gangguan emosi pada anak usia sekolah juga dibahas di artikel <a href="gangguan-emosional-pada-anak-sekolah">gangguan emosional pada anak sekolah</a>.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Yang terlihat</th><th>Contoh</th><th>Langkah yang disarankan</th></tr></thead>
                <tbody>
                    <tr><td>Perubahan pola harian</td><td>Sulit tidur, nafsu makan berubah, sering mengeluh sakit perut atau kepala tanpa sebab jelas</td><td>Catat polanya, periksakan ke puskesmas atau dokter anak</td></tr>
                    <tr><td>Menarik diri</td><td>Berhenti bermain dengan teman, enggan ke sekolah, nilai turun tajam</td><td>Ajak bicara empat mata, hubungi wali kelas atau guru BK</td></tr>
                    <tr><td>Emosi yang menetap</td><td>Marah, cemas, atau sedih hampir setiap hari; merasa harus menjaga keluarga sendirian</td><td>Konsultasi ke psikolog anak</td></tr>
                    <tr><td>Takut berada di rumah</td><td>Takut ditinggal berdua dengan saudaranya karena pernah terluka</td><td>Tinjau ulang rencana keamanan rumah bersama tenaga profesional</td></tr>
                    <tr><td>Pikiran menyakiti diri</td><td>Mengucapkan ingin menghilang atau menyakiti diri</td><td>Segera cari pertolongan tenaga kesehatan jiwa atau layanan darurat</td></tr>
                </tbody>
            </table></div>
            <p>Mencari bantuan untuk sibling bukan tanda keluarga gagal. Justru itu bentuk perhatian yang setara: satu anak mendapat terapi sesuai kebutuhannya, anak lain pun mendapat dukungan sesuai kebutuhannya.</p>`
    },
    {
      id: 'rencana', h2: 'Rencana Mingguan Sederhana untuk Keluarga',
      toc: 'Rencana mingguan sederhana',
      html: `
            <p>Teori akan lebih mudah dijalankan bila dipecah menjadi kebiasaan kecil. Berikut contoh rencana yang bisa disesuaikan dengan jadwal keluarga:</p>
            <ol>
                <li><strong>Satu waktu khusus terjadwal</strong> untuk setiap sibling, ditulis di kalender keluarga yang terlihat semua orang.</li>
                <li><strong>Satu obrolan perasaan</strong> menjelang tidur dengan pertanyaan terbuka, misalnya "Apa bagian paling menyebalkan minggu ini?" Dengarkan tanpa buru-buru menasihati.</li>
                <li><strong>Satu kegiatan bersama semua anak</strong> yang disukai semua pihak, seperti memasak sederhana atau bermain bola di halaman. Ide kegiatan yang melatih interaksi ada di artikel <a href="cara-melatih-social-skills-anak-autis-di-rumah">cara melatih social skills anak autis di rumah</a>.</li>
                <li><strong>Satu evaluasi pembagian tugas</strong> antara ayah dan ibu, supaya beban tidak bergeser diam-diam ke sibling. Kekompakan pasangan juga berpengaruh, seperti dibahas di <a href="hubungan-suami-istri-dengan-anak-abk-tips">tips hubungan suami istri dengan anak ABK</a>.</li>
            </ol>
            <p>Mulailah dari satu kebiasaan saja. Konsistensi kecil lebih bermakna daripada rencana besar yang berhenti di minggu kedua.</p>`
    }
  ],
  storyHighlight: 'Di Sekolah Inklusi Taruna Imani, kegiatan di luar kelas seperti kunjungan museum dan candi terbuka untuk dinikmati bersama. Orang tua yang ingin berdiskusi tentang cara mendampingi kakak atau adik siswa di rumah dapat menghubungi tim YUKA lewat WhatsApp untuk berbagi pengalaman dengan pendamping kami.',
  faq: [
    { q: 'Apa yang dimaksud sibling anak berkebutuhan khusus?', a: 'Sibling anak berkebutuhan khusus adalah kakak atau adik kandung dari anak dengan disabilitas, autisme, ADHD, atau kebutuhan khusus lain. Mereka tumbuh di keluarga yang rutinitasnya ikut menyesuaikan kebutuhan saudaranya, sehingga juga membutuhkan perhatian dan dukungan tersendiri.' },
    { q: 'Apakah saudara kandung anak autis pasti mengalami masalah emosi?', a: 'Tidak pasti. Meta-analisis Shivers dan rekan (2019) atas 69 sampel menemukan risiko gejala cemas dan sedih yang sedikit lebih tinggi dengan ukuran efek kecil, tetapi tidak ada perbedaan bermakna dalam koping dan fungsi keluarga. Dukungan keluarga sangat menentukan.' },
    { q: 'Bagaimana cara menjelaskan kondisi adik berkebutuhan khusus kepada kakaknya?', a: 'Gunakan bahasa sederhana sesuai usia, tekankan bahwa kondisi itu bukan salah siapa pun dan tidak menular, lalu jelaskan cara membantu sehari-hari. Untuk anak yang lebih besar, sebutkan nama kondisinya dan jenis terapinya, serta buka kesempatan bertanya kapan saja.' },
    { q: 'Apakah wajar kalau kakak merasa cemburu atau malu pada adiknya yang ABK?', a: 'Wajar. Cemburu, malu, kesal, khawatir, sekaligus sayang dan bangga bisa hadir bersamaan. Yang penting orang tua menerima perasaan itu tanpa menghakimi, lalu membantu anak mencari cara sehat untuk menyalurkannya.' },
    { q: 'Berapa lama waktu khusus yang dibutuhkan sibling?', a: 'Tidak ada angka baku. Yang lebih penting adalah rutin dan terjadwal, misalnya 15 sampai 30 menit setiap minggu, dan tidak dibatalkan atau dijadikan hadiah atas sikap baik. Anggota keluarga lain bisa bergantian menemani.' },
    { q: 'Apakah boleh meminta kakak menjaga adiknya yang berkebutuhan khusus?', a: 'Boleh untuk bantuan ringan yang sesuai usia, seperti bermain bersama atau membacakan buku. Tugas berat seperti menenangkan krisis perilaku, memberi obat, atau menjadi pengasuh utama tetap menjadi tanggung jawab orang dewasa.' },
    { q: 'Apa itu Sibshop?', a: 'Sibshop adalah model kelompok dukungan dari Sibling Support Project untuk saudara kandung anak berkebutuhan khusus. Kegiatannya memadukan permainan, diskusi antarsesama sibling, dan informasi tentang disabilitas, dengan tujuan memberi ruang bagi sibling untuk diakui kebutuhannya.' },
    { q: 'Kapan sibling perlu dibawa ke psikolog?', a: 'Bila sedih, cemas, atau marah berlangsung hampir setiap hari selama beberapa minggu, anak menarik diri, enggan sekolah, takut berada di rumah, atau mengucapkan ingin menyakiti diri. Untuk tanda terakhir, segera cari pertolongan tenaga kesehatan jiwa.' }
  ],
  relatedIntro: 'Lanjutkan membaca panduan keluarga lain dari YUKA:',
  related: [
    { href: 'dukungan-keluarga-anak-abk', title: 'Dukungan Keluarga Anak ABK', desc: 'Peran setiap anggota rumah dalam mendampingi anak berkebutuhan khusus.' },
    { href: 'mengelola-stres-orang-tua-anak-abk', title: 'Mengelola Stres Orang Tua Anak ABK', desc: 'Cara praktis menjaga kesehatan mental orang tua.' },
    { href: 'respite-care-untuk-keluarga-anak-abk', title: 'Respite Care untuk Keluarga Anak ABK', desc: 'Jenis pengasuhan pengganti sementara dan cara memilihnya.' },
    { href: 'empati-pada-anak-berkebutuhan-khusus', title: 'Empati pada Anak Berkebutuhan Khusus', desc: 'Menumbuhkan empati di rumah dan sekolah.' }
  ],
  tags: ['Sibling', 'SaudaraKandung', 'KeluargaABK', 'Pengasuhan', 'YUKA'],
  sources: [
    { url: SHIVERS, label: 'Shivers CM, Jackson JB, McGregor CM. Functioning Among Typically Developing Siblings of Individuals with Autism Spectrum Disorder: A Meta-Analysis. Clin Child Fam Psychol Rev, 2019' },
    { url: WOLFF, label: 'Wolff B dkk. Psychosocial Interventions and Support Groups for Siblings of Individuals with Neurodevelopmental Conditions: A Mixed Methods Systematic Review. Clin Child Fam Psychol Rev, 2023' },
    { url: HARTLING, label: 'Hartling L dkk. A systematic review of interventions to support siblings of children with chronic illness or disability. J Paediatr Child Health, 2014' },
    { url: TUDOR, label: 'Tudor ME, Lerner MD. Intervention and support for siblings of youth with developmental disabilities: a systematic review. Clin Child Fam Psychol Rev, 2015' },
    { url: SIBSHOP, label: 'Sibling Support Project. Sibshops' }
  ]
};

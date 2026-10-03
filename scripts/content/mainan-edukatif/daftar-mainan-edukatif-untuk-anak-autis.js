'use strict';
// Isi artikel /artikel/daftar-mainan-edukatif-untuk-anak-autis (kartu Trello 1QyMaIft, catchup 2026-10-04).
// Menggantikan versi 2026-10-03 04:23 WIB (commit a8a7b3e dan 3d2399d) yang judulnya topik mainan edukatif tetapi
// badannya salinan artikel sensory-toys-terbaik-untuk-anak-autis (konten duplikat, kartu induk P0 gswe5XFa pasangan #8).
// Sudut artikel: daftar mainan dikelompokkan menurut tujuan perkembangan (komunikasi dan bahasa, motorik halus,
// sosial dan bermain bergiliran, kognitif), cara memilih yang aman sesuai usia perkembangan, dan peran terapis.
// Mainan sensorik (taktil, gerak, visual, regulasi) sengaja TIDAK dibahas ulang; itu wilayah artikel sensory toys.
// Fakta dicek ke sumber aslinya pada 4 Oktober 2026: HealthyChildren.org (AAP) Toy Buying Tips for Children with
// Special Needs; abstrak PubMed laporan klinis AAP Healey & Mendelsohn 2019 (30509931) dan Yogman dkk. 2018 (30126932);
// CDC Treatment and Intervention for Autism Spectrum Disorder; IDAI "Pemilihan Mainan Anak sesuai Fase Perkembangan"
// (27 April 2017, Dr. Bernie Endyarni Medise, Sp.A(K), MPH); blog Autism Speaks "Ten toys and games for autistic
// toddlers and children" (hanya prinsip permainan paralel, merek tidak dikutip).

const AAP_SN = 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Toy-Buying-Tips-for-Children-with-Special-Needs.aspx';
const AAP_TOYS = 'https://pubmed.ncbi.nlm.nih.gov/30509931/';
const AAP_PLAY = 'https://pubmed.ncbi.nlm.nih.gov/30126932/';
const CDC_TX = 'https://www.cdc.gov/autism/treatment/index.html';
const IDAI = 'https://www.idai.or.id/artikel/klinik/pengasuhan-anak/cerdas-memilih-mainan-anak';
const AS_TOYS = 'https://www.autismspeaks.org/blog/ten-toys-and-games-autistic-toddlers-and-children';

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  slug: 'daftar-mainan-edukatif-untuk-anak-autis',
  keyword: 'daftar mainan edukatif untuk anak autis',
  titleTag: 'Daftar Mainan Edukatif untuk Anak Autis per Tujuan Belajar',
  metaDesc: 'Daftar mainan edukatif untuk anak autis menurut tujuan: bahasa, motorik halus, bermain bergiliran, dan kognitif. Plus cara memilih yang aman. Baca dulu.',
  ogTitle: 'Daftar Mainan Edukatif untuk Anak Autis: Dikelompokkan Menurut Tujuan Perkembangan',
  ogDesc: 'Mainan untuk komunikasi, motorik halus, bermain bergiliran, dan kognitif, cara memilih sesuai usia perkembangan menurut AAP dan IDAI, serta peran terapis wicara dan okupasi.',
  h1: 'Daftar Mainan Edukatif untuk Anak Autis: Dipilih Menurut Tujuan, Bukan Tren',
  crumb: 'Daftar Mainan Edukatif untuk Anak Autis',
  parent: { name: 'Autisme pada Anak', href: 'autisme-adalah' },
  about: ['Gangguan spektrum autisme', 'Mainan edukatif', 'Bermain dan perkembangan anak', 'Stimulasi komunikasi'],
  keywords: 'daftar mainan edukatif untuk anak autis, mainan edukatif anak autis, mainan untuk anak autis, mainan melatih bicara anak autis, mainan motorik halus, permainan bergiliran anak autis, mainan kognitif anak, memilih mainan anak berkebutuhan khusus',
  readTime: '12 menit baca',
  image: {
    file: 'Dokumentasi/cocopandan-lemon-ibu-anak-belajar-membuat-kerajinan-004.webp',
    w: 936, h: 1248,
    alt: 'Seorang anak berseragam putih memeras buah jeruk kuning ke gelas takar dibantu orang dewasa berhijab merah muda, sementara anak lain duduk memperhatikan di lantai teras kayu',
    caption: 'Seorang siswa memeras buah jeruk ke gelas takar bersama pendamping dalam kegiatan belajar di teras. Foto ini dokumentasi kegiatan YUKA, bukan sesi terapi dan bukan gambaran anak dengan diagnosis tertentu.',
    credit: 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).',
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  answer: '<strong>Daftar mainan edukatif untuk anak autis</strong> paling berguna bila disusun menurut tujuan: buku bergambar dan mainan pura-pura untuk bahasa, puzzle dan balok untuk motorik halus, bola dan permainan papan sederhana untuk bergiliran, serta mainan sortir untuk kognitif. American Academy of Pediatrics menyarankan memilih sesuai usia perkembangan dan mainan yang dimainkan bersama orang tua.',
  intro: `
            <p>Banyak daftar mainan untuk anak autis berisi deretan produk tanpa penjelasan untuk apa mainan itu dipakai. Akibatnya, orang tua membeli banyak barang, lalu bingung karena anak hanya memutar roda mobil atau menjajarkan balok. Artikel ini mengambil arah sebaliknya: mulai dari <strong>keterampilan yang ingin dilatih</strong>, baru memilih mainannya.</p>
            <p>Kami membaginya menjadi empat kelompok tujuan, yaitu komunikasi dan bahasa, motorik halus, sosial dan bermain bergiliran, serta kognitif. Mainan yang terutama dipakai untuk kebutuhan sensorik dan menenangkan diri, seperti benda bertekstur, alat ayun, atau lampu lembut, sudah kami bahas terpisah di panduan <a href="sensory-toys-terbaik-untuk-anak-autis">sensory toys untuk anak autis</a>, jadi tidak diulang di sini. Bila Anda baru mengenal autisme, mulailah dari penjelasan dasar di artikel <a href="autisme-adalah">autisme adalah</a>.</p>`,
  infoBox: 'YUKA adalah lembaga pendidikan, bukan fasilitas kesehatan. Daftar ini berisi jenis mainan, bukan merek, dan tidak menggantikan rencana dari terapis wicara, terapis okupasi, atau dokter anak yang mengenal anak Anda secara langsung. Mainan apa pun tetap perlu disesuaikan dengan kemampuan dan keamanan masing-masing anak.',
  sections: [
    {
      id: 'prinsip',
      h2: 'Prinsip Dasar: Mainan Terbaik Adalah yang Dimainkan Bersama',
      toc: 'Prinsip dasar memilih mainan edukatif',
      html: `
            <p>Laporan klinis American Academy of Pediatrics (AAP) tentang ${ext(AAP_TOYS, 'pemilihan mainan untuk anak kecil di era digital (Healey dan Mendelsohn, 2019)')} menekankan bahwa nilai sebuah mainan banyak ditentukan oleh interaksi yang terjadi di sekitarnya: percakapan, permainan pura-pura, pemecahan masalah, dan kreativitas antara anak dan pengasuhnya. Laporan AAP lain, ${ext(AAP_PLAY, 'The Power of Play (Yogman dkk., 2018)')}, menyebut bermain sesuai tahap perkembangan bersama orang tua dan teman sebagai kesempatan khas untuk membangun kemampuan sosial-emosional, kognitif, bahasa, dan pengendalian diri.</p>
            <p>Untuk anak berkebutuhan khusus, halaman AAP di HealthyChildren.org mengutip dr. Alan Mendelsohn: orang tua sebaiknya memilih ${ext(AAP_SN, 'mainan yang bisa dimainkan bersama anak')}, dan tujuannya adalah waktu hangat bersama, bukan mencari mainan yang dengan sendirinya mempercepat perkembangan. Halaman yang sama menyatakan mainan mahal dan elektronik tidak diperlukan. Sendok kayu, balok, puzzle, dan krayon sudah cukup bila orang tua ikut membaca, mengamati, bermain, berbicara, dan mendengarkan.</p>
            <p>Dari dua prinsip itu, kami memakai tiga pertanyaan sebelum memasukkan mainan ke daftar:</p>
            <ul>
                <li><strong>Keterampilan apa yang dilatih?</strong> Satu tujuan utama per mainan lebih mudah diamati daripada lima tujuan sekaligus.</li>
                <li><strong>Apakah mainan ini mengundang orang lain ikut?</strong> Mainan yang bisa dimainkan sendirian sepanjang waktu jarang melatih komunikasi.</li>
                <li><strong>Apakah anak sudah siap secara perkembangan?</strong> Mainan yang terlalu sulit memancing frustrasi, yang terlalu mudah cepat ditinggalkan.</li>
            </ul>`
    },
    {
      id: 'komunikasi',
      h2: 'Mainan untuk Komunikasi dan Bahasa',
      toc: 'Mainan untuk komunikasi dan bahasa',
      html: `
            <p>Tujuan kelompok ini bukan membuat anak menghafal kata, melainkan memberi alasan untuk berkomunikasi: meminta, menolak, berkomentar, dan berbagi perhatian. Kemampuan berbagi fokus pada benda yang sama dengan orang lain ini dibahas lebih dalam di artikel <a href="joint-attention-anak-autis-kenapa-penting">joint attention pada anak autis</a>.</p>
            <ol>
                <li><strong>Buku bergambar dengan gambar jelas dan kalimat pendek.</strong> AAP menyebut ${ext(AAP_SN, 'buku juga mainan')} dan menganjurkan orang tua membaca bersama anak setiap hari. Tunjuk gambar, beri nama, lalu jeda sebentar agar anak punya kesempatan menunjuk atau bersuara.</li>
                <li><strong>Mainan pura-pura sehari-hari</strong> seperti telepon mainan, boneka, peralatan masak plastik, dan mobil-mobilan. IDAI mencantumkan ${ext(IDAI, 'telepon, boneka, dan binatang plastik')} sebagai permainan pura-pura untuk usia 1 sampai 2 tahun. Gunakan untuk memodelkan kata kerja sederhana: makan, minum, tidur, jalan.</li>
                <li><strong>Mainan yang butuh bantuan orang dewasa</strong>, misalnya wadah bening bertutup berisi mainan kesukaan atau mainan putar yang harus diputar ulang. Anak perlu meminta, dengan kata, gestur, atau gambar, untuk melanjutkan permainan. Inilah momen komunikasi yang alami.</li>
                <li><strong>Kartu bergambar dan papan pilihan.</strong> Dua sampai tiga gambar pilihan membantu anak yang belum lancar bicara menyampaikan keinginan. Untuk anak yang membutuhkan alat bantu komunikasi lebih lengkap, lihat panduan <a href="aplikasi-komunikasi-aac-terbaik-untuk-anak">aplikasi komunikasi AAC untuk anak</a>.</li>
                <li><strong>Lagu dengan gerakan dan alat musik sederhana</strong> seperti marakas atau rebana kecil. Berhenti di tengah lagu dan tunggu anak memberi tanda "lagi".</li>
            </ol>
            <p>Cara memakai yang membuat perbedaan: posisikan wajah sejajar dengan anak, ikuti benda yang sedang ia minati, beri satu sampai dua kata di atas kemampuan bicaranya saat ini, lalu tunggu. Strategi berbasis interaksi seperti ini juga dipakai dalam pendekatan <a href="hanen-approach-terapi-bahasa-anak">Hanen untuk terapi bahasa anak</a>.</p>`
    },
    {
      id: 'motorik-halus',
      h2: 'Mainan untuk Motorik Halus dan Koordinasi Tangan',
      toc: 'Mainan untuk motorik halus',
      html: `
            <p>Motorik halus adalah kemampuan otot kecil jari dan tangan yang nanti dipakai untuk memegang sendok, mengancingkan baju, dan menulis. Mainan di kelompok ini melatih genggaman, kekuatan jari, dan kerja sama dua tangan.</p>
            <ol>
                <li><strong>Puzzle kayu berpegangan (knob puzzle)</strong> untuk awal, lalu puzzle potongan besar dengan jumlah keping yang bertambah perlahan.</li>
                <li><strong>Papan pasak (peg board) dan balok susun.</strong> IDAI menyebut ${ext(IDAI, 'puzzle dan peg board')} untuk usia 1 sampai 2 tahun, serta puzzle dan lego untuk usia 2 tahun.</li>
                <li><strong>Meronce manik berukuran besar</strong> dengan tali berujung kaku. Pilih manik yang tidak muat masuk mulut bila anak masih suka memasukkan benda ke mulut.</li>
                <li><strong>Krayon tebal, kertas besar, dan cetakan adonan.</strong> Menggambar bebas, mencetak, menggulung, dan memotong adonan dengan pisau plastik melatih kontrol jari.</li>
                <li><strong>Penjepit dan pinset besar</strong> untuk memindahkan pompom atau balok kecil ke wadah. Cocok sebagai latihan sebelum memegang pensil.</li>
            </ol>
            <p>Mulai dari tugas yang hampir pasti berhasil, lalu naikkan kesulitannya sedikit demi sedikit. Ide kegiatan berjenjang ada di artikel <a href="permainan-motorik-halus">permainan motorik halus</a>, dan bila anak tampak kesulitan memegang benda kecil dibanding teman sebaya, tanyakan ke terapis okupasi.</p>`
    },
    {
      id: 'sosial',
      h2: 'Mainan untuk Keterampilan Sosial dan Bermain Bergiliran',
      toc: 'Mainan untuk sosial dan bergiliran',
      html: `
            <p>Bermain bergiliran menuntut banyak kemampuan sekaligus: menunggu, memperhatikan orang lain, menerima kalah, dan mengikuti aturan. Karena itu urutannya perlu bertahap.</p>
            <ol>
                <li><strong>Bola besar yang digelindingkan bolak-balik.</strong> Bentuk giliran paling sederhana: "giliranmu, giliranku" dengan satu benda yang jelas berpindah tangan.</li>
                <li><strong>Permainan berdampingan sebelum permainan berhadapan.</strong> Blog Autism Speaks mencatat bahwa permainan dengan ${ext(AS_TOYS, 'bermain paralel, bukan bergiliran ketat')}, bisa menjadi pengalaman permainan pertama yang lebih sedikit memicu frustrasi. Contohnya menyusun menara masing-masing di meja yang sama.</li>
                <li><strong>Permainan papan sederhana</strong> seperti ular tangga, halma, atau kartu. IDAI menyebut ${ext(IDAI, 'permainan papan ini')} sebagai sarana bermain dengan aturan dan giliran untuk usia 3 sampai 6 tahun, usia ketika anak mulai bisa bermain bergiliran.</li>
                <li><strong>Permainan tradisional</strong> seperti congklak, engklek, atau ular naga untuk anak usia sekolah, yang juga dicantumkan IDAI. Permainan ini mudah dimainkan di rumah dan sekolah tanpa biaya besar.</li>
                <li><strong>Set bermain peran</strong> seperti warung-warungan atau dokter-dokteran untuk melatih percakapan pendek dengan saudara atau teman.</li>
            </ol>
            <p>Gunakan penanda giliran yang terlihat, misalnya topi atau kartu bertuliskan nama, dan buat putaran pertama sangat singkat. Langkah lanjutannya ada di panduan <a href="cara-melatih-social-skills-anak-autis-di-rumah">melatih social skills anak autis di rumah</a>.</p>`
    },
    {
      id: 'kognitif',
      h2: 'Mainan untuk Kemampuan Kognitif dan Pemecahan Masalah',
      toc: 'Mainan untuk kognitif',
      html: `
            <p>Kelompok ini melatih mengelompokkan, mencocokkan, mengurutkan, dan mencoba cara lain ketika cara pertama gagal.</p>
            <ol>
                <li><strong>Kotak sortir bentuk dan wadah warna.</strong> Mulai dari dua bentuk atau dua warna, tambah bila anak sudah konsisten.</li>
                <li><strong>Kartu memori dan kartu pasangan</strong> (gambar dengan gambar, lalu gambar dengan benda nyata).</li>
                <li><strong>Kartu urutan cerita</strong> tiga langkah, misalnya cuci tangan, makan, minum. Ini juga menyiapkan anak memahami <a href="jadwal-visual-anak-autis">jadwal visual</a>.</li>
                <li><strong>Set konstruksi</strong> seperti balok bangunan atau lego berukuran besar. Mintalah anak meniru contoh bangunan sederhana, lalu biarkan ia membuat versinya sendiri.</li>
                <li><strong>Mainan yang memakai minat khusus anak.</strong> Bila anak sangat menyukai kereta, angka, atau hewan, jadikan minat itu bahan berhitung, mencocokkan, dan bercerita, bukan sesuatu yang harus dihilangkan.</li>
            </ol>
            <p>Bila Anda tertarik pada mainan bergaya Montessori yang juga banyak dipakai untuk tujuan ini, ulasannya ada di artikel <a href="mainan-montessori">mainan Montessori</a>.</p>`
    },
    {
      id: 'tabel',
      h2: 'Ringkasan Daftar per Tujuan',
      toc: 'Tabel ringkasan daftar mainan',
      html: `
            <p>Tabel ini merangkum daftar di atas. Kolom "tanda siap" membantu menentukan kapan mainan berikutnya bisa dikenalkan.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table" style="margin:0;min-width:560px;">
                <thead><tr><th>Tujuan</th><th>Contoh mainan</th><th>Tanda anak siap naik tingkat</th></tr></thead>
                <tbody>
                    <tr><td>Komunikasi dan bahasa</td><td>Buku bergambar, mainan pura-pura, wadah bertutup, kartu pilihan</td><td>Anak mulai meminta dengan cara apa pun (menunjuk, menarik tangan, bersuara) secara konsisten</td></tr>
                    <tr><td>Motorik halus</td><td>Puzzle berpegangan, papan pasak, manik besar, krayon tebal, penjepit</td><td>Anak menyelesaikan tugas tanpa bantuan tangan orang dewasa beberapa kali berturut-turut</td></tr>
                    <tr><td>Sosial dan bergiliran</td><td>Bola gelinding, permainan berdampingan, ular tangga, congklak, set bermain peran</td><td>Anak bertahan menunggu satu giliran tanpa meninggalkan permainan</td></tr>
                    <tr><td>Kognitif</td><td>Kotak sortir, kartu memori, kartu urutan, set konstruksi</td><td>Anak mencoba cara kedua sendiri ketika cara pertama gagal</td></tr>
                </tbody>
            </table></div>`
    },
    {
      id: 'aman',
      h2: 'Cara Memilih Mainan yang Aman Sesuai Usia Perkembangan',
      toc: 'Cara memilih yang aman',
      html: `
            <p>AAP memberi beberapa pegangan khusus untuk anak berkebutuhan khusus di halaman ${ext(AAP_SN, 'Toy Buying Tips for Children with Special Needs')}:</p>
            <ul>
                <li><strong>Pilih sesuai usia perkembangan, bukan usia kalender.</strong> AAP mengutip studi tahun 2016 bahwa anak berkebutuhan khusus punya risiko cedera tersendiri bila perkembangan fisik atau perilakunya tidak cocok dengan label usia di kemasan. Anak 6 tahun yang masih sering memasukkan benda ke mulut perlu diperlakukan seperti anak yang lebih kecil dalam urusan mainan.</li>
                <li><strong>Waspadai bahaya tersedak.</strong> Bila anak bertubuh kecil untuk usianya atau punya gangguan menelan, hindari mainan dengan bagian kecil, bola kecil, kelereng, dan balon.</li>
                <li><strong>Sesuaikan mainan dengan anak.</strong> Menambahkan busa, perekat Velcro, atau tombol yang lebih besar bisa membantu anak dengan hambatan motorik atau penglihatan ikut bermain.</li>
                <li><strong>Batasi "mainan" berlayar.</strong> Menurut AAP, anak dan orang dewasa lebih sedikit berbicara saat bermain dengan mainan elektronik, sedangkan mainan tradisional lebih mendorong permainan pura-pura yang aktif dan kreatif. Panduan rinci ada di artikel <a href="screen-time-untuk-anak-autis-batasan">batasan screen time untuk anak autis</a>.</li>
            </ul>
            <p>Tambahan praktis dari pengalaman pendampingan: periksa kembali mainan bekas atau mainan lama secara berkala, karena jahitan yang lepas atau keping yang patah bisa menjadi bagian kecil baru. Simpan mainan dalam wadah tertutup dan keluarkan dua sampai tiga pilihan saja dalam satu waktu, supaya anak tidak kewalahan dan orang dewasa lebih mudah mengawasi.</p>`
    },
    {
      id: 'terapis',
      h2: 'Peran Terapis dalam Memilih dan Memakai Mainan',
      toc: 'Peran terapis',
      html: `
            <p>AAP secara khusus menyarankan orang tua ${ext(AAP_SN, 'meminta ide dari terapis anak')}: terapis wicara, okupasi, atau fisik dapat menyarankan mainan, kegiatan, dan cara berinteraksi yang membantu anak menguasai keterampilan bermain baru di rumah.</p>
            <p>Halaman CDC tentang ${ext(CDC_TX, 'penanganan gangguan spektrum autisme')} menjelaskan pembagian perannya. Terapi wicara membantu pemahaman dan penggunaan bahasa, termasuk komunikasi lewat isyarat, gambar, atau perangkat elektronik. Terapi okupasi mengajarkan keterampilan untuk hidup semandiri mungkin. Fisioterapi membantu keterampilan fisik, dari gerakan halus jari sampai gerakan tubuh yang lebih besar. CDC juga menyebut dua pendekatan yang memakai bermain sebagai sarana utama: Early Start Denver Model untuk anak usia 12 sampai 48 bulan, dan DIR atau Floortime yang mengikuti minat anak untuk memperluas kesempatan berkomunikasi.</p>
            <p>Dalam praktik, mintalah terapis menyebutkan satu atau dua target yang sedang dilatih, lalu tanyakan mainan apa di rumah yang bisa dipakai untuk target itu. Dengan begitu daftar mainan Anda mengikuti rencana terapi, bukan sebaliknya. Gambaran tiap layanan ada di artikel <a href="terapi-wicara">terapi wicara</a> dan <a href="terapi-okupasi">terapi okupasi</a>, dan bila anak masih balita dan belum mendapat layanan apa pun, baca juga tentang <a href="intervensi-dini">intervensi dini</a>.</p>`
    }
  ],
  storyHighlight: 'Di Sekolah Inklusi Taruna Imani, YUKA mendampingi anak dengan beragam kebutuhan belajar lewat kegiatan kelas yang terstruktur dan kegiatan praktik seperti memasak dan membuat kerajinan, yang melatih tangan, giliran, dan komunikasi sekaligus. Kami bukan fasilitas terapi, tetapi kami bisa berbagi pengalaman kelas dan berdiskusi dengan orang tua tentang kegiatan bermain yang bisa dilanjutkan di rumah.',
  relatedIntro: 'Lanjutkan ke panduan YUKA lain tentang bermain dan stimulasi anak autis.',
  faq: [
    {
      q: 'Apa beda mainan edukatif dengan sensory toys untuk anak autis?',
      a: 'Mainan edukatif dalam artikel ini dipilih untuk melatih keterampilan tertentu seperti bahasa, motorik halus, bergiliran, atau kognitif. Sensory toys terutama dipakai untuk kebutuhan sensorik dan menenangkan diri. Satu mainan bisa melayani keduanya, tetapi tujuan utamanya berbeda.'
    },
    {
      q: 'Mainan apa yang paling bagus untuk melatih anak autis bicara?',
      a: 'Tidak ada satu mainan yang paling bagus. Buku bergambar, mainan pura-pura, dan mainan yang membutuhkan bantuan orang dewasa paling sering memberi kesempatan meminta dan berkomentar. Yang menentukan adalah cara orang dewasa ikut bermain, memberi contoh kata, dan menunggu respons anak.'
    },
    {
      q: 'Apakah mainan mahal atau elektronik lebih baik?',
      a: 'Tidak. AAP menyatakan mainan mahal dan elektronik tidak diperlukan, dan anak serta orang dewasa cenderung lebih sedikit berbicara saat bermain dengan mainan elektronik. Balok, puzzle, krayon, dan buku sudah cukup bila dimainkan bersama.'
    },
    {
      q: 'Bagaimana jika anak hanya menjajarkan mainan dan tidak mau dimainkan bersama?',
      a: 'Mulailah dengan ikut duduk di dekatnya dan meniru caranya bermain, lalu tambahkan satu variasi kecil seperti menyerahkan balok berikutnya atau memberi nama warna. Bermain berdampingan adalah tahap awal yang wajar sebelum bermain bergiliran.'
    },
    {
      q: 'Perlukah bertanya ke terapis sebelum membeli mainan?',
      a: 'Sangat disarankan bila anak sedang menjalani terapi. AAP menganjurkan meminta ide dari terapis wicara, okupasi, atau fisik, karena mereka tahu target yang sedang dilatih dan bisa menyarankan mainan serta cara bermain yang mendukungnya.'
    }
  ],
  related: [
    { href: 'sensory-toys-terbaik-untuk-anak-autis', title: 'Sensory Toys untuk Anak Autis', desc: 'Memilih mainan berdasarkan kebutuhan sensorik anak.' },
    { href: 'mainan-montessori', title: 'Mainan Montessori', desc: 'Prinsip dan contoh mainan bergaya Montessori.' },
    { href: 'terapi-bermain', title: 'Terapi Bermain', desc: 'Bermain sebagai bagian dari layanan terapi.' },
    { href: 'cara-melatih-social-skills-anak-autis-di-rumah', title: 'Melatih Social Skills Anak Autis', desc: 'Langkah bertahap melatih interaksi di rumah.' }
  ],
  tags: ['MainanEdukatif', 'AnakAutis', 'Autisme', 'BermainBersama', 'StimulasiAnak', 'YUKA'],
  sources: [
    { url: AAP_SN, label: 'American Academy of Pediatrics (HealthyChildren.org): Toy Buying Tips for Children with Special Needs' },
    { url: AAP_TOYS, label: 'Healey A, Mendelsohn A; AAP Council on Early Childhood. Selecting Appropriate Toys for Young Children in the Digital Era. Pediatrics, 2019 (PubMed 30509931)' },
    { url: AAP_PLAY, label: 'Yogman M dkk.; AAP. The Power of Play: A Pediatric Role in Enhancing Development in Young Children. Pediatrics, 2018 (PubMed 30126932)' },
    { url: CDC_TX, label: 'CDC: Treatment and Intervention for Autism Spectrum Disorder' },
    { url: IDAI, label: 'Ikatan Dokter Anak Indonesia (IDAI): Pemilihan Mainan Anak sesuai Fase Perkembangan (Dr. Bernie Endyarni Medise, Sp.A(K), MPH, 27 April 2017)' },
    { url: AS_TOYS, label: 'Autism Speaks (blog): Ten toys and games for autistic toddlers and children' }
  ]
};

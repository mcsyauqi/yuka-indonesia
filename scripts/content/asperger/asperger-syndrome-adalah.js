'use strict';
// Isi artikel /artikel/asperger-syndrome-adalah (kartu Trello WxuYTPdv, catchup 2026-10-04).
// Menggantikan versi 2026-10-03 04:03 WIB (commit e737a99) yang judulnya Asperger tetapi badannya
// salinan artikel autisme-adalah (konten duplikat, kartu induk P0 gswe5XFa pasangan #2).
// Semua fakta dicek ke sumber aslinya pada 4 Oktober 2026: kriteria DSM-5 di halaman CDC, ICD-11 6A02
// (teks WHO lewat cermin Find-A-Code MMS v2026-01 karena browser ICD-11 dirender JavaScript), ICD-10 2019
// (icd.who.int), National Autistic Society, Czech 2018 (Molecular Autism), CDC MMWR ADDM 2025, lembar
// fakta WHO 2025, Cleveland Clinic, Kemenkes Ayo Sehat, IDAI, dan JDIH BPK.

const CDC_DX = 'https://www.cdc.gov/autism/hcp/diagnosis/index.html';
const CDC_ADDM = 'https://www.cdc.gov/mmwr/volumes/74/ss/ss7402a1.htm';
const ICD11_6A02 = 'https://www.findacode.com/icd-11/code-437815624.html';
const ICD11_6A020 = 'https://www.findacode.com/icd-11/code-120443468.html';
const ICD10_F84 = 'https://icd.who.int/browse10/2019/en#/F84.5';
const NAS = 'https://www.autism.org.uk/advice-and-guidance/what-is-autism/asperger-syndrome';
const CZECH = 'https://molecularautism.biomedcentral.com/articles/10.1186/s13229-018-0208-6';
const WHO = 'https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders';
const CLEVELAND = 'https://health.clevelandclinic.org/high-functioning-autism';
const KEMENKES = 'https://ayosehat.kemkes.go.id/topik-penyakit/kelainan-mental/autisme';
const IDAI = 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/autime-adakah-harapan';
const UU8 = 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016';

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  slug: 'asperger-syndrome-adalah',
  keyword: 'asperger syndrome adalah',
  titleTag: 'Asperger Syndrome Adalah: Arti, Status ASD, dan Dukungan',
  metaDesc: 'Asperger syndrome adalah istilah lama untuk autisme tanpa disabilitas intelektual. Kini masuk ASD level 1 (DSM-5) dan ICD-11 6A02. Simak kriterianya.',
  ogTitle: 'Asperger Syndrome Adalah: Istilah Lama yang Kini Masuk Spektrum Autisme',
  ogDesc: 'Arti sindrom Asperger, kenapa DSM-5 dan ICD-11 melebur istilah ini ke gangguan spektrum autisme, arti ASD level 1, masalah label high-functioning, dan dukungan di Indonesia.',
  h1: 'Asperger Syndrome Adalah: Arti, Status Diagnosis Sekarang, dan Dukungan untuk Anak',
  crumb: 'Asperger Syndrome Adalah',
  parent: { name: 'Autisme', href: 'autisme-adalah' },
  about: ['Sindrom Asperger', 'Gangguan spektrum autisme'],
  keywords: 'asperger syndrome adalah, sindrom asperger, asperger adalah, asd level 1, high functioning autism, f84.5, icd-11 6a02, autisme tanpa disabilitas intelektual',
  readTime: '12 menit baca',
  image: {
    file: 'Dokumentasi/cpao-anak-belajar-memasak-kelas-kuliner-016.webp',
    w: 936, h: 1248,
    alt: 'Seorang anak memakai topi koki biru dan celemek hitam tersenyum sambil memegang bakpao berbentuk lebah buatannya dalam kelas memasak',
    caption: 'Seorang siswa YUKA memamerkan bakpao karakter buatannya dalam kegiatan kelas memasak. Foto ini dokumentasi kegiatan, bukan gambaran anak dengan diagnosis tertentu.',
    credit: 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).',
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  answer: '<strong>Asperger syndrome adalah</strong> nama diagnosis lama untuk anak atau orang dewasa autistik yang tidak mengalami disabilitas intelektual dan tidak terlambat bicara secara berarti. Sejak DSM-5 (2013) dan ICD-11, nama ini tidak lagi dipakai sebagai diagnosis tersendiri. Kondisinya kini didiagnosis sebagai gangguan spektrum autisme (ASD), dengan tingkat kebutuhan dukungan yang dicatat terpisah.',
  intro: `
            <p>Banyak orang tua masih mendengar kata "Asperger" dari kerabat, film, atau artikel lama. Ada yang menyebutnya "autis ringan", ada yang menyebutnya "anak pintar tapi aneh". Dua sebutan itu sama-sama menyesatkan. Istilah Asperger punya sejarah panjang, pernah resmi dipakai di dua buku pedoman diagnosis dunia, lalu dipensiunkan.</p>
            <p>Artikel ini menjawab satu hal secara khusus: apa arti istilah Asperger, kenapa sekarang tidak lagi dipakai, dan apa artinya bagi anak yang dulu atau kini menunjukkan ciri yang sama. Untuk gambaran umum autisme (pengertian, penyebab, dan terapi), silakan baca dulu <a href="autisme-adalah">pengertian autisme</a>. Di sini kita fokus pada istilahnya, kriteria yang berlaku sekarang, label yang sebaiknya dihindari, serta jalur dukungan yang tersedia di Indonesia.</p>`,
  infoBox: 'YUKA adalah lembaga pendidikan, bukan fasilitas medis. Artikel ini membantu orang tua dan guru memahami istilah, tetapi tidak bisa menggantikan pemeriksaan oleh dokter spesialis anak, psikiater anak, atau psikolog klinis. Hanya tenaga profesional tersebut yang berwenang menegakkan diagnosis.',
  sections: [
    {
      id: 'asal-istilah',
      h2: 'Dari Mana Istilah Sindrom Asperger Berasal?',
      toc: 'Asal istilah sindrom Asperger',
      html: `
            <p>Nama ini diambil dari Hans Asperger (1906 sampai 1980), dokter anak asal Wina, Austria. Menurut kajian sejarah Herwig Czech di jurnal ${ext(CZECH, 'Molecular Autism (2018)')}, Asperger pertama kali menyebut sekelompok anak dengan ciri psikologis khas sebagai "psikopati autistik" pada 1938, lalu menerbitkan studi lengkapnya pada 1944. Tulisan berbahasa Jerman itu baru dikenal luas secara internasional pada 1980-an.</p>
            <p>Yang memperkenalkan istilah "Asperger syndrome" ke dunia riset autisme adalah psikiater Inggris Lorna Wing lewat makalahnya tahun 1981, <em>Asperger's syndrome: a clinical account</em>. Menurut ${ext(NAS, 'National Autistic Society (Inggris)')}, Wing juga pelopor gagasan bahwa autisme adalah sebuah spektrum, bukan satu bentuk tunggal.</p>
            <p>Setelah itu istilah ini masuk ke dua pedoman resmi. ${ext(ICD10_F84, 'ICD-10 milik WHO')} mencantumkannya dengan kode <strong>F84.5 Asperger syndrome</strong> (berlaku sejak 1992), dan DSM-IV dari American Psychiatric Association memuatnya sebagai "Asperger's disorder" pada 1994. Pada masa itu, garis pembedanya kurang lebih begini: anak memenuhi ciri autisme dalam interaksi sosial dan pola perilaku, tetapi tidak mengalami keterlambatan bahasa yang berarti dan tidak mengalami disabilitas intelektual.</p>`
    },
    {
      id: 'status-sekarang',
      h2: 'Bagaimana Status Asperger di DSM-5 dan ICD-11?',
      toc: 'Status di DSM-5 dan ICD-11',
      html: `
            <p>Pada 2013, DSM-5 menyatukan beberapa diagnosis lama ke dalam satu payung bernama <strong>autism spectrum disorder (ASD)</strong> atau gangguan spektrum autisme. Kriteria DSM-5 yang dimuat ${ext(CDC_DX, 'CDC')} menyebut dengan jelas: orang yang sudah punya diagnosis DSM-IV berupa gangguan autistik, gangguan Asperger, atau PDD-NOS yang mapan sebaiknya diberi diagnosis gangguan spektrum autisme. Jadi diagnosis lamanya tidak hilang begitu saja, melainkan dialihkan.</p>
            <p>WHO mengambil langkah serupa di ICD-11. Semua bentuk dipersatukan dalam kode ${ext(ICD11_6A02, '6A02 Autism spectrum disorder')}. Alih-alih nama sindrom terpisah, ICD-11 membedakan dua hal: ada atau tidaknya gangguan perkembangan intelektual, dan seberapa baik bahasa fungsional anak. Profil yang dulu disebut Asperger paling dekat dengan subkode ${ext(ICD11_6A020, '6A02.0')}, yaitu gangguan spektrum autisme tanpa gangguan perkembangan intelektual dan dengan gangguan bahasa fungsional ringan atau tanpa gangguan.</p>
            <table class="classification-table">
                <thead>
                    <tr><th>Pedoman</th><th>Tahun</th><th>Cara menyebut profil "Asperger"</th></tr>
                </thead>
                <tbody>
                    <tr><td>ICD-10 (WHO)</td><td>1992</td><td>F84.5 Asperger syndrome, diagnosis tersendiri</td></tr>
                    <tr><td>DSM-IV (APA)</td><td>1994</td><td>Asperger's disorder, diagnosis tersendiri</td></tr>
                    <tr><td>DSM-5 dan DSM-5-TR (APA)</td><td>2013, revisi teks 2022</td><td>Autism spectrum disorder, ditambah tingkat dukungan (level 1, 2, atau 3) dan keterangan ada atau tidaknya hambatan intelektual dan bahasa</td></tr>
                    <tr><td>ICD-11 (WHO)</td><td>disahkan 2019</td><td>6A02 Autism spectrum disorder, paling dekat dengan subkode 6A02.0</td></tr>
                </tbody>
            </table>
            <p>Di Indonesia, banyak rekam medis dan formulir klaim masih memakai kode ICD-10, sehingga F84.5 kadang masih muncul di surat keterangan. Itu soal sistem pengodean, bukan berarti dokter memakai pedoman diagnosis yang usang. Kalau Ayah dan Bunda menerima dokumen dengan kode tersebut, tidak perlu panik dan tidak perlu meminta diagnosis ulang hanya karena perbedaan istilah.</p>`
    },
    {
      id: 'kriteria',
      h2: 'Kriteria Diagnosis yang Dipakai Sekarang',
      toc: 'Kriteria diagnosis yang berlaku',
      html: `
            <p>Karena Asperger sudah dilebur, dokter dan psikolog kini memakai kriteria gangguan spektrum autisme. Ringkasan berikut disarikan dari kriteria DSM-5 yang dipublikasikan ${ext(CDC_DX, 'CDC')}. Daftar ini bukan alat untuk mendiagnosis sendiri di rumah, tetapi membantu orang tua memahami apa yang akan ditanyakan saat pemeriksaan.</p>
            <h3>A. Hambatan komunikasi dan interaksi sosial (ketiganya harus ada)</h3>
            <ol>
                <li>Kesulitan dalam timbal balik sosial dan emosional, misalnya sulit menjalankan percakapan dua arah atau jarang berbagi minat dan perasaan.</li>
                <li>Kesulitan memakai komunikasi nonverbal, misalnya kontak mata, bahasa tubuh, ekspresi wajah, dan gerak isyarat yang kurang padu dengan ucapan.</li>
                <li>Kesulitan membangun, menjaga, dan memahami hubungan, misalnya sulit menyesuaikan sikap dengan situasi atau sulit berteman.</li>
            </ol>
            <h3>B. Pola perilaku, minat, atau aktivitas yang terbatas dan berulang (minimal dua)</h3>
            <ol>
                <li>Gerakan, penggunaan benda, atau ucapan yang berulang.</li>
                <li>Bersikeras pada hal yang sama, rutinitas yang kaku, atau sangat terganggu oleh perubahan kecil.</li>
                <li>Minat yang sangat terbatas dan intens, melebihi kewajaran dalam kekuatan atau fokusnya.</li>
                <li>Reaksi berlebihan atau sangat kurang terhadap rangsangan indra, misalnya suara, tekstur, atau cahaya.</li>
            </ol>
            <h3>C sampai E. Syarat tambahan</h3>
            <p>Gejala sudah muncul sejak masa perkembangan awal, walau bisa baru terlihat jelas ketika tuntutan sosial melebihi kemampuan anak. Gejala menimbulkan hambatan nyata dalam kehidupan sosial, sekolah, atau bidang penting lain. Gejala juga tidak lebih tepat dijelaskan sebagai disabilitas intelektual atau keterlambatan perkembangan global.</p>
            <p>Poin C ini penting untuk profil "Asperger". ICD-11 (${ext(ICD11_6A02, 'teks kode 6A02')}) mencatat bahwa gejala kadang baru tampak penuh ketika tuntutan sosial meningkat. Itu sebabnya banyak anak dengan bahasa lancar dan nilai akademik baik baru dikenali di usia sekolah dasar, atau bahkan saat remaja.</p>
            <p>Pemeriksaan biasanya meliputi wawancara riwayat perkembangan, observasi, dan instrumen terstandar. Gambaran proses asesmen untuk anak berkebutuhan khusus bisa dibaca di panduan <a href="asesmen-abk">asesmen ABK</a>.</p>`
    },
    {
      id: 'level-1',
      h2: 'Apa Arti ASD Level 1?',
      toc: 'Arti ASD level 1',
      html: `
            <p>DSM-5 meminta pemeriksa mencatat tingkat keparahan untuk dua ranah tadi (komunikasi sosial dan perilaku berulang) secara terpisah, dalam tiga tingkat: <strong>level 1 "membutuhkan dukungan"</strong>, level 2 "membutuhkan dukungan yang substansial", dan level 3 "membutuhkan dukungan yang sangat substansial" (${ext(CDC_DX, 'CDC')}). Banyak orang yang dulu didiagnosis Asperger kini digambarkan sebagai ASD level 1, sebagaimana dijelaskan ${ext(CLEVELAND, 'Cleveland Clinic')}.</p>
            <p>Ada tiga hal yang perlu diluruskan tentang level 1:</p>
            <ul>
                <li><strong>Level 1 tetap berarti butuh dukungan.</strong> Kata kuncinya "membutuhkan", bukan "tidak membutuhkan". Tanpa dukungan, kesulitan bergaul, kekakuan rutinitas, atau beban sensorik tetap bisa mengganggu belajar dan kesejahteraan anak.</li>
                <li><strong>Levelnya bisa berbeda di tiap ranah.</strong> Seorang anak bisa berada di level 1 untuk komunikasi sosial tetapi level 2 untuk perilaku berulang.</li>
                <li><strong>Level bukan cap seumur hidup.</strong> Tingkat ini menggambarkan kebutuhan saat ini. Lembar fakta ${ext(WHO, 'WHO')} menegaskan bahwa kemampuan dan kebutuhan orang autistik beragam dan bisa berubah seiring waktu.</li>
            </ul>
            <p>Penjelasan lengkap tentang ketiga tingkat beserta contoh kebutuhan dukungannya ada di artikel <a href="apa-itu-autisme-level-1-2-3">autisme level 1, 2, dan 3</a>.</p>`
    },
    {
      id: 'high-functioning',
      h2: 'Kenapa Label "High-Functioning" Sebaiknya Dihindari?',
      toc: 'Masalah label high-functioning',
      html: `
            <p>Sebutan "high-functioning autism" atau "autis fungsi tinggi" sering disamakan dengan Asperger. Padahal istilah itu bukan diagnosis medis. ${ext(CLEVELAND, 'Cleveland Clinic')} menjelaskan bahwa sebutan ini adalah istilah awam untuk apa yang kini disebut ASD level 1, dan menyarankan agar orang menjelaskan kemampuan serta kebutuhan seseorang secara spesifik.</p>
            <p>Di sekolah, label ini punya akibat praktis. Anak yang bicaranya lancar dan nilainya bagus sering dianggap "tidak apa-apa", sehingga kebutuhannya terlewat: ia mungkin pulang sekolah dalam kondisi sangat lelah karena berusaha menyesuaikan diri seharian, kesulitan saat jadwal berubah mendadak, atau tidak punya teman sama sekali. Sebaliknya, label "fungsi rendah" bisa membuat orang dewasa meremehkan kemampuan anak.</p>
            <p>Bahasa yang lebih membantu adalah bahasa kebutuhan. Bandingkan "Raka anak high-functioning" dengan "Raka membaca dua tingkat di atas teman sekelasnya, tetapi butuh peringatan lima menit sebelum pergantian kegiatan dan butuh tempat tenang saat jam istirahat yang ramai". Kalimat kedua langsung memberi tahu guru apa yang perlu disiapkan.</p>`
    },
    {
      id: 'tanda-sekolah',
      h2: 'Seperti Apa Tandanya dalam Keseharian Anak Usia Sekolah?',
      toc: 'Tanda dalam keseharian anak',
      html: `
            <p>Berikut contoh bagaimana kriteria di atas bisa terlihat pada anak yang bahasanya berkembang baik. Contoh ini tidak berlaku untuk semua anak, dan satu atau dua tanda saja tidak cukup untuk menyimpulkan apa pun.</p>
            <ul>
                <li><strong>Percakapan satu arah.</strong> Anak bisa bicara panjang tentang topik favoritnya (kereta, dinosaurus, peta, angka), tetapi sulit menangkap kapan lawan bicara sudah bosan atau ingin bergantian bicara.</li>
                <li><strong>Memahami kalimat secara harfiah.</strong> Ungkapan seperti "buah bibir" atau sindiran halus bisa membingungkan.</li>
                <li><strong>Ingin berteman tetapi bingung caranya.</strong> Banyak anak justru ingin punya teman, hanya saja aturan tak tertulis dalam bermain kelompok terasa sulit dibaca.</li>
                <li><strong>Sangat bergantung pada rutinitas.</strong> Upacara yang batal, guru pengganti, atau rute pulang yang berbeda bisa memicu kecemasan besar.</li>
                <li><strong>Kepekaan indra.</strong> Bel sekolah, bau kantin, atau label baju yang menggaruk kulit bisa terasa sangat mengganggu.</li>
            </ul>
            <p>Ciri-ciri di atas juga bisa beririsan dengan kondisi lain, misalnya ADHD, kecemasan, atau gangguan komunikasi sosial (pragmatik). Kriteria DSM-5 di ${ext(CDC_DX, 'CDC')} bahkan menyebut bahwa orang dengan hambatan komunikasi sosial yang jelas tetapi tidak memenuhi kriteria autisme perlu dievaluasi untuk gangguan komunikasi sosial (pragmatik). Untuk perbedaan dengan ADHD, lihat <a href="perbedaan-autis-dan-adhd">perbedaan autis dan ADHD</a>.</p>`
    },
    {
      id: 'kontroversi-nama',
      h2: 'Kenapa Banyak Lembaga Meninggalkan Nama Asperger?',
      toc: 'Kontroversi nama Asperger',
      html: `
            <p>Selain karena sudah tidak dipakai secara resmi, nama ini kini dianggap kontroversial. Kajian arsip oleh ${ext(CZECH, 'Herwig Czech (2018)')} menyimpulkan bahwa Hans Asperger menyesuaikan diri dengan rezim Nazi di Wina, secara terbuka membenarkan kebijakan "kebersihan ras", dan beberapa kali bekerja sama dengan program "eutanasia" anak, termasuk merekomendasikan pemindahan anak ke klinik Spiegelgrund tempat banyak anak meninggal.</p>
            <p>${ext(NAS, 'National Autistic Society')} mencatat bahwa sebagian orang yang dulu menerima diagnosis Asperger tetap memakai sebutan itu karena sudah menjadi bagian dari identitas mereka, sementara sebagian lain berhenti memakainya. Kedua pilihan itu sah. Untuk komunikasi resmi di sekolah dan layanan kesehatan, istilah gangguan spektrum autisme lebih tepat karena sesuai pedoman yang berlaku.</p>`
    },
    {
      id: 'angka',
      h2: 'Berapa Banyak Anak dengan Profil Ini?',
      toc: 'Angka kejadian',
      html: `
            <p>Karena Asperger tidak lagi dicatat sebagai diagnosis terpisah, angka yang tersedia adalah angka gangguan spektrum autisme secara keseluruhan. Laporan ${ext(CDC_ADDM, 'CDC ADDM yang terbit 2025')} mencatat prevalensi 32,2 per 1.000 anak usia 8 tahun, atau sekitar 1 dari 31 anak, di 16 wilayah pemantauan Amerika Serikat pada 2022. Secara global, ${ext(WHO, 'WHO')} memperkirakan sekitar 1 dari 127 orang autistik pada 2021.</p>
            <p>Indonesia belum punya angka nasional yang setara. Yang jelas, anak dengan profil "tanpa disabilitas intelektual" sering terlambat dikenali karena prestasi akademiknya menutupi kesulitan sosial. Lembar fakta WHO juga menyebut bahwa ciri autisme bisa terdeteksi sejak usia dini, tetapi diagnosis sering baru ditegakkan jauh lebih lambat.</p>`
    },
    {
      id: 'dukungan-indonesia',
      h2: 'Jalur Dukungan di Indonesia',
      toc: 'Jalur dukungan di Indonesia',
      html: `
            <p>Situs ${ext(KEMENKES, 'Ayo Sehat Kementerian Kesehatan')} menggambarkan ASD sebagai kelompok gangguan perkembangan otak dengan tingkat keparahan yang bervariasi dari ringan hingga berat. Untuk anak yang dicurigai berada di spektrum, alurnya kurang lebih seperti ini:</p>
            <ol>
                <li><strong>Mulai dari layanan primer.</strong> Sampaikan kekhawatiran ke dokter di puskesmas, klinik, atau dokter anak langganan. Catatan pengamatan orang tua dan guru sangat membantu.</li>
                <li><strong>Rujukan ke spesialis.</strong> Diagnosis ditegakkan oleh dokter spesialis anak (terutama konsultan tumbuh kembang atau neurologi anak), psikiater anak, atau psikolog klinis.</li>
                <li><strong>Rencana intervensi.</strong> ${ext(IDAI, 'IDAI')} menjelaskan bahwa tidak semua anak autistik memerlukan obat, tetapi semua memerlukan intervensi nonobat yang disesuaikan dengan usia, beratnya gejala, dan kemampuan intelektual anak, ditambah pelatihan bagi orang tua. Untuk anak dengan profil level 1, fokusnya sering pada keterampilan sosial, regulasi emosi, dan kemandirian. Pilihan terapinya bisa dilihat di <a href="macam-macam-terapi-pada-anak">macam-macam terapi pada anak</a>.</li>
                <li><strong>Pilihan sekolah.</strong> Banyak anak dengan profil ini bersekolah di sekolah reguler atau sekolah inklusi dengan penyesuaian, misalnya jadwal visual, tempat menenangkan diri, dan tugas kelompok yang perannya jelas. Pertimbangannya dibahas di <a href="apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a>.</li>
                <li><strong>Hak pendidikan.</strong> ${ext(UU8, 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')} menjadi payung hukum bagi hak penyandang disabilitas, termasuk dalam pendidikan.</li>
            </ol>
            <p>Penyesuaian kecil di rumah juga berdampak. Jadwal harian bergambar membantu anak mengantisipasi perubahan (lihat <a href="jadwal-visual-anak-autis">jadwal visual untuk anak autis</a>), sedangkan latihan bermain peran membantu anak membaca situasi sosial (lihat <a href="cara-melatih-social-skills-anak-autis-di-rumah">cara melatih social skills di rumah</a>).</p>`
    },
    {
      id: 'langkah-orang-tua',
      h2: 'Langkah untuk Orang Tua yang Anaknya Pernah Disebut "Asperger"',
      toc: 'Langkah untuk orang tua',
      html: `
            <ul>
                <li><strong>Tanyakan level dukungan dan keterangan tambahannya.</strong> Kalau anak didiagnosis sebelum 2013 atau dokumennya masih berkode F84.5, tanyakan ke dokter atau psikolog bagaimana profil anak bila dijelaskan dengan kerangka DSM-5: level berapa di tiap ranah, dan apakah ada kondisi penyerta seperti kecemasan atau ADHD.</li>
                <li><strong>Terjemahkan diagnosis menjadi daftar kebutuhan.</strong> Sekolah lebih terbantu oleh daftar konkret (apa yang memicu stres, apa yang menenangkan, bentuk instruksi yang paling mudah dipahami) daripada oleh nama diagnosis.</li>
                <li><strong>Bangun dari minat anak.</strong> Minat yang kuat bisa menjadi pintu masuk belajar dan, kelak, pilihan karier. Beberapa contohnya dibahas di <a href="pekerjaan-yang-cocok-untuk-orang-autis">pekerjaan yang cocok untuk orang autis</a>.</li>
                <li><strong>Jaga kesehatan emosi keluarga.</strong> Menerima diagnosis butuh waktu. Panduan <a href="menerima-diagnosis-anak-abk">menerima diagnosis anak</a> bisa menjadi teman di masa awal.</li>
            </ul>`
    }
  ],
  storyHighlight: 'Di Sekolah Inklusi Taruna Imani, YUKA mendampingi anak dengan beragam kebutuhan belajar lewat kegiatan kelas yang terstruktur, latihan kemandirian seperti kelas memasak, dan komunikasi rutin dengan orang tua. YUKA adalah lembaga pendidikan, bukan fasilitas medis: kami tidak mendiagnosis dan tidak menetapkan level autisme. Untuk asesmen, kami mengarahkan keluarga ke dokter atau psikolog. Ingin berdiskusi soal pendampingan belajar? <a href="../kontak">Hubungi tim YUKA</a>.',
  relatedIntro: 'Lanjutkan ke panduan YUKA lain tentang spektrum autisme dan pendampingan belajar.',
  faq: [
    {
      q: 'Apakah sindrom Asperger sama dengan autisme?',
      a: 'Menurut pedoman yang berlaku sekarang, ya. DSM-5 (2013) dan ICD-11 memasukkan profil yang dulu disebut Asperger ke dalam gangguan spektrum autisme. Bedanya dulu terletak pada tidak adanya disabilitas intelektual dan keterlambatan bahasa yang berarti.'
    },
    {
      q: 'Apakah Asperger sama dengan autis ringan?',
      a: 'Tidak persis. Profil Asperger paling sering setara dengan ASD level 1, yang artinya tetap membutuhkan dukungan. Kata "ringan" sering membuat kebutuhan anak di bidang sosial, emosi, dan sensorik terabaikan.'
    },
    {
      q: 'Apakah dokter di Indonesia masih memakai diagnosis Asperger?',
      a: 'Sebagian dokumen masih memakai kode ICD-10 F84.5 karena sistem pengodean layanan kesehatan masih berbasis ICD-10. Namun pedoman diagnosis terbaru (DSM-5 dan ICD-11) sudah memakai istilah gangguan spektrum autisme.'
    },
    {
      q: 'Apakah anak dengan profil Asperger bisa sekolah di sekolah reguler?',
      a: 'Banyak yang bisa, terutama di sekolah yang menyelenggarakan pendidikan inklusi dan mau memberi penyesuaian seperti jadwal visual, peringatan sebelum perubahan, dan tempat menenangkan diri. Keputusannya sebaiknya mempertimbangkan hasil asesmen dan kebutuhan anak.'
    },
    {
      q: 'Kenapa nama Asperger dianggap kontroversial?',
      a: 'Kajian arsip yang terbit di jurnal Molecular Autism (2018) menunjukkan Hans Asperger bekerja sama dengan program eutanasia anak di masa Nazi. Karena itu banyak lembaga autisme meninggalkan nama tersebut.'
    }
  ],
  related: [
    { href: 'autisme-adalah', title: 'Autisme Adalah: Pengertian, Ciri, dan Penanganan', desc: 'Gambaran umum autisme, penyebab, deteksi dini, dan terapi.' },
    { href: 'apa-itu-autisme-level-1-2-3', title: 'Apa Itu Autisme Level 1, 2, dan 3', desc: 'Arti tiga tingkat kebutuhan dukungan dalam DSM-5.' },
    { href: 'perbedaan-autis-dan-adhd', title: 'Perbedaan Autis dan ADHD', desc: 'Ciri yang beririsan dan cara membedakannya.' },
    { href: 'asesmen-abk', title: 'Asesmen Anak Berkebutuhan Khusus', desc: 'Langkah pemeriksaan sebelum menyusun rencana belajar.' }
  ],
  tags: ['AspergerSyndrome', 'SpektrumAutisme', 'ASDLevel1', 'PendidikanInklusi', 'YUKA'],
  sources: [
    { url: CDC_DX, label: 'CDC (2025). Clinical Testing and Diagnosis for Autism Spectrum Disorder, kriteria DSM-5' },
    { url: ICD11_6A02, label: 'WHO ICD-11 MMS v2026-01, 6A02 Autism spectrum disorder (cermin Find-A-Code)' },
    { url: ICD11_6A020, label: 'WHO ICD-11 MMS v2026-01, 6A02.0 (cermin Find-A-Code)' },
    { url: ICD10_F84, label: 'WHO ICD-10 versi 2019, F84.5 Asperger syndrome' },
    { url: NAS, label: 'National Autistic Society. Asperger syndrome (Asperger\'s), ditinjau Juni 2023' },
    { url: CZECH, label: 'Czech H. (2018). Hans Asperger, National Socialism, and "race hygiene" in Nazi-era Vienna. Molecular Autism 9:29' },
    { url: CDC_ADDM, label: 'Shaw KA dkk. (2025). Prevalence and Early Identification of ASD, ADDM Network 2022. MMWR Surveill Summ 74(2)' },
    { url: WHO, label: 'WHO (17 September 2025). Autism, lembar fakta' },
    { url: CLEVELAND, label: 'Cleveland Clinic (2024). What "High-Functioning Autism" Means (and Why You Shouldn\'t Call It That)' },
    { url: KEMENKES, label: 'Kementerian Kesehatan RI, Ayo Sehat. Autisme' },
    { url: IDAI, label: 'IDAI (2017). Autisme: Adakah harapan?' },
    { url: UU8, label: 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (JDIH BPK)' }
  ]
};

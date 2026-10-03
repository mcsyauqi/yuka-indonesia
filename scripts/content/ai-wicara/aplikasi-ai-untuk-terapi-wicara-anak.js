'use strict';
// Isi artikel /artikel/aplikasi-ai-untuk-terapi-wicara-anak (kartu Trello aZ6J8k7F, catchup 2026-10-03).
// Menggantikan versi 2026-10-03 dini hari yang judulnya "Aplikasi AI" tetapi badannya salinan
// artikel metode-prompt-dalam-terapi-wicara (konten duplikat, topik salah).
// Klaim aplikasi dicek ke deskripsi resmi pengembang di App Store Indonesia dan situs resminya,
// angka penelitian dicek ke abstrak PubMed/ACM, kutipan ASHA, WHO, IDAI, dan UU PDP dicek ke halaman
// aslinya, semuanya pada 3 Oktober 2026.

const APPSTORE_OTSIMO = 'https://apps.apple.com/id/app/otsimo-speech-therapy-slp/id1440975537';
const APPSTORE_BLUBS = 'https://apps.apple.com/id/app/speech-blubs-language-therapy/id1239522573';
const APPSTORE_SAGO = 'https://apps.apple.com/id/app/sago-mini-first-words-kids-1/id1592702367';
const APPSTORE_ARTIC = 'https://apps.apple.com/id/app/articulation-station-hive/id1485607474';
const SPEECHBLUBS = 'https://speechblubs.com/';
const MCKECHNIE = 'https://pubmed.ncbi.nlm.nih.gov/29996691/';
const HAIR = 'https://doi.org/10.1145/3433607';
const BENWAY = 'https://pubmed.ncbi.nlm.nih.gov/39173110/';
const ASHA_AI = 'https://www.asha.org/practice/generative-artificial-intelligence-for-clinicians/';
const ASHA_AI_CONSID = 'https://www.asha.org/practice/generative-artificial-intelligence-for-clinicians/ai-considerations-for-csd-professionals/';
const WHO = 'https://www.who.int/news/item/24-04-2019-to-grow-up-healthy-children-need-to-sit-less-and-play-more';
const IDAI = 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/keamanan-menggunakan-internet-bagi-anak';
const BIMU_INNOVILLAGE = 'https://innovation.telkomuniversity.ac.id/innovation/31/bimu-aplikasi-terapi-wicara-berbasis-augmented-reality-sebagai-alat-bantu-pembelajaran-dan-tumbuh-kembang-anak-penyandang-speech-delay-di-slb-autisma-yppa-bukittinggi';
const BIMU_NEWS = 'https://telkomuniversity.ac.id/bimu-aplikasi-terapi-wicara-pada-anak-penyandang-speech-delay/';
const UUPDP ='https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/undangundang+nomor+27+tahun+2022';

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  slug: 'aplikasi-ai-untuk-terapi-wicara-anak',
  titleTag: 'Aplikasi AI untuk Terapi Wicara Anak: Manfaat dan Batasan',
  metaDesc: 'Aplikasi AI untuk terapi wicara anak: cara kerja, contoh aplikasi, bukti riset, privasi data, dan cara memilih yang aman. Baca sebelum mengunduh.',
  ogTitle: 'Aplikasi AI untuk Terapi Wicara Anak: Cara Kerja, Bukti Riset, dan Cara Memilih',
  ogDesc: 'Panduan jujur untuk orang tua dan guru: apa yang bisa dan tidak bisa dilakukan aplikasi AI terapi wicara, contoh aplikasi dan klaim resminya, bukti penelitian, privasi data anak, serta batas screen time.',
  h1: 'Aplikasi AI untuk Terapi Wicara Anak: Manfaat, Batasan, dan Cara Memilih',
  crumb: 'Aplikasi AI untuk Terapi Wicara Anak',
  keywords: 'aplikasi ai untuk terapi wicara anak, aplikasi terapi wicara anak, aplikasi speech delay, speech recognition anak, terapi wicara digital',
  readTime: '12 menit baca',
  image: {
    file: 'assets/images/artikel/anak-memakai-tablet-stylus-wikimedia.webp',
    w: 1200, h: 798,
    alt: 'Seorang anak balita duduk di dalam ruangan memegang tablet putih dan menulis di layarnya dengan stylus',
    caption: 'Aplikasi di tablet bisa membuat latihan bicara di rumah lebih menarik, tetapi tetap perlu pendampingan orang dewasa. Foto ini ilustrasi umum anak memakai tablet, bukan tangkapan layar aplikasi terapi wicara tertentu.',
    credit: 'Foto: <a href="https://commons.wikimedia.org/wiki/File:Child_draws_on_tablet_while_sitting_indoors.jpg" rel="nofollow noopener" target="_blank">Shixart1985</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/2.0/deed.id" rel="nofollow noopener" target="_blank">CC BY 2.0</a>, diperkecil dan dikonversi ke WebP.',
    creditText: 'Foto: Shixart1985 / Wikimedia Commons, CC BY 2.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Child_draws_on_tablet_while_sitting_indoors.jpg',
    license: 'https://creativecommons.org/licenses/by/2.0/',
    author: 'Shixart1985'
  },
  answer: '<strong>Aplikasi AI untuk terapi wicara anak</strong> adalah aplikasi latihan bicara yang memakai pengenalan suara untuk mendengar ucapan anak lalu memberi umpan balik atau menyesuaikan latihan. Penelitian awalnya menjanjikan sebagai pelengkap latihan di rumah, tetapi aplikasi ini tidak bisa mendiagnosis dan tidak menggantikan asesmen serta program dari terapis wicara.',
  intro: `
            <p>Daftar tunggu terapi wicara yang panjang, biaya sesi, dan jarak ke klinik membuat banyak orang tua mencari bantuan lewat ponsel. Di toko aplikasi, ada puluhan aplikasi yang menjanjikan anak cepat bicara, sebagian menyebut dirinya memakai AI. Pertanyaannya: apa yang sebenarnya dilakukan "AI" di aplikasi itu, seberapa kuat buktinya, dan apa risikonya bagi anak?</p>
            <p>Artikel ini membahas cara kerja aplikasi AI terapi wicara, contoh aplikasi beserta klaim resmi pembuatnya, apa kata penelitian, batasannya untuk anak Indonesia, perlindungan data anak, batas waktu layar, dan cara memilih aplikasi bersama terapis. Kalau Ayah dan Bunda belum yakin apakah anak membutuhkan terapi, mulai dulu dari panduan <a href="terapi-wicara">terapi wicara untuk anak</a> dan <a href="speech-delay-adalah">tanda speech delay</a>.</p>`,
  sections: [
    {
      id: 'cara-kerja', toc: 'Apa yang dilakukan AI di aplikasi terapi wicara',
      h2: 'Apa yang Dilakukan AI di Aplikasi Terapi Wicara?',
      html: `
            <p>Kata "AI" di aplikasi terapi wicara biasanya merujuk pada <strong>pengenalan suara otomatis</strong> (<em>automatic speech recognition</em>) atau <strong>analisis ucapan otomatis</strong>. Mikrofon merekam ucapan anak, lalu sistem menilai apakah kata atau bunyi yang diucapkan mendekati target. Hasilnya dipakai untuk memberi bintang, mengulang soal, atau menaikkan tingkat kesulitan.</p>
            <p>Agar tidak tertukar, bedakan tiga jenis aplikasi yang sering disebut "aplikasi terapi wicara":</p>
            <ul>
                <li><strong>Aplikasi yang menilai ucapan secara otomatis.</strong> Aplikasi mendengar anak dan memberi umpan balik tanpa orang dewasa harus menilai. Inilah yang paling tepat disebut aplikasi AI.</li>
                <li><strong>Aplikasi rekam dan putar ulang.</strong> Anak merekam suaranya lalu mendengarkannya kembali bersama orang tua atau terapis. Yang menilai tetap manusia.</li>
                <li><strong>Aplikasi model video atau gambar.</strong> Anak menonton contoh lalu menirukan. Aplikasinya mungkin merespons suara, tetapi inti metodenya adalah peniruan, bukan penilaian ucapan.</li>
            </ul>
            <p>Ketiganya bisa bermanfaat, tetapi klaimnya berbeda. Aplikasi yang hanya "merespons suara" belum tentu mampu membedakan ucapan yang benar dan yang keliru.</p>`
    },
    {
      id: 'contoh-aplikasi', toc: 'Contoh aplikasi dan klaim resminya',
      h2: 'Contoh Aplikasi dan Apa Klaim Resminya',
      html: `
            <p>Tabel berikut merangkum beberapa aplikasi yang sering muncul saat orang tua mencari aplikasi terapi wicara. Isinya diambil dari deskripsi resmi pengembang di App Store Indonesia dan situs resminya pada 3 Oktober 2026. YUKA tidak berafiliasi dengan aplikasi mana pun dan tidak menguji efektivitasnya sendiri. Daftar ini bukan rekomendasi.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;"><table class="classification-table" style="min-width:600px;">
                <thead><tr><th>Aplikasi</th><th>Klaim resmi pembuatnya</th><th>Catatan untuk orang tua</th></tr></thead>
                <tbody>
                    <tr><td>${ext(APPSTORE_OTSIMO, 'Otsimo | Speech Therapy SLP')}</td><td>Menyebut dirinya memakai teknologi pengenalan suara dan ucapan serta <em>machine learning</em> untuk menilai apa yang diucapkan dan mendeteksi apakah artikulasi membaik.</td><td>Deskripsi dan bahasa yang tercantum di App Store hanya bahasa Inggris. Belum ada studi independen yang kami temukan untuk aplikasi ini.</td></tr>
                    <tr><td>${ext(APPSTORE_BLUBS, 'Speech Blubs')}</td><td>Menyebut dirinya aplikasi terapi wicara yang dikendalikan suara (<em>voice-controlled</em>), dengan teknik <em>video modeling</em>: anak menonton anak lain mengucapkan kata lalu menirukan.</td><td>Versi bahasa yang disebut: Inggris (AS dan Inggris), Spanyol, Prancis, dan Portugis (Brasil). ${ext(SPEECHBLUBS, 'Situs resminya')} menyatakan aplikasi ini dirancang untuk melengkapi, bukan menggantikan, terapi wicara profesional.</td></tr>
                    <tr><td>${ext(APPSTORE_SAGO, 'Sago Mini First Words')}</td><td>Untuk anak usia 5 tahun ke bawah. Saat anak mengulang kata yang didengarnya, aplikasi "mendengarkan" dan menyesuaikan target belajar berdasarkan kemajuan.</td><td>Aplikasi kosakata awal untuk umum, bukan alat terapi untuk gangguan bicara tertentu.</td></tr>
                    <tr><td>${ext(APPSTORE_ARTIC, 'Articulation Station Hive')}</td><td>Kumpulan latihan artikulasi dengan fitur catatan dan mendengarkan rekaman sesi.</td><td>Contoh aplikasi rekam dan putar ulang. Penilaian tetap oleh terapis atau orang tua, bukan oleh AI.</td></tr>
                </tbody>
            </table></div>
            <p style="font-size:0.9rem;color:var(--gray-600);">Di layar ponsel, geser tabel ke samping untuk membaca kolom catatan.</p>
            <p><strong>Bagaimana dengan bahasa Indonesia?</strong> Dari aplikasi yang kami periksa, tidak ada yang secara resmi menyatakan dapat menilai ucapan anak dalam bahasa Indonesia. Ini penting: aplikasi yang dilatih dengan suara penutur bahasa Inggris tidak otomatis bisa menilai bunyi seperti "r" bergetar atau kata berbahasa Indonesia dengan tepat. Bila anak dibesarkan dengan bahasa Indonesia atau bahasa daerah, latihan berbahasa Inggris juga belum tentu relevan dengan kebutuhan komunikasinya sehari-hari.</p>
            <h3>Inovasi lokal: contoh dari Indonesia</h3>
            <p>Pengembangan aplikasi terapi wicara berbahasa Indonesia sudah mulai muncul, terutama dari kampus. Salah satu contohnya BIMU (Bicara Itu Mudah), aplikasi berbasis <em>augmented reality</em> (AR) untuk anak autis dengan keterlambatan bicara di SLB Autisma YPPA Bukittinggi. BIMU memakai metode Picture Exchange Communication System (PECS) dalam format AR, dengan enam fase belajar dari mengenal kosakata sampai menyusun kalimat, kuis evaluasi, dan fitur pemantauan perkembangan untuk orang tua (${ext(BIMU_INNOVILLAGE, 'Innovillage Telkom University')}). Aplikasi ini diimplementasikan di sekolah tersebut pada 21 Desember 2023 sampai 18 Februari 2024 dan meraih Runner Up kategori Disability Quality of Life Improvement Solution di ajang Innovillage 2023 (${ext(BIMU_NEWS, 'Telkom University, 2024')}).</p>
            <p>Dua catatan penting. Pertama, BIMU berbasis AR dan gambar, bukan aplikasi yang menilai ucapan anak dengan pengenalan suara, jadi ia lebih dekat ke media belajar kosakata dan komunikasi bergambar. Kedua, kami belum menemukan publikasi uji efektivitasnya, dan sumber di atas tidak menyebut aplikasinya tersedia untuk umum. Inovasi seperti ini patut didukung, tetapi tetap perlu diuji sebelum diklaim membantu anak bicara.</p>
            <p>Untuk anak yang belum bisa berbicara sama sekali, pilihan yang lebih sering dibahas terapis adalah komunikasi augmentatif dan alternatif. Baca <a href="aplikasi-komunikasi-aac-terbaik-untuk-anak">aplikasi komunikasi AAC untuk anak</a> untuk penjelasannya.</p>`
    },
    {
      id: 'penelitian', toc: 'Apa kata penelitian',
      h2: 'Apa Kata Penelitian?',
      html: `
            <p>Penelitian tentang AI untuk latihan bicara anak sudah berjalan lebih dari satu dekade, tetapi sebagian besar masih berskala kecil dan berbahasa Inggris. Tiga penelitian berikut sering dijadikan rujukan:</p>
            <ul>
                <li><strong>Tinjauan sistematis McKechnie dan rekan (2018).</strong> Tim ini menelaah 32 artikel yang terbit tahun 2007 sampai 2016 dan menemukan 18 alat analisis ucapan otomatis. Alat-alat itu mencapai kesepakatan minimal 80% dengan penilaian manusia saat dipakai untuk memperkirakan kejelasan bicara, tingkat keparahan, atau kategori kesalahan. Namun akurasinya umumnya di bawah 80% untuk kata yang diucapkan keliru, padahal justru kata itulah yang paling perlu dinilai saat terapi. Para penulis menyimpulkan alat ini menjanjikan, tetapi masih perlu dilatih dengan sampel suara yang jauh lebih besar (${ext(MCKECHNIE, 'McKechnie dkk., 2018')}).</li>
                <li><strong>Gim Apraxia World (Hair dan rekan, 2021).</strong> Sepuluh anak memainkan gim latihan bicara ini di rumah dalam dua blok perlakuan 4 minggu. Pada satu blok, ucapan dinilai oleh pengasuh, dan pada blok lain dinilai otomatis oleh sistem di dalam gim. Anak-anak menunjukkan kemajuan bicara yang bermakna secara terapeutik dan lebih terlibat saat berlatih. Penulisnya menilai gim semacam ini sebagai pelengkap latihan di rumah, bukan pengganti terapi (${ext(HAIR, 'Hair dkk., 2021')}).</li>
                <li><strong>ChainingAI untuk bunyi /r/ (Benway dan Preston, 2024).</strong> Lima peserta berusia 10 sampai 19 tahun dengan gangguan bunyi bicara yang menetap mengikuti sepuluh sesi 40 menit. Kegiatan pembuka dipandu terapis, lalu latihan berulangnya dijalankan sistem AI. Kelima peserta menunjukkan perbaikan bunyi /r/ pada kata yang tidak dilatih dari sebelum ke sesudah program, dan penilaian AI untuk empat dari lima peserta sebagian besar setara dengan kesepakatan antarterapis (${ext(BENWAY, 'Benway dan Preston, 2024')}).</li>
            </ul>
            <div class="info-box">
                <h4>Cara membaca bukti ini</h4>
                <p style="margin-bottom:0;">Jumlah pesertanya kecil (5 sampai 10 anak), bahasanya Inggris, dan pada studi ChainingAI pesertanya remaja dengan satu target bunyi. Ada terapis atau pengasuh yang terlibat di semua studi. Jadi buktinya mendukung AI sebagai alat bantu latihan dalam program yang dirancang terapis, belum sebagai terapi mandiri untuk balita dengan keterlambatan bicara. Hasil penelitian ini juga tidak bisa dipakai untuk menilai aplikasi komersial yang tidak diteliti.</p>
            </div>`
    },
    {
      id: 'manfaat', toc: 'Manfaat yang realistis',
      h2: 'Manfaat yang Realistis',
      html: `
            <p>Dengan batasan di atas, aplikasi AI terapi wicara paling masuk akal dipakai untuk hal-hal berikut:</p>
            <ul>
                <li><strong>Menambah jumlah latihan di rumah.</strong> Sesi terapi biasanya hanya beberapa jam seminggu. Latihan singkat yang rutin di rumah membantu anak mengulang target yang sudah diajarkan terapis.</li>
                <li><strong>Membuat latihan lebih menarik.</strong> Bentuk gim dan hadiah visual bisa membantu anak bertahan berlatih, seperti yang terlihat pada studi Apraxia World.</li>
                <li><strong>Mengurangi beban orang tua sebagai penilai.</strong> Tidak semua orang tua yakin kapan ucapan anak sudah tepat. Umpan balik otomatis, bila akurat, bisa membantu, walau tetap perlu dicek terapis.</li>
                <li><strong>Mencatat kemajuan.</strong> Riwayat latihan bisa ditunjukkan kepada terapis sebagai bahan evaluasi.</li>
            </ul>
            <p>Latihan di rumah paling efektif bila targetnya sama dengan yang sedang dikerjakan di ruang terapi. Teknik bantuan bertahap yang dipakai terapis dijelaskan di <a href="metode-prompt-dalam-terapi-wicara">metode prompt dalam terapi wicara</a>, dan latihan dasar tanpa aplikasi ada di <a href="cara-melatih-anak-speech-delay-bicara">cara melatih anak speech delay bicara</a>.</p>`
    },
    {
      id: 'batasan', toc: 'Batasan dan risiko',
      h2: 'Batasan dan Risiko yang Perlu Diketahui',
      html: `
            <ul>
                <li><strong>Tidak bisa mendiagnosis.</strong> Keterlambatan bicara bisa berkaitan dengan pendengaran, pemahaman bahasa, motorik bicara, autisme, atau kondisi lain. Aplikasi tidak memeriksa pendengaran dan tidak menilai pemahaman anak. Asesmen tetap perlu dilakukan dokter anak dan terapis wicara.</li>
                <li><strong>Akurasi pada suara anak masih terbatas.</strong> Seperti temuan tinjauan McKechnie dan rekan, alat analisis otomatis cenderung kurang akurat justru pada kata yang diucapkan keliru. Akibatnya, aplikasi bisa memuji ucapan yang sebenarnya belum tepat, atau sebaliknya.</li>
                <li><strong>Bahasa dan dialek.</strong> Sebagian besar aplikasi dan penelitian memakai bahasa Inggris. Anak yang berbicara bahasa Indonesia, Jawa, atau bahasa daerah lain belum tentu terlayani dengan baik.</li>
                <li><strong>Menggeser interaksi langsung.</strong> Anak belajar bicara terutama lewat percakapan dengan orang di sekitarnya. Aplikasi yang dipakai sendirian berisiko menggantikan waktu mengobrol, membaca, dan bermain bersama.</li>
            </ul>
            <p>Asosiasi profesi terapis wicara Amerika Serikat, ASHA, menulis bahwa AI tidak dapat menggantikan audiolog, terapis wicara, atau asistennya, dan setiap klaim efektivitas alat AI harus didukung bukti (${ext(ASHA_AI, 'ASHA')}). ASHA juga menegaskan bahwa tanpa keahlian klinis, AI tidak dapat dipercaya untuk menafsirkan data diagnostik, menyesuaikan perawatan dengan kebutuhan tiap orang, atau menggantikan penilaian profesional (${ext(ASHA_AI_CONSID, 'ASHA, AI Considerations')}). Prinsip yang sama juga berlaku untuk AI di bidang lain, seperti dibahas di <a href="ai-artificial-intelligence-untuk-screening-autisme">AI untuk screening autisme</a>.</p>`
    },
    {
      id: 'privasi', toc: 'Privasi data anak',
      h2: 'Privasi: Rekaman Suara Anak Termasuk Data Pribadi',
      html: `
            <p>Aplikasi AI terapi wicara bekerja dengan merekam suara anak dan sering menyimpan catatan perkembangannya. Di Indonesia, Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi mengatur bahwa pemrosesan data pribadi anak diselenggarakan secara khusus dan wajib mendapat persetujuan orang tua dan/atau wali (Pasal 25). Undang-undang yang sama menggolongkan data dan informasi kesehatan sebagai data pribadi yang bersifat spesifik, dan pemrosesan data pribadi penyandang disabilitas juga diselenggarakan secara khusus (Pasal 4 dan Pasal 26, ${ext(UUPDP, 'teks UU 27/2022 di JDIH Komdigi')}).</p>
            <p>Sebelum memasang aplikasi, cek hal-hal berikut di kebijakan privasinya:</p>
            <ul>
                <li>Apakah rekaman suara diproses di perangkat atau dikirim ke server, dan di negara mana server itu berada.</li>
                <li>Berapa lama rekaman disimpan dan apakah orang tua bisa menghapusnya.</li>
                <li>Apakah data dipakai untuk melatih sistem AI atau dibagikan ke pihak lain, termasuk pengiklan.</li>
                <li>Apakah aplikasi meminta izin yang tidak relevan, seperti lokasi atau kontak.</li>
            </ul>
            <p>Bila jawabannya tidak jelas, lebih aman memilih aplikasi lain atau bertanya langsung kepada pengembangnya.</p>`
    },
    {
      id: 'screen-time', toc: 'Batas waktu layar',
      h2: 'Berapa Lama Anak Boleh Memakai Aplikasi?',
      html: `
            <p>Aplikasi latihan bicara tetap termasuk waktu layar. Pedoman WHO tahun 2019 untuk anak di bawah 5 tahun menyebutkan: bayi di bawah 1 tahun dan anak usia 1 tahun tidak dianjurkan mendapat waktu layar pasif, anak usia 2 tahun tidak lebih dari 1 jam sehari, dan anak usia 3 sampai 4 tahun juga tidak lebih dari 1 jam sehari, makin sedikit makin baik. WHO menganjurkan waktu duduk diisi dengan membaca dan bercerita bersama pengasuh (${ext(WHO, 'WHO, 2019')}). Artikel edukasi IDAI tentang keamanan internet menyebut berbagai ahli menganjurkan waktu layar tidak lebih dari 2 jam sehari untuk anak di atas 2 tahun (${ext(IDAI, 'IDAI')}).</p>
            <p>Dalam praktik, latihan bicara lewat aplikasi cukup dalam sesi singkat yang didampingi, lalu dilanjutkan dengan mengucapkan kata yang sama dalam kegiatan nyata: saat makan, bermain, atau membaca buku. Untuk anak autis, pertimbangan tambahannya dibahas di <a href="screen-time-untuk-anak-autis-batasan">screen time untuk anak autis</a>.</p>`
    },
    {
      id: 'cara-memilih', toc: 'Cara memilih aplikasi',
      h2: 'Cara Memilih Aplikasi AI Terapi Wicara',
      html: `
            <ol>
                <li><strong>Mulai dari asesmen.</strong> Pastikan anak sudah diperiksa terapis wicara, sehingga Ayah dan Bunda tahu target latihannya, misalnya bunyi tertentu, kosakata awal, atau kalimat dua kata.</li>
                <li><strong>Tanyakan kepada terapis.</strong> Minta terapis menilai apakah aplikasi yang Ayah dan Bunda temukan sesuai target dan cara kerja terapinya.</li>
                <li><strong>Cek bahasanya.</strong> Pastikan bahasa latihan sama dengan bahasa yang dipakai anak sehari-hari.</li>
                <li><strong>Cek klaimnya.</strong> Klaim "terbukti" atau "disetujui terapis" sebaiknya disertai penelitian yang bisa dibaca. Waspadai janji anak pasti lancar bicara dalam waktu singkat.</li>
                <li><strong>Pakai masa uji coba.</strong> Perhatikan apakah anak menikmati latihan dan apakah umpan balik aplikasi masuk akal menurut pendengaran Ayah dan Bunda.</li>
                <li><strong>Cek privasi.</strong> Baca kebijakan privasi seperti dijelaskan di atas.</li>
                <li><strong>Dampingi dan catat.</strong> Duduk bersama anak saat berlatih, lalu bawa catatan kemajuan ke sesi terapi berikutnya.</li>
            </ol>
            <p>Biaya langganan aplikasi sebaiknya dibandingkan dengan kebutuhan sesi terapi tatap muka. Gambaran biayanya ada di <a href="berapa-biaya-terapi-bicara-anak">berapa biaya terapi bicara anak</a>, dan tips mencari tenaga profesional ada di <a href="terapis-speech-delay">memilih terapis speech delay</a>.</p>`
    },
    {
      id: 'kapan-terapis', toc: 'Kapan harus ke terapis wicara',
      h2: 'Kapan Harus Langsung ke Terapis Wicara?',
      html: `
            <p>Jangan menunda pemeriksaan dengan alasan "dicoba dulu pakai aplikasi" bila anak menunjukkan tanda-tanda berikut:</p>
            <ul>
                <li>Tidak merespons saat dipanggil atau tampak tidak mendengar dengan baik.</li>
                <li>Kehilangan kata atau kemampuan bicara yang sebelumnya sudah dimiliki.</li>
                <li>Belum berbicara atau jauh tertinggal dari anak seusianya.</li>
                <li>Kesulitan bicara disertai masalah makan, menelan, atau kontak sosial.</li>
            </ul>
            <p>Untuk memahami bedanya peran terapis wicara dan terapis okupasi, baca <a href="perbedaan-terapi-okupasi-dan-terapi-wicara">perbedaan terapi okupasi dan terapi wicara</a>.</p>`
    }
  ],
  faq: [
    {
      q: 'Apakah aplikasi AI bisa menggantikan terapis wicara?',
      a: 'Tidak. ASHA menyatakan AI tidak dapat menggantikan terapis wicara, dan penelitian yang ada menguji AI sebagai bagian dari program yang dirancang terapis. Aplikasi paling tepat dipakai sebagai tambahan latihan di rumah setelah anak menjalani asesmen.'
    },
    {
      q: 'Apakah ada aplikasi AI terapi wicara berbahasa Indonesia?',
      a: 'Dari aplikasi yang kami periksa pada Oktober 2026, belum ada yang secara resmi menyatakan dapat menilai ucapan anak dalam bahasa Indonesia. Aplikasi seperti Otsimo Speech Therapy dan Speech Blubs mencantumkan bahasa Inggris dan beberapa bahasa Eropa. Inovasi lokal seperti BIMU dari ajang Innovillage 2023 sudah berbahasa Indonesia, tetapi berbasis augmented reality dan gambar, bukan penilaian ucapan otomatis. Tanyakan kepada terapis aplikasi atau materi latihan berbahasa Indonesia yang cocok.'
    },
    {
      q: 'Apa bedanya aplikasi AI terapi wicara dengan aplikasi AAC?',
      a: 'Aplikasi AI terapi wicara melatih anak mengucapkan bunyi atau kata dan menilai ucapannya secara otomatis. Aplikasi AAC (komunikasi augmentatif dan alternatif) memberi anak cara lain untuk berkomunikasi, misalnya dengan menekan simbol atau gambar yang lalu disuarakan. Keduanya bisa dipakai bersamaan, dan pilihannya sebaiknya ditentukan terapis wicara sesuai kemampuan anak.'
    },
    {
      q: 'Mulai usia berapa anak boleh memakai aplikasi terapi wicara?',
      a: 'WHO tidak menganjurkan waktu layar pasif untuk anak di bawah 2 tahun dan membatasi paling lama 1 jam sehari untuk anak 2 sampai 4 tahun. Untuk balita, latihan bicara lewat percakapan, membaca, dan bermain bersama orang tua tetap yang utama, dan penggunaan aplikasi sebaiknya atas saran terapis.'
    },
    {
      q: 'Apakah aplikasi AI terapi wicara aman untuk data anak?',
      a: 'Tergantung aplikasinya. Rekaman suara dan catatan perkembangan anak termasuk data pribadi, dan UU Nomor 27 Tahun 2022 mewajibkan persetujuan orang tua untuk pemrosesan data anak. Baca kebijakan privasi, cek apakah rekaman bisa dihapus, dan hindari aplikasi yang tidak menjelaskan penggunaan datanya.'
    },
    {
      q: 'Berapa lama latihan memakai aplikasi dalam sehari?',
      a: 'Sesi singkat yang didampingi orang tua lebih baik daripada pemakaian lama tanpa pengawasan. Ikuti batas waktu layar sesuai usia dari WHO, lalu lanjutkan latihan kata yang sama dalam kegiatan sehari-hari. Durasi dan frekuensi yang tepat sebaiknya ditentukan bersama terapis.'
    }
  ],
  related: [
    { href: 'terapi-wicara', title: 'Terapi Wicara', desc: 'Manfaat, proses, dan kapan anak membutuhkannya.' },
    { href: 'aplikasi-komunikasi-aac-terbaik-untuk-anak', title: 'Aplikasi Komunikasi AAC', desc: 'Alat bantu komunikasi untuk anak yang belum bisa berbicara.' },
    { href: 'speech-delay-adalah', title: 'Speech Delay pada Anak', desc: 'Penyebab, tanda, dan cara menangani keterlambatan bicara.' }
  ],
  tags: ['TerapiWicara', 'AplikasiAI', 'SpeechDelay', 'TeknologiPendidikan', 'YUKA'],
  sources: [
    { url: APPSTORE_OTSIMO, label: 'Otsimo | Speech Therapy SLP, deskripsi resmi pengembang di App Store Indonesia' },
    { url: APPSTORE_BLUBS, label: 'Speech Blubs: Language Therapy, deskripsi resmi pengembang di App Store Indonesia' },
    { url: SPEECHBLUBS, label: 'Speech Blubs, situs resmi (FAQ: cara kerja dan peran sebagai pelengkap terapi)' },
    { url: APPSTORE_SAGO, label: 'Sago Mini First Words, deskripsi resmi pengembang di App Store Indonesia' },
    { url: APPSTORE_ARTIC, label: 'Articulation Station Hive, deskripsi resmi pengembang di App Store Indonesia' },
    { url: MCKECHNIE, label: "Automated speech analysis tools for children's speech production: A systematic literature review, McKechnie J dkk., International Journal of Speech-Language Pathology, 2018" },
    { url: HAIR, label: 'A Longitudinal Evaluation of Tablet-Based Child Speech Therapy with Apraxia World, Hair A dkk., ACM Transactions on Accessible Computing, 2021' },
    { url: BENWAY, label: 'Artificial Intelligence-Assisted Speech Therapy for /ɹ/: A Single-Case Experimental Study, Benway NR, Preston JL, American Journal of Speech-Language Pathology, 2024' },
    { url: BIMU_INNOVILLAGE, label: 'BIMU: Aplikasi Terapi Wicara Berbasis Augmented Reality, Innovillage Telkom University, 18 Oktober 2024' },
    { url: BIMU_NEWS, label: 'BIMU: Aplikasi Terapi Wicara Pada Anak Penyandang Speech Delay, Telkom University, 14 Maret 2024' },
    { url: ASHA_AI, label: 'Generative Artificial Intelligence (AI) for Clinicians in Audiology and Speech-Language Pathology, ASHA' },
    { url: ASHA_AI_CONSID, label: 'Artificial Intelligence (AI): Considerations for CSD Professionals, ASHA' },
    { url: WHO, label: 'To grow up healthy, children need to sit less and play more, WHO, 2019' },
    { url: IDAI, label: 'Keamanan Menggunakan Internet bagi Anak, Ikatan Dokter Anak Indonesia (IDAI)' },
    { url: UUPDP, label: 'Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi, JDIH Kementerian Komunikasi dan Digital' }
  ]
};

'use strict';
// Isi artikel /artikel/hari-disabilitas-internasional (cycle #73, slot 2026-10-09).
// Sudut: sejarah singkat, makna, dan ide kegiatan sekolah/keluarga untuk Hari Disabilitas Internasional (3 Desember).
// Beda dari hari-autis-sedunia (2 April, khusus autisme). Keyword dari publish-schedule-backlog.json.
// Fakta dicek pada 5 Oktober 2026:
//  - Wikipedia "International Day of Persons with Disabilities": diperingati PBB sejak 1992; nama awal International Day
//    of Disabled Persons sampai 2007; 1981 International Year of Disabled Persons; Dekade PBB 1983 sampai 1992;
//    Resolusi 47/3.
//  - un.org/en/observances/day-of-persons-with-disabilities: tema 2025 "Fostering disability inclusive societies for
//    advancing social progress". Tema 2026 belum dicek, tidak disebut.
//  - Wikipedia CRPD: teks diadopsi Majelis Umum PBB 13 Desember 2006, berlaku 3 Mei 2008.
//  - UU 19/2011 pengesahan CRPD (JDIH BPK, dicek cycle #72). UU 8/2016 Pasal 5 ayat (3) dan Pasal 18 (teks resmi).
// Tidak ada angka statistik disabilitas Indonesia yang dikarang. Foto: Dokumentasi YUKA, tanpa keterangan kondisi.

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
const UN = 'https://www.un.org/en/observances/day-of-persons-with-disabilities';
const WIKI = 'https://en.wikipedia.org/wiki/International_Day_of_Persons_with_Disabilities';
const CRPD = 'https://en.wikipedia.org/wiki/Convention_on_the_Rights_of_Persons_with_Disabilities';
const UU19 = 'https://peraturan.bpk.go.id/Details/39255/uu-no-19-tahun-2011';
const UU8 = 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';

module.exports = {
  slug: 'hari-disabilitas-internasional',
  date: '2026-10-09',
  category: 'Disabilitas',
  keyword: 'hari disabilitas internasional',
  titleTag: 'Hari Disabilitas Internasional: Sejarah dan Ide Kegiatan',
  metaDesc: 'Hari Disabilitas Internasional diperingati tiap 3 Desember. Simak sejarahnya, kaitannya dengan UU 8/2016, dan ide kegiatan inklusif sekolah dan keluarga.',
  ogTitle: 'Hari Disabilitas Internasional 3 Desember: Sejarah, Makna, dan Ide Kegiatan Inklusif',
  ogDesc: 'Sejarah Hari Disabilitas Internasional dari Tahun Internasional 1981 sampai CRPD, kaitannya dengan UU 19/2011 dan UU 8/2016, serta ide kegiatan sekolah dan keluarga yang menempatkan penyandang disabilitas sebagai pelaku.',
  h1: 'Hari Disabilitas Internasional: Sejarah, Makna, dan Ide Kegiatan Inklusif untuk Sekolah dan Keluarga',
  crumb: 'Hari Disabilitas Internasional',
  parent: { name: 'Penyandang Disabilitas', href: 'penyandang-disabilitas' },
  about: ['Hari Disabilitas Internasional', 'International Day of Persons with Disabilities', 'CRPD', 'UU 8 Tahun 2016', 'Pendidikan inklusi'],
  keywords: 'hari disabilitas internasional, HDI 3 Desember, international day of persons with disabilities, sejarah hari disabilitas, kegiatan hari disabilitas di sekolah, CRPD',
  readTime: '11 menit baca',
  image: {
    file: 'Dokumentasi/artikel/hari-disabilitas-internasional-piala.webp',
    w: 900, h: 1200,
    alt: 'Deretan piala berwarna emas, hijau, dan biru serta miniatur kapal layar di atas rak kayu menempel pada dinding bertekstur',
    caption: 'Deretan piala di ruang Sekolah Inklusi Taruna Imani. Prestasi siswa dengan beragam kemampuan layak dirayakan setiap hari, tidak hanya pada hari peringatan.',
    credit: CREDIT,
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  figures: [
    {
      file: 'Dokumentasi/artikel/hari-disabilitas-internasional-linimasa.svg', w: 1200, h: 420,
      alt: 'Linimasa: 1981 Tahun Internasional Penyandang Disabilitas, 1983 sampai 1992 Dekade PBB, 1992 PBB mulai memperingati 3 Desember, 2006 CRPD diadopsi, 2011 UU 19/2011, 2016 UU 8/2016',
      caption: 'Linimasa singkat dari tahun internasional PBB sampai undang-undang penyandang disabilitas di Indonesia.',
      credit: 'Diagram: Tim YUKA.'
    },
    {
      file: 'Dokumentasi/artikel/hari-disabilitas-internasional-ide-kegiatan.svg', w: 1200, h: 640,
      alt: 'Diagram empat ide kegiatan sekolah: belajar bersama, audit aksesibilitas, pentas karya, dan olahraga inklusif',
      caption: 'Empat ide kegiatan sekolah untuk Hari Disabilitas Internasional. Semuanya bisa disesuaikan dengan jenjang dan kemampuan siswa.',
      credit: 'Diagram: Tim YUKA.'
    },
    {
      file: 'Dokumentasi/artikel/hari-disabilitas-internasional-pentas-tari.webp', w: 936, h: 998,
      alt: 'Seorang siswa berkostum tari tradisional dan seorang pendamping berkerudung merah muda bergerak bersama di halaman rumput depan candi',
      caption: 'Siswa dan pendamping menari bersama dalam kegiatan budaya. Pentas yang dirancang bersama memberi ruang setiap anak tampil sesuai kemampuannya.',
      credit: CREDIT
    }
  ],
  answer: '<strong>Hari Disabilitas Internasional</strong> diperingati setiap 3 Desember dan dipromosikan PBB sejak 1992 untuk meningkatkan pemahaman tentang isu disabilitas serta mendukung martabat, hak, dan kesejahteraan penyandang disabilitas. Di Indonesia, peringatan ini sejalan dengan UU 19/2011 yang mengesahkan CRPD dan UU 8/2016 tentang Penyandang Disabilitas.',
  intro: `
            <p>Setiap 3 Desember, sekolah, komunitas, dan lembaga di berbagai negara memperingati Hari Disabilitas Internasional. Di banyak tempat, peringatan ini masih berupa seremoni: spanduk, sambutan, lalu selesai. Padahal hari ini bisa menjadi momen belajar yang bermakna, terutama bagi sekolah inklusi dan keluarga yang membesarkan anak berkebutuhan khusus.</p>
            <p>Artikel ini membahas sejarah singkat peringatan tersebut, maknanya bagi Indonesia, prinsip merayakan yang menghormati martabat, serta ide kegiatan untuk sekolah dan keluarga. Pembahasan ini melengkapi artikel YUKA tentang <a href="penyandang-disabilitas">penyandang disabilitas</a> dan peringatan lain seperti <a href="hari-autis-sedunia">Hari Autis Sedunia</a>.</p>`,
  infoBox: 'Tema peringatan ditetapkan PBB setiap tahun. Artikel ini menyebut tema 2025 yang tercantum di laman resmi PBB; untuk tema tahun berjalan, periksa laman PBB menjelang Desember.',
  sections: [
    {
      id: 'pengertian', h2: 'Apa Itu Hari Disabilitas Internasional',
      toc: 'Apa itu Hari Disabilitas Internasional',
      html: `
            <p>Hari Disabilitas Internasional, dalam bahasa Inggris <em>International Day of Persons with Disabilities</em>, adalah hari peringatan internasional yang dipromosikan Perserikatan Bangsa-Bangsa sejak 1992. Tujuannya meningkatkan pemahaman tentang isu disabilitas dan menggalang dukungan bagi martabat, hak, dan kesejahteraan penyandang disabilitas (${ext(WIKI, 'Wikipedia: International Day of Persons with Disabilities')}).</p>
            <p>Nama awalnya adalah <em>International Day of Disabled Persons</em>, dan baru berganti menjadi nama sekarang pada 2007. Pergantian ini mencerminkan perubahan cara pandang: yang utama adalah orangnya, bukan disabilitasnya. Di Indonesia, perubahan cara pandang serupa terlihat dari istilah resmi "penyandang disabilitas" dalam undang-undang, menggantikan istilah lama yang bernada merendahkan. Penjelasan istilah dan ragamnya ada di artikel <a href="disabilitas-adalah">disabilitas adalah</a> dan <a href="golongan-disabilitas-apa-saja">golongan disabilitas apa saja</a>.</p>
            <p>Setiap tahun PBB menetapkan tema tertentu. Laman resmi PBB mencantumkan tema 2025, yaitu <em>Fostering disability inclusive societies for advancing social progress</em>, atau kurang lebih "membangun masyarakat yang inklusif disabilitas untuk memajukan kemajuan sosial" (${ext(UN, 'United Nations')}).</p>`
    },
    {
      id: 'sejarah', h2: 'Sejarah Singkat: Dari 1981 sampai CRPD',
      toc: 'Sejarah singkat',
      html: `
            <p>Peringatan 3 Desember tidak muncul tiba-tiba. Ia lahir dari rangkaian upaya PBB selama beberapa dekade:</p>
            {{fig:0}}
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Tahun</th><th>Peristiwa</th><th>Artinya</th></tr></thead>
                <tbody>
                    <tr><td>1981</td><td>Tahun Internasional Penyandang Disabilitas (International Year of Disabled Persons)</td><td>Dunia mulai menyusun rencana aksi untuk kesetaraan penyandang disabilitas</td></tr>
                    <tr><td>1983 sampai 1992</td><td>Dekade PBB untuk Penyandang Disabilitas</td><td>Kurun waktu bagi pemerintah dan organisasi menjalankan rencana aksi</td></tr>
                    <tr><td>1992</td><td>PBB mulai mempromosikan peringatan 3 Desember</td><td>Lahirnya hari peringatan tahunan</td></tr>
                    <tr><td>2006</td><td>Konvensi Hak-Hak Penyandang Disabilitas (CRPD) diadopsi Majelis Umum PBB pada 13 Desember</td><td>Perjanjian hak asasi manusia khusus penyandang disabilitas, berlaku sejak 3 Mei 2008</td></tr>
                    <tr><td>2011</td><td>Indonesia mengesahkan CRPD melalui UU Nomor 19 Tahun 2011</td><td>CRPD menjadi bagian dari hukum Indonesia</td></tr>
                    <tr><td>2016</td><td>UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas</td><td>Hak penyandang disabilitas diatur rinci di tingkat nasional</td></tr>
                </tbody>
            </table></div>
            <p>Sumber: ${ext(WIKI, 'sejarah Hari Disabilitas Internasional')}, ${ext(CRPD, 'Convention on the Rights of Persons with Disabilities')}, ${ext(UU19, 'UU 19/2011')}, dan ${ext(UU8, 'UU 8/2016')}.</p>`
    },
    {
      id: 'indonesia', h2: 'Makna bagi Indonesia: UU 19/2011 dan UU 8/2016',
      toc: 'Makna bagi Indonesia',
      html: `
            <p>Bagi Indonesia, Hari Disabilitas Internasional bukan sekadar peringatan dari luar negeri. Dengan ${ext(UU19, 'UU Nomor 19 Tahun 2011')}, Indonesia mengesahkan CRPD, sehingga prinsip-prinsip konvensi itu mengikat negara. Lima tahun kemudian, ${ext(UU8, 'UU Nomor 8 Tahun 2016')} mengatur hak penyandang disabilitas secara rinci, mulai dari pendidikan, pekerjaan, kesehatan, sampai aksesibilitas.</p>
            <p>Undang-undang ini juga memuat hak khusus anak penyandang disabilitas dalam Pasal 5 ayat (3), di antaranya hak atas pelindungan khusus, perawatan dan pengasuhan keluarga, serta perlakuan yang manusiawi sesuai martabat dan hak anak. Rangkuman lengkapnya ada di artikel <a href="apa-saja-hak-anak-berkebutuhan-khusus">apa saja hak anak berkebutuhan khusus</a>.</p>
            <p>Di sekolah, semangat ini diterjemahkan menjadi <a href="pendidikan-inklusi">pendidikan inklusi</a> dan akomodasi yang layak. Di masyarakat, maknanya adalah <a href="inklusi-sosial">inklusi sosial</a>: penyandang disabilitas ikut serta dalam kehidupan bersama sebagai warga yang setara, bukan objek belas kasihan. Hari Disabilitas Internasional adalah momen yang tepat untuk mengevaluasi sejauh mana hal ini sudah terwujud di lingkungan kita.</p>`
    },
    {
      id: 'prinsip', h2: 'Prinsip Merayakan yang Menghormati Martabat',
      toc: 'Prinsip merayakan dengan hormat',
      html: `
            <p>Niat baik bisa berujung pada perayaan yang justru merendahkan. Beberapa prinsip berikut membantu agar peringatan benar-benar menghormati penyandang disabilitas:</p>
            <ul>
                <li><strong>Libatkan sebagai pelaku.</strong> Siswa dan warga penyandang disabilitas ikut merencanakan dan menjalankan acara, bukan sekadar ditampilkan.</li>
                <li><strong>Hindari menjadikan tontonan.</strong> Jangan memamerkan anak sebagai kisah sedih untuk mengundang iba atau sebagai "inspirasi" semata karena ia beraktivitas sehari-hari.</li>
                <li><strong>Minta izin.</strong> Foto, video, dan cerita tentang anak hanya dipublikasikan dengan izin anak dan keluarga.</li>
                <li><strong>Pakai bahasa yang menghormati.</strong> Gunakan istilah resmi dan sebut orangnya lebih dulu.</li>
                <li><strong>Tindak lanjut nyata.</strong> Peringatan lebih bermakna bila menghasilkan perubahan, misalnya perbaikan jalur landai atau pelatihan guru.</li>
            </ul>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Hindari</th><th>Lebih baik</th><th>Alasan</th></tr></thead>
                <tbody>
                    <tr><td>Cacat, orang cacat</td><td>Penyandang disabilitas</td><td>Istilah resmi UU 8/2016 dan tidak bernada merendahkan</td></tr>
                    <tr><td>Penderita autis</td><td>Anak autis atau anak dengan autisme</td><td>Autisme bukan penyakit yang diderita</td></tr>
                    <tr><td>Normal versus tidak normal</td><td>Anak dengan dan tanpa disabilitas</td><td>Tidak menempatkan satu kelompok sebagai ukuran</td></tr>
                    <tr><td>Terkurung di kursi roda</td><td>Pengguna kursi roda</td><td>Kursi roda adalah alat bantu mobilitas, bukan penjara</td></tr>
                </tbody>
            </table></div>`
    },
    {
      id: 'sekolah', h2: 'Ide Kegiatan untuk Sekolah',
      toc: 'Ide kegiatan sekolah',
      html: `
            <p>Kegiatan terbaik adalah yang membuat siswa belajar sesuatu yang baru dan melibatkan semua anak. Beberapa ide yang bisa disesuaikan dengan jenjang:</p>
            {{fig:1}}
            <ul>
                <li><strong>Belajar bersama.</strong> Kenalkan bahasa isyarat dasar, huruf braille, atau cara memandu teman tunanetra. Bahan awal tentang komunikasi dengan teman tunarungu ada di artikel <a href="cara-berkomunikasi-dengan-anak-tuna-rungu">cara berkomunikasi dengan anak tunarungu</a>.</li>
                <li><strong>Audit aksesibilitas.</strong> Siswa memetakan tangga, toilet, dan jalur di sekolah, lalu menyusun usulan perbaikan untuk kepala sekolah. Kegiatan ini sekaligus mengenalkan ragam <a href="disabilitas-fisik">disabilitas fisik</a> dan <a href="disabilitas-sensorik">disabilitas sensorik</a> beserta kebutuhannya.</li>
                <li><strong>Pentas dan pameran karya.</strong> Pameran gambar, musik, atau tari yang dirancang bersama semua siswa. Ide kegiatan seni yang inklusif ada di artikel <a href="seni-dan-kreativitas-untuk-anak-disabilitas">seni dan kreativitas untuk anak disabilitas</a>.</li>
                <li><strong>Olahraga inklusif.</strong> Permainan yang aturannya disesuaikan, misalnya bola dengan lonceng atau estafet dengan jarak berbeda, agar setiap siswa bisa ikut.</li>
                <li><strong>Diskusi kelas.</strong> Membaca cerita tokoh penyandang disabilitas lalu mendiskusikan hambatan yang mereka hadapi di lingkungan, bukan pada diri mereka.</li>
            </ul>
            <p>Kegiatan bisa sekaligus menjadi titik awal program berkelanjutan, misalnya <a href="buddy-system-untuk-anak-abk-di-sekolah">buddy system untuk anak ABK di sekolah</a> yang berjalan sepanjang tahun.</p>`
    },
    {
      id: 'keluarga', h2: 'Ide Kegiatan untuk Keluarga dan Komunitas',
      toc: 'Ide kegiatan keluarga dan komunitas',
      html: `
            <p>Peringatan tidak harus besar. Di rumah, keluarga bisa membaca buku cerita tentang anak dengan beragam kemampuan, menonton film yang menampilkan tokoh penyandang disabilitas secara realistis, lalu membicarakannya bersama. Bagi keluarga yang membesarkan anak berkebutuhan khusus, hari ini bisa menjadi momen merayakan kemajuan anak, sekecil apa pun.</p>
            <p>Libatkan juga kakak atau adik. Saudara kandung sering menjadi pembela paling setia bagi saudaranya, tetapi mereka juga butuh ruang. Panduan <a href="sibling-anak-berkebutuhan-khusus">sibling anak berkebutuhan khusus</a> membahas cara mendampingi mereka.</p>
            <p>Di tingkat komunitas, warga bisa mengadakan kunjungan bersama ke tempat umum yang ramah disabilitas, kerja bakti memperbaiki akses di masjid atau balai warga, atau mengundang penyandang disabilitas berbagi pengalaman tentang pekerjaan dan usaha mereka. Gagasan tentang dunia kerja yang inklusif dibahas di <a href="supported-employment-disabilitas-di-indonesia">supported employment disabilitas di Indonesia</a>. Rencana kunjungan yang aman untuk anak dapat mengacu pada panduan <a href="karyawisata-untuk-anak-berkebutuhan-khusus">karyawisata untuk anak berkebutuhan khusus</a>.</p>
            {{fig:2}}`
    },
    {
      id: 'setelah', h2: 'Setelah Peringatan: Menjaga Semangat Sepanjang Tahun',
      toc: 'Setelah peringatan',
      html: `
            <p>Ukuran keberhasilan Hari Disabilitas Internasional bukan meriahnya acara, melainkan apa yang berubah sesudahnya. Beberapa langkah tindak lanjut yang realistis:</p>
            <ol>
                <li>Catat usulan dari audit aksesibilitas, tetapkan penanggung jawab, dan tinjau kemajuannya beberapa bulan kemudian.</li>
                <li>Jadwalkan pelatihan guru tentang akomodasi yang layak dan strategi kelas inklusi.</li>
                <li>Pertahankan kegiatan bersama yang berhasil, misalnya klub seni inklusif atau olahraga bersama.</li>
                <li>Bagikan cerita kegiatan kepada orang tua dengan izin, untuk membangun dukungan komunitas.</li>
            </ol>
            <p>Bagi yayasan dan sekolah inklusi seperti YUKA, semangat Hari Disabilitas Internasional adalah pekerjaan sehari-hari: memastikan setiap anak mendapat kesempatan belajar, bermain, dan berprestasi. Dukungan masyarakat, termasuk donasi pendidikan, membantu pekerjaan ini terus berjalan.</p>`
    }
  ],
  storyHighlight: 'Sekolah Inklusi Taruna Imani di Sleman mendampingi anak dengan beragam kemampuan belajar bersama setiap hari, dari kegiatan kelas sampai pentas budaya. Sekolah, komunitas, atau keluarga yang ingin berdiskusi tentang kegiatan peringatan Hari Disabilitas Internasional yang inklusif dapat menghubungi tim YUKA lewat WhatsApp.',
  faq: [
    { q: 'Kapan Hari Disabilitas Internasional diperingati?', a: 'Hari Disabilitas Internasional diperingati setiap tanggal 3 Desember. Peringatan ini dipromosikan Perserikatan Bangsa-Bangsa sejak 1992.' },
    { q: 'Apa tujuan Hari Disabilitas Internasional?', a: 'Meningkatkan pemahaman tentang isu disabilitas dan menggalang dukungan bagi martabat, hak, dan kesejahteraan penyandang disabilitas, serta mendorong partisipasi mereka dalam semua aspek kehidupan.' },
    { q: 'Apa nama resmi Hari Disabilitas Internasional dalam bahasa Inggris?', a: 'International Day of Persons with Disabilities. Sampai 2007, namanya International Day of Disabled Persons.' },
    { q: 'Apa hubungan Hari Disabilitas Internasional dengan CRPD?', a: 'Keduanya bagian dari upaya PBB untuk hak penyandang disabilitas. CRPD atau Konvensi Hak-Hak Penyandang Disabilitas diadopsi Majelis Umum PBB pada 13 Desember 2006 dan disahkan Indonesia melalui UU Nomor 19 Tahun 2011.' },
    { q: 'Apa tema Hari Disabilitas Internasional 2025?', a: 'Laman resmi PBB mencantumkan tema 2025: Fostering disability inclusive societies for advancing social progress. Tema ditetapkan setiap tahun, jadi periksa laman PBB untuk tema tahun berjalan.' },
    { q: 'Kegiatan apa yang cocok untuk memperingati Hari Disabilitas Internasional di sekolah?', a: 'Belajar bahasa isyarat atau braille, audit aksesibilitas sekolah, pentas dan pameran karya bersama, olahraga inklusif, dan diskusi kelas tentang hambatan di lingkungan. Libatkan siswa penyandang disabilitas sebagai perencana dan pelaku.' },
    { q: 'Istilah apa yang sebaiknya dipakai untuk menyebut penyandang disabilitas?', a: 'Gunakan istilah resmi penyandang disabilitas, sebut orangnya lebih dulu, dan hindari istilah seperti cacat, penderita, atau tidak normal yang bernada merendahkan.' },
    { q: 'Apa yang bisa dilakukan keluarga pada Hari Disabilitas Internasional?', a: 'Membaca buku atau menonton film yang menampilkan tokoh penyandang disabilitas secara realistis, membicarakannya bersama anak, merayakan kemajuan anak berkebutuhan khusus, dan melibatkan saudara kandung dalam kegiatan.' }
  ],
  relatedIntro: 'Bacaan lain tentang hak dan inklusi penyandang disabilitas:',
  related: [
    { href: 'penyandang-disabilitas', title: 'Penyandang Disabilitas', desc: 'Hak dan kartu penyandang disabilitas.' },
    { href: 'apa-saja-hak-anak-berkebutuhan-khusus', title: 'Apa Saja Hak Anak Berkebutuhan Khusus?', desc: 'Hak anak menurut UU 8/2016 dan PP 13/2020.' },
    { href: 'hari-autis-sedunia', title: 'Hari Autis Sedunia', desc: 'Peringatan 2 April untuk kesadaran autisme.' },
    { href: 'inklusi-sosial', title: 'Apa Itu Inklusi Sosial?', desc: 'Pengertian dan contoh inklusi sosial.' }
  ],
  tags: ['HariDisabilitasInternasional', 'HDI', 'Inklusi', 'PenyandangDisabilitas', 'YUKA'],
  sources: [
    { url: UN, label: 'United Nations. International Day of Persons with Disabilities (3 December)' },
    { url: WIKI, label: 'Wikipedia. International Day of Persons with Disabilities' },
    { url: CRPD, label: 'Wikipedia. Convention on the Rights of Persons with Disabilities' },
    { url: UU19, label: 'Undang-Undang Nomor 19 Tahun 2011 tentang Pengesahan Convention on the Rights of Persons with Disabilities (JDIH BPK)' },
    { url: UU8, label: 'Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (JDIH BPK)' }
  ]
};

'use strict';
// Isi artikel /artikel/karyawisata-untuk-anak-berkebutuhan-khusus (cycle #73, slot 2026-10-07).
// Sudut: merencanakan karyawisata/kunjungan sekolah yang inklusif. Beda dari liburan-dengan-anak-berkebutuhan-khusus
// (liburan keluarga, belum tayang) dan melatih-anak-abk-naik-transportasi-umum (kemandirian bepergian).
// Fakta dicek pada 5 Oktober 2026:
//  - Kokina dan Kern 2010 (PMID 20054628): meta-analisis Social Stories; efektivitas keseluruhan rendah sampai
//    dipertanyakan, lebih efektif untuk perilaku yang tidak sesuai daripada mengajarkan keterampilan sosial.
//  - Hong dkk. 2016 (PMID 27442687): video modeling untuk keterampilan hidup fungsional pada ASD, efek keseluruhan
//    sedang; perlu lebih banyak studi untuk keterampilan akses komunitas.
//  - UU 8/2016 Pasal 18 (teks resmi JDIH BPK, data/sumber): hak aksesibilitas fasilitas publik dan akomodasi yang layak.
//  - Permendikbudristek 48/2023 tentang Akomodasi yang Layak (judul resmi, JDIH Kemendikdasmen).
// Tidak ada nama tempat wisata, tarif, atau statistik yang dikarang. Foto: Dokumentasi YUKA, tanpa keterangan kondisi anak.

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
const KOKINA = 'https://pubmed.ncbi.nlm.nih.gov/20054628/';
const HONG = 'https://pubmed.ncbi.nlm.nih.gov/27442687/';
const UU8 = 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016';
const PERMEN48 = 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-kebudayaan-riset-dan-teknologi-nomor-48-tahun-2023-tentang-akomodasi-yang-layak-untuk-peserta-didik-penyandang-disabilitas-pada-satuan-pendidikan-anak-usia-dini-formal-pendidikan-dasar-pendidikan-menengah-dan-pendidikan-tinggi';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';

module.exports = {
  slug: 'karyawisata-untuk-anak-berkebutuhan-khusus',
  date: '2026-10-07',
  category: 'Pendidikan',
  keyword: 'karyawisata untuk anak berkebutuhan khusus',
  titleTag: 'Karyawisata untuk Anak Berkebutuhan Khusus: Panduan',
  metaDesc: 'Panduan karyawisata untuk anak berkebutuhan khusus: memilih lokasi, cerita sosial, pembagian pendamping, rencana darurat, dan evaluasi sesudahnya.',
  ogTitle: 'Karyawisata untuk Anak Berkebutuhan Khusus: Panduan Guru dan Orang Tua Merencanakan Kunjungan Inklusif',
  ogDesc: 'Cara merencanakan karyawisata sekolah yang aman dan menyenangkan bagi semua siswa: survei lokasi, persiapan anak, rasio pendamping, kebutuhan sensorik, rencana darurat, dan evaluasi.',
  h1: 'Karyawisata untuk Anak Berkebutuhan Khusus: Panduan Merencanakan Kunjungan Sekolah yang Inklusif',
  crumb: 'Karyawisata untuk Anak Berkebutuhan Khusus',
  parent: { name: 'Pendidikan Inklusi', href: 'pendidikan-inklusi' },
  about: ['Karyawisata sekolah', 'Pembelajaran di luar kelas', 'Pendidikan inklusi', 'Akomodasi yang layak', 'Cerita sosial'],
  keywords: 'karyawisata untuk anak berkebutuhan khusus, study tour sekolah inklusi, kunjungan museum anak ABK, field trip anak autis, kegiatan luar kelas ABK',
  readTime: '11 menit baca',
  image: {
    file: 'Dokumentasi/artikel/karyawisata-untuk-anak-berkebutuhan-khusus-gedung-museum.webp',
    w: 1200, h: 1200,
    alt: 'Seorang guru berkerudung berdiri di depan tangga gedung museum berbentuk segitiga hitam dengan bingkai merah di pintu masuknya',
    caption: 'Guru YUKA di depan gedung museum saat survei dan kunjungan sekolah. Mengenal lokasi lebih dulu membantu guru merencanakan rute, titik kumpul, dan tempat istirahat.',
    credit: CREDIT,
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  figures: [
    {
      file: 'Dokumentasi/artikel/karyawisata-untuk-anak-berkebutuhan-khusus-diagram.svg', w: 1200, h: 640,
      alt: 'Diagram daftar periksa karyawisata inklusif dalam empat fase: sebelum berangkat, di perjalanan, di lokasi, dan sesudah pulang',
      caption: 'Empat fase karyawisata yang perlu direncanakan bersama. Setiap fase punya risiko dan kebutuhan yang berbeda.',
      credit: 'Diagram: Tim YUKA.'
    },
    {
      file: 'Dokumentasi/artikel/karyawisata-untuk-anak-berkebutuhan-khusus-istirahat-perjalanan.webp', w: 936, h: 1148,
      alt: 'Seorang remaja berjaket hitam memeluk tas punggungnya sambil beristirahat di bangku dekat jendela kendaraan',
      caption: 'Beristirahat sambil memeluk tas di perjalanan. Perjalanan panjang melelahkan, sehingga jeda dan barang yang menenangkan perlu masuk rencana.',
      credit: CREDIT
    },
    {
      file: 'Dokumentasi/artikel/karyawisata-untuk-anak-berkebutuhan-khusus-kegiatan-budaya.webp', w: 936, h: 1098,
      alt: 'Seorang siswa mengenakan kostum tari tradisional berwarna oranye berdiri di halaman rumput di depan candi batu',
      caption: 'Siswa berkostum tari di halaman candi saat kegiatan budaya. Peran yang jelas dalam kegiatan membuat anak lebih terlibat daripada sekadar menonton.',
      credit: CREDIT
    }
  ],
  answer: '<strong>Karyawisata untuk anak berkebutuhan khusus</strong> perlu direncanakan dalam empat fase: sebelum berangkat, di perjalanan, di lokasi, dan sesudah pulang. Kuncinya survei lokasi, persiapan anak dengan cerita bergambar, pendamping yang cukup, ruang tenang, dan rencana darurat. Dengan persiapan itu, semua siswa bisa ikut belajar di luar kelas.',
  intro: `
            <p>Karyawisata sering menjadi kenangan sekolah yang paling diingat anak. Namun bagi anak berkebutuhan khusus (ABK), hari yang menyenangkan bagi teman-temannya bisa terasa melelahkan: perjalanan panjang, tempat asing, suara ramai, dan jadwal yang berubah-ubah. Akibatnya, tidak sedikit orang tua memilih anaknya tidak ikut, dan anak kehilangan pengalaman belajar yang berharga.</p>
            <p>Panduan ini membantu guru dan orang tua merencanakan karyawisata yang inklusif, sehingga semua siswa bisa ikut dengan aman. Pembahasannya melengkapi konsep <a href="pendidikan-inklusi">pendidikan inklusi</a>: dari memilih lokasi, menyiapkan anak, membagi pendamping, mengelola kebutuhan sensorik, menyiapkan rencana darurat, sampai mengevaluasi kegiatan sesudahnya.</p>`,
  infoBox: 'Setiap anak punya kebutuhan berbeda. Gunakan panduan ini sebagai kerangka, lalu sesuaikan bersama orang tua, guru pembimbing khusus, dan terapis yang mengenal anak. Kondisi kesehatan khusus perlu rencana tertulis dari dokter.',
  sections: [
    {
      id: 'manfaat', h2: 'Mengapa Karyawisata Penting bagi Anak Berkebutuhan Khusus',
      toc: 'Mengapa karyawisata penting',
      html: `
            <p>Belajar di luar kelas memberi pengalaman nyata yang sulit digantikan buku. Anak melihat langsung benda yang selama ini hanya ada di gambar, berlatih antre, membayar, bertanya kepada petugas, dan menyesuaikan diri dengan tempat baru. Bagi anak ABK, kesempatan ini juga menjadi latihan keterampilan hidup di lingkungan yang sesungguhnya.</p>
            <p>Karyawisata juga memperkuat hubungan sosial. Perjalanan bersama, makan bekal bersama, dan berfoto bersama membuat anak merasa menjadi bagian dari kelompok. Program teman sebaya seperti <a href="buddy-system-untuk-anak-abk-di-sekolah">buddy system untuk anak ABK di sekolah</a> bisa diperluas ke kegiatan ini.</p>
            <p>Dari sisi hak, ${ext(UU8, 'UU Nomor 8 Tahun 2016')} Pasal 18 menyebut hak penyandang disabilitas mendapatkan aksesibilitas untuk memanfaatkan fasilitas publik dan mendapatkan akomodasi yang layak. Di lingkungan sekolah, ${ext(PERMEN48, 'Permendikbudristek Nomor 48 Tahun 2023')} mengatur akomodasi yang layak bagi peserta didik penyandang disabilitas. Menyesuaikan kegiatan agar anak bisa ikut adalah wujud nyata akomodasi tersebut. Ringkasan hak anak ada di artikel <a href="apa-saja-hak-anak-berkebutuhan-khusus">apa saja hak anak berkebutuhan khusus</a>.</p>`
    },
    {
      id: 'lokasi', h2: 'Memilih Lokasi dan Melakukan Survei',
      toc: 'Memilih lokasi dan survei',
      html: `
            <p>Lokasi yang baik untuk karyawisata inklusif bukan selalu yang paling terkenal, melainkan yang paling bisa diakses dan dikelola. Sebelum menetapkan tujuan, guru sebaiknya datang lebih dulu atau setidaknya menghubungi pengelola. Gunakan daftar berikut saat survei:</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Aspek</th><th>Yang diperiksa</th><th>Mengapa penting</th></tr></thead>
                <tbody>
                    <tr><td>Akses fisik</td><td>Tangga, jalur landai, lift, jarak parkir ke pintu masuk, permukaan jalan</td><td>Anak dengan kursi roda atau mudah lelah butuh rute yang bisa dilalui</td></tr>
                    <tr><td>Toilet</td><td>Jumlah, kebersihan, toilet yang bisa dipakai bersama pendamping</td><td>Kebutuhan toilet sering menjadi sumber stres terbesar</td></tr>
                    <tr><td>Suasana</td><td>Tingkat keramaian, suara keras, lampu berkedip, pengeras suara</td><td>Anak yang peka sensorik bisa kewalahan</td></tr>
                    <tr><td>Ruang tenang</td><td>Sudut teduh, ruang kosong, atau bangku jauh dari keramaian</td><td>Tempat anak menenangkan diri tanpa harus pulang</td></tr>
                    <tr><td>Keamanan</td><td>Jalan raya, kolam, tebing, pintu keluar yang terbuka</td><td>Mencegah anak terpisah atau celaka</td></tr>
                    <tr><td>Durasi</td><td>Waktu tempuh dan lama kunjungan yang realistis</td><td>Kelelahan memicu perilaku sulit</td></tr>
                </tbody>
            </table></div>
            <p>Saat survei, ambil foto pintu masuk, toilet, titik kumpul, dan tempat makan. Foto-foto ini nanti dipakai untuk menyiapkan anak sebelum berangkat. Tanyakan juga kepada pengelola jam yang biasanya sepi; datang di jam sepi sering kali jauh lebih nyaman bagi anak yang peka keramaian.</p>`
    },
    {
      id: 'persiapan-anak', h2: 'Menyiapkan Anak Sebelum Berangkat',
      toc: 'Menyiapkan anak sebelum berangkat',
      html: `
            <p>Banyak anak ABK, terutama anak autis, merasa lebih tenang bila tahu apa yang akan terjadi. Persiapan bisa dimulai beberapa hari sebelumnya:</p>
            <ul>
                <li><strong>Cerita bergambar.</strong> Susun cerita pendek berisi foto lokasi: naik bus, tiba di museum, melihat koleksi, makan bekal, pulang. Riset tentang Social Stories menunjukkan hasilnya bervariasi; meta-analisis Kokina dan Kern (2010) menilai efektivitas keseluruhannya rendah sampai dipertanyakan, tetapi lebih baik untuk mengurangi perilaku yang tidak sesuai daripada mengajarkan keterampilan sosial (${ext(KOKINA, 'Kokina dan Kern, 2010')}). Gunakan sebagai alat bantu persiapan, bukan satu-satunya strategi.</li>
                <li><strong>Video singkat.</strong> Rekaman pendek lokasi atau perjalanan membantu anak mengenali tempat. Video modeling terbukti cukup efektif untuk mengajarkan keterampilan hidup fungsional pada individu autis, walaupun studi khusus untuk kegiatan di masyarakat masih terbatas (${ext(HONG, 'Hong dkk., 2016')}).</li>
                <li><strong>Jadwal bergambar.</strong> Urutan kegiatan hari itu dalam bentuk gambar, seperti <a href="cara-membuat-jadwal-visual-untuk-anak-autis">jadwal visual untuk anak autis</a>, dibawa dan dicentang selama kunjungan.</li>
                <li><strong>Latihan kecil.</strong> Latih antre, memakai toilet umum, atau memakai penutup telinga di kegiatan sekolah sebelumnya.</li>
            </ul>
            <p>Sampaikan juga kemungkinan perubahan, misalnya "kalau hujan, kita makan di dalam". Anak yang sudah diberi tahu bahwa rencana bisa berubah biasanya lebih siap menghadapi perubahan sungguhan.</p>`
    },
    {
      id: 'pendamping', h2: 'Pembagian Pendamping dan Kelompok Kecil',
      toc: 'Pembagian pendamping',
      html: `
            <p>Jumlah pendamping adalah faktor keamanan terpenting. Tidak ada rasio baku yang berlaku untuk semua, karena kebutuhan setiap anak berbeda. Prinsipnya, anak yang mudah pergi tanpa pamit, butuh bantuan mobilitas, atau sering mengalami krisis perilaku perlu pendamping khusus satu lawan satu, sementara anak lain bisa bergabung dalam kelompok kecil dengan satu pendamping.</p>
            <p>Libatkan semua orang dewasa yang biasa mendampingi anak: <a href="shadow-teacher-adalah">shadow teacher</a>, <a href="gpk-adalah">guru pembimbing khusus</a>, dan relawan orang tua. Setiap pendamping perlu tahu:</p>
            <ul>
                <li>Nama dan wajah anak yang menjadi tanggung jawabnya, serta nomor telepon orang tuanya.</li>
                <li>Tanda awal anak mulai kewalahan dan cara menenangkannya.</li>
                <li>Kebutuhan kesehatan khusus, seperti alergi, obat, atau rencana penanganan kejang.</li>
                <li>Cara komunikasi anak, termasuk kartu gambar atau <a href="aplikasi-komunikasi-aac-terbaik-untuk-anak">aplikasi AAC</a>.</li>
            </ul>
            <p>Bentuk kelompok kecil yang campuran, sehingga anak ABK berjalan bersama teman sekelasnya, bukan dipisahkan dalam satu rombongan khusus. Pengelompokan seperti ini sejalan dengan prinsip <a href="classroom-management-kelas-inklusi">pengelolaan kelas inklusi</a>.</p>
            {{fig:0}}`
    },
    {
      id: 'perjalanan', h2: 'Selama Perjalanan',
      toc: 'Selama perjalanan',
      html: `
            <p>Perjalanan sering kali menjadi bagian tersulit. Tetapkan tempat duduk sebelumnya, misalnya anak yang mudah mabuk perjalanan duduk di depan dan anak yang peka suara duduk jauh dari pengeras suara. Siapkan tas kecil berisi bekal, air minum, kantong plastik, tisu basah, baju ganti, dan benda yang menenangkan anak.</p>
            <p>Untuk perjalanan lebih dari satu jam, rencanakan jeda di tempat istirahat. Kegiatan pengisi seperti buku bergambar atau permainan tebak benda di jalan membantu waktu terasa lebih singkat. Bila sekolah sudah melatih kemandirian bepergian, karyawisata bisa menjadi kesempatan mempraktikkan langkah-langkah dalam artikel <a href="melatih-anak-abk-naik-transportasi-umum">melatih anak ABK naik transportasi umum</a> secara aman dalam rombongan.</p>
            <p>Hitung jumlah siswa setiap kali naik dan turun kendaraan. Kebiasaan sederhana ini mencegah anak tertinggal, terutama di tempat istirahat yang ramai.</p>
            {{fig:1}}`
    },
    {
      id: 'lokasi-kunjungan', h2: 'Di Lokasi: Titik Kumpul, Kegiatan, dan Ruang Tenang',
      toc: 'Di lokasi kunjungan',
      html: `
            <p>Begitu tiba, ulangi aturan sederhana: siapa pendamping masing-masing, di mana titik kumpul, dan apa yang dilakukan bila terpisah. Tunjukkan titik kumpul secara langsung, jangan hanya disebutkan. Tanda pengenal berisi nama sekolah dan nomor pendamping yang bisa dihubungi dipakai setiap anak.</p>
            <p>Agar anak terlibat, beri peran yang jelas: memotret benda tertentu, mencari tiga hewan di diorama, mencatat warna, atau ikut menari dalam kegiatan budaya. Anak yang punya tugas cenderung lebih fokus daripada anak yang hanya diminta "lihat-lihat". Pendekatan ini sejalan dengan <a href="strategi-mengajar-anak-autis-di-kelas">strategi mengajar anak autis di kelas</a>, hanya saja kelasnya berpindah ke tempat kunjungan.</p>
            <p>Sepakati tempat tenang sejak awal. Bila anak mulai menunjukkan tanda kewalahan, seperti menutup telinga, berlari, atau menangis, pendamping membawanya ke tempat itu sebelum menjadi krisis. Panduan <a href="cara-mengatasi-tantrum-anak-autis">cara mengatasi tantrum anak autis</a> membantu pendamping merespons dengan tenang. Mengakhiri kunjungan lebih awal bagi satu anak bukan kegagalan, melainkan keputusan yang menjaga anak.</p>
            {{fig:2}}`
    },
    {
      id: 'darurat', h2: 'Rencana Darurat yang Wajib Disiapkan',
      toc: 'Rencana darurat',
      html: `
            <p>Rencana darurat ditulis, dibagikan ke semua pendamping, dan dibawa dalam bentuk cetak. Isinya mencakup situasi berikut:</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Situasi</th><th>Langkah yang disepakati</th></tr></thead>
                <tbody>
                    <tr><td>Anak terpisah dari rombongan</td><td>Satu pendamping tetap di titik kumpul, yang lain mencari di area yang disukai anak, segera lapor ke petugas lokasi, hubungi orang tua</td></tr>
                    <tr><td>Krisis perilaku</td><td>Bawa ke tempat tenang, kurangi bicara dan rangsangan, pendamping lain menjaga kelompok</td></tr>
                    <tr><td>Masalah kesehatan</td><td>Ikuti rencana medis tertulis, ketahui fasilitas kesehatan terdekat, simpan obat di tas pendamping</td></tr>
                    <tr><td>Cuaca buruk</td><td>Pindahkan kegiatan ke dalam ruangan atau persingkat kunjungan</td></tr>
                    <tr><td>Anak ingin pulang lebih awal</td><td>Siapkan kesepakatan dengan orang tua tentang penjemputan</td></tr>
                </tbody>
            </table></div>
            <p>Pastikan izin tertulis orang tua memuat informasi kesehatan terbaru dan nomor yang bisa dihubungi sepanjang hari. Orang tua yang ingin ikut sebagai relawan bisa membantu, selama pembagian tugasnya jelas sejak awal.</p>`
    },
    {
      id: 'sesudah', h2: 'Sesudah Pulang: Bercerita dan Evaluasi',
      toc: 'Sesudah pulang',
      html: `
            <p>Belajar tidak berhenti saat bus tiba di sekolah. Keesokan harinya, ajak anak bercerita memakai foto kunjungan. Anak yang belum lancar bicara bisa menempelkan foto dan menunjuk bagian yang disukai. Kegiatan ini melatih bahasa, ingatan, dan rasa bangga atas pengalaman yang sudah dilalui. Hasil karya bisa dipajang sebagai bagian dari kegiatan <a href="seni-dan-kreativitas-untuk-anak-disabilitas">seni dan kreativitas</a>.</p>
            <p>Guru dan pendamping kemudian mengevaluasi: apa yang berjalan baik, kapan anak mulai lelah, bagian mana yang memicu kewalahan, dan apa yang perlu diubah. Catatan ini berguna untuk karyawisata berikutnya dan bisa dimasukkan ke dalam <a href="program-pembelajaran-individual">program pembelajaran individual</a> anak, misalnya target antre atau memakai toilet umum.</p>
            <p>Bagikan juga hasilnya kepada orang tua. Cerita bahwa anak berhasil mengikuti seluruh kegiatan, atau berhasil menenangkan diri di tempat tenang, adalah kabar berharga yang memperkuat kerja sama sekolah dan keluarga. Peran keluarga dalam kerja sama ini dibahas di <a href="peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.</p>`
    },
    {
      id: 'kesalahan', h2: 'Kesalahan yang Sering Terjadi',
      toc: 'Kesalahan yang sering terjadi',
      html: `
            <ul>
                <li><strong>Jadwal terlalu padat.</strong> Tiga lokasi dalam satu hari mungkin seru bagi sebagian siswa, tetapi melelahkan bagi banyak anak. Satu atau dua lokasi dengan waktu cukup biasanya lebih berhasil.</li>
                <li><strong>Menyarankan anak tidak ikut.</strong> Sebelum memutuskan anak tidak ikut, cari dulu penyesuaian yang memungkinkan ia ikut, misalnya durasi lebih pendek atau pendamping khusus.</li>
                <li><strong>Persiapan hanya untuk guru.</strong> Anak dan orang tua juga perlu disiapkan, bukan hanya rundown panitia.</li>
                <li><strong>Tidak ada tempat tenang.</strong> Tanpa tempat menenangkan diri, kewalahan kecil mudah berubah menjadi krisis.</li>
                <li><strong>Pendamping tanpa pembekalan.</strong> Relawan yang tidak tahu kebutuhan anak bisa salah merespons di saat genting.</li>
            </ul>
            <p>Dengan perencanaan yang matang, karyawisata menjadi ruang belajar yang setara bagi semua siswa. Hari itu tidak harus sempurna; cukup aman, bermakna, dan membuat anak ingin ikut lagi.</p>`
    }
  ],
  storyHighlight: 'Siswa Sekolah Inklusi Taruna Imani rutin belajar di luar kelas, dari kunjungan museum sampai kegiatan budaya di kompleks candi, didampingi guru dan pendamping. Sekolah atau orang tua yang ingin bertukar pengalaman merencanakan kegiatan luar kelas yang inklusif dapat menghubungi tim YUKA lewat WhatsApp.',
  faq: [
    { q: 'Bagaimana cara merencanakan karyawisata untuk anak berkebutuhan khusus?', a: 'Rencanakan dalam empat fase: sebelum berangkat (survei lokasi, cerita bergambar, izin dan data kesehatan), di perjalanan (tempat duduk, bekal, jeda), di lokasi (titik kumpul, peran anak, ruang tenang), dan sesudah pulang (bercerita dan evaluasi).' },
    { q: 'Apakah anak autis boleh ikut karyawisata sekolah?', a: 'Boleh dan sebaiknya diupayakan. Dengan persiapan seperti cerita bergambar, jadwal visual, pendamping yang mengenal anak, dan tempat tenang di lokasi, banyak anak autis dapat mengikuti karyawisata dengan nyaman.' },
    { q: 'Berapa jumlah pendamping yang ideal saat karyawisata?', a: 'Tidak ada rasio baku untuk semua. Anak yang mudah pergi tanpa pamit, butuh bantuan mobilitas, atau sering mengalami krisis perilaku sebaiknya didampingi satu lawan satu, sedangkan anak lain bisa bergabung dalam kelompok kecil dengan satu pendamping.' },
    { q: 'Apa itu cerita sosial dan apakah efektif?', a: 'Cerita sosial adalah cerita pendek bergambar yang menjelaskan situasi yang akan dihadapi anak. Meta-analisis Kokina dan Kern (2010) menemukan hasilnya bervariasi dan lebih baik untuk mengurangi perilaku yang tidak sesuai, sehingga sebaiknya dipakai bersama strategi persiapan lain.' },
    { q: 'Lokasi seperti apa yang cocok untuk karyawisata inklusif?', a: 'Lokasi dengan akses fisik yang baik, toilet memadai, suasana tidak terlalu bising, ada ruang tenang, aman dari bahaya seperti jalan raya atau kolam, dan waktu tempuh yang realistis. Survei lebih dulu sebelum menetapkan.' },
    { q: 'Apa yang harus dilakukan jika anak terpisah dari rombongan?', a: 'Satu pendamping tetap di titik kumpul, pendamping lain mencari di area yang disukai anak, segera lapor ke petugas lokasi, dan hubungi orang tua. Tanda pengenal berisi nama sekolah dan nomor pendamping sangat membantu.' },
    { q: 'Apa saja yang perlu dibawa anak saat karyawisata?', a: 'Tanda pengenal, bekal dan air minum, baju ganti, tisu basah, kantong plastik, obat bila ada, jadwal bergambar, alat komunikasi bila dipakai, dan benda yang menenangkan seperti penutup telinga atau mainan kecil.' },
    { q: 'Bagaimana menindaklanjuti karyawisata di kelas?', a: 'Ajak anak bercerita memakai foto kunjungan, buat karya dari pengalaman itu, lalu evaluasi bersama pendamping apa yang berhasil dan apa yang perlu diubah. Target seperti antre atau memakai toilet umum bisa dimasukkan ke program pembelajaran individual.' }
  ],
  relatedIntro: 'Bacaan lanjutan untuk guru dan orang tua:',
  related: [
    { href: 'buddy-system-untuk-anak-abk-di-sekolah', title: 'Buddy System untuk Anak ABK di Sekolah', desc: 'Menyiapkan teman pendamping sebaya yang terlatih.' },
    { href: 'melatih-anak-abk-naik-transportasi-umum', title: 'Melatih Anak ABK Naik Transportasi Umum', desc: 'Langkah bertahap menuju perjalanan mandiri.' },
    { href: 'cara-membuat-jadwal-visual-untuk-anak-autis', title: 'Cara Membuat Jadwal Visual untuk Anak Autis', desc: 'Alat bantu agar anak tahu urutan kegiatan.' },
    { href: 'strategi-mengajar-anak-autis-di-kelas', title: 'Strategi Mengajar Anak Autis di Kelas', desc: 'Strategi berbasis bukti untuk guru.' }
  ],
  tags: ['Karyawisata', 'SekolahInklusi', 'BelajarDiLuarKelas', 'PendidikanInklusi', 'YUKA'],
  sources: [
    { url: KOKINA, label: 'Kokina A, Kern L. Social Story interventions for students with autism spectrum disorders: a meta-analysis. J Autism Dev Disord, 2010' },
    { url: HONG, label: 'Hong ER dkk. The effects of video modeling in teaching functional living skills to persons with ASD: A meta-analysis of single-case studies. Res Dev Disabil, 2016' },
    { url: UU8, label: 'Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (JDIH BPK): Pasal 18' },
    { url: PERMEN48, label: 'Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas (JDIH Kemendikdasmen)' }
  ]
};

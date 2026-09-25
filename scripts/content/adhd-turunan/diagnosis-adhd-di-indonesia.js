'use strict';
const { a, S, seri } = require('./_sumber');

module.exports = {
  slug: 'diagnosis-adhd-di-indonesia',
  titleTag: 'Diagnosis ADHD di Indonesia: Alur dan Siapa yang Memeriksa',
  metaDesc: 'Diagnosis ADHD di Indonesia dimulai dari skrining tumbuh kembang di puskesmas lalu rujukan ke spesialis. Pahami alur, kriteria, dan persiapannya di sini.',
  ogTitle: 'Diagnosis ADHD di Indonesia: Alur dari Puskesmas ke Spesialis, Kriteria, dan Persiapan Orang Tua',
  ogDesc: 'Cara ADHD didiagnosis di Indonesia menurut Permenkes 66/2014, CDC, AAP, NIMH, dan NICE: skrining GPPH, rujukan, siapa yang berwenang, dan apa yang perlu dibawa.',
  h1: 'Diagnosis ADHD di Indonesia: Alur Pemeriksaan dan Siapa yang Memeriksa',
  crumb: 'Diagnosis ADHD di Indonesia',
  keywords: 'diagnosis adhd, diagnosa adhd, adhd diagnosis, tes adhd anak, cara mengetahui anak adhd, periksa adhd di mana, deteksi dini gpph, skrining adhd puskesmas',
  readTime: '10 menit baca',
  image: {
    file: 'assets/images/artikel/puskesmas-kelurahan-gelora-jakarta-wikimedia.webp', w: 1000, h: 750,
    alt: 'Bagian depan Puskesmas Kelurahan Gelora di Tanah Abang, Jakarta Pusat, dengan papan nama hijau bertuliskan Puskesmas Kelurahan Gelora dan daftar layanan rawat jalan',
    caption: 'Puskesmas Kelurahan Gelora, Tanah Abang, Jakarta Pusat. Puskesmas adalah salah satu pintu masuk pemantauan tumbuh kembang anak, termasuk deteksi dini GPPH, sebelum rujukan ke rumah sakit.',
    credit: { name: 'Hutomo', source: 'https://commons.wikimedia.org/wiki/File:Puskesmas_Kelurahan_Gelora.jpg', license: 'CC BY 4.0', licenseUrl: 'https://creativecommons.org/licenses/by/4.0/deed.id', note: 'diperkecil dan dikonversi ke WebP' }
  },
  answer: '<strong>Diagnosis ADHD di Indonesia biasanya dimulai dari pemantauan tumbuh kembang di puskesmas atau dokter anak.</strong> Bila skrining mengarah ke GPPH, anak dirujuk ke rumah sakit yang memiliki layanan tumbuh kembang atau kesehatan jiwa anak. Diagnosis ditegakkan dokter spesialis anak, psikiater, atau psikolog klinis lewat wawancara, observasi, dan kuesioner, bukan satu tes tunggal.',
  intro: `
            <p>Orang tua yang curiga anaknya ADHD sering bingung harus mulai dari mana: ke psikolog, ke dokter anak, atau langsung ke rumah sakit besar? Artikel ini menjelaskan alur yang tercantum dalam peraturan Kementerian Kesehatan, cara tenaga kesehatan menegakkan diagnosis menurut pedoman internasional, dan apa yang bisa Ayah dan Bunda siapkan supaya pemeriksaan berjalan efektif. Gambaran umum ADHD ada di artikel utama <a href="adhd-adalah">ADHD adalah</a>.</p>`,
  sections: [
    {
      id: 'cara-diagnosis', h2: 'Bagaimana Cara Diagnosis ADHD?',
      html: `
            <p>Menurut ${a('cdcDiag', 'CDC')}, tidak ada satu tes tunggal untuk mendiagnosis ADHD. Diagnosis adalah proses bertahap, karena banyak kondisi lain seperti gangguan tidur, kecemasan, depresi, dan kesulitan belajar tertentu bisa menimbulkan gejala yang mirip. Tahapan yang umumnya dilalui:</p>
            <ol>
                <li><strong>Pemeriksaan medis</strong>, termasuk tes pendengaran dan penglihatan, untuk menyingkirkan masalah lain yang gejalanya mirip ADHD (CDC).</li>
                <li><strong>Mengumpulkan informasi dari beberapa pihak.</strong> American Academy of Pediatrics menganjurkan dokter menanyakan perilaku anak kepada orang tua, guru, dan orang dewasa lain yang mengasuh anak, di rumah, di sekolah, dan saat bersama teman sebaya.</li>
                <li><strong>Kuesioner atau skala penilaian perilaku</strong> yang terstandar untuk melihat apakah kriteria diagnosis terpenuhi (${a('nimh', 'NIMH')}).</li>
                <li><strong>Tes psikologis</strong> bila perlu, misalnya untuk menilai memori kerja, fungsi eksekutif, dan kemampuan berpikir, sekaligus mendeteksi atau menyingkirkan gangguan belajar (NIMH).</li>
            </ol>
            <p>${a('aapDiag', 'American Academy of Pediatrics')} juga menjelaskan bahwa sampai saat ini tidak ada tes lain yang terbukti dapat mendiagnosis ADHD. Pemeriksaan darah, pencitraan otak, atau EEG baru dipertimbangkan bila dokter melihat tanda kondisi lain. Pedoman ${a('nice', 'NICE (rekomendasi 1.3.2)')} menegaskan diagnosis tidak boleh ditegakkan hanya dari skala penilaian atau hasil observasi, walaupun alat seperti skala Conners berguna sebagai pelengkap.</p>`
    },
    {
      id: 'alur-indonesia', h2: 'Di Mana Memeriksakan ADHD di Indonesia?',
      toc: 'Alur pemeriksaan di Indonesia',
      html: `
            <p>Di Indonesia, pemantauan tumbuh kembang anak, termasuk gangguan pemusatan perhatian dan hiperaktivitas (GPPH), diatur dalam ${a('pmk66', 'Permenkes Nomor 66 Tahun 2014')}. Peraturan ini menyebut pemantauan dilakukan di fasilitas pelayanan kesehatan dasar dan di taman kanak-kanak, dengan guru TK bekerja sama dengan orang tua dan tenaga kesehatan. Alurnya dalam ${a('pmk66pdf', 'lampiran peraturan tersebut')} kurang lebih sebagai berikut.</p>
            <h3>1. Skrining rutin di layanan kesehatan dasar</h3>
            <p>Anak umur 36 sampai 72 bulan dijadwalkan menjalani deteksi dini masalah mental emosional setiap 6 bulan, memakai Kuesioner Masalah Mental Emosional (KMME) berisi 12 pertanyaan. Jadwal ini mengikuti jadwal pemeriksaan perkembangan anak.</p>
            <h3>2. Deteksi dini GPPH atas indikasi</h3>
            <p>Deteksi dini GPPH ditujukan untuk anak umur 36 bulan ke atas dan dilakukan bila ada keluhan dari orang tua, pengasuh, guru TK, atau kecurigaan tenaga kesehatan dan kader, misalnya anak tidak bisa duduk tenang, selalu bergerak tanpa tujuan dan tidak kenal lelah, atau suasana hatinya berubah mendadak. Alatnya adalah formulir deteksi dini GPPH (<em>Abbreviated Conners Rating Scale</em>) berisi 10 pertanyaan. Tiap jawaban diberi nilai 0 (tidak ditemukan) sampai 3 (selalu ada).</p>
            <h3>3. Tindak lanjut hasil skrining</h3>
            <ul>
                <li><strong>Nilai total 13 atau lebih:</strong> anak kemungkinan mengalami GPPH dan perlu dirujuk ke rumah sakit yang memiliki fasilitas kesehatan jiwa atau tumbuh kembang anak.</li>
                <li><strong>Nilai kurang dari 13 tetapi petugas masih ragu:</strong> pemeriksaan diulang satu bulan kemudian dengan bertanya kepada orang-orang terdekat anak.</li>
            </ul>
            <p>Skor skrining bukan diagnosis. Skor itu hanya menentukan apakah anak perlu diperiksa lebih lanjut oleh spesialis. Orang tua juga tidak harus menunggu jadwal skrining: bila khawatir, Ayah dan Bunda bisa langsung menyampaikannya ke puskesmas atau dokter anak dan meminta arahan rujukan.</p>`
    },
    {
      id: 'siapa', h2: 'Siapa yang Berwenang Mendiagnosis ADHD?',
      toc: 'Siapa yang berwenang mendiagnosis',
      html: `
            <p>${a('cdcDiag', 'CDC')} menyebut diagnosis ADHD dapat ditegakkan tenaga kesehatan jiwa seperti psikolog atau psikiater, atau dokter layanan primer seperti dokter spesialis anak. Di Indonesia, padanannya adalah:</p>
            <ul>
                <li><strong>Dokter spesialis anak (Sp.A)</strong>, terutama yang mendalami tumbuh kembang anak,</li>
                <li><strong>Dokter spesialis kedokteran jiwa (psikiater)</strong>, terutama yang menangani anak dan remaja, dan</li>
                <li><strong>Psikolog klinis</strong>, yang melakukan asesmen psikologis dan menilai kemungkinan gangguan belajar.</li>
            </ul>
            <p>Lampiran ${a('pmk66pdf', 'Permenkes 66/2014')} mencantumkan rujukan ke psikiater bila diperlukan sebagai bagian dari standar penanganan GPPH. Guru, terapis, dan kader kesehatan berperan penting dalam mengamati dan melaporkan perilaku anak, tetapi tidak menegakkan diagnosis. Hanya dokter yang dapat meresepkan obat.</p>`
    },
    {
      id: 'kriteria', h2: 'Apa Kriteria Diagnosis ADHD?',
      html: `
            <p>Menurut ${a('aapDiag', 'American Academy of Pediatrics')}, diagnosis ADHD dikonfirmasi bila:</p>
            <ul>
                <li>pada anak usia 4 sampai 17 tahun ditemukan <strong>6 gejala atau lebih</strong> (usia 17 tahun ke atas cukup 5 gejala) dari kelompok kurang perhatian atau hiperaktif-impulsif,</li>
                <li>gejala muncul di <strong>dua tempat atau lebih</strong>, seperti rumah, sekolah, dan situasi sosial,</li>
                <li>gejala <strong>mengganggu secara bermakna</strong> kemampuan anak menjalani kegiatan sehari-hari, seperti belajar dan berteman, dan</li>
                <li>gejala dimulai <strong>sebelum usia 12 tahun</strong>, walaupun mungkin baru dikenali belakangan.</li>
            </ul>
            <p>${a('nimh', 'NIMH')} menambahkan syarat bahwa gejala harus berlangsung minimal <strong>enam bulan</strong>. Dokter juga akan menilai apakah ada kondisi lain yang lebih menjelaskan gejala anak, atau yang muncul bersamaan dengan ADHD. Seperti apa gejala di tiap usia, lihat <a href="ciri-ciri-anak-adhd-berdasarkan-usia">ciri-ciri anak ADHD berdasarkan usia</a>.</p>`
    },
    {
      id: 'persiapan', h2: 'Apa yang Perlu Disiapkan Sebelum Konsultasi?',
      toc: 'Persiapan sebelum konsultasi',
      html: `
            <p>Informasi dari orang tua dan guru adalah bahan utama diagnosis. Supaya kunjungan tidak sia-sia, siapkan:</p>
            <ol>
                <li><strong>Catatan perilaku</strong> selama beberapa minggu: perilaku apa, kapan, di mana, seberapa sering, dan apa dampaknya.</li>
                <li><strong>Laporan dari guru</strong> atau buku penghubung. ${a('aapDiag', 'AAP')} menyebut dokter perlu mendapat informasi langsung dari guru, dan mungkin meminta rapor, hasil tes, serta contoh tugas anak.</li>
                <li><strong>Riwayat tumbuh kembang</strong>: kapan anak mulai berjalan dan bicara, riwayat kehamilan dan kelahiran, termasuk bila lahir prematur. Buku KIA sangat membantu.</li>
                <li><strong>Riwayat kesehatan</strong>: masalah pendengaran, penglihatan, tidur, kejang, atau obat yang sedang diminum.</li>
                <li><strong>Riwayat keluarga</strong>: apakah ada anggota keluarga dengan kesulitan serupa. Alasannya dijelaskan di <a href="penyebab-adhd-pada-anak">penyebab ADHD pada anak</a>.</li>
            </ol>
            <p>Bila anak bersekolah di rumah, AAP menekankan pentingnya menilai perilaku anak di luar rumah, misalnya di tempat les, kegiatan olahraga, atau kegiatan keagamaan.</p>`
    },
    {
      id: 'bukan-adhd', h2: 'Bagaimana Kalau Hasilnya Bukan ADHD?',
      toc: 'Kalau hasilnya bukan ADHD',
      html: `
            <p>Hasil pemeriksaan yang tidak mengarah ke ADHD tetap berharga. ${a('cdcDiag', 'CDC')} menyebut gangguan tidur, kecemasan, depresi, dan kesulitan belajar tertentu dapat menimbulkan gejala mirip ADHD, sedangkan ${a('nhs', 'NHS')} menambahkan autisme dan sindrom Tourette sebagai kondisi yang perlu dipertimbangkan dokter. Menemukan penyebab sebenarnya berarti anak bisa mendapat bantuan yang tepat.</p>
            <p>Sebaliknya, ADHD juga sering muncul bersamaan dengan kondisi lain. Pelajari lebih jauh di <a href="diagnosis-banding-adhd">diagnosis banding ADHD</a> dan <a href="perbedaan-adhd-dan-autis-pada-anak">perbedaan ADHD dan autis pada anak</a>.</p>`
    },
    {
      id: 'setelah-diagnosis', h2: 'Setelah Diagnosis, Apa Selanjutnya?',
      toc: 'Setelah diagnosis',
      html: `
            <p>Diagnosis adalah awal, bukan akhir. Tenaga kesehatan akan menyusun rencana penanganan sesuai usia anak, yang menurut ${a('cdcTreat', 'CDC')} idealnya melibatkan orang tua, guru, dan tenaga kesehatan secara bersama-sama serta dipantau berkala. Pilihan penanganannya kami rangkum di <a href="terapi-adhd-pada-anak">terapi dan penanganan ADHD pada anak</a>.</p>
            <p>Ceritakan diagnosis kepada sekolah supaya guru dapat menyesuaikan cara mengajar. Guru dapat memulai dari panduan <a href="strategi-mengajar-anak-adhd-di-sekolah">strategi mengajar anak ADHD di sekolah</a>.</p>`
    }
  ],
  faq: [
    { q: 'Tes ADHD anak bisa dilakukan di mana?', a: 'Pemeriksaan bisa dimulai di puskesmas atau dokter anak, yang melakukan skrining tumbuh kembang termasuk deteksi dini GPPH untuk anak 36 bulan ke atas. Bila hasilnya mengarah ke GPPH, anak dirujuk ke rumah sakit dengan layanan tumbuh kembang atau kesehatan jiwa anak.' },
    { q: 'Apakah ada tes darah atau scan otak untuk ADHD?', a: 'Tidak ada tes darah, pencitraan otak, atau EEG yang terbukti dapat mendiagnosis ADHD. Menurut American Academy of Pediatrics, pemeriksaan itu hanya dilakukan bila dokter melihat tanda kondisi lain.' },
    { q: 'Apakah psikolog bisa mendiagnosis ADHD?', a: 'Ya. CDC menyebut diagnosis ADHD dapat ditegakkan psikolog, psikiater, atau dokter spesialis anak. Namun hanya dokter yang dapat meresepkan obat bila diperlukan.' },
    { q: 'Berapa skor skrining GPPH yang perlu dirujuk?', a: 'Pada formulir deteksi dini GPPH dalam lampiran Permenkes 66/2014, nilai total 13 atau lebih berarti anak kemungkinan GPPH dan perlu dirujuk ke rumah sakit. Skor ini hasil skrining, bukan diagnosis.' }
  ],
  related: seri('diagnosis-adhd-di-indonesia'),
  sources: [S.pmk66, S.pmk66pdf, S.cdcDiag, S.aapDiag, S.nimh, S.nice, S.nhs, S.cdcTreat, S.kemenkes],
  tags: ['ADHD', 'DiagnosisADHD', 'GPPH', 'Puskesmas', 'TumbuhKembangAnak', 'YUKA']
};

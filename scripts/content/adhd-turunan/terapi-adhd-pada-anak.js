'use strict';
const { a, S, seri } = require('./_sumber');

module.exports = {
  slug: 'terapi-adhd-pada-anak',
  titleTag: 'Terapi ADHD pada Anak: Pilihan Penanganan Sesuai Usia',
  metaDesc: 'Terapi ADHD pada anak disesuaikan usia: pelatihan orang tua, terapi perilaku, dukungan sekolah, dan obat dari dokter. Pelajari pilihannya di sini.',
  ogTitle: 'Terapi dan Penanganan ADHD pada Anak: Pilihan Sesuai Usia Menurut Pedoman Resmi',
  ogDesc: 'Ringkasan penanganan ADHD anak menurut CDC, AAP, NICE, NIMH, dan Permenkes 66/2014: terapi perilaku, peran sekolah, obat, dan strategi di rumah. Tanpa dosis.',
  h1: 'Terapi dan Penanganan ADHD pada Anak: Pilihan Sesuai Usia',
  crumb: 'Terapi ADHD pada Anak',
  keywords: 'terapi adhd, terapi adhd pada anak, penanganan adhd, cara mengatasi adhd, cara menangani anak adhd, obat adhd adalah, terapi perilaku adhd, adhd bisa sembuh',
  readTime: '11 menit baca',
  image: {
    file: 'assets/images/artikel/tangan-menyusun-balok-bentuk-warna-wikimedia.webp', w: 1000, h: 668,
    alt: 'Tangan seorang tenaga kesehatan berbaju hijau toska menyusun balok kayu warna-warni berbagai bentuk di papan pasak, dengan mainan edukatif lain di meja',
    caption: 'Alat bermain terstruktur seperti balok bentuk dan warna sering dipakai dalam kegiatan terapi dan belajar. Pilihan terapi ADHD yang tepat ditentukan bersama tenaga kesehatan sesuai usia dan kebutuhan anak.',
    credit: { name: 'Shixart1985', source: 'https://commons.wikimedia.org/wiki/File:Child_engaging_in_colorful_wooden_block_sorting_activity.jpg', license: 'CC BY 2.0', licenseUrl: 'https://creativecommons.org/licenses/by/2.0/deed.id', note: 'diperkecil dan dikonversi ke WebP' }
  },
  answer: '<strong>Terapi ADHD pada anak disesuaikan dengan usianya.</strong> Untuk anak di bawah 6 tahun, American Academy of Pediatrics menempatkan pelatihan orang tua dalam manajemen perilaku sebagai langkah pertama sebelum obat dicoba. Untuk anak 6 tahun ke atas dianjurkan kombinasi obat dan terapi perilaku, ditambah dukungan sekolah. Semua obat harus diresepkan dan dipantau dokter.',
  intro: `
            <p>Setelah diagnosis ADHD ditegakkan, pertanyaan berikutnya hampir selalu soal penanganan: apakah harus minum obat, terapi apa yang paling membantu, dan apa yang bisa dilakukan di rumah. Artikel ini merangkum rekomendasi pedoman resmi tanpa menyebut merek maupun dosis, karena keputusan itu hanya boleh diambil dokter yang memeriksa anak. Gambaran umum ADHD ada di artikel utama <a href="adhd-adalah">ADHD adalah</a>.</p>`,
  sections: [
    {
      id: 'bisa-sembuh', h2: 'Apakah ADHD Bisa Sembuh?',
      html: `
            <p>Menurut ${a('nimh', 'NIMH')}, belum ada obat yang menyembuhkan ADHD, tetapi penanganan yang tersedia dapat mengurangi gejala dan memperbaiki fungsi sehari-hari. ${a('cdcTreat', 'CDC')} menyatakan ADHD sering kali dapat dikelola dengan penanganan yang tepat, dan pilihan terbaik bergantung pada anak, keluarganya, dan lingkungannya.</p>
            <p>Karena itu tujuan terapi bukan "menghilangkan ADHD", melainkan membantu anak belajar, berteman, dan menjalani hari dengan lebih baik. Waspadai produk atau layanan yang menjanjikan ADHD "sembuh total" dalam waktu singkat.</p>`
    },
    {
      id: 'sesuai-usia', h2: 'Bagaimana Penanganan ADHD pada Anak Sesuai Usia?',
      toc: 'Penanganan sesuai usia',
      html: `
            <p>Rekomendasi ${a('aapGuide', 'American Academy of Pediatrics tahun 2019')} yang dirangkum ${a('cdcTreat', 'CDC')}:</p>
            <div style="overflow-x:auto;">
            <table class="classification-table">
                <thead><tr><th>Usia</th><th>Langkah yang direkomendasikan</th></tr></thead>
                <tbody>
                    <tr><td>Di bawah 6 tahun</td><td>Pelatihan orang tua dalam manajemen perilaku sebagai lini pertama, sebelum obat dicoba.</td></tr>
                    <tr><td>6 sampai 12 tahun</td><td>Obat bersama terapi perilaku, termasuk pelatihan orang tua, ditambah intervensi perilaku di kelas dan dukungan sekolah.</td></tr>
                    <tr><td>Remaja</td><td>Obat bersama jenis terapi perilaku dan pelatihan lain yang sesuai untuk remaja, ditambah dukungan sekolah.</td></tr>
                </tbody>
            </table>
            </div>
            <p>Pedoman Inggris ${a('nice', 'NICE NG87')} lebih berhati-hati soal obat. Untuk anak di bawah 5 tahun, NICE menganjurkan program pelatihan orang tua berkelompok yang berfokus pada ADHD sebagai lini pertama, dan meminta obat <strong>tidak</strong> diberikan tanpa pendapat kedua dari layanan spesialis ADHD anak usia dini. Untuk anak 5 tahun ke atas, NICE menyarankan obat hanya bila gejala masih menimbulkan gangguan bermakna yang menetap setelah penyesuaian lingkungan dilakukan dan dievaluasi.</p>
            <p>Di Indonesia, lampiran ${a('pmk66pdf', 'Permenkes 66/2014')} mencantumkan standar penanganan GPPH berupa pendekatan pendidikan, pendekatan perilaku, terapi okupasi, pemberian pengobatan, dan rujukan ke psikiater bila perlu.</p>`
    },
    {
      id: 'terapi-perilaku', h2: 'Apa Itu Terapi Perilaku untuk Anak ADHD?',
      toc: 'Terapi perilaku',
      html: `
            <p>Terapi perilaku bertujuan memperkuat perilaku positif dan mengurangi perilaku bermasalah, sekaligus melatih kemampuan anak mengendalikan diri. ${a('cdcTreat', 'CDC')} menyebut terapi perilaku efektif untuk ADHD, paling efektif pada anak kecil bila dijalankan oleh orang tua, dan sering bermanfaat bila dimulai segera setelah diagnosis.</p>
            <p>Untuk anak kecil, CDC menjelaskan alasan terapi perilaku didahulukan sebelum obat:</p>
            <ul>
                <li>pelatihan orang tua memberi keterampilan dan strategi untuk membantu anak,</li>
                <li>pelatihan orang tua terbukti sama efektifnya dengan obat untuk ADHD pada anak kecil,</li>
                <li>anak kecil mengalami efek samping obat ADHD lebih banyak daripada anak yang lebih besar, dan</li>
                <li>efek jangka panjang obat ADHD pada anak kecil belum banyak diteliti.</li>
            </ul>
            <p>${a('nimh', 'NIMH')} menyebut beberapa bentuk intervensi psikososial yang dapat membantu: terapi perilaku (bantuan praktis mengatur tugas, belajar keterampilan sosial, memantau perilaku sendiri), terapi kognitif perilaku yang melatih fokus dan pengaturan tugas pada anak yang lebih besar, serta terapi keluarga. Terapi juga sangat membantu bila ADHD muncul bersama kecemasan, depresi, atau masalah perilaku.</p>
            <p>Pelatihan orang tua bukan tanda pengasuhan yang salah. ${a('nice', 'NICE')} meminta tenaga kesehatan menegaskan hal ini kepada orang tua: tujuannya mengoptimalkan keterampilan pengasuhan untuk anak yang kebutuhannya memang lebih tinggi.</p>`
    },
    {
      id: 'obat', h2: 'Obat ADHD Adalah Apa, dan Kapan Diperlukan?',
      toc: 'Obat ADHD',
      html: `
            <p>Obat ADHD adalah obat resep yang membantu anak mengelola gejala sehari-hari. Kami sengaja tidak menyebut nama obat dan dosis di sini, karena pilihannya ditentukan dokter setelah pemeriksaan. Yang perlu orang tua ketahui secara umum:</p>
            <ul>
                <li><strong>Stimulan</strong> adalah jenis obat ADHD yang paling dikenal dan paling banyak dipakai. Menurut ${a('cdcTreat', 'CDC')}, 70 sampai 80 persen anak dengan ADHD mengalami gejala yang lebih sedikit saat memakai obat yang bekerja cepat ini. ${a('nimh', 'NIMH')} menjelaskan obat ini bekerja dengan meningkatkan kadar zat kimia otak yang terlibat dalam berpikir dan memusatkan perhatian.</li>
                <li><strong>Nonstimulan</strong> bekerja lebih lambat daripada stimulan, tetapi menurut CDC efeknya dapat bertahan sampai 24 jam.</li>
                <li><strong>Efek samping</strong> yang disebut CDC antara lain berkurangnya nafsu makan dan gangguan tidur. Setiap anak merespons berbeda, sehingga dokter mungkin perlu mencoba beberapa jenis obat atau takaran.</li>
                <li><strong>Harus diresepkan dan dipantau tenaga kesehatan.</strong> NIMH meminta orang tua memberi tahu dokter semua obat lain yang sedang diminum anak, karena beberapa obat dapat berinteraksi.</li>
            </ul>
            <div class="info-box">
                <h4>Jangan lakukan sendiri</h4>
                <p style="margin-bottom:0;">Jangan membeli obat ADHD tanpa resep, meminjam obat anak lain, atau menghentikan dan mengubah takaran tanpa berbicara dengan dokter. Bila ada efek samping yang mengganggu, catat dan sampaikan kepada dokter yang meresepkan.</p>
            </div>`
    },
    {
      id: 'sekolah-terapi-lain', h2: 'Apa Peran Sekolah dan Terapi Lain?',
      toc: 'Peran sekolah dan terapi lain',
      html: `
            <p>${a('cdcTreat', 'CDC')} mencatat rekomendasi AAP juga mencakup intervensi perilaku di kelas dan dukungan sekolah. Artinya sekolah bisa menjadi bagian dari penanganan, bukan sekadar tempat anak belajar. Panduan praktis untuk guru ada di <a href="strategi-mengajar-anak-adhd-di-sekolah">strategi mengajar anak ADHD di sekolah</a>.</p>
            <p>Terapi okupasi tercantum dalam standar penanganan GPPH di lampiran ${a('pmk66pdf', 'Permenkes 66/2014')}. Perlu tidaknya terapi okupasi ditentukan dokter sesuai kebutuhan anak. Pilihan yang lebih baru seperti pelatihan kognitif dan <em>neurofeedback</em> masih diteliti. ${a('nimh', 'NIMH')} menyebut pilihan itu biasanya baru dijajaki setelah obat dan psikoterapi dicoba.</p>
            <p>Soal makanan dan suplemen, ulasan bukti lengkapnya ada di <a href="suplemen-untuk-anak-adhd">suplemen untuk anak ADHD</a> dan <a href="makanan-yang-harus-dihindari-anak-adhd">makanan yang harus dihindari anak ADHD</a>.</p>`
    },
    {
      id: 'di-rumah', h2: 'Cara Mengatasi Anak ADHD di Rumah',
      toc: 'Strategi di rumah',
      html: `
            <p>Strategi berikut dirangkum dari ${a('cdcTreat', 'CDC')} dan ${a('nhs', 'NHS')}. Strategi ini melengkapi, bukan menggantikan, rencana terapi dari tenaga kesehatan:</p>
            <ol>
                <li><strong>Jadwal yang sama setiap hari</strong>, dari bangun sampai tidur.</li>
                <li><strong>Tempat tetap untuk barang</strong> seperti tas sekolah, pakaian, dan mainan, supaya tidak mudah hilang.</li>
                <li><strong>Kurangi gangguan saat belajar</strong>: matikan televisi, batasi suara, dan sediakan meja yang rapi.</li>
                <li><strong>Beri pilihan terbatas</strong>, misalnya dua pilihan baju atau menu, supaya anak tidak kewalahan.</li>
                <li><strong>Instruksi singkat dan jelas</strong>, satu per satu, dengan suara tenang.</li>
                <li><strong>Pecah tugas besar</strong> menjadi langkah pendek. NHS mencontohkan membagi PR atau waktu makan menjadi sesi 15 sampai 20 menit dengan jeda.</li>
                <li><strong>Pakai tabel target dan penghargaan</strong> untuk perilaku positif, dengan target kecil yang realistis.</li>
                <li><strong>Ganti omelan dan pukulan</strong> dengan instruksi efektif, <em>time-out</em>, atau pencabutan hak istimewa sebagai konsekuensi.</li>
                <li><strong>Cari kekuatan anak</strong>, entah di olahraga, seni, musik, atau bermain, supaya ia punya pengalaman berhasil.</li>
                <li><strong>Jaga gizi, aktivitas fisik, dan tidur</strong>, yang menurut CDC membantu mencegah gejala memburuk.</li>
            </ol>`
    },
    {
      id: 'evaluasi', h2: 'Bagaimana Mengetahui Terapinya Berhasil?',
      toc: 'Menilai keberhasilan terapi',
      html: `
            <p>${a('cdcTreat', 'CDC')} menyebut rencana penanganan yang baik selalu dipantau ketat, apakah dan seberapa besar membantu perilaku anak, lalu disesuaikan bila perlu. Beberapa pertanyaan yang bisa dibawa saat kontrol:</p>
            <ul>
                <li>Perubahan apa yang sudah terlihat di rumah dan di sekolah sejak terapi dimulai?</li>
                <li>Apakah ada efek samping, misalnya nafsu makan turun atau sulit tidur, dan bagaimana mengatasinya?</li>
                <li>Kapan rencana terapi akan dievaluasi ulang, dan apa ukurannya?</li>
                <li>Apa yang perlu disampaikan kepada guru supaya penanganan di sekolah sejalan?</li>
            </ul>
            <p>Belum punya diagnosis? Mulai dari <a href="diagnosis-adhd-di-indonesia">diagnosis ADHD di Indonesia</a>.</p>`
    }
  ],
  faq: [
    { q: 'Apakah anak ADHD harus minum obat?', a: 'Tidak selalu. Untuk anak di bawah 6 tahun, pedoman AAP yang dirangkum CDC menempatkan pelatihan orang tua sebagai langkah pertama sebelum obat. Untuk anak 6 tahun ke atas, obat biasanya dikombinasikan dengan terapi perilaku. Keputusan memakai obat diambil bersama dokter setelah pemeriksaan.' },
    { q: 'Apakah ADHD bisa sembuh total?', a: 'Menurut NIMH, belum ada obat yang menyembuhkan ADHD, tetapi penanganan yang ada dapat mengurangi gejala dan memperbaiki fungsi sehari-hari anak di rumah, di sekolah, dan dalam pergaulan.' },
    { q: 'Apa efek samping obat ADHD?', a: 'CDC menyebut efek samping yang dapat muncul antara lain berkurangnya nafsu makan dan gangguan tidur. Setiap anak merespons berbeda, sehingga obat harus diresepkan dan dipantau dokter, dan efek samping perlu dilaporkan saat kontrol.' },
    { q: 'Apakah terapi okupasi membantu anak ADHD?', a: 'Terapi okupasi tercantum dalam standar penanganan GPPH di lampiran Permenkes 66/2014, bersama pendekatan pendidikan, pendekatan perilaku, dan pengobatan. Perlu tidaknya terapi okupasi ditentukan dokter sesuai kebutuhan anak.' }
  ],
  related: seri('terapi-adhd-pada-anak'),
  sources: [S.cdcTreat, S.aapGuide, S.nice, S.nimh, S.pmk66, S.pmk66pdf, S.nhs, S.kemenkes],
  tags: ['ADHD', 'TerapiADHD', 'TerapiPerilaku', 'PengasuhanAnak', 'ABK', 'YUKA']
};

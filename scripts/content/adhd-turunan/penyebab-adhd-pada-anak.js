'use strict';
const { a, S, seri } = require('./_sumber');

module.exports = {
  slug: 'penyebab-adhd-pada-anak',
  titleTag: 'Penyebab ADHD pada Anak: Genetik, Otak, dan Faktor Risiko',
  metaDesc: 'Penyebab ADHD belum diketahui pasti, tetapi genetik berperan besar. Kenali faktor risiko yang terbukti dan mitos yang keliru soal pola asuh. Baca di sini.',
  ogTitle: 'Penyebab ADHD pada Anak: Peran Genetik, Perkembangan Otak, dan Faktor Risiko Lain',
  ogDesc: 'Apa kata CDC, NIMH, NHS, NICE, dan penelitian genetik tentang penyebab ADHD, mana yang faktor risiko dan mana yang mitos, serta apa artinya bagi orang tua.',
  h1: 'Penyebab ADHD pada Anak: Genetik, Perkembangan Otak, dan Faktor Risiko',
  crumb: 'Penyebab ADHD pada Anak',
  keywords: 'penyebab adhd, penyebab adhd pada anak, adhd keturunan, apakah adhd keturunan, faktor risiko adhd, adhd disebabkan oleh, penyebab anak adhd',
  readTime: '9 menit baca',
  image: {
    file: 'assets/images/artikel/model-otak-manusia-plastik-wikimedia.webp', w: 1000, h: 860,
    alt: 'Model otak manusia dari plastik berwarna krem dipegang di tangan, memperlihatkan dua belahan otak besar dan lipatan permukaannya',
    caption: 'Model otak untuk pembelajaran anatomi. ADHD berkaitan dengan cara otak tumbuh dan berkembang, dan faktor genetik memegang peran terbesar di antara penyebab yang sudah diteliti.',
    credit: { name: 'Edeh Sophia', source: 'https://commons.wikimedia.org/wiki/File:The_Human_Brain_Model_01.jpg', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.id', note: 'dipotong, diperkecil, dan dikonversi ke WebP' }
  },
  answer: '<strong>Penyebab ADHD belum diketahui pasti, tetapi faktor genetik berperan paling besar.</strong> Penelitian keluarga dan anak kembar memperkirakan heritabilitasnya sekitar 74 persen. Faktor lain yang dikaitkan dengan ADHD antara lain perbedaan perkembangan otak, kelahiran prematur, paparan timbal, serta alkohol dan rokok selama kehamilan. ADHD tidak disebabkan oleh pola asuh yang buruk.',
  intro: `
            <p>Setelah anak didiagnosis ADHD, pertanyaan yang paling sering muncul di ruang konsultasi adalah "kenapa?". Tidak sedikit orang tua, terutama ibu, diam-diam menyalahkan diri sendiri. Artikel ini merangkum apa yang sudah diketahui sains tentang penyebab ADHD, membedakan faktor risiko yang didukung bukti dari mitos yang beredar, dan menjelaskan apa artinya bagi keluarga. Pengertian dan gejala ADHD secara umum ada di artikel utama <a href="adhd-adalah">ADHD adalah</a>.</p>`,
  sections: [
    {
      id: 'penyebab', h2: 'Apa Penyebab ADHD?',
      html: `
            <p>Jawaban jujurnya: penyebab pasti ADHD belum diketahui. ${a('cdcAbout', 'CDC')} menyatakan penyebab ADHD tidak diketahui, tetapi ilmuwan telah mengidentifikasi sejumlah faktor risiko. ${a('nimh', 'NIMH')} menambahkan bahwa banyak penelitian menunjukkan gen berperan besar, dan seperti banyak gangguan lain, ADHD kemungkinan besar muncul dari gabungan beberapa faktor.</p>
            <p>Lampiran ${a('pmk66pdf', 'Permenkes 66/2014')} merangkumnya dengan satu kata: <strong>multifaktorial</strong>, dengan dua faktor utama yaitu faktor genetik dan keterlibatan struktur anatomi serta zat kimia (neurokimiawi) otak.</p>
            <p>Membedakan <em>penyebab</em> dan <em>faktor risiko</em> itu penting. Faktor risiko adalah hal yang lebih sering ditemukan pada anak ADHD atau meningkatkan kemungkinannya, tetapi tidak berarti setiap anak yang terpapar akan mengalami ADHD, dan tidak semua anak ADHD pernah terpapar.</p>`
    },
    {
      id: 'keturunan', h2: 'Apakah ADHD Keturunan?',
      html: `
            <p>Ya, ADHD cenderung menurun dalam keluarga. Tinjauan ${a('faraone2019', 'Faraone dan Larsson di jurnal Molecular Psychiatry (2019)')} merangkum hasil penelitian keluarga, anak kembar, dan anak adopsi yang menunjukkan ADHD berkumpul dalam keluarga, dengan <strong>heritabilitas sekitar 74 persen</strong>. ${a('nhs', 'NHS')} juga menyebut ADHD mungkin disebabkan perbedaan genetik dan sering ditemukan dalam satu keluarga.</p>
            <p>Angka 74 persen sering disalahpahami. Heritabilitas <strong>bukan</strong> peluang seorang anak mewarisi ADHD dari orang tuanya. Angka itu menggambarkan seberapa besar perbedaan gejala ADHD antarorang dalam suatu populasi dapat dijelaskan oleh perbedaan genetik. Jadi yang bisa disimpulkan: genetik adalah faktor terbesar, bukan bahwa anak dari orang tua ADHD pasti ADHD.</p>
            <p>Penelitian yang sama menemukan tidak ada satu "gen ADHD". Efek tiap varian genetik sangat kecil, dan sekitar sepertiga heritabilitas ADHD berasal dari gabungan banyak varian umum yang masing-masing berpengaruh kecil. Karena itu, saat dokter menanyakan riwayat keluarga (misalnya apakah ayah, ibu, atau saudara pernah punya kesulitan serupa), pertanyaan itu bagian penting dari pemeriksaan, bukan untuk mencari siapa yang salah.</p>`
    },
    {
      id: 'otak', h2: 'Apa Hubungan ADHD dengan Perkembangan Otak?',
      html: `
            <p>ADHD digolongkan sebagai gangguan perkembangan saraf. ${a('cdcAbout', 'CDC')} menjelaskan istilah itu sebagai kondisi yang berkaitan dengan cara otak tumbuh dan berkembang. ${a('nimh', 'NIMH')} menyebut para peneliti sedang mempelajari perbedaan perkembangan otak dan neurobiologi antara orang dengan dan tanpa ADHD.</p>
            <p>Petunjuk lain datang dari cara kerja obat. NIMH menjelaskan bahwa obat stimulan, jenis obat ADHD yang paling umum, bekerja dengan meningkatkan kadar zat kimia otak yang terlibat dalam berpikir dan memusatkan perhatian. Ini sejalan dengan catatan Permenkes 66/2014 tentang keterlibatan neurokimiawi otak.</p>
            <p>Bagi orang tua, pesan pentingnya: perilaku anak ADHD bukan semata soal kemauan. Anak tidak memilih untuk mudah teralihkan atau sulit menunggu, dan karena itu hukuman keras jarang menyelesaikan masalah. Pendekatan yang terbukti membantu kami bahas di <a href="terapi-adhd-pada-anak">terapi dan penanganan ADHD pada anak</a>.</p>`
    },
    {
      id: 'faktor-risiko', h2: 'Faktor Risiko Apa Saja yang Terkait ADHD?',
      html: `
            <p>Selain genetik, ${a('cdcAbout', 'CDC')} mencantumkan faktor risiko berikut, masing-masing berdasarkan tinjauan sistematis dan meta-analisis yang diterbitkan tahun 2022 sampai 2023:</p>
            <ul>
                <li>paparan risiko lingkungan, misalnya <strong>timbal</strong>, selama kehamilan atau di usia dini,</li>
                <li><strong>alkohol dan rokok selama kehamilan</strong>, serta faktor lain terkait kehamilan dan kelahiran,</li>
                <li>kondisi kesehatan anak, termasuk <strong>cedera kepala</strong>,</li>
                <li>kesehatan mental orang tua, dan</li>
                <li>lingkungan keluarga.</li>
            </ul>
            <p>${a('nhs', 'NHS')} menambahkan beberapa kondisi yang dikaitkan dengan ADHD: <strong>lahir prematur</strong> (sebelum 37 minggu kehamilan), epilepsi, cedera otak, dan autisme. ${a('nimh', 'NIMH')} menyebut peneliti juga mempelajari cedera otak, gizi, dan lingkungan sosial sebagai faktor lingkungan yang mungkin meningkatkan risiko.</p>
            <p>Dua catatan penting. Pertama, "lingkungan keluarga" dan "kesehatan mental orang tua" di daftar CDC tidak sama dengan "orang tua penyebab ADHD". CDC mencantumkannya sebagai hal yang terkait dengan risiko ADHD, bukan tuduhan bahwa orang tua penyebabnya, dan justru menjadi alasan keluarga perlu ikut didukung. Kedua, sebagian besar faktor di atas berupa hubungan statistik, sehingga tidak dapat dipakai untuk menunjuk satu penyebab pada satu anak.</p>
            <p>ADHD juga sering muncul bersama kondisi lain, dan beberapa kondisi lain gejalanya mirip. Karena itu pemeriksaan yang baik selalu menyingkirkan kemungkinan lain. Baca <a href="diagnosis-banding-adhd">diagnosis banding ADHD</a> dan <a href="perbedaan-adhd-dan-autis-pada-anak">perbedaan ADHD dan autis pada anak</a>.</p>`
    },
    {
      id: 'mitos', h2: 'Apakah ADHD Disebabkan Pola Asuh, Makanan, atau Gawai?',
      toc: 'Mitos: pola asuh, makanan, dan gawai',
      html: `
            <p><strong>Pola asuh.</strong> Pedoman ${a('nice', 'NICE NG87')} meminta tenaga kesehatan menjelaskan kepada orang tua bahwa anjuran ikut pelatihan pengasuhan <strong>tidak berarti pengasuhannya buruk</strong>. Tujuannya menambah keterampilan, karena anak dengan ADHD memang punya kebutuhan pengasuhan di atas rata-rata. Cara mengasuh memengaruhi keseharian anak, tetapi bukti yang ada tidak menunjukkan pola asuh sebagai penyebab ADHD.</p>
            <p><strong>Makanan dan zat aditif.</strong> NICE meminta tenaga kesehatan <strong>tidak</strong> menganjurkan penghapusan pewarna buatan dan zat aditif sebagai terapi umum ADHD. Bila orang tua melihat makanan tertentu tampak memperburuk perilaku, NICE menyarankan membuat catatan harian makanan dan perilaku lalu mendiskusikannya dengan dokter atau ahli gizi. Panduan praktisnya ada di <a href="makanan-yang-harus-dihindari-anak-adhd">makanan yang harus dihindari anak ADHD</a>, dan ulasan bukti suplemen ada di <a href="suplemen-untuk-anak-adhd">suplemen untuk anak ADHD</a>.</p>
            <p><strong>Gawai dan waktu layar.</strong> Sumber resmi yang kami rujuk (CDC, NIMH, NHS, NICE, dan Kementerian Kesehatan) tidak mencantumkan gawai sebagai penyebab ADHD. ${a('kemenkes', 'Kementerian Kesehatan')} dan CDC menganjurkan pembatasan waktu layar sebagai bagian gaya hidup sehat yang dapat mempermudah pengelolaan gejala ADHD, bersama pola makan sehat, aktivitas fisik, dan tidur cukup.</p>`
    },
    {
      id: 'pencegahan', h2: 'Bisakah ADHD Dicegah?',
      html: `
            <p>Karena faktor genetik berperan paling besar, tidak ada cara yang menjamin ADHD dapat dicegah. Yang bisa dilakukan adalah mengurangi faktor risiko lingkungan yang tercantum dalam daftar ${a('cdcAbout', 'CDC')}, yang sekaligus baik untuk kesehatan anak secara umum:</p>
            <ul>
                <li>menghindari alkohol dan rokok selama kehamilan, termasuk paparan asap rokok,</li>
                <li>rutin memeriksakan kehamilan untuk mengurangi risiko komplikasi dan kelahiran prematur,</li>
                <li>melindungi anak dari paparan timbal di lingkungan,</li>
                <li>mencegah cedera kepala, misalnya dengan pengaman di rumah dan helm saat bersepeda, serta</li>
                <li>menjaga kesehatan mental orang tua dan mencari bantuan bila merasa kewalahan.</li>
            </ul>
            <p>Langkah-langkah ini tidak menjamin anak terhindar dari ADHD, tetapi mendukung tumbuh kembang anak apa pun kondisinya.</p>`
    },
    {
      id: 'arti-bagi-orang-tua', h2: 'Apa Artinya bagi Orang Tua?',
      html: `
            <p>Mengetahui penyebab ADHD bukan untuk mencari siapa yang salah. Yang lebih berguna adalah apa yang bisa dilakukan sekarang: memastikan diagnosis ditegakkan dengan benar, memahami kebutuhan anak, dan menyusun rencana penanganan bersama tenaga kesehatan dan sekolah. ${a('nimh', 'NIMH')} menegaskan bahwa walaupun ADHD belum dapat disembuhkan, penanganan yang tersedia dapat mengurangi gejala dan memperbaiki fungsi sehari-hari.</p>
            <p>Langkah berikutnya: pelajari <a href="diagnosis-adhd-di-indonesia">alur diagnosis ADHD di Indonesia</a> bila anak belum diperiksa, atau <a href="terapi-adhd-pada-anak">pilihan terapi ADHD sesuai usia</a> bila diagnosis sudah ada.</p>`
    }
  ],
  faq: [
    { q: 'Apakah ADHD menurun dari orang tua?', a: 'ADHD cenderung menurun dalam keluarga. Tinjauan Faraone dan Larsson (2019) memperkirakan heritabilitasnya sekitar 74 persen, tetapi angka itu bukan peluang seorang anak mewarisi ADHD. Banyak gen berpengaruh kecil, dan faktor lingkungan juga ikut berperan.' },
    { q: 'Apakah ADHD disebabkan salah asuh?', a: 'Tidak. Pedoman NICE meminta tenaga kesehatan menegaskan bahwa anjuran pelatihan pengasuhan tidak berarti pengasuhan orang tua buruk. Pelatihan itu bertujuan menambah keterampilan menghadapi kebutuhan anak ADHD yang memang lebih tinggi.' },
    { q: 'Apakah anak lahir prematur pasti ADHD?', a: 'Tidak. NHS menyebut kelahiran prematur (sebelum 37 minggu) sebagai kondisi yang dikaitkan dengan ADHD, artinya risikonya lebih tinggi. Sebagian besar anak yang lahir prematur tidak mengalami ADHD, tetapi tumbuh kembangnya perlu dipantau rutin.' },
    { q: 'Apakah gula menyebabkan ADHD?', a: 'Sumber resmi yang kami rujuk tidak menyebut gula sebagai penyebab ADHD. Pedoman NICE juga tidak menganjurkan diet eliminasi zat aditif sebagai terapi umum. Pola makan seimbang tetap dianjurkan untuk kesehatan anak secara umum.' }
  ],
  related: seri('penyebab-adhd-pada-anak'),
  sources: [S.cdcAbout, S.nimh, S.faraone2019, S.nhs, S.nice, S.kemenkes, S.pmk66, S.pmk66pdf],
  tags: ['ADHD', 'PenyebabADHD', 'KesehatanAnak', 'TumbuhKembangAnak', 'ABK', 'YUKA']
};

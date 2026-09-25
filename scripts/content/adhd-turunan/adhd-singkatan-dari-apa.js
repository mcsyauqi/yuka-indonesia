'use strict';
const { a, S, seri } = require('./_sumber');

module.exports = {
  slug: 'adhd-singkatan-dari-apa',
  titleTag: 'ADHD Singkatan dari Apa? Arti, Kepanjangan, dan GPPH',
  metaDesc: 'ADHD singkatan dari Attention-Deficit/Hyperactivity Disorder, di Indonesia disebut GPPH. Pahami arti tiap kata, tipe, dan beda ADD dengan ADHD.',
  ogTitle: 'ADHD Singkatan dari Apa? Arti, Kepanjangan, Istilah GPPH, dan Beda ADD dengan ADHD',
  ogDesc: 'Penjelasan kepanjangan ADHD kata demi kata, istilah resmi GPPH dalam Permenkes 66/2014, tiga tipe ADHD, dan istilah yang sering muncul saat konsultasi.',
  h1: 'ADHD Singkatan dari Apa? Arti, Kepanjangan, dan Istilah GPPH',
  crumb: 'ADHD Singkatan dari Apa',
  keywords: 'adhd singkatan dari, adhd kepanjangan, adhd artinya, arti adhd, kepanjangan adhd, gpph adalah, add dan adhd, adhd penyakit apa',
  readTime: '8 menit baca',
  image: {
    file: 'assets/images/artikel/ubin-huruf-kayu-berserakan-wikimedia.webp', w: 1000, h: 714,
    alt: 'Tumpukan ubin huruf dari kayu dengan huruf R, C, M, S, dan J terlihat acak',
    caption: 'Empat huruf ADHD mewakili empat kata dalam bahasa Inggris. Memahami arti tiap katanya membantu orang tua membaca hasil pemeriksaan dengan lebih tenang.',
    credit: { name: 'WOKANDAPIX', source: 'https://commons.wikimedia.org/wiki/File:Wooden_srcabble_tiles.jpg', license: 'CC0 1.0', licenseUrl: 'https://creativecommons.org/publicdomain/zero/1.0/deed.id', note: 'diperkecil dan dikonversi ke WebP' }
  },
  answer: '<strong>ADHD adalah singkatan dari <em>Attention-Deficit/Hyperactivity Disorder</em>.</strong> Dalam bahasa Indonesia artinya gangguan pemusatan perhatian dan hiperaktivitas, dan istilah yang dipakai Kementerian Kesehatan adalah GPPH. ADHD merupakan gangguan perkembangan saraf yang ditandai sulit memusatkan perhatian, terlalu aktif, atau impulsif secara menetap, bukan sekadar anak nakal.',
  intro: `
            <p>Istilah ADHD sering muncul di surat rujukan dokter, laporan psikolog, atau obrolan grup orang tua, tetapi jarang dijelaskan kata demi kata. Artikel ini membahas kepanjangan ADHD, padanan resminya dalam bahasa Indonesia, riwayat istilah ADD, tiga tipe ADHD, dan beberapa istilah lain yang biasanya ikut muncul saat konsultasi. Untuk gambaran lengkap tentang gejala dan penanganannya, baca artikel utama kami, <a href="adhd-adalah">ADHD adalah: pengertian, gejala, dan penanganannya</a>.</p>`,
  sections: [
    {
      id: 'singkatan', h2: 'ADHD Singkatan dari Apa?',
      html: `
            <p>ADHD berasal dari bahasa Inggris <em>Attention-Deficit/Hyperactivity Disorder</em>. ${a('nimh', 'National Institute of Mental Health (NIMH)')} di Amerika Serikat menjelaskannya sebagai gangguan perkembangan yang ditandai gejala kurang perhatian, hiperaktivitas, dan impulsivitas yang menetap. Kalau dipecah per kata, artinya seperti ini:</p>
            <div style="overflow-x:auto;">
            <table class="classification-table">
                <thead><tr><th>Huruf</th><th>Kata asli</th><th>Arti dalam bahasa Indonesia</th></tr></thead>
                <tbody>
                    <tr><td>A</td><td>Attention</td><td>Perhatian</td></tr>
                    <tr><td>D</td><td>Deficit</td><td>Kekurangan, defisit</td></tr>
                    <tr><td>H</td><td>Hyperactivity</td><td>Hiperaktivitas, aktivitas yang berlebihan</td></tr>
                    <tr><td>D</td><td>Disorder</td><td>Gangguan</td></tr>
                </tbody>
            </table>
            </div>
            <p>Tanda garis miring di antara <em>Attention-Deficit</em> dan <em>Hyperactivity</em> punya makna. Seseorang bisa didiagnosis ADHD walaupun gejalanya hanya dominan di satu sisi, misalnya sulit fokus tanpa banyak bergerak. Karena itu tidak semua anak ADHD terlihat "hiperaktif".</p>`
    },
    {
      id: 'artinya', h2: 'ADHD Artinya Apa dalam Bahasa Indonesia?',
      html: `
            <p>Dalam dokumen resmi Kementerian Kesehatan, ADHD disebut <strong>Gangguan Pemusatan Perhatian dan Hiperaktivitas (GPPH)</strong>. Istilah ini dipakai dalam lampiran ${a('pmk66', 'Permenkes Nomor 66 Tahun 2014')} tentang pemantauan tumbuh kembang anak. Lampiran tersebut mendefinisikan GPPH sebagai gangguan yang ditandai pola menetap berupa ketidakmampuan memusatkan perhatian dan atau hiperaktivitas-impulsivitas, dan mencatat bahwa kondisi ini dahulu dikenal dengan sebutan "hiperaktif".</p>
            <p>Portal ${a('kemenkes', 'Ayo Sehat Kementerian Kesehatan')} sendiri memakai istilah ADHD dan menyebutnya salah satu gangguan perkembangan saraf yang paling umum pada masa kanak-kanak. Jadi ADHD, GPPH, dan gangguan pemusatan perhatian dan hiperaktivitas merujuk pada kondisi yang sama. Di rumah sakit, Ayah dan Bunda mungkin menemukan ketiga istilah itu dipakai bergantian.</p>
            <p>Sebutan "hiperaktif" saja kurang tepat untuk menggambarkan ADHD, karena anak yang aktif belum tentu ADHD dan anak ADHD belum tentu hiperaktif. Penjelasan lengkapnya ada di artikel <a href="hiperaktif-artinya#beda">perbedaan ADHD dan hiperaktif biasa</a>.</p>`
    },
    {
      id: 'add-dan-adhd', h2: 'Apa Beda ADD dan ADHD?',
      html: `
            <p>ADD (<em>Attention Deficit Disorder</em>) adalah nama lama. Menurut ${a('aapUnderstand', 'American Academy of Pediatrics')}, tipe ADHD yang dominan kurang perhatian dulu dikenal dengan nama ADD. Anak dengan tipe ini tidak terlalu aktif dan tidak mengganggu kelas, sehingga gejalanya sering tidak disadari, dan tipe ini lebih sering ditemukan pada anak perempuan.</p>
            <p>Sekarang istilah yang dipakai tenaga kesehatan adalah ADHD dengan keterangan tipenya. Konsep ADHD modern sendiri relatif baru, walaupun anak yang sangat aktif, sulit memusatkan perhatian, dan impulsif sudah digambarkan dalam literatur kedokteran sejak abad ke-19, seperti diulas ${a('lange2010', 'Lange dan rekan dalam tinjauan sejarah ADHD tahun 2010')}.</p>
            <p>Kalau anak Ayah dan Bunda cenderung melamun dan mudah terdistraksi tanpa banyak bergerak, baca juga <a href="ciri-adhd-tipe-inattentive-pada-anak">ciri ADHD tipe inattentive pada anak</a>.</p>`
    },
    {
      id: 'penyakit-apa', h2: 'ADHD Penyakit Apa?',
      html: `
            <p>ADHD bukan infeksi, tidak menular, dan bukan tanda anak malas atau kurang dididik. ADHD tergolong <strong>gangguan perkembangan saraf</strong> (<em>neurodevelopmental disorder</em>), yaitu kondisi yang berkaitan dengan cara otak tumbuh dan berkembang. Definisi ini dipakai ${a('cdcAbout', 'CDC')} dan Kementerian Kesehatan.</p>
            <p>Dalam dunia kedokteran, diagnosis ADHD mengacu pada kriteria di buku panduan diagnosis gangguan jiwa DSM-5 atau klasifikasi WHO ICD-11, sebagaimana dirujuk ${a('nice', 'pedoman NICE NG87 (rekomendasi 1.3.3)')}. Karena itu ADHD kadang disebut "gangguan mental". Sebutan ini sering membuat orang tua cemas, padahal artinya hanya bahwa ADHD ditangani oleh bidang kesehatan jiwa dan tumbuh kembang, bukan bahwa anak "sakit jiwa" dalam pengertian awam.</p>
            <p>Beberapa hal penting yang perlu diingat:</p>
            <ul>
                <li><strong>ADHD biasanya berlangsung lama.</strong> CDC menyebut ADHD umumnya pertama kali didiagnosis di masa kanak-kanak dan sering berlanjut sampai dewasa.</li>
                <li><strong>Belum ada obat yang menyembuhkan ADHD</strong>, tetapi menurut ${a('nimh', 'NIMH')} penanganan yang tersedia dapat mengurangi gejala dan memperbaiki fungsi sehari-hari.</li>
                <li><strong>Bukan akibat pola asuh yang buruk.</strong> ${a('nice', 'NICE')} meminta tenaga kesehatan menjelaskan kepada orang tua bahwa saran ikut pelatihan pengasuhan tidak berarti pengasuhannya buruk, melainkan untuk menambah keterampilan menghadapi kebutuhan anak yang memang lebih tinggi.</li>
            </ul>
            <p>Faktor apa saja yang diduga berperan dijelaskan di artikel <a href="penyebab-adhd-pada-anak">penyebab ADHD pada anak</a>.</p>`
    },
    {
      id: 'tipe', h2: 'Apa Saja Tipe ADHD?',
      html: `
            <p>${a('cdcSigns', 'CDC')} dan ${a('kemenkes', 'Kementerian Kesehatan')} membagi ADHD menjadi tiga presentasi (cara gejala tampil), tergantung gejala mana yang paling menonjol saat diagnosis:</p>
            <ol>
                <li><strong>Presentasi dominan kurang perhatian (inatentif).</strong> Sulit menyelesaikan tugas, tidak teliti, sulit mengikuti instruksi atau percakapan, mudah teralihkan, dan sering lupa rutinitas.</li>
                <li><strong>Presentasi dominan hiperaktif-impulsif.</strong> Banyak bergerak dan bicara, sulit duduk tenang, sering menyela, sulit menunggu giliran. Anak kecil bisa terus berlari, melompat, atau memanjat.</li>
                <li><strong>Presentasi gabungan.</strong> Gejala kedua kelompok muncul sama kuatnya.</li>
            </ol>
            <p>CDC juga menekankan bahwa presentasinya bisa berubah seiring waktu karena gejala ikut berubah ketika anak tumbuh. Seperti apa perubahan itu dari balita sampai remaja, kami rangkum dalam <a href="ciri-ciri-anak-adhd-berdasarkan-usia">ciri-ciri anak ADHD berdasarkan usia</a>.</p>`
    },
    {
      id: 'istilah-lain', h2: 'Istilah Lain yang Sering Muncul Saat Konsultasi',
      html: `
            <ul>
                <li><strong>Inatensi</strong>: tidak mampu menyelesaikan tugas dengan cermat, memperhatikan, atau mendengarkan sesuatu dengan saksama (definisi glosarium ${a('cdcDiag', 'CDC')}).</li>
                <li><strong>Hiperaktivitas</strong>: tingkat aktivitas atau kegembiraan yang tinggi secara tidak biasa.</li>
                <li><strong>Impulsivitas</strong>: bertindak berdasarkan dorongan, ide, atau perasaan sesaat tanpa pertimbangan matang.</li>
                <li><strong>Komorbid</strong>: kondisi lain yang muncul bersamaan. Menurut ${a('cdcData', 'survei orang tua yang dirangkum CDC')}, hampir 78 persen anak dengan ADHD di Amerika Serikat memiliki setidaknya satu kondisi lain, misalnya masalah perilaku, kecemasan, gangguan belajar, atau autisme.</li>
                <li><strong>Neurodivergen</strong>: istilah yang dipakai sebagian orang dengan ADHD untuk menggambarkan bahwa otak mereka bekerja dengan cara berbeda, seperti dicatat ${a('nhs', 'NHS')}.</li>
                <li><strong>Diagnosis banding</strong>: kondisi lain yang gejalanya mirip dan perlu disingkirkan dokter. Baca <a href="diagnosis-banding-adhd">diagnosis banding ADHD</a>.</li>
            </ul>`
    },
    {
      id: 'seberapa-umum', h2: 'Seberapa Umum ADHD?',
      html: `
            <p>Meta-analisis ${a('polanczyk2015', 'Polanczyk dan rekan (2015)')} yang menggabungkan 41 studi dari 27 negara memperkirakan prevalensi ADHD pada anak dan remaja di seluruh dunia sekitar 3,4 persen. Angka diagnosis bisa lebih tinggi di negara dengan akses layanan yang luas: ${a('cdcData', 'CDC')} melaporkan sekitar 7 juta anak Amerika Serikat usia 3 sampai 17 tahun (11,7 persen) memiliki diagnosis ADHD saat ini berdasarkan survei orang tua tahun 2024, dengan anak laki-laki (13 persen) lebih sering terdiagnosis daripada anak perempuan (7 persen).</p>
            <p>Angka prevalensi nasional untuk Indonesia belum dapat kami verifikasi dari sumber resmi, jadi kami tidak mencantumkannya. Yang lebih penting bagi orang tua: bila tanda-tandanya menetap dan mengganggu, langkah pemeriksaannya sudah tersedia di layanan kesehatan Indonesia. Alurnya kami jelaskan di <a href="diagnosis-adhd-di-indonesia">diagnosis ADHD di Indonesia</a>.</p>`
    }
  ],
  faq: [
    { q: 'ADHD kepanjangan dari apa?', a: 'ADHD kepanjangan dari Attention-Deficit/Hyperactivity Disorder, artinya gangguan pemusatan perhatian dan hiperaktivitas.' },
    { q: 'Apa itu GPPH?', a: 'GPPH adalah Gangguan Pemusatan Perhatian dan Hiperaktivitas, istilah bahasa Indonesia untuk ADHD yang dipakai dalam lampiran Permenkes Nomor 66 Tahun 2014 tentang pemantauan tumbuh kembang anak.' },
    { q: 'Apakah ADD sama dengan ADHD?', a: 'ADD adalah nama lama untuk ADHD tipe dominan kurang perhatian. Sekarang tenaga kesehatan memakai istilah ADHD disertai keterangan tipenya, yaitu dominan kurang perhatian, dominan hiperaktif-impulsif, atau gabungan.' },
    { q: 'Apakah ADHD termasuk penyakit mental?', a: 'ADHD tergolong gangguan perkembangan saraf yang kriteria diagnosisnya tercantum dalam DSM-5 dan ICD-11, sehingga ditangani bidang kesehatan jiwa dan tumbuh kembang. ADHD tidak menular, bukan akibat pola asuh yang buruk, dan gejalanya dapat dikelola dengan penanganan yang tepat.' }
  ],
  related: seri('adhd-singkatan-dari-apa'),
  sources: [S.nimh, S.pmk66, S.pmk66pdf, S.kemenkes, S.aapUnderstand, S.lange2010, S.cdcAbout, S.cdcSigns, S.cdcDiag, S.cdcData, S.nice, S.nhs, S.polanczyk2015],
  tags: ['ADHD', 'GPPH', 'IstilahADHD', 'TumbuhKembangAnak', 'ABK', 'YUKA']
};

'use strict';
// Isi artikel /artikel/belajar-memasak-untuk-anak-berkebutuhan-khusus (cycle #73, slot 2026-10-08).
// Sudut: memasak sebagai latihan keterampilan hidup untuk anak/remaja ABK di rumah dan sekolah.
// Tidak ada artikel memasak lain di situs (cek kanibal 5 Okt 2026). Beda dari gangguan-makan-anak-abk (masalah makan).
// Fakta dicek pada 5 Oktober 2026:
//  - Amaral dkk. 2014 (PMID 24355162): 75 anak dan remaja (CP, Down syndrome, perkembangan tipikal), kuesioner CHORES;
//    anak CP dan DS aktif terlibat dalam tugas rawat diri dan tugas keluarga; orang tua ketiga kelompok menilai
//    pentingnya partisipasi sama.
//  - White, DeBoer, Scharf 2019 (PMID 30507727): 9.971 anak kohort ECLS-K 2011 (populasi umum AS); frekuensi tugas
//    rumah di TK berhubungan dengan persepsi kompetensi sosial, akademik, dan kepuasan hidup di kelas 3.
//  - Hong dkk. 2016 (PMID 27442687): video modeling untuk keterampilan hidup fungsional pada ASD, efek keseluruhan sedang.
//  - WHO Five Keys to Safer Food (halaman publikasi WHO): keep clean; separate raw and cooked; cook thoroughly;
//    keep food at safe temperatures; use safe water and raw materials.
// Tidak ada resep berklaim kesehatan, merek, atau angka yang dikarang. Foto: Dokumentasi YUKA, tanpa keterangan kondisi.

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
const AMARAL = 'https://pubmed.ncbi.nlm.nih.gov/24355162/';
const WHITE = 'https://pubmed.ncbi.nlm.nih.gov/30507727/';
const HONG = 'https://pubmed.ncbi.nlm.nih.gov/27442687/';
const WHO5 = 'https://www.who.int/publications/i/item/9789241594639';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';

module.exports = {
  slug: 'belajar-memasak-untuk-anak-berkebutuhan-khusus',
  date: '2026-10-08',
  category: 'Pendidikan',
  keyword: 'belajar memasak untuk anak berkebutuhan khusus',
  titleTag: 'Belajar Memasak untuk Anak Berkebutuhan Khusus',
  metaDesc: 'Belajar memasak untuk anak berkebutuhan khusus melatih kemandirian dan motorik. Simak manfaat, tahapan tugas dapur, aturan keamanan, dan contoh kegiatan.',
  ogTitle: 'Belajar Memasak untuk Anak Berkebutuhan Khusus: Manfaat, Tahapan, dan Aturan Aman di Dapur',
  ogDesc: 'Panduan orang tua dan guru mengajak anak berkebutuhan khusus belajar memasak: manfaat untuk kemandirian, tangga tugas dapur, resep bergambar, video, keamanan pangan, dan contoh kegiatan di rumah maupun sekolah.',
  h1: 'Belajar Memasak untuk Anak Berkebutuhan Khusus: Manfaat, Tahapan, dan Aturan Aman di Dapur',
  crumb: 'Belajar Memasak untuk Anak Berkebutuhan Khusus',
  parent: { name: 'Program Pemberdayaan ABK', href: 'program-pemberdayaan-anak-berkebutuhan-khusus' },
  about: ['Belajar memasak', 'Keterampilan hidup', 'Kemandirian anak berkebutuhan khusus', 'Keamanan pangan', 'Video modeling'],
  keywords: 'belajar memasak untuk anak berkebutuhan khusus, kelas memasak anak ABK, keterampilan hidup anak autis, kemandirian anak disabilitas, memasak bersama anak down syndrome',
  readTime: '11 menit baca',
  image: {
    file: 'Dokumentasi/artikel/belajar-memasak-untuk-anak-berkebutuhan-khusus-kelas-memasak.webp',
    w: 936, h: 998,
    alt: 'Seorang remaja putri bercelemek dan bertopi koki tersenyum sambil meratakan alas silikon biru di meja kayu, peserta lain di belakangnya',
    caption: 'Peserta kelas memasak menyiapkan alas kerja sebelum mulai. Menyiapkan meja adalah langkah pertama yang bisa dikuasai anak sebelum menyentuh bahan.',
    credit: CREDIT,
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  figures: [
    {
      file: 'Dokumentasi/artikel/belajar-memasak-untuk-anak-berkebutuhan-khusus-diagram.svg', w: 1200, h: 600,
      alt: 'Diagram tangga lima tugas dapur: mencuci buah dan sayur, menakar dan menuang, mengaduk dan mencampur, memotong dengan pisau aman, memasak di kompor dengan pendamping',
      caption: 'Tangga tugas dapur. Anak naik ke tugas berikutnya bila tugas sebelumnya sudah dikuasai dengan aman.',
      credit: 'Diagram: Tim YUKA.'
    },
    {
      file: 'Dokumentasi/artikel/belajar-memasak-untuk-anak-berkebutuhan-khusus-menyiapkan-air.webp', w: 936, h: 1168,
      alt: 'Seorang remaja berkaus merah muda mengisi wadah plastik dari dispenser air minum di sudut ruangan berdinding bata',
      caption: 'Mengisi wadah air minum dari dispenser. Tugas sederhana seperti ini melatih koordinasi tangan dan tanggung jawab di dapur.',
      credit: CREDIT
    },
    {
      file: 'Dokumentasi/artikel/belajar-memasak-untuk-anak-berkebutuhan-khusus-menunggu-giliran.webp', w: 936, h: 948,
      alt: 'Seorang anak bertopi koki dan bercelemek duduk di bangku kayu panjang di pendopo, tas peserta tertata di belakangnya',
      caption: 'Menunggu giliran di pendopo kelas memasak. Menunggu dan bergiliran adalah bagian dari kegiatan memasak bersama.',
      credit: CREDIT
    }
  ],
  answer: '<strong>Belajar memasak untuk anak berkebutuhan khusus</strong> adalah latihan keterampilan hidup yang dilakukan bertahap, mulai dari mencuci bahan dan menakar, sampai memotong dan memasak dengan pendamping. Kegiatan ini melatih motorik, urutan langkah, komunikasi, dan kemandirian. Kuncinya resep bergambar, tugas sesuai kemampuan, dan aturan keamanan yang konsisten.',
  intro: `
            <p>Dapur adalah ruang kelas yang sering terlupakan. Di sana anak belajar menghitung saat menakar, membaca urutan saat mengikuti resep, melatih jari saat mengupas, dan bersabar saat menunggu adonan matang. Bagi anak berkebutuhan khusus (ABK), memasak juga menjadi bekal kemandirian yang nyata: kelak ia bisa menyiapkan makanan sendiri.</p>
            <p>Panduan ini melengkapi tulisan YUKA tentang <a href="program-pemberdayaan-anak-berkebutuhan-khusus">program pemberdayaan anak berkebutuhan khusus</a>. Isinya: manfaat memasak menurut riset, cara menilai kesiapan, tangga tugas dapur, alat bantu seperti resep bergambar dan video, aturan keamanan pangan, contoh kegiatan, serta penyesuaian untuk kebutuhan yang berbeda.</p>`,
  infoBox: 'Keamanan selalu nomor satu. Kompor, oven, pisau tajam, dan air panas hanya boleh dipakai dengan pendamping dewasa yang berada di samping anak. Perhatikan alergi makanan dan diet khusus anak sebelum memilih resep.',
  sections: [
    {
      id: 'manfaat', h2: 'Manfaat Belajar Memasak bagi Anak Berkebutuhan Khusus',
      toc: 'Manfaat belajar memasak',
      html: `
            <p>Memasak melatih banyak keterampilan sekaligus. Mengaduk, menuang, dan mengupas melatih motorik halus yang juga dibahas di artikel <a href="kegiatan-motorik-halus">kegiatan motorik halus</a>. Mengikuti resep melatih kemampuan mengurutkan langkah dan bertahan pada tugas. Memasak bersama melatih komunikasi, bergiliran, dan kerja sama.</p>
            <p>Riset tentang tugas rumah tangga memberi gambaran yang menguatkan. Studi Amaral dan rekan (2014) pada 75 anak dan remaja menemukan bahwa anak dengan cerebral palsy dan Down syndrome aktif terlibat dalam tugas rawat diri dan tugas keluarga; disabilitas tidak menghalangi partisipasi mereka di rumah, walaupun tingkat bantuan yang dibutuhkan berbeda (${ext(AMARAL, 'Amaral dkk., 2014')}). Orang tua di semua kelompok juga menilai pentingnya keterlibatan anak di rumah sama tingginya.</p>
            <p>Pada populasi anak secara umum, studi kohort White dan rekan (2019) terhadap 9.971 anak di Amerika Serikat menemukan bahwa anak yang rutin mengerjakan tugas rumah sejak TK cenderung menilai dirinya lebih kompeten secara sosial dan akademik serta lebih puas dengan hidupnya di kelas 3 (${ext(WHITE, 'White dkk., 2019')}). Studi ini bersifat pengamatan pada anak umum, jadi tidak membuktikan sebab akibat, tetapi sejalan dengan pengalaman banyak guru: anak yang dipercaya mengerjakan sesuatu tumbuh lebih percaya diri.</p>
            <p>Dalam jangka panjang, keterampilan dapur membuka pintu ke kemandirian dan pekerjaan. Kisah alumni yang membangun usaha dari dapur dapat dibaca di <a href="kisah-mas-ilham-mandiri-telur-asin">kisah Mas Ilham dan usaha telur asinnya</a>.</p>`
    },
    {
      id: 'kesiapan', h2: 'Menilai Kesiapan dan Menentukan Tujuan',
      toc: 'Menilai kesiapan',
      html: `
            <p>Tidak ada usia pasti untuk mulai. Anak prasekolah sudah bisa mencuci buah atau menyobek daun selada, sementara remaja bisa berlatih menyiapkan sarapan sendiri. Yang lebih penting adalah mengamati kemampuan saat ini dan menetapkan tujuan yang jelas, misalnya "membuat roti isi tanpa bantuan" atau "menakar beras dan air untuk menanak nasi dengan pendampingan".</p>
            <p>Beberapa hal perlu diperhatikan sebelum mulai:</p>
            <ul>
                <li><strong>Pemahaman bahaya.</strong> Apakah anak memahami kata "panas" dan "tajam", dan berhenti saat diminta?</li>
                <li><strong>Kebutuhan sensorik.</strong> Sebagian anak tidak tahan tekstur lengket, bau tajam, atau suara blender. Pengalaman ini dibahas di artikel <a href="sensory-over-responsivity-pada-anak">sensory over responsivity pada anak</a>.</li>
                <li><strong>Kemampuan motorik.</strong> Anak dengan kekuatan genggam terbatas mungkin butuh alat yang dimodifikasi. Terapis okupasi bisa membantu menilainya, seperti dijelaskan di <a href="terapi-okupasi">terapi okupasi</a>.</li>
                <li><strong>Pola makan dan alergi.</strong> Anak dengan masalah makan atau diet khusus perlu resep yang disepakati keluarga; lihat juga <a href="gangguan-makan-anak-abk">gangguan makan anak ABK</a>.</li>
            </ul>
            <p>Tujuan memasak bisa dimasukkan ke dalam program pembelajaran individual di sekolah, sehingga latihan di rumah dan di sekolah saling menguatkan.</p>`
    },
    {
      id: 'tangga', h2: 'Tangga Tugas Dapur: Dari yang Paling Aman',
      toc: 'Tangga tugas dapur',
      html: `
            <p>Susun tugas dari yang tanpa panas dan tanpa benda tajam, lalu naik bertahap. Anak berpindah ke tugas berikutnya hanya bila tugas sebelumnya sudah dikerjakan dengan aman beberapa kali.</p>
            {{fig:0}}
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Tingkat</th><th>Contoh tugas</th><th>Keterampilan yang dilatih</th><th>Pengawasan</th></tr></thead>
                <tbody>
                    <tr><td>1. Tanpa alat berbahaya</td><td>Mencuci buah dan sayur, menyobek sayuran daun, mengelap meja</td><td>Koordinasi tangan, mengikuti instruksi</td><td>Diawasi dari dekat</td></tr>
                    <tr><td>2. Menakar dan menuang</td><td>Menakar beras, menuang air ke gelas ukur, mengisi wadah air minum</td><td>Berhitung, ketelitian</td><td>Diawasi dari dekat</td></tr>
                    <tr><td>3. Mencampur</td><td>Mengaduk adonan, mengocok telur, mengoles selai</td><td>Kekuatan dan kontrol gerak</td><td>Diawasi dari dekat</td></tr>
                    <tr><td>4. Memotong</td><td>Memotong pisang atau tahu dengan pisau tumpul atau pisau khusus anak</td><td>Koordinasi dua tangan, keselamatan</td><td>Pendamping di samping</td></tr>
                    <tr><td>5. Memakai panas</td><td>Menggoreng telur, merebus mi, memakai penanak nasi</td><td>Urutan langkah, waspada bahaya</td><td>Pendamping di samping, setiap saat</td></tr>
                </tbody>
            </table></div>
            <p>Tidak semua anak harus mencapai tingkat lima. Anak yang mahir di tingkat dua dan tiga sudah bisa menyumbang banyak dalam kegiatan memasak keluarga, dan itu tetap pencapaian.</p>`
    },
    {
      id: 'alat-bantu', h2: 'Alat Bantu: Resep Bergambar, Video, dan Peralatan',
      toc: 'Alat bantu memasak',
      html: `
            <p>Resep tertulis biasa sering terlalu padat. Ubah resep menjadi langkah bergambar: satu foto atau gambar per langkah, kalimat pendek, dan kotak centang. Cara menyusunnya mirip dengan <a href="cara-membuat-jadwal-visual-untuk-anak-autis">jadwal visual untuk anak autis</a>: urutan jelas dari kiri ke kanan atau atas ke bawah.</p>
            <p>Video juga membantu. Meta-analisis Hong dan rekan (2016) atas studi kasus tunggal menemukan video modeling secara keseluruhan cukup efektif untuk mengajarkan keterampilan hidup fungsional pada individu autis (${ext(HONG, 'Hong dkk., 2016')}). Rekam sendiri langkah memasak dengan ponsel, dari sudut pandang tangan, agar anak melihat persis gerakan yang harus ditiru.</p>
            <p>Peralatan bisa disesuaikan:</p>
            <ul>
                <li>Mangkuk dengan alas anti selip atau kain basah di bawahnya agar tidak bergeser.</li>
                <li>Sendok dan spatula bergagang tebal untuk anak dengan genggaman lemah.</li>
                <li>Gelas ukur berwarna atau ditandai garis agar mudah dibaca.</li>
                <li>Pengatur waktu dengan tampilan visual untuk menunggu proses matang.</li>
                <li>Celemek dan topi yang membantu anak "masuk ke peran" juru masak.</li>
            </ul>
            {{fig:1}}`
    },
    {
      id: 'keamanan', h2: 'Aturan Keamanan dan Kebersihan Pangan',
      toc: 'Aturan keamanan dan kebersihan',
      html: `
            <p>Keamanan diajarkan sebagai bagian dari kegiatan, bukan larangan yang diteriakkan saat bahaya. Buat aturan dapur yang singkat dan bergambar, lalu tempel di dinding. Contohnya: cuci tangan dulu, pisau selalu menghadap ke bawah, gagang panci tidak menjorok ke luar meja, dan kompor hanya dinyalakan orang dewasa atau bersama orang dewasa.</p>
            <p>Untuk kebersihan pangan, WHO merangkum pesan inti dalam ${ext(WHO5, 'Five Keys to Safer Food')}: jaga kebersihan, pisahkan bahan mentah dan matang, masak sampai matang, simpan makanan pada suhu aman, serta gunakan air dan bahan baku yang aman. Kelima pesan ini bisa diubah menjadi lima kartu bergambar yang dibahas sebelum memasak.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Pesan WHO</th><th>Contoh kebiasaan untuk anak</th></tr></thead>
                <tbody>
                    <tr><td>Jaga kebersihan</td><td>Cuci tangan dengan sabun sebelum memasak dan setelah memegang telur mentah</td></tr>
                    <tr><td>Pisahkan mentah dan matang</td><td>Pakai talenan berwarna berbeda untuk bahan mentah dan buah siap makan</td></tr>
                    <tr><td>Masak sampai matang</td><td>Periksa bersama pendamping bahwa telur atau ayam sudah matang</td></tr>
                    <tr><td>Simpan pada suhu aman</td><td>Masukkan sisa makanan ke kulkas, jangan dibiarkan lama di meja</td></tr>
                    <tr><td>Air dan bahan yang aman</td><td>Pakai air minum yang layak dan cek bahan yang sudah rusak atau kedaluwarsa</td></tr>
                </tbody>
            </table></div>
            <p>Siapkan juga rencana bila terjadi luka kecil atau luka bakar ringan, dan simpan kotak P3K di dekat dapur.</p>`
    },
    {
      id: 'contoh', h2: 'Contoh Kegiatan Memasak yang Cocok',
      toc: 'Contoh kegiatan memasak',
      html: `
            <p>Pilih menu yang langkahnya sedikit, hasilnya cepat terlihat, dan disukai anak. Beberapa contoh:</p>
            <ul>
                <li><strong>Roti isi.</strong> Mengoles, menyusun, dan memotong menjadi segitiga dengan pisau tumpul.</li>
                <li><strong>Salad buah.</strong> Mencuci, memotong buah lunak, mencampur, dan menata di mangkuk.</li>
                <li><strong>Minuman sederhana.</strong> Menakar, menuang, dan mengaduk; cocok untuk melatih ketelitian takaran.</li>
                <li><strong>Telur dadar.</strong> Memecah dan mengocok telur, lalu menggoreng bersama pendamping.</li>
                <li><strong>Kue tanpa oven.</strong> Mencampur dan mencetak adonan, kegiatan yang menyenangkan untuk kelompok.</li>
            </ul>
            <p>Di sekolah, kelas memasak bisa dijalankan dalam kelompok kecil dengan peran bergilir: satu menakar, satu mengaduk, satu menata. Pembagian peran seperti ini juga melatih kerja sama, sejalan dengan <a href="buddy-system-untuk-anak-abk-di-sekolah">buddy system untuk anak ABK di sekolah</a>. Hasil masakan bisa dinikmati bersama atau dikemas untuk keluarga, sehingga anak merasakan karyanya dihargai.</p>
            {{fig:2}}`
    },
    {
      id: 'penyesuaian', h2: 'Penyesuaian untuk Kebutuhan yang Berbeda',
      toc: 'Penyesuaian kebutuhan',
      html: `
            <p>Setiap anak membutuhkan penyesuaian yang berbeda. Beberapa contoh yang sering dipakai:</p>
            <ul>
                <li><strong>Anak autis.</strong> Rutinitas yang sama setiap sesi, resep bergambar, peringatan sebelum ada suara keras seperti blender, dan sarung tangan bagi anak yang tidak nyaman dengan tekstur lengket.</li>
                <li><strong>Anak dengan ADHD.</strong> Langkah pendek, tugas aktif seperti mengocok, dan pujian segera setelah satu langkah selesai.</li>
                <li><strong>Anak dengan hambatan motorik.</strong> Meja dengan tinggi sesuai kursi roda, alat bergagang tebal, dan posisi duduk yang stabil. Saran terapis okupasi seperti di <a href="terapi-okupasi-untuk-anak-cerebral-palsy">terapi okupasi untuk anak cerebral palsy</a> sangat membantu.</li>
                <li><strong>Anak dengan Down syndrome.</strong> Contoh langsung dan pengulangan, dengan tugas yang dipecah kecil. Gambaran umum kondisinya ada di artikel <a href="down-syndrome-adalah">Down syndrome adalah</a>.</li>
            </ul>
            <p>Penyesuaian bukan berarti menurunkan harapan. Justru dengan penyesuaian yang tepat, anak bisa menunjukkan kemampuan yang selama ini tidak terlihat.</p>`
    },
    {
      id: 'masa-depan', h2: 'Dari Dapur Rumah ke Kemandirian dan Pekerjaan',
      toc: 'Dari dapur ke kemandirian',
      html: `
            <p>Keterampilan memasak yang dilatih sejak kecil menjadi fondasi hidup mandiri saat dewasa: menyiapkan makanan sendiri, berbelanja bahan, dan mengatur uang belanja. Keterampilan mengatur uang dibahas lebih lanjut di <a href="money-management-untuk-penyandang-disabilitas">money management untuk penyandang disabilitas</a>.</p>
            <p>Bagi sebagian remaja, dapur juga bisa menjadi jalan menuju pekerjaan atau usaha, misalnya membantu di usaha katering, membuat kue untuk dijual, atau mengemas makanan. Gagasan ini dibahas dalam <a href="kewirausahaan-anak-muda-disabilitas">kewirausahaan anak muda disabilitas</a> dan <a href="pekerjaan-yang-cocok-untuk-orang-autis">pekerjaan yang cocok untuk orang autis</a>.</p>
            <p>Mulailah dari satu kegiatan kecil minggu ini. Biarkan anak mencuci buah untuk keluarga, lalu rayakan hasilnya. Langkah kecil yang konsisten lebih bermakna daripada kelas memasak besar yang hanya sekali.</p>`
    }
  ],
  storyHighlight: 'Siswa Sekolah Inklusi Taruna Imani mengikuti kegiatan memasak bersama, dari menyiapkan alat sampai menikmati hasilnya bersama teman. Orang tua yang ingin berdiskusi tentang cara melatih keterampilan dapur dan kemandirian anak di rumah dapat menghubungi tim YUKA lewat WhatsApp.',
  faq: [
    { q: 'Apa manfaat belajar memasak untuk anak berkebutuhan khusus?', a: 'Memasak melatih motorik halus, kemampuan mengurutkan langkah, berhitung saat menakar, komunikasi, kerja sama, dan kemandirian. Riset Amaral dan rekan (2014) menunjukkan anak dengan cerebral palsy dan Down syndrome aktif terlibat dalam tugas rumah tangga.' },
    { q: 'Pada usia berapa anak ABK bisa mulai belajar memasak?', a: 'Tidak ada usia pasti. Anak prasekolah sudah bisa mencuci buah atau menyobek sayuran, sedangkan remaja bisa berlatih menyiapkan sarapan. Mulailah dari tugas tanpa panas dan tanpa benda tajam sesuai kemampuan anak.' },
    { q: 'Tugas dapur apa yang paling aman untuk pemula?', a: 'Mencuci buah dan sayur, menyobek sayuran daun, mengelap meja, menakar beras, menuang air, dan mengaduk adonan. Tugas memotong dan memakai kompor diberikan belakangan dengan pendamping di samping anak.' },
    { q: 'Bagaimana cara mengajarkan resep kepada anak autis?', a: 'Ubah resep menjadi langkah bergambar dengan kalimat pendek dan kotak centang, jalankan rutinitas yang sama setiap sesi, dan pertimbangkan video singkat. Meta-analisis Hong dan rekan (2016) menemukan video modeling cukup efektif untuk keterampilan hidup fungsional.' },
    { q: 'Apa itu Five Keys to Safer Food dari WHO?', a: 'Lima pesan inti WHO untuk keamanan pangan: jaga kebersihan, pisahkan bahan mentah dan matang, masak sampai matang, simpan makanan pada suhu aman, serta gunakan air dan bahan baku yang aman.' },
    { q: 'Bagaimana jika anak tidak suka tekstur bahan makanan?', a: 'Hormati kepekaan sensoriknya. Tawarkan sarung tangan, mulai dari bahan yang kering, beri peringatan sebelum ada suara keras, dan jangan memaksa. Terapis okupasi bisa membantu menyusun langkah pengenalan bertahap.' },
    { q: 'Menu apa yang cocok untuk kegiatan memasak pertama?', a: 'Menu dengan sedikit langkah dan hasil cepat, seperti roti isi, salad buah, minuman sederhana, telur dadar dengan pendamping, atau kue tanpa oven.' },
    { q: 'Apakah keterampilan memasak bisa menjadi bekal pekerjaan?', a: 'Bisa. Keterampilan dapur menjadi dasar hidup mandiri dan dapat berkembang menjadi pekerjaan atau usaha, seperti membantu katering, membuat kue untuk dijual, atau mengemas makanan, dengan dukungan yang sesuai.' }
  ],
  relatedIntro: 'Bacaan lain tentang keterampilan hidup dan kemandirian:',
  related: [
    { href: 'program-pemberdayaan-anak-berkebutuhan-khusus', title: 'Program Pemberdayaan ABK', desc: 'Pendidikan dan kemandirian untuk anak berkebutuhan khusus.' },
    { href: 'kisah-mas-ilham-mandiri-telur-asin', title: 'Kisah Mas Ilham', desc: 'Mandiri lewat usaha telur asin.' },
    { href: 'kegiatan-motorik-halus', title: 'Kegiatan Motorik Halus', desc: 'Cara merancang sesi latihan motorik halus.' },
    { href: 'money-management-untuk-penyandang-disabilitas', title: 'Money Management untuk Penyandang Disabilitas', desc: 'Melatih kemandirian mengelola uang.' }
  ],
  tags: ['BelajarMemasak', 'KeterampilanHidup', 'Kemandirian', 'AnakBerkebutuhanKhusus', 'YUKA'],
  sources: [
    { url: AMARAL, label: 'Amaral MF dkk. Household task participation of children and adolescents with cerebral palsy, Down syndrome and typical development. Res Dev Disabil, 2014' },
    { url: WHITE, label: 'White EM, DeBoer MD, Scharf RJ. Associations Between Household Chores and Childhood Self-Competency. J Dev Behav Pediatr, 2019' },
    { url: HONG, label: 'Hong ER dkk. The effects of video modeling in teaching functional living skills to persons with ASD: A meta-analysis of single-case studies. Res Dev Disabil, 2016' },
    { url: WHO5, label: 'World Health Organization. Five keys to safer food manual' }
  ]
};

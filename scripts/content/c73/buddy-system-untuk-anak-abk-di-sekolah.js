'use strict';
// Isi artikel /artikel/buddy-system-untuk-anak-abk-di-sekolah (cycle #73, slot 2026-10-05).
// Sudut: program teman pendamping sebaya (buddy system / peer network) untuk interaksi SOSIAL anak ABK di sekolah.
// Beda dari peer-tutoring-di-kelas-inklusi (tutor akademik, belum tayang), classroom-management-kelas-inklusi
// (tata kelas), dan shadow-teacher-adalah (pendamping dewasa).
// Fakta dicek ke abstrak PubMed asli pada 5 Oktober 2026:
//  - Watkins dkk. 2019 (PMID 30869925): 28 studi yang memenuhi standar What Works Clearinghouse; intervensi
//    peer-mediated termasuk yang menghasilkan efek sebagian besar besar; intervensi yang dijalankan guru efek terbesar.
//  - Asmus dkk. 2017 (PMID 28257242): RCT 47 siswa SMA dengan disabilitas berat, 192 teman sebaya dilatih; kontak sosial
//    dan pertemanan baru lebih banyak dibanding kontrol (48 siswa); banyak hubungan bertahan 1 sampai 2 semester,
//    tetapi jarang berlanjut di luar jam sekolah.
//  - Kasari dkk. 2016 (PMID 26391889): 137 anak autis TK sampai kelas 5, kelompok keterampilan sosial di sekolah 8 minggu;
//    keterlibatan dengan teman saat istirahat meningkat pada kelompok SKILLS; efek dimoderasi kedekatan guru.
//  - Permendikbudristek 48/2023 tentang Akomodasi yang Layak (judul resmi, JDIH Kemendikdasmen).
// Tidak ada angka yang dikarang. Foto: Dokumentasi YUKA, tidak ada keterangan kondisi anak mana pun.

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
const WATKINS = 'https://pubmed.ncbi.nlm.nih.gov/30869925/';
const ASMUS = 'https://pubmed.ncbi.nlm.nih.gov/28257242/';
const KASARI = 'https://pubmed.ncbi.nlm.nih.gov/26391889/';
const PERMEN48 = 'https://jdih.kemendikdasmen.go.id/produk-hukum/peraturan-perundang-undangan/peraturan-menteri-pendidikan-kebudayaan-riset-dan-teknologi-nomor-48-tahun-2023-tentang-akomodasi-yang-layak-untuk-peserta-didik-penyandang-disabilitas-pada-satuan-pendidikan-anak-usia-dini-formal-pendidikan-dasar-pendidikan-menengah-dan-pendidikan-tinggi';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';

module.exports = {
  slug: 'buddy-system-untuk-anak-abk-di-sekolah',
  date: '2026-10-05',
  category: 'Pendidikan',
  keyword: 'buddy system untuk anak abk',
  titleTag: 'Buddy System untuk Anak ABK di Sekolah: Panduan Guru',
  metaDesc: 'Buddy system untuk anak ABK di sekolah membantu mereka berteman. Pelajari bukti riset, cara memilih dan melatih teman, serta kesalahan yang sering terjadi.',
  ogTitle: 'Buddy System untuk Anak ABK di Sekolah: Bukti Riset dan Langkah Menyiapkannya',
  ogDesc: 'Panduan guru dan orang tua untuk menyiapkan program teman pendamping sebaya bagi anak berkebutuhan khusus: tujuan, pemilihan dan pelatihan teman, kegiatan, pemantauan, dan risiko yang perlu dihindari.',
  h1: 'Buddy System untuk Anak ABK di Sekolah: Panduan Guru Menyiapkan Teman Pendamping Sebaya',
  crumb: 'Buddy System untuk Anak ABK',
  parent: { name: 'Pendidikan Inklusi', href: 'pendidikan-inklusi' },
  about: ['Buddy system', 'Peer-mediated intervention', 'Peer network', 'Pendidikan inklusi', 'Interaksi sosial anak berkebutuhan khusus'],
  keywords: 'buddy system untuk anak abk, buddy system sekolah inklusi, teman sebaya anak berkebutuhan khusus, peer mediated intervention, peer network autisme, program teman pendamping',
  readTime: '11 menit baca',
  image: {
    file: 'Dokumentasi/artikel/buddy-system-untuk-anak-abk-di-sekolah-kegiatan-bersama.webp',
    w: 1200, h: 900,
    alt: 'Rombongan siswa berseragam putih merah dan pendamping berkaus merah muda berpose bersama di ruangan berpilar putih, sebagian berbaring di karpet sambil tertawa',
    caption: 'Siswa dan pendamping YUKA bergaya bersama saat kegiatan kunjungan. Suasana santai seperti ini adalah tempat alami tumbuhnya pertemanan antarsiswa.',
    credit: CREDIT,
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  figures: [
    {
      file: 'Dokumentasi/artikel/buddy-system-untuk-anak-abk-di-sekolah-diagram.svg', w: 1200, h: 470,
      alt: 'Diagram lima langkah menyiapkan buddy system: tentukan tujuan, tanya anak dan keluarga, pilih dan latih teman, jalankan di kegiatan nyata, pantau lalu kurangi bantuan',
      caption: 'Lima langkah menyiapkan buddy system. Urutannya penting: tujuan dan suara anak ditetapkan lebih dulu, baru teman dipilih.',
      credit: 'Diagram: Tim YUKA.'
    },
    {
      file: 'Dokumentasi/artikel/buddy-system-untuk-anak-abk-di-sekolah-sekolah.webp', w: 900, h: 1200,
      alt: 'Guru, tamu, dan beberapa siswa berfoto bersama di ruang sekolah berhias pita warna-warni dan rak piala',
      caption: 'Guru, tamu, dan siswa di Sekolah Inklusi Taruna Imani. Program teman sebaya membutuhkan orang dewasa yang merencanakan dan memantau, bukan sekadar menunjuk nama.',
      credit: CREDIT
    },
    {
      file: 'Dokumentasi/artikel/buddy-system-untuk-anak-abk-di-sekolah-menari.webp', w: 936, h: 998,
      alt: 'Seorang siswa berkostum tari dan seorang pendamping berkerudung merah muda bergerak bersama di halaman rumput depan candi batu',
      caption: 'Menari bersama di halaman candi saat kegiatan luar kelas. Kegiatan seni dan gerak memberi alasan alami bagi anak untuk berinteraksi.',
      credit: CREDIT
    }
  ],
  answer: '<strong>Buddy system untuk anak ABK</strong> adalah program sekolah yang memasangkan anak berkebutuhan khusus dengan satu atau beberapa teman sebaya yang sudah dilatih, agar ia lebih mudah ikut bermain, belajar kelompok, dan berteman. Riset menunjukkan program teman sebaya efektif bila teman dilatih, kegiatannya nyata, dan guru tetap memantau.',
  intro: `
            <p>Duduk di kelas yang sama belum tentu berarti diterima. Banyak anak berkebutuhan khusus (ABK) di sekolah inklusi menghabiskan jam istirahat sendirian, bukan karena tidak ingin berteman, tetapi karena tidak tahu cara bergabung, dan teman-temannya juga tidak tahu cara mengajak. Di sinilah buddy system atau program teman pendamping sebaya berperan.</p>
            <p>Panduan ini ditulis untuk guru kelas, guru pembimbing khusus, dan orang tua yang ingin menyiapkan program tersebut dengan benar. Isinya melengkapi gambaran umum <a href="pendidikan-inklusi">pendidikan inklusi</a> di situs YUKA: apa yang dimaksud buddy system, bukti risetnya, langkah menyiapkan, cara melatih teman, contoh kegiatan, cara memantau, sampai kesalahan yang sering terjadi.</p>`,
  infoBox: 'Buddy system adalah dukungan sosial, bukan pengganti guru pembimbing khusus, shadow teacher, atau terapi. Tanggung jawab atas keamanan dan pembelajaran anak tetap ada pada orang dewasa di sekolah.',
  sections: [
    {
      id: 'pengertian', h2: 'Apa Itu Buddy System dan Bedanya dengan Peer Tutoring',
      toc: 'Pengertian dan bedanya dengan peer tutoring',
      html: `
            <p>Dalam riset pendidikan khusus, buddy system termasuk keluarga besar <em>peer-mediated intervention</em>, yaitu pendekatan yang melibatkan teman sebaya sebagai "jembatan" interaksi. Teman sebaya diajari cara mengajak, menunggu respons, memberi pilihan, dan memuji, lalu dipertemukan dengan anak ABK dalam kegiatan yang sudah ada di sekolah.</p>
            <p>Ada beberapa bentuk yang sering tertukar. Tabel berikut membantu membedakannya:</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Bentuk</th><th>Tujuan utama</th><th>Siapa yang terlibat</th><th>Contoh di sekolah</th></tr></thead>
                <tbody>
                    <tr><td>Buddy satu lawan satu</td><td>Teman tetap untuk kegiatan tertentu</td><td>Satu teman sebaya terlatih</td><td>Teman menemani saat istirahat dan pindah ruang</td></tr>
                    <tr><td>Peer network (jaringan teman)</td><td>Memperluas lingkar pertemanan</td><td>Dua sampai empat teman, bergantian</td><td>Kelompok makan siang atau klub hobi mingguan</td></tr>
                    <tr><td>Peer tutoring</td><td>Membantu pelajaran akademik</td><td>Teman yang menguasai materi</td><td>Latihan membaca berpasangan</td></tr>
                    <tr><td>Pendampingan orang dewasa</td><td>Dukungan belajar dan perilaku</td><td>Shadow teacher atau GPK</td><td>Pendamping di samping anak sepanjang pelajaran</td></tr>
                </tbody>
            </table></div>
            <p>Peran orang dewasa dibahas terpisah di artikel <a href="shadow-teacher-adalah">shadow teacher</a> dan <a href="gpk-adalah">guru pembimbing khusus (GPK)</a>. Buddy system melengkapi keduanya: orang dewasa membantu anak belajar, teman sebaya membantu anak merasa menjadi bagian dari kelas.</p>`
    },
    {
      id: 'riset', h2: 'Apa Kata Riset tentang Program Teman Sebaya',
      toc: 'Apa kata riset',
      html: `
            <p>Program teman sebaya bukan sekadar ide yang terdengar baik. Meta-analisis Watkins dan rekan (2019) meninjau 28 studi intervensi untuk siswa autis di sekolah inklusi yang memenuhi standar kualitas What Works Clearinghouse. Sebagian besar studi berfokus pada keterampilan komunikasi sosial, dan intervensi yang dimediasi teman sebaya termasuk kelompok yang menghasilkan efek besar, bersama dukungan visual dan pemantauan diri (${ext(WATKINS, 'Watkins dkk., 2019')}).</p>
            <p>Uji acak terkontrol oleh Asmus dan rekan (2017) di sekolah menengah atas melibatkan 47 siswa dengan disabilitas berat. Staf sekolah mengundang dan melatih 192 teman sebaya untuk membentuk kelompok sosial selama satu semester. Dibanding kelompok kontrol, siswa yang mendapat peer network memperoleh lebih banyak kontak sosial dan pertemanan baru, dan banyak hubungan bertahan satu sampai dua semester kemudian. Catatannya, pertemanan itu jarang berlanjut di luar jam sekolah (${ext(ASMUS, 'Asmus dkk., 2017')}).</p>
            <p>Studi Kasari dan rekan (2016) pada 137 anak autis usia sekolah dasar menunjukkan bahwa kelompok keterampilan sosial di sekolah dapat meningkatkan keterlibatan dengan teman saat istirahat, dan bahwa kedekatan guru dengan anak ikut menentukan pendekatan mana yang paling cocok (${ext(KASARI, 'Kasari dkk., 2016')}).</p>
            <p>Dari ketiga kajian ini, pelajarannya konsisten: hasil terbaik datang dari teman yang dilatih, kegiatan yang terstruktur, dan guru yang terlibat. Menunjuk "teman duduk" lalu berharap persahabatan tumbuh sendiri jarang cukup.</p>`
    },
    {
      id: 'manfaat', h2: 'Manfaat untuk Anak ABK dan Teman Sebayanya',
      toc: 'Manfaat untuk kedua pihak',
      html: `
            <p>Bagi anak ABK, manfaat yang paling sering terlihat adalah lebih banyak kesempatan berinteraksi: diajak bermain, punya pasangan saat kerja kelompok, dan tahu kepada siapa bertanya ketika bingung dengan instruksi. Kesempatan ini menjadi tempat latihan alami bagi keterampilan yang diajarkan dalam <a href="social-skills-training-anak-autis">social skills training</a>, sehingga keterampilan tidak berhenti di ruang terapi.</p>
            <p>Bagi teman sebaya, program yang baik melatih kepemimpinan, kesabaran, dan cara berkomunikasi dengan orang yang berbeda. Nilai-nilai ini sejalan dengan tujuan <a href="inklusi-sosial">inklusi sosial</a>: semua anak belajar bahwa perbedaan adalah hal biasa. Penting dicatat, manfaat bagi teman sebaya adalah efek samping yang baik, bukan alasan utama program. Anak ABK bukan "proyek" untuk melatih karakter teman-temannya.</p>
            <p>Bagi guru, buddy system membantu kelas berjalan lebih lancar. Saat anak ABK punya teman yang tahu rutinitasnya, perpindahan kegiatan dan kerja kelompok lebih mulus. Prinsip pengelolaan kelas yang mendukung hal ini dibahas di artikel <a href="classroom-management-kelas-inklusi">classroom management kelas inklusi</a>.</p>`
    },
    {
      id: 'langkah', h2: 'Lima Langkah Menyiapkan Buddy System',
      toc: 'Lima langkah menyiapkan',
      html: `
            <p>Urutan langkah di bawah ini disusun agar program tidak berhenti di penunjukan nama.</p>
            <ol>
                <li><strong>Tentukan tujuan yang bisa diamati.</strong> Contohnya "ikut permainan kelompok saat istirahat minimal dua kali seminggu" atau "punya pasangan tetap saat kerja kelompok IPA". Tujuan ini sebaiknya selaras dengan <a href="program-pembelajaran-individual">program pembelajaran individual (PPI)</a> anak.</li>
                <li><strong>Tanyakan pada anak dan keluarga.</strong> Kegiatan apa yang ia sukai? Teman mana yang membuatnya nyaman? Apakah ia lebih suka satu teman atau kelompok kecil? Anak yang belum lancar bicara bisa ditanya lewat gambar atau <a href="aplikasi-komunikasi-aac-terbaik-untuk-anak">aplikasi komunikasi AAC</a>.</li>
                <li><strong>Pilih dan latih teman.</strong> Pilih secara sukarela, dua sampai empat anak, lalu beri pelatihan singkat (lihat bagian berikutnya).</li>
                <li><strong>Jalankan di kegiatan nyata.</strong> Tempelkan program pada kegiatan yang memang sudah ada: istirahat, makan bersama, kerja kelompok, ekstrakurikuler.</li>
                <li><strong>Pantau, lalu kurangi bantuan guru.</strong> Catat perkembangan setiap minggu, evaluasi bersama anak, dan perlahan biarkan interaksi berjalan tanpa arahan guru.</li>
            </ol>
            {{fig:0}}
            <p>Payung kebijakannya juga ada. ${ext(PERMEN48, 'Permendikbudristek Nomor 48 Tahun 2023')} mengatur akomodasi yang layak bagi peserta didik penyandang disabilitas di satuan pendidikan, dan dukungan agar anak bisa berpartisipasi dalam kegiatan sekolah termasuk dalam semangat aturan tersebut. Hak anak ABK atas pendidikan yang setara dirangkum di artikel <a href="apa-saja-hak-anak-berkebutuhan-khusus">apa saja hak anak berkebutuhan khusus</a>.</p>`
    },
    {
      id: 'memilih', h2: 'Cara Memilih Teman Pendamping yang Tepat',
      toc: 'Cara memilih teman pendamping',
      html: `
            <p>Godaan terbesar guru adalah memilih siswa paling pintar atau paling populer. Padahal kriteria yang lebih penting adalah minat dan sikap. Teman yang cocok biasanya:</p>
            <ul>
                <li>Mau terlibat secara sukarela, bukan karena ditugaskan atau dijanjikan nilai tambahan.</li>
                <li>Punya minat yang sama dengan anak ABK, misalnya sama-sama suka menggambar, sepak bola, atau kereta api.</li>
                <li>Bisa mengikuti arahan orang dewasa dan menjaga rahasia teman.</li>
                <li>Cukup sabar menunggu respons tanpa mengambil alih.</li>
            </ul>
            <p>Hindari membebani satu anak terus-menerus. Peer network berisi dua sampai empat teman yang bergantian lebih tahan lama daripada satu buddy permanen, dan memberi anak ABK pilihan teman. Jangan pula memilih saudara kandung yang bersekolah di tempat yang sama sebagai buddy default; mereka juga butuh ruang untuk pertemanannya sendiri.</p>
            <p>Mintalah izin orang tua teman sebaya dan jelaskan tujuannya. Orang tua yang paham biasanya justru mendukung, dan ini membuka percakapan yang lebih luas tentang sekolah inklusi di antara wali murid.</p>
            {{fig:1}}`
    },
    {
      id: 'melatih', h2: 'Materi Pelatihan Singkat untuk Teman Sebaya',
      toc: 'Materi pelatihan teman sebaya',
      html: `
            <p>Pelatihan tidak perlu panjang. Sesi singkat sepulang sekolah, lalu pendampingan langsung saat kegiatan, sudah memadai untuk memulai. Isi yang disarankan:</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Materi</th><th>Yang diajarkan</th><th>Contoh kalimat atau tindakan</th></tr></thead>
                <tbody>
                    <tr><td>Mengenal teman</td><td>Kekuatan, kesukaan, dan cara berkomunikasi teman, tanpa membuka diagnosis tanpa izin keluarga</td><td>"Raka suka kereta. Dia kadang menjawab dengan menunjuk gambar."</td></tr>
                    <tr><td>Mengajak bergabung</td><td>Menyebut nama, menawarkan pilihan, memberi contoh</td><td>"Raka, mau main bola atau balok?"</td></tr>
                    <tr><td>Menunggu respons</td><td>Memberi jeda beberapa detik sebelum mengulang</td><td>Diam sejenak, lalu ulangi dengan gerakan</td></tr>
                    <tr><td>Memuji dan bergiliran</td><td>Pujian spesifik dan aturan gantian yang jelas</td><td>"Tendanganmu kencang! Sekarang giliranku."</td></tr>
                    <tr><td>Kapan memanggil guru</td><td>Situasi yang bukan tugas anak</td><td>Teman menangis lama, berkelahi, atau tampak tidak aman</td></tr>
                </tbody>
            </table></div>
            <p>Tekankan bahwa teman ABK adalah teman sekelas, bukan pasien. Cara berkomunikasi yang sederhana dan sabar juga dibahas dalam artikel <a href="cara-melatih-social-skills-anak-autis-di-rumah">cara melatih social skills anak autis di rumah</a>, yang bisa dibagikan ke orang tua teman sebaya.</p>`
    },
    {
      id: 'kegiatan', h2: 'Contoh Kegiatan yang Cocok untuk Buddy System',
      toc: 'Contoh kegiatan',
      html: `
            <p>Kegiatan terbaik adalah yang memberi alasan alami untuk berinteraksi: ada benda yang dipakai bersama, aturan main, atau tujuan bersama. "Duduk di sebelahnya dan ajak ngobrol" biasanya kurang berhasil karena tidak ada yang dibicarakan.</p>
            <ul>
                <li><strong>Permainan saat istirahat</strong> dengan aturan sederhana, seperti lempar tangkap bola, engklek, atau balok susun.</li>
                <li><strong>Kerja kelompok</strong> dengan peran yang jelas: satu menggunting, satu menempel, satu menulis judul.</li>
                <li><strong>Klub minat</strong> seperti menggambar, memasak, atau berkebun yang memakai bahan bersama.</li>
                <li><strong>Kegiatan seni dan gerak</strong> seperti menari atau musik, yang tidak menuntut banyak bicara.</li>
                <li><strong>Tugas kelas bergilir</strong>, misalnya membagikan buku atau menyiram tanaman berdua.</li>
                <li><strong>Kegiatan luar kelas</strong> seperti kunjungan museum, tempat teman bisa membantu dengan antrean dan perpindahan.</li>
            </ul>
            <p>Untuk anak dengan ADHD, kegiatan yang aktif dan berdurasi pendek biasanya lebih berhasil; strategi pendukungnya ada di artikel <a href="strategi-mengajar-anak-adhd-di-sekolah">strategi mengajar anak ADHD di sekolah</a>. Untuk anak autis, prediktabilitas penting, sehingga jadwal buddy sebaiknya tetap dan diberitahukan sebelumnya, seperti dibahas di <a href="strategi-mengajar-anak-autis-di-kelas">strategi mengajar anak autis di kelas</a>.</p>
            {{fig:2}}`
    },
    {
      id: 'memantau', h2: 'Memantau Perkembangan dan Menghindari Kesalahan Umum',
      toc: 'Memantau dan kesalahan umum',
      html: `
            <p>Pemantauan tidak harus rumit. Guru cukup mencatat, misalnya sekali seminggu: berapa kali anak ABK ikut bermain, siapa yang mengajak lebih dulu, dan bagaimana perasaan anak (bisa ditanyakan dengan skala gambar wajah). Catatan ini dibahas dalam pertemuan rutin dengan orang tua dan menjadi bahan evaluasi PPI.</p>
            <p>Kesalahan yang paling sering terjadi:</p>
            <ul>
                <li><strong>Menunjuk tanpa melatih.</strong> Teman yang tidak dibekali cenderung mengambil alih, misalnya menyelesaikan tugas anak ABK, sehingga anak justru kurang berlatih.</li>
                <li><strong>Satu teman selamanya.</strong> Buddy tunggal cepat lelah, dan anak ABK menjadi tergantung pada satu orang.</li>
                <li><strong>Mengumumkan di depan kelas.</strong> Menyebut "Dina akan menjaga Raka karena Raka autis" membuat anak dicap berbeda. Bicarakan secara pribadi dan seizin keluarga.</li>
                <li><strong>Guru melepas sepenuhnya.</strong> Anak-anak tetap butuh orang dewasa yang memantau, terutama untuk mencegah ejekan dan kelelahan.</li>
                <li><strong>Memberi imbalan yang salah.</strong> Hadiah untuk "menjaga" teman mengubah persahabatan menjadi transaksi. Apresiasi sebaiknya untuk kerja sama seluruh kelompok.</li>
            </ul>
            <p>Masa transisi seperti naik kelas atau pindah jenjang adalah waktu yang tepat untuk meninjau ulang susunan buddy; panduan <a href="transisi-anak-abk-dari-tk-ke-sd">transisi anak ABK dari TK ke SD</a> membahas persiapan masa peralihan ini.</p>`
    },
    {
      id: 'orang-tua', h2: 'Peran Orang Tua dalam Mendukung Buddy System',
      toc: 'Peran orang tua',
      html: `
            <p>Orang tua anak ABK bisa membantu dengan memberi informasi tentang kesukaan, pemicu kewalahan, dan cara berkomunikasi anak kepada guru. Informasi ini membuat pelatihan teman sebaya lebih tepat sasaran. Diskusikan juga sejauh mana keluarga nyaman informasi tentang kondisi anak dibagikan kepada teman-temannya.</p>
            <p>Di rumah, orang tua bisa memperpanjang pertemanan yang tumbuh di sekolah, misalnya mengundang teman buddy bermain di akhir pekan dengan kegiatan yang disukai keduanya. Riset Asmus dan rekan menunjukkan pertemanan sekolah jarang berlanjut ke luar jam sekolah dengan sendirinya, sehingga inisiatif kecil dari keluarga berarti besar.</p>
            <p>Orang tua teman sebaya juga punya peran: mendukung anaknya yang menjadi buddy, sekaligus memastikan anaknya tidak terbebani. Kerja sama antarwali murid seperti ini adalah bagian dari <a href="peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>. Bila empati menjadi nilai keluarga, anak lebih siap menjadi teman yang baik, seperti dibahas dalam <a href="empati-pada-anak-berkebutuhan-khusus">empati pada anak berkebutuhan khusus</a>.</p>`
    }
  ],
  storyHighlight: 'Di Sekolah Inklusi Taruna Imani, kegiatan bersama seperti makan siang, memasak, dan kunjungan ke museum menjadi kesempatan siswa saling mengenal. Guru dan pendamping YUKA siap berdiskusi dengan sekolah atau orang tua yang ingin memulai program teman sebaya. Hubungi kami lewat WhatsApp untuk berbagi pengalaman.',
  faq: [
    { q: 'Apa itu buddy system untuk anak ABK?', a: 'Buddy system untuk anak ABK adalah program sekolah yang memasangkan anak berkebutuhan khusus dengan satu atau beberapa teman sebaya yang sudah dilatih, supaya anak lebih mudah ikut bermain, bekerja kelompok, dan berteman. Guru tetap merencanakan dan memantau program ini.' },
    { q: 'Apa bedanya buddy system dengan peer tutoring?', a: 'Buddy system berfokus pada interaksi sosial dan rasa diterima, misalnya teman saat istirahat. Peer tutoring berfokus pada bantuan akademik, misalnya latihan membaca berpasangan. Keduanya bisa berjalan bersamaan dengan tujuan yang berbeda.' },
    { q: 'Apakah buddy system terbukti efektif?', a: 'Riset mendukungnya bila dijalankan terstruktur. Meta-analisis Watkins dan rekan (2019) atas 28 studi menemukan intervensi yang dimediasi teman sebaya umumnya berefek besar, dan uji acak Asmus dan rekan (2017) menemukan siswa dalam peer network mendapat lebih banyak teman baru.' },
    { q: 'Berapa jumlah teman ideal dalam buddy system?', a: 'Banyak sekolah memakai kelompok kecil berisi dua sampai empat teman yang bergantian. Cara ini mencegah satu anak kelelahan dan membuat anak ABK tidak tergantung pada satu orang saja.' },
    { q: 'Bagaimana cara memilih teman pendamping?', a: 'Pilih teman yang sukarela, punya minat sama, sabar, bisa mengikuti arahan guru, dan bisa menjaga rahasia. Siswa paling pintar atau paling populer belum tentu paling cocok. Mintalah izin orang tua teman tersebut.' },
    { q: 'Apakah teman sebaya perlu tahu diagnosis anak ABK?', a: 'Tidak harus. Yang perlu diketahui adalah kesukaan, kekuatan, dan cara berkomunikasi anak. Informasi diagnosis hanya dibagikan bila keluarga mengizinkan dan dengan bahasa yang tidak memberi cap.' },
    { q: 'Apakah buddy system bisa menggantikan shadow teacher?', a: 'Tidak. Shadow teacher dan guru pembimbing khusus membantu pembelajaran dan perilaku anak, sedangkan buddy system membantu sisi sosial. Tanggung jawab atas keamanan dan pembelajaran tetap pada orang dewasa.' },
    { q: 'Apa kesalahan paling umum saat menjalankan buddy system?', a: 'Menunjuk teman tanpa pelatihan, memakai satu buddy permanen, mengumumkan kondisi anak di depan kelas, melepas pemantauan guru, dan memberi hadiah kepada teman karena menjaga anak ABK.' }
  ],
  relatedIntro: 'Bacaan lanjutan untuk guru dan orang tua di sekolah inklusi:',
  related: [
    { href: 'classroom-management-kelas-inklusi', title: 'Classroom Management Kelas Inklusi', desc: 'Tata ruang, rutinitas, dan aturan kelas yang ramah semua anak.' },
    { href: 'social-skills-training-anak-autis', title: 'Social Skills Training Anak Autis', desc: 'Cara melatih keterampilan sosial secara bertahap.' },
    { href: 'shadow-teacher-adalah', title: 'Shadow Teacher Adalah', desc: 'Peran dan tugas pendamping dewasa di kelas.' },
    { href: 'strategi-mengajar-anak-autis-di-kelas', title: 'Strategi Mengajar Anak Autis di Kelas', desc: 'Strategi berbasis bukti untuk guru kelas inklusi.' }
  ],
  tags: ['BuddySystem', 'SekolahInklusi', 'TemanSebaya', 'PendidikanInklusi', 'YUKA'],
  sources: [
    { url: WATKINS, label: 'Watkins L dkk. Interventions for students with autism in inclusive settings: A best-evidence synthesis and meta-analysis. Psychological Bulletin, 2019' },
    { url: ASMUS, label: 'Asmus JM dkk. Efficacy and Social Validity of Peer Network Interventions for High School Students With Severe Disabilities. Am J Intellect Dev Disabil, 2017' },
    { url: KASARI, label: 'Kasari C dkk. Children with autism spectrum disorder and social skills groups at school: a randomized trial. J Child Psychol Psychiatry, 2016' },
    { url: PERMEN48, label: 'Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas (JDIH Kemendikdasmen)' }
  ]
};

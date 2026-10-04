'use strict';
// Isi artikel /artikel/melatih-anak-abk-naik-transportasi-umum (cycle #73, slot 2026-10-06).
// Sudut: travel training, yaitu melatih anak/remaja berkebutuhan khusus memakai transportasi umum secara bertahap.
// Tidak ada artikel lain di situs yang membahas transportasi (cek kanibal 5 Okt 2026).
// Fakta dicek pada 5 Oktober 2026:
//  - UU 8/2016, teks resmi PDF JDIH BPK (data/sumber/apa-saja-hak-anak-berkebutuhan-khusus/uu8-2016.txt):
//    Pasal 18 (hak aksesibilitas: fasilitas publik + akomodasi yang layak), Pasal 19 (hak pelayanan publik:
//    akomodasi yang layak, pendampingan, fasilitas mudah diakses tanpa tambahan biaya), Pasal 23 huruf a dan c
//    (mobilitas pribadi; pelatihan dan pendampingan untuk hidup mandiri), Pasal 105 ayat (2) (pelayanan publik termasuk
//    jasa transportasi publik), Pasal 107 ayat (1) (darat, kereta api, laut, udara).
//  - Permenhub PM 98 Tahun 2017, judul dan tanggal berlaku dari hasil pencarian JDIH BPK (Details/103140):
//    Penyediaan Aksesibilitas pada Pelayanan Jasa Transportasi Publik bagi Pengguna Jasa Berkebutuhan Khusus,
//    berlaku 4 Oktober 2017.
//  - Price, Marsh, Fisher 2018 (PMID 29556448): 4 dewasa muda dengan disabilitas intelektual dan perkembangan,
//    total-task chaining + Google Maps, 3 dari 4 bisa naik bus mandiri.
// Tidak ada tarif, rute, atau nama operator yang dikarang. Foto: Dokumentasi YUKA, tanpa keterangan kondisi anak.

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
const UU8 = 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016';
const PM98 = 'https://peraturan.bpk.go.id/Details/103140/permenhub-no-98-tahun-2017';
const PRICE = 'https://pubmed.ncbi.nlm.nih.gov/29556448/';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';

module.exports = {
  slug: 'melatih-anak-abk-naik-transportasi-umum',
  date: '2026-10-06',
  category: 'Pendidikan',
  keyword: 'melatih anak abk naik transportasi umum',
  titleTag: 'Melatih Anak ABK Naik Transportasi Umum: Panduan',
  metaDesc: 'Cara melatih anak ABK naik transportasi umum secara bertahap: kesiapan, pecahan langkah, latihan di rute nyata, rencana darurat, dan hak aksesibilitasnya.',
  ogTitle: 'Melatih Anak ABK Naik Transportasi Umum: Langkah Bertahap Menuju Perjalanan Mandiri',
  ogDesc: 'Panduan travel training untuk orang tua dan guru: menilai kesiapan, memecah perjalanan menjadi langkah kecil, berlatih di rute nyata, mengurangi pendampingan, dan menyiapkan rencana darurat.',
  h1: 'Melatih Anak ABK Naik Transportasi Umum: Langkah Bertahap Menuju Perjalanan Mandiri',
  crumb: 'Melatih Anak ABK Naik Transportasi Umum',
  parent: { name: 'Penyandang Disabilitas', href: 'penyandang-disabilitas' },
  about: ['Travel training', 'Transportasi umum', 'Kemandirian anak berkebutuhan khusus', 'Aksesibilitas transportasi', 'UU 8 Tahun 2016'],
  keywords: 'melatih anak abk naik transportasi umum, travel training anak berkebutuhan khusus, kemandirian anak disabilitas, anak autis naik bus, aksesibilitas transportasi disabilitas, PM 98 tahun 2017',
  readTime: '12 menit baca',
  image: {
    file: 'Dokumentasi/artikel/melatih-anak-abk-naik-transportasi-umum-dalam-bus.webp',
    w: 1200, h: 900,
    alt: 'Beberapa anak dan pendamping berkaus merah muda duduk di bangku bus, sebagian tertawa, dengan jalan raya terlihat dari jendela',
    caption: 'Siswa dan pendamping YUKA di dalam bus saat perjalanan kegiatan luar sekolah. Perjalanan rombongan yang menyenangkan bisa menjadi pengenalan awal sebelum latihan bepergian yang lebih mandiri.',
    credit: CREDIT,
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  figures: [
    {
      file: 'Dokumentasi/artikel/melatih-anak-abk-naik-transportasi-umum-tempat-duduk.webp', w: 936, h: 1098,
      alt: 'Seorang pendamping berkerudung tersenyum sambil memegang tangan anak yang duduk di bangku bus dekat jendela',
      caption: 'Pendamping duduk di samping anak selama perjalanan. Tahap didampingi penuh seperti ini adalah anak tangga pertama latihan.',
      credit: CREDIT
    },
    {
      file: 'Dokumentasi/artikel/melatih-anak-abk-naik-transportasi-umum-diagram.svg', w: 1200, h: 600,
      alt: 'Diagram tangga lima tahap latihan: didampingi penuh, pendamping menjaga jarak, bertemu di titik tertentu, kabar lewat telepon, mandiri dengan rencana darurat',
      caption: 'Tangga pengurangan pendampingan. Anak naik satu tahap hanya bila tahap sebelumnya sudah lancar beberapa kali berturut-turut.',
      credit: 'Diagram: Tim YUKA.'
    },
    {
      file: 'Dokumentasi/artikel/melatih-anak-abk-naik-transportasi-umum-tiba-di-tujuan.webp', w: 936, h: 748,
      alt: 'Rombongan anak berseragam dan pendamping berbaris di aula museum yang luas dengan lantai bergaris dan maket gunung',
      caption: 'Rombongan tiba di aula museum. Bagian akhir perjalanan, yaitu menemukan pintu masuk dan berkumpul di titik temu, juga perlu dilatih.',
      credit: CREDIT
    }
  ],
  answer: '<strong>Melatih anak ABK naik transportasi umum</strong> dilakukan bertahap: menilai kesiapan, memecah perjalanan menjadi langkah kecil, berlatih berulang di rute nyata, lalu mengurangi pendampingan sedikit demi sedikit. Rencana darurat dan kartu identitas disiapkan sejak awal. Tujuannya kemandirian yang aman, bukan melepas anak sendirian secepatnya.',
  intro: `
            <p>Bagi banyak remaja, naik bus atau kereta sendiri adalah langkah pertama menuju kemandirian: berangkat sekolah, ke tempat kursus, atau kelak ke tempat kerja tanpa harus diantar. Bagi remaja berkebutuhan khusus, langkah itu sering tertunda bertahun-tahun, bukan karena tidak mampu, tetapi karena belum pernah dilatih secara terencana.</p>
            <p>Di banyak negara, latihan semacam ini dikenal sebagai <em>travel training</em>. Panduan ini mengadaptasinya untuk keluarga dan sekolah di Indonesia: kapan anak mulai siap, cara memecah perjalanan menjadi langkah yang bisa diajarkan, tahapan mengurangi pendampingan, rencana darurat, dan hak aksesibilitas transportasi menurut undang-undang. Artikel ini melengkapi pembahasan YUKA tentang hak dan kehidupan <a href="penyandang-disabilitas">penyandang disabilitas</a>.</p>`,
  infoBox: 'Setiap anak berbeda. Keputusan kapan anak boleh bepergian lebih mandiri sebaiknya diambil bersama keluarga, guru, dan terapis yang mengenal anak, dengan memperhitungkan kondisi kesehatan, kemampuan meminta tolong, dan keamanan rute.',
  sections: [
    {
      id: 'manfaat', h2: 'Mengapa Latihan Transportasi Umum Penting',
      toc: 'Mengapa latihan ini penting',
      html: `
            <p>Kemampuan bepergian membuka banyak pintu lain. Remaja yang bisa naik angkutan umum lebih mudah mengikuti kegiatan di luar rumah, magang, dan bekerja. Pembahasan tentang <a href="supported-employment-disabilitas-di-indonesia">supported employment</a> dan <a href="pekerjaan-untuk-penyandang-disabilitas">pekerjaan untuk penyandang disabilitas</a> di situs ini menunjukkan bahwa transportasi sering menjadi penghambat nyata, bahkan ketika pekerjaannya sudah tersedia.</p>
            <p>Bagi keluarga, kemandirian bepergian mengurangi ketergantungan pada antar jemput. Bagi anak, perjalanan memberi kesempatan mempraktikkan banyak keterampilan sekaligus: membaca petunjuk, mengelola uang, berkomunikasi dengan petugas, menunggu, dan mengatur emosi di tempat ramai. Latihan ini sejalan dengan keterampilan hidup lain seperti <a href="money-management-untuk-penyandang-disabilitas">mengelola uang</a>.</p>
            <p>Undang-undang juga memandang kemandirian sebagai hak. ${ext(UU8, 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')} Pasal 23 menyebut hak hidup secara mandiri dan dilibatkan dalam masyarakat, termasuk hak atas mobilitas pribadi dan hak mendapatkan pelatihan serta pendampingan untuk hidup secara mandiri. Latihan bepergian adalah salah satu wujud paling konkret dari hak tersebut.</p>`
    },
    {
      id: 'kesiapan', h2: 'Menilai Kesiapan Anak Sebelum Mulai',
      toc: 'Menilai kesiapan anak',
      html: `
            <p>Tidak ada usia pasti kapan anak siap. Yang lebih berguna adalah melihat keterampilan dasar yang sudah dimiliki dan yang masih perlu dilatih. Gunakan tabel berikut sebagai daftar periksa awal, bukan sebagai syarat lulus.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Keterampilan</th><th>Pertanyaan pengamatan</th><th>Bila belum bisa</th></tr></thead>
                <tbody>
                    <tr><td>Keselamatan di jalan</td><td>Apakah anak berhenti di tepi jalan dan menyeberang di tempat yang aman?</td><td>Latih dulu berjalan kaki di sekitar rumah</td></tr>
                    <tr><td>Identitas diri</td><td>Bisakah anak menyebut atau menunjukkan nama, alamat, dan nomor orang tua?</td><td>Siapkan kartu identitas dan latih cara menunjukkannya</td></tr>
                    <tr><td>Meminta tolong</td><td>Bisakah anak mendekati petugas berseragam dan menyampaikan kebutuhan, termasuk lewat kartu atau aplikasi?</td><td>Latih kalimat atau kartu permintaan tolong</td></tr>
                    <tr><td>Menunggu</td><td>Bisakah anak menunggu beberapa menit di tempat ramai tanpa pergi?</td><td>Latih menunggu dengan pengatur waktu dan aktivitas pengisi</td></tr>
                    <tr><td>Mengenali tanda</td><td>Bisakah anak mengenali nomor rute, warna kendaraan, atau nama halte tujuan?</td><td>Buat kartu rute bergambar</td></tr>
                    <tr><td>Uang atau kartu</td><td>Bisakah anak membayar atau menempelkan kartu tiket?</td><td>Latih transaksi di rumah dan di toko dekat rumah</td></tr>
                </tbody>
            </table></div>
            <p>Pertimbangkan juga kondisi kesehatan. Anak dengan epilepsi, alergi berat, atau kebutuhan obat rutin perlu rencana medis tertulis yang dibicarakan dengan dokter sebelum latihan mandiri. Anak dengan <a href="disabilitas-sensorik">disabilitas sensorik</a> atau <a href="disabilitas-fisik">disabilitas fisik</a> memerlukan rute yang benar-benar aksesibel, sehingga survei rute menjadi lebih penting.</p>`
    },
    {
      id: 'pecah-langkah', h2: 'Memecah Perjalanan Menjadi Langkah Kecil',
      toc: 'Memecah perjalanan menjadi langkah kecil',
      html: `
            <p>Perjalanan yang bagi orang dewasa terasa sederhana sebenarnya terdiri dari puluhan langkah. Dalam pendidikan khusus, teknik memecah tugas ini disebut <em>task analysis</em> atau analisis tugas. Setiap langkah diajarkan dan dicatat, sehingga terlihat jelas bagian mana yang sudah dikuasai dan bagian mana yang masih perlu bantuan.</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table">
                <thead><tr><th>Tahap perjalanan</th><th>Contoh langkah yang diajarkan</th></tr></thead>
                <tbody>
                    <tr><td>Persiapan di rumah</td><td>Cek jadwal, bawa kartu identitas, ponsel terisi daya, uang atau kartu tiket, pamit dan kirim pesan berangkat</td></tr>
                    <tr><td>Berjalan ke halte</td><td>Ikuti rute jalan kaki yang disepakati, menyeberang di tempat aman, tunggu di area halte</td></tr>
                    <tr><td>Naik kendaraan</td><td>Kenali nomor atau warna rute, tanya petugas bila ragu, bayar atau tempel kartu, cari tempat duduk atau pegangan</td></tr>
                    <tr><td>Selama perjalanan</td><td>Perhatikan penanda jalan atau pengumuman halte, tetap duduk atau berpegangan, jaga barang bawaan</td></tr>
                    <tr><td>Turun</td><td>Bersiap satu halte sebelumnya, tunggu kendaraan berhenti penuh, turun dengan hati-hati, cek barang</td></tr>
                    <tr><td>Tiba di tujuan</td><td>Jalan ke pintu masuk tujuan, lapor ke orang yang ditunjuk, kirim pesan sudah tiba</td></tr>
                </tbody>
            </table></div>
            <p>Untuk anak yang terbantu visual, ubah tabel ini menjadi kartu bergambar atau foto langkah demi langkah, mirip dengan <a href="cara-membuat-jadwal-visual-untuk-anak-autis">jadwal visual untuk anak autis</a>. Foto halte, pintu bus, dan bangunan tujuan yang diambil sendiri biasanya lebih mudah dipahami daripada gambar umum.</p>`
    },
    {
      id: 'latihan', h2: 'Teknik Latihan: Contoh, Bantuan, dan Pengulangan',
      toc: 'Teknik latihan',
      html: `
            <p>Teknik yang dipakai sama dengan yang digunakan guru pendidikan khusus untuk mengajarkan keterampilan lain. Pendamping memberi contoh, membantu seperlunya, lalu mengurangi bantuan secara bertahap.</p>
            <ul>
                <li><strong>Memberi contoh.</strong> Pendamping memperagakan langkahnya sambil menjelaskan singkat, misalnya "Lihat, ini nomor busnya, sama dengan kartu kita."</li>
                <li><strong>Video sebelum berangkat.</strong> Rekaman pendek rute yang akan dilalui membantu anak mengenali tempat sebelum ia berada di sana.</li>
                <li><strong>Bantuan berjenjang.</strong> Mulai dari bantuan yang paling ringan yang cukup: isyarat menunjuk, lalu petunjuk lisan, baru bantuan fisik bila perlu.</li>
                <li><strong>Seluruh rangkaian setiap kali.</strong> Anak berlatih dari rumah sampai tujuan, bukan hanya potongan tertentu, sehingga ia mengenal alur utuhnya.</li>
                <li><strong>Pengulangan di rute yang sama.</strong> Satu rute dikuasai dulu sebelum mencoba rute lain atau jam yang lebih ramai.</li>
            </ul>
            <p>Teknologi bisa membantu. Dalam studi kecil oleh Price dan rekan (2018), empat dewasa muda dengan disabilitas intelektual dan perkembangan dilatih memakai aplikasi peta di ponsel untuk naik bus ke berbagai lokasi, dengan metode mengajarkan seluruh rangkaian langkah. Tiga dari empat peserta akhirnya bisa bernavigasi naik bus secara mandiri (${ext(PRICE, 'Price dkk., 2018')}). Studinya kecil, jadi anggap sebagai contoh cara, bukan jaminan hasil.</p>
            <p>Anak yang belum lancar bicara bisa membawa kartu komunikasi atau memakai <a href="aplikasi-komunikasi-aac-terbaik-untuk-anak">aplikasi AAC</a> untuk bertanya kepada petugas, misalnya "Saya mau turun di halte sekolah."</p>
            {{fig:0}}`
    },
    {
      id: 'tangga', h2: 'Tangga Pengurangan Pendampingan',
      toc: 'Tangga pengurangan pendampingan',
      html: `
            <p>Kunci latihan adalah mengurangi pendampingan secara sengaja dan terukur. Setiap anak tangga dipertahankan sampai anak berhasil beberapa kali berturut-turut tanpa kesalahan yang berbahaya, baru naik ke anak tangga berikutnya.</p>
            {{fig:1}}
            <ol>
                <li><strong>Didampingi penuh.</strong> Pendamping duduk di samping anak dan membimbing setiap langkah.</li>
                <li><strong>Pendamping menjaga jarak.</strong> Pendamping duduk di bangku lain dan hanya membantu bila anak benar-benar kesulitan.</li>
                <li><strong>Bertemu di titik tertentu.</strong> Pendamping menunggu di halte awal dan halte tujuan, anak menempuh perjalanannya sendiri.</li>
                <li><strong>Kabar lewat telepon.</strong> Anak berangkat dan tiba sendiri, mengirim pesan saat berangkat dan saat sampai.</li>
                <li><strong>Mandiri dengan rencana darurat.</strong> Anak bepergian sendiri di rute yang sudah dikuasai, dengan kartu identitas dan nomor penting yang selalu dibawa.</li>
            </ol>
            <p>Catat setiap perjalanan: tanggal, langkah yang masih dibantu, kesalahan, dan waktu tempuh. Catatan ini membantu keluarga dan guru memutuskan kapan naik tahap dengan alasan yang jelas, bukan perasaan semata. Bila anak mengikuti <a href="person-centered-planning-disabilitas">perencanaan berpusat pada pribadi</a>, target bepergian mandiri bisa dimasukkan sebagai salah satu tujuannya.</p>`
    },
    {
      id: 'darurat', h2: 'Rencana Keamanan dan Situasi Darurat',
      toc: 'Rencana keamanan dan darurat',
      html: `
            <p>Kemandirian yang aman bukan berarti tanpa dukungan sama sekali. Rencana darurat disiapkan sejak latihan pertama dan dilatihkan, bukan hanya ditulis.</p>
            <ul>
                <li><strong>Kartu identitas</strong> berisi nama, nomor orang tua, dan informasi kesehatan penting, disimpan di tempat yang sama setiap hari. Bagi penyandang disabilitas, UU 8/2016 juga mengenal hak atas kartu penyandang disabilitas.</li>
                <li><strong>Aturan kabar.</strong> Pesan singkat saat berangkat, saat berganti kendaraan bila ada, dan saat tiba.</li>
                <li><strong>Kalimat atau kartu minta tolong</strong> kepada petugas berseragam, misalnya "Saya tersesat, tolong hubungi nomor ini."</li>
                <li><strong>Latihan skenario.</strong> Apa yang dilakukan bila salah naik kendaraan, kelewatan halte, ponsel mati, merasa tidak enak badan, atau didekati orang asing yang memaksa.</li>
                <li><strong>Titik aman.</strong> Tempat yang disepakati untuk menunggu bila bingung, seperti pos petugas atau loket.</li>
            </ul>
            <p>Anak yang mudah kewalahan oleh keramaian perlu strategi menenangkan diri yang sudah dilatih, misalnya penutup telinga atau hitungan napas. Bila anak mudah pergi tanpa pamit, rencana keamanan perlu disusun lebih ketat bersama tenaga profesional sebelum latihan mandiri dimulai.</p>`
    },
    {
      id: 'hak', h2: 'Hak Aksesibilitas Transportasi bagi Penyandang Disabilitas',
      toc: 'Hak aksesibilitas transportasi',
      html: `
            <p>Latihan anak hanyalah satu sisi. Sisi lainnya adalah kewajiban penyelenggara transportasi untuk menyediakan layanan yang bisa diakses. Beberapa ketentuan dalam ${ext(UU8, 'UU 8/2016')} yang relevan:</p>
            <ul>
                <li><strong>Pasal 18</strong>: hak aksesibilitas meliputi hak mendapatkan aksesibilitas untuk memanfaatkan fasilitas publik dan mendapatkan akomodasi yang layak.</li>
                <li><strong>Pasal 19</strong>: hak pelayanan publik meliputi akomodasi yang layak serta pendampingan, penerjemahan, dan fasilitas yang mudah diakses di tempat layanan publik tanpa tambahan biaya.</li>
                <li><strong>Pasal 105 ayat (2)</strong>: pelayanan publik yang wajib mudah diakses termasuk pelayanan jasa transportasi publik.</li>
                <li><strong>Pasal 107 ayat (1)</strong>: jasa transportasi tersebut mencakup transportasi darat, kereta api, laut, dan udara.</li>
            </ul>
            <p>Di tingkat kementerian, ${ext(PM98, 'Peraturan Menteri Perhubungan Nomor PM 98 Tahun 2017')} mengatur penyediaan aksesibilitas pada pelayanan jasa transportasi publik bagi pengguna jasa berkebutuhan khusus. Dalam praktik, ketersediaan fasilitas berbeda-beda antarkota dan antaroperator, sehingga survei rute tetap diperlukan.</p>
            <p>Mengajarkan anak tentang haknya juga bagian dari latihan. Anak boleh meminta kursi prioritas, bertanya kepada petugas, dan meminta bantuan naik atau turun. Ringkasan hak anak berkebutuhan khusus yang lebih luas ada di artikel <a href="apa-saja-hak-anak-berkebutuhan-khusus">apa saja hak anak berkebutuhan khusus</a>.</p>`
    },
    {
      id: 'peran', h2: 'Peran Sekolah, Keluarga, dan Petugas',
      toc: 'Peran sekolah, keluarga, dan petugas',
      html: `
            <p>Latihan berjalan paling baik bila semua pihak memakai cara yang sama. Sekolah bisa memasukkan keterampilan bepergian ke dalam program keterampilan hidup dan kegiatan luar kelas. Keluarga melanjutkan latihan di rute harian seperti ke sekolah atau ke rumah nenek. Pertemuan berkala memastikan tahap pendampingan yang dipakai di sekolah dan di rumah sama.</p>
            <p>Petugas transportasi juga mitra. Bila memungkinkan, perkenalkan anak kepada petugas di halte atau stasiun yang rutin dilalui, dan jelaskan secara singkat cara terbaik berkomunikasi dengannya. Untuk anak dengan gangguan pendengaran, cara berkomunikasi yang efektif dibahas di artikel <a href="cara-berkomunikasi-dengan-anak-tuna-rungu">cara berkomunikasi dengan anak tunarungu</a>.</p>
            <p>Kisah kemandirian alumni sering menjadi penyemangat. Salah satunya dapat dibaca di <a href="kisah-mas-ilham-mandiri-telur-asin">kisah Mas Ilham yang mandiri lewat usaha telur asin</a>. Kemandirian bepergian adalah salah satu fondasi agar cerita seperti ini bisa terjadi.</p>
            {{fig:2}}`
    },
    {
      id: 'kesalahan', h2: 'Kesalahan yang Sering Terjadi',
      toc: 'Kesalahan yang sering terjadi',
      html: `
            <p>Beberapa kesalahan membuat latihan berhenti di tengah jalan:</p>
            <ul>
                <li><strong>Melompati tahap.</strong> Anak yang lancar dua kali ditemani langsung dilepas sendiri. Satu pengalaman buruk bisa membuatnya takut berbulan-bulan.</li>
                <li><strong>Hanya berlatih di jam sepi.</strong> Kondisi nyata di jam berangkat sekolah berbeda. Latih bertahap ke jam yang lebih ramai.</li>
                <li><strong>Tidak menyiapkan perubahan.</strong> Halte pindah, jalan ditutup, atau jadwal berubah. Latih juga apa yang dilakukan saat rencana tidak berjalan.</li>
                <li><strong>Terlalu protektif.</strong> Pendamping yang selalu mengambil alih membuat anak tidak pernah berlatih mengambil keputusan.</li>
                <li><strong>Menganggap latihan selesai.</strong> Keterampilan perlu dipertahankan. Tinjau ulang setiap kali ada perubahan rute, sekolah, atau kondisi anak.</li>
            </ul>
            <p>Latihan transportasi adalah perjalanan panjang. Ada anak yang butuh beberapa minggu, ada yang butuh berbulan-bulan untuk satu rute. Keduanya wajar. Yang penting, setiap langkah kecil yang dikuasai menambah ruang gerak anak di dunia yang lebih luas.</p>`
    }
  ],
  storyHighlight: 'Siswa Sekolah Inklusi Taruna Imani rutin mengikuti kegiatan di luar sekolah, dari kunjungan museum sampai candi, termasuk perjalanan bersama dengan bus. Orang tua yang ingin berdiskusi tentang cara melatih kemandirian anak di rumah dan di jalan dapat menghubungi tim YUKA lewat WhatsApp.',
  faq: [
    { q: 'Bagaimana cara melatih anak ABK naik transportasi umum?', a: 'Lakukan bertahap: nilai kesiapan, pecah perjalanan menjadi langkah kecil, berlatih berulang di rute nyata dengan contoh dan bantuan, lalu kurangi pendampingan setahap demi setahap. Siapkan kartu identitas dan rencana darurat sejak awal.' },
    { q: 'Pada usia berapa anak berkebutuhan khusus bisa naik angkutan umum sendiri?', a: 'Tidak ada usia pasti. Yang menentukan adalah keterampilan seperti keselamatan di jalan, kemampuan meminta tolong, menunggu, dan mengenali rute, serta kondisi kesehatan anak. Keputusan sebaiknya diambil bersama keluarga, guru, dan terapis.' },
    { q: 'Apa itu travel training?', a: 'Travel training adalah latihan terencana untuk mengajarkan seseorang, termasuk anak dan remaja berkebutuhan khusus, menempuh rute tertentu dengan transportasi umum secara aman dan mandiri. Latihannya memakai analisis tugas, contoh, bantuan berjenjang, dan pengurangan pendampingan.' },
    { q: 'Apa yang harus dibawa anak saat latihan naik bus?', a: 'Kartu identitas berisi nama, nomor orang tua, dan informasi kesehatan penting, ponsel yang terisi daya, uang atau kartu tiket, kartu rute bergambar, dan kartu minta tolong bila anak belum lancar bicara.' },
    { q: 'Apa hak penyandang disabilitas dalam transportasi umum?', a: 'UU 8/2016 menjamin hak aksesibilitas dan pelayanan publik, termasuk akomodasi yang layak dan pendampingan tanpa tambahan biaya. Pasal 105 dan 107 menegaskan pelayanan jasa transportasi publik darat, kereta api, laut, dan udara wajib mudah diakses.' },
    { q: 'Apa isi Permenhub PM 98 Tahun 2017?', a: 'Peraturan Menteri Perhubungan Nomor PM 98 Tahun 2017 mengatur penyediaan aksesibilitas pada pelayanan jasa transportasi publik bagi pengguna jasa berkebutuhan khusus. Peraturan ini berlaku sejak 4 Oktober 2017.' },
    { q: 'Bagaimana jika anak tersesat atau salah naik kendaraan?', a: 'Latih skenario ini sebelumnya: tetap tenang, turun di tempat aman, mendekati petugas berseragam, menunjukkan kartu minta tolong, dan menghubungi nomor orang tua. Sepakati juga titik aman untuk menunggu.' },
    { q: 'Kapan pendampingan boleh dikurangi?', a: 'Setelah anak berhasil menempuh rute di tahap yang sama beberapa kali berturut-turut tanpa kesalahan yang berbahaya. Catatan perjalanan membantu memutuskannya dengan alasan yang jelas, dan pendampingan bisa ditambah lagi bila ada perubahan rute.' }
  ],
  relatedIntro: 'Bacaan lain tentang kemandirian dan hak penyandang disabilitas:',
  related: [
    { href: 'apa-saja-hak-anak-berkebutuhan-khusus', title: 'Apa Saja Hak Anak Berkebutuhan Khusus?', desc: 'Hak anak menurut UU 8/2016 dan PP 13/2020.' },
    { href: 'money-management-untuk-penyandang-disabilitas', title: 'Money Management untuk Penyandang Disabilitas', desc: 'Melatih kemandirian mengelola uang.' },
    { href: 'supported-employment-disabilitas-di-indonesia', title: 'Supported Employment Disabilitas di Indonesia', desc: 'Jalan menuju pekerjaan dengan dukungan.' },
    { href: 'person-centered-planning-disabilitas', title: 'Person Centered Planning Disabilitas', desc: 'Merencanakan masa depan berpusat pada pribadi.' }
  ],
  tags: ['Kemandirian', 'TravelTraining', 'TransportasiUmum', 'Aksesibilitas', 'YUKA'],
  sources: [
    { url: UU8, label: 'Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (JDIH BPK): Pasal 18, 19, 23, 105, 107' },
    { url: PM98, label: 'Peraturan Menteri Perhubungan Nomor PM 98 Tahun 2017 tentang Penyediaan Aksesibilitas pada Pelayanan Jasa Transportasi Publik bagi Pengguna Jasa Berkebutuhan Khusus (JDIH BPK)' },
    { url: PRICE, label: 'Price R, Marsh AJ, Fisher MH. Teaching Young Adults with Intellectual and Developmental Disabilities Community-Based Navigation Skills to Take Public Transportation. Behavior Analysis in Practice, 2018' }
  ]
};

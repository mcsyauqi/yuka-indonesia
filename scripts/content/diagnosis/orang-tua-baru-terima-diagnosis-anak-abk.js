'use strict';
// Isi artikel /artikel/orang-tua-baru-terima-diagnosis-anak-abk (kartu Trello fLUiDfNg, catchup 2026-10-04).
// Menggantikan versi 2026-10-03 04:07 WIB (commit c499452) yang judulnya topik ini tetapi badannya
// salinan artikel dukungan-keluarga-anak-abk (konten duplikat, kartu induk P0 gswe5XFa pasangan #4).
// Sudut artikel: peta 90 hari pertama + hak dan layanan resmi di Indonesia. Sisi emosional sengaja dibuat
// singkat dan diarahkan ke menerima-diagnosis-anak-abk supaya kedua artikel tidak saling memakan.
// Semua fakta dicek ke teks aslinya pada 4 Oktober 2026: UU 8/2016 (PDF peraturan.go.id, Pasal 5 ayat 3,
// Pasal 10, 12, 40, 42), PP 13/2020 (PDF peraturan.go.id, Pasal 2, 3, 8), Perpres 82/2018 (PDF peraturan.go.id,
// Pasal 47 ayat 1 huruf b angka 7 dan Pasal 55 ayat 1), Permenkes 66/2014 dan Permendikbudristek 48/2023 (JDIH BPK),
// halaman WHO CST, CDC autism treatment, Kemenkes Healing119, Puskesmas Ngemplak 2 Sleman, PPID Kota Semarang,
// dan Kontan 13 Juni 2024.

const UU8 = 'https://peraturan.go.id/files/uu8-2016bt.pdf';
const UU8_BPK = 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016';
const PP13 = 'https://peraturan.go.id/id/pp-no-13-tahun-2020';
const PERPRES82 = 'https://peraturan.go.id/files/ps82-2018.pdf';
const PMK66 = 'https://peraturan.bpk.go.id/Details/154776/permenkes-no-66-tahun-2014';
const PMDK48 = 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023';
const WHO_CST = 'https://www.who.int/teams/mental-health-and-substance-use/treatment-care/who-caregivers-skills-training-for-families-of-children-with-developmental-delays-and-disorders';
const CDC_TX = 'https://www.cdc.gov/autism/treatment/index.html';
const HEALING = 'https://kesprimkom.kemkes.go.id/konten/127/151/0/cegah-bunuh-diri-dukung-kesehatan-jiwa-kenali-layanan-healing119-id';
const SLEMAN = 'https://pkmngemplak2.slemankab.go.id/psikolog/';
const SEMARANG = 'https://ppid.semarangkota.go.id/layanan-konseling-gratis-di-kota-semarang/';
const KONTAN = 'https://nasional.kontan.co.id/news/pemotongan-manfaat-bpjs-berisiko-putus-terapi-anak-berkebutuhan-khusus';

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  slug: 'orang-tua-baru-terima-diagnosis-anak-abk',
  keyword: 'orang tua baru terima diagnosis anak abk',
  titleTag: 'Orang Tua Baru Terima Diagnosis Anak ABK: Langkah Awal',
  metaDesc: 'Panduan 90 hari pertama setelah anak didiagnosis ABK: dokumen, alur terapi lewat JKN, hak sekolah menurut UU 8/2016, dan konseling orang tua. Baca dulu.',
  ogTitle: 'Orang Tua Baru Terima Diagnosis Anak ABK: Peta 90 Hari Pertama',
  ogDesc: 'Langkah konkret setelah diagnosis: pertanyaan untuk dokter, map dokumen, rujukan JKN untuk rehabilitasi medis, hak pendidikan dan akomodasi yang layak, serta tempat konseling orang tua.',
  h1: 'Orang Tua Baru Terima Diagnosis Anak ABK: Peta 90 Hari Pertama, Hak, dan Layanan yang Bisa Dipakai',
  crumb: 'Orang Tua Baru Terima Diagnosis',
  parent: { name: 'Menerima Diagnosis Anak ABK', href: 'menerima-diagnosis-anak-abk' },
  about: ['Anak berkebutuhan khusus', 'Hak penyandang disabilitas', 'Jaminan Kesehatan Nasional', 'Pendidikan inklusif'],
  keywords: 'orang tua baru terima diagnosis anak abk, setelah anak didiagnosis abk, langkah setelah diagnosis, terapi anak bpjs, rujukan rehabilitasi medis jkn, hak anak disabilitas uu 8 2016, akomodasi yang layak, puspaga, konseling orang tua abk',
  readTime: '12 menit baca',
  image: {
    file: 'Dokumentasi/cpao-anak-belajar-memasak-bersama-ibu-039.webp',
    w: 936, h: 1248,
    alt: 'Seorang ibu berkerudung hijau dan celemek merah muda merapikan kerudung hitam seorang anak kecil yang duduk di depan alas adonan biru dalam kegiatan kelas memasak',
    caption: 'Seorang pendamping merapikan kerudung anak sebelum kelas memasak dimulai. Foto ini dokumentasi kegiatan YUKA, bukan gambaran anak dengan diagnosis tertentu.',
    credit: 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).',
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  answer: 'Untuk <strong>orang tua baru terima diagnosis anak ABK</strong>, langkah awalnya ada empat: pahami isi diagnosis dan minta laporan tertulis, kumpulkan dokumen anak dalam satu map, mulai jalur terapi lewat rujukan berjenjang JKN, lalu bicarakan akomodasi yang layak dengan sekolah. Di sela itu, orang tua juga berhak mendapat dukungan psikologis.',
  intro: `
            <p>Hari ketika dokter atau psikolog menyebut nama sebuah kondisi biasanya terasa sangat panjang. Banyak orang tua pulang dengan selembar kertas, beberapa istilah asing, dan satu pertanyaan besar: <em>besok saya harus mulai dari mana?</em></p>
            <p>Artikel ini tidak membahas cara berdamai dengan perasaan secara panjang, karena topik itu sudah ada di panduan <a href="menerima-diagnosis-anak-abk">menerima diagnosis anak ABK</a>. Di sini kami menyusun peta kerja yang praktis untuk tiga bulan pertama: apa yang ditanyakan ke dokter, dokumen apa yang disimpan, bagaimana terapi bisa diakses lewat Jaminan Kesehatan Nasional (JKN), hak apa saja yang dijamin undang-undang, dan ke mana orang tua bisa mencari dukungan. Untuk pembagian peran di rumah setelah fase awal lewat, lanjutkan ke panduan <a href="dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a>.</p>`,
  infoBox: 'YUKA adalah lembaga pendidikan, bukan fasilitas kesehatan atau kantor hukum. Ketentuan layanan JKN dan aturan sekolah bisa berubah dan berbeda antardaerah. Pastikan detailnya ke Puskesmas tempat anak terdaftar, BPJS Kesehatan, atau dinas pendidikan setempat sebelum mengambil keputusan.',
  sections: [
    {
      id: 'minggu-pertama',
      h2: 'Minggu Pertama: Tidak Harus Langsung Tahu Semuanya',
      toc: 'Minggu pertama setelah diagnosis',
      html: `
            <p>Kaget, sedih, lega karena akhirnya ada penjelasan, atau marah karena merasa terlambat: semua reaksi itu muncul pada banyak orang tua, sering bergantian dalam satu hari. Tidak ada keharusan untuk "kuat" di minggu pertama. Yang perlu dijaga hanya dua hal: anak tetap menjalani rutinitas hariannya, dan orang tua tidak memutuskan hal besar (misalnya pindah sekolah atau membeli paket terapi mahal) dalam keadaan panik.</p>
            <p>Kalau rasa cemas terus menetap sampai mengganggu tidur atau pekerjaan, itu tanda untuk mencari bantuan, bukan tanda gagal sebagai orang tua. Kiat mengelola tekanan sehari-hari ada di artikel <a href="mengelola-stres-orang-tua-anak-abk">mengelola stres orang tua anak ABK</a>, dan tempat konseling yang bisa diakses dibahas di bagian akhir artikel ini.</p>`
    },
    {
      id: 'pahami-diagnosis',
      h2: 'Pahami Isi Diagnosis, Bukan Hanya Namanya',
      toc: 'Pertanyaan untuk dokter atau psikolog',
      html: `
            <p>Nama diagnosis jarang cukup untuk menyusun rencana. Dua anak dengan diagnosis yang sama bisa punya kebutuhan yang sangat berbeda. Karena itu, pada pertemuan berikutnya dengan dokter spesialis anak, psikiater anak, atau psikolog, bawa daftar pertanyaan berikut:</p>
            <ul>
                <li>Kemampuan apa yang paling perlu didukung sekarang: bahasa, motorik, perilaku, belajar, atau kemandirian?</li>
                <li>Terapi apa yang direkomendasikan, berapa kali seminggu, dan kapan hasilnya dievaluasi ulang?</li>
                <li>Apakah ada pemeriksaan lanjutan, misalnya pendengaran, penglihatan, atau tes perkembangan yang lebih rinci?</li>
                <li>Apa yang bisa dilatih di rumah, dan apa yang sebaiknya tidak dilakukan dulu?</li>
                <li>Bolehkah saya mendapat salinan laporan tertulis hasil pemeriksaan?</li>
            </ul>
            <p>Laporan tertulis itu penting. Dokumen ini akan diminta lagi oleh terapis, sekolah, dan kadang oleh petugas layanan sosial. Kalau prosedur pemeriksaannya belum jelas, artikel <a href="asesmen-abk">asesmen anak berkebutuhan khusus</a> menjelaskan tahapan yang lazim. Meminta pendapat kedua dari profesional lain juga hal yang wajar, terutama bila rekomendasi terasa tidak sesuai dengan apa yang orang tua lihat di rumah.</p>`
    },
    {
      id: 'map-dokumen',
      h2: 'Siapkan Satu Map Dokumen Anak',
      toc: 'Map dokumen anak',
      html: `
            <p>Tiga bulan pertama biasanya penuh dengan antrean, formulir, dan pertemuan. Satu map (fisik atau folder di ponsel) menghemat banyak tenaga. Isinya:</p>
            <ul>
                <li>Kartu Keluarga, akta kelahiran, dan kartu JKN anak yang statusnya aktif.</li>
                <li>Laporan diagnosis dan hasil tes, diurutkan menurut tanggal.</li>
                <li>Surat rujukan dan catatan dari setiap kunjungan terapi.</li>
                <li>Catatan harian singkat dari orang tua: perilaku yang muncul, pemicu, dan kemajuan kecil. Catatan seperti ini membantu dokter dan guru melihat pola.</li>
                <li>Rapor dan catatan dari sekolah atau PAUD, kalau anak sudah bersekolah.</li>
            </ul>
            <p>Pemantauan tumbuh kembang anak sendiri sudah menjadi program rutin pemerintah. ${ext(PMK66, 'Permenkes Nomor 66 Tahun 2014')} mengatur pemantauan pertumbuhan, perkembangan, dan gangguan tumbuh kembang anak, jadi Puskesmas adalah titik awal yang sah untuk pemeriksaan lanjutan maupun rujukan.</p>`
    },
    {
      id: 'terapi-jkn',
      h2: 'Mengakses Terapi Lewat JKN: Alur Rujukan Berjenjang',
      toc: 'Terapi lewat JKN',
      html: `
            <p>Banyak orang tua mengira terapi untuk anak berkebutuhan khusus selalu harus dibayar sendiri. Dasar hukumnya berkata lain. ${ext(PERPRES82, 'Perpres Nomor 82 Tahun 2018 tentang Jaminan Kesehatan')} Pasal 47 ayat (1) huruf b mencantumkan <strong>rehabilitasi medis</strong> sebagai salah satu pelayanan kesehatan rujukan tingkat lanjutan yang dijamin. Di rumah sakit, layanan seperti fisioterapi, terapi okupasi, dan terapi wicara umumnya berada di bawah unit rehabilitasi medik.</p>
            <p>Syaratnya, Pasal 55 ayat (1) Perpres yang sama menyebut pelayanan dilaksanakan <strong>secara berjenjang</strong> sesuai kebutuhan medis, dimulai dari fasilitas kesehatan tingkat pertama (FKTP) tempat peserta terdaftar, kecuali keadaan gawat darurat. Dalam praktik, alurnya seperti ini:</p>
            <ol>
                <li>Datang ke FKTP tempat anak terdaftar (Puskesmas, klinik, atau dokter keluarga) dengan membawa kartu JKN dan laporan diagnosis.</li>
                <li>Dokter FKTP memeriksa dan, bila ada indikasi medis, membuat surat rujukan ke rumah sakit.</li>
                <li>Di rumah sakit, dokter spesialis (sering kali dokter spesialis kedokteran fisik dan rehabilitasi) menyusun program terapi.</li>
                <li>Sesi terapi berjalan sesuai program. Simpan setiap catatan dan perhatikan masa berlaku surat rujukan.</li>
            </ol>
            <p>Perlu jujur juga: jumlah sesi, jadwal, dan ketersediaan terapis berbeda di tiap rumah sakit. Pada Juni 2024, ${ext(KONTAN, 'Kontan melaporkan')} keresahan orang tua setelah pihak rumah sakit menyampaikan rencana pembatasan layanan terapi bagi anak berkebutuhan khusus, menyusul surat pernyataan perhimpunan dokter spesialis kedokteran fisik dan rehabilitasi (Perdosri) tentang standardisasi pelayanan. Jadi tanyakan langsung ke rumah sakit rujukan berapa sesi yang bisa diberikan dan bagaimana kelanjutannya, lalu catat jawabannya.</p>`
    },
    {
      id: 'jenis-terapi',
      h2: 'Mengenal Jenis Terapi yang Mungkin Disarankan',
      toc: 'Jenis terapi yang mungkin disarankan',
      html: `
            <p>Rekomendasi terapi bergantung pada kebutuhan anak, bukan pada nama diagnosis saja. Sebagai gambaran, halaman ${ext(CDC_TX, 'CDC tentang penanganan autisme')} menyebut terapi wicara dan bahasa sebagai terapi perkembangan yang paling umum, terapi okupasi untuk melatih kemandirian seperti berpakaian, makan, dan mandi, serta fisioterapi untuk keterampilan gerak halus maupun kasar. Penjelasan lebih rinci ada di artikel:</p>
            <ul>
                <li><a href="terapi-wicara">Terapi wicara</a> untuk kemampuan memahami dan memakai bahasa.</li>
                <li><a href="terapi-okupasi">Terapi okupasi</a> untuk aktivitas sehari-hari dan pengolahan sensorik.</li>
                <li><a href="perbedaan-terapi-okupasi-dan-terapi-wicara">Perbedaan terapi okupasi dan terapi wicara</a>, kalau dokter menyarankan keduanya.</li>
                <li><a href="intervensi-dini">Intervensi dini</a>, terutama untuk anak usia balita.</li>
            </ul>
            <p>Berhati-hatilah dengan tawaran yang menjanjikan "sembuh total" dalam waktu singkat atau meminta pembayaran paket besar di muka. Terapi yang baik selalu punya tujuan yang bisa diukur dan jadwal evaluasi.</p>`
    },
    {
      id: 'hak-anak',
      h2: 'Hak Anak yang Dijamin UU Nomor 8 Tahun 2016',
      toc: 'Hak anak menurut UU 8/2016',
      html: `
            <p>Diagnosis tidak mengurangi hak anak sedikit pun. Sebaliknya, ${ext(UU8, 'Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')} memberi perlindungan tambahan. Pasal 5 ayat (3) menyebut anak penyandang disabilitas berhak atas:</p>
            <ul>
                <li>pelindungan khusus dari diskriminasi, penelantaran, pelecehan, eksploitasi, serta kekerasan dan kejahatan seksual;</li>
                <li>perawatan dan pengasuhan keluarga atau keluarga pengganti untuk tumbuh kembang secara optimal;</li>
                <li>perlindungan kepentingannya dalam pengambilan keputusan;</li>
                <li>perlakuan yang manusiawi sesuai martabat dan hak anak;</li>
                <li>pemenuhan kebutuhan khusus;</li>
                <li>perlakuan yang sama dengan anak lain untuk mencapai integrasi sosial dan pengembangan individu; dan</li>
                <li>pendampingan sosial.</li>
            </ul>
            <table class="classification-table">
                <thead><tr><th>Bidang</th><th>Isi pokok dalam UU 8/2016</th><th>Artinya bagi orang tua</th></tr></thead>
                <tbody>
                    <tr><td>Pendidikan (Pasal 10)</td><td>Pendidikan bermutu di semua jenis, jalur, dan jenjang secara inklusif dan khusus, serta akomodasi yang layak sebagai peserta didik.</td><td>Anak boleh memilih sekolah inklusi maupun SLB, dan berhak atas penyesuaian belajar.</td></tr>
                    <tr><td>Kesehatan (Pasal 12)</td><td>Informasi yang mudah diakses, pelayanan kesehatan yang aman, bermutu, dan terjangkau, serta alat bantu kesehatan sesuai kebutuhan.</td><td>Orang tua berhak meminta penjelasan yang dimengerti dan menanyakan alat bantu yang dibutuhkan anak.</td></tr>
                    <tr><td>Wajib belajar (Pasal 40)</td><td>Pemerintah wajib mengikutsertakan anak penyandang disabilitas dalam wajib belajar 12 tahun, dan pemerintah daerah wajib mengutamakan sekolah yang dekat tempat tinggal.</td><td>Sekolah dekat rumah adalah hak, bukan kebaikan hati.</td></tr>
                </tbody>
            </table>
            <p>Rangkuman hak lain yang lebih lengkap ada di artikel <a href="apa-saja-hak-anak-berkebutuhan-khusus">apa saja hak anak berkebutuhan khusus</a>.</p>`
    },
    {
      id: 'sekolah',
      h2: 'Sekolah: Inklusi atau SLB, dan Apa Itu Akomodasi yang Layak',
      toc: 'Memilih sekolah dan akomodasi yang layak',
      html: `
            <p>Pasal 40 ayat (2) UU 8/2016 menyebut pendidikan untuk penyandang disabilitas diselenggarakan melalui pendidikan inklusif dan pendidikan khusus. Tidak ada jalur yang otomatis lebih baik. Pertimbangannya adalah kebutuhan belajar anak, kesiapan sekolah, dan jarak dari rumah. Perbandingan keduanya kami bahas di <a href="apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a>.</p>
            <p>Apa pun pilihannya, ada satu istilah yang perlu dikenal orang tua: <strong>akomodasi yang layak</strong>. ${ext(PP13, 'PP Nomor 13 Tahun 2020')} mengatur bahwa akomodasi ini disediakan di semua jalur, jenjang, dan jenis pendidikan, baik inklusif maupun khusus (Pasal 2), pemerintah pusat dan daerah wajib memfasilitasi lembaga pendidikan untuk menyediakannya (Pasal 3), dan lembaga pendidikan yang sudah difasilitasi wajib menyediakannya (Pasal 8). Aturan teknisnya diturunkan dalam ${ext(PMDK48, 'Permendikbudristek Nomor 48 Tahun 2023')}.</p>
            <p>UU 8/2016 Pasal 42 juga mewajibkan pemerintah daerah memfasilitasi pembentukan <strong>Unit Layanan Disabilitas</strong> untuk mendukung pendidikan inklusif tingkat dasar dan menengah. Fungsinya antara lain menyediakan pendampingan bagi peserta didik, melakukan deteksi dan intervensi dini, serta menyediakan layanan konsultasi. Saat bertemu sekolah, pertanyaan berikut membantu:</p>
            <ul>
                <li>Penyesuaian apa yang bisa diberikan untuk anak saya (waktu ujian, tempat duduk, materi, cara memberi instruksi)?</li>
                <li>Apakah ada guru pendidikan khusus atau pendamping, dan berapa jam per minggu?</li>
                <li>Apakah sekolah menyusun <a href="program-pembelajaran-individual">program pembelajaran individual</a>, dan seberapa sering orang tua dilibatkan?</li>
                <li>Apakah sekolah atau dinas pendidikan setempat sudah punya Unit Layanan Disabilitas?</li>
            </ul>`
    },
    {
      id: 'dukungan-orang-tua',
      h2: 'Dukungan Psikologis untuk Orang Tua, Bukan Hanya untuk Anak',
      toc: 'Tempat konseling orang tua',
      html: `
            <p>Anak paling terbantu oleh orang tua yang cukup tenang untuk konsisten. Karena itu, kesehatan jiwa orang tua termasuk bagian dari rencana, bukan tambahan. Beberapa jalur yang bisa dicoba:</p>
            <ul>
                <li><strong>Psikolog di Puskesmas.</strong> Sebagian daerah sudah menempatkan psikolog di Puskesmas. Contohnya, ${ext(SLEMAN, 'Pemerintah Kabupaten Sleman')} menyediakan layanan konsultasi psikologi di sejumlah Puskesmas sejak 2006, termasuk untuk masalah hubungan dalam keluarga. Tanyakan ke Puskesmas tempat Anda terdaftar.</li>
                <li><strong>PUSPAGA (Pusat Pembelajaran Keluarga).</strong> Layanan ini dikelola dinas pemberdayaan perempuan dan perlindungan anak di daerah. Di Kota Semarang, misalnya, ${ext(SEMARANG, 'PPID Kota Semarang')} mencantumkan PUSPAGA sebagai layanan konsultasi dan konseling bersama psikolog atau konselor serta wadah belajar pengasuhan, dalam daftar layanan konseling gratis. Ketersediaan dan jadwalnya berbeda di tiap kota, jadi cek ke dinas setempat.</li>
                <li><strong>Healing119.</strong> Untuk kondisi krisis atau tekanan berat, Kementerian Kesehatan menyediakan ${ext(HEALING, 'layanan Healing119')} lewat panggilan ke 119 ekstensi 8 atau chat WhatsApp melalui situs healing119.id.</li>
                <li><strong>Pelatihan keterampilan pengasuh.</strong> WHO mengembangkan ${ext(WHO_CST, 'Caregiver Skills Training (CST)')} untuk keluarga anak dengan keterlambatan atau disabilitas perkembangan. Programnya terdiri dari sembilan sesi kelompok dan tiga kunjungan rumah, berfokus pada komunikasi, keterlibatan anak, keterampilan sehari-hari, perilaku yang menantang, dan strategi orang tua mengatasi tekanan. WHO juga menyediakan versi daring untuk pengasuh.</li>
                <li><strong>Komunitas sesama orang tua.</strong> Bertemu orang tua yang sudah lebih dulu melewati masa awal sering memberi informasi praktis yang tidak ada di buku, misalnya terapis yang sabar atau sekolah yang ramah. Tetap saring nasihatnya: pengalaman satu keluarga belum tentu cocok untuk anak Anda.</li>
            </ul>
            <p>Merawat diri sendiri bukan egois. Ide-ide sederhana untuk itu ada di artikel <a href="self-care-untuk-orang-tua-anak-disabilitas">self-care untuk orang tua anak disabilitas</a>.</p>`
    },
    {
      id: 'rencana-90-hari',
      h2: 'Rencana 90 Hari Pertama dalam Satu Tabel',
      toc: 'Rencana 90 hari pertama',
      html: `
            <table class="classification-table">
                <thead><tr><th>Waktu</th><th>Fokus</th><th>Hasil yang dituju</th></tr></thead>
                <tbody>
                    <tr><td>Minggu 1</td><td>Jaga rutinitas anak, catat pertanyaan untuk dokter, cek status kartu JKN.</td><td>Daftar pertanyaan siap, kartu JKN aktif.</td></tr>
                    <tr><td>Minggu 2 sampai 4</td><td>Konsultasi lanjutan, minta laporan tertulis, susun map dokumen, datangi FKTP untuk rujukan.</td><td>Laporan diagnosis di tangan, surat rujukan terbit.</td></tr>
                    <tr><td>Bulan 2</td><td>Mulai terapi, bertemu sekolah atau calon sekolah, tanyakan akomodasi yang layak.</td><td>Jadwal terapi berjalan, sekolah memahami kebutuhan anak.</td></tr>
                    <tr><td>Bulan 3</td><td>Evaluasi kecil bersama terapis dan guru, cari dukungan untuk orang tua bila diperlukan.</td><td>Tujuan terapi dan belajar untuk tiga bulan berikutnya.</td></tr>
                </tbody>
            </table>
            <p>Tabel ini hanya kerangka. Ada keluarga yang butuh lebih lama di satu tahap, dan itu tidak apa-apa. Yang penting setiap langkah tercatat, sehingga ketika bertemu profesional baru, orang tua tidak perlu mengulang cerita dari nol.</p>`
    }
  ],
  storyHighlight: 'Di Sekolah Inklusi Taruna Imani, YUKA mendampingi anak dengan beragam kebutuhan belajar lewat kegiatan kelas yang terstruktur, latihan kemandirian seperti kelas memasak, dan komunikasi rutin dengan orang tua. Kami bukan fasilitas medis, jadi tidak menegakkan diagnosis. Yang bisa kami bantu adalah menerjemahkan laporan diagnosis menjadi rencana belajar di kelas dan mendengarkan orang tua yang baru memulai perjalanan ini. Ingin berdiskusi? <a href="../kontak">Hubungi tim YUKA</a>.',
  relatedIntro: 'Lanjutkan ke panduan YUKA lain untuk orang tua di masa awal setelah diagnosis.',
  faq: [
    {
      q: 'Apakah BPJS Kesehatan menanggung terapi anak berkebutuhan khusus?',
      a: 'Perpres Nomor 82 Tahun 2018 Pasal 47 mencantumkan rehabilitasi medis sebagai layanan rujukan tingkat lanjutan yang dijamin JKN. Aksesnya lewat rujukan berjenjang dari FKTP dan harus ada indikasi medis. Jumlah sesi dan ketersediaan terapis berbeda di tiap rumah sakit, jadi tanyakan langsung ke rumah sakit rujukan.'
    },
    {
      q: 'Apakah anak yang baru didiagnosis harus masuk SLB?',
      a: 'Tidak harus. UU Nomor 8 Tahun 2016 menjamin hak pendidikan secara inklusif maupun khusus. Pilihan sebaiknya didasarkan pada kebutuhan belajar anak, kesiapan sekolah memberi akomodasi yang layak, dan jarak dari rumah.'
    },
    {
      q: 'Dokumen apa yang perlu disiapkan setelah anak didiagnosis?',
      a: 'Minimal Kartu Keluarga, akta kelahiran, kartu JKN yang aktif, laporan tertulis hasil pemeriksaan, surat rujukan, dan catatan perkembangan harian dari orang tua. Simpan semuanya dalam satu map agar mudah dibawa ke dokter, terapis, dan sekolah.'
    },
    {
      q: 'Ke mana orang tua bisa mencari konseling?',
      a: 'Pilihannya antara lain psikolog di Puskesmas (tersedia di sebagian daerah), PUSPAGA yang dikelola dinas PPPA setempat, dan layanan Healing119 dari Kementerian Kesehatan lewat 119 ekstensi 8 untuk kondisi krisis.'
    },
    {
      q: 'Apakah boleh meminta pendapat kedua atas diagnosis anak?',
      a: 'Boleh dan wajar, terutama jika rekomendasi terasa tidak sesuai dengan kondisi anak di rumah. Bawa laporan tertulis dari pemeriksaan pertama supaya profesional kedua bisa membandingkan.'
    }
  ],
  related: [
    { href: 'menerima-diagnosis-anak-abk', title: 'Menerima Diagnosis Anak ABK: Panduan Orang Tua', desc: 'Sisi emosional masa awal dan cara membicarakannya dengan keluarga.' },
    { href: 'dukungan-keluarga-anak-abk', title: 'Dukungan Keluarga Anak ABK', desc: 'Peran tiap anggota rumah setelah fase awal lewat.' },
    { href: 'apa-saja-hak-anak-berkebutuhan-khusus', title: 'Apa Saja Hak Anak Berkebutuhan Khusus', desc: 'Rangkuman hak anak menurut aturan di Indonesia.' },
    { href: 'apa-perbedaan-sekolah-inklusi-dan-slb', title: 'Perbedaan Sekolah Inklusi dan SLB', desc: 'Pertimbangan memilih jalur pendidikan.' }
  ],
  tags: ['DiagnosisABK', 'OrangTuaABK', 'HakAnakDisabilitas', 'TerapiJKN', 'PendidikanInklusi', 'YUKA'],
  sources: [
    { url: UU8, label: 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas, teks lengkap (peraturan.go.id): Pasal 5 ayat (3), 10, 12, 40, 42' },
    { url: UU8_BPK, label: 'UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (JDIH BPK)' },
    { url: PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas (peraturan.go.id)' },
    { url: PMDK48, label: 'Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas (JDIH BPK)' },
    { url: PERPRES82, label: 'Perpres Nomor 82 Tahun 2018 tentang Jaminan Kesehatan (peraturan.go.id): Pasal 47 dan Pasal 55' },
    { url: PMK66, label: 'Permenkes Nomor 66 Tahun 2014 tentang Pemantauan Pertumbuhan, Perkembangan, dan Gangguan Tumbuh Kembang Anak (JDIH BPK)' },
    { url: WHO_CST, label: 'WHO. Caregiver skills training for families of children with developmental delays or disabilities' },
    { url: CDC_TX, label: 'CDC. Treatment and Intervention for Autism Spectrum Disorder' },
    { url: HEALING, label: 'Kementerian Kesehatan RI. Cegah Bunuh Diri, Dukung Kesehatan Jiwa: Kenali Layanan Healing119' },
    { url: SLEMAN, label: 'Puskesmas Ngemplak 2, Pemerintah Kabupaten Sleman. Pelayanan Psikolog' },
    { url: SEMARANG, label: 'PPID Kota Semarang (14 Oktober 2025). Layanan Konseling Gratis di Kota Semarang' },
    { url: KONTAN, label: 'Kontan (13 Juni 2024). Pemotongan Manfaat BPJS Berisiko Putus Terapi Anak Berkebutuhan Khusus' }
  ]
};

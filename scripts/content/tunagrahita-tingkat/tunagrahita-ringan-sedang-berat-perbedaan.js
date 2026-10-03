'use strict';
// Isi artikel /artikel/tunagrahita-ringan-sedang-berat-perbedaan (kartu Trello 0ueO3YsX, catchup 2026-10-04).
// Menggantikan versi 2026-10-03 dini hari (commit 2d3dc96, 14950d2) yang judulnya "perbedaan tingkat"
// tetapi badannya salinan artikel tunagrahita-adalah (konten duplikat, kartu induk P0 gswe5XFa pasangan #6).
// Semua angka dicek ke sumber aslinya pada 4 Oktober 2026: ICD-11 (teks WHO, dibaca lewat cermin
// Find-A-Code versi MMS 2026-01 karena browser ICD-11 dirender JavaScript), ICD-10 2019 (icd.who.int),
// lembar fakta DSM-5 APA, halaman pasien APA, definisi AAIDD, Patel dkk. 2020 (PMC), data referensi
// Kemendikdasmen, dan UU 8/2016 (JDIH BPK).

const ICD11_BROWSER = 'https://icd.who.int/browse/2025-01/mms/en#605267007';
const ICD11_PARENT = 'https://www.findacode.com/icd-11/code-605267007.html';
const ICD11_MILD = 'https://www.findacode.com/icd-11/code-1207960454.html';
const ICD11_MOD = 'https://www.findacode.com/icd-11/code-759942676.html';
const ICD11_SEV = 'https://www.findacode.com/icd-11/code-1508286189.html';
const ICD11_PROF = 'https://www.findacode.com/icd-11/code-1017992057.html';
const ICD11_PROV = 'https://www.findacode.com/icd-11/code-1074941350.html';
const ICD10 = 'https://icd.who.int/browse10/2019/en#/F70-F79';
const APA_FACT = 'https://www.psychiatry.org/File%20Library/Psychiatrists/Practice/DSM/APA_DSM-5-Intellectual-Disability.pdf';
const APA_PATIENT = 'https://www.psychiatry.org/patients-families/intellectual-disability/what-is-intellectual-disability';
const AAIDD = 'https://www.aaidd.org/intellectual-disability/definition';
const PATEL = 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7082244/';
const KEMENDIKDASMEN = 'https://referensi.data.kemendikdasmen.go.id/berkebutuhan_khusus/keterangan';
const UU8 = 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016';

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  slug: 'tunagrahita-ringan-sedang-berat-perbedaan',
  keyword: 'tunagrahita ringan, sedang, berat',
  titleTag: 'Tunagrahita Ringan, Sedang, Berat: Perbedaan Lengkap',
  metaDesc: 'Perbedaan tunagrahita ringan, sedang, dan berat menurut DSM-5-TR, ICD-11, dan AAIDD, plus rentang IQ, fungsi adaptif, dan layanan SLB C/C1. Baca dulu.',
  ogTitle: 'Tunagrahita Ringan, Sedang, Berat: Perbedaan Kriteria, IQ, dan Dukungan',
  ogDesc: 'Tabel perbandingan tiga tingkat tunagrahita menurut DSM-5-TR, ICD-11, ICD-10, dan AAIDD, apa arti angka IQ, peran fungsi adaptif, serta kode C dan C1 di sekolah Indonesia.',
  h1: 'Tunagrahita Ringan, Sedang, Berat: Perbedaan Kriteria, IQ, dan Dukungan Belajar',
  crumb: 'Tunagrahita Ringan, Sedang, Berat',
  parent: { name: 'Tunagrahita', href: 'tunagrahita-adalah' },
  keywords: 'tunagrahita ringan sedang berat perbedaan, perbedaan tunagrahita ringan dan sedang, klasifikasi tunagrahita, iq tunagrahita ringan, slb c dan c1, disabilitas intelektual',
  readTime: '12 menit baca',
  image: {
    file: 'Dokumentasi/21-jan-2026-siswa-belajar-ruang-kelas-tradisional-006.webp',
    w: 1209, h: 907,
    alt: 'Tiga siswa dan seorang guru belajar lesehan dengan meja lipat di ruang kelas Sekolah Inklusi Taruna Imani YUKA, dengan papan bertuliskan Taruna Imani dan lemari piala di belakang',
    caption: 'Suasana belajar di Sekolah Inklusi Taruna Imani. Setiap siswa punya kebutuhan dukungan yang berbeda, karena itu rencana belajar disusun per anak, bukan per label.',
    credit: 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah), Januari 2026.',
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  answer: '<strong>Perbedaan tunagrahita ringan, sedang, dan berat</strong> terletak pada seberapa besar dukungan yang dibutuhkan anak dalam kemampuan konseptual, sosial, dan praktis sehari-hari. DSM-5-TR menentukan tingkatnya dari fungsi adaptif, bukan skor IQ saja. Rentang IQ lama (50-69, 35-49, 20-34) hanya perkiraan dan tidak boleh dipakai sendirian.',
  intro: `
            <p>Banyak orang tua pertama kali mendengar kata "ringan" atau "sedang" dari hasil pemeriksaan psikolog atau dari formulir pendaftaran sekolah. Label itu sering terasa seperti vonis, padahal fungsinya praktis: membantu sekolah, terapis, dan keluarga menakar seberapa banyak bantuan yang perlu disiapkan. Kebingungan bertambah karena tiap sumber di internet menulis rentang IQ yang berbeda-beda.</p>
            <p>Artikel ini fokus pada satu pertanyaan: apa yang sebenarnya membedakan tunagrahita ringan, sedang, dan berat. Kita bandingkan tiga rujukan diagnosis internasional (DSM-5-TR, ICD-11, dan AAIDD), menjelaskan dari mana angka IQ berasal, lalu menerjemahkannya ke kebutuhan belajar dan layanan sekolah di Indonesia. Kalau Ayah dan Bunda masih mencari pengertian dasar, ciri, dan penyebabnya, baca dulu <a href="tunagrahita-adalah">pengertian tunagrahita</a> dan <a href="disabilitas-intelektual-adalah">penjelasan disabilitas intelektual</a>.</p>`,
  infoBox: 'Artikel ini informasi umum untuk orang tua dan guru, bukan alat diagnosis. Tingkat tunagrahita hanya bisa ditetapkan lewat asesmen individual oleh psikolog atau dokter, yang menilai kemampuan intelektual dan fungsi adaptif anak sekaligus. Jangan menebak tingkat anak dari tabel di bawah.',
  sections: [
    {
      id: 'inti', toc: 'Inti perbedaan: tingkat dukungan',
      h2: 'Inti Perbedaannya: Tingkat Dukungan, Bukan Nilai Diri Anak',
      html: `
            <p>Semua rujukan modern sepakat pada tiga syarat dasar disabilitas intelektual: keterbatasan fungsi intelektual, keterbatasan perilaku adaptif, dan muncul pada masa perkembangan. ${ext(AAIDD, 'AAIDD')} (asosiasi disabilitas intelektual Amerika Serikat) menetapkan masa perkembangan itu sebelum usia 22 tahun, sedangkan halaman pasien ${ext(APA_PATIENT, 'American Psychiatric Association')} menyebut umumnya sebelum usia 18 tahun untuk diagnosis.</p>
            <p>Tingkat ringan, sedang, dan berat baru dibicarakan <em>setelah</em> diagnosis itu tegak. Yang dibedakan adalah besarnya hambatan dalam tiga ranah adaptif:</p>
            <ul>
                <li><strong>Konseptual:</strong> bahasa, membaca, menulis, berhitung, memahami waktu dan uang, mengingat.</li>
                <li><strong>Sosial:</strong> berkomunikasi, memahami aturan, menilai situasi sosial, berteman.</li>
                <li><strong>Praktis:</strong> merawat diri, makan, berpakaian, menjaga keselamatan, mengatur tugas sekolah atau kerja.</li>
            </ul>
            <p>Karena yang dinilai adalah kebutuhan dukungan, tingkat ini bisa berbeda dari satu ranah ke ranah lain dan bisa berubah seiring anak belajar. Anak dengan label "sedang" bisa cukup mandiri dalam merawat diri tetapi masih butuh banyak bantuan dalam berhitung uang. Itulah sebabnya label tidak boleh menggantikan pengamatan langsung terhadap anak.</p>`
    },
    {
      id: 'tabel', toc: 'Tabel perbandingan tiga tingkat',
      h2: 'Tabel Perbandingan Tunagrahita Ringan, Sedang, dan Berat',
      html: `
            <p>Tabel berikut merangkum ciri tiap tingkat berdasarkan deskripsi resmi ICD-11 dan ICD-10 dari WHO serta tinjauan klinis ${ext(PATEL, 'Patel dkk. (2020) di jurnal Translational Pediatrics')}. Baca kolomnya sebagai gambaran umum, bukan daftar periksa.</p>
            <div style="overflow-x:auto;">
            <table class="classification-table">
                <thead>
                    <tr><th>Aspek</th><th>Ringan</th><th>Sedang</th><th>Berat dan sangat berat</th></tr>
                </thead>
                <tbody>
                    <tr><td>Posisi skor menurut ICD-11 (intelektual dan adaptif)</td><td>Sekitar 2-3 simpangan baku di bawah rata-rata (persentil 0,1-2,3)</td><td>Sekitar 3-4 simpangan baku di bawah rata-rata (persentil 0,003-0,1)</td><td>4 simpangan baku atau lebih di bawah rata-rata (di bawah persentil 0,003)</td></tr>
                    <tr><td>Rentang IQ lama menurut ICD-10</td><td>Sekitar 50-69</td><td>Sekitar 35-49</td><td>Berat sekitar 20-34, sangat berat di bawah 20</td></tr>
                    <tr><td>Proporsi di antara seluruh penyandang</td><td>Sekitar 85%</td><td>Sekitar 10%</td><td>Berat sekitar 4%, sangat berat sekitar 1%</td></tr>
                    <tr><td>Bahasa dan akademik</td><td>Kesulitan pada bahasa dan pelajaran yang kompleks; dengan dukungan bisa membaca, menulis, dan berhitung dasar</td><td>Bahasa dan kemampuan akademik umumnya terbatas pada keterampilan dasar</td><td>Bahasa dan komunikasi sangat terbatas; akademik terbatas pada keterampilan konkret yang sangat dasar</td></tr>
                    <tr><td>Merawat diri</td><td>Sebagian besar menguasai perawatan diri dan pekerjaan rumah dasar</td><td>Sebagian bisa menguasai perawatan diri dasar dengan latihan</td><td>Butuh bantuan harian; sebagian bisa belajar perawatan diri dasar lewat latihan intensif</td></tr>
                    <tr><td>Saat dewasa</td><td>Umumnya bisa hidup relatif mandiri dan bekerja, dengan dukungan yang sesuai</td><td>Kebanyakan butuh dukungan besar dan konsisten untuk hidup mandiri dan bekerja</td><td>Umumnya butuh dukungan harian di lingkungan yang diawasi</td></tr>
                    <tr><td>Kode kebutuhan khusus di Dapodik</td><td>C (Tuna Grahita Ringan)</td><td>C1 (Tuna Grahita Sedang)</td><td>Tidak ada kode tersendiri</td></tr>
                </tbody>
            </table>
            </div>
            <p>Sumber baris tabel: deskripsi ${ext(ICD11_MILD, 'ringan')}, ${ext(ICD11_MOD, 'sedang')}, ${ext(ICD11_SEV, 'berat')}, dan ${ext(ICD11_PROF, 'sangat berat')} di ICD-11 (teks WHO versi MMS 2026-01); rentang IQ dari ${ext(ICD10, 'ICD-10 versi 2019')}; proporsi dari ${ext(PATEL, 'Patel dkk. 2020')}; kode Dapodik dari ${ext(KEMENDIKDASMEN, 'data referensi Kemendikdasmen')}.</p>`
    },
    {
      id: 'tiga-rujukan', toc: 'DSM-5-TR, ICD-11, dan AAIDD',
      h2: 'Cara DSM-5-TR, ICD-11, dan AAIDD Menentukan Tingkat',
      html: `
            <h3>DSM-5-TR: tingkat ditentukan fungsi adaptif</h3>
            <p>Sejak DSM-5 (dan dipertahankan di DSM-5-TR), skor IQ dikeluarkan dari kriteria diagnosis. ${ext(APA_FACT, 'Lembar fakta DSM-5 dari APA')} menyatakan bahwa keparahan ditentukan berdasarkan fungsi adaptif, bukan skor tes IQ saja, supaya angka IQ tidak dianggap penentu tunggal kemampuan seseorang. Tes IQ tetap wajib dilakukan dan dicantumkan dalam asesmen, karena disabilitas intelektual didefinisikan kira-kira dua simpangan baku atau lebih di bawah rata-rata populasi. ${ext(APA_PATIENT, 'APA')} membagi tingkatnya menjadi ringan, sedang, berat, dan sangat berat (<em>profound</em>), dengan sebagian besar penyandang berada di tingkat ringan.</p>
            <h3>ICD-11: skor intelektual dan adaptif dinilai bersama</h3>
            <p>ICD-11 dari WHO menyebut kondisi ini <em>disorders of intellectual development</em> dengan kode ${ext(ICD11_PARENT, '6A00')}. Setiap tingkat didefinisikan dari posisi fungsi intelektual <strong>dan</strong> perilaku adaptif terhadap rata-rata populasi, seperti di tabel di atas. Dua hal penting dari ICD-11:</p>
            <ul>
                <li>Tingkat berat dan sangat berat dibedakan <strong>hanya</strong> dari perilaku adaptif, karena tes kecerdasan yang ada tidak bisa membedakan secara andal skor di bawah persentil 0,003 (${ext(ICD11_SEV, 'deskripsi 6A00.2')}).</li>
                <li>Ada kategori ${ext(ICD11_PROV, '"provisional" (sementara)')} untuk anak di bawah usia empat tahun, atau bila asesmen yang valid belum bisa dilakukan karena hambatan penglihatan, pendengaran, gerak, komunikasi, atau perilaku. Jadi balita yang terlambat berkembang belum tentu langsung diberi label ringan atau sedang.</li>
            </ul>
            <h3>AAIDD: klasifikasi berdasarkan kebutuhan dukungan</h3>
            <p>${ext(AAIDD, 'AAIDD')} menyebut skor IQ sekitar 70, atau sampai 75, sebagai tanda keterbatasan intelektual yang bermakna, dan menilai perilaku adaptif dalam ranah konseptual, sosial, dan praktis. Dalam manual edisi ke-12 (2021), AAIDD menganjurkan pengelompokan berdasarkan intensitas dukungan yang dibutuhkan, bukan hanya berdasarkan skor. Pendekatan ini paling dekat dengan cara kerja sekolah: yang ditanyakan bukan "anak ini tingkat berapa", melainkan "bantuan apa yang dia perlukan, seberapa sering, dan di kegiatan apa".</p>`
    },
    {
      id: 'angka-iq', toc: 'Kenapa rentang IQ di internet berbeda-beda',
      h2: 'Kenapa Rentang IQ di Internet Berbeda-beda?',
      html: `
            <p>Coba cari "IQ tunagrahita ringan" dan Anda akan menemukan angka 50-70, 55-70, 52-68, bahkan 50-75. Perbedaan ini punya beberapa penyebab:</p>
            <ol>
                <li><strong>Sumber dan edisi yang berbeda.</strong> Rentang 50-69, 35-49, 20-34, dan di bawah 20 berasal dari ${ext(ICD10, 'ICD-10')}, yang memberi kata "sekitar" pada setiap rentang. Buku pendidikan luar biasa lama juga mengutip skala Binet dan Wechsler yang batasnya sedikit berbeda.</li>
                <li><strong>Kesalahan pengukuran.</strong> Setiap tes IQ punya rentang kesalahan beberapa poin. Itu sebabnya ${ext(APA_PATIENT, 'APA')} dan ${ext(AAIDD, 'AAIDD')} menyebut batas "sekitar 70 sampai 75", bukan angka mati.</li>
                <li><strong>DSM-5-TR tidak lagi memakai rentang IQ untuk tingkat.</strong> Rujukan diagnosis terbaru sudah memindahkan penentu tingkat ke fungsi adaptif, sehingga tabel IQ yang beredar sebenarnya mengacu ke sistem lama.</li>
            </ol>
            <p>Istilah lama seperti debil, imbesil, dan idiot juga masih muncul di sebagian artikel. Istilah itu sudah ditinggalkan karena merendahkan. Gunakan "tunagrahita ringan, sedang, berat" atau "disabilitas intelektual ringan, sedang, berat".</p>`
    },
    {
      id: 'kebutuhan-belajar', toc: 'Kebutuhan belajar di tiap tingkat',
      h2: 'Apa Artinya untuk Belajar Sehari-hari?',
      html: `
            <p>Deskripsi klinis baru berguna kalau diterjemahkan menjadi rencana belajar. Gambaran berikut adalah pola umum yang sering ditemui guru; setiap anak tetap perlu rencana sendiri berdasarkan <a href="asesmen-abk">asesmen kebutuhan belajarnya</a>.</p>
            <h3>Tunagrahita ringan</h3>
            <p>Menurut ${ext(PATEL, 'Patel dkk.')}, dengan dukungan yang tepat anak dapat mengembangkan kemampuan dasar membaca, menulis, dan berhitung, sering setara kelas 4-5 sekolah dasar, dan saat dewasa dapat menguasai keterampilan kerja dasar. Yang biasanya membantu: materi dipecah menjadi langkah kecil, contoh konkret sebelum konsep abstrak, pengulangan terjadwal, dan latihan memakai uang, jam, serta kalender dalam situasi nyata. Banyak anak di tingkat ini bisa belajar di <a href="pendidikan-inklusi">sekolah inklusi</a> dengan akomodasi.</p>
            <h3>Tunagrahita sedang</h3>
            <p>Anak umumnya dikenali pada usia 3-5 tahun (${ext(PATEL, 'Patel dkk.')}). Fokus belajar bergeser ke akademik fungsional dan bina diri: mengenali tanda dan tulisan penting, berhitung sederhana untuk belanja, makan, mandi, berpakaian, menjaga keselamatan di jalan, serta berkomunikasi untuk meminta tolong. Latihan dilakukan konsisten di sekolah dan rumah. Panduan <a href="bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh">mengajarkan kemandirian pada anak berkebutuhan khusus</a> bisa jadi titik awal.</p>
            <h3>Tunagrahita berat dan sangat berat</h3>
            <p>Hambatan biasanya sudah dikenali pada usia 3 tahun atau lebih awal (${ext(PATEL, 'Patel dkk.')}), dan menurut ICD-11 bisa disertai hambatan gerak serta sensorik. Prioritasnya adalah komunikasi (termasuk isyarat, gambar, atau alat bantu komunikasi), kesehatan, keselamatan, posisi tubuh, dan partisipasi dalam rutinitas harian. Kemajuan diukur dari hal yang bermakna bagi anak dan keluarga, misalnya bisa memilih makanan atau memberi tanda saat tidak nyaman.</p>`
    },
    {
      id: 'sekolah-indonesia', toc: 'Kode C dan C1 di sekolah Indonesia',
      h2: 'Tunagrahita di Sistem Sekolah Indonesia: Kode C dan C1',
      html: `
            <p>${ext(UU8, 'Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas')} menggolongkan kondisi ini sebagai <strong>disabilitas intelektual</strong> (Pasal 4 ayat 1 huruf b). Penjelasannya menyebut disabilitas intelektual sebagai terganggunya fungsi pikir karena tingkat kecerdasan di bawah rata-rata, antara lain lambat belajar, disabilitas grahita, dan down syndrome. Pasal 10 menjamin hak pendidikan yang bermutu, baik secara inklusif maupun khusus, serta hak atas akomodasi yang layak.</p>
            <p>Di data pokok pendidikan (Dapodik), ${ext(KEMENDIKDASMEN, 'data referensi Kemendikdasmen')} memakai kode <strong>C untuk Tuna Grahita Ringan</strong> dan <strong>C1 untuk Tuna Grahita Sedang</strong>. Huruf yang sama dipakai banyak sekolah untuk menamai layanannya, seperti SLB-C dan SLB-C1. Beberapa hal yang perlu orang tua ketahui:</p>
            <ul>
                <li><strong>Tidak ada kode terpisah untuk tingkat berat</strong> dalam daftar tersebut. Penempatan dan layanan untuk anak dengan kebutuhan dukungan sangat tinggi ditentukan lewat asesmen di sekolah.</li>
                <li>Halaman yang sama mencatat peserta didik berkode C dan C1 dalam kelompok yang <strong>tidak mengikuti Asesmen Nasional</strong>. Penilaian kemajuan mereka dilakukan sekolah sesuai program belajarnya.</li>
                <li>Kode di Dapodik adalah data administrasi sekolah, bukan diagnosis medis. Pastikan kode yang tercatat sesuai hasil asesmen terbaru, karena kode ini memengaruhi layanan yang disiapkan sekolah.</li>
            </ul>
            <p>Pilihan sekolah tidak ditentukan oleh label saja. Anak tunagrahita ringan maupun sedang bisa bersekolah di <a href="slb-adalah">SLB</a> atau sekolah inklusi, tergantung kebutuhan dukungan, kesiapan sekolah, dan pertimbangan keluarga. Perbandingan lengkapnya ada di artikel <a href="apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a>.</p>`
    },
    {
      id: 'langkah', toc: 'Langkah orang tua setelah menerima hasil',
      h2: 'Langkah Orang Tua Setelah Menerima Hasil Asesmen',
      html: `
            <ol>
                <li><strong>Minta penjelasan per ranah.</strong> Tanyakan ke psikolog bagian mana yang paling butuh dukungan: konseptual, sosial, atau praktis. Informasi ini lebih berguna untuk sekolah daripada satu kata "ringan" atau "sedang".</li>
                <li><strong>Cek kondisi penyerta.</strong> Gangguan pendengaran, penglihatan, kejang, atau kondisi genetik seperti <a href="down-syndrome-adalah">down syndrome</a> memengaruhi cara anak belajar dan perlu ditangani dokter.</li>
                <li><strong>Bawa hasil ke sekolah.</strong> Minta sekolah menyusun program pembelajaran individual dengan tujuan yang bisa diukur, lalu tinjau bersama secara berkala.</li>
                <li><strong>Jadwalkan asesmen ulang.</strong> Pada anak kecil, ICD-11 menyediakan kategori sementara karena hasil bisa berubah. Asesmen ulang membantu memastikan layanan tetap sesuai.</li>
                <li><strong>Urus hak administratif.</strong> Bila diperlukan, pelajari cara mengurus <a href="kartu-disabilitas">kartu disabilitas</a> untuk mengakses program pemerintah.</li>
            </ol>`
    }
  ],
  faq: [
    { q: 'Apa perbedaan utama tunagrahita ringan, sedang, dan berat?', a: 'Perbedaannya ada pada besarnya dukungan yang dibutuhkan dalam kemampuan konseptual, sosial, dan praktis. Anak dengan tingkat ringan umumnya bisa belajar membaca, menulis, dan berhitung dasar serta merawat diri; tingkat sedang butuh dukungan besar dan konsisten; tingkat berat umumnya butuh bantuan harian.' },
    { q: 'Berapa IQ tunagrahita ringan, sedang, dan berat?', a: 'ICD-10 dari WHO memberi rentang perkiraan sekitar 50-69 untuk ringan, 35-49 untuk sedang, 20-34 untuk berat, dan di bawah 20 untuk sangat berat. DSM-5-TR tidak lagi memakai rentang IQ untuk menentukan tingkat, melainkan fungsi adaptif.' },
    { q: 'Apakah tingkat tunagrahita bisa berubah?', a: 'Kondisi dasarnya menetap, tetapi kemampuan adaptif bisa berkembang dengan pendidikan dan dukungan yang tepat, sehingga kebutuhan dukungan bisa berubah. Pada anak di bawah empat tahun, ICD-11 menyediakan kategori sementara karena penilaian belum bisa dipastikan.' },
    { q: 'Apa itu SLB C dan SLB C1?', a: 'Huruf C dan C1 berasal dari kode kebutuhan khusus di Dapodik: C untuk tunagrahita ringan dan C1 untuk tunagrahita sedang. Banyak sekolah luar biasa memakai huruf yang sama untuk menamai layanan bagi peserta didik tunagrahita.' },
    { q: 'Siapa yang berwenang menentukan tingkat tunagrahita?', a: 'Psikolog atau dokter yang melakukan asesmen individual dengan tes kecerdasan terstandar dan penilaian perilaku adaptif, ditambah wawancara dengan orang tua dan guru. Guru dan orang tua memberi informasi penting, tetapi tidak menetapkan tingkat sendiri.' }
  ],
  related: [
    { href: 'tunagrahita-adalah', title: 'Tunagrahita Adalah: Pengertian, Ciri, dan Penyebab', desc: 'Dasar-dasar tunagrahita sebelum membahas tingkatannya.' },
    { href: 'disabilitas-intelektual-adalah', title: 'Disabilitas Intelektual Adalah', desc: 'Istilah medis dan hukum untuk kondisi yang sama.' },
    { href: 'asesmen-abk', title: 'Asesmen Anak Berkebutuhan Khusus', desc: 'Cara kebutuhan belajar anak dinilai sebelum program disusun.' },
    { href: 'sekolah-slb-untuk-anak-apa', title: 'Sekolah SLB untuk Anak Apa Saja?', desc: 'Jenis layanan SLB dan anak yang dilayaninya.' }
  ],
  sources: [
    { url: APA_FACT, label: 'American Psychiatric Association. DSM-5 Intellectual Disability Fact Sheet.' },
    { url: APA_PATIENT, label: 'American Psychiatric Association. What is Intellectual Disability?' },
    { url: ICD11_BROWSER, label: 'World Health Organization. ICD-11 MMS, 6A00 Disorders of intellectual development (browser resmi).' },
    { url: ICD11_MILD, label: 'Teks ICD-11 6A00.0 sampai 6A00.4 (cermin Find-A-Code, versi MMS 2026-01).' },
    { url: ICD10, label: 'World Health Organization. ICD-10 versi 2019, F70-F79 Mental retardation.' },
    { url: AAIDD, label: 'American Association on Intellectual and Developmental Disabilities. Defining Criteria for Intellectual Disability.' },
    { url: PATEL, label: 'Patel DR, dkk. A clinical primer on intellectual disability. Translational Pediatrics, 2020.' },
    { url: KEMENDIKDASMEN, label: 'Pusdatin Kemendikdasmen. Data Referensi Peserta Didik Berkebutuhan Khusus, Keterangan.' },
    { url: UU8, label: 'Undang-Undang Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (JDIH BPK).' }
  ],
  tags: ['tunagrahita', 'disabilitas intelektual', 'SLB C', 'pendidikan khusus', 'asesmen']
};

'use strict';
// Generator artikel "bantuan biaya homeschooling" (cycle #80, antrean 2026-10-21).
// Keyword dari Google Sheet Keyword Data YUKA (tab "Keyword Data"). Fakta: Permendikbud 129/2014
// (PDF peraturan.go.id), Permendikdasmen 9/2025 TKA (PDF JDIH BPK), laman resmi PIP
// (pip.kemendikdasmen.go.id) dan Puslapdik (FAQ PIP + klarifikasi nominal Juli 2025).
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');
const ROOT = path.resolve(__dirname, '..');
const slug = 'bantuan-biaya-homeschooling';
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const heroFile = 'Dokumentasi/yuka-bantuan-homeschooling-hero-20261021.webp';
const IMG = 'assets/images/artikel';

const diagrams = {
  [`${IMG}/${slug}-jenis.svg`]: svg.cards('Tiga jenis bantuan biaya homeschooling', 'Bedakan bantuan untuk murid, untuk lembaga, dan dari masyarakat', [
    { h: 'Untuk murid: PIP', color: '#2B3A67', items: ['Bantuan tunai untuk biaya personal pendidikan', 'Mencakup Paket A, B, dan C', 'Murid harus tercatat di Dapodik satuan pendidikan', 'Diusulkan dan ditandai layak oleh satuan pendidikan'] },
    { h: 'Untuk lembaga: BOP', color: '#00838F', items: ['Dana operasional bagi PKBM atau SKB penyelenggara kesetaraan', 'Diterima lembaga, bukan keluarga', 'Ikut menentukan layanan yang bisa diberikan lembaga'] },
    { h: 'Dari masyarakat', color: '#7A5A06', items: ['Zakat dan infak pendidikan', 'Beasiswa yayasan atau perusahaan', 'Donasi komunitas dan program CSR', 'Syarat berbeda di tiap lembaga'] },
  ]),
  [`${IMG}/${slug}-langkah.svg`]: svg.flow('Langkah mengakses PIP bagi murid homeschooling', 'Jalur yang umumnya ditempuh lewat satuan pendidikan kesetaraan', [
    { h: 'Pilih PKBM atau SKB', d: 'Cari satuan pendidikan kesetaraan yang punya NPSN dan menerima murid sekolahrumah.' },
    { h: 'Daftar dan lengkapi data', d: 'Pastikan NIK, NISN, tanggal lahir, dan data orang tua sesuai dokumen kependudukan.' },
    { h: 'Data masuk Dapodik', d: 'Operator lembaga mencatat murid di Dapodik secara lengkap, valid, dan logis.' },
    { h: 'Cek data kesejahteraan', d: 'Keluarga terdata di data kesejahteraan sosial melalui desa atau dinas sosial.' },
    { h: 'Ditandai layak PIP', d: 'Satuan pendidikan menandai layak PIP dan dinas atau pemangku kepentingan mengusulkan.' },
    { h: 'Pantau penetapan', d: 'Cek status di laman PIP resmi dan aktivasi rekening bila ditetapkan sebagai penerima.' },
  ]),
  [`${IMG}/${slug}-status.svg`]: svg.grid('Status homeschooling dan peluang bantuan', 'Gambaran umum; pastikan ke dinas pendidikan dan lembaga setempat', ['Status anak', 'Dasar aturan', 'Peluang bantuan pemerintah'], [
    ['Murid Paket A, B, C di PKBM atau SKB', 'Pendidikan nonformal kesetaraan', 'Dapat diusulkan PIP bila memenuhi kriteria ekonomi'],
    ['Sekolahrumah komunitas berizin', 'Pasal 6 ayat (4) Permendikbud 129/2014', 'Tanyakan apakah murid tercatat di Dapodik'],
    ['Sekolahrumah tunggal atau majemuk terdaftar di dinas', 'Pasal 6 ayat (1) Permendikbud 129/2014', 'Tanyakan ke dinas jalur pendataan dan usulan bantuan'],
    ['Belajar di rumah tanpa pendaftaran', 'Belum memenuhi kewajiban pendaftaran', 'Daftarkan dulu agar hak dan bantuan bisa diakses'],
  ], [330, 380, 394]),
};

const fig = (file, alt, caption, kredit) => {
  const { w, h } = imageSize(path.join(ROOT, file));
  return `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${kredit}</span></figcaption></figure>`;
};
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;

const faq = [
  { q: 'Apakah anak homeschooling bisa mendapat bantuan PIP?', a: 'Laman resmi PIP menyebut program ini mencakup jalur nonformal Paket A sampai Paket C. Syarat utamanya, murid tercatat di Dapodik satuan pendidikan, ditandai layak PIP, dan berasal dari keluarga miskin atau rentan miskin yang terdata. Karena itu, anak homeschooling umumnya mengakses PIP melalui PKBM atau SKB tempat ia terdaftar sebagai murid kesetaraan.' },
  { q: 'Berapa besaran PIP untuk Paket A, B, dan C?', a: 'Menurut FAQ Puslapdik, murid SD, SDLB, dan Paket A menerima Rp450.000 per tahun, sedangkan SMP, SMPLB, dan Paket B Rp750.000 per tahun. Untuk SMA, SMK, SMALB, dan Paket C, Puslapdik pada Juli 2025 menegaskan besarannya Rp1.800.000 per tahun. Murid baru dan kelas akhir menerima setengahnya. Nominal dapat diperbarui, jadi cek laman resmi.' },
  { q: 'Apakah homeschooling tunggal yang tidak terdaftar di PKBM bisa menerima PIP?', a: 'Penyaluran PIP memakai data murid di Dapodik yang ditandai satuan pendidikan. Keluarga sekolahrumah tunggal sebaiknya menanyakan langsung kepada dinas pendidikan kabupaten atau kota bagaimana anaknya didata dan apakah ada jalur usulan bantuan. Banyak keluarga memilih mendaftarkan anak ke PKBM agar pendataan, penilaian, dan akses bantuan lebih jelas.' },
  { q: 'Apa itu BOP Kesetaraan dan apakah keluarga bisa menerimanya?', a: 'BOP Kesetaraan adalah dana bantuan operasional penyelenggaraan pendidikan kesetaraan yang diberikan kepada satuan pendidikan penyelenggara, seperti PKBM atau SKB, untuk biaya operasional. Dana ini diterima lembaga, bukan keluarga. Keluarga tetap dapat bertanya kepada lembaga bagaimana dana operasional memengaruhi biaya yang dibebankan kepada murid.' },
  { q: 'Apakah anak berkebutuhan khusus yang homeschooling mendapat prioritas bantuan?', a: 'Laman resmi PIP mencantumkan peserta didik yang mengalami kelainan fisik sebagai salah satu sasaran prioritas, di samping kriteria lain. Penetapan tetap mengikuti data dan prosedur yang berlaku. Selain PIP, keluarga dapat menanyakan program daerah, lembaga zakat, dan yayasan yang memiliki bantuan khusus pendidikan anak berkebutuhan khusus.' },
  { q: 'Bolehkah zakat dipakai untuk biaya homeschooling anak?', a: 'Sebagian lembaga zakat menyalurkan dana untuk pendidikan bagi penerima yang memenuhi syarat sebagai mustahik. Ketentuannya berbeda di tiap lembaga, termasuk jenis biaya yang dapat dibantu. Tanyakan syarat dan dokumen yang diminta kepada lembaga pengelola zakat, dan simpan bukti penggunaan dana untuk laporan.' },
  { q: 'Bagaimana menghindari penipuan yang mengatasnamakan bantuan pendidikan?', a: 'Pendaftaran dan pencairan PIP tidak dipungut biaya. Waspadai pihak yang meminta uang agar anak ditetapkan sebagai penerima, meminta PIN atau kode rahasia rekening, atau menjanjikan bantuan tanpa pendataan resmi. Cek status hanya melalui laman resmi PIP dan hubungi layanan pengaduan Kemendikdasmen bila menemukan kejanggalan.' },
];

const sections = [
  ['ringkas', 'Gambaran bantuan biaya homeschooling'],
  ['status', 'Status terdaftar menentukan akses bantuan'],
  ['pip', 'PIP untuk murid Paket A, B, dan C'],
  ['langkah', 'Langkah mengakses PIP lewat PKBM atau SKB'],
  ['bop', 'BOP Kesetaraan: bantuan untuk lembaga'],
  ['abk', 'Bantuan bagi anak berkebutuhan khusus'],
  ['masyarakat', 'Zakat, beasiswa, dan donasi dari masyarakat'],
  ['pos', 'Pos biaya homeschooling dan sumber bantuannya'],
  ['waspada', 'Waspada pungutan dan penipuan'],
  ['faq', 'Pertanyaan Umum tentang Bantuan Biaya Homeschooling'],
];

const bodyHtml = `
<div class="jawaban-singkat"><p><strong>Bantuan biaya homeschooling</strong> dari pemerintah umumnya dapat diakses bila anak tercatat sebagai murid satuan pendidikan kesetaraan, misalnya PKBM atau SKB, dan datanya masuk Dapodik. Jalur utamanya adalah Program Indonesia Pintar (PIP) yang mencakup Paket A sampai Paket C. Dana operasional seperti BOP Kesetaraan diterima lembaga, sedangkan zakat, beasiswa, dan donasi menjadi sumber pelengkap dari masyarakat.</p></div>
<p>Homeschooling sering dipilih keluarga anak berkebutuhan khusus karena memberi ruang untuk menyesuaikan ritme dan cara belajar. Namun biaya buku, modul, kegiatan, dan ujian tetap perlu disiapkan. Banyak orang tua bertanya apakah ada bantuan pemerintah untuk jalur ini. Jawabannya ada, tetapi aksesnya bergantung pada status pendaftaran anak. Artikel ini menjelaskan jenis bantuan, syaratnya, dan langkah yang realistis.</p>
<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>

<h2 id="ringkas">Gambaran bantuan biaya homeschooling</h2>
<p>Bantuan biaya pendidikan di Indonesia dapat dikelompokkan menjadi tiga. Pertama, bantuan untuk murid, contohnya Program Indonesia Pintar yang diberikan tunai untuk biaya personal pendidikan. Kedua, bantuan untuk lembaga, seperti dana bantuan operasional bagi satuan pendidikan kesetaraan. Ketiga, bantuan dari masyarakat, seperti zakat, infak, beasiswa yayasan, dan program tanggung jawab sosial perusahaan.</p>
<p>Ketiganya punya pintu masuk berbeda. Bantuan pemerintah untuk murid hampir selalu memakai data resmi, sehingga anak perlu tercatat di sistem pendidikan. Bantuan lembaga mengalir ke penyelenggara, bukan ke keluarga. Bantuan masyarakat lebih fleksibel tetapi syaratnya ditentukan masing-masing pengelola. Memahami perbedaan ini membantu keluarga tidak menghabiskan waktu di jalur yang tidak cocok.</p>
<p>Sebelum mencari bantuan, hitung dulu kebutuhan biaya secara jujur. Gambaran pos biaya dan kisarannya dibahas di artikel <a href="/artikel/biaya-homeschooling">biaya homeschooling</a>. Dari sana keluarga dapat menentukan pos mana yang paling membutuhkan bantuan, misalnya modul belajar, biaya pendaftaran PKBM, atau kegiatan sosial anak.</p>
${diag(`${IMG}/${slug}-jenis.svg`, 'Diagram tiga kartu jenis bantuan: PIP untuk murid, BOP untuk lembaga, dan bantuan dari masyarakat', 'Tiga jenis bantuan biaya. PIP mencakup Paket A sampai Paket C menurut laman resmi PIP Kemendikdasmen.')}

<h2 id="status">Status terdaftar menentukan akses bantuan</h2>
<p>Dasar hukum homeschooling adalah <a href="https://peraturan.go.id/id/permendikbud-no-129-tahun-2014" target="_blank" rel="noopener">Permendikbud Nomor 129 Tahun 2014 tentang Sekolahrumah</a>. Pasal 6 ayat (1) mewajibkan penyelenggara sekolahrumah tunggal dan majemuk mendaftar ke dinas pendidikan kabupaten atau kota. Pasal 6 ayat (4) menyatakan sekolahrumah komunitas wajib memperoleh izin pendirian sebagai kelompok belajar. Rincian syaratnya ada di artikel <a href="/artikel/syarat-izin-homeschooling">syarat izin homeschooling</a>.</p>
<p>Pendaftaran bukan sekadar formalitas. Pasal 13 peraturan yang sama menyebut pemerintah daerah berkewajiban melakukan pembinaan sekolahrumah. Selain itu, peraturan terbaru tentang tes akademik nasional, <a href="https://peraturan.bpk.go.id/Details/321171/permendikdasmen-no-9-tahun-2025" target="_blank" rel="noopener">Permendikdasmen Nomor 9 Tahun 2025</a>, menyebut murid sekolahrumah sebagai peserta dari jalur pendidikan informal, dan Pasal 8 ayat (2) mewajibkan peserta terdaftar dalam sistem basis data kementerian.</p>
<p>Logika yang sama berlaku untuk bantuan. Program pemerintah bekerja dengan data. Anak yang tidak tercatat di mana pun sulit dijangkau, sebaik apa pun kondisi keluarganya. Karena itu, langkah pertama mencari bantuan biaya homeschooling adalah memastikan status anak jelas: terdaftar sebagai sekolahrumah di dinas, sebagai murid PKBM atau SKB, atau sebagai anggota kelompok belajar berizin.</p>
${diag(`${IMG}/${slug}-status.svg`, 'Tabel visual empat status homeschooling dan peluang bantuan pemerintahnya', 'Status pendaftaran dan peluang bantuan. Kewajiban pendaftaran dan izin mengacu pada Pasal 6 Permendikbud 129/2014.')}
<p>Bila anak sudah atau akan menempuh ujian kesetaraan, statusnya biasanya melekat pada lembaga penyelenggara. Penjelasan tentang ijazah dan penyetaraan ada di artikel <a href="/artikel/apakah-homeschooling-dapat-ijazah">apakah homeschooling dapat ijazah</a>.</p>

<h2 id="pip">PIP untuk murid Paket A, B, dan C</h2>
<p>Program Indonesia Pintar (PIP) adalah bantuan uang tunai dari pemerintah untuk biaya personal pendidikan murid berusia 6 sampai 21 tahun dari keluarga miskin atau rentan miskin, sebagaimana dijelaskan dalam <a href="https://puslapdik.kemendikdasmen.go.id/faq-program-indonesia-pintar/" target="_blank" rel="noopener">FAQ PIP Puslapdik</a>. <a href="https://pip.kemendikdasmen.go.id/v1/home_v1" target="_blank" rel="noopener">Laman resmi PIP</a> menyebut program ini menjangkau jalur formal SD sampai SMA atau SMK, jalur nonformal Paket A sampai Paket C, dan pendidikan khusus.</p>
<p>Besaran bantuan menurut FAQ Puslapdik adalah Rp450.000 per tahun untuk SD, SDLB, dan Paket A, serta Rp750.000 per tahun untuk SMP, SMPLB, dan Paket B. Untuk SMA, SMK, SMALB, dan Paket C, Puslapdik dalam <a href="https://puslapdik.kemendikdasmen.go.id/klarifikasi-puslapdik-nominal-dana-pip-jenjang-sma-dan-smk-sebesar-rp1-800-000/" target="_blank" rel="noopener">klarifikasi Juli 2025</a> menegaskan besarannya Rp1.800.000 per tahun berdasarkan Persesjen Kemendikbudristek Nomor 19 Tahun 2024.</p>
<table><thead><tr><th>Jenjang</th><th>Besaran PIP per tahun</th><th>Murid baru dan kelas akhir</th></tr></thead><tbody>
<tr><td>SD, SDLB, Paket A</td><td>Rp450.000</td><td>Rp225.000</td></tr>
<tr><td>SMP, SMPLB, Paket B</td><td>Rp750.000</td><td>Rp375.000</td></tr>
<tr><td>SMA, SMK, SMALB, Paket C</td><td>Rp1.800.000</td><td>Rp900.000</td></tr>
</tbody></table>
<p>Sumber tabel: FAQ PIP Puslapdik untuk jenjang dasar dan klarifikasi Puslapdik Juli 2025 untuk jenjang menengah, diperiksa 19 Oktober 2026. Murid baru dan kelas akhir menerima setengah karena hanya menjalani satu semester dalam satu tahun anggaran. Nominal dapat diperbarui sewaktu-waktu, jadi selalu cocokkan dengan pengumuman resmi terbaru sebelum membuat rencana keuangan.</p>
<p>Menurut Puslapdik, penetapan penerima memerlukan data murid di Dapodik yang lengkap, valid, dan logis, ditandai layak PIP oleh satuan pendidikan, lalu diusulkan dinas atau pemangku kepentingan dan dipadankan dengan data kesejahteraan sosial. Artikel Puslapdik tentang <a href="https://puslapdik.kemendikdasmen.go.id/data-siswa-di-dapodik-penentu-seorang-siswa-memperoleh-bantuan-pip/" target="_blank" rel="noopener">data Dapodik sebagai penentu PIP</a> menegaskan pendidikan kesetaraan termasuk yang berpeluang menerima.</p>

<h2 id="langkah">Langkah mengakses PIP lewat PKBM atau SKB</h2>
<p>Bagi keluarga homeschooling, jalur yang paling jelas adalah mendaftarkan anak sebagai murid kesetaraan di PKBM atau SKB. Pilih lembaga yang memiliki NPSN dan bersedia menerima murid yang sebagian besar belajar di rumah. Tanyakan sejak awal bagaimana lembaga mendata murid, jadwal tatap muka atau tutorial, dan biaya yang dibebankan.</p>
<p>Setelah terdaftar, pastikan data anak lengkap dan sesuai dokumen kependudukan. Puslapdik mencatat banyak murid gagal menerima PIP karena masalah NIK, NISN, tanggal lahir, atau penghasilan orang tua yang tidak sinkron. Kesalahan kecil seperti ejaan nama atau tanggal lahir bisa membuat data tidak cocok, sehingga periksa ulang bersama operator lembaga.</p>
<ol>
<li>Pilih PKBM atau SKB yang memiliki NPSN dan menerima murid sekolahrumah.</li>
<li>Daftarkan anak dan serahkan dokumen kependudukan yang benar.</li>
<li>Pastikan operator memasukkan data anak ke Dapodik secara lengkap.</li>
<li>Pastikan keluarga terdata pada data kesejahteraan sosial melalui desa atau dinas sosial.</li>
<li>Minta lembaga menandai anak layak PIP bila memenuhi kriteria ekonomi.</li>
<li>Pantau status penetapan di laman PIP resmi dan lakukan aktivasi rekening bila ditetapkan.</li>
</ol>
${diag(`${IMG}/${slug}-langkah.svg`, 'Diagram enam langkah mengakses PIP bagi murid homeschooling melalui PKBM atau SKB', 'Enam langkah mengakses PIP. Ketentuan data Dapodik dan penandaan layak PIP mengikuti penjelasan Puslapdik Kemendikdasmen.')}

<h2 id="bop">BOP Kesetaraan: bantuan untuk lembaga</h2>
<p>Selain PIP, pemerintah menyalurkan dana bantuan operasional penyelenggaraan pendidikan kesetaraan kepada satuan pendidikan penyelenggara Paket A, B, dan C. Pengelolaannya diatur dalam petunjuk teknis kementerian, salah satunya <a href="https://peraturan.bpk.go.id/Details/224157/permendikbudriset-no-2-tahun-2022" target="_blank" rel="noopener">Permendikbudristek Nomor 2 Tahun 2022</a>. Aturan teknis seperti ini diperbarui berkala, jadi lembaga adalah pihak yang paling tahu ketentuan terbarunya.</p>
<p>Yang perlu dipahami keluarga: dana ini diterima lembaga untuk biaya operasional, bukan diberikan kepada orang tua. Meski begitu, keberadaan dana operasional dapat memengaruhi layanan dan biaya yang dibebankan kepada murid. Keluarga berhak menanyakan rincian biaya secara sopan, termasuk biaya apa yang ditanggung lembaga dan apa yang dibayar keluarga.</p>
${fig(`${IMG}/commons-pkbm-sejahtera-winong.webp`, 'Gapura beratap genteng dengan papan nama PKBM Sejahtera di depan halaman berumput dan bangunan bekas sekolah dasar', 'PKBM Sejahtera di Winong menempati bekas gedung SDN III Winong. Pusat kegiatan belajar masyarakat seperti ini menjadi tempat banyak murid kesetaraan terdaftar dan didata.', 'Foto: <a href="https://commons.wikimedia.org/wiki/File:PKBM_Sejahtera_(Ex_SDN_III_Winong)_-_panoramio.jpg" target="_blank" rel="nofollow noopener">Rahbudiman (Winong Community)</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/3.0" target="_blank" rel="nofollow noopener">CC BY 3.0</a>')}

<h2 id="abk">Bantuan bagi anak berkebutuhan khusus</h2>
<p>Bagi keluarga anak berkebutuhan khusus, ada beberapa hal tambahan yang patut diketahui. Laman resmi PIP mencantumkan peserta didik yang mengalami kelainan fisik sebagai salah satu sasaran prioritas. Program ini juga menyebut pendidikan khusus sebagai bagian cakupannya. Penetapan tetap mengikuti data dan prosedur, tetapi informasi ini berguna saat keluarga berdiskusi dengan operator lembaga.</p>
<p>Kartu penyandang disabilitas juga membantu dalam banyak urusan administrasi dan program sosial. Panduan pengurusannya ada di artikel <a href="/artikel/kartu-disabilitas">kartu disabilitas</a>. Untuk gambaran program pemerintah lain yang dapat diajukan, baca artikel <a href="/artikel/cara-mengajukan-bantuan-pemerintah-untuk-anak-disabilitas">cara mengajukan bantuan pemerintah untuk anak disabilitas</a>.</p>
<p>Keluarga yang memilih homeschooling karena kebutuhan khusus anak sebaiknya tetap menimbang pilihan lain secara berkala. Artikel <a href="/artikel/homeschooling-anak-berkebutuhan-khusus">homeschooling untuk ABK</a> dan <a href="/artikel/perbedaan-homeschooling-dan-sekolah-formal-untuk-abk">perbedaan homeschooling dan sekolah formal untuk ABK</a> membantu menilai apakah jalur ini tetap paling cocok, termasuk dari sisi biaya dan dukungan yang tersedia.</p>
<p>Perlu dicatat, Pasal 8 ayat (7) Permendikdasmen 9/2025 mengecualikan murid berkebutuhan khusus penyandang disabilitas yang memiliki hambatan intelektual dari kepesertaan TKA. Keluarga sebaiknya menanyakan kepada lembaga bagaimana penilaian dan penyetaraan hasil belajar dilakukan untuk anaknya.</p>

<h2 id="masyarakat">Zakat, beasiswa, dan donasi dari masyarakat</h2>
<p>Di luar program pemerintah, bantuan dari masyarakat sering menjadi penopang penting. Lembaga zakat dapat menyalurkan dana pendidikan bagi keluarga yang memenuhi syarat sebagai penerima. Yayasan dan perusahaan juga kerap membuka beasiswa atau bantuan perlengkapan belajar. Setiap pengelola punya syarat, dokumen, dan jenis biaya yang bisa dibantu, sehingga keluarga perlu bertanya langsung.</p>
<p>Siapkan dokumen yang umum diminta: identitas keluarga, bukti status pendidikan anak, rincian kebutuhan biaya, dan bila ada, keterangan kondisi anak. Rincian biaya yang jelas memudahkan pengelola menilai permohonan. Setelah menerima bantuan, simpan bukti penggunaan dana, karena banyak lembaga meminta laporan sebagai bentuk <a href="/artikel/transparansi-donasi">transparansi donasi</a>.</p>
<p>YUKA juga mengelola <a href="/zakat-pendidikan-abk">zakat pendidikan ABK</a> dan <a href="/donasi-pendidikan-abk">donasi pendidikan ABK</a> untuk mendukung pendidikan anak berkebutuhan khusus. Keluarga yang ingin bertanya tentang program ini dapat menghubungi tim melalui halaman <a href="/kontak">kontak</a>. Bagi yang ingin ikut membantu, panduan <a href="/artikel/bagaimana-cara-menyalurkan-donasi">cara menyalurkan donasi</a> menjelaskan langkahnya.</p>

<h2 id="pos">Pos biaya homeschooling dan sumber bantuannya</h2>
<p>Tidak semua pos biaya cocok dibiayai dari sumber yang sama. PIP diberikan untuk biaya personal pendidikan murid, seperti perlengkapan belajar dan transport ke tempat belajar. Biaya pendaftaran dan operasional lembaga berkaitan dengan kebijakan lembaga itu sendiri. Bantuan masyarakat bisa lebih luas, tergantung kesepakatan dengan pengelola.</p>
<table><thead><tr><th>Pos biaya</th><th>Contoh</th><th>Sumber bantuan yang bisa ditanyakan</th></tr></thead><tbody>
<tr><td>Perlengkapan belajar</td><td>Buku, alat tulis, modul cetak</td><td>PIP, beasiswa perlengkapan, donasi</td></tr>
<tr><td>Pendaftaran dan biaya lembaga</td><td>Pendaftaran PKBM, biaya tutorial</td><td>Kebijakan lembaga, beasiswa yayasan, zakat pendidikan</td></tr>
<tr><td>Kegiatan dan sosialisasi</td><td>Kunjungan belajar, klub, ekstrakurikuler</td><td>Donasi komunitas, program CSR</td></tr>
<tr><td>Alat bantu belajar</td><td>Alat komunikasi, perangkat adaptif</td><td>Program daerah, yayasan, zakat pendidikan</td></tr>
<tr><td>Transport ke tempat belajar</td><td>Ongkos ke PKBM atau tempat tutorial</td><td>PIP, bantuan keluarga besar atau komunitas</td></tr>
</tbody></table>
<p>Dengan memetakan pos biaya seperti ini, keluarga dapat mengajukan bantuan secara tepat sasaran. Permohonan yang menyebut kebutuhan konkret, misalnya biaya modul semester ini, biasanya lebih mudah diproses daripada permohonan umum tanpa rincian. Untuk anak autis yang menjalani homeschooling, contoh susunan rutinitas dan materi ada di artikel <a href="/artikel/homeschooling-untuk-anak-autis-kurikulum">homeschooling untuk anak autis</a>.</p>

<h2 id="waspada">Waspada pungutan dan penipuan</h2>
<p>Program bantuan sering dimanfaatkan pihak tidak bertanggung jawab. Pola yang umum adalah meminta uang agar anak ditetapkan sebagai penerima, meminta PIN atau kode rahasia rekening, atau mengirim tautan pendaftaran palsu. Ingat, penetapan PIP berbasis data dan usulan resmi, bukan berdasarkan pembayaran kepada perantara.</p>
<p>Cek status penerima hanya melalui laman resmi PIP. Bila menemukan kejanggalan, hubungi layanan pengaduan Kemendikdasmen atau dinas pendidikan setempat. Simpan bukti percakapan bila ada pihak yang meminta uang. Untuk bantuan dari masyarakat, pilih lembaga yang jelas identitas dan laporannya, serta hindari menyerahkan dokumen asli kepada pihak yang tidak dikenal.</p>
<p>Terakhir, jangan biarkan proses mencari bantuan menghentikan belajar anak. Rencana belajar yang sederhana tetap bisa berjalan dengan sumber gratis seperti perpustakaan, buku pinjaman, dan materi resmi pemerintah. Bila keluarga masih menimbang jalur pendidikan, artikel <a href="/artikel/homeschooling-vs-sekolah-inklusi">homeschooling vs sekolah inklusi</a> dan <a href="/artikel/homeschooling-adalah">pengertian homeschooling</a> dapat menjadi titik awal diskusi.</p>

<h2 id="faq">Pertanyaan Umum tentang Bantuan Biaya Homeschooling</h2>
${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('\n')}
`;

const meta = 'Bantuan biaya homeschooling: syarat PIP untuk Paket A, B, C, besaran resmi, peran PKBM dan Dapodik, BOP Kesetaraan, serta zakat dan donasi.';
const data = {
  slug,
  titleTag: 'Bantuan Biaya Homeschooling: PIP, Syarat, dan Caranya | YUKA',
  metaDesc: meta,
  keywords: 'bantuan biaya homeschooling, pip paket a, pip paket c, bop kesetaraan, bantuan homeschooling abk',
  ogTitle: 'Bantuan Biaya Homeschooling: PIP, Syarat, dan Caranya',
  ogDesc: meta,
  h1: 'Bantuan Biaya Homeschooling: Jenis, Syarat PIP, dan Cara Mengaksesnya',
  crumb: 'Bantuan Biaya Homeschooling',
  category: 'Pendidikan',
  datePublished: '2026-10-21T08:00:00+07:00',
  dateModified: '2026-10-21T08:00:00+07:00',
  dateDisplay: '21 Oktober 2026',
  readTime: '14 menit baca',
  image: { file: heroFile, w: 1200, h: 900, alt: 'Seorang anak bertopi koki biru duduk di depan meja kayu panjang di gazebo terbuka dengan tas-tas di sampingnya', caption: 'Dokumentasi kegiatan YUKA di sebuah gazebo terbuka. Foto suasana belajar, bukan dokumentasi penerima bantuan.', credit },
  bodyHtml,
  faq,
  related: [
    { href: '/artikel/biaya-homeschooling', title: 'Biaya Homeschooling di Indonesia', desc: 'Rincian pos biaya dan kisarannya.' },
    { href: '/artikel/syarat-izin-homeschooling', title: 'Syarat Izin Homeschooling', desc: 'Dasar hukum dan cara mendaftar sekolahrumah.' },
    { href: '/artikel/homeschooling-anak-berkebutuhan-khusus', title: 'Homeschooling untuk ABK', desc: 'Pertimbangan homeschooling bagi anak berkebutuhan khusus.' },
  ],
  tags: ['Homeschooling', 'BantuanPendidikan', 'PIP'],
  sources: [
    { url: 'https://peraturan.go.id/id/permendikbud-no-129-tahun-2014', label: 'Permendikbud No. 129 Tahun 2014 tentang Sekolahrumah (Pasal 6 dan 13)' },
    { url: 'https://peraturan.bpk.go.id/Details/321171/permendikdasmen-no-9-tahun-2025', label: 'Permendikdasmen No. 9 Tahun 2025 tentang Tes Kemampuan Akademik (Pasal 8)' },
    { url: 'https://pip.kemendikdasmen.go.id/v1/home_v1', label: 'Laman resmi Program Indonesia Pintar Kemendikdasmen' },
    { url: 'https://puslapdik.kemendikdasmen.go.id/faq-program-indonesia-pintar/', label: 'Puslapdik: FAQ Program Indonesia Pintar (besaran dan syarat)' },
    { url: 'https://puslapdik.kemendikdasmen.go.id/klarifikasi-puslapdik-nominal-dana-pip-jenjang-sma-dan-smk-sebesar-rp1-800-000/', label: 'Puslapdik: Klarifikasi nominal PIP jenjang SMA, SMK, dan Paket C (Juli 2025)' },
    { url: 'https://puslapdik.kemendikdasmen.go.id/data-siswa-di-dapodik-penentu-seorang-siswa-memperoleh-bantuan-pip/', label: 'Puslapdik: Data siswa di Dapodik penentu penerima PIP' },
    { url: 'https://peraturan.bpk.go.id/Details/224157/permendikbudriset-no-2-tahun-2022', label: 'Permendikbudristek No. 2 Tahun 2022 tentang Juknis Dana BOP PAUD, BOS, dan BOP Kesetaraan' },
  ],
  sourcesCheckedNote: 'Sumber dibuka dan dibaca pada 19 Oktober 2026. Nominal PIP dapat berubah, selalu cocokkan dengan pengumuman resmi terbaru.',
};

if (require.main === module) {
  for (const [file, content] of Object.entries(diagrams)) fs.writeFileSync(path.join(ROOT, file), content);
  const size = imageSize(path.join(ROOT, heroFile));
  if (size.w !== 1200 || size.h !== 900) throw new Error('Hero wajib 1200x900.');
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), renderArticlePage(data));
  console.log(`Generated artikel/${slug}.html`);
}
module.exports = { data, faq, bodyHtml };

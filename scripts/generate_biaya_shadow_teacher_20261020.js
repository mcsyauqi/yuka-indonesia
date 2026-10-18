'use strict';
// Generator artikel "biaya shadow teacher per bulan" (cycle #80, antrean 2026-10-20).
// Keyword dari Google Sheet Keyword Data YUKA (tab "Keyword Data"). Tidak ada tarif resmi nasional
// untuk shadow teacher, jadi artikel ini sengaja TIDAK menyebut angka rupiah: yang diberikan adalah
// komponen biaya, rumus hitung, dan dasar regulasi (Permendikbudristek 48/2023 Pasal 12 dan 20).
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');
const ROOT = path.resolve(__dirname, '..');
const slug = 'biaya-shadow-teacher-per-bulan';
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const heroFile = 'Dokumentasi/yuka-shadow-teacher-biaya-hero-20261020.webp';
const IMG = 'assets/images/artikel';

const diagrams = {
  [`${IMG}/${slug}-rumus.svg`]: svg.flow('Cara menghitung biaya shadow teacher per bulan', 'Isi tiap kotak dengan angka dari penawaran tertulis, lalu jumlahkan', [
    { h: 'Jam per hari', d: 'Hitung jam pendampingan sebenarnya, termasuk waktu datang lebih awal dan serah terima.' },
    { h: 'Hari efektif', d: 'Hitung hari sekolah dalam bulan itu sesuai kalender sekolah, bukan selalu angka tetap.' },
    { h: 'Tarif dasar', d: 'Tarif per jam, per hari, atau per bulan sesuai penawaran tertulis lembaga atau pendamping.' },
    { h: 'Biaya pokok', d: 'Jam per hari dikali hari efektif dikali tarif per jam, atau langsung tarif bulanan.' },
    { h: 'Komponen tambahan', d: 'Transport, makan, supervisi, laporan, pelatihan, dan biaya administrasi lembaga.' },
    { h: 'Total per bulan', d: 'Biaya pokok ditambah komponen tambahan. Bandingkan total, bukan tarif dasarnya saja.' },
  ]),
  [`${IMG}/${slug}-model.svg`]: svg.cards('Tiga model pendampingan dan konsekuensi biayanya', 'Model kerja menentukan siapa membayar dan apa saja yang termasuk', [
    { h: 'Melalui lembaga', color: '#2B3A67', items: ['Ada supervisor dan pengganti saat pendamping sakit', 'Tarif biasanya memuat biaya pelatihan dan administrasi', 'Minta rincian komponen dalam penawaran tertulis'] },
    { h: 'Direkrut keluarga', color: '#00838F', items: ['Tarif dasar bisa lebih fleksibel', 'Keluarga menanggung urusan kontrak, cuti, dan pengganti', 'Perlu izin dan kesepakatan dengan sekolah'] },
    { h: 'Disediakan sekolah atau ULD', color: '#7A5A06', items: ['Bagian dari akomodasi yang layak sesuai kemampuan sekolah', 'Tanyakan apakah ada guru pembimbing khusus', 'Ketersediaan berbeda antardaerah dan antarsekolah'] },
  ]),
  [`${IMG}/${slug}-fading.svg`]: svg.grid('Rencana mengurangi pendampingan bertahap', 'Pendampingan yang dirancang menuju kemandirian juga menekan biaya jangka panjang', ['Fase', 'Peran pendamping', 'Tanda siap ke fase berikutnya'], [
    ['Fase 1: adaptasi', 'Mendampingi hampir seluruh kegiatan dan memetakan pemicu', 'Anak mengenal rutinitas dan mau meminta bantuan'],
    ['Fase 2: bantuan terarah', 'Hadir pada pelajaran atau waktu yang paling menantang', 'Anak bertahan lebih lama dalam tugas kelas'],
    ['Fase 3: dari jauh', 'Mengamati dari belakang kelas, membantu guru bila perlu', 'Guru dan teman sebaya mulai mengambil peran'],
    ['Fase 4: konsultasi', 'Kunjungan berkala untuk evaluasi dan pelatihan guru', 'Anak mandiri dengan dukungan kelas biasa'],
  ], [250, 450, 404]),
};

const fig = (file, alt, caption, kredit) => {
  const { w, h } = imageSize(path.join(ROOT, file));
  return `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${kredit}</span></figcaption></figure>`;
};
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;

const faq = [
  { q: 'Berapa biaya shadow teacher per bulan?', a: 'Tidak ada tarif resmi nasional. Biaya per bulan bergantung pada jam pendampingan per hari, jumlah hari efektif sekolah, tarif per jam atau per bulan, serta komponen tambahan seperti transport, supervisi, dan laporan. Cara paling aman adalah meminta penawaran tertulis yang merinci setiap komponen, lalu menghitung totalnya dengan rumus di artikel ini.' },
  { q: 'Apakah sekolah wajib menyediakan shadow teacher?', a: 'Permendikbudristek 48/2023 mewajibkan satuan pendidikan yang telah mendapat fasilitasi pemerintah daerah menyediakan akomodasi yang layak berdasarkan asesmen fungsional. Pasal 20 menyebut Unit Layanan Disabilitas memberikan layanan penyediaan tenaga pendamping untuk kelancaran pembelajaran. Bentuk pendampingan tiap sekolah berbeda, jadi tanyakan apa yang sudah tersedia sebelum keluarga merekrut sendiri.' },
  { q: 'Mengapa tarif shadow teacher bisa sangat berbeda?', a: 'Perbedaan muncul dari kualifikasi dan pengalaman pendamping, kebutuhan anak, durasi pendampingan, wilayah, serta model kerja. Lembaga biasanya menyertakan supervisi, pelatihan, dan pengganti saat pendamping berhalangan, sehingga tarifnya memuat biaya tersebut. Bandingkan isi layanan, bukan hanya angka tarif dasarnya.' },
  { q: 'Apakah biaya tetap dibayar saat libur sekolah?', a: 'Tergantung kontrak. Sebagian lembaga menghitung per hari hadir, sebagian memakai tarif bulanan tetap. Tuliskan dengan jelas bagaimana libur semester, libur nasional, anak sakit, dan pendamping sakit diperlakukan. Kesepakatan tertulis mencegah perselisihan dan menjaga hubungan baik antara keluarga, sekolah, dan pendamping.' },
  { q: 'Bagaimana cara menekan biaya tanpa merugikan anak?', a: 'Susun rencana pengurangan pendampingan bertahap sejak awal, libatkan guru kelas dan teman sebaya, serta pastikan pendamping melatih kemandirian, bukan mengerjakan tugas untuk anak. Pendampingan yang dirancang menuju kemandirian biasanya membutuhkan jam lebih sedikit dari waktu ke waktu sehingga biaya jangka panjang ikut turun.' },
  { q: 'Apakah zakat atau donasi boleh dipakai untuk biaya pendamping?', a: 'Sebagian lembaga zakat dan program donasi menyalurkan bantuan pendidikan bagi anak berkebutuhan khusus dari keluarga yang membutuhkan. Ketentuan penyaluran berbeda di tiap lembaga. Tanyakan langsung kepada lembaga pengelola tentang syarat, dokumen, dan jenis biaya pendidikan yang dapat dibantu.' },
  { q: 'Apa isi minimal kontrak dengan shadow teacher?', a: 'Kontrak sebaiknya memuat jam kerja, tugas dan batas tugas, tarif dan cara pembayaran, perlakuan libur dan sakit, kewajiban laporan, kerahasiaan data anak, jadwal evaluasi, serta cara mengakhiri kerja sama. Sertakan juga kesepakatan dengan sekolah tentang aturan pendamping di kelas agar peran semua pihak jelas.' },
];

const sections = [
  ['jawaban', 'Tidak ada tarif resmi, ini yang menentukan biayanya'],
  ['siapa', 'Siapa seharusnya menanggung pendampingan'],
  ['model', 'Tiga model kerja dan dampaknya pada biaya'],
  ['rumus', 'Rumus menghitung biaya shadow teacher per bulan'],
  ['komponen', 'Komponen biaya yang sering terlewat'],
  ['kontrak', 'Isi kontrak agar biaya tidak membengkak'],
  ['fading', 'Rencana mengurangi pendampingan bertahap'],
  ['hemat', 'Cara menekan biaya tanpa merugikan anak'],
  ['bantuan', 'Sumber bantuan biaya yang bisa ditanyakan'],
  ['faq', 'Pertanyaan Umum tentang Biaya Shadow Teacher'],
];

const bodyHtml = `
<div class="jawaban-singkat"><p><strong>Biaya shadow teacher per bulan</strong> tidak memiliki tarif resmi nasional. Besarnya ditentukan oleh jam pendampingan per hari, jumlah hari efektif sekolah, tarif yang disepakati, dan komponen tambahan seperti transport, supervisi, serta laporan. Sebelum merekrut sendiri, tanyakan dulu dukungan pendamping yang tersedia di sekolah, karena pendampingan termasuk bentuk akomodasi yang layak.</p></div>
<p>Saat anak mulai bersekolah di kelas inklusi, banyak keluarga mendapat saran untuk menyediakan shadow teacher atau pendamping khusus. Pertanyaan berikutnya hampir selalu soal biaya. Jawabannya tidak bisa berupa satu angka, karena kebutuhan anak, model kerja, dan isi layanan sangat beragam. Artikel ini membantu keluarga menghitung biaya dengan cara yang jujur, membandingkan penawaran, dan menekan biaya jangka panjang tanpa mengorbankan anak.</p>
<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>

<h2 id="jawaban">Tidak ada tarif resmi, ini yang menentukan biayanya</h2>
<p>Shadow teacher adalah pendamping yang membantu anak berkebutuhan khusus mengikuti kegiatan di kelas reguler. Pengertian dan tugasnya dibahas lengkap di artikel <a href="/artikel/shadow-teacher-adalah">shadow teacher adalah</a>. Yang perlu dipahami di sini: pemerintah tidak menetapkan tarif baku untuk jasa ini. Angka yang beredar di media sosial atau forum orang tua adalah pengalaman perorangan yang belum tentu cocok untuk anak Anda.</p>
<p>Ada lima faktor utama yang menentukan biaya. Pertama, durasi pendampingan per hari, apakah penuh selama jam sekolah atau hanya pada pelajaran tertentu. Kedua, jumlah hari efektif dalam sebulan. Ketiga, kualifikasi dan pengalaman pendamping. Keempat, model kerja, yaitu melalui lembaga atau direkrut langsung. Kelima, komponen tambahan seperti transport, makan siang, supervisi, dan laporan berkala.</p>
<p>Kebutuhan anak juga memengaruhi pilihan pendamping. Anak yang membutuhkan dukungan komunikasi intensif mungkin memerlukan pendamping yang terlatih memakai alat komunikasi alternatif. Anak yang lebih membutuhkan bantuan regulasi emosi mungkin memerlukan pendamping yang paham strategi menenangkan diri. Pendamping dengan kompetensi khusus wajar meminta tarif berbeda.</p>
<p>Karena itu, cara paling aman adalah meminta penawaran tertulis yang merinci setiap komponen. Penawaran yang hanya menyebut angka bulanan tanpa rincian menyulitkan perbandingan. Gunakan rumus di bagian berikutnya untuk mengubah setiap penawaran menjadi total biaya bulanan yang setara, lalu bandingkan isi layanannya.</p>

<h2 id="siapa">Siapa seharusnya menanggung pendampingan</h2>
<p>Sebelum menghitung biaya, keluarga perlu tahu bahwa pendampingan termasuk dalam kerangka akomodasi yang layak. <a href="https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023" target="_blank" rel="noopener">Permendikbudristek Nomor 48 Tahun 2023</a> Pasal 12 menyebut akomodasi yang layak diberikan berdasarkan hasil asesmen fungsional yang dilaksanakan satuan pendidikan dan difasilitasi Unit Layanan Disabilitas (ULD).</p>
<p>Pasal 20 ayat (1) peraturan yang sama menyebut ULD memberikan layanan berupa penyediaan tenaga pendamping untuk kelancaran proses pembelajaran pada satuan pendidikan. Lampiran peraturan ini juga mencantumkan ketersediaan pendamping pada waktu proses pembelajaran jika diperlukan sebagai salah satu bentuk akomodasi. Dasar yang lebih tinggi adalah <a href="https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020" target="_blank" rel="noopener">PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</a>.</p>
<p>Dalam praktik, ketersediaan pendamping dari sekolah atau ULD masih berbeda antardaerah. Sebagian sekolah memiliki <a href="/artikel/gpk-adalah">guru pembimbing khusus</a> yang melayani beberapa anak, sebagian lain belum. Jadi langkah pertama adalah bertanya: dukungan apa yang sudah tersedia, berapa jam, dan untuk kebutuhan apa. Jawaban ini menentukan berapa jam pendampingan tambahan yang benar-benar perlu dibiayai keluarga.</p>
<p>Bila sekolah meminta keluarga menyediakan pendamping sendiri, minta penjelasan tertulis tentang alasan dan peran yang diharapkan. Kejelasan ini membantu keluarga menyusun kontrak dan mencegah pendamping dibebani tugas yang seharusnya menjadi tanggung jawab guru kelas.</p>
${fig(`${IMG}/commons-kelas-darurat-sd-gelang-07-jember.webp`, 'Seorang guru berdiri membacakan materi di depan siswa SD yang belajar di meja kayu di bawah tenda darurat', 'Satu guru di kelas melayani banyak siswa sekaligus. Siswa SD Negeri Gelang 07 Jember ini belajar di tenda darurat setelah gedung sekolah rusak akibat bencana. Situasi kelas seperti ini membuat kebutuhan dukungan individual perlu direncanakan bersama sekolah.', 'Foto: <a href="https://commons.wikimedia.org/wiki/File:Semangat_belajar.jpg" target="_blank" rel="nofollow noopener">Kang maman99</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="nofollow noopener">CC BY-SA 4.0</a>')}

<h2 id="model">Tiga model kerja dan dampaknya pada biaya</h2>
<p>Model pertama adalah pendamping dari lembaga penyedia. Lembaga biasanya merekrut, melatih, dan menyupervisi pendamping, serta menyediakan pengganti saat pendamping sakit. Tarifnya umumnya memuat biaya-biaya tersebut, sehingga angka per bulan terlihat lebih tinggi. Kelebihannya, keluarga tidak perlu mengurus administrasi dan ada pihak yang bertanggung jawab atas mutu layanan.</p>
<p>Model kedua adalah pendamping yang direkrut langsung oleh keluarga. Tarif dasar bisa lebih fleksibel, tetapi keluarga menanggung urusan yang biasanya diurus lembaga: kontrak, pengganti, pelatihan, dan evaluasi. Keluarga juga perlu memastikan sekolah mengizinkan pendamping dari luar dan menyepakati aturan kehadirannya di kelas. Panduan memilih pendamping ada di artikel <a href="/artikel/cara-memilih-shadow-teacher">cara memilih shadow teacher</a>.</p>
<p>Model ketiga adalah dukungan yang disediakan sekolah atau ULD sebagai bagian dari akomodasi yang layak. Bentuknya bisa guru pembimbing khusus, pendamping bersama untuk beberapa anak, atau dukungan pada jam tertentu. Biaya bagi keluarga bisa jauh lebih kecil atau bahkan tidak ada, tetapi jumlah jamnya mungkin terbatas. Kombinasi model kedua atau pertama dengan model ketiga sering menjadi pilihan realistis.</p>
${diag(`${IMG}/${slug}-model.svg`, 'Diagram tiga kartu: pendamping melalui lembaga, direkrut keluarga, dan disediakan sekolah atau ULD beserta konsekuensi biayanya', 'Tiga model pendampingan. Penyediaan tenaga pendamping oleh Unit Layanan Disabilitas tercantum dalam Pasal 20 ayat (1) Permendikbudristek 48/2023.')}

<h2 id="rumus">Rumus menghitung biaya shadow teacher per bulan</h2>
<p>Agar penawaran yang berbeda format bisa dibandingkan, ubah semuanya ke total biaya bulanan. Rumus dasarnya sederhana: jam pendampingan per hari dikali jumlah hari efektif dalam sebulan, dikali tarif per jam. Hasilnya adalah biaya pokok. Setelah itu tambahkan komponen lain yang dibebankan terpisah. Bila penawaran memakai tarif per hari, kalikan langsung dengan hari efektif.</p>
<p>Hari efektif perlu dihitung dari kalender sekolah, bukan dianggap selalu sama. Bulan yang berisi libur nasional, ujian, atau libur semester memiliki hari belajar lebih sedikit. Bila sekolah masuk lima hari sepekan, satu bulan biasa berisi kurang lebih dua puluh hari sekolah, tetapi angka pastinya tetap harus dicek ke kalender pendidikan sekolah anak.</p>
<p>Jam pendampingan juga perlu dihitung jujur. Pendamping biasanya datang sebelum bel masuk untuk menyambut anak dan tinggal sebentar setelah pulang untuk serah terima dengan orang tua. Waktu ini termasuk jam kerja. Tanyakan pula apakah ada pertemuan rutin dengan guru atau terapis yang dihitung terpisah.</p>
${diag(`${IMG}/${slug}-rumus.svg`, 'Diagram enam kotak rumus biaya: jam per hari, hari efektif, tarif dasar, biaya pokok, komponen tambahan, total per bulan', 'Rumus menghitung biaya per bulan. Isi setiap kotak dengan angka dari penawaran tertulis dan kalender sekolah anak, lalu bandingkan total antarpenawaran.')}
<p>Setelah semua penawaran diubah menjadi total bulanan, bandingkan isinya. Penawaran yang sedikit lebih mahal tetapi sudah termasuk supervisi, pengganti, dan laporan mingguan bisa lebih hemat dibanding penawaran murah yang membebankan semua itu terpisah. Catat juga biaya yang muncul sekali di awal, misalnya biaya asesmen atau pelatihan awal.</p>

<h2 id="komponen">Komponen biaya yang sering terlewat</h2>
<p>Banyak keluarga hanya membandingkan tarif dasar, lalu terkejut ketika tagihan bulan pertama datang. Komponen yang sering terlewat antara lain transport harian, makan siang, biaya supervisi dari koordinator lembaga, laporan perkembangan tertulis, dan biaya administrasi. Ada pula biaya pelatihan bila pendamping perlu mempelajari alat komunikasi atau strategi khusus untuk anak.</p>
<table><thead><tr><th>Komponen</th><th>Penjelasan</th><th>Pertanyaan untuk penyedia</th></tr></thead><tbody>
<tr><td>Tarif dasar</td><td>Biaya jasa pendampingan per jam, per hari, atau per bulan</td><td>Apakah tarif berubah bila jam pendampingan bertambah atau berkurang?</td></tr>
<tr><td>Transport dan makan</td><td>Sering dibayar terpisah, harian atau bulanan</td><td>Apakah sudah termasuk tarif dasar atau ditagih terpisah?</td></tr>
<tr><td>Supervisi</td><td>Pengawasan mutu oleh koordinator atau psikolog lembaga</td><td>Seberapa sering supervisi dilakukan dan siapa pelaksananya?</td></tr>
<tr><td>Laporan perkembangan</td><td>Catatan harian, mingguan, atau bulanan tentang kemajuan anak</td><td>Bentuk laporannya seperti apa dan apakah ada biaya tambahan?</td></tr>
<tr><td>Pengganti</td><td>Pendamping cadangan saat pendamping utama berhalangan</td><td>Apakah pengganti disediakan dan sudah mengenal anak?</td></tr>
<tr><td>Biaya awal</td><td>Asesmen, orientasi, atau pelatihan sebelum mulai</td><td>Apakah dibayar sekali di awal dan apa saja isinya?</td></tr>
</tbody></table>
<p>Komponen lain yang patut dibicarakan adalah perlakuan libur. Sebagian penyedia menghitung per hari hadir, sebagian lain memakai tarif bulanan tetap termasuk saat libur. Keduanya sah selama disepakati di awal. Yang penting, keluarga tahu sejak awal berapa yang dibayar di bulan libur semester atau ketika anak sakit beberapa hari.</p>

<h2 id="kontrak">Isi kontrak agar biaya tidak membengkak</h2>
<p>Kontrak tertulis melindungi semua pihak: anak, keluarga, pendamping, dan sekolah. Kontrak yang baik memuat jam kerja, tugas dan batas tugas, tarif dan cara pembayaran, perlakuan libur dan sakit, kewajiban laporan, kerahasiaan data anak, jadwal evaluasi, dan cara mengakhiri kerja sama. Bila pendamping direkrut langsung, perhatikan juga ketentuan ketenagakerjaan dan upah minimum yang berlaku di daerah Anda.</p>
<p>Batas tugas sangat penting bagi biaya dan bagi anak. Pendamping bertugas membantu anak mengikuti pembelajaran, bukan menggantikan guru, mengerjakan tugas anak, atau mengasuh anak lain di kelas. Tugas yang melebar biasanya menambah jam kerja dan sekaligus mengurangi kesempatan anak belajar mandiri.</p>
<p>Libatkan sekolah dalam kesepakatan. Sekolah perlu tahu kapan pendamping hadir, di mana ia boleh berada, dan bagaimana ia berkoordinasi dengan guru kelas. Tanpa kesepakatan ini, pendamping bisa terjebak antara harapan keluarga dan aturan sekolah. Model kerja sama guru dan pendamping dibahas di artikel <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching dalam kelas inklusi</a>.</p>

<h2 id="fading">Rencana mengurangi pendampingan bertahap</h2>
<p>Tujuan pendampingan adalah kemandirian anak, bukan kehadiran pendamping selamanya. Rencana pengurangan bertahap, sering disebut fading, sebaiknya disusun sejak awal. Rencana ini menetapkan fase-fase pendampingan beserta tanda bahwa anak siap ke fase berikutnya. Selain baik bagi anak, rencana ini membuat biaya jangka panjang lebih terkendali.</p>
<p>Pada fase awal, pendamping hadir hampir di seluruh kegiatan untuk membantu adaptasi dan memetakan pemicu kesulitan. Setelah anak mengenal rutinitas, pendamping fokus pada waktu yang paling menantang saja. Fase berikutnya, pendamping mengamati dari jauh sementara guru dan teman sebaya mengambil peran. Fase akhir berupa kunjungan konsultasi berkala.</p>
${diag(`${IMG}/${slug}-fading.svg`, 'Tabel visual empat fase pengurangan pendampingan: adaptasi, bantuan terarah, dari jauh, dan konsultasi', 'Empat fase pengurangan pendampingan. Setiap fase dievaluasi bersama guru dan keluarga sebelum berpindah ke fase berikutnya.')}
<p>Kecepatan setiap fase berbeda untuk tiap anak. Sebagian anak membutuhkan waktu lama di fase awal, sebagian bergerak cepat lalu perlu kembali ke fase sebelumnya saat ada perubahan besar, misalnya guru baru atau naik kelas. Rencana yang dievaluasi rutin bersama guru, sejalan dengan <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>, membuat penyesuaian ini terukur.</p>

<h2 id="hemat">Cara menekan biaya tanpa merugikan anak</h2>
<p>Ada beberapa cara menekan biaya yang tetap berpihak pada anak. Pertama, pastikan jam pendampingan sesuai kebutuhan nyata dari hasil <a href="/artikel/asesmen-abk">asesmen</a>, bukan selalu penuh sejak hari pertama. Kedua, manfaatkan dukungan teman sebaya melalui <a href="/artikel/buddy-system-untuk-anak-abk-di-sekolah">buddy system</a> atau <a href="/artikel/peer-tutoring-di-kelas-inklusi">peer tutoring</a> yang dirancang guru.</p>
<p>Ketiga, minta pendamping melatih guru kelas tentang strategi yang berhasil, sehingga dukungan tetap berjalan saat pendamping tidak ada. Keempat, bila ada beberapa anak dengan kebutuhan serupa di satu kelas, diskusikan kemungkinan pendamping bersama dengan sekolah dan keluarga lain. Kelima, siapkan dukungan di rumah, misalnya jadwal visual dan latihan rutinitas, agar beban di sekolah berkurang.</p>
<p>Hindari menghemat dengan memilih pendamping tanpa pembekalan sama sekali. Pendamping yang tidak paham kebutuhan anak bisa tanpa sengaja membuat anak terlalu bergantung atau justru memicu perilaku menantang. Biaya perbaikan masalah semacam ini sering lebih besar daripada selisih tarif di awal. Strategi kelas yang bermanfaat dibahas di artikel <a href="/artikel/classroom-management-kelas-inklusi">manajemen kelas inklusi</a>.</p>
<p>Bila biaya pendamping tetap terasa berat, bandingkan juga dengan pilihan layanan pendidikan lain. Artikel <a href="/artikel/homeschooling-vs-sekolah-inklusi">homeschooling vs sekolah inklusi</a> membahas pertimbangan kedua jalur, sementara gambaran biaya terapi pendukung ada di artikel <a href="/artikel/berapa-biaya-terapi-anak-berkebutuhan-khusus">biaya terapi anak berkebutuhan khusus</a>.</p>

<h2 id="bantuan">Sumber bantuan biaya yang bisa ditanyakan</h2>
<p>Bantuan pemerintah seperti Program Indonesia Pintar ditujukan untuk biaya personal pendidikan murid dari keluarga miskin atau rentan miskin, dan penyalurannya melalui data sekolah. Program ini tidak dirancang khusus untuk membayar pendamping, tetapi dapat meringankan pengeluaran pendidikan lain. Keluarga dapat menanyakan statusnya kepada operator sekolah.</p>
<p>Lembaga zakat dan program donasi pendidikan juga dapat menjadi sumber bantuan bagi keluarga yang membutuhkan. Setiap lembaga punya syarat dan jenis biaya yang dapat dibantu. YUKA mengelola program <a href="/zakat-pendidikan-abk">zakat pendidikan ABK</a> dan <a href="/donasi-pendidikan-abk">donasi pendidikan ABK</a> yang dapat ditanyakan langsung melalui halaman <a href="/kontak">kontak</a>.</p>
<p>Terakhir, jangan ragu membicarakan kemampuan biaya secara terbuka dengan sekolah dan penyedia. Rencana pendampingan yang realistis dan berkelanjutan lebih baik bagi anak daripada rencana ideal yang berhenti di tengah jalan karena biaya. Strategi pendampingan di kelas untuk kebutuhan tertentu dapat dibaca di artikel <a href="/artikel/strategi-mengajar-anak-adhd-di-sekolah">strategi mengajar anak ADHD di sekolah</a>.</p>

<h2 id="faq">Pertanyaan Umum tentang Biaya Shadow Teacher</h2>
${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('\n')}
`;

const meta = 'Biaya shadow teacher per bulan tidak punya tarif resmi. Pelajari komponen biaya, rumus hitung, isi kontrak, dan cara menekan biaya untuk anak ABK.';
const data = {
  slug,
  titleTag: 'Biaya Shadow Teacher per Bulan: Komponen dan Cara Hitung | YUKA',
  metaDesc: meta,
  keywords: 'biaya shadow teacher per bulan, tarif shadow teacher, pendamping anak abk, akomodasi yang layak, guru pendamping',
  ogTitle: 'Biaya Shadow Teacher per Bulan: Komponen dan Cara Hitung',
  ogDesc: meta,
  h1: 'Biaya Shadow Teacher per Bulan: Komponen, Cara Hitung, dan Cara Menekannya',
  crumb: 'Biaya Shadow Teacher',
  category: 'Pendidikan',
  datePublished: '2026-10-20T08:00:00+07:00',
  dateModified: '2026-10-20T08:00:00+07:00',
  dateDisplay: '20 Oktober 2026',
  readTime: '14 menit baca',
  image: { file: heroFile, w: 1200, h: 900, alt: 'Pendamping berkerudung merah muda menari bersama seorang anak berkostum tradisional di halaman rumput dekat candi batu', caption: 'Dokumentasi kegiatan YUKA: seorang pendamping menari bersama peserta saat kunjungan budaya. Foto suasana pendampingan, bukan ilustrasi tarif atau layanan berbayar.', credit },
  bodyHtml,
  faq,
  related: [
    { href: '/artikel/shadow-teacher-adalah', title: 'Shadow Teacher Adalah: Tugas dan Syaratnya', desc: 'Memahami peran pendamping di kelas inklusi.' },
    { href: '/artikel/cara-memilih-shadow-teacher', title: 'Cara Memilih Shadow Teacher', desc: 'Panduan orang tua sebelum merekrut pendamping.' },
    { href: '/artikel/gpk-adalah', title: 'GPK Adalah: Guru Pembimbing Khusus', desc: 'Peran guru pembimbing khusus di sekolah inklusi.' },
  ],
  tags: ['ShadowTeacher', 'BiayaPendidikan', 'PendidikanInklusi'],
  sources: [
    { url: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023', label: 'Permendikbudristek No. 48 Tahun 2023 tentang Akomodasi yang Layak (Pasal 12, Pasal 20, dan lampiran)' },
    { url: 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020', label: 'PP No. 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
    { url: 'https://puslapdik.kemendikdasmen.go.id/faq-program-indonesia-pintar/', label: 'Puslapdik Kemendikdasmen: FAQ Program Indonesia Pintar' },
    { url: 'https://repositori.kemendikdasmen.go.id/24970/1/Panduan_Inklusif.pdf', label: 'Kemendikdasmen: Panduan Pelaksanaan Pendidikan Inklusif' },
  ],
  sourcesCheckedNote: 'Regulasi dibaca dari JDIH BPK pada 19 Oktober 2026. Artikel sengaja tidak mencantumkan angka tarif karena tidak ada tarif resmi yang dapat diverifikasi.',
};

if (require.main === module) {
  for (const [file, content] of Object.entries(diagrams)) fs.writeFileSync(path.join(ROOT, file), content);
  const size = imageSize(path.join(ROOT, heroFile));
  if (size.w !== 1200 || size.h !== 900) throw new Error('Hero wajib 1200x900.');
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), renderArticlePage(data));
  console.log(`Generated artikel/${slug}.html`);
}
module.exports = { data, faq, bodyHtml };

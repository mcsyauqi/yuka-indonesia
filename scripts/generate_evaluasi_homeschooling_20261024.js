'use strict';
// Generator artikel "evaluasi kemajuan homeschooling" (cycle #80 bagian B, antrean 2026-10-24).
// Keyword dari Google Sheet Keyword Data YUKA (tab "Keyword Data", baris ditambahkan 2026-10-19 dari
// sub_query baris "homeschooling"). Fakta dibaca dari PDF resmi: Permendikbud 129/2014 (Pasal 3, 4, 8, 9),
// Permendikdasmen 9/2025 tentang TKA (Pasal 8, 9, 11), Permendikbudristek 48/2023 (Pasal 4, Lampiran II).
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');
const ROOT = path.resolve(__dirname, '..');
const slug = 'evaluasi-kemajuan-homeschooling';
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const heroFile = 'Dokumentasi/yuka-evaluasi-homeschooling-hero-20261024.webp';
const IMG = 'assets/images/artikel';

const diagrams = {
  [`${IMG}/${slug}-alat.svg`]: svg.cards('Tiga alat utama evaluasi homeschooling', 'Bukti kemajuan yang mudah dikumpulkan di rumah', [
    { h: 'Portofolio', color: '#2B3A67', items: ['Hasil karya bertanggal', 'Foto dan video kegiatan', 'Dipilih bersama anak', 'Menunjukkan perubahan dari waktu ke waktu'] },
    { h: 'Catatan pengamatan', color: '#00838F', items: ['Kejadian singkat yang penting', 'Ditulis pada hari yang sama', 'Fakta dulu, tafsiran kemudian', 'Berguna untuk perilaku dan sosial'] },
    { h: 'Rubrik dan daftar cek', color: '#7A5A06', items: ['Kriteria ditulis sebelum menilai', 'Level dari mulai sampai mandiri', 'Dipakai berulang dengan kriteria sama', 'Mudah dipahami anak'] },
  ]),
  [`${IMG}/${slug}-jadwal.svg`]: svg.grid('Ritme evaluasi yang realistis', 'Contoh pembagian waktu evaluasi untuk keluarga homeschooling', ['Kapan', 'Apa yang dilakukan', 'Hasilnya'], [
    ['Harian', 'Catat satu sampai tiga hal penting hari itu', 'Jurnal singkat'],
    ['Mingguan', 'Pilih karya terbaik, tinjau target minggu ini', 'Isi portofolio bertambah'],
    ['Bulanan', 'Nilai dengan rubrik, bicarakan dengan anak', 'Target bulan depan'],
    ['Semester', 'Rangkum kemajuan tiap mata pelajaran', 'Laporan deskriptif'],
    ['Akhir jenjang', 'Siapkan bukti untuk lembaga dan tes', 'Berkas penyetaraan'],
  ], [220, 520, 364]),
  [`${IMG}/${slug}-siklus.svg`]: svg.flow('Siklus evaluasi kemajuan belajar di rumah', 'Evaluasi dipakai untuk memperbaiki rencana, bukan hanya memberi nilai', [
    { h: 'Tetapkan target', d: 'Tulis target yang bisa diamati untuk satu periode belajar.' },
    { h: 'Kumpulkan bukti', d: 'Simpan karya, catatan, dan rekaman secara rutin.' },
    { h: 'Nilai dengan kriteria', d: 'Bandingkan bukti dengan rubrik yang sama setiap kali.' },
    { h: 'Refleksi bersama', d: 'Ajak anak menceritakan apa yang mudah dan sulit.' },
    { h: 'Sesuaikan rencana', d: 'Ubah cara, materi, atau waktu sesuai temuan.' },
  ]),
};

const fig = (file, alt, caption, kredit) => {
  const { w, h } = imageSize(path.join(ROOT, file));
  return `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${kredit}</span></figcaption></figure>`;
};
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;

const faq = [
  { q: 'Siapa yang mengevaluasi kemajuan anak homeschooling?', a: 'Pasal 8 ayat (3) Permendikbud 129/2014 menyebut penilaian hasil belajar sekolahrumah dilakukan oleh pendidik, oleh satuan pendidikan nonformal atau formal, dan/atau oleh pemerintah. Di rumah, pendidik biasanya orang tua atau tutor. Lembaga seperti PKBM menilai pencapaian standar kompetensi lulusan, sedangkan pemerintah menilai melalui tes akademik nasional.' },
  { q: 'Seberapa sering evaluasi homeschooling sebaiknya dilakukan?', a: 'Aturan meminta penilaian oleh pendidik dilakukan secara berkesinambungan, tanpa menetapkan jadwal pasti. Dalam praktik, banyak keluarga mencatat singkat setiap hari, meninjau portofolio setiap minggu, menilai dengan rubrik setiap bulan, dan menyusun laporan deskriptif setiap semester. Pilih ritme yang bisa dijalankan dengan konsisten.' },
  { q: 'Apa isi portofolio homeschooling yang baik?', a: 'Portofolio yang baik berisi karya bertanggal yang menunjukkan perubahan dari waktu ke waktu, bukan hanya karya terbaik. Masukkan contoh awal dan contoh terbaru, foto atau video kegiatan praktik, catatan singkat tentang konteks, dan komentar anak sendiri. Kelompokkan per mata pelajaran atau per target agar mudah ditinjau.' },
  { q: 'Apakah anak homeschooling perlu ujian?', a: 'Untuk pengakuan hasil belajar, ya. Permendikdasmen 9/2025 menyebut murid sekolahrumah sebagai peserta TKA dari jalur pendidikan informal. Peserta yang mengikuti TKA dan memenuhi kategori hasil berhak memperoleh sertifikat hasil TKA dan dinyatakan lulus dari satuan pendidikan. Peserta wajib terdaftar di basis data kementerian.' },
  { q: 'Bagaimana evaluasi untuk anak berkebutuhan khusus yang homeschooling?', a: 'Gunakan target individual yang disusun dari hasil asesmen, lalu ukur kemajuan terhadap target itu, bukan terhadap anak lain. Catat juga tingkat bantuan yang dibutuhkan anak. Bila anak terdaftar di PKBM, Lampiran II Permendikbudristek 48/2023 memuat contoh akomodasi seperti fleksibilitas waktu, bentuk evaluasi, dan laporan capaian deskriptif.' },
  { q: 'Apa tanda rencana homeschooling perlu diubah?', a: 'Tandanya antara lain target yang sama tidak tercapai selama beberapa bulan, anak makin sering menolak belajar, atau bukti kemajuan hanya ada di satu bidang. Tanda seperti ini bukan kegagalan, melainkan sinyal untuk mengubah cara, materi, atau waktu belajar. Diskusikan dengan tutor, lembaga, atau profesional yang menangani anak.' },
  { q: 'Apakah nilai angka wajib dalam evaluasi homeschooling?', a: 'Untuk catatan di rumah, tidak ada kewajiban memakai angka. Laporan deskriptif yang menjelaskan apa yang sudah bisa dilakukan anak justru lebih berguna untuk merencanakan langkah berikutnya. Namun bila anak terdaftar di PKBM atau akan mengikuti tes, ikuti format laporan dan penilaian yang diminta lembaga tersebut.' },
];

const sections = [
  ['mengapa', 'Mengapa evaluasi kemajuan penting'],
  ['aturan', 'Siapa menilai apa menurut aturan'],
  ['alat', 'Alat evaluasi yang bisa dipakai di rumah'],
  ['rubrik', 'Membuat rubrik sederhana'],
  ['ritme', 'Ritme evaluasi harian sampai semester'],
  ['anak', 'Melibatkan anak dalam evaluasi'],
  ['abk', 'Evaluasi untuk anak berkebutuhan khusus'],
  ['tindak', 'Menindaklanjuti hasil evaluasi'],
  ['faq', 'Pertanyaan Umum tentang Evaluasi Homeschooling'],
];

const bodyHtml = `
<div class="jawaban-singkat"><p><strong>Evaluasi kemajuan homeschooling</strong> adalah kegiatan rutin mengumpulkan bukti belajar anak, menilainya dengan kriteria yang jelas, lalu memakai hasilnya untuk memperbaiki rencana belajar. Pasal 8 Permendikbud 129/2014 meminta penilaian oleh pendidik dilakukan berkesinambungan untuk memantau proses, kemajuan, dan perbaikan hasil belajar. Alat yang paling praktis adalah portofolio, catatan pengamatan, dan rubrik sederhana.</p></div>
<p>Salah satu pertanyaan yang paling sering muncul dari keluarga homeschooling adalah bagaimana tahu anak benar-benar maju. Tanpa rapor dari sekolah, orang tua bisa merasa ragu: apakah anak tertinggal, atau justru sudah siap untuk materi berikutnya. Evaluasi yang terencana menjawab keraguan itu dengan bukti, bukan perasaan. Artikel ini membahas cara menyusunnya secara sederhana dan berkelanjutan.</p>
<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>

<h2 id="mengapa">Mengapa evaluasi kemajuan penting</h2>
<p>Homeschooling memberi keluarga keleluasaan menentukan cara dan kecepatan belajar. Pasal 9 Permendikbud 129/2014 bahkan menyebut pendidikan diselenggarakan dengan sistem terbuka, yaitu fleksibilitas pilihan dan waktu penyelesaian program. Keleluasaan ini hanya bermanfaat bila keluarga tahu di mana posisi anak sekarang. Tanpa evaluasi, fleksibilitas mudah berubah menjadi kegiatan yang berjalan tanpa arah.</p>
<p>Evaluasi juga melindungi anak dari dua risiko yang berlawanan. Risiko pertama adalah target terlalu rendah, sehingga anak bosan dan potensinya tidak tergali. Risiko kedua adalah target terlalu tinggi, sehingga anak terus merasa gagal. Bukti kemajuan yang dikumpulkan rutin membantu orang tua menemukan titik tengah yang menantang tetapi masih bisa dicapai.</p>
<p>Alasan ketiga bersifat administratif. Hasil sekolahrumah diakui setara dengan pendidikan formal dan nonformal setelah anak lulus ujian sesuai standar nasional, seperti diatur Pasal 4 Permendikbud 129/2014. Catatan kemajuan yang rapi memudahkan anak saat mendaftar ke lembaga, mengikuti tes, atau pindah ke sekolah formal. Pengertian dasar homeschooling dibahas di artikel <a href="/artikel/homeschooling-adalah">homeschooling adalah</a> dan <a href="/artikel/apa-itu-homeschooling">apa itu homeschooling</a>.</p>

<h2 id="aturan">Siapa menilai apa menurut aturan</h2>
<p>Pasal 8 ayat (3) <a href="https://peraturan.go.id/id/permendikbud-no-129-tahun-2014" target="_blank" rel="noopener">Permendikbud Nomor 129 Tahun 2014 tentang Sekolahrumah</a> membagi penilaian ke tiga pihak. Pertama, pendidik, yang di rumah biasanya orang tua atau tutor. Kedua, satuan pendidikan nonformal atau formal, misalnya PKBM tempat anak terdaftar. Ketiga, pemerintah. Ketiganya punya tujuan berbeda, sehingga alat dan waktunya juga berbeda.</p>
<p>Penilaian oleh pendidik, menurut ayat (4), dilakukan secara berkesinambungan untuk memantau proses, kemajuan, dan perbaikan hasil belajar. Inilah porsi terbesar evaluasi di rumah. Penilaian oleh satuan pendidikan, menurut ayat (5), bertujuan menilai pencapaian Standar Kompetensi Lulusan yang mencakup pengetahuan, sikap, dan keterampilan. Jadi, catatan orang tua sebaiknya juga memuat ketiga aspek itu.</p>
<p>Untuk penilaian oleh pemerintah, aturan yang berlaku sekarang adalah <a href="https://peraturan.bpk.go.id/Details/321171/permendikdasmen-no-9-tahun-2025" target="_blank" rel="noopener">Permendikdasmen Nomor 9 Tahun 2025 tentang Tes Kemampuan Akademik</a>. Murid sekolahrumah tercatat sebagai peserta dari jalur pendidikan informal dan wajib terdaftar di basis data kementerian. Hubungan antara kurikulum, penilaian, dan TKA dibahas lebih lengkap di artikel <a href="/artikel/kurikulum-homeschooling-standar-nasional">kurikulum homeschooling standar nasional</a>.</p>
<table><thead><tr><th>Pihak penilai</th><th>Tujuan</th><th>Contoh bentuk</th></tr></thead><tbody>
<tr><td>Pendidik (orang tua atau tutor)</td><td>Memantau proses, kemajuan, dan perbaikan hasil belajar</td><td>Portofolio, catatan pengamatan, rubrik, kuis singkat</td></tr>
<tr><td>Satuan pendidikan (PKBM atau sekolah)</td><td>Menilai pencapaian Standar Kompetensi Lulusan</td><td>Tugas tutorial, laporan hasil belajar, penilaian akhir</td></tr>
<tr><td>Pemerintah</td><td>Mengukur kemampuan akademik secara nasional</td><td>Tes Kemampuan Akademik (TKA)</td></tr>
</tbody></table>
<p>Sumber tabel: Pasal 8 Permendikbud 129/2014 dan Permendikdasmen 9/2025. Kolom contoh bentuk adalah praktik umum, bukan daftar resmi. Tanyakan kepada lembaga tempat anak terdaftar format laporan apa yang mereka minta.</p>

<h2 id="alat">Alat evaluasi yang bisa dipakai di rumah</h2>
<p>Evaluasi di rumah tidak harus berupa ujian tertulis. Ada beberapa alat yang lebih cocok dengan pola belajar keluarga. Yang pertama adalah portofolio, yaitu kumpulan karya bertanggal yang menunjukkan perubahan dari waktu ke waktu. Simpan contoh awal dan contoh terbaru dari kemampuan yang sama, misalnya tulisan tangan bulan Juli dan bulan Oktober, agar kemajuannya terlihat jelas.</p>
<p>Alat kedua adalah catatan pengamatan. Tulis kejadian singkat yang penting pada hari yang sama, misalnya anak berhasil menjelaskan cara menghitung kembalian saat berbelanja. Tulis faktanya dulu, baru tafsirannya. Catatan seperti ini sangat berguna untuk menilai sikap, komunikasi, dan kemandirian yang sulit diukur dengan soal tertulis.</p>
<p>Alat ketiga adalah rubrik dan daftar cek, yaitu kriteria yang ditulis sebelum menilai. Alat keempat adalah kuis atau tugas singkat untuk mengecek pemahaman konsep tertentu. Gabungan keempatnya memberi gambaran yang lebih utuh dibanding satu jenis penilaian saja.</p>
<p>Untuk kemampuan praktik seperti membaca nyaring, berbicara di depan keluarga, atau memasak sederhana, rekaman video pendek sering lebih jujur daripada catatan. Rekam kegiatan yang sama setiap satu atau dua bulan dengan durasi yang mirip. Saat diputar berurutan, perubahan kelancaran, rasa percaya diri, dan kemandirian anak akan terlihat jelas, baik oleh orang tua maupun oleh anak sendiri.</p>
<p>Simpan semua bukti di satu tempat yang mudah ditemukan, misalnya map fisik per bidang atau folder digital bertanggal. Beri nama berkas dengan pola yang sama, seperti tanggal lalu nama kegiatan. Kebiasaan kecil ini menghemat banyak waktu saat menyusun laporan semester atau saat lembaga meminta contoh hasil belajar.</p>
${diag(`${IMG}/${slug}-alat.svg`, 'Diagram tiga kartu alat evaluasi homeschooling: portofolio, catatan pengamatan, serta rubrik dan daftar cek', 'Tiga alat evaluasi yang paling mudah dijalankan keluarga homeschooling, dilengkapi kuis singkat bila perlu.')}

<h2 id="rubrik">Membuat rubrik sederhana</h2>
<p>Rubrik membuat penilaian lebih adil dan konsisten, karena kriteria yang sama dipakai setiap kali. Rubrik sederhana cukup berisi dua sampai empat kriteria dan tiga sampai empat level. Level bisa ditulis dengan kata yang mudah dipahami anak, misalnya mulai, berkembang, cakap, dan mandiri. Hindari level yang hanya berupa angka tanpa penjelasan.</p>
<ol>
<li>Pilih satu kemampuan yang ingin dinilai, misalnya menulis paragraf pendek.</li>
<li>Tentukan dua sampai empat kriteria, misalnya isi, urutan, dan ejaan.</li>
<li>Tulis ciri setiap level untuk setiap kriteria dengan kalimat yang bisa diamati.</li>
<li>Uji rubrik pada satu karya anak, lalu perbaiki kalimat yang membingungkan.</li>
<li>Pakai rubrik yang sama beberapa kali agar perkembangan terlihat.</li>
<li>Simpan rubrik yang sudah diisi di portofolio, lengkap dengan tanggal.</li>
</ol>
<p>Contoh rubrik menulis paragraf: pada kriteria urutan, level mulai berarti kalimat belum runtut, level berkembang berarti urutan mulai jelas dengan bantuan, level cakap berarti urutan jelas tanpa bantuan, dan level mandiri berarti anak bisa memperbaiki urutan sendiri. Contoh seperti ini bisa disesuaikan untuk matematika, sains, atau keterampilan hidup.</p>
${fig(`${IMG}/commons-belajar-bersama-ayah-papua.webp`, 'Seorang anak berseragam SD membaca buku di samping ayahnya yang duduk di dekat api unggun di tepi hutan', 'Seorang anak di Papua mengerjakan pekerjaan rumah dibantu ayahnya. Pendampingan orang tua seperti ini juga menjadi kesempatan mengamati cara anak berpikir, bukan hanya hasil akhirnya.', 'Foto: <a href="https://commons.wikimedia.org/wiki/File:Belajar_Bersama_Ayah.jpg" target="_blank" rel="nofollow noopener">Ganjarmustika1904</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="nofollow noopener">CC BY-SA 4.0</a>')}

<h2 id="ritme">Ritme evaluasi harian sampai semester</h2>
<p>Aturan tidak menetapkan jadwal pasti untuk penilaian oleh pendidik, hanya meminta penilaian berkesinambungan. Karena itu, keluarga perlu membuat ritme sendiri yang realistis. Ritme yang terlalu padat biasanya berhenti di tengah jalan, sedangkan ritme yang terlalu jarang membuat masalah terlambat terlihat. Kuncinya adalah konsisten, bukan banyak.</p>
<p>Contoh ritme yang banyak dipakai: catatan singkat setiap hari, peninjauan portofolio setiap minggu, penilaian dengan rubrik setiap bulan, dan laporan deskriptif setiap semester. Menjelang akhir jenjang, tambahkan persiapan berkas untuk lembaga dan tes. Jadwal ini bisa digeser sesuai kesibukan keluarga, asalkan setiap lapisnya tetap ada.</p>
<p>Laporan semester tidak perlu panjang. Untuk setiap mata pelajaran atau bidang, tulis apa yang sudah bisa dilakukan anak, contoh buktinya, apa yang masih sulit, dan rencana berikutnya. Format seperti ini juga memudahkan saat keluarga berdiskusi dengan tutor atau lembaga. Rincian kebutuhan berkas pendaftaran ada di artikel <a href="/artikel/syarat-izin-homeschooling">syarat izin homeschooling</a>.</p>
${diag(`${IMG}/${slug}-jadwal.svg`, 'Tabel visual ritme evaluasi homeschooling dari harian, mingguan, bulanan, semester, sampai akhir jenjang beserta hasilnya', 'Contoh ritme evaluasi yang realistis. Sesuaikan dengan kesibukan keluarga, asalkan setiap lapis tetap berjalan.')}

<h2 id="anak">Melibatkan anak dalam evaluasi</h2>
<p>Evaluasi yang baik tidak hanya dilakukan terhadap anak, tetapi juga bersama anak. Anak yang diajak menilai karyanya sendiri belajar mengenali kekuatan dan kesulitannya. Kemampuan ini penting untuk belajar mandiri, sejalan dengan Pasal 3 Permendikbud 129/2014 yang menyebut sekolahrumah dilakukan dengan pembelajaran mandiri.</p>
<p>Caranya sederhana. Setelah satu tugas atau proyek selesai, ajukan tiga pertanyaan: bagian mana yang paling kamu sukai, bagian mana yang paling sulit, dan apa yang ingin kamu coba lain kali. Tulis jawabannya di portofolio. Untuk anak yang lebih besar, ajak mereka mengisi rubrik sendiri lalu bandingkan dengan penilaian orang tua.</p>
<p>Perbedaan penilaian antara anak dan orang tua bukan masalah, justru bahan diskusi yang berharga. Jaga suasananya tetap hangat. Tujuan evaluasi adalah membantu anak tumbuh, bukan membuatnya takut dinilai. Perbandingan suasana belajar di rumah dan di sekolah dibahas di artikel <a href="/artikel/perbedaan-homeschooling-dan-sekolah-formal-untuk-abk">perbedaan homeschooling dan sekolah formal untuk ABK</a>.</p>

<h2 id="abk">Evaluasi untuk anak berkebutuhan khusus</h2>
<p>Bagi anak berkebutuhan khusus, evaluasi sebaiknya berangkat dari target individual yang disusun berdasarkan asesmen. Ukur kemajuan anak terhadap targetnya sendiri, bukan terhadap anak seusianya. Catat juga seberapa banyak bantuan yang dibutuhkan, karena berkurangnya bantuan adalah tanda kemajuan yang nyata. Format rencana individual dijelaskan di artikel <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>.</p>
<p>Bila anak terdaftar di PKBM, Pasal 4 Permendikbudristek 48/2023 menyebut program Paket A, B, dan C termasuk penerima manfaat akomodasi yang layak. Lampiran II peraturan itu memuat contoh akomodasi, seperti fleksibilitas bentuk dan waktu evaluasi serta laporan capaian dalam bentuk deskriptif dan angka bagi peserta didik dengan hambatan intelektual. Diskusikan akomodasi ini dengan lembaga sejak awal.</p>
<p>Untuk tes pemerintah, ada ketentuan khusus. Pasal 8 ayat (7) Permendikdasmen 9/2025 mengecualikan murid berkebutuhan khusus penyandang disabilitas dengan hambatan intelektual dari kepesertaan TKA. Bagi kondisi lain, tanyakan akomodasi tes kepada lembaga atau dinas pendidikan. Panduan lebih luas tersedia di artikel <a href="/artikel/homeschooling-anak-berkebutuhan-khusus">homeschooling untuk ABK</a>, <a href="/artikel/homeschooling-untuk-anak-autis-kurikulum">homeschooling untuk anak autis</a>, dan <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik anak berkebutuhan khusus</a>.</p>
${diag(`${IMG}/${slug}-siklus.svg`, 'Diagram lima langkah siklus evaluasi: tetapkan target, kumpulkan bukti, nilai dengan kriteria, refleksi bersama, dan sesuaikan rencana', 'Siklus evaluasi kemajuan belajar di rumah. Hasil evaluasi selalu kembali menjadi perbaikan rencana.')}

<h2 id="tindak">Menindaklanjuti hasil evaluasi</h2>
<p>Evaluasi baru bermanfaat bila hasilnya dipakai. Setelah setiap peninjauan bulanan atau semester, tentukan satu sampai tiga perubahan yang paling penting. Perubahan itu bisa berupa cara mengajar, misalnya memakai benda nyata untuk konsep matematika, materi yang lebih sesuai, atau pembagian waktu yang berbeda. Hindari mengubah terlalu banyak hal sekaligus agar dampaknya bisa dilihat.</p>
<p>Waspadai beberapa tanda bahwa rencana perlu ditinjau lebih serius: target yang sama tidak tercapai selama beberapa bulan, anak makin sering menolak belajar, atau bukti kemajuan hanya muncul di satu bidang. Pada titik ini, diskusi dengan tutor, lembaga, atau profesional yang menangani anak bisa membantu. Bila keluarga menimbang kembali ke sekolah, baca artikel <a href="/artikel/homeschooling-vs-sekolah-inklusi">homeschooling vs sekolah inklusi</a>.</p>
<p>Catatan evaluasi yang rapi juga membantu saat anak perlu bukti hasil belajar, misalnya untuk penyetaraan. Penjelasan tentang ijazah ada di artikel <a href="/artikel/apakah-homeschooling-dapat-ijazah">apakah homeschooling dapat ijazah</a>, sedangkan pertimbangan biaya dibahas di <a href="/artikel/biaya-homeschooling">biaya homeschooling</a>. Keluarga yang ingin berdiskusi tentang pendidikan anak berkebutuhan khusus dapat menghubungi tim YUKA melalui halaman <a href="/kontak">kontak</a>.</p>

<h2 id="faq">Pertanyaan Umum tentang Evaluasi Homeschooling</h2>
${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('\n')}
`;

const meta = 'Evaluasi kemajuan homeschooling: siapa menilai menurut Permendikbud 129/2014, alat portofolio dan rubrik, ritme evaluasi, dan penyesuaian untuk ABK.';
const data = {
  slug,
  titleTag: 'Evaluasi Kemajuan Homeschooling: Alat dan Ritmenya | YUKA',
  metaDesc: meta,
  keywords: 'evaluasi kemajuan homeschooling, penilaian homeschooling, portofolio homeschooling, rubrik penilaian anak, evaluasi belajar di rumah',
  ogTitle: 'Evaluasi Kemajuan Homeschooling: Alat dan Ritmenya',
  ogDesc: meta,
  h1: 'Evaluasi Kemajuan Homeschooling: Alat, Ritme, dan Cara Menindaklanjutinya',
  crumb: 'Evaluasi Homeschooling',
  category: 'Pendidikan',
  datePublished: '2026-10-24T08:00:00+07:00',
  dateModified: '2026-10-24T08:00:00+07:00',
  dateDisplay: '24 Oktober 2026',
  readTime: '14 menit baca',
  image: { file: heroFile, w: 1200, h: 900, alt: 'Seorang anak berjaket hitam beristirahat dengan kepala bersandar pada tas punggung di dalam bus yang sedang melaju', caption: 'Dokumentasi perjalanan karyawisata YUKA. Catatan tentang energi dan kelelahan anak selama kegiatan juga bagian dari evaluasi yang jujur.', credit },
  bodyHtml,
  faq,
  related: [
    { href: '/artikel/kurikulum-homeschooling-standar-nasional', title: 'Kurikulum Homeschooling Standar Nasional', desc: 'Aturan, struktur kurikulum, dan TKA.' },
    { href: '/artikel/syarat-izin-homeschooling', title: 'Syarat Izin Homeschooling', desc: 'Dasar hukum dan pendaftaran sekolahrumah.' },
    { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Menyusun target belajar yang terukur.' },
  ],
  tags: ['Homeschooling', 'EvaluasiBelajar', 'Portofolio'],
  sources: [
    { url: 'https://peraturan.go.id/id/permendikbud-no-129-tahun-2014', label: 'Permendikbud No. 129 Tahun 2014 tentang Sekolahrumah (Pasal 3, 4, 8, 9)' },
    { url: 'https://peraturan.bpk.go.id/Details/321171/permendikdasmen-no-9-tahun-2025', label: 'Permendikdasmen No. 9 Tahun 2025 tentang Tes Kemampuan Akademik (Pasal 8, 9, 11)' },
    { url: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023', label: 'Permendikbudristek No. 48 Tahun 2023 tentang Akomodasi yang Layak (Pasal 4, Lampiran II)' },
  ],
  sourcesCheckedNote: 'Seluruh pasal dibaca dari salinan PDF resmi (peraturan.go.id dan JDIH BPK) pada 19 Oktober 2026.',
};

if (require.main === module) {
  for (const [file, content] of Object.entries(diagrams)) fs.writeFileSync(path.join(ROOT, file), content);
  const size = imageSize(path.join(ROOT, heroFile));
  if (size.w !== 1200 || size.h !== 900) throw new Error('Hero wajib 1200x900.');
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), renderArticlePage(data));
  console.log(`Generated artikel/${slug}.html`);
}
module.exports = { data, faq, bodyHtml };

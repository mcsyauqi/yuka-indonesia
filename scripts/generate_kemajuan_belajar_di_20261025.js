'use strict';
// Generator artikel "mengukur kemajuan belajar anak disabilitas intelektual" (cycle #80 bagian B,
// antrean 2026-10-25). Keyword dari Google Sheet Keyword Data YUKA (tab "Keyword Data", baris ditambahkan
// 2026-10-19 dari sub_query "mengukur kemajuan belajar" baris "disabilitas intelektual").
// Fakta: Permendikbudristek 48/2023 (Pasal 11 ayat 4, Pasal 12, Lampiran II huruf B) dibaca dari PDF JDIH BPK;
// ranah perilaku adaptif (konseptual, sosial, praktis) dan contoh instrumen dari Wikipedia "Adaptive behavior";
// definisi umum dari Wikipedia "Intellectual disability". Teknik pencatatan ditulis kualitatif tanpa angka.
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');
const ROOT = path.resolve(__dirname, '..');
const slug = 'mengukur-kemajuan-belajar-anak-disabilitas-intelektual';
const credit = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const heroFile = 'Dokumentasi/yuka-kemajuan-belajar-di-hero-20261025.webp';
const IMG = 'assets/images/artikel';

const diagrams = {
  [`${IMG}/${slug}-ranah.svg`]: svg.cards('Tiga ranah kemampuan yang diukur', 'Pembagian umum perilaku adaptif, dilengkapi kemampuan akademik fungsional', [
    { h: 'Konseptual', color: '#2B3A67', items: ['Bahasa dan komunikasi', 'Membaca dan menulis fungsional', 'Konsep uang dan waktu', 'Mengikuti petunjuk'] },
    { h: 'Sosial', color: '#00838F', items: ['Berinteraksi dengan teman', 'Mengikuti aturan', 'Menjaga diri dari bujukan', 'Mengelola emosi'] },
    { h: 'Praktis', color: '#7A5A06', items: ['Merawat diri sehari-hari', 'Pekerjaan rumah tangga', 'Memakai transportasi', 'Keselamatan diri'] },
  ]),
  [`${IMG}/${slug}-bantuan.svg`]: svg.grid('Tingkat bantuan sebagai ukuran kemajuan', 'Makin sedikit bantuan yang dibutuhkan, makin mandiri anak', ['Tingkat', 'Bentuk bantuan', 'Contoh saat mengisi air'], [
    ['Fisik penuh', 'Tangan pendamping menuntun seluruh gerakan', 'Tangan anak dipandu menekan keran'],
    ['Fisik sebagian', 'Sentuhan ringan di siku atau pergelangan', 'Siku anak didorong pelan ke arah keran'],
    ['Contoh', 'Pendamping memperagakan lebih dulu', 'Pendamping menekan keran, anak meniru'],
    ['Lisan', 'Petunjuk dengan kata-kata', '"Tekan keran biru"'],
    ['Isyarat', 'Tunjukan atau gambar', 'Pendamping menunjuk keran'],
    ['Mandiri', 'Tanpa bantuan', 'Anak mengisi air sendiri sampai selesai'],
  ], [240, 450, 414]),
  [`${IMG}/${slug}-langkah.svg`]: svg.flow('Contoh analisis tugas: mengisi air ke wadah', 'Satu keterampilan dipecah menjadi langkah kecil yang bisa dicatat satu per satu', [
    { h: 'Ambil wadah', d: 'Ambil wadah bersih dari rak dan bawa ke dispenser.' },
    { h: 'Letakkan wadah', d: 'Letakkan wadah tepat di bawah keran.' },
    { h: 'Tekan keran', d: 'Tekan keran air dingin dan tahan.' },
    { h: 'Amati batas', d: 'Lepas keran saat air sampai garis batas.' },
    { h: 'Bawa wadah', d: 'Bawa wadah dengan dua tangan tanpa tumpah.' },
    { h: 'Rapikan', d: 'Lap tetesan air dan kembalikan lap ke tempatnya.' },
  ]),
};

const fig = (file, alt, caption, kredit) => {
  const { w, h } = imageSize(path.join(ROOT, file));
  return `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${kredit}</span></figcaption></figure>`;
};
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;

const faq = [
  { q: 'Bagaimana cara mengukur kemajuan belajar anak disabilitas intelektual?', a: 'Mulailah dari target individual yang ditulis dengan jelas, lalu catat secara rutin seberapa banyak langkah yang bisa dilakukan anak dan seberapa banyak bantuan yang ia butuhkan. Bandingkan anak dengan dirinya sendiri dari waktu ke waktu, bukan dengan teman sekelas. Laporkan hasilnya dalam bentuk deskriptif yang dilengkapi angka.' },
  { q: 'Apakah anak disabilitas intelektual dinilai dengan standar yang sama dengan teman sekelas?', a: 'Tidak harus. Pasal 11 ayat (4) Permendikbudristek 48/2023 menyebut penyediaan kurikulum bagi peserta didik dengan hambatan intelektual dilakukan dengan modifikasi terhadap standar kompetensi lulusan, standar isi, standar proses, dan standar penilaian. Jadi target dan cara menilainya dapat disesuaikan dengan kebutuhan anak berdasarkan asesmen.' },
  { q: 'Apa itu analisis tugas dalam mengukur kemajuan?', a: 'Analisis tugas adalah memecah satu keterampilan menjadi langkah kecil yang berurutan, misalnya mengisi air dipecah menjadi mengambil wadah, meletakkan wadah, menekan keran, dan seterusnya. Setiap langkah dicatat apakah dilakukan mandiri atau dengan bantuan. Dari situ terlihat langkah mana yang sudah dikuasai dan mana yang perlu dilatih.' },
  { q: 'Mengapa tingkat bantuan perlu dicatat?', a: 'Karena kemajuan anak sering terlihat dari berkurangnya bantuan, bukan dari nilai. Anak yang bulan lalu perlu dituntun tangannya lalu sekarang cukup diberi petunjuk lisan sudah maju banyak, walau hasil akhirnya tampak sama. Tanpa mencatat tingkat bantuan, kemajuan seperti ini mudah terlewat.' },
  { q: 'Seperti apa laporan kemajuan yang sesuai aturan?', a: 'Lampiran II Permendikbudristek 48/2023 menyebut ijazah, sertifikat profesi, dan/atau sertifikat kompetensi bagi peserta didik dengan hambatan intelektual menginformasikan capaian kemampuan dalam bentuk deskriptif dan angka. Sekolah juga dapat mengeluarkan surat keterangan yang menginformasikan ragam disabilitas dan capaian kemampuan anak.' },
  { q: 'Seberapa sering kemajuan perlu dicatat?', a: 'Untuk keterampilan yang sedang dilatih, catatan singkat setiap sesi latihan paling berguna. Lalu rangkum setiap minggu atau setiap bulan agar polanya terlihat. Peninjauan target secara menyeluruh bisa dilakukan setiap semester bersama guru, orang tua, dan profesional yang terlibat.' },
  { q: 'Kapan perlu evaluasi ulang oleh profesional?', a: 'Pertimbangkan evaluasi ulang bila kemajuan berhenti cukup lama walau cara mengajar sudah diubah, bila muncul kemunduran kemampuan yang sebelumnya sudah dikuasai, atau saat anak akan pindah jenjang. Evaluasi oleh psikolog atau tenaga profesional lain membantu memperbarui gambaran kemampuan dan kebutuhan anak.' },
];

const sections = [
  ['dasar', 'Mengapa ukurannya perlu berbeda'],
  ['ranah', 'Ranah kemampuan yang diukur'],
  ['target', 'Menulis target yang bisa diukur'],
  ['analisis', 'Analisis tugas: memecah keterampilan'],
  ['bantuan', 'Mencatat tingkat bantuan'],
  ['generalisasi', 'Generalisasi dan pemeliharaan'],
  ['laporan', 'Menyusun laporan kemajuan'],
  ['rumah', 'Peran orang tua di rumah'],
  ['faq', 'Pertanyaan Umum tentang Kemajuan Belajar Anak Disabilitas Intelektual'],
];

const bodyHtml = `
<div class="jawaban-singkat"><p><strong>Mengukur kemajuan belajar anak disabilitas intelektual</strong> paling tepat dilakukan dengan membandingkan anak dengan dirinya sendiri: target individual ditulis jelas, keterampilan dipecah menjadi langkah kecil, lalu dicatat berapa langkah yang dilakukan mandiri dan seberapa banyak bantuan yang masih dibutuhkan. Permendikbudristek 48/2023 mengizinkan modifikasi standar penilaian dan meminta capaian dilaporkan dalam bentuk deskriptif dan angka.</p></div>
<p>Orang tua dan guru anak dengan disabilitas intelektual sering merasa kemajuan anak tidak terlihat di rapor. Nilai ulangan bisa tetap rendah, padahal anak sudah bisa melakukan banyak hal baru di rumah dan di sekolah. Masalahnya sering bukan pada anak, melainkan pada alat ukur yang tidak cocok. Artikel ini menjelaskan cara mengukur kemajuan yang lebih adil dan berguna untuk merencanakan langkah berikutnya.</p>
<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>

<h2 id="dasar">Mengapa ukurannya perlu berbeda</h2>
<p>Disabilitas intelektual ditandai keterbatasan yang signifikan pada fungsi intelektual dan fungsi adaptif, yang muncul pada masa perkembangan. Fungsi adaptif adalah kemampuan menjalani kehidupan sehari-hari, seperti berkomunikasi, merawat diri, dan bergaul. Karena keterbatasannya mencakup keduanya, kemajuan anak juga perlu diukur pada keduanya, bukan hanya pada nilai akademik. Pengertian lengkapnya ada di artikel <a href="/artikel/disabilitas-intelektual">disabilitas intelektual</a>.</p>
<p>Aturan pendidikan di Indonesia sudah mengakui hal ini. Pasal 11 ayat (4) <a href="https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023" target="_blank" rel="noopener">Permendikbudristek Nomor 48 Tahun 2023</a> menyebut penyediaan kurikulum bagi peserta didik penyandang disabilitas yang mengalami hambatan intelektual dilakukan dengan modifikasi terhadap standar kompetensi lulusan, standar isi, standar proses, dan standar penilaian. Bandingkan dengan ayat (3), yang untuk disabilitas tanpa hambatan intelektual hanya memodifikasi standar proses.</p>
<p>Artinya, anak dengan hambatan intelektual boleh punya target dan cara penilaian yang berbeda dari teman sekelasnya, asalkan didasarkan pada asesmen. Pasal 12 peraturan yang sama menyebut bentuk akomodasi diberikan berdasarkan hasil asesmen fungsional. Hak pendidikan anak dalam kondisi ini dibahas lebih luas di artikel <a href="/artikel/hak-pendidikan-anak-disabilitas-intelektual">hak pendidikan anak disabilitas intelektual</a>.</p>

<h2 id="ranah">Ranah kemampuan yang diukur</h2>
<p>Perilaku adaptif umumnya dibagi ke tiga ranah. Ranah konseptual berkaitan dengan bahasa, membaca, menulis, serta konsep uang dan waktu. Ranah sosial berkaitan dengan berinteraksi, mengikuti aturan, dan menjaga diri dari bujukan orang lain. Ranah praktis berkaitan dengan merawat diri, pekerjaan sehari-hari, memakai transportasi, dan keselamatan. Pembagian ini membantu memastikan tidak ada bidang penting yang terlupa.</p>
<p>Profesional seperti psikolog memakai instrumen baku untuk mengukur perilaku adaptif, misalnya Vineland Adaptive Behavior Scales atau Adaptive Behavior Assessment System. Instrumen ini dipakai untuk asesmen menyeluruh dan tidak perlu diulang setiap bulan. Untuk memantau kemajuan sehari-hari, guru dan orang tua cukup memakai catatan sederhana yang dibahas di bagian berikutnya.</p>
<p>Lampiran II Permendikbudristek 48/2023 juga menyebut pembelajaran untuk peserta didik dengan hambatan intelektual diarahkan membangun keterampilan hidup sehari-hari, keterampilan domestik, keterampilan berinteraksi di masyarakat, dan keterampilan berinteraksi di tempat berkarya. Keempat bidang ini sejalan dengan ranah praktis dan sosial, sehingga layak masuk daftar target. Contoh pendekatannya ada di artikel <a href="/artikel/kurikulum-fungsional-untuk-anak-tunagrahita">kurikulum fungsional untuk anak tunagrahita</a>.</p>
${diag(`${IMG}/${slug}-ranah.svg`, 'Diagram tiga kartu ranah kemampuan: konseptual, sosial, dan praktis beserta contoh keterampilannya', 'Tiga ranah perilaku adaptif yang dipakai untuk memilih target belajar. Kemampuan akademik fungsional masuk ranah konseptual.')}

<h2 id="target">Menulis target yang bisa diukur</h2>
<p>Pengukuran yang baik dimulai dari target yang baik. Target yang samar, seperti anak menjadi lebih mandiri, sulit dinilai karena setiap orang bisa menafsirkannya berbeda. Target yang terukur menyebut perilaku yang bisa diamati, kondisi saat perilaku itu dilakukan, dan kriteria keberhasilannya. Target seperti ini biasanya ditulis dalam <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>.</p>
<table><thead><tr><th>Target samar</th><th>Target terukur</th><th>Yang dicatat</th></tr></thead><tbody>
<tr><td>Anak lebih mandiri di dapur</td><td>Anak mengisi air ke wadah dari dispenser tanpa tumpah, dengan petunjuk lisan paling banyak satu kali</td><td>Jumlah langkah mandiri dan jumlah petunjuk</td></tr>
<tr><td>Anak bisa berhitung uang</td><td>Anak memilih uang yang cukup untuk membeli satu barang di kantin sekolah</td><td>Berhasil atau belum, dan bentuk bantuan</td></tr>
<tr><td>Anak lebih sopan</td><td>Anak menyapa guru saat tiba di kelas tanpa diingatkan</td><td>Jumlah hari menyapa tanpa diingatkan per minggu</td></tr>
<tr><td>Anak bisa membaca</td><td>Anak membaca dan mengikuti sepuluh kata tanda di lingkungan sekolah</td><td>Jumlah kata yang dibaca benar</td></tr>
</tbody></table>
<p>Contoh di tabel adalah ilustrasi, bukan target baku. Sesuaikan dengan hasil asesmen anak dan rutinitas keluarga. Pilih sedikit target yang paling bermakna untuk kehidupan anak sehari-hari, lalu tambahkan target baru setelah target lama tercapai. Terlalu banyak target sekaligus membuat pencatatan berat dan fokus latihan terpecah.</p>
<p>Sebelum latihan dimulai, catat dulu kondisi awal anak pada setiap target. Amati anak melakukan keterampilan itu beberapa kali tanpa diajari secara khusus, lalu tulis langkah apa saja yang sudah bisa ia lakukan dan bantuan apa yang ia butuhkan. Catatan awal ini menjadi titik pembanding. Tanpa titik pembanding, sulit membuktikan apakah perubahan yang terlihat kemudian benar-benar kemajuan.</p>
<p>Libatkan anak sejauh kemampuannya. Anak bisa diajak memilih kegiatan yang ingin ia kuasai, misalnya membuat minuman sendiri atau membeli jajan di kantin. Target yang terasa penting bagi anak biasanya lebih mudah dilatih karena ia punya alasan sendiri untuk mencoba. Tunjukkan juga kemajuannya dengan cara yang ia pahami, seperti stiker pada lembar langkah.</p>

<h2 id="analisis">Analisis tugas: memecah keterampilan</h2>
<p>Banyak keterampilan sehari-hari terdiri atas beberapa langkah. Bila hanya dinilai berhasil atau gagal, kemajuan kecil di tengah prosesnya tidak terlihat. Analisis tugas memecah satu keterampilan menjadi langkah berurutan yang masing-masing bisa dicatat. Dengan cara ini, guru tahu persis langkah mana yang sudah dikuasai dan mana yang masih perlu latihan.</p>
<p>Ambil contoh mengisi air ke wadah dari dispenser. Keterampilan ini bisa dipecah menjadi enam langkah: mengambil wadah, meletakkannya di bawah keran, menekan keran, melepas keran saat air mencapai batas, membawa wadah tanpa tumpah, dan merapikan tetesan air. Setiap kali latihan, tandai langkah yang dilakukan mandiri. Hasilnya bisa ditulis sebagai jumlah langkah mandiri dari enam langkah.</p>
<p>Pencatatan seperti ini memberi angka yang jujur tanpa harus memberi nilai. Anak yang bulan lalu mandiri pada dua langkah lalu sekarang pada lima langkah jelas sudah maju, meskipun belum menyelesaikan seluruh tugas sendiri. Pendekatan memecah tugas juga banyak dipakai dalam <a href="/artikel/terapi-aba">terapi ABA</a> dan pelatihan keterampilan hidup seperti <a href="/artikel/laundry-skills-anak-disabilitas-intelektual">laundry skills</a>.</p>
${diag(`${IMG}/${slug}-langkah.svg`, 'Diagram enam langkah analisis tugas mengisi air ke wadah dari dispenser, dari mengambil wadah sampai merapikan', 'Contoh analisis tugas. Setiap langkah dicatat mandiri atau dengan bantuan, sehingga kemajuan kecil ikut terlihat.')}

<h2 id="bantuan">Mencatat tingkat bantuan</h2>
<p>Selain langkah mana yang dikuasai, catat juga seberapa banyak bantuan yang diberikan. Bantuan biasanya disusun dari yang paling banyak sampai yang paling sedikit: bantuan fisik penuh, bantuan fisik sebagian, contoh atau peragaan, petunjuk lisan, isyarat, lalu mandiri. Turunnya tingkat bantuan dari waktu ke waktu adalah salah satu tanda kemajuan yang paling bisa dipercaya.</p>
<p>Gunakan kode singkat agar pencatatan cepat, misalnya huruf awal setiap tingkat. Satu lembar catatan untuk satu keterampilan sudah cukup, dengan kolom tanggal di atas dan daftar langkah di samping. Dalam beberapa minggu, lembar ini akan menunjukkan pola yang jelas, misalnya langkah ketiga selalu butuh bantuan fisik. Temuan seperti ini langsung menunjukkan bagian yang perlu dilatih lebih khusus.</p>
<p>Ingat juga untuk mengurangi bantuan secara bertahap. Bantuan yang terus diberikan pada tingkat yang sama bisa membuat anak bergantung. Diskusikan dengan guru atau terapis kapan bantuan mulai dikurangi. Prinsip kemandirian yang lebih luas dibahas di artikel <a href="/artikel/bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh">cara mengajarkan kemandirian kepada anak berkebutuhan khusus</a>.</p>
${diag(`${IMG}/${slug}-bantuan.svg`, 'Tabel visual enam tingkat bantuan dari fisik penuh sampai mandiri, lengkap dengan contoh saat anak mengisi air', 'Tingkat bantuan dari yang paling banyak sampai mandiri. Contoh disesuaikan dengan latihan mengisi air.')}

<h2 id="generalisasi">Generalisasi dan pemeliharaan</h2>
<p>Keterampilan belum benar-benar dikuasai bila hanya muncul di satu tempat dan dengan satu orang. Generalisasi berarti anak bisa melakukan keterampilan yang sama di tempat berbeda, dengan orang berbeda, dan dengan alat yang sedikit berbeda. Misalnya, anak yang bisa mengisi air dari dispenser di sekolah juga bisa melakukannya di rumah atau dari teko.</p>
<p>Pemeliharaan berarti keterampilan tetap ada setelah latihan rutin dihentikan. Cara mengujinya sederhana: beberapa minggu setelah target tercapai, minta anak melakukan keterampilan itu lagi dan catat hasilnya dengan cara yang sama. Bila kemampuan menurun, lakukan latihan penyegaran singkat. Kedua uji ini membuat laporan kemajuan jauh lebih bermakna.</p>
${fig(`${IMG}/commons-anak-menyapu-halaman-boro.webp`, 'Dua remaja laki-laki menyapu halaman bersama memakai sapu lidi dan pengki di taman sebuah panti asuhan', 'Dua anak Panti Asuhan Putra Sancta Maria Boro menyapu halaman sebagai tugas harian. Pekerjaan rumah tangga seperti ini termasuk keterampilan praktis yang bisa dipecah menjadi langkah dan dicatat kemajuannya.', 'Foto: <a href="https://commons.wikimedia.org/wiki/File:Dua_Anak_Panti_Asuhan_Boro_Melaksanakan_Tugas_Harian_Menyapu_Halaman.jpg" target="_blank" rel="nofollow noopener">Krstion</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by/4.0" target="_blank" rel="nofollow noopener">CC BY 4.0</a>')}

<h2 id="laporan">Menyusun laporan kemajuan</h2>
<p>Lampiran II huruf B Permendikbudristek 48/2023 memuat bentuk akomodasi bagi peserta didik dengan hambatan intelektual yang langsung berkaitan dengan penilaian. Di antaranya fleksibilitas dalam evaluasi dan penilaian kompetensi, fleksibilitas waktu penyelesaian tugas dan evaluasi, serta fleksibilitas masa studi, semuanya sesuai rekomendasi hasil asesmen kebutuhan peserta didik.</p>
<p>Lampiran yang sama menyebut ijazah, sertifikat profesi, dan/atau sertifikat kompetensi bagi peserta didik dengan hambatan intelektual menginformasikan capaian kemampuan dalam bentuk deskriptif dan angka. Sekolah juga dapat mengeluarkan surat keterangan yang menginformasikan ragam disabilitas dan capaian kemampuan. Jadi, laporan yang berisi uraian kemampuan disertai data dari catatan harian sudah sejalan dengan arah aturan.</p>
<p>Laporan semester yang baik cukup memuat beberapa hal: target yang dilatih, kondisi awal, hasil terakhir dalam angka seperti jumlah langkah mandiri, uraian tingkat bantuan, catatan generalisasi, dan rencana berikutnya. Format ini juga mudah dipahami orang tua. Untuk asesmen awal yang menjadi titik tolak laporan, lihat artikel <a href="/artikel/asesmen-abk">asesmen ABK</a> dan <a href="/artikel/identifikasi-dini-disabilitas-intelektual">identifikasi dini disabilitas intelektual</a>.</p>

<h2 id="rumah">Peran orang tua di rumah</h2>
<p>Orang tua adalah pengamat paling dekat. Banyak keterampilan praktis, seperti berpakaian, makan, dan membantu pekerjaan rumah, justru paling sering muncul di rumah. Catatan sederhana dari rumah melengkapi catatan sekolah dan membantu menguji generalisasi. Sepakati dengan guru keterampilan mana yang dicatat bersama dan kode bantuan apa yang dipakai, agar data dari dua tempat bisa dibandingkan.</p>
<ol>
<li>Pilih satu atau dua keterampilan yang dilatih bersama sekolah.</li>
<li>Tempel daftar langkah di dekat tempat latihan, misalnya di dapur.</li>
<li>Catat langkah mandiri dan tingkat bantuan setelah setiap latihan.</li>
<li>Bawa catatan saat bertemu guru, setidaknya sebulan sekali.</li>
<li>Rayakan kemajuan kecil bersama anak dengan pujian yang spesifik.</li>
</ol>
<p>Bila kemajuan berhenti cukup lama walau cara mengajar sudah diubah, atau muncul kemunduran kemampuan, diskusikan dengan guru dan pertimbangkan evaluasi ulang oleh psikolog atau profesional lain. Penjelasan tentang tingkat keparahan ada di artikel <a href="/artikel/tunagrahita-ringan-sedang-berat-perbedaan">tunagrahita ringan, sedang, berat</a>, dan perbedaannya dengan kondisi lain di <a href="/artikel/perbedaan-tunagrahita-dan-autis">perbedaan tunagrahita dan autis</a>. Tim YUKA dapat dihubungi melalui halaman <a href="/kontak">kontak</a>.</p>

<h2 id="faq">Pertanyaan Umum tentang Kemajuan Belajar Anak Disabilitas Intelektual</h2>
${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('\n')}
`;

const meta = 'Cara mengukur kemajuan belajar anak disabilitas intelektual: target terukur, analisis tugas, tingkat bantuan, generalisasi, dan laporan deskriptif sesuai aturan.';
const data = {
  slug,
  titleTag: 'Mengukur Kemajuan Belajar Anak Disabilitas Intelektual | YUKA',
  metaDesc: meta,
  keywords: 'mengukur kemajuan belajar anak disabilitas intelektual, penilaian anak tunagrahita, analisis tugas, tingkat bantuan, perilaku adaptif',
  ogTitle: 'Mengukur Kemajuan Belajar Anak Disabilitas Intelektual',
  ogDesc: meta,
  h1: 'Mengukur Kemajuan Belajar Anak Disabilitas Intelektual: Target, Catatan, dan Laporan',
  crumb: 'Kemajuan Belajar Anak DI',
  category: 'Pendidikan',
  datePublished: '2026-10-25T08:00:00+07:00',
  dateModified: '2026-10-25T08:00:00+07:00',
  dateDisplay: '25 Oktober 2026',
  readTime: '15 menit baca',
  image: { file: heroFile, w: 1200, h: 900, alt: 'Seorang remaja berkaos merah muda mengisi air dari dispenser ke ember plastik di sebuah ruangan berdinding bata', caption: 'Dokumentasi kegiatan keterampilan hidup di YUKA: mengisi air dari dispenser. Keterampilan sehari-hari seperti ini dapat dipecah menjadi langkah dan dicatat kemajuannya.', credit },
  bodyHtml,
  faq,
  related: [
    { href: '/artikel/disabilitas-intelektual', title: 'Disabilitas Intelektual', desc: 'Pengertian, dukungan, dan hak anak.' },
    { href: '/artikel/kurikulum-fungsional-untuk-anak-tunagrahita', title: 'Kurikulum Fungsional untuk Anak Tunagrahita', desc: 'Panduan praktis keterampilan hidup.' },
    { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Menyusun target belajar yang terukur.' },
  ],
  tags: ['DisabilitasIntelektual', 'PenilaianABK', 'KeterampilanHidup'],
  sources: [
    { url: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023', label: 'Permendikbudristek No. 48 Tahun 2023 tentang Akomodasi yang Layak (Pasal 11, 12, Lampiran II huruf B)' },
    { url: 'https://en.wikipedia.org/wiki/Adaptive_behavior', label: 'Wikipedia: Adaptive behavior (ranah konseptual, sosial, praktis dan contoh instrumen)' },
    { url: 'https://en.wikipedia.org/wiki/Intellectual_disability', label: 'Wikipedia: Intellectual disability (fungsi intelektual, fungsi adaptif, masa perkembangan)' },
  ],
  sourcesCheckedNote: 'Pasal peraturan dibaca dari salinan PDF resmi JDIH BPK pada 19 Oktober 2026. Teknik pencatatan ditulis secara umum tanpa klaim angka.',
};

if (require.main === module) {
  for (const [file, content] of Object.entries(diagrams)) fs.writeFileSync(path.join(ROOT, file), content);
  const size = imageSize(path.join(ROOT, heroFile));
  if (size.w !== 1200 || size.h !== 900) throw new Error('Hero wajib 1200x900.');
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), renderArticlePage(data));
  console.log(`Generated artikel/${slug}.html`);
}
module.exports = { data, faq, bodyHtml };

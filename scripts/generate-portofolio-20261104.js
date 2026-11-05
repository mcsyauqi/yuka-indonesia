'use strict';
/*
 * Generator artikel 4 November 2026 (cycle #90 /cek-daily-artikel, tambal hari kosong 4 Nov).
 *
 * Keyword dari sheet Keyword Data proyek (1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc),
 * tab "Riset Keyword Batch 5" baris 141: "penilaian portofolio anak abk".
 * Belum ada artikel khusus portofolio (rubrik-penilaian dan asesmen-akademik membahas hal lain).
 *
 * Stok foto Dokumentasi yang belum dipakai habis sejak cycle #87, jadi hero dan foto isi memakai
 * foto domain publik USAID Indonesia dari Wikimedia Commons, kredit terlihat di figcaption.
 * Satu diagram SVG deterministik dari scripts/lib/diagram-svg.js (bukan gambar AI).
 *
 *   node scripts/generate-portofolio-20261104.js --prepare   # tulis SVG diagram
 *   node scripts/generate-portofolio-20261104.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-portofolio-20261104.js             # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const PD = (page) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">USAID Indonesia</a> / Wikimedia Commons, domain publik.`;
const foto = (file, alt, caption, page) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">${PD(page)}</span></figcaption></figure>`;
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const faqHtml = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;
const ext = (url, text) => `<a href="${url}" target="_blank" rel="nofollow noopener">${text}</a>`;

const diagrams = {};
const addDiagram = (file, markup) => { diagrams[file] = markup; };

const URL_PP13 = 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020';
const URL_P48 = 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023';
const URL_UDL = 'https://udlguidelines.cast.org/';
const URL_UNESCO = 'https://www.unesco.org/en/inclusion-education';
const URL_UNJ = 'https://journal.unj.ac.id/unj/index.php/ishel/article/view/57724';

const F_HERO = 'https://commons.wikimedia.org/wiki/File:Children_working_together_at_school_(4321352114).jpg';
const F_ART = 'https://commons.wikimedia.org/wiki/File:Art_made_out_of_recycling_and_used_materials_made_by_students_(8271065197).jpg';
const F_MODEL = 'https://commons.wikimedia.org/wiki/File:Model_airplanes_made_out_of_wood_and_plastic_by_students_(8272233758).jpg';
const F_PC = 'https://commons.wikimedia.org/wiki/File:Decentralized_Basic_Education_(4320619161).jpg';
const F_READ = 'https://commons.wikimedia.org/wiki/File:Decentralized_Basic_Education_in_Indonesia.jpg';

const sections = [
  ['arti', 'Apa itu penilaian portofolio'],
  ['kenapa', 'Kenapa portofolio cocok untuk anak ABK'],
  ['jenis', 'Jenis portofolio dan isinya'],
  ['langkah', 'Langkah menyusun portofolio'],
  ['menilai', 'Cara menilai isi portofolio'],
  ['contoh', 'Contoh isi portofolio untuk beberapa kebutuhan'],
  ['digital', 'Portofolio kertas atau digital'],
  ['keliru', 'Kesalahan yang sering terjadi'],
  ['orangtua', 'Peran orang tua'],
  ['faq', 'Pertanyaan umum'],
];

const faq = [
  { q: 'Apa yang dimaksud penilaian portofolio anak ABK?', a: 'Penilaian portofolio anak ABK adalah cara menilai perkembangan anak berkebutuhan khusus dari kumpulan hasil karya dan catatan yang dikumpulkan secara berkala. Guru melihat kemajuan anak dibanding dirinya sendiri terhadap tujuan belajarnya, bukan hanya nilai satu kali ujian.' },
  { q: 'Apa saja isi portofolio anak berkebutuhan khusus?', a: 'Isinya bisa berupa lembar kerja, gambar, foto kegiatan, rekaman suara atau video, catatan observasi guru, lembar perkembangan keterampilan hidup, dan catatan orang tua. Setiap isi sebaiknya diberi tanggal dan keterangan singkat tentang tingkat bantuan yang diterima anak.' },
  { q: 'Apakah portofolio menggantikan rapor?', a: 'Tidak harus. Portofolio melengkapi rapor dengan bukti nyata perkembangan anak. Rapor merangkum capaian pada satu periode, sedangkan portofolio menunjukkan bagaimana capaian itu terbentuk. Keduanya sebaiknya mengacu pada tujuan belajar yang sama.' },
  { q: 'Seberapa sering isi portofolio perlu diperbarui?', a: 'Tidak ada satu aturan yang berlaku untuk semua sekolah. Yang penting jadwalnya tetap dan realistis, misalnya beberapa contoh karya tiap bulan untuk setiap tujuan. Pengumpulan yang rutin lebih berguna daripada mengumpulkan banyak karya menjelang akhir semester.' },
  { q: 'Bagaimana menilai portofolio anak yang belum bisa menulis?', a: 'Gunakan bukti selain tulisan, misalnya foto saat anak mengerjakan tugas, rekaman suara, video singkat, atau catatan observasi guru. Tuliskan juga bantuan yang diberikan, sehingga perkembangan anak tetap terlihat walaupun bentuk hasil kerjanya berbeda dari teman sekelas.' },
  { q: 'Siapa yang menyimpan portofolio anak ABK?', a: 'Biasanya guru kelas atau guru pendamping khusus menyimpannya di sekolah, lalu membagikannya kepada orang tua pada pertemuan berkala. Karena isinya data pribadi anak, foto dan video sebaiknya disimpan terbatas dan tidak dibagikan tanpa izin orang tua.' },
  { q: 'Apakah anak ABK boleh ikut memilih isi portofolionya?', a: 'Boleh, dan itu sangat dianjurkan sesuai kemampuannya. Anak bisa menunjuk karya yang paling ia sukai atau menyebut bagian yang paling sulit. Pilihan seperti ini melatih refleksi dan membuat anak merasa punya andil dalam proses belajarnya.' },
  { q: 'Bagaimana hubungan portofolio dengan Program Pembelajaran Individual?', a: 'Tujuan dalam Program Pembelajaran Individual menjadi acuan isi portofolio. Setiap bukti karya dikaitkan dengan tujuan tertentu, sehingga saat peninjauan guru dan orang tua bisa melihat tujuan mana yang tercapai dan mana yang perlu disesuaikan.' },
];

addDiagram(`${IMG}/portofolio-siklus.webp`, svg.flow('Siklus penilaian portofolio', 'Dari tujuan belajar sampai rencana berikutnya', [
  { h: 'Tentukan tujuan', d: 'Pilih dua sampai empat tujuan belajar utama anak.' },
  { h: 'Kumpulkan bukti', d: 'Simpan karya, foto, atau rekaman secara berkala.' },
  { h: 'Beri keterangan', d: 'Catat tanggal, tujuan, dan tingkat bantuan.' },
  { h: 'Nilai bukti', d: 'Pakai skala yang sama sepanjang periode.' },
  { h: 'Bahas bersama', d: 'Tinjau kemajuan dengan orang tua dan pendamping.' },
  { h: 'Sesuaikan', d: 'Perbarui tujuan dan bantuan untuk periode berikutnya.' },
]));

const body = [
  p('<strong>Penilaian portofolio anak ABK</strong> adalah cara menilai perkembangan anak berkebutuhan khusus dari kumpulan karya dan catatan yang dikumpulkan secara berkala. Cara ini menilai kemajuan anak terhadap tujuan belajarnya sendiri, bukan hanya hasil satu kali ujian. Bagi guru dan orang tua, portofolio memberi bukti nyata tentang hal yang sudah bisa dilakukan anak, termasuk kemajuan kecil yang tidak terlihat di angka rapor.'),
  p('Panduan ini kami susun untuk guru kelas inklusi, guru pendamping khusus, dan orang tua. Isinya mencakup arti portofolio, jenis dan isinya, langkah menyusun, cara menilai, serta kesalahan yang sering terjadi. Contoh di dalamnya adalah praktik umum di kelas inklusi dan perlu disesuaikan dengan hasil asesmen tiap anak.'),
  toc(sections),

  '<h2 id="arti">Apa itu penilaian portofolio</h2>',
  p('Penilaian portofolio adalah penilaian berdasarkan kumpulan hasil kerja siswa yang dipilih dan disusun dalam rentang waktu tertentu. Sebuah ' + ext(URL_UNJ, 'penelitian dari Universitas Negeri Jakarta tentang asesmen portofolio') + ' menggambarkannya sebagai pengumpulan karya siswa dari waktu ke waktu, yang lalu menjadi dasar refleksi, umpan balik, dan evaluasi. Jadi, portofolio bukan sekadar map berisi tugas lama.'),
  p('Perbedaan utamanya terletak pada arah pandang. Ujian memotret kemampuan anak pada satu hari, sedangkan portofolio merekam perjalanannya selama beberapa bulan. Untuk anak yang hasilnya mudah berubah karena suasana hati, kelelahan, atau kondisi sensorik, perjalanan ini sering lebih jujur daripada satu angka.'),
  p('Portofolio juga berbeda dari rubrik. Rubrik adalah alat untuk menilai, sedangkan portofolio adalah kumpulan buktinya. Keduanya saling melengkapi. Cara menyusun kriteria penilaian dibahas di artikel <a href="/artikel/rubrik-penilaian-anak-berkebutuhan-khusus">rubrik penilaian anak berkebutuhan khusus</a>, dan penilaian kemampuan awal dibahas di <a href="/artikel/asesmen-akademik-anak-berkebutuhan-khusus">asesmen akademik</a>.'),
  foto(`${IMG}/portofolio-karya-dinding.webp`, 'Seorang guru laki-laki berseragam cokelat memegang lukisan daun berwarna kuning di depan dinding penuh karya siswa', 'Karya siswa yang dipajang dan disimpan bisa menjadi bahan portofolio, selama diberi tanggal dan keterangan. Foto ini menunjukkan guru seni madrasah di Banten dengan karya siswanya.', F_ART),

  '<h2 id="kenapa">Kenapa portofolio cocok untuk anak ABK</h2>',
  p('Portofolio cocok untuk anak ABK karena bisa menunjukkan kemampuan yang tidak tertangkap oleh tes tertulis. Anak dengan hambatan menulis mungkin paham materi, tetapi sulit menuangkannya di kertas. Lewat rekaman suara, foto, atau hasil karya, pemahaman itu tetap bisa ditunjukkan.'),
  p('Pendekatan ini sejalan dengan prinsip ' + ext(URL_UDL, 'Universal Design for Learning dari CAST') + ', yang memberi siswa beragam cara untuk menunjukkan apa yang mereka ketahui. Di Indonesia, ' + ext(URL_PP13, 'PP Nomor 13 Tahun 2020') + ' dan ' + ext(URL_P48, 'Permendikbudristek Nomor 48 Tahun 2023') + ' mengatur akomodasi yang layak bagi peserta didik penyandang disabilitas. Portofolio bisa membantu sekolah mendokumentasikan penyesuaian yang sudah diberikan beserta hasilnya.'),
  p('Ada beberapa manfaat lain yang sering dirasakan sekolah:'),
  '<ul>'
    + '<li><strong>Kemajuan kecil terlihat.</strong> Anak yang tahun lalu hanya mencoret kini bisa menulis namanya, dan bukti itu tersimpan.</li>'
    + '<li><strong>Percakapan dengan orang tua lebih konkret.</strong> Guru menunjukkan karya, bukan hanya memberi kesan umum.</li>'
    + '<li><strong>Serah terima antarguru lebih mudah.</strong> Guru baru bisa melihat apa yang berhasil dan apa yang tidak.</li>'
    + '<li><strong>Anak ikut bangga.</strong> Melihat karya lama dan karya baru bersama-sama bisa menumbuhkan rasa percaya diri.</li>'
    + '</ul>',
  p('Semangat ini juga sejalan dengan pandangan ' + ext(URL_UNESCO, 'UNESCO tentang pendidikan inklusif') + ', yang menempatkan keberagaman peserta didik sebagai hal yang perlu direspons oleh sistem pendidikan. Di kelas, respons itu salah satunya berupa cara menilai yang memberi ruang bagi perbedaan.'),

  '<h2 id="jenis">Jenis portofolio dan isinya</h2>',
  p('Jenis portofolio dibedakan berdasarkan tujuannya, dan sekolah boleh memakai lebih dari satu. Sebelum mulai mengumpulkan, tentukan dulu untuk apa portofolio itu dipakai, karena tujuan menentukan isinya. Tabel berikut merangkum tiga jenis yang paling sering dipakai di kelas.'),
  '<div class="table-wrap"><table><caption>Tiga jenis portofolio dan kegunaannya</caption><thead><tr><th>Jenis</th><th>Tujuan</th><th>Contoh isi</th></tr></thead><tbody>'
    + '<tr><td>Portofolio kerja</td><td>Memantau proses belajar yang sedang berjalan</td><td>Draf tugas, lembar latihan, catatan bantuan guru</td></tr>'
    + '<tr><td>Portofolio perkembangan</td><td>Membandingkan kemampuan dari waktu ke waktu</td><td>Contoh tulisan awal dan akhir semester, video kegiatan</td></tr>'
    + '<tr><td>Portofolio pajangan</td><td>Merayakan karya terbaik anak</td><td>Karya pilihan anak, foto pameran kelas, sertifikat kegiatan</td></tr>'
    + '</tbody></table></div>',
  p('Untuk anak ABK, jenis perkembangan biasanya paling berguna karena menjawab pertanyaan utama orang tua: apakah anak saya maju? Isi portofolio juga tidak harus akademik. Keterampilan hidup seperti memakai sepatu, antre, atau meminta bantuan bisa sama pentingnya, terutama bagi anak yang mengikuti <a href="/artikel/kurikulum-fungsional-untuk-anak-tunagrahita">kurikulum fungsional</a>.'),
  foto(`${IMG}/portofolio-karya-model.webp`, 'Seorang guru perempuan berkerudung putih berdiri di samping meja pameran berisi model pesawat kayu dan plastik buatan siswa', 'Karya tiga dimensi sulit disimpan di map, jadi cukup difoto dari beberapa sisi lalu diberi keterangan. Foto ini menunjukkan guru SMP di Banten bersama karya siswanya.', F_MODEL),

  '<h2 id="langkah">Langkah menyusun portofolio</h2>',
  p('Menyusun portofolio paling mudah dimulai dari tujuan belajar, bukan dari tumpukan tugas. Kalau anak sudah punya <a href="/artikel/program-pembelajaran-individual">Program Pembelajaran Individual</a>, tujuan dalam dokumen itu bisa langsung dipakai sebagai kerangka. Berikut langkah yang bisa diikuti guru.'),
  '<ol>'
    + '<li><strong>Pilih dua sampai empat tujuan utama.</strong> Terlalu banyak tujuan membuat pengumpulan bukti terasa berat dan akhirnya berhenti.</li>'
    + '<li><strong>Tentukan bentuk buktinya.</strong> Sesuaikan dengan cara anak berkomunikasi, misalnya tulisan, gambar, foto, atau rekaman suara.</li>'
    + '<li><strong>Buat jadwal pengumpulan.</strong> Pilih jadwal yang sanggup dijalankan, lalu tandai di kalender kelas.</li>'
    + '<li><strong>Beri keterangan pada setiap bukti.</strong> Catat tanggal, tujuan yang dituju, dan tingkat bantuan yang diberikan.</li>'
    + '<li><strong>Libatkan anak.</strong> Ajak anak memilih karya sesuai kemampuannya dan tanyakan bagian yang paling ia sukai.</li>'
    + '<li><strong>Tinjau secara berkala.</strong> Bandingkan bukti lama dan baru, lalu tulis ringkasan singkat kemajuannya.</li>'
    + '<li><strong>Bahas bersama orang tua.</strong> Gunakan portofolio sebagai bahan percakapan, bukan laporan satu arah.</li>'
    + '</ol>',
  diag(`${IMG}/portofolio-siklus.webp`, 'Diagram alur enam langkah siklus penilaian portofolio dari menentukan tujuan belajar sampai menyesuaikan rencana berikutnya', 'Portofolio bekerja sebagai siklus. Hasil peninjauan menjadi dasar tujuan belajar berikutnya.'),
  p('Keterangan tingkat bantuan sering terlupakan, padahal justru paling penting. Karya yang sama punya arti berbeda kalau dibuat dengan tangan dibimbing dibanding dibuat sendiri. Tanpa catatan ini, guru berikutnya tidak bisa tahu seberapa mandiri anak sebenarnya.'),

  '<h2 id="menilai">Cara menilai isi portofolio</h2>',
  p('Isi portofolio dinilai dengan membandingkan bukti terhadap tujuan belajar dan terhadap kemampuan awal anak, bukan terhadap teman sekelasnya. Karena itu, gunakan kriteria yang sama sepanjang periode penilaian supaya perkembangannya bisa dibaca. Pilihan paling sederhana adalah skala tingkat kemandirian.'),
  '<div class="table-wrap"><table><caption>Contoh skala kemandirian untuk menilai bukti portofolio</caption><thead><tr><th>Tingkat</th><th>Arti</th><th>Contoh catatan guru</th></tr></thead><tbody>'
    + '<tr><td>Bantuan penuh</td><td>Anak mengerjakan dengan tuntunan fisik</td><td>Menulis nama dengan tangan dibimbing</td></tr>'
    + '<tr><td>Bantuan sebagian</td><td>Anak mengerjakan dengan contoh atau isyarat</td><td>Menulis nama sambil melihat contoh</td></tr>'
    + '<tr><td>Dengan pengingat</td><td>Anak perlu diingatkan untuk memulai</td><td>Menulis nama setelah diingatkan sekali</td></tr>'
    + '<tr><td>Mandiri</td><td>Anak mengerjakan tanpa bantuan</td><td>Menulis nama sendiri di tiap lembar kerja</td></tr>'
    + '</tbody></table></div>',
  p('Skala ini hanya contoh dan boleh disesuaikan. Yang penting, semua guru yang terlibat memahami arti tiap tingkat dengan cara yang sama. Kalau guru kelas dan pendamping memakai ukuran berbeda, kemajuan anak bisa tampak naik turun padahal yang berubah hanya penilainya.'),
  p('Tuliskan ringkasan penilaian dengan kalimat yang menggambarkan kemampuan, misalnya "kini bisa menyebut tiga benda tanpa contoh". Hindari kalimat umum seperti "sudah lebih baik". Kerja sama guru kelas dan pendamping dalam menilai ini bisa mengikuti pola <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching di kelas inklusi</a>.'),

  '<h2 id="contoh">Contoh isi portofolio untuk beberapa kebutuhan</h2>',
  p('Isi portofolio perlu mengikuti cara anak belajar dan berkomunikasi, jadi tidak ada satu templat untuk semua. Tabel di bawah menunjukkan beberapa gambaran umum. Gunakan hasil asesmen anak sebagai acuan utama, karena label kondisi yang sama tidak berarti kebutuhannya sama.'),
  '<div class="table-wrap"><table><caption>Gambaran isi portofolio sesuai kebutuhan belajar</caption><thead><tr><th>Kebutuhan</th><th>Bentuk bukti yang bisa dipakai</th><th>Yang diperhatikan</th></tr></thead><tbody>'
    + '<tr><td>Hambatan menulis</td><td>Rekaman jawaban lisan, foto hasil susun kata</td><td>Isi jawaban, bukan kerapian tulisan</td></tr>'
    + '<tr><td>Hambatan komunikasi</td><td>Video singkat, kartu gambar yang dipilih anak</td><td>Cara anak menyampaikan keinginan</td></tr>'
    + '<tr><td>Hambatan motorik</td><td>Foto proses dengan alat bantu, karya dengan pegangan khusus</td><td>Kemandirian saat memakai alat</td></tr>'
    + '<tr><td>Hambatan perhatian</td><td>Catatan lama fokus, tugas bertahap yang selesai</td><td>Kemampuan menyelesaikan tugas</td></tr>'
    + '<tr><td>Kebutuhan keterampilan hidup</td><td>Daftar cek rutinitas, foto kegiatan harian</td><td>Langkah yang sudah dikerjakan sendiri</td></tr>'
    + '</tbody></table></div>',
  p('Saat memilih bentuk bukti, gunakan prinsip yang sama dengan <a href="/artikel/diferensiasi-pembelajaran-untuk-anak-abk">diferensiasi pembelajaran</a>: tujuan belajarnya tetap, tetapi cara anak menunjukkannya boleh berbeda. Dengan begitu, portofolio tidak menjadi tugas tambahan yang menyulitkan anak.'),

  '<h2 id="digital">Portofolio kertas atau digital</h2>',
  p('Portofolio kertas dan digital sama baiknya, asalkan mudah dipakai dan aman. Map kertas murah dan mudah ditunjukkan kepada orang tua, sedangkan portofolio digital mampu menyimpan video dan rekaman suara yang sangat berguna bagi anak yang belum menulis.'),
  foto(`${IMG}/portofolio-komputer.webp`, 'Dua siswa laki-laki berseragam putih duduk di depan komputer meja di ruang kelas', 'Komputer sekolah bisa dipakai untuk menyimpan foto dan rekaman karya siswa dalam folder per anak. Foto ini diambil di sebuah sekolah di Indonesia.', F_PC),
  p('Kalau memilih digital, buat satu folder per anak dengan nama berkas yang memuat tanggal dan tujuan. Sekolah yang memakai perangkat bersama perlu mengatur siapa yang boleh membuka folder itu. Foto dan video anak adalah data pribadi, jadi mintalah izin orang tua dan jangan mengunggahnya ke media sosial sekolah tanpa persetujuan.'),
  p('Pilihan yang sering paling praktis adalah gabungan keduanya. Karya kertas disimpan di map, sedangkan video dan foto karya besar disimpan di folder. Satu daftar isi sederhana di map bisa menunjukkan letak semua bukti tersebut.'),

  '<h2 id="keliru">Kesalahan yang sering terjadi</h2>',
  p('Kesalahan dalam portofolio biasanya bukan soal niat, melainkan soal kebiasaan. Mengenalinya sejak awal membantu guru menjaga portofolio tetap berguna dan tidak berubah menjadi beban administrasi.'),
  '<ul>'
    + '<li><strong>Menyimpan semua hal.</strong> Map yang penuh tanpa pilihan sulit dibaca. Pilih bukti yang menunjukkan perubahan.</li>'
    + '<li><strong>Tidak memberi tanggal.</strong> Karya tanpa tanggal tidak bisa menunjukkan perkembangan.</li>'
    + '<li><strong>Hanya memilih karya terbaik.</strong> Portofolio perkembangan butuh karya awal yang belum sempurna sebagai pembanding.</li>'
    + '<li><strong>Tidak mencatat bantuan.</strong> Hasil yang dibantu bisa keliru terbaca sebagai kemampuan mandiri.</li>'
    + '<li><strong>Mengumpulkan menjelang rapor.</strong> Bukti yang dikumpulkan terburu-buru tidak menggambarkan proses.</li>'
    + '<li><strong>Membandingkan dengan teman sekelas.</strong> Patokannya adalah tujuan dan kemampuan awal anak itu sendiri.</li>'
    + '</ul>',
  p('Kalau beban kerja terasa berat, kurangi jumlah tujuan yang dipantau, bukan kualitas catatannya. Pengaturan kelas yang rapi juga membantu, dan beberapa kebiasaannya dibahas di <a href="/artikel/classroom-management-kelas-inklusi">manajemen kelas inklusi</a>. Tiga bukti yang jelas lebih berguna daripada dua puluh lembar tanpa keterangan.'),

  '<h2 id="orangtua">Peran orang tua</h2>',
  p('Orang tua adalah mitra penting dalam portofolio karena banyak kemampuan anak hanya muncul di rumah. Anak yang diam di kelas bisa saja bercerita panjang di rumah. Foto atau catatan singkat dari orang tua bisa melengkapi gambaran yang tidak terlihat guru.'),
  foto(`${IMG}/portofolio-membaca.webp`, 'Sekelompok murid sekolah dasar berseragam kemeja bermotif membaca buku bergambar di meja perpustakaan sekolah', 'Kegiatan membaca bersama bisa didokumentasikan sebagai bukti perkembangan minat dan kemampuan membaca. Foto ini menunjukkan murid sekolah dasar di Indonesia.', F_READ),
  p('Saat bertemu guru, orang tua bisa mengajukan beberapa pertanyaan sederhana: tujuan apa yang sedang dikejar, bukti mana yang paling menunjukkan kemajuan, bantuan apa yang masih dibutuhkan, dan apa yang bisa dilatih di rumah. Peran orang tua secara lebih luas dibahas di artikel <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.'),
  p('Saat anak berpindah kelas atau sekolah, portofolio menjadi bekal yang sangat berharga. Sekolah baru bisa langsung melihat cara belajar anak tanpa memulai dari nol, terutama ketika anak menjalani <a href="/artikel/asesmen-abk-sebelum-masuk-sekolah">asesmen sebelum masuk sekolah</a>. Karena itu, orang tua sebaiknya menyimpan salinan bukti yang penting.'),
  p('Di Sekolah Inklusi Taruna Imani yang dikelola YUKA, kami mendorong komunikasi rutin antara guru, pendamping, dan orang tua supaya perkembangan tiap anak bisa ditinjau bersama. Sekolah yang menjalankan inklusi dengan baik biasanya punya <a href="/artikel/indikator-keberhasilan-sekolah-inklusi">indikator keberhasilan</a> yang bisa diperiksa, dan catatan perkembangan anak adalah salah satu bahannya.'),

  '<h2 id="faq">Pertanyaan umum</h2>',
  faqHtml(faq),
];

const articles = [
  {
    slug: 'penilaian-portofolio-anak-abk',
    titleTag: 'Penilaian Portofolio Anak ABK: Isi dan Cara Menilai | YUKA',
    metaDesc: 'Penilaian portofolio anak ABK: arti, jenis dan isinya, langkah menyusun, skala menilai, contoh per kebutuhan, dan kesalahan yang perlu dihindari guru.',
    keywords: 'penilaian portofolio anak abk, portofolio anak berkebutuhan khusus, asesmen portofolio kelas inklusi',
    ogTitle: 'Penilaian Portofolio Anak ABK: Isi dan Cara Menilai',
    ogDesc: 'Panduan menyusun dan menilai portofolio anak berkebutuhan khusus untuk guru kelas inklusi dan orang tua.',
    h1: 'Penilaian Portofolio Anak ABK: Isi, Langkah Menyusun, dan Cara Menilainya',
    crumb: 'Penilaian Portofolio Anak ABK',
    category: 'Pendidikan',
    datePublished: '2026-11-04T08:00:00+07:00', dateModified: '2026-11-04T08:00:00+07:00',
    dateDisplay: '4 November 2026', readTime: '13 menit baca',
    image: {
      file: `${IMG}/portofolio-hero.webp`, w: 1200, h: 800,
      alt: 'Sekelompok siswi berkerudung putih berkumpul di meja kelas dan menulis bersama di atas selembar kertas besar',
      caption: 'Siswi bekerja bersama di atas kertas besar di sebuah sekolah di Indonesia. Hasil kerja seperti ini bisa disimpan sebagai bukti perkembangan belajar.',
      credit: PD(F_HERO),
    },
    bodyHtml: body.join('\n'), faq,
    related: [
      { href: '/artikel/rubrik-penilaian-anak-berkebutuhan-khusus', title: 'Rubrik Penilaian Anak Berkebutuhan Khusus', desc: 'Menyusun kriteria penilaian yang adil untuk anak di kelas inklusi.' },
      { href: '/artikel/program-pembelajaran-individual', title: 'Program Pembelajaran Individual', desc: 'Rencana tertulis per anak berisi tujuan, layanan, dan cara evaluasi.' },
      { href: '/artikel/asesmen-akademik-anak-berkebutuhan-khusus', title: 'Asesmen Akademik Anak Berkebutuhan Khusus', desc: 'Memetakan kemampuan akademik anak sebelum menyusun rencana belajar.' },
    ],
    tags: ['Portofolio', 'SekolahInklusi', 'Penilaian'],
    sources: [
      { url: URL_UNJ, label: 'Wijayanti, Boeriswati, dan Supriyana (2025): The Implementation of Portfolio Assessment in Indonesian Language Learning at Vocational High Schools, Universitas Negeri Jakarta' },
      { url: URL_PP13, label: 'PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
      { url: URL_P48, label: 'Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas pada PAUD Formal, Pendidikan Dasar, Pendidikan Menengah, dan Pendidikan Tinggi' },
      { url: URL_UDL, label: 'CAST: Universal Design for Learning Guidelines' },
      { url: URL_UNESCO, label: 'UNESCO: Inclusion in education' },
    ],
    sourcesCheckedNote: 'Sumber diperiksa 5 November 2026. Contoh dan skala di artikel ini adalah praktik umum di kelas inklusi dan tidak menggantikan asesmen profesional untuk tiap anak.',
  },
];

function prepare() {
  fs.mkdirSync(path.join(ROOT, IMG), { recursive: true });
  for (const [file, markup] of Object.entries(diagrams)) fs.writeFileSync(imgPath(file.replace(/\.webp$/, '.svg')), markup);
  console.log(`Wrote ${Object.keys(diagrams).length} SVG diagrams into ${IMG}/`);
}
async function raster() {
  const sharp = require('D:/Projects/Creativism App/node_modules/sharp');
  for (const file of Object.keys(diagrams)) {
    const buf = await sharp(fs.readFileSync(imgPath(file.replace(/\.webp$/, '.svg'))), { density: 150 }).resize(1200, 760, { fit: 'fill' }).webp({ quality: 90 }).toBuffer();
    fs.writeFileSync(imgPath(file), buf);
    console.log(`Rasterized ${file} (${buf.length} bytes)`);
  }
}
function render() {
  for (const a of articles) {
    fs.writeFileSync(path.join(articleDir, `${a.slug}.html`), renderArticlePage(a));
    console.log(`Rendered artikel/${a.slug}.html`);
  }
}

if (require.main === module) {
  if (process.argv.includes('--prepare')) prepare();
  else if (process.argv.includes('--raster')) raster();
  else render();
}

module.exports = { articles, diagrams };

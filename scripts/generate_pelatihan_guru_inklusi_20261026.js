'use strict';
// Generator artikel "pelatihan guru inklusi" (cycle #80 bagian B, antrean 2026-10-26).
// Keyword dari Google Sheet Keyword Data YUKA (tab "Keyword Data", baris ditambahkan 2026-10-19 dari
// sub_query baris "pendidikan inklusi adalah"; volume 50 DataForSEO ID). Fakta dibaca dari PDF resmi
// Permendikbudristek 48/2023 (Pasal 8, 9, 10, 16, 18, 20). Hero: foto Wikimedia Commons berlisensi
// CC BY-SA 4.0, karena pool foto Dokumentasi YUKA yang belum pernah jadi hero sudah habis (cycle #80).
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');
const svg = require('./lib/diagram-svg');
const ROOT = path.resolve(__dirname, '..');
const slug = 'pelatihan-guru-inklusi';
const heroFile = 'assets/images/artikel/commons-pelatihan-guru-tanimbar-maluku-hero.webp';
const credit = 'Foto: <a href="https://commons.wikimedia.org/wiki/File:Peningkatan_Kapasitas_Guru_di_Maluku.jpg" target="_blank" rel="nofollow noopener">Yudimuchtar25</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="nofollow noopener">CC BY-SA 4.0</a>, dipotong dan dikonversi ke WebP.';
const IMG = 'assets/images/artikel';

const diagrams = {
  [`${IMG}/${slug}-materi.svg`]: svg.cards('Materi inti pelatihan guru inklusi', 'Kemampuan yang paling sering dibutuhkan guru kelas reguler', [
    { h: 'Mengenali kebutuhan', color: '#2B3A67', items: ['Identifikasi awal di kelas', 'Membaca hasil asesmen', 'Berdiskusi dengan orang tua', 'Merujuk bila perlu'] },
    { h: 'Menyesuaikan pembelajaran', color: '#00838F', items: ['Modifikasi kurikulum', 'Variasi tugas dan media', 'Rencana pembelajaran individual', 'Penilaian yang akomodatif'] },
    { h: 'Berkomunikasi dan bekerja sama', color: '#7A5A06', items: ['Komunikasi dengan murid disabilitas', 'Bahasa isyarat atau alat bantu', 'Kerja sama dengan GPK', 'Mengelola kelas yang beragam'] },
  ]),
  [`${IMG}/${slug}-magang.svg`]: svg.flow('Lima kegiatan wajib saat magang', 'Menurut Pasal 9 ayat (7) Permendikbudristek 48/2023, didampingi guru pendamping magang', [
    { h: 'Identifikasi dan asesmen', d: 'Mengenali kondisi dan kebutuhan peserta didik penyandang disabilitas.' },
    { h: 'Diskusi dengan orang tua', d: 'Menggali informasi dan menyamakan tujuan dengan orang tua atau wali.' },
    { h: 'Rencana individual', d: 'Menyusun perencanaan pembelajaran individual.' },
    { h: 'Proses pengajaran', d: 'Mempraktikkan pengajaran di kelas yang ada murid disabilitas.' },
    { h: 'Evaluasi', d: 'Mengevaluasi hasil dan proses pembelajaran.' },
  ]),
  [`${IMG}/${slug}-dukungan.svg`]: svg.grid('Siapa yang bisa mendukung guru', 'Sumber dukungan menurut Permendikbudristek 48/2023', ['Pihak', 'Peran untuk guru', 'Dasar'], [
    ['Guru pendidikan khusus', 'Membimbing atau mendampingi guru lain', 'Pasal 10 ayat (2)'],
    ['Unit Layanan Disabilitas', 'Pelatihan, bimbingan teknis, pendampingan', 'Pasal 16 ayat (1) dan (5)'],
    ['Psikolog dan terapis', 'Masukan asesmen dan strategi', 'Pasal 18 ayat (1)'],
    ['Praktisi khusus', 'Bahasa isyarat, braille, teknologi asistif', 'Pasal 18 ayat (1) huruf f'],
    ['Guru pendamping magang', 'Mendampingi praktik magang', 'Pasal 9 ayat (7) dan (8)'],
  ], [300, 470, 334]),
};

const fig = (file, alt, caption, kredit) => {
  const { w, h } = imageSize(path.join(ROOT, file));
  return `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${kredit}</span></figcaption></figure>`;
};
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;

const faq = [
  { q: 'Apa yang dimaksud pelatihan guru inklusi?', a: 'Pelatihan guru inklusi adalah pelatihan agar guru mampu mengajar kelas yang di dalamnya ada peserta didik penyandang disabilitas. Permendikbudristek 48/2023 menyebut dua fokus pelatihan: meningkatkan kemampuan guru memodifikasi dan menyesuaikan kurikulum, serta meningkatkan keterampilan guru berkomunikasi dengan peserta didik penyandang disabilitas sesuai kebutuhannya.' },
  { q: 'Siapa yang menyelenggarakan pelatihan guru inklusi?', a: 'Menurut Pasal 9 ayat (9) Permendikbudristek 48/2023, pelatihan untuk kompetensi khusus diselenggarakan oleh Kementerian dan/atau lembaga pelatihan yang ditetapkan oleh Kementerian. Di daerah, Unit Layanan Disabilitas juga bertugas melaksanakan pelatihan dan bimbingan teknis bagi pendidik dan tenaga kependidikan.' },
  { q: 'Apakah pelatihan guru inklusi wajib disertai magang?', a: 'Ya, untuk pelatihan kompetensi khusus. Pasal 9 ayat (5) menyebut pelatihan dilengkapi dengan praktik magang, dan ayat (6) menyebut magang dilaksanakan di satuan pendidikan yang memiliki peserta didik penyandang disabilitas. Selama magang, guru didampingi guru pendamping magang.' },
  { q: 'Apakah guru mendapat sertifikat setelah pelatihan?', a: 'Pasal 9 ayat (10) Permendikbudristek 48/2023 menyebut guru kelas atau guru mata pelajaran yang telah mengikuti pendidikan dan/atau pelatihan kompetensi khusus berhak memperoleh sertifikat kelulusan. Tanyakan kepada penyelenggara apakah pelatihan yang diikuti termasuk jalur yang dimaksud.' },
  { q: 'Apa bedanya guru reguler terlatih dengan guru pendidikan khusus?', a: 'Guru pendidikan khusus memiliki kompetensi khusus melalui pendidikan seperti sarjana pendidikan khusus atau PPG pendidikan khusus, atau melalui pelatihan. Guru ini ditugaskan pada Unit Layanan Disabilitas dan bisa melayani lebih dari satu sekolah. Guru reguler yang terlatih tetap menjadi pengajar utama di kelasnya dan bekerja sama dengan guru pendidikan khusus.' },
  { q: 'Apakah ada penghargaan bagi guru yang aktif di pendidikan inklusif?', a: 'Pasal 8 ayat (3) menyebut guru kelas atau mata pelajaran yang menjadi guru penggerak pendidikan inklusif, melakukan pendampingan atau asistensi mengajar di kelas yang ada peserta didik penyandang disabilitas, atau kegiatan pendukung lain, dapat diberikan fasilitasi pengembangan karier dan/atau diakui sebagai bagian pemenuhan beban kerja.' },
  { q: 'Bagaimana sekolah bisa mengadakan pelatihan internal?', a: 'Sekolah dapat memulai dari kebutuhan nyata di kelas: kumpulkan kasus yang paling sering dihadapi guru, undang guru pendidikan khusus atau Unit Layanan Disabilitas sebagai narasumber, lalu lanjutkan dengan praktik bersama seperti co-teaching dan observasi antarguru. Ukur dampaknya dari perubahan praktik di kelas, bukan hanya dari kehadiran peserta.' },
];

const sections = [
  ['mengapa', 'Mengapa guru reguler perlu pelatihan inklusi'],
  ['aturan', 'Dasar aturan pelatihan guru inklusi'],
  ['jalur', 'Jalur pendidikan dan pelatihan kompetensi khusus'],
  ['magang', 'Isi magang dalam pelatihan'],
  ['materi', 'Materi yang perlu dikuasai guru'],
  ['dukungan', 'Dukungan setelah pelatihan'],
  ['sekolah', 'Pelatihan di tingkat sekolah'],
  ['dampak', 'Mengukur dampak pelatihan'],
  ['faq', 'Pertanyaan Umum tentang Pelatihan Guru Inklusi'],
];

const bodyHtml = `
<div class="jawaban-singkat"><p><strong>Pelatihan guru inklusi</strong> adalah pelatihan agar guru mampu mengajar kelas yang di dalamnya ada peserta didik penyandang disabilitas. Menurut Permendikbudristek 48/2023, pelatihannya berfokus pada modifikasi dan penyesuaian kurikulum serta komunikasi dengan peserta didik penyandang disabilitas, wajib dilengkapi praktik magang, diselenggarakan Kementerian atau lembaga yang ditetapkannya, dan memberi hak sertifikat kelulusan.</p></div>
<p>Sekolah inklusi tidak bisa berjalan hanya dengan membuka pintu bagi anak berkebutuhan khusus. Guru di kelas memegang peran terbesar, karena merekalah yang setiap hari menyesuaikan materi, tugas, dan cara berkomunikasi. Banyak guru reguler merasa belum siap, bukan karena tidak peduli, tetapi karena belum pernah dilatih. Artikel ini merangkum jalur pelatihan menurut aturan, materi yang penting, dan cara sekolah menjaga hasil pelatihan.</p>
<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>

<h2 id="mengapa">Mengapa guru reguler perlu pelatihan inklusi</h2>
<p>Di sekolah inklusi, anak berkebutuhan khusus belajar di kelas yang sama dengan teman sebayanya. Guru kelas atau guru mata pelajaran tetap menjadi pengajar utama, meskipun ada dukungan dari guru pendidikan khusus atau pendamping. Karena itu, kesiapan guru reguler sangat menentukan apakah anak benar-benar ikut belajar atau hanya duduk di kelas. Pengertian dasar pendidikan inklusi ada di artikel <a href="/artikel/pendidikan-inklusi">pendidikan inklusi adalah</a>.</p>
<p>Tantangan yang paling sering muncul bersifat praktis. Guru bingung bagaimana menyederhanakan tugas tanpa menurunkan harapan, bagaimana berkomunikasi dengan anak yang belum berbicara lancar, atau bagaimana menilai anak yang targetnya berbeda. Tanpa pelatihan, guru cenderung memilih jalan pintas, misalnya membiarkan anak mengerjakan hal lain, yang justru menjauhkan anak dari kelas.</p>
<p>Pelatihan yang baik memberi guru dua hal sekaligus: pengetahuan tentang kebutuhan anak dan keterampilan menerapkannya di kelas yang beragam. Hasilnya tidak hanya dirasakan anak berkebutuhan khusus. Strategi seperti variasi tugas dan petunjuk yang jelas juga membantu murid lain yang belajar dengan cara berbeda. Perbedaan layanan di sekolah inklusi dan SLB dibahas di artikel <a href="/artikel/apa-perbedaan-sekolah-inklusi-dan-slb">perbedaan sekolah inklusi dan SLB</a>.</p>

<h2 id="aturan">Dasar aturan pelatihan guru inklusi</h2>
<p>Acuan utamanya adalah <a href="https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023" target="_blank" rel="noopener">Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas</a>. Pasal 5 menyebut penyiapan dan penyediaan pendidik sebagai salah satu bentuk fasilitasi akomodasi yang layak. Pasal 8 ayat (1) lalu menjelaskan bahwa pendidik itu terdiri atas guru kelas atau guru mata pelajaran dan/atau guru pendidikan khusus.</p>
<p>Untuk guru reguler, Pasal 8 ayat (2) menyebut kompetensi diperoleh melalui mata kuliah pendidikan inklusif dalam program sarjana kependidikan dan/atau pendidikan profesi guru. Artinya, calon guru seharusnya sudah mengenal pendidikan inklusif sejak bangku kuliah. Guru yang sudah lama mengajar dan belum mendapatkannya bisa menempuh jalur pelatihan.</p>
<p>Pasal 8 ayat (3) memberi pengakuan bagi guru yang aktif. Guru kelas atau mata pelajaran yang menjadi guru penggerak pendidikan inklusif, melakukan pendampingan atau asistensi mengajar di kelas yang ada peserta didik penyandang disabilitas, atau kegiatan pendukung lain, dapat diberi fasilitasi pengembangan karier dan/atau diakui sebagai bagian pemenuhan beban kerja. Ketentuan ini penting agar upaya guru tidak dianggap pekerjaan tambahan tanpa pengakuan.</p>

<h2 id="jalur">Jalur pendidikan dan pelatihan kompetensi khusus</h2>
<p>Pasal 9 mengatur guru yang memiliki kompetensi khusus dalam memberikan layanan bagi peserta didik penyandang disabilitas. Kompetensi khusus ini diperoleh melalui dua jalur, yaitu pendidikan atau pelatihan. Tabel berikut merangkum keduanya sesuai bunyi pasal.</p>
<table><thead><tr><th>Jalur</th><th>Bentuk menurut Pasal 9</th><th>Catatan</th></tr></thead><tbody>
<tr><td>Pendidikan</td><td>Program sarjana pendidikan khusus atau pendidikan luar biasa</td><td>Ayat (3) huruf a</td></tr>
<tr><td>Pendidikan</td><td>Program pendidikan profesi guru untuk pendidikan khusus</td><td>Ayat (3) huruf b</td></tr>
<tr><td>Pendidikan</td><td>Penambahan masa studi pendidikan profesi guru untuk praktik magang di satuan pendidikan</td><td>Ayat (3) huruf c</td></tr>
<tr><td>Pelatihan</td><td>Pelatihan meningkatkan kemampuan memodifikasi dan menyesuaikan kurikulum</td><td>Ayat (4) huruf a, dilengkapi magang</td></tr>
<tr><td>Pelatihan</td><td>Pelatihan meningkatkan keterampilan berkomunikasi dengan peserta didik penyandang disabilitas</td><td>Ayat (4) huruf b, dilengkapi magang</td></tr>
</tbody></table>
<p>Sumber tabel: Pasal 9 ayat (3) sampai (5) Permendikbudristek 48/2023. Pelatihan diselenggarakan oleh Kementerian dan/atau lembaga pelatihan yang ditetapkan Kementerian (ayat 9). Guru yang telah mengikuti pendidikan dan/atau pelatihan berhak memperoleh sertifikat kelulusan (ayat 10). Pelaksanaannya ditetapkan oleh direktur jenderal yang membidangi pendidik dan tenaga kependidikan (ayat 11).</p>
<p>Guru pendidikan khusus hasil jalur ini, menurut Pasal 10, ditugaskan pada Unit Layanan Disabilitas sebagai satuan administrasi pangkal dan dapat bertugas di lebih dari satu sekolah. Peran guru pendamping di kelas dijelaskan di artikel <a href="/artikel/gpk-adalah">GPK adalah</a> dan <a href="/artikel/shadow-teacher-adalah">shadow teacher adalah</a>.</p>

<h2 id="magang">Isi magang dalam pelatihan</h2>
<p>Pelatihan kompetensi khusus tidak berhenti di ruang kelas pelatihan. Pasal 9 ayat (5) mewajibkan pelatihan dilengkapi praktik magang, dan ayat (6) menyebut magang dilaksanakan di satuan pendidikan yang memiliki peserta didik penyandang disabilitas. Dengan begitu, guru langsung berlatih dengan anak dan situasi nyata, bukan hanya dengan contoh di modul.</p>
<p>Selama magang, guru didampingi guru pendamping magang yang berasal dari guru pendidikan khusus dan/atau praktisi profesional di bidang pendidikan khusus. Ayat (7) menyebut paling sedikit lima kegiatan yang harus dilakukan: identifikasi dan asesmen, diskusi dengan orang tua atau wali, penyusunan perencanaan pembelajaran individual, proses pengajaran, serta evaluasi terhadap hasil dan proses pembelajaran.</p>
<p>Kelima kegiatan itu sekaligus menggambarkan siklus kerja guru inklusi sehari-hari. Guru mengenali kebutuhan anak, menyamakan tujuan dengan keluarga, merencanakan, mengajar, lalu mengevaluasi. Penjelasan tentang asesmen ada di artikel <a href="/artikel/asesmen-abk">asesmen ABK</a>, sedangkan cara menyusun rencana individual ada di <a href="/artikel/program-pembelajaran-individual">program pembelajaran individual</a>.</p>
${diag(`${IMG}/${slug}-magang.svg`, 'Diagram lima kegiatan magang guru: identifikasi dan asesmen, diskusi dengan orang tua, rencana individual, proses pengajaran, dan evaluasi', 'Lima kegiatan paling sedikit yang dilakukan guru selama magang, menurut Pasal 9 ayat (7) Permendikbudristek 48/2023.')}

<h2 id="materi">Materi yang perlu dikuasai guru</h2>
<p>Aturan menyebut dua fokus pelatihan, yaitu modifikasi kurikulum dan komunikasi. Dalam praktik, keduanya bisa dijabarkan menjadi beberapa kemampuan yang lebih konkret. Pertama, mengenali kebutuhan anak: melakukan identifikasi awal di kelas, membaca hasil asesmen dari profesional, dan tahu kapan perlu merujuk. Kedua, menyesuaikan pembelajaran: memvariasikan tugas, media, dan cara penilaian sesuai rencana individual.</p>
<p>Ketiga, berkomunikasi dan bekerja sama. Guru perlu tahu cara berkomunikasi dengan anak yang memakai bahasa isyarat, gambar, atau alat bantu komunikasi. Dasar bahasa isyarat dibahas di artikel <a href="/artikel/bahasa-isyarat-tuna-rungu">bahasa isyarat tuna rungu</a>. Guru juga perlu terampil bekerja sama dengan guru pendidikan khusus, pendamping, dan orang tua, termasuk membagi peran dengan jelas.</p>
<p>Keempat, mengelola kelas yang beragam. Pengaturan tempat duduk, rutinitas yang jelas, dan cara menanggapi perilaku menantang sangat menentukan suasana belajar. Contoh strateginya bisa dibaca di artikel <a href="/artikel/classroom-management-kelas-inklusi">classroom management kelas inklusi</a> dan <a href="/artikel/buddy-system-untuk-anak-abk-di-sekolah">buddy system untuk anak ABK di sekolah</a>.</p>
<p>Kelima, menilai secara adil. Guru perlu memahami bahwa penilaian bisa disesuaikan tanpa mengurangi makna, misalnya dengan waktu tambahan, soal yang dibacakan, jawaban lisan, atau laporan deskriptif. Lampiran II Permendikbudristek 48/2023 memuat contoh akomodasi seperti fleksibilitas waktu penyelesaian tugas dan evaluasi. Materi ini sering terlupa dalam pelatihan, padahal rapor adalah hal yang paling diperhatikan orang tua.</p>
<p>Pelatihan yang efektif biasanya memadukan teori singkat, contoh kasus, latihan langsung, dan umpan balik. Guru belajar paling banyak saat mencoba strategi di kelasnya sendiri lalu membahas hasilnya bersama pendamping. Karena itu, pilih pelatihan yang memberi ruang praktik dan tindak lanjut, bukan hanya ceramah sehari penuh.</p>
${diag(`${IMG}/${slug}-materi.svg`, 'Diagram tiga kartu materi inti pelatihan guru inklusi: mengenali kebutuhan, menyesuaikan pembelajaran, serta berkomunikasi dan bekerja sama', 'Tiga kelompok materi inti yang menjabarkan dua fokus pelatihan dalam Pasal 9 ayat (4).')}

<h2 id="dukungan">Dukungan setelah pelatihan</h2>
<p>Pelatihan satu kali jarang cukup. Guru membutuhkan tempat bertanya saat menghadapi kasus baru di kelas. Permendikbudristek 48/2023 menyediakan beberapa sumber dukungan. Pasal 10 ayat (2) menyebut guru pendidikan khusus bertugas memberikan layanan pembelajaran dan/atau membimbing atau mendampingi guru lainnya dalam memberikan layanan bagi peserta didik penyandang disabilitas.</p>
<p>Unit Layanan Disabilitas, menurut Pasal 16, bertugas antara lain melaksanakan pelatihan dan bimbingan teknis serta pendampingan. Salah satu fungsinya adalah meningkatkan kompetensi pendidik dan tenaga kependidikan melalui pelatihan dan/atau bimbingan teknis. Pasal 18 menyebut unit ini dapat melibatkan dokter, psikolog, terapis, ahli pendidikan khusus dan pendidikan inklusif, praktisi bahasa isyarat, braille, dan teknologi asistif, pekerja sosial, serta konselor.</p>
<p>Bagi guru, daftar ini berarti tidak harus menyelesaikan semua masalah sendirian. Bila ragu tentang kualifikasi tenaga yang dilibatkan, artikel <a href="/artikel/lembaga-sertifikasi-terapis-anak-di-indonesia">lembaga sertifikasi terapis anak di Indonesia</a> menjelaskan cara memeriksanya. Kuncinya adalah membangun jalur komunikasi yang jelas antara guru, sekolah, dan unit layanan di daerah.</p>
${diag(`${IMG}/${slug}-dukungan.svg`, 'Tabel visual sumber dukungan bagi guru: guru pendidikan khusus, Unit Layanan Disabilitas, psikolog dan terapis, praktisi khusus, dan guru pendamping magang', 'Sumber dukungan bagi guru inklusi beserta dasar pasalnya dalam Permendikbudristek 48/2023.')}

<h2 id="sekolah">Pelatihan di tingkat sekolah</h2>
<p>Selain pelatihan resmi, sekolah dapat membangun pembelajaran guru secara internal. Cara ini tidak menggantikan jalur kompetensi khusus, tetapi membantu menerapkan hasil pelatihan sehari-hari. Bentuknya bisa sederhana, asalkan rutin dan berangkat dari kebutuhan nyata di kelas.</p>
<ol>
<li>Kumpulkan kasus yang paling sering membuat guru kesulitan, tanpa menyebut identitas anak.</li>
<li>Undang guru pendidikan khusus atau Unit Layanan Disabilitas sebagai narasumber.</li>
<li>Lanjutkan dengan praktik bersama, misalnya co-teaching di satu kelas selama beberapa minggu.</li>
<li>Lakukan observasi antarguru dengan fokus yang disepakati, lalu diskusikan hasilnya.</li>
<li>Dokumentasikan strategi yang berhasil agar bisa dipakai guru lain.</li>
<li>Jadwalkan pertemuan lanjutan untuk meninjau perubahan di kelas.</li>
</ol>
<p>Model mengajar bersama dibahas di artikel <a href="/artikel/co-teaching-dalam-kelas-inklusi">co-teaching dalam kelas inklusi</a>, sedangkan strategi melibatkan teman sebaya ada di <a href="/artikel/peer-tutoring-di-kelas-inklusi">peer tutoring di kelas inklusi</a>. Keduanya cocok dijadikan bahan praktik setelah pelatihan.</p>
<p>Jangan lupakan warga sekolah lain. Tenaga kependidikan seperti petugas perpustakaan, satpam, atau penjaga kantin juga berinteraksi dengan anak setiap hari. Pengenalan singkat tentang cara berkomunikasi dan menanggapi anak yang sedang kewalahan membantu seluruh sekolah menjadi lingkungan yang aman. Pasal 16 ayat (5) bahkan menyebut peningkatan kompetensi pendidik dan tenaga kependidikan sebagai fungsi Unit Layanan Disabilitas.</p>
${fig(`${IMG}/commons-guru-mengajar-proyektor-kelas-sd.webp`, 'Seorang guru berseragam cokelat menjelaskan materi lewat layar proyektor di depan murid SD yang duduk di bangku kayu', 'Seorang guru SD memakai proyektor untuk menyajikan materi. Variasi media seperti ini termasuk keterampilan menyesuaikan pembelajaran yang dilatih dalam pelatihan guru inklusi.', 'Foto: <a href="https://commons.wikimedia.org/wiki/File:Belajar_Menggunakan_Media_LCD_Poyektor.jpg" target="_blank" rel="nofollow noopener">Galeri ega</a> / Wikimedia Commons, <a href="https://creativecommons.org/licenses/by-sa/4.0" target="_blank" rel="nofollow noopener">CC BY-SA 4.0</a>')}

<h2 id="dampak">Mengukur dampak pelatihan</h2>
<p>Keberhasilan pelatihan tidak cukup diukur dari jumlah peserta atau sertifikat. Ukuran yang lebih bermakna adalah perubahan praktik di kelas. Apakah guru kini menyusun rencana individual? Apakah tugas dan penilaian sudah disesuaikan? Apakah anak berkebutuhan khusus lebih sering ikut kegiatan bersama teman? Pertanyaan seperti ini bisa dijawab dengan pengamatan kelas dan dokumen pembelajaran.</p>
<p>Dampak pelatihan juga bisa dilihat dari sisi orang tua dan anak. Komunikasi guru dengan orang tua menjadi lebih rutin, laporan kemajuan lebih jelas, dan anak merasa lebih nyaman di kelas. Daftar ukuran yang lebih lengkap dibahas di artikel <a href="/artikel/indikator-keberhasilan-sekolah-inklusi">indikator keberhasilan sekolah inklusi</a>, dan peran keluarga di <a href="/artikel/peran-orang-tua-pendidikan-inklusi">peran orang tua dalam pendidikan inklusi</a>.</p>
<p>Bagi orang tua, menanyakan pelatihan guru adalah pertanyaan yang wajar saat memilih sekolah. Tanyakan pelatihan apa yang sudah diikuti guru kelas, siapa yang mendampingi mereka, dan bagaimana sekolah memastikan hasil pelatihan dipakai di kelas. YUKA terbuka untuk berdiskusi tentang pendidikan inklusi bagi anak berkebutuhan khusus melalui halaman <a href="/kontak">kontak</a>.</p>

<h2 id="faq">Pertanyaan Umum tentang Pelatihan Guru Inklusi</h2>
${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('\n')}
`;

const meta = 'Pelatihan guru inklusi menurut Permendikbudristek 48/2023: jalur pendidikan dan pelatihan, isi magang, materi inti, dukungan ULD, dan cara mengukur dampaknya.';
const data = {
  slug,
  titleTag: 'Pelatihan Guru Inklusi: Jalur, Materi, dan Magang | YUKA',
  metaDesc: meta,
  keywords: 'pelatihan guru inklusi, pelatihan pendidikan inklusif, kompetensi guru inklusi, guru pendidikan khusus, magang guru inklusi',
  ogTitle: 'Pelatihan Guru Inklusi: Jalur, Materi, dan Magang',
  ogDesc: meta,
  h1: 'Pelatihan Guru Inklusi: Jalur Resmi, Materi Inti, dan Dukungan Setelahnya',
  crumb: 'Pelatihan Guru Inklusi',
  category: 'Pendidikan',
  datePublished: '2026-10-26T08:00:00+07:00',
  dateModified: '2026-10-26T08:00:00+07:00',
  dateDisplay: '26 Oktober 2026',
  readTime: '14 menit baca',
  image: { file: heroFile, w: 1200, h: 900, alt: 'Dua guru perempuan menulis di lembar kerja saat mengikuti pelatihan di sebuah ruangan berjendela kayu', caption: 'Guru di Kepulauan Tanimbar, Maluku, mengikuti pelatihan kurikulum dari pemerintah. Pelatihan guru inklusi juga memadukan materi, praktik, dan pendampingan.', credit },
  bodyHtml,
  faq,
  related: [
    { href: '/artikel/gpk-adalah', title: 'GPK Adalah', desc: 'Guru pembimbing khusus dan dasar aturannya.' },
    { href: '/artikel/co-teaching-dalam-kelas-inklusi', title: 'Co-Teaching dalam Kelas Inklusi', desc: 'Model, peran, dan evaluasi mengajar bersama.' },
    { href: '/artikel/classroom-management-kelas-inklusi', title: 'Classroom Management Kelas Inklusi', desc: 'Panduan guru mengelola kelas yang beragam.' },
  ],
  tags: ['GuruInklusi', 'PendidikanInklusi', 'PelatihanGuru'],
  sources: [
    { url: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023', label: 'Permendikbudristek No. 48 Tahun 2023 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas (Pasal 5, 8, 9, 10, 16, 18)' },
  ],
  sourcesCheckedNote: 'Seluruh pasal dibaca dari salinan PDF resmi JDIH BPK pada 19 Oktober 2026.',
};

if (require.main === module) {
  for (const [file, content] of Object.entries(diagrams)) fs.writeFileSync(path.join(ROOT, file), content);
  const size = imageSize(path.join(ROOT, heroFile));
  if (size.w !== 1200 || size.h !== 900) throw new Error('Hero wajib 1200x900.');
  fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), renderArticlePage(data));
  console.log(`Generated artikel/${slug}.html`);
}
module.exports = { data, faq, bodyHtml };

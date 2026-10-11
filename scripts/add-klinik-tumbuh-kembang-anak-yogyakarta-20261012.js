'use strict';
// Generator artikel: Klinik Tumbuh Kembang Anak Yogyakarta (Trello WWTqRrd5, tayang 2026-10-12).
// Setiap fasilitas, alamat, telepon, dan layanan dibaca dari TEKS situs resmi masing-masing
// pada 12 Oktober 2026 (lihat konstanta SRC). Permenkes 66/2014 berstatus "Berlaku" di JDIH BPK.
// Sengaja TIDAK mencantumkan tarif: tidak ada dokumen tarif resmi yang dicek berlaku untuk tiap layanan.
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'klinik-tumbuh-kembang-anak-yogyakarta';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const image = (file, alt, caption) => {
  const size = imageSize(path.join(ROOT, file));
  return { file, w: size.w, h: size.h, alt, caption, credit: CREDIT };
};
const fig = (file, alt, caption) => {
  const s = imageSize(path.join(ROOT, file));
  return `<figure class="article-inline-image"><img src="../${file}" alt="${esc(alt)}" loading="lazy" width="${s.w}" height="${s.h}"><figcaption>${caption} <span class="kredit">${CREDIT}</span></figcaption></figure>`;
};
const p = (text) => `<p>${text}</p>`;
const h2 = (id, text) => `<h2 id="${id}">${text}</h2>`;
const h3 = (text) => `<h3>${text}</h3>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((x) => `<li>${x}</li>`).join('')}</ol>`;
const a = (href, text) => `<a href="${href}">${text}</a>`;
const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const SRC = {
  jogjaRajal: 'https://rumahsakitjogja.jogjakota.go.id/pelayanan/rajal',
  jogjaRehab: 'https://rumahsakitjogja.jogjakota.go.id/pelayanan/rehab_medik',
  grhasiaAnak: 'https://grhasia.jogjaprov.go.id/layanan_detail/index?id_page=665&kategori=310',
  grhasiaPsikologi: 'https://grhasia.jogjaprov.go.id/layanan_detail/index?id_page=670&kategori=310',
  grhasiaRehab: 'https://grhasia.jogjaprov.go.id/layanan_detail/index?id_page=677&kategori=398',
  grhasiaJiwa: 'https://grhasia.jogjaprov.go.id/layanan_detail/index?id_page=667&kategori=310',
  sardjitoMcu: 'https://sardjito.go.id/layanan/mcu-anak',
  sardjitoKontak: 'https://sardjito.go.id/kontak',
  pku: 'https://rspkujogja.com/poliklinik/terapi-tumbuh-kembang-anak/',
  rsa: 'https://rsa.ugm.ac.id/rehabilitasi-medik-2/',
  permenkes66: 'https://peraturan.bpk.go.id/Details/154776/permenkes-no-66-tahun-2014',
  idaiGdd: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/mengenal-keterlambatan-perkembangan-umum-pada-anak',
  kiaKemenkes: 'https://ayosehat.kemkes.go.id/rahasia-anak-sehat-dan-cerdas-lakukan-stimulasi-tumbuh-kembang-dengan-buku-kia',
};

const hero = image(
  'Dokumentasi/artikel/floor-time-terapi-aktivitas-di-lantai.webp',
  'Kegiatan memeras jeruk lemon di lantai dengan baskom dan teko, wajah peserta tidak terlihat',
  'Kegiatan sehari-hari seperti memeras jeruk melatih koordinasi tangan dan kesabaran. Hal semacam ini yang biasanya diamati dalam asesmen tumbuh kembang.'
);

const bodyImages = {
  berdiri: 'Dokumentasi/artikel/latihan-fisioterapi-anak-di-rumah-pendampingan-berdiri.webp',
  menulis: 'Dokumentasi/artikel/strategi-mengajar-anak-autis-di-kelas-pendampingan.webp',
  meja: 'Dokumentasi/artikel/strategi-mengajar-anak-autis-di-kelas-meja-kerja.webp',
  plastisin: 'Dokumentasi/artikel/terapi-okupasi-untuk-anak-cerebral-palsy-dokumentasi.webp',
  catatan: 'Dokumentasi/artikel/meja-belajar-buku-dan-alat-tulis-anak.webp',
};

const faq = [
  {
    q: 'Di mana klinik tumbuh kembang anak milik pemerintah di Yogyakarta?',
    a: 'Dari situs resmi yang kami periksa pada 12 Oktober 2026, RSUD Kota Yogyakarta (Rumah Sakit Jogja) mencantumkan Klinik Tumbuh Kembang Anak di daftar klinik rawat jalannya, dan RS Jiwa Grhasia DIY mencantumkan Poliklinik Anak dengan layanan tumbuh kembang serta Rehabilitasi Medik dengan fisioterapi dan okupasi terapi tumbuh kembang anak. RSUP Dr. Sardjito menyediakan MCU Anak yang menyebut deteksi dini gangguan tumbuh kembang. Hubungi fasilitas dulu karena layanan dan jadwal dapat berubah.',
  },
  {
    q: 'Apakah harus ke rumah sakit dulu untuk memeriksa tumbuh kembang anak?',
    a: 'Tidak selalu. Permenkes 66 Tahun 2014 menyebut pemantauan tumbuh kembang dilakukan di fasilitas pelayanan kesehatan dasar, dan bila ditemukan kelainan, tenaga kesehatan wajib merujuk sesuai standar. Jadi Puskesmas atau dokter di fasilitas tingkat pertama adalah titik awal yang wajar, lalu rujukan ke rumah sakit bila diperlukan.',
  },
  {
    q: 'Apa bedanya klinik tumbuh kembang dengan tempat terapi anak?',
    a: 'Klinik tumbuh kembang berfokus pada pemantauan, deteksi, dan pemeriksaan untuk memahami kebutuhan anak, biasanya oleh dokter anak bersama psikolog dan terapis. Tempat terapi menjalankan program latihan, misalnya terapi wicara, okupasi, atau fisioterapi, berdasarkan hasil pemeriksaan tersebut. Di rumah sakit, keduanya sering berada di unit yang berbeda.',
  },
  {
    q: 'Kapan anak perlu diperiksakan ke klinik tumbuh kembang?',
    a: 'Periksakan bila anak belum mencapai kemampuan yang diharapkan untuk usianya, kehilangan kemampuan yang sebelumnya sudah bisa, atau ada kekhawatiran dari keluarga, guru, atau kader Posyandu. IDAI menjelaskan bahwa untuk mengetahui keterlambatan perkembangan diperlukan laporan orang tua dan pemeriksaan skrining perkembangan yang memakai alat yang sesuai.',
  },
  {
    q: 'Apakah layanan tumbuh kembang di rumah sakit bisa memakai BPJS Kesehatan?',
    a: 'Halaman Rehabilitasi Medik RS Jiwa Grhasia menyebut layanan fisioterapi, okupasi terapi, dan terapi wicaranya bisa diakses pasien BPJS. Untuk fasilitas lain, kami tidak menemukan keterangan tertulis yang spesifik. Peserta BPJS biasanya memulai dari fasilitas kesehatan tingkat pertama tempatnya terdaftar, jadi tanyakan alur rujukannya di sana sebelum datang ke rumah sakit.',
  },
  {
    q: 'Berapa biaya pemeriksaan di klinik tumbuh kembang anak Yogyakarta?',
    a: 'Kami sengaja tidak mencantumkan angka tarif. Tarif rumah sakit pemerintah diatur oleh peraturan daerah atau keputusan direksi yang dapat diganti, dan tarif rumah sakit swasta dapat berubah. Tanyakan rincian biaya konsultasi, asesmen, dan sesi terapi langsung ke bagian pendaftaran, lalu minta dalam bentuk tertulis.',
  },
  {
    q: 'Apa yang perlu dibawa saat pertama kali ke klinik tumbuh kembang?',
    a: 'Bawa Buku KIA atau catatan perkembangan anak, kartu identitas dan kartu jaminan kesehatan, surat rujukan bila ada, hasil pemeriksaan sebelumnya, serta catatan singkat tentang kekhawatiran keluarga dan contoh kejadian sehari-hari. Video pendek perilaku anak di rumah juga dapat membantu dokter atau terapis memahami situasinya.',
  },
  {
    q: 'Apakah YUKA bekerja sama dengan rumah sakit yang disebut di artikel ini?',
    a: 'Tidak. Daftar di artikel ini disusun dari informasi publik di situs resmi masing-masing fasilitas. Daftar ini bukan rekomendasi, bukan peringkat, dan tidak menunjukkan kerja sama dengan YUKA. YUKA adalah yayasan pendidikan inklusi, bukan fasilitas kesehatan.',
  },
];

const faqHtml = [
  h2('faq', 'Pertanyaan yang Sering Diajukan'),
  ...faq.map((f) => `${h3(f.q)}\n${p(f.a)}`),
].join('\n');

const toc = `<div class="toc"><h3>Daftar Isi</h3><ol>
<li><a href="#pengertian">Apa itu klinik tumbuh kembang anak</a></li>
<li><a href="#kapan">Kapan anak perlu diperiksakan</a></li>
<li><a href="#puskesmas">Mulai dari Puskesmas: SDIDTK</a></li>
<li><a href="#daftar">Layanan tumbuh kembang di rumah sakit Yogyakarta</a></li>
<li><a href="#alur">Alur dari skrining sampai terapi</a></li>
<li><a href="#asesmen">Apa yang terjadi saat asesmen</a></li>
<li><a href="#persiapan">Menyiapkan kunjungan pertama</a></li>
<li><a href="#biaya">Biaya dan jaminan kesehatan</a></li>
<li><a href="#menilai">Cara menilai layanan</a></li>
<li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
</ol></div>`;

const facilityTable = `<table>
<thead><tr><th>Fasilitas</th><th>Pengelola</th><th>Layanan terkait yang tercantum di situs resmi</th><th>Alamat dan kontak (sesuai situs)</th></tr></thead>
<tbody>
<tr><td>RSUD Kota Yogyakarta (Rumah Sakit Jogja)</td><td>Pemerintah Kota Yogyakarta</td><td>Klinik Tumbuh Kembang Anak, Klinik Anak, Pelayanan Psikologi, Rehabilitasi Medik (fisioterapi, okupasi terapi, terapi wicara)</td><td>Jl. Wirosaban No. 1, Yogyakarta. Telepon 0274-371195 / 386691 / 386692</td></tr>
<tr><td>RS Jiwa Grhasia DIY</td><td>Pemerintah Daerah DIY</td><td>Poliklinik Anak (layanan dan konsultasi tumbuh kembang), Klinik Psikologi (asesmen anak berkebutuhan khusus, asesmen kesulitan belajar), Rehabilitasi Medik (fisioterapi dan okupasi terapi tumbuh kembang anak, terapi wicara), Klinik Jiwa Anak dan Remaja</td><td>Jl. Kaliurang No. 17, Duwetsari, Pakembinangun, Pakem, Sleman 55582. Telepon (0274) 895143 / 895297</td></tr>
<tr><td>RSUP Dr. Sardjito</td><td>Kementerian Kesehatan</td><td>MCU Anak untuk memantau pertumbuhan dan perkembangan serta mendeteksi dini gangguan tumbuh kembang</td><td>Jl. Kesehatan No. 1, Sekip, Sinduadi, Yogyakarta 55284. Contact center 1500 705</td></tr>
<tr><td>RS PKU Muhammadiyah Yogyakarta</td><td>Swasta (Muhammadiyah)</td><td>Klinik Tumbuh Kembang, Terapi Tumbuh Kembang Anak (okupasi terapi, fisioterapi anak, terapi wicara, stimulasi sensori integrasi), Klinik Psikologi Klinis</td><td>Jl. KH. Ahmad Dahlan No. 20, Ngupasan, Gondomanan, Yogyakarta 55122. Call center 0274-512653 (ext. 118)</td></tr>
<tr><td>Rumah Sakit Akademik UGM</td><td>Universitas Gadjah Mada</td><td>Rehabilitasi Medik: dokter spesialis rehabilitasi medik, fisioterapi, okupasi terapi, terapi wicara, ortotis prostetis</td><td>Jl. Kabupaten (Lingkar Utara), Kronggahan, Trihanggo, Gamping, Sleman 55291. Pusat Layanan Informasi 0811 2856 210</td></tr>
</tbody>
</table>`;

const asesmenTable = `<table>
<thead><tr><th>Tenaga</th><th>Yang biasanya dinilai atau dikerjakan</th><th>Pertanyaan yang bisa Anda ajukan</th></tr></thead>
<tbody>
<tr><td>Dokter spesialis anak</td><td>Riwayat kesehatan, pertumbuhan, pemeriksaan fisik, kebutuhan pemeriksaan penunjang, dan rujukan ke anggota tim lain</td><td>Apa kemungkinan penyebab yang perlu disingkirkan dulu? Pemeriksaan apa yang benar-benar diperlukan?</td></tr>
<tr><td>Psikolog</td><td>Kemampuan berpikir, belajar, perilaku, emosi, dan interaksi sosial melalui wawancara, observasi, dan alat ukur</td><td>Alat ukur apa yang dipakai? Kapan laporan tertulisnya bisa diterima?</td></tr>
<tr><td>Terapis wicara</td><td>Pemahaman bahasa, cara anak menyampaikan keinginan, pengucapan, kelancaran bicara, dan kemampuan menelan</td><td>Target komunikasi apa yang paling penting untuk tiga bulan ke depan?</td></tr>
<tr><td>Terapis okupasi</td><td>Aktivitas sehari-hari, keterampilan tangan, kesiapan menulis, bermain, dan respons terhadap rangsang sensori</td><td>Latihan apa yang bisa dilakukan di rumah dan di sekolah?</td></tr>
<tr><td>Fisioterapis</td><td>Gerak, postur, keseimbangan, kekuatan otot, dan cara anak berpindah tempat</td><td>Bagaimana tanda anak terlalu lelah atau kesakitan saat latihan?</td></tr>
</tbody>
</table>`;

const statusBlock = `<div class="medical-review-status" style="margin:2rem 0;padding:1.25rem 1.5rem;background:#FFF8E6;border-left:4px solid #F4B41A;border-radius:10px;"><p style="margin:0;font-size:0.95rem;line-height:1.7;color:#333;"><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik YUKA dan <strong>belum ditinjau oleh dokter, terapis, atau psikolog berlisensi</strong>. Informasi fasilitas diambil dari situs resmi masing-masing pada 12 Oktober 2026 dan dapat berubah sewaktu-waktu. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk keputusan pemeriksaan dan terapi, ikuti saran tenaga kesehatan yang menangani anak.</p></div>`;

const disclaimer = `<div class="info-box"><h4>Baca ini sebelum melihat daftar</h4><p style="margin:0">Daftar di bawah ini <strong>bukan rekomendasi, bukan peringkat, dan bukan mitra YUKA</strong>. Kami hanya mencatat apa yang tertulis di situs resmi masing-masing fasilitas saat diperiksa pada 12 Oktober 2026. Kami tidak mencantumkan nama dokter atau terapis, dan tidak mencantumkan tarif. Layanan, jadwal, tenaga, dan syarat rujukan dapat berubah, jadi hubungi fasilitas sebelum datang.</p></div>`;

const bodyHtml = [
  `<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> Pemeriksaan tumbuh kembang anak di Yogyakarta bisa dimulai dari Puskesmas, yang menurut Permenkes 66 Tahun 2014 menjalankan stimulasi, deteksi, dan intervensi dini tumbuh kembang serta merujuk bila ada kelainan. Untuk pemeriksaan lanjutan, situs resmi RSUD Kota Yogyakarta mencantumkan Klinik Tumbuh Kembang Anak, RS Jiwa Grhasia DIY mencantumkan Poliklinik Anak dan Rehabilitasi Medik dengan terapi tumbuh kembang anak, dan RSUP Dr. Sardjito menyediakan MCU Anak. Selalu konfirmasi jadwal dan alur rujukan langsung ke fasilitasnya.</p></div>`,
  toc,

  h2('pengertian', 'Apa Itu Klinik Tumbuh Kembang Anak?'),
  p('Klinik tumbuh kembang anak adalah layanan yang membantu keluarga memahami apakah pertumbuhan dan perkembangan anak berjalan sesuai usianya. Pertumbuhan berkaitan dengan ukuran tubuh, seperti berat badan, tinggi badan, dan lingkar kepala. Perkembangan berkaitan dengan kemampuan, seperti bergerak, memakai tangan, memahami dan memakai bahasa, bermain, serta mengurus diri sendiri.'),
  p(`Di rumah sakit, layanan ini biasanya dipimpin dokter spesialis anak dan dapat melibatkan psikolog, terapis wicara, terapis okupasi, dan fisioterapis. Hasil pemeriksaan menjadi dasar keputusan berikutnya: cukup dipantau dan diberi stimulasi di rumah, perlu pemeriksaan tambahan, atau perlu program terapi. Karena itu, klinik tumbuh kembang berbeda dengan tempat terapi. Klinik membantu menjawab pertanyaan "apa yang dibutuhkan anak", sedangkan tempat terapi menjalankan latihan yang sudah direncanakan. Bila Anda sudah tahu jenis terapi yang dibutuhkan, panduan ${a('tempat-terapi-anak-jogja', 'tempat terapi anak di Jogja')} membahas pilihan lokasinya.`),
  p(`Satu hal yang sering terlupa: klinik tumbuh kembang tidak hanya untuk anak yang sudah memiliki diagnosis. Banyak keluarga datang karena ragu, misalnya anak belum mengucapkan kata pada usia yang diharapkan, sering jatuh, atau sulit mengikuti kegiatan kelompok. Datang lebih awal membantu keluarga mendapat kepastian, entah kekhawatirannya terbukti atau tidak.`),
  fig(bodyImages.plastisin, 'Tangan membentuk plastisin di atas alas silikon biru berpenggaris', 'Membentuk plastisin di atas alas berpenggaris. Kegiatan tangan seperti ini memberi gambaran tentang kekuatan dan ketelitian jari.'),

  h2('kapan', 'Kapan Anak Perlu Diperiksakan?'),
  p(`Setiap anak berkembang dengan kecepatan berbeda, tetapi ada batas usia tertentu ketika sebuah kemampuan seharusnya sudah muncul. ${ext(SRC.idaiGdd, 'Ikatan Dokter Anak Indonesia (IDAI)')} menjelaskan bahwa perkembangan anak terbagi dalam beberapa ranah, yaitu motorik kasar, motorik halus, bahasa atau bicara, dan personal sosial atau kemandirian. Keterlambatan dapat terjadi di satu ranah saja, atau di dua ranah atau lebih yang disebut keterlambatan perkembangan umum. IDAI juga menegaskan bahwa untuk mengetahuinya diperlukan laporan atau keluhan orang tua dan pemeriksaan skrining perkembangan dengan alat yang sesuai.`),
  p('Beberapa situasi yang layak dibicarakan dengan tenaga kesehatan:'),
  ul([
    `Anak belum mencapai kemampuan yang umumnya sudah dikuasai anak seusianya, misalnya duduk, berjalan, menunjuk, atau merangkai kata. Rinciannya ada di ${a('what-is-a-milestone-for-a-kid', 'penjelasan tentang milestone anak')}.`,
    'Anak kehilangan kemampuan yang sebelumnya sudah bisa dilakukan, misalnya kata yang dulu sering diucapkan tidak lagi muncul.',
    `Gerakan tampak kaku, lemas, atau tidak seimbang antara sisi kanan dan kiri. Lihat juga ${a('tanda-keterlambatan-motorik-kasar', 'tanda keterlambatan motorik kasar')} dan ${a('tanda-keterlambatan-motorik-halus', 'tanda keterlambatan motorik halus')}.`,
    'Anak jarang menoleh saat dipanggil, jarang berbagi perhatian, atau sangat sulit beradaptasi dengan perubahan kecil.',
    'Guru, kader Posyandu, atau tenaga kesehatan menyampaikan kekhawatiran yang sama dengan yang Anda rasakan.',
  ]),
  p(`Daftar ini bukan alat diagnosis. Gunakan sebagai bahan percakapan. Untuk membantu menyusun catatan, Anda bisa mencoba ${a('../tools/skrining-deteksi-dini-tumbuh-kembang-anak-milestone-red-flag-abk', 'alat bantu skrining milestone dan tanda waspada')} di situs ini, lalu membawa hasilnya ke petugas kesehatan. Langkah-langkah lengkapnya ada di ${a('langkah-langkah-deteksi-dini-tumbuh-kembang-anak', 'panduan deteksi dini tumbuh kembang anak')}.`),

  h2('puskesmas', 'Mulai dari Puskesmas: Layanan SDIDTK'),
  p(`Banyak keluarga langsung mencari rumah sakit besar, padahal titik awal yang diatur pemerintah ada di layanan kesehatan dasar. ${ext(SRC.permenkes66, 'Permenkes Nomor 66 Tahun 2014')} tentang Pemantauan Pertumbuhan, Perkembangan, dan Gangguan Tumbuh Kembang Anak, yang berstatus berlaku di JDIH BPK saat kami periksa, mengatur beberapa hal penting:`),
  ul([
    '<strong>Pasal 4 ayat (1):</strong> pemantauan pertumbuhan, perkembangan, dan gangguan tumbuh kembang anak dilakukan di fasilitas pelayanan kesehatan dasar dan di taman kanak-kanak.',
    '<strong>Pasal 5:</strong> pemantauan pertumbuhan dilakukan pada anak usia 0 sampai 72 bulan melalui penimbangan berat badan setiap bulan dan pengukuran tinggi badan setiap 3 bulan. Pemantauan perkembangan dilakukan setiap 3 bulan pada usia 0 sampai 12 bulan dan setiap 6 bulan pada usia 12 sampai 72 bulan.',
    '<strong>Pasal 6:</strong> pemantauan diselenggarakan melalui stimulasi yang memadai, deteksi dini, dan intervensi dini gangguan tumbuh kembang. Rangkaian inilah yang dikenal sebagai SDIDTK.',
    '<strong>Pasal 7:</strong> bila ditemukan kelainan tumbuh kembang pada anak balita, tenaga kesehatan harus melakukan rujukan sesuai standar.',
  ]),
  p('Artinya, Puskesmas di wilayah tempat tinggal Anda, baik di Kota Yogyakarta, Sleman, Bantul, Kulon Progo, maupun Gunungkidul, adalah pintu masuk yang wajar. Tanyakan kapan jadwal pemeriksaan tumbuh kembang anak dan apakah perlu membuat janji. Bila petugas menemukan hal yang perlu diperiksa lebih lanjut, mereka dapat membuat rujukan ke rumah sakit.'),
  p(`Posyandu juga berperan. ${ext(SRC.kiaKemenkes, 'Kementerian Kesehatan')} mengingatkan bahwa Buku KIA memuat ceklis perkembangan sesuai usia, dan orang tua dapat meminta bantuan kader saat hari buka Posyandu bila ragu mengisinya. Ceklis ini membantu Anda membawa data yang rapi saat bertemu dokter.`),
  fig(bodyImages.berdiri, 'Tangan orang dewasa menopang punggung anak yang berdiri, wajah anak tidak terlihat', 'Pendampingan saat berdiri. Cara anak menjaga keseimbangan termasuk hal yang diamati dalam pemeriksaan gerak.'),

  h2('daftar', 'Layanan Tumbuh Kembang di Rumah Sakit Yogyakarta'),
  disclaimer,
  p('Kami mengutamakan rumah sakit milik pemerintah karena umumnya menjadi tujuan rujukan dari Puskesmas. Dua rumah sakit non pemerintah ditambahkan karena halaman resminya merinci layanan tumbuh kembang dengan jelas. Tabel berikut merangkum apa yang tertulis di situs resmi masing-masing.'),
  facilityTable,

  h3('RSUD Kota Yogyakarta (Rumah Sakit Jogja)'),
  p(`Halaman ${ext(SRC.jogjaRajal, 'Rawat Jalan')} rumah sakit milik Pemerintah Kota Yogyakarta ini mencantumkan Klinik Tumbuh Kembang Anak, Klinik Anak, dan Pelayanan Psikologi dalam daftar kliniknya. Halaman ${ext(SRC.jogjaRehab, 'Rehab Medik')} menjelaskan tiga layanan: fisioterapi, okupasi terapi, dan terapi wicara. Pada bagian okupasi terapi, keterlambatan tumbuh kembang disebut sebagai salah satu kondisi yang dilayani. Situs yang sama mencantumkan jam pendaftaran klinik pagi Senin sampai Kamis pukul 07.15 sampai 11.00 WIB dan Jumat sampai Sabtu pukul 07.15 sampai 10.00 WIB, dengan catatan jadwal dapat berubah.`),

  h3('RS Jiwa Grhasia DIY'),
  p(`Rumah sakit milik Pemerintah Daerah DIY di Pakem, Sleman ini tidak hanya melayani kesehatan jiwa. Halaman ${ext(SRC.grhasiaAnak, 'Poliklinik Anak')} menyebut klinik anak memberikan layanan tumbuh kembang serta konsultasi terkait tumbuh kembang anak. Halaman ${ext(SRC.grhasiaPsikologi, 'Klinik Psikologi')} mencantumkan asesmen anak berkebutuhan khusus, asesmen kesulitan belajar, dan penelusuran potensi anak. Halaman ${ext(SRC.grhasiaRehab, 'Rehabilitasi Medik')} merinci fisioterapi tumbuh kembang anak, okupasi terapi termasuk terapi preschooling dan terapi tumbuh kembang anak, serta terapi wicara untuk gangguan bahasa, bicara, dan menelan, dengan keterangan bisa diakses pasien BPJS. Halaman ${ext(SRC.grhasiaJiwa, 'Klinik Jiwa')} juga menyebut Klinik Jiwa Anak dan Remaja yang dilayani subspesialis.`),

  h3('RSUP Dr. Sardjito'),
  p(`Rumah sakit vertikal Kementerian Kesehatan ini adalah rujukan tingkat lanjut di DIY. Di situs resminya, kami menemukan layanan ${ext(SRC.sardjitoMcu, 'MCU Anak')} yang dirancang untuk memantau pertumbuhan, perkembangan, dan kondisi kesehatan anak, termasuk mendeteksi dini gangguan tumbuh kembang. Kami tidak menemukan halaman yang merinci klinik tumbuh kembang atau unit terapi anak di situs tersebut, jadi tanyakan langsung ke contact center. ${ext(SRC.sardjitoKontak, 'Halaman kontak')} mencantumkan jam rawat jalan Senin sampai Jumat pukul 08.00 sampai 16.00.`),

  h3('RS PKU Muhammadiyah Yogyakarta'),
  p(`Halaman ${ext(SRC.pku, 'Terapi Tumbuh Kembang Anak')} rumah sakit swasta ini menyebut layanannya ditujukan bagi anak dengan keterlambatan perkembangan, gangguan motorik halus dan kasar, gangguan bicara dan bahasa, spektrum autisme, ADHD, hingga gangguan sensorik. Setiap anak disebut menjalani asesmen komprehensif lebih dulu, lalu program dapat meliputi terapi okupasi, fisioterapi anak, terapi wicara, dan stimulasi sensori integrasi. Daftar polikliniknya juga memuat Klinik Tumbuh Kembang dan Klinik Psikologi Klinis.`),

  h3('Rumah Sakit Akademik UGM'),
  p(`Halaman ${ext(SRC.rsa, 'Rehabilitasi Medik')} rumah sakit pendidikan milik Universitas Gadjah Mada ini menyebut timnya terdiri dari dokter spesialis rehabilitasi medik sebagai koordinator, fisioterapi, terapi okupasi, terapi wicara, dan ortotis prostetis. Halaman tersebut juga mencantumkan jumlah tenaganya, yaitu satu dokter spesialis rehabilitasi medik, tiga fisioterapis, satu okupasi terapis, satu terapis wicara, dan satu ortotis prostetis. Jumlah tenaga yang terbatas berarti antrean mungkin panjang, jadi tanyakan ketersediaan jadwal untuk anak.`),
  p('Kami tidak memasukkan klinik atau rumah terapi swasta perorangan karena sulit memverifikasi izin dan tenaganya dari sumber publik. Bila Anda mempertimbangkan layanan seperti itu, pakai daftar pertanyaan di bagian penilaian layanan di bawah.'),
  fig(bodyImages.menulis, 'Tangan menulis di atas kertas pada meja lipat kecil dengan buku hijau di lantai berkarpet', 'Kegiatan menulis di meja lipat. Kesiapan menulis dan cara memegang alat tulis sering dinilai oleh terapis okupasi.'),

  h2('alur', 'Alur dari Skrining sampai Terapi'),
  p('Setiap fasilitas punya prosedurnya sendiri, tetapi alurnya umumnya seperti ini:'),
  ol([
    '<strong>Pemantauan di rumah dan Posyandu.</strong> Isi ceklis perkembangan di Buku KIA dan catat hal yang membuat Anda khawatir.',
    '<strong>Pemeriksaan di Puskesmas atau dokter tingkat pertama.</strong> Petugas melakukan skrining. Bila hasilnya meragukan atau menyimpang, mereka menentukan apakah perlu stimulasi tambahan dan pemeriksaan ulang, atau rujukan.',
    '<strong>Pemeriksaan dokter spesialis anak.</strong> Dokter menilai riwayat, pertumbuhan, dan kondisi fisik, lalu menentukan pemeriksaan lanjutan.',
    '<strong>Asesmen oleh tim.</strong> Psikolog atau terapis menilai area yang perlu dukungan. Satu kunjungan sering belum cukup.',
    '<strong>Rencana dan program terapi.</strong> Program berisi tujuan yang dapat diamati, jadwal, dan latihan di rumah.',
    '<strong>Evaluasi berkala.</strong> Rencana ditinjau ulang. Tujuan diganti bila sudah tercapai atau bila strategi tidak berhasil.',
  ]),
  p(`Bila anak sudah bersekolah, libatkan guru sejak awal. Catatan guru tidak menggantikan pemeriksaan, tetapi membantu dokter dan terapis melihat anak di lingkungan yang berbeda. Gambaran berbagai jenis terapi dan fungsinya ada di ${a('terapi-anak-untuk-apa', 'penjelasan terapi anak untuk apa saja')}.`),

  h2('asesmen', 'Apa yang Terjadi Saat Asesmen?'),
  p('Asesmen yang baik dimulai dengan mendengarkan keluarga. Dokter atau terapis akan bertanya tentang kehamilan dan kelahiran, riwayat sakit, kemampuan anak sekarang, rutinitas harian, dan apa yang paling ingin keluarga ubah. Setelah itu, anak diamati saat bermain atau mengerjakan tugas sederhana. Beberapa tes memakai alat ukur baku, sehingga petugas perlu menjelaskan apa yang diukur dan apa batasnya.'),
  p('Tabel berikut menggambarkan peran yang umum di tim tumbuh kembang. Tidak semua anak membutuhkan semua tenaga ini, dan tidak semua fasilitas memiliki seluruhnya.'),
  asesmenTable,
  p(`Mintalah hasil asesmen dalam bentuk tertulis. Laporan yang baik menjelaskan kekuatan anak, area yang perlu dukungan, saran tindak lanjut, dan kapan evaluasi berikutnya. Untuk gambaran tes psikologi anak, lihat ${a('tes-psikolog-anak-bayar-berapa', 'panduan tes psikolog anak')}.`),
  fig(bodyImages.meja, 'Meja lipat dengan kotak manik-manik dan gunting, peserta duduk di lantai tanpa wajah terlihat', 'Meja kerja dengan manik-manik dan gunting. Kegiatan yang membutuhkan ketelitian membantu terapis melihat koordinasi mata dan tangan.'),

  h2('persiapan', 'Menyiapkan Kunjungan Pertama'),
  p('Kunjungan pertama sering terasa singkat. Persiapan sederhana membantu waktu konsultasi terpakai dengan baik:'),
  ul([
    '<strong>Buku KIA atau catatan perkembangan.</strong> Tandai bagian ceklis yang belum tercapai.',
    '<strong>Dokumen administrasi.</strong> Kartu identitas, kartu keluarga, kartu jaminan kesehatan, dan surat rujukan bila memakai BPJS.',
    '<strong>Hasil pemeriksaan sebelumnya.</strong> Termasuk laporan dari sekolah, terapis lain, atau pemeriksaan pendengaran dan penglihatan.',
    '<strong>Catatan kejadian sehari-hari.</strong> Tulis contoh konkret: kapan terjadi, berapa lama, dan apa yang sudah dicoba.',
    '<strong>Video pendek.</strong> Rekaman anak saat makan, bermain, atau berkomunikasi di rumah dapat membantu, karena anak sering bersikap berbeda di ruang periksa.',
    '<strong>Daftar pertanyaan.</strong> Tulis tiga pertanyaan terpenting agar tidak lupa.',
  ]),
  p('Siapkan juga anak. Ceritakan dengan bahasa sederhana bahwa ia akan bertemu dokter dan bermain. Bawa camilan, minuman, dan mainan kecil yang menenangkan. Bila anak mudah lelah atau gelisah di tempat ramai, tanyakan apakah ada jam kunjungan yang lebih sepi.'),
  fig(bodyImages.catatan, 'Meja belajar kecil dengan buku catatan, pena, dan mushaf terbuka', 'Buku catatan dan pena di meja belajar. Catatan orang tua tentang kejadian sehari-hari sangat membantu saat konsultasi.'),

  h2('biaya', 'Biaya dan Jaminan Kesehatan'),
  p('Kami tidak mencantumkan angka tarif di artikel ini. Tarif rumah sakit pemerintah ditetapkan melalui peraturan daerah, peraturan kepala daerah, atau keputusan direksi yang dapat diganti, sedangkan tarif rumah sakit swasta dapat berubah sewaktu-waktu. Mengutip angka dari dokumen yang sudah tidak berlaku justru bisa menyesatkan. Tanyakan langsung ke bagian pendaftaran dan minta rincian tertulis untuk konsultasi dokter, asesmen psikologi, sesi terapi, dan laporan.'),
  p(`Untuk peserta BPJS Kesehatan, mulailah dari fasilitas kesehatan tingkat pertama tempat anak terdaftar dan tanyakan alur rujukannya. Dari halaman yang kami periksa, hanya RS Jiwa Grhasia yang secara tertulis menyebut layanan rehabilitasi mediknya bisa diakses pasien BPJS. Gambaran umum biaya terapi dan cara merencanakannya ada di ${a('berapa-biaya-terapi-anak-berkebutuhan-khusus', 'panduan biaya terapi anak berkebutuhan khusus')}. Bila anak memiliki disabilitas, pelajari juga hak layanan di ${a('perda-disabilitas-diy-yogyakarta', 'Perda Disabilitas DIY')}.`),

  h2('menilai', 'Cara Menilai Layanan Tumbuh Kembang'),
  p('Baik di rumah sakit pemerintah maupun swasta, beberapa pertanyaan berikut membantu Anda menilai kualitas layanan:'),
  ul([
    'Siapa yang akan memeriksa anak, dan apa latar belakang profesinya?',
    'Bagaimana hasil asesmen disampaikan, dan apakah ada laporan tertulis?',
    'Apa tujuan terapi yang dapat diamati, dan kapan dievaluasi?',
    'Apa yang bisa keluarga lakukan di rumah di antara sesi?',
    'Bagaimana komunikasi dengan sekolah atau guru pendamping?',
  ]),
  p('Waspadai janji sembuh total dalam jumlah sesi tertentu, larangan berkonsultasi dengan dokter lain, keharusan membeli produk mahal, atau tekanan agar segera membayar paket panjang. Layanan yang baik terbuka tentang batasnya dan tidak keberatan bila Anda mencari pendapat kedua.'),
  p(`YUKA adalah yayasan pendidikan inklusi, bukan fasilitas kesehatan, dan tidak bekerja sama dengan rumah sakit yang disebut di atas. Bila Anda mencari dukungan pendidikan untuk anak setelah pemeriksaan, kenali ${a('../sekolah-inklusi-sleman', 'sekolah inklusi di Sleman')} atau ${a('../yayasan-abk-yogyakarta', 'yayasan ABK di Yogyakarta')}. Keluarga di Solo Raya dapat membaca ${a('terapis-anak-berkebutuhan-khusus-di-solo', 'panduan mencari terapis anak di Solo')}.`),
  statusBlock,
  faqHtml,
].join('\n');

const article = {
  slug,
  titleTag: 'Klinik Tumbuh Kembang Anak Yogyakarta: Daftar dan Alur',
  metaDesc: 'Daftar klinik tumbuh kembang anak di Yogyakarta dari situs resmi RS, alur dari Puskesmas (SDIDTK), persiapan asesmen, dan cara menilai layanan. Cek di sini.',
  keywords: 'klinik tumbuh kembang anak yogyakarta, klinik tumbuh kembang jogja, tumbuh kembang anak rsud kota yogyakarta, rs grhasia tumbuh kembang, sdidtk puskesmas yogyakarta, terapi tumbuh kembang anak jogja',
  ogTitle: 'Klinik Tumbuh Kembang Anak Yogyakarta: Daftar Layanan Resmi dan Alur Rujukan',
  ogDesc: 'Layanan tumbuh kembang di RSUD Kota Yogyakarta, RS Jiwa Grhasia, RSUP Dr. Sardjito, dan lainnya, dicek dari situs resmi 12 Oktober 2026, plus alur dari Puskesmas.',
  datePublished: '2026-10-12',
  dateModified: '2026-10-12',
  dateDisplay: '12 Okt 2026',
  readTime: '12 menit baca',
  category: 'Pendidikan',
  h1: 'Klinik Tumbuh Kembang Anak Yogyakarta: Daftar Layanan Resmi, Alur Rujukan, dan Persiapannya',
  crumb: 'Klinik Tumbuh Kembang Anak Yogyakarta',
  parent: { href: 'langkah-langkah-deteksi-dini-tumbuh-kembang-anak', name: 'Deteksi Dini Tumbuh Kembang' },
  about: ['Tumbuh kembang anak', 'Deteksi dini', 'Yogyakarta'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'tempat-terapi-anak-jogja', title: 'Tempat Terapi Anak Jogja', desc: 'Pilihan tempat terapi anak di Yogyakarta dan cara memilihnya.' },
    { href: 'langkah-langkah-deteksi-dini-tumbuh-kembang-anak', title: 'Langkah Deteksi Dini Tumbuh Kembang Anak', desc: 'Cara memantau tumbuh kembang anak dengan Buku KIA dan skrining.' },
    { href: 'terapi-anak-untuk-apa', title: 'Terapi Anak untuk Apa?', desc: 'Fungsi terapi wicara, okupasi, fisioterapi, dan terapi lain bagi anak.' },
    { href: 'terapis-anak-berkebutuhan-khusus-di-solo', title: 'Terapis Anak Berkebutuhan Khusus di Solo', desc: 'Jalur mencari layanan terapi dan fasilitas publik di Solo Raya.' },
  ],
  tags: ['TumbuhKembang', 'Yogyakarta', 'DeteksiDini', 'SDIDTK'],
  sources: [
    { url: SRC.jogjaRajal, label: 'RSUD Kota Yogyakarta, Pelayanan Rawat Jalan (daftar Klinik Tumbuh Kembang Anak, Pelayanan Psikologi)' },
    { url: SRC.jogjaRehab, label: 'RSUD Kota Yogyakarta, Pelayanan Rehab Medik (fisioterapi, okupasi terapi, terapi wicara)' },
    { url: SRC.grhasiaAnak, label: 'RS Jiwa Grhasia DIY, Poliklinik Anak' },
    { url: SRC.grhasiaPsikologi, label: 'RS Jiwa Grhasia DIY, Klinik Psikologi' },
    { url: SRC.grhasiaRehab, label: 'RS Jiwa Grhasia DIY, Rehabilitasi Medik' },
    { url: SRC.grhasiaJiwa, label: 'RS Jiwa Grhasia DIY, Poliklinik Spesialis Jiwa (Klinik Jiwa Anak dan Remaja)' },
    { url: SRC.sardjitoMcu, label: 'RSUP Dr. Sardjito, MCU Anak' },
    { url: SRC.sardjitoKontak, label: 'RSUP Dr. Sardjito, Hubungi Kami' },
    { url: SRC.pku, label: 'RS PKU Muhammadiyah Yogyakarta, Terapi Tumbuh Kembang Anak' },
    { url: SRC.rsa, label: 'Rumah Sakit Akademik UGM, Rehabilitasi Medik' },
    { url: SRC.permenkes66, label: 'JDIH BPK, Permenkes Nomor 66 Tahun 2014 (Pasal 4 sampai 8), status Berlaku' },
    { url: SRC.idaiGdd, label: 'IDAI, Mengenal Keterlambatan Perkembangan Umum pada Anak' },
    { url: SRC.kiaKemenkes, label: 'Kemenkes Ayo Sehat, Stimulasi Tumbuh Kembang dengan Buku KIA' },
  ],
  sourcesCheckedNote: 'Alamat, telepon, dan layanan fasilitas dibaca langsung dari situs resmi masing-masing pada 12 Oktober 2026. Status Permenkes 66/2014 dicek di JDIH BPK pada tanggal yang sama. Daftar fasilitas bukan rekomendasi dan bukan mitra YUKA.',
};

const html = renderArticlePage(article);
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

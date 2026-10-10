'use strict';
// Generator artikel: hak pendidikan anak disabilitas intelektual (cycle #76, tayang 2026-10-15).
// Tidak menulis kartu ke blog.html: kartu ditambahkan workflow publish-scheduled saat tanggal tayang.
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'hak-pendidikan-anak-disabilitas-intelektual';
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

const hero = image(
  'Dokumentasi/museum-gunung-merapi-keluarga-perjalanan-dalam-mobil-002.webp',
  'Rombongan anak, remaja, dan pendamping duduk bersama di dalam kendaraan saat perjalanan kegiatan YUKA',
  'Rombongan anak dan pendamping dalam perjalanan menuju kegiatan luar kelas. Foto ini dokumentasi kegiatan YUKA, bukan ilustrasi kasus hukum tertentu.'
);

const bodyImages = {
  group: 'Dokumentasi/candi-plaosan-anak-anak-wisata-candi-borobudur-109.webp',
  costume: 'Dokumentasi/candi-plaosan-grup-wisatawan-kostum-tradisional-candi-012.webp',
  companion: 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-077.webp',
  dance: 'Dokumentasi/candi-plaosan-penari-tradisional-candi-borobudur-064.webp',
  practice: 'Dokumentasi/candi-plaosan-wisatawan-foto-candi-borobudur-047.webp',
};

const faq = [
  {
    q: 'Apakah anak disabilitas intelektual boleh bersekolah di sekolah umum?',
    a: 'Boleh. Pasal 10 huruf a UU Nomor 8 Tahun 2016 menyebut hak mendapatkan pendidikan bermutu pada satuan pendidikan di semua jenis, jalur, dan jenjang secara inklusif dan khusus. Pasal 40 ayat (2) juga menyatakan pendidikan untuk penyandang disabilitas dilaksanakan melalui pendidikan inklusif dan pendidikan khusus, sehingga sekolah umum yang menyelenggarakan pendidikan inklusif adalah salah satu pilihan yang sah.',
  },
  {
    q: 'Siapa yang menetapkan bahwa anak termasuk penyandang disabilitas intelektual?',
    a: 'Pasal 4 ayat (2) UU Nomor 8 Tahun 2016 menyebut ragam disabilitas ditetapkan oleh tenaga medis. PP Nomor 13 Tahun 2020 Pasal 9 ayat (5) merinci tenaga medis itu adalah dokter dan/atau dokter spesialis. Ragam disabilitas juga dapat dibuktikan dengan kartu penyandang disabilitas dari kementerian di bidang sosial.',
  },
  {
    q: 'Apakah kartu penyandang disabilitas wajib untuk mendaftar sekolah?',
    a: 'PP Nomor 13 Tahun 2020 Pasal 9 ayat (7) menyebut ragam disabilitas juga dapat dibuktikan dengan kartu penyandang disabilitas. Kata "juga dapat" menunjukkan kartu adalah salah satu alat bukti, di samping keterangan dokter atau dokter spesialis. Tanyakan kepada sekolah dokumen mana yang mereka minta, lalu siapkan yang paling mudah Anda peroleh.',
  },
  {
    q: 'Apakah akomodasi yang layak berarti standar belajar anak diturunkan?',
    a: 'Tidak sesederhana itu. PP Nomor 13 Tahun 2020 mendefinisikan akomodasi yang layak sebagai modifikasi dan penyesuaian yang tepat dan diperlukan agar hak dapat dinikmati berdasarkan kesetaraan. Untuk peserta didik dengan hambatan intelektual, Permendikbudristek Nomor 48 Tahun 2023 Pasal 11 ayat (4) mengatur modifikasi standar kompetensi lulusan, isi, proses, dan penilaian agar sesuai kemampuan anak.',
  },
  {
    q: 'Seperti apa ijazah anak disabilitas intelektual?',
    a: 'Pasal 12 huruf l PP Nomor 13 Tahun 2020 menyebut salah satu bentuk akomodasi adalah ijazah dan/atau sertifikat kompetensi yang menginformasikan capaian kemampuan peserta didik penyandang disabilitas intelektual dalam bentuk deskriptif dan angka. Lampiran Permendikbudristek Nomor 48 Tahun 2023 juga menyebut sekolah dapat mengeluarkan surat keterangan tentang ragam disabilitas dan capaian kemampuan.',
  },
  {
    q: 'Apakah anak disabilitas intelektual termasuk dalam program wajib belajar 12 tahun?',
    a: 'Ya. Pasal 40 ayat (3) UU Nomor 8 Tahun 2016 mewajibkan pemerintah dan pemerintah daerah mengikutsertakan anak penyandang disabilitas dalam program wajib belajar 12 tahun. Ayat (4) menambahkan bahwa pemerintah daerah wajib mengutamakan anak penyandang disabilitas bersekolah di lokasi yang dekat tempat tinggalnya.',
  },
  {
    q: 'Ke mana orang tua bisa mengadu bila akomodasi tidak diberikan?',
    a: 'Pasal 27 Permendikbudristek Nomor 48 Tahun 2023 menyebut masyarakat dapat menyampaikan pengaduan kepada Menteri, gubernur, bupati/wali kota, dan/atau komisi nasional disabilitas. Pengaduan disampaikan tertulis dengan identitas pelapor, identitas terlapor, serta keterangan berisi fakta, data, atau petunjuk pelanggaran. Identitas pelapor dilindungi sesuai peraturan.',
  },
  {
    q: 'Apa peran Unit Layanan Disabilitas bagi anak di SD, SMP, dan SMA?',
    a: 'Menurut PP Nomor 13 Tahun 2020, Unit Layanan Disabilitas untuk jenjang PAUD formal, pendidikan dasar, dan menengah dibentuk melalui penguatan fungsi perangkat daerah di bidang pendidikan. Tugasnya antara lain analisa kebutuhan, memberi rekomendasi, pelatihan, pendampingan, serta pengawasan dan evaluasi. Unit ini juga memfasilitasi asesmen fungsional yang dilakukan sekolah.',
  },
];

const faqHtml = `<div class="faq-list"><h2 id="faq">Pertanyaan yang Sering Diajukan</h2>${faq.map((f) => `<details><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div>`;

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> anak disabilitas intelektual punya hak yang sama untuk bersekolah. UUD 1945 Pasal 31 menjamin hak setiap warga negara atas pendidikan, UU Nomor 8 Tahun 2016 Pasal 10 menjamin pendidikan bermutu secara inklusif maupun khusus beserta akomodasi yang layak, dan PP Nomor 13 Tahun 2020 Pasal 12 merinci bentuk akomodasinya, misalnya fleksibilitas materi, evaluasi, masa studi, dan ijazah yang menjelaskan capaian anak. Orang tua dapat memilih sekolah inklusi atau sekolah khusus, meminta asesmen fungsional, dan mengadu secara tertulis bila hak ini diabaikan.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#siapa">Siapa yang disebut penyandang disabilitas intelektual?</a></li><li><a href="#dasar-hukum">Dasar hukum hak pendidikan</a></li><li><a href="#kewajiban">Kewajiban pemerintah dan sekolah</a></li><li><a href="#pilihan">Pilihan layanan pendidikan</a></li><li><a href="#akomodasi">Bentuk akomodasi yang layak</a></li><li><a href="#asesmen">Asesmen fungsional dan modifikasi kurikulum</a></li><li><a href="#uld">Peran Unit Layanan Disabilitas</a></li><li><a href="#dokumen">Dokumen yang perlu disiapkan</a></li><li><a href="#ditolak">Langkah bila hak anak ditolak</a></li><li><a href="#berpusat">Menjaga hak tetap berpusat pada anak</a></li><li><a href="#faq">Pertanyaan yang sering diajukan</a></li></ol></div>',

  h2('siapa', 'Siapa yang Disebut Penyandang Disabilitas Intelektual dalam Hukum?'),
  p(`Pasal 4 ayat (1) UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas membagi ragam disabilitas menjadi empat: fisik, intelektual, mental, dan sensorik. Penjelasan pasal tersebut mengartikan penyandang disabilitas intelektual sebagai terganggunya fungsi pikir karena tingkat kecerdasan di bawah rata-rata, antara lain lambat belajar, disabilitas grahita, dan down syndrom. Jadi, istilah yang di sekolah sering disebut ${a('tunagrahita-adalah', 'tunagrahita')} berada dalam ragam ini.`),
  p('Ayat (2) pasal yang sama menyebut ragam disabilitas dapat dialami secara tunggal, ganda, atau multi dalam jangka waktu lama, dan ditetapkan oleh tenaga medis. PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas memperjelas bahwa tenaga medis itu adalah dokter dan/atau dokter spesialis. Dokter tersebut dapat disediakan oleh sekolah penyelenggara pendidikan inklusif, Unit Layanan Disabilitas, atau orang tua.'),
  p(`Selain keterangan dokter, Pasal 9 ayat (7) PP 13/2020 menyebut ragam disabilitas juga dapat dibuktikan dengan ${a('kartu-disabilitas', 'kartu penyandang disabilitas')} dari kementerian di bidang sosial. Bagi orang tua, artinya ada lebih dari satu jalan untuk menunjukkan kebutuhan anak. Untuk memahami kondisinya dari sisi perkembangan, baca juga ${a('disabilitas-intelektual', 'panduan disabilitas intelektual')} dan ${a('tunagrahita-ringan-sedang-berat-perbedaan', 'perbedaan tunagrahita ringan, sedang, dan berat')}. Label hukum bukan untuk membatasi anak, melainkan pintu agar dukungan yang menjadi haknya dapat diminta secara resmi.`),
  fig(bodyImages.group, 'Sekelompok anak dan pendamping berpose bersama di tangga sebuah candi saat kegiatan wisata edukasi', 'Anak dan pendamping berfoto bersama dalam kegiatan wisata edukasi YUKA di kawasan candi. Setiap anak membawa kebutuhan belajar yang berbeda, dan hukum mengakui keragaman itu.'),

  h2('dasar-hukum', 'Dasar Hukum Hak Pendidikan Anak Disabilitas Intelektual'),
  p('Hak pendidikan anak disabilitas intelektual tidak bersandar pada satu aturan saja. Ia berlapis, mulai dari konstitusi sampai peraturan menteri. Pasal 31 ayat (1) UUD 1945 menyatakan setiap warga negara berhak mendapat pendidikan, dan ayat (2) menyatakan setiap warga negara wajib mengikuti pendidikan dasar dan pemerintah wajib membiayainya. Kata "setiap" tidak mengecualikan anak dengan kecerdasan di bawah rata-rata.'),
  p('UU Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional Pasal 5 ayat (1) menegaskan hak yang sama atas pendidikan bermutu. Ayat (2) menyebut warga negara yang memiliki kelainan fisik, emosional, mental, intelektual, dan/atau sosial berhak memperoleh pendidikan khusus. Pasal 32 ayat (1) mengartikan pendidikan khusus sebagai pendidikan bagi peserta didik yang memiliki tingkat kesulitan dalam mengikuti proses pembelajaran.'),
  p(`Lapisan berikutnya datang dari ${a('uu-no-19-tahun-2011-tentang-apa', 'UU Nomor 19 Tahun 2011')}, yang mengesahkan Konvensi Hak-Hak Penyandang Disabilitas (CRPD). Pasal 24 konvensi itu meminta negara memastikan anak penyandang disabilitas tidak dikecualikan dari sistem pendidikan umum atas dasar disabilitas, dan bahwa akomodasi yang layak sesuai kebutuhan individu disediakan. Ringkasan hak ABK secara umum ada di artikel ${a('apa-saja-hak-anak-berkebutuhan-khusus', 'hak anak berkebutuhan khusus')}; tabel berikut fokus pada sisi pendidikan.`),
  '<table class="article-table"><caption>Peta aturan hak pendidikan anak disabilitas intelektual</caption><thead><tr><th>Aturan</th><th>Isi yang relevan</th><th>Artinya bagi orang tua</th></tr></thead><tbody><tr><td>UUD 1945 Pasal 31 ayat (1) dan (2)</td><td>Hak setiap warga negara atas pendidikan, wajib pendidikan dasar yang dibiayai pemerintah</td><td>Hak anak bersekolah dijamin konstitusi</td></tr><tr><td>UU 20/2003 Pasal 5 dan Pasal 32</td><td>Hak atas pendidikan bermutu, hak pendidikan khusus bagi yang memiliki kelainan intelektual</td><td>Layanan khusus adalah hak, bukan belas kasihan</td></tr><tr><td>UU 19/2011 (CRPD Pasal 24)</td><td>Tidak dikecualikan dari sistem pendidikan umum, akomodasi yang layak</td><td>Penolakan atas dasar disabilitas bertentangan dengan komitmen negara</td></tr><tr><td>UU 8/2016 Pasal 10, 40 sampai 43</td><td>Pendidikan inklusif dan khusus, wajib belajar 12 tahun, ULD, sanksi administratif</td><td>Dasar untuk meminta akomodasi dan pendampingan</td></tr><tr><td>PP 13/2020 Pasal 12</td><td>Daftar bentuk akomodasi khusus untuk disabilitas intelektual</td><td>Rujukan konkret saat berdiskusi dengan sekolah</td></tr><tr><td>Permendikbudristek 48/2023</td><td>Asesmen fungsional, modifikasi kurikulum, tata cara pengaduan</td><td>Panduan teknis di tingkat sekolah dan dinas</td></tr></tbody></table>',

  h2('kewajiban', 'Kewajiban Pemerintah dan Sekolah Menurut UU 8/2016'),
  p('Pasal 40 UU Nomor 8 Tahun 2016 memuat kewajiban yang sering belum diketahui orang tua. Pemerintah dan pemerintah daerah wajib menyelenggarakan dan/atau memfasilitasi pendidikan untuk penyandang disabilitas di setiap jalur, jenis, dan jenjang. Penyelenggaraannya dilakukan dalam sistem pendidikan nasional melalui pendidikan inklusif dan pendidikan khusus.'),
  ul([
    '<strong>Wajib belajar 12 tahun:</strong> anak penyandang disabilitas wajib diikutsertakan (ayat 3).',
    '<strong>Dekat rumah:</strong> pemerintah daerah wajib mengutamakan anak bersekolah di lokasi yang dekat tempat tinggalnya (ayat 4).',
    '<strong>Program kesetaraan:</strong> penyandang disabilitas yang tidak berpendidikan formal difasilitasi untuk mendapatkan ijazah pendidikan dasar dan menengah (ayat 5).',
    '<strong>Beasiswa dan biaya:</strong> beasiswa bagi peserta didik berprestasi yang orang tuanya tidak mampu, serta biaya pendidikan bagi anak dari penyandang disabilitas yang tidak mampu (ayat 6 dan 7).',
  ]),
  p('Pasal 41 menambahkan kewajiban memfasilitasi keterampilan dasar untuk kemandirian dan partisipasi penuh. Salah satunya keterampilan komunikasi dalam bentuk, sarana, dan format yang bersifat augmentatif dan alternatif. Ini relevan bagi anak disabilitas intelektual yang belum lancar berbicara, karena papan gambar atau simbol dapat menjadi bagian sah dari layanan pendidikannya.'),
  p(`Pasal 43 ayat (3) mengatur bahwa penyelenggara pendidikan yang tidak menyediakan akomodasi yang layak dikenai sanksi administratif berupa teguran tertulis, penghentian kegiatan pendidikan, pembekuan izin, dan pencabutan izin. Bila ingin memetakan bantuan lain dari negara, lihat juga ${a('cara-mengajukan-bantuan-pemerintah-untuk-anak-disabilitas', 'cara mengajukan bantuan pemerintah untuk anak disabilitas')}.`),

  h2('pilihan', 'Pilihan Layanan: Sekolah Inklusi, SLB, dan Jalur Kesetaraan'),
  p(`Hukum tidak mengharuskan anak disabilitas intelektual belajar di satu jenis sekolah. Pasal 10 huruf a UU 8/2016 memakai frasa "secara inklusif dan khusus", sehingga keluarga dapat menimbang ${a('pendidikan-inklusi', 'sekolah inklusi')} maupun ${a('pendidikan-khusus', 'pendidikan khusus')}. Di masyarakat, sekolah luar biasa yang melayani anak dengan hambatan intelektual biasa dikenal sebagai SLB C. Penjelasan lebih lengkap ada di ${a('sekolah-slb-untuk-anak-apa', 'artikel SLB untuk anak apa saja')}.`),
  p(`Permendikbudristek Nomor 48 Tahun 2023 juga menggantikan aturan lama tentang pendidikan inklusi. Database peraturan BPK mencatat peraturan ini mencabut Permendiknas Nomor 70 Tahun 2009 tentang Pendidikan Inklusi bagi Peserta Didik yang Memiliki Kelainan dan Memiliki Potensi Kecerdasan dan/atau Bakat Istimewa. Jadi, rujukan teknis yang dipakai sekolah sekarang semestinya Permendikbudristek 48/2023. Untuk perbandingan rinci kedua model, baca ${a('apa-perbedaan-sekolah-inklusi-dan-slb', 'perbedaan sekolah inklusi dan SLB')}.`),
  '<table class="article-table"><caption>Perbandingan pilihan layanan bagi anak disabilitas intelektual</caption><thead><tr><th>Pilihan</th><th>Dasar aturan</th><th>Cocok dipertimbangkan bila</th><th>Hal yang perlu ditanyakan</th></tr></thead><tbody><tr><td>Sekolah reguler yang inklusif</td><td>UU 8/2016 Pasal 10 huruf a dan Pasal 40 ayat (2)</td><td>Anak siap belajar bersama teman sebaya dengan dukungan</td><td>Ketersediaan guru pendidikan khusus, rasio guru, bentuk penilaian</td></tr><tr><td>Sekolah khusus (SLB)</td><td>UU 20/2003 Pasal 32 ayat (1)</td><td>Anak membutuhkan program yang sangat individual dan kelas kecil</td><td>Program keterampilan hidup, transisi, jarak dari rumah</td></tr><tr><td>Program kesetaraan</td><td>UU 8/2016 Pasal 40 ayat (5)</td><td>Anak belum atau tidak lagi menempuh pendidikan formal</td><td>Penyelenggara, jadwal, bentuk ijazah</td></tr></tbody></table>',
  p('Apa pun pilihannya, keputusan sebaiknya berangkat dari kebutuhan anak, bukan hanya dari ketersediaan kursi. Kunjungi sekolah, amati kelas, dan tanyakan bagaimana mereka menyusun program individual. Pilihan juga boleh berubah seiring perkembangan anak.'),
  fig(bodyImages.costume, 'Rombongan anak dan pendamping berkostum warna-warni duduk berjajar di depan sebuah candi', 'Rombongan anak dan pendamping YUKA dalam kegiatan seni dan wisata edukasi. Kegiatan bersama seperti ini menunjukkan bahwa partisipasi dapat dirancang untuk banyak kemampuan sekaligus.'),

  h2('akomodasi', 'Bentuk Akomodasi yang Layak untuk Disabilitas Intelektual'),
  p('PP Nomor 13 Tahun 2020 Pasal 1 mengartikan akomodasi yang layak sebagai modifikasi dan penyesuaian yang tepat dan diperlukan untuk menjamin penikmatan atau pelaksanaan hak asasi dan kebebasan fundamental bagi penyandang disabilitas berdasarkan kesetaraan. Bagian yang paling berguna bagi orang tua adalah Pasal 12, karena pasal itu khusus mengatur peserta didik penyandang disabilitas intelektual.'),
  p('Bentuk akomodasi menurut Pasal 12 meliputi:'),
  ul([
    'afirmasi seleksi masuk sesuai kondisi intelektual anak berdasarkan keterangan dokter dan/atau dokter spesialis;',
    'fleksibilitas proses pembelajaran dan bentuk materi sesuai kebutuhan;',
    'fleksibilitas dalam merumuskan kompetensi lulusan atau capaian pembelajaran;',
    'fleksibilitas evaluasi, penilaian kompetensi, dan waktu penyelesaian tugas;',
    'penyesuaian rasio guru dengan jumlah peserta didik disabilitas intelektual di kelas;',
    'capaian pembelajaran yang disesuaikan dengan kemampuan masing-masing anak;',
    'pengajaran keterampilan hidup sehari-hari, baik domestik, interaksi di masyarakat, maupun di tempat berkarya;',
    'fleksibilitas masa studi dan ruang untuk melepas ketegangan atau ruang relaksasi;',
    'ijazah atau sertifikat kompetensi yang menginformasikan capaian dalam bentuk deskriptif dan angka.',
  ]),
  p(`Lampiran Permendikbudristek 48/2023 memakai daftar serupa dengan dua catatan penting. Afirmasi seleksi masuk disebut berdasarkan keterangan psikolog, dan sebagian besar fleksibilitas diberikan sesuai rekomendasi hasil asesmen kebutuhan. Lampiran itu juga menyebut sekolah dapat mengeluarkan surat keterangan tentang ragam disabilitas dan capaian kemampuan anak. Contoh penerapan di kelas, misalnya ${a('adaptasi-soal-ujian-untuk-anak-abk', 'adaptasi soal ujian')}, dapat menjadi bahan diskusi dengan guru.`),

  h2('asesmen', 'Asesmen Fungsional dan Modifikasi Kurikulum'),
  p('Akomodasi tidak dipilih secara acak. Pasal 12 ayat (3) Permendikbudristek 48/2023 menyebut bentuk akomodasi diberikan berdasarkan hasil asesmen fungsional yang dilaksanakan oleh satuan pendidikan. Asesmen ini difasilitasi Unit Layanan Disabilitas dan bertujuan memperoleh informasi tentang kondisi, hambatan, dan kebutuhan peserta didik atas bentuk akomodasi.'),
  p(`Ayat (6) pasal tersebut mengatur bahwa pemenuhan kebutuhan akomodasi dilakukan melalui konsultasi yang melibatkan peserta didik, orang tua atau wali, dan Unit Layanan Disabilitas. Dengan kata lain, orang tua bukan penonton. Anda berhak duduk bersama sekolah dan ikut menentukan dukungan yang dipakai. Gambaran prosesnya dapat dibaca di ${a('asesmen-abk', 'asesmen ABK')}.`),
  p(`Untuk kurikulum, Pasal 11 ayat (4) aturan yang sama membedakan dua kelompok. Bagi peserta didik tanpa hambatan intelektual, modifikasi cukup pada standar proses. Bagi peserta didik dengan hambatan intelektual, modifikasi dilakukan terhadap standar kompetensi lulusan, standar isi, standar proses, dan standar penilaian. Hasilnya biasanya dituangkan dalam ${a('program-pembelajaran-individual', 'program pembelajaran individual')}, dengan isi yang dapat menekankan ${a('kurikulum-fungsional-untuk-anak-tunagrahita', 'kurikulum fungsional')} sesuai usia dan minat anak.`),
  p('Mintalah hasil asesmen dan rencana pembelajaran dalam bentuk tertulis. Dokumen itu menjadi pegangan bersama, memudahkan evaluasi berkala, dan berguna bila anak pindah sekolah.'),
  fig(bodyImages.companion, 'Seorang pendamping perempuan berdiri di antara dua remaja di lorong batu sebuah candi', 'Pendamping bersama dua remaja dalam kegiatan wisata edukasi YUKA. Dalam asesmen dan konsultasi akomodasi, suara anak dan pendampingnya sama-sama perlu didengar.'),

  h2('uld', 'Peran Unit Layanan Disabilitas (ULD)'),
  p('Pasal 42 ayat (1) UU 8/2016 mewajibkan pemerintah daerah memfasilitasi pembentukan Unit Layanan Disabilitas untuk mendukung pendidikan inklusif tingkat dasar dan menengah. Fungsinya, menurut ayat (2), antara lain meningkatkan kompetensi guru di sekolah reguler, menyediakan pendampingan bagi peserta didik, mengembangkan program kompensatorik, menyediakan media pembelajaran dan alat bantu, deteksi dan intervensi dini, serta layanan konsultasi.'),
  p('PP 13/2020 Pasal 22 menjelaskan bahwa ULD untuk PAUD formal, pendidikan dasar, dan menengah dibentuk melalui penguatan fungsi perangkat daerah di bidang pendidikan. Dalam praktik, ini berarti ULD berada di lingkungan dinas pendidikan sesuai kewenangannya. Tugasnya menurut Pasal 23 meliputi analisa kebutuhan, penyediaan data, rekomendasi, pelatihan dan bimbingan teknis, pendampingan, serta pengawasan, evaluasi, dan pelaporan.'),
  p(`Pasal 36 PP yang sama menyebut ULD dapat melibatkan dokter, psikolog klinis, terapis wicara, okupasi terapis, ahli pendidikan luar biasa, ahli pendidikan inklusif, terapis kognitif, terapis perilaku, pekerja sosial, dan konselor. Untuk madrasah, Pasal 32 mengatur ULD dibentuk melalui kantor kementerian agama kabupaten/kota. Bila anak membutuhkan pendamping kelas, pelajari juga peran ${a('shadow-teacher-adalah', 'shadow teacher')} agar Anda dapat membedakannya dari guru pendidikan khusus yang ditugaskan lewat ULD.`),
  p('Bila Anda belum tahu apakah ULD sudah berjalan di daerah Anda, tanyakan langsung ke dinas pendidikan kabupaten/kota atau provinsi sesuai jenjang sekolah anak.'),

  h2('dokumen', 'Dokumen yang Perlu Disiapkan Orang Tua'),
  p('Persiapan dokumen membuat percakapan dengan sekolah lebih tenang dan terarah. Tidak semua sekolah meminta berkas yang sama, jadi tanyakan dulu daftar resminya. Daftar di bawah ini disusun dari hal yang disebut dalam aturan dan kebutuhan praktis saat meminta akomodasi.'),
  ol([
    '<strong>Dokumen identitas</strong> anak dan keluarga sesuai persyaratan pendaftaran sekolah.',
    '<strong>Keterangan dokter atau dokter spesialis</strong> tentang ragam disabilitas, sesuai PP 13/2020 Pasal 9 ayat (5).',
    '<strong>Hasil pemeriksaan psikolog</strong> bila tersedia, karena Lampiran Permendikbudristek 48/2023 menyebut keterangan psikolog untuk afirmasi seleksi masuk.',
    `<strong>Kartu penyandang disabilitas</strong> bila sudah dimiliki. Prosesnya dijelaskan di ${a('bagaimana-cara-membuat-kartu-disabilitas', 'cara membuat kartu disabilitas')}.`,
    '<strong>Laporan perkembangan atau asesmen sebelumnya</strong> dari sekolah lama, terapis, atau layanan tumbuh kembang.',
    '<strong>Catatan kebutuhan harian</strong> berisi cara anak berkomunikasi, hal yang menenangkan, pemicu stres, dan dukungan yang sudah terbukti membantu.',
    '<strong>Surat permohonan akomodasi tertulis</strong> yang menyebut bentuk dukungan yang diminta dan merujuk Pasal 12 PP 13/2020.',
  ]),
  p('Simpan salinan setiap berkas dan catat tanggal penyerahan. Arsip yang rapi memudahkan Anda bila nanti perlu meminta peninjauan atau menyampaikan pengaduan.'),
  fig(bodyImages.dance, 'Tujuh anak berkostum tari tradisional berpose di depan pintu candi', 'Anak-anak YUKA berkostum tari dalam kegiatan seni di kawasan candi. Catatan tentang apa yang disukai dan membuat anak nyaman sama berharganya dengan surat keterangan resmi.'),

  h2('ditolak', 'Langkah Orang Tua Bila Hak Pendidikan Anak Ditolak'),
  p('Penolakan sering terjadi karena sekolah merasa belum siap, bukan semata karena niat buruk. Karena itu, mulailah dengan dialog. Bila dialog tidak berhasil, aturan menyediakan jalur yang jelas. Berikut urutan yang dapat Anda tempuh:'),
  ol([
    '<strong>Minta alasan penolakan secara tertulis.</strong> Penjelasan tertulis membantu Anda memahami apakah masalahnya kuota, kesiapan guru, atau anggapan keliru tentang kemampuan anak.',
    '<strong>Ajak bicara kepala sekolah dan guru.</strong> Bawa dokumen pendukung, lalu tunjukkan Pasal 10 dan Pasal 40 UU 8/2016 serta Pasal 12 PP 13/2020.',
    '<strong>Ajukan permohonan akomodasi tertulis.</strong> Minta asesmen fungsional sesuai Pasal 12 Permendikbudristek 48/2023.',
    '<strong>Hubungi Unit Layanan Disabilitas atau dinas pendidikan.</strong> Mintalah pendampingan dan rekomendasi, karena itu termasuk tugas ULD.',
    '<strong>Sampaikan pengaduan tertulis.</strong> Pasal 27 Permendikbudristek 48/2023 menyebut pengaduan dapat ditujukan kepada Menteri, gubernur, bupati/wali kota, dan/atau komisi nasional disabilitas, dengan melampirkan identitas pelapor, identitas terlapor, serta fakta atau data pelanggaran.',
    '<strong>Cari pendampingan.</strong> Organisasi penyandang disabilitas, yayasan, atau lembaga bantuan hukum dapat membantu menyusun surat dan mendampingi pertemuan.',
  ]),
  p('Sambil menunggu proses, pastikan anak tetap mendapat kesempatan belajar. Penundaan yang panjang lebih merugikan anak daripada siapa pun. Bila perlu, tempuh pilihan sementara yang aman sambil terus memperjuangkan haknya.'),

  h2('berpusat', 'Menjaga Hak Tetap Berpusat pada Anak'),
  p('Pasal 5 ayat (3) UU 8/2016 menyebut anak penyandang disabilitas berhak dilindungi kepentingannya dalam pengambilan keputusan, mendapat pemenuhan kebutuhan khusus, dan memperoleh perlakuan yang sama dengan anak lain untuk mencapai integrasi sosial dan pengembangan individu. Artinya, ukuran keberhasilan bukan sekadar anak diterima di sekolah, melainkan anak benar-benar belajar, merasa aman, dan punya teman.'),
  p(`Libatkan anak dalam keputusan sesuai kemampuannya, misalnya memilih kegiatan, menyampaikan rasa tidak nyaman, atau menunjukkan cara belajar yang ia sukai. Bangun hubungan baik dengan guru, karena kerja sama jangka panjang lebih menentukan daripada satu surat. Panduan praktisnya ada di ${a('peran-orang-tua-pendidikan-inklusi', 'peran orang tua dalam pendidikan inklusi')} dan ${a('transisi-anak-abk-dari-tk-ke-sd', 'transisi anak ABK dari TK ke SD')}.`),
  p('Bagi keluarga muslim, memperjuangkan pendidikan anak adalah bagian dari amanah. Setiap anak membawa potensi yang Allah titipkan, dan tugas kita membuka jalan agar potensi itu tumbuh. Bersabarlah dalam proses, tetap tegas soal hak, dan jangan ragu meminta bantuan.'),
  fig(bodyImages.practice, 'Seorang remaja berkostum tari dan seorang pendamping berlatih gerakan di halaman rumput depan candi', 'Remaja dan pendamping YUKA berlatih gerak tari di halaman candi. Pendampingan yang sabar membantu anak mencoba hal baru dengan rasa aman.'),
  faqHtml,
].join('\n');

const article = {
  slug,
  titleTag: 'Hak Pendidikan Anak Disabilitas Intelektual: Dasar Hukum dan Langkah Orang Tua',
  metaDesc: 'Hak pendidikan anak disabilitas intelektual dijamin UUD 1945, UU 8/2016, dan PP 13/2020. Pelajari pilihan sekolah, akomodasi yang layak, dokumen, dan cara mengadu.',
  keywords: 'hak pendidikan anak disabilitas intelektual, akomodasi yang layak, PP 13 tahun 2020, UU 8 tahun 2016, unit layanan disabilitas, sekolah inklusi tunagrahita',
  ogTitle: 'Hak Pendidikan Anak Disabilitas Intelektual',
  ogDesc: 'Dasar hukum, bentuk akomodasi yang layak, peran Unit Layanan Disabilitas, dan langkah orang tua bila hak anak ditolak sekolah.',
  datePublished: '2026-10-15',
  dateModified: '2026-10-15',
  dateDisplay: '15 Okt 2026',
  readTime: '13 menit baca',
  category: 'Pendidikan',
  h1: 'Hak Pendidikan Anak Disabilitas Intelektual: Dasar Hukum, Akomodasi, dan Langkah Orang Tua',
  crumb: 'Hak Pendidikan Anak Disabilitas Intelektual',
  parent: { href: 'disabilitas-intelektual', name: 'Disabilitas Intelektual' },
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'disabilitas-intelektual', title: 'Disabilitas Intelektual', desc: 'Panduan memahami keterampilan adaptif dan dukungan bagi anak dengan disabilitas intelektual.' },
    { href: 'uu-no-19-tahun-2011-tentang-apa', title: 'UU No. 19 Tahun 2011 tentang Apa?', desc: 'Penjelasan ratifikasi Konvensi Hak-Hak Penyandang Disabilitas dan artinya bagi anak.' },
    { href: 'apa-saja-hak-anak-berkebutuhan-khusus', title: 'Apa Saja Hak Anak Berkebutuhan Khusus?', desc: 'Ringkasan hak umum dan hak khusus anak penyandang disabilitas menurut undang-undang.' },
    { href: 'apa-perbedaan-sekolah-inklusi-dan-slb', title: 'Apa Perbedaan Sekolah Inklusi dan SLB?', desc: 'Perbandingan kurikulum, guru, dan layanan untuk membantu memilih sekolah.' },
  ],
  tags: ['DisabilitasIntelektual', 'HakPendidikan', 'AkomodasiYangLayak', 'PendidikanInklusif'],
  sources: [
    { url: 'https://peraturan.bpk.go.id/Details/101646/uud-no---uud-1945-dan-amandemen', label: 'JDIH BPK, UUD 1945 dan Amandemen (Pasal 31)' },
    { url: 'https://peraturan.bpk.go.id/Details/43920/uu-no-20-tahun-2003', label: 'JDIH BPK, UU Nomor 20 Tahun 2003 tentang Sistem Pendidikan Nasional (Pasal 5 dan 32)' },
    { url: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016', label: 'JDIH BPK, UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas (Pasal 4, 5, 10, 40 sampai 43)' },
    { url: 'https://peraturan.bpk.go.id/Details/39255/uu-no-19-tahun-2011', label: 'JDIH BPK, UU Nomor 19 Tahun 2011 tentang Pengesahan CRPD' },
    { url: 'https://social.desa.un.org/issues/disability/crpd/article-24-education', label: 'UN DESA, CRPD Article 24: Education' },
    { url: 'https://peraturan.bpk.go.id/Details/132596/pp-no-13-tahun-2020', label: 'JDIH BPK, PP Nomor 13 Tahun 2020 tentang Akomodasi yang Layak untuk Peserta Didik Penyandang Disabilitas' },
    { url: 'https://peraturan.bpk.go.id/Details/285711/permendikbudriset-no-48-tahun-2023', label: 'JDIH BPK, Permendikbudristek Nomor 48 Tahun 2023 tentang Akomodasi yang Layak' },
  ],
  sourcesCheckedNote: 'Naskah peraturan dibaca langsung dari salinan resmi di JDIH BPK dan teks CRPD dari situs PBB pada 11 Oktober 2026. Artikel ini adalah informasi umum, bukan nasihat hukum untuk kasus tertentu.',
};

const html = renderArticlePage(article);
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

'use strict';
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const slug = 'terapi-anak-untuk-apa';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';

const image = (file, alt, caption) => {
  const size = imageSize(path.join(ROOT, file));
  return { file, w: size.w, h: size.h, alt, caption, credit: CREDIT };
};
const fig = (file, alt, caption) => `<figure class="article-inline-image"><img src="../${file}" alt="${alt}" loading="lazy" width="${imageSize(path.join(ROOT, file)).w}" height="${imageSize(path.join(ROOT, file)).h}"><figcaption>${caption} <span class="kredit">${CREDIT}</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const h2 = (id, text) => `<h2 id="${id}">${text}</h2>`;
const h3 = (text) => `<h3>${text}</h3>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;

const hero = image(
  'Dokumentasi/museum-gunung-merapi-karyawati-anak-foto-bersama-mall-045.webp',
  'Anak dan pendamping mengikuti kegiatan bersama di ruang publik sebagai ilustrasi tujuan terapi anak',
  'Partisipasi anak dalam kegiatan bersama dapat menjadi salah satu tujuan fungsional pendampingan. Foto ini dokumentasi kegiatan YUKA, bukan sesi terapi klinis.'
);
const bodyImages = {
  participation: 'Dokumentasi/museum-gunung-merapi-siswa-kunjungan-museum-foto-bersama-051.webp',
  group: 'Dokumentasi/museum-gunung-merapi-rombongan-wisata-edukasi-gunung-merapi-032.webp',
  activity: 'Dokumentasi/museum-gunung-merapi-kelompok-anak-foto-bersama-mall-049.webp',
  coordination: 'Dokumentasi/museum-gunung-merapi-anak-sekolah-foto-bersama-mall-050.webp',
};

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> terapi anak adalah layanan terarah untuk membantu anak mengembangkan, mempertahankan, atau menggunakan kemampuan yang dibutuhkan dalam kehidupan sehari-hari. Tujuannya bukan membuat semua anak mengikuti ukuran yang sama, melainkan meningkatkan fungsi, komunikasi, kenyamanan, kemandirian, dan partisipasi sesuai kebutuhan anak dan keluarga.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#pengertian">Apa yang dimaksud terapi anak?</a></li><li><a href="#tujuan">Untuk apa terapi anak dilakukan?</a></li><li><a href="#jenis">Jenis terapi yang mungkin dibutuhkan</a></li><li><a href="#kapan">Kapan anak perlu dievaluasi?</a></li><li><a href="#proses">Bagaimana proses penilaiannya?</a></li><li><a href="#rumah">Peran keluarga di rumah</a></li><li><a href="#memilih">Cara memilih layanan</a></li><li><a href="#aman">Tanda layanan yang aman</a></li><li><a href="#rencana">Membuat rencana yang realistis</a></li></ol></div>',
  h2('pengertian', 'Apa yang Dimaksud Terapi Anak?'),
  p('Terapi anak adalah rangkaian layanan yang membantu anak berlatih atau menemukan cara untuk melakukan aktivitas yang penting bagi dirinya. Aktivitas itu dapat berupa berkomunikasi, bergerak, bermain, makan, merawat diri, belajar, mengatur respons terhadap lingkungan, atau berpartisipasi bersama keluarga dan teman. Terapi dapat diberikan di klinik, rumah, sekolah, pusat rehabilitasi, atau ruang komunitas sesuai tujuan dan akses keluarga.'),
  p('Istilah terapi tidak selalu berarti anak sedang sakit atau harus mengejar kemampuan anak lain. Anak mungkin membutuhkan dukungan untuk mengatasi hambatan tertentu, menggunakan alat bantu, mengubah lingkungan, atau memperoleh strategi komunikasi yang lebih mudah. Laporan WHO tentang perkembangan anak dan disabilitas menekankan bahwa layanan anak perlu berpusat pada anak dan keluarga, memperkuat partisipasi, serta menghubungkan kesehatan, rehabilitasi, pendidikan, dan dukungan sosial.'),
  p('Karena kebutuhan setiap anak berbeda, tidak ada satu paket terapi yang cocok untuk semua. Dua anak dengan diagnosis yang sama dapat memiliki kekuatan, minat, cara berkomunikasi, kondisi medis, dan prioritas keluarga yang berbeda. Diagnosis dapat membantu memahami kebutuhan, tetapi tujuan terapi tetap perlu ditentukan dari fungsi nyata dan suara anak.'),
  fig(bodyImages.participation, 'Anak dan pendamping mengikuti kegiatan kelompok sebagai ilustrasi partisipasi dalam lingkungan sosial', 'Terapi yang baik diarahkan pada kemampuan anak untuk berpartisipasi dalam aktivitas yang bermakna, bukan hanya latihan di ruang layanan.'),
  h2('tujuan', 'Untuk Apa Terapi Anak Dilakukan?'),
  p('Tujuan terapi sebaiknya menjawab pertanyaan: aktivitas apa yang ingin lebih mudah dilakukan anak, dukungan apa yang membuatnya lebih nyaman, dan bagaimana keluarga mengetahui bahwa strategi tersebut membantu? Jawaban dapat berbeda untuk setiap anak. Misalnya, keluarga ingin anak dapat meminta bantuan dengan gambar, duduk lebih stabil saat makan, bergiliran ketika bermain, memakai pakaian dengan bantuan lebih sedikit, atau mengikuti rutinitas sekolah tanpa kelelahan berlebihan.'),
  p('American Academy of Pediatrics menjelaskan bahwa terapi fisik, terapi okupasi, dan terapi wicara dapat membantu anak mengembangkan keterampilan baru, memperoleh kembali keterampilan yang hilang, atau menggunakan akomodasi ketika suatu keterampilan tidak dapat berkembang dengan cara yang diharapkan. Manfaatnya perlu dilihat dalam konteks kehidupan anak, bukan dari jumlah latihan atau lama sesi semata.'),
  p('Tujuan juga dapat berupa pencegahan masalah sekunder dan peningkatan kenyamanan. Contohnya, pengaturan posisi membantu anak mengikuti kegiatan tanpa nyeri, strategi makan membantu mengurangi risiko tersedak sesuai arahan tenaga kesehatan, atau alat komunikasi membantu anak menyampaikan pilihan sebelum frustrasi meningkat. Terapi tidak boleh dijual dengan janji bahwa satu teknik akan menyembuhkan semua kondisi.'),
  ul([
    '<strong>Komunikasi:</strong> menyampaikan kebutuhan, memahami instruksi, memakai bahasa, gestur, gambar, atau alat komunikasi alternatif.',
    '<strong>Gerak dan posisi:</strong> berpindah, duduk, berdiri, berjalan, menggunakan tangan, atau mengatur posisi dengan lebih aman.',
    '<strong>Kemandirian:</strong> makan, memakai pakaian, kebersihan diri, menyiapkan perlengkapan, dan mengikuti urutan aktivitas.',
    '<strong>Regulasi dan partisipasi:</strong> menghadapi suara, sentuhan, perubahan, menunggu giliran, bermain, dan belajar bersama orang lain.',
    '<strong>Dukungan keluarga:</strong> memahami cara membantu anak tanpa mengambil alih semua tugas atau membuat rumah menjadi ruang latihan yang menekan.'
  ]),
  h2('jenis', 'Jenis Terapi yang Mungkin Dibutuhkan Anak'),
  p('Jenis layanan dipilih setelah penilaian, bukan hanya karena sedang populer. Dokter anak, dokter tumbuh kembang, psikolog, guru, atau tenaga profesional lain dapat membantu menentukan rujukan. Dalam praktiknya, beberapa layanan dapat bekerja bersama karena satu aktivitas sering membutuhkan lebih dari satu kemampuan.'),
  h3('Terapi fisik atau fisioterapi'),
  p('Fisioterapi berfokus pada gerak, kekuatan, keseimbangan, posisi, mobilitas, dan kemampuan menggunakan tubuh dalam aktivitas. Pada anak dengan cerebral palsy, keterlambatan motorik, kondisi neuromuskular, atau masalah ortopedi, tujuan dapat mencakup perpindahan yang lebih aman, penggunaan alat bantu, pencegahan kontraktur sesuai rencana klinis, atau partisipasi dalam bermain. Programnya harus menyesuaikan kondisi medis dan respons anak.'),
  h3('Terapi okupasi'),
  p('Terapi okupasi membantu anak melakukan aktivitas sehari-hari yang bermakna. Fokusnya dapat mencakup koordinasi tangan, perawatan diri, bermain, kesiapan belajar, adaptasi alat, posisi duduk, serta cara mengatur lingkungan. Pada sebagian anak, terapis juga membantu keluarga memahami kebutuhan sensorik tanpa menganggap semua perilaku sebagai masalah yang harus ditekan.'),
  h3('Terapi wicara dan bahasa'),
  p('Terapi wicara tidak hanya membahas pelafalan. Layanan ini dapat membantu pemahaman bahasa, ekspresi, komunikasi sosial, suara, kelancaran, atau makan dan menelan bila tenaga profesional memiliki kompetensi yang sesuai. Komunikasi alternatif dan augmentatif, seperti gambar, gestur, papan pilihan, atau perangkat, bukan tanda kegagalan. Yang penting adalah anak memiliki cara yang efektif untuk menyampaikan pesan.'),
  h3('Intervensi psikologis dan perilaku'),
  p('Psikolog anak atau profesional terkait dapat membantu anak dan keluarga memahami emosi, perhatian, kecemasan, perilaku, hubungan sosial, atau penyesuaian terhadap perubahan. Pendekatan harus menjunjung martabat anak, menjelaskan tujuan, menghindari hukuman yang menyakiti, dan mengukur perubahan yang bermakna. Orang tua sebaiknya menanyakan dasar pendekatan dan cara persetujuan anak dihormati.'),
  h3('Dukungan pendidikan dan perkembangan'),
  p('Sebagian kebutuhan lebih efektif ditangani melalui dukungan di sekolah, pendidikan khusus, pendampingan, modifikasi tugas, atau program intervensi dini. WHO menyebut layanan perkembangan anak dapat melibatkan permainan, latihan fungsional, edukasi orang tua, alat bantu, dan koordinasi rujukan. Karena belajar terjadi sepanjang hari, strategi yang dapat dipakai di rumah dan sekolah sering lebih berguna daripada latihan yang hanya terjadi di satu ruangan.'),
  '<table class="article-table"><caption>Contoh hubungan antara kebutuhan fungsional dan dukungan</caption><thead><tr><th>Fokus kebutuhan</th><th>Contoh tujuan fungsional</th><th>Dukungan yang mungkin terlibat</th></tr></thead><tbody><tr><td>Komunikasi</td><td>Meminta bantuan atau memilih aktivitas</td><td>Terapi wicara, AAC, strategi visual</td></tr><tr><td>Gerak dan posisi</td><td>Berpindah atau duduk lebih aman</td><td>Fisioterapi, alat bantu, adaptasi lingkungan</td></tr><tr><td>Kemandirian</td><td>Makan, berpakaian, atau merapikan barang</td><td>Terapi okupasi, latihan rutinitas, dukungan keluarga</td></tr><tr><td>Partisipasi</td><td>Mengikuti kegiatan belajar dan bermain</td><td>Koordinasi sekolah, keluarga, dan tenaga profesional</td></tr></tbody></table>',
  fig(bodyImages.group, 'Rombongan anak dan pendamping berada dalam kegiatan bersama sebagai ilustrasi koordinasi dukungan anak', 'Koordinasi keluarga, sekolah, dan tenaga profesional membantu strategi terapi dipakai dalam situasi nyata.'),
  h2('kapan', 'Kapan Anak Perlu Dievaluasi?'),
  p('Orang tua tidak perlu menunggu sampai masalah menjadi berat untuk berkonsultasi. CDC membedakan pemantauan perkembangan dan skrining perkembangan. Pemantauan dilakukan dengan mengamati kemampuan anak dari waktu ke waktu, sedangkan skrining menggunakan alat formal yang tervalidasi untuk melihat apakah diperlukan evaluasi lebih lanjut. Daftar milestone membantu percakapan, tetapi bukan alat diagnosis.'),
  p('Buat janji dengan dokter atau layanan tumbuh kembang jika anak kehilangan kemampuan yang sebelumnya sudah dikuasai, tidak mencapai beberapa tonggak perkembangan, mengalami kesulitan yang mengganggu makan atau tidur, sering jatuh atau nyeri, sulit berkomunikasi, atau tampak sangat kewalahan dalam aktivitas rutin. Kekhawatiran orang tua sendiri sudah cukup menjadi alasan untuk meminta penilaian. IDAI juga menekankan pentingnya deteksi dan intervensi dini ketika ditemukan penyimpangan perkembangan.'),
  p('Evaluasi tidak otomatis berakhir pada terapi mingguan. Hasilnya dapat menunjukkan bahwa anak cukup dipantau, membutuhkan adaptasi lingkungan, memerlukan pemeriksaan tambahan, atau perlu rujukan ke satu atau beberapa layanan. Mintalah penjelasan tentang apa yang ditemukan, apa yang belum dapat disimpulkan, dan kapan evaluasi ulang dilakukan.'),
  h2('proses', 'Bagaimana Proses Penilaian Terapi Berjalan?'),
  p('Penilaian dimulai dengan mendengarkan keluarga dan anak. Sampaikan kekhawatiran utama, rutinitas harian, aktivitas yang disukai, situasi yang memicu kesulitan, riwayat kesehatan, obat, tidur, makan, serta dukungan yang sudah dicoba. Video singkat yang dibuat dengan persetujuan anak dapat membantu menunjukkan situasi rumah, tetapi tidak perlu merekam atau menyebarkan data pribadi secara berlebihan.'),
  p('Profesional kemudian mengamati kemampuan anak dalam konteks yang relevan. Penilaian dapat meliputi komunikasi, gerak, koordinasi, perilaku, sensorik, kemandirian, kemampuan bermain, dan partisipasi. Hasil observasi sebaiknya diterjemahkan menjadi tujuan yang dapat diamati, misalnya “anak meminta jeda dengan kartu” atau “anak memegang sendok selama lima menit”, bukan “anak menjadi normal”.'),
  p('Rencana yang baik menjelaskan prioritas, frekuensi, siapa yang terlibat, cara latihan di rumah, indikator kemajuan, dan tanda bahwa strategi harus dihentikan atau diubah. Mintalah salinan ringkasan atau catatan tujuan. Jika beberapa layanan berjalan bersamaan, pastikan mereka tidak memberi instruksi yang bertentangan dan keluarga tahu siapa koordinator komunikasinya.'),
  h2('rumah', 'Peran Keluarga di Rumah'),
  p('Keluarga bukan pengganti terapis, tetapi lingkungan keluarga adalah tempat anak memakai keterampilan sepanjang hari. Terapis dapat menunjukkan cara memberi kesempatan, menyederhanakan langkah, mengatur posisi, menggunakan pilihan visual, atau menyesuaikan alat. Terapkan hanya strategi yang dipahami dan terasa aman, lalu laporkan respons anak. Tidak perlu mengubah seluruh waktu bermain menjadi sesi terapi.'),
  p('Pilih satu atau dua tujuan yang benar-benar penting bagi rutinitas. Bila targetnya memakai baju, latih satu bagian seperti menarik lengan atau memilih pakaian. Bila targetnya komunikasi, berikan waktu menunggu dan sediakan cara menjawab. Bila targetnya bermain bersama, mulai dari durasi pendek dan aktivitas yang disukai. Hargai penolakan, tanda lelah, dan kebutuhan jeda.'),
  p('Catat tanggal, aktivitas, tingkat bantuan, durasi, respons, dan kondisi yang memengaruhi. Catatan sederhana membantu keluarga dan terapis membedakan perubahan nyata dari kesan sesaat. Jika anak tampak kesakitan, makin cemas, mengalami perubahan fungsi, atau menunjukkan tanda bahaya, hentikan strategi yang dicurigai dan hubungi tenaga kesehatan.'),
  fig(bodyImages.activity, 'Anak dan pendamping mengikuti aktivitas bersama dalam suasana kelompok sebagai ilustrasi partisipasi', 'Keberhasilan dukungan dapat terlihat dari keterlibatan anak dalam kegiatan sehari-hari, bukan hanya dari hasil latihan terstruktur.'),
  h2('memilih', 'Cara Memilih Layanan Terapi Anak'),
  p('Mulailah dari kebutuhan dan tujuan, bukan dari klaim paling besar. Tanyakan pendidikan dan kompetensi tenaga profesional, pengalaman dengan kebutuhan anak, cara melakukan asesmen, siapa yang mengawasi program, cara mengukur kemajuan, dan bagaimana layanan berkoordinasi dengan dokter atau sekolah. Minta penjelasan tertulis mengenai biaya, durasi sesi, kebijakan pembatalan, dan perlindungan data.'),
  ul([
    'Apakah tujuan layanan dijelaskan dengan bahasa yang dapat diamati dan disepakati bersama?',
    'Apakah anak dan keluarga diberi kesempatan bertanya, menolak, beristirahat, atau mengubah strategi?',
    'Apakah layanan membahas manfaat, keterbatasan, risiko, serta pilihan lain secara jujur?',
    'Apakah kemajuan diukur dari fungsi dan partisipasi, bukan hanya kepatuhan atau lama duduk?',
    'Apakah penyedia bersedia berkoordinasi dengan tenaga kesehatan, sekolah, dan keluarga bila diperlukan?',
    'Apakah klaim layanan didukung sumber atau penjelasan yang masuk akal, bukan janji sembuh cepat?'
  ]),
  h2('aman', 'Tanda Layanan yang Aman dan Menghormati Anak'),
  p('Layanan yang aman menjelaskan apa yang akan dilakukan sebelum menyentuh atau mengubah posisi anak. Profesional memperhatikan komunikasi tubuh, memberi pilihan sesuai kemampuan, menjaga privasi, dan tidak mempermalukan anak. Anak yang belum berbicara tetap dapat menunjukkan persetujuan atau penolakan melalui gerak, ekspresi, suara, dan perubahan perilaku.'),
  p('Waspadai layanan yang menjanjikan hasil pasti untuk semua anak, meminta keluarga menghentikan pengobatan tanpa koordinasi dokter, menyembunyikan metode, melarang pertanyaan, atau menilai anak hanya dari kepatuhan. Klaim bahwa satu terapi dapat menyembuhkan semua diagnosis juga merupakan tanda bahaya. Bila terjadi cedera, tekanan berlebihan, penghinaan, atau anak terus menunjukkan ketakutan, keluarga berhak menghentikan layanan dan mencari pendapat kedua.'),
  fig(bodyImages.coordination, 'Anak-anak mengikuti kegiatan edukatif bersama pendamping sebagai ilustrasi lingkungan belajar yang mendukung', 'Lingkungan yang terstruktur dan suportif dapat membantu anak memakai keterampilan dalam kegiatan belajar dan sosial.'),
  h2('rencana', 'Membuat Rencana Terapi yang Realistis'),
  p('Rencana terapi tidak harus padat untuk menjadi bermanfaat. Pilih prioritas yang berdampak pada keselamatan, komunikasi, kenyamanan, dan partisipasi. Buat tujuan jangka pendek yang dapat diamati, tentukan dukungan yang dipakai, lalu sepakati kapan hasil ditinjau. Kemajuan dapat berarti bantuan berkurang, anak lebih cepat pulih setelah aktivitas, mampu menyampaikan pilihan, atau lebih nyaman mengikuti rutinitas.'),
  p('Bawa pertanyaan ini ke pertemuan berikutnya: kemampuan apa yang sedang diprioritaskan, mengapa prioritas itu penting, bagaimana keluarga membantu, apa tanda bahwa strategi bekerja, apa tanda perlu berhenti, dan kapan rencana disesuaikan? Pertanyaan tersebut membantu keluarga menjadi mitra yang setara tanpa harus menjadi ahli terapi.'),
  p('Terapi anak pada akhirnya bukan sekadar mengejar daftar kemampuan. Tujuannya adalah membantu anak berkomunikasi, bergerak, belajar, bermain, merawat diri, dan hadir dalam kehidupan dengan dukungan yang sesuai. Dengan penilaian yang hati-hati, sumber resmi, koordinasi, serta penghormatan pada pilihan anak, keluarga dapat memilih bantuan yang realistis dan bermakna.'),
  p('Bacaan terkait untuk menyusun langkah berikutnya: <a href="../artikel/asesmen-abk.html">asesmen ABK</a>, <a href="../artikel/intervensi-dini.html">intervensi dini</a>, <a href="../artikel/dukungan-keluarga-anak-abk.html">dukungan keluarga</a>, <a href="../artikel/terapi-okupasi.html">terapi okupasi</a>, dan <a href="../artikel/terapi-wicara.html">terapi wicara</a>.'),
  '<div class="faq-list"><h2 id="faq">Pertanyaan yang Sering Diajukan</h2><details><summary>Apakah semua anak membutuhkan terapi?</summary><p>Tidak. Terapi dipertimbangkan berdasarkan kebutuhan, hambatan fungsi, tujuan anak dan keluarga, serta hasil penilaian. Sebagian anak cukup dipantau atau dibantu melalui adaptasi rumah dan sekolah.</p></details><details><summary>Terapi anak dimulai dari mana?</summary><p>Mulailah dengan mencatat kekhawatiran dan membicarakannya kepada dokter anak, dokter tumbuh kembang, atau layanan yang kompeten. Minta skrining atau evaluasi bila diperlukan, lalu gunakan hasilnya untuk menentukan rujukan.</p></details><details><summary>Apakah terapi bisa dilakukan di rumah?</summary><p>Beberapa strategi dapat dipraktikkan di rumah setelah diajarkan oleh profesional. Keluarga tidak perlu meniru prosedur klinis tanpa arahan. Pilih aktivitas aman yang terkait rutinitas dan laporkan respons anak.</p></details><details><summary>Bagaimana mengetahui terapi membantu?</summary><p>Tentukan indikator fungsional sebelum mulai, seperti kemampuan meminta bantuan, memakai alat, berpindah, atau mengikuti rutinitas. Tinjau catatan bersama tenaga profesional dan ubah rencana jika tujuan tidak tercapai atau anak tidak nyaman.</p></details><details><summary>Apakah terapi menggantikan sekolah atau pengasuhan?</summary><p>Tidak. Terapi, pendidikan, pengasuhan, layanan kesehatan, dan dukungan sosial memiliki peran berbeda. Koordinasi membantu anak menggunakan keterampilan di situasi nyata, bukan hanya saat sesi.</p></details><details><summary>Berapa lama anak perlu menjalani terapi?</summary><p>Durasi tidak dapat ditentukan dengan satu angka untuk semua anak. Tinjau tujuan, kemajuan, kenyamanan, dan kebutuhan yang berubah bersama tenaga profesional. Rencana dapat dikurangi, dihentikan, atau dialihkan bila tujuan sudah tercapai atau strategi tidak sesuai.</p></details><details><summary>Apakah orang tua boleh mencari pendapat kedua?</summary><p>Boleh. Pendapat kedua dapat membantu keluarga memahami pilihan, risiko, dan tujuan, terutama bila rekomendasi terasa tidak jelas, ada klaim hasil pasti, atau anak menunjukkan ketidaknyamanan. Bawa ringkasan evaluasi agar konsultasi lebih efisien.</p></details></div>',
].join('\n');

const article = {
  slug,
  titleTag: 'Terapi Anak untuk Apa? Tujuan, Jenis, dan Kapan Dibutuhkan',
  metaDesc: 'Terapi anak untuk apa? Pahami tujuan, jenis layanan, tanda perlu evaluasi, peran keluarga, dan cara memilih terapi yang aman serta berpusat pada anak.',
  keywords: 'terapi anak untuk apa, tujuan terapi anak, jenis terapi anak, terapi anak berkebutuhan khusus, intervensi dini anak',
  ogTitle: 'Terapi Anak untuk Apa? Panduan Orang Tua',
  ogDesc: 'Panduan praktis memahami tujuan terapi anak, jenis layanan, proses evaluasi, peran keluarga, dan tanda layanan yang aman.',
  datePublished: '2026-10-06',
  dateModified: '2026-10-09',
  dateDisplay: '06 Okt 2026',
  readTime: '12 menit baca',
  category: 'Pendidikan',
  h1: 'Terapi Anak untuk Apa? Memahami Tujuan, Jenis, dan Kapan Dibutuhkan',
  crumb: 'Terapi Anak untuk Apa?',
  parent: { href: 'apa-saja-terapi-anak-berkebutuhan-khusus', name: 'Terapi Anak Berkebutuhan Khusus' },
  image: hero,
  bodyHtml,
  faq: [
    { q: 'Apakah semua anak membutuhkan terapi?', a: 'Tidak. Terapi dipertimbangkan berdasarkan kebutuhan, hambatan fungsi, tujuan anak dan keluarga, serta hasil penilaian. Sebagian anak cukup dipantau atau dibantu melalui adaptasi rumah dan sekolah.' },
    { q: 'Terapi anak dimulai dari mana?', a: 'Mulailah dengan mencatat kekhawatiran dan membicarakannya kepada dokter anak, dokter tumbuh kembang, atau layanan yang kompeten. Minta skrining atau evaluasi bila diperlukan, lalu gunakan hasilnya untuk menentukan rujukan.' },
    { q: 'Apakah terapi bisa dilakukan di rumah?', a: 'Beberapa strategi dapat dipraktikkan di rumah setelah diajarkan oleh profesional. Keluarga tidak perlu meniru prosedur klinis tanpa arahan. Pilih aktivitas aman yang terkait rutinitas dan laporkan respons anak.' },
    { q: 'Bagaimana mengetahui terapi membantu?', a: 'Tentukan indikator fungsional sebelum mulai, seperti kemampuan meminta bantuan, memakai alat, berpindah, atau mengikuti rutinitas. Tinjau catatan bersama tenaga profesional dan ubah rencana jika tujuan tidak tercapai atau anak tidak nyaman.' },
    { q: 'Apakah terapi menggantikan sekolah atau pengasuhan?', a: 'Tidak. Terapi, pendidikan, pengasuhan, layanan kesehatan, dan dukungan sosial memiliki peran berbeda. Koordinasi membantu anak menggunakan keterampilan di situasi nyata, bukan hanya saat sesi.' },
    { q: 'Berapa lama anak perlu menjalani terapi?', a: 'Durasi tidak dapat ditentukan dengan satu angka untuk semua anak. Tinjau tujuan, kemajuan, kenyamanan, dan kebutuhan yang berubah bersama tenaga profesional. Rencana dapat dikurangi, dihentikan, atau dialihkan bila tujuan sudah tercapai atau strategi tidak sesuai.' },
    { q: 'Apakah orang tua boleh mencari pendapat kedua?', a: 'Boleh. Pendapat kedua dapat membantu keluarga memahami pilihan, risiko, dan tujuan, terutama bila rekomendasi terasa tidak jelas, ada klaim hasil pasti, atau anak menunjukkan ketidaknyamanan. Bawa ringkasan evaluasi agar konsultasi lebih efisien.' },
  ],
  related: [
    { href: 'apa-saja-terapi-anak-berkebutuhan-khusus', title: 'Apa Saja Terapi Anak Berkebutuhan Khusus?', desc: 'Mengenal pilihan dukungan terapi dan cara menyesuaikannya dengan kebutuhan anak.' },
    { href: 'terapi-okupasi-untuk-anak-cerebral-palsy-dokumentasi', title: 'Terapi Okupasi untuk Anak Cerebral Palsy', desc: 'Memahami fokus terapi okupasi pada fungsi dan aktivitas sehari-hari.' },
    { href: 'terapi-fisik-untuk-anak-terlambat-jalan-dokumentasi', title: 'Terapi Fisik untuk Anak Terlambat Jalan', desc: 'Hal yang perlu dipahami keluarga saat mendiskusikan dukungan gerak anak.' },
    { href: 'deteksi-dini-tumbuh-kembang-anak', title: 'Deteksi Dini Tumbuh Kembang Anak', desc: 'Mengapa pemantauan dan evaluasi perkembangan penting dilakukan.' },
  ],
  tags: ['TerapiAnak', 'IntervensiDini', 'TumbuhKembang', 'ParentingABK'],
  sources: [
    { url: 'https://www.who.int/publications/i/item/9789241514064', label: 'WHO, Early Childhood Development and Disability' },
    { url: 'https://www.who.int/publications/i/item/9789240080539', label: 'WHO, Global report on children with developmental disabilities' },
    { url: 'https://www.cdc.gov/act-early/about/developmental-monitoring-and-screening.html', label: 'CDC, Developmental Monitoring and Screening' },
    { url: 'https://www.healthychildren.org/English/news/Pages/Therapy-Services-for-Children-with-Disabilities.aspx', label: 'American Academy of Pediatrics, Therapy Services for Children with Disabilities' },
    { url: 'https://www.idai.or.id/artikel/seputar-kesehatan-anak/mengenal-keterlambatan-perkembangan-umum-pada-anak', label: 'IDAI, Mengenal Keterlambatan Perkembangan Umum pada Anak' },
  ],
  sourcesCheckedNote: 'Sumber resmi diperiksa pada 9 Oktober 2026. Artikel ini tidak memberikan diagnosis atau rekomendasi terapi individual.',
};

const html = renderArticlePage(article);
fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
const blogPath = path.join(ROOT, 'blog.html');
let blog = fs.readFileSync(blogPath, 'utf8');
if (!blog.includes(`href="artikel/${slug}"`)) {
  const d = new Date('2026-10-06T00:00:00Z');
  const card = `<article class="card blog-card animate-on-scroll">
                    <div class="card-image">
                        <img src="${hero.file}" alt="${article.h1.replace(/"/g, '&quot;')}" loading="lazy">
                    </div>
                    <div class="card-body">
                        <span class="card-category">${article.category}</span>
                        <h3 class="card-title">
                            <a href="artikel/${slug}">${article.h1}</a>
                        </h3>
                        <p class="card-text">${article.metaDesc}</p>
                        <div class="card-meta">
                            <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>06 Oct 2026</span>
                            <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0"/></svg>${article.readTime}</span>
                        </div>
                    </div>
                </article>`;
  const marker = '<div class="blog-grid" id="blogGrid">';
  if (!blog.includes(marker)) throw new Error('blog grid marker not found');
  blog = blog.replace(marker, `${marker}\n                ${card}`);
  fs.writeFileSync(blogPath, blog, 'utf8');
}
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: article.faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

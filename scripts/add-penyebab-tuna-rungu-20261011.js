'use strict';
// Generator artikel "Penyebab Tuna Rungu" (cycle #76, 2026-10-11).
// Kartu blog.html TIDAK ditulis di sini: artikel dijadwalkan, kartu ditambah workflow saat tanggal tayang.
const fs = require('fs');
const path = require('path');
const { renderArticlePage, stripTags, SITE } = require('./lib/article-page');
const { imageSize } = require('./lib/article-skeleton');

const ROOT = path.resolve(__dirname, '..');
const slug = 'penyebab-tuna-rungu';
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const DATE = '2026-10-10';

const image = (file, alt, caption) => {
  const size = imageSize(path.join(ROOT, file));
  return { file, w: size.w, h: size.h, alt, caption, credit: CREDIT };
};
const fig = (file, alt, caption) => {
  const s = imageSize(path.join(ROOT, file));
  return `<figure class="article-inline-image"><img src="../${file}" alt="${alt}" loading="lazy" width="${s.w}" height="${s.h}"><figcaption>${caption} <span class="kredit">${CREDIT}</span></figcaption></figure>`;
};
const p = (text) => `<p>${text}</p>`;
const h2 = (id, text) => `<h2 id="${id}">${text}</h2>`;
const h3 = (text) => `<h3>${text}</h3>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const ol = (items) => `<ol>${items.map((x) => `<li>${x}</li>`).join('')}</ol>`;

// Hero: potongan lanskap dari Dokumentasi/museum-gunung-merapi-keluarga-besar-foto-bersama-istana-024.webp
const hero = image(
  'Dokumentasi/artikel/penyebab-tuna-rungu-kegiatan-kelompok.webp',
  'Rombongan siswa dan pendamping YUKA berfoto bersama di dalam ruang museum saat kunjungan edukasi',
  'Dokumentasi kunjungan edukasi siswa dan pendamping YUKA di sebuah museum. Foto ini dokumentasi kegiatan kelompok, bukan foto pemeriksaan pendengaran.'
);
const bodyImages = {
  temple: 'Dokumentasi/candi-plaosan-anak-anak-wisata-candi-borobudur-002.webp',
  family: 'Dokumentasi/candi-plaosan-keluarga-wisata-candi-borobudur-050.webp',
  costume: 'Dokumentasi/candi-plaosan-anak-kostum-tradisional-candi-borobudur-076.webp',
  skill: 'Dokumentasi/cocopandan-lemon-pelatihan-membatik-wanita-berhijab-001.webp',
};

const faq = [
  { q: 'Apa penyebab tuna rungu yang paling sering pada bayi?', a: 'Menurut CDC, sekitar satu dari dua kasus gangguan pendengaran pada bayi berkaitan dengan faktor genetik. Sekitar satu dari empat kasus lain berkaitan dengan infeksi ibu saat hamil, komplikasi setelah lahir, dan cedera kepala.' },
  { q: 'Apakah tuna rungu selalu diturunkan dari orang tua?', a: 'Tidak. CDC menyebut hanya sebagian bayi dengan penyebab genetik yang memiliki anggota keluarga dengan gangguan pendengaran, dan banyak kasus lain berasal dari infeksi, komplikasi kelahiran, atau penyakit setelah lahir. Konseling genetik dapat membantu keluarga memahami peluangnya bila ada riwayat dalam keluarga.' },
  { q: 'Apakah rubela saat hamil bisa menyebabkan anak tuli?', a: 'Bisa. WHO menjelaskan bahwa infeksi rubela di awal kehamilan dapat menular ke janin dan menyebabkan sindrom rubela kongenital, yang dapat disertai gangguan pendengaran, kelainan mata, kelainan jantung, dan keterlambatan perkembangan. Vaksinasi sebelum hamil adalah pencegahan terbaik.' },
  { q: 'Bayi saya lolos skrining pendengaran, apakah pasti aman?', a: 'Lolos skrining adalah kabar baik, tetapi bukan jaminan seumur hidup. CDC mencatat gangguan pendengaran akibat CMV bawaan bisa muncul belakangan, bahkan pada bayi yang lolos tes saat lahir. Tetap pantau respons anak terhadap suara dan perkembangan bicaranya.' },
  { q: 'Kapan bayi sebaiknya menjalani skrining pendengaran?', a: 'Pedoman 1-3-6 yang dipakai CDC menyarankan skrining sebelum usia 1 bulan, pemeriksaan diagnostik sebelum usia 3 bulan bila tidak lolos, dan mulai intervensi dini sebelum usia 6 bulan. Tanyakan jadwalnya kepada bidan, dokter, atau rumah sakit tempat bayi lahir.' },
  { q: 'Apakah infeksi telinga bisa membuat anak tuli permanen?', a: 'Infeksi telinga tengah yang kronis dan cairan di telinga tengah yang menetap termasuk penyebab gangguan pendengaran pada anak menurut WHO. Gangguan jenis hantaran sering dapat diobati dengan obat atau tindakan, jadi infeksi yang berulang atau telinga yang terus berair perlu diperiksakan.' },
  { q: 'Apakah memakai earphone bisa merusak pendengaran anak?', a: 'Paparan suara keras termasuk faktor risiko yang dapat dicegah. Kementerian Kesehatan mengimbau volume earphone paling tinggi 60 persen dan pemakaian tidak lebih dari 60 menit tanpa jeda. Pilih juga mainan yang tidak terlalu bising.' },
  { q: 'Apakah tuna rungu bisa dicegah sepenuhnya?', a: 'Tidak semua penyebab dapat dicegah, terutama sebagian faktor genetik. Namun WHO menyebut hampir 60 persen gangguan pendengaran pada anak berasal dari penyebab yang dapat dihindari, misalnya lewat imunisasi, perawatan kehamilan dan persalinan yang baik, serta penanganan penyakit telinga sejak dini.' },
];

const faqHtml = `<div class="faq-list"><h2 id="faq">Pertanyaan yang Sering Diajukan tentang Penyebab Tuna Rungu</h2>${faq.map((f) => `<h3>${f.q}</h3><p>${f.a}</p>`).join('')}</div>`;

const bodyHtml = [
  '<div class="jawaban-singkat"><p><strong>Jawaban singkat:</strong> penyebab tuna rungu pada anak dapat muncul sebelum lahir, saat lahir, atau setelah lahir. Penyebab yang paling sering dibahas lembaga kesehatan adalah faktor genetik, infeksi saat hamil seperti rubela dan CMV, bayi lahir kurang bulan atau berat lahir rendah, kuning berat, kekurangan oksigen saat lahir, meningitis, infeksi telinga kronis, obat yang merusak telinga, suara keras, dan cedera kepala. WHO memperkirakan hampir 60 persen gangguan pendengaran pada anak berasal dari penyebab yang dapat dicegah.</p></div>',
  '<div class="toc"><h3>Daftar Isi</h3><ol><li><a href="#gambaran">Gambaran penyebab tuna rungu</a></li><li><a href="#genetik">Faktor genetik dan bawaan</a></li><li><a href="#kehamilan">Infeksi saat kehamilan</a></li><li><a href="#persalinan">Masa persalinan dan bayi baru lahir</a></li><li><a href="#masa-anak">Infeksi pada masa anak</a></li><li><a href="#lingkungan">Obat, suara keras, dan cedera</a></li><li><a href="#ringkasan">Tabel ringkasan penyebab</a></li><li><a href="#skrining">Skrining pendengaran bayi</a></li><li><a href="#pencegahan">Langkah pencegahan</a></li><li><a href="#curiga">Bila orang tua curiga</a></li><li><a href="#faq">Pertanyaan yang sering diajukan</a></li></ol></div>',

  h2('gambaran', 'Gambaran Umum Penyebab Tuna Rungu pada Anak'),
  p('Tuna rungu adalah istilah yang dipakai di Indonesia untuk anak atau orang dewasa yang mengalami hambatan pendengaran, dari ringan sampai sangat berat. Pengertian lengkap, ciri, dan cara berkomunikasinya sudah kami bahas di artikel <a href="tuna-rungu-adalah">tuna rungu adalah</a>. Tulisan ini khusus menelusuri pertanyaan yang sering muncul setelah anak didiagnosis: mengapa hal ini terjadi, dan apa yang masih bisa dicegah?'),
  p('CDC menjelaskan bahwa gangguan pendengaran bisa terjadi kapan saja sepanjang hidup, mulai dari sebelum lahir hingga dewasa. Kementerian Kesehatan juga menegaskan hal yang sama dalam peringatan Hari Pendengaran Sedunia 2026: gangguan pendengaran dapat terjadi sejak lahir hingga lanjut usia, sehingga pencegahan dan deteksi dini perlu dilakukan sejak awal.'),
  p('Letak gangguannya juga memengaruhi penanganan. CDC membagi gangguan pendengaran menjadi empat jenis: hantaran (konduktif), sensorineural, campuran, dan gangguan spektrum neuropati auditori. Jenis hantaran sering dapat diobati dengan obat atau tindakan, sedangkan jenis sensorineural berasal dari telinga dalam atau saraf pendengaran. Perbedaan keduanya kami uraikan di <a href="gangguan-pendengaran-konduktif-vs-sensorineural">gangguan pendengaran konduktif vs sensorineural</a>.'),
  p('Satu hal penting sebelum membaca lebih jauh: mengetahui penyebab bukan untuk mencari siapa yang salah. Banyak penyebab terjadi di luar kendali keluarga. Pengetahuan ini berguna untuk pemantauan adik atau kehamilan berikutnya, untuk memilih pemeriksaan yang tepat, dan untuk membantu tenaga kesehatan menyusun rencana dukungan.'),

  h2('genetik', 'Faktor Genetik dan Kondisi Bawaan'),
  p('Faktor keturunan adalah penyebab yang paling besar porsinya pada bayi. Menurut CDC, sekitar satu dari dua kasus gangguan pendengaran pada bayi disebabkan faktor genetik. Sebagian bayi tersebut memiliki anggota keluarga yang juga mengalami gangguan pendengaran, tetapi tidak semuanya.'),
  p('CDC juga mencatat bahwa sekitar satu dari tiga bayi dengan gangguan pendengaran genetik memiliki sindrom, artinya ada kondisi lain yang menyertai, misalnya sindrom Down atau sindrom Usher. Karena itu, anak dengan kondisi seperti <a href="down-syndrome-adalah">down syndrome</a> perlu diperiksa pendengarannya secara berkala, bukan hanya sekali saat lahir.'),
  p('WHO membedakan gangguan pendengaran herediter dan nonherediter pada periode sebelum lahir, serta menyebut adanya gangguan pendengaran genetik yang baru muncul belakangan atau memburuk perlahan. Artinya, anak yang lolos tes saat lahir tetap bisa mengalami penurunan pendengaran beberapa tahun kemudian. Pemantauan perkembangan bahasa tetap penting walaupun hasil skrining awal baik.'),
  p('Bagi keluarga yang memiliki riwayat ketulian, WHO memasukkan konseling genetik ke dalam strategi pencegahan. Konseling tidak dimaksudkan untuk menakut-nakuti, tetapi membantu keluarga memahami peluang, pilihan pemeriksaan, dan persiapan bila anak berikutnya juga membutuhkan dukungan.'),
  fig(bodyImages.family, 'Anak-anak dan dua pendamping perempuan berfoto di gerbang batu sebuah candi saat kunjungan edukasi', 'Keluarga dan pendamping adalah sumber informasi pertama tentang riwayat kesehatan anak. Foto ini dokumentasi kunjungan edukasi YUKA ke kompleks candi, bukan kegiatan medis.'),

  h2('kehamilan', 'Infeksi Saat Kehamilan: Rubela dan CMV'),
  p('WHO menyebut infeksi di dalam kandungan, terutama rubela dan cytomegalovirus (CMV), sebagai penyebab gangguan pendengaran pada periode sebelum lahir. Kedua infeksi ini sering ringan atau bahkan tanpa gejala pada ibu, sehingga keluarga baru menyadarinya setelah bayi lahir.'),
  h3('Rubela (campak Jerman)'),
  p('Lembar fakta WHO tentang rubela menjelaskan bahwa ibu yang terinfeksi di awal kehamilan memiliki peluang 90 persen menularkan virus kepada janinnya. Kerusakan paling berat terjadi di awal kehamilan, terutama trimester pertama. Bayi yang terdampak dapat lahir dengan sindrom rubela kongenital, yang bisa disertai gangguan pendengaran, kelainan mata, kelainan jantung bawaan, dan keterlambatan perkembangan.'),
  p('WHO menyebut rubela sebagai penyebab cacat lahir terbesar yang dapat dicegah dengan vaksin, dengan perkiraan sekitar 100.000 bayi lahir dengan sindrom rubela kongenital setiap tahun di seluruh dunia. Vaksinasi adalah cara terbaik untuk mencegahnya, sehingga status imunisasi perempuan sebaiknya dipastikan sebelum merencanakan kehamilan.'),
  h3('Cytomegalovirus (CMV) bawaan'),
  p('CDC menjelaskan bahwa gangguan pendengaran sering ditemukan pada bayi dengan infeksi CMV bawaan. Gangguan itu bisa sudah ada saat lahir atau baru muncul kemudian, termasuk pada bayi yang lolos skrining pendengaran bayi baru lahir. Gangguan bisa dimulai di satu telinga lalu mengenai telinga lainnya, dan dapat memburuk dari ringan menjadi berat selama dua tahun pertama, masa yang sangat penting untuk belajar bahasa.'),
  p('Karena itu CDC menganjurkan bayi dengan CMV bawaan menjalani pemeriksaan pendengaran secara rutin. Bila dokter menyebut bayi pernah terinfeksi CMV, tanyakan jadwal pemeriksaan lanjutan dan catat di buku kesehatan anak.'),

  h2('persalinan', 'Masa Persalinan dan Bayi Baru Lahir'),
  p('Periode di sekitar kelahiran adalah kelompok penyebab berikutnya. WHO menyebut empat hal pada periode perinatal: asfiksia lahir atau kekurangan oksigen saat dilahirkan, hiperbilirubinemia atau kuning berat pada masa bayi baru lahir, berat lahir rendah, serta penyakit lain di masa perinatal beserta penanganannya.'),
  p('CDC memberi gambaran yang lebih praktis untuk orang tua. Peluang gangguan pendengaran meningkat bila bayi dirawat lima hari atau lebih di ruang perawatan intensif bayi (NICU) atau mengalami komplikasi selama dirawat di sana, memerlukan prosedur khusus seperti transfusi darah untuk mengatasi kuning yang berat, atau memiliki bentuk kepala, wajah, maupun telinga yang berbeda dari biasanya.'),
  p('Bayi yang lahir kurang bulan sering memiliki beberapa faktor ini sekaligus: berat lahir rendah, perawatan NICU yang lama, kuning, dan obat-obatan tertentu selama perawatan. Hal ini bukan berarti setiap bayi prematur pasti mengalami gangguan pendengaran. Namun bayi dengan riwayat tersebut sebaiknya dipastikan mendapat skrining sebelum pulang dan dipantau lebih teliti setelahnya.'),
  p('Kuning pada bayi baru lahir umumnya ringan dan hilang sendiri. Yang dimaksud penyebab di sini adalah kuning berat yang membutuhkan penanganan khusus. Bila bayi tampak sangat kuning, lemas, atau malas menyusu, segera bawa ke fasilitas kesehatan. Penanganan yang cepat adalah bagian dari perawatan bayi baru lahir yang baik.'),
  fig(bodyImages.temple, 'Rombongan anak laki-laki berkaus seragam kegiatan berpose di tangga candi bersama pendamping', 'Setiap anak membawa riwayat kelahiran dan kesehatan yang berbeda. Foto ini dokumentasi kunjungan edukasi siswa YUKA ke kompleks candi.'),

  h2('masa-anak', 'Infeksi pada Masa Anak: Meningitis dan Otitis Media'),
  p('Setelah lahir, infeksi tetap menjadi penyebab penting. WHO menyebut tiga hal untuk masa anak dan remaja: infeksi telinga kronis yang bernanah (otitis media supuratif kronis), cairan di telinga tengah yang menetap (otitis media nonsupuratif kronis), serta meningitis dan infeksi lainnya.'),
  h3('Meningitis'),
  p('Meningitis adalah infeksi pada selaput yang melapisi otak dan sumsum tulang belakang. CDC memasukkan riwayat meningitis ke dalam daftar hal yang meningkatkan peluang anak mengalami gangguan pendengaran. Anak yang pernah dirawat karena meningitis sebaiknya diperiksa pendengarannya setelah sembuh, walaupun tampak sudah pulih. Imunisasi rutin sesuai jadwal termasuk langkah pencegahan yang dianjurkan CDC.'),
  h3('Infeksi telinga tengah dan cairan di telinga'),
  p('Infeksi telinga tengah sering dialami anak kecil. Bila infeksi berulang, telinga terus berair, atau cairan menetap di balik gendang telinga, suara sulit diteruskan ke telinga dalam. Gangguan seperti ini termasuk jenis hantaran, yang menurut CDC sering dapat diobati dengan obat atau tindakan. Karena itu infeksi telinga jangan dibiarkan berlarut, apalagi diobati sendiri dengan meneteskan bahan yang tidak dianjurkan dokter.'),
  p('Pendengaran yang terganggu walau ringan dan sementara dapat membuat anak tampak tidak memperhatikan, sering meminta pengulangan, atau terlambat bicara. Bila orang tua melihat tanda ini, pemeriksaan telinga adalah langkah yang sederhana sebelum menyimpulkan anak memiliki masalah perilaku atau <a href="speech-delay-adalah">speech delay</a>.'),

  h2('lingkungan', 'Obat Ototoksik, Suara Keras, Cedera, dan Faktor Lain'),
  p('WHO mencantumkan sejumlah faktor yang dapat terjadi pada usia berapa pun: sumbatan kotoran telinga, cedera pada telinga atau kepala, paparan suara keras, obat-obatan yang bersifat ototoksik, bahan kimia ototoksik di tempat kerja, kekurangan gizi, infeksi virus dan penyakit telinga lainnya, serta gangguan pendengaran genetik yang muncul belakangan.'),
  p('Obat ototoksik adalah obat yang dapat merusak telinga dalam. Sebagian obat ini tetap dibutuhkan untuk menyelamatkan nyawa, misalnya pada infeksi berat, sehingga keputusan memakainya ada di tangan dokter. Peran keluarga adalah tidak memberi obat tanpa resep, menyampaikan riwayat gangguan pendengaran dalam keluarga, dan bertanya apakah perlu pemantauan pendengaran selama pengobatan. Jangan menghentikan obat sendiri tanpa berkonsultasi.'),
  p('Suara keras adalah penyebab yang paling mudah dicegah. Dalam siaran Hari Pendengaran Sedunia 2026, Kementerian Kesehatan menyebut paparan suara keras dari perangkat audio pribadi, musik bervolume tinggi, dan lingkungan bising sebagai faktor risiko utama, khususnya pada anak dan generasi muda. Kemenkes mengimbau volume earphone paling tinggi 60 persen dengan durasi tidak lebih dari 60 menit tanpa jeda.'),
  p('Cedera kepala yang berat juga dapat merusak pendengaran. CDC menyebut cedera kepala yang sampai memerlukan rawat inap sebagai salah satu faktor yang meningkatkan peluang gangguan pendengaran pada anak, sehingga pemeriksaan pendengaran setelah pemulihan patut dipertimbangkan.'),
  fig(bodyImages.costume, 'Sekelompok siswi berkostum tari tradisional berpose di tangga candi', 'Aktivitas seni dan tampil bersama tetap dapat diikuti anak dengan beragam kebutuhan bila lingkungannya mendukung. Foto ini dokumentasi kegiatan siswi YUKA di kompleks candi.'),

  h2('ringkasan', 'Tabel Ringkasan Penyebab Tuna Rungu Menurut Waktu Terjadinya'),
  p('Tabel berikut merangkum penyebab yang disebut WHO dan CDC berdasarkan waktu terjadinya, beserta langkah yang dapat dibicarakan keluarga dengan tenaga kesehatan. Tabel ini adalah alat bantu diskusi, bukan alat diagnosis.'),
  '<table class="article-table"><caption>Penyebab tuna rungu menurut periode dan langkah yang dapat diambil keluarga</caption><thead><tr><th>Periode</th><th>Contoh penyebab</th><th>Langkah yang dapat diambil</th></tr></thead><tbody><tr><td>Sebelum lahir</td><td>Faktor genetik, infeksi rubela dan CMV dalam kandungan</td><td>Imunisasi sebelum hamil, pemeriksaan kehamilan rutin, konseling genetik bila ada riwayat keluarga</td></tr><tr><td>Sekitar kelahiran</td><td>Kekurangan oksigen saat lahir, kuning berat, berat lahir rendah, perawatan NICU yang lama</td><td>Persalinan di fasilitas kesehatan, penanganan kuning yang cepat, skrining pendengaran sebelum bayi pulang</td></tr><tr><td>Masa anak</td><td>Meningitis, infeksi telinga kronis, cairan di telinga tengah</td><td>Imunisasi sesuai jadwal, periksa infeksi telinga yang berulang, cek pendengaran setelah meningitis</td></tr><tr><td>Sepanjang usia</td><td>Suara keras, obat ototoksik, cedera kepala, kotoran telinga yang menyumbat, gangguan genetik yang muncul belakangan</td><td>Batasi volume dan durasi earphone, obat hanya sesuai resep, pantau bahasa dan respons anak terhadap suara</td></tr></tbody></table>',
  p('Pada sebagian anak, penyebabnya mungkin belum dapat dipastikan. Hal itu tidak menghalangi anak untuk mendapat dukungan. Yang paling menentukan perkembangan bahasa anak adalah seberapa cepat gangguan ditemukan dan seberapa cepat dukungan dimulai.'),

  h2('skrining', 'Skrining Pendengaran Bayi: Menemukan Lebih Awal'),
  p('Karena banyak penyebab tidak terlihat dari luar, skrining adalah cara utama menemukan gangguan pendengaran sejak dini. CDC menjelaskan bahwa skrining pendengaran adalah tes untuk melihat apakah seseorang mungkin mengalami gangguan pendengaran. Tes ini mudah, tidak menyakitkan, dan biasanya hanya berlangsung beberapa menit.'),
  p('Bila bayi atau anak tidak lolos skrining, CDC menekankan pentingnya pemeriksaan pendengaran lengkap (evaluasi audiologi) sesegera mungkin. Tidak lolos skrining belum berarti anak pasti tuli, tetapi menunda pemeriksaan lanjutan berarti kehilangan waktu yang berharga.'),
  '<table class="article-table"><caption>Target 1-3-6 deteksi dan intervensi dini pendengaran menurut CDC</caption><thead><tr><th>Batas usia</th><th>Target</th><th>Yang perlu dilakukan orang tua</th></tr></thead><tbody><tr><td>Sebelum 1 bulan</td><td>Skrining pendengaran</td><td>Tanyakan skrining sebelum bayi pulang dari tempat bersalin</td></tr><tr><td>Sebelum 3 bulan</td><td>Pemeriksaan diagnostik bila tidak lolos skrining</td><td>Datangi rujukan pemeriksaan pendengaran lengkap tanpa menunda</td></tr><tr><td>Sebelum 6 bulan</td><td>Mulai layanan intervensi dini</td><td>Ikuti program intervensi dan dukungan komunikasi yang dianjurkan</td></tr></tbody></table>',
  p('Kementerian Kesehatan kini juga menjalankan skrining pendengaran melalui program Cek Kesehatan Gratis. Hingga 31 Desember 2025, dari 18.697.124 orang yang menjalani skrining pendengaran, sebanyak 337.056 orang atau 1,8 persen terdeteksi mengalami gangguan pendengaran. Angka ini menunjukkan bahwa gangguan pendengaran tidak jarang dan sering baru ditemukan bila dicari.'),
  p('Bayi dengan faktor risiko, seperti riwayat CMV, perawatan NICU yang lama, atau riwayat ketulian dalam keluarga, tetap perlu dipantau walaupun lolos skrining awal. Pengetahuan tentang tahapan bahasa seperti <a href="babbling-dan-cooing-tahap-perkembangan-bahasa">babbling dan cooing</a> membantu orang tua menyadari bila ada yang terlewat.'),

  h2('pencegahan', 'Langkah Pencegahan yang Dapat Dilakukan Keluarga'),
  p('WHO menyebut hampir 60 persen gangguan pendengaran pada anak berasal dari penyebab yang dapat dihindari melalui langkah kesehatan masyarakat. Strategi yang disebut WHO antara lain imunisasi, praktik perawatan ibu dan anak yang baik, konseling genetik, penanganan penyakit telinga yang umum, mendengar dengan aman, dan penggunaan obat secara rasional. Berikut langkah praktis yang dapat dilakukan keluarga:'),
  ol([
    '<strong>Pastikan status imunisasi sebelum hamil.</strong> Tanyakan kepada tenaga kesehatan tentang perlindungan terhadap rubela sebelum merencanakan kehamilan.',
    '<strong>Rutin memeriksakan kehamilan.</strong> CDC menganjurkan kehamilan yang sehat sebagai langkah pencegahan pertama. Sampaikan bila ibu demam, muncul ruam, atau sakit selama hamil.',
    '<strong>Bersalin di fasilitas kesehatan.</strong> Penanganan kekurangan oksigen saat lahir dan kuning berat lebih cepat bila persalinan didampingi tenaga terlatih.',
    '<strong>Minta skrining pendengaran bayi.</strong> Usahakan sebelum bayi berusia 1 bulan, lalu ikuti rujukan bila tidak lolos.',
    '<strong>Lengkapi imunisasi anak sesuai jadwal.</strong> CDC memasukkan vaksinasi rutin sebagai cara melindungi pendengaran anak.',
    '<strong>Periksakan infeksi telinga yang berulang.</strong> Telinga yang berair, nyeri, atau anak yang tiba-tiba kurang merespons perlu diperiksa dokter.',
    '<strong>Gunakan obat sesuai resep.</strong> Hindari memberi obat sembarangan dan sampaikan riwayat gangguan pendengaran keluarga kepada dokter.',
    '<strong>Kendalikan kebisingan.</strong> Jauhkan anak dari mainan yang sangat bising, lalu terapkan aturan 60 persen volume dan 60 menit pemakaian earphone.',
  ]),
  p('Dalam pandangan Islam, menjaga kesehatan adalah bagian dari amanah. Ikhtiar seperti imunisasi, pemeriksaan kehamilan, dan skrining bayi adalah bentuk syukur atas nikmat pendengaran. Bila gangguan tetap terjadi, itu bukan tanda kurangnya ikhtiar orang tua, dan anak tetap berhak tumbuh dengan dukungan penuh.'),
  fig(bodyImages.skill, 'Beberapa siswi berkerudung merah muda duduk di lantai sambil memeras lemon dan mengaduk adonan di dalam panci', 'Kegiatan praktik keterampilan dengan bahan sederhana. Anak belajar paling baik ketika komunikasi di sekitarnya jelas dan dapat diakses. Foto ini dokumentasi kegiatan keterampilan YUKA.'),

  h2('curiga', 'Bila Orang Tua Curiga Anak Mengalami Gangguan Pendengaran'),
  p('Kecurigaan orang tua adalah alasan yang cukup untuk meminta pemeriksaan. Tanda yang perlu diperhatikan antara lain bayi tidak terkejut oleh suara keras, tidak menoleh ke arah suara setelah usia beberapa bulan, tidak mengoceh, atau anak yang lebih besar sering meminta pengulangan dan menyalakan televisi sangat keras. Langkah yang dapat ditempuh:'),
  ol([
    'Catat tanda yang terlihat, kapan muncul, dan dalam situasi apa.',
    'Kumpulkan riwayat penting: kehamilan, infeksi selama hamil, berat lahir, perawatan NICU, kuning, meningitis, infeksi telinga, dan riwayat keluarga.',
    'Konsultasikan ke puskesmas atau dokter anak, lalu minta rujukan ke dokter THT atau layanan audiologi.',
    'Jalani pemeriksaan lengkap sampai jenis dan derajat gangguan diketahui.',
    'Mulai <a href="intervensi-dini">intervensi dini</a> dan pilihan komunikasi yang sesuai, misalnya <a href="bahasa-isyarat-tuna-rungu">bahasa isyarat</a>, alat bantu dengar, atau <a href="terapi-wicara">terapi wicara</a>, sesuai anjuran tenaga profesional.',
  ]),
  p('Pertanyaan tentang kesembuhan sering muncul pada tahap ini. Jawabannya bergantung pada jenis dan penyebab gangguan, dan sudah kami bahas di <a href="apakah-tuna-rungu-bisa-sembuh">apakah tuna rungu bisa sembuh</a>. Untuk kehidupan sehari-hari, panduan <a href="cara-berkomunikasi-dengan-anak-tuna-rungu">cara berkomunikasi dengan anak tuna rungu</a> dan <a href="dukungan-keluarga-anak-abk">dukungan keluarga</a> dapat membantu. Orang tua yang baru menerima kabar ini juga dapat membaca <a href="menerima-diagnosis-anak-abk">menerima diagnosis anak ABK</a>.'),
  p('Anak dengan gangguan pendengaran dapat belajar dan berprestasi. Pilihan sekolahnya beragam, mulai dari <a href="pendidikan-inklusi">pendidikan inklusi</a> sampai <a href="slb-adalah">SLB</a>, dan <a href="asesmen-abk">asesmen ABK</a> membantu menentukan dukungan belajar yang paling sesuai.'),

  faqHtml,
].join('\n');

const medicalBlock = `<div class="article-provenance" style="margin:2rem 0;padding:1.5rem;background:#FFFFFF;border:1px solid #DDE3F0;border-radius:10px;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Tentang artikel ini</h3>
          <ul style="margin:0.5rem 0 0;padding-left:1.25rem;font-size:0.95rem;line-height:1.85;color:#333;">
            <li><strong>Ditulis oleh:</strong> Tim YUKA (Yayasan Ukhuwah Kaffah Amanatullah), pengelola Sekolah Inklusi Taruna Imani, Sleman, Yogyakarta.</li>
            <li><strong>Dasar rujukan:</strong> who.int, cdc.gov, kemkes.go.id. Semua rujukan ditautkan langsung di bagian sumber di atas.</li>
            <li><strong>Terbit:</strong> 10 Oktober 2026. <strong>Pembaruan terakhir:</strong> 10 Oktober 2026.</li>
<!-- MEDICAL_REVIEW_STATUS:START -->
            <li><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik, <strong>belum ditinjau oleh dokter berlisensi</strong>. Tinjauan oleh tenaga medis berkredensial sedang kami siapkan dan status ini akan diperbarui di halaman ini begitu selesai. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk keputusan diagnosis atau terapi, rujuklah pada dokter anak, dokter THT, atau layanan audiologi.</li>
          <!-- MEDICAL_REVIEW_STATUS:END -->
            <li><strong>Kebijakan koreksi:</strong> jika Anda menemukan klaim yang keliru atau sumber yang tidak cocok, beri tahu kami lewat <a href="/kontak">halaman kontak</a>. Kami memperbaiki isinya dan mencantumkan catatan koreksi secara terbuka.</li>
          </ul>
        </div>
    <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga profesional. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>`;

const article = {
  slug,
  titleTag: 'Penyebab Tuna Rungu pada Anak: Faktor Risiko dan Pencegahan | YUKA',
  metaDesc: 'Penyebab tuna rungu pada anak: faktor genetik, rubela dan CMV saat hamil, prematur, kuning berat, meningitis, infeksi telinga, obat, dan bising. Plus skrining dan pencegahan.',
  keywords: 'penyebab tuna rungu, penyebab tuli pada bayi, penyebab gangguan pendengaran anak, rubela kongenital, CMV bawaan, skrining pendengaran bayi',
  ogTitle: 'Penyebab Tuna Rungu pada Anak dan Cara Mencegahnya',
  ogDesc: 'Panduan orang tua tentang penyebab tuna rungu sebelum lahir, saat lahir, dan setelah lahir, lengkap dengan skrining 1-3-6 dan langkah pencegahan.',
  datePublished: DATE,
  dateModified: DATE,
  dateDisplay: '10 Okt 2026',
  readTime: '12 menit baca',
  category: 'Kesehatan',
  h1: 'Penyebab Tuna Rungu pada Anak: Dari Faktor Genetik hingga Infeksi, dan Cara Mencegahnya',
  crumb: 'Penyebab Tuna Rungu',
  parent: { href: 'tuna-rungu-adalah', name: 'Tuna Rungu' },
  about: ['Tunarungu', 'Gangguan pendengaran pada anak'],
  image: hero,
  bodyHtml,
  faq,
  related: [
    { href: 'tuna-rungu-adalah', title: 'Tuna Rungu Adalah: Pengertian, Ciri, dan Cara Berkomunikasi', desc: 'Pengertian tuna rungu, klasifikasi, dan ciri pada bayi hingga remaja.' },
    { href: 'gangguan-pendengaran-konduktif-vs-sensorineural', title: 'Gangguan Pendengaran Konduktif vs Sensorineural', desc: 'Perbedaan letak gangguan dan pilihan penanganannya.' },
    { href: 'apakah-tuna-rungu-bisa-sembuh', title: 'Apakah Tuna Rungu Bisa Sembuh?', desc: 'Penjelasan peluang pemulihan menurut jenis gangguan pendengaran.' },
    { href: 'intervensi-dini', title: 'Intervensi Dini untuk Anak Berkebutuhan Khusus', desc: 'Mengapa dukungan yang dimulai lebih awal sangat berarti.' },
  ],
  tags: ['TunaRungu', 'GangguanPendengaran', 'SkriningBayi', 'DeteksiDini'],
  sources: [
    { url: 'https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss', label: 'WHO, Deafness and hearing loss (fact sheet)' },
    { url: 'https://www.who.int/news-room/fact-sheets/detail/rubella', label: 'WHO, Rubella (fact sheet)' },
    { url: 'https://www.cdc.gov/hearing-loss-children/about/index.html', label: 'CDC, About Hearing Loss in Children' },
    { url: 'https://www.cdc.gov/hearing-loss-children/about/types-of-hearing-loss.html', label: 'CDC, Types of Hearing Loss' },
    { url: 'https://www.cdc.gov/hearing-loss-children/screening/index.html', label: 'CDC, Screening for Hearing Loss' },
    { url: 'https://www.cdc.gov/cytomegalovirus/congenital-infection/hearing-loss.html', label: 'CDC, Congenital CMV and Hearing Loss' },
    { url: 'https://kemkes.go.id/eng/kemenkes-dorong-deteksi-dini-dan-perilaku-mendengar-aman', label: 'Kementerian Kesehatan RI, Kemenkes Dorong Deteksi Dini dan Perilaku Mendengar Aman (2 Maret 2026)' },
  ],
  sourcesCheckedNote: 'Sumber resmi diperiksa pada 11 Oktober 2026. Artikel ini tidak memberikan diagnosis atau rekomendasi pengobatan individual.',
  editorialHtml: medicalBlock,
};

let html = renderArticlePage(article);
// Node MedicalWebPage (pola artikel medis gelombang 1/2), tanpa reviewedBy karena belum ada peninjau nyata.
const medicalPage = {
  '@context': 'https://schema.org', '@type': 'MedicalWebPage',
  '@id': `${SITE}/artikel/${slug}#medicalwebpage`, url: `${SITE}/artikel/${slug}`,
  name: article.h1, inLanguage: 'id-ID', publisher: { '@id': `${SITE}/#organization` },
  datePublished: DATE, dateModified: DATE, specialty: 'https://schema.org/Otolaryngologic',
  medicalAudience: { '@type': 'MedicalAudience', audienceType: 'Patient', name: 'Orang tua, pengasuh, dan pendamping anak tunarungu' },
  about: { '@type': 'MedicalCondition', name: 'Tunarungu (Gangguan Pendengaran)', alternateName: 'Hearing Loss' },
  publishingPrinciples: { '@type': 'CreativeWork', name: 'Kebijakan Editorial YUKA', url: `${SITE}/kebijakan-editorial` },
};
const headEnd = html.indexOf('</head>');
if (headEnd < 0) throw new Error('</head> tidak ditemukan');
html = html.slice(0, headEnd) + `    <script type="application/ld+json">${JSON.stringify(medicalPage)}</script>\n` + html.slice(headEnd);

fs.writeFileSync(path.join(ROOT, 'artikel', `${slug}.html`), html, 'utf8');
console.log(JSON.stringify({ slug, bytes: html.length, bodyWords: stripTags(bodyHtml).split(/\s+/).filter(Boolean).length, faq: faq.length, sources: article.sources.length, images: [hero.file, ...Object.values(bodyImages)] }, null, 2));

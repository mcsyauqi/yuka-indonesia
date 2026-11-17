'use strict';
/*
 * Generator artikel stok antrean 1 sampai 5 Desember 2026 (stok-artikel-des-2026, situs #12 Yuka).
 *
 * Keyword dari sheet Keyword Data proyek (tab Riset Keyword Batch 4 dan 5, status Planned).
 * Tiap artikel ditambahkan satu per satu ke array `articles` dan diklaim di state slot sebelum ditulis.
 *
 * Foto: foto asli Wikimedia Commons berlisensi CC BY / CC BY-SA / CC0, pemotret dan lisensi dikreditkan
 * dan terlihat di caption, tanpa potret dekat satu anak di bawah judul diagnosis. Diagram SVG dari
 * scripts/lib/diagram-svg.js (bukan AI). Nol gambar AI.
 *
 *   node scripts/generate-stok-20261201-05.js --prepare   # tulis SVG diagram
 *   node scripts/generate-stok-20261201-05.js --raster    # SVG -> WebP (sharp)
 *   node scripts/generate-stok-20261201-05.js [slug]      # render artikel/*.html
 */

const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');
const svg = require('./lib/diagram-svg');

const ROOT = path.resolve(__dirname, '..');
const IMG = 'assets/images/artikel';
const articleDir = path.join(ROOT, 'artikel');
const imgPath = (file) => path.join(ROOT, file);
const LIC = {
  'CC BY-SA 4.0': 'https://creativecommons.org/licenses/by-sa/4.0/',
  'CC BY-SA 3.0': 'https://creativecommons.org/licenses/by-sa/3.0/',
  'CC BY-SA 2.0': 'https://creativecommons.org/licenses/by-sa/2.0/',
  'CC BY 4.0': 'https://creativecommons.org/licenses/by/4.0/',
  'CC BY 3.0': 'https://creativecommons.org/licenses/by/3.0/',
  'CC BY 2.0': 'https://creativecommons.org/licenses/by/2.0/',
  CC0: 'https://creativecommons.org/publicdomain/zero/1.0/',
};
const CM = (page, by, lic) => `Foto: <a href="${page}" target="_blank" rel="nofollow noopener">${by}</a> / Wikimedia Commons, ${lic === 'PD' ? 'domain publik' : `<a href="${LIC[lic]}" target="_blank" rel="nofollow noopener">${lic}</a>`}.`;
const fig = (file, w, h, alt, caption, credit) => `<figure><img src="/${file}" alt="${alt}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${credit}</span></figcaption></figure>`;
const diag = (file, alt, caption) => `<figure><img src="/${file}" alt="${alt}" width="1200" height="760" loading="lazy"><figcaption>${caption}<span class="kredit">Diagram: Tim YUKA.</span></figcaption></figure>`;
const p = (text) => `<p>${text}</p>`;
const toc = (sections) => `<div class="toc"><h3>Daftar Isi</h3><ol>${sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;
const ext = (url, text) => `<a href="${url}" target="_blank" rel="nofollow noopener">${text}</a>`;
const table = (caption, head, rows) => `<div class="table-wrap"><table><caption>${caption}</caption><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const ul = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
const a = (slug, text) => `<a href="/artikel/${slug}">${text}</a>`;
const faqBlock = (faq) => faq.map((f) => `<h3>${f.q}</h3>${p(f.a)}`).join('\n');

const diagrams = {};
const addDiagram = (file, markup) => { diagrams[file] = markup; };

const articles = [];


// ---------------------------------------------------------------------------
// Artikel 1: gangguan bahasa reseptif dan ekspresif (1 Des 2026)
// Keyword: "gangguan bahasa reseptif dan ekspresif" (tab Riset Keyword Batch 5, baris 50)
// ---------------------------------------------------------------------------
const URL_MP_LD = 'https://medlineplus.gov/ency/article/001545.htm';
const URL_NIDCD_DLD = 'https://www.nidcd.nih.gov/health/specific-language-impairment';
const URL_ASHA_LD = 'https://www.asha.org/public/speech/disorders/preschool-language-disorders/';
const B_HERO = 'https://commons.wikimedia.org/wiki/File:Pendongeng.jpg';
const B_BACA = 'https://commons.wikimedia.org/wiki/File:Ramstein_Library_hosts_Juneteenth_book_reading_(8489594).jpg';
const B_STORY = 'https://commons.wikimedia.org/wiki/File:%22Family_Story_Time%22_in_Bahrain_Library_DVIDS131587.jpg';

const bSections = [
  ['pengertian', 'Apa itu gangguan bahasa reseptif dan ekspresif'],
  ['perbedaan', 'Perbedaan bahasa reseptif dan ekspresif'],
  ['tanda', 'Tanda-tanda menurut usia'],
  ['penyebab', 'Penyebab dan faktor risiko'],
  ['diagnosis', 'Bagaimana gangguan bahasa didiagnosis'],
  ['terapi', 'Terapi dan penanganan'],
  ['rumah', 'Peran orang tua di rumah'],
  ['sekolah', 'Dukungan di sekolah'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const bFaq = [
  { q: 'Apa beda gangguan bahasa reseptif dan ekspresif?', a: 'Gangguan bahasa reseptif adalah kesulitan memahami bahasa, misalnya sulit mengerti ucapan orang lain dan mengikuti perintah. Gangguan bahasa ekspresif adalah kesulitan memakai bahasa untuk menyampaikan pikiran atau kebutuhan, misalnya sulit merangkai kata menjadi kalimat. MedlinePlus menyebut anak bisa mengalami salah satu atau keduanya sekaligus.' },
  { q: 'Apakah gangguan bahasa sama dengan speech delay?', a: 'Tidak persis sama. MedlinePlus menjelaskan bahwa pada keterlambatan bahasa, anak berkembang dengan pola yang sama seperti anak lain tetapi lebih lambat. Pada gangguan bahasa, bahasa tidak berkembang dengan pola yang biasa: anak mungkin punya sebagian kemampuan bahasa tetapi tidak yang lain. Anak dengan gangguan bahasa juga umumnya bisa mengeluarkan bunyi dan ucapannya bisa dimengerti, jadi masalahnya bukan pada pelafalan.' },
  { q: 'Seberapa banyak anak yang mengalami gangguan bahasa?', a: 'MedlinePlus menyebut hingga 1 dari setiap 14 anak memiliki gejala gangguan bahasa. NIDCD juga memperkirakan developmental language disorder (DLD) dialami sekitar 1 dari 14 anak usia taman kanak-kanak, sehingga termasuk gangguan perkembangan yang paling sering.' },
  { q: 'Apa penyebab gangguan bahasa pada anak?', a: 'Sebagian gangguan bahasa tidak memiliki penyebab yang jelas. ASHA menyebut beberapa kemungkinan penyebab atau faktor terkait, yaitu autisme, kelahiran prematur atau berat lahir rendah, sindrom Down atau sindrom fragile X, riwayat keluarga, dan gangguan pendengaran. MedlinePlus menambahkan bahwa gangguan bahasa jarang disebabkan oleh kurangnya kecerdasan.' },
  { q: 'Apakah anak yang belajar dua bahasa lebih berisiko mengalami gangguan bahasa?', a: 'Tidak. NIDCD menegaskan bahwa belajar lebih dari satu bahasa tidak menyebabkan DLD, dan belajar beberapa bahasa tidak merugikan anak yang mengalami DLD. ASHA juga menyebut memakai lebih dari satu bahasa di rumah tidak akan membuat anak bingung atau terlambat. Bila anak kesulitan di semua bahasa yang dipakainya, barulah perlu diperiksa terapis wicara.' },
  { q: 'Siapa yang mendiagnosis gangguan bahasa?', a: 'Pemeriksaan bahasa dilakukan oleh terapis wicara atau ahli patologi wicara-bahasa, kadang bersama neuropsikolog. Menurut NIDCD, evaluasi biasanya mencakup pengamatan langsung, wawancara atau kuesioner untuk orang tua dan guru, penilaian kemampuan belajar, dan tes bahasa terstandar. MedlinePlus menganjurkan tes pendengaran (audiometri) karena gangguan pendengaran adalah salah satu penyebab tersering masalah bahasa.' },
  { q: 'Apakah gangguan bahasa bisa sembuh?', a: 'NIDCD menjelaskan bahwa DLD biasanya tidak hilang begitu saja seiring bertambahnya usia, tetapi bentuknya berubah. Penanganan sejak usia prasekolah dapat memperbaiki kemampuan banyak anak, dan anak yang lebih besar pun tetap bisa mendapat manfaat dari terapi. Banyak orang dewasa dengan DLD mengembangkan strategi untuk mengelola kesulitannya dalam kehidupan sehari-hari.' },
  { q: 'Kapan orang tua perlu membawa anak ke dokter?', a: 'MedlinePlus memberi beberapa patokan, misalnya anak 18 bulan belum bisa mengikuti perintah sederhana, anak 24 bulan belum memakai setidaknya 25 kata, atau anak 36 bulan belum mengikuti perintah dua langkah. Bila Anda khawatir, temui dokter anak dan minta rujukan ke terapis wicara. Lebih baik memeriksakan lebih awal daripada menunggu.' },
];

addDiagram(`${IMG}/gangguan-bahasa-beda.webp`, svg.cards('Bahasa reseptif dan ekspresif', 'Contoh kesulitan menurut MedlinePlus dan ASHA', [
  { h: 'Reseptif (memahami)', items: ['Sulit mengerti ucapan orang lain', 'Sulit mengikuti perintah', 'Sulit mengenali gambar dan gestur', 'Sulit menjawab pertanyaan'] },
  { h: 'Ekspresif (menyampaikan)', items: ['Sulit merangkai kata jadi kalimat', 'Kosakata di bawah teman sebaya', 'Sering lupa kata yang tepat', 'Salah memakai bentuk waktu'] },
]));
addDiagram(`${IMG}/gangguan-bahasa-evaluasi.webp`, svg.flow('Langkah evaluasi bahasa anak', 'Rangkuman dari NIDCD dan MedlinePlus', [
  { h: 'Catat kekhawatiran', d: 'Tulis contoh kata, kalimat, dan perintah yang belum dipahami anak.' },
  { h: 'Dokter anak', d: 'Ceritakan riwayat perkembangan dan minta rujukan ke terapis wicara.' },
  { h: 'Tes pendengaran', d: 'Audiometri untuk menyingkirkan gangguan pendengaran.' },
  { h: 'Evaluasi bahasa', d: 'Pengamatan, wawancara orang tua dan guru, serta tes bahasa terstandar.' },
]));

const bBody = [
  p('<strong>Gangguan bahasa reseptif dan ekspresif</strong> adalah masalah perkembangan bahasa pada anak yang membuat anak sulit memahami bahasa (reseptif), sulit memakai bahasa untuk menyampaikan pikiran (ekspresif), atau keduanya. Menurut MedlinePlus, hingga 1 dari setiap 14 anak memiliki gejala gangguan bahasa. Kondisi ini berbeda dengan gangguan pelafalan, karena anak umumnya bisa mengeluarkan bunyi dengan jelas. Terapi wicara adalah penanganan utamanya, dan makin dini dimulai, makin besar manfaatnya.'),
  p('Banyak orang tua mengira anaknya hanya pemalu, keras kepala, atau kurang memperhatikan. Padahal anak yang sering tidak menuruti perintah bisa jadi tidak benar-benar memahami kata-kata yang diucapkan kepadanya. Artikel ini membahas pengertian gangguan bahasa reseptif dan ekspresif, perbedaannya, tanda-tanda menurut usia, penyebab, cara diagnosis, terapi, serta apa yang bisa dilakukan orang tua dan guru. Bila Anda sedang mencari informasi tentang keterlambatan bicara secara umum, baca juga ' + a('speech-delay-adalah', 'pengertian speech delay') + '.'),
  toc(bSections),

  '<h2 id="pengertian">Apa itu gangguan bahasa reseptif dan ekspresif</h2>',
  p(ext(URL_MP_LD, 'MedlinePlus (ensiklopedia medis Perpustakaan Kedokteran Nasional Amerika Serikat)') + ' mendefinisikan gangguan bahasa pada anak sebagai masalah dalam perkembangan keterampilan bahasa. Anak bisa mengalami kesulitan menyampaikan maksud atau pesannya kepada orang lain, yang disebut gangguan bahasa ekspresif, atau kesulitan memahami pesan dari orang lain, yang disebut gangguan bahasa reseptif. Sebagian anak mengalami keduanya sekaligus, dan kondisi ini kerap disebut gangguan bahasa campuran (reseptif-ekspresif).'),
  p('MedlinePlus menekankan satu hal yang sering disalahpahami: anak dengan gangguan bahasa mampu menghasilkan bunyi, dan ucapannya bisa dimengerti. Jadi masalahnya bukan pada cara anak melafalkan huruf, melainkan pada kemampuan memahami dan menyusun bahasa. Anak mungkin mengucapkan kata dengan jelas, tetapi kalimatnya sangat pendek, urutannya terbalik, atau ia tampak bingung saat diberi instruksi yang sedikit panjang.'),
  p('Bila penyebabnya tidak diketahui, MedlinePlus menyebut kondisi ini sebagai developmental language disorder atau DLD. ' + ext(URL_ASHA_LD, 'ASHA (Asosiasi Wicara-Bahasa-Pendengaran Amerika)') + ' menjelaskan bahwa gangguan bahasa pada anak juga dikenal dengan nama DLD atau specific language impairment (SLI). ASHA menegaskan bahwa gangguan bahasa adalah masalah memahami atau memakai kata, apa pun bahasa yang digunakan anak. Masalah ini bisa terlihat sejak anak masih balita, tetapi bisa juga baru disadari saat ia sudah bersekolah.'),
  p(ext(URL_NIDCD_DLD, 'NIDCD (Institut Nasional Ketulian dan Gangguan Komunikasi Lainnya, bagian dari NIH Amerika Serikat)') + ' menyebut DLD sebagai salah satu gangguan perkembangan yang paling sering, dialami sekitar 1 dari 14 anak usia taman kanak-kanak. Menurut NIDCD, kesulitan bahasa pada DLD tidak dijelaskan oleh kondisi lain seperti gangguan pendengaran atau autisme, atau oleh keadaan khusus seperti kurangnya paparan bahasa. DLD dapat memengaruhi kemampuan berbicara, mendengarkan, membaca, dan menulis, dan dampaknya berlanjut sampai dewasa.'),
  p('Angka 1 dari 14 berarti di sebuah kelas berisi 28 anak, secara rata-rata ada sekitar dua anak yang mungkin mengalami kesulitan bahasa. Banyak di antara mereka tidak terdeteksi karena tampak "baik-baik saja" dalam percakapan singkat. Karena itu penting bagi orang tua dan guru untuk mengenali tanda-tandanya.'),

  '<h2 id="perbedaan">Perbedaan bahasa reseptif dan ekspresif</h2>',
  p('Bahasa reseptif adalah kemampuan memahami. ASHA menyebut kemampuan memahami kata sebagai bahasa reseptif. Anak dengan masalah bahasa reseptif bisa kesulitan mengenali gestur, mengikuti petunjuk, mengenali gambar, dan menjawab pertanyaan. MedlinePlus menambahkan bahwa anak dengan gangguan reseptif bisa sulit memahami apa yang dikatakan orang lain, sulit mengikuti perintah yang diucapkan kepadanya, dan sulit mengatur pikirannya.'),
  p('Bahasa ekspresif adalah kemampuan menyampaikan. ASHA menyebut kemampuan merangkai kata untuk mengatakan sesuatu sebagai bahasa ekspresif. Anak dengan masalah bahasa ekspresif bisa kesulitan menyebut nama benda, memakai gestur, mempelajari lagu dan sajak, menirukan bunyi atau kata, bertanya, merangkai kata menjadi kalimat, bergiliran dalam percakapan, dan menyesuaikan cara bicara untuk orang dan tempat yang berbeda.'),
  diag(`${IMG}/gangguan-bahasa-beda.webp`, 'Diagram dua kartu: bahasa reseptif atau memahami, dengan contoh sulit mengerti ucapan dan mengikuti perintah, dan bahasa ekspresif atau menyampaikan, dengan contoh sulit merangkai kalimat dan kosakata terbatas', 'Dua sisi kemampuan bahasa. Anak bisa mengalami kesulitan di salah satu sisi atau keduanya.'),
  p('MedlinePlus merinci tanda gangguan bahasa ekspresif sebagai berikut: sulit merangkai kata menjadi kalimat, memakai kalimat pendek dan sederhana dengan urutan kata yang kadang keliru, sulit menemukan kata yang tepat sehingga sering memakai kata pengisi seperti "eh" atau "anu", kosakata di bawah anak lain seusianya, menghilangkan kata dalam kalimat, mengulang frasa tertentu atau menirukan sebagian atau seluruh pertanyaan, dan salah memakai keterangan waktu. Dalam bahasa Indonesia, yang terakhir bisa tampak sebagai kebingungan memakai kata seperti "sudah", "sedang", dan "akan".'),
  table('Perbandingan gangguan bahasa reseptif dan ekspresif', ['Aspek', 'Reseptif', 'Ekspresif'], [
    ['Kemampuan yang terganggu', 'Memahami bahasa yang didengar atau dilihat', 'Memakai bahasa untuk menyampaikan pikiran dan kebutuhan'],
    ['Contoh di rumah', 'Diminta mengambil sepatu, anak mengambil benda lain atau diam saja', 'Ingin minum tetapi hanya menarik tangan orang tua atau menyebut satu kata'],
    ['Contoh di kelas', 'Bingung saat guru memberi instruksi beberapa langkah', 'Sulit menceritakan kembali kegiatan atau isi cerita'],
    ['Sering disalahartikan sebagai', 'Tidak patuh, melamun, kurang fokus', 'Pemalu, malas bicara'],
  ]),
  p('Kedua jenis gangguan ini sering muncul bersamaan, karena memahami dan menyampaikan saling berkaitan. Anak yang tidak memahami kata tertentu tentu sulit memakainya dalam kalimat. Namun ada juga anak yang pemahamannya cukup baik tetapi kesulitan berbicara. Anak seperti ini biasanya mengerti hampir semua yang dikatakan kepadanya, tetapi tampak frustrasi karena tidak bisa membalas dengan kata-kata.'),
  p('Perlu diingat pula perbedaan antara gangguan bahasa dan keterlambatan bahasa. MedlinePlus menjelaskan bahwa pada keterlambatan bahasa, anak mengembangkan bicara dan bahasa dengan cara yang sama seperti anak lain, hanya lebih lambat. Pada gangguan bahasa, bicara dan bahasa tidak berkembang dengan pola yang biasa. Anak mungkin punya sebagian kemampuan bahasa tetapi tidak punya kemampuan lain, atau urutan perkembangannya berbeda dari biasanya. Pembahasan tentang peluang kemajuan anak yang terlambat bicara ada di artikel ' + a('apakah-speech-delay-bisa-sembuh', 'apakah speech delay bisa sembuh') + '.'),

  '<h2 id="tanda">Tanda-tanda menurut usia</h2>',
  p('MedlinePlus memberi patokan usia yang membantu orang tua memutuskan kapan perlu berkonsultasi. Tanda-tanda ini bukan diagnosis, tetapi sinyal bahwa anak sebaiknya diperiksa. Tanda bahwa anak mungkin belum memahami bahasa dengan baik:'),
  ul([
    'Usia 15 bulan, tidak melihat atau menunjuk 5 sampai 10 orang atau benda saat disebut namanya oleh orang tua atau pengasuh.',
    'Usia 18 bulan, tidak mengikuti perintah sederhana, misalnya "ambil jaketmu".',
    'Usia 24 bulan, tidak bisa menunjuk gambar atau bagian tubuh saat disebutkan namanya.',
    'Usia 30 bulan, tidak merespons dengan suara atau dengan mengangguk dan menggeleng, dan tidak bertanya.',
    'Usia 36 bulan, tidak mengikuti perintah dua langkah dan tidak memahami kata kerja.',
  ]),
  p('Tanda bahwa anak mungkin belum memakai atau menyampaikan bahasa dengan baik, menurut MedlinePlus:'),
  ul([
    'Usia 15 bulan, belum memakai tiga kata.',
    'Usia 18 bulan, belum mengucapkan "mama", "papa", atau nama lain.',
    'Usia 24 bulan, belum memakai setidaknya 25 kata.',
    'Usia 30 bulan, belum memakai frasa dua kata, termasuk frasa yang berisi kata benda dan kata kerja.',
    'Usia 36 bulan, kosakatanya belum mencapai sekitar 200 kata, belum meminta benda dengan menyebut namanya, menirukan persis pertanyaan orang lain, kemampuan bahasanya mundur, atau belum memakai kalimat lengkap.',
    'Usia 48 bulan, sering memakai kata dengan keliru atau memakai kata yang mirip atau berkaitan sebagai ganti kata yang benar.',
  ]),
  p('Pada anak yang lebih besar, tanda-tandanya bisa lebih halus. ASHA menyebut anak usia sekolah dengan gangguan bahasa mungkin kesulitan mengikuti instruksi di kelas, kemampuan membaca dan mengejanya lemah, sulit bercerita atau mengungkapkan gagasan, memakai kosakata terbatas dan kalimat sederhana, serta sulit memahami petunjuk tersirat atau hal yang tidak dikatakan secara langsung, seperti kiasan. NIDCD menambahkan tanda pada anak yang lebih besar seperti jarang memakai kalimat kompleks, sulit menemukan kata yang tepat, sulit memahami bahasa kiasan, serta cerita dan tulisan yang tidak runtut.'),
  p('NIDCD juga mengingatkan bahwa kesulitan bahasa bisa disalahartikan sebagai masalah perilaku. Anak yang sulit berbahasa mungkin menghindari interaksi sehingga dianggap pemalu. Anak yang tidak mengikuti perintah karena tidak memahami instruksinya bisa dianggap nakal. Anak yang kesulitan berkomunikasi bisa frustrasi lalu berulah. MedlinePlus pun menyebut gangguan bahasa kadang menjadi bagian dari penyebab masalah perilaku yang berat. Karena itu, bila anak bermasalah di rumah atau sekolah, ada baiknya memeriksa apakah kesulitan bahasa ikut berperan.'),
  p('Untuk memantau tahapan bahasa sejak bayi, orang tua bisa membaca ' + a('babbling-dan-cooing-tahap-perkembangan-bahasa', 'tahap perkembangan bahasa bayi') + ' dan ' + a('langkah-langkah-deteksi-dini-tumbuh-kembang-anak', 'langkah deteksi dini tumbuh kembang anak') + '. Catat kemampuan anak setiap bulan, termasuk kata yang sudah ia ucapkan dan perintah yang sudah ia pahami, agar perubahan kecil tidak terlewat.'),
  fig(`${IMG}/gangguan-bahasa-membaca-bersama.webp`, 1200, 716, 'Dua orang dewasa berseragam duduk di kursi di perpustakaan, salah satunya memperlihatkan buku cerita bergambar kepada sekelompok anak yang duduk di lantai membelakangi kamera', 'Kegiatan membaca buku cerita bersama di perpustakaan pangkalan udara Ramstein, Jerman. ASHA menganjurkan orang tua berbicara dan membaca bersama anak setiap hari untuk mendukung kemampuan bahasanya.', CM(B_BACA, 'Senior Airman Thomas Karol, U.S. Air Force', 'PD')),

  '<h2 id="penyebab">Penyebab dan faktor risiko</h2>',
  p('MedlinePlus menjelaskan bahwa untuk mengembangkan bahasa, anak harus mampu mendengar, melihat, memahami, dan mengingat, serta secara fisik mampu membentuk ucapan. Gangguan pada salah satu bagian ini bisa memengaruhi perkembangan bahasa. Namun ASHA menyebut sebagian gangguan bahasa tidak memiliki penyebab yang jelas. Beberapa faktor yang mungkin menjadi penyebab menurut ASHA adalah:'),
  ul([
    'Autisme.',
    'Kelahiran prematur atau berat lahir rendah.',
    'Sindrom Down atau sindrom fragile X.',
    'Riwayat keluarga.',
    'Gangguan pendengaran.',
  ]),
  p('MedlinePlus menambahkan bahwa gangguan bahasa bisa terjadi pada anak dengan masalah perkembangan lain, gangguan spektrum autisme, gangguan pendengaran, kesulitan belajar, atau kerusakan sistem saraf pusat yang disebut afasia. Sebagian gangguan bahasa campuran disebabkan cedera otak, dan kondisi ini kadang keliru didiagnosis sebagai gangguan perkembangan. MedlinePlus juga menyebut masalah bahasa reseptif biasanya mulai sebelum usia 4 tahun.'),
  p('Faktor keluarga cukup menonjol. NIDCD menyebut DLD adalah gangguan perkembangan saraf yang muncul dari interaksi kompleks antara gen dan lingkungan, dan penyebab pasti perbedaan otak yang mendasarinya belum diketahui. Gangguan perkembangan saraf cenderung menurun dalam keluarga. Menurut NIDCD, 50 sampai 70 persen anak dengan DLD memiliki setidaknya satu anggota keluarga dengan gangguan yang sama. Gangguan perkembangan saraf lain seperti disleksia atau autisme juga lebih sering ditemukan pada keluarga anak dengan DLD.'),
  p('Hal yang perlu ditegaskan: MedlinePlus menyatakan gangguan bahasa jarang disebabkan oleh kurangnya kecerdasan. Banyak anak dengan gangguan bahasa memiliki kecerdasan rata-rata atau lebih, hanya saja mereka kesulitan mengolah bahasa. Selain itu, NIDCD menegaskan bahwa belajar lebih dari satu bahasa sekaligus tidak menyebabkan DLD. Bagi keluarga Indonesia yang memakai bahasa daerah dan bahasa Indonesia di rumah, ini kabar penting: Anda tidak perlu berhenti memakai bahasa ibu.'),
  p('Karena gangguan pendengaran termasuk penyebab yang sering, pemeriksaan pendengaran wajib dilakukan. Artikel ' + a('penyebab-tuna-rungu', 'penyebab gangguan pendengaran pada anak') + ' bisa membantu orang tua memahami faktor yang perlu diwaspadai sejak bayi.'),

  '<h2 id="diagnosis">Bagaimana gangguan bahasa didiagnosis</h2>',
  p('Langkah pertama adalah berbicara dengan dokter anak. MedlinePlus menganjurkan orang tua yang khawatir bicara atau bahasa anaknya terlambat untuk menemui dokter anak dan meminta rujukan ke terapis wicara. Sebagian anak juga perlu diperiksa dokter saraf anak atau dokter spesialis tumbuh kembang untuk menentukan apakah kondisinya bisa ditangani.'),
  diag(`${IMG}/gangguan-bahasa-evaluasi.webp`, 'Diagram alur empat langkah evaluasi bahasa anak: mencatat kekhawatiran, konsultasi dokter anak, tes pendengaran, dan evaluasi bahasa oleh terapis wicara', 'Alur umum pemeriksaan bila anak dicurigai mengalami gangguan bahasa. Urutan di tiap layanan kesehatan bisa berbeda.'),
  p('Menurut MedlinePlus, riwayat kesehatan bisa mengungkap adanya kerabat dekat yang juga pernah mengalami masalah bicara dan bahasa. Anak yang dicurigai mengalami gangguan bahasa dapat menjalani tes bahasa reseptif dan ekspresif terstandar yang dilakukan oleh terapis wicara atau neuropsikolog. Tes pendengaran yang disebut audiometri juga perlu dilakukan untuk memeriksa gangguan pendengaran, yang menurut MedlinePlus merupakan salah satu penyebab tersering masalah bahasa.'),
  p('NIDCD menjelaskan bahwa jenis evaluasi bergantung pada usia anak dan kekhawatiran yang mendorong pemeriksaan. Secara umum evaluasi mencakup pengamatan langsung terhadap anak, wawancara dan kuesioner yang diisi orang tua dan guru, penilaian kemampuan belajar, serta tes terstandar kemampuan bahasa saat ini. Alat-alat ini memungkinkan terapis membandingkan kemampuan bahasa anak dengan teman sebayanya, mengenali kesulitan yang spesifik, dan merencanakan target terapi.'),
  p('ASHA menyebut terapis wicara biasanya bekerja dalam tim. Mereka akan bertanya kepada orang tua dan guru, mengamati anak saat bermain dan berinteraksi, lalu memeriksa apakah anak bisa mengikuti petunjuk, menyebut nama benda atau tindakan, mengenali warna, angka, dan huruf, ikut serta dalam rutinitas dan percakapan, serta memakai bahasa yang sesuai dengan orang yang berbeda. Gambaran umum proses asesmen untuk anak berkebutuhan khusus dapat dibaca di ' + a('asesmen-abk', 'asesmen anak berkebutuhan khusus') + '.'),
  p('Agar kunjungan efektif, siapkan catatan sebelum berangkat: daftar kata yang sudah diucapkan anak, contoh kalimat terpanjangnya, perintah yang sudah dan belum ia pahami, riwayat kehamilan dan kelahiran, serta riwayat keluarga yang terlambat bicara atau kesulitan membaca. Video singkat anak saat bermain atau berbicara di rumah juga sangat membantu, karena di ruang praktik banyak anak menjadi diam.'),

  '<h2 id="terapi">Terapi dan penanganan</h2>',
  p('MedlinePlus menyebut terapi wicara dan bahasa sebagai pendekatan terbaik untuk menangani gangguan bahasa. Konseling, seperti terapi bicara dengan psikolog, juga dianjurkan karena kemungkinan adanya masalah emosional atau perilaku yang menyertai. Penjelasan tentang apa yang terjadi dalam sesi terapi ada di artikel ' + a('terapi-wicara', 'terapi wicara') + '.'),
  p('Menurut ASHA, terapis wicara membantu anak memperbaiki kemampuan memahami, berbicara, serta membaca dan menulis tahap awal. Terapi dapat mencakup membangun kosakata, berlatih mengikuti petunjuk, mempelajari struktur kalimat, menggali cara mengungkapkan pikiran dan perasaan, mengajari keluarga, guru, dan pengasuh cara mendukung komunikasi anak, serta memakai gestur, papan gambar, atau alat bantu bicara bila diperlukan. Layanan bisa diberikan secara individual, dalam kelompok kecil, atau di dalam kelas dan masyarakat.'),
  p('NIDCD menjelaskan bahwa pada anak kecil, terapi yang dimulai lebih awal dapat membantu anak menguasai unsur tata bahasa yang belum dimiliki, memperluas pemahaman dan pemakaian kata, serta mengembangkan keterampilan komunikasi sosial. Pada anak usia sekolah, terapi dapat berfokus pada memahami instruksi di kelas, termasuk mengikuti petunjuk, memahami arti kata yang dipakai guru, mengatur informasi, serta meningkatkan kemampuan berbicara, membaca, dan menulis.'),
  p('Bagaimana dengan prognosisnya? MedlinePlus menyebut hasilnya bervariasi tergantung penyebab. Anak dengan cedera otak atau masalah struktural lain mungkin mengalami masalah bahasa jangka panjang, sedangkan penyebab yang lebih bisa dipulihkan dapat ditangani dengan efektif. NIDCD menjelaskan bahwa DLD biasanya tidak hilang dengan sendirinya seiring pertumbuhan, tetapi bentuknya berubah. Anak kecil dengan DLD mungkin memakai kalimat yang tidak gramatikal, sedangkan saat dewasa ia mungkin menghindari kalimat kompleks dan kesulitan menulis secara runtut.'),
  p('Kabar baiknya, NIDCD menyebut penanganan di usia prasekolah dapat memperbaiki kemampuan banyak anak dengan keterlambatan bahasa, termasuk anak dengan DLD. Anak yang lebih besar pun tetap bisa mendapat manfaat dari terapi, dan banyak orang dewasa mengembangkan strategi untuk mengelola gejalanya sehingga kehidupan sosial, keluarga, dan pekerjaannya membaik. Prinsip mengapa dukungan sejak dini penting dibahas di artikel ' + a('intervensi-dini', 'intervensi dini') + '.'),
  p('Frekuensi dan lama terapi ditentukan oleh terapis berdasarkan hasil evaluasi. Tanyakan target terapi yang jelas, misalnya anak mampu mengikuti perintah dua langkah atau memakai kalimat tiga kata, lalu minta latihan yang bisa dilanjutkan di rumah. Salah satu pendekatan yang melibatkan orang tua secara aktif adalah ' + a('hanen-approach-terapi-bahasa-anak', 'pendekatan Hanen') + ', yang melatih orang tua menciptakan kesempatan berkomunikasi dalam kegiatan sehari-hari.'),

  '<h2 id="rumah">Peran orang tua di rumah</h2>',
  p('Orang tua adalah lawan bicara paling sering bagi anak, sehingga perannya sangat besar. ASHA menganjurkan beberapa hal yang bisa dilakukan orang tua dan pengasuh di rumah: berbicara dan membaca bersama setiap hari, menyebut nama benda, tanda, dan tindakan, mendorong anak bertanya dan bercakap-cakap, berbicara dalam bahasa yang paling nyaman bagi orang tua, menanggapi setiap usaha anak untuk berkomunikasi, dan membatasi waktu layar demi kegiatan yang interaktif.'),
  p('Untuk anak dengan kesulitan reseptif, sederhanakan cara Anda memberi instruksi. Dekati anak, sebut namanya, pastikan ia melihat Anda, lalu beri satu perintah pendek sambil menunjuk atau memperagakan. Setelah anak berhasil, baru tambahkan langkah kedua. Hindari mengulang perintah yang sama dengan suara makin keras, karena yang dibutuhkan anak adalah bahasa yang lebih sederhana, bukan suara yang lebih kencang.'),
  p('Untuk anak dengan kesulitan ekspresif, beri waktu menunggu. Setelah bertanya, hitung dalam hati sampai lima sebelum membantu. Bila anak mengucapkan satu kata, tanggapi dengan mengulang dan menambah satu kata, misalnya anak berkata "bola", orang tua menjawab "bola merah" atau "lempar bola". Teknik ini memberi contoh kalimat yang sedikit lebih panjang tanpa membuat anak merasa dikoreksi. Ide latihan lain bisa dilihat di ' + a('cara-melatih-anak-speech-delay-bicara', 'cara melatih anak bicara') + '.'),
  p('Membaca buku bergambar bersama adalah salah satu kegiatan paling bermanfaat. Jangan hanya membacakan teksnya. Tunjuk gambar, sebut namanya, tanyakan apa yang terjadi, dan beri anak kesempatan menunjuk atau menjawab. Buku yang sama boleh dibaca berulang kali, karena pengulangan membantu anak memahami dan mengingat kata baru.'),
  p('Keluarga yang memakai dua bahasa tidak perlu khawatir. ASHA menyebut anak yang memakai lebih dari satu bahasa dapat mengembangkan kemampuan bahasa seperti anak yang hanya memakai satu bahasa, dan memakai beberapa bahasa di rumah tidak akan membuat anak bingung atau terlambat. Bila anak mengalami kesulitan di semua bahasanya, ASHA menyarankan berkonsultasi dengan terapis wicara. NIDCD menambahkan bahwa anak multibahasa dengan DLD tidak akan lebih kesulitan dibanding anak dengan DLD yang hanya memakai satu bahasa.'),
  p('Perhatikan juga kesehatan emosi anak dan orang tua. MedlinePlus menyebut depresi, kecemasan, dan masalah emosional atau perilaku lain dapat memperumit gangguan bahasa. Pujilah usaha anak, bukan hanya hasilnya, dan jangan membandingkannya dengan saudara atau anak tetangga. Orang tua juga butuh dukungan. Langkah menjaga kesehatan mental orang tua dibahas di ' + a('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak ABK') + '.'),
  fig(`${IMG}/gangguan-bahasa-story-time.webp`, 1200, 960, 'Foto dari atas: seorang pria dewasa memegang buku cerita bergambar di meja, beberapa anak berkerumun di sekelilingnya, salah satu anak menunjuk gambar di buku', 'Kegiatan membaca interaktif di sebuah perpustakaan di Bahrain. Menunjuk gambar, menyebut nama benda, dan memberi anak kesempatan menjawab adalah cara sederhana melatih bahasa reseptif dan ekspresif.', CM(B_STORY, 'Federal government of the United States (DVIDS)', 'PD')),

  '<h2 id="sekolah">Dukungan di sekolah</h2>',
  p('Gangguan bahasa berdampak langsung pada pelajaran, karena hampir semua kegiatan belajar memakai bahasa. NIDCD menjelaskan bahwa DLD tidak sama dengan kesulitan belajar, tetapi menjadi faktor risiko kesulitan belajar karena masalah bahasa dasar memengaruhi prestasi di kelas. Anak dengan DLD bisa kesulitan mengubah huruf menjadi bunyi saat membaca, tulisannya lemah karena kesalahan tata bahasa dan kosakata terbatas, dan soal cerita matematika terasa sulit karena pemahaman bahasanya. Menurut NIDCD, saat dewasa, orang dengan DLD enam kali lebih mungkin didiagnosis kesulitan membaca dan mengeja, dan empat kali lebih mungkin didiagnosis kesulitan matematika dibanding orang tanpa DLD.'),
  p('MedlinePlus juga mencatat bahwa banyak anak yang mengalami masalah bahasa di usia prasekolah akan tetap mengalami sebagian masalah bahasa atau kesulitan belajar di masa kanak-kanak berikutnya, dan bisa mengalami gangguan membaca. Karena itu guru perlu waspada terhadap tanda-tanda ' + a('disleksia-adalah', 'disleksia') + ' pada anak yang sejak kecil terlambat bahasa.'),
  p('Beberapa penyesuaian sederhana yang bisa dilakukan guru:'),
  ul([
    '<strong>Instruksi pendek dan bertahap.</strong> Beri satu langkah pada satu waktu, lalu periksa pemahaman anak dengan memintanya mengulang atau memperagakan.',
    '<strong>Dukungan visual.</strong> Tulis langkah tugas di papan, pakai gambar, jadwal bergambar, atau contoh hasil kerja.',
    '<strong>Kosakata kunci lebih dulu.</strong> Kenalkan kata-kata penting sebelum materi baru dimulai, dan ulangi di beberapa kesempatan.',
    '<strong>Waktu menjawab lebih lama.</strong> Jangan langsung beralih ke siswa lain saat anak sedang mencari kata.',
    '<strong>Pilihan cara menjawab.</strong> Izinkan anak menjawab dengan menunjuk, menggambar, atau memilih dari beberapa pilihan.',
    '<strong>Kerja sama dengan terapis.</strong> Tanyakan target terapi agar latihan di sekolah sejalan dengan latihan di ruang terapi.',
  ]),
  p('Di sekolah inklusi, guru pendamping khusus dapat membantu menyusun penyesuaian ini dan memantau kemajuan anak. Peran dan tugasnya dijelaskan di artikel ' + a('gpk-adalah', 'GPK atau guru pendamping khusus') + '. Bila orang tua masih menimbang pilihan sekolah, perbandingan antara ' + a('apa-perbedaan-sekolah-inklusi-dan-slb', 'sekolah inklusi dan SLB') + ' dapat membantu.'),
  p('Yang terpenting, lindungi rasa percaya diri anak. Anak yang sering salah menjawab atau tidak memahami instruksi bisa merasa bodoh, padahal masalahnya ada pada pengolahan bahasa. Guru yang sabar, teman sekelas yang menerima, dan orang tua yang memahami kondisinya akan membuat anak tetap berani mencoba berbicara dan belajar.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(bFaq),
];

articles.push({
  slug: 'gangguan-bahasa-reseptif-dan-ekspresif',
  titleTag: 'Gangguan Bahasa Reseptif dan Ekspresif pada Anak | YUKA',
  metaDesc: 'Gangguan bahasa reseptif dan ekspresif pada anak: pengertian, perbedaan, tanda menurut usia, penyebab, diagnosis, terapi wicara, serta peran orang tua dan guru, berdasarkan MedlinePlus, NIDCD, dan ASHA.',
  keywords: 'gangguan bahasa reseptif dan ekspresif, gangguan bahasa reseptif, gangguan bahasa ekspresif, developmental language disorder, DLD anak',
  ogTitle: 'Gangguan Bahasa Reseptif dan Ekspresif pada Anak',
  ogDesc: 'Panduan untuk orang tua dan guru: beda bahasa reseptif dan ekspresif, tanda menurut usia, penyebab, diagnosis, dan terapi.',
  h1: 'Gangguan Bahasa Reseptif dan Ekspresif pada Anak: Tanda, Penyebab, dan Terapi',
  crumb: 'Gangguan Bahasa Reseptif dan Ekspresif',
  category: 'Kesehatan',
  datePublished: '2026-12-01T08:00:00+07:00', dateModified: '2026-12-01T08:00:00+07:00',
  dateDisplay: '1 Desember 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/gangguan-bahasa-hero.webp`, w: 1200, h: 651,
    alt: 'Seorang pendongeng pria berikat kepala duduk di teras sekolah dengan laptop, menunjuk ke arah sekelompok anak berseragam batik biru yang duduk di lantai mendengarkan cerita',
    caption: 'Kegiatan mendongeng untuk anak-anak sebuah taman kanak-kanak di Indonesia. Mendengarkan cerita lalu menceritakannya kembali melatih dua sisi bahasa sekaligus: memahami dan menyampaikan.',
    credit: CM(B_HERO, 'Tong kiprit', 'CC BY-SA 4.0'),
  },
  bodyHtml: bBody.join('\n'), faq: bFaq,
  related: [
    { href: '/artikel/speech-delay-adalah', title: 'Speech Delay', desc: 'Pengertian dan tanda keterlambatan bicara.' },
    { href: '/artikel/terapi-wicara', title: 'Terapi Wicara', desc: 'Apa yang dilakukan dalam sesi terapi wicara.' },
    { href: '/artikel/disleksia-adalah', title: 'Disleksia', desc: 'Kesulitan membaca yang sering berkaitan dengan gangguan bahasa.' },
  ],
  tags: ['GangguanBahasa', 'SpeechDelay', 'TerapiWicara'],
  sources: [
    { url: URL_MP_LD, label: 'MedlinePlus: Language disorders in children (pengertian, gejala, penyebab, tes, tanda menurut usia; ditinjau 4 Mei 2026)' },
    { url: URL_NIDCD_DLD, label: 'NIDCD: Developmental Language Disorder (prevalensi, penyebab, diagnosis, terapi, kaitan dengan kesulitan belajar)' },
    { url: URL_ASHA_LD, label: 'ASHA: Childhood Language Disorders (tanda reseptif dan ekspresif, penyebab, diagnosis, terapi, tips di rumah)' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum untuk orang tua dan guru, bukan pengganti pemeriksaan dokter atau terapis wicara.',
});


// ---------------------------------------------------------------------------
// Artikel 2: kapan anak bilingual mulai bicara (2 Des 2026)
// Keyword: "kapan anak bilingual mulai bicara" (tab Riset Keyword Batch 5, baris 227)
// ---------------------------------------------------------------------------
const URL_AAP_ML = 'https://www.healthychildren.org/English/ages-stages/gradeschool/school/Pages/7-Myths-Facts-Bilingual-Children-Learning-Language.aspx';
const URL_NIDCD_MS = 'https://www.nidcd.nih.gov/health/speech-and-language';
const URL_CDC_18 = 'https://www.cdc.gov/act-early/milestones/18-months.html';
const URL_CDC_24 = 'https://www.cdc.gov/act-early/milestones/2-years.html';
const L_HERO = 'https://commons.wikimedia.org/wiki/File:Anak-anak_dan_para_ibu_berwisata_di_Candi_Jabung.jpg';
const L_FOTO1 = 'https://commons.wikimedia.org/wiki/File:Maling_Kundang.jpg';
const L_FOTO2 = 'https://commons.wikimedia.org/wiki/File:Membuat_Perubahan_untuk_Ibu_dan_Bayi_(40183827354).jpg';

const lSections = [
  ['jawaban', 'Kapan anak bilingual mulai bicara'],
  ['tahapan', 'Tahapan bicara anak bilingual dari lahir sampai 5 tahun'],
  ['kosakata', 'Cara menghitung kosakata anak bilingual'],
  ['campur', 'Mencampur bahasa: normal atau tanda masalah?'],
  ['mitos', 'Mitos dan fakta tentang anak dwibahasa'],
  ['waspada', 'Kapan perlu khawatir dan memeriksakan anak'],
  ['abk', 'Anak berkebutuhan khusus dan dua bahasa'],
  ['tips', 'Tips membesarkan anak dwibahasa di rumah'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const lFaq = [
  { q: 'Kapan anak bilingual biasanya mulai bicara?', a: 'Sama seperti anak yang hanya belajar satu bahasa. Menurut American Academy of Pediatrics (AAP) melalui HealthyChildren.org, kebanyakan anak mengucapkan kata pertamanya sekitar usia 12 bulan dan memakai frasa dua kata pada usia 24 bulan. Patokan ini sama berapa pun jumlah bahasa yang didengar anak.' },
  { q: 'Apakah anak bilingual pasti telat bicara?', a: 'Tidak. AAP menegaskan bahwa memakai lebih dari satu bahasa dengan bayi dan balita tidak menyebabkan keterlambatan perkembangan komunikasi. Bila anak bilingual terlambat bicara, penyebabnya perlu dicari, bukan dianggap wajar karena dua bahasa.' },
  { q: 'Bagaimana menghitung kosakata anak yang belajar dua bahasa?', a: 'Jumlahkan kata dari semua bahasanya. AAP memberi contoh: anak usia 2 tahun yang hanya berbahasa Inggris mungkin punya 50 kata, sedangkan anak yang berbahasa Inggris dan Spanyol mungkin punya 25 kata bahasa Inggris dan 25 kata bahasa Spanyol. Total kosakata keduanya sama.' },
  { q: 'Anak saya mencampur bahasa Jawa dan bahasa Indonesia dalam satu kalimat, apakah ia bingung?', a: 'Tidak. Menurut AAP, anak multibahasa kadang mencampur aturan tata bahasa atau memakai kata dari semua bahasanya dalam satu kalimat, dan ini normal. Biasanya sekitar usia 3 tahun anak sudah bisa memisahkan bahasanya sesuai lawan bicara.' },
  { q: 'Apakah belajar dua bahasa bisa menyebabkan gangguan bicara atau bahasa?', a: 'Tidak. AAP menyatakan masalah bicara atau bahasa tidak disebabkan oleh belajar beberapa bahasa. Bila anak memang punya masalah bicara atau bahasa, masalah itu akan terlihat di semua bahasa yang ia pakai.' },
  { q: 'Apakah anak autis atau speech delay sebaiknya hanya diajari satu bahasa?', a: 'Tidak harus. AAP menyebut penelitian menunjukkan anak dengan gangguan bicara, bahasa, dan gangguan perkembangan lain dapat mempelajari bahasa tambahan. Mereka tetap butuh banyak paparan dan kesempatan berlatih. Bila anak sedang menjalani terapi wicara, tanyakan kepada terapis kegiatan yang mendukung semua bahasanya.' },
  { q: 'Bahasa apa yang sebaiknya dipakai orang tua di rumah?', a: 'AAP menganjurkan orang tua dan pengasuh memakai bahasa yang paling nyaman bagi mereka saat berkomunikasi dengan anak. Cara terbaik membangun kemampuan komunikasi yang kuat adalah memberi anak paparan bahasa sebanyak mungkin, dan bahasa yang paling dikuasai orang tua biasanya menjadi sumber paparan yang paling kaya.' },
  { q: 'Kapan anak bilingual perlu diperiksakan ke dokter atau terapis wicara?', a: 'Periksakan bila anak belum mencapai tahapan bicara sesuai usianya bila semua bahasanya dihitung bersama, kemampuan bahasanya mundur, atau ia kesulitan di semua bahasa. Contoh patokan dari CDC: kebanyakan anak usia 2 tahun sudah mengucapkan setidaknya dua kata bersamaan, seperti "mau susu". Bila ragu, jangan menunggu, sampaikan kekhawatiran Anda kepada dokter anak.' },
];

addDiagram(`${IMG}/bilingual-tahapan.webp`, svg.grid('Tahapan bicara anak bilingual', 'Patokan sama dengan anak satu bahasa, kosakata dihitung dari semua bahasa', ['Usia', 'Kemampuan yang biasa muncul', 'Catatan untuk anak dwibahasa'], [
  ['Sekitar 12 bulan', 'Kata pertama; satu atau dua kata', 'Kata pertama boleh dari bahasa mana saja'],
  ['18 bulan', 'Mencoba 3 kata atau lebih selain mama dan papa', 'Hitung kata dari semua bahasa'],
  ['24 bulan', 'Frasa dua kata, misalnya mau susu', 'Frasa boleh campuran dua bahasa'],
  ['Sekitar 3 tahun', 'Frasa 2 sampai 3 kata untuk meminta sesuatu', 'Mulai memisahkan bahasa sesuai lawan bicara'],
  ['3 sampai 4 tahun', 'Kalimat 4 kata atau lebih', 'Bahasa yang lebih sering dipakai bisa lebih kuat'],
], [230, 430, 448]));
addDiagram(`${IMG}/bilingual-kosakata.webp`, svg.cards('Menghitung kosakata anak dwibahasa', 'Contoh dari AAP: total kata yang dihitung, bukan per bahasa', [
  { h: 'Anak satu bahasa', items: ['Usia 2 tahun', '50 kata bahasa Inggris', 'Total 50 kata'] },
  { h: 'Anak dua bahasa', items: ['Usia 2 tahun', '25 kata bahasa Inggris', '25 kata bahasa Spanyol', 'Total 50 kata'] },
  { h: 'Kesimpulan', items: ['Total kosakata sama', 'Jangan hanya menghitung satu bahasa', 'Masalah nyata tampak di semua bahasa'] },
]));

const lBody = [
  p('<strong>Kapan anak bilingual mulai bicara?</strong> Pada usia yang sama dengan anak yang hanya belajar satu bahasa. Menurut American Academy of Pediatrics (AAP), kebanyakan anak mengucapkan kata pertama sekitar usia 12 bulan dan memakai frasa dua kata pada usia 24 bulan, berapa pun jumlah bahasa yang mereka dengar. Belajar dua bahasa tidak membuat anak terlambat bicara. Kuncinya, kosakata anak dwibahasa dihitung dari semua bahasanya, bukan dari satu bahasa saja.'),
  p('Di Indonesia, banyak anak tumbuh dengan dua bahasa atau lebih: bahasa daerah seperti bahasa Jawa atau Sunda di rumah, bahasa Indonesia di sekolah, dan kadang bahasa Inggris dari tontonan atau sekolah. Tidak sedikit orang tua yang khawatir anaknya bingung atau telat bicara karena itu. Artikel ini menjawab kapan anak bilingual mulai bicara, tahapan yang wajar, cara menghitung kosakatanya, mitos yang perlu diluruskan, tanda yang perlu diwaspadai, dan tips membesarkan anak dwibahasa.'),
  toc(lSections),

  '<h2 id="jawaban">Kapan anak bilingual mulai bicara</h2>',
  p('Halaman tanya jawab untuk orang tua dari ' + ext(URL_AAP_ML, 'AAP di HealthyChildren.org') + ', yang disusun bersama ASHA (Asosiasi Wicara-Bahasa-Pendengaran Amerika), menjawab pertanyaan ini dengan tegas. Memakai lebih dari satu bahasa dengan bayi dan balita tidak menyebabkan keterlambatan perkembangan komunikasi. AAP menjelaskan bahwa anak belajar berkomunikasi jauh sebelum mengucapkan kata pertama, dan tahapan komunikasi awal seperti tertawa kecil, tersenyum, dan mengoceh sama di semua bahasa.'),
  p('Menurut AAP, kebanyakan anak mengucapkan kata pertama sekitar usia 12 bulan. Pada usia 24 bulan, kebanyakan anak memakai frasa dua kata, misalnya "bolaku" atau "nggak mau jus". AAP menegaskan bahwa tahapan perkembangan ini sama bagi semua anak, tidak peduli berapa banyak bahasa yang mereka dengar. Jadi anak yang tumbuh dengan bahasa Jawa dan bahasa Indonesia sebaiknya juga sudah mengucapkan kata pertamanya di sekitar ulang tahun pertama.'),
  p('Kata pertama itu boleh berasal dari bahasa mana saja. Anak yang lebih sering diasuh nenek berbahasa Jawa mungkin lebih dulu mengucapkan "mimik" atau "maem", sementara anak lain mulai dengan kata dalam bahasa Indonesia. Keduanya sama-sama dihitung. Yang penting adalah anak memakai kata itu secara konsisten untuk maksud yang sama.'),
  p('Perlu diingat bahwa setiap anak berbeda. ' + ext(URL_NIDCD_MS, 'NIDCD (Institut Nasional Ketulian dan Gangguan Komunikasi Lainnya, Amerika Serikat)') + ' menyebut anak bervariasi dalam perkembangan bicara dan bahasanya, tetapi mereka mengikuti urutan alami dalam menguasai keterampilan bahasa. Patokan usia membantu dokter dan tenaga kesehatan menilai apakah anak sesuai jalur atau mungkin butuh bantuan tambahan. Patokan ini bukan batas mutlak, melainkan rambu untuk memutuskan kapan perlu memeriksakan anak.'),
  p('NIDCD juga menjelaskan bahwa tiga tahun pertama kehidupan, saat otak sedang berkembang dan matang, adalah masa paling intensif untuk menguasai keterampilan bicara dan bahasa. Keterampilan ini berkembang paling baik di lingkungan yang kaya bunyi, pemandangan, dan paparan bicara orang lain secara konsisten. Bagi keluarga dwibahasa, ini berarti hal terpenting bukan memilih satu bahasa, melainkan memastikan anak sering diajak bicara.'),

  '<h2 id="tahapan">Tahapan bicara anak bilingual dari lahir sampai 5 tahun</h2>',
  p('Karena tahapannya sama, orang tua anak dwibahasa bisa memakai daftar tahapan bicara yang umum. Berikut ringkasan dari daftar periksa NIDCD, yang disusun berdasarkan materi ASHA, ditambah patokan dari CDC (Pusat Pengendalian dan Pencegahan Penyakit Amerika Serikat). Saat memakai daftar ini, ingat untuk menghitung kemampuan anak di semua bahasanya.'),
  diag(`${IMG}/bilingual-tahapan.webp`, 'Tabel visual tahapan bicara anak bilingual dari sekitar 12 bulan sampai 4 tahun beserta catatan khusus untuk anak dwibahasa', 'Ringkasan tahapan bicara dari AAP, CDC, dan NIDCD. Pada anak dwibahasa, kemampuan dihitung dari semua bahasa yang dipakainya.'),
  p('<strong>Lahir sampai 1 tahun.</strong> NIDCD menyebut bayi usia 0 sampai 3 bulan bereaksi terhadap suara keras, tenang atau tersenyum saat diajak bicara, dan mengenali suara orang tuanya. Usia 4 sampai 6 bulan, bayi mengikuti suara dengan matanya dan mengoceh dengan berbagai bunyi, termasuk bunyi p, b, dan m. NIDCD juga menyebut bahwa pada usia 6 bulan kebanyakan bayi sudah mengenali bunyi dasar bahasa ibunya. Usia 7 bulan sampai 1 tahun, bayi senang bermain cilukba, menoleh ke arah suara, memahami kata untuk benda sehari-hari, merespons permintaan seperti "sini", berkomunikasi dengan gestur seperti melambai, dan memiliki satu atau dua kata pada ulang tahun pertamanya. Tahap mengoceh dibahas lebih lengkap di ' + a('babbling-dan-cooing-tahap-perkembangan-bahasa', 'babbling dan cooing') + '.'),
  p('<strong>1 sampai 2 tahun.</strong> Menurut NIDCD, anak mengetahui beberapa bagian tubuh dan bisa menunjuknya, mengikuti perintah sederhana dan memahami pertanyaan sederhana, senang mendengar cerita, lagu, dan sajak, menunjuk gambar di buku saat disebutkan namanya, mendapat kata baru secara teratur, dan mulai menggabungkan dua kata. ' + ext(URL_CDC_18, 'CDC') + ' menyebut kebanyakan anak usia 18 bulan mencoba mengucapkan tiga kata atau lebih selain "mama" dan "papa", serta mengikuti perintah satu langkah tanpa gestur. Pada usia 2 tahun, ' + ext(URL_CDC_24, 'CDC') + ' menyebut kebanyakan anak menunjuk benda di buku saat ditanya, mengucapkan setidaknya dua kata bersamaan, menunjuk setidaknya dua bagian tubuh, dan memakai gestur selain melambai dan menunjuk.'),
  p('<strong>2 sampai 3 tahun.</strong> NIDCD menyebut anak sudah punya kata untuk hampir semua hal, memakai frasa dua atau tiga kata untuk membicarakan dan meminta sesuatu, bicaranya dapat dipahami keluarga dan teman, serta menyebut nama benda untuk memintanya. Pada anak dwibahasa, "kata untuk hampir semua hal" bisa tersebar di dua bahasa. Anak mungkin tahu kata "sendok" dalam bahasa Indonesia tetapi kata "wedang" dalam bahasa Jawa, dan itu wajar.'),
  p('<strong>3 sampai 5 tahun.</strong> Menurut NIDCD, usia 3 sampai 4 tahun anak menjawab pertanyaan sederhana "siapa", "apa", "di mana", dan "mengapa", menceritakan kegiatan di tempat penitipan atau sekolah, dan memakai kalimat empat kata atau lebih. Usia 4 sampai 5 tahun, anak memperhatikan cerita pendek dan menjawab pertanyaan tentangnya, memahami sebagian besar yang dikatakan di rumah dan sekolah, bercerita sesuai topik, dan berkomunikasi dengan mudah dengan anak lain dan orang dewasa. Pada tahap ini anak dwibahasa sering lebih lancar di bahasa yang paling banyak ia pakai sehari-hari.'),
  fig(`${IMG}/bilingual-foto1.webp`, 1200, 800, 'Beberapa anak perempuan berkerudung membaca buku di meja kayu di depan rak buku sebuah rumah belajar, satu anak berbaju batik duduk membelakangi kamera', 'Anak-anak membaca di sebuah rumah belajar yang disediakan masyarakat setempat. Mengenal buku sejak dini membantu memperkaya kosakata, dan buku dalam bahasa keluarga sama berharganya.', CM(L_FOTO1, 'Rrinaldy', 'CC BY-SA 4.0')),

  '<h2 id="kosakata">Cara menghitung kosakata anak bilingual</h2>',
  p('Salah satu sumber kekhawatiran terbesar adalah jumlah kata. Orang tua membandingkan anaknya dengan anak tetangga yang hanya berbahasa Indonesia, lalu merasa anaknya tertinggal karena kosakata bahasa Indonesianya lebih sedikit. Padahal cara menghitungnya keliru.'),
  p('AAP menjelaskan bahwa bila anak memakai lebih dari satu bahasa, jumlah total katanya seharusnya kurang lebih sama dengan anak seusia yang belajar satu bahasa. AAP memberi contoh: anak berbahasa Inggris mungkin punya 50 kata bahasa Inggris pada usia 2 tahun, sedangkan anak berbahasa Inggris dan Spanyol mungkin punya 25 kata bahasa Inggris dan 25 kata bahasa Spanyol. Keduanya memiliki jumlah kata total yang sama.'),
  diag(`${IMG}/bilingual-kosakata.webp`, 'Diagram tiga kartu yang membandingkan kosakata anak satu bahasa dengan 50 kata dan anak dua bahasa dengan 25 ditambah 25 kata, kesimpulannya total kosakata sama', 'Contoh perhitungan kosakata dari AAP. Pada anak dwibahasa, yang dilihat adalah jumlah kata dari semua bahasanya.'),
  p('Dalam praktik, buatlah daftar sederhana di buku catatan atau ponsel. Tulis setiap kata yang diucapkan anak secara spontan dan bermakna, lalu tandai bahasanya. Kata yang sama artinya dalam dua bahasa, misalnya "makan" dan "maem", boleh dicatat keduanya, karena anak memang mengenal dua label untuk satu hal. Daftar ini sangat berguna bila suatu saat Anda perlu berkonsultasi dengan dokter atau terapis wicara.'),
  p('Perhatikan juga kemampuan memahami, bukan hanya berbicara. Anak dwibahasa kadang memahami satu bahasa dengan baik tetapi lebih sering menjawab dalam bahasa lain. Misalnya, nenek bertanya dalam bahasa Jawa dan anak menjawab dalam bahasa Indonesia. Itu tanda pemahamannya berjalan, hanya saja ia memilih bahasa yang lebih mudah baginya untuk berbicara.'),

  '<h2 id="campur">Mencampur bahasa: normal atau tanda masalah?</h2>',
  p('Anak dwibahasa sering mencampur bahasa dalam satu kalimat, misalnya "Ma, aku mau mimik" atau "Itu car-nya rusak". Banyak orang tua menganggap ini tanda anak bingung. AAP menyatakan sebaliknya. Sebagian anak multibahasa kadang mencampur aturan tata bahasa, atau memakai kata dari semua bahasanya dalam satu kalimat, dan ini normal. Hal ini tidak berarti anak bingung.'),
  p('AAP menjelaskan bahwa biasanya sekitar usia 3 tahun, anak multibahasa sudah bisa memisahkan bahasanya. Dengan kata lain, anak bisa memakai bahasa yang paling sesuai untuk orang yang diajaknya bicara, baik orang yang sudah dikenalnya maupun orang asing. AAP juga menyebut bahwa dengan terpapar beberapa bahasa, anak bisa mengamati dan berlatih bagaimana komunikasi berubah tergantung situasi, misalnya berbicara dengan kakek dan nenek dalam bahasa warisan keluarga dan berbicara dengan penjaga toko dalam bahasa lain.'),
  p('Mencampur bahasa justru sering menunjukkan kecerdikan anak. Saat belum tahu satu kata dalam bahasa yang sedang dipakai, anak meminjam kata dari bahasa lain agar pesannya tetap tersampaikan. Orang tua tidak perlu memarahi atau menghentikan anak. Cukup tanggapi isi pesannya, lalu ulangi kalimatnya dengan kata yang lengkap dalam bahasa yang sedang dipakai, tanpa nada mengoreksi.'),
  p('Yang patut diperhatikan bukan percampuran bahasanya, melainkan apakah anak bisa menyampaikan maksud dan memahami orang lain secara keseluruhan. Anak yang mencampur bahasa tetapi lancar berkomunikasi berbeda dengan anak yang tidak bisa menyampaikan kebutuhannya di bahasa mana pun.'),

  '<h2 id="mitos">Mitos dan fakta tentang anak dwibahasa</h2>',
  p('AAP mencatat bahwa banyak orang tua khawatir anaknya belajar lebih dari satu bahasa karena mitos yang masih beredar. Sayangnya, mitos ini bisa membuat keluarga membatasi paparan anak terhadap bahasa warisan keluarganya. Berikut beberapa mitos dan faktanya menurut AAP.'),
  table('Mitos dan fakta tentang anak bilingual menurut AAP', ['Mitos', 'Fakta'], [
    ['Dua bahasa membuat anak terlambat bicara', 'Tidak menyebabkan keterlambatan; tahapannya sama dengan anak satu bahasa'],
    ['Dua bahasa menyebabkan gangguan bicara atau bahasa', 'Masalah bicara atau bahasa tidak disebabkan oleh belajar beberapa bahasa'],
    ['Anak yang mencampur bahasa sedang bingung', 'Mencampur bahasa normal; sekitar usia 3 tahun anak bisa memisahkan bahasanya'],
    ['Anak dengan gangguan bahasa sebaiknya hanya diajari satu bahasa', 'Penelitian menunjukkan mereka dapat mempelajari bahasa tambahan'],
    ['Bahasa rumah sebaiknya dihentikan saat anak masuk sekolah', 'Tidak perlu; menjadi multibahasa memberi banyak keuntungan akademis'],
    ['Harus sama fasihnya di semua bahasa', 'Tidak ada satu cara yang benar untuk menjadi multibahasa'],
  ]),
  p('Tentang sekolah, AAP menjelaskan bahwa penelitian menunjukkan banyak keuntungan akademis menjadi multibahasa, termasuk kemampuan memecahkan masalah dan melakukan beberapa tugas sekaligus yang lebih baik. Penutur multibahasa juga memiliki keuntungan sosial dan perilaku, seperti fokus dan pengendalian diri yang lebih baik. AAP menyatakan orang tua tidak akan membingungkan anak, menghambat prestasinya, atau mencegahnya mempelajari bahasa sekolah dengan tetap memakai bahasa keluarga.'),
  p('AAP juga menyebut menjadi multibahasa membantu anak menjaga ikatan yang kuat dengan keluarga, budaya, dan komunitasnya, serta dapat meningkatkan kemampuan komunikasi, literasi, dan matematika anak secara keseluruhan. Bagi keluarga Indonesia, ini berarti bahasa daerah yang dipakai kakek dan nenek adalah warisan berharga, bukan penghambat.'),
  p('Bagaimana dengan anak yang baru belajar bahasa kedua saat lebih besar? AAP menyebut anak kecil tampak belajar bahasa dengan mudah dan cepat karena perkembangan otak yang pesat antara lahir dan usia 3 tahun. Namun anak yang lebih besar dan orang dewasa juga bisa mempelajari bahasa tambahan. Sebagian penelitian bahkan menunjukkan pembelajar yang lebih tua bisa belajar bahasa dengan cepat di lingkungan sekolah, karena mereka sudah punya dasar bahasa pertama, literasi, dan konsep yang kuat.'),

  '<h2 id="waspada">Kapan perlu khawatir dan memeriksakan anak</h2>',
  p('Fakta bahwa dua bahasa tidak menyebabkan keterlambatan memiliki sisi penting: bila anak bilingual terlambat bicara, jangan langsung menganggapnya wajar karena dua bahasa. AAP menjelaskan bahwa bila anak memiliki masalah bicara atau bahasa, masalah itu akan tampak di semua bahasa yang ia pakai. Artinya, keterlambatan yang nyata perlu diperiksa, sama seperti pada anak satu bahasa.'),
  p('Beberapa tanda yang patut dibicarakan dengan dokter anak:'),
  ul([
    'Sekitar usia 12 bulan belum mengoceh dengan beragam bunyi, belum memakai gestur seperti melambai, atau belum memiliki satu kata pun di bahasa mana saja.',
    'Usia 18 bulan belum mencoba mengucapkan tiga kata atau lebih selain "mama" dan "papa" bila semua bahasanya dihitung, atau belum mengikuti perintah satu langkah.',
    'Usia 2 tahun belum menggabungkan dua kata, termasuk gabungan dua bahasa.',
    'Anak tampak kesulitan memahami orang lain di semua bahasa yang ia dengar.',
    'Kemampuan bicara atau bahasa yang sudah dimiliki menghilang.',
    'Anak tidak bereaksi terhadap suara atau tidak menoleh saat dipanggil.',
  ]),
  p('CDC menganjurkan orang tua bertindak lebih awal. Bila anak belum mencapai satu atau lebih tahapan, kehilangan kemampuan yang dulu dimilikinya, atau Anda punya kekhawatiran lain, bicarakan dengan dokter anak dan tanyakan tentang skrining perkembangan. Dukungan yang dimulai sejak dini memberi hasil yang lebih baik, seperti dijelaskan di artikel ' + a('intervensi-dini', 'intervensi dini') + '. NIDCD menambahkan bahwa dokter dapat merujuk ke terapis wicara, yang akan menanyakan perkembangan komunikasi dan perkembangan umum anak serta melakukan tes khusus. Tes pendengaran sering disertakan karena masalah pendengaran dapat memengaruhi perkembangan bicara dan bahasa. Faktor yang bisa mengganggu pendengaran anak dibahas di ' + a('penyebab-tuna-rungu', 'penyebab gangguan pendengaran pada anak') + '.'),
  p('Saat berkonsultasi, sampaikan dengan jelas bahasa apa saja yang dipakai di rumah, siapa yang memakai bahasa itu, dan berapa banyak waktu anak mendengar tiap bahasa. Bawa daftar kosakata anak dari semua bahasanya. Informasi ini membantu tenaga kesehatan menilai anak dengan adil. Untuk memahami lebih jauh perbedaan keterlambatan bicara dan gangguan bahasa, baca ' + a('speech-delay-adalah', 'pengertian speech delay') + ' dan ' + a('gangguan-bahasa-reseptif-dan-ekspresif', 'gangguan bahasa reseptif dan ekspresif') + '.'),
  p('Pemantauan rutin juga penting, tidak hanya saat ada kekhawatiran. Langkah-langkah memantau tumbuh kembang anak, termasuk kapan memakai layanan kesehatan terdekat, dibahas di ' + a('langkah-langkah-deteksi-dini-tumbuh-kembang-anak', 'langkah deteksi dini tumbuh kembang anak') + '.'),

  '<h2 id="abk">Anak berkebutuhan khusus dan dua bahasa</h2>',
  p('Orang tua anak dengan autisme, sindrom Down, atau keterlambatan bicara sering mendapat saran untuk berhenti memakai bahasa daerah dan hanya memakai satu bahasa. AAP menjawab pertanyaan ini secara langsung: penelitian menunjukkan anak dengan gangguan bicara, bahasa, dan gangguan perkembangan lain dapat mempelajari bahasa tambahan. Tentu mereka membutuhkan banyak paparan dan kesempatan berlatih, sama seperti anak mana pun yang belajar lebih dari satu bahasa.'),
  p('AAP menyatakan bahwa mengingat banyaknya manfaat menjadi multibahasa, orang tua dan pengasuh tidak perlu ragu memakai beberapa bahasa di sekitar dan bersama anak yang memiliki gangguan bicara atau bahasa. Bila anak sedang menjalani terapi wicara, AAP menganjurkan orang tua menanyakan kepada terapis kegiatan apa yang bisa dilakukan untuk mendukung kemampuan komunikasi anak di semua bahasanya.'),
  p('AAP juga menyebut bahwa bila anak multibahasa didiagnosis mengalami gangguan bicara atau bahasa, terapis wicara dapat bekerja dengan anak dalam bahasa warisan keluarganya. Bila tidak ada terapis yang menguasai bahasa tersebut, terapis dapat bekerja dengan juru bahasa. Di Indonesia, banyak terapis wicara memahami bahasa daerah setempat, jadi tidak ada salahnya menanyakan hal ini saat mencari layanan ' + a('terapi-wicara', 'terapi wicara') + '.'),
  p('Hal yang perlu dihindari adalah memaksa anggota keluarga berbicara dalam bahasa yang tidak mereka kuasai. Nenek yang terbiasa berbahasa Jawa akan berbicara lebih kaya, hangat, dan ekspresif dalam bahasa Jawa daripada dalam bahasa Indonesia yang terbata-bata. Bagi anak yang butuh banyak contoh bahasa, interaksi yang hangat dan kaya jauh lebih berharga daripada satu bahasa yang dipaksakan.'),
  fig(`${IMG}/bilingual-foto2.webp`, 1200, 800, 'Seorang perempuan paruh baya berkerudung duduk bersila di lantai sambil tersenyum dan memegang buku saku, berbincang dengan seorang ibu muda di ruang keluarga', 'Seorang motivator kesehatan ibu dan anak berbincang dengan seorang ibu di rumahnya. Percakapan yang hangat dalam bahasa yang paling dikuasai keluarga lebih berharga bagi anak daripada bahasa yang dipaksakan.', CM(L_FOTO2, 'USAID Indonesia', 'PD')),

  '<h2 id="tips">Tips membesarkan anak dwibahasa di rumah</h2>',
  p('Tidak ada satu cara yang paling benar. AAP menyebut tidak ada satu cara atau cara yang "benar" untuk menjadi multibahasa. Banyak orang multibahasa memiliki satu bahasa yang paling sering dipakai, dan ini bisa berubah seiring waktu. Berikut beberapa langkah praktis yang bisa disesuaikan dengan keadaan keluarga.'),
  ul([
    '<strong>Pakai bahasa yang paling nyaman.</strong> AAP menganjurkan orang tua dan pengasuh memakai bahasa yang paling mereka kuasai saat berkomunikasi dengan anak.',
    '<strong>Perbanyak paparan bahasa.</strong> Menurut AAP, cara terbaik membangun kemampuan komunikasi yang kuat adalah memberi anak paparan bahasa sebanyak mungkin. Ajak anak bicara saat mandi, makan, berbelanja, dan bermain.',
    '<strong>Bacakan buku dalam bahasa keluarga.</strong> AAP menyebut paparan bahasa tertulis, seperti membaca buku dalam bahasa warisan keluarga, membantu membangun kosakata anak. Dongeng dan lagu daerah juga bisa menjadi sarana.',
    '<strong>Pakai media dengan bijak.</strong> AAP menyebut anak juga bisa belajar dari video, buku audio, dan podcast dalam bahasa keluarganya. Tetap utamakan interaksi langsung, karena anak paling banyak belajar dari percakapan dua arah.',
    '<strong>Beri waktu menjawab.</strong> Anak dwibahasa kadang butuh sedikit lebih lama untuk memilih kata. Tunggu beberapa detik sebelum membantu.',
    '<strong>Tanggapi isi, bukan bahasanya.</strong> Bila anak menjawab dalam bahasa lain, tanggapi isi pesannya dengan hangat, lalu beri contoh dalam bahasa yang sedang dipakai.',
  ]),
  p('Kebiasaan sehari-hari yang sederhana sangat membantu. Saat menyuapi anak, sebutkan nama makanan dan rasanya. Saat berjalan-jalan, tunjuk benda di sekitar dan sebutkan namanya. Saat anak menunjuk sesuatu, berikan kata untuk benda itu. Ide latihan lainnya bisa dilihat di ' + a('cara-melatih-anak-speech-delay-bicara', 'cara melatih anak bicara') + ', yang juga cocok untuk anak dwibahasa.'),
  p('AAP mencatat bahwa anak multibahasa sering berkomunikasi dengan kata dan bahasa yang paling mereka kuasai, dan pemakaian bahasa dapat berubah tergantung tempat, lawan bicara, dan topik percakapan. Pemakaian dan latihan yang teratur membantu anak mengembangkan dan mempertahankan bahasanya dalam jangka panjang. Pendekatan yang melatih orang tua menciptakan kesempatan bercakap-cakap dalam kegiatan sehari-hari, seperti ' + a('hanen-approach-terapi-bahasa-anak', 'pendekatan Hanen') + ', juga bisa diterapkan dalam bahasa keluarga. Jadi bila Anda ingin anak tetap menguasai bahasa daerah, pastikan bahasa itu benar-benar dipakai dalam kegiatan sehari-hari, bukan hanya sesekali.'),
  p('Terakhir, nikmati prosesnya. Anak yang tumbuh dengan dua bahasa sedang mendapatkan hadiah berharga: kemampuan berkomunikasi dengan lebih banyak orang dan kedekatan dengan akar budayanya. Dengan pemantauan yang baik dan pemeriksaan bila ada tanda yang mengkhawatirkan, orang tua tidak perlu takut membesarkan anak dwibahasa.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(lFaq),
];

articles.push({
  slug: 'kapan-anak-bilingual-mulai-bicara',
  titleTag: 'Kapan Anak Bilingual Mulai Bicara? Tahapan dan Mitos | YUKA',
  metaDesc: 'Kapan anak bilingual mulai bicara? Tahapan bicara anak dwibahasa, cara menghitung kosakata dua bahasa, mencampur bahasa, mitos dan fakta, serta kapan perlu konsultasi, berdasarkan AAP, CDC, dan NIDCD.',
  keywords: 'kapan anak bilingual mulai bicara, anak bilingual telat bicara, anak dwibahasa, perkembangan bahasa anak bilingual, anak belajar dua bahasa',
  ogTitle: 'Kapan Anak Bilingual Mulai Bicara?',
  ogDesc: 'Panduan untuk orang tua anak dwibahasa: tahapan bicara, cara menghitung kosakata, mitos dan fakta, dan kapan perlu memeriksakan anak.',
  h1: 'Kapan Anak Bilingual Mulai Bicara? Tahapan, Mitos, dan Tanda yang Perlu Diwaspadai',
  crumb: 'Kapan Anak Bilingual Mulai Bicara',
  category: 'Parenting',
  datePublished: '2026-12-02T08:00:00+07:00', dateModified: '2026-12-02T08:00:00+07:00',
  dateDisplay: '2 Desember 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/bilingual-hero.webp`, w: 1200, h: 674,
    alt: 'Beberapa ibu berkerudung dan anak-anak berjalan dan memanjat anak tangga di sisi candi bata merah, dengan halaman berkerikil dan pepohonan hijau di latar belakang',
    caption: 'Para ibu dan anak-anak berkunjung ke Candi Jabung, Probolinggo, Jawa Timur. Obrolan sehari-hari saat berjalan-jalan, dalam bahasa apa pun yang dipakai keluarga, adalah sumber paparan bahasa yang kaya bagi anak.',
    credit: CM(L_HERO, 'Pinerineks', 'CC BY 4.0'),
  },
  bodyHtml: lBody.join('\n'), faq: lFaq,
  related: [
    { href: '/artikel/speech-delay-adalah', title: 'Speech Delay', desc: 'Pengertian dan tanda keterlambatan bicara.' },
    { href: '/artikel/babbling-dan-cooing-tahap-perkembangan-bahasa', title: 'Babbling dan Cooing', desc: 'Tahap awal perkembangan bahasa bayi.' },
    { href: '/artikel/cara-melatih-anak-speech-delay-bicara', title: 'Cara Melatih Anak Bicara', desc: 'Latihan bicara sederhana di rumah.' },
  ],
  tags: ['AnakBilingual', 'PerkembanganBahasa', 'SpeechDelay'],
  sources: [
    { url: URL_AAP_ML, label: 'American Academy of Pediatrics (HealthyChildren.org) bersama ASHA: Young Children Learning Multiple Languages: Parent FAQs (diperbarui 20 November 2025)' },
    { url: URL_NIDCD_MS, label: 'NIDCD: Speech and Language Developmental Milestones (tahapan bicara lahir sampai 5 tahun)' },
    { url: URL_CDC_18, label: 'CDC: Important Milestones: Your Child By Eighteen Months' },
    { url: URL_CDC_24, label: 'CDC: Important Milestones: Your Child By Two Years' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum untuk orang tua, bukan pengganti pemeriksaan dokter atau terapis wicara.',
});


// ---------------------------------------------------------------------------
// Artikel 3: diagnosis autisme pada orang dewasa (3 Des 2026)
// Keyword: "late diagnosis autisme dewasa" (tab Riset Keyword Batch 5, baris 9)
// ---------------------------------------------------------------------------
const URL_NHS_AUT = 'https://www.nhs.uk/conditions/autism/what-is-autism/';
const URL_NHS_AUT_ADULT = 'https://www.nhs.uk/conditions/autism/signs-in-adults/';
const URL_NHS_AUT_ASSESS = 'https://www.nhs.uk/conditions/autism/assessments/';
const URL_NIMH_ASD = 'https://www.nimh.nih.gov/health/publications/autism-spectrum-disorder';
const D_HERO = 'https://commons.wikimedia.org/wiki/File:Tokyo_Tower_light-up_for_World_Autism_Awareness_Day.jpg';
const D_FOTO1 = 'https://commons.wikimedia.org/wiki/File:Sony-WH-1000XM3-kabellose-Bluetooth-Noise-Cancelling-Kopfhoerer.3.jpg';
const D_FOTO2 = 'https://commons.wikimedia.org/wiki/File:Ruang_Baca_Perpustakaan_Museum_Keris_Nusantara.jpg';

const dwSections = [
  ['pengertian', 'Apa itu diagnosis autisme di usia dewasa'],
  ['alasan', 'Mengapa autisme baru terdiagnosis saat dewasa'],
  ['tanda', 'Tanda autisme pada orang dewasa'],
  ['perempuan', 'Autisme pada perempuan dewasa'],
  ['proses', 'Proses asesmen autisme untuk orang dewasa'],
  ['hasil', 'Setelah hasil keluar'],
  ['orang-tua', 'Ketika orang tua anak autis mengenali dirinya'],
  ['dukungan', 'Dukungan dan langkah berikutnya'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const dwFaq = [
  { q: 'Apakah autisme bisa baru didiagnosis saat dewasa?', a: 'Bisa. NHS menjelaskan bahwa orang dewasa autis mungkin sudah belajar menyesuaikan diri sehingga tanda autismenya tidak selalu terlihat. NIMH juga menyebut diagnosis autisme pada orang dewasa sering lebih sulit daripada pada anak, karena sebagian gejalanya tumpang tindih dengan kondisi kesehatan mental seperti gangguan kecemasan atau ADHD.' },
  { q: 'Apa tanda autisme pada orang dewasa?', a: 'Menurut NHS, orang dewasa autis mungkin sulit berbicara dengan orang lain, lebih banyak menghabiskan waktu sendiri, sulit memahami ekspresi wajah atau nada suara, memahami ucapan secara harfiah, punya cara tetap dalam melakukan sesuatu, gelisah saat rutinitas berubah, melakukan gerakan berulang (stimming), sangat fokus pada minat tertentu, dan sangat peka atau tidak peka terhadap cahaya, suara, bau, rasa, atau tekstur.' },
  { q: 'Apa itu masking pada autisme?', a: 'NHS menyebut masking sebagai kebiasaan menyesuaikan diri sehingga tanda autisme tidak terlihat. Masking dapat membuat kegiatan sehari-hari dan interaksi sosial terasa melelahkan dan menekan. Perempuan autis mungkin lebih sering melakukan masking, tetapi laki-laki autis juga bisa melakukannya.' },
  { q: 'Siapa yang bisa mendiagnosis autisme pada orang dewasa?', a: 'NIMH menyebut orang dewasa dapat dirujuk ke neuropsikolog, psikolog, atau psikiater yang berpengalaman menangani autisme. Di Indonesia, langkah awal yang wajar adalah berkonsultasi dengan dokter di fasilitas kesehatan, lalu meminta rujukan ke psikiater atau psikolog klinis yang berpengalaman dengan autisme pada orang dewasa.' },
  { q: 'Apa saja yang dilakukan saat asesmen autisme dewasa?', a: 'Menurut NHS, tim asesmen mungkin meminta Anda mengisi kuesioner, menanyakan perilaku Anda saat bersama orang lain serta kehidupan masa kecil, di rumah, dan di tempat kerja, berbicara dengan orang yang mengenal Anda sejak kecil dan orang yang mengenal Anda sekarang, serta membaca dokumen pendukung seperti rapor sekolah atau laporan kesehatan.' },
  { q: 'Apakah ada gunanya didiagnosis autisme saat sudah dewasa?', a: 'NIMH menyebut diagnosis autisme yang tepat di usia dewasa dapat membantu seseorang memahami tantangan di masa lalu, mengenali kekuatan dirinya, dan menemukan bantuan yang tepat. Banyak orang merasa lebih mudah menerima diri setelah memahami cara kerja otaknya.' },
  { q: 'Apakah autisme bisa disembuhkan?', a: 'NHS menyatakan autisme adalah sesuatu yang dibawa sejak lahir, bukan penyakit, dan tidak ada pengobatan atau penyembuhannya. Meski begitu, ada cara mengelolanya dan mendapatkan dukungan. NHS juga menyebut penyebab autisme belum diketahui dan autisme tidak disebabkan oleh vaksin atau obat-obatan.' },
  { q: 'Saya orang tua anak autis dan merasa punya ciri yang sama. Apa yang harus dilakukan?', a: 'NHS menyebut autisme kadang ditemukan pada beberapa orang dalam satu keluarga. Bila Anda mengenali banyak tanda pada diri sendiri, catat pengalaman Anda sejak kecil dan bicarakan dengan dokter atau psikolog. Diagnosis bukan keharusan, tetapi bisa membantu Anda memahami diri sendiri dan mengatur energi dalam mendampingi anak.' },
];

addDiagram(`${IMG}/autisme-dewasa-tanda.webp`, svg.cards('Tanda autisme pada orang dewasa', 'Ringkasan dari halaman NHS tentang tanda autisme pada orang dewasa', [
  { h: 'Komunikasi dan sosial', items: ['Sulit memulai dan menjaga percakapan', 'Sulit membaca ekspresi dan nada suara', 'Memahami ucapan secara harfiah', 'Lebih sering menyendiri'] },
  { h: 'Pola dan rutinitas', items: ['Cara tetap dalam melakukan sesuatu', 'Gelisah saat rutinitas berubah', 'Gerakan berulang (stimming)', 'Minat yang sangat mendalam'] },
  { h: 'Sensorik dan dampak', items: ['Sangat peka atau kurang peka terhadap suara, cahaya, bau', 'Kelelahan karena masking', 'Masalah kesehatan mental', 'Kesulitan bertahan di sekolah atau pekerjaan'] },
]));
addDiagram(`${IMG}/autisme-dewasa-asesmen.webp`, svg.flow('Langkah menuju diagnosis autisme dewasa', 'Rangkuman dari NHS dan NIMH, disesuaikan untuk pembaca di Indonesia', [
  { h: 'Catat pengalaman', d: 'Tulis contoh kesulitan sejak kecil sampai sekarang di rumah, sekolah, dan kerja.' },
  { h: 'Konsultasi awal', d: 'Bicarakan dengan dokter dan minta rujukan ke psikiater atau psikolog berpengalaman.' },
  { h: 'Asesmen', d: 'Kuesioner, wawancara riwayat masa kecil, dan keterangan keluarga atau pasangan.' },
  { h: 'Laporan dan tindak lanjut', d: 'Hasil, kekuatan, kebutuhan dukungan, dan kondisi lain yang ditemukan.' },
]));

const dwBody = [
  p('<strong>Diagnosis autisme pada orang dewasa</strong>, atau sering disebut late diagnosis, adalah ketika seseorang baru mengetahui dirinya autis setelah dewasa. Ini cukup sering terjadi karena banyak orang dewasa autis sudah belajar menyembunyikan tandanya, yang oleh NHS disebut masking, dan karena gejalanya tumpang tindih dengan kecemasan atau ADHD. Menurut NIMH, diagnosis yang tepat di usia dewasa membantu seseorang memahami tantangan di masa lalu, mengenali kekuatannya, dan menemukan dukungan yang sesuai.'),
  p('Sebagian orang tua, saat mendampingi anaknya menjalani asesmen autisme, mulai mengenali pola yang sama pada dirinya sendiri. Ada pula orang dewasa yang bertahun-tahun merasa "berbeda" tanpa tahu sebabnya. Artikel ini membahas mengapa autisme bisa baru terdiagnosis saat dewasa, tanda-tandanya, kekhasan pada perempuan, proses asesmen, apa yang terjadi setelah hasil keluar, dan dukungan yang bisa dicari. Untuk pengertian dasar autisme, baca dulu ' + a('autisme-adalah', 'autisme adalah') + '.'),
  toc(dwSections),

  '<h2 id="pengertian">Apa itu diagnosis autisme di usia dewasa</h2>',
  p(ext(URL_NHS_AUT, 'NHS (layanan kesehatan nasional Inggris)') + ' menjelaskan autisme sebagai perbedaan dalam perkembangan otak yang memengaruhi cara seseorang melihat dan mengalami dunia. Autisme sering disebut sebagai salah satu bentuk neurodivergensi, dan istilah medisnya adalah gangguan spektrum autisme (autism spectrum disorder atau ASD). Menjadi autis dapat memengaruhi cara seseorang berkomunikasi dan memahami orang lain, cara orang lain memahaminya, cara berpikir, belajar, dan memusatkan perhatian, serta cara merespons cahaya, suara, bau, rasa, dan sentuhan.'),
  p('NHS menegaskan bahwa autisme adalah sesuatu yang dibawa sejak lahir. Artinya, orang dewasa yang baru didiagnosis autis bukan "menjadi autis" di usia dewasa. Ia sudah autis sejak kecil, hanya saja tandanya tidak dikenali, disalahartikan, atau berhasil disembunyikan. NHS juga menyebut autisme bukan penyakit, dan tidak ada pengobatan atau penyembuhannya, tetapi ada cara mengelolanya dan mendapatkan dukungan.'),
  p('Perbedaan istilah antara "anak autis" dan "orang dewasa autis" hanya soal usia saat dikenali. Perbedaan pengalaman hidupnya yang besar. Orang yang didiagnosis saat kecil biasanya mendapat dukungan sejak dini. Orang yang baru didiagnosis saat dewasa sering sudah melewati bertahun-tahun kebingungan, salah paham dengan lingkungan, atau merasa harus berusaha jauh lebih keras daripada orang lain untuk hal yang tampak mudah. Penjelasan tentang istilah neurodivergen ada di ' + a('neurodivergent-vs-neurotypical-perbedaan', 'perbedaan neurodivergent dan neurotypical') + '.'),

  '<h2 id="alasan">Mengapa autisme baru terdiagnosis saat dewasa</h2>',
  p('Ada beberapa alasan yang dijelaskan oleh sumber kesehatan resmi. Alasan pertama adalah masking. ' + ext(URL_NHS_AUT_ADULT, 'Halaman NHS tentang tanda autisme pada orang dewasa') + ' menyebut orang dewasa autis mungkin sudah belajar menyesuaikan diri sehingga tanda autismenya tidak selalu terlihat. Hal ini disebut masking, dan dapat membuat kegiatan sehari-hari serta interaksi sosial terasa melelahkan dan menekan.'),
  p('Alasan kedua adalah tumpang tindih dengan kondisi lain. ' + ext(URL_NIMH_ASD, 'NIMH (Institut Nasional Kesehatan Mental Amerika Serikat)') + ' menyebut diagnosis autisme pada orang dewasa sering lebih sulit daripada pada anak, karena sebagian gejala autisme tumpang tindih dengan gejala gangguan mental seperti gangguan kecemasan atau ADHD. NHS juga mencatat bahwa tanda autisme bisa sulit terlihat bila orang dewasa memiliki kondisi lain, seperti disabilitas intelektual, kecemasan, depresi, gangguan makan, atau ADHD. Akibatnya, seseorang bisa bertahun-tahun ditangani untuk kecemasan atau depresi tanpa ada yang menyadari bahwa autisme ikut mendasarinya.'),
  p('Alasan ketiga adalah cara pandang yang terbatas. Dulu autisme sering dibayangkan hanya sebagai anak yang tidak berbicara dan sangat sulit berinteraksi. Orang yang berbicara lancar, berprestasi di sekolah, atau tampak "hanya pendiam" jarang dicurigai autis. Padahal NHS menjelaskan sebagian orang autis memiliki kecerdasan rata-rata atau di atas rata-rata. Gambaran tentang ragam tingkat dukungan pada autisme dibahas di ' + a('apa-itu-autisme-level-1-2-3', 'autisme level 1, 2, dan 3') + '.'),
  p('Alasan keempat adalah akses layanan. Di banyak tempat, layanan asesmen autisme lebih banyak berfokus pada anak. Bahkan di Inggris, NHS menyebut setelah rujukan diterima, bisa butuh beberapa bulan atau lebih untuk mendapatkan asesmen. Di Indonesia, layanan asesmen khusus orang dewasa masih terbatas, sehingga banyak orang dewasa tidak tahu harus mulai dari mana.'),
  table('Alasan autisme sering baru dikenali saat dewasa', ['Alasan', 'Penjelasan', 'Sumber'], [
    ['Masking', 'Orang autis belajar menyesuaikan diri sehingga tandanya tidak terlihat', 'NHS'],
    ['Tumpang tindih dengan kondisi lain', 'Gejala mirip gangguan kecemasan atau ADHD; tanda tertutup oleh depresi, kecemasan, atau gangguan makan', 'NIMH, NHS'],
    ['Gambaran autisme yang sempit', 'Sebagian orang autis memiliki kecerdasan rata-rata atau di atas rata-rata sehingga jarang dicurigai', 'NHS'],
    ['Akses asesmen terbatas', 'Antrean asesmen bisa beberapa bulan atau lebih; layanan untuk orang dewasa lebih sedikit', 'NHS'],
  ]),
  p('Pemicu seseorang mulai mencari diagnosis biasanya beragam. Ada yang mulai curiga setelah membaca pengalaman orang autis lain, ada yang disarankan psikolog saat menjalani konseling untuk masalah lain, dan ada yang mengenali dirinya saat anaknya didiagnosis. NHS menyebut seseorang juga bisa dirujuk untuk asesmen autisme saat sedang mendapat bantuan untuk kondisi lain, misalnya ketika tenaga kesehatan mental melihat tanda-tanda autisme dan menyarankan rujukan.'),

  '<h2 id="tanda">Tanda autisme pada orang dewasa</h2>',
  p('NHS menjelaskan bahwa tanda autisme pada orang dewasa bisa mirip dengan tanda pada anak. Seorang dewasa autis mungkin:'),
  ul([
    'Sulit berbicara dengan orang lain.',
    'Lebih banyak menghabiskan waktu sendiri daripada bersama orang lain.',
    'Sulit memahami ekspresi wajah, gestur, atau nada suara orang lain.',
    'Memahami ucapan secara harfiah dan sulit memahami ungkapan kiasan, misalnya "semudah membalik telapak tangan".',
    'Memiliki cara yang tetap dalam melakukan sesuatu.',
    'Merasa sangat tertekan saat rutinitas berubah.',
    'Melakukan gerakan berulang (stimming), seperti bergoyang, mengepakkan tangan, atau menjentikkan jari.',
    'Sangat fokus pada minat tertentu.',
    'Sangat peka, atau sama sekali tidak peka, terhadap cahaya, suara, bau, rasa, atau tekstur.',
  ]),
  diag(`${IMG}/autisme-dewasa-tanda.webp`, 'Diagram tiga kartu tanda autisme pada orang dewasa: komunikasi dan sosial, pola dan rutinitas, serta sensorik dan dampaknya', 'Kelompok tanda autisme pada orang dewasa menurut NHS. Tidak semua orang autis menunjukkan semua tanda ini.'),
  p('NHS juga menyebut orang dewasa autis mungkin mengalami masalah untuk bertahan di sekolah, kuliah, atau pekerjaan, kesulitan berteman dan menjalin hubungan romantis, masalah kesehatan mental, atau disabilitas intelektual. Menurut NHS, orang autis lebih mungkin memiliki beberapa kondisi kesehatan fisik dan mental, seperti epilepsi, kecemasan, gangguan makan, atau depresi, dan ADHD juga lebih sering ditemukan pada orang autis.'),
  p('Dalam keseharian, tanda-tanda ini bisa muncul dalam bentuk yang halus. Seseorang mungkin selalu menyiapkan "naskah" sebelum menelepon, merasa sangat lelah setelah acara keluarga meski tampak menikmatinya, memilih makanan yang sama setiap hari, mudah terganggu oleh lampu neon atau suara mesin, atau merasa canggung saat obrolan basa-basi. Satu tanda saja tidak berarti autis. Yang dinilai adalah pola yang konsisten sejak kecil dan dampaknya pada kehidupan sehari-hari.'),
  p('Penting dibedakan pula antara tanda autisme dan sifat kepribadian biasa. Banyak orang yang introver atau menyukai keteraturan tidak autis. Karena itu, daftar tanda di internet, termasuk di artikel ini, tidak bisa dipakai untuk mendiagnosis diri sendiri. Daftar ini hanya membantu Anda memutuskan apakah perlu berkonsultasi dengan profesional.'),
  fig(`${IMG}/autisme-dewasa-foto1.webp`, 1200, 900, 'Sebuah headphone hitam peredam bising tergeletak di atas permukaan putih', 'Headphone peredam bising. Sebagian orang autis memakai alat seperti ini untuk mengurangi suara yang terasa berlebihan di tempat ramai.', CM(D_FOTO1, 'www.digitalpush.net', 'CC BY 4.0')),

  '<h2 id="perempuan">Autisme pada perempuan dewasa</h2>',
  p('Banyak perempuan baru didiagnosis autis saat dewasa. NHS menjelaskan bahwa tanda autisme pada perempuan bisa lebih sulit terlihat karena masking. Menurut NHS, perempuan autis mungkin lebih cenderung:'),
  ul([
    'Meniru cara orang lain berperilaku.',
    'Tampak mampu menghadapi situasi sosial dengan baik.',
    'Sangat pendiam dalam situasi yang sulit baginya dan menyembunyikan perasaannya.',
    'Menunjukkan lebih sedikit perilaku berulang dibanding laki-laki autis.',
    'Memiliki kondisi kesehatan mental seperti kecemasan, depresi, atau gangguan makan.',
  ]),
  p('NHS menambahkan catatan penting: meskipun perempuan autis mungkin lebih sering melakukan masking, laki-laki autis juga bisa melakukannya. Jadi masking bukan hanya pengalaman perempuan. Pembahasan lebih mendalam tentang masking atau camouflaging pada perempuan, termasuk temuan penelitiannya, ada di artikel ' + a('camouflaging-autisme-pada-wanita-penelitian', 'camouflaging autisme pada wanita') + '.'),
  p('Bagi banyak perempuan, diagnosis datang setelah bertahun-tahun ditangani untuk kecemasan, depresi, atau gangguan makan tanpa perbaikan yang berarti. Memahami bahwa autisme ikut mendasari kesulitannya bisa membuka jalan ke dukungan yang lebih tepat, misalnya penyesuaian lingkungan kerja atau strategi mengatur energi sosial.'),

  '<h2 id="proses">Proses asesmen autisme untuk orang dewasa</h2>',
  p('NHS menganjurkan orang dewasa yang merasa mungkin autis untuk menemui dokter umum, yang dapat merujuk ke tim autisme setempat untuk asesmen. NIMH memberi saran serupa: orang dewasa yang bertanya-tanya apakah dirinya autis sebaiknya berbicara dengan tenaga kesehatan dan meminta rujukan untuk evaluasi autisme. Menurut NIMH, meski evaluasi autisme untuk orang dewasa masih terus disempurnakan, orang dewasa dapat dirujuk ke neuropsikolog, psikolog, atau psikiater yang berpengalaman menangani autisme.'),
  diag(`${IMG}/autisme-dewasa-asesmen.webp`, 'Diagram alur empat langkah menuju diagnosis autisme dewasa: mencatat pengalaman, konsultasi awal, asesmen, serta laporan dan tindak lanjut', 'Alur umum menuju diagnosis autisme di usia dewasa. Urutan dan nama layanan di Indonesia bisa berbeda antar fasilitas kesehatan.'),
  p('Menurut ' + ext(URL_NHS_AUT_ASSESS, 'halaman asesmen autisme NHS') + ', orang dewasa mungkin menjalani satu atau beberapa pertemuan dengan tim tenaga kesehatan dari berbagai profesi. Tim asesmen mungkin akan:'),
  ul([
    'Meminta Anda mengisi kuesioner tentang diri sendiri.',
    'Menanyakan perilaku Anda saat bersama orang lain, kehidupan masa kecil, serta kehidupan di rumah, tempat kerja, atau kampus.',
    'Berbicara dengan seseorang yang mengenal Anda sejak kecil, untuk melihat apakah ada tanda autisme saat Anda tumbuh.',
    'Berbicara dengan seseorang yang mengenal Anda sekarang, seperti anggota keluarga, pasangan, atau pendamping.',
    'Membaca laporan dokter tentang masalah kesehatan lain yang Anda miliki.',
    'Meminta dokumen lain yang membantu, seperti rapor sekolah atau hasil penilaian di tempat kerja.',
  ]),
  p('NIMH menyebut ahli yang melakukan evaluasi akan menanyakan tantangan dalam interaksi sosial dan komunikasi, masalah sensorik, perilaku berulang, dan minat yang terbatas. Evaluasi juga bisa mencakup percakapan dengan pengasuh dan anggota keluarga untuk mengetahui riwayat perkembangan awal, yang membantu memastikan diagnosis yang akurat.'),
  p('Di Indonesia, langkah praktisnya kurang lebih begini. Mulailah dengan berkonsultasi di fasilitas kesehatan, lalu minta rujukan ke psikiater di rumah sakit atau ke psikolog klinis yang memiliki pengalaman dengan autisme pada orang dewasa. Tanyakan lebih dulu apakah layanan tersebut menerima asesmen untuk orang dewasa, karena banyak layanan hanya menangani anak. Siapkan catatan tertulis berisi contoh pengalaman sejak kecil, dan bila memungkinkan ajak orang tua atau saudara yang mengingat masa kecil Anda. Rapor sekolah lama yang berisi catatan wali kelas juga sering membantu.'),
  p('Proses ini bisa memakan waktu dan biaya. Bila belum memungkinkan menjalani asesmen penuh, berkonsultasi dengan psikolog tetap bermanfaat untuk memahami kesulitan Anda dan menyusun strategi sehari-hari, sambil menyiapkan asesmen di kemudian hari.'),

  '<h2 id="hasil">Setelah hasil keluar</h2>',
  p('Menurut NHS, setelah asesmen Anda akan menerima laporan tentang temuan tim. Laporan itu seharusnya menyebutkan apakah Anda autis, apa kekuatan Anda, apa yang mungkin membutuhkan bantuan, dan apakah ditemukan kondisi lain. Bila didiagnosis autis, Anda mungkin ditawari pertemuan lanjutan dengan tim asesmen beberapa minggu atau bulan kemudian, serta rencana perawatan atau informasi dukungan.'),
  p('Tidak semua asesmen berakhir dengan diagnosis autisme. NHS menyebut Anda mungkin diberi tahu bahwa Anda tidak autis, atau mendapat diagnosis lain yang tidak Anda setujui. Bila demikian, NHS menganjurkan menanyakan alasan keputusan tim asesmen. Bila tetap tidak setuju, Anda dapat meminta rujukan ke tim lain untuk pendapat kedua.'),
  p('Reaksi emosional setelah diagnosis sangat beragam. Banyak orang merasa lega karena akhirnya ada penjelasan atas kesulitan yang dialami bertahun-tahun. Sebagian lain merasa sedih memikirkan masa lalu yang mungkin bisa lebih mudah bila diagnosis datang lebih awal, atau marah karena tanda-tandanya tidak dikenali. Semua perasaan ini wajar dan sering datang bergantian. NIMH menyebut diagnosis yang tepat di usia dewasa dapat membantu seseorang memahami tantangan di masa lalu, mengenali kekuatan pribadinya, dan menemukan jenis bantuan yang tepat.'),
  p('Memutuskan kepada siapa memberi tahu diagnosis adalah hak Anda sepenuhnya. Sebagian orang memilih terbuka kepada keluarga dan atasan agar bisa meminta penyesuaian, sebagian lain hanya memberi tahu orang terdekat. Tidak ada pilihan yang salah. Bila bekerja, informasi tentang jenis pekerjaan dan penyesuaian yang sering membantu orang autis ada di ' + a('pekerjaan-yang-cocok-untuk-orang-autis', 'pekerjaan yang cocok untuk orang autis') + '.'),

  '<h2 id="orang-tua">Ketika orang tua anak autis mengenali dirinya</h2>',
  p('Saat mengisi kuesioner perkembangan anak atau mendengarkan penjelasan psikolog tentang autisme, sebagian orang tua merasa sedang membaca kisah masa kecilnya sendiri. NHS menyebut penyebab autisme belum diketahui, tetapi autisme kadang ditemukan pada beberapa orang dalam satu keluarga. NHS juga menegaskan bahwa autisme tidak disebabkan oleh vaksin atau obat-obatan. Penjelasan tentang penelitian mengenai faktor keturunan ada di ' + a('penyebab-autisme-penelitian-genetik-terbaru', 'penelitian genetik penyebab autisme') + '.'),
  p('Mengenali kemungkinan autisme pada diri sendiri bisa menjadi pengalaman yang campur aduk. Di satu sisi, orang tua bisa merasa lebih memahami anaknya, karena ia tahu dari dalam bagaimana rasanya kewalahan oleh suara bising atau perubahan rencana mendadak. Di sisi lain, orang tua mungkin merasa cemas, misalnya takut dianggap tidak mampu mengasuh. Perlu diingat bahwa banyak orang dewasa autis adalah orang tua yang penuh kasih dan sangat memahami kebutuhan anaknya.'),
  p('Bila Anda berada di posisi ini, beberapa langkah bisa membantu. Pertama, fokuskan dulu energi pada dukungan anak yang sedang berjalan. Kedua, catat pengalaman Anda sendiri dan bicarakan dengan psikolog, bisa psikolog yang sama atau yang berbeda. Ketiga, kenali kebutuhan sensorik dan sosial Anda sendiri, karena orang tua yang terus kelelahan akan sulit mendampingi anak. Langkah menjaga kesehatan mental orang tua dibahas di ' + a('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak ABK') + ', dan tahapan menerima diagnosis anak ada di ' + a('menerima-diagnosis-anak-abk', 'menerima diagnosis anak ABK') + '.'),
  p('Pemahaman tentang diri sendiri juga bisa menjadi kekuatan dalam mengasuh. Orang tua yang tahu dirinya mudah kewalahan oleh keramaian, misalnya, bisa merencanakan kunjungan keluarga yang lebih singkat atau menyiapkan waktu tenang setelahnya, untuk dirinya dan untuk anaknya.'),
  fig(`${IMG}/autisme-dewasa-foto2.webp`, 1200, 675, 'Ruang baca perpustakaan yang sepi dengan meja dan kursi kayu berjajar, rak buku, dan lukisan dinding bertema sejarah', 'Ruang baca Perpustakaan Museum Keris Nusantara di Surakarta. Tempat yang tenang dan teratur seperti ini sering membantu orang autis memulihkan energi setelah kegiatan sosial.', CM(D_FOTO2, 'Muhamad Fahrizal Leo Pratama', 'CC0')),

  '<h2 id="dukungan">Dukungan dan langkah berikutnya</h2>',
  p('NIMH menyebut orang dengan autisme memiliki kebutuhan yang sangat beragam, sehingga tidak ada satu pendekatan terbaik. Bekerja sama erat dengan tenaga kesehatan dan penyedia layanan penting untuk menemukan kombinasi dukungan yang tepat. NIMH juga menyebut penelitian masih berjalan untuk menentukan layanan dan dukungan yang paling membantu bagi remaja dan orang dewasa autis.'),
  p('Beberapa bentuk dukungan yang sering membantu orang dewasa autis antara lain:'),
  ul([
    '<strong>Konseling atau psikoterapi</strong> untuk kondisi yang menyertai, seperti kecemasan atau depresi, dengan terapis yang memahami autisme.',
    '<strong>Penyesuaian sensorik</strong>, misalnya penutup telinga atau headphone di tempat bising, pencahayaan yang lebih redup, atau pakaian dengan bahan yang nyaman.',
    '<strong>Struktur dan rutinitas</strong>, seperti kalender visual, pengingat di ponsel, dan pemberitahuan lebih awal bila ada perubahan rencana.',
    '<strong>Penyesuaian di tempat kerja</strong>, seperti instruksi tertulis, ruang kerja yang lebih tenang, atau jadwal rapat yang jelas.',
    '<strong>Komunitas sesama orang autis</strong>, yang bisa memberi rasa diterima dan berbagi strategi praktis.',
  ]),
  p('Ingat juga untuk tidak memaksakan diri terus-menerus melakukan masking. NHS menyebut masking dapat membuat kegiatan sehari-hari dan interaksi sosial terasa melelahkan dan menekan. Menemukan tempat dan orang di mana Anda bisa menjadi diri sendiri adalah bagian penting dari menjaga kesehatan mental. Bagi sebagian orang, ini berarti memberi waktu istirahat setelah acara sosial, atau menjelaskan kepada keluarga bahwa menyendiri sejenak bukan tanda marah atau tidak peduli.'),
  p('Bagi orang dewasa autis yang lebih tua, kebutuhan dukungan bisa berubah seiring usia. Pembahasan tentang tantangan dan solusinya ada di ' + a('aging-with-autism-tantangan-dan-solusi', 'aging with autism') + '. Apa pun usianya, diagnosis bukan label yang membatasi, melainkan peta untuk memahami diri sendiri dan meminta dukungan yang sesuai.'),
  p('Terakhir, bila Anda sedang mengalami tekanan berat, perasaan putus asa, atau pikiran untuk menyakiti diri sendiri, segera hubungi tenaga kesehatan atau layanan darurat terdekat. Kesehatan mental yang terjaga lebih penting daripada diagnosis apa pun.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(dwFaq),
];

articles.push({
  slug: 'diagnosis-autisme-pada-orang-dewasa',
  titleTag: 'Diagnosis Autisme pada Orang Dewasa: Tanda dan Proses | YUKA',
  metaDesc: 'Late diagnosis autisme dewasa: mengapa autisme baru terdiagnosis saat dewasa, tanda dan masking, autisme pada perempuan, proses asesmen, setelah hasil keluar, dan dukungan, berdasarkan NHS dan NIMH.',
  keywords: 'late diagnosis autisme dewasa, diagnosis autisme dewasa, autisme pada orang dewasa, tanda autisme dewasa, asesmen autisme dewasa',
  ogTitle: 'Diagnosis Autisme pada Orang Dewasa',
  ogDesc: 'Mengapa autisme baru dikenali saat dewasa, tanda dan masking, proses asesmen, dan dukungan setelah diagnosis.',
  h1: 'Diagnosis Autisme pada Orang Dewasa: Tanda, Masking, dan Proses Asesmen',
  crumb: 'Diagnosis Autisme pada Orang Dewasa',
  category: 'Kesehatan',
  datePublished: '2026-12-03T08:00:00+07:00', dateModified: '2026-12-03T08:00:00+07:00',
  dateDisplay: '3 Desember 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/autisme-dewasa-hero.webp`, w: 1200, h: 904,
    alt: 'Pemandangan malam kota Tokyo dengan gedung-gedung tinggi, Menara Tokyo di tengah menyala biru',
    caption: 'Menara Tokyo diterangi cahaya biru untuk memperingati Hari Peduli Autisme Sedunia, 2 April. Kesadaran tentang autisme yang makin luas membuat makin banyak orang dewasa mengenali dirinya autis.',
    credit: CM(D_HERO, 'Syced', 'CC0'),
  },
  bodyHtml: dwBody.join('\n'), faq: dwFaq,
  related: [
    { href: '/artikel/autisme-adalah', title: 'Autisme Adalah', desc: 'Pengertian, ciri, dan dukungan bagi anak autis.' },
    { href: '/artikel/camouflaging-autisme-pada-wanita-penelitian', title: 'Camouflaging Autisme pada Wanita', desc: 'Masking dan temuan penelitian.' },
    { href: '/artikel/pekerjaan-yang-cocok-untuk-orang-autis', title: 'Pekerjaan untuk Orang Autis', desc: 'Pilihan kerja dan penyesuaian yang membantu.' },
  ],
  tags: ['Autisme', 'AutismeDewasa', 'Neurodivergen'],
  sources: [
    { url: URL_NHS_AUT_ADULT, label: 'NHS: Signs of autism in adults (tanda, masking, autisme pada perempuan; ditinjau 6 Mei 2026)' },
    { url: URL_NHS_AUT_ASSESS, label: 'NHS: Autism assessments (asesmen untuk orang dewasa, hasil, pendapat kedua)' },
    { url: URL_NHS_AUT, label: 'NHS: What is autism?' },
    { url: URL_NIMH_ASD, label: 'NIMH: Autism Spectrum Disorder (diagnosis pada orang dewasa, layanan dan dukungan)' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum, bukan alat diagnosis. Diagnosis autisme hanya dapat ditegakkan oleh profesional yang berwenang melalui asesmen.',
});


// ---------------------------------------------------------------------------
// Artikel 4: jadwal harian anak ADHD (4 Des 2026)
// Keyword: "jadwal harian anak adhd yang efektif" (tab Riset Keyword Batch 5, baris 168)
// ---------------------------------------------------------------------------
const URL_CDC_BT = 'https://www.cdc.gov/adhd/treatment/behavior-therapy.html';
const URL_CDC_CLASS = 'https://www.cdc.gov/adhd/treatment/classroom.html';
const URL_NHS_ADHD_CH = 'https://www.nhs.uk/conditions/attention-deficit-hyperactivity-disorder-adhd/living-with/';
const URL_AAP_STRUCT = 'https://www.healthychildren.org/English/health-issues/conditions/adhd/Pages/Simplifying-Organizing-and-Structuring-the-Home-Environment.aspx';
const URL_CDC_SLEEP = 'https://www.cdc.gov/sleep/about/index.html';
const URL_CDC_PA = 'https://www.cdc.gov/physical-activity-basics/guidelines/children.html';
const J_HERO = 'https://commons.wikimedia.org/wiki/File:Bermain_Sepak_Bola_di_Lapang.jpg';
const J_FOTO1 = 'https://commons.wikimedia.org/wiki/File:Wall_clock_in_morning_time.jpg';
const J_FOTO2 = 'https://commons.wikimedia.org/wiki/File:Children_reading_The_Grinch.jpg';

const jSections = [
  ['mengapa', 'Mengapa anak ADHD butuh jadwal harian'],
  ['prinsip', 'Prinsip jadwal harian yang efektif'],
  ['contoh', 'Contoh jadwal harian anak ADHD usia sekolah'],
  ['pagi', 'Rutinitas pagi dan berangkat sekolah'],
  ['belajar', 'Waktu belajar dan pekerjaan rumah'],
  ['malam', 'Sore, malam, dan waktu tidur'],
  ['pujian', 'Pujian, hadiah, dan konsekuensi'],
  ['sekolah', 'Bekerja sama dengan sekolah'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const jFaq = [
  { q: 'Mengapa anak ADHD perlu jadwal harian?', a: 'American Academy of Pediatrics (AAP) menyebut rutinitas harian adalah kebutuhan mutlak bagi banyak anak dengan ADHD. Kemampuan anak mengatur diri dan berinteraksi sosial cenderung meningkat bila lingkungannya tertata dan terstruktur sesuai kebutuhannya. CDC juga menganjurkan orang tua membuat rutinitas dengan mengikuti jadwal yang sama setiap hari, dari bangun sampai tidur.' },
  { q: 'Seperti apa jadwal harian yang efektif untuk anak ADHD?', a: 'Jadwal yang efektif konsisten setiap hari, sederhana, terlihat jelas misalnya ditulis atau bergambar, memecah tugas menjadi bagian kecil dengan jeda, memberi pilihan terbatas, dan menyediakan waktu untuk aktivitas fisik dan tidur yang cukup. NHS menyarankan tugas seperti pekerjaan rumah dibagi menjadi slot 15 sampai 20 menit dengan istirahat di antaranya.' },
  { q: 'Berapa lama anak ADHD sebaiknya belajar sekali duduk?', a: 'NHS memberi contoh membagi tugas seperti pekerjaan rumah menjadi slot 15 sampai 20 menit dengan jeda di antara setiap slot. Lama yang pas bisa berbeda untuk tiap anak, jadi amati kapan anak mulai kehilangan fokus lalu sesuaikan.' },
  { q: 'Berapa jam tidur yang dibutuhkan anak ADHD?', a: 'Kebutuhan tidur anak ADHD mengikuti anjuran umum. CDC menyebut anak usia 3 sampai 5 tahun butuh 10 sampai 13 jam termasuk tidur siang, anak usia 6 sampai 12 tahun butuh 9 sampai 12 jam, dan remaja 13 sampai 17 tahun butuh 8 sampai 10 jam per 24 jam. NHS juga menganjurkan orang tua mendorong anak ADHD tidur secara teratur.' },
  { q: 'Apakah jadwal harus diikuti persis setiap menit?', a: 'Tidak. Yang terpenting adalah urutan kegiatan yang konsisten dan dapat ditebak anak. AAP mengingatkan agar rencana apa pun realistis dan tidak membebani. Bila ada perubahan, beri tahu anak lebih awal dan tunjukkan di jadwalnya.' },
  { q: 'Bagaimana cara membuat anak ADHD mau mengikuti jadwal?', a: 'Libatkan anak saat menyusun jadwal, tempel jadwal di tempat yang mudah dilihat, dan beri pujian atau hadiah kecil saat anak berhasil. CDC menyarankan memakai bagan untuk mencatat tujuan dan perilaku positif, dengan tujuan yang realistis dan langkah-langkah kecil.' },
  { q: 'Apakah jadwal harian bisa menggantikan terapi atau obat ADHD?', a: 'Tidak. Jadwal harian adalah bagian dari dukungan di rumah. CDC menyebut pengobatan ADHD meliputi terapi perilaku dan obat, dan untuk anak di bawah 6 tahun AAP menganjurkan pelatihan orang tua dalam manajemen perilaku sebagai langkah pertama. Rencana penanganan sebaiknya disusun bersama dokter.' },
  { q: 'Bagaimana jika orang tua sendiri kesulitan teratur?', a: 'AAP mencatat bahwa menata kehidupan keluarga sebaik mungkin juga membantu orang tua merasa lebih tenang dan terkendali, terlebih bila orang tua sendiri memiliki ADHD. AAP menyarankan kalender keluarga dan daftar tugas harian, serta meluangkan 10 sampai 30 menit sebelum anak bangun untuk menyusun prioritas hari itu.' },
];

addDiagram(`${IMG}/jadwal-adhd-prinsip.webp`, svg.cards('Prinsip jadwal harian anak ADHD', 'Rangkuman anjuran CDC, NHS, dan AAP', [
  { h: 'Konsisten', items: ['Jadwal sama setiap hari', 'Dari bangun sampai tidur', 'Perubahan diberitahukan lebih awal'] },
  { h: 'Terlihat', items: ['Daftar tugas ditulis', 'Ditempel di tempat mudah dilihat', 'Gambar untuk anak kecil'] },
  { h: 'Bertahap', items: ['Tugas dipecah kecil', 'Slot 15 sampai 20 menit', 'Jeda di antara slot'] },
  { h: 'Seimbang', items: ['Aktivitas fisik', 'Makan teratur', 'Tidur yang cukup'] },
]));
addDiagram(`${IMG}/jadwal-adhd-belajar.webp`, svg.flow('Blok belajar untuk anak ADHD', 'Contoh penerapan anjuran NHS dan CDC saat mengerjakan PR', [
  { h: 'Siapkan meja', d: 'Matikan TV dan gawai, kurangi suara, sediakan meja yang bersih.' },
  { h: 'Pecah tugas', d: 'Bagi PR menjadi bagian kecil dan tulis urutannya di daftar.' },
  { h: 'Kerja 15 sampai 20 menit', d: 'Satu bagian tugas, dengan instruksi singkat dan jelas.' },
  { h: 'Istirahat dan pujian', d: 'Jeda singkat untuk bergerak, beri pujian, lanjut ke bagian berikutnya.' },
]));

const jBody = [
  p('<strong>Jadwal harian anak ADHD yang efektif</strong> adalah rutinitas yang sama setiap hari, dari bangun sampai tidur, ditulis atau digambar di tempat yang mudah dilihat, dengan tugas dipecah menjadi bagian kecil dan jeda di antaranya. American Academy of Pediatrics (AAP) menyebut rutinitas harian adalah kebutuhan mutlak bagi banyak anak ADHD, dan CDC menganjurkan orang tua mengikuti jadwal yang sama setiap hari. Jadwal yang baik juga menyediakan waktu untuk bergerak, makan teratur, dan tidur yang cukup.'),
  p('Pagi yang selalu terburu-buru, PR yang tidak selesai, dan pertengkaran saat waktu tidur adalah cerita yang akrab bagi banyak keluarga yang memiliki anak dengan ADHD. Jadwal harian bukan solusi ajaib, tetapi menjadi fondasi yang membuat hari lebih bisa ditebak, baik bagi anak maupun orang tua. Artikel ini membahas alasan anak ADHD butuh jadwal, prinsip menyusunnya, contoh jadwal, cara mengatur pagi, waktu belajar, dan malam, serta peran pujian dan kerja sama dengan sekolah. Untuk pengertian dasar ADHD, baca ' + a('adhd-adalah', 'ADHD adalah') + '.'),
  toc(jSections),

  '<h2 id="mengapa">Mengapa anak ADHD butuh jadwal harian</h2>',
  p(ext(URL_NHS_ADHD_CH, 'NHS (layanan kesehatan nasional Inggris)') + ' menjelaskan bahwa ADHD adalah kondisi yang dapat memengaruhi cara seseorang memusatkan perhatian. Anak dengan ADHD mungkin mudah terdistraksi, sulit mendengarkan ucapan orang lain atau mengikuti instruksi, dan lupa tugas sehari-hari seperti menggosok gigi atau memakai kaus kaki. Mereka juga bisa menunjukkan tanda hiperaktif dan impulsif, seperti energi yang tinggi, gelisah, sulit menunggu giliran, atau memotong percakapan.'),
  p('Kesulitan-kesulitan ini membuat tugas yang tampak sederhana, seperti bersiap ke sekolah, menjadi rangkaian langkah yang mudah buyar. Di sinilah jadwal harian berperan. ' + ext(URL_AAP_STRUCT, 'AAP di HealthyChildren.org') + ' menyebut kemampuan anak ADHD untuk mengatur diri dan berinteraksi sosial meningkat di hampir semua bidang bila lingkungannya tertata dan terstruktur sesuai kebutuhannya. AAP menegaskan bahwa rutinitas harian adalah kebutuhan mutlak bagi banyak anak dengan ADHD.'),
  p('AAP memakai perumpamaan yang menarik: bayangkan anak yang sedang tumbuh sebagai sebuah bangunan yang sedang dibangun. Batasan, daftar, rutinitas, dan langkah lain yang orang tua siapkan hari ini ibarat perancah yang menopang selama bangunan itu berkembang. Ketika anak sudah mengubah rutinitas menjadi kebiasaan dan makin mampu mengatur dirinya, sebagian penopang dapat dilepas secara bertahap. AAP menegaskan bahwa membantu menata dunia anak bukan berarti memanjakannya, melainkan memberi kesempatan untuk menambah kemampuan dan merasakan banyak keberhasilan kecil yang meningkatkan harga dirinya.'),
  p(ext(URL_CDC_BT, 'CDC (Pusat Pengendalian dan Pencegahan Penyakit Amerika Serikat)') + ' memasukkan pembuatan rutinitas ke dalam contoh tips manajemen perilaku untuk orang tua. Untuk tugas yang terjadi setiap hari, CDC menyarankan mengikuti jadwal yang sama setiap hari, dari waktu bangun sampai waktu tidur. Jadwal yang konsisten mengurangi jumlah keputusan dan perintah yang harus diberikan, sehingga pertengkaran kecil sepanjang hari pun berkurang.'),
  p('Perlu diingat, jadwal harian adalah bagian dari dukungan di rumah, bukan pengganti penanganan medis. CDC menyebut pengobatan ADHD meliputi terapi perilaku dan obat. Untuk anak di bawah 6 tahun, AAP menganjurkan pelatihan orang tua dalam manajemen perilaku sebagai langkah pertama sebelum mencoba obat. Dalam pelatihan itu, menurut CDC, orang tua biasanya mengikuti 8 sampai 16 sesi dengan terapis dan belajar strategi yang memakai penguatan positif, struktur, dan disiplin yang konsisten.'),

  '<h2 id="prinsip">Prinsip jadwal harian yang efektif</h2>',
  p('Tidak ada satu jadwal yang cocok untuk semua anak. Namun anjuran dari CDC, NHS, dan AAP memberi beberapa prinsip yang bisa dipegang saat menyusun jadwal untuk anak Anda.'),
  diag(`${IMG}/jadwal-adhd-prinsip.webp`, 'Diagram empat kartu prinsip jadwal harian anak ADHD: konsisten, terlihat, bertahap, dan seimbang', 'Empat prinsip jadwal harian anak ADHD yang dirangkum dari CDC, NHS, dan AAP.'),
  p('<strong>Konsisten.</strong> CDC menganjurkan jadwal yang sama setiap hari untuk tugas harian. Konsisten tidak berarti kaku sampai hitungan menit. Yang penting urutan kegiatannya tetap, misalnya bangun, mandi, berpakaian, sarapan, lalu berangkat, sehingga anak tahu apa yang datang berikutnya. Bila ada perubahan, beri tahu anak lebih awal.'),
  p('<strong>Terlihat.</strong> AAP menyebut daftar tertulis berisi tugas rumah atau kegiatan harian sangat berguna untuk membantu anak mengingat apa yang perlu dilakukan, dan menjadi kebiasaan baik yang bisa dibawa sampai remaja dan dewasa. NHS juga menyarankan menulis daftar tugas dan menempelkannya di tempat yang mudah dilihat. Untuk anak yang belum lancar membaca, gunakan gambar atau foto kegiatan. Cara membuat jadwal bergambar dijelaskan di ' + a('cara-membuat-jadwal-visual-untuk-anak-autis', 'cara membuat jadwal visual') + ', dan langkahnya juga bisa dipakai untuk anak ADHD.'),
  p('<strong>Bertahap.</strong> NHS menyarankan memecah tugas, seperti mengerjakan PR atau duduk untuk makan, menjadi slot 15 sampai 20 menit dengan jeda di antara setiap slot. CDC menambahkan agar tugas yang rumit dipecah menjadi langkah yang lebih sederhana dan pendek. Untuk tugas panjang, mulai lebih awal dan ambil jeda dapat membantu mengurangi stres.'),
  p('<strong>Pilihan terbatas.</strong> AAP menyebut pilihan terbatas membuat dunia anak lebih mudah dikelola, misalnya bukan "mau makan apa?" melainkan "mau apel atau telur rebus?". CDC menyarankan hal serupa: tawarkan pilihan dengan sedikit opsi, seperti baju ini atau itu, agar anak tidak kewalahan.'),
  p('<strong>Seimbang.</strong> CDC menyebut makanan bergizi, banyak aktivitas fisik, dan tidur yang cukup itu penting, karena dapat membantu menjaga gejala ADHD agar tidak memburuk. NHS juga menganjurkan menyediakan waktu untuk aktivitas fisik yang disukai anak, mendorong tidur yang teratur, serta pola makan sehat dan seimbang dengan waktu makan yang teratur.'),
  p('<strong>Realistis.</strong> AAP mengingatkan agar rencana apa pun realistis dan tidak membebani. Jadwal yang terlalu padat justru membuat anak dan orang tua sama-sama frustrasi. Mulailah dari satu bagian hari yang paling sering bermasalah, misalnya pagi hari, lalu tambahkan bagian lain setelah bagian pertama berjalan lancar.'),

  '<h2 id="contoh">Contoh jadwal harian anak ADHD usia sekolah</h2>',
  p('Tabel berikut adalah contoh jadwal untuk anak usia sekolah dasar yang masuk pagi. Jam di dalamnya hanya ilustrasi yang kami susun berdasarkan prinsip di atas, bukan anjuran resmi. Sesuaikan dengan jam sekolah, kebiasaan keluarga, dan usia anak. Yang penting adalah urutannya yang tetap, tugas yang dipecah, dan waktu tidur yang cukup.'),
  table('Contoh jadwal harian anak ADHD usia sekolah dasar (ilustrasi, sesuaikan dengan keluarga)', ['Waktu', 'Kegiatan', 'Tips'], [
    ['05.30', 'Bangun, ke kamar mandi, berpakaian', 'Baju sudah disiapkan malam sebelumnya; daftar langkah bergambar di pintu kamar'],
    ['06.00', 'Sarapan', 'Tawarkan dua pilihan menu saja'],
    ['06.30', 'Cek tas dan berangkat sekolah', 'Tas, sepatu, dan botol minum selalu di tempat yang sama'],
    ['13.00', 'Pulang, makan siang, istirahat', 'Beri waktu tenang sebelum kegiatan berikutnya'],
    ['15.30', 'Bermain di luar atau olahraga', 'Aktivitas fisik yang disukai anak'],
    ['16.30', 'Mandi sore', 'Pengingat dengan jam atau timer'],
    ['18.30', 'Makan malam bersama', 'Waktu makan yang teratur setiap hari'],
    ['19.00', 'Belajar dan PR dalam blok 15 sampai 20 menit', 'Jeda singkat dan pujian di antara blok'],
    ['20.00', 'Siapkan tas dan baju untuk besok, waktu tenang', 'Layar dimatikan, membaca buku bersama'],
    ['20.30', 'Tidur', 'Jam tidur yang sama setiap malam'],
  ]),
  p('Dengan jadwal di atas, anak tidur sekitar pukul 20.30 dan bangun pukul 05.30, sehingga mendapat sekitar 9 jam tidur. Angka ini masih masuk anjuran ' + ext(URL_CDC_SLEEP, 'CDC') + ' untuk anak usia 6 sampai 12 tahun, yaitu 9 sampai 12 jam per 24 jam. Bila anak tampak masih mengantuk di pagi hari, majukan jam tidur secara bertahap.'),
  p('Untuk anak prasekolah, jadwal perlu lebih sederhana, dengan lebih banyak waktu bermain dan tidur siang. CDC menyebut anak usia 3 sampai 5 tahun butuh 10 sampai 13 jam tidur per 24 jam, termasuk tidur siang. Untuk remaja, libatkan anak lebih banyak dalam menyusun jadwalnya sendiri, karena tujuan jangka panjangnya adalah kemandirian.'),
  fig(`${IMG}/jadwal-adhd-foto1.webp`, 1200, 966, 'Jam dinding bulat bergaya klasik dengan angka besar, disinari cahaya matahari pagi', 'Jam dinding di pagi hari. Jam atau timer yang terlihat membantu anak ADHD mengetahui kapan satu kegiatan selesai dan kegiatan berikutnya dimulai.', CM(J_FOTO1, 'Garonzi Stefania', 'CC BY-SA 4.0')),

  '<h2 id="pagi">Rutinitas pagi dan berangkat sekolah</h2>',
  p('Pagi hari sering menjadi titik paling menegangkan. Ada banyak langkah dalam waktu yang terbatas, dan anak ADHD mudah teralihkan di tengah jalan. NHS menyebut anak dengan ADHD bisa lupa tugas sehari-hari seperti menggosok gigi atau memakai kaus kaki. Karena itu, sebagian besar persiapan sebaiknya dipindahkan ke malam sebelumnya.'),
  p('CDC menyarankan agar anak membiasakan meletakkan tas sekolah, pakaian, dan mainan di tempat yang sama setiap hari, sehingga lebih kecil kemungkinan barang itu hilang. Siapkan satu tempat khusus di dekat pintu untuk tas, sepatu, dan botol minum. Baju sekolah disiapkan malam sebelumnya, lengkap dengan kaus kaki.'),
  p('Tempel daftar langkah pagi di tempat yang dilalui anak, misalnya di pintu kamar atau kamar mandi: bangun, ke toilet, cuci muka dan gosok gigi, berpakaian, sarapan, pakai sepatu. Untuk anak kecil, pakai gambar. Saat memberi perintah, ikuti anjuran NHS untuk memberi instruksi yang jelas dan sederhana, satu per satu, dengan suara tenang. Perintah "siap-siap sekarang!" terlalu luas. Lebih baik "pakai seragammu dulu", lalu setelah selesai, "sekarang sarapan".'),
  p('Bangunkan anak dengan waktu yang cukup agar tidak terburu-buru. Ketergesaan membuat orang tua mudah membentak dan anak makin sulit fokus. Langkah menyusun rutinitas pagi yang lebih rinci, termasuk cara mengenalkannya, juga dibahas di ' + a('rutinitas-pagi-anak-autis-cara-membuat', 'rutinitas pagi anak') + '.'),

  '<h2 id="belajar">Waktu belajar dan pekerjaan rumah</h2>',
  p('Waktu belajar membutuhkan lingkungan yang mendukung fokus. CDC menyarankan mematikan TV dan media sosial, mengurangi suara, dan menyediakan tempat kerja yang bersih saat anak mengerjakan PR. CDC juga mencatat bahwa sebagian anak ADHD belajar dengan baik sambil bergerak atau mendengarkan musik latar, jadi amati anak Anda dan lihat apa yang paling cocok baginya.'),
  diag(`${IMG}/jadwal-adhd-belajar.webp`, 'Diagram alur empat langkah blok belajar anak ADHD: siapkan meja, pecah tugas, kerja 15 sampai 20 menit, lalu istirahat dan pujian', 'Contoh blok belajar yang menerapkan anjuran NHS dan CDC. Ulangi siklus ini sampai tugas selesai.'),
  p('Pecah PR menjadi bagian kecil. Misalnya, PR matematika sepuluh soal dibagi menjadi dua bagian, masing-masing lima soal. Kerjakan satu bagian dalam satu slot 15 sampai 20 menit seperti anjuran NHS, lalu beri jeda singkat untuk minum, meregangkan badan, atau berjalan sebentar. CDC menyarankan menjelaskan tugas yang rumit dalam langkah-langkah yang lebih sederhana dan memberi arahan yang jelas dan singkat.'),
  p('Pasang jam atau timer yang terlihat agar anak tahu kapan jeda akan datang. Hindari memberi tugas tambahan sebagai hukuman saat anak menyelesaikan tugas lebih cepat, karena anak akan belajar bahwa bekerja cepat justru merugikan. Bila PR terasa terlalu banyak setiap hari, bicarakan dengan guru. Gagasan mengajar anak dengan kesulitan perhatian di kelas juga ada di artikel ' + a('ciri-adhd-tipe-inattentive-pada-anak', 'ciri ADHD tipe inatentif') + '.'),
  p('Letakkan blok belajar setelah anak sempat bergerak dan makan. NHS menyebut olahraga adalah penyaluran energi yang baik bagi anak ADHD. Anak yang baru saja bermain di luar sering lebih siap duduk untuk belajar dibanding anak yang langsung disuruh mengerjakan PR sepulang sekolah.'),

  '<h2 id="malam">Sore, malam, dan waktu tidur</h2>',
  p('Sore hari adalah waktu yang tepat untuk aktivitas fisik. ' + ext(URL_CDC_PA, 'CDC') + ' menyebut anak dan remaja usia 6 sampai 17 tahun perlu aktif setidaknya 60 menit setiap hari, sebagian besar berupa aktivitas aerobik seperti berjalan, berlari, atau kegiatan lain yang membuat jantung berdetak lebih cepat. Bersepeda, bermain bola, berenang, atau sekadar berlarian di halaman bisa menjadi pilihan.'),
  p('Malam hari sebaiknya berjalan dengan urutan yang menenangkan: makan malam bersama, belajar, menyiapkan keperluan besok, lalu waktu tenang sebelum tidur. Matikan layar beberapa saat sebelum tidur dan ganti dengan kegiatan yang lebih tenang, seperti membaca buku bersama. NHS menganjurkan orang tua mendorong anak ADHD tidur secara teratur, dan menyebut melatonin hanya dipakai untuk masalah tidur bila cara lain untuk memperbaiki tidur sudah tidak berhasil, dengan pengawasan dokter spesialis.'),
  p('Banyak anak ADHD mengalami kesulitan tidur. Bila anak sulit terlelap, sering terbangun, atau tampak sangat lelah di siang hari meski jadwal tidurnya sudah teratur, bicarakan dengan dokter. Pembahasan lebih lengkap ada di ' + a('gangguan-tidur-anak-adhd-solusi', 'gangguan tidur anak ADHD') + ' dan ' + a('adhd-dan-masalah-tidur-anak', 'ADHD dan masalah tidur anak') + '.'),
  p('Soal makan, NHS menganjurkan pola makan sehat dan seimbang dengan waktu makan yang teratur. Bila ada makanan atau minuman yang tampaknya memengaruhi gejala anak, NHS menyarankan membuat catatan harian makanan dan minuman untuk melihat polanya, dan catatan ini bisa dibagikan ke sekolah. Informasi tentang makanan yang sering dipertanyakan orang tua ada di ' + a('makanan-yang-harus-dihindari-anak-adhd', 'makanan yang perlu dihindari anak ADHD') + '.'),
  fig(`${IMG}/jadwal-adhd-foto2.webp`, 1200, 800, 'Empat anak berpiyama duduk berdampingan di depan pintu kayu, salah satunya memegang buku cerita bergambar sementara yang lain ikut melihat dan menunjuk', 'Membaca buku bersama sebelum tidur. Kegiatan tenang tanpa layar membantu anak beralih dari waktu bermain ke waktu tidur.', CM(J_FOTO2, 'scbailey', 'CC BY 2.0')),

  '<h2 id="pujian">Pujian, hadiah, dan konsekuensi</h2>',
  p('Jadwal akan lebih mudah diikuti bila keberhasilan anak diperhatikan. NHS menyarankan memberi pujian saat anak melakukan sesuatu dengan baik, atau membuat bagan hadiah. CDC menganjurkan memakai bagan untuk mencatat tujuan dan perilaku positif, lalu memberi tahu anak bahwa ia sudah melakukannya dengan baik, baik dengan kata-kata maupun hadiah lain. CDC menekankan agar tujuannya realistis, karena langkah-langkah kecil itu penting.'),
  p('Contoh bagan sederhana: tulis tiga target harian, misalnya "berpakaian sebelum jam 06.00", "PR selesai", dan "tidur tepat waktu". Setiap target yang tercapai mendapat satu stiker. Setelah terkumpul sejumlah stiker, anak boleh memilih hadiah kecil yang sudah disepakati, seperti memilih menu makan malam atau waktu bermain tambahan. Cara menyusun sistem seperti ini dibahas lebih rinci di ' + a('token-economy-untuk-anak-abk', 'token economy untuk anak ABK') + ' dan ' + a('reward-system-efektif-untuk-anak-autis', 'sistem hadiah yang efektif') + '.'),
  p('Untuk perilaku yang tidak diinginkan, CDC menyarankan agar orang tua tidak memarahi, berteriak, atau memukul, melainkan memakai arahan yang efektif, time-out, atau pencabutan hak istimewa sebagai konsekuensi. Konsekuensi sebaiknya sudah diketahui anak sebelumnya. AAP juga menyebut penetapan batas yang konsisten dengan konsekuensi yang dapat ditebak membantu membuat dunia anak lebih mudah dikelola.'),
  p('CDC juga mengingatkan untuk menciptakan kesempatan positif. Anak ADHD mungkin merasa sebagian situasi menegangkan, jadi temukan dan dorong hal yang anak kuasai, entah sekolah, olahraga, seni, musik, atau bermain. Sisipkan kegiatan itu di jadwal harian sebagai waktu yang dinantikan anak, bukan hanya sebagai hadiah.'),
  p('Jangan lupakan diri Anda sendiri. AAP mencatat bahwa menata kehidupan keluarga sebaik mungkin dapat membantu orang tua merasa lebih tenang dan terkendali, terlebih bila orang tua sendiri memiliki ADHD. AAP menyarankan kalender keluarga yang mencatat semua kegiatan terjadwal, daftar tugas harian, dan meluangkan 10 menit sampai setengah jam sebelum anak bangun untuk memikirkan semua yang harus diselesaikan hari itu dan menyusunnya berdasarkan prioritas. Langkah lain menjaga kesehatan mental orang tua ada di ' + a('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak ABK') + '.'),

  '<h2 id="sekolah">Bekerja sama dengan sekolah</h2>',
  p('Jadwal di rumah akan lebih kuat bila sejalan dengan sekolah. ' + ext(URL_CDC_CLASS, 'CDC') + ' menyebut AAP menganjurkan agar lingkungan, program, atau penempatan sekolah menjadi bagian dari rencana penanganan ADHD. Menurut CDC, dukungan di kelas dapat meliputi tugas yang jelas, umpan balik positif, waktu istirahat, dan lebih sedikit gangguan.'),
  p('CDC menjelaskan bahwa manajemen perilaku di kelas memakai sistem hadiah atau laporan harian untuk membangun perilaku positif dan mengurangi perilaku negatif. Laporan harian ini bisa dihubungkan dengan bagan di rumah, misalnya guru menandai dua atau tiga target di buku penghubung, lalu orang tua memberi pujian atau poin di rumah. CDC juga mencatat bahwa strategi untuk anak di program pendidikan usia dini biasanya paling efektif bila orang tua dan pendidik bekerja sama.'),
  p('Sampaikan kepada guru jadwal yang sudah berjalan di rumah, kegiatan apa yang paling menantang bagi anak, dan cara memberi instruksi yang paling berhasil. Di sekolah inklusi, guru pendamping khusus dapat membantu menyelaraskan rutinitas sekolah dengan rumah. Perannya dijelaskan di ' + a('gpk-adalah', 'GPK atau guru pendamping khusus') + '. Strategi umum mengajar anak berkebutuhan khusus di kelas juga dibahas di ' + a('strategi-mengajar-anak-autis-di-kelas', 'strategi mengajar di kelas') + '.'),
  p('Terakhir, evaluasi jadwal secara berkala. Setiap beberapa minggu, lihat bagian mana yang sudah berjalan lancar dan mana yang masih sulit. Seiring anak tumbuh, sesuai perumpamaan AAP tentang perancah, sebagian penopang bisa dikurangi. Anak yang dulu butuh daftar bergambar untuk bersiap ke sekolah, kelak mungkin bisa membuat daftarnya sendiri.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(jFaq),
];

articles.push({
  slug: 'jadwal-harian-anak-adhd',
  titleTag: 'Jadwal Harian Anak ADHD yang Efektif dan Contohnya | YUKA',
  metaDesc: 'Jadwal harian anak ADHD yang efektif: alasan anak ADHD butuh rutinitas, prinsip menyusun jadwal, contoh jadwal usia sekolah, rutinitas pagi, waktu belajar, tidur, pujian, dan kerja sama dengan sekolah.',
  keywords: 'jadwal harian anak adhd yang efektif, jadwal harian anak adhd, rutinitas anak adhd, contoh jadwal anak adhd, tips orang tua anak adhd',
  ogTitle: 'Jadwal Harian Anak ADHD yang Efektif',
  ogDesc: 'Panduan menyusun jadwal harian anak ADHD berdasarkan anjuran CDC, NHS, dan AAP, lengkap dengan contoh jadwal.',
  h1: 'Jadwal Harian Anak ADHD yang Efektif: Prinsip, Contoh, dan Tips Menjalankannya',
  crumb: 'Jadwal Harian Anak ADHD',
  category: 'Parenting',
  datePublished: '2026-12-04T08:00:00+07:00', dateModified: '2026-12-04T08:00:00+07:00',
  dateDisplay: '4 Desember 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/jadwal-adhd-hero.webp`, w: 1200, h: 675,
    alt: 'Beberapa anak laki-laki bermain sepak bola di lapangan rumput hijau yang dikelilingi pepohonan rindang pada sore hari',
    caption: 'Anak-anak bermain sepak bola di Lapang Lanud Sulaiman, Bandung, Jawa Barat. CDC menganjurkan anak usia 6 sampai 17 tahun aktif bergerak setidaknya 60 menit setiap hari, dan waktu bermain di luar layak masuk jadwal harian anak ADHD.',
    credit: CM(J_HERO, 'Priskamarsila29', 'CC BY-SA 4.0'),
  },
  bodyHtml: jBody.join('\n'), faq: jFaq,
  related: [
    { href: '/artikel/adhd-adalah', title: 'ADHD Adalah', desc: 'Pengertian, gejala, dan penanganan ADHD.' },
    { href: '/artikel/gangguan-tidur-anak-adhd-solusi', title: 'Gangguan Tidur Anak ADHD', desc: 'Penyebab dan cara membantu anak tidur.' },
    { href: '/artikel/token-economy-untuk-anak-abk', title: 'Token Economy', desc: 'Sistem poin untuk membangun perilaku positif.' },
  ],
  tags: ['ADHD', 'JadwalHarian', 'Parenting'],
  sources: [
    { url: URL_CDC_BT, label: 'CDC: Behavior Therapy for ADHD (pelatihan orang tua, contoh tips rutinitas, komunikasi, disiplin positif)' },
    { url: URL_AAP_STRUCT, label: 'American Academy of Pediatrics (HealthyChildren.org): Simplifying, Organizing, and Structuring the Home Environment' },
    { url: URL_NHS_ADHD_CH, label: 'NHS: ADHD in children and young people (gejala, gaya hidup, dukungan di sekolah dan rumah)' },
    { url: URL_CDC_CLASS, label: 'CDC: ADHD in the Classroom' },
    { url: URL_CDC_SLEEP, label: 'CDC: About Sleep (anjuran jam tidur per usia)' },
    { url: URL_CDC_PA, label: 'CDC: Physical Activity Guidelines for Children and Adolescents' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Contoh jadwal di artikel ini adalah ilustrasi, bukan anjuran medis. Rencana penanganan ADHD sebaiknya disusun bersama dokter anak.',
});


// ---------------------------------------------------------------------------
// Artikel 5: gagap pada anak (5 Des 2026)
// Keyword: "gagap pada anak penyebab dan terapi" (tab Riset Keyword Batch 5, baris 48)
// ---------------------------------------------------------------------------
const URL_NIDCD_ST = 'https://www.nidcd.nih.gov/health/stuttering';
const URL_NHS_ST = 'https://www.nhs.uk/conditions/stammering/';
const URL_MP_ST = 'https://medlineplus.gov/ency/article/001427.htm';
const G_HERO = 'https://commons.wikimedia.org/wiki/File:School_choir_2016.jpg';
const G_FOTO1 = 'https://commons.wikimedia.org/wiki/File:Kids_singing_in_school_festival.jpg';
const G_FOTO2 = 'https://commons.wikimedia.org/wiki/File:Rota_Elementary_School_Year_Starts_(5705625).jpg';

const gSections = [
  ['pengertian', 'Apa itu gagap pada anak'],
  ['tanda', 'Ciri-ciri anak gagap'],
  ['penyebab', 'Penyebab gagap pada anak'],
  ['sembuh', 'Apakah gagap bisa hilang sendiri?'],
  ['kapan', 'Kapan perlu dibawa ke terapis wicara'],
  ['terapi', 'Terapi gagap pada anak'],
  ['rumah', 'Cara orang tua membantu di rumah'],
  ['sekolah', 'Peran guru di sekolah'],
  ['faq', 'Pertanyaan yang sering diajukan'],
];

const gFaq = [
  { q: 'Apa itu gagap pada anak?', a: 'Gagap (stuttering atau stammering) adalah gangguan bicara yang ditandai pengulangan bunyi, suku kata, atau kata, pemanjangan bunyi, dan hambatan saat berbicara yang disebut blok. Menurut NIDCD, orang yang gagap tahu persis apa yang ingin dikatakannya, tetapi kesulitan menghasilkan aliran bicara yang lancar.' },
  { q: 'Pada usia berapa anak biasanya mulai gagap?', a: 'NIDCD menyebut gagap paling sering terjadi pada anak usia 2 sampai 6 tahun, saat mereka sedang mengembangkan kemampuan bahasa. MedlinePlus menyebut gagap biasanya dialami anak usia 2 sampai 5 tahun dan lebih sering pada anak laki-laki.' },
  { q: 'Apakah gagap disebabkan oleh kesalahan orang tua?', a: 'Tidak. NHS menegaskan bahwa tidak mungkin memastikan mengapa seorang anak mulai gagap, tetapi gagap tidak disebabkan oleh apa pun yang dilakukan orang tua. Faktor perkembangan, faktor keturunan, dan perbedaan kecil dalam cara kerja area bicara di otak diduga berperan.' },
  { q: 'Apakah gagap pada anak bisa sembuh sendiri?', a: 'Banyak yang bisa. NIDCD menyebut sekitar 75 persen anak pulih dari gagap. NHS memperkirakan sekitar 2 dari 3 anak yang gagap akan berbicara lancar, walaupun sulit memperkirakan kapan hal itu terjadi pada anak tertentu. Namun pada sebagian anak gagap menetap, sehingga pemeriksaan tetap dianjurkan bila ada tanda tertentu.' },
  { q: 'Kapan anak gagap perlu dibawa ke terapis wicara?', a: 'NIDCD menyebut tenaga kesehatan umumnya menganjurkan evaluasi bila anak sudah gagap selama 3 sampai 6 bulan, menunjukkan perilaku bergulat saat berbicara, atau memiliki riwayat keluarga gagap atau gangguan komunikasi terkait. NHS menyarankan meminta nasihat sesegera mungkin karena penanganan gagap sering berhasil pada anak usia prasekolah.' },
  { q: 'Apa terapi untuk anak gagap?', a: 'Terapi dilakukan oleh terapis wicara dan disesuaikan dengan usia dan kebutuhan anak. Menurut NHS, terapi bisa meliputi menciptakan lingkungan yang membuat anak lebih santai dan percaya diri saat berbicara, strategi untuk meningkatkan kelancaran dan kemampuan komunikasi, serta mengatasi perasaan seperti takut dan cemas. Untuk anak kecil, terapi sering melibatkan pelatihan orang tua.' },
  { q: 'Apakah ada obat untuk gagap?', a: 'NIDCD menyebut Badan Pengawas Obat dan Makanan Amerika Serikat (FDA) belum menyetujui obat apa pun untuk mengobati gagap. MedlinePlus juga menyebut obat belum terbukti membantu gagap. Penanganan utamanya adalah terapi wicara.' },
  { q: 'Bagaimana cara berbicara dengan anak yang gagap?', a: 'Dengarkan dengan penuh perhatian, fokus pada isi pesan, dan tunggu anak menyelesaikan kata yang ingin diucapkannya. Jangan menyelesaikan kalimatnya atau memotong. NIDCD menyarankan orang tua berbicara sedikit lebih lambat dan santai, menyediakan waktu khusus untuk mengobrol, serta membicarakan gagap secara terbuka bila anak mengangkatnya.' },
];

addDiagram(`${IMG}/gagap-jenis.webp`, svg.cards('Bentuk-bentuk gagap', 'Contoh dari NHS dan MedlinePlus', [
  { h: 'Pengulangan', items: ['Mengulang bunyi atau suku kata', 'Contoh: ma-ma-mau', 'Mengulang kata atau frasa'] },
  { h: 'Pemanjangan', items: ['Bunyi dibuat lebih panjang', 'Contoh: mmmmmau', 'Terdengar tertahan'] },
  { h: 'Blok', items: ['Kata tersangkut', 'Tidak ada suara yang keluar', 'Sering dengan wajah tegang'] },
  { h: 'Perilaku penyerta', items: ['Mata berkedip cepat', 'Bibir gemetar', 'Kepala atau rahang tersentak'] },
]));
addDiagram(`${IMG}/gagap-kapan.webp`, svg.grid('Kapan anak gagap perlu dievaluasi', 'Rangkuman anjuran NIDCD, MedlinePlus, dan NHS', ['Tanda', 'Keterangan', 'Sumber'], [
  ['Gagap 3 sampai 6 bulan atau lebih', 'Tidak membaik setelah beberapa bulan', 'NIDCD, MedlinePlus'],
  ['Perilaku bergulat', 'Tampak berusaha keras, tegang, malu saat gagap', 'NIDCD, MedlinePlus'],
  ['Riwayat keluarga', 'Ada anggota keluarga yang gagap', 'NIDCD, MedlinePlus'],
  ['Blok berlangsung beberapa detik', 'Kata tersangkut cukup lama', 'MedlinePlus'],
  ['Masih gagap setelah usia 6 tahun', 'Lebih mungkin menetap sampai dewasa', 'MedlinePlus'],
], [380, 460, 268]));

const gBody = [
  p('<strong>Gagap pada anak</strong> adalah gangguan bicara yang membuat anak mengulang bunyi atau suku kata, memanjangkan bunyi, atau tersangkut saat ingin mengucapkan kata. Menurut NIDCD, gagap paling sering muncul pada usia 2 sampai 6 tahun, dan sekitar 75 persen anak pulih. Penyebab pastinya belum diketahui, tetapi faktor keturunan dan perkembangan otak berperan, dan NHS menegaskan gagap bukan disebabkan oleh kesalahan orang tua. Terapi wicara sejak dini sering berhasil, terutama pada anak usia prasekolah.'),
  p('Mendengar anak berkata "a-a-a-aku mau minum" atau melihatnya tersangkut lama di awal kalimat bisa membuat orang tua cemas. Sebagian orang tua refleks menyuruh anak "pelan-pelan" atau menyelesaikan kalimatnya. Artikel ini membahas pengertian gagap, ciri-cirinya, penyebab, peluang hilang sendiri, kapan perlu ke terapis wicara, pilihan terapi, serta cara orang tua dan guru membantu. Gambaran umum perkembangan bicara dan keterlambatannya bisa dibaca di ' + a('speech-delay-adalah', 'pengertian speech delay') + '.'),
  toc(gSections),

  '<h2 id="pengertian">Apa itu gagap pada anak</h2>',
  p(ext(URL_NIDCD_ST, 'NIDCD (Institut Nasional Ketulian dan Gangguan Komunikasi Lainnya, Amerika Serikat)') + ' mendefinisikan gagap sebagai gangguan bicara yang ditandai pengulangan bunyi, suku kata, atau kata, pemanjangan bunyi, dan hambatan dalam bicara yang disebut blok. Orang yang gagap tahu persis apa yang ingin ia katakan, tetapi kesulitan menghasilkan aliran bicara yang normal. Hambatan bicara ini bisa disertai perilaku bergulat, seperti mata berkedip cepat atau bibir gemetar.'),
  p('Dalam bahasa Inggris, gagap disebut stuttering atau stammering. NIDCD menyebut gagap juga termasuk dalam istilah yang lebih luas, yaitu bicara tidak lancar atau disfluent speech. ' + ext(URL_NHS_ST, 'NHS (layanan kesehatan nasional Inggris)') + ' menyebut gagap relatif sering terjadi pada masa kanak-kanak dan dapat menetap sampai dewasa.'),
  p('Gagap berbeda dengan gangguan bahasa. Anak yang gagap umumnya tahu kata apa yang ingin ia pakai dan bisa menyusun kalimat dengan benar, tetapi aliran bicaranya terputus-putus. Sebaliknya, anak dengan gangguan bahasa kesulitan memahami atau menyusun bahasa itu sendiri. Penjelasan tentang gangguan bahasa ada di artikel ' + a('gangguan-bahasa-reseptif-dan-ekspresif', 'gangguan bahasa reseptif dan ekspresif') + '.'),
  p('NIDCD membagi gagap menjadi dua jenis utama. Gagap perkembangan (developmental stuttering) terjadi pada anak kecil yang masih belajar keterampilan bicara dan bahasa, dan merupakan jenis yang paling sering. Gagap neurogenik terjadi setelah stroke, cedera kepala, atau cedera otak lain. NHS juga menyebut gagap yang muncul di usia lebih besar atau dewasa relatif jarang dan dapat dipicu cedera kepala, stroke, kondisi saraf yang progresif, obat tertentu, atau trauma psikologis. Artikel ini berfokus pada gagap perkembangan. Gagap juga berbeda dengan apraksia bicara, yaitu kesulitan merencanakan gerakan bicara, yang dibahas di ' + a('apraksia-bicara-pada-anak', 'apraksia bicara pada anak') + '.'),

  '<h2 id="tanda">Ciri-ciri anak gagap</h2>',
  p('NHS menjelaskan tiga bentuk utama gagap: mengulang bunyi atau suku kata, misalnya "ma-ma-ma-mama"; memanjangkan bunyi, misalnya "mmmmmama"; dan kata yang tersangkut atau tidak keluar sama sekali. Tingkat keparahan gagap berbeda pada setiap orang dan setiap situasi. Seseorang bisa mengalami masa-masa gagap lalu diikuti masa ketika bicaranya relatif lancar.'),
  diag(`${IMG}/gagap-jenis.webp`, 'Diagram empat kartu bentuk gagap: pengulangan, pemanjangan, blok, dan perilaku penyerta seperti mata berkedip atau bibir gemetar', 'Bentuk-bentuk gagap yang dijelaskan NHS dan MedlinePlus. Anak bisa menunjukkan satu atau beberapa bentuk sekaligus.'),
  p(ext(URL_MP_ST, 'MedlinePlus') + ' merinci gejala gagap: merasa frustrasi saat berusaha berkomunikasi, berhenti atau ragu saat memulai atau di tengah kalimat, sering dengan bibir terkatup, menyisipkan bunyi atau kata tambahan seperti "kami pergi ke... eh... toko", mengulang bunyi, kata, bagian kata, atau frasa, suara yang tegang, serta bunyi yang sangat panjang di dalam kata. Gejala lain yang bisa menyertai adalah mata berkedip, kepala atau bagian tubuh lain tersentak, rahang tersentak, dan tangan mengepal.'),
  p('MedlinePlus menjelaskan bahwa gagap bisa dimulai dengan pengulangan konsonan seperti k, g, atau t. Bila gagap memburuk, kata dan frasa ikut diulang, lalu bisa muncul kejang pada suara sehingga bicara terdengar dipaksa dan meledak. Situasi sosial yang menegangkan dan kecemasan dapat memperburuk gejala. Anak dengan gagap ringan sering tidak menyadari bahwa ia gagap, sedangkan pada kasus berat anak lebih menyadarinya, dan gerakan wajah, kecemasan, serta gagap yang bertambah bisa muncul saat ia diminta berbicara.'),
  p('NIDCD mencatat bahwa gejala gagap bisa sangat bervariasi sepanjang hari. Berbicara di depan kelompok atau di telepon bisa membuat gagap lebih berat, sedangkan bernyanyi, membaca, atau berbicara serempak dengan orang lain dapat mengurangi gagap untuk sementara. MedlinePlus juga menyebut sebagian orang yang gagap tidak gagap saat membaca nyaring atau bernyanyi. Karena itu orang tua tidak perlu heran bila anak lancar saat bernyanyi tetapi tersendat saat bercerita.'),
  p('Perlu dibedakan pula antara gagap dan ketidaklancaran yang wajar. Banyak anak usia 2 sampai 5 tahun sesekali mengulang kata atau menyisipkan "eh" saat sedang menyusun kalimat yang panjang, terutama ketika bersemangat. Hal ini sering kali bagian dari proses belajar bahasa. Yang patut diperhatikan adalah bila pengulangan terjadi pada bunyi atau suku kata, berlangsung berbulan-bulan, atau disertai tanda bergulat dan rasa frustrasi. Gambaran tahapan bicara yang wajar sejak bayi dapat dilihat di ' + a('babbling-dan-cooing-tahap-perkembangan-bahasa', 'tahap perkembangan bahasa anak') + '.'),
  fig(`${IMG}/gagap-foto1.webp`, 1200, 675, 'Sekelompok anak berdiri berjajar di panggung gelap di depan mikrofon, sebagian memegang map berisi teks lagu', 'Anak-anak bernyanyi dalam festival sekolah di Athena, Yunani. Banyak anak yang gagap bisa bernyanyi dengan lancar, karena bernyanyi dapat mengurangi gagap untuk sementara.', CM(G_FOTO1, 'Konalouisa', 'CC BY-SA 4.0')),

  '<h2 id="penyebab">Penyebab gagap pada anak</h2>',
  p('NIDCD menyatakan mekanisme pasti penyebab gagap belum dipahami. NHS menyebut tidak mungkin memastikan mengapa seorang anak mulai gagap, tetapi gagap tidak disebabkan oleh apa pun yang dilakukan orang tua. Pernyataan ini penting untuk melepaskan rasa bersalah yang sering dirasakan orang tua.'),
  p('Menurut NHS, faktor perkembangan dan faktor keturunan mungkin berperan, bersama perbedaan kecil dalam efisiensi kerja area bicara di otak. NHS menjelaskan bahwa perkembangan bicara adalah proses rumit yang melibatkan komunikasi antara berbagai area otak, serta antara otak dan otot pernapasan dan bicara. Anak yang sedang belajar menyusun kalimat sederhana membutuhkan latihan untuk membangun "jaringan kabel" di otak agar bagian-bagian itu bekerja sama dengan baik. Gagap bisa terjadi bila sebagian sistem yang sedang berkembang ini belum terkoordinasi, sehingga muncul pengulangan dan hambatan, terutama saat anak punya banyak hal untuk dikatakan, sedang bersemangat, atau merasa tertekan.'),
  p('NIDCD menambahkan bahwa sebagian ilmuwan dan klinisi meyakini gagap perkembangan terjadi ketika kemampuan bicara dan bahasa anak belum mampu memenuhi tuntutan verbal yang dihadapinya. Kebanyakan ilmuwan dan klinisi meyakini gagap perkembangan berasal dari interaksi kompleks berbagai faktor. Studi pencitraan otak terbaru menunjukkan perbedaan yang konsisten pada orang yang gagap dibanding yang tidak.'),
  p('Faktor keturunan cukup kuat. NHS menyebut sekitar 2 dari 3 orang yang gagap memiliki riwayat keluarga gagap. NIDCD menyebut gagap perkembangan dapat menurun dalam keluarga, dan sejak 2010 peneliti NIDCD telah mengidentifikasi empat gen yang mutasinya berkaitan dengan gagap. MedlinePlus juga menyebut gagap cenderung menurun dalam keluarga.'),
  table('Fakta tentang gagap pada anak menurut sumber resmi', ['Aspek', 'Fakta', 'Sumber'], [
    ['Usia paling sering', '2 sampai 6 tahun, saat kemampuan bahasa berkembang', 'NIDCD'],
    ['Seberapa sering', 'Sekitar 5 sampai 10 persen anak pernah gagap untuk beberapa waktu', 'NIDCD'],
    ['Anak laki-laki dan perempuan', 'Anak laki-laki 2 sampai 3 kali lebih mungkin gagap', 'NIDCD'],
    ['Riwayat keluarga', 'Sekitar 2 dari 3 orang yang gagap punya riwayat keluarga', 'NHS'],
    ['Peluang pulih', 'Sekitar 75 persen anak pulih dari gagap', 'NIDCD'],
    ['Obat', 'Belum ada obat yang disetujui FDA untuk gagap', 'NIDCD'],
  ]),
  p('Bagaimana dengan anggapan bahwa gagap disebabkan kaget, trauma, atau kebiasaan meniru? NIDCD menjelaskan bahwa dahulu semua gagap dianggap psikogenik atau disebabkan trauma emosional, tetapi kini diketahui gagap psikogenik jarang terjadi. MedlinePlus juga menyebut gagap akibat trauma emosional hanya terjadi pada kasus yang jarang. Jadi gagap pada anak kecil umumnya bukan akibat pola asuh atau kejadian menakutkan.'),

  '<h2 id="sembuh">Apakah gagap bisa hilang sendiri?</h2>',
  p('Kabar baiknya, banyak anak berhenti gagap. NIDCD menyebut sekitar 5 sampai 10 persen anak pernah gagap untuk beberapa waktu dalam hidupnya, berlangsung dari beberapa minggu sampai beberapa tahun. Kebanyakan anak tumbuh melewatinya, dan sekitar 75 persen anak pulih dari gagap. Pada 25 persen sisanya, gagap dapat menetap sebagai gangguan komunikasi seumur hidup.'),
  p('NHS memberi angka yang sedikit berbeda karena berasal dari studi yang berbeda: sekitar 1 dari 12 anak kecil mengalami fase gagap, dan sekitar 2 dari 3 anak yang gagap akan berbicara lancar, walaupun sulit memperkirakan kapan hal itu terjadi pada anak tertentu. NHS menjelaskan bahwa seiring otak terus berkembang, gagap bisa hilang atau otak dapat mengompensasinya, sehingga banyak anak berhenti gagap seiring bertambahnya usia. MedlinePlus menyebut pada sebagian besar anak yang gagap, fase ini berlalu dan bicaranya kembali normal dalam 3 atau 4 tahun.'),
  p('Namun "bisa hilang sendiri" tidak berarti orang tua cukup menunggu. MedlinePlus menyebut gagap lebih mungkin berlanjut sampai dewasa bila berlangsung lebih dari 1 tahun atau bila anak masih gagap setelah usia 6 tahun. NIDCD juga mencatat bahwa anak laki-laki 2 sampai 3 kali lebih mungkin gagap dibanding anak perempuan, dan seiring bertambahnya usia perbedaan ini membesar, karena anak laki-laki yang terus gagap tiga sampai empat kali lebih banyak dari anak perempuan.'),
  p('Karena tidak ada yang bisa memastikan anak mana yang akan pulih sendiri, pemeriksaan oleh terapis wicara membantu orang tua mendapat gambaran yang lebih jelas. NIDCD menyebut saat mengevaluasi anak kecil, terapis wicara akan berusaha menentukan apakah gagap anak cenderung menetap atau akan hilang, dengan mempertimbangkan riwayat gagap dalam keluarga, apakah gagap sudah berlangsung 6 bulan atau lebih, dan apakah anak memiliki masalah bicara atau bahasa lain.'),

  '<h2 id="kapan">Kapan perlu dibawa ke terapis wicara</h2>',
  p('NHS menganjurkan orang tua meminta nasihat bila ada kekhawatiran tentang perkembangan bicara atau bahasa anak. NHS menekankan bahwa penanganan gagap sering berhasil pada anak usia prasekolah, sehingga penting untuk meminta nasihat sesegera mungkin. Di Indonesia, langkah awalnya adalah berkonsultasi dengan dokter anak atau puskesmas, yang dapat merujuk anak ke terapis wicara.'),
  diag(`${IMG}/gagap-kapan.webp`, 'Tabel visual lima tanda anak gagap perlu dievaluasi: gagap 3 sampai 6 bulan, perilaku bergulat, riwayat keluarga, blok beberapa detik, dan masih gagap setelah usia 6 tahun', 'Tanda-tanda bahwa anak gagap sebaiknya diperiksa terapis wicara. Bila ragu, periksakan lebih awal.'),
  p('Menurut NIDCD, tenaga kesehatan umumnya menganjurkan evaluasi bila anak sudah gagap selama 3 sampai 6 bulan, menunjukkan perilaku bergulat yang berkaitan dengan gagap, atau memiliki riwayat keluarga gagap atau gangguan komunikasi terkait. Sebagian peneliti menganjurkan anak dievaluasi setiap 3 bulan untuk melihat apakah gagapnya bertambah atau berkurang.'),
  p('MedlinePlus menyebut terapi wicara dapat membantu bila gagap sudah berlangsung lebih dari 3 sampai 6 bulan atau blok bicara berlangsung beberapa detik, anak tampak bergulat atau malu saat gagap, atau ada riwayat gagap dalam keluarga. Selain itu, segera periksakan bila gagap tampak membuat anak menghindari berbicara, menolak bermain dengan teman, atau sering menangis karena frustrasi.'),
  p('Menurut NIDCD, gagap biasanya didiagnosis oleh terapis wicara atau ahli patologi wicara-bahasa. Terapis akan mempertimbangkan riwayat anak, misalnya kapan gagap pertama kali disadari dan dalam situasi apa, menganalisis perilaku gagap anak, serta mengevaluasi kemampuan bicara dan bahasa anak dan dampak gagap pada kehidupannya. MedlinePlus menyebut biasanya tidak diperlukan tes khusus, tetapi dokter akan memeriksa kelancaran bicara, tekanan emosional, kondisi lain yang mendasari, dan dampak gagap pada kehidupan sehari-hari. Informasi tentang layanan terapi wicara ada di ' + a('terapi-wicara', 'terapi wicara') + '.'),

  '<h2 id="terapi">Terapi gagap pada anak</h2>',
  p('NIDCD menyebut saat ini belum ada obat penyembuh gagap, tetapi tersedia berbagai penanganan. Jenis penanganannya berbeda tergantung usia, tujuan komunikasi, dan faktor lain. Untuk anak yang sangat kecil, penanganan dini dapat mencegah gagap perkembangan menjadi masalah seumur hidup. Prinsip mengapa dukungan sejak dini penting dibahas di artikel ' + a('intervensi-dini', 'intervensi dini') + '. Strategi tertentu dapat membantu anak meningkatkan kelancaran bicaranya sambil membangun sikap positif terhadap komunikasi.'),
  p('Menurut NHS, ada berbagai pendekatan terapi wicara yang dapat membantu orang yang gagap berbicara dengan lebih mudah, dan rencananya disusun bersama terapis sesuai kebutuhan anak. Terapi ini dapat meliputi menciptakan lingkungan yang membuat anak lebih santai dan percaya diri saat berbicara, strategi untuk meningkatkan kelancaran dan mengembangkan kemampuan komunikasi, serta mengatasi perasaan yang berkaitan dengan gagap, seperti rasa takut dan cemas.'),
  p('Pada anak kecil, terapi sering berfokus pada orang tua. NIDCD menyebut penanganan sering melibatkan pengajaran kepada orang tua tentang cara mendukung anak menghasilkan bicara yang lancar. Pada remaja dan dewasa, NIDCD menyebut banyak terapi berfokus membantu mereka mempelajari cara mengurangi gagap saat berbicara, seperti berbicara lebih lambat, mengatur napas, atau bertahap dari jawaban satu suku kata ke kata yang lebih panjang dan kalimat yang lebih kompleks. Sebagian besar terapi ini juga membantu mengatasi kecemasan dalam situasi berbicara tertentu.'),
  p('Bagaimana dengan obat dan alat? NIDCD menyebut FDA belum menyetujui obat apa pun untuk gagap. Beberapa obat untuk masalah kesehatan lain pernah dipakai, tetapi sering memiliki efek samping yang menyulitkan pemakaian jangka panjang. MedlinePlus juga menyebut obat belum terbukti membantu gagap, dan belum jelas apakah alat elektronik membantu. NHS menyebut alat elektronik dapat membantu sebagian anak yang lebih besar dan orang dewasa. Karena itu, waspadai tawaran "obat gagap" atau terapi instan yang menjanjikan kesembuhan cepat.'),
  p('NIDCD dan MedlinePlus sama-sama menyebut kelompok dukungan sering bermanfaat, baik bagi anak maupun keluarganya. Banyak orang yang gagap merasa paling berhasil melalui kombinasi belajar mandiri dan terapi.'),

  '<h2 id="rumah">Cara orang tua membantu di rumah</h2>',
  p('Orang tua memegang peran besar, terutama pada anak usia prasekolah. NIDCD menganjurkan orang tua untuk:'),
  ul([
    'Menciptakan suasana rumah yang santai dengan banyak kesempatan bagi anak untuk berbicara, termasuk menyediakan waktu khusus untuk mengobrol, terutama saat anak sedang bersemangat dan punya banyak hal untuk diceritakan.',
    'Mendengarkan dengan penuh perhatian saat anak berbicara, berfokus pada isi pesannya, bukan menanggapi cara ia mengucapkannya atau memotong pembicaraannya.',
    'Berbicara dengan tempo sedikit lebih lambat dan santai, untuk mengurangi tekanan waktu yang mungkin dirasakan anak.',
    'Menunggu anak mengucapkan kata yang ingin ia katakan, tanpa mencoba menyelesaikan kalimatnya, dan membantu anak belajar bahwa seseorang tetap bisa berkomunikasi dengan baik walaupun gagap.',
    'Membicarakan gagap secara terbuka dan jujur bila anak mengangkat topik itu, dan memberi tahu anak bahwa tidak apa-apa bila bicaranya sesekali tersendat.',
  ]),
  p('MedlinePlus menambahkan beberapa anjuran: hindari menunjukkan kekhawatiran berlebihan tentang gagap, karena justru bisa memperburuk keadaan dengan membuat anak makin sadar diri. Dengarkan anak dengan sabar, tatap matanya, jangan memotong, dan tunjukkan kasih sayang serta penerimaan. Hindari situasi sosial yang menegangkan bila memungkinkan, dan bicarakan dengan terapis kapan saat yang tepat untuk mengoreksi gagap dengan lembut.'),
  p('Dalam keseharian, hindari kalimat seperti "ayo, pelan-pelan", "tarik napas dulu", atau "ulangi yang benar". Meski maksudnya baik, kalimat itu bisa membuat anak merasa cara bicaranya salah. Lebih baik tunjukkan dengan contoh: berbicara sendiri dengan tempo tenang, memberi jeda sebelum menjawab pertanyaan anak, dan memastikan setiap anggota keluarga mendapat giliran bicara tanpa saling menyela. Kebiasaan ini membuat suasana percakapan di rumah lebih santai untuk semua orang.'),
  p('Lindungi juga rasa percaya diri anak. Jangan biarkan saudara atau kerabat menirukan atau menertawakan gagapnya. Jelaskan kepada anggota keluarga cara berbicara dengan anak yang gagap. Rayakan keberanian anak untuk berbicara, bukan kelancarannya. Perasaan orang tua juga penting. Bila kecemasan Anda tentang gagap anak terasa berat, artikel ' + a('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak ABK') + ' berisi langkah praktis yang bisa membantu.'),

  '<h2 id="sekolah">Peran guru di sekolah</h2>',
  p('Sekolah bisa menjadi tempat yang menantang bagi anak yang gagap. NIDCD menyebut berbicara di depan kelompok bisa membuat gagap lebih berat, sementara gagap dapat menyulitkan komunikasi dan memengaruhi hubungan dengan orang lain. Guru dapat membuat perbedaan besar dengan beberapa langkah sederhana:'),
  ul([
    '<strong>Beri waktu.</strong> Tunggu anak menyelesaikan jawabannya tanpa menyela, dan minta teman sekelas melakukan hal yang sama.',
    '<strong>Fokus pada isi.</strong> Tanggapi apa yang anak katakan, bukan cara ia mengatakannya.',
    '<strong>Atur giliran bicara.</strong> Sebagian anak lebih nyaman bila tahu lebih awal kapan gilirannya membaca atau menjawab.',
    '<strong>Manfaatkan membaca bersama.</strong> NIDCD menyebut berbicara serempak dan membaca dapat mengurangi gagap untuk sementara, sehingga membaca bersama satu kelas bisa memberi pengalaman lancar.',
    '<strong>Cegah ejekan.</strong> Tegas terhadap perundungan dan bicarakan bahwa setiap orang punya cara berbicara yang berbeda.',
    '<strong>Bicarakan dengan anak dan orang tua.</strong> Tanyakan apa yang membantu anak dan apa yang membuatnya tidak nyaman.',
  ]),
  p('Perundungan adalah risiko nyata bagi anak yang gagap. Langkah pencegahannya dibahas di artikel ' + a('anak-abk-dan-bullying-cara-mencegah', 'anak ABK dan bullying') + '. Di sekolah inklusi, guru pendamping khusus dapat membantu menyampaikan strategi dari terapis wicara kepada guru kelas. Perannya dijelaskan di ' + a('gpk-adalah', 'GPK atau guru pendamping khusus') + '.'),
  fig(`${IMG}/gagap-foto2.webp`, 1200, 857, 'Puluhan siswa sekolah dasar berbaris di halaman sekolah di belakang papan nama kelas, ditemani guru dan orang tua di hari pertama sekolah', 'Hari pertama tahun ajaran di Rota Elementary School, Spanyol. Awal tahun ajaran adalah saat yang tepat bagi orang tua untuk memberi tahu guru tentang gagap anak dan cara mendukungnya di kelas.', CM(G_FOTO2, 'Petty Officer 3rd Class Eduardo T. Otero, U.S. Navy', 'PD')),
  p('Dengan dukungan yang tepat di rumah dan di sekolah, anak yang gagap tetap bisa menjadi pembicara yang percaya diri. Gagap hanyalah salah satu bagian dari cara anak berbicara, bukan ukuran kecerdasan atau kemampuannya.'),

  '<h2 id="faq">Pertanyaan yang sering diajukan</h2>',
  faqBlock(gFaq),
];

articles.push({
  slug: 'gagap-pada-anak',
  titleTag: 'Gagap pada Anak: Penyebab, Ciri, dan Terapinya | YUKA',
  metaDesc: 'Gagap pada anak: pengertian, ciri-ciri, penyebab, peluang hilang sendiri, kapan ke terapis wicara, pilihan terapi, serta cara orang tua dan guru membantu, berdasarkan NIDCD, NHS, dan MedlinePlus.',
  keywords: 'gagap pada anak penyebab dan terapi, gagap pada anak, anak gagap, stuttering anak, terapi gagap anak',
  ogTitle: 'Gagap pada Anak: Penyebab dan Terapi',
  ogDesc: 'Panduan untuk orang tua dan guru: ciri anak gagap, penyebab, kapan perlu terapi, dan cara membantu di rumah dan sekolah.',
  h1: 'Gagap pada Anak: Penyebab, Ciri-Ciri, dan Terapinya',
  crumb: 'Gagap pada Anak',
  category: 'Kesehatan',
  datePublished: '2026-12-05T08:00:00+07:00', dateModified: '2026-12-05T08:00:00+07:00',
  dateDisplay: '5 Desember 2026', readTime: '14 menit baca',
  authorName: 'Tim YUKA',
  image: {
    file: `${IMG}/gagap-hero.webp`, w: 1200, h: 800,
    alt: 'Paduan suara siswa berseragam kemeja putih dan dasi hitam berdiri berjajar memegang lilin di bawah tenda, seorang pelatih berdiri di depan mereka',
    caption: 'Paduan suara siswa sekolah tampil dalam sebuah acara. NIDCD menyebut bernyanyi, membaca, atau berbicara serempak dapat mengurangi gagap untuk sementara.',
    credit: CM(G_HERO, 'Nancynk', 'CC BY-SA 4.0'),
  },
  bodyHtml: gBody.join('\n'), faq: gFaq,
  related: [
    { href: '/artikel/terapi-wicara', title: 'Terapi Wicara', desc: 'Apa yang dilakukan dalam sesi terapi wicara.' },
    { href: '/artikel/speech-delay-adalah', title: 'Speech Delay', desc: 'Pengertian dan tanda keterlambatan bicara.' },
    { href: '/artikel/anak-abk-dan-bullying-cara-mencegah', title: 'Anak ABK dan Bullying', desc: 'Cara mencegah perundungan di sekolah.' },
  ],
  tags: ['Gagap', 'TerapiWicara', 'PerkembanganBicara'],
  sources: [
    { url: URL_NIDCD_ST, label: 'NIDCD: Stuttering (pengertian, prevalensi, penyebab, diagnosis, terapi, tips orang tua)' },
    { url: URL_NHS_ST, label: 'NHS: Stammering (bentuk, penyebab, kapan mencari bantuan, terapi, angka pemulihan)' },
    { url: URL_MP_ST, label: 'MedlinePlus: Stuttering (gejala, kapan terapi, anjuran untuk orang tua, prognosis)' },
  ],
  sourcesCheckedNote: 'Sumber diperiksa 17 November 2026. Artikel ini informasi umum untuk orang tua dan guru, bukan pengganti pemeriksaan dokter atau terapis wicara.',
});


// [ARTIKEL_BERIKUTNYA]

function prepare() {
  fs.mkdirSync(path.join(ROOT, IMG), { recursive: true });
  for (const [file, markup] of Object.entries(diagrams)) fs.writeFileSync(imgPath(file.replace(/\.webp$/, '.svg')), markup);
  console.log(`Wrote ${Object.keys(diagrams).length} SVG diagrams into ${IMG}/`);
}
async function raster(only) {
  const sharp = require('D:/Projects/Creativism App/node_modules/sharp');
  for (const file of Object.keys(diagrams)) {
    if (only && !file.includes(only)) continue;
    const buf = await sharp(fs.readFileSync(imgPath(file.replace(/\.webp$/, '.svg'))), { density: 150 }).resize(1200, 760, { fit: 'fill' }).webp({ quality: 90 }).toBuffer();
    fs.writeFileSync(imgPath(file), buf);
    console.log(`Rasterized ${file} (${buf.length} bytes)`);
  }
}
function render(only) {
  for (const art of articles) {
    if (only && art.slug !== only) continue;
    fs.writeFileSync(path.join(articleDir, `${art.slug}.html`), renderArticlePage(art));
    console.log(`Rendered artikel/${art.slug}.html`);
  }
}

if (require.main === module) {
  if (process.argv.includes('--prepare')) prepare();
  else if (process.argv.includes('--raster')) raster(process.argv[3]);
  else render(process.argv[2]);
}

module.exports = { articles, diagrams };

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

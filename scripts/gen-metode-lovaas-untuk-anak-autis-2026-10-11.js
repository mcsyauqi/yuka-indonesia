#!/usr/bin/env node
/*
 * Artikel baru: metode-lovaas-untuk-anak-autis (Trello cBn5rRm0, 2026-10-11).
 *
 * Pembeda dari artikel/terapi-aba (gambaran umum terapi ABA dan penerapannya):
 * artikel ini membedah METODE LOVAAS secara historis dan kritis, yaitu studi Lovaas 1987
 * beserta klaim dan kritik metodologinya, tindak lanjut 1993, uji acak 2000, perbedaannya
 * dengan ABA modern, EIBI, dan NDBI, bukti tinjauan sistematis (Cochrane 2018, Eldevik 2009,
 * Project AIM 2023, Sandbank 2024), serta kritik etis dari komunitas autistik.
 * terapi-aba diberi satu kalimat tautan ke sini di paragraf yang mengutip angka 47 persen.
 *
 * Semua angka dibaca dari teks mentah abstrak PubMed atau teks penuh PMC pada 11 Oktober 2026.
 * Teks penuh Lovaas 1987 tidak tersedia terbuka; angka 47 persen dan 42 persen diambil dari
 * abstrak Gresham dan MacMillan 1998, angka 19 anak dan usia 11,5 tahun dari abstrak
 * McEachin dkk. 1993, rata-rata 40 jam dan riwayat hukuman fisik dari teks penuh Leaf dkk. 2022.
 * Status tinjauan medis dipasang jujur oleh ensureArticleShell (belum ditinjau), tanpa nama peninjau.
 * Slug ini tidak ada di scripts/generate_yuka_round2_articles.js; generator itu tidak diubah.
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { renderArticlePage } = require('./lib/article-page');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'artikel');
const CREDIT = 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).';
const PHOTO_NOTE = ' Foto suasana kegiatan, bukan gambaran kondisi anak tertentu.';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (slug, text) => `<a href="${slug}">${text}</a>`;
const X = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;
const fig = (file, alt, caption, w, h) => `<figure><img src="../${file}" alt="${esc(alt)}" width="${w}" height="${h}" loading="lazy"><figcaption>${caption}<span class="kredit">${CREDIT}</span></figcaption></figure>`;
const P = (s) => `<p>${s}</p>`;
const H2 = (id, s) => `<h2 id="${id}">${s}</h2>`;
const H3 = (s) => `<h3>${s}</h3>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const faqBlock = (items) => `${H2('faq', 'Pertanyaan yang Sering Diajukan')}${items.map((f) => `${H3(f.q)}${P(f.a)}`).join('\n')}`;
const toc = (items) => `<div class="toc"><h3>Daftar Isi</h3><ol>${items.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></div>`;

const SRC = {
  lovaas: { label: 'Lovaas OI (1987). Behavioral treatment and normal educational and intellectual functioning in young autistic children. Journal of Consulting and Clinical Psychology 55(1):3-9. PMID 3571656', url: 'https://pubmed.ncbi.nlm.nih.gov/3571656/' },
  mceachin: { label: 'McEachin JJ, Smith T, Lovaas OI (1993). Long-term outcome for children with autism who received early intensive behavioral treatment. American Journal on Mental Retardation 97(4):359-72. PMID 8427693', url: 'https://pubmed.ncbi.nlm.nih.gov/8427693/' },
  gresham: { label: 'Gresham FM, MacMillan DL (1998). Early Intervention Project: can its claims be substantiated and its effects replicated? Journal of Autism and Developmental Disorders 28(1):5-13. PMID 9546297', url: 'https://pubmed.ncbi.nlm.nih.gov/9546297/' },
  smith2000: { label: 'Smith T, Groen AD, Wynn JW (2000). Randomized trial of intensive early intervention for children with pervasive developmental disorder. American Journal on Mental Retardation 105(4):269-85. PMID 10934569', url: 'https://pubmed.ncbi.nlm.nih.gov/10934569/' },
  smithEikeseth: { label: 'Smith T, Eikeseth S (2011). O. Ivar Lovaas: pioneer of applied behavior analysis and intervention for children with autism. Journal of Autism and Developmental Disorders 41(3):375-8. PMID 21153872', url: 'https://pubmed.ncbi.nlm.nih.gov/21153872/' },
  reichow: { label: 'Reichow B, Hume K, Barton EE, Boyd BA (2018). Early intensive behavioral intervention (EIBI) for young children with autism spectrum disorders (ASD). Cochrane Database of Systematic Reviews, CD009260. PMC6494600', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6494600/' },
  eldevik: { label: 'Eldevik S, dkk. (2009). Meta-analysis of Early Intensive Behavioral Intervention for children with autism. Journal of Clinical Child and Adolescent Psychology 38(3):439-50. PMID 19437303', url: 'https://pubmed.ncbi.nlm.nih.gov/19437303/' },
  sandbank2023: { label: 'Sandbank M, dkk. (2023). Autism intervention meta-analysis of early childhood studies (Project AIM): updated systematic review and secondary analysis. BMJ 383:e076733. PMC10644209', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10644209/' },
  sandbank2024: { label: 'Sandbank M, dkk. (2024). Determining Associations Between Intervention Amount and Outcomes for Young Autistic Children: A Meta-Analysis. JAMA Pediatrics 178(8):763-773. PMC11197026', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11197026/' },
  schreibman: { label: 'Schreibman L, dkk. (2015). Naturalistic Developmental Behavioral Interventions: Empirically Validated Treatments for Autism Spectrum Disorder. Journal of Autism and Developmental Disorders 45(8):2411-28. PMC4513196', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4513196/' },
  leaf: { label: 'Leaf JB, dkk. (2022). Concerns About ABA-Based Intervention: An Evaluation and Recommendations. Journal of Autism and Developmental Disorders 52(6):2838-2853. PMC9114057', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9114057/' },
  lapoint: { label: 'LaPoint S, dkk. (2025). Maximizing the Quality and Reporting Standards of Autism Intervention Science. Autism Research 18(11):2166-2173. PMC12661279', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12661279/' },
  bacb: { label: 'Behavior Analyst Certification Board: Board Certified Behavior Analyst (BCBA)', url: 'https://www.bacb.com/bcba/' },
};

const NOTE = 'Semua angka dibaca dari teks asli abstrak PubMed atau teks penuh PMC pada 11 Oktober 2026, dan tahun terbit tiap penelitian disebut di dalam teks. Teks penuh studi Lovaas 1987 tidak tersedia terbuka, sehingga angka hasilnya dikutip dari abstrak penelitian lanjutan dan kritiknya (McEachin dkk. 1993, Gresham dan MacMillan 1998). Ringkasan ini membantu orang tua memahami sejarah dan bukti, tetapi tidak dapat dipakai untuk memilih terapi tanpa asesmen profesional.';

const FAQ = [
  ['Apa itu metode Lovaas?', 'Metode Lovaas adalah program terapi perilaku intensif untuk anak autis usia dini yang dikembangkan O. Ivar Lovaas di University of California, Los Angeles (UCLA) melalui UCLA Young Autism Project. Program ini memakai prinsip Applied Behavior Analysis (ABA), terutama pengajaran terstruktur satu lawan satu yang dikenal sebagai discrete trial training, dijalankan banyak jam per minggu selama beberapa tahun dengan keterlibatan orang tua.'],
  ['Apakah metode Lovaas sama dengan terapi ABA?', 'Tidak persis. ABA adalah ilmu terapan tentang perilaku, sedangkan metode Lovaas adalah salah satu program yang dibangun dari ilmu itu pada era 1970-an dan 1980-an. Layanan ABA sekarang jauh lebih beragam: ada yang tetap terstruktur di meja, ada yang dijalankan lewat permainan dan rutinitas sehari-hari, dan prosedur hukuman fisik yang dulu dipakai sudah ditinggalkan.'],
  ['Benarkah 47 persen anak dalam studi Lovaas sembuh dari autisme?', 'Studi Lovaas tahun 1987 melaporkan 9 dari 19 anak di kelompok intensif (sekitar 47 persen) mencapai fungsi intelektual dan pendidikan yang tergolong normal. Namun angka itu berasal dari satu studi kecil yang desainnya dikritik keras secara metodologis, misalnya oleh Gresham dan MacMillan (1998). Uji acak dan tinjauan sistematis sesudahnya menemukan manfaat yang jauh lebih kecil. Autisme adalah kondisi perkembangan seumur hidup, sehingga tidak tepat menyebut terapi apa pun sebagai penyembuh.'],
  ['Apakah metode Lovaas memakai hukuman?', 'Pada era awal, ya. Leaf dan rekan (2022), yang sebagian penulisnya pernah bekerja bersama Lovaas, mencatat bahwa Lovaas memakai kejut listrik dalam praktiknya di UCLA pada 1960-an, lalu menggantinya dengan pukulan ringan pada 1970-an, dan hukuman fisik tidak lagi dipakai di akhir proyek tersebut. Kode etik analis perilaku saat ini mewajibkan prosedur penguatan positif diupayakan lebih dulu, dan hukuman fisik tidak dapat diterima dalam layanan anak.'],
  ['Apa kata tinjauan Cochrane tentang terapi perilaku intensif dini (EIBI)?', 'Tinjauan Cochrane tahun 2018 (Reichow dan rekan) menggabungkan 5 studi dengan 219 anak. Hasilnya, EIBI dikaitkan dengan kenaikan perilaku adaptif rata-rata 9,58 poin dan IQ rata-rata 15,44 poin dibanding layanan biasa, tetapi kualitas buktinya dinilai rendah atau sangat rendah. Penulis menyimpulkan buktinya lemah: EIBI mungkin efektif untuk sebagian anak, dan studi yang lebih baik masih dibutuhkan.'],
  ['Apakah anak autis harus terapi 40 jam per minggu?', 'Tidak ada ketentuan baku seperti itu. Leaf dan rekan (2022) menjelaskan angka 40 jam pada studi Lovaas adalah rata-rata, bukan aturan untuk semua anak. Meta-analisis Sandbank dan rekan di JAMA Pediatrics (2024) terhadap 144 studi dengan 9.038 anak tidak menemukan hubungan bahwa jumlah jam terapi yang lebih banyak menghasilkan efek yang lebih besar. Jumlah jam sebaiknya ditentukan dari asesmen dan kondisi keluarga.'],
  ['Apa itu NDBI dan bedanya dengan metode Lovaas?', 'NDBI (Naturalistic Developmental Behavioral Interventions) adalah kelompok intervensi yang menggabungkan ilmu perilaku dan ilmu perkembangan anak. Menurut Schreibman dan rekan (2015), NDBI dijalankan di situasi alami, kendali kegiatan dibagi antara anak dan terapis, dan memakai konsekuensi alami. Contohnya Pivotal Response Training dan Early Start Denver Model. Metode Lovaas klasik lebih banyak memakai sesi terstruktur yang dipimpin terapis.'],
  ['Bagaimana memilih terapis perilaku yang aman untuk anak?', 'Tanyakan latar pendidikan dan sertifikasinya, minta rencana tujuan tertulis yang bisa Anda pahami, pastikan tidak ada hukuman fisik atau penahanan, dan minta izin mengamati sesi. Terapis yang baik menghormati cara anak menenangkan diri dan menjelaskan kemajuan dengan data. Panduan lengkap ada di artikel lembaga sertifikasi terapis anak di Indonesia.'],
].map(([q, a]) => ({ q, a }));

const a = {
  slug: 'metode-lovaas-untuk-anak-autis',
  titleTag: 'Metode Lovaas untuk Anak Autis: Sejarah dan Bukti | YUKA',
  metaDesc: 'Metode Lovaas untuk anak autis: klaim studi 1987, kritiknya, beda dengan ABA modern dan NDBI, bukti Cochrane, dan isu etis. Baca sebelum memilih terapi.',
  keywords: 'metode lovaas untuk anak autis, metode lovaas, terapi lovaas, lovaas 1987, EIBI autisme, perbedaan lovaas dan ABA, kritik terapi ABA, NDBI autisme',
  ogTitle: 'Metode Lovaas untuk Anak Autis: Sejarah, Bukti, dan Kritiknya',
  ogDesc: 'Penjelasan seimbang tentang metode Lovaas: klaim studi 1987, kritik metodologi, bukti tinjauan sistematis, perbedaan dengan ABA modern, dan kritik etis.',
  datePublished: '2026-10-11T09:00:00+07:00',
  dateModified: '2026-10-11T09:00:00+07:00',
  dateDisplay: '11 Oktober 2026',
  readTime: '12 menit baca',
  category: 'Pendidikan',
  h1: 'Metode Lovaas untuk Anak Autis: Sejarah, Bukti, dan Kritiknya',
  crumb: 'Metode Lovaas untuk Anak Autis',
  parent: { href: 'terapi-aba', name: 'Terapi ABA' },
  about: ['Gangguan spektrum autisme', 'Applied Behavior Analysis', 'Intervensi perilaku intensif dini'],
  image: {
    file: 'Dokumentasi/artikel/floor-time-terapi-aktivitas-di-lantai.webp',
    w: 936, h: 702,
    alt: 'Seseorang berbaju merah muda duduk di lantai memeras jeruk ke dalam teko plastik, di depannya mangkuk berisi dua buah jeruk',
    caption: 'Kegiatan membuat minuman di lantai ruang kegiatan YUKA. Keterampilan sehari-hari diajarkan langkah demi langkah.' + PHOTO_NOTE,
    credit: CREDIT,
  },
  tags: ['metode lovaas', 'terapi ABA', 'autisme', 'intervensi dini', 'anak berkebutuhan khusus'],
  sourcesCheckedNote: NOTE,
  sources: [SRC.lovaas, SRC.mceachin, SRC.gresham, SRC.smith2000, SRC.smithEikeseth, SRC.reichow, SRC.eldevik, SRC.sandbank2023, SRC.sandbank2024, SRC.schreibman, SRC.leaf, SRC.lapoint, SRC.bacb],
  related: [
    { href: 'terapi-aba', title: 'Terapi ABA: Metode, Manfaat dan Penerapan untuk Anak Autis', desc: 'Gambaran umum terapi ABA dan cara kerjanya sehari-hari.' },
    { href: 'systematic-review-intervensi-dini-autisme', title: 'Systematic Review Intervensi Dini Autisme: Cara Membaca Bukti', desc: 'Cara membaca tinjauan sistematis sebelum memilih intervensi.' },
    { href: 'pivotal-response-training-prt-autisme', title: 'Pivotal Response Training (PRT) Autisme', desc: 'Salah satu contoh intervensi naturalistik yang berakar dari ABA.' },
    { href: 'lembaga-sertifikasi-terapis-anak-di-indonesia', title: 'Lembaga Sertifikasi Terapis Anak di Indonesia', desc: 'Cara mengecek kualifikasi terapis sebelum memulai terapi.' },
  ],
  faq: FAQ,
  bodyHtml: '',
};

a.bodyHtml = `
<div class="jawaban-singkat" style="background:#F8F9FF;border-left:4px solid #2B3A67;padding:1rem 1.25rem;border-radius:0 10px 10px 0;margin:1.5rem 0;"><strong>Jawaban singkat:</strong> metode Lovaas adalah program <strong>terapi perilaku intensif usia dini</strong> berbasis ABA yang dikembangkan Ole Ivar Lovaas di UCLA. Studinya tahun 1987 melaporkan 9 dari 19 anak (sekitar 47 persen) mencapai fungsi intelektual dan pendidikan yang tergolong normal, tetapi studi itu kecil dan desainnya banyak dikritik. Tinjauan Cochrane 2018 menilai bukti terapi perilaku intensif dini (EIBI) <strong>masih lemah</strong>: bisa membantu sebagian anak, bukan semua. Prosedur hukuman fisik di era awal sudah ditinggalkan, dan praktik sekarang lebih banyak memakai pendekatan naturalistik. <strong>Tidak ada terapi yang menyembuhkan autisme.</strong> Keputusan terapi sebaiknya diambil bersama profesional yang berkualifikasi.</div>
${toc([
    ['siapa-lovaas', 'Siapa Lovaas dan apa itu metode Lovaas'],
    ['cara-kerja', 'Cara kerja metode Lovaas klasik'],
    ['studi-1987', 'Studi 1987: klaim hasil yang terkenal'],
    ['kritik-metodologi', 'Kritik metodologi terhadap studi 1987'],
    ['bukti-sesudahnya', 'Bukti sesudahnya: uji acak dan tinjauan sistematis'],
    ['beda-aba-modern', 'Bedanya dengan ABA modern, EIBI, dan NDBI'],
    ['kritik-etis', 'Kritik etis dari komunitas autistik'],
    ['memilih-terapi', 'Panduan orang tua sebelum memilih terapi'],
    ['faq', 'Pertanyaan yang sering diajukan'],
  ])}

${H2('siapa-lovaas', 'Siapa Lovaas dan apa itu metode Lovaas')}
${P(`Nama Lovaas merujuk pada O. Ivar Lovaas (1927 sampai 2010), psikolog di University of California, Los Angeles (UCLA) yang mengabdikan hampir setengah abad untuk penelitian dan layanan bagi anak autis. Menurut ${X(SRC.smithEikeseth.url, 'Smith dan Eikeseth (2011)')}, pada 1960-an ia merintis intervensi berbasis Applied Behavior Analysis (ABA) untuk mengurangi perilaku menantang yang berat dan membangun bahasa komunikatif pada anak autis. Belakangan ia menekankan intervensi dini bagi anak usia prasekolah yang dijalankan di rumah dengan peran aktif orang tua, lalu menyebarkannya lewat buku panduan, film edukasi, dan ceramah.`)}
${P(`Di Indonesia, istilah "metode Lovaas" sering dipakai untuk menyebut terapi perilaku terstruktur di meja yang dijalankan satu terapis dengan satu anak. Banyak orang tua juga memakainya sebagai sinonim terapi ABA. Penyamaan ini perlu diluruskan. ABA adalah ilmu terapan tentang bagaimana perilaku dipelajari, sedangkan metode Lovaas adalah salah satu program yang dibangun dari ilmu itu pada masanya. Penjelasan umum tentang ABA ada di artikel ${L('terapi-aba', 'terapi ABA untuk anak autis')}, sedangkan artikel ini fokus pada sejarah, bukti, dan kritik terhadap program Lovaas.`)}
${P(`Kenapa sejarah ini penting bagi orang tua sekarang? Karena angka "47 persen anak normal" dari studi Lovaas masih sering dikutip dalam brosur dan percakapan antarorang tua, sering tanpa konteks. Memahami dari mana angka itu berasal, apa kelemahannya, dan apa yang ditemukan penelitian sesudahnya membantu keluarga menilai tawaran terapi dengan lebih tenang.`)}

${H2('cara-kerja', 'Cara kerja metode Lovaas klasik')}
${P(`Program Lovaas klasik, yang dijalankan dalam UCLA Young Autism Project, memiliki beberapa ciri yang membedakannya dari layanan terapi biasa pada masa itu.`)}
${ul([
    '<strong>Usia dini.</strong> Anak mulai mengikuti program pada usia prasekolah, dengan anggapan bahwa intervensi lebih awal memberi peluang perkembangan lebih besar.',
    '<strong>Intensitas tinggi.</strong> Anak dalam kelompok intensif menerima rata-rata sekitar 40 jam terapi per minggu. ' + X(SRC.leaf.url, 'Leaf dan rekan (2022)') + ' menegaskan angka itu rata-rata: ada anak yang menerima lebih dan ada yang jauh lebih sedikit, sesuai kebutuhan masing-masing.',
    '<strong>Pengajaran terstruktur.</strong> Keterampilan dipecah menjadi langkah kecil dan diajarkan berulang lewat percobaan singkat (discrete trial training): instruksi, respons anak, lalu konsekuensi seperti pujian atau hadiah.',
    '<strong>Dijalankan di rumah dan melibatkan orang tua.</strong> Orang tua dilatih agar pengajaran berlanjut di luar sesi.',
    '<strong>Berlangsung bertahun-tahun.</strong> Program tidak berhenti dalam hitungan bulan, tetapi berjalan sekitar dua tahun atau lebih.',
  ])}
${P(`Satu ciri lain perlu disebut dengan jujur: di era awal, program ini juga memakai prosedur hukuman. Bagian ${L('#kritik-etis', 'kritik etis')} di bawah membahasnya, termasuk bagaimana praktik itu berubah.`)}
${fig('Dokumentasi/artikel/apa-itu-autisme-level-1-2-3-kegiatan-tangan.webp', 'Dua tangan menggulung adonan oranye di atas alas silikon biru, di samping alas lain berisi adonan', 'Menggulung adonan di atas alas belajar. Keterampilan motorik halus dilatih lewat langkah kecil yang diulang.' + PHOTO_NOTE, 536, 324)}

${H2('studi-1987', 'Studi 1987: klaim hasil yang terkenal')}
${P(`Hasil yang membuat nama Lovaas mendunia terbit di ${X(SRC.lovaas.url, 'Journal of Consulting and Clinical Psychology tahun 1987')} dengan judul "Behavioral treatment and normal educational and intellectual functioning in young autistic children". Kelompok eksperimen berisi 19 anak usia prasekolah yang menerima terapi intensif, dibandingkan dengan anak-anak dalam kelompok kontrol.`)}
${P(`Menurut ringkasan ${X(SRC.gresham.url, 'Gresham dan MacMillan (1998)')}, proyek ini mengklaim menghasilkan "pemulihan" dari autisme pada 47 persen kasus dan pengurangan berat keparahan pada 42 persen kasus lainnya. Angka 47 persen itu setara dengan 9 dari 19 anak di kelompok eksperimen yang dinilai mencapai fungsi intelektual dan pendidikan normal, misalnya dapat masuk kelas reguler.`)}
${P(`Studi lanjutan oleh ${X(SRC.mceachin.url, 'McEachin, Smith, dan Lovaas (1993)')} menilai ulang anak-anak tersebut pada usia rata-rata 11,5 tahun. Kelompok eksperimen tetap mempertahankan keunggulannya atas kelompok kontrol yang berisi 19 anak dengan kondisi serupa. Dari 9 anak dengan hasil terbaik pada usia 7 tahun, 8 anak dinilai tidak dapat dibedakan dari anak rata-rata pada tes kecerdasan dan perilaku adaptif.`)}
<table><thead><tr><th>Publikasi</th><th>Yang dilaporkan</th><th>Catatan</th></tr></thead><tbody>
<tr><td>${X(SRC.lovaas.url, 'Lovaas, 1987')}</td><td>9 dari 19 anak kelompok intensif (sekitar 47 persen) mencapai fungsi intelektual dan pendidikan normal</td><td>Satu studi dengan sampel kecil; cara pembagian kelompoknya dipersoalkan pengkritik</td></tr>
<tr><td>${X(SRC.mceachin.url, 'McEachin dkk., 1993')}</td><td>Keunggulan bertahan sampai usia rata-rata 11,5 tahun; 8 dari 9 anak hasil terbaik tidak dapat dibedakan dari anak rata-rata pada tes</td><td>Anak yang sama; penulisnya termasuk Lovaas sendiri</td></tr>
<tr><td>${X(SRC.gresham.url, 'Gresham dan MacMillan, 1998')}</td><td>Menilai klaim 47 persen "pulih" dan 42 persen membaik banyak memiliki sejumlah masalah metodologis</td><td>Menyarankan orang tua bersikap skeptis yang sehat</td></tr>
</tbody></table>
${P(`Penting dicatat, kata "pulih" atau "recovery" di sini adalah istilah dalam perdebatan penelitian saat itu. Bahkan ${X(SRC.leaf.url, 'Leaf dan rekan (2022)')}, yang membela warisan Lovaas, mengakui istilah itu bermasalah karena konotasinya. Autisme adalah kondisi perkembangan seumur hidup, sehingga yang diukur studi ini adalah skor tes dan penempatan sekolah, bukan hilangnya autisme.`)}

${H2('kritik-metodologi', 'Kritik metodologi terhadap studi 1987')}
${P(`Sejak awal, studi Lovaas memicu perdebatan panjang. ${X(SRC.gresham.url, 'Gresham dan MacMillan (1998)')} menilai proyek ini menghadapi ancaman terhadap validitas internal maupun eksternal. Pertanyaan yang mereka angkat meliputi kapan terapi dimulai, intensitas dan lamanya terapi, penugasan acak, desain pembanding antarterapi, dan integritas pelaksanaan terapi. Mereka juga menulis bahwa para penulis proyek tampak enggan mengakui kelemahan metodologis dalam pengambilan sampel, desain, dan analisis data.`)}
${P(`Bagi orang tua, kritik itu dapat diterjemahkan menjadi beberapa pertanyaan sederhana.`)}
${ul([
    '<strong>Apakah kedua kelompok benar-benar setara sejak awal?</strong> Gresham dan MacMillan mempersoalkan penugasan acak. Bila kelompok tidak dibagi secara acak, perbedaan hasil bisa disebabkan perbedaan anak, bukan terapinya.',
    '<strong>Apakah ukurannya objektif?</strong> Penempatan di kelas reguler bisa dipengaruhi kebijakan sekolah dan advokasi orang tua, bukan hanya kemampuan anak.',
    '<strong>Apakah hasilnya bisa diulang tim lain?</strong> Satu studi dengan 19 anak belum cukup untuk dijadikan janji bagi semua anak.',
    '<strong>Siapa yang menilai?</strong> Penelitian yang dinilai oleh pengembang programnya sendiri berisiko bias.',
  ])}
${P(`Kritik soal mutu penelitian bukan khusus untuk Lovaas. ${X(SRC.lapoint.url, 'LaPoint dan rekan (2025)')} mencatat bahwa dalam Project AIM, hampir sepertiga uji intervensi autisme berisiko bias seleksi karena tidak memakai penugasan acak, dan sekitar 65,2 persen efeknya terancam bias karena penilainya tidak dibutakan. Mereka juga mengutip temuan bahwa konflik kepentingan peneliti sering tidak diungkapkan. Jadi sikap kritis terhadap klaim keberhasilan berlaku untuk semua terapi autisme.`)}

${H2('bukti-sesudahnya', 'Bukti sesudahnya: uji acak dan tinjauan sistematis')}
${P(`Setelah 1987, banyak tim mencoba menguji ulang terapi perilaku intensif dini, yang kemudian dikenal dengan istilah EIBI (Early Intensive Behavioral Intervention). Berikut bukti utama yang bisa dibaca orang tua, diurutkan dari tahun terbit.`)}
${H3('Uji acak Smith, Groen, dan Wynn (2000)')}
${P(`${X(SRC.smith2000.url, 'Uji acak ini')} membagi anak secara acak ke dua kelompok. Kelompok terapi intensif (7 anak autis dan 8 anak dengan PDD-NOS) menerima rata-rata 24,52 jam per minggu selama satu tahun, lalu jamnya dikurangi bertahap selama 1 sampai 2 tahun berikutnya. Kelompok pembanding (7 anak autis dan 6 anak PDD-NOS) menerima pelatihan orang tua selama 3 sampai 9 bulan. Kelompok intensif lebih unggul dalam kecerdasan, kemampuan visual spasial, bahasa, dan akademik, tetapi <strong>tidak</strong> dalam perilaku adaptif maupun masalah perilaku. Anak dengan PDD-NOS tampaknya memperoleh kemajuan lebih besar dibanding anak autis. Hasil ini lebih sederhana dibanding klaim 1987.`)}
${H3('Meta-analisis Eldevik dan rekan (2009)')}
${P(`${X(SRC.eldevik.url, 'Meta-analisis ini')} menemukan 34 studi EIBI, 9 di antaranya memiliki kelompok pembanding atau kontrol. Rata-rata ukuran efeknya 1,10 untuk perubahan kecerdasan dan 0,66 untuk perubahan perilaku adaptif, yang oleh penulis digolongkan besar dan sedang. Penting dicatat, sebagian penulisnya adalah peneliti dan praktisi EIBI.`)}
${H3('Tinjauan Cochrane Reichow dan rekan (2018)')}
${P(`${X(SRC.reichow.url, 'Tinjauan Cochrane')} adalah salah satu rujukan paling ketat. Tinjauan ini hanya memasukkan 5 studi (1 uji acak dan 4 uji terkontrol tanpa pengacakan) dengan total 219 anak: 116 di kelompok EIBI dan 103 di kelompok layanan pendidikan khusus biasa. Anak berusia 30,2 sampai 42,5 bulan, dan terapi berlangsung 24 sampai 36 bulan.`)}
<table><thead><tr><th>Hasil yang diukur</th><th>Perbedaan dibanding layanan biasa</th><th>Kualitas bukti</th></tr></thead><tbody>
<tr><td>Perilaku adaptif (skor Vineland)</td><td>Rata-rata 9,58 poin lebih tinggi (5 studi, 202 anak)</td><td>Rendah</td></tr>
<tr><td>IQ</td><td>Rata-rata 15,44 poin lebih tinggi (5 studi, 202 anak)</td><td>Rendah</td></tr>
<tr><td>Bahasa ekspresif dan reseptif</td><td>Ukuran efek 0,51 dan 0,55 (4 studi)</td><td>Rendah</td></tr>
<tr><td>Keparahan gejala autisme</td><td>Ukuran efek -0,34, tidak bermakna secara statistik (2 studi, 81 anak)</td><td>Rendah atau sangat rendah</td></tr>
<tr><td>Masalah perilaku</td><td>Ukuran efek -0,58, tidak bermakna secara statistik (2 studi, 67 anak)</td><td>Rendah atau sangat rendah</td></tr>
</tbody></table>
${P(`Kesimpulan penulis Cochrane hati-hati: ada bukti lemah bahwa EIBI mungkin efektif untuk sebagian anak autis. Kekuatan buktinya terbatas karena kebanyakan berasal dari studi kecil dengan desain yang belum optimal, dan penelitian lanjutan sangat mungkin mengubah perkiraan efeknya. Penulis menyarankan penyedia layanan mempertimbangkan masukan keluarga saat merekomendasikan EIBI.`)}
${H3('Project AIM, Sandbank dan rekan (2023)')}
${P(`${X(SRC.sandbank2023.url, 'Tinjauan sistematis yang terbit di BMJ tahun 2023')} jauh lebih besar: 289 laporan dari 252 studi dengan 13.304 peserta anak autis di bawah 8 tahun. Bila hanya uji acak yang dihitung, intervensi perilaku menunjukkan efek bermakna pada perilaku sosial emosional atau perilaku menantang (ukuran efek 0,58). Namun ketika efek yang berisiko bias deteksi tinggi dikeluarkan, hanya satu efek yang tetap bermakna, yaitu NDBI terhadap ukuran karakteristik autisme (0,30). Penulis juga mencatat efek samping jarang dipantau, padahal mungkin sering terjadi.`)}
${H3('Apakah lebih banyak jam berarti lebih baik?')}
${P(`Rekomendasi 20 sampai 40 jam per minggu lahir dari tradisi Lovaas. ${X(SRC.sandbank2024.url, 'Meta-analisis Sandbank dan rekan di JAMA Pediatrics tahun 2024')} menguji anggapan itu pada 144 studi dengan 9.038 anak. Hasilnya, tidak ada satu pun ukuran jumlah terapi (jam per hari, lama program, atau total jam) yang berhubungan positif dan bermakna dengan besarnya efek. Penulis menyimpulkan hanya sedikit bukti kuat yang mendukung pemberian intervensi intensif.`)}
${fig('Dokumentasi/artikel/cara-melatih-anak-speech-delay-bicara-buku-bergambar.webp', 'Tangan memegang buku hijau dan menulis di kertas di atas meja lipat hitam, di sebelahnya meja lain berisi gunting dan manik-manik', 'Belajar di meja lipat sambil duduk di lantai. Rencana belajar disusun dari kebutuhan, bukan dari jumlah jam semata.' + PHOTO_NOTE, 620, 400)}

${H2('beda-aba-modern', 'Bedanya dengan ABA modern, EIBI, dan NDBI')}
${P(`Istilah-istilah ini sering tercampur. Secara sederhana: ABA adalah ilmunya, EIBI adalah model layanan intensif usia dini yang berakar dari program Lovaas, dan NDBI adalah generasi intervensi yang memadukan ilmu perilaku dengan ilmu perkembangan anak. ${X(SRC.schreibman.url, 'Schreibman dan rekan (2015)')} menjelaskan bahwa NDBI dijalankan di situasi alami, kendali kegiatan dibagi antara anak dan terapis, memakai konsekuensi alami, dan mengajarkan keterampilan yang sesuai tahap perkembangan.`)}
<table><thead><tr><th>Aspek</th><th>Metode Lovaas klasik</th><th>Layanan berbasis ABA saat ini</th><th>NDBI (contoh: PRT, ESDM)</th></tr></thead><tbody>
<tr><td>Siapa yang memimpin kegiatan</td><td>Terapis, sangat terstruktur</td><td>Bervariasi, dari terstruktur sampai mengikuti minat anak</td><td>Dibagi antara anak dan orang dewasa, mengikuti minat anak</td></tr>
<tr><td>Tempat</td><td>Meja terapi di rumah</td><td>Rumah, klinik, sekolah</td><td>Situasi alami: bermain, makan, rutinitas</td></tr>
<tr><td>Hadiah</td><td>Sering hadiah dari luar kegiatan (makanan, pujian)</td><td>Disesuaikan, makin diarahkan ke hadiah alami</td><td>Hadiah alami: anak mendapat yang ia minta</td></tr>
<tr><td>Jumlah jam</td><td>Rata-rata sekitar 40 jam per minggu</td><td>Ditentukan dari asesmen</td><td>Sering lewat pelatihan orang tua dan sesi lebih sedikit</td></tr>
<tr><td>Hukuman fisik</td><td>Dipakai di era awal, lalu ditinggalkan</td><td>Tidak dapat diterima; penguatan positif diutamakan</td><td>Tidak dipakai</td></tr>
<tr><td>Contoh di situs ini</td><td>${L('terapi-aba', 'Terapi ABA')}</td><td>${L('reward-system-efektif-untuk-anak-autis', 'Sistem penghargaan')}</td><td>${L('pivotal-response-training-prt-autisme', 'Pivotal Response Training')}</td></tr>
</tbody></table>
${P(`Dengan kata lain, menolak metode Lovaas versi 1980-an tidak sama dengan menolak semua bantuan berbasis ilmu perilaku. Banyak teknik yang lahir dari ABA, seperti memecah tugas menjadi langkah kecil, jadwal visual, dan penguatan positif, tetap berguna bila dipakai dengan hormat terhadap anak. Pendekatan berbasis relasi seperti ${L('floor-time-terapi', 'Floortime')} dan ${L('hanen-approach-terapi-bahasa-anak', 'Hanen')} juga bisa menjadi pilihan, tergantung kebutuhan anak.`)}
${fig('Dokumentasi/artikel/empati-anak-berkebutuhan-khusus-tangan-bersama.webp', 'Tangan orang dewasa terbuka di dekat tangan anak berbaju putih merah yang memegang jeruk dan alat peras di atas teko', 'Orang dewasa mendampingi tanpa mengambil alih. Anak tetap memegang kendali atas kegiatannya.' + PHOTO_NOTE, 520, 400)}

${H2('kritik-etis', 'Kritik etis dari komunitas autistik')}
${P(`Selain soal metodologi, metode Lovaas dan ABA secara umum mendapat kritik etis dari sebagian orang autis dewasa dan aktivis neurodiversitas. Ringkasan berikut mengikuti ${X(SRC.leaf.url, 'Leaf dan rekan (2022)')}, artikel yang memetakan kritik tersebut. Perlu diketahui, dua penulis artikel itu menghabiskan sekitar 20 tahun bekerja bersama Lovaas, sehingga tulisan mereka mewakili sudut pandang pembela ABA yang menanggapi kritik.`)}
${H3('Penggunaan hukuman di era awal')}
${P(`Kritik ini berdasar. Leaf dan rekan mengakui bahwa Lovaas memakai kejut listrik dalam praktiknya di UCLA pada 1960-an, sebelum Young Autism Project. Pada 1970-an, kejut listrik diganti dengan pukulan, dan hukuman fisik tidak lagi dipakai pada akhir proyek tersebut. Kode etik analis perilaku sekarang mewajibkan prosedur penguatan diupayakan lebih dulu sebelum prosedur hukuman apa pun. Bagi orang tua, pesannya tegas: <strong>hukuman fisik, kejut listrik, atau menahan anak sebagai bagian dari terapi tidak dapat diterima</strong>, apa pun nama metodenya.`)}
${H3('Beban 40 jam per minggu')}
${P(`Orang autis dewasa mempertanyakan bagaimana anak kecil sanggup menjalani 40 jam terapi per minggu. Pembela ABA menjawab bahwa angka itu rata-rata, bukan ketentuan. Bukti terbaru dari ${X(SRC.sandbank2024.url, 'Sandbank dan rekan (2024)')} justru mendukung kehati-hatian: jam yang lebih banyak tidak terbukti memberi hasil lebih besar, sementara waktu bermain, istirahat, dan kebersamaan keluarga juga penting bagi perkembangan anak.`)}
${H3('Menghentikan stimming dan memaksa terlihat "normal"')}
${P(`Banyak orang autis menjelaskan bahwa stimming, seperti mengepakkan tangan atau bergoyang, membantu mereka menenangkan diri dan mengatur emosi. Survei pada orang autis dewasa yang dikutip Leaf dan rekan juga menyebut stimming sebagai perilaku yang berguna. Kritik ini menyoroti tujuan terapi: apakah yang dikejar adalah kemandirian dan kesejahteraan anak, atau sekadar membuat anak tampak seperti anak lain? Kekhawatiran lain adalah masking, yaitu anak belajar menyembunyikan ciri autisnya dengan biaya emosional yang besar.`)}
${H3('Kepatuhan dan risiko trauma')}
${P(`Sebagian aktivis menilai terapi yang terlalu menekankan kepatuhan membuat anak sulit berkata "tidak", dan ada laporan yang mengaitkan pengalaman ABA dengan gejala stres pascatrauma. Leaf dan rekan menilai bukti untuk klaim trauma itu lemah. Di sisi lain, ${X(SRC.sandbank2023.url, 'Project AIM (2023)')} mencatat bahwa efek samping intervensi autisme jarang dipantau dengan baik, sehingga manfaat terapi belum bisa ditimbang secara utuh terhadap kemungkinan dampak buruknya. Kedua sisi sepakat pada satu hal: suara orang autis perlu didengar dalam menentukan tujuan terapi.`)}
${fig('Dokumentasi/artikel/melatih-anak-abk-naik-transportasi-umum-pendamping-memegang-tangan.webp', 'Pendamping berbaju merah muda memegang lengan peserta berbaju putih yang duduk di kursi berlapis kulit', 'Pendamping memegang lengan peserta dengan lembut. Rasa aman lebih penting daripada kepatuhan semata.' + PHOTO_NOTE, 671, 520)}

${H2('memilih-terapi', 'Panduan orang tua sebelum memilih terapi')}
${P(`Bila Anda ditawari program yang menyebut diri metode Lovaas, terapi ABA intensif, atau EIBI, beberapa langkah berikut membantu memastikan pilihan Anda aman dan sesuai.`)}
${ul([
    '<strong>Mulai dari asesmen, bukan dari paket jam.</strong> Program yang baik menyusun tujuan berdasarkan asesmen anak Anda, bukan menawarkan paket 40 jam untuk semua anak. Gambaran tingkat dukungan bisa dibaca di ' + L('apa-itu-autisme-level-1-2-3', 'autisme level 1, 2, dan 3') + '.',
    '<strong>Cek kualifikasi terapis.</strong> Tanyakan latar pendidikan, pelatihan, dan sertifikasi. Secara internasional ada sertifikasi analis perilaku seperti ' + X(SRC.bacb.url, 'BCBA dari Behavior Analyst Certification Board') + '. Di Indonesia, panduan mengecek kualifikasi terapis ada di ' + L('lembaga-sertifikasi-terapis-anak-di-indonesia', 'lembaga sertifikasi terapis anak di Indonesia') + '.',
    '<strong>Minta tujuan tertulis yang bermakna.</strong> Tujuan yang baik menyangkut komunikasi, kemandirian, keselamatan, dan kesejahteraan anak, bukan sekadar menghilangkan perilaku yang tidak mengganggu siapa pun.',
    '<strong>Pastikan tidak ada hukuman fisik.</strong> Tanyakan langsung bagaimana terapis menangani tantrum atau penolakan. Jawaban yang baik menjelaskan pencegahan dan penguatan positif. Strategi menghadapi ledakan emosi ada di ' + L('cara-mengatasi-tantrum-anak-autis', 'cara mengatasi tantrum anak autis') + '.',
    '<strong>Boleh mengamati sesi.</strong> Program yang terbuka mengizinkan orang tua melihat dan ikut belajar.',
    '<strong>Perhatikan tanda anak tertekan.</strong> Bila anak sering menangis hebat, takut masuk ruang terapi, atau kehilangan minat bermain, bicarakan dengan terapis dan pertimbangkan penyesuaian.',
    '<strong>Waspadai janji sembuh.</strong> Tidak ada terapi yang menyembuhkan autisme. Klaim "sembuh total" atau "normal dalam sekian bulan" adalah tanda bahaya, sama seperti klaim pada ' + L('stem-cell-therapy-untuk-autisme-perkembangan', 'terapi stem cell untuk autisme') + '.',
    '<strong>Gabungkan dengan dukungan lain.</strong> Banyak anak juga terbantu oleh ' + L('terapi-wicara', 'terapi wicara') + ' dan ' + L('terapi-okupasi', 'terapi okupasi') + '. Daftar pilihan ada di ' + L('macam-macam-terapi-pada-anak', 'macam-macam terapi pada anak') + '.',
  ])}
${P(`Soal biaya, program intensif membutuhkan banyak jam terapis sehingga bebannya besar bagi keluarga. Gambaran umum biaya dibahas di ${L('biaya-terapi-anak-autis-per-bulan', 'biaya terapi anak autis per bulan')}; tanyakan rincian tarif langsung kepada penyedia layanan karena setiap lembaga berbeda. Dengan bukti terbaru bahwa jam yang lebih banyak tidak otomatis lebih baik, keluarga tidak perlu merasa gagal bila tidak sanggup menjalani program puluhan jam per minggu.`)}
${P(`Langkah paling penting tetap sama: mulai sedini mungkin dari ${L('intervensi-dini', 'intervensi dini')} yang sesuai, libatkan dokter anak atau psikolog untuk asesmen, dan pilih pendekatan yang membuat anak merasa aman. Cara membaca bukti penelitian sebelum memilih terapi dijelaskan di ${L('systematic-review-intervensi-dini-autisme', 'tinjauan sistematis intervensi dini autisme')}, dan latihan sosial sehari-hari ada di ${L('joint-attention-anak-autis-kenapa-penting', 'joint attention pada anak autis')}.`)}
${P(`YUKA mendampingi anak berkebutuhan khusus, termasuk anak autis, melalui ${L('pendidikan-inklusi', 'pendidikan inklusi')} di Sekolah Inklusi Taruna Imani. Kami tidak menetapkan diagnosis, dan artikel ini bukan promosi metode terapi tertentu. Bila Anda ingin berdiskusi tentang dukungan belajar untuk anak, lihat ${L('../sekolah-autis-yogyakarta', 'layanan pendidikan untuk anak autis di Yogyakarta')} atau ${L('../kontak', 'hubungi tim YUKA')}. Bagi orang tua yang baru menerima diagnosis, artikel ${L('orang-tua-baru-terima-diagnosis-anak-abk', 'untuk orang tua yang baru menerima diagnosis')} dan ${L('tips-mendampingi-anak-autis', 'tips mendampingi anak autis')} berisi langkah praktis.`)}
${P(`Kesimpulannya, metode Lovaas adalah tonggak sejarah yang membuktikan bahwa anak autis bisa belajar banyak keterampilan lewat pengajaran yang terencana. Namun klaim 47 persen dari studi 1987 tidak bisa dibaca sebagai janji, karena studinya kecil dan bermasalah secara metodologis, sementara tinjauan Cochrane 2018 dan Project AIM 2023 menunjukkan manfaat yang lebih sederhana dengan kualitas bukti yang masih rendah. Praktik hukuman di era awal sudah ditinggalkan, dan pendekatan sekarang bergerak ke arah yang lebih naturalistik dan menghormati anak. Pilihan terbaik adalah yang disusun dari kebutuhan anak Anda, dijalankan oleh profesional berkualifikasi, dan dipantau bersama keluarga.`)}
${faqBlock(FAQ)}
`;

const html = renderArticlePage(a);
const out = path.join(OUT, `${a.slug}.html`);
fs.writeFileSync(out, html);
console.log(`WROTE ${out} ${html.length} bytes`);

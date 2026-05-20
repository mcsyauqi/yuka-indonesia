// uplift_ymyl_seo.js
// Audit + uplift all yukaindonesia.com articles for /artikel-seo standards.
// YMYL strict: medical disclaimer, .go.id sources, FAQ + schema.

const fs = require('fs');
const path = require('path');

const ART_DIR = path.join(__dirname, '..', 'artikel');

// === Verified live authoritative sources (cross-verified via Perplexity 2024-2025) ===
const SOURCES = {
  uuDisabilitas: { url: 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016', label: 'UU No. 8 Tahun 2016 tentang Penyandang Disabilitas', host: 'peraturan.bpk.go.id' },
  whoAutism: { url: 'https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders', label: 'WHO Fact Sheet: Autism Spectrum Disorders', host: 'who.int' },
  whoAutismQA: { url: 'https://www.who.int/news-room/questions-and-answers/item/autism-spectrum-disorders-(asd)', label: 'WHO: Autism Questions & Answers', host: 'who.int' },
  ayoSehatDisabilitas: { url: 'https://ayosehat.kemkes.go.id/topik-non-penyakit/kesehatan-lainnya/kumpulan-link-penting-untuk-anak-disabilitas', label: 'Kemenkes Ayo Sehat: Kumpulan Link Penting untuk Anak Disabilitas', host: 'ayosehat.kemkes.go.id' },
  yankesADHDvsAutism: { url: 'https://yankes.kemkes.go.id/view_artikel/3151/reqwest/index', label: 'Kemenkes Yankes: Perbedaan Autisme dan ADHD pada Anak', host: 'yankes.kemkes.go.id' },
  yankesADHD: { url: 'https://yankes.kemkes.go.id/view_artikel/3232/reqwest/index', label: 'Kemenkes Yankes: Apa Itu ADHD', host: 'yankes.kemkes.go.id' },
  yankesSensoriIntegrasi: { url: 'https://yankes.kemkes.go.id/view_artikel/3494/sensori-integrasi-pada-perkembangan-anak', label: 'Kemenkes Yankes: Sensori Integrasi pada Perkembangan Anak', host: 'yankes.kemkes.go.id' },
  yankesHakAnak: { url: 'https://yankes.kemkes.go.id/view_artikel/1917/jangan-ambil-hak-anak-anak-meski-mereka-terlahir-berbeda', label: 'Kemenkes Yankes: Hak Anak Berkebutuhan Khusus', host: 'yankes.kemkes.go.id' },
  kemdikbudInklusif: { url: 'https://kurikulum.kemdikbud.go.id/wp-content/uploads/2022/08/Panduan-Pelaksanaan-Pendidikan-Inklusif.pdf', label: 'Kemdikbudristek: Panduan Pelaksanaan Pendidikan Inklusif (2022)', host: 'kurikulum.kemdikbud.go.id' },
  repositoriInklusif: { url: 'https://repositori.kemdikbud.go.id/24970/1/Panduan_Inklusif.pdf', label: 'Repositori Kemdikbud: Panduan Pendidikan Inklusif', host: 'repositori.kemdikbud.go.id' },
};

const TOPIC_SOURCES = {
  abk: ['uuDisabilitas', 'ayoSehatDisabilitas', 'yankesHakAnak', 'kemdikbudInklusif'],
  disabilitas: ['uuDisabilitas', 'ayoSehatDisabilitas', 'yankesHakAnak'],
  autisme: ['whoAutism', 'whoAutismQA', 'yankesADHDvsAutism'],
  adhd: ['yankesADHD', 'yankesADHDvsAutism'],
  terapi: ['yankesSensoriIntegrasi', 'yankesADHD', 'whoAutism'],
  pendidikan: ['kemdikbudInklusif', 'repositoriInklusif', 'uuDisabilitas'],
  klinis: ['ayoSehatDisabilitas', 'yankesHakAnak', 'whoAutism'],
};

function topicCategoriesForFile(name) {
  const n = name.toLowerCase();
  const cats = new Set();
  if (/autis|asperger/.test(n)) cats.add('autisme');
  if (/adhd|hiperaktif/.test(n)) cats.add('adhd');
  if (/terapi|sensori|motorik|floor-time|aba|bermain|memasak|intervensi/.test(n)) cats.add('terapi');
  if (/inklusi|slb|sekolah|pendidikan|montessori|homeschool|shadow-teacher|gpk|pembelajaran|kecerdasan/.test(n)) cats.add('pendidikan');
  if (/disleksia|down-syndrome|cerebral-palsy|retardasi|speech-delay|slow-learner|disabilitas-intelektual|kesulitan-belajar/.test(n)) cats.add('klinis');
  if (/disabilitas|penyandang|difabel|bahasa-isyarat|bisindo/.test(n)) cats.add('disabilitas');
  if (cats.size === 0) cats.add('abk');
  return [...cats];
}

function sourcesForFile(name) {
  const cats = topicCategoriesForFile(name);
  const keys = new Set();
  cats.forEach(c => (TOPIC_SOURCES[c] || []).forEach(s => keys.add(s)));
  keys.add('uuDisabilitas');
  keys.add('ayoSehatDisabilitas');
  return [...keys].slice(0, 5);
}

// ====== Topic-specific FAQ (5 Q&A each) ======
const FAQ_TEMPLATES = {
  autisme: [
    { q: 'Apakah autisme bisa disembuhkan?', a: 'Autisme bukan penyakit yang bisa disembuhkan, melainkan kondisi spektrum perkembangan saraf seumur hidup. Namun menurut <a href="https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" target="_blank" rel="noopener">WHO (2025)</a>, intervensi psikososial berbasis bukti seperti terapi perilaku dan pelatihan keterampilan untuk orang tua dapat meningkatkan kemampuan komunikasi, perilaku sosial, dan kualitas hidup anak autis maupun keluarganya secara signifikan.' },
    { q: 'Apakah vaksin menyebabkan autisme?', a: 'Tidak. <a href="https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders" target="_blank" rel="noopener">WHO menegaskan</a> bahwa penelitian ekstensif selama bertahun-tahun dengan berbagai metode telah membuktikan vaksin MMR (campak, gondongan, rubela) maupun vaksin anak lainnya, termasuk yang mengandung thiomersal atau aluminium, tidak menyebabkan autisme. Studi awal yang menyiratkan hubungan tersebut terbukti salah dan curang serta telah dicabut.' },
    { q: 'Pada usia berapa autisme bisa dideteksi?', a: 'Menurut <a href="https://www.who.int/news-room/questions-and-answers/item/autism-spectrum-disorders-(asd)" target="_blank" rel="noopener">WHO</a>, karakteristik autisme sulit diidentifikasi sebelum usia 12 bulan, namun diagnosis umumnya sudah memungkinkan pada usia 2 tahun. Ciri khas antara lain keterlambatan atau regresi perkembangan bahasa dan keterampilan sosial, serta pola perilaku berulang.' },
    { q: 'Apa perbedaan autisme dan ADHD?', a: 'Menurut <a href="https://yankes.kemkes.go.id/view_artikel/3151/reqwest/index" target="_blank" rel="noopener">Kemenkes Yankes (2024)</a>, autisme adalah gangguan perkembangan yang berpengaruh pada komunikasi verbal/nonverbal dan interaksi sosial, sedangkan ADHD ditandai gangguan pemusatan perhatian, pengendalian diri, dan aktivitas berlebih. Keduanya dapat hadir bersamaan (komorbid) namun penanganannya berbeda.' },
    { q: 'Apakah anak autis bisa sekolah di sekolah umum?', a: 'Ya. Berdasarkan <a href="https://kurikulum.kemdikbud.go.id/wp-content/uploads/2022/08/Panduan-Pelaksanaan-Pendidikan-Inklusif.pdf" target="_blank" rel="noopener">Panduan Pelaksanaan Pendidikan Inklusif Kemdikbudristek (2022)</a> dan <a href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" target="_blank" rel="noopener">UU No. 8 Tahun 2016</a>, anak autis berhak mengikuti pendidikan inklusi di sekolah reguler dengan dukungan kurikulum yang disesuaikan dan pendamping khusus (shadow teacher) bila diperlukan.' },
  ],
  adhd: [
    { q: 'Apa itu ADHD?', a: 'Menurut <a href="https://yankes.kemkes.go.id/view_artikel/3232/reqwest/index" target="_blank" rel="noopener">Kemenkes Yankes (2024)</a>, ADHD (Attention Deficit Hyperactivity Disorder) adalah gangguan perilaku yang ditandai aktivitas berlebihan (hiperaktif), konsentrasi rendah, dan perilaku impulsif. Anak dengan ADHD cenderung bergerak terus-menerus, sulit duduk diam, dan kesulitan mengikuti instruksi panjang.' },
    { q: 'Apakah ADHD bisa disembuhkan?', a: 'ADHD adalah kondisi kronis yang biasanya dimulai pada masa anak dan dapat berlanjut hingga dewasa. <a href="https://yankes.kemkes.go.id/view_artikel/3232/reqwest/index" target="_blank" rel="noopener">Kemenkes</a> menjelaskan bahwa terapi (psikoterapi, terapi perilaku, pelatihan sosial) dan jika diperlukan obat (methylphenidate, atomoxetine) dapat menurunkan gejala secara signifikan. Konsultasi dengan dokter anak, psikiater, atau psikolog wajib untuk diagnosis dan penanganan yang tepat.' },
    { q: 'Apa perbedaan ADHD dan autisme?', a: '<a href="https://yankes.kemkes.go.id/view_artikel/3151/reqwest/index" target="_blank" rel="noopener">Kemenkes (2024)</a> menjelaskan bahwa ADHD utamanya menyangkut gangguan perhatian dan hiperaktivitas, sementara autisme menyangkut hambatan komunikasi sosial dan pola perilaku repetitif. Beberapa anak dapat memiliki keduanya (komorbid), sehingga asesmen oleh tenaga profesional sangat penting.' },
    { q: 'Apakah anak ADHD bisa sekolah seperti anak lain?', a: 'Ya. Berdasarkan <a href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" target="_blank" rel="noopener">UU No. 8 Tahun 2016</a> dan <a href="https://kurikulum.kemdikbud.go.id/wp-content/uploads/2022/08/Panduan-Pelaksanaan-Pendidikan-Inklusif.pdf" target="_blank" rel="noopener">Panduan Pendidikan Inklusif Kemdikbudristek</a>, anak ADHD memiliki hak penuh atas pendidikan inklusi. Dukungan dari guru, pendamping (GPK), dan orang tua sangat menentukan keberhasilan belajar.' },
    { q: 'Kapan harus konsultasi ke dokter untuk dugaan ADHD?', a: 'Segera konsultasikan ke dokter anak atau psikiater anak jika gejala (sulit fokus, hiperaktif, impulsif) muncul konsisten di lebih dari satu situasi (rumah, sekolah) selama 6 bulan atau lebih dan mengganggu aktivitas harian. Diagnosis akurat hanya bisa dilakukan tenaga medis profesional, bukan dari informasi internet.' },
  ],
  terapi: [
    { q: 'Apa itu terapi sensori integrasi?', a: 'Menurut <a href="https://yankes.kemkes.go.id/view_artikel/3494/sensori-integrasi-pada-perkembangan-anak" target="_blank" rel="noopener">Kemenkes Yankes</a>, terapi sensori integrasi adalah intervensi yang dilakukan okupasi terapis untuk menangani anak dengan disfungsi sensori, agar kemampuan persepsi terhadap lingkungan menjadi lebih baik. Terapi ini efektif untuk anak dengan autisme, ADHD, speech delay, dan Down Syndrome.' },
    { q: 'Siapa yang berhak memberikan terapi pada anak berkebutuhan khusus?', a: 'Terapi anak berkebutuhan khusus harus diberikan oleh tenaga profesional bersertifikat: okupasi terapis, fisioterapis, terapis wicara, psikolog anak, atau dokter spesialis sesuai kebutuhan. <a href="https://yankes.kemkes.go.id/view_artikel/3494/sensori-integrasi-pada-perkembangan-anak" target="_blank" rel="noopener">Kemenkes</a> menegaskan terapi sensori integrasi misalnya hanya boleh dilakukan oleh ahli terapi okupasi yang sudah terlatih.' },
    { q: 'Berapa lama anak berkebutuhan khusus harus menjalani terapi?', a: 'Durasi terapi sangat individual, tergantung jenis gangguan, tingkat keparahan, usia anak, dan respons terhadap intervensi. Konsultasi awal dengan tim profesional (dokter, terapis, psikolog) wajib untuk menyusun rencana terapi yang sesuai kebutuhan anak. Hindari klaim terapi instan atau penyembuhan total dari pihak yang tidak kredibel.' },
    { q: 'Apakah terapi bisa dilakukan di rumah?', a: 'Sebagian latihan terapeutik dapat dilanjutkan di rumah, tetapi hanya setelah orang tua mendapat pelatihan dari terapis. Praktik ini dikenal sebagai home program. Tujuannya menjaga konsistensi stimulasi, bukan menggantikan sesi terapi profesional di klinik atau pusat layanan.' },
    { q: 'Apakah terapi anak berkebutuhan khusus ditanggung BPJS?', a: 'Sebagian terapi dasar untuk kondisi medis tertentu dapat ditanggung BPJS Kesehatan dengan rujukan dokter spesialis. Cek langsung di Puskesmas atau Rumah Sakit rujukan tipe B/A untuk informasi lengkap dan persyaratan klaim, karena cakupan dan prosedur dapat berbeda di tiap daerah.' },
  ],
  pendidikan: [
    { q: 'Apa itu pendidikan inklusif?', a: 'Menurut <a href="https://kurikulum.kemdikbud.go.id/wp-content/uploads/2022/08/Panduan-Pelaksanaan-Pendidikan-Inklusif.pdf" target="_blank" rel="noopener">Panduan Pelaksanaan Pendidikan Inklusif Kemdikbudristek (2022)</a>, pendidikan inklusif adalah sistem layanan pendidikan yang memberikan kesempatan kepada semua peserta didik berkebutuhan khusus (kelainan fisik, emosional, mental, sosial) atau memiliki potensi kecerdasan/bakat istimewa untuk belajar bersama peserta didik umum dalam satu lingkungan pendidikan.' },
    { q: 'Apa dasar hukum pendidikan inklusi di Indonesia?', a: 'Dasar hukum utama adalah UU No. 20 Tahun 2003 tentang Sistem Pendidikan Nasional Pasal 5 ayat 2-4 dan Pasal 32, Permendiknas No. 70 Tahun 2009 tentang Pendidikan Inklusif, serta <a href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" target="_blank" rel="noopener">UU No. 8 Tahun 2016 tentang Penyandang Disabilitas</a> Pasal 10 yang menjamin hak peserta didik berkebutuhan khusus atas layanan pendidikan bermutu di semua jenis, jalur, dan jenjang.' },
    { q: 'Apa perbedaan SLB dan sekolah inklusi?', a: 'SLB (Sekolah Luar Biasa) adalah sekolah khusus dengan kurikulum dan tenaga pendidik khusus untuk anak berkebutuhan khusus berat. Sekolah inklusi adalah sekolah reguler yang menerima ABK belajar bersama anak non-ABK, dengan modifikasi kurikulum dan pendamping khusus. <a href="https://repositori.kemdikbud.go.id/24970/1/Panduan_Inklusif.pdf" target="_blank" rel="noopener">Kemdikbud</a> menekankan pendidikan inklusif sebagai upaya pemerataan tanpa diskriminasi.' },
    { q: 'Apakah anak berkebutuhan khusus wajib disekolahkan?', a: 'Ya, pendidikan dasar 12 tahun wajib bagi seluruh anak Indonesia, termasuk anak berkebutuhan khusus. <a href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" target="_blank" rel="noopener">UU No. 8 Tahun 2016</a> menjamin hak pendidikan inklusif. Sekolah dilarang menolak ABK karena alasan disabilitas (prinsip zero reject).' },
    { q: 'Bagaimana cara memilih sekolah inklusi yang tepat?', a: 'Pilih sekolah yang memiliki: (1) izin penyelenggaraan inklusi dari Dinas Pendidikan, (2) Guru Pendamping Khusus (GPK) terlatih, (3) Program Pembelajaran Individual (PPI) untuk tiap ABK, (4) fasilitas aksesibilitas, dan (5) komitmen kepala sekolah serta budaya inklusif yang nyata. Kunjungi langsung sekolah, observasi kelas, dan diskusi dengan psikolog anak sebelum memutuskan.' },
  ],
  disabilitas: [
    { q: 'Apa definisi penyandang disabilitas menurut undang-undang?', a: 'Menurut <a href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" target="_blank" rel="noopener">UU No. 8 Tahun 2016 tentang Penyandang Disabilitas</a>, penyandang disabilitas adalah setiap orang yang mengalami keterbatasan fisik, intelektual, mental, dan/atau sensorik dalam jangka waktu lama yang dalam berinteraksi dengan lingkungan dapat mengalami hambatan dan kesulitan untuk berpartisipasi secara penuh dan efektif berdasarkan kesamaan hak.' },
    { q: 'Ada berapa jenis disabilitas yang diakui di Indonesia?', a: 'UU No. 8 Tahun 2016 mengakui empat jenis utama: (1) disabilitas fisik, (2) disabilitas intelektual, (3) disabilitas mental, dan (4) disabilitas sensorik. Selain itu diakui juga disabilitas ganda atau multi yang merupakan kombinasi dua atau lebih jenis di atas.' },
    { q: 'Apa hak penyandang disabilitas di Indonesia?', a: '<a href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" target="_blank" rel="noopener">UU No. 8 Tahun 2016</a> menjamin 22 hak penyandang disabilitas, antara lain hak pendidikan, pekerjaan, kewirausahaan, kesehatan, politik, keagamaan, keolahragaan, kebudayaan, pelayanan publik, aksesibilitas, perlindungan dari bencana, habilitasi/rehabilitasi, dan hak hidup secara mandiri.' },
    { q: 'Apa beda istilah difabel, disabilitas, dan berkebutuhan khusus?', a: 'Difabel (different ability) menekankan kemampuan berbeda, bukan kekurangan. Disabilitas adalah istilah resmi dalam UU yang menggambarkan kondisi keterbatasan. Anak berkebutuhan khusus (ABK) adalah istilah yang umum dipakai dalam pendidikan, mencakup anak dengan disabilitas maupun anak dengan kebutuhan khusus lain (seperti kecerdasan luar biasa).' },
    { q: 'Bagaimana cara mendapatkan Kartu Penyandang Disabilitas?', a: 'Penerbitan Kartu Penyandang Disabilitas diatur dalam Permensos No. 21 Tahun 2017. Permohonan diajukan ke Dinas Sosial setempat dengan melampirkan KTP, KK, surat keterangan dokter/RSUD, dan foto. Kartu ini memberi akses layanan dan bantuan khusus dari pemerintah.' },
  ],
  klinis: [
    { q: 'Apakah Down syndrome bisa dicegah?', a: 'Down syndrome adalah kondisi genetik (trisomi 21) yang tidak dapat dicegah, namun risiko meningkat seiring usia ibu saat hamil. Skrining prenatal (NIPT, USG, amniocentesis) dapat mendeteksi sejak kehamilan dini. Konsultasi dengan dokter kandungan dan konselor genetik sangat dianjurkan untuk ibu hamil berusia di atas 35 tahun atau dengan riwayat keluarga.' },
    { q: 'Apa itu disleksia?', a: 'Disleksia adalah kesulitan belajar spesifik (specific learning disorder) yang memengaruhi kemampuan membaca, mengeja, dan menulis, meskipun kecerdasan umum anak normal atau di atas rata-rata. Diagnosis dilakukan oleh psikolog pendidikan atau psikiater anak melalui asesmen menyeluruh.' },
    { q: 'Apakah anak dengan disabilitas intelektual bisa belajar mandiri?', a: 'Sangat bisa, tergantung tingkat keparahan dan dukungan yang diberikan. Banyak anak dengan disabilitas intelektual ringan-sedang mampu mengembangkan keterampilan hidup, sosial, dan vokasional dengan stimulasi, pendidikan inklusif, dan terapi yang tepat sejak dini. <a href="https://yankes.kemkes.go.id/view_artikel/1917/jangan-ambil-hak-anak-anak-meski-mereka-terlahir-berbeda" target="_blank" rel="noopener">Kemenkes</a> menegaskan ABK punya hak yang sama untuk berkembang.' },
    { q: 'Kapan harus konsultasi ke dokter terkait keterlambatan tumbuh kembang?', a: 'Segera konsultasi ke dokter anak atau ahli tumbuh kembang jika anak menunjukkan keterlambatan bahasa (belum mengoceh di usia 12 bulan, belum bicara kata bermakna di usia 18 bulan), motorik (belum duduk di 9 bulan, belum berjalan di 18 bulan), atau sosial (kontak mata kurang, tidak merespons nama). Deteksi dan intervensi dini menentukan kualitas perkembangan jangka panjang.' },
    { q: 'Apakah anak speech delay pasti autisme?', a: 'Tidak. Speech delay (keterlambatan bicara) dapat disebabkan banyak hal: gangguan pendengaran, kurang stimulasi, gangguan oral motor, lingkungan multilingual, atau gangguan perkembangan saraf seperti autisme. Asesmen oleh dokter spesialis, audiolog, dan terapis wicara wajib untuk menentukan penyebab dan penanganan yang tepat.' },
  ],
  abk: [
    { q: 'Apa itu anak berkebutuhan khusus?', a: 'Menurut <a href="https://yankes.kemkes.go.id/view_artikel/1917/jangan-ambil-hak-anak-anak-meski-mereka-terlahir-berbeda" target="_blank" rel="noopener">Kemenkes Yankes</a> dengan merujuk Panduan Kementerian PPPA, anak berkebutuhan khusus (ABK) adalah anak yang mengalami keterbatasan atau keluarbiasaan baik fisik, mental-intelektual, sosial, maupun emosional yang berpengaruh signifikan dalam proses tumbuh kembang dibandingkan anak seusianya. ABK bukan penyakit menular, melainkan kondisi yang dipicu beragam faktor.' },
    { q: 'Apa hak anak berkebutuhan khusus?', a: 'ABK memiliki hak yang sama dengan anak pada umumnya: hak hidup, pengasuhan layak, pendidikan, kesehatan, dan akses fasilitas umum. <a href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" target="_blank" rel="noopener">UU No. 8 Tahun 2016</a> menjamin hak-hak penyandang disabilitas secara komprehensif, termasuk hak atas perlindungan hukum dan aksesibilitas.' },
    { q: 'Bagaimana cara mendukung anak berkebutuhan khusus?', a: 'Dukungan utama datang dari keluarga: penerimaan, stimulasi, dan pendampingan konsisten. Selanjutnya akses layanan profesional (dokter anak, terapis, psikolog, sekolah inklusi/SLB). Masyarakat juga berperan dengan tidak diskriminatif dan menyediakan lingkungan inklusif. <a href="https://ayosehat.kemkes.go.id/topik-non-penyakit/kesehatan-lainnya/kumpulan-link-penting-untuk-anak-disabilitas" target="_blank" rel="noopener">Kemenkes Ayo Sehat</a> menyediakan kumpulan referensi resmi untuk keluarga dan pendidik.' },
    { q: 'Apakah anak berkebutuhan khusus bisa mandiri saat dewasa?', a: 'Banyak ABK yang dapat hidup mandiri saat dewasa, terutama jika mendapat intervensi dini, pendidikan inklusif, terapi yang tepat, dan dukungan keluarga konsisten. Tingkat kemandirian berbeda tiap anak tergantung jenis dan derajat kebutuhan khusus. Hindari ekspektasi tunggal: rayakan setiap kemajuan, dampingi sesuai kebutuhan.' },
    { q: 'Kapan harus mulai konsultasi tenaga profesional untuk ABK?', a: 'Sedini mungkin, idealnya begitu orang tua atau guru menemukan tanda-tanda perkembangan tidak seperti anak seusianya. Intervensi dini (usia 0-6 tahun) adalah masa kritis perkembangan saraf. Konsultasi dengan dokter anak, psikolog perkembangan, atau ahli tumbuh kembang adalah langkah pertama yang tepat sebelum mengandalkan informasi mandiri.' },
  ],
};

function pickFaqForFile(name) {
  const cats = topicCategoriesForFile(name);
  // Priority order: autisme > adhd > klinis > terapi > pendidikan > disabilitas > abk
  const priority = ['autisme', 'adhd', 'klinis', 'terapi', 'pendidikan', 'disabilitas', 'abk'];
  for (const p of priority) if (cats.includes(p) && FAQ_TEMPLATES[p]) return { cat: p, items: FAQ_TEMPLATES[p] };
  return { cat: 'abk', items: FAQ_TEMPLATES.abk };
}

// ====== HTML generators ======
function buildSourceFooter(srcKeys, ymyl) {
  const items = srcKeys.map(k => {
    const s = SOURCES[k];
    return `<li><a href="${s.url}" target="_blank" rel="noopener nofollow"><strong>${s.label}</strong></a> <span style="color:#666;">— ${s.host}</span></li>`;
  }).join('\n              ');
  const disclaimerNote = ymyl ? `
            <p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:0.95rem;line-height:1.6;">
              <strong>Disclaimer Medis &amp; Pendidikan:</strong> Artikel ini bersifat edukasi umum dan <strong>bukan pengganti konsultasi profesional</strong>. Untuk diagnosis, asesmen, atau penanganan anak berkebutuhan khusus, <strong>silakan konsultasikan langsung dengan dokter anak, psikiater anak, psikolog perkembangan, terapis okupasi, atau tenaga ahli pendidikan khusus yang berlisensi</strong>. YUKA Indonesia mendukung pendekatan multidisiplin dan tidak menggantikan peran tenaga medis maupun terapis profesional.
            </p>` : '';
  return `
        <!-- YMYL Source Footer + Disclaimer (auto-injected) -->
        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67;">
          <h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67;">Sumber Resmi &amp; Referensi Authoritative</h3>
          <p style="font-size:0.95rem;color:#444;margin-bottom:0.75rem;">Konten artikel ini diperkuat dengan referensi dari lembaga resmi pemerintah dan organisasi kesehatan internasional:</p>
          <ul style="margin:0.5rem 0 0;padding-left:1.5rem;font-size:0.95rem;line-height:1.8;">
              ${items}
          </ul>${disclaimerNote}
        </div>
`;
}

function buildFaqSection(items) {
  const qaHtml = items.map(it => `
            <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question" style="margin-bottom:1.25rem;">
              <h3 itemprop="name" style="font-size:1.1rem;color:#2B3A67;margin-bottom:0.5rem;">${it.q}</h3>
              <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                <p itemprop="text">${it.a}</p>
              </div>
            </div>`).join('');
  return `
        <!-- FAQ (auto-injected) -->
        <h2 id="faq" style="margin-top:2.5rem;">Pertanyaan yang Sering Diajukan (FAQ)</h2>
        <div class="article-faq" itemscope itemtype="https://schema.org/FAQPage">${qaHtml}
        </div>
`;
}

function buildFaqSchema(items) {
  const main = items.map(it => ({
    '@type': 'Question',
    'name': it.q,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': it.a.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
    }
  }));
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': main
  };
  return `\n    <!-- FAQ Schema (auto-injected) -->\n    <script type="application/ld+json">\n${JSON.stringify(schema, null, 8)}\n    </script>\n`;
}

// ====== Uplift driver ======
function isYmyl(filename) {
  // YMYL applies to ALL articles on yukaindonesia.com (health/education ABK is YMYL)
  // Exception: pure operational (transparansi-donasi, program-ramadhan, kisah) might not need medical disclaimer but still benefits from source citations
  return !/transparansi|kisah-|program-ramadhan|keutamaan/i.test(filename);
}

function alreadyUplifted(c) {
  return c.includes('YMYL Source Footer') || c.includes('article-sources');
}
function alreadyHasFaqInjected(c) {
  return c.includes('FAQ (auto-injected)') || /<div\s+class=["']article-faq["']/.test(c);
}
function alreadyHasFaqSchema(c) {
  return /["']@type["']\s*:\s*["']FAQPage["']/.test(c);
}

// Helper: replace a phrase with link only outside existing <a>...</a> blocks
function safeLinkReplace(html, regex, url) {
  // Split content by <a>...</a> blocks; only do replacement in non-anchor parts
  const parts = html.split(/(<a\s[^>]*>[\s\S]*?<\/a>)/g);
  let count = 0;
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      // Outside anchor - safe to replace
      parts[i] = parts[i].replace(regex, (m) => {
        count++;
        return `<a href="${url}" target="_blank" rel="noopener">${m}</a>`;
      });
    }
  }
  return { html: parts.join(''), count };
}

function uplift(name) {
  const file = path.join(ART_DIR, name);
  let c = fs.readFileSync(file, 'utf8');
  const before = c.length;

  const ymyl = isYmyl(name);
  const srcKeys = sourcesForFile(name);

  let injected = { sources: false, faq: false, schema: false };

  // ===== STEP 1: Replace fabricated authority claims FIRST (before injecting FAQ which has links) =====
  let replacements = 0;

  // UU No 8 Tahun 2016 (do this first - most specific match)
  {
    const r = safeLinkReplace(c, /\b(UU\s+No(?:mor)?\.?\s*8\s+Tahun\s+2016|Undang[- ]Undang\s+Nomor\s+8\s+Tahun\s+2016)\b/gi, SOURCES.uuDisabilitas.url);
    c = r.html; replacements += r.count;
  }

  // WHO unsourced
  {
    const r = safeLinkReplace(c, /\b(World Health Organization|\bWHO\b)(?!\.int|\/news|\/health)/g, SOURCES.whoAutism.url);
    c = r.html; replacements += r.count;
  }

  // Kemenkes unsourced
  {
    const r = safeLinkReplace(c, /\b(Kementerian Kesehatan|Kemenkes RI|Kemenkes)\b/g, SOURCES.ayoSehatDisabilitas.url);
    c = r.html; replacements += r.count;
  }

  // Kemdikbud / Kemendikbud unsourced
  {
    const r = safeLinkReplace(c, /\b(Kemdikbudristek|Kemendikbudristek|Kemdikbud|Kemendikbud|Kementerian Pendidikan)\b/g, SOURCES.kemdikbudInklusif.url);
    c = r.html; replacements += r.count;
  }

  if (replacements > 0) injected.refLinks = replacements;

  // ===== STEP 2: Inject FAQ section if missing =====
  // FAQ must be inserted BEFORE source footer for proper reading order
  if (!alreadyHasFaqInjected(c) && !alreadyHasFaqSchema(c)) {
    const { cat, items } = pickFaqForFile(name);
    // Insert FAQ before article-share div
    const shareIdx = c.indexOf('<div class="article-share">');
    if (shareIdx > -1) {
      let ins = shareIdx;
      while (ins > 0 && c[ins-1] !== '\n') ins--;
      const faqHtml = buildFaqSection(items);
      c = c.slice(0, ins) + faqHtml + c.slice(ins);
      injected.faq = true;
    }

    // Insert FAQ JSON-LD schema before </body>
    const schemaJson = buildFaqSchema(items);
    const bodyEndIdx = c.lastIndexOf('</body>');
    if (bodyEndIdx > -1) {
      c = c.slice(0, bodyEndIdx) + schemaJson + c.slice(bodyEndIdx);
      injected.schema = true;
    }
  }

  // ===== STEP 3: Inject YMYL Source Footer + Disclaimer AFTER FAQ, before article-share =====
  if (!alreadyUplifted(c)) {
    const shareIdx = c.indexOf('<div class="article-share">');
    if (shareIdx > -1) {
      const insertion = buildSourceFooter(srcKeys, ymyl);
      let ins = shareIdx;
      while (ins > 0 && c[ins-1] !== '\n') ins--;
      c = c.slice(0, ins) + insertion + c.slice(ins);
      injected.sources = true;
    }
  }

  // Write only if changed
  if (c.length !== before || replacements > 0) {
    fs.writeFileSync(file, c, 'utf8');
    return { file: name, action: 'uplifted', before, after: c.length, injected };
  }
  return { file: name, action: 'skipped', reason: 'no changes' };
}

// ====== Run ======
if (require.main === module) {
  const files = fs.readdirSync(ART_DIR).filter(f => f.endsWith('.html'));
  const results = [];
  files.forEach(f => {
    try {
      const r = uplift(f);
      results.push(r);
    } catch(e) {
      results.push({ file: f, action: 'error', error: e.message });
    }
  });

  // Summary
  const upl = results.filter(r => r.action === 'uplifted');
  const sk = results.filter(r => r.action === 'skipped');
  const err = results.filter(r => r.action === 'error');

  console.log('=== UPLIFT SUMMARY ===');
  console.log(`Total: ${results.length}`);
  console.log(`Uplifted: ${upl.length}`);
  console.log(`Skipped: ${sk.length}`);
  console.log(`Errors: ${err.length}`);

  const stats = { sources: 0, faq: 0, schema: 0, refLinks: 0 };
  upl.forEach(r => {
    if (r.injected?.sources) stats.sources++;
    if (r.injected?.faq) stats.faq++;
    if (r.injected?.schema) stats.schema++;
    if (r.injected?.refLinks) stats.refLinks += r.injected.refLinks;
  });
  console.log('Injected:', stats);

  if (err.length) {
    console.log('\nERRORS:');
    err.forEach(r => console.log(`  ${r.file}: ${r.error}`));
  }

  // Save report
  fs.writeFileSync(path.join(__dirname, '..', 'data', 'uplift-report.json'), JSON.stringify(results, null, 2));
}

module.exports = { uplift, sourcesForFile, pickFaqForFile };

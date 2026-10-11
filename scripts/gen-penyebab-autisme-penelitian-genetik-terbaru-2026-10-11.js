#!/usr/bin/env node
/*
 * Artikel baru: penyebab-autisme-penelitian-genetik-terbaru (Trello 62O4Qj5E, 2026-10-11).
 *
 * Pembeda dari artikel/apa-penyebab-autis-pada-anak (gambaran umum penyebab tanpa angka):
 * artikel ini membedah BUKTI penelitiannya, yaitu studi kembar dan populasi besar
 * (heritabilitas), penemuan gen risiko (exome, GWAS, SFARI Gene), mutasi de novo,
 * faktor prenatal yang didukung data, serta mitos vaksin, parasetamol, dan pola asuh.
 * Artikel umum itu diberi tautan ke sini dari bagian faktor genetiknya.
 *
 * Semua angka dibaca dari teks mentah sumber pada 11 Oktober 2026: abstrak/teks penuh
 * PubMed/PMC/Europe PMC, WHO (fact sheet autisme dan pernyataan 24 September 2025),
 * NICHD, NHS, National Autistic Society, SFARI Gene, dan IDAI. Halaman CDC tentang vaksin
 * dan autisme TIDAK dipakai sebagai rujukan karena redaksinya diubah (dibaca 11 Okt 2026).
 * Status tinjauan medis dipasang jujur oleh ensureArticleShell (belum ditinjau dokter).
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
  bai: { label: 'Bai D, dkk. (2019). Association of Genetic and Environmental Factors With Autism in a 5-Country Cohort. JAMA Psychiatry 76(10). PMC6646998', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6646998/' },
  sandin: { label: 'Sandin S, dkk. (2017). The Heritability of Autism Spectrum Disorder. JAMA 318(12). PMC5818813', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5818813/' },
  tick: { label: 'Tick B, dkk. (2016). Heritability of autism spectrum disorders: a meta-analysis of twin studies. J Child Psychol Psychiatry 57(5). PMC4996332', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4996332/' },
  satterstrom: { label: 'Satterstrom FK, dkk. (2020). Large-Scale Exome Sequencing Study Implicates Both Developmental and Functional Changes in the Neurobiology of Autism. Cell 180(3). PMC7250485', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7250485/' },
  fu: { label: 'Fu JM, dkk. (2022). Rare coding variation provides insight into the genetic architecture and phenotypic context of autism. Nature Genetics 54. PMC9653013', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9653013/' },
  grove: { label: 'Grove J, dkk. (2019). Identification of common genetic risk variants for autism spectrum disorder. Nature Genetics 51. PMC6454898', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6454898/' },
  litman: { label: 'Litman A, dkk. (2025). Decomposition of phenotypic heterogeneity in autism reveals underlying genetic programs. Nature Genetics. PMC12283356', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12283356/' },
  sfari: { label: 'SFARI Gene: About the Gene Scoring Module', url: 'https://gene.sfari.org/about-gene-scoring/' },
  nichd: { label: 'NICHD (NIH): What causes autism?', url: 'https://www.nichd.nih.gov/health/topics/autism/conditioninfo/causes' },
  whoFact: { label: 'WHO: Autism (fact sheet)', url: 'https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders' },
  whoStatement: { label: 'WHO (24 September 2025): WHO statement on autism-related issues', url: 'https://www.who.int/news/item/24-09-2025-who-statement-on-autism-related-issues' },
  hviid: { label: 'Hviid A, dkk. (2019). Measles, Mumps, Rubella Vaccination and Autism: A Nationwide Cohort Study. Annals of Internal Medicine 170(8). PMID 30831578', url: 'https://pubmed.ncbi.nlm.nih.gov/30831578/' },
  idai: { label: 'IDAI (2015): MMR Tidak Menyebabkan Autisme (Bagian 2)', url: 'https://www.idai.or.id/artikel/klinik/imunisasi/mmr-tidak-menyebabkan-autisme-bagian-2' },
  nhs: { label: 'NHS: What is autism?', url: 'https://www.nhs.uk/conditions/autism/what-is-autism/' },
  christensen: { label: 'Christensen J, dkk. (2013). Prenatal valproate exposure and risk of autism spectrum disorders and childhood autism. JAMA 309(16). PMC4511955', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4511955/' },
  suren: { label: 'Surén P, dkk. (2013). Association between maternal use of folic acid supplements and risk of autism spectrum disorders in children. JAMA 309(6). PMC3908544', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3908544/' },
  reichenberg: { label: 'Reichenberg A, dkk. (2006). Advancing paternal age and autism. Archives of General Psychiatry 63(9). PMID 16953005', url: 'https://pubmed.ncbi.nlm.nih.gov/16953005/' },
  ahlqvist: { label: 'Ahlqvist VH, dkk. (2024). Acetaminophen Use During Pregnancy and Children\'s Risk of Autism, ADHD, and Intellectual Disability. JAMA 331(14). PMID 38592388', url: 'https://pubmed.ncbi.nlm.nih.gov/38592388/' },
  nasCauses: { label: 'National Autistic Society: What causes autism?', url: 'https://www.autism.org.uk/advice-and-guidance/about-autism/what-causes-autism' },
  nasMyths: { label: 'National Autistic Society: Myths about the causes of autism', url: 'https://www.autism.org.uk/advice-and-guidance/about-autism/myths-about-the-causes-of-autism' },
  schaefer: { label: 'Schaefer GB, Mendelsohn NJ (2013). Clinical genetics evaluation in identifying the etiology of autism spectrum disorders: 2013 guideline revisions. Genetics in Medicine 15(5). PMID 23519317', url: 'https://pubmed.ncbi.nlm.nih.gov/23519317/' },
};
const NOTE = 'Semua angka dibaca dari teks asli abstrak atau artikel penelitian (PubMed, PMC) dan halaman resmi WHO, NICHD, NHS, National Autistic Society, SFARI Gene, dan IDAI pada 11 Oktober 2026. Tahun terbit tiap penelitian disebut di dalam teks. Ringkasan ini membantu orang tua memahami arah penelitian, tetapi tidak dapat dipakai untuk menetapkan diagnosis atau memilih tes.';

const FAQ = [
  ['Apa penyebab utama autisme menurut penelitian?', 'Penelitian populasi besar menunjukkan faktor genetik adalah penyumbang terbesar. Studi lima negara yang terbit di JAMA Psychiatry tahun 2019 (Bai dan rekan) memperkirakan heritabilitas autisme sekitar 80 persen. Faktor lain di masa kehamilan dan kelahiran ikut berperan, tetapi pengaruhnya jauh lebih kecil dan biasanya bekerja bersama faktor genetik.'],
  ['Apakah autisme pasti diturunkan dari orang tua?', 'Tidak selalu. Sebagian besar risiko genetik memang diwariskan dari orang tua, sering dari kombinasi banyak varian gen kecil yang tidak menimbulkan autisme pada orang tua itu sendiri. Sebagian lain berasal dari mutasi de novo, yaitu perubahan gen baru yang muncul pada sel telur, sperma, atau awal perkembangan janin dan tidak dimiliki ayah maupun ibu.'],
  ['Apakah ada satu gen autisme?', 'Tidak ada. NICHD (NIH) menyebut lebih dari 100 gen pada berbagai kromosom dapat terlibat, dan penelitian sekuensing besar tahun 2020 dan 2022 menemukan 102 dan 72 gen dengan bukti kuat. Penelitian GWAS tahun 2019 menunjukkan varian gen yang umum di masyarakat juga ikut menyumbang. Gambaran ini disebut poligenik, artinya banyak gen bekerja bersama.'],
  ['Apakah vaksin MMR atau vaksin lain menyebabkan autisme?', 'Tidak. WHO dalam pernyataan 24 September 2025 menegaskan ada bukti yang kuat dan luas bahwa vaksin anak tidak menyebabkan autisme. Studi Denmark terhadap 657.461 anak (Hviid dan rekan, 2019) tidak menemukan peningkatan risiko autisme setelah vaksin MMR. IDAI juga menyatakan MMR tidak menyebabkan autisme. Tetap lengkapi imunisasi anak sesuai jadwal.'],
  ['Apakah pola asuh yang dingin atau kurang perhatian menyebabkan autisme?', 'Tidak. Teori "ibu kulkas" (refrigerator mother) dari pertengahan abad ke-20 sudah lama dibantah. National Autistic Society menegaskan bahwa cara orang tua mengasuh tidak dapat membuat anak menjadi autis. Pola asuh tetap penting untuk kesejahteraan dan perkembangan anak, tetapi bukan penyebab autisme.'],
  ['Apakah minum parasetamol saat hamil menyebabkan autisme?', 'Bukti yang ada tidak menunjukkan hubungan sebab akibat. Studi Swedia terhadap 2.480.797 anak (Ahlqvist dan rekan, JAMA 2024) tidak menemukan hubungan parasetamol saat hamil dengan autisme ketika saudara kandung dibandingkan satu sama lain. WHO pada 24 September 2025 juga menyatakan belum ada bukti ilmiah yang meyakinkan. Ibu hamil tetap sebaiknya memakai obat apa pun sesuai saran tenaga kesehatan.'],
  ['Apakah tes genetik bisa memastikan anak autis atau tidak?', 'Tidak. Autisme didiagnosis lewat pengamatan perilaku dan riwayat perkembangan oleh profesional. National Autistic Society menegaskan tidak ada tes genetik yang dapat mendiagnosis autisme atau meramalkan apakah seorang anak akan autis. Pada anak yang sudah terdiagnosis, dokter kadang menyarankan pemeriksaan genetik untuk mencari kondisi penyerta atau penyebab tertentu, dan keputusan itu dibahas bersama dokter.'],
  ['Kalau anak pertama autis, berapa peluang adiknya juga autis?', 'Peluangnya lebih tinggi dibanding keluarga tanpa anak autis, tetapi tidak pasti. National Autistic Society menjelaskan bahwa makin dekat hubungan keluarga, makin besar kemungkinannya, dan bahkan pada kembar identik ada keluarga di mana hanya satu anak yang autis. Untuk perhitungan yang sesuai kondisi keluarga Anda, konsultasikan ke dokter atau konselor genetik.'],
  ['Apakah usia orang tua yang lebih tua menyebabkan autisme?', 'Usia ayah atau ibu yang lebih tua dikaitkan dengan sedikit kenaikan peluang, bukan penyebab langsung. WHO mencantumkan usia orang tua lanjut sebagai salah satu faktor yang lebih sering ditemukan. National Autistic Society menekankan banyak orang tua berusia lanjut memiliki anak yang tidak autis, dan pengaruhnya hanya muncul bila sudah ada kecenderungan genetik.'],
].map(([q, a]) => ({ q, a }));

const a = {
  slug: 'penyebab-autisme-penelitian-genetik-terbaru',
  titleTag: 'Penyebab Autisme: Penelitian Genetik Terbaru | YUKA',
  metaDesc: 'Penyebab autisme menurut riset genetik 2019 sampai 2025: heritabilitas sekitar 80 persen, gen risiko, mutasi de novo, fakta vaksin. Baca selengkapnya.',
  keywords: 'penyebab autisme penelitian genetik terbaru, penyebab autisme genetik, heritabilitas autisme, gen autisme, mutasi de novo autisme, apakah autisme keturunan, vaksin tidak menyebabkan autisme',
  ogTitle: 'Penyebab Autisme: Apa Kata Penelitian Genetik Terbaru',
  ogDesc: 'Ringkasan bukti tentang penyebab autisme: studi kembar dan populasi besar, gen risiko, mutasi de novo, faktor kehamilan, dan mitos yang sudah dibantah.',
  datePublished: '2026-10-11T09:00:00+07:00',
  dateModified: '2026-10-11T09:00:00+07:00',
  dateDisplay: '11 Oktober 2026',
  readTime: '13 menit baca',
  category: 'Pendidikan',
  h1: 'Penyebab Autisme: Apa Kata Penelitian Genetik Terbaru',
  crumb: 'Penyebab Autisme: Penelitian Genetik',
  parent: { href: 'autisme-adalah', name: 'Autisme' },
  about: ['Gangguan spektrum autisme', 'Genetika autisme', 'Faktor risiko prenatal'],
  image: {
    file: 'Dokumentasi/artikel/strategi-mengajar-anak-autis-di-kelas-pendampingan.webp',
    w: 760, h: 475,
    alt: 'Seseorang duduk bersila di lantai menulis di meja lipat hitam, di sebelahnya meja lipat lain berisi gunting dan manik-manik',
    caption: 'Suasana belajar di ruang kegiatan YUKA: menulis di meja lipat sambil duduk di lantai.' + PHOTO_NOTE,
    credit: CREDIT,
  },
  tags: ['autisme', 'penyebab autisme', 'genetika', 'penelitian autisme', 'anak berkebutuhan khusus'],
  sourcesCheckedNote: NOTE,
  sources: [SRC.bai, SRC.sandin, SRC.tick, SRC.satterstrom, SRC.fu, SRC.grove, SRC.litman, SRC.sfari, SRC.nichd, SRC.whoFact, SRC.whoStatement, SRC.hviid, SRC.idai, SRC.nhs, SRC.christensen, SRC.suren, SRC.reichenberg, SRC.ahlqvist, SRC.nasCauses, SRC.nasMyths, SRC.schaefer],
  related: [
    { href: 'apa-penyebab-autis-pada-anak', title: 'Apa Penyebab Autis pada Anak? Penjelasan Berbasis Sains', desc: 'Gambaran umum penyebab autisme dengan bahasa sederhana untuk orang tua.' },
    { href: 'autisme-adalah', title: 'Autisme Adalah: Pengertian, Ciri, dan Penanganan', desc: 'Panduan utama tentang gangguan spektrum autisme.' },
    { href: 'gut-microbiome-dan-autisme-penelitian', title: 'Gut Microbiome dan Autisme: Apa Kata Penelitian', desc: 'Topik penelitian lain yang sering ditanyakan orang tua.' },
    { href: 'apa-itu-autisme-level-1-2-3', title: 'Apa Itu Autisme Level 1, 2, dan 3', desc: 'Tingkat dukungan yang dibutuhkan anak autis.' },
  ],
  faq: FAQ,
  bodyHtml: '',
};

a.bodyHtml = `
<div class="jawaban-singkat" style="background:#F8F9FF;border-left:4px solid #2B3A67;padding:1rem 1.25rem;border-radius:0 10px 10px 0;margin:1.5rem 0;"><strong>Jawaban singkat:</strong> penelitian populasi besar menunjukkan <strong>faktor genetik adalah penyumbang terbesar</strong> penyebab autisme. Studi lima negara tahun 2019 memperkirakan heritabilitasnya sekitar <strong>80 persen</strong>. Risiko genetik itu berasal dari banyak gen sekaligus, sebagian diwariskan dan sebagian berupa mutasi baru (de novo). Beberapa faktor di masa kehamilan dan kelahiran ikut menambah peluang dalam porsi kecil. <strong>Vaksin tidak menyebabkan autisme, dan pola asuh tidak menyebabkan autisme.</strong> Artikel ini untuk memahami penelitian, bukan untuk mendiagnosis; diagnosis hanya ditetapkan oleh tenaga profesional berizin.</div>
${toc([
    ['ringkasan', 'Gambaran besar: genetik dan lingkungan'],
    ['heritabilitas', 'Seberapa besar peran genetik: studi kembar dan populasi'],
    ['gen-risiko', 'Gen risiko yang sudah ditemukan'],
    ['de-novo', 'Diwariskan atau mutasi baru (de novo)'],
    ['subtipe', 'Temuan 2025: kelompok autisme dengan pola genetik berbeda'],
    ['prenatal', 'Faktor kehamilan dan kelahiran yang didukung bukti'],
    ['bukan-penyebab', 'Yang terbukti bukan penyebab autisme'],
    ['tes-genetik', 'Bagaimana dengan tes genetik?'],
    ['orang-tua', 'Apa artinya bagi orang tua'],
    ['faq', 'Pertanyaan yang sering diajukan'],
  ])}
${P(`"Apa yang menyebabkan anak saya autis?" adalah salah satu pertanyaan pertama yang muncul setelah orang tua menerima diagnosis. Di balik pertanyaan itu sering ada rasa bersalah: apakah karena makanan saat hamil, karena vaksin, karena terlalu sibuk bekerja, atau karena kurang mengajak anak bicara. Sayangnya, informasi di media sosial sering memperbesar rasa bersalah itu dengan klaim yang tidak berdasar.`)}
${P(`Artikel ini merangkum apa yang sungguh-sungguh ditemukan oleh penelitian, terutama penelitian genetik berskala besar yang terbit antara tahun 2016 dan 2025. Setiap angka di sini kami ambil langsung dari abstrak atau teks penelitiannya, lengkap dengan tahun terbit, supaya Anda bisa memeriksanya sendiri. Jika Anda mencari penjelasan yang lebih ringkas dan umum, baca dulu ${L('apa-penyebab-autis-pada-anak', 'apa penyebab autis pada anak')}. Untuk pengertian dasar autisme, lihat ${L('autisme-adalah', 'panduan autisme')}.`)}

${H2('ringkasan', 'Gambaran besar: genetik dan lingkungan')}
${P(`${X(SRC.whoFact.url, 'WHO')} menjelaskan bahwa kemungkinan ada banyak faktor yang membuat seorang anak lebih mungkin autis, termasuk faktor lingkungan dan genetik. ${X(SRC.nichd.url, 'NICHD, lembaga kesehatan anak di bawah NIH Amerika Serikat')}, menyebut banyak bukti mendukung bahwa gen adalah salah satu penyebab utama atau penyumbang besar autisme, dan bahwa autisme kemungkinan besar tidak berasal dari satu penyebab, melainkan gabungan beberapa penyebab.`)}
${P(`Supaya tidak salah paham, ada tiga istilah yang perlu disepakati. <strong>Faktor genetik</strong> adalah perbedaan pada DNA, baik yang diwariskan dari orang tua maupun yang muncul baru. <strong>Faktor lingkungan</strong> dalam penelitian autisme tidak berarti suasana rumah atau cara mendidik. Yang dimaksud adalah hal-hal biologis di luar DNA, misalnya kondisi kehamilan, obat tertentu, infeksi, atau kelahiran prematur. <strong>Faktor risiko</strong> berarti sesuatu yang lebih sering ditemukan pada anak autis, bukan sesuatu yang pasti menyebabkan autisme.`)}
${P(`${X(SRC.nasCauses.url, 'National Autistic Society')}, organisasi autisme terbesar di Inggris, merangkumnya dengan lugas: kebanyakan orang autis menjadi autis karena gen yang mereka terima dari orang tua, dan faktor lain yang lebih jarang biasanya bekerja bersama gen tersebut, bukan sendirian. Gambaran ini konsisten dengan penelitian yang kami bahas di bawah.`)}

${H2('heritabilitas', 'Seberapa besar peran genetik: studi kembar dan populasi')}
${P(`Cara klasik untuk mengukur peran genetik adalah membandingkan kembar identik (yang berbagi hampir seluruh DNA) dengan kembar tidak identik atau saudara kandung biasa (yang berbagi sekitar separuh DNA). Kalau kembar identik jauh lebih sering sama-sama autis, berarti genetik berperan besar. Hasil perhitungannya disebut <strong>heritabilitas</strong>.`)}
${P(`Satu hal penting sebelum melihat angkanya: heritabilitas 80 persen <strong>tidak berarti</strong> peluang seorang anak menurunkan autisme adalah 80 persen. Heritabilitas adalah ukuran tingkat populasi, yaitu seberapa besar perbedaan risiko autisme antarorang di suatu populasi dapat dijelaskan oleh perbedaan genetik. Angka ini tidak bisa dipakai untuk meramal satu anak atau satu keluarga.`)}
<table><thead><tr><th>Penelitian (tahun terbit)</th><th>Data yang dipakai</th><th>Temuan heritabilitas</th></tr></thead><tbody>
<tr><td>Tick dan rekan, meta-analisis studi kembar (2016)</td><td>7 studi kembar yang memenuhi kriteria, ditambah sampel populasi 6.413 pasang kembar</td><td>64 sampai 91 persen; korelasi pada kembar identik 0,98</td></tr>
<tr><td>Sandin dan rekan, JAMA (2017)</td><td>Anak lahir di Swedia 1982 sampai 2006: 37.570 pasang kembar dan lebih dari 2,6 juta pasang saudara kandung; 14.516 anak terdiagnosis autisme</td><td>83 persen (rentang keyakinan 79 sampai 87 persen)</td></tr>
<tr><td>Bai dan rekan, JAMA Psychiatry (2019)</td><td>2.001.631 anak lahir 1998 sampai 2011 di Denmark, Finlandia, Swedia, Israel, dan Australia Barat; 22.156 terdiagnosis autisme</td><td>Median 80,8 persen; antarnegara berkisar 50,9 persen (Finlandia) sampai 86,8 persen (Israel); efek maternal 0,4 sampai 1,6 persen</td></tr>
</tbody></table>
${P(`Penelitian yang paling sering dikutip adalah ${X(SRC.bai.url, 'studi lima negara oleh Bai dan rekan di JAMA Psychiatry tahun 2019')}. Penelitian ini mengikuti lebih dari dua juta anak sampai usia 16 tahun. Kesimpulannya, heritabilitas autisme diperkirakan sekitar 80 persen, yang berarti variasi kejadian autisme di populasi sebagian besar dipengaruhi faktor genetik yang diwariskan. Peneliti juga tidak menemukan dukungan untuk kontribusi efek maternal, yaitu pengaruh kondisi ibu di luar gen yang diturunkannya, yang diperkirakan hanya 0,4 sampai 1,6 persen.`)}
${P(`${X(SRC.sandin.url, 'Penelitian Sandin dan rekan di JAMA tahun 2017')} memakai data Swedia dan mendapatkan angka 83 persen. Sementara itu, ${X(SRC.tick.url, 'meta-analisis Tick dan rekan tahun 2016')} yang menggabungkan studi kembar sebelumnya mendapatkan rentang 64 sampai 91 persen, dan menyimpulkan bahwa autisme terutama disebabkan oleh pengaruh genetik yang kuat.`)}
${P(`Apa artinya sisa sekitar 20 persen? Bagian itu dijelaskan oleh faktor nongenetik, terutama faktor yang tidak sama antara dua saudara, seperti kondisi di dalam kandungan atau saat kelahiran. Porsi lingkungan yang dibagi bersama oleh saudara kandung, seperti suasana rumah yang sama, ternyata kecil. Dalam model lengkap penelitian Swedia 2017, porsinya diperkirakan hanya 4 persen, dan model terbaik penelitian itu bahkan tidak memerlukannya. Meta-analisis 2016 memang menemukan porsi lingkungan bersama yang lebih besar bila prevalensi autisme diasumsikan rendah, tetapi penulisnya tetap menyimpulkan pengaruh genetik yang kuat.`)}
${fig('Dokumentasi/artikel/empati-anak-berkebutuhan-khusus-tangan-bersama.webp', 'Tangan orang dewasa menadahkan biji jeruk sementara tangan anak berbaju putih memeras jeruk ke saringan hijau di atas teko', 'Kegiatan memeras jeruk bersama pendamping di YUKA. Kegiatan sederhana seperti ini melatih koordinasi tangan dan kerja sama.' + PHOTO_NOTE, 520, 400)}

${H2('gen-risiko', 'Gen risiko yang sudah ditemukan')}
${P(`Kalau genetik berperan besar, gen mana yang terlibat? Jawabannya: banyak sekali. ${X(SRC.nichd.url, 'NICHD')} menyebut lebih dari 100 gen di berbagai kromosom mungkin terlibat dengan kadar yang berbeda-beda. NICHD juga mengingatkan bahwa hubungannya rumit: kebanyakan orang autis memiliki kombinasi perubahan gen yang berbeda, dan banyak orang yang tidak autis juga membawa sebagian perubahan gen yang dikaitkan dengan autisme.`)}
${P(`Penelitian genetik autisme bergerak sangat cepat dalam satu dekade terakhir karena biaya membaca DNA turun drastis. Berikut beberapa penelitian besar yang menjadi tonggak.`)}
<table><thead><tr><th>Penelitian (tahun terbit)</th><th>Jenis penelitian dan jumlah sampel</th><th>Temuan utama</th></tr></thead><tbody>
<tr><td>Grove dan rekan, Nature Genetics (2019)</td><td>GWAS (pemindaian varian gen umum): 18.381 orang autis dan 27.969 pembanding</td><td>5 lokasi genom pertama yang terbukti signifikan untuk autisme, ditambah 7 lokasi lain yang berbagi dengan skizofrenia, depresi, dan capaian pendidikan</td></tr>
<tr><td>Satterstrom dan rekan, Cell (2020)</td><td>Sekuensing eksom (bagian DNA penyandi protein): 35.584 sampel, 11.986 di antaranya autis</td><td>102 gen risiko; kebanyakan aktif di awal perkembangan otak dan berperan mengatur ekspresi gen atau komunikasi antarsel saraf</td></tr>
<tr><td>Fu dan rekan, Nature Genetics (2022)</td><td>Analisis varian langka: 63.237 orang</td><td>72 gen terkait autisme dengan ambang ketat (185 gen dengan ambang lebih longgar); digabung dengan data keterlambatan perkembangan menjadi 373 gen</td></tr>
</tbody></table>
${P(`Dua jenis variasi genetik perlu dibedakan. <strong>Varian umum</strong> adalah perbedaan kecil yang dimiliki banyak orang di masyarakat. Satu varian umum hanya menambah risiko sangat sedikit, tetapi ratusan sampai ribuan varian bisa menumpuk. ${X(SRC.grove.url, 'Grove dan rekan (2019)')} menyebut varian umum menyumbang cukup besar terhadap kerentanan autisme. <strong>Varian langka</strong> adalah perubahan yang jarang ditemukan di populasi, tetapi efeknya pada satu orang bisa jauh lebih besar. Penelitian ${X(SRC.satterstrom.url, 'Satterstrom (2020)')} dan ${X(SRC.fu.url, 'Fu (2022)')} berfokus pada jenis kedua ini.`)}
${P(`Temuan menarik dari ${X(SRC.satterstrom.url, 'Satterstrom dan rekan')} adalah bahwa sebagian besar gen risiko bekerja di masa awal perkembangan otak, jauh sebelum anak lahir. Ini sejalan dengan pemahaman bahwa autisme adalah kondisi perkembangan saraf yang sudah ada sejak awal kehidupan, bukan sesuatu yang "tertular" atau "terpicu" setelah anak besar.`)}
${H3('SFARI Gene: basis data gen autisme')}
${P(`Para peneliti di seluruh dunia mencatat bukti tiap gen dalam basis data ${X(SRC.sfari.url, 'SFARI Gene')} yang dikelola Simons Foundation. Setiap gen diberi skor menurut kekuatan buktinya. Kategori 1 berarti "keyakinan tinggi": gen tersebut jelas terlibat dalam autisme, biasanya karena sudah dilaporkan setidaknya tiga mutasi de novo yang merusak fungsi gen tersebut. Kategori yang lebih tinggi angkanya berarti buktinya lebih lemah. Ada juga penanda S (sindromik) untuk gen yang terkait sindrom genetik tertentu, di mana autisme sering muncul bersama ciri lain. Daftar ini terus diperbarui seiring penelitian baru, jadi jumlah gennya berubah dari waktu ke waktu.`)}

${H2('de-novo', 'Diwariskan atau mutasi baru (de novo)')}
${P(`Salah satu temuan yang sering membingungkan orang tua: bagaimana anak bisa autis kalau tidak ada anggota keluarga yang autis? Jawabannya ada pada dua jalur genetik.`)}
${ul([
    '<strong>Jalur diwariskan.</strong> Anak menerima kombinasi varian gen dari ayah dan ibu. Orang tua bisa membawa sebagian varian itu tanpa menjadi autis, karena jumlahnya belum cukup atau kombinasinya berbeda. ' + X(SRC.nasCauses.url, 'National Autistic Society') + ' menjelaskan banyak orang tua dari anak autis tidak autis, walau mungkin berbagi sebagian gen yang terkait.',
    '<strong>Jalur de novo.</strong> Perubahan gen baru muncul secara acak pada sel sperma, sel telur, atau pada awal perkembangan janin. Perubahan ini tidak dimiliki oleh ayah maupun ibu. Menurut National Autistic Society, sebagian perubahan acak ini membuat seseorang sangat mungkin autis, dan orang dengan lebih banyak perubahan acak juga lebih mungkin mengalami disabilitas intelektual dan masalah kesehatan lain.',
  ])}
${P(`Penelitian ${X(SRC.fu.url, 'Fu dan rekan (2022)')} memberi gambaran seberapa besar peran mutasi de novo dalam menemukan gen risiko. Dari seluruh bukti yang mengaitkan gen dengan autisme dalam penelitian itu, varian de novo yang memotong protein menyumbang 57,5 persen, varian missense yang merusak 21,1 persen, dan perubahan jumlah salinan DNA (CNV) 8,44 persen. Perubahan jumlah salinan DNA adalah bagian DNA yang hilang atau berlipat, dan dalam penelitian itu jenis inilah yang memberi kenaikan risiko relatif terbesar.`)}
${P(`Kenapa ini penting bagi orang tua? Karena mutasi de novo terjadi secara acak. Tidak ada yang dilakukan atau tidak dilakukan orang tua yang menimbulkannya. Pengetahuan ini sering membantu orang tua melepaskan rasa bersalah yang tidak perlu.`)}
${fig('Dokumentasi/artikel/terapi-integrasi-sensorik-di-rumah-memeras-lemon.webp', 'Tangan anak berbaju merah memeras jeruk ke saringan hijau di atas teko plastik yang dipegangi tangan orang dewasa', 'Pendamping memegangi teko sementara anak memeras jeruk. Pembagian tugas yang jelas membantu anak menyelesaikan kegiatan.' + PHOTO_NOTE, 600, 400)}

${H2('subtipe', 'Temuan 2025: kelompok autisme dengan pola genetik berbeda')}
${P(`Salah satu penelitian terbaru yang banyak dibicarakan terbit di ${X(SRC.litman.url, 'Nature Genetics tahun 2025 oleh Litman dan rekan')}. Peneliti menganalisis 239 ciri perkembangan, perilaku, dan kesehatan dari 5.392 anak autis yang juga memiliki data genetik, lalu memakai model statistik untuk mengelompokkan mereka.`)}
${P(`Hasilnya, anak-anak tersebut terbagi menjadi empat kelompok dengan pola ciri yang berbeda. Keempatnya diberi nama oleh peneliti sebagai berikut.`)}
<table><thead><tr><th>Kelompok (nama dalam penelitian)</th><th>Jumlah anak dalam sampel</th></tr></thead><tbody>
<tr><td>Social/behavioral (tantangan sosial dan perilaku)</td><td>1.976</td></tr>
<tr><td>Moderate challenges (tantangan sedang)</td><td>1.860</td></tr>
<tr><td>Mixed ASD with DD (autisme dengan keterlambatan perkembangan)</td><td>1.002</td></tr>
<tr><td>Broadly affected (terdampak luas)</td><td>554</td></tr>
</tbody></table>
${P(`Yang membuat penelitian ini penting adalah temuan bahwa tiap kelompok berkaitan dengan pola genetik yang berbeda, baik varian umum, varian de novo, maupun varian yang diwariskan. Peneliti juga menemukan bahwa perbedaan waktu aktifnya gen yang terdampak selaras dengan perbedaan perjalanan klinis antarkelompok. Dengan kata lain, autisme kemungkinan bukan satu kondisi dengan satu jalur penyebab, melainkan beberapa jalur biologis yang berbeda.`)}
${P(`Perlu diingat, ini temuan penelitian, belum menjadi alat diagnosis. Kelompok-kelompok ini belum dipakai dalam pedoman diagnosis resmi, dan dokter di Indonesia maupun di negara lain belum menggolongkan anak berdasarkan kelompok tersebut. Penelitian lanjutan masih dibutuhkan sebelum temuan ini bisa membantu perencanaan layanan.`)}

${H2('prenatal', 'Faktor kehamilan dan kelahiran yang didukung bukti')}
${P(`Genetik bukan satu-satunya cerita. ${X(SRC.whoFact.url, 'WHO')} mencatat beberapa faktor lingkungan lebih sering ditemukan pada anak autis atau orang tuanya, yaitu usia orang tua yang lebih tua, diabetes pada ibu selama kehamilan, paparan polusi udara atau logam berat tertentu sebelum lahir, kelahiran prematur, komplikasi kelahiran berat, dan berat lahir rendah. WHO juga menyebut paparan obat antikejang valproat dan karbamazepin selama kehamilan lebih sering ditemukan pada anak autis.`)}
<table><thead><tr><th>Faktor</th><th>Contoh bukti (tahun terbit)</th><th>Cara membacanya</th></tr></thead><tbody>
<tr><td>Obat antikejang valproat selama hamil</td><td>${X(SRC.christensen.url, 'Christensen dan rekan, JAMA 2013')}: dari 655.615 anak di Denmark, 508 anak yang terpapar valproat memiliki risiko absolut autisme 4,42 persen, dibanding 1,53 persen pada seluruh kelompok</td><td>Salah satu faktor lingkungan dengan bukti paling jelas. Ibu yang memakai valproat jangan menghentikan obat sendiri; bicarakan dengan dokter sebelum atau saat merencanakan kehamilan</td></tr>
<tr><td>Rubela (campak Jerman) pada trimester pertama</td><td>${X(SRC.nasCauses.url, 'National Autistic Society')} menyebut rubela pada awal kehamilan dan valproat sebagai dua faktor lingkungan yang sangat meningkatkan kemungkinan autisme</td><td>Dapat dicegah dengan imunisasi rubela sebelum hamil. Ini justru alasan untuk melengkapi imunisasi</td></tr>
<tr><td>Usia ayah lebih tua</td><td>${X(SRC.reichenberg.url, 'Reichenberg dan rekan, 2006')}: di Israel, anak dari ayah berusia 40 tahun ke atas 5,75 kali lebih mungkin autis dibanding anak dari ayah di bawah 30 tahun</td><td>Peneliti menduga terkait mutasi de novo yang bertambah seiring usia. Peluang absolutnya tetap kecil</td></tr>
<tr><td>Kelahiran prematur, berat lahir rendah, komplikasi kelahiran berat</td><td>Tercantum dalam ${X(SRC.whoFact.url, 'fact sheet WHO')}</td><td>Dikaitkan dengan peluang sedikit lebih tinggi, bukan penyebab pasti</td></tr>
<tr><td>Asam folat di awal kehamilan</td><td>${X(SRC.suren.url, 'Surén dan rekan, JAMA 2013')}: di Norwegia, anak dari ibu yang minum asam folat sekitar masa pembuahan memiliki rasio odds 0,61 untuk gangguan autistik</td><td>Dikaitkan dengan risiko lebih rendah. Peneliti menegaskan hasil ini belum membuktikan sebab akibat, tetapi mendukung anjuran asam folat</td></tr>
</tbody></table>
${P(`Bagaimana faktor-faktor ini bekerja bersama genetik? ${X(SRC.nichd.url, 'NICHD')} menjelaskan bahwa pada orang yang secara genetik rentan, situasi tertentu seperti infeksi atau paparan zat kimia mungkin ikut berperan, tetapi orang yang rentan secara genetik belum tentu menjadi autis walau mengalami hal yang sama. ${X(SRC.nasCauses.url, 'National Autistic Society')} menambahkan bahwa selain rubela dan valproat, faktor lingkungan lain tidak bisa membuat seseorang autis dengan sendirinya, dan pengaruhnya kecil serta sulit diprediksi.`)}
${P(`Bagi ibu yang sedang hamil, pesan praktisnya sederhana: lakukan pemeriksaan kehamilan rutin, konsumsi asam folat sesuai anjuran tenaga kesehatan, lengkapi imunisasi sebelum hamil, kelola kondisi seperti diabetes, dan jangan mengubah atau menghentikan obat tanpa berkonsultasi dengan dokter. Tidak perlu cemas berlebihan terhadap setiap hal kecil yang dilakukan selama hamil.`)}
${fig('Dokumentasi/16-feb-2026-siswa-abk-memotong-sayur-detail.webp', 'Pandangan dari atas meja berisi piring sayur hijau yang sudah dipotong, potongan batang sawi, dan tangan yang memotong sayur di atas wadah logam', 'Kelas memasak di YUKA: peserta memotong sayur bersama pendamping.' + PHOTO_NOTE, 576, 580)}

${H2('bukan-penyebab', 'Yang terbukti bukan penyebab autisme')}
${P(`Bagian ini sama pentingnya dengan bagian sebelumnya. Banyak keluarga menunda imunisasi, menyalahkan diri sendiri, atau mengeluarkan biaya besar karena percaya mitos tentang penyebab autisme.`)}
${H3('Vaksin tidak menyebabkan autisme')}
${P(`Ini salah satu pertanyaan yang paling banyak diteliti dalam sejarah kesehatan anak, dan jawabannya konsisten: tidak. Dalam ${X(SRC.whoStatement.url, 'pernyataan resmi tanggal 24 September 2025')}, WHO menegaskan ada basis bukti yang kuat dan luas bahwa vaksin anak tidak menyebabkan autisme. Penelitian besar dari banyak negara sampai pada kesimpulan yang sama, penelitian awal yang menyebut ada kaitan memiliki cacat dan sudah didiskreditkan, dan sejak 1999 para ahli independen yang memberi masukan kepada WHO berulang kali menegaskan bahwa vaksin, termasuk yang mengandung thiomersal atau aluminium, tidak menyebabkan autisme.`)}
${P(`${X(SRC.whoFact.url, 'Fact sheet autisme WHO')} juga mencatat bahwa penelitian yang dulu ditafsirkan mengaitkan vaksin MMR dengan autisme belakangan terbukti salah dan curang, jurnalnya menarik penelitian tersebut, dan dokter penulisnya kehilangan izin praktik. Salah satu bukti terbesar adalah ${X(SRC.hviid.url, 'studi nasional Denmark oleh Hviid dan rekan (2019)')} terhadap 657.461 anak. Dibanding anak yang tidak divaksin MMR, anak yang divaksin memiliki rasio hazard autisme 0,93 setelah penyesuaian, artinya tidak ada peningkatan risiko, termasuk pada anak yang memiliki saudara kandung autis.`)}
${P(`Di Indonesia, ${X(SRC.idai.url, 'Ikatan Dokter Anak Indonesia (IDAI)')} menyampaikan hal yang sama dalam artikel "MMR Tidak Menyebabkan Autisme", antara lain dengan merujuk penelitian Denmark terhadap 537.303 anak yang menemukan kejadian autisme tidak berbeda antara anak yang mendapat dan tidak mendapat vaksin MMR. ${X(SRC.nhs.url, 'NHS')} di Inggris juga menulis bahwa autisme tidak disebabkan oleh vaksin atau obat-obatan.`)}
${P(`Kenapa mitos ini bertahan? Salah satunya karena tanda autisme sering mulai terlihat jelas pada usia yang sama dengan jadwal imunisasi, sehingga keduanya tampak berurutan. Berurutan tidak sama dengan sebab akibat. Menunda imunisasi tidak mencegah autisme, tetapi membuat anak rentan terhadap campak dan rubela, padahal rubela pada ibu hamil justru salah satu faktor risiko autisme.`)}
${H3('Pola asuh tidak menyebabkan autisme')}
${P(`Pada pertengahan abad ke-20, sebagian psikolog menduga autisme disebabkan oleh pengasuhan yang "dingin", dan muncul istilah <em>refrigerator mother</em> atau ibu kulkas. ${X(SRC.nasMyths.url, 'National Autistic Society')} menjelaskan bahwa klaim itu tidak pernah punya bukti, tetapi sempat sangat berpengaruh dan menyakiti banyak keluarga. Sikap ilmiah sekarang jelas: cara orang tua mengasuh tidak dapat membuat anak menjadi autis. Data heritabilitas di atas juga menunjukkan porsi lingkungan rumah yang dibagi bersama saudara kandung tergolong kecil.`)}
${P(`Hal yang sama berlaku untuk anggapan bahwa anak menjadi autis karena terlalu banyak menonton layar, karena ibu bekerja, atau karena kurang diajak bicara. Kebiasaan sehari-hari memang memengaruhi perkembangan bahasa dan perilaku, dan karena itu tetap perlu diatur, tetapi tidak menimbulkan autisme. Panduan mengatur layar ada di ${L('screen-time-untuk-anak-autis-batasan', 'batasan screen time untuk anak autis')}.`)}
${H3('Parasetamol saat hamil: bukti tidak menunjukkan sebab akibat')}
${P(`Topik ini kembali ramai sejak 2025. ${X(SRC.ahlqvist.url, 'Penelitian Ahlqvist dan rekan di JAMA tahun 2024')} mengikuti 2.480.797 anak yang lahir di Swedia tahun 1995 sampai 2019. Tanpa pembanding saudara kandung, ada kenaikan risiko yang sangat kecil (rasio hazard 1,05). Namun ketika anak dibandingkan dengan saudara kandungnya sendiri, yang berbagi banyak faktor keluarga, hubungan itu hilang (rasio hazard 0,98), dan tidak ada pola makin banyak obat makin tinggi risiko. Peneliti menyimpulkan bahwa kaitan yang terlihat di penelitian lain kemungkinan disebabkan faktor keluarga, bukan obatnya.`)}
${P(`${X(SRC.whoStatement.url, 'WHO dalam pernyataan 24 September 2025')} menyatakan saat ini belum ada bukti ilmiah yang meyakinkan tentang kaitan autisme dan penggunaan parasetamol selama kehamilan. WHO tetap mengingatkan agar obat apa pun dipakai dengan hati-hati selama hamil, terutama pada tiga bulan pertama, dan sesuai saran tenaga kesehatan.`)}
<table><thead><tr><th>Anggapan yang beredar</th><th>Yang ditunjukkan bukti</th></tr></thead><tbody>
<tr><td>Vaksin MMR atau vaksin lain menyebabkan autisme</td><td>Tidak. Studi besar dari banyak negara dan pernyataan WHO 2025 menegaskan vaksin tidak menyebabkan autisme</td></tr>
<tr><td>Pola asuh yang dingin atau kurang kasih sayang menyebabkan autisme</td><td>Tidak. Teori ibu kulkas sudah dibantah; pola asuh tidak bisa membuat anak autis</td></tr>
<tr><td>Parasetamol saat hamil menyebabkan autisme</td><td>Studi saudara kandung 2024 tidak menemukan hubungan; WHO 2025 menyatakan belum ada bukti yang meyakinkan</td></tr>
<tr><td>Autisme bisa muncul setelah anak besar karena sesuatu yang dialaminya</td><td>Tidak. National Autistic Society menegaskan orang autis lahir dalam keadaan autis; tandanya saja yang baru terlihat belakangan</td></tr>
</tbody></table>

${H2('tes-genetik', 'Bagaimana dengan tes genetik?')}
${P(`Dengan banyaknya gen yang ditemukan, wajar bila orang tua bertanya apakah tes genetik bisa memastikan anak autis atau tidak. Jawabannya: <strong>tidak</strong>. ${X(SRC.nasCauses.url, 'National Autistic Society')} menjelaskan bahwa tidak ada tes genetik untuk autisme, tes genetik tidak dapat meramalkan apakah seorang anak akan autis, dan tidak dapat dipakai untuk mendiagnosis. Diagnosis autisme tetap ditegakkan lewat pengamatan perilaku, wawancara, dan riwayat perkembangan oleh profesional.`)}
${P(`Lalu kapan pemeriksaan genetik dipakai? Dalam praktik kedokteran, pemeriksaan genetik kadang disarankan kepada anak yang <em>sudah</em> terdiagnosis autis, terutama bila ada ciri lain seperti disabilitas intelektual, kelainan bawaan, atau riwayat keluarga tertentu. Tujuannya mencari kemungkinan penyebab atau sindrom penyerta, bukan mendiagnosis autisme. Pedoman ${X(SRC.schaefer.url, 'American College of Medical Genetics (2013)')} bahkan menempatkan "memastikan diagnosis autisme yang akurat" sebagai langkah sebelum pemeriksaan apa pun, lalu membahas pilihan tes, kemungkinan hasilnya, dan biayanya bersama keluarga.`)}
${P(`Hati-hati terhadap layanan yang menawarkan tes DNA, tes rambut, atau tes darah tertentu sebagai cara "mendeteksi autisme" atau "menemukan penyebab sekaligus obatnya". Tawaran seperti itu tidak sesuai dengan bukti ilmiah saat ini. Jika keluarga ingin mempertimbangkan pemeriksaan genetik, bicarakan dengan dokter spesialis anak, dokter spesialis genetika, atau konselor genetik yang dapat menjelaskan manfaat dan batasannya. Sikap kritis yang sama berlaku untuk terapi yang diklaim menyembuhkan autisme, seperti dibahas di ${L('stem-cell-therapy-untuk-autisme-perkembangan', 'perkembangan terapi stem cell untuk autisme')}.`)}

${H2('orang-tua', 'Apa artinya bagi orang tua')}
${P(`Penelitian genetik bukan sekadar urusan laboratorium. Ada beberapa pesan yang bisa langsung dipegang keluarga.`)}
${ul([
    '<strong>Ini bukan salah Anda.</strong> Autisme sebagian besar dipengaruhi faktor genetik, dan sebagian berasal dari mutasi acak yang tidak bisa dicegah. Bukan karena pola asuh, bukan karena vaksin, bukan karena makanan yang Anda pilih.',
    '<strong>Fokus pada dukungan, bukan mencari kambing hitam.</strong> Mengetahui penyebab tidak mengubah kebutuhan anak hari ini. Yang paling membantu adalah ' + L('intervensi-dini', 'intervensi dini') + ' dan dukungan belajar yang sesuai. Ringkasan bukti tentang intervensi ada di ' + L('systematic-review-intervensi-dini-autisme', 'tinjauan sistematis intervensi dini autisme') + '.',
    '<strong>Perhatikan perkembangan adik atau kakak.</strong> Karena ada komponen keluarga, pantau tumbuh kembang saudara kandung dan sampaikan kekhawatiran kepada dokter anak sejak dini. Panduan langkahnya ada di ' + L('langkah-langkah-deteksi-dini-tumbuh-kembang-anak', 'langkah deteksi dini tumbuh kembang anak') + '. Dukungan untuk saudara juga dibahas di ' + L('sibling-anak-berkebutuhan-khusus', 'sibling anak berkebutuhan khusus') + '.',
    '<strong>Rencanakan kehamilan berikutnya dengan dokter.</strong> Jika Anda merencanakan anak lagi, konsultasikan riwayat keluarga, obat yang sedang diminum, dan imunisasi sebelum hamil.',
    '<strong>Saring informasi.</strong> Waspadai klaim "penelitian terbaru" tanpa nama peneliti, nama jurnal, dan tahun terbit. Penelitian yang sungguhan bisa dilacak.',
    '<strong>Jaga diri sendiri.</strong> Menerima diagnosis anak adalah proses emosional. Artikel ' + L('orang-tua-baru-terima-diagnosis-anak-abk', 'untuk orang tua yang baru menerima diagnosis') + ' dan ' + L('mengelola-stres-orang-tua-anak-abk', 'mengelola stres orang tua anak berkebutuhan khusus') + ' berisi langkah praktis.',
  ])}
${P(`Penelitian juga menunjukkan bahwa autisme sangat beragam. Dua anak dengan diagnosis yang sama bisa memiliki latar genetik, kemampuan, dan kebutuhan yang sangat berbeda. Karena itu, rencana belajar dan terapi sebaiknya disusun dari asesmen kebutuhan anak sendiri, bukan dari label atau hasil penelitian populasi. Gambaran tingkat dukungan bisa dibaca di ${L('apa-itu-autisme-level-1-2-3', 'autisme level 1, 2, dan 3')}, dan perbedaan dengan kondisi yang sering tertukar ada di ${L('perbedaan-tunagrahita-dan-autis', 'perbedaan tunagrahita dan autis')} serta ${L('apakah-gdd-sama-dengan-autis', 'apakah GDD sama dengan autis')}.`)}
${fig('Dokumentasi/artikel/meja-belajar-buku-dan-alat-tulis-anak.webp', 'Meja lipat kayu berisi mushaf terbuka, buku tulis, dan pena, dengan tangan peserta di tepi bingkai', 'Meja belajar di ruang kelas YUKA. Rencana belajar disusun dari kebutuhan tiap peserta.' + PHOTO_NOTE, 558, 384)}
${P(`YUKA mendampingi anak berkebutuhan khusus, termasuk anak autis, melalui ${L('pendidikan-inklusi', 'pendidikan inklusi')} di Sekolah Inklusi Taruna Imani. Kami tidak menetapkan diagnosis dan tidak melakukan pemeriksaan genetik, tetapi bisa membantu keluarga memahami langkah berikutnya dan menyiapkan dukungan belajar. Informasi layanan ada di ${L('../sekolah-autis-yogyakarta', 'layanan pendidikan untuk anak autis di Yogyakarta')}, atau ${L('../kontak', 'hubungi tim YUKA')}. Tips sehari-hari juga tersedia di ${L('tips-mendampingi-anak-autis', 'tips mendampingi anak autis')}.`)}
${P(`Kesimpulannya, penelitian dari 2016 sampai 2025 sepakat bahwa genetik adalah penyumbang terbesar autisme, dengan heritabilitas sekitar 80 persen dalam studi populasi besar. Risikonya tersebar di banyak gen, sebagian diwariskan dan sebagian muncul baru secara acak. Beberapa faktor kehamilan seperti valproat dan rubela ikut berperan, sementara vaksin dan pola asuh terbukti bukan penyebab. Pengetahuan ini paling bermanfaat bila dipakai untuk melepaskan rasa bersalah dan fokus pada dukungan yang dibutuhkan anak.`)}
${faqBlock(FAQ)}
`;

const html = renderArticlePage(a);
const out = path.join(OUT, `${a.slug}.html`);
fs.writeFileSync(out, html);
console.log(`WROTE ${out} ${html.length} bytes`);

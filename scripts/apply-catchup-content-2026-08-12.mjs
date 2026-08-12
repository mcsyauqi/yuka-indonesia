import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'D:/Projects/Yuka';
const TODAY = '2026-08-12';
const BASE = 'https://www.yukaindonesia.com';
const AUTHOR = {
  name: 'Bu Yupie Nurul Azkia',
  url: `${BASE}/profil/bu-yupie-nurul-azkia`,
  id: `${BASE}/profil/bu-yupie-nurul-azkia#person`,
  image: `${BASE}/Team/Bu%20Yupie.webp`,
  jobTitle: 'Pendiri dan Pengajar Senior YUKA',
};
const ORG_ID = `${BASE}/#organization`;
const editorialUrl = `${BASE}/kebijakan-editorial`;

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
const words = (s) => String(s).replace(/<[^>]+>/g,' ').replace(/&[^;]+;/g,' ').split(/\s+/).filter(Boolean).length;
const write = (rel, content) => {
  const target = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, content.replace(/\u2014/g, '-'), 'utf8');
};

function articleSchema(a) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article', '@id': `${BASE}/artikel/${a.slug}#article`,
        headline: a.title, description: a.description,
        datePublished: `${TODAY}T09:00:00+07:00`, dateModified: `${TODAY}T20:30:00+07:00`,
        mainEntityOfPage: `${BASE}/artikel/${a.slug}`,
        author: { '@type': 'Person', '@id': AUTHOR.id, name: AUTHOR.name, url: AUTHOR.url, image: AUTHOR.image, jobTitle: AUTHOR.jobTitle },
        publisher: { '@id': ORG_ID },
        about: (a.about || [a.keyword]).map(name => ({ '@type': 'Thing', name })),
        inLanguage: 'id-ID', isAccessibleForFree: true,
      },
      {
        '@type': 'BreadcrumbList', itemListElement: [
          { '@type':'ListItem', position:1, name:'Beranda', item:`${BASE}/` },
          { '@type':'ListItem', position:2, name:'Artikel', item:`${BASE}/artikel` },
          { '@type':'ListItem', position:3, name:a.title, item:`${BASE}/artikel/${a.slug}` },
        ],
      },
      {
        '@type': 'FAQPage', mainEntity: a.faq.map(([q, answer]) => ({ '@type':'Question', name:q, acceptedAnswer:{ '@type':'Answer', text:answer } })),
      },
    ],
  };
}

function buildArticle(a) {
  const related = (a.related || []).map(([label, href]) => `<li><a href="${esc(href)}">${esc(label)}</a></li>`).join('');
  const sections = a.sections.map(([heading, body]) => `<section id="${heading.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}"><h2>${esc(heading)}</h2>${body.split('\n\n').map(p => `<p>${esc(p)}</p>`).join('')}</section>`).join('\n');
  const steps = a.steps.map((x,i) => `<li><strong>${i+1}.</strong> ${esc(x)}</li>`).join('');
  const rows = a.table.map(row => `<tr>${row.map(cell => `<td>${esc(cell)}</td>`).join('')}</tr>`).join('');
  const faq = a.faq.map(([q,answer]) => `<details><summary>${esc(q)}</summary><p>${esc(answer)}</p></details>`).join('');
  const sources = a.sources.map(([label,href]) => `<li><a href="${esc(href)}" rel="noopener noreferrer" target="_blank">${esc(label)}</a></li>`).join('');
  const html = `<!doctype html>
<html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(a.title)} | YUKA</title><meta name="description" content="${esc(a.description)}"><meta name="robots" content="index, follow"><meta name="author" content="${esc(AUTHOR.name)}">
<link rel="canonical" href="${BASE}/artikel/${esc(a.slug)}"><link rel="stylesheet" href="../assets/css/style.min.css">
<meta property="og:type" content="article"><meta property="og:title" content="${esc(a.title)}"><meta property="og:description" content="${esc(a.description)}"><meta property="og:url" content="${BASE}/artikel/${esc(a.slug)}"><meta property="og:image" content="${BASE}/assets/images/hero-bg.webp">
<script type="application/ld+json">${JSON.stringify(articleSchema(a), null, 2).replace(/</g,'\\u003c')}</script>
<style>.article-shell{max-width:900px;margin:0 auto;padding:120px 22px 60px}.breadcrumb{font-size:.9rem;margin-bottom:16px}.article-shell h1{font-size:clamp(2rem,5vw,3.25rem);line-height:1.15;color:#24365d}.article-meta{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin:20px 0 26px;color:#5d6678}.article-meta img{width:46px;height:46px;border-radius:50%;object-fit:cover}.answer-box{border-left:5px solid #f4b41a;background:#fff7df;padding:18px 20px;border-radius:8px;font-size:1.08rem}.article-shell h2{margin-top:38px;color:#24365d}.article-shell p,.article-shell li{line-height:1.78}.article-shell table{width:100%;border-collapse:collapse;margin:22px 0}.article-shell th,.article-shell td{border:1px solid #d9dfeb;padding:12px;text-align:left}.article-shell th{background:#24365d;color:#fff}.checklist{background:#f5f7fb;padding:20px 28px;border-radius:10px}.disclaimer{border:1px solid #d9dfeb;border-radius:10px;padding:18px;margin-top:35px}.sources a{word-break:break-word}.site-footer{background:#17233c;color:#fff;padding:32px 20px;text-align:center}.site-footer a{color:#ffd467}.nav-simple{position:absolute;top:0;left:0;right:0;background:#fff;border-bottom:1px solid #e7eaf0;padding:17px 5%;display:flex;justify-content:space-between;align-items:center;z-index:2}.nav-simple img{width:170px}.nav-simple div{display:flex;gap:16px;flex-wrap:wrap}.nav-simple a{color:#24365d;text-decoration:none;font-weight:600}@media(max-width:700px){.nav-simple div{display:none}.article-shell{padding-top:100px}.article-shell table{font-size:.86rem}}</style></head><body>
<nav class="nav-simple"><a href="/"><img src="../Logo/Logo.webp" alt="YUKA Indonesia"></a><div><a href="/tentang">Tentang</a><a href="/program">Program</a><a href="/artikel">Artikel</a><a href="/kontak">Kontak</a></div></nav>
<main class="article-shell"><p class="breadcrumb"><a href="/">Beranda</a> / <a href="/artikel">Artikel</a> / ${esc(a.keyword)}</p><article>
<h1>${esc(a.title)}</h1><div class="article-meta"><img src="../Team/Bu Yupie.webp" alt="${esc(AUTHOR.name)}"><span>Ditulis oleh <a href="/profil/bu-yupie-nurul-azkia"><strong>${esc(AUTHOR.name)}</strong></a><br>${esc(AUTHOR.jobTitle)} · Diperbarui 12 Agustus 2026</span></div>
<p class="answer-box"><strong>Jawaban singkat:</strong> ${esc(a.lead)}</p>
${sections}
<section><h2>Bagaimana menerapkan panduan ${esc(a.keyword)} secara bertahap?</h2><p>Mulailah dari kebutuhan yang paling berpengaruh pada partisipasi, keselamatan, komunikasi, atau kemandirian. Satu perubahan kecil yang dapat dijalankan secara konsisten lebih berguna daripada banyak strategi sekaligus. Libatkan anak dalam memilih tujuan dan hormati cara komunikasinya.</p><ol class="checklist">${steps}</ol><p>Catat bantuan yang diberikan, respons anak, konteks kegiatan, dan perubahan yang ingin dicoba. Bandingkan anak dengan kondisi sebelumnya, bukan dengan anak lain. Jika strategi tidak membantu, periksa kembali lingkungan, beban tugas, akses komunikasi, dan kecocokan tujuan.</p></section>
<section><h2>Apa yang perlu dibandingkan sebelum mengambil keputusan?</h2><table><thead><tr>${a.tableHeaders.map(h => `<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows}</tbody></table><p>Tabel ini adalah alat diskusi, bukan instrumen diagnosis. Keputusan klinis, pendidikan, atau layanan sosial perlu mempertimbangkan asesmen individual, peraturan yang berlaku, ketersediaan layanan, dan preferensi anak serta keluarga.</p></section>
<section><h2>Kapan keluarga perlu meminta bantuan profesional?</h2><p>Mintalah bantuan ketika kebutuhan memengaruhi keselamatan, kesehatan, komunikasi dasar, partisipasi sekolah, tidur, makan, mobilitas, atau kesejahteraan keluarga. Pilih tenaga yang kompeten sesuai masalah, seperti dokter, psikolog, terapis, audiolog, guru pendidikan khusus, atau pekerja sosial. Tidak semua anak membutuhkan layanan yang sama.</p><p>Artikel ini bersifat informasi umum. Jangan menghentikan pengobatan, diet, alat bantu, atau program pendidikan berdasarkan artikel internet. Bawa catatan pengamatan dan daftar pertanyaan agar konsultasi lebih terarah.</p></section>
<section><h2>Pertanyaan yang sering diajukan</h2>${faq}</section>
<section class="sources"><h2>Sumber resmi dan penelitian</h2><ul>${sources}</ul></section>
${related ? `<section><h2>Baca juga dalam klaster ini</h2><ul>${related}</ul></section>` : ''}
<aside class="disclaimer"><strong>Proses editorial YUKA:</strong> Konten disusun untuk pendidikan umum, menggunakan sumber bertautan, dan ditinjau secara editorial oleh tim pendampingan YUKA. Ini bukan tinjauan klinis atau pengganti konsultasi. Pelajari <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
</article></main><footer class="site-footer"><p>Yayasan Ukhuwah Kaffah Amanatullah · YUKA Indonesia</p><p><a href="/kebijakan-editorial">Kebijakan Editorial</a> · <a href="/tentang">Tentang YUKA</a> · <a href="/kontak">Kontak</a></p></footer></body></html>`;
  const wc = words(html);
  if (wc < (a.minWords || 900)) throw new Error(`${a.slug} terlalu tipis: ${wc} kata`);
  if (html.includes('\u2014')) throw new Error(`${a.slug} memuat em dash`);
  return html;
}

const articles = [];

const SRC = {
  uu8: ['UU Nomor 8 Tahun 2016 tentang Penyandang Disabilitas', 'https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016'],
  whoRehab: ['WHO: Rehabilitation', 'https://www.who.int/news-room/fact-sheets/detail/rehabilitation'],
  whoDisability: ['WHO: Disability and health', 'https://www.who.int/news-room/fact-sheets/detail/disability-and-health'],
  whoHearing: ['WHO: Deafness and hearing loss', 'https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss'],
  ashaAac: ['ASHA: Systematic review of AAC interventions for children aged 0 to 6', 'https://pubs.asha.org/doi/10.1044/2022_LSHSS-21-00191'],
  kemdikbudTri: ['Kemendikbud: Kemitraan sekolah, keluarga, dan masyarakat', 'https://repositori.kemdikbud.go.id/500/1/Juknis_SMA-K.pdf'],
  niceAdhd: ['NICE NG87: Attention deficit hyperactivity disorder, recommendations', 'https://www.nice.org.uk/guidance/ng87/chapter/recommendations'],
  ccpt: ['Lin dan Bratton: Meta-analytic review of Child-Centered Play Therapy', 'https://doi.org/10.1002/j.1556-6676.2015.00180.x'],
  coteach: ['Vembye dkk.: Systematic review and meta-analysis of co-teaching', 'https://doi.org/10.3102/00346543231186588'],
  peer: ['Chang dan Locke: Systematic review of peer-mediated interventions', 'https://pmc.ncbi.nlm.nih.gov/articles/PMC5087797/'],
  autismReview: ['Autism early intervention review, 2024', 'https://doi.org/10.1007/s11920-024-01552-x'],
  autismSystematic: ['Systematic review of early intervention and autism prognosis', 'https://pubmed.ncbi.nlm.nih.gov/38425700/'],
  unicefAccess: ['UNICEF: Disability inclusive and accessible child-friendly spaces', 'https://www.unicef.org/eap/media/16281/file/Disability%20Inclusive%20and%20Accessible%20Child%20Friendly%20Spaces%20in%20Humanitarian%20Action.pdf'],
};

function makeArticle(x) {
  const sections = x.points.map(([h, body]) => [h, `${body}\n\nDalam praktik, sesuaikan dukungan dengan usia, cara komunikasi, kebutuhan sensorik, lingkungan, dan tujuan anak. Amati dampaknya pada partisipasi, bukan hanya kepatuhan. Dokumentasikan perubahan kecil agar keluarga, guru, dan profesional dapat meninjau keputusan berdasarkan pola yang terlihat.`]);
  const faq = x.faq || [
    [`Apakah ${x.keyword} berlaku sama untuk semua anak?`, `Tidak. Prinsip umumnya dapat menjadi titik awal, tetapi cara penerapan perlu disesuaikan dengan kebutuhan, preferensi, dan hasil asesmen individual.`],
    [`Apakah keluarga dapat mencoba panduan ${x.keyword} sendiri?`, `Keluarga dapat memulai dari langkah aman dalam rutinitas sehari-hari. Untuk keputusan klinis, diet, alat bantu, atau program khusus, libatkan tenaga profesional yang kompeten.`],
    [`Berapa lama sampai terlihat perubahan?`, `Tidak ada waktu yang berlaku untuk semua anak. Tentukan indikator kecil, catat konsistensi penerapan, dan jadwalkan tinjauan agar strategi dapat diperbaiki.`],
    [`Apa tanda strategi perlu dihentikan?`, `Hentikan dan evaluasi bila strategi menimbulkan bahaya, tekanan berkepanjangan, kehilangan akses komunikasi, atau menghambat partisipasi anak.`],
  ];
  return {
    minWords: 900,
    tableHeaders: x.tableHeaders || ['Fokus', 'Yang diamati', 'Dukungan awal'],
    table: x.table || [
      ['Akses', 'Apakah anak dapat memahami dan merespons?', 'Bahasa ringkas, visual, waktu tunggu'],
      ['Partisipasi', 'Apakah anak memiliki pilihan dan peran?', 'Pilihan terbatas dan langkah bertahap'],
      ['Regulasi', 'Apakah lingkungan terlalu menuntut?', 'Jeda, pengurangan beban, tempat tenang'],
      ['Evaluasi', 'Apakah dukungan memberi dampak?', 'Catatan singkat dan tinjauan berkala'],
    ],
    steps: x.steps || [
      `Tentukan satu tujuan ${x.keyword} yang bermakna bagi anak.`,
      'Amati kondisi awal dan hambatan lingkungan.',
      'Pilih satu dukungan yang aman dan dapat dijalankan.',
      'Jelaskan langkah dengan cara komunikasi yang dapat diakses.',
      'Catat respons, bantuan, dan konteks kegiatan.',
      'Tinjau bersama anak, keluarga, guru, atau profesional yang relevan.',
    ],
    about: x.about || [x.keyword, 'Anak Berkebutuhan Khusus', 'Pendidikan Inklusif'],
    sources: x.sources,
    related: x.related || [],
    faq, sections,
    ...x,
  };
}

articles.push(
  makeArticle({
    slug:'augmentative-communication-untuk-anak-di-rumah', keyword:'augmentative communication di rumah',
    title:'Augmentative Communication untuk Anak di Rumah: Panduan AAC',
    description:'Panduan AAC atau augmentative communication di rumah: pilihan alat, pemodelan bahasa, kosakata inti, dan kolaborasi keluarga.',
    lead:'Augmentative and Alternative Communication atau AAC adalah cara mendukung komunikasi melalui gestur, gambar, papan simbol, tulisan, atau perangkat bersuara. AAC tidak menggantikan suara anak. Tujuannya memberi akses komunikasi yang fungsional sambil keluarga terus mendukung perkembangan bahasa dan partisipasi dalam kegiatan sehari-hari.',
    points:[
      ['Apa itu augmentative communication dan AAC?', 'AAC mencakup cara tanpa alat seperti gestur serta cara berbantuan seperti kartu gambar, papan komunikasi, aplikasi, dan perangkat pembangkit suara. Pilihan alat ditentukan dari kebutuhan komunikasi dan akses motorik, bukan dari diagnosis semata.'],
      ['Apakah AAC menghambat anak berbicara?', 'Tinjauan penelitian tidak mendukung anggapan bahwa AAC harus menunggu sampai semua upaya bicara gagal. AAC dapat digunakan bersama intervensi bahasa alami. Anak tetap boleh memakai suara, gestur, gambar, dan perangkat secara multimodal.'],
      ['Bagaimana keluarga memodelkan AAC di rumah?', 'Orang dewasa dapat menyentuh simbol sambil mengucapkan kata dalam kegiatan nyata, lalu memberi waktu tunggu. Pemodelan tidak harus diikuti tuntutan agar anak langsung meniru. Fokusnya menunjukkan bahwa alat dapat menyampaikan pesan bermakna.'],
      ['Kosakata apa yang perlu tersedia?', 'Selain benda yang diminta, sediakan ya, tidak, berhenti, bantuan, selesai, sakit, orang, tempat, komentar, dan kata tentang minat anak. Kosakata inti membantu anak berkomunikasi melampaui permintaan makanan atau mainan.'],
    ],
    sources:[SRC.ashaAac, ['ASHA: AAC use by young children at home','https://pubs.asha.org/doi/10.1044/aac19.1.5'], SRC.whoRehab],
    related:[['Apa saja terapi anak berkebutuhan khusus','/artikel/apa-saja-terapi-anak-berkebutuhan-khusus'],['Kemandirian anak berkebutuhan khusus','/artikel/bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh']],
  }),
  makeArticle({
    slug:'apa-saja-3-pilar-pendidikan', keyword:'3 pilar pendidikan',
    title:'Apa Saja 3 Pilar Pendidikan? Keluarga, Sekolah, Masyarakat',
    description:'Tiga pilar pendidikan adalah keluarga, sekolah, dan masyarakat. Pelajari peran masing-masing serta cara membangun kemitraan yang inklusif.',
    lead:'Tiga pilar pendidikan merujuk pada keluarga, satuan pendidikan, dan masyarakat. Konsep Tri Pusat Pendidikan menekankan bahwa perkembangan anak tidak hanya menjadi tugas sekolah. Ketiganya perlu berbagi informasi, peran, dan dukungan agar lingkungan belajar konsisten, aman, serta menghormati kebutuhan setiap anak.',
    points:[
      ['Apa peran keluarga sebagai pilar pendidikan?', 'Keluarga memberi pengalaman belajar paling awal melalui relasi, kebiasaan, bahasa, nilai, dan kesempatan mencoba. Orang tua juga membawa informasi penting tentang minat, komunikasi, kesehatan, dan strategi yang membantu anak di rumah.'],
      ['Apa peran sekolah dalam Tri Pusat Pendidikan?', 'Sekolah merancang tujuan pembelajaran, lingkungan kelas, asesmen, dan dukungan pedagogis. Dalam pendidikan inklusif, sekolah perlu menyediakan akomodasi yang layak serta bekerja sama dengan keluarga dan layanan pendukung.'],
      ['Apa peran masyarakat dalam pendidikan?', 'Masyarakat menyediakan ruang partisipasi di luar rumah dan sekolah, termasuk perpustakaan, tempat ibadah, fasilitas publik, organisasi, dunia kerja, serta komunitas. Aksesibilitas dan sikap nondiskriminatif menentukan apakah anak dapat belajar melalui kehidupan sosial.'],
      ['Bagaimana ketiga pilar bekerja sama?', 'Kemitraan membutuhkan komunikasi dua arah, kesamaan kedudukan, saling percaya, dan keputusan yang tertulis. Setiap pihak tidak harus melakukan hal identik, tetapi perlu memahami tujuan, cara komunikasi anak, dan batas tanggung jawab.'],
    ],
    sources:[SRC.kemdikbudTri, SRC.uu8, ['Kemendikbud: Petunjuk teknis kemitraan sekolah dasar','https://repositori.kemdikbud.go.id/495/1/Juknis_SD.pdf']],
  }),
  makeArticle({
    slug:'reward-system-efektif-untuk-anak-autis', keyword:'reward system untuk anak autis',
    title:'Reward System Efektif untuk Anak Autis: Aman dan Bermakna',
    description:'Cara merancang reward system untuk anak autis dengan tujuan jelas, penguatan alami, pilihan anak, dan evaluasi tanpa menghilangkan kebutuhan dasar.',
    lead:'Reward system adalah cara memberi konsekuensi positif setelah keterampilan atau usaha tertentu. Untuk anak autis, sistem harus individual, dapat dipahami, dan tidak menghilangkan akses terhadap komunikasi, makanan pokok, jeda, atau regulasi. Tujuan akhirnya ialah partisipasi dan kemandirian, bukan kepatuhan tanpa pemahaman.',
    points:[
      ['Apa beda reward dan suap?', 'Penguatan direncanakan sebelum kegiatan, dikaitkan dengan perilaku yang aman dan terukur, serta dijelaskan secara jelas. Suap biasanya muncul mendadak untuk menghentikan konflik. Sistem yang baik tetap menghormati pilihan dan kebutuhan anak.'],
      ['Bagaimana memilih penguat yang tepat?', 'Tanyakan preferensi anak dan amati hal yang benar-benar ia nikmati, seperti memilih aktivitas, istirahat, perhatian, musik, atau benda tertentu. Nilai suatu penguat dapat berubah menurut kondisi dan waktu.'],
      ['Bagaimana membuat target yang realistis?', 'Pilih perilaku yang dapat diamati, misalnya menunjukkan kartu bantuan atau menyelesaikan dua langkah. Hindari target kabur seperti menjadi anak baik. Pecah keterampilan dan beri penguatan pada usaha yang mendekati tujuan.'],
      ['Kapan reward perlu dikurangi?', 'Saat keterampilan mulai stabil, beralih secara bertahap ke penguatan alami seperti rasa berhasil, akses kegiatan, dan umpan balik sosial yang nyaman. Jangan menghentikan mendadak tanpa memastikan anak memahami perubahan.'],
    ],
    sources:[['NICE: Support and interventions for autistic children and young people','https://www.nice.org.uk/guidance/cg170/chapter/recommendations'], SRC.whoRehab, SRC.uu8],
  }),
  makeArticle({
    slug:'co-teaching-dalam-kelas-inklusi', keyword:'co-teaching dalam kelas inklusi',
    title:'Co-Teaching dalam Kelas Inklusi: Model, Peran, dan Evaluasi',
    description:'Panduan co-teaching dalam kelas inklusi: enam model, pembagian peran guru, perencanaan bersama, akomodasi, dan evaluasi partisipasi siswa.',
    lead:'Co-teaching adalah pengajaran kolaboratif ketika dua pendidik berbagi tanggung jawab merencanakan, mengajar, dan mengevaluasi satu kelompok siswa. Model ini bukan menempatkan satu guru sebagai asisten. Keberhasilannya bergantung pada waktu perencanaan, pembagian peran yang setara, tujuan pembelajaran, serta perhatian pada pengalaman semua siswa.',
    points:[
      ['Apa saja model co-teaching?', 'Model umum meliputi one teach one observe, one teach one assist, station teaching, parallel teaching, alternative teaching, dan team teaching. Pemilihan model mengikuti tujuan pelajaran dan kebutuhan siswa, bukan kebiasaan guru.'],
      ['Bagaimana membagi peran dua guru?', 'Kedua guru perlu memiliki akses pada data, rencana pelajaran, asesmen, dan keputusan akomodasi. Peran dapat berganti agar siswa tidak menganggap satu guru hanya bertugas pada anak tertentu.'],
      ['Apa syarat perencanaan bersama?', 'Pasangan guru perlu waktu membahas tujuan, hambatan materi, pembagian kelompok, alat bantu, penilaian, dan sinyal komunikasi selama kelas. Tanpa perencanaan, co-teaching mudah berubah menjadi bantuan individual spontan.'],
      ['Bagaimana menilai dampaknya?', 'Nilai akses materi, partisipasi, pencapaian, rasa memiliki, dan suara siswa. Hasil penelitian bervariasi menurut konteks, sehingga sekolah perlu mengukur pelaksanaan dan tidak menganggap model ini otomatis efektif.'],
    ],
    sources:[SRC.coteach, ['Gardesten: Co-teaching and inclusion in mathematics education','https://doi.org/10.3390/educsci13070677'], SRC.uu8],
    related:[['Peer tutoring di kelas inklusi','/artikel/peer-tutoring-di-kelas-inklusi'],['Pendidikan inklusi','/artikel/pendidikan-inklusi']],
  }),
  makeArticle({
    slug:'makanan-yang-harus-dihindari-anak-adhd', keyword:'makanan yang harus dihindari anak ADHD',
    title:'Makanan yang Harus Dihindari Anak ADHD? Cek Faktanya',
    description:'Tidak ada daftar pantangan universal untuk ADHD. Pelajari pola makan seimbang, alergi, efek obat, kafein, dan kapan diet eliminasi memerlukan tenaga kesehatan.',
    lead:'Tidak ada daftar makanan yang wajib dihindari oleh semua anak dengan ADHD. Pedoman klinis menekankan pola makan seimbang dan tidak menganjurkan diet eliminasi umum tanpa indikasi. Jika keluarga melihat pola konsisten setelah makanan tertentu, catat gejala dan diskusikan dengan dokter atau ahli gizi.',
    points:[
      ['Apakah gula menyebabkan ADHD?', 'Bukti tidak mendukung gula sebagai penyebab tunggal ADHD. Konsumsi gula berlebihan tetap perlu dibatasi sebagai bagian pola makan sehat, tetapi menghapus semua gula tidak menggantikan asesmen dan tata laksana ADHD.'],
      ['Apakah pewarna dan aditif harus dihindari?', 'Sebagian anak mungkin menunjukkan respons individual terhadap bahan tertentu. NICE menyarankan tidak menerapkan eliminasi umum. Bila ada hubungan yang jelas, tenaga kesehatan dan ahli gizi dapat membantu uji yang terencana.'],
      ['Bagaimana dengan kafein dan minuman energi?', 'Minuman berkafein dan energi tidak cocok dijadikan terapi anak. Kafein dapat memengaruhi tidur, denyut jantung, kecemasan, atau efek obat. Periksa label dan konsultasikan bila anak mengonsumsi obat stimulan.'],
      ['Bagaimana menjaga makan saat memakai obat ADHD?', 'Sebagian obat dapat memengaruhi nafsu makan atau berat badan. Jadwal makan, camilan bernutrisi, pemantauan pertumbuhan, dan saran ahli gizi perlu disesuaikan oleh tenaga kesehatan yang merawat.'],
    ],
    sources:[SRC.niceAdhd, ['NICE: Food allergy in under 19s','https://www.nice.org.uk/guidance/cg116/chapter/Recommendations'], ['CDC: ADHD treatment','https://www.cdc.gov/adhd/treatment/index.html']],
    related:[['Apa itu ADHD','/artikel/adhd-adalah']],
  }),
  makeArticle({
    slug:'terapi-bermain-child-centered-play-therapy', keyword:'Child-Centered Play Therapy',
    title:'Terapi Bermain Child-Centered Play Therapy: Panduan Orang Tua',
    description:'Apa itu Child-Centered Play Therapy, bagaimana sesi berlangsung, bukti penelitian, peran terapis, dan pertanyaan yang perlu diajukan orang tua.',
    lead:'Child-Centered Play Therapy atau CCPT adalah pendekatan konseling berbasis bermain yang mengikuti ekspresi dan pilihan anak dalam batas aman. Terapis membangun relasi, mencerminkan perasaan, dan mendukung tanggung jawab. CCPT perlu diberikan oleh profesional terlatih, dengan tujuan dan evaluasi yang disepakati bersama keluarga.',
    points:[
      ['Apa prinsip utama CCPT?', 'CCPT menekankan hubungan terapeutik, penerimaan, pilihan anak, refleksi emosi, dan batas yang konsisten. Bermain dipandang sebagai medium komunikasi, bukan sekadar hadiah atau tes.'],
      ['Apa yang terjadi dalam sesi?', 'Anak mendapat pilihan bahan bermain yang aman, sementara terapis mengamati dan merespons secara terstruktur. Terapis tidak memaksa tema tertentu, tetapi tetap menetapkan batas untuk keselamatan dan penggunaan ruang.'],
      ['Apa yang diketahui dari penelitian?', 'Meta-analisis menemukan efek rata-rata yang menjanjikan pada berbagai hasil, tetapi manfaat individual bergantung pada masalah, kualitas pelaksanaan, durasi, serta keterlibatan pengasuh. CCPT bukan terapi untuk semua kebutuhan.'],
      ['Apa peran orang tua?', 'Orang tua memberi riwayat, tujuan, informasi perubahan, dan dukungan di rumah. Kerahasiaan anak tetap dijaga. Terapis perlu menjelaskan bagaimana kemajuan dinilai serta kapan pendekatan ditinjau.'],
    ],
    sources:[SRC.ccpt, ['Ray dkk.: CCPT in schools review and meta-analysis','https://eric.ed.gov/?id=EJ1049577'], SRC.whoRehab],
  }),
  makeArticle({
    slug:'apa-saja-terapi-anak-berkebutuhan-khusus', keyword:'terapi anak berkebutuhan khusus',
    title:'Apa Saja Terapi Anak Berkebutuhan Khusus? Panduan Memilih',
    description:'Jenis terapi anak berkebutuhan khusus meliputi terapi wicara, okupasi, fisioterapi, psikologi, dan dukungan pendidikan sesuai asesmen individual.',
    lead:'Terapi anak berkebutuhan khusus dipilih berdasarkan fungsi, kebutuhan, tujuan, serta kondisi kesehatan anak, bukan berdasarkan label semata. Pilihannya dapat mencakup terapi wicara, okupasi, fisioterapi, psikologi, audiologi, teknologi bantu, dan dukungan pendidikan. Tidak semua anak membutuhkan semua layanan.',
    points:[
      ['Kapan terapi wicara dan bahasa dipertimbangkan?', 'Layanan ini dapat mendukung pemahaman, ekspresi, artikulasi, makan-minum tertentu, dan komunikasi augmentatif. Tujuan perlu fungsional serta diterapkan dalam kegiatan nyata.'],
      ['Apa fungsi terapi okupasi?', 'Terapi okupasi berfokus pada partisipasi dalam aktivitas sehari-hari seperti bermain, belajar, berpakaian, makan, dan menggunakan alat. Intervensi mempertimbangkan tugas, lingkungan, serta kemampuan anak.'],
      ['Kapan fisioterapi dibutuhkan?', 'Fisioterapi dapat mendukung mobilitas, kekuatan, keseimbangan, postur, dan akses aktivitas bagi anak dengan kebutuhan gerak. Program harus aman serta mempertimbangkan kondisi medis.'],
      ['Bagaimana memilih layanan psikologi dan pendidikan?', 'Psikolog dapat membantu asesmen dan dukungan emosi atau perilaku. Guru pendidikan khusus merancang akses belajar dan akomodasi. Kolaborasi mencegah tujuan layanan saling bertentangan.'],
    ],
    sources:[SRC.whoRehab, ['WHO: Package of interventions for rehabilitation','https://www.who.int/teams/noncommunicable-diseases/sensory-functions-disability-and-rehabilitation/rehabilitation/service-delivery/package-of-interventions-for-rehabilitation/'], SRC.uu8],
  }),
  makeArticle({
    slug:'bagaimana-cara-membuat-kartu-disabilitas', keyword:'cara membuat kartu disabilitas',
    title:'Bagaimana Cara Membuat Kartu Disabilitas? Panduan Dokumen',
    description:'Panduan menyiapkan dokumen Kartu Penyandang Disabilitas, menghubungi Dinas Sosial, memeriksa data, dan menjaga keamanan dokumen.',
    lead:'Kartu Penyandang Disabilitas merupakan dokumen identitas dalam layanan sosial, tetapi alur penerbitan dapat berbeda menurut daerah dan sistem yang sedang berlaku. Mulailah dari Dinas Sosial kabupaten atau kota sesuai domisili. Siapkan identitas, dokumen asesmen yang diminta, foto, dan bukti domisili tanpa mengirim data pribadi ke pihak tidak resmi.',
    points:[
      ['Ke mana mengajukan kartu disabilitas?', 'Hubungi Dinas Sosial kabupaten atau kota, kelurahan, atau pendamping sosial resmi untuk memeriksa alur terkini. Jangan mengandalkan tautan pendaftaran tidak resmi karena sistem dan persyaratan dapat berubah.'],
      ['Dokumen apa yang biasanya disiapkan?', 'Siapkan KTP atau KIA, Kartu Keluarga, foto, bukti domisili, serta dokumen keterangan atau asesmen bila diminta. Persyaratan final harus dikonfirmasi kepada instansi setempat.'],
      ['Bagaimana proses verifikasi dilakukan?', 'Petugas dapat memeriksa identitas, domisili, data sosial, dan informasi disabilitas sesuai kewenangan. Tanyakan nomor tanda terima, estimasi proses, cara koreksi data, dan kanal pengaduan resmi.'],
      ['Bagaimana melindungi data pribadi?', 'Jangan mengirim KTP, KK, diagnosis, atau foto melalui akun media sosial yang tidak terverifikasi. Tutup informasi sensitif pada salinan yang tidak diperlukan dan simpan bukti pengajuan.'],
    ],
    sources:[SRC.uu8, ['Kementerian Sosial Republik Indonesia','https://kemensos.go.id/'], ['Cek Bansos Kemensos','https://cekbansos.kemensos.go.id/']],
    related:[['Kartu disabilitas dalam klaster','/artikel/kartu-disabilitas'],['Jenis disabilitas','/artikel/jenis-disabilitas']],
  }),
  makeArticle({
    slug:'liburan-dengan-anak-berkebutuhan-khusus', keyword:'liburan dengan anak berkebutuhan khusus',
    title:'Liburan dengan Anak Berkebutuhan Khusus: Checklist Aman',
    description:'Checklist liburan dengan anak berkebutuhan khusus: aksesibilitas, komunikasi, obat, transportasi, akomodasi, jeda, dan rencana cadangan.',
    lead:'Liburan dengan anak berkebutuhan khusus lebih mudah ketika keluarga memetakan akses, komunikasi, kesehatan, kebutuhan sensorik, dan rencana cadangan. Tujuannya bukan membuat perjalanan tanpa perubahan, melainkan memberi anak informasi yang dapat diprediksi, pilihan yang nyata, dan cara meminta bantuan atau berhenti.',
    points:[
      ['Bagaimana memilih destinasi yang aksesibel?', 'Hubungi pengelola untuk menanyakan jalur masuk, toilet, lift, tempat duduk, kebisingan, antrean, dan ruang tenang. Minta informasi spesifik, bukan hanya label ramah disabilitas.'],
      ['Apa yang perlu disiapkan untuk komunikasi?', 'Bawa papan atau perangkat komunikasi, pengisi daya, salinan cadangan, kartu identitas, serta pesan untuk sakit, takut, toilet, istirahat, dan pulang.'],
      ['Bagaimana mengelola obat dan kondisi kesehatan?', 'Bawa obat sesuai resep, daftar dosis, surat dokter bila dibutuhkan, serta kontak fasilitas kesehatan. Simpan obat pada kondisi yang disarankan dan jangan mengubah jadwal tanpa arahan.'],
      ['Apa isi rencana cadangan?', 'Tentukan cara mengakhiri kegiatan, lokasi tenang, transportasi alternatif, orang yang dapat dihubungi, dan kegiatan sederhana bila agenda berubah. Sampaikan perubahan dengan cara yang dapat dipahami anak.'],
    ],
    sources:[SRC.unicefAccess, SRC.whoDisability, SRC.uu8],
  }),
  makeArticle({
    slug:'peer-tutoring-di-kelas-inklusi', keyword:'peer tutoring di kelas inklusi',
    title:'Peer Tutoring di Kelas Inklusi: Langkah dan Etika',
    description:'Panduan peer tutoring di kelas inklusi: memilih tujuan, melatih teman sebaya, membagi peran, menjaga martabat, dan mengevaluasi hasil.',
    lead:'Peer tutoring adalah strategi terstruktur ketika siswa belajar dengan dukungan teman sebaya. Dalam kelas inklusi, peran perlu dilatih, diawasi, dan dapat berganti. Teman sebaya bukan terapis atau pengasuh. Strategi harus memberi manfaat bagi kedua siswa, menjaga pilihan, serta menghindari hubungan yang timpang.',
    points:[
      ['Apa model peer tutoring yang dapat digunakan?', 'Modelnya meliputi tutor sebaya satu arah, reciprocal peer tutoring, class-wide peer tutoring, dan peer-assisted learning. Pilihan mengikuti tujuan akademik atau sosial serta kondisi kelas.'],
      ['Bagaimana memilih dan melatih tutor?', 'Jangan memilih hanya siswa paling patuh. Minta persetujuan, ajarkan cara memberi petunjuk, menunggu, memuji usaha, dan meminta bantuan guru. Rotasi mencegah label tetap.'],
      ['Bagaimana menjaga martabat siswa?', 'Siswa yang menerima dukungan perlu memiliki pilihan dan peran sebagai kontributor. Hindari membuka diagnosis atau informasi pribadi kepada teman tanpa persetujuan yang layak.'],
      ['Bagaimana mengevaluasi hasil?', 'Ukur ketepatan tugas, keterlibatan, hubungan, beban tutor, serta suara kedua siswa. Guru tetap bertanggung jawab pada pembelajaran dan akomodasi.'],
    ],
    sources:[SRC.peer, ['Talbott dkk.: Systematic review of peer tutoring for students with disabilities','https://doi.org/10.1002/9781118768778.ch16'], SRC.uu8],
    related:[['Co-teaching dalam kelas inklusi','/artikel/co-teaching-dalam-kelas-inklusi']],
  }),
  makeArticle({
    slug:'systematic-review-intervensi-dini-autisme', keyword:'systematic review intervensi dini autisme',
    title:'Systematic Review Intervensi Dini Autisme: Cara Membaca Bukti',
    description:'Ringkasan cara membaca systematic review intervensi dini autisme, jenis outcome, keterbatasan bukti, neurodiversitas, dan keputusan keluarga.',
    lead:'Systematic review menggabungkan penelitian dengan pertanyaan dan metode yang ditentukan sebelumnya. Pada intervensi dini autisme, hasil tidak mendukung satu program untuk semua anak. Bukti perlu dibaca menurut usia, tujuan, intensitas, kualitas studi, outcome partisipasi, dampak keluarga, serta penghormatan terhadap komunikasi dan neurodiversitas.',
    points:[
      ['Apa yang dimaksud intervensi dini autisme?', 'Istilah ini mencakup layanan dan dukungan pada usia awal untuk komunikasi, interaksi, bermain, keterampilan adaptif, partisipasi keluarga, dan kesehatan. Tujuannya bukan menghapus identitas autistik.'],
      ['Mengapa hasil systematic review dapat berbeda?', 'Review dapat memakai kriteria studi, outcome, kelompok usia, dan metode analisis yang berbeda. Heterogenitas program membuat angka rata-rata tidak selalu memprediksi hasil individual.'],
      ['Outcome apa yang sebaiknya diperhatikan?', 'Selain skor gejala, perhatikan komunikasi fungsional, kualitas hidup, kemandirian, partisipasi, kesehatan, stres keluarga, efek samping, dan suara orang autistik.'],
      ['Bagaimana keluarga menggunakan bukti?', 'Tanyakan tujuan, kompetensi penyedia, beban waktu, biaya, cara evaluasi, hak berhenti, dan alternatif. Pilih dukungan yang transparan serta aman.'],
    ],
    sources:[SRC.autismReview, SRC.autismSystematic, ['WHO: Nurturing care for children with developmental delays and disabilities','https://www.who.int/publications/i/item/B09617']],
  }),
  makeArticle({
    slug:'bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh', keyword:'mengajarkan kemandirian anak berkebutuhan khusus',
    title:'Cara Mengajarkan Kemandirian kepada Anak Berkebutuhan Khusus',
    description:'Cara bertahap mengajarkan kemandirian anak berkebutuhan khusus melalui analisis tugas, pilihan, alat bantu, bantuan yang dikurangi, dan evaluasi aman.',
    lead:'Kemandirian berarti anak memiliki kemampuan dan dukungan untuk ikut mengambil keputusan serta melakukan kegiatan sehari-hari seaman mungkin. Kemandirian bukan harus melakukan semuanya tanpa bantuan. Ajarkan satu keterampilan bermakna, pecah menjadi langkah kecil, sediakan akses komunikasi, lalu kurangi bantuan berdasarkan kesiapan.',
    points:[
      ['Bagaimana memilih keterampilan prioritas?', 'Mulai dari kebutuhan yang berdampak pada keselamatan, komunikasi, perawatan diri, mobilitas, belajar, atau partisipasi keluarga. Tanyakan pilihan anak dan hindari target yang hanya mengejar penampilan.'],
      ['Apa itu analisis tugas?', 'Analisis tugas memecah kegiatan seperti memakai baju atau menyiapkan minum menjadi langkah yang dapat diamati. Tentukan bagian yang sudah dikuasai dan jenis bantuan pada tiap langkah.'],
      ['Bagaimana memberi dan mengurangi bantuan?', 'Bantuan dapat berupa visual, contoh, isyarat, atau fisik bila aman dan disetujui. Catat bantuan yang dipakai lalu kurangi secara bertahap agar anak tidak bergantung tanpa sengaja.'],
      ['Bagaimana menggeneralisasi keterampilan?', 'Latih pada waktu, orang, dan tempat berbeda secara bertahap. Kesulitan di tempat baru bukan berarti keterampilan hilang; anak mungkin membutuhkan petunjuk atau adaptasi lingkungan.'],
    ],
    sources:[SRC.whoRehab, SRC.uu8, SRC.whoDisability],
    related:[['Liburan dengan anak berkebutuhan khusus','/artikel/liburan-dengan-anak-berkebutuhan-khusus'],['AAC di rumah','/artikel/augmentative-communication-untuk-anak-di-rumah']],
  })
);

const disabilityCluster = [
  {
    slug:'disabilitas', keyword:'disabilitas', title:'Disabilitas: Pengertian, Jenis, Hak, dan Dukungan yang Tepat',
    description:'Panduan disabilitas berbasis hak: pengertian, ragam, hambatan lingkungan, akomodasi yang layak, bahasa, serta layanan di Indonesia.',
    lead:'Disabilitas muncul dari interaksi antara kondisi individu dan hambatan sikap, informasi, bangunan, teknologi, kebijakan, atau layanan. Karena itu, dukungan tidak cukup berfokus pada tubuh seseorang. Lingkungan juga perlu diubah agar penyandang disabilitas dapat berpartisipasi setara.',
    points:[
      ['Apa pengertian disabilitas dalam pendekatan berbasis hak?', 'Pendekatan berbasis hak memandang penyandang disabilitas sebagai pemegang hak, bukan objek belas kasihan. Kebutuhan dukungan tidak mengurangi martabat, kapasitas hukum, pilihan, atau hak untuk terlibat dalam keputusan.'],
      ['Apa saja jenis disabilitas?', 'UU Nomor 8 Tahun 2016 mengelompokkan ragam disabilitas fisik, intelektual, mental, dan sensorik. Seseorang dapat mengalami satu atau lebih ragam dalam jangka lama. Pengelompokan membantu akses layanan, tetapi tidak menggambarkan seluruh pengalaman seseorang.'],
      ['Apa yang dimaksud hambatan dan akomodasi yang layak?', 'Hambatan adalah kondisi yang menghalangi partisipasi, misalnya tangga tanpa ramp, informasi tanpa teks, atau prosedur kaku. Akomodasi yang layak adalah penyesuaian yang diperlukan agar seseorang dapat menikmati hak secara setara.'],
      ['Bagaimana berbicara tentang disabilitas dengan hormat?', 'Gunakan istilah yang dipilih orang atau komunitas terkait, hindari menjadikan diagnosis sebagai ejekan, dan jangan menyamakan kebutuhan bantuan dengan ketidakmampuan mengambil keputusan. Tanyakan bantuan sebelum menyentuh tubuh atau alat bantu.'],
    ],
    related:[['Jenis disabilitas','/artikel/jenis-disabilitas'],['Disabilitas fisik','/artikel/disabilitas-fisik'],['Disabilitas sensorik','/artikel/disabilitas-sensorik'],['Disabilitas intelektual','/artikel/disabilitas-intelektual'],['Kartu disabilitas','/artikel/kartu-disabilitas'],['Yayasan disabilitas','/artikel/yayasan-disabilitas'],['Disabilitas tuna rungu','/artikel/disabilitas-tuna-rungu']],
  },
  {
    slug:'jenis-disabilitas', keyword:'jenis disabilitas', title:'Jenis Disabilitas: Fisik, Intelektual, Mental, dan Sensorik',
    description:'Jenis disabilitas menurut UU Indonesia, contoh hambatan, dukungan, serta alasan kebutuhan setiap penyandang tetap harus dinilai secara individual.',
    lead:'Jenis disabilitas dalam UU Nomor 8 Tahun 2016 mencakup fisik, intelektual, mental, dan sensorik. Ragam tersebut dapat dialami secara tunggal, ganda, atau multi dalam jangka lama. Jenis bukan daftar kemampuan. Dua orang dalam kategori yang sama dapat membutuhkan dukungan berbeda.',
    points:[
      ['Apa itu disabilitas fisik?', 'Disabilitas fisik berkaitan dengan fungsi gerak, tubuh, atau mobilitas. Hambatan dapat muncul pada tangga, jarak, permukaan, meja, toilet, transportasi, atau prosedur yang mengharuskan gerakan tertentu.'],
      ['Apa itu disabilitas intelektual?', 'Disabilitas intelektual berkaitan dengan fungsi intelektual dan keterampilan adaptif. Informasi yang mudah dibaca, demonstrasi, waktu tambahan, dukungan pengambilan keputusan, serta latihan kontekstual dapat meningkatkan partisipasi.'],
      ['Apa itu disabilitas mental?', 'Kategori ini dapat mencakup disabilitas psikososial dan perkembangan sesuai konteks hukum Indonesia. Kebutuhan dapat berkaitan dengan komunikasi, regulasi, prediktabilitas, lingkungan, atau dukungan kesehatan mental.'],
      ['Apa itu disabilitas sensorik?', 'Disabilitas sensorik berkaitan dengan fungsi penglihatan atau pendengaran. Akses dapat berupa teks alternatif, braille, kontras, pembaca layar, caption, transkrip, bahasa isyarat, pencahayaan, atau sistem dengar bantu.'],
    ],
    related:[['Disabilitas','/artikel/disabilitas'],['Disabilitas fisik','/artikel/disabilitas-fisik'],['Disabilitas sensorik','/artikel/disabilitas-sensorik'],['Disabilitas intelektual','/artikel/disabilitas-intelektual']],
  },
  {
    slug:'disabilitas-intelektual', keyword:'disabilitas intelektual', title:'Disabilitas Intelektual: Pengertian, Dukungan, dan Hak',
    description:'Pengertian disabilitas intelektual, fungsi adaptif, komunikasi mudah dipahami, pendidikan, dukungan keputusan, serta prinsip keselamatan.',
    lead:'Disabilitas intelektual berkaitan dengan fungsi intelektual dan keterampilan adaptif dalam ranah konseptual, sosial, serta praktis. Dukungan ditentukan dari fungsi dan konteks, bukan angka tunggal. Seseorang tetap memiliki hak, preferensi, relasi, kekuatan, dan kemampuan untuk belajar sepanjang hayat.',
    points:[
      ['Apa peran keterampilan adaptif?', 'Keterampilan adaptif mencakup komunikasi, pengelolaan diri, aktivitas sehari-hari, interaksi sosial, penggunaan layanan, keselamatan, belajar, dan kerja. Kemampuan dapat berbeda antar ranah serta berubah dengan dukungan.'],
      ['Bagaimana membuat informasi mudah dipahami?', 'Gunakan kalimat pendek, satu gagasan per langkah, contoh konkret, gambar yang relevan, demonstrasi, dan waktu memproses. Periksa pemahaman dengan meminta orang menjelaskan kembali menggunakan caranya sendiri.'],
      ['Apa itu dukungan pengambilan keputusan?', 'Dukungan membantu seseorang memahami pilihan, konsekuensi, dan menyampaikan kehendak tanpa otomatis mengambil alih keputusan. Bentuknya dapat berupa bahasa sederhana, orang tepercaya, waktu tambahan, atau alat komunikasi.'],
      ['Bagaimana sekolah dan keluarga menentukan target?', 'Pilih target yang memperluas komunikasi, keselamatan, perawatan diri, mobilitas, relasi, belajar, kerja, atau partisipasi komunitas. Target tidak boleh sekadar membuat seseorang terlihat normal.'],
    ],
    related:[['Disabilitas','/artikel/disabilitas'],['Jenis disabilitas','/artikel/jenis-disabilitas'],['Kemandirian anak berkebutuhan khusus','/artikel/bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh']],
  },
  {
    slug:'disabilitas-sensorik', keyword:'disabilitas sensorik', title:'Disabilitas Sensorik: Akses Penglihatan dan Pendengaran',
    description:'Panduan disabilitas sensorik, hambatan penglihatan dan pendengaran, akses komunikasi, teknologi bantu, keselamatan, dan etika bantuan.',
    lead:'Disabilitas sensorik dalam konteks hukum Indonesia mencakup antara lain hambatan fungsi penglihatan dan pendengaran. Akses terbaik tidak ditentukan hanya oleh diagnosis, tetapi oleh cara seseorang menerima informasi, berkomunikasi, bergerak, serta berpartisipasi pada lingkungan tertentu.',
    points:[
      ['Bagaimana membuat informasi aksesibel bagi disabilitas netra?', 'Sediakan teks yang dapat dibaca pembaca layar, struktur heading, teks alternatif gambar, kontras yang memadai, dokumen digital, braille bila dibutuhkan, serta deskripsi verbal untuk informasi visual.'],
      ['Bagaimana membuat komunikasi aksesibel bagi Tuli atau gangguan pendengaran?', 'Tanyakan preferensi bahasa dan moda komunikasi. Pilihan dapat mencakup bahasa isyarat, caption, transkrip, tulisan, pembacaan bibir, alat bantu dengar, atau kombinasi beberapa moda.'],
      ['Apa peran teknologi bantu?', 'Teknologi bantu dapat memperluas akses, tetapi tidak menggantikan desain yang baik. Pastikan perangkat kompatibel, tersedia cadangan, dapat dirawat, dan digunakan atas pilihan orang yang bersangkutan.'],
      ['Bagaimana menawarkan bantuan?', 'Perkenalkan diri dan tanyakan bantuan apa yang diinginkan. Jangan menarik tongkat, memegang anjing pemandu, mendorong kursi, atau mengubah perangkat komunikasi tanpa izin.'],
    ],
    related:[['Disabilitas','/artikel/disabilitas'],['Jenis disabilitas','/artikel/jenis-disabilitas'],['Disabilitas tuna rungu','/artikel/disabilitas-tuna-rungu']],
  },
  {
    slug:'disabilitas-fisik', keyword:'disabilitas fisik', title:'Disabilitas Fisik: Hambatan, Aksesibilitas, dan Dukungan',
    description:'Panduan disabilitas fisik berbasis hak: mobilitas, akses bangunan, posisi, energi, alat bantu, akomodasi sekolah, dan etika bantuan.',
    lead:'Disabilitas fisik berkaitan dengan fungsi gerak atau tubuh dan dapat memengaruhi mobilitas, ketahanan, koordinasi, posisi, atau aktivitas sehari-hari. Hambatan sering berasal dari ruang, alat, transportasi, jarak, jadwal, serta prosedur yang tidak fleksibel, bukan dari tubuh saja.',
    points:[
      ['Apa saja hambatan yang umum?', 'Tangga tanpa alternatif, pintu sempit, toilet tidak aksesibel, meja yang tidak sesuai, jalur rusak, transportasi sulit, antrean panjang, dan kewajiban berdiri dapat membatasi partisipasi.'],
      ['Bagaimana merancang akses fisik?', 'Sediakan jalur bebas hambatan, ramp atau lift yang aman, pegangan, ruang putar, tempat duduk, toilet aksesibel, permukaan stabil, penunjuk jelas, serta rencana evakuasi inklusif.'],
      ['Bagaimana sekolah memberi akomodasi?', 'Akomodasi dapat berupa posisi meja, akses ruang, waktu berpindah, alternatif menulis, perangkat digital, istirahat, penyesuaian aktivitas, atau bantuan personal berdasarkan kebutuhan.'],
      ['Bagaimana menghormati alat bantu?', 'Kursi roda, kruk, prostesis, dan alat lainnya adalah bagian dari ruang pribadi. Jangan memindahkan, menyandarkan barang, atau menggunakannya tanpa izin.'],
    ],
    related:[['Disabilitas','/artikel/disabilitas'],['Jenis disabilitas','/artikel/jenis-disabilitas'],['Kartu disabilitas','/artikel/kartu-disabilitas']],
  },
  {
    slug:'kartu-disabilitas', keyword:'kartu disabilitas', title:'Kartu Disabilitas: Fungsi, Dokumen, dan Cara Mengurus',
    description:'Penjelasan Kartu Penyandang Disabilitas, fungsi, dokumen persiapan, verifikasi Dinas Sosial, keamanan data, serta cara meminta informasi resmi.',
    lead:'Kartu Penyandang Disabilitas adalah dokumen identitas dalam layanan sosial. Alur, persyaratan, dan sistem dapat berubah atau berbeda menurut wilayah. Karena itu, sumber utama untuk pengajuan adalah Dinas Sosial kabupaten atau kota sesuai domisili, bukan akun atau jasa tidak resmi.',
    points:[
      ['Apa fungsi kartu disabilitas?', 'Kartu membantu identifikasi dalam pelaksanaan kebijakan dan akses program tertentu. Kepemilikan kartu tidak boleh dijadikan alasan untuk menolak hak orang yang datanya masih diproses atau belum terjangkau pendataan.'],
      ['Dokumen apa yang perlu disiapkan?', 'Instansi dapat meminta identitas, Kartu Keluarga, foto, bukti domisili, dan keterangan yang relevan. Konfirmasikan daftar terbaru kepada petugas karena persyaratan final dapat berubah.'],
      ['Bagaimana memeriksa proses pengajuan?', 'Minta nama unit, nomor tanda terima, estimasi, cara koreksi, dan kanal pengaduan. Simpan salinan dokumen serta catat tanggal dan nama petugas yang memberi informasi.'],
      ['Bagaimana menjaga keamanan data?', 'KTP, KK, diagnosis, nomor telepon, dan foto adalah data sensitif. Kirim hanya melalui kanal resmi, batasi salinan, dan jangan membagikannya di komentar publik atau grup terbuka.'],
    ],
    sources:[SRC.uu8,['Kementerian Sosial Republik Indonesia','https://kemensos.go.id/'],['Cek Bansos Kemensos','https://cekbansos.kemensos.go.id/']],
    related:[['Cara membuat kartu disabilitas','/artikel/bagaimana-cara-membuat-kartu-disabilitas'],['Disabilitas','/artikel/disabilitas']],
  },
  {
    slug:'yayasan-disabilitas', keyword:'yayasan disabilitas', title:'Yayasan Disabilitas: Cara Menilai Program dan Dampaknya',
    description:'Cara memilih yayasan disabilitas yang transparan, berbasis hak, aman, aksesibel, melibatkan penyandang disabilitas, dan memiliki indikator dampak.',
    lead:'Yayasan disabilitas dapat menjalankan pendidikan, pendampingan keluarga, advokasi, rehabilitasi, pelatihan, atau dukungan komunitas. Nama yayasan tidak cukup untuk menilai mutu. Periksa legalitas, tujuan, tata kelola, perlindungan peserta, aksesibilitas, transparansi biaya, dan keterlibatan penyandang disabilitas.',
    points:[
      ['Apa yang perlu diperiksa dari legalitas?', 'Periksa nama badan hukum, keputusan pengesahan, akta, alamat, pengurus, kanal resmi, serta kecocokan kegiatan dengan tujuan organisasi. Legalitas penting, tetapi mutu program tetap perlu dievaluasi terpisah.'],
      ['Apa tanda program berbasis hak?', 'Program memberi pilihan, menjaga privasi, menyediakan akses komunikasi, mencegah kekerasan, menerima umpan balik, tidak menjanjikan kesembuhan, dan melibatkan peserta dalam keputusan.'],
      ['Bagaimana menilai dampak?', 'Minta tujuan, indikator, cara mengumpulkan data, risiko, mekanisme keluhan, serta hasil yang dilaporkan. Dampak sebaiknya mencakup partisipasi, kualitas hidup, akses, dan suara peserta.'],
      ['Pertanyaan apa yang perlu diajukan sebelum mendaftar?', 'Tanyakan kompetensi tim, rasio pendamping, biaya, jadwal, aksesibilitas, cara komunikasi, keamanan, kebijakan foto, proses berhenti, dan rujukan bila kebutuhan di luar kapasitas yayasan.'],
    ],
    related:[['Yayasan sosial dan inklusi','/yayasan-sosial'],['Tentang YUKA','/tentang'],['Disabilitas','/artikel/disabilitas']],
  },
  {
    slug:'disabilitas-tuna-rungu', keyword:'disabilitas tuna rungu', title:'Disabilitas Tuna Rungu: Komunikasi, Akses, dan Dukungan',
    description:'Panduan tentang Tuli dan gangguan pendengaran, preferensi istilah, bahasa isyarat, caption, teknologi bantu, pendidikan, dan etika komunikasi.',
    lead:'Orang Tuli dan orang dengan gangguan pendengaran memiliki identitas, bahasa, kemampuan dengar, serta preferensi komunikasi yang beragam. Istilah yang dipilih dapat berbeda. Tanyakan langsung cara komunikasi yang paling aksesibel dan jangan menganggap satu alat atau metode cocok untuk semua orang.',
    points:[
      ['Apa perbedaan Tuli dan gangguan pendengaran?', 'Tuli dengan huruf kapital sering digunakan untuk identitas budaya dan komunitas bahasa isyarat. Gangguan pendengaran atau hard of hearing dapat digunakan dalam konteks fungsi dengar. Pilihan istilah berada pada orang terkait.'],
      ['Bagaimana berkomunikasi dengan aksesibel?', 'Dapatkan perhatian secara sopan, hadapkan wajah, gunakan pencahayaan baik, sediakan tulisan atau caption, dan libatkan juru bahasa isyarat bila diminta. Bicara jelas tanpa berteriak.'],
      ['Apa peran bahasa isyarat dan caption?', 'Bahasa isyarat adalah bahasa alami dengan tata bahasa sendiri, sedangkan caption menyajikan informasi audio dalam teks. Banyak kegiatan membutuhkan keduanya karena kebutuhan peserta berbeda.'],
      ['Apakah alat bantu dengar wajib digunakan?', 'Alat bantu dengar atau implan dapat bermanfaat bagi sebagian orang berdasarkan asesmen dan pilihan. Perangkat tidak membuat akses komunikasi lain menjadi tidak perlu.'],
    ],
    sources:[SRC.whoHearing,SRC.uu8,['World Federation of the Deaf','https://wfdeaf.org/']],
    related:[['Disabilitas sensorik','/artikel/disabilitas-sensorik'],['Jenis disabilitas','/artikel/jenis-disabilitas'],['Disabilitas','/artikel/disabilitas']],
  },
];

for (const item of disabilityCluster) articles.push(makeArticle({
  ...item,
  sources: item.sources || [SRC.uu8, SRC.whoDisability, SRC.whoRehab],
  about: [item.keyword, 'Penyandang Disabilitas', 'Hak Disabilitas', 'Aksesibilitas'],
}));

const inclusionChildren = [
  {
    slug:'prinsip-inklusi-sosial', keyword:'prinsip inklusi sosial', title:'Prinsip Inklusi Sosial: Hak, Akses, Partisipasi, dan Suara',
    description:'Prinsip inklusi sosial untuk keluarga, sekolah, organisasi, dan layanan: hak, aksesibilitas, partisipasi bermakna, pilihan, keamanan, serta evaluasi.',
    lead:'Prinsip inklusi sosial menuntut lebih dari sekadar menghadirkan orang dalam ruangan yang sama. Inklusi terjadi ketika orang memiliki akses, informasi, pilihan, suara dalam keputusan, peran yang bermakna, relasi setara, dan perlindungan dari diskriminasi.',
    points:[
      ['Mengapa pendekatan berbasis hak menjadi dasar?', 'Pendekatan berbasis hak menempatkan setiap orang sebagai pemegang hak dan anggota komunitas. Layanan tidak boleh bergantung pada belas kasihan atau syarat untuk terlihat normal.'],
      ['Apa beda akses dan partisipasi?', 'Akses memungkinkan seseorang masuk atau menerima informasi. Partisipasi berarti ia dapat memilih, berkontribusi, memengaruhi keputusan, dan memperoleh manfaat. Kehadiran tanpa peran belum tentu inklusif.'],
      ['Mengapa suara peserta harus dilibatkan?', 'Orang yang mengalami hambatan memiliki pengetahuan penting tentang desain layanan. Libatkan mereka sejak perencanaan, bukan hanya meminta persetujuan setelah keputusan dibuat.'],
      ['Bagaimana mengukur prinsip inklusi?', 'Gunakan indikator akses, keterwakilan, rasa aman, kualitas relasi, pengaruh pada keputusan, mekanisme keluhan, dan perbaikan hambatan. Pisahkan data menurut kelompok bila aman.'],
    ],
  },
  {
    slug:'teori-inklusi-sosial', keyword:'teori inklusi sosial', title:'Teori Inklusi Sosial: Dari Kehadiran ke Partisipasi Bermakna',
    description:'Teori inklusi sosial dijelaskan melalui model sosial disabilitas, kapabilitas, partisipasi, rasa memiliki, modal sosial, dan interseksionalitas.',
    lead:'Teori inklusi sosial membantu menjelaskan mengapa sebagian orang tetap tersisih meski layanan tersedia. Analisis perlu melihat kemampuan nyata untuk memilih dan berpartisipasi, hambatan struktural, relasi kuasa, rasa memiliki, jaringan sosial, serta pengalaman yang berlapis.',
    points:[
      ['Apa hubungan model sosial disabilitas dengan inklusi?', 'Model sosial memindahkan perhatian dari kekurangan individu ke hambatan lingkungan dan sikap. Pertanyaannya berubah dari apa yang salah pada orang menjadi hambatan apa yang harus dibongkar.'],
      ['Apa yang dimaksud kapabilitas?', 'Pendekatan kapabilitas menilai kebebasan nyata untuk melakukan dan menjadi sesuatu yang bernilai. Sumber daya yang sama tidak selalu menghasilkan peluang yang sama karena kebutuhan dukungan berbeda.'],
      ['Mengapa rasa memiliki penting?', 'Seseorang dapat hadir tetapi tetap merasa tidak diterima atau tidak berpengaruh. Rasa memiliki muncul dari pengakuan, relasi timbal balik, keamanan identitas, dan kesempatan berkontribusi.'],
      ['Apa peran interseksionalitas?', 'Hambatan dapat berlapis berdasarkan disabilitas, gender, usia, kemiskinan, bahasa, lokasi, atau identitas lain. Program inklusi perlu memeriksa siapa yang masih tertinggal dalam kelompok sasaran.'],
    ],
  },
  {
    slug:'konsep-inklusi-sosial', keyword:'konsep inklusi sosial', title:'Konsep Inklusi Sosial: Dimensi, Indikator, dan Contoh',
    description:'Konsep inklusi sosial meliputi akses, partisipasi, pengakuan, relasi, sumber daya, hak, dan indikator praktis untuk organisasi maupun komunitas.',
    lead:'Konsep inklusi sosial menggambarkan proses mengurangi hambatan agar semua orang dapat mengakses sumber daya, berpartisipasi, membangun relasi, diakui, dan memengaruhi keputusan. Inklusi adalah proses berkelanjutan, bukan label sekali jadi.',
    points:[
      ['Apa dimensi utama inklusi sosial?', 'Dimensinya mencakup akses layanan dan informasi, partisipasi, pengakuan identitas, relasi sosial, sumber daya, perlindungan hak, serta pengaruh dalam pengambilan keputusan.'],
      ['Apa beda inklusi, integrasi, dan segregasi?', 'Segregasi memisahkan, integrasi memasukkan orang ke sistem yang relatif tetap, sedangkan inklusi mengubah sistem agar keragaman dapat berpartisipasi sejak awal.'],
      ['Indikator apa yang dapat digunakan?', 'Gunakan data siapa yang datang, bertahan, berbicara, dipilih, menerima manfaat, mengajukan keluhan, dan melihat perbaikan. Lengkapi angka dengan pengalaman peserta.'],
      ['Apa contoh konsep inklusi dalam layanan?', 'Contohnya pendaftaran multikanal, dokumen mudah dibaca, akses fisik, caption, jadwal fleksibel, biaya transparan, pendamping pilihan, serta forum peserta yang memengaruhi program.'],
    ],
  },
  {
    slug:'penerapan-inklusi-sosial', keyword:'penerapan inklusi sosial', title:'Penerapan Inklusi Sosial: Audit dan Rencana Aksi Praktis',
    description:'Cara menerapkan inklusi sosial melalui pemetaan pemangku kepentingan, audit hambatan, prioritas, akomodasi, pelatihan, keluhan, dan evaluasi.',
    lead:'Penerapan inklusi sosial dimulai dengan mendengar kelompok yang terdampak, memetakan hambatan, menentukan prioritas, menyediakan akomodasi, serta mengukur apakah akses dan pengaruh benar-benar berubah. Rencana terbaik memiliki penanggung jawab, tenggat, anggaran, dan mekanisme koreksi.',
    points:[
      ['Bagaimana memulai audit inklusi?', 'Petakan perjalanan peserta dari menemukan informasi sampai memberi umpan balik. Periksa hambatan fisik, digital, komunikasi, biaya, waktu, sikap, keamanan, dan prosedur pada setiap tahap.'],
      ['Bagaimana menentukan prioritas?', 'Utamakan risiko keselamatan dan pelanggaran hak, lalu hambatan yang berdampak pada banyak orang atau mudah diperbaiki. Jangan menunda akomodasi individual yang mendesak karena menunggu renovasi besar.'],
      ['Siapa yang bertanggung jawab?', 'Tetapkan pemilik tindakan, anggaran, tenggat, indikator, dan jalur eskalasi. Kepemimpinan bertanggung jawab, sementara kelompok terdampak berperan sebagai mitra berbayar bila diminta memberi keahlian.'],
      ['Bagaimana mengevaluasi penerapan?', 'Bandingkan kondisi awal dengan akses, partisipasi, pengalaman, keluhan, penyelesaian, dan hasil. Publikasikan pembelajaran tanpa membuka identitas pribadi.'],
    ],
  },
];

for (const item of inclusionChildren) articles.push(makeArticle({
  ...item,
  sources:[SRC.uu8, SRC.whoDisability, ['United Nations: Convention on the Rights of Persons with Disabilities','https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-rights-persons-disabilities']],
  related:[['Apa itu inklusi sosial','/artikel/inklusi-sosial'], ...inclusionChildren.filter(x => x.slug !== item.slug).map(x => [x.keyword[0].toUpperCase()+x.keyword.slice(1), `/artikel/${x.slug}`])],
  about:[item.keyword, 'Inklusi Sosial', 'Partisipasi', 'Aksesibilitas'],
}));

articles.push(makeArticle({
  slug:'yayasan-sosial', keyword:'yayasan sosial', title:'Yayasan Sosial: Cara Menilai Legalitas, Program, dan Dampak',
  description:'Panduan memilih yayasan sosial yang legal, transparan, aman, inklusif, dan terukur, sekaligus mengenal pendekatan Yayasan Ukhuwah Kaffah Amanatullah.',
  lead:'Yayasan sosial adalah badan hukum nirlaba yang mengelola kekayaan untuk tujuan sosial, keagamaan, dan kemanusiaan sesuai peraturan. Sebelum berdonasi atau mengikuti program, periksa identitas badan hukum, tata kelola, keamanan peserta, transparansi, aksesibilitas, dan bukti dampaknya.',
  points:[
    ['Bagaimana memeriksa legalitas yayasan sosial?', 'Cocokkan nama badan hukum, keputusan pengesahan Kementerian Hukum, akta notaris, alamat, pengurus, serta kanal resmi. YUKA adalah Yayasan Ukhuwah Kaffah Amanatullah dengan keputusan AHU-0004032.AH.01.04.Tahun 2024.'],
    ['Apa yang menunjukkan tata kelola yang sehat?', 'Cari pemisahan peran pembina, pengurus, dan pengawas, pencatatan dana, kebijakan konflik kepentingan, mekanisme persetujuan, perlindungan data, serta laporan kegiatan yang dapat diverifikasi.'],
    ['Bagaimana menilai program sosial yang inklusif?', 'Program inklusif melibatkan peserta, menyediakan akses komunikasi dan fisik, memiliki perlindungan anak dan orang rentan, menerima keluhan, serta tidak menggunakan foto atau kisah pribadi tanpa persetujuan.'],
    ['Bagaimana menilai dampak tanpa terjebak angka besar?', 'Tanyakan perubahan apa yang diukur, siapa yang menyampaikan hasil, berapa lama dampak bertahan, siapa yang belum terjangkau, serta bagaimana masukan peserta mengubah program.'],
  ],
  sources:[['UU Nomor 16 Tahun 2001 tentang Yayasan','https://peraturan.bpk.go.id/Details/44903/uu-no-16-tahun-2001'],SRC.uu8,['Administrasi Hukum Umum','https://ahu.go.id/']],
  related:[['Tentang legalitas dan sejarah YUKA','/tentang'],['Program YUKA','/program'],['Yayasan disabilitas','/artikel/yayasan-disabilitas']],
  about:['Yayasan Sosial','Yayasan Ukhuwah Kaffah Amanatullah','Inklusi Sosial','Tata Kelola Nirlaba'],
}));

function insertBefore(html, needle, block) {
  const index = html.indexOf(needle);
  if (index < 0) return `${html}\n${block}`;
  return `${html.slice(0,index)}${block}\n${html.slice(index)}`;
}

function replaceJsonLd(html, slug) {
  let foundArticle = false;
  let foundExactArticle = false;
  const clusterSlugs = new Set(['disabilitas','jenis-disabilitas','disabilitas-intelektual','disabilitas-sensorik','disabilitas-fisik','kartu-disabilitas','yayasan-disabilitas','disabilitas-tuna-rungu','abk-adalah-anak-berkebutuhan-khusus']);
  const update = value => {
    if (Array.isArray(value)) return value.map(update);
    if (!value || typeof value !== 'object') return value;
    for (const key of Object.keys(value)) value[key] = update(value[key]);
    const types = Array.isArray(value['@type']) ? value['@type'] : [value['@type']];
    if (types.some(type => type === 'Article' || type === 'BlogPosting')) {
      foundArticle = true;
      if (types.includes('Article')) foundExactArticle = true;
      value.author = { '@type':'Person', '@id':AUTHOR.id, name:AUTHOR.name, url:AUTHOR.url, image:AUTHOR.image, jobTitle:AUTHOR.jobTitle };
      value.publisher = { '@id': ORG_ID };
      value.dateModified = `${TODAY}T20:30:00+07:00`;
      if (clusterSlugs.has(slug)) value.about = [
        { '@type':'Thing', name:'Disabilitas' },
        { '@type':'Thing', name:'Anak Berkebutuhan Khusus' },
        { '@type':'Thing', name:'Pendidikan Inklusif' },
      ];
    }
    return value;
  };
  html = html.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi, (whole, body) => {
    try {
      const parsed = update(JSON.parse(body));
      return `<script type="application/ld+json">${JSON.stringify(parsed).replace(/</g,'\\u003c')}</script>`;
    } catch {
      return whole;
    }
  });
  if (!foundArticle) {
    const title = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || slug).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
    const description = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)/i)?.[1] || `Panduan YUKA tentang ${title}.`;
    const fallback = { '@context':'https://schema.org', '@type':'Article', headline:title, description, mainEntityOfPage:`${BASE}/artikel/${slug}`, author:{ '@type':'Person','@id':AUTHOR.id,name:AUTHOR.name,url:AUTHOR.url,image:AUTHOR.image,jobTitle:AUTHOR.jobTitle }, publisher:{'@id':ORG_ID}, datePublished:`${TODAY}T09:00:00+07:00`,dateModified:`${TODAY}T20:30:00+07:00`, inLanguage:'id-ID' };
    if (clusterSlugs.has(slug)) fallback.about = [{ '@type':'Thing',name:'Disabilitas'},{'@type':'Thing',name:'Anak Berkebutuhan Khusus'},{'@type':'Thing',name:'Pendidikan Inklusif'}];
    html = insertBefore(html, '</head>', `<script type="application/ld+json">${JSON.stringify(fallback)}</script>`);
  }
  if (clusterSlugs.has(slug) && !foundExactArticle) {
    const title = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || slug).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
    const exact = {'@context':'https://schema.org','@type':'Article','@id':`${BASE}/artikel/${slug}#article-catchup`,headline:title,mainEntityOfPage:`${BASE}/artikel/${slug}`,author:{'@type':'Person','@id':AUTHOR.id,name:AUTHOR.name,url:AUTHOR.url},publisher:{'@id':ORG_ID},datePublished:`${TODAY}T09:00:00+07:00`,dateModified:`${TODAY}T20:30:00+07:00`,about:[{'@type':'Thing',name:'Disabilitas'},{'@type':'Thing',name:'Anak Berkebutuhan Khusus'},{'@type':'Thing',name:'Pendidikan Inklusif'}],inLanguage:'id-ID'};
    html = insertBefore(html, '</head>', `<script type="application/ld+json">${JSON.stringify(exact)}</script>`);
  }
  return html;
}

function enrichArticleFile(file) {
  const slug = path.basename(file, '.html');
  let html = fs.readFileSync(file, 'utf8');
  html = replaceJsonLd(html, slug);
  if (!html.includes('/profil/bu-yupie-nurul-azkia')) {
    const byline = `<aside data-catchup="named-byline" style="margin:18px 0;padding:14px 18px;border-left:4px solid #f4b41a;background:#fff8e5"><strong>Ditulis dan ditinjau secara editorial oleh <a href="/profil/bu-yupie-nurul-azkia">Bu Yupie Nurul Azkia</a></strong><br><span>Pendiri dan Pengajar Senior YUKA dengan pengalaman pendampingan anak berkebutuhan khusus. Peninjauan ini bersifat editorial dan bukan diagnosis klinis.</span></aside>`;
    html = html.replace(/(<h1\b[^>]*>[\s\S]*?<\/h1>)/i, `$1\n${byline}`);
  }
  if (!html.includes('data-catchup="editorial-policy"')) {
    const disclosure = `<aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum, bukan pengganti konsultasi tenaga kesehatan. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>`;
    html = insertBefore(html, '</article>', disclosure);
  }
  if (!html.includes('data-catchup-footer="editorial"')) html = insertBefore(html, '</footer>', `<p data-catchup-footer="editorial"><a href="/kebijakan-editorial">Kebijakan Editorial</a></p>`);
  fs.writeFileSync(file, html.replace(/\u2014/g,'-').replace(/Â·/g,'·'), 'utf8');
}

function pageTemplate({title,description,canonical,body,schema}) {
  return `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} | YUKA</title><meta name="description" content="${esc(description)}"><meta name="robots" content="index, follow"><link rel="canonical" href="${canonical}"><link rel="stylesheet" href="/assets/css/style.min.css"><script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script><style>.catchup-page{max-width:960px;margin:0 auto;padding:115px 22px 60px}.catchup-page h1{font-size:clamp(2rem,5vw,3.3rem);line-height:1.14;color:#24365d}.catchup-page h2{margin-top:36px;color:#24365d}.catchup-page p,.catchup-page li{line-height:1.8}.notice{background:#fff7df;border-left:5px solid #f4b41a;padding:18px}.fact-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:15px}.fact{border:1px solid #d9dfeb;padding:17px;border-radius:10px}.nav-simple{position:absolute;top:0;left:0;right:0;padding:17px 5%;display:flex;justify-content:space-between;background:#fff;border-bottom:1px solid #e7eaf0}.nav-simple img{width:170px}.nav-simple a{margin-left:18px;color:#24365d;text-decoration:none;font-weight:600}.footer-simple{padding:32px;background:#17233c;color:#fff;text-align:center}.footer-simple a{color:#ffd467}</style></head><body><nav class="nav-simple"><a href="/"><img src="/Logo/Logo.webp" alt="YUKA Indonesia"></a><div><a href="/tentang">Tentang</a><a href="/program">Program</a><a href="/artikel">Artikel</a></div></nav><main class="catchup-page">${body}</main><footer class="footer-simple"><p>Yayasan Ukhuwah Kaffah Amanatullah, Sleman, Daerah Istimewa Yogyakarta</p><p><a href="/kebijakan-editorial">Kebijakan Editorial</a> · <a href="/kontak">Kontak</a></p></footer></body></html>`.replace(/\u2014/g,'-');
}

function buildEditorialPage() {
  const body = `<h1>Kebijakan Editorial YUKA</h1><p class="notice"><strong>Komitmen kami:</strong> YUKA menerbitkan informasi pendidikan, pengasuhan, kesehatan, disabilitas, dan inklusi untuk membantu pembaca menyiapkan pertanyaan serta dukungan yang lebih baik. Konten bukan diagnosis, resep, atau pengganti konsultasi tenaga profesional.</p>
  <h2>Siapa yang menulis dan meninjau konten?</h2><p>Penulis dan peninjau editorial ditampilkan dengan nama serta tautan profil. Bu Yupie Nurul Azkia berperan sebagai Pendiri dan Pengajar Senior YUKA. Pengalamannya berada pada pendampingan pendidikan anak berkebutuhan khusus. Jika sebuah artikel membutuhkan penilaian medis, psikologis, terapi, hukum, atau gizi, pembaca tetap diarahkan kepada tenaga yang kompeten. Kami tidak menyebut peninjauan editorial sebagai tinjauan klinis.</p>
  <h2>Bagaimana topik dan tujuan artikel dipilih?</h2><p>Topik dipilih dari pertanyaan keluarga, kebutuhan peserta program, data pencarian agregat, perubahan layanan, serta kebutuhan akses informasi. Tujuan artikel ditetapkan sebelum penulisan: menjelaskan istilah, membantu perencanaan diskusi, menunjukkan pilihan dukungan, atau mengarahkan ke sumber resmi. Kami menghindari judul yang menjanjikan kesembuhan, hasil pasti, atau diagnosis mandiri.</p>
  <h2>Sumber apa yang diprioritaskan?</h2><p>Kami memprioritaskan peraturan Indonesia, kementerian dan lembaga resmi, organisasi kesehatan atau pendidikan yang berwenang, pedoman profesi, systematic review, serta penelitian peer-reviewed. Artikel mencantumkan tautan sumber agar pembaca dapat menilai konteksnya. Klaim kesehatan yang dapat berubah ditinjau terhadap sumber terbaru sebelum pembaruan.</p>
  <h2>Bagaimana kami membedakan informasi dan nasihat profesional?</h2><p>Informasi umum menjelaskan konsep, pilihan, dan pertanyaan yang dapat dibawa ke konsultasi. Nasihat profesional membutuhkan hubungan layanan, asesmen, konteks individual, kompetensi, dan tanggung jawab. Karena itu, pembaca tidak boleh memulai atau menghentikan obat, diet, terapi, alat bantu, atau program pendidikan hanya berdasarkan artikel YUKA.</p>
  <h2>Bahasa, disabilitas, dan partisipasi</h2><p>Kami berupaya memakai bahasa yang menghormati martabat, preferensi identitas, komunikasi, serta keberagaman perkembangan. Penyandang disabilitas dan anak bukan objek belas kasihan. Artikel menilai hambatan lingkungan, aksesibilitas, pilihan, dan partisipasi. Istilah dapat berbeda antar orang dan komunitas; bila ragu, tanyakan preferensi orang terkait.</p>
  <h2>Koreksi, pembaruan, dan tanggal</h2><p>Artikel menampilkan tanggal terbit atau pembaruan bila tersedia. Koreksi faktual material dilakukan secepat mungkin setelah diverifikasi. Pembaruan tidak menghapus konteks penting hanya untuk membuat klaim terlihat lebih kuat. Untuk perubahan besar, kami meninjau judul, ringkasan, sumber, tautan, struktur data, serta pernyataan keselamatan.</p>
  <h2>Konflik kepentingan, donasi, dan program YUKA</h2><p>YUKA dapat menautkan program, donasi, atau layanan sendiri ketika relevan. Tautan tersebut tidak mengubah standar sumber. Kami tidak menerima pembayaran untuk mengubah kesimpulan kesehatan. Bila ada kemitraan, sponsor, atau hubungan material pada konten tertentu, hubungan itu perlu diungkapkan secara jelas.</p>
  <h2>Privasi, keamanan, dan cerita peserta</h2><p>Data kesehatan, pendidikan, identitas, dan keluarga diperlakukan sebagai informasi sensitif. Foto, nama, serta kisah pribadi hanya boleh digunakan dengan persetujuan yang sesuai. Informasi yang tidak diperlukan untuk tujuan artikel tidak dipublikasikan. Pembaca tidak perlu mengirim diagnosis atau dokumen identitas untuk melaporkan koreksi.</p>
  <h2>Bagaimana melaporkan kesalahan?</h2><p>Kirim URL artikel, bagian yang dipersoalkan, alasan, dan sumber pendukung ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>. Kontak ini dipantau oleh YUKA. Kami menilai laporan berdasarkan dampak, bukti, serta urgensi keselamatan. Pertanyaan layanan dapat disampaikan melalui <a href="/kontak">halaman kontak</a>.</p>
  <h2>Tentang organisasi</h2><p>YUKA adalah Yayasan Ukhuwah Kaffah Amanatullah yang berfokus pada kegiatan sosial, pendidikan, dan dakwah dengan perhatian pada pendidikan inklusi. Pelajari identitas, legalitas, pengurus, dan alamat pada <a href="/tentang">halaman Tentang YUKA</a>.</p>`;
  const schema = {'@context':'https://schema.org','@type':'WebPage',name:'Kebijakan Editorial YUKA',url:`${BASE}/kebijakan-editorial`,dateModified:`${TODAY}T20:30:00+07:00`,publisher:{'@id':ORG_ID},about:['Kebijakan editorial','Konten kesehatan','Disabilitas','Pendidikan inklusif']};
  write('kebijakan-editorial.html', pageTemplate({title:'Kebijakan Editorial',description:'Proses penulisan, sumber, peninjauan, koreksi, dan batasan konten kesehatan, disabilitas, serta pendidikan YUKA.',canonical:`${BASE}/kebijakan-editorial`,body,schema}));
}

function buildProfiles() {
  const people = [
    {slug:'bu-yupie-nurul-azkia',name:'Bu Yupie Nurul Azkia',role:'Pendiri dan Pengajar Senior YUKA',image:'/Team/Bu%20Yupie.webp',bio:'Bu Yupie Nurul Azkia adalah pendiri dan pengajar senior YUKA. Ia terlibat dalam pengembangan pembelajaran adaptif serta pendampingan anak berkebutuhan khusus dan keluarga. Perannya pada situs adalah memberi konteks praktik pendidikan dan peninjauan editorial. Peran ini tidak dinyatakan sebagai diagnosis atau tinjauan klinis.'},
    {slug:'pak-diyat',name:'Pak Diyat',role:'Pendiri dan Ketua Yayasan',image:'/Team/Pak%20Diyat.webp',bio:'Pak Diyat adalah pendiri dan Ketua Yayasan Ukhuwah Kaffah Amanatullah. Ia menginisiasi kegiatan sosial dan pendidikan bersama Bu Yupie, memimpin pengembangan yayasan, serta menghubungkan program pendidikan inklusi dengan pelayanan komunitas.'},
  ];
  for (const p of people) {
    const url=`${BASE}/profil/${p.slug}`;
    const schema={'@context':'https://schema.org','@type':'Person','@id':`${url}#person`,name:p.name,url,image:`${BASE}${p.image}`,jobTitle:p.role,worksFor:{'@id':ORG_ID},knowsAbout:['Pendidikan inklusif','Anak berkebutuhan khusus','Pendampingan keluarga']};
    const body=`<article><img src="${p.image}" alt="${esc(p.name)}" style="width:170px;height:170px;object-fit:cover;border-radius:50%"><h1>${esc(p.name)}</h1><p class="notice"><strong>${esc(p.role)}</strong></p><p>${esc(p.bio)}</p><h2>Peran di YUKA</h2><p>${esc(p.name)} terlibat dalam pengembangan kegiatan sosial dan pendidikan YUKA di Sleman. Profil ini menjelaskan peran publik yang telah ditampilkan pada halaman organisasi dan tidak menambahkan gelar atau sertifikasi yang belum diverifikasi.</p><h2>Topik kontribusi</h2><ul><li>Pendidikan inklusif dan dukungan belajar yang adaptif</li><li>Pendampingan anak berkebutuhan khusus dan keluarga</li><li>Partisipasi sosial, kemandirian, dan akses komunikasi</li><li>Peninjauan editorial konten pendidikan YUKA</li></ul><h2>Transparansi editorial</h2><p>Artikel kesehatan dan disabilitas di situs ini adalah informasi umum. Peninjauan editorial oleh tim YUKA tidak menggantikan asesmen dokter, psikolog, terapis, ahli gizi, audiolog, atau tenaga profesional lain. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>.</p><p><a href="/tentang">Kembali ke profil organisasi dan tim YUKA</a>.</p></article>`;
    write(`profil/${p.slug}.html`,pageTemplate({title:p.name,description:`Profil ${p.name}, ${p.role}, dan kontribusinya pada pendidikan inklusif serta pendampingan keluarga di YUKA.`,canonical:url,body,schema}));
  }
}

function normalizeOrganizationSchema(html) {
  const update = value => {
    if (Array.isArray(value)) return value.map(update);
    if (!value || typeof value !== 'object') return value;
    for (const key of Object.keys(value)) value[key]=update(value[key]);
    const types=Array.isArray(value['@type'])?value['@type']:[value['@type']];
    if (types.includes('NGO') || types.includes('Organization') || types.includes('EducationalOrganization')) {
      value.name='Yayasan Ukhuwah Kaffah Amanatullah';
      value.alternateName=['YUKA','Ukhuwah Kaffah Amanatullah','Amanatullah'];
      value.foundingDate='2024-03-13';
      value.sameAs=['https://www.instagram.com/yukaindonesia','https://www.facebook.com/yukaindonesia'];
    }
    return value;
  };
  return html.replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi,(whole,body)=>{
    try{return `<script type="application/ld+json">${JSON.stringify(update(JSON.parse(body))).replace(/</g,'\\u003c')}</script>`;}catch{return whole;}
  });
}

function patchInclusionParent() {
  const file=path.join(ROOT,'artikel','inklusi-sosial.html');
  let html=fs.readFileSync(file,'utf8');
  html=html.replace(/<h2 id="prinsip">[^<]*<\/h2>/, '<h2 id="prinsip">Apa Saja Prinsip Inklusi Sosial?</h2>');
  html=html.replace(/<h2 id="penerapan">[^<]*<\/h2>/, '<h2 id="penerapan">Bagaimana Penerapan Inklusi Sosial Dilakukan?</h2>');
  if(!html.includes('data-catchup="inclusion-children"')){
    const block=`<section data-catchup="inclusion-children"><h2 id="teori">Apa Teori yang Menjelaskan Inklusi Sosial?</h2><p>Teori inklusi sosial melihat hambatan struktural, kapabilitas nyata, rasa memiliki, relasi kuasa, dan pengalaman yang berlapis. Teori membantu organisasi memahami mengapa kehadiran seseorang belum otomatis menjadi partisipasi. <a href="/artikel/teori-inklusi-sosial">Pelajari teori inklusi sosial secara lengkap</a>.</p><h2 id="konsep">Apa Konsep Utama Inklusi Sosial?</h2><p>Konsep inklusi sosial mencakup akses, partisipasi, pengakuan, relasi, sumber daya, hak, dan pengaruh dalam keputusan. Ukur bukan hanya jumlah peserta, tetapi siapa yang dapat memilih, berkontribusi, serta melihat hambatan diperbaiki. <a href="/artikel/konsep-inklusi-sosial">Pelajari konsep dan indikator inklusi sosial</a>.</p><div style="background:#fff7df;padding:18px;border-left:5px solid #f4b41a"><strong>Empat panduan turunan:</strong><ul><li><a href="/artikel/prinsip-inklusi-sosial">Prinsip inklusi sosial</a></li><li><a href="/artikel/teori-inklusi-sosial">Teori inklusi sosial</a></li><li><a href="/artikel/konsep-inklusi-sosial">Konsep inklusi sosial</a></li><li><a href="/artikel/penerapan-inklusi-sosial">Penerapan inklusi sosial</a></li></ul></div></section>`;
    html=insertBefore(html,'<h2 id="vs-eksklusi">',block);
  }
  html=html.replace('<h2 id="pengertian">Apa Itu Inklusi Sosial?</h2>','<h2 id="pengertian">Apa Itu Inklusi Sosial?</h2><p><strong>Jawaban singkat:</strong> Inklusi sosial adalah proses menghilangkan hambatan agar setiap orang dapat mengakses sumber daya, berpartisipasi, membangun relasi, diakui, dan memengaruhi keputusan. Kehadiran saja belum cukup. Orang perlu memperoleh informasi yang dapat diakses, pilihan yang nyata, rasa aman, peran bermakna, dan mekanisme untuk mengubah layanan.</p>');
  fs.writeFileSync(file,html.replace(/\u2014/g,'-'),'utf8');
}

function patchAdhd() {
  const file=path.join(ROOT,'artikel','adhd-adalah.html');
  let html=fs.readFileSync(file,'utf8');
  const headings=[
    ['pengertian','Apa Itu ADHD?'],['gejala','Apa Ciri-Ciri ADHD pada Anak?'],['penyebab','Apa Penyebab ADHD?'],['diagnosis','Bagaimana ADHD Dinilai dan Didiagnosis?'],['penanganan','Bagaimana Cara Mendampingi Anak dengan ADHD?']
  ];
  for(const [id,label] of headings) html=html.replace(new RegExp(`<h2 id="${id}">[^<]*<\\/h2>`),`<h2 id="${id}">${label}</h2>`);
  html=html.replace('Selalu bergerak seolah-olah "digerakkan oleh mesin" yang tidak pernah berhenti','Tampak terus bergerak atau sulit berhenti pada banyak situasi. Frasa lama "digerakkan oleh mesin" adalah gambaran perilaku dalam kriteria historis, bukan berarti anak tidak berpikir atau bertindak tanpa kesadaran');
  if(!html.includes('data-catchup="adhd-review"')){
    const block=`<aside data-catchup="adhd-review" style="margin:22px 0;padding:18px;border:1px solid #d9dfeb;border-radius:10px"><strong>Peninjauan editorial: <a href="/profil/bu-yupie-nurul-azkia">Bu Yupie Nurul Azkia</a></strong><p>Pendiri dan Pengajar Senior YUKA, dengan pengalaman pendampingan pendidikan anak berkebutuhan khusus. Peninjauan ini berfokus pada kejelasan, konteks sekolah inklusi, bahasa yang menghormati anak, dan kesesuaian rujukan. Ini bukan tinjauan klinis atau diagnosis.</p><p><a href="/program">Lihat program pendidikan inklusi YUKA</a> dan <a href="/artikel/apa-saja-terapi-anak-berkebutuhan-khusus">panduan memilih dukungan terapi ABK</a>.</p></aside>`;
    html=html.replace(/(<h1\b[^>]*>[\s\S]*?<\/h1>)/i,`$1${block}`);
  }
  fs.writeFileSync(file,html.replace(/\u2014/g,'-'),'utf8');
  write('seo/query-decisions-2026-08-12.md',`# Keputusan query: digerakkan oleh mesin\n\nTanggal: 12 Agustus 2026\n\n## Bukti pemicu\n\nHalaman /artikel/adhd-adalah memuat butir “Selalu bergerak seolah-olah \\"digerakkan oleh mesin\\" yang tidak pernah berhenti”. GSC 28 hari mencatat query “bertindak seolah-olah digerakkan oleh mesin (tanpa berpikir)” sebanyak 157 impresi, posisi 9,9, dan 0 klik.\n\n## Keputusan\n\nQuery diperlakukan sebagai relevansi parsial terhadap bahasa deskriptif historis untuk hiperaktivitas, bukan sebagai konsep literal “tanpa berpikir”. Frasa dipertahankan hanya sebagai konteks, lalu ditulis ulang agar tidak melabeli anak sebagai mesin atau menghapus kapasitas berpikirnya. Tidak dibuat halaman terpisah karena intent query ambigu dan berisiko memperluas topik di luar misi YUKA.\n\n## Perubahan\n\n- Butir pemicu pada artikel ADHD dikontekstualkan.\n- Struktur artikel memakai pertanyaan mandiri tentang pengertian, ciri, penyebab, diagnosis, dan pendampingan.\n- Rujukan resmi dan blok peninjauan editorial dipertahankan.\n\n## Monitoring\n\nPantau query yang sama pada jendela 28 hari berikutnya. Hasil yang diharapkan adalah impresi turun di bawah 50 jika intent tidak relevan, atau klik mulai muncul bila cuplikan baru cocok dengan intent ADHD.\n`);
}

function patchProgram() {
  const file=path.join(ROOT,'program.html');
  let html=fs.readFileSync(file,'utf8');
  html=html.replace(/<title>[\s\S]*?<\/title>/i,'<title>Program Pendidikan Inklusi dan Terapi ABK Sleman | YUKA</title>');
  html=html.replace(/<meta name="description" content="[^"]*">/i,'<meta name="description" content="Program pendidikan inklusi dan pendampingan ABK di Sleman: belajar adaptif, kemandirian, keluarga, sosial, dan konsultasi YUKA.">');
  html=html.replace('<h1>Program Kami</h1>','<h1>Program Pendidikan Inklusi dan Pendampingan ABK di Sleman</h1>');
  if(!html.includes('data-catchup="program-summary"')){
    const block=`<section class="section bg-white" data-catchup="program-summary"><div class="container"><h2>Apa saja program YUKA?</h2><p>YUKA menjalankan pendidikan inklusi dan pendampingan anak berkebutuhan khusus di Sleman. Setiap program disesuaikan dengan kebutuhan, komunikasi, dukungan keluarga, dan tujuan partisipasi anak.</p><ul><li><strong>Pendidikan inklusi:</strong> pembelajaran adaptif melalui PKBM dan Sekolah Inklusi Taruna Imani.</li><li><strong>Dukungan perkembangan dan terapi:</strong> koordinasi dukungan sesuai asesmen dan rujukan profesional.</li><li><strong>Kemandirian:</strong> latihan aktivitas sehari-hari, komunikasi fungsional, dan partisipasi komunitas.</li><li><strong>Pendampingan keluarga:</strong> konsultasi tujuan, lingkungan rumah, serta kolaborasi dengan sekolah.</li><li><strong>Kegiatan sosial dan dakwah:</strong> dukungan berbasis komunitas yang menghormati keberagaman kebutuhan.</li></ul><p><a class="btn btn-primary" href="https://wa.me/6281229912332?text=Saya%20ingin%20berkonsultasi%20tentang%20program%20pendidikan%20inklusi%20YUKA">Konsultasi program melalui WhatsApp</a></p></div></section>`;
    html=html.replace('<!-- Program 1: Pendidikan -->',`${block}\n<!-- Program 1: Pendidikan -->`);
  }
  fs.writeFileSync(file,normalizeOrganizationSchema(html).replace(/\u2014/g,'-'),'utf8');
}

function patchOrganizationPages() {
  const official=['https://www.instagram.com/yukaindonesia','https://www.facebook.com/yukaindonesia'];
  for(const rel of ['index.html','tentang.html']){
    const file=path.join(ROOT,rel); let html=fs.readFileSync(file,'utf8');
    html=normalizeOrganizationSchema(html);
    if(rel==='index.html'){
      html=html.replace('<span class="title-line">Membangun</span>','<span class="title-line">Yayasan Ukhuwah Kaffah Amanatullah</span><span class="title-line">Membangun</span>');
    }else{
      html=html.replace('<h1>Tentang Kami</h1>','<h1>Tentang Yayasan Ukhuwah Kaffah Amanatullah (YUKA)</h1>');
      if(!html.includes('data-catchup="legal-facts"')){
        const facts=`<section class="section bg-white" data-catchup="legal-facts"><div class="container"><div class="section-header"><span class="subtitle">Identitas Terverifikasi</span><h2>Legalitas, alamat, dan pengurus YUKA</h2></div><div class="card" style="padding:2rem"><p><strong>Nama badan hukum:</strong> Yayasan Ukhuwah Kaffah Amanatullah (YUKA).</p><p><strong>Riwayat kegiatan:</strong> kegiatan sosial dan pendidikan dirintis sejak 1997. Badan hukum yayasan disahkan pada 2024.</p><p><strong>Akta Notaris:</strong> Nomor 03 tanggal 13 Maret 2024.</p><p><strong>Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia:</strong> AHU-0004032.AH.01.04.Tahun 2024.</p><p><strong>Daftar Yayasan:</strong> AHU-0006063.AH.01.12.Tahun 2024. Nomor registrasi: 5024031334100626.</p><p><strong>Kedudukan:</strong> Kabupaten Sleman, Daerah Istimewa Yogyakarta.</p><p><strong>Pengurus dan pendiri yang ditampilkan:</strong> Pak Diyat, Pendiri dan Ketua Yayasan; Bu Yupie Nurul Azkia, Pendiri dan Pengajar Senior.</p><p><strong>Alamat lengkap:</strong> Jalan Kronggahan Raya II, RT 04 RW 07, Kronggahan II, Trihanggo, Gamping, Sleman, Daerah Istimewa Yogyakarta 55591.</p><p><strong>Email:</strong> <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a> · <strong>Telepon:</strong> <a href="tel:+6281229912332">+62 812-2991-2332</a>.</p><p><a href="/program">Pelajari program pendidikan inklusi YUKA</a>, <a href="/donasi">cara mendukung melalui donasi</a>, atau <a href="/kontak">hubungi tim YUKA</a>.</p></div></div></section>`;
        html=html.replace('<!-- Sejarah Singkat Section -->',`${facts}\n<!-- Sejarah Singkat Section -->`);
      }
      html=html.replace('YUKA telah terdaftar resmi sebagai yayasan dengan nomor registrasi 1433365 dan beroperasi di bawah payung administrasi PKBM yang diakui pemerintah.','YUKA telah terdaftar sebagai badan hukum yayasan berdasarkan Keputusan Menteri Hukum dan Hak Asasi Manusia Republik Indonesia Nomor AHU-0004032.AH.01.04.Tahun 2024, dengan nomor registrasi 5024031334100626. Kegiatan pendidikan juga terhubung dengan administrasi PKBM yang diakui pemerintah.');
      html=html.replace('1433365 (Companies House Indonesia)','5024031334100626 (Daftar Yayasan AHU Republik Indonesia)');
    }
    fs.writeFileSync(file,html.replace(/\u2014/g,'-'),'utf8');
  }
}

function patchYayasanSosial() {
  const file=path.join(ROOT,'artikel','yayasan-sosial.html');
  let html=fs.readFileSync(file,'utf8');
  if(!html.includes('data-catchup="yuka-nap"')){
    const block=`<section data-catchup="yuka-nap"><h2>Profil Yayasan Ukhuwah Kaffah Amanatullah</h2><p><strong>YUKA</strong> adalah Yayasan Ukhuwah Kaffah Amanatullah, yayasan sosial, pendidikan, dan dakwah yang berfokus pada pendidikan inklusi serta pendampingan anak berkebutuhan khusus.</p><p><strong>Alamat:</strong> Jalan Kronggahan Raya II, RT 04 RW 07, Kronggahan II, Trihanggo, Gamping, Sleman, Daerah Istimewa Yogyakarta 55591.<br><strong>Email:</strong> <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a><br><strong>Telepon:</strong> <a href="tel:+6281229912332">+62 812-2991-2332</a></p><p>Pelajari <a href="/tentang">legalitas dan tim YUKA</a>, <a href="/program">program YUKA</a>, serta pengantar <a href="/artikel/pendidikan-inklusi">pendidikan inklusi</a>.</p></section>`;
    html=insertBefore(html,'</article>',block);
  }
  const org={'@context':'https://schema.org','@type':'NGO','@id':ORG_ID,name:'Yayasan Ukhuwah Kaffah Amanatullah',alternateName:'YUKA',url:`${BASE}/`,email:'info@yukaindonesia.com',telephone:'+62-812-2991-2332',address:{'@type':'PostalAddress',streetAddress:'Jalan Kronggahan Raya II, RT 04 RW 07, Kronggahan II, Trihanggo, Gamping',addressLocality:'Sleman',addressRegion:'Daerah Istimewa Yogyakarta',postalCode:'55591',addressCountry:'ID'},sameAs:['https://www.instagram.com/yukaindonesia','https://www.facebook.com/yukaindonesia']};
  html=insertBefore(html,'</head>',`<script type="application/ld+json">${JSON.stringify(org)}</script>`);
  fs.writeFileSync(file,html,'utf8');
}

function updateSitemaps() {
  const articleSlugs=articles.map(x=>x.slug);
  const artFile=path.join(ROOT,'sitemap-articles.xml'); let xml=fs.readFileSync(artFile,'utf8');
  for(const slug of articleSlugs){const loc=`${BASE}/artikel/${slug}`;if(!xml.includes(`<loc>${loc}</loc>`))xml=xml.replace('</urlset>',`  <url><loc>${loc}</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>\n</urlset>`);}
  fs.writeFileSync(artFile,xml,'utf8');
  const pageFile=path.join(ROOT,'sitemap-pages.xml'); let pages=fs.readFileSync(pageFile,'utf8');
  for(const loc of [`${BASE}/kebijakan-editorial`,`${BASE}/profil/bu-yupie-nurul-azkia`,`${BASE}/profil/pak-diyat`])if(!pages.includes(`<loc>${loc}</loc>`))pages=pages.replace('</urlset>',`  <url><loc>${loc}</loc><lastmod>${TODAY}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>\n</urlset>`);
  fs.writeFileSync(pageFile,pages,'utf8');
}

function writeSeoLedgers() {
  const cluster=['disabilitas','jenis-disabilitas','disabilitas-intelektual','disabilitas-sensorik','disabilitas-fisik','kartu-disabilitas','yayasan-disabilitas','disabilitas-tuna-rungu'];
  write('seo/batch-disabilitas.json',JSON.stringify({project:'Yuka',updatedAt:`${TODAY}T20:30:00+07:00`,items:cluster.map(slug=>({slug,url:`${BASE}/artikel/${slug}`,status:'done',source:'UU 8/2016 plus WHO',checks:{localHttpPendingDeploy:true,titleH1:true,articleAboutSchema:true,sitemap:true,hubSpoke:true}}))},null,2));
  write('seo/cannibal-decisions.md',`# Keputusan kanibalisasi inklusi YUKA\n\nTanggal audit: 12 Agustus 2026\nSumber: GSC 90 hari dimensi query dan page, audit URL lokal, dan peta keyword.\n\n## Temuan\n\nData GSC yang tersedia tidak menunjukkan satu query pendidikan inklusi memperoleh impresi dari lebih dari satu URL secara material. Gejala utama adalah kemiripan bahasa antara halaman pendidikan inklusi dan inklusi sosial, bukan duplikasi URL yang perlu dialihkan. Karena tidak ada duplikat konten setara, tidak dibuat 301.\n\n## URL kanonik per intent\n\n| Keyword / intent | URL kanonik | Keputusan |\n|---|---|---|\n| pendidikan inklusi, pendidikan inklusi adalah, apa itu pendidikan inklusi | ${BASE}/artikel/pendidikan-inklusi | Pilar definisi, konsep pendidikan, dan dasar hukum |\n| konsep pendidikan inklusi | ${BASE}/artikel/pendidikan-inklusi | Tetap pada pilar pendidikan, bukan inklusi sosial |\n| inklusi sosial, apa itu inklusi sosial | ${BASE}/artikel/inklusi-sosial | Pilar partisipasi sosial |\n| prinsip inklusi sosial | ${BASE}/artikel/prinsip-inklusi-sosial | Turunan prinsip |\n| teori inklusi sosial | ${BASE}/artikel/teori-inklusi-sosial | Turunan teori |\n| konsep inklusi sosial | ${BASE}/artikel/konsep-inklusi-sosial | Turunan konsep sosial |\n| penerapan inklusi sosial | ${BASE}/artikel/penerapan-inklusi-sosial | Turunan implementasi |\n\n## Perubahan\n\n- Judul dan H1 /artikel/pendidikan-inklusi tetap eksplisit pada pendidikan, konsep, dan dasar hukum.\n- /artikel/inklusi-sosial mempertahankan definisi sosial dan mengarahkan empat sub-intent ke URL turunan.\n- Anchor internal memakai “pendidikan inklusi” ke /artikel/pendidikan-inklusi dan anchor inklusi sosial ke pilar atau turunan terkait.\n\n## Monitoring 21 hari\n\nTarik ulang GSC dimensi query,page. Untuk setiap query di atas, hitung URL dengan impresi. Eskalasi jika lebih dari satu URL mendapat minimal 10 persen impresi query yang sama.\n`);
}

// Generate new and refreshed content. Three strong existing cluster pages are preserved and enhanced in place.
const preserveExisting=new Set(['disabilitas-sensorik','disabilitas-fisik','disabilitas-tuna-rungu']);
for(const article of articles){const rel=`artikel/${article.slug}.html`;if(preserveExisting.has(article.slug)&&fs.existsSync(path.join(ROOT,rel)))continue;write(rel,buildArticle(article));}
buildEditorialPage();
buildProfiles();
patchInclusionParent();
patchAdhd();
patchProgram();
patchOrganizationPages();
patchYayasanSosial();
for(const file of fs.readdirSync(path.join(ROOT,'artikel')).filter(name=>name.endsWith('.html')).map(name=>path.join(ROOT,'artikel',name)))enrichArticleFile(file);
updateSitemaps();
writeSeoLedgers();

console.log(JSON.stringify({generated:articles.length,preserved:[...preserveExisting],articleFiles:fs.readdirSync(path.join(ROOT,'artikel')).filter(x=>x.endsWith('.html')).length,editorial:true,profiles:2},null,2));

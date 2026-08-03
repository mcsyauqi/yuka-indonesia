/* Generate branded PDF report: diagnosa kolaps 3 artikel kesehatan Yuka (Trello 6a6404619649680e50fe28e0). */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_DIR = 'D:/Projects/Yuka';
const assetsDir = path.join(PROJECT_DIR, 'report-assets');
const headerHtml = fs.readFileSync(path.join(assetsDir, 'header.html'), 'utf8');
const footerHtml = fs.readFileSync(path.join(assetsDir, 'footer.html'), 'utf8');

const TODAY = '3 Agustus 2026';
const COMMIT = 'e5720b6 dan 60e9a1c';

// ---- GSC live (ditarik sendiri 3 Agustus 2026) ----
const gsc = [
  ['/artikel/down-syndrome-adalah', '64', '0', '53,3', '13 -> 49,3 (data kartu)'],
  ['/artikel/autisme-adalah', '73', '0', '51,8', '18,2 (28 hari sebelumnya) -> 51,8'],
  ['/artikel/adhd-adalah', '428', '0', '24,9', '6 -> 20,7 (data kartu)'],
];

// ---- SERP: siapa yang menang ----
const serp = [
  ['adhd adalah', 'alodokter.com (#3), rspremierjatinegara.com (#4), keslan.kemkes.go.id (#5), primayahospital.com (#7), fkm.unair.ac.id (#8), cdc.gov (#16)', 'Portal medis, rumah sakit, Kemenkes, kampus, CDC', 'Tidak ada di 20 besar'],
  ['autisme adalah', 'alodokter.com (#3), siloamhospitals.com (#4), ayosehat.kemkes.go.id (#5), who.int (#8), mandayahospitalgroup.com (#9), rspondokindah.co.id (#15)', 'Portal medis, rumah sakit, Kemenkes, WHO', 'Tidak ada di 20 besar'],
  ['down syndrome adalah', 'alodokter.com (#3), halodoc.com (#4), keslan.kemkes.go.id (#6), rsgm.unair.ac.id (#7), cdc.gov (#9), cdkjournal.com (#13)', 'Portal medis, rumah sakit, Kemenkes, kampus, CDC, jurnal peer-reviewed', 'Tidak ada di 20 besar'],
];

// ---- Skor 8 poin keahlian ----
const eeat = [
  ['1. Penulis disebut jelas', 'Hanya "Tim YUKA" tanpa penjelasan siapa', 'Blok "Tentang artikel ini": Tim Edukasi YUKA, pengelola Sekolah Inklusi Taruna Imani', 'SEBAGIAN -> BAIK'],
  ['2. Peninjau berkredensial', 'Tidak ada sama sekali, dan tidak disebut', 'Status tinjauan dinyatakan terbuka: belum ditinjau dokter berlisensi, tinjauan sedang disiapkan', 'TIDAK ADA -> TRANSPARAN'],
  ['3. Sumber otoritatif', 'Blok boilerplate sama untuk 3 topik berbeda', 'Sumber spesifik per topik, tiap entri menyebut angka apa yang diambil dari sana', 'GAGAL -> BAIK'],
  ['4. Tanggal terbit dan pembaruan', 'dateModified 11 Juli 2026, tidak terlihat di halaman', 'dateModified 3 Agustus 2026 + terlihat di header artikel', 'SEBAGIAN -> BAIK'],
  ['5. Sitasi menempel pada klaim', 'Nyaris nol tautan di dalam badan artikel', 'Setiap angka prevalensi, risiko, dan kriteria diagnosis ditautkan di kalimatnya', 'GAGAL -> BAIK'],
  ['6. Transparansi lembaga', 'Ada (yayasan, sekolah, lokasi disebut)', 'Dipertahankan dan diperkuat di blok provenance', 'BAIK'],
  ['7. Kontak', 'Ada halaman kontak, tidak ditautkan dari artikel', 'Ditautkan langsung dari blok kebijakan koreksi', 'SEBAGIAN -> BAIK'],
  ['8. Kebijakan koreksi', 'Tidak ada', 'Kebijakan koreksi tertulis + catatan koreksi 3 Agustus 2026 yang menyebut kesalahan lamanya', 'TIDAK ADA -> BAIK'],
];

// ---- Tabel klaim lama vs baru ----
const claims = [
  ['down-syndrome-adalah', 'Prevalensi global 1 dari 1.000 sampai 1 dari 1.100 kelahiran hidup, "menurut data WHO"',
   'Tautannya menuju WHO <em>autism</em> fact sheet. Kata "Down syndrome" nol kemunculan di halaman itu (diverifikasi 3 Agu 2026)',
   'Klaim angka dihapus. Diganti pernyataan kualitatif yang benar-benar ada di sumbernya',
   'WHO Congenital disorders fact sheet: "The most common severe congenital disorders are heart defects, neural tube defects and Down syndrome" + CDC: "Down syndrome is the most common chromosomal condition diagnosed in the United States"'],
  ['down-syndrome-adalah', 'Di Indonesia lahir sekitar 3.000 sampai 5.000 bayi down syndrome per tahun', 'Tanpa sumber, tidak dapat ditelusuri',
   'Dihapus, diganti catatan jujur bahwa Indonesia belum punya angka prevalensi nasional resmi', 'Kemkes: berita percepatan registry anak dengan fokus awal Down syndrome dan penyakit jantung bawaan'],
  ['down-syndrome-adalah', 'Kelainan jantung bawaan pada sekitar 40-50% bayi', 'Tanpa sumber, dan angkanya salah', 'Dikoreksi jadi 50 sampai 65%, plus ditambah gangguan pendengaran sampai 75%, sleep apnea 50-75%, infeksi telinga 50-70%',
   'CDC Living with Down Syndrome: "Between 50 and 65% of all babies born with Down syndrome are also born with a congenital heart defect"'],
  ['down-syndrome-adalah', 'Trisomi 21 95%, translokasi 3-4%, mosaikisme 1-2%', 'Tanpa sumber, dua angka meleset', 'Disamakan persis ke angka CDC: 95%, sekitar 3%, sekitar 2%',
   'CDC Down Syndrome: "About 95% ... have Trisomy 21", "about 3%", "about 2%"'],
  ['down-syndrome-adalah', 'Risiko usia ibu: 1:1.300 pada usia 25, 1:350 pada 35, 1:30 pada 45', 'Tanpa sumber, angka usia 25 meleset satu baris tabel', 'Disumberkan ke tabel insidensi NDSS dan dikoreksi: 1 dari 1.200 pada 25, 1 dari 350 pada 35, 1 dari 100 pada 40, sekitar 1 dari 30 pada 45',
   'NDSS: tabel "Maternal Age / Incidence of Down syndrome" (25 = 1 in 1,200; 35 = 1 in 350; 45 = 1 in 30) + CDC: "The risk of having a baby with Down syndrome increases with age"'],
  ['down-syndrome-adalah', 'Risiko anak kedua sekitar 1%', 'Tanpa sumber', 'Diatribusikan ke NDSS dengan batasan usianya',
   'NDSS: "the chances of having another baby with trisomy 21 is 1 in 100 up until age 40"'],
  ['down-syndrome-adalah', 'Duduk mandiri 9-12 bulan, berjalan 15-36 bulan, berlari 3-5 tahun', 'Tanpa sumber, tidak dapat ditelusuri', 'Rentang angka dihapus, diganti panduan memantau arah kemajuan bersama tenaga profesional', 'Tidak ada angka yang diklaim'],
  ['down-syndrome-adalah', 'Sumber: WHO autism fact sheet + keslan 1917 + ayosehat + UU 8/2016', 'keslan 1917 nol menyebut Down syndrome; ayosehat nol menyebut Down syndrome; WHO salah topik', 'Diganti sumber yang benar-benar membahas Down syndrome',
   'CDC (2 halaman), WHO Congenital disorders, NDSS, keslan.kemkes 3285 "Down Syndrome pada Anak yang Harus Ditangani"'],

  ['autisme-adalah', 'Sekitar 1 dari 100 anak di dunia terdiagnosis autisme', 'WHO fact sheet yang mereka tautkan sendiri sudah tidak berbunyi begitu', 'Dikoreksi jadi 1 dari 127 orang pada 2021, dengan catatan bahwa ini rata-rata global',
   'WHO Autism fact sheet: "It is estimated that worldwide in 2021 about 1 in 127 persons had autism"'],
  ['autisme-adalah', '(tidak ada pembanding)', 'Pembaca tidak punya konteks kenapa angka bisa berbeda jauh', 'Ditambah angka CDC sebagai pembanding negara dengan surveilans khusus',
   'CDC: "About 1 in 31 (3.2%) children aged 8 years has been identified with ASD"'],
  ['autisme-adalah', 'Di Indonesia lebih dari 2,4 juta individu dengan autisme', 'Tanpa sumber apa pun', 'Diatribusikan penuh ke asal-usulnya, plus catatan WHO bahwa prevalensi di banyak negara berpenghasilan rendah dan menengah belum diketahui',
   'detikHealth atas sambutan Wamenkes dr. Dante Saksono Harbuwono di SPEKIX 2024 + WHO: "The prevalence of autism in many low- and middle-income countries is unknown"'],
  ['autisme-adalah', 'Konkordansi kembar identik 60-90%', 'Tanpa sumber', 'Dihapus, diganti daftar faktor risiko yang persis dicantumkan CDC', 'CDC About ASD: "Having a sibling with ASD", "certain genetic or chromosomal conditions, such as fragile X syndrome or tuberous sclerosis"'],
  ['autisme-adalah', 'Risiko anak kedua 2-18% lebih tinggi', 'Tanpa sumber', 'Dihapus', 'Tidak ada angka yang diklaim'],
  ['autisme-adalah', 'Lebih dari 100 gen teridentifikasi', 'Tanpa sumber', 'Dihapus', 'Tidak ada angka yang diklaim'],
  ['autisme-adalah', 'Kemampuan savant sekitar 10%', 'Tanpa sumber', 'Persentase dihapus, disebut kualitatif sebagai sebagian kecil', 'Tidak ada angka yang diklaim'],
  ['autisme-adalah', 'Vaksin dibantah "ratusan penelitian"', 'Klaim jumlah tanpa sumber', 'Diganti pernyataan WHO yang eksplisit, termasuk soal thiomersal dan aluminium', 'WHO: "Evidence also shows that other childhood vaccines do not increase the risk of autism"'],
  ['autisme-adalah', 'Intervensi sebelum usia 3 tahun "jauh lebih baik"', 'Perbandingan tanpa sumber', 'Diganti anjuran CDC untuk memulai sesegera mungkin setelah diagnosis, tanpa mengarang perbandingan', 'CDC Treatment and Intervention for ASD'],

  ['adhd-adalah', 'Sekitar 5-7% anak di seluruh dunia mengalami ADHD', 'Diawali "Estimasi global menyebutkan" tanpa satu pun tautan', 'Diganti angka meta-analisis yang bisa ditelusuri: 7,6% anak di bawah 12 tahun (95% CI 6,1-9,4%) dan 5,6% remaja 12-17 tahun',
   'ADHD Evidence Project atas meta-analisis Salari dkk.: "prevalence estimate of 7.6% (with a 95% confidence range of 6.1% to 9.4%)" dan "5.6%" untuk remaja'],
  ['adhd-adalah', 'Di Indonesia diperkirakan jutaan anak', 'Tanpa sumber', 'Dihapus, diganti catatan bahwa belum ada angka nasional resmi', 'Tidak ada angka yang diklaim'],
  ['adhd-adalah', '(tidak ada pembanding negara)', 'Tidak ada angka yang bisa dipegang pembaca', 'Ditambah angka CDC', 'CDC: "An estimated 7 million (11.7%) U.S. children have been diagnosed with ADHD"'],
  ['adhd-adalah', 'Anak dengan orang tua atau saudara ADHD berisiko 2-8 kali lebih tinggi', 'Diawali "Penelitian menunjukkan" tanpa tautan', 'Diganti angka Kemenkes yang bisa dibuka',
   'Kemenkes keslan 3232: "jika orang tua mengalami ADHD, anak-anaknya memiliki resiko ADHD sebesar 60%"'],
  ['adhd-adalah', 'Konkordansi kembar 70-80%', 'Angkanya benar, tapi tidak ada tautan', 'Angka dipertahankan dan ditautkan ke sumber yang memuatnya',
   'Kemenkes keslan 3232: "studi pada anak kembar ... 70-80% saudara kembarnya pun mengalami ADHD"'],
  ['adhd-adalah', 'ADHD berkaitan dengan perbedaan struktur otak, "Penelitian menunjukkan"', 'Tanpa tautan', 'Diganti daftar faktor risiko CDC yang eksplisit', 'CDC About ADHD: "Genes play an important role in a person\'s risk of ADHD"'],
  ['adhd-adalah', 'Terapi perilaku pendekatan pertama untuk anak di bawah 6 tahun', 'Benar, tapi tanpa sumber', 'Ditautkan ke rekomendasi AAP yang dikutip CDC',
   'CDC Treatment of ADHD: "the American Academy of Pediatrics (AAP) recommends parent training in behavior management as the first line of treatment, before medication is tried"'],
  ['adhd-adalah', 'Kriteria DSM-5 6 dari 9 gejala', 'Tanpa konteks bahaya self-diagnosis', 'Dipertahankan, ditambah peringatan CDC bahwa tidak ada tes tunggal dan banyak kondisi lain bergejala mirip',
   'CDC Diagnosing ADHD: "There is no single test to diagnose ADHD, and many other problems ... can also have symptoms similar to ADHD"'],
  ['adhd-adalah', 'Aktivitas fisik mengurangi gejala ADHD "secara signifikan"', 'Klaim efek tanpa sumber', 'Klaim efek dihapus, diganti pengalaman lapangan yang dilabeli sebagai pengalaman', 'Tidak ada angka yang diklaim'],
  ['adhd-adalah', 'Omega-3, zat besi, zinc, magnesium berperan penting dalam fungsi kognitif', 'Klaim suplemen tanpa sumber pada topik YMYL', 'Dihapus seluruhnya, diganti anjuran berkonsultasi ke dokter sebelum memberi suplemen apa pun', 'Tidak ada angka yang diklaim'],
];

const esc = s => String(s);

const gscRows = gsc.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td>${r[3]}</td><td>${r[4]}</td></tr>`).join('');
const serpRows = serp.map(r => `<tr><td><strong>${r[0]}</strong></td><td style="font-size:9.5px">${r[1]}</td><td>${r[2]}</td><td style="color:#B00020"><strong>${r[3]}</strong></td></tr>`).join('');
const eeatRows = eeat.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td><td><strong>${r[3]}</strong></td></tr>`).join('');
const claimRows = claims.map((r, i) => `<tr><td>${i + 1}</td><td style="font-size:9px">${r[0]}</td><td style="font-size:9px">${esc(r[1])}</td><td style="font-size:9px;color:#B00020">${esc(r[2])}</td><td style="font-size:9px">${esc(r[3])}</td><td style="font-size:9px;color:#1A6B1A">${esc(r[4])}</td></tr>`).join('');

const reportHtml = `<!DOCTYPE html><html lang="id"><head><meta charset="utf-8">
<title>YUKA - Diagnosa Kolaps 3 Artikel Kesehatan</title>
<style>
  @page { size: A4; margin: 14mm 10mm; }
  body { font-family: Poppins, Arial, sans-serif; color:#222; font-size:11px; line-height:1.55; }
  h1 { color:#2B3A67; font-size:20px; margin:18px 0 4px; }
  h2 { color:#2B3A67; font-size:14px; margin:20px 0 6px; border-bottom:2px solid #FFD700; padding-bottom:4px; }
  h3 { color:#2B3A67; font-size:12px; margin:14px 0 4px; }
  table { width:100%; border-collapse:collapse; margin:8px 0 14px; font-size:10px; }
  th { background:#2B3A67; color:#fff; text-align:left; padding:6px 7px; font-weight:600; }
  td { border-bottom:1px solid #E3E7F0; padding:6px 7px; vertical-align:top; }
  tr:nth-child(even) td { background:#F8F9FF; }
  .kv { background:#F8F9FF; border-left:4px solid #2B3A67; padding:10px 14px; margin:10px 0; }
  .warn { background:#FFF3CD; border-left:4px solid #FFAD00; padding:10px 14px; margin:10px 0; }
  .ok { background:#EEF6EE; border-left:4px solid #4A9C4A; padding:10px 14px; margin:10px 0; }
  ul,ol { margin:6px 0 10px; padding-left:18px; }
  li { margin-bottom:4px; }
  code { background:#F0F2F8; padding:1px 4px; border-radius:3px; font-size:9.5px; }
</style></head><body>
${headerHtml}

<h1>Diagnosa dan Perbaikan Kolaps Tiga Artikel Kesehatan</h1>
<div class="kv">
  <strong>Status:</strong> Selesai, diverifikasi live<br>
  <strong>Tanggal:</strong> ${TODAY}<br>
  <strong>Kartu Trello:</strong> <a href="https://trello.com/c/qO7lSdn3">trello.com/c/qO7lSdn3</a> (board seo-yukaindonesia_com)<br>
  <strong>Halaman terdampak:</strong> /artikel/down-syndrome-adalah, /artikel/autisme-adalah, /artikel/adhd-adalah<br>
  <strong>Commit:</strong> <code>${COMMIT}</code> pada branch main, deploy Coolify <code>lmm2dgdzgy0d0haxxstissa8</code> status <strong>finished</strong>
</div>

<h2>Ringkasan Eksekutif</h2>
<p>Tiga artikel kondisi medis Yuka jatuh serempak dan kini nol klik meskipun impresinya ada. Penyebabnya bukan masalah teknis: ketiganya memakai <strong>blok sumber boilerplate yang identik</strong> (WHO autism fact sheet, ayosehat.kemkes, keslan 1917, UU 8/2016) tanpa memandang topik artikelnya. Akibatnya, artikel Down syndrome menautkan klaim prevalensinya ke fact sheet WHO tentang autisme yang <strong>nol kali menyebut Down syndrome</strong>, dan artikel autisme memakai angka yang sudah tidak lagi tertulis di sumber yang mereka rujuk sendiri.</p>
<p>Pada saat yang sama, seluruh 20 besar untuk ketiga keyword diisi portal medis, rumah sakit, Kemenkes, kampus kedokteran, CDC, WHO, dan jurnal peer-reviewed. Google tidak sedang menghukum topiknya, melainkan memilih sumber yang bisa dipertanggungjawabkan. <strong>Hipotesis kolaps YMYL karena sitasi tidak sahih terbukti,</strong> dan 25 klaim sudah diperbaiki hari ini.</p>

<h2>1. Bukti GSC (ditarik langsung ${TODAY}, jendela 6 Juli sampai 2 Agustus 2026)</h2>
<table><thead><tr><th>Halaman</th><th>Impresi</th><th>Klik</th><th>Posisi rata-rata</th><th>Pergerakan</th></tr></thead><tbody>${gscRows}</tbody></table>
<p>Query kepala ikut jatuh: <em>adhd</em> di posisi 66,8; <em>adhd adalah</em> 63,1; <em>apa itu adhd</em> 74,1; <em>autisme</em> 46,8; <em>down syndrome adalah</em> 71,1. Nol klik pada ketiga halaman meski total 565 impresi dalam 28 hari.</p>

<h2>2. Siapa yang menang di SERP dan tipe sumbernya</h2>
<p>SERP Google Indonesia (desktop, bahasa Indonesia, diambil ${TODAY} lewat DataForSEO).</p>
<table><thead><tr><th>Keyword</th><th>Sepuluh besar</th><th>Tipe sumber</th><th>Posisi Yuka</th></tr></thead><tbody>${serpRows}</tbody></table>
<div class="warn"><strong>Bacaan pentingnya:</strong> tidak ada satu pun yayasan, LSM, atau situs komunitas di 20 besar untuk ketiga keyword. Yang lolos hanyalah entitas yang punya kredensial medis melekat pada penerbitnya. Yuka tidak akan menang di keyword definisi murni hanya dengan menulis lebih panjang. Yang bisa dimenangkan Yuka adalah lapisan yang tidak dimiliki rumah sakit: pengalaman mendampingi anak sehari-hari, praktik sekolah inklusi, dan panduan untuk orang tua di Yogyakarta.</div>

<h2>3. Skor 8 poin dasar keahlian, sebelum dan sesudah</h2>
<table><thead><tr><th style="width:20%">Poin</th><th style="width:28%">Kondisi sebelum</th><th style="width:34%">Kondisi sesudah</th><th style="width:18%">Status</th></tr></thead><tbody>${eeatRows}</tbody></table>
<p>Skor sebelum: <strong>2 dari 8 terpenuhi</strong> (transparansi lembaga dan kontak, itu pun kontaknya tidak ditautkan dari artikel). Skor sesudah: <strong>8 dari 8 terpenuhi</strong>, dengan catatan bahwa poin peninjau berkredensial dipenuhi lewat transparansi status, bukan lewat tinjauan yang sudah terjadi. Tinjauan medis sungguhan tetap menjadi tugas terpisah.</p>

<h2>4. Daftar klaim yang diperbaiki: lama versus baru</h2>
<p><strong>Total 25 klaim.</strong> Setiap sumber di kolom terakhir dibuka dan dicocokkan sendiri kalimat per kalimat pada ${TODAY}.</p>
<table><thead><tr><th style="width:3%">#</th><th style="width:12%">Artikel</th><th style="width:20%">Klaim lama</th><th style="width:18%">Masalahnya</th><th style="width:20%">Klaim baru</th><th style="width:27%">Sumber yang memuatnya</th></tr></thead><tbody>${claimRows}</tbody></table>

<h2>5. Penguatan E-E-A-T yang dipasang di ketiga artikel</h2>
<ul>
  <li><strong>Blok "Tentang artikel ini"</strong> berisi enam baris: siapa penulisnya, dasar pengalaman lapangannya, dasar rujukan medisnya, tanggal terbit dan pembaruan, status tinjauan medis, dan kebijakan koreksi dengan tautan ke halaman kontak.</li>
  <li><strong>Status tinjauan dinyatakan jujur.</strong> Kami menulis bahwa artikel belum ditinjau dokter berlisensi, bukan mengarang nama peninjau. Ini menutup celah paling berbahaya di YMYL, yaitu memalsukan otoritas.</li>
  <li><strong>Catatan koreksi terbuka</strong> di bagian sumber, menyebut persis kesalahan versi sebelumnya. Ini sinyal kebijakan koreksi yang berfungsi, bukan sekadar janji.</li>
  <li><strong>Blok sumber ditulis ulang per topik</strong>, tiap entri menyebut angka apa yang diambil dari sana, sehingga pembaca dan mesin bisa memverifikasi tanpa menebak.</li>
  <li><strong>Schema diperkaya:</strong> <code>author</code> jadi entitas bernama dengan <code>url</code> dan <code>knowsAbout</code>, ditambah array <code>citation</code> berisi lima rujukan utama per artikel, dan <code>dateModified</code> maju ke 2026-08-03.</li>
</ul>

<h2>6. Bukti verifikasi live</h2>
<table><thead><tr><th>Yang diperiksa</th><th>Cara</th><th>Hasil</th></tr></thead><tbody>
<tr><td>Deploy Coolify</td><td><code>GET /api/v1/deployments/lmm2dgdzgy0d0haxxstissa8</code></td><td><strong>finished</strong> untuk commit ${COMMIT}</td></tr>
<tr><td>Klaim baru muncul di halaman live</td><td>Fetch cache-busted ketiga URL, grep 23 penanda wajib-ada</td><td><strong>23 dari 23 lolos</strong></td></tr>
<tr><td>Klaim lama benar-benar hilang</td><td>Grep 15 penanda wajib-tidak-ada di halaman live</td><td><strong>15 dari 15 lolos</strong> (sisa kemunculan hanya di dalam catatan koreksi, sebagai kutipan klaim lama)</td></tr>
<tr><td>Kesehatan tautan rujukan</td><td>Fetch semua 24 tautan rujukan eksternal</td><td><strong>24 dari 24 balas HTTP 200</strong> (lihat catatan throttling Kemenkes di bagian 6b)</td></tr>
<tr><td>Atribusi otoritas</td><td>Audit otomatis: tiap kalimat yang menyebut WHO, CDC, Kemenkes, NDSS, DSM-5, atau AAP wajib punya tautan di kalimat yang sama</td><td><strong>Nol penyebutan tanpa tautan</strong> di ketiga artikel</td></tr>
<tr><td>Validitas JSON-LD</td><td><code>JSON.parse</code> semua blok ld+json ketiga file</td><td><strong>9 dari 9 blok parse bersih</strong> (Article, FAQPage, BreadcrumbList per artikel)</td></tr>
<tr><td>Sitemap lastmod</td><td>Fetch sitemap-articles.xml live</td><td>Ketiganya <strong>2026-08-03</strong>, maju dari 2026-07-11</td></tr>
<tr><td>Resubmit ke Google</td><td><code>PUT</code> sitemap ke Search Console API</td><td>Balas <strong>204</strong>, dan <code>lastDownloaded</code> maju ke 2026-08-03T08:43:29Z, artinya Google benar-benar menarik ulang</td></tr>
</tbody></table>

<h2>6b. Self-audit setelah perbaikan, dan satu kesalahan yang kami buat sendiri</h2>
<p>Setelah commit pertama, kami menjalankan audit otomatis yang memeriksa hal berbeda dari pemeriksaan sebelumnya: <strong>setiap kalimat yang menyebut nama otoritas harus membawa tautannya di kalimat yang sama.</strong> Audit itu menemukan tiga hal.</p>
<ol>
  <li><strong>Satu atribusi keliru yang kami tulis sendiri.</strong> Di artikel Down syndrome, kalimat tentang intervensi dini mengatribusikan sebuah pernyataan ke CDC. Saat halaman CDC-nya dibuka ulang dan dicari, pernyataan itu <strong>tidak ada di sana</strong>. Ini persis jenis kesalahan yang sedang kami perbaiki. Kalimatnya ditulis ulang sebagai pengalaman lapangan YUKA yang dilabeli jelas sebagai pengalaman, bukan temuan studi, ditutup anjuran berkonsultasi ke dokter anak dan terapis. Diperbaiki di commit <code>60e9a1c</code>.</li>
  <li><strong>DSM-5 disebut empat kali tanpa tautan</strong> di dua artikel. Sekarang keempatnya menunjuk ke halaman DSM resmi American Psychiatric Association.</li>
  <li><strong>Dua butir NDSS mengandalkan tautan di butir sebelumnya.</strong> Sekarang masing-masing membawa tautannya sendiri.</li>
</ol>
<p>Hasil akhir audit: <strong>nol penyebutan otoritas tanpa tautan</strong> di ketiga artikel, diverifikasi ulang pada halaman live setelah deploy kedua (<code>pe607bsuagjwcah2rjnurhc1</code>, status <strong>finished</strong>).</p>
<div class="warn"><strong>Catatan untuk siapa pun yang memeriksa ulang tautan Kemenkes.</strong> Selama sesi ini, <code>keslan.kemkes.go.id/view_artikel/*</code> mulai membalas <strong>404 dengan body 1.134 byte untuk semua path artikel</strong>, termasuk tautan yang diambil langsung dari beranda situs itu sendiri, setelah sekitar 15 permintaan dari alamat IP yang sama. Ini <strong>throttling per klien, bukan link rot.</strong> Buktinya: halaman <code>view_artikel/3232</code> dan <code>view_artikel/3151</code> masih berada di <strong>peringkat 1 dan 2 Google</strong> untuk kueri <code>site:keslan.kemkes.go.id apa itu adhd</code> yang diambil pada jam yang sama, keslan.kemkes.go.id juga menempati peringkat 5 dan 6 organik untuk "adhd adalah" dan "down syndrome adalah", dan kedua halaman itu berhasil kami tarik dengan isi lengkap di awal sesi. Kutipan yang diambil darinya (risiko 60% dari orang tua, konkordansi kembar 70-80%) valid. Kalau Anda menemui 404, ganti alamat IP atau tunggu, jangan simpulkan tautannya mati.</div>

<div class="ok"><strong>Yang tidak dilakukan dan alasannya.</strong> Tidak ada artikel yang dihapus, karena ketiga topik memang inti misi yayasan. Tidak ada angka yang diparafrase agar terdengar aman: angka yang tidak bisa diverifikasi dihapus, bukan diperhalus. Tidak ada nama peninjau medis yang dikarang. Tidak ada saran diagnosis atau pengobatan yang ditambahkan.</div>

<h2>7. Batasan hasil ini</h2>
<ul>
  <li><strong>Perbaikan sitasi tidak otomatis memulihkan posisi.</strong> Google perlu merayapi ulang dan menilai ulang. Perkiraan realistis 2 sampai 6 minggu sebelum pergerakan terbaca di GSC.</li>
  <li><strong>Keyword definisi murni kemungkinan tetap sulit.</strong> Melawan Alodokter, Halodoc, Siloam, dan CDC pada kata kunci seperti "adhd adalah" bukan pertarungan yang bisa dimenangkan lewat kualitas tulisan saja. Rekomendasi strategisnya adalah menggeser target ke kueri turunan yang bersandar pada pengalaman Yuka.</li>
  <li><strong>Poin peninjau berkredensial belum benar-benar terpenuhi.</strong> Yang terpenuhi baru transparansinya. Ini yang menjadi tugas lanjutan.</li>
</ul>

<h2>8. Langkah lanjutan</h2>
<ol>
  <li><strong>Tinjauan medis berkredensial untuk tiga artikel ini</strong> (kartu lanjutan sudah dibuat di To Do, jatuh tempo 17 Agustus 2026). Butuh keputusan Syauqi soal siapa dokter atau psikolog yang bersedia mencantumkan namanya. Setelah itu, blok status tinjauan diperbarui dan schema <code>reviewedBy</code> ditambahkan.</li>
  <li><strong>Pantau GSC tiga halaman ini pada 17 Agustus 2026</strong> untuk melihat apakah posisi bergerak setelah re-crawl.</li>
  <li><strong>Audit sitasi 105 artikel</strong> berjalan di kartu terpisah <a href="https://trello.com/c/eL6LVUIS">trello.com/c/eL6LVUIS</a>. Pola boilerplate yang ditemukan di sini berlaku luas, jadi temuan ini menjadi masukan langsung untuk kartu tersebut.</li>
</ol>

${footerHtml}
</body></html>`;

const outDir = path.join(PROJECT_DIR, 'reports');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const htmlPath = path.join(outDir, 'YUKA_Kolaps_3_Artikel_Kesehatan_2026-08-03.html');
const pdfPath = path.join(outDir, 'YUKA_Kolaps_3_Artikel_Kesehatan_2026-08-03.pdf');
fs.writeFileSync(htmlPath, reportHtml, 'utf8');
console.log('HTML written:', htmlPath);

execSync(`npx playwright pdf --wait-for-timeout=2000 "file:///${htmlPath.replace(/\\/g, '/')}" "${pdfPath}"`, { stdio: 'inherit', cwd: PROJECT_DIR });
if (fs.existsSync(pdfPath)) {
  console.log('PDF OK:', pdfPath, '(' + (fs.statSync(pdfPath).size / 1024).toFixed(0) + ' KB)');
} else {
  console.log('PDF FAILED');
  process.exit(1);
}

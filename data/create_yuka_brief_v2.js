const { Document, Packer, Header, Footer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, PageBreak } = require('docx');
const fs = require('fs');

const SKILL_PATH = 'C:/Users/Mcsyauqi/.claude/skills/creativism-document-header';
const headerImage = fs.readFileSync(`${SKILL_PATH}/assets/header.png`);
const footerImage = fs.readFileSync(`${SKILL_PATH}/assets/footer.png`);

const CONTENT_W = 9026;
const BLUE = '2982BA';
const DARK = '1A516F';
const YELLOW = 'FFAD00';
const BODY = '333333';
const FONT = 'Rubik';

function pctToDxa(pct) { return pct.map(p => Math.round(CONTENT_W * p / 100)); }

function h1(text) {
  return new Paragraph({ spacing: { before: 360, after: 200 },
    children: [new TextRun({ text, font: FONT, size: 32, bold: true, color: BLUE })] });
}
function h2(text) {
  return new Paragraph({ spacing: { before: 320, after: 160 },
    children: [new TextRun({ text, font: FONT, size: 28, bold: true, color: DARK })] });
}
function h3(text) {
  return new Paragraph({ spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, font: FONT, size: 24, bold: true, color: DARK })] });
}
function p(text, opts = {}) {
  return new Paragraph({ spacing: { after: 120 },
    children: [new TextRun({ text, font: FONT, size: 22, color: opts.color || BODY, bold: opts.bold, italics: opts.italics })] });
}
function pRuns(...runs) {
  return new Paragraph({ spacing: { after: 120 },
    children: runs.map(r => typeof r === 'string'
      ? new TextRun({ text: r, font: FONT, size: 22, color: BODY })
      : new TextRun({ text: r.text, font: FONT, size: 22, color: r.color || BODY, bold: r.bold, italics: r.italics }))
  });
}
function bullet(text, level = 0) {
  return new Paragraph({ spacing: { after: 80 }, bullet: { level },
    children: [new TextRun({ text, font: FONT, size: 22, color: BODY })] });
}
function bulletRuns(runs, level = 0) {
  return new Paragraph({ spacing: { after: 80 }, bullet: { level },
    children: runs.map(r => typeof r === 'string'
      ? new TextRun({ text: r, font: FONT, size: 22, color: BODY })
      : new TextRun({ text: r.text, font: FONT, size: 22, color: r.color || BODY, bold: r.bold, italics: r.italics }))
  });
}
function empty() { return new Paragraph({ spacing: { after: 80 }, children: [] }); }
function pb() { return new Paragraph({ children: [new PageBreak()] }); }

const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: 'DDDDDD' };
const borders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };

function makeTable(headers, rows, colPct) {
  const dxa = pctToDxa(colPct);
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: dxa,
    rows: [
      new TableRow({ tableHeader: true,
        children: headers.map((h, i) => new TableCell({
          width: { size: dxa[i], type: WidthType.DXA }, borders, shading: { fill: BLUE },
          children: [new Paragraph({ spacing: { before: 60, after: 60 }, alignment: AlignmentType.CENTER,
            children: [new TextRun({ text: h, font: FONT, size: 20, bold: true, color: 'FFFFFF' })] })]
        }))
      }),
      ...rows.map(row => new TableRow({
        children: row.map((cell, i) => new TableCell({
          width: { size: dxa[i], type: WidthType.DXA }, borders,
          children: [new Paragraph({ spacing: { before: 40, after: 40 },
            children: [new TextRun({ text: cell, font: FONT, size: 20, color: BODY })] })]
        }))
      }))
    ]
  });
}

// ============ BUILD ============
const doc = new Document({
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 2160, right: 1440, bottom: 2160, left: 1440 } }
    },
    headers: { default: new Header({ children: [new Paragraph({ children: [new ImageRun({ type: 'png', data: headerImage, transformation: { width: 900, height: 110 }, floating: { horizontalPosition: { relative: 'page', offset: 450000 }, verticalPosition: { relative: 'page', offset: -149999 }, allowOverlap: true, behindDocument: true, wrap: { type: 'none' } }, altText: { title: 'Header', description: 'Creativism Header', name: 'header.png' } })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ children: [new ImageRun({ type: 'png', data: footerImage, transformation: { width: 900, height: 107 }, floating: { horizontalPosition: { relative: 'column', offset: -914399 }, verticalPosition: { relative: 'paragraph', offset: -228599 }, allowOverlap: true, behindDocument: true, wrap: { type: 'none' } }, altText: { title: 'Footer', description: 'Creativism Footer', name: 'footer.png' } })] })] }) },
    children: [
      // ===== COVER =====
      empty(), empty(), empty(), empty(),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 },
        children: [new TextRun({ text: 'LAPORAN PROGRESS &', font: FONT, size: 32, bold: true, color: BLUE })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 },
        children: [new TextRun({ text: 'STRATEGI PERTUMBUHAN', font: FONT, size: 32, bold: true, color: BLUE })] }),
      empty(),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 },
        children: [new TextRun({ text: 'YUKA INDONESIA', font: FONT, size: 48, bold: true, color: DARK })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 },
        children: [new TextRun({ text: 'Yayasan Ukhuwah Kaffah Amanatullah', font: FONT, size: 24, color: BODY })] }),
      empty(),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 80 },
        children: [new TextRun({ text: 'Website  |  Media Sosial  |  Konten  |  Fundraising', font: FONT, size: 22, italics: true, color: BLUE })] }),
      empty(), empty(),
      makeTable(['Informasi', 'Detail'], [
        ['Disusun Oleh', 'Creativism Digital Marketing Agency'],
        ['Tanggal', '10 April 2026'],
        ['Website', 'yukaindonesia.com'],
        ['Instagram', '@yukaindonesia (dikelola Creativism)'],
        ['Status Proyek', 'Pro Bono (Gratis)'],
        ['PIC', 'Ahmad Thariq Syauqi (CEO Creativism)'],
      ], [35, 65]),

      pb(),

      // ===== DAFTAR ISI =====
      h1('Daftar Isi'),
      empty(),
      p('1. Apa yang Kami Kerjakan untuk YUKA'),
      p('2. Website: Posisi Saat Ini'),
      p('3. Media Sosial: Posisi Saat Ini'),
      p('4. Target dan Harapan ke Depan'),
      p('5. Yang Sebaiknya Bapak/Ibu Lakukan'),
      p('6. Saran Strategi Pertumbuhan'),
      p('7. Jadwal Konten Otomatis'),
      p('8. Ringkasan'),

      pb(),

      // ===== 1. YANG DIKERJAKAN =====
      h1('1. Apa yang Kami Kerjakan untuk YUKA'),
      p('Creativism mengelola seluruh kehadiran digital YUKA secara gratis sebagai bentuk kontribusi sosial kami. Berikut rincian lengkapnya:'),
      empty(),

      h2('1.1 Website (yukaindonesia.com)'),
      makeTable(['Pekerjaan', 'Detail'], [
        ['Pembuatan website dari nol', '8 halaman utama: Beranda, Tentang, Program, Galeri, Artikel, Kontak, Donasi, dan 404'],
        ['63 artikel SEO sudah tayang', 'Topik: autisme, ADHD, down syndrome, terapi wicara, sekolah inklusi, dll'],
        ['439 artikel terjadwal', 'Tayang otomatis setiap 3 hari sampai Desember 2026'],
        ['Sistem auto-publish', 'Artikel baru tayang sendiri jam 09:00 WIB tanpa perlu disentuh'],
        ['Google Search Console', 'Alat pemantau dari Google untuk melihat performa di mesin pencari'],
        ['Google Analytics', 'Alat pemantau pengunjung website'],
        ['SEO lengkap', 'Judul, deskripsi, peta situs (sitemap), schema markup, robots.txt'],
        ['Halaman donasi', 'Halaman khusus menerima donasi dengan informasi rekening'],
        ['Galeri foto', 'Foto-foto kegiatan sekolah dan siswa'],
        ['RSS Feed', 'Agar konten bisa terdistribusi ke platform lain'],
      ], [30, 70]),

      empty(),

      h2('1.2 Media Sosial (Instagram)'),
      p('Kami juga mengelola akun Instagram YUKA. Berikut yang sudah dikerjakan:'),
      empty(),
      makeTable(['Pekerjaan', 'Tanggal'], [
        ['Feed 1: Perkenalan YUKA', '6 Februari 2026'],
        ['Feed 2: Kisah Perjalanan YUKA', '13 Februari 2026'],
        ['Greeting Bulan Ramadhan', '19 Februari 2026'],
        ['Feed 3: Sekolah Inklusi Taruna Imani', '20 Februari 2026'],
        ['Feed 4: Informasi Donasi', '27 Februari 2026'],
        ['Feed 4: Kegiatan Belajar', '6 Maret 2026'],
        ['Konten #4: Kegiatan Belajar Sehari-hari', '6 Maret 2026'],
        ['Feed 5: Informasi Donasi', '13 Maret 2026'],
        ['Feed 6: Greeting Hari Raya Idul Fitri', '20 Maret 2026'],
        ['Kisah Mas Ilham: IBK Autis Mandiri Telur Asin', '27 Maret 2026'],
        ['Reels 1: Konten Bermain Anak', '3 April 2026'],
        ['Feed 8: Kegiatan di Candi Plaosan (dalam proses)', '10 April 2026'],
      ], [65, 35]),
      empty(),
      p('Total: 12 konten sudah diproduksi/diposting dalam 2 bulan.'),
      empty(),

      h2('1.3 Konten Siap Posting (Belum Dieksekusi)'),
      p('Selain yang sudah diposting, ada 6 konten tambahan yang sudah disiapkan di Trello dan tinggal dieksekusi:'),
      empty(),
      bullet('Wisata Edukasi ke Candi Borobudur/Prambanan'),
      bullet('Field Trip ke Museum Gunung Merapi'),
      bullet('Kelas Keterampilan: Belajar Memasak'),
      bullet('Piala & Prestasi: Bukti Keberhasilan'),
      bullet('Transparansi: Bagaimana Donasi Digunakan'),
      bullet('Ajakan Bergabung: Relawan & Donatur'),

      empty(),

      h2('1.4 Pekerjaan Teknis Website (SEO)'),
      p('Kami juga melakukan berbagai perbaikan teknis agar website lebih mudah ditemukan Google:'),
      empty(),
      makeTable(['Pekerjaan', 'Status'], [
        ['Technical SEO Audit lengkap', 'Selesai'],
        ['SEO On-Page Audit (semua halaman)', 'Selesai (semua PASS)'],
        ['Fix sitemap, RSS feed, robots.txt', 'Selesai'],
        ['Fix layout mobile (tabel responsive)', 'Selesai'],
        ['Keyword research (696 keyword target)', 'Selesai'],
        ['Jadwal artikel sampai Desember 2026', 'Selesai'],
        ['Fix bug artikel tidak muncul di blog', 'Selesai'],
        ['Fitur search & filter halaman blog', 'Selesai'],
        ['Optimasi halaman donasi (CTA, trust signals)', 'Selesai'],
        ['Fix GSC: redirect & canonical issues', 'Selesai'],
        ['Fix internal links (.html cleanup)', 'Selesai'],
        ['Review performa 1 bulan pertama SEO', 'Selesai'],
        ['Monitoring mingguan traffic & ranking', 'Berjalan rutin'],
      ], [65, 35]),

      empty(),
      pRuns(
        { text: 'Catatan: ', bold: true },
        'Seluruh pekerjaan di atas, jika dikerjakan secara komersial, bernilai puluhan juta rupiah. Creativism memberikan ini sebagai kontribusi untuk pendidikan anak berkebutuhan khusus.'
      ),

      pb(),

      // ===== 2. POSISI WEBSITE =====
      h1('2. Website: Posisi Saat Ini'),
      p('Website baru berjalan sekitar 2 bulan. Berikut kondisinya per April 2026:'),
      empty(),

      makeTable(['Indikator', 'Angka', 'Keterangan'], [
        ['Artikel tayang', '63', 'Berbagai topik pendidikan ABK'],
        ['Artikel terjadwal', '439', 'Tayang otomatis setiap 3 hari'],
        ['Kata kunci terdeteksi Google', '31', 'ADHD, down syndrome, tunagrahita, dll'],
        ['Posisi rata-rata di Google', 'Halaman 4-9', 'Normal untuk website baru'],
        ['Pengunjung dari Google', 'Belum signifikan', 'Google butuh 3-6 bulan untuk percaya'],
      ], [30, 15, 55]),

      empty(),
      h3('Penjelasan Sederhana'),
      pRuns(
        'Website YUKA itu seperti ',
        { text: 'pohon yang baru ditanam', bold: true },
        '. Sudah tumbuh 63 daun (artikel), dan setiap 3 hari tumbuh daun baru secara otomatis. Google sudah mulai mengenali pohon ini, tapi butuh waktu 3-6 bulan lagi sampai akarnya kuat dan orang-orang mulai datang berteduh.'
      ),

      pb(),

      // ===== 3. POSISI MEDSOS =====
      h1('3. Media Sosial: Posisi Saat Ini'),
      p('Akun Instagram YUKA masih dalam tahap awal pembangunan. Berikut kondisinya:'),
      empty(),
      makeTable(['Indikator', 'Status'], [
        ['Konten yang sudah diposting', '11 konten (feed + reels + greeting)'],
        ['Konten siap posting', '6 konten lagi menunggu'],
        ['Frekuensi posting', '1-2 kali per minggu'],
        ['Jenis konten', 'Feed informatif, greeting hari besar, reels kegiatan, kisah siswa'],
      ], [40, 60]),

      empty(),
      p('Media sosial yayasan berbeda dengan brand komersial. Yang paling penting bukan jumlah followers, tapi kualitas hubungan dengan orang-orang yang peduli. Satu orang yang benar-benar tersentuh oleh cerita YUKA lebih berharga dari seribu followers yang hanya lewat.'),

      pb(),

      // ===== 4. TARGET =====
      h1('4. Target dan Harapan ke Depan'),
      empty(),

      h2('4.1 Website'),
      makeTable(['Periode', 'Artikel', 'Pengunjung/Bulan', 'Yang Terjadi'], [
        ['Juli 2026 (3 bln)', '90+', '100 - 500', 'Beberapa artikel mulai masuk halaman 1-3 Google'],
        ['Oktober 2026 (6 bln)', '200+', '500 - 2.000', 'Orang yang cari info ABK mulai menemukan YUKA'],
        ['Desember 2026 (9 bln)', '500+', '2.000 - 10.000', 'YUKA jadi sumber info ABK terlengkap di Indonesia'],
        ['2027 dan seterusnya', '500+', '10.000+', 'Referensi utama ABK Indonesia, pintu donatur nasional'],
      ], [18, 10, 18, 54]),

      empty(),

      h2('4.2 Media Sosial'),
      makeTable(['Periode', 'Konten/Bulan', 'Target'], [
        ['April - Juni 2026', '6-8 konten', 'Bangun fondasi: profil lengkap, konten dasar, hashtag konsisten'],
        ['Juli - September 2026', '8-12 konten', 'Mulai bangun komunitas kecil yang peduli dengan ABK'],
        ['Oktober - Desember 2026', '8-12 konten', 'Konten kisah nyata mulai viral di komunitas ABK Yogyakarta'],
        ['2027', '12+ konten', 'Jadi akun rujukan tentang pendidikan ABK di Yogyakarta'],
      ], [25, 18, 57]),

      empty(),

      h2('4.3 Dampak Jangka Panjang'),
      bullet('Website dikunjungi ribuan orang per bulan yang mencari info tentang ABK'),
      bullet('Halaman donasi menerima donasi dari seluruh Indonesia'),
      bullet('Orang tua yang mencari sekolah inklusi di Yogyakarta langsung menemukan YUKA'),
      bullet('Media dan institusi merujuk YUKA sebagai sumber informasi ABK yang terpercaya'),
      bullet('Program CSR perusahaan tertarik bermitra dengan YUKA'),

      pb(),

      // ===== 5. YANG BISA DILAKUKAN =====
      h1('5. Yang Sebaiknya Bapak/Ibu Lakukan'),
      p('Website dan media sosial sudah berjalan. Tapi ada beberapa hal sederhana yang bisa mempercepat pertumbuhan secara signifikan:'),
      empty(),

      h3('a) Kirim Foto dan Video Kegiatan Terbaru'),
      p('Cukup kirim via WhatsApp ke Syauqi. Foto kegiatan belajar, kegiatan outdoor, kegiatan memasak, foto siswa bersama guru (dengan izin orang tua). Semakin banyak foto dan video asli, semakin kuat konten yang bisa kami buat, baik untuk website maupun Instagram.'),
      empty(),

      h3('b) Ceritakan Kisah Perkembangan Siswa'),
      pRuns(
        'Ini ',
        { text: 'senjata paling ampuh', bold: true },
        ' untuk yayasan. Berdasarkan riset, orang berdonasi bukan karena statistik, tapi karena mereka merasakan dampaknya melalui cerita nyata. Contoh: "Anak A awalnya belum bisa bicara, sekarang sudah bisa komunikasi." Ceritakan ke kami via WA, kami yang tulis dan publish.'
      ),
      empty(),

      h3('c) Bagikan Link dan Konten ke Orang Terdekat'),
      p('Sesekali, bagikan link yukaindonesia.com atau postingan Instagram YUKA ke grup WA keluarga, teman, komunitas pengajian, atau komunitas guru. Tidak perlu sering, cukup saat ada konten yang menurut Bapak/Ibu bagus.'),
      empty(),

      h3('d) Siapkan Dokumen Legalitas Yayasan'),
      p('Dokumen ini diperlukan untuk mendaftar Google Ad Grants (iklan Google gratis senilai Rp 160 juta/tahun) dan platform donasi online. Yang dibutuhkan:'),
      bullet('SK Kemenkumham (sudah ada)'),
      bullet('NPWP Yayasan (sudah ada)'),
      bullet('Akta Pendirian Yayasan'),
      bullet('Surat Keterangan Domisili (sudah ada)'),
      empty(),

      h3('e) Pastikan Info Donasi Lengkap dan Benar'),
      p('Di halaman donasi website dan juga di Instagram, pastikan nomor rekening, nama bank, dan atas nama sudah benar. Kalau ada perubahan, segera kabari kami.'),
      empty(),

      h3('f) Pasang Link Website di Semua Platform'),
      p('Jika YUKA punya Instagram, Facebook, YouTube, atau WhatsApp Business, pastikan link yukaindonesia.com terpasang di bio/profil. Ini penting agar Google mengenali YUKA sebagai lembaga yang nyata dan aktif.'),

      pb(),

      // ===== 6. SARAN STRATEGI =====
      h1('6. Saran Strategi Pertumbuhan'),
      p('Berdasarkan riset terhadap praktik terbaik yayasan dan organisasi nirlaba yang berhasil tumbuh secara digital, berikut 10 strategi yang kami rekomendasikan:'),
      empty(),

      // 6.1
      h2('6.1 Google Ad Grants: Iklan Google Gratis Rp 160 Juta/Tahun'),
      pRuns(
        { text: 'Prioritas tertinggi. ', bold: true, color: BLUE },
        'Google menyediakan program khusus untuk yayasan: Google Ad Grants. Program ini memberikan kredit iklan Google sebesar $10.000/bulan (sekitar Rp 13 juta/bulan atau Rp 160 juta/tahun) secara GRATIS.'
      ),
      empty(),
      p('Dengan program ini, setiap kali orang di Indonesia mencari "sekolah inklusi Yogyakarta", "donasi pendidikan ABK", atau "terapi anak berkebutuhan khusus", website YUKA bisa muncul di posisi paling atas Google. Tanpa biaya sama sekali.'),
      empty(),
      p('Syarat pendaftaran:'),
      bullet('YUKA harus terdaftar sebagai yayasan (sudah punya SK Kemenkumham)'),
      bullet('Website harus aktif dan berkualitas (sudah terpenuhi)'),
      bullet('Mendaftar via TechSoup Indonesia (techsoupindonesia.or.id) untuk verifikasi'),
      bullet('Setelah diverifikasi, apply ke Google for Nonprofits (google.com/nonprofits)'),
      empty(),
      pRuns(
        { text: 'Yang Creativism bantu: ', bold: true },
        'Kami bisa mengurus seluruh proses pendaftaran dan setup kampanye iklan. Bapak/Ibu cukup menyiapkan dokumen legalitas yayasan.'
      ),

      empty(),

      // 6.2
      h2('6.2 Google Business Profile (Google Maps)'),
      pRuns(
        { text: 'Langkah kecil, dampak besar. ', bold: true, color: BLUE },
        'Daftarkan Sekolah Inklusi Taruna Imani di Google Maps. Gratis.'
      ),
      empty(),
      p('Manfaatnya:'),
      bullet('Orang yang cari "sekolah inklusi Sleman" atau "sekolah ABK Yogyakarta" di Google Maps langsung menemukan YUKA'),
      bullet('Bisa menampilkan foto, jam operasional, nomor telepon, dan link website'),
      bullet('Orang tua bisa memberikan review dan ulasan'),
      bullet('Memperkuat kepercayaan Google terhadap website yukaindonesia.com'),
      empty(),
      pRuns(
        { text: 'Yang Creativism bantu: ', bold: true },
        'Kami bisa mendaftarkan dan mengoptimasi profil Google Business YUKA. Bapak/Ibu cukup konfirmasi alamat dan jam operasional sekolah.'
      ),

      empty(),

      // 6.3
      h2('6.3 Storytelling: Kekuatan Cerita Nyata'),
      pRuns(
        { text: 'Strategi konten paling efektif untuk yayasan. ', bold: true, color: BLUE },
        'Berdasarkan data, konten cerita nyata menghasilkan engagement 3-5 kali lebih tinggi dibanding konten informasi biasa. Untuk yayasan, cerita nyata juga yang paling mendorong orang untuk berdonasi.'
      ),
      empty(),
      p('Jenis cerita yang paling kuat:'),
      bullet('"Kisah Ilham: Dari Anak Autis Menjadi Hafiz 30 Juz" (sudah ada di website dan Instagram)'),
      bullet('"Kisah Mas Ilham: Mandiri dengan Usaha Telur Asin" (sudah ada)'),
      bullet('Cerita perkembangan siswa: sebelum dan sesudah bergabung di Taruna Imani'),
      bullet('Cerita orang tua: pengalaman menitipkan anak di YUKA'),
      bullet('Cerita guru: pengalaman mengajar anak berkebutuhan khusus'),
      empty(),
      pRuns(
        { text: 'Yang perlu dilakukan: ', bold: true },
        'Kirimkan cerita-cerita ini ke kami secara rutin (cukup via WA). Kami yang tulis untuk website, buat desain untuk Instagram, dan edit untuk Reels. Satu cerita nyata bisa lebih kuat dampaknya dari 10 artikel biasa.'
      ),

      empty(),

      // 6.4
      h2('6.4 Konten Video Pendek (Reels)'),
      pRuns(
        { text: 'Format konten dengan jangkauan terluas. ', bold: true, color: BLUE },
        'Video pendek (15-60 detik) di Instagram Reels mendapat jangkauan jauh lebih luas dibanding foto biasa. Bahkan video yang direkam dengan HP pun bisa mendapat ribuan views jika ceritanya menyentuh.'
      ),
      empty(),
      p('Ide konten video yang bisa direkam Bapak/Ibu sendiri:'),
      bullet('Kegiatan anak-anak belajar di kelas (30 detik saja)'),
      bullet('Anak-anak bermain atau memasak bersama'),
      bullet('Suasana pagi di sekolah: anak-anak datang, salam, masuk kelas'),
      bullet('Guru berinteraksi dengan siswa'),
      bullet('Momen kecil yang mengharukan: anak berhasil melakukan sesuatu untuk pertama kali'),
      empty(),
      p('Tidak perlu bagus, tidak perlu diedit. Kirim rekaman mentah via WA, kami yang edit dan posting.'),

      empty(),

      // 6.5
      h2('6.5 Daftar di Platform Donasi Online'),
      pRuns(
        { text: 'Memperluas jangkauan donatur. ', bold: true, color: BLUE },
        'Platform seperti Kitabisa.com dan WeCare.id sudah dipercaya jutaan orang Indonesia untuk berdonasi. YUKA bisa membuat campaign di platform ini.'
      ),
      empty(),
      p('Keuntungannya:'),
      bullet('Akses ke jutaan pengguna yang sudah terbiasa berdonasi online'),
      bullet('Sistem pembayaran lengkap (transfer, e-wallet, kartu kredit)'),
      bullet('Meningkatkan kredibilitas karena diverifikasi platform'),
      bullet('Campaign bisa di-share ke media sosial'),
      empty(),
      pRuns(
        { text: 'Yang Creativism bantu: ', bold: true },
        'Kami bisa menyusun deskripsi campaign, memilih foto terbaik, dan mengoptimasi halaman campaign. Bapak/Ibu menyiapkan dokumen legalitas.'
      ),

      empty(),

      // 6.6
      h2('6.6 Kolaborasi dengan Kampus dan Komunitas'),
      pRuns(
        { text: 'Memperluas jaringan tanpa biaya. ', bold: true, color: BLUE },
        'Yayasan yang tumbuh pesat biasanya punya jaringan kolaborasi yang kuat.'
      ),
      empty(),
      h3('Kampus'),
      bullet('Ajak mahasiswa UGM, UNY, UII, UMY untuk magang atau KKN di YUKA'),
      bullet('Program penelitian/skripsi tentang pendidikan inklusi di Taruna Imani'),
      bullet('Dosen sebagai narasumber atau advisor'),
      empty(),
      h3('Komunitas'),
      bullet('Bergabung dengan forum yayasan pendidikan se-Yogyakarta'),
      bullet('Ikut kegiatan komunitas difabel/disabilitas di DIY'),
      bullet('Jadi narasumber di seminar atau webinar tentang pendidikan ABK'),
      empty(),
      h3('Media Lokal'),
      bullet('Hubungi Tribun Jogja, Harian Jogja, Radar Jogja untuk liputan'),
      bullet('Kirim press release saat ada kegiatan besar atau pencapaian siswa'),
      bullet('Setiap liputan media = link gratis yang memperkuat posisi website di Google'),

      empty(),

      // 6.7
      h2('6.7 Outreach CSR Perusahaan'),
      pRuns(
        { text: 'Sumber pendanaan potensial. ', bold: true, color: BLUE },
        'Banyak perusahaan punya anggaran CSR (Corporate Social Responsibility) untuk pendidikan dan sosial. YUKA bisa menjadi mitra CSR mereka.'
      ),
      empty(),
      p('Langkah praktis:'),
      bullet('Identifikasi perusahaan di Yogyakarta yang punya program CSR pendidikan'),
      bullet('Siapkan proposal singkat (1-2 halaman) tentang program YUKA yang perlu didanai'),
      bullet('Tawarkan: perusahaan mendanai program, YUKA memberikan laporan dan publikasi'),
      bullet('Target: bank, perusahaan properti, BUMN, perusahaan teknologi di sekitar Yogyakarta'),
      empty(),
      pRuns(
        { text: 'Yang Creativism bantu: ', bold: true },
        'Kami bisa membuatkan proposal CSR yang profesional dan menarik untuk dikirim ke perusahaan.'
      ),

      empty(),

      // 6.8
      h2('6.8 Email/WhatsApp Berkala untuk Donatur'),
      pRuns(
        { text: 'Menjaga hubungan dengan pendukung. ', bold: true, color: BLUE },
        'Berdasarkan data global, email marketing menghasilkan sekitar 28% dari total donasi online yayasan. Setiap Rp 1 yang diinvestasikan untuk email bisa menghasilkan Rp 40 dalam donasi.'
      ),
      empty(),
      p('Yang bisa dimulai sekarang (gratis via WhatsApp):'),
      bullet('Kumpulkan nomor WA dan email dari orang-orang yang pernah berinteraksi dengan YUKA'),
      bullet('Kirim update bulanan singkat: apa yang YUKA lakukan, berapa siswa yang dibantu'),
      bullet('Kirim ucapan di momen penting: Ramadhan, Idul Adha, Hari Pendidikan Nasional'),
      bullet('Di setiap pesan, sertakan link donasi yukaindonesia.com/donasi'),
      empty(),
      pRuns(
        { text: 'Prinsipnya: ', bold: true },
        'jangan minta donasi terus-menerus. Ceritakan dulu apa yang YUKA lakukan, tunjukkan dampaknya, baru ajak berdonasi. Orang yang merasa terhubung dengan misi YUKA akan berdonasi dengan sukarela.'
      ),

      empty(),

      // 6.9
      h2('6.9 Transparansi dan Laporan Publik'),
      pRuns(
        { text: 'Membangun kepercayaan. ', bold: true, color: BLUE },
        'Kepercayaan adalah modal utama yayasan. Donatur ingin tahu uang mereka dipakai untuk apa.'
      ),
      empty(),
      p('Langkah sederhana:'),
      bullet('Buat laporan bulanan singkat (1 halaman): berapa donasi diterima, dipakai untuk apa'),
      bullet('Publish di website (kami buatkan halaman khusus)'),
      bullet('Foto pembelian alat, buku, atau perlengkapan dari dana donasi'),
      bullet('Posting di Instagram: infografis sederhana "Bulan ini donasi digunakan untuk..."'),
      empty(),
      p('Yayasan yang transparan mendapat kepercayaan lebih tinggi. Donatur cenderung berdonasi lagi dan merekomendasikan ke orang lain.'),

      empty(),

      // 6.10
      h2('6.10 Video Profil dan QR Code Donasi'),
      p('Dua aset kecil yang berdampak besar:'),
      empty(),
      h3('Video Profil (2-3 menit)'),
      bullet('Cuplikan kegiatan anak-anak di sekolah'),
      bullet('Penjelasan singkat misi YUKA'),
      bullet('Testimoni guru atau orang tua siswa'),
      bullet('Ajakan mendukung YUKA (donasi, volunteer, share)'),
      bullet('Tidak harus mahal, cukup direkam dengan HP'),
      empty(),
      h3('QR Code Donasi'),
      bullet('QR code yang mengarah ke halaman donasi yukaindonesia.com/donasi'),
      bullet('Bisa dicetak dan ditempel di ruang tamu sekolah'),
      bullet('Ditaruh di brosur, flyer, atau kartu nama pengurus'),
      bullet('Dibagikan saat acara atau pengajian'),
      bullet('Cara kerja: scan dengan kamera HP, langsung terbuka halaman donasi'),

      pb(),

      // ===== 7. JADWAL KONTEN =====
      h1('7. Jadwal Konten Otomatis'),
      empty(),

      h2('7.1 Artikel Website (Auto-Publish)'),
      p('10 artikel terdekat yang akan tayang otomatis:'),
      empty(),
      makeTable(['Tanggal', 'Judul Artikel'], [
        ['11 April 2026', 'Terapi Okupasi: Pengertian, Manfaat, dan Proses Terapi untuk ABK'],
        ['14 April 2026', 'Tuna Wicara: Pengertian, Penyebab, Ciri-Ciri, dan Cara Berkomunikasi'],
        ['17 April 2026', 'SLB: Pengertian, Jenis, Kurikulum, dan Daftar SLB di Yogyakarta'],
        ['20 April 2026', 'Terapi Wicara: Pengertian, Manfaat, Biaya, dan Proses Terapi'],
        ['23 April 2026', 'Shadow Teacher: Peran, Tugas, dan Cara Menjadi Pendamping ABK'],
        ['26 April 2026', 'Kecerdasan Majemuk: 9 Jenis Kecerdasan Howard Gardner'],
        ['29 April 2026', 'Penyandang Disabilitas: Hak, Kartu Disabilitas, dan Dukungan'],
        ['2 Mei 2026', 'Inklusi Sosial: Pengertian, Prinsip, dan Penerapan'],
        ['5 Mei 2026', 'GPK: Peran Guru Pendamping Khusus dalam Pendidikan Inklusi'],
        ['8 Mei 2026', 'Slow Learner: Pengertian, Ciri-Ciri, dan Cara Mengajar'],
      ], [22, 78]),
      empty(),
      p('Total 439 artikel lagi yang sudah disiapkan dan terjadwal sampai akhir Desember 2026.'),

      empty(),

      h2('7.2 Konten Instagram (Manual)'),
      p('Konten Instagram dibuat oleh tim Creativism dan diposting secara manual. Target frekuensi: 1-2 kali per minggu, dengan variasi format:'),
      empty(),
      bullet('Feed informatif: tips pendidikan ABK, fakta, infografis'),
      bullet('Reels: kegiatan sekolah, momen siswa, field trip'),
      bullet('Carousel: kisah siswa, step-by-step, tips orang tua'),
      bullet('Greeting: hari besar Islam dan hari nasional'),

      pb(),

      // ===== 8. RINGKASAN =====
      h1('8. Ringkasan'),
      empty(),

      makeTable(['Aspek', 'Status', 'Keterangan'], [
        ['Website', 'Berjalan otomatis', '63 artikel tayang + 439 terjadwal, auto-publish setiap 3 hari'],
        ['SEO', 'Proses berjalan', '31 keyword terdeteksi Google, butuh 3-6 bulan untuk naik signifikan'],
        ['Instagram', 'Aktif', '12 konten sudah diproduksi, posting 1-2x/minggu'],
        ['Biaya', 'Gratis', 'Kontribusi sosial Creativism untuk YUKA'],
        ['Yang Bapak/Ibu bisa bantu', '-', 'Kirim foto, ceritakan kisah siswa, share konten, siapkan dokumen legalitas'],
        ['Peluang terbesar', 'Google Ad Grants', 'Iklan Google gratis Rp 160 juta/tahun, perlu dokumen legalitas'],
        ['Quick win', 'Google Business Profile', 'Daftar di Google Maps, gratis dan berdampak besar'],
      ], [22, 20, 58]),

      empty(),
      h3('Langkah Selanjutnya yang Direkomendasikan'),
      empty(),
      makeTable(['Prioritas', 'Langkah', 'Siapa'], [
        ['1 (paling penting)', 'Siapkan dokumen legalitas untuk Google Ad Grants', 'Bapak/Ibu'],
        ['2', 'Daftarkan YUKA di Google Maps (Google Business Profile)', 'Creativism'],
        ['3', 'Kirim foto dan cerita siswa secara rutin', 'Bapak/Ibu'],
        ['4', 'Daftar di Kitabisa.com / WeCare.id', 'Creativism + Bapak/Ibu'],
        ['5', 'Mulai kumpulkan kontak donatur/pendukung untuk WA broadcast', 'Bapak/Ibu'],
        ['6', 'Buat video profil YUKA 2-3 menit', 'Bersama'],
        ['7', 'Cetak QR code donasi untuk di sekolah', 'Creativism'],
        ['8', 'Outreach ke perusahaan untuk program CSR', 'Bersama'],
      ], [18, 57, 25]),

      empty(), empty(),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 200 },
        children: [new TextRun({ text: 'Creativism Digital Marketing Agency', font: FONT, size: 24, bold: true, color: BLUE })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 },
        children: [new TextRun({ text: '"Jagonya Digital Marketing"', font: FONT, size: 20, italics: true, color: DARK })] }),
      new Paragraph({ alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'Kontak: Syauqi | 0812 2222 7920 | creativism.id', font: FONT, size: 20, color: BODY })] }),
    ]
  }]
});

const outputPath = 'D:/Projects/Yuka/data/Brief_YUKA_Indonesia_v2.docx';
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log('DOCX created:', outputPath);
  console.log('Size:', (buffer.length / 1024).toFixed(0), 'KB');
});

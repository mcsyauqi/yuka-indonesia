const { Document, Packer, Header, Footer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, HeadingLevel, PageBreak } = require('docx');
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

function pctToDxa(pct) {
  return pct.map(p => Math.round(CONTENT_W * p / 100));
}

function h1(text) {
  return new Paragraph({
    spacing: { before: 360, after: 200 },
    children: [new TextRun({ text, font: FONT, size: 32, bold: true, color: BLUE })],
  });
}

function h2(text) {
  return new Paragraph({
    spacing: { before: 320, after: 160 },
    children: [new TextRun({ text, font: FONT, size: 28, bold: true, color: DARK })],
  });
}

function h3(text) {
  return new Paragraph({
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, font: FONT, size: 24, bold: true, color: DARK })],
  });
}

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 120 },
    children: [new TextRun({ text, font: FONT, size: 22, color: opts.color || BODY, bold: opts.bold, italics: opts.italics })],
  });
}

function pRuns(...runs) {
  return new Paragraph({
    spacing: { after: 120 },
    children: runs.map(r => {
      if (typeof r === 'string') return new TextRun({ text: r, font: FONT, size: 22, color: BODY });
      return new TextRun({ text: r.text, font: FONT, size: 22, color: r.color || BODY, bold: r.bold, italics: r.italics });
    }),
  });
}

function bullet(text, level = 0) {
  return new Paragraph({
    spacing: { after: 80 },
    bullet: { level },
    children: [new TextRun({ text, font: FONT, size: 22, color: BODY })],
  });
}

function bulletRuns(runs, level = 0) {
  return new Paragraph({
    spacing: { after: 80 },
    bullet: { level },
    children: runs.map(r => {
      if (typeof r === 'string') return new TextRun({ text: r, font: FONT, size: 22, color: BODY });
      return new TextRun({ text: r.text, font: FONT, size: 22, color: r.color || BODY, bold: r.bold, italics: r.italics });
    }),
  });
}

function empty() {
  return new Paragraph({ spacing: { after: 80 }, children: [] });
}

const thinBorder = { style: BorderStyle.SINGLE, size: 1, color: 'DDDDDD' };
const borders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };

function makeTable(headers, rows, colPct) {
  const dxa = pctToDxa(colPct);
  const headerRow = new TableRow({
    tableHeader: true,
    children: headers.map((h, i) => new TableCell({
      width: { size: dxa[i], type: WidthType.DXA },
      borders,
      shading: { fill: BLUE },
      children: [new Paragraph({
        spacing: { before: 60, after: 60 },
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: h, font: FONT, size: 20, bold: true, color: 'FFFFFF' })]
      })]
    }))
  });

  const dataRows = rows.map(row => new TableRow({
    children: row.map((cell, i) => new TableCell({
      width: { size: dxa[i], type: WidthType.DXA },
      borders,
      children: [new Paragraph({
        spacing: { before: 40, after: 40 },
        children: [new TextRun({ text: cell, font: FONT, size: 20, color: BODY })]
      })]
    }))
  }));

  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: dxa,
    rows: [headerRow, ...dataRows]
  });
}

// ============ BUILD DOCUMENT ============

const doc = new Document({
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 2160, right: 1440, bottom: 2160, left: 1440 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          children: [new ImageRun({
            type: 'png', data: headerImage,
            transformation: { width: 900, height: 110 },
            floating: {
              horizontalPosition: { relative: 'page', offset: 450000 },
              verticalPosition: { relative: 'page', offset: -149999 },
              allowOverlap: true, behindDocument: true, wrap: { type: 'none' }
            },
            altText: { title: 'Header', description: 'Creativism Header', name: 'header.png' }
          })]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          children: [new ImageRun({
            type: 'png', data: footerImage,
            transformation: { width: 900, height: 107 },
            floating: {
              horizontalPosition: { relative: 'column', offset: -914399 },
              verticalPosition: { relative: 'paragraph', offset: -228599 },
              allowOverlap: true, behindDocument: true, wrap: { type: 'none' }
            },
            altText: { title: 'Footer', description: 'Creativism Footer', name: 'footer.png' }
          })]
        })]
      })
    },
    children: [
      // ===== COVER =====
      empty(), empty(), empty(), empty(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 120 },
        children: [new TextRun({ text: 'BRIEF WEBSITE', font: FONT, size: 36, bold: true, color: BLUE })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [new TextRun({ text: 'YUKA INDONESIA', font: FONT, size: 48, bold: true, color: DARK })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 200 },
        children: [new TextRun({ text: 'yukaindonesia.com', font: FONT, size: 28, color: BLUE, italics: true })]
      }),
      empty(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [new TextRun({ text: 'Yayasan Ukhuwah Kaffah Amanatullah', font: FONT, size: 24, color: BODY })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 80 },
        children: [new TextRun({ text: 'Jl. Kronggahan Raya II, Sleman, Yogyakarta', font: FONT, size: 22, color: BODY })]
      }),
      empty(), empty(), empty(),

      makeTable(
        ['Informasi', 'Detail'],
        [
          ['Disusun Oleh', 'Creativism Digital Marketing Agency'],
          ['Tanggal', '10 April 2026'],
          ['Website', 'yukaindonesia.com'],
          ['Status Proyek', 'Pro Bono (Gratis)'],
          ['PIC Creativism', 'Ahmad Thariq Syauqi (CEO)'],
        ],
        [35, 65]
      ),

      // ===== PAGE BREAK =====
      new Paragraph({ children: [new PageBreak()] }),

      // ===== 1. TENTANG WEBSITE =====
      h1('1. Tentang Website Ini'),
      p('Website yukaindonesia.com adalah website resmi Yayasan Ukhuwah Kaffah Amanatullah (YUKA) yang kami buatkan sebagai bentuk kontribusi Creativism untuk pendidikan anak berkebutuhan khusus di Indonesia.'),
      empty(),
      p('Tujuan website ini:'),
      bullet('Memperkenalkan YUKA dan Sekolah Inklusi Taruna Imani ke masyarakat luas melalui Google'),
      bullet('Menjadi sumber informasi terpercaya tentang pendidikan anak berkebutuhan khusus (ABK)'),
      bullet('Membuka pintu donasi online dari orang-orang yang peduli di seluruh Indonesia'),
      bullet('Membantu orang tua menemukan informasi tentang sekolah inklusi di Yogyakarta'),
      bullet('Meningkatkan kepercayaan publik terhadap YUKA sebagai lembaga yang profesional dan terpercaya'),

      // ===== 2. YANG SUDAH DIKERJAKAN =====
      h1('2. Apa Saja yang Sudah Kami Kerjakan'),
      p('Berikut pekerjaan yang sudah kami selesaikan untuk YUKA. Semua ini gratis, tidak ada biaya sama sekali.'),
      empty(),

      makeTable(
        ['Pekerjaan', 'Detail'],
        [
          ['Website lengkap dari nol', '8 halaman utama: Beranda, Tentang Kami, Program, Galeri Foto, Artikel, Kontak, Donasi, dan halaman 404'],
          ['63 artikel sudah tayang', 'Topik: autisme, ADHD, down syndrome, terapi wicara, sekolah inklusi, tunagrahita, dan lain-lain'],
          ['439 artikel terjadwal', 'Akan tayang otomatis setiap 3 hari sampai akhir Desember 2026, tanpa Bapak/Ibu perlu melakukan apa-apa'],
          ['Sistem auto-publish', 'Setiap 3 hari, jam 09:00 WIB, artikel baru otomatis tayang sendiri'],
          ['Google Search Console', 'Alat pemantau Google sudah terpasang untuk melihat performa website di mesin pencari'],
          ['Google Analytics', 'Alat pemantau pengunjung sudah terpasang untuk melihat berapa orang mengunjungi website'],
          ['SEO (Search Engine Optimization)', 'Semua halaman sudah dioptimasi: judul, deskripsi, peta situs, schema markup, dan lain-lain'],
          ['Halaman donasi', 'Sudah ada halaman khusus untuk menerima donasi. Tinggal diisi nomor rekening YUKA'],
          ['Galeri foto', 'Foto-foto kegiatan sekolah dan siswa sudah dipasang di website'],
          ['RSS Feed', 'Agar konten bisa dibagikan otomatis ke platform lain'],
        ],
        [30, 70]
      ),

      empty(),
      pRuns(
        { text: 'Catatan: ', bold: true },
        'Seluruh pekerjaan di atas bernilai puluhan juta rupiah jika dikerjakan secara komersial. Creativism memberikan ini sebagai kontribusi sosial untuk pendidikan anak berkebutuhan khusus.'
      ),

      // ===== 3. POSISI SAAT INI =====
      h1('3. Posisi Website Saat Ini'),
      p('Website baru berjalan sekitar 2 bulan. Berikut kondisinya per April 2026:'),
      empty(),

      makeTable(
        ['Indikator', 'Status', 'Keterangan'],
        [
          ['Artikel yang sudah tayang', '63 artikel', 'Topik seputar pendidikan ABK, terapi, dan inklusi'],
          ['Artikel terjadwal (otomatis)', '439 artikel', 'Tayang setiap 3 hari sampai Desember 2026'],
          ['Kata kunci terdeteksi Google', '31 kata kunci', 'ADHD, down syndrome, tunagrahita, dan lain-lain'],
          ['Posisi di Google', 'Halaman 4-9', 'Normal untuk website baru (butuh 3-6 bulan)'],
          ['Pengunjung dari Google', 'Belum ada', 'Wajar, Google butuh waktu untuk percaya website baru'],
          ['Tampilan di HP', 'Sudah bagus', 'Website bisa diakses dengan baik di HP maupun komputer'],
        ],
        [30, 20, 50]
      ),

      empty(),
      h3('Penjelasan Sederhana'),
      pRuns(
        'Website YUKA itu seperti ',
        { text: 'pohon yang baru ditanam', bold: true },
        '. Sudah tumbuh 63 daun (artikel), dan setiap 3 hari tumbuh daun baru secara otomatis. Tinggal tunggu akarnya makin kuat (Google makin percaya), lalu pohonnya akan makin besar dan banyak orang yang datang berteduh (mengunjungi website).'
      ),

      // ===== 4. TARGET KE DEPAN =====
      h1('4. Target dan Harapan ke Depan'),
      empty(),

      makeTable(
        ['Periode', 'Artikel', 'Perkiraan Pengunjung', 'Yang Terjadi'],
        [
          ['3 bulan (Juli 2026)', '90+ artikel', '100 - 500 /bulan', 'Beberapa artikel mulai masuk halaman 1-3 Google untuk kata kunci yang tidak terlalu kompetitif'],
          ['6 bulan (Oktober 2026)', '200+ artikel', '500 - 2.000 /bulan', 'Orang yang cari info tentang ABK, terapi anak, sekolah inklusi mulai menemukan YUKA'],
          ['12 bulan (Des 2026)', '500+ artikel', '2.000 - 10.000 /bulan', 'YUKA menjadi salah satu sumber informasi ABK terlengkap di Indonesia'],
          ['2027 dan seterusnya', '500+ artikel', '10.000+ /bulan', 'Referensi utama ABK Indonesia, pintu masuk donatur baru dari seluruh Indonesia'],
        ],
        [20, 15, 20, 45]
      ),

      empty(),
      p('Jangka panjang, website ini bisa menjadi:'),
      bullet('Sarana penerimaan donasi online dari seluruh Indonesia'),
      bullet('Pintu masuk orang tua yang mencari sekolah inklusi di Yogyakarta'),
      bullet('Media edukasi tentang anak berkebutuhan khusus yang dipercaya'),
      bullet('Alat untuk mendapat liputan media karena konten yang lengkap dan profesional'),

      // ===== PAGE BREAK =====
      new Paragraph({ children: [new PageBreak()] }),

      // ===== 5. YANG BISA DILAKUKAN =====
      h1('5. Yang Sebaiknya Bapak/Ibu Lakukan'),
      p('Website sudah berjalan otomatis. Tapi ada beberapa hal sederhana yang bisa sangat membantu mempercepat pertumbuhan:'),
      empty(),

      h3('a) Kirim Foto-Foto Kegiatan Terbaru'),
      p('Cukup kirim via WhatsApp ke Syauqi. Foto kegiatan belajar, foto siswa (dengan izin orang tua), foto acara sekolah. Google dan pengunjung lebih percaya website yang punya foto-foto asli.'),
      empty(),

      h3('b) Ceritakan Kisah-Kisah Siswa'),
      p('Kalau ada cerita menarik tentang perkembangan siswa, misalnya anak yang awalnya belum bisa bicara sekarang sudah bisa komunikasi, ceritakan ke kami via WhatsApp atau telepon. Kami yang tuliskan jadi artikel. Cerita nyata seperti ini sangat kuat untuk menarik simpati pembaca dan donatur.'),
      empty(),

      h3('c) Bagikan Link Website ke Orang-Orang Terdekat'),
      p('Sesekali, bagikan link yukaindonesia.com ke grup WhatsApp keluarga, teman, atau komunitas. Tidak perlu sering. Cukup saat ada artikel yang menurut Bapak/Ibu bagus. Makin banyak orang mengunjungi, makin cepat Google menaikkan posisi website.'),
      empty(),

      h3('d) Pastikan Nomor Rekening Donasi Sudah Benar'),
      p('Di halaman donasi (yukaindonesia.com/donasi), pastikan nomor rekening yang tercantum sudah benar dan aktif. Kalau ada perubahan, kabari kami supaya bisa diupdate.'),
      empty(),

      h3('e) Pasang Link Website di Media Sosial YUKA'),
      p('Kalau YUKA punya Instagram, Facebook, atau media sosial lain, minta tolong siapapun yang mengelolanya untuk memasang link yukaindonesia.com di bio/profil. Ini membantu Google mengenali bahwa YUKA itu lembaga yang nyata dan aktif.'),
      empty(),

      // ===== 6. SARAN STRATEGI PERTUMBUHAN =====
      new Paragraph({ children: [new PageBreak()] }),
      h1('6. Saran Strategi agar YUKA Lebih Cepat Dikenal'),
      p('Berdasarkan riset tentang strategi digital yang berhasil diterapkan oleh berbagai yayasan dan organisasi nirlaba, berikut saran-saran yang bisa membantu YUKA tumbuh lebih cepat:'),
      empty(),

      // --- 6.1 ---
      h2('6.1 Google Ad Grants (Iklan Google Gratis Rp 160 Juta/Tahun)'),
      pRuns(
        { text: 'Ini peluang paling besar.', bold: true },
        ' Google menyediakan program khusus untuk yayasan dan organisasi nirlaba: ',
        { text: 'Google Ad Grants', bold: true },
        '. Program ini memberikan kredit iklan Google sebesar $10.000 per bulan (sekitar Rp 160 juta per tahun) secara ',
        { text: 'GRATIS', bold: true },
        '.'
      ),
      empty(),
      p('Dengan program ini, website YUKA bisa muncul di posisi teratas Google setiap kali orang mencari kata kunci seperti "sekolah inklusi Yogyakarta", "terapi anak berkebutuhan khusus", "donasi pendidikan ABK", dan lain-lain. Tanpa biaya sama sekali.'),
      empty(),
      p('Syarat untuk mendaftar:'),
      bullet('YUKA harus terdaftar sebagai organisasi nirlaba (sudah punya SK Kemenkumham)'),
      bullet('Website harus aktif dan berkualitas (sudah terpenuhi)'),
      bullet('Mendaftar di Google for Nonprofits melalui partner verifikasi (Goodstack/Percent)'),
      bullet('Tidak boleh lembaga pemerintah, rumah sakit, atau sekolah formal negeri'),
      empty(),
      pRuns(
        { text: 'Yang Creativism bisa bantu: ', bold: true },
        'Kami bisa membantu proses pendaftaran dan setup kampanye iklan Google Ad Grants untuk YUKA. Bapak/Ibu cukup menyiapkan dokumen legalitas yayasan (SK Kemenkumham, NPWP, Akta Pendirian).'
      ),

      empty(),

      // --- 6.2 ---
      h2('6.2 Storytelling: Ceritakan Kisah Nyata'),
      p('Berdasarkan riset, konten yang paling efektif untuk yayasan adalah cerita nyata. Orang berdonasi bukan karena statistik, tapi karena mereka merasakan dampaknya.'),
      empty(),
      p('Contoh konten yang sangat kuat:'),
      bullet('"Kisah Ilham: Dari Tidak Bisa Bicara Sampai Jadi Hafiz Quran" (sudah ada di website)'),
      bullet('"Kisah Mas Ilham: Mandiri dengan Usaha Telur Asin" (sudah ada di website)'),
      bullet('Cerita perkembangan siswa dari awal masuk sampai sekarang'),
      bullet('Cerita orang tua yang anaknya bersekolah di Taruna Imani'),
      bullet('Dokumentasi kegiatan sehari-hari di sekolah'),
      empty(),
      pRuns(
        { text: 'Yang perlu dilakukan: ', bold: true },
        'Kirimkan cerita-cerita seperti ini ke kami secara rutin (cukup via WhatsApp). Kami yang tulis, edit, dan publish di website. Satu cerita nyata bisa lebih powerful dari 10 artikel biasa.'
      ),

      empty(),

      // --- 6.3 ---
      h2('6.3 Media Sosial Sederhana'),
      p('YUKA tidak perlu jadi viral atau posting setiap hari. Cukup dengan strategi sederhana:'),
      empty(),
      bullet('Buat akun Instagram untuk YUKA (jika belum ada)'),
      bullet('Posting 2-3 kali seminggu: foto kegiatan sekolah, kutipan ayat, info pendidikan ABK'),
      bullet('Di setiap postingan, cantumkan link yukaindonesia.com di bio'),
      bullet('Gunakan hashtag: #AnakBerkebutuhanKhusus #SekolahInklusi #YUKA #Yogyakarta #PendidikanInklusi'),
      bullet('Minta guru, orang tua siswa, dan teman-teman YUKA untuk follow dan share'),
      empty(),
      pRuns(
        { text: 'Kenapa ini penting: ', bold: true },
        'Google mempertimbangkan keberadaan di media sosial sebagai tanda bahwa sebuah lembaga itu nyata dan aktif. Ini membantu mempercepat naiknya posisi website di Google.'
      ),

      empty(),

      // --- 6.4 ---
      h2('6.4 Kolaborasi dengan Pihak Lain'),
      p('Yayasan yang berkembang pesat biasanya punya jaringan kolaborasi. Beberapa ide:'),
      empty(),

      h3('Kolaborasi dengan Kampus'),
      bullet('Ajak mahasiswa UGM, UNY, UII untuk magang atau KKN di YUKA'),
      bullet('Program penelitian/skripsi tentang pendidikan inklusi di Taruna Imani'),
      bullet('Dosen atau pakar sebagai narasumber konten website'),
      empty(),

      h3('Kolaborasi dengan Komunitas'),
      bullet('Bergabung dengan forum yayasan pendidikan se-Yogyakarta'),
      bullet('Ikut kegiatan komunitas difabel/disabilitas'),
      bullet('Jadi narasumber di seminar atau webinar tentang pendidikan ABK'),
      empty(),

      h3('Kolaborasi dengan Media'),
      bullet('Hubungi media lokal Yogyakarta (Tribun Jogja, Harian Jogja) untuk liputan'),
      bullet('Kirim press release saat ada kegiatan besar atau pencapaian siswa'),
      bullet('Setiap liputan media = backlink gratis yang memperkuat posisi website di Google'),

      empty(),

      // --- 6.5 ---
      h2('6.5 Email dan WhatsApp untuk Donatur'),
      p('Berdasarkan data, email marketing menghasilkan sekitar 28% dari total donasi online yayasan di seluruh dunia. Setiap Rp 1 yang diinvestasikan untuk email bisa menghasilkan Rp 40 dalam donasi.'),
      empty(),
      p('Yang bisa dimulai sekarang:'),
      bullet('Kumpulkan nomor WhatsApp dan email dari orang-orang yang pernah berinteraksi dengan YUKA'),
      bullet('Kirim update bulanan singkat: apa yang YUKA lakukan bulan ini, berapa siswa yang dibantu, cerita inspiratif'),
      bullet('Kirim ucapan di momen-momen penting: Ramadhan, Idul Adha, Hari Pendidikan Nasional'),
      bullet('Di setiap pesan, sertakan link halaman donasi yukaindonesia.com/donasi'),
      empty(),
      pRuns(
        { text: 'Prinsipnya: ', bold: true },
        'Jangan minta donasi terus-menerus. Ceritakan dulu apa yang YUKA lakukan, tunjukkan dampaknya, baru kemudian ajak berdonasi. Orang yang sudah merasa terhubung dengan misi YUKA akan berdonasi dengan sukarela.'
      ),

      empty(),

      // --- 6.6 ---
      h2('6.6 Transparansi dan Laporan Publik'),
      p('Kepercayaan adalah modal utama yayasan. Donatur ingin tahu uang mereka dipakai untuk apa. Beberapa langkah sederhana:'),
      empty(),
      bullet('Buat laporan sederhana setiap bulan (1 halaman saja): berapa donasi yang diterima, dipakai untuk apa'),
      bullet('Publish laporan ini di website (kami buatkan halaman khusus jika Bapak/Ibu mau)'),
      bullet('Foto-foto pembelian alat, buku, atau perlengkapan sekolah dari dana donasi'),
      bullet('Ucapan terima kasih publik kepada donatur (tanpa harus sebut nominal)'),
      empty(),
      p('Yayasan yang transparan mendapat kepercayaan lebih tinggi, dan donatur cenderung berdonasi lagi di kemudian hari.'),

      empty(),

      // --- 6.7 ---
      h2('6.7 Google Business Profile (Google Maps)'),
      p('Ini langkah kecil tapi berdampak besar. Daftarkan Sekolah Inklusi Taruna Imani di Google Maps (gratis).'),
      empty(),
      p('Manfaatnya:'),
      bullet('Orang yang cari "sekolah inklusi Sleman" atau "sekolah ABK Yogyakarta" di Google Maps langsung menemukan YUKA'),
      bullet('Bisa menampilkan foto, jam operasional, nomor telepon, dan link website'),
      bullet('Orang tua bisa memberikan review/ulasan'),
      bullet('Memperkuat kepercayaan Google terhadap website yukaindonesia.com'),
      empty(),
      pRuns(
        { text: 'Yang Creativism bisa bantu: ', bold: true },
        'Kami bisa membantu mendaftarkan dan mengoptimasi profil Google Business YUKA. Bapak/Ibu cukup konfirmasi alamat dan jam operasional sekolah.'
      ),

      empty(),

      // --- 6.8 ---
      h2('6.8 QR Code untuk Donasi Offline'),
      p('Buat QR code yang mengarah ke halaman donasi yukaindonesia.com/donasi. QR code ini bisa:'),
      empty(),
      bullet('Dicetak dan ditempel di ruang tamu sekolah'),
      bullet('Ditaruh di brosur atau flyer YUKA'),
      bullet('Dibagikan saat ada acara atau pengajian'),
      bullet('Disertakan di kartu nama pengurus yayasan'),
      empty(),
      p('Cara kerjanya: orang scan QR code dengan kamera HP, langsung terbuka halaman donasi. Sangat mudah bahkan untuk yang tidak terbiasa dengan teknologi.'),

      empty(),

      // --- 6.9 ---
      h2('6.9 Daftar di Platform Donasi Online (Kitabisa, WeCare, dll)'),
      p('Di Indonesia, platform donasi online seperti Kitabisa.com dan WeCare.id sudah dipercaya jutaan orang. YUKA bisa membuat campaign di platform-platform ini untuk menjangkau donatur yang lebih luas.'),
      empty(),
      p('Keuntungannya:'),
      bullet('Akses ke jutaan pengguna yang sudah terbiasa berdonasi online'),
      bullet('Sistem pembayaran sudah siap (transfer bank, e-wallet, kartu kredit)'),
      bullet('Meningkatkan kredibilitas YUKA karena terverifikasi oleh platform'),
      bullet('Campaign bisa di-share ke media sosial dengan mudah'),
      empty(),
      pRuns(
        { text: 'Yang perlu disiapkan: ', bold: true },
        'Dokumen legalitas yayasan, foto kegiatan, dan deskripsi program yang ingin didanai. Kami bisa bantu menyusun deskripsi campaign-nya.'
      ),

      empty(),

      // --- 6.10 ---
      h2('6.10 Outreach CSR Perusahaan'),
      p('Banyak perusahaan di Indonesia yang punya program CSR (Corporate Social Responsibility) dan mencari yayasan untuk diajak kerja sama. Ini bisa menjadi sumber pendanaan yang signifikan.'),
      empty(),
      p('Langkah yang bisa dilakukan:'),
      bullet('Identifikasi perusahaan di sekitar Yogyakarta yang punya program CSR pendidikan'),
      bullet('Siapkan proposal singkat (1-2 halaman) tentang program YUKA yang perlu didanai'),
      bullet('Hubungi bagian CSR atau HRD perusahaan tersebut'),
      bullet('Tawarkan kerja sama: perusahaan mendanai program, YUKA memberikan laporan dan publikasi'),
      empty(),
      pRuns(
        { text: 'Contoh perusahaan potensial: ', bold: true },
        'bank-bank di Yogyakarta, perusahaan properti, BUMN, perusahaan teknologi, dan perusahaan yang bergerak di bidang pendidikan.'
      ),

      empty(),

      // --- 6.11 ---
      h2('6.11 Video Profil YUKA untuk YouTube'),
      p('Video profil berdurasi 2-3 menit bisa menjadi aset yang sangat berharga. Video ini bisa ditampilkan di website, dibagikan di media sosial, dan dikirim ke calon donatur atau mitra CSR.'),
      empty(),
      p('Isi video yang ideal:'),
      bullet('Pembuka: cuplikan kegiatan anak-anak di sekolah'),
      bullet('Penjelasan singkat: apa itu YUKA, apa misinya'),
      bullet('Testimoni: guru atau orang tua siswa menceritakan pengalaman'),
      bullet('Ajakan: bagaimana cara mendukung YUKA (donasi, volunteer, share)'),
      empty(),
      p('Video tidak harus mahal. Cukup direkam dengan HP, yang penting ceritanya menyentuh hati. Kami bisa bantu editing dasar jika diperlukan.'),

      empty(),

      // --- 6.12 ---
      h2('6.12 Halaman Transparansi Donasi dengan Data Visual'),
      p('Membuat halaman khusus di website yang menampilkan secara visual: berapa donasi yang diterima, digunakan untuk apa, dan dampaknya. Bisa berupa grafik sederhana atau infografis.'),
      empty(),
      p('Contoh informasi yang ditampilkan:'),
      bullet('Total donasi bulan ini: Rp X.XXX.XXX'),
      bullet('Penggunaan: 60% operasional sekolah, 30% alat belajar, 10% kegiatan'),
      bullet('Jumlah siswa yang terbantu'),
      bullet('Foto-foto pembelian dari dana donasi'),
      empty(),
      p('Transparansi seperti ini sangat meningkatkan kepercayaan dan mendorong donatur untuk berdonasi lagi.'),

      // ===== PAGE BREAK =====
      new Paragraph({ children: [new PageBreak()] }),

      // ===== 7. JADWAL ARTIKEL =====
      h1('7. Jadwal 10 Artikel Terdekat'),
      p('Berikut contoh artikel yang akan tayang otomatis dalam waktu dekat:'),
      empty(),

      makeTable(
        ['Tanggal', 'Judul Artikel'],
        [
          ['11 April 2026', 'Terapi Okupasi: Pengertian, Manfaat, dan Proses Terapi untuk ABK'],
          ['14 April 2026', 'Tuna Wicara: Pengertian, Penyebab, Ciri-Ciri, dan Cara Berkomunikasi'],
          ['17 April 2026', 'SLB: Pengertian, Jenis, Kurikulum, dan Daftar SLB di Yogyakarta'],
          ['20 April 2026', 'Terapi Wicara: Pengertian, Manfaat, Biaya, dan Proses Terapi'],
          ['23 April 2026', 'Shadow Teacher: Peran, Tugas, dan Cara Menjadi Pendamping ABK'],
          ['26 April 2026', 'Kecerdasan Majemuk'],
          ['29 April 2026', 'Penyandang Disabilitas'],
          ['2 Mei 2026', 'Inklusi Sosial'],
          ['5 Mei 2026', 'GPK (Guru Pendamping Khusus)'],
          ['8 Mei 2026', 'Slow Learner'],
        ],
        [22, 78]
      ),

      empty(),
      p('Dan seterusnya sampai akhir Desember 2026. Total 439 artikel lagi yang sudah disiapkan dan terjadwal otomatis.'),

      // ===== 8. RINGKASAN =====
      new Paragraph({ children: [new PageBreak()] }),
      h1('8. Ringkasan'),
      empty(),

      makeTable(
        ['Hal', 'Keterangan'],
        [
          ['Website', 'yukaindonesia.com, sudah jadi dan berjalan otomatis'],
          ['Artikel', '63 tayang + 439 terjadwal sampai Desember 2026'],
          ['Google', 'Sudah mengenali 31 kata kunci, butuh 3-6 bulan untuk naik'],
          ['Biaya', 'Gratis (kontribusi Creativism untuk YUKA)'],
          ['Yang Bapak/Ibu bisa bantu', 'Kirim foto, ceritakan kisah siswa, share link, cek rekening donasi'],
          ['Peluang besar', 'Google Ad Grants (iklan gratis Rp 160 juta/tahun dari Google)'],
          ['Langkah selanjutnya', 'Siapkan dokumen legalitas untuk pendaftaran Google Ad Grants'],
        ],
        [30, 70]
      ),

      empty(), empty(),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { before: 200 },
        children: [new TextRun({ text: 'Creativism Digital Marketing Agency', font: FONT, size: 24, bold: true, color: BLUE })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        spacing: { after: 40 },
        children: [new TextRun({ text: '"Jagonya Digital Marketing"', font: FONT, size: 20, italics: true, color: DARK })]
      }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [new TextRun({ text: 'Kontak: Syauqi - 0812 2222 7920 | creativism.id', font: FONT, size: 20, color: BODY })]
      }),
    ]
  }]
});

const outputPath = 'D:/Projects/Yuka/data/Brief_Website_YUKA_Indonesia.docx';
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log('DOCX created:', outputPath);
  console.log('Size:', (buffer.length / 1024).toFixed(0), 'KB');
});

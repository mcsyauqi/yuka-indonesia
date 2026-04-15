const https = require('https');
const fs = require('fs');
const path = require('path');

// Load env
const envPath = 'D:/Projects/Creativism App/.env';
const env = {};
fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
  const m = line.match(/^([^=]+)=(.*)$/);
  if (m) env[m[1].trim()] = m[2].trim();
});

function httpsRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(data) }); }
        catch { resolve({ status: res.statusCode, data }); }
      });
    });
    req.on('error', reject);
    if (body) req.write(typeof body === 'string' ? body : JSON.stringify(body));
    req.end();
  });
}

async function getAccessToken() {
  const params = new URLSearchParams({
    client_id: env.GOOGLE_CLIENT_ID,
    client_secret: env.GOOGLE_CLIENT_SECRET,
    refresh_token: env.GOOGLE_DRIVE_REFRESH_TOKEN,
    grant_type: 'refresh_token'
  });
  const res = await httpsRequest({
    hostname: 'oauth2.googleapis.com',
    path: '/token',
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  }, params.toString());
  return res.data.access_token;
}

async function main() {
  const token = await getAccessToken();
  console.log('Got access token');

  // 1. Create Google Doc
  const createRes = await httpsRequest({
    hostname: 'docs.googleapis.com',
    path: '/v1/documents',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }, JSON.stringify({
    title: 'Brief Website YUKA Indonesia — yukaindonesia.com'
  }));

  const docId = createRes.data.documentId;
  console.log('Created doc:', docId);

  // 2. Build content requests
  const requests = [];
  let idx = 1;

  function addText(text, style) {
    const start = idx;
    requests.push({ insertText: { location: { index: idx }, text: text + '\n' } });
    idx += text.length + 1;
    if (style) {
      const styleReq = {
        updateParagraphStyle: {
          range: { startIndex: start, endIndex: idx },
          paragraphStyle: {},
          fields: ''
        }
      };
      if (style === 'HEADING_1') {
        styleReq.updateParagraphStyle.paragraphStyle.namedStyleType = 'HEADING_1';
        styleReq.updateParagraphStyle.fields = 'namedStyleType';
      } else if (style === 'HEADING_2') {
        styleReq.updateParagraphStyle.paragraphStyle.namedStyleType = 'HEADING_2';
        styleReq.updateParagraphStyle.fields = 'namedStyleType';
      } else if (style === 'HEADING_3') {
        styleReq.updateParagraphStyle.paragraphStyle.namedStyleType = 'HEADING_3';
        styleReq.updateParagraphStyle.fields = 'namedStyleType';
      }
      requests.push(styleReq);
    }
    return { start, end: idx };
  }

  function addBoldText(text) {
    const start = idx;
    requests.push({ insertText: { location: { index: idx }, text: text } });
    idx += text.length;
    requests.push({
      updateTextStyle: {
        range: { startIndex: start, endIndex: idx },
        textStyle: { bold: true },
        fields: 'bold'
      }
    });
  }

  function addNormalText(text) {
    requests.push({ insertText: { location: { index: idx }, text } });
    idx += text.length;
  }

  function addNewline() {
    requests.push({ insertText: { location: { index: idx }, text: '\n' } });
    idx += 1;
  }

  // === DOCUMENT CONTENT ===

  addText('Brief Website YUKA Indonesia', 'HEADING_1');
  addText('yukaindonesia.com', 'HEADING_3');
  addText('Disusun oleh: Creativism Digital Marketing Agency');
  addText('Tanggal: 10 April 2026');
  addText('');

  // --- Section 1 ---
  addText('1. Tentang Website Ini', 'HEADING_2');
  addText('Website yukaindonesia.com adalah website resmi Yayasan Ukhuwah Kaffah Amanatullah (YUKA) yang kami buatkan secara gratis sebagai bentuk kontribusi Creativism untuk pendidikan anak berkebutuhan khusus di Indonesia.');
  addText('');
  addText('Website ini bertujuan untuk:');
  addText('• Memperkenalkan YUKA dan Sekolah Inklusi Taruna Imani ke masyarakat luas melalui Google');
  addText('• Menjadi sumber informasi terpercaya tentang pendidikan anak berkebutuhan khusus');
  addText('• Membuka pintu donasi online dari orang-orang yang peduli');
  addText('• Membantu orang tua menemukan informasi tentang sekolah inklusi di Yogyakarta');
  addText('');

  // --- Section 2 ---
  addText('2. Apa Saja yang Sudah Kami Kerjakan', 'HEADING_2');
  addText('Berikut ini pekerjaan yang sudah kami selesaikan untuk YUKA (semua gratis, tidak ada biaya):');
  addText('');

  addBoldText('Website lengkap dari nol');
  addNormalText(' — 8 halaman utama: Beranda, Tentang Kami, Program, Galeri Foto, Artikel/Blog, Kontak, Donasi, dan halaman 404.\n');

  addBoldText('63 artikel sudah tayang');
  addNormalText(' — Artikel tentang berbagai topik pendidikan ABK: autisme, ADHD, down syndrome, terapi wicara, sekolah inklusi, dan lain-lain. Semua ditulis dengan standar SEO supaya bisa ditemukan di Google.\n');

  addBoldText('439 artikel lagi sudah disiapkan dan terjadwal');
  addNormalText(' — Artikel ini akan tayang otomatis setiap 3 hari sekali sampai akhir Desember 2026. Tanpa Bapak/Ibu perlu melakukan apa-apa.\n');

  addBoldText('Sistem auto-publish');
  addNormalText(' — Setiap 3 hari, jam 09:00 WIB, artikel baru otomatis tayang sendiri. Kami sudah atur semuanya.\n');

  addBoldText('Google Search Console & Google Analytics');
  addNormalText(' — Alat pemantau dari Google sudah terpasang. Kami bisa melihat berapa orang yang mengunjungi website, dari kata kunci apa, dan halaman mana yang paling banyak dibaca.\n');

  addBoldText('SEO (Search Engine Optimization)');
  addNormalText(' — Semua halaman sudah dioptimasi supaya mudah ditemukan di Google. Termasuk: judul halaman, deskripsi, peta situs (sitemap), dan lain-lain.\n');

  addBoldText('Halaman donasi');
  addNormalText(' — Sudah ada halaman khusus untuk menerima donasi. Tinggal diisi nomor rekening YUKA.\n');

  addBoldText('Galeri foto');
  addNormalText(' — Foto-foto kegiatan sekolah dan siswa sudah dipasang di website.\n');

  addText('');

  // --- Section 3 ---
  addText('3. Posisi Website Saat Ini', 'HEADING_2');
  addText('Website baru berjalan sekitar 2 bulan. Berikut kondisinya:');
  addText('');
  addText('• Google sudah mulai mengenali website YUKA. Dari data Google Search Console, website sudah muncul untuk 31 kata kunci pencarian seperti "ADHD adalah", "down syndrome", dan topik-topik ABK lainnya.');
  addText('• Posisi masih di halaman belakang Google (rata-rata halaman 4-9). Ini normal untuk website baru.');
  addText('• Belum ada pengunjung dari Google. Ini juga normal — Google butuh waktu 3-6 bulan untuk mulai mempercayai website baru.');
  addText('• Website sudah bisa diakses dengan baik di HP maupun komputer.');
  addText('');
  addBoldText('Analogi sederhana: ');
  addNormalText('Website YUKA itu seperti pohon yang baru ditanam. Sudah tumbuh 63 daun (artikel), dan setiap 3 hari tumbuh daun baru secara otomatis. Tinggal tunggu akarnya makin kuat (Google makin percaya), lalu pohonnya akan makin besar dan banyak orang yang datang berteduh (mengunjungi website).\n');
  addText('');

  // --- Section 4 ---
  addText('4. Target dan Harapan ke Depan', 'HEADING_2');
  addText('');

  addBoldText('3 bulan ke depan (Juli 2026):');
  addNormalText('\n');
  addText('• Artikel yang tayang akan mencapai 90+ artikel');
  addText('• Google mulai menempatkan beberapa artikel di halaman 1-3 untuk kata kunci yang tidak terlalu kompetitif');
  addText('• Mulai ada pengunjung dari Google (perkiraan: 100-500 pengunjung/bulan)');
  addText('');

  addBoldText('6 bulan ke depan (Oktober 2026):');
  addNormalText('\n');
  addText('• Artikel mencapai 200+ artikel');
  addText('• Beberapa artikel mulai masuk halaman 1 Google');
  addText('• Perkiraan pengunjung: 500-2.000/bulan');
  addText('• Orang yang cari info tentang ABK, terapi anak, sekolah inklusi mulai menemukan YUKA');
  addText('');

  addBoldText('Akhir tahun 2026 (Desember):');
  addNormalText('\n');
  addText('• Artikel mencapai 500+ artikel — menjadikan yukaindonesia.com salah satu sumber informasi ABK terlengkap di Indonesia');
  addText('• Perkiraan pengunjung: 2.000-10.000/bulan');
  addText('• Website bisa menjadi sarana penerimaan donasi online');
  addText('• Orang tua yang mencari sekolah inklusi di Yogyakarta bisa langsung menemukan YUKA');
  addText('');

  addBoldText('Jangka panjang (2027 dan seterusnya):');
  addNormalText('\n');
  addText('• Website terus tumbuh menjadi referensi utama tentang pendidikan ABK di Indonesia');
  addText('• Potensi mendapat liputan media karena konten yang lengkap');
  addText('• Pintu masuk donatur baru dari seluruh Indonesia');
  addText('• YUKA makin dikenal secara nasional, bukan hanya di Yogyakarta');
  addText('');

  // --- Section 5 ---
  addText('5. Yang Sebaiknya Bapak/Ibu Lakukan', 'HEADING_2');
  addText('Website sudah berjalan otomatis. Tapi ada beberapa hal sederhana yang bisa sangat membantu:');
  addText('');

  addBoldText('a) Kirim foto-foto kegiatan terbaru');
  addNormalText('\n');
  addText('Cukup kirim via WhatsApp ke Syauqi. Foto kegiatan belajar, foto siswa (dengan izin orang tua), foto acara sekolah. Google dan pengunjung lebih percaya website yang punya foto-foto asli, bukan foto internet.');
  addText('');

  addBoldText('b) Ceritakan kisah-kisah siswa');
  addNormalText('\n');
  addText('Kalau ada cerita menarik tentang perkembangan siswa — misalnya anak yang awalnya belum bisa bicara, sekarang sudah bisa komunikasi — ceritakan ke kami via WhatsApp atau telepon. Kami yang tuliskan jadi artikel. Cerita nyata seperti ini sangat kuat untuk menarik simpati pembaca dan donatur.');
  addText('');

  addBoldText('c) Share link website ke orang-orang terdekat');
  addNormalText('\n');
  addText('Sesekali, bagikan link yukaindonesia.com ke grup WhatsApp keluarga, teman, atau komunitas. Tidak perlu sering — cukup saat ada artikel yang menurut Bapak/Ibu bagus. Makin banyak orang mengunjungi, makin cepat Google menaikkan posisi website.');
  addText('');

  addBoldText('d) Pastikan nomor rekening donasi sudah benar');
  addNormalText('\n');
  addText('Di halaman donasi (yukaindonesia.com/donasi), pastikan nomor rekening yang tercantum sudah benar dan aktif. Kalau ada perubahan, kabari kami supaya bisa diupdate.');
  addText('');

  addBoldText('e) Pasang link website di media sosial YUKA');
  addNormalText('\n');
  addText('Kalau YUKA punya Instagram, Facebook, atau media sosial lain, minta tolong siapapun yang mengelolanya untuk memasang link yukaindonesia.com di bio/profil. Ini membantu Google mengenali bahwa YUKA itu lembaga yang nyata.');
  addText('');

  // --- Section 6 ---
  addText('6. Jadwal Artikel yang Akan Tayang', 'HEADING_2');
  addText('Berikut contoh 10 artikel yang akan tayang dalam waktu dekat:');
  addText('');
  addText('• 11 April 2026 — Terapi Okupasi: Pengertian, Manfaat, dan Proses Terapi untuk ABK');
  addText('• 14 April 2026 — Tuna Wicara: Pengertian, Penyebab, Ciri-Ciri, dan Cara Berkomunikasi');
  addText('• 17 April 2026 — SLB: Pengertian, Jenis, Kurikulum, dan Daftar SLB di Yogyakarta');
  addText('• 20 April 2026 — Terapi Wicara: Pengertian, Manfaat, Biaya, dan Proses Terapi');
  addText('• 23 April 2026 — Shadow Teacher: Peran, Tugas, dan Cara Menjadi Pendamping ABK');
  addText('• 26 April 2026 — Kecerdasan Majemuk');
  addText('• 29 April 2026 — Penyandang Disabilitas');
  addText('• 2 Mei 2026 — Inklusi Sosial');
  addText('• 5 Mei 2026 — GPK (Guru Pendamping Khusus)');
  addText('• 8 Mei 2026 — Slow Learner');
  addText('');
  addText('Dan seterusnya sampai akhir Desember 2026 — total 439 artikel lagi yang sudah disiapkan dan terjadwal otomatis.');
  addText('');

  // --- Section 7 ---
  addText('7. Ringkasan', 'HEADING_2');
  addText('');
  addText('• Website yukaindonesia.com sudah jadi dan berjalan otomatis');
  addText('• 63 artikel sudah tayang, 439 artikel lagi terjadwal otomatis sampai Desember 2026');
  addText('• Google sudah mulai mengenali website (31 kata kunci terdeteksi)');
  addText('• Perlu waktu 3-6 bulan lagi sampai pengunjung mulai datang dari Google');
  addText('• Semua ini gratis — kontribusi Creativism untuk YUKA');
  addText('• Yang Bapak/Ibu bisa bantu: kirim foto, ceritakan kisah siswa, dan share link website');
  addText('');
  addText('');
  addText('— Creativism Digital Marketing Agency');
  addText('Kontak: Syauqi — 0812 2222 7920');
  addText('Website: creativism.id');

  // 3. Send batchUpdate
  const updateRes = await httpsRequest({
    hostname: 'docs.googleapis.com',
    path: `/v1/documents/${docId}:batchUpdate`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }, JSON.stringify({ requests }));

  if (updateRes.status === 200) {
    console.log('Content written successfully');
  } else {
    console.log('Error writing content:', updateRes.status, JSON.stringify(updateRes.data).substring(0, 500));
  }

  // 4. Make it shareable (anyone with link can view)
  const shareRes = await httpsRequest({
    hostname: 'www.googleapis.com',
    path: `/drive/v3/files/${docId}/permissions`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }, JSON.stringify({
    role: 'reader',
    type: 'anyone'
  }));

  console.log('Sharing:', shareRes.status === 200 ? 'OK' : shareRes.status);

  console.log('\n=== DONE ===');
  console.log('Doc URL: https://docs.google.com/document/d/' + docId + '/edit');
  console.log('View URL: https://docs.google.com/document/d/' + docId + '/preview');
}

main().catch(console.error);

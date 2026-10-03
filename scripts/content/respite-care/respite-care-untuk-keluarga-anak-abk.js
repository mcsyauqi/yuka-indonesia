'use strict';
// Isi artikel /artikel/respite-care-untuk-keluarga-anak-abk (kartu Trello ZjY8P9Gn, catchup 2026-10-04).
// Menggantikan versi 2026-10-03 04:47 WIB (commit 8e86883) yang judulnya respite care tetapi badannya salinan
// artikel self-care-untuk-orang-tua-anak-disabilitas (konten duplikat, kartu induk P0 gswe5XFa pasangan #9).
// Sudut artikel: respite care sebagai LAYANAN PENGGANTI SEMENTARA (anak diasuh orang lain yang terlatih agar
// pengasuh utama mendapat jeda), dibedakan tegas dari self-care (kebiasaan merawat diri yang dilakukan orang tua sendiri).
// Fakta dicek ke sumber aslinya pada 4 Oktober 2026:
//  - ARCH National Respite Network: definisi (beranda), Types of Respite (model 1-9), How to Choose a Respite
//    Provider (daftar periksa), Planning for Respite (rencanakan lebih awal, jeda darurat, crisis nursery).
//  - PubMed: Whitmore 2016 (PMID 27592275), Harper dkk. 2013 (PMID 23529841), Christi dkk. 2023 (PMID 36030352),
//    McGrane dkk. 2026 (PMID 42000702), Woodgate dkk. 2026 (PMID 41869634). Angka diambil dari abstrak.
//  - Kemensos, halaman Program ATENSI (komponen layanan, pendekatan keluarga/komunitas/residensial, 31 UPT,
//    residensial sebagai alternatif terakhir dan perlindungan sementara).
//  - Kemensos, halaman Sentra Mulya Jaya (inovasi ULAN SI ANAK PENTAS).
//  - JDIH BPK: Permensos 7/2021 berstatus Tidak Berlaku, dicabut dengan Permensos 15/2025 tentang Asistensi Rehabilitasi Sosial.
//  - JDIH BPK: UU 11/2009 Pasal 1 angka 7 (definisi Lembaga Kesejahteraan Sosial), teks dibaca dari PDF resmi.
// Tidak ada nama layanan, alamat, atau tarif yang dikarang. Layanan yang tidak bisa diverifikasi tidak disebut.

const ARCH = 'https://archrespite.org/';
const ARCH_TYPES = 'https://archrespite.org/caregiver-resources/types-of-respite/';
const ARCH_CHOOSE = 'https://archrespite.org/caregiver-resources/how-to-choose-a-respite-provider/';
const ARCH_PLAN = 'https://archrespite.org/caregiver-resources/planning-for-respite/';
const WHITMORE = 'https://pubmed.ncbi.nlm.nih.gov/27592275/';
const HARPER = 'https://pubmed.ncbi.nlm.nih.gov/23529841/';
const CHRISTI = 'https://pubmed.ncbi.nlm.nih.gov/36030352/';
const MCGRANE = 'https://pubmed.ncbi.nlm.nih.gov/42000702/';
const WOODGATE = 'https://pubmed.ncbi.nlm.nih.gov/41869634/';
const ATENSI = 'https://kemensos.go.id/program-bantuan-sosial/atensi';
const MULYAJAYA = 'https://kemensos.go.id/index.php/upt/sentra/mulyajaya';
const PERMENSOS = 'https://peraturan.bpk.go.id/Details/217211/permensos-no-7-tahun-2021';
const UU_KESOS = 'https://peraturan.bpk.go.id/Details/38601/uu-no-11-tahun-2009';

const ext = (url, text) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`;

module.exports = {
  slug: 'respite-care-untuk-keluarga-anak-abk',
  keyword: 'respite care untuk keluarga anak abk',
  titleTag: 'Respite Care untuk Keluarga Anak ABK: Jenis dan Cara Memilih',
  metaDesc: 'Respite care memberi pengasuh anak ABK jeda lewat pengasuh pengganti terlatih. Kenali jenisnya, bukti riset, layanan di Indonesia, dan cara memilihnya.',
  ogTitle: 'Respite Care untuk Keluarga Anak ABK: Jenis Layanan, Bukti Riset, dan Pilihan di Indonesia',
  ogDesc: 'Perawatan jeda menurut ARCH National Respite Network, empat bentuknya, temuan penelitian soal stres pengasuh, layanan ATENSI Kemensos dan LKS, serta cara memilih dan mempersiapkan anak.',
  h1: 'Respite Care untuk Keluarga Anak ABK: Memberi Jeda yang Aman bagi Pengasuh dan Anak',
  crumb: 'Respite Care untuk Keluarga Anak ABK',
  parent: { name: 'Dukungan Keluarga Anak ABK', href: 'dukungan-keluarga-anak-abk' },
  about: ['Respite care', 'Perawatan jeda', 'Pengasuh keluarga', 'Anak berkebutuhan khusus', 'Asistensi Rehabilitasi Sosial (ATENSI)', 'Lembaga Kesejahteraan Sosial'],
  keywords: 'respite care untuk keluarga anak abk, respite care, perawatan jeda, pengasuh pengganti sementara, respite care anak berkebutuhan khusus, layanan ATENSI Kemensos, LKS penyandang disabilitas, beban pengasuh anak ABK',
  readTime: '12 menit baca',
  image: {
    file: 'Dokumentasi/museum-gunung-merapi-ibu-anak-tidur-bus-perjalanan-022.webp',
    w: 2458, h: 4096,
    alt: 'Seorang perempuan berhijab merah muda tersenyum sambil memangku dan merangkul anak laki-laki yang tertidur di bangku bus, dengan jendela berlatar pepohonan',
    caption: 'Seorang pendamping memangku anak yang tertidur di bus dalam perjalanan kegiatan bersama. Foto ini dokumentasi kegiatan YUKA, bukan foto layanan respite care dan bukan gambaran anak dengan kondisi tertentu.',
    credit: 'Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).',
    creditText: 'Foto: Dokumentasi YUKA',
    creditUrl: undefined,
    license: undefined,
    author: 'Yayasan Ukhuwah Kaffah Amanatullah'
  },
  answer: '<strong>Respite care</strong> (perawatan jeda) adalah pengasuhan sementara oleh orang lain yang terlatih, terencana atau darurat, supaya orang tua anak berkebutuhan khusus bisa beristirahat sejenak. Bentuknya bisa di rumah, di lembaga, lewat komunitas, atau saat krisis. Di Indonesia, layanan ini belum menjadi program nasional tersendiri.',
  intro: `
            <p>Mengasuh anak berkebutuhan khusus (ABK) sering berarti siaga hampir tanpa jeda: jadwal terapi, malam yang terputus, pengawasan agar anak tetap aman, dan urusan rumah yang tetap berjalan. Respite care hadir untuk satu kebutuhan yang sangat sederhana tetapi jarang terpenuhi, yaitu <strong>ada orang lain yang bisa dipercaya untuk menjaga anak sebentar</strong>.</p>
            <p>Artikel ini membahas respite care sebagai <em>layanan</em>: apa artinya, bentuk-bentuknya, apa kata penelitian, apa yang tersedia di Indonesia, dan bagaimana memilih serta menyiapkan anak. Kalau yang Anda cari adalah kebiasaan merawat diri sehari-hari (tidur, makan, olahraga ringan, batasan), bacalah panduan terpisah kami tentang <a href="self-care-untuk-orang-tua-anak-disabilitas">self-care untuk orang tua anak disabilitas</a>.</p>`,
  infoBox: 'YUKA adalah lembaga pendidikan, bukan penyedia respite care. Artikel ini tidak mencantumkan tarif atau daftar penyedia karena keduanya berbeda per daerah dan berubah dari waktu ke waktu. Pastikan setiap layanan langsung kepada penyelenggaranya, Dinas Sosial kabupaten/kota, atau Sentra Kementerian Sosial terdekat.',
  sections: [
    {
      id: 'definisi',
      h2: 'Apa Itu Respite Care?',
      toc: 'Pengertian respite care',
      html: `
            <p>ARCH National Respite Network and Resource Center, pusat sumber daya respite di Amerika Serikat, mendefinisikan respite sebagai <em>"planned or emergency care provided to a child or adult with special needs in order to provide temporary relief to family caregivers"</em> (${ext(ARCH, 'ARCH, halaman utama')}). Artinya, perawatan yang terencana atau darurat bagi anak atau orang dewasa berkebutuhan khusus, dengan tujuan memberi kelegaan sementara kepada pengasuh keluarga.</p>
            <p>Ada tiga unsur yang membuat sebuah pengaturan layak disebut respite care:</p>
            <ul>
                <li><strong>Ada pengasuh pengganti.</strong> Anak diasuh oleh orang lain, entah petugas lembaga, relawan terlatih, atau kerabat yang sudah dibekali.</li>
                <li><strong>Sifatnya sementara.</strong> Dari beberapa jam sampai beberapa hari, lalu anak kembali ke pengasuhan keluarga.</li>
                <li><strong>Tujuan utamanya jeda bagi pengasuh.</strong> Anak tetap harus aman dan nyaman, tetapi alasan layanan itu ada adalah supaya orang tua bisa memulihkan tenaga.</li>
            </ul>
            <p>ARCH dalam halaman ${ext(ARCH_PLAN, 'Planning for Respite')} menekankan bahwa jeda paling bermanfaat bila dipakai <em>sebelum</em> pengasuh kelelahan, terisolasi, dan kewalahan, serta bila dijadwalkan cukup rutin. Jadi respite care bukan tanda orang tua menyerah, melainkan bagian dari rencana pengasuhan jangka panjang.</p>`
    },
    {
      id: 'beda',
      h2: 'Bedanya dengan Self-Care, Terapi, dan Penitipan Biasa',
      toc: 'Beda dengan self-care, terapi, dan penitipan',
      html: `
            <p>Istilah ini sering tertukar dengan layanan lain. Tabel berikut membantu memilah:</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table" style="margin:0;min-width:560px;">
                <thead><tr><th>Aspek</th><th>Respite care</th><th>Self-care orang tua</th><th>Terapi anak</th><th>Penitipan anak umum</th></tr></thead>
                <tbody>
                    <tr><td>Siapa yang bertindak</td><td>Pengasuh pengganti</td><td>Orang tua sendiri</td><td>Terapis berkualifikasi</td><td>Pengasuh penitipan</td></tr>
                    <tr><td>Tujuan utama</td><td>Jeda dan pemulihan pengasuh</td><td>Menjaga kesehatan fisik dan mental orang tua</td><td>Perkembangan atau fungsi anak</td><td>Pengasuhan saat orang tua bekerja</td></tr>
                    <tr><td>Orang tua ikut hadir?</td><td>Tidak, justru boleh pergi</td><td>Ya, dilakukan sendiri</td><td>Sering ikut atau menunggu</td><td>Tidak</td></tr>
                    <tr><td>Kesiapan menangani kebutuhan khusus</td><td>Wajib, sesuai kondisi anak</td><td>Tidak relevan</td><td>Wajib</td><td>Belum tentu ada</td></tr>
                </tbody>
            </table></div>
            <p>Keduanya saling melengkapi: respite care memberi <em>waktu</em>, sedangkan self-care menentukan bagaimana waktu itu dipakai. Waktu jeda yang hanya habis untuk mengejar pekerjaan rumah biasanya tidak memulihkan, seperti diingatkan ARCH bahwa jeda perlu bermakna dan punya tujuan bagi pengasuh.</p>`
    },
    {
      id: 'jenis',
      h2: 'Empat Bentuk Respite Care',
      toc: 'Jenis-jenis respite care',
      html: `
            <p>Halaman ${ext(ARCH_TYPES, 'Types of Respite')} dari ARCH menguraikan sembilan model layanan. Agar mudah dipahami, kami kelompokkan menjadi empat bentuk.</p>
            <h3>1. Di rumah keluarga (in-home)</h3>
            <p>Pengasuh pengganti datang ke rumah. ARCH mencatat banyak keluarga memilih bentuk ini karena anak tidak perlu beradaptasi dengan tempat baru, rumah sudah disesuaikan dengan kebutuhan anak, dan kendala transportasi hilang. Variasinya: petugas dari lembaga layanan, pendamping (sitter-companion) yang dilatih organisasi tertentu, atau model mandiri ketika keluarga memilih dan melatih sendiri kerabat, tetangga, atau teman sebagai pengasuh pengganti.</p>
            <h3>2. Di luar rumah, berbasis lembaga</h3>
            <p>Anak diasuh di tempat lain: rumah keluarga pengasuh yang ditunjuk (host family), pusat layanan harian yang menerima anak berkebutuhan khusus, atau fasilitas residensial yang menyisihkan sejumlah tempat tidur untuk menginap jangka pendek. Bentuk ini memberi kesempatan anak berada di lingkungan baru dan memungkinkan jeda lebih panjang, termasuk menginap, tetapi menuntut persiapan transisi yang lebih matang.</p>
            <h3>3. Berbasis komunitas</h3>
            <p>ARCH menyebut model koperasi orang tua (parent cooperative): beberapa keluarga yang anaknya punya disabilitas atau penyakit kronis membentuk kelompok informal lalu bergantian saling menjaga anak. Model ini berkembang terutama di daerah yang layanannya terbatas, sehingga relevan bagi banyak keluarga di Indonesia. Kegiatan relawan dan lembaga keagamaan juga termasuk jalur informal yang disebut ARCH.</p>
            <h3>4. Darurat atau krisis</h3>
            <p>Jeda tidak selalu terencana. Orang tua bisa mendadak dirawat di rumah sakit, harus mengurus anggota keluarga lain, atau menghadapi krisis yang membuat anak berisiko tidak terjaga. Untuk anak, ARCH menyebut layanan semacam ini <em>crisis nursery</em>. ARCH juga mengingatkan bahwa jeda darurat biasanya lebih sulit dicari, sehingga perlu dikenali, bahkan didaftarkan, jauh sebelum dibutuhkan.</p>`
    },
    {
      id: 'riset',
      h2: 'Apa Kata Penelitian tentang Manfaatnya?',
      toc: 'Bukti riset manfaat respite care',
      html: `
            <p>Penelitian tentang respite care untuk keluarga anak berkebutuhan khusus menunjukkan arah yang menjanjikan, tetapi kualitas buktinya belum kuat. Berikut ringkasan beberapa studi, beserta keterbatasannya:</p>
            <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:1.5rem 0;"><table class="classification-table" style="margin:0;min-width:560px;">
                <thead><tr><th>Studi</th><th>Desain dan peserta</th><th>Temuan utama</th></tr></thead>
                <tbody>
                    <tr><td>${ext(WHITMORE, 'Whitmore, J Pediatr Nurs 2016')}</td><td>Tinjauan integratif atas 11 penelitian, pengasuh anak dengan gangguan spektrum autisme</td><td>Sebagian besar studi menemukan respite care berkaitan dengan stres yang lebih rendah, beberapa justru menemukan stres lebih tinggi, satu studi tidak menemukan hubungan. Penulis meminta hasilnya ditafsirkan hati-hati.</td></tr>
                    <tr><td>${ext(HARPER, 'Harper dkk., J Autism Dev Disord 2013')}</td><td>Survei 101 pasangan ayah dan ibu yang mengasuh anak autis</td><td>Tiap tambahan 1 jam respite per minggu berkaitan dengan kenaikan kualitas pernikahan sebesar setengah simpangan baku, lewat berkurangnya stres harian dan bertambahnya momen menyenangkan.</td></tr>
                    <tr><td>${ext(CHRISTI, 'Christi dkk., J Autism Dev Disord 2023')}</td><td>Studi percontohan pada keluarga militer dengan anak autis</td><td>Orang tua yang menerima respite melaporkan stres, kecemasan, dan depresi lebih rendah. Penulis menyatakan perlu penelitian lanjutan.</td></tr>
                    <tr><td>${ext(MCGRANE, 'McGrane dkk., J Pediatr Nurs 2026')}</td><td>Pra-pasca tanpa kelompok pembanding, 16 pengasuh, program respite kelompok 12 minggu</td><td>Skor stres pengasuh (Kingston Caregiver Stress Survey) turun rata-rata 9,53 poin (p = 0,001). Wawancara menyoroti rasa aman, kepercayaan, dan waktu untuk kegiatan di luar mengasuh.</td></tr>
                    <tr><td>${ext(WOODGATE, 'Woodgate dkk., Int J Popul Data Sci 2026')}</td><td>Kohort populasi 14.759 anak dengan kebutuhan kesehatan khusus di Manitoba, Kanada</td><td>Hanya 24,2 persen keluarga menerima setidaknya satu layanan respite. Peluang menerimanya lebih rendah di lingkungan berpenghasilan rendah.</td></tr>
                </tbody>
            </table></div>
            <p>Dua pelajaran bisa dipetik. Pertama, jeda yang <strong>aman dan dipercaya</strong> tampaknya menjadi kunci; Whitmore menekankan layanan perlu disesuaikan dengan kebutuhan unik tiap keluarga, dan peserta studi McGrane menyebut rasa aman serta kepercayaan sebagai tema utama. Kedua, bahkan di negara yang punya skema pendanaan publik, akses respite masih timpang. Semua studi di atas dilakukan di luar Indonesia, sehingga belum bisa dianggap mewakili kondisi keluarga di sini.</p>`
    },
    {
      id: 'indonesia',
      h2: 'Ketersediaan Respite Care di Indonesia',
      toc: 'Layanan yang ada di Indonesia',
      html: `
            <p>Sejauh penelusuran kami per Oktober 2026, Indonesia belum memiliki program nasional yang secara khusus bernama respite care untuk keluarga anak penyandang disabilitas. Yang ada adalah beberapa jalur layanan yang <em>sebagian fungsinya</em> bisa membantu meringankan beban pengasuh. Ketersediaan, syarat, dan biayanya berbeda per daerah, jadi perlakukan daftar di bawah sebagai titik awal bertanya, bukan jaminan layanan.</p>
            <h3>Asistensi Rehabilitasi Sosial (ATENSI) Kementerian Sosial</h3>
            <p>Menurut ${ext(ATENSI, 'halaman Program ATENSI Kemensos')}, ATENSI adalah layanan rehabilitasi sosial dengan pendekatan berbasis keluarga, komunitas, dan residensial. Komponennya antara lain dukungan pemenuhan kebutuhan hidup layak, <strong>perawatan sosial dan/atau pengasuhan anak</strong>, <strong>dukungan keluarga</strong>, terapi fisik, psikososial, dan mental spiritual, bantuan dan asistensi sosial, serta dukungan aksesibilitas. Penyandang disabilitas termasuk kelompok sasarannya, dan Kemensos menyebut memiliki 31 Unit Pelaksana Teknis di seluruh Indonesia.</p>
            <p>Perlu dicatat, halaman yang sama menggambarkan layanan residensial sebagai <em>alternatif terakhir</em>, perlindungan sementara, atau rumah aman. Artinya, layanan menginap di sentra atau rumah aman ditujukan untuk kondisi tertentu, bukan untuk jeda rutin seperti model respite di negara lain. Dasar hukum ATENSI semula Permensos Nomor 7 Tahun 2021, yang menurut ${ext(PERMENSOS, 'database peraturan JDIH BPK')} kini berstatus tidak berlaku dan dicabut dengan Permensos Nomor 15 Tahun 2025 tentang Asistensi Rehabilitasi Sosial.</p>
            <h3>Sentra Kemensos</h3>
            <p>Unit pelaksana ATENSI di lapangan disebut sentra. Sebagai contoh, ${ext(MULYAJAYA, 'Sentra Mulya Jaya di Jakarta')} mencantumkan inovasi ULAN SI ANAK PENTAS (Unit Layanan Rehabilitasi Sosial Anak Penyandang Disabilitas). Bentuk layanan tiap sentra berbeda, jadi tanyakan langsung apakah ada pendampingan berbasis keluarga yang bisa membantu mengurangi beban pengasuhan.</p>
            <h3>Dinas Sosial dan Lembaga Kesejahteraan Sosial (LKS)</h3>
            <p>Dinas Sosial kabupaten/kota adalah pintu masuk paling dekat untuk menanyakan layanan rehabilitasi sosial dan rujukan. Di tingkat masyarakat, ada Lembaga Kesejahteraan Sosial, yang menurut ${ext(UU_KESOS, 'UU Nomor 11 Tahun 2009 tentang Kesejahteraan Sosial')} Pasal 1 angka 7 adalah organisasi sosial atau perkumpulan sosial yang menyelenggarakan kesejahteraan sosial dan dibentuk oleh masyarakat, baik berbadan hukum maupun tidak. Sebagian LKS dan <a href="yayasan-sosial-anak-berkebutuhan-khusus">yayasan sosial anak berkebutuhan khusus</a> menjalankan kegiatan harian atau pendampingan yang secara praktis memberi orang tua beberapa jam jeda, tetapi tidak semua menyediakan penitipan atau pengasuh pengganti.</p>
            <h3>Komunitas sesama orang tua</h3>
            <p>Bagi banyak keluarga, jalur paling realistis justru model koperasi orang tua yang disebut ARCH: dua sampai empat keluarga yang saling kenal sepakat bergantian menjaga anak, misalnya dua jam setiap akhir pekan. Kelompok dukungan orang tua di sekolah, tempat terapi, atau komunitas diagnosis tertentu bisa menjadi tempat memulai kesepakatan seperti ini.</p>
            <p>Saat menghubungi lembaga mana pun, ajukan pertanyaan yang sama: apakah menerima anak dengan kondisi seperti anak Anda, berapa lama anak boleh ditinggal, siapa yang mengasuh dan apa pelatihannya, bagaimana penanganan obat atau kejang, berapa biayanya dan apakah ada keringanan, serta bagaimana prosedur darurat dan penjemputan. Dokumen seperti <a href="kartu-disabilitas">kartu disabilitas</a> kadang diminta saat pendaftaran layanan sosial, jadi siapkan sejak awal.</p>`
    },
    {
      id: 'memilih',
      h2: 'Cara Memilih Penyedia atau Pengasuh Pengganti',
      toc: 'Cara memilih penyedia respite',
      html: `
            <p>ARCH menyusun daftar periksa dalam halaman ${ext(ARCH_CHOOSE, 'How to Choose a Respite Provider')}. Kami sesuaikan dengan konteks keluarga di Indonesia:</p>
            <ol>
                <li><strong>Saring lewat telepon atau pesan</strong>, lalu lanjutkan dengan wawancara tatap muka.</li>
                <li><strong>Minta referensi dan bukti pelatihan</strong>, misalnya sertifikat pelatihan pertolongan pertama atau pengalaman mendampingi ABK.</li>
                <li><strong>Pastikan kemampuannya sesuai kebutuhan anak</strong>: memberi obat, membantu makan, toilet, mobilitas, atau menghadapi <a href="cara-mengatasi-tantrum-anak-autis">tantrum dan meltdown</a>.</li>
                <li><strong>Periksa latar belakang</strong>. Lembaga biasanya sudah melakukannya, tetapi ARCH menyarankan untuk tetap menanyakan, jangan berasumsi.</li>
                <li><strong>Untuk lembaga</strong>, tanyakan cara pekerja direkrut dan dilatih, tugas apa saja yang boleh dan tidak boleh mereka lakukan, serta siapa yang bertanggung jawab bila terjadi insiden.</li>
                <li><strong>Tuliskan kesepakatan</strong>: jam, tugas, biaya, aturan gawai, larangan tertentu, dan nomor darurat. ARCH menekankan harapan yang tertulis mencegah salah paham di kemudian hari.</li>
            </ol>
            <p>Bila pengasuh pengganti adalah kerabat sendiri, langkah yang sama tetap berguna. Kerabat yang sayang anak belum tentu paham cara anak berkomunikasi atau tanda-tanda ia mulai kewalahan.</p>`
    },
    {
      id: 'persiapan',
      h2: 'Mempersiapkan Anak agar Jeda Berjalan Mulus',
      toc: 'Mempersiapkan anak',
      html: `
            <p>Jeda pertama sering kali menegangkan bagi anak dan orang tua. Persiapan berikut membantu transisi berjalan lebih tenang:</p>
            <ul>
                <li><strong>Profil anak satu halaman.</strong> Tuliskan cara anak berkomunikasi, hal yang disukai dan dihindari, pemicu stres dan cara menenangkannya, kebiasaan makan dan tidur, alergi, jadwal obat, serta kontak dokter dan keluarga.</li>
                <li><strong>Mulai singkat dan bertahap.</strong> Misalnya satu jam dengan orang tua masih di rumah, lalu satu jam orang tua pergi, baru kemudian setengah hari.</li>
                <li><strong>Pakai bantuan visual.</strong> Anak yang terbantu rutinitas bisa diberi <a href="cara-membuat-jadwal-visual-untuk-anak-autis">jadwal visual</a> berisi foto pengasuh pengganti dan urutan kegiatan selama orang tua pergi.</li>
                <li><strong>Bawa benda yang menenangkan</strong> seperti mainan, selimut, atau headphone kesayangan bila anak diasuh di luar rumah.</li>
                <li><strong>Serah terima yang jelas.</strong> Sampaikan kondisi anak hari itu, dan minta catatan singkat saat menjemput: makan, tidur, kejadian penting.</li>
                <li><strong>Evaluasi bersama.</strong> Apa yang berjalan baik, apa yang perlu diubah, dan apakah anak menunjukkan tanda tidak nyaman yang perlu ditindaklanjuti.</li>
            </ul>
            <p>Anak berhak atas pengasuhan yang aman dan bermartabat di mana pun ia berada. Panduan kami tentang <a href="apa-saja-hak-anak-berkebutuhan-khusus">hak anak berkebutuhan khusus</a> bisa menjadi pegangan saat menilai sebuah layanan.</p>`
    },
    {
      id: 'rencana',
      h2: 'Menyusun Rencana Jeda Keluarga',
      toc: 'Menyusun rencana jeda keluarga',
      html: `
            <p>Respite care paling bermanfaat bila menjadi bagian rencana, bukan reaksi saat sudah terlalu lelah. Beberapa langkah praktis:</p>
            <ol>
                <li><strong>Petakan beban mingguan.</strong> Kapan waktu paling berat, siapa yang selama ini membantu, dan jam berapa jeda paling dibutuhkan. Pembagian peran anggota keluarga dibahas di panduan <a href="dukungan-keluarga-anak-abk">dukungan keluarga anak ABK</a>.</li>
                <li><strong>Siapkan dua lapis cadangan</strong>: jeda rutin (terencana) dan jeda darurat (siapa yang bisa dihubungi tengah malam bila orang tua sakit).</li>
                <li><strong>Tentukan tujuan jeda</strong>: tidur, kontrol kesehatan sendiri, waktu bersama pasangan atau kakak dan adik anak, atau sekadar diam sejenak.</li>
                <li><strong>Pantau dampaknya.</strong> Bila jeda rutin tidak lagi cukup dan tanda kelelahan berat muncul, pertimbangkan bantuan profesional; tips mengenalinya ada di panduan <a href="mengelola-stres-orang-tua-anak-abk">mengelola stres orang tua anak ABK</a>.</li>
            </ol>`
    }
  ],
  storyHighlight: 'Di Sekolah Inklusi Taruna Imani, kami melihat sendiri bahwa orang tua yang punya sedikit waktu jeda cenderung lebih sabar dan lebih siap mendampingi anak belajar. YUKA tidak menjalankan layanan respite care, tetapi guru kami bisa membantu menyusun profil anak, jadwal visual, dan catatan kebiasaan yang memudahkan siapa pun yang menggantikan orang tua sementara. Hubungi kami bila ingin berdiskusi.',
  relatedIntro: 'Lanjutkan ke panduan YUKA lain tentang dukungan untuk orang tua dan keluarga anak berkebutuhan khusus.',
  faq: [
    {
      q: 'Apa arti respite care dalam bahasa Indonesia?',
      a: 'Respite care biasa diterjemahkan sebagai perawatan jeda atau perawatan sementara. Anak berkebutuhan khusus diasuh sementara oleh orang lain yang terlatih, terencana atau dalam keadaan darurat, agar pengasuh utama mendapat waktu istirahat.'
    },
    {
      q: 'Apa bedanya respite care dengan self-care orang tua?',
      a: 'Respite care adalah layanan atau pengaturan pengasuhan pengganti, sedangkan self-care adalah kebiasaan merawat diri yang dilakukan orang tua sendiri. Respite care memberi waktu luang, self-care mengisi waktu itu dengan hal yang memulihkan.'
    },
    {
      q: 'Apakah ada layanan respite care dari pemerintah di Indonesia?',
      a: 'Belum ada program nasional yang khusus bernama respite care. Program ATENSI Kementerian Sosial mencakup komponen perawatan sosial dan/atau pengasuhan anak serta dukungan keluarga, tetapi layanan residensialnya ditujukan sebagai alternatif terakhir. Tanyakan pilihan yang ada ke Dinas Sosial kabupaten/kota atau sentra Kemensos terdekat.'
    },
    {
      q: 'Berapa biaya respite care?',
      a: 'Tidak ada tarif standar di Indonesia. Biaya bergantung pada penyelenggara, durasi, dan kebutuhan anak, dan sebagian layanan sosial atau komunitas tidak memungut biaya. Selalu minta rincian biaya secara tertulis sebelum memulai.'
    },
    {
      q: 'Apakah respite care terbukti mengurangi stres orang tua?',
      a: 'Sejumlah penelitian menemukan respite care berkaitan dengan stres orang tua yang lebih rendah, misalnya studi Harper dkk. 2013 dan McGrane dkk. 2026. Namun tinjauan Whitmore 2016 mencatat hasil yang tidak seragam dan kualitas studi yang beragam, sehingga buktinya masih perlu diperkuat.'
    }
  ],
  related: [
    { href: 'self-care-untuk-orang-tua-anak-disabilitas', title: 'Self-Care untuk Orang Tua Anak Disabilitas', desc: 'Kebiasaan merawat diri yang mengisi waktu jeda.' },
    { href: 'mengelola-stres-orang-tua-anak-abk', title: 'Mengelola Stres Orang Tua Anak ABK', desc: 'Mengenali tanda kelelahan dan kapan mencari bantuan.' },
    { href: 'dukungan-keluarga-anak-abk', title: 'Dukungan Keluarga Anak ABK', desc: 'Membagi peran pengasuhan di dalam rumah.' },
    { href: 'yayasan-sosial-anak-berkebutuhan-khusus', title: 'Yayasan Sosial Anak Berkebutuhan Khusus', desc: 'Peran lembaga masyarakat dalam mendampingi keluarga.' }
  ],
  tags: ['RespiteCare', 'PerawatanJeda', 'OrangTuaABK', 'Pengasuh', 'DukunganKeluarga', 'YUKA'],
  sources: [
    { url: ARCH, label: 'ARCH National Respite Network and Resource Center: What is Respite? (definisi)' },
    { url: ARCH_TYPES, label: 'ARCH National Respite Network: Types of Respite (model di rumah, di luar rumah, crisis nursery, koperasi orang tua)' },
    { url: ARCH_CHOOSE, label: 'ARCH National Respite Network: How to Choose a Respite Provider' },
    { url: ARCH_PLAN, label: 'ARCH National Respite Network: Planning for Respite' },
    { url: WHITMORE, label: 'Whitmore KE. Respite Care and Stress Among Caregivers of Children With Autism Spectrum Disorder: An Integrative Review. J Pediatr Nurs. 2016;31(6):630-652' },
    { url: HARPER, label: 'Harper A, dkk. Respite care, marital quality, and stress in parents of children with autism spectrum disorders. J Autism Dev Disord. 2013;43(11):2604-16' },
    { url: CHRISTI, label: 'Christi RA, dkk. Impact of Respite Care Services Availability on Stress, Anxiety and Depression in Military Parents who have a Child on the Autism Spectrum. J Autism Dev Disord. 2023;53(11):4336-4350' },
    { url: MCGRANE, label: 'McGrane C, dkk. A group respite intervention for family caregivers of children living with special needs. J Pediatr Nurs. 2026;89:58-66' },
    { url: WOODGATE, label: 'Woodgate RL, dkk. Receipt of respite services among families of children and youth with special health care needs: A population-based cohort study. Int J Popul Data Sci. 2026;11(1):3023' },
    { url: ATENSI, label: 'Kementerian Sosial RI: Program Asistensi Rehabilitasi Sosial (ATENSI)' },
    { url: MULYAJAYA, label: 'Kementerian Sosial RI: Sentra Mulya Jaya di Jakarta' },
    { url: PERMENSOS, label: 'JDIH BPK: Permensos Nomor 7 Tahun 2021 tentang Asistensi Rehabilitasi Sosial (status: dicabut dengan Permensos Nomor 15 Tahun 2025)' },
    { url: UU_KESOS, label: 'JDIH BPK: Undang-Undang Nomor 11 Tahun 2009 tentang Kesejahteraan Sosial' }
  ]
};

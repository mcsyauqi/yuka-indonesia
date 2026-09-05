#!/usr/bin/env node
/*
 * Generate the three date-due Yuka articles from the clean deploy ref.
 * Diminta oleh Syauqi (via MinTiv)
 */
const fs = require('fs');
const path = require('path');

const SITE = 'https://www.yukaindonesia.com';
const DATE = '2026-09-05';
const author = {
  name: 'Tim Edukasi YUKA',
  url: `${SITE}/profil/bu-yupie-nurul-azkia`,
  image: `${SITE}/Team/Bu%20Yupie.webp`,
};

const link = (slug, label) => `<a href="../artikel/${slug}">${label}</a>`;
const ext = (url, label) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`;
const p = (text) => `<p>${text}</p>`;
const h2 = (id, title) => `<h2 id="${id}">${title}</h2>`;
const ul = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
const figure = (src, alt, caption) => `<figure class="article-inline-image"><img src="../${src}" alt="${alt}" loading="lazy" width="800" height="520"><figcaption>${caption}</figcaption></figure>`;

const articles = [
  {
    slug: 'aging-with-autism-tantangan-dan-solusi',
    title: 'Aging With Autism: Tantangan dan Solusi untuk Pendamping',
    description: 'Aging with autism membutuhkan perencanaan kesehatan, kemandirian, dan dukungan sosial yang berkelanjutan. Simak panduan praktis untuk keluarga dan pendamping.',
    image: 'Dokumentasi/generated-autisme-anak-bermain-sendiri-ilustrasi.webp',
    inlineImage: 'Dokumentasi/generated-difabel-inklusi-komunitas-ilustrasi.webp',
    alt: 'Ilustrasi dukungan komunitas bagi penyandang autisme di berbagai tahap kehidupan',
    sources: [
      'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd',
      'https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders',
      'https://autism.org/health-rights-inclusion-addressing-the-needs-of-aging-autistic-individuals/',
    ],
    sourceLabels: ['NIMH tentang autisme sepanjang rentang kehidupan', 'WHO tentang autisme dan dukungan berkelanjutan', 'Autism Research Institute tentang kesehatan dan inklusi'],
    toc: [
      ['makna', 'Apa Arti Aging With Autism'],
      ['tantangan', 'Tantangan yang Mungkin Muncul'],
      ['kesehatan', 'Menyiapkan Dukungan Kesehatan'],
      ['mandiri', 'Menjaga Kemandirian dan Rutinitas'],
      ['sosial', 'Membangun Relasi dan Komunitas'],
      ['rencana', 'Membuat Rencana Masa Depan'],
      ['peran', 'Peran Keluarga, Sekolah, dan Yayasan'],
      ['faq', 'FAQ Aging With Autism'],
    ],
    sections: [
      ['makna', 'Apa Arti Aging With Autism', [
        'Aging with autism berarti menjalani proses bertambah usia sebagai individu autistik, mulai dari masa remaja, dewasa muda, dewasa madya, sampai lanjut usia. Istilah ini tidak menunjuk satu bentuk kondisi yang sama untuk semua orang. Kebutuhan setiap individu dipengaruhi oleh kemampuan komunikasi, kesehatan fisik, dukungan keluarga, lingkungan, pekerjaan, dan kesempatan berpartisipasi di masyarakat.',
        `Pembahasan ini penting karena banyak layanan masih berfokus pada anak, padahal dukungan tidak berhenti ketika seseorang lulus sekolah. ${ext('https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd', 'NIMH menjelaskan bahwa kebutuhan dukungan dapat berubah dari masa kanak-kanak menuju dewasa')} dalam pendidikan, pekerjaan, kesehatan, dan kehidupan sosial. Pendamping perlu melihat perubahan kebutuhan itu sejak dini, bukan menunggu sampai keluarga mengalami krisis.`,
        `Di YUKA, kami memandang anak dan orang dewasa autistik sebagai pribadi yang memiliki pilihan, minat, dan kemampuan untuk berkembang. Prinsip ini sejalan dengan ${link('pendidikan-inklusi', 'pendidikan inklusi')} dan ${link('inklusi-sosial', 'inklusi sosial')}, yaitu menyediakan dukungan agar seseorang dapat terlibat, bukan memaksa semua orang mengikuti satu pola.`,
        `Orang tua dapat mulai dengan membuat peta sederhana: kemampuan yang sudah kuat, aktivitas yang disukai, situasi yang memicu stres, cara komunikasi yang paling nyaman, serta jenis bantuan yang benar-benar diperlukan. Peta ini dapat diperbarui setiap beberapa bulan bersama anak, guru, terapis, atau pendamping yang dipercaya.`,
        `Peta tersebut sebaiknya berisi contoh yang bisa diamati, bukan label umum seperti mandiri atau sulit diatur. Tulis misalnya mampu menyiapkan pakaian dengan urutan gambar, membutuhkan pengingat untuk minum, atau lebih tenang ketika perubahan diumumkan sehari sebelumnya. Catatan konkret membuat keluarga lebih mudah melihat kemajuan dan memilih dukungan yang tepat.`,
        `Ajak individu autistik ikut menentukan bentuk bantuan yang digunakan. Jika ia sudah mampu menyampaikan pilihan, tanyakan cara yang paling nyaman. Jika ia membutuhkan dukungan komunikasi, sediakan beberapa cara untuk menjawab. Keterlibatan ini membantu rencana terasa sebagai milik bersama, bukan aturan yang sepenuhnya dibuat oleh orang lain.`,
      ]],
      ['tantangan', 'Tantangan yang Mungkin Muncul', [
        `Tantangan pertama adalah perubahan rutinitas dan peran. Peralihan dari sekolah ke pelatihan kerja, dari tinggal bersama orang tua ke hunian yang lebih mandiri, atau dari bekerja ke masa pensiun dapat mengurangi struktur harian. Individu yang sebelumnya terbantu oleh jadwal tetap bisa merasa bingung ketika jadwal berubah mendadak. Pendekatan ${link('transisi-anak-abk-dari-tk-ke-sd', 'perencanaan transisi anak berkebutuhan khusus')} dapat diadaptasi untuk tahap kehidupan yang lebih lanjut.`,
        `Tantangan kedua berkaitan dengan kesehatan. Keluhan tidur, kecemasan, nyeri, perubahan berat badan, gangguan pendengaran, atau efek samping obat dapat terlihat sebagai perubahan perilaku. Karena itu, keluarga sebaiknya mencatat pola perubahan dan menyampaikannya kepada tenaga kesehatan. Jangan langsung menganggap semua perubahan sebagai bagian dari autisme.`,
        `Tantangan ketiga adalah berkurangnya jejaring sosial. Teman sekolah dapat berpindah, kegiatan komunitas berhenti, atau anggota keluarga yang selama ini membantu menjadi tidak mampu mendampingi. ${ext('https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders', 'WHO menekankan bahwa kebutuhan dan kemampuan individu autistik dapat berubah seiring waktu')} sehingga dukungan sosial dan layanan perlu direncanakan secara berkelanjutan.`,
        `Tantangan keempat adalah risiko keputusan dibuat tanpa melibatkan individu. Pendamping mungkin bermaksud membantu, tetapi keputusan sepihak dapat membuat orang autistik kehilangan rasa kendali. Gunakan bahasa yang bisa dipahami, berikan pilihan terbatas, dan beri waktu untuk menjawab. Jika komunikasi lisan sulit, gunakan tulisan, gambar, benda nyata, atau bantuan komunikasi lain.`,
      ]],
      ['kesehatan', 'Menyiapkan Dukungan Kesehatan', [
        'Dukungan kesehatan yang baik dimulai dari catatan kesehatan yang mudah dibaca. Simpan daftar obat, alergi, riwayat pemeriksaan, cara menenangkan diri, kebutuhan sensorik, dan orang yang boleh dihubungi. Buat versi singkat yang dapat dibawa ketika berobat atau melakukan pemeriksaan baru.',
        `Kunjungan kesehatan perlu dipersiapkan secara konkret. Keluarga dapat menunjukkan foto ruang pemeriksaan, menjelaskan urutan kegiatan, melakukan permainan peran, dan menyepakati sinyal berhenti. Jika individu membutuhkan waktu lebih lama untuk memproses pertanyaan, sampaikan hal itu kepada petugas. ${link('intervensi-dini', 'intervensi yang terencana')} bukan hanya untuk anak kecil, tetapi prinsip penyesuaian lingkungan tetap bermanfaat sepanjang hidup.`,
        `Jangan membuat diagnosis baru dari artikel internet. Artikel ${link('autisme-adalah', 'tentang autisme')} dapat membantu memahami istilah, tetapi penilaian kondisi kesehatan tetap membutuhkan tenaga profesional. Untuk keluhan yang mendesak, gunakan layanan kesehatan yang sesuai dan jelaskan perubahan dari pola biasanya.`,
        `Kesehatan mental juga perlu diperhatikan. Perubahan tidur, menarik diri, ledakan emosi, atau hilangnya minat dapat menjadi tanda stres, kecemasan, depresi, rasa sakit, atau masalah lain. Catatan harian sederhana membantu tenaga profesional melihat kapan gejala muncul dan dukungan apa yang sudah dicoba.`,
      ]],
      ['mandiri', 'Menjaga Kemandirian dan Rutinitas', [
        'Kemandirian tidak harus berarti melakukan semuanya sendirian. Kemandirian dapat berupa mampu memilih pakaian, meminta bantuan, mengatur sebagian uang, menyiapkan makanan sederhana, atau memberi tahu ketika merasa tidak nyaman. Tentukan target berdasarkan kemampuan dan keamanan, bukan perbandingan dengan orang lain.',
        `Rutinitas dapat dipecah menjadi langkah kecil yang terlihat. Gunakan daftar cek, foto, timer, atau ${link('cara-membuat-jadwal-visual-untuk-anak-autis', 'jadwal visual')} bila sesuai. Untuk orang dewasa, tampilan jadwal sebaiknya tidak kekanak-kanakan. Pilih desain yang sederhana, warna yang tidak menyilaukan, dan kata-kata yang memang dipakai sehari-hari.`,
        `Ajarkan keterampilan melalui demonstrasi, latihan berulang, dan umpan balik yang jelas. Bila targetnya mencuci pakaian, mulai dari memisahkan warna, memasukkan pakaian, memilih program, menjemur, lalu melipat. Beri kesempatan melakukan bagian yang mampu dilakukan sebelum pendamping mengambil alih.`,
        `Keselamatan menjadi batas utama. Latih cara mengenali bahaya, meminta pertolongan, membawa identitas, menggunakan transportasi yang sesuai, dan menghadapi perubahan rute. Program ${link('program-pembelajaran-individual', 'pembelajaran individual')} dapat memasukkan target kemandirian yang relevan dengan kehidupan nyata.`,
      ]],
      ['sosial', 'Membangun Relasi dan Komunitas', [
        `Relasi sosial yang sehat tidak harus luas. Satu atau dua orang yang memahami cara komunikasi individu dapat menjadi dukungan penting. Kegiatan dapat dimulai dari aktivitas terstruktur seperti kelas keterampilan, klub minat, olahraga ringan, kegiatan keagamaan, atau kerja sukarela dengan durasi yang dapat diprediksi.`,
        `Komunitas perlu belajar memberi ruang, bukan sekadar meminta individu autistik beradaptasi. Sediakan informasi tertulis, tempat tenang, jadwal yang jelas, dan pilihan untuk beristirahat. ${link('peran-orang-tua-pendidikan-inklusi', 'peran keluarga dalam pendidikan inklusi')} juga mencakup membangun jembatan antara rumah, sekolah, layanan, dan masyarakat.`,
        `Hindari mengukur kualitas hidup hanya dari kemampuan bersosialisasi menurut standar umum. Kualitas relasi terlihat dari rasa aman, dihargai, dan mampu menyampaikan batasan. Ajarkan consent, privasi, dan cara mengatakan tidak, termasuk kepada orang dewasa yang selama ini membantu.`,
        `Yayasan dan sekolah dapat membuat kegiatan lintas usia yang berfokus pada kemampuan. Pengalaman mengikuti ${link('wisata-edukasi-anak-berkebutuhan-khusus', 'kegiatan edukasi yang terencana')} dapat menjadi contoh cara menyiapkan rute, jeda, pendamping, dan pilihan aktivitas tanpa mempermalukan peserta.`,
      ]],
      ['rencana', 'Membuat Rencana Masa Depan', [
        `Rencana masa depan sebaiknya dibuat ketika kondisi relatif tenang. Bahas tempat tinggal, kesehatan, pekerjaan atau kegiatan bermakna, pengelolaan uang, hubungan sosial, perlindungan dari kekerasan, serta siapa yang dapat mengambil keputusan ketika dukungan utama tidak tersedia. Tulis hasil diskusi dalam bahasa sederhana dan simpan di tempat yang aman.`,
        `Gunakan pendekatan person centered planning: mulai dari keinginan dan kekuatan individu, lalu turunkan menjadi dukungan yang diperlukan. ${link('person-centered-planning-disabilitas', 'Perencanaan berpusat pada individu')} membantu keluarga menghindari rencana yang hanya memuat jadwal layanan tanpa menggambarkan kehidupan yang ingin dijalani.`,
        `Buat daftar kontak berlapis. Lapisan pertama adalah orang yang tinggal serumah, lapisan kedua adalah keluarga atau teman, dan lapisan ketiga adalah tenaga profesional, sekolah, yayasan, atau layanan darurat. Perbarui daftar jika nomor telepon, alamat, atau kondisi dukungan berubah.`,
        `Dokumen legal dan finansial perlu dibahas sesuai aturan yang berlaku dan dengan penasihat yang kompeten. Jangan menyalin format dari internet tanpa memahami dampaknya. Fokus awalnya adalah memastikan dokumen identitas, rekam kesehatan, informasi kontak, dan instruksi dukungan mudah ditemukan ketika diperlukan.`,
      ]],
      ['peran', 'Peran Keluarga, Sekolah, dan Yayasan', [
        `Keluarga memiliki pengetahuan mendalam tentang kebiasaan dan kebutuhan individu, tetapi keluarga juga memerlukan dukungan agar tidak menjadi satu-satunya sistem penopang. Sekolah, tempat kerja, terapis, dan yayasan perlu berbagi informasi yang relevan dengan persetujuan individu dan keluarga, tanpa menyebarkan data pribadi secara berlebihan.`,
        `Sekolah dapat menyiapkan keterampilan transisi sejak remaja: mengenali minat, mencoba tugas kerja, berkomunikasi dengan atasan, mengikuti jadwal, dan meminta akomodasi. Materinya dapat disesuaikan dengan profil belajar, seperti pendekatan pada ${link('strategi-mengajar-anak-adhd-di-sekolah', 'strategi pengajaran yang terstruktur')}.`,
        `Yayasan dapat menjadi penghubung antara keluarga dan layanan. Bentuknya bukan hanya terapi, tetapi juga edukasi orang tua, pelatihan keterampilan, kelompok dukungan, dan rujukan. ${link('yayasan-disabilitas', 'Cara memahami peran yayasan disabilitas')} membantu keluarga menilai apakah sebuah layanan transparan, aman, dan sesuai kebutuhan.`,
        `Tujuan akhirnya bukan membuat individu tampak sama dengan orang lain. Tujuannya adalah membantu individu menjalani hidup yang aman, bermakna, dan memiliki kesempatan mengambil keputusan. Evaluasi dukungan dilakukan berkala karena kebutuhan seseorang dapat berubah seiring usia, kesehatan, dan lingkungan.`,
      ]],
    ],
    faq: [
      ['Apa yang dimaksud aging with autism?', 'Aging with autism adalah proses bertambah usia sebagai individu autistik, dengan kebutuhan dukungan yang dapat berubah dari masa remaja sampai lanjut usia. Fokusnya mencakup kesehatan, kemandirian, komunikasi, relasi, dan partisipasi di masyarakat.'],
      ['Apakah autisme berubah ketika seseorang bertambah usia?', 'Autisme bukan kondisi yang hilang karena usia. Namun cara kebutuhan terlihat dapat berubah karena lingkungan, kesehatan, pengalaman, dan tuntutan hidup ikut berubah. Dukungan sebaiknya dievaluasi secara berkala.'],
      ['Bagaimana keluarga menyiapkan masa depan orang autistik?', 'Mulailah dengan membicarakan keinginan individu, keterampilan yang sudah ada, kebutuhan bantuan, pilihan tempat tinggal atau kegiatan, kontak pendukung, dan dokumen kesehatan. Libatkan individu dalam keputusan sejauh mungkin.'],
      ['Apakah orang autistik bisa hidup mandiri?', 'Sebagian orang dapat hidup dengan sedikit dukungan, sementara yang lain membutuhkan bantuan lebih intensif. Mandiri berarti memiliki kendali dan dukungan yang sesuai, bukan wajib melakukan semua hal sendirian.'],
      ['Kapan perlu meminta bantuan profesional?', 'Minta bantuan ketika terjadi perubahan kesehatan, tidur, emosi, komunikasi, keselamatan, atau kemampuan harian yang menetap dan mengganggu. Gunakan tenaga profesional yang sesuai dan jangan menjadikan artikel sebagai diagnosis.'],
    ],
  },
  {
    slug: 'aplikasi-komunikasi-aac-terbaik-untuk-anak',
    title: 'Aplikasi Komunikasi AAC Terbaik untuk Anak: Panduan Memilih',
    description: 'Aplikasi komunikasi AAC membantu anak menyampaikan kebutuhan, pilihan, dan gagasan ketika bicara belum cukup. Pelajari cara memilih dan mengenalkannya secara aman.',
    image: 'Dokumentasi/jadwal-visual-anak-autis-hero.webp',
    inlineImage: 'Dokumentasi/jadwal-visual-anak-autis-kartu.webp',
    alt: 'Kartu visual yang membantu anak memilih aktivitas dan menyampaikan kebutuhan',
    sources: [
      'https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/',
      'https://www.asha.org/practice/early-intervention-provider-support/augmentative-and-alternative-communication-in-early-intervention/',
      'https://www.nidcd.nih.gov/health/autism-spectrum-disorder-communication-problems-children',
    ],
    sourceLabels: ['ASHA Practice Portal tentang AAC', 'ASHA tentang AAC pada intervensi dini', 'NIDCD tentang autisme dan masalah komunikasi'],
    toc: [
      ['pengertian', 'Apa Itu AAC dan Aplikasi Komunikasi'],
      ['kriteria', 'Kriteria Aplikasi AAC yang Baik'],
      ['jenis', 'Jenis Aplikasi dan Metode Komunikasi'],
      ['penerapan', 'Cara Mengenalkan AAC di Rumah'],
      ['sekolah', 'Penggunaan AAC di Sekolah'],
      ['kesalahan', 'Kesalahan yang Perlu Dihindari'],
      ['evaluasi', 'Evaluasi Kemajuan Komunikasi'],
      ['praktik', 'Contoh Latihan Komunikasi yang Aman'],
      ['faq', 'FAQ Aplikasi AAC'],
    ],
    sections: [
      ['pengertian', 'Apa Itu AAC dan Aplikasi Komunikasi', [
        `AAC adalah singkatan dari augmentative and alternative communication, yaitu cara berkomunikasi yang menambah atau menggantikan bicara ketika seseorang mengalami kesulitan menyampaikan pesan secara lisan. ${ext('https://www.asha.org/practice-portal/professional-issues/augmentative-and-alternative-communication/', 'ASHA menjelaskan AAC sebagai praktik yang melengkapi atau menggantikan komunikasi lisan')} dan bentuknya dapat berupa gestur, tulisan, gambar, papan komunikasi, atau perangkat elektronik.`,
        `Aplikasi komunikasi AAC terbaik bukan aplikasi yang paling mahal atau memiliki simbol paling banyak. Pilihan terbaik adalah yang dapat dipakai anak untuk menyampaikan pesan nyata kepada orang yang nyata di berbagai tempat. Anak mungkin perlu meminta minum, menolak, memilih permainan, memanggil orang, menceritakan pengalaman, atau menjawab pertanyaan.`,
        `Penggunaan AAC tidak berarti keluarga menyerah pada kemampuan bicara. ${ext('https://www.asha.org/practice/early-intervention-provider-support/augmentative-and-alternative-communication-in-early-intervention/', 'ASHA mencatat bahwa AAC dapat mendukung perkembangan bahasa lisan')} pada anak tertentu. Karena itu, aplikasi dipakai sebagai jembatan komunikasi, bukan sebagai ujian untuk memaksa anak berbicara.`,
        `Sebelum mengunduh aplikasi, kenali profil komunikasi anak. Apakah anak memahami foto, gambar sederhana, tulisan, atau simbol? Apakah ia mampu menyentuh ikon dengan tepat? Apakah ia lebih mudah memilih dari dua pilihan? Jawaban ini membantu keluarga memilih sistem yang realistis dan dapat dikembangkan. ${ext('https://www.nidcd.nih.gov/health/autism-spectrum-disorder-communication-problems-children', 'NIDCD juga membahas hubungan autisme dengan kebutuhan dukungan komunikasi')} sehingga keluarga dapat menggabungkan informasi klinis dengan observasi sehari-hari.`,
        `Perhatikan juga lingkungan tempat aplikasi akan dipakai. Anak mungkin membutuhkan simbol berbeda saat berada di rumah, kelas, kendaraan, atau ruang terapi. Namun, sistem dasarnya tetap perlu konsisten agar orang dewasa tidak mengganti makna ikon. Buat daftar kecil berisi kata inti yang selalu tersedia dan kata khusus yang disesuaikan dengan kegiatan.`,
        `Jangan mengukur keberhasilan hanya dari seberapa cepat anak menekan ikon. Ukur apakah pesan dipahami, apakah anak dapat memperbaiki kesalahpahaman, apakah orang dewasa menunggu respons, dan apakah anak merasa aman untuk menolak. Komunikasi yang lebih efektif dapat terlihat sebagai berkurangnya frustrasi atau meningkatnya partisipasi, bukan hanya bertambahnya jumlah simbol.`,
      ]],
      ['kriteria', 'Kriteria Aplikasi AAC yang Baik', [
        'Pertama, aplikasi harus menyediakan kosakata yang berguna dalam kehidupan sehari-hari. Selain kata benda seperti makanan dan mainan, sediakan kata inti seperti mau, tidak, lagi, selesai, bantu, saya, kamu, di sini, dan bagaimana. Kosakata inti membuat anak dapat membentuk lebih banyak pesan.',
        'Kedua, tampilan harus dapat disesuaikan. Periksa ukuran tombol, jumlah ikon per halaman, warna, kontras, suara, dan kemampuan menambah foto. Anak yang baru mulai dapat memakai tampilan sederhana, lalu berkembang menuju kombinasi kata yang lebih kompleks.',
        'Ketiga, aksesnya harus stabil. Aplikasi sebaiknya dapat dibuka tanpa proses rumit, tidak bergantung pada internet untuk fungsi dasar, dan memiliki cadangan data. Jika perangkat rusak, keluarga perlu memiliki papan komunikasi cetak atau cara cadangan lain.',
        `Keempat, perhatikan privasi. Baca kebijakan aplikasi, cek izin mikrofon atau kamera, dan hindari mengunggah data pribadi anak tanpa alasan jelas. Pendamping juga perlu menyepakati ${link('peran-orang-tua-pendidikan-inklusi', 'peran keluarga dan sekolah')} jika aplikasi dipakai bersama oleh sekolah atau terapis.`,
      ]],
      ['jenis', 'Jenis Aplikasi dan Metode Komunikasi', [
        `Aplikasi berbasis gambar cocok untuk anak yang memahami hubungan antara simbol dan benda atau aktivitas. Foto nyata dapat membantu pada tahap awal, sedangkan simbol yang lebih abstrak dapat diperkenalkan secara bertahap. Jangan menganggap satu jenis simbol cocok untuk semua anak.`,
        `Aplikasi berbasis papan kata menampilkan banyak kosakata yang dapat digabungkan. Sistem ini mendukung pesan seperti saya mau bermain, bukan hanya memilih satu benda. Anak membutuhkan contoh dari orang dewasa agar memahami cara navigasinya.`,
        `Text to speech mengubah tulisan atau pilihan simbol menjadi suara. Fitur suara dapat membantu anak berkomunikasi dengan orang yang belum terbiasa membaca gestur. Namun suara sintetis bukan ukuran keberhasilan. Keberhasilan terlihat dari pesan dipahami dan anak memiliki kesempatan mengendalikan percakapan.`,
        `AAC juga dapat dipadukan dengan bahasa tubuh, ${link('bahasa-isyarat', 'bahasa isyarat')}, ${link('bisindo-adalah', 'BISINDO')}, tulisan, dan bicara. Sistem multimodal memberi lebih banyak pilihan saat situasi berubah, misalnya ketika tangan kotor, baterai habis, atau lingkungan terlalu bising. Baca juga ${link('bahasa-tuna-rungu', 'bahasa untuk komunikasi tunarungu')} dan ${link('asesmen-abk', 'asesmen kebutuhan komunikasi ABK')} bila tersedia pada rencana dukungan anak.`,
      ]],
      ['penerapan', 'Cara Mengenalkan AAC di Rumah', [
        'Mulai dari situasi yang memiliki tujuan komunikasi jelas. Saat makan, letakkan perangkat di dekat anak dan gunakan kata yang relevan. Saat bermain, modelkan kata seperti lagi, buka, giliran, dan selesai. Jangan menunggu anak meminta terlebih dahulu baru memberikan aplikasi.',
        `Orang dewasa perlu memodelkan cara memakai AAC. Tunjukkan simbol sambil mengucapkan kata dan melakukan aktivitas. Jika anak belum meniru, tetap berikan contoh tanpa menuntut jawaban setiap kali. Pendekatan ini lebih ramah daripada menguji anak dengan pertanyaan berulang.`,
        `Berikan waktu tunggu. Anak mungkin memerlukan beberapa detik untuk melihat layar, memilih halaman, dan menekan tombol. Bila pendamping terlalu cepat mengambil alih, anak kehilangan kesempatan belajar. Bantuan dapat diberikan bertahap, dari isyarat, menunjuk, sampai bantuan fisik yang aman dan sesuai arahan profesional.`,
        `Gunakan jadwal yang konsisten. ${link('jadwal-visual-anak-autis', 'Jadwal visual anak autis')} dapat memberitahu kapan aplikasi digunakan, kapan perangkat diisi daya, dan kapan komunikasi berpindah ke aktivitas lain. Buat perangkat terasa sebagai alat komunikasi, bukan hadiah yang bisa dicabut setiap kali anak dianggap tidak patuh.`,
      ]],
      ['sekolah', 'Penggunaan AAC di Sekolah', [
        `Sekolah perlu menyepakati cara yang sama untuk merespons pesan anak. Guru, pendamping, dan teman sekelas tidak harus menjadi ahli teknologi, tetapi mereka perlu tahu lokasi kosakata penting, cara memberi waktu tunggu, dan cara mengonfirmasi pesan yang belum jelas.`,
        `AAC sebaiknya masuk ke kegiatan akademik, bukan hanya waktu terapi. Anak dapat memakai aplikasi untuk menjawab pilihan, meminta alat tulis, menyampaikan pendapat tentang cerita, atau memberi tahu bahwa ia perlu istirahat. ${link('pendidikan-inklusi', 'Pendidikan inklusi')} berarti akses komunikasi hadir dalam proses belajar.`,
        `Buat rencana individual yang mencatat tujuan komunikasi, kosakata prioritas, cara akses, dukungan yang dibutuhkan, dan indikator keberhasilan. ${link('program-pembelajaran-individual', 'Program pembelajaran individual')} dapat menjadi tempat tim menyusun target bersama keluarga dan anak.`,
        `Teman sebaya dapat dilibatkan dengan bahasa sederhana. Ajarkan bahwa perangkat atau papan komunikasi adalah suara tambahan bagi temannya, bukan mainan. Selalu minta izin sebelum menyentuh perangkat milik anak dan hormati pesan yang disampaikan.`,
      ]],
      ['kesalahan', 'Kesalahan yang Perlu Dihindari', [
        `Kesalahan pertama adalah memilih aplikasi berdasarkan daftar rekomendasi tanpa menguji kebutuhan anak. Aplikasi yang populer bisa saja terlalu rumit, tidak mendukung bahasa yang dipakai keluarga, atau sulit diakses secara motorik. Mintalah uji coba jika tersedia.`,
        `Kesalahan kedua adalah menyembunyikan perangkat agar anak terdorong bicara. Strategi ini dapat membuat anak kehilangan cara menyampaikan kebutuhan dan meningkatkan frustrasi. Gunakan AAC bersama komunikasi lisan, gestur, atau tulisan sesuai kemampuan dan situasi.`,
        `Kesalahan ketiga adalah hanya menyediakan kata permintaan. Anak juga perlu kata untuk menolak, berkomentar, bertanya, menyapa, bercanda, dan menceritakan perasaan. Komunikasi yang lengkap memberi ruang bagi kepribadian, bukan hanya kebutuhan dasar.`,
        `Kesalahan keempat adalah menganggap ikon yang dipilih selalu mewakili maksud yang sama. Konfirmasi dengan tenang, periksa konteks, dan ajarkan cara memperbaiki pesan. Dukungan ${link('terapi-wicara', 'terapi wicara')} dapat membantu keluarga menilai strategi komunikasi yang sesuai.`,
      ]],
      ['evaluasi', 'Evaluasi Kemajuan Komunikasi', [
        'Catat fungsi komunikasi, bukan hanya jumlah ikon yang ditekan. Apakah anak lebih sering memulai interaksi? Apakah ia dapat menolak dengan aman? Apakah pesan dipahami oleh orang di luar keluarga? Apakah ia memakai sistem di rumah, sekolah, dan tempat umum?',
        `Evaluasi juga perlu melihat beban pendamping. Jika halaman terlalu dalam, tombol kecil, atau perangkat sering gagal, sistem perlu disederhanakan. Kolaborasikan temuan dengan terapis, guru, dan keluarga. ${link('perbedaan-terapi-okupasi-dan-terapi-wicara', 'Perbedaan peran terapi okupasi dan terapi wicara')} dapat membantu menentukan siapa yang perlu dilibatkan.`,
        `Perbarui kosakata berdasarkan kehidupan anak. Tambahkan nama teman, kegiatan baru, tempat yang sering dikunjungi, dan kata yang dipakai di kelas. Hapus atau pindahkan ikon yang jarang digunakan agar anak tidak harus mencari terlalu lama.`,
        `Tujuan akhir AAC adalah akses komunikasi yang bermartabat. Ukur apakah anak merasa lebih dipahami, memiliki pilihan, dan dapat menyampaikan batasan. Jangan mengurangi nilai sistem hanya karena anak tetap memakai gestur atau bicara secara terbatas.`,
      ]],
      ['praktik', 'Contoh Latihan Komunikasi yang Aman', [
        `Latihan pertama dapat dilakukan saat memilih aktivitas. Tawarkan dua pilihan yang benar-benar tersedia, lalu tampilkan kedua simbolnya. Setelah anak memilih, tunjukkan kembali simbol yang dipakai sambil menyebutkan pilihan tersebut. Cara ini menghubungkan pesan, pilihan, dan akibat tanpa menjadikan komunikasi sebagai tes.`,
        `Latihan kedua adalah memperbaiki pesan yang belum dipahami. Jika anak memilih simbol yang tidak sesuai konteks, jangan langsung mengatakan salah. Ulangi pesan dengan pertanyaan konfirmasi seperti kamu mau yang ini atau yang itu. Sediakan tombol tidak, bukan itu, ulangi, dan bantu agar anak dapat mengoreksi orang dewasa.`,
        `Latihan ketiga dilakukan di luar rumah dengan tingkat tantangan bertahap. Mulai dari halaman, lalu toko yang tenang, kemudian tempat yang lebih ramai. Bawa perangkat cadangan, kartu identitas, dan informasi singkat untuk orang lain. Tujuan latihan adalah memperluas akses komunikasi, bukan memaksa anak berlama-lama di tempat yang membuatnya kewalahan.`,
      ]],
    ],
    faq: [
      ['Apa itu aplikasi komunikasi AAC?', 'Aplikasi komunikasi AAC adalah perangkat lunak yang membantu seseorang menyampaikan pesan melalui gambar, simbol, tulisan, atau suara ketika bicara belum cukup atau sulit dipahami.'],
      ['Apakah AAC menghambat anak untuk berbicara?', 'Tidak selalu. AAC dapat menjadi dukungan untuk perkembangan bahasa dan membantu anak tetap berkomunikasi sambil kemampuan bicara berkembang. Penggunaan sebaiknya disesuaikan dengan asesmen dan kebutuhan anak.'],
      ['Bagaimana memilih aplikasi AAC untuk anak?', 'Pilih berdasarkan kemampuan akses, bahasa keluarga, kosakata yang dibutuhkan, kemudahan dipakai lintas tempat, fitur cadangan, penyesuaian tampilan, dan privasi data. Uji coba sebelum berlangganan bila memungkinkan.'],
      ['Apakah aplikasi AAC harus dipakai sepanjang hari?', 'Tidak ada aturan tunggal. Aplikasi sebaiknya tersedia ketika anak membutuhkannya, di rumah, sekolah, dan tempat lain. Sistem cadangan seperti papan gambar atau tulisan juga penting.'],
      ['Siapa yang membantu menyiapkan AAC?', 'Terapis wicara sering menjadi anggota utama tim, lalu dapat berkolaborasi dengan terapis okupasi, guru, keluarga, dan anak. Keputusan terbaik dibuat bersama berdasarkan kebutuhan nyata.'],
    ],
  },
  {
    slug: 'kewirausahaan-anak-muda-disabilitas',
    title: 'Kewirausahaan Anak Muda Disabilitas: Ide dan Langkah Memulai',
    description: 'Kewirausahaan anak muda disabilitas perlu dibangun dari minat, aksesibilitas, keterampilan, dan dukungan yang nyata. Ini panduan memulai usaha secara bertahap dan aman.',
    image: 'Dokumentasi/generated-difabel-inklusi-komunitas-ilustrasi.webp',
    inlineImage: 'Dokumentasi/generated-tunagrahita-belajar-life-skill-ilustrasi.webp',
    alt: 'Ilustrasi pelatihan keterampilan hidup dan kerja bagi anak muda dengan disabilitas',
    sources: [
      'https://www.ilo.org/topics-and-sectors/disability-and-work',
      'https://www.ilo.org/sites/default/files/wcmsp5/groups/public/@ed_emp/@ifp_skills/documents/publication/wcms_407645.pdf',
      'https://www.who.int/about/policies/disability',
    ],
    sourceLabels: ['ILO tentang disabilitas dan pekerjaan', 'ILO tentang pengembangan keterampilan dan kewirausahaan inklusif', 'WHO Policy on Disability'],
    toc: [
      ['makna', 'Mengapa Kewirausahaan Inklusif Penting'],
      ['kekuatan', 'Menemukan Kekuatan dan Minat'],
      ['ide', 'Ide Usaha yang Bisa Dikembangkan'],
      ['rencana', 'Membuat Rencana Usaha Sederhana'],
      ['akses', 'Menyiapkan Aksesibilitas dan Dukungan'],
      ['keuangan', 'Mengelola Uang dan Risiko'],
      ['pasar', 'Membangun Pasar dan Jejaring'],
      ['30hari', 'Rencana Uji Coba 30 Hari'],
      ['faq', 'FAQ Kewirausahaan Disabilitas'],
    ],
    sections: [
      ['makna', 'Mengapa Kewirausahaan Inklusif Penting', [
        `Kewirausahaan anak muda disabilitas adalah kegiatan membangun usaha dengan mempertimbangkan kemampuan, dukungan, aksesibilitas, dan pilihan anak muda yang menjalankannya. Wirausaha tidak harus berarti bekerja sendirian tanpa bantuan. Yang penting, individu memiliki peran nyata dalam memilih produk, proses, pelanggan, dan arah pengembangan usaha.`,
        `Pekerjaan dan usaha yang layak dapat memperkuat kemandirian, kepercayaan diri, serta partisipasi sosial. ${ext('https://www.ilo.org/topics-and-sectors/disability-and-work', 'International Labour Organization menegaskan bahwa standar kerja berlaku bagi pekerja dengan disabilitas')} dan mendorong inklusi di pasar kerja. Jalur wirausaha menjadi salah satu pilihan, bukan kewajiban bagi semua orang.`,
        `Keluarga sering memulai dari pertanyaan praktis: apa yang bisa dibuat, siapa yang akan membeli, bagaimana menjaga kualitas, dan bagaimana memastikan kegiatan tidak terlalu melelahkan. Pertanyaan ini penting, tetapi jangan sampai menggantikan suara anak muda. Tanyakan juga kegiatan apa yang disukai dan dukungan seperti apa yang membuatnya nyaman. Baca ${link('disabilitas-adalah', 'pengertian disabilitas')} dan ${link('penyandang-disabilitas', 'hak penyandang disabilitas')} agar pembahasan usaha tidak berhenti pada belas kasihan, lalu hubungkan dengan ${link('inklusi-sosial', 'praktik inklusi sosial')} dalam komunitas.`,
        `${link('pendidikan-inklusi', 'Pendidikan inklusi')} dapat menyiapkan fondasi melalui keterampilan komunikasi, pemecahan masalah, kerja sama, dan kemandirian. Setelah itu, pengalaman praktik kecil membantu anak muda memahami ritme kerja dan menemukan cara kerja yang cocok.`,
        `Karena itu, target awal tidak harus langsung berupa omzet besar. Target yang lebih sehat dapat berupa mampu mengikuti urutan kerja, berani menyampaikan pilihan, menyelesaikan satu tugas dengan jeda, atau memahami bahwa pelanggan memiliki kebutuhan yang berbeda. Setelah fondasi tersebut kuat, keluarga dan pendamping dapat menambah target penjualan secara bertahap.`,
        `Kewirausahaan yang inklusif juga berarti membagi peran secara adil. Anak muda tetap dilibatkan sebagai pemilik gagasan dan pelaksana sesuai kemampuannya, sementara keluarga membantu bagian yang memang membutuhkan dukungan. Hindari membuat orang lain menjalankan seluruh usaha lalu menggunakan nama anak muda hanya untuk promosi.`,
      ]],
      ['kekuatan', 'Menemukan Kekuatan dan Minat', [
        'Mulailah dengan observasi, bukan asumsi. Catat aktivitas yang membuat anak muda fokus, berinisiatif, dan mau mengulang latihan. Perhatikan apakah ia suka merawat tanaman, memasak, menggambar, mengemas barang, menggunakan gawai, merapikan benda, atau berinteraksi dengan pelanggan.',
        `Pisahkan keterampilan teknis dan dukungan yang diperlukan. Seseorang mungkin mampu membuat makanan, tetapi memerlukan bantuan untuk menimbang bahan atau membaca pesanan. Orang lain mungkin mampu desain digital, tetapi membutuhkan jadwal kerja yang tenang. ${link('program-pembelajaran-individual', 'Program pembelajaran individual')} dapat membantu tim menuliskan target keterampilan secara konkret.`,
        `Gunakan uji coba singkat dengan risiko rendah. Beri satu tugas pada waktu tertentu, lalu evaluasi kualitas, kecepatan, stamina, minat, dan cara menerima umpan balik. Hasil uji coba bukan label tetap. Jika metode tidak cocok, ubah cara memberi instruksi atau cari peran lain.`,
        `Rencana yang baik juga mencatat kebutuhan sensorik dan komunikasi. Lingkungan ramai, bau tertentu, cahaya terang, atau instruksi yang terlalu cepat dapat menghambat performa. Penyesuaian kecil sering lebih efektif daripada meminta anak muda bekerja lebih keras.`,
      ]],
      ['ide', 'Ide Usaha yang Bisa Dikembangkan', [
        `Ide usaha harus disesuaikan dengan pasar lokal dan kemampuan produksi. Contohnya makanan ringan dengan sistem pre-order, tanaman atau bibit, kerajinan sederhana, hampers, jasa pengemasan, ilustrasi digital, foto produk, administrasi ringan, atau penjualan produk titip. Tidak semua ide harus dijalankan sekaligus.`,
        `Usaha berbasis makanan perlu memperhatikan resep konsisten, kebersihan, kemasan, masa simpan, dan aturan yang berlaku. Anak muda dapat mengambil peran memilih label, menyiapkan bahan, atau mengemas, sementara bagian yang membutuhkan izin atau penanganan khusus didampingi orang yang kompeten.`,
        `Usaha digital dapat dimulai dari katalog sederhana. Anak muda dapat membantu membuat foto, memilih warna, menulis deskripsi dengan template, atau mengunggah konten. Pendamping perlu menjaga keamanan akun, data pelanggan, dan komunikasi transaksi.`,
        `Usaha jasa dapat menggunakan paket yang jelas. Misalnya, paket pengemasan 10 produk, paket desain satu poster, atau paket perawatan tanaman mingguan. Batas layanan memudahkan menghitung waktu dan menghindari janji yang tidak sanggup dipenuhi. ${link('money-management-untuk-penyandang-disabilitas', 'Pengelolaan uang untuk penyandang disabilitas')} dapat dijadikan bacaan pendamping.`,
      ]],
      ['rencana', 'Membuat Rencana Usaha Sederhana', [
        'Rencana usaha tidak harus berupa dokumen panjang. Tulis lima hal: produk atau jasa, pelanggan yang dituju, masalah yang dibantu, cara produksi, dan cara menerima pembayaran. Gunakan bahasa sederhana atau gambar agar anak muda dapat ikut memahami dan memberi pendapat.',
        'Hitung biaya bahan, kemasan, transportasi, alat, listrik, biaya platform, dan waktu kerja. Harga jual harus mempertimbangkan total biaya, bukan hanya harga bahan. Jika masih tahap latihan, tandai produk sebagai uji coba dan batasi jumlah pesanan.',
        'Buat alur kerja dengan urutan yang terlihat. Contohnya menerima pesanan, mencatat, menyiapkan bahan, mengerjakan, memeriksa kualitas, mengemas, mengirim, lalu mencatat pembayaran. Kartu visual atau checklist dapat membantu. Sesuaikan desain dengan usia dan gaya anak muda, tidak harus menggunakan gambar kekanak-kanakan.',
        `Tentukan indikator sederhana setiap minggu: jumlah pesanan selesai, produk yang dikembalikan, waktu pengerjaan, uang masuk, uang keluar, dan tingkat energi. Dengan data ini, keluarga dapat menyesuaikan target tanpa menunggu usaha mengalami kerugian besar.`,
      ]],
      ['akses', 'Menyiapkan Aksesibilitas dan Dukungan', [
        `Aksesibilitas berarti mengubah lingkungan, alat, atau cara komunikasi agar individu dapat berpartisipasi. Bentuknya bisa berupa meja dengan tinggi sesuai, label warna, instruksi langkah demi langkah, aplikasi pengingat, waktu istirahat, atau komunikasi tertulis dengan pelanggan. ${ext('https://www.who.int/about/policies/disability', 'WHO menempatkan disabilitas dalam kerangka hak, inklusi, dan akses yang setara')}.`,
        `Bagi anak muda dengan hambatan komunikasi, siapkan cara menyampaikan status pekerjaan, meminta klarifikasi, menolak tugas yang tidak aman, dan melaporkan kesalahan. Sistem ${link('augmentative-communication-untuk-anak-di-rumah', 'komunikasi augmentatif')} dapat disesuaikan untuk aktivitas kerja.`,
        `Bagi anak muda dengan hambatan motorik, tinjau posisi alat, ukuran pegangan, durasi tugas, dan kebutuhan bantuan. ${link('terapi-okupasi', 'Terapi okupasi')} dapat memberi masukan tentang cara melakukan aktivitas dengan lebih aman dan efisien.`,
        `Dukungan bukan berarti semua pekerjaan dikerjakan oleh pendamping. Gunakan pembagian peran yang jelas: bagian yang dimiliki anak muda, bagian yang dibantu, dan bagian yang menjadi tanggung jawab pendamping. Tinjau pembagian ini secara berkala agar kesempatan belajar tetap ada.`,
      ]],
      ['keuangan', 'Mengelola Uang dan Risiko', [
        `Pisahkan uang usaha dan uang pribadi sejak awal. Gunakan catatan sederhana untuk modal, penjualan, biaya, dan saldo. Jika anak muda belum dapat mencatat sendiri, buat format yang dapat diisi bersama. Transparansi membantu menjaga kepercayaan dan memudahkan evaluasi.`,
        `Jangan mengambil pinjaman atau membeli alat mahal hanya karena melihat kisah usaha orang lain. Uji pasar dengan pre-order, jumlah produksi terbatas, atau penjualan kepada komunitas yang sudah dikenal. Setelah data penjualan stabil, barulah pertimbangkan perluasan.`,
        `Ajarkan keamanan transaksi. Jangan membagikan OTP, PIN, kata sandi, atau foto identitas kepada pelanggan. Gunakan rekening atau metode pembayaran yang dapat diawasi sesuai kesepakatan keluarga. Untuk aspek hukum dan pajak, mintalah panduan dari pihak yang kompeten.`,
        `Buat aturan pengambilan uang dari usaha. Sebagian dapat dipakai membeli bahan, sebagian disimpan sebagai cadangan, dan bagian lain menjadi imbalan kerja. Angka dan proporsinya harus disepakati dengan transparan, mempertimbangkan usia, kapasitas, serta aturan keluarga yang berlaku.`,
      ]],
      ['pasar', 'Membangun Pasar dan Jejaring', [
        `Pasar pertama dapat berasal dari lingkungan yang sudah percaya, tetapi usaha perlu bertumbuh melampaui rasa kasihan. Tampilkan kualitas, manfaat, ketepatan waktu, dan cerita usaha secara jujur. Pelanggan sebaiknya membeli karena produk memang berguna atau menarik, lalu mendukung nilai inklusinya.`,
        `Gunakan foto yang jelas, deskripsi singkat, harga, cara pesan, dan waktu pengerjaan. Konten tidak perlu berlebihan. Mintalah izin sebelum menampilkan wajah atau cerita pribadi anak muda. ${link('transparansi-donasi', 'Prinsip transparansi')} juga penting ketika usaha terhubung dengan kegiatan yayasan atau penggalangan dana.`,
        `Jejaring bisa dibangun melalui sekolah, komunitas, koperasi, bazar, pelaku UMKM, dan program CSR. ${link('program-pemberdayaan-anak-berkebutuhan-khusus', 'Program pemberdayaan ABK')} dapat menjadi jembatan untuk latihan, promosi, atau kolaborasi, asalkan perannya jelas dan tidak menjadikan anak muda sekadar objek kampanye.`,
        `Tanggapi umpan balik dengan sistem. Kelompokkan komentar tentang kualitas, harga, kemasan, komunikasi, dan pengiriman. Pilih satu perbaikan untuk periode berikutnya. Kemajuan kecil yang konsisten lebih sehat daripada memaksa pertumbuhan besar tanpa dukungan.`,
      ]],
      ['30hari', 'Rencana Uji Coba 30 Hari', [
        `Pada minggu pertama, pilih satu produk atau jasa dan satu kelompok pelanggan. Susun alur kerja bergambar atau tertulis, hitung biaya dasar, dan lakukan dua sampai lima kali latihan tanpa mengejar volume. Catat bagian yang terasa mudah, bagian yang melelahkan, dan bantuan yang paling berguna.`,
        `Pada minggu kedua, tawarkan uji coba terbatas kepada pelanggan yang memahami bahwa produk masih dalam tahap belajar. Minta umpan balik tentang kualitas, ketepatan waktu, kemasan, dan komunikasi. Jangan meminta pelanggan menilai anak muda sebagai pribadi. Yang dievaluasi adalah proses usaha dan dukungan kerja.`,
        `Pada minggu ketiga dan keempat, pilih satu perubahan yang paling berdampak, misalnya memperjelas label, mengubah ukuran kemasan, menambah waktu istirahat, atau membuat template balasan. Setelah 30 hari, putuskan apakah usaha dilanjutkan, diubah, atau dihentikan sementara. Menghentikan uji coba bukan kegagalan jika keputusan dibuat berdasarkan data dan menjaga kesehatan.`,
      ]],
    ],
    faq: [
      ['Apa itu kewirausahaan anak muda disabilitas?', 'Kewirausahaan anak muda disabilitas adalah kegiatan membangun dan menjalankan usaha dengan melibatkan anak muda sebagai pengambil peran, sambil menyediakan dukungan dan aksesibilitas yang sesuai.'],
      ['Apakah semua anak muda disabilitas harus menjadi wirausahawan?', 'Tidak. Wirausaha adalah salah satu pilihan. Sebagian orang lebih cocok bekerja di perusahaan, mengikuti pelatihan, berkegiatan sosial, atau menjalankan kombinasi beberapa peran. Pilihan harus berdasarkan minat dan kebutuhan.'],
      ['Apa ide usaha yang cocok untuk anak muda disabilitas?', 'Ide usaha bergantung pada kekuatan, akses, dukungan, modal, dan pasar. Contohnya makanan pre-order, kerajinan, tanaman, desain digital, pengemasan, foto produk, atau jasa sederhana dengan alur kerja yang jelas.'],
      ['Bagaimana keluarga membantu usaha tanpa mengambil alih?', 'Bagi peran secara tertulis: bagian yang dilakukan anak muda, bantuan yang diberikan, dan tanggung jawab pendamping. Evaluasi berkala agar anak muda tetap memiliki kendali dan kesempatan belajar.'],
      ['Bagaimana cara menghindari kerugian saat memulai usaha?', 'Mulai dari uji pasar kecil, pisahkan uang usaha, catat biaya dan penjualan, hindari pinjaman terburu-buru, dan tingkatkan produksi hanya setelah ada data permintaan serta kemampuan kerja yang stabil.'],
    ],
  },
];

function jsonLd(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

function renderArticle(article) {
  const canonical = `${SITE}/artikel/${article.slug}`;
  const bodySections = article.sections.map(([id, title, paragraphs]) => `${h2(id, title)}${paragraphs.map(p).join('')}`).join('');
  const faqHtml = `${h2('faq', 'FAQ Seputar Topik Ini')}<div class="faq-list">${article.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
  const internalLinks = [...new Set((bodySections.match(/href="\.\.\/artikel\/([^\"]+)"/g) || []).map((x) => x.match(/artikel\/([^\"]+)/)[1]))];
  if (internalLinks.length < 10) throw new Error(`${article.slug}: only ${internalLinks.length} internal links`);
  const faqEntities = article.faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }));
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title, description: article.description,
    image: `${SITE}/${article.image}`, author: { '@type': 'Person', '@id': `${author.url}#person`, name: author.name, url: author.url, image: author.image },
    publisher: { '@id': `${SITE}/#organization` }, datePublished: DATE, dateModified: `${DATE}T09:00:00+07:00`, mainEntityOfPage: { '@type': 'WebPage', '@id': canonical }, citation: article.sources,
  };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqEntities };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
  ] };
  const toc = `<div class="toc"><h3>Daftar Isi</h3><ol>${article.toc.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}</ol></div>`;
  const sourceBox = `<div class="info-box"><h4>Rujukan tepercaya</h4><p>Artikel ini memakai rujukan berikut untuk menjelaskan prinsip umum. Rujukan bukan pengganti diagnosis, terapi, atau nasihat hukum.</p>${ul(article.sources.map((url, i) => ext(url, article.sourceLabels[i])))}</div>`;
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>${article.title} | YUKA</title>
<meta name="description" content="${article.description}">
<meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${canonical}">
<link rel="stylesheet" href="../assets/css/style.min.css">
<meta property="og:type" content="article">
<meta property="og:url" content="${canonical}">
<meta property="og:title" content="${article.title}">
<meta property="og:description" content="${article.description}">
<meta property="og:image" content="${SITE}/${article.image}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${article.title}">
<meta name="twitter:description" content="${article.description}">
<meta name="twitter:image" content="${SITE}/${article.image}">
<script type="application/ld+json">${jsonLd(articleSchema)}</script>
<script type="application/ld+json">${jsonLd(faqSchema)}</script>
<script type="application/ld+json">${jsonLd(breadcrumbSchema)}</script>
<style>
.article-header{background:linear-gradient(135deg,var(--primary) 0%,var(--primary-dark) 100%);padding:8rem 0 4rem;color:var(--white)}
.article-header h1{color:var(--white)!important}.article-header .breadcrumb a{color:rgba(255,255,255,.8)}.article-header .breadcrumb .current{color:var(--white)}
.article-meta{display:flex;gap:2rem;margin-top:1.5rem;flex-wrap:wrap}.article-meta span{display:flex;align-items:center;gap:.5rem;color:rgba(255,255,255,.9);font-size:.9rem}
.article-content{max-width:800px;margin:0 auto;padding:3rem 1.5rem}.article-body{font-size:1.1rem;line-height:1.9;color:var(--gray-700)}.article-body h2{color:var(--primary);margin:2.5rem 0 1rem;font-size:1.75rem}.article-body p{margin-bottom:1.5rem}.article-body ul{margin:1.5rem 0;padding-left:2rem}.article-body a{color:#1565c0;text-decoration:underline;text-underline-offset:2px}.article-inline-image{margin:2rem 0;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.1)}.article-inline-image img{width:100%;height:auto}.article-inline-image figcaption{padding:.75rem 1rem;font-size:.9rem;color:var(--gray-600);text-align:center;background:var(--gray-50)}
.aeo-answer-box{background:#f7fbff;border:1px solid rgba(43,58,103,.18);border-left:5px solid #2b3a67;border-radius:14px;padding:1.25rem 1.5rem;margin:0 0 2rem}.aeo-answer-box .label{display:inline-block;font-size:.78rem;font-weight:700;letter-spacing:.03em;color:#2b3a67;text-transform:uppercase;margin-bottom:.45rem}.aeo-answer-box p{margin:0;color:var(--gray-800);line-height:1.75}.toc{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:12px;padding:1.5rem 2rem;margin:2rem 0}.toc h3{margin-top:0;color:var(--primary);font-size:1.1rem}.toc ol{margin:0;padding-left:1.5rem}.toc li{margin-bottom:.5rem}.toc a{color:var(--gray-700);text-decoration:none}.info-box{background:#fff3e0;border-left:4px solid #ff9800;padding:1.5rem;margin:2rem 0;border-radius:0 12px 12px 0}.info-box h4{color:#e65100;margin-top:0}.faq-list details{border:1px solid var(--gray-200);border-radius:10px;padding:1rem 1.2rem;margin:.75rem 0;background:#fff}.faq-list summary{cursor:pointer;font-weight:700;color:var(--gray-800)}
</style>
</head>
<body>
<nav class="navbar" id="navbar"><div class="container"><a href="/" class="navbar-brand"><img src="../Logo/Logo.webp" alt="YUKA, Yayasan Ukhuwah Kaffah Amanatullah" class="brand-logo" width="180" height="60"></a><div class="navbar-menu" id="navbarMenu"><a href="/">Beranda</a><a href="/tentang">Tentang</a><a href="/program">Program</a><a href="/galeri">Galeri</a><a href="/blog" class="active">Artikel</a><a href="/kontak">Kontak</a><a href="/donasi" class="btn btn-primary btn-sm">Donasi</a></div><button class="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button></div></nav>
<header class="article-header"><div class="container"><div class="breadcrumb"><a href="/">Beranda</a><span class="separator">/</span><a href="/blog">Artikel</a><span class="separator">/</span><span class="current">${article.title}</span></div><span class="card-category" style="background:var(--secondary);color:var(--gray-900);padding:.5rem 1rem;border-radius:20px;font-size:.875rem;display:inline-block;margin:1rem 0">Pendidikan</span><h1 style="font-size:2.5rem;max-width:800px">${article.title}</h1><aside data-revision-marker="yuka-autopilot-2026-09-05-${article.slug}" style="margin:22px 0;padding:18px;border:1px solid rgba(255,255,255,.35);border-radius:10px"><strong>Catatan edukasi YUKA</strong><p>Artikel ini disusun untuk membantu orang tua, guru, dan pendamping memahami pilihan dukungan secara praktis. Ini bukan diagnosis atau pengganti konsultasi profesional.</p></aside><div class="article-meta"><span>05 September 2026</span><span>12 menit baca</span><span>Tim Edukasi YUKA</span><span>Diperbarui 05 September 2026</span></div></div></header>
<div class="container"><div class="article-featured-image" style="margin:-2rem auto 2rem;max-width:900px;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.15)"><img src="../${article.image}" alt="${article.alt}" width="800" height="600" style="width:100%;height:auto"></div></div>
<article class="article-content"><div class="article-body" data-article-content="${article.slug}">
<div class="aeo-answer-box" data-aeo="answer-first"><span class="label">Jawaban singkat</span><p>${article.description} Dukungan yang tepat dimulai dari kebutuhan nyata anak, pilihan komunikasi yang dihormati, dan langkah kecil yang dapat dievaluasi bersama.</p></div>
<p>Setiap anak berkebutuhan khusus memiliki profil, minat, dan kebutuhan dukungan yang berbeda. Karena itu, panduan ini memakai bahasa yang menghormati anak dan mendorong keluarga untuk mengamati, mencoba, lalu menyesuaikan strategi secara bertahap.</p>
${toc}
${bodySections}
${figure(article.inlineImage, article.alt, 'Ilustrasi pendampingan yang berfokus pada kemampuan, pilihan, dan aksesibilitas anak muda.')}
${sourceBox}
${faqHtml}
<h2 id="kesimpulan">Kesimpulan</h2><p>Dukungan yang baik tidak selalu membutuhkan alat yang rumit. Mulailah dari komunikasi yang dapat dipahami, lingkungan yang aman, target yang realistis, dan kolaborasi dengan orang yang tepat. Jika kebutuhan berubah, rencana juga boleh berubah. YUKA mendorong keluarga dan pendamping untuk melihat kemampuan anak secara utuh dan membangun kesempatan berpartisipasi dengan hormat.</p>
</div></article>
<script src="../assets/js/main.js"></script>
</body></html>`;
}

for (const article of articles) {
  const out = path.join(process.cwd(), 'artikel', `${article.slug}.html`);
  fs.writeFileSync(out, renderArticle(article));
  console.log(`${article.slug}: wrote ${out}`);
}
console.log(`generated=${articles.length}`);

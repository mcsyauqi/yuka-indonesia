#!/usr/bin/env node
/* Generate and publish the five overdue/due YUKA article cards in one clean deploy ref.
 * Diminta oleh Syauqi (via MinTiv)
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const SITE = 'https://www.yukaindonesia.com';
const DATE = '2026-09-09';
const ROOT = process.cwd();
const author = {
  name: 'Tim Edukasi YUKA',
  url: `${SITE}/profil/bu-yupie-nurul-azkia`,
  image: `${SITE}/Team/Bu%20Yupie.webp`,
};

const articles = [
  {
    slug: 'cara-berkomunikasi-dengan-anak-tuna-rungu',
    title: 'Cara Berkomunikasi dengan Anak Tunarungu: Panduan Praktis',
    description: 'Cara berkomunikasi dengan anak tunarungu perlu menyesuaikan bahasa, visual, alat bantu, dan lingkungan. Pelajari langkah praktis untuk rumah dan sekolah.',
    image: 'Dokumentasi/cpao-siswa-belajar-di-gazebo-062.webp',
    inlineImages: [
      ['Dokumentasi/cpao-peserta-kelas-memasak-tradisional-067.webp', 'Ilustrasi pembelajaran keterampilan hidup dalam lingkungan yang terstruktur', 'Lingkungan belajar yang tenang membantu anak mengikuti percakapan dan kegiatan bersama.'],
      ['Dokumentasi/jadwal-visual-anak-autis-sekolah.webp', 'Ilustrasi anak beraktivitas bersama pendamping dalam lingkungan inklusif', 'Komunikasi yang baik memberi ruang bagi anak untuk memilih, bertanya, dan menyampaikan batasan.'],
      ['Dokumentasi/candi-plaosan-anak-sekolah-wisata-candi-borobudur-116.webp', 'Ilustrasi kegiatan belajar bersama dalam suasana yang mendukung akses komunikasi', 'Konteks kegiatan yang jelas membantu anak memahami percakapan dan rutinitas.'],
    ],
    sources: [
      ['https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss', 'WHO tentang gangguan pendengaran dan dukungan komunikasi'],
      ['https://www.asha.org/practice-portal/professional-issues/language-communication-deaf-hard-of-hearing-children/', 'ASHA tentang bahasa dan komunikasi anak tunarungu'],
      ['https://www.asha.org/public/hearing/communication-tips-for-families/', 'ASHA tentang tips komunikasi untuk keluarga'],
    ],
    sections: [
      ['pengertian', 'Mulai dari Profil Komunikasi Anak', [
        'Cara berkomunikasi dengan anak tunarungu tidak memiliki satu rumus yang berlaku untuk semua anak. Sebagian anak menggunakan bahasa isyarat, sebagian mengandalkan membaca gerak bibir, tulisan, alat bantu dengar, implan koklea, komunikasi total, atau gabungan beberapa cara. Langkah pertama adalah memahami cara yang paling efektif dan paling nyaman bagi anak.',
        'Gangguan pendengaran dapat memengaruhi akses anak terhadap percakapan, instruksi, dan informasi spontan. WHO menjelaskan bahwa dukungan yang tepat dapat membantu seseorang berpartisipasi dalam pendidikan, pekerjaan, dan kehidupan sosial. Karena itu, keluarga sebaiknya tidak hanya bertanya apakah anak bisa mendengar, tetapi juga bagaimana anak menerima pesan dan menyampaikan jawabannya.',
        'Amati situasi yang membuat komunikasi lancar. Apakah anak lebih mudah memahami kalimat pendek, tulisan, gambar, atau bahasa isyarat? Apakah ia perlu melihat wajah lawan bicara? Apakah suara latar membuatnya cepat lelah? Catatan observasi selama beberapa hari akan lebih berguna daripada kesimpulan yang dibuat dari satu kejadian.',
        'Libatkan anak dalam menentukan cara komunikasi. Tanyakan pilihan dengan bahasa yang mudah, berikan dua atau tiga opsi, dan beri waktu untuk menjawab. Jika anak belum dapat menyampaikan pilihan secara lisan, perhatikan gestur, ekspresi, arah pandang, atau penggunaan kartu pilihan. Komunikasi yang menghargai pilihan membuat anak merasa aman untuk berinteraksi.',
        'Jika keluarga masih bingung, lakukan asesmen yang sesuai dan diskusikan hasilnya dengan tenaga profesional. [[asesmen-abk|Asesmen ABK]] membantu memetakan kebutuhan belajar dan komunikasi, tetapi hasil asesmen tidak boleh dipakai untuk menghapus suara anak. Tujuannya adalah menemukan dukungan yang membuat anak lebih mudah memahami dan dipahami.',
      ]],
      ['perhatian', 'Bangun Perhatian dengan Cara yang Aman', [
        'Sebelum menyampaikan pesan, pastikan anak siap memperhatikan. Berdirilah di posisi yang dapat dilihat, gunakan sentuhan ringan hanya jika anak nyaman, lambaikan tangan dari jarak aman, atau minta bantuan teman untuk memberi tanda visual. Hindari berteriak dari ruangan lain karena suara keras tidak otomatis membuat pesan lebih jelas.',
        'Pastikan wajah cukup terang dan tidak tertutup masker, tangan, atau benda lain ketika membaca gerak bibir menjadi bagian dari strategi komunikasi. Jangan berdiri membelakangi jendela dengan cahaya kuat karena wajah akan terlihat gelap. Jarak yang wajar membantu anak melihat ekspresi, gestur, dan arah perhatian.',
        'Gunakan ekspresi yang sesuai dengan pesan, tetapi jangan berlebihan sampai mengganggu. Tunjukkan benda yang sedang dibicarakan, gunakan gambar, tulis kata kunci, atau beri isyarat arah. Prinsipnya adalah membuat informasi lebih mudah dilihat tanpa mengubah percakapan menjadi pertunjukan.',
        'Berikan satu pesan utama dalam satu waktu. Setelah menyampaikan instruksi, beri jeda dan periksa pemahaman dengan meminta anak menunjukkan, memilih, atau mengulang menggunakan caranya sendiri. Pertanyaan seperti “sudah paham?” sering menghasilkan jawaban yang tidak akurat karena anak mungkin ingin segera mengakhiri percakapan.',
        'Di rumah, keluarga dapat menyepakati tanda visual untuk aktivitas berulang, seperti makan, mandi, tidur, berangkat, dan berhenti. Sistem ini dapat dipadukan dengan [[jadwal-visual-anak-autis|jadwal visual]] yang disesuaikan dengan usia anak. Walaupun contoh tersebut sering dipakai pada autisme, prinsip visualisasi rutinitas juga dapat membantu anak dengan kebutuhan komunikasi lain.',
      ]],
      ['bahasa', 'Gunakan Bahasa Isyarat, Tulisan, dan Bicara secara Fleksibel', [
        'Bahasa isyarat dapat menjadi bahasa utama bagi anak yang menggunakannya. Keluarga tidak perlu menunggu anak fasih terlebih dahulu untuk mulai belajar. Mulailah dari kosakata yang dipakai setiap hari, seperti nama anggota keluarga, makan, minum, sakit, senang, tidak mau, selesai, dan tolong. Konsistensi lebih penting daripada menghafal banyak tanda sekaligus.',
        'Indonesia memiliki variasi praktik bahasa isyarat. Tanyakan bahasa yang digunakan komunitas dan sekolah anak, lalu belajar dari sumber atau pengajar yang kompeten. Bacaan tentang [[bahasa-isyarat|bahasa isyarat]] dan [[bisindo-adalah|BISINDO]] dapat menjadi pintu masuk, tetapi keluarga tetap perlu mengikuti kebutuhan anak dan komunitas yang menjadi rujukannya.',
        'Tulisan, gambar, dan papan komunikasi membantu ketika lawan bicara belum menguasai bahasa isyarat. Siapkan catatan kecil atau aplikasi catatan pada ponsel untuk tempat umum. Gunakan kalimat sederhana dan hindari menulis terlalu panjang ketika anak sedang lelah. Jika anak lebih nyaman memakai gambar, jangan memaksa semua pesan berubah menjadi teks.',
        'Sebagian anak memakai alat bantu dengar atau implan koklea untuk mengakses suara. Alat tersebut perlu dirawat dan diperiksa sesuai petunjuk. Namun alat bantu bukan alasan untuk menghapus dukungan visual. Lingkungan bising, jarak jauh, kelelahan, atau gangguan teknis dapat membuat akses suara berkurang.',
        'Komunikasi multimodal berarti anak boleh memakai lebih dari satu cara. Ia dapat menggabungkan bahasa isyarat, tulisan, bicara, gambar, dan gestur. Pendekatan ini sejalan dengan kebutuhan individual dalam [[pendidikan-inklusi|pendidikan inklusi]], karena tujuan utama pendidikan adalah akses terhadap pembelajaran, bukan memaksa semua anak menggunakan media yang sama.',
      ]],
      ['rumah', 'Strategi Percakapan di Rumah', [
        'Buat percakapan menjadi bagian dari rutinitas, bukan sesi latihan yang menegangkan. Saat memasak, tunjukkan bahan dan bicarakan urutan langkah. Saat berpakaian, tawarkan pilihan. Saat bepergian, jelaskan tujuan dan perubahan rute. Kegiatan sehari-hari menyediakan konteks visual sehingga anak lebih mudah menghubungkan kata, isyarat, dan pengalaman.',
        'Gunakan kalimat yang jelas, lalu tunggu respons. Jangan menyelesaikan semua kalimat anak atau menjawab atas namanya ketika orang lain bertanya. Bila anak memerlukan waktu, beri jeda. Jika pesan belum dipahami, minta anak mengulang dengan cara yang ia pilih, bukan langsung menyimpulkan bahwa anak tidak mampu berkomunikasi.',
        'Ajarkan kosakata untuk menyampaikan kebutuhan, perasaan, dan batasan. Anak perlu dapat mengatakan sakit, takut, lelah, tidak mau, berhenti, ulangi, dan bantu. Kemampuan menolak sama pentingnya dengan kemampuan meminta. Orang tua dapat membaca tentang [[peran-orang-tua-pendidikan-inklusi|peran orang tua dalam pendidikan inklusi]] untuk memperkuat kolaborasi rumah dan sekolah.',
        'Buat ruang komunikasi keluarga yang konsisten. Semua anggota keluarga sebaiknya menggunakan tanda atau tulisan yang sama untuk pesan penting. Saudara kandung dapat diajak belajar dengan cara yang menyenangkan, tetapi jangan menjadikan mereka penerjemah utama sepanjang waktu. Anak tunarungu tetap berhak berkomunikasi langsung dengan orang dewasa di rumah. Baca juga [[tuna-rungu-adalah|pengertian tunarungu]] agar keluarga memiliki istilah dasar yang sama.',
        'Jika ada salah paham, tenangkan suasana sebelum memperbaiki pesan. Tunjukkan bahwa kesalahan komunikasi adalah masalah yang dapat diselesaikan bersama, bukan kesalahan moral anak. Sikap ini membantu mengurangi rasa malu dan membuat anak lebih berani memulai percakapan.',
      ]],
      ['sekolah', 'Strategi Komunikasi di Sekolah', [
        'Sekolah perlu menyepakati rencana komunikasi individual. Dokumen ini dapat memuat cara anak menerima instruksi, media yang digunakan, posisi duduk, kebutuhan pencahayaan, waktu jeda, dan cara mengecek pemahaman. [[program-pembelajaran-individual|Program pembelajaran individual]] dapat menjadi tempat menyatukan target akademik, komunikasi, dan kemandirian.',
        'Guru sebaiknya menuliskan instruksi penting di papan atau lembar kerja, bukan hanya menyampaikannya secara lisan. Ketika kelas berpindah ruangan atau jadwal berubah, berikan informasi lebih awal. Anak dapat diberi peta sederhana, jadwal visual, atau pesan tertulis agar tidak kehilangan konteks.',
        'Posisi duduk perlu mempertimbangkan akses melihat guru, penerjemah, papan tulis, dan teman. Hindari berbicara sambil berjalan membelakangi kelas. Saat diskusi, satu orang berbicara pada satu waktu dan guru mengulang pertanyaan teman sebelum meminta anak menjawab.',
        'Teman sebaya dapat belajar etika komunikasi sederhana: menghadap ketika berbicara, tidak mengejek cara bicara, menulis ulang jika pesan tidak jelas, dan meminta izin sebelum menyentuh alat bantu. Ini bukan hanya membantu anak tunarungu, tetapi juga membangun [[inklusi-sosial|inklusi sosial]] di kelas.',
        'Jika anak mengikuti sekolah inklusi, keluarga perlu menjadwalkan evaluasi bersama guru dan pendamping. Bicarakan kemajuan berdasarkan contoh yang dapat diamati, misalnya mampu mengikuti tiga langkah instruksi dengan dukungan gambar. Hindari laporan umum seperti anak sudah lebih baik tanpa bukti perilaku yang jelas.',
      ]],
      ['alat', 'Perhatikan Alat Bantu dan Lingkungan', [
        'Alat bantu dengar, implan, mikrofon jarak jauh, papan tulis digital, caption, dan aplikasi transkripsi dapat membantu akses. Pilih alat berdasarkan kebutuhan, kemampuan mengoperasikan, biaya perawatan, dan dukungan layanan. Jangan membeli perangkat hanya karena sedang populer atau mendapat rekomendasi dari iklan.',
        'Keluarga perlu memiliki rencana cadangan. Bawa kertas dan alat tulis, simpan baterai atau pengisi daya sesuai kebutuhan, dan beri tahu sekolah apa yang harus dilakukan jika alat mengalami masalah. Anak juga perlu diajarkan cara melaporkan ketika suara terputus, alat terasa sakit, atau perangkat tidak berfungsi.',
        'Kurangi kebisingan yang tidak perlu. Tutup pintu, gunakan permukaan yang mengurangi gema, atur jarak bicara, dan pilih tempat dengan pencahayaan baik. Penyesuaian sederhana dapat membuat percakapan lebih mudah tanpa menuntut anak bekerja lebih keras.',
        'Untuk kebutuhan bicara yang menyertai gangguan pendengaran, keluarga dapat berdiskusi dengan [[terapi-wicara|terapis wicara]]. Layanan tersebut sebaiknya terhubung dengan pilihan bahasa anak, bukan dipakai untuk memaksa satu cara komunikasi. Tujuan intervensi adalah memperluas akses dan partisipasi.',
      ]],
      ['hindari', 'Kesalahan yang Perlu Dihindari', [
        'Jangan berbicara kepada pendamping seolah-olah anak tidak ada. Sampaikan pesan kepada anak, lalu gunakan pendamping atau penerjemah sebagai jembatan bila diperlukan. Anak berhak diperlakukan sebagai peserta percakapan, bukan objek pembicaraan.',
        'Jangan berpura-pura memahami jika pesan belum jelas. Minta pengulangan dengan cara yang sopan, tulis kata kunci, atau tawarkan pilihan. Berpura-pura paham dapat membuat keputusan penting salah, terutama ketika berkaitan dengan kesehatan, keselamatan, dan kegiatan sekolah.',
        'Jangan menganggap kemampuan mendengar menentukan kecerdasan. Hambatan akses komunikasi dapat terlihat seperti tidak memperhatikan atau tidak memahami, padahal anak belum menerima informasi dengan cara yang sesuai. Berikan akses terlebih dahulu sebelum menilai kemampuan.',
        'Jangan menyamakan semua anak tunarungu. Identitas, bahasa, tingkat pendengaran, pengalaman sekolah, alat bantu, dan preferensi tiap anak berbeda. Dengarkan anak dan keluarga, lalu sesuaikan dukungan berdasarkan data yang terus diperbarui.',
      ]],
      ['latihan', 'Rencana Latihan Komunikasi Selama Tujuh Hari', [
        'Hari pertama dapat dipakai untuk mencatat situasi komunikasi yang lancar dan sulit. Hari kedua, keluarga menyepakati lima pesan inti beserta media yang dipakai. Hari ketiga, semua anggota keluarga berlatih menggunakan pesan tersebut dalam rutinitas makan atau berangkat sekolah.',
        'Hari keempat, buat satu papan pilihan atau catatan digital untuk aktivitas yang paling sering dilakukan. Hari kelima, ajak anak memilih cara menyampaikan satu kebutuhan dan beri waktu respons tanpa mengambil alih. Hari keenam, evaluasi apakah lingkungan, pencahayaan, jarak, atau kebisingan perlu diubah.',
        'Hari ketujuh, rangkum strategi yang berhasil dan bagikan kepada guru atau pendamping. Rencana ini bukan pengganti asesmen profesional. Tujuannya adalah membangun kebiasaan keluarga mengamati, mencoba, lalu memperbaiki dukungan berdasarkan pengalaman nyata anak.',
      ]],
    ],
    faq: [
      ['Bagaimana cara memulai komunikasi dengan anak tunarungu?', 'Pastikan anak melihat Anda, gunakan media komunikasi yang biasa dipakai, sampaikan satu pesan utama, lalu beri waktu untuk merespons. Tanyakan atau amati cara yang paling nyaman bagi anak.'],
      ['Apakah semua anak tunarungu harus memakai bahasa isyarat?', 'Tidak ada satu metode yang wajib untuk semua anak. Sebagian memakai bahasa isyarat sebagai bahasa utama, sebagian memakai bicara, tulisan, alat bantu, atau kombinasi. Pilihan perlu disesuaikan dengan akses, identitas, dan preferensi anak.'],
      ['Bagaimana berbicara dengan anak yang memakai alat bantu dengar?', 'Hadap anak, pilih tempat dengan pencahayaan dan kebisingan yang baik, gunakan kalimat jelas, dan pastikan alat berfungsi. Tetap sediakan dukungan visual karena akses suara dapat berubah sesuai situasi.'],
      ['Apa yang harus dilakukan jika tidak memahami pesan anak?', 'Jujur bahwa pesan belum dipahami, minta pengulangan, tawarkan tulisan atau gambar, lalu konfirmasi kembali maksud anak. Hindari menebak untuk hal yang penting.'],
      ['Bagaimana sekolah mendukung komunikasi anak tunarungu?', 'Sekolah dapat menyediakan instruksi tertulis, posisi duduk yang tepat, dukungan penerjemah atau pendamping bila diperlukan, aturan diskusi satu per satu, dan rencana komunikasi individual yang dievaluasi bersama keluarga.'],
    ],
  },
  {
    slug: 'ijazah-slb-setara-apa',
    title: 'Ijazah SLB Setara Apa? Penjelasan Jenjang dan Dokumen',
    description: 'Ijazah SLB setara apa? Jawabannya bergantung pada jenjang dan satuan pendidikan yang ditempuh. Pahami SDLB, SMPLB, SMALB, dokumen kelulusan, dan langkah verifikasinya.',
    image: 'Dokumentasi/cpao-siswa-belajar-di-gazebo-062.webp',
    inlineImages: [
      ['Dokumentasi/cpao-peserta-kelas-memasak-tradisional-067.webp', 'Ilustrasi pembelajaran keterampilan hidup di satuan pendidikan khusus', 'Pendidikan khusus dapat memadukan akademik, keterampilan hidup, dan dukungan individual.'],
      ['Dokumentasi/candi-plaosan-anak-sekolah-kunjungan-candi-borobudur-051.webp', 'Ilustrasi siswa mengikuti kegiatan belajar dan pengembangan diri', 'Dokumen kelulusan perlu dibaca bersama jenjang dan program pendidikan yang ditempuh.'],
      ['Dokumentasi/jadwal-visual-anak-autis-sekolah.webp', 'Ilustrasi anak mengembangkan kemandirian dan partisipasi dalam kegiatan belajar', 'Pengalaman belajar dan dokumen kelulusan perlu dibahas bersama anak dan sekolah.'],
    ],
    sources: [
      ['https://www.unesco.org/en/inclusive-education', 'UNESCO tentang pendidikan inklusif dan hak belajar'],
      ['https://www.who.int/news-room/fact-sheets/detail/disability-and-health', 'WHO tentang disabilitas, kesehatan, dan partisipasi'],
      ['https://www.ilo.org/topics-and-sectors/disability-and-work', 'ILO tentang transisi pendidikan dan pekerjaan yang inklusif'],
    ],
    sections: [
      ['jawaban', 'Jawaban Singkat: Tidak Ada Satu Kesetaraan Otomatis', [
        'Pertanyaan “ijazah SLB setara apa?” tidak dapat dijawab hanya dengan satu jenjang untuk semua siswa. Secara praktis, dokumen kelulusan mengikuti satuan pendidikan dan jenjang yang ditempuh, misalnya SDLB, SMPLB, atau SMALB. Status dokumen juga perlu dibaca bersama nama sekolah, tahun kelulusan, program pendidikan, dan aturan administrasi yang berlaku saat dokumen diterbitkan.',
        'SLB adalah satuan pendidikan khusus, bukan satu tingkat pendidikan tunggal. Karena itu, menyebut semua ijazah SLB setara SMA atau semua setara SMP adalah penyederhanaan yang dapat menyesatkan. Orang tua dan lulusan perlu memeriksa jenjang yang tercantum pada dokumen serta menanyakan persyaratan lembaga tujuan jika ingin melanjutkan sekolah, bekerja, atau mengikuti pelatihan.',
        'UNESCO menempatkan pendidikan inklusif sebagai upaya mengurangi hambatan agar setiap peserta didik dapat belajar dan berpartisipasi. Dalam konteks Indonesia, jalur pendidikan khusus dan jalur inklusi memiliki penyelenggaraan yang berbeda, tetapi keduanya tetap berada dalam sistem pendidikan nasional. Detail pengakuan administrasi sebaiknya dikonfirmasi kepada sekolah atau dinas pendidikan, bukan disimpulkan dari nama SLB saja.',
        'Jika keluarga membutuhkan penjelasan personal, siapkan foto atau salinan dokumen dengan data sensitif ditutup, lalu tanyakan secara resmi. Sekolah dapat menjelaskan jenjang, bentuk dokumen, dan prosedur legalisir. Untuk kepentingan kerja atau kuliah, lembaga tujuan dapat memberikan daftar dokumen yang mereka terima.',
        'Bacaan [[slb-adalah|tentang SLB]] dan [[sekolah-slb-untuk-anak-apa|jenis anak yang dapat belajar di SLB]] membantu memahami konteksnya. Namun artikel ini bukan keputusan legal individual. Setiap kasus harus dilihat berdasarkan dokumen asli dan ketentuan lembaga yang berwenang.',
      ]],
      ['jenjang', 'Memahami SDLB, SMPLB, dan SMALB', [
        'SDLB merujuk pada jenjang pendidikan dasar tingkat awal dalam satuan pendidikan khusus. SMPLB berada pada jenjang pendidikan dasar tingkat lanjutan, sedangkan SMALB berada pada jenjang pendidikan menengah. Nama jenjang tersebut membantu pembaca memahami posisi pendidikan yang ditempuh, tetapi bukan satu-satunya informasi yang diperlukan untuk urusan administrasi.',
        'Pada praktiknya, kurikulum dan target belajar di pendidikan khusus dapat disesuaikan dengan kemampuan, kebutuhan, dan profil peserta didik. Pembelajaran dapat memuat literasi, numerasi, keterampilan sosial, komunikasi, keterampilan hidup, serta kesiapan kerja. Karena itu, isi pengalaman belajar seorang siswa tidak dapat disimpulkan hanya dari label jenjang.',
        'Orang tua dapat meminta sekolah menjelaskan hubungan antara kelas, jenjang, dan dokumen yang akan diterbitkan. Tanyakan juga apakah dokumen yang dimaksud adalah ijazah, sertifikat, surat keterangan lulus, rapor, atau dokumen pendamping. Istilah yang berbeda memiliki fungsi berbeda dalam proses pendaftaran.',
        'Jika anak berpindah dari sekolah inklusi ke SLB atau sebaliknya, simpan dokumen perpindahan dan hasil asesmen. [[pendidikan-khusus|Pendidikan khusus]] dan [[pendidikan-inklusi|pendidikan inklusi]] dapat memiliki dukungan yang berbeda, tetapi catatan perkembangan anak tetap penting untuk menjaga kesinambungan layanan.',
      ]],
      ['dokumen', 'Bedakan Ijazah, Rapor, dan Surat Keterangan', [
        'Ijazah adalah dokumen kelulusan yang diterbitkan sesuai ketentuan pendidikan. Rapor mencatat hasil belajar dalam periode tertentu. Surat keterangan lulus atau surat keterangan lain dapat dipakai sementara ketika dokumen utama belum tersedia atau untuk menjelaskan status administratif tertentu. Jangan menyamakan ketiganya ketika mengisi formulir.',
        'Periksa nama peserta didik, tempat tanggal lahir, NISN bila tercantum, nama satuan pendidikan, jenjang, tahun pelajaran, nomor dokumen, tanda tangan, dan cap atau pengesahan sesuai format yang berlaku. Kesalahan ejaan kecil dapat menyulitkan proses berikutnya, sehingga sebaiknya dilaporkan kepada sekolah sesegera mungkin.',
        'Simpan dokumen asli di tempat aman dan buat salinan untuk kebutuhan pendaftaran. Untuk mengirim melalui internet, tutup data yang tidak diminta dan gunakan kanal resmi. Jangan mengunggah ijazah lengkap ke media sosial atau mengirim foto identitas kepada pihak yang tidak jelas.',
        'Jika lembaga meminta “ijazah setara SMA”, tanyakan persyaratan tertulisnya. Bisa jadi yang dibutuhkan adalah ijazah jenjang menengah, surat keterangan, transkrip, atau bukti kompetensi tertentu. Meminta klarifikasi bukan berarti dokumen SLB tidak bernilai, tetapi cara memastikan dokumen yang dikirim tepat.',
      ]],
      ['lanjut', 'Pilihan Setelah Lulus dari SLB', [
        'Setelah lulus, seseorang dapat melanjutkan ke pendidikan atau pelatihan yang menerima latar belakangnya, bekerja, berwirausaha, mengikuti program keterampilan, atau menggabungkan beberapa kegiatan. Pilihan sebaiknya dibangun dari minat, kemampuan, dukungan, aksesibilitas, dan tujuan pribadi, bukan hanya dari anggapan bahwa satu jalur lebih bergengsi.',
        'Untuk pendidikan lanjutan, hubungi lembaga tujuan sebelum mendaftar. Tanyakan syarat jenjang, dokumen yang perlu dilegalisasi, kebutuhan asesmen, dukungan pembelajaran, dan prosedur akomodasi. [[asesmen-abk|Asesmen kebutuhan ABK]] dapat membantu keluarga menyusun dukungan, tetapi keputusan penerimaan tetap berada pada lembaga tujuan sesuai aturannya.',
        'Untuk kerja, siapkan ringkasan keterampilan yang dapat dilakukan, dukungan yang diperlukan, dan contoh hasil kerja. Pendidikan dan pelatihan yang inklusif seharusnya membuka kesempatan untuk mengembangkan kompetensi, bukan hanya mengukur kemampuan dengan satu cara. Baca [[penyandang-disabilitas|hak penyandang disabilitas]] dan [[disabilitas-adalah|pengertian disabilitas]] sebagai konteks percakapan tentang akses.',
        'Jika lulusan ingin mengembangkan keterampilan hidup atau usaha, buat target bertahap. [[program-pembelajaran-individual|Program pembelajaran individual]] dapat diteruskan sebagai kebiasaan perencanaan walaupun anak sudah menyelesaikan sekolah. Target dapat berubah menjadi mengelola jadwal, menerima pesanan, menggunakan transportasi, atau mengikuti pelatihan.',
      ]],
      ['verifikasi', 'Cara Memverifikasi Informasi Ijazah', [
        'Mulailah dari sekolah penerbit. Tanyakan jenjang, tahun kelulusan, format dokumen, dan prosedur jika ada kesalahan data. Jika sekolah sudah berubah nama atau tidak lagi beroperasi, minta arahan dari dinas pendidikan setempat mengenai instansi yang menyimpan arsip.',
        'Gunakan kanal resmi ketika memeriksa data. Hindari jasa yang menjanjikan “menyetarakan” ijazah dengan biaya besar tanpa menjelaskan dasar prosedur. Informasi pendidikan yang benar biasanya dapat dijelaskan melalui surat, laman resmi, atau petugas yang memiliki identitas jelas.',
        'Untuk pendaftaran kerja, kuliah, atau pelatihan, minta lembaga tujuan menuliskan syarat dokumen. Simpan tangkapan layar atau email sebagai arsip. Dengan begitu, keluarga dapat menunjukkan informasi yang sama jika ada perubahan petugas atau interpretasi yang berbeda.',
        'Jika terjadi penolakan yang terasa tidak adil, catat kronologi dan minta penjelasan tertulis. [[peran-orang-tua-pendidikan-inklusi|Peran orang tua dalam pendidikan inklusi]] juga mencakup advokasi yang tenang dan berbasis dokumen. Fokuskan pertanyaan pada akses, persyaratan, dan solusi yang dapat dipertanggungjawabkan.',
      ]],
      ['keluarga', 'Peran Keluarga dalam Menyiapkan Masa Depan', [
        'Keluarga dapat membantu anak memahami dokumen melalui bahasa sederhana dan contoh nyata. Jelaskan untuk apa ijazah digunakan, siapa yang menyimpan, kapan perlu dibawa, dan kepada siapa harus bertanya. Jangan menjadikan dokumen sebagai sumber kecemasan atau perbandingan dengan saudara.',
        'Buat folder fisik dan digital yang berisi ijazah, rapor, sertifikat pelatihan, hasil asesmen, kontak sekolah, serta catatan dukungan. Gunakan nama file yang jelas dan simpan salinan cadangan. Jika data anak dibagikan, kirim hanya bagian yang diminta.',
        'Kaitkan dokumen dengan keterampilan dan minat. Ijazah penting, tetapi kesempatan kerja dan pendidikan juga dipengaruhi oleh kemampuan praktik, komunikasi, portofolio, kebiasaan kerja, dan dukungan lingkungan. [[pendidikan-inklusi|Informasi tentang pendidikan inklusi]] dapat menjadi bahan pembanding ketika keluarga merencanakan pendidikan adik atau anak lain.',
        'Bicarakan rencana setelah lulus sejak beberapa tahun sebelumnya. Waktu yang cukup memungkinkan anak mencoba kegiatan, mengembangkan kemandirian, dan menemukan kebutuhan akomodasi. Rencana yang dibuat lebih awal biasanya lebih tenang daripada keputusan yang diambil ketika pendaftaran sudah dekat.',
      ]],
    ],
    faq: [
      ['Ijazah SLB setara apa?', 'Kesetaraannya bergantung pada jenjang dan satuan pendidikan yang ditempuh. Periksa apakah dokumen berasal dari SDLB, SMPLB, atau SMALB, lalu konfirmasi persyaratan kepada sekolah dan lembaga tujuan.'],
      ['Apakah semua lulusan SLB bisa melanjutkan kuliah?', 'Kesempatan melanjutkan pendidikan bergantung pada persyaratan program dan kesiapan lembaga dalam menyediakan dukungan. Hubungi kampus atau lembaga tujuan untuk memastikan jenjang dan dokumen yang diterima.'],
      ['Apa beda ijazah dan surat keterangan lulus?', 'Ijazah adalah dokumen kelulusan utama sesuai ketentuan, sedangkan surat keterangan lulus biasanya menerangkan status lulus atau dipakai sementara. Fungsi dan masa berlakunya perlu dikonfirmasi kepada penerbit.'],
      ['Bagaimana jika nama di ijazah salah?', 'Segera hubungi sekolah penerbit dan ikuti prosedur perbaikan data. Siapkan dokumen identitas yang diperlukan dan simpan bukti pengajuan.'],
      ['Apakah ijazah SLB dapat dipakai untuk bekerja?', 'Ijazah dapat menjadi salah satu dokumen administrasi, tetapi setiap pemberi kerja memiliki persyaratan berbeda. Tanyakan syarat tertulis dan siapkan juga bukti keterampilan atau portofolio.'],
    ],
  },
  {
    slug: 'pekerjaan-yang-cocok-untuk-orang-autis',
    title: 'Pekerjaan yang Cocok untuk Orang Autis: Cara Memilih',
    description: 'Pekerjaan yang cocok untuk orang autis bergantung pada minat, kekuatan, lingkungan, dan dukungan. Kenali pilihan kerja dan cara menyiapkan transisi secara realistis.',
    image: 'Dokumentasi/jadwal-visual-anak-autis-rumah.webp',
    inlineImages: [
      ['Dokumentasi/cpao-peserta-kelas-memasak-tradisional-067.webp', 'Ilustrasi latihan keterampilan kerja dan kemandirian secara bertahap', 'Keterampilan kerja berkembang melalui latihan yang jelas, aman, dan konsisten.'],
      ['Dokumentasi/cpao-siswa-belajar-di-gazebo-062.webp', 'Ilustrasi lingkungan kerja yang memberi dukungan dan kesempatan berpartisipasi', 'Lingkungan yang menerima perbedaan dapat membantu seseorang menunjukkan kekuatannya.'],
      ['Dokumentasi/jadwal-visual-anak-autis-sekolah.webp', 'Ilustrasi anak mengembangkan keterampilan sosial dan kemandirian', 'Eksplorasi kerja perlu memberi ruang untuk belajar, beristirahat, dan meminta dukungan.'],
    ],
    sources: [
      ['https://www.ilo.org/topics-and-sectors/disability-and-work', 'ILO tentang pekerjaan layak dan inklusi disabilitas'],
      ['https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders', 'WHO tentang autisme dan kebutuhan dukungan'],
      ['https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd', 'NIMH tentang spektrum autisme dan dukungan'],
    ],
    sections: [
      ['jawaban', 'Pekerjaan yang Cocok Dimulai dari Kekuatan, Bukan Label', [
        'Pekerjaan yang cocok untuk orang autis tidak bisa ditentukan hanya dari diagnosis. Pilihan kerja perlu melihat minat, kekuatan, cara berkomunikasi, stamina, kebutuhan sensorik, kemampuan mengikuti alur, serta dukungan yang tersedia. Seseorang dapat unggul pada detail dan rutinitas, sementara orang lain lebih berkembang dalam pekerjaan kreatif atau interaksi yang terstruktur.',
        'Autisme adalah spektrum. WHO dan NIMH menjelaskan bahwa kemampuan serta kebutuhan dukungan setiap orang sangat beragam. Karena itu, daftar pekerjaan di internet sebaiknya dipakai sebagai sumber ide, bukan sebagai kotak yang membatasi. Tugas yang sama dapat terasa cocok atau tidak cocok tergantung atasan, jadwal, alat, kebisingan, dan cara instruksi diberikan.',
        'Pekerjaan yang bermakna tidak selalu harus berupa pekerjaan penuh waktu. Pelatihan, magang, kerja paruh waktu, usaha kecil, kegiatan sukarela, atau kombinasi beberapa kegiatan dapat menjadi tahap yang valid. Yang penting, anak muda memiliki kesempatan belajar dan dilibatkan dalam keputusan.',
        'Keluarga dapat memulai dengan membuat peta kekuatan. Catat aktivitas yang membuat anak muda fokus, mau mengulang, menyelesaikan urutan, meminta bantuan, dan menerima umpan balik. Hubungkan pengamatan itu dengan kebutuhan pasar, lalu uji dalam situasi nyata secara bertahap.',
        'Bacaan [[disabilitas-adalah|tentang disabilitas]] dan [[inklusi-sosial|inklusi sosial]] membantu membangun kerangka yang lebih adil. Fokusnya bukan membuat anak muda terlihat sama, tetapi membuka akses agar ia dapat berkontribusi dengan cara yang aman dan dihargai.',
      ]],
      ['kekuatan', 'Menemukan Minat dan Keterampilan Kerja', [
        'Gunakan observasi dan pengalaman, bukan tes tunggal. Coba beberapa aktivitas selama durasi pendek, seperti mengemas barang, memeriksa data, merawat tanaman, memasak sederhana, membuat desain, membersihkan area, mengatur stok, atau membantu pelayanan pelanggan dengan skrip. Catat apa yang membuat anak muda nyaman dan bagian mana yang perlu dukungan.',
        'Pisahkan kemampuan inti dari lingkungan yang menghambat. Seseorang mungkin mampu menghitung stok, tetapi kesulitan jika ruang terlalu bising. Orang lain dapat membuat karya digital, tetapi membutuhkan instruksi tertulis dan jadwal tanpa perubahan mendadak. Penyesuaian lingkungan dapat mengubah hasil uji coba secara signifikan.',
        'Tulis keterampilan dalam bentuk perilaku yang dapat dilihat. Contohnya mampu mengikuti daftar cek lima langkah, mengirim hasil sebelum batas waktu, mengelompokkan benda berdasarkan warna, atau memberi tahu ketika perlu istirahat. Catatan seperti ini lebih berguna untuk pelatih dan pemberi kerja daripada kata umum seperti rajin atau kurang percaya diri.',
        'Hubungkan latihan kerja dengan [[program-pembelajaran-individual|program pembelajaran individual]]. Targetnya dapat berupa komunikasi dengan atasan, keselamatan kerja, mengatur waktu, menggunakan uang, dan menyelesaikan tugas sampai akhir. Keterampilan tersebut berlaku lintas pekerjaan. Keluarga dapat memakai [[peran-orang-tua-pendidikan-inklusi|peran orang tua dalam pendidikan inklusi]] untuk menjaga target tetap realistis dan berpusat pada anak muda.',
      ]],
      ['pilihan', 'Contoh Bidang Kerja yang Bisa Dieksplorasi', [
        'Bidang administrasi dan pengolahan data dapat cocok bagi orang yang menikmati pola, ketelitian, dan tugas dengan aturan jelas. Contohnya memasukkan data, mengarsipkan dokumen, memeriksa daftar, memberi label, atau menyiapkan paket administrasi. Berikan contoh output dan standar kesalahan sejak awal.',
        'Bidang kreatif dapat mencakup desain sederhana, ilustrasi, fotografi produk, kerajinan, dekorasi, penulisan deskripsi, atau pengelolaan katalog. Pilih alat yang bisa diakses dan buat batas proyek agar anak muda tidak kewalahan oleh permintaan yang terlalu luas.',
        'Bidang layanan dan produksi dapat berupa pengemasan, dapur, laundry, perawatan tanaman, kebersihan, percetakan, atau pekerjaan teknis ringan. Kesesuaian sangat dipengaruhi oleh ritme, suara mesin, bau, suhu, ukuran alat, dan supervisi. Uji lingkungan sebelum menetapkan target jangka panjang.',
        'Wirausaha juga dapat menjadi pilihan, misalnya makanan pre-order, tanaman, kerajinan, produk digital, atau jasa sederhana. Baca [[program-pemberdayaan-anak-berkebutuhan-khusus|program pemberdayaan ABK]] dan tetap pisahkan peran anak muda dari peran pendamping agar usaha tidak hanya memakai namanya untuk promosi.',
        'Pekerjaan yang banyak interaksi juga mungkin cocok jika komunikasi dan lingkungan disiapkan. Gunakan skrip salam, contoh jawaban, kartu bantuan, dan jalur eskalasi. Jangan menganggap orang autis tidak dapat berkomunikasi hanya karena gaya komunikasinya berbeda. Referensi [[pendidikan-inklusi|pendidikan inklusi]] dan [[sekolah-slb-untuk-anak-apa|pilihan sekolah khusus]] dapat membantu keluarga merancang dukungan sebelum transisi kerja.',
      ]],
      ['lingkungan', 'Menyiapkan Lingkungan Kerja yang Ramah', [
        'Akomodasi kerja adalah penyesuaian yang membantu seseorang bekerja, misalnya instruksi tertulis, jadwal yang lebih konsisten, ruang tenang, waktu istirahat, pengingat visual, atau pelatihan bertahap. ILO menekankan pentingnya inklusi dan kesempatan kerja yang layak bagi penyandang disabilitas.',
        'Buat alur kerja yang terlihat. Gunakan papan tugas, daftar cek, contoh produk, foto urutan, atau aplikasi pengingat. Saat terjadi perubahan, jelaskan apa yang berubah, mengapa, dan apa langkah berikutnya. Informasi mendadak tanpa konteks dapat meningkatkan kecemasan dan menurunkan performa.',
        'Sepakati cara memberi umpan balik. Hindari kritik yang terlalu umum seperti kamu tidak fokus. Jelaskan perilaku, dampak, dan langkah perbaikan, misalnya tiga label tertukar, mari cocokkan dengan contoh warna sebelum melanjutkan. Umpan balik yang konkret membantu pembelajaran.',
        'Sediakan cara aman untuk meminta bantuan atau istirahat. Anak muda perlu tahu kepada siapa harus melapor ketika lelah, bingung, sakit, atau menghadapi situasi sosial yang tidak aman. Kemandirian berarti mampu menggunakan dukungan, bukan dipaksa menyelesaikan semua hal sendirian.',
      ]],
      ['transisi', 'Transisi dari Sekolah ke Dunia Kerja', [
        'Transisi sebaiknya dimulai sebelum kelulusan. Buat pengalaman kerja singkat dengan tujuan yang jelas, misalnya datang tepat waktu, mengikuti empat langkah tugas, memakai alat keselamatan, dan menyampaikan kebutuhan. Setelah pengalaman selesai, evaluasi bersama anak muda, bukan hanya menilai dari sudut pandang pendamping.',
        'Keluarga dapat menyiapkan portofolio sederhana berisi contoh karya, daftar keterampilan, dukungan yang membantu, dan kontak yang dapat dihubungi. Portofolio tidak harus membuka diagnosis jika tidak diperlukan. Sampaikan informasi disabilitas dan akomodasi sesuai kebutuhan serta pilihan individu.',
        'Latih keterampilan di luar tugas utama, seperti perjalanan, makan siang, menerima perubahan jadwal, menggunakan ponsel, menjaga uang, dan mengenali penipuan. [[person-centered-planning-disabilitas|Perencanaan berpusat pada individu]] dapat membantu menghubungkan pekerjaan dengan tujuan hidup yang lebih luas.',
        'Cari tempat kerja yang bersedia berdialog. Perusahaan yang baik tidak hanya bertanya apakah kandidat bisa bekerja, tetapi juga membahas tugas, standar, akses, orientasi, dan cara evaluasi. Jika sebuah lingkungan meminta anak muda menyembunyikan kebutuhan sampai terjadi masalah, pertimbangkan kembali risikonya.',
      ]],
      ['komunikasi', 'Cara Menyiapkan Wawancara dan Hari Pertama', [
        'Gunakan latihan peran untuk pertanyaan umum, seperti pengalaman, kekuatan, alasan memilih pekerjaan, dan cara meminta bantuan. Berikan beberapa pilihan jawaban, lalu biarkan anak muda memilih kata yang paling sesuai. Tidak semua orang nyaman dengan kontak mata atau percakapan spontan, dan hal itu tidak otomatis menunjukkan kurangnya kemampuan kerja.',
        'Siapkan informasi praktis tentang lokasi, pakaian, jam, transportasi, nama pendamping, dan urutan hari pertama. Jika memungkinkan, lakukan kunjungan awal agar anak muda dapat mengenali pintu masuk, toilet, ruang kerja, dan tempat tenang.',
        'Pada hari pertama, minta instruksi diberikan satu per satu dan tuliskan istilah penting. Anak muda boleh membawa catatan atau menggunakan alat bantu komunikasi. [[cara-berkomunikasi-dengan-anak-tuna-rungu|Strategi komunikasi yang jelas]] juga bermanfaat bagi orang autis, terutama ketika instruksi lisan cepat atau ambigu.',
        'Lakukan evaluasi singkat pada akhir hari. Tanyakan tugas mana yang mudah, bagian mana yang melelahkan, dan dukungan apa yang perlu diubah. Jangan menilai kecocokan hanya dari satu hari yang penuh pengalaman baru.',
      ]],
      ['keamanan', 'Uang, Hak, dan Keamanan Kerja', [
        'Anak muda perlu memahami upah, jadwal pembayaran, jam kerja, tugas, dan siapa yang dapat dihubungi jika terjadi masalah. Gunakan bahasa sederhana dan dokumen tertulis. Pendamping boleh membantu membaca, tetapi keputusan dan persetujuan sebaiknya melibatkan anak muda sesuai kapasitasnya.',
        'Waspadai pekerjaan yang meminta biaya besar di awal, menahan identitas, meminta OTP, menjanjikan penghasilan tidak realistis, atau mengharuskan kerja tanpa informasi tugas yang jelas. Kesempatan kerja inklusif tetap harus aman dan transparan.',
        'Latih cara mengatakan tidak terhadap tugas berbahaya, pelecehan, atau permintaan pribadi yang tidak relevan. Pastikan anak muda memiliki jalur pengaduan yang tidak bergantung pada orang yang menjadi sumber masalah. Keluarga perlu menyimpan nomor darurat dan kontak pendukung.',
        'Jika anak muda ingin membangun usaha, mulai dengan modal kecil, catatan keuangan, dan uji pasar. [[transparansi-donasi|Prinsip transparansi]] juga penting jika kegiatan usaha berhubungan dengan yayasan, penggalangan dana, atau kampanye sosial.',
      ]],
      ['30hari', 'Rencana Eksplorasi Kerja Selama 30 Hari', [
        'Minggu pertama dipakai untuk memetakan kekuatan, minat, kebutuhan sensorik, transportasi, dan dukungan komunikasi. Pilih dua bidang yang realistis. Minggu kedua, lakukan latihan singkat dengan alur kerja dan standar hasil yang jelas.',
        'Minggu ketiga, lakukan uji coba di lingkungan nyata dengan volume terbatas. Catat ketepatan waktu, kualitas, stamina, inisiatif, cara meminta bantuan, dan kebutuhan penyesuaian. Hindari menambah target ketika anak muda masih belajar menjaga energi.',
        'Minggu keempat, evaluasi bersama anak muda. Pilih satu langkah berikutnya: melanjutkan latihan, mengubah dukungan, mencoba bidang lain, mengikuti pelatihan, atau berhenti sementara untuk menjaga kesehatan. Keputusan yang aman dan berbasis data lebih penting daripada mengejar hasil cepat.',
      ]],
    ],
    faq: [
      ['Apa pekerjaan yang cocok untuk orang autis?', 'Pekerjaan yang cocok bergantung pada minat, kekuatan, cara berkomunikasi, kebutuhan sensorik, stamina, dan dukungan. Contoh bidang yang dapat dieksplorasi antara lain administrasi, data, produksi, kreatif, tanaman, pengemasan, kuliner, dan jasa terstruktur.'],
      ['Apakah orang autis bisa bekerja di lingkungan umum?', 'Bisa, dengan dukungan dan akomodasi yang sesuai. Kecocokan ditentukan oleh tugas, lingkungan, cara instruksi, dan kesiapan tempat kerja, bukan diagnosis saja.'],
      ['Bagaimana mengetahui minat kerja anak autis?', 'Lakukan observasi dan uji coba singkat pada beberapa aktivitas. Catat fokus, stamina, kualitas, respons terhadap umpan balik, dan dukungan yang membuat aktivitas lebih mudah.'],
      ['Perlukah memberi tahu diagnosis saat melamar kerja?', 'Keputusan itu milik individu dan keluarga sesuai kebutuhan serta konteks. Informasi tentang akomodasi dapat dibahas tanpa membuka data yang tidak diperlukan, terutama jika tidak terkait dengan keselamatan atau pelaksanaan tugas.'],
      ['Bagaimana keluarga membantu tanpa mengambil alih pekerjaan?', 'Bagi peran dengan jelas, berikan dukungan hanya pada bagian yang diperlukan, dan beri kesempatan anak muda melakukan tugas yang mampu ia lakukan. Evaluasi dukungan secara berkala.'],
    ],
  },
  {
    slug: 'ai-artificial-intelligence-untuk-screening-autisme',
    title: 'AI untuk Screening Autisme: Manfaat, Batasan, dan Etika',
    description: 'AI untuk screening autisme dapat membantu mengenali pola dan memprioritaskan rujukan, tetapi bukan diagnosis. Pahami manfaat, risiko, privasi, dan langkah aman bagi keluarga.',
    image: 'Dokumentasi/jadwal-visual-anak-autis-rumah.webp',
    inlineImages: [
      ['Dokumentasi/jadwal-visual-anak-autis-kartu.webp', 'Ilustrasi penggunaan teknologi sebagai alat bantu pengamatan perkembangan anak', 'Teknologi sebaiknya membantu pengamatan, bukan menggantikan percakapan dengan tenaga profesional.'],
      ['Dokumentasi/cpao-siswa-belajar-di-gazebo-062.webp', 'Ilustrasi keluarga dan pendamping berdiskusi tentang dukungan anak', 'Keputusan dukungan perlu mempertimbangkan suara anak, keluarga, dan hasil asesmen yang tepat.'],
      ['Dokumentasi/jadwal-visual-anak-autis-sekolah.webp', 'Ilustrasi anak beraktivitas dalam lingkungan yang mendukung perkembangan', 'Hasil screening harus diterjemahkan menjadi pertanyaan dan dukungan yang aman.'],
    ],
    sources: [
      ['https://www.who.int/news-room/fact-sheets/detail/autism-spectrum-disorders', 'WHO tentang autisme dan pentingnya dukungan'],
      ['https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd', 'NIMH tentang autisme dan proses evaluasi'],
      ['https://www.who.int/news-room/fact-sheets/detail/disability-and-health', 'WHO tentang disabilitas dan partisipasi'],
    ],
    sections: [
      ['jawaban', 'Jawaban Singkat: AI Bukan Alat Diagnosis Tunggal', [
        'AI untuk screening autisme dapat membantu mengolah kuesioner, video, suara, atau data perkembangan untuk menemukan pola yang perlu diperiksa lebih lanjut. Namun hasil AI bukan diagnosis dan tidak boleh menjadi satu-satunya dasar keputusan pendidikan, terapi, atau pengobatan. Diagnosis dan rencana dukungan tetap memerlukan evaluasi komprehensif oleh tenaga yang kompeten.',
        'Screening berbeda dari diagnosis. Screening bertujuan mencari apakah seseorang perlu mendapat pemeriksaan lebih lanjut. Diagnosis melihat riwayat perkembangan, komunikasi, perilaku, kondisi lain, serta dampaknya pada kehidupan sehari-hari. Aplikasi yang memberi skor risiko hanya menjawab sebagian kecil dari proses tersebut.',
        'Teknologi dapat berguna jika dipakai sebagai alat bantu yang transparan, teruji, menjaga privasi, dan dipahami keterbatasannya. WHO dan NIMH menekankan pentingnya melihat autisme sebagai kondisi perkembangan dengan kebutuhan dukungan yang beragam. Karena itu, angka dari aplikasi harus dibaca bersama cerita anak dan observasi lintas situasi.',
        'Jika orang tua melihat perubahan atau kekhawatiran perkembangan, jangan menunggu skor aplikasi menjadi tinggi. Catat contoh perilaku, kapan muncul, apa yang membantu, dan bagaimana komunikasi anak. Bawa catatan tersebut untuk berdiskusi dengan tenaga profesional.',
        'Bacaan [[autisme-adalah|tentang autisme]], [[asesmen-abk|asesmen ABK]], dan [[intervensi-dini|intervensi dini]] dapat membantu keluarga memahami istilah. Artikel ini tidak memberikan diagnosis dan tidak menggantikan konsultasi kesehatan.',
      ]],
      ['screening', 'Bagaimana AI Dipakai dalam Screening', [
        'Sistem AI dapat bekerja dengan mengenali pola dari data yang dikumpulkan. Contohnya, aplikasi dapat mengolah jawaban kuesioner, membandingkan pola suara, atau membantu tenaga profesional meninjau video. Setiap metode memiliki sumber kesalahan, karena data pelatihan tidak selalu mewakili semua usia, bahasa, budaya, atau tingkat dukungan.',
        'AI juga dapat membantu administrasi, misalnya merangkum catatan perkembangan atau mengingatkan jadwal tindak lanjut. Fungsi seperti ini sering lebih aman daripada meminta aplikasi menarik kesimpulan diagnosis dari satu video. Keluarga tetap harus tahu data apa yang masuk, siapa yang melihat, dan berapa lama data disimpan.',
        'Hasil screening sebaiknya ditampilkan sebagai informasi yang mudah dipahami, bukan label pasti. Aplikasi yang mengatakan “anak Anda autis” tanpa menjelaskan ketidakpastian, metode, dan langkah berikutnya perlu diwaspadai. Hasil yang bertanggung jawab akan mendorong rujukan, bukan menutup percakapan. Keluarga dapat membaca [[tips-mendampingi-anak-autis|tips mendampingi anak autis]] dan [[screen-time-untuk-anak-autis-batasan|panduan penggunaan layar]] sebagai dukungan umum, bukan pengganti asesmen.',
        'Dalam pendidikan, data digital dapat membantu guru mencatat kebutuhan dukungan, tetapi sekolah harus membatasi akses dan mencegah label menyebar tanpa konteks. [[pendidikan-inklusi|Pendidikan inklusi]] memerlukan penyesuaian pembelajaran, bukan sekadar kategori di dalam sistem.',
      ]],
      ['manfaat', 'Manfaat yang Mungkin Jika Dipakai dengan Tepat', [
        'Manfaat pertama adalah membantu keluarga menyusun pertanyaan sebelum konsultasi. Dengan mencatat contoh perilaku secara teratur, orang tua tidak harus mengandalkan ingatan ketika bertemu dokter, psikolog, atau terapis. AI dapat membantu mengelompokkan catatan, tetapi keluarga tetap memeriksa apakah ringkasan sesuai kenyataan.',
        'Manfaat kedua adalah memperluas akses informasi di daerah yang kekurangan tenaga ahli. Aplikasi edukasi dapat menjelaskan istilah, membantu mengenali tanda yang perlu diperhatikan, dan mengarahkan keluarga mencari layanan. Ini berbeda dari memberikan diagnosis otomatis.',
        'Manfaat ketiga adalah mendukung pemantauan perkembangan. Catatan waktu, situasi, komunikasi, tidur, dan respons terhadap dukungan dapat membantu tim melihat perubahan. Gunakan data sesedikit mungkin dan hindari merekam anak terus-menerus tanpa tujuan jelas.',
        'Manfaat keempat adalah membantu personalisasi dukungan. Jika sistem dipakai dalam penelitian atau layanan yang sudah tervalidasi, pola tertentu dapat menjadi bahan diskusi tentang strategi belajar dan komunikasi. [[program-pembelajaran-individual|Program pembelajaran individual]] tetap harus dibuat berdasarkan kebutuhan nyata anak.',
      ]],
      ['batasan', 'Batasan dan Risiko AI Screening', [
        'Model AI dapat memiliki bias. Jika data pelatihan lebih banyak berasal dari kelompok tertentu, hasilnya mungkin kurang akurat untuk anak dengan bahasa, budaya, usia, gender, atau profil dukungan berbeda. Hasil normal tidak otomatis meniadakan kebutuhan anak, begitu juga hasil berisiko tidak otomatis menetapkan diagnosis.',
        'Perilaku anak dapat berubah sesuai situasi. Anak mungkin tampak berbeda di rumah, sekolah, ruang pemeriksaan, dan depan kamera. Satu rekaman singkat tidak dapat menggantikan riwayat perkembangan dan observasi langsung.',
        'Ada risiko privasi ketika foto, suara, video, atau data kesehatan diunggah. Periksa kebijakan data, lokasi penyimpanan, pilihan penghapusan, penggunaan untuk pelatihan model, dan siapa penerima data. Jangan mengunggah video anak ke layanan yang tidak jelas identitas pengelolanya.',
        'Ada pula risiko pelabelan. Keluarga dapat mulai memperlakukan anak sesuai skor aplikasi dan mengabaikan minat atau kekuatannya. [[inklusi-sosial|Inklusi sosial]] berarti menyediakan akses dan dukungan, bukan menjadikan label sebagai batas masa depan.',
      ]],
      ['aman', 'Cara Memilih Layanan AI secara Lebih Aman', [
        'Cari identitas pengembang, tujuan penggunaan, informasi metode, kebijakan privasi, dan kontak dukungan. Hindari aplikasi yang menjanjikan diagnosis instan, kesembuhan, atau kepastian tanpa evaluasi. Tanyakan apakah layanan ditinjau oleh tenaga profesional dan apakah ada bukti uji yang dapat dibaca.',
        'Pilih layanan yang menjelaskan bahwa screening bukan diagnosis dan memberikan rujukan. Pastikan keluarga dapat mengunduh atau menghapus data. Jika aplikasi meminta akses kamera, mikrofon, kontak, atau lokasi yang tidak relevan, pertimbangkan untuk tidak menggunakannya.',
        'Gunakan AI untuk membantu menyiapkan pertanyaan, bukan untuk memutuskan terapi. Tuliskan hasil sebagai salah satu informasi dengan tanggal dan konteks penggunaan. Saat berkonsultasi, sampaikan juga hal yang tidak ditangkap aplikasi.',
        'Jika anak tidak nyaman direkam, hormati penolakannya. Kebutuhan informasi orang dewasa tidak boleh menghapus hak anak atas privasi dan rasa aman. Gunakan observasi langsung dan catatan nonrekaman bila itu lebih sesuai.',
      ]],
      ['langkah', 'Langkah Setelah Hasil Screening', [
        'Jika hasil menunjukkan perlunya evaluasi lebih lanjut, hubungi layanan kesehatan atau perkembangan anak yang sesuai. Bawa riwayat perkembangan, catatan sekolah, contoh komunikasi, dan daftar pertanyaan. Jangan mengubah obat atau terapi hanya berdasarkan hasil aplikasi.',
        'Jika hasil terlihat rendah tetapi kekhawatiran tetap ada, lanjutkan diskusi profesional. Hasil rendah hanya berarti sistem tidak menemukan pola tertentu pada data yang dimasukkan. Ia tidak menghapus pengalaman anak atau kebutuhan dukungan yang terlihat dalam kehidupan sehari-hari.',
        'Sambil menunggu evaluasi, keluarga dapat membuat dukungan rendah risiko, seperti rutinitas yang jelas, komunikasi visual, waktu istirahat, dan lingkungan yang lebih mudah diprediksi. [[peran-orang-tua-pendidikan-inklusi|Peran orang tua]] dan guru tetap penting tanpa harus menunggu label diagnosis.',
        'Jika ada masalah keselamatan, kehilangan kemampuan yang sudah dimiliki, kejang, gangguan makan atau tidur berat, atau perubahan mendadak, minta bantuan layanan kesehatan segera. Artikel online dan AI tidak cocok untuk menangani keadaan darurat.',
      ]],
      ['keluarga', 'Pertanyaan yang Perlu Dibawa ke Tenaga Profesional', [
        'Tanyakan metode evaluasi yang digunakan, siapa yang melakukan, berapa lama prosesnya, dan dokumen apa yang perlu dibawa. Minta penjelasan tentang apa yang dapat dan tidak dapat disimpulkan dari satu alat screening.',
        'Tanyakan dukungan apa yang dapat dimulai sekarang tanpa menunggu diagnosis akhir. Dukungan komunikasi, penyesuaian kelas, dan strategi rutinitas sering dapat dibahas berdasarkan kebutuhan yang terlihat. [[terapi-wicara|Terapi wicara]] atau [[terapi-okupasi|terapi okupasi]] mungkin relevan, tetapi keputusan harus mengikuti evaluasi dan tujuan anak.',
        'Tanyakan bagaimana data disimpan dan siapa yang boleh menerima laporan. Keluarga memiliki hak untuk memahami penggunaan data anak. Simpan salinan hasil dan catat tanggal konsultasi agar keputusan berikutnya memiliki konteks.',
        'Terakhir, tanyakan cara melibatkan anak. Bahkan anak yang belum mampu menjelaskan panjang dapat diberi pilihan, waktu, dan cara untuk menyampaikan nyaman atau tidak nyaman. Dukungan yang baik tetap menghormati agensi anak.',
      ]],
    ],
    faq: [
      ['Apakah AI bisa mendiagnosis autisme?', 'AI dapat membantu screening atau pengolahan informasi, tetapi tidak seharusnya menjadi satu-satunya dasar diagnosis. Diagnosis memerlukan evaluasi komprehensif oleh tenaga profesional.'],
      ['Apa beda screening dan diagnosis autisme?', 'Screening mencari apakah seseorang perlu diperiksa lebih lanjut. Diagnosis menilai riwayat perkembangan, komunikasi, perilaku, kondisi lain, dan dampaknya secara lebih menyeluruh.'],
      ['Apakah hasil aplikasi AI bisa salah?', 'Bisa. Akurasi dipengaruhi data, usia, bahasa, budaya, kualitas rekaman, dan situasi anak. Hasil harus dibaca sebagai informasi awal dengan keterbatasan.'],
      ['Apakah aman mengunggah video anak ke aplikasi screening?', 'Periksa pengembang, kebijakan privasi, penyimpanan, penggunaan untuk pelatihan, dan pilihan penghapusan. Jangan unggah data jika pengelola dan tujuannya tidak jelas.'],
      ['Apa yang dilakukan setelah hasil screening berisiko?', 'Catat hasil dan konteksnya, lalu konsultasikan kepada tenaga profesional. Jangan memulai atau menghentikan terapi hanya berdasarkan hasil aplikasi.'],
    ],
  },
  {
    slug: 'program-pemerintah-untuk-abk',
    title: 'Program Pemerintah untuk ABK: Cara Mencari Bantuan',
    description: 'Program pemerintah untuk ABK mencakup pendidikan, kesehatan, perlindungan sosial, alat bantu, dan pelatihan. Simak cara memetakan kebutuhan dan mengecek layanan resmi.',
    image: 'Dokumentasi/cpao-siswa-belajar-di-gazebo-062.webp',
    inlineImages: [
      ['Dokumentasi/candi-plaosan-anak-sekolah-kunjungan-candi-borobudur-051.webp', 'Ilustrasi anak mengikuti kegiatan pendidikan bersama pendamping', 'Akses bantuan biasanya dimulai dari kebutuhan anak dan dokumen yang sesuai.'],
      ['Dokumentasi/cpao-peserta-kelas-memasak-tradisional-067.webp', 'Ilustrasi pelatihan keterampilan hidup untuk mendukung kemandirian anak', 'Program pendidikan dan pelatihan perlu dihubungkan dengan tujuan hidup anak.'],
      ['Dokumentasi/jadwal-visual-anak-autis-sekolah.webp', 'Ilustrasi anak dan keluarga merencanakan dukungan secara bertahap', 'Keluarga dapat menghubungkan bantuan dengan kebutuhan dan tujuan anak.'],
    ],
    sources: [
      ['https://www.unesco.org/en/inclusive-education', 'UNESCO tentang pendidikan inklusif'],
      ['https://www.who.int/news-room/fact-sheets/detail/disability-and-health', 'WHO tentang disabilitas, akses, dan partisipasi'],
      ['https://www.ilo.org/topics-and-sectors/disability-and-work', 'ILO tentang pelatihan dan pekerjaan inklusif'],
    ],
    sections: [
      ['jawaban', 'Jawaban Singkat: Petakan Kebutuhan, Lalu Cek Layanan Resmi', [
        'Program pemerintah untuk ABK tidak berada dalam satu layanan tunggal. Bantuan dapat berkaitan dengan pendidikan inklusi atau SLB, pemeriksaan kesehatan dan rujukan, alat bantu, perlindungan sosial, administrasi kependudukan, pelatihan kerja, atau layanan daerah. Ketersediaan, syarat, dan nama program dapat berbeda menurut wilayah serta kondisi anak.',
        'Langkah paling aman adalah mulai dari kebutuhan nyata. Apakah anak membutuhkan tempat belajar, pemeriksaan perkembangan, alat bantu dengar, akses terapi, dokumen kependudukan, bantuan biaya, atau pelatihan kemandirian? Daftar kebutuhan membantu keluarga berbicara dengan instansi yang tepat dan menghindari pendaftaran program yang tidak relevan.',
        'UNESCO menjelaskan bahwa pendidikan inklusif berupaya mengurangi hambatan agar semua anak dapat belajar dan berpartisipasi. WHO juga menekankan bahwa disabilitas berkaitan dengan interaksi antara kondisi seseorang dan hambatan lingkungan. Karena itu, keluarga tidak perlu menunggu anak memenuhi gambaran tertentu untuk mulai meminta penyesuaian akses.',
        'Program pemerintah dapat menjadi salah satu dukungan, bukan satu-satunya penentu masa depan anak. Sekolah, puskesmas, rumah sakit, dinas sosial, dinas pendidikan, layanan disabilitas, yayasan, dan komunitas dapat saling melengkapi sesuai kewenangannya.',
        'Bacaan [[pendidikan-inklusi|pendidikan inklusi]], [[disabilitas-adalah|pengertian disabilitas]], dan [[penyandang-disabilitas|hak penyandang disabilitas]] membantu keluarga menyiapkan pertanyaan. Selalu cek informasi terbaru melalui kanal resmi sebelum mengirim dokumen atau membayar biaya apa pun.',
      ]],
      ['pendidikan', 'Dukungan Pendidikan: Sekolah Inklusi, SLB, dan Kesetaraan', [
        'Keluarga dapat berdiskusi dengan sekolah atau dinas pendidikan mengenai pilihan belajar yang sesuai. Pilihannya dapat mencakup sekolah reguler dengan dukungan inklusi, satuan pendidikan khusus, atau program pendidikan lain yang diakui. Pertanyaan penting meliputi akses fisik, guru pendamping, komunikasi, kurikulum, transportasi, dan cara evaluasi.',
        'Simpan hasil asesmen, rapor, catatan guru, dan dokumen identitas. Dokumen ini membantu sekolah memahami kebutuhan tanpa mengulang seluruh proses dari awal. [[asesmen-abk|Asesmen ABK]] bukan sekadar syarat administrasi, tetapi bahan untuk merancang dukungan yang lebih tepat.',
        'Tanyakan apakah ada bantuan perlengkapan, dukungan biaya, program penguatan literasi, atau pelatihan guru yang dapat diakses di wilayah keluarga. Nama dan mekanismenya dapat berubah, sehingga keluarga perlu meminta pengumuman atau prosedur tertulis dari pihak resmi.',
        'Jika anak sudah berada di sekolah, mintalah rencana dukungan yang dapat dievaluasi. [[program-pembelajaran-individual|Program pembelajaran individual]] dapat memuat target akademik, komunikasi, kemandirian, dan partisipasi. Keluarga dapat meminta rapat jika dukungan belum berjalan atau kebutuhan anak berubah.',
        'Untuk anak yang mempertimbangkan SLB, baca [[slb-adalah|apa itu SLB]] dan [[sekolah-slb-untuk-anak-apa|untuk siapa satuan pendidikan khusus]] agar diskusi lebih terarah. Keputusan sekolah perlu mempertimbangkan profil anak, akses, jarak, dan kemampuan layanan, bukan stigma.',
      ]],
      ['kesehatan', 'Dukungan Kesehatan dan Rujukan', [
        'Mulailah dari fasilitas kesehatan tingkat pertama atau layanan yang ditetapkan di wilayah. Bawa kartu identitas, kartu jaminan kesehatan bila ada, riwayat pemeriksaan, daftar obat, dan catatan keluhan. Tanyakan alur rujukan jika kebutuhan memerlukan dokter atau layanan lanjutan.',
        'Kebutuhan anak dapat meliputi pemeriksaan pendengaran, penglihatan, perkembangan, gizi, kesehatan gigi, komunikasi, motorik, atau kesehatan mental. Tidak semua kebutuhan harus ditangani di tempat yang sama. Minta penjelasan tentang prioritas dan tanda bahaya yang memerlukan pertolongan segera.',
        'Layanan terapi mungkin tersedia melalui jalur berbeda dan memiliki daftar tunggu. Tanyakan jadwal, biaya, tujuan, lama evaluasi, serta cara mengukur kemajuan. [[terapi-wicara|Terapi wicara]] dan [[terapi-okupasi|terapi okupasi]] sebaiknya dipilih sesuai kebutuhan dan dilakukan oleh tenaga yang kompeten.',
        'Jika informasi di media sosial berbeda dengan petugas, minta klarifikasi tertulis atau tautan resmi. Hindari membeli obat, alat, atau paket terapi karena janji kesembuhan. Dukungan kesehatan yang aman menjelaskan manfaat, risiko, keterbatasan, dan alternatif.',
      ]],
      ['sosial', 'Perlindungan Sosial dan Administrasi', [
        'Dinas sosial atau layanan daerah dapat menjadi pintu informasi tentang bantuan sosial, pendataan penyandang disabilitas, alat bantu, kartu atau program daerah, serta rujukan perlindungan. Tidak semua keluarga otomatis menerima bantuan, karena setiap program memiliki syarat, kuota, dan verifikasi.',
        'Siapkan dokumen dasar secara rapi, seperti kartu keluarga, identitas anak dan orang tua, surat keterangan domisili, dokumen sekolah, serta dokumen medis atau asesmen jika diminta. Tutup data yang tidak relevan ketika mengirim salinan kepada pihak yang belum terverifikasi.',
        'Tanyakan nama program, instansi penanggung jawab, syarat, tahap verifikasi, jadwal, dan cara mengadu. Catat nama petugas dan tanggal kunjungan. Informasi ini membantu jika keluarga perlu mengikuti proses lanjutan atau memperbaiki data.',
        'Jangan membayar perantara yang menjanjikan kepastian. Program resmi dapat memiliki biaya administrasi tertentu sesuai aturan, tetapi keluarga berhak meminta bukti pembayaran dan penjelasan. Jika ada tekanan atau permintaan data tidak wajar, hentikan proses dan cek ulang melalui kanal pemerintah.',
        'Keluarga juga dapat menghubungi yayasan atau komunitas untuk dukungan informasi. [[yayasan-sosial-anak-berkebutuhan-khusus|Cara memahami yayasan sosial]] membantu membedakan layanan sosial, donasi, dan program pemerintah yang memiliki tanggung jawab berbeda.',
      ]],
      ['alat', 'Alat Bantu, Aksesibilitas, dan Mobilitas', [
        'Alat bantu perlu dipilih berdasarkan asesmen dan kebutuhan penggunaan sehari-hari. Contohnya alat bantu dengar, kacamata, kursi roda, tongkat, perangkat komunikasi, atau modifikasi lingkungan. Jangan memilih hanya berdasarkan harga atau rekomendasi umum karena ukuran dan kondisi anak berbeda.',
        'Tanyakan proses pengukuran, pengadaan, perawatan, suku cadang, dan pelatihan penggunaan. Alat yang diberikan tanpa pendampingan dapat tidak terpakai atau bahkan tidak aman. Anak juga perlu diberi kesempatan mencoba dan menyampaikan apakah alat terasa nyaman.',
        'Aksesibilitas tidak hanya soal alat. Jalur masuk, toilet, pencahayaan, suara, informasi tertulis, waktu antre, dan sikap petugas dapat menentukan apakah anak bisa berpartisipasi. WHO menempatkan hambatan lingkungan sebagai bagian penting dalam pengalaman disabilitas.',
        'Buat rencana cadangan jika alat rusak atau layanan berhenti. Simpan nomor layanan, catatan ukuran, jadwal perawatan, dan cara komunikasi alternatif. [[cara-berkomunikasi-dengan-anak-tuna-rungu|Strategi komunikasi visual]] dapat membantu keluarga menyiapkan pilihan cadangan untuk anak tunarungu.',
      ]],
      ['kerja', 'Pelatihan Keterampilan dan Persiapan Kerja', [
        'Anak muda ABK dapat memerlukan program transisi yang menghubungkan sekolah dengan keterampilan hidup, pelatihan, magang, atau pekerjaan. ILO menekankan pentingnya kesempatan kerja yang layak dan lingkungan yang inklusif. Keluarga dapat menanyakan pelatihan di dinas tenaga kerja, balai latihan, sekolah, atau komunitas yang memiliki program jelas.',
        'Pilih pelatihan berdasarkan minat, kemampuan, transportasi, jadwal, biaya, dan dukungan komunikasi. Target awal dapat berupa mengikuti jadwal, menyelesaikan tugas, menjaga keselamatan, meminta bantuan, dan mengelola uang. [[pekerjaan-yang-cocok-untuk-orang-autis|Pilihan pekerjaan untuk orang autis]] memberi contoh cara memilih berdasarkan kekuatan, bukan label.',
        'Waspadai pelatihan yang menjanjikan penghasilan besar tanpa menjelaskan kurikulum, pengajar, tempat praktik, atau biaya. Minta melihat jadwal dan contoh output. Jika anak diminta membayar untuk mendapat pekerjaan, cek ulang ke instansi resmi.',
        'Rencana kerja sebaiknya melibatkan anak muda. Tanyakan kegiatan yang disukai, lingkungan yang membuat nyaman, dan jenis bantuan yang dianggap membantu. Dukungan keluarga perlu memperluas kesempatan, bukan mengambil alih keputusan.',
      ]],
      ['cara', 'Cara Mencari Informasi yang Bisa Dipertanggungjawabkan', [
        'Mulailah dari laman resmi pemerintah pusat atau daerah, sekolah, puskesmas, rumah sakit, dan kantor layanan yang tercantum di dokumen resmi. Cek tanggal publikasi, nama instansi, nomor kontak, dan apakah tautan pendaftaran masih aktif.',
        'Gunakan kata kunci yang spesifik, misalnya nama kota, kebutuhan alat bantu, pendidikan inklusi, layanan disabilitas, atau pelatihan kerja. Jangan hanya mencari “bantuan ABK gratis” karena hasilnya dapat bercampur dengan iklan dan penawaran tidak resmi.',
        'Saat menelepon, gunakan daftar pertanyaan: program apa yang tersedia, siapa yang memenuhi syarat, dokumen apa yang diperlukan, apakah ada kuota, kapan pendaftaran, dan apa jalur pengaduan. Minta petugas menyebutkan laman atau surat rujukan bila memungkinkan.',
        'Simpan hasil pencarian dalam catatan bersama tanggal pengecekan. Program dapat berubah dan informasi lama bisa beredar ulang. [[transparansi-donasi|Prinsip transparansi]] juga relevan ketika keluarga membandingkan bantuan pemerintah dengan penggalangan dana atau layanan yayasan.',
      ]],
      ['prioritas', 'Buat Peta Bantuan 30 Hari', [
        'Minggu pertama, tulis kebutuhan anak dan dokumen yang sudah ada. Tandai kebutuhan mendesak, seperti keselamatan, kesehatan, atau kehilangan akses sekolah. Minggu kedua, hubungi satu layanan resmi untuk setiap kebutuhan prioritas dan catat jawaban petugas.',
        'Minggu ketiga, lengkapi dokumen dan ajukan proses yang memang memenuhi syarat. Jangan mengirim data ke banyak pihak sekaligus tanpa catatan. Minggu keempat, evaluasi apakah layanan berjalan, apa yang belum terjawab, dan siapa yang perlu dihubungi berikutnya.',
        'Peta ini membuat keluarga lebih terarah dan mengurangi risiko tertipu informasi palsu. Jika satu program belum tersedia, keluarga masih dapat mencari dukungan sekolah, layanan kesehatan, komunitas, atau yayasan yang relevan sambil menunggu jalur resmi.',
      ]],
    ],
    faq: [
      ['Apa saja program pemerintah untuk ABK?', 'Dukungan dapat berkaitan dengan pendidikan inklusi atau SLB, kesehatan dan rujukan, alat bantu, perlindungan sosial, administrasi, pelatihan kerja, dan layanan daerah. Nama serta syarat program berbeda menurut wilayah.'],
      ['Bagaimana cara mengetahui program yang tersedia di daerah?', 'Mulailah dari sekolah, dinas pendidikan, puskesmas, dinas sosial, atau kanal resmi pemerintah daerah. Tanyakan nama program, syarat, kuota, jadwal, dan jalur pengaduan.'],
      ['Dokumen apa yang biasanya perlu disiapkan?', 'Dokumen dapat meliputi identitas anak dan orang tua, kartu keluarga, domisili, dokumen sekolah, serta surat atau hasil asesmen jika diminta. Setiap program memiliki persyaratan sendiri.'],
      ['Apakah semua ABK otomatis mendapat bantuan?', 'Tidak. Setiap layanan memiliki kriteria, proses verifikasi, kuota, dan kewenangan. Karena itu, keluarga perlu mengikuti prosedur dan meminta penjelasan resmi.'],
      ['Bagaimana menghindari penipuan bantuan ABK?', 'Cek kanal resmi, jangan membayar perantara tanpa bukti, jangan memberikan OTP atau data sensitif kepada pihak tidak jelas, dan minta informasi tertulis dari instansi penanggung jawab.'],
    ],
  },
];

function esc(value) {
  return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function resolveText(value) {
  return value
    .replace(/\[\[EXT:([^|]+)\|([^\]]+)\]\]/g, (_, url, label) => `<a href="${url}" target="_blank" rel="noopener">${label}</a>`)
    .replace(/\[\[([^|]+)\|([^\]]+)\]\]/g, (_, slug, label) => `<a href="../artikel/${slug}">${label}</a>`);
}
function p(value) { return `<p>${resolveText(value)}</p>`; }
function h2(id, title) { return `<h2 id="${id}">${title}</h2>`; }
function jsonLd(obj) { return JSON.stringify(obj).replace(/</g, '\\u003c'); }
function words(html) { return (html.replace(/<[^>]+>/g, ' ').match(/\b[\wÀ-ÿ]+\b/g) || []).length; }

function render(article) {
  const canonical = `${SITE}/artikel/${article.slug}`;
  const sections = article.sections.map(([id, title, paras]) => `${h2(id, title)}${paras.map(p).join('')}`).join('');
  const toc = `<div class="toc"><h3>Daftar Isi</h3><ol>${article.sections.map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}<li><a href="#faq">FAQ</a></li></ol></div>`;
  const faq = `${h2('faq', 'FAQ Seputar Topik Ini')}<div class="faq-list">${article.faq.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
  const figures = article.inlineImages.map(([src, alt, caption]) => `<figure class="article-inline-image"><img src="../${src}" alt="${esc(alt)}" loading="lazy" width="800" height="520"><figcaption>${caption}</figcaption></figure>`).join('');
  const sourceBox = `<div class="info-box"><h3>Rujukan tepercaya</h3><p>Rujukan berikut dipakai untuk menjelaskan prinsip umum. Rujukan bukan pengganti diagnosis, keputusan administrasi, atau konsultasi profesional.</p><ul>${article.sources.map(([url, label]) => `<li><a href="${url}" target="_blank" rel="noopener">${label}</a></li>`).join('')}</ul></div>`;
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.title, description: article.description,
    image: article.inlineImages.map(x => `${SITE}/${x[0]}`), author: { '@type': 'Person', '@id': `${author.url}#person`, name: author.name, url: author.url, image: author.image },
    publisher: { '@type': 'Organization', '@id': `${SITE}/#organization`, name: 'YUKA, Yayasan Ukhuwah Kaffah Amanatullah', url: `${SITE}/`, logo: { '@type': 'ImageObject', url: `${SITE}/Logo/Logo.webp` } },
    datePublished: DATE, dateModified: `${DATE}T09:00:00+07:00`, mainEntityOfPage: { '@type': 'WebPage', '@id': canonical }, citation: article.sources.map(x => x[0]), inLanguage: 'id-ID'
  };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: article.faq.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
    { '@type': 'ListItem', position: 3, name: article.title, item: canonical },
  ] };
  const extra = {
    'ijazah-slb-setara-apa': `${h2('catatan-administrasi', 'Catatan Administrasi yang Sering Terlewat')}${[
      'Ketika keluarga mengurus pendaftaran, pertanyaan tentang kesetaraan dokumen sering muncul bersamaan dengan pertanyaan tentang format salinan dan legalisir. Buat daftar kebutuhan sejak awal, lalu tandai mana yang sudah tersedia, mana yang perlu diminta dari sekolah, dan mana yang hanya diminta oleh lembaga tujuan. Cara sederhana ini membantu keluarga menghindari pengiriman dokumen yang tidak diperlukan.',
      'Perhatikan juga perbedaan antara jenjang pendidikan dan program keterampilan. Seseorang dapat mengikuti pelatihan kerja setelah menyelesaikan pendidikan khusus, tetapi sertifikat pelatihan tidak otomatis menggantikan dokumen kelulusan. Sebaliknya, ijazah tidak selalu menjelaskan seluruh keterampilan praktis yang dikuasai lulusan. Karena itu, siapkan dokumen akademik dan portofolio keterampilan sesuai tujuan.',
      'Saat berbicara dengan petugas, gunakan pertanyaan yang spesifik: dokumen apa yang diterima, apakah perlu legalisir, apakah ada format digital, kapan batas pengumpulan, dan siapa yang dapat dihubungi jika data tidak sesuai. Minta jawaban tertulis bila prosesnya penting. Catatan ini dapat menjadi bukti bahwa keluarga sudah mengikuti prosedur yang tersedia.',
      'Anak atau lulusan sebaiknya dilibatkan dalam percakapan sesuai kemampuan dan kenyamanannya. Jelaskan bahwa dokumen adalah alat untuk membuka kesempatan, bukan ukuran nilai dirinya. Dengan informasi yang transparan, keluarga dapat merencanakan pendidikan, pelatihan, kerja, atau aktivitas sosial secara lebih tenang dan realistis.'
    ].map(p).join('')}`,
    'ai-artificial-intelligence-untuk-screening-autisme': `${h2('keputusan', 'Membuat Keputusan Setelah Melihat Hasil AI')}${[
      'Jika sebuah aplikasi menampilkan hasil risiko, jangan langsung mengubah rutinitas anak atau memberi label di depan keluarga besar. Simpan nama alat, versi aplikasi, tanggal penggunaan, pertanyaan yang dijawab, dan konteks saat pengisian. Catatan ini dapat membantu tenaga profesional memahami bagaimana hasil dibuat dan apakah ada faktor yang memengaruhi jawaban.',
      'Bandingkan hasil aplikasi dengan pengamatan sehari-hari. Perhatikan komunikasi, permainan, respons terhadap perubahan, pola minat, tidur, makan, regulasi emosi, serta kemampuan berpartisipasi di rumah dan sekolah. Pengamatan sebaiknya mencakup kekuatan dan kebutuhan, bukan hanya perilaku yang dianggap berbeda. Jangan memakai satu video atau satu kejadian sebagai gambaran lengkap.',
      'Sampaikan pertanyaan kepada dokter, psikolog, atau tim tumbuh kembang yang memiliki kewenangan melakukan asesmen. Bawa catatan perkembangan dan contoh situasi yang membuat keluarga khawatir. Tenaga profesional dapat menentukan apakah perlu asesmen lanjutan, dukungan pendidikan, terapi, atau pemantauan tanpa diagnosis segera.',
      'Keluarga juga perlu membicarakan privasi dengan anak ketika usianya memungkinkan. Foto, video, suara, dan data perkembangan merupakan informasi pribadi. Sebelum membagikannya, pahami siapa yang dapat melihat, berapa lama data disimpan, apakah dapat dihapus, dan apakah penyedia aplikasi menjual atau membagikannya kepada pihak lain.'
    ].map(p).join('')}`
  }[article.slug] || '';
  const body = `<div class="aeo-answer-box" data-aeo="answer-first"><span class="label">Jawaban singkat</span><p>${article.description} Dukungan yang tepat dimulai dari kebutuhan nyata anak, komunikasi yang dihormati, dan langkah yang dapat dievaluasi bersama.</p></div><p>Setiap anak memiliki profil, minat, dan kebutuhan dukungan yang berbeda. Karena itu, panduan ini menggunakan bahasa yang menghormati anak serta mendorong keluarga, guru, dan pendamping untuk mengamati, mencoba, lalu menyesuaikan strategi secara bertahap.</p>${toc}${sections}${extra}${figures}${sourceBox}${faq}<h2 id="kesimpulan">Kesimpulan</h2><p>Dukungan yang baik tidak harus rumit. Mulailah dari informasi yang benar, komunikasi yang jelas, lingkungan yang aman, dan keputusan yang melibatkan anak. Jika kebutuhan berubah, rencana juga boleh berubah. YUKA mendorong keluarga dan pendamping untuk membangun kesempatan belajar dan berpartisipasi dengan hormat.</p>`;
  return `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>${esc(article.title)} | YUKA</title>
<meta name="description" content="${esc(article.description)}">
<meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${canonical}">
<link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
<link rel="stylesheet" href="../assets/css/style.min.css">
<meta property="og:type" content="article"><meta property="og:url" content="${canonical}"><meta property="og:title" content="${esc(article.title)}"><meta property="og:description" content="${esc(article.description)}"><meta property="og:image" content="${SITE}/${article.image}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(article.title)}"><meta name="twitter:description" content="${esc(article.description)}"><meta name="twitter:image" content="${SITE}/${article.image}">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LDXC5GQF61"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-LDXC5GQF61');</script>
<script type="application/ld+json">${jsonLd(articleSchema)}</script>
<script type="application/ld+json">${jsonLd(faqSchema)}</script>
<script type="application/ld+json">${jsonLd(breadcrumbSchema)}</script>
<style>
.article-header{background:linear-gradient(135deg,var(--primary) 0%,var(--primary-dark) 100%);padding:8rem 0 4rem;color:var(--white)}.article-header h1{color:var(--white)!important}.article-header .breadcrumb a{color:rgba(255,255,255,.8)}.article-header .breadcrumb .current{color:var(--white)}.article-meta{display:flex;gap:2rem;margin-top:1.5rem;flex-wrap:wrap}.article-meta span{color:rgba(255,255,255,.9);font-size:.9rem}.article-content{max-width:800px;margin:0 auto;padding:3rem 1.5rem}.article-body{font-size:1.1rem;line-height:1.9;color:var(--gray-700)}.article-body h2{color:var(--primary);margin:2.5rem 0 1rem;font-size:1.75rem}.article-body p{margin-bottom:1.5rem}.article-body ul{margin:1.5rem 0;padding-left:2rem}.article-body li{margin-bottom:.6rem}.article-body a{color:#1565C0;text-decoration:underline;text-underline-offset:2px}.article-inline-image{margin:2rem 0;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.1)}.article-inline-image img{width:100%;height:auto}.article-inline-image figcaption{padding:.75rem 1rem;font-size:.9rem;color:var(--gray-600);text-align:center;background:var(--gray-50)}.aeo-answer-box{background:#f7fbff;border:1px solid rgba(43,58,103,.18);border-left:5px solid #2b3a67;border-radius:14px;padding:1.25rem 1.5rem;margin:0 0 2rem}.aeo-answer-box .label{display:inline-block;font-size:.78rem;font-weight:700;letter-spacing:.03em;color:#2b3a67;text-transform:uppercase;margin-bottom:.45rem}.aeo-answer-box p{margin:0;color:var(--gray-800);line-height:1.75}.toc{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:12px;padding:1.5rem 2rem;margin:2rem 0}.toc h3{margin-top:0;color:var(--primary);font-size:1.1rem}.toc ol{margin:0;padding-left:1.5rem}.toc li{margin-bottom:.5rem}.toc a{text-decoration:none}.info-box{background:#fff3e0;border-left:4px solid #ff9800;padding:1.5rem;margin:2rem 0;border-radius:0 12px 12px 0}.info-box h3{color:#e65100;margin-top:0}.faq-list details{border:1px solid var(--gray-200);border-radius:10px;padding:1rem 1.2rem;margin:.75rem 0;background:#fff}.faq-list summary{cursor:pointer;font-weight:700;color:var(--gray-800)}
@media(max-width:640px){.article-header{padding:6rem 0 3rem}.article-header h1{font-size:2rem!important}.article-content{padding:2rem 1rem}.article-body{font-size:1rem}.toc{padding:1rem 1.2rem}}
</style>
</head>
<body>
<nav class="navbar" id="navbar"><div class="container"><a href="/" class="navbar-brand"><img src="../Logo/Logo.webp" alt="YUKA, Yayasan Ukhuwah Kaffah Amanatullah" class="brand-logo" width="180" height="60"></a><div class="navbar-menu" id="navbarMenu"><a href="/">Beranda</a><a href="/tentang">Tentang</a><a href="/program">Program</a><a href="/galeri">Galeri</a><a href="/blog" class="active">Artikel</a><a href="/kontak">Kontak</a><a href="/donasi" class="btn btn-primary btn-sm">Donasi</a></div><button class="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button></div></nav>
<header class="article-header"><div class="container"><div class="breadcrumb"><a href="/">Beranda</a><span class="separator">/</span><a href="/blog">Artikel</a><span class="separator">/</span><span class="current">${esc(article.title)}</span></div><span class="card-category" style="background:var(--secondary);color:var(--gray-900);padding:.5rem 1rem;border-radius:20px;font-size:.875rem;display:inline-block;margin:1rem 0">Pendidikan</span><h1 style="font-size:2.5rem;max-width:800px">${esc(article.title)}</h1><aside data-revision-marker="yuka-autopilot-2026-09-09-v6-${article.slug}" style="margin:22px 0;padding:18px;border:1px solid rgba(255,255,255,.35);border-radius:10px"><strong>Catatan edukasi YUKA</strong><p>Artikel ini membantu orang tua, guru, dan pendamping memahami dukungan secara praktis. Ini bukan diagnosis atau pengganti konsultasi profesional.</p></aside><div class="article-meta"><span>09 September 2026</span><span>15 menit baca</span><span>Tim Edukasi YUKA</span><span>Diperbarui 09 September 2026</span></div></div></header>
<div class="container"><div class="article-featured-image" style="margin:-2rem auto 2rem;max-width:900px;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.15)"><img src="../${article.image}" alt="Ilustrasi dukungan pendidikan dan partisipasi anak berkebutuhan khusus" width="800" height="600" style="width:100%;height:auto"></div></div>
<article class="article-content"><div class="article-body" data-article-content="${article.slug}">${body}</div></article>
<script src="../assets/js/main.js"></script>
</body></html>`;
}

function updateBlog() {
  const file = path.join(ROOT, 'blog.html');
  let blog = fs.readFileSync(file, 'utf8');
  const marker = '<div class="blog-grid" id="blogGrid">';
  if (!blog.includes(marker)) throw new Error('blog grid marker not found');
  const cards = articles.filter(a => !blog.includes(`artikel/${a.slug}`)).map(a => `\n                <!-- Article: ${a.title} -->\n                <article class="card blog-card animate-on-scroll" data-yuka-revision="yuka-autopilot-2026-09-09-${a.slug}"><div class="card-image"><img src="${a.image}" alt="Ilustrasi pendidikan inklusif dan dukungan anak" loading="lazy"></div><div class="card-body"><span class="card-category">Pendidikan</span><h3 class="card-title"><a href="artikel/${a.slug}">${a.title}</a></h3><p class="card-text">${a.description}</p><div class="card-meta"><span>09 Sep 2026</span><span>15 menit baca</span></div></div></article>`).join('');
  if (cards) fs.writeFileSync(file, blog.replace(marker, marker + cards));
}

function updateFeed() {
  for (const a of articles) {
    execFileSync('node', ['scripts/update-feed.js', a.slug, a.title, a.description, DATE], { cwd: ROOT, stdio: 'inherit' });
  }
}

for (const a of articles) {
  // The page shell (canonical footer, GA4, analytics.js) comes from the shared
  // partial, never from this file. Retyping it here is what produced the
  // footerless 2026-09-09 batch in the first place.
  const html = ensureArticleShell(render(a));
  const missingShell = missingShellParts(html);
  if (missingShell.length) throw new Error(`${a.slug} shell gate failed, missing: ${missingShell.join(', ')}`);
  const count = words(html);
  if (count < 1500) throw new Error(`${a.slug} body/source word count ${count} < 1500`);
  const internalCount = (html.match(/href="\.\.\/artikel\//g) || []).length;
  if (internalCount < 10) throw new Error(`${a.slug} internal link gate failed: ${internalCount}`);
  if ((html.match(/<details>/g) || []).length < 5) throw new Error(`${a.slug} FAQ gate failed`);
  if (html.includes('—') || html.includes('–')) throw new Error(`${a.slug} contains dash not allowed in public content`);
  fs.writeFileSync(path.join(ROOT, 'artikel', `${a.slug}.html`), html);
  console.log(JSON.stringify({ slug: a.slug, words: count, internalLinks: (html.match(/href="\.\.\/artikel\//g) || []).length, faq: (html.match(/<details>/g) || []).length, images: (html.match(/<img /g) || []).length }));
}
updateBlog();
updateFeed();
execFileSync('node', ['scripts/regen-sitemaps.js'], { cwd: ROOT, stdio: 'inherit' });
console.log(JSON.stringify({ published: articles.map(a => a.slug), date: DATE }));

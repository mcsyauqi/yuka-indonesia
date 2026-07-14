#!/usr/bin/env python3
"""Remediasi QA batch artikel YUKA 14 Juli 2026 secara idempoten."""
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
ART = ROOT / "artikel"
DATE = "2026-07-14"

IMAGES = {
    "abk-menghadapi-era-ai": ("../Dokumentasi/21-jan-2026-anak-anak-belajar-bersama-guru-013.webp", "Anak berkebutuhan khusus belajar bersama guru sebagai ilustrasi kesiapan menghadapi era AI", "Teknologi perlu menjadi alat bantu belajar yang tetap dipandu guru dan keluarga."),
    "keutamaan-merawat-anak-yatim": ("../Dokumentasi/cpao-kunjungan-kelompok-rumah-tradisional-jawa-056.webp", "Kegiatan kebersamaan komunitas sebagai ilustrasi kepedulian terhadap anak yatim", "Kepedulian yang terorganisasi membantu dukungan kepada anak berjalan konsisten dan bermartabat."),
    "kisah-ilham-hafiz": ("../Dokumentasi/21-jan-2026-anak-anak-belajar-di-rumah-002.webp", "Anak belajar didampingi keluarga sebagai ilustrasi kisah Ilham menghafal Al-Quran", "Pendampingan keluarga yang sabar menjadi bagian penting dalam proses belajar anak."),
    "perbedaan-terapi-okupasi-dan-terapi-wicara": ("../Dokumentasi/21-jan-2026-anak-anak-belajar-bersama-guru-013.webp", "Anak belajar bersama guru sebagai ilustrasi kolaborasi terapi okupasi dan terapi wicara", "Terapi yang terkoordinasi berangkat dari kebutuhan fungsional anak di rumah dan sekolah."),
    "retardasi-mental-adalah": ("../Dokumentasi/generated-tunagrahita-belajar-life-skill-ilustrasi.webp", "Ilustrasi anak dengan disabilitas intelektual belajar keterampilan hidup", "Pembelajaran keterampilan hidup perlu disesuaikan dengan kemampuan dan ritme setiap anak."),
    "terapi-fisik-untuk-abk": ("../Dokumentasi/museum-gunung-merapi-anak-anak-bermain-air-outdoor-041.webp", "Anak-anak bergerak di luar ruang sebagai ilustrasi terapi fisik untuk ABK", "Aktivitas gerak yang aman dapat mendukung keseimbangan, koordinasi, dan partisipasi anak."),
    "tips-mendampingi-anak-autis": ("../Dokumentasi/generated-autisme-anak-bermain-sendiri-ilustrasi.webp", "Ilustrasi anak autis bermain dengan dukungan lingkungan yang tenang", "Pendampingan anak autis perlu mengikuti kebutuhan sensorik, komunikasi, dan rutinitas anak."),
    "transparansi-donasi": ("../Dokumentasi/21-jan-2026-spanduk-student-day-sekolah-inklusi-011.webp", "Kegiatan sekolah inklusi sebagai ilustrasi dampak penggunaan donasi pendidikan", "Transparansi membantu donatur memahami hubungan antara dana, program, dan manfaat bagi penerima."),
    "tunaganda-adalah": ("../Dokumentasi/generated-difabel-inklusi-komunitas-ilustrasi.webp", "Ilustrasi komunitas inklusif yang mendukung anak dengan tunaganda", "Anak dengan tunaganda membutuhkan dukungan terpadu yang dapat diakses di rumah, sekolah, dan masyarakat."),
}

RELATED = {
    "keutamaan-merawat-anak-yatim": [("/artikel/donasi-online", "cara donasi pendidikan membantu anak"), ("/artikel/yayasan-sosial-anak-berkebutuhan-khusus", "peran yayasan sosial untuk anak"), ("/donasi", "program donasi YUKA")],
    "kisah-ilham-hafiz": [("/artikel/tips-mendampingi-anak-autis", "panduan mendampingi anak autis"), ("/artikel/abk-adalah-anak-berkebutuhan-khusus", "memahami kebutuhan anak secara utuh"), ("/program", "program pendidikan inklusi YUKA")],
    "kisah-mas-ilham-mandiri-telur-asin": [("/artikel/program-pemberdayaan-anak-berkebutuhan-khusus", "pelatihan kemandirian untuk ABK"), ("/artikel/terapi-memasak-anak-berkebutuhan-khusus", "terapi memasak untuk anak"), ("/program", "program pendampingan YUKA")],
    "terapi-memasak-anak-berkebutuhan-khusus": [("/artikel/program-pemberdayaan-anak-berkebutuhan-khusus", "latihan kemandirian ABK"), ("/artikel/terapi-okupasi", "peran terapi okupasi"), ("/program", "program pendidikan YUKA")],
    "tips-mendampingi-anak-autis": [("/artikel/autisme-adalah", "mengenal autisme secara lebih tepat"), ("/artikel/jadwal-visual-anak-autis", "membuat jadwal visual untuk anak"), ("/artikel/terapi-okupasi", "dukungan terapi okupasi")],
    "transparansi-donasi": [("/artikel/donasi-online", "manfaat donasi pendidikan"), ("/artikel/memilih-yayasan-anak-berkebutuhan-khusus", "cara memilih yayasan donasi"), ("/donasi", "saluran donasi resmi YUKA")],
    "wisata-edukasi-anak-berkebutuhan-khusus": [("/artikel/inklusi-sosial", "manfaat kegiatan inklusif"), ("/artikel/pendidikan-inklusi", "mengenal pendidikan inklusi"), ("/program", "program kegiatan YUKA")],
}

EXTENSIONS = {
"terapi-fisik-untuk-abk": '''
      <h2 id="asesmen-terapi-fisik">Asesmen Terapi Fisik yang Berpusat pada Aktivitas Anak</h2>
      <p>Asesmen terapi fisik sebaiknya tidak berhenti pada label diagnosis. Fisioterapis perlu melihat aktivitas yang benar-benar ingin dilakukan anak, hambatan yang muncul, serta kondisi rumah dan sekolah. Contohnya, target “berjalan lebih baik” masih terlalu luas. Target yang lebih berguna adalah anak mampu berjalan dari kelas ke toilet dengan aman, berdiri saat memakai celana, atau mengikuti permainan sederhana tanpa terlalu cepat lelah.</p>
      <p>Pendekatan fungsional seperti ini membuat orang tua lebih mudah mengamati kemajuan. Motorik kasar, yaitu kemampuan memakai otot besar untuk duduk, berdiri, berjalan, atau melompat, tetap dinilai. Namun hasilnya diterjemahkan ke aktivitas harian. Hal ini sejalan dengan penjelasan <a href="https://www.who.int/health-topics/rehabilitation" target="_blank" rel="noopener">WHO tentang rehabilitasi</a> sebagai upaya mengoptimalkan fungsi seseorang dalam interaksi dengan lingkungannya.</p>
      <p>Saat konsultasi awal, orang tua dapat membawa tiga catatan: aktivitas yang paling sulit, situasi ketika anak terlihat lebih mampu, dan perubahan kesehatan terbaru. Video singkat dari rumah juga dapat membantu profesional memahami pola gerak, selama privasi anak dijaga. Menurut kami, catatan sederhana selama satu minggu jauh lebih berguna daripada mengandalkan ingatan saat sesi konsultasi.</p>

      <h2 id="tujuan-program">Menyusun Tujuan Program yang Realistis dan Terukur</h2>
      <p>Tujuan terapi yang baik harus spesifik, dapat diamati, dan relevan bagi anak. Alih-alih mengejar pencapaian anak lain, keluarga dapat memilih satu sampai tiga tujuan prioritas untuk beberapa minggu. Misalnya, anak mampu mempertahankan posisi duduk saat makan, berpindah dari lantai ke kursi dengan bantuan minimal, atau berjalan di permukaan datar tanpa sering tersandung.</p>
      <p>Yang sering terlewat adalah kenyamanan dan partisipasi. Gerakan yang tampak lebih rapi belum tentu bermakna jika anak tetap kesakitan atau tidak mau ikut kegiatan. Karena itu, keberhasilan perlu dilihat dari kombinasi kemampuan, rasa aman, ketahanan, dan kemauan berpartisipasi. Pendekatan ini juga mencegah latihan berubah menjadi tekanan yang merusak hubungan anak dan orang tua.</p>
      <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:24px 0;"><table style="width:100%;min-width:560px;border-collapse:collapse;"><thead><tr style="background:#2B3A67;color:#fff;"><th style="padding:12px;text-align:left;">Tujuan</th><th style="padding:12px;text-align:left;">Contoh indikator</th><th style="padding:12px;text-align:left;">Tempat dipantau</th></tr></thead><tbody><tr><td style="padding:12px;border-bottom:1px solid #ddd;">Keseimbangan</td><td style="padding:12px;border-bottom:1px solid #ddd;">Berdiri saat memakai tas tanpa jatuh</td><td style="padding:12px;border-bottom:1px solid #ddd;">Rumah dan sekolah</td></tr><tr><td style="padding:12px;border-bottom:1px solid #ddd;">Daya tahan</td><td style="padding:12px;border-bottom:1px solid #ddd;">Mengikuti permainan selama durasi yang disepakati</td><td style="padding:12px;border-bottom:1px solid #ddd;">Sekolah</td></tr><tr><td style="padding:12px;border-bottom:1px solid #ddd;">Perpindahan</td><td style="padding:12px;border-bottom:1px solid #ddd;">Bangun dari lantai dengan bantuan lebih sedikit</td><td style="padding:12px;border-bottom:1px solid #ddd;">Rumah</td></tr></tbody></table></div>

      <h2 id="latihan-rumah">Latihan di Rumah Harus Aman, Singkat, dan Konsisten</h2>
      <p>Latihan rumah bukan salinan penuh sesi klinik. Orang tua hanya perlu menjalankan aktivitas yang sudah diajarkan dan dinilai aman oleh profesional. Bentuknya dapat berupa permainan berpindah posisi, meraih benda, berjalan di jalur yang aman, atau latihan keseimbangan dengan dukungan. Durasi mengikuti toleransi anak, bukan target waktu yang dipaksakan.</p>
      <p>Sebelum mulai, periksa lantai, alas kaki, benda tajam, dan ruang gerak. Hentikan aktivitas bila anak mengeluh nyeri, terlihat sesak, pusing, sangat lelah, atau menunjukkan perubahan gerak yang tidak biasa. Jangan menambah beban, meregangkan sendi secara paksa, atau meniru latihan dari media sosial tanpa persetujuan fisioterapis. Kondisi anak berbeda, sehingga latihan yang aman untuk satu anak belum tentu aman untuk anak lain.</p>
      <p>Catat aktivitas, tingkat bantuan, dan respons anak dengan format singkat. Contoh: “berdiri dari kursi lima kali, bantuan pada tangan, tidak mengeluh nyeri.” Catatan ini membantu fisioterapis menilai apakah latihan perlu dilanjutkan, dipermudah, atau ditingkatkan. Keluarga juga dapat membaca <a href="/artikel/perbedaan-terapi-okupasi-dan-terapi-wicara">perbedaan terapi okupasi dan terapi wicara</a> agar pembagian peran setiap layanan lebih jelas.</p>

      <h2 id="kolaborasi-sekolah">Kolaborasi dengan Sekolah dan Terapis Lain</h2>
      <p>Kemampuan bergerak memengaruhi akses anak terhadap kegiatan belajar. Anak yang sulit menjaga postur mungkin cepat lelah saat menulis. Anak yang belum aman berjalan di tangga mungkin membutuhkan rute kelas berbeda. Karena itu, guru perlu mengetahui strategi dukungan yang sudah disepakati bersama keluarga dan fisioterapis.</p>
      <p>Terapi fisik juga dapat beririsan dengan terapi okupasi, terapi wicara, psikologi, dan layanan medis. Kolaborasi bukan berarti semua anak harus menerima banyak terapi sekaligus. Tim perlu menyepakati prioritas agar jadwal anak tidak terlalu padat. Menurut kami, satu tujuan yang diterapkan konsisten di rumah dan sekolah lebih bermakna daripada banyak target yang tidak sempat dipraktikkan.</p>
      <p><a href="https://www.who.int/health-topics/rehabilitation" target="_blank" rel="noopener">WHO menjelaskan rehabilitasi</a> sebagai intervensi untuk mengoptimalkan fungsi dan mengurangi hambatan dalam interaksi dengan lingkungan. Jika orang tua memiliki kekhawatiran, langkah paling aman adalah berkonsultasi lebih awal, bukan menunggu hambatan menjadi berat.</p>

      <h2 id="evaluasi-kemajuan">Cara Mengevaluasi Kemajuan Tanpa Membandingkan Anak</h2>
      <p>Evaluasi dilakukan dengan membandingkan kemampuan anak saat ini dengan titik awalnya sendiri. Gunakan indikator sederhana seperti jumlah bantuan, jarak, kestabilan, frekuensi jatuh, rasa nyaman, dan partisipasi. Perubahan kecil tetap berarti jika membuat anak lebih mandiri atau lebih aman.</p>
      <p>Mintalah evaluasi ulang bila target tidak relevan lagi, anak mengalami perubahan kesehatan, alat bantu terasa tidak nyaman, atau latihan justru mengurangi partisipasi. Orang tua berhak memahami tujuan setiap aktivitas, risiko, dan cara mempraktikkannya. Artikel ini bersifat edukasi dan tidak menggantikan pemeriksaan dokter atau fisioterapis anak.</p>
      <h3>Membuat catatan kemajuan yang bisa dipakai bersama</h3>
      <p>Catatan kemajuan tidak perlu rumit. Buat satu lembar yang memuat tanggal, aktivitas, tingkat bantuan, respons anak, dan kondisi lingkungan. Gunakan istilah yang konsisten, misalnya bantuan penuh, bantuan sebagian, arahan verbal, atau mandiri. Foto dan video hanya digunakan bila diperlukan untuk konsultasi, disimpan dengan aman, dan tidak dibagikan tanpa persetujuan keluarga.</p>
      <p>Setiap dua sampai empat minggu, keluarga dapat meninjau catatan bersama guru atau fisioterapis. Cari pola yang membantu, bukan hanya daftar kegagalan. Mungkin anak lebih stabil pada pagi hari, lebih nyaman memakai alas tertentu, atau membutuhkan jeda setelah kegiatan ramai. Temuan seperti ini dapat menghasilkan penyesuaian yang langsung terasa dalam rutinitas.</p>
      <p>Jika kemampuan belum berpindah dari ruang terapi ke rumah atau sekolah, tim perlu membahas generalisasi. Generalisasi adalah kemampuan menerapkan keterampilan pada orang, tempat, dan situasi yang berbeda. Caranya dapat berupa latihan dengan alat yang tersedia di rumah, pengarahan singkat untuk guru, atau penyederhanaan langkah. Tujuan akhirnya bukan performa sempurna saat terapi, melainkan partisipasi yang aman dalam kehidupan sehari-hari.</p>
      <p>Selain kemampuan gerak, perhatikan pula kepercayaan diri anak. Beri kesempatan memilih aktivitas, akui usaha yang dilakukan, dan sediakan waktu istirahat. Dukungan yang menghargai pilihan anak membantu latihan terasa lebih aman. Bila anak menolak, cari penyebabnya bersama profesional daripada langsung menambah tekanan atau pengulangan.</p>
''',
"perbedaan-terapi-okupasi-dan-terapi-wicara": '''
      <h2 id="contoh-kebutuhan">Contoh Kebutuhan Anak dalam Situasi Sehari-hari</h2>
      <p>Perbedaan terapi okupasi dan terapi wicara paling mudah dipahami dari aktivitas nyata. Anak yang kesulitan memegang sendok, memakai pakaian, mengatur respons terhadap tekstur, atau bertahan duduk saat belajar mungkin membutuhkan asesmen terapi okupasi. Anak yang sulit memahami instruksi, menyusun kalimat, mengucapkan bunyi dengan jelas, atau bergiliran dalam percakapan mungkin membutuhkan asesmen terapi wicara.</p>
      <p>Namun satu perilaku dapat memiliki lebih dari satu penyebab. Anak yang tidak menjawab pertanyaan mungkin belum memahami bahasa, sedang kewalahan oleh suara, atau kesulitan mengatur perhatian. Anak yang menolak makan bisa mengalami tantangan sensorik, keterampilan gerak mulut, kondisi medis, atau kombinasi beberapa faktor. Karena itu, daftar tanda di internet tidak boleh dipakai untuk menentukan terapi secara mandiri.</p>
      <p>Menurut kami, contoh konkret dari rumah lebih membantu daripada istilah umum. Catat apa yang terjadi sebelum, selama, dan setelah kesulitan muncul. Informasi ini membantu profesional melihat pola dan menentukan asesmen yang relevan.</p>

      <h2 id="tabel-perbandingan">Tabel Perbandingan Terapi Okupasi dan Terapi Wicara</h2>
      <div style="overflow-x:auto;-webkit-overflow-scrolling:touch;margin:24px 0;"><table style="width:100%;min-width:620px;border-collapse:collapse;"><thead><tr style="background:#2B3A67;color:#fff;"><th style="padding:12px;text-align:left;">Aspek</th><th style="padding:12px;text-align:left;">Terapi okupasi</th><th style="padding:12px;text-align:left;">Terapi wicara</th></tr></thead><tbody><tr><td style="padding:12px;border-bottom:1px solid #ddd;">Fokus utama</td><td style="padding:12px;border-bottom:1px solid #ddd;">Kemandirian, motorik halus, pemrosesan sensorik, dan partisipasi</td><td style="padding:12px;border-bottom:1px solid #ddd;">Bahasa, bicara, komunikasi sosial, suara, dan fungsi komunikasi</td></tr><tr><td style="padding:12px;border-bottom:1px solid #ddd;">Contoh aktivitas</td><td style="padding:12px;border-bottom:1px solid #ddd;">Makan, berpakaian, menulis, bermain, dan mengikuti rutinitas</td><td style="padding:12px;border-bottom:1px solid #ddd;">Memahami instruksi, menyampaikan kebutuhan, percakapan, dan artikulasi</td></tr><tr><td style="padding:12px;border-bottom:1px solid #ddd;">Ukuran kemajuan</td><td style="padding:12px;border-bottom:1px solid #ddd;">Anak lebih mandiri dan mampu berpartisipasi</td><td style="padding:12px;border-bottom:1px solid #ddd;">Anak lebih mampu memahami dan menyampaikan pesan</td></tr></tbody></table></div>
      <p>Tabel ini adalah gambaran umum, bukan batas kaku. Beberapa terapis wicara menangani aspek makan dan menelan sesuai kompetensi, sedangkan terapis okupasi dapat mendukung komunikasi melalui regulasi sensorik dan akses aktivitas. Rencana layanan tetap mengikuti hasil asesmen serta regulasi profesi yang berlaku.</p>

      <h2 id="kapan-kolaborasi">Kapan Kolaborasi Dua Terapi Dibutuhkan?</h2>
      <p>Kolaborasi dapat dipertimbangkan ketika hambatan anak saling memengaruhi. Contohnya, anak sulit berkomunikasi saat lingkungan ramai dan juga kesulitan mengatur respons sensorik. Terapis okupasi dapat membantu strategi regulasi dan kesiapan mengikuti aktivitas, sedangkan terapis wicara mendukung pemahaman serta ekspresi komunikasi.</p>
      <p>Contoh lain adalah rutinitas makan. Terapi okupasi mungkin memperhatikan posisi duduk, toleransi tekstur, dan penggunaan alat makan. Terapis wicara dapat menilai fungsi komunikasi saat makan dan, sesuai kewenangan, aspek gerak mulut atau menelan. Bila ada batuk berulang, tersedak, penurunan berat badan, atau kekhawatiran medis, keluarga perlu berkonsultasi dengan dokter.</p>
      <p>Kolaborasi yang baik memakai tujuan bersama. Misalnya, anak mampu meminta bantuan saat memakai sepatu, mengikuti dua langkah rutinitas cuci tangan, atau berpartisipasi dalam permainan bergiliran. Dengan tujuan bersama, latihan tidak terasa seperti dua program terpisah.</p>

      <h2 id="pertanyaan-asesmen">Pertanyaan yang Perlu Dibawa Saat Asesmen</h2>
      <p>Orang tua berhak memahami alasan rekomendasi terapi. Tanyakan fungsi apa yang sedang dinilai, target beberapa minggu ke depan, cara mengukur kemajuan, latihan rumah yang aman, dan kapan evaluasi ulang dilakukan. Tanyakan juga bagaimana guru dapat menerapkan strategi yang sama di kelas.</p>
      <ul><li>Kesulitan mana yang menjadi prioritas dan mengapa?</li><li>Apa indikator kemajuan yang dapat diamati di rumah?</li><li>Apakah anak perlu satu layanan dahulu atau dua layanan sekaligus?</li><li>Bagaimana tim mencegah jadwal terapi membuat anak kelelahan?</li><li>Kapan keluarga perlu kembali ke dokter atau profesional lain?</li></ul>
      <p>Jawaban sebaiknya spesifik terhadap anak. Waspadai janji hasil pasti, paket seragam, atau latihan yang tidak dijelaskan manfaat dan risikonya. <a href="https://www.who.int/health-topics/rehabilitation" target="_blank" rel="noopener">WHO tentang rehabilitasi</a> menekankan fungsi dan interaksi individu dengan lingkungannya. Artinya, keluarga perlu dilibatkan dalam keputusan, bukan hanya menerima instruksi.</p>

      <h2 id="memantau-kemajuan">Memantau Kemajuan di Rumah dan Sekolah</h2>
      <p>Pilih indikator yang dekat dengan kehidupan anak. Untuk terapi okupasi, indikatornya dapat berupa tingkat bantuan saat berpakaian, durasi mengikuti aktivitas, atau kemampuan memakai alat tulis. Untuk terapi wicara, indikatornya dapat berupa kemampuan memahami instruksi, menyampaikan pilihan, memulai interaksi, atau memperjelas bunyi tertentu sesuai target profesional.</p>
      <p>Catat kemajuan mingguan, bukan setiap kegagalan kecil. Perkembangan anak tidak selalu lurus. Anak dapat menunjukkan kemampuan di ruang terapi tetapi belum menerapkannya di rumah karena lingkungan, orang, dan tuntutan berbeda. Generalisasi, yaitu kemampuan memakai keterampilan di berbagai situasi, perlu dilatih bersama keluarga dan guru.</p>
      <p>Jika tidak ada perubahan yang bermakna, bicarakan ulang target dan strategi. Menambah frekuensi terapi bukan satu-satunya jawaban. Kadang tujuan perlu dipersempit, lingkungan perlu disesuaikan, atau keluarga membutuhkan demonstrasi latihan yang lebih jelas. Baca juga panduan <a href="/artikel/terapi-fisik-untuk-abk">terapi fisik untuk ABK</a> untuk memahami pembagian peran layanan rehabilitasi lainnya.</p>
      <h3>Contoh pencatatan satu tujuan bersama</h3>
      <p>Misalnya, tujuan keluarga adalah anak mampu menyiapkan bekal sederhana. Terapis okupasi dapat membantu cara memegang wadah, membuka tutup, mengatur urutan gerak, dan menoleransi tekstur. Terapis wicara dapat membantu anak memahami instruksi, menyebut pilihan, meminta bantuan, dan menceritakan kembali urutan kegiatan. Guru dan orang tua kemudian memakai kata serta urutan yang sama agar anak tidak menerima instruksi yang saling bertentangan.</p>
      <p>Catat tingkat bantuan dan respons anak, bukan hanya berhasil atau gagal. Dalam minggu pertama anak mungkin membutuhkan contoh langsung. Minggu berikutnya cukup dengan gambar atau arahan verbal. Perubahan dari bantuan penuh menjadi bantuan sebagian sudah merupakan kemajuan yang dapat diukur. Bila strategi hanya berhasil dengan satu orang, tim dapat mencoba orang dan tempat berbeda secara bertahap.</p>
      <p>Koordinasi juga menjaga beban anak tetap wajar. Jadwal terapi yang terlalu padat dapat mengurangi waktu bermain, istirahat, dan interaksi keluarga. Tanyakan apakah dua target dapat dilatih melalui satu aktivitas yang menyenangkan. Dengan cara ini, terapi menjadi bagian dari rutinitas bermakna, bukan rangkaian tugas yang terpisah dari kehidupan anak.</p>
      <p>Pastikan anak tetap memiliki waktu untuk bermain bebas dan membangun relasi sosial. Terapi mendukung kehidupan anak, bukan menggantikan seluruh kegiatan masa kanak-kanak. Jika jadwal membuat anak terus kelelahan atau kehilangan kesempatan belajar bersama teman, keluarga perlu meninjau kembali prioritas bersama tim pendamping.</p>
'''
}

def inject_image(text, slug):
    if slug not in IMAGES or re.search(r'<article class="article-content".*?<img\b', text, re.S | re.I):
        return text
    src, alt, cap = IMAGES[slug]
    fig = f'''\n            <figure style="margin:24px 0;"><img src="{src}" alt="{alt}" style="width:100%;border-radius:12px;" loading="lazy"><figcaption style="text-align:center;color:#666;font-size:14px;font-style:italic;margin-top:8px;">{cap}</figcaption></figure>\n'''
    article_start = text.find('<article class="article-content"')
    second_h2 = list(re.finditer(r'<h2\b', text[article_start:], re.I))
    if len(second_h2) >= 2:
        pos = article_start + second_h2[1].start()
    elif second_h2:
        pos = article_start + second_h2[0].start()
    else:
        raise RuntimeError(f"No H2 found in {slug}")
    return text[:pos] + fig + text[pos:]

def inject_related(text, slug):
    if slug not in RELATED or f'batch-related-{DATE}' in text:
        return text
    links = ''.join(f'<li><a href="{href}">{anchor}</a></li>' for href, anchor in RELATED[slug])
    box = f'''\n        <aside class="related-reading" data-marker="batch-related-{DATE}" style="margin:2rem 0;padding:1.25rem;background:#F8F9FF;border-left:4px solid #2B3A67;border-radius:8px;"><h3 style="margin-top:0;">Bacaan Terkait untuk Langkah Berikutnya</h3><ul>{links}</ul></aside>\n'''
    m = re.search(r'<h2[^>]*id="faq"|<!-- FAQ', text, re.I)
    if not m:
        m = re.search(r'</article>', text, re.I)
    if not m:
        raise RuntimeError(f"No FAQ/article end found in {slug}")
    return text[:m.start()] + box + text[m.start():]

def inject_extension(text, slug):
    if slug not in EXTENSIONS or f'id="batch-depth-{DATE}"' in text:
        return text
    ext = f'\n      <section id="batch-depth-{DATE}">\n{EXTENSIONS[slug]}      </section>\n'
    m = re.search(r'<h2[^>]*id="faq"', text, re.I)
    if not m:
        raise RuntimeError(f"No FAQ found for extension in {slug}")
    return text[:m.start()] + ext + text[m.start():]

def extend_ilham(text):
    marker = f'batch-depth-{DATE}'
    if marker in text:
        return text
    snippet = f'''\n            <div id="{marker}" style="background:#F8F9FF;border-left:4px solid #2B3A67;border-radius:8px;padding:16px 20px;margin:20px 0;"><p style="margin:0;"><strong>Catatan untuk keluarga:</strong> kisah inspiratif tidak boleh menjadi standar tunggal bagi semua anak. Kemajuan dapat berbentuk komunikasi yang lebih jelas, rutinitas yang lebih mandiri, atau keberanian mencoba aktivitas baru. Fokuskan dukungan pada kebutuhan dan kekuatan anak, lalu diskusikan target realistis bersama guru serta profesional yang mendampingi.</p></div>\n'''
    needle = '<h2>Pesan untuk Keluarga dengan Anak Berkebutuhan Khusus</h2>'
    if needle not in text:
        raise RuntimeError('Ilham insertion point missing')
    return text.replace(needle, snippet + needle, 1)

def update_modified(text):
    return re.sub(r'("dateModified"\s*:\s*")[^"]+("|\s)', lambda m: m.group(1) + DATE + m.group(2), text)

changed=[]
for p in sorted(ART.glob('*.html')):
    slug=p.stem
    old=p.read_text(encoding='utf-8')
    new=inject_extension(old,slug)
    if slug == 'kisah-ilham-hafiz':
        new=extend_ilham(new)
    new=inject_image(new,slug)
    new=inject_related(new,slug)
    if new != old:
        new=update_modified(new)
        if '—' in new or '–' in new:
            raise RuntimeError(f"Dash found after edit: {slug}")
        p.write_text(new,encoding='utf-8')
        changed.append(slug)
print(f"changed={len(changed)}")
for s in changed: print(s)

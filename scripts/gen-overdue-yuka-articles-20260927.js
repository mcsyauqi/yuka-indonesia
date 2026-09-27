'use strict';

const fs = require('fs');
const path = require('path');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://www.yukaindonesia.com';
const DATE = '2026-09-27T14:00:00+07:00';
const DISPLAY_DATE = '27 September 2026';
const AUTHOR = {
  '@type': 'Person',
  '@id': `${SITE}/profil/bu-yupie-nurul-azkia#person`,
  name: 'Bu Yupie Nurul Azkia',
  url: `${SITE}/profil/bu-yupie-nurul-azkia`,
  image: `${SITE}/Team/Bu%20Yupie.webp`,
  jobTitle: 'Pendiri dan Pengajar Senior YUKA'
};

const sibling = fs.readFileSync(path.join(ROOT, 'artikel', 'mengelola-stres-orang-tua-anak-abk.html'), 'utf8');
const style = (sibling.match(/<style>[\s\S]*?<\/style>/) || [])[0];
const svgWa = (sibling.match(/class="share-btn whatsapp"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const svgFb = (sibling.match(/class="share-btn facebook"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
const svgX = (sibling.match(/class="share-btn twitter"[^>]*>(<svg[\s\S]*?<\/svg>)/) || [])[1];
if (!style || !svgWa || !svgFb || !svgX) throw new Error('canonical article style or share icon missing');

const extraStyle = `<style>
.article-inline-image { margin: 2.25rem 0; border-radius: 14px; overflow: hidden; background: #f7f8fb; box-shadow: 0 8px 26px rgba(0,0,0,.08); }
.article-inline-image img { display: block; width: 100%; height: auto; }
.article-inline-image figcaption { padding: .85rem 1rem; color: var(--gray-600); font-size: .88rem; line-height: 1.55; }
.article-inline-image figcaption strong { color: var(--gray-800); }
.note-box { background: #eef7ff; border-left: 4px solid #1976d2; padding: 1.25rem 1.5rem; margin: 2rem 0; border-radius: 0 12px 12px 0; }
.note-box h4 { margin-top: 0; color: #0d47a1; }
</style>`;

const ext = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;
const img = (src, alt, caption, width = 1200, height = 800) => `
            <figure class="article-inline-image">
                <img src="../${src}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async">
                <figcaption>${caption}</figcaption>
            </figure>`;

const sources = {
  cdcTreatment: 'https://www.cdc.gov/adhd/treatment/index.html',
  cdcBehavior: 'https://www.cdc.gov/adhd/treatment/behavior-therapy.html',
  cdcAbout: 'https://www.cdc.gov/adhd/about/index.html',
  aapBedtime: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Bedtime-Routines-for-School-Aged-Children.aspx',
  aapBrush: 'https://www.healthychildren.org/English/healthy-living/oral-health/Pages/Brush-Book-Bed.aspx',
  aapFamily: 'https://www.healthychildren.org/English/health-issues/conditions/chronic/Pages/How%20Chronic-Illness-Affects-the-Family.aspx',
  childMindMarriage: 'https://childmind.org/article/dont-let-a-childs-disorder-destroy-your-marriage/',
  childMindConflict: 'https://childmind.org/article/conflicts-over-parenting-styles/',
  aapCommunication: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Components-of-Good-Communication.aspx',
  sapa: 'https://laporsapa129.kemenpppa.go.id/'
};

const articles = [
  {
    slug: 'gangguan-tidur-anak-adhd-solusi',
    title: 'Gangguan Tidur Anak ADHD: Solusi untuk Membantu Anak Tidur Lebih Baik',
    meta: 'Gangguan tidur anak ADHD dapat terlihat dari sulit tidur, sering terbangun, atau mengantuk siang hari. Kenali solusi aman dan kapan perlu berkonsultasi.',
    ogTitle: 'Gangguan Tidur Anak ADHD: Solusi, Penyebab, dan Kapan Perlu ke Dokter',
    ogDesc: 'Panduan praktis untuk orang tua: memahami hubungan ADHD dan tidur, mencatat tanda gangguan, membangun rutinitas malam, dan mengetahui kapan perlu berkonsultasi dengan dokter.',
    image: {
      src: 'Dokumentasi/artikel/gangguan-tidur-anak-adhd-hero.webp',
      alt: 'Anak terlihat dari samping di kamar yang tenang dengan papan jadwal visual menjelang waktu tidur',
      caption: 'Rutinitas visual dapat membantu anak mengetahui urutan kegiatan sebelum tidur. Setiap anak tetap membutuhkan pendekatan yang disesuaikan dengan kebutuhannya.',
      width: 1200, height: 1200
    },
    keywords: 'gangguan tidur anak ADHD, anak ADHD susah tidur, cara membantu anak ADHD tidur, rutinitas tidur anak ADHD, insomnia ADHD anak',
    readTime: '12 menit baca',
    body: `
            <p><strong>Gangguan tidur pada anak ADHD dapat tampak sebagai sulit mulai tidur, waktu tidur yang mundur, sering terbangun, atau rasa mengantuk pada siang hari.</strong> Masalah ini tidak boleh langsung dianggap sebagai anak sengaja melawan. Anak mungkin membutuhkan bantuan untuk memperlambat aktivitas, memahami urutan malam, atau menyesuaikan rencana perawatan bersama dokter.</p>

            <p>Artikel ini membahas langkah yang dapat dilakukan keluarga tanpa menggantikan pemeriksaan medis. <a href="/artikel/adhd-adalah">ADHD</a> tidak dapat ditegakkan hanya dari satu tanda, begitu juga gangguan tidur perlu dilihat dari pola yang berulang dan dampaknya pada fungsi anak. Catat pola selama beberapa hari, lalu bawa catatan itu saat berkonsultasi.</p>

            <div class="note-box">
                <h4>Catatan keamanan</h4>
                <p style="margin-bottom:0;">Jangan memberi obat tidur, suplemen, atau mengubah waktu dan dosis obat ADHD tanpa arahan dokter. <strong>CDC</strong> menyebut beberapa obat stimulan dapat berhubungan dengan kesulitan tidur, sehingga perubahan atau efek samping perlu dibicarakan dengan tenaga kesehatan, bukan diatasi sendiri.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#hubungan">Mengapa ADHD dan tidur bisa saling memengaruhi</a></li>
                    <li><a href="#tanda">Tanda gangguan tidur yang perlu dicatat</a></li>
                    <li><a href="#faktor">Faktor yang mungkin berperan</a></li>
                    <li><a href="#rutinitas">Membangun rutinitas malam yang realistis</a></li>
                    <li><a href="#kamar">Menyiapkan kamar dan transisi yang lebih tenang</a></li>
                    <li><a href="#dokter">Kapan perlu berkonsultasi</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="hubungan">Mengapa ADHD dan Tidur Bisa Saling Memengaruhi?</h2>
            <p>Tidur membantu anak memulihkan energi, mengatur emosi, dan siap mengikuti kegiatan esok hari. Sebaliknya, anak yang terlalu lelah dapat terlihat lebih mudah marah, sulit memusatkan perhatian, atau lebih aktif. Tanda-tanda ini bisa menyerupai atau memperberat kesulitan yang sudah ada pada ADHD. Karena itu, keluarga sebaiknya tidak menyimpulkan bahwa setiap masalah malam pasti disebabkan ADHD.</p>
            <p>${ext(sources.cdcAbout, 'CDC') } memasukkan tidur sesuai kebutuhan usia sebagai salah satu kebiasaan sehat untuk anak dengan ADHD. ${ext(sources.cdcTreatment, 'CDC') } juga menjelaskan bahwa rencana penanganan perlu disesuaikan dengan anak, keluarga, dan lingkungannya. Artinya, tidur bukan perlombaan untuk membuat anak langsung pulas, tetapi bagian dari fungsi harian yang perlu diamati bersama.</p>
            <p>Hubungan itu bisa berjalan dua arah. Kesulitan memulai tidur membuat pagi terasa berat. Pagi yang tergesa-gesa kemudian meningkatkan konflik, tugas tertunda, dan kelelahan seluruh keluarga. Memutus siklusnya dapat dimulai dari satu perubahan kecil yang konsisten, bukan sepuluh aturan baru sekaligus.</p>

            <h2 id="tanda">Tanda Gangguan Tidur yang Perlu Dicatat</h2>
            <p>Selama satu sampai dua minggu, tulis waktu anak masuk tempat tidur, perkiraan waktu tertidur, kapan terbangun, dan bagaimana kondisinya pada siang hari. Catatan sederhana membantu membedakan kejadian sesekali dari pola yang menetap. Beberapa hal yang layak dicatat antara lain:</p>
            <ul>
                <li>anak membutuhkan waktu sangat lama untuk tertidur hampir setiap malam;</li>
                <li>jadwal tidur terus bergeser sampai jauh lebih malam daripada kebutuhan keluarga;</li>
                <li>anak sering terbangun, mendengkur keras, terengah, atau tampak kesulitan bernapas;</li>
                <li>anak sangat mengantuk, mudah tertidur di kendaraan, atau sulit bangun meskipun durasi di tempat tidur terlihat cukup;</li>
                <li>emosi dan perhatian berubah nyata setelah beberapa malam tidur buruk; atau</li>
                <li>orang tua harus mendampingi dengan cara yang makin berat agar anak mau tidur.</li>
            </ul>
            ${img('Dokumentasi/artikel/gangguan-tidur-anak-adhd-siang.webp', 'Anak-anak tertidur di dalam kendaraan saat perjalanan siang', '<strong>Contoh situasi yang perlu dibedakan:</strong> tertidur di kendaraan bukan bukti otomatis adanya gangguan tidur, tetapi rasa kantuk pada siang hari patut dicatat bersama pola tidur malam dan dibicarakan bila berulang.', 867, 1156)}
            <p>Foto atau catatan bukan alat diagnosis. Fungsinya adalah memberi gambaran yang lebih konkret kepada dokter. Bila ada jeda napas, dengkuran keras, gerakan kaki yang mengganggu, atau keluhan fisik lain, tuliskan juga karena mungkin membutuhkan pemeriksaan berbeda.</p>

            <h2 id="faktor">Faktor yang Mungkin Berperan</h2>
            <p>Tidak ada satu penyebab yang berlaku untuk semua anak. Beberapa faktor dapat muncul bersamaan:</p>
            <ol>
                <li><strong>Aktivitas dan rangsangan menjelang malam.</strong> Permainan aktif, layar, suara ramai, atau percakapan yang menegangkan dapat membuat tubuh belum siap beristirahat.</li>
                <li><strong>Transisi yang mendadak.</strong> Anak yang kesulitan berpindah kegiatan bisa merasa waktu tidur datang terlalu cepat. Peringatan dan urutan yang dapat diprediksi membantu transisi.</li>
                <li><strong>Kecemasan atau kekhawatiran.</strong> Pertanyaan yang muncul ketika lampu dimatikan perlu didengarkan. Bila kecemasan menetap, minta bantuan tenaga kesehatan.</li>
                <li><strong>Lingkungan tidur.</strong> Cahaya, suhu, suara, kasur, atau kebiasaan tidur bersama dapat memengaruhi kenyamanan. Perubahan dilakukan bertahap agar anak tidak merasa kehilangan kendali.</li>
                <li><strong>Rencana perawatan dan obat.</strong> ${ext(sources.cdcTreatment, 'CDC') } menyebut kesulitan tidur dapat menjadi efek samping sebagian obat stimulan. Jangan menghentikan atau memajukan jadwal obat sendiri. Sampaikan waktu minum obat, waktu makan, dan pola tidur kepada dokter.</li>
            </ol>
            <p>Pada sebagian anak, masalah tidur juga dapat berkaitan dengan kondisi lain. Itu alasan mengapa artikel internet tidak cukup untuk menentukan penyebab. Tugas keluarga adalah mengamati, menjaga kebiasaan dasar, dan membawa informasi yang rapi ke tenaga kesehatan.</p>

            <h2 id="rutinitas">Membangun Rutinitas Malam yang Realistis</h2>
            <p>${ext(sources.aapBedtime, 'American Academy of Pediatrics melalui HealthyChildren.org') } menyarankan rutinitas tidur yang konsisten dan dapat diprediksi. Keluarga tidak perlu membuat ritual panjang. Pilih tiga sampai lima langkah yang dapat diulang dalam urutan sama, misalnya merapikan barang, mandi atau cuci muka, sikat gigi, membaca singkat, lalu lampu redup.</p>
            <p>Gunakan kalimat pendek dan satu instruksi pada satu waktu. Beri pilihan terbatas, seperti memilih piyama biru atau hijau, agar anak merasa memiliki kendali tanpa membuka negosiasi baru yang panjang. Jika anak belum siap, berikan pengingat beberapa menit sebelum perpindahan, lalu ulangi dengan nada yang sama.</p>
            ${img('Dokumentasi/artikel/gangguan-tidur-anak-adhd-jadwal.webp', 'Kartu-kartu jadwal visual tersusun sebagai urutan kegiatan anak', '<strong>Jadwal visual untuk transisi:</strong> kartu gambar dapat membantu anak melihat urutan kegiatan. Isi kartu sebaiknya sederhana dan disesuaikan dengan kemampuan membaca serta bahasa anak.', 1200, 1200)}
            <p>Letakkan jadwal di tempat yang dapat dilihat anak, bukan hanya disimpan di ponsel orang tua. Tandai langkah yang sudah selesai dengan cara yang menyenangkan. Bila satu langkah selalu memicu konflik, pecah menjadi bagian yang lebih kecil atau evaluasi apakah waktunya terlalu mepet.</p>
            <p>Jaga jam bangun agar relatif konsisten dan atur kegiatan pagi supaya tidak selalu terburu-buru. Bila perubahan jadwal diperlukan, lakukan perlahan dan perhatikan respons anak. Tujuan rutinitas bukan kesempurnaan. Tujuannya adalah membuat malam lebih mudah dipahami dan lebih aman.</p>

            <h2 id="kamar">Menyiapkan Kamar dan Transisi yang Lebih Tenang</h2>
            <p>Mulailah dari hal yang paling mengganggu. Jika cahaya dari luar membuat anak sulit rileks, gunakan tirai. Jika suara tertentu mengganggu, kurangi sumbernya. Hindari menjadikan kamar sebagai tempat hukuman. Kamar sebaiknya tetap diasosiasikan dengan rasa aman dan istirahat.</p>
            <p>Aktivitas menenangkan dapat berupa membaca, menggambar ringan, mendengarkan musik lembut, atau latihan napas sederhana. Gambar berikut adalah contoh ruang aktivitas yang tertata, bukan resep terapi ADHD. ${ext(sources.cdcBehavior, 'CDC') } menekankan bahwa strategi perilaku dan pelatihan orang tua perlu dibahas dengan tenaga kesehatan yang memahami kebutuhan anak.</p>
            ${img('Dokumentasi/artikel/gangguan-tidur-anak-adhd-tenang.webp', 'Ruang aktivitas anak yang tenang dengan alat musik sederhana dan papan urutan kegiatan', '<strong>Ruang yang terstruktur:</strong> area tenang dan urutan kegiatan yang jelas dapat membantu sebagian anak mengurangi rangsangan sebelum tidur. Efeknya berbeda pada tiap anak dan bukan pengganti terapi medis.', 900, 675)}
            <p>Batasi layar menjelang tidur bila layar membuat anak makin terjaga. Ganti dengan aktivitas yang lebih pelan, tetapi tetap beri masa transisi. Anak tidak selalu bisa berpindah dari video yang seru ke tempat tidur dalam satu detik hanya karena orang dewasa meminta.</p>
            <p>Orang tua juga perlu menyepakati respons yang sama. Bila satu orang terus memperpanjang negosiasi sementara yang lain mematikan lampu lebih cepat, anak menerima pesan yang berbeda. Bicarakan aturan saat semua orang sedang tenang, bukan ketika konflik sedang berlangsung.</p>

            <h2 id="dokter">Kapan Perlu Berkonsultasi?</h2>
            <p>Buat janji dengan dokter anak, psikiater anak, atau tenaga kesehatan yang menangani ADHD bila gangguan tidur berlangsung terus, mengganggu sekolah dan keselamatan, atau membuat keluarga tidak sanggup menjalankan hari. Bawa catatan tidur, daftar obat dan suplemen, waktu pemberian obat, serta perubahan yang sudah dicoba.</p>
            <p>Konsultasi lebih segera bila anak mendengkur keras, sering terengah atau berhenti bernapas, mengalami kantuk berat pada siang hari, berjalan saat tidur dan berisiko cedera, atau menunjukkan perubahan perilaku yang sangat berbeda. Bila ada keadaan darurat pernapasan atau keselamatan, cari layanan gawat darurat.</p>
            <p>Dokter mungkin menanyakan kebiasaan tidur, kesehatan fisik, suasana hati, kecemasan, dan jadwal sekolah. Pemeriksaan itu bukan berarti orang tua gagal membuat rutinitas. Justru informasi keluarga membantu tenaga kesehatan memilih langkah yang lebih tepat. ${ext(sources.cdcTreatment, 'CDC') } juga menganjurkan agar orang tua bekerja sama dengan tenaga kesehatan, guru, dan anggota keluarga lain dalam menyusun dukungan anak.</p>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            <h3>Apakah semua anak ADHD pasti mengalami gangguan tidur?</h3>
            <p>Tidak. Sebagian anak ADHD mengalami masalah tidur, tetapi tidak semua. Pola tidur dipengaruhi usia, kesehatan, lingkungan, rutinitas, kecemasan, dan rencana perawatan. Amati anak sebagai individu dan hindari menyamakan semua perilaku dengan ADHD.</p>
            <h3>Apakah melatonin aman untuk anak ADHD?</h3>
            <p>Jangan memulai melatonin atau suplemen lain tanpa berdiskusi dengan dokter. Dokter perlu menilai penyebab gangguan tidur, obat lain, usia, kondisi kesehatan, dan rencana pemantauan. Suplemen bukan jalan pintas untuk menggantikan evaluasi.</p>
            <h3>Bagaimana jika anak menolak jadwal visual?</h3>
            <p>Mulai dari dua atau tiga langkah yang paling mudah dan biarkan anak memilih bentuk penanda yang disukai. Gunakan jadwal sebagai bantuan, bukan ancaman. Jika penolakan tetap kuat, tanyakan apakah gambar, urutan, bahasa, atau waktu pengenalan jadwal perlu diubah.</p>
            <h3>Apakah tidur siang harus dilarang?</h3>
            <p>Tidak ada aturan yang sama untuk semua usia. Perhatikan apakah tidur siang terlalu sore membuat anak makin sulit tidur malam. Diskusikan kebutuhan tidur anak dengan dokter, terutama bila anak tetap sangat mengantuk pada siang hari.</p>

            <h2>Pendampingan di YUKA</h2>
            <p>YUKA mendampingi pendidikan anak berkebutuhan khusus dan dapat membantu keluarga membicarakan rutinitas belajar serta kebutuhan dukungan di sekolah. YUKA bukan layanan diagnosis atau pengobatan gangguan tidur. Untuk keluhan medis, konsultasikan anak ke tenaga kesehatan. Informasi pendidikan inklusi tersedia di <a href="/sekolah-inklusi-sleman">Sekolah Inklusi Taruna Imani Sleman</a>.</p>

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card"><h4><a href="/artikel/terapi-adhd-pada-anak">Terapi ADHD pada Anak</a></h4><p>Pilihan penanganan sesuai usia dan peran orang tua.</p></div>
                <div class="related-card"><h4><a href="/artikel/jadwal-visual-anak-autis">Jadwal Visual Anak</a></h4><p>Mengenal bantuan visual untuk rutinitas yang lebih terprediksi.</p></div>
                <div class="related-card"><h4><a href="/artikel/mengelola-stres-orang-tua-anak-abk">Mengelola Stres Orang Tua Anak ABK</a></h4><p>Langkah menjaga kesehatan mental pengasuh.</p></div>
            </div>`,
    tags: ['GangguanTidur', 'ADHD', 'PengasuhanAnak', 'RutinitasAnak', 'ABK', 'YUKA'],
    faqs: [
      ['Apakah semua anak ADHD pasti mengalami gangguan tidur?', 'Tidak. Sebagian anak ADHD mengalami masalah tidur, tetapi tidak semua. Pola tidur dipengaruhi usia, kesehatan, lingkungan, rutinitas, kecemasan, dan rencana perawatan.'],
      ['Apakah melatonin aman untuk anak ADHD?', 'Jangan memulai melatonin atau suplemen lain tanpa berdiskusi dengan dokter. Evaluasi perlu mempertimbangkan penyebab gangguan tidur, usia, kondisi kesehatan, serta obat lain yang sedang digunakan.'],
      ['Bagaimana jika anak menolak jadwal visual?', 'Mulai dari dua atau tiga langkah yang mudah, gunakan pilihan terbatas, dan kenalkan jadwal saat anak tenang. Jadwal visual seharusnya menjadi bantuan, bukan ancaman.']
    ],
    sourceItems: [
      [sources.cdcTreatment, 'Treatment of ADHD, Centers for Disease Control and Prevention'],
      [sources.cdcBehavior, 'Parent Training in Behavior Management, Centers for Disease Control and Prevention'],
      [sources.cdcAbout, 'ADHD in Children, Centers for Disease Control and Prevention'],
      [sources.aapBedtime, 'Bedtime Routines for School-Aged Children, American Academy of Pediatrics / HealthyChildren.org'],
      [sources.aapBrush, 'Brush, Book, Bed: How to Structure Your Child’s Nighttime Routine, American Academy of Pediatrics / HealthyChildren.org']
    ]
  },
  {
    slug: 'hubungan-suami-istri-dengan-anak-abk-tips',
    title: 'Hubungan Suami Istri dengan Anak ABK: Tips Tetap Kompak',
    meta: 'Hubungan suami istri dengan anak ABK perlu dirawat lewat pembagian peran, waktu berdua, dan komunikasi yang tidak saling menyalahkan. Baca tipsnya.',
    ogTitle: 'Hubungan Suami Istri dengan Anak ABK: Tips Membagi Peran dan Tetap Kompak',
    ogDesc: 'Panduan praktis untuk pasangan yang membesarkan anak berkebutuhan khusus: membagi beban, mengelola perbedaan pengasuhan, menjaga waktu berdua, dan mencari bantuan.',
    image: {
      src: 'Dokumentasi/artikel/hubungan-suami-istri-anak-abk-hero.webp',
      alt: 'Keluarga belajar bersama di rumah dalam suasana tenang, dengan wajah tidak menjadi fokus gambar',
      caption: 'Pengasuhan anak berkebutuhan khusus lebih mudah dijalani ketika orang dewasa berbagi informasi, peran, dan waktu untuk saling memulihkan.',
      width: 1209, height: 907
    },
    keywords: 'hubungan suami istri dengan anak ABK, pasangan orang tua anak berkebutuhan khusus, menjaga pernikahan saat mengasuh anak ABK, pembagian peran orang tua ABK',
    readTime: '12 menit baca',
    body: `
            <p><strong>Menjaga hubungan suami istri dengan anak ABK bukan berarti mengabaikan kebutuhan anak.</strong> Justru hubungan pasangan yang dirawat dapat menjadi salah satu sumber tenaga bagi keluarga. Kuncinya bukan mencari pasangan yang selalu sepakat, tetapi membangun cara bekerja sama ketika jadwal terapi, kebutuhan sekolah, dan emosi anak menguras energi.</p>

            <p>Orang tua anak berkebutuhan khusus dapat mengalami kurang tidur, beban biaya, ketidakpastian masa depan, komentar keluarga besar, dan pembagian tugas yang tidak seimbang. Bila percakapan pasangan hanya terjadi saat ada masalah anak, keduanya mudah merasa menjadi rekan kerja tanpa sempat kembali menjadi suami dan istri.</p>

            <div class="note-box">
                <h4>Keselamatan tetap prioritas</h4>
                <p style="margin-bottom:0;">Perbedaan pendapat masih dapat dibicarakan. Kekerasan, ancaman, kontrol finansial, atau rasa takut bukan sekadar masalah komunikasi. Jika ada kekerasan terhadap perempuan atau anak, cari bantuan dan gunakan layanan resmi seperti <a href="${sources.sapa}" target="_blank" rel="noopener">SAPA 129</a>. Keselamatan tidak boleh ditunda demi menjaga tampilan keluarga.</p>
            </div>

            <div class="toc">
                <h3>Daftar Isi</h3>
                <ol>
                    <li><a href="#beban">Mengapa pasangan mudah menjauh</a></li>
                    <li><a href="#peta">Menyusun peta kebutuhan keluarga</a></li>
                    <li><a href="#peran">Membagi beban yang terlihat dan tidak terlihat</a></li>
                    <li><a href="#bicara">Membicarakan perbedaan pengasuhan</a></li>
                    <li><a href="#waktu">Menjaga waktu berdua dengan cara realistis</a></li>
                    <li><a href="#bantuan">Kapan perlu melibatkan keluarga atau profesional</a></li>
                    <li><a href="#faq">Pertanyaan yang sering diajukan</a></li>
                </ol>
            </div>

            <h2 id="beban">Mengapa Pasangan Mudah Menjauh?</h2>
            <p>Ketika kebutuhan anak tinggi, orang tua cenderung masuk ke mode bertahan: siapa yang mengantar, siapa yang menyiapkan makan, siapa yang menemani terapi, dan siapa yang menjawab pesan sekolah. Mode ini penting untuk melewati hari, tetapi bila berlangsung terus, hubungan pasangan kehilangan ruang untuk percakapan yang tidak berisi daftar tugas.</p>
            <p>${ext(sources.aapFamily, 'American Academy of Pediatrics melalui HealthyChildren.org') } menjelaskan bahwa kondisi kronis atau disabilitas dapat memengaruhi seluruh keluarga. Dukungan dari dokter, psikolog, pekerja sosial, keluarga besar, kelompok dukungan, dan komunitas dapat membantu keluarga memproses masalah. Meminta bantuan bukan bukti pasangan gagal mengasuh anak.</p>
            <p>Pasangan juga dapat memiliki cara berduka dan menyesuaikan diri yang berbeda. Satu orang banyak mencari informasi, sementara yang lain diam. Satu orang ingin segera mencoba layanan, yang lain takut biaya atau kecewa lagi. Perbedaan ini tidak otomatis berarti salah satu tidak peduli. Yang perlu dibangun adalah ruang untuk memahami alasan di balik respons tersebut.</p>

            <h2 id="peta">Menyusun Peta Kebutuhan Keluarga</h2>
            <p>Pilih waktu 20 sampai 30 menit ketika anak aman dan tidak ada janji yang mendesak. Tulis kebutuhan keluarga dalam empat kelompok: kebutuhan anak, kebutuhan rumah tangga, kebutuhan masing-masing orang tua, dan kebutuhan hubungan pasangan. Hindari langsung mencari solusi. Tahap pertama cukup menyamakan peta.</p>
            <p>Contoh pertanyaan yang dapat dijawab bersama:</p>
            <ul>
                <li>Bagian hari apa yang paling sering membuat keluarga kewalahan?</li>
                <li>Tugas apa yang hanya diketahui oleh satu orang karena informasinya tersimpan di kepala?</li>
                <li>Kapan masing-masing orang tua terakhir beristirahat tanpa merasa harus siaga?</li>
                <li>Aktivitas sederhana apa yang masih membuat pasangan merasa dekat?</li>
                <li>Siapa orang yang dapat dihubungi jika salah satu orang tua sakit atau kelelahan?</li>
            </ul>
            ${img('Dokumentasi/artikel/hubungan-suami-istri-anak-abk-aktivitas.webp', 'Keluarga melakukan kegiatan kerajinan bersama di rumah', '<strong>Aktivitas bersama yang sederhana:</strong> kegiatan keluarga tidak harus mahal atau sempurna. Yang penting adalah ada ruang berbagi pengalaman tanpa menjadikan anak sebagai sumber masalah dalam percakapan.', 936, 1248)}
            <p>Foto ini bukan dokumentasi keluarga tertentu yang sedang menjalani kondisi ABK. Ia hanya menggambarkan kegiatan bersama sebagai contoh visual. Dalam praktiknya, aktivitas dipilih berdasarkan usia, kemampuan, sensorik, dan minat anak.</p>

            <h2 id="peran">Membagi Beban yang Terlihat dan Tidak Terlihat</h2>
            <p>Pembagian tugas sering gagal karena yang dibagi hanya pekerjaan fisik. Beban yang tidak terlihat juga perlu dihitung: mengingat jadwal, mengisi formulir, mencari informasi, menghubungi guru, menyimpan hasil asesmen, membeli perlengkapan, dan memikirkan rencana jika anak sakit.</p>
            <p>Buat daftar mingguan, lalu sepakati tiga hal: pemilik tugas, batas waktu, dan rencana cadangan. Pemilik tugas berarti orang yang memastikan tugas selesai, bukan berarti ia harus selalu mengerjakan semuanya sendiri. Misalnya, satu orang memegang komunikasi sekolah, sementara pasangannya menyiapkan dokumen dan mengantar saat jadwal bertabrakan.</p>
            <p>Adil tidak selalu berarti 50:50 setiap hari. Pembagian dapat berubah sesuai jam kerja, kondisi kesehatan, atau kebutuhan anak. Yang penting perubahan dibicarakan, bukan diasumsikan. Periksa daftar seminggu sekali dan tanyakan, "Apakah pembagian ini masih masuk akal?" bukan, "Mengapa kamu tidak membantu?"</p>
            <p>${ext(sources.aapCommunication, 'HealthyChildren.org') } menekankan pentingnya komunikasi yang jelas dan positif di rumah. Dalam konteks pasangan, kalimat yang spesifik lebih membantu daripada tuduhan umum. Katakan, "Aku membutuhkan kamu mengambil alih rutinitas mandi malam ini," daripada, "Kamu tidak pernah membantu."</p>

            <h2 id="bicara">Membicarakan Perbedaan Pengasuhan</h2>
            <p>Perbedaan pendekatan dapat muncul pada disiplin, penggunaan gawai, pilihan terapi, sekolah, atau cara merespons ledakan emosi anak. ${ext(sources.childMindConflict, 'Child Mind Institute') } membedakan perbedaan gaya yang masih dapat dinegosiasikan dari konflik yang berakar pada kurangnya niat baik atau rasa hormat.</p>
            <p>Gunakan aturan percakapan tiga langkah:</p>
            <ol>
                <li><strong>Mulai dari tujuan bersama.</strong> Contoh: "Kita sama-sama ingin anak aman dan belajar mengelola transisi."</li>
                <li><strong>Pisahkan fakta dari kekhawatiran.</strong> Tulis apa yang benar-benar terjadi, kapan terjadi, dan apa yang sudah dicoba. Hindari label seperti malas, keras kepala, atau tidak peduli.</li>
                <li><strong>Pilih uji coba terbatas.</strong> Sepakati satu strategi selama satu atau dua minggu, tentukan tanda yang diamati, lalu evaluasi. Tidak semua keputusan harus menjadi keputusan seumur hidup.</li>
            </ol>
            <p>Jangan menjadikan anak sebagai hakim atau kurir konflik. Hindari bertanya kepada anak siapa yang benar, menyampaikan pesan melalui anak, atau membantah pasangan di depan anak bila percakapan dapat ditunda. Jika harus berbeda di depan anak, tunjukkan bahwa orang dewasa dapat berhenti, menarik napas, dan membicarakan ulang dengan aman.</p>
            ${img('Dokumentasi/artikel/hubungan-suami-istri-anak-abk-komunikasi.webp', 'Dua orang dewasa belajar dan berdiskusi bersama di ruang rumah', '<strong>Komunikasi adalah keterampilan yang dilatih:</strong> visual ini dipakai sebagai ilustrasi percakapan terarah, bukan sebagai potret pasangan tertentu. Pilih waktu bicara ketika anak aman dan kedua orang tua cukup tenang.', 1209, 907)}

            <h2 id="waktu">Menjaga Waktu Berdua dengan Cara Realistis</h2>
            <p>Waktu berdua tidak harus berupa makan malam mahal atau perjalanan jauh. Banyak pasangan menunggu keadaan benar-benar longgar, lalu tidak pernah punya waktu. Mulailah dengan bentuk yang dapat dilakukan: minum teh 15 menit setelah anak tidur, berjalan singkat bergantian, menonton satu episode, atau mengirim pesan yang tidak berisi urusan terapi.</p>
            <p>${ext(sources.childMindMarriage, 'Child Mind Institute') } menyarankan pasangan orang tua anak dengan kebutuhan kesehatan mental untuk melindungi hubungan mereka dan memiliki waktu bersama tanpa selalu membicarakan anak. Prinsipnya bukan menghindari tanggung jawab, melainkan mengingat bahwa hubungan pasangan juga perlu dirawat agar keduanya memiliki tempat untuk pulih.</p>
            <p>Sepakati waktu yang dilindungi dan rencana cadangan. Bila anak membutuhkan pengawasan terus-menerus, libatkan orang yang sudah dikenal dan memahami kebutuhannya. Jika belum ada pengasuh yang aman, buat versi mikro di rumah. Sepuluh menit yang benar-benar hadir lebih bermakna daripada dua jam yang diisi telepon kerja dan rasa bersalah.</p>
            ${img('Dokumentasi/artikel/hubungan-suami-istri-anak-abk-waktu-berdua.webp', 'Dua orang dewasa duduk belajar bersama dalam suasana rumah yang tenang', '<strong>Waktu berdua dapat dimulai dari hal kecil:</strong> percakapan singkat yang tidak membahas jadwal anak memberi pasangan kesempatan untuk kembali saling mengenal, meski hanya beberapa menit.', 1209, 907)}
            <p>Buat aturan sederhana untuk waktu berdua, misalnya tidak membahas masalah besar selama sepuluh menit pertama atau masing-masing menyebutkan satu hal yang dihargai dari pasangan. Bila salah satu sedang sangat lelah, fokus pada kehadiran dan bukan produktivitas.</p>

            <h2 id="bantuan">Kapan Perlu Melibatkan Keluarga atau Profesional?</h2>
            <p>Mintalah bantuan sebelum konflik menjadi krisis. Tanda keluarga membutuhkan dukungan tambahan antara lain pertengkaran berlangsung hampir setiap hari, salah satu orang tua merasa sendirian memikul semua tugas, komunikasi selalu berujung ancaman, tidur dan pekerjaan terganggu, atau pasangan sudah tidak mampu membicarakan kebutuhan anak tanpa saling menyalahkan.</p>
            <p>Mulai dari sumber yang paling mudah dijangkau: dokter anak, psikolog, psikiater, pekerja sosial, guru, kelompok orang tua, atau keluarga yang dapat dipercaya. Konseling pasangan dapat membantu menyusun komunikasi dan pembagian tugas, tetapi harus dilakukan dalam kondisi aman. Jika ada kekerasan, dukungan keselamatan dan layanan perlindungan lebih mendesak daripada konseling bersama.</p>
            <p>Siapkan informasi agar bantuan tidak dimulai dari nol: jadwal anak, tugas yang paling berat, konflik yang berulang, dukungan yang sudah ada, dan hasil yang ingin dicapai. Tujuannya bukan mencari pasangan yang harus disalahkan, tetapi membuat sistem keluarga lebih aman dan dapat dijalankan.</p>
            <div class="story-highlight">
                <h3>Checklist percakapan mingguan</h3>
                <ul style="margin-bottom:0;">
                    <li>Satu hal yang berjalan baik minggu ini.</li>
                    <li>Satu tugas yang paling menguras tenaga.</li>
                    <li>Satu bantuan konkret yang dibutuhkan dari pasangan.</li>
                    <li>Satu waktu singkat untuk berdua.</li>
                    <li>Satu keputusan yang perlu dibicarakan dengan tenaga profesional atau sekolah.</li>
                </ul>
            </div>

            <h2 id="faq">Pertanyaan yang Sering Diajukan</h2>
            <h3>Apakah merawat hubungan pasangan berarti mengurangi perhatian kepada anak?</h3>
            <p>Tidak. Hubungan pasangan yang lebih terawat dapat membantu orang tua berbagi informasi, mengurangi kelelahan, dan bekerja lebih konsisten. Waktu berdua bisa sangat singkat dan perlu disesuaikan dengan keamanan serta kebutuhan anak.</p>
            <h3>Bagaimana jika pasangan tidak mau membagi tugas?</h3>
            <p>Mulai dengan daftar tugas yang konkret dan percakapan pada waktu tenang. Jelaskan dampak tugas yang belum terbagi dan minta satu perubahan spesifik. Jika pola tidak berubah atau disertai penghinaan, ancaman, kontrol, atau kekerasan, cari bantuan profesional dan dukungan keselamatan.</p>
            <h3>Apakah kami harus selalu memakai cara pengasuhan yang sama?</h3>
            <p>Tidak harus identik, tetapi aturan keselamatan dan pesan utama perlu konsisten. Perbedaan kecil dapat dibicarakan melalui uji coba terbatas. Hindari merendahkan pasangan di depan anak atau membuat anak memilih pihak.</p>
            <h3>Kapan konseling pasangan tidak aman?</h3>
            <p>Konseling bersama tidak menjadi pilihan pertama bila ada kekerasan, ancaman, ketakutan, atau kontrol yang membuat salah satu pihak tidak bebas bicara. Utamakan layanan perlindungan, pendamping yang aman, dan rencana keselamatan.</p>

            <h2>Pendampingan di YUKA</h2>
            <p>YUKA mendampingi pendidikan inklusi dan dapat menjadi salah satu sumber informasi pendidikan bagi keluarga. YUKA bukan layanan konseling pasangan, diagnosis, atau penanganan kekerasan. Untuk kebutuhan medis dan psikologis, hubungi tenaga profesional. Untuk informasi program pendidikan, kunjungi <a href="/sekolah-inklusi-sleman">Sekolah Inklusi Taruna Imani Sleman</a> dan halaman <a href="/konsultasi-abk-sleman">konsultasi ABK Sleman</a>.</p>

            <h2>Artikel Terkait</h2>
            <div class="related-articles">
                <div class="related-card"><h4><a href="/artikel/dukungan-keluarga-anak-abk">Dukungan Keluarga Anak ABK</a></h4><p>Gagasan membagi peran agar pengasuhan tidak bertumpu pada satu orang.</p></div>
                <div class="related-card"><h4><a href="/artikel/mengelola-stres-orang-tua-anak-abk">Mengelola Stres Orang Tua Anak ABK</a></h4><p>Mengenali tanda stres dan mencari bantuan yang tepat.</p></div>
                <div class="related-card"><h4><a href="/artikel/peran-orang-tua-pendidikan-inklusi">Peran Orang Tua dalam Pendidikan Inklusi</a></h4><p>Menjalin kerja sama dengan sekolah dan pendamping anak.</p></div>
            </div>`,
    tags: ['KeluargaABK', 'Pernikahan', 'PengasuhanAnak', 'DukunganKeluarga', 'PendidikanInklusi', 'YUKA'],
    faqs: [
      ['Apakah merawat hubungan pasangan berarti mengurangi perhatian kepada anak?', 'Tidak. Hubungan pasangan yang lebih terawat dapat membantu orang tua berbagi informasi, mengurangi kelelahan, dan bekerja lebih konsisten. Waktu berdua perlu disesuaikan dengan keamanan serta kebutuhan anak.'],
      ['Bagaimana jika pasangan tidak mau membagi tugas?', 'Mulai dengan daftar tugas yang konkret dan minta satu perubahan spesifik pada waktu tenang. Jika pola disertai penghinaan, ancaman, kontrol, atau kekerasan, cari bantuan profesional dan dukungan keselamatan.'],
      ['Apakah kami harus selalu memakai cara pengasuhan yang sama?', 'Tidak harus identik, tetapi aturan keselamatan dan pesan utama perlu konsisten. Perbedaan dapat dibicarakan melalui uji coba terbatas, tanpa membuat anak memilih pihak.'],
      ['Kapan konseling pasangan tidak aman?', 'Konseling bersama bukan pilihan pertama bila ada kekerasan, ancaman, ketakutan, atau kontrol. Utamakan layanan perlindungan, pendamping yang aman, dan rencana keselamatan.']
    ],
    sourceItems: [
      [sources.aapFamily, 'How Chronic Illness or Disability Affects a Family, American Academy of Pediatrics / HealthyChildren.org'],
      [sources.childMindMarriage, 'How to Protect Your Marriage from a Child’s Mental Health Disorder, Child Mind Institute'],
      [sources.childMindConflict, 'Resolving Parenting Disagreements, Child Mind Institute'],
      [sources.aapCommunication, 'Communication Skills Start at Home, American Academy of Pediatrics / HealthyChildren.org'],
      [sources.sapa, 'SAPA 129, Kementerian Pemberdayaan Perempuan dan Perlindungan Anak']
    ]
  }
];

function schemaFor(article) {
  const canonical = `${SITE}/artikel/${article.slug}`;
  const imageUrl = `${SITE}/${article.image.src}`;
  const faq = article.faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }));
  return {
    blog: {
      '@context': 'https://schema.org', '@type': 'BlogPosting', headline: article.ogTitle,
      description: article.ogDesc, image: { '@type': 'ImageObject', url: imageUrl, width: article.image.width, height: article.image.height, caption: article.image.alt },
      author: AUTHOR, publisher: { '@id': `${SITE}/#organization` }, datePublished: DATE, dateModified: DATE,
      inLanguage: 'id-ID', keywords: article.keywords, mainEntityOfPage: { '@type': 'WebPage', '@id': canonical }
    },
    breadcrumb: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: article.title, item: canonical }
    ]},
    faq: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq }
  };
}

function sourceList(article) {
  return article.sourceItems.map(([url, label]) => `<li>${ext(url, `<strong>${label}</strong>`)}</li>`).join('\n');
}

function faqHtml(article) {
  return article.faqs.map(([q, a]) => `<h3>${q}</h3><p>${a}</p>`).join('\n');
}

function render(article) {
  const canonical = `${SITE}/artikel/${article.slug}`;
  const schemas = schemaFor(article);
  const shareTitle = encodeURIComponent(article.title);
  const html = `<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>${article.title} | YUKA</title>
    <meta name="description" content="${article.meta}">
    <meta name="keywords" content="${article.keywords}, YUKA">
    <meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${canonical}">
    <link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="https://www.yukaindonesia.com/feed.xml">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonical}">
    <meta property="og:title" content="${article.ogTitle}">
    <meta property="og:description" content="${article.ogDesc}">
    <meta property="og:image" content="${SITE}/${article.image.src}">
    <meta property="og:image:alt" content="${article.image.alt}">
    <meta property="og:locale" content="id_ID">
    <meta property="og:site_name" content="YUKA Indonesia">
    <meta property="article:published_time" content="${DATE}">
    <meta property="article:modified_time" content="${DATE}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"></noscript>
    <link rel="stylesheet" href="../assets/css/style.min.css">
    <script type="application/ld+json">${JSON.stringify(schemas.blog)}</script>
    <script type="application/ld+json">${JSON.stringify(schemas.breadcrumb)}</script>
    <script type="application/ld+json">${JSON.stringify(schemas.faq)}</script>
    ${style}
    ${extraStyle}
    <link rel="icon" href="/favicon.ico" sizes="any">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16.png">
    <link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
</head>
<body>
    <nav class="navbar" id="navbar"><div class="container">
        <a href="../" class="navbar-brand"><img src="../Logo/Logo.webp" alt="YUKA - Yayasan Ukhuwah Kaffah Amanatullah" class="brand-logo" width="180" height="60"></a>
        <div class="navbar-menu" id="navbarMenu"><a href="../">Beranda</a><a href="../tentang">Tentang</a><a href="../program">Program</a><a href="../galeri">Galeri</a><a href="../blog" class="active">Artikel</a><a href="../kontak">Kontak</a><a href="../donasi" class="btn btn-primary btn-sm">Donasi</a></div>
        <button class="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>
    </div></nav>
    <header class="article-header"><div class="container">
        <div class="breadcrumb"><a href="../">Beranda</a><span class="separator">/</span><a href="../blog">Artikel</a><span class="separator">/</span><span class="current">${article.title}</span></div>
        <span class="card-category" style="background: var(--secondary); color: var(--gray-900); padding: .5rem 1rem; border-radius: 20px; font-size: .875rem; display: inline-block; margin: 1rem 0">Pendidikan</span>
        <h1 style="font-size:2.5rem;max-width:800px">${article.title}</h1>
        <div class="article-meta"><span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>${DISPLAY_DATE}</span><span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 11-18 0z"/></svg>${article.readTime}</span><span><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>Tim YUKA</span></div>
    </div></header>
    <div class="container"><figure class="article-featured-image"><img src="../${article.image.src}" alt="${article.image.alt}" width="${article.image.width}" height="${article.image.height}" fetchpriority="high" decoding="async"><figcaption>${article.image.caption}</figcaption></figure></div>
    <article class="article-content"><div class="article-body">
        ${article.body}
        <div class="article-tags">${article.tags.map(tag => `<a href="#">#${tag}</a>`).join('')}</div>
        <div class="article-sources" style="margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67"><h3 style="margin-top:0;font-size:1.15rem;color:#2B3A67">Sumber dan Referensi</h3><ul style="margin:.5rem 0 0;padding-left:1.5rem;font-size:.95rem;line-height:1.8">${sourceList(article)}</ul><p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:.95rem;line-height:1.6"><strong>Disclaimer:</strong> Artikel ini bersifat edukasi umum dan bukan pengganti diagnosis, konseling, atau pengobatan dari dokter, psikolog, atau psikiater. Sumber dicek pada 27 September 2026.</p></div>
        <div class="article-share"><span style="font-weight:600">Bagikan:</span><div class="share-buttons"><a href="https://wa.me/?text=${shareTitle}%20-%20${canonical}" target="_blank" class="share-btn whatsapp" aria-label="Bagikan ke WhatsApp">${svgWa}</a><a href="https://www.facebook.com/sharer/sharer.php?u=${canonical}" target="_blank" class="share-btn facebook" aria-label="Bagikan ke Facebook">${svgFb}</a><a href="https://twitter.com/intent/tweet?text=${shareTitle}&url=${canonical}" target="_blank" class="share-btn twitter" aria-label="Bagikan ke X" style="background:#000">${svgX}</a></div></div>
        <aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>
    </div></article>
    <section class="section bg-primary" style="padding:4rem 0"><div class="container text-center"><h2 style="color:var(--white);margin-bottom:1rem">Bantu Pendidikan Anak Berkebutuhan Khusus</h2><p style="color:rgba(255,255,255,.9);max-width:600px;margin:0 auto 2rem">Setiap donasi membantu anak-anak dengan beragam kemampuan mendapatkan pendidikan dan pendampingan yang sesuai kebutuhan mereka.</p><div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap"><a href="../donasi" class="btn btn-secondary">Donasi Sekarang</a><a href="https://wa.me/6281229912332?text=Halo%20YUKA%2C%20saya%20ingin%20bertanya%20tentang%20pendampingan%20anak%20berkebutuhan%20khusus" target="_blank" class="btn btn-outline-light">Hubungi via WhatsApp</a></div></div></section>
    <script src="../assets/js/main.min.js" defer></script>
</body></html>`;
  if (/—/.test(html)) throw new Error(`em dash found in ${article.slug}`);
  const finalHtml = ensureArticleShell(html);
  const missing = missingShellParts(finalHtml);
  if (missing.length) throw new Error(`${article.slug} shell gate failed: ${missing.join(', ')}`);
  return finalHtml;
}

for (const article of articles) {
  const out = path.join(ROOT, 'artikel', `${article.slug}.html`);
  const html = render(article);
  fs.writeFileSync(out, html, 'utf8');
  const body = html.match(/<div class="article-body">([\s\S]*?)<\/div>\s*<\/article>/)?.[1] || html;
  const text = body.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
  console.log(JSON.stringify({ slug: article.slug, file: out, bytes: html.length, words: text.split(' ').filter(Boolean).length, shell: missingShellParts(html) }));
}

#!/usr/bin/env node
/*
 * Generate the two overdue YUKA article cards for 2026-09-28.
 * Diminta oleh Syauqi (via MinTiv)
 */
'use strict';
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { ensureArticleShell, missingShellParts } = require('./lib/article-shell');

const ROOT = process.cwd();
const SITE = 'https://www.yukaindonesia.com';
const DATE = '2026-09-28';
const AUTHOR = {
  name: 'Tim Edukasi YUKA',
  url: `${SITE}/profil/bu-yupie-nurul-azkia`,
  image: `${SITE}/Team/Bu%20Yupie.webp`,
};

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
function resolveText(value) {
  return value
    .replace(/\[\[EXT:([^|]+)\|([^\]]+)\]\]/g, (_, url, label) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`)
    .replace(/\[\[([^|]+)\|([^\]]+)\]\]/g, (_, slug, label) => `<a href="../artikel/${slug}">${label}</a>`);
}
function p(value) { return `<p>${resolveText(value)}</p>`; }
function h2(id, title) { return `<h2 id="${id}">${title}</h2>`; }
function words(html) {
  return (html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .match(/[A-Za-zÀ-ÿ0-9]+/g) || []).length;
}
function jsonLd(value) { return JSON.stringify(value).replace(/</g, '\\u003c'); }

const sharedStyle = `
<style>
.article-header{background:linear-gradient(135deg,var(--primary) 0%,var(--primary-dark) 100%);padding:8rem 0 4rem;color:var(--white)}
.article-header h1{color:var(--white)!important}.article-header .breadcrumb a{color:rgba(255,255,255,.8)}.article-header .breadcrumb .current{color:var(--white)}
.article-meta{display:flex;gap:2rem;margin-top:1.5rem;flex-wrap:wrap}.article-meta span{color:rgba(255,255,255,.9);font-size:.9rem}
.article-content{max-width:800px;margin:0 auto;padding:3rem 1.5rem}.article-body{font-size:1.1rem;line-height:1.9;color:var(--gray-700)}
.article-body h2{color:var(--primary);margin:2.5rem 0 1rem;font-size:1.75rem}.article-body h3{color:var(--primary-dark);margin:1.75rem 0 .7rem}.article-body p{margin-bottom:1.35rem}
.article-body ul,.article-body ol{margin:1.25rem 0;padding-left:2rem}.article-body li{margin-bottom:.65rem}.article-body a{color:#1565C0;text-decoration:underline;text-underline-offset:2px}
.article-featured-image{margin:-2rem auto 2rem;max-width:900px;border-radius:16px;overflow:hidden;box-shadow:0 20px 60px rgba(0,0,0,.15)}
.article-featured-image img{width:100%;height:auto;display:block}.article-featured-image figcaption,.article-inline-image figcaption{padding:.75rem 1rem;font-size:.9rem;color:var(--gray-600);text-align:center;background:var(--gray-50)}
.article-inline-image{margin:2rem 0;border-radius:12px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.1)}.article-inline-image img{width:100%;height:auto;display:block}
.aeo-answer-box{background:#f7fbff;border:1px solid rgba(43,58,103,.18);border-left:5px solid #2b3a67;border-radius:14px;padding:1.25rem 1.5rem;margin:0 0 2rem}.aeo-answer-box .label{display:inline-block;font-size:.78rem;font-weight:700;letter-spacing:.03em;color:#2b3a67;text-transform:uppercase;margin-bottom:.45rem}.aeo-answer-box p{margin:0;color:var(--gray-800);line-height:1.75}
.toc{background:var(--gray-50);border:1px solid var(--gray-200);border-radius:12px;padding:1.5rem 2rem;margin:2rem 0}.toc h3{margin-top:0;color:var(--primary);font-size:1.1rem}.toc ol{margin:0;padding-left:1.5rem}.toc li{margin-bottom:.5rem}.toc a{text-decoration:none}
.info-box{background:#fff3e0;border-left:4px solid #ff9800;padding:1.5rem;margin:2rem 0;border-radius:0 12px 12px 0}.info-box h3{color:#e65100;margin-top:0}
.faq-list details{border:1px solid var(--gray-200);border-radius:10px;padding:1rem 1.2rem;margin:.8rem 0;background:#fff}.faq-list summary{cursor:pointer;font-weight:700;color:var(--primary-dark)}
.article-sources{margin:2rem 0;padding:1.5rem;background:#F8F9FF;border-radius:10px;border-left:4px solid #2B3A67}.article-sources h3{margin-top:0;font-size:1.15rem;color:#2B3A67}.article-sources li{margin-bottom:.55rem}
@media(max-width:640px){.article-header{padding:6rem 0 3rem}.article-header h1{font-size:2rem!important}.article-content{padding:2rem 1rem}.article-body{font-size:1rem}.toc{padding:1rem 1.2rem}}
</style>`;

const articles = [
  {
    slug: 'milestone-motorik-halus-anak-1-3-tahun',
    title: 'Milestone Motorik Halus Anak 1-3 Tahun: Panduan Orang Tua',
    description: 'Milestone motorik halus anak 1-3 tahun berkembang bertahap melalui aktivitas meraih, memindahkan, mencoret, menyusun, makan, dan memakai pakaian. Kenali rentang perkembangan tanpa membandingkan anak secara kaku.',
    keywords: 'milestone motorik halus anak 1-3 tahun, perkembangan motorik halus balita, stimulasi motorik halus',
    image: 'Dokumentasi/cpao-anak-belajar-memasak-tradisional-064.webp',
    imageAlt: 'Anak berlatih koordinasi tangan melalui kegiatan memasak bersama pendamping',
    imageCaption: 'Kegiatan sehari-hari seperti memasak dengan pengawasan dapat menjadi kesempatan latihan koordinasi tangan.',
    bodyImage: 'Dokumentasi/cpao-dua-peserta-kelas-memasak-berfoto-065.webp',
    bodyImageAlt: 'Anak mengikuti kegiatan memasak bersama sebagai latihan koordinasi tangan dan jari',
    bodyImageCaption: 'Kegiatan memasak sederhana dapat melatih koordinasi tangan jika bahan, alat, dan pengawasan disesuaikan.',
    readTime: '14 menit baca',
    related: [
      ['apa-itu-motorik-halus', 'pengertian motorik halus'], ['motorik-halus-adalah', 'contoh keterampilan motorik halus'],
      ['contoh-motorik-kasar-dan-halus', 'perbedaan motorik kasar dan halus'], ['kegiatan-dan-stimulasi-motorik-halus', 'ide stimulasi motorik halus'],
      ['kegiatan-motorik-halus', 'kegiatan motorik halus di rumah'], ['stimulasi-motorik-halus', 'cara memberi stimulasi'],
      ['latihan-motorik-halus', 'latihan yang mudah dilakukan'], ['permainan-motorik-halus', 'permainan motorik halus'],
      ['terapi-okupasi', 'terapi okupasi untuk keterampilan sehari-hari'], ['asesmen-abk', 'asesmen kebutuhan anak'],
      ['pendidikan-inklusi', 'pendidikan inklusi'], ['peran-orang-tua-pendidikan-inklusi', 'peran orang tua'],
    ],
    sources: [
      ['https://www.who.int/health-topics/child-growth', 'WHO, informasi pertumbuhan dan perkembangan anak'],
      ['https://www.healthychildren.org/English/ages-stages/toddler/Pages/default.aspx', 'American Academy of Pediatrics, tahap perkembangan balita'],
      ['https://www.nhs.uk/start-for-life/baby/learning-to-talk/', 'NHS, perkembangan awal dan aktivitas bersama anak'],
    ],
    sections: [
      ['jawaban', 'Jawaban Singkat: Milestone Motorik Halus Berkembang Bertahap', [
        'Milestone motorik halus anak 1-3 tahun mencakup kemampuan memakai tangan dan jari untuk meraih, menggenggam, memindahkan benda, mencoret, menyusun, makan, membuka atau menutup benda sederhana, serta membantu aktivitas sehari-hari. Anak berkembang dengan kecepatan yang tidak persis sama, sehingga daftar milestone sebaiknya dipakai untuk mengamati pola dan berdiskusi dengan tenaga profesional, bukan untuk memberi label dari satu kemampuan yang belum muncul.',
        'Pada usia 1 tahun, banyak anak mulai lebih terampil mengambil benda kecil dengan ibu jari dan telunjuk, memasukkan benda ke wadah, menunjuk, membalik halaman tebal, atau membawa makanan ke mulut. Memasuki usia 2 tahun, anak biasanya mulai meniru garis atau coretan, menumpuk beberapa balok, memakai sendok dengan bantuan, dan mencoba membuka kemasan sederhana. Menjelang 3 tahun, sebagian anak dapat menggambar bentuk dasar, menyusun benda lebih rapi, menggunting dengan bantuan, dan ikut memakai pakaian.',
        'Rentang tersebut bukan jadwal ujian. WHO menjelaskan bahwa milestone dapat membantu orang tua mengamati perkembangan, sedangkan WHO juga menekankan pentingnya melihat pertumbuhan dan perkembangan secara menyeluruh. Perhatikan juga komunikasi, gerak kasar, kemampuan bermain, kemandirian, perhatian, serta cara anak beradaptasi dengan lingkungan.',
        'Jika anak kehilangan kemampuan yang sebelumnya sudah dikuasai, tampak sangat kesulitan memakai salah satu sisi tubuh, sering kesakitan, atau tidak ada kemajuan dalam beberapa bulan meskipun sudah diberi kesempatan bermain, orang tua sebaiknya berkonsultasi. Pemeriksaan lebih awal membantu keluarga memahami kebutuhan anak tanpa menunggu perbandingan dengan anak lain menjadi sumber kecemasan.',
      ]],
      ['usia12', 'Usia 12-18 Bulan: Meraih, Memindahkan, dan Mengeksplorasi', [
        'Pada rentang 12-18 bulan, anak sedang membangun koordinasi mata dan tangan. Ia mungkin meraih benda yang menarik, memindahkan mainan dari satu tangan ke tangan lain, memasukkan benda ke wadah, atau mengambil potongan makanan kecil. Aktivitas ini terlihat sederhana, tetapi melibatkan penglihatan, stabilitas bahu, gerak pergelangan, kekuatan jari, dan kemampuan memperkirakan jarak.',
        'Orang tua dapat menyediakan benda berukuran besar yang aman untuk dimasukkan ke wadah, balok besar, buku karton, gelas plastik, atau makanan lunak yang dapat dipegang. Dampingi anak setiap saat dan jauhkan benda kecil yang berisiko tertelan. Tujuan kegiatan bukan membuat anak menyelesaikan tugas dengan sempurna, melainkan memberi pengalaman berulang dalam suasana yang menyenangkan.',
        'Berikan satu instruksi singkat, lalu beri waktu anak mencoba. Jika tangan anak belum stabil, bantu dengan menahan wadah atau menempatkan benda lebih dekat. Hindari terlalu sering mengambil alih karena kesempatan mencoba membantu anak memahami hubungan antara gerakan dan hasil. Bacaan tentang [[apa-itu-motorik-halus|motorik halus]] dapat membantu orang tua mengenali komponen keterampilan yang sedang dilatih.',
        'Catat kondisi yang membuat anak lebih mudah berhasil. Sebagian anak lebih fokus ketika duduk dengan kaki menapak, sebagian memerlukan jeda karena cepat lelah, dan sebagian lebih nyaman dengan benda bertekstur tertentu. Catatan tersebut berguna saat berdiskusi dengan dokter, terapis, atau guru di kemudian hari.',
      ]],
      ['usia18', 'Usia 18-24 Bulan: Coretan, Susunan, dan Kemandirian Awal', [
        'Pada usia 18-24 bulan, anak biasanya mulai lebih aktif menggunakan alat sederhana. Ia mungkin mencoret kertas, menumpuk beberapa balok, membuka tutup yang longgar, membalik halaman, memasukkan sendok ke makanan, atau mencoba melepas kaus kaki. Hasilnya tidak selalu rapi. Yang penting adalah anak mulai merencanakan gerak, mengulangi percobaan, dan belajar dari umpan balik.',
        'Sediakan krayon berukuran besar, kertas yang ditempel agar tidak bergeser, balok besar, puzzle dengan kenop, dan wadah dengan tutup yang mudah dibuka. Kegiatan memasukkan, menuang, meremas adonan yang aman, atau memindahkan spons basah dapat memperkaya pengalaman. Pilih bahan yang tidak mudah pecah, tidak tajam, dan tidak bisa masuk ke mulut.',
        'Kegiatan sehari-hari adalah latihan yang bermakna. Ajak anak membawa kain kecil ke tempat cucian, mengambil sendok, memasukkan mainan ke keranjang, atau memilih antara dua baju. Jika anak memiliki kebutuhan perkembangan tertentu, aktivitas dapat dipecah menjadi langkah lebih kecil. [[kegiatan-dan-stimulasi-motorik-halus|Ide stimulasi motorik halus]] dapat disesuaikan dengan minat dan stamina anak.',
        'Jangan menjadikan latihan sebagai tes yang harus diulang sampai benar. Beri pujian pada usaha yang spesifik, seperti “kamu memegang sendok dengan dua tangan” atau “kamu mencoba memasukkan balok”. Umpan balik konkret membantu anak memahami strategi yang dapat dipakai lagi.',
      ]],
      ['usia24', 'Usia 24-36 Bulan: Menggambar, Memakai Alat, dan Mengikuti Urutan', [
        'Menjelang usia 3 tahun, banyak anak mulai menggabungkan beberapa langkah dalam satu aktivitas. Anak dapat mencoba menggambar garis dan lingkaran, menyusun balok menjadi menara, makan dengan sendok dan garpu dengan tumpahan yang masih wajar, atau membantu membuka celana dan sepatu. Perbedaan kemampuan masih dapat terlihat jelas karena pengalaman bermain dan kesempatan berlatih tiap anak berbeda.',
        'Gunakan kegiatan yang memiliki tujuan nyata. Anak dapat memindahkan baju ringan, menyobek daun selada saat memasak, mencocokkan kaus kaki, memutar kenop besar, menempel stiker, atau menyusun benda berdasarkan warna. Untuk kegiatan dapur, pilih alat aman dan selalu dampingi. Jangan memberi akses ke pisau, kompor, benda panas, atau bahan kecil yang mudah tertelan.',
        'Latihan urutan membantu keterampilan motorik dan fungsi eksekutif. Tunjukkan tiga langkah sederhana, misalnya ambil sikat, beri pasta secukupnya, lalu sikat gigi. Gunakan gambar atau contoh langsung jika instruksi lisan belum cukup. [[bagaimana-cara-terbaik-untuk-mengajarkan-kemandirian-kepada-anak-berkebutuhan-kh|Latihan kemandirian]] dapat menjadi rujukan ketika orang tua ingin mengurangi bantuan secara bertahap.',
        'Jika anak belum tertarik menggambar, jangan memaksanya duduk lama. Mulai dari coretan pendek, aktivitas berdiri, atau kegiatan yang sesuai minat. Sebagian anak lebih menikmati membangun, memasak, meronce dengan benda besar, atau membantu merapikan daripada menggunakan pensil. Minat dapat menjadi pintu masuk untuk memperkuat koordinasi tangan.',
      ]],
      ['stimulasi', 'Aktivitas Rumah yang Mendukung Motorik Halus', [
        'Stimulasi yang baik bersifat singkat, berulang, dan terkait kehidupan anak. Pilih satu aktivitas selama lima sampai lima belas menit, lalu berhenti sebelum anak terlalu lelah. Besok, ulangi dengan sedikit variasi. Pola ini lebih realistis daripada memberi banyak permainan sekaligus dan berharap anak mengikuti semuanya.',
        'Untuk menguatkan koordinasi dua tangan, ajak anak memegang wadah dengan satu tangan sambil memasukkan benda dengan tangan lain, merobek kertas, membuka buku, mengaduk makanan dingin, atau menarik ritsleting besar. Untuk ketepatan gerak, gunakan stiker, puzzle kenop, memasukkan koin mainan ke celengan besar, dan mencocokkan bentuk yang aman.',
        'Untuk keterampilan makan, berikan alat makan yang ukurannya sesuai dan posisi duduk stabil. Tawarkan kesempatan membawa sendok ke mulut tanpa menuntut porsi besar. Jika anak sering tersedak, batuk saat makan, atau tampak sangat kesulitan mengunyah, hentikan eksperimen makanan dan minta saran tenaga kesehatan. [[terapi-okupasi|Terapi okupasi]] atau [[terapi-wicara|terapi wicara]] dapat relevan sesuai masalah yang ditemukan.',
        'Mainkan aktivitas yang disukai anak. Memasak sederhana, merawat tanaman, bermain balok, atau menempel gambar dapat menjadi sarana latihan. Kegiatan tidak harus mahal. Yang penting adalah benda aman, tujuan jelas, kesempatan mengulang, dan dukungan yang disesuaikan.',
      ]],
      ['tanda', 'Tanda yang Perlu Dicatat dan Didiskusikan', [
        'Orang tua perlu lebih waspada jika anak terus menghindari penggunaan satu tangan, tampak sangat kaku atau sangat lemas, sering menjatuhkan benda dengan keluhan nyeri, atau kesulitan melakukan aktivitas yang sebelumnya sudah dikuasai. Satu tanda tidak otomatis berarti diagnosis tertentu, tetapi pola yang menetap layak dibahas dengan tenaga profesional.',
        'Perhatikan juga konteks. Anak mungkin dapat mencoret ketika tenang tetapi tidak ketika ramai, dapat makan dengan sendok tetapi cepat lelah, atau dapat memakai kedua tangan saat bermain tetapi selalu meminta bantuan pada aktivitas tertentu. Catatan tentang kapan, berapa lama, dan dukungan apa yang membantu akan membuat konsultasi lebih informatif.',
        'Jika kekhawatiran berkaitan dengan beberapa area perkembangan, orang tua dapat meminta [[asesmen-abk|asesmen kebutuhan anak]] atau pemeriksaan perkembangan sesuai layanan di daerah. Tujuannya bukan mencari label secepat mungkin, melainkan memahami dukungan yang diperlukan untuk bermain, belajar, berkomunikasi, dan merawat diri.',
        'Jangan membandingkan video anak dengan konten media sosial. Video sering dipilih karena terlihat berhasil dan tidak menunjukkan proses, suasana, atau kebutuhan dukungan. Fokus pada perubahan anak dari waktu ke waktu dan pada fungsi nyata dalam kehidupan sehari-hari.',
      ]],
      ['dukungan', 'Menyesuaikan Stimulasi untuk Anak dengan Kebutuhan Beragam', [
        'Anak dengan keterlambatan perkembangan, cerebral palsy, autisme, gangguan penglihatan, atau kondisi lain mungkin membutuhkan adaptasi. Adaptasi dapat berupa alat dengan pegangan lebih besar, permukaan antiselip, posisi duduk yang stabil, waktu lebih panjang, instruksi visual, atau pengurangan jumlah benda di meja. Dukungan bukan berarti menurunkan harapan, tetapi membuka jalan agar anak dapat berpartisipasi.',
        'Untuk anak yang mudah kewalahan, gunakan lingkungan yang lebih tenang dan satu bahan pada satu waktu. Untuk anak yang membutuhkan gerak lebih banyak, selingi aktivitas duduk dengan berdiri atau berjalan. Untuk anak yang kesulitan merencanakan gerakan, tunjukkan contoh dan pecah tugas menjadi langkah kecil. Baca [[pendidikan-inklusi|prinsip pendidikan inklusi]] untuk melihat bagaimana akses dapat dirancang di rumah dan sekolah.',
        'Jika anak menjalani terapi, tanyakan tujuan fungsionalnya. Contohnya bukan hanya “menguatkan tangan”, tetapi mampu memegang sendok, membuka tas, atau memakai pakaian dengan bantuan lebih sedikit. Tujuan yang dapat diamati membantu keluarga mempraktikkan strategi dengan konsisten dan menilai apakah aktivitas memang bermanfaat.',
        'Libatkan anak dalam memilih aktivitas dan menerima bantuan. Anak berhak berhenti jika sakit, takut, atau lelah. Menghormati komunikasi tubuh dan pilihan anak merupakan bagian penting dari pengasuhan yang aman, termasuk ketika orang tua sedang mengejar target perkembangan.',
      ]],
      ['catatan', 'Cara Membuat Catatan Perkembangan yang Berguna', [
        'Buat tabel sederhana berisi tanggal, aktivitas, tingkat bantuan, durasi, dan respons anak. Misalnya, “28 September, memasukkan balok ke wadah, bantuan verbal satu kali, lima menit, mau mengulang”. Catatan seperti ini lebih berguna daripada menulis “motoriknya bagus” karena menunjukkan perilaku yang bisa diamati.',
        'Ambil foto atau video hanya jika anak nyaman dan data disimpan dengan aman. Hindari mengunggah wajah atau informasi kesehatan anak ke publik tanpa pertimbangan. Jika perlu menunjukkan video kepada dokter atau terapis, tanyakan cara pengiriman yang aman dan siapa yang dapat melihatnya.',
        'Tinjau catatan setiap dua sampai empat minggu. Cari pola kecil, seperti durasi fokus bertambah, bantuan berkurang, atau anak memilih strategi baru. Jika tidak ada perubahan, bukan berarti latihan gagal. Mungkin tujuan perlu disederhanakan, posisi tubuh diperbaiki, aktivitas diganti, atau anak membutuhkan evaluasi.',
        'Bawa pertanyaan dan catatan saat konsultasi. Tanyakan kemampuan yang menjadi prioritas, aktivitas yang perlu dihindari, tanda bahaya, dan kapan evaluasi berikutnya. Kolaborasi dengan keluarga, guru, dan tenaga profesional membantu dukungan tetap konsisten.',
      ]],
      ['ringkas', 'Rencana Praktis Tujuh Hari', [
        'Hari pertama, amati aktivitas yang paling mudah dan paling sulit tanpa memberi latihan tambahan. Hari kedua, siapkan satu bahan aman untuk aktivitas memindahkan atau memasukkan. Hari ketiga, tambahkan kegiatan dua tangan seperti membuka buku atau memegang wadah. Hari keempat, pilih kegiatan kemandirian seperti makan atau merapikan mainan.',
        'Hari kelima, ulangi aktivitas yang paling disukai dengan durasi pendek. Hari keenam, kurangi bantuan satu langkah jika anak siap, tetapi tetap sediakan bantuan bila diminta. Hari ketujuh, tulis apa yang berubah, kapan anak terlihat lelah, dan dukungan apa yang paling membantu. Rencana ini fleksibel dan bukan pengganti asesmen profesional.',
        'Kunci utamanya adalah kesempatan yang aman, target yang realistis, dan penghormatan pada ritme anak. Milestone membantu orang tua mengamati, tetapi hubungan, bermain, dan partisipasi sehari-hari tetap menjadi pusat perkembangan. Jika ada kekhawatiran yang menetap, cari dukungan lebih awal daripada menunggu anak “mengejar sendiri”.',
      ]],
    ],
    faq: [
      ['Apa saja milestone motorik halus anak usia 1 tahun?', 'Anak mungkin mulai mengambil benda kecil dengan ibu jari dan telunjuk, memasukkan benda ke wadah, menunjuk, membalik halaman tebal, serta membawa makanan ke mulut. Rentang kemampuan dapat berbeda antar-anak.'],
      ['Kapan anak usia 2 tahun biasanya mulai menggambar?', 'Banyak anak mulai membuat coretan atau meniru garis sederhana sekitar usia 2 tahun, tetapi minat dan pengalaman tiap anak berbeda. Sediakan alat aman tanpa memaksa hasil gambar tertentu.'],
      ['Apakah anak yang belum bisa memakai sendok pasti mengalami keterlambatan?', 'Tidak selalu. Kemampuan dipengaruhi pengalaman, posisi duduk, koordinasi, sensorik, perhatian, dan kesempatan berlatih. Catat polanya dan konsultasikan jika kesulitan menetap atau disertai tanda lain.'],
      ['Bagaimana stimulasi motorik halus yang aman di rumah?', 'Gunakan benda besar dan tidak tajam untuk memasukkan, memindahkan, menyusun, mencoret, menempel, atau membantu aktivitas rumah. Dampingi terus dan hindari benda kecil yang mudah tertelan.'],
      ['Kapan orang tua perlu berkonsultasi?', 'Konsultasikan jika anak kehilangan kemampuan yang sudah dikuasai, tampak nyeri, sangat kaku atau lemas, terus menghindari satu tangan, atau tidak ada kemajuan dalam beberapa bulan meski sudah diberi kesempatan.'],
      ['Apakah terapi okupasi diperlukan untuk semua anak?', 'Tidak. Terapi dipertimbangkan berdasarkan kebutuhan dan dampak pada aktivitas sehari-hari. Tenaga profesional dapat membantu menentukan tujuan fungsional serta adaptasi yang sesuai.'],
    ],
  },
  {
    slug: 'terapi-pijat-anak-cerebral-palsy',
    title: 'Terapi Pijat Anak Cerebral Palsy: Manfaat, Batasan, dan Keamanan',
    description: 'Terapi pijat anak cerebral palsy dapat dipertimbangkan sebagai dukungan kenyamanan, tetapi bukan pengganti fisioterapi atau pengobatan. Pahami manfaat yang realistis, batasan, dan tanda bahaya sebelum mencoba.',
    keywords: 'terapi pijat anak cerebral palsy, pijat anak cerebral palsy, keamanan pijat anak CP',
    image: 'Dokumentasi/cpao-dua-anak-duduk-sofa-003.webp',
    imageAlt: 'Anak dan pendamping berdiskusi dalam suasana yang tenang sebagai ilustrasi dukungan keluarga',
    imageCaption: 'Ilustrasi dukungan keluarga. Foto ini bukan demonstrasi teknik pijat atau pengganti arahan tenaga kesehatan.',
    bodyImage: 'Dokumentasi/cpao-anak-anak-tidur-dalam-bus-005.webp',
    bodyImageAlt: 'Anak beristirahat dalam perjalanan sebagai ilustrasi pentingnya kenyamanan dan jeda',
    bodyImageCaption: 'Ilustrasi waktu istirahat dan kenyamanan. Foto ini bukan demonstrasi teknik pijat.',
    readTime: '15 menit baca',
    related: [
      ['cerebral-palsy-adalah', 'pengertian cerebral palsy'], ['skoliosis-pada-anak-cerebral-palsy', 'skoliosis pada anak cerebral palsy'],
      ['terapi-fisik-untuk-abk', 'terapi fisik untuk ABK'], ['terapi-okupasi', 'terapi okupasi'],
      ['macam-macam-terapi-pada-anak', 'jenis terapi anak'], ['apa-saja-terapi-anak-berkebutuhan-khusus', 'pilihan terapi ABK'],
      ['terapi-wicara', 'terapi wicara'], ['asesmen-abk', 'asesmen ABK'],
      ['dukungan-keluarga-anak-abk', 'dukungan keluarga'], ['mengelola-stres-orang-tua-anak-abk', 'stres orang tua'],
      ['pendidikan-inklusi', 'pendidikan inklusi'], ['tempat-terapi-anak-jogja', 'cara mencari tempat terapi'],
    ],
    sources: [
      ['https://www.nice.org.uk/guidance/ng62', 'NICE, cerebral palsy pada anak dan remaja'],
      ['https://www.who.int/news-room/fact-sheets/detail/disability-and-health', 'WHO, disabilitas dan kesehatan'],
      ['https://www.nhs.uk/conditions/cerebral-palsy/', 'NHS, gejala dan penanganan cerebral palsy'],
    ],
    sections: [
      ['jawaban', 'Jawaban Singkat: Pijat Boleh Menjadi Dukungan, Bukan Pengganti Terapi Utama', [
        'Terapi pijat anak cerebral palsy dapat dipertimbangkan untuk membantu kenyamanan, relaksasi, kesadaran tubuh, atau rutinitas sentuhan yang disukai anak. Namun pijat tidak boleh diposisikan sebagai penyembuh cerebral palsy, pengganti fisioterapi, atau cara pasti untuk menghilangkan spastisitas. Keamanan dan manfaatnya sangat bergantung pada kondisi anak, tujuan yang jelas, teknik lembut, serta persetujuan tenaga kesehatan yang memahami riwayat anak.',
        'Cerebral palsy memengaruhi gerak dan postur dengan cara yang beragam. Ada anak yang mengalami kekakuan, gerakan tidak terkendali, kelemahan, nyeri, kelelahan, gangguan komunikasi, epilepsi, masalah tulang dan sendi, atau kesulitan menelan. Karena itu, teknik yang terasa nyaman bagi satu anak dapat tidak sesuai bagi anak lain. NICE dan NHS menekankan bahwa dukungan perlu disesuaikan dengan kebutuhan individual.',
        'Sebelum mencoba, orang tua sebaiknya menyampaikan rencana pijat kepada dokter, fisioterapis, atau terapis okupasi anak. Mintalah penjelasan bagian tubuh yang aman disentuh, posisi yang tepat, tekanan yang boleh digunakan, durasi, dan tanda untuk berhenti. Jika pijat dilakukan oleh terapis, pastikan ia memiliki pengalaman menangani anak dan bersedia berkoordinasi dengan tim kesehatan.',
        'Artikel ini memberi informasi umum. Pijat tidak untuk menggantikan asesmen, obat, injeksi, ortosis, fisioterapi, terapi okupasi, terapi wicara, atau tindakan lain yang sudah direkomendasikan. Bila anak mengalami nyeri baru, penurunan kemampuan, demam, kejang yang berubah, cedera, atau gangguan napas, utamakan pemeriksaan medis.',
      ]],
      ['tujuan', 'Tentukan Tujuan yang Realistis', [
        'Tujuan pijat perlu dirumuskan dalam bahasa fungsional. Misalnya, anak lebih nyaman sebelum tidur, lebih tenang saat berganti posisi, dapat menerima sentuhan pada lengan, atau keluarga memiliki rutinitas relaksasi yang disukai. Tujuan seperti ini lebih aman daripada menjanjikan kaki akan lurus, spastisitas hilang, atau anak pasti berjalan setelah beberapa sesi.',
        'Pijat dapat memberi pengalaman sentuhan dan tekanan ringan, tetapi respons anak tetap menjadi pusat. Ada anak yang menyukai sentuhan stabil, ada yang sensitif pada tekstur minyak, suhu, suara, atau posisi tertentu. Tanyakan persetujuan dengan cara yang dapat dipahami, amati ekspresi dan gerak tubuh, lalu berhenti jika anak menolak.',
        'Jika tujuan utama adalah rentang gerak, kekuatan, transfer, duduk, berdiri, atau berjalan, diskusikan dengan fisioterapis. [[terapi-fisik-untuk-abk|Terapi fisik untuk ABK]] dirancang berdasarkan asesmen gerak dan fungsi, sedangkan pijat mungkin hanya menjadi bagian kecil dari rutinitas kenyamanan. Jangan menilai keberhasilan dari rasa hangat di kulit atau anak tertidur saja.',
        'Buat catatan sederhana sebelum dan sesudah, seperti tingkat kenyamanan, durasi, posisi, respons anak, dan keluhan yang muncul. Hindari menyimpulkan sebab dari satu kali sesi. Catatan beberapa minggu dapat membantu tim melihat apakah kegiatan tersebut benar-benar mendukung tujuan keluarga.',
      ]],
      ['persiapan', 'Persiapan Pijat yang Lebih Aman', [
        'Pilih waktu ketika anak tidak lapar, tidak baru saja makan banyak, tidak mengantuk berat, dan tidak sedang terburu-buru. Ruangan harus hangat, tenang, memiliki permukaan stabil, dan bebas dari benda yang dapat membuat anak jatuh. Sediakan handuk, pakaian yang nyaman, serta cara komunikasi yang biasa digunakan anak.',
        'Periksa kulit sebelum menyentuh. Jangan memijat area dengan luka, kemerahan yang tidak jelas, memar, infeksi, ruam yang menyebar, alat medis yang baru dipasang, atau bagian yang baru cedera kecuali sudah ada arahan tenaga kesehatan. Gunakan produk yang aman untuk kulit anak dan hentikan bila muncul iritasi.',
        'Posisi harus mendukung napas dan mencegah sendi tertarik. Jangan memaksa tungkai lurus, memutar sendi, menarik lengan, menekan tulang belakang, atau mengubah posisi anak secara cepat. Bila anak membutuhkan bantuan untuk berpindah, ikuti teknik transfer yang diajarkan fisioterapis. [[cerebral-palsy-adalah|Pahami cerebral palsy]] agar keluarga tidak menganggap semua kekakuan sebagai masalah yang boleh ditekan.',
        'Mulailah sangat singkat, misalnya satu sampai tiga menit pada area yang disukai anak, lalu evaluasi. Pijatan ringan dengan telapak tangan yang hangat biasanya lebih mudah diterima daripada tekanan dalam. Tidak ada kebutuhan untuk mengejar durasi panjang. Konsistensi dan kenyamanan lebih penting daripada intensitas.',
      ]],
      ['teknik', 'Prinsip Sentuhan yang Dapat Dibicarakan dengan Terapis', [
        'Teknik yang aman tidak dapat ditentukan hanya dari nama gerakan. Terapis perlu melihat tonus otot, rentang gerak, nyeri, kondisi kulit, posisi, alat bantu, dan tujuan fungsional anak. Secara umum, orang tua dapat menanyakan apakah usapan pelan, telapak tangan statis, atau tekanan lembut pada otot besar sesuai untuk anaknya.',
        'Hindari gerakan cepat, tekanan kuat, memijat langsung tulang, memaksa sendi melewati batas, atau mencoba “memecah” kekakuan. Pijat bukan perlombaan melawan spastisitas. Tekanan berlebihan dapat menimbulkan nyeri, memar, ketakutan, atau respons otot yang justru lebih sulit dikendalikan.',
        'Perhatikan napas, warna kulit, ekspresi, suara, perubahan gerak, dan kemampuan anak berkomunikasi. Tanda seperti menahan napas, meringis, menangis, tubuh makin kaku, menjauh, menggigil, atau tampak bingung berarti sesi harus dijeda atau dihentikan. Anak yang tidak berbicara tetap dapat menyampaikan penolakan lewat tubuh.',
        'Untuk keluarga yang ingin belajar, minta demonstrasi langsung dari fisioterapis atau terapis okupasi, lalu ulangi di depan mereka. Tanyakan bagian yang boleh dan tidak boleh disentuh, cara menyangga kepala dan tungkai, serta kapan harus meminta bantuan. [[terapi-okupasi|Terapi okupasi]] dapat membantu menghubungkan sentuhan dengan aktivitas sehari-hari.',
      ]],
      ['spastisitas', 'Pijat dan Spastisitas: Jangan Menjanjikan Hasil Berlebihan', [
        'Spastisitas adalah salah satu pola masalah gerak yang dapat muncul pada cerebral palsy, tetapi tingkat dan dampaknya berbeda. Pijat mungkin membuat sebagian anak merasa lebih rileks untuk sementara, namun rasa rileks tidak sama dengan perubahan jangka panjang pada tonus, struktur otot, atau kemampuan fungsional. Klaim “pijat menyembuhkan spastisitas” tidak tepat.',
        'Penanganan spastisitas bisa melibatkan latihan, fisioterapi, ortosis, obat, injeksi, operasi, dan strategi posisi sesuai asesmen. NICE menyarankan perawatan yang terkoordinasi dan berpusat pada tujuan anak. Karena itu, pijat sebaiknya dibahas sebagai pelengkap yang tidak mengganggu rencana utama, bukan sebagai alasan menghentikan terapi yang telah direkomendasikan.',
        'Bila setelah pijat anak terlihat lebih kaku, nyeri, mengantuk tidak biasa, atau kemampuan bergeraknya berubah, catat waktunya dan hubungi tenaga kesehatan. Jangan menambah tekanan atau frekuensi untuk “mengatasi” reaksi tersebut. Respons tubuh anak adalah informasi klinis yang perlu dibaca dengan hati-hati.',
        'Keluarga dapat mempelajari [[macam-macam-terapi-pada-anak|jenis terapi anak]] dan [[terapi-fisik-untuk-abk|tujuan terapi fisik]] agar dapat membedakan fungsi tiap layanan. Membawa pertanyaan yang spesifik membantu konsultasi menjadi lebih efektif daripada mengejar terapi yang menjanjikan hasil instan.',
      ]],
      ['hindari', 'Kapan Pijat Sebaiknya Ditunda atau Dihentikan', [
        'Tunda pijat bila anak demam, sedang sakit akut, muntah, diare, mengalami infeksi kulit, baru cedera, mengalami nyeri yang belum jelas, atau baru menjalani tindakan medis tanpa arahan. Pijat juga perlu dibahas kembali jika ada perubahan obat, alat bantu, operasi, injeksi, atau kondisi neurologis.',
        'Jangan memijat area yang bengkak mendadak, terasa panas, berubah warna, memiliki luka, atau menimbulkan nyeri tajam. Jangan menggunakan minyak esensial atau balsem dengan aroma kuat tanpa memastikan keamanannya untuk anak. Kulit anak dan anak dengan gangguan sensorik dapat bereaksi berbeda terhadap produk yang terlihat biasa.',
        'Jika anak memiliki epilepsi, gangguan pembekuan darah, masalah tulang, dislokasi, skoliosis, gangguan napas, atau alat medis, mintalah arahan khusus. [[skoliosis-pada-anak-cerebral-palsy|Masalah tulang belakang pada cerebral palsy]] memerlukan perhatian pada posisi dan penyanggaan. Jangan mengandalkan tutorial umum untuk kondisi yang kompleks.',
        'Hentikan sesi dan cari pertolongan jika anak kesulitan bernapas, kehilangan kesadaran, mengalami kejang yang tidak biasa, tampak sangat lemas, mengalami nyeri hebat, atau terjadi cedera. Untuk tanda bahaya, hubungi layanan kesehatan darurat sesuai wilayah.',
      ]],
      ['profesional', 'Memilih Terapis dan Berkoordinasi dengan Tim', [
        'Tanyakan pendidikan, pengalaman, ruang praktik, cara asesmen, dan batas layanan terapis. Terapis yang baik menjelaskan tujuan, risiko, alternatif, dan alasan setiap tindakan. Ia tidak menjanjikan kesembuhan, tidak memaksa anak, dan tidak meminta keluarga menghentikan layanan medis tanpa komunikasi dengan dokter.',
        'Bawalah ringkasan kondisi anak, obat yang digunakan, alergi, alat bantu, riwayat kejang, operasi, injeksi, nyeri, serta cara anak menunjukkan penolakan. Informasi ini membantu terapis memilih posisi dan tekanan yang lebih aman. Orang tua berhak meminta sesi dihentikan atau meminta penjelasan ulang.',
        'Koordinasikan hasil pengamatan dengan dokter, fisioterapis, dan terapis okupasi. Jika pijat membuat anak lebih siap mengikuti aktivitas, catat dalam konteks tersebut. Jika tidak ada manfaat atau anak selalu menolak, tidak ada kewajiban untuk meneruskannya. [[tempat-terapi-anak-jogja|Cara mencari layanan terapi]] perlu diikuti dengan verifikasi kompetensi dan kecocokan, bukan hanya melihat testimoni.',
        'Keluarga juga dapat memanfaatkan [[dukungan-keluarga-anak-abk|dukungan keluarga ABK]] untuk membagi tugas perawatan dan mengurangi kelelahan. Rutinitas yang aman harus realistis bagi anak dan orang yang mendampinginya.',
      ]],
      ['rumah', 'Contoh Rutinitas Rumah yang Berpusat pada Anak', [
        'Mulai dengan memberi pilihan, misalnya tangan atau kaki, sekarang atau setelah membaca buku, serta sentuhan atau tidak. Gunakan kata dan simbol yang biasa dipahami anak. Minta izin sebelum menyentuh dan beri tanda ketika sesi akan selesai. Rangkaian yang dapat diprediksi membantu anak merasa memiliki kendali.',
        'Lakukan pemeriksaan singkat sebelum sesi, gunakan sentuhan lembut pada area yang disetujui, lalu ajak anak kembali ke aktivitas yang disukai. Sesi tidak harus setiap hari. Jika anak terlihat lelah, sakit, atau menolak, pilih aktivitas lain seperti membaca, bernapas tenang, atau perubahan posisi yang sudah diajarkan oleh terapis.',
        'Setelah sesi, catat respons anak tanpa memberi nilai yang berlebihan. Tuliskan apakah anak tampak nyaman, bagian yang ditolak, durasi, dan apakah ada perubahan kulit atau gerak. Catatan ini lebih berguna daripada klaim bahwa pijat berhasil karena anak tertidur.',
        'Jangan menjadikan pijat sebagai syarat kasih sayang atau kepatuhan. Anak berhak berkata tidak. Pengalaman perawatan yang menghormati batas tubuh dapat mendukung kepercayaan dan komunikasi, termasuk ketika anak membutuhkan bantuan pada aktivitas lain.',
      ]],
      ['ringkas', 'Kesimpulan: Utamakan Kenyamanan dan Perawatan Terkoordinasi', [
        'Terapi pijat anak cerebral palsy mungkin berguna sebagai dukungan kenyamanan bagi sebagian anak, tetapi bukti dan manfaatnya tidak boleh dilebih-lebihkan. Pijat bukan pengganti fisioterapi, obat, alat bantu, atau perawatan lain. Keputusan sebaiknya dibuat bersama tenaga kesehatan yang memahami kondisi anak dan tujuan keluarga.',
        'Prinsip paling aman adalah minta izin, gunakan sentuhan lembut, mulai singkat, jangan memaksa rentang gerak, amati respons, dan berhenti saat anak menolak atau muncul tanda bahaya. Pilih terapis yang transparan, berpengalaman, dan tidak menjanjikan hasil instan.',
        'Perawatan cerebral palsy membutuhkan dukungan berkelanjutan yang berpusat pada partisipasi anak. Dengan catatan yang rapi dan komunikasi antarpendamping, keluarga dapat menilai apakah pijat benar-benar membantu kualitas hidup anak atau justru perlu dihentikan.',
      ]],
    ],
    faq: [
      ['Apakah pijat bisa menyembuhkan cerebral palsy?', 'Tidak. Cerebral palsy adalah kondisi neurologis yang membutuhkan dukungan sesuai kebutuhan. Pijat mungkin membantu kenyamanan sebagian anak, tetapi bukan penyembuh dan bukan pengganti terapi utama.'],
      ['Apakah pijat aman untuk semua anak cerebral palsy?', 'Tidak otomatis. Keamanan bergantung pada tonus otot, nyeri, kulit, tulang dan sendi, epilepsi, alat bantu, obat, serta kondisi lain. Konsultasikan kepada dokter atau fisioterapis sebelum mencoba.'],
      ['Bagian tubuh mana yang boleh dipijat?', 'Tidak ada daftar yang sama untuk semua anak. Terapis perlu menilai kondisi dan mengajarkan area, posisi, tekanan, serta durasi yang sesuai. Hindari memijat luka, bengkak, tulang, atau area cedera tanpa arahan.'],
      ['Berapa lama durasi pijat anak cerebral palsy?', 'Mulailah singkat dan evaluasi respons anak. Durasi tidak boleh dipaksakan. Sesi harus dihentikan jika anak menolak, kesakitan, makin kaku, atau menunjukkan perubahan napas dan warna kulit.'],
      ['Apa tanda pijat harus dihentikan?', 'Tanda yang perlu diperhatikan antara lain menangis, meringis, menjauh, menahan napas, tubuh makin kaku, nyeri, kemerahan atau bengkak, lemas tidak biasa, serta perubahan kejang atau napas.'],
      ['Apakah pijat menggantikan fisioterapi?', 'Tidak. Fisioterapi memiliki tujuan dan asesmen yang berbeda. Pijat hanya boleh menjadi pelengkap jika sesuai dan tidak mengganggu rencana perawatan anak.'],
    ],
  },
];

function makeSchemas(a, canonical) {
  const faq = a.faq.map(([q, answer]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: answer } }));
  return {
    article: {
      '@context': 'https://schema.org', '@type': 'Article', headline: a.title,
      description: a.description, datePublished: DATE, dateModified: DATE,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      author: { '@type': 'Organization', name: AUTHOR.name, url: AUTHOR.url },
      publisher: { '@type': 'Organization', name: 'YUKA Indonesia', url: SITE, logo: { '@type': 'ImageObject', url: `${SITE}/Logo/Logo.webp` } },
      image: `${SITE}/${a.image}`, articleSection: 'Pendidikan', inLanguage: 'id-ID', keywords: a.keywords,
    },
    breadcrumb: { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Artikel', item: `${SITE}/blog` },
      { '@type': 'ListItem', position: 3, name: a.title, item: canonical },
    ] },
    faq: { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq },
  };
}

function renderBody(a) {
  const intro = a.sections[0][2][0];
  const toc = `<div class="toc"><h3>Daftar Isi</h3><ol>${a.sections.slice(1).map(([id, title]) => `<li><a href="#${id}">${title}</a></li>`).join('')}<li><a href="#faq">Pertanyaan yang Sering Diajukan</a></li></ol></div>`;
  const sectionHtml = a.sections.map(([id, title, paragraphs], index) => {
    const image = index === 4 ? `<figure class="article-inline-image"><img src="../${a.bodyImage}" alt="${esc(a.bodyImageAlt)}" loading="lazy" width="900" height="600"><figcaption>${esc(a.bodyImageCaption)}</figcaption></figure>` : '';
    return `${h2(id, title)}${image}${paragraphs.map(p).join('')}`;
  }).join('');
  const faqHtml = `<h2 id="faq">Pertanyaan yang Sering Diajukan</h2><div class="faq-list">${a.faq.map(([q, ans]) => `<details><summary>${q}</summary><p>${ans}</p></details>`).join('')}</div>`;
  const sources = `<div class="article-sources"><h3>Sumber dan Referensi</h3><ul>${a.sources.map(([url, label]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a></li>`).join('')}</ul><p style="margin-top:1rem;padding:1rem;background:#FFF3CD;border-left:4px solid #FFAD00;border-radius:6px;font-size:.95rem;line-height:1.6"><strong>Catatan:</strong> Artikel ini bersifat edukasi umum. Untuk keputusan kesehatan, perkembangan, terapi, atau keselamatan anak, konsultasikan kondisi individual kepada tenaga profesional. Sumber dicek pada 28 September 2026.</p></div>`;
  const moreReading = `<section class="info-box"><h3>Bacaan Terkait untuk Keluarga</h3><p>Topik perkembangan dan terapi saling berhubungan. Lanjutkan dengan membaca ${a.related.map(([slug, label]) => `<a href="../artikel/${slug}">${label}</a>`).join(', ')}.</p></section>`;
  return `<div class="aeo-answer-box"><span class="label">Jawaban singkat</span>${p(intro)}</div>${toc}${sectionHtml}${faqHtml}${moreReading}${sources}<aside data-catchup="editorial-policy" style="margin:28px 0;padding:16px;border:1px solid #d9dfeb;border-radius:10px"><strong>Catatan editorial:</strong> Artikel ini adalah informasi umum. Baca <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a> atau laporkan koreksi ke <a href="mailto:info@yukaindonesia.com">info@yukaindonesia.com</a>.</aside>`;
}

function render(a) {
  const canonical = `${SITE}/artikel/${a.slug}`;
  const schemas = makeSchemas(a, canonical);
  const html = `<!DOCTYPE html>
<html lang="id"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>${esc(a.title)} | YUKA</title><meta name="description" content="${esc(a.description)}"><meta name="keywords" content="${esc(a.keywords)}, YUKA"><meta name="author" content="Yayasan Ukhuwah Kaffah Amanatullah"><meta name="robots" content="index, follow"><link rel="canonical" href="${canonical}"><link rel="alternate" type="application/rss+xml" title="YUKA Blog" href="${SITE}/feed.xml">
<meta property="og:type" content="article"><meta property="og:url" content="${canonical}"><meta property="og:title" content="${esc(a.title)}"><meta property="og:description" content="${esc(a.description)}"><meta property="og:image" content="${SITE}/${a.image}"><meta property="og:image:alt" content="${esc(a.imageAlt)}"><meta property="og:locale" content="id_ID"><meta property="og:site_name" content="YUKA Indonesia"><meta property="article:published_time" content="${DATE}"><meta property="article:modified_time" content="${DATE}">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Amiri:wght@400;700&display=swap"></noscript><link rel="stylesheet" href="../assets/css/style.min.css">
<script type="application/ld+json">${jsonLd(schemas.article)}</script><script type="application/ld+json">${jsonLd(schemas.breadcrumb)}</script><script type="application/ld+json">${jsonLd(schemas.faq)}</script>${sharedStyle}<link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32.png"><link rel="apple-touch-icon" href="/assets/images/apple-touch-icon.png">
</head><body>
<nav class="navbar" id="navbar"><div class="container"><a href="../" class="navbar-brand"><img src="../Logo/Logo.webp" alt="YUKA, Yayasan Ukhuwah Kaffah Amanatullah" class="brand-logo" width="180" height="60"></a><div class="navbar-menu" id="navbarMenu"><a href="../">Beranda</a><a href="../tentang">Tentang</a><a href="../program">Program</a><a href="../galeri">Galeri</a><a href="../blog" class="active">Artikel</a><a href="../kontak">Kontak</a><a href="../donasi" class="btn btn-primary btn-sm">Donasi</a></div><button class="navbar-toggle" id="navbarToggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button></div></nav>
<header class="article-header"><div class="container"><div class="breadcrumb"><a href="../">Beranda</a><span class="separator">/</span><a href="../blog">Artikel</a><span class="separator">/</span><span class="current">${esc(a.title)}</span></div><span class="card-category" style="background:var(--secondary);color:var(--gray-900);padding:.5rem 1rem;border-radius:20px;font-size:.875rem;display:inline-block;margin:1rem 0">Pendidikan</span><h1 style="font-size:2.5rem;max-width:800px">${esc(a.title)}</h1><aside data-revision-marker="yuka-20260928-v2-${a.slug}" style="margin:22px 0;padding:18px;border:1px solid rgba(255,255,255,.35);border-radius:10px"><strong>Catatan edukasi YUKA</strong><p>Artikel ini membantu keluarga memahami perkembangan dan dukungan anak. Isinya bukan diagnosis atau pengganti konsultasi profesional.</p></aside><div class="article-meta"><span>${new Date(`${DATE}T00:00:00Z`).toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric',timeZone:'UTC'})}</span><span>${a.readTime}</span><span>${AUTHOR.name}</span><span>Diperbarui 28 September 2026</span></div></div></header>
<div class="container"><figure class="article-featured-image"><img src="../${a.image}" alt="${esc(a.imageAlt)}" width="900" height="600" fetchpriority="high" decoding="async"><figcaption>${esc(a.imageCaption)}</figcaption></figure></div>
<article class="article-content"><div class="article-body" data-article-content="${a.slug}">${renderBody(a)}<div class="article-tags">${a.related.slice(0,5).map(([,label])=>`<span>#${label.replace(/ /g,'-')}</span>`).join(' ')}</div></div></article>
<section class="section bg-primary" style="padding:4rem 0"><div class="container text-center"><h2 style="color:var(--white);margin-bottom:1rem">Dukung Pendidikan Inklusif YUKA</h2><p style="color:rgba(255,255,255,.9);max-width:600px;margin:0 auto 2rem">Dukungan keluarga dan masyarakat membantu anak berkebutuhan khusus mendapatkan ruang belajar serta pendampingan yang sesuai.</p><div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap"><a href="../donasi" class="btn btn-secondary">Donasi Sekarang</a><a href="../program" class="btn btn-outline-light">Lihat Program YUKA</a></div></div></section><script src="../assets/js/main.min.js" defer></script></body></html>`;
  return ensureArticleShell(html);
}

function updateBlog() {
  const blogPath = path.join(ROOT, 'blog.html');
  let blog = fs.readFileSync(blogPath, 'utf8');
  const marker = '<div class="blog-grid" id="blogGrid">';
  if (!blog.includes(marker)) throw new Error('blog grid marker not found');
  const cards = articles.filter(a => !blog.includes(`artikel/${a.slug}`)).map(a => `\n                <!-- Article: ${a.title} -->\n                <article class="card blog-card animate-on-scroll" data-yuka-revision="yuka-20260928-${a.slug}"><div class="card-image"><img src="${a.image}" alt="${esc(a.imageAlt)}" loading="lazy"></div><div class="card-body"><span class="card-category">Pendidikan</span><h3 class="card-title"><a href="artikel/${a.slug}">${esc(a.title)}</a></h3><p class="card-text">${esc(a.description)}</p><div class="card-meta"><span>28 Sep 2026</span><span>${a.readTime}</span></div></div></article>`).join('');
  if (cards) fs.writeFileSync(blogPath, blog.replace(marker, marker + cards));
}

for (const a of articles) {
  const html = render(a);
  const missing = missingShellParts(html);
  const linkCount = (html.match(/href="\.\.\/artikel\//g) || []).length;
  const faqCount = (html.match(/<details>/g) || []).length;
  const bodyWords = words(html.match(/<div class="article-body"[\s\S]*?<\/article>/)?.[0] || html);
  if (missing.length) throw new Error(`${a.slug} shell gate failed: ${missing.join(', ')}`);
  if (bodyWords < 1500) throw new Error(`${a.slug} word gate failed: ${bodyWords}`);
  if (linkCount < 10) throw new Error(`${a.slug} internal link gate failed: ${linkCount}`);
  if (faqCount < 5) throw new Error(`${a.slug} FAQ gate failed: ${faqCount}`);
  if (/—|–/.test(html)) throw new Error(`${a.slug} contains an em/en dash`);
  fs.writeFileSync(path.join(ROOT, 'artikel', `${a.slug}.html`), html);
  console.log(JSON.stringify({ slug: a.slug, file: `artikel/${a.slug}.html`, words: bodyWords, internalLinks: linkCount, faq: faqCount, images: (html.match(/<img /g) || []).length, shell: missing }));
}
updateBlog();
for (const a of articles) execFileSync('node', ['scripts/update-feed.js', a.slug, a.title, a.description, DATE], { cwd: ROOT, stdio: 'inherit' });
execFileSync('node', ['scripts/regen-sitemaps.js'], { cwd: ROOT, stdio: 'inherit' });
console.log(JSON.stringify({ published: articles.map(a => a.slug), date: DATE }));

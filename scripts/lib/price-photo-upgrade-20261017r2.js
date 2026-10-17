'use strict';
// Preserve contextual, non-clinical documentation when regenerating legacy fee pages.
const config={
  "berapa-biaya-terapi-anak-berkebutuhan-khusus": [
    {
      "i": 10,
      "path": "Dokumentasi/cpao-anak-anak-belajar-membuat-kue-042.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Tangan peserta dan pendamping menyiapkan adonan di atas alas memasak",
      "caption": "Dokumentasi belajar keterampilan sehari-hari YUKA. Foto bukan layanan klinis atau sumber tarif."
    },
    {
      "i": 60,
      "path": "Dokumentasi/cpao-kunjungan-kelompok-rumah-tradisional-jawa-056.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Peserta dan pendamping mengikuti kegiatan kelompok di pendopo terbuka",
      "caption": "Dokumentasi kegiatan bersama peserta dan pendamping YUKA. Foto tidak menunjukkan pemeriksaan atau terapi di rumah sakit."
    },
    {
      "i": 65,
      "path": "Dokumentasi/cpao-perempuan-belajar-memasak-bersama-040.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Sekelompok peserta belajar menyiapkan adonan bersama di meja",
      "caption": "Dokumentasi interaksi dalam kelas memasak YUKA. Aktivitas ini bukan pembanding biaya atau bukti hasil terapi."
    },
    {
      "i": 68,
      "path": "Dokumentasi/cpao-peserta-kelas-memasak-foto-bersama-075.webp",
      "size": [
        754,
        651
      ],
      "alt": "Rombongan peserta kelas memasak dan pendamping berfoto bersama",
      "caption": "Dokumentasi kegiatan kelompok YUKA. Foto tidak menggambarkan tarif atau hasil pemeriksaan."
    }
  ],
  "berapa-biaya-terapi-bicara-anak": [
    {
      "i": 6,
      "path": "Dokumentasi/cpao-anak-anak-belajar-memasak-tradisional-045.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Dua peserta bertopi memasak duduk di depan alas adonan di meja",
      "caption": "Dokumentasi belajar keterampilan sehari-hari YUKA. Foto bukan layanan klinis atau sumber tarif."
    },
    {
      "i": 19,
      "path": "Dokumentasi/cpao-anak-belajar-memasak-bersama-dewasa-047.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Pendamping mendemonstrasikan kegiatan di meja di depan peserta bertopi",
      "caption": "Dokumentasi kegiatan bersama peserta dan pendamping YUKA. Foto tidak menunjukkan pemeriksaan atau terapi di rumah sakit."
    },
    {
      "i": 57,
      "path": "Dokumentasi/cpao-kelas-memasak-tradisional-wanita-berhijab-009.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Beberapa peserta menyiapkan adonan di meja dengan pendamping",
      "caption": "Dokumentasi interaksi dalam kelas memasak YUKA. Aktivitas ini bukan pembanding biaya atau bukti hasil terapi."
    },
    {
      "i": 66,
      "path": "Dokumentasi/cpao-peserta-kelas-memasak-berfoto-bersama-070.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Peserta dan pendamping duduk bersama menghadap meja kegiatan",
      "caption": "Dokumentasi kegiatan kelompok YUKA. Foto tidak menggambarkan tarif atau hasil pemeriksaan."
    }
  ],
  "tempat-terapi-anak-jogja": [
    {
      "i": 11,
      "path": "Dokumentasi/cpao-anak-anak-bermain-topi-koki-068.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Peserta dan pendamping mengikuti kegiatan bersama di pendopo",
      "caption": "Dokumentasi belajar keterampilan sehari-hari YUKA. Foto bukan layanan klinis atau sumber tarif."
    },
    {
      "i": 15,
      "path": "Dokumentasi/cpao-anak-anak-kelas-memasak-bersama-071.webp",
      "size": [
        1200,
        900
      ],
      "alt": "Rombongan peserta dan pendamping berfoto bersama di halaman",
      "caption": "Dokumentasi kegiatan bersama peserta dan pendamping YUKA. Foto tidak menunjukkan pemeriksaan atau terapi di rumah sakit."
    },
    {
      "i": 50,
      "path": "Dokumentasi/cpao-grup-wanita-kegiatan-pavilion-kayu-049.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Beberapa peserta dan pendamping berdiri bersama di pendopo",
      "caption": "Dokumentasi interaksi dalam kelas memasak YUKA. Aktivitas ini bukan pembanding biaya atau bukti hasil terapi."
    },
    {
      "i": 64,
      "path": "Dokumentasi/cpao-pelatihan-membuat-kue-bersama-wanita-010.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Beberapa peserta dan pendamping menyiapkan adonan pada meja panjang",
      "caption": "Dokumentasi kegiatan kelompok YUKA. Foto tidak menggambarkan tarif atau hasil pemeriksaan."
    }
  ],
  "tes-psikolog-anak-bayar-berapa": [
    {
      "i": 20,
      "path": "Dokumentasi/cpao-anak-belajar-memasak-bersama-ibu-039.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Pendamping membantu kegiatan peserta di depan alas adonan",
      "caption": "Dokumentasi belajar keterampilan sehari-hari YUKA. Foto bukan layanan klinis atau sumber tarif."
    },
    {
      "i": 63,
      "path": "Dokumentasi/cpao-pelatihan-memasak-wanita-berjilbab-034.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Dua peserta bertopi bekerja di depan alas adonan di meja",
      "caption": "Dokumentasi kegiatan bersama peserta dan pendamping YUKA. Foto tidak menunjukkan pemeriksaan atau terapi di rumah sakit."
    },
    {
      "i": 73,
      "path": "Dokumentasi/cpao-peserta-kelas-memasak-kue-tradisional-036.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Dua peserta bertopi memasak duduk di depan meja kegiatan",
      "caption": "Dokumentasi interaksi dalam kelas memasak YUKA. Aktivitas ini bukan pembanding biaya atau bukti hasil terapi."
    },
    {
      "i": 75,
      "path": "Dokumentasi/cpao-peserta-pelatihan-memasak-menggunakan-silikon-mat-041.webp",
      "size": [
        936,
        1248
      ],
      "alt": "Peserta dan pendamping menyiapkan adonan di atas alas silikon",
      "caption": "Dokumentasi kegiatan kelompok YUKA. Foto tidak menggambarkan tarif atau hasil pemeriksaan."
    }
  ]
};
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');}
function addPricePhotos(html,slug){
 const photos=config[slug];if(!photos)throw Error('Unknown fee-page slug');
 if(html.includes('yuka-price-photo-20261017r2'))return html;
 const headings=Array.from(html.matchAll(/<h2\b[^>]*>[\s\S]*?<\/h2>/g));if(headings.length<8)throw Error('Missing fee-page sections');
 const positions=[2,4,6,7];
 for(let j=3;j>=0;j--){const p=photos[j];const figure='<!-- yuka-price-photo-20261017r2 --><figure style="margin:2rem 0;"><img src="../'+esc(p.path)+'" width="'+p.size[0]+'" height="'+p.size[1]+'" loading="lazy" decoding="async" alt="'+esc(p.alt)+'" style="display:block;width:100%;height:auto;"><figcaption>'+esc(p.caption)+'<span style="display:block;font-size:.85em;">Foto: Dokumentasi YUKA (Yayasan Ukhuwah Kaffah Amanatullah).</span></figcaption></figure>\n';const at=headings[positions[j]].index;html=html.slice(0,at)+figure+html.slice(at);}
 return html;
}
module.exports={addPricePhotos};

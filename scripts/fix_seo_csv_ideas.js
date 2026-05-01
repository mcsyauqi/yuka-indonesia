/**
 * Fix SEO recommendations from Semrush CSV (ideas_www.yukaindonesia.com_20260501.csv)
 *
 * Changes:
 * 1. disleksia-adalah   — title + meta desc (add "gejala disleksia")
 * 2. adhd-adalah        — title + meta desc (add "adhd disorder", "gangguan mental")
 * 3. down-syndrome      — meta desc (add "orang down syndrome", "ciri fisik", "gejala")
 * 4. autisme-adalah     — add 2 contextual inline links in body
 *
 * SKIP: /tentang — Semrush suggests "biodata yuka"/"yuka amara" keywords
 *       which target a different "Yuka" (singer/influencer), NOT the YUKA foundation.
 */

const fs = require('fs');
const path = require('path');
const DIR = 'D:/Projects/Yuka/artikel';

function patchFile(slug, patches) {
  const fp = path.join(DIR, slug + '.html');
  let html = fs.readFileSync(fp, 'utf8');
  let count = 0;
  for (const [from, to] of patches) {
    if (!html.includes(from)) {
      console.log(`  ⚠️  Pattern not found in ${slug}: "${from.substring(0, 60)}"`);
      continue;
    }
    html = html.replace(from, to);
    count++;
  }
  fs.writeFileSync(fp, html);
  console.log(`✓ ${slug}: ${count}/${patches.length} patches applied`);
}

// ── 1. disleksia-adalah ──────────────────────────────────────────────────────
patchFile('disleksia-adalah', [
  [
    '<title>Disleksia: Ciri-Ciri, Penyebab & Cara Membantu Anak | YUKA</title>',
    '<title>Disleksia: Gejala, Ciri-Ciri, Penyebab & Cara Membantu Anak | YUKA</title>'
  ],
  [
    'content="Disleksia adalah gangguan belajar yang memengaruhi kemampuan membaca. Kenali ciri-ciri, penyebab, dan cara membantu anak disleksia belajar dengan efektif."',
    'content="Disleksia adalah gangguan belajar yang memengaruhi kemampuan membaca. Kenali gejala disleksia, ciri-ciri, penyebab, dan cara membantu anak belajar efektif."'
  ],
]);

// ── 2. adhd-adalah ───────────────────────────────────────────────────────────
patchFile('adhd-adalah', [
  [
    '<title>ADHD Adalah: Gejala, Penyebab & Cara Menangani | YUKA</title>',
    '<title>ADHD Disorder: Gangguan Mental, Gejala & Cara Menangani Anak | YUKA</title>'
  ],
  [
    'content="Panduan lengkap ADHD pada anak: pengertian, gejala, penyebab, diagnosis, dan cara menangani. Dilengkapi pengalaman pendampingan ABK di YUKA Yogyakarta."',
    'content="ADHD disorder adalah gangguan mental yang memengaruhi konsentrasi anak sejak masa kanak-kanak. Pelajari gejala, penyebab, dan cara menangani anak ADHD bersama YUKA Yogyakarta."'
  ],
]);

// ── 3. down-syndrome-adalah ──────────────────────────────────────────────────
patchFile('down-syndrome-adalah', [
  [
    'content="Down syndrome adalah kondisi genetik akibat kelebihan kromosom 21. Kenali ciri-ciri, penyebab, dan cara mendukung tumbuh kembang anak down syndrome."',
    'content="Down syndrome adalah kondisi genetik akibat kelebihan kromosom 21. Kenali ciri-ciri fisik, gejala down syndrome pada orang down syndrome, dan cara mendukung tumbuh kembang optimal."'
  ],
]);

// ── 4. autisme-adalah — add contextual inline links in body ──────────────────
// Target: paragraph at "Jika Anda mencari tempat pendampingan..."
// Add a natural sentence before it about related conditions with links
patchFile('autisme-adalah', [
  [
    '<p>Jika Anda mencari tempat pendampingan untuk anak autis di Yogyakarta,',
    '<p>Autisme sering ditemukan bersamaan dengan kondisi lain seperti <a href="adhd-adalah">ADHD (Attention Deficit Hyperactivity Disorder)</a> atau kondisi genetik seperti <a href="down-syndrome-adalah">Down Syndrome</a>. Memahami perbedaannya penting agar anak mendapat penanganan yang tepat. Baca juga panduan lengkap tentang <a href="abk-adalah-anak-berkebutuhan-khusus">Anak Berkebutuhan Khusus (ABK)</a> dan berbagai kondisi yang termasuk di dalamnya.</p>\n\n            <p>Jika Anda mencari tempat pendampingan untuk anak autis di Yogyakarta,'
  ],
]);

console.log('\nDone. Verify with: git diff --stat');

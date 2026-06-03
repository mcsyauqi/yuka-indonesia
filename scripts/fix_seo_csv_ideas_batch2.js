/**
 * Fix SEO recommendations from Semrush Ideas — BATCH 2 (2026-06-04)
 *
 * Follow-up to scripts/fix_seo_csv_ideas.js (batch 1: disleksia, adhd,
 * down-syndrome, autisme done 2026-05-01). Batch 2 covers the next-highest
 * priority pages, prioritised by real GSC impressions + DataForSEO search
 * volume for the page's keyword cluster + thin-meta / low-internal-link flags.
 *
 * Prioritisation signal (real, not fabricated):
 *   - GSC (last 90d): inklusi-sosial 1799 imp pos 5.3 (top article page),
 *     program-pemberdayaan pos 9.5.
 *   - DataForSEO id/Indonesia keyword cluster for "inklusi sosial":
 *     "inklusi sosial adalah" 2400, "contoh inklusi sosial" 590,
 *     "apa itu inklusi sosial" 390, "pengertian inklusi sosial" 210.
 *   - Local audit: thin meta (<120 chars) + low internal-link pages.
 *
 * Changes are ADDITIVE / corrective only (no ranking content removed):
 *   1. inklusi-sosial             — meta desc semantic enrichment (LSI cluster)
 *   2. penyandang-disabilitas     — FIX malformed meta desc (raw <a> inside content attr)
 *   3. disabilitas-adalah         — meta desc semantic enrichment
 *   4. kesulitan-belajar          — meta desc semantic enrichment
 *   5. memilih-yayasan-...        — meta desc semantic enrichment
 *   6. program-pemberdayaan-...   — meta desc semantic enrichment (light)
 *   7. peran-orang-tua-...        — add 1 contextual internal link (had only 1)
 *   8. abk-menghadapi-era-ai      — add 2 contextual internal links (had only 1)
 */

const fs = require('fs');
const path = require('path');
const DIR = 'D:/Projects/Yuka/artikel';

let totalApplied = 0;
let totalPatches = 0;

function patchFile(slug, patches) {
  const fp = path.join(DIR, slug + '.html');
  let html = fs.readFileSync(fp, 'utf8');
  let count = 0;
  for (const [from, to] of patches) {
    totalPatches++;
    if (!html.includes(from)) {
      console.log(`  WARN pattern not found in ${slug}: "${from.substring(0, 70)}"`);
      continue;
    }
    html = html.replace(from, to);
    count++;
    totalApplied++;
  }
  fs.writeFileSync(fp, html);
  console.log(`OK ${slug}: ${count}/${patches.length} patches applied`);
}

// 1. inklusi-sosial — enrich meta with real LSI keyword cluster
patchFile('inklusi-sosial', [
  [
    '<meta name="description" content="Inklusi sosial adalah prinsip yang memastikan setiap individu berpartisipasi penuh dalam masyarakat.">',
    '<meta name="description" content="Inklusi sosial adalah prinsip yang memastikan setiap individu berpartisipasi penuh dalam masyarakat. Pahami pengertian inklusi sosial, prinsip, contoh penerapannya di masyarakat Indonesia, dan perbedaannya dengan eksklusi sosial.">'
  ],
]);

// 2. penyandang-disabilitas — FIX malformed meta (raw <a> tag broke the attribute)
patchFile('penyandang-disabilitas', [
  [
    '<meta name="description" content="Penyandang disabilitas di Indonesia dilindungi <a href="https://peraturan.bpk.go.id/Details/37251/uu-no-8-tahun-2016" target="_blank" rel="noopener">UU No. 8 Tahun 2016</a>. Pelajari hak-hak, cara membuat kartu disabilitas, dan program dukungan yang tersedia.">',
    '<meta name="description" content="Penyandang disabilitas di Indonesia dilindungi UU No. 8 Tahun 2016. Pelajari hak penyandang disabilitas, jenis disabilitas, cara membuat kartu disabilitas, dan program dukungan yang tersedia.">'
  ],
]);

// 3. disabilitas-adalah — enrich meta
patchFile('disabilitas-adalah', [
  [
    '<meta name="description" content="Disabilitas adalah kondisi keterbatasan fisik, intelektual, mental, atau sensorik.">',
    '<meta name="description" content="Disabilitas adalah kondisi keterbatasan fisik, intelektual, mental, atau sensorik. Kenali jenis-jenis disabilitas, hak penyandang disabilitas, serta bentuk dukungan untuk kemandirian mereka di Indonesia.">'
  ],
]);

// 4. kesulitan-belajar — enrich meta
patchFile('kesulitan-belajar', [
  [
    '<meta name="description" content="Kesulitan belajar pada anak meliputi disleksia, diskalkulia, disgrafia, dan lainnya.">',
    '<meta name="description" content="Kesulitan belajar pada anak meliputi disleksia, diskalkulia, disgrafia, dan lainnya. Kenali jenis, penyebab, ciri-ciri kesulitan belajar, dan cara mengatasinya agar anak dapat belajar dengan optimal.">'
  ],
]);

// 5. memilih-yayasan-anak-berkebutuhan-khusus — enrich meta
patchFile('memilih-yayasan-anak-berkebutuhan-khusus', [
  [
    '<meta name="description" content="Panduan praktis memilih yayasan sosial anak berkebutuhan khusus yang kredibel dan berkualitas.">',
    '<meta name="description" content="Panduan praktis memilih yayasan sosial anak berkebutuhan khusus yang kredibel dan berkualitas. Pelajari kriteria, ciri yayasan ABK terpercaya, dan hal yang perlu diperiksa sebelum mempercayakan anak Anda.">'
  ],
]);

// 6. program-pemberdayaan-anak-berkebutuhan-khusus — light meta enrich (GSC pos 9.5)
patchFile('program-pemberdayaan-anak-berkebutuhan-khusus', [
  [
    '<meta name="description" content="Pelajari berbagai program pemberdayaan anak berkebutuhan khusus yang efektif, mulai dari pendidikan, pelatihan keterampilan, hingga persiapan kemandirian.">',
    '<meta name="description" content="Pelajari berbagai program pemberdayaan anak berkebutuhan khusus yang efektif, mulai dari pendidikan, pelatihan keterampilan, terapi, hingga persiapan kemandirian dan kemandirian ekonomi ABK.">'
  ],
]);

// 7. peran-orang-tua-pendidikan-inklusi — add 1 contextual internal link (had only 1)
patchFile('peran-orang-tua-pendidikan-inklusi', [
  [
    'Tanpa peran keluarga, bahkan program pendidikan terbaik pun akan sulit mencapai hasil yang optimal.</p>',
    'Tanpa peran keluarga, bahkan program pendidikan terbaik pun akan sulit mencapai hasil yang optimal. Untuk memahami konsep dasarnya, baca juga panduan kami tentang <a href="pendidikan-inklusi">pendidikan inklusi</a> dan pentingnya <a href="intervensi-dini">intervensi dini</a> bagi tumbuh kembang anak.</p>'
  ],
]);

// 8. abk-menghadapi-era-ai — add 2 contextual internal links (had only 1)
patchFile('abk-menghadapi-era-ai', [
  [
    'Namun, persiapan yang matang tetap diperlukan agar mereka tidak tertinggal.</p>',
    'Namun, persiapan yang matang tetap diperlukan agar mereka tidak tertinggal. Pelajari juga ragam <a href="program-pemberdayaan-anak-berkebutuhan-khusus">program pemberdayaan anak berkebutuhan khusus</a> dan pentingnya <a href="intervensi-dini">intervensi dini</a> dalam mempersiapkan masa depan ABK.</p>'
  ],
]);

console.log(`\nDone. ${totalApplied}/${totalPatches} total patches applied.`);
console.log('Verify with: git diff --stat');

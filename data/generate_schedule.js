const fs = require('fs');

// Load all keywords
const batch4 = JSON.parse(fs.readFileSync('D:/Claude/Projects/Yuka/data/new_keywords_batch4.json')).keywords;
const batch5 = JSON.parse(fs.readFileSync('D:/Claude/Projects/Yuka/data/new_keywords_expanded.json')).keywords;

// Existing schedule
const existingSchedule = JSON.parse(fs.readFileSync('D:/Claude/Projects/Yuka/publish-schedule.json'));
const existingSlugs = new Set(existingSchedule.map(a => a.slug));

// Existing articles
const existingArticles = new Set(
  fs.readdirSync('D:/Claude/Projects/Yuka/artikel')
    .filter(f => f.endsWith('.html'))
    .map(f => f.replace('.html', ''))
);

// Convert keyword to slug
function toSlug(keyword) {
  return keyword
    .toLowerCase()
    .replace(/[?!.,;:'"()]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 80);
}

// Convert keyword to title
function toTitle(keyword) {
  return keyword
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// Cluster to category mapping
const clusterToCategory = {
  'specific conditions': 'Pendidikan',
  'therapies & interventions': 'Terapi',
  'education': 'Pendidikan',
  'parenting & family': 'Parenting',
  'development milestones': 'Perkembangan',
  'indonesian context': 'Lokal',
  'life skills & vocational': 'Kemandirian',
  'research & trends': 'Pendidikan',
  'technology & tools': 'Teknologi',
  'nutrition & health': 'Kesehatan',
};

// Combine all new keywords (avoid duplicates with existing)
const allNew = [];
const seenSlugs = new Set([...existingSlugs, ...existingArticles]);

// Batch 4 (plain strings)
batch4.forEach(k => {
  const slug = toSlug(k);
  if (!seenSlugs.has(slug)) {
    seenSlugs.add(slug);
    allNew.push({ keyword: k, slug, cluster: 'general', intent: 'informational' });
  }
});

// Batch 5 (objects with cluster/intent)
batch5.forEach(item => {
  const slug = toSlug(item.keyword);
  if (!seenSlugs.has(slug)) {
    seenSlugs.add(slug);
    allNew.push({ keyword: item.keyword, slug, cluster: item.cluster, intent: item.intent });
  }
});

console.log(`New keywords to schedule: ${allNew.length}`);
console.log(`Already scheduled/written: ${existingSlugs.size + existingArticles.size}`);

// Generate dates: 3 per day, Mon-Sat, starting from Jul 29, 2026
const startDate = new Date('2026-07-29');
const endDate = new Date('2026-12-31');
const dates = [];

for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
  const dow = d.getDay();
  if (dow >= 1 && dow <= 6) { // Mon-Sat
    const dateStr = d.toISOString().split('T')[0];
    dates.push(dateStr);
    dates.push(dateStr);
    dates.push(dateStr);
  }
}

console.log(`Available date slots (3/day Mon-Sat): ${dates.length}`);
console.log(`Date range: ${dates[0]} to ${dates[dates.length - 1]}`);

// Assign keywords to dates
const newSchedule = [];
const maxArticles = Math.min(allNew.length, dates.length);

// Shuffle keywords to vary clusters per day
const shuffled = [...allNew];
for (let i = shuffled.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
}

// Pick images from Dokumentasi folder
const images = fs.readdirSync('D:/Claude/Projects/Yuka/Dokumentasi')
  .filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'))
  .map(f => `Dokumentasi/${f}`);

for (let i = 0; i < maxArticles; i++) {
  const kw = shuffled[i];
  const category = clusterToCategory[kw.cluster] || 'Pendidikan';
  const image = images[i % images.length];

  newSchedule.push({
    date: dates[i],
    slug: kw.slug,
    file: `artikel/${kw.slug}.html`,
    title: toTitle(kw.keyword),
    description: `Artikel lengkap tentang ${kw.keyword}. Panduan komprehensif untuk orang tua, guru, dan pendamping anak berkebutuhan khusus.`,
    image: image,
    category: category,
    readTime: '12 menit baca'
  });
}

console.log(`\nScheduled ${newSchedule.length} new articles`);
console.log(`First new: ${newSchedule[0]?.date} - ${newSchedule[0]?.slug}`);
console.log(`Last new: ${newSchedule[newSchedule.length - 1]?.date} - ${newSchedule[newSchedule.length - 1]?.slug}`);

// Merge with existing schedule
const fullSchedule = [...existingSchedule, ...newSchedule];
console.log(`\nTotal schedule: ${fullSchedule.length} articles`);
console.log(`Existing: ${existingSchedule.length}`);
console.log(`New: ${newSchedule.length}`);

// Save
fs.writeFileSync('D:/Claude/Projects/Yuka/data/full_schedule.json', JSON.stringify(fullSchedule, null, 2));
console.log(`\nSaved to data/full_schedule.json`);

// Also save summary for spreadsheet
const summary = newSchedule.map((a, i) => [
  (64 + i).toString(), // Numbering continues from existing 63
  toTitle(a.slug.replace(/-/g, ' ')),
  shuffled[i].keyword,
  shuffled[i].cluster,
  'Scheduled',
  a.date,
  `https://yukaindonesia.com/artikel/${a.slug}`,
  a.description.substring(0, 155),
  a.readTime.replace(' baca', ''),
  `${a.date}, 09:00 WIB`
]);

fs.writeFileSync('D:/Claude/Projects/Yuka/data/schedule_for_sheet.json', JSON.stringify(summary));
console.log(`Saved ${summary.length} rows for spreadsheet update`);

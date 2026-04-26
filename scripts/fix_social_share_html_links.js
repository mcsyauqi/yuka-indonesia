/**
 * fix_social_share_html_links.js
 *
 * Fix .html extensions in social share button URLs (WhatsApp, Facebook, Twitter).
 * These appear as yukaindonesia.com/artikel/{slug}.html inside href attributes
 * of the share buttons — causing GSC "Page with Redirect" issues when shared.
 *
 * Replaces:
 *   yukaindonesia.com/artikel/{slug}.html  →  yukaindonesia.com/artikel/{slug}
 *
 * ONLY touches social share links (wa.me, facebook.com/sharer, twitter.com/intent).
 * Does NOT touch nav links or regular article content.
 *
 * Run: node scripts/fix_social_share_html_links.js
 */

const fs = require('fs');
const path = require('path');

const ARTIKEL_DIR = 'D:/Projects/Yuka/artikel';
const files = fs.readdirSync(ARTIKEL_DIR).filter(f => f.endsWith('.html'));

let totalFixed = 0;
let filesModified = 0;
const fixedFiles = [];

files.forEach(filename => {
  const filepath = path.join(ARTIKEL_DIR, filename);
  let content = fs.readFileSync(filepath, 'utf8');
  const original = content;

  // Fix .html in social share button hrefs only.
  // These links contain yukaindonesia.com/artikel/{slug}.html
  // They appear in:
  //   - wa.me/?text=...https://yukaindonesia.com/artikel/{slug}.html
  //   - facebook.com/sharer/sharer.php?u=https://yukaindonesia.com/artikel/{slug}.html
  //   - twitter.com/intent/tweet?...url=https://yukaindonesia.com/artikel/{slug}.html
  //
  // The .html may appear as literal text (not URL-encoded) within the href value.
  // We replace all occurrences of yukaindonesia.com/artikel/{slug}.html inside href=""
  // that belong to social share links.

  // Strategy: replace the literal pattern within href attributes of share links.
  // Use a regex that matches the full href value of share buttons and removes .html.

  // Replace in wa.me share links
  content = content.replace(
    /(href="https:\/\/wa\.me\/[^"]*yukaindonesia\.com\/artikel\/[a-z0-9-]+)\.html([^"]*")/g,
    '$1$2'
  );

  // Replace in Facebook sharer links
  content = content.replace(
    /(href="https:\/\/www\.facebook\.com\/sharer\/[^"]*yukaindonesia\.com\/artikel\/[a-z0-9-]+)\.html([^"]*")/g,
    '$1$2'
  );

  // Replace in Twitter intent links
  content = content.replace(
    /(href="https:\/\/twitter\.com\/intent\/[^"]*yukaindonesia\.com\/artikel\/[a-z0-9-]+)\.html([^"]*")/g,
    '$1$2'
  );

  if (content !== original) {
    // Count how many replacements were made
    const before = (original.match(/yukaindonesia\.com\/artikel\/[a-z0-9-]+\.html/g) || []).length;
    const after = (content.match(/yukaindonesia\.com\/artikel\/[a-z0-9-]+\.html/g) || []).length;
    const fixed = before - after;
    totalFixed += fixed;
    filesModified++;
    fixedFiles.push({ filename, fixed });
    fs.writeFileSync(filepath, content, 'utf8');
    console.log(`Fixed ${filename}: ${fixed} social share .html link(s) removed`);
  }
});

console.log('\n=== SUMMARY ===');
console.log('Files modified:', filesModified);
console.log('Total social share .html links fixed:', totalFixed);

// Verification: check if any .html links remain in social share context
let remaining = 0;
files.forEach(filename => {
  const filepath = path.join(ARTIKEL_DIR, filename);
  const content = fs.readFileSync(filepath, 'utf8');
  // Check only within social share href attributes
  const waMatches = (content.match(/href="https:\/\/wa\.me\/[^"]*yukaindonesia\.com\/artikel\/[a-z0-9-]+\.html[^"]*"/g) || []).length;
  const fbMatches = (content.match(/href="https:\/\/www\.facebook\.com\/sharer\/[^"]*yukaindonesia\.com\/artikel\/[a-z0-9-]+\.html[^"]*"/g) || []).length;
  const twMatches = (content.match(/href="https:\/\/twitter\.com\/intent\/[^"]*yukaindonesia\.com\/artikel\/[a-z0-9-]+\.html[^"]*"/g) || []).length;
  remaining += waMatches + fbMatches + twMatches;
});

console.log('\n=== VERIFICATION ===');
if (remaining === 0) {
  console.log('✅ 0 .html links remain in social share buttons. All clean!');
} else {
  console.log(`⚠️  ${remaining} .html links still remain in social share buttons. Manual check needed.`);
}

const fs = require('fs');
const path = require('path');

const ARTIKEL_DIR = 'D:/Projects/Yuka/artikel';
const files = fs.readdirSync(ARTIKEL_DIR).filter(f => f.endsWith('.html'));

let totalNavFixed = 0;
let totalInternalFixed = 0;
let filesModified = 0;

files.forEach(filename => {
  const filepath = path.join(ARTIKEL_DIR, filename);
  let content = fs.readFileSync(filepath, 'utf8');
  const original = content;

  // 1. Fix navigation links: ../page.html -> ../page (clean URL)
  // index.html special case: ../index.html -> ../  (root)
  content = content.replace(/href="\.\.\/index\.html"/g, 'href="../"');
  content = content.replace(/href="\.\.\/tentang\.html"/g, 'href="../tentang"');
  content = content.replace(/href="\.\.\/program\.html"/g, 'href="../program"');
  content = content.replace(/href="\.\.\/galeri\.html"/g, 'href="../galeri"');
  content = content.replace(/href="\.\.\/blog\.html"/g, 'href="../blog"');
  content = content.replace(/href="\.\.\/kontak\.html"/g, 'href="../kontak"');
  content = content.replace(/href="\.\.\/donasi\.html"/g, 'href="../donasi"');

  // Count nav fixes
  const navMatches = (original.match(/href="\.\.\/[a-z]+\.html"/g) || []).length;
  totalNavFixed += navMatches;

  // 2. Fix internal article links: href="slug.html" -> href="slug"
  // Only match relative links (no ../ no http no #)
  // Pattern: href="word-word.html" where it's a relative slug (no path separator)
  const beforeInternal = content;
  content = content.replace(/href="([a-z][a-z0-9-]*)\.html"/g, 'href="$1"');

  // Count internal fixes
  const internalMatches = (beforeInternal.match(/href="([a-z][a-z0-9-]*)\.html"/g) || []).length;
  totalInternalFixed += internalMatches;

  if (content !== original) {
    fs.writeFileSync(filepath, content, 'utf8');
    filesModified++;
    if (navMatches > 0 || internalMatches > 0) {
      console.log(`Fixed ${filename}: ${navMatches} nav + ${internalMatches} internal`);
    }
  }
});

console.log('\n=== SUMMARY ===');
console.log('Files modified:', filesModified);
console.log('Nav links fixed:', totalNavFixed);
console.log('Internal article links fixed:', totalInternalFixed);
console.log('Total links fixed:', totalNavFixed + totalInternalFixed);

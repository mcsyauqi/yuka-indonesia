/**
 * Fix Core Web Vitals issues across all pages
 *
 * Issues:
 * 1. LCP: Google Fonts render-blocking on ALL pages
 * 2. LCP: AOS/Swiper CSS render-blocking on homepage
 * 3. LCP: No preload for hero/LCP images
 * 4. CLS: Missing width/height on featured images in articles
 * 5. CLS: Missing width/height on brand-logo in 62 articles
 * 6. TBT: Scripts not deferred on galeri and other pages
 */

const fs = require('fs');
const path = require('path');

let totalFixes = 0;
const fixLog = [];

function fix(file, description) {
  totalFixes++;
  fixLog.push({ file: path.basename(file), description });
}

// ============================================================
// 1. Fix Google Fonts on ALL HTML files (make non-blocking)
// ============================================================
function fixFonts(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Replace render-blocking Google Fonts with preload + fallback
  const fontPattern = /<link href="(https:\/\/fonts\.googleapis\.com\/css2[^"]*)" rel="stylesheet">/;
  const match = content.match(fontPattern);
  if (match) {
    const fontUrl = match[1];
    const replacement = `<link rel="preload" href="${fontUrl}" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="${fontUrl}"></noscript>`;
    content = content.replace(match[0], replacement);
    changed = true;
    fix(filePath, 'Google Fonts: render-blocking → preload');
  }

  // Also fix in articles (relative font links use same pattern)
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
  return changed;
}

// ============================================================
// 2. Fix AOS/Swiper CSS on homepage (make non-blocking)
// ============================================================
function fixHomepageCSS(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // AOS CSS - make non-blocking
  const aosCSS = '<link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css">';
  if (content.includes(aosCSS)) {
    content = content.replace(aosCSS,
      '<link rel="preload" href="https://unpkg.com/aos@2.3.4/dist/aos.css" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">\n    <noscript><link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css"></noscript>');
    changed = true;
    fix(filePath, 'AOS CSS: render-blocking → preload');
  }

  // Swiper CSS - make non-blocking
  const swiperCSS = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">';
  if (content.includes(swiperCSS)) {
    content = content.replace(swiperCSS,
      '<link rel="preload" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" as="style" onload="this.onload=null;this.rel=\'stylesheet\'">\n    <noscript><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"></noscript>');
    changed = true;
    fix(filePath, 'Swiper CSS: render-blocking → preload');
  }

  if (changed) fs.writeFileSync(filePath, content, 'utf8');
  return changed;
}

// ============================================================
// 3. Add preload for hero/LCP images
// ============================================================
function addHeroPreload(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  const basename = path.basename(filePath);

  // Homepage: hero background image
  if (basename === 'index.html' && !content.includes('rel="preload"') ||
      (basename === 'index.html' && !content.includes('assets/images/hero-bg.webp'))) {
    // Check if preload already exists for this image
    if (!content.includes("preload\" href=\"assets/images/hero-bg.webp\"")) {
      const insertPoint = content.indexOf('<link rel="stylesheet" href="assets/css/style');
      if (insertPoint > -1) {
        content = content.slice(0, insertPoint) +
          '<link rel="preload" href="assets/images/hero-bg.webp" as="image" type="image/webp" fetchpriority="high">\n    ' +
          content.slice(insertPoint);
        changed = true;
        fix(filePath, 'Added preload for hero background image');
      }
    }
  }

  // Tentang: hero image
  if (basename === 'tentang.html') {
    if (!content.includes('preload" href="Dokumentasi/21 Jan 2026/IMG_8417_latar_belakang.webp"')) {
      const insertPoint = content.indexOf('<link rel="stylesheet" href="assets/css/style');
      if (insertPoint > -1) {
        content = content.slice(0, insertPoint) +
          '<link rel="preload" href="Dokumentasi/21 Jan 2026/IMG_8417_latar_belakang.webp" as="image" type="image/webp">\n    ' +
          content.slice(insertPoint);
        changed = true;
        fix(filePath, 'Added preload for about page hero image');
      }
    }
  }

  if (changed) fs.writeFileSync(filePath, content, 'utf8');
  return changed;
}

// ============================================================
// 4. Fix CLS: Add width/height to article featured images
// ============================================================
function fixArticleCLS(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Fix featured image without width/height (has loading="eager" but no width)
  const featuredPattern = /(<img src="[^"]*" alt="[^"]*") loading="eager">/g;
  const newContent = content.replace(featuredPattern, (match, prefix) => {
    if (!match.includes('width=')) {
      changed = true;
      fix(filePath, 'Added width/height to featured image');
      return `${prefix} width="800" height="600" loading="eager">`;
    }
    return match;
  });

  if (changed) {
    content = newContent;
  }

  // Fix brand-logo without width/height
  if (content.includes('class="brand-logo"') && !content.includes('class="brand-logo" width=')) {
    content = content.replace(
      /<img src="[^"]*Logo\/Logo\.webp" alt="[^"]*" class="brand-logo">/g,
      (match) => {
        if (!match.includes('width=')) {
          changed = true;
          fix(filePath, 'Added width/height to brand-logo');
          return match.replace('class="brand-logo">', 'class="brand-logo" width="180" height="60">');
        }
        return match;
      }
    );
  }

  // Fix footer logo without width/height
  const footerLogoPattern = /<img src="[^"]*Logo\/Logo\.webp" alt="YUKA Logo" style="[^"]*">/g;
  content = content.replace(footerLogoPattern, (match) => {
    if (!match.includes('width=')) {
      changed = true;
      fix(filePath, 'Added width/height to footer logo');
      return match.replace('>', ' width="180" height="60">');
    }
    return match;
  });

  if (changed) fs.writeFileSync(filePath, content, 'utf8');
  return changed;
}

// ============================================================
// 5. Fix TBT: Add defer to scripts
// ============================================================
function fixScripts(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Defer AOS JS
  if (content.includes('<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>')) {
    content = content.replace(
      '<script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></script>',
      '<script src="https://unpkg.com/aos@2.3.4/dist/aos.js" defer></script>'
    );
    changed = true;
    fix(filePath, 'AOS JS: added defer');
  }

  // Defer Swiper JS
  if (content.includes('<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>')) {
    content = content.replace(
      '<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>',
      '<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" defer></script>'
    );
    changed = true;
    fix(filePath, 'Swiper JS: added defer');
  }

  // Defer GSAP
  if (content.includes('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>')) {
    content = content.replace(
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js"></script>',
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/gsap.min.js" defer></script>'
    );
    changed = true;
    fix(filePath, 'GSAP JS: added defer');
  }

  // Defer GSAP ScrollTrigger
  if (content.includes('<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"></script>')) {
    content = content.replace(
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js"></script>',
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.4/ScrollTrigger.min.js" defer></script>'
    );
    changed = true;
    fix(filePath, 'GSAP ScrollTrigger: added defer');
  }

  // Defer main.min.js
  const mainJsPatterns = [
    '<script src="assets/js/main.min.js"></script>',
    '<script src="../assets/js/main.min.js"></script>'
  ];
  mainJsPatterns.forEach(p => {
    if (content.includes(p) && !content.includes(p.replace('></script>', ' defer></script>'))) {
      content = content.replace(p, p.replace('></script>', ' defer></script>'));
      changed = true;
      fix(filePath, 'main.min.js: added defer');
    }
  });

  // Defer analytics.js
  const analyticsPatterns = [
    '<script src="assets/js/analytics.js"></script>',
    '<script src="../assets/js/analytics.js"></script>'
  ];
  analyticsPatterns.forEach(p => {
    if (content.includes(p) && !content.includes(p.replace('></script>', ' defer></script>'))) {
      content = content.replace(p, p.replace('></script>', ' defer></script>'));
      changed = true;
      fix(filePath, 'analytics.js: added defer');
    }
  });

  if (changed) fs.writeFileSync(filePath, content, 'utf8');
  return changed;
}

// ============================================================
// MAIN: Process all files
// ============================================================
const rootDir = 'D:/Projects/Yuka';
const mainPages = ['index.html', 'tentang.html', 'donasi.html', 'blog.html', 'galeri.html', 'kontak.html', 'program.html'];
const artikelDir = path.join(rootDir, 'artikel');

console.log('=== Fixing Core Web Vitals ===\n');

// Fix main pages
mainPages.forEach(page => {
  const filePath = path.join(rootDir, page);
  if (!fs.existsSync(filePath)) return;

  fixFonts(filePath);
  if (page === 'index.html') fixHomepageCSS(filePath);
  addHeroPreload(filePath);
  fixScripts(filePath);
});

// Fix article pages
const articles = fs.readdirSync(artikelDir).filter(f => f.endsWith('.html'));
console.log(`Processing ${articles.length} articles...`);

articles.forEach(article => {
  const filePath = path.join(artikelDir, article);
  fixFonts(filePath);
  fixArticleCLS(filePath);
  fixScripts(filePath);
});

// Print summary
console.log(`\n=== Summary ===`);
console.log(`Total fixes applied: ${totalFixes}`);
console.log(`Files modified: ${new Set(fixLog.map(f => f.file)).size}`);

// Group by fix type
const byType = {};
fixLog.forEach(f => {
  byType[f.description] = (byType[f.description] || 0) + 1;
});
console.log('\nFix breakdown:');
Object.entries(byType).sort((a, b) => b[1] - a[1]).forEach(([desc, count]) => {
  console.log(`  ${count}x ${desc}`);
});

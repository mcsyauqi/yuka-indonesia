#!/usr/bin/env node
/**
 * Make sure every public HTML page loads /assets/js/yuka-conversions.js
 * (GA4 key events donation_cta_click + whatsapp_click) and drop the old inline
 * yukaTrackingEventsV1 blocks that double-counted whatsapp_click.
 * Usage: node scripts/ensure-conversion-tracking.js [file ...]   (no args = all tracked pages)
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const root = path.resolve(__dirname, '..');
const TAG = '<script src="/assets/js/yuka-conversions.js" defer></script>';
const SKIP = /^(tmp|data|reports|Dokumentasi|report-assets|screenshots|seo|deploy|tools|scripts|Flyer Zakat|Team|Logo|graphify-out|node_modules)\//;

let files = process.argv.slice(2);
if (!files.length) {
  files = execSync('git ls-files "*.html"', { cwd: root }).toString().trim().split('\n').filter(f => f && !SKIP.test(f));
}
let changed = 0;
for (const f of files) {
  const p = path.resolve(root, f);
  if (!fs.existsSync(p)) continue;
  let h = fs.readFileSync(p, 'utf8');
  const before = h;
  h = h.replace(/[ \t]*<script id="yukaTrackingEventsV1">[\s\S]*?<\/script>\r?\n?/g, '');
  if (!h.includes('yuka-conversions.js')) {
    const i = h.lastIndexOf('</body>');
    if (i === -1) { console.warn('no </body>:', f); continue; }
    h = h.slice(0, i) + TAG + '\n' + h.slice(i);
  }
  if (h !== before) { fs.writeFileSync(p, h); changed++; }
}
console.log(`ensure-conversion-tracking: ${changed} file(s) updated of ${files.length}`);

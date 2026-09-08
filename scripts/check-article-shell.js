#!/usr/bin/env node
/*
 * Guard against page-shell drift in artikel/*.html.
 *
 * Background: articles on this site are published by one-off generator scripts,
 * a new one per batch. Each rewrite re-typed the page shell from memory and
 * silently dropped parts of it. The 2026-09-05 and 2026-09-07 batches shipped
 * with no <footer> at all, and the 09-05 three also shipped with no analytics
 * of any kind.
 *
 * A footer on every page is a standing owner directive, so a missing footer is
 * a hard failure (exit 1). Missing GA4 or analytics.js is reported as a warning
 * because 23 legacy articles from the 2026-08-12 catchup batch predate this
 * check and have not been retrofitted yet.
 *
 *   node scripts/check-article-shell.js            # footer gate, exit 1 on failure
 *   node scripts/check-article-shell.js --strict   # also fail on analytics gaps
 *                                                  # and non-canonical footer markup
 */
'use strict';

const fs = require('fs');
const path = require('path');
const { ARTICLE_FOOTER, missingShellParts } = require('./lib/article-shell');

const ROOT = path.resolve(__dirname, '..');
const DIR = path.join(ROOT, 'artikel');
const strict = process.argv.includes('--strict');

const norm = (s) => s.replace(/\s+/g, ' ').trim();
const canonical = norm(ARTICLE_FOOTER);

const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.html')).sort();
const failures = [];
const warnings = [];

for (const f of files) {
  const html = fs.readFileSync(path.join(DIR, f), 'utf8');
  const missing = missingShellParts(html);

  // Missing footer is always fatal: a footer on every page is a standing directive.
  if (missing.includes('footer')) {
    failures.push(`${f}: missing footer`);
    continue;
  }

  const analyticsGaps = missing.filter((m) => m !== 'footer');
  if (analyticsGaps.length) {
    const line = `${f}: missing ${analyticsGaps.join(', ')}`;
    if (strict) failures.push(line); else warnings.push(line);
  }

  const found = html.match(/<footer[\s\S]*?<\/footer>/i);
  if (found && norm(found[0]) !== canonical) {
    const line = `${f}: footer present but not the canonical markup (${found[0].length} chars)`;
    if (strict) failures.push(line); else warnings.push(line);
  }
}

console.log(`checked ${files.length} article files in artikel/`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s), not blocking:`);
  warnings.forEach((w) => console.log('  warn  ' + w));
}
if (failures.length) {
  console.error(`\n${failures.length} article(s) FAILED the shell gate:`);
  failures.forEach((x) => console.error('  FAIL  ' + x));
  console.error('\nFix: import scripts/lib/article-shell.js in the generator and run ensureArticleShell() before writing.');
  process.exit(1);
}
console.log('\nOK: every article carries a footer.');

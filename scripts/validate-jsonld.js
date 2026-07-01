#!/usr/bin/env node
/**
 * Validate JSON-LD blocks in changed or supplied HTML article files.
 * Used by scheduled publishing workflow to fail early when schema markup is invalid.
 *
 * Diminta oleh Syauqi (via MinTiv)
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function unique(arr) {
  return [...new Set(arr.filter(Boolean))];
}

function fromGitDiff() {
  try {
    const out = execSync('git diff --name-only --cached --diff-filter=ACMRT', { encoding: 'utf8' });
    return out.split(/\r?\n/).filter(Boolean);
  } catch {
    return [];
  }
}

function candidateFiles() {
  const argv = process.argv.slice(2);
  const files = argv.length ? argv : fromGitDiff();
  return unique(files)
    .filter(file => file.endsWith('.html'))
    .filter(file => fs.existsSync(file));
}

function stripHtml(value) {
  return String(value || '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function walkPlainText(node, location, issues) {
  if (Array.isArray(node)) {
    node.forEach((item, i) => walkPlainText(item, `${location}[${i}]`, issues));
    return;
  }
  if (node && typeof node === 'object') {
    for (const [key, value] of Object.entries(node)) {
      const next = `${location}.${key}`;
      if (typeof value === 'string') {
        const cleaned = stripHtml(value);
        if (cleaned !== value) {
          issues.push(`${next} contains raw HTML; use plain text: ${value.slice(0, 80)}`);
        }
      } else {
        walkPlainText(value, next, issues);
      }
    }
  }
}

function validateFile(file) {
  const html = fs.readFileSync(file, 'utf8');
  const re = /<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  const errors = [];
  let count = 0;
  let match;
  while ((match = re.exec(html))) {
    count += 1;
    const raw = match[1].trim();
    if (!raw) {
      errors.push(`${file}: JSON-LD block ${count} is empty`);
      continue;
    }
    try {
      const parsed = JSON.parse(raw);
      const htmlIssues = [];
      walkPlainText(parsed, `${path.basename(file)}#jsonld${count}`, htmlIssues);
      errors.push(...htmlIssues.map(issue => `${file}: ${issue}`));
    } catch (err) {
      errors.push(`${file}: JSON-LD block ${count} invalid JSON: ${err.message}`);
    }
  }
  return { file, count, errors };
}

const files = candidateFiles();
if (!files.length) {
  console.log('validate-jsonld: no changed HTML files to validate');
  process.exit(0);
}

let totalBlocks = 0;
const allErrors = [];
for (const file of files) {
  const result = validateFile(file);
  totalBlocks += result.count;
  allErrors.push(...result.errors);
  console.log(`validate-jsonld: ${file} blocks=${result.count}`);
}

if (allErrors.length) {
  console.error('validate-jsonld: FAILED');
  for (const err of allErrors) console.error(`- ${err}`);
  process.exit(1);
}

console.log(`validate-jsonld: PASS files=${files.length} blocks=${totalBlocks}`);

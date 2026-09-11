#!/usr/bin/env node
/**
 * One-shot setup: register the 40 priority keywords of yukaindonesia.com into the
 * Ahrefs Rank Tracker project, using ONLY the web subscription session.
 *
 * Hard rules baked in (do not remove):
 *   - `--transport web` is forced on every call. AHREFS_API_KEY / `ahrefs-pp-cli`
 *     is never invoked; using API units needs explicit permission from Syauqi.
 *   - The script REFUSES to run while `doctor` is red. As of 2026-09-11 the shared
 *     Ahrefs web session answers 401 on every /v4 call, so this gate is the whole
 *     point: without it the add loop "succeeds" silently and the tracker stays empty.
 *   - A write response is never trusted. After the loop the script re-reads the
 *     project and fails unless the active keyword count actually went up.
 *
 * Usage:
 *   node scripts/rank-tracker-setup.mjs --dry-run        # default, nothing is written
 *   node scripts/rank-tracker-setup.mjs --yes            # live, adds the keywords
 *   RT_PROJECT_ID=123456 node scripts/rank-tracker-setup.mjs --yes
 *
 * Exit codes:
 *   0 ok
 *   2 session gate failed (doctor red / 401) -> this is the CURRENT expected state
 *   3 project for yukaindonesia.com not found in Rank Tracker
 *   4 add loop ran but the read-back did not confirm the keywords
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const CLI = process.env.AHREFS_WEB_CLI || path.join(os.homedir(), 'go', 'bin', 'ahrefs-web-pp-cli.exe');
const KEYWORD_FILE = path.join(ROOT, 'seo', 'rt-keywords.txt');
const COUNTRY = process.env.RT_COUNTRY || 'id';
const DOMAIN = 'yukaindonesia.com';
const LIVE = process.argv.includes('--yes');

function run(args, { allowFail = false } = {}) {
  try {
    return execFileSync(CLI, [...args, '--transport', 'web'], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      timeout: 120000,
    });
  } catch (err) {
    const out = `${err.stdout || ''}${err.stderr || ''}`;
    if (allowFail) return out;
    throw new Error(`${args.join(' ')} failed: ${out.slice(0, 400)}`);
  }
}

/** Gate 1: the session must actually be able to talk to /v4. */
function assertSessionAlive() {
  const doctor = run(['doctor'], { allowFail: true });
  process.stdout.write(doctor);
  const liveCheckPassed = /\[x\][^\n]*live \/v4 data call/.test(doctor);
  const probe = run(['rt', 'projects', '--agent'], { allowFail: true });
  const unauthorized = /401|Unauthorized/i.test(probe);
  if (!liveCheckPassed || unauthorized) {
    console.error('\nABORT: Ahrefs web session is not usable.');
    console.error('  doctor live /v4 check passed: ' + liveCheckPassed);
    console.error('  rt projects probe: ' + probe.trim().slice(0, 200));
    console.error('\nFix the session first (see seo/rank-tracker-manual-steps.md).');
    console.error('Do NOT fall back to AHREFS_API_KEY: that needs explicit permission from Syauqi.');
    process.exit(2);
  }
  return probe;
}

function resolveProjectId(projectsJson) {
  if (process.env.RT_PROJECT_ID) return process.env.RT_PROJECT_ID;
  let parsed;
  try {
    parsed = JSON.parse(projectsJson);
  } catch {
    console.error('ABORT: could not parse `rt projects` output as JSON.');
    process.exit(3);
  }
  const flat = JSON.stringify(parsed);
  if (!flat.includes(DOMAIN)) {
    console.error(`ABORT: no Rank Tracker project mentioning ${DOMAIN}.`);
    console.error('Create the project in the Ahrefs UI first, then re-run with RT_PROJECT_ID=<id>.');
    process.exit(3);
  }
  const list = Array.isArray(parsed) ? parsed : (parsed.projects || parsed.rows || parsed.data || []);
  for (const p of list) {
    const blob = JSON.stringify(p);
    if (blob.includes(DOMAIN)) {
      const id = p.id ?? p.project_id ?? p.projectId ?? (blob.match(/"(?:id|project_id)"\s*:\s*"?(\d+)"?/) || [])[1];
      if (id) return String(id);
    }
  }
  console.error('ABORT: project found but its id could not be read. Pass RT_PROJECT_ID=<id> explicitly.');
  process.exit(3);
}

function activeKeywordCount(projectId) {
  const out = run(['rt', 'settings', '--project-id', projectId, '--country', COUNTRY, '--agent'], { allowFail: true });
  const m = out.match(/"number_of_active_keywords"\s*:\s*(\d+)/);
  return m ? Number(m[1]) : null;
}

function main() {
  if (!fs.existsSync(KEYWORD_FILE)) {
    console.error(`ABORT: ${KEYWORD_FILE} not found.`);
    process.exit(1);
  }
  const keywords = fs.readFileSync(KEYWORD_FILE, 'utf8').split(/\r?\n/).map(s => s.trim()).filter(Boolean);
  console.log(`${keywords.length} keywords loaded from ${KEYWORD_FILE}`);
  if (keywords.length !== 40) console.warn(`WARN: expected 40 keywords, found ${keywords.length}`);

  const projectsJson = assertSessionAlive();
  const projectId = resolveProjectId(projectsJson);
  console.log(`Rank Tracker project id: ${projectId}`);

  const before = activeKeywordCount(projectId);
  console.log(`active keywords before: ${before ?? 'unknown'}`);

  if (!LIVE) {
    console.log('\nDRY RUN. Nothing written. Re-run with --yes to add the keywords.');
    for (const kw of keywords) {
      console.log(`  would add: ${kw} (country=${COUNTRY})`);
    }
    return;
  }

  const failures = [];
  keywords.forEach((kw, i) => {
    const out = run(
      ['rt', 'add-keyword', '--keyword', kw, '--project-id', projectId, '--country', COUNTRY, '--yes', '--no-confirm', '--agent'],
      { allowFail: true },
    );
    const bad = /error|400|401|403|500|Unauthorized|InvalidInput/i.test(out);
    console.log(`[${String(i + 1).padStart(2, '0')}/${keywords.length}] ${bad ? 'FAIL' : 'ok  '} ${kw}${bad ? ' :: ' + out.trim().slice(0, 160) : ''}`);
    if (bad) failures.push({ keyword: kw, response: out.trim().slice(0, 300) });
  });

  const after = activeKeywordCount(projectId);
  console.log(`\nactive keywords after: ${after ?? 'unknown'} (before: ${before ?? 'unknown'})`);
  console.log(`write failures: ${failures.length}`);

  // A 200 on the write path is not proof. Only the read-back counts.
  if (after === null || (before !== null && after <= before)) {
    console.error('ABORT: read-back did not confirm the keywords were added. Treat this run as failed.');
    fs.writeFileSync(path.join(ROOT, 'seo', 'rt-setup-failures.json'), JSON.stringify({ when: new Date().toISOString(), projectId, before, after, failures }, null, 2), 'utf8');
    process.exit(4);
  }
  console.log('OK. Positions stay empty until the next Ahrefs daily update (up to 24 hours); that is normal.');
}

main();

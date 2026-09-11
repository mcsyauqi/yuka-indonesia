#!/usr/bin/env node
/**
 * Weekly Ahrefs Rank Tracker pull for yukaindonesia.com.
 *
 * Writes seo/rt-weekly/<YYYY>-W<WW>.json and appends one row per keyword to the
 * `Rank Tracker` tab of the sheet "YUKA Keyword Database - SEO".
 *
 * Hard rules baked in (do not remove):
 *   - `--transport web` forced. AHREFS_API_KEY / `ahrefs-pp-cli` is never invoked.
 *   - Refuses to run while `doctor` is red (the session answers 401 as of 2026-09-11).
 *   - `rows: []` with HTTP 200 is a FAILURE, not "no keywords yet". Ahrefs returns a
 *     complete payload with an empty rows array when the pull silently fails; writing
 *     that to the sheet would produce a fake baseline.
 *   - Google Sheets VALUE writes go through the REST API directly, not
 *     `google-sheets-pp-cli`: that CLI never sends `valueInputOption` and answers 400.
 *
 * Usage:
 *   node scripts/rank-tracker-weekly.mjs --dry-run   # pull + print, no sheet write
 *   node scripts/rank-tracker-weekly.mjs             # pull + write file + append sheet
 *
 * Exit codes: 0 ok, 1 pull/write failure, 2 session gate failed (doctor red / 401).
 */

import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, '..');
const CLI = process.env.AHREFS_WEB_CLI || path.join(os.homedir(), 'go', 'bin', 'ahrefs-web-pp-cli.exe');
const OUT_DIR = path.join(ROOT, 'seo', 'rt-weekly');
const ENV_FILE = process.env.CREATIVISM_ENV || 'D:/Projects/Creativism App/.env';
const SHEET_ID = process.env.KEYWORD_SHEET_ID || '1hxfhWoOOAYeGp2M14LSM2Oe0aRngaZ3gFpr866cUdUc';
const TAB = process.env.KEYWORD_SHEET_TAB || 'Rank Tracker';
const COUNTRY = process.env.RT_COUNTRY || 'id';
const PLATFORM = process.env.RT_PLATFORM || 'Desktop';
const DOMAIN = 'yukaindonesia.com';
const DRY_RUN = process.argv.includes('--dry-run');

const HEADER = ['date', 'source', 'project', 'keyword', 'country', 'device', 'position', 'prev_position', 'change', 'best_url', 'volume', 'keyword_difficulty', 'serp_datetime'];

// Column indexes into the rtGetKeywordsTableDynamic row shape. One place to patch
// if Ahrefs changes the template.
const COL = { keywordText: 4, keywordDifficulty: 6, position: 18, prevPosition: 19, positionDiff: 20, positionUrl: 21, serpDatetime: 24, volume: 48 };

function run(args, { allowFail = false } = {}) {
  try {
    return execFileSync(CLI, [...args, '--transport', 'web'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], timeout: 180000 });
  } catch (err) {
    const out = `${err.stdout || ''}${err.stderr || ''}`;
    if (allowFail) return out;
    throw new Error(`${args.join(' ')} failed: ${out.slice(0, 400)}`);
  }
}

function assertSessionAlive() {
  const doctor = run(['doctor'], { allowFail: true });
  process.stdout.write(doctor);
  const probe = run(['rt', 'projects', '--agent'], { allowFail: true });
  if (!/\[x\][^\n]*live \/v4 data call/.test(doctor) || /401|Unauthorized/i.test(probe)) {
    console.error('\nABORT: Ahrefs web session is not usable (see seo/rank-tracker-manual-steps.md).');
    console.error('  rt projects probe: ' + probe.trim().slice(0, 200));
    process.exit(2);
  }
  return probe;
}

function resolveProjectId(projectsJson) {
  if (process.env.RT_PROJECT_ID) return process.env.RT_PROJECT_ID;
  const parsed = JSON.parse(projectsJson);
  const list = Array.isArray(parsed) ? parsed : (parsed.projects || parsed.rows || parsed.data || []);
  for (const p of list) {
    const blob = JSON.stringify(p);
    if (blob.includes(DOMAIN)) {
      const id = p.id ?? p.project_id ?? p.projectId ?? (blob.match(/"(?:id|project_id)"\s*:\s*"?(\d+)"?/) || [])[1];
      if (id) return String(id);
    }
  }
  throw new Error(`no Rank Tracker project for ${DOMAIN}; run scripts/rank-tracker-setup.mjs first`);
}

function isoWeek(d) {
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()));
  const day = t.getUTCDay() || 7;
  t.setUTCDate(t.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((t - yearStart) / 86400000 + 1) / 7);
  return { year: t.getUTCFullYear(), week };
}

function envValue(key) {
  const env = fs.readFileSync(ENV_FILE, 'utf8');
  const m = env.match(new RegExp('^' + key + '=(.*)$', 'm'));
  return m ? m[1].trim().replace(/^['"]|['"]$/g, '') : null;
}

async function sheetsToken() {
  const body = new URLSearchParams({
    client_id: envValue('GOOGLE_CLIENT_ID'),
    client_secret: envValue('GOOGLE_CLIENT_SECRET'),
    refresh_token: envValue('GOOGLE_DRIVE_REFRESH_TOKEN'),
    grant_type: 'refresh_token',
  });
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body });
  const j = await r.json();
  if (!j.access_token) throw new Error('sheets token refresh failed: ' + JSON.stringify(j).slice(0, 200));
  return j.access_token;
}

async function appendRows(rows) {
  const token = await sheetsToken();
  // Only write a header when the tab is genuinely empty, so a two-row header is
  // never duplicated on top of existing data.
  const head = await (await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(TAB + '!A1:A2')}`, { headers: { Authorization: 'Bearer ' + token } })).json();
  const payload = (!head.values || head.values.length === 0) ? [HEADER, ...rows] : rows;
  const r = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(TAB + '!A1')}:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS`, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ values: payload }),
  });
  const j = await r.json();
  if (!r.ok) throw new Error('sheet append failed: ' + JSON.stringify(j).slice(0, 300));
  return j.updates;
}

async function main() {
  const projectsJson = assertSessionAlive();
  const projectId = resolveProjectId(projectsJson);
  const raw = run(['rt', 'keywords-table-dynamic', '--project-id', projectId, '--country', COUNTRY, '--platform', PLATFORM, '--agent']);
  const parsed = JSON.parse(raw);
  const rows = parsed.rows || parsed.data?.rows || [];
  if (rows.length === 0) {
    console.error('ABORT: keywords-table-dynamic returned 0 rows. HTTP 200 with an empty rows array is a failure, not an empty tracker.');
    process.exit(1);
  }
  const today = new Date();
  const { year, week } = isoWeek(today);
  const stamp = today.toISOString().slice(0, 10);
  const records = rows.map(r => ({
    keyword: r[COL.keywordText], position: r[COL.position], prev_position: r[COL.prevPosition],
    change: r[COL.positionDiff], best_url: r[COL.positionUrl], volume: r[COL.volume],
    keyword_difficulty: r[COL.keywordDifficulty], serp_datetime: r[COL.serpDatetime],
  }));

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const outFile = path.join(OUT_DIR, `${year}-W${String(week).padStart(2, '0')}.json`);
  fs.writeFileSync(outFile, JSON.stringify({ pulled_at: today.toISOString(), source: 'ahrefs-rank-tracker-web', project_id: projectId, domain: DOMAIN, country: COUNTRY, platform: PLATFORM, keyword_count: records.length, keywords: records }, null, 2), 'utf8');
  console.log(`wrote ${outFile} (${records.length} keywords)`);

  const sheetRows = records.map(k => [stamp, 'ahrefs-rank-tracker', DOMAIN, k.keyword, COUNTRY, PLATFORM, k.position ?? '', k.prev_position ?? '', k.change ?? '', k.best_url ?? '', k.volume ?? '', k.keyword_difficulty ?? '', k.serp_datetime ?? '']);
  if (DRY_RUN) {
    console.log('DRY RUN, sheet untouched. First row would be:', JSON.stringify(sheetRows[0]));
    return;
  }
  const updates = await appendRows(sheetRows);
  console.log(`appended ${updates.updatedRows} rows to "${TAB}" in ${SHEET_ID}`);
}

main().catch(err => { console.error(err.message); process.exit(1); });

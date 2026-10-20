'use strict';
/*
 * Gate MUTU KONTEN artikel YUKA (2026-10-09).
 *
 * Kerangka (article-skeleton.js) dan shell (article-shell.js) hanya memastikan halaman
 * RAPI. Ukur ulang 2026-10-09 (scripts/audit-artikel-kualitas.mjs di workspace Creativism)
 * menemukan 15 artikel YUKA rapi tapi TIPIS: badan 1.100-1.700 kata, 4-6 FAQ, tanpa tabel,
 * atau hanya 0-3 gambar di dalam isi. Contoh: uu-no-19-tahun-2011-tentang-apa (1.135 kata,
 * 4 FAQ, tanpa tabel), what-is-a-milestone-for-a-kid (0 gambar isi).
 *
 * Standar (sama dengan konstanta GATE di audit bersama, versi /artikel-seo):
 *   - >= 2000 kata di <article class="article-content">
 *   - >= 4 gambar konten DI DALAM <article> (hero di luar <article>, jadi tidak dihitung)
 *   - >= 7 FAQ, terlihat di halaman DAN di FAQPage schema
 *   - >= 1 tabel bermakna (header + minimal 2 baris data)
 *   - tanpa em dash / en dash di teks
 *   - artikel bertopik BIAYA (judul/canonical memuat biaya, harga, tarif, gaji, ongkos, atau
 *     "bayar berapa"): >= 3 angka Rp di isi, angka Rp pertama di 25% awal teks, >= 1 tabel
 *     yang memuat Rp, dan >= 1 tautan sumber eksternal. Asal-usul (2026-10-21): artikel
 *     biaya-shadow-teacher-per-bulan tayang 2.397 kata, 4 gambar, 7 FAQ, tabel, tetapi NOL
 *     angka Rp, jadi pembaca yang mencari biaya tidak mendapat jawaban. Gate lama meloloskannya.
 *     Angka wajib bersumber (INVENT NOTHING); kalau sumber tidak ada, jangan tulis topik biaya.
 * Peringatan (tidak memblok): Daftar Isi, >= 10 tautan internal, H2 < 5.
 *
 * Kenapa ukurannya sengaja lebih ketat dari audit bersama: audit memilih wadah dengan teks
 * terbanyak, kadang <article>, kadang seluruh halaman (hero ikut terhitung). Validator ini
 * selalu memakai <article>, jadi artikel yang lolos di sini pasti lolos di audit.
 *
 * Dipakai oleh: renderArticlePage() (melempar error sebelum berkas ditulis),
 * scripts/check-article-quality.js (CLI), article-skeleton-gate.yml, publish-scheduled.yml.
 * JANGAN longgarkan angka untuk meloloskan satu artikel: perluas artikelnya.
 */

const STANDARD = { words: 2000, images: 4, faq: 7, tables: 1, internalLinks: 10 };

const stripTags = (s) => String(s).replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();

function articleScope(html) {
  const noSS = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
  const m = noSS.match(/<article class="article-content"[\s\S]*<\/article>/i) || noSS.match(/<article[\s\S]*<\/article>/i);
  return (m ? m[0] : '').replace(/<(nav|aside|footer|header)[\s\S]*?<\/\1>/gi, '');
}

function contentImages(scope) {
  const seen = new Set();
  for (const m of scope.matchAll(/<img[^>]*>/gi)) {
    const src = (m[0].match(/(?:data-src|src)="([^"]*)"/) || [])[1] || '';
    if (!src || /^data:/.test(src)) continue;
    if (/logo|icon|avatar|badge|favicon/i.test(src)) continue;
    seen.add(src.split('/').pop().split('?')[0]);
  }
  return seen.size;
}

function faqSchemaCount(html) {
  let n = 0;
  for (const m of html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const parsed = JSON.parse(m[1].trim());
      const nodes = Array.isArray(parsed) ? parsed : parsed['@graph'] || [parsed];
      for (const node of nodes) if (node && node['@type'] === 'FAQPage') n = Math.max(n, (node.mainEntity || []).length);
    } catch { /* schema rusak dihitung 0 */ }
  }
  return n;
}

/** FAQ yang TERLIHAT: pertanyaan (h3/summary bertanda tanya) sesudah H2 FAQ. */
function faqVisibleCount(scope) {
  const i = scope.search(/<h2[^>]*>[^<]*(Pertanyaan|FAQ)[^<]*<\/h2>/i);
  if (i < 0) return 0;
  const rest = scope.slice(i).replace(/^<h2[\s\S]*?<\/h2>/i, '');
  const end = rest.search(/<h2[\s>]/i);
  const part = end > -1 ? rest.slice(0, end) : rest;
  return (part.match(/<(h3|summary)[^>]*>[^<]{0,200}\?/gi) || []).length;
}

function meaningfulTables(scope) {
  return [...scope.matchAll(/<table[\s\S]*?<\/table>/gi)].filter((t) => {
    const rows = (t[0].match(/<tr[\s>]/gi) || []).length;
    return /<th[\s>]/i.test(t[0]) && rows >= 3;
  }).length;
}

const COST_INTENT = /\b(biaya|harga|tarif|gaji|ongkos)\b|bayar[- ]berapa/i;

/** Topik biaya dibaca dari <title> dan canonical (slug), bukan dari isi. */
function isCostIntent(html) {
  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '';
  const canon = (html.match(/<link rel="canonical" href="([^"]+)"/i) || [])[1] || '';
  return COST_INTENT.test(title) || COST_INTENT.test(canon.replace(/-/g, ' '));
}

function measureCost(scope, text) {
  const rp = text.match(/Rp ?\d/g) || [];
  const first = text.search(/Rp ?\d/);
  const rpTables = [...scope.matchAll(/<table[\s\S]*?<\/table>/gi)].filter((t) => /Rp ?\d/.test(stripTags(t[0]))).length;
  const external = new Set();
  for (const m of scope.matchAll(/<a [^>]*href="(https?:\/\/[^"]+)"/gi)) {
    if (/yukaindonesia\.com|wa\.me|facebook\.com\/sharer|twitter\.com\/intent|creativecommons\.org|commons\.wikimedia\.org/i.test(m[1])) continue;
    external.add(m[1]);
  }
  return { rp: rp.length, firstRpPct: first < 0 ? null : Math.round((first / Math.max(text.length, 1)) * 100), rpTables, externalSources: external.size };
}

function measureArticleQuality(html) {
  const scope = articleScope(html);
  const text = stripTags(scope);
  const internal = new Set();
  for (const m of scope.matchAll(/<a [^>]*href="([^"#]+)"/gi)) {
    const h = m[1];
    if (/^(https?:)?\/\//.test(h) && !/yukaindonesia\.com/.test(h)) continue;
    if (/^(mailto|tel|https:\/\/wa\.me)/.test(h)) continue;
    internal.add(h.replace(/^https?:\/\/(www\.)?yukaindonesia\.com/, '').replace(/^\.\.\//, '/').replace(/^\/artikel\//, ''));
  }
  return {
    words: text ? text.split(' ').length : 0,
    images: contentImages(scope),
    faqSchema: faqSchemaCount(html),
    faqVisible: faqVisibleCount(scope),
    tables: meaningfulTables(scope),
    h2: (scope.match(/<h2[\s>]/gi) || []).length,
    toc: /class="toc"|Daftar Isi/i.test(scope),
    internalLinks: internal.size,
    dash: /[—–]/.test(text),
    costIntent: isCostIntent(html),
    cost: measureCost(scope, text),
  };
}

/** { m, fail: [...], warn: [...] } */
function checkArticleQuality(html) {
  const m = measureArticleQuality(html);
  const fail = [];
  const warn = [];
  if (m.words < STANDARD.words) fail.push(`kata ${m.words} < ${STANDARD.words}`);
  if (m.images < STANDARD.images) fail.push(`gambar isi ${m.images} < ${STANDARD.images}`);
  if (m.faqVisible < STANDARD.faq) fail.push(`FAQ terlihat ${m.faqVisible} < ${STANDARD.faq}`);
  if (m.faqSchema < STANDARD.faq) fail.push(`FAQPage schema ${m.faqSchema} < ${STANDARD.faq}`);
  if (m.tables < STANDARD.tables) fail.push('tanpa tabel bermakna (th + >= 2 baris data)');
  if (m.dash) fail.push('ada em/en dash di teks');
  if (m.costIntent) {
    const c = m.cost;
    if (c.rp < 3) fail.push(`topik biaya tapi angka Rp di isi ${c.rp} < 3`);
    if (c.firstRpPct === null || c.firstRpPct > 25) fail.push('topik biaya tapi angka Rp tidak muncul di 25% awal isi');
    if (c.rpTables < 1) fail.push('topik biaya tapi tidak ada tabel yang memuat Rp');
    if (c.externalSources < 1) fail.push('topik biaya tapi tidak ada tautan sumber eksternal untuk angkanya');
  }
  if (!m.toc) warn.push('tanpa Daftar Isi');
  if (m.internalLinks < STANDARD.internalLinks) warn.push(`tautan internal ${m.internalLinks} < ${STANDARD.internalLinks}`);
  if (m.h2 < 5) warn.push(`H2 ${m.h2} < 5`);
  return { m, fail, warn };
}

module.exports = { STANDARD, COST_INTENT, isCostIntent, measureArticleQuality, checkArticleQuality };

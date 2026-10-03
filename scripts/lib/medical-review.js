'use strict';
/*
 * Shared medical-review helpers (Trello nKumkHS6).
 *
 * - isMedicalArticle(): one definition of "artikel kondisi medis/terapi", used by the
 *   publish gate (scripts/check-medical-review.js) and by ensureArticleShell().
 * - ensureMedicalDisclosure(): idempotently adds the honest "Status tinjauan medis"
 *   block (pattern from artikel/autisme-adalah.html, NO reviewer name) to a medical
 *   article that has neither reviewedBy nor a status statement. Never invents a reviewer.
 *   Once a real reviewer is approved, scripts/apply-medical-reviewer.mjs replaces it.
 */

// Slug yang menandakan topik kondisi medis atau terapi.
const MEDICAL_SLUG = /(autis|autisme|adhd|hiperaktif|down-syndrome|cerebral-palsy|disleksia|diskalkulia|disgrafia|disabilitas-intelektual|retardasi|tunagrahita|tuna-?rungu|tuna-?daksa|tuna-?wicara|tunalaras|tunaganda|speech-delay|epilepsi|sensori|terapi-|-terapi|fisioterapi|intervensi-dini|gangguan-|sindrom|syndrome)/i;

function slugFromHtml(html) {
  const canon = (html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i) || [])[1] || '';
  return canon.replace(/[?#].*$/, '').replace(/\/$/, '').split('/').pop().replace(/\.html$/, '');
}

function isMedicalArticle(html, slug) {
  if (/"@type"\s*:\s*"Medical(WebPage|Condition|Therapy)"/.test(html)) return 'schema';
  const s = slug || slugFromHtml(html);
  if (s && MEDICAL_SLUG.test(s)) return 'slug';
  return null;
}

const hasReviewer = (html) => /"reviewedBy"\s*:/.test(html);
const hasDisclosure = (html) => /Status tinjauan medis/i.test(html);

const MEDICAL_DISCLOSURE = `
<!-- MEDICAL_REVIEW_STATUS:START -->
<div class="medical-review-status" style="margin:2rem 0;padding:1.25rem 1.5rem;background:#FFF8E6;border-left:4px solid #F4B41A;border-radius:10px;">
  <p style="margin:0;font-size:0.95rem;line-height:1.7;color:#333;"><strong>Status tinjauan medis:</strong> artikel ini disusun oleh tim pendidik, <strong>belum ditinjau oleh dokter berlisensi</strong>. Tinjauan oleh tenaga medis berkredensial sedang kami siapkan dan status ini akan diperbarui di halaman ini begitu selesai. Alur tinjauan dan koreksi dijelaskan di <a href="/kebijakan-editorial">Kebijakan Editorial YUKA</a>. Untuk keputusan diagnosis atau terapi, rujuklah pada dokter anak, psikiater anak, psikolog, atau terapis yang menangani anak.</p>
</div>
<!-- MEDICAL_REVIEW_STATUS:END -->
`;

/** Adds the honest status block to a medical article lacking reviewer and status. Idempotent. */
function ensureMedicalDisclosure(html, slug) {
  if (!isMedicalArticle(html, slug) || hasReviewer(html) || hasDisclosure(html)) return html;
  // Anchor order: before the YMYL sources block, else end of <article>, else before <footer>.
  const anchors = [/<!-- YMYL Source Footer/i, /<div class="article-sources"/i, /<\/article>/i, /<\/main>/i, /<footer/i];
  for (const re of anchors) {
    if (re.test(html)) return html.replace(re, (m) => MEDICAL_DISCLOSURE + m);
  }
  throw new Error('no anchor (</article> or <footer>) for the medical review status block');
}

module.exports = { MEDICAL_SLUG, MEDICAL_DISCLOSURE, isMedicalArticle, hasReviewer, hasDisclosure, ensureMedicalDisclosure, slugFromHtml };

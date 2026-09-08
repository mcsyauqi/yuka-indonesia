// Canonical page-shell partials for yukaindonesia.com articles.
//
// WHY THIS FILE EXISTS
// Every publishing batch used to be a fresh one-off generator that re-typed the
// page shell from memory. Each rewrite silently dropped whatever the previous
// author had remembered, which is how the 2026-09-05 and 2026-09-07 batches
// shipped with no <footer> at all (and, on 09-05, no analytics either).
// Any new generator MUST import from here instead of retyping the shell.
//
// ARTICLE_FOOTER below is copied verbatim from artikel/slb-terdekat.html, the
// footer shared byte-for-byte by 116 of the site's articles and matching the
// site-wide footer on index.html / blog.html / tentang.html.
// Do not hand-edit one article's footer; change it here and re-run the batch.

'use strict';

const ARTICLE_FOOTER = "<footer class=\"footer\">\n        <div class=\"container\">\n            <div class=\"footer-grid\">\n                <div class=\"footer-brand\">\n                    <div class=\"brand-name\">YUKA</div>\n                    <p>Yayasan Ukhuwah Kaffah Amanatullah adalah lembaga sosial, pendidikan, dan dakwah yang berfokus pada pendidikan inklusi untuk anak berkebutuhan khusus di Sleman, Yogyakarta.</p>\n                    <div class=\"social-links\">\n                        <a href=\"#\" aria-label=\"Instagram\">\n                            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                                <path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z\"/>\n                            </svg>\n                        </a>\n                        <a href=\"#\" aria-label=\"Facebook\">\n                            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                                <path d=\"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z\"/>\n                            </svg>\n                        </a>\n                        <a href=\"#\" aria-label=\"YouTube\">\n                            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                                <path d=\"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z\"/>\n                            </svg>\n                        </a>\n                        <a href=\"https://wa.me/6281229912332\" aria-label=\"WhatsApp\">\n                            <svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\">\n                                <path d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z\"/>\n                            </svg>\n                        </a>\n                    </div>\n                </div>\n                <div>\n                    <h4>Navigasi</h4>\n                    <ul class=\"footer-links\">\n                        <li><a href=\"/\">Beranda</a></li>\n                        <li><a href=\"/tentang\">Tentang Kami</a></li>\n                        <li><a href=\"/program\">Program</a></li>\n                        <li><a href=\"/galeri\">Galeri</a></li>\n                        <li><a href=\"/blog\">Artikel</a></li>\n                    </ul>\n                </div>\n                <div>\n                    <h4>Program</h4>\n                    <ul class=\"footer-links\">\n                        <li><a href=\"/program#pendidikan\">Pendidikan Inklusi</a></li>\n                        <li><a href=\"/program#sosial\">Sosial & Kemanusiaan</a></li>\n                        <li><a href=\"/program#dakwah\">Dakwah & Kajian</a></li>\n                        <li><a href=\"/donasi\">Donasi</a></li>\n                    </ul>\n                </div>\n                <div>\n                    <h4>Kontak</h4>\n                    <ul class=\"footer-contact\">\n                        <li>\n                            <a href=\"https://maps.app.goo.gl/uMmin8ZVJvQtsryC7\" target=\"_blank\" style=\"display: flex; align-items: flex-start; gap: var(--spacing-sm); color: inherit;\">\n                                <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" style=\"flex-shrink: 0; margin-top: 3px;\">\n                                    <path d=\"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\"/>\n                                    <path d=\"M15 11a3 3 0 11-6 0 3 3 0 016 0z\"/>\n                                </svg>\n                                <span>Jl. Kronggahan Raya II, RT 04 RW 07, Kronggahan II, Trihanggo, Gamping, Sleman (Utara RSA UGM)</span>\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"https://wa.me/6281229912332\" target=\"_blank\" style=\"display: flex; align-items: center; gap: var(--spacing-sm); color: inherit;\">\n                                <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                                    <path d=\"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\"/>\n                                </svg>\n                                <span>+62 812-2991-2332</span>\n                            </a>\n                        </li>\n                        <li>\n                            <svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\n                                <path d=\"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\"/>\n                            </svg>\n                            <span>info@yukaindonesia.com</span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"footer-bottom\">\n                <p>&copy; 2026 Yayasan Ukhuwah Kaffah Amanatullah. Hak Cipta Dilindungi.</p>\n                <p>Dibuat dengan <span style=\"color: #e74c3c;\">&hearts;</span> oleh <a href=\"https://creativism.id\" target=\"_blank\">Creativism</a></p>\n            </div>\n        </div>\n    <p data-catchup-footer=\"editorial\"><a href=\"/kebijakan-editorial\">Kebijakan Editorial</a></p>\n</footer>";

// GA4 goes in <head>. Property G-LDXC5GQF61.
const GA4_HEAD = [
  '<script async src="https://www.googletagmanager.com/gtag/js?id=G-LDXC5GQF61"></script>',
  '<script>',
  '  window.dataLayer = window.dataLayer || [];',
  '  function gtag(){dataLayer.push(arguments);}',
  "  gtag('js', new Date());",
  "  gtag('config', 'G-LDXC5GQF61', {'send_page_view': true, 'cookie_flags': 'SameSite=None;Secure'});",
  '</script>'
].join('\n');

// Site analytics helper, loaded just before </body>.
const ANALYTICS_TAG = '<script src="../assets/js/analytics.js" defer></script>';

/**
 * Idempotently guarantees an article page carries the canonical shell:
 * footer, GA4 head block, and the analytics.js tag.
 * Safe to call on already-correct HTML - it only adds what is missing.
 */
function ensureArticleShell(html) {
  let out = html;

  if (!/<footer/i.test(out)) {
    if (!/<\/body>/i.test(out)) throw new Error('no </body> to anchor the footer');
    out = out.replace(/<\/body>/i, ARTICLE_FOOTER + '\n</body>');
  }

  if (!/G-LDXC5GQF61/.test(out)) {
    if (!/<\/head>/i.test(out)) throw new Error('no </head> to anchor GA4');
    out = out.replace(/<\/head>/i, GA4_HEAD + '\n</head>');
  }

  if (!/assets\/js\/analytics\.js/.test(out)) {
    out = out.replace(/<\/body>/i, ANALYTICS_TAG + '\n</body>');
  }

  return out;
}

/** Returns the list of canonical shell parts missing from an article. */
function missingShellParts(html) {
  const missing = [];
  if (!/<footer/i.test(html)) missing.push('footer');
  if (!/G-LDXC5GQF61/.test(html)) missing.push('ga4');
  if (!/assets\/js\/analytics\.js/.test(html)) missing.push('analytics.js');
  return missing;
}

module.exports = { ARTICLE_FOOTER, GA4_HEAD, ANALYTICS_TAG, ensureArticleShell, missingShellParts };

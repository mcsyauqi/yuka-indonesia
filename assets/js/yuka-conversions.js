/**
 * YUKA Indonesia - GA4 conversion tracking for donation and WhatsApp clicks.
 * Measurement ID: G-LDXC5GQF61 (property 529006867).
 *
 * Loaded on every page (static pages, landing pages, articles). It is the single
 * source of the two key events marked as conversions in GA4:
 *   - donation_cta_click : any link or button that leads into the donation flow
 *                          (/donasi, /donasi-pendidikan-abk, /zakat-pendidikan-abk,
 *                          copy rekening, WhatsApp "konfirmasi donasi")
 *   - whatsapp_click     : any link that opens a chat with YUKA's WhatsApp number
 *                          (share buttons "wa.me/?text=" are NOT counted)
 * Both carry source_page / source_type / cta_location / cta_text / link_url so a
 * report can show which article or page produced the click.
 *
 * GA4 itself is loaded lazily (first interaction or 5 s fallback) and batches
 * events, so a same-tab navigation would drop the hit. For same-tab links the
 * navigation is held until GA4 confirms the hit (event_callback) or 1.5 s pass,
 * whichever comes first. Links opening in a new tab are never delayed.
 */
(function () {
    'use strict';
    if (window.__yukaConversions) return;
    window.__yukaConversions = true;

    var GA_ID = 'G-LDXC5GQF61';
    var WA_NUMBER = '6281229912332';

    // ---- GA4 bootstrap for pages that do not ship the inline snippet ----
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== 'function') {
        window.gtag = function () { window.dataLayer.push(arguments); };
    }
    var configured = window.dataLayer.some(function (e) {
        return e && e[0] === 'config' && e[1] === GA_ID;
    });
    if (!configured) {
        window.gtag('js', new Date());
        window.gtag('config', GA_ID, { send_page_view: true, cookie_flags: 'SameSite=None;Secure' });
    }

    function gtagRequested() {
        return !!document.querySelector('script[src*="googletagmanager.com/gtag/js"]');
    }
    function loadGtag() {
        if (gtagRequested()) return;
        var s = document.createElement('script');
        s.async = true;
        s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
        document.head.appendChild(s);
    }
    if (!configured) {
        setTimeout(loadGtag, 5000);
        ['pointerdown', 'keydown', 'touchstart'].forEach(function (evt) {
            addEventListener(evt, loadGtag, { once: true, passive: true });
        });
    }

    // ---- classification ----
    var DONATION_PATHS = /^\/(donasi|donasi-pendidikan-abk|zakat-pendidikan-abk)(\.html)?\/?$/;

    function sourceType(path) {
        if (path === '/' || path === '/index.html') return 'home';
        if (path.indexOf('/artikel/') === 0) return 'artikel';
        if (DONATION_PATHS.test(path)) return 'donasi';
        if (path.indexOf('/profil/') === 0) return 'profil';
        return 'halaman';
    }

    function ctaLocation(el) {
        if (el.closest('.navbar, nav, header')) return 'header';
        if (el.closest('footer')) return 'footer';
        if (el.closest('[class*="float"], .whatsapp-float, .wa-float, .sticky-cta')) return 'floating';
        if (el.closest('.hero, .hero-section, [class*="hero"]')) return 'hero';
        if (el.closest('article, .article-shell, .article-content')) return 'konten_artikel';
        if (el.closest('aside')) return 'sidebar';
        return 'konten';
    }

    function cleanText(el) {
        return (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 100);
    }

    function isWhatsApp(url) {
        var h = url.hostname.replace(/^www\./, '');
        if (h === 'wa.me') return url.pathname.replace(/\//g, '').length > 0; // wa.me/<number>
        if (h === 'api.whatsapp.com' || h === 'web.whatsapp.com') return /phone=\d+/.test(url.search);
        return false;
    }

    function classify(el) {
        var link = el.closest('a[href]');
        if (link) {
            var url;
            try { url = new URL(link.getAttribute('href'), location.href); } catch (e) { return null; }
            if (/^(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)$/.test(url.hostname.replace(/^www\./, ''))) {
                if (!isWhatsApp(url)) return null; // share button
                var txt = decodeURIComponent(url.search).toLowerCase();
                var konfirmasi = /konfirmasi donasi|ingin konfirmasi|donasi/.test(txt) && DONATION_PATHS.test(location.pathname);
                return { el: link, url: url, events: konfirmasi ? ['whatsapp_click', 'donation_cta_click'] : ['whatsapp_click'], method: konfirmasi ? 'whatsapp_konfirmasi' : 'whatsapp' };
            }
            var sameSite = url.hostname.replace(/^www\./, '') === location.hostname.replace(/^www\./, '') || url.hostname === 'yukaindonesia.com' || url.hostname === 'www.yukaindonesia.com';
            if (sameSite && DONATION_PATHS.test(url.pathname) && url.pathname !== location.pathname) {
                return { el: link, url: url, events: ['donation_cta_click'], method: 'link_halaman_donasi' };
            }
            return null;
        }
        var btn = el.closest('button');
        if (btn) {
            var onclick = btn.getAttribute('onclick') || '';
            var t = cleanText(btn).toLowerCase();
            if (onclick.indexOf('copyToClipboard') !== -1 || t.indexOf('salin nomor rekening') !== -1 || t.indexOf('salin rekening') !== -1) {
                return { el: btn, url: null, events: ['donation_cta_click'], method: 'salin_rekening' };
            }
        }
        return null;
    }

    // ---- sending ----
    document.addEventListener('click', function (e) {
        if (!e.target || !e.target.closest) return;
        var hit = classify(e.target);
        if (!hit) return;

        var path = location.pathname;
        var params = {
            source_page: path,
            source_type: sourceType(path),
            source_title: document.title.slice(0, 100),
            cta_location: ctaLocation(hit.el),
            cta_text: cleanText(hit.el),
            cta_method: hit.method,
            link_url: hit.url ? hit.url.href.slice(0, 250) : '',
            transport_type: 'beacon'
        };

        var link = hit.el.tagName === 'A' ? hit.el : null;
        var target = link ? (link.getAttribute('target') || '') : '';
        var sameTabNav = link && !target.match(/_blank/i) && !e.defaultPrevented &&
            e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;

        if (sameTabNav) {
            // Hold navigation until GA4 has sent the hit (gtag batches events, and a
            // same-tab unload drops the batch), or until gtag.js is still loading.
            e.preventDefault();
            loadGtag();
            var href = link.href, gone = false;
            var go = function () { if (!gone) { gone = true; location.href = href; } };
            hit.events.forEach(function (name, i) {
                var p = Object.assign({}, params);
                if (i === hit.events.length - 1) p.event_callback = go;
                window.gtag('event', name, p);
            });
            setTimeout(go, 1500);
            return;
        }

        loadGtag();
        hit.events.forEach(function (name) { window.gtag('event', name, params); });
    }, true);
})();

/**
 * YUKA Indonesia - Comprehensive GA4 Event Tracking
 * Measurement ID: G-LDXC5GQF61
 */
(function () {
    'use strict';

    // ===== SCROLL DEPTH =====
    var scrollThresholds = [25, 50, 75, 90, 100];
    var scrollReached = {};

    function trackScrollDepth() {
        var scrollTop = window.scrollY || document.documentElement.scrollTop;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight <= 0) return;
        var pct = Math.round((scrollTop / docHeight) * 100);

        scrollThresholds.forEach(function (threshold) {
            if (pct >= threshold && !scrollReached[threshold]) {
                scrollReached[threshold] = true;
                gtag('event', 'scroll', {
                    percent_scrolled: threshold,
                    page_path: window.location.pathname
                });
            }
        });
    }

    // ===== TIME ON PAGE =====
    var timeThresholds = [15, 30, 60, 120, 300]; // seconds

    function trackTimeOnPage() {
        timeThresholds.forEach(function (seconds) {
            setTimeout(function () {
                gtag('event', 'time_on_page', {
                    event_category: 'Engagement',
                    seconds_on_page: seconds,
                    page_path: window.location.pathname,
                    page_title: document.title
                });
            }, seconds * 1000);
        });
    }

    // ===== OUTBOUND LINKS =====
    function trackOutboundLinks() {
        document.addEventListener('click', function (e) {
            var link = e.target.closest('a[href]');
            if (!link) return;
            var href = link.href || '';

            // WhatsApp
            if (href.includes('wa.me') || href.includes('whatsapp.com')) {
                gtag('event', 'whatsapp_click', {
                    event_category: 'Contact',
                    event_label: link.textContent.trim().slice(0, 100) || 'WhatsApp Button',
                    wa_number: href.match(/wa\.me\/(\d+)/)?.[1] || '',
                    page_path: window.location.pathname
                });
                return;
            }

            // Social media
            var socialMap = {
                'instagram.com': 'Instagram',
                'facebook.com': 'Facebook',
                'youtube.com': 'YouTube',
                'youtu.be': 'YouTube',
                'tiktok.com': 'TikTok',
                'twitter.com': 'Twitter',
                'x.com': 'Twitter'
            };
            for (var domain in socialMap) {
                if (href.includes(domain)) {
                    gtag('event', 'social_media_click', {
                        event_category: 'Social',
                        platform: socialMap[domain],
                        page_path: window.location.pathname
                    });
                    return;
                }
            }

            // General outbound
            var isExternal = href.startsWith('http') &&
                !href.includes('yukaindonesia.com') &&
                !href.includes(window.location.hostname);
            if (isExternal) {
                gtag('event', 'click', {
                    event_category: 'Outbound Link',
                    event_label: href,
                    page_path: window.location.pathname
                });
            }
        });
    }

    // ===== PHONE & EMAIL CLICKS =====
    function trackContactLinks() {
        document.addEventListener('click', function (e) {
            var link = e.target.closest('a[href]');
            if (!link) return;

            if (link.href.startsWith('tel:')) {
                gtag('event', 'phone_call_click', {
                    event_category: 'Contact',
                    phone_number: link.href.replace('tel:', ''),
                    page_path: window.location.pathname
                });
            }

            if (link.href.startsWith('mailto:')) {
                gtag('event', 'email_click', {
                    event_category: 'Contact',
                    email_address: link.href.replace('mailto:', ''),
                    page_path: window.location.pathname
                });
            }
        });
    }

    // ===== CTA BUTTON CLICKS =====
    function trackCTAButtons() {
        document.addEventListener('click', function (e) {
            var btn = e.target.closest('.btn');
            if (!btn) return;
            var text = btn.textContent.trim().replace(/\s+/g, ' ').slice(0, 100);
            var href = btn.getAttribute('href') || btn.getAttribute('onclick') || '';

            if (href.includes('donasi') || text.toLowerCase().includes('donasi') || text.toLowerCase().includes('sedekah')) {
                gtag('event', 'donation_cta_click', {
                    event_category: 'Donation',
                    event_label: text,
                    source_page: window.location.pathname
                });
            } else {
                gtag('event', 'cta_click', {
                    event_category: 'CTA',
                    event_label: text,
                    page_path: window.location.pathname
                });
            }
        });
    }

    // ===== COPY REKENING (DONASI PAGE) =====
    function trackCopyRekening() {
        document.addEventListener('click', function (e) {
            var btn = e.target.closest('button');
            if (!btn) return;
            var onclick = btn.getAttribute('onclick') || '';
            if (onclick.includes('copyToClipboard')) {
                var match = onclick.match(/copyToClipboard\('([^']+)'\)/);
                if (match) {
                    gtag('event', 'copy_account_number', {
                        event_category: 'Donation',
                        account_number: match[1],
                        page_path: window.location.pathname
                    });
                }
            }
        });
    }

    // ===== CONTACT FORM TRACKING =====
    function trackContactForm() {
        var form = document.querySelector('form[data-validate]');
        if (!form) return;

        var formStarted = false;
        form.addEventListener('focus', function (e) {
            if (!formStarted && e.target.tagName !== 'BUTTON') {
                formStarted = true;
                gtag('event', 'form_start', {
                    event_category: 'Contact Form',
                    form_name: 'Hubungi Kami',
                    page_path: window.location.pathname
                });
            }
        }, true);

        var subjectEl = form.querySelector('#subject');
        if (subjectEl) {
            subjectEl.addEventListener('change', function () {
                gtag('event', 'form_field_change', {
                    event_category: 'Contact Form',
                    field_name: 'subject',
                    field_value: this.value,
                    page_path: window.location.pathname
                });
            });
        }

        form.addEventListener('submit', function (e) {
            var subject = subjectEl ? subjectEl.value : 'unknown';
            gtag('event', 'form_submit', {
                event_category: 'Contact Form',
                form_name: 'Hubungi Kami',
                subject: subject,
                page_path: window.location.pathname
            });
            gtag('event', 'generate_lead', {
                event_category: 'Lead',
                lead_source: 'Contact Form',
                subject: subject
            });
        });
    }

    // ===== NAVIGATION TRACKING =====
    function trackNavigation() {
        var navLinks = document.querySelectorAll('.navbar-menu a');
        navLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                gtag('event', 'navigation_click', {
                    event_category: 'Navigation',
                    nav_item: this.textContent.trim(),
                    destination_url: this.href,
                    source_page: window.location.pathname
                });
            });
        });
    }

    // ===== ARTICLE ENGAGEMENT =====
    function trackArticleEngagement() {
        var isArticle = window.location.pathname.includes('/artikel/');
        if (!isArticle) return;

        var h1 = document.querySelector('h1, .article-title');
        var articleTitle = h1 ? h1.textContent.trim() : document.title;

        // Fired once per article open
        gtag('event', 'article_view', {
            event_category: 'Article',
            article_title: articleTitle,
            page_path: window.location.pathname,
            page_title: document.title
        });

        // Track reading completion (90% scroll = article read)
        var readFired = false;
        window.addEventListener('scroll', function () {
            if (readFired) return;
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
            var docHeight = document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0 && (scrollTop / docHeight) >= 0.9) {
                readFired = true;
                gtag('event', 'article_read_complete', {
                    event_category: 'Article',
                    article_title: articleTitle,
                    page_path: window.location.pathname
                });
            }
        }, { passive: true });
    }

    // ===== BLOG LIST CARD CLICKS =====
    function trackBlogCardClicks() {
        var isBlogList = window.location.pathname.includes('blog') && !window.location.pathname.includes('/artikel/');
        if (!isBlogList) return;

        document.addEventListener('click', function (e) {
            var card = e.target.closest('a[href*="artikel"]');
            if (!card) return;
            var heading = card.querySelector('h2, h3, h4');
            var title = heading ? heading.textContent.trim() : card.getAttribute('href');
            gtag('event', 'article_click', {
                event_category: 'Blog',
                article_title: title,
                destination_url: card.href
            });
        });
    }

    // ===== DONATION PAGE SPECIFIC =====
    function trackDonationPage() {
        if (!window.location.pathname.includes('donasi')) return;

        gtag('event', 'view_item', {
            event_category: 'Donation',
            item_name: 'Halaman Donasi YUKA',
            page_path: window.location.pathname
        });
    }

    // ===== PROGRAM PAGE =====
    function trackProgramPage() {
        if (!window.location.pathname.includes('program')) return;
        var programCards = document.querySelectorAll('.program-card, .feature-card');
        programCards.forEach(function (card) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        var heading = card.querySelector('h3, h4');
                        if (heading) {
                            gtag('event', 'program_viewed', {
                                event_category: 'Program',
                                program_name: heading.textContent.trim(),
                                page_path: window.location.pathname
                            });
                        }
                        observer.unobserve(card);
                    }
                });
            }, { threshold: 0.5 });
            observer.observe(card);
        });
    }

    // ===== MAP VIEW TRACKING =====
    function trackMapView() {
        var mapIframe = document.querySelector('iframe[src*="google.com/maps"]');
        if (!mapIframe) return;
        var observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                gtag('event', 'map_view', {
                    event_category: 'Engagement',
                    page_path: window.location.pathname
                });
                observer.unobserve(mapIframe);
            }
        });
        observer.observe(mapIframe);
    }

    // ===== SITE SEARCH (if any search input exists) =====
    function trackSiteSearch() {
        var searchInput = document.querySelector('input[type="search"], input[name="q"], input[name="search"]');
        if (!searchInput) return;
        var form = searchInput.closest('form');
        if (form) {
            form.addEventListener('submit', function () {
                gtag('event', 'search', {
                    search_term: searchInput.value
                });
            });
        }
    }

    // ===== FOOTER LINK CLICKS =====
    function trackFooterLinks() {
        var footer = document.querySelector('footer');
        if (!footer) return;
        footer.addEventListener('click', function (e) {
            var link = e.target.closest('a[href]');
            if (!link) return;
            gtag('event', 'footer_link_click', {
                event_category: 'Footer',
                event_label: link.textContent.trim() || link.href,
                destination_url: link.href,
                page_path: window.location.pathname
            });
        });
    }

    // ===== HERO CTA TRACKING =====
    function trackHeroCTA() {
        var hero = document.querySelector('.hero, .hero-section, [class*="hero"]');
        if (!hero) return;
        hero.addEventListener('click', function (e) {
            var btn = e.target.closest('.btn');
            if (!btn) return;
            gtag('event', 'hero_cta_click', {
                event_category: 'Hero',
                event_label: btn.textContent.trim().slice(0, 100),
                page_path: window.location.pathname
            });
        });
    }

    // ===== INIT =====
    function init() {
        window.addEventListener('scroll', trackScrollDepth, { passive: true });
        trackTimeOnPage();
        trackOutboundLinks();
        trackContactLinks();
        trackCTAButtons();
        trackCopyRekening();
        trackContactForm();
        trackNavigation();
        trackArticleEngagement();
        trackBlogCardClicks();
        trackDonationPage();
        trackProgramPage();
        trackMapView();
        trackSiteSearch();
        trackFooterLinks();
        trackHeroCTA();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

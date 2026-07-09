// Homepage behaviour. Loaded with `defer`.
//
// Everything that is not needed to paint the hero is kept off the critical path:
// AOS only exists on desktop, Swiper is fetched when the gallery nears the
// viewport, and the decorative particles wait for an idle moment. The hero title
// reveal is a CSS keyframe (it used to be a gsap.from() call, which cost 42 KB
// across GSAP + an unused ScrollTrigger).

const loadScript = (src, onload) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = onload;
    document.body.appendChild(script);
};

const whenIdle = (fn) =>
    'requestIdleCallback' in window ? requestIdleCallback(fn, { timeout: 2000 }) : setTimeout(fn, 200);

// --- Scroll reveals (desktop only) --------------------------------------------
// aos.css carries media="(min-width: 768px)", so below that width its selectors
// never match and AOS has nothing to do. Loading it there costs 14.7 KB and a
// pass over 44 nodes for no visible effect. The media query listener covers the
// case of a desktop window being widened past the breakpoint after load, which
// would otherwise apply aos.css (opacity: 0) with no AOS around to reveal it.
const desktop = window.matchMedia('(min-width: 768px)');

const startAOS = () => loadScript('assets/vendor/aos.js', () => AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
}));

if (desktop.matches) {
    startAOS();
} else {
    desktop.addEventListener('change', (e) => e.matches && startAOS(), { once: true });
}

// --- Gallery carousel ---------------------------------------------------------
// swiper-bundle.min.js is ~640ms of parse, compile and init for a gallery that
// sits far below the fold. 600px of rootMargin is enough that it is always ready
// before it can be seen. Its stylesheet stays in <head>: the slides would reflow
// without it.
const initGallery = () => new Swiper('.gallery-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    speed: 800,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
    },
    breakpoints: {
        640: { slidesPerView: 2, spaceBetween: 24 },
        1024: { slidesPerView: 3, spaceBetween: 32 },
        1280: { slidesPerView: 3.5, spaceBetween: 40 }
    }
});

const gallery = document.querySelector('.gallery-swiper');
if (gallery) {
    const galleryObserver = new IntersectionObserver((entries, observer) => {
        if (!entries.some(e => e.isIntersecting)) return;
        observer.disconnect();
        loadScript('assets/vendor/swiper-bundle.min.js', initGallery);
    }, { rootMargin: '600px' });
    galleryObserver.observe(gallery);
}

// --- Hero stat counters -------------------------------------------------------
const animateCounters = () => {
    document.querySelectorAll('.stat-number[data-count]').forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const step = target / (2000 / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    });
};

const statsSection = document.querySelector('.hero-stats-modern');
if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(statsSection);
}

// --- Hero parallax ------------------------------------------------------------
const heroBg = document.querySelector('.hero-bg');
if (heroBg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
            ticking = false;
        });
    }, { passive: true });
}

// --- Decorative particles -----------------------------------------------------
// 20 nodes, each with its own infinite animation. Purely cosmetic, so they wait
// until the main thread is free rather than competing with the hero paint.
const createParticles = () => {
    const container = document.getElementById('heroParticles');
    if (!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        fragment.appendChild(particle);
    }
    container.appendChild(fragment);
};
whenIdle(createParticles);

document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

// Homepage animations. Loaded with `defer`, so it runs after aos.js and
// swiper-bundle.min.js (also deferred) have executed.
//
// The hero title reveal used to be a gsap.from() call. GSAP + ScrollTrigger cost
// 42 KB across two requests to a third CDN origin, and ScrollTrigger was never
// actually used, so the reveal now lives in CSS (.hero-title .title-line).

AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
    disable: window.innerWidth < 768 ? 'mobile' : false
});

const gallerySwiper = new Swiper('.gallery-swiper', {
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

// Count the hero stats up once they scroll into view.
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

// Parallax the hero background on scroll.
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

const createParticles = () => {
    const container = document.getElementById('heroParticles');
    if (!container) return;

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
        container.appendChild(particle);
    }
};
createParticles();

document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});

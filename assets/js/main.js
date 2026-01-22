/**
 * YUKA - Yayasan Ukhuwah Kaffah Amanatullah
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initScrollAnimations();
    initCopyToClipboard();
    initSmoothScroll();
    initGalleryLightbox();
    initFormValidation();
    initCounterAnimation();
});

/**
 * Navbar functionality
 */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    // Toggle mobile menu
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navbarMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navbarMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarToggle.classList.remove('active');
                navbarMenu.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Set active link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.navbar-menu a');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

/**
 * Scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Copy to clipboard functionality
 */
function initCopyToClipboard() {
    // Make copyToClipboard available globally
    window.copyToClipboard = function(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(function() {
                showToast('Nomor rekening berhasil disalin!');
            }).catch(function(err) {
                console.error('Failed to copy:', err);
                fallbackCopyToClipboard(text);
            });
        } else {
            fallbackCopyToClipboard(text);
        }
    };
}

function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        document.execCommand('copy');
        showToast('Nomor rekening berhasil disalin!');
    } catch (err) {
        console.error('Fallback: Failed to copy', err);
        showToast('Gagal menyalin. Silakan salin manual.');
    }

    document.body.removeChild(textArea);
}

/**
 * Toast notification
 */
function showToast(message, duration = 3000) {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        <span>${message}</span>
    `;

    // Add styles
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #1B5E20;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideUp 0.3s ease;
    `;

    // Add animation keyframes
    if (!document.querySelector('#toast-styles')) {
        const style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = `
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
            }
            @keyframes slideDown {
                from {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(-50%) translateY(20px);
                }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    // Remove toast after duration
    setTimeout(function() {
        toast.style.animation = 'slideDown 0.3s ease forwards';
        setTimeout(function() {
            toast.remove();
        }, 300);
    }, duration);
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Simple gallery lightbox
 */
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (galleryItems.length === 0) return;

    // Create lightbox element
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Close">&times;</button>
            <button class="lightbox-prev" aria-label="Previous">&lsaquo;</button>
            <button class="lightbox-next" aria-label="Next">&rsaquo;</button>
            <img src="" alt="Gallery Image">
        </div>
    `;

    // Add lightbox styles
    const lightboxStyles = document.createElement('style');
    lightboxStyles.textContent = `
        .lightbox {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .lightbox.active {
            display: flex;
            opacity: 1;
        }
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        .lightbox-content img {
            max-width: 100%;
            max-height: 85vh;
            border-radius: 8px;
        }
        .lightbox-close {
            position: absolute;
            top: -40px;
            right: 0;
            font-size: 36px;
            color: white;
            background: none;
            border: none;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }
        .lightbox-prev,
        .lightbox-next {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 48px;
            color: white;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            cursor: pointer;
            padding: 20px 15px;
            border-radius: 4px;
            transition: background 0.3s;
        }
        .lightbox-prev:hover,
        .lightbox-next:hover {
            background: rgba(255, 255, 255, 0.2);
        }
        .lightbox-prev { left: -60px; }
        .lightbox-next { right: -60px; }
        @media (max-width: 768px) {
            .lightbox-prev { left: 10px; }
            .lightbox-next { right: 10px; }
        }
    `;
    document.head.appendChild(lightboxStyles);
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    let currentIndex = 0;
    const images = Array.from(galleryItems).map(item => item.querySelector('img')?.src).filter(Boolean);

    // Open lightbox
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            currentIndex = index;
            lightboxImg.src = images[currentIndex];
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Navigation
    prevBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        lightboxImg.src = images[currentIndex];
    });

    nextBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        lightboxImg.src = images[currentIndex];
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
    });
}

/**
 * Form validation
 */
function initFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            let isValid = true;
            const inputs = form.querySelectorAll('[required]');

            inputs.forEach(input => {
                // Remove previous error
                input.classList.remove('error');
                const errorMsg = input.parentElement.querySelector('.error-message');
                if (errorMsg) errorMsg.remove();

                // Validate
                if (!input.value.trim()) {
                    isValid = false;
                    showFieldError(input, 'Field ini wajib diisi');
                } else if (input.type === 'email' && !isValidEmail(input.value)) {
                    isValid = false;
                    showFieldError(input, 'Format email tidak valid');
                } else if (input.type === 'tel' && !isValidPhone(input.value)) {
                    isValid = false;
                    showFieldError(input, 'Format nomor telepon tidak valid');
                }
            });

            if (isValid) {
                // Show success message
                showToast('Pesan berhasil dikirim! Kami akan segera menghubungi Anda.');
                form.reset();
            }
        });
    });
}

function showFieldError(input, message) {
    input.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = 'color: #dc2626; font-size: 0.875rem; margin-top: 4px;';
    input.parentElement.appendChild(errorDiv);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^[\d\s\-+()]{10,}$/.test(phone);
}

/**
 * Counter animation
 */
function initCounterAnimation() {
    const counters = document.querySelectorAll('[data-counter]');

    if (counters.length === 0) return;

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-counter'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(function() {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

/**
 * Back to top button
 */
(function() {
    // Create button
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 15l-6-6-6 6"/>
        </svg>
    `;
    backToTop.setAttribute('aria-label', 'Back to top');

    // Add styles
    const styles = document.createElement('style');
    styles.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: #1B5E20;
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: all 0.3s ease;
            z-index: 999;
        }
        .back-to-top:hover {
            background-color: #2E7D32;
            transform: translateY(-2px);
        }
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        @media (max-width: 576px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
            }
        }
    `;
    document.head.appendChild(styles);
    document.body.appendChild(backToTop);

    // Show/hide on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();

/**
 * Add form error styles
 */
(function() {
    const styles = document.createElement('style');
    styles.textContent = `
        input.error,
        textarea.error,
        select.error {
            border-color: #dc2626 !important;
        }
        input.error:focus,
        textarea.error:focus,
        select.error:focus {
            box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1) !important;
        }
    `;
    document.head.appendChild(styles);
})();

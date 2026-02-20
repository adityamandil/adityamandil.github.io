// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .about-visual, .glass-card');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form submission - handled by PHP
const contactForm = document.getElementById('contactForm');

// Update reCAPTCHA token before form submit
contactForm.addEventListener('submit', (e) => {
    // Get fresh reCAPTCHA token
    grecaptcha.ready(function() {
        grecaptcha.execute('6LfBifcrAAAAAFYIdUITpeLKD2Za_RM8vfFRR9RE', {action: 'submit'}).then(function(token) {
            document.getElementById('recaptchaToken').value = token;
        });
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled / 600);
    }
});

// Cursor effect (optional enhancement)
const cursor = document.createElement('div');
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(124, 58, 237, 0.5);
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
    display: none;
`;
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
    cursor.style.display = 'block';
});

// Hover effects for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.match(/\d+/));
                if (number) {
                    stat.setAttribute('data-target', number);
                    animateCounter(stat, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Dynamic gradient orbs movement
const orbs = document.querySelectorAll('.gradient-orb');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateOrbs() {
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 0.02;
        const x = (mouseX - window.innerWidth / 2) * speed;
        const y = (mouseY - window.innerHeight / 2) * speed;
        
        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
    
    requestAnimationFrame(animateOrbs);
}

animateOrbs();

// Form validation
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '' && input.hasAttribute('required')) {
            input.style.borderColor = '#f56565';
        } else {
            input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#7C3AED';
    });
});

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(updateActiveNav, 10));

// Print console message
console.log('%c🚀 Built with Zaplore Studio', 'color: #7C3AED; font-size: 20px; font-weight: bold;');
console.log('%cFrom code to customers - Let\'s grow together!', 'color: #A0AEC0; font-size: 14px;');

// Services Horizontal Carousel
class ServicesHorizontalCarousel {
    constructor() {
        this.carousel = document.getElementById('servicesCarousel');
        this.track = document.querySelector('.services-carousel-track');
        this.prevBtn = document.getElementById('servicesPrevBtn');
        this.nextBtn = document.getElementById('servicesNextBtn');
        
        if (!this.carousel || !this.prevBtn || !this.nextBtn) return;
        
        this.currentIndex = 0;
        this.totalCards = this.carousel.querySelectorAll('.service-card').length;
        this.cardsToShow = 3;
        this.autoScrollInterval = null;
        
        this.init();
    }
    
    init() {
        this.updateCardsToShow();
        this.updateCarousel();
        this.attachEvents();
        this.startAutoScroll();
    }
    
    updateCardsToShow() {
        const width = window.innerWidth;
        if (width < 640) {
            this.cardsToShow = 1;
        } else if (width < 968) {
            this.cardsToShow = 2;
        } else {
            this.cardsToShow = 3;
        }
    }
    
    updateCarousel() {
        const cards = this.carousel.querySelectorAll('.service-card');
        if (cards.length === 0) return;
        
        const cardWidth = cards[0].offsetWidth;
        const gap = 30;
        const offset = this.currentIndex * (cardWidth + gap);
        
        this.carousel.style.transform = `translateX(-${offset}px)`;
        this.updateButtons();
    }
    
    updateButtons() {
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex >= this.totalCards - this.cardsToShow;
    }
    
    scrollNext() {
        if (this.currentIndex < this.totalCards - this.cardsToShow) {
            this.currentIndex++;
            this.updateCarousel();
        } else {
            // Loop back to start
            this.currentIndex = 0;
            this.updateCarousel();
        }
    }
    
    scrollPrev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }
    
    attachEvents() {
        this.prevBtn.addEventListener('click', () => {
            this.scrollPrev();
            this.resetAutoScroll();
        });
        
        this.nextBtn.addEventListener('click', () => {
            this.scrollNext();
            this.resetAutoScroll();
        });
        
        // Pause on hover
        this.carousel.addEventListener('mouseenter', () => this.stopAutoScroll());
        this.carousel.addEventListener('mouseleave', () => this.startAutoScroll());
        
        // Touch support
        let startX = 0;
        let isDragging = false;
        
        this.carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            this.stopAutoScroll();
        });
        
        this.carousel.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            
            const endX = e.changedTouches[0].clientX;
            const diff = startX - endX;
            
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.scrollNext();
                } else {
                    this.scrollPrev();
                }
            }
            
            isDragging = false;
            this.startAutoScroll();
        });
        
        // Update on resize
        window.addEventListener('resize', debounce(() => {
            this.updateCardsToShow();
            this.updateCarousel();
        }, 250));
    }
    
    startAutoScroll() {
        this.stopAutoScroll();
        this.autoScrollInterval = setInterval(() => {
            this.scrollNext();
        }, 4000); // Auto-scroll every 4 seconds
    }
    
    stopAutoScroll() {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
            this.autoScrollInterval = null;
        }
    }
    
    resetAutoScroll() {
        this.stopAutoScroll();
        this.startAutoScroll();
    }
}

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    new ServicesHorizontalCarousel();
});

document.addEventListener("DOMContentLoaded", function () {
    function isWebView() {
        let userAgent = navigator.userAgent || navigator.vendor || window.opera;
        
        // Detect WebView on Android
        let isAndroidWebView = (userAgent.includes("wv") || userAgent.includes("Android") && userAgent.includes("Version"));
        
        // Detect WebView on iOS
        let isIOSWebView = (window.navigator.standalone === false) || (userAgent.includes("iPhone") || userAgent.includes("iPad") && !userAgent.includes("Safari"));

        return isAndroidWebView || isIOSWebView;
    }

    if (isWebView()) {
        document.querySelector(".footer").style.display = "none"; // Hide footer in WebView
        document.querySelector(".about").style.display = "none"; // Hide footer in WebView
        document.querySelector(".testimonials").style.display = "none"; // Hide footer in WebView
    }
});

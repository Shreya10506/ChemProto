// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.use-card, .step, .image-item, .video-placeholder').forEach(el => {
    observer.observe(el);
});

// Enhanced navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    const scrolled = window.scrollY > 100;

    if (scrolled) {
        nav.style.background = 'rgba(45, 80, 22, 0.98)';
        nav.style.backdropFilter = 'blur(20px)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        nav.style.background = 'rgba(45, 80, 22, 0.95)';
        nav.style.backdropFilter = 'blur(10px)';
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Parallax effect for hero graphics
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const molecule = document.querySelector('.floating-molecule');
    const circles = document.querySelectorAll('.floating-circle');

    if (molecule) {
        molecule.style.transform = `translate(-50%, -50%) rotate(${scrolled * 0.1}deg)`;
    }

    circles.forEach((circle, index) => {
        const speed = (index + 1) * 0.05;
        circle.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
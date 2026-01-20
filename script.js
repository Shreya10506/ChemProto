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

// Simple button interactions - add hover effects (already in CSS, but can add more if needed)
// This is minimal as requested

// Optional: Add a simple scroll effect to navbar
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(45, 80, 22, 0.98)';
    } else {
        nav.style.background = 'rgba(45, 80, 22, 0.95)';
    }
});
document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('nav ul a');
    const sections = document.querySelectorAll('main section');
    
    // ===================================
    // Legacy Smooth Scroll Function (Works everywhere)
    // ===================================
    
    // Function to animate the scroll manually
    function smoothScrollTo(element, duration) {
        const targetPosition = element.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        let startTime = null;

        function animation(currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        // Easing function for smooth acceleration/deceleration
        function ease(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
    }
    
    // ===================================
    // 1. Navigation Click Handler
    // ===================================
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Active class update
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Manual smooth scroll function call (500ms duration)
                smoothScrollTo(targetElement, 500);
            }
        });
    });


    // ===================================
    // 2. Scrollspy Functionality (Unchanged)
    // ===================================

    function updateScrollspy() {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // 150px offset diya hai taki header ke neeche highlight ho
            if (window.scrollY >= sectionTop - 150) {
                current = '#' + section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateScrollspy);
    updateScrollspy(); 
});
   // Initialize Animations
        AOS.init({
            duration: 1000, // Animation speed
            once: true,     // Animation happens only once while scrolling down
        });

        // Typewriter Effect
        var typed = new Typed('.typing-text', {
            strings: ['Scalable Web Apps', 'Secure Backends', 'High-Performance APIs'],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu');
        const navLinks = document.getElementById('nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Change icon from bars to times (X)
            const icon = mobileMenuBtn.querySelector('i');
            if(navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                 const icon = mobileMenuBtn.querySelector('i');
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
            });
        });

        const viewMoreBtn = document.getElementById('view-more-btn');

if (viewMoreBtn) {
    viewMoreBtn.addEventListener('click', () => {
        // Saare hidden projects dhoondo
        const hiddenProjects = document.querySelectorAll('.hidden-project');
        
        // Unhe visible karo
        hiddenProjects.forEach(project => {
            project.style.display = 'flex'; // Grid layout maintain karne ke liye flex
            // Animation effect
            project.style.animation = 'fadeIn 0.5s ease-in-out';
        });

        // Button ko gayab kar do
        viewMoreBtn.style.display = 'none'; 
    });
}
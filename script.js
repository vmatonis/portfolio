// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Hero to navbar morphing effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        const hero = document.querySelector('.hero');
        const heroHeight = hero.offsetHeight;
        const scrollY = window.scrollY;
        const morphPoint = heroHeight * 0.8; // Start morphing at 80% of hero height

        if (scrollY > morphPoint) {
            // Morphed state - compact navbar
            navbar.classList.add('morphed');
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            // Initial state - transparent navbar
            navbar.classList.remove('morphed');
            navbar.style.background = 'rgba(15, 23, 42, 0.2)';
            navbar.style.backdropFilter = 'blur(5px)';
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.experience-item, .skill-category, .education-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Motion Calendar Integration
    const motionCalendarLink = document.getElementById('motion-calendar-link');
    if (motionCalendarLink) {
        // Configuration for Motion calendar
        const motionConfig = {
            // Replace with your actual Motion scheduling URL
            schedulingUrl: 'https://app.usemotion.com/meet/vmatonis/meeting',
            // Alternative: Use Motion's embed widget
            useEmbed: false,
            embedId: 'YOUR_EMBED_ID'
        };

        motionCalendarLink.addEventListener('click', function(e) {
            e.preventDefault();

            if (motionConfig.useEmbed) {
                // Open Motion embed in a modal/popup
                openMotionEmbed(motionConfig.embedId);
            } else {
                // Open Motion scheduling page in new tab
                window.open(motionConfig.schedulingUrl, '_blank', 'noopener,noreferrer');
            }
        });
    }

    // Function to open Motion embed widget
    function openMotionEmbed(embedId) {
        // Create modal overlay
        const modal = document.createElement('div');
        modal.className = 'motion-modal-overlay';
        modal.innerHTML = `
            <div class="motion-modal">
                <button class="motion-modal-close">&times;</button>
                <iframe
                    src="https://motion.com/embed/${embedId}"
                    width="100%"
                    height="600"
                    frameborder="0">
                </iframe>
            </div>
        `;

        // Add close functionality
        modal.querySelector('.motion-modal-close').addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        // Close on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        document.body.appendChild(modal);
    }
});
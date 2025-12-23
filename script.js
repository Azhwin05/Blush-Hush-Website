/* 
 * BH Interiors - Interaction Scripts
 * - Scroll Animations (IntersectionObserver)
 * - Mobile Menu Toggle
 * - Smooth Scroll Adjustment
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ----------------------------------------------------
       1. INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS
       ---------------------------------------------------- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach(el => observer.observe(el));

    /* ----------------------------------------------------
       2. HEADER SCROLL STATE
       ---------------------------------------------------- */
    const header = document.getElementById('main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* ----------------------------------------------------
       3. MOBILE MENU TOGGLE
       ---------------------------------------------------- */
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');

    mobileToggle.addEventListener('click', () => {
        // Toggle display or add a class for CSS transition
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.width = '100%';
            navMenu.style.background = '#FDFCF8';
            navMenu.style.padding = '2rem';
            navMenu.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            
            // Stack items
            const ul = navMenu.querySelector('ul');
            ul.style.flexDirection = 'column';
            ul.style.alignItems = 'center';
            ul.style.gap = '1.5rem';
        }
    });

    /* ----------------------------------------------------
       4. SMOOTH SCROLL & LINK HANDLING
       ---------------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navMenu.style.display = 'none';
            }

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    /* ----------------------------------------------------
       5. LEAD FORM HANDLING (Simulation)
       ---------------------------------------------------- */
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = leadForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Request Sent!';
            btn.style.backgroundColor = 'var(--color-sage-deep)';
            
            setTimeout(() => {
                alert("Thank you! Your request for a consultation has been received. We will contact you shortly.");
                leadForm.reset();
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
            }, 500);
        });
    }
});

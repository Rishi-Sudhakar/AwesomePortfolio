document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP
    gsap.registerPlugin(ScrollTrigger);

    // Animate hero section
    gsap.from('.hero', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.profile-container', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 0.5,
        ease: 'back.out(1.7)'
    });

    gsap.from('.cta-buttons .cta-button', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 1
    });

    // Animate sections on scroll
    gsap.utils.toArray('.glass-container').forEach(container => {
        gsap.from(container, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: container,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate skill bubbles
    gsap.from('.skill-bubble', {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.skills-container',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Animate project cards
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 90%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Form submission animation
    const form = document.querySelector('form');
    const successMessage = document.querySelector('.success-message');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            gsap.to(form, {
                opacity: 0,
                y: 50,
                duration: 0.5,
                ease: 'power3.out',
                onComplete: () => {
                    form.style.display = 'none';
                    if (successMessage) {
                        successMessage.style.display = 'block';
                        gsap.from(successMessage, {
                            opacity: 0,
                            y: -50,
                            duration: 0.5,
                            ease: 'power3.out'
                        });
                    }
                }
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

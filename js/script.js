    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', function () {
        // Initialize GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Navbar scroll effect
        const navbar = document.getElementById("navbar");
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("bg-coffee-dark", "shadow-md");
            } else {
                navbar.classList.remove("bg-coffee-dark", "shadow-md");
            }
        });

        // Mobile menu toggle
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }

        // Create decorative elements
        createDecorativeElements();

        // About section animations
        // Header Animation
        gsap.to('#about-header h2', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            scrollTrigger: {
                trigger: '#about-header',
                start: 'top 80%',
            }
        });

        gsap.to('#about-underline', {
            opacity: 1,
            width: '80px',
            duration: 1,
            delay: 0.3,
            scrollTrigger: {
                trigger: '#about-header',
                start: 'top 80%',
            }
        });

        gsap.to('#about-tagline', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.5,
            scrollTrigger: {
                trigger: '#about-header',
                start: 'top 80%',
            }
        });

        // Content Animation - Staggered
        gsap.to('.about-content-element', {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            duration: 0.7,
            scrollTrigger: {
                trigger: '#about-content',
                start: 'top 80%',
            }
        });

        // Floating Elements Animation
        gsap.to('.coffee-bean-1', {
            y: '-20px',
            x: '15px',
            rotation: 15,
            repeat: -1,
            yoyo: true,
            duration: 6,
            ease: 'sine.inOut'
        });

        gsap.to('.coffee-bean-2', {
            y: '25px',
            x: '-10px',
            rotation: -20,
            repeat: -1,
            yoyo: true,
            duration: 5,
            delay: 0.5,
            ease: 'sine.inOut'
        });

        gsap.to('.coffee-cup', {
            y: '-15px',
            repeat: -1,
            yoyo: true,
            duration: 4,
            ease: 'sine.inOut'
        });

        // Animated icon pulse
        gsap.to('.animated-icon', {
            scale: 1.1,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease: 'power1.inOut'
        });

        // Animate sections on scroll with staggered children
        gsap.utils.toArray('.section').forEach(section => {
            // Main section animation
            gsap.to(section, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            });

            // Staggered animation for children elements
            const children = section.querySelectorAll('h2, h3, p, .flex > div, .grid > div, img, form');
            gsap.from(children, {
                y: 50,
                opacity: 0, // Diubah dari 1 ke 0 untuk animasi fade in
                duration: 0.8,
                stagger: 0.1,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            });
        });

        // Animate coffee beans
        gsap.utils.toArray('.floating-beans').forEach(bean => {
            gsap.to(bean, {
                y: Math.random() * 100 - 50,
                rotation: `+=${Math.random() * 360}`,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });

        // Add hover animations to service cards
        gsap.utils.toArray('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -10,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            });

            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
        });
    });

    // Create decorative coffee beans
    function createDecorativeElements() {
        const container = document.getElementById('decorative-elements');
        if (!container) return;

        // Create coffee beans
        for (let i = 0; i < 15; i++) {
            const bean = document.createElement('div');
            bean.classList.add('coffee-bean');

            // Random position
            bean.style.left = `${Math.random() * 100}vw`;
            bean.style.top = `${Math.random() * 300}vh`; // Distribute throughout the page
            bean.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 1.5})`;

            container.appendChild(bean);
        }
    }
    //Floatinng Icon 
    
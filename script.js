        // Scroll Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.2
        });

        document.querySelectorAll('.fade-in').forEach(element => {
            observer.observe(element);
        });

        // Code Particles Animation
        const codeElements = document.querySelectorAll('.code-element');
        codeElements.forEach(element => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            const randomDelay = Math.random() * 5;
            element.style.left = `${randomX}%`;
            element.style.top = `${randomY}%`;
            element.style.animationDelay = `${randomDelay}s`;
        });


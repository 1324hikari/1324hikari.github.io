document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const menuBtn = document.querySelector('.menu-btn');
    const menuOverlay = document.querySelector('.menu-overlay');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        menuOverlay.classList.toggle('active');

        // Toggle body scroll when menu is open
        if (menuOverlay.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.menu-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Waifu pics carousel navigation
    const waifuContainer = document.querySelector('.waifuwu-container');
    if (waifuContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        waifuContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - waifuContainer.offsetLeft;
            scrollLeft = waifuContainer.scrollLeft;
        });

        waifuContainer.addEventListener('mouseleave', () => {
            isDown = false;
        });

        waifuContainer.addEventListener('mouseup', () => {
            isDown = false;
        });

        waifuContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - waifuContainer.offsetLeft;
            const walk = (x - startX) * 2;
            waifuContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // Download button animation
    //const downloadBtn = document.querySelector('.download-btn');
//    if (downloadBtn) {
//        downloadBtn.addEventListener('click', () => {
//            downloadBtn.textContent = 'COMING SOON!';
//            downloadBtn.style.backgroundColor = '#4CAF50';
//            setTimeout(() => {
//                downloadBtn.textContent = 'GITHUB ACCOUNT';
//                downloadBtn.style.backgroundColor = '#ff3366';
//            }, 2000);
//        });
//    }

    // Parallax effect for main section
    const mainSection = document.querySelector('.main');
    if (mainSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            mainSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        });
    }
});


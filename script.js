document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Screenshot carousel navigation
    const screenshotContainer = document.querySelector('.screenshot-container');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    screenshotContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - screenshotContainer.offsetLeft;
        scrollLeft = screenshotContainer.scrollLeft;
    });
    
    screenshotContainer.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    screenshotContainer.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    screenshotContainer.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - screenshotContainer.offsetLeft;
        const walk = (x - startX) * 2;
        screenshotContainer.scrollLeft = scrollLeft - walk;
    });
    
    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.addEventListener('click', () => {
        alert('Mobile menu would open here');
    });
    
    // Download button animation
    const downloadBtn = document.querySelector('.download-btn');
    downloadBtn.addEventListener('click', () => {
        downloadBtn.textContent = 'COMING SOON!';
        downloadBtn.style.backgroundColor = '#4CAF50';
        setTimeout(() => {
            downloadBtn.textContent = 'DOWNLOAD NOW';
            downloadBtn.style.backgroundColor = '#ff3366';
        }, 2000);
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    });
});

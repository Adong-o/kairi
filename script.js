// Mobile menu toggle functionality
document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    this.classList.toggle('active');
    
    if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
    } else {
        navMenu.style.display = 'flex';
    }
});

// Dynamically set hero section top margin
function adjustHeroSection() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    
    if (navbar && heroSection) {
        const navbarHeight = navbar.offsetHeight;
        heroSection.style.marginTop = `${navbarHeight}px`;
    }
}

// Run on load and window resize
window.addEventListener('load', adjustHeroSection);
window.addEventListener('resize', adjustHeroSection);

//switch
function showPersonal() {
    document.getElementById('personal-pricing').style.display = 'flex';
    document.getElementById('enterprise-pricing').style.display = 'none';
    document.querySelector('.tabs button:first-child').classList.add('active');
    document.querySelector('.tabs button:last-child').classList.remove('active');
}

function showEnterprise() {
    document.getElementById('personal-pricing').style.display = 'none';
    document.getElementById('enterprise-pricing').style.display = 'flex';
    document.querySelector('.tabs button:last-child').classList.add('active');
    document.querySelector('.tabs button:first-child').classList.remove('active');
}
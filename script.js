
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle dropdown menu
    navbarToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent the click from immediately closing the menu
        navMenu.classList.toggle('show');
        this.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !navbarToggle.contains(e.target)) {
            navMenu.classList.remove('show');
            navbarToggle.classList.remove('active');
        }
    });

    // Close dropdown when a nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
            navbarToggle.classList.remove('active');
        });
    });

    // Smooth scrolling
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

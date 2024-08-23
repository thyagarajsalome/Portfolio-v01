document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navMenu = document.querySelector('.nav-menu');
  
    // Toggle menu and button animation
    navbarToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      navbarToggle.classList.toggle('active');
    });
  
    // Close the menu when a link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
      });
    });
  
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Highlight active section in navigation
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
  
    function highlightActiveSection() {
      let scrollY = window.pageYOffset;
  
      sections.
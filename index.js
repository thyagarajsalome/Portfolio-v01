// Get all navigation links
const navLinks = document.querySelectorAll("nav a");

// Get all sections for intersection observer
const sections = document.querySelectorAll("section");

// Smooth scroll function
function smoothScroll(e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  if (targetId === "#") return; // Skip if it's just "#"

  const targetSection = document.querySelector(targetId);
  const navHeight = document.querySelector("nav").offsetHeight;

  window.scrollTo({
    top: targetSection.offsetTop - navHeight,
    behavior: "smooth",
  });
}

// Add smooth scroll to all navigation links
navLinks.forEach((link) => {
  link.addEventListener("click", smoothScroll);
});

// Intersection Observer for highlighting active section
const navOptions = {
  threshold: 0.2,
  rootMargin: `-${document.querySelector("nav").offsetHeight}px 0px 0px 0px`,
};

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Get the matching navigation link
    const targetId = `#${entry.target.id}`;
    const link = document.querySelector(`nav a[href="${targetId}"]`);

    if (!link) return;

    if (entry.isIntersecting) {
      // Remove active class from all links
      navLinks.forEach((link) => link.classList.remove("active"));
      // Add active class to current link
      link.classList.add("active");
    }
  });
}, navOptions);

// Observe all sections
sections.forEach((section) => {
  navObserver.observe(section);
});

// Add scroll event for navbar background
const nav = document.querySelector("nav");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Add background when scrolled
  if (currentScroll > 50) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }

  // Hide/show navbar on scroll
  if (currentScroll > lastScroll && currentScroll > 500) {
    nav.style.transform = "translateY(-100%)";
  } else {
    nav.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

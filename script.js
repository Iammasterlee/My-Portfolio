const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.nav-mobile');
const closeBtn = document.querySelector('.close-btn');

// Open menu
hamburger.addEventListener('click', () => {
  mobileNav.classList.add('open');
});

// Close menu
closeBtn.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});

// Smooth scrolling + auto close on mobile
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });

    mobileNav.classList.remove('open');
  });
});

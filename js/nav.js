/**
 * nav.js
 * - Highlights the active nav link on scroll.
 * - Handles mobile hamburger menu toggle.
 */

(function () {
  const navbar   = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  const toggle   = document.getElementById('navToggle');
  const navMenu  = document.getElementById('navLinks');

  /* ── Active link on scroll ── */
  function updateActiveLink() {
    let current = '';
    sections.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 140) current = s.getAttribute('id');
    });
    navLinks.forEach((a) => {
      const isActive = a.getAttribute('href') === '#' + current;
      a.classList.toggle('active', isActive);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink(); // run once on load

  /* ── Mobile hamburger ── */
  if (toggle && navMenu) {
    toggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is clicked
    navLinks.forEach((a) => {
      a.addEventListener('click', () => {
        navMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target)) {
        navMenu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
})();

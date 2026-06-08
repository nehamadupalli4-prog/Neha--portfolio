/**
 * scroll-reveal.js
 * Uses IntersectionObserver to fade+slide elements with class "reveal"
 * into view as they enter the viewport.
 */

(function () {
  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings slightly
        const delay = i * 80;
        setTimeout(() => entry.target.classList.add('visible'), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach((el) => observer.observe(el));
})();

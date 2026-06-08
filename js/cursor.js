/**
 * cursor.js
 * Tracks mouse position and moves the radial glow element.
 * Hides on touch devices automatically.
 */

(function () {
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;

  // Disable on touch devices
  if (window.matchMedia('(hover: none)').matches) {
    glow.style.display = 'none';
    return;
  }

  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top  = e.clientY + 'px';
  });
})();

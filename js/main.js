/* ============================================
   NEXORA — Agencia Digital
   Archivo: js/main.js
   ============================================ */




/* ---- BOTÓN FLOTANTE ---- */
function toggleFloat() {
  const menu    = document.getElementById('floatMenu');
  const trigger = document.getElementById('floatTrigger');
  menu.classList.toggle('open');
  trigger.classList.toggle('active');
}

// Exponer globalmente para el onclick del HTML
window.toggleFloat = toggleFloat;


/* ---- REVEAL AL HACER SCROLL ---- */
// Los elementos arrancan invisibles y suben al entrar al viewport
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity   = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .step, .why-item').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});
// DIETA PLANA 503020 · Terminal JS

// ── Reloj ──────────────────────────────────────────
function updateClock() {
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date();
  const d = now.toLocaleDateString('es-AR', { day:'2-digit', month:'2-digit', year:'numeric' });
  const t = now.toLocaleTimeString('es-AR', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
  el.textContent = `[${d} ${t}]`;
}
setInterval(updateClock, 1000);
updateClock();

// ── Nav activo ─────────────────────────────────────
(function() {
  const links = document.querySelectorAll('nav.main-nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    if (href === current) a.classList.add('active');
  });
})();

// ── Efecto typing en elementos con data-type ───────
function typeEffect(el, text, speed = 30) {
  el.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i++];
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

document.querySelectorAll('[data-type]').forEach(el => {
  typeEffect(el, el.getAttribute('data-type'));
});

// ── Contador de boot ──────────────────────────────
function bootSequence() {
  const lines = document.querySelectorAll('.boot-line[data-delay]');
  lines.forEach(line => {
    const delay = parseInt(line.getAttribute('data-delay') || 0);
    line.style.opacity = '0';
    setTimeout(() => { line.style.opacity = '1'; }, delay);
  });
}
bootSequence();

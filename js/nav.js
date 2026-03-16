const NAV_HTML = `
<div class="topbar">
  <div class="topbar-logo">DIETA PLANA 503020</div>
  <div class="topbar-prompt">root@nimer:~$ _</div>
  <div class="topbar-clock" id="clock">[--:--:--]</div>
</div>
<nav class="main-nav">
  <div class="nav-fila nav-fila-1">
    <a href="index.html">🏠 INICIO</a>
    <a href="fundamento.html">🧬 FUNDAMENTO</a>
    <a href="fosfatos.html">🌿 FOSFATOS 50%</a>
    <a href="carbohidratos.html">🌾 CARBOHIDRATOS 30%</a>
    <a href="proteinas.html">💪 PROTEÍNAS 20%</a>
    <a href="versiones.html">📋 VERSIONES</a>
    <a href="menu.html">🍽️ MENÚ SEMANAL</a>
  </div>
  <div class="nav-fila nav-fila-2">
    <a href="analisis.html">🔬 ANÁLISIS CLÍNICOS</a>
    <a href="principios.html">⚡ PRINCIPIOS</a>
    <a href="prohibidos.html">🚫 PROHIBIDOS</a>
    <a href="longevidad.html">🌏 LONGEVIDAD</a>
    <a href="links.html">🔗 LINKS</a>
    <a href="infografia.html">📊 INFOGRAFÍA</a>
  </div>
</nav>
`;

const FOOTER_HTML = `
<footer>
  <div>
    <span>DIETA PLANA 503020</span> · Basada en los principios de Nimer Simeón Montes<br>
    <span style="color:var(--verde-dim)">Este sitio es informativo. Consultar siempre con profesional de salud.</span><br>
    <span style="margin-top:6px;display:block;">[ EOF ] · Sistema activo · <span id="clock-footer"></span> </span>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  const navContainer = document.getElementById('nav-container');
  if (navContainer) navContainer.innerHTML = NAV_HTML;

  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = FOOTER_HTML;

  function tick() {
    const now = new Date();
    const d = now.toLocaleDateString('es-AR', { day:'2-digit', month:'2-digit', year:'numeric' });
    const t = now.toLocaleTimeString('es-AR', { hour:'2-digit', minute:'2-digit', second:'2-digit' });
    const str = `[${d} ${t}]`;
    ['clock','clock-footer'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = str;
    });
  }
  setInterval(tick, 1000);
  tick();

  const links = document.querySelectorAll('nav.main-nav a');
  const current = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (href === current) a.classList.add('active');
  });
});

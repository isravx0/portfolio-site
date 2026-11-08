/* Lightweight, optional foreground effects. No moving background or scroll parallax. */
document.addEventListener('DOMContentLoaded', () => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine = window.matchMedia('(pointer: fine)');
  const layer = document.createElement('div');
  layer.className = 'sparkle-layer'; layer.setAttribute('aria-hidden', 'true');
  document.body.append(layer);
  const timers = new Map();
  let last = 0;
  let turn = 0;
  const enabled = () => !reduce.matches && !document.documentElement.classList.contains('ambient-paused') && !document.hidden;
  function remove(particle) {
    clearTimeout(timers.get(particle)); timers.delete(particle); particle.remove();
  }
  function clear() { [...timers.keys()].forEach(remove); }
  function sparkle(x, y, burst = false) {
    if (!enabled() || timers.size >= 18) return;
    const particle = document.createElement('span');
    particle.className = burst ? 'pointer-sparkle sparkle-burst' : 'pointer-sparkle';
    particle.textContent = turn++ % 3 === 0 ? '✧' : '✦';
    particle.style.left = `${x}px`; particle.style.top = `${y}px`;
    particle.style.setProperty('--spark-dx', `${(turn % 3 - 1) * (burst ? 20 : 9)}px`);
    particle.style.setProperty('--spark-size', `${burst ? 15 : 9 + turn % 4}px`);
    layer.append(particle);
    timers.set(particle, setTimeout(() => remove(particle), 680));
  }
  document.addEventListener('pointermove', event => {
    if (!fine.matches || !enabled() || event.pointerType === 'touch' || document.querySelector('.mini-dialog.is-dragging')) return;
    const now = performance.now(); if (now - last < 85) return;
    last = now; sparkle(event.clientX, event.clientY);
  }, { passive: true });
  document.addEventListener('click', event => {
    const target = event.target.closest('.desktop-shortcut, .launch-mini, .workspace-open, .file-demo');
    if (!target || !enabled()) return;
    const bounds = target.getBoundingClientRect();
    const x = event.detail ? event.clientX : bounds.left + bounds.width / 2;
    const y = event.detail ? event.clientY : bounds.top + bounds.height / 2;
    for (let i = 0; i < 5; i++) sparkle(x + (i - 2) * 7, y - (i % 2) * 8, true);
  });
  document.querySelector('.ambience-toggle')?.addEventListener('click', () => { if (!enabled()) clear(); });
  reduce.addEventListener?.('change', () => { if (reduce.matches) clear(); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) clear(); });
  window.addEventListener('pagehide', clear, { once: true });
});

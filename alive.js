/* Motion enhances the existing content; the full code remains available without JS. */
document.addEventListener('DOMContentLoaded', () => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const paused = () => preference.matches || document.documentElement.classList.contains('ambient-paused');
  const jobs = new Set();
  const cards = [...document.querySelectorAll('.hero-art .code-card')];
  cards.forEach(card => {
    const code = card.querySelector('code');
    if (!code) return;
    const walker = document.createTreeWalker(code, NodeFilter.SHOW_TEXT);
    const segments = [];
    while (walker.nextNode()) segments.push({ node: walker.currentNode, text: walker.currentNode.textContent });
    const total = segments.reduce((sum, item) => sum + item.text.length, 0);
    let started = false;
    let frame;
    const finish = () => {
      if (frame) cancelAnimationFrame(frame);
      segments.forEach(item => { item.node.textContent = item.text; });
      card.classList.remove('code-is-typing');
      jobs.delete(finish);
    };
    const start = () => {
      if (started || paused() || !window.requestAnimationFrame) return;
      started = true;
      const pre = card.querySelector('pre');
      pre.style.minHeight = `${pre.getBoundingClientRect().height}px`;
      segments.forEach(item => { item.node.textContent = ''; });
      card.classList.add('code-is-typing');
      jobs.add(finish);
      let begin;
      const tick = time => {
        if (paused() || document.hidden) { finish(); return; }
        if (begin === undefined) begin = time;
        let remaining = Math.floor((time - begin) * .14);
        if (remaining >= total) { finish(); return; }
        for (const item of segments) {
          const visible = Math.min(item.text.length, Math.max(0, remaining));
          item.node.textContent = item.text.slice(0, visible);
          remaining -= item.text.length;
        }
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        start(); observer.disconnect();
      }, { threshold: .25 });
      observer.observe(card);
    } else start();
    if (window.matchMedia('(pointer: fine)').matches && !preference.matches) {
      card.parentElement.addEventListener('pointermove', event => {
        if (paused()) return;
        const box = card.parentElement.getBoundingClientRect();
        card.style.setProperty('--card-rx', `${-(event.clientY - box.top - box.height / 2) / box.height * 6}deg`);
        card.style.setProperty('--card-ry', `${(event.clientX - box.left - box.width / 2) / box.width * 8}deg`);
      }, { passive: true });
      card.parentElement.addEventListener('pointerleave', () => {
        card.style.setProperty('--card-rx', '0deg');
        card.style.setProperty('--card-ry', '0deg');
      });
    }
  });
  const stopIfPaused = () => { if (paused()) jobs.forEach(finish => finish()); };
  document.querySelector('.ambience-toggle')?.addEventListener('click', stopIfPaused);
  preference.addEventListener?.('change', stopIfPaused);
  window.addEventListener('pagehide', () => jobs.forEach(finish => finish()), { once: true });
});

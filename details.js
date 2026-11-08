document.addEventListener('DOMContentLoaded', () => {
  const t = (key) => window.portfolioI18n.t(key);
  const desktop = document.querySelector('.retro-desktop');
  if (desktop) {
    const start = desktop.querySelector('.desktop-start');
    const startMenu = desktop.querySelector('.desktop-start-menu');
    const closeStart = (restoreFocus = false) => {
      if (!startMenu) return;
      startMenu.hidden = true;
      start.setAttribute('aria-expanded', 'false');
      if (restoreFocus) start.focus();
    };
    start?.addEventListener('click', () => {
      if (!startMenu) return;
      startMenu.hidden = !startMenu.hidden;
      start.setAttribute('aria-expanded', String(!startMenu.hidden));
    });
    start?.addEventListener('keydown', event => {
      if (event.key !== 'ArrowDown' || !startMenu) return;
      event.preventDefault(); startMenu.hidden = false; start.setAttribute('aria-expanded', 'true');
      startMenu.querySelector('a')?.focus();
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && startMenu && !startMenu.hidden) closeStart(true); });
    document.addEventListener('click', event => { if (startMenu && !startMenu.hidden && !start.contains(event.target) && !startMenu.contains(event.target)) closeStart(); });
    startMenu?.addEventListener('click', event => { if (event.target.closest('a')) closeStart(); });
    desktop.querySelector('.desktop-taskbar')?.addEventListener('focusout', event => {
      if (event.relatedTarget && !desktop.querySelector('.desktop-taskbar').contains(event.relatedTarget)) closeStart();
    });
    const validApps = new Set(['vyro', 'mochi-garden', 'nexora', 'monvex-web', 'monvex-mobile', 'bloomly', 'assistant']);
    let explored = new Set();
    try {
      const saved = JSON.parse(sessionStorage.getItem('portfolio-explored') || '[]');
      if (Array.isArray(saved)) explored = new Set(saved.filter(app => validApps.has(app)));
    } catch { /* Session storage is optional. */ }
    const renderExploration = () => {
      const lang = window.portfolioI18n.language;
      const number = new Intl.NumberFormat(lang).format(explored.size);
      const total = new Intl.NumberFormat(lang).format(validApps.size);
      desktop.querySelector('.exploration-status').textContent = lang === 'ar'
        ? `${number} / ${total} · مشاريع تم استكشافها`
        : `${number} / ${total} · ${lang === 'nl' ? 'projecten ontdekt' : 'projects explored'}`;
      desktop.querySelectorAll('.desktop-shortcut').forEach(button => {
        button.classList.toggle('has-explored', explored.has(button.dataset.openApp));
      });
    };
    document.addEventListener('click', event => {
      const launcher = event.target.closest('[data-open-app]');
      if (!launcher || !validApps.has(launcher.dataset.openApp) || !document.querySelector('.mini-dialog')?.open) return;
      explored.add(launcher.dataset.openApp);
      try { sessionStorage.setItem('portfolio-explored', JSON.stringify([...explored])); } catch { /* Optional storage. */ }
      renderExploration();
    });
    renderExploration();
    const updateClock = () => {
      const now = new Date();
      const clock = desktop.querySelector('[data-local-clock]');
      clock.textContent = new Intl.DateTimeFormat(window.portfolioI18n.language, { hour: '2-digit', minute: '2-digit' }).format(now);
      clock.dateTime = now.toISOString();
    };
    updateClock();
    const timer = setInterval(() => { if (!document.hidden) updateClock(); }, 30000);
    window.addEventListener('pagehide', () => clearInterval(timer), { once: true });
    document.addEventListener('visibilitychange', () => { if (!document.hidden) updateClock(); });
    document.addEventListener('portfolio:language', () => { renderExploration(); updateClock(); });
    const toggle = desktop.querySelector('.ambience-toggle');
    let ambient = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const applyAmbience = () => {
      document.documentElement.classList.toggle('ambient-paused', !ambient);
      toggle.setAttribute('aria-pressed', String(ambient));
    };
    toggle.addEventListener('click', () => { ambient = !ambient; applyAmbience(); });
    applyAmbience();
  }
  const top = document.querySelector('.back-to-top');
  const updateTop = () => { if (top) top.hidden = window.scrollY < 500; };
  window.addEventListener('scroll', updateTop, { passive: true });
  updateTop();
  top?.addEventListener('click', () => window.scrollTo({
    top: 0,
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
  }));

  const feedback = document.querySelector('.copy-feedback');
  let feedbackTimer;
  const announce = (key) => {
    clearTimeout(feedbackTimer);
    feedback.textContent = t(key);
    feedback.hidden = false;
    feedbackTimer = setTimeout(() => { feedback.hidden = true; feedback.textContent = ''; }, 3500);
  };
  const fallback = document.createElement('dialog');
  fallback.className = 'copy-dialog';
  fallback.dataset.noTranslate = '';
  document.body.append(fallback);
  let copyOpener;
  let copyValue;
  const showFallback = () => {
    fallback.replaceChildren();
    const label = document.createElement('label');
    label.textContent = t('Copy this link');
    const input = document.createElement('input');
    input.type = 'text'; input.readOnly = true; input.value = copyValue;
    label.append(input);
    const hint = document.createElement('p'); hint.textContent = t('Select the link and copy it with Ctrl+C or Cmd+C.');
    const close = document.createElement('button'); close.type = 'button'; close.textContent = t('Close'); close.addEventListener('click', () => fallback.close());
    fallback.append(label, hint, close);
    if (!fallback.open) fallback.showModal();
    input.focus(); input.select();
  };
  fallback.addEventListener('close', () => { copyOpener?.focus(); });
  document.addEventListener('click', async (event) => {
    const trigger = event.target.closest('[data-copy-link]');
    if (!trigger) return;
    copyOpener = trigger;
    const url = new URL(trigger.dataset.copyLink || window.location.href, window.location.href);
    url.searchParams.set('lang', window.portfolioI18n.language);
    if (window.portfolioTheme) url.searchParams.set('theme', window.portfolioTheme.current);
    copyValue = url.href;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(copyValue);
      announce('Project link copied');
    } catch { showFallback(); }
  });
  document.addEventListener('portfolio:language', () => {
    if (!feedback.hidden) feedback.hidden = true;
    if (fallback.open) showFallback();
  });
});

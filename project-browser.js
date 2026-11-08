document.addEventListener('DOMContentLoaded', () => {
  const browser = document.querySelector('.project-file-browser');
  if (!browser) return;
  const entries = {
    nexora: ['Nexora', 'computer', 'Web application', 'Productivity workspace'],
    vyro: ['VYRO', 'workout', 'Gym & workout', 'Offline workout journal'],
    'mochi-garden': ['Mochi’s Garden', 'bunny', 'Games', 'A place to explore.'],
    'monvex-web': ['Monvex Web', 'wallet', 'Web application', 'Personal budget planning'],
    'monvex-mobile': ['Monvex Mobile', 'phone', 'Mobile', 'Mobile budgeting application'],
    bloomly: ['Bloomly', 'plant', 'Mobile', 'Tasks and habit tracking'],
    assistant: ['JARVIS', 'chat', 'AI', 'Conversation playground'],
  };
  let selected = 'nexora';
  const tabs = [...browser.querySelectorAll('[data-project-file]')];
  function render(focus = false) {
    const t = key => window.portfolioI18n.t(key);
    const [name, icon, kind, description] = entries[selected];
    tabs.forEach(tab => {
      const active = tab.dataset.projectFile === selected;
      tab.setAttribute('aria-selected', String(active)); tab.tabIndex = active ? 0 : -1;
      if (active && focus) tab.focus();
    });
    browser.querySelector('.project-file-list').setAttribute('aria-label', t('Project files'));
    browser.querySelector('.file-preview').setAttribute('aria-labelledby', `file-${selected}`);
    browser.querySelector('.file-preview-icon').src = `images/pixels/${icon}.svg`;
    browser.querySelector('.file-preview-kind').textContent = t(kind);
    browser.querySelector('.file-preview h2').textContent = name;
    browser.querySelector('.file-preview-description').textContent = t(description);
    const demo = browser.querySelector('.file-demo'); demo.dataset.openApp = selected; demo.textContent = t('Try the mini app');
    const link = browser.querySelector('.file-detail-link'); link.textContent = t('View project →');
    const url = new URL(`project-${selected}.html`, window.location.href);
    url.searchParams.set('lang', window.portfolioI18n.language);
    if (window.portfolioTheme) url.searchParams.set('theme', window.portfolioTheme.current);
    link.href = url.href;
    browser.querySelector('.file-browser-status span').textContent = t('7 projects');
    browser.querySelector('.file-browser-status span:last-child').textContent = t('SELECT / EXPLORE / PLAY');
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => { selected = tab.dataset.projectFile; render(); });
    tab.addEventListener('keydown', event => {
      let next;
      if (event.key === 'ArrowDown') next = (index + 1) % tabs.length;
      if (event.key === 'ArrowUp') next = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault(); selected = tabs[next].dataset.projectFile; render(true);
    });
  });
  document.addEventListener('portfolio:language', () => render());
  document.addEventListener('portfolio:theme', () => render());
  render();
});

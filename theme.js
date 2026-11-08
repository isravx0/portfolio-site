/* Princess light theme + Cyber dark theme, shared across every page. */
(() => {
  const normalise = value => ['light', 'princess'].includes(value) ? 'light' : ['dark', 'cyber'].includes(value) ? 'dark' : null;
  const current = new URL(window.location.href);
  let saved;
  try { saved = localStorage.getItem('portfolio-theme'); } catch { /* Optional storage. */ }
  let theme = normalise(current.searchParams.get('theme')) || (current.pathname.endsWith('/princess.html') ? 'light' : null) || normalise(saved) || 'dark';
  let lightSheet, toggle;
  const updateSheet = () => {
    if (theme === 'light' && !lightSheet) {
      lightSheet = document.createElement('link');
      lightSheet.rel = 'stylesheet'; lightSheet.href = 'princess.css?v=7574c07e6747'; lightSheet.id = 'light-theme-styles';
      document.head.append(lightSheet);
    }
    if (lightSheet) { lightSheet.disabled = theme !== 'light'; lightSheet.media = theme === 'light' ? 'all' : 'not all'; }
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f7eee9' : '#140c15');
  };
  const updateButton = () => {
    if (!toggle) return;
    const t = key => window.portfolioI18n?.t(key) || key;
    toggle.setAttribute('aria-checked', String(theme === 'light'));
    toggle.setAttribute('aria-label', t('Light theme'));
    toggle.title = t(theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
    toggle.querySelector('.theme-icon').textContent = theme === 'light' ? '☀' : '☾';
    toggle.querySelector('.theme-name').textContent = t(theme === 'light' ? 'Light' : 'Dark');
  };
  const updateLinks = () => {
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      const url = new URL(href, window.location.href);
      if (url.origin !== window.location.origin || !/\.html$/.test(url.pathname)) return;
      url.pathname = url.pathname.replace(/princess\.html$/, 'index.html');
      url.searchParams.set('theme', theme); link.href = url.href;
    });
  };
  function apply(nextTheme) {
    theme = normalise(nextTheme) || 'dark'; updateSheet();
    document.body.classList.toggle('princess-preview', theme === 'light');
    document.body.classList.toggle('theme-light', theme === 'light');
    try { localStorage.setItem('portfolio-theme', theme); } catch { /* Links carry the choice without storage. */ }
    const url = new URL(window.location.href); url.searchParams.set('theme', theme);
    try { history.replaceState(null, '', url); } catch { /* Some file viewers restrict history. */ }
    updateButton(); updateLinks();
    document.dispatchEvent(new CustomEvent('portfolio:theme', { detail: theme }));
  }
  updateSheet();
  window.portfolioTheme = { get current() { return theme; }, set: apply };
  document.addEventListener('DOMContentLoaded', () => {
    toggle = document.createElement('button');
    toggle.type = 'button'; toggle.className = 'theme-toggle'; toggle.dataset.noTranslate = '';
    toggle.setAttribute('role', 'switch');
    const icon = document.createElement('span'); icon.className = 'theme-icon'; icon.setAttribute('aria-hidden', 'true');
    const label = document.createElement('span'); label.className = 'theme-name';
    toggle.append(icon, label); document.querySelector('.nav-actions')?.prepend(toggle);
    toggle.addEventListener('click', () => apply(theme === 'light' ? 'dark' : 'light'));
    apply(theme);
    document.addEventListener('portfolio:language', () => { updateButton(); updateLinks(); });
  });
})();

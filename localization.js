(() => {
  const supported = ['en', 'nl', 'ar'];
  const dictionary = window.portfolioTranslations || {};
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  let language = 'nl';
  const normalise = (value) => value.replace(/\s+/g, ' ').trim();
  const translate = (text) => language === 'en' ? text : dictionary[text]?.[language] || text;

  function applyLanguage(nextLanguage) {
    language = supported.includes(nextLanguage) ? nextLanguage : 'nl';
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement?.closest('script, style, option, [data-no-translate], [aria-live]')
          ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      },
    });
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!originalText.has(node)) originalText.set(node, node.textContent);
      const original = originalText.get(node);
      const key = normalise(original);
      if (!key) continue;
      node.textContent = original.match(/^\s*/)[0] + translate(key) + original.match(/\s*$/)[0];
    }
    document.querySelectorAll('[aria-label], [placeholder], [title], img[alt]').forEach((element) => {
      if (!originalAttributes.has(element)) {
        originalAttributes.set(element, Object.fromEntries(['aria-label', 'placeholder', 'title', 'alt']
          .filter((attribute) => element.hasAttribute(attribute))
          .map((attribute) => [attribute, element.getAttribute(attribute)])));
      }
      Object.entries(originalAttributes.get(element)).forEach(([attribute, original]) => {
        element.setAttribute(attribute, translate(original));
      });
    });
    const selector = document.getElementById('language-select');
    if (selector) selector.value = language;
    try { localStorage.setItem('portfolio-language', language); } catch { /* Selection still works without storage. */ }
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    try { history.replaceState(null, '', url); } catch { /* Some file:// viewers disallow history updates. */ }
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;
      const destination = new URL(href, window.location.href);
      if (destination.origin === window.location.origin && /\.html$/.test(destination.pathname)) {
        destination.searchParams.set('lang', language);
        link.href = destination.href;
      }
    });
    document.dispatchEvent(new CustomEvent('portfolio:language', { detail: language }));
  }

  window.portfolioI18n = {
    t: translate,
    get language() { return language; },
    count(count) {
      const formatted = new Intl.NumberFormat(language).format(count);
      if (language === 'nl') return `${formatted} ${count === 1 ? 'persoonlijk project' : 'persoonlijke projecten'}`;
      if (language === 'ar') return `${formatted} ${count === 1 ? 'مشروع شخصي' : count >= 3 && count <= 10 ? 'مشاريع شخصية' : 'مشروعًا شخصيًا'}`;
      return `${formatted} personal project${count === 1 ? '' : 's'}`;
    },
    setLanguage: applyLanguage,
  };
  document.addEventListener('DOMContentLoaded', () => {
    let saved;
    try { saved = localStorage.getItem('portfolio-language'); } catch { /* Optional storage. */ }
    const requested = new URLSearchParams(window.location.search).get('lang');
    applyLanguage(supported.includes(requested) ? requested : supported.includes(saved) ? saved : 'nl');
    document.getElementById('language-select')?.addEventListener('change', (event) => applyLanguage(event.target.value));
  });
})();

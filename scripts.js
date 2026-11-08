document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('[data-filter]');
  const projectCards = document.querySelectorAll('.project-collection [data-category]');
  const search = document.getElementById('project-search');
  let selectedCategory = 'all';
  const filterAnimations = new WeakMap();
  let filteredOnce = false;
  const filterProjects = () => {
    const before = new Map([...projectCards].filter(card => !card.hidden).map(card => [card, card.getBoundingClientRect()]));
    const query = (search?.value || '').trim().toLocaleLowerCase(document.documentElement.lang);
    let visible = 0;
    projectCards.forEach((card) => {
      const matchesCategory = selectedCategory === 'all' || card.dataset.category === selectedCategory;
      const matchesQuery = !query || card.querySelector('.collection-content').textContent.toLocaleLowerCase(document.documentElement.lang).includes(query);
      card.hidden = !matchesCategory || !matchesQuery;
      if (!card.hidden) visible++;
    });
    const count = document.getElementById('project-count');
    if (count) count.textContent = window.portfolioI18n.count(visible);
    const empty = document.getElementById('no-results');
    if (empty) empty.hidden = visible !== 0;
    if (filteredOnce && !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !document.documentElement.classList.contains('ambient-paused')) {
      projectCards.forEach(card => {
        filterAnimations.get(card)?.cancel();
        if (card.hidden || typeof card.animate !== 'function') return;
        const old = before.get(card);
        const next = card.getBoundingClientRect();
        const x = old ? old.left - next.left : 0;
        const y = old ? old.top - next.top : 14;
        filterAnimations.set(card, card.animate([
          { opacity: old ? 1 : 0, transform: `translate(${x}px, ${y}px)` },
          { opacity: 1, transform: 'translate(0, 0)' },
        ], { duration: 320, easing: 'cubic-bezier(.2,.7,.2,1)' }));
      });
    }
    filteredOnce = true;
  };
  filters.forEach((button) => {
    button.addEventListener('click', () => {
      filters.forEach((filter) => filter.setAttribute('aria-pressed', String(filter === button)));
      selectedCategory = button.dataset.filter;
      filterProjects();
    });
  });
  search?.addEventListener('input', filterProjects);
  document.getElementById('clear-search')?.addEventListener('click', () => {
    search.value = '';
    filterProjects();
    search.focus();
  });
  document.addEventListener('portfolio:language', filterProjects);
  filterProjects();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const workspace = document.querySelector('.workspace-hero');
  const updateWorkspace = () => {
    if (!workspace) return;
    const checks = [...workspace.querySelectorAll('.demo-tasks input')];
    const values = workspace.querySelectorAll('.workspace-summary strong');
    const formatter = new Intl.NumberFormat(window.portfolioI18n.language, { minimumIntegerDigits: 2 });
    values[0].textContent = formatter.format(checks.length);
    values[1].textContent = formatter.format(checks.filter(input => input.checked).length);
  };
  workspace?.addEventListener('change', updateWorkspace);
  document.addEventListener('portfolio:language', updateWorkspace);
  updateWorkspace();
  const tabs = [...document.querySelectorAll('.showcase-tabs [role="tab"]')];
  const selectTab = (tab, moveFocus = false) => {
    tabs.forEach((item) => {
      const active = item === tab;
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
    });
    if (moveFocus) tab.focus();
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (event) => {
      let next;
      const direction = document.documentElement.dir === 'rtl' ? -1 : 1;
      if (event.key === 'ArrowRight') next = (index + direction + tabs.length) % tabs.length;
      if (event.key === 'ArrowLeft') next = (index - direction + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectTab(tabs[next], true);
    });
  });
  document.querySelectorAll('[data-demo="workout"]').forEach((demo) => {
    demo.querySelectorAll('[data-view]').forEach((button) => {
      button.addEventListener('click', () => {
        demo.querySelectorAll('[data-view]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
        demo.querySelectorAll('[data-workout-view]').forEach((view) => { view.hidden = view.dataset.workoutView !== button.dataset.view; });
      });
    });
  });
  const updateBudgets = () => {
    document.querySelectorAll('[data-budget-slider]').forEach((slider) => {
      const demo = slider.closest('.budget-demo');
      demo.querySelector('[data-budget-value]').textContent = new Intl.NumberFormat(window.portfolioI18n.language, {
        style: 'currency', currency: 'EUR', maximumFractionDigits: 0,
      }).format(2400 - Number(slider.value));
      demo.querySelector('[data-budget-bar]').style.width = `${Number(slider.value) / 24}%`;
    });
  };
  document.querySelectorAll('[data-budget-slider]').forEach((slider) => slider.addEventListener('input', updateBudgets));
  document.addEventListener('portfolio:language', updateBudgets);
  updateBudgets();
  const progress = document.querySelector('.reading-progress');
  let progressFrame;
  const updateProgress = () => {
    if (progressFrame) return;
    progressFrame = requestAnimationFrame(() => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (progress) progress.style.transform = `scaleX(${maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0})`;
      progressFrame = null;
    });
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
  if (!reducedMotion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('motion-ready');
    document.querySelectorAll('.collection-card, .detail-body > section').forEach((card) => card.classList.add('reveal'));
  }
  if (!reducedMotion && window.matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.collection-card, .hero-showcase').forEach((card) => {
      card.addEventListener('pointermove', (event) => {
        const bounds = card.getBoundingClientRect();
        card.style.setProperty('--pointer-x', `${event.clientX - bounds.left}px`);
        card.style.setProperty('--pointer-y', `${event.clientY - bounds.top}px`);
      }, { passive: true });
    });
  }
  const currentPage = document.body.dataset.page || 'home';
  const header = document.getElementById('site-header');
  const menuToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const spotlight = document.getElementById('spotlight');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  const closeMenu = () => {
    if (!menuToggle || !mobileNav) return;
    menuToggle.classList.remove('is-open');
    mobileNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', window.portfolioI18n.t('Open navigation menu'));
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  };

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = !mobileNav.classList.contains('is-open');
      mobileNav.classList.toggle('is-open', open);
      menuToggle.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', window.portfolioI18n.t(open ? 'Close navigation menu' : 'Open navigation menu'));
      mobileNav.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('menu-open', open);
    });

    mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
    document.addEventListener('click', (event) => {
      if (!mobileNav.classList.contains('is-open')) return;
      if (!mobileNav.contains(event.target) && !menuToggle.contains(event.target)) closeMenu();
    });
  }

  const setHeaderState = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  window.addEventListener('scroll', setHeaderState, { passive: true });
  setHeaderState();

  const normalisePath = (path) => {
    const clean = path.replace(/\/+$/, '');
    return clean.split('/').pop() || 'index.html';
  };

  document.querySelectorAll('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;

    let url;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return;
    }

    const samePage = url.origin === window.location.origin && normalisePath(url.pathname) === normalisePath(window.location.pathname);
    if (!samePage || !url.hash) return;

    anchor.addEventListener('click', (event) => {
      const target = document.querySelector(url.hash);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', url.hash);
    });
  });

  const navLinks = [...document.querySelectorAll('[data-nav]')];
  const setActiveNav = (key) => {
    navLinks.forEach((link) => {
      const active = link.dataset.nav === key;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
  };

  if (currentPage !== 'home') {
    setActiveNav(currentPage);
  } else {
    const sections = [...document.querySelectorAll('[data-nav-group]')];
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.35;
      let active = 'home';
      sections.forEach((section) => {
        if (marker >= section.offsetTop) active = section.dataset.navGroup;
      });
      setActiveNav(active);
    };
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    revealItems.forEach((item, index) => {
      item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
      observer.observe(item);
    });
  }

  const finePointer = window.matchMedia('(pointer: fine)').matches;
  if (spotlight && finePointer && !reducedMotion) {
    let frame = null;
    document.addEventListener('pointermove', (event) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        spotlight.style.setProperty('--spot-x', `${event.clientX}px`);
        spotlight.style.setProperty('--spot-y', `${event.clientY}px`);
        spotlight.classList.add('is-visible');
        frame = null;
      });
    });
    document.addEventListener('pointerleave', () => spotlight.classList.remove('is-visible'));
  }
});

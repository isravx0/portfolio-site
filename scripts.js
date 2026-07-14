document.addEventListener('DOMContentLoaded', () => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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
    menuToggle.setAttribute('aria-label', 'Open navigation menu');
    mobileNav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  };

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = !mobileNav.classList.contains('is-open');
      mobileNav.classList.toggle('is-open', open);
      menuToggle.classList.toggle('is-open', open);
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
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

    const samePage = normalisePath(url.pathname) === normalisePath(window.location.pathname);
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

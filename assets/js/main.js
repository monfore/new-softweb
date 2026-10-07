(() => {
  const WHATSAPP = '556241011073';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Ícones Lucide
  if (window.lucide) window.lucide.createIcons();

  // Ano no rodapé
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ---------- Header ao rolar + botão flutuante ----------
  const header = document.getElementById('header');
  const waFloat = document.getElementById('wa-float');
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 24);
    waFloat.classList.toggle('is-visible', y > 500);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---------- Menu mobile ----------
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  const setMenu = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
    header.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));

  // ---------- Dropdown Produtos ----------
  const dropItem = document.querySelector('.nav__item--drop');
  const dropBtn = dropItem.querySelector('.nav__drop-btn');
  const setDrop = (open) => {
    dropItem.classList.toggle('is-open', open);
    dropBtn.setAttribute('aria-expanded', String(open));
  };
  dropBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setDrop(!dropItem.classList.contains('is-open'));
  });
  const desktop = window.matchMedia('(min-width: 1025px)');
  dropItem.addEventListener('mouseenter', () => desktop.matches && setDrop(true));
  dropItem.addEventListener('mouseleave', () => desktop.matches && setDrop(false));
  document.addEventListener('click', (e) => { if (!dropItem.contains(e.target)) setDrop(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    setDrop(false);
    if (nav.classList.contains('is-open')) { setMenu(false); burger.focus(); }
  });

  // Fecha o menu ao navegar
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => { setMenu(false); setDrop(false); }));

  // ---------- Abas de produtos ----------
  const tabs = [...document.querySelectorAll('.tab')];
  const indicator = document.querySelector('.tabs__indicator');
  const moveIndicator = (tab) => {
    indicator.style.width = `${tab.offsetWidth}px`;
    indicator.style.transform = `translateX(${tab.offsetLeft}px)`;
  };
  const selectTab = (tab, focus = false) => {
    tabs.forEach((t) => {
      const active = t === tab;
      t.setAttribute('aria-selected', String(active));
      t.tabIndex = active ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !active;
    });
    moveIndicator(tab);
    if (focus) tab.focus();
    if (window.lucide) window.lucide.createIcons();
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', (e) => {
      let next = null;
      if (e.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      if (e.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (e.key === 'Home') next = tabs[0];
      if (e.key === 'End') next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); selectTab(next, true); }
    });
  });
  const activeTab = () => tabs.find((t) => t.getAttribute('aria-selected') === 'true');
  window.addEventListener('resize', () => moveIndicator(activeTab()));
  document.fonts?.ready.then(() => moveIndicator(activeTab()));
  moveIndicator(activeTab());

  // Links do menu/rodapé que abrem uma aba específica
  document.querySelectorAll('a[data-tab]').forEach((link) => {
    link.addEventListener('click', () => {
      const tab = tabs.find((t) => t.dataset.tab === link.dataset.tab);
      if (tab) selectTab(tab);
    });
  });

  // ---------- Reveal ao rolar ----------
  const reveals = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
        el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 80}ms`;
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach((el) => io.observe(el));
  }

  // ---------- Contadores ----------
  const counters = document.querySelectorAll('[data-count]');
  const runCounter = (el) => {
    const target = Number(el.dataset.count);
    if (reduceMotion || target === 0) { el.textContent = target; return; }
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if ('IntersectionObserver' in window) {
    const co = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { runCounter(e.target); co.unobserve(e.target); } });
    }, { threshold: 0.6 });
    counters.forEach((c) => co.observe(c));
  } else {
    counters.forEach(runCounter);
  }

  // ---------- Formulário → WhatsApp ----------
  const form = document.getElementById('form');
  const hint = document.getElementById('form-hint');
  const tel = form.querySelector('#f-tel');

  tel.addEventListener('input', () => {
    const d = tel.value.replace(/\D/g, '').slice(0, 11);
    let out = d;
    if (d.length > 2) out = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length > 7) out = `(${d.slice(0, 2)}) ${d.slice(2, d.length - 4)}-${d.slice(-4)}`;
    tel.value = out;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fields = [...form.querySelectorAll('input[required]')];
    let firstInvalid = null;
    fields.forEach((f) => {
      const ok = f.id === 'f-tel' ? f.value.replace(/\D/g, '').length >= 10 : f.value.trim().length > 1;
      f.setAttribute('aria-invalid', String(!ok));
      if (!ok && !firstInvalid) firstInvalid = f;
    });
    if (firstInvalid) {
      hint.textContent = 'Preencha nome, transportadora e um WhatsApp válido.';
      hint.classList.add('is-error');
      firstInvalid.focus();
      return;
    }
    hint.textContent = 'Abrindo o WhatsApp…';
    hint.classList.remove('is-error');

    const data = new FormData(form);
    const interesses = data.getAll('interesse');
    const msg = [
      'Olá! Quero agendar uma demonstração da Softweb.',
      `*Nome:* ${data.get('nome').trim()}`,
      `*Transportadora:* ${data.get('empresa').trim()}`,
      `*WhatsApp:* ${data.get('telefone').trim()}`,
      interesses.length ? `*Interesse:* ${interesses.join(', ')}` : '',
    ].filter(Boolean).join('\n');

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });

  form.querySelectorAll('input[required]').forEach((f) =>
    f.addEventListener('input', () => f.removeAttribute('aria-invalid'))
  );
})();

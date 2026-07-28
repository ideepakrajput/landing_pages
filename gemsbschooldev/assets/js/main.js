(() => {
  const header = document.querySelector('[data-header]');
  const nav = document.querySelector('[data-nav]');
  const navToggle = document.querySelector('[data-nav-toggle]');

  const closeNav = () => {
    nav?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('nav-open');
  };

  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('is-open', !open);
    document.body.classList.toggle('nav-open', !open);
  });

  nav?.addEventListener('click', event => {
    if (event.target.closest('a')) closeNav();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeNav();
  });

  let ticking = false;
  const updateHeader = () => {
    header?.classList.toggle('is-stuck', window.scrollY > 24);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });

  const filters = document.querySelectorAll('[data-filter]');
  const programmeCards = document.querySelectorAll('[data-category]');

  filters.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;

      filters.forEach(item => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });

      programmeCards.forEach(card => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  const stories = [...document.querySelectorAll('.story')];
  const previousStory = document.querySelector('[data-story-prev]');
  const nextStory = document.querySelector('[data-story-next]');
  let storyIndex = 0;

  const showStory = index => {
    storyIndex = (index + stories.length) % stories.length;
    stories.forEach((story, currentIndex) => {
      const active = currentIndex === storyIndex;
      story.hidden = !active;
      story.classList.toggle('is-active', active);
    });
  };

  previousStory?.addEventListener('click', () => showStory(storyIndex - 1));
  nextStory?.addEventListener('click', () => showStory(storyIndex + 1));

  const rotatingWord = document.querySelector('[data-rotating-word]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (rotatingWord && !reducedMotion) {
    const roles = ['a Leader.', 'an Innovator.', 'an Entrepreneur.', 'a Changemaker.'];
    let roleIndex = 0;

    window.setInterval(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      rotatingWord.textContent = roles[roleIndex];
    }, 2800);
  }
})();

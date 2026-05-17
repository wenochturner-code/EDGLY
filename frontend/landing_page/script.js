setTimeout(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.section-intro, .insight-card, .hiw-step').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });

  document.querySelectorAll('.why-stat').forEach(el => {
    observer.observe(el);
  });

  document.querySelectorAll('.hiw-step').forEach((el, i) => {
    el.style.transitionDelay = `${i * 80}ms`;
  });
}, 1000);

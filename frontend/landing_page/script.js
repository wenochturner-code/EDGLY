setTimeout(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.05 });

  document.querySelectorAll('.section-intro, .insight-card').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
}, 1000);
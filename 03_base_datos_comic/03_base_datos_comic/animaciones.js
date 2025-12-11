
// Solución: animar TODO al cargar la página + scroll
document.addEventListener("DOMContentLoaded", () => {
  // 1. Animar lo que ya está visible al inicio (home)
  document.querySelectorAll('#header, .sinopsis, h1, .logo, nav').forEach(el => {
    el.classList.add('show');
  });

  // 2. Animar cards y capítulos solo cuando entren en pantalla
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .capitulo').forEach(el => {
    observer.observe(el);
  });
});

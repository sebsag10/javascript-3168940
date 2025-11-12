const mas_infoBtn = document.querySelector('.mas_informacion');
const comenzar_comicBtn = document.querySelector('.comenzar_comic');
const overlay = document.querySelector('.overlay');
const cerrarBtn = document.querySelector('.cerrar');


mas_infoBtn.addEventListener('click', () => {
  console.log('Click en mas_infoBtn'); // confirmar que se dispara el click
  overlay.classList.add('activo'); // activa la visibilidad y la interacción
});

cerrarBtn.addEventListener('click', () => {
  console.log('Click en cerrarBtn'); // confirmar que se dispara el click
  overlay.classList.remove('activo'); // desactiva la visibilidad y la interacción
});
overlay.addEventListener('click', (e) => {
  // Si el clic es directamente en el overlay (no en el contenido interno)
  if (e.target === overlay) {
    overlay.classList.remove('activo');
  }
});
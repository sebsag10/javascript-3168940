const cofre = document.getElementById("cofre");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar_modal");

cofre.addEventListener("click", () => {
  modal.classList.add("active"); // abre el modal
});

cerrar.addEventListener("click", () => {
  modal.classList.remove("active"); // cierra el modal
});
const velocidad = 0.1;
const nubes = document.querySelectorAll(".nube");
nubes.forEach((nube) => {
  // Tomamos la posición inicial que ya tenga la nube
  let posX = parseFloat(getComputedStyle(nube).left);
  // velocidad lineal constante

  function mover() {
    posX += velocidad; // avanza la nube
    if (posX > 750) {
      // si llega al borde derecho del escenario
      posX = -nube.width; // reaparece desde la izquierda
    }
    nube.style.left = posX + "px";
    requestAnimationFrame(mover); // animación suave
  }

  mover(); // inicia la animación
});

// const caracol = document.getElementById("caracol");
// let pos_caracol = paserfloat(getComputedStyle(caracol).bottom);

// function trepar_arbol(){
//   pos_caracol+=velocidad;
//   if(pos_caracol)
// }
const rect = caracol.getBoundingClientRect();
console.log(rect.top, rect.bottom);

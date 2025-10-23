const cofre = document.getElementById("cofre");
const modal = document.getElementById("modal");
const cerrar = document.getElementById("cerrar_modal");

cofre.addEventListener("click", () => {
  modal.classList.add("active"); // abre el modal
});

cerrar.addEventListener("click", () => {
  modal.classList.remove("active"); // cierra el modal
});
const velocidad = 0.2;
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

const caracol = document.querySelector(".caracol");

caracol.addEventListener("click", () => {
  caracol.classList.add("subir"); // activa la animación
  // desaparece el círculo
});

const conejo = document.getElementById("conejo");

conejo.addEventListener("click", () => {
  conejo.classList.toggle("saltar");
});

const planta_1 = document.querySelector(".planta_1"); // planta abierta
const planta_2 = document.querySelector(".planta_2"); // planta cerrada

planta_2.addEventListener("click", togglePlantas);
planta_1.addEventListener("click", togglePlantas);

function togglePlantas() {
  if (planta_2.style.display !== "none") {
    // Si la planta 2 está visible
    planta_2.style.display = "none"; // la ocultamos
    planta_1.style.display = "block"; // mostramos la planta 1
  } else {
    // Si la planta 2 está oculta
    planta_2.style.display = "block"; // la mostramos
    planta_1.style.display = "none"; // ocultamos la planta 1
  }
}

const sol = document.querySelector(".sol");
const luna = document.querySelector(".luna");
const fondo = document.querySelector(".escenario");
const titulo_contador = document.querySelector(".moneda_titulo_contador");

sol.addEventListener("click", () => {
  sol.classList.add("ocultar_sol");
  luna.classList.add("aparecer_luna");
  fondo.classList.add("modo_noche");
  titulo_contador.style.color = "white";
  titulo_contador.style.filter = "drop-shadow(1px 1px 20px white)";
});




conejo.addEventListener("click", () => {
    conejo.style.filter="grayscale(1)"
});

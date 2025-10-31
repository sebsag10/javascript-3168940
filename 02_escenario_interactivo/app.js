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
  conejo.style.filter = "grayscale(1)";
});
const score_platino = document.querySelector(".score_platino");
const score_oro = document.querySelector(".score_oro");
const score_bronce = document.querySelector(".score_bronce");
const platino = document.querySelector(".platino");
const oro = document.querySelector(".oro");
const bronce = document.querySelector(".bronce");
let counter_1 = 0;
let counter_2 = 0;
let counter_3 = 0;

// Cuando se hace click en la moneda
bronce.addEventListener("click", () => {
  bronce.classList.add("coger_moneda");
  counter_1++;
  score_bronce.textContent = counter_1;
});
platino.addEventListener("click", () => {
  platino.classList.add("coger_moneda");
  counter_2++;
  score_platino.textContent = counter_2;
});
oro.addEventListener("click", () => {
  oro.classList.add("coger_moneda");
  counter_3++;
  score_oro.textContent = counter_3;
});
/* <!-- _________________________________________________________FONDO_2____________________________________________ --> */

const mario_chiquito = document.querySelector(".mario_chiquito");
const bloque_1 = document.querySelector(".bloque_1");
const hongo = document.querySelector(".hongo");
const mario_grande = document.querySelector(".mario_grande");

mario_chiquito.addEventListener("click", () => {
  mario_chiquito.classList.add("mario_saltar");
  bloque_1.classList.add("bloque_glopeado");
  hongo.classList.add("salir_hongo");
  mario_grande.classList.add("mario_crecer");
});

const bloque_2 = document.querySelector(".bloque_2");
const hongo_vida = document.querySelector(".hongo_vida");
const numero_contador_2 = document.querySelector(".numero_contador_2");

let contador_2 = 1;

bloque_2.addEventListener("click", () => {
  hongo_vida.classList.add("hongo_vida_aparecer");
  bloque_2.classList.add("bloque_golpeado_2");
  contador_2++; 
  numero_contador_2.textContent = contador_2;
})

function salir_hongo_vida() {
  hongo_vida.classList.remove("hongo_vida_aparecer");
}

// Cuando termina la animación del bloque, no eliminamos el hongo de inmediato
bloque_2.addEventListener("animationend", () => {
  bloque_2.classList.remove("bloque_golpeado_2");

  // Dejamos que el hongo dure sus 5 segundos
  setTimeout(() => {
    salir_hongo_vida();
  }, 6000); // 5000 ms = 5 segundos
});

/* <!-- _________________________________________________________carrusel____________________________________________ --> */ 


// Seleccionar todos los elementos principales
const escenarios = document.querySelectorAll('.escenario');
const miniaturas = document.querySelectorAll('.min');
const btnAtras = document.getElementById('atras');
const btnSiguiente = document.getElementById('siguiente');

let indice = 0;

// Función para mostrar el escenario y activar la miniatura correspondiente
function mostrarEscenario(i) {
  // Quitar clase activo a todos los escenarios y miniaturas
  escenarios.forEach(e => e.classList.remove('activo'));
  miniaturas.forEach(m => m.classList.remove('activo'));

  // Agregar clase activo al actual
  escenarios[i].classList.add('activo');
  miniaturas[i].classList.add('activo');

  indice = i;
}

// Mostrar el primero al iniciar
mostrarEscenario(0);

// Botón siguiente
btnSiguiente.addEventListener('click', () => {
  indice++;
  if (indice >= escenarios.length) {
    indice = 0;
  }
  mostrarEscenario(indice);
});

// Botón atrás
btnAtras.addEventListener('click', () => {
  indice--;
  if (indice < 0) {
    indice = escenarios.length - 1;
  }
  mostrarEscenario(indice);
});

// Clic en las miniaturas
miniaturas.forEach((min, i) => {
  min.addEventListener('click', () => {
    mostrarEscenario(i);
  });
});


/* <!-- _________________________________________________________carrusel____________________________________________ --> */ 
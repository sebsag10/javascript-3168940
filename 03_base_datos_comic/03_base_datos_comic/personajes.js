// Configuración ESmodules 2611

import { comic } from "./bs.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// comparar el id con los personajes del comic
const personaje = comic.personajes.find((char) => char.id === id);
console.log("el id el personaje es " + id);

const personajes_container = document.querySelector(".personajes_container");

// Renderizar la card con las clases correctas
personajes_container.innerHTML = `
  <div class="card">
    <img src="${personaje.imagen}" alt="${personaje.nombre}" class="card-img">

    <h2 class="card-title">${personaje.nombre}</h2>

    <p class="card-desc">${personaje.descripcion}</p>

    <p class="card-subtext">${personaje.subtexto}</p>
  </div>
`;

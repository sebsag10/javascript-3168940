// Configuración ESmodules 2611

import { comic } from "./bs.js";

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

// Comparar el id con los capítulos del comic
const capitulo = comic.capitulos.find((cap) => cap.id === id);
console.log("El id del capítulo es " + id);

const capitulos_container = document.querySelector(".capitulos_container");

// Renderizar la card con las clases correctas
capitulos_container.innerHTML = `
  <div class="card">
    <img src="${capitulo.portada}" alt="${capitulo.nombre}" class="card-img">

    <h2 class="card-title">${capitulo.nombre}</h2>

    <p class="card-desc">${capitulo.descripcion}</p>

    <p class="card-subtext">${capitulo.subtexto}</p>
  </div>
`;
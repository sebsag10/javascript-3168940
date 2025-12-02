// Configuración ESmodules 2611

import { comic } from "./bs.js";

const info_comic = document.querySelector("#inicio");

info_comic.innerHTML = `
    <div class="sinopsis">
        <h1>${comic.nombreComic}</h1>
        <p>${comic.sinopsis}</p>
        <p class="genero">${comic.genero}</p>
        <small>${comic.year}</small>
    </div>
`;

const grupo_personajes = document.querySelector(".grupo_personajes");
const capitulos = document.querySelector(".capitulos");

function crear_card_personaje(char) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
  <a href="./personajes.html?id=${char.id}">
  <h3>${char.nombre}</h3>
  <div class="container_img"> <img src="${char.imagen}" alt="${char.nombre}" class="img_personajes"> </div>
  <p class="parrafo_cards">${char.descripcion}</p>
  <p class="subtext">${char.subtexto}</p></a>`;

  return card;
}

function renderpersonajes(lista, contenedor) {
  lista.forEach((char) => {
    const card = crear_card_personaje(char);
    contenedor.appendChild(card);
  });
}

renderpersonajes(comic.personajes, grupo_personajes);

function crear_cpitulos(char) {
  const cap = document.createElement("div");
  cap.classList.add("capitulo");
  cap.innerHTML = `
    <a href="./capitulos.html?id=${char.id}">
  <h2>${char.nombre}</h2>
  <img src="${char.portada}" alt="${char.portada}" class="img_caps"></img>
  <p class="resumen">${char.descripcion}</p></a>`;

  return cap;
}

function render_caps(lista, contendor) {
  lista.forEach((char) => {
    const cap = crear_cpitulos(char);
    contendor.appendChild(cap);
  });
}

render_caps(comic.capitulos, capitulos);

const img = document.getElementById("platano_maduro");
const btn_desenfocar = document.getElementById("desenfocar");
const btn_blanco_y_negro = document.getElementById("blanco_y_negro");
const btn_zoom_y_rotar = document.getElementById("zoom_y_rotar");

// 🎯 Efecto 1: Desenfocar
btn_desenfocar.addEventListener("click", () => {
  if (img.style.filter === "blur(4px)") {
    img.style.filter = "none"; // Quita el desenfoque
  } else {
    img.style.filter = "blur(4px)"; // Aplica el desenfoque
  }
});

// 🎯 Efecto 2: Blanco y negro
btn_blanco_y_negro.addEventListener("click", () => {
  if(img.style.filter==="none"){
    img.style.filter="grayscale(50%)"
  }else {
    img.style.filter="none"
  }
});

// 🎯 Efecto 3: Zoom y rotar
btn_zoom_y_rotar.addEventListener("click", () => {
  if (img.style.transform === "scale(1.2) rotate(15deg)") {
    img.style.transform = "none"; // Vuelve al estado original
  } else {
    img.style.transform = "scale(1.2) rotate(15deg)"; // Aplica el efecto
  }
  img.style.transition = "transform 0.5s ease"; // Suaviza el cambio
});

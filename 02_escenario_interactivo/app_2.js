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
  score_oro
  .textContent = counter_3;
});

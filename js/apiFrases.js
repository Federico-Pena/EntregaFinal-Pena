const btnFrases = document.querySelector(".btnFrases");
const btnCerrarFrase = document.querySelector(".btnCerrarFrase");
const btnVerOtraFrase = document.querySelector(".btnVerOtraFrase");
const productos = document.querySelector("#divProductos");
const buscar = document.querySelector(".buscar");
const header = document.querySelector(".header");

/**
 * De forma local solo porque esta en español
 */
const url = "/frases.json";

btnFrases.addEventListener("click", () => {
  obtenerDatos(url);
  const chistesContainer = document.querySelector(".chistesContainer");
  chistesContainer.classList.add("animate__flipInY");
  header.classList.add("hidden");
  productos.classList.add("hidden");
  buscar.classList.add("hidden");
  setTimeout(() => {
    chistesContainer.classList.remove("animate__flipInY");
  }, 1500);
  chistesContainer.style.display = "flex";
});

btnCerrarFrase.addEventListener("click", () => {
  const chistesContainer = document.querySelector(".chistesContainer");
  buscar.classList.remove("hidden");
  header.classList.remove("hidden");
  productos.classList.remove("hidden");
  chistesContainer.classList.add("animate__flipOutY");
  setTimeout(() => {
    chistesContainer.classList.remove("animate__flipOutY");
    chistesContainer.style.display = "none";
  }, 1000);
});

btnVerOtraFrase.addEventListener("click", () => {
  obtenerDatos(url);
  document.querySelector(".autor").classList.add("animate__flipInY");
  document.querySelector(".frase").classList.add("animate__flipInX");

  setTimeout(() => {
    document.querySelector(".autor").classList.remove("animate__flipInY");
    document.querySelector(".frase").classList.remove("animate__flipInX");
  }, 600);
});


async function obtenerDatos(url) {
  const response = await fetch(url)
  .then((res) => res.json())
  .then((data) => {  
  const autor = document.querySelector(".autor");
  const frase = document.querySelector(".frase");
  const arrayFrases = data.arrayFrases;
  let randomNum = Math.round(Math.random() * 20);
  autor.innerHTML = arrayFrases[randomNum].autor;
  frase.innerHTML = arrayFrases[randomNum].frase;
}
  )
 
}

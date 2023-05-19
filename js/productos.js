
import {
  mostrarProdCarrito,
  calcularCantidad,
  eliminarDelCarrito,
  agregarAlCarrito,
  vaciarCarrito,
  comprar,
  calcularTotal,
} from "./carrito.js";
import { buscarProd } from "./buscar.js";
import { login, registro, mantenerSesion } from "./login.js";


const inputBuscar = document.getElementById("buscar");
inputBuscar.addEventListener("input", (e) => buscarProd(e));

/**
 * @param {key}
 * El nombre de la base de productos fijos del local storage
 */
const BD = JSON.parse(localStorage.getItem("Productos"));
const divProductos = document.getElementById("divProductos");
if (BD) {
  BD.forEach((e) => {
    let cardProducto = document.createElement("div");
    cardProducto.classList.add("cardProducto");
    cardProducto.innerHTML = `
                <img src="${
                  e.foto || "../assets/productos/productoSinImagen.png"
                }" alt="${e.nombre}">
                <p>${e.nombre}</p>
                <small>${e.caracteristicas}</small>
                <small>${e.dimensiones} cm</small>
                <strong>$ ${e.precio}</strong>        
                <button class="btnAgregar">Agregar al Carrito</button>
`;
    divProductos.appendChild(cardProducto);
  });
}


/**
 * Listener del boton de registro
 */
const iraReg = document.querySelector(".iraReg");
iraReg.addEventListener("click", registro);

/**
 * Listener del boton de iniciar sesion
 */
const btnLogin = document.getElementById("login");
btnLogin.addEventListener("click", login);

/**
 * Listener para aparecer o desaparecer el boton de eliminar cuenta.
 * Apretando en el nombre de usuario
 */
const userName = document.querySelector(".nameUserNav");
userName.addEventListener("click", (e) => {
  const eliminarCuenta = document.querySelector(".eliminarCuenta");
  if (eliminarCuenta.classList.contains("hidden")) {
    eliminarCuenta.classList.remove("hidden");
    eliminarCuenta.classList.add("animate__tada");
    setTimeout(() => {
      eliminarCuenta.classList.remove("animate__tada");
    }, 800);
  } else {
    eliminarCuenta.classList.add("animate__bounceOut");
    setTimeout(() => {
      eliminarCuenta.classList.remove("animate__bounceOut");
      eliminarCuenta.classList.add("hidden");
    }, 800);
  }
});

const eliminarCuenta = document.querySelector(".eliminarCuenta");
eliminarCuenta.addEventListener("click", (e) => {
  let userNameContent = e.target.parentElement.children[3].textContent;
  const dbUsers = JSON.parse(localStorage.getItem("usuarios"));
  dbUsers.forEach((user, index) => {
    if (user.user == userNameContent) {
      Swal.fire({
        title: "Esta por eliminar su cuenta!",
        text: "Esta seguro que desea elimiinar su cuenta?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar",
        background: `rgba(0,0,0,.9)`,
        color: "rgba(255,255,255,.9)",
      }).then((res) => {
        if (res.isConfirmed === true) {
          dbUsers.splice(index, 1);
          mostrarProdCarrito();
          calcularTotal();
          calcularCantidad();
          carritoLength();
          localStorage.setItem("usuarios", JSON.stringify(dbUsers));
          let carritoVacio = [];
          localStorage.removeItem("userActive");
          localStorage.setItem("carrito", JSON.stringify(carritoVacio));
          const logOut = document.querySelector(".logout");
          logOut.classList.add("animate__bounceOut");
          const eliminarCuenta = document.querySelector(".eliminarCuenta");
          eliminarCuenta.classList.add("animate__bounceOut");
          const userName = e.target.parentElement.children[3];
          userName.classList.add("animate__bounceOut");

          setTimeout(() => {
            document.querySelector(".iraReg ").classList.remove("hidden");
            document.querySelector("#login ").classList.remove("hidden");
            logOut.classList.remove("animate__bounceOut");
            logOut.classList.add("hidden");
            userName.classList.remove("animate__bounceOut");
            userName.classList.add("hidden");
            eliminarCuenta.classList.remove("animate__bounceOut");
            eliminarCuenta.classList.add("hidden");
            }, 1000);
        }
      });
    }
  });
});

const carrito = document.querySelector(".carrito");
/**
 * Funcion para mostrar la cantidad de productos en el carrito
 * con un numero animado
 */
const numCarrito = document.querySelector(".carritoLength");
export function carritoLength() {
  let db = JSON.parse(localStorage.getItem("carrito"));
  if (db) {
    numCarrito.textContent = db.length;
    numCarrito.classList.add("animate__bounce");
    setTimeout(() => {
      numCarrito.classList.remove("animate__bounce");
    }, 600);
  } else {
    numCarrito.textContent = 0;
  }
}

/**
 * Listener para cerrar y animar el cierre del carrito
 */
const cerrarCarrito = document.getElementById("cerrarCarrito");
cerrarCarrito.addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.classList.remove("hidden");
  carrito.classList.add("animate__backOutRight");
  carritoLength();
  setTimeout(() => {
    carrito.classList.add("hidden");
  }, 500);
});

/**
 * Listener para abrir y animar el carrito
 */
const abrirCarrito = document.getElementById("btnCarrito");
abrirCarrito.addEventListener("click", () => {
  document.querySelector(".nombreCarrito").textContent =
    localStorage.getItem("userActive");
  mostrarProdCarrito();
  calcularCantidad();
  calcularTotal();
  const container = document.querySelector(".container");
  carrito.classList.remove("hidden");
  carrito.classList.remove("animate__backOutRight");
  setTimeout(() => {
    container.classList.add("hidden");
  }, 1000);
});

/**
 * Listener para eliminar un producto del carrito
 * con un boton del producto mismo
 */
const divCarrito = document.querySelector(".divCarrito");
divCarrito.addEventListener("click", (e) => eliminarDelCarrito(e));

/**
 * Listener para agregar productos a la base del carrito del localStorage
 * Y las funciones para mostrar los cambios en pantalla
 */
const cardProducto = document.querySelectorAll(".cardProducto");
if (cardProducto) {
  let productos = [];
  cardProducto.forEach((card) => {
    card.addEventListener("click", (e) => {
      if (e.target.className == "btnAgregar") {
        const db = JSON.parse(localStorage.getItem("carrito"));
        if (db) {
          if (
            JSON.stringify(db).indexOf(agregarAlCarrito(e).nombre) > 0 &&
            JSON.stringify(db).indexOf(agregarAlCarrito(e).foto) > 0
          ) {
            Swal.fire({
              title: "Producto en el carrito",
              icon: "info",
              confirmButtonText: "Aceptar",
              background: `rgba(0,0,0,.9)`,
              color: "rgba(255,255,255,.9)",
            });
          } else {
            db.push(agregarAlCarrito(e));
            localStorage.setItem("carrito", JSON.stringify(db));
            carritoLength();
          }
        } else {
          productos.push(agregarAlCarrito(e));
          localStorage.setItem("carrito", JSON.stringify(productos));
          carritoLength();
        }
      }
    });
  });
}


/**
 * Listener para vaciar el carrito completo
 */
const btnVaciarCarrito = document.querySelector(".vaciarCarrito");
btnVaciarCarrito.addEventListener("click", () => {
  const db = JSON.parse(localStorage.getItem("carrito"));
  if (db && db.length > 0) {
    vaciarCarrito();
  }
});

comprar();
carritoLength();
mantenerSesion();

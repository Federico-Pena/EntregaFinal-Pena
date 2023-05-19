
import { ProductoCarrito } from "./clases/Producto.js";
/**
 * Funcion para obtener productos, si los hay, y pintarlos en el carrito
 */
export function mostrarProdCarrito() {
  const db = JSON.parse(localStorage.getItem("carrito"));
  const divCarrito = document.querySelector(".divCarrito");
  if (db == null || db.length == 0) {
    divCarrito.innerHTML = `
      <img class="carritoimg" src="../assets/carritoVacio.png" alt="carrito Vacio">          
  `;
  } else {
    const divCarrito = document.querySelector(".divCarrito");
    divCarrito.innerHTML = "";
    db.forEach((prod) => {
      const producto = document.createElement("div");
      producto.classList.add("prodCarrito");
      producto.classList.add("animate__animated");
      producto.innerHTML = `
                    <p class="hidden">${prod.id}</p>
                    <img src=${prod.foto} alt=${prod.nombre}>
                    <p>${prod.nombre}</p>
                    <strong>$ ${prod.precio}</strong>  
                    <span class="restar">-</span>
                    <strong class="cantidad">1</strong>
                    <span class="sumar">+</span>
                    <button name="btnBorrarCarrito"></button>                          
        `;
      divCarrito.appendChild(producto);
    });
  }
}

/**
 * Funcion que calcula el total a base del textContent de los productos listados
 */
export function calcularTotal() {
  let total = 0;
  const prodCarrito = document.querySelectorAll(".prodCarrito");
  prodCarrito.forEach((prod) => {
    let precios = parseFloat(prod.children[3].textContent.split(" ")[1]);
    let cantidades = parseInt(prod.children[5].textContent);
    let totalXprod = precios * cantidades;
    total += totalXprod;
  });
  const divtotal = document.querySelector(".total");
  divtotal.innerHTML = `Total de su compra: $ ${total.toFixed(2)}`;
}

/**
 * Funcion para variar la cantidad. Si es igual a uno el menos se "desactiva"
 */
export function calcularCantidad() {
  const prodCarrito = document.querySelectorAll(".prodCarrito");
  prodCarrito.forEach((prod) => {
    prod.addEventListener("click", (e) => {
      if (e.target.className === "restar") {
        if (prod.children[5].textContent < 2) {
          prod.children[5].textContent = 1;
          calcularTotal();
        } else {
          prod.children[5].textContent--;
          calcularTotal();
        }
      }
      if (e.target.className === "sumar") {
        prod.children[5].textContent++;
        calcularTotal();
      }
    });
  });
}

/**
 * Funcion para eliminar productos al carrito en base a su id que esta en la card pero hidden
 * El parametro es el evento de click
 */
export function eliminarDelCarrito(e) {
  if (e.target.name == "btnBorrarCarrito") {
    let idProd = e.target.parentElement.children[0].textContent;
    let db = JSON.parse(localStorage.getItem("carrito"));
    db.forEach((prod, index) => {
      if (prod.id == idProd) {
        Swal.fire({
          title: "Esta por eliminar un producto!",
          text: "Desea elimiinar el producto del carrito",
          showCancelButton: true,
          confirmButtonText: "Aceptar",
          cancelButtonText: "Cancelar",
          background: `rgba(0,0,0,.9)`,
          color: "rgba(255,255,255,.9)",
        }).then((res) => {
          if (res.isConfirmed === true) {
            e.target.parentElement.classList.add("animate__flipOutY");
            db.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(db));
            setTimeout(() => {
              mostrarProdCarrito();
              calcularTotal();
              calcularCantidad();
            }, 1000);
          }
        });
      }
    });
  }
}

/**
 * Funcion que calcula el total del carrito y muestra ese total en una alerta
 * Ademas añade el num de tarjeta de en los datos del usuario
 */
export function comprar() {
  const btnComprar = document.querySelector(".comprar");
  btnComprar.addEventListener("click", (e) => {  
    let userActive =localStorage.getItem("userActive")
    if (userActive) {
    let total = 0;
    const prodsCarrito = document.querySelectorAll(".prodCarrito");
    prodsCarrito.forEach((e) => {
      if (prodsCarrito) {
        let precio = parseFloat(e.children[3].innerText.split(" ")[1]);
        let cantidad = parseInt(e.children[5].innerText);
        let porProducto = precio * cantidad;
        total += porProducto;
      }
      let dbUsers = JSON.parse(localStorage.getItem("usuarios"))
      if (dbUsers) {
        dbUsers.forEach((user) => {
          if (user.user === localStorage.getItem("userActive")) {
            if (user.tarjeta === "") {
              Swal.fire({    
                title: "Ingrese el numero de su tarjeta",
                html: `<p>16 Digitos</p>
                <input type="number" id="num1" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
                <input type="number" id="num2" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
                <input type="number" id="num3" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
                <input type="number" id="num4" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;">`,
                confirmButtonText: "Aceptar",
                footer: "Compras sin recargos",
                focusConfirm: true,
                background: `rgba(0,0,0,.9)`,
                color: "rgba(255,255,255,.9)",
                
                preConfirm: () => {              
                  const cardNum1 = Swal.getPopup().querySelector("#num1").value;
                  const cardNum2 = Swal.getPopup().querySelector("#num2").value;
                  const cardNum3 = Swal.getPopup().querySelector("#num3").value;
                  const cardNum4 = Swal.getPopup().querySelector("#num4").value;
                  if (!cardNum1 || cardNum1.length !=4 || !cardNum2 || cardNum2.length !=4 || !cardNum3 || cardNum3.length !=4 || !cardNum4 || cardNum4.length !=4) {
                    Swal.showValidationMessage(`Cada numero debe ser de 4 Digitos`);
                  }
                  user.tarjeta = `${cardNum1}-${cardNum2}-${cardNum3}-${cardNum4}`
                  return { cardNum1: cardNum1,cardNum2: cardNum2,cardNum3: cardNum3,cardNum4: cardNum4 };
                },
              }).then((result) => {
                if (result.isConfirmed == true) {  
                  localStorage.setItem("usuarios", JSON.stringify(dbUsers))
                   Swal.fire({
                     title: `Total de su compra $ ${total.toFixed(2)}`,
                     text: `Tarjeta N°: ****-****-****-${result.value.cardNum4}`,
                     icon: "question",
                     showCancelButton: true,
                     confirmButtonText: "Aceptar",
                     cancelButtonText: "Cancelar",
                     background: `rgba(0,0,0,.9)`,
                     color: "rgba(255,255,255,.9)",
                   }).then((result) => {
                    if (result.isConfirmed == true) {
                      Swal.fire({
                        title: "Gracias por su compra!",
                        icon: "success",
                        showCancelButton: true,
                        confirmButtonText: "Aceptar",
                        background: `rgba(0,0,0,.9)`,
                        color: "rgba(255,255,255,.9)",
                      });
                      const carritoVacio = [];
                      const divCarrito = document.querySelector(".divCarrito");
                      divCarrito.classList.add("animate__flipOutY");
                      localStorage.setItem("carrito", JSON.stringify(carritoVacio));
                      setTimeout(() => {
                        mostrarProdCarrito();
                        calcularTotal();
                        divCarrito.classList.remove("animate__flipOutY");
                      }, 1000)
                    }
                  })
                  }
              })
          
            }else{
              let finTarjeta = user.tarjeta.split("-", 4)
              Swal.fire({
                title: `Total de su compra $ ${total.toFixed(2)}`,
                text: `Tarjeta N°: ****-****-****-${finTarjeta[3]}`,
                icon: "question",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
                background: `rgba(0,0,0,.9)`,
                color: "rgba(255,255,255,.9)",
              }).then((res) => {
                if (res.isConfirmed == true) {
                  Swal.fire({
                    title: "Gracias por su compra!",
                    icon: "success",
                    showCancelButton: true,
                    confirmButtonText: "Aceptar",
                    background: `rgba(0,0,0,.9)`,
                    color: "rgba(255,255,255,.9)",
                  });
                  const carritoVacio = [];
                  const divCarrito = document.querySelector(".divCarrito");
                  divCarrito.classList.add("animate__flipOutY");
                  localStorage.setItem("carrito", JSON.stringify(carritoVacio));
                  setTimeout(() => {
                    mostrarProdCarrito();
                    calcularTotal();
                    divCarrito.classList.remove("animate__flipOutY");
                  }, 1000)
                }
              }) 
            }
          }
        })
      } 
    })
    }else{
        Swal.fire({
          title: `Debe iniciar sesion para comprar`,
          icon: "info",
          confirmButtonText: "Aceptar",
          background: `rgba(0,0,0,.9)`,
          color: "rgba(255,255,255,.9)",
        })
    }  
  });
}

/**
 * Funcion para vaciar carrito completo
 */
export function vaciarCarrito() {
  Swal.fire({
    title: "Esta por eliminar el carrito!",
    text: "Desea eliminar todos los productos?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    background: `rgba(0,0,0,.9)`,
    color: "rgba(255,255,255,.9)",
  }).then((res) => {
    if (res.isConfirmed == true) {
      const carritoVacio = [];
      const divCarrito = document.querySelector(".divCarrito");
      divCarrito.classList.add("animate__flipOutY");
      localStorage.setItem("carrito", JSON.stringify(carritoVacio));
      setTimeout(() => {
        mostrarProdCarrito();
        calcularTotal();
        divCarrito.classList.remove("animate__flipOutY");
      }, 1000);
    }
  });
}

/**
 * Funcion para agregar productos al carrito
 * parametro = evento
 * retorna el objeto prodCarrito
 * @param {Object}
 */

export function agregarAlCarrito(e) {
  const btnCarrito = document.querySelector("#btnCarrito");
  btnCarrito.children[0].classList.add("animate__bounce");
  setTimeout(() => {
    btnCarrito.children[0].classList.remove("animate__bounce");
  }, 1000);
  let foto = e.target.parentElement.children[0].src;
  let nombre = e.target.parentElement.children[1].textContent;
  let precio = parseFloat(
    e.target.parentElement.children[4].textContent.split(" ")[1]
  );
  const prodCarrito = new ProductoCarrito();
  prodCarrito.id = Date.now();
  prodCarrito.nombre = nombre;
  prodCarrito.foto = foto;
  prodCarrito.precio = precio;
  return prodCarrito;
}

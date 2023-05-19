/**
 * Esta clase esta compuesta por los metodos a utilizar en la pagina agregar productos
 */
export class Logica {
  /**
   * El objeto creado a partir del formulario de dicha pagina
   * @param {Object} producto
   */
  crearProd(producto) {
    if (
      localStorage.getItem("Productos") === null ||
      localStorage.getItem("carrito") === []
    ) {
      let productos = [];
      productos.push(producto);
      localStorage.setItem("Productos", JSON.stringify(productos));
    } else {
      let db = JSON.parse(localStorage.getItem("Productos"));
      db.push(producto);
      localStorage.setItem("Productos", JSON.stringify(db));
    }
    this.resetForm();
  }

  /**
   * Metodo para limpiar el formulario al hacer el submit
   */
  resetForm() {
    const previewImg = document.getElementById("preview");
    formulario.reset();
    previewImg.removeAttribute("src") ;
  }

  /**
   * Metodo para mostrar el producto agregado bajo el formulario
   */

  mostrarProd() {
    let db = JSON.parse(localStorage.getItem("Productos"));
    const stock = document.getElementById("stock");
    if (db == null || db.length == 0) {
      stock.innerHTML = "";
      const cardProducto = document.createElement("div");
      cardProducto.classList.add("cardProducto");
      cardProducto.innerHTML = `
                <strong>Agrega Productos a la lista</strong>            
    `;
      stock.append(cardProducto);
    } else {
      stock.innerHTML = "";
      db.forEach((prod) => {
        const cardProducto = document.createElement("div");
        cardProducto.classList.add("cardProducto");
        cardProducto.innerHTML = `
                    <button class="btnBorrar" name="borrar"></button>
                    <p class="hidden">${prod.id}</p>
                    <img src=${
                      prod.foto || "../assets/productos/productoSinImagen.png"
                    } alt="${prod.nombre}">
                    <p>${prod.nombre}</p>
                    <small>${prod.dimensiones}</small>
                    <small>${prod.caracteristicas}</small>
                    <strong>$ ${prod.precio}</strong>        
                    
        `;
        stock.append(cardProducto);
      });
    }
  }
  
  /**
   * Metodo para eliminar un producto desde el stock fijo desde un boton en la card del producto
   */
  borrarProd() {
    const stock = document.getElementById("stock");
    stock.addEventListener("click", (e) => {
      if (e.target.name == "borrar") {
        let idCard = e.target.parentElement.childNodes[3].textContent;
        let db = JSON.parse(localStorage.getItem("Productos"));

        db.forEach((prod, index) => {
          if (prod.id == idCard) {
            Swal.fire({
              title: "Esta por eliminar un producto!",
              text: "Desea elimiinar el producto",
              showCancelButton: true,
              confirmButtonText: "Aceptar",
              cancelButtonText: "Cancelar",
            }).then((res) => {
              if (res.isConfirmed === true) {
                db.splice(index, 1);
                localStorage.setItem("Productos", JSON.stringify(db));

                const logica = new Logica();
                logica.mostrarProd();
              }
            });
          }
          let dbCarrito = JSON.parse(localStorage.getItem("carrito"));
          let nombreCard = e.target.parentElement.children[3].textContent;

          dbCarrito.forEach((prod, index) => {
            if (prod.nombre == nombreCard) {
              dbCarrito.splice(index, 1);
              localStorage.setItem("carrito", JSON.stringify(dbCarrito));
            }
          });
        });
      }
    });
  }
}

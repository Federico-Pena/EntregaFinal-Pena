import { Producto } from "./clases/Producto.js";
import { Logica } from "./clases/Logica.js";
const formulario = document.getElementById("formulario");
const inputFoto = document.getElementById("foto");
const previewImg = document.getElementById("preview");

const producto = new Producto();
const logica = new Logica();
logica.mostrarProd();
logica.borrarProd();

/**
 * Listener para previsualizar la foto a cargar
 */
inputFoto.addEventListener("change", (fotoFile) => {
  let foto = inputFoto.files[0];
  if (foto) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      previewImg.setAttribute("src", e.target.result);
      producto.foto = e.target.result;
    };
    fileReader.readAsDataURL(foto);
  }
  producto.foto = "";
});

/**
 * Listener del formulario para agregar al localStorage
 * Y mostrar en pantalla
 */
formulario.addEventListener("submit", (e) => {
  const inputNombre = document.getElementById("nombre").value;
  const inputPrecio = document.getElementById("precio").value;
  const inputDimensiones = document.getElementById("dimensiones").value;
  const inputCaracteristicas = document.getElementById("caracteristicas").value;
  producto.id = Date.now();
  producto.nombre = inputNombre;
  producto.precio = inputPrecio;
  producto.dimensiones = inputDimensiones;
  producto.caracteristicas = inputCaracteristicas;
  const db = localStorage.getItem("Productos")
  if (db) {
    if (db.indexOf(producto.nombre) > 0) {
      swal.fire({
        title: "Atencion!",
        text: "Hay un producto con el mismo nombre. Pruebe con otro",
        icon: "info",
        confirmButtonText: "Ok",
        background: `rgba(0,0,0,.9)`,
        color: "rgba(255,255,255,.9)",
      });
    }else{
      const logica = new Logica();
      logica.crearProd(producto);
      producto.foto = "";
      logica.mostrarProd();
      
      Swal.fire({
        title: "Producto agregado!",
        text: "Su producto fue agregado con exito!",
        icon: "success",
        confirmButtonText: "Ok",
        background: `rgba(0,0,0,.9)`,
        color: "rgba(255,255,255,.9)",
      });
    }
  }else{
    const logica = new Logica();
    logica.crearProd(producto);
    producto.foto = "";
    logica.mostrarProd();
    
    Swal.fire({
      title: "Producto agregado!",
      text: "Su producto fue agregado con exito!",
      icon: "success",
      confirmButtonText: "Ok",
      background: `rgba(0,0,0,.9)`,
      color: "rgba(255,255,255,.9)",
    });
  }
 
  e.preventDefault();
});

import {
	alertaProductoAgregado,
	alertaProductoYaExiste,
} from './SweetAlert/sweetAlert.js'
import {
	guardarLocalStorage,
	buscarLocalStorage,
} from './localStorage/helpers.js'
import { borrarProd } from './localStorage/productos.js'
const formulario = document.getElementById('formulario')
const inputFoto = document.getElementById('foto')
const previewImg = document.getElementById('preview')
const producto = {}
/**
 * Listener para pre-visualizar la foto a cargar
 */
window.addEventListener('DOMContentLoaded', () => {
	mostrarProd()
})
/**
 * @Info Método para mostrar el producto agregado bajo el formulario
 * @Info Pagina Agregar Productos
 */
export const mostrarProd = () => {
	const DbProductos = buscarLocalStorage('Productos')
	if (!DbProductos.length) {
		const stock = document.getElementById('stock')
		stock.innerHTML = ''
		const cardProducto = document.createElement('div')
		cardProducto.classList.add('cardProducto')
		cardProducto.innerHTML = `
              <strong class="ListaVacia">Agrega Productos a la lista</strong>            
  `
		stock.append(cardProducto)
	} else {
		const stock = document.getElementById('stock')
		stock.innerHTML = ''
		DbProductos.forEach((prod) => {
			const cardProducto = document.createElement('div')
			cardProducto.classList.add('cardProducto')
			cardProducto.innerHTML = `
                  <button id=${
										prod.ID
									} title="Borrar Producto" class="btnBorrar" name="borrar"><i class="fa-solid fa-circle-xmark"></i></button>
									<img class="imgProd" id="${
										prod.foto || '../assets/productos/productoSinImagen.png'
									}" src="${
				prod.foto || '../assets/productos/productoSinImagen.png'
			}" alt="${prod.nombre}" title="${prod.nombre}">
									<p class="nombreProd" id="${prod.nombre}">${prod.nombre}</p>
									<small class="detallesProd" id=${prod.detalles}>${prod.detalles}</small>
									<small class="categoríaProd" id=${prod.categoría}>${prod.categoría}</small>
									<strong class="precioProd" id="${prod.precio}">$ ${prod.precio}</strong>`
			stock.append(cardProducto)
		})
	}
	borrarProd()
}

inputFoto.addEventListener('change', () => {
	let foto = inputFoto.files[0]
	if (foto) {
		let fileReader = new FileReader()
		fileReader.onload = (e) => {
			previewImg.setAttribute('src', e.target.result)
			producto.foto = e.target.result
		}
		fileReader.readAsDataURL(foto)
	}
	producto.foto = ''
})

/**
 * Listener del formulario para agregar al localStorage
 * Y mostrar en pantalla
 */
formulario.addEventListener('submit', (e) => {
	e.preventDefault()
	const inputNombre = document.getElementById('nombre').value
	const inputPrecio = document.getElementById('precio').value
	const inputDetalles = document.getElementById('Detalles').value
	const inputCategoría = document.getElementById('Categoría').value
	producto.ID = Date.now()
	producto.nombre = inputNombre
	producto.precio = inputPrecio
	producto.detalles = inputDetalles
	producto.categoría = inputCategoría
	const db = buscarLocalStorage('Productos')
	if (db.length) {
		const filtro = db.find(
			(prod) => prod.nombre.toLowerCase() === inputNombre.toLowerCase()
		)
		if (filtro) {
			alertaProductoYaExiste()
		} else {
			db.push(producto)
			guardarLocalStorage('Productos', db)
			e.target.reset()
			previewImg.src =
				'https://placehold.co/200/ffffff1e/000?text=Carga una imagen'
			producto.foto = ''
			alertaProductoAgregado()
			mostrarProd()
		}
	} else {
		db.push(producto)
		guardarLocalStorage('Productos', db)
		e.target.reset()
		previewImg.src =
			'https://placehold.co/200/ffffff1e/000?text=Carga una imagen'
		producto.foto = ''
		alertaProductoAgregado()
		mostrarProd()
	}
})

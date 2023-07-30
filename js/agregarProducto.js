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
		const ListaVacia = document.createElement('strong')
		ListaVacia.classList.add('ListaVacia')
		const ListaVaciaText = document.createTextNode(
			'Agrega Productos a la lista'
		)
		ListaVacia.appendChild(ListaVaciaText)
		cardProducto.append(ListaVacia)
		stock.append(cardProducto)
	} else {
		const stock = document.getElementById('stock')
		stock.innerHTML = ''
		DbProductos.forEach((prod) => {
			const cardProducto = document.createElement('div')
			cardProducto.classList.add('cardProducto')
			/* Imagen */
			let imagen = document.createElement('img')
			imagen.classList.add('imgProd')
			imagen.setAttribute(
				'id',
				`${prod.foto || '../assets/productos/productoSinImagen.png'}`
			)
			imagen.setAttribute(
				'src',
				`${prod.foto || '../assets/productos/productoSinImagen.png'}`
			)
			imagen.setAttribute('alt', `${prod.nombre}`)
			imagen.setAttribute('title', `${prod.nombre}`)
			/* Nombre */
			let nombre = document.createElement('p')
			let nombreText = document.createTextNode(prod.nombre)
			nombre.appendChild(nombreText)
			/* Detalles */
			let smallDetalles = document.createElement('small')
			let smallDetallesText = document.createTextNode(prod.detalles)
			smallDetalles.appendChild(smallDetallesText)
			/* Categoría */
			let smallCategoría = document.createElement('small')
			let smallCategoríaText = document.createTextNode(prod.categoría)
			smallCategoría.appendChild(smallCategoríaText)
			/* Precio */
			let precio = document.createElement('strong')
			let precioText = document.createTextNode(prod.precio)
			precio.classList.add('precioProd')
			precio.setAttribute('id', `${prod.precio}`)
			precio.appendChild(precioText)
			/* Botón */
			let buttonAgregar = document.createElement('button')
			buttonAgregar.classList.add('btnBorrar')
			buttonAgregar.setAttribute('id', `${prod.ID}`)
			buttonAgregar.setAttribute('title', `Borrar Producto`)
			let icono = document.createElement('i')
			icono.classList.add('fa-solid')
			icono.classList.add('fa-circle-xmark')
			buttonAgregar.appendChild(icono)
			/* Card */
			cardProducto.appendChild(imagen)
			cardProducto.appendChild(nombre)
			cardProducto.appendChild(smallDetalles)
			cardProducto.appendChild(smallCategoría)
			cardProducto.appendChild(precio)
			cardProducto.appendChild(buttonAgregar)

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
	const db = buscarLocalStorage('Productos')
	const inputNombre = document.getElementById('nombre').value
	const inputPrecio = document.getElementById('precio').value
	const inputDetalles = document.getElementById('Detalles').value
	const inputCategoría = document.getElementById('Categoría').value
	producto.ID = Date.now()
	producto.nombre = inputNombre
	producto.precio = inputPrecio
	producto.detalles = inputDetalles
	producto.categoría = inputCategoría
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
			previewImg.src = 'https://placehold.co/200/ffffff1e/000?text=Vista+Previa'
			producto.foto = ''
			alertaProductoAgregado()
			mostrarProd()
		}
	} else {
		db.push(producto)
		guardarLocalStorage('Productos', db)
		e.target.reset()
		previewImg.src = 'https://placehold.co/200/ffffff1e/000?text=Vista+Previa'
		producto.foto = ''
		alertaProductoAgregado()
		mostrarProd()
	}
})

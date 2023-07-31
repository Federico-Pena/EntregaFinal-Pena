import { carritoLength } from './carrito/carrito.js'
import { mantenerSesion } from './sesion/mantenerSesion.js'
import { buscarLocalStorage } from './localStorage/helpers.js'
import './sesion/sesion.js'
import './carrito/carrito.js'
import { agregarAlCarrito } from './carrito/agregarAlCarrito.js'
const divProductos = document.getElementById('divProductos')

export const mostrarProductos = async () => {
	const data = await fetch('./productos.json')
	const { productos } = await data.json()
	const BD = buscarLocalStorage('Productos')
	BD.push(...productos)
	if (BD.length) {
		BD.forEach((prod) => {
			let cardProducto = document.createElement('div')
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
			nombre.classList.add('nombreProd')
			nombre.setAttribute('id', prod.nombre)
			let nombreText = document.createTextNode(prod.nombre)
			nombre.appendChild(nombreText)
			/* Detalles */
			let smallDetalles = document.createElement('small')
			let smallDetallesText = document.createTextNode(prod.detalles)
			smallDetalles.appendChild(smallDetallesText)
			/* Categoría */
			let smallCategoría = document.createElement('small')
			smallCategoría.classList.add('smallCategoría')

			smallCategoría.setAttribute('id', prod.categoría)
			let smallCategoríaText = document.createTextNode(prod.categoría)
			smallCategoría.appendChild(smallCategoríaText)
			/* Precio */
			let precio = document.createElement('strong')
			let precioText = document.createTextNode(`$ ${prod.precio}`)
			precio.classList.add('precioProd')
			precio.setAttribute('id', `${prod.precio}`)
			precio.appendChild(precioText)
			/* Botón */
			let buttonAgregar = document.createElement('button')
			buttonAgregar.classList.add('btnAgregar')
			buttonAgregar.setAttribute('id', prod.ID)
			buttonAgregar.setAttribute('title', `Agregar al Carrito`)
			let buttonAgregarText = document.createTextNode('Agregar al Carrito')
			buttonAgregar.appendChild(buttonAgregarText)
			let icono = document.createElement('i')
			icono.classList.add('fa-solid')
			icono.classList.add('fa-cart-shopping')
			buttonAgregar.appendChild(icono)
			/* Card */
			cardProducto.appendChild(imagen)
			cardProducto.appendChild(nombre)
			cardProducto.appendChild(smallDetalles)
			cardProducto.appendChild(smallCategoría)
			cardProducto.appendChild(precio)
			cardProducto.appendChild(buttonAgregar)
			divProductos.appendChild(cardProducto)
		})
	}
}
//	Listener para Mostrar Productos y sesión
window.addEventListener('DOMContentLoaded', () => {
	carritoLength()
	mantenerSesion()
	mostrarProductos()
})
divProductos.addEventListener('click', (e) => {
	if (e.target.classList.contains('btnAgregar')) {
		agregarAlCarrito(e.target)
	}
})

///////////////		BÚSQUEDA	/////////////////
// Listener del input buscar
const inputBuscar = document.getElementById('buscar')
inputBuscar.addEventListener('input', buscarProd)
// El parámetro es cualquier texto que contenga en producto en su tarjeta para el filtro
// @param {string}
export function buscarProd(event) {
	const cardProducto = document.querySelectorAll('.cardProducto')
	let inputValue = event.target.value.toLowerCase()
	cardProducto.forEach((prod) => {
		if (prod.textContent.toLowerCase().includes(inputValue)) {
			prod.classList.remove('hidden')
		} else {
			prod.classList.add('hidden')
		}
	})
}
const filtrarCategoría = (e) => {
	let filtro = e.currentTarget.textContent
	const divProductos = document.getElementById('divProductos')
	divProductos.querySelectorAll('.smallCategoría').forEach((prod) => {
		let card = prod.parentElement
		if (!prod.textContent.includes(filtro)) {
			card.classList.add('hidden')
		} else {
			card.classList.remove('hidden')
		}
	})
}
export const filtros = async () => {
	const categorías = document.querySelector('.Categorías')
	const DB = buscarLocalStorage('Productos')
	const res = await fetch('./productos.json')
	const { productos } = await res.json()
	let cat = []
	DB.forEach((a) => {
		cat.push(a.categoría)
	})
	productos.forEach((a) => {
		cat.push(a.categoría)
	})
	const filtradas = new Set(cat)
	filtradas.forEach((categoría) => {
		const botón = document.createElement('button')
		botón.setAttribute('title', categoría)
		botón.classList.add('btnFiltroCategoría')
		botón.setAttribute('title', categoría)
		let buttonText = document.createTextNode(categoría)
		botón.append(buttonText)
		botón.addEventListener('click', filtrarCategoría)
		categorías.append(botón)
	})
	const botónCerrar = document.createElement('button')
	botónCerrar.classList.add('botónCerrarCategoría')
	botónCerrar.setAttribute('title', 'Borrar Filtros')
	const botónIcono = document.createElement('i')
	botónIcono.classList.add('fa-solid')
	botónIcono.classList.add('fa-x')
	botónCerrar.append(botónIcono)
	botónCerrar.addEventListener('click', filtrarCategoría)
	categorías.append(botónCerrar)
}
filtros()
///////////////		BÚSQUEDA	/////////////////

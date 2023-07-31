///////////carrito
import { animAbrirCarrito } from '../animations/carrito/abrirCarrito.js'
import { animCerrarCarrito } from '../animations/carrito/cerrarCarrito.js'
import { buscarLocalStorage } from '../localStorage/helpers.js'
import { vaciarCarrito } from './vaciarCarrito.js'
import { comprar } from './comprar.js'
import { calcularTotal } from './calcularTotal.js'
import { calcularCantidad } from './calcularCantidad.js'
import { eliminarDelCarrito } from './eliminarDelCarrito.js'

// Listener para cerrar y animar el cierre del carrito
const cerrarCarrito = document.getElementById('cerrarCarrito')
cerrarCarrito.addEventListener('click', animCerrarCarrito)

// Listener para abrir y animar el carrito
const abrirCarrito = document.getElementById('btnCarrito')
abrirCarrito.addEventListener('click', () => {
	animAbrirCarrito()
	mostrarProdCarrito()
	calcularTotal()
})

// Listener Para comprar
const btnComprar = document.querySelector('.comprar')
btnComprar.addEventListener('click', comprar)

// Listener para eliminar un producto del carrito
const divCarrito = document.querySelector('.divCarrito')
divCarrito.addEventListener('click', (e) => {
	calcularCantidad(e)
	eliminarDelCarrito(e)
})

// Listener para vaciar el carrito completo
const btnVaciarCarrito = document.querySelector('.vaciarCarrito')
btnVaciarCarrito.addEventListener('click', vaciarCarrito)

// Funcion para obtener productos, y pintarlos en el carrito
export function mostrarProdCarrito() {
	const db = buscarLocalStorage('carrito')
	const divCarrito = document.querySelector('.divCarrito')
	if (db.length) {
		divCarrito.innerHTML = ''
		db.forEach((prod) => {
			const producto = document.createElement('div')
			producto.classList.add('prodCarrito')
			producto.classList.add('animate__animated')
			/* Imagen */
			let imagen = document.createElement('img')
			imagen.classList.add('prodFoto')
			imagen.setAttribute('id', prod.foto)
			imagen.setAttribute('src', prod.foto)
			imagen.setAttribute('alt', prod.nombre)
			imagen.setAttribute('title', prod.nombre)

			/* Nombre */
			let nombre = document.createElement('p')
			nombre.classList.add('prodNombre')
			nombre.setAttribute('id', prod.nombre)
			let nombreText = document.createTextNode(prod.nombre)
			nombre.appendChild(nombreText)

			/* Precio */
			let precio = document.createElement('strong')
			let precioText = document.createTextNode(`$ ${prod.precio}`)
			precio.classList.add('prodPrecio')
			precio.setAttribute('id', `${prod.precio}`)
			precio.appendChild(precioText)

			/* Restar */
			let spanRestar = document.createElement('span')
			spanRestar.classList.add('restar')
			let spanRestarText = document.createTextNode('-')
			spanRestar.appendChild(spanRestarText)

			/* cantidad */
			let cantidad = document.createElement('strong')
			cantidad.classList.add('cantidad')
			cantidad.setAttribute('id', `${prod.cantidad}`)
			let cantidadText = document.createTextNode(prod.cantidad || 1)
			cantidad.appendChild(cantidadText)

			/* Sumar */
			let spanSumar = document.createElement('span')
			spanSumar.classList.add('sumar')
			let spanSumarText = document.createTextNode('+')
			spanSumar.appendChild(spanSumarText)
			/* Botón */
			let buttonBorrar = document.createElement('button')
			buttonBorrar.classList.add('btnBorrarDelCarrito')
			buttonBorrar.setAttribute('id', prod.id)
			buttonBorrar.setAttribute('title', `Borrar del carrito ${prod.nombre}`)
			let icono = document.createElement('i')
			icono.setAttribute('id', prod.id)

			icono.classList.add('fa-solid')
			icono.classList.add('fa-circle-xmark')
			buttonBorrar.appendChild(icono)
			/* Card */
			producto.appendChild(imagen)
			producto.appendChild(nombre)
			producto.appendChild(precio)
			producto.appendChild(spanRestar)
			producto.appendChild(cantidad)
			producto.appendChild(spanSumar)
			producto.appendChild(buttonBorrar)
			divCarrito.appendChild(producto)
		})
	} else {
		divCarrito.innerHTML = ''
		let imagen = document.createElement('img')
		imagen.classList.add('carritoimg')
		imagen.setAttribute('src', '../assets/carritoVacio.png')
		imagen.setAttribute('alt', 'carrito Vacío')
		imagen.setAttribute('title', 'Imagen de carrito Vacío')
		divCarrito.append(imagen)
	}
}
// Función para mostrar la cantidad de productos en el carrito
// con un numero animado
export function carritoLength() {
	const numCarrito = document.querySelector('.carritoLength')
	let db = buscarLocalStorage('carrito')
	if (db.length) {
		numCarrito.textContent = db.length
		numCarrito.classList.add('animate__bounce')
		setTimeout(() => {
			numCarrito.classList.remove('animate__bounce')
		}, 600)
	} else {
		numCarrito.textContent = 0
	}
}

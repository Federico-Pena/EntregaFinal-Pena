///////////carrito
import { eliminarDelCarrito } from './eliminarDelCarrito.js'
import { animAbrirCarrito } from '../animations/carrito/abrirCarrito.js'
import { animCerrarCarrito } from '../animations/carrito/cerrarCarrito.js'
import { buscarLocalStorage } from '../localStorage/helpers.js'
import { vaciarCarrito } from './vaciarCarrito.js'
import { comprar } from './comprar.js'
import { calcularTotal } from './calcularTotal.js'
import { calcularCantidad } from './calcularCantidad.js'

// Listener para cerrar y animar el cierre del carrito
const cerrarCarrito = document.getElementById('cerrarCarrito')
cerrarCarrito.addEventListener('click', animCerrarCarrito)
// Listener para abrir y animar el carrito
const abrirCarrito = document.getElementById('btnCarrito')
abrirCarrito.addEventListener('click', () => {
	animAbrirCarrito()
	mostrarProdCarrito()
	calcularCantidad()
	calcularTotal()
	btnsBorrarDelCarrito()
})

// Listener Para comprar
const btnComprar = document.querySelector('.comprar')
btnComprar.addEventListener('click', comprar)

export function btnsBorrarDelCarrito() {
	// Listener para eliminar un producto del carrito
	const divCarrito = document.querySelector('.divCarrito')
	const botones = divCarrito.querySelectorAll('.btnBorrarDelCarrito')
	botones.forEach((btn) => {
		btn.addEventListener('click', eliminarDelCarrito)
	})
}

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
			producto.innerHTML = `
                    <img class="prodFoto" id=${prod.foto} src=${
				prod.foto
			} alt=${prod.nombre}>
                    <p class="prodNombre" id=${prod.nombre}>${prod.nombre}</p>
                    <strong class="prodPrecio" id=${prod.precio}>$ ${
				prod.precio
			}</strong>  
                    <span class="restar">-</span>
                    <strong  id=${prod.cantidad} class="cantidad">${
				prod.cantidad || 1
			}</strong>
                    <span class="sumar">+</span>
                    <button id=${
											prod.id
										} class="btnBorrarDelCarrito"><i class="fa-solid fa-circle-xmark"></i></button>                          
        `
			divCarrito.appendChild(producto)
		})
	} else {
		divCarrito.innerHTML = `
      <img class="carritoimg" src="../assets/carritoVacio.png" alt="carrito Vacío">          
  `
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

import { carritoLength } from './carrito/carrito.js'
import { mantenerSesion } from './sesion/mantenerSesion.js'
import { buscarLocalStorage } from './localStorage/helpers.js'
import './sesion/sesion.js'
import './carrito/carrito.js'

export const mostrarProductos = () => {
	const BD = buscarLocalStorage('Productos')
	if (BD.length) {
		const divProductos = document.getElementById('divProductos')
		BD.forEach((prod) => {
			let cardProducto = document.createElement('div')
			cardProducto.classList.add('cardProducto')
			cardProducto.innerHTML = `
									<img src="${prod.foto}" alt="${prod.nombre}" title="${prod.nombre}">
									<p>${prod.nombre}</p>
									<small>${prod.caracteristicas}</small>
									<small>${prod.dimensiones} cm</small>
									<strong>$ ${prod.precio}</strong>        
									<button title="Agregar al Carrito" class="btnAgregar">Agregar al Carrito</button>
	`
			divProductos.appendChild(cardProducto)
		})
	} else return
}
//	Listener para Mostrar Productos y sesion
window.addEventListener('DOMContentLoaded', () => {
	carritoLength()
	mantenerSesion()
	mostrarProductos()
})

///////////////		BUSQUEDA	/////////////////
// Listener del input buscar
const inputBuscar = document.getElementById('buscar')
inputBuscar.addEventListener('input', buscarProd)
// El parametro es cualquier texto que contenga en producto en su tarjeta para el filtro
// @param {string}
export function buscarProd(event) {
	const cardProducto = document.querySelectorAll('.cardProducto')
	let inputValue = event.target.value.toLowerCase()
	cardProducto.forEach((prod) => {
		if (prod.textContent.toLowerCase().includes(inputValue)) {
			prod.style.display = 'flex'
		} else {
			prod.style.display = 'none'
		}
	})
}
///////////////		BUSQUEDA	/////////////////

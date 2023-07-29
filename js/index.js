import { carritoLength } from './carrito/carrito.js'
import { mantenerSesion } from './sesion/mantenerSesion.js'
import { buscarLocalStorage } from './localStorage/helpers.js'
import './sesion/sesion.js'
import './carrito/carrito.js'
import { agregarAlCarrito } from './carrito/agregarAlCarrito.js'

export const mostrarProductos = async () => {
	const data = await fetch('./productos.json')
	const { productos } = await data.json()
	const BD = buscarLocalStorage('Productos')
	BD.push(...productos)
	if (BD.length) {
		const divProductos = document.getElementById('divProductos')
		BD.forEach((prod) => {
			let cardProducto = document.createElement('div')
			cardProducto.classList.add('cardProducto')
			cardProducto.innerHTML = `
									<img class="imgProd" id="${
										prod.foto || '../assets/productos/productoSinImagen.png'
									}" src="${
				prod.foto || '../assets/productos/productoSinImagen.png'
			}" alt="${prod.nombre}" title="${prod.nombre}">
									<p class="nombreProd" id="${prod.nombre}">${prod.nombre}</p>
									<small>${prod.detalles}</small>
									<small>${prod.categoría}</small>
									<strong class="precioProd" id="${prod.precio}">$ ${prod.precio}</strong>        
									<button id=${
										prod.ID
									} title="Agregar al Carrito" class="btnAgregar"><i class="fa-solid fa-cart-shopping"></i></i>Agregar al Carrito</button>
	`
			divProductos.appendChild(cardProducto)
		})
	}
	btnsAgregar()
}
//	Listener para Mostrar Productos y sesión
window.addEventListener('DOMContentLoaded', () => {
	carritoLength()
	mantenerSesion()
	mostrarProductos()
})
const btnsAgregar = () => {
	// Listener para agregar productos a la carrito
	const cardProducto = document.querySelectorAll('.cardProducto')
	if (cardProducto) {
		cardProducto.forEach((card) => {
			const btn = card.querySelector('.btnAgregar')
			btn.addEventListener('click', agregarAlCarrito)
		})
	}
}
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
			prod.style.display = 'flex'
		} else {
			prod.style.display = 'none'
		}
	})
}
///////////////		BÚSQUEDA	/////////////////

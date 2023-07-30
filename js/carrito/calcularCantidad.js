import {
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'
import { calcularTotal } from './calcularTotal.js'

export function calcularCantidad() {
	const prodsCarrito = document.querySelectorAll('.prodCarrito')
	prodsCarrito.forEach((prod) => {
		const restar = prod.querySelector('.restar')
		const sumar = prod.querySelector('.sumar')
		restar.addEventListener('click', () => restarCantidad(prod))
		sumar.addEventListener('click', () => sumarCantidad(prod))
	})
}

const restarCantidad = (prod) => {
	let cantidad = prod.querySelector('.cantidad')
	const id = prod.querySelector('.btnBorrarDelCarrito').id
	const carritoDB = buscarLocalStorage('carrito')
	if (parseInt(cantidad.textContent) < 2) {
		const producto = carritoDB.find(
			(prod) => parseInt(prod.id) === parseInt(id)
		)
		cantidad.textContent = 1
		producto.cantidad = 1
		const productos = carritoDB.filter(
			(prod) => parseInt(prod.id) !== parseInt(id)
		)
		productos.push(producto)
		guardarLocalStorage('carrito', productos)
		calcularTotal()
	} else {
		const producto = carritoDB.find(
			(prod) => parseInt(prod.id) === parseInt(id)
		)
		cantidad.textContent--
		producto.cantidad--
		const productos = carritoDB.filter(
			(prod) => parseInt(prod.id) !== parseInt(id)
		)
		productos.push(producto)
		guardarLocalStorage('carrito', productos)
		calcularTotal()
	}
}

const sumarCantidad = (prod) => {
	const carritoDB = buscarLocalStorage('carrito')
	let cantidad = prod.querySelector('.cantidad')
	const id = prod.querySelector('.btnBorrarDelCarrito').id
	const producto = carritoDB.find((prod) => parseInt(prod.id) === parseInt(id))
	cantidad.textContent++
	producto.cantidad++
	const productos = carritoDB.filter(
		(prod) => parseInt(prod.id) !== parseInt(id)
	)
	productos.push(producto)
	guardarLocalStorage('carrito', productos)
	calcularTotal()
}

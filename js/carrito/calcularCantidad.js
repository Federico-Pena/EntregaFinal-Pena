import {
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'
import { calcularTotal } from './calcularTotal.js'

export function calcularCantidad(e) {
	if (e.target.classList.contains('restar')) {
		restarCantidad(e.target.parentElement)
	}
	if (e.target.classList.contains('sumar')) {
		sumarCantidad(e.target.parentElement)
	}
}

const restarCantidad = (padre) => {
	let cantidad = padre.querySelector('.cantidad')
	const id = padre.querySelector('.btnBorrarDelCarrito').id
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

const sumarCantidad = (padre) => {
	const carritoDB = buscarLocalStorage('carrito')
	let cantidad = padre.querySelector('.cantidad')
	const id = padre.querySelector('.btnBorrarDelCarrito').id
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

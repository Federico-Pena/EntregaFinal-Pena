import {
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'
import { calcularTotal } from './calcularTotal.js'
export function calcularCantidad() {
	const prodsCarrito = document.querySelectorAll('.prodCarrito')
	prodsCarrito.forEach((prod) => {
		prod.children[4].addEventListener('click', () =>
			restarCantidad(prod.children[5], prod.children[0].textContent)
		)
		prod.children[6].addEventListener('click', () =>
			sumarCantidad(prod.children[5], prod.children[0].textContent)
		)
	})
}
const restarCantidad = (cantidad, id) => {
	const carritoDB = buscarLocalStorage('carrito')
	let idNumero = parseInt(id)
	if (cantidad.textContent < 2) {
		cantidad.textContent = 1
		calcularTotal()
		const producto = carritoDB.find((prod) => prod.id === idNumero)
		producto.cantidad = parseInt(cantidad.textContent)
		const productos = carritoDB.filter((prod) => prod.id !== idNumero)
		productos.push(producto)
		guardarLocalStorage('carrito', productos)
	} else {
		cantidad.textContent--
		calcularTotal()
		const producto = carritoDB.find((prod) => prod.id === idNumero)
		producto.cantidad = parseInt(cantidad.textContent)
		const productos = carritoDB.filter((prod) => prod.id !== idNumero)
		productos.push(producto)
		guardarLocalStorage('carrito', productos)
	}
}
const sumarCantidad = (cantidad, id) => {
	const carritoDB = buscarLocalStorage('carrito')
	let idNumero = parseInt(id)
	cantidad.textContent++
	calcularTotal()
	const producto = carritoDB.find((prod) => prod.id === idNumero)
	producto.cantidad = parseInt(cantidad.textContent)
	const productos = carritoDB.filter((prod) => prod.id !== idNumero)
	productos.push(producto)
	guardarLocalStorage('carrito', productos)
}

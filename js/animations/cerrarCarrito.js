import { carritoLength } from '../helpers/Carrito/carrito.js'

export const animCerrarCarrito = () => {
	const carrito = document.querySelector('.carrito')
	const container = document.querySelector('.container')
	container.classList.remove('hidden')
	carrito.classList.add('animate__backOutRight')
	carritoLength()
	setTimeout(() => {
		carrito.classList.add('hidden')
	}, 500)
}

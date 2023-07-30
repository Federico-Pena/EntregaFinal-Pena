import { carritoLength } from '../../carrito/carrito.js'

export const animCerrarCarrito = () => {
	const carrito = document.querySelector('.carrito')
	carrito.classList.add('animate__backOutRight')
	const main = document.querySelector('main')
	main.classList.remove('hidden')
	carritoLength()
	setTimeout(() => {
		carrito.classList.add('hidden')
		carrito.classList.remove('animate__backOutRight')
	}, 1000)
}

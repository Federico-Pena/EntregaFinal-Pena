//import { carritoLength } from '../helpers/Carrito/carrito.js'

export const animCerrarCarrito = () => {
	const carrito = document.querySelector('.carrito')
	carrito.classList.add('animate__backOutRight')
	//carritoLength()
	setTimeout(() => {
		carrito.classList.add('hidden')
		carrito.classList.remove('animate__backOutRight')
	}, 1500)
}

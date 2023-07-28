import { alertaVaciarCarrito } from '../SweetAlert/sweetAlert.js'
import {
	borrarLocalStorage,
	buscarLocalStorage,
} from '../localStorage/helpers.js'
import { calcularTotal } from './calcularTotal.js'
import { carritoLength, mostrarProdCarrito } from './carrito.js'

export async function vaciarCarrito() {
	const db = buscarLocalStorage('carrito')
	if (db.length) {
		const res = await alertaVaciarCarrito()
		if (res.isConfirmed) {
			const divCarrito = document.querySelector('.divCarrito')
			divCarrito.classList.add('animate__flipOutY')
			borrarLocalStorage('carrito')
			setTimeout(() => {
				mostrarProdCarrito()
				carritoLength()
				calcularTotal()
				divCarrito.classList.remove('animate__flipOutY')
			}, 1000)
		}
	}
}

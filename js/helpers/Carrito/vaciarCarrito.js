import { alerta } from '../../SweetAlert/sweetAlert.js'
import { calcularTotal } from './calcularTotal.js'
import { mostrarProdCarrito } from './carrito.js'

/**
 * Funcion para vaciar carrito completo
 */
export function vaciarCarrito() {
	const db = JSON.parse(localStorage.getItem('carrito'))
	if (db && db.length > 0) {
		let eliminar = {
			title: 'Esta por eliminar el carrito!',
			text: 'Desea eliminar todos los productos?',
			icon: 'question',
			showCancelButton: true,
			confirmButtonText: 'Aceptar',
			cancelButtonText: 'Cancelar',
		}
		alerta(eliminar).then((res) => {
			if (res.isConfirmed == true) {
				const carritoVacio = []
				const divCarrito = document.querySelector('.divCarrito')
				divCarrito.classList.add('animate__flipOutY')
				localStorage.setItem('carrito', JSON.stringify(carritoVacio))
				setTimeout(() => {
					mostrarProdCarrito()
					calcularTotal()
					divCarrito.classList.remove('animate__flipOutY')
				}, 1000)
			}
		})
	}
}

import { alertaEliminarProdCarrito } from '../SweetAlert/sweetAlert.js'
import {
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'
import { calcularTotal } from './calcularTotal.js'
import { mostrarProdCarrito } from './carrito.js'

/**
 * Funcion para eliminar productos al carrito
 */
export async function eliminarDelCarrito(e) {
	if (e.target.name == 'btnBorrarCarrito') {
		const idProd = e.target.parentElement.children[0].textContent
		const db = buscarLocalStorage('carrito')
		const prod = db.find((prod) => parseInt(prod.id) === parseInt(idProd))
		if (prod) {
			const res = await alertaEliminarProdCarrito()
			if (res.isConfirmed === true) {
				const prods = db.filter(
					(prod) => parseInt(prod.id) !== parseInt(idProd)
				)
				e.target.parentElement.classList.add('animate__flipOutY')
				guardarLocalStorage('carrito', prods)
				setTimeout(() => {
					mostrarProdCarrito()
					calcularTotal()
					//	calcularCantidad()
				}, 1000)
			}
		}
	}
}

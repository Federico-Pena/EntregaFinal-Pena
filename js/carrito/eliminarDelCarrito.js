import { alertaEliminarProdCarrito } from '../SweetAlert/sweetAlert.js'
import {
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'
import { calcularTotal } from './calcularTotal.js'
import { mostrarProdCarrito } from './carrito.js'

/**
 * Función para eliminar productos al carrito
 */
export async function eliminarDelCarrito(e) {
	if (
		e.target.classList.contains('btnBorrarDelCarrito') ||
		e.target.classList.contains('fa-circle-xmark')
	) {
		const divCard = e.target.parentElement.parentElement
		const idProd = e.target.id
		const db = buscarLocalStorage('carrito')
		const prod = db.find((prod) => parseInt(prod.id) === parseInt(idProd))
		if (prod) {
			const res = await alertaEliminarProdCarrito()
			if (res.isConfirmed) {
				divCard.classList.add('animate__flipOutY')
				const prods = db.filter(
					(prod) => parseInt(prod.id) !== parseInt(idProd)
				)
				guardarLocalStorage('carrito', prods)
				setTimeout(() => {
					mostrarProdCarrito()
					calcularTotal()
				}, 1000)
			}
		}
	}
}

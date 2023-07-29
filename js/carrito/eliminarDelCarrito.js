import { alertaEliminarProdCarrito } from '../SweetAlert/sweetAlert.js'
import {
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'
import { calcularCantidad } from './calcularCantidad.js'
import { calcularTotal } from './calcularTotal.js'
import { btnsBorrarDelCarrito, mostrarProdCarrito } from './carrito.js'

/**
 * Función para eliminar productos al carrito
 */
export async function eliminarDelCarrito(e) {
	const divCard = e.currentTarget.parentNode
	const idProd = e.currentTarget.id
	const db = buscarLocalStorage('carrito')
	const prod = db.find((prod) => parseInt(prod.id) === parseInt(idProd))

	if (prod) {
		const res = await alertaEliminarProdCarrito()
		if (res.isConfirmed) {
			divCard.classList.add('animate__flipOutY')
			const prods = db.filter((prod) => parseInt(prod.id) !== parseInt(idProd))
			guardarLocalStorage('carrito', prods)
			setTimeout(() => {
				mostrarProdCarrito()
				calcularTotal()
				calcularCantidad()
				btnsBorrarDelCarrito()
			}, 1000)
		}
	}
}

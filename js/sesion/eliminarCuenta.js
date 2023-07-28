import { alertaEliminarCuenta } from '../SweetAlert/sweetAlert.js'
import { animEliminarCuenta } from '../animations/sesion/eliminarCuenta.js'
import { carritoLength, mostrarProdCarrito } from '../carrito/carrito.js'
import {
	borrarLocalStorage,
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'

export async function eliminarCuenta(e) {
	const userActive = buscarLocalStorage('userActive')
	const dbUsers = buscarLocalStorage('usuarios')
	const userFiltered = dbUsers.find((user) => {
		return user.user === userActive
	})
	if (userFiltered) {
		const res = await alertaEliminarCuenta()
		if (res.isConfirmed) {
			const userFiltered = dbUsers.filter((user) => {
				return user.user !== userActive
			})
			guardarLocalStorage('usuarios', userFiltered)
			borrarLocalStorage('userActive')
			borrarLocalStorage('carrito')
			mostrarProdCarrito()
			//calcularTotal()
			//calcularCantidad()
			carritoLength()
			animEliminarCuenta(e)
		}
	}
}

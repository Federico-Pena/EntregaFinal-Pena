import { alerta } from '../../SweetAlert/sweetAlert.js'

import { carritoLength, mostrarProdCarrito } from '../Carrito/carrito.js'
import { calcularTotal } from '../Carrito/calcularTotal.js'
import { calcularCantidad } from '../Carrito/calcularCantidad.js'
import { borrarLocalStorage, guardarLocalStorage } from '../localStorage.js'
import { animEliminarCuenta } from '../../animations/eliminarCuenta.js'

export function eliminarCuenta(e) {
	const userActive = JSON.parse(localStorage.getItem('userActive'))
	const dbUsers = JSON.parse(localStorage.getItem('usuarios'))
	const userFiltered = dbUsers.find((user) => {
		return user.user === userActive
	})
	if (userFiltered) {
		let eliminar = {
			title: 'Esta por eliminar su cuenta!',
			text: 'Esta seguro que desea elimiinar su cuenta?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Aceptar',
			cancelButtonText: 'Cancelar',
		}
		alerta(eliminar).then((res) => {
			if (res.isConfirmed) {
				const userFiltered = dbUsers.filter((user) => {
					return user.user !== userActive
				})
				guardarLocalStorage('usuarios', userFiltered)
				borrarLocalStorage('userActive')
				borrarLocalStorage('carrito')
				mostrarProdCarrito()
				calcularTotal()
				calcularCantidad()
				carritoLength()
				animEliminarCuenta(e)
			}
		})
	}
}

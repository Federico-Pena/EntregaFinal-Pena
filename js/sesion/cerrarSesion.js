import { alertaCerrarSesion } from '../SweetAlert/sweetAlert.js'
import { carritoLength } from '../carrito/carrito.js'
import {
	borrarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'

export const cerrarSesion = async () => {
	const result = await alertaCerrarSesion()
	if (result.isConfirmed == true) {
		borrarLocalStorage('userActive')
		document.querySelector('.logout').classList.add('hidden')
		document.querySelector('.nameUserNav').classList.add('hidden')
		document.querySelector('.eliminarCuenta').classList.add('hidden')
		document.querySelector('.btnRegistrarse').classList.remove('hidden')
		document.getElementById('btnLogin').classList.remove('hidden')
		guardarLocalStorage('carrito', [])
		carritoLength()
	}
}

import { alerta } from '../../SweetAlert/sweetAlert.js'
import { carritoLength } from '../Carrito/carrito.js'
import { borrarLocalStorage, guardarLocalStorage } from '../localStorage.js'

export const logOut = () => {
	let userAdmin = {
		title: 'Desea cerrar su sesion?',
		icon: 'warning',
		confirmButtonText: 'Aceptar',
		showCancelButton: true,
	}
	alerta(userAdmin).then((result) => {
		if (result.isConfirmed == true) {
			let carritoVacio = []
			borrarLocalStorage('userActive')
			document.querySelector('.logout').classList.add('hidden')
			document.querySelector('.nameUserNav').classList.add('hidden')
			document.querySelector('.eliminarCuenta').classList.add('hidden')
			document.querySelector('.iraReg').classList.remove('hidden')
			document.getElementById('login').classList.remove('hidden')
			guardarLocalStorage('carrito', carritoVacio)
			carritoLength()
		}
	})
}

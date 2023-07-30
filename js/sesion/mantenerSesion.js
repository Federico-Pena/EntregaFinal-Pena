import { buscarLocalStorage } from '../localStorage/helpers.js'

/**
 * Función para mantener activa la sesión si no se cierra manualmente
 */
export function mantenerSesion() {
	const userActive = buscarLocalStorage('userActive')
	if (userActive.length) {
		document.querySelector('.nameUserNav').classList.remove('hidden')
		document.querySelector('.logout ').classList.remove('hidden')
		document.querySelector('#btnLogin').classList.add('hidden')
		document.querySelector('.btnRegistrarse').classList.add('hidden')
		if (userActive === 'admin') {
			document.getElementById('agregar').classList.remove('hidden')
		}
	} else return
}

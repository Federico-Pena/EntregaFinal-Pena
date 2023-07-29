import { buscarLocalStorage } from '../localStorage/helpers.js'

/**
 * Funcion para mantener activa la sesion si no se cierra manuelmente
 */
export function mantenerSesion() {
	const userActive = buscarLocalStorage('userActive')
	if (userActive.length) {
		document.querySelector('.nameUserNav').classList.remove('hidden')
		document.querySelector('.logout ').classList.remove('hidden')
		document.querySelector('#btnLogin').classList.add('hidden')
		document.querySelector('.btnRegistrarse').classList.add('hidden')
		if (userActive === 'admin@gmail.com') {
			document.getElementById('agregar').classList.remove('hidden')
		}
	} else return
}

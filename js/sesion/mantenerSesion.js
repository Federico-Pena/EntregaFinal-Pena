import { buscarLocalStorage } from '../localStorage/helpers.js'

/**
 * Funcion para mantener activa la sesion si no se cierra manuelmente
 */
export function mantenerSesion() {
	const nameUserNav = document.querySelector('.nameUserNav')
	const userActive = buscarLocalStorage('userActive')
	if (userActive.length) {
		nameUserNav.innerHTML = userActive
		document.querySelector('.nameUserNav').classList.remove('hidden')
		document.querySelector('.logout ').classList.remove('hidden')
		document.querySelector('#btnLogin').classList.add('hidden')
		document.querySelector('.btnRegistrarse').classList.add('hidden')
	} else return
}

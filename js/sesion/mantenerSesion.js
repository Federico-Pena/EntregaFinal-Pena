import { buscarLocalStorage } from '../localStorage/helpers.js'

/**
 * Función para mantener activa la sesión si no se cierra manualmente
 */
export function mantenerSesion() {
	const userActive = buscarLocalStorage('userActive')
	if (userActive.length) {
		let user =document.querySelector('.nameUserNav')
	let btnCerrarSesion=	document.querySelector('.logout ')
		let btnIniciarSecion= document.querySelector('#btnLogin')
		let btnIniciarRegistrarse=document.querySelector('.btnRegistrarse')
		user.classList.remove('hidden')
		btnCerrarSesion.classList.remove('hidden')
		btnIniciarSecion.classList.add('hidden')
		btnIniciarRegistrarse.classList.add('hidden')
		if (userActive === 'admin') {
		   let linkAgregar= document.getElementById('agregar')
			linkAgregar.classList.remove('hidden')
		}
	} else return
}

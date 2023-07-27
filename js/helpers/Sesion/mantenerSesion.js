/**
 * Funcion para mantener activa la sesion si no se cierra manuelmente
 */
export function mantenerSesion() {
	const nameUserNav = document.querySelector('.nameUserNav')
	if (localStorage.getItem('userActive') !== null) {
		nameUserNav.innerHTML = JSON.parse(localStorage.getItem('userActive'))
		document.querySelector('.nameUserNav').classList.remove('hidden')
		document.querySelector('.logout ').classList.remove('hidden')
		document.querySelector('#login').classList.add('hidden')
		document.querySelector('.iraReg').classList.add('hidden')
	} else return
}

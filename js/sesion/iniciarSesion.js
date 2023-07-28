import {
	alertaBienvenidaLogin,
	alertaFallaLogin,
	alertaLogin,
	alertaLoginAdmin,
} from '../SweetAlert/sweetAlert.js'
import { animLogin } from '../animations/sesion/login.js'
import { buscarUsuarioLogin } from '../helpers/buscarUsuarioLogin.js'
import { guardarLocalStorage } from '../localStorage/helpers.js'

export const login = async () => {
	const result = await alertaLogin()
	if (result.value) {
		const userName = result.value.user
		const userPass = result.value.password
		let user = {
			userName,
			userPass,
		}
		const existe = buscarUsuarioLogin(user)
		if (existe) {
			alertaBienvenidaLogin(userName)
			animLogin()
		} else {
			if (
				result.value.user === 'admin@gmail.com' &&
				result.value.password === 'admin'
			) {
				alertaLoginAdmin(result.value.user)
				guardarLocalStorage('userActive', result.value.user)
				const btnlogin = document.getElementById('btnLogin')
				const agregar = document.getElementById('agregar')
				btnlogin.classList.add('hidden')
				agregar.classList.remove('hidden')
				agregar.classList.add('animate__bounce')
				setTimeout(() => {
					agregar.classList.remove('animate__bounce')
				}, 1000)
				const nameUserNav = document.querySelector('.nameUserNav')
				nameUserNav.innerHTML = result.value.user
				nameUserNav.classList.remove('hidden')
				nameUserNav.classList.add('animate__bounce')
				const btnRegistrarse = document.querySelector('.btnRegistrarse')
				btnRegistrarse.classList.add('hidden')
			} else {
				alertaFallaLogin()
			}
		}
	}
}

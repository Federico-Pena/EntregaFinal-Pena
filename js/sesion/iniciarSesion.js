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
	const btnLogin = document.querySelector('#btnLogin')
	btnLogin.innerHTML = `<div class="custom-loader"></div>`
	const result = await alertaLogin()
	btnLogin.innerHTML = 'Iniciar Sesión'
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
				alertaLoginAdmin('admin')
				guardarLocalStorage('userActive', 'admin')
				animLogin()
				const agregar = document.getElementById('agregar')
				agregar.classList.remove('hidden')
				agregar.classList.add('animate__bounce')
				setTimeout(() => {
					agregar.classList.remove('animate__bounce')
				}, 1000)
			} else {
				alertaFallaLogin()
			}
		}
	}
}

import {
	alertaBienvenidaRegistro,
	alertaRegistro,
	alertaUserEnUso,
} from '../SweetAlert/sweetAlert.js'
import { buscarUsuarioRegistro } from './buscarUsuarioRegistro.js'
import { guardarUsuario } from './guardarUsuario.js'

export const registrarse = async () => {
	const btnRegistrarse = document.querySelector('.btnRegistrarse')
	btnRegistrarse.innerHTML = ''
	let loader = document.createElement('div')
	loader.classList.add('custom-loader')
	btnRegistrarse.append(loader)
	const confirm = await alertaRegistro()
	let textRegistrarse = document.createTextNode('Registrarse')
	btnRegistrarse.innerHTML = ''

	btnRegistrarse.append(textRegistrarse)
	if (confirm.value) {
		const userName = confirm.value.user
		const userPass = confirm.value.password
		let user = {
			userName,
			userPass,
		}
		const userRegistrado = buscarUsuarioRegistro(user)
		if (userRegistrado) {
			alertaUserEnUso()
		} else {
			guardarUsuario(user)
			alertaBienvenidaRegistro(userName)
			btnRegistrarse.classList.add('hidden')
		}
	}
}

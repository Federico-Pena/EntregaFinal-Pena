import {
	alertaBienvenidaRegistro,
	alertaRegistro,
	alertaUserEnUso,
} from '../SweetAlert/sweetAlert.js'
import { buscarUsuarioRegistro } from '../helpers/buscarUsuarioRegistro.js'
import { guardarUsuario } from '../helpers/guardarUsuario.js'

export const registrarse = async () => {
	const confirm = await alertaRegistro()
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
			const btnRegistrarse = document.querySelector('.btnRegistrarse')
			btnRegistrarse.classList.add('hidden')
		}
	}
}

import { alerta } from '../../SweetAlert/sweetAlert.js'
import { buscarUsuario, guardarUsuario } from '../userAuth.js'

/**
 * Funcion para el registro con base en sweet alert
 * Comprueba que no existan en base del nombre de usuario
 */

export function registro() {
	let preRegistro = {
		title: 'Registrarse',
		html: `<input type="email" required id="usuario" class="swal2-input" placeholder="Email">
  <input type="password" required id="password" class="swal2-input" placeholder="Contraseña">`,
		confirmButtonText: 'Registrarse',
		focusConfirm: false,
		preConfirm: () => {
			const user = Swal.getPopup().querySelector('#usuario').value
			const password = Swal.getPopup().querySelector('#password').value
			if (!user || !password) {
				Swal.showValidationMessage(`Por favor Ingrese sus credenciales`)
			}
			return { user: user, password: password }
		},
	}
	alerta(preRegistro).then((result) => {
		if (result.value) {
			const userName = result.value.user
			const userPass = result.value.password
			let user = {
				userName,
				userPass,
			}

			const userExito = buscarUsuario(user)
			if (userExito) {
				let userEnUso = {
					title: 'El nombre de usuarios ya esta en uso',
					icon: 'error',
					confirmButtonText: 'Aceptar',
				}
				alerta(userEnUso)
			} else {
				guardarUsuario(user)
				let userNuevo = {
					title: `Bienvenido ${userName}`,
					text: `Ahora inicia sesion`,
					icon: 'success',
					confirmButtonText: 'Aceptar',
				}
				alerta(userNuevo)
				const iraReg = document.querySelector('.iraReg')
				iraReg.classList.add('hidden')
			}
		}
	})
}

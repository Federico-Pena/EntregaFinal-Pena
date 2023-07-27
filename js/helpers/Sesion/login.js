import { iniciarSesion } from '../userAuth.js'
import { alerta } from '../../SweetAlert/sweetAlert.js'
import { animLogin } from '../../animations/login.js'

/**
 * Funcion para iniciar sesion con base en sweet alert.
 * Comprueba que no existan en base del nombre de usuario y su contraseña.
 * Crea un acceso especial para ver la pagina de agregar productos al stock fijo
 * con el usuario "admin@gmail.com" y la contraseña "admin"
 */
export function login() {
	let preLogin = {
		title: 'Iniciar Sesion',
		html: `<input type="email" id="usuario" class="swal2-input" placeholder="Email">
    <input type="password" required id="password" class="swal2-input" placeholder="Contraseña">`,
		confirmButtonText: 'Iniciar Sesion',
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
	alerta(preLogin).then((result) => {
		if (result.value) {
			const userName = result.value.user
			const userPass = result.value.password
			let user = {
				userName,
				userPass,
			}
			const existe = iniciarSesion(user)
			if (existe) {
				let userInicio = {
					title: `Bienvenido de nuevo ${userName}`,
					icon: 'success',
					confirmButtonText: 'Aceptar',
				}
				alerta(userInicio)
				animLogin()
			} else {
				let userFalla = {
					title: 'Credenciales incorrectas',
					icon: 'error',
					confirmButtonText: 'Aceptar',
				}
				alerta(userFalla)
				if (
					result.value.user === 'admin@gmail.com' &&
					result.value.password === 'admin'
				) {
					localStorage.setItem('userActive', result.value.user)
					const btnlogin = document.getElementById('login')
					const agregar = document.getElementById('agregar')
					btnlogin.classList.add('hidden')
					agregar.classList.remove('hidden')
					agregar.classList.add('animate__bounce')
					setTimeout(() => {
						agregar.classList.remove('animate__bounce')
					}, 1000)
					let userAdmin = {
						title: `Bienvenido ${result.value.user}`,
						text: 'Ahora podra agregar productos nuevos al stock desde el menu',
						footer: '<a href="./agregarProducto.html">O has click aqui</a>',
						icon: 'success',
						confirmButtonText: 'Aceptar',
					}
					alerta(userAdmin)
					const nameUserNav = document.querySelector('.nameUserNav')
					nameUserNav.innerHTML = result.value.user
					nameUserNav.classList.remove('hidden')
					nameUserNav.classList.add('animate__bounce')
					const iraReg = document.querySelector('.iraReg')
					iraReg.classList.add('hidden')
				}
			}
		}
	})
}

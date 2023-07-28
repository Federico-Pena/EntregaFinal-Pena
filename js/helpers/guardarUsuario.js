import {
	borrarLocalStorage,
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'

/**
 * @param {object} usuario
 * Nombre de Usuario y Contraseña
 * @return {boolean}
 */
export const guardarUsuario = (user) => {
	let nombre = user.userName
	let pass = user.userPass
	const salt = dcodeIO.bcrypt.genSaltSync(10)
	const userName = dcodeIO.bcrypt.hashSync(nombre, salt)
	const userPass = dcodeIO.bcrypt.hashSync(pass, salt)
	let usuario = {
		user: userName,
		pass: userPass,
		tarjeta: '',
	}
	const dbUsers = buscarLocalStorage('usuarios')
	if (dbUsers.length) {
		dbUsers.push(usuario)
		localStorage.removeItem('usuarios')
		guardarLocalStorage('usuarios', dbUsers)
	} else {
		borrarLocalStorage('usuarios')
		guardarLocalStorage('usuarios', [usuario])
	}
}

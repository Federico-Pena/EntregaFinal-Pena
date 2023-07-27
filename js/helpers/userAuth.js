import { borrarLocalStorage, guardarLocalStorage } from './localStorage.js'

/**
 * @param {string} userName
 * Nombre de Usuario
 * @param {string} password
 * Contraseña de Usuario
 * @Info
 * Guarda el usuario en localStorage
 */
export const iniciarSesion = (user) => {
	const { userName, userPass } = user
	const dbUsers = JSON.parse(localStorage.getItem('usuarios'))
	if (dbUsers && dbUsers.length) {
		const userMatch = dbUsers.find((user) => {
			const decryptedUsername = dcodeIO.bcrypt.compareSync(userName, user.user)
			const decryptedPassword = dcodeIO.bcrypt.compareSync(userPass, user.pass)
			return decryptedUsername && decryptedPassword
		})
		userMatch && guardarLocalStorage('userActive', userMatch.user)
		return userMatch ? true : false
	}
	return false
}

/**
 * @param {object} userName
 * objecto de Usuario
 * @return {boolean}
 */
export const buscarUsuario = (user) => {
	let nombre = user.userName
	const dbUsers = JSON.parse(localStorage.getItem('usuarios'))
	if (dbUsers && dbUsers.length) {
		const filtro = dbUsers.filter((user) => {
			const decryptedUsername = dcodeIO.bcrypt.compareSync(nombre, user.user)
			return decryptedUsername && decryptedUsername
		})
		return filtro.length ? true : false
	} else {
		return false
	}
}
/**
 * @param {object} usuario
 * Nombre de Usuario y Contraseña
 * {
 * user,
 * password
 * }
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
	const dbUsers = JSON.parse(localStorage.getItem('usuarios'))
	if (dbUsers && dbUsers.length) {
		dbUsers.push(usuario)
		localStorage.removeItem('usuarios')
		guardarLocalStorage('usuarios', dbUsers)
	} else {
		borrarLocalStorage('usuarios')
		guardarLocalStorage('usuarios', [usuario])
	}
}

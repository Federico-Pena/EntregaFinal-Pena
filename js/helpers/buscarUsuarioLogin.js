import {
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'

/**
 * @param {string} userName
 * Nombre de Usuario
 * @param {string} password
 * Contraseña de Usuario
 * @Info
 * Guarda el usuario en localStorage
 */
export const buscarUsuarioLogin = (user) => {
	const { userName, userPass } = user
	const dbUsers = buscarLocalStorage('usuarios')
	if (dbUsers.length) {
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

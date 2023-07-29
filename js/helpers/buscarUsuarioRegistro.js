/* global dcodeIO*/
import { buscarLocalStorage } from '../localStorage/helpers.js'

/**
 * @param {object} userName
 * objecto de Usuario
 * @return {boolean}
 */
export const buscarUsuarioRegistro = (user) => {
	let nombre = user.userName
	const dbUsers = buscarLocalStorage('usuarios')
	if (dbUsers.length) {
		const filtro = dbUsers.filter((user) => {
			const decryptedUsername = dcodeIO.bcrypt.compareSync(nombre, user.user)
			return decryptedUsername && decryptedUsername
		})
		return filtro.length ? true : false
	} else {
		return false
	}
}

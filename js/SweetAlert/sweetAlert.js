/**
 *
 * @param {object} info
 * objeto de informacion de sweet alert
 * @param {fucntion} info.preConfirm
 * funcion de confirmacion de sweet alert
 */
export const alerta = (info) => {
	return Swal.fire({
		title: info.title,
		text: info.text,
		html: info.html,
		icon: info.icon,
		confirmButtonText: info.confirmButtonText,
		showCancelButton: info.showCancelButton,
		focusConfirm: info.focusConfirm,
		footer: info.footer,
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
		preConfirm: info.preConfirm,
	})
}
/**
 *
 * @param {object} info
 * objeto de informacion de sweet alert
 */
export const alertaPreconfirm = (info) => {
	return Swal.fire({
		title: info.title,
		html: info.html,
		confirmButtonText: info.confirmButtonText,
		focusConfirm: info.focusConfirm,
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
		preConfirm: () => {
			const user = Swal.getPopup().querySelector('#usuario').value
			const password = Swal.getPopup().querySelector('#password').value
			if (!user || !password) {
				Swal.showValidationMessage(`Por favor Ingrese sus credenciales`)
			}
			return { user: user, password: password }
		},
	})
}

/**
 *
 * @param {object} info
 * objeto de informacion de sweet alert
 */
export const alertaPreconfirmCompra = (info, user) => {
	return Swal.fire({
		title: info.title,
		html: info.html,
		confirmButtonText: info.confirmButtonText,
		showCancelButton: info.showCancelButton,
		footer: info.footer,
		focusConfirm: info.focusConfirm,
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
		preConfirm: () => {
			const cardNum1 = Swal.getPopup().querySelector('#num1').value
			const cardNum2 = Swal.getPopup().querySelector('#num2').value
			const cardNum3 = Swal.getPopup().querySelector('#num3').value
			const cardNum4 = Swal.getPopup().querySelector('#num4').value
			if (
				!cardNum1 ||
				cardNum1.length != 4 ||
				!cardNum2 ||
				cardNum2.length != 4 ||
				!cardNum3 ||
				cardNum3.length != 4 ||
				!cardNum4 ||
				cardNum4.length != 4
			) {
				Swal.showValidationMessage(`Cada numero debe ser de 4 Digitos`)
			}
			const salt = dcodeIO.bcrypt.genSaltSync(10)
			const card2 = dcodeIO.bcrypt.hashSync(cardNum2, salt)
			const card3 = dcodeIO.bcrypt.hashSync(cardNum3, salt)
			const card4 = dcodeIO.bcrypt.hashSync(cardNum4, salt)
			user.tarjeta = `${cardNum1}-${card2}-${card3}-${card4}`
		},
	})
}

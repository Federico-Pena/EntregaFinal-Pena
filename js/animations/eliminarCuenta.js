export const animEliminarCuenta = (event) => {
	const logOut = document.querySelector('.logout')
	logOut.classList.add('animate__bounceOut')
	const eliminarCuenta = document.querySelector('.eliminarCuenta')
	eliminarCuenta.classList.add('animate__bounceOut')
	const userName = event.target.parentElement.children[3]
	userName.classList.add('animate__bounceOut')

	setTimeout(() => {
		document.querySelector('.iraReg ').classList.remove('hidden')
		document.querySelector('#login ').classList.remove('hidden')
		logOut.classList.remove('animate__bounceOut')
		logOut.classList.add('hidden')
		userName.classList.remove('animate__bounceOut')
		userName.classList.add('hidden')
		eliminarCuenta.classList.remove('animate__bounceOut')
		eliminarCuenta.classList.add('hidden')
	}, 1000)
}

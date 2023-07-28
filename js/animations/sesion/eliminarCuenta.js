export const animEliminarCuenta = (event) => {
	const logOut = document.querySelector('.logout')
	logOut.classList.add('animate__bounceOut')
	const eliminarCuenta = document.querySelector('.eliminarCuenta')
	eliminarCuenta.classList.add('animate__bounceOut')
	const userName = document.querySelector('.nameUserNav')
	userName.classList.add('animate__bounceOut')
	setTimeout(() => {
		document.querySelector('.btnRegistrarse ').classList.remove('hidden')
		document.querySelector('#btnLogin ').classList.remove('hidden')
		logOut.classList.remove('animate__bounceOut')
		logOut.classList.add('hidden')
		userName.classList.remove('animate__bounceOut')
		userName.classList.add('hidden')
		eliminarCuenta.classList.remove('animate__bounceOut')
		eliminarCuenta.classList.add('hidden')
	}, 1000)
}

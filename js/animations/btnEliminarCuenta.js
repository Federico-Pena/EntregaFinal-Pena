export const animBtnEliminarCuenta = () => {
	const eliminarCuenta = document.querySelector('.eliminarCuenta')
	if (eliminarCuenta.classList.contains('hidden')) {
		eliminarCuenta.classList.remove('hidden')
		eliminarCuenta.classList.add('animate__tada')
		setTimeout(() => {
			eliminarCuenta.classList.remove('animate__tada')
		}, 800)
	} else {
		eliminarCuenta.classList.add('animate__bounceOut')
		setTimeout(() => {
			eliminarCuenta.classList.remove('animate__bounceOut')
			eliminarCuenta.classList.add('hidden')
		}, 800)
	}
}

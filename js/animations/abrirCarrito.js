export const animAbrirCarrito = () => {
	const carrito = document.querySelector('.carrito')
	document.querySelector('.nombreCarrito').textContent =
		localStorage.getItem('userActive')
	const container = document.querySelector('.container')
	carrito.classList.remove('hidden')
	carrito.classList.remove('animate__backOutRight')
	setTimeout(() => {
		container.classList.add('hidden')
	}, 1000)
}

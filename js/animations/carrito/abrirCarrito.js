export const animAbrirCarrito = () => {
	const carrito = document.querySelector('.carrito')
	const main = document.querySelector('main')
	main.classList.add('hidden')
	carrito.classList.remove('hidden')
	carrito.classList.add('animate__backInLeft')
	setTimeout(() => {
		carrito.classList.remove('animate__backInLeft')
	}, 1500)
}

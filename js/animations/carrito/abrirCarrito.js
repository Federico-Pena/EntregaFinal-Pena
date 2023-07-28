export const animAbrirCarrito = () => {
	const carrito = document.querySelector('.carrito')
	carrito.classList.remove('hidden')
	carrito.classList.add('animate__backInLeft')
	setTimeout(() => {
		carrito.classList.remove('animate__backInLeft')
	}, 1500)
}

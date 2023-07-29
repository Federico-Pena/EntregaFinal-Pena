import {
	alertaConfirmarCompra,
	alertaDebeIniciarSesión,
	alertaGraciasPorSuCompra,
	alertaTarjeta,
} from '../SweetAlert/sweetAlert.js'
import {
	borrarLocalStorage,
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'
import { calcularTotal } from './calcularTotal.js'
import { mostrarProdCarrito } from './carrito.js'

export async function comprar() {
	const userActive = buscarLocalStorage('userActive')
	if (userActive.length) {
		let total = 0
		const prodsCarrito = document.querySelectorAll('.prodCarrito')
		if (prodsCarrito.length) {
			prodsCarrito.forEach((prod) => {
				console.log(prod.querySelector('.prodPrecio'))
				const precio = parseInt(prod.querySelector('.prodPrecio').id)
				const cantidad = parseInt(prod.querySelector('.cantidad').textContent)
				total += precio * cantidad
			})
			const dbUsers = buscarLocalStorage('usuarios')
			if (dbUsers.length) {
				const userActive = buscarLocalStorage('userActive')
				const userMatch = dbUsers.find((user) => {
					const decryptedUsername = user.user === userActive
					return decryptedUsername
				})
				if (userMatch) {
					if (userMatch.tarjeta === '') {
						const res = await alertaTarjeta(userMatch)
						if (res.isConfirmed == true) {
							const filterUsers = dbUsers.filter(
								(user) => user.user !== userMatch.user
							)
							filterUsers.push(userMatch)
							guardarLocalStorage('usuarios', filterUsers)
							alertaGraciasPorSuCompra()
							const divCarrito = document.querySelector('.divCarrito')
							divCarrito.classList.add('animate__flipOutY')
							borrarLocalStorage('carrito')
							setTimeout(() => {
								mostrarProdCarrito()
								calcularTotal()
								divCarrito.classList.remove('animate__flipOutY')
							}, 1000)
						}
					} else {
						const res = await alertaConfirmarCompra(userMatch, total)
						if (res.isConfirmed) {
							alertaGraciasPorSuCompra()
							const divCarrito = document.querySelector('.divCarrito')
							divCarrito.classList.add('animate__flipOutY')
							borrarLocalStorage('carrito')
							setTimeout(() => {
								mostrarProdCarrito()
								calcularTotal()
								divCarrito.classList.remove('animate__flipOutY')
							}, 1000)
						}
					}
				}
			}
		}
	} else {
		const carrito = buscarLocalStorage('carrito')
		if (!carrito.length) {
			return
		} else {
			alertaDebeIniciarSesión()
		}
	}
}

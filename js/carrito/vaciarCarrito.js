import { alertaVaciarCarrito } from '../SweetAlert/sweetAlert.js'
import {
	borrarLocalStorage,
	buscarLocalStorage,
} from '../localStorage/helpers.js'
import { calcularTotal } from './calcularTotal.js'
import { carritoLength, mostrarProdCarrito } from './carrito.js'

export async function vaciarCarrito(e) {
	const btnVAciar = e.currentTarget
	const db = buscarLocalStorage('carrito')
	if (db.length) {
	   btnVAciar.innerHTML=""
	   let loader = document.createElement("div")
	loader.classList.add("custom-loader")
	btnVAciar.append(loader)
		const res = await alertaVaciarCarrito()
		let textBtn = document.createTextNode("Vaciar Carrito")
		btnVAciar.innerHTML=""
btnVAciar.append(textBtn)
		if (res.isConfirmed) {
			const divCarrito = document.querySelector('.divCarrito')
			divCarrito.classList.add('animate__flipOutY')
			borrarLocalStorage('carrito')
			setTimeout(() => {
				mostrarProdCarrito()
				carritoLength()
				calcularTotal()
				divCarrito.classList.remove('animate__flipOutY')
			}, 1000)
		}
	}
}

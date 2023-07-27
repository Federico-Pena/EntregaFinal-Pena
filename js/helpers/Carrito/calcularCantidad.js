import { calcularTotal } from './calcularTotal.js'

/**
 * Funcion para variar la cantidad. Si es igual a uno el menos se "desactiva"
 */
export function calcularCantidad() {
	const prodCarrito = document.querySelectorAll('.prodCarrito')
	prodCarrito.forEach((prod) => {
		prod.addEventListener('click', (e) => {
			if (e.target.className === 'restar') {
				if (prod.children[5].textContent < 2) {
					prod.children[5].textContent = 1
					calcularTotal()
				} else {
					prod.children[5].textContent--
					calcularTotal()
				}
			}
			if (e.target.className === 'sumar') {
				prod.children[5].textContent++
				calcularTotal()
			}
		})
	})
}

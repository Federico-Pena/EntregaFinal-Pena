import { alerta } from '../../SweetAlert/sweetAlert.js'
import { calcularCantidad } from './calcularCantidad.js'
import { calcularTotal } from './calcularTotal.js'
import { mostrarProdCarrito } from './carrito.js'

/**
 * Funcion para eliminar productos al carrito en base a su id que esta en la card pero hidden
 * El parametro es el evento de click
 */
export function eliminarDelCarrito(e) {
	if (e.target.name == 'btnBorrarCarrito') {
		let idProd = e.target.parentElement.children[0].textContent
		let db = JSON.parse(localStorage.getItem('carrito'))
		db.forEach((prod, index) => {
			if (prod.id == idProd) {
				let eliminar = {
					title: 'Esta por eliminar un producto!',
					text: 'Desea elimiinar el producto del carrito',
					showCancelButton: true,
					confirmButtonText: 'Aceptar',
					cancelButtonText: 'Cancelar',
				}
				alerta(eliminar).then((res) => {
					if (res.isConfirmed === true) {
						e.target.parentElement.classList.add('animate__flipOutY')
						db.splice(index, 1)
						localStorage.setItem('carrito', JSON.stringify(db))
						setTimeout(() => {
							mostrarProdCarrito()
							calcularTotal()
							calcularCantidad()
						}, 1000)
					}
				})
			}
		})
	}
}

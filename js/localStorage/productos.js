import { alertaEliminarProducto } from '../SweetAlert/sweetAlert.js'
import { mostrarProd } from '../agregarProducto.js'
import { buscarLocalStorage, guardarLocalStorage } from './helpers.js'

/**
 *
 * @param {object} producto
 * El objeto creado a partir del formulario
 * @Info Guarda el producto en localStorage
 * @Info Pagina Agregar Productos
 */
export const guardarProducto = (producto) => {
	const DbProductos = buscarLocalStorage('Productos')
	if (!DbProductos.length) {
		guardarLocalStorage('Productos', [producto])
	} else {
		DbProductos.push(producto)
		guardarLocalStorage('Productos', DbProductos)
	}
	mostrarProd()
}
/**
 * @Info Metodo para eliminar un producto desde el stock fijo desde un boton en la card del producto
 * @Info Pagina Agregar Productos
 */
const eliminar = (e) => {
	const idCard = e.currentTarget.id
	const DbProductos = buscarLocalStorage('Productos')
	DbProductos.forEach(async (prod, index) => {
		if (parseInt(prod.ID) === parseInt(idCard)) {
			const res = await alertaEliminarProducto()
			if (res.isConfirmed) {
				DbProductos.splice(index, 1)
				guardarLocalStorage('Productos', DbProductos)
				mostrarProd()
			}
		}
		const DbCarrito = buscarLocalStorage('Carrito')
		DbCarrito.forEach((prod, index) => {
			if (prod.ID == idCard) {
				DbCarrito.splice(index, 1)
				guardarLocalStorage('carrito', DbCarrito)
				mostrarProd()
			}
		})
	})
}
export const borrarProd = () => {
	const stock = document.getElementById('stock')
	const btEliminar = stock.querySelectorAll('.btnBorrar')
	btEliminar.forEach((btn) => {
		btn.addEventListener('click', eliminar)
	})
}

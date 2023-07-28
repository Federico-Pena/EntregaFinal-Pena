import { alertaProductoEnCarrito } from '../SweetAlert/sweetAlert.js'
import {
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'
import { carritoLength } from './carrito.js'

const crearProdParaCarrito = (event) => {
	const btnCarrito = document.querySelector('#btnCarrito')
	btnCarrito.children[0].classList.add('animate__bounce')
	setTimeout(() => {
		btnCarrito.children[0].classList.remove('animate__bounce')
	}, 1000)
	let foto = event.target.parentElement.children[0].src
	let nombre = event.target.parentElement.children[1].textContent
	let precio = parseFloat(
		event.target.parentElement.children[4].textContent.split(' ')[1]
	)
	const prodCarrito = {
		id: Date.now(),
		nombre: nombre,
		foto: foto,
		precio: precio,
		cantidad: 1,
	}
	return prodCarrito
}
export const agregarAlCarrito = (e) => {
	if (e.target.className == 'btnAgregar') {
		const db = buscarLocalStorage('carrito')
		const producto = crearProdParaCarrito(e)
		if (db.length) {
			const filtro = db.filter((prod) => prod.nombre === producto.nombre)
			if (filtro.length) {
				alertaProductoEnCarrito()
			} else {
				db.push(producto)
				guardarLocalStorage('carrito', db)
				carritoLength()
			}
		} else {
			guardarLocalStorage('carrito', [producto])
			carritoLength()
		}
	}
}

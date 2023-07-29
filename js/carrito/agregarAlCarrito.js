import {
	alertaAgregadoEnCarrito,
	alertaProductoEnCarrito,
} from '../SweetAlert/sweetAlert.js'
import {
	buscarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'
import { carritoLength } from './carrito.js'

const crearProdParaCarrito = (event) => {
	const id = event.currentTarget.id
	const card = event.currentTarget.parentElement
	const foto = card.querySelector('.imgProd').id
	const nombre = card.querySelector('.nombreProd').id
	const precio = card.querySelector('.precioProd').id
	const btnCarrito = document.querySelector('#btnCarrito')
	btnCarrito.children[0].classList.add('animate__bounce')
	setTimeout(() => {
		btnCarrito.children[0].classList.remove('animate__bounce')
	}, 1000)
	const prodCarrito = {
		id: id,
		nombre: nombre,
		foto: foto,
		precio: precio,
		cantidad: 1,
	}
	return prodCarrito
}

export const agregarAlCarrito = (event) => {
	const id = event.currentTarget.id
	const db = buscarLocalStorage('carrito')
	const producto = crearProdParaCarrito(event)
	if (db.length) {
		const filtro = db.find((prod) => parseInt(prod.id) === parseInt(id))
		if (filtro) {
			alertaProductoEnCarrito()
		} else {
			db.push(producto)
			guardarLocalStorage('carrito', db)
			carritoLength()
			alertaAgregadoEnCarrito()
		}
	} else {
		guardarLocalStorage('carrito', [producto])
		carritoLength()
		alertaAgregadoEnCarrito()
	}
}

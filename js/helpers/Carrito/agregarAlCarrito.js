/**
 * Funcion para agregar productos al carrito
 * parametro = evento
 * retorna el objeto prodCarrito
 * @param {Object}
 */

import { alerta } from '../../SweetAlert/sweetAlert.js'
import { guardarLocalStorage } from '../localStorage.js'
import { carritoLength } from './carrito.js'

export function agregarAlCarrito(e) {
	const btnCarrito = document.querySelector('#btnCarrito')
	btnCarrito.children[0].classList.add('animate__bounce')
	setTimeout(() => {
		btnCarrito.children[0].classList.remove('animate__bounce')
	}, 1000)
	let foto = e.target.parentElement.children[0].src
	let nombre = e.target.parentElement.children[1].textContent
	let precio = parseFloat(
		e.target.parentElement.children[4].textContent.split(' ')[1]
	)
	const prodCarrito = {}
	prodCarrito.id = Date.now()
	prodCarrito.nombre = nombre
	prodCarrito.foto = foto
	prodCarrito.precio = precio
	return prodCarrito
}

export const onClickAgregar = (e) => {
	if (e.target.className == 'btnAgregar') {
		const db = JSON.parse(localStorage.getItem('carrito'))
		const producto = agregarAlCarrito(e)
		if (db) {
			const filtro = db.filter((prod) => prod.nombre === producto.nombre)
			if (filtro.length) {
				let enCarrito = {
					title: 'Producto en el carrito',
					icon: 'info',
					confirmButtonText: 'Aceptar',
				}
				alerta(enCarrito)
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

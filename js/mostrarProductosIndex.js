import { buscarLocalStorage } from './localStorage/helpers.js'
import { observerFunction } from './observer.js'

export const mostrarProductos = async () => {
	const divProductos = document.getElementById('divProductos')

	const data = await fetch('./productos.json')
	const { productos } = await data.json()
	const BD = buscarLocalStorage('Productos')
	BD.push(...productos)
	if (BD.length) {
		BD.forEach((prod) => {
			let cardProducto = document.createElement('div')
			cardProducto.classList.add('cardProducto')
			/* Imagen */
			let imagen = document.createElement('img')
			imagen.classList.add('imgProd')
			imagen.setAttribute(
				'id',
				`${prod.foto || '../assets/productos/productoSinImagen.png'}`
			)
			imagen.setAttribute(
				'src',
				`https://placehold.co/200/ffffff1e/000?text=...`
			)
			imagen.setAttribute('alt', `${prod.nombre}`)
			imagen.setAttribute('title', `${prod.nombre}`)
			/* Nombre */
			let nombre = document.createElement('p')
			nombre.classList.add('nombreProd')
			nombre.setAttribute('id', prod.nombre)
			let nombreText = document.createTextNode(prod.nombre)
			nombre.appendChild(nombreText)
			/* Detalles */
			let smallDetalles = document.createElement('small')
			let smallDetallesText = document.createTextNode(prod.detalles)
			smallDetalles.appendChild(smallDetallesText)
			/* Categoría */
			let smallCategoría = document.createElement('small')
			smallCategoría.classList.add('smallCategoría')

			smallCategoría.setAttribute('id', prod.categoría)
			let smallCategoríaText = document.createTextNode(prod.categoría)
			smallCategoría.appendChild(smallCategoríaText)
			/* Precio */
			let precio = document.createElement('strong')
			let precioText = document.createTextNode(`$ ${prod.precio}`)
			precio.classList.add('precioProd')
			precio.setAttribute('id', `${prod.precio}`)
			precio.appendChild(precioText)
			/* Botón */
			let buttonAgregar = document.createElement('button')
			buttonAgregar.classList.add('btnAgregar')
			buttonAgregar.setAttribute('id', prod.ID)
			buttonAgregar.setAttribute('title', `Agregar al Carrito`)
			let buttonAgregarText = document.createTextNode('Agregar al Carrito')
			buttonAgregar.appendChild(buttonAgregarText)
			let icono = document.createElement('i')
			icono.classList.add('fa-solid')
			icono.classList.add('fa-cart-shopping')
			buttonAgregar.appendChild(icono)
			/* Card */
			cardProducto.appendChild(imagen)
			cardProducto.appendChild(nombre)
			cardProducto.appendChild(smallDetalles)
			cardProducto.appendChild(smallCategoría)
			cardProducto.appendChild(precio)
			cardProducto.appendChild(buttonAgregar)
			divProductos.appendChild(cardProducto)
		})
	}
	observerFunction()
}

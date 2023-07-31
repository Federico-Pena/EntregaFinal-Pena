import { buscarLocalStorage } from '../localStorage/helpers.js'

/**
 * @Info Método para mostrar el producto agregado bajo el formulario
 * @Info Pagina Agregar Productos
 */
export const mostrarProd = () => {
	const DbProductos = buscarLocalStorage('Productos')
	if (!DbProductos.length) {
		const productos = document.querySelector('.productos')
		productos.innerHTML = ''
		const cardProducto = document.createElement('div')
		cardProducto.classList.add('cardProducto')
		const ListaVacia = document.createElement('strong')
		ListaVacia.classList.add('ListaVacia')
		const ListaVaciaText = document.createTextNode(
			'Agrega Productos a la lista'
		)
		ListaVacia.appendChild(ListaVaciaText)
		cardProducto.append(ListaVacia)
		productos.append(cardProducto)
	} else {
		const stock = document.getElementById('stock')
		stock.innerHTML = ''
		DbProductos.forEach((prod) => {
			const cardProducto = document.createElement('div')
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
				`${prod.foto || '../assets/productos/productoSinImagen.png'}`
			)
			imagen.setAttribute('alt', `${prod.nombre}`)
			imagen.setAttribute('title', `${prod.nombre}`)
			/* Nombre */
			let nombre = document.createElement('p')
			let nombreText = document.createTextNode(prod.nombre)
			nombre.appendChild(nombreText)
			/* Detalles */
			let smallDetalles = document.createElement('small')
			let smallDetallesText = document.createTextNode(prod.detalles)
			smallDetalles.appendChild(smallDetallesText)
			/* Categoría */
			let smallCategoría = document.createElement('small')
			let smallCategoríaText = document.createTextNode(prod.categoría)
			smallCategoría.appendChild(smallCategoríaText)
			/* Precio */
			let precio = document.createElement('strong')
			let precioText = document.createTextNode(`$ ${prod.precio}`)
			precio.classList.add('precioProd')
			precio.setAttribute('id', prod.precio)
			precio.appendChild(precioText)
			/* Botón */
			let buttonAgregar = document.createElement('button')
			buttonAgregar.classList.add('btnBorrar')
			buttonAgregar.setAttribute('id', `${prod.ID}`)
			buttonAgregar.setAttribute('title', `Borrar Producto`)
			let icono = document.createElement('i')
			icono.classList.add('fa-solid')
			icono.classList.add('fa-circle-xmark')
			icono.setAttribute('id', `${prod.ID}`)
			buttonAgregar.appendChild(icono)
			/* Card */
			cardProducto.appendChild(imagen)
			cardProducto.appendChild(nombre)
			cardProducto.appendChild(smallDetalles)
			cardProducto.appendChild(smallCategoría)
			cardProducto.appendChild(precio)
			cardProducto.appendChild(buttonAgregar)
			stock.append(cardProducto)
		})
	}
}

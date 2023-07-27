import { alerta } from '../SweetAlert/sweetAlert.js'

/**
 *
 * @param {string} db
 * Nombre de la db donde se quiere guardar
 * @param {*} elemento
 * Elemento a guardar
 */
export const guardarLocalStorage = (db, elemento) => {
	localStorage.setItem(db, JSON.stringify(elemento))
}
/**
 *
 * @param {string} db
 * Nombre de la db donde se quiere Borrar
 * @Info localStorage.removeItem(db)
 */
export const borrarLocalStorage = (db) => {
	localStorage.removeItem(db)
}
/**
 *
 * @param {object} producto
 * El objeto creado a partir del formulario
 * @Info Guarda el producto en localStorage
 * @Info Pagina Agregar Productos
 */
export const guardarProducto = (producto) => {
	const DbProductos = JSON.parse(localStorage.getItem('Productos'))
	if (!DbProductos || !DbProductos.length) {
		let productos = []
		productos.push(producto)
		guardarLocalStorage('Productos', productos)
	} else {
		DbProductos.push(producto)
		guardarLocalStorage('Productos', DbProductos)
	}
	mostrarProd()
}

/**
 * @Info Metodo para mostrar el producto agregado bajo el formulario
 * @Info Pagina Agregar Productos
 */
export const mostrarProd = () => {
	const DbProductos = JSON.parse(localStorage.getItem('Productos'))
	if (!DbProductos || !DbProductos.length) {
		const stock = document.getElementById('stock')
		stock.innerHTML = ''
		const cardProducto = document.createElement('div')
		cardProducto.classList.add('cardProducto')
		cardProducto.innerHTML = `
              <strong>Agrega Productos a la lista</strong>            
  `
		stock.append(cardProducto)
	} else {
		const stock = document.getElementById('stock')
		stock.innerHTML = ''
		DbProductos.forEach((prod) => {
			const cardProducto = document.createElement('div')
			cardProducto.classList.add('cardProducto')
			cardProducto.innerHTML = `
                  <button title="Borrar Producto" class="btnBorrar" name="borrar"></button>
                  <p class="hidden">${prod.id}</p>
                  <img title="${prod.nombre}" src=${
				prod.foto || '../assets/productos/productoSinImagen.png'
			} alt="${prod.nombre}">
                  <p>${prod.nombre}</p>
                  <small>${prod.dimensiones}</small>
                  <small>${prod.caracteristicas}</small>
                  <strong>$ ${prod.precio}</strong>        
                  
      `
			stock.append(cardProducto)
		})
	}
}

/**
 * @Info Metodo para eliminar un producto desde el stock fijo desde un boton en la card del producto
 * @Info Pagina Agregar Productos
 */
export const borrarProd = () => {
	const stock = document.getElementById('stock')
	stock.addEventListener('click', (e) => {
		const DbProductos = JSON.parse(localStorage.getItem('Productos'))
		if (e.target.name === 'borrar') {
			let idCard = e.target.parentElement.childNodes[3].textContent
			DbProductos.forEach((prod, index) => {
				console.log(parseInt(prod.id) === parseInt(idCard))
				if (parseInt(prod.id) === parseInt(idCard)) {
					let eliminar = {
						title: 'Esta por eliminar un producto!',
						text: 'Desea elimiinar el producto',
						showCancelButton: true,
						confirmButtonText: 'Aceptar',
						cancelButtonText: 'Cancelar',
					}
					alerta(eliminar).then((res) => {
						if (res.isConfirmed === true) {
							DbProductos.splice(index, 1)
							guardarLocalStorage('Productos', DbProductos)
							mostrarProd()
						}
					})
				}
				const DbCarrito = JSON.parse(localStorage.getItem('carrito'))
				let nombreCard = e.target.parentElement.children[3].textContent
				DbCarrito.forEach((prod, index) => {
					if (prod.nombre == nombreCard) {
						DbCarrito.splice(index, 1)
						guardarLocalStorage('carrito', DbCarrito)
						mostrarProd()
					}
				})
			})
		}
	})
}

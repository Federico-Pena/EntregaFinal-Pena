export const mostrarProductos = () => {
	const BD = JSON.parse(localStorage.getItem('Productos'))
	const divProductos = document.getElementById('divProductos')
	if (BD) {
		BD.forEach((prod) => {
			let cardProducto = document.createElement('div')
			cardProducto.classList.add('cardProducto')
			cardProducto.innerHTML = `
									<img src="${prod.foto || '../assets/productos/productoSinImagen.png'}" alt="${
				prod.nombre
			}" title="${prod.nombre}">
									<p>${prod.nombre}</p>
									<small>${prod.caracteristicas}</small>
									<small>${prod.dimensiones} cm</small>
									<strong>$ ${prod.precio}</strong>        
									<button title="Agregar al Carrito" class="btnAgregar">Agregar al Carrito</button>
	`
			divProductos.appendChild(cardProducto)
		})
	}
}

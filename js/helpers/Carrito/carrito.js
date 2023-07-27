/**
 * Funcion para obtener productos, si los hay, y pintarlos en el carrito
 */
export function mostrarProdCarrito() {
	const db = JSON.parse(localStorage.getItem('carrito'))
	const divCarrito = document.querySelector('.divCarrito')
	if (db == null || db.length == 0) {
		divCarrito.innerHTML = `
      <img class="carritoimg" src="../assets/carritoVacio.png" alt="carrito Vacio">          
  `
	} else {
		const divCarrito = document.querySelector('.divCarrito')
		divCarrito.innerHTML = ''
		db.forEach((prod) => {
			const producto = document.createElement('div')
			producto.classList.add('prodCarrito')
			producto.classList.add('animate__animated')
			producto.innerHTML = `
                    <p class="hidden">${prod.id}</p>
                    <img src=${prod.foto} alt=${prod.nombre}>
                    <p>${prod.nombre}</p>
                    <strong>$ ${prod.precio}</strong>  
                    <span class="restar">-</span>
                    <strong class="cantidad">1</strong>
                    <span class="sumar">+</span>
                    <button name="btnBorrarCarrito"></button>                          
        `
			divCarrito.appendChild(producto)
		})
	}
}

/**
 * Funcion para mostrar la cantidad de productos en el carrito
 * con un numero animado
 */
export function carritoLength() {
	const numCarrito = document.querySelector('.carritoLength')
	let db = JSON.parse(localStorage.getItem('carrito'))
	if (db) {
		numCarrito.textContent = db.length
		numCarrito.classList.add('animate__bounce')
		setTimeout(() => {
			numCarrito.classList.remove('animate__bounce')
		}, 600)
	} else {
		numCarrito.textContent = 0
	}
}

/**
 * El parametro es cualquier texto que contenga en producto en su tarjeta para el filtro
 * @param {string}
 */
export function buscarProd(e) {
	const cardProducto = document.querySelectorAll('.cardProducto')
	let inputValue = e.target.value.toLowerCase()
	cardProducto.forEach((prod) => {
		if (prod.textContent.toLowerCase().includes(inputValue)) {
			prod.style.display = 'flex'
		} else {
			prod.style.display = 'none'
		}
	})
}

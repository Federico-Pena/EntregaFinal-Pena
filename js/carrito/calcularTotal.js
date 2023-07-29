export function calcularTotal() {
	let total = 0
	const prodCarrito = document.querySelectorAll('.prodCarrito')
	prodCarrito.forEach((prod) => {
		const precio = parseFloat(prod.querySelector('.prodPrecio').id)
		const cantidad = parseInt(prod.querySelector('.cantidad').textContent)
		let totalXprod = precio * cantidad
		total += totalXprod
	})
	const divtotal = document.querySelector('.total')
	divtotal.innerHTML = `Total de su compra: $ ${total.toFixed(2)}`
}

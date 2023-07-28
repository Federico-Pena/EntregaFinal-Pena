export function calcularTotal() {
	let total = 0
	const prodCarrito = document.querySelectorAll('.prodCarrito')
	prodCarrito.forEach((prod) => {
		let precios = parseFloat(prod.children[3].textContent.split(' ')[1])
		let cantidades = parseInt(prod.children[5].textContent)
		let totalXprod = precios * cantidades
		total += totalXprod
	})
	const divtotal = document.querySelector('.total')
	divtotal.innerHTML = `Total de su compra: $ ${total.toFixed(2)}`
}

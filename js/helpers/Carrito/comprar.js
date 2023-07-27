import { alerta, alertaPreconfirmCompra } from '../../SweetAlert/sweetAlert.js'
import { guardarLocalStorage } from '../localStorage.js'
import { calcularTotal } from './calcularTotal.js'
import { carritoLength, mostrarProdCarrito } from './carrito.js'

/**
 * Funcion que calcula el total del carrito y muestra ese total en una alerta
 * Ademas añade el num de tarjeta de en los datos del usuario
 */
export function comprar() {
	let userActive = JSON.parse(localStorage.getItem('userActive'))
	if (userActive) {
		let total = 0
		const prodsCarrito = document.querySelectorAll('.prodCarrito')
		if (prodsCarrito.length) {
			prodsCarrito.forEach((prodsCarrito) => {
				let precio = parseFloat(
					prodsCarrito.children[3].innerText.split(' ')[1]
				)
				let cantidad = parseInt(prodsCarrito.children[5].innerText)
				total += precio * cantidad
			})
			let dbUsers = JSON.parse(localStorage.getItem('usuarios'))
			if (dbUsers.length) {
				const userActive = JSON.parse(localStorage.getItem('userActive'))
				const userMatch = dbUsers.find((user) => {
					const decryptedUsername = user.user === userActive
					return decryptedUsername
				})
				if (userMatch) {
					if (userMatch.tarjeta === '') {
						let compra = {
							title: 'Ingrese el numero de su tarjeta',
							html: `<p>16 Digitos</p>
							<input type="number" id="num1" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
							<input type="number" id="num2" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
							<input type="number" id="num3" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
							<input type="number" id="num4" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;">`,
							confirmButtonText: 'Aceptar',
							footer: 'Compras sin recargos',
							focusConfirm: true,
						}
						alertaPreconfirmCompra(compra, userMatch).then((res) => {
							if (res.isConfirmed == true) {
								const filterUsers = dbUsers.filter(
									(user) => user.user !== userMatch.user
								)
								filterUsers.push(userMatch)
								guardarLocalStorage('usuarios', filterUsers)
								let gracias = {
									title: 'Gracias por su compra!',
									icon: 'success',
									showCancelButton: true,
									confirmButtonText: 'Aceptar',
								}
								alerta(gracias)
								const divCarrito = document.querySelector('.divCarrito')
								divCarrito.classList.add('animate__flipOutY')
								localStorage.setItem('carrito', JSON.stringify([]))
								setTimeout(() => {
									mostrarProdCarrito()
									calcularTotal()
									divCarrito.classList.remove('animate__flipOutY')
								}, 1000)
							}
						})
					} else {
						let comprar = {
							title: 'Confirmar Compra',
							icon: 'info',
							html: `<p>Tarjeta N° ${
								userMatch.tarjeta.split('-')[0]
							}-****-****-****</p></br><p>Total $${total}</p>`,
							showCancelButton: true,
							confirmButtonText: 'Aceptar',
						}
						alerta(comprar).then((res) => {
							if (res.isConfirmed) {
								let gracias = {
									title: 'Gracias por su compra!',
									icon: 'success',
									showCancelButton: true,
									confirmButtonText: 'Aceptar',
								}
								alerta(gracias)
								const divCarrito = document.querySelector('.divCarrito')
								divCarrito.classList.add('animate__flipOutY')
								guardarLocalStorage('carrito', [])
								setTimeout(() => {
									mostrarProdCarrito()
									calcularTotal()
									divCarrito.classList.remove('animate__flipOutY')
								}, 1000)
							}
						})
					}
				}
			}
		}
	} else {
		const carrito = JSON.parse(localStorage.getItem('carrito'))
		if (!carrito.length) {
			return
		} else {
			let gracias = {
				title: 'Debe Iniciar Sesion Para Continuar',
				icon: 'info',
				confirmButtonText: 'Aceptar',
			}
			alerta(gracias)
		}
	}
}

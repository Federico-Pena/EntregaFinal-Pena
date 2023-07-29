/* global Swal*/

import { alertaCerrarSesión } from '../SweetAlert/sweetAlert.js'
import { carritoLength } from '../carrito/carrito.js'
import {
	borrarLocalStorage,
	guardarLocalStorage,
} from '../localStorage/helpers.js'

export const cerrarSesion = async () => {
	const logout = document.querySelector('.logout')
	const nameUserNav = document.querySelector('.nameUserNav')
	const eliminarCuenta = document.querySelector('.eliminarCuenta')
	const btnRegistrarse = document.querySelector('.btnRegistrarse')
	const btnLogin = document.getElementById('btnLogin')
	const agregar = document.getElementById('agregar')
	let cargando = true
	logout.innerHTML = `<div class="custom-loader"></div>`
	const result = await alertaCerrarSesión()
	cargando = false
	logout.innerHTML = 'Cerrar Sesión'
	if (result.isConfirmed && !cargando) {
		borrarLocalStorage('userActive')
		logout.classList.add('hidden')
		nameUserNav.classList.add('hidden')
		eliminarCuenta.classList.add('hidden')
		agregar.classList.add('hidden')
		btnRegistrarse.classList.remove('hidden')
		btnLogin.classList.remove('hidden')
		guardarLocalStorage('carrito', [])
		carritoLength()
	}
}

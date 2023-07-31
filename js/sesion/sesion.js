import { animBtnEliminarCuenta } from '../animations/sesion/btnEliminarCuenta.js'
import { cerrarSesion } from './cerrarSesion.js'
import { eliminarCuenta } from './eliminarCuenta.js'
import { login } from './iniciarSesion.js'
import { registrarse } from './registrarse.js'

//	Listener del boton de registro
const btnRegistrarse = document.querySelector('.btnRegistrarse')
btnRegistrarse.addEventListener('click', registrarse)
//	Listener del boton de iniciar sesion
const btnLogin = document.getElementById('btnLogin')
btnLogin.addEventListener('click', login)
//  Listener del boton de cerrar sesion
const btnlogout = document.querySelector('.logout')
btnlogout.addEventListener('click', cerrarSesion)
// Listener para eliminar Cuenta
const btnEliminarCuenta = document.querySelector('.eliminarCuenta')
btnEliminarCuenta.addEventListener('click', eliminarCuenta)
// Listener para aparecer o desaparecer el boton de eliminar cuenta.
// click en el icono de usuario
const userName = document.querySelector('.nameUserNav')
userName.addEventListener('click', animBtnEliminarCuenta)

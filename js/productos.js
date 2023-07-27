import { mostrarProdCarrito, carritoLength } from './helpers/Carrito/carrito.js'
import { calcularCantidad } from './helpers/Carrito/calcularCantidad.js'
import { eliminarDelCarrito } from './helpers/Carrito/eliminarDelCarrito.js'
import { vaciarCarrito } from './helpers/Carrito/vaciarCarrito.js'
import { calcularTotal } from './helpers/Carrito/calcularTotal.js'
import { comprar } from './helpers/Carrito/comprar.js'
import { onClickAgregar } from './helpers/Carrito/agregarAlCarrito.js'
import { buscarProd } from './helpers/buscar.js'
import { login } from './helpers/Sesion/login.js'
import { registro } from './helpers/Sesion/registro.js'
import { mantenerSesion } from './helpers/Sesion/mantenerSesion.js'
import { eliminarCuenta } from './helpers/Sesion/eliminarCuenta.js'
import { animCerrarCarrito } from './animations/cerrarCarrito.js'
import { mostrarProductos } from './helpers/mostrarProductos.js'
import { animBtnEliminarCuenta } from './animations/btnEliminarCuenta.js'
import { animAbrirCarrito } from './animations/abrirCarrito.js'
import { logOut } from './helpers/Sesion/logOut.js'

/**
 * Listener para Mostrar Productos
 */
window.addEventListener('DOMContentLoaded', () => {
	carritoLength()
	mantenerSesion()
	mostrarProductos()
})
/**
 * Listener del input buscar
 */
const inputBuscar = document.getElementById('buscar')
inputBuscar.addEventListener('input', buscarProd)

///////////session
/**
 * Listener del boton de registro
 */
const btnRegistrarse = document.querySelector('.iraReg')
btnRegistrarse.addEventListener('click', registro)
/**
 * Listener para eliminar Cuenta
 */
const btnEliminarCuenta = document.querySelector('.eliminarCuenta')
btnEliminarCuenta.addEventListener('click', eliminarCuenta)

/**
 * Listener del boton de cerrar sesion
 */
const btnlogout = document.querySelector('.logout')
btnlogout.addEventListener('click', logOut)
/**
 * Listener del boton de iniciar sesion
 */
const btnLogin = document.getElementById('login')
btnLogin.addEventListener('click', login)
/**
 * Listener para aparecer o desaparecer el boton de eliminar cuenta.
 * Apretando en el nombre de usuario
 */
const userName = document.querySelector('.nameUserNav')
userName.addEventListener('click', animBtnEliminarCuenta)

///////////carrito
/**
 * Listener para cerrar y animar el cierre del carrito
 */
const cerrarCarrito = document.getElementById('cerrarCarrito')
cerrarCarrito.addEventListener('click', animCerrarCarrito)

/**
 * Listener para abrir y animar el carrito
 */
const abrirCarrito = document.getElementById('btnCarrito')
abrirCarrito.addEventListener('click', () => {
	animAbrirCarrito()
	mostrarProdCarrito()
	calcularCantidad()
	calcularTotal()
})
/**
 * Listener del boton de comprar
 */
const btnComprar = document.querySelector('.comprar')
btnComprar.addEventListener('click', comprar)
/**
 * Listener para eliminar un producto del carrito
 * con un boton del producto mismo
 */
const divCarrito = document.querySelector('.divCarrito')
divCarrito.addEventListener('click', (e) => eliminarDelCarrito(e))
/**
 * Listener para agregar productos a la db del carrito del localStorage
 * Y las funciones para mostrar los cambios en pantalla
 */
const cardProducto = document.querySelectorAll('.cardProducto')
if (cardProducto) {
	cardProducto.forEach((card) => {
		card.addEventListener('click', onClickAgregar)
	})
}
/**
 * Listener para vaciar el carrito completo
 */
const btnVaciarCarrito = document.querySelector('.vaciarCarrito')
btnVaciarCarrito.addEventListener('click', vaciarCarrito)

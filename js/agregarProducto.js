import {
	alertaProductoAgregado,
	alertaProductoYaExiste,
} from './SweetAlert/sweetAlert.js'
import { mostrarProd } from './agregarProductos/mostrarProductos.js'
import { borrarProd } from './agregarProductos/productos.js'
import {
	guardarLocalStorage,
	buscarLocalStorage,
} from './localStorage/helpers.js'
const formulario = document.getElementById('formulario')
const inputFoto = document.getElementById('foto')
const previewImg = document.getElementById('preview')
const producto = {}

/**
 * Listener para pre-visualizar la foto a cargar
 */
window.addEventListener('DOMContentLoaded', () => {
	mostrarProd()
})

const productos = document.querySelector('.productos')
productos.addEventListener('click', borrarProd)

inputFoto.addEventListener('change', () => {
	let foto = inputFoto.files[0]
	if (foto) {
		let fileReader = new FileReader()
		fileReader.onload = (e) => {
			previewImg.setAttribute('src', e.target.result)
			producto.foto = e.target.result
		}
		fileReader.readAsDataURL(foto)
	}
})

/**
 * Listener del formulario para agregar al localStorage
 * Y mostrar en pantalla
 */
formulario.addEventListener('submit', (e) => {
	console.log(e)
	e.preventDefault()
	const db = buscarLocalStorage('Productos')
	const inputNombre = document.getElementById('nombre').value
	const inputPrecio = document.getElementById('precio').value
	const inputDetalles = document.getElementById('Detalles').value
	const inputCategoría = document.getElementById('Categoría').value
	producto.ID = Date.now()
	producto.nombre = inputNombre
	producto.precio = inputPrecio
	producto.detalles = inputDetalles
	producto.categoría = inputCategoría
	if (db.length) {
		const filtro = db.find(
			(prod) => prod.nombre.toLowerCase() === inputNombre.toLowerCase()
		)
		if (filtro) {
			alertaProductoYaExiste()
		} else {
			db.push(producto)
			guardarLocalStorage('Productos', db)
			e.target.reset()
			previewImg.src = 'https://placehold.co/200/ffffff1e/000?text=Vista+Previa'
			producto.foto = ''
			alertaProductoAgregado()
			mostrarProd()
		}
	} else {
		db.push(producto)
		guardarLocalStorage('Productos', db)
		e.target.reset()
		previewImg.src = 'https://placehold.co/200/ffffff1e/000?text=Vista+Previa'
		producto.foto = ''
		alertaProductoAgregado()
		mostrarProd()
	}
})

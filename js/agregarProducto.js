import { alerta } from './SweetAlert/sweetAlert.js'
import {
	guardarProducto,
	mostrarProd,
	borrarProd,
} from './helpers/localStorage.js'
const formulario = document.getElementById('formulario')
const inputFoto = document.getElementById('foto')
const previewImg = document.getElementById('preview')
window.addEventListener('DOMContentLoaded', () => {
	mostrarProd()
	borrarProd()
})

const producto = {}
/**
 * Listener para previsualizar la foto a cargar
 */
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
	producto.foto = ''
})

/**
 * Listener del formulario para agregar al localStorage
 * Y mostrar en pantalla
 */
formulario.addEventListener('submit', (e) => {
	e.preventDefault()
	const inputNombre = document.getElementById('nombre').value
	const inputPrecio = document.getElementById('precio').value
	const inputDimensiones = document.getElementById('dimensiones').value
	const inputCaracteristicas = document.getElementById('caracteristicas').value
	producto.id = Date.now()
	producto.nombre = inputNombre
	producto.precio = inputPrecio
	producto.dimensiones = inputDimensiones
	producto.caracteristicas = inputCaracteristicas

	const db = JSON.parse(localStorage.getItem('Productos'))

	if (db) {
		const filtro = db.filter(
			(prod) => prod.nombre.toLowerCase() === inputNombre.toLowerCase()
		)
		if (filtro.length) {
			let atencion = {
				title: 'Atencion!',
				text: 'Hay un producto con el mismo nombre. Pruebe con otro',
				icon: 'info',
				confirmButtonText: 'Ok',
			}
			alerta(atencion)
		} else {
			guardarProducto(producto)
			e.target.reset()
			previewImg.src =
				'https://placehold.co/200/ffffff1e/000?text=Carga una imagen'
			producto.foto = ''
			let exito = {
				title: 'Producto agregado!',
				text: 'Su producto fue agregado con exito!',
				icon: 'success',
				confirmButtonText: 'Ok',
			}
			alerta(exito)
		}
	} else {
		guardarProducto(producto)
		e.target.reset()
		previewImg.src =
			'https://placehold.co/200/ffffff1e/000?text=Carga una imagen'
		producto.foto = ''
		let exito = {
			title: 'Producto agregado!',
			text: 'Su producto fue agregado con exito!',
			icon: 'success',
			confirmButtonText: 'Ok',
		}
		alerta(exito)
	}
})

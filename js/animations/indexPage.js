const titulos = document.querySelector('.titulos')
const carrusel = document.querySelector('.carrusel')
const btnIra = document.querySelector('.btnIra')
//Titulos
export const animTitulo = () => {
	return setTimeout(() => {
		titulos.classList.add('animate__bounceInLeft')
		titulos.classList.remove('hidden')
	}, 500)
}
//Carrusel
export const animCarrusel = () => {
	return setTimeout(() => {
		carrusel.classList.add('animate__bounceInDown')
		carrusel.classList.remove('hidden')
	}, 1500)
}
//Boton
export const animBtn = () => {
	setTimeout(() => {
		btnIra.classList.add('animate__bounceInUp')
		btnIra.classList.remove('hidden')
	}, 2500)
	////Se remueven todas las clases de animacion para que funcione hover
	setTimeout(() => {
		btnIra.classList.remove('animate__animated')
		btnIra.classList.remove('animate__bounceInUp')
	}, 3500)
}

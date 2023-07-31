let options = {
	root: null,
	rootMargin: '0px',
	threshold: 0,
}
export const observerFunction = (entries) => {
	const imágenes = document.querySelectorAll('.imgProd')
	imágenes.forEach((image) => observer.observe(image))
	if (entries) {
		entries.forEach((image) => {
			if (image.isIntersecting) {
				image.target.setAttribute(
					'src',
					image.target.id || '../assets/productos/productoSinImagen.png'
				)
				observer.unobserve(image.target)
			}
		})
	}
}
let observer = new IntersectionObserver(observerFunction, options)

import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { NetworkFirst } from 'workbox-strategies'

// Precaching de recursos esenciales al arrancar el Service Worker
precacheAndRoute(self.__WB_MANIFEST)

// Configuración de la estrategia "Network First" para las solicitudes GET
registerRoute(({ request }) => request.method === 'GET', new NetworkFirst())
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/sw.js')
			.then((registration) => {
				console.log('Service Worker registrado con éxito:', registration.scope)
			})
			.catch((error) => {
				console.error('Error al registrar el Service Worker:', error)
			})
	})

	// Evento para mostrar el prompt de instalación
	let deferredPrompt
	window.addEventListener('beforeinstallprompt', (e) => {
		// Previene que el prompt se muestre automáticamente
		e.preventDefault()
		// Guarda el evento para mostrar el prompt más tarde
		deferredPrompt = e
		// Puedes mostrar un botón o alguna otra interacción para que el usuario lo inicie
		// Por ejemplo, mostrar un botón "Instalar" y agregar un evento clic para que el usuario lo vea
		showInstallButton(deferredPrompt)
	})
}
function showInstallButton(deferredPrompt) {
	// Muestra el botón de instalación y agrega un evento clic para mostrar el prompt
	const installButton = document.getElementById('install-button')
	installButton.style.display = 'block'
	installButton.addEventListener('click', () => {
		// Muestra el prompt cuando el usuario hace clic en el botón
		deferredPrompt.prompt()
		// Espera a que el usuario responda al prompt
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('El usuario aceptó la instalación')
			} else {
				console.log('El usuario rechazó la instalación')
			}
			// Limpiar la referencia del evento para que no se muestre nuevamente automáticamente
			deferredPrompt = null
		})
	})
}

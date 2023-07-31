if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js')
	})

	// Evento para mostrar el prompt de instalación
	let deferredPrompt
	window.addEventListener('beforeinstallprompt', (e) => {
		e.preventDefault()
		deferredPrompt = e
		showInstallButton(deferredPrompt)
	})
}
function showInstallButton(deferredPrompt) {
	const installButton = document.getElementById('install-button')
	installButton.style.display = 'block'
	installButton.addEventListener('click', () => {
		deferredPrompt.prompt()
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				installButton.style.display = 'none'
			}
			deferredPrompt = null
		})
	})
}

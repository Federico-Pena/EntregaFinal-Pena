module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,css,js,png,webp,ico}', // Archivos para precachear
	],
	swDest: 'sw.js',
	clientsClaim: true,
	skipWaiting: true,
	runtimeCaching: [
		{
			urlPattern: /^https:\/\/la-tienda\.vercel.app/, // Dominio
			handler: 'NetworkFirst',
			options: {
				cacheName: 'la-tienda-cache-v1', // Nombre para la caché
				networkTimeoutSeconds: 10,
				cacheableResponse: {
					statuses: [0, 200],
				},
			},
		},
	],
}

import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { NetworkFirst } from 'workbox-strategies'

// Precaching de recursos esenciales al arrancar el Service Worker
precacheAndRoute(self.__WB_MANIFEST)

// Configuración de la estrategia "Network First" para las solicitudes GET
registerRoute(({ request }) => request.method === 'GET', new NetworkFirst())

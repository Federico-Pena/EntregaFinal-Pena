if(!self.define){let e,s={};const a=(a,o)=>(a=new URL(a+".js",o).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(o,r)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const d=e=>a(e,i),b={module:{uri:i},exports:c,require:d};s[i]=Promise.all(o.map((e=>b[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-bc973b1f"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/carritoVacio.png",revision:"7abe5c7a38c517c1e9a1f26c949eff89"},{url:"assets/favicon.ico",revision:"27d2082f3b425fd820a7c64f9ab1d4c4"},{url:"assets/iconos/apple-touch-icon.png",revision:"32bea09b0669f662aec1ea1507aa1218"},{url:"assets/iconos/icon-192-maskable.png",revision:"3f8eedc8112e6a337c88eb466d769d90"},{url:"assets/iconos/icon-192.png",revision:"350a25114b37ef02456fa89f9a246bcb"},{url:"assets/iconos/icon-512-maskable.png",revision:"cf1bb6f16ca78f574818039e8474976e"},{url:"assets/iconos/icon-512.png",revision:"8b40a130cb68a836dda6360fdd98facd"},{url:"assets/productos/Google-Pixel-6.webp",revision:"1df3b44c1d66347e6ded55572ee48643"},{url:"assets/productos/iPhone-14.webp",revision:"9100d37f66380570d33baa774fb8f773"},{url:"assets/productos/Monitor-Acer-23-8-pulgadas.webp",revision:"d860a5a32171ee82d67b9742e20c2c74"},{url:"assets/productos/Monitor-AOC-Gaming-24-pulgadas.webp",revision:"3750189ecc5b59ba61f459ee3894a2ec"},{url:"assets/productos/Monitor-ASUS-24-pulgadas.webp",revision:"cbe8239a5da9ad185ebe74eefb8aad6d"},{url:"assets/productos/Monitor-BenQ-25-pulgadas.webp",revision:"b811c17f80816beac89c8de11b25a009"},{url:"assets/productos/Monitor-Dell-27-pulgadas.webp",revision:"91c8ac4132d55b202a69c8763dcf8d9b"},{url:"assets/productos/Monitor-HP-27-pulgadas.webp",revision:"7214d95ab68a86906a9e4e28d6fbbe76"},{url:"assets/productos/Monitor-LG-Ultrawide-34-pulgadas.webp",revision:"0c6d189ebe9bba1d6e4e95e17d581fc8"},{url:"assets/productos/Monitor-Philips-32-pulgadas.webp",revision:"4cddde6f5810937d9055ed41f4c5967e"},{url:"assets/productos/Monitor-Samsung-Curvo-32-pulgadas.webp",revision:"f034ac45e243afd68171108feabb5c1b"},{url:"assets/productos/Monitor-ViewSonic-27-pulgadas.webp",revision:"36d9021e1043bd575b129c8ce307534e"},{url:"assets/productos/Motorola-Edge-30.webp",revision:"29b5733bc5fe1c122744d0472bc77542"},{url:"assets/productos/Notebook-Acer-Swift-5.webp",revision:"49a9ee0144f847d0ff93954ac28cb81c"},{url:"assets/productos/Notebook-ASUS-ZenBook-14.webp",revision:"949659b9abc7bb9aaf04cb9fcb7c78d0"},{url:"assets/productos/Notebook-Dell-XPS-15.webp",revision:"03e085f487d4963d5872fb5916d548ef"},{url:"assets/productos/Notebook-HP-Spectre-x360.webp",revision:"ad7c75a60984fd7da57bde83e8ebf006"},{url:"assets/productos/Notebook-Lenovo-ThinkPad-X1-Carbon.webp",revision:"1e0f9c41138e3b9ca737ea695e84ee21"},{url:"assets/productos/Notebook-LG-Gram-17.webp",revision:"b7b411c5fdbfbdc12569e571cf8a730d"},{url:"assets/productos/Notebook-MacBook-Pro-13.webp",revision:"38f4b636790e2425e3850490c203a257"},{url:"assets/productos/Notebook-Microsoft-Surface-Laptop-4.webp",revision:"0da312307fc51e36da89e56997b06c10"},{url:"assets/productos/Notebook-MSI-Creator-17.webp",revision:"d848a83659a28f193d13c2bf90183007"},{url:"assets/productos/Notebook-Razer-Blade-15.webp",revision:"b05b424c221b9af79ad3c0f9ac559d78"},{url:"assets/productos/OnePlus-9T.webp",revision:"3fa2ee500310dac78da9d7b094297d56"},{url:"assets/productos/Oppo-Find-X5.webp",revision:"a27a2402fcd16349a0512feddbd624fb"},{url:"assets/productos/productoSinImagen.png",revision:"10ebcb3ea1a9967360163b2e94170e08"},{url:"assets/productos/Realme-GT-2.webp",revision:"e818c72647fc62cb34b8cb957fc1e622"},{url:"assets/productos/Samsung-Galaxy-S22.webp",revision:"5d026f2abf7f28244dfa9a1a5efb63c8"},{url:"assets/productos/Sony-Xperia-1-III.webp",revision:"85296248b597518026fb6702712aed01"},{url:"assets/productos/Vivo-X80-Pro.webp",revision:"78869d9158ba4d9d2d1d447bc2a1fc99"},{url:"assets/productos/Xiaomi-Mi-12.webp",revision:"65b599ef17099b4b486ada1d0cfee928"},{url:"css/agregarProducto.css",revision:"fb8697148222cd1fb7b831c585e454a1"},{url:"css/carrito.css",revision:"2ef1d2703e0da36f7a5e101a8f4bb9f1"},{url:"css/general.css",revision:"dfbf3479b7f6b711caae24789993b901"},{url:"css/index.css",revision:"530406ea8c2f025fbe2e10837c9419aa"},{url:"css/productos.css",revision:"ab0fb747ff92e4dad0cf999af155d6f2"},{url:"index.html",revision:"c7bd0e62c08d4ad6af541b5cf0ea34ae"},{url:"js/agregarProducto.js",revision:"041375a94bdf9d5c6a085c55bc93c1bd"},{url:"js/agregarProductos/mostrarProductos.js",revision:"d88b5f6a22735c17763bdb477942b296"},{url:"js/agregarProductos/productos.js",revision:"9b13eb1bae8e2f185a4ac801e16c01ce"},{url:"js/animations/carrito/abrirCarrito.js",revision:"6ec69ec422e2efed64ed197b63d74639"},{url:"js/animations/carrito/cerrarCarrito.js",revision:"99f28657f04134cf251fd00986f364c8"},{url:"js/animations/sesion/btnEliminarCuenta.js",revision:"eba511eaf65a0b16929e21ea2a05a550"},{url:"js/animations/sesion/eliminarCuenta.js",revision:"8b4c30af5ebc1aa52b6028cd9bd4d683"},{url:"js/animations/sesion/login.js",revision:"fdea8d0a1ea85b9a5533a8cb0966600d"},{url:"js/carrito/agregarAlCarrito.js",revision:"976137ce4ac774b3b540441e50286d34"},{url:"js/carrito/calcularCantidad.js",revision:"f27e3a826093f4eadd61ce4c18a1e0b9"},{url:"js/carrito/calcularTotal.js",revision:"b1904ecb41486014d999597d06dce25b"},{url:"js/carrito/carrito.js",revision:"e50fc834e90ab2c401b3e88f612b96a5"},{url:"js/carrito/comprar.js",revision:"87ad858b3f10347e8153a2669e5d30f5"},{url:"js/carrito/eliminarDelCarrito.js",revision:"7cc1ddb41751e2781a6e383720e5069f"},{url:"js/carrito/vaciarCarrito.js",revision:"a77cda6a265960d7f2ff788a591cd61b"},{url:"js/index.js",revision:"45a6e57fd3e5f2d5f7602d72269ac952"},{url:"js/localStorage/helpers.js",revision:"820589f3881c19dc1de5a37adcd0260e"},{url:"js/sesion/buscarUsuarioLogin.js",revision:"24928e9fee23d4d8a14f53972de4540e"},{url:"js/sesion/buscarUsuarioRegistro.js",revision:"73c3345cd3cda4f6772bab99316a551a"},{url:"js/sesion/cerrarSesion.js",revision:"a04983e6d637987f1f1b81ccdc07cb4e"},{url:"js/sesion/eliminarCuenta.js",revision:"4aa447dd781aa80d5376fa79bfefacd8"},{url:"js/sesion/guardarUsuario.js",revision:"4005ce7335a707028d90c6503b2e3cd1"},{url:"js/sesion/iniciarSesion.js",revision:"0b2e6e871e80471664469be7ce8430e0"},{url:"js/sesion/mantenerSesion.js",revision:"95b812177585a654ea1c2fbd19f546fe"},{url:"js/sesion/registrarse.js",revision:"858b790e3f9b2f9586b91856eac87aa6"},{url:"js/sesion/sesion.js",revision:"bd588db52aac3d417439c3287ee46ae3"},{url:"js/SweetAlert/sweetAlert.js",revision:"c076dd245095114950f0514a49130835"},{url:"pages/agregarProducto.html",revision:"da866a35ec7618a1505d37994ee140f0"},{url:"serviceWorker.js",revision:"384c69d0ed0e75d04e5d36b7ff29e9c5"}],{}),e.registerRoute(/^https:\/\/entrega-final-pena\.vercel.app/,new e.NetworkFirst({cacheName:"la-tienda-cache-v1",networkTimeoutSeconds:10,plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map

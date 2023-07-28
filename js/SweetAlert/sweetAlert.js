////////		USUARIO     ////////////
export const alertaUserEnUso = () => {
	return Swal.fire({
		title: 'El nombre de usuarios ya esta en uso',
		icon: 'error',
		confirmButtonText: 'Aceptar',
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
export const alertaBienvenidaRegistro = (userName) => {
	return Swal.fire({
		title: `Bienvenido ${userName}`,
		text: `Ahora inicia sesion`,
		icon: 'success',
		confirmButtonText: 'Aceptar',
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
export const alertaRegistro = () => {
	return Swal.fire({
		title: 'Registrarse',
		html: `<input type="email" required id="usuario" class="swal2-input" placeholder="Email">
  <input type="password" required id="password" class="swal2-input" placeholder="Contraseña">`,
		confirmButtonText: 'Registrarse',
		focusConfirm: false,
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
		preConfirm: () => {
			const user = Swal.getPopup().querySelector('#usuario').value
			const password = Swal.getPopup().querySelector('#password').value
			if (!user || !password) {
				Swal.showValidationMessage(`Por favor Ingrese sus credenciales`)
			}
			return { user: user, password: password }
		},
	})
}
export const alertaLogin = () => {
	return Swal.fire({
		title: 'Iniciar Sesion',
		html: `<input type="email" id="usuario" class="swal2-input" placeholder="Email">
    <input type="password" required id="password" class="swal2-input" placeholder="Contraseña">`,
		confirmButtonText: 'Iniciar Sesion',
		focusConfirm: false,
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
		preConfirm: () => {
			const user = Swal.getPopup().querySelector('#usuario').value
			const password = Swal.getPopup().querySelector('#password').value
			if (!user || !password) {
				Swal.showValidationMessage(`Por favor Ingrese sus credenciales`)
			}
			return { user: user, password: password }
		},
	})
}
export const alertaBienvenidaLogin = (userName) => {
	return Swal.fire({
		title: `Bienvenido de nuevo ${userName}`,
		icon: 'success',
		confirmButtonText: 'Aceptar',
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
export const alertaFallaLogin = () => {
	return Swal.fire({
		title: 'Credenciales incorrectas',
		icon: 'error',
		confirmButtonText: 'Aceptar',
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
export const alertaLoginAdmin = (userName) => {
	return Swal.fire({
		title: `Bienvenido ${userName}`,
		text: 'Ahora podra agregar productos nuevos al stock desde el menu',
		footer: '<a href="/pages/agregarProducto.html">O has click aqui</a>',
		icon: 'success',
		confirmButtonText: 'Aceptar',
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
export const alertaCerrarSesion = () => {
	return Swal.fire({
		title: 'Desea cerrar su sesion?',
		icon: 'warning',
		confirmButtonText: 'Aceptar',
		showCancelButton: true,
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
export const alertaEliminarCuenta = () => {
	return Swal.fire({
		title: 'Esta por eliminar su cuenta!',
		text: 'Esta seguro que desea eliminar su cuenta?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar',
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
////////		USUARIO     ////////////
////////		CARRITO     ////////////
export const alertaEliminarProdCarrito = () => {
	return Swal.fire({
		title: 'Esta por eliminar un producto!',
		text: 'Desea elimiinar el producto del carrito',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar',
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
export const alertaProductoEnCarrito = () => {
	return Swal.fire({
		text: 'Producto en el carrito',
		icon: 'info',
		toast: true,
		timer: 2000,
		position: 'top',
		timerProgressBar: true,
		showConfirmButton: false,
	})
}
export const alertaVaciarCarrito = () => {
	return Swal.fire({
		title: 'Esta por eliminar el carrito!',
		text: 'Desea eliminar todos los productos?',
		icon: 'question',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar',
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
export const alertaTarjeta = (user) => {
	return Swal.fire({
		title: 'Ingrese el numero de su tarjeta',
		html: `<p>16 Digitos</p>
							<input type="number" id="num1" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
							<input type="number" id="num2" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
							<input type="number" id="num3" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
							<input type="number" id="num4" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;">`,
		confirmButtonText: 'Aceptar',
		footer: 'Compras sin recargos',
		focusConfirm: true,
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
		preConfirm: () => {
			const cardNum1 = Swal.getPopup().querySelector('#num1').value
			const cardNum2 = Swal.getPopup().querySelector('#num2').value
			const cardNum3 = Swal.getPopup().querySelector('#num3').value
			const cardNum4 = Swal.getPopup().querySelector('#num4').value
			if (
				!cardNum1 ||
				cardNum1.length != 4 ||
				!cardNum2 ||
				cardNum2.length != 4 ||
				!cardNum3 ||
				cardNum3.length != 4 ||
				!cardNum4 ||
				cardNum4.length != 4
			) {
				Swal.showValidationMessage(`Cada campo debe contener de 4 Digitos`)
			}
			const salt = dcodeIO.bcrypt.genSaltSync(10)
			const card2 = dcodeIO.bcrypt.hashSync(cardNum2, salt)
			const card3 = dcodeIO.bcrypt.hashSync(cardNum3, salt)
			const card4 = dcodeIO.bcrypt.hashSync(cardNum4, salt)
			user.tarjeta = `${cardNum1}-${card2}-${card3}-${card4}`
		},
	})
}
export const alertaGraciasPorSuCompra = () => {
	return Swal.fire({
		title: 'Gracias por su compra!',
		icon: 'success',
		showConfirmButton: false,
		toast: true,
		position: 'top',
		timer: 2500,
		timerProgressBar: true,
	})
}
export const alertaConfirmarCompra = (user, total) => {
	return Swal.fire({
		title: 'Confirmar Compra',
		icon: 'info',
		html: `<p>Tarjeta N° ${
			user.tarjeta.split('-')[0]
		}-****-****-****</p></br><p>Total $${total}</p>`,
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
export const alertaDebeIniciarSesion = () => {
	return Swal.fire({
		title: 'Debe Iniciar Sesion Para Continuar',
		icon: 'info',
		confirmButtonText: 'Aceptar',
		background: `rgba(0,0,0,.9)`,
		color: 'rgba(255,255,255,.9)',
	})
}
////////		CARRITO     ////////////

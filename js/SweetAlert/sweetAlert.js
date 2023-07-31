////////		USUARIO     ////////////
/* global Swal*/
/* global dcodeIO*/

export const alertaUserEnUso = () => {
	return Swal.fire({
		title: 'El nombre de usuarios ya esta en uso',
		iconColor: 'white',
		icon: 'error',
		toast: true,
		timer: 2500,
		timerProgressBar: true,
		showConfirmButton: false,
		background: `#f27474`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaBienvenidaRegistro = (userName) => {
	return Swal.fire({
		text: `Bienvenido ${userName}, ahora inicia sesión`,
		iconColor: 'white',
		icon: 'success',
		toast: true,
		timer: 2500,
		timerProgressBar: true,
		showConfirmButton: false,
		background: `#a5dc86`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaBienvenidaLogin = (userName) => {
	return Swal.fire({
		title: `Bienvenido de nuevo ${userName}`,
		iconColor: 'white',
		icon: 'success',
		toast: true,
		timer: 2500,
		timerProgressBar: true,
		showConfirmButton: false,
		background: `#a5dc86`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaFallaLogin = () => {
	return Swal.fire({
		title: 'Credenciales incorrectas',
		iconColor: 'white',
		icon: 'error',
		toast: true,
		timer: 2500,
		timerProgressBar: true,
		showConfirmButton: false,
		background: `#f27474`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaRegistro = () => {
	return Swal.fire({
		title: 'Registrarse',
		html: `	
		<form>
		<input type="text"  required id="usuario" class="swal2-input" placeholder="user">
  	<input type="password"  required id="password" class="swal2-input" placeholder="Contraseña">
	</form>`,
		confirmButtonText: 'Registrarse',
		focusConfirm: true,
		allowEnterKey: true,
		background: `#1a386a`,
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
		title: 'Iniciar Sesión',
		html: `<form> 
		<input type="text" autocomplete="off" id="usuario" class="swal2-input" placeholder="user">
    <input type="password" autocomplete="off" required id="password" class="swal2-input" placeholder="Contraseña"> 
		</form>`,
		confirmButtonText: 'Iniciar Sesión',
		allowEnterKey: true,
		focusConfirm: true,
		background: `#1a386a`,
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

export const alertaLoginAdmin = (userName) => {
	return Swal.fire({
		title: `Bienvenido ${userName}`,
		text: 'Ahora podrá agregar productos nuevos al stock desde el menu',
		footer: '<a href="/pages/agregarProducto.html">O has click aquí</a>',
		iconColor: 'white',
		icon: 'success',
		confirmButtonText: 'Aceptar',
		background: `#3fc3ee`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaCerrarSesión = () => {
	return Swal.fire({
		title: 'Desea cerrar su Sesión?',
		iconColor: 'white',
		icon: 'question',
		confirmButtonText: 'Aceptar',
		showCancelButton: true,
		background: `#87adbd`,
		color: 'rgba(255,255,255,.9)',
	})
}
export const alertaEliminarCuenta = () => {
	return Swal.fire({
		title: 'Esta por eliminar su cuenta!',
		text: 'Esta seguro que desea eliminar su cuenta?',
		iconColor: 'white',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar',
		background: `#3fc3ee`,
		color: 'rgba(0,0,0,.9)',
	})
}
////////		USUARIO     ////////////
////////		AGREGAR PRODUCTOS     ////////////
export const alertaProductoYaExiste = () => {
	return Swal.fire({
		title: 'Atención!',
		text: 'Hay un producto con el mismo nombre. Pruebe con otro',
		iconColor: 'white',
		icon: 'info',
		confirmButtonText: 'Ok',
		background: `#3fc3ee`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaEliminarProducto = () => {
	return Swal.fire({
		title: 'Esta por eliminar un producto!',
		text: 'Desea eliminar el producto',
		iconColor: 'white',
		icon: 'question',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar',
		background: `#3fc3ee`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaProductoAgregado = () => {
	return Swal.fire({
		title: 'Producto agregado!',
		iconColor: 'white',
		icon: 'success',
		toast: true,
		timer: 2500,
		timerProgressBar: true,
		showConfirmButton: false,
		background: `#a5dc86`,
		color: 'rgba(0,0,0,.9)',
	})
}
////////		AGREGAR PRODUCTOS     ////////////
////////		CARRITO     ////////////
export const alertaAgregadoEnCarrito = () => {
	return Swal.fire({
		text: 'Producto agregado',
		iconColor: 'white',
		icon: 'success',
		toast: true,
		position: 'top-start',
		timer: 2500,
		timerProgressBar: true,
		showConfirmButton: false,
		background: `#a5dc86`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaProductoEnCarrito = () => {
	return Swal.fire({
		text: 'Producto en el carrito',
		iconColor: 'white',
		icon: 'info',
		toast: true,
		timer: 2500,
		position: 'top-start',
		timerProgressBar: true,
		showConfirmButton: false,
		background: `#3fc3ee`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaEliminarProdCarrito = () => {
	return Swal.fire({
		title: 'Esta por eliminar un producto!',
		text: 'Desea eliminar el producto del carrito?',
		icon: 'question',
		iconColor: 'white',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar',
		background: `#87adbd`,
		color: 'rgba(0,0,0,.9)',
	})
}

export const alertaVaciarCarrito = () => {
	return Swal.fire({
		title: 'Esta por eliminar el carrito!',
		text: 'Desea eliminar todos los productos?',
		iconColor: 'white',
		icon: 'question',
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		cancelButtonText: 'Cancelar',
		background: `#87adbd`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaTarjeta = (user) => {
	return Swal.fire({
		html: `<div><i class="fa-solid fa-credit-card fa-xl"></i></div>
						</br>
					<form>
							<input type="number" id="num1" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
							<input type="number" id="num2" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
							<input type="number" id="num3" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;"> -
							<input type="number" id="num4" class="swal2-input numTarjeta" onKeyPress="if(this.value.length==4) return false;">
					</form>`,
		confirmButtonText: 'Aceptar',
		footer: 'Compras sin recargos',
		focusConfirm: true,
		background: `#1a386a`,
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
				Swal.showValidationMessage(`Cada campo debe contener de 4 Dígitos`)
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
		iconColor: 'white',
		icon: 'success',
		showConfirmButton: false,
		toast: true,
		position: 'top',
		timer: 2500,
		timerProgressBar: true,
		background: '#a5dc86',
	})
}
export const alertaConfirmarCompra = (user, total) => {
	return Swal.fire({
		title: 'Confirmar Compra',
		iconColor: 'white',
		icon: 'info',
		html: `<p>Tarjeta N° ${
			user.tarjeta.split('-')[0]
		}-****-****-****</p></br><p>Total $${total}</p>`,
		showCancelButton: true,
		confirmButtonText: 'Aceptar',
		background: `#3fc3ee`,
		color: 'rgba(0,0,0,.9)',
	})
}
export const alertaDebeIniciarSesión = () => {
	return Swal.fire({
		title: 'Debe Iniciar Sesión Para Continuar',
		iconColor: 'white',
		icon: 'info',
		confirmButtonText: 'Aceptar',
		background: `#3fc3ee`,
		color: 'rgba(0,0,0,.9)',
	})
}
////////		CARRITO     ////////////

import { carritoLength } from "./productos.js";
import { Login } from "./clases/Login.js";
/**
 * Funcion para el registro con base en sweet alert
 * Comprueba que no existan en base del nombre de usuario
 */
export function registro() {
  Swal.fire({
    title: "Registrarse",
    html: `<input type="text" id="usuario" class="swal2-input" placeholder="Nombre de Usuario">
  <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
    confirmButtonText: "Registrarse",
    focusConfirm: false,
    preConfirm: () => {
      const user = Swal.getPopup().querySelector("#usuario").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!user || !password) {
        Swal.showValidationMessage(`Por favor Ingrese sus credenciales`);
      }
      return { user: user, password: password };
    },
  }).then((result) => {
    if (result.value) {
      let classLogin = new Login();
      if (classLogin.buscarUsuario(result.value.user) === true) {
        Swal.fire({
          title: "El nombre de usuarios ya esta en uso",
          icon: "error",
          confirmButtonText: "Aceptar",
          background: `rgba(0,0,0,.9)`,
          color: "rgba(255,255,255,.9)",
        });
      } else {
        Swal.fire({
          title: `Bienvenido ${result.value.user}`,
          text: `Ahora inicia sesion`,
          icon: "success",
          confirmButtonText: "Aceptar",
          background: `rgba(0,0,0,.9)`,
          color: "rgba(255,255,255,.9)",
        });
        const iraReg = document.querySelector(".iraReg");
        iraReg.classList.add("hidden");
        classLogin.guardarUsuario(result.value.user, result.value.password);
      }
    }
  });
}
/**
 * Funcion para iniciar sesion con base en sweet alert.
 * Comprueba que no existan en base del nombre de usuario y su contraseña.
 * Crea un acceso especial para ver la pagina de agregar productos al stock fijo
 * con el usuario "admin@gmail.com" y la contraseña "admin"
 */
export function login() {
  Swal.fire({
    title: "Iniciar Sesion",
    html: `<input type="text" id="usuario" class="swal2-input" placeholder="Nombre de Usuario">
    <input type="password" id="password" class="swal2-input" placeholder="Contraseña">`,
    confirmButtonText: "Iniciar Sesion",
    focusConfirm: false,
    preConfirm: () => {
      const user = Swal.getPopup().querySelector("#usuario").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!user || !password) {
        Swal.showValidationMessage(`Por favor Ingrese sus credenciales`);
      }
      return { user: user, password: password };
    },
  }).then((result) => {
    if (result.value) {
      let classLogin = new Login();
      if (
        classLogin.iniciarSesion(result.value.user, result.value.password) ==
        true
      ) {
        Swal.fire({
          title: `Bienvenido de nuevo ${result.value.user}`,
          icon: "success",
          confirmButtonText: "Aceptar",
          background: `rgba(0,0,0,.9)`,
          color: "rgba(255,255,255,.9)",
        });
        localStorage.setItem("userActive", result.value.user);
        const nameUserNav = document.querySelector(".nameUserNav");
        const logout = document.querySelector(".logout");
        logout.classList.remove("hidden");
        nameUserNav.innerHTML = localStorage.getItem("userActive");
        nameUserNav.classList.remove("hidden");
        nameUserNav.classList.add("animate__bounce");
        const iraReg = document.querySelector(".iraReg");
        iraReg.classList.add("hidden");
        const login = document.querySelector("#login");
        login.classList.add("hidden");
      } else {
        Swal.fire({
          title: "Credenciales incorrectas",
          icon: "error",
          confirmButtonText: "Aceptar",
          background: `rgba(0,0,0,.9)`,
          color: "rgba(255,255,255,.9)",
        });
        if (
          result.value.user == "admin@gmail.com" &&
          result.value.password == "admin"
        ) {
          const btnlogin = document.getElementById("login");
          btnlogin.classList.add("hidden");
          agregar.classList.remove("hidden");
          agregar.classList.add("animate__bounce");
          setTimeout(() => {
            agregar.classList.remove("animate__bounce");
          }, 1000);
          Swal.fire({
            title: `Bienvenido ${result.value.user}`,
            text: "Ahora podra agregar productos nuevos al stock desde el menu",
            footer: '<a href="./agregarProducto.html">O has click aqui</a>',
            icon: "success",
            confirmButtonText: "Aceptar",
            background: `rgba(0,0,0,.9)`,
            color: "rgba(255,255,255,.9)",
          });
          const nameUserNav = document.querySelector(".nameUserNav");
          nameUserNav.innerHTML = result.value.user;
          nameUserNav.classList.remove("hidden");
          nameUserNav.classList.add("animate__bounce");
          const iraReg = document.querySelector(".iraReg");
          iraReg.classList.add("hidden");
        }
      }
    }
  });
}

/**
 * Funcion para mantener activa la sesion si no se cierra manuelmente
 */
export function mantenerSesion() {
  const nameUserNav = document.querySelector(".nameUserNav");
  if (localStorage.getItem("userActive") !== null) {
    nameUserNav.innerHTML = localStorage.getItem("userActive");
    document.querySelector(".nameUserNav").classList.remove("hidden");
    document.querySelector(".logout ").classList.remove("hidden");
    document.querySelector("#login").classList.add("hidden");
    document.querySelector(".iraReg").classList.add("hidden");
  }
  const btnlogout = document.querySelector(".logout");
  btnlogout.addEventListener("click", () => {
    Swal.fire({
      title: "Desea cerrar su sesion?",
      icon: "warning",
      confirmButtonText: "Aceptar",
      showCancelButton: true,
      background: `rgba(0,0,0,.9)`,
      color: "rgba(255,255,255,.9)",
    }).then((result) => {
      if (result.isConfirmed == true) {
        let carritoVacio = [];
        localStorage.removeItem("userActive");
        document.querySelector(".logout").classList.add("hidden");
        document.querySelector(".nameUserNav").classList.add("hidden");
        document.querySelector(".eliminarCuenta").classList.add("hidden");
        document.querySelector(".iraReg").classList.remove("hidden");
        document.getElementById("login").classList.remove("hidden");
        localStorage.setItem("carrito", JSON.stringify(carritoVacio));
       const userDb =  localStorage.getItem("usuarios")
       localStorage.removeItem("usuarios");
       localStorage.setItem("usuarios", userDb)
        carritoLength();
      }
    });
  });
}

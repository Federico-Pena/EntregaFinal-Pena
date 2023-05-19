/**
 * La clase Login contiene los metodos para comprobar inicio y registro de usuario
 */
export class Login {
  
  /**
   * @param {string} user
   * Nombre de Usuario
   * @param {string} pass
   * Contraseña de Usuario
   */
  iniciarSesion(user, pass) {
    let userSesion = {
      user: user,
      pass: pass,
    };
    let dbUsers = localStorage.getItem("usuarios");
    if (dbUsers) {
      if (dbUsers.indexOf(JSON.stringify(userSesion.user)) >= 0 && dbUsers.indexOf(JSON.stringify(userSesion.pass)) >= 0) {
        return true;
      } else {
        return false;
      }
    }
  }
/**
   * @param {string} user
   * Nombre de Usuario
   * @param {string} pass
   * Contraseña de Usuario
   */
  guardarUsuario(user, pass) {
    let arrayUsuarios = [];
    let usuario = {
      user: user,
      pass: pass,
      tarjeta: "",
    };
    let dbUsers = JSON.parse(localStorage.getItem("usuarios"));
    if (dbUsers) {
      arrayUsuarios.push(...dbUsers);
      arrayUsuarios.push(usuario);
      localStorage.removeItem("usuarios")
      localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));
    } else {
      arrayUsuarios.push(usuario);
      localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));
    }
  }
/**
   * @param {string} userName
   * Nombre de Usuario
   */
  buscarUsuario(userName) {
    let dbUsers = localStorage.getItem("usuarios");
    if (dbUsers) {
      if (dbUsers.indexOf(userName) >= 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}

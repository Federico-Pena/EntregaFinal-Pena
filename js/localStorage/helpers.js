/**
 * @param {string} db
 * Nombre de la db donde se quiere guardar
 * @param {*} elemento
 * Elemento a guardar
 */
export const guardarLocalStorage = (db, elemento) => {
	localStorage.setItem(db, JSON.stringify(elemento))
}
/**
 *
 * @param {string} db
 * Nombre de la db donde se quiere Borrar
 * @Info localStorage.removeItem(db)
 */
export const borrarLocalStorage = (db) => {
	localStorage.removeItem(db)
}
/**
 *
 * @param {string} db
 * Nombre de la db donde se quiere Buscar
 * @return JSON.parse(localStorage.getItem('db')) || []
 */
export const buscarLocalStorage = (db) => {
	return JSON.parse(localStorage.getItem(db)) || []
}

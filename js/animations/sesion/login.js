export const animLogin = () => {
	const nameUserNav = document.querySelector('.nameUserNav')
	const logout = document.querySelector('.logout')
	const btnRegistrarse = document.querySelector('.btnRegistrarse')
	const btnLogin = document.querySelector('#btnLogin')
	logout.classList.remove('hidden')
	nameUserNav.classList.remove('hidden')
	nameUserNav.classList.add('animate__bounce')
	btnRegistrarse.classList.add('hidden')
	btnLogin.classList.add('hidden')
}

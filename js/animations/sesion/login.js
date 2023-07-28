export const animLogin = () => {
	const nameUserNav = document.querySelector('.nameUserNav')
	const logout = document.querySelector('.logout')
	logout.classList.remove('hidden')
	let user = JSON.parse(localStorage.getItem('userActive'))
	nameUserNav.innerHTML = user.toLowerCase()
	nameUserNav.classList.remove('hidden')
	nameUserNav.classList.add('animate__bounce')
	const iraReg = document.querySelector('.btnRegistrarse')
	iraReg.classList.add('hidden')
	const login = document.querySelector('#btnLogin')
	login.classList.add('hidden')
}

// Captura de elementos principales.
const   header = document.getElementById('main-header'),
        nav = document.getElementById('main-nav'),
        main = document.getElementById('main'),
        footer = document.getElementById('main-footer')


// Captura de elementos secundarios.
const   burguerButton = document.querySelector('.burguer-button'),
        burguerLine = document.querySelector('.burguer-button__line'),
        iconMail = document.getElementById('contact-bar-mail'),
        socialBar = document.getElementById('social-bar'),
        socialBarWrapper = document.getElementById('social-bar-wrapper'),
        buttonBanner = document.getElementById('banner-button')


// Captura de elementos del formulario
const   form = document.getElementById('form'),
        formContainer = document.getElementById('form-container'),
        formContHeight = document.querySelector('.form__container-height'),
        iconCloseForm = document.getElementById('icon-close'),
        inputs = document.querySelectorAll('.input'),
        emailUno = document.getElementById('email'),
        emailDos = document.getElementById('checkmail'),
        terminos = document.getElementById('terminos'),
        submitButton = document.getElementById('submit-button')


// Consulta de medios.
const mql = matchMedia('(min-width: 1024px)')


// window.addEventListener('scroll', () => {
// 	const x = formContainer.getBoundingClientRect().x
// 	const y = formContainer.getBoundingClientRect().y
// 	console.log(x,y)
// })

// window.addEventListener('scroll', () => {
// 	const scrolled = window.scrollY
// 	console.log(scrolled)
// })


// Función hamburger button animation
function buttonAnimation() {
    burguerLine.classList.toggle('cruz')
    nav.classList.toggle('main-nav__move')
}
// Evento 'click' hamburger button animation.
burguerButton.addEventListener('click', buttonAnimation)


// Creación elemento 'h3' de socialBar.
const h3 = document.createElement('h3')
h3.textContent = '¡Síguenos en redes sociales!'
h3.classList.add('social-bar__title')
h3.id = 'bar-text'

// Función mover la Barra Social.
const moveSocialBar = () => {
    if (mql.matches) {
        footer.insertAdjacentElement('afterbegin', socialBar)
        socialBarWrapper.insertAdjacentElement('afterbegin', h3)
    } else if (socialBarWrapper.firstElementChild.id === 'bar-text') {
        socialBarWrapper.firstElementChild.remove()
        nav.insertAdjacentElement('beforeend', socialBar)
    }
}
// Ejecución de la función mover la Barra Social.
moveSocialBar()
// Evento 'change'
mql.addEventListener('change', moveSocialBar)


// Función Altura Elemento.
const elementHeight = () => {

    // Altura interna del viewport.
    const vh = innerHeight,

    // Leyendo y asignando la variable CSS '--height-header' con JavaScript.
    heightHeader = getComputedStyle(header).getPropertyValue('--height-header'),

    // Obteniendo la variable CSS '--padding-top-form-container' con JavaScript.
    paddTopFormCont = getComputedStyle(formContainer).getPropertyValue('--padding-top-form-container')

    if (mql.matches) {
        // Altura del NAV
        nav.style.height = 'auto'

        // Calculando padding-top formContainer
        const formContHeightAverage = `calc(${(vh-formContHeight.clientHeight)/2}px)`
        formContainer.style.paddingTop = formContHeightAverage
		// console.log('Altura formulario es ', formContHeight.clientHeight)
		// console.log('innerHeight es, ', innerHeight)
		console.log('padding-top es ', formContHeightAverage)
    } else {
        // Altura del NAV
        const navHeight = `height: calc(${vh/16}rem - ${heightHeader})`
        nav.setAttribute('style', navHeight)

        // Calculando padding-top formContainer
        formContainer.style.paddingTop = paddTopFormCont
    }
}
// Ejecución de la función Altura Elemento.
elementHeight()
// Evento 'resize' función Altura Elemento.
addEventListener('resize', elementHeight)




/* ================= BEGIN FORMULARIO =====================*/

// Objeto Expresiones Regulares.
const er = {
	erName: /^(([A-ZÁÉÍÓÚa-zñáéíóú])[\s]?)+$/,
	erEmail: /^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/,
	erTextArea: /^([\w]\s?)([\w\,\.\$\&\#\%\"\¡\!\¿\?\(\)\@\ñ\á\é\í\ó\ú]\s?)+$/
}



// Objeto validar campos
const checkInput = {
	name: false,
	email: false,
	checkmail: false,
	textarea: false
}



// Objeto mensajes de error.
const errorMessage = {
	nameError: 'Ingrese únicamente letras',
	emailError: 'Formato de correo inválido',
	email2Error: 'Los correos no son iguales',
	txareaError: 'Máximo 300 caracteres; algunos caracteres especiales están restringidos'
}



// Funcion abrir formulario
const openForm = e => {
    e.stopPropagation()
    form.style.visibility = 'visible'
    setTimeout(() => formContainer.classList.add('form--show'),500)
}



// Función cerrar formulario
const closeForm = e => {
    e.stopPropagation()

    if (e.target.classList.contains('form__container') || (e.target.classList.contains('form__container-height')) || (e.target.classList.contains('form__icon-close')) )  {

        if (nav.classList.contains('main-nav__move')) {
            burguerLine.classList.toggle('cruz')
            nav.classList.toggle('main-nav__move')
        }

        formContainer.classList.remove('form--show')
        setTimeout(() => form.style.visibility = 'hidden',1000)
    }
}

// Evento abrir formulario
iconMail.addEventListener('click', openForm)

// Evento abrir formulario
buttonBanner.addEventListener('click', openForm)

// Evento cerrar formulario
formContainer.addEventListener('click', closeForm)



// Función validar formulario.
const validarFormulario = e => {

	// Nombre
	if (e.target.name === 'name') validarDatos(er.erName, e.target.value, e.target)

	// Email
	if (e.target.name === 'email') {
		validarDatos(er.erEmail, e.target.value, e.target)
		validarMail2()
	}

	// Confirm-Email
	if (e.target.name === 'checkmail') validarMail2()

	// Mensaje
	if (e.target.name === 'textarea') {
		if (e.target.value.trim().length <= 300) validarDatos(er.erTextArea, e.target.value, e.target)
		else changeState(false, e.target)
	}
}



// Función validar datos.
const validarDatos = (expresion, valor, elemento) => {
	if (expresion.test(valor)) changeState(true, elemento)
	else changeState(false, elemento)
}



// Función confirmar correo.
const validarMail2 = () => {
	if (emailUno.value !== '') {
		if (emailUno.value === emailDos.value) changeState(true, emailDos)
		else changeState(false, emailDos)
	} else changeState(false, emailDos)
}



// Función cambiar de estado.
const changeState = (condicion, elemento) => {

	const formBox = elemento.parentElement.parentElement,
		icon = elemento.parentElement.querySelector('i'),
		label = formBox.querySelector('label'),
		message = formBox.querySelector('p')

	message.classList.add('form__error-message')

	if (condicion) {
		message.innerText = ''
		icon.style.color = '#1E90FF'
		message.style.marginBottom = 0
		checkInput[elemento.name] = true
		label.style.marginBottom = '8px'
	} else {
		icon.style.color = '#cc0000'
		showError(elemento, message)
		label.style.marginBottom = '2px';
		checkInput[elemento.name] = false
		message.style.marginBottom = '8px'
	}
	elementHeight()
	submitController()
}



// Función mostrar error.
const showError = (elemento, message) => {
	if (elemento.name === 'name') message.innerText = errorMessage.nameError

	else if (elemento.name === 'email') message.innerText = errorMessage.emailError

	else if (elemento.name === 'checkmail') {
		if (emailUno.value !== '') message.innerText = errorMessage.email2Error
	} else if (elemento.name === 'textarea') message.innerText = errorMessage.txareaError
}



// Función controlar botón de envío.
const submitController = () => {
	if (checkInput.name && checkInput.email && checkInput.checkmail && checkInput.textarea && terminos.checked) {
		submitButton.toggleAttribute('disabled', false)
		// console.log(checkInput)
	} else {
		submitButton.toggleAttribute('disabled', true)
		// console.log(checkInput)
	}
}


// Evento click sobre Términos y Condiciones.
terminos.addEventListener('click', submitController)


// Eventos keyup y blur sobre los inputs.
inputs.forEach(input => {
	input.addEventListener('keyup', validarFormulario)
	input.addEventListener('blur', validarFormulario)
})


// Evento submit del formulaio.
form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
	event.preventDefault()
	const $form = new FormData(this)
	const response = await fetch(this.action, {
		method: this.method,
		body: $form,
		headers: {
			'Accept': 'application/json'
		}
	})

	if (response.ok) {
		modal.style.visibility = 'visible'
		modalContent.classList.add('modal--open')
	}
}


/*============================================================================*/



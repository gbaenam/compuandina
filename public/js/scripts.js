// Captura de elementos principales.
const   header = document.getElementById('main-header'),
        nav = document.getElementById('main-nav'),
        main = document.getElementById('main'),
        form = document.getElementById('form'),
        formContainer = document.getElementById('form-container'),
        formContHeight = document.querySelector('.form__container-height'),
        footer = document.getElementById('main-footer')


// Captura de elementos secundarios.
const   burguerButton = document.querySelector('.burguer-button'),
        burguerLine = document.querySelector('.burguer-button__line'),
        iconMail = document.getElementById('contact-bar-mail'),
        socialBar = document.getElementById('social-bar'),
        socialBarWrapper = document.getElementById('social-bar-wrapper'),
        iconCloseForm = document.getElementById('icon-close'),
        buttonBanner = document.getElementById('banner-button')


// Consulta de medios.
const mql = matchMedia('(min-width: 1024px)')



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



// Funcion abrir formulario
const openForm = e => {
    e.preventDefault()
    form.style.visibility = 'visible'
    setTimeout(() => formContainer.classList.add('form--show'),500)
}

// Función cerrar formulario
const closeForm = e => {
    e.preventDefault()

    if (nav.classList.contains('main-nav__move')) {
        burguerLine.classList.toggle('cruz')
        nav.classList.toggle('main-nav__move')
    }

    formContainer.classList.remove('form--show')
    setTimeout(() => form.style.visibility = 'hidden',1000)
}

// Evento abrir formulario
iconMail.addEventListener('click', openForm)

// Evento abrir formulario
buttonBanner.addEventListener('click', openForm)

// Evento cerrar formulario
iconCloseForm.addEventListener('click', e => {
    if (e.target.classList.contains('form__icon-close')) {
        closeForm(e)
    }
})

// Evento cerrar formulario
formContHeight.addEventListener('click', e => {
    if (e.target.classList.contains('form__icon-close')) {
        closeForm(e)
    }
})



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



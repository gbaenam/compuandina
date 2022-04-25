// Captura de elementos principales.
const   header = document.getElementById('main-header'),
        nav = document.getElementById('main-nav'),
        main = document.getElementById('main'),
        form = document.getElementById('form'),
        footer = document.getElementById('main-footer')


// Captura de elementos secundarios.
const   burguerButton = document.querySelector('.burguer-button'),
        burguerLine = document.querySelector('.burguer-button__line'),
        iconMail = document.getElementById('contact-bar-mail'),
        socialBar = document.getElementById('social-bar'),
        socialBarWrapper = document.getElementById('social-bar-wrapper'),
        iconExit = document.getElementById('form-close')



// Consulta de medios.
const mql = matchMedia('(min-width: 1024px)')


// Leyendo y asignando la variable CSS '--height-header' con JavaScript.
const heightHeader = getComputedStyle(header).getPropertyValue('--height-header')



// Función hamburger button animation
const buttonAnimation = () => {
    burguerLine.classList.toggle('cruz')
    nav.classList.toggle('main-nav__move')
    }
// Evento 'click' hamburger button animation.
burguerButton.addEventListener('click', buttonAnimation)



// Función Altura Elemento.
const elementHeight = () => {
    // Altura interna del viewport.
    const vh = innerHeight

    // Calculando la altura del NAV
    if (mql.matches) {
        nav.style.height = 'auto'
    } else {
        const navHeight = `height: calc(${vh/16}rem - ${heightHeader})`
        nav.setAttribute('style', navHeight)
    }
}
// Ejecución de la función Altura Elemento.
elementHeight()
// Evento 'resize' función Altura Elemento.
addEventListener('resize', elementHeight)



// Funcion abrir formulario
const launchForm = e => {
    e.preventDefault()
    form.classList.add('form--show')
}
// Evento "click" de launchForm()
iconMail.addEventListener('click', launchForm)



// Función cerrar formulario
const closeForm = e => {
    e.preventDefault()
    form.classList.remove('form--show')
}
// Evento "click" de closeForm
iconExit.addEventListener('click', closeForm)



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


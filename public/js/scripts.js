// Captura de elementos principales.
const   header = document.getElementById('main-header'),
        nav = document.getElementById('main-nav'),
        main = document.getElementById('main'),
        form = document.getElementById('form'),
        formContainer = document.getElementById('form-container'),
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
const openForm = e => {
    e.preventDefault()
    form.style.visibility = 'visible'
    setTimeout(() => formContainer.classList.add('form--show'),500)
}
// Evento "click" de launchForm()
iconMail.addEventListener('click', openForm)


// Función cerrar formulario
const closeForm = e => {
    e.preventDefault()
    burguerLine.classList.toggle('cruz')
    nav.classList.toggle('main-nav__move')
    formContainer.classList.remove('form--show')
    setTimeout(() => form.style.visibility = 'hidden',1000)
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




// Función cerrar modal
// const close = e => {
//     e.stopPropagation()
//     modalContent.classList.remove('modal--open')
//     setTimeout(() => modal.style.visibility = 'hidden',1000)
// }


// Abriendo el modal
// openModal.addEventListener('click', () => {
//     modal.style.visibility = 'visible'
//     modalContent.classList.add('modal--open')
// })

// Cerrando el modal 1
// closeModal.addEventListener('click', e => {
//     close(e)
// })

// Cerrando el modal 2
// modal.addEventListener('click', e => {
//     if (e.target.classList.contains('modal')) close(e)
// })


// Captura de elementos principales.
const   header = document.getElementById('main-header'),
        nav = document.getElementById('main-nav'),
        main = document.getElementById('main'),
        footer = document.getElementById('main-footer')


// Captura de elementos secundarios.
const   burguerButton = document.querySelector('.burguer-button'),
        burguerLine = document.querySelector('.burguer-button__line'),
        iconCheckin = document.getElementById('checkin'),
        iconContact = document.getElementById('contact'),
        socialBar = document.getElementById('social-bar'),
        socialBarWrapper = document.getElementById('social-bar-wrapper')


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



// Función change icons del Header.
const changeIcons = () => {
    if (mql.matches) {
        iconCheckin.src = "img/icons/checkin-desk.svg"
        iconContact.src = "img/icons/contact-desk.svg"
    } else {
        iconCheckin.src = "img/icons/checkin-mobl.svg"
        iconContact.src = "img/icons/contact-mobl.svg"
    }
    }
// Ejecución de la función change icons.
changeIcons()
// Evento 'change' consulta de medios.
mql.addEventListener('change', changeIcons)



// Función Altura Elemento.
elementHeight = () => {
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



const alturaMain = () => {
    const vh = innerHeight
    const heightFooter = footer.getBoundingClientRect().height

    if(mql.matches) {
        const mainHeight = `height: calc(${vh/16}rem - ${heightHeader} - ${heightFooter/16}rem)`
        main.setAttribute('style', mainHeight)
    } else {
        const mainHeight = `height: calc(${vh/16}rem - ${heightHeader} - ${heightFooter/16}rem)`
        main.setAttribute('style', mainHeight)
    }
}

alturaMain()
addEventListener('resize', alturaMain)



// const styles = `
//     height: calc(${hRem}rem - ${hdr});
//     color: red;
//     border-radius: ${br};
//     font-size: ${hdr};
// `
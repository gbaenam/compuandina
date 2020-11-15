
const   header = document.getElementById('main-header'),
        burguerButton = document.querySelector('.burguer-button'),
        burguerLine = document.querySelector('.burguer-button__line'),
        nav = document.getElementById('main-nav'),
        mql = matchMedia('(min-width: 1024px)')


// Hamburger button animation
burguerButton.addEventListener('click', () => {
    burguerLine.classList.toggle('cruz')
    nav.classList.toggle('main-nav__move')
})


const changeIcons = () => {
    if (mql.matches) {
        document.getElementById("checkin").src = "img/icons/checkin-desk.svg"
        document.getElementById("contact").src = "img/icons/contact-desk.svg"
    }

    else {
        document.getElementById("checkin").src = "img/icons/checkin-mobl.svg"
        document.getElementById("contact").src = "img/icons/contact-mobl.svg"
    }
}

changeIcons()

mql.addEventListener('change', changeIcons)



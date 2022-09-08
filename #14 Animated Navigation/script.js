const lines = document.querySelector('.lines')
const line = document.querySelectorAll('.line')
const container = document.querySelector('.container')
const outeq = document.querySelector('.lines.offactive')
const ineq = document.querySelector('.lines.inactive')
const navs = document.querySelectorAll('li')
window.addEventListener('keyup', (event) => {
    if (event.key == "Enter") {
        container.classList.toggle('active');
    }
})
lines.addEventListener('click', () => {
    lines.classList.toggle('move')
    line.forEach(item => {

        item.classList.toggle('animate')
    })
    container.classList.toggle('active')
    navs.forEach(nav => {
        if (nav.classList.contains('rotate')) {
            nav.classList.remove('rotate')
            nav.classList.add('unrotate')
        }
        else {
            nav.classList.remove('unrotate')
            nav.classList.add('rotate')
        }
    })
})


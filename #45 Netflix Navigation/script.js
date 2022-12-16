const option = document.querySelector('.option')
const black = document.querySelector('.black')
const red = document.querySelector('.red')
const navbar = document.querySelector('.navbar')
const cross = document.querySelector(".cross")
option.addEventListener('click', e => {
    black.classList.add('active')
    setTimeout(() => {
        red.classList.add('active')
    }, 100);
    setTimeout(() => {
        navbar.classList.add('active')
    }, 200);
})
cross.addEventListener('click', e => {
    navbar.classList.remove('active')
    setTimeout(() => {
        red.classList.remove('active')
    }, 100);
    setTimeout(() => {
        black.classList.remove('active')
    }, 200);
})
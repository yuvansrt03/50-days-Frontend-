const nav = document.querySelector('.nav-bar')
const home = document.querySelector('.home-screen')
const pgname = document.querySelector('.page-name')
const cnt = document.querySelector('.container')
var scroll
window.addEventListener('scroll', (e) => {
    console.log(window.pageYOffset)
    if (window.pageYOffset > home.clientTop + 500) {
        nav.classList.add('scroll')
        pgname.classList.add('scroll')
        cnt.classList.add('scroll')
    }
    else {
        nav.classList.remove("scroll")
        pgname.classList.remove('scroll')
        cnt.classList.remove('scroll')
    }
})
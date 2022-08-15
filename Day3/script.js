const box = document.querySelector('.box')
const container = document.querySelector('.container')
const trans = document.querySelector('.trans')
const nav = document.querySelector('.nav-items')
const menu = document.querySelectorAll('.material-icons')
console.log(123)
menu[0].addEventListener('click', () => {
    console.log(menu[0])
    container.classList.add('trans')
    nav.classList.add('trans')
    box.classList.add('trans')
    document.body.style.overflow = "hidden"

})
menu[1].addEventListener('click', () => {
    container.classList.remove('trans')
    nav.classList.remove('trans')
    box.classList.remove('trans')
    document.body.style.overflow = "visible"
})

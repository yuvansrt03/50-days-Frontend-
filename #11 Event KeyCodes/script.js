const container = document.querySelector('.container')
const first = document.querySelector('.first')
const items = document.querySelectorAll('.container div')
window.addEventListener('keydown', (event, keyCode) => {

    first.style.opacity = "0"
    container.style.opacity = "1"
    items[0].innerHTML = event.key == " " ? "Space" : event.key
    items[1].innerHTML = String(event.keyCode)
    items[2].innerHTML = event.code
})
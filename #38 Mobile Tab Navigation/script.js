const work = document.querySelector('.work')
const items = document.querySelectorAll('.items')
const screen = document.querySelector('.screen')
const image = document.querySelectorAll('.image')
function clearactive() {
    items.forEach((item) => {
        item.classList.remove('active')
    })
}
function clearshow() {
    image.forEach(item => {
        item.classList.remove('show')
    })
}
var screenpx = 300;
items.forEach((item, imgid) => {
    item.addEventListener('click', e => {
        clearactive()
        e.target.classList.add('active')
        clearshow()
        image[imgid].classList.add('show')



    })
})
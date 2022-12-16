const boxes = document.querySelectorAll('.box')
const container = document.querySelector('.container')
const magic = document.querySelector('.magic')
let i = 0;
let n = 0;
for (i; i < boxes.length; i++) {
    boxes[i].style.cssText += `background-position:${((i) % 4) * -125}px ${(n) * -125}px;`
    if (i % 4 == 3) {
        n++
    }
}

magic.addEventListener('click', () => {
    container.classList.toggle('open')
})
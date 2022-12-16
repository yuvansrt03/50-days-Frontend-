const textel = document.querySelector('#Text')
const text = "We love Programming...."
const input = document.querySelector('input')
var count = 1
var time = 500
function printout() {
    setTimeout(() => {
        textel.innerHTML = text.slice(0, count)
        count++
        if (count > text.length) count = 1

        printout();
    }, time)
}
printout()

var speed = 1;
const up = document.querySelector('#arrow-up')
const down = document.querySelector('#arrow-down')

up.addEventListener('click', () => {
    if (speed == 9) speed = 8
    speed++;
    time /= speed
    input.value = speed;
})
down.addEventListener('click', () => {
    if (speed == 1) speed = 2
    speed--;
    time *= speed
    input.value = speed;
})

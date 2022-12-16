const number = document.querySelector('.number')
const counter = document.querySelector('.counter')
const replay = document.querySelector('.replay')
function animate() {
    number.classList.toggle('goin');
    setTimeout(() => {
        number.classList.toggle('goout')
    }, 800);
    setTimeout(() => {
        number.classList.remove('goin')
        number.classList.remove('goout')
    }, 1500)
}
animate()
let a = setInterval(() => {
    number.innerText = parseInt(number.innerText) - 1
    if (number.innerText == 0) {
        clearInterval(a)
        counter.classList.add('goout')
        setTimeout(() => {
            replay.classList.add('display')
            counter.style.cssText += 'display:none'
        }, 1000)
    }
    animate()

}, 1700);
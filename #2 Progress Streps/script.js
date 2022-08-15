const nxt = document.querySelector('.nxt');
const prev = document.querySelector('.prev');
const line = document.querySelector('.line');
var i = 0;
const numbers = document.querySelectorAll('.circle')
nxt.addEventListener('click', () => {
    if (i == 0) {
        line.style.width = "60px"
        numbers[1].classList.add('active')
        i++
    }
    else if (i == 1) {
        line.style.width = "120px"
        numbers[2].classList.add('active')
        i++
    }
    else if (i == 2) {
        line.style.width = "180px"
        numbers[3].classList.add('active')
        i++
    }
    else if (i == 3) {
        line.style.width = "240px"
        numbers[4].classList.add('active')
        i++
    }

})
prev.addEventListener('click', () => {
    if (i == 1) {
        line.style.width = "0px"
        numbers[1].classList.remove('active')
        i--
    }
    else if (i == 2) {
        line.style.width = "60px"
        numbers[2].classList.remove('active')
        i--
    }
    else if (i == 3) {
        line.style.width = "120px"
        numbers[3].classList.remove('active')
        i--
    }
    else if (i == 4) {
        line.style.width = "180px"
        numbers[4].classList.remove('active')
        i--
    }
})


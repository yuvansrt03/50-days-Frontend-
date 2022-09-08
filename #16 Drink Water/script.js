const can = document.querySelectorAll('.can')
const left = document.querySelector('.left p')
const perc = document.querySelector('.drankpercen p')
const leftsize = document.querySelector('.left')
const percsize = document.querySelector('.drankpercen')
can.forEach((item, idx) => {
    item.addEventListener('click', () => {
        function clearclicked() {
            for (i = idx + 1; i <= 7; i++) {
                can[i].classList.remove('clicked')
            }
        }
        for (i = 0; i <= idx; i++) {
            if (can[idx].classList.contains('clicked')) {
                clearclicked()
                break
            }
            can[i].classList.add('clicked')

        }
    })
})

const a = setInterval(() => {
    var filled = document.querySelectorAll('.clicked')
    var length = filled.length
    left.innerHTML = (2 - scale(length, 0, 8, 0, 2)) + "L Remaining"
    perc.innerHTML = scale(length, 0, 8, 0, 100) + "%"
    leftsize.style.height = scale(length, 0, 8, 100, 0) + "%"
    percsize.style.height = scale(length, 0, 8, 0, 100) + "%"
}, 10)

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
const brands = document.querySelectorAll('.brands p')
window.addEventListener('load', () => {
    brands.forEach((item, idx) => {
        let arr = [12000, 5000, 7500]
        let i = 0;
        if (idx == 0) {
            var increment = Math.ceil(scale(200, 1, 12000, 1, 12000))
        }
        else if (idx == 1) {
            var increment = Math.ceil(scale(200, 1, 12000, 1, 5000))
        }
        else if (idx == 2) {
            var increment = Math.ceil(scale(200, 1, 12000, 1, 7500))
        }
        const a = setInterval(() => {
            item.innerHTML = i
            i += increment
            if (i > arr[idx]) {
                item.innerHTML = arr[idx];
                clearInterval(a)
            }
        }, 15)
    })

})

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
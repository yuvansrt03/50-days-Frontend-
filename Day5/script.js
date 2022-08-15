const img = document.getElementsByTagName("img")
const counter = document.querySelector(".counter")
var i = 0;
var value;
var name = value;
let a = setInterval(() => {
    i++;
    counter.innerHTML = i + "%"
    var blur = scale(i, 0, 100, 10, 0)
    counter.style.filter = "opacity(" + (100 - i) + "% )"
    img[0].style.filter = "blur(" + blur + "px)"
    if (i == 100) {
        clearInterval(a)
    }
}, 100)

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
const images = document.querySelector('.images')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const imagelist = document.querySelector('ul')
var pos = 0
let a = setInterval(() => {
    movenext()
}, 1500);
function movenext() {
    clearInterval(a)
    pos += 300;
    if (pos > 900) pos = 0;
    imagelist.style.cssText += `transform:translateX(-${pos}px)`
    a = setInterval(() => {
        movenext()
    }, 1500);
}
function movebefore() {
    clearInterval(a)
    pos -= 300;
    if (pos < 0) pos = 900;
    imagelist.style.cssText += `transform:translateX(-${pos}px)`
    a = setInterval(() => {
        movenext()
    }, 1500);
}
next.addEventListener('click', movenext)
prev.addEventListener('click', movebefore)
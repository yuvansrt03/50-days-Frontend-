const container = document.querySelector('.container')
const counter = document.querySelector('#counter')
let x, y;
function hearted(x, y) {
    console.log(x, y)
    const divel = document.createElement('div')
    divel.classList.add('heart')
    divel.innerHTML = "❤️";
    divel.style.cssText += `top:${y}px;left:${x}px`
    container.appendChild(divel)
    setTimeout(() => {
        container.removeChild(divel)
    }, 500);
}
container.addEventListener('dblclick', e => {
    var x = e.offsetX
    var y = e.offsetY
    hearted(x, y);
    counter.innerHTML = parseInt(counter.innerHTML) + 1
})
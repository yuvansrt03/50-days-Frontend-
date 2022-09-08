const btn = document.querySelector('button')
const container = document.querySelector('.container')
let box_top = btn.getBoundingClientRect().top;
let box_left = btn.getBoundingClientRect().left;
btn.addEventListener('click', event => {
    let boxEl = document.createElement('div');
    boxEl.classList.add('box')
    container.appendChild(boxEl)
    let x = event.clientX
    let y = event.clientY
    let boxX = x - box_left;
    let boxY = y - box_top;
    boxEl.style.cssText += `top:${boxY}px;left:${boxX}px`
    setTimeout(() => {
        boxEl.remove()
    }, 3000)

    console.log(container)
})
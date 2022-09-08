const canvas = document.querySelector('canvas')
const container = document.querySelector('.container')
const ctx = canvas.getContext("2d")
const clrinp = document.querySelector("input")
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const size = document.querySelector('.size')
const del = document.querySelector('.del')
var y
var ifPressed
var x1
var x2
function drawcircle(x, y) {
    ctx.fillStyle = clrinp.value
    ctx.beginPath();
    ctx.arc(x, y, parseInt(circlesize()), 0, 2 * Math.PI)
    ctx.fill()
}
function drawline(x, y, x1, y1) {
    ctx.strokeStyle = clrinp.value
    ctx.lineWidth = parseInt(circlesize()) * 2
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x1, y1)
    ctx.stroke()
}
function circlesize() {
    return size.innerHTML
}
canvas.addEventListener('mousedown', (e) => {
    x = e.offsetX
    y = e.offsetY
    drawcircle(x, y)
    ifPressed = "True"
})
canvas.addEventListener('mousemove', (e) => {
    if (ifPressed == "True") {
        x1 = e.offsetX
        y1 = e.offsetY
        drawcircle(x1, y1)
        drawline(x, y, x1, y1)
        x = x1
        y = y1
    }
})
canvas.addEventListener('mouseup', () => {
    ifPressed = "False"
})
//Plus minus
plus.addEventListener('click', () => {
    var sizenum = size.innerHTML
    size.innerHTML = parseInt(sizenum) + 5
    if (size.innerHTML > 50) {
        size.innerHTML = 50
    }
})

minus.addEventListener("click", () => {
    var sizenum = size.innerHTML
    size.innerHTML = parseInt(sizenum) - 5
    if (size.innerHTML < 10) {
        size.innerHTML = 10
    }
})
//clear
del.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
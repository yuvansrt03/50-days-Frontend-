window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
let pos = -100
const insectimg = {
    "Fly": "FlyImages/Fly.png",
    "Mosquito": "FlyImages/Mosquito.png",
    "Spider": "FlyImages/Spider.png",
    "Scorpion": "FlyImages/Scorpion.png"
}
const play = document.querySelector('.play')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const score = document.querySelector('.score')
const Time = document.querySelector('.time')
const annoyed = document.querySelector('.annoyed')
const insectlist = document.querySelectorAll('.insectlist')
var insectname
insectlist.forEach(insectel => {
    insectel.addEventListener('click', e => {
        insectname = e.target.getAttribute('insectname')
        Move()
        start()
    })
})
play.addEventListener('click', e => {
    Move()
})
function start() {
    addfly()
    var s = 0;
    var min = 0;
    setTimeout(() => {
        displayannoyed()
    }, 20000)
    let tint = setInterval(() => {
        s++;
        if (s > 59) {
            min++
            s = 0
        }
        let seconds = s < 10 ? '0' + s.toString() : s.toString()
        let minute = min < 10 ? '0' + min.toString() : min.toString()
        let timevar = `Time ${minute}:${seconds}`
        Time.innerText = timevar
    }, 1000);
}
function displayannoyed() {
    annoyed.classList.add('active')
    setTimeout(() => {
        annoyed.classList.remove('active')
    }, 3000)
}
function Move() {
    body.style.transform = `translateY(${pos}vh)`
    pos -= 100
}
function addfly() {
    var x = Math.floor(Math.random() * 1101);
    var y = Math.floor(Math.random() * 501)
    var rotate = Math.floor(Math.random() * 359)
    var img = document.createElement('img')
    img.src = insectimg[insectname]
    img.classList.add('insect')
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.transform = `rotate(${rotate}deg)`
    container.appendChild(img)
    img.addEventListener('click', e => {
        let point = parseInt(score.innerText)
        point++
        score.innerText = point
        img.style.transform = `rotate(${rotate}deg) scale(.05)`
        setTimeout(() => {
            container.removeChild(img)
            addfly()
            addfly()
        }, 300)

    })
}
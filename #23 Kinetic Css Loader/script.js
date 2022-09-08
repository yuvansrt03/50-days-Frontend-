const tri1 = document.querySelector('.tri1')
const tri2 = document.querySelector('.tri2')
var t1deg = 270
var t2deg = 180
var play = "t2"
a = setInterval(() => {
    if (play == "t1") {
        tri1.style.transform = `translateY(50%) rotate(${t1deg}deg)`
        t1deg += 180
        play = "t2"
    }
    else {
        tri2.style.transform = `translateY(-50%) rotate(${t2deg}deg)`
        t2deg += 180
        play = "t1"
    }
}, 500)
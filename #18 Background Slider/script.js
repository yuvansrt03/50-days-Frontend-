const body = document.querySelector("body");
const coverpic = document.querySelector(".coverpic")
let arr = ["Images/img1.jpg", "Images/img2.jpg", "Images/img3.jpg", "Images/img4.jpg", "Images/img5.jpg"]
const left_arrow = document.querySelector('.left')
const right_arrow = document.querySelector('.right')
let i = 0;


right_arrow.addEventListener('click', () => {
    i++
    if (i > 4) {
        i = 0
    }
    body.style.cssText += `background:url(${arr[i]});background-size: fill;background-repeat: no-repeat;background-position: center;`;
    coverpic.style.cssText += `background:url(${arr[i]});background-size: fill;background-repeat: no-repeat;background-position: center;`;
})
left_arrow.addEventListener('click', () => {
    i--
    if (i < 0) {
        i = 4
    }
    body.style.cssText += `background:url(${arr[i]});background-size: fill;background-repeat: no-repeat;background-position: center;`;
    coverpic.style.cssText += `background:url(${arr[i]});background-size: fill;background-repeat: no-repeat;background-position: center;`;
})

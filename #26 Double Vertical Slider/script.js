let arr = ['rgb(253,175,253)', 'rgb(18,3,25)', 'rgb(241,171,208)', 'rgb(46,57,111)', 'rgb(250,138,31)', 'rgb(153,21,42)']
for (i = 1; i <= 6; i++) {
    document.querySelector(`.img${i}`).style.cssText = `height: 100vh;width: 100%;background-image: url('IMAGES/wallpaperflare.com_wallpaper\ \(1${i - 1}\).jpg');background-size: cover;background-position:center`
    document.querySelector(`.img-${i}`).style.cssText = `background-color:${arr[i - 1]}`
}
const desc_sec = document.querySelector('.desc-section')
const img_sec = document.querySelector('.images-section')
const arrow_up = document.querySelector('.arrow-up')
const arrow_down = document.querySelector('.arrow-down')
let desc;
let img;
desc = 0;
img = -500;
arrow_down.addEventListener('click', () => {
    if (desc == -500) {
        desc = 100;
    }
    if (img == 0) {
        img = -600;
    }
    desc -= 100;
    img += 100;
    desc_sec.style.transform = `translateY(${desc}vh)`;
    arrow_down.style.transform = `translateY(${-desc}vh)`
    arrow_up.style.transform = `translateY(${desc}vh)`;
    img_sec.style.transform = `translateY(${img}vh)`;

})
arrow_up.addEventListener('click', () => {
    if (desc == 0) {
        desc = -600;
    }
    if (img == -500) {
        img = 100;
    }
    desc += 100;
    img -= 100;
    desc_sec.style.transform = `translateY(${desc}vh)`;
    arrow_down.style.transform = `translateY(${-desc}vh)`
    arrow_up.style.transform = `translateY(${desc}vh)`;
    img_sec.style.transform = `translateY(${img}vh)`;

})
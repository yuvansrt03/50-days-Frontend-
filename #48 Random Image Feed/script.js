const container = document.querySelector('.container')
for (i = 0; i < 15; i++) {
    let IMG_URL = `https://source.unsplash.com/random/${i}`
    let box = document.createElement('div')
    box.classList.add('box')
    box.style.backgroundImage = `url(${IMG_URL})`
    container.appendChild(box)
}
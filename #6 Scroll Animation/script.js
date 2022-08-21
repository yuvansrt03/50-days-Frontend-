const boxes = document.querySelectorAll('.box')
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerbottom = window.innerHeight - 100

    boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop < triggerbottom) {
            box.classList.add('show')
        }
        else {
            box.classList.remove('show')
        }
    })
}   
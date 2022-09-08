const boxes = document.querySelectorAll('.box')
const container = document.querySelector('.container')
const pic = document.querySelector('.pic')
pic.addEventListener('dragstart', () => {
    pic.classList.add('ondrag')
    pic.parentElement.classList.add('ondrag')
})
pic.addEventListener('dragend', (e) => {
    pic.classList.remove('ondrag')
    var point = e.clientX
    boxes.forEach(box => {
        var box_left = box.getBoundingClientRect().left
        var box_right = box.getBoundingClientRect().right
        if (point > box_left && point < box_right) {
            box.appendChild(pic)
        }
    })
})
boxes.forEach(box=>{
    box.addEventListener('dragover', (e) => {
        box.classList.add('ondragover')
    })
})

boxes.forEach(box=>{
    box.addEventListener('dragleave', (e) => {
        box.classList.remove('ondragover')
    })
})

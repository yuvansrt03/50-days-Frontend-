
const imgess = document.querySelectorAll('.imges')

imgess.forEach((imges) => {
    imges.addEventListener('click', () => {
        if (imges.classList.contains('active')) {
            removeactiveclass()
        }
        else {
            removeactiveclass()
            imges.classList.add('active')
        }
    })
})

function removeactiveclass() {
    imgess.forEach((imges) => {
        imges.classList.remove('active')
    })
}



const sliders = document.querySelectorAll('.sliders')

sliders.forEach((slider, index) => {
    slider.addEventListener('click', (e) => {
        console.log(e)
        if (sliders[0].checked && sliders[1].checked && sliders[2].checked) {
            if (sliders[0] === e.target) {
                sliders[2].checked = false
            }
            if (sliders[1] === e.target) {
                sliders[0].checked = false
            }
            if (sliders[2] === e.target) {
                sliders[1].checked = false
            }
        }
    })
})



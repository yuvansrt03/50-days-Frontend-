const container = document.querySelector('.container')
const inputs = document.querySelectorAll('textarea')
const num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
inputs.forEach(input => {
    input.addEventListener('keyup', e => {
        if (e.key != "Backspace" && e.key != "Enter") {
            if (e.target.nextElementSibling == null)
                e.target.classList.add('written')
            e.target.nextElementSibling.focus()
            e.target.classList.add('written')
        }
        else if (e.key == "Backspace") {
            e.target.classList.remove('written')
            e.target.previousElementSibling.focus()
        }
    })

})
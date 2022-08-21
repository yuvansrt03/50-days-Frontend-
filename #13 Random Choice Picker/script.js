const textarea = document.querySelector('textarea')
const chocon = document.querySelector('.choicesContainer')
const choices = document.querySelectorAll('.choice')

const choice = document.createElement('div')
choice.classList.add('choice')
console.log(choices)
const box = setInterval(() => {
    let i
    let array = textarea.value.split(",")
    let length = array.length
    array.forEach((item, idx) => {
        const choices = document.querySelectorAll('.choice')
        chocon.appendChild(choice)
        console.log(choices)
    })
}, 1000)
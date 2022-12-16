const submits = document.querySelectorAll('.submit')
const options = document.getElementsByName('a');
const point = document.querySelector('.point')
let count = 0;
options.forEach(option => {
    option.addEventListener('click', e => {
        console.log(option.parentElement.parentElement.parentElement.lastChild)
        option.parentElement.parentElement.parentElement.lastChild.disabled = true
    })
})
submits.forEach(submit => {
    submit.addEventListener('click', e => {
        options.forEach(option => {
            if (option.checked) {
                if (option.getAttribute('ans') == 'correct') count++
                point.innerText = count
            }
        });
        console.log(count)
        e.target.parentElement.classList.remove('active')
        e.target.parentElement.nextElementSibling.classList.add('active')

    })
})

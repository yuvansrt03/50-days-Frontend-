const items = document.querySelectorAll('.item')
const feedback_el = document.querySelector('.feedback')
const thankyou_el = document.querySelector('.thankyou')
const exp = document.querySelector('.exp')
const btn = document.querySelector('.submit')
var feedback = null;
items.forEach((item) => {
    item.addEventListener('click', e => {
        removeselected()
        e.target.classList.add('selected')
        feedback = e.target.getAttribute('name')
        exp.innerText = "Feedback:" + feedback;
    })
})

function removeselected() {
    items.forEach(item => {
        if (item.classList.contains('selected')) item.classList.remove('selected')
    })
}

btn.addEventListener('click', () => {
    if (feedback != null) {

        thankyou_el.classList.remove('hide')
        feedback_el.classList.add('hide')
    }
})


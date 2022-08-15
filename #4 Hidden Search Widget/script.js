const btn = document.querySelector('.btn')
const rel = document.querySelector('.rel')
const inp = document.querySelector('.input')
btn.addEventListener('click', () => {
    btn.classList.toggle('rel')
    inp.classList.toggle('active')
})
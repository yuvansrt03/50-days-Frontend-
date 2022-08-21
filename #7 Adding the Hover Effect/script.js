const ps5 = document.querySelector('.ps5')
const xbox = document.querySelector('.xbox')
ps5.addEventListener('mouseover', () => {
    ps5.style.width = "75%"
    xbox.style.width = "25%"
})
ps5.addEventListener('mouseleave', () => {
    ps5.style.width = "50%"
    xbox.style.width = "50%"
})
xbox.addEventListener('mouseover', () => {
    ps5.style.width = "25%"
    xbox.style.width = "75%"
})
xbox.addEventListener('mouseleave', () => {
    ps5.style.width = "50%"
    xbox.style.width = "50%"
})
const loading = document.querySelectorAll('.loading-bar')
const containers = document.querySelectorAll('.container')
let i = 0
function add() {
    containers[i].classList.add('active')
    setTimeout(() => {
        loading[i].classList.add('end')
    }, 10)
}
add()
setInterval(() => {
    containers[i].classList.remove('active')
    i += 1;
    setTimeout(() => {
        add()
    }, 1)
}, 5100)

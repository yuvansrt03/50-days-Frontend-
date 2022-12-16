const items = document.querySelectorAll('.box-items')
console.log()
items.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = `rgb(${Math.floor(Math.random() * 129)},${Math.floor(Math.random() * 129)},${Math.floor(Math.random() * 129)},1)`;
        setTimeout(() => {
            item.classList.add('fadeout')
            item.style.backgroundColor = 'rgb(128, 128, 128, 0.5)'
        }, 1000)
        item.classList.remove('fadeout')
    })
});
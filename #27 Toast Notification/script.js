let colors = ['red', 'blue', 'orange', 'green', 'black']
let numbers = ['One', 'Two', 'Three', 'Four', 'Five']
let random = Math.floor(Math.random() * 5);
let notification = document
let btn = document.querySelector('.btn')
popup_id = 0;
btn.addEventListener('click', () => {
    random = Math.floor(Math.random() * 5);
    let popup = document.createElement('div')
    popup.classList.add('popup')
    popup.innerHTML = `Message ${numbers[random]}`
    popup.style.cssText += `color:${colors[random]}`
    document.querySelector('.notification').appendChild(popup)
    const a = setTimeout(() => {
        popup.remove();
    }, 2000)
})
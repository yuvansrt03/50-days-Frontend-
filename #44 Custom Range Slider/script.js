const slider = document.querySelector('.slider')
const value = document.querySelector('.value')
slider.addEventListener('input', e => {
    value.innerText = e.target.value;
    value.style.transform = `translateY(-25px) translateX(-25%)translateX(${(value.innerText / 100) * 180}px)`
})
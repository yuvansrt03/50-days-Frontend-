const img = document.querySelector('.back-img')

const pass = document.querySelector('.password')


pass.addEventListener('keyup', () => {
    var number = pass.value.length;
    if (number > 8) img.style.cssText = `filter:blur(0px)`
    else img.style.cssText = `filter:blur(${scale(number, 0, 8, 8, 0)}px)`

})








function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

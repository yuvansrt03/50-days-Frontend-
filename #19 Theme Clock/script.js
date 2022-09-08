const dark_mode_btn = document.querySelector('.dark-mode')
const body = document.querySelector('body')
const min_hand = document.querySelector('.minute-hand')
const seconds_hand = document.querySelector('.second-hand')
const hr_hand = document.querySelector('.hour-hand')
const disp_time = document.querySelector('.date-time .time')
const disp_day = document.querySelector('.date-time .day')
dark_mode_btn.addEventListener('click', () => {
    body.classList.toggle('dark')
    dark_mode_btn.classList.toggle('dark')
    hr_hand.classList.toggle('dark')
    min_hand.classList.toggle('dark')
    disp_time.classList.toggle('dark')
    disp_day.classList.toggle('dark')
})
const a = setInterval(() => {
    var date = Date()
    var date_array = date.split(' ')
    var second = date_array[4].split(':')[2]
    var min = date_array[4].split(':')[1]
    var hr = date_array[4].split(':')[0]
    seconds_hand.style.transform = `translateX(-50%) rotate(${scale(second, 0, 59, 90, 445)}deg)`
    min_hand.style.transform = `translateX(-50%) rotate(${scale((parseInt(min) + (scale(second, 0, 59, 0, 100) / 100)), 0, 59, 90, 450)}deg)`
    hr_hand.style.transform = `translateX(-50%) rotate(${scale((parseInt(hr) + (scale(min, 0, 59, 0, 100) / 100)), 0, 12, 90, 450)}deg)`
    disp_time.innerHTML = ((hr > 12) ? (hr - 12) : hr) + ":" + min + ((hr >= 12 & (hr != 24)) ? " PM" : "AM")
    disp_day.innerHTML = date_array[0] + " " + date_array[1] + "  <span>" + date_array[2] + "</span>"
}, 10);

function scale(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
const items = document.querySelectorAll('.items')
const sounds = document.querySelectorAll('.sounds')
items.forEach((item, idx) => {
    item.addEventListener('click', () => {
        stopSongs()
        sounds[idx].play()
    })
})

function stopSongs() {
    items.forEach((item, idx) => {
        sounds[idx].pause()
        sounds[idx].currentTime = 0;
    })
}
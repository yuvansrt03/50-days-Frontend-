const nxt = document.querySelector('.nxt-btn')
const joke = document.querySelector('.joke')
getjoke()
nxt.addEventListener('click', getjoke)
function getjoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com/', config)
        .then((response) => response.json())
        .then((data) => {
            joke.innerHTML = data.joke
        });
}
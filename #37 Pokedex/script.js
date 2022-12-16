const API_URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=150'
const IMG_URL = 'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world'
const container = document.querySelector('.container')

var colours = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
};
var poke_back = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: 'E6E0D4',
    normal: '#F5F5F5'
}
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
getdata(API_URL)
async function getpokedata(url) {
    await axios.get(url)
        .then(response => {
            console.log(response.data)
            container.innerHTML += `<div class="pokemon">
            <div class="img-frame">
                <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${response.data.id}.svg" alt="">
            </div>
            <div class="name">${capitalize(response.data.species.name)}</div>
            <div class="id">#${response.data.id.toString().padStart(3, '0')}</div>
            <ul class="type">
            </ul>
        </div>`
            const types = document.querySelectorAll('.type')
            const pokemonback = document.querySelectorAll('.pokemon')
            response.data.types.forEach(element => {
                const liel = document.createElement('li')
                console.log(element.type.name)
                var type = element.type.name
                liel.innerText = element.type.name.toUpperCase()
                liel.style.backgroundColor = colours[type]
                pokemonback[pokemonback.length - 1].style.backgroundColor = poke_back[response.data.types[0].type.name]
                types[types.length - 1].appendChild(liel)
            })
        })
}
var i
async function getdata(url) {
    await axios.get(url)
        .then((response) => {
            var poke_data = response.data.results
            console.log(poke_data.length)
            for (i = 0; i < poke_data.length; i++) {
                getpokedata(poke_data[i].url)
            }


        })
}

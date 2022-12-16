const API_URL = "https://randomuser.me/api/?results=50"
const users = document.querySelector('.users')

function adduser() {

    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            for (i = 0; i < 50; i++) {
                const info = data.results[i]
                const name = info.name
                const location = info.location
                const image = info.picture.thumbnail

                const user_info = document.createElement('div')
                const pic_el = document.createElement('div')
                const info_el = document.createElement('div')
                const name_el = document.createElement('div')
                const city_el = document.createElement('div')


                user_info.classList.add('user-info')
                pic_el.classList.add('pic')
                info_el.classList.add('info')
                name_el.classList.add('name')
                city_el.classList.add('city')

                user_info.appendChild(pic_el)
                user_info.appendChild(info_el)
                info_el.appendChild(name_el)
                info_el.appendChild(city_el)

                users.appendChild(user_info)
                city_el.innerText = location.state + "," + location.country
                name_el.innerText = name.first + " " + name.last
                pic_el.style.backgroundImage = `url(${image})`
            }
            const user_name = document.querySelectorAll('.name')
            const search = document.querySelector('.search')
            console.log(user_name)
            search.addEventListener('input', e => {
                user_name.forEach(item => {
                    if (item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
                        item.parentElement.parentElement.classList.remove('hide')
                    }
                    else {
                        item.parentElement.parentElement.classList.add('hide')
                    }
                })
            })
        });
}
adduser()



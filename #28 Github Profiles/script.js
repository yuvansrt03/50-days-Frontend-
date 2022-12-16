const API_URL = 'https://api.github.com/users/'
const container = document.querySelector('.container')
const profile = document.querySelector(".profile");
const nores = document.querySelector('.nores')
async function getdata(username) {
    axios.get(API_URL + username)
        .then(res => {
            console.log(res)
            console.log(res.data)
            console.log(res.code)

            nores.innerHTML = ''
            profile.innerHTML = `
                            <img src=${res.data.avatar_url} alt="">
                            <div class="details">
                                <div class="name">${res.data.name}</div>
                                <div class="about">${res.data.bio}</div>
                                <div class="ffr">
                                    <ul>
                                        <li>${res.data.followers} Followers</li>
                                        <li>${res.data.following} Following</li>
                                        <li>${res.data.public_repos} Repos</li>
                                    </ul>
                                </div>
                                
                            </div>`
            axios.get(res.data.repos_url + '?sort=created')
                .then(repos => {
                    const divel = document.createElement('div');
                    const ulel = document.createElement('ul');
                    divel.appendChild(ulel);
                    const details = document.querySelector('.details')
                    details.appendChild(divel);
                    divel.classList.add('repos')
                    console.log(repos)
                    repos.data.slice(0, 11).forEach(repo => {
                        const liel = document.createElement('li')
                        liel.innerHTML = repo.name;
                        ulel.appendChild(liel)
                    });
                });


        })
        .catch(err => {
            console.log(err)
            profile.innerHTML = ""
            nores.innerHTML = ''
            nores.innerHTML += `<span>No results available</span>`
        })

}
const search = document.getElementById('Search')

search.addEventListener('keydown', (e) => {
    if (e.key == "Enter") {
        getdata(search.value)
        console.log("here")
    }
})

/*
<div class="repos">
                                <ul>
                                    <li>repo_1</li>
                                    <li>repo_2</li>
                                    <li>repo_3</li>
                                </ul>
                            </div> */

/*<div class="nores">
            No results Available
        </div> */
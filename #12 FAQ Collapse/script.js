let qns = ["Why shouldn't we trust atoms?", "What do you call someone with no body and no nose", "What's the object-oriented way to become wealthy", "How many tickles does it take to tickle on octopus", "What is 1+1?"]

let ans = ["They make up everything", "Nobody Knows", "Inheritance", "Ten-Tickles", "Depends on who are you asking"]

const expands = document.querySelectorAll('.expand')
const spans = document.querySelectorAll('.questions span')
const items = document.querySelectorAll('.items')
const ps = document.querySelectorAll('.items p')
const icon = document.querySelectorAll('.material-symbols-outlined')
var i = 0;


expands.forEach((expand, idx) => {
    expand.addEventListener('click', () => {
        expand.classList.toggle('marked')
        icon[idx].classList.toggle('md-32')
        items[idx].classList.toggle('extend')
        if (expand.classList.contains('marked')) {
            spans[idx].innerHTML = "close"
            ps[idx].innerHTML += "<br><br><br>" + "<span class='short'>" + ans[idx] + "</span>"
            console.log(ps[idx])
        }
        else {
            spans[idx].innerHTML = "expand_more"
            ps[idx].innerHTML = qns[idx]
        }
    }
    )
})
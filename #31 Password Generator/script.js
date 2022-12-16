const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZD"
const lowercase = "abcdefghijklmnopqrstuvwxyza"
const numbers = "012345678901234567890123454"
const symbols = "!@#$%^&<>?/@$%$#{}][()|!@#$"

const upcheck = document.querySelector("#upcase")
const lowcheck = document.querySelector("#lowcase")
const numcheck = document.querySelector("#numcase")
const symcheck = document.querySelector("#symcase")
const length = document.querySelector("#passlen")
const copy = document.querySelector('.paste')
const passtext = document.querySelector(".passText")

copy.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = passtext.innerHTML;

    if (!password) { return }

    textarea.value = password;
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert("The Password is copied;")
})

function generate() {
    var passwordel = document.querySelector("#password")
    var randomselect;
    var password = ""
    var num = length.value
    randomselect = Math.floor(Math.random() * 26)
    do {
        if (upcheck.checked == true && num > 0) {
            password += uppercase[randomselect]
            num--
            randomselect = Math.floor(Math.random() * 26)
        }
        if (lowcheck.checked == true && num > 0) {
            password += lowercase[randomselect]
            num--
            randomselect = Math.floor(Math.random() * 26)
        }
        if (numcheck.checked == true && num > 0) {
            password += numbers[randomselect]
            num--
            randomselect = Math.floor(Math.random() * 26)
        }
        if (symcheck.checked == true && num > 0) {
            password += symbols[randomselect]
            num--
            randomselect = Math.floor(Math.random() * 26)
        }
    }
    while (num > 0)
    passtext.innerText = password

}


const email = document.querySelector(".email")
const pass = document.querySelector(".password")
const emailp = document.querySelectorAll('.email p')
const passp = document.querySelectorAll('.password p')
const inp = document.querySelectorAll(".input")
const input = document.querySelectorAll("input")
inp[0].addEventListener('focusin', liftingemail)
inp[1].addEventListener('focusin', liftingpassword)
inp[0].addEventListener('focusout', () => {
    if (input[0].value == '') {
        email.style.color = "rgb(255,255,255)"
        for (i = 0; i < emailp.length; i++) {
            emailp[i].style.transform = "translateY(0px)"
        }
    }
})
inp[1].addEventListener('focusout', () => {
    if (input[1].value == '') {
        pass.style.color = "rgb(255,255,255)"
        for (i = 0; i < passp.length; i++) {
            passp[i].style.transform = "translateY(0px)"
        }
    }
})
function liftingemail() {
    email.style.color = "rgb(56,116,172)"
    for (i = 0; i < emailp.length; i++) {
        emailp[i].style.transform = "translateY(-20px)"
        emailp[i].style.transitionDuration = ".1s"
        emailp[i].style.transitionDelay = i * 0.05 + "s"

    }
}
function liftingpassword() {
    pass.style.color = "rgb(56,116,172)"
    for (i = 0; i < passp.length; i++) {
        passp[i].style.transform = "translateY(-20px)"
        passp[i].style.transitionDuration = ".2s"
        passp[i].style.transitionDelay = i * 0.05 + "s"
    }
}


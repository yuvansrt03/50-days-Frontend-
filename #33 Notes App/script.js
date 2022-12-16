
let edit_btn = document.querySelectorAll('.edit')
let textarea = document.querySelectorAll('.textarea')
let delete_btn = document.querySelectorAll('.delete')
const add = document.querySelector('.add')
const container = document.querySelector('.container')
add.addEventListener('click', () => {

    container.innerHTML += `<div class="note">
    <div class="topbar">
        <div class="edit"><i class="fa-solid fa-pen-to-square"></i></div>
        <div class="delete"><i class="fa-solid fa-trash"></i></div>
    </div>
    <textarea name="note" id="" cols="30" rows="10" class="textarea"></textarea>
    <div class="write"></div>
</div>`
    let edit_btn = document.querySelectorAll('.edit')
    let delete_btn = document.querySelectorAll('.delete')
    edit_btn.forEach(element => {
        element.addEventListener('click', (e) => {
            console.log(e.path[2].nextElementSibling.nextElementSibling)
            var text = e.path[2].nextElementSibling.value
            console.log(text)
            e.path[2].nextElementSibling.nextElementSibling.innerHTML = marked(text)
            e.path[2].nextElementSibling.hasAttribute('disabled') ? e.path[2].nextElementSibling.removeAttribute('disabled') : e.path[2].nextElementSibling.setAttribute('disabled', true);
        })
    });
    delete_btn.forEach(element => {
        element.addEventListener('click', (e) => {
            const notes = document.querySelectorAll('.note')
            console.log(e.path)
            container.removeChild(e.path[3])
        })
    })
})
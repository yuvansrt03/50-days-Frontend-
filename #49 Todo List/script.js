const input = document.querySelector('input')
const container = document.querySelector('.container')
var todosave = JSON.parse(localStorage.getItem('todo'))
if (todosave) {
    todosave.forEach(todo => {
        const todoel = document.createElement('div')
        todoel.classList.add('todo')
        todoel.innerText = todo.text
        container.appendChild(todoel)
        if (todo.completed) todoel.classList.add('strike')
        todoel.addEventListener('click', e => {
            todoel.classList.toggle('strike')
            updateLS()
        })
        todoel.addEventListener('contextmenu', e => {
            e.preventDefault()
            container.removeChild(todoel)
            updateLS()
        })
    })
}
input.addEventListener('keydown', e => {
    if (e.key == "Enter") {
        const todoel = document.createElement('div')
        const value = e.target.value
        todoel.classList.add('todo')
        todoel.innerText = value
        container.appendChild(todoel)
        todoel.addEventListener('click', e => {
            todoel.classList.toggle('strike')
            updateLS()
        })
        todoel.addEventListener('contextmenu', e => {
            e.preventDefault()
            container.removeChild(todoel)
            updateLS()
        })
        e.target.value = ''
        updateLS()
    }
})
function updateLS() {
    var todoels = document.querySelectorAll('.todo')
    const todo = [];
    todoels.forEach(todoel => {
        todo.push({
            text: todoel.innerText,
            completed: todoel.classList.contains('strike')
        })
    })
    var todosave = JSON.stringify(todo)
    localStorage.setItem('todo', todosave)
}

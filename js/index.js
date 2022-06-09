'use strict'
const add = document.getElementById('add')
const clear = document.getElementById('clear')
const url = document.getElementById('url')
const load = document.getElementById('load')
const list = document.getElementById('list')

const storage = new ArrayStorage('tasks')
const tasks = storage.list

function taskToDOM(task) {
    if (typeof task === 'string' && task) {
        const li = document.createElement('li')
        const remove = document.createElement('button')

        li.textContent = task
        remove.textContent = 'REMOVE'

        li.appendChild(remove)
        list.insertBefore(li, list.firstChild)
        remove.addEventListener('click', () => {
            const value = remove.parentNode.firstChild.textContent
            storage.remove(value)
            list.removeChild(remove.parentNode)
        })
        return true

    }
    return false
}

tasks.forEach((task) => taskToDOM(task))

function newTask() {
    if (storage.list.indexOf(input.value) === -1 && taskToDOM(input.value)) {
        storage.set(input.value)
        input.value = ''
    }
    input.focus()
}
add.addEventListener('click', newTask)
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        newTask()

    }
})
clear.addEventListener('click', () => {
    storage.clear()
    list.innerHTML = ''
})
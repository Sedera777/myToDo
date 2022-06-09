'use strict'
class ArrayStorage {
    constructor(name) {
        this.name = name
        this.list = this.get()
    }
    get() {
        if (!localStorage.getItem(this.name)) {
            localStorage.setItem(this.name, '[]')
        }
        return JSON.parse(localStorage.getItem(this.name))
    }
    set(value) {
        this.list.push(value)
        localStorage.setItem(this.name, JSON.stringify(this.list))
    }
    remove(value) {
        const index = this.list.indexOf(value)
        this.list.splice(index, 1)
        localStorage.setItem(this.name, JSON.stringify(this.list))

    }
    clear() {
        localStorage.removeItem(this.name)
    }
}
// async function getTasks() {
//     const response = await fetch('./js/data.json')
//     if (response.ok) {
//         return response.json()
//     }
//     throw new Error(`${response.statusText} (${response.status})`)

// }
// try {
//     getTasks().then(tasks => {
//         tasks.forEach(task => {
//             const h2 = document.createElement('h2')
//             h2.textContent = task
//             document.body.appendChild(h2)
//         })
//     })
// } catch (e) {
//     console.error(e)
// }
// fetch('./js/data.json')
//     .then(res => res.json())
//     .then(tab => {
//         tab.forEach(task => {
//             const h2 = document.createElement('h2')
//             h2.textContent = task
//             document.body.appendChild(h2)
//         });
//     })
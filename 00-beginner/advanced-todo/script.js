// Add Todos
// User will type in todo and click add todo button. 
const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    const todoName = todoInput.value
    renderTodo(todoName)
    todoInput.value = ""
})
// This should then add todo to the list above.
function renderTodo(todoName) {
    const templateClone = template.content.cloneNode(true)
    const textElement = templateClone.querySelector("[data-list-item-text]")
    textElement.innerText = todoName
    list.appendChild(templateClone)
}

// Delete Todos
// Complete Todos
// Save Todos
// Load Todos
// Add Todos
// User will type in todo and click add todo button.
const form = document.querySelector("#new-todo-form");
const todoInput = document.querySelector("#todo-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");
const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST";
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`;
const todos = loadTodos();
todos.forEach(todo => renderTodo(todo))

list.addEventListener("change", (e) => {
    if(!e.target.matches("[data=list-item-checkbox]")) return

    // Get the todo that is clicked on
    // Toggle the complete property to be equal to the checkbox value
    // Save our updated todo
})

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoName = todoInput.value;
  if (todoName === "") return;
  const newTodo = {
    name: todoName,
    complete: false,
    id: new Date().valueOf().toString()
  }
  todos.push(newTodo);
  renderTodo(newTodo);
  saveTodos();
  todoInput.value = "";
});

// This should then add todo to the list above.
function renderTodo(todo) {
  const templateClone = template.content.cloneNode(true);
  const listItem = templateClone.querySelector(".list-item")
  listItem.dataset.todoId = todo.id
  const textElement = templateClone.querySelector("[data-list-item-text]");
  textElement.innerText = todo.name;
  list.appendChild(templateClone);
}

// Load Todos
function loadTodos() {
  const todosString = localStorage.getItem(TODOS_STORAGE_KEY);
  return JSON.parse(todosString) || []
}

// Save Todos
function saveTodos() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
}

// Delete Todos
// Complete Todos

//mock todos
let todos = [
    {id: 1, text: "Learnt JS", completed: false},
    {id: 2, text: "Learnt JS", completed: false},
    {id: 3, text: "Learnt JS", completed: false},
];

//function to render todos
function renderTodos() {
    const todoList = document.getElementById("todoList")
    todoList.innerHTML = "";
    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = ("todo-item");

        li.innerHTML = `
            <span>${todo.text}</span>
            <button id="delete-btn" data-id=${todo.id}>Delete</button>
        `;

        todoList.appendChild(li);
    });
}
renderTodos();

// function to delete todos
const deleteBtn = document.getElementById("delete-btn");
deleteBtn.onclick = function(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

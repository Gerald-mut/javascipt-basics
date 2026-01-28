// Local storage helper (must come FIRST)
const storage = {
    get(key) {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    },
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// Load todos from localStorage or use defaults
let todos = storage.get('todos') || [
    { id: 1, text: "Learn JavaScript", completed: false },
    { id: 2, text: "Build todo app", completed: false },
    { id: 3, text: "Deploy app", completed: false },
];

// Save todos
function saveTodos() {
    storage.set('todos', todos);
}

// Render todos
function renderTodos() {
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    todos.forEach(todo => {
        const li = document.createElement("li");
        li.className = "todo-item";

        li.innerHTML = `
            <span>${todo.text}</span>
            <button class="delete-btn" data-id="${todo.id}">Delete</button>
        `;

        todoList.appendChild(li);
    });
}

// Add todo
function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();

    if (text === "") {
        alert("Please enter a todo");
        return;
    }

    const newTodo = {
        id: Date.now(),
        text,
        completed: false
    };

    todos.push(newTodo);
    saveTodos();
    renderTodos();

    input.value = "";
}

// Delete todo
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    renderTodos();
}

// Event listeners
document.getElementById("addBtn").addEventListener("click", addTodo);

document.getElementById("todoList").addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        const id = Number(e.target.dataset.id);
        deleteTodo(id);
    }
});

// Initial render
renderTodos();



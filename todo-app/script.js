//Array to store todo's objects
let todos = [
    {id: 1, text: "Learn javascript", completed: false},
    {id: 1, text: "Build todo app", completed: false},
    {id: 1, text: "Deploy app", completed: false},
];
// Function to render todos
function renderTodos() {
    const todoList = document.getElementById("todoList");

    // Clear current list
    todoList.innerHTML = "";
    // Loop through todos and create html for each 
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
        <span>${todo.text}</span>
        <button onclick="deleteTodo(${todo.id})">Delete</button>`;
        todoList.appendChild(li);
    });
    
}

renderTodos();

function addTodo() {
    const input = document.getElementById("todoInput");
    const text = input.value.trim();

    if(text === "") {
        alert("Please enter a todo");
        return;
    }

    //create a new todo object
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    //add to array
    todos.push(newTodo);

    //clear input
    todos.value = "";

    renderTodos();

}

//add event listener to button
document.getElementById("addBtn").addEventListener("click", addTodo);
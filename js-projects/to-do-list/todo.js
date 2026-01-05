document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskBtn = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            li.textContent = task.text;
            if (task.completed)
                li.classList.add("completed");
            const completeBtn = document.createElement("button");
            completeBtn.textContent = "Done";
            completeBtn.onclick = () => {
                tasks[index].completed = !tasks[index].completed;
                saveAndRender();
            };
            const deleteBtn = document.createElement("button");
            deleteBtn,textContent = "not done";
            deleteBtn.onclick = () => {
                tasks.splice(index, 1);
                saveAndRender();
            };
        });
    }
    function saveAndRender() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        renderTasks();
    }

    addTaskBtn.addEventListener("click", () => {
        if (taskInput.value.trim() === "")
            return;
        tasks.push({ text: taskInput.value, completed: false });
        taskInput.value = "";
        saveAndRender();
    });

    renderTasks();
});
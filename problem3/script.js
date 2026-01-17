let tasks = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === '') {
        alert("Please enter a task!");
        return;
    }

    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    tasks.push(task);
    taskInput.value = '';

    renderTasks();
}

function toggleComplete(id) {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = !tasks[i].completed;
            break;
        }
    }
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

let currentFilter = 'all';

function filterTasks(status) {
    currentFilter = status;
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    let completedCount = 0;

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        if (currentFilter === 'active' && task.completed) continue;
        if (currentFilter === 'completed' && !task.completed) continue;

        if (task.completed) completedCount++;

        const li = document.createElement('li');
        if (task.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <span onclick="toggleComplete(${task.id})" style="cursor: pointer;">${task.text}</span>
            <button onclick="deleteTask(${task.id})" style="background: #ffcccc; border: none; color: red;">X</button>
        `;

        taskList.appendChild(li);
    }

    document.getElementById('completedCount').innerText = completedCount;
}

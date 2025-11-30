// Persisting To-Do List with Local Storage
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // In-memory tasks array; each task is { id: string, text: string }
    let tasks = [];

    // Helper: Save current tasks array to localStorage
    function saveTasksToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Helper: Create a single task DOM element and append to list
    // This function uses the task object { id, text }
    function renderTask(task) {
        const li = document.createElement('li');
        li.textContent = task.text;
        li.setAttribute('data-id', task.id);

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';

        // When clicked, remove the task both from DOM and from tasks array, then update localStorage
        removeBtn.addEventListener('click', function () {
            // Remove from tasks array by id
            tasks = tasks.filter(t => t.id !== task.id);
            // Update localStorage
            saveTasksToLocalStorage();
            // Remove from DOM
            if (li.parentElement) {
                li.parentElement.removeChild(li);
            }
        });

        // Append remove button to li and li to the task list
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    }

    // Add a task (taskText is string). saveToStorage (default true) controls whether to update localStorage.
    function addTask(taskText, saveToStorage = true) {
        const trimmed = String(taskText).trim();
        if (trimmed === '') {
            alert('Please enter a task.');
            return;
        }

        // Create task object with unique id
        const task = {
            id: Date.now().toString() + '-' + Math.random().toString(36).slice(2),
            text: trimmed
        };

        // Add to in-memory array
        tasks.push(task);

        // Render the new task to the DOM
        renderTask(task);

        // Optionally save to localStorage
        if (saveToStorage) {
            saveTasksToLocalStorage();
        }

        // Clear the input field
        taskInput.value = '';
    }

    // Load tasks from localStorage and render them
    function loadTasks() {
        const stored = localStorage.getItem('tasks');
        if (!stored) return;

        try {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) {
                tasks = parsed;
                tasks.forEach(task => renderTask(task));
            } else {
                // If stored data is corrupted, reset it
                tasks = [];
                saveTasksToLocalStorage();
            }
        } catch (err) {
            // If parsing fails, clear storage and start fresh
            console.error('Failed to parse tasks from localStorage:', err);
            tasks = [];
            saveTasksToLocalStorage();
        }
    }

    // Event listeners
    addButton.addEventListener('click', function () {
        addTask(taskInput.value, true);
    });

    // Allow pressing Enter to add a task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask(taskInput.value, true);
        }
    });

    // Initialize: load tasks from localStorage on page load
    loadTasks();
});

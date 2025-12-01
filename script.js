// Run the script only after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {

    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get and trim text

        // If empty, ask user to enter something
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create an li for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a Remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // When clicked, remove the task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Add Remove button into the li
        li.appendChild(removeButton);

        // Add li to the task list
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task when pressing Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});

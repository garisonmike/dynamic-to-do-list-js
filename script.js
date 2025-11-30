// Run the script only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the task input text
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item for the task
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // Add remove functionality
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to the task
        li.appendChild(removeBtn);

        // Add the task to the list
        taskList.appendChild(li);

        // Clear the input
        taskInput.value = "";
    }

    // Event listener for Add Task button
    addButton.addEventListener('click', addTask);

    // Allow pressing Enter to add task
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

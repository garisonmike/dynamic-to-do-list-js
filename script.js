// Run the script only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select the DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function for adding tasks
    function addTask() {
        // Get and trim the entered text
        const taskText = taskInput.value.trim();

        // If input is empty, alert the user
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create a new list item (li)
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        // Remove functionality
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li, then li to list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add Task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add Task when Enter key is pressed
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

});

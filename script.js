// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        // Retrieve and trim the value from the task input field
        const taskText = taskInput.value.trim();

        // Check if taskText is empty
        if (taskText === "") {
            alert("Please enter a task.");
            return; // Stop function execution if empty
        }

        // Create a new li element and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element for removing the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add('remove-btn'); // Assign class name

        // Assign an onclick event to the remove button
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append the remove button to the li, then append the li to taskList
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the task input field
        taskInput.value = "";
    }

    // Attach Event Listeners

    // Add event listener to addButton to call addTask on click
    addButton.addEventListener('click', addTask);

    // Add event listener to taskInput for 'keypress' to allow "Enter" key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

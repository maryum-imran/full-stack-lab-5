

let form = document.getElementById("taskForm");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let error = document.getElementById("error");
let counter = document.getElementById("counter");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let taskText = taskInput.value.trim();

    if (taskText === "") {
        error.textContent = "Task cannot be empty";
        return;
    }

    let tasks = taskList.querySelectorAll("li");

    for (let task of tasks) {
        let text = task.querySelector("span").textContent;

        if (text.toLowerCase() === taskText.toLowerCase()) {
            error.textContent = "Task already exists";
            return;
        }
    }

    error.textContent = "";

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let span = document.createElement("span");
    span.textContent = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCounter();
});

taskList.addEventListener("click", function(event) {

    if (event.target.type === "checkbox") {

        let li = event.target.parentElement;

        if (event.target.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }

        updateCounter();
    }

    if (event.target.textContent === "Delete") {
        event.target.parentElement.remove();
        updateCounter();
    }
});

document.querySelector(".filters").addEventListener("click", function(event) {

    let filter = event.target.dataset.filter;

    if (!filter) {
        return;
    }

    let tasks = taskList.querySelectorAll("li");

    for (let task of tasks) {

        let checkbox = task.querySelector("input");

        if (filter === "all") {
            task.style.display = "flex";
        }

        if (filter === "active") {
            task.style.display = checkbox.checked ? "none" : "flex";
        }

        if (filter === "completed") {
            task.style.display = checkbox.checked ? "flex" : "none";
        }
    }
});

document.getElementById("clearCompleted").addEventListener("click", function() {

    let tasks = taskList.querySelectorAll("li");

    for (let task of tasks) {

        let checkbox = task.querySelector("input");

        if (checkbox.checked) {
            task.remove();
        }
    }

    updateCounter();
});

function updateCounter() {

    let tasks = taskList.querySelectorAll("li");
    let remaining = 0;

    for (let task of tasks) {

        let checkbox = task.querySelector("input");

        if (!checkbox.checked) {
            remaining++;
        }
    }

    counter.textContent =
        "Total: " + tasks.length +
        " | Remaining: " + remaining;
}
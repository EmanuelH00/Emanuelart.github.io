//info Date
const dateNumber = document.getElementById("dateNumber");
const dateText = document.getElementById("dateText");
const dateMonth = document.getElementById("dateMonth");
const dateYear = document.getElementById("dateYear");

// tasks container
const tasksContainer = document.getElementById("tasksContainer");


const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleDateString("ja", {day: "numeric"});
    dateText.textContent = date.toLocaleDateString("ja", {weekday: "long"});
    dateMonth.textContent = date.toLocaleDateString("ja", {month: "short"});
    dateYear.textContent = date.toLocaleDateString("ja", {year: "numeric"});
};

const addNewTask = event => {
    event.preventDefault();
    const {value} = event.target.taskText;
    if(!value) return;
    const task = document.createElement("div");
    task.classList.add("task", "redonborder");
    task.addEventListener("click", changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle("done");
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains("done") ? done.push(el) : toDo.push(el)
    })
    return [...toDo, ...done];
};

const renderOrderredTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el))
}

setDate();

var buttonE1 = document.querySelector("#save-task");
var tasksToDoE1 = document.querySelector("#tasks-to-do");
var formEl = document.querySelector("#task-form");

var createTaskHandler = function(){
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    var listItemEl = document.createElement("li");
    var taskInfoEl = document.createElement("div");

    taskInfoEl.className = "task-info";
    taskInfoEl.innerHTML = "<h3 class= 'task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.className = "task-item";
    listItemEl.appendChild(taskInfoEl);
    tasksToDoE1.appendChild(listItemEl);
    console.dir(listItemEl);


    
}

formEl.addEventListener("submit", createTaskHandler);
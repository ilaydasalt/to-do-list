var input = document.getElementById("taskInput");
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Görevleri "completed" listesine taşır veya geri alır
function moveTask(task, isCompleted) {
  var completedTasks = document.getElementById("completedTasks");
  var taskList = document.getElementById("taskList");

  if (isCompleted) {
    taskList.removeChild(task);
    completedTasks.appendChild(task);
  } else {
    completedTasks.removeChild(task);
    taskList.appendChild(task);
  }
}

function addTask() {
  var taskList = document.getElementById("taskList");
  var task = input.value;

  if (task.trim() !== "") {
    var li = document.createElement("li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.onclick = function () {
      this.parentNode.classList.toggle("completed");
      moveTask(this.parentNode, this.checked);
    };

    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task));

    taskList.appendChild(li);
    input.value = "";
  }
}

function toggleTask(event) {
  var task = event.target;
  task.classList.toggle("completed");
}

function deleteTask(event) {
  var task = event.target;
  var li = task.parentElement;
  li.remove();
}

var taskList = document.getElementById("taskList");
taskList.addEventListener("click", function (event) {
  var target = event.target;

  if (target.tagName === "LI") {
    toggleTask(event);
  } else if (target.tagName === "BUTTON") {
    deleteTask(event);
  }
});

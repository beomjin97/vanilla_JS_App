const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteTodo(event) {
  const li = event.target.parentElement;
  toDoList.removeChild(li);
}

function paintTodo(newTodo) {
  const li = document.createElement("li");

  const span = document.createElement("sapn");
  span.innerText = newTodo;
  li.appendChild(span);

  const button = document.createElement("button");
  button.innerText = "delete";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleTodoSubmit);

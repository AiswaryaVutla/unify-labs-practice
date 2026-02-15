const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearAll = document.getElementById("clearAll");

addBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

clearAll.addEventListener("click", () => {
  taskList.innerHTML = "";
  updateCount();
});

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  span.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✕";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateCount();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
  updateCount();
}

function updateCount() {
  const total = taskList.children.length;
  taskCount.textContent = `${total} Task${total !== 1 ? "s" : ""}`;
}

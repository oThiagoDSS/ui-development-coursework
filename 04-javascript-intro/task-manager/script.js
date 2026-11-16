"use strict";

// ---------- Element cache ----------
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");
const filterButtons = document.querySelectorAll(".filter");
const counter = document.getElementById("counter");
const clearDoneBtn = document.getElementById("clear-done");

// ---------- State ----------
const STORAGE_KEY = "task-manager:tasks";

// Single source of truth. The DOM is rendered FROM this array.
let tasks = [];
let currentFilter = "all";

// ---------- Persistence ----------
// All storage access is wrapped in try/catch: the app must keep working
// even when localStorage is unavailable (private mode, quota exceeded,
// or file:// origin blocks). Persistence is a nice-to-have, not critical.

function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    // Drop entries that don't match the expected shape, so a corrupted
    // or hand-edited storage can never crash the UI.
    return parsed.filter(
      (t) =>
        t &&
        typeof t.id === "string" &&
        typeof t.text === "string" &&
        typeof t.done === "boolean"
    );
  } catch {
    return [];
  }
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch {
    /* Persistence is best-effort. Silent failure is intentional. */
  }
}

// ---------- Rendering ----------
// Every action updates the `tasks` array, then calls render().
// The DOM never holds state on its own — this mirrors how modern
// frameworks (React, Vue, Svelte) work: state → UI, not UI → state.

function createTaskElement(task) {
  const item = document.createElement("li");
  item.className = "task";
  if (task.done) item.classList.add("is-done");
  item.dataset.id = task.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task__check";
  checkbox.checked = task.done;
  checkbox.setAttribute("aria-label", "Mark task as done");

  const label = document.createElement("span");
  label.className = "task__label";
  label.textContent = task.text;

  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "task__delete";
  deleteBtn.textContent = "×";
  deleteBtn.setAttribute("aria-label", "Delete task");

  item.append(checkbox, label, deleteBtn);
  return item;
}

function render() {
  taskList.innerHTML = "";
  tasks.forEach((task) => taskList.appendChild(createTaskElement(task)));
  applyFilter();
  updateCounter();
}

// ---------- View helpers ----------

function applyFilter() {
  taskList.setAttribute("data-filter", currentFilter);
}

function updateCounter() {
  const total = tasks.length;
  const activeCount = tasks.filter((t) => !t.done).length;
  const doneCount = total - activeCount;

  if (total === 0) {
    counter.textContent = "No tasks";
  } else if (activeCount === 0) {
    counter.textContent = "All done 🎉";
  } else {
    const noun = activeCount === 1 ? "task" : "tasks";
    counter.textContent = `${activeCount} ${noun} left`;
  }

  clearDoneBtn.disabled = doneCount === 0;
}

// ---------- Events ----------

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (text === "") {
    input.focus();
    return;
  }

  tasks.push({ id: String(Date.now()), text, done: false });
  saveTasks();
  render();

  input.value = "";
  input.focus();
});

taskList.addEventListener("click", (event) => {
  const item = event.target.closest(".task");
  if (!item) return;

  const id = item.dataset.id;

  if (event.target.classList.contains("task__delete")) {
    tasks = tasks.filter((t) => t.id !== id);
    saveTasks();
    render();
    return;
  }

  if (event.target.classList.contains("task__check")) {
    const task = tasks.find((t) => t.id === id);
    if (task) task.done = event.target.checked;
    saveTasks();
    render();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((b) => b.classList.remove("is-active"));
    button.classList.add("is-active");
    applyFilter();
  });
});

clearDoneBtn.addEventListener("click", () => {
  tasks = tasks.filter((t) => !t.done);
  saveTasks();
  render();
});

// ---------- Boot ----------
tasks = loadTasks();
render();

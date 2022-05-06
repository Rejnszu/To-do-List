"use strict";

const dataToDoItem = document.querySelector("[data-toDo-item]");
let toDoItem;
let toDoTitle;
let toDoDate;
let toDoButtonCompleted;
let toDoButtonRemove;
const addTaskButton = document.querySelector(".add_task_button");
const toDoListUl = document.querySelector(".toDo-list-ul");
let task;
let taskArray = [];
let storedData;
class TaskObject {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }
}

function createTemplate() {
  toDoItem = dataToDoItem.content.cloneNode(true).children[0];
  toDoTitle = toDoItem.querySelector("[data-toDo-title]");
  toDoDate = toDoItem.querySelector("[data-toDo-date]");
  toDoButtonCompleted = toDoItem.querySelector("[data-toDo-button-completed]");
  toDoButtonRemove = toDoItem.querySelector("[data-toDo-button-remove]");
}
function createItem() {
  task = new TaskObject(toDo.value, new Date().toLocaleDateString("pl-PL"));
  taskArray.push(task);
}
function dataCaching() {
  localStorage.setItem("items", JSON.stringify(taskArray));
}

function appendItem() {
  JSON.parse(localStorage.getItem("items")).forEach(function (obj) {
    toDoTitle.innerHTML = obj.title;
    toDoDate.innerHTML = "Creation date " + obj.date;
  });
  toDoListUl.append(toDoItem);
}

function removeItem() {
  toDoButtonRemove.addEventListener("click", function () {
    this.closest(".toDo-list-item").remove();
  });
}
function completed() {
  toDoButtonCompleted.addEventListener("click", function () {
    this.closest(".toDo-list-item").style.backgroundColor = "green";
  });
}
addTaskButton.addEventListener("click", function () {
  warning.style.display = "none";
  if (toDo.value == "" || toDo.value == null) {
    warning.style.display = "block";
  } else {
    createTemplate();
    createItem();
    dataCaching();
    appendItem();
    removeItem();
    completed();
  }
});

console.log(localStorage);

function initialItems() {
  JSON.parse(localStorage.getItem("items")).forEach(function (obj) {
    createTemplate();
    appendItem();
    removeItem();
    completed();
  });
}
initialItems();

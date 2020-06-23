'use strict';
console.log('test');

const form = document.querySelector('.add-task-form');
const newTaskInput = document.querySelector('.new-task-input');
const addedTasks = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('.filter');
const notifications = document.querySelector('.notifications');

form.addEventListener('submit', addTask);

function addTask(e) {
  if (newTaskInput.value === '') {
    const warning = document.createElement('li');
    warning.className = 'notification-warning';
    warning.innerText = 'Add your task!';
    notifications.appendChild(warning);
  } else {
    notifications.innerHTML = '';
    const newItem = document.createElement('li');
    newItem.className = 'new-item';
    const close = document.createElement('a');
    close.className = 'close-x';
    close.innerHTML = '<i class="fa fa-remove"></i>';
    newItem.appendChild(document.createTextNode(newTaskInput.value));
    newItem.appendChild(close);
    addedTasks.appendChild(newItem);
    newTaskInput.value = '';
  }
  e.preventDefault();
};

clearBtn.addEventListener('click', clearTasks);

function clearTasks() {
  addedTasks.innerHTML = '';
}

addedTasks.addEventListener('click', clearTask);

function clearTask(e) {
  if(e.target.parentElement.classList.contains('close-x')) {
    e.target.parentElement.parentElement.remove();
  }
}

filter.addEventListener('keyup', filterTasks);

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.new-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  })

}




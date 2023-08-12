let input = document.querySelector('.tasks__input');
let btn = document.getElementById('tasks__add');
let taskList = document.getElementById('tasks__list');
let form = document.getElementById('tasks__form');


function addTask (event) {
    event.preventDefault();
    let newTask = input.value;
    if (input.value) taskList.insertAdjacentHTML('beforeend', `<div class="task"> <div class="task__title"> ${newTask} </div> <a href="#" class="task__remove">&times;</a> </div>`);
    input.value = '';
};

function delateTask (event) {
    event.preventDefault();
    let button = event.target;
    if (button.classList.contains('task__remove')) {
      let parent = button.closest('.task');
      parent.remove();
   };
};

btn.addEventListener ('click', addTask);
form.addEventListener ('submit', addTask);
taskList.addEventListener('click', delateTask);


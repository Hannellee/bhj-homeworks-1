let input = document.getElementById('task__input');
let tasksList = document.getElementById('tasks__list');
let tasksForm = document.getElementById('tasks__form');

tasksForm.addEventListener('submit', (e) => {
    if (input.value.trim()) {

        tasksList.innerHTML += `
            <div class='task'>
            <div class='task__title'>
            ${input.value}
            </div>
            <a href='#' class='task__remove'>&times;</a>
            </div>
        `
        input.value = '';
    }

    tasksList.addEventListener('click', (e) => {
        if (e.target.classList.contains('task__remove')) {
            e.target.parentElement.remove();
        }
    })
})
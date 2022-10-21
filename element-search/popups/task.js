let modalMain = document.getElementById('modal_main');
let successActive = document.getElementById('modal_success');
let modalClose = document.querySelectorAll('.modal__close');
let success = document.querySelector('.show-success');


modalMain.classList.add('modal_active');

let close = function() {
    modalMain.classList.remove('modal_active');
    successActive.classList.remove('modal_active');
}

let modalCloseArray = Array.from(modalClose);

modalCloseArray.forEach(item => {
    item.onclick = close;
});

let showSuccess = function() {
    modalMain.classList.remove('modal_active');
    successActive.classList.add('modal_active');
}

success.onclick = showSuccess;

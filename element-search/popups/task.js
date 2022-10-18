let modalMain = document.getElementById('modal_main');
let successActive = document.getElementById('modal_success');
let modalClose = document.querySelectorAll('.modal__close');
let success = document.querySelector('.show-success');

// debugger;
modalMain.classList.add('modal_active');

let close = function() {
    modalMain.classList.remove('modal_active');
    successActive.classList.remove('modal_active');
}

// modalClose.onclick = close();

let modalCloseArray = Array.from(modalClose);

modalCloseArray.forEach(item => {
    item.onclick = close();
});

let showSuccess = function() {
    successActive.classList.add('modal_active');
}

success.onclick = showSuccess();




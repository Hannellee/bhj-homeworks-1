let fontSize = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book')



for (let i = 0; i < fontSize.length; i++) {

    let fontSizeChanger = function () {
        if (fontSize[i].classList.contains('font-size_active')) {
            fontSize[i].classList.remove('font-size_active');
        } else {
            fontSize[i].classList.add('font-size_active');
        }


        if (fontSize[i].classList.contains('font-size_big')) {
            book.classList.add('book_fs-big')
        } else if (fontSize[i].classList.contains('font-size_small')) {
            book.classList.add('book_fs-small')
        }
    }

    fontSize[i].addEventListener('click', fontSizeChanger);
}
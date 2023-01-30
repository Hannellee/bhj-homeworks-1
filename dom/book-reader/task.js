let fontSize = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book__content')



for (let i = 0; i < fontSize.length; i++) {

    fontSize[i].addEventListener('click', function (e) {

        e.preventDefault();

        if (fontSize[i].classList.contains('font-size_active')) {
            fontSize[i].classList.remove('font-size_active');
        } else {
            fontSize[i].classList.add('font-size_active');
        }

        if (fontSize[i].classList.contains('font-size_big') && fontSize[i].classList.contains('font-size_active')) {
            
            book.classList.add('book_fs-big');
            book.classList.remove('book_fs-small');

        } else if (fontSize[i].classList.contains('font-size_small') && fontSize[i].classList.contains('font-size_active')) {
            
            book.classList.add('book_fs-small');
            book.classList.remove('book_fs-big');

        } else if (fontSize[i].classList.contains('font-size') && fontSize[i].classList.contains('font-size_active')) {
            
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');

        }

    })

}
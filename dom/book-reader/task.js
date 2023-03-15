let fontSize = Array.from(document.querySelectorAll('.font-size'));
let book = document.querySelector('.book__content')



fontSize.forEach(item => item.addEventListener('click', (e) => {

    e.preventDefault();

    fontSize.forEach(item => item.classList.remove('font-size_active'));
    e.target.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');

    if (item.classList.contains('font-size_big')) {
        book.classList.add('book_fs-big');
      } else if (item.classList.contains('font-size_small')) {
        book.classList.add('book_fs-small');
      }

  }));
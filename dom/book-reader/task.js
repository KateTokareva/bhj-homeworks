let arr = Array.from(document.querySelectorAll('.font-size'));
let book = document.getElementById('book');

arr.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        arr.forEach(btn => {
            btn.classList.remove('font-size_active');
        });
        button.classList.add('font-size_active');
        if (button.dataset.size == 'big') {
            book.classList.remove('book_fs-small');
			book.classList.add('book_fs-big');
        } else if (button.dataset.size == 'small') {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else {
            book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
        }
    });
});

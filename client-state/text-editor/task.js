let editor = document.querySelector('textarea');
let btn = document.querySelector('button');

function saveText(value) {
    localStorage.setItem('text', value);
};

editor.value = localStorage.getItem('text');
editor.addEventListener('input', () => {
   saveText(editor.value);
});

btn.addEventListener ('click', () => {
    editor.value = '';
    localStorage.clear();
});

let btn = document.getElementById('signin__btn');
let form = document.getElementById('signin__form');
let id = document.getElementById('user_id');
let welcome = document.getElementById('welcome');
let signForm = document.getElementById('signin');

if (localStorage.getItem('id')) {
    signIn(localStorage.getItem('id'));
};

btn.addEventListener('click', function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(data);
 
    xhr.onload = () => {
       const response = xhr.response;
       if (response['success']) {
          const userId = response['user_id'];
          localStorage.setItem('id', userId);
          signIn(userId);
       } else {
          alert('Неверный логин/пароль');
       }
       form.reset();
    }
 })
 
 function signIn(user) {
    signForm.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    id.textContent = user;
 }
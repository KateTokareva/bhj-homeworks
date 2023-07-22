let modalMain = document.getElementById('modal_main');
let modalSuccess = document.getElementById('modal_success');
let closeModal = document.querySelector('.modal__close');
let btnShowSuccess = document.querySelector('.show-success');
let closeSuccess = modalSuccess.querySelector('.modal__close');


modalMain.classList.add('modal_active');


btnShowSuccess.onclick = function () {
    modalSuccess.classList.add('modal_active');
    modalMain.classList.remove('modal_active');
};

closeModal.onclick = function() {
    modalMain.classList.remove('modal_active');
};

closeSuccess.onclick = function () {
    modalSuccess.classList.remove('modal_active');
}


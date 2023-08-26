let popup = document.querySelector('#subscribe-modal');
let closeModal = document.querySelector('.modal__close');


closeModal.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie = 'popup=closed;';
});

function checkCookie(item) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(el => el.startsWith(item + '='));
        if (cookie) {
            return cookie.slice(item.length + 1);
        };
};

window.onload = () => {
    if (!checkCookie('closed')){
        popup.classList.add('modal_active');
    };
};


let popup = document.querySelector('#subscribe-modal');
let closeModal = document.querySelector('.modal__close');

window.onload = () => {
   if (!getCookie('closed')) {
      popup.classList.add('modal_active');
   };
};

closeModal.onclick = () => {
   popup.classList.remove('modal_active');
   document.cookie = 'closed=true'
};

function getCookie(name) {
   const pairs = document.cookie.split('; ');
   const cookie = pairs.find(p => p.startsWith(name + '='));
   if (cookie) {
      return cookie.slice(name.length + 1);
   };
   return null;
};
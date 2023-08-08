let widgetSide = document.querySelector('.chat-widget__side');
let chat = document.querySelector('.chat-widget');
let chatMessages = document.querySelector('.chat-widget__messages');
let input = document.getElementById('chat-widget__input');
let robotMessages = [
    'Отличный вопрос, хорошая попытка, играем дальше',
    'Мы ничего не продаем, до свидания!',
    'Вам тут не помогут',
    'Задайте другой вопрос, ответ на этот я не знаю',
    'До свидания!'
];


widgetSide.addEventListener('click', () => {
    chat.classList.add('chat-widget_active');
    input.focus();
});

function getRandMessage () {
 let index = Math.floor(Math.random() * robotMessages.length);
 return robotMessages[index];
};

function getTime () {
    let time = new Date().toLocaleTimeString();
    return time;
};

function sendUserMessage () {
    let message = input.value;
    chatMessages.innerHTML += `<div class="message message_client">
         <div class="message__time">${getTime()}</div>
         <div class="message__text">${message}</div>
      </div>`;
};

function sendRobotMessage () {
    chatMessages.innerHTML += `<div class="message">
         <div class="message__time">${getTime()}</div>
         <div class="message__text">${getRandMessage()}</div>
      </div>`;
}
window.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        sendUserMessage();
        input.value = '';
        sendRobotMessage();
    };
});

const timer = document.getElementById('timer');
let counter = timer.textContent;
let timerId = null;

function reduceTimer () {
    counter--;
    timer.textContent = counter;
    if (counter < 0) {
        clearTimeout(timerId);
        alert ('Вы победили в конкурсе');
    };
};

timerId = setInterval(reduceTimer, 1000);

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if(getHole(i).classList.contains('hole_has-mole')) {
            +dead.textContent++;
        } else {
            +lost.textContent++
        };
        checkGame();
    };
};

function checkGame () {
    if (+dead.textContent === 10) {
        alert('You are win');
        dead.textContent = 0;
        lost.textContent = 0;
        return;
    } else if (+lost.textContent === 5) {
        alert ('You are lose');
        dead.textContent = 0;
        lost.textContent = 0;
    };
};


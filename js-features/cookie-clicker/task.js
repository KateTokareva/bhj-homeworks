const count = document.getElementById('clicker__counter');
const cookieImg = document.getElementById('cookie');
const speed = document.getElementById('clicker__speed');
let toogle = true;

cookieImg.onclick = function () {
    count.textContent++;
    if (toogle) {
        cookieImg.width = 230;
        toogle = false;
    } else {
        cookieImg.width = 200;
        toogle = true;
    };
};
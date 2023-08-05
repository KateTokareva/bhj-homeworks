let arr = Array.from(document.querySelectorAll('.rotator__case'));
activeElement = 0;
let timerId = null;

timerId = setInterval(() => {
    arr[activeElement].classList.remove('rotator__case_active');
    activeElement++;
    arr[activeElement].classList.add('rotator__case_active');
    if (activeElement == arr.length-1) {
        activeElement = 0;
     };
}, 1000);

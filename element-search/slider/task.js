let arr = Array.from(document.getElementsByClassName('slider__item'));
let nextSlide = document.querySelector('.slider__arrow_next');
let prevSlide = document.querySelector('.slider__arrow_prev');
let activeSlide = 0;

console.log(arr);

function clickNextSlaid () {
    if  (activeSlide == arr.length - 1) {
        activeSlide = 0;
    } else {
        activeSlide +=1;
    };
};

function clickPrevSlide () {
    if (activeSlide == 0) {
        activeSlide = arr.length - 1;
    } else {
        activeSlide -=1;
    };
};

nextSlide.addEventListener('click', function () {
    arr[activeSlide].classList.remove('slider__item_active');
    clickNextSlaid();
    arr[activeSlide].classList.add('slider__item_active');
});

prevSlide.addEventListener ('click', function () {
    arr[activeSlide].classList.remove('slider__item_active');
    clickPrevSlide();
    arr[activeSlide].classList.add('slider__item_active');
});
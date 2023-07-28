let arrOfTabs = Array.from(document.getElementsByClassName('tab'));
console.log(arrOfTabs);
let arrOfContent = Array.from(document.querySelectorAll('.tab__content'));
console.log(arrOfContent);

//удаляем актив
function removeClassTab () {
    let activeTab = arrOfTabs.findIndex(i => i.className.includes('tab_active'));
    arrOfTabs[activeTab].classList.remove('tab_active');
};

function removeClassContent () {
    let activeTab = arrOfContent.findIndex(i => i.className.includes('tab__content_active'));
    arrOfContent[activeTab].classList.remove('tab__content_active');
};

//делаем кликер
for (let i = 0; i < arrOfTabs.length; i++) {
    arrOfTabs[i].addEventListener('click', function () {
        removeClassTab();
        removeClassContent();
        arrOfTabs[i].classList.add('tab_active');
        arrOfContent[i].classList.add('tab__content_active')
    });
};
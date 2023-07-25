let dropdownValue = document.querySelector('.dropdown__value');
let linkList = document.querySelector('.dropdown__list');
let items = Array.from(document.getElementsByClassName('dropdown__item'));

dropdownValue.addEventListener('click', function () {
    linkList.classList.add('dropdown__list_active');
});

for (let item of items) {
    item.onclick = function () {
        linkList.classList.remove('dropdown__list_active');
        dropdownValue.textContent = item.textContent;
        return false;
    };
};
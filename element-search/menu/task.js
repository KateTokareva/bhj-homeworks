let items = Array.from(document.getElementsByClassName('menu__link'));
console.log(items);
for (let item of items) {
    item.onclick = function () {
        const parent = item.parentElement;
        if (parent.querySelector('.menu_sub').className === 'menu menu_sub') {
            parent.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        } else {
            parent.querySelector('.menu_sub').className = 'menu menu_sub';
        };
        if (item.closest('.menu_main')) {
			return false
		}
    };
};
let arr = Array.from(document.querySelectorAll('.reveal'));

window.addEventListener('scroll', function() {
	arr.forEach(element => {
		if (checkVisible(element)) {
			element.classList.add('reveal_active');
		} else {
			element.classList.remove('reveal_active');
		};
	});
});

function checkVisible(el) {
	const {top, bottom} = el.getBoundingClientRect();
	if (bottom < 0 || top > window.innerHeight) {
		return false;
	};
	return true;
};

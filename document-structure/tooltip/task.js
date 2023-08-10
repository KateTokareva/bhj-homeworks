let titles = Array.from(document.querySelectorAll('.has-tooltip'));

for (let title of titles) {
    title.insertAdjacentHTML('afterEnd', '<div class="tooltip"> Подсказать? </div>');
    title.addEventListener('click', (event) => {
        event.preventDefault();
        let tooltip = title.nextElementSibling;
        const {left, bottom} = title.getBoundingClientRect();
        tooltip.style.top = `${bottom}px`;
        tooltip.style.left = `${left}px`;
        console.log(tooltip);
        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active')
        } else {
            tooltip.classList.add('tooltip_active');
        };
    });
};


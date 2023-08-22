let loader = document.querySelector('.loader');
let items = document.querySelector('#items')
let xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE) {
		loader.classList.remove('loader_active');
		let response = JSON.parse(xhr.response);
		let valutes = response['response']['Valute'];
		for (val in valutes) {
			const code = valutes[val]['CharCode'];
			const value = valutes[val]['Value'];
			const valueHTML =
				`<div class="item">
					<div class="item__code">${code}</div>
	                <div class="item__value">${value}</div>
	                <div class="item__currency">руб.</div>
          		</div>`;
			items.insertAdjacentHTML('beforeend', valueHTML);
		};
	};
});
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
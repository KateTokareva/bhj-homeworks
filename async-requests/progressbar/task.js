let progress = document.querySelector('#progress');
let form = document.querySelector('#form');
let send = document.querySelector('#send');

send.addEventListener('click', function(event) {
	event.preventDefault();
	let formData = new FormData(form);
	let xhr = new XMLHttpRequest();

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

	xhr.upload.onprogress = (e) => {
		progress.value = e.loaded / e.total;
	};
    
	xhr.send(formData);
});
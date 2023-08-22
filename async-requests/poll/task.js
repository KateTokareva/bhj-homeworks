let poll = document.querySelector('.poll');
let title = document.querySelector('#poll__title');
let pollAnswers = document.querySelector('#poll__answers');
let pollStatistics = document.querySelector('#poll__statistics');
console.log(pollStatistics);

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE) {
      let response = JSON.parse(xhr.response);
      let quiz = response['data'];
      title.innerText = quiz['title'];
      let answers = quiz['answers'];
      for (let answer of answers) {
         let btn = `<button class="poll__answer">${answer}</button>`;
         pollAnswers.insertAdjacentHTML('beforeend', btn);
      };

      pollAnswers.addEventListener('click', (e) => {
         alert('Спасибо, ваш голос засчитан!');
      });
   };
});
const searchElement = document.querySelector('#search');
const shows = document.querySelectorAll('.show');

searchElement.addEventListener('keyup', (event) => {
    const inputWord = event.target.value.toLowerCase();

    shows.forEach( (item) => {
        item.querySelector('p').textContent.toLowerCase().includes(inputWord) ? item.style.display = 'block' : item.style.display = 'none';
    });

});
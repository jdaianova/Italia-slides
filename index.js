const btnBack = document.querySelector('#back');
const btnNext = document.querySelector('#next');
const photos = [
  'img/italia_1.jpg',
  'img/italia_2.jpg',
  'img/italia_3.jpg',
  'img/italia_4.jpg',
  'img/italia_5.jpg',
  'img/italia_6.jpg',
];

i = 0;

btnNext.addEventListener('click', () => {
  i++;
  if (i > photos.length-1) {
    i = 0;
  };
  document.querySelector('#photo').src = photos[i];
});

btnBack.addEventListener('click', () => {
  i--;
  if (i < 0) {
    i = photos.length-1;
  };
  document.querySelector('#photo').src = photos[i];
});

//console.log(photos);
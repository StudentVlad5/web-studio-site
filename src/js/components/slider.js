// const slider = document.querySelector('.slider');
// const slides = document.querySelector('.slides');
// const slidesBox = document.querySelectorAll('.slides-box');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');

import getRefs from '../refs/refs';

const refs = getRefs();

let currentSlide = 0;

refs.prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = refs.slidesBox.length - 1;
  }
  scrollSlide();
});

refs.nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= refs.slidesBox.length) {
    currentSlide = 0;
  }
  scrollSlide();
});

// Mouse scroll
refs.slider.addEventListener('wheel', e => {
  e.preventDefault();
  if (e.deltaY < 0) {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = refs.slidesBox.length - 1;
    }
  } else {
    currentSlide++;
    if (currentSlide >= refs.slidesBox.length) {
      currentSlide = 0;
    }
  }

  scrollSlide();
});

function scrollSlide() {
  const scrollDistance =
    refs.slidesBox[currentSlide].offsetLeft - refs.slider.offsetLeft;
  refs.slides.scrollTo({
    left: scrollDistance,
    behavior: 'smooth',
  });
}

// refs.slider.addEventListener('click', () => {
//   currentSlide++;

//   if (currentSlide >= refs.slidesBox.length) {
//     currentSlide = 0;
//   }

//   const scrollDistance = refs.slidesBox[currentSlide].offsetLeft - refs.slider.offsetLeft;

//   refs.slides.scrollTo({
//     left: scrollDistance,
//     behavior: 'smooth'
//   });
// });

// const interval = 3000;
// function autoScroll() {
//   currentSlide++;

//   if (currentSlide >= refs.slidesBox.length) {
//     currentSlide = 0;
//   }

//   const scrollDistance = refs.slidesBox[currentSlide].offsetLeft - refs.slider.offsetLeft;

//   slides.scrollTo({
//     left: scrollDistance,
//     behavior: 'smooth'
//   });
// }

// setInterval(autoScroll, interval);

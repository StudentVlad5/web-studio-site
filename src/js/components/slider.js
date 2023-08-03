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

function scrollSlide() {
  const scrollDistance =
    refs.slidesBox[currentSlide].offsetLeft - refs.slider.offsetLeft;
  refs.slides.scrollTo({
    left: scrollDistance,
    behavior: 'smooth',
  });
}

import getRefs from '../refs/refs';
const refs = getRefs();

window.addEventListener('scroll', function () {
  let scrollY = window.scrollY;
  let scrollX = window.scrollX;

  const sectionTop = refs.services.offsetTop;
  const sectionBottom = refs.subsectionCards.offsetTop;

  const sectionStart = refs.subsectionTitles.offsetLeft;
  const sectionFinish = refs.subsectionCards.offsetLeft;

  const bgc1 = sectionTop - 73;
  const bgc2 = sectionTop + 400;
  const bgc3 = sectionTop + sectionBottom;

  if (scrollY <= bgc1 && scrollX <= sectionStart) {
    refs.subsectionTitles.classList.add('accent');
    refs.subsectionTitles.classList.remove('lavender');
    refs.subsectionTitles.classList.remove('second');
    refs.titleServices.style.opacity = '0.6';
  }
  if (scrollY > bgc2 && scrollY <= bgc3 && scrollX <= sectionFinish) {
    refs.subsectionTitles.classList.remove('accent');
    refs.subsectionTitles.classList.remove('lavender');
    refs.subsectionTitles.classList.add('second');
    refs.titleServices.style.opacity = '1';
  } else {
    refs.subsectionTitles.classList.remove('accent');
    refs.subsectionTitles.classList.remove('second');
    refs.subsectionTitles.classList.add('lavender');
    refs.titleServices.style.opacity = '0.6';
  }
});

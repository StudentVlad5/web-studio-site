import getRefs from '../refs/refs';
const refs = getRefs();

window.addEventListener('scroll', function () {
  let scrollY = window.scrollY;

  const sectionTop = refs.services.offsetTop;
  const sectionWidth = refs.subsectionCards.offsetLeft;

  const bgc1 = sectionTop + 3300;
  const bgc2 = bgc1 + 100;
  const bgc3 = bgc2 + 100;

  const bgc1x = sectionWidth + 1952;
  const bgc2x = bgc1x + 100;
  const bgc3x = bgc2x + 100;

  // listen vertical scroll on desktop
  if (window.innerWidth >= 1440) {
    if (scrollY <= bgc1) {
      refs.subsectionTitles.classList.add('accent');
      refs.subsectionTitles.classList.remove('lavender');
      refs.subsectionTitles.classList.remove('second');

      refs.titleServices.style.opacity = '0.6';
    } else if (scrollY > bgc1 && scrollY <= bgc2) {
      refs.subsectionTitles.classList.add('lavender');
      refs.subsectionTitles.classList.remove('accent');
      refs.subsectionTitles.classList.remove('second');

      refs.titleServices.style.opacity = '1';
    } else if (scrollY > bgc3) {
      refs.subsectionTitles.classList.add('second');
      refs.subsectionTitles.classList.remove('accent');
      refs.subsectionTitles.classList.remove('lavender');

      refs.titleServices.style.opacity = '0.6';
    }
  } else {
    // listen horizontal scroll
    if (scrollY <= bgc1x) {
      refs.subsectionTitles.classList.add('accent');
      refs.subsectionTitles.classList.remove('lavender');
      refs.subsectionTitles.classList.remove('second');

      refs.titleServices.style.opacity = '0.6';
    } else if (scrollY > bgc1x && scrollY <= bgc2x) {
      refs.subsectionTitles.classList.add('lavender');
      refs.subsectionTitles.classList.remove('accent');
      refs.subsectionTitles.classList.remove('second');

      refs.titleServices.style.opacity = '1';
    } else if (scrollY >= bgc3x) {
      refs.subsectionTitles.classList.add('second');
      refs.subsectionTitles.classList.remove('accent');
      refs.subsectionTitles.classList.remove('lavender');

      refs.titleServices.style.opacity = '0.6';
    }
  }
});

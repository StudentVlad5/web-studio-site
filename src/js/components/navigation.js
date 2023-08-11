import getRefs from '../refs/refs';
const refs = getRefs();

// Add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  let scrollY = window.scrollY;

  refs.navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;

    console.log('section:', section);
    const sectionWidth = section.offsetLeft;
    console.log('sectionWidth:', sectionWidth);
    const sectionFinish = section.offsetLeft + 1847;
    console.log('sectionFinish:', sectionFinish);

    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      link.classList.add('active');
      // } else if (scrollY >= sectionWidth) {
      //   link.classList.add('active');
    } else {
      link.classList.remove('active');
    }

    //  if (scrollY >= sectionFinish) {
    //   link.classList.remove('active');
    // } else if (scrollY >= sectionWidth && scrollY < sectionFinish) {
    //   link.classList.add('active');
    // }
  });
}

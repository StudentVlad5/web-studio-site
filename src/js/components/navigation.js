import getRefs from '../refs/refs';
const refs = getRefs();

// Add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

// function navHighlighter() {
//   // Get current scroll position
//   let scrollY = window.pageYOffset;

//   //   Now we loop through sections to get height, top and ID values for each
//   refs.sections.forEach(current => {
//     const sectionHeight = current.offsetHeight;
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute('id');

//     /*
//       - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
//       - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
//       */
//     if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
//       document
//         .querySelector('.navigation__link[href*=' + sectionId + ']')
//         .classList.add('active');
//     } else {
//       document
//         .querySelector('.navigation__link[href*=' + sectionId + ']')
//         .classList.remove('active');
//     }
//   });
// }

function navHighlighter() {
  let scrollY = window.scrollY;

  refs.navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;

    if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

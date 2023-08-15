import getRefs from '../refs/refs';
const refs = getRefs();

// Add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  let scrollY = window.scrollY;

  refs.navLinks.forEach(link => {
    let section = document.querySelector(link.hash);
    console.log('section:', section);

    const sectionHeight = section.offsetHeight;
    console.log('sectionHeight:', sectionHeight);
    const sectionTop = section.offsetTop - 100;
    console.log('sectionTop:', sectionTop);

    const sectionWidth = section.offsetLeft;
    console.log('sectionWidth:', sectionWidth);

    if (section.parentElement.className !== 'windowForScrolling') {
      if (scrollY < sectionTop && link.classList.contains('active')) {
        link.classList.add('active');
      } else if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }

    if (section.parentElement.className === 'windowForScrolling') {
      if (section.id === 'testimonials') {
        if (
          scrollY >= sectionWidth + 1700 &&
          scrollY <= sectionWidth + 1700 + sectionHeight
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      } else if (section.id === 'services') {
        if (
          scrollY >= sectionWidth + 1420 &&
          scrollY <= sectionWidth + sectionHeight + 1420
        ) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      } else if (section.id === 'about') {
        if (scrollY >= sectionWidth - 2776 && scrollY <= sectionWidth - 770) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      }
    }
  });
}

// function onEntry(entry) {
//   refs.navLinks.forEach(link => {
//     let section = document.querySelector(link.hash);
//     entry.forEach(change => {
//       if (
//         change.isIntersecting &&
//         change.target.className === section.className
//       ) {
//         link.classList.add('active');
//       } else {
//         link.classList.remove('active');
//       }
//     });
//   });
// }

// let options = { threshold: [0.1] };
// let observer = new IntersectionObserver(onEntry, options);

// for (let section of refs.sections) {
//   observer.observe(section);
// }

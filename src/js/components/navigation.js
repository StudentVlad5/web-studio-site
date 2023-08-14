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
    const sectionTop = section.offsetTop - 100;
    console.log('sectionHeight:', sectionHeight);
    console.log(' sectionTop:', sectionTop);

    const sectionWidth = section.offsetLeft;
    console.log(' sectionWidth:', sectionWidth);

    if (section.parentElement.className !== 'windowForScrolling') {
      if (scrollY < sectionTop && link.classList.contains('active')) {
        console.log(
          "link.classList.contains('active'):",
          link.classList.contains('active')
        );
        console.log('scrollY < sectionTop:', scrollY < sectionTop);
        link.classList.add('active');
      } else if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
        console.log(
          'scrollY < sectionTop + sectionHeight:',
          scrollY < sectionTop + sectionHeight
        );
        console.log('scrollY > sectionTop :', scrollY > sectionTop);
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }

    if (section.parentElement.className === 'windowForScrolling') {
      if (sectionWidth === 0) {
        console.log('sectionWidth === 0:', sectionWidth === 0);

        link.classList.remove('active');
        scrollY >= sectionWidth + 1754 && link.classList.toggle('active');
      } else if (scrollY >= sectionWidth) {
        console.log('scrollY >= sectionWidth:', scrollY >= sectionWidth);

        link.classList.remove('active');
      } else if (
        scrollY > sectionWidth &&
        scrollY <= sectionWidth + sectionHeight
      ) {
        console.log(
          'scrollY >= sectionWidth + sectionHeight:',
          scrollY >= sectionWidth + sectionHeight
        );

        link.classList.add('active');
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

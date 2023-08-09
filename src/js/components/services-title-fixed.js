import getRefs from '../refs/refs';
const refs = getRefs();

let scrollY = window.scrollY;

function onEntry(entry) {
  if (entry.isIntersecting) {
    //   entry.target.classList.add('fixed');
  }
}

let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);

observer.observe(refs.subsectionTitles);

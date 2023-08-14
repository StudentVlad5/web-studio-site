import getRefs from '../refs/refs';
const refs = getRefs();

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('scale');
    } else {
      change.target.classList.remove('scale');
    }
  });
}

let options = { threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);

observer.observe(refs.servicesImage);

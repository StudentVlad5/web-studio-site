import getRefs from '../refs/refs';
const refs = getRefs();

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('fixed');
    } else {
      change.target.classList.remove('fixed');
    }
  });
}

let options = { threshold: [0.1] };
let observer = new IntersectionObserver(onEntry, options);

for (let elm of refs.elements) {
  observer.observe(elm);
}

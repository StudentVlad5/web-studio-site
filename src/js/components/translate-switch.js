import getRefs from '../refs/refs';
const refs = getRefs();

// refs.word1.addEventListener('click', function () {
//   refs.switcher.checked = false;
//   refs.word1.classList.add('label--isActive');
//   refs.word2.classList.remove('label--isActive');
// });

// refs.word2.addEventListener('click', function () {
//   refs.switcher.checked = true;
//   refs.word2.classList.add('label--isActive');
//   refs.word1.classList.remove('label--isActive');
// });

// refs.switcher.addEventListener('click', function () {
//   refs.word2.classList.toggle('label--isActive');
//   refs.word1.classList.toggle('label--isActive');
// });

const word1 = document.querySelectorAll('.word1');
const word2 = document.querySelectorAll('.word2');
const switcher = document.querySelectorAll('.switcher');

word1.forEach(el => {
  el.addEventListener('click', function () {
    switcher.checked = false;
    el.classList.add('label--isActive');
    word2.forEach(otherEl => otherEl.classList.remove('label--isActive'));
  });
});

word2.forEach(el => {
  el.addEventListener('click', function () {
    switcher.checked = true;
    el.classList.add('label--isActive');
    word1.forEach(otherEl => otherEl.classList.remove('label--isActive'));
  });
});

switcher.forEach(el => {
  el.addEventListener('click', function () {
    word2.forEach(otherEl => otherEl.classList.toggle('label--isActive'));
    word1.forEach(otherEl => otherEl.classList.toggle('label--isActive'));
  });
});

import getRefs from '../refs/refs';
const refs = getRefs();

refs.word1.addEventListener('click', function () {
  refs.switcher.checked = false;
  refs.word1.classList.add('label--isActive');
  refs.word2.classList.remove('label--isActive');
});

refs.word2.addEventListener('click', function () {
  refs.switcher.checked = true;
  refs.word2.classList.add('label--isActive');
  refs.word1.classList.remove('label--isActive');
});

refs.switcher.addEventListener('click', function () {
  refs.word2.classList.toggle('label--isActive');
  refs.word1.classList.toggle('label--isActive');
});

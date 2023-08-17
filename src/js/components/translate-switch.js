import getRefs from '../refs/refs';
const refs = getRefs();

const word1 = document.querySelectorAll('.word1');
const word2 = document.querySelectorAll('.word2');
const switcher = document.querySelectorAll('.switcher');


word1.forEach(el => {
  el.addEventListener('click', function () {
    switcher.forEach(it=> it.checked = false);
    el.classList.add('label--isActive');
    word2.forEach(otherEl => otherEl.classList.remove('label--isActive'));
  });
});

word2.forEach(el => {
  el.addEventListener('click', function () {
    switcher.forEach(it=> it.checked = true);
    el.classList.add('label--isActive');
    word1.forEach(otherEl => otherEl.classList.remove('label--isActive'));
  });
});

switcher.forEach(el => {
  el.addEventListener('click', function () {
    if(el.checked == true) { 
    word2.forEach(otherEl => otherEl.classList.add('label--isActive'));
    word1.forEach(otherEl => otherEl.classList.remove('label--isActive'));}
    else { 
    word2.forEach(otherEl => otherEl.classList.remove('label--isActive'));
    word1.forEach(otherEl => otherEl.classList.add('label--isActive'));}
  });
});

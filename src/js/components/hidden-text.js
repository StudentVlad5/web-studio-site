const btns1 = document.querySelectorAll('.btn1');
const btns2 = document.querySelectorAll('.btn2');
const texts = document.querySelectorAll('.faq__list-item-discr');

btns2.forEach(btn => btn.classList.add('is-hidden'));
texts.forEach(btn => btn.classList.add('is-hidden'));

btns1.forEach((btn1, index) => {
  btn1.addEventListener('click', () => {
    texts[index].classList.remove('is-hidden');
    btn1.classList.add('is-hidden');
    btns2[index].classList.remove('is-hidden');
  });
});

btns2.forEach((btn2, index) => {
  btn2.addEventListener('click', () => {
    texts[index].classList.add('is-hidden');
    btns1[index].classList.remove('is-hidden');
    btn2.classList.add('is-hidden');
  });
});


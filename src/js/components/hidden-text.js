const btns1 = document.querySelectorAll('.btn1');
const btns2 = document.querySelectorAll('.btn2');
const texts = document.querySelectorAll('.faq__list-item-discr');
const btnSDesk1 = document.querySelectorAll('.btn-desk1');
const btnSDesk2 = document.querySelectorAll('.btn-desk2');

btns2.forEach(btn => btn.classList.add('is-hidden'));
btnSDesk2.forEach(btn => btn.classList.add('is-hidden'));

// Desktop

btnSDesk1.forEach((btn1, index) => {
  btn1.addEventListener('click', () => {
    texts[index].classList.add('show');
    btn1.classList.add('is-hidden');
    btnSDesk2[index].classList.remove('is-hidden');
    btnSDesk2[index].classList.add('active');
  });
});

btnSDesk2.forEach((btn2, index) => {
  btn2.addEventListener('click', () => {
    texts[index].classList.remove('show');
    btnSDesk1[index].classList.remove('is-hidden');
    btn2.classList.add('is-hidden');
    btnSDesk2[index].classList.remove('active');
  });
});

// Mobile
btns1.forEach((btn1, index) => {
  btn1.addEventListener('click', () => {
    texts[index].classList.add('show');
    btn1.classList.add('is-hidden');
    btns2[index].classList.remove('is-hidden');
    btns2[index].classList.add('active');
  });
});

btns2.forEach((btn2, index) => {
  btn2.addEventListener('click', () => {
    texts[index].classList.remove('show');
    btns1[index].classList.remove('is-hidden');
    btn2.classList.add('is-hidden');
    btns2[index].classList.remove('active');
  });
});

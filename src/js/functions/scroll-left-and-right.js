let fixedWindow = document.querySelector('.fixed-window');
let sidebar = document.querySelector('.sidebar');
let testimonials__listOfClients = document.querySelector(
  '.testimonials__listOfClients-wrap'
);
let windowForScrolling = document.querySelector('.windowForScrolling');
let testimonials__title = document.querySelector('.testimonials__title');

let scrolledY = '';

window.addEventListener('scroll', function () {
  scrolledY = window.scrollY;
  if (window.innerWidth > 1439) {
    if (scrolledY > 1850 && scrolledY < 4000) {
      fixedWindow.style.position = 'fixed';
      fixedWindow.style.top = '0';

      testimonials__listOfClients.style.position = 'fixed';
      testimonials__listOfClients.style.left = '100%';
      testimonials__listOfClients.style.left =
        -(scrolledY - 1875 - 200) * 3.15 + 'px';
    }

    if (scrolledY > 2800 && scrolledY < 7450) {
      fixedWindow.style.position = 'fixed';
      fixedWindow.style.top = '0';
      sidebar.style.padding = '30px 124px 30px 30px';
      windowForScrolling.style.transform = `translate(${
        -(scrolledY - 2800) * 3.15
      }px, 0)`;
    }

    if (scrolledY <= 1850) {
      windowForScrolling.style.transform = `translate(0, 0)`;
    }
    if (scrolledY <= 1850 || scrolledY >= 7450) {
      fixedWindow.style.position = 'inherit';
      sidebar.style.padding = '30px 104px 30px 30px';
      testimonials__listOfClients.style.position = 'inherit';
    }

    if (scrolledY > 1900 && scrolledY < 2830) {
      testimonials__title.style.opacity = '0.1';
    }

    if (scrolledY <= 1900 || scrolledY >= 2830) {
      testimonials__title.style.opacity = '1';
    }
  }
});

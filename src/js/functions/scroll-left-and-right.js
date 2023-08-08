let content = document.querySelector('.testimonials__listOfClients');
let content_2 = document.querySelector('.testimonials__wrap');
let content_3 = document.querySelector('.testimonials__section');
let content_4 = document.querySelector('.about');
let content_5 = document.querySelector('.faq');
let title = document.querySelector('.testimonials__title');
let listOfLi = document.querySelectorAll('.testimonials__client-box');
let scrolledY = '';

let scrolled = content_3.style.height;

window.addEventListener("scroll", function () {
  scrolledY = window.scrollY;

  if (window.innerWidth > 1439) {
    listOfLi.forEach((item) => (item.style.height = "300px"));
    content.style.width = "2500px";
    content.style.top = "calc(100vh)/2)";
    content.classList.remove("_anim-items");
    content.style.opacity = "1";

    if (scrolledY > 1875 && scrolledY < 2500) {
      title.style.opacity = "0.8";
      content.style.opacity = "1";
      content_2.style.position = "fixed";
      content_2.style.height = "100%";
      content_2.style.width = "100vw";
      content_2.style.top = "0";
      content.style.position = "fixed";
      content.style.top = "350px";
      content.style.height = "300px";
      content.style.display = "flex";
      content.style.justifyContent = "space-between";

      content.style.left = -(scrolledY - 1875 - 240) * 2.55 + "px";

      listOfLi.forEach(
        item =>
          (item.style.left = (scrolledY - 1875 - 240) * Math.random + 'px')
      );
    }
    if (scrolledY <= 1875) {
      content_3.style.position = "inherit";
      content_2.style.position = "inherit";
      content_3.style.left = "0px";
      title.style.opacity = "1";
      content.style.opacity = "0";
      content.style.display = "none";
    }
    if (scrolledY >= 2500) {
      title.style.opacity = "1";
      content_3.style.position = "inherit";
      content_2.style.position = "inherit";
      content_3.style.left = "0px";
      content.style.opacity = "0";
      content_3.scrollIntoView({ block: "start", behavior: "smooth" });
      content.style.display = "none";
    }
  }
});

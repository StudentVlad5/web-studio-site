let fixedWindow = document.querySelector(".fixed-window");
let testimonials__listOfClients = document.querySelector(
  ".testimonials__listOfClients-wrap"
);
let windowForScrolling = document.querySelector(".windowForScrolling");

let scrolledY = "";

window.addEventListener("scroll", function () {
  scrolledY = window.scrollY;
  console.log(scrolledY);
  if (window.innerWidth > 1439) {
    if (scrolledY > 1850 && scrolledY < 4000) {
      fixedWindow.style.position = "fixed";
      fixedWindow.style.top = "0";

      testimonials__listOfClients.style.position = "fixed";
      testimonials__listOfClients.style.left = "100%";
      testimonials__listOfClients.style.left =
        -(scrolledY - 1875 - 200) * 3.15 + "px";
    }

    if (scrolledY > 2800 && scrolledY < 7450) {
      fixedWindow.style.position = "fixed";
      fixedWindow.style.top = "0";

      windowForScrolling.style.transform = `translate(${
        -(scrolledY - 2800) * 3.15
      }px, 0)`;
    }

    if (scrolledY <= 1850 || scrolledY >= 7450) {
      fixedWindow.style.position = "inherit";

      testimonials__listOfClients.style.position = "inherit";
    }
  }
});

let content = document.querySelector(".testimonials__listOfClients");
let content_2 = document.querySelector(".testimonials__wrap");
let content_3 = document.querySelector(".testimonials__section");

let title = document.querySelector(".testimonials__title");
let listOfLi = document.querySelectorAll(".testimonials__client-box");
let scrolledY = "";

let scrolled = content_3.style.height;

window.addEventListener("scroll", function () {
  scrolledY = window.scrollY;
  console.log(scrolledY);
  if (window.innerWidth > 1439) {
    listOfLi.forEach((item) => (item.style.height = "300px"));
    content.style.width = "2700px";
    content.style.top = "calc(100vh)/2)";
    content.classList.remove("_anim-items");
    content.style.opacity = "1";

    if (scrolledY > 1875 && scrolledY < 2600) {
      title.style.opacity = "0.8";
      content.style.opacity = "1";
      content_2.style.position = "fixed";
      content_2.style.height = "100%";
      content_2.style.width = "100vw";
      content_2.style.top = "0";
      content.style.position = "fixed";
      content.style.top = "0";
      content.style.height = "740px";
      content.style.display = "flex";
      content.style.justifyContent = "space-around";
      content.style.left = -(scrolledY - 1875 - 240) * 3.15 + "px";
    }
    if (scrolledY <= 1875) {
      content_3.style.position = "inherit";
      content_2.style.position = "inherit";
      content_3.style.left = "0px";
      title.style.opacity = "1";
      content.style.opacity = "0";
      content.style.display = "none";
    }
    if (scrolledY >= 2600) {
      title.style.opacity = "1";
      content_3.style.position = "inherit";
      content_2.style.position = "inherit";
      content_3.style.left = "0px";
      content.style.opacity = "0";
      content_3.scrollIntoView({ block: "start", behavior: "smooth" });
      content.style.display = "none";
    }

    // vertical scroll for services

    let services = document.querySelector(".services__subsection--cards");
    let servicesWrap = document.querySelector(".services__wrap");
    let serviceTitle = document.querySelector(".services__subsection--titles");
    let serviceImage = document.querySelector(".services__subsection--image");

    services.style.transform = "translate(110%, 0)";
    serviceImage.style.transform = "translate(250%, 0)";

    if (scrolledY > 3685 && scrolledY < 5900) {
      servicesWrap.style.position = "fixed";
      servicesWrap.style.height = "100vh";
      servicesWrap.style.width = "100vw";
      // servicesWrap.style.top = "0";
      // servicesWrap.style.left = "300px";
      servicesWrap.style.overflow = "hidden";

      serviceTitle.style.position = "fixed";
      serviceTitle.style.width = "100%";
      serviceTitle.style.height = "100vh";
      serviceTitle.style.top = "0";

      services.style.position = "fixed";
      services.style.top = "0";
      services.style.left = -(scrolledY - 3680 - 240) * 3.15 + "px";

      serviceImage.style.position = "fixed";
      serviceImage.style.height = "100%";
      serviceImage.style.top = "0";
      serviceImage.style.left = -(scrolledY - 3680 - 240) * 3.15 + "px";

      // service_titles.style.left = "300px";
    }
    if (scrolledY <= 3685 || scrolledY >= 5900) {
      servicesWrap.style.position = "inherit";
      servicesWrap.style.height = "100vh";
      servicesWrap.style.width = "100vw";
      servicesWrap.style.overflow = "auto";

      serviceTitle.style.position = "inherit";
      serviceTitle.style.height = "100vh";
      serviceTitle.style.width = "100%";
      serviceTitle.style.top = "0";
      serviceTitle.style.margin = "0";

      // service_titles.style.left = "-300px";

      services.style.position = "inherit";
      services.style.top = "0";

      serviceImage.style.position = "inherit";
      serviceImage.style.top = "0";
    }
  }
});

let content = document.querySelector(".testimonials__listOfClients");
let content_2 = document.querySelector(".testimonials__wrap");
let content_3 = document.querySelector(".testimonials__section");

let listOfLi = document.querySelectorAll(".testimonials__client-box");
let scrolledY = "";

let scrolled = content_3.style.height;

window.addEventListener("scroll", function () {
  scrolledY = window.scrollY;
  console.log(scrolledY);
  if (window.innerWidth > 1439) {
    listOfLi.forEach((item) => (item.style.height = "300px"));
    if (scrolledY > 1875 && scrolledY < 4000) {
      content_2.style.position = "fixed";
      content_2.style.height = "100%";
      content_2.style.width = "100vw";
      content_2.style.top = "0";

      content.style.position = "fixed";
      content.style.transform = "translate(100%, 0)";
      content.style.top = "0";
      content.style.height = "100%";
      content.style.display = "flex";
      content.style.justifyContent = "space-around";
      content.style.left = -(scrolledY - 1875 - 240) * 3.15 + "px";
      content.style.width = "2700px";
      content.style.top = "calc(100vh)/2)";
      content.classList.remove("_anim-items");
      content.style.opacity = "1";
    }
    if (scrolledY <= 1875 || scrolledY >= 4000) {
      content_3.style.position = "inherit";
      content_2.style.position = "inherit";
      content_3.style.left = "0px";
      content.style.opacity = "0";
      content.style.display = "none";
    }

    // vertical scroll for services

    let services = document.querySelector(".services__subsection--cards");
    let servicesWrap = document.querySelector(".services__wrap");
    let servicesSection = document.querySelector(".services");
    let serviceTitle = document.querySelector(".services__subsection--titles");
    let serviceImage = document.querySelector(".services__subsection--image");
    let serviceTitleGroup = document.querySelector(".services__title-group");
// 4650

    if (scrolledY > 3545 && scrolledY < 6700) {
      services.style.transform = "translate(250%, 0)";
      serviceImage.style.transform = "translate(400%, 0)";

      serviceTitleGroup.style.display = "flex";
      serviceTitleGroup.style.height = "100vh";
      serviceTitleGroup.style.flexDirection = "column";
      serviceTitleGroup.style.justifyContent = "center";
      serviceTitleGroup.style.alignItems = "center";
      serviceTitleGroup.style.marginRight = "300px";

      servicesWrap.style.position = "fixed";
      // servicesWrap.style.height = "100vh";
      servicesWrap.style.width = "100vw";
      servicesWrap.style.display = "flex";
      servicesWrap.style.flexDirection = "column";
      servicesWrap.style.overflow = "hidden";
      // servicesSection.style.height = "2800px";

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
    if (scrolledY <= 3545 || scrolledY >= 6700) {
      // servicesSection.style.height = "100vh";

      servicesWrap.style.position = "inherit";
      servicesWrap.style.height = "100vh";
      servicesWrap.style.width = "100vw";
      servicesWrap.style.overflow = "auto";
      servicesWrap.style.flexDirection = "column";

      serviceTitle.style.position = "inherit";
      serviceTitle.style.height = "100vh";
      serviceTitle.style.width = "100%";
      serviceTitle.style.margin = "0";
      serviceTitle.style.display = "flex";
      serviceTitle.style.flexDirection = "row";
      serviceTitle.style.justifyContent = "center";
      serviceTitle.style.alignItems = "center";

      serviceTitleGroup.style.display = "flex";
      serviceTitleGroup.style.height = "100vh";
      serviceTitleGroup.style.flexDirection = "column";
      serviceTitleGroup.style.justifyContent = "center";
      serviceTitleGroup.style.alignItems = "center";

      // service_titles.style.left = "-300px";

      services.style.position = "inherit";

      serviceImage.style.position = "inherit";
    }
  }
});

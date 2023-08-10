let content = document.querySelector(".testimonials__listOfClients");
let content_2 = document.querySelector(".testimonials__wrap");
let content_3 = document.querySelector(".testimonials__section");
let content_4 = document.querySelector(".testimonials__wrap--container");
let content_5 = document.querySelectorAll(".testimonials__title");

let listOfLi = document.querySelectorAll(".testimonials__client-box");
let scrolledY = "";

window.addEventListener("scroll", function () {
  scrolledY = window.scrollY;
  console.log(scrolledY);
  if (window.innerWidth > 1439) {
    listOfLi.forEach((item) => (item.style.height = "300px"));
    if (scrolledY > 1875 && scrolledY < 4000) {

      content_5.forEach(item=>item.style.display = "flex");
      
      content_4.style.position = "fixed";
      content_4.style.height = "100%";
      content_4.style.width = "100vw";
      content_4.style.top = "0";

      content_2.style.position = "fixed";
      content_2.style.height = "100%";
      content_2.style.width = "100vw";
      content_2.style.top = "0";

      content.style.position = "fixed";
      content.style.transform = "translate(90%, 0)";
      content.style.top = "0";
      content.style.height = "100%";
      content.style.display = "flex";
      content.style.justifyContent = "space-around";
      content.style.left = -(scrolledY - 1875 - 240) * 3.15 + "px";
      content.style.width = "3000px";
      content.style.top = "calc(100vh)/2)";
      content.classList.remove("_anim-items");
      content.style.opacity = "1";
    }
    if (scrolledY <= 1875 || scrolledY >= 4000) {
      content_5.forEach(item=>item.style.display = "none");

      content_4.style.position = "inherit";
      content_4.style.height = "100%";
      content_4.style.width = "100vw";

      content_3.style.position = "inherit";
      content_2.style.position = "inherit";
      content_3.style.left = "0px";
      content.style.opacity = "0";
      content.style.display = "none";
    }

    // vertical scroll for services

    let services = document.querySelector(".services__subsection--cards");
    let servicesWrap = document.querySelector(".services__wrap");
    let serviceTitle = document.querySelector(".services__subsection--titles");
    let serviceImage = document.querySelector(".services__subsection--image");
    let serviceTitleGroup = document.querySelector(".services__title-group");
    // 4650

    if (scrolledY > 3545 && scrolledY < 6700) {
      services.style.transform = "translate(200%, 0)";
      serviceImage.style.transform = "translate(450%, 0)";

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
      services.style.position = "inherit";

      serviceImage.style.position = "inherit";
    }

    let aboutContainer = document.querySelector(".about__container");
    let scrollContainer = document.querySelector(".about__container--wrap");

    if (scrolledY > 6300 && scrolledY < 10372) {
      aboutContainer.style.position = "fixed";
      aboutContainer.style.height = "100%";
      aboutContainer.style.width = "100vw";
      aboutContainer.style.top = "0";

      scrollContainer.style.position = "fixed";
      scrollContainer.style.top = "0";
      scrollContainer.style.left = "0";
    }

    if (scrolledY <= 6300 || scrolledY >= 10372) {
      aboutContainer.style.position = "inherit";
      aboutContainer.style.height = "100%";
      aboutContainer.style.width = "100vw";

      scrollContainer.style.position = "inherit";
    }
    if (scrolledY > 7552 && scrolledY < 10372) {
      scrollContainer.style.left = -(scrolledY - 7552) * 3.15 + "px";
    }
  }
});

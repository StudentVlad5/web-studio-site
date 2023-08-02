const animItems = document.querySelectorAll("._anim-items");
const animClients = document.querySelector(".testimonials-listOfClients");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animClients).top;

      let animStart = 4;

      //   let animItemPoint = "";
      //   if (animItem.classList.contains("cases-client-container_1")) {
      //     animItemPoint = 300;
      //   } else if (animItem.classList.contains("cases-client-container_2")) {
      //     animItemPoint = 300;
      //   } else if (animItem.classList.contains("cases-client-container_3")) {
      //     animItemPoint = 300;
      //   } else if (animItem.classList.contains("cases-client-container_4")) {
      //     animItemPoint = 300;
      //   } else if (animItem.classList.contains("cases-client-container_5")) {
      //     animItemPoint = 300;
      //   } else if (animItem.classList.contains("cases-client-container_6")) {
      //     animItemPoint = 300;
      //   } else {
      //     animItemPoint = window.innerHeight - animItemHeight / animStart;
      //   }

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        // if (!animItem.classList.contains("_anim-no-hide")) {
        animItem.classList.remove("_active");
        // }
      }
    }
  }
}

function offset(el) {
  const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
}

setTimeout(() => {
  animOnScroll();
}, 300);

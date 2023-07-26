export const closeByEsc = (e) => {
  if (e.code === "Escape") {
    closeModalWindow(e);
  }
};

export function openModalWindow(e) {
  e.preventDefault();
  document.querySelector("#popup-root").classList.remove("is-hide");
  window.addEventListener("keydown", closeByEsc);
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector("html").style.overflow = "hidden";
}

export function closeModalWindow() {
  document.querySelector("#popup-root").classList.add("is-hide");
  window.removeEventListener("keydown", closeByEsc);
  document.querySelector("body").style.overflow = "visible";
  document.querySelector("html").style.overflow = "auto";
}

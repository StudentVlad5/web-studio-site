const subtitleBtn_1 = document.querySelector(".swithSubtitleBtn_1");
const subtitleOpacity_1 = document.querySelector(".testimonials-subtitles_1");

function swichSubtitles() {
  const opacityStatus = subtitleOpacity_1.classList.contains("is-opacity");
  !opacityStatus
    ? subtitleOpacity_1.classList.add("is-opacity")
    : subtitleOpacity_1.classList.remove("is-opacity");
}
subtitleBtn_1.addEventListener("click", () => swichSubtitles());

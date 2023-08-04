const subtitleBtn = document.querySelectorAll(
  ".testimonials__switchSubtitleBtn"
);

function swichSubtitles(e) {
  e.preventDefault();

  let opacityStatus = "";
  switch (e.currentTarget.dataset.count) {
    case "switchSubtitleBtn_1":
      opacityStatus = document.querySelector(".testimonials-subtitles_1");
      break;
    case "switchSubtitleBtn_2":
      opacityStatus = document.querySelector(".testimonials-subtitles_2");
      break;
    case "switchSubtitleBtn_3":
      opacityStatus = document.querySelector(".testimonials-subtitles_3");
      break;
    case "switchSubtitleBtn_4":
      opacityStatus = document.querySelector(".testimonials-subtitles_4");
      break;
    case "switchSubtitleBtn_5":
      opacityStatus = document.querySelector(".testimonials-subtitles_5");
      break;
    case "switchSubtitleBtn_6":
      opacityStatus = document.querySelector(".testimonials-subtitles_6");
      break;
    default:
      break;
  }

  !opacityStatus.classList.contains("is-opacity")
    ? opacityStatus.classList.add("is-opacity")
    : opacityStatus.classList.remove("is-opacity");
}
subtitleBtn.forEach((item) =>
  item.addEventListener("click", (e) => swichSubtitles(e))
);

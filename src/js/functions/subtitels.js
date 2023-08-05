const subtitleBtn = document.querySelectorAll(
  ".testimonials__switchSubtitleBtn"
);

function swichSubtitles(e) {
  e.preventDefault();
  let opacityStatus = document.querySelector(
    `.testimonials-subtitles_${e.currentTarget.dataset.audio}`
  );
  !opacityStatus.classList.contains("is-opacity")
    ? opacityStatus.classList.add("is-opacity")
    : opacityStatus.classList.remove("is-opacity");
}
subtitleBtn.forEach((item) =>
  item.addEventListener("click", (e) => swichSubtitles(e))
);

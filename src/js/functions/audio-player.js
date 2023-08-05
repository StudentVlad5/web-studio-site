const playBtn = document.querySelectorAll(".player__btn");
let timerId = "";

function changeHeightOfSoundtrack(number) {
  document
    .querySelectorAll(`.progress-bar_${number}`)
    .forEach((item) => (item.style.height = `${Math.random() * 12}px`));
}

function playSong(e) {
  const countOfPlayer = e.currentTarget.dataset.audio;
  document
    .getElementById(`music-container${countOfPlayer}`)
    .classList.add("play");
  document
    .querySelectorAll(`.progress-bar_${countOfPlayer}`)
    .forEach((item) => (item.style.opacity = `1`));
  document.getElementById(`play${countOfPlayer}`).classList.add("hidden");
  document.getElementById(`pause${countOfPlayer}`).classList.remove("hidden");
  document.getElementById(`audio_${countOfPlayer}`).play();
  document
    .getElementById(`audio_${countOfPlayer}`)
    .addEventListener("timeupdate", updateProgress);
  timerId = setInterval(() => changeHeightOfSoundtrack(countOfPlayer), 150);
}

function pauseSong(e) {
  const countOfPlayer = e.currentTarget.dataset.audio;
  document
    .getElementById(`music-container${countOfPlayer}`)
    .classList.remove("play");
  document.getElementById(`play${countOfPlayer}`).classList.remove("hidden");
  document.getElementById(`pause${countOfPlayer}`).classList.add("hidden");
  document
    .querySelectorAll(`.progress-bar_${countOfPlayer}`)
    .forEach((item) => (item.style.opacity = `.5`));
  document.getElementById(`audio_${countOfPlayer}`).pause();
  clearInterval(timerId);
}

function displayTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}

function updateProgress(e) {
  document.querySelector(
    `.time-elapsed_${e.currentTarget.dataset.audio}`
  ).textContent = `${displayTime(
    document.getElementById(`audio_${e.currentTarget.dataset.audio}`)
      .currentTime
  )}`;
}

playBtn.forEach((item) =>
  item.addEventListener("click", (e) => {
    console.log();
    document
      .getElementById(`music-container${e.currentTarget.dataset.audio}`)
      .classList.contains("play")
      ? pauseSong(e)
      : playSong(e);
  })
);

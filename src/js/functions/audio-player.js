const playBtn = document.querySelectorAll(".play--btn");
const pauseBtn = document.querySelectorAll(".pause--btn");
let timerId = "";

function changeHeightOfSoundtrack(number) {
  document.getElementById(`progress1_${number}`).style.height = `${
    Math.random() * 12
  }px`;
  document.getElementById(`progress2_${number}`).style.height = `${
    Math.random() * 12
  }px`;
  document.getElementById(`progress3_${number}`).style.height = `${
    Math.random() * 12
  }px`;
  document.getElementById(`progress4_${number}`).style.height = `${
    Math.random() * 12
  }px`;
  document.getElementById(`progress5_${number}`).style.height = `${
    Math.random() * 12
  }px`;
}

function playSong(e) {
  const countOfPlayer = e.currentTarget.dataset.play;

  document.querySelector(`.audio_player${countOfPlayer}`).classList.add("play");
  document.getElementById(`play${countOfPlayer}`).classList.add("is-hide");
  document.getElementById(`pause${countOfPlayer}`).classList.remove("is-hide");
  document.getElementById(`progress1_${countOfPlayer}`).style.opacity = `1`;
  document.getElementById(`progress2_${countOfPlayer}`).style.opacity = `1`;
  document.getElementById(`progress3_${countOfPlayer}`).style.opacity = `1`;
  document.getElementById(`progress4_${countOfPlayer}`).style.opacity = `1`;
  document.getElementById(`progress5_${countOfPlayer}`).style.opacity = `1`;

  document.getElementById(`audio_${countOfPlayer}`).play();
  document
    .getElementById(`audio_${countOfPlayer}`)
    .addEventListener("timeupdate", updateProgress);
  timerId = setInterval(() => changeHeightOfSoundtrack(countOfPlayer), 150);
}

function pauseSong(e) {
  const countOfPlayer = e.currentTarget.dataset.pause;

  document
    .querySelector(`.audio_player${countOfPlayer}`)
    .classList.remove("play");
  document.getElementById(`play${countOfPlayer}`).classList.remove("is-hide");
  document.getElementById(`pause${countOfPlayer}`).classList.add("is-hide");
  document.getElementById(`progress1_${countOfPlayer}`).style.opacity = `0.5`;
  document.getElementById(`progress2_${countOfPlayer}`).style.opacity = `0.5`;
  document.getElementById(`progress3_${countOfPlayer}`).style.opacity = `0.5`;
  document.getElementById(`progress4_${countOfPlayer}`).style.opacity = `0.5`;
  document.getElementById(`progress5_${countOfPlayer}`).style.opacity = `0.5`;
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
    `.time-elapsed_${e.currentTarget.id.slice(-1)}`
  ).textContent = `${displayTime(
    document.getElementById(`audio_${e.currentTarget.id.slice(-1)}`).currentTime
  )}`;
}

playBtn.forEach((item) =>
  item.addEventListener("click", (e) => {
    document
      .querySelector(`.audio_player${e.currentTarget.dataset.play}`)
      .classList.contains("play")
      ? pauseSong(e)
      : playSong(e);
  })
);

pauseBtn.forEach((item) =>
  item.addEventListener("click", (e) => {
    document
      .querySelector(`.audio_player${e.currentTarget.dataset.pause}`)
      .classList.contains("play")
      ? pauseSong(e)
      : playSong(e);
  })
);

const musicContainer = document.getElementById("music-container6");
const audioPlayer = musicContainer.querySelector(".audio_player6");
const progressRange = document.querySelector(".progress-range6");
const progressBar = document.querySelector(".progress-bar_6");
const currentTime = document.querySelector(".time-elapsed_6");
const audio = document.getElementById("audio_6");
const playBtn = document.getElementById("play6");
const pauseBtn = document.getElementById("pause6");
// const controlSoundBtn = document.getElementById("speaker_icon6");
// const controlSoundMute = document.querySelector(".range-container_6");
// const muteOnBtn = document.querySelector(".soundUp_6");
// const muteOffBtn = document.querySelector(".volumeMute_6");
const ranges = musicContainer.querySelectorAll(".player_slider_6");
const range = document.querySelector(".player_slider_6");
const volInput = musicContainer.querySelector('input[name="volume"]');
const progress1 = document.getElementById("progress1_6");
const progress2 = document.getElementById("progress2_6");
const progress3 = document.getElementById("progress3_6");
const progress4 = document.getElementById("progress4_6");
const progress5 = document.getElementById("progress5_6");
let timerId = "";

function playSong() {
  musicContainer.classList.add("play");
  playBtn.classList.add("is-hide");
  pauseBtn.classList.remove("is-hide");
  audio.play();
  timerId = setInterval(() => changeHeightOfSoundtrack(), 150);
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.classList.remove("is-hide");
  pauseBtn.classList.add("is-hide");
  audio.pause();
  clearInterval(timerId);
}

// function viewSoundControl(e) {
//   e.stopPropagation();
//   e.preventDefault();
//   const isViewMuteControl = controlSoundMute.classList.contains("is-hide");
//   isViewMuteControl
//     ? controlSoundMute.classList.remove("is-hide")
//     : controlSoundMute.classList.add("is-hide");
// }

function changeHeightOfSoundtrack() {
  progress1.style.height = `${Math.random() * 12}px`;
  progress2.style.height = `${Math.random() * 12}px`;
  progress3.style.height = `${Math.random() * 12}px`;
  progress4.style.height = `${Math.random() * 12}px`;
  progress5.style.height = `${Math.random() * 12}px`;
}

function displayTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}

function updateProgress() {
  progressBar.style.width = `${
    (audioPlayer.currentTime / audioPlayer.duration) * 100
  }%`;
  currentTime.textContent = `${displayTime(audio.currentTime)}`;
}

// function scrub(event) {
//   const scrubTime =
//     (event.offsetX / progressRange.offsetWidth) * audioPlayer.duration;
//   audioPlayer.currentTime = scrubTime;
// }

function setProgress(e) {
  const newTime = e.offsetX / progressRange.offsetWidth;
  progressBar.style.width = `${newTime * 100}%`;
  audioPlayer.currentTime = newTime * audioPlayer.duration;
}

function handleRangeUpdate() {
  audioPlayer[this.name] = this.value;
  // audioPlayer["volume"] === 0
  //   ? (speakerIcon.className = "fa fa-volume-off")
  //   : (speakerIcon.className = "fa fa-volume-up");
}

function mute() {
  audioPlayer["volume"] = 0;
  volInput.value = 0;
  range.value = 0;
}

function soundOn() {
  audioPlayer["volume"] = 1;
  volInput.value = 1;
  range.value = 1;
}

playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

pauseBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// controlSoundBtn.addEventListener("click", (e) => viewSoundControl(e));
audio.addEventListener("timeupdate", updateProgress);
progressRange.addEventListener("click", setProgress);

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

// muteOnBtn.addEventListener("click", soundOn);
// muteOffBtn.addEventListener("click", mute);

// progress bar controls
// let mouseDown = false;
// progressRange.addEventListener("click", scrub);
// progressRange.addEventListener(
//   "mousemove",
//   (event) => mouseDown && scrub(event)
// );
// progressRange.addEventListener("mousedown", () => (mouseDown = true));
// progressRange.addEventListener("mouseup", () => (mouseDown = false));

const { random } = require("animejs");

const musicContainer = document.getElementById("music-container");
const audioPlayer = musicContainer.querySelector(".audio_player");
const title = document.getElementById("title");
const progressRange = document.querySelector(".progress-range");
const progressBar = document.querySelector(".progress-bar");
const currentTime = document.querySelector(".time-elapsed");
const duration = document.querySelector(".time-duration");
const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const pauseBtn = document.getElementById("pause");
const controlSoundBtn = document.getElementById("speaker_icon");
const controlSoundMute = document.querySelector(".range-container");
const speaker = musicContainer.querySelector(".speaker");
const ranges = musicContainer.querySelectorAll(".player_slider");
const volInput = musicContainer.querySelector('input[name="volume"]');
const progress1 = document.getElementById("progress1");
const progress2 = document.getElementById("progress2");
const progress3 = document.getElementById("progress3");
const progress4 = document.getElementById("progress4");
const progress5 = document.getElementById("progress5");
let timerId = "";

let songIndex = 0;

function playSong() {
  console.log("clickOn play");
  musicContainer.classList.add("play");
  playBtn.classList.add("is-hide");
  pauseBtn.classList.remove("is-hide");
  audio.play();
  timerId = setInterval(() => changeHeightOfSoundtrack(), 150);
}

function pauseSong() {
  console.log("clickOn pause");
  musicContainer.classList.remove("play");
  playBtn.classList.remove("is-hide");
  pauseBtn.classList.add("is-hide");
  audio.pause();
  clearInterval(timerId);
}

function viewSoundControl(e) {
  e.stopPropagation();
  console.log("clickOn viewSoundControl");
  const isViewMuteControl = controlSoundMute.classList.contains("is-hide");
  isViewMuteControl
    ? controlSoundMute.classList.remove("is-hide")
    : controlSoundMute.classList.add("is-hide");
}

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
  let duration = 0;
  progressBar.style.width = `${
    (audioPlayer.currentTime / audioPlayer.duration) * 100
  }%`;
  currentTime.textContent = `${displayTime(audioPlayer.currentTime)}`;
}

function scrub(event) {
  const scrubTime =
    (event.offsetX / progressRange.offsetWidth) * audioPlayer.duration;
  audioPlayer.currentTime = scrubTime;
}

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

let muted = false;

function mute() {
  if (!muted) {
    audioPlayer["volume"] = 0;
    volInput.value = 0;
    muted = true;
  } else {
    audioPlayer["volume"] = 1;
    volInput.value = 1;
    muted = false;
  }
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

controlSoundBtn.addEventListener("click", (e) => viewSoundControl(e));
audio.addEventListener("timeupdate", updateProgress);
progressRange.addEventListener("click", setProgress);

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);
speaker.addEventListener("click", mute);

// progress bar controls
let mouseDown = false;
progressRange.addEventListener("click", scrub);
progressRange.addEventListener(
  "mousemove",
  (event) => mouseDown && scrub(event)
);
progressRange.addEventListener("mousedown", () => (mouseDown = true));
progressRange.addEventListener("mouseup", () => (mouseDown = false));

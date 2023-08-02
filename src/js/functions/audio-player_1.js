import mp3 from "../../mp3/Voicy_Allahu Akbar BANG.mp3";
const musicContainer = document.getElementById("music-container1");
const audioPlayer = musicContainer.querySelector(".audio_player1");
const progressRange = document.querySelector(".progress-range1");
const progressBar = document.querySelector(".progress-bar_1");
const currentTime = document.querySelector(".time-elapsed_1");
const audio = document.getElementById("audio_1");
const playBtn = document.getElementById("play1");
const pauseBtn = document.getElementById("pause1");
// const controlSoundBtn = document.getElementById("speaker_icon1");
// const controlSoundMute = document.querySelector(".range-container_1");
// const muteOnBtn = document.querySelector(".soundUp_1");
// const muteOffBtn = document.querySelector(".volumeMute_1");
const ranges = musicContainer.querySelectorAll(".player_slider_1");
const range = document.querySelector(".player_slider_1");
const volInput = musicContainer.querySelector('input[name="volume"]');
const progress1 = document.getElementById("progress1_1");
const progress2 = document.getElementById("progress2_1");
const progress3 = document.getElementById("progress3_1");
const progress4 = document.getElementById("progress4_1");
const progress5 = document.getElementById("progress5_1");
let timerId = "";

function playSong() {
  musicContainer.classList.add("play");
  playBtn.classList.add("is-hide");
  pauseBtn.classList.remove("is-hide");
  progress1.style.opacity = `1`;
  progress2.style.opacity = `1`;
  progress3.style.opacity = `1`;
  progress4.style.opacity = `1`;
  progress5.style.opacity = `1`;
  audio.play();
  timerId = setInterval(() => changeHeightOfSoundtrack(), 150);
}

function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.classList.remove("is-hide");
  pauseBtn.classList.add("is-hide");
  progress1.style.opacity = `0.5`;
  progress2.style.opacity = `0.5`;
  progress3.style.opacity = `0.5`;
  progress4.style.opacity = `0.5`;
  progress5.style.opacity = `0.5`;
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
  currentTime.textContent = `${displayTime(audioPlayer.currentTime)}`;
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

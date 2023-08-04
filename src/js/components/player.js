import getRefs from '../refs/refs';
const refs = getRefs();

let timerId = '';

refs.switchPlay.forEach(btn =>
  btn.addEventListener('click', e => switchPlay(e))
);

function switchPlay(e) {
  e.preventDefault();

  const action = e.currentTarget.dataset.play;
  const audioId = e.currentTarget.dataset.audio;

  refs.audio.forEach(track => {
    // check action and id
    if (track.dataset.audio === audioId && action === 'play') {
      // play audio
      track.play();
      track.classList.add('play');

      // change time
      track.addEventListener('timeupdate', () => {
        document.querySelector(
          `[data-play="time"][data-audio="${audioId}"]`
        ).textContent = `${displayTime(track.currentTime)}`;
      });
      // run sound-set-on
      timerId = setInterval(() => {
        refs.soundOn.forEach(progress => {
          progress.classList.remove('hidden');
          //   document
          //     .querySelector(`[data-sound="off"][data-audio="${audioId}"]`)
          //     .classList.add('hidden');
        });
      }, 150);

      //switch player btn
      e.currentTarget.classList.add('hidden');
      e.currentTarget.classList.add('hidden');
      document
        .querySelector(`[data-play="pause"][data-audio="${audioId}"]`)
        .classList.remove('hidden');
    } else {
      // stop audio
      track.pause();
      track.classList.remove('play');

      // stop timer
      clearInterval(timerId);

      // stop sound-set-on and return to visual sound-off
      //   document
      //     .querySelector(`[data-sound="off"][data-audio="${audioId}"]`)
      //     .classList.remove('hidden');
      //   document
      //     .querySelector(`[data-sound="on"][data-audio="${audioId}"]`)
      //     .classList.add('hidden');

      //switch player btn
      document
        .querySelector(`[data-play="play"][data-audio="${audioId}"]`)
        .classList.remove('hidden');
      e.currentTarget.classList.add('hidden');
    }
  });
}

function displayTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds > 9 ? seconds : `0${seconds}`;
  return `${minutes}:${seconds}`;
}

function onSoundSet() {
  refs.soundOn.forEach(progress => {
    progress.classList.remove('hidden');
    document
      .querySelector(`[data-sound="off"][data-audio="${audioId}"]`)
      .classList.add('hidden');
  });
}

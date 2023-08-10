import sprite from '../../images/sprite.svg';
import getRefs from '../refs/refs';
const refs = getRefs();

// ===== to switch audio playback =====
let timerId = null;

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
      // timerId = setInterval(onSoundSet(audioId), 150);
      onSoundSet(audioId);

      //switch player btn
      e.currentTarget.classList.add('hidden');
      document
        .querySelector(`[data-play="pause"][data-audio="${audioId}"]`)
        .classList.remove('hidden');
    }

    if (track.dataset.audio === audioId && action === 'pause') {
      // stop audio
      track.pause();
      track.classList.remove('play');

      // stop timer
      clearInterval(timerId);

      // stop sound-set-on and return to visual sound-off
      offSoundSet(audioId);

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

function onSoundSet(id) {
  document
    .querySelector(`[data-sound="off"][data-audio="${id}"]`)
    .classList.add('hidden');

  let i = 0;
  timerId = setInterval(() => {
    renderSoundOnSet(i++, id);
  }, 150);
  if (i > 8) {
    clearInterval(timerId);
  }
}

function offSoundSet(id) {
  document
    .querySelector(`[data-sound="off"][data-audio="${id}"]`)
    .classList.remove('hidden');

  refs.soundOn.forEach(progress => {
    if (progress.dataset.audio === id) {
      progress.classList.add('hidden');
    }
  });
}

function renderSoundOnSet(i, id) {
  refs.soundSetOn.forEach(set => {
    if (set.dataset.audio === id) {
      return (set.innerHTML = `
      <svg
        class="player__icon"
        width="15"
        height="15"
        data-sound="on"
        data-audio=${id}
      >
        <use href="${sprite}#sound_${i}"></use>
      </svg>
  `);
    }
  });
}

// ===== to switch the volume =====

refs.switchVolume.forEach(btn =>
  btn.addEventListener('click', e => SwitchVolume(e))
);

function SwitchVolume(e) {
  e.preventDefault();

  const action = e.currentTarget.dataset.vol;

  if (action === 'off') {
    refs.volumeOn.forEach(btn => {
      btn.classList.remove('hidden');
    });
    refs.volumeOff.forEach(btn => {
      btn.classList.add('hidden');
    });

    refs.audio.forEach(track => {
      track.volume = 1;
    });
  } else {
    refs.volumeOn.forEach(btn => {
      btn.classList.add('hidden');
    });
    refs.volumeOff.forEach(btn => {
      btn.classList.remove('hidden');
    });

    refs.audio.forEach(track => {
      track.volume = 0;
    });
  }
}

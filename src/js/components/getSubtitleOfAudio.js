import getRefs from '../refs/refs';
const refs = getRefs();

function switchSubtitles(e) {
  e.preventDefault();

  const subtitleId = e.target.dataset.audio;

  refs.subtitles.forEach(subtitle => {
    if (subtitle.dataset.audio === subtitleId) {
      subtitle.classList.toggle('hidden');
    }
    return;
  });
}

refs.switchSubtitle.forEach(item =>
  item.addEventListener('click', e => switchSubtitles(e))
);

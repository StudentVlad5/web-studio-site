import getRefs from '../refs/refs';
const refs = getRefs();

const savedLang = localStorage.getItem('selectedLang') || 'en';

refs.switcher.checked = savedLang === 'ua';

function updateLanguage(selectedLang) {
  refs.translateElements.forEach(element => {
    const translation = element.getAttribute(`data-${selectedLang}`);
    if (translation) {
      element.textContent = translation;
    }
  });

  localStorage.setItem('selectedLang', selectedLang);
}

updateLanguage(savedLang);

refs.translateButtons.forEach(button => {
  button.addEventListener('click', function () {
    const selectedLang = this.getAttribute('data-lang');

    refs.hiddenText1.classList.toggle('hidden');
    refs.hiddenText2.classList.toggle('hidden');
    updateLanguage(selectedLang);
  });
});

refs.switcher.addEventListener('click', function () {
  const selectedLang = this.checked ? 'ua' : 'en';
  updateLanguage(selectedLang);
});

import getRefs from '../refs/refs';
const refs = getRefs();

(() => {
  const toggleMenu = () => {
    const expanded =
      refs.menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
    refs.menuBtnRef.classList.toggle('is-open');
    refs.menuBtnRef.setAttribute('aria-expanded', !expanded);
    refs.mobileMenuRef.classList.toggle('is-open');
    !expanded ? fixedModalOverflow() : closeModalOverflow();
  };

  refs.menuBtnRef.addEventListener('click', toggleMenu);
  refs.menuLinks.addEventListener('click', toggleMenu);
})();

// Fixed window when modal opened
function fixedModalOverflow() {
  // document.querySelector('body').style.overflow = 'hidden';
  document.querySelector('body').style.height = '100vh';
}

function closeModalOverflow() {
  document.querySelector('body').style.overflow = 'visible';
  document.querySelector('body').style.height = 'auto';
}

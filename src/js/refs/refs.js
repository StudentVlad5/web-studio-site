export default function getRefs() {
  return {
    //========== navigation ==========
    navLinks: document.querySelectorAll('.navigation__link'),
    sections: document.querySelectorAll('section[id]'),

    //========== mobile menu ==========
    menuBtnRef: document.querySelector('.js-mobile-menu-button'),
    mobileMenuRef: document.querySelector('.js-mobile-menu'),
    menuLinks: document.querySelector('.js-mobile-menu-links'),

    //==========  player ==========
    audio: document.querySelectorAll('.audio'),
    switchPlay: document.querySelectorAll('.player__btn'),
    playBtn: document.querySelectorAll('[data-play="play"]'),
    pauseBtn: document.querySelectorAll('[data-play="pause"]'),
    time: document.querySelectorAll('[data-play="time"]'),
    soundOff: document.querySelectorAll('[data-sound="off"]'),
    soundOn: document.querySelectorAll('[data-sound="on"]'),
    switchSubtitle: document.querySelectorAll('.player__switch-subtitle'),
    subtitles: document.querySelectorAll('.player__subtitle'),

    //==========  cases section ==========
    slider: document.querySelector('.slider'),
    slides: document.querySelector('.slides'),
    slidesBox: document.querySelectorAll('.slides-box'),
    prevBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),

    //==========  testimonials section ==========
    testimonialsWrap: document.querySelector('.testimonials-clients-wrap'),

    //==========  about me section ==========
    elements: document.querySelectorAll('#sentinel'),
  };
}

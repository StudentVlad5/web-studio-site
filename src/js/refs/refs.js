export default function getRefs() {
  return {
    //========== navigation ==========
    navLinks: document.querySelectorAll('.navigation__link'),
    sections: document.querySelectorAll('section[id]'),

    //========== mobile menu ==========
    menuBtnRef: document.querySelector('.js-mobile-menu-button'),
    mobileMenuRef: document.querySelector('.js-mobile-menu'),
    menuLinks: document.querySelector('.js-mobile-menu-links'),

    //==========  translate ==========
    word1: document.getElementById('word1'),
    word2: document.getElementById('word2'),
    switcher: document.getElementById('switcher'),

    //==========  player ==========
    audio: document.querySelectorAll('.audio'),
    switchVolume: document.querySelectorAll('.sound__vol'),
    volumeOn: document.querySelectorAll('[data-vol="on"]'),
    volumeOff: document.querySelectorAll('[data-vol="off"]'),
    switchPlay: document.querySelectorAll('.player__btn'),
    playBtn: document.querySelectorAll('[data-play="play"]'),
    pauseBtn: document.querySelectorAll('[data-play="pause"]'),
    time: document.querySelectorAll('[data-play="time"]'),
    soundSet: document.querySelectorAll('.sound-set'),
    progress: document.querySelectorAll('.progress'),
    soundOff: document.querySelectorAll('[data-sound="off"]'),
    soundOn: document.querySelectorAll('[data-sound="on"]'),
    switchSubtitle: document.querySelectorAll('.player__switch-subtitle'),
    subtitles: document.querySelectorAll('.player__subtitle'),

    //==========  items with scroll ==========
    elements: document.querySelectorAll('#sentinel'),

    //==========  cases section ==========
    slider: document.querySelector('.slider'),
    slides: document.querySelector('.slides'),
    slidesBox: document.querySelectorAll('.slides-box'),
    prevBtn: document.querySelector('.prev-btn'),
    nextBtn: document.querySelector('.next-btn'),

    //==========  testimonials section ==========
    testimonialsWrap: document.querySelector('.testimonials-clients-wrap'),

    //==========  services section ==========
    services: document.querySelector('.services'),
    subsectionTitles: document.querySelector('.services__subsection.titles'),
    subsectionCards: document.querySelector('.services__subsection.cards'),
    titleServices: document.querySelector('.services__title'),
  };
}

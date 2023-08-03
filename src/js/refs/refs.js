export default function getRefs() {
  return {
    //========== navigation ==========
    navLinks: document.querySelectorAll('.navigation__link'),
    sections: document.querySelectorAll('section[id]'),

    //========== mobile menu ==========
    menuBtnRef: document.querySelector('.js-mobile-menu-button'),
    mobileMenuRef: document.querySelector('.js-mobile-menu'),
    menuLinks: document.querySelector('.js-mobile-menu-links'),

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

!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},s=n.parcelRequire483d;function a(){return{navLinks:document.querySelectorAll(".navigation__link"),sections:document.querySelectorAll("section[id]"),menuBtnRef:document.querySelector(".js-mobile-menu-button"),mobileMenuRef:document.querySelector(".js-mobile-menu"),menuLinks:document.querySelector(".js-mobile-menu-links"),word1:document.querySelectorAll(".word1"),word2:document.querySelectorAll(".word2"),switcher:document.querySelectorAll(".switcher"),translateButtons:document.querySelectorAll(".translate-button"),translateElements:document.querySelectorAll(".translate"),hiddenText1:document.querySelector(".hidden-text1"),hiddenText2:document.querySelector(".hidden-text2"),audio:document.querySelectorAll(".audio"),switchVolume:document.querySelectorAll(".sound__vol"),volumeOn:document.querySelectorAll('[data-vol="on"]'),volumeOff:document.querySelectorAll('[data-vol="off"]'),switchPlay:document.querySelectorAll(".player__btn"),playBtn:document.querySelectorAll('[data-play="play"]'),pauseBtn:document.querySelectorAll('[data-play="pause"]'),time:document.querySelectorAll('[data-play="time"]'),soundSet:document.querySelectorAll(".sound-set"),progress:document.querySelectorAll(".progress"),soundOff:document.querySelectorAll('[data-sound="off"]'),soundOn:document.querySelectorAll('[data-sound="on"]'),switchSubtitle:document.querySelectorAll(".player__switch-subtitle"),subtitles:document.querySelectorAll(".player__subtitle"),elements:document.querySelectorAll("#sentinel"),slider:document.querySelector(".slider"),slides:document.querySelector(".slides"),slidesBox:document.querySelectorAll(".slides-box"),prevBtn:document.querySelector(".prev-btn"),nextBtn:document.querySelector(".next-btn"),testimonialsWrap:document.querySelector(".testimonials-clients-wrap"),services:document.querySelector(".services"),subsectionTitles:document.querySelector(".services__subsection.titles"),subsectionCards:document.querySelector(".services__subsection.cards"),titleServices:document.querySelector(".services__title"),servicesImage:document.querySelector(".services__image")}}null==s&&((s=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},n.parcelRequire483d=s),s.register("iE7OH",(function(t,n){var i,o;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},o=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s.register("aNJCr",(function(t,n){var i;e(t.exports,"getBundleURL",(function(){return i}),(function(e){return i=e}));var o={};function s(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}i=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),o[e]=t),t}})),s("iE7OH").register(JSON.parse('{"EVgbq":"index.4043f317.js","ee16w":"sprite.935468d6.svg","g8JVe":"client_1.843964b9.jpg","85s7C":"client_2.442e8319.jpg","7Q123":"client_3.e50c92ae.jpg"}')),AOS.init({duration:1e3,offset:5,delay:10}),window.addEventListener("load",AOS.refresh);var c=a(),r=0,l=0,d=null,u="header-show",f="header-hide";function v(){(l=window.pageYOffset)<r?d.classList.contains(f)&&(d.classList.remove(f),d.classList.add(u)):l>r&&(!d.classList.contains(u)&&d.classList.contains(f)||(d.classList.remove(u),d.classList.add(f))),r=l}window.onload=function(){d=document.getElementById("header"),"true"===c.menuBtnRef.getAttribute("aria-expanded")?document.addEventListener("scroll",v,!1):window.innerWidth>="1440"?document.removeEventListener("scroll",v,!1):document.addEventListener("scroll",v,!0)};var m=a();window.addEventListener("scroll",(function(){var e=window.scrollY;m.navLinks.forEach((function(t){var n=document.querySelector(t.hash);console.log("section:",n);var i=n.offsetHeight;console.log("sectionHeight:",i);var o=n.offsetTop-100;console.log("sectionTop:",o);var s=n.offsetLeft;console.log("sectionWidth:",s),"windowForScrolling"!==n.parentElement.className&&(e<o&&t.classList.contains("active")||e>o&&e<o+i?t.classList.add("active"):t.classList.remove("active")),"windowForScrolling"===n.parentElement.className&&("testimonials"===n.id?e>=s+1700&&e<=s+1700+i?t.classList.add("active"):t.classList.remove("active"):"services"===n.id?e>=s+1420&&e<=s+i+1420?t.classList.add("active"):t.classList.remove("active"):"about"===n.id&&(e>=s-2776&&e<=s-770?t.classList.add("active"):t.classList.remove("active")))}))}));var y,h=a();y=function(){var e="true"===h.menuBtnRef.getAttribute("aria-expanded")||!1;h.menuBtnRef.classList.toggle("is-open"),h.menuBtnRef.setAttribute("aria-expanded",!e),h.mobileMenuRef.classList.toggle("is-open"),e?(document.querySelector("body").style.overflow="visible",document.querySelector("body").style.height="auto"):document.querySelector("body").style.height="100vh"},h.menuBtnRef.addEventListener("click",y),h.menuLinks.addEventListener("click",y);var p=a();var g=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?e.target.classList.add("fixed"):e.target.classList.remove("fixed")}))}),{threshold:[.1]}),b=!0,_=!1,L=void 0;try{for(var w,S=p.elements[Symbol.iterator]();!(b=(w=S.next()).done);b=!0){var E=w.value;g.observe(E)}}catch(Se){_=!0,L=Se}finally{try{b||null==S.return||S.return()}finally{if(_)throw L}}var q={};Object.defineProperty(q,"__esModule",{value:!0});var A={},I={};Object.defineProperty(I,"__esModule",{value:!0}),I.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e},Object.defineProperty(A,"__esModule",{value:!0});var T="function"==typeof Symbol&&"symbol"===t(I)(Symbol.iterator)?function(e){return void 0===e?"undefined":t(I)(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(I)(e)},x={};Object.defineProperty(x,"__esModule",{value:!0});var O=x.easeFunctions={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},k=x.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};x.setPosition=function(e,t,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"easeInOutCubic";return n>i?t:e+(t-e)*O[o](n/i)},x.calcEndPoint=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(k(e))return parseInt(e)+n;var i=t===window||t===document.documentElement?window.pageYOffset:t.scrollTop-t.getBoundingClientRect().top,o="html"===e.nodeName.toLowerCase()?-i:e.getBoundingClientRect().top+i;return o+n};A.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,i=void 0===n?500:n,o=t.context,s=void 0===o?window:o,a=t.offset,c=void 0===a?0:a,r=t.ease,l=void 0===r?"easeInOutCubic":r,d=t.callback;if("object"===("undefined"==typeof window?"undefined":T(window))){var u=null!==s.scrollTop&&void 0!==s.scrollTop?s.scrollTop:window.pageYOffset,f=(0,x.calcEndPoint)(e,s,c),v=performance.now(),m=window.requestAnimationFrame,y=function t(){var n=performance.now()-v,o=(0,x.setPosition)(u,f,n,i,l);s!==window?s.scrollTop=o:window.scroll(0,o),n>i?"function"==typeof d&&d(e):m(t)};y()}};var C=Q(A=A.default),B={};Object.defineProperty(B,"__esModule",{value:!0});var R,H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},N=(R=A)&&R.__esModule?R:{default:R};B.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,n=void 0===t?'[href^="#"]:not([href="#"]':t,i=e.match,o=void 0===i?function(e){return document.getElementById(e.hash.substring(1))}:i,s=e.hashChange,a=void 0===s||s,c=e.scrollSmoothConfig,r=document.querySelectorAll(n),l=function(e){e.preventDefault();var t=o(e.target);t&&(a&&history.replaceState(null,null,"#"+t.id),(0,N.default)(t,H({},c)))};Array.from(r).map((function(e){e.addEventListener("click",l,!1)}))};var j=Q(B=B.default),M={};function P(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(M,"__esModule",{value:!0}),M.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.activeClass,n=void 0===t?"active":t,i=e.query,o=void 0===i?'[href^="#"]:not([href="#"]):not([href="#0"])':i,s=e.threshold,a=void 0===s?[.25,.5,.75]:s,c=e.detectType,r=void 0===c?"max":c,l={threshold:a},d=function(e){return e.classList.remove(n)},u=function(e){return e.classList.add(n)},f=function(){document.querySelectorAll("."+n).forEach(d)},v=function(e){f(),u(document.querySelector('a[href="#'+e.id+'"]'))},m=function(e){e.forEach((function(e){e.intersectionRatio>=Math[r].apply(Math,P(a))&&v(e.target)}))},y=document.querySelectorAll(o),h=new IntersectionObserver(m,l),p=function(e){var t=document.querySelector("#"+e.hash.slice(1));h.observe(t)};y.forEach(p)};var F=Q(M=M.default);function Q(e){return e&&e.__esModule?e:{default:e}}q.default={to:C.default,calcEndPoint:x.calcEndPoint,anchorScroll:j.default,observe:F.default},q=q.default;document.querySelector(".btn-up");var D=a(),J=0;function Y(){var e=D.slidesBox[J].offsetLeft-D.slider.offsetLeft;D.slides.scrollTo({left:e,behavior:"smooth"})}D.prevBtn.addEventListener("click",(function(){--J<0&&(J=D.slidesBox.length-1),Y()})),D.nextBtn.addEventListener("click",(function(){++J>=D.slidesBox.length&&(J=0),Y()}));var z=document.querySelectorAll(".btn1"),V=document.querySelectorAll(".btn2"),U=document.querySelectorAll(".faq__list-item-discr"),W=document.querySelectorAll(".btn-desk1"),$=document.querySelectorAll(".btn-desk2");V.forEach((function(e){return e.classList.add("is-hidden")})),$.forEach((function(e){return e.classList.add("is-hidden")})),W.forEach((function(e,t){e.addEventListener("click",(function(){U[t].classList.add("show"),e.classList.add("is-hidden"),$[t].classList.remove("is-hidden"),$[t].classList.add("active")}))})),$.forEach((function(e,t){e.addEventListener("click",(function(){U[t].classList.remove("show"),W[t].classList.remove("is-hidden"),e.classList.add("is-hidden"),$[t].classList.remove("active")}))})),z.forEach((function(e,t){e.addEventListener("click",(function(){U[t].classList.add("show"),e.classList.add("is-hidden"),V[t].classList.remove("is-hidden"),V[t].classList.add("active")}))})),V.forEach((function(e,t){e.addEventListener("click",(function(){U[t].classList.remove("show"),z[t].classList.remove("is-hidden"),e.classList.add("is-hidden"),V[t].classList.remove("active")}))}));var G;G=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("ee16w");var X;X=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("g8JVe");var K;K=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("85s7C");var Z;Z=s("aNJCr").getBundleURL("EVgbq")+s("iE7OH").resolve("7Q123");var ee,te,ne=[{clientId:1,clientImg:t(X),clientName:"Tatyana",clientCompany:"ARMOR LLC",clientTitle:"Tatiana's review",dataAos:"zoom-out",offset:"0",delay:"1000",easing:"ease-in-sine",time:"0:10",anchor:"anchor_1",duration:"2000"},{clientId:2,clientImg:t(K),clientName:"Ivan",clientCompany:"Ukraine LTD",clientTitle:"Ivan's review",dataAos:"zoom-out",offset:"0",delay:"1500",easing:"ease-out-cubic",time:"0:07",anchor:"anchor_2",duration:"2000"},{clientId:3,clientImg:t(Z),clientName:"Sonya",clientCompany:"Bayractar System LLC",clientTitle:"Sonya's review",dataAos:"zoom-out",offset:"0",delay:"2000",easing:"ease-in-sine",time:"0:06",anchor:".testimonials__client-container_2",duration:"2000"},{clientId:4,clientImg:t(X),clientName:"Sara",clientCompany:"Homekeeper",clientTitle:"Sara's review",dataAos:"zoom-out",offset:"0",delay:"2500",easing:"ease-in-back",time:"0:05",anchor:".testimonials__client-container_3",duration:"2000"},{clientId:5,clientImg:t(K),clientName:"Jon",clientCompany:"Green Yard LCC",clientTitle:"Jon's review",dataAos:"zoom-out",offset:"0",delay:"5000",easing:"ease-in-back",time:"0:05",anchor:".testimonials__client-container_3",duration:"2000"},{clientId:6,clientImg:t(Z),clientName:"Inga",clientCompany:"Rozetka LTD",clientTitle:"Inga's review",dataAos:"zoom-out",offset:"0",delay:"6000",easing:"ease-in-back",time:"0:07",anchor:".testimonials__client-container_4",duration:"2000"}];ee=document.querySelector(".testimonials__listOfClients"),te="",ne.map((function(e){te+='\n      <li id="anchor_'.concat(e.clientId,'"\n        class="testimonials__client-container testimonials__client-container_').concat(e.clientId,'"\n        data-aos=').concat(e.dataAos,"\n        data-aos-offset=").concat(e.offset,"\n        data-aos-delay=").concat(e.delay,"\n        data-aos-easing=").concat(e.easing,"\n        data-aos-anchor=").concat(e.anchor,"\n        data-aos-duration=").concat(e.duration,'\n      >\n        <div class="testimonials__client-coordinate').concat(e.clientId,'" style="position:relative; display: flex; align-items: center;\n        justify-content: center;">\n          <div class="testimonials__client-box">\n            <div class="testimonials__client-wrap">\n              <img\n                class="testimonials__client-img"\n                src=').concat(e.clientImg,'\n                alt="client number ').concat(e.clientId,'"\n              />\n              <div class="testimonials__client-data">\n                <p>').concat(e.clientName,"</p>\n                <p>").concat(e.clientCompany,'</p>\n              </div>\n            </div>\n            <div class="player__wrapper">\n              <div\n                class="music-container player"\n                id="music-container').concat(e.clientId,'"\n              >\n                <div class="testimonials-navigation player__road">\n                  <div class="player__row">\n                    <button\n                      type="button"\n                      id="play').concat(e.clientId,'"\n                      data-play="play"\n                      data-audio="').concat(e.clientId,'"\n                      class="action-btn action-btn-big player__btn play--btn"\n                    >\n                    <svg\n                    class="player__icon fa-pause"\n                    width="12"\n                    height="12"\n                  >\n                  <use href="').concat(t(G),'#play"></use>\n                    </button>\n                    <button\n                      type="button"\n                      id="pause').concat(e.clientId,'"\n                      data-play="pause"\n                      data-audio="').concat(e.clientId,'"\n                      class="action-btn action-btn-big player__btn hidden pause--btn"\n                    >\n                      <svg\n                        class="player__icon fa-pause"\n                        width="12"\n                        height="12"\n                      >\n                        <use href="').concat(t(G),'#pause"></use>\n                      </svg>\n                    </button>\n                    <p class="player__name">').concat(e.clientTitle,'</p>\n                  </div>\n                  <div class="player__row testimonials_row">\n                  <div class="sound-set" data-audio=').concat(e.clientId,'>\n                      <svg class="player__icon" width="15" height="15" data-sound="off" data-audio=').concat(e.clientId,'>\n                          <use href="').concat(t(G),'#sound_off"></use>\n                      </svg>\n                      <div class="progress hidden testimonials" data-sound="on" data-audio=').concat(e.clientId,'>\n                          <div class="progress__bar"></div>\n                          <div class="progress__bar"></div>\n                          <div class="progress__bar"></div>\n                          <div class="progress__bar"></div>\n                      </div>\n                  </div>\n              </div>\n                    <div class="time">\n                      <span class="time-elapsed_').concat(e.clientId,'" \n                      data-play="time" \n                      data-audio="').concat(e.clientId,'">\n                        ').concat(e.time,'\n                      </span>\n                    </div>\n                  </div>\n                </div>\n                <div class="testimonials__subtitlesBtn">\n                  <button\n                    type="button"\n                    title="swithSubtitle"\n                    class="player__switch-subtitle testimonials__switchSubtitleBtn switchSubtitleBtn_').concat(e.clientId,'"\n                    data-count="switchSubtitleBtn_').concat(e.clientId,'"\n                    data-audio=').concat(e.clientId,'\n                    >\n                    <svg class="player__icon" width="10" height="10">\n                      <use href="').concat(t(G),'#arrow-right2"></use>\n                    </svg>\n                    A\n                  </button>\n                </div>\n                <div class="testimonials__subtitle-container">\n                  <div\n                    class="player__subtitle hidden testimonials-subtitles testimonials-subtitles_').concat(e.clientId,'"\n                    data-audio=').concat(e.clientId,'\n                    >\n                    <p>\n                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n                      Dignissimos eaque ut autem ad unde. Repellat delectus, sed quo,\n                      accusantium ad recusandae inventore illum fuga est, provident\n                      obcaecati molestiae fugit et.\n                    </p>\n                    <svg class="player__icon testimonials-subtitles--icon" width="30" height="15">\n                    <use href="').concat(t(G),'#triangle-left"></use>\n                    </svg>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n  ')})),ee.innerHTML=te;var ie=a();ie.switchSubtitle.forEach((function(e){return e.addEventListener("click",(function(e){return function(e){e.preventDefault();var t=e.currentTarget.dataset.audio;ie.subtitles.forEach((function(e){e.dataset.audio===t&&e.classList.toggle("hidden")}))}(e)}))}));var oe=a(),se=null;oe.switchPlay.forEach((function(e){return e.addEventListener("click",(function(e){return function(e){e.preventDefault();var t=e.currentTarget.dataset.play,n=e.currentTarget.dataset.audio;oe.audio.forEach((function(i){var o;i.dataset.audio===n&&"play"===t&&(i.play(),i.classList.add("play"),i.addEventListener("timeupdate",(function(){var e,t,o;document.querySelector('[data-play="time"][data-audio="'.concat(n,'"]')).textContent="".concat((e=i.currentTime,t=Math.floor(e/60),o=(o=Math.floor(e%60))>9?o:"0".concat(o),"".concat(t,":").concat(o)))})),o=n,document.querySelector('[data-sound="off"][data-audio="'.concat(o,'"]')).classList.add("hidden"),document.querySelector('[data-sound="on"][data-audio="'.concat(o,'"]')).classList.remove("hidden"),se=setInterval((function(){document.querySelectorAll(".progress__bar").forEach((function(e){return e.style.height="".concat(12*Math.random(),"px")}))}),150),e.currentTarget.classList.add("hidden"),document.querySelector('[data-play="pause"][data-audio="'.concat(n,'"]')).classList.remove("hidden")),i.dataset.audio===n&&"pause"===t&&(i.pause(),i.classList.remove("play"),clearInterval(se),function(e){document.querySelector('[data-sound="off"][data-audio="'.concat(e,'"]')).classList.remove("hidden"),oe.soundOn.forEach((function(t){t.dataset.audio===e&&t.classList.add("hidden")}))}(n),document.querySelector('[data-play="play"][data-audio="'.concat(n,'"]')).classList.remove("hidden"),e.currentTarget.classList.add("hidden"))}))}(e)}))})),oe.switchVolume.forEach((function(e){return e.addEventListener("click",(function(e){return function(e){e.preventDefault(),"off"===e.currentTarget.dataset.vol?(oe.volumeOn.forEach((function(e){e.classList.remove("hidden")})),oe.volumeOff.forEach((function(e){e.classList.add("hidden")})),oe.audio.forEach((function(e){e.volume=1}))):(oe.volumeOn.forEach((function(e){e.classList.add("hidden")})),oe.volumeOff.forEach((function(e){e.classList.remove("hidden")})),oe.audio.forEach((function(e){e.volume=0})))}(e)}))}));a();var ae=document.querySelectorAll(".word1"),ce=document.querySelectorAll(".word2"),re=document.querySelectorAll(".switcher");ae.forEach((function(e){e.addEventListener("click",(function(){re.checked=!1,e.classList.add("label--isActive"),ce.forEach((function(e){return e.classList.remove("label--isActive")}))}))})),ce.forEach((function(e){e.addEventListener("click",(function(){re.checked=!0,e.classList.add("label--isActive"),ae.forEach((function(e){return e.classList.remove("label--isActive")}))}))})),re.forEach((function(e){e.addEventListener("click",(function(){ce.forEach((function(e){return e.classList.toggle("label--isActive")})),ae.forEach((function(e){return e.classList.toggle("label--isActive")}))}))}));var le=a(),de=localStorage.getItem("selectedLang")||"en";function ue(e){le.translateElements.forEach((function(t){var n=t.getAttribute("data-".concat(e));n&&(t.textContent=n)})),localStorage.setItem("selectedLang",e)}le.switcher.checked="ua"===de,ue(de),le.translateButtons.forEach((function(e){e.addEventListener("click",(function(){var e=this.getAttribute("data-lang");le.hiddenText1.classList.toggle("hidden"),le.hiddenText2.classList.toggle("hidden"),ue(e)}))})),le.switcher.forEach((function(e){e.addEventListener("click",(function(){ue(this.checked?"ua":"en")}))}));var fe=a();window.addEventListener("scroll",(function(){var e=window.scrollY,t=fe.services.offsetTop+3300,n=t+100,i=n+100,o=fe.subsectionCards.offsetLeft+1952,s=o+100,a=s+100;window.innerWidth>=1440?e<=t?(fe.subsectionTitles.classList.add("accent"),fe.subsectionTitles.classList.remove("lavender"),fe.subsectionTitles.classList.remove("second"),fe.titleServices.style.opacity="0.6"):e>t&&e<=n?(fe.subsectionTitles.classList.add("lavender"),fe.subsectionTitles.classList.remove("accent"),fe.subsectionTitles.classList.remove("second"),fe.titleServices.style.opacity="1"):e>i&&(fe.subsectionTitles.classList.add("second"),fe.subsectionTitles.classList.remove("accent"),fe.subsectionTitles.classList.remove("lavender"),fe.titleServices.style.opacity="0.6"):e<=o?(fe.subsectionTitles.classList.add("accent"),fe.subsectionTitles.classList.remove("lavender"),fe.subsectionTitles.classList.remove("second"),fe.titleServices.style.opacity="0.6"):e>o&&e<=s?(fe.subsectionTitles.classList.add("lavender"),fe.subsectionTitles.classList.remove("accent"),fe.subsectionTitles.classList.remove("second"),fe.titleServices.style.opacity="1"):e>=a&&(fe.subsectionTitles.classList.add("second"),fe.subsectionTitles.classList.remove("accent"),fe.subsectionTitles.classList.remove("lavender"),fe.titleServices.style.opacity="0.6")}));var ve=a();new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?e.target.classList.add("scale"):e.target.classList.remove("scale")}))}),{threshold:[.3]}).observe(ve.servicesImage),document.querySelectorAll(".testimonials__switchSubtitleBtn").forEach((function(e){return e.addEventListener("click",(function(e){return function(e){e.preventDefault();var t=document.querySelector(".testimonials-subtitles_".concat(e.currentTarget.dataset.audio));t.classList.contains("is-opacity")?t.classList.remove("is-opacity"):t.classList.add("is-opacity")}(e)}))}));var me=document.querySelectorAll("._anim-items"),ye=document.querySelector(".testimonials__listOfClients");if(me.length>0){function he(){for(var e=0;e<me.length;e++){var t=me[e],n=t.offsetHeight,i=(s=ye,a=void 0,c=void 0,r=void 0,a=s.getBoundingClientRect(),c=window.scrollX||document.documentElement.scrollLeft,r=window.scrollY||document.documentElement.scrollTop,{top:a.top+r,left:a.left+c}).top,o="";n>window.innerHeight&&(o=window.innerHeight-window.innerHeight/4),scrollY>i-o&&scrollY<i+n?t.classList.add("_active"):t.classList.remove("_active")}var s,a,c,r}window.addEventListener("scroll",he)}setTimeout((function(){he()}),300);var pe=document.querySelector(".fixed-window"),ge=document.querySelector(".sidebar"),be=document.querySelector(".testimonials__listOfClients-wrap"),_e=document.querySelector(".windowForScrolling"),Le=document.querySelector(".testimonials__title"),we="";window.addEventListener("scroll",(function(){we=window.scrollY,console.log(we),window.innerWidth>1439&&(we>1850&&we<4e3&&(pe.style.position="fixed",pe.style.top="0",be.style.position="fixed",be.style.left="100%",be.style.left=3.15*-(we-1875-200)+"px"),we>2800&&we<7450&&(pe.style.position="fixed",pe.style.top="0",ge.style.padding="30px 124px 30px 30px",_e.style.transform="translate(".concat(3.15*-(we-2800),"px, 0)")),we<=1850&&(_e.style.transform="translate(0, 0)"),(we<=1850||we>=7450)&&(pe.style.position="inherit",ge.style.padding="30px 104px 30px 30px",be.style.position="inherit"),we>1900&&we<2830&&(Le.style.opacity="0.1"),(we<=1900||we>=2830)&&(Le.style.opacity="1"))}))}();
//# sourceMappingURL=index.4043f317.js.map

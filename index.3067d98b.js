!function(){function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},c=n.parcelRequire483d;function a(){return{navLinks:document.querySelectorAll(".navigation__link"),sections:document.querySelectorAll("section[id]"),menuBtnRef:document.querySelector(".js-mobile-menu-button"),mobileMenuRef:document.querySelector(".js-mobile-menu"),menuLinks:document.querySelector(".js-mobile-menu-links"),slider:document.querySelector(".slider"),slides:document.querySelector(".slides"),slidesBox:document.querySelectorAll(".slides-box"),prevBtn:document.querySelector(".prev-btn"),nextBtn:document.querySelector(".next-btn"),testimonialsWrap:document.querySelector(".testimonials-clients-wrap"),elements:document.querySelectorAll("#sentinel")}}null==c&&((c=function(e){if(e in o)return o[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){i[e]=t},n.parcelRequire483d=c),c.register("iE7OH",(function(t,n){var o,i;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var c={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},i=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),c.register("aNJCr",(function(t,n){var o;e(t.exports,"getBundleURL",(function(){return o}),(function(e){return o=e}));var i={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),i[e]=t),t}})),c("iE7OH").register(JSON.parse('{"EVgbq":"index.3067d98b.js","ee16w":"sprite.44f8be9a.svg","g8JVe":"client_1.843964b9.jpg","85s7C":"client_2.442e8319.jpg","7Q123":"client_3.e50c92ae.jpg"}'));var s=0,r=0,l=null,d="header-show",u="header-hide";function m(){(r=window.pageYOffset)<s?l.classList.contains(u)&&(l.classList.remove(u),l.classList.add(d)):r>s&&(!l.classList.contains(d)&&l.classList.contains(u)||(l.classList.remove(d),l.classList.add(u))),s=r}window.onload=function(){l=document.getElementById("header"),document.addEventListener("scroll",m,!1)};var f=a();window.addEventListener("scroll",(function(){var e=window.pageYOffset;f.sections.forEach((function(t){var n=t.offsetHeight,o=t.offsetTop-50;sectionId=t.getAttribute("id"),e>o&&e<=o+n?document.querySelector(".navigation__link[href*="+sectionId+"]").classList.add("active"):document.querySelector(".navigation__link[href*="+sectionId+"]").classList.remove("active")}))}));var p,v=a();p=function(){var e="true"===v.menuBtnRef.getAttribute("aria-expanded")||!1;v.menuBtnRef.classList.toggle("is-open"),v.menuBtnRef.setAttribute("aria-expanded",!e),v.mobileMenuRef.classList.toggle("is-open"),document.querySelector("body").style.overflow=e?"unset":"hidden"},v.menuBtnRef.addEventListener("click",p),v.menuLinks.addEventListener("click",p);var y=a();var g=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&e.target.classList.add("fixed")}))}),{threshold:[.1]}),h=!0,b=!1,_=void 0;try{for(var w,I=y.elements[Symbol.iterator]();!(h=(w=I.next()).done);h=!0){var E=w.value;g.observe(E)}}catch(ue){b=!0,_=ue}finally{try{h||null==I.return||I.return()}finally{if(b)throw _}}var L={};Object.defineProperty(L,"__esModule",{value:!0});var S={},B={};Object.defineProperty(B,"__esModule",{value:!0}),B.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e},Object.defineProperty(S,"__esModule",{value:!0});var q="function"==typeof Symbol&&"symbol"===t(B)(Symbol.iterator)?function(e){return void 0===e?"undefined":t(B)(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(B)(e)},A={};Object.defineProperty(A,"__esModule",{value:!0});var O=A.easeFunctions={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},x=A.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};A.setPosition=function(e,t,n,o){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"easeInOutCubic";return n>o?t:e+(t-e)*O[i](n/o)},A.calcEndPoint=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(x(e))return parseInt(e)+n;var o=t===window||t===document.documentElement?window.pageYOffset:t.scrollTop-t.getBoundingClientRect().top,i="html"===e.nodeName.toLowerCase()?-o:e.getBoundingClientRect().top+o;return i+n};S.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,o=void 0===n?500:n,i=t.context,c=void 0===i?window:i,a=t.offset,s=void 0===a?0:a,r=t.ease,l=void 0===r?"easeInOutCubic":r,d=t.callback;if("object"===("undefined"==typeof window?"undefined":q(window))){var u=null!==c.scrollTop&&void 0!==c.scrollTop?c.scrollTop:window.pageYOffset,m=(0,A.calcEndPoint)(e,c,s),f=performance.now(),p=window.requestAnimationFrame,v=function t(){var n=performance.now()-f,i=(0,A.setPosition)(u,m,n,o,l);c!==window?c.scrollTop=i:window.scroll(0,i),n>o?"function"==typeof d&&d(e):p(t)};v()}};var k=V(S=S.default),C={};Object.defineProperty(C,"__esModule",{value:!0});var R,T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},H=(R=S)&&R.__esModule?R:{default:R};C.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,n=void 0===t?'[href^="#"]:not([href="#"]':t,o=e.match,i=void 0===o?function(e){return document.getElementById(e.hash.substring(1))}:o,c=e.hashChange,a=void 0===c||c,s=e.scrollSmoothConfig,r=document.querySelectorAll(n),l=function(e){e.preventDefault();var t=i(e.target);t&&(a&&history.replaceState(null,null,"#"+t.id),(0,H.default)(t,T({},s)))};Array.from(r).map((function(e){e.addEventListener("click",l,!1)}))};var M=V(C=C.default),N={};function j(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(N,"__esModule",{value:!0}),N.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.activeClass,n=void 0===t?"active":t,o=e.query,i=void 0===o?'[href^="#"]:not([href="#"]):not([href="#0"])':o,c=e.threshold,a=void 0===c?[.25,.5,.75]:c,s=e.detectType,r=void 0===s?"max":s,l={threshold:a},d=function(e){return e.classList.remove(n)},u=function(e){return e.classList.add(n)},m=function(){document.querySelectorAll("."+n).forEach(d)},f=function(e){m(),u(document.querySelector('a[href="#'+e.id+'"]'))},p=function(e){e.forEach((function(e){e.intersectionRatio>=Math[r].apply(Math,j(a))&&f(e.target)}))},v=document.querySelectorAll(i),y=new IntersectionObserver(p,l),g=function(e){var t=document.querySelector("#"+e.hash.slice(1));y.observe(t)};v.forEach(g)};var P=V(N=N.default);function V(e){return e&&e.__esModule?e:{default:e}}L.default={to:k.default,calcEndPoint:A.calcEndPoint,anchorScroll:M.default,observe:P.default},L=L.default;document.querySelector(".btn-up");var Q=a(),F=0;function J(){var e=Q.slidesBox[F].offsetLeft-Q.slider.offsetLeft;Q.slides.scrollTo({left:e,behavior:"smooth"})}Q.prevBtn.addEventListener("click",(function(){--F<0&&(F=Q.slidesBox.length-1),J()})),Q.nextBtn.addEventListener("click",(function(){++F>=Q.slidesBox.length&&(F=0),J()}));var Y=document.querySelectorAll(".btn1"),z=document.querySelectorAll(".btn2"),D=document.querySelectorAll(".faq__list-item-discr"),U=document.querySelectorAll(".btn-desk1"),W=document.querySelectorAll(".btn-desk2");z.forEach((function(e){return e.classList.add("is-hidden")})),W.forEach((function(e){return e.classList.add("is-hidden")})),U.forEach((function(e,t){e.addEventListener("click",(function(){D[t].classList.add("show"),e.classList.add("is-hidden"),W[t].classList.remove("is-hidden"),W[t].classList.add("active")}))})),W.forEach((function(e,t){e.addEventListener("click",(function(){D[t].classList.remove("show"),U[t].classList.remove("is-hidden"),e.classList.add("is-hidden"),W[t].classList.remove("active")}))})),Y.forEach((function(e,t){e.addEventListener("click",(function(){D[t].classList.add("show"),e.classList.add("is-hidden"),z[t].classList.remove("is-hidden"),z[t].classList.add("active")}))})),z.forEach((function(e,t){e.addEventListener("click",(function(){D[t].classList.remove("show"),Y[t].classList.remove("is-hidden"),e.classList.add("is-hidden"),z[t].classList.remove("active")}))}));var G;G=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("ee16w");var $;$=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("g8JVe");var K;K=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("85s7C");var X;X=c("aNJCr").getBundleURL("EVgbq")+c("iE7OH").resolve("7Q123");var Z,ee,te=[{clientId:1,clientImg:t($),clientRewie:"/src/mp3/Voicy_Allahu_Akbar_BANG.mp3",clientName:"Tatyana",clientCompany:"ARMOR LLC",clientTitle:"Tatiana's review",dataAos:"zoom-out",offset:"0",delay:"300",easing:"ease-in-sine",time:"0:10",anchor:"anchor_1",duration:"2000"},{clientId:2,clientImg:t(K),clientRewie:"Voicy_And we say bye bye.mp3",clientName:"Ivan",clientCompany:"Ukraine LTD",clientTitle:"Ivan's review",dataAos:"zoom-out",offset:"0",delay:"500",easing:"ease-out-cubic",time:"0:07",anchor:"anchor_2",duration:"2000"},{clientId:3,clientImg:t(X),clientRewie:"/src/mp3/Voicy_Do not walk away from your queen.mp3",clientName:"Sonya",clientCompany:"Bayractar System LLC",clientTitle:"Sonya's review",dataAos:"zoom-in",offset:"0",delay:"1500",easing:"ease-in-sine",time:"0:06",anchor:".cases-client-container_2",duration:"2000"},{clientId:4,clientImg:t($),clientRewie:"/src/mp3/Voicy_Kanye West Hated.mp3",clientName:"Sara",clientCompany:"Homekeeper",clientTitle:"Sara's review",dataAos:"zoom-out",offset:"0",delay:"2500",easing:"ease-in-back",time:"0:05",anchor:".cases-client-container_2",duration:"2000"},{clientId:5,clientImg:t(K),clientRewie:"/src/mp3/Voicy_Nothing is impossible!.mp3",clientName:"Jon",clientCompany:"Green Yard LCC",clientTitle:"Jon's review",dataAos:"zoom-out",offset:"0",delay:"5000",easing:"ease-in-back",time:"0:05",anchor:".cases-client-container_3",duration:"2000"},{clientId:6,clientImg:t(X),clientRewie:"/src/mp3/Voicy_WHAT ARE YOU DOING IN MY SWAMP.mp3",clientName:"Inga",clientCompany:"Rozetka LTD",clientTitle:"Inga's review",dataAos:"zoom-out",offset:"0",delay:"6000",easing:"ease-in-back",time:"0:07",anchor:".cases-client-container_3",duration:"2000"}];Z=document.querySelector(".testimonials-listOfClients"),ee="",te.map((function(e){ee+='\n      <li id="anchor_'.concat(e.clientId,'"\n        class="cases-client-container cases-client-container_').concat(e.clientId,'"\n        data-aos=').concat(e.dataAos,"\n        data-aos-offset=").concat(e.offset,"\n        data-aos-delay=").concat(e.delay,"\n        data-aos-easing=").concat(e.easing,"\n        data-aos-anchor=").concat(e.anchor,"\n        data-aos-duration=").concat(e.duration,'\n      >\n        <div class="cases-client--box">\n          <div class="cases-client-wrap">\n            <img\n              class="cases-client-img"\n              src=').concat(e.clientImg,'\n              alt="client number ').concat(e.clientId,'"\n            />\n            <div class="cases-client-data">\n              <p>').concat(e.clientName,"</p>\n              <p>").concat(e.clientCompany,'</p>\n            </div>\n          </div>\n          <div class="wrapper">\n            <div\n              class="music-container home__player player"\n              id="music-container').concat(e.clientId,'"\n            >\n              <div class="testimonials-navigation player__road">\n                <div style="display: flex; flex-wrap: nowrap;">\n                  <button\n                    type="button"\n                    id="play').concat(e.clientId,'"\n                    data-play=').concat(e.clientId,'\n                    class="action-btn action-btn-big player__btn play--btn"\n                  >\n                  <svg\n                  class="player__icon fa-pause"\n                  width="12"\n                  height="12"\n                >\n                <use href="').concat(t(G),'#play"></use>\n                  </button>\n                  <button\n                    type="button"\n                    id="pause').concat(e.clientId,'"\n                    data-pause=').concat(e.clientId,'\n                    class="action-btn action-btn-big is-hide player__btn pause--btn"\n                  >\n                    <svg\n                      class="player__icon fa-pause"\n                      width="12"\n                      height="12"\n                    >\n                      <use href="').concat(t(G),'#pause"></use>\n                    </svg>\n                  </button>\n                  <p class="player__name">').concat(e.clientTitle,'</p>\n                </div>\n                <div style="display: flex; flex-wrap: nowrap; gap: 4px; width:50px">\n                  <div class="music-info">\n                    <div\n                      class="progress-container progress-range').concat(e.clientId,'\n                      id="progress-container_').concat(e.clientId,'\n                    >\n                      <div\n                        class="progress progress-bar_').concat(e.clientId,'"\n                        id="progress1_').concat(e.clientId,'"\n                      ></div>\n                      <div\n                        class="progress progress-bar_').concat(e.clientId,'"\n                        id="progress2_').concat(e.clientId,'"\n                      ></div>\n                      <div\n                        class="progress progress-bar_').concat(e.clientId,'"\n                        id="progress3_').concat(e.clientId,'"\n                      ></div>\n                      <div\n                        class="progress progress-bar_').concat(e.clientId,'"\n                        id="progress4_').concat(e.clientId,'"\n                      ></div>\n                      <div\n                        class="progress progress-bar_').concat(e.clientId,'"\n                        id="progress5_').concat(e.clientId,'"\n                      ></div>\n                    </div>\n                  </div>\n                  <div class="time">\n                    <span class="time-elapsed_').concat(e.clientId,'">\n                      ').concat(e.time,'\n                    </span>\n                  </div>\n                </div>\n              </div>\n              <div class="testimonials-subtitlesBtn">\n                <button\n                  type="button"\n                  title="swithSubtitle"\n                  class="switchSubtitleBtn switchSubtitleBtn_').concat(e.clientId,' player__text"\n                  data-count="switchSubtitleBtn_').concat(e.clientId,'"\n                >\n                  <svg class="player__icon" width="10" height="10">\n                    <use href="').concat(t(G),'#arrow-right2"></use>\n                  </svg>\n                  A\n                </button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="subtitle-container">\n          <div\n            class="testimonials-subtitles testimonials-subtitles_').concat(e.clientId,'"\n          >\n            <p>\n              Lorem ipsum dolor sit amet consectetur, adipisicing elit.\n              Dignissimos eaque ut autem ad unde. Repellat delectus, sed quo,\n              accusantium ad recusandae inventore illum fuga est, provident\n              obcaecati molestiae fugit et.\n            </p>\n          </div>\n        </div>\n      </li>\n  ')})),Z.innerHTML=ee;var ne=document.querySelectorAll(".play--btn"),oe=document.querySelectorAll(".pause--btn"),ie="";function ce(e){var t=e.currentTarget.dataset.play;document.querySelector(".audio_player".concat(t)).classList.add("play"),document.getElementById("play".concat(t)).classList.add("is-hide"),document.getElementById("pause".concat(t)).classList.remove("is-hide"),document.getElementById("progress1_".concat(t)).style.opacity="1",document.getElementById("progress2_".concat(t)).style.opacity="1",document.getElementById("progress3_".concat(t)).style.opacity="1",document.getElementById("progress4_".concat(t)).style.opacity="1",document.getElementById("progress5_".concat(t)).style.opacity="1",document.getElementById("audio_".concat(t)).play(),document.getElementById("audio_".concat(t)).addEventListener("timeupdate",se),ie=setInterval((function(){return e=t,document.getElementById("progress1_".concat(e)).style.height="".concat(12*Math.random(),"px"),document.getElementById("progress2_".concat(e)).style.height="".concat(12*Math.random(),"px"),document.getElementById("progress3_".concat(e)).style.height="".concat(12*Math.random(),"px"),document.getElementById("progress4_".concat(e)).style.height="".concat(12*Math.random(),"px"),void(document.getElementById("progress5_".concat(e)).style.height="".concat(12*Math.random(),"px"));var e}),150)}function ae(e){var t=e.currentTarget.dataset.pause;document.querySelector(".audio_player".concat(t)).classList.remove("play"),document.getElementById("play".concat(t)).classList.remove("is-hide"),document.getElementById("pause".concat(t)).classList.add("is-hide"),document.getElementById("progress1_".concat(t)).style.opacity="0.5",document.getElementById("progress2_".concat(t)).style.opacity="0.5",document.getElementById("progress3_".concat(t)).style.opacity="0.5",document.getElementById("progress4_".concat(t)).style.opacity="0.5",document.getElementById("progress5_".concat(t)).style.opacity="0.5",document.getElementById("audio_".concat(t)).pause(),clearInterval(ie)}function se(e){var t,n,o;document.querySelector(".time-elapsed_".concat(e.currentTarget.id.slice(-1))).textContent="".concat((t=document.getElementById("audio_".concat(e.currentTarget.id.slice(-1))).currentTime,n=Math.floor(t/60),o=(o=Math.floor(t%60))>9?o:"0".concat(o),"".concat(n,":").concat(o)))}ne.forEach((function(e){return e.addEventListener("click",(function(e){document.querySelector(".audio_player".concat(e.currentTarget.dataset.play)).classList.contains("play")?ae(e):ce(e)}))})),oe.forEach((function(e){return e.addEventListener("click",(function(e){document.querySelector(".audio_player".concat(e.currentTarget.dataset.pause)).classList.contains("play")?ae(e):ce(e)}))})),document.querySelectorAll(".switchSubtitleBtn").forEach((function(e){return e.addEventListener("click",(function(e){return function(e){e.preventDefault();var t="";switch(e.currentTarget.dataset.count){case"switchSubtitleBtn_1":t=document.querySelector(".testimonials-subtitles_1");break;case"switchSubtitleBtn_2":t=document.querySelector(".testimonials-subtitles_2");break;case"switchSubtitleBtn_3":t=document.querySelector(".testimonials-subtitles_3");break;case"switchSubtitleBtn_4":t=document.querySelector(".testimonials-subtitles_4");break;case"switchSubtitleBtn_5":t=document.querySelector(".testimonials-subtitles_5");break;case"switchSubtitleBtn_6":t=document.querySelector(".testimonials-subtitles_6")}t.classList.contains("is-opacity")?t.classList.remove("is-opacity"):t.classList.add("is-opacity")}(e)}))}));var re=document.querySelectorAll("._anim-items"),le=document.querySelector(".testimonials-listOfClients");if(re.length>0){function de(){for(var e=0;e<re.length;e++){var t=re[e],n=t.offsetHeight,o=(c=le,a=void 0,s=void 0,r=void 0,a=c.getBoundingClientRect(),s=window.scrollX||document.documentElement.scrollLeft,r=window.scrollY||document.documentElement.scrollTop,{top:a.top+r,left:a.left+s}).top,i="";n>window.innerHeight&&(i=window.innerHeight-window.innerHeight/4),scrollY>o-i&&scrollY<o+n?t.classList.add("_active"):t.classList.remove("_active")}var c,a,s,r}window.addEventListener("scroll",de)}setTimeout((function(){de()}),300)}();
//# sourceMappingURL=index.3067d98b.js.map

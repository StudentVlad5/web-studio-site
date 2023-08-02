!function(){function e(e){return e&&e.__esModule?e.default:e}function t(){return{menuBtnRef:document.querySelector(".js-mobile-menu-button"),mobileMenuRef:document.querySelector(".js-mobile-menu"),menuLinks:document.querySelector(".js-mobile-menu-links"),slider:document.querySelector(".slider"),slides:document.querySelector(".slides"),slidesBox:document.querySelectorAll(".slides-box"),prevBtn:document.querySelector(".prev-btn"),nextBtn:document.querySelector(".next-btn"),testimonialsWrap:document.querySelector(".testimonials-clients-wrap")}}var n=0,o=0,r=null,c="header-show",i="header-hide";function s(){(o=window.pageYOffset)<n?r.classList.contains(i)&&(r.classList.remove(i),r.classList.add(c)):o>n&&(!r.classList.contains(c)&&r.classList.contains(i)||(r.classList.remove(c),r.classList.add(i))),n=o}window.onload=function(){r=document.getElementById("header"),document.addEventListener("scroll",s,!1)};var a,u=t();a=function(){var e="true"===u.menuBtnRef.getAttribute("aria-expanded")||!1;u.menuBtnRef.classList.toggle("is-open"),u.menuBtnRef.setAttribute("aria-expanded",!e),u.mobileMenuRef.classList.toggle("is-open"),document.querySelector("body").style.overflow=e?"unset":"hidden"},u.menuBtnRef.addEventListener("click",a),u.menuLinks.addEventListener("click",a);var d={};Object.defineProperty(d,"__esModule",{value:!0});var l={},m={};Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e},Object.defineProperty(l,"__esModule",{value:!0});var f="function"==typeof Symbol&&"symbol"===e(m)(Symbol.iterator)?function(t){return void 0===t?"undefined":e(m)(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":e(m)(t)},v={};Object.defineProperty(v,"__esModule",{value:!0});var y=v.easeFunctions={linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}},h=v.isNumeric=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};v.setPosition=function(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"easeInOutCubic";return n>o?t:e+(t-e)*y[r](n/o)},v.calcEndPoint=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(h(e))return parseInt(e)+n;var o=t===window||t===document.documentElement?window.pageYOffset:t.scrollTop-t.getBoundingClientRect().top,r="html"===e.nodeName.toLowerCase()?-o:e.getBoundingClientRect().top+o;return r+n};l.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.duration,o=void 0===n?500:n,r=t.context,c=void 0===r?window:r,i=t.offset,s=void 0===i?0:i,a=t.ease,u=void 0===a?"easeInOutCubic":a,d=t.callback;if("object"===("undefined"==typeof window?"undefined":f(window))){var l=null!==c.scrollTop&&void 0!==c.scrollTop?c.scrollTop:window.pageYOffset,m=(0,v.calcEndPoint)(e,c,s),y=performance.now(),h=window.requestAnimationFrame,p=function t(){var n=performance.now()-y,r=(0,v.setPosition)(l,m,n,o,u);c!==window?c.scrollTop=r:window.scroll(0,r),n>o?"function"==typeof d&&d(e):h(t)};p()}};var p=w(l=l.default),g={};Object.defineProperty(g,"__esModule",{value:!0});var L,E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},_=(L=l)&&L.__esModule?L:{default:L};g.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.query,n=void 0===t?'[href^="#"]:not([href="#"]':t,o=e.match,r=void 0===o?function(e){return document.getElementById(e.hash.substring(1))}:o,c=e.hashChange,i=void 0===c||c,s=e.scrollSmoothConfig,a=document.querySelectorAll(n),u=function(e){e.preventDefault();var t=r(e.target);t&&(i&&history.replaceState(null,null,"#"+t.id),(0,_.default)(t,E({},s)))};Array.from(a).map((function(e){e.addEventListener("click",u,!1)}))};var S=w(g=g.default),I={};function B(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(I,"__esModule",{value:!0}),I.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.activeClass,n=void 0===t?"active":t,o=e.query,r=void 0===o?'[href^="#"]:not([href="#"]):not([href="#0"])':o,c=e.threshold,i=void 0===c?[.25,.5,.75]:c,s=e.detectType,a=void 0===s?"max":s,u={threshold:i},d=function(e){return e.classList.remove(n)},l=function(e){return e.classList.add(n)},m=function(){document.querySelectorAll("."+n).forEach(d)},f=function(e){m(),l(document.querySelector('a[href="#'+e.id+'"]'))},v=function(e){e.forEach((function(e){e.intersectionRatio>=Math[a].apply(Math,B(i))&&f(e.target)}))},y=document.querySelectorAll(r),h=new IntersectionObserver(v,u),p=function(e){var t=document.querySelector("#"+e.hash.slice(1));h.observe(t)};y.forEach(p)};var q=w(I=I.default);function w(e){return e&&e.__esModule?e:{default:e}}d.default={to:p.default,calcEndPoint:v.calcEndPoint,anchorScroll:S.default,observe:q.default},d=d.default;document.querySelector(".btn-up");var b=t(),M=0;function k(){var e=b.slidesBox[M].offsetLeft-b.slider.offsetLeft;b.slides.scrollTo({left:e,behavior:"smooth"})}b.prevBtn.addEventListener("click",(function(){--M<0&&(M=b.slidesBox.length-1),k()})),b.nextBtn.addEventListener("click",(function(){++M>=b.slidesBox.length&&(M=0),k()})),b.slider.addEventListener("wheel",(function(e){e.preventDefault(),e.deltaY<0?--M<0&&(M=b.slidesBox.length-1):++M>=b.slidesBox.length&&(M=0),k()}));var x=document.getElementById("music-container1"),T=x.querySelector(".audio_player1"),O=document.querySelector(".progress-range1"),A=document.querySelector(".progress-bar_1"),P=document.querySelector(".time-elapsed_1"),C=document.getElementById("audio_1"),W=document.getElementById("play1"),X=document.getElementById("pause1"),j=x.querySelectorAll(".player_slider_1"),R=(document.querySelector(".player_slider_1"),x.querySelector('input[name="volume"]'),document.getElementById("progress1_1")),Q=document.getElementById("progress2_1"),D=document.getElementById("progress3_1"),Y=document.getElementById("progress4_1"),U=document.getElementById("progress5_1"),F="";function H(){x.classList.add("play"),W.classList.add("is-hide"),X.classList.remove("is-hide"),R.style.opacity="1",Q.style.opacity="1",D.style.opacity="1",Y.style.opacity="1",U.style.opacity="1",C.play(),F=setInterval((function(){return R.style.height="".concat(12*Math.random(),"px"),Q.style.height="".concat(12*Math.random(),"px"),D.style.height="".concat(12*Math.random(),"px"),Y.style.height="".concat(12*Math.random(),"px"),void(U.style.height="".concat(12*Math.random(),"px"))}),150)}function N(){x.classList.remove("play"),W.classList.remove("is-hide"),X.classList.add("is-hide"),R.style.opacity="0.5",Q.style.opacity="0.5",D.style.opacity="0.5",Y.style.opacity="0.5",U.style.opacity="0.5",C.pause(),clearInterval(F)}function z(e){var t=e.offsetX/O.offsetWidth*T.duration;T.currentTime=t}function G(){T[this.name]=this.value}W.addEventListener("click",(function(){x.classList.contains("play")?N():H()})),X.addEventListener("click",(function(){x.classList.contains("play")?N():H()})),C.addEventListener("timeupdate",(function(){var e,t,n;A.style.width="".concat(T.currentTime/T.duration*100,"%"),P.textContent="".concat((e=T.currentTime,t=Math.floor(e/60),n=(n=Math.floor(e%60))>9?n:"0".concat(n),"".concat(t,":").concat(n)))})),O.addEventListener("click",(function(e){var t=e.offsetX/O.offsetWidth;A.style.width="".concat(100*t,"%"),T.currentTime=t*T.duration})),j.forEach((function(e){return e.addEventListener("change",G)})),j.forEach((function(e){return e.addEventListener("mousemove",G)}));var J=!1;O.addEventListener("click",z),O.addEventListener("mousemove",(function(e){return J&&z(e)})),O.addEventListener("mousedown",(function(){return J=!0})),O.addEventListener("mouseup",(function(){return J=!1}));var K=document.getElementById("music-container2"),V=K.querySelector(".audio_player2"),Z=document.querySelector(".progress-range2"),$=document.querySelector(".progress-bar_2"),ee=document.querySelector(".time-elapsed_2"),te=document.getElementById("audio_2"),ne=document.getElementById("play2"),oe=document.getElementById("pause2"),re=document.getElementById("speaker_icon2"),ce=document.querySelector(".range-container_2"),ie=document.querySelector(".soundUp_2"),se=document.querySelector(".volumeMute_2"),ae=K.querySelectorAll(".player_slider_2"),ue=document.querySelector(".player_slider_2"),de=K.querySelector('input[name="volume"]'),le=document.getElementById("progress1_2"),me=document.getElementById("progress2_2"),fe=document.getElementById("progress3_2"),ve=document.getElementById("progress4_2"),ye=document.getElementById("progress5_2"),he="";function pe(){K.classList.add("play"),ne.classList.add("is-hide"),oe.classList.remove("is-hide"),te.play(),he=setInterval((function(){return le.style.height="".concat(12*Math.random(),"px"),me.style.height="".concat(12*Math.random(),"px"),fe.style.height="".concat(12*Math.random(),"px"),ve.style.height="".concat(12*Math.random(),"px"),void(ye.style.height="".concat(12*Math.random(),"px"))}),150)}function ge(){K.classList.remove("play"),ne.classList.remove("is-hide"),oe.classList.add("is-hide"),te.pause(),clearInterval(he)}function Le(e){var t=e.offsetX/Z.offsetWidth*V.duration;V.currentTime=t}function Ee(){V[this.name]=this.value}ne.addEventListener("click",(function(){K.classList.contains("play")?ge():pe()})),oe.addEventListener("click",(function(){K.classList.contains("play")?ge():pe()})),re.addEventListener("click",(function(e){return function(e){e.stopPropagation(),e.preventDefault(),ce.classList.contains("is-hide")?ce.classList.remove("is-hide"):ce.classList.add("is-hide")}(e)})),te.addEventListener("timeupdate",(function(){var e,t,n;$.style.width="".concat(V.currentTime/V.duration*100,"%"),ee.textContent="".concat((e=V.currentTime,t=Math.floor(e/60),n=(n=Math.floor(e%60))>9?n:"0".concat(n),"".concat(t,":").concat(n)))})),Z.addEventListener("click",(function(e){var t=e.offsetX/Z.offsetWidth;$.style.width="".concat(100*t,"%"),V.currentTime=t*V.duration})),ae.forEach((function(e){return e.addEventListener("change",Ee)})),ae.forEach((function(e){return e.addEventListener("mousemove",Ee)})),ie.addEventListener("click",(function(){V.volume=1,de.value=1,ue.value=1})),se.addEventListener("click",(function(){V.volume=0,de.value=0,ue.value=0}));var _e=!1;Z.addEventListener("click",Le),Z.addEventListener("mousemove",(function(e){return _e&&Le(e)})),Z.addEventListener("mousedown",(function(){return _e=!0})),Z.addEventListener("mouseup",(function(){return _e=!1}));var Se=document.getElementById("music-container3"),Ie=Se.querySelector(".audio_player3"),Be=document.querySelector(".progress-range3"),qe=document.querySelector(".progress-bar_3"),we=document.querySelector(".time-elapsed_3"),be=document.getElementById("audio_3"),Me=document.getElementById("play3"),ke=document.getElementById("pause3"),xe=document.getElementById("speaker_icon3"),Te=document.querySelector(".range-container_3"),Oe=document.querySelector(".soundUp_3"),Ae=document.querySelector(".volumeMute_3"),Pe=Se.querySelectorAll(".player_slider_3"),Ce=document.querySelector(".player_slider_3"),We=Se.querySelector('input[name="volume"]'),Xe=document.getElementById("progress1_3"),je=document.getElementById("progress2_3"),Re=document.getElementById("progress3_3"),Qe=document.getElementById("progress4_3"),De=document.getElementById("progress5_3"),Ye="";function Ue(){Se.classList.add("play"),Me.classList.add("is-hide"),ke.classList.remove("is-hide"),be.play(),Ye=setInterval((function(){return Xe.style.height="".concat(12*Math.random(),"px"),je.style.height="".concat(12*Math.random(),"px"),Re.style.height="".concat(12*Math.random(),"px"),Qe.style.height="".concat(12*Math.random(),"px"),void(De.style.height="".concat(12*Math.random(),"px"))}),150)}function Fe(){Se.classList.remove("play"),Me.classList.remove("is-hide"),ke.classList.add("is-hide"),be.pause(),clearInterval(Ye)}function He(e){var t=e.offsetX/Be.offsetWidth*Ie.duration;Ie.currentTime=t}function Ne(){Ie[this.name]=this.value}Me.addEventListener("click",(function(){Se.classList.contains("play")?Fe():Ue()})),ke.addEventListener("click",(function(){Se.classList.contains("play")?Fe():Ue()})),xe.addEventListener("click",(function(e){return function(e){e.stopPropagation(),e.preventDefault(),Te.classList.contains("is-hide")?Te.classList.remove("is-hide"):Te.classList.add("is-hide")}(e)})),be.addEventListener("timeupdate",(function(){var e,t,n;qe.style.width="".concat(Ie.currentTime/Ie.duration*100,"%"),we.textContent="".concat((e=Ie.currentTime,t=Math.floor(e/60),n=(n=Math.floor(e%60))>9?n:"0".concat(n),"".concat(t,":").concat(n)))})),Be.addEventListener("click",(function(e){var t=e.offsetX/Be.offsetWidth;qe.style.width="".concat(100*t,"%"),Ie.currentTime=t*Ie.duration})),Pe.forEach((function(e){return e.addEventListener("change",Ne)})),Pe.forEach((function(e){return e.addEventListener("mousemove",Ne)})),Oe.addEventListener("click",(function(){Ie.volume=1,We.value=1,Ce.value=1})),Ae.addEventListener("click",(function(){Ie.volume=0,We.value=0,Ce.value=0}));var ze=!1;Be.addEventListener("click",He),Be.addEventListener("mousemove",(function(e){return ze&&He(e)})),Be.addEventListener("mousedown",(function(){return ze=!0})),Be.addEventListener("mouseup",(function(){return ze=!1}));var Ge=document.getElementById("music-container4"),Je=Ge.querySelector(".audio_player4"),Ke=document.querySelector(".progress-range4"),Ve=document.querySelector(".progress-bar_4"),Ze=document.querySelector(".time-elapsed_4"),$e=document.getElementById("audio_4"),et=document.getElementById("play4"),tt=document.getElementById("pause4"),nt=document.getElementById("speaker_icon4"),ot=document.querySelector(".range-container_4"),rt=document.querySelector(".soundUp_4"),ct=document.querySelector(".volumeMute_4"),it=Ge.querySelectorAll(".player_slider_4"),st=document.querySelector(".player_slider_4"),at=Ge.querySelector('input[name="volume"]'),ut=document.getElementById("progress1_4"),dt=document.getElementById("progress2_4"),lt=document.getElementById("progress3_4"),mt=document.getElementById("progress4_4"),ft=document.getElementById("progress5_4"),vt="";function yt(){Ge.classList.add("play"),et.classList.add("is-hide"),tt.classList.remove("is-hide"),$e.play(),vt=setInterval((function(){return ut.style.height="".concat(12*Math.random(),"px"),dt.style.height="".concat(12*Math.random(),"px"),lt.style.height="".concat(12*Math.random(),"px"),mt.style.height="".concat(12*Math.random(),"px"),void(ft.style.height="".concat(12*Math.random(),"px"))}),150)}function ht(){Ge.classList.remove("play"),et.classList.remove("is-hide"),tt.classList.add("is-hide"),$e.pause(),clearInterval(vt)}function pt(e){var t=e.offsetX/Ke.offsetWidth*Je.duration;Je.currentTime=t}function gt(){Je[this.name]=this.value}et.addEventListener("click",(function(){Ge.classList.contains("play")?ht():yt()})),tt.addEventListener("click",(function(){Ge.classList.contains("play")?ht():yt()})),nt.addEventListener("click",(function(e){return function(e){e.stopPropagation(),e.preventDefault(),ot.classList.contains("is-hide")?ot.classList.remove("is-hide"):ot.classList.add("is-hide")}(e)})),$e.addEventListener("timeupdate",(function(){var e,t,n;Ve.style.width="".concat(Je.currentTime/Je.duration*100,"%"),Ze.textContent="".concat((e=Je.currentTime,t=Math.floor(e/60),n=(n=Math.floor(e%60))>9?n:"0".concat(n),"".concat(t,":").concat(n)))})),Ke.addEventListener("click",(function(e){var t=e.offsetX/Ke.offsetWidth;Ve.style.width="".concat(100*t,"%"),Je.currentTime=t*Je.duration})),it.forEach((function(e){return e.addEventListener("change",gt)})),it.forEach((function(e){return e.addEventListener("mousemove",gt)})),rt.addEventListener("click",(function(){Je.volume=1,at.value=1,st.value=1})),ct.addEventListener("click",(function(){Je.volume=0,at.value=0,st.value=0}));var Lt=!1;Ke.addEventListener("click",pt),Ke.addEventListener("mousemove",(function(e){return Lt&&pt(e)})),Ke.addEventListener("mousedown",(function(){return Lt=!0})),Ke.addEventListener("mouseup",(function(){return Lt=!1}));var Et=document.getElementById("music-container5"),_t=Et.querySelector(".audio_player5"),St=document.querySelector(".progress-range5"),It=document.querySelector(".progress-bar_5"),Bt=document.querySelector(".time-elapsed_5"),qt=document.getElementById("audio_5"),wt=document.getElementById("play5"),bt=document.getElementById("pause5"),Mt=document.getElementById("speaker_icon5"),kt=document.querySelector(".range-container_5"),xt=document.querySelector(".soundUp_5"),Tt=document.querySelector(".volumeMute_5"),Ot=Et.querySelectorAll(".player_slider_5"),At=document.querySelector(".player_slider_5"),Pt=Et.querySelector('input[name="volume"]'),Ct=document.getElementById("progress1_5"),Wt=document.getElementById("progress2_5"),Xt=document.getElementById("progress3_5"),jt=document.getElementById("progress4_5"),Rt=document.getElementById("progress5_5"),Qt="";function Dt(){Et.classList.add("play"),wt.classList.add("is-hide"),bt.classList.remove("is-hide"),qt.play(),Qt=setInterval((function(){return Ct.style.height="".concat(12*Math.random(),"px"),Wt.style.height="".concat(12*Math.random(),"px"),Xt.style.height="".concat(12*Math.random(),"px"),jt.style.height="".concat(12*Math.random(),"px"),void(Rt.style.height="".concat(12*Math.random(),"px"))}),150)}function Yt(){Et.classList.remove("play"),wt.classList.remove("is-hide"),bt.classList.add("is-hide"),qt.pause(),clearInterval(Qt)}function Ut(e){var t=e.offsetX/St.offsetWidth*_t.duration;_t.currentTime=t}function Ft(){_t[this.name]=this.value}wt.addEventListener("click",(function(){Et.classList.contains("play")?Yt():Dt()})),bt.addEventListener("click",(function(){Et.classList.contains("play")?Yt():Dt()})),Mt.addEventListener("click",(function(e){return function(e){e.stopPropagation(),e.preventDefault(),kt.classList.contains("is-hide")?kt.classList.remove("is-hide"):kt.classList.add("is-hide")}(e)})),qt.addEventListener("timeupdate",(function(){var e,t,n;It.style.width="".concat(_t.currentTime/_t.duration*100,"%"),Bt.textContent="".concat((e=_t.currentTime,t=Math.floor(e/60),n=(n=Math.floor(e%60))>9?n:"0".concat(n),"".concat(t,":").concat(n)))})),St.addEventListener("click",(function(e){var t=e.offsetX/St.offsetWidth;It.style.width="".concat(100*t,"%"),_t.currentTime=t*_t.duration})),Ot.forEach((function(e){return e.addEventListener("change",Ft)})),Ot.forEach((function(e){return e.addEventListener("mousemove",Ft)})),xt.addEventListener("click",(function(){_t.volume=1,Pt.value=1,At.value=1})),Tt.addEventListener("click",(function(){_t.volume=0,Pt.value=0,At.value=0}));var Ht=!1;St.addEventListener("click",Ut),St.addEventListener("mousemove",(function(e){return Ht&&Ut(e)})),St.addEventListener("mousedown",(function(){return Ht=!0})),St.addEventListener("mouseup",(function(){return Ht=!1}));var Nt=document.getElementById("music-container6"),zt=Nt.querySelector(".audio_player6"),Gt=document.querySelector(".progress-range6"),Jt=document.querySelector(".progress-bar_6"),Kt=document.querySelector(".time-elapsed_6"),Vt=document.getElementById("audio_6"),Zt=document.getElementById("play6"),$t=document.getElementById("pause6"),en=document.getElementById("speaker_icon6"),tn=document.querySelector(".range-container_6"),nn=document.querySelector(".soundUp_6"),on=document.querySelector(".volumeMute_6"),rn=Nt.querySelectorAll(".player_slider_6"),cn=document.querySelector(".player_slider_6"),sn=Nt.querySelector('input[name="volume"]'),an=document.getElementById("progress1_6"),un=document.getElementById("progress2_6"),dn=document.getElementById("progress3_6"),ln=document.getElementById("progress4_6"),mn=document.getElementById("progress5_6"),fn="";function vn(){Nt.classList.add("play"),Zt.classList.add("is-hide"),$t.classList.remove("is-hide"),Vt.play(),fn=setInterval((function(){return an.style.height="".concat(12*Math.random(),"px"),un.style.height="".concat(12*Math.random(),"px"),dn.style.height="".concat(12*Math.random(),"px"),ln.style.height="".concat(12*Math.random(),"px"),void(mn.style.height="".concat(12*Math.random(),"px"))}),150)}function yn(){Nt.classList.remove("play"),Zt.classList.remove("is-hide"),$t.classList.add("is-hide"),Vt.pause(),clearInterval(fn)}function hn(e){var t=e.offsetX/Gt.offsetWidth*zt.duration;zt.currentTime=t}function pn(){zt[this.name]=this.value}Zt.addEventListener("click",(function(){Nt.classList.contains("play")?yn():vn()})),$t.addEventListener("click",(function(){Nt.classList.contains("play")?yn():vn()})),en.addEventListener("click",(function(e){return function(e){e.stopPropagation(),e.preventDefault(),tn.classList.contains("is-hide")?tn.classList.remove("is-hide"):tn.classList.add("is-hide")}(e)})),Vt.addEventListener("timeupdate",(function(){var e,t,n;Jt.style.width="".concat(zt.currentTime/zt.duration*100,"%"),Kt.textContent="".concat((e=zt.currentTime,t=Math.floor(e/60),n=(n=Math.floor(e%60))>9?n:"0".concat(n),"".concat(t,":").concat(n)))})),Gt.addEventListener("click",(function(e){var t=e.offsetX/Gt.offsetWidth;Jt.style.width="".concat(100*t,"%"),zt.currentTime=t*zt.duration})),rn.forEach((function(e){return e.addEventListener("change",pn)})),rn.forEach((function(e){return e.addEventListener("mousemove",pn)})),nn.addEventListener("click",(function(){zt.volume=1,sn.value=1,cn.value=1})),on.addEventListener("click",(function(){zt.volume=0,sn.value=0,cn.value=0}));var gn=!1;Gt.addEventListener("click",hn),Gt.addEventListener("mousemove",(function(e){return gn&&hn(e)})),Gt.addEventListener("mousedown",(function(){return gn=!0})),Gt.addEventListener("mouseup",(function(){return gn=!1}));var Ln=document.querySelectorAll("._anim-items"),En=document.querySelector(".testimonials-listOfClients");if(Ln.length>0){function _n(){for(var e=0;e<Ln.length;e++){var t=Ln[e],n=t.offsetHeight,o=(r=En,c=void 0,i=void 0,s=void 0,c=r.getBoundingClientRect(),i=window.scrollX||document.documentElement.scrollLeft,s=window.scrollY||document.documentElement.scrollTop,{top:c.top+s,left:c.left+i}).top;n>window.innerHeight&&(animItemPoint=window.innerHeight-window.innerHeight/4),scrollY>o-animItemPoint&&scrollY<o+n?t.classList.add("_active"):t.classList.remove("_active")}var r,c,i,s}window.addEventListener("scroll",_n)}setTimeout((function(){_n()}),300),document.querySelectorAll(".switchSubtitleBtn").forEach((function(e){return e.addEventListener("click",(function(e){return function(e){e.preventDefault();var t="";switch(e.currentTarget.dataset.count){case"switchSubtitleBtn_1":t=document.querySelector(".testimonials-subtitles_1");break;case"switchSubtitleBtn_2":t=document.querySelector(".testimonials-subtitles_2");break;case"switchSubtitleBtn_3":t=document.querySelector(".testimonials-subtitles_3");break;case"switchSubtitleBtn_4":t=document.querySelector(".testimonials-subtitles_4");break;case"switchSubtitleBtn_5":t=document.querySelector(".testimonials-subtitles_5");break;case"switchSubtitleBtn_6":t=document.querySelector(".testimonials-subtitles_6")}t.classList.contains("is-opacity")?t.classList.remove("is-opacity"):t.classList.add("is-opacity")}(e)}))}))}();
//# sourceMappingURL=index.5672d165.js.map

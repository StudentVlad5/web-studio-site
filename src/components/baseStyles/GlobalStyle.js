import "modern-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Roboto', 'Poppins',
    'Manrope', 'Oswald', 'Montserrat', 'Bungee', 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  background-color: ${(props) => props.theme.white};
  }

  code {
  font-family: source-code-pro, 'Menlo', 'Monaco', 'Consolas', 'Courier New',
    monospace;
  }
  
  main {
    width: 100%;
    min-height: calc(100vh - 50px);
  }

//-----reset-----//
h1, h2, h3, h4, h5, h6, p {
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

img {
  display:block;
  max-width: 100%;
  height: auto;
}

//-----project slider-----//

/* header {
  background-color: #5c0080;
  margin-bottom: 4rem;
} */

.header-wrapper {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  padding: 1rem 0;
  color: ${(props) => props.theme.white};
}

.header-wrapper h1 {
  font-size: 2rem;
}

.image-gallery{
  width: 100%;
}

.image-gallery-wrapper {
  margin-top: 5rem;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid rgb(146, 129, 242);
  box-shadow: #2b15453d 1px 10px 10px 5px;
}

.image-gallery-thumbnail-image{
  width: 94px;
  height: 80px;
}

.image-gallery-image{
  width: 1205px;
  height: 100vh;
  object-fit: cover;
}

.image-gallery-thumbnails-container{
  margin-top: 20px;
}

.image-gallery-slide .image-gallery-description{
  top: 0;
  bottom: auto;
  color: ${(props) => props.theme.black};
  background-color: ${(props) => props.theme.white};
  font-size: 10px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 100%;
  @media screen and (max-width: 767.9px) {
  font-size: 18px;
  }
  @media screen and (min-width: 768px) and (max-width: 999.9px) {
  font-size: 20px;
  }
  @media screen and (min-width: 1000px) {
  font-size: 24px;
  }
}

.image-gallery-content .image-gallery-slide .image-gallery-image{
  object-fit: cover;
  height: calc(100vh - 400px);
  
  @media screen and (min-width: 768px) and (max-width: 999.9px) {
  /* height: 700px; */
  padding-top: 40px;
  }
  @media screen and (min-width: 1000px) {
  /* height: 100vh; */
  padding-top: 40px;
  object-fit: cover;
  }
}

//-----add a file-----//
.input-file-container {
  position: relative;
  width: 156px;
} 

.js .input-file {
  position: absolute;
  top: 0; left: 0;
  width: 156px;
  opacity: 0;
  cursor: pointer;
}

.js .input-file:hover + .input-file-trigger,
.js .input-file:focus + .input-file-trigger,
.js .input-file-trigger:hover,
.js .input-file-trigger:focus {
  background: ${(props) => props.theme.accentBlue};
  color: ${(props) => props.theme.white};
  box-shadow: 1px -1px 10px -2px ${(props) => props.theme.blackOpacity} inset;
}

.file-return {
  margin: 0;
}
.file-return:not(:empty) {
  margin: 1em 0;
}
.js .file-return {
  font-style: italic;
  font-size: 0.7em;
  font-weight: 400;
  color: ${(props) => props.theme.black};
}
.js .file-return:not(:empty):before {
  content: " ";
  font-style: normal;
  font-weight: normal;
}

@media only screen and (min-device-width: 375px) {
  .header-wrapper {
    padding: 1rem;
  }
}

//-----swiper-----//
  .swiper-wrapper{
    width: 100%;
    /* padding: 20px; */

    @media only screen and (min-width: 1280px) {
      width: 100px;
    }
  }

  .swiper-slide, .swiper-slide-active{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    width: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .swiper-button-next::after {
  color: ${(props) => props.theme.accentGrey};
}

.swiper-button-prev::after {
  color: ${(props) => props.theme.accentGrey};
}

.swiper-pagination-bullet-active.swiper-pagination-bullet{
  background-color: ${(props) => props.theme.accentBlue}!important;
}
.swiper-pagination-bullet {
  background-color:${(props) => props.theme.accentRed}!important;
}

.containerJustifyEnd {
  justify-content: end;
  @media screen and (max-width: 768px) {
    justify-content: center;
  };
}

.containerJustifyStart {
  justify-content: start;
  @media screen and (max-width: 768px) {
    justify-content: center;
  };
}
#popup-root {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 45;

  width: 100vw;
  height: 100vh;

  opacity: 1;
  visibility: visible;
  display: flex;

  background-color: #0000006b;
  transition: opacity .3s linear 50ms, visibility .3s linear 50ms;
}

#popup-root {
  &.is-hide {
      pointer-events: none;
      opacity: 0;
      visibility: hidden;
      display: none;

      width: 0;
      height: 0;
  }
}
`;

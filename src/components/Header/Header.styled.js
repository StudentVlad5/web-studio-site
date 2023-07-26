import { keyframes, styled } from 'styled-components';
import { MdPlayCircleOutline } from 'react-icons/md';

const fadeInTopAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Header = styled.header`
  /* Якщо зробити так то хедер завжди буде зникати
   а при скролі зявлятись і на мобілці і на десктопі 
   display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s, transform 0.3s;
  z-index: 999;

  @media screen and (max-width: 1280px) {
    color: ${props => props.theme.black};
    background-color: ${props => props.theme.white};
  }
   */
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.white};

  @media screen and (max-width: 1279.9px) {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 45px;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    transition: opacity 0.3s, transform 0.3s;
    z-index: 999;
  }
`;

export const Logo = styled.p`
  color: ${props => props.theme.black};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  position: absolute;
  font-size: 25px;
  letter-spacing: -1.2px;

  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
  margin-left: 20px;

  @media screen and (min-width: 1280px) {
    position: fixed;
    font-size: 45px;
    letter-spacing: -3.2px;
    /* margin-top: 0;
    margin-left: 0; */
  }
`;

export const LogoBox = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const HeaderSvg = styled.svg`
  fill: currentColor;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
export const MovieIcon = styled(MdPlayCircleOutline)`
  position: fixed;
  left: 170px;
  top: 22px;
  width: 25px;
  height: 25px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    left: 180px;
    top: 20px;
    width: 30px;
    height: 30px;
  }
  @media screen and (min-width: 1280px) {
    left: 300px;
    top: 25px;
    width: 40px;
    height: 40px;
  }
`;

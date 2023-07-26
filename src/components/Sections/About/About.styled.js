import styled, { keyframes } from 'styled-components';

const fadeInLeftAnimation = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInRightAnimation = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fadeInBottomAnimation = keyframes`
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ContainerForAbout = styled.div`
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 1.5;
  width: 100%;
  overflow: hidden;
  color: ${props => props.theme.black};

  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

const ContainerForAboutForMobile = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 1.5;
  width: 100%;
  margin-bottom: 55px;
  overflow: hidden;
  color: ${props => props.theme.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    display: none;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

const ContainerForTeamForMobile = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 1.5;
  width: 100%;
  overflow: hidden;
  /* padding: 20px 30px; */
  @media screen and (min-width: 799.9px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

const ContainerForTeamForTablet = styled.div`
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 14px;
  line-height: 1.5;
  width: 100%;
  overflow: hidden;
  /* padding: 20px 30px; */
  @media screen and (min-width: 800px) and (max-width: 999.9px) {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
const ContainerForTeam = styled.div`
  display: none;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  line-height: 1.5;
  width: 100%;
  overflow: hidden;
  @media screen and (min-width: 1000px) {
    display: flex;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;
const ContainerForAboutItem = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-bottom: 40px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  color: ${props => props.theme.text};

  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  & > * {
    &:nth-child(2) {
      animation: ${fadeInRightAnimation} 0.5s ease-in both;
    }

    &:nth-child(1) {
      animation: ${fadeInLeftAnimation} 0.5s ease-in both;
    }
  }
`;
const ContainerForIcon = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  flex-direction: column;

  width: 100%;
  margin-bottom: 40px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  color: ${props => props.theme.text};

  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  & > * {
    &:nth-child(2) {
      animation: ${fadeInRightAnimation} 0.5s ease-in both;
    }

    &:nth-child(1) {
      animation: ${fadeInLeftAnimation} 0.5s ease-in both;
    }
  }
`;
const ContainerForIconText = styled.div`
  animation: ${fadeInBottomAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);
  margin-bottom: 40px;
  color: ${props => props.theme.text};
`;
const ContainerForIconTablet = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  flex-direction: column;
  width: 100%;

  overflow: hidden;

  @media screen and (min-width: 490px) {
    flex-direction: row;
  }
`;

const TitleTeam = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 24px;
  color: ${props => props.theme.black};
`;

const Img = styled.img`
  width: 45px;
  height: 45px;
  /* or to blue */
  filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
`;

const ImgForTeam = styled.img`
  width: 100%;
  height: 250px;
  @media screen and (min-width: 490px) {
    width: 250px;
    height: 357px;
  }
`;
const ImgForTeamColor = styled.img`
  display: block;
  position: relative;
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  transition: -webkit-transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  height: 250px;
  @media screen and (min-width: 490px) {
    width: 250px;
    height: 357px;
  }
`;

const ItemImgText = styled.div`
  width: 170px;
  height: 60px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.black};
`;
const PaddingItem = styled.p`
  padding: 16px;
`;

const ItemWrap = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  color: ${props => props.theme.text};
  width: 100%;
  overflow: hidden;
  margin-top: 30px;
  margin-bottom: 15px;
`;

const ImgWrap = styled.div`
  display: block;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 200px;
  height: 250px;
  @media screen and (min-width: 490px) {
    width: 250px;
    height: 357px;
  }
  &:hover ${ImgForTeamColor} {
    -webkit-transform: translateY(-100%);
    transform: translateY(-100%);
    opacity: 1;
  }
`;

const TitleItem = styled.h4`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 20px;
  letter-spacing: 4%;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme.black};

  margin-top: 15px;
  margin-bottom: 4px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const JobItem = styled.h5`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 4%;
  font-weight: 500;
  color: ${props => props.theme.grey};
  min-height: 42px;
`;

const SocialsList = styled.ul`
  display: flex;
  flex-direction: row;
`;

const SocialsListItem = styled.li`
  cursor: pointer;
  padding: 2px;
  color: ${props => props.theme.black};

  &:not(:last-child) {
    margin-right: 20px;
  }
  & > *:hover,
  & > *:focus {
    fill: ${props => props.theme.accentRed};
  }

  & > * {
    fill: ${props => props.theme.black};
  }
`;
const SocialsListLink = styled.a`
  cursor: pointer;
  padding: 2px;
  color: ${props => props.theme.black};

  & > *:hover,
  & > *:focus {
    fill: ${props => props.theme.accentRed};
  }

  & svg {
    fill: currentColor;
  }
`;

export {
  ContainerForAbout,
  ContainerForIcon,
  ContainerForIconText,
  Img,
  ItemImgText,
  PaddingItem,
  ContainerForTeam,
  ItemWrap,
  TitleItem,
  JobItem,
  SocialsList,
  SocialsListItem,
  ContainerForAboutForMobile,
  ContainerForIconTablet,
  ImgForTeam,
  ContainerForTeamForMobile,
  ContainerForTeamForTablet,
  TitleTeam,
  ContainerForAboutItem,
  ImgForTeamColor,
  ImgWrap,
  SocialsListLink,
};

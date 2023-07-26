import { keyframes, styled } from 'styled-components';
import { Number, Text } from '../Services/Services.styled';
import { Title } from 'components/baseStyles/CommonStyle.styled';

const flipInVerLeftAnimation = keyframes`
  0% {
    transform: rotateY(80deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
`;

const flipInVerRightAnimation = keyframes`
  0% {
    transform: rotateY(-80deg);
    opacity: 0;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
`;

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

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 35px;
`;

export const TitleHome = styled(Title)`
  line-height: 35px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    line-height: 65px;
  }
`;

export const ListBox = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: block;
  }
`;

export const ListBoxSwaper = styled.div`
  display: block;
  margin-top: 25px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const SwiperSvg = styled.svg`
  fill: ${props => props.theme.black};
  &:nth-child(1) {
    animation: ${flipInVerRightAnimation} 0.9s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  &:nth-child(2) {
    animation: ${flipInVerLeftAnimation} 0.9s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItemImg = styled.img`
  animation: ${flipInVerLeftAnimation} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  /* width: 200px;
  height: 150px; */
  width: 278px;
  height: 228px;
  @media screen and (min-width: 1280px) {
    width: 380px;
    height: 287px;
  }
`;

export const ListItemText = styled.p`
  display: flex;
  flex-wrap: wrap;
  /* width: 369px; */
  color: ${props => props.theme.blackOpacity};
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin-bottom: 85px;

  @media screen and (min-width: 768px) {
    font-size: 21px;
  }

  &:nth-child(1) {
    animation: ${fadeInRightAnimation} 0.5s ease-in both;
  }

  &:nth-child(2) {
    animation: ${fadeInLeftAnimation} 0.5s ease-in both;
    margin-top: 35px;
    margin-bottom: 0;
    text-align: end;
    margin-right: 60px;
  }

  & > * {
    font-weight: bold;
    background: linear-gradient(
      to left,
      rgba(65, 45, 183, 1),
      rgba(219, 47, 47, 1) 120%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

export const ListItemTextSwiper = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  width: 80%;
  color: ${props => props.theme.blackOpacity};
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;

  @media screen and (min-width: 768px) {
    font-size: 21px;
  }

  & > * {
    font-weight: bold;
    background: linear-gradient(
      to left,
      rgba(65, 45, 183, 1),
      rgba(219, 47, 47, 1) 120%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

export const ConclusionText = styled.p`
  display: flex;
  flex-wrap: wrap;
  margin-top: 35px;
  text-align: center;
  color: ${props => props.theme.blackOpacity};
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-bottom: 55px;
  animation: ${fadeInBottomAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1);

  @media screen and (min-width: 768px) {
    font-size: 35px;
    margin-bottom: 80px;

    & > * {
      font-size: 35px;
    }
  }

  & > * {
    font-weight: bold;
    background: linear-gradient(
      to left,
      rgba(65, 45, 183, 1),
      rgba(219, 47, 47, 1) 120%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

export const CompList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CompListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 45px;
  }
  &:nth-child(2) {
    text-align: -webkit-right;
  }
  &:nth-child(4) {
    text-align: -webkit-right;
  }
`;

export const ItemNumber = styled(Number)`
  font-size: 30px;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0;
  @media screen and (min-width: 768px) {
    font-size: 80px;
  }
`;

export const ItemTitle = styled.h3`
  margin-bottom: 15px;
  color: ${props => props.theme.black};
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    font-size: 25px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const ItemDiscr = styled(Text)`
  color: ${props => props.theme.text};
  width: 319px;
  text-align: left;

  @media screen and (min-width: 768px) {
    width: 600px;
  }
`;

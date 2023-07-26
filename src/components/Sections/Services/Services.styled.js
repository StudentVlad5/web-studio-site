import { keyframes, styled } from 'styled-components';

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

const trackingInExpandFwdAnimation = keyframes`
  0% {
    letter-spacing: -0.5em;
    transform: translateZ(-700px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    transform: translateZ(0);
    opacity: 1;
  }
`;

export const WrapperText = styled.div`
  /* margin-bottom: 55px; */
  margin-left: auto;
  margin-right: auto;

  /* @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  } */

  @media screen and (min-width: 1280px) {
    /* margin-bottom: 100px; */
    max-width: 1200px;
  }
`;

export const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 100px;
  }
`;

export const WrapperBoxSkills = styled(WrapperBox)`
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BoxSkills = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 34px;

  @media screen and (min-width: 768px) {
    width: 40%;
    margin-bottom: 0;
  }
`;

export const ListSkills = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  text-align: center;
  animation: ${fadeInRightAnimation} 0.5s ease-in both;

  @media screen and (min-width: 768px) {
    width: 40%;
    padding: 30px 0 0 0;
    gap: 30px;
  }

  & progress {
    width: 100%;
  }
`;

export const Subtitle = styled.h2`
  position: relative;
  margin: 30px 0;

  color: ${props => props.theme.heading};
  text-align: center;
  font-size: 26px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  animation: ${trackingInExpandFwdAnimation} 0.5s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 45px;
  }

  &::before {
    @media screen and (min-width: 768px) {
      position: absolute;
      content: '';
      top: -20px;
      left: 50px;

      width: 150px;
      height: 4px;

      border-radius: 2px;
      background: linear-gradient(
        rgba(65, 45, 183, 1),
        rgba(219, 47, 47, 1) 100%
      );
      -webkit-text-fill-color: transparent;
      color: transparent;
    }
  }
`;

export const SubtitleSkills = styled(Subtitle)`
  animation: ${fadeInTopAnimation} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
  &::before {
    display: none;
  }
`;

export const DescriptionSkills = styled.p`
  color: ${props => props.theme.text};
  text-align: center;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  animation: ${fadeInLeftAnimation} 0.5s ease-in both;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;

  color: ${props => props.theme.text};
  font-size: 14px;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.57px;
  text-transform: capitalize;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.text};
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  text-align: start;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const TextCenter = styled(Text)`
  text-align: center;
`;

export const TextSlider = styled(Text)`
  width: 70%;
  padding-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;

export const TableHeading = styled.th`
  display: flex;
  color: ${props => props.theme.black};
  text-align: center;
  font-size: 20px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 40px;
  }
`;

export const TableData = styled.td`
  padding-left: 10px;
  color: ${props => props.theme.text};
  font-size: 20px;
  font-family: 'Bungee', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  text-transform: uppercase;
  text-align: start;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    text-align: left;
  }

  @media screen and (min-width: 1280px) {
    font-size: 36px;
  }
`;

export const Step = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StepBenefits = styled(Step)`
  &:nth-child(2n) {
    margin-left: 50px;
  }
  @media screen and (min-width: 768px) {
    width: 50%;
    &:nth-child(2n) {
      margin-left: auto;
    }
  }
`;

export const Number = styled.span`
  font-size: 100px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -5px;
  text-transform: uppercase;

  background-color: rgba(0, 0, 0, 0.19);
  color: transparent;
  text-shadow: 1px 3px 0px rgba(255, 255, 255, 0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  /* background-color: ${props => props.theme.black}; */

  @media screen and (min-width: 768px) {
    font-size: 200px;
  }
`;

export const NumberSmall = styled(Number)`
  font-size: 48px;
  letter-spacing: -2px;

  @media screen and (min-width: 768px) {
    font-size: 96px;
  }
`;

export const Heading = styled.h3`
  margin-bottom: 15px;

  color: ${props => props.theme.black};
  text-align: center;
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

export const HeadingSmall = styled(Heading)`
  margin-bottom: 0;
  margin-left: 10px;
  text-align: start;

  @media screen and (min-width: 768px) {
    margin-left: 15px;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1280px) {
    font-size: 32px;
  }
`;

export const HeadingBox = styled.div`
  display: flex;
  align-items: center;
`;

export const ListBenefits = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const ListQuestions = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;

export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 80%;
  margin-bottom: 20px;
`;

export const DetailsButton = styled.button`
  padding: 0;

  color: ${props => props.theme.accentRed};
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: start;

  background-color: transparent;
  border: none;

  cursor: pointer;
`;

export const DetailsList = styled.ul`
  width: 100%;
`;

export const DetailsItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${props => props.theme.text};
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  text-align: start;

  & > svg {
    fill: ${props => props.theme.accentRed};
  }
`;
